import { RNG } from "./rng"

export interface State {
    _AIs: object,
    _combatQueue: Array<{entityId: string, otherEntityId: string}>,
    _despawnQueue: Array<string>,
    _energyQueue: Array<{entityId: string, energyDelta: number}>
    _eventSubscribers: object,
    _menuOpen: boolean,
    actionLog: Array<string>,
    chatLog: Array<string>,
    currentMapId: string,
    entities: object,
    items: object,
    lastSpacePositionByEntity: object
    maps: object,
    rng: RNG,
    tools: object,
    tvs: object
}

export function states_create(): State {
    return {
        _AIs: {},
        _combatQueue: [],
        _despawnQueue: [],
        _energyQueue: [],
        _eventSubscribers: {},
        _menuOpen: true,
        actionLog: [],
        chatLog: [],
        currentMapId: "",
        entities: {},
        items: {},
        lastSpacePositionByEntity: {},
        maps: {},
        rng: new RNG(),
        tools: {},
        tvs: {}
    }
}
