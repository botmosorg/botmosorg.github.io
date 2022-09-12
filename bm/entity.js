"use strict";

import { CAMERA_SIZE } from "./config.js";
import { MANIFEST } from "./manifest.js";
import { STATE } from "./state.js";

function create_character(id, type, map_id, x=0, y=0) {
    return {
        "id": id,
        "type": type,
        "map_id": map_id,
        "x": x,
        "y": y
    }
}

function _entities_store(entity) {
    STATE.entities[entity.id] = entity
}

export function entities_get_for_mapId(map_id) {
    var entity_ids = Object.keys(STATE.entities)
    var entities_on_map = []
    for (var i=0; i<entity_ids.length; i++) {
        var entity = STATE.entities[entity_ids[i]]
        if (entity.map_id === map_id) {
            entities_on_map.push(entity)
        }
    }
    return entities_on_map
}

_entities_store(create_character("player", MANIFEST.spirits.Spirit, STATE.currentMapId, 127, 127))
STATE.playerId = "player";