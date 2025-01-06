import { debug_log } from "./debug";
import { entities_create } from "./entity";
import { entity_act, entity_map_entitymapUpdatedEvent_subscriber } from "./entity_map";
import { subscribe } from "./events";
import { Command, MANIFEST } from "./manifest";
import { maps_create_all_manual } from "./map"
import { maps_create_solar_system } from "./map_generator_solar_system";
import { map_shop_entitymapUpdatedEvent_subscriber } from "./map_shop";
import { players_get_current_id } from "./player";
import { State, states_create } from "./state";
import { systems_per_turn_update } from "./systems";

export default class Game {
    state: State;

    constructor() {
    }

    init(): State {
        this.state = states_create()

        this.state = subscribe(this.state, "entitymap.updated.event", entity_map_entitymapUpdatedEvent_subscriber)
        this.state = subscribe(this.state, "entitymap.updated.event", map_shop_entitymapUpdatedEvent_subscriber)

        this.state = maps_create_solar_system(this.state)
        this.state = maps_create_all_manual(this.state)

        this.state.currentMapId = "botmos_hull_selection"
        this.state = entities_create(this.state, players_get_current_id(), MANIFEST.entities.Spirit, this.state.currentMapId, 9, 5, {faction: MANIFEST.factions.Spirits, name: "Player"})

        return this.state
    }

    update(action: Command | null): State {
        let player = this.state.entities[players_get_current_id()]
        if (!!player) {
            if (!!action) {
                if (action === MANIFEST.commands.M) {
                    this.state._menuOpen = !this.state._menuOpen
                } else {
                    this.state = entity_act(this.state, player, action)
                    this.state = systems_per_turn_update(this.state)
                }

                this.state.actionLog.push(action.key)
                //debug_log("Turn: " + this.actionLog.length + ", act: " + action.key + ", plr: (" + player.energy + "/" + player.energyMax + " | " + player.x + "," + player.y + ")")
            }
        } else {
            debug_log("Game over! " + this.state.actionLog.length + " Turns: " + this.state.actionLog.join(''))

            this.state.currentMapId = "botmos_hull_selection"
            this.state = entities_create(this.state, players_get_current_id(), MANIFEST.entities.Spirit, this.state.currentMapId, 9, 5, {faction: MANIFEST.factions.Spirits, name: "Player"})
        }

        return this.state
    }

    play(actions: string): State {
        for (let i=0; i<actions.length; i++) {
            const action = actions[i]
            this.update(MANIFEST.commands[action])
        }

        return this.state
    }
}
