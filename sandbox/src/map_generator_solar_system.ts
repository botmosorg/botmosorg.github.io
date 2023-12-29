import { MANIFEST, Tile } from "./manifest";
import { Map, tiles_create } from "./map";
import { State } from "./state";

const MAP_SEED = 1337

export function maps_create_solar_system(state: State, seed: number=MAP_SEED): State {
    const mapWidth = 256
    const mapHeight = 256

    const tiles = []
    for (let i=0; i < mapWidth*mapHeight; i++) {
        tiles.push(tiles_create(MANIFEST.tiles.void))
    }

    const mapId = "solarsystem=" + seed
    let map = new Map(
        mapId,
        mapWidth,
        mapHeight,
        tiles
    );
    state.maps[mapId] = map

    _circle(map, 127, 127, 126, MANIFEST.tiles.sun)

    return state
}

// Based on https://rosettacode.org/wiki/Bitmap/Midpoint_circle_algorithm#Python
function _circle(map: Map, x0: number, y0: number, radius: number, tileType: Tile): Map {
    let f = 1 - radius
    let ddf_x = 1
    let ddf_y = -2 * radius
    let x = 0
    let y = radius

    map.setTile(x0, y0 + radius, tileType)
    map.setTile(x0, y0 - radius, tileType)
    map.setTile(x0 + radius, y0, tileType)
    map.setTile(x0 - radius, y0, tileType)

    while (x < y) {
        if (f >= 0) {
            y -= 1
            ddf_y += 2
            f += ddf_y
        }
        x += 1
        ddf_x += 2
        f += ddf_x

        map.setTile(x0 + x, y0 + y, tileType)
        map.setTile(x0 - x, y0 + y, tileType)
        map.setTile(x0 + x, y0 - y, tileType)
        map.setTile(x0 - x, y0 - y, tileType)
        map.setTile(x0 + y, y0 + x, tileType)
        map.setTile(x0 - y, y0 + x, tileType)
        map.setTile(x0 + y, y0 - x, tileType)
        map.setTile(x0 - y, y0 - x, tileType)
    }

    return map
}

function _fill(map: Map, x: number, y: number, tileType: Tile): Map {


    return map
}