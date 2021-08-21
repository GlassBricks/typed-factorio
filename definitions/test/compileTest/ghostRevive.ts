declare const ghost: LuaEntity

const ret = ghost.revive()
if (ret[0] !== undefined) {
  const ent: LuaEntity = ret[1]
} else {
  const ent: undefined = ret[1]
}
