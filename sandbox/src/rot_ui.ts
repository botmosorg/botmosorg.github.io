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
        if (!!gameObjects.tile?.type) {
            tooltipText = gameObjects.tile.type.name + " (" + gameObjects.tile.type.description + ")"
        }
        if (!!gameObjects.entity) {
            tooltipText += "\n" + gameObjects.entity.type.name + " (" + gameObjects.entity.type.description + ")"
        }
        if (!!gameObjects.item) {
            tooltipText += "\n" + gameObjects.item.type.name + " (" + gameObjects.item.type.description + ")"
        }

        const tooltipElement = getTooltipContainer()
        if (tooltipText !== "") {
            tooltipElement.innerText = tooltipText
            tooltipElement.style.display = "inline-block"
        } else {
            tooltipElement.style.display = "none"
        }
    }
}
