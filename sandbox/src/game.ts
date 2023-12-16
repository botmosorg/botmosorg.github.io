import { debug_log } from "./debug";
import { entities_create } from "./entity";
import { entity_act } from "./entity_map";
import { items_create } from "./item";
import { Command, MANIFEST } from "./manifest";
import { maps_parse } from "./map"
import { players_get_current } from "./player";
import { maps_create_arena, maps_create_overworld, MAP_SEED } from "./rot_map_generator"
import { State, states_create } from "./state";
import { systems_per_turn_update } from "./systems";

export default class Game {
    turns: number;
    state: State;

    constructor() {
        this.turns = 0
        this.state = states_create()
    }

    init(): State {
        this.state = maps_create_arena(this.state)
        this.state = maps_create_overworld(this.state)

        for (let mapId in MANIFEST.maps) {
            this.state.maps[mapId] = maps_parse(MANIFEST.maps[mapId])
        }

        this.state = entities_create(this.state, "npc0", MANIFEST.spirits.AeroBot, "simplex="+MAP_SEED, 130, 127, {faction: MANIFEST.factions.Spirits})
        this.state = entities_create(this.state, "npc1", MANIFEST.spirits.WorkBot, "simplex="+MAP_SEED, 124, 127, {faction: MANIFEST.factions.Spirits})
        this.state = items_create(this.state, MANIFEST.items.energy, "simplex="+MAP_SEED, 127, 130)

        this.state = entities_create(this.state, "enemy0", MANIFEST.spirits.WorkBot, "arena", 8, 8, {faction: MANIFEST.factions.Pyrates})
        this.state = entities_create(this.state, "enemy1", MANIFEST.spirits.WorkBot, "arena", 9, 8, {faction: MANIFEST.factions.Pyrates})
        this.state = entities_create(this.state, "enemy2", MANIFEST.spirits.WorkBot, "arena", 11, 11, {faction: MANIFEST.factions.Pyrates})
        this.state = entities_create(this.state, "enemy3", MANIFEST.spirits.WorkBot, "arena", 6, 6, {faction: MANIFEST.factions.Pyrates})
        this.state = entities_create(this.state, "enemy4", MANIFEST.spirits.WorkBot, "arena", 12, 12, {faction: MANIFEST.factions.Pyrates})
        this.state = items_create(this.state, MANIFEST.items.energy, "arena", 7, 7)
        this.state = items_create(this.state, MANIFEST.items.energy, "arena", 14, 14)

        this.state.currentMapId = "preloader"
        this.state = entities_create(this.state, players_get_current(), MANIFEST.spirits.Spirit, this.state.currentMapId, 7, 7, {faction: MANIFEST.factions.Spirits})

        return this.state
    }

    update(action: Command | null): State {
        let player = this.state.entities[players_get_current()]
        if (!!player) {
            if (!!action) {
                this.state = entity_act(this.state, player, action)
                this.state = systems_per_turn_update(this.state)
                this.turns += 1
                debug_log("Trn: " + this.turns + ", act: " + action.key + ", plr: (" + player.energy + "/" + player.energyMax + " | " + player.x + "," + player.y + ")")
            }
        } else {
            this.state.currentMapId = "preloader"
            this.state = entities_create(this.state, players_get_current(), MANIFEST.spirits.Spirit, this.state.currentMapId, 7, 7, {faction: MANIFEST.factions.Spirits})
        }

        return this.state
    }
}
