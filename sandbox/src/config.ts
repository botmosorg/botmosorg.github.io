/*
var tileSet = document.createElement("img")
tileSet.src = "tiny16.png"
*/

const WINDOW_WIDTH_IN_PX = (typeof window !== 'undefined') ? window.innerWidth : 0
const WINDOW_HEIGHT_IN_PX = (typeof window !== 'undefined') ? window.innerHeight : 0

export const BOTMOS_OPTIONS = {
    cameraWidth: Math.floor(WINDOW_WIDTH_IN_PX / 18),
    cameraHeight: Math.floor(WINDOW_HEIGHT_IN_PX / 18),
    debug: true,
    fontSize: 18,
    highlightEnemy: true,
    showGrid: true,
    showUI: true,
    zoom: 1
}

export const MAX_MAP_SIZE = {
    WIDTH: 1024,
    HEIGHT: 1024
}

export const ROT_OPTIONS = {
	width: Math.floor(BOTMOS_OPTIONS.cameraWidth * (1 / BOTMOS_OPTIONS.zoom)),
    height: Math.floor(BOTMOS_OPTIONS.cameraHeight * (1 / BOTMOS_OPTIONS.zoom)),
    bg: 'transparent',
    fontSize: Math.floor(BOTMOS_OPTIONS.fontSize * BOTMOS_OPTIONS.zoom),
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
