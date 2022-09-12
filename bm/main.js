"use strict";

import { ROT_OPTIONS, UI_HEIGHT } from "./config.js";
import { debug_log } from "./debug.js";
import { get_action } from "./input.js";
import { draw } from "./rot_renderer.js";
import { STATE } from "./state.js";

let _MAP = STATE.maps[STATE.currentMapId]

//const UPDATE_EVERY = 500 // in ms
//const UPDATE_EVERY = 50 // in ms
const UPDATE_EVERY = 100 // in ms

let turn = 0

function _entity_can_move(map, entity, dx, dy) {
    let x = entity.x + dx;
    let y = entity.y + dy;
    return x >= 0 && x < 16*16 && y >= 0 && y < 16*16; // TODO map size hard-coded
}
function _entity_move(map, entity, dx, dy) {
    if (_entity_can_move(map, entity, dx, dy)) {
        entity.x += dx;
        entity.y += dy;
    }
}
function act(entity, action) {
    let map = STATE.maps[entity.mapId]
    switch (action) {
        case 'N':
            _entity_move(map, entity, 0, -1)
            break
        case 'W':
            _entity_move(map, entity, -1, 0)
            break
        case 'S':
            _entity_move(map, entity, 0, 1)
            break
        case 'E':
            _entity_move(map, entity, 1, 0)
            break
        default:
    }
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
    if (action !== ' ') {
        let player = STATE.entities[STATE.playerId];
        debug_log("Trn: " + turn + ", act: " + action + ", cam: (" + camera.x + ',' + camera.y + "), plr: (" + player.x + "," + player.y + ")");
    }

    act(STATE.entities[STATE.playerId], action)
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
