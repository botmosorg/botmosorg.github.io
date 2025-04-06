import { ai_update } from "./ai";
import { combat_update } from "./combat";
import { effects_update } from "./effect";
import { energy_update } from "./energy";
import { entities_tile_energy_update } from "./entity_map";
import { despawn_update, spawn_update } from "./spawn";
import { State } from "./state";

export function systems_per_turn_update(state: State): State {

    state = ai_update(state)
    state = combat_update(state)
    state = entities_tile_energy_update(state)
    state = energy_update(state)
    state = effects_update(state)
    state = despawn_update(state)
    state = spawn_update(state)

    return state
}