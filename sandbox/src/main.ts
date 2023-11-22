import Game from "./game";
import { onKeyDown } from "./input";
import { draw } from "./rot_renderer";

let game = new Game();

window.onload = function() {
    game.init()
    draw({x: 0, y: 0})
}

onKeyDown(function(action) {
    let entityToFollow = game.update(action);
    draw(entityToFollow);
})

window.focus(); // focus on the canvas
