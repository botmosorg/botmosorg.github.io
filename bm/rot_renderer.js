function rot_render(camera) {
    var map = MAPS[MAPS.current]

    // Render map
    for (var y=0 + UI_HEIGHT; y < camera.height + UI_HEIGHT; y++) {
        for (var x=0; x<camera.width; x++) {
            var tile = map_get(map, camera.x+x, camera.y+y)

            var bg_color = MANIFEST.terrains.void.color;
            var fg_color = MANIFEST.terrains.void.color;
            var symbol = ""

            if (tile != null) {
                if (tile.ground === GROUNDS.water) {
                    bg_color = "blue"
                }
                if (tile.ground === GROUNDS.plain) {
                    bg_color = "green"
                }
                if (tile.ground === GROUNDS.mountain) {
                    bg_color = "darkkhaki"
                }
                if (tile.structure === STRUCTURES.grass) {
                    symbol = MANIFEST.structures.grass.icon
                    fg_color = MANIFEST.structures.grass.color;
                }
                if (tile.structure === STRUCTURES.tree) {
                    symbol = MANIFEST.structures.tree.icon;
                    fg_color = MANIFEST.structures.tree.color;
                }
                if (tile.structure === STRUCTURES.wall) {
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
        ROT_DISPLAY.drawOver(entity.x, entity.y + UI_HEIGHT, MANIFEST.spirits.Spirit.icon, MANIFEST.spirits.Spirit.color);
    }

    // Render UI lines
    for (var i=0; i<UI_LINES.length; i++) {
        let line = UI_LINES[i];
        ROT_DISPLAY.drawText(0, i, "%c{white}%b{black}"+line, CAMERA_SIZE[0]);
    }

    // Render debug lines
    for (var i=0; i<DEBUG_LINES.length; i++) {
        let line = DEBUG_LINES[i];
        ROT_DISPLAY.drawText(0, i + UI_HEIGHT, "%c{green}%b{black}"+line, CAMERA_SIZE[0]);
    }
}
