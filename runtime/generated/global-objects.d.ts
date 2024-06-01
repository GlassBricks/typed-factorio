// This is an auto-generated file. Do not edit directly!

/** @noSelfInFile */

import type {
  LuaBootstrap,
  LuaCommandProcessor,
  LuaGameScript,
  LuaRCON,
  LuaRemote,
  LuaRendering,
} from "factorio:runtime"

declare global {
  /**
   * The main scripting interface through which most of the API is accessed.
   */
  const game: LuaGameScript
  /**
   * Provides an interface for registering game event handlers.
   */
  const script: LuaBootstrap
  /**
   * Allows registration and use of functions to communicate between mods.
   */
  const remote: LuaRemote
  /**
   * Allows registration of custom commands for the in-game console.
   */
  const commands: LuaCommandProcessor
  //The "settings" global is declared in common/settings-global.d.ts; its runtime type is handled below.
  /**
   * Allows printing messages to the calling RCON instance, if any.
   */
  const rcon: LuaRCON
  /**
   * Allows rendering of geometric shapes, text and sprites in the game world.
   */
  const rendering: LuaRendering
}
