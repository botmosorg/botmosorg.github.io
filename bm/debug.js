function debug_log(text) {
    console.log(text)
    debug_overlay(text);
}

// Max latest lines are shown
const DEBUG_LINES = []
const LATEST_N_LINES = 2
function debug_overlay(line) {
    DEBUG_LINES.push(line)
    while (DEBUG_LINES.length > LATEST_N_LINES) {
        DEBUG_LINES.shift()
    }
}