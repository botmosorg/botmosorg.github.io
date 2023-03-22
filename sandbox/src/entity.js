"use strict";

import { combat_queue } from "./combat.js";
import { debug_log } from "./debug.js";
import { STATE } from "./state.js";

export function entities_create(id, type, mapId, x=0, y=0, options={}) {
    return {
        "id": id,
        "type": type,
        "mapId": mapId,
        "x": x,
        "y": y,
        "options": options
    }
}

export function entities_destroy(entityId) {
    STATE.entities[entityId] = undefined
    delete STATE.entities[entityId]
}

export function entities_store(entity) {
    STATE.entities[entity.id] = entity
}

export function entities_get(entityId) {
    return STATE.entities[entityId]
}

export function get_entities_by_mapId(mapId) {
    let entity_ids = Object.keys(STATE.entities)
    let entities_on_map = []
    for (let i=0; i<entity_ids.length; i++) {
        let entity = STATE.entities[entity_ids[i]]
        if (entity.mapId === mapId) {
            entities_on_map.push(entity)
        }
    }
    return entities_on_map
}

export function get_entity_at(mapId, x, y) {
    let entities_at_pos = get_entities_by_mapId(mapId).filter(e => e.x === x && e.y === y)
    if (entities_at_pos.length > 0) {
        return entities_at_pos[0]
    }
    return null
}

export function interactOrCombat(entityA, entityB) {
    if (entityA.options.faction === entityB.options.faction) {
        debug_log("Interaction!")
    } else {
        debug_log("COMBAT!")
        combat_queue(entityA.id, entityB.id)
    }
}

export function distance(entityA, entityB) {
    return Math.abs(entityA.x - entityB.x) + Math.abs(entityA.y - entityB.y);
}
