import * as ROT from "../lib/rot.js"
import { entities_create } from "./entity";
import { items_create } from "./item";

import { MANIFEST } from "./manifest";
import { CHUNK_SIZE, Map, MAP_SIZE, tiles_create } from "./map";
import { RNG } from "./rng.js";
import { State } from "./state.js";

export const MAP_SEED = 1337

let _noise_skew = 55;
export function maps_create_overworld(state: State, seed=MAP_SEED): State {
    ROT.RNG.setSeed(seed);
    let rot_noise = new ROT.Noise.Simplex();
    const mapWidthInTiles = CHUNK_SIZE.width*MAP_SIZE.width
    const mapHeightInTiles = CHUNK_SIZE.height*MAP_SIZE.height
    let tiles = [];
    for (let tile_y=0; tile_y<mapHeightInTiles; tile_y++) {
        for (let tile_x=0; tile_x<mapWidthInTiles; tile_x++) {
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
        mapWidthInTiles,
        mapHeightInTiles,
        tiles
    );

    state.maps[mapId] = map;

    if (seed === 1337) {
        //map.setTile(126, 121, MANIFEST.tiles.portal, {mapId: "bot_elevator", x: 11, y: 47})
        state = entities_create(state, "batteryvalkyrie0", MANIFEST.entities.Valkyrie, "simplex="+MAP_SEED, 130, 127, {faction: MANIFEST.factions.Spirits})
        state = entities_create(state, "batteryvalkyrie1", MANIFEST.entities.Valkyrie, "simplex="+MAP_SEED, 124, 127, {faction: MANIFEST.factions.Spirits})
        state = items_create(state, MANIFEST.items.battery, "simplex="+MAP_SEED, 127, 130)
    } else {
        // Spawn entities and items randomly
        const rng = new RNG(seed)
        for (let tile_y=0; tile_y<mapHeightInTiles; tile_y++) {
            for (let tile_x=0; tile_x<mapWidthInTiles; tile_x++) {
                // Noise: water+none, plain+grass, plain+tree, mountain
                const tile = map.getTile(tile_x, tile_y)
                if (rng.getPercentage() <= 1 && (tile.type === MANIFEST.tiles.void || tile.type === MANIFEST.tiles.tree)) {
                    const toGenerate = rng.getItem(["pioneer", "junk", "matter"])
                    switch (toGenerate) {
                        case "pioneer":
                            state = entities_create(state, map.id + "_pioneer_" + tile_x + "_" + tile_y, MANIFEST.entities.Pioneer, map.id, tile_x, tile_y, { faction: MANIFEST.factions.Pyrates, ai: MANIFEST.ais.aggrorange })
                            break
                        case "junk":
                            state = items_create(state, MANIFEST.items.junk, mapId, tile_x, tile_y)
                            break
                        case "matter":
                            state = items_create(state, MANIFEST.items.matter, mapId, tile_x, tile_y)
                            break
                    }
                }
            }
        }
    }

    return state;
}
