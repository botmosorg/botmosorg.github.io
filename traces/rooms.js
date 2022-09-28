"use strict";

class Room {
    constructor(id, neighbours) {
        this.id = id;
        this.neighbours = neighbours
    }
}

export const ROOMS = {
    "Pod": new Room("Pod", ["Hallway"]),
    "Hallway": new Room("Hallway", ["Pod"])
}
