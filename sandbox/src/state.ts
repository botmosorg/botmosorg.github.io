export interface State {
    _combatQueue: Array<any>,
    _itemSpawnQueue: Array<any>,
    currentMapId: string,
    entities: object,
    maps: object
}

export function states_create(): State {
    return {
        _combatQueue: [],
        _itemSpawnQueue: [],
        currentMapId: "",
        entities: {},
        maps: {}
    }
}
