import { BOTMOS_OPTIONS } from "./config";
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

// API Start
if (!!!(window as any).BMActionLog) {
    (window as any).BMActionLog = function (): string {
        const actions = game.actionLog.join('')
        return actions
    }
}

if (!!!(window as any).BMPlay) {
    (window as any).BMPlay = function (actions: string) {
        draw(game.play(actions))
    }
}

if (!!!(window as any).BMToggleUI) {
    (window as any).BMToggleUI = function () {
        BOTMOS_OPTIONS.showUI = !BOTMOS_OPTIONS.showUI
        draw(game.state)
    }
}
// API End

window.focus(); // focus on the canvas
