import { actions_get } from "./action";
import { Entity, entities_get_at, entities_set_type, interactOrCombat, isMoveableObject } from "./entity";
import { Event, publish } from "./events";
import { EquippedItem, items_get_at, items_pickup } from "./item";
import { MANIFEST, Command, Tile } from "./manifest";
import { Map, tiles_is_space_tile } from "./map";
import { State } from "./state";

export interface EntityMapUpdatedEvent extends Event {
    entityId: string,
    oldMapId: string,
    newMapId: string,
    tileType: Tile
}

export function entity_act(state: State, entity: Entity, command: Command): State {
    switch (command) {
        case MANIFEST.commands.N:
            state = entityInteractOrMove(state, entity, 0, -1)
            break
        case MANIFEST.commands.W:
            state = entityInteractOrMove(state, entity, -1, 0)
            break
        case MANIFEST.commands.S:
            state = entityInteractOrMove(state, entity, 0, 1)
            break
        case MANIFEST.commands.E:
            state = entityInteractOrMove(state, entity, 1, 0)
            break
        case MANIFEST.commands.A:
            state = entityContextualAction(state, entity, MANIFEST.commands.A)
            break
        case MANIFEST.commands.B:
            state = entityContextualAction(state, entity, MANIFEST.commands.B)
            break
        default:
    }

    return state;
}

export function entityInteractOrMove(state: State, entity: Entity, dx: number, dy: number, recursion=0): State { // TODO dirty hack with the recursion
    // Check for collision:
    /*
    entity -> combat (hostile), interact (friendly)
    tile -> mine (rock), block movement (wall)

    if movement can happen:
    move, pickup items on-tile movement, go through portals on-tile movement
    */
    const map = state.maps[entity.mapId]
    const entity_at_target_position = entities_get_at(state, map.id, entity.x + dx, entity.y + dy)
    const tool: EquippedItem | undefined = state.tools[entity.id]
    if (!!entity_at_target_position) {
        if (isMoveableObject(entity_at_target_position)) {
            if (!isMoveableObject(entity) && recursion < 1) { // Boulder/box doesn't move another boulder/box
                state = entityInteractOrMove(state, entity_at_target_position, dx, dy, recursion++)
                state = entityInteractOrMove(state, entity, dx, dy, recursion++)
            }
        } else {
            // Friend or foe
            state = interactOrCombat(state, entity, entity_at_target_position)
        }

    } else if (_entity_can_move(map, entity, dx, dy)) {
        state = _entity_move(state, map, entity, dx, dy)
        state._energyQueue.push({entityId: entity.id, energyDelta: -1 * recursion}) // Pushing rocks

    } else if (_entity_can_crush_wallweak(map, entity, tool, dx, dy)) {
        map.setTile(entity.x + dx, entity.y + dy, MANIFEST.tiles.void)
        state._energyQueue.push({entityId: entity.id, energyDelta: tool.type.energyCost})

    }

    return state
}

export function entityContextualAction(state: State, entity: Entity, command: Command): State {
    const actions = actions_get(state, entity)
    const action = actions[command.key]

    switch (action) {
        case MANIFEST.actions.Enter:
            const map = state.maps[entity.mapId]
            const tile = map.getTile(entity.x, entity.y)
            state = _enterPortalOrPlanet(state, entity, tile)
            break
        case MANIFEST.actions.Launch:
            state = _launchToSpace(state, entity)
        case MANIFEST.actions.Wait:
            break
        default:
    }

    return state
}

function _entity_move(state: State, map: any, entity: Entity, dx: number, dy: number): State {
    entity.x += dx;
    entity.y += dy;

    // Item pickup
    let maybeItem = items_get_at(state, entity.mapId, entity.x, entity.y);
    if (!!maybeItem) {
        state = items_pickup(state, entity, maybeItem);
    }

    // Portal
    let tile = map.getTile(entity.x, entity.y);
    if (tile.type.name.startsWith('portal')
        && !!state.maps[tile.options.mapId]) {
        state = _enterPortalOrPlanet(state, entity, tile)
    }

    // Move{north, east, south, west} tile
    if (tile.type.name.startsWith('move')) {
        switch (tile.type.name) {
            case 'movenorth': state = entityInteractOrMove(state, entity, 0, -1); break;
            case 'moveeast': state = entityInteractOrMove(state, entity, 1, 0); break;
            case 'movesouth': state = entityInteractOrMove(state, entity, 0, 1); break;
            case 'movewest': state = entityInteractOrMove(state, entity, -1, 0); break;
            default:
        }
    }

    return state;
}

function _enterPortalOrPlanet(state: State, entity: Entity, tile: any): State {
    if (entity.id.startsWith("player")) {
        state.currentMapId = tile.options.mapId;
    }
    if (tiles_is_space_tile(tile)) {
        state.lastSpacePositionByEntity[entity.id] = {
            mapId: entity.mapId,
            x: entity.x,
            y: entity.y
        }
    }
    const oldMapId = entity.mapId
    entity.mapId = tile.options.mapId;
    entity.x = tile.options.x;
    entity.y = tile.options.y;

    const eventPayload: EntityMapUpdatedEvent = {
        entityId: entity.id,
        oldMapId: oldMapId,
        newMapId: entity.mapId,
        tileType: tile.type
    }
    state = publish(state, "entitymap.updated.event", eventPayload)

    return state;
}

function _launchToSpace(state: State, entity: Entity): State {
    if (!!state.lastSpacePositionByEntity[entity.id]) {
        if (entity.id.startsWith("player")) {
            state.currentMapId = state.lastSpacePositionByEntity[entity.id].mapId;
        }
        entity.mapId = state.lastSpacePositionByEntity[entity.id].mapId;
        entity.x = state.lastSpacePositionByEntity[entity.id].x;
        entity.y = state.lastSpacePositionByEntity[entity.id].y;

        state.lastSpacePositionByEntity[entity.id] = undefined
        delete state.lastSpacePositionByEntity[entity.id]
    }
    return state
}

export function entities_tile_energy_update(state: State): State {
    for (let entityId in state.entities) {
        let entity = state.entities[entityId]
        let map = state.maps[entity.mapId]
        let tile = map.getTile(entity.x, entity.y)
        state._energyQueue.push({entityId, energyDelta: tile.type.energyDelta})
    }

    return state
}

export function entitymapUpdatedEventSubscriber(state: State, payload: EntityMapUpdatedEvent): State {
    const entity = state.entities[payload.entityId]

    switch (payload.tileType) {
        case MANIFEST.tiles.portalstartaerobot: state = entities_set_type(state, entity, MANIFEST.entities.AeroBot); break;
        case MANIFEST.tiles.portalstartworkbot: state = entities_set_type(state, entity, MANIFEST.entities.WorkBot); break;
        default:
    }

    return state
}

function _entity_can_move(map: Map, entity: Entity, dx: number, dy: number): boolean {
    let x = entity.x + dx;
    let y = entity.y + dy;
    let tileType = map.getTile(x, y).type;
    return x >= 0 && x < map.widthTiles && y >= 0 && y < map.heightTiles
        && tileType !== MANIFEST.tiles.rock
        && tileType !== MANIFEST.tiles.portalclosed
        && !tileType.name.startsWith('wall');
}

function _entity_can_crush_wallweak(map: Map, entity: Entity, tool: EquippedItem | undefined, dx: number, dy: number) {
    const x = entity.x + dx;
    const y = entity.y + dy;
    const tileType = map.getTile(x, y).type;

    if (!!tool) {
        return tool.type.effects.includes(MANIFEST.effects.WallCrusher.name)
                && tileType === MANIFEST.tiles.wallweak
    }

    return false
}
