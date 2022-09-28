"use strict";

import { speak } from "./tts.js"

let turn = 0
export default class Game {
    init() {
        speak("Booting up...")
        speak("What do you want to do?")
    }
    update(dt) {
    }
    draw() {

    }
}