import { describe, expect, test } from "bun:test";

import { maps_parse } from "../src/map";

const mapString = `! The first character defines the 'meta' character preceeding commands and comments, e.g. '!'
! This is a comment. Commands start with <meta>!, e.g.:
!!id preloader
!!size 16 16
! Any <meta>!<character><space><tile type name> defines a tile for a given character:
!!. void
!!~ water
!!^ rock
!!t tree
!!# wall
!!B wall B
!!M wall M
!!+ wallweak
!!= chargepad
!!O portal arena 1 0
! This is the actual map data:
#######BM#######
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

const mapMovement = `!
!!id movement
!!size 16 16
!!. void
!!~ water
!!^ rock
!!t tree
!!# wall
!!B wall B
!!M wall M
!!+ wallweak
!!= chargepad
!!O portal arena 1 0
#######BM#######
#.============.#
O......^^......O
#.....++++.....#
#.....++++.....#
#.....++++.....#
#.....++++.....#
#.....++++.....#
#.....++++.....#
#.....++++.....#
#.....++++.....#
#.....++++.....#
#.....++++.....#
O......tt......O
#.~~~~~~~~~~~~.#
################
`

describe('Map', function () {
    test('should generate movement map', function () {
        const map = maps_parse(mapMovement)

        const movementMap = map.asMovementMap()

        // movementMap[y][x]
        expect(movementMap[1][0]).toEqual(1) // wall
        expect(movementMap[7][0]).toEqual(1) // wall with sign
        expect(movementMap[7][7]).toEqual(1) // wallweak
        expect(movementMap[2][7]).toEqual(1) // rock
        expect(movementMap[1][1]).toEqual(0) // void
        expect(movementMap[1][7]).toEqual(0) // chargepad
        expect(movementMap[14][7]).toEqual(0) // water
        expect(movementMap[13][7]).toEqual(0) // tree
        expect(movementMap[2][0]).toEqual(0) // portal
    })
})

describe('maps_parse', function () {
    test('should parse map', function () {
        const map = maps_parse(mapString);

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
        expect(map.getTile(7, 0).type.name).toEqual("wall");
        expect(map.getTile(7, 0).options.sign).toEqual("B");
        expect(map.getTile(8, 0).type.name).toEqual("wall");
        expect(map.getTile(8, 0).options.sign).toEqual("M");
    });
});

describe('maps_parse', function () {
    test('should sample and paste maps', function () {
        const map = maps_parse(mapString);

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
        expect(map.getTile(7, 0).type.name).toEqual("wall");
        expect(map.getTile(7, 0).options.sign).toEqual("B");
        expect(map.getTile(8, 0).type.name).toEqual("wall");
        expect(map.getTile(8, 0).options.sign).toEqual("M");
    });
});
