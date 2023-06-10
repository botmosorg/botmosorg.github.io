"use strict";

import { MANIFEST } from "./manifest.js";
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
        this._cacheMovementMap = null
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
        this._cacheMovementMap = null;

        let tileIndex = y * this.widthTiles + x;
        this._tiles[tileIndex] = tiles_create(tileType, options);
    }

    asMovementMap() {
        if (this._cacheMovementMap !== null) {
            return this._cacheMovementMap;
        }

        let movementMap = new Array(this.heightTiles);

        for (let y=0; y < this.heightTiles; y++) {
            movementMap[y] = new Array(this.widthTiles);
            for (let x=0; x < this.widthTiles; x++) {
                let tile_index = y * this.widthTiles + x;
                let tile = this._tiles[tile_index];
                let tileType = tile.type;
                // 0 movable, 1 movement blocked
                movementMap[y][x] = 0;
                if (tileType === MANIFEST.tiles.rock
                    || tileType === MANIFEST.tiles.wall
                    || tileType === MANIFEST.tiles.weakwall) {
                    movementMap[y][x] = 1;
                }
            }
        }

        this._cacheMovementMap = movementMap;
        return movementMap;
    }
}

export function maps_set_current(mapId) {
    STATE.currentMapId = mapId
}

export function maps_store(map) {
    STATE.maps[map.id] = map
}

export function maps_get(mapId) {
    return STATE.maps[mapId]
}

export function maps_parse(mapString) {
    let lines = mapString.split(/\r?\n/)
    let metaCharacter = mapString[0]
    let mapId = ""
    let width = 0
    let height = 0
    let meta = {}
    let tiles = [];
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i]
        if (line.startsWith(metaCharacter)) {
            if (line.startsWith(metaCharacter + "!id")) {
                // Map id command
                mapId = line.slice(5)
            } else if (line.startsWith(metaCharacter + "!size")) {
                // Map size command
                let dims = line.split(" ").slice(1)
                width = Number(dims[0])
                height = Number(dims[1])
            } else if (line.startsWith(metaCharacter + "!")) {
                // Map character commands
                let character = line[2]
                let tileTypeName = line.slice(4)
                meta[character] = tileTypeName
            }
        } else {
            // Map payload
            for (let j = 0; j < line.length; j++) {
                let character = line[j];
                let tileTypeName = meta[character];
                let options = {}
                if (tileTypeName.startsWith("portal")) {
                    let portalComponents = tileTypeName.split(" ")
                    tileTypeName = "portal"
                    options.mapId = portalComponents[1]
                    options.x = Number(portalComponents[2])
                    options.y = Number(portalComponents[3])
                }
                tiles.push(tiles_create(MANIFEST.tiles[tileTypeName], options))
            }
        }
    }

    return new Map(
        mapId,
        width,
        height,
        tiles
    );
}
