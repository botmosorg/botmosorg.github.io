"use strict";

import { STATE } from "./state.js";

//const MAX_MAP_SIZE = 65536; // Should be enough space for a map in a 2D roguelike

export const CHUNK_SIZE = {
    "width": 16, // in tiles
    "height": 16
}
export const MAP_SIZE = CHUNK_SIZE // in chunks

export function tiles_create(type=null, options={}) {
    return {
        "type": type,
        "options": options
    }
}

export class Map {
    constructor(id, width_tiles, height_tiles, tiles=[]) {
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
        this._tiles[tileIndex] = tiles_create(tileType, options);
    }
}

export function maps_set_current(map_id) {
    STATE.currentMapId = map_id
}

export function maps_store(map) {
    STATE.maps[map.id] = map
}
