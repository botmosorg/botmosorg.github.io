import { BOTMOS_OPTIONS } from "./config"
import { displayCoordinatesToMapCoordinates, mapCoordinatesToGameObjects, ROT_DISPLAY } from "./rot_renderer_tile.js"
import { getTooltipContainer } from "./ui"

export async function drawTooltip(e) {
    if (!BOTMOS_OPTIONS.showUI || !BOTMOS_OPTIONS.showTooltip) {
        return
    }

    //console.log("Mouse over event target:", e.target)

    const pos = ROT_DISPLAY.eventToPosition(e)
    if (pos[0] !== -1) {
        // Canvas coordinates
        const mapPos = displayCoordinatesToMapCoordinates(pos)
        const gameObjects = mapCoordinatesToGameObjects(mapPos)
        //console.log(gameObjects)

        let tooltipText = ""
        if (!!gameObjects.entity) {
            const entityName = !!gameObjects.entity?.options?.name ? gameObjects.entity.options.name : gameObjects.entity.type.name
            tooltipText += entityName
        }
        if (!!gameObjects.item) {
            if (tooltipText !== "") tooltipText += "\n";
            tooltipText += gameObjects.item.type.name
        }
        if (!!gameObjects.tile?.type) {
            if (tooltipText !== "") tooltipText += "\n";
            tooltipText += gameObjects.tile.type.name
        }

        const tooltipElement = getTooltipContainer()
        if (tooltipText !== "") {
            tooltipElement.innerText = tooltipText
            tooltipElement.style.left = e.x + 20 + 'px'
            tooltipElement.style.top = e.y + 20 + 'px'
            tooltipElement.style.display = "inline-block"
        } else {
            tooltipElement.style.display = "none"
        }
    }
}
