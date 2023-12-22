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
export class Spirit {
    name: string;
    description: string;
    icon: string;
    color: string;
    energyMax: number;
    unlockCondition: null;

    constructor(name: string, description: string, icon: string, energyMax: number=100) {
        this.name = name;
        this.description = description;
        this.icon = icon;
        this.energyMax = energyMax;
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
        "aggrorange": new AI("aggrorange", "Idles at a position and engages the player when coming into range"),
        "aggrorangeshort": new AI("aggrorangeshort", "Idles at a position and engages the player when coming into shorter range"),
        "guardian": new AI("guardian", "Idles at a position and only fights back if engaged")
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
        "Pyrates": new Faction("Pyrates", "Default enemy faction", "cybermagenta"),
        "Guardians": new Faction("Guardians", "Bot station guardians", "cybercyan")
    },
    "items": {
        "battery": new Item("Battery", "Increases maximum energy", "b", "cyberyellow", 10),
        "energy": new Item("Energy", "Energy pack", "e", "cyberyellow", 10) ,// 🗲
        "junk": new Item("Junk", "Broken bot", "%", "cyberyellow", 1)
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
#~............~#
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
!!h portalhidden bot_dormitory_hidden 1 0
################################
#..............................#
#..............................#
#..###.#.#.#.##..###.#.#.#.##..#
#..###=#=#=#=##..###=#=#=#=##..#
#...=##########...=#######h##..#
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
"bot_dormitory_hidden": `!
!!id bot_dormitory_hidden
!!size 4 4
!!. void
!!# wall
!!~ water
!!O portal bot_dormitory 26 5
#O##
#.~#
#..#
####
`,
"bot_elevator": `!
!!id bot_elevator
!!size 16 48
!!# wall
!!. void
!!O portal bot_station 4 6
!!E portal simplex=1337 126 121
!!^ movenorth
!!v movesouth
################
#..............#
#..............#
#..............#
#..............#
#..............#
#..............#
#..............#
#..............#
#..............#
O..............#
#..............#
#..............#
#..............#
#..............#
###########v^###
..........#v^#..
..........#v^#..
..........#v^#..
..........#v^#..
..........#v^#..
..........#v^#..
..........#v^#..
..........#v^#..
..........#v^#..
..........#v^#..
..........#v^#..
..........#v^#..
..........#v^#..
..........#v^#..
..........#..#..
..........#v^#..
..........#v^#..
..........#v^#..
..........#v^#..
..........#v^#..
..........#v^#..
..........#v^#..
..........#v^#..
..........#v^#..
..........#v^#..
..........#v^#..
..........#v^#..
..........#v^#..
.........##v^##.
.........#....#.
.........#....#.
.........##E###.
`,
"bot_factory": `!
!!id bot_factory
!!size 48 32
!!# wall
!!+ wallweak
!!~ water
!!. void
!!^ movenorth
!!> moveeast
!!v movesouth
!!< movewest
!!O portal bot_station 4 28
!!P portal bot_station 13 25
!!h portal bot_station 5 21
##########h#####################################
#~.....................+~......................#
#.........vv...........+.......................#
#......................+.......................#
#.........vv...........+.......................#
#......................+.......................#
#.........vv...........+.......................#
#......................+.......................#
#.........vv...........+.......................#
#......................+.......................#
#..vv.<.<.<<...........+.......................#
#..vv.<.<.<<...........+.......................#
#..............................................#
#..............................................#
#++#+###########################################
#+++.>.>.>.>.>.>.>.>.>~>.>.>.>.>.>.>.>.>.>.>.>.#
#+++.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>~>.>.>.>.P
#++#+###########################################
#..............................................#
#..^^..........................................#
#..............................................#
#..^^..........................................#
#..............................................#
#..^^..........................................#
#..............................................#
#..^^..........................................#
#..............................................#
#..^^..........................................#
#..............................................#
#..^^........................................~~#
#............................................~~#
##O#############################################
`,
"bot_stadium": `!
!!id bot_stadium
!!size 48 16
!!# wall
!!+ wallweak
!!. void
!!= chargepad
!!~ water
!!^ movenorth
!!> moveeast
!!v movesouth
!!< movewest
!!O portal bot_station 10 16
################################################
#..............................................#
#..............................................#
#..++++++++++++++++++++++++++++++++++++++++++..#
#..+..>>>>..+..>>>>>v..~~..>>>>>>~>>>>>>....+..#
#..+..>>>>..+..>>>>...~~~~.>>>>~>>>~>>>>....+..#
#..+^^....vv+.^......>>>>..............+..vv+..#
#..+^^....vv+.^......>>>>>^............+..vv+..#
#..+^^......>>.........................+..vv+..#
#..+^^....++++++++++++++++++++++++++++++++vv+..#
#..+..<<<<<~<<<<<<<<<<<<~<<<<<<<<<~<<<<<<<==+..#
#..+..<<<<<<<<<~<<<<<<<<<<<<<~<<<<<<<<<<<<==+..#
#..+++++++++++++++++++++++++++++++++++++++..+..#
#..............................................#
#..............................................#
#############################################O##
`,
"bot_station": `!
!!id bot_station
!!size 32 32
!!. void
!!~ water
!!# wall
!!+ wallweak
!!= chargepad
!!^ movenorth
!!> moveeast
!!v movesouth
!!< movewest
!!C portalclosed
!!A portal arena 1 0
!!B portal bot_bar 0 5
!!O portal bot_dormitory 2 31
!!Q portal bot_dormitory 29 31
!!e portal bot_elevator 0 10
!!F portal bot_factory 2 31
!!E portal bot_factory 47 16
!!S portal bot_stadium 45 15
!!h portalhidden bot_factory 10 0
################################
#...########################...#
#.......################.......#
#...........########...........#
#...####.++....CC........####..#
#...C###.++..............####..#
#...e###.++..............####..#
#...####.++..............#A##..#
#........++....................#
#+++++++++.....................#
#+++++++++.+.+.+.+.+.+.+.+.+.++#
#~............................~#
#..............................#
#..#.#.#.#.#...................#
#..#########...................#
#..#########...........####....#
#..#######S#.>.>.>.>.>.B###....#
#.>.>.>.>...^....^.....####....#
#.....................v####....#
#.^#..#..#..#....^.....>.>.>.v.#
#..##.##.##.##.................#
#.^##h########...^...########v.#
#..###########.......########..#
#.^###########...^...########v.#
#..###########.......########..#
#.^##########E.>.^...########v.#
#..###########.......########..#
#.^###########.......########v.#
#..#F#########.......#O####Q#..#
#.^..<.<.<.<.<.<.<.<.<.......<.#
#.............................~#
################################
`,
"botmos_hull_selection": `!
!!id botmos_hull_selection
!!size 20 20
!!. void
!!~ water
!!^ rock
!!# wall
!!+ wallweak
!!B wall B
!!o wall o
!!t wall t
!!M wall M
!!s wall s
!!C wall C
!!h wall h
!!e wall e
!!y wall y
!!u wall u
!!r wall r
!!l wall l
!!= chargepad
!!^ movenorth
!!> moveeast
!!v movesouth
!!< movewest
!!Q portalclosed
!!O portal simplex=1337 126 121
!!A portal arena 1 0
!!i portalhidden playground 18 0
!!a portalstartaerobot bot_factory 4 15
!!b portalstartworkbot bot_factory 4 16
!!? portalstart?
!!D portal bot_station 0 29
##.....BotMos.....##
#+Choose+your+hull+#
#.================.#
#..................#
#..........b.......#
#.............a....#
#..................#
#..........?.......#
#.............?....#
#..................#
#..........?.......#
#.............?....#
#..................#
#..........?.......#
#.............?....#
#..................#
Q..........?.......#
#.............?....#
#.~~~~~~~~~~~~~~~~.#
##################i#
`,
"playground": `!
!!id playground
!!size 20 20
!!. void
!!# wall
!!O portal botmos_hull_selection 18 19
##################O#
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
####################
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
        "Spirit":  new Spirit("Spirit", "You are back in the machine mind, pick a new hull!", "@", 10),
        "AeroBot": new Spirit("AeroBot", "Basic server, serving energy goo and such to bots", "A", 80),
        "WorkBot": new Spirit("WorkBot", "Basic factory worker", "B"),
        "Cleaner": new Spirit("Cleaner", "Advanced bot purging malfunctioning bots", "C", 50),
        "Pioneer": new Spirit("Pioneer", "Absolute slayer bots, needs to play as WorkBot first, brotherhood of ultimate warriors", "W", 200),
        /*
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
        "tree": new Tile("tree", "Lots of trees make a forest", "t", "brown", "black"),
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
        "portalhidden": new Tile("portalhidden", "Hidden gateway to another map", "#", "gray", "black"),
        "portalstartworkbot": new Tile("portalstartworkbot", "Start playing as a WorkBot", "B", "white"),
        "portalstartaerobot": new Tile("portalstartaerobot", "Start playing as a AeroBot", "A", "white"),
        "portalstart?": new Tile("portalstart?", "Not unlocked, yet!", "?", "white")
        /*
        "grass": new Structure("grass", "Grass, sometimes stuff is hidden here", ".", "darkgreen")
        */
    }
}
