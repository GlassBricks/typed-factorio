/** @noSelfInFile */
///<reference types="lua-types/5.2" />

/** **Note**: you can also iterate on a LuaCustomTable directly without using `pairs`, e.g. `for(const [k, v] of table)`. */
declare function pairs<T extends import("factorio:runtime").LuaCustomTable<any, any>>(
  table: T
): LuaIterable<LuaMultiReturn<T extends Iterable<infer E> ? E : never>>

/** @deprecated {@link LuaCustomTable} cannot be iterated with `ipairs`; Use {@link pairs} instead. */
declare function ipairs(table: import("factorio:runtime").LuaCustomTable<any, any>): never
