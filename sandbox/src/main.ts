import { BOTMOS_OPTIONS, ROT_OPTIONS } from "./config";
import Game from "./game";
import { onKeyDown } from "./input";
import { draw, resize } from "./rot_renderer";

let game = new Game();

window.onload = function() {
    draw(game.init())
}

window.onresize = function() {
    const WINDOW_WIDTH_IN_PX = (typeof window !== 'undefined') ? window.innerWidth : 0
    const WINDOW_HEIGHT_IN_PX = (typeof window !== 'undefined') ? window.innerHeight : 0

    BOTMOS_OPTIONS.cameraWidth = Math.floor(WINDOW_WIDTH_IN_PX / BOTMOS_OPTIONS.fontSize)
    BOTMOS_OPTIONS.cameraHeight = Math.floor(WINDOW_HEIGHT_IN_PX / BOTMOS_OPTIONS.fontSize)
    ROT_OPTIONS.width = Math.floor(BOTMOS_OPTIONS.cameraWidth * (1 / BOTMOS_OPTIONS.zoom))
    ROT_OPTIONS.height = Math.floor(BOTMOS_OPTIONS.cameraHeight * (1 / BOTMOS_OPTIONS.zoom))

    resize(ROT_OPTIONS)
    draw(game.state)
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
