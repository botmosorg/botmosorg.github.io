import { effects_entity_has_effect } from "./effect";
import { items_get_equipped } from "./item";
import { log } from "./log";
import { MANIFEST } from "./manifest";
import { State } from "./state";

export function combat_update(state: State): State {
    let combatants: {entityId: string, otherEntityId: string} | undefined = undefined
    while (typeof(combatants = state._combatQueue.shift()) !== 'undefined') {
        let energyCostOfAttack = -1
        let energyDamageDone = -5
        const equippedItem = items_get_equipped(state, combatants.entityId)
        if (!!equippedItem) {
            energyCostOfAttack = equippedItem.type.energyCost
            if (effects_entity_has_effect(state, combatants.entityId, MANIFEST.effects.Recuperation)) {
                energyCostOfAttack = Math.min(-1, energyCostOfAttack + 1)
            }
            energyDamageDone = -1 * Math.abs(equippedItem.type.damage)
        }

        // Energy cost of attack
        state._energyQueue.push({entityId: combatants.entityId, energyDelta: energyCostOfAttack})

        // Energy damage done
        state._energyQueue.push({entityId: combatants.otherEntityId, energyDelta: energyDamageDone})

        const attacker = state.entities[combatants.entityId]
        const defender = state.entities[combatants.otherEntityId]
        const attackerName = !!attacker?.options?.name ? attacker.options.name : attacker.type.name
        const defenderName = !!defender?.options?.name ? defender.options.name : defender.type.name

        state = log(state, `${attackerName} did ${Math.abs(energyDamageDone)} damage to ${defenderName} at cost of ${Math.abs(energyCostOfAttack)} energy.`)
    }

    return state
}