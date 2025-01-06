import { BOTMOS_OPTIONS } from "./config";
import { State } from "./state";

export function log(state: State, msg: string) {
    state.chatLog.push(msg)
    state.chatLog = state.chatLog.slice(-BOTMOS_OPTIONS.chatLogMaxSize)

    return state
}