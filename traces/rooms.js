"use strict";

class Room {
    constructor(id, intros, neighbours) {
        this.id = id;
        this.intros = intros;
        this.neighbours = neighbours;
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
    "Pod": new Room("Pod", ["Standard bot storage pod, nothing here really."], ["Hallway"]),
    "Hallway": new Room("Hallway", ["The hallway, lots of bots on their way to work."], ["Pod"])
}
