"use strict";

import { maps_create_overworld } from "../src/rot_map_generator.js";

var expect = chai.expect;

describe('maps_create_overworld', function () {
    it('overworld map generation', function () {
        let overworld = maps_create_overworld();

        expect(overworld.id).to.equal("simplex=1337");
        expect(overworld.widthTiles).to.equal(256);
        expect(overworld.heightTiles).to.equal(256);
    });
});