import Game from "./game";
import { onKeyDown } from "./input";
import { draw } from "./rot_renderer";

let game = new Game();

window.onload = function() {
    draw(game.init())
}

onKeyDown(function(action) {
    draw(game.update(action));
})

window.focus(); // focus on the canvas
