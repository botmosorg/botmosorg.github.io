/**
 * All keys ever supported:
 * - Arrow keys:    Movement, 4 directional, diagonal movement is 2 turns and TODO translated for convenience
 * - 4 buttons:     A: positive continue action, B: negative non-continue action, C and D quick slots
 * - 2 shoulder buttons: redundancy
 * - ESC / START / menu key:    Open game menu
 */
const BM_INPUT = {
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

let inputQueue = []
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
            BM_INPUT.up = true;
            preventDefaultAndStopPropagation(e)
            break
        case 65:
        case 37:
            action = 'W'
            BM_INPUT.left = true;
            updateInpupreventDefaultAndStopPropagationtQueue(e)
            break
        case 83:
        case 40:
            action = 'S'
            BM_INPUT.down = true;
            preventDefaultAndStopPropagation(e)
            break
        case 68:
        case 39:
            action = 'E'
            BM_INPUT.right = true;
            preventDefaultAndStopPropagation(e)
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
            BM_INPUT.up = false;
            preventDefaultAndStopPropagation(e)
            break
        case 65:
        case 37:
            action = 'W'
            BM_INPUT.left = false;
            preventDefaultAndStopPropagation(e)
            break
        case 83:
        case 40:
            action = 'S'
            BM_INPUT.down = false;
            preventDefaultAndStopPropagation(e)
            break
        case 68:
        case 39:
            action = 'E'
            BM_INPUT.right = false;
            preventDefaultAndStopPropagation(e)
            break
        default:
            action = ' '
            //action = 'Unknown key: ' + code
    }
})

function preventDefaultAndStopPropagation(e) {
    e.preventDefault();
    e.stopPropagation();
}

let __lastAction = ''
function updateInputQueue() {
    let action = ' ';

    if (BM_INPUT.right) {
        action = "E";
    }
    if (BM_INPUT.left) {
        action = "W";
    }
    if (BM_INPUT.down) {
        action = "S";
    }
    if (BM_INPUT.up) {
        action = "N";
    }

    if (BM_INPUT.up && BM_INPUT.right) {
        if (action === 'N' && __lastAction === 'N') {
            action = 'E';
        }
    }
    if (BM_INPUT.up && BM_INPUT.left) {
        if (action === 'N' && __lastAction === 'N') {
            action = 'W';
        }
    }
    if (BM_INPUT.down && BM_INPUT.right) {
        if (action === 'S' && __lastAction === 'S') {
            action = 'E';
        }
    }
    if (BM_INPUT.down && BM_INPUT.left) {
        if (action === 'S' && __lastAction === 'S') {
            action = 'W';
        }
    }

    __lastAction = action;
    inputQueue.push(action);
}

function get_action() {
    updateInputQueue();
    let action = inputQueue.shift() || ' ';
    inputQueue = [];
    return action;
}
