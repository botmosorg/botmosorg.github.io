"use strict";

import { describe, expect, test } from "bun:test";

import { a_star } from "../src/easystar_astar.js";

describe('a_star', function () {
    test('should find path', function () {
        let map = [
            [0, 0, 0, 0],
            [0, 0, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ]

        let path = a_star(map, 0, 0, 2, 2)

        expect(path.length).toEqual(7)
        expect(path[0]).toEqual({x: 0, y: 0})
        expect(path[1]).toEqual({x: 1, y: 0})
        expect(path[2]).toEqual({x: 2, y: 0})
        expect(path[3]).toEqual({x: 3, y: 0})
        expect(path[4]).toEqual({x: 3, y: 1})
        expect(path[5]).toEqual({x: 3, y: 2})
        expect(path[6]).toEqual({x: 2, y: 2})
    });

    test('should not find path if blocked', function () {
        let map = [
            [0, 0, 0, 1],
            [0, 0, 1, 0],
            [0, 1, 0, 0],
            [1, 0, 0, 0]
        ]

        let path = a_star(map, 0, 0, 2, 2)

        expect(path).toEqual(null)
    });
});
