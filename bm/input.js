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

    var keyCode = e.keyCode;
    let code = e.code;
    let key = e.key;
    //console.log('KeyDown: ', code, key)
    var action = ' '
    switch (keyCode) {
        case 87:
        case 38:
            action = 'N'
            break
        case 65:
        case 37:
            action = 'W'
            break
        case 83:
        case 40:
            action = 'S'
            break
        case 68:
        case 39:
            action = 'E'
            break
        default:
            action = ' '
            //action = 'Unknown key: ' + code
    }

    //console.log('Action: ' + action)
    inputQueue.push(action)

    e.preventDefault();
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
            break
        case 65:
        case 37:
            action = 'W'
            break
        case 83:
        case 40:
            action = 'S'
            break
        case 68:
        case 39:
            action = 'E'
            break
        default:
            action = ' '
            //action = 'Unknown key: ' + code
    }
    inputQueue = inputQueue.filter(e => e !== action)

    e.preventDefault();
})
