// This is an auto-generated file. Do not edit directly!

/** @noSelfInFile */

import type {
  LuaBootstrap,
  LuaCommandProcessor,
  LuaGameScript,
  LuaPrototypes,
  LuaRCON,
  LuaRemote,
  LuaRendering,
} from "factorio:runtime"

declare global {
  /**
   * Allows registration of custom commands for the in-game console.
   * @see {@link https://lua-api.factorio.com/2.0.62/index-runtime.html Online documentation}
   */
  const commands: LuaCommandProcessor
  /**
   * The main scripting interface through which most of the API is accessed.
   * @see {@link https://lua-api.factorio.com/2.0.62/index-runtime.html Online documentation}
   */
  const game: LuaGameScript
  //The "settings" and "helpers" globals are declared in common/settings-global.d.ts and common/helpers.d.ts.
  /**
   * Allows read-only access to prototypes.
   * @see {@link https://lua-api.factorio.com/2.0.62/index-runtime.html Online documentation}
   */
  const prototypes: LuaPrototypes
  /**
   * Allows printing messages to the calling RCON instance, if any.
   * @see {@link https://lua-api.factorio.com/2.0.62/index-runtime.html Online documentation}
   */
  const rcon: LuaRCON
  /**
   * Allows registration and use of functions to communicate between mods.
   * @see {@link https://lua-api.factorio.com/2.0.62/index-runtime.html Online documentation}
   */
  const remote: LuaRemote
  /**
   * Allows rendering of geometric shapes, text and sprites in the game world.
   * @see {@link https://lua-api.factorio.com/2.0.62/index-runtime.html Online documentation}
   */
  const rendering: LuaRendering
  /**
   * Provides an interface for registering game event handlers.
   * @see {@link https://lua-api.factorio.com/2.0.62/index-runtime.html Online documentation}
   */
  const script: LuaBootstrap
  //The "settings" and "helpers" globals are declared in common/settings-global.d.ts and common/helpers.d.ts.
}
