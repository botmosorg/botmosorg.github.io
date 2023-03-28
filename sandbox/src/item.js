"use strict";

import { debug_log } from "./debug.js";
import { STATE } from "./state.js";

export function items_create(type, mapId, x=0, y=0) {
    let id = _items_id_create(mapId, x, y)
    return {
        "id": id,
        "type": type,
        "mapId": mapId,
        "x": x,
        "y": y
    }
}

function _items_id_create(mapId, x, y) {
    return "item" + mapId + x + y
}

export function items_destroy(itemId) {
    STATE.items[itemId] = undefined
    delete STATE.items[itemId]
}

export function items_store(item) {
    STATE.items[item.id] = item
}

export function items_get_by(mapId) {
    let itemIds = Object.keys(STATE.items)
    let itemsOnMap = []
    for (let i=0; i<itemIds.length; i++) {
        let item = STATE.items[itemIds[i]]
        if (item.mapId === mapId) {
            itemsOnMap.push(item)
        }
    }
    return itemsOnMap
}

export function items_get_at(mapId, x, y) {
    let itemId = _items_id_create(mapId, x, y)
    if (itemId in STATE.items) {
        return STATE.items[itemId]
    }
    return null
}

export function items_pickup(entity, item) {
    debug_log("Pickup item " + item.id + " by " + entity.id)
    items_destroy(item.id)
}