"use strict";

import { entities_destroy } from "./entity.js";

let _despawnQueue = []
export function despawn_queue(entityId) {
    _despawnQueue.push(entityId)
}

export function despawn_update() {
    let toDespawn = undefined
    while(typeof(toDespawn = _despawnQueue.shift()) !== 'undefined') {
        entities_destroy(toDespawn)
    }
}