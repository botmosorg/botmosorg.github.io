"use strict";

import { MANIFEST } from "./manifest.js";
//import { ROT } from "../lib/rot.js"
import { STATE } from "./state.js";

export const MAP_SEED = 1337

//const MAX_MAP_SIZE = 65536; // Should be enough space for a map in a 2D roguelike

const CHUNK_SIZE = {
    "width": 16, // in tiles
    "height": 16
}
const MAP_SIZE = CHUNK_SIZE // in chunks

function _tiles_create(type=null, health=100, options={}) {
    return {
        "type": type,
        "health": health,
        "options": options
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
        return {};
    }

    setTile(x, y, tileType, options={}) {
        let tileIndex = y * this.widthTiles + x;
        this._tiles[tileIndex] = _tiles_create(tileType, 100, options);
    }
}

let _noise_skew = 55;
export function maps_create_overworld(seed=MAP_SEED) {
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

            tiles.push(_tiles_create(tileType));
        }
    }

    let map = new Map(
        "simplex=" + seed,
        MAP_SIZE.width * CHUNK_SIZE.width,
        MAP_SIZE.height * CHUNK_SIZE.height,
        tiles
    );

    map.setTile(126, 121, MANIFEST.tiles.portal, {mapId: "arena", x: 1, y: 0})

    return map;
}

export function maps_create_arena() {
    let rotMap = new ROT.Map.Arena(CHUNK_SIZE.width, CHUNK_SIZE.height);
    let tiles = [];
    rotMap.create(function(x, y, wall) {
        let tileType = wall ? MANIFEST.tiles.wall : MANIFEST.tiles.void;
        tiles[y*CHUNK_SIZE.width + x] = _tiles_create(tileType);
    })

    let map = new Map(
        "arena",
        CHUNK_SIZE.width,
        CHUNK_SIZE.height,
        tiles
    );

    map.setTile(1, 0, MANIFEST.tiles.portal, {mapId: "simplex=" + MAP_SEED, x: 126, y: 121});

    return map;
}

export function maps_set_current(map_id) {
    STATE.currentMapId = map_id
}

export function maps_store(map) {
    STATE.maps[map.id] = map
}
