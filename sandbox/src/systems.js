"use strict";

import { ai_update } from "./ai.js";
import { combat_update } from "./combat.js";
import { despawn_update } from "./spawn.js";

export function systems_update() {
    ai_update()
    combat_update()
    despawn_update()
}