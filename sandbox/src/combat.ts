import { energy_queue } from "./energy";

let _combatQueue: {entityId: string, otherEntityId: string}[] = []
export function combat_queue(entityId: string, otherEntityId: string) {
    _combatQueue.push({entityId, otherEntityId})
}

export function combat_update() {
    let combatants: {entityId: string, otherEntityId: string} | undefined = undefined
    while (typeof(combatants = _combatQueue.shift()) !== 'undefined') {
        energy_queue(combatants.entityId, -1)  // Energy cost of attack
        energy_queue(combatants.otherEntityId, -10) // Energy damage done
    }
}