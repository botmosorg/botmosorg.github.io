import { describe, expect, test } from "bun:test";
import Game from "../src/game";

describe('Game', () => {
    test('should replay until player death', () => {
        const game = new Game()
        game.init()

        game.replay('SSSSSSSEEEEEEWWWWWWWWWWWEEEEEEEEEEEWWWWWWWWWWWEEEEEEEEEE')

        expect(game.state.entities["player"]).toBeUndefined()
        expect(game.actionLog.join('')).toBe('SSSSSSSEEEEEEWWWWWWWWWWWEEEEEEEEEEEWWWWWWWWWWWEEEEEEEEEE')
    })
})