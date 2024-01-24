// This is an auto-generated file. Do not edit directly!

/** @noSelfInFile */

/**
 * @noResolution
 */
declare module "factorio:runtime" {
  /**
   * A floating-point number. This is a single-precision floating point number. Whilst Lua only uses double-precision numbers, when a function takes a float, the game engine will immediately convert the double-precision number to single-precision.
   * @see {@link https://lua-api.factorio.com/1.1.103/builtin-types.html#float Online documentation}
   */
  export type float = number
  /**
   * A double-precision floating-point number. This is the same data type as all Lua numbers use.
   * @see {@link https://lua-api.factorio.com/1.1.103/builtin-types.html#double Online documentation}
   */
  export type double = number
  /**
   * 32-bit signed integer. Possible values are -2 147 483 648 to 2 147 483 647.
   * @see {@link https://lua-api.factorio.com/1.1.103/builtin-types.html#int Online documentation}
   */
  export type int = number
  /**
   * 8-bit signed integer. Possible values are -128 to 127.
   * @see {@link https://lua-api.factorio.com/1.1.103/builtin-types.html#int8 Online documentation}
   */
  export type int8 = number
  /**
   * 32-bit unsigned integer. Possible values are 0 to 4 294 967 295.
   * @see {@link https://lua-api.factorio.com/1.1.103/builtin-types.html#uint Online documentation}
   */
  export type uint = number
  /**
   * 8-bit unsigned integer. Possible values are 0 to 255.
   * @see {@link https://lua-api.factorio.com/1.1.103/builtin-types.html#uint8 Online documentation}
   */
  export type uint8 = number
  /**
   * 16-bit unsigned integer. Possible values are 0 to 65 535.
   * @see {@link https://lua-api.factorio.com/1.1.103/builtin-types.html#uint16 Online documentation}
   */
  export type uint16 = number
  /**
   * 64-bit unsigned integer. Possible values are 0 to 18 446 744 073 709 551 615.
   * @see {@link https://lua-api.factorio.com/1.1.103/builtin-types.html#uint64 Online documentation}
   */
  export type uint64 = number
  /**
   * Nil is the type of the value `nil`, whose main property is to be different from any other value. It usually represents the absence of a useful value.
   * @see {@link https://lua-api.factorio.com/1.1.103/builtin-types.html#nil Online documentation}
   */
  export type nil = undefined
  /**
   * Tables are enclosed in curly brackets, like this `{}`.
   * @see {@link https://lua-api.factorio.com/1.1.103/builtin-types.html#table Online documentation}
   */
  export type table = object
  /**
   * Any LuaObject listed on the {@linkplain https://lua-api.factorio.com/1.1.103/classes.html Classes} page.
   * @see {@link https://lua-api.factorio.com/1.1.103/builtin-types.html#LuaObject Online documentation}
   */
  export interface LuaObject {
    readonly object_name: string
  }
}
