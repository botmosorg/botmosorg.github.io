"use strict";

import { CAMERA_SIZE, FONT_SIZE } from "./camera.js";

/*
var tileSet = document.createElement("img")
tileSet.src = "tiny16.png"
*/

export const UI_HEIGHT = 1
export const ZOOM = 1
export const ROT_OPTIONS = {
	width: ~~(CAMERA_SIZE[0] * (1 / ZOOM)),
    height: ~~((CAMERA_SIZE[1] + UI_HEIGHT) * (1 / ZOOM)),
    bg: 'transparent',
    fontSize: ~~(FONT_SIZE * ZOOM),
    /*
    layout: 'tile',
    tileWidth: 16,
    tileHeight: 16,
    tileSet: tileSet,
    tileMap: {
        "#": [2*16, 0],
        ".": [0*16, 8*16],
        '@': [192, 0]
    },
    */
    //fontStyle: 'bold',
    forceSquareRatio: true
}