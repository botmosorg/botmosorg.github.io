/**
 * All keys ever supported:
 * - Arrow keys:    Movement, 4 directional, diagonal movement is 2 turns and TODO translated for convenience
 * - 4 buttons:     A: positive continue action, B: negative non-continue action, C and D quick slots
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

let _inputQueue = []
document.body.addEventListener("keydown", function(e) {
    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
     */
    /*
    87 w, 38 up arrow
    65 a, 37 left arrow
    83 s, 40 down arrow
    68 d, 39 right arrow

    N ... move north
    E
    S
    W
    n ... turn north
    e
    s
    w
      ... wait turn
    i ... interact
    */
    if (e.defaultPrevented) {
        return; // Do nothing if event already handled
    }

    let keyCode = e.keyCode;
    let code = e.code;
    let key = e.key;
    //console.log('KeyDown: ', code, key)
    var action = ' '
    switch (keyCode) {
        case 87:
        case 38:
            action = 'N'
            _BM_INPUT.up = true;
            _preventDefaultAndStopPropagation(e)
            break
        case 65:
        case 37:
            action = 'W'
            _BM_INPUT.left = true;
            updateInpupreventDefaultAndStopPropagationtQueue(e)
            break
        case 83:
        case 40:
            action = 'S'
            _BM_INPUT.down = true;
            _preventDefaultAndStopPropagation(e)
            break
        case 68:
        case 39:
            action = 'E'
            _BM_INPUT.right = true;
            _preventDefaultAndStopPropagation(e)
            break
        default:
            action = ' '
            //action = 'Unknown key: ' + code
    }

    //console.log('Action: ' + action)

})

document.body.addEventListener("keyup", function(e) {
    if (e.defaultPrevented) {
        return; // Do nothing if event already handled
    }

    var keyCode = e.keyCode;
    let code = e.code;
    let key = e.key;
    var action = ' '
    switch (keyCode) {
        case 87:
        case 38:
            action = 'N'
            _BM_INPUT.up = false;
            _preventDefaultAndStopPropagation(e)
            break
        case 65:
        case 37:
            action = 'W'
            _BM_INPUT.left = false;
            _preventDefaultAndStopPropagation(e)
            break
        case 83:
        case 40:
            action = 'S'
            _BM_INPUT.down = false;
            _preventDefaultAndStopPropagation(e)
            break
        case 68:
        case 39:
            action = 'E'
            _BM_INPUT.right = false;
            _preventDefaultAndStopPropagation(e)
            break
        default:
            action = ' '
            //action = 'Unknown key: ' + code
    }
})

function _preventDefaultAndStopPropagation(e) {
    e.preventDefault();
    e.stopPropagation();
}

let _lastAction = ''
function _updateInputQueue() {
    let action = ' ';

    if (_BM_INPUT.right) {
        action = "E";
    }
    if (_BM_INPUT.left) {
        action = "W";
    }
    if (_BM_INPUT.down) {
        action = "S";
    }
    if (_BM_INPUT.up) {
        action = "N";
    }

    if (_BM_INPUT.up && _BM_INPUT.right) {
        if (action === 'N' && _lastAction === 'N') {
            action = 'E';
        }
    }
    if (_BM_INPUT.up && _BM_INPUT.left) {
        if (action === 'N' && _lastAction === 'N') {
            action = 'W';
        }
    }
    if (_BM_INPUT.down && _BM_INPUT.right) {
        if (action === 'S' && _lastAction === 'S') {
            action = 'E';
        }
    }
    if (_BM_INPUT.down && _BM_INPUT.left) {
        if (action === 'S' && _lastAction === 'S') {
            action = 'W';
        }
    }

    _lastAction = action;
    _inputQueue.push(action);
}

function get_action() {
    _updateInputQueue();
    let action = _inputQueue.shift() || ' ';
    _inputQueue = [];
    return action;
}
