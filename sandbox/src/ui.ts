import { TILEMAP } from "../src-img/tilemap"
import { actions_get } from "./action"
import { BOTMOS_OPTIONS, ROT_OPTIONS } from "./config"
import { items_get_equipped } from "./item"
import { players_get_current_id } from "./player"
import { State } from "./state"

const UI_ELEMENT = document.createElement("div")
UI_ELEMENT.id = "ui"
document.body.appendChild(UI_ELEMENT)
const UI_HULL_ELEMENT = _create_sprite_element()
const UI_TOOL_ELEMENT = _create_sprite_element()
const UI_LINE_TEXT_ELEMENT = _create_text_element()

const UI_LINE = document.createElement("div")
UI_LINE.replaceChildren(UI_HULL_ELEMENT, UI_TOOL_ELEMENT, UI_LINE_TEXT_ELEMENT)
UI_ELEMENT.replaceChildren(UI_LINE)

const UI_CHATLOG_AND_TOOLTIP_CONTAINER_ELEMENT = document.createElement("div")
UI_CHATLOG_AND_TOOLTIP_CONTAINER_ELEMENT.style.display = "flex"
UI_CHATLOG_AND_TOOLTIP_CONTAINER_ELEMENT.style.justifyContent = "space-between"
const UI_CHATLOG_ELEMENT = document.createElement("div")
UI_CHATLOG_ELEMENT.id = "uichatlog"
const UI_TOOLTIP_ELEMENT = document.createElement("div")
UI_TOOLTIP_ELEMENT.id = "uitooltip"
UI_CHATLOG_AND_TOOLTIP_CONTAINER_ELEMENT.replaceChildren(UI_CHATLOG_ELEMENT, UI_TOOLTIP_ELEMENT)
UI_ELEMENT.appendChild(UI_CHATLOG_AND_TOOLTIP_CONTAINER_ELEMENT)

const UI_MOUSE_TOOLTIP_ELEMENT = document.createElement("div")
UI_MOUSE_TOOLTIP_ELEMENT.id = "uimousetooltip"
document.body.appendChild(UI_MOUSE_TOOLTIP_ELEMENT)

export async function drawUI(state: State, cameraY: number=0) { // TODO dirty hack: UI should not rely on camera
    if (!BOTMOS_OPTIONS.showUI) {
        return
    }

    const playerId = players_get_current_id()
    const playerEntity = state.entities[playerId]

    // Render status line
    let uiLineText = ''
    if (!!playerEntity) {
        _set_sprite(UI_HULL_ELEMENT, playerEntity.type.name)

        let equippedItemText = ''
        const equippedItem = items_get_equipped(state, playerId)
        if (!!equippedItem) {
            _set_sprite(UI_TOOL_ELEMENT, equippedItem.type.name.toLowerCase())
        } else {
            _set_sprite(UI_TOOL_ELEMENT, null)
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
        _set_sprite(UI_HULL_ELEMENT, null)
        _set_sprite(UI_TOOL_ELEMENT, null)

        uiLineText = "Game over!"
        UI_LINE.style.color = "#000"
        UI_LINE.style.background = "#f00"
    }

    UI_LINE_TEXT_ELEMENT.innerText = uiLineText

    // Render menu / message log
    if (state._menuOpen && !!state.chatLog.length) {
        const lines = state.chatLog.slice(-BOTMOS_OPTIONS.chatLogMaxDisplaySize)

        UI_CHATLOG_ELEMENT.innerText = lines.join("\n")
    } else {
        UI_CHATLOG_ELEMENT.innerText = ''
    }
}

function _create_sprite_element(): HTMLElement {
    const uiSprite = document.createElement("span")
    _set_sprite(uiSprite, null)

    uiSprite.style.height = `${BOTMOS_OPTIONS.fontSize}px`
    uiSprite.style.display = "inline-block"
    return uiSprite
}

function _create_text_element(): HTMLElement {
    const textElement = document.createElement("span")
    textElement.style.display = "inline-block"
    textElement.style.marginLeft = `${BOTMOS_OPTIONS.fontSize / 2}px` // 8px 16px
    return textElement
}

function _set_sprite(element: HTMLElement, spriteId: string | null) {
    if (!!spriteId) {
        const offset = TILEMAP[spriteId][0]
        element.style.background = `url('build/tiles.png') -${offset}px 0`
        element.style.width = `${BOTMOS_OPTIONS.fontSize}px`
    } else {
        element.style.width = `0px`
    }
}

export function getTooltipContainer() {
    return UI_MOUSE_TOOLTIP_ELEMENT
}