import { entities_get } from "./entity";
import { items_create } from "./item";
import { MANIFEST } from "./manifest";
import { despawn_queue, spawn_item_queue } from "./spawn";

let _energyQueue: {entityId: string, energyDelta: number}[] = []
export function energy_queue(entityId: string, energyDelta: number) {
    _energyQueue.push({entityId, energyDelta});
}

export function energy_update() {
    let energyChange: {entityId: string, energyDelta: number} | undefined = undefined;
    while (typeof(energyChange = _energyQueue.shift()) !== 'undefined') {
        let entity = entities_get(energyChange.entityId)
        entity.energy = Math.min(entity.energy + energyChange.energyDelta, entity.energyMax);
        if (entity.energy <= 0) {
            despawn_queue(entity.id);
            spawn_item_queue(items_create(MANIFEST.items.junk, entity.mapId, entity.x, entity.y))
        }
    }
}