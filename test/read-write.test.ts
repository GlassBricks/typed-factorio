import { tstl } from "./util"

test("luaPlayer color", () => {
  tstl`
  declare const player: LuaPlayer
  const r = player.color.r
  player.color = [1, 1, 1]
  `.expectToHaveNoDiagnostics()
})

test("mining state", () => {
  tstl`
  declare const player: LuaControl
  const x = player.mining_state.position.x
  player.mining_state = { mining: true, position: [0, 0] }
  `.expectToHaveNoDiagnostics()
})

test("player force", () => {
  tstl`
  const player = game.players[1]
  const force: LuaForce = player.force
  `.expectToHaveNoDiagnostics()
})
