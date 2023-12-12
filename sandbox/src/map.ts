import { MANIFEST, Tile } from "./manifest";

//const MAX_MAP_SIZE = 65536; // Should be enough space for a map in a 2D roguelite

export const CHUNK_SIZE = {
    "width": 16, // in tiles
    "height": 16
}
export const MAP_SIZE = CHUNK_SIZE // in chunks

export function tiles_create(type: Tile, options={}) {
    return {
        "type": type,
        "options": options
    }
}

export class Map {
    id: string;
    widthTiles: number;
    heightTiles: number;
    private _tiles: any[];
    private _cacheMovementMap: any | null;

    constructor(id: string, width_tiles: number, height_tiles: number, tiles: any[]=[]) {
        this.id = id;
        this.widthTiles = width_tiles;
        this.heightTiles = height_tiles;
        this._tiles = tiles;
        this._cacheMovementMap = null
    }

    getTile(x: number, y: number) {
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
        if (!!this._cacheMovementMap) {
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

export function maps_parse(mapString: string) {
    let lines = mapString.split(/\r?\n/)
    let metaCharacter = mapString[0]
    let mapId = ""
    let width = 0
    let height = 0
    let meta = {}
    let tiles: any[] = [];
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
                if (tileTypeName.startsWith("portal ")) {
                    let portalComponents = tileTypeName.split(" ")
                    tileTypeName = "portal"
                    options['mapId'] = portalComponents[1]
                    options['x'] = Number(portalComponents[2])
                    options['y'] = Number(portalComponents[3])
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
