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

    return actions
}


