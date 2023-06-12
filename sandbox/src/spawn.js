"use strict";

import { ai_destroy } from "./ai.js";
import { entities_destroy } from "./entity.js";
import { items_store } from "./item.js";

let _despawnQueue = []
export function despawn_queue(entityId) {
    _despawnQueue.push(entityId)
}

let _itemSpawnQueue = []
export function spawn_item_queue(item) {
    _itemSpawnQueue.push(item)
}

export function despawn_update() {
    let entityIdtoDespawn = undefined
    while (typeof(entityIdtoDespawn = _despawnQueue.shift()) !== 'undefined') {
        entities_destroy(entityIdtoDespawn)
        ai_destroy(entityIdtoDespawn)
    }
}

export function spawn_update() {
    // Items
    let itemToSpawn = undefined
    while (typeof(itemToSpawn = _itemSpawnQueue.shift()) !== 'undefined') {
        items_store(itemToSpawn)
    }
}