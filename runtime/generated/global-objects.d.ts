// This is an auto-generated file. Do not edit directly!

/** @noSelfInFile */

/**
 * The main scripting interface through which most of the API is accessed.
 * @see {@link https://lua-api.factorio.com/1.1.89/ Online documentation}
 */
declare const game: import("factorio:runtime").LuaGameScript

/**
 * Provides an interface for registering game event handlers.
 * @see {@link https://lua-api.factorio.com/1.1.89/ Online documentation}
 */
declare const script: import("factorio:runtime").LuaBootstrap

/**
 * Allows registration and use of functions to communicate between mods.
 * @see {@link https://lua-api.factorio.com/1.1.89/ Online documentation}
 */
declare const remote: import("factorio:runtime").LuaRemote

/**
 * Allows registration of custom commands for the in-game console.
 * @see {@link https://lua-api.factorio.com/1.1.89/ Online documentation}
 */
declare const commands: import("factorio:runtime").LuaCommandProcessor

/**
 * Provides access to the current mod settings.
 * @see {@link https://lua-api.factorio.com/1.1.89/ Online documentation}
 */
declare const settings: import("factorio:runtime").LuaSettings

/**
 * Allows printing messages to the calling RCON instance, if any.
 * @see {@link https://lua-api.factorio.com/1.1.89/ Online documentation}
 */
declare const rcon: import("factorio:runtime").LuaRCON

/**
 * Allows rendering of geometric shapes, text and sprites in the game world.
 * @see {@link https://lua-api.factorio.com/1.1.89/ Online documentation}
 */
declare const rendering: import("factorio:runtime").LuaRendering
