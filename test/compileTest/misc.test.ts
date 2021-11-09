import { tstl } from "../util"

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
