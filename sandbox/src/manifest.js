"use strict";

import { SHOW_GRID } from "./config.js"

class AI {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}
class Command {
    constructor(key, description) {
        this.key = key;
        this.description = description;
    }
}
class Faction {
    constructor(name, description, color) {
        this.name = name;
        this.description = description;
        this.color = color;
    }
}
class Item {
    constructor(name, description, icon, color="cyberyellow", energyDelta=0) {
        this.name = name
        this.description = description
        this.icon = icon
        this.color = color
        this.energyDelta = energyDelta
    }
}
class Spirit {
    constructor(name, description, icon) {
        this.name = name;
        this.description = description;
        this.icon = icon;
        this.color = "white"; // Default white, different color = different faction or fashion
        this.unlockCondition = null;
    }
}
class Tile {
    constructor(name, description, icon=null, fg="white", bg="black", energyDelta=0) { // foreground, background colors
        this.name = name;
        this.description = description;
        this.icon = icon;
        this.fg = fg;
        this.bg = bg;
        this.energyDelta = energyDelta;
    }
}

export const MANIFEST = {
    "ais": {
        "aggrorange": new AI("AggroRange", "Idles at a position and engages the player when coming into range")
    },
    /**
     * From: https://www.color-hex.com/color-palette/8618
     * Further inspiration: https://colorcodes.io/neon-color-codes/
     */
    "colors": {
        "black": "#000",
        "cybercyan": "#4deeea",
        "cyberyellow": "#ffe700",
        "cybermagenta": "#f000ff",
        "cybergreen": "#74ee15",
        "cyberblue": "#001eff",
        "brown": "brown",
        "gray": "#777",
        "white": "#fff"
    },
    "colorcoding": {
        "cybermagenta": "Enemy color"
    },
    "commands": {
        "N": new Command("N", "Move/interact north"),
        "E": new Command("E", "Move/interact east"),
        "S": new Command("S", "Move/interact south"),
        "W": new Command("W", "Move/interact west"),
        "A": new Command("A", "Interact, primary action"), // unused
        "B": new Command("B", "Take a break, cancel"), // space bar
        "X": new Command("X", "Secondary action"), // unused
        "Y": new Command("Y", "Tertiary action"), // unused
    },
    "factions": {
        "Spirits": new Faction("Spirits", "Default player faction", "white"),
        "Pyrates": new Faction("Pyrates", "Default enemy faction", "cybermagenta")
    },
    "items": {
        "junk": new Item("Junk", "Broken bot", "%", "cyberyellow", 1),
        "energy": new Item("Energy", "Energy pack", "🗲", "cyberyellow", 10)
    },
    "maps": {
        "bot_dormitory": `!
!!id bot_dormitory
!!size 32 32
!!. void
!!~ water
!!^ rock
!!t tree
!!# wall
!!+ weakwall
!!= chargepad
!!O portal preloader 15 13
################################
#..............................#
#..............................#
#..###.#.#.#.##..###.#.#.#.##..#
#..###=#=#=#=##..###=#=#=#=##..#
#...=##########...=##########..#
#..##########=...##########=...#
#...=##########...=##########..#
#..##########=...##########=...#
#...=##########...=##########..#
#..##########=...##########=...#
#...=##########...=##########..#
#..##########=...##########=...#
#..##=#=#=#=###..##=#=#=#=###..#
#..##.#.#.#.###..##.#.#.#.###..#
#..............................#
#..............................#
#..###.#.#.#.##..###.#.#.#.##..#
#..###=#=#=#=##..###=#=#=#=##..#
#...=##########...=##########..#
#..##########=...##########=...#
#...=##########...=##########..#
#..##########=...##########=...#
#...=##########...=##########..#
#..##########=...##########=...#
#...=##########...=##########..#
#..##########=...##########=...#
#..##=#=#=#=###..##=#=#=#=###..#
#..##.#.#.#.###..##.#.#.#.###..#
O..............................O
#..............................#
################################
`,
"preloader": `!
!!id preloader
!!size 16 16
!!. void
!!~ water
!!^ rock
!!t tree
!!# wall
!!+ weakwall
!!= chargepad
!!O portal simplex=1337 126 121
!!A portal arena 1 0
!!D portal bot_dormitory 0 29
################
#..............#
O..............A
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
O..............D
#..............#
################
`
    },
    "names": {
        "BotMoses": "Teaches the new player",
        "Betty": "Gambles a lot",
        "Bender": "From the future, bowl head",
        "Drak": "A now retired PioneerBot, who teaches the new player combat lessons",
        "Oz": "A machinery wizard"
    },
    "spirits": {
        "Spirit":  new Spirit("Spirit", "You are back in the machine mind, pick a new hull!", "@"),
        "WorkBot": new Spirit("WorkBot", "Basic pawn", "B"),
        "AeroBot": new Spirit("AeroBot", "Basic server, serving energy goo and such to bots", "A"),
           /*
        "PioneerBot": "Absolute slayer bots, needs to play as WorkBot first, brotherhood of ultimate warriors",
        "ValkyrBot": "Female Godess from the sky, needs to play as AeroBot first",
        // ...
        "RichBot": "Shiny metal ass, owns a spacestation, is the brain so to say",
        // ...
        "PirateBot": "Needs to be unlocked, achieve ship mastery",
        */
    },
    "tiles": {
        "void": SHOW_GRID ? new Tile("void", "Just nothing here", ".", "gray") : new Tile("void", "Just nothing here"),
        "water": new Tile("water", "Rust and other dangers await", "~", "cybercyan", "cyberblue", -2), // ≋ alternatively
        "rock": new Tile("rock", "Hidden treasures may await", "^", "white", "gray"), // ▲ alternatively
        "tree": new Tile("tree", "Lots of trees make a forest", "t", "brown", "cybergreen"),
        "wall": new Tile("wall", "A strong wall", '#', "gray", "black"),
        "weakwall": new Tile("weakwall", "A weakened wall", '+', "gray", "black"),
        "chargepad": new Tile("chargepad", "Recharges energy and health", "=", "cyberyellow", "black", 2),
        //"boulder": new Tile("boulder", "A movable rock", "o", "gray"),
        //"chest": new Tile("chest", "A chest. What might be inside?", "c", "cyberyellow"),
        //"item": new Tile("item", "An item lying on the ground", "i", "cyberyellow"),
        "portal": new Tile("portal", "Gateway to another map", "O", "cyberyellow", "gray"), // □
        /*
        "grass": new Structure("grass", "Grass, sometimes stuff is hidden here", ".", "darkgreen")
        */
    }
}
