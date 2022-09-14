"use strict";

import { ROT_OPTIONS } from "./config.js";
import { debug_log } from "./debug.js";
import { get_action } from "./input.js";
import { draw } from "./rot_renderer.js";
import { STATE } from "./state.js";

let _MAP = STATE.maps[STATE.currentMapId]

//const UPDATE_EVERY = 500 // in ms
//const UPDATE_EVERY = 50 // in ms
const UPDATE_EVERY = 100 // in ms

let turn = 0

function entity_can_move(map, entity, dx, dy) {
    let x = entity.x + dx;
    let y = entity.y + dy;
    return x >= 0 && x < map.width_tiles && y >= 0 && y < map.height_tiles;
}
function entity_move(map, entity, dx, dy) {
    if (entity_can_move(map, entity, dx, dy)) {
        entity.x += dx;
        entity.y += dy;
    }
}
function act(entity, action) {
    let map = STATE.maps[entity.mapId]
    switch (action) {
        case 'N':
            entity_move(map, entity, 0, -1)
            break
        case 'W':
            entity_move(map, entity, -1, 0)
            break
        case 'S':
            entity_move(map, entity, 0, 1)
            break
        case 'E':
            entity_move(map, entity, 1, 0)
            break
        default:
    }
}

function follow_camera(entity) {
    return {
        "x": Math.min(Math.max(0, entity.x - Math.floor(ROT_OPTIONS.width / 2)), 256 - ROT_OPTIONS.width), // TODO Hardcoded map size
        "y": Math.min(Math.max(0, entity.y - Math.floor(ROT_OPTIONS.height / 2)), 256 - ROT_OPTIONS.height), // TODO Hardcoded map size
        "width": ROT_OPTIONS.width,
        "height": ROT_OPTIONS.height
    }
}

function _update() {
    var action = get_action();
    if (action !== ' ') {
        let player = STATE.entities[STATE.playerId];
        debug_log("Trn: " + turn + ", act: " + action + ", plr: (" + player.x + "," + player.y + ")");
    }

    act(STATE.entities[STATE.playerId], action)
    turn += 1
    return follow_camera(STATE.entities[STATE.playerId])
}

let _gameloop = setInterval(function() {
    draw(_update());
}, UPDATE_EVERY)

// window.onload = Game.init(); // Use this for init instead
window.focus(); // focus on the canvas
