import { Entity } from "./entity";
import { Action, MANIFEST } from "./manifest";
import { State } from "./state";

export interface Actions {
    A: Action,
    B: Action
}

export function actions_get(state: State, entity: Entity): Actions {
    const actions = {
        "A": MANIFEST.actions.Wait,
        "B": MANIFEST.actions.Wait
    }

    const map = state.maps[entity.mapId]
    const tile = map.getTile(entity.x, entity.y)
    if (!!tile.options.mapId && 'x' in tile.options && 'y' in tile.options) { // Portal or landing
        actions.A = MANIFEST.actions.Enter
    }

    return actions
}


