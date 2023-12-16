import { ai_destroy } from "./ai";
import { entities_destroy } from "./entity";
import { State } from "./state";

export function despawn_update(state: State): State {
    let entityIdtoDespawn: string | undefined = undefined
    while (typeof(entityIdtoDespawn = state._despawnQueue.shift()) !== 'undefined') {
        state = entities_destroy(state, entityIdtoDespawn)
        ai_destroy(state, entityIdtoDespawn)
    }

    return state
}

export function spawn_update(state: State): State {
    return state
}