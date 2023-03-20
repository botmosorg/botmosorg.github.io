"use strict";

import { maps_create_overworld } from "../src/map.js";

var expect = chai.expect;

it('overworld map generation', function () {
    let overworld = maps_create_overworld()
    expect(overworld.id).to.equal("simplex");
});