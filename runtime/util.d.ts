// "util" is declared only as a module, even though it also modifies global variables
// This is both because of limitations in `declare module`, and that modules are much friendlier to tooling.

/** @noSelfInFile */

/** @noResolution */
declare module "util" {
  import table = FactorioRuntime.table
  import MapPosition = FactorioRuntime.MapPosition
  import MapPositionArray = FactorioRuntime.MapPositionArray
  import Color = FactorioRuntime.Color
  import ColorArray = FactorioRuntime.ColorArray
  import defines = FactorioRuntime.defines
  import nil = FactorioRuntime.nil
  import LuaEntity = FactorioRuntime.LuaEntity
  namespace table {
    function deepcopy<T>(table: T): T

    function compare<T extends table>(tb1: T, tb2: T): boolean
  }

  function copy<T>(table: T): T

  function distance(position1: MapPosition | MapPositionArray, position2: MapPosition | MapPositionArray): number

  function positiontostr(position: MapPosition | MapPositionArray): string

  function formattime(ticks: number): string

  /** Supports 'rrggbb', 'rgb', 'rrggbbaa', 'rgba', 'ww', 'w' */
  function color(hex: string): Color

  function premul_color(color: Color): Color

  function mix_color(c1: Color, c2: Color): ColorArray

  function multiply_color(c1: Color, n: number): ColorArray

  function moveposition(
    position: MapPositionArray,
    direction: defines.direction.north | defines.direction.east | defines.direction.south | defines.direction.west,
    distance: number
  ): MapPositionArray
  function moveposition(
    position: MapPositionArray,
    direction: defines.direction,
    distance: number
  ): MapPositionArray | nil

  function oppositedirection(direction: defines.direction): defines.direction

  /** Creates a new array where each element in `stripes` is duplicated `count` times */
  function multiplystripes<T>(count: number, stripes: readonly T[]): T[]

  /** Gets tile position by pixel */
  function by_pixel(x: number, y: number): MapPositionArray

  /** Gets tile position by pixel, hr */
  function by_pixel_hr(x: number, y: number): MapPositionArray

  // omitted: foreach_sprite_definition

  function add_shift(a: MapPositionArray | nil, b: MapPositionArray): MapPositionArray
  function add_shift(a: MapPositionArray, b: MapPositionArray | nil): MapPositionArray
  function add_shift(a: MapPositionArray | nil, b: MapPositionArray | nil): MapPositionArray | nil

  // omitted: add_shift_offset

  function mul_shift(shift: MapPositionArray, scale: number | nil): MapPositionArray
  function mul_shift(shift: MapPositionArray | nil, scale: number | nil): MapPositionArray | nil

  function format_number(amount: number, append_suffix?: boolean): string

  function increment(t: number[], index: number, v?: number): void

  // omitted: conditional_return

  /**
   * Recursively merges and/or deep-copies tables. Entries in later tables override entries in earlier ones, unless both
   * entries are themselves tables, in which case they are recursively merged. Non-merged tables are deep-copied, so
   * that the result is brand new.
   */
  function merge<T extends object>(tables: readonly T[]): T

  function insert_safe(entity: LuaEntity | nil, item_dict: Record<string, number> | nil): void

  function remove_safe(entity: LuaEntity | nil, item_dict: Record<string, number> | nil): void

  function split_whitespace(string: string): string[]

  // omitted: split, string_starts_with. already TS functions for that

  // omitted: online_players. use game.connected_players

  function clamp(x: number, lower: number, upper: number): number

  function get_walkable_tile(): string

  // omitted: combine_icons
  // omitted: technology_icons. Create an issue if you really want to see these

  function parse_energy(energy: string): number

  function product_amount(
    product: {
      probability: number
    } & (
      | {
          amount: number
        }
      | {
          amount_min: number
          amount_max: number
        }
    )
  ): number

  function empty_sprite(): object

  // omitted: draw_as_glow
  // omitted: remove_tile_references

  function remove_from_list<T>(list: T[], value: T): boolean

  function list_to_map<V>(list: LuaPairsIterable<any, V>): LuaSet<NonNullable<V>>
  function list_to_map<T extends AnyNotNil>(list: T[]): LuaSet<T>
  function list_to_map<T extends AnyNotNil>(list: T): LuaSet<NonNullable<T[keyof T]>>
}
