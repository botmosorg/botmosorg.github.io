import { energy_queue } from "./energy";
import { entities_get, entities_get_all, entities_get_at, interactOrCombat } from "./entity";
import { items_get_at, items_pickup } from "./item";
import { MANIFEST, Command } from "./manifest";
import { maps_set_current, maps_get } from "./map"

export function entity_act(entity, action: Command) {
    switch (action) {
        case MANIFEST.commands.N:
            entityInteractOrMove(entity, 0, -1)
            break
        case MANIFEST.commands.W:
            entityInteractOrMove(entity, -1, 0)
            break
        case MANIFEST.commands.S:
            entityInteractOrMove(entity, 0, 1)
            break
        case MANIFEST.commands.E:
            entityInteractOrMove(entity, 1, 0)
            break
        default:
    }
}

export function entityInteractOrMove(entity, dx: number, dy: number) {
    // Check for collision:
    /*
    entity -> combat (hostile), interact (friendly)
    tile -> mine (rock), block movement (wall)

    if movement can happen:
    move, pickup items on-tile movement, go through portals on-tile movement
    */
    let map = maps_get(entity.mapId)
    let entity_at_target_position = entities_get_at(map.id, entity.x + dx, entity.y + dy)
    if (entity_at_target_position !== null) {
        interactOrCombat(entity, entity_at_target_position)

    } else if (entity_can_move(map, entity, dx, dy)) {
        entity.x += dx;
        entity.y += dy;

        // Item pickup
        let maybeItem = items_get_at(entity.mapId, entity.x, entity.y)
        if (maybeItem) {
            items_pickup(entity, maybeItem)
        }

        // Portal
        let tile = map.getTile(entity.x, entity.y);
        if (tile.type === MANIFEST.tiles.portal) {
            maps_set_current(tile.options.mapId) // TODO: currently only player can pass portals
            entity.x = tile.options.x;
            entity.y = tile.options.y;
            entity.mapId = tile.options.mapId;
        }
    }
}

export function entities_tile_energy_update() {
    for (let entityId in entities_get_all()) {
        let entity = entities_get(entityId)
        let map = maps_get(entity.mapId)
        let tile = map.getTile(entity.x, entity.y)
        energy_queue(entityId, tile.type.energyDelta)
    }
}

function entity_can_move(map, entity, dx: number, dy: number) {
    let x = entity.x + dx;
    let y = entity.y + dy;
    let tileType = map.getTile(x, y).type;
    return x >= 0 && x < map.widthTiles && y >= 0 && y < map.heightTiles
        && tileType !== MANIFEST.tiles.rock
        && tileType !== MANIFEST.tiles.portalclosed
        && tileType !== MANIFEST.tiles.wall
        && tileType !== MANIFEST.tiles.weakwall;
}
