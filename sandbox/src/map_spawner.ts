import { entities_create } from "./entity";
import { items_create } from "./item";
import { MANIFEST } from "./manifest";
import { Map } from "./map";
import { RNG } from "./rng";
import { State } from "./state";

export function maps_planet_populate(state: State, map: Map): State {
    if (map.seed === 1337) {
        //map.setTile(126, 121, MANIFEST.tiles.portal, {mapId: "bot_elevator", x: 11, y: 47})
        state = entities_create(state, "batteryvalkyrie0", MANIFEST.entities.Valkyrie, map.id, 130, 127, {faction: MANIFEST.factions.Spirits})
        state = entities_create(state, "batteryvalkyrie1", MANIFEST.entities.Valkyrie, map.id, 124, 127, {faction: MANIFEST.factions.Spirits})
        state = items_create(state, MANIFEST.items.battery, map.id, 127, 130)

    } else {
        // Spawn entities and items randomly
        const rng = new RNG(map.seed)
        for (let tile_y=0; tile_y<map.heightTiles; tile_y++) {
            for (let tile_x=0; tile_x<map.widthTiles; tile_x++) {
                // Noise: water+none, plain+grass, plain+tree, mountain
                const tile = map.getTile(tile_x, tile_y)
                if (rng.getPercentage() <= 1 && (tile.type === MANIFEST.tiles.void || tile.type === MANIFEST.tiles.tree)) {
                    const toGenerate = rng.getItem(["pioneer", "deviant", "junk", "matter", "junk", "matter"])
                    switch (toGenerate) {
                        case "deviant":
                            state = entities_create(state, map.id + "_deviant_" + tile_x + "_" + tile_y, MANIFEST.entities.Deviant, map.id, tile_x, tile_y, { faction: MANIFEST.factions.Pyrates, ai: MANIFEST.ais.aggrorange })
                            break
                        case "pioneer":
                            state = entities_create(state, map.id + "_pioneer_" + tile_x + "_" + tile_y, MANIFEST.entities.Pioneer, map.id, tile_x, tile_y, { faction: MANIFEST.factions.Pyrates, ai: MANIFEST.ais.aggrorange })
                            break
                        case "junk":
                            state = items_create(state, MANIFEST.items.junk, map.id, tile_x, tile_y)
                            break
                        case "matter":
                            state = items_create(state, MANIFEST.items.matter, map.id, tile_x, tile_y)
                            break
                    }
                }
            }
        }
    }

    return state
}