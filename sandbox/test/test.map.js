"use strict";

import { create_map_overworld } from "../src/map.js";

var expect = chai.expect;

it('overworld map generation', function () {
    let overworld = create_map_overworld()
    expect(overworld.id).to.equal("simplex");
});