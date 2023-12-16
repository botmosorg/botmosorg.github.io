export interface State {
    _combatQueue: Array<{entityId: string, otherEntityId: string}>,
    _energyQueue: Array<{entityId: string, energyDelta: number}>
    _itemSpawnQueue: Array<any>,
    currentMapId: string,
    entities: object,
    maps: object
}

export function states_create(): State {
    return {
        _combatQueue: [],
        _energyQueue: [],
        _itemSpawnQueue: [],
        currentMapId: "",
        entities: {},
        maps: {}
    }
}
