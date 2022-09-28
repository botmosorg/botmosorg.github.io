"use strict";

import { CAMERA_SIZE, ROT_OPTIONS } from "./config.js";
import { speak } from "./tts.js"

const ROT_DISPLAY = new ROT.Display(ROT_OPTIONS)
document.body.appendChild(ROT_DISPLAY.getContainer())

const _logLines = []
export default class Game {
    init() {
        this.log("Booting up...")
        this.log("What do you want to do?")
    }
    update(dt) {
    }
    log(text) {
        _logLines.push(text);
        this.draw();
        speak(text);
        while (_logLines.length > ROT_OPTIONS.height) {
            _logLines.shift();
        }
    }
    async draw() {
        for (var y=0; y < ROT_OPTIONS.height; y++) {
            if (_logLines[y] !== undefined) {
                ROT_DISPLAY.drawText(0, y, "%b{black}%c{#0f0}" + _logLines[y], ROT_OPTIONS.width);
            }
        }
    }
}