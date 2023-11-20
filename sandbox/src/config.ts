/*
var tileSet = document.createElement("img")
tileSet.src = "tiny16.png"
*/

export const ZOOM = 1

export const SHOW_GRID = true

const WINDOW_WIDTH_IN_PX = (typeof window !== 'undefined') ? window.innerWidth : 0
const WINDOW_HEIGHT_IN_PX = (typeof window !== 'undefined') ? window.innerHeight : 0
export const FONT_SIZE = 18
const CAMERA_PADDING = 1
export const CAMERA_SIZE = [
    Math.floor(WINDOW_WIDTH_IN_PX / FONT_SIZE) - CAMERA_PADDING,
    Math.floor(WINDOW_HEIGHT_IN_PX / FONT_SIZE) - CAMERA_PADDING
]
export const MAX_MAP_SIZE = {
    WIDTH: 256,
    HEIGHT: 256
}

export const ROT_OPTIONS = {
	width: ~~(CAMERA_SIZE[0] * (1 / ZOOM)),
    height: ~~(CAMERA_SIZE[1] * (1 / ZOOM)),
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
