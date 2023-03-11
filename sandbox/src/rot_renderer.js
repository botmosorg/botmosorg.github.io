"use strict";

import { CAMERA_SIZE, ROT_OPTIONS } from "./config.js";
import { DEBUG_LINES } from "./debug.js";
import { get_entities_by_mapId } from "./entity.js";
import { MANIFEST } from "./manifest.js";
import { STATE } from "./state.js";

/*
https://ondras.github.io/rot.js/hp/
*/

const ROT_DISPLAY = new ROT.Display(ROT_OPTIONS)
document.body.appendChild(ROT_DISPLAY.getContainer())

function lookup_color(name) {
    return MANIFEST.colors[name];
}
function rot_render(camera) {
    let map = STATE.maps[STATE.currentMapId];

    // Render map
    for (var y=0; y < camera.height; y++) {
        for (var x=0; x<camera.width; x++) {
            var tile = map.getTile(camera.x+x, camera.y+y)

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
    let playerEntity = STATE.entities[STATE.playerId];
    let entities = get_entities_by_mapId(STATE.currentMapId);
    for (let i=0; i<entities.length; i++) {
        let entity = entities[i];
        let entityColor = playerEntity.options.faction === entity.options.faction ? MANIFEST.colors.white : MANIFEST.colors.cybermagenta;
        ROT_DISPLAY.drawOver(entity.x-camera.x, entity.y-camera.y, entity.type.icon, entityColor);
    }

    // Render UI lines
    /*
    for (let i=0; i<UI_LINES.length; i++) {
        let line = UI_LINES[i];
        ROT_DISPLAY.drawText(0, i, "%c{white}%b{black}"+line, CAMERA_SIZE[0]);
    }
    */

    // Render debug lines
    for (let i=0; i<DEBUG_LINES.length; i++) {
        let line = DEBUG_LINES[i];
        ROT_DISPLAY.drawText(0, i, "%c{green}%b{black}"+line, CAMERA_SIZE[0]);
    }
}

export async function draw(camera) {
    rot_render(camera)
}
