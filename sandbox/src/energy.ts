import { isMoveableObject } from "./entity";
import { items_create_junk } from "./item";
import { log } from "./log";
import { State } from "./state";

export function energy_update(state: State): State {
    let energyChange: {entityId: string, energyDelta: number} | undefined = undefined;

    const despawnQueue: Set<string> = new Set()
    while (typeof(energyChange = state._energyQueue.shift()) !== 'undefined') {
        const entity = state.entities[energyChange.entityId]
        entity.energy = Math.min(entity.energy + energyChange.energyDelta, entity.energyMax);
        if (entity.energy <= 0) {
            despawnQueue.add(entity.id)
        }
    }

    for (const entityId of despawnQueue) {
        let entity = state.entities[entityId]
        state._despawnQueue.push(entityId);
        const entityName = !!entity?.options?.name ? entity.options.name : entity.type.name
        if (!isMoveableObject(entity)) { // Boulders and boxes don't leave remains
            const matter = Math.max(1, Math.floor(entity.energyMax / 3))
            state = items_create_junk(state, matter, entity.mapId, entity.x, entity.y)
            state = log(state, `${entityName} destroyed leaving behind Junk.`)
        }
    }

    return state
}