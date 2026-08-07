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
    /* WorkBot chain */
    "Pod": new Room("Pod", {
        0: new Option(["Standard bot storage Pod, nothing here really.", "Standard bot storage Pod, home."], ["Down: Leave for the Hallway", "Hallway"]),
        10: new Option(["You're running in circles in your Pod, maybe follow the Hallway instead."], ["Down: Leave for the Hallway", "Hallway"]),
        50: new Option(["Bored in your Pod? Visit the Bot Bar to recharge with finest goo!"], ["Down: Leave for the Hallway", "Hallway"])
    }),
    "Hallway": new Room("Hallway", {
        0: new Option(["The Hallway, lots of bots on their way to work."], ["Down: Go to your Pod", "Pod"]),
        10: new Option(["End of the Hallway."], null, ["Left: Leave for Central plaza", "Central"]),
        20: new Option(["You are back at your Pod door. Running in circles, huh?"], ["Down: Enter your Pod", "Pod"])
    }),
    "Central": new Room("Central", {
        0: new Option(["The central plaza."], ["Down: Go to storage Hallway", "Hallway"], ["Left: Go to Factory", "Factory"], ["Right: Go to Bot Bar", "Bot Bar"]),
        50: new Option(["The upper Central plaza."], ["Down: Go to lower Central", "Central"], ["Left: Go to Command Unit", "Command Unit"], ["Right: Go to Command Unit", "Command Unit"]),
    }),
    "Factory": new Room("Factory", {
        0: new Option(["The Factory producing all types of Bots and accessories. Now get to work!"]),
        50: new Option(["Work still not done, keep pressing those buttons!", "Work, work, work!"]),
        100: new Option(["Minimum work done. You may leave now."], ["Down: Go to Central plaza", "Central"]),
        150: new Option(["You are done working. Your co-bots invite you to a Bot Race, for fun."], ["Down: Go to Central plaza", "Central"], ["Left: Go to Bot Racing Pit", "Bot Racing Pit"]),
        200: new Option(["No supervisor is there and the Factory Control Room door is open."], ["Down: Go to Central plaza", "Central"], ["Left: Go to Factory Control Room", "Factory Control Room"])
    }),
    "Factory Control Room": new Room("Factory Control Room", {
        0: new Option(["Controls which type of bot gets produced. Do you want to re-fit to a different model?"], ["Down: Go to Central plaza", "Central"], ["Left: Re-fit to AeroBot", "AeroBot Assembly"], ["Right: Re-fit to Pioneer", "Pioneer Assembly"]),
    }),
    "Bot Bar": new Room("Bot Bar", {
        0: new Option(["The Bot Bar: get your fill of delicious goo and recharge!"], ["Down: Leave Bar", "Central"]),
        50: new Option(["You sense a connection with one of the serving AeroBots, but it's probably too much goo."], ["Down: Leave Bar", "Central"]),
        100: new Option(["You are spending too much time here, soon they'll call the sweepers."], ["Down: Leave Bar", "Central"]),
        110: new Option(["The sweepers were called, you are arrested!"], ["Down: Go to Prison", "Prison"], ["Left: Go to Prison", "Prison"], ["Right: Go to Prison", "Prison"])
    }),
    "Command Unit": new Room("Command Unit", {
        0: new Option(["The Command Unit. Unfortunately, the gate is closed."], ["Down: Go to Central plaza", "Central"])
    }),
    "Prison": new Room("Prison", {
        0: new Option(["The Prison. Now do your time!", "The Prison interior is almost like that of a Pod, not much here."]),
        200: new Option(["Time done. You may leave now.", "Time done, finally!"], ["Down: Go to Central plaza", "Central"])
    }),
    "Bot Racing Pit": new Room("Bot Racing Pit", {
        0: new Option(["Bot races keep the morale up."], ["Down: Go to Central plaza", "Central"]),
        10: new Option(["Now this is Bot racing!"], ["Down: Go to Central plaza", "Central"]),
    }),
    /* AeroBot chain */
    "AeroBot Assembly": new Room("AeroBot Assembly", {
        0: new Option(["On the assembly line, your hull is made more aerodynamic."]),
        10: new Option(["Remember your purpose: be aerodynamic and serve goo!"], null, ["Left: Leave for Bot Bar", "Bot Bar_A"])
    }),
    "Bot Bar_A": new Room("Bot Bar", {
        0: new Option(["Lots of underpowered WorkBots. You are serving them goo."]),
        10: new Option(["Game over. If you think, this game should continue, please write to botmos at oliz dot io!"])
    }),
    /* Pioneer chain */
    "Pioneer Assembly": new Room("Pioneer Assembly", {
        0: new Option(["On the assembly line, your hull is augmented with armor plates and weapons."]),
        10: new Option(["All Pioneers prepare for draft!"], null, ["Left: Leave for Hall of Warriors", "Hall of Warriors"]),
    }),
    "Hall of Warriors": new Room("Hall of Warriors", {
        0: new Option(["A long hallway decorated with the busts of famous Pioneers."], ["Down: Go to your Pod", "Pioneer Pod"]),
        10: new Option(["End of the hallway, draft awaits."], null, ["Left: Get drafted", "Draft Hall"]),
    }),
    "Pioneer Pod": new Room("Pioneer Pod", {
        0: new Option(["A bit spacier than standard bot storage."], ["Down: Leave for Hall of Warriors", "Hall of Warriors"]),
    }),
    "Draft Hall": new Room("Draft Hall", {
        0: new Option(["You are fit for service in the fleet."], ["Down: Leave for Hall of Warriors", "Hall of Warriors"], ["Left: Board drop ship", "Drop Ship"]),
    }),
    "Drop Ship": new Room("Drop Ship", {
        0: new Option(["Game over. If you think, this game should continue, please write to botmos at oliz dot io!"])
    })
}
