import { Entity } from "./entity";
import { FactionType } from "./manifest";

export enum FactionRelation {
    NEUTRAL,
    FRIENDLY,
    HOSTILE
}

export function factions_entity_relation(entityA: Entity, entityB: Entity): FactionRelation {
    const factionA = factions_entity_get(entityA)
    const factionB = factions_entity_get(entityB)

    if (factionA === factionB) {
        return FactionRelation.FRIENDLY
    } else {
        return FactionRelation.HOSTILE
    }

    //return FactionRelation.NEUTRAL
}

export function factions_entity_get(entity: Entity): FactionType {
    return ((entity || {}).options || {}).faction || undefined
}

export function factions_entity_set(entity: Entity, faction: FactionType): Entity {
    entity.options.faction = faction
    return entity
}