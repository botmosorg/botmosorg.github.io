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

class Map {
    constructor(id, width_tiles, height_tiles, tiles=null) {
        this.id = id;
        this.widthTiles = width_tiles;
        this.heightTiles = height_tiles;
        this._tiles = tiles;
    }

    getTile(x, y) {
        if (x >= 0 && x < this.widthTiles
            && y >= 0 && y < this.heightTiles) {
            let tile_index = y * this.widthTiles + x;
            return this._tiles[tile_index];
        }
        return null;
    }

    setTile(x, y, tileType) {
        let tileIndex = y * this.widthTiles + x;
        this._tiles[tileIndex] = create_tile(tileType);
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

    let map = new Map(
        "simplex=" + seed,
        MAP_SIZE.width * CHUNK_SIZE.width,
        MAP_SIZE.height * CHUNK_SIZE.height,
        tiles
    )

    map.setTile(127, 125, MANIFEST.tiles.portal)

    return map;
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

export function _tiles_get(tiles, width_tiles, height_tiles, tile_x, tile_y) {

}

export function maps_set_current(map_id) {
    STATE.currentMapId = map_id
}

export function maps_store(map) {
    STATE.maps[map.id] = map
}


