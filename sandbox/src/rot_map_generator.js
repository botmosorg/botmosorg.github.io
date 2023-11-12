"use strict";

import * as ROT from "../lib/rot.js"

import { MANIFEST } from "./manifest.js";
import { CHUNK_SIZE, Map, MAP_SIZE, tiles_create } from "./map.js";

export const MAP_SEED = 1337

let _noise_skew = 55;
export function maps_create_overworld(seed=MAP_SEED) {
    ROT.RNG.setSeed(seed);
    let rot_noise = new ROT.Noise.Simplex();
    let tiles = [];
    for (let tile_y=0; tile_y<CHUNK_SIZE.height*MAP_SIZE.height; tile_y++) {
        for (let tile_x=0; tile_x<CHUNK_SIZE.width*MAP_SIZE.width; tile_x++) {
            // Noise: water+none, plain+grass, plain+tree, mountain
            let noise_val = rot_noise.get(
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

            tiles.push(tiles_create(tileType));
        }
    }

    let map = new Map(
        "simplex=" + seed,
        MAP_SIZE.width * CHUNK_SIZE.width,
        MAP_SIZE.height * CHUNK_SIZE.height,
        tiles
    );

    map.setTile(126, 121, MANIFEST.tiles.portal, {mapId: "preloader", x: 0, y: 2})

    return map;
}

export function maps_create_arena() {
    let rotMap = new ROT.Map.Arena(CHUNK_SIZE.width, CHUNK_SIZE.height);
    let tiles = [];
    rotMap.create(function(x, y, wall) {
        let tileType = wall ? MANIFEST.tiles.wall : MANIFEST.tiles.void;
        tiles[y*CHUNK_SIZE.width + x] = tiles_create(tileType);
    })

    let map = new Map(
        "arena",
        CHUNK_SIZE.width,
        CHUNK_SIZE.height,
        tiles
    );

    map.setTile(1, 0, MANIFEST.tiles.portal, {mapId: "preloader", x: 15, y: 2});

    return map;
}
