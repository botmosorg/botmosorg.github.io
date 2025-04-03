import { BOTMOS_OPTIONS } from "./config"
import { displayCoordinatesToMapCoordinates, mapCoordinatesToGameObjects, ROT_DISPLAY } from "./rot_renderer_tile.js"
import { getTooltipContainer } from "./ui"

export async function drawTooltip(e) {
    if (!BOTMOS_OPTIONS.showUI || !BOTMOS_OPTIONS.showTooltip) {
        return
    }

    let tooltipText = ""
    if (!!e.target) {
        if (!!e.target?.dataset?.tooltip) {
            tooltipText += e.target.dataset.tooltip
        }
    }

    const pos = ROT_DISPLAY.eventToPosition(e)
    if (pos[0] !== -1) {
        // Canvas coordinates
        const mapPos = displayCoordinatesToMapCoordinates(pos)
        const gameObjects = mapCoordinatesToGameObjects(mapPos)
        //console.log(gameObjects)

        if (!!gameObjects.entity) {
            const entityName = !!gameObjects.entity?.options?.name ? gameObjects.entity.options.name : gameObjects.entity.type.name
            tooltipText += entityName
        }
        if (!!gameObjects.item) {
            if (tooltipText !== "") tooltipText += "\n";
            tooltipText += gameObjects.item.type.name
        }
        if (!!gameObjects?.tile?.type && gameObjects.tile?.type.tooltip !== "") {
            if (tooltipText !== "") tooltipText += "\n";
            tooltipText += gameObjects.tile.type.tooltip
        }
    }

    //const WINDOW_WIDTH_IN_PX = (typeof window !== 'undefined') ? window.innerWidth : 0
    const WINDOW_HEIGHT_IN_PX = (typeof window !== 'undefined') ? window.innerHeight : 0
    //const WINDOW_HALF_WIDTH = Math.floor(WINDOW_WIDTH_IN_PX / 2)
    const WINDOW_HALF_HEIGHT = Math.floor(WINDOW_HEIGHT_IN_PX / 2)

    const tooltipElement = getTooltipContainer()
    if (tooltipText !== "") {
        tooltipElement.innerText = tooltipText
        tooltipElement.style.left = e.x + 20 + 'px'
        tooltipElement.style.top = e.y + 20 + 'px'
        if (e.y > WINDOW_HALF_HEIGHT) {
            tooltipElement.style.top = e.y - 20 + 'px'
        }
        tooltipElement.style.display = "inline-block"
    } else {
        tooltipElement.style.display = "none"
    }
}
