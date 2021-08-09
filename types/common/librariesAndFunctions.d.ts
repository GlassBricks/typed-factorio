// from https://lua-api.factorio.com/latest/Libraries.html
// last updated for 1.1.35, 1.1.36, 1.1.37

/** @noSelfInFile */

/** @noSelf */
interface SerpentOptions {
  /** Indentation; triggers long multi-line output. */
  indent: string
  /** Provide stringified value in a comment (up to maxlevel of depth). */
  comment: boolean | number
  /** Sort keys. */
  sortkeys: boolean | ((this: void, keys: any[], table: any) => void)
  /** Force sparse encoding (no nil filling based on #t). */
  sparse: boolean
  /** Remove spaces. */
  compact: boolean
  /** Raise fatal error on non-serializable values. */
  fatal: boolean
  /** Disable bytecode serialization for easy comparison. */
  nocode: boolean
  /** Disable checking numbers against undefined and huge values. */
  nohuge: boolean
  /** Specify max level up to which to expand nested tables. */
  maxlevel: number
  /** Specify max number of elements in a table. */
  maxnum: number
  /** Specify max length for all table elements. */
  maxlength: number
  /**
   * Use __tostring metamethod when serializing tables (v0.29); set to false to disable and serialize the table as is,
   * even when __tostring is present.
   */
  metatostring: boolean
  /**
   * Specify format for numeric values as shortest possible round-trippable double (v0.30). Use "%.16g" for better
   * readability and "%.17g" (the default value) to preserve floating point precision.
   */
  numformat: string
  /** Allows to specify a list of values to ignore (as keys). */
  valignore: string[]
  /** Allows to specify the list of keys to be serialized. Any keys not in this list are not included in final output (as keys). */
  keyallow: string[]
  /** Allows to specity the list of keys to ignore in serialization. */
  keyignore: string[]
  /** Allows to specify a list of value types to ignore (as keys). */
  valtypeignore: string[]
  /** Provide custom output for tables. */
  custom(opts: {
    /** The name of the current element with '=' or an empty string in case of array index, */
    tag: string
    /** An opening table bracket { and associated indentation and newline (if any), */
    head: string
    /** Table elements concatenated into a string using commas and indentation/newlines (if any), */
    body: string
    /** A closing table bracket } and associated indentation and newline (if any), and */
    tail: string
    /** The current level. */
    level: number
  }): string
  /** Name; triggers full serialization with self-ref section. */
  name: string

  refcomment: boolean | number
  tablecomment: boolean | number
}

/**
 * Factorio provides the {@link https://github.com/pkulchenko/serpent serpent library} as a global variable `serpent` for
 * all mods to use. It allows for easy debugging of tables, because serpent makes it trivial to print them, for example
 * by using `serpent.block()`. However, serpent cannot pretty-print LuaObjects such as LuaEntity. The serpent library
 * was modified to improve determinism, e.g. comments are turned off by default to avoid returning table addresses.
 * Furthermore, two options were added: `refcomment` (true/false/maxlevel) and `tablecomment` (true/false/maxlevel),
 * which allow to separately control the self-reference and table value output of the `comment` option.
 */
declare namespace serpent {
  /** Full serialization; sets name, compact and sparse options; */
  function dump(tbl: unknown, options?: Partial<SerpentOptions>): string

  /** Single line pretty printing, no self-ref section; sets sortkeys and comment options; */
  function line(tbl: unknown, options?: Partial<SerpentOptions>): string

  /** Multi-line indented pretty printing, no self-ref section; sets indent, sortkeys, and comment options. */
  function block(tbl: unknown, options?: Partial<SerpentOptions>): string

  /**
   * For loading serialized fragments, serpent also provides `load` function that adds safety checks and reports an
   * error if there is any executable code in the fragment.
   */
  function load<T>(str: string, options?: { safe?: boolean }): LuaMultiReturn<[true, T] | [false, string]>
}

/**
 * This function allows to log {@link LocalisedString} to the Factorio
 * {@link https://wiki.factorio.com/Log_file log file}. This, in combination with serpent, makes debugging in the data
 * stage easier, because it allows to simply inspect entire prototype tables. For example, this allows to see all
 * properties of the sulfur item prototype: `log(serpent.block(data.raw["item"]["sulfur"]))`
 */
declare function log(ls: LocalisedString): void

/**
 * This function allows printing {@link LocalisedString}s to stdout without polluting the logfile. This is primarily
 * useful for communicating with external tools that launch Factorio as a child process.
 */
declare function localised_print(ls: LocalisedString): void

/**
 * Factorio provides the function `table_size()` as a simple way to find the size of tables with non-continuous keys,
 * because the standard `#` does not work correctly for these. The function is a C++-side implementation of the
 * following Lua code, thus it is faster than using this code in Lua:
 *
 *     local function size(t)
 *       local count = 0
 *        for k,v in pairs(t) do
 *         count = count + 1
 *       end
 *       return count
 *     end
 *
 * Note that `table_size()` does not work correctly for {@link LuaCustomTable}s, their size has to be determined with
 * {@link LuaCustomTable.length LuaCustomTable::operator #} instead.
 */
declare function table_size(tbl: table): number
