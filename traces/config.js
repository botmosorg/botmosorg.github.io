"use strict";

export const ZOOM = 1

const WINDOW_WIDTH_IN_PX = window.innerWidth
const WINDOW_HEIGHT_IN_PX = window.innerHeight
export const FONT_SIZE = 18
const CAMERA_SIZE = [
    Math.floor(WINDOW_WIDTH_IN_PX / FONT_SIZE),
    Math.floor(WINDOW_HEIGHT_IN_PX / FONT_SIZE)
]

export const ROT_OPTIONS = {
	width: ~~(CAMERA_SIZE[0] * (1 / ZOOM)),
    height: ~~(CAMERA_SIZE[1] * (1 / ZOOM)),
    bg: 'black',
    fontSize: ~~(FONT_SIZE * ZOOM),
    forceSquareRatio: true
}
