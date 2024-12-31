import { ais_create, ais_destroy } from "./ai";
import { entities_create, entities_destroy } from "./entity";
import { items_create, items_equip } from "./item";
import { MANIFEST } from "./manifest";
import { State } from "./state";

export function despawn_update(state: State): State {
    let entityIdtoDespawn: string | undefined = undefined
    while (typeof(entityIdtoDespawn = state._despawnQueue.shift()) !== 'undefined') {
        state = entities_destroy(state, entityIdtoDespawn)
        state = ais_destroy(state, entityIdtoDespawn)
    }

    return state
}

export function spawn_update(state: State): State {
    return state
}

export class SpawnCommand {
    mapId: string;
    x: number;
    y: number;
    entityOrItemName: string;
    options: object;

    constructor(mapId: string, x: number, y: number, entityOrItemName: string, options: object={}) {
        this.mapId = mapId;
        this.x = x;
        this.y = y;
        this.entityOrItemName = entityOrItemName;
        this.options = options;

        if (entityOrItemName === "movablebox" && !Object.hasOwn(this.options, "faction")) {
            this.options["faction"] = "Equipment"
        } else if (entityOrItemName === "movableboulder" && !Object.hasOwn(this.options, "faction")) {
            this.options["faction"] = "Gaia"
        }
    }

    generateId(): string {
        // TODO: add random component to generated IDs
        return this.mapId + "," + this.entityOrItemName + "," + this.x + "," + this.y + "/g" // generated
    }
}

/**
 * High-level function to create (spawn) entities or items.
 * Should be used in favor of low-level functions like entities_create, items_create, ais_create etc.
 *
 * @param state
 * @param command
 * @returns
 */
export function spawn(state: State, command: SpawnCommand): State {
    if (_isEntityName(command.entityOrItemName)) {
        // Entities
        const options = command.options
        if (Object.hasOwn(options, "ai")) {
            options["ai"] = MANIFEST.ais[options["ai"]]
        }
        if (Object.hasOwn(options, "faction")) {
            options["faction"] = MANIFEST.factions[options["faction"]]
        }

        const entityId = command.generateId()
        state = entities_create(state, entityId, MANIFEST.entities[command.entityOrItemName], command.mapId, command.x, command.y, options)

        if (Object.hasOwn(options, "equip") && _isItemName(options["equip"])) {
            state = items_equip(state, entityId, MANIFEST.items[options["equip"]])
        }

        if (Object.hasOwn(options, "ai")) {
            state = ais_create(state, entityId, options["ai"])
        }

    } else if (_isItemName(command.entityOrItemName)) {
        // Items
        state = items_create(state, MANIFEST.items[command.entityOrItemName], command.mapId, command.x, command.y)
    }

    return state
}

function _isEntityName(entityOrItemName: string) {
    return Object.hasOwn(MANIFEST.entities, entityOrItemName)
}

function _isItemName(entityOrItemName: string) {
    return Object.hasOwn(MANIFEST.items, entityOrItemName)
}