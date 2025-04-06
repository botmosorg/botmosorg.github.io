import { ItemEquippedEvent } from "./item";
import { EffectType, ItemType, MANIFEST } from "./manifest";
import { State } from "./state";

export interface Effect {
    type: EffectType
    duration: number | undefined // Number of turns left: undefined permanent, 0 it is removed, >0 number of valid turns
    source: ItemType | undefined // If it's from an equipped item or not, meaning the effect will fade if the item is unequipped
}

export function effects_get(state: State, entityId: string): Array<Effect> {
    return Object.values(state.effects[entityId])
}

export function effects_entity_has_effect(state: State, entityId: string, effect: EffectType): boolean {
    return !!state.effects[entityId] && state.effects[entityId].hasOwnProperty(effect.name)
}

export function effects_update(state: State): State {
    return state
}

export function effect_itemEquippedEvent_subscriber(state: State, payload: ItemEquippedEvent): State {
    if (!!payload.oldEquippedItem) {
        // Remove effects of old tool
        const itemType = payload.oldEquippedItem.type
        for (const itemEffect of itemType.effects) {
            const effectType = MANIFEST.effects[itemEffect]
            if (!!state.effects[payload.entityId][effectType.name] && state.effects[payload.entityId][effectType.name].source === itemType) {
                delete state.effects[payload.entityId][effectType.name]
            }
        }
    }

    if (!!payload.newEquippedItem) {
        // Add effects of new tool
        const itemType = payload.newEquippedItem.type
        for (const itemEffect of itemType.effects) {
            const effectType = MANIFEST.effects[itemEffect]
            state.effects[payload.entityId][effectType.name] = {
                type: effectType,
                source: itemType
            }
        }
    }

    return state
}