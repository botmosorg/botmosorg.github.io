"use strict";

import Game from "./game.js";

let game = new Game();
window.onload = game.init();

window.focus(); // focus on the canvas
