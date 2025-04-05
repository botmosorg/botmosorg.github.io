import { State } from "./state";

export enum EventType {
    entitymap_updated_event,
    item_equipped_event,
}

// Event payloads need to extend this
export interface Event {
}

export function publish(state: State, event: EventType, payload: Event): State {
    const subscribers = state._eventSubscribers[event]
    if (!!subscribers) {
        for (let i=0; i<subscribers.length; i++) {
            const handler = subscribers[i]
            state = handler(state, payload)
        }
    }

    return state
}

export function subscribe(state: State, event: EventType, handler: Function): State {
    if (event in state._eventSubscribers) {
    } else {
        state._eventSubscribers[event] = []
    }

    state._eventSubscribers[event].push(handler)

    return state
}
