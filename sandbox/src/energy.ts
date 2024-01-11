import { isMoveableObject } from "./entity";
import { items_create_junk } from "./item";
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
                const matter = Math.max(1, Math.floor(entity.energyMax / 3))
                state = items_create_junk(state, matter, entity.mapId, entity.x, entity.y)
            }
        }
    }

    return state
}