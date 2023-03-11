"use strict";

import { STATE } from "./state.js";

export function create_character(id, type, mapId, x=0, y=0) {
    return {
        "id": id,
        "type": type,
        "mapId": mapId,
        "x": x,
        "y": y
    }
}

export function entities_store(entity) {
    STATE.entities[entity.id] = entity
}

export function get_entities_by_mapId(mapId) {
    var entity_ids = Object.keys(STATE.entities)
    var entities_on_map = []
    for (var i=0; i<entity_ids.length; i++) {
        var entity = STATE.entities[entity_ids[i]]
        if (entity.mapId === mapId) {
            entities_on_map.push(entity)
        }
    }
    return entities_on_map
}
