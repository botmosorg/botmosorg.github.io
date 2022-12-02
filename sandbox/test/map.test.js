"use strict";

const map = require("../map.js")

test('overworld map generation', () => {
    let overworld = map.create_map_overworld()
    expect(overworld.id).toBe("simplex");
});