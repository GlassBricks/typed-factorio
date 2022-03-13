/** @noSelfInFile */
///<reference types="lua-types/5.2" />

/**
 * Iterating with `pairs` will only iterate the array part of a {@link LuaCustomTable}.
 *
 * **Note**: you can also iterate on a LuaCustomTable directly without using `pairs`, e.g. `for(const [k, v] of table)`.
 */
declare function pairs<V>(table: LuaCustomTable<number | string, V>): LuaIterable<LuaMultiReturn<[number, V]>>

/** **Note**: you can also iterate on a LuaCustomTable directly without using `pairs`, e.g. `for(const [k, v] of table)`. */
declare function pairs<K extends number | string, V>(table: LuaCustomTable<K, V>): LuaIterable<LuaMultiReturn<[K, V]>>

/** @deprecated {@link LuaCustomTable} cannot be iterated with `ipairs`; Use {@link pairs} instead. */
declare function ipairs(table: LuaCustomTable<any, any>): never
