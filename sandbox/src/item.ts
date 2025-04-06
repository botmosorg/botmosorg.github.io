import { Entity, isMoveableObject } from "./entity";
import { Event, EventType, publish } from "./event";
import { log } from "./log";
import { MANIFEST, ItemType } from "./manifest";
import { State } from "./state";

export interface Item {
    id: string,
    type: ItemType,
    mapId: string,
    x: number,
    y: number,
    energy: number,
    gold: number,
    matter: number
}

export interface EquippedItem {
    type: ItemType
}

export interface ItemEquippedEvent extends Event {
    entityId: string,
    oldEquippedItem: EquippedItem | undefined,
    newEquippedItem: EquippedItem | undefined,
}

export function items_create(state: State, type: ItemType, mapId: string, x=0, y=0): State {
    const id = _items_id_create(mapId, x, y)
    const item = {
        "id": id,
        "type": type,
        "mapId": mapId,
        "x": x,
        "y": y,
        "energy": type.energyDelta,
        "gold": type.gold,
        "matter": type.matter
    }
    state.items[item.id] = item

    return state
}

export function items_create_junk(state: State, matter: number, mapId: string, x=0, y=0): State {
    const type = MANIFEST.items.junk
    const id = _items_id_create(mapId, x, y)
    const item = {
        "id": id,
        "type": type,
        "mapId": mapId,
        "x": x,
        "y": y,
        "energy": type.energyDelta,
        "gold": type.gold,
        "matter": matter
    }
    state.items[item.id] = item

    return state
}

/**
 *
 * @param state
 * @param type
 * @param mapId
 * @param x
 * @param y
 * @param goldCost Negative to indicate a cost
 * @param matterCost Negative to indicate a cost
 */
export function items_create_buyable(state: State, type: ItemType, mapId: string, x=0, y=0, goldCost: number, matterCost: number): State {
    const id = _items_id_create(mapId, x, y)
    const item = {
        "id": id,
        "type": type,
        "mapId": mapId,
        "x": x,
        "y": y,
        "energy": type.energyDelta,
        "gold": goldCost,
        "matter": matterCost
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

export function items_get_equipped(state: State, entityId: string): EquippedItem | null {
    return state.tools[entityId]
}

export function items_pickup(state: State, entity: Entity, item: Item): State {
    if (isMoveableObject(entity)) { // Boulders and boxes don't pick up items
        return state
    }
    if (!_hasEnoughResourcesToPickupItem(entity, item)) { // Only entities with enough resources can pickup item
        return state
    }

    if (_is_tool(item)) {
        state = items_equip(state, entity.id, item.type)

    } else {
        if (item.type === MANIFEST.items.battery) {
            entity.energyMax += item.energy
        }
        state._energyQueue.push({entityId: entity.id, energyDelta: item.energy})

        if (entity.id.startsWith("player")) {
            state = log(state, `Picked up ${item.type.name}.`)
        }
    }

    entity.gold += item.gold
    entity.matter += item.matter

    items_destroy(state, item.id)

    return state
}

export function items_equip(state: State, entityId: string, itemType: ItemType | null | undefined) {
    const currentEquippedItem = state.tools[entityId]
    let newEquippedItem: EquippedItem | undefined = undefined

    if (!!itemType) {
        // Equip
        newEquippedItem = {type: itemType}
        state.tools[entityId] = newEquippedItem

        if (entityId.startsWith("player")) {
            state = log(state, `Equipped ${itemType.name}.`)
        }

    } else if (!!currentEquippedItem) {
        // Unequip
        const unequippedItemType = currentEquippedItem.type
        state.tools[entityId] = newEquippedItem

        if (entityId.startsWith("player")) {
            state = log(state, `Unequipped ${unequippedItemType}.`)
        }
    }

    const eventPayload: ItemEquippedEvent = {
        entityId: entityId,
        oldEquippedItem: currentEquippedItem,
        newEquippedItem: newEquippedItem,
    }

    state = publish(state, EventType.item_equipped_event, eventPayload)

    return state
}

function _is_tool(item: Item): boolean {
    return item.type.energyCost < 0
}

function _hasEnoughResourcesToPickupItem(entity: Entity, item: Item): boolean {
    return entity.gold + item.gold >= 0 && entity.matter + item.matter >= 0
}