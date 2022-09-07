
"use strict";

const WINDOW_WIDTH_IN_PX = window.innerWidth
const WINDOW_HEIGHT_IN_PX = window.innerHeight
export const FONT_SIZE = 18
const CAMERA_PADDING = 1
export const CAMERA_SIZE = [
    Math.floor(WINDOW_WIDTH_IN_PX / 18) - CAMERA_PADDING,
    Math.floor(WINDOW_HEIGHT_IN_PX / 18) - CAMERA_PADDING - 1 // Minus another 1 due to status line
]