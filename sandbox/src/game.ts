import { debug_log } from "./debug";
import { entities_create, entities_create_boulder, entities_create_box } from "./entity";
import { entity_act, entity_map_entitymapUpdatedEvent_subscriber } from "./entity_map";
import { subscribe } from "./events";
import { items_create, items_equip } from "./item";
import { Command, MANIFEST } from "./manifest";
import { maps_parse } from "./map"
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

        for (let mapId in MANIFEST.maps) {
            this.state.maps[mapId] = maps_parse(MANIFEST.maps[mapId])
        }

        // TODO Pupulate map entities and items elsewhere
        this.state = entities_create(this.state, "manual0", MANIFEST.entities.Spirit, "manual", 4, 26, {faction: MANIFEST.factions.Spirits})
        this.state = entities_create(this.state, "manual1", MANIFEST.entities.AeroBot, "manual", 4, 27, {faction: MANIFEST.factions.Spirits})
        this.state = entities_create(this.state, "manual2", MANIFEST.entities.WorkBot, "manual", 4, 28, {faction: MANIFEST.factions.Spirits})
        this.state = entities_create(this.state, "manual3", MANIFEST.entities.Cleaner, "manual", 4, 29, {faction: MANIFEST.factions.Spirits})
        this.state = entities_create(this.state, "manual4", MANIFEST.entities.Pioneer, "manual", 4, 30, {faction: MANIFEST.factions.Spirits})
        this.state = entities_create(this.state, "manual5", MANIFEST.entities.Spirit, "manual", 54, 36, {faction: MANIFEST.factions.Pyrates, ai: MANIFEST.ais.aggrorange})
        this.state = items_create(this.state, MANIFEST.items.junk, "manual", 4, 36)
        this.state = items_create(this.state, MANIFEST.items.goo, "manual", 12, 36)
        this.state = items_create(this.state, MANIFEST.items.matter, "manual", 4, 37)
        this.state = items_create(this.state, MANIFEST.items.gold, "manual", 4, 38)
        this.state = items_create(this.state, MANIFEST.items.energy, "manual", 4, 39)
        this.state = items_create(this.state, MANIFEST.items.battery, "manual", 4, 40)
        this.state = items_create(this.state, MANIFEST.items.wrench, "manual", 4, 41)

        // Bot station
        this.state = entities_create(this.state, "pioneerguardian0", MANIFEST.entities.Pioneer, "bot_station", 8, 3, {faction: MANIFEST.factions.Guardians, ai: MANIFEST.ais.aggrorangeshort})
        this.state = items_equip(this.state, "pioneerguardian0", MANIFEST.items.hammer)
        this.state = entities_create(this.state, "cleanerguardian0", MANIFEST.entities.Cleaner, "bot_station", 10, 9, {faction: MANIFEST.factions.Guardians, ai: MANIFEST.ais.guardian})
        this.state = entities_create(this.state, "cleanerguardian1", MANIFEST.entities.Cleaner, "bot_station", 12, 9, {faction: MANIFEST.factions.Guardians, ai: MANIFEST.ais.guardian})
        this.state = entities_create(this.state, "cleanerguardian2", MANIFEST.entities.Cleaner, "bot_station", 14, 9, {faction: MANIFEST.factions.Guardians, ai: MANIFEST.ais.guardian})
        this.state = entities_create(this.state, "cleanerguardian3", MANIFEST.entities.Cleaner, "bot_station", 16, 9, {faction: MANIFEST.factions.Guardians, ai: MANIFEST.ais.guardian})
        this.state = entities_create(this.state, "cleanerguardian4", MANIFEST.entities.Cleaner, "bot_station", 18, 9, {faction: MANIFEST.factions.Guardians, ai: MANIFEST.ais.guardian})
        this.state = entities_create(this.state, "cleanerguardian5", MANIFEST.entities.Cleaner, "bot_station", 20, 9, {faction: MANIFEST.factions.Guardians, ai: MANIFEST.ais.guardian})
        this.state = entities_create(this.state, "cleanerguardian6", MANIFEST.entities.Cleaner, "bot_station", 22, 9, {faction: MANIFEST.factions.Guardians, ai: MANIFEST.ais.guardian})
        this.state = entities_create(this.state, "cleanerguardian7", MANIFEST.entities.Cleaner, "bot_station", 24, 9, {faction: MANIFEST.factions.Guardians, ai: MANIFEST.ais.guardian})
        this.state = entities_create(this.state, "cleanerguardian8", MANIFEST.entities.Cleaner, "bot_station", 26, 9, {faction: MANIFEST.factions.Guardians, ai: MANIFEST.ais.guardian})
        this.state = entities_create(this.state, "cleanerguardian9", MANIFEST.entities.Cleaner, "bot_station", 28, 9, {faction: MANIFEST.factions.Guardians, ai: MANIFEST.ais.guardian})

        // Bot bar
        this.state = entities_create_box(this.state, "bot_bar", 14, 3)
        this.state = entities_create_box(this.state, "bot_bar", 14, 12)
        this.state = entities_create(this.state, "hostess0", MANIFEST.entities.AeroBot, "bot_bar", 2, 4, {faction: MANIFEST.factions.Spirits})
        this.state = entities_create(this.state, "hostess1", MANIFEST.entities.AeroBot, "bot_bar", 4, 8, {faction: MANIFEST.factions.Spirits})
        this.state = entities_create(this.state, "hostess2", MANIFEST.entities.AeroBot, "bot_bar", 10, 7, {faction: MANIFEST.factions.Spirits})
        this.state = entities_create(this.state, "hostess3", MANIFEST.entities.AeroBot, "bot_bar", 21, 3, {faction: MANIFEST.factions.Spirits})
        this.state = entities_create(this.state, "hostess4", MANIFEST.entities.AeroBot, "bot_bar", 21, 5, {faction: MANIFEST.factions.Spirits})

        // Bot prison
        this.state = entities_create(this.state, "cleanerjailer0", MANIFEST.entities.Cleaner, "bot_prison", 18, 11, {faction: MANIFEST.factions.Guardians, ai: MANIFEST.ais.aggrorange})
        this.state = entities_create(this.state, "cleanerjailer1", MANIFEST.entities.Cleaner, "bot_prison", 17, 2, {faction: MANIFEST.factions.Guardians, ai: MANIFEST.ais.aggrorange})
        this.state = entities_create(this.state, "cleanerjailer2", MANIFEST.entities.Cleaner, "bot_prison", 24, 5, {faction: MANIFEST.factions.Guardians, ai: MANIFEST.ais.aggrorange})
        this.state = entities_create(this.state, "cleanerjailer3", MANIFEST.entities.Cleaner, "bot_prison", 29, 24, {faction: MANIFEST.factions.Guardians, ai: MANIFEST.ais.aggrorangeshort})
        this.state = entities_create(this.state, "prisoner0", MANIFEST.entities.AeroBot, "bot_prison", 34, 22, {faction: MANIFEST.factions.Spirits})
        this.state = entities_create(this.state, "prisoner1", MANIFEST.entities.WorkBot, "bot_prison", 9, 22, {faction: MANIFEST.factions.Spirits})
        this.state = items_create(this.state, MANIFEST.items.broom, "bot_prison", 28, 1)
        this.state = items_create(this.state, MANIFEST.items.battery, "bot_prison", 43, 30)
        this.state = items_create(this.state, MANIFEST.items.matter, "bot_prison", 9, 30)
        this.state = items_create(this.state, MANIFEST.items.pickaxe, "bot_prison", 9, 21)

        this.state = items_create(this.state, MANIFEST.items.battery, "bot_dormitory", 13, 8)
        this.state = items_create(this.state, MANIFEST.items.junk, "bot_dormitory_hidden", 1, 2)
        this.state = items_create(this.state, MANIFEST.items.battery, "bot_dormitory_hidden", 2, 2)
        this.state = items_create(this.state, MANIFEST.items.shocker, "bot_bar", 10, 11)
        this.state = items_create(this.state, MANIFEST.items.hammer, "bot_elevator", 12, 3)
        this.state = items_create(this.state, MANIFEST.items.wrench, "bot_factory", 45, 19)
        this.state = items_create(this.state, MANIFEST.items.battery, "bot_factory", 4, 13)

        for (let y=2; y<=8; y++) {
            for (let x=2; x<=8; x++) {
                this.state = items_create(this.state, MANIFEST.items.junk, "bot_factory", x, y)
            }
        }

        // TODO Playground
        this.state = entities_create_boulder(this.state, "playground", 9, 9)
        this.state = entities_create_boulder(this.state, "playground", 10, 9)
        this.state = items_create(this.state, MANIFEST.items.trident, "playground", 9, 17)
        for (let x=1; x<=18; x++) {
            this.state = items_create(this.state, MANIFEST.items.battery, "playground", x, 18)
        }

        this.state.currentMapId = "botmos_hull_selection"
        this.state = entities_create(this.state, players_get_current_id(), MANIFEST.entities.Spirit, this.state.currentMapId, 9, 5, {faction: MANIFEST.factions.Spirits})

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
            this.state = entities_create(this.state, players_get_current_id(), MANIFEST.entities.Spirit, this.state.currentMapId, 9, 5, {faction: MANIFEST.factions.Spirits})
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
