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
        0: new Option(["Standard bot storage Pod, nothing here really.", "Standard bot storage Pod, home."], ["Down: Leave for the Hallway", "Hallway"])
    }),
    "Hallway": new Room("Hallway", {
        0: new Option(["The hallway, lots of bots on their way to work."], ["Down: Go to your Pod", "Pod"]),
        10: new Option(["End of the hallway."], null, ["Left: Leave for Central plaza", "Central"]),
        20: new Option(["You are back at your Pod door."], ["Down: Enter your Pod", "Pod"])
    }),
    "Central": new Room("Central", {
        0: new Option(["The central plaza."], ["Down: Go to Hallway", "Hallway"], ["Left: Go to Factory", "Factory"], ["Right: Go to Bot Bar", "Bot Bar"]),
        50: new Option(["The upper Central plaza."], ["Down: Go to lower Central", "Central"], ["Left: Go to Command Unit", "Command Unit"], ["Right: Go to Command Unit", "Command Unit"]),
    }),
    "Factory": new Room("Factory", {
        0: new Option(["The Factory producing all types of Bots and accessories. Now get to work!"]),
        100: new Option(["Minimum work done. You may leave now."], ["Down: Go to Central plaza", "Central"])
    }),
    "Bot Bar": new Room("Bot Bar", {
        0: new Option(["The Bot Bar: get your fill of delicious goo and recharge!"], ["Down: Leave bar", "Central"]),
        100: new Option(["You sense a connection with one of the serving AeroBots, but it's probably too much goo."], ["Down: Leave bar", "Central"]),
        150: new Option(["You are spending too much time here, soon they'll call the sweepers."], ["Down: Leave bar", "Central"]),
        166: new Option(["The sweepers were called, you are arrested!"], ["Down: Go to Prison", "Prison"], ["Left: Go to Prison", "Prison"], ["Right: Go to Prison", "Prison"])
    }),
    "Command Unit": new Room("Command Unit", {
        0: new Option(["The Command Unit. Unfortunately, the gate is closed."], ["Down: Go to Central plaza", "Central"])
    }),
    "Prison": new Room("Prison", {
    }),
}
