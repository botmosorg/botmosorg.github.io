import * as ROT from "../lib/rot.js"

import { BOTMOS_OPTIONS, MAX_MAP_SIZE, ROT_OPTIONS } from "./config";
import { DEBUG, DEBUG_LINES } from "./debug";
import { items_get_by, items_get_equipped } from "./item";
import { entities_get_by, isMoveableObject } from "./entity";
import { MANIFEST } from "./manifest";
import { players_get_current } from "./player";
import { State } from "./state.js";

/*
https://ondras.github.io/rot.js/hp/
*/

const ROT_DISPLAY = new ROT.Display(ROT_OPTIONS)
document.body.appendChild(ROT_DISPLAY.getContainer())

function lookup_color(name: string) {
    return MANIFEST.colors[name];
}
function rot_render(state: State, camera) {
    let currentMapId = state.currentMapId;
    let map = state.maps[currentMapId];

    // Render map
    for (var y=0; y < camera.height; y++) {
        for (var x=0; x<camera.width; x++) {
            var tile = map.getTile(camera.x+x, camera.y+y)

            var bg_color = MANIFEST.colors.black;
            var fg_color = MANIFEST.colors.white;
            var icon = ""

            if (!!tile && !!tile.type) {
                bg_color = lookup_color(tile.type.bg)
                fg_color = lookup_color(tile.type.fg)
                icon = tile.options.sign || tile.type.icon
            }

            ROT_DISPLAY.draw(x, y, icon, fg_color, bg_color)
        }
    }

    // Render items
    const items = items_get_by(state, currentMapId);
    for (let i=0; i<items.length; i++) {
        let item = items[i];
        ROT_DISPLAY.drawOver(item.x-camera.x, item.y-camera.y, item.type.icon, lookup_color(item.type.color));
    }

    // Render entities
    const playerId = players_get_current()
    const playerEntity = state.entities[playerId]
    const playerFaction = ((playerEntity || {}).options || {}).faction || undefined;
    const entities = entities_get_by(state, currentMapId);
    for (let i=0; i<entities.length; i++) {
        const entity = entities[i];
        let entityColor = playerFaction === entity.options.faction ? MANIFEST.colors.white : lookup_color(entity.options.faction.color)
        if (BOTMOS_OPTIONS.highlightEnemy && !isMoveableObject(entity)) {
            entityColor = playerFaction === entity.options.faction ? MANIFEST.colors.cybergreen : MANIFEST.colors.cybermagenta;
        }
        if (entity === playerEntity) {
            entityColor = MANIFEST.colors.white
        }
        ROT_DISPLAY.drawOver(entity.x-camera.x, entity.y-camera.y, entity.type.icon, entityColor);
    }

    // Render UI line
    if (!!playerEntity && BOTMOS_OPTIONS.showUI) {
        let equippedItemText = ''
        const equippedItem = items_get_equipped(state, playerId)
        if (!!equippedItem) {
            equippedItemText += equippedItem.type.name + ' '
        }

        let line = playerEntity.type.icon + ' ' + playerEntity.energy + '/' + playerEntity.energyMax + ' '
                    + equippedItemText
        let uiLineYCoord = ROT_OPTIONS.height - 1
        if (playerEntity.y-camera.y >= ROT_OPTIONS.height - 3) { // Player close to bottom of screen, flip UI line to top of screen
            uiLineYCoord = 0
        }
        ROT_DISPLAY.drawText(0, uiLineYCoord, "%c{white}%b{black}" + line, camera.width);
    }

    // Render menu
    if (state._menuOpen) {
        const lines = []
        lines.push("BotMos Menu")
        lines.push("")
        if (!!playerEntity) {
            lines.push("Hull: " + playerEntity.type.icon + " (" + playerEntity.type.name + ")")
            lines.push("Energy: " + playerEntity.energy + '/' + playerEntity.energyMax)
            const equippedItem = items_get_equipped(state, playerId)
            if (!!equippedItem) {
                lines.push("Tool: " + equippedItem.type.name)
            }
            if (DEBUG) {
                lines.push("DEBUG Position: " + playerEntity.x + ',' + playerEntity.y)
                lines.push("DEBUG Map: " + playerEntity.mapId)
            }
        }
        for (let i=0; i<lines.length; i++) {
            ROT_DISPLAY.drawText(0, i, "%c{#74ee15}%b{black}"+lines[i], camera.width);
        }
    }

    // Render debug lines
    for (let i=0; i<DEBUG_LINES.length; i++) {
        let line = DEBUG_LINES[i];
        ROT_DISPLAY.drawText(0, i, "%c{green}%b{black}"+line, camera.width);
    }
}

let lastCameraPosition = {x: 0, y: 0}
export async function draw(state: State) {
    const maybePlayerEntity = state.entities[players_get_current()]
    const cameraPosition = !!maybePlayerEntity ? maybePlayerEntity : lastCameraPosition
    const camera = camera_follow(cameraPosition)

    rot_render(state, camera)

    lastCameraPosition = cameraPosition
}

export async function resize(rotOptions: any) {
    ROT_DISPLAY.setOptions(rotOptions)
}

function camera_follow(entity: {x: number, y: number}) {
    return {
        "x": Math.min(Math.max(0, entity.x - Math.floor(ROT_OPTIONS.width / 2)), MAX_MAP_SIZE.WIDTH - ROT_OPTIONS.width),
        "y": Math.min(Math.max(0, entity.y - Math.floor(ROT_OPTIONS.height / 2)), MAX_MAP_SIZE.HEIGHT - ROT_OPTIONS.height),
        "width": ROT_OPTIONS.width,
        "height": ROT_OPTIONS.height
    }
}
