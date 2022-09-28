"use strict";

import { CAMERA_SIZE, ROT_OPTIONS } from "./config.js";
import { ROOMS } from "./rooms.js";
import { speak } from "./tts.js"

const ROT_DISPLAY = new ROT.Display(ROT_OPTIONS)
document.body.appendChild(ROT_DISPLAY.getContainer())

const _logLines = [];
let _room = ROOMS.Pod;
export default class Game {
    constructor() {
        this._steps = 0;
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
        this.log("You are in zone " + _room.id + ".")
        this.log("And you have done " + this._steps + " steps.")
        this.log("")
        this.log("What do you want to do?")
    }
    up() {
        this._steps += 1;
        this.log("Going up");
    }
    down() {
        this._steps += 1;
        this.log("Going down");
    }
    left() {
        this._steps += 1;
        this.log("Going left");
    }
    right() {
        this._steps += 1;
        this.log("Going right");
    }
    repeatLastInfo() {
        this.log("What do you want to do?");
    }
    log(text) {
        _logLines.push(text);
        this.draw();
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
        ROT_DISPLAY.drawText(0, 0, "%c{#fff}" + "@" + _room.id + " " + this._steps, ROT_OPTIONS.width);
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