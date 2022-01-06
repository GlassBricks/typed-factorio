import { tstl } from "./util"

test("hello world", () => {
  tstl`
  function greetPlayer(player: LuaPlayer) {
    player.print(serpent.line({ hello: "world!" }))
    player.print(true)
    player.print(undefined)
  }

  script.on_event(defines.events.on_player_created, (e) => {
    greetPlayer(game.get_player(e.player_index)!)
  })

  script.on_init(() => {
    for (const [, luaPlayer] of pairs(game.players)) {
      greetPlayer(luaPlayer)
    }
  })
  `
})

test("Lua lazy loaded value", () => {
  tstl`
  script.on_event(defines.events.on_player_setup_blueprint, (e) => {
    const mapping: Record<number, LuaEntity> = e.mapping.get()
  })
  `.expectToHaveNoDiagnostics()
})

test("array-like", () => {
  tstl`
  const myInventory = game.create_inventory(4)

  const slot1 = myInventory[0]
  const slot2 = myInventory[1]
  const len = myInventory.length
  `.expectToMatchSnapshot()
})

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
