/*
https://ondras.github.io/rot.js/hp/
*/

var _MAP = MAPS[MAPS.current]

//const UPDATE_EVERY = 500 // in ms
const UPDATE_EVERY = 50 // in ms

var turn = 0

var tileSet = document.createElement("img")
tileSet.src = "tiny16.png"

var ZOOM = 1
var ROT_OPTIONS = {
	width: ~~(48 * (1 / ZOOM)),
    height: ~~(32 * (1 / ZOOM)),
    bg: 'transparent',
    fontSize: ~~(18 * ZOOM),
    /*
    layout: 'tile',
    tileWidth: 16,
    tileHeight: 16,
    tileSet: tileSet,
    tileMap: {
        "#": [2*16, 0],
        ".": [0*16, 8*16],
        '@': [192, 0]
    },
    */
    //fontStyle: 'bold',
    forceSquareRatio: true
}
var ROT_DISPLAY = new ROT.Display(ROT_OPTIONS)
document.body.appendChild(ROT_DISPLAY.getContainer())

var inputQueue = []
var player = {
    graphic: '@',
    color: 'goldenrod',
    pos: {x: ROT_OPTIONS.width >> 1, y: ROT_OPTIONS.height >> 1 }
}
var map = {
    id: 'starter',
    width: 256,
    height: 256,
    tiles: [],
    objects: [],
    characters: {
        'player': {
            pos: {
                x: 64,
                y: 64
            }
        }
    }
}

document.body.addEventListener("keydown", function(e) {
    //var code = e.charCode;

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
    var code = e.keyCode
    var action = ' '
    switch (code) {
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
})
document.body.addEventListener("keyup", function(e) {
    var code = e.keyCode
    var action = ' '
    switch (code) {
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
})

function act(entity, action) {
    var position = entity.pos
    switch (action) {
        case 'N':
            if (position.y > 1) position.y -= 1
            break
        case 'W':
            if (position.x > 1) position.x -= 1
            break
        case 'S':
            if (position.y < ROT_OPTIONS.height-2) position.y += 1
            break
        case 'E':
            if (position.x < ROT_OPTIONS.width-2) position.x += 1
            break
        default:
    }
    entity.pos = {x: position.x, y: position.y}
}

var camera = {
    "x_min": Math.min(0, (_MAP.width_tiles >> 1) - (ROT_OPTIONS.width >> 1)),
    "y_min": Math.min(0, (_MAP.height_tiles >> 1) - (ROT_OPTIONS.height >> 1)),
    "x_max": _MAP.width_tiles - ROT_OPTIONS.width,
    "y_max": _MAP.height_tiles - ROT_OPTIONS.height,
    "x": (_MAP.width_tiles >> 1) - (ROT_OPTIONS.width >> 1), // center camera, x,y coords of camera are its top-left corner
    "y": (_MAP.height_tiles >> 1) - (ROT_OPTIONS.height >> 1),
    "width": ROT_OPTIONS.width,
    "height": ROT_OPTIONS.height
}
function update_camera(direction) {
    switch (direction) {
        case 'N':
            if (camera.y > camera.y_min) {
                camera.y -= 1
                return true
            }
            break
        case 'W':
            if (camera.x > camera.x_min) {
                camera.x -= 1
                return true
            }
            break
        case 'S':
            if (camera.y < camera.y_max-1) {
                camera.y += 1
                return true
            }
            break
        case 'E':
            if (camera.x < camera.x_max-1) {
                camera.x += 1
                return true
            }
            break
        default:
    }
    return false
}

var _need_draw = true
function update() {
    var action = inputQueue.shift() || ' '
    if (action !== ' ') bos_debug("Turn: " + turn + ", action: " + action + ", camera: (" + camera.x + ',' + camera.y + ')')

    //act(player, action)
    _need_draw = update_camera(action)

    inputQueue = []
    turn += 1

    if (_need_draw) {
        draw()
    }
}

async function draw() {
    bos_rot_render(camera)

    var _need_draw = false

    //ROT_DISPLAY.draw(player.pos.x, player.pos.y, player.graphic, null, null)
    //ROT_DISPLAY.drawOver(player.pos.x, player.pos.y, player.graphic, 'transparent', 'transparent')
}

draw()
setInterval(function() {
  update()
}, UPDATE_EVERY) // Once per second
