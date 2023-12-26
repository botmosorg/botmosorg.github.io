import { items_get_equipped } from "./item";
import { State } from "./state";

export function combat_update(state: State): State {
    let combatants: {entityId: string, otherEntityId: string} | undefined = undefined
    while (typeof(combatants = state._combatQueue.shift()) !== 'undefined') {
        let energyCostOfAttack = -1
        let energyDamageDone = -5
        const equippedItem = items_get_equipped(state, combatants.entityId)
        if (!!equippedItem) {
            energyCostOfAttack = equippedItem.type.energyCost
            energyDamageDone = -1 * Math.abs(equippedItem.type.damage)
        }

        // Energy cost of attack
        state._energyQueue.push({entityId: combatants.entityId, energyDelta: energyCostOfAttack})

        // Energy damage done
        state._energyQueue.push({entityId: combatants.otherEntityId, energyDelta: energyDamageDone})
    }

    return state
}