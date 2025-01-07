import { State } from "./state"

export function debug_entity_position(state: State, entityId: string): string {
    const entity = state.entities[entityId]
    return `DEBUG: ${entityId} at ${entity.mapId},${entity.x},${entity.y}`
}
