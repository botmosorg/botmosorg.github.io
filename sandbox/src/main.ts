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

if (!!!(window as any).replay) {
    (window as any).replay = function(actions: string) {
        draw(game.replay(actions))
    }
}

window.focus(); // focus on the canvas
