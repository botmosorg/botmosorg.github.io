export interface State {
    _combatQueue: Array<any>,
    currentMapId: string,
    entities: object,
    maps: object
}

export function states_create(): State {
    return {
        _combatQueue: [],
        currentMapId: "",
        entities: {},
        maps: {}
    }
}
