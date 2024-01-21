import { describe, expect, test } from "bun:test";

import { players_get_current_id } from "../src/player";

describe('players_get_current', function () {
    test('should be "player" id', function () {
        expect(players_get_current_id()).toEqual("player")
    })
})
