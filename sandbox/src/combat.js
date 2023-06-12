"use strict";

import { energy_queue } from "./energy.js";
import { despawn_queue } from "./spawn.js";

let _combatQueue = []
export function combat_queue(entityId, otherEntityId) {
    _combatQueue.push([entityId, otherEntityId])
}

export function combat_update() {
    let combatants = undefined
    while (typeof(combatants = _combatQueue.shift()) !== 'undefined') {
        if (combatants[0] === "player") { // TODO Player always wins for now
            energy_queue(combatants[0], -1)
            energy_queue(combatants[1], -10)
        }
    }
}