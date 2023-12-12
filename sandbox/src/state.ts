export interface State {
    currentMapId: string,
    entities: object,
    maps: object
}

export function states_create(): State {
    return {
        currentMapId: "",
        entities: {},
        maps: {}
    }
}
