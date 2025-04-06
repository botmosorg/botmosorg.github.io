import { debug_entity_position } from "./debug";
import { effect_itemEquippedEvent_subscriber, effect_itemPickedupEvent_subscriber } from "./effect";
import { entities_create } from "./entity";
import { entity_act, entity_map_entitymapUpdatedEvent_subscriber } from "./entity_map";
import { EventType, subscribe } from "./event";
import { log } from "./log";
import { CommandType, MANIFEST } from "./manifest";
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

        this.state = subscribe(this.state, EventType.entitymap_updated_event, entity_map_entitymapUpdatedEvent_subscriber)
        this.state = subscribe(this.state, EventType.entitymap_updated_event, map_shop_entitymapUpdatedEvent_subscriber)
        this.state = subscribe(this.state, EventType.item_equipped_event, effect_itemEquippedEvent_subscriber)
        this.state = subscribe(this.state, EventType.item_pickedup_event, effect_itemPickedupEvent_subscriber)

        this.state = maps_create_solar_system(this.state)
        this.state = maps_create_all_manual(this.state)

        this.state.currentMapId = "botmos_hull_selection"
        this.state = entities_create(this.state, players_get_current_id(), MANIFEST.entities.Spirit, this.state.currentMapId, 9, 5, {faction: MANIFEST.factions.Spirits, name: "Player"})

        return this.state
    }

    update(action: CommandType | null, headless=false): State {
        let player = this.state.entities[players_get_current_id()]
        if (!!player) {
            if (!!action) {
                switch (action) {
                    case MANIFEST.commands.M:
                        this.state._menuOpen = !this.state._menuOpen
                        break
                    case MANIFEST.commands["#"]:
                        this.state = log(this.state, debug_entity_position(this.state, players_get_current_id()))
                        break
                    default:
                        this.state = entity_act(this.state, player, action)
                        this.state = systems_per_turn_update(this.state)
                }

                this.state.actionLog.push(action.key)
            }
        } else {
            this.state = log(this.state, `Game over! ${this.state.actionLog.length} turns.`)
            console.log(`Game over! ${this.state.actionLog.length} turns: ${this.state.actionLog.join('')}`)

            this.state.currentMapId = "botmos_hull_selection"
            this.state = entities_create(this.state, players_get_current_id(), MANIFEST.entities.Spirit, this.state.currentMapId, 9, 5, {faction: MANIFEST.factions.Spirits, name: "Player"})
        }

        return this.state
    }

    play(actions: string): State {
        for (let i=0; i<actions.length; i++) {
            const action = actions[i]
            this.update(MANIFEST.commands[action], true)
        }

        return this.state
    }
}
