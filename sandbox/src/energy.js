"use strict";

import { items_create } from "./item.js";
import { MANIFEST } from "./manifest.js";
import { despawn_queue, spawn_item_queue } from "./spawn.js";
import { STATE } from "./state.js";

let _energyQueue = []
export function energy_queue(entityId, energyDelta) {
    _energyQueue.push([entityId, energyDelta]);
}

export function energy_update() {
    let energyChange = undefined;
    while (typeof(energyChange = _energyQueue.shift()) !== 'undefined') {
        let entity = STATE.entities[energyChange[0]];
        entity.energy = Math.min(entity.energy + energyChange[1], entity.energyMax);
        if (entity.energy <= 0) {
            despawn_queue(entity.id);
            spawn_item_queue(items_create(MANIFEST.items.junk, entity.mapId, entity.x, entity.y))
        }
    }
}