import { tstl } from "../util"

test("pairs iteration on lua custom tables", () => {
  tstl`
    for (const [id, player] of pairs(game.players)) {
      const num: number = id
      const p: LuaPlayer = player
    }
    const bar: Record<string, object> = { foo: {} }

    for (const [key, value] of pairs(bar)) {
      const num: string = key
      const p: object = value
    }
  `.expectToHaveNoDiagnostics()
})

