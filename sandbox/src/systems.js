"use strict";

import { ai_update } from "./ai.js";
import { combat_update } from "./combat.js";
import { energy_update } from "./energy.js";
import { entities_tile_energy_update } from "./entity_map.js";
import { despawn_update } from "./spawn.js";

export function systems_per_turn_update() {
    ai_update()
    combat_update()
    entities_tile_energy_update()
    energy_update()
    despawn_update()
}