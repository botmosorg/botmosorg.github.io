"use strict";

import { ROT_OPTIONS, UI_HEIGHT } from "./config.js";
import { debug_log } from "./debug.js";
import { get_action } from "./input.js";
import { MAPS } from "./map.js";
import { draw } from "./rot_renderer.js";

let _MAP = MAPS[MAPS.current]

//const UPDATE_EVERY = 500 // in ms
const UPDATE_EVERY = 50 // in ms

let turn = 0

function act(entity, action) {
    var position = entity.pos
    switch (action) {
        case 'N':
            if (position.y > 1) position.y -= 1
            break
        case 'W':
            if (position.x > 1) position.x -= 1
            break
        case 'S':
            if (position.y < ROT_OPTIONS.height-2) position.y += 1
            break
        case 'E':
            if (position.x < ROT_OPTIONS.width-2) position.x += 1
            break
        default:
    }
    entity.pos = {x: position.x, y: position.y}
}

let camera = {
    "x_min": Math.min(0, (_MAP.width_tiles >> 1) - (ROT_OPTIONS.width >> 1)),
    "y_min": Math.min(0, (_MAP.height_tiles >> 1) - (ROT_OPTIONS.height >> 1)),
    "x_max": _MAP.width_tiles - ROT_OPTIONS.width,
    "y_max": _MAP.height_tiles - ROT_OPTIONS.height,
    "x": (_MAP.width_tiles >> 1) - (ROT_OPTIONS.width >> 1), // center camera, x,y coords of camera are its top-left corner
    "y": (_MAP.height_tiles >> 1) - (ROT_OPTIONS.height >> 1),
    "width": ROT_OPTIONS.width,
    "height": ROT_OPTIONS.height - UI_HEIGHT
}
function update_camera(direction) {
    switch (direction) {
        case 'N':
            if (camera.y > camera.y_min) {
                camera.y -= 1
                return true
            }
            break
        case 'W':
            if (camera.x > camera.x_min) {
                camera.x -= 1
                return true
            }
            break
        case 'S':
            if (camera.y < camera.y_max-1) {
                camera.y += 1
                return true
            }
            break
        case 'E':
            if (camera.x < camera.x_max-1) {
                camera.x += 1
                return true
            }
            break
        default:
    }
    return false
}

function _update() {
    var action = get_action();
    if (action !== ' ') debug_log("Turn: " + turn + ", action: " + action + ", camera: (" + camera.x + ',' + camera.y + ')')

    //act(player, action)
    turn += 1
    return update_camera(action) || action !== ' '
}

let _need_draw = true;
draw(camera)
let _gameloop = setInterval(function() {
  _need_draw = _update();
  if (_need_draw) {
    draw(camera)
  }
}, UPDATE_EVERY)

// window.onload = Game.init(); // Use this for init instead
window.focus(); // focus on the canvas
