import { ais_destroy } from "./ai";
import { BOTMOS_OPTIONS } from "./config";
import { entities_destroy, entities_get_by } from "./entity";
import { items_destroy, items_get_by } from "./item";
import { MANIFEST, Tile as TileType } from "./manifest";
import { spawn, SpawnCommand } from "./spawn";
import { State } from "./state";

//const MAX_MAP_SIZE = 65536; // Should be enough space for a map in a 2D roguelite

export const CHUNK_SIZE = {
    "width": 16, // in tiles
    "height": 16
}
export const MAP_SIZE = CHUNK_SIZE // in chunks

interface Tile {
    type: TileType,
    options: object
}

export function tiles_create(type: TileType, options={}): Tile {
    return {
        "type": type,
        "options": options
    }
}

export function tiles_is_space_tile(tile: Tile): boolean {
    return tile.type.name.startsWith("space")
}

export function maps_create_all_manual(state: State): State {
    for (let mapId in MANIFEST.maps) {
        let map = maps_parse(MANIFEST.maps[mapId])
        state.maps[mapId] = map

        for (const spawnCommand of map._spawnCommands) {
            state = spawn(state, spawnCommand)
        }
        map._spawnCommands = []
    }

    return state
}

export function maps_destroy(state: State, mapId: string): State {
    const items = items_get_by(state, mapId)
    for (let i=0; i<items.length; i++) {
        const item = items[i]
        state = items_destroy(state, item.id)
    }

    const entities = entities_get_by(state, mapId)
    for (let i=0; i<entities.length; i++) {
        const entity = entities[i]
        state = entities_destroy(state, entity.id)
        state = ais_destroy(state, entity.id)
    }

    state.maps[mapId] = undefined
    delete state.maps[mapId]

    return state
}

export class Map {
    id: string;
    widthTiles: number;
    heightTiles: number;
    seed: number | null;
    private _tiles: Tile[];
    private _cacheMovementMap: any | null;
    _spawnCommands: SpawnCommand[];
    _tvCount: number;
    tvMessage: string | null;

    constructor(id: string, width_tiles: number, height_tiles: number, tiles: Tile[]=[]) {
        this.id = id;
        this.widthTiles = width_tiles;
        this.heightTiles = height_tiles;
        this.seed = null
        this._tiles = tiles;
        this._cacheMovementMap = null
        this._spawnCommands = []
        this._tvCount = 0
        this.tvMessage = null
    }

    getTile(x: number, y: number): Tile | any {
        if (x >= 0 && x < this.widthTiles
            && y >= 0 && y < this.heightTiles) {
            let tile_index = y * this.widthTiles + x;
            return this._tiles[tile_index];
        }

        return {};
    }

    setTile(x: number, y: number, tileType: TileType, options={}): Tile {
        this._cacheMovementMap = null

        let tileIndex = y * this.widthTiles + x
        const oldTile = this._tiles[tileIndex]
        this._tiles[tileIndex] = tiles_create(tileType, options)

        return oldTile
    }

    setTvMessage(message: string) {
        if (!!this._tvCount) {
            let tvIndex = 0;
            for (const tile of this._tiles) {
                if (tile.type === MANIFEST.tiles.tv && tvIndex < message.length) {
                    tile.options['sign'] = message[tvIndex]
                    tvIndex++
                }
            }
            if (message === "") {
                message = null
            }
            this.tvMessage = message
        }
    }

    pasteOnto(map: Map, xOffset: number=0, yOffset: number=0): Map {
        for (let j=0; j<map.heightTiles; j++) {
            for (let i=0; i<map.widthTiles; i++) {
                const tile = map.getTile(i, j)
                if (tile.type !== MANIFEST.tiles.voidtrue) {
                    this.setTile(i + xOffset, j + yOffset, tile.type, tile.options)
                }
            }
        }

        return this
    }

    /**
     * Only do this for square maps!
     *
     * @returns This map but in circular shape
     */
    circular(): Map {
        let radius = Math.floor(Math.min(this.widthTiles, this.heightTiles) / 2)

        for(let y=-radius; y<=radius; y++) {
            for(let x=-radius; x<=radius; x++) {
                if(x*x+y*y >= radius*radius) {
                    this.setTile(x + radius - 1, y + radius - 1, MANIFEST.tiles.voidtrue)
                }
            }
        }

        return this
    }

    /**
     * Down-samples this map to a smaller version, e.g. to view the map from space.
     *
     * @param targetWidthInTiles Target width of the new map in tiles
     * @param targetHeightInTiles Target height of the new map in tiles
     * @returns Transient down-sampled map
     */
    sample(targetWidthInTiles: number, targetHeightInTiles: number): Map {
        const regionWidth = Math.floor(this.widthTiles / targetWidthInTiles)
        const regionHeight = Math.floor(this.heightTiles / targetHeightInTiles)

        const newTiles = []

        for (let yRegion=0; yRegion < targetHeightInTiles; yRegion++) {
            for (let xRegion=0; xRegion < targetWidthInTiles; xRegion++) {
                const tileType2Occurrences = {}

                for (let y=0; y < regionHeight; y++) {
                    for (let x=0; x < regionWidth; x++) {
                        const tile = this.getTile(xRegion * regionWidth + x, yRegion * regionHeight + y)

                        if (!!tileType2Occurrences[tile.type.name]) {
                            tileType2Occurrences[tile.type.name] += 1
                        } else {
                            tileType2Occurrences[tile.type.name] = 1
                        }
                    }
                }

                let mostOccurringTileTypeName = ""
                let mostOccurrences = 0
                for (const [key, value] of Object.entries<number>(tileType2Occurrences)) {
                    if (value > mostOccurrences) {
                        mostOccurringTileTypeName = key
                        mostOccurrences = value
                    }
                }

                const newTileTypeName = "space" + mostOccurringTileTypeName
                const newTileType = MANIFEST.tiles[newTileTypeName] || MANIFEST.tiles.spacevoid
                const options = { // For landing from space
                    'mapId': this.id,
                    'x': xRegion * regionWidth,
                    'y': yRegion * regionHeight
                }

                newTiles.push(tiles_create(newTileType, options))
            }
        }

        return new Map("__sampled_" + targetWidthInTiles + "_" + targetHeightInTiles + "_" + this.id, targetWidthInTiles, targetHeightInTiles, newTiles);
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
                    || tileType === MANIFEST.tiles.portalclosed
                    || tileType === MANIFEST.tiles.tv
                    || tileType.name.startsWith("wall")) {
                    movementMap[y][x] = 1;
                }
            }
        }

        this._cacheMovementMap = movementMap;
        return movementMap;
    }
}

export function maps_parse(mapString: string): Map {
    let lines = mapString.split(/\r?\n/)
    let metaCharacter = mapString[0]
    let mapId = ""
    let width = 0
    let height = 0
    let meta = {}
    let spawnCommands: SpawnCommand[] = [];
    let tiles: any[] = [];
    let tvCount = 0;
    let tvMessage = ""
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
            } else if (line.startsWith(metaCharacter + "!spawn")) {
                // Spawn command, must come somewhere after map id command
                let argumentArray = line.split(" ").slice(1)
                let options = {}
                if (argumentArray.length > 3) {
                    let optionsArray = argumentArray.slice(3)
                    for (const option of optionsArray) {
                        const keyValue = option.split("=")
                        options[keyValue[0]] = keyValue[1]
                    }
                }
                spawnCommands.push(new SpawnCommand(mapId, Number(argumentArray[0]), Number(argumentArray[1]), argumentArray[2], options))

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
                if (BOTMOS_OPTIONS.debug && !!!tileTypeName) {
                    console.log("DEBUG Broken map: " + mapId)
                }
                let components = tileTypeName.split(" ")
                let options = {}
                if (tileTypeName.startsWith("portal ")
                        || tileTypeName.startsWith("portalhidden ")
                        || tileTypeName.startsWith("portallauncher ")
                        || tileTypeName.startsWith("portalstart")) {
                    tileTypeName = components[0]
                    options['mapId'] = components[1]
                    options['x'] = Number(components[2])
                    options['y'] = Number(components[3])
                }
                if (tileTypeName.startsWith("wall ") && components.length >= 2) {
                    tileTypeName = "wall"
                    options['sign'] = components[1]
                }
                if (tileTypeName.startsWith("terminal ")) {
                    tileTypeName = "terminal"
                    if (components.length >= 2) {
                        options['screen'] = components[1]
                    }
                }
                if (tileTypeName.startsWith("tv ") && components.length >= 2) {
                    tileTypeName = "tv"
                    if (components.length === 3) {
                        tvMessage = components[2]
                    }
                    tvCount++
                }
                tiles.push(tiles_create(MANIFEST.tiles[tileTypeName], options))
            }
        }
    }

    if (BOTMOS_OPTIONS.debug && !(tvCount === 0 || tvCount === 12)) {
        console.log("DEBUG Broken map: " + mapId + " (invalid TV size " + tvCount + ", allowed are 0 or 12 characters per map)")
    }

    const createdMap = new Map(
        mapId,
        width,
        height,
        tiles
    );

    createdMap._tvCount = tvCount;
    createdMap.setTvMessage(tvMessage);
    createdMap._spawnCommands = spawnCommands;

    return createdMap;
}
