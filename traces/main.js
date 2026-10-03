"use strict";

import Game from "./game.js";
import { ROOMS } from "./rooms.js";

let game = new Game();
window.onload = game.init();

window.focus(); // focus on the canvas

function cheatEnterRoom(roomName) {
    let room = ROOMS[roomName];
    game.enter(room);
}
window.cheatEnterRoom = cheatEnterRoom;
