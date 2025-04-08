import { Entity } from "./entity";
import { FactionType } from "./manifest";

export enum FactionRelation {
    NEUTRAL,
    FRIENDLY,
    HOSTILE
}

export function factions_entity_relation(entityA: Entity, entityB: Entity): FactionRelation {
    const factionA: FactionType = factions_entity_get(entityA)
    const factionB: FactionType = factions_entity_get(entityB)

    if (factionA === factionB) {
        return FactionRelation.FRIENDLY
    } else if (factionA.friendly.has(factionB.name) || factionB.friendly.has(factionA.name)) {
        return FactionRelation.FRIENDLY
    } else if (factionA.hostile.has(factionB.name) || factionB.hostile.has(factionA.name)) {
        return FactionRelation.HOSTILE
    } else if (factionA.friendly.has("*") || factionB.friendly.has("*")) {
        return FactionRelation.FRIENDLY
    } else if (factionA.hostile.has("*") || factionB.hostile.has("*")) {
        return FactionRelation.HOSTILE
    }

    return FactionRelation.NEUTRAL
}

export function factions_entity_get(entity: Entity): FactionType {
    return ((entity || {}).options || {}).faction || undefined
}

export function factions_entity_set(entity: Entity, faction: FactionType): Entity {
    entity.options.faction = faction
    return entity
}