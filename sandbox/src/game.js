"use strict";

import { ROT_OPTIONS } from "./config.js";
import { debug_log } from "./debug.js";
import { entities_store, create_character } from "./entity.js";
import { get_action } from "./input.js";
import { MANIFEST } from "./manifest.js";
import { maps_store, maps_set_current, create_map_arena, create_map_overworld, MAP_SEED } from "./map.js"
import { STATE } from "./state.js";

let turn = 0
export default class Game {
    init() {
        maps_store(create_map_arena())
        maps_store(create_map_overworld())
        maps_set_current("simplex="+MAP_SEED)
        //maps_set_current("arena")

        STATE.playerId = "player";
        entities_store(create_character(STATE.playerId, MANIFEST.spirits.Spirit, STATE.currentMapId, 127, 127))
        entities_store(create_character("npc0", MANIFEST.spirits.AeroBot, STATE.currentMapId, 130, 127))
        entities_store(create_character("npc1", MANIFEST.spirits.WorkBot, STATE.currentMapId, 124, 127))
    }
    update(dt) {
        let action = get_action();
        if (action !== null) {
            this.turn(action);
            let player = STATE.entities[STATE.playerId];
            debug_log("Trn: " + turn + ", act: " + action.key + ", plr: (" + player.x + "," + player.y + ")");
        }

        return follow_camera(STATE.entities[STATE.playerId])

    }
    turn(action) {
        this.act(STATE.entities[STATE.playerId], action)
        turn += 1
    }
    act(entity, action) {
        let map = STATE.maps[entity.mapId]
        switch (action) {
            case MANIFEST.commands.N:
                this.entityMoveOrInteract(map, entity, 0, -1)
                break
            case MANIFEST.commands.W:
                this.entityMoveOrInteract(map, entity, -1, 0)
                break
            case MANIFEST.commands.S:
                this.entityMoveOrInteract(map, entity, 0, 1)
                break
            case MANIFEST.commands.E:
                this.entityMoveOrInteract(map, entity, 1, 0)
                break
            default:
        }
    }
    entityMoveOrInteract(map, entity, dx, dy) {
        // Check for collision:
        /*
        entity -> combat (hostile), interact (friendly)
        tile -> mine (rock), block movement (wall)

        if movement can happen:
        move, pickup items on-tile movement, go through portals on-tile movement
        */
        if (this.entity_can_move(map, entity, dx, dy)) {
            entity.x += dx;
            entity.y += dy;
        }

        // Portal
        let tile = map.getTile(entity.x, entity.y);
        if (tile.type === MANIFEST.tiles.portal) {
            maps_set_current(tile.options.mapId)
            entity.x = tile.options.x;
            entity.y = tile.options.y;
            entity.mapId = tile.options.mapId;
        }
    }
    entity_can_move(map, entity, dx, dy) {
        let x = entity.x + dx;
        let y = entity.y + dy;
        let tileType = map.getTile(x, y).type;
        return x >= 0 && x < map.widthTiles && y >= 0 && y < map.heightTiles
            && tileType !== MANIFEST.tiles.rock
            && tileType !== MANIFEST.tiles.wall
            && tileType !== MANIFEST.tiles.weakwall;
    }
}

function follow_camera(entity) {
    return {
        "x": Math.min(Math.max(0, entity.x - Math.floor(ROT_OPTIONS.width / 2)), 256 - ROT_OPTIONS.width), // TODO Hardcoded map size
        "y": Math.min(Math.max(0, entity.y - Math.floor(ROT_OPTIONS.height / 2)), 256 - ROT_OPTIONS.height), // TODO Hardcoded map size
        "width": ROT_OPTIONS.width,
        "height": ROT_OPTIONS.height
    }
}
