export interface State {
    _AIs: object,
    _combatQueue: Array<{entityId: string, otherEntityId: string}>,
    _despawnQueue: Array<string>,
    _energyQueue: Array<{entityId: string, energyDelta: number}>
    _eventSubscribers: object,
    _menuOpen: boolean,
    currentMapId: string,
    entities: object,
    items: object,
    lastSpacePositionByEntity: object
    maps: object,
    tools: object,
}

export function states_create(): State {
    return {
        _AIs: {},
        _combatQueue: [],
        _despawnQueue: [],
        _energyQueue: [],
        _eventSubscribers: {},
        _menuOpen: false,
        currentMapId: "",
        entities: {},
        items: {},
        lastSpacePositionByEntity: {},
        maps: {},
        tools: {}
    }
}
