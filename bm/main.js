/*
https://ondras.github.io/rot.js/hp/
*/

var _MAP = MAPS[MAPS.current]

//const UPDATE_EVERY = 500 // in ms
const UPDATE_EVERY = 50 // in ms

var turn = 0

/*
var tileSet = document.createElement("img")
tileSet.src = "tiny16.png"
*/

var ZOOM = 1
var ROT_OPTIONS = {
	width: ~~(CAMERA_SIZE[0] * (1 / ZOOM)),
    height: ~~((CAMERA_SIZE[1] + UI_HEIGHT) * (1 / ZOOM)),
    bg: 'transparent',
    fontSize: ~~(FONT_SIZE * ZOOM),
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

let camera = {
    "x_min": Math.min(0, (_MAP.width_tiles >> 1) - (ROT_OPTIONS.width >> 1)),
    "y_min": Math.min(0, (_MAP.height_tiles >> 1) - (ROT_OPTIONS.height >> 1)),
    "x_max": _MAP.width_tiles - ROT_OPTIONS.width,
    "y_max": _MAP.height_tiles - ROT_OPTIONS.height,
    "x": (_MAP.width_tiles >> 1) - (ROT_OPTIONS.width >> 1), // center camera, x,y coords of camera are its top-left corner
    "y": (_MAP.height_tiles >> 1) - (ROT_OPTIONS.height >> 1),
    "width": ROT_OPTIONS.width,
    "height": ROT_OPTIONS.height - UI_HEIGHT
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

function _update() {
    var action = get_action();
    if (action !== ' ') debug_log("Turn: " + turn + ", action: " + action + ", camera: (" + camera.x + ',' + camera.y + ')')

    //act(player, action)
    turn += 1
    return update_camera(action)
}

let _need_draw = true;
draw()
let _gameloop = setInterval(function() {
  _need_draw = _update();
  if (_need_draw) {
    draw()
  }
}, UPDATE_EVERY)

// window.onload = Game.init(); // Use this for init instead
window.focus(); // focus on the canvas
