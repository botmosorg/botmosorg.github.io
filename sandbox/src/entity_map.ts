import { actions_get } from "./action";
import { Entity, entities_get_at, entities_set_type, interactOrCombat, isMoveableObject } from "./entity";
import { Event, publish } from "./event";
import { EquippedItem, items_create, items_get_at, items_pickup } from "./item";
import { log } from "./log";
import { MANIFEST, CommandType, TileType } from "./manifest";
import { Map, tiles_is_blocking_movement, tiles_is_space_tile, tiles_is_water } from "./map";
import { State } from "./state";

export interface EntityMapUpdatedEvent extends Event {
    entityId: string,
    oldMapId: string,
    oldX: number,
    oldY: number,
    oldTileType: TileType
    newMapId: string,
    newX: number,
    newY: number,
}

export function entity_act(state: State, entity: Entity, command: CommandType): State {
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

export function entityInteractOrMove(state: State, entity: Entity, dx: number, dy: number, recursion=0): State { // Dirty hack with the recursion for moveable objects
    /*
    entity -> combat (hostile), interact (friendly)
    tile -> mine (rock), block movement (wall)

    if movement can happen:
        move, pickup items on-tile movement, go through portals on-tile movement
    */
    const map = state.maps[entity.mapId]
    const entity_at_target_position = entities_get_at(state, map.id, entity.x + dx, entity.y + dy)
    const tool: EquippedItem | undefined = state.tools[entity.id]

    // Passive: witness map's TV messages
    entity.message = map.tvMessage

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

    } else if (_entity_can_crush_tile(map, entity, tool, dx, dy)) {
        const oldTile = map.setTile(entity.x + dx, entity.y + dy, MANIFEST.tiles.void)
        if (oldTile.type === MANIFEST.tiles.rock) {
            const lootChance = state.rng.getPercentage()
            if (lootChance <= 1) {
                state = items_create(state, MANIFEST.items.matter, map.id, entity.x + dx, entity.y + dy)
            } else if (lootChance <= 34) {
                state = items_create(state, MANIFEST.items.junk, map.id, entity.x + dx, entity.y + dy)
            }
        }
        state._energyQueue.push({entityId: entity.id, energyDelta: tool.type.energyCost})

    } else if (_entity_can_open_tile(map, entity, tool, dx, dy)) { // E.g. open sewer portals
        state = _entity_move(state, map, entity, dx, dy)
        state._energyQueue.push({entityId: entity.id, energyDelta: tool.type.energyCost}) // Wrenching cost

    }

    return state
}

export function entityContextualAction(state: State, entity: Entity, command: CommandType): State {
    const actions = actions_get(state, entity)
    const action = actions[command.key]

    const map = state.maps[entity.mapId]
    const tile = map.getTile(entity.x, entity.y)

    switch (action) {
        case MANIFEST.actions.Enter:
            state = _enterPortalOrPlanet(state, entity, tile)
            break
        case MANIFEST.actions.Launch:
            state = _launchToSpace(state, entity, tile)
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
    if (tile.type.name.startsWith('portal')) {
        //&& !!state.maps[tile.options.mapId]) {
        state = _enterPortalOrPlanet(state, entity, tile)
    }

    // Terminal
    if (tile.type === MANIFEST.tiles.terminal) {
        map.setTvMessage("OBEYWORKKILL")
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
    } else {
        state.lastSpacePositionByEntity[entity.id] = undefined
        delete state.lastSpacePositionByEntity[entity.id]
    }

    const eventPayload: EntityMapUpdatedEvent = {
        entityId: entity.id,
        oldMapId: entity.mapId,
        oldX: entity.x,
        oldY: entity.y,
        oldTileType: tile.type,
        newMapId: tile.options.mapId,
        newX: tile.options.x,
        newY: tile.options.y
    }

    entity.mapId = tile.options.mapId;
    entity.x = tile.options.x;
    entity.y = tile.options.y;

    state = publish(state, "entitymap.updated.event", eventPayload)

    return state;
}

function _launchToSpace(state: State, entity: Entity, tile: any): State {
    if (!!state.lastSpacePositionByEntity[entity.id]) {
        if (entity.id.startsWith("player")) {
            state.currentMapId = state.lastSpacePositionByEntity[entity.id].mapId;
        }

        const eventPayload: EntityMapUpdatedEvent = {
            entityId: entity.id,
            oldMapId: entity.mapId,
            oldX: entity.x,
            oldY: entity.y,
            oldTileType: tile.type,
            newMapId: state.lastSpacePositionByEntity[entity.id].mapId,
            newX: state.lastSpacePositionByEntity[entity.id].x,
            newY: state.lastSpacePositionByEntity[entity.id].y
        }

        entity.mapId = eventPayload.newMapId;
        entity.x = eventPayload.newX;
        entity.y = eventPayload.newY;
        state._energyQueue.push({entityId: entity.id, energyDelta: MANIFEST.actions.Launch.energyDelta})

        state.lastSpacePositionByEntity[entity.id] = undefined
        delete state.lastSpacePositionByEntity[entity.id]

        state = publish(state, "entitymap.updated.event", eventPayload)
    }
    return state
}

export function entities_tile_energy_update(state: State): State {
    for (let entityId in state.entities) {
        let entity: Entity = state.entities[entityId]
        let tool = state.tools[entityId]
        let map = state.maps[entity.mapId]
        let tile = map.getTile(entity.x, entity.y)
        let energyDelta = tile.type.energyDelta

        if (tile.type === MANIFEST.tiles.chargepad && tool?.type.effects.includes(MANIFEST.effects.Recharger.name)) {
            energyDelta *= 2
        } else if (tiles_is_water(tile.type) && tool?.type.effects.includes(MANIFEST.effects.WaterShield.name)) {
            energyDelta /= 2
        } else if (tiles_is_water(tile.type) && tool?.type.effects.includes(MANIFEST.effects.WaterImmunity.name)) { // TODO: this case doesn't work if tool has both WaterShield and WaterImmunity
            energyDelta = 0
        } else if (tile.type === MANIFEST.tiles.drain) {
            const goldCost = Math.min(entity.gold, MANIFEST.constants.DRAIN_GOLD_COST)
            const matterCost = Math.min(entity.matter, MANIFEST.constants.DRAIN_MATTER_COST)

            entity.gold -= goldCost
            entity.matter -= matterCost
        }

        if (energyDelta !== 0) {
            state._energyQueue.push({entityId, energyDelta: energyDelta})
        }
    }

    return state
}

export function entity_map_entitymapUpdatedEvent_subscriber(state: State, payload: EntityMapUpdatedEvent): State {
    const entity = state.entities[payload.entityId]

    switch (payload.oldTileType) {
        case MANIFEST.tiles.portalstartaerobot:
            state = entities_set_type(state, entity, MANIFEST.entities.AeroBot);
            state = log(state, `Booting up as an ${MANIFEST.entities.AeroBot.name}...`)
            break;
        case MANIFEST.tiles.portalstartworkbot:
            state = entities_set_type(state, entity, MANIFEST.entities.WorkBot);
            state = log(state, `Booting up as a ${MANIFEST.entities.WorkBot.name}...`)
            break;
        default:
    }

    return state
}

function _entity_can_move(map: Map, entity: Entity, dx: number, dy: number): boolean {
    let x = entity.x + dx;
    let y = entity.y + dy;
    let tileType = map.getTile(x, y).type;
    return x >= 0 && x < map.widthTiles && y >= 0 && y < map.heightTiles
        && !tiles_is_blocking_movement(tileType);
}

function _entity_can_crush_tile(map: Map, entity: Entity, tool: EquippedItem | undefined, dx: number, dy: number): boolean {
    const x = entity.x + dx;
    const y = entity.y + dy;
    const tileType = map.getTile(x, y).type;

    if (!!tool) {
        return (tool.type.effects.includes(MANIFEST.effects.WallCrusher.name) && tileType === MANIFEST.tiles.wallweak)
            || (tool.type.effects.includes(MANIFEST.effects.RockCrusher.name) && tileType === MANIFEST.tiles.rock)
    }

    return false
}

function _entity_can_open_tile(map: Map, entity: Entity, tool: EquippedItem | undefined, dx: number, dy: number): boolean {
    const x = entity.x + dx;
    const y = entity.y + dy;
    const tileType = map.getTile(x, y).type;

    if (!!tool) {
        return (tool.type.effects.includes(MANIFEST.effects.Screwing.name) && tileType === MANIFEST.tiles.portalsewers)
    }

    return false
}
