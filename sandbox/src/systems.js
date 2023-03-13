"use strict";

import { combat_update } from "./combat.js";
import { despawn_update } from "./spawn.js";

export function systems_update() {
    combat_update()
    despawn_update()
}