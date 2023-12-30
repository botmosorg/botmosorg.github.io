// Collection of pure functions

/**
 * @param {number} x1 The x coordinate of the 1st point.
 * @param {number} y1 The y coordinate of the 1st point.
 * @param {number} x2 The x coordinate of the 2nd point.
 * @param {number} y2 The y coordinate of the 2nd point.
 * @returns {number} The Manhattan distance between both points.
 */
export function distance(x1: number, y1: number, x2: number, y2: number): number {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

/**
 * @param length Length of the range
 * @returns An array of length length with numbers from 0..length-1 (inclusive)
 */
export function range(length: number): Array<number> {
    return [...Array(length).keys()]
}
