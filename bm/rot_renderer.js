"use strict";

import { CAMERA_SIZE, ROT_OPTIONS, UI_HEIGHT } from "./config.js";
import { DEBUG_LINES } from "./debug.js";
import { entities_get_for_map } from "./entity.js";
import { MANIFEST } from "./manifest.js";
import { MAPS, map_get } from "./map.js";
import { UI_LINES } from "./ui.js";

/*
https://ondras.github.io/rot.js/hp/
*/

const ROT_DISPLAY = new ROT.Display(ROT_OPTIONS)
document.body.appendChild(ROT_DISPLAY.getContainer())

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

            if (tile != null && tile.type != null) {
                bg_color = lookup_color(tile.type.bg)
                fg_color = lookup_color(tile.type.fg)
                icon = tile.type.icon
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

export async function draw(camera) {
    rot_render(camera)

    //ROT_DISPLAY.draw(player.pos.x, player.pos.y, player.graphic, null, null)
    //ROT_DISPLAY.drawOver(player.pos.x, player.pos.y, player.graphic, 'transparent', 'transparent')
}
