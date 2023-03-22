"use strict";

/**
 * A* algorithm using https://github.com/prettymuchbryce/easystarjs
 *
 * @param {*} movementMap two-dimensional array of 0s (movable) and 1s (blocked)
 * @param {*} startX from
 * @param {*} startY
 * @param {*} endX to
 * @param {*} endY
 * @returns Array of x,y coordinates, null if no path was found
 */
export function a_star(movementMap, startX, startY, endX, endY) {
    let easystar = new EasyStar.js();
    easystar.setGrid(movementMap);
    easystar.setAcceptableTiles([0]);
    easystar.enableSync();
    let foundPath = null;
    easystar.findPath(startX, startY, endX, endY, function (path) {
        foundPath = path;
    });
    easystar.calculate();
    return foundPath;
}
