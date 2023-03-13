"use strict";

import { destroy_character } from "./entity.js";

let _despawnQueue = []
export function despawn_queue(entityId) {
    _despawnQueue.push(entityId)
}

export function despawn_update() {
    let toDespawn = undefined
    while(typeof(toDespawn = _despawnQueue.shift()) !== 'undefined') {
        destroy_character(toDespawn)
    }
}