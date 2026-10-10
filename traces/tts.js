"use strict";

const _synth = window.speechSynthesis;

export function speak(text) {
    if (_synth.speaking) {
        return;
    }

    const utterThis = new SpeechSynthesisUtterance(text);
    _synth.speak(utterThis);
}