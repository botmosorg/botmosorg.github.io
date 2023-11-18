import { MANIFEST, Command } from "./manifest";

/**
 * All keys ever supported:
 * - Arrow keys:    Movement, 4 directional, diagonal movement is 2 turns and TODO translated for convenience
 * - 4 buttons:     A: positive continue action, B: negative non-continue action, X and Y quick slots
 * - 2 shoulder buttons: redundancy
 * - ESC / START / menu key:    Open game menu
 */
const _BM_INPUT = {
    up: false,
    right: false,
    down: false,
    left: false,
    a: false,
    b: false,
    c: false,
    d: false,
    menu: false
}

let _inputQueue: Command[] = []
document.body.addEventListener("keydown", function(e) {
    if (e.defaultPrevented) {
        return; // Do nothing if event already handled
    }

    let key = e.key;
    switch (key) {
        case 'w':
        case 'ArrowUp':
            _BM_INPUT.up = true;
            _preventDefaultAndStopPropagation(e)
            break
        case 'a':
        case 'ArrowLeft':
            _BM_INPUT.left = true;
            _preventDefaultAndStopPropagation(e);
            break;
        case 's':
        case 'ArrowDown':
            _BM_INPUT.down = true;
            _preventDefaultAndStopPropagation(e);
            break;
        case 'd':
        case 'ArrowRight':
            _BM_INPUT.right = true;
            _preventDefaultAndStopPropagation(e);
            break;
        case ' ':
            _BM_INPUT.b = true;
            _preventDefaultAndStopPropagation(e);
            break;
        default:
    }
})

document.body.addEventListener("keyup", function(e) {
    if (e.defaultPrevented) {
        return; // Do nothing if event already handled
    }

    let key = e.key;
    switch (key) {
        case 'w':
        case 'ArrowUp':
            _BM_INPUT.up = false;
            _preventDefaultAndStopPropagation(e);
            break;
        case 'a':
        case 'ArrowLeft':
            _BM_INPUT.left = false;
            _preventDefaultAndStopPropagation(e);
            break;
        case 's':
        case 'ArrowDown':
            _BM_INPUT.down = false;
            _preventDefaultAndStopPropagation(e);
            break;
        case 'd':
        case 'ArrowRight':
            _BM_INPUT.right = false;
            _preventDefaultAndStopPropagation(e);
            break;
        case ' ':
            _BM_INPUT.b = false;
            _preventDefaultAndStopPropagation(e);
            break;
        default:
    }
})

function _preventDefaultAndStopPropagation(e) {
    e.preventDefault();
    e.stopPropagation();
}

let _lastAction: Command | null = null;
function _updateInputQueue() {
    let action: Command | null = null;

    if (_BM_INPUT.right) {
        action = MANIFEST.commands.E;
    }
    if (_BM_INPUT.left) {
        action = MANIFEST.commands.W;
    }
    if (_BM_INPUT.down) {
        action = MANIFEST.commands.S;
    }
    if (_BM_INPUT.up) {
        action = MANIFEST.commands.N;
    }

    if (_BM_INPUT.up && _BM_INPUT.right) {
        if (action === MANIFEST.commands.N && _lastAction === MANIFEST.commands.N) {
            action = MANIFEST.commands.E;
        }
    }
    if (_BM_INPUT.up && _BM_INPUT.left) {
        if (action === MANIFEST.commands.N && _lastAction === MANIFEST.commands.N) {
            action = MANIFEST.commands.W;
        }
    }
    if (_BM_INPUT.down && _BM_INPUT.right) {
        if (action === MANIFEST.commands.S && _lastAction === MANIFEST.commands.S) {
            action = MANIFEST.commands.E;
        }
    }
    if (_BM_INPUT.down && _BM_INPUT.left) {
        if (action === MANIFEST.commands.S && _lastAction === MANIFEST.commands.S) {
            action = MANIFEST.commands.W;
        }
    }

    if (_BM_INPUT.b) {
        action = MANIFEST.commands.B;
    }

    _lastAction = action;
    if (action !== null) {
        _inputQueue.push(action);
    }
}

export function get_action() {
    _updateInputQueue();
    let action = _inputQueue.shift() || null;
    _inputQueue = [];
    return action;
}
