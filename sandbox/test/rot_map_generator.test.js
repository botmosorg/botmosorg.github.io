"use strict";

import { describe, expect, test } from "bun:test";

import { maps_create_overworld } from "../src/rot_map_generator.js";

describe('maps_create_overworld', function () {
    test('overworld map generation', function () {
        let overworld = maps_create_overworld();

        expect(overworld.id).toEqual("simplex=1337");
        expect(overworld.widthTiles).toEqual(256);
        expect(overworld.heightTiles).toEqual(256);
        expect(overworld.getTile(127, 127).type.name).toEqual("tree");
        expect(overworld.getTile(127, 128).type.name).toEqual("void");
        expect(overworld.getTile(126, 121).type.name).toEqual("portal");
        expect(overworld.getTile(135, 127).type.name).toEqual("water");
    });
});