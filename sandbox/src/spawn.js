"use strict";

import { ai_destroy } from "./ai.js";
import { entities_destroy } from "./entity.js";

let _despawnQueue = []
export function despawn_queue(entityId) {
    _despawnQueue.push(entityId)
}

export function despawn_update() {
    let entityIdtoDespawn = undefined
    while(typeof(entityIdtoDespawn = _despawnQueue.shift()) !== 'undefined') {
        entities_destroy(entityIdtoDespawn)
        ai_destroy(entityIdtoDespawn)
    }
}