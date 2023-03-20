"use strict";

import { debug_log } from "./debug.js";
import { entities_create, entities_store } from "./entity.js";
import { entity_act } from "./entity_map.js";
import { get_action } from "./input.js";
import { MANIFEST } from "./manifest.js";
import { maps_store, maps_set_current } from "./map.js"
import { maps_create_arena, maps_create_overworld, MAP_SEED } from "./rot_map.js"
import { STATE } from "./state.js";
import { systems_update } from "./systems.js";

export default class Game {
    constructor() {
        this.turns = 0
    }

    init() {
        maps_store(maps_create_arena())
        maps_store(maps_create_overworld())
        maps_set_current("simplex="+MAP_SEED)

        STATE.playerId = "player"
        entities_store(entities_create(STATE.playerId, MANIFEST.spirits.Spirit, STATE.currentMapId, 127, 127, {faction: MANIFEST.factions.Spirits}))
        entities_store(entities_create("npc0", MANIFEST.spirits.AeroBot, STATE.currentMapId, 130, 127, {faction: MANIFEST.factions.Spirits}))
        entities_store(entities_create("npc1", MANIFEST.spirits.WorkBot, STATE.currentMapId, 124, 127, {faction: MANIFEST.factions.Spirits}))

        entities_store(entities_create("enemy0", MANIFEST.spirits.WorkBot, "arena", 8, 8, {faction: MANIFEST.factions.Pyrates}))
        entities_store(entities_create("enemy1", MANIFEST.spirits.WorkBot, "arena", 9, 8, {faction: MANIFEST.factions.Pyrates}))
        entities_store(entities_create("enemy2", MANIFEST.spirits.WorkBot, "arena", 11, 11, {faction: MANIFEST.factions.Pyrates}))
        entities_store(entities_create("enemy3", MANIFEST.spirits.WorkBot, "arena", 6, 6, {faction: MANIFEST.factions.Pyrates}))
        entities_store(entities_create("enemy4", MANIFEST.spirits.WorkBot, "arena", 12, 12, {faction: MANIFEST.factions.Pyrates}))
    }

    update() {
        let action = get_action()
        let player = STATE.entities[STATE.playerId]
        if (action !== null) {
            debug_log("Trn: " + this.turns + ", act: " + action.key + ", plr: (" + player.x + "," + player.y + ")")
            entity_act(player, action)
            systems_update()
            this.turns += 1
        }

        return player
    }
}
