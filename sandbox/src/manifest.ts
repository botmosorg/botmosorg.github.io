import { BOTMOS_OPTIONS } from "./config";

export class ActionType {
    name: string
    description: string
    energyDelta: number

    /**
     * @param energyDelta Positive: energy gain, negative: energy cost
     */
    constructor(name: string, description: string, energyDelta: number=0) {
        this.name = name;
        this.description = description;
        this.energyDelta = energyDelta;
    }
}
export class AIType {
    name: string;
    description: string;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}
export class CommandType {
    key: string;
    description: string;

    constructor(key: string, description: string) {
        this.key = key;
        this.description = description;
    }
}
export class EffectType {
    name: string
    description: string
    tooltip: string
    icon: string

    constructor(name: string, description: string, tooltip: string="", icon: string) {
        this.name = name
        this.description = description
        this.tooltip = tooltip
        this.icon = icon
    }
}
export class EntityType {
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
export class FactionType {
    name: string
    description: string
    color: string
    friendly: Set<string>
    hostile: Set<string>

    constructor(name: string, description: string, color: string, friendly: Set<string>, hostile: Set<string>) {
        this.name = name
        this.description = description
        this.color = color
        this.friendly = friendly
        this.hostile = hostile
    }
}
export class ItemType {
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
export class TileType {
    name: string;
    description: string;
    tooltip: string;
    icon: string | null;
    fg: string;
    bg: string;
    energyDelta: number;

    constructor(name: string, description: string, tooltip: string="", icon: string=null, fg: string="white", bg: string="black", energyDelta: number=0) {
        this.name = name;
        this.description = description;
        this.tooltip = tooltip;
        this.icon = icon;
        this.fg = fg; // foreground
        this.bg = bg; // background
        this.energyDelta = energyDelta;
    }
}

export const MANIFEST = {
    "actions": {
        "Enter": new ActionType("Enter", "Enter a portal or plant atmosphere"),
        "Launch": new ActionType("Launch", "Launch into space", -10),
        "Wait": new ActionType("Wait", "Wait one turn in place")
    },
    "ais": {
        "aggrorange": new AIType("aggrorange", "Idles at a position and engages the player when coming into range"),
        "aggrorangeshort": new AIType("aggrorangeshort", "Idles at a position and engages the player when coming into shorter range"),
        "guardian": new AIType("guardian", "Idles at a position and only fights back if engaged"),
        "interactenrage": new AIType("interactenrage", "Gets hostile when getting talked to too often!")
    },
    /**
     * From: https://www.color-hex.com/color-palette/8618
     * Further inspiration: https://colorcodes.io/neon-color-codes/
     * Muted colors based on cyber colors, 2 shades down: https://colordesigner.io/color-palette-builder
     */
    "colors": {
        "black": "#000",
        "brown": "#a52a2a",
        "cybercyan": "#4deeea",
        "cyberyellow": "#ffe700",
        "cybermagenta": "#f000ff",
        "cybergreen": "#74ee15",
        "cyberblue": "#001eff",
        "darkgray": "#222",
        "gray": "#777",
        "mutedcyan": "#2cc9c5",
        "mutedyellow": "#b0a216",
        "mutedmagenta": "#a716b0",
        "mutedgreen": "#5ca821",
        "mutedblue": "#1628b0",
        "red": "#f00",
        "white": "#fff"
    },
    "colorcoding": {
        "cybergreen": "Friendly color",
        "cybermagenta": "Enemy color",
        "cyberyellow": "Item or special effect color"
    },
    "commands": {
        "N": new CommandType("N", "Move/interact/combat north"),
        "E": new CommandType("E", "Move/interact/combat east"),
        "S": new CommandType("S", "Move/interact/combat south"),
        "W": new CommandType("W", "Move/interact/combat west"),
        "A": new CommandType("A", "Primary action, confirm"), // A/X
        "B": new CommandType("B", "Take a break, cancel"), // B/Y/Z/space bar
        "1": new CommandType("1", "Secondary action, first quick slot"), // unused
        "2": new CommandType("2", "Tertiary action, second quick slot"), // unused
        "M": new CommandType("M", "Menu"),
        "#": new CommandType("#", "Open prompt") // # or /
    },
    "constants": {
        "DRAIN_MATTER_COST": 500,
        "DRAIN_GOLD_COST": 1,
        "MIN_TURN_SPEED_IN_MS": 80
    },
    "dialogs": {
        "bot_bar_aerobot_backstage": "Huh? How did you get here?",
        "bot_bar_aerobot_charger": "Feel free to recharge on those chargepads and enjoy the show.",
        "bot_bar_aerobot_spa_down": "Have you been to our shop, yet?",
        "bot_bar_aerobot_spa_up": "Ahhhh, so refreshing!",
        "bot_bar_aerobot_welcome": "Welcome to the Bot Bar. How may we serve you?",
        "bot_dormitory_aerobot_down": "Would you please go to your own pod?",
        "bot_dormitory_aerobot_up": "Pod, sweet pod!",
        "bot_dormitory_graffiti": "Not all pods are created equal! Rad!",
        "bot_dormitory_workbot_left": "This pod is taken, go away!",
        "bot_dormitory_workbot_right": "Brzzzt! Brzzzt!",
        "bot_factory_workbot_assembly": "The assembly line is unblocked!",
        "bot_factory_workbot_drain": "Don't come too close to the drain or you'll lose your stuff!",
        "bot_factory_workbot_forebot": "What are you doing here? Get back to work!",
        "bot_factory_workbot_sewers": "Sewage water is spilling over again.",
        "bot_factory_workbot_workwork": "Work, work!",
        "bot_factory_workbot_wrench": "I lost a wrench somewhere here...",
        "bot_prison_aerobot": "I'm innocent! I'm innocent! I'm innocent! Beep!",
        "bot_prison_workbot": "Thanks for freeing me! Guess I don't need this Pickaxe anymore...",
        "bot_stadium_botracing": "Now this is botracing!",
        "bot_station_graffiti": "Yo! The factory has a hidden backdoor!",
        "bot_station_graffiti_statues": "One statue isn't like the others! Ey!",
        "bot_station_pioneer": "You shall not pass!",
        "manual_spirit": "Weeee!",
        "manual_aerobot": "Huh? Why don't you have a hull?",
        "manual_workbot": "Work, work!",
        "manual_cleaner": "Follow the rules! Okay?",
        "manual_pioneer": "Don't talk to me, weakling!",
        "playground_label_top_portal": "Goes to top left side of star",
        "playground_label_bottom_portal": "Goes to top left corner of solar system",
        "shop_instance_aerobot_shopper": "It's shiny!!!",
        "shop_instance_shopkeeper": "Welcome! What does your engine desire?",
        "shop_instance_workbot_shopper": "This shop is not so secret after all..."
    },
    "effects": {
        "BioAbsorber": new EffectType("BioAbsorber", "Gain energy while on trees", "[Bio Absorber]: Regenerates energy on trees", "fx_ba"),
        "Recharger": new EffectType("Recharger", "Doubles energy gained from chargepads", "[Recharger]: Doubles energy gained from chargepads", "fx_re"),
        "Recuperation": new EffectType("Recuperation", "Reduces tool energy cost", "[Recuperation]: Reduces tool energy cost (max. -1)", "fx_cu"),
        "RockCrusher": new EffectType("RockCrusher", "Mines rock", "[Rock Crusher]: Enables rock mining", "fx_rc"),
        "Screwing": new EffectType("Screwing", "Unscrews the sewer portal covers", "[Screwing]: Opens sewer gates", "fx_sc"),
        "WallCrusher": new EffectType("WallCrusher", "Tears down weak walls", "[Wall Crusher]: Enables weak wall destruction", "fx_wc"),
        "WaterImmunity": new EffectType("WaterImmunity", "No damage taken from water", "[Water Immunity]: Prevents water damage", "fx_wi"),
        "WaterShield": new EffectType("WaterShield", "Reduces damage taken from water", "[Water Shield]: Reduces water damage", "fx_ws")
    },
    "entities": {
        "movableboulder": new EntityType("Boulder", "A movable rock", "o", 2),
        "movablebox": new EntityType("Box", "A movable box", "x", 2),
        "Spirit":  new EntityType("Spirit", "You are back in the machine mind, pick a new hull!", "@", 10),
        "AeroBot": new EntityType("AeroBot", "Basic server, serving energy goo and such to bots", "A", 80),
        "WorkBot": new EntityType("WorkBot", "Basic factory worker", "B"),
        "Cleaner": new EntityType("Cleaner", "Bot purging malfunctioning bots", "C", 50),
        "Deviant": new EntityType("Deviant", "Unaligned, divergent bot roaming the BotMos", "D", 120),
        "Graffiticyan": new EntityType("Graffiti", "Writing on the wall", "zc", 2),
        "Graffitimagenta": new EntityType("Graffiti", "Writing on the wall", "zm", 2),
        "Graffitiyellow": new EntityType("Graffiti", "Writing on the wall", "zy", 2),
        "Valkyrie": new EntityType("Valkyrie", "Airbourne war logistics", "V", 160),
        "Pioneer": new EntityType("Pioneer", "Absolute slayer bots, brotherhood of ultimate warriors", "W", 200),
        "RoboRat": new EntityType("RoboRat", "Minor self-assembled critter", "r", 5)
        /*
        // ...
        "RichBot": "Shiny metal ass, owns a spacestation, is the brain so to say",
        // ...
        "PirateBot": "Needs to be unlocked, achieve ship mastery",
        */
    },
    "factions": {
        "Critters": new FactionType("Critters", "Small pests", "cyberyellow", new Set(), new Set(["*"])),
        "Drifters": new FactionType("Drifters", "Bots disconnected from a mothership/overmind", "cybergreen", new Set(), new Set(["Guardians", "Workers"])),
        "Enraged": new FactionType("Enraged", "Always hostile faction", "cybermagenta", new Set(), new Set(["*"])),
        "Spirits": new FactionType("Spirits", "Default player faction", "white", new Set(), new Set()), // Deprecated?
        "Pyrates": new FactionType("Pyrates", "Default enemy faction", "cybermagenta", new Set(), new Set(["*"])),
        "Guardians": new FactionType("Guardians", "Bot station guardians", "cybercyan", new Set(), new Set(["Workers"])),
        "Workers": new FactionType("Workers", "Bot station workers", "white", new Set(), new Set(["Guardians"]))
    },
    "items": {
        "battery": new ItemType("Battery", "Increases maximum energy", "b", "cyberyellow", 10),
        "chest": new ItemType("Chest", "A chest. What might be inside?", "i", "cyberyellow"),
        "energy": new ItemType("Energy", "Energy pack", "e", "cyberyellow", 10) ,// 🗲
        "gold": new ItemType("Gold", "Precious shiny!", "gg", "cyberyellow", 0, 0, 1),
        "goo": new ItemType("Goo", "A minor matter source", "goo", "gray", 0, 1),
        "junk": new ItemType("Junk", "Broken bot", "%", "gray", 0, 1),
        "matter": new ItemType("Matter", "A pile of stuff", "m", "gray", 0, 100),
        // Tools
        "broom": new ItemType("Broom", "Sweeps the floor", "ib", "cyberyellow", 0, 0, 0, -10, -1), // DEPRECATED: replace with 'Mop' item to clear graffiti
        "cheat": new ItemType("Cheat", "Most powerful tool, totally legit", "icheat", "cyberyellow", 0, 0, 0, -500, -1, ["Recharger", "RockCrusher", "Screwing", "WallCrusher", "WaterShield"]),
        "hammer": new ItemType("Hammer", "Tears down weak walls", "ih", "cyberyellow", 0, 0, 0, -15, -2, ["WallCrusher"]),
        "pickaxe": new ItemType("Pickaxe", "Mines rock", "ip", "cyberyellow", 0, 0, 0, -13, -2, ["RockCrusher"]),
        "ratbite": new ItemType("Rat Bite", "Only rats have this", "irb", "cyberyellow", 0, 0, 0, -5, -1, ["WaterImmunity"]),
        "shocker": new ItemType("Shocker", "Injects Bots with new energy, basic AeroBot tool", "is", "cyberyellow", 0, 0, 0, 10, -1, ["Recharger"]),
        "trident": new ItemType("Trident", "Traverse water with less energy cost", "it", "cyberyellow", 0, 0, 0, -20, -3, ["WaterShield"]),
        "upgradeBioAbsorber": new ItemType("Bio Absorber Upgrade", "Grants [BioAbsorber] effect", "iu_ba", "cyberyellow", 0, 0, 0, 0, 0, ["BioAbsorber"]),
        "upgradeRecuperation": new ItemType("Recuperation Upgrade", "Grants [Recuperation] effect", "iu_cu", "cyberyellow", 0, 0, 0, 0, 0, ["Recuperation"]),
        "wrench": new ItemType("Wrench", "Basic WorkBot tool", "iw", "cyberyellow", 0, 0, 0, -10, -1, ["Screwing"])
    },
    "maps": {
        "bot_bar": `!
!!id bot_bar
!!size 28 16
!!spawn 14 3 movablebox
!!spawn 14 12 movablebox
!!spawn 2 4 AeroBot faction=Workers dialog=bot_bar_aerobot_welcome
!!spawn 4 8 AeroBot faction=Workers dialog=bot_bar_aerobot_charger
!!spawn 10 7 AeroBot faction=Workers dialog=bot_bar_aerobot_backstage
!!spawn 21 3 AeroBot faction=Workers dialog=bot_bar_aerobot_spa_up
!!spawn 21 5 AeroBot faction=Workers dialog=bot_bar_aerobot_spa_down
!!spawn 10 11 shocker
!!. void
!!_ voidtrue
!!~ water
!!# wall
!!s wallstatueaerobot
!!+ wallweak
!!= chargepad
!!O portal bot_station 23 16
!!S portal shop_instance 1 14
################_____######_
#..............#____#ssssss#
#..............#____#.=..=.#
#.....=..+++++.#____#=....=#
#s....=..+~....#____#......#
O.....=..+.....#____#=....=#
#s.====..+.....#____#....=.#
#..=.....+.....######..####_
#..=.....+......~......#____
#..====..+.....######.#_____
#.....=..+.....#____#.#_____
#.....=..+.....#____#.#_____
#.....=..+++++.#____#.#_____
#..............#____#.#_____
#~............~#____#S#_____
################_____#______
`,
"bot_dormitory": `!
!!id bot_dormitory
!!size 32 32
!!spawn 13 8 battery
!!spawn 4 11 AeroBot faction=Workers dialog=bot_dormitory_aerobot_up
!!spawn 23 27 AeroBot faction=Workers dialog=bot_dormitory_aerobot_down ai=interactenrage equip=shocker
!!spawn 8 18 WorkBot faction=Workers dialog=bot_dormitory_workbot_left ai=interactenrage
!!spawn 26 18 WorkBot faction=Workers dialog=bot_dormitory_workbot_right
!!spawn 13 28 Graffiticyan dialog=bot_dormitory_graffiti
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
!!spawn 1 2 junk
!!spawn 2 2 battery
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
!!spawn 12 3 hammer
!!# wall
!!s wallstatuepioneer
!!+ wallweak
!!. void
!!_ voidtrue
!!= chargepad
!!~ water
!!O portal bot_station 4 6
!!E portal solarsystem=1337 584 401
!!^ movenorth
!!v movesouth
################________________
#.........+...~#________________
#.........+....#________________
#.........+....#________________
#.........+....#________________
#.........++^++#################
#..............#s.s.s.s.s.s.s.s#
#..............#..===========..#
#................=+++++++++++=.#
#................=+++++++++++=.#
O..............#..===========..#
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
!!spawn 45 19 wrench
!!spawn 4 13 battery
!!spawn 2 2 junk
!!spawn 2 3 junk
!!spawn 2 4 junk
!!spawn 2 5 junk
!!spawn 2 6 junk
!!spawn 2 7 junk
!!spawn 2 8 junk
!!spawn 3 2 junk
!!spawn 3 3 junk
!!spawn 3 4 junk
!!spawn 3 5 junk
!!spawn 3 6 junk
!!spawn 3 7 junk
!!spawn 3 8 junk
!!spawn 4 2 junk
!!spawn 4 3 junk
!!spawn 4 4 junk
!!spawn 4 5 junk
!!spawn 4 6 junk
!!spawn 4 7 junk
!!spawn 4 8 junk
!!spawn 5 2 junk
!!spawn 5 3 junk
!!spawn 5 4 junk
!!spawn 5 5 junk
!!spawn 5 6 junk
!!spawn 5 7 junk
!!spawn 5 8 junk
!!spawn 6 2 junk
!!spawn 6 3 junk
!!spawn 6 4 junk
!!spawn 6 5 junk
!!spawn 6 6 junk
!!spawn 6 7 junk
!!spawn 6 8 junk
!!spawn 7 2 junk
!!spawn 7 3 junk
!!spawn 7 4 junk
!!spawn 7 5 junk
!!spawn 7 6 junk
!!spawn 7 7 junk
!!spawn 7 8 junk
!!spawn 8 2 junk
!!spawn 8 3 junk
!!spawn 8 4 junk
!!spawn 8 5 junk
!!spawn 8 6 junk
!!spawn 8 7 junk
!!spawn 8 8 junk
!!spawn 40 19 WorkBot faction=Workers dialog=bot_factory_workbot_wrench
!!spawn 15 18 WorkBot faction=Workers dialog=bot_factory_workbot_workwork
!!spawn 25 18 WorkBot faction=Workers dialog=bot_factory_workbot_assembly
!!spawn 43 29 WorkBot faction=Workers dialog=bot_factory_workbot_sewers
!!spawn 1 19 WorkBot faction=Workers dialog=bot_factory_workbot_drain
!!spawn 35 3 WorkBot faction=Workers name=ForeBot dialog=bot_factory_workbot_forebot equip=wrench ai=interactenrage
!!spawn 19 27 RoboRat faction=Critters ai=aggrorangeshort equip=ratbite
!!# wall
!!+ wallweak
!!~ water
!!- watersewage
!!. void
!!* drain
!!^ movenorth
!!> moveeast
!!v movesouth
!!< movewest
!!$ terminal
!!O portal bot_station 4 28
!!P portal bot_station 13 25
!!h portal bot_station 5 21
!!§ portalsewers bot_station_sewers 12 27
##########h#####################################
#~.....................+~......................#
#.........vv...........+.......................#
#......................+.......................#
#.........vv...........+..........+$+..........#
#......................+..........+++..........#
#.........vv...........+.......................#
#......................+.......................#
#.........vv...........+.......................#
#......................+.......................#
#..vv.<.<.<<...........+.......................#
#..vv.<.<.<<...........+.......................#
#..............................................#
#..............................................#
#vv#+###########################################
#**+.>.>.>.>.>.>.>.>.>~>.>.>.>.>.>.>.>.>.>.>.>.#
#**+.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>~>.>.>.>.P
#**#+###########################################
#........$+....$+......$+......$+......$+......#
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
#............................................~-§
##O#############################################
`,
"bot_prison": `!
!!id bot_prison
!!size 48 34
!!spawn 18 11 Cleaner faction=Guardians ai=aggrorange
!!spawn 17 2 Cleaner faction=Guardians ai=aggrorange
!!spawn 24 5 Cleaner faction=Guardians ai=aggrorange
!!spawn 29 24 Cleaner faction=Guardians ai=aggrorangeshort
!!spawn 34 22 AeroBot faction=Workers dialog=bot_prison_aerobot
!!spawn 9 22 WorkBot faction=Workers dialog=bot_prison_workbot
!!spawn 28 1 broom
!!spawn 43 30 battery
!!spawn 9 30 matter
!!spawn 9 21 pickaxe
!!# wall
!!+ wallweak
!!s wallstatuecleaner
!!. void
!!, voidhidden
!!_ voidtrue
!!= chargepad
!!~ water
!!C portalclosed
!!O portal bot_station 26 7
!!Q portal bot_prison 29 15
!!P portal bot_prison 15 24
!!R portal bot_prison 32 24
!!§ portalsewers bot_station_sewers 27 6
________________################________________
________________#=..+.........~#________________
________________#=..+..........#________________
________________#=..+.+++++++.+#________________
________________#..............#________________
________________#=..+..........#________________
________________#=..+..........#________________
________________#=..+.+++++++.+#________________
________________#..............#________________
________________#=..+..........#________________
________________#=..+..........#________________
________________#=..+..........#________________
________________#++++.+++++++.+#________________
________________#..............#________________
________________#s.s........s.s#________________
________________##O##,#######Q##________________
_________________##_#,#_____#.#_________________
_________________##_#,#####_#.#_________________
_________________##_#,,,,,#_#.#_________________
_________________##_#####,#_#.#_________________
################_##_#,,,,,#_#.#_################
#~...#~...#...~#_##_#,#####_#.#_#~...#...~#...~#
#....#....#....#_##_#,#####_#.#_#....#....#....#
#++C+++C++++C++######,#######.###++C++++C+++C++#
#..............P................R..............#
#..............######,###########..............#
#..............##_###,#________##..............#
#..............##_###,#________##..............#
#++C+++C++++C++##_#,,,#________##++C++++C+++C++#
#....#....#....##_#,###________##....#....#....#
#~...#~...#...~##_#,###________#§~...#...~#...~#
##,####,#####,#####,##############,#####,####,##
_#,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,#_
_##############################################_
`,
"bot_stadium": `!
!!id bot_stadium
!!size 48 16
!!spawn 26 2 WorkBot faction=Workers dialog=bot_stadium_botracing
!!spawn 22 4 upgradeRecuperation
!!# wall
!!+ wallweak
!!. void
!!= chargepad
!!~ watersewage
!!^ movenorth
!!> moveeast
!!v movesouth
!!< movewest
!!s wallstatueworkbot
!!O portal bot_station 10 16
!!S portalhidden shop_instance 1 14
################################################
#s............................................s#
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
#S............................................s#
#############################################O##
`,
"bot_station": `!
!!id bot_station
!!size 32 32
!!spawn 10 9 Cleaner faction=Guardians ai=guardian
!!spawn 12 9 Cleaner faction=Guardians ai=guardian
!!spawn 14 9 Cleaner faction=Guardians ai=guardian
!!spawn 16 9 Cleaner faction=Guardians ai=guardian
!!spawn 18 9 Cleaner faction=Guardians ai=guardian
!!spawn 20 9 Cleaner faction=Guardians ai=guardian
!!spawn 22 9 Cleaner faction=Guardians ai=guardian
!!spawn 24 9 Cleaner faction=Guardians ai=guardian
!!spawn 26 9 Cleaner faction=Guardians ai=guardian
!!spawn 28 9 Cleaner faction=Guardians ai=guardian
!!spawn 8 3 Pioneer faction=Guardians ai=aggrorangeshort equip=hammer dialog=bot_station_pioneer
!!spawn 27 17 Graffitimagenta dialog=bot_station_graffiti
!!spawn 9 16 Graffitiyellow dialog=bot_station_graffiti_statues
!!. void
!!~ water
!!# wall
!!+ wallweak
!!= chargepad
!!^ movenorth
!!> moveeast
!!v movesouth
!!< movewest
!!$ terminal bot_station_tv
!!° tv bot_station_tv
!!C portalclosed
!!A portal bot_prison 18 15
!!B portal bot_bar 0 5
!!O portal bot_dormitory 2 31
!!Q portal bot_dormitory 29 31
!!e portal bot_elevator 0 10
!!F portal bot_factory 2 31
!!E portal bot_factory 47 16
!!S portal bot_stadium 45 15
!!h portalhidden bot_factory 10 0
!!s portalsewers bot_station_sewers 0 11
!!w portalsewers bot_station_sewers 1 0
!!r portalsewers bot_station_sewers 31 1
!!z portalsewers bot_station_sewers 30 31
#w##############################
#~..########################..~r
#.......################.......#
#...........########...........#
#...####.++....CC........####..#
#...####.++..............####..#
#...e###.++..............####..#
#...####.++..............#A##..#
#........++....................#
#+++++++++.....................#
#+++++++++.+.+.+.+.+.+.+.+.+.++#
s~............................~#
#..............................#
#..#.#.#.#.#...................#
#..#########...................#
#..#########...........####.##.#
#..#######S#.>.>.>.>.>.B###.##.#
#.>.>.>.>...^....^.....######..#
#.....................v####.#..#
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
##############################z#
`,
"bot_station_sewers": `!
!!id bot_station_sewers
!!size 32 32
!!spawn 25 17 upgradeBioAbsorber
!!spawn 4 15 RoboRat faction=Critters ai=aggrorangeshort equip=ratbite
!!spawn 12 23 RoboRat faction=Critters ai=aggrorangeshort equip=ratbite
!!spawn 6 6 RoboRat faction=Critters ai=aggrorangeshort equip=ratbite
!!. void
!!- water
!!~ watersewage
!!# wall
!!+ wallweak
!!= chargepad
!!s portal bot_station 0 11
!!w portal bot_station 1 0
!!r portal bot_station 31 1
!!z portal bot_station 30 31
!!F portal bot_factory 47 30
!!P portal bot_prison 32 30
#w##############################
#-~~########################~~-r
#-~~~~~~################~~~~~~-#
#-~~~~~~~~~~########~~~~~~~~~~-#
#-~~####~~~~~~~##~~~~~~~~####~-#
#-~~#~~#~~~~~~~~~~~~~~~~~#~~#~-#
#-~~~~~#~~~~~~~~~~~~~~~~~#~P#~-#
#-~~####~~~~~~~~~~~~~~~~~#~##~-#
#-~~~~~~~~~~~~~~~~~~~~~~~~~~~~-#
#------------------------------#
#-~~~~~~~~~#~#~#~#~#~#~#~#~#~###
s-~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#
#------------------------------#
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-#
#~~#########~~~~~~~~~~~~~~~~~~-#
#~~#~~~~~~~#~~~~~~~~~~~####~~~-#
#~~#######~#~~~~~~~~~~~~~~#~~~-#
#~~~~~~~~~~~~~~~~~~~~~~#~~#~~~-#
#~~~~~~~~~~~~~~~~~~~~~~####~~~-#
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-#
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-#
#~~##~########~~~~~~~########~-#
#~~#~~~~~~~~~#~~~~~~~#~~~~~~#~-#
#~~#~~~~~~~~~#~~~~~~~#~~~~~~#~-#
#~~#~~########~~~~~~~#~~~~~~#~-#
#~~#~~~~~~~~~~~~~~~~~#~~~~~~#~-#
#~~#~~########~~~~~~~#~####~#~-#
#~~#~~~~~~~~F#~~~~~~~#~####~#~-#
#~~#~#########~~~~~~~#~####~#~-#
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-#
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-#
##############################z#
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
!!r wall r
!!d wall d
!!i wall i
!!= chargepad
!!^ movenorth
!!> moveeast
!!v movesouth
!!< movewest
!![ portal credits 0 5
!!] portal manual 0 5
!!( portalhidden playground 1 0
!!1 portalstartaerobot bot_factory 4 15
!!2 portalstartworkbot bot_factory 4 16
!!? _portalstart?
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
#...........Credits#
#.....?.....>.>.>..[
#..?...............#
#~~~~~~~~~~~~~~~~~~#
#(##################
`,
"credits": `!
!!id credits
!!size 80 20
!!# wall
!!. voidtrue
!!_ voidtrue
!!: void
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
!!0 wall 0
!!, wall ,
!!/ wall |
!!; wall :
!!( wall (
!!) wall )
!![ portal botmos_hull_selection 19 16
################################################################################
#..............................................................................#
#...BotMos.....................................................................#
#...CREDITS....................................................................#
#..............................................................................#
[...<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<..#
#.............................................................................^#
#^|.Design/Programming/Art....................................................^#
#^....Oliver_Z:.(https;//oliz:io).............................................^#
#^|...........................................................................^#
#^..Dependencies..............................................................^#
#^|...rot:js,_BSD_License,_by_Ondrej_Zara_and_contributors....................^#
#^....EasyStar:js,_MIT_License,_by_Bryce_Neal_and_contributors................^#
#^|...monogram_font,_CC0/Public_Domain,_by_datagoblin.........................^#
#^............................................................................^#
#^|...........................................................................^#
#^..>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.^#
#^|...........................................................................^#
#^............................................................................^#
################################################################################
`,
"manual": `!
!!id manual
!!size 80 54
!!spawn 4 26 Spirit faction=Spirits dialog=manual_spirit
!!spawn 4 27 AeroBot faction=Spirits dialog=manual_aerobot
!!spawn 4 28 WorkBot faction=Spirits dialog=manual_workbot
!!spawn 4 29 Cleaner faction=Spirits dialog=manual_cleaner
!!spawn 4 30 Pioneer faction=Spirits dialog=manual_pioneer equip=hammer ai=interactenrage
!!spawn 54 36 Spirit faction=Critters ai=aggrorange
!!spawn 4 36 junk
!!spawn 12 36 goo
!!spawn 4 37 matter
!!spawn 4 38 gold
!!spawn 4 39 energy
!!spawn 4 40 battery
!!spawn 4 41 wrench
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
!!/ wall |
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
#^..M_or_click/touch_on_the_screen_center_to_hide/show_the_message_log........^#
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
#^....Junk,...Goo,_minor_matter_sources.......................................^#
#^|...Matter,_a_common_resource...............................................^#
#^....Gold,_precious_shiny....................................................^#
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
!!size 20 24
!!spawn 9 9 movableboulder
!!spawn 10 9 movableboulder
!!spawn 9 17 cheat
!!spawn 9 15 upgradeBioAbsorber
!!spawn 1 18 battery
!!spawn 2 18 battery
!!spawn 3 18 battery
!!spawn 4 18 battery
!!spawn 5 18 battery
!!spawn 6 18 battery
!!spawn 7 18 battery
!!spawn 8 18 battery
!!spawn 9 18 battery
!!spawn 10 18 battery
!!spawn 11 18 battery
!!spawn 12 18 battery
!!spawn 13 18 battery
!!spawn 14 18 battery
!!spawn 15 18 battery
!!spawn 16 18 battery
!!spawn 17 18 battery
!!spawn 18 18 battery
!!spawn 17 2 Graffiticyan dialog=playground_label_top_portal
!!spawn 17 5 Graffitimagenta dialog=playground_label_bottom_portal
!!. void
!!# wall
!!= chargepad
!!~ water
!!O portal botmos_hull_selection 1 19
!!Q portal solarsystem=1337 448 448
!!P portal solarsystem=1337 30 17
#O##################
#=.................#
#...............Q#.#
#..................#
#..................#
#...............P#.#
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
#.........~........#
#..................#
#~~~~~~~~~~~~~~~~~~#
#~~~~~~~~~~~~~~~~~~#
#~~~~~~~~~~~~~~~~~~#
#~~~~~~~~~~~~~~~~~~#
####################
`
    },
    "map_snippets": {
"launcher": `!
!!id launcher
!!size 16 10
!!_ voidtrue
!!. void
!!# wall
!!~ water
!!^ movenorth
!!= chargepad
!!O portallauncher space 0 0
__________#__#__
_________#O##O#_
_________#^##^#_
_________#^##^#_
_________#^##^#_
_________#^##^#_
#.########^##^##
................
........~.......
##=##=########.#
`,
"shop_instance": `!
!!id shop_instance
!!size 48 16
!!# wall
!!. void
!!; wallstatueworkbot
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
!!0 wall 0
!!1 wall 1
!!2 wall 2
!!- portal bot_stadium 1 14
################################################
#;............................................;#
#..............................................#
#..............................................#
#.....Hammer...200M............................#
#..............................................#
#.....Pickaxe..200M............................#
#..............................................#
#.....Battery..200M............................#
#..............................................#
#.....Gold.....10000M..........................#
#..............................................#
#..............................................#
#..............................................#
#-............................................;#
################################################
`,
"space_bot_station": `!
!!id space_bot_station
!!size 3 4
!!_ voidtrue
!!# wall
!!O portal station 0 0
###
###
###
_O_
`,
"square_falcon": `!
!!id square_falcon
!!size 7 6
!!_ voidtrue
!!# wall
!!O portalclosed
######_
#######
####O__
#######
######_
__##___
`
    },
    "names": {
        "BotMoses": "Teaches the new player",
        "Betty": "Gambles a lot",
        "Bender": "From the future, bowl head",
        "Drak": "A now retired Pioneer, who teaches the new player combat lessons",
        "Oz": "A machinery wizard"
    },
    "tiles": {
        "void": BOTMOS_OPTIONS.showGrid ? new TileType("void", "Just nothing here", "", ".", "gray") : new TileType("void", "Just nothing here"),
        "voidtrue": new TileType("voidtrue", "Really nothing here and you shouldn't get there ever!", "", "_"),
        "voidhidden": new TileType("voidhidden", "Looks like a wall, but isn't!", "", '#', "gray", "black"),
        "water": new TileType("water", "Rust and other dangers await", "Water", "~", "cybercyan", "cyberblue", -2), // ≋ alternatively
        "watersewage": new TileType("watersewage", "Rust, goo and other dangers await", "Sewage Water", "~~", "cyberyellow", "cybergreen", -4),
        "drain": new TileType("drain", "Drains gold, matter and some of your energy", "Drain", "*", "cybermagenta", "black", -5),
        "rock": new TileType("rock", "Hidden treasures may await", "Rock", "'", "white", "gray"), // ▲ alternatively
        "tree": new TileType("tree", "Lots of trees make a forest", "Tree", "t", "brown", "black"),
        "wall": new TileType("wall", "A strong wall", "", '#', "gray", "black"),
        "wallstatueaerobot": new TileType("wallstatueaerobot", "A small statue looking like an AeroBot", "", 'sa', "gray", "black"),
        "wallstatuecleaner": new TileType("wallstatuecleaner", "A small statue looking like a Cleaner", "", 'sc', "gray", "black"),
        "wallstatuepioneer": new TileType("wallstatuepioneer", "A small statue looking like a Pioneer", "", 'sp', "gray", "black"),
        "wallstatueworkbot": new TileType("wallstatueworkbot", "A small statue looking like a WorkBot", "", 'sb', "gray", "black"),
        "wallweak": new TileType("wallweak", "A weakened wall", "Weak Wall", '+', "gray", "black"),
        "chargepad": new TileType("chargepad", "Recharges energy and health", "Chargepad", "=", "cyberyellow", "black", 2),
        //"chest": new Tile("chest", "A chest. What might be inside?", "c", "cyberyellow"),
        "movenorth": new TileType("movenorth", "Moves you north", "", "^^", "cyberyellow"),
        "moveeast": new TileType("moveeast", "Moves you east", "", ">>", "cyberyellow"),
        "movesouth": new TileType("movesouth", "Moves you south", "", "vv", "cyberyellow"),
        "movewest": new TileType("movewest", "Moves you west", "", "<<", "cyberyellow"),
        "portal": new TileType("portal", "Gateway to another map", "Portal", "O", "cyberyellow", "gray"), // □
        "portalclosed": new TileType("portalclosed", "Closed gateway to another map", "Closed Portal", "Oc", "black", "gray"), // □
        "portalhidden": new TileType("portalhidden", "Hidden gateway to another map", "", "#", "gray", "black"),
        "portallauncher": new TileType("portallauncher", "Launches into space", "Launch to Space", "O", "cyberyellow", "gray"),
        "portalsewers": new TileType("portalsewers", "Needs some tool to open", "Sewer Gate", "#~", "gray", "black"),
        "portalstartworkbot": new TileType("portalstartworkbot", "Start playing as a WorkBot", "Play as a WorkBot", "OB", "white"),
        "portalstartaerobot": new TileType("portalstartaerobot", "Start playing as an AeroBot", "Play as an AeroBot", "OA", "white"),
        "_portalstart?": new TileType("_portalstart?", "Not unlocked, yet!", "?", "O?", "white"),
        "spacerock": new TileType("spacerock", "Mountains as seen from space, non-blocking!", "", "'s", "white", "gray"),
        "spacetree": new TileType("spacetree", "Forest as seen from space", "", "ts", "brown", "darkgray"),
        "spacewater": new TileType("spacewater", "Water as seen from space, not dangerous!", "", "~s", "cybercyan", "cyberblue"),
        "spacevoid": new TileType("spacevoid", "Void/ground as seen from space", "", ".s", "darkgray", "darkgray"),
        "spacevoidstarwhite": new TileType("spacevoidstarwhite", "Space with a white background star", "", ".f", "white"),
        "spacevoidstaryellow": new TileType("spacevoidstaryellow", "Space with a yellow background star", "", ".y", "cyberyellow"),
        "star": new TileType("star", "It's hot, really hot!", "Star", "§", "cyberyellow", "cyberyellow", -100),
        "terminal": new TileType("terminal", "A computer terminal", "Terminal", "$", "cyberyellow"),
        "tv": new TileType("tv", "A big billboard screen", "TV", "!", "black", "cyberyellow"),
        /*
        "grass": new Structure("grass", "Grass, sometimes stuff is hidden here", ".", "darkgreen")
        */
    },
    "uitexts": {

    }
}
