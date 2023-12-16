import { entities_get_at, interactOrCombat } from "./entity";
import { items_get_at, items_pickup } from "./item";
import { MANIFEST, Command } from "./manifest";
import { State } from "./state";

export function entity_act(state: State, entity, action: Command): State {
    switch (action) {
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
        default:
    }

    return state;
}

export function entityInteractOrMove(state: State, entity, dx: number, dy: number): State {
    // Check for collision:
    /*
    entity -> combat (hostile), interact (friendly)
    tile -> mine (rock), block movement (wall)

    if movement can happen:
    move, pickup items on-tile movement, go through portals on-tile movement
    */
    let map = state.maps[entity.mapId]
    let entity_at_target_position = entities_get_at(state, map.id, entity.x + dx, entity.y + dy)
    if (!!entity_at_target_position) {
        state = interactOrCombat(state, entity, entity_at_target_position)

    } else if (entity_can_move(map, entity, dx, dy)) {
        entity.x += dx;
        entity.y += dy;

        // Item pickup
        let maybeItem = items_get_at(entity.mapId, entity.x, entity.y)
        if (maybeItem) {
            state = items_pickup(state, entity, maybeItem)
        }

        // Portal
        let tile = map.getTile(entity.x, entity.y);
        if (tile.type === MANIFEST.tiles.portal) {
            state.currentMapId = tile.options.mapId // TODO: currently only player can pass portals
            entity.x = tile.options.x;
            entity.y = tile.options.y;
            entity.mapId = tile.options.mapId;
        }
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

function entity_can_move(map, entity, dx: number, dy: number): boolean {
    let x = entity.x + dx;
    let y = entity.y + dy;
    let tileType = map.getTile(x, y).type;
    return x >= 0 && x < map.widthTiles && y >= 0 && y < map.heightTiles
        && tileType !== MANIFEST.tiles.rock
        && tileType !== MANIFEST.tiles.portalclosed
        && tileType !== MANIFEST.tiles.wall
        && tileType !== MANIFEST.tiles.weakwall;
}
