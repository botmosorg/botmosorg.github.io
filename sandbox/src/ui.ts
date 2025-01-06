import { actions_get } from "./action"
import { BOTMOS_OPTIONS, ROT_OPTIONS } from "./config"
import { DEBUG_LINES } from "./debug"
import { items_get_equipped } from "./item"
import { players_get_current_id } from "./player"
import { State } from "./state"

const UI_ELEMENT = document.createElement("div")
UI_ELEMENT.id = "ui"
document.body.appendChild(UI_ELEMENT)
const UI_CHATLOG_ELEMENT = document.createElement("div")
UI_CHATLOG_ELEMENT.id = "uichatlog"
document.body.appendChild(UI_CHATLOG_ELEMENT)

export async function drawUI(state: State, cameraY: number=0) { // dirty hack: UI should not rely on camera
    const playerId = players_get_current_id()
    const playerEntity = state.entities[playerId]

    // Render status line
    if (!!playerEntity && BOTMOS_OPTIONS.showUI) {
        let equippedItemText = ''
        const equippedItem = items_get_equipped(state, playerId)
        if (!!equippedItem) {
            equippedItemText += equippedItem.type.name + ' '
        }

        const actions = actions_get(state, playerEntity)
        let line = playerEntity.type.name + ' ' + playerEntity.energy + '/' + playerEntity.energyMax + ' '
                    + equippedItemText
                    + "Y:" + actions.B.name + " X:" + actions.A.name
        UI_ELEMENT.style.flexDirection = "column-reverse"

        if (playerEntity.y-cameraY >= ROT_OPTIONS.height - 3) { // Player close to bottom of screen, flip UI line to top of screen
            UI_ELEMENT.style.flexDirection = "column"
        }

        const UI_LINE = document.createElement("span")
        UI_LINE.innerText = line
        UI_LINE.style.background = "#000"
        UI_ELEMENT.replaceChildren(UI_LINE)

        // Red border when low energy
        if (playerEntity.energy / playerEntity.energyMax <= 0.2) {
            UI_LINE.style.color = "#000"
            UI_LINE.style.background = "#f00"
        } else {
            UI_LINE.style.color = "#74ee15"
            UI_LINE.style.background = "#000"
        }
    }

    // Render menu
    if (state._menuOpen) {
        const lines = []
        lines.push("BotMos Menu")
        lines.push("")
        if (!!playerEntity) {
            lines.push("Hull: " + playerEntity.type.name)
            lines.push("Energy: " + playerEntity.energy + '/' + playerEntity.energyMax)
            lines.push("Gold: " + playerEntity.gold)
            lines.push("Matter: " + playerEntity.matter)
            const equippedItem = items_get_equipped(state, playerId)
            if (!!equippedItem) {
                lines.push("Tool: " + equippedItem.type.name)
            }
            if (BOTMOS_OPTIONS.debug) {
                lines.push("DEBUG Position: " + playerEntity.x + ',' + playerEntity.y)
                lines.push("DEBUG Map: " + playerEntity.mapId)
            }
        }
        for (let i=0; i<lines.length; i++) {
            const UI_LINE = document.createElement("span")
            UI_LINE.innerText = lines[i]
            UI_ELEMENT.appendChild(UI_LINE)
        }
    }

    // Render chat log
    if (state.chatLog.length) {
        const lines = state.chatLog.slice(-BOTMOS_OPTIONS.chatLogMaxDisplaySize)
        UI_CHATLOG_ELEMENT.innerText = lines.join("\n");
    }

    // Render debug lines
    for (let i=0; i<DEBUG_LINES.length; i++) {
        const UI_LINE = document.createElement("span")
        UI_LINE.innerText = DEBUG_LINES[i]
        UI_ELEMENT.appendChild(UI_LINE)
    }
}