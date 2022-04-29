const ENTITY_TYPES = {
    "player":0,
    "item":1
}

var ENTITIES = {
}

function character_create(id, type, map_id) {
    return {
        "id": id,
        "type": type,
        "map_id": map_id,
        "x": 0,
        "y": 0
    }
}

function entities_store(entity) {
    ENTITIES[entity.id] = entity
}

function entities_get_for_map(map_id) {
    var entity_ids = Object.keys(ENTITIES)
    var entities_on_map = []
    for (var i=0; i<entity_ids.length; i++) {
        var entity = ENTITIES[entity_ids[i]]
        if (entity.map_id == map_id) {
            entities_on_map.push(entity)
        }
    }
    return entities_on_map
}

entities_store(character_create("player", ENTITY_TYPES.player, MAPS.current))
ENTITIES.player.x = 2
ENTITIES.player.y = 2