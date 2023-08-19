/** @noSelfInFile */
///<reference types="lua-types/5.2" />

/** **Note**: you can also iterate on a LuaCustomTable directly without using `pairs`, e.g. `for(const [k, v] of table)`. */
declare function pairs<T extends FactorioRuntime.LuaCustomTable<any, any>>(
  table: T
): LuaIterable<LuaMultiReturn<T extends Iterable<infer E> ? E : never>>

/** @deprecated {@link LuaCustomTable} cannot be iterated with `ipairs`; Use {@link pairs} instead. */
declare function ipairs(table: FactorioRuntime.LuaCustomTable<any, any>): never
