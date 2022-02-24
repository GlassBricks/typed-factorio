// This is an auto-generated file. Do not edit directly!

/** @noSelfInFile */

/**
 * This is the main object, through which most of the API is accessed. It is, however, not available inside handlers registered with {@link LuaBootstrap.on_load LuaBootstrap::on_load}.
 *
 * {@link https://lua-api.factorio.com/latest/ View documentation}
 */
declare const game: LuaGameScript

/**
 * Provides an interface for registering event handlers.
 *
 * {@link https://lua-api.factorio.com/latest/ View documentation}
 */
declare const script: LuaBootstrap

/**
 * Allows inter-mod communication by way of providing a repository of interfaces that is shared by all mods.
 *
 * {@link https://lua-api.factorio.com/latest/ View documentation}
 */
declare const remote: LuaRemote

/**
 * Allows registering custom commands for the in-game console accessible via the grave key.
 *
 * {@link https://lua-api.factorio.com/latest/ View documentation}
 */
declare const commands: LuaCommandProcessor

/**
 * Allows reading the current mod settings.
 *
 * {@link https://lua-api.factorio.com/latest/ View documentation}
 */
declare const settings: LuaSettings

/**
 * Allows printing messages to the calling RCON instance if any.
 *
 * {@link https://lua-api.factorio.com/latest/ View documentation}
 */
declare const rcon: LuaRCON

/**
 * Allows rendering of geometric shapes, text and sprites in the game world.
 *
 * {@link https://lua-api.factorio.com/latest/ View documentation}
 */
declare const rendering: LuaRendering
