import { BOTMOS_OPTIONS } from "./config";

export class Action {
    name: string
    description: string

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}
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
class Effect {
    name: string
    description: string

    constructor(name: string, description: string) {
        this.name = name
        this.description = description
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
export class Item {
    name: string;
    description: string;
    icon: string;
    color: string;
    energyDelta: number;
    matter: number;
    gold: number;
    // Combat
    damage: number; // Negative number: damage; positive number: heals
    energyCost: number;
    effects: Array<any>;

    constructor(name: string, description: string, icon: string, color: string = "cyberyellow",
                energyDelta: number = 0, matter: number= 0, gold: number=0,
                damage: number = 0, energyCost: number = 0, effects=[]) {
        this.name = name
        this.description = description
        this.icon = icon
        this.color = color
        this.energyDelta = energyDelta
        this.matter = matter
        this.gold = gold
        this.damage = damage
        this.energyCost = energyCost
        this.effects = effects
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
    "actions": {
        "Wait": new Action("Wait", "Wait one turn in place")
    },
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
        "cybergreen": "Friendly color",
        "cybermagenta": "Enemy color",
        "cyberyellow": "Item or special effect color"
    },
    "commands": {
        "N": new Command("N", "Move/interact/combat north"),
        "E": new Command("E", "Move/interact/combat east"),
        "S": new Command("S", "Move/interact/combat south"),
        "W": new Command("W", "Move/interact/combat west"),
        "A": new Command("A", "Primary action, confirm"), // A/X
        "B": new Command("B", "Take a break, cancel"), // B/Y/Z/space bar
        "1": new Command("1", "Secondary action, first quick slot"), // unused
        "2": new Command("2", "Tertiary action, second quick slot"), // unused
        "M": new Command("M", "Menu") // unused
    },
    "effects": {
        "WallCrusher": new Effect("Wall Crusher", "Tears down weak walls")
    },
    "entities": {
        "movableboulder": new Spirit("movableboulder", "A movable rock", "o", 2),
        "movablebox": new Spirit("movablebox", "A movable box", "x", 2),
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
    "factions": {
        "Equipment": new Faction("Equipment", "For boxes etc.", "gray"),
        "Spirits": new Faction("Spirits", "Default player faction", "white"),
        "Pyrates": new Faction("Pyrates", "Default enemy faction", "cybermagenta"),
        "Gaia": new Faction("Gaia", "For rocks etc.", "brown"),
        "Guardians": new Faction("Guardians", "Bot station guardians", "cybercyan")
    },
    "items": {
        "battery": new Item("Battery", "Increases maximum energy", "b", "cyberyellow", 10),
        "energy": new Item("Energy", "Energy pack", "e", "cyberyellow", 10) ,// 🗲
        "junk": new Item("Junk", "Broken bot", "%", "cyberyellow", 1),
        // Tools
        "hammer": new Item("Hammer", "Tears down weak walls", "i", "cyberyellow", 0, 0, 0, -15, -2, ["Wall Crusher"]),
        "wrench": new Item("Wrench", "Basic WorkBot tool", "i", "cyberyellow", 0, 0, 0, -10, -1),
        "shocker": new Item("Shocker", "Injects Bots with new energy, basic AeroBot tool", "i", "cyberyellow", 0, 0, 0, 10, -1)
    },
    "maps": {
        "bot_bar": `!
!!id bot_bar
!!size 16 16
!!. void
!!~ water
!!# wall
!!s wallstatue
!!+ wallweak
!!= chargepad
!!O portal bot_station 23 16
################
#..............#
#..............#
#.....=..+++++.#
#s....=..+~....#
O.....=..+.....#
#s.====..+.....#
#..=.....+.....#
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
!!size 32 48
!!# wall
!!s wallstatue
!!+ wallweak
!!. void
!!_ voidtrue
!!= chargepad
!!~ water
!!O portal bot_station 4 6
!!E portal simplex=1337 126 121
!!^ movenorth
!!v movesouth
################________________
#.........+...~#________________
#.........+....#________________
#.........+....#________________
#.........+....#________________
#.........++^++#################
#..............#s.s.s.s.s.s.s.s#
#..............#.=============.#
#................=+++++++++++=.#
#................=+++++++++++=.#
O..............#.=============.#
#..............#...............#
#..............#################
#..............#________________
#..............#________________
###########v^###________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#..#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
_________##v^##_________________
_________#....#_________________
_________#....#_________________
_________##E###_________________
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
!Now this is botracing!
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
!!_ voidtrue
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
!!a wall a
!!n wall n
!!= chargepad
!!^ movenorth
!!> moveeast
!!v movesouth
!!< movewest
!!Q portalclosed
!!] portal manual 0 5
!!A portal arena 1 0
!!i portalhidden playground 1 0
!!1 portalstartaerobot bot_factory 4 15
!!2 portalstartworkbot bot_factory 4 16
!!? portalstart?
!!D portal bot_station 0 29
##_____BotMos_____##
#_Choose_your_hull_#
#.================.#
#..................#
#.....2.....Manual.#
#..1........>.>.>..]
#..................#
#.....?............#
#..?...............#
#..................#
#.....?............#
#..?...............#
#..................#
#.....?............#
#..?...............#
#..................#
#.....?............Q
#..?...............#
#~~~~~~~~~~~~~~~~~~#
#i##################
`,
"manual": `!
!!id manual
!!size 80 52
!!# wall
!!+ wallweak
!!. voidtrue
!!_ voidtrue
!!: void
!!~ water
!!= chargepad
!!^ movenorth
!!> moveeast
!!| movesouth
!!< movewest
!!A wall A
!!B wall B
!!C wall C
!!D wall D
!!E wall E
!!F wall F
!!G wall G
!!H wall H
!!I wall I
!!J wall J
!!K wall K
!!L wall L
!!M wall M
!!N wall N
!!O wall O
!!P wall P
!!Q wall Q
!!R wall R
!!S wall S
!!T wall T
!!U wall U
!!V wall V
!!W wall W
!!X wall X
!!Y wall Y
!!Z wall Z
!!a wall a
!!b wall b
!!c wall c
!!d wall d
!!e wall e
!!f wall f
!!g wall g
!!h wall h
!!i wall i
!!j wall j
!!k wall k
!!l wall l
!!m wall m
!!n wall n
!!o wall o
!!p wall p
!!q wall q
!!r wall r
!!s wall s
!!t wall t
!!u wall u
!!v wall v
!!w wall w
!!x wall x
!!y wall y
!!z wall z
!!, wall ,
!!/ wall /
!!( portal manual 9 16
!!) portal manual 4 16
!!] portalclosed
!![ portal botmos_hull_selection 19 5
################################################################################
#..............................................................................#
#...Welcome_to_the_roBot_cosMos................................................#
#...INTERACTIVE_MANUAL.........................................................#
#..............................................................................#
[...<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<..#
#.............................................................................^#
#^|.Move_around_using_arrow_keys_or_WASD......................................^#
#^..Alternatively,_click/touch_on_the_top/left/bottom/right_screen_area.......^#
#^|...........................................................................^#
#^..M_or_click/touch_on_the_screen_center_to_open_the_menu....................^#
#^|...........................................................................^#
#^..Y_or_Z_or_Spacebar_or_click/touch_top_screen_corners_to_skip_one_turn.....^#
#^|...........................................................................^#
#^..^.<.|.>.move_you_automatically............................................^#
#^|...........................................................................^#
#^..(####).Portals/doors_transport_to_different_maps/areas,_some_are_]_closed.^#
#^|...........................................................................^#
#^..#.and.+.are_walls.........................................................^#
#^|...........................................................................^#
#^..=.Chargepads_restore_energy,.~.Water_drains_energy........................^#
#^|...........................................................................^#
#^..>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.^#
#^|...........................................................................^#
#^..BOTS......green_means_friendly,_enemies_are_magenta.......................^#
#^|...........................................................................^#
#^....Spirit,_machine_spirit_without_a_hull...................................^#
#^|...AeroBot,_a_basic_server.................................................^#
#^....WorkBot,_a_factory_worker...............................................^#
#^|...Cleaner,_corrects_malfunctioning_bots...................................^#
#^....Pioneer,_mighty_war_machines............................................^#
#^|...........................................................................^#
#^..>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.^#
#^|...........................................................................^#
#^..ITEMS.....................................................................^#
#^|...........................................................................^#
#^....Junk,_restores_minor_energy.............................................^#
#^|...Energy,_restores_energy.................................................^#
#^....Battery,_increases_maximum_energy.......................................^#
#^|...Various_tools,_e:g:_a_Wrench............................................^#
#^............................................................................^#
#^|...........................................................................^#
#^..>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.^#
#^|...........................................................................^#
#^..STORY.....................................................................^#
#^|...........................................................................^#
#^..You_slave_away_on_a_robot_vessel,_but_there_is_the_cosmos_to_explore:::...^#
#^|...........................................................................^#
#^..>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.^#
#^|...........................................................................^#
#^............................................................................^#
################################################################################
`,
"playground": `!
!!id playground
!!size 20 20
!!. void
!!# wall
!!= chargepad
!!~ water
!!O portal botmos_hull_selection 1 19
!!Q portal solarsystem=1337 448 448
!!P portal solarsystem=1337 30 17
#O##################
#=.................#
#................Q.#
#..................#
#..................#
#................P.#
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
#........~.........#
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
    "tiles": {
        "void": BOTMOS_OPTIONS.showGrid ? new Tile("void", "Just nothing here", ".", "gray") : new Tile("void", "Just nothing here"),
        "voidtrue": new Tile("voidtrue", "Really nothing here and you shouldn't get there ever!"),
        "water": new Tile("water", "Rust and other dangers await", "~", "cybercyan", "cyberblue", -2), // ≋ alternatively
        "rock": new Tile("rock", "Hidden treasures may await", "^", "white", "gray"), // ▲ alternatively
        "tree": new Tile("tree", "Lots of trees make a forest", "t", "brown", "black"),
        "wall": new Tile("wall", "A strong wall", '#', "gray", "black"),
        "wallstatue": new Tile("wallstatue", "A small statue", 's', "gray", "black"),
        "wallweak": new Tile("wallweak", "A weakened wall", '+', "gray", "black"),
        "chargepad": new Tile("chargepad", "Recharges energy and health", "=", "cyberyellow", "black", 2),
        //"chest": new Tile("chest", "A chest. What might be inside?", "c", "cyberyellow"),
        "movenorth": new Tile("movenorth", "Moves you north", "^", "cyberyellow"),
        "moveeast": new Tile("moveeast", "Moves you east", ">", "cyberyellow"),
        "movesouth": new Tile("movesouth", "Moves you south", "v", "cyberyellow"),
        "movewest": new Tile("movewest", "Moves you west", "<", "cyberyellow"),
        "portal": new Tile("portal", "Gateway to another map", "O", "cyberyellow", "gray"), // □
        "portalclosed": new Tile("portalclosed", "Closed gateway to another map", "O", "black", "gray"), // □
        "portalhidden": new Tile("portalhidden", "Hidden gateway to another map", "#", "gray", "black"),
        "portalstartworkbot": new Tile("portalstartworkbot", "Start playing as a WorkBot", "B", "white"),
        "portalstartaerobot": new Tile("portalstartaerobot", "Start playing as a AeroBot", "A", "white"),
        "portalstart?": new Tile("portalstart?", "Not unlocked, yet!", "?", "white"),
        "spacerock": new Tile("spacerock", "Mountains as seen from space, non-blocking!", "^", "white", "gray"),
        "spacetree": new Tile("spacetree", "Forest as seen from space", "", "brown", "brown"),
        "spacewater": new Tile("spacewater", "Water as seen from space, not dangerous!", "~", "cybercyan", "cyberblue"),
        "spacevoid": new Tile("spacevoid", "Void/ground as seen from space", "", "gray", "gray"),
        "spacevoidstarwhite": new Tile("spacevoidstarwhite", "Space with a white background star", ".", "white"),
        "spacevoidstaryellow": new Tile("spacevoidstaryellow", "Space with a yellow background star", ".", "cyberyellow"),
        "sun": new Tile("sun", "It's hot, really hot!", "", "cyberyellow", "cyberyellow", -100),
        /*
        "grass": new Structure("grass", "Grass, sometimes stuff is hidden here", ".", "darkgreen")
        */
    }
}
