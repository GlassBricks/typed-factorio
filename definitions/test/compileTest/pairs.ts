for (const [id, player] of pairs(game.players)) {
  const num: number = id
  const p: LuaPlayer = player
}
const bar: Record<string, object> = { foo: {} }

for (const [id, player] of pairs(bar)) {
  const num: string = id
  const p: object = player
}
