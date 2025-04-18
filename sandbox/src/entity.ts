import { FactionRelation, factions_entity_relation, factions_entity_set } from "./faction";
import { t } from "./l10n";
import { log } from "./log";
import { MANIFEST, EntityType } from "./manifest";
import { State } from "./state";

export interface Entity {
    id: string,
    type: EntityType,
    mapId: string,
    x: number,
    y: number,
    energy: number,
    energyMax: number,
    gold: number,
    matter: number,
    message: string | null,
    interactions: number,
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
        "gold": 0,
        "matter": 0,
        "message": null,
        "interactions": 0,
        "options": options
    }

    state = entities_set_type(state, entity, type)

    state.entities[entity.id] = entity

    return state
}

export function entities_destroy(state: State, entityId: string) {
    state.entities[entityId] = undefined
    delete state.entities[entityId]

    state.tools[entityId] = undefined
    delete state.tools[entityId]

    state.effects[entityId] = undefined
    delete state.effects[entityId]

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
    entity.gold = 0
    entity.matter = 0

    if (!isMoveableObject(entity)) {
        state.tools[entity.id] = undefined
    }

    state.effects[entity.id] = {}

    return state
}

export function interactOrCombat(state: State, entityA: Entity, entityB: Entity) {
    if (entityA === entityB) { // Weird AI bug not moving when using entityInteractOrMove (with dx and dy === 0), thus NPCs would interact with themselves
        return state
    }

    const relation = factions_entity_relation(entityA, entityB)
    if (relation === FactionRelation.FRIENDLY || isGraffiti(entityB)) {
        // Interaction
        if (!!entityB.options.dialog) {
            const name = !!entityB?.options?.name ? entityB.options.name : entityB.type.name
            //console.log("Interacting %o %o", entityA, entityB)
            state = log(state, name + ": " + t(entityB.options.dialog))
            entityB.interactions++;
        }
    } else if (relation === FactionRelation.HOSTILE) {
        // Combat
        const entityId = entityA.id
        const otherEntityId = entityB.id
        state._combatQueue.push({entityId, otherEntityId})
    }

    // Interact enrage
    if (entityB.interactions >= 3 && entityB.options?.ai === MANIFEST.ais.interactenrage) {
        factions_entity_set(entityB, MANIFEST.factions.Enraged)
    }

    return state
}

export function isMoveableObject(entity: Entity) {
    return entity.type === MANIFEST.entities.movableboulder
        || entity.type === MANIFEST.entities.movablebox;
}

export function isGraffiti(entity: Entity) {
    return entity.type === MANIFEST.entities.Graffiticyan
        || entity.type === MANIFEST.entities.Graffitimagenta
        || entity.type === MANIFEST.entities.Graffitiyellow
}
