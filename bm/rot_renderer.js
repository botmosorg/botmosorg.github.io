"use strict";

function lookup_color(name) {
    return MANIFEST.colors[name];
}
function rot_render(camera) {
    var map = MAPS[MAPS.current]

    // Render map
    for (var y=0 + UI_HEIGHT; y < camera.height + UI_HEIGHT; y++) {
        for (var x=0; x<camera.width; x++) {
            var tile = map_get(map, camera.x+x, camera.y+y)

            var bg_color = MANIFEST.colors.black;
            var fg_color = MANIFEST.colors.white;
            var icon = ""

            if (tile != null) {
                if (tile.type === MANIFEST.tiles.water) {
                    bg_color = lookup_color(MANIFEST.tiles.water.bg)
                    fg_color = lookup_color(MANIFEST.tiles.water.fg)
                    icon = MANIFEST.tiles.water.icon
                }
                if (tile.type === MANIFEST.tiles.void) {
                    bg_color = lookup_color(MANIFEST.tiles.void.bg)
                    fg_color = lookup_color(MANIFEST.tiles.void.fg)
                    icon = MANIFEST.tiles.void.icon
                }
                if (tile.type === MANIFEST.tiles.rock) {
                    bg_color = lookup_color(MANIFEST.tiles.rock.bg)
                    fg_color = lookup_color(MANIFEST.tiles.rock.fg)
                    icon = MANIFEST.tiles.rock.icon
                }
                if (tile.type === MANIFEST.tiles.wall) {
                    bg_color = lookup_color(MANIFEST.tiles.wall.bg)
                    fg_color = lookup_color(MANIFEST.tiles.wall.fg)
                    icon = MANIFEST.tiles.wall.icon
                }
            }

            ROT_DISPLAY.draw(x, y, icon, fg_color, bg_color)
        }
    }

    // Render entities
    var entities = entities_get_for_map(MAPS.current)
    for (var i=0; i<entities.length; i++) {
        var entity = entities[i]
        ROT_DISPLAY.drawOver(entity.x, entity.y + UI_HEIGHT, MANIFEST.spirits.Spirit.icon, MANIFEST.spirits.Spirit.color);
    }

    // Render UI lines
    for (var i=0; i<UI_LINES.length; i++) {
        let line = UI_LINES[i];
        ROT_DISPLAY.drawText(0, i, "%c{white}%b{black}"+line, CAMERA_SIZE[0]);
    }

    // Render debug lines
    for (var i=0; i<DEBUG_LINES.length; i++) {
        let line = DEBUG_LINES[i];
        ROT_DISPLAY.drawText(0, i + UI_HEIGHT, "%c{green}%b{black}"+line, CAMERA_SIZE[0]);
    }
}

async function draw() {
    rot_render(camera)

    var _need_draw = false

    //ROT_DISPLAY.draw(player.pos.x, player.pos.y, player.graphic, null, null)
    //ROT_DISPLAY.drawOver(player.pos.x, player.pos.y, player.graphic, 'transparent', 'transparent')
}
