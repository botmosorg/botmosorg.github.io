"use strict";

import { energy_queue } from "./energy.js";

let _combatQueue = []
export function combat_queue(entityId, otherEntityId) {
    _combatQueue.push([entityId, otherEntityId])
}

export function combat_update() {
    let combatants = undefined
    while (typeof(combatants = _combatQueue.shift()) !== 'undefined') {
        energy_queue(combatants[0], -1)  // Energy cost of attack
        energy_queue(combatants[1], -10) // Energy damage done
    }
}