import { describe, expect, test } from "bun:test";
import Game from "../src/game";

const ENTITY_COUNT = 1352

describe('Game', () => {
    test('should play until player death', () => {
        const game = new Game()
        game.init()

        game.play('NNNWWWWWBBBWWSSSSSSSSSSSSSSSSEEWE')

        expect(game.state.entities["player"]).toBeUndefined()
        expect(game.state.actionLog.join('')).toBe('NNNWWWWWBBBWWSSSSSSSSSSSSSSSSEEWE')
    })

    test('should play through the manual', () => {
        const game = new Game()
        game.init()
        expect(Object.keys(game.state.entities).length).toBe(ENTITY_COUNT)

        game.play('EEEEEEEEESSSSSEEEESSEENEENESWWSAAWSSSSESSEEEEEEEEEEEEEEENWWNNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWSWSSSSSSSSSSSSSSSSENEEEEEEEESNWWWWWWWWSSSSSSSEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEENNN')

        expect(Object.keys(game.state.entities).length).toBe(ENTITY_COUNT - 1)
        expect(game.state.entities["player"]).toBeDefined()
    })

    test('should buy hammer in hidden shop', () => {
        const game = new Game()
        game.init()
        expect(Object.keys(game.state.entities).length).toBe(ENTITY_COUNT)

        game.play("WWWNEEEEEEEEEEEEEEEENEEEESEEEEEEENNNNNNNNEEEEESSSSSSSEEEESEEEEEEENNWWWWEEEESSWWWWWWWWWWWNNNNNNNWNWWWWNWWNWWWWWWNNNNNNNNNNNNSSEEEEEEESSSSSSSMMEEEEEEESBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBNWWWWWNWWWWWWWWNNNNNNWWWWWWWWWWWWWWWWWSSEEEESSSSSSWSWWWNNNNWWNNBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBSSSEESSEENNEENNEENNNEEEEEEEEEEEEEEEWSSSSSSSSSSSSSSSSSSSSSEENNNNEEEEEEEEEEEEENNNNNNNNNNNNNNNNNNNNNWWEEENNNNNNEEEEEEEEEESSSSSEWNNNNSBBBBBBBBBBBBBBBBBBBBBBBBBNNSSBBBBBBBBBBBBNNEEEEESSSSSSSSSSSSSSSSSSSSSSSSSSSSWSSWWWWWWWWNNNENNNNNNNNNNNNEEEEEEEEEEEEEEEEEEEEEEESSSWWWSWSSSEEEESBBBBBBBBBBBBBMMBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBNWWWWWWWWWNWWWWWWWWSSSWWWWWWWWWSSSSSSWWWSESSWWWWWWNNNNNNEEEEEESSWWWWWNEEEEEWSSSSWWWWNNEEESWWSSSSSENNNNNNNNNNNEEEMMNEENNNNNEEEEEEEEEENNNNEENNNEEEEEEEEEWWWWWWWWWWWWWWSSSSSSSSWSWWWNNNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNENNNNNNNNNEEWWSSSSSSSSSSWE")

        expect(game.state.tools["player"].type.name).toBe("Hammer")
    })

    test('should beat the game', () => {
        const game = new Game()
        game.init()
        expect(Object.keys(game.state.entities).length).toBe(ENTITY_COUNT)

        game.play("WWWNEEEEEEEEEEEEEEENEEEEESEEEEENNNNNEEESEEEESSSSSSSEEEESEEEEEEEENNWWWWEEEESSWWWWWWWWWWWWNWNWNWNNNENNWWWSWWWWSWWWWWWWNWNNWWWWWWWEEEEEESSESSSEEEEEENNNNEEEEEEEEENENNNNNNNNNNNNNNEEESSNNNNNNNWWWWWWWWWSSEEENNNNNNNNNSSSSSSSSSSNNNNNNNNNSSSSSSSSSNNNNNNNNNNSSSSSSSSSSEEEEEEEEEWWNNNNNNNNNSSEEEEEWSSSSSSSSSSSSSSSSEEEEESSSSSWWWWSSSSSSSSSWWSSSSSSWWWWWWWWWWWWNNEEWWSSSEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEENNENNWWEESSSSWWWWWWWWWWWWWWWWWWWWWWWWWNWNNNNNNEEEENNNNNNNNNEEEEENNNWWWWNNNNNWWWWESSSMMSEEEEEEEEWMMWWWWWWWWWMMSSSSWWSSSEEEESBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBNWWWWWWWWNWWWWWWWWNNNNNNNNNNNNNNNWWWNNWESEEESSSSSSSSSSSSSEWNNNNNNNNNNNNNWWWNWWWWWWWSWSSSEEEEEEEEEEEEENNNNNNESSSSSSEEEEBBBBBBBBBBBBBBBBBBBBBBWWWWWWWWWWWWWWWSSWWWSSSSSSSESWWSSSSSESSSSSSSSSSWWWSSSSSSNNNNENNNNWWWNNNNNNEEEEEESSSSSSWWNENNNNWWWWSSSSEENWNNEESSWNNEENNENEENNNNNEEEEEEEEEEEWSWSWWWNNNNWWNNBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBSSSEESSEEEEEEEEEWSWSWWWNNNNWWNNBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBSSSEESSEENNNEEEEEEEEEEEEEENNNEEEEWWNNNNNNNNWBBBBBBBBBBBBBBBBBBBBESEEEEEEEEEEEEEEEEEEEESSSSSSSSSSSSSSSSSSWWWWWWWWWWWWWWWWWWWWNNWWNNESWSSSEEEEEEEEEEEEEEEEEEEENNENNNNNNNNNNNWWWWWWWWWWWSSSSSSWWWWWWWWWWWWSSSSSSWSWWWNNNNNWWSWWNNBBBBBBBBBBBBBBBBBBBBBBBBBBSSMMWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWSENNNNNNEEWWSSSSSSSWEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEESSEEEEENWWNNNNNNNNNNNWWWWNWWWWWWWWSSSEEEEEEEEEEESSSSSSSESSSSSSSSSSSSSSSSSSSSSEEEEEEEEEEEEEEEEEESSSSASSEEEEEEEAWWWWSESESESESESESESESESESEASSSSSSSSSSSSWWWWWWWWWWWSSSSSSSSSSSSSSSSSSEESSSSWWWWWWWWWWWSSBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWEEEEEEEEEEEEEEEEEEEEEEEEEESBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBNNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEESENSEESESBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBNWNNNNEEEEEEEEEEEEEEEENNNNNNNNNNENENNEEEESEESEEESEESWWNNNNNNSSSSESSSSSENNNNNNNNNNNNNNNNSSSSSSSSSSMSWWWWWWWWWWWSBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBSSSSSSSSSSSSSSSSWWWNNNNNNNNNNNNNNNNNNNBBBBBBBBBBBBBBBBBBSSSSWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWSSSSEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEENNNNNNNNNNNNNNEEEEEEEEEEEEEEEEEESWWWWWWWWWWWWWWWWNWNBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBSWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEENNNNNEEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWSEEEEEEEEEEEEEEEEEEEESSEEEEEESESBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBNNEEEEENNNNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNNNENNNNWWWWWWWWWWNWNNWSWSSSSSSWSSSSSSSWSSSSSEEEENNWWWWWWWWWMWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWENNNNNEENWWSSSSSSSWEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEESSSEEEEWWWNWNNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNENNNNNEEWSSSSSSWWEEEEEEEEEEEEEEEEEEEEEEEEEEMEEEEEEEEEEEEEEEEEESMSSEEEEEEEEESSSSSSSSSESSSEENNNNNNNNNNNNNNNNNEEEEEEEEEEENEENNNNNNNWWEENNENENEWWNNNEEEEEEEEEEESWSSSSSEWNNNNNNWWWWWWWWWWWSSSSSSSSSSSSSSSWWWWWWWWWWWWWSSSSSSSSSSSSSSSSSWWWWNWWWWWWWWNWNNNNWNNNNNNNEENENNNNNNEEEEEEEEEEEESSSSSSSSSSSSSSWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNNNNNNNNNNNNNNWAWWWWWSSSSEEEEEEESWSENNNEEEWNNNNWWWWNNNENENENENENEEEEEEEEEEESESSSESSSWSSWWWWWWWWWWWWWWSWWSAAEEWWSSEEENSSSSSSSSSSSSSSNBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBSSSSSSEEEEESSEEEEEEEEEEEEEEEEEEEEEWNNWWWSWSWSWSWSWSWSSNEEEEEEEEEEEEEEEENNNNNNWWWWWWWWWWWWWWWWWWWNNNNNWNNAAESBBSSSSSSSSSSNBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBSSSSSWWWWWWWWWSWEEEEEEEEENNNENNNBBBBSSSSSSSSSSSSSSSSSSNNNBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWEEEEEEEEEEEEEESBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBNNWNNENENENENENENENENENENENENENEESSEWNWNWNWNWNWSWWNNNNNNNNNNNEEEEEEEEEEEEEEEEEEEESSEEEEEEESWSSSSSWWWWWWWWWWWWWWWWWWWWWWWWSSSSSSSSSSSSSSSSSSSSSWWWWWWWWWWWWWWSNNNNNNNNNNNNNNBNNNNNNNASESESESESESESESESESESESESESESESESESESESESESESEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEMEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEMEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEESSSSSSEEEEEENNNENNNNNWWWWWWWWWWWWNWWSSSSSSWSSSSSEEEENNNWSWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWENNNNNNEEWWSSSSSSSWEWNENNNNNEEWWSSSSSSSWEWENNNNNNEEWWSSSSSSWEWNENNNNNEEWWSSSSSSWEWENNNNNNEEEWWWAMSSSSSSWENWSENNNNMNNEEWSSSSSSSWWEWENNNNNNEEWSSSSSSSWWEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEENNNEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBSSSEESSWEEENNNNWWWWWWWWNWNNNNNEEEEEEEEEEEESSSSSSSSSSSSSSSESESESESESESESESESESESESESESESESESESESESESESESESEEESWASSSSSWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNNNNEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEENNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNEEEEESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEESSSWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWSSSSSSSSSSSWWWWWWSSSSSSSWWWWWWSWSSSESBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBSSWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWSEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEMMSESSSSSSSWWWWWWWWWWWWWWWWWWNNEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEENWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEENNNNNNNNENBBBBBBBBBBBBBMMBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBSSSEEEEEESWWWSWWNSWWSSSSSSSWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEESSWWWWWWWWWWWWWWWWWWWWWWWWWWWWSEEEEEEEEEEEEEEEEEEESWWWWWWWWWWWWWNNNNNNNNNNNNNNEEEEEEEEEEESBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB")

        expect(game.state.entities["player"]).toBeDefined()
        expect(game.state.tools["player"].type.name).toBe("Trident")
        expect(Object.keys(game.state.entities).length).toBe(ENTITY_COUNT - 9)
    })

    test('should play through bot prison and bar', () => {
        const game = new Game()
        game.init()
        expect(Object.keys(game.state.entities).length).toBe(ENTITY_COUNT)

        game.play("SWWWNNEEEEEEEEEEEENEEEEEEEEESEEEENNNNEESSEEEESSSSSWWWWWWWWWWWWWWWWWNNNNNEEESSSSSSSSSSSWWWWWSNENNNNNWWWSEEEEEENNNNNWNEWWWWWWSEEEEESWWWWWSEEEEESWWWWWSEEEEEEEWNNNNNNEEMMNNNNEEEEEEEEENNNNNNNNNNNNNNNNNNSSSSSSSEEEEEEEESBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBNWWWWNNNEEEENNNNNNNNNNNNNNNNNEEESSSSSSEEEESSSSWWWWSSSSWSESSSSWWWWWSSSSSWWWWWWWWWWWWNNEEWWSSEEMMEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEENNWWEESSSWWWWWWWWWWWWWWWWWWWWWWWWWWNNNNEENNNNNNNEENENEEENNNNWWWWWNNNNNNNEEEEEEEENNNNNNNNNNWWWWWWWWSSSSSSSSSSSSEEEEEEEENNNNNWWWWWWWWWWWWSSSNNNNNNNNNNNSSSSSSSSSSNNNNNNNNNNEEEEEEWSSSSSSSSSSNNNNNNNNNNSSSSSSSSSSEEEEEENNNNNNNNWSBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBNEEEEEEEEEMMESESSSSSSESSSSSSSSSSSSSSSSSSSNNNNNNNNNNWNWWWWWWWWWWWSSSSSSSWWWWSSSSEEEESSEEESSSSSSEEEEEEEEENNNNWNESNNSEEEEEEESSSSSSSSSSNNNNEENNNNNNEWWSSSSSSSSSSSWWNNNNNNWWWWWWWWWWWWWWWWNEEENEWWWWWEWBBBBBBBBBBBBBNWWWWWWWWNWWWWWWWWWNNNWWWWWWWWWWNNNNNSSSEEEEEEEENWNNNNNNEEEEEEEEEEEEEEEEWSSSSSSSEEEEEEESBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBNWWWWSSEEEESSSSSWWWWWWWWWWWWWWWWWNNNNNNNNNNNNNNWSWWNNNNNNEENNNNNNEEEEEEEEEEEESSSSSSSSSSSSEES")

        expect(game.state.entities["player"]).toBeDefined()
        expect(game.state.tools["player"].type.name).toBe("Hammer")
        expect(Object.keys(game.state.entities).length).toBe(ENTITY_COUNT - 10)
    })
})