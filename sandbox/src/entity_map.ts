import { Entity, entities_get_at, entities_set_type, interactOrCombat } from "./entity";
import { EquippedItem, items_get_at, items_pickup } from "./item";
import { MANIFEST, Command } from "./manifest";
import { Map } from "./map";
import { State } from "./state";

export function entity_act(state: State, entity: Entity, action: Command): State {
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

export function entityInteractOrMove(state: State, entity: Entity, dx: number, dy: number): State {
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
        state = interactOrCombat(state, entity, entity_at_target_position)

    } else if (entity_can_move(map, entity, dx, dy)) {
        entity.x += dx;
        entity.y += dy;

        // Item pickup
        let maybeItem = items_get_at(state, entity.mapId, entity.x, entity.y)
        if (!!maybeItem) {
            state = items_pickup(state, entity, maybeItem)
        }

        // Portal
        let tile = map.getTile(entity.x, entity.y);
        if ((tile.type === MANIFEST.tiles.portal
                || tile.type === MANIFEST.tiles.portalhidden
                || tile.type.name.startsWith('portalstart'))
            && !!state.maps[tile.options.mapId]) {
            state.currentMapId = tile.options.mapId // TODO: currently only player can pass portals
            entity.x = tile.options.x;
            entity.y = tile.options.y;
            entity.mapId = tile.options.mapId;

            // TODO: move elsewhere
            switch (tile.type) {
                case MANIFEST.tiles.portalstartaerobot: state = entities_set_type(state, entity, MANIFEST.spirits.AeroBot); break;
                case MANIFEST.tiles.portalstartworkbot: state = entities_set_type(state, entity, MANIFEST.spirits.WorkBot); break;
                default:
            }
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

    } else if (entity_can_crush_wallweak(map, entity, tool, dx, dy)) {
        map.setTile(entity.x + dx, entity.y + dy, MANIFEST.tiles.void)
        state._energyQueue.push({entityId: entity.id, energyDelta: tool.type.energyCost})

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

function entity_can_move(map: Map, entity: Entity, dx: number, dy: number): boolean {
    let x = entity.x + dx;
    let y = entity.y + dy;
    let tileType = map.getTile(x, y).type;
    return x >= 0 && x < map.widthTiles && y >= 0 && y < map.heightTiles
        && tileType !== MANIFEST.tiles.rock
        && tileType !== MANIFEST.tiles.portalclosed
        && !tileType.name.startsWith('wall');
}

function entity_can_crush_wallweak(map: Map, entity: Entity, tool: EquippedItem | undefined, dx: number, dy: number) {
    const x = entity.x + dx;
    const y = entity.y + dy;
    const tileType = map.getTile(x, y).type;

    if (!!tool) {
        return tool.type.effects.includes(MANIFEST.effects.WallCrusher.name)
                && tileType === MANIFEST.tiles.wallweak
    }

    return false
}
