import * as ROT from "../lib/rot.js"
import { entities_create } from "./entity";
import { items_create } from "./item";

import { MANIFEST } from "./manifest";
import { CHUNK_SIZE, Map, MAP_SIZE, tiles_create } from "./map";
import { State } from "./state.js";

export const MAP_SEED = 1337

let _noise_skew = 55;
export function maps_create_overworld(state: State, seed=MAP_SEED): State {
    ROT.RNG.setSeed(seed);
    let rot_noise = new ROT.Noise.Simplex();
    let tiles = [];
    for (let tile_y=0; tile_y<CHUNK_SIZE.height*MAP_SIZE.height; tile_y++) {
        for (let tile_x=0; tile_x<CHUNK_SIZE.width*MAP_SIZE.width; tile_x++) {
            // Noise: water+none, plain+grass, plain+tree, mountain
            let noise_val = rot_noise.get(
                tile_x / _noise_skew,
                tile_y / _noise_skew
            );

            let tileType;
            if (noise_val <= -0.5) { // water
                tileType = MANIFEST.tiles.water;
            } else if (noise_val <= 0) { // grass
                tileType = MANIFEST.tiles.void;
            } else if (noise_val < 0.5) { // tree
                tileType = MANIFEST.tiles.tree;
            } else { // mountain
                tileType = MANIFEST.tiles.rock;
            }

            tiles.push(tiles_create(tileType));
        }
    }

    const mapId = "simplex=" + seed
    let map = new Map(
        mapId,
        MAP_SIZE.width * CHUNK_SIZE.width,
        MAP_SIZE.height * CHUNK_SIZE.height,
        tiles
    );

    state.maps[mapId] = map;

    if (seed === 1337) {
        //map.setTile(126, 121, MANIFEST.tiles.portal, {mapId: "bot_elevator", x: 11, y: 47})
        state = entities_create(state, "npc0", MANIFEST.entities.Pioneer, "simplex="+MAP_SEED, 130, 127, {faction: MANIFEST.factions.Spirits})
        state = entities_create(state, "npc1", MANIFEST.entities.Pioneer, "simplex="+MAP_SEED, 124, 127, {faction: MANIFEST.factions.Spirits})
        state = items_create(state, MANIFEST.items.battery, "simplex="+MAP_SEED, 127, 130)
    }

    return state;
}

export function maps_create_arena(state: State): State {
    let rotMap = new ROT.Map.Arena(CHUNK_SIZE.width, CHUNK_SIZE.height);
    let tiles = [];
    rotMap.create(function(x, y, wall) {
        let tileType = wall ? MANIFEST.tiles.wall : MANIFEST.tiles.void;
        tiles[y*CHUNK_SIZE.width + x] = tiles_create(tileType);
    })

    let map = new Map(
        "arena",
        CHUNK_SIZE.width,
        CHUNK_SIZE.height,
        tiles
    );

    map.setTile(1, 0, MANIFEST.tiles.portal, {mapId: "bot_station", x: 26, y: 7});

    state.maps["arena"] = map

    state = entities_create(state, "enemy0", MANIFEST.entities.Cleaner, "arena", 8, 8, {faction: MANIFEST.factions.Pyrates, ai: MANIFEST.ais.aggrorange})
    state = entities_create(state, "enemy1", MANIFEST.entities.Cleaner, "arena", 9, 8, {faction: MANIFEST.factions.Pyrates, ai: MANIFEST.ais.aggrorange})
    state = entities_create(state, "enemy2", MANIFEST.entities.Cleaner, "arena", 11, 11, {faction: MANIFEST.factions.Pyrates, ai: MANIFEST.ais.aggrorange})
    state = entities_create(state, "enemy3", MANIFEST.entities.Cleaner, "arena", 6, 6, {faction: MANIFEST.factions.Pyrates, ai: MANIFEST.ais.aggrorange})
    state = entities_create(state, "enemy4", MANIFEST.entities.Cleaner, "arena", 12, 12, {faction: MANIFEST.factions.Pyrates, ai: MANIFEST.ais.aggrorange})
    state = items_create(state, MANIFEST.items.energy, "arena", 7, 7)
    state = items_create(state, MANIFEST.items.battery, "arena", 14, 14)

    return state;
}
