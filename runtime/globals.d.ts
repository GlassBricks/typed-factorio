// This is an auto-generated file. Do not edit directly!

/** @noSelfInFile  */

import type * as FactorioRuntime from "./"

// --- global-objects ---
/**
 * The main scripting interface through which most of the API is accessed.
 * @see {@link https://lua-api.factorio.com/1.1.89/ Online documentation}
 */
declare const game: FactorioRuntime.LuaGameScript

/**
 * Provides an interface for registering game event handlers.
 * @see {@link https://lua-api.factorio.com/1.1.89/ Online documentation}
 */
declare const script: FactorioRuntime.LuaBootstrap

/**
 * Allows registration and use of functions to communicate between mods.
 * @see {@link https://lua-api.factorio.com/1.1.89/ Online documentation}
 */
declare const remote: FactorioRuntime.LuaRemote

/**
 * Allows registration of custom commands for the in-game console.
 * @see {@link https://lua-api.factorio.com/1.1.89/ Online documentation}
 */
declare const commands: FactorioRuntime.LuaCommandProcessor

/**
 * Provides access to the current mod settings.
 * @see {@link https://lua-api.factorio.com/1.1.89/ Online documentation}
 */
declare const settings: FactorioRuntime.LuaSettings

/**
 * Allows printing messages to the calling RCON instance, if any.
 * @see {@link https://lua-api.factorio.com/1.1.89/ Online documentation}
 */
declare const rcon: FactorioRuntime.LuaRCON

/**
 * Allows rendering of geometric shapes, text and sprites in the game world.
 * @see {@link https://lua-api.factorio.com/1.1.89/ Online documentation}
 */
declare const rendering: FactorioRuntime.LuaRendering

// --- global-functions ---
/**
 * `log()` can print {@link LocalisedString LocalisedStrings} to the Factorio {@linkplain https://wiki.factorio.com/Log_file log file}. This, in combination with the serpent library, makes debugging in the data stage easier because it allows the inspection of entire prototype tables. For example, printing all properties of the sulfur item prototype can be done like so: `log(serpent.block(data.raw["item"]["sulfur"]))`
 * @see {@link https://lua-api.factorio.com/1.1.89/auxiliary/libraries.html#new-functions Online documentation}
 */
declare function log(string: FactorioRuntime.LocalisedString): void

/**
 * `localised_print()` allows printing {@link LocalisedString} to stdout without polluting the Factorio {@linkplain https://wiki.factorio.com/Log_file log file}. This is primarily useful when communicating with external tools that launch Factorio as a child process.
 * @see {@link https://lua-api.factorio.com/1.1.89/auxiliary/libraries.html#new-functions Online documentation}
 */
declare function localised_print(string: FactorioRuntime.LocalisedString): void

/**
 * Factorio provides the `table_size()` function as a simple way to determine the size of tables with non-continuous keys, as the standard `#` operator does not work correctly for these. The function is a C++ implementation of the following Lua code, which is faster than doing the same in Lua:
 *
 * ```
 * local function size(t)
 *     local count = 0
 *     for k,v in pairs(t) do
 *         count = count + 1
 *     end
 *     return count
 * end
 * ```
 *
 * Note that `table_size()` does not work correctly for {@link LuaCustomTable}, their size has to be determined with {@link LuaCustomTable#length LuaCustomTable::length_operator} instead.
 * @see {@link https://lua-api.factorio.com/1.1.89/auxiliary/libraries.html#new-functions Online documentation}
 */
declare function table_size(table: FactorioRuntime.table): FactorioRuntime.uint

/// <reference path="pairs.d.ts" />

declare const defines: typeof FactorioRuntime.defines
declare const serpent: typeof FactorioRuntime.serpent
