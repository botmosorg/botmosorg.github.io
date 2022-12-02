"use strict";

class Action {
    perform() {
    }
}

class MovementAction extends Action {
    constructor(dx, dy) {
        this.dx = dx;
        this.dy = dy;
    }
}
