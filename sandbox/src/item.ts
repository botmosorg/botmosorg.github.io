import { debug_log } from "./debug";
import { Entity } from "./entity";
import { State } from "./state";

export interface Item {
    id: string,
    type: any,
    mapId: string,
    x: number,
    y: number,
    energy: number
}

export function items_create(state: State, type, mapId, x=0, y=0): State {
    const id = _items_id_create(mapId, x, y)
    const item = {
        "id": id,
        "type": type,
        "mapId": mapId,
        "x": x,
        "y": y,
        "energy": type.energyDelta
    }
    state.items[item.id] = item

    return state
}

function _items_id_create(mapId: string, x: number, y: number): string {
    return "item," + mapId + "," + x + "," + y
}

export function items_destroy(state: State, itemId: string) {
    state.items[itemId] = undefined
    delete state.items[itemId]

    return state
}

export function items_get_by(state: State, mapId: string): Array<Item> {
    let itemIds = Object.keys(state.items)
    let itemsOnMap: Item[] = []
    for (let i=0; i<itemIds.length; i++) {
        let item = state.items[itemIds[i]]
        if (item.mapId === mapId) {
            itemsOnMap.push(item)
        }
    }
    return itemsOnMap
}

export function items_get_at(state: State, mapId: string, x: number, y: number): Item | null {
    let itemId = _items_id_create(mapId, x, y)
    if (itemId in state.items) {
        return state.items[itemId]
    }
    return null
}

export function items_pickup(state: State, entity: Entity, item: Item): State {
    debug_log("Pickup item " + item.id + " by " + entity.id)
    state._energyQueue.push({entityId: entity.id, energyDelta: item.energy})
    items_destroy(state, item.id)

    return state
}