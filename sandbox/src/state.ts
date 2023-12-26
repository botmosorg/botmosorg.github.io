export interface State {
    _AIs: object,
    _combatQueue: Array<{entityId: string, otherEntityId: string}>,
    _despawnQueue: Array<string>,
    _energyQueue: Array<{entityId: string, energyDelta: number}>
    currentMapId: string,
    entities: object,
    items: object,
    maps: object,
    tools: object,
}

export function states_create(): State {
    return {
        _AIs: {},
        _combatQueue: [],
        _despawnQueue: [],
        _energyQueue: [],
        currentMapId: "",
        entities: {},
        items: {},
        maps: {},
        tools: {}
    }
}
