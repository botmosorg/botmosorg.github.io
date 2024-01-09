import { BOTMOS_OPTIONS } from "./config"

export function debug_log(text: string) {
    if (BOTMOS_OPTIONS.debug) {
        console.log(text)
    }
    //debug_overlay(text);
}

// Max latest lines are shown
export const DEBUG_LINES: string[] = []
const LATEST_N_LINES = 2
function debug_overlay(line: string) {
    DEBUG_LINES.push(line)
    while (DEBUG_LINES.length > LATEST_N_LINES) {
        DEBUG_LINES.shift()
    }
}