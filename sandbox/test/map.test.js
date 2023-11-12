"use strict";

import { describe, expect, test } from "bun:test";

import { maps_parse } from "../src/map.js";

let mapString = `! The first character defines the 'meta' character preceeding commands and comments, e.g. '!'
! This is a comment. Commands start with <meta>!, e.g.:
!!id preloader
!!size 16 16
! Any <meta>!<character><space><tile type name> defines a tile for a given character:
!!. void
!!~ water
!!^ rock
!!t tree
!!# wall
!!+ weakwall
!!= chargepad
!!O portal arena 1 0
! This is the actual map data:
################
#..............#
O..............O
#..............#
#..............#
#..............#
#..............#
#..............#
#..............#
#..............#
#..............#
#..............#
#..............#
O..............O
#..............#
################
`

describe('map', function () {
    test('maps_parse', function () {
        let map = maps_parse(mapString);

        expect(map.id).toEqual("preloader");
        expect(map.widthTiles).toEqual(16);
        expect(map.heightTiles).toEqual(16);
        expect(map.getTile(0, 2).type.name).toEqual("portal");
        expect(map.getTile(15, 2).type.name).toEqual("portal");
        expect(map.getTile(15, 2).options.mapId).toEqual("arena");
        expect(map.getTile(15, 2).options.x).toEqual(1);
        expect(map.getTile(15, 2).options.y).toEqual(0);
        expect(map.getTile(8, 8).type.name).toEqual("void");
        expect(map.getTile(15, 15).type.name).toEqual("wall");
    });
});
