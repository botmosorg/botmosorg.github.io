import { State } from "./state";

export function combat_update(state: State): State {
    let combatants: {entityId: string, otherEntityId: string} | undefined = undefined
    while (typeof(combatants = state._combatQueue.shift()) !== 'undefined') {
        // Energy cost of attack
        state._energyQueue.push({entityId: combatants.entityId, energyDelta: -1})

        // Energy damage done
        state._energyQueue.push({entityId: combatants.otherEntityId, energyDelta: -10})
    }

    return state
}