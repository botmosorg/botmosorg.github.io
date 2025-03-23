import { Entity } from "./entity";
import { ActionType, MANIFEST } from "./manifest";
import { State } from "./state";

export interface Actions {
    A: ActionType,
    B: ActionType
}

export function actions_get(state: State, entity: Entity): Actions {
    const actions = {
        "A": MANIFEST.actions.Wait,
        "B": MANIFEST.actions.Wait
    }

    if (!!state.lastSpacePositionByEntity[entity.id]
        && (entity.energy > Math.abs(MANIFEST.actions.Launch.energyDelta))) { // Launching into space
        actions.A = MANIFEST.actions.Launch
    }

    const map = state.maps[entity.mapId]
    const tile = map.getTile(entity.x, entity.y)
    if (!!tile.options.mapId && 'x' in tile.options && 'y' in tile.options) { // Portal or landing
        actions.A = MANIFEST.actions.Enter
    }

    return actions
}


