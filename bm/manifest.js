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
        this.unlockCondition = null;
    }
    static SPIRITS = [
        new Spirit("Spirit", "You are back in the machine mind, pick a new hull!", "@"),
        new Spirit("WorkBot", "Basic pawn", "B"),
        new Spirit("AeroBot", "Basic server, serving goo/oil and such to bots", "A"),
        /*
        "PioneerBot": "Absolute slayer bots, needs to play as WorkBot first, brotherhood of ultimate warriors",
        "ValkyrBot": "Female Godess from the sky, needs to play as AeroBot first",
        // ...
        "RichBot": "Shiny metal ass, owns a spacestation, is the brain so to say",
        // ...
        "PirateBot": "Needs to be unlocked, achieve ship mastery",
        */
    ];
}

const MANIFEST = {
    "spirits": {
        "Spirit":  new Spirit("Spirit", "You are back in the machine mind, pick a new hull!", "@"),
        "WorkBot": new Spirit("WorkBot", "Basic pawn", "B"),
        "AeroBot": new Spirit("AeroBot", "Basic server, serving goo/oil and such to bots", "A"),
    }
}
