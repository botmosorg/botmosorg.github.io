"use strict";

class Room {
    constructor(id, options) {
        this.id = id;
        this.options = options;
    }
}

class Option {
    constructor(intros, down=null, left=null, right=null, up=null) {
        this.intros = intros;
        this.down = down;
        this.left = left;
        this.right = right;
        this.up = up;
    }
}

export const ROOMS = {
    "Pod": new Room("Pod", {
        0: new Option(["Standard bot storage pod, nothing here really."], ["Down: Leave for the Hallway", "Hallway"])
    }),
    "Hallway": new Room("Hallway", {
        0: new Option(["The hallway, lots of bots on their way to work."], ["Down: Go to your Pod", "Pod"]),
        10: new Option(["End of the hallway."], null, ["Left: Leave for Central plaza", "Central"]),
        20: new Option(["The hallway, lots of bots on their way to work."], ["Down: Go to your Pod", "Pod"])
    }),
    "Central": new Room("Central", {
        0: new Option(["The central plaza."], ["Down: Go to Hallway", "Hallway"]),
    })
}
