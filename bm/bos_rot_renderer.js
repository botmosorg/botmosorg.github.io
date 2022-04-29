function bos_rot_render(camera) {
    var map = MAPS[MAPS.current]

    // Render map
    for (var y=0; y<camera.height; y++) {
        for (var x=0; x<camera.width; x++) {
            var tile = map_get(map, camera.x+x, camera.y+y)

            var bg_color = "black"
            var fg_color = "black"
            var symbol = ""

            if (tile != null) {
                if (tile.ground == GROUNDS.water) {
                    bg_color = "blue"
                }
                if (tile.ground == GROUNDS.plain) {
                    bg_color = "green"
                }
                if (tile.ground == GROUNDS.mountain) {
                    bg_color = "darkkhaki"
                }
                if (tile.structure == STRUCTURES.grass) {
                    symbol = "."
                    fg_color = "darkgreen"
                }
                if (tile.structure == STRUCTURES.tree) {
                    symbol = "t"
                    fg_color = "brown"
                }
                if (tile.structure == STRUCTURES.wall) {
                    bg_color = "gray"
                }
            }

            ROT_DISPLAY.draw(x, y, symbol, fg_color, bg_color)
        }
    }

    // Render entities
    var entities = entities_get_for_map(MAPS.current)
    for (var i=0; i<entities.length; i++) {
        var entity = entities[i]
        ROT_DISPLAY.drawOver(entity.x, entity.y, "@", "#fff");
    }
}
