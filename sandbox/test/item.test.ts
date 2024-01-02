import { describe, expect, test } from "bun:test";

import { items_create, items_destroy, items_get_at, items_get_by, items_pickup } from "../src/item";
import { states_create } from "../src/state";
import { MANIFEST } from "../src/manifest";
import { entities_create } from "../src/entity";

describe('items', () => {
    test('should destroy item', () => {
        const itemId = 'item,,0,0'
        let state = items_create(states_create(), MANIFEST.items.energy, "", 0, 0)
        expect(state.items[itemId]).toBeDefined()

        state = items_destroy(state, itemId)

        expect(state.items[itemId]).toBeUndefined()
    })

    test('should get items by mapId', () => {
        const itemId = 'item,,0,0'
        const state = items_create(states_create(), MANIFEST.items.energy, "", 0, 0)
        expect(state.items[itemId]).toBeDefined()

        const items = items_get_by(state, '')

        expect(items.length).toBe(1)
    })

    test('should get item at map position', () => {
        const state = items_create(states_create(), MANIFEST.items.energy, "", 0, 0)

        const item = items_get_at(state, '', 0, 0)

        expect(item).toBeDefined()
        expect(item.id).toBe('item,,0,0')
        expect(item.mapId).toBe('')
        expect(item.x).toBe(0)
        expect(item.y).toBe(0)
        expect(item.type).toEqual(MANIFEST.items.energy)
        expect(item.energy).toBe(10)
    })

    test('should pickup item', () => {
        const itemId = 'item,,0,0'
        let state = entities_create(states_create(), 'player', MANIFEST.entities.Spirit, "", 0, 0)
        state = items_create(state, MANIFEST.items.energy, "", 0, 0)

        state = items_pickup(state, state.entities['player'], state.items[itemId])

        expect(state.items[itemId]).toBeUndefined()
    })
})

