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
        this.log("")
        this.log("Up: go to next room")
        this.log("Down: remain here")
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
        /*
        for (let y=0; y < ROT_OPTIONS.height; y++) {
            for (let x=0; x < ROT_OPTIONS.width; x++) {
                let bgcolor = "red"
                if (y < ROT_OPTIONS.height / 2 && x + y < ROT_OPTIONS.width / 2 ) {
                    bgcolor = "yellow"
                } else if () {

                }
                ROT_DISPLAY.draw(x,  y, "", "#0f0", bgcolor);
            }
        }
        */
        for (let y=0; y < ROT_OPTIONS.height; y++) {
            if (_logLines[y] !== undefined) {
                ROT_DISPLAY.drawText(0, y, "%c{#0f0}" + _logLines[y], ROT_OPTIONS.width);
            }
        }
    }
}