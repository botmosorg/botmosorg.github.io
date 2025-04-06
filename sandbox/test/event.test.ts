import { describe, expect, test } from "bun:test";
import { EventPayload, EventType, publish, subscribe } from "../src/event";
import { State, states_create } from "../src/state";

interface MapUpdatedEvent extends EventPayload {
    oldMapId: string,
    newMapId: string
}

let counter = 0
function handler(state: State, payload: MapUpdatedEvent): State {
    counter++
    return state
}

describe('Event', () => {
    test('should subscribe and publish', () => {
        let state = subscribe(states_create(), EventType.entitymap_updated_event, handler)
        const eventPayload: MapUpdatedEvent = {oldMapId: "foo", newMapId: "bar"}

        state = publish(state, EventType.item_equipped_event, {})
        state = publish(state, EventType.entitymap_updated_event, eventPayload)

        expect(counter).toBe(1)
    })
})