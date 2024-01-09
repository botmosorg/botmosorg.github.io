import { MANIFEST, Command } from "./manifest";

/**
 * All keys ever supported:
 * - Arrow keys:    Movement, 4 directional, diagonal movement is 2 turns and translated for convenience
 * - 4 buttons:     A/X: positive continue action, B/Y/Z: negative non-continue action, 1 and 2 quick slots
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
    one: false,
    two: false,
    menu: false
}

let _inputQueue: Command[] = []
let _callback = undefined
let timeOfLastActionInMs: number = 0
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
        case 'x':
            _BM_INPUT.a = true;
            _preventDefaultAndStopPropagation(e);
            break;
        case ' ':
        case 'y':
        case 'z':
            _BM_INPUT.b = true;
            _preventDefaultAndStopPropagation(e);
            break;
        case 'm':
            _BM_INPUT.menu = true;
            _preventDefaultAndStopPropagation(e);
            break;
        default:
    }

    triggerCallback(get_action())
})

function triggerCallback(command: Command) {
    const currentTimeInMs = Date.now();
    if (_callback !== undefined && currentTimeInMs - timeOfLastActionInMs >= 80) {
        timeOfLastActionInMs = currentTimeInMs
        _callback(command)
    }
}

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
        case 'x':
            _BM_INPUT.a = false;
            _preventDefaultAndStopPropagation(e);
            break;
        case ' ':
        case 'y':
        case 'z':
            _BM_INPUT.b = false;
            _preventDefaultAndStopPropagation(e);
            break;
        case 'm':
            _BM_INPUT.menu = false;
            _preventDefaultAndStopPropagation(e);
            break;
        default:
    }
})

/**
 * Mouse/touch controls
 */
document.body.addEventListener("click", function(e) {
    const x = e.clientX;
    const y = e.clientY;
    const width = document.body.clientWidth;
    const widthThird = width / 3;
    const height = document.body.clientHeight;
    const heightThird = height / 3;

    if (x >= widthThird && x < 2 * widthThird && y < heightThird) {
        triggerCallback(MANIFEST.commands.N)
        _preventDefaultAndStopPropagation(e);

    } else if (x < widthThird && y < heightThird) {
        triggerCallback(MANIFEST.commands.B)
        _preventDefaultAndStopPropagation(e);

    } else if (x >= 2 * widthThird && y < heightThird) {
        triggerCallback(MANIFEST.commands.A)
        _preventDefaultAndStopPropagation(e);

    } else if (x < widthThird && y >= heightThird && y < 2 * heightThird) {
        triggerCallback(MANIFEST.commands.W)
        _preventDefaultAndStopPropagation(e);

    } else if (x >= 2 * widthThird && y >= heightThird && y < 2 * heightThird) {
        triggerCallback(MANIFEST.commands.E)
        _preventDefaultAndStopPropagation(e);

    } else if (x >= widthThird && x < 2 * widthThird && y >= 2 * heightThird) {
        triggerCallback(MANIFEST.commands.S)
        _preventDefaultAndStopPropagation(e);

    } else if (x >= widthThird && x < 2 * widthThird && y >= heightThird && y < 2 * heightThird) {
        triggerCallback(MANIFEST.commands.M)
        _preventDefaultAndStopPropagation(e);
    }
});

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

    if (_BM_INPUT.a) {
        action = MANIFEST.commands.A
    }

    if (_BM_INPUT.b) {
        action = MANIFEST.commands.B;
    }

    if (_BM_INPUT.menu) {
        action = MANIFEST.commands.M;
    }

    _lastAction = action;
    if (action !== null) {
        _inputQueue.push(action);
    }
}

export function onKeyDown(callback: Function) {
    _callback = callback
}

export function get_action(): Command {
    _updateInputQueue();
    let action = _inputQueue.shift() || null;
    _inputQueue = [];
    return action;
}
