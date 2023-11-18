import { debug_log } from "./debug.js";
import { entities_create, entities_store } from "./entity.js";
import { entity_act } from "./entity_map.js";
import { get_action } from "./input.js";
import { items_create, items_store } from "./item.js";
import { MANIFEST } from "./manifest.js";
import { maps_parse, maps_store, maps_set_current } from "./map.js"
import { maps_create_arena, maps_create_overworld, MAP_SEED } from "./rot_map_generator.js"
import { STATE } from "./state.js";
import { systems_per_turn_update } from "./systems";

export default class Game {
    constructor() {
        this.turns = 0
    }

    init() {
        maps_store(maps_create_arena())
        maps_store(maps_create_overworld())
        for (let mapId in MANIFEST.maps) {
            maps_store(maps_parse(MANIFEST.maps[mapId]))
        }

        entities_store(entities_create("npc0", MANIFEST.spirits.AeroBot, "simplex="+MAP_SEED, 130, 127, {faction: MANIFEST.factions.Spirits}))
        entities_store(entities_create("npc1", MANIFEST.spirits.WorkBot, "simplex="+MAP_SEED, 124, 127, {faction: MANIFEST.factions.Spirits}))
        items_store(items_create(MANIFEST.items.energy, "simplex="+MAP_SEED, 127, 130))

        entities_store(entities_create("enemy0", MANIFEST.spirits.WorkBot, "arena", 8, 8, {faction: MANIFEST.factions.Pyrates}))
        entities_store(entities_create("enemy1", MANIFEST.spirits.WorkBot, "arena", 9, 8, {faction: MANIFEST.factions.Pyrates}))
        entities_store(entities_create("enemy2", MANIFEST.spirits.WorkBot, "arena", 11, 11, {faction: MANIFEST.factions.Pyrates}))
        entities_store(entities_create("enemy3", MANIFEST.spirits.WorkBot, "arena", 6, 6, {faction: MANIFEST.factions.Pyrates}))
        entities_store(entities_create("enemy4", MANIFEST.spirits.WorkBot, "arena", 12, 12, {faction: MANIFEST.factions.Pyrates}))
        items_store(items_create(MANIFEST.items.energy, "arena", 7, 7))
        items_store(items_create(MANIFEST.items.energy, "arena", 14, 14))

        STATE.playerId = "player"
        //maps_set_current("simplex="+MAP_SEED)
        //entities_store(entities_create(STATE.playerId, MANIFEST.spirits.Spirit, STATE.currentMapId, 127, 127, {faction: MANIFEST.factions.Spirits}))
        maps_set_current("preloader")
        entities_store(entities_create(STATE.playerId, MANIFEST.spirits.Spirit, STATE.currentMapId, 7, 7, {faction: MANIFEST.factions.Spirits}))
    }

    update() {
        let action = get_action()
        let player = STATE.entities[STATE.playerId]
        if (player !== undefined) {
            if (action !== null) {
                entity_act(player, action)
                systems_per_turn_update()
                debug_log("Trn: " + this.turns + ", act: " + action.key + ", plr: (" + player.energy + "/" + player.energyMax + " | " + player.x + "," + player.y + ")")
                this.turns += 1
            }
        } else {
            maps_set_current("preloader")
            entities_store(entities_create(STATE.playerId, MANIFEST.spirits.Spirit, STATE.currentMapId, 7, 7, {faction: MANIFEST.factions.Spirits}))
            player = STATE.entities[STATE.playerId]
        }

        return player
    }
}
