import { describe, expect, test } from "bun:test";

import { Map, maps_parse } from "../src/map";
import { MANIFEST } from "../src/manifest";
import { maps_create_planet } from "../src/rot_map_generator";
import { State, states_create } from "../src/state";

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

describe('Map', function () {
    test('should sample and paste maps', function () {
        let state: State = states_create()
        const solarsystem: Map = Map.createEmptyMap(512, 512, MANIFEST.tiles.void)
        state = maps_create_planet(state, 1337)
        const planet: Map = state.maps["simplex=1337"]

        // When sampling and pasting maps
        solarsystem.pasteOnto(planet.sample(16, 16).circular())
        solarsystem.pasteOnto(planet.sample(24, 24).circular(), 0, 17)
        solarsystem.pasteOnto(planet.sample(32, 32).circular(), 0, 42)
        solarsystem.pasteOnto(planet.sample(128, 128).circular(), 0, 75)
        solarsystem.pasteOnto(planet.sample(256, 256).circular(), 0, 204) // Original map size/resolution

        // Then each sample is pasted onto bigger map
        expect(solarsystem.getTile(1, 1).type.name).toEqual("void");
        expect(solarsystem.getTile(1, 2).type.name).toEqual("spacerock");
        expect(solarsystem.getTile(5, 5).type.name).toEqual("spacewater");
        expect(solarsystem.getTile(8, 0).type.name).toEqual("spacetree");
        expect(solarsystem.getTile(0, 8).type.name).toEqual("spacevoid");
        expect(solarsystem.getTile(15, 7).type.name).toEqual("void");

        expect(solarsystem.getTile(2, 36).type.name).toEqual("void");
        expect(solarsystem.getTile(5, 34).type.name).toEqual("spacerock");
        expect(solarsystem.getTile(8, 32).type.name).toEqual("spacewater");
        expect(solarsystem.getTile(2, 35).type.name).toEqual("spacetree");
        expect(solarsystem.getTile(20, 35).type.name).toEqual("spacevoid");
        expect(solarsystem.getTile(23, 28).type.name).toEqual("void");

        expect(solarsystem.getTile(27, 46).type.name).toEqual("void");
        expect(solarsystem.getTile(28, 48).type.name).toEqual("spacerock");
        expect(solarsystem.getTile(19, 56).type.name).toEqual("spacewater");
        expect(solarsystem.getTile(21, 58).type.name).toEqual("spacetree");
        expect(solarsystem.getTile(0, 52).type.name).toEqual("spacevoid");
        expect(solarsystem.getTile(31, 57).type.name).toEqual("void");

        expect(solarsystem.getTile(10, 102).type.name).toEqual("void");
        expect(solarsystem.getTile(13, 99).type.name).toEqual("spacerock");
        expect(solarsystem.getTile(20, 91).type.name).toEqual("spacewater");
        expect(solarsystem.getTile(11, 101).type.name).toEqual("spacetree");
        expect(solarsystem.getTile(126, 127).type.name).toEqual("spacevoid");
        expect(solarsystem.getTile(127, 138).type.name).toEqual("void");

        // Original map size/resolution
        expect(solarsystem.getTile(36, 240).type.name).toEqual("void");
        expect(solarsystem.getTile(30, 248).type.name).toEqual("spacerock");
        expect(solarsystem.getTile(41, 237).type.name).toEqual("spacewater");
        expect(solarsystem.getTile(36, 241).type.name).toEqual("spacetree");
        expect(solarsystem.getTile(37, 240).type.name).toEqual("spacevoid");
        expect(solarsystem.getTile(255, 336).type.name).toEqual("void");
    });
});
