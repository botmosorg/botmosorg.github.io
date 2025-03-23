import { entities_create } from "./entity";
import { EntityMapUpdatedEvent } from "./entity_map";
import { items_create_buyable } from "./item";
import { MANIFEST } from "./manifest";
import { maps_destroy, maps_parse } from "./map";
import { State } from "./state";

export function map_shop_entitymapUpdatedEvent_subscriber(state: State, payload: EntityMapUpdatedEvent): State {
    if (payload?.oldMapId?.startsWith("shop_instance")) {
        state = maps_destroy(state, payload.oldMapId)

        const newMap = state.maps[payload.newMapId]
        const previousTile = newMap.getTile(payload.newX, payload.newY)
        newMap.setTile(payload.newX, payload.newY, previousTile.type, {mapId: "shop_instance", x: payload.oldX, y: payload.oldY})
    }

    if (payload?.newMapId?.startsWith("shop_instance")) {
        const map = maps_parse(MANIFEST.map_snippets.shop_instance)
        map.id += "_" + payload.oldMapId + "_" + payload.entityId
        map.setTile(payload.newX, payload.newY, MANIFEST.tiles.portal, {mapId: payload.oldMapId, x: payload.oldX, y: payload.oldY})
        const oldMap = state.maps[payload.oldMapId]
        oldMap.setTile(payload.oldX, payload.oldY, payload.oldTileType, {mapId: map.id, x: payload.newX, y: payload.newY})

        const entity = state.entities[payload.entityId]
        if (entity.id.startsWith("player")) {
            state.currentMapId = map.id;
        }
        entity.mapId = map.id
        entity.x = payload.newX
        entity.Y = payload.newY

        state.maps[map.id] = map

        // Populate with entities and items
        state = items_create_buyable(state, MANIFEST.items.hammer, map.id, 4, 4, 0, -200)
        state = items_create_buyable(state, MANIFEST.items.pickaxe, map.id, 4, 6, 0, -200)
        state = items_create_buyable(state, MANIFEST.items.battery, map.id, 4, 8, 0, -200)
        state = items_create_buyable(state, MANIFEST.items.gold, map.id, 4, 10, 1, -10000)

        state = entities_create(state, map.id + "_shopkeeper", MANIFEST.entities.AeroBot, map.id, 6, 2, {faction: entity.options.faction, dialog: "shop_instance_shopkeeper", name: "Shopkeeper"})
        if (payload?.oldMapId.startsWith("bot_stadium")) {
            state = entities_create(state, map.id + "_shopper", MANIFEST.entities.WorkBot, map.id, 1, 12, {faction: entity.options.faction, dialog: "shop_instance_workbot_shopper"})
        } else if (payload?.oldMapId.startsWith("bot_bar")) {
            state = entities_create(state, map.id + "_shopper", MANIFEST.entities.AeroBot, map.id, 4, 11, {faction: entity.options.faction, dialog: "shop_instance_aerobot_shopper"})
        }
    }

    return state
}
