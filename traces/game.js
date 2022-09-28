"use strict";

import { CAMERA_SIZE, ROT_OPTIONS } from "./config.js";
import { ROOMS } from "./rooms.js";
import { speak } from "./tts.js"

const ROT_DISPLAY = new ROT.Display(ROT_OPTIONS)
document.body.appendChild(ROT_DISPLAY.getContainer())

const _logLines = [];

export default class Game {
    constructor() {
        this._room = ROOMS.Pod;
        this._steps = 0;
        this._lastInfo = "";
    }
    init() {
        let game = this;
        document.body.addEventListener("keyup", function(e) {
            if (e.defaultPrevented) {
                return; // Do nothing if event already handled
            }

            let key = e.key;
            switch (key) {
                case 'w':
                case 'ArrowUp':
                    game.up();
                    _preventDefaultAndStopPropagation(e);
                    break;
                case 'a':
                case 'ArrowLeft':
                    game.left();
                    _preventDefaultAndStopPropagation(e);
                    break;
                case 's':
                case 'ArrowDown':
                    game.down();
                    _preventDefaultAndStopPropagation(e);
                    break;
                case 'd':
                case 'ArrowRight':
                    game.right();
                    _preventDefaultAndStopPropagation(e);
                    break;
                case ' ':
                    game.repeatLastInfo();
                    _preventDefaultAndStopPropagation(e);
                    break;
                default:
            }
        });

        this.log("Booting up...")
        this.log("You are in zone " + this._room.id + " at " + this._steps + " steps.")
        this.log("Use arrow keys to move around, press space to repeat last info.")
        this.log("")
        this._lastInfo = this._room.intros[0];
        this.log(this._lastInfo);
        this.draw();
    }
    up() {
        this._steps += 1;
        this.draw();
    }
    down() {
        this._steps += 1;
        this.draw();
    }
    left() {
        this._steps += 1;
        this.draw();
    }
    right() {
        this._steps += 1;
        this.draw();
    }
    repeatLastInfo() {
        this.log(this._lastInfo);
        this.draw();
    }
    log(text) {
        _logLines.push(text);
        speak(text);
        while (_logLines.length >= ROT_OPTIONS.height - 1) {
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
        ROT_DISPLAY.drawText(0, 0, "%c{#fff}" + "@" + this._room.id + " " + this._steps, ROT_OPTIONS.width);
        for (let y=0; y < ROT_OPTIONS.height - 1; y++) {
            if (_logLines[y] !== undefined) {
                ROT_DISPLAY.drawText(0, y+1, "%c{#000}" + "#".repeat(ROT_OPTIONS.width), ROT_OPTIONS.width); // clear line
                ROT_DISPLAY.drawText(0, y+1, "%c{#0f0}" + _logLines[y], ROT_OPTIONS.width);
            }
        }
    }
}

function _preventDefaultAndStopPropagation(e) {
    e.preventDefault();
    e.stopPropagation();
}