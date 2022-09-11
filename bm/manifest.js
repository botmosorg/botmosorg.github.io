"use strict";

import { SHOW_GRID } from "./config.js"

class Spirit {
    constructor(name, description, icon) {
        this.name = name;
        this.description = description;
        this.icon = icon;
        this.color = "#fff"; // Default white, different color = different faction or fashion
        this.unlockCondition = null;
    }
}
class Tile {
    constructor(name, description, icon=null, fg="white", bg="black") { // foreground, background colors
        this.name = name;
        this.description = description;
        this.icon = icon;
        this.fg = fg;
        this.bg = bg;
    }
}

export const MANIFEST = {
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
        "gray": "#777",
        "white": "#fff"
    },
    "colorcoding": {
        "cybermagenta": "Enemy color"
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
    "tiles": {
        "void": SHOW_GRID ? new Tile("void", "Just nothing here", ".", "gray", "black") : new Tile("void", "Just nothing here"),
        "water": new Tile("water", "Rust and other dangers await", "~", "cybercyan", "cyberblue"), // ≋ alternatively
        "rock": new Tile("rock", "Hidden treasures may away", "▲", "cyberyellow", "black"), // ^ alternatively
        "wall": new Tile("wall", "A strong wall", '#', "gray", "black"),
        "weakwall": new Tile("weakwall", "A weakened wall", '+', "gray", "black"),
        "chargepad": new Tile("chargepad", "Recharges energy and health", "=", "cyberyellow", "black"),
        "boulder": new Tile("boulder", "A movable rock", "o", "gray"),
        "chest": new Tile("chest", "A chest. What might be inside?", "c", "cyberyellow"),
        "item": new Tile("item", "An item lying on the ground", "i", "cyberyellow"),
        "portal": new Tile("portal", "Gateway to another map", "□", "cyberyellow"),
        /*
        "tree": new Structure("tree", "A tree", "t", "brown"),
        "grass": new Structure("grass", "Grass, sometimes stuff is hidden here", ".", "darkgreen")
        */
    }
}

export function read_color(name) {
    return MANIFEST.colors[name];
}
