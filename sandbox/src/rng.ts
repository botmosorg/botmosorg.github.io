import * as ROT from "../lib/rot.js"

export class RNG {
    seed: number
    _rotRng: any

    constructor(seed: number=1337) {
        this.seed = seed
        this._rotRng = ROT.RNG.clone()
        this._rotRng.setSeed(seed)
    }

    /**
     * @returns A pseudorandom value [1, 100] inclusive, uniformly distributed
     */
    getPercentage(): number {
        return this._rotRng.getPercentage()
    }

    /**
     * @param a An array of items
     * @returns A random element of the array a
     */
    getItem(a: Array<any>): any {
        return this._rotRng.getItem(a)
    }
}


