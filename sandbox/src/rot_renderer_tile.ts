import * as ROT from "../lib/rot.js"

import { BOTMOS_OPTIONS, MAX_MAP_SIZE, ROT_OPTIONS } from "./config";
import { items_get_by } from "./item";
import { entities_get_by, isGraffiti, isMoveableObject } from "./entity";
import { MANIFEST } from "./manifest";
import { players_get_current_id } from "./player";
import { State } from "./state.js";
import { TILEMAP } from "../src-img/tilemap.js";
import { drawUI } from "./ui.js";

/*
https://ondras.github.io/rot.js/hp/
*/

const ALTERNATE_TILE_SUFFIX = '_a'

const tileSet = document.createElement("img")
tileSet.src = "build/tiles.png"

ROT_OPTIONS.tileSet = tileSet;
ROT_OPTIONS.tileMap = _create_tileMap()

const ROT_DISPLAY = new ROT.Display(ROT_OPTIONS)
document.body.appendChild(ROT_DISPLAY.getContainer())

function lookup_color(name: string) {
    return MANIFEST.colors[name];
}
function rot_render(state: State, camera: any, alternateTilemap: boolean=false) {
    let currentMapId = state.currentMapId;
    let map = state.maps[currentMapId];
    let suffix = (alternateTilemap) ? ALTERNATE_TILE_SUFFIX : ''

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

    const renderHashTable: { [key: string]: Array<string>; } = {}
    const renderHashTableFg: { [key: string]: Array<string>; } = {}
    const renderHashTableBg: { [key: string]: Array<string>; } = {}

    // Render map
    for (let y=0; y < camera.height; y++) {
        for (let x=0; x<camera.width; x++) {
            let tile = map.getTile(camera.x+x, camera.y+y)

            let icon = ""
            if (!!tile && !!tile.type) {
                if (!!tile.options.sign) {
                    icon = "#" + tile.options.sign
                } else {
                    icon = tile.type.icon
                }
            }
            if (!!icon) {
                const key = [xPadding + x, yPadding + y].toString()
                renderHashTable[key] = [icon + suffix]
                renderHashTableFg[key] = ["transparent"]
                renderHashTableBg[key] = ["transparent"]
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
            renderHashTable[key].push(item.type.icon + suffix)
            renderHashTableFg[key].push("transparent")
            renderHashTableBg[key].push("transparent")
        } else {
            renderHashTable[key] = [item.type.icon + suffix]
            renderHashTableFg[key] = ["transparent"]
            renderHashTableBg[key] = ["transparent"]
        }
    }

    // Render entities
    const playerId = players_get_current_id()
    const playerEntity = state.entities[playerId]
    const playerFaction = ((playerEntity || {}).options || {}).faction || undefined;
    const entities = entities_get_by(state, currentMapId);
    for (let i=0; i<entities.length; i++) {
        const entity = entities[i];
        const entityRenderX = xPadding + entity.x-camera.x
        const entityRenderY = yPadding + entity.y-camera.y

        let entityColor = "transparent" // default for boulders, boxes or graffiti
        if (BOTMOS_OPTIONS.highlightEnemy && !!playerFaction && !isMoveableObject(entity) && !isGraffiti(entity)) {
                                                                     // cybergreen                 // cybermagenta
            entityColor = playerFaction === entity.options.faction ? "rgba(116, 238, 21, 0.5)" : "rgba(240, 0, 255, 0.5)";
        }
        if (entity === playerEntity) {
            entityColor = "transparent"
        }

        const key = [entityRenderX, entityRenderY].toString()
        if (renderHashTable[key]) {
            renderHashTable[key].push(entity.type.icon + suffix)
            renderHashTableFg[key].push(entityColor)
            renderHashTableBg[key].push("transparent")
        } else {
            renderHashTable[key] = [entity.type.icon + suffix]
            renderHashTableFg[key] = [entityColor]
            renderHashTableBg[key] = ["transparent"]
        }
    }

    // Actually draw on display from tile/item/entity hash table
    ROT_DISPLAY.clear()
    for (const [key, value] of Object.entries(renderHashTable)) {
        const coordinates = key.split(',')
        ROT_DISPLAY.draw(Number(coordinates[0]), Number(coordinates[1]), value, renderHashTableFg[key], renderHashTableBg[key])
    }
}

let lastCameraPosition = {x: 0, y: 0}
let alternate = 0
export async function draw(state: State) {
    const maybePlayerEntity = state.entities[players_get_current_id()]
    const cameraPosition = !!maybePlayerEntity ? maybePlayerEntity : lastCameraPosition
    const camera = camera_follow(cameraPosition)

    rot_render(state, camera, alternate % 2 == 0)
    drawUI(state, camera.y) // dirty hack: UI should not rely on camera

    lastCameraPosition = cameraPosition
    alternate++
    if (alternate >= 128) {
        alternate = 0
    }
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
    for (let [key, value] of Object.entries(TILEMAP)) {
        let isAlternateTile = key.endsWith(ALTERNATE_TILE_SUFFIX)
        let suffix = ''
        if (isAlternateTile) {
            key = key.substring(0, key.length - ALTERNATE_TILE_SUFFIX.length)
            suffix = ALTERNATE_TILE_SUFFIX
        }

        if (key.startsWith("wall") && (key.length === 5 || key.length === 6)) {
            // Character/letter walls
            tilemap['#' + key.substring(4, 5) + suffix] = value
        } else {
            if (Object.hasOwn(MANIFEST.tiles, key)) {
                tilemap[MANIFEST.tiles[key].icon + suffix] = value
            } else if (Object.hasOwn(MANIFEST.entities, key)) {
                tilemap[MANIFEST.entities[key].icon + suffix] = value
            } else if (Object.hasOwn(MANIFEST.items, key)) {
                tilemap[MANIFEST.items[key].icon + suffix] = value
            }
        }
    }

    // Add alternates for entries which don't have defined alternates
    for (let [key, value] of Object.entries(tilemap)) {
        if (!key.endsWith(ALTERNATE_TILE_SUFFIX) && !Object.hasOwn(tilemap, key + ALTERNATE_TILE_SUFFIX)) {
            tilemap[key + ALTERNATE_TILE_SUFFIX] = value
        }
    }

    return tilemap
}

const fps = 2;
const changeEvery = 1000 / fps;
let elapsed = changeEvery;

let start = null;
let loop = (timestamp) => {
  if (!start) start = timestamp;
  let dt = timestamp - start;
  start = timestamp;
  elapsed += dt;

  if (elapsed > changeEvery) {
  }

  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
