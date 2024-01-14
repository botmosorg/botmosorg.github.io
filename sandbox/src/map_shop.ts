import { EntityMapUpdatedEvent } from "./entity_map";
import { MANIFEST } from "./manifest";
import { maps_destroy, maps_parse } from "./map";
import { State } from "./state";

const SHOP_INSTANCE_MAP: string = `!
!!id shop_instance_
!!size 48 16
!!# wall
!!. void
!!s wallstatue
!!O portal bot_stadium 1 14
################################################
#s............................................s#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#O............................................s#
################################################
`

export function map_shop_entitymapUpdatedEvent_subscriber(state: State, payload: EntityMapUpdatedEvent): State {
    if (payload.oldMapId.startsWith("shop_instance")) {
        state = maps_destroy(state, payload.oldMapId)

        const newMap = state.maps[payload.newMapId]
        const previousTile = newMap.getTile(payload.newX, payload.newY)
        newMap.setTile(payload.newX, payload.newY, previousTile.type, {mapId: "shop_instance", x: payload.oldX, y: payload.oldY})
    }
    if (payload.newMapId.startsWith("shop_instance")) {
        const map = maps_parse(SHOP_INSTANCE_MAP)
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
    }

    return state
}
