import { entities_create } from "./entity";
import { items_create } from "./item";
import { MANIFEST } from "./manifest";
import { Map } from "./map";
import { RNG } from "./rng";
import { spawn, SpawnCommand } from "./spawn";
import { State } from "./state";

export function maps_planet_populate(state: State, map: Map): State {
    if (map.seed === 1337) {
        //map.setTile(126, 121, MANIFEST.tiles.portal, {mapId: "bot_elevator", x: 11, y: 47})
        state = entities_create(state, "batteryvalkyrie0", MANIFEST.entities.Valkyrie, map.id, 130, 127, {faction: MANIFEST.factions.Spirits})
        state = entities_create(state, "batteryvalkyrie1", MANIFEST.entities.Valkyrie, map.id, 124, 127, {faction: MANIFEST.factions.Spirits})
        state = items_create(state, MANIFEST.items.trident, map.id, 127, 130)

    } else {
        // Spawn entities and items randomly
        const rng = new RNG(map.seed)
        for (let tile_y=0; tile_y<map.heightTiles; tile_y++) {
            for (let tile_x=0; tile_x<map.widthTiles; tile_x++) {
                // Noise: water+none, plain+grass, plain+tree, mountain
                const tile = map.getTile(tile_x, tile_y)
                if (rng.getPercentage() <= 1 && (tile.type === MANIFEST.tiles.void || tile.type === MANIFEST.tiles.tree)) {
                    const toGenerate = rng.getItem(["Pioneer", "Deviant", "junk", "matter", "junk", "matter"])
                    switch (toGenerate) {
                        case "Deviant":
                        case "Pioneer":
                            state = spawn(state, new SpawnCommand(map.id, tile_x, tile_y, toGenerate, { faction: "Pyrates", ai: "aggrorange" }))
                            break
                        case "junk":
                        case "matter":
                            state = spawn(state, new SpawnCommand(map.id, tile_x, tile_y, toGenerate))
                            break
                    }
                }
            }
        }
    }

    return state
}