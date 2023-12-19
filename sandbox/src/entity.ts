import { debug_log } from "./debug";
import { MANIFEST, Spirit } from "./manifest";
import { State } from "./state";

export interface Entity {
    id: string,
    type: Spirit,
    mapId: string,
    x: number,
    y: number,
    energy: number,
    energyMax: number,
    options: object
}

export function entities_create(state: State, id: string, type: Spirit, mapId: string, x=0, y=0, options={}): State {
    // TODO make energy entity type dependent
    // TODO Externalize this


    const entity = {
        "id": id,
        "type": type,
        "mapId": mapId,
        "x": x,
        "y": y,
        "energy": 10,
        "energyMax": 10,
        "options": options
    }

    entities_set_type(entity, type)

    state.entities[entity.id] = entity

    return state
}

export function entities_destroy(state: State, entityId: string) {
    state.entities[entityId] = undefined
    delete state.entities[entityId]

    return state;
}

export function entities_get_by(state: State, mapId: string): Array<Entity> {
    let entity_ids = Object.keys(state.entities)
    let entities_on_map: Entity[] = []
    for (let i=0; i<entity_ids.length; i++) {
        let entity = state.entities[entity_ids[i]]
        if (entity.mapId === mapId) {
            entities_on_map.push(entity)
        }
    }
    return entities_on_map
}

export function entities_get_at(state: State, mapId: string, x: number, y: number) {
    let entities_at_pos = entities_get_by(state, mapId).filter(e => e.x === x && e.y === y)
    if (entities_at_pos.length > 0) {
        return entities_at_pos[0]
    }
    return null
}

export function entities_set_type(entity: Entity, newType: Spirit) {
    entity.type = newType

    let energy = 10;
    let energyMax = 10;
    if (entity.type === MANIFEST.spirits.Cleaner) {
        energy = 50;
        energyMax = 50;
    }
    if (entity.type === MANIFEST.spirits.Pioneer) {
        energy = 200;
        energyMax = 200;
    }
    if (entity.id.startsWith("player")) {
        energy = 100;
        energyMax = 100;
    }

    entity.energy = energy
    entity.energyMax = energyMax
}

export function interactOrCombat(state: State, entityA, entityB) {
    if (entityA.options.faction === entityB.options.faction) {
        debug_log("Interaction!")
    } else {
        debug_log("COMBAT!")
        const entityId = entityA.id
        const otherEntityId = entityB.id
        state._combatQueue.push({entityId, otherEntityId})
    }

    return state
}
