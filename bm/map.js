"use strict";

import { MANIFEST } from "./manifest.js";
import { STATE } from "./state.js";

export const MAP_SEED = 1337

//const MAX_MAP_SIZE = 65536; // Should be enough space for a map in a 2D roguelike

const CHUNK_SIZE = {
    "width": 16, // in tiles
    "height": 16
}
const MAP_SIZE = CHUNK_SIZE // in chunks

function create_tile(type=null, health=100) {
    return {
        "type": type,
        "health": health
    }
}

let _noise_skew = 55;
export function create_map_overworld(seed=MAP_SEED) {
    ROT.RNG.setSeed(seed);
    let noise = new ROT.Noise.Simplex();
    let tiles = [];
    for (let tile_y=0; tile_y<CHUNK_SIZE.height*MAP_SIZE.height; tile_y++) {
        for (let tile_x=0; tile_x<CHUNK_SIZE.width*MAP_SIZE.width; tile_x++) {
            // Noise: water+none, plain+grass, plain+tree, mountain
            let noise_val = noise.get(
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

            tiles.push(create_tile(tileType));
        }
    }

    return {
        "id": "simplex=" + seed,
        "width_tiles": MAP_SIZE.width * CHUNK_SIZE.width,
        "height_tiles": MAP_SIZE.height * CHUNK_SIZE.height,
        "tiles": tiles,
        "getTile": function(x, y) {
            return _tiles_get(tiles, MAP_SIZE.width * CHUNK_SIZE.width, MAP_SIZE.height * CHUNK_SIZE.height, x, y);
        }
    }
}

export function create_map_arena() {
    let map = new ROT.Map.Arena(CHUNK_SIZE.width, CHUNK_SIZE.height);
    let tiles = [];
    map.create(function(x, y, wall) {
        let tileType = wall ? MANIFEST.tiles.wall : MANIFEST.tiles.void;
        tiles[y*CHUNK_SIZE.width + x] = create_tile(tileType);
    })

    return {
        "id": "arena",
        "width_tiles": CHUNK_SIZE.width,
        "height_tiles": CHUNK_SIZE.height,
        "tiles": tiles,
        "getTile": function(x, y) {
            return _tiles_get(tiles, CHUNK_SIZE.width, CHUNK_SIZE.height, x, y);
        }
    }
}

export function map_get(map, tile_x, tile_y) {
    if (tile_x >= 0 && tile_x < map.width_tiles
        && tile_y >= 0 && tile_y < map.height_tiles) {
        let tile_index = tile_y * map.width_tiles + tile_x;
        return map.tiles[tile_index];
    }
    return null;
}
export function _tiles_get(tiles, width_tiles, height_tiles, tile_x, tile_y) {
    if (tile_x >= 0 && tile_x < width_tiles
        && tile_y >= 0 && tile_y < height_tiles) {
        let tile_index = tile_y * width_tiles + tile_x;
        return tiles[tile_index];
    }
    return null;
}

export function maps_set_current(map_id) {
    STATE.currentMapId = map_id
}

export function maps_store(map) {
    STATE.maps[map.id] = map
}


