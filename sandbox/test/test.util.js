"use strict";

import { distance } from "../src/util.js";

let expect = chai.expect;

describe('distance', function () {
    it('should compute horizontal distance between points', function () {
        let dist = distance(0, 0, 5, 0);

        expect(dist).to.equal(5);
    });

    it('should compute vertical distance between points', function () {
        let dist = distance(0, 0, 0, 1);

        expect(dist).to.equal(1);
    });

    it('should compute diagonal distance between points', function () {
        let dist = distance(0, 0, 1, 1);

        expect(dist).to.equal(2);

        dist = distance(0, 0, 1, 2);

        expect(dist).to.equal(3);
    });
})
