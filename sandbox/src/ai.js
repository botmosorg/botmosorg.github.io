"use strict";

import { debug_log } from "./debug.js";
import { a_star } from "./easystar_astar.js";
import { distance, entities_get, get_entities_by_mapId } from "./entity.js";
import { entityInteractOrMove } from "./entity_map.js";
import { MANIFEST } from "./manifest.js";
import { maps_get } from "./map.js";
import { STATE } from "./state.js";

const _AIs = {}

export function ai_update() {
    let entityIdsToUpdate = _entityIdsToUpdate()

    // Create AI if needed
    for (let i=0; i<entityIdsToUpdate.length; i++) {
        let entityId = entityIdsToUpdate[i];
        if (!_AIs.hasOwnProperty(entityId)) {
            _AIs[entityId] = ai_create(entityId, MANIFEST.ais.aggrorange)
        }
    }

    // Compute paths
    let playerEntity = entities_get(STATE.playerId)
    for (let i=0; i<entityIdsToUpdate.length; i++) {
        let entityId = entityIdsToUpdate[i];
        let entity = entities_get(entityId)
        let entityAI = _AIs[entityId]

        // First rough distance check, before
        let distanceToPlayer = distance(playerEntity, entity)
        if (playerEntity.options.faction !== entity.options.faction
            && distanceToPlayer <= entityAI.aggroRange) {
            debug_log("Player aggroing " + entityId)
            let movementMap = maps_get(STATE.currentMapId).asMovementMap()
            let path = a_star(movementMap, entity.x, entity.y, playerEntity.x, playerEntity.y)
            if (path !== null) {
                path = path.slice(1) // First point in the path is current position of entity, skip it

                // TODO check if player is in Line of Sight (distanceToPlayer === path.length)
            }
            entityAI.path = path;
        }
    }

    // Let entities follow paths
    for (let i=0; i<entityIdsToUpdate.length; i++) {
        let entityId = entityIdsToUpdate[i];
        let entity = entities_get(entityId)
        let entityAI = _AIs[entityId]
        if (entityAI.path !== null) {
            let nextPosition = entityAI.path[0];
            let dx = nextPosition.x - entity.x;
            let dy = nextPosition.y - entity.y;
            entityInteractOrMove(entity, dx, dy);
        }
    }
}

function _entityIdsToUpdate() {
    let entities = get_entities_by_mapId(STATE.currentMapId);
    let entityIdsToUpdate = []
    for (let i=0; i<entities.length; i++) {
        let entity = entities[i];
        if (!entity.id.startsWith("player")) {
            entityIdsToUpdate.push(entity.id)
        }
    }
    return entityIdsToUpdate
}

function ai_create(entityId, aiType) {
    let entity = entities_get(entityId)
    return {
        entityId: entityId,
        type: aiType,
        aggroRange: 8,
        startMap: entity.mapId,
        startX: entity.x,
        startY: entity.y,
        path: null
    }
}

export function ai_destroy(entityId) {
    _AIs[entityId] = undefined
    delete _AIs[entityId]
}