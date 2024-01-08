import { debug_log } from "./debug";
import { MANIFEST, Spirit as EntityType } from "./manifest";
import { State } from "./state";

export interface Entity {
    id: string,
    type: EntityType,
    mapId: string,
    x: number,
    y: number,
    energy: number,
    energyMax: number,
    options: any
}

export function entities_create(state: State, id: string, type: EntityType, mapId: string, x=0, y=0, options={}): State {
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

    state = entities_set_type(state, entity, type)

    state.entities[entity.id] = entity

    return state
}

export function entities_create_boulder(state: State, mapId: string, x: number, y: number): State {
    return entities_create(state, "boulder," + mapId + "," + x + "," + y, MANIFEST.entities.movableboulder, mapId, x, y, {faction: MANIFEST.factions.Gaia})
}

export function entities_create_box(state: State, mapId: string, x: number, y: number): State {
    return entities_create(state, "box," + mapId + "," + x + "," + y, MANIFEST.entities.movablebox, mapId, x, y, {faction: MANIFEST.factions.Equipment})
}

export function entities_destroy(state: State, entityId: string) {
    state.entities[entityId] = undefined
    delete state.entities[entityId]

    state.tools[entityId] = undefined

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

export function entities_get_at(state: State, mapId: string, x: number, y: number): Entity | null {
    let entities_at_pos = entities_get_by(state, mapId).filter(e => e.x === x && e.y === y)
    if (entities_at_pos.length > 0) {
        return entities_at_pos[0]
    }
    return null
}

export function entities_set_type(state: State, entity: Entity, newType: EntityType) {
    entity.type = newType
    entity.energy = newType.energyMax
    entity.energyMax = newType.energyMax

    if (!isMoveableObject(entity)) {
        state.tools[entity.id] = undefined
    }

    return state
}

export function interactOrCombat(state: State, entityA: Entity, entityB: Entity) {
    if (entityA.options.faction === entityB.options.faction) {
        //debug_log("Interaction!")
    } else {
        //debug_log("COMBAT!")
        const entityId = entityA.id
        const otherEntityId = entityB.id
        state._combatQueue.push({entityId, otherEntityId})
    }

    return state
}

export function isMoveableObject(entity: Entity) {
    return entity.type === MANIFEST.entities.movableboulder
        || entity.type === MANIFEST.entities.movablebox;
}
