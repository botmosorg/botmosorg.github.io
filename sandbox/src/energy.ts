import { items_create } from "./item";
import { MANIFEST } from "./manifest";
import { despawn_queue } from "./spawn";
import { State } from "./state";

let _energyQueue: {entityId: string, energyDelta: number}[] = []
export function energy_queue(entityId: string, energyDelta: number) {
    _energyQueue.push({entityId, energyDelta});
}

export function energy_update(state: State): State {
    let energyChange: {entityId: string, energyDelta: number} | undefined = undefined;
    while (typeof(energyChange = _energyQueue.shift()) !== 'undefined') {
        let entity = state.entities[energyChange.entityId]
        entity.energy = Math.min(entity.energy + energyChange.energyDelta, entity.energyMax);
        if (entity.energy <= 0) {
            despawn_queue(entity.id);
            state._itemSpawnQueue.push(items_create(MANIFEST.items.junk, entity.mapId, entity.x, entity.y))
        }
    }

    return state
}