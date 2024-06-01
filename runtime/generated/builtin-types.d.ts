// This is an auto-generated file. Do not edit directly!

/** @noSelfInFile */

/**
 * @noResolution
 */
declare module "factorio:runtime" {
  /**
   * A floating-point number. This is a single-precision floating point number. Whilst Lua only uses double-precision numbers, when a function takes a float, the game engine will immediately convert the double-precision number to single-precision.
   */
  export type float = number
  /**
   * A double-precision floating-point number. This is the same data type as all Lua numbers use.
   */
  export type double = number
  /**
   * 32-bit signed integer. Possible values are -2 147 483 648 to 2 147 483 647.
   */
  export type int = number
  /**
   * 8-bit signed integer. Possible values are -128 to 127.
   */
  export type int8 = number
  /**
   * 32-bit unsigned integer. Possible values are 0 to 4 294 967 295.
   */
  export type uint = number
  /**
   * 8-bit unsigned integer. Possible values are 0 to 255.
   */
  export type uint8 = number
  /**
   * 16-bit unsigned integer. Possible values are 0 to 65 535.
   */
  export type uint16 = number
  /**
   * 64-bit unsigned integer. Possible values are 0 to 18 446 744 073 709 551 615.
   */
  export type uint64 = number
  /**
   * Nil is the type of the value `nil`, whose main property is to be different from any other value. It usually represents the absence of a useful value.
   */
  export type nil = undefined
  /**
   * Tables are enclosed in curly brackets, like this `{}`.
   */
  export type table = object
  /**
   * Any LuaObject listed on the {@linkplain https://lua-api.factorio.com/latest/classes.html Classes} page.
   */
  export interface LuaObject {
    readonly object_name: string
  }
}
