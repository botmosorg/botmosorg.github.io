"use strict";

import { debug_log } from "./debug.js";
import { create_character, entities_store } from "./entity.js";
import { entity_act } from "./entity_map.js";
import { get_action } from "./input.js";
import { MANIFEST } from "./manifest.js";
import { maps_store, maps_set_current, create_map_arena, create_map_overworld, MAP_SEED } from "./map.js"
import { STATE } from "./state.js";

export default class Game {
    constructor() {
        this.turns = 0
    }

    init() {
        maps_store(create_map_arena())
        maps_store(create_map_overworld())
        maps_set_current("simplex="+MAP_SEED)
        //maps_set_current("arena")

        STATE.playerId = "player";
        entities_store(create_character(STATE.playerId, MANIFEST.spirits.Spirit, STATE.currentMapId, 127, 127, {faction: MANIFEST.factions.Spirits}))
        entities_store(create_character("npc0", MANIFEST.spirits.AeroBot, STATE.currentMapId, 130, 127, {faction: MANIFEST.factions.Spirits}))
        entities_store(create_character("npc1", MANIFEST.spirits.WorkBot, STATE.currentMapId, 124, 127, {faction: MANIFEST.factions.Spirits}))
        entities_store(create_character("npc2", MANIFEST.spirits.WorkBot, "arena", 8, 8, {faction: MANIFEST.factions.Pyrates}))
    }

    update(dt) {
        let action = get_action();
        let player = STATE.entities[STATE.playerId];
        if (action !== null) {
            entity_act(player, action)
            debug_log("Trn: " + this.turns + ", act: " + action.key + ", plr: (" + player.x + "," + player.y + ")");
            this.turns += 1
        }

        return player
    }
}
