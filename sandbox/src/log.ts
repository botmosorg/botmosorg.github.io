import { State } from "./state";

export function log(state: State, msg: string) {
    console.log(msg)

    return state
}