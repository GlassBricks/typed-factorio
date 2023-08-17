// This is an auto-generated file. Do not edit directly!

/** @noSelfInFile */

/**
 * A floating-point number. This is a single-precision floating point number. Whilst Lua only uses double-precision numbers, when a function takes a float, the game engine will immediately convert the double-precision number to single-precision.
 * @see {@link https://lua-api.factorio.com/latest/builtin-types.html#float Online documentation}
 */
type float = number

/**
 * A double-precision floating-point number. This is the same data type as all Lua numbers use.
 * @see {@link https://lua-api.factorio.com/latest/builtin-types.html#double Online documentation}
 */
type double = number

/**
 * 32-bit signed integer. Possible values are -2'147'483'648 to 2'147'483'647.
 * @see {@link https://lua-api.factorio.com/latest/builtin-types.html#int Online documentation}
 */
type int = number

/**
 * 8-bit signed integer. Possible values are -128 to 127.
 * @see {@link https://lua-api.factorio.com/latest/builtin-types.html#int8 Online documentation}
 */
type int8 = number

/**
 * 32-bit unsigned integer. Possible values are 0 to 4'294'967'295.
 * @see {@link https://lua-api.factorio.com/latest/builtin-types.html#uint Online documentation}
 */
type uint = number

/**
 * 8-bit unsigned integer. Possible values are 0 to 255.
 * @see {@link https://lua-api.factorio.com/latest/builtin-types.html#uint8 Online documentation}
 */
type uint8 = number

/**
 * 16-bit unsigned integer. Possible values are 0 to 65535.
 * @see {@link https://lua-api.factorio.com/latest/builtin-types.html#uint16 Online documentation}
 */
type uint16 = number

/**
 * 64-bit unsigned integer. Possible values are 0 to 18'446'744'073'709'551'615.
 * @see {@link https://lua-api.factorio.com/latest/builtin-types.html#uint64 Online documentation}
 */
type uint64 = number

/**
 * Nil is the type of the value `nil`, whose main property is to be different from any other value. It usually represents the absence of a useful value.
 * @see {@link https://lua-api.factorio.com/latest/builtin-types.html#nil Online documentation}
 */
type nil = undefined

/**
 * Tables are enclosed in curly brackets, like this `{}`.
 * @see {@link https://lua-api.factorio.com/latest/builtin-types.html#table Online documentation}
 */
type table = object

/**
 * Any LuaObject listed on the {@linkplain https://lua-api.factorio.com/latest/classes.html Classes} page.
 * @see {@link https://lua-api.factorio.com/latest/builtin-types.html#LuaObject Online documentation}
 */
interface LuaObject {
  readonly object_name: string
}
