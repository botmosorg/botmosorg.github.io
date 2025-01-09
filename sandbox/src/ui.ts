import { TILEMAP } from "../src-img/tilemap"
import { actions_get } from "./action"
import { BOTMOS_OPTIONS, ROT_OPTIONS } from "./config"
import { items_get_equipped } from "./item"
import { players_get_current_id } from "./player"
import { State } from "./state"

const UI_ELEMENT = document.createElement("div")
UI_ELEMENT.id = "ui"
document.body.appendChild(UI_ELEMENT)

export async function drawUI(state: State, cameraY: number=0) { // dirty hack: UI should not rely on camera
    if (!BOTMOS_OPTIONS.showUI) {
        return
    }

    const playerId = players_get_current_id()
    const playerEntity = state.entities[playerId]

    // Render status line
    const UI_LINE = document.createElement("div")
    let uiLineText = ''
    const uiLineChildren = []
    if (!!playerEntity) {
        uiLineChildren.push(_create_sprite_element(playerEntity.type.name))

        let equippedItemText = ''
        const equippedItem = items_get_equipped(state, playerId)
        if (!!equippedItem) {
            //equippedItemText = equippedItem.type.name + ' '
            uiLineChildren.push(_create_sprite_element(equippedItem.type.name.toLowerCase()))
        }

        let matterText = ''
        if (playerEntity.matter > 0) {
            matterText = `${playerEntity.matter}M `
        }
        let goldText = ''
        if (playerEntity.gold > 0) {
            goldText = `${playerEntity.gold}G `
        }

        const actions = actions_get(state, playerEntity)
        uiLineText = ' ' + playerEntity.energy + '/' + playerEntity.energyMax + ' '
                    + equippedItemText
                    + goldText
                    + matterText
                    + "Y:" + actions.B.name + " X:" + actions.A.name
        UI_ELEMENT.style.flexDirection = "column-reverse"

        if (playerEntity.y-cameraY >= ROT_OPTIONS.height - 3) { // Player close to bottom of screen, flip UI line to top of screen
            UI_ELEMENT.style.flexDirection = "column"
        }

        UI_LINE.style.background = "#000"
        // Red border when low energy
        if (playerEntity.energy / playerEntity.energyMax <= 0.2) {
            UI_LINE.style.color = "#000"
            UI_LINE.style.background = "#f00"
        } else {
            UI_LINE.style.color = "#74ee15"
            UI_LINE.style.background = "#000"
        }

    } else {
        uiLineText = "Game over!"
        UI_LINE.style.color = "#000"
        UI_LINE.style.background = "#f00"
    }

    //UI_LINE.appendChild()
    //UI_LINE.appendChild()
    uiLineChildren.push(_create_text_element(uiLineText))
    UI_LINE.replaceChildren(...uiLineChildren)
    UI_ELEMENT.replaceChildren(UI_LINE)

    // Render menu / message log
    if (state._menuOpen && !!state.chatLog.length) {
        const lines = state.chatLog.slice(-BOTMOS_OPTIONS.chatLogMaxDisplaySize)

        const UI_CHATLOG_ELEMENT = document.createElement("div")
        UI_CHATLOG_ELEMENT.id = "uichatlog"
        UI_CHATLOG_ELEMENT.innerText = lines.join("\n")
        UI_ELEMENT.appendChild(UI_CHATLOG_ELEMENT)
    }
}

function _create_sprite_element(spriteId: string): HTMLElement {
    const uiSprite = document.createElement("span")
    const offset = TILEMAP[spriteId][0]
    uiSprite.style.background = `url('build/tiles.png') -${offset}px 0`
    uiSprite.style.width = `${BOTMOS_OPTIONS.fontSize}px`
    uiSprite.style.height = `${BOTMOS_OPTIONS.fontSize}px`
    uiSprite.style.display = "inline-block"
    return uiSprite
}

function _create_text_element(text: string): HTMLElement {
    const textElement = document.createElement("span")
    textElement.style.display = "inline-block"
    textElement.style.marginLeft = "8px"
    textElement.innerText = text
    return textElement
}