import { tstl } from "./util.js"

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

test.each([
  ["players", "number"],
  ["achievement_prototypes", "string"],
])("pairs iteration on lua custom tables (%p)", (field, type) => {
  tstl`
  for (const [id, value] of pairs(game.${field})) {
    const num: ${type} = id
  }
  `.expectToHaveNoDiagnostics()
})

test.each([
  ["players", "number"],
  ["achievement_prototypes", "string"],
])("for iteration on lua custom tables (%p)", (field, type) => {
  tstl`
  for (const [id, value] of game.${field}) {
    const num: ${type} = id
  }
  `.expectToHaveNoDiagnostics()
})

test("ipairs iteration on LuaCustomTable deprecated", () => {
  tstl`
  for (const [id, player] of ipairs(game.players)) {
  }
  `.expectToHaveDiagnostics()
})
