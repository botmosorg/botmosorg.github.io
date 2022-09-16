"use strict";

import Game from "./game.js";
import { draw } from "./rot_renderer.js";

//const UPDATE_EVERY = 500 // in ms
//const UPDATE_EVERY = 50 // in ms
const UPDATE_EVERY = 100 // in ms

let game = new Game();
game.init();
let _gameloop = setInterval(function() {
    draw(game.update());
}, UPDATE_EVERY)

// window.onload = Game.init(); // Use this for init instead
window.focus(); // focus on the canvas
