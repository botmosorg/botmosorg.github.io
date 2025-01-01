import * as ROT from "../lib/rot.js"

import { BOTMOS_OPTIONS, MAX_MAP_SIZE, ROT_OPTIONS } from "./config";
import { DEBUG_LINES } from "./debug";
import { items_get_by, items_get_equipped } from "./item";
import { entities_get_by, isMoveableObject } from "./entity";
import { MANIFEST } from "./manifest";
import { players_get_current_id } from "./player";
import { State } from "./state.js";
import { actions_get } from "./action.js";
import { TILEMAP } from "../src-img/tilemap.js";

/*
https://ondras.github.io/rot.js/hp/
*/

const tileSet = document.createElement("img")
tileSet.src = "build/tiles.png"

ROT_OPTIONS.tileSet = tileSet;
ROT_OPTIONS.tileMap = _create_tileMap()

const ROT_DISPLAY = new ROT.Display(ROT_OPTIONS)
document.body.appendChild(ROT_DISPLAY.getContainer())
const UI_ELEMENT = document.createElement("div")
UI_ELEMENT.id = "ui"
document.body.appendChild(UI_ELEMENT)

function lookup_color(name: string) {
    return MANIFEST.colors[name];
}
function rot_render(state: State, camera: any) {
    ROT_DISPLAY.clear()

    let currentMapId = state.currentMapId;
    let map = state.maps[currentMapId];

    // Center maps smaller than camera by adjusting camera
    let xPadding = 0
    let yPadding = 0
    if (map.widthTiles < camera.width) {
        xPadding = Math.floor((camera.width - map.widthTiles) / 2)
        camera.x = 0
    }
    if (map.heightTiles < camera.height) {
        yPadding = Math.floor((camera.height - map.heightTiles) / 2)
        camera.y = 0
    }

    const renderHashTable = {}

    // Render map
    for (let y=0; y < camera.height; y++) {
        for (let x=0; x<camera.width; x++) {
            let tile = map.getTile(camera.x+x, camera.y+y)

            //var bg_color = MANIFEST.colors.black;
            //var fg_color = MANIFEST.colors.white;
            let icon = ""
            if (!!tile && !!tile.type) {
                //bg_color = lookup_color(tile.type.bg)
                //fg_color = lookup_color(tile.type.fg)
                if (!!tile.options.sign) {
                    icon = "#" + tile.options.sign
                } else {
                    icon = tile.type.icon
                }
            }
            if (!!icon) {
                renderHashTable[[xPadding + x, yPadding + y].toString()] = [icon]
            }
        }
    }

    // Render items
    const items = items_get_by(state, currentMapId);
    for (let i=0; i<items.length; i++) {
        const item = items[i];
        const itemRenderX = xPadding + item.x-camera.x
        const itemRenderY = yPadding + item.y-camera.y
        const key = [itemRenderX, itemRenderY].toString()
        if (renderHashTable[key]) {
            renderHashTable[key].push(item.type.icon)
        } else {
            renderHashTable[key] = [item.type.icon]
        }
    }

    // Render entities
    const playerId = players_get_current_id()
    const playerEntity = state.entities[playerId]
    //const playerFaction = ((playerEntity || {}).options || {}).faction || undefined;
    const entities = entities_get_by(state, currentMapId);
    for (let i=0; i<entities.length; i++) {
        const entity = entities[i];
        const entityRenderX = xPadding + entity.x-camera.x
        const entityRenderY = yPadding + entity.y-camera.y
        /*
        let entityColor = playerFaction === entity.options.faction ? MANIFEST.colors.white : lookup_color(entity.options.faction.color)
        if (BOTMOS_OPTIONS.highlightEnemy && !isMoveableObject(entity)) {
            entityColor = playerFaction === entity.options.faction ? MANIFEST.colors.cybergreen : MANIFEST.colors.cybermagenta;
        }
        if (entity === playerEntity) {
            entityColor = MANIFEST.colors.white
        }
        */
        const key = [entityRenderX, entityRenderY].toString()
        if (renderHashTable[key]) {
            renderHashTable[key].push(entity.type.icon)
        } else {
            renderHashTable[key] = [entity.type.icon]
        }
    }

    // Actually draw on display from tile/item/entity hash table
    for (const [key, value] of Object.entries(renderHashTable)) {
        const coordinates = key.split(',')
        ROT_DISPLAY.draw(Number(coordinates[0]), Number(coordinates[1]), value)
    }

    // Render UI line
    if (!!playerEntity && BOTMOS_OPTIONS.showUI) {
        let equippedItemText = ''
        const equippedItem = items_get_equipped(state, playerId)
        if (!!equippedItem) {
            equippedItemText += equippedItem.type.name + ' '
        }

        const actions = actions_get(state, playerEntity)
        let line = playerEntity.type.name + ' ' + playerEntity.energy + '/' + playerEntity.energyMax + ' '
                    + equippedItemText
                    + "Y:" + actions.B.name + " X:" + actions.A.name
        UI_ELEMENT.style.flexDirection = "column-reverse"
        if (playerEntity.y-camera.y >= ROT_OPTIONS.height - 3) { // Player close to bottom of screen, flip UI line to top of screen
            UI_ELEMENT.style.flexDirection = "column"
        }

        const UI_LINE = document.createElement("span")
        UI_LINE.innerText = line
        UI_LINE.style.background = "#000"
        UI_ELEMENT.replaceChildren(UI_LINE)
    }

    // Render menu
    if (state._menuOpen) {
        const lines = []
        lines.push("BotMos Menu")
        lines.push("")
        if (!!playerEntity) {
            lines.push("Hull: " + playerEntity.type.name)
            lines.push("Energy: " + playerEntity.energy + '/' + playerEntity.energyMax)
            lines.push("Gold: " + playerEntity.gold)
            lines.push("Matter: " + playerEntity.matter)
            const equippedItem = items_get_equipped(state, playerId)
            if (!!equippedItem) {
                lines.push("Tool: " + equippedItem.type.name)
            }
            if (BOTMOS_OPTIONS.debug) {
                lines.push("DEBUG Position: " + playerEntity.x + ',' + playerEntity.y)
                lines.push("DEBUG Map: " + playerEntity.mapId)
            }
        }
        for (let i=0; i<lines.length; i++) {
            const UI_LINE = document.createElement("span")
            UI_LINE.innerText = lines[i]
            UI_ELEMENT.appendChild(UI_LINE)
        }
    }

    // Render debug lines
    for (let i=0; i<DEBUG_LINES.length; i++) {
        const UI_LINE = document.createElement("span")
        UI_LINE.innerText = DEBUG_LINES[i]
        UI_ELEMENT.appendChild(UI_LINE)
    }
}

let lastCameraPosition = {x: 0, y: 0}
export async function draw(state: State) {
    const maybePlayerEntity = state.entities[players_get_current_id()]
    const cameraPosition = !!maybePlayerEntity ? maybePlayerEntity : lastCameraPosition
    const camera = camera_follow(cameraPosition)

    rot_render(state, camera)

    lastCameraPosition = cameraPosition
}

export async function resize(rotOptions: any) {
    //rotOptions.tileSet = tileSet;
    //rotOptions.tileMap = _create_tileMap()

    //ROT_DISPLAY.setOptions(rotOptions)
}

function camera_follow(entity: { x: number, y: number }): { x: number, y: number, width: number, height: number } {
    return {
        "x": Math.min(
                Math.max(0,
                         entity.x - Math.floor(ROT_OPTIONS.width / 2)),
                MAX_MAP_SIZE.WIDTH - ROT_OPTIONS.width
             ),
        "y": Math.min(
                Math.max(0,
                         entity.y - Math.floor(ROT_OPTIONS.height / 2)),
                MAX_MAP_SIZE.HEIGHT - ROT_OPTIONS.height
             ),
        "width": ROT_OPTIONS.width,
        "height": ROT_OPTIONS.height
    }
}

function _create_tileMap(): any {
    const tilemap = {}
    for (const [key, value] of Object.entries(TILEMAP)) {
        if (key.startsWith("wall") && (key.length === 5 || key.length === 6)) {
            // Character/letter walls
            tilemap['#' + key.substring(4, 5)] = value
        } else {
            if (Object.hasOwn(MANIFEST.tiles, key)) {
                tilemap[MANIFEST.tiles[key].icon] = value
            } else if (Object.hasOwn(MANIFEST.entities, key)) {
                tilemap[MANIFEST.entities[key].icon] = value
            } else if (Object.hasOwn(MANIFEST.items, key)) {
                tilemap[MANIFEST.items[key].icon] = value
            }
        }

    }

    return tilemap
}

