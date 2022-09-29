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
        this._optionIndex = 0;
        this._lastInfo = [];
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
                case 'k':
                case 'ArrowUp':
                    game.move("up");
                    _preventDefaultAndStopPropagation(e);
                    break;
                case 'a':
                case 'h':
                case 'ArrowLeft':
                    game.move("left");
                    _preventDefaultAndStopPropagation(e);
                    break;
                case 's':
                case 'j':
                case 'ArrowDown':
                    game.move("down");
                    _preventDefaultAndStopPropagation(e);
                    break;
                case 'd':
                case 'l':
                case 'ArrowRight':
                    game.move("right");
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
        this.enter(this._room);
    }
    move(direction) {
        this._steps += 1;
        const stepThresholds = Object.keys(this._room.options).map(elem => parseInt(elem));
        let biggestSmallerThanStepCount = 0;
        stepThresholds.forEach(
            threshold => {
                if (threshold > biggestSmallerThanStepCount && this._steps >= threshold) {
                    biggestSmallerThanStepCount = threshold;
                }
            }
        )
        let option = this._room.options[biggestSmallerThanStepCount];
        if (biggestSmallerThanStepCount > this._optionIndex) {
            this._optionIndex = biggestSmallerThanStepCount;
            this.announce(option)
        }
        let movementOption = option[direction];
        if (movementOption !== null) {
            this.enter(ROOMS[movementOption[1]])
        }
        this.draw();
    }
    enter(room) {
        this._steps = 0;
        this._optionIndex = 0;
        let defaultOption = room.options[this._optionIndex]
        this.log("");
        this.announce(defaultOption)
        this._room = room;
        this.draw();
    }
    announce(option) {
        this._lastInfo = [];
        this.logWithLastInfo(option.intros[0])
        if (option.up !== null) this.logWithLastInfo(option.up[0]);
        if (option.left !== null) this.logWithLastInfo(option.left[0]);
        if (option.right !== null) this.logWithLastInfo(option.right[0]);
        if (option.down !== null) this.logWithLastInfo(option.down[0]);
    }
    repeatLastInfo() {
        this._lastInfo.forEach(line => this.log(line));
        this.draw();
    }
    log(text) {
        _logLines.push(text);
        speak(text);
        while (_logLines.length >= ROT_OPTIONS.height - 1) {
            _logLines.shift();
        }
    }
    logWithLastInfo(text) {
        this._lastInfo.push(text);
        this.log(text);
    }
    async draw() {
        ROT_DISPLAY.drawText(0, 0, "%c{#000}" + "#".repeat(ROT_OPTIONS.width), ROT_OPTIONS.width); // clear line
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