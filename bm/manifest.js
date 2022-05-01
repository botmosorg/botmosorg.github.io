const NAMES = {
    "BotMoses": "Teaches the new player",
    "Betty": "Gambles a lot",
    "Bender": "From the future, bowl head",
}

class Spirit {
    constructor(name, description, icon) {
        this.name = name;
        this.description = description;
        this.icon = icon;
        this.color = "#fff"; // Default white, different color = different faction or fashion
        this.unlockCondition = null;
    }
}
class WorldObject {
    constructor(name, description, icon, color) {
        this.name = name;
        this.description = description;
        this.icon = icon;
        this.color = color;
    }
}
class Terrain {
    constructor(name, description, color) {
        this.name = name;
        this.description = description;
        this.color = color;
    }
}
class Structure {
    constructor(name, description, icon, color) {
        this.name = name;
        this.description = description;
        this.icon = icon;
        this.color = color;
    }
}

const MANIFEST = {
    "spirits": {
        "Spirit":  new Spirit("Spirit", "You are back in the machine mind, pick a new hull!", "@"),
        "WorkBot": new Spirit("WorkBot", "Basic pawn", "B"),
        "AeroBot": new Spirit("AeroBot", "Basic server, serving goo/oil and such to bots", "A"),
           /*
        "PioneerBot": "Absolute slayer bots, needs to play as WorkBot first, brotherhood of ultimate warriors",
        "ValkyrBot": "Female Godess from the sky, needs to play as AeroBot first",
        // ...
        "RichBot": "Shiny metal ass, owns a spacestation, is the brain so to say",
        // ...
        "PirateBot": "Needs to be unlocked, achieve ship mastery",
        */
    },
    "objects": {
        "boulder": new WorldObject("boulder", "A movable rock", "b", "#777"),
        "chest": new WorldObject("chest", "A chest. What might be inside?", "c", "goldenrod"),
        "log": new WorldObject("log", "A movable tree trunk", "l", "brown"),
    },
    "terrains": {
        "void": new Terrain("void", "Just nothing here", "#000"),
        "water": null,
        "grass": null,
        "rocky": null,
        "sand": null,
        "swallowwater": null,
        "deepwater": null
    },
    "structures": {
        "tree": new Structure("tree", "A tree", "t", "brown"),
        "grass": new Structure("grass", "Grass, sometimes stuff is hidden here", ".", "darkgreen")
    }
}
