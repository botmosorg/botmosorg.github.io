"use strict";

import { debug_log } from "./debug.js";
import { get_entity_at } from "./entity.js";
import { MANIFEST } from "./manifest.js";
import { maps_set_current } from "./map.js"

export function entityInteractOrMove(map, entity, dx, dy) {
    // Check for collision:
    /*
    entity -> combat (hostile), interact (friendly)
    tile -> mine (rock), block movement (wall)

    if movement can happen:
    move, pickup items on-tile movement, go through portals on-tile movement
    */
    let entity_at_target_position = get_entity_at(map.id, entity.x + dx, entity.y + dy)
    if (entity_at_target_position !== null) {
        debug_log("Interact with entity: " + entity_at_target_position);

    } else if (entity_can_move(map, entity, dx, dy)) {
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
