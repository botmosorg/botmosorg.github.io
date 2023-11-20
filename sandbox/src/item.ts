import { debug_log } from "./debug";
import { energy_queue } from "./energy";

const _STATE = {
    items: {}
}

export function items_create(type, mapId, x=0, y=0) {
    let id = _items_id_create(mapId, x, y)
    return {
        "id": id,
        "type": type,
        "mapId": mapId,
        "x": x,
        "y": y,
        "energy": type.energyDelta
    }
}

function _items_id_create(mapId: string, x: number, y: number) {
    return "item" + mapId + x + y
}

export function items_destroy(itemId) {
    _STATE.items[itemId] = undefined
    delete _STATE.items[itemId]
}

export function items_store(item) {
    _STATE.items[item.id] = item
}

export function items_get_by(mapId: string) {
    let itemIds = Object.keys(_STATE.items)
    let itemsOnMap: any[] = []
    for (let i=0; i<itemIds.length; i++) {
        let item = _STATE.items[itemIds[i]]
        if (item.mapId === mapId) {
            itemsOnMap.push(item)
        }
    }
    return itemsOnMap
}

export function items_get_at(mapId, x, y) {
    let itemId = _items_id_create(mapId, x, y)
    if (itemId in _STATE.items) {
        return _STATE.items[itemId]
    }
    return null
}

export function items_pickup(entity, item) {
    debug_log("Pickup item " + item.id + " by " + entity.id)
    energy_queue(entity.id, item.energy)
    items_destroy(item.id)
}