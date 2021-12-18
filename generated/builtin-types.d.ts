// This is an auto-generated file. Do not edit directly!

/** @noSelfInFile */

/**
 * A floating-point number. This is a single-precision floating point number. Whilst Lua only uses double-precision
 * numbers, when a function takes a float, the game engine will immediately convert the double-precision number to
 * single-precision.
 *
 * {@link https://lua-api.factorio.com/latest/Builtin-Types.html#float View documentation}
 */
type float = number

/**
 * A double-precision floating-point number. This is the same data type as all Lua numbers use.
 *
 * {@link https://lua-api.factorio.com/latest/Builtin-Types.html#double View documentation}
 */
type double = number

/**
 * 32-bit signed integer. Possible values are -2,147,483,648 to 2,147,483,647.
 *
 * {@link https://lua-api.factorio.com/latest/Builtin-Types.html#int View documentation}
 */
type int = number

/**
 * 8-bit signed integer. Possible values are -128 to 127.
 *
 * {@link https://lua-api.factorio.com/latest/Builtin-Types.html#int8 View documentation}
 */
type int8 = number

/**
 * 32-bit unsigned integer. Possible values are 0 to 4,294,967,295.
 *
 * {@link https://lua-api.factorio.com/latest/Builtin-Types.html#uint View documentation}
 */
type uint = number

/**
 * 8-bit unsigned integer. Possible values are 0 to 255.
 *
 * {@link https://lua-api.factorio.com/latest/Builtin-Types.html#uint8 View documentation}
 */
type uint8 = number

/**
 * 16-bit unsigned integer. Possible values are 0 to 65535.
 *
 * {@link https://lua-api.factorio.com/latest/Builtin-Types.html#uint16 View documentation}
 */
type uint16 = number

/**
 * 64-bit unsigned integer. Possible values are 0 to 18,446,744,073,709,551,615.
 *
 * {@link https://lua-api.factorio.com/latest/Builtin-Types.html#uint64 View documentation}
 */
type uint64 = number

/**
 * Tables are enclosed in curly brackets, like this `{}`
 *
 * {@link https://lua-api.factorio.com/latest/Builtin-Types.html#table View documentation}
 */
type table = object
