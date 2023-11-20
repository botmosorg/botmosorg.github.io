import { describe, expect, test } from "bun:test";

import { distance } from "../src/util";

describe('distance', function () {
    test('should compute horizontal distance between points', function () {
        let dist = distance(0, 0, 5, 0);

        expect(dist).toEqual(5);
    });

    test('should compute vertical distance between points', function () {
        let dist = distance(0, 0, 0, 1);

        expect(dist).toEqual(1);
    });

    test('should compute diagonal distance between points', function () {
        let dist = distance(0, 0, 1, 1);

        expect(dist).toEqual(2);

        dist = distance(0, 0, 1, 2);

        expect(dist).toEqual(3);
    });
})
