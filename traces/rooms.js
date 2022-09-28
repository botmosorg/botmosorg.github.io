"use strict";

class Room {
    constructor(id, neighbours) {
        this.id = id;
        this.neighbours = neighbours
    }
}

export const ROOMS = {
    "pod": new Room("pod", ["hallway"]),
    "hallway": new Room("hallway", ["pod"])
}
