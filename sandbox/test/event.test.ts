import { describe, expect, test } from "bun:test";
import { Event, publish, subscribe } from "../src/events";
import { State, states_create } from "../src/state";

interface MapUpdatedEvent extends Event {
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
        let state = subscribe(states_create(), "map.updated.event", handler)
        const eventPayload: MapUpdatedEvent = {oldMapId: "foo", newMapId: "bar"}

        state = publish(state, "entity.deleted.event", {})
        state = publish(state, "map.updated.event", eventPayload)

        expect(counter).toBe(1)
    })
})