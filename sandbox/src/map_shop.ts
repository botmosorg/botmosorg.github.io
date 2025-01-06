import { entities_create } from "./entity";
import { EntityMapUpdatedEvent } from "./entity_map";
import { items_create_buyable } from "./item";
import { MANIFEST } from "./manifest";
import { maps_destroy, maps_parse } from "./map";
import { State } from "./state";

const SHOP_INSTANCE_MAP: string = `!
!!id shop_instance
!!size 48 16
!!# wall
!!. void
!!; wallstatueworkbot
!!A wall A
!!B wall B
!!C wall C
!!D wall D
!!E wall E
!!F wall F
!!G wall G
!!H wall H
!!I wall I
!!J wall J
!!K wall K
!!L wall L
!!M wall M
!!N wall N
!!O wall O
!!P wall P
!!Q wall Q
!!R wall R
!!S wall S
!!T wall T
!!U wall U
!!V wall V
!!W wall W
!!X wall X
!!Y wall Y
!!Z wall Z
!!a wall a
!!b wall b
!!c wall c
!!d wall d
!!e wall e
!!f wall f
!!g wall g
!!h wall h
!!i wall i
!!j wall j
!!k wall k
!!l wall l
!!m wall m
!!n wall n
!!o wall o
!!p wall p
!!q wall q
!!r wall r
!!s wall s
!!t wall t
!!u wall u
!!v wall v
!!w wall w
!!x wall x
!!y wall y
!!z wall z
!!0 wall 0
!!1 wall 1
!!2 wall 2
!!- portal bot_stadium 1 14
################################################
#;............................................;#
#..............................................#
#..............................................#
#.....Hammer...200M............................#
#..............................................#
#.....Pickaxe..200M............................#
#..............................................#
#.....Battery..200M............................#
#..............................................#
#.....Gold.....10000M..........................#
#..............................................#
#..............................................#
#..............................................#
#-............................................;#
################################################
`

export function map_shop_entitymapUpdatedEvent_subscriber(state: State, payload: EntityMapUpdatedEvent): State {
    if (payload?.oldMapId?.startsWith("shop_instance")) {
        state = maps_destroy(state, payload.oldMapId)

        const newMap = state.maps[payload.newMapId]
        const previousTile = newMap.getTile(payload.newX, payload.newY)
        newMap.setTile(payload.newX, payload.newY, previousTile.type, {mapId: "shop_instance", x: payload.oldX, y: payload.oldY})
    }

    if (payload?.newMapId?.startsWith("shop_instance")) {
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

        // Populate with entities and items
        state = items_create_buyable(state, MANIFEST.items.hammer, map.id, 4, 4, 0, -200)
        state = items_create_buyable(state, MANIFEST.items.pickaxe, map.id, 4, 6, 0, -200)
        state = items_create_buyable(state, MANIFEST.items.battery, map.id, 4, 8, 0, -200)
        state = items_create_buyable(state, MANIFEST.items.gold, map.id, 4, 10, 0, -10000)

        state = entities_create(state, map.id + "_shopkeeper", MANIFEST.entities.AeroBot, map.id, 6, 2, {faction: entity.options.faction, dialog: "shop_instance_shopkeeper", name: "Shopkeeper"})
        if (payload?.oldMapId.startsWith("bot_stadium")) {
            state = entities_create(state, map.id + "_shopper", MANIFEST.entities.WorkBot, map.id, 1, 12, {faction: entity.options.faction, dialog: "shop_instance_workbot_shopper"})
        } else if (payload?.oldMapId.startsWith("bot_bar")) {
            state = entities_create(state, map.id + "_shopper", MANIFEST.entities.AeroBot, map.id, 4, 11, {faction: entity.options.faction, dialog: "shop_instance_aerobot_shopper"})
        }
    }

    return state
}
