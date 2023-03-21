"use strict";

import { debug_log } from "./debug.js";

/**
 * A* algorithm.
 *
 * @param {*} movementMap two-dimensional array of 0s (movable) and 1s (blocked)
 * @param {*} startX from
 * @param {*} startY
 * @param {*} endX to
 * @param {*} endY
 * @returns Array of x,y coordinates, null if no path was found
 */
export function maps_a_star(movementMap, startX, startY, endX, endY) {
    let easystar = new EasyStar.js();
    easystar.setGrid(movementMap);
    easystar.setAcceptableTiles([0]);
    let foundPath = null;
    easystar.findPath(startX, startY, endX, endY, function (path) {
        foundPath = path;
    });
    easystar.calculate();
    debug_log(foundPath)
    return foundPath;
}
