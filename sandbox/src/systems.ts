import { ai_update } from "./ai";
import { combat_update } from "./combat";
import { energy_update } from "./energy";
import { entities_tile_energy_update } from "./entity_map";
import { despawn_update, spawn_update } from "./spawn";

export function systems_per_turn_update() {
    ai_update()
    combat_update()
    entities_tile_energy_update()
    energy_update()
    despawn_update()
    spawn_update()
}