import { MANIFEST, Tile } from "./manifest";
import { Map, tiles_create } from "./map";
import { RNG } from "./rng";
import { maps_create_overworld } from "./rot_map_generator";
import { State } from "./state";
import { range } from "./util";

const MAP_SEED = 1337

export function maps_create_solar_system(state: State, seed: number=MAP_SEED): State {
    let solarsystem = _emptyMap(1024, 1024, MANIFEST.tiles.void)
    solarsystem.id = "solarsystem=" + seed
    state.maps[solarsystem.id] = solarsystem

    const rng = new RNG(seed)
    const numberOfPlanets = rng.getItem([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    let consumedRadius = 64 + 64 // Sun + some padding
    let leftoverRadius = 512 - consumedRadius
    const radiusPerPlanet = Math.floor(leftoverRadius / numberOfPlanets)
    //console.log("# Planets: " + numberOfPlanets)

    solarsystem = _randomizeVoidBackground(solarsystem, rng)

    let sun = _emptyMap(128, 128, MANIFEST.tiles.voidtrue)
    _circle(sun, 63, 63, 62, MANIFEST.tiles.sun)
    _fill(sun, 63, 63, MANIFEST.tiles.sun)
    solarsystem.pasteOnto(sun, 512 - 64, 512 - 64)

    for (let radius=consumedRadius; radius < 512; radius+=radiusPerPlanet) {
        let xPlanetCenter = rng.getItem([-1, 1]) * rng.getItem(range(radius))
        let yPlanetCenter = rng.getItem([-1, 1]) * Math.floor(Math.sqrt(radius * radius - xPlanetCenter * xPlanetCenter))
        xPlanetCenter += 512
        yPlanetCenter += 512

        const planetMapSize = rng.getItem([16, 24, 32])
        const planetMapSizeHalf = Math.floor(planetMapSize / 2) - 1
        state = maps_create_overworld(state, seed)
        const planet = state.maps["simplex=" + seed].sample(planetMapSize, planetMapSize).circular()
        /*
        let planet = _emptyMap(planetMapSize, planetMapSize, MANIFEST.tiles.voidtrue)
        const tileType = rng.getItem([MANIFEST.tiles.spacerock, MANIFEST.tiles.spacetree, MANIFEST.tiles.spacewater])
        _circle(planet, planetMapSizeHalf, planetMapSizeHalf, planetMapSizeHalf, tileType)
        _fill(planet, planetMapSizeHalf, planetMapSizeHalf, tileType)
        */
        solarsystem.pasteOnto(planet, xPlanetCenter - (planetMapSizeHalf + 1), yPlanetCenter - (planetMapSizeHalf + 1))
        seed++
        //console.log("PASTED! " + xPlanetCenter + " " + yPlanetCenter)
    }

    // TODO sampling test
    /*
    solarsystem.pasteOnto(state.maps["simplex=1337"].sample(16, 16).circular())
    solarsystem.pasteOnto(state.maps["simplex=1337"].sample(24, 24).circular(), 0, 17)
    solarsystem.pasteOnto(state.maps["simplex=1337"].sample(32, 32).circular(), 0, 42)
    solarsystem.pasteOnto(state.maps["simplex=1337"].sample(128, 128).circular(), 0, 75)
    solarsystem.pasteOnto(state.maps["simplex=1337"].sample(256, 256).circular(), 0, 204)
    */

    // Bot station
    solarsystem.setTile(584, 401, MANIFEST.tiles.portal, {mapId: "bot_elevator", x: 11, y: 47})
    solarsystem.setTile(584, 400, MANIFEST.tiles.wall)
    solarsystem.setTile(583, 400, MANIFEST.tiles.wall)
    solarsystem.setTile(585, 400, MANIFEST.tiles.wall)
    solarsystem.setTile(584, 399, MANIFEST.tiles.wall)
    solarsystem.setTile(583, 399, MANIFEST.tiles.wall)
    solarsystem.setTile(585, 399, MANIFEST.tiles.wall)
    solarsystem.setTile(584, 398, MANIFEST.tiles.wall)
    solarsystem.setTile(583, 398, MANIFEST.tiles.wall)
    solarsystem.setTile(585, 398, MANIFEST.tiles.wall)

    return state
}

function _emptyMap(widthTiles: number, heightTiles: number, tileType: Tile): Map {
    const tiles = []
    for (let i=0; i < widthTiles*heightTiles; i++) {
        tiles.push(tiles_create(tileType))
    }

    const mapId = "__temp"
    const map = new Map(
        mapId,
        widthTiles,
        heightTiles,
        tiles
    );

    return map
}

function _randomizeVoidBackground(map: Map, rng: RNG): Map {
    for (let j=0; j < map.heightTiles; j++) {
        for (let i=0; i < map.widthTiles; i++) {
            if (rng.getPercentage() <= 1) {
                map.setTile(i, j, rng.getItem([MANIFEST.tiles.spacevoidstarwhite, MANIFEST.tiles.spacevoidstaryellow]))
            }
        }
    }

    return map
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

// Based on https://rosettacode.org/wiki/Flood_fill#Python
function _fill(map: Map, x: number, y: number, tileType: Tile): Map {
    const xsize = map.widthTiles
    const ysize = map.heightTiles

    const Q = []
    Q.push({x: x, y: y})

    let node: {x: number, y: number} | undefined = undefined;
    while (typeof(node = Q.shift()) !== 'undefined') {
        let W = node
        let E = node
        if (node.x + 1 < xsize) {
            E = {x: node.x + 1, y: node.y}
        }

        // Move west until tileType matches
        while (map.getTile(W.x, W.y).type !== tileType) {
            map.setTile(W.x, W.y, tileType)
            if (W.y + 1 < ysize) {
                if (map.getTile(W.x, W.y + 1).type !== tileType) {
                    Q.push({x: W.x, y: W.y + 1})
                }
            }
            if (W.y - 1 >= 0) {
                if (map.getTile(W.x, W.y - 1).type !== tileType) {
                    Q.push({x: W.x, y: W.y - 1})
                }
            }
            if (W.x - 1 >= 0) {
                W.x -= 1
            } else {
                break
            }
        }

        // Move east until tileType matches
        while (map.getTile(E.x, E.y).type !== tileType) {
            map.setTile(E.x, E.y, tileType)
            if (E.y + 1 < ysize) {
                if (map.getTile(E.x, E.y + 1).type !== tileType) {
                    Q.push({x: E.x, y: E.y + 1})
                }
            }
            if (E.y - 1 >= 0) {
                if (map.getTile(E.x, E.y - 1).type !== tileType) {
                    Q.push({x: E.x, y: E.y - 1})
                }
            }
            if (E.x + 1 < xsize) {
                E.x += 1
            } else {
                break
            }
        }
    }

    return map
}