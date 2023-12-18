import { SHOW_GRID } from "./config"

export class AI {
    name: string;
    description: string;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}
export class Command {
    key: string;
    description: string;

    constructor(key: string, description: string) {
        this.key = key;
        this.description = description;
    }
}
class Faction {
    name: string;
    description: string;
    color: string;

    constructor(name: string, description: string, color: string) {
        this.name = name;
        this.description = description;
        this.color = color;
    }
}
class Item {
    name: string;
    description: string;
    icon: string;
    color: string;
    energyDelta: number;

    constructor(name: string, description: string, icon: string, color: string="cyberyellow", energyDelta: number=0) {
        this.name = name
        this.description = description
        this.icon = icon
        this.color = color
        this.energyDelta = energyDelta
    }
}
class Spirit {
    name: string;
    description: string;
    icon: string;
    color: string;
    unlockCondition: null;

    constructor(name: string, description: string, icon: string) {
        this.name = name;
        this.description = description;
        this.icon = icon;
        this.color = "white"; // Default white, different color = different faction or fashion
        this.unlockCondition = null;
    }
}
export class Tile {
    name: any;
    description: any;
    icon: any;
    fg: string;
    bg: string;
    energyDelta: number;

    constructor(name: string, description: string, icon: string=null, fg: string="white", bg: string="black", energyDelta: number=0) {
        this.name = name;
        this.description = description;
        this.icon = icon;
        this.fg = fg; // foreground
        this.bg = bg; // background
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
        "N": new Command("N", "Move/interact/combat north"),
        "E": new Command("E", "Move/interact/combat east"),
        "S": new Command("S", "Move/interact/combat south"),
        "W": new Command("W", "Move/interact/combat west"),
        "A": new Command("A", "Primary action, confirm"), // unused
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
        "energy": new Item("Energy", "Energy pack", "e", "cyberyellow", 10) // 🗲
    },
    "maps": {
        "bot_bar": `!
!!id bot_bar
!!size 16 16
!!. void
!!~ water
!!# wall
!!+ wallweak
!!= chargepad
!!O portal bot_station 23 16
################
#..............#
#..............#
#.....=..+++++.#
#.....=..+.....#
O.....=..+.....#
#..====..+.....#
#..=...........#
#..=.....+.....#
#..====..+.....#
#.....=..+.....#
#.....=..+.....#
#.....=..+++++.#
#..............#
#..............#
################
`,
"bot_dormitory": `!
!!id bot_dormitory
!!size 32 32
!!. void
!!~ water
!!# wall
!!= chargepad
!!O portal bot_station 22 28
!!Q portal bot_station 27 28
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
#..##.#.#.#.###..##.#.#.#.###~.#
#.~............................#
#...............~..............#
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
#..............~...............#
#..............................#
##O##########################Q##
`,
"bot_factory": `!
!!id bot_factory
!!size 48 32
!!# wall
!!+ wallweak
!!. void
!!^ movenorth
!!> moveeast
!!v movesouth
!!< movewest
!!O portal bot_station 4 28
!!P portal bot_station 13 25
################################################
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#++#############################################
#..#.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.#
#..#.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.P
#++#############################################
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
##O#############################################
`,
"bot_station": `!
!!id bot_station
!!size 32 32
!!. void
!!~ water
!!# wall
!!+ wallweak
!!= chargepad
!!C portalclosed
!!F portal bot_factory 2 31
!!E portal bot_factory 47 16
!!P portal preloader 15 13
!!O portal bot_dormitory 2 31
!!Q portal bot_dormitory 29 31
!!B portal bot_bar 0 5
################################
#...########################...#
#.......################.......#
#...........########...........#
#...####.++....CC........####..#
#...C###.++..............####..#
#...C###.++..............####..#
#...####.++..............#C##..#
#........++....................#
#+++++++++.....................#
#++++++++......................#
#..............................#
#..............................#
#..#.#.#.#.#...................#
#..#########...................#
#..#########...........####....#
#..#######C#...........B###....#
#......................####....#
#......................####....#
#..#..#..#..#..................#
#..##.##.##.##.................#
#..###########.......########..#
#..###########.......########..#
#..###########.......########..#
#..###########.......########..#
#..##########E.......########..#
#..###########.......########..#
#..###########.......########..#
#..#F#########.......#O####Q#..#
P..............................#
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
!!+ wallweak
!!= chargepad
!!C portalclosed
!!O portal simplex=1337 126 121
!!A portal arena 1 0
!!D portal bot_station 0 29
################
#.============.#
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
C..............D
#.~~~~~~~~~~~~.#
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
        "wallweak": new Tile("wallweak", "A weakened wall", '+', "gray", "black"),
        "chargepad": new Tile("chargepad", "Recharges energy and health", "=", "cyberyellow", "black", 2),
        //"boulder": new Tile("boulder", "A movable rock", "o", "gray"),
        //"chest": new Tile("chest", "A chest. What might be inside?", "c", "cyberyellow"),
        //"item": new Tile("item", "An item lying on the ground", "i", "cyberyellow"),
        "movenorth": new Tile("movenorth", "Moves you north", "^", "cyberyellow"),
        "moveeast": new Tile("moveeast", "Moves you east", ">", "cyberyellow"),
        "movesouth": new Tile("movesouth", "Moves you south", "v", "cyberyellow"),
        "movewest": new Tile("movewest", "Moves you west", "<", "cyberyellow"),
        "portal": new Tile("portal", "Gateway to another map", "O", "cyberyellow", "gray"), // □
        "portalclosed": new Tile("portalclosed", "Closed gateway to another map", "O", "black", "gray"), // □
        /*
        "grass": new Structure("grass", "Grass, sometimes stuff is hidden here", ".", "darkgreen")
        */
    }
}
