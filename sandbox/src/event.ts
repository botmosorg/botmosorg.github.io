import { State } from "./state";

export interface Event {
}

export function publish(state: State, event: string, payload: Event): State {
    const subscribers = state._eventSubscribers[event]
    if (!!subscribers) {
        for (let i=0; i<subscribers.length; i++) {
            const handler = subscribers[i]
            state = handler(state, payload)
        }
    }

    return state
}

export function subscribe(state: State, event: string, handler: Function): State {
    if (event in state._eventSubscribers) {
    } else {
        state._eventSubscribers[event] = []
    }

    state._eventSubscribers[event].push(handler)

    return state
}
