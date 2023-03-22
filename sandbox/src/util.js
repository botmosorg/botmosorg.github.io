"use strict";

// Collection of pure functions

/**
 * @param {number} x1 The x coordinate of the 1st point.
 * @param {number} y1 The y coordinate of the 1st point.
 * @param {number} x2 The x coordinate of the 2nd point.
 * @param {number} y2 The y coordinate of the 2nd point.
 * @returns {number} The Manhattan distance between both points.
 */
export function distance(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}
