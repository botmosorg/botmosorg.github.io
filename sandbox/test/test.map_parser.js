"use strict";

import { parse } from "../src/map_parser.js";

var expect = chai.expect;

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
!!O portal
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

describe('parse', function () {
    it('simple map parsing', function () {
        let map = parse(mapString);

        expect(map.id).to.equal("preloader");
        expect(map.widthTiles).to.equal(16);
        expect(map.heightTiles).to.equal(16);
        expect(map.getTile(0, 2).type.name).to.equal("portal");
        expect(map.getTile(15, 2).type.name).to.equal("portal");
        expect(map.getTile(8, 8).type.name).to.equal("void");
        expect(map.getTile(15, 15).type.name).to.equal("wall");
    });
});
