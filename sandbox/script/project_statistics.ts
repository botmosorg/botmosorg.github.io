import Game from "../src/game";
import { MANIFEST } from "../src/manifest";

console.log('# BotMos Statistics')
console.log('')
console.log('* ' + Object.keys(MANIFEST.maps).length + ' manually created maps')
console.log('* ' + Object.keys(MANIFEST.map_snippets).length + ' map snippets/prefabs')
console.log('* ' + Object.keys(MANIFEST.tiles).length + ' ground tiles')
console.log('* ' + Object.keys(MANIFEST.entities).length + ' entity/bot types')
console.log('* ' + Object.keys(MANIFEST.factions).length + ' factions')
console.log('* ' + Object.keys(MANIFEST.items).length + ' items')
console.log('* ' + Object.keys(MANIFEST.effects).length + ' item effects')
console.log('* ' + Object.keys(MANIFEST.actions).length + ' context sensitive actions')
console.log('* ' + Object.keys(MANIFEST.ais).length + ' AI types')
console.log('* ' + Object.keys(MANIFEST.dialogs).length + ' dialog lines')

console.log('')
console.log('The generated default Cosmos has...')
console.log('')
const game = new Game()
const state = game.init()
console.log('* ' + Object.keys(state.maps).length + ' maps')
console.log('* ' + Object.keys(state.entities).length + ' spawned entities')
console.log('* ' + Object.keys(state.items).length + ' spawned items')