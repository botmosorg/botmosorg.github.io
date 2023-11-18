import { combat_queue } from "./combat";
import { debug_log } from "./debug";
import { STATE } from "./state";

export function entities_create(id: string, type: any, mapId: string, x=0, y=0, options={}) {
    // TODO make energy entity type dependent
    let energy = 10;
    let energyMax = 10;
    if (id.startsWith("player")) {
        energy = 100;
        energyMax = 100;
    }

    return {
        "id": id,
        "type": type,
        "mapId": mapId,
        "x": x,
        "y": y,
        "energy": energy,
        "energyMax": energyMax,
        "options": options
    }
}

export function entities_destroy(entityId: string) {
    STATE.entities[entityId] = undefined
    delete STATE.entities[entityId]
}

export function entities_store(entity: any) {
    STATE.entities[entity.id] = entity
}

export function entities_get(entityId: string) {
    return STATE.entities[entityId]
}

export function entities_get_by(mapId: string) {
    let entity_ids = Object.keys(STATE.entities)
    let entities_on_map: any[] = []
    for (let i=0; i<entity_ids.length; i++) {
        let entity = STATE.entities[entity_ids[i]]
        if (entity.mapId === mapId) {
            entities_on_map.push(entity)
        }
    }
    return entities_on_map
}

export function entities_get_at(mapId: string, x: number, y: number) {
    let entities_at_pos = entities_get_by(mapId).filter(e => e.x === x && e.y === y)
    if (entities_at_pos.length > 0) {
        return entities_at_pos[0]
    }
    return null
}

export function interactOrCombat(entityA, entityB) {
    if (entityA.options.faction === entityB.options.faction) {
        debug_log("Interaction!")
    } else {
        debug_log("COMBAT!")
        combat_queue(entityA.id, entityB.id)
    }
}
