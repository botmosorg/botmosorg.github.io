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
