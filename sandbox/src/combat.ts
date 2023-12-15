import { energy_queue } from "./energy";
import { State } from "./state";

export function combat_update(state: State): State {
    let combatants: {entityId: string, otherEntityId: string} | undefined = undefined
    while (typeof(combatants = state._combatQueue.shift()) !== 'undefined') {
        energy_queue(combatants.entityId, -1)  // Energy cost of attack
        energy_queue(combatants.otherEntityId, -10) // Energy damage done
    }

    return state
}