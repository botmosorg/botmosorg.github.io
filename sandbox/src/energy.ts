import { isMoveableObject } from "./entity";
import { items_create } from "./item";
import { MANIFEST } from "./manifest";
import { State } from "./state";

export function energy_update(state: State): State {
    let energyChange: {entityId: string, energyDelta: number} | undefined = undefined;
    while (typeof(energyChange = state._energyQueue.shift()) !== 'undefined') {
        let entity = state.entities[energyChange.entityId]
        entity.energy = Math.min(entity.energy + energyChange.energyDelta, entity.energyMax);
        if (entity.energy <= 0) {
            state._despawnQueue.push(entity.id);
            if (!isMoveableObject(entity)) { // Boulders and boxes don't leave remains
                state = items_create(state, MANIFEST.items.junk, entity.mapId, entity.x, entity.y)
            }
        }
    }

    return state
}