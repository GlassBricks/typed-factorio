/** @noSelfInFile */

/** Iterating with `pairs` will only iterate the array part of a {@link LuaCustomTable}. */
declare function pairs<V>(table: LuaCustomTable<number | string, V>): LuaIterable<LuaMultiReturn<[number, V]>>

declare function pairs<K extends keyof any, V>(table: LuaCustomTable<K, V>): LuaIterable<LuaMultiReturn<[K, V]>>

/**
 * {@link LuaCustomTable} cannot be iterated with `ipairs`. Use `pairs` instead.
 *
 * @deprecated
 */
declare function ipairs(table: LuaCustomTable<any, any>): never
