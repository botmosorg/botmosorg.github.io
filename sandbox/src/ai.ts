import { a_star } from "./easystar_astar";
import { entities_get_by } from "./entity";
import { entityInteractOrMove } from "./entity_map";
import { MANIFEST, AI } from "./manifest";
import { players_get_current_id } from "./player";
import { State } from "./state";
import { distance } from "./util";

export function ai_update(state: State): State {
    let entityIdsToUpdate = _entityIdsToUpdate(state)

    // Create AI if needed
    for (let i=0; i<entityIdsToUpdate.length; i++) {
        let entityId = entityIdsToUpdate[i];
        if (!state._AIs.hasOwnProperty(entityId)) {
            state._AIs[entityId] = _ai_create(state, entityId, state.entities[entityId].options.ai)
        }
    }

    // Compute paths
    let playerEntity = state.entities[players_get_current_id()]
    for (let i=0; i<entityIdsToUpdate.length; i++) {
        let entityId = entityIdsToUpdate[i];
        let entity = state.entities[entityId]
        let entityAI = state._AIs[entityId]

        // First rough distance check, before
        let distanceToPlayer = distance(playerEntity.x, playerEntity.y, entity.x, entity.y)
        if (playerEntity.options.faction !== entity.options.faction
            && distanceToPlayer <= entityAI.aggroRange) {
            let movementMap = state.maps[state.currentMapId].asMovementMap() // TODO check for other entity positions to prevent lining up
            let path: any = a_star(movementMap, entity.x, entity.y, playerEntity.x, playerEntity.y)
            if (!!path) {
                path = path.slice(1) // First point in the path is current position of entity, skip it
                //console.log(`${entityId}: distanceToPlayer:${distanceToPlayer} pathLength:${path.length}`)
                if (path.length > distanceToPlayer) { // If not in line of sight, void the path
                    path = null
                }
            }
            entityAI.path = path;
        }

        // New TV message AI, only follow the message if entity is told to OBEY
        if (!!entity.message && entity.message.includes("OBEY")) {
            //console.log('Entity ' + entity.id + ' is OBEYing')
        }
    }

    // Let entities follow paths
    for (let i=0; i<entityIdsToUpdate.length; i++) {
        const entityId = entityIdsToUpdate[i];
        const entity = state.entities[entityId]
        const entityAI = state._AIs[entityId]
        if (!!entityAI.path) {
            const nextPosition = entityAI.path[0];
            const dx = nextPosition.x - entity.x;
            const dy = nextPosition.y - entity.y;
            state = entityInteractOrMove(state, entity, dx, dy);
        }
    }

    return state
}

function _entityIdsToUpdate(state: State) {
    let entities = entities_get_by(state, state.currentMapId)
    let entityIdsToUpdate: string[] = []
    for (let i=0; i<entities.length; i++) {
        let entity = entities[i];
        if (!!entity.options.ai && !entity.id.startsWith("player")) {
            entityIdsToUpdate.push(entity.id)
        }
    }
    return entityIdsToUpdate
}

interface _AI {
    entityId: string,
    type: any,
    aggroRange: number,
    startMap: string,
    startX: number,
    startY: number,
    path: [] | null
}

function _ai_create(state: State, entityId: string, aiType: AI): _AI {
    let entity = state.entities[entityId]
    let aggroRange = 8
    switch (aiType) {
        case MANIFEST.ais.aggrorange: aggroRange = 8; break;
        case MANIFEST.ais.aggrorangeshort: aggroRange = 2; break;
        case MANIFEST.ais.guardian: aggroRange = 1; break;
        default:
    }
    return {
        entityId: entityId,
        type: aiType,
        aggroRange: aggroRange,
        startMap: entity.mapId,
        startX: entity.x,
        startY: entity.y,
        path: null
    }
}

export function ais_destroy(state: State, entityId: string): State {
    state._AIs[entityId] = undefined
    delete state._AIs[entityId]

    return state
}