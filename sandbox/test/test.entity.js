"use strict";

import { entities_create, distance } from "../src/entity.js";

let expect = chai.expect;

describe('distance', function () {
    it('should compute horizontal distance between entities', function () {
        let a = entities_create("a", null, "map", 0, 0)
        let b = entities_create("b", null, "map", 5, 0)

        let dist = distance(a, b)

        expect(dist).to.equal(5);
    });

    it('should compute vertical distance between entities', function () {
        let a = entities_create("a", null, "map", 0, 0)
        let b = entities_create("b", null, "map", 0, 1)

        let dist = distance(a, b)

        expect(dist).to.equal(1);
    });

    it('should compute diagonal distance between entities', function () {
        let a = entities_create("a", null, "map", 0, 0)
        let b = entities_create("b", null, "map", 1, 1)

        let dist = distance(a, b)

        expect(dist).to.equal(2);

        a = entities_create("a", null, "map", 0, 0)
        b = entities_create("b", null, "map", 1, 2)

        dist = distance(a, b)

        expect(dist).to.equal(3);
    });
})