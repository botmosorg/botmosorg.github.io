"use strict";

import { MANIFEST } from "./manifest.js";
import { maps_set_current } from "./map.js"

export function entityMoveOrInteract(map, entity, dx, dy) {
    // Check for collision:
    /*
    entity -> combat (hostile), interact (friendly)
    tile -> mine (rock), block movement (wall)

    if movement can happen:
    move, pickup items on-tile movement, go through portals on-tile movement
    */
    if (entity_can_move(map, entity, dx, dy)) {
        entity.x += dx;
        entity.y += dy;

        // Portal
        let tile = map.getTile(entity.x, entity.y);
        if (tile.type === MANIFEST.tiles.portal) {
            maps_set_current(tile.options.mapId)
            entity.x = tile.options.x;
            entity.y = tile.options.y;
            entity.mapId = tile.options.mapId;
        }
    }
}

function entity_can_move(map, entity, dx, dy) {
    let x = entity.x + dx;
    let y = entity.y + dy;
    let tileType = map.getTile(x, y).type;
    return x >= 0 && x < map.widthTiles && y >= 0 && y < map.heightTiles
        && tileType !== MANIFEST.tiles.rock
        && tileType !== MANIFEST.tiles.wall
        && tileType !== MANIFEST.tiles.weakwall;
}
