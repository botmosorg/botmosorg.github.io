import { ai_destroy } from "./ai";
import { entities_destroy } from "./entity";
import { items_store } from "./item";
import { State } from "./state";

let _despawnQueue: string[] = []
export function despawn_queue(entityId: string) {
    _despawnQueue.push(entityId)
}

let _itemSpawnQueue: any[] = []
export function spawn_item_queue(item: any) {
    _itemSpawnQueue.push(item)
}

export function despawn_update(state: State): State {
    let entityIdtoDespawn: string | undefined = undefined
    while (typeof(entityIdtoDespawn = _despawnQueue.shift()) !== 'undefined') {
        state = entities_destroy(state, entityIdtoDespawn)
        ai_destroy(entityIdtoDespawn)
    }

    return state
}

export function spawn_update() {
    // Items
    let itemToSpawn = undefined
    while (typeof(itemToSpawn = _itemSpawnQueue.shift()) !== 'undefined') {
        items_store(itemToSpawn)
    }
}