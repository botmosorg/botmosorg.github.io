import * as ROT from "../lib/rot.js"
import { MANIFEST } from "./manifest";
import { CHUNK_SIZE, Map, MAP_SIZE, tiles_create } from "./map";
import { State } from "./state.js";

export const MAP_SEED = 1337

let _noise_skew = 55;
export function maps_create_planet(state: State, seed=MAP_SEED): State {
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

    map.seed = seed
    state.maps[mapId] = map;

    return state;
}
