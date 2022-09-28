"use strict";

import Game from "./game.js";

//const UPDATE_EVERY = 500 // in ms
//const UPDATE_EVERY = 50 // in ms
const UPDATE_EVERY = 100 // in ms

let game = new Game();
window.onload = game.init();

window.focus(); // focus on the canvas
