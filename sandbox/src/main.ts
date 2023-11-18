import Game from "./game";
import { draw } from "./rot_renderer";

//const UPDATE_EVERY = 500 // in ms
//const UPDATE_EVERY = 50 // in ms
const UPDATE_EVERY = 100 // in ms

let game = new Game();
window.onload = game.init;

let _gameloop = setInterval(function() {
    let entityToFollow = game.update();
    draw(entityToFollow);
}, UPDATE_EVERY)

window.focus(); // focus on the canvas
