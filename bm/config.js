"use strict";

/*
var tileSet = document.createElement("img")
tileSet.src = "tiny16.png"
*/

export const UI_HEIGHT = 1
export const ZOOM = 1

export const SHOW_GRID = 1

const WINDOW_WIDTH_IN_PX = window.innerWidth
const WINDOW_HEIGHT_IN_PX = window.innerHeight
export const FONT_SIZE = 24
const CAMERA_PADDING = 1
export const CAMERA_SIZE = [
    Math.floor(WINDOW_WIDTH_IN_PX / 18) - CAMERA_PADDING,
    Math.floor(WINDOW_HEIGHT_IN_PX / 18) - CAMERA_PADDING - UI_HEIGHT
]

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
