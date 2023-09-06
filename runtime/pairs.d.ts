/** @noSelfInFile */
import { LuaCustomTable } from "factorio:runtime"

declare global {
  /** **Note**: you can also iterate on a LuaCustomTable directly without using `pairs`, e.g. `for(const [k, v] of table)`. */
  function pairs<T extends LuaCustomTable<any, any>>(
    table: T,
  ): LuaIterable<LuaMultiReturn<T extends Iterable<infer E> ? E : never>>

  /** @deprecated {@link LuaCustomTable} cannot be iterated with `ipairs`; Use {@link pairs} instead. */
  function ipairs(table: LuaCustomTable<any, any>): never
}
