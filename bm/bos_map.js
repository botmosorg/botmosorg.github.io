const MAP_SEED = 1337

const GROUNDS = {
    "plain":0,
    "water":1,
    "mountain":2
}
const STRUCTURES = {
    "none":0,
    "wall":1,
    "grass":2,
    "bush":3,
    "tree":4,
    "portal":5
}
const LEVELS = {
    "ground":0,
    "low":-1,
    "high":1
}

const CHUNK_SIZE = {
    "width": 16, // in tiles
    "height": 16
}
const MAP_SIZE = CHUNK_SIZE // in chunks

function create_tile(
    ground=0,
    structure=0, // Any
    level=0      // Height
    ) {
    return {
        "ground": ground,
        "structure": structure,
        "level": level
    }
}

function create_chunk(tiles) {
    return {
        "width": CHUNK_SIZE.width,
        "height": CHUNK_SIZE.height,
        "tiles": tiles
    }
}

function chunk_get(chunk, tile_x, tile_y) {
    return chunk.tiles[tile_y*CHUNK_SIZE.width+tile_x]
}

var _noise_skew = 55
function create_map(seed=MAP_SEED) {
    ROT.RNG.setSeed(seed)
    var noise = new ROT.Noise.Simplex()
    var chunks = []
    var tiles = []
    for (var tile_y=0; tile_y<CHUNK_SIZE.height*MAP_SIZE.height; tile_y++) {
        for (var tile_x=0; tile_x<CHUNK_SIZE.width*MAP_SIZE.width; tile_x++) {
            // Noise: water+none, plain+grass, plain+tree, mountain
            var noise_val = noise.get(
                tile_x / _noise_skew,
                tile_y / _noise_skew
            )

            var ground = 0
            var structure = 0
            if (noise_val <= -0.5) {
                ground = GROUNDS.water
                structure = STRUCTURES.none
            } else if (noise_val <= 0) {
                ground = GROUNDS.plain
                structure = STRUCTURES.grass
            } else if (noise_val < 0.5) {
                ground = GROUNDS.plain
                structure = STRUCTURES.tree
            } else {
                ground = GROUNDS.mountain
                structure = STRUCTURES.none
            }

            tiles.push(create_tile(ground, structure, LEVELS.ground))
        }
    }

    return {
        "id": "simplex=" + seed,
        "width_tiles": MAP_SIZE.width * CHUNK_SIZE.width,
        "height_tiles": MAP_SIZE.height * CHUNK_SIZE.height,
        "tiles": tiles
    }
}

function map_create_arena() {
    var map = new ROT.Map.Arena(CHUNK_SIZE.width, CHUNK_SIZE.height)
    var tiles = []
    map.create(function(x, y, wall) {
        var ground = GROUNDS.plain
        var structure = wall ? STRUCTURES.wall : STRUCTURES.none
        tiles[y*CHUNK_SIZE.width + x] = create_tile(ground, structure, LEVELS.ground)
    })

    var chunks = []
    chunks.push(create_chunk(tiles))
    return {
        "id": "arena",
        "width_tiles": CHUNK_SIZE.width,
        "height_tiles": CHUNK_SIZE.height,
        "tiles": tiles
    }
}

function map_get(map, tile_x, tile_y) {
    if (tile_x >= 0 && tile_x < map.width_tiles
        && tile_y >= 0 && tile_y < map.height_tiles) {
        var tile_index = tile_y * map.width_tiles + tile_x
        return map.tiles[tile_index]
    }
    return null
}

var MAPS = {
    "current": ""
}

function maps_set_current(map_id) {
    MAPS["current"] = map_id
}

function maps_store(map) {
    MAPS[map.id] = map
}

maps_store(map_create_arena())
maps_store(create_map())
maps_set_current("simplex="+MAP_SEED)
//maps_set_current("arena")
