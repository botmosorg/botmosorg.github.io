"use strict";

import { MANIFEST } from "./manifest.js";
import { Map, tiles_create } from "./map.js";

export function parse(mapString) {
    let lines = mapString.split(/\r?\n/)
    let metaCharacter = mapString[0]
    let mapId = ""
    let width = 0
    let height = 0
    let meta = {}
    let tiles = [];
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i]
        if (line.startsWith(metaCharacter)) {
            if (line.startsWith(metaCharacter + "!id")) {
                // Map id command
                mapId = line.slice(5)
            } else if (line.startsWith(metaCharacter + "!size")) {
                // Map size command
                let dims = line.split(" ").slice(1)
                width = Number(dims[0])
                height = Number(dims[1])
            } else if (line.startsWith(metaCharacter + "!")) {
                // Map character commands
                let character = line[2]
                let tileTypeName = line.slice(4)
                meta[character] = tileTypeName
            }
        } else {
            // Map payload
            for (let j = 0; j < line.length; j++) {
                let character = line[j];
                let tileTypeName = meta[character];
                let options = {}
                if (tileTypeName.startsWith("portal")) {
                    let portalComponents = tileTypeName.split(" ")
                    tileTypeName = "portal"
                    options.mapId = portalComponents[1]
                    options.x = Number(portalComponents[2])
                    options.y = Number(portalComponents[3])
                }
                tiles.push(tiles_create(MANIFEST.tiles[tileTypeName], options))
            }
        }
    }

    return new Map(
        mapId,
        width,
        height,
        tiles
    );
}
