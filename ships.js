// If maps are included already, ships are basically maps, too.

function spawn(shipTemplate, mapId) {
    return {
        "ID": Math.floor(Math.random() * 1000000000),
        "entering": [],
        "leaving": [],
    }
}

function handover(characterId, ship) {
    // TODO
}


