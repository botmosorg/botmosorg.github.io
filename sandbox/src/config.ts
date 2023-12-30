/*
var tileSet = document.createElement("img")
tileSet.src = "tiny16.png"
*/

const WINDOW_WIDTH_IN_PX = (typeof window !== 'undefined') ? window.innerWidth : 0
const WINDOW_HEIGHT_IN_PX = (typeof window !== 'undefined') ? window.innerHeight : 0

export const ENEMY_COLORED_RED = true
export const FONT_SIZE = 18
export const CAMERA_SIZE = [
    Math.floor(WINDOW_WIDTH_IN_PX / FONT_SIZE),
    Math.floor(WINDOW_HEIGHT_IN_PX / FONT_SIZE)
]
export const MAX_MAP_SIZE = {
    WIDTH: 1024,
    HEIGHT: 1024
}
export const SHOW_GRID = true
export const ZOOM = 1

export const BOTMOS_OPTIONS = {
    showUI: true
}

export const ROT_OPTIONS = {
	width: Math.floor(CAMERA_SIZE[0] * (1 / ZOOM)),
    height: Math.floor(CAMERA_SIZE[1] * (1 / ZOOM)),
    bg: 'transparent',
    fontSize: Math.floor(FONT_SIZE * ZOOM),
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
