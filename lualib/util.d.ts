/** @noSelfInFile */

/** @noResolution */
declare module "util" {
  import {
    ColorArray as RColorArray,
    float,
    LuaEntity,
    MapPosition,
    MapPositionArray,
    nil,
    table,
  } from "factorio:runtime"
  import { Color as PrototypeColor, SpriteParameters } from "factorio:prototype"
  import { PrototypeData } from "factorio:common"

  type ColorArray = PrototypeColor & float[]
  interface ColorTable {
    r: float
    g: float
    b: float
    a?: float
  }
  type AnyColor = PrototypeColor | RColorArray
  namespace table {
    function deepcopy<T>(table: T): T

    function compare<T extends table>(tb1: T, tb2: T): boolean
  }

  function copy<T>(table: T): T

  function distance(position1: MapPosition | MapPositionArray, position2: MapPosition | MapPositionArray): number

  function positiontostr(position: MapPosition | MapPositionArray): string

  function formattime(ticks: number): string

  /** Supports 'rrggbb', 'rgb', 'rrggbbaa', 'rgba', 'ww', 'w' */
  function color(hex: string): ColorTable

  function premul_color(color: AnyColor): ColorTable

  function mix_color(c1: AnyColor, c2: AnyColor): ColorArray

  function multiply_color(c1: AnyColor, n: number): ColorArray

  function get_color_with_alpha(color: AnyColor, alpha: number, normalized_alpha?: boolean): ColorTable

  const direction_vectors: Record<defines.direction, MapPositionArray>

  function moveposition(
    position: MapPositionArray,
    direction: defines.direction.north,
    distance: number
  ): MapPositionArray

  function oppositedirection(direction: defines.direction): defines.direction

  /** Creates a new array where each element in `stripes` is duplicated `count` times */
  function multiplystripes<T>(count: number, stripes: readonly T[]): T[]

  /** Gets tile position by pixel */
  function by_pixel(x: number, y: number): MapPositionArray

  /** Gets tile position by pixel, hr */
  function by_pixel_hr(x: number, y: number): MapPositionArray

  type SpriteWithHrVersion<T = unknown> = T & SpriteParameters & { hr_version?: SpriteParameters & T }

  function foreach_sprite_definition<T extends SpriteWithHrVersion>(
    sprite: T,
    fun: (sprite: T & T["hr_version"]) => void
  ): void

  function add_shift(a: MapPositionArray | nil, b: MapPositionArray): MapPositionArray
  function add_shift(a: MapPositionArray, b: MapPositionArray | nil): MapPositionArray
  function add_shift(a: MapPositionArray | nil, b: MapPositionArray | nil): MapPositionArray | nil

  function add_shift_offset<T extends SpriteWithHrVersion<{ shift?: MapPositionArray }>>(
    offset: MapPositionArray | nil,
    sprite: T
  ): T

  function mul_shift(shift: MapPositionArray, scale: number | nil): MapPositionArray
  function mul_shift(shift: MapPositionArray | nil, scale: number | nil): MapPositionArray | nil

  function format_number(amount: number, append_suffix?: boolean): string

  function increment(t: number[], luaIndex: number, v?: number): void

  // Omitted: conditional_return; it's literally just `a and b`

  /**
   * Recursively merges and/or deep-copies tables. Entries in later tables override entries in earlier ones, unless both
   * entries are themselves tables, in which case they are recursively merged. Non-merged tables are deep-copied, so
   * that the result is brand new.
   */
  function merge<T extends object>(tables: readonly T[]): T

  function insert_safe(entity: LuaEntity | nil, item_dict: Record<string, number> | nil): void

  function remove_safe(entity: LuaEntity | nil, item_dict: Record<string, number> | nil): void

  function split_whitespace(string: string): string[]

  // Omitted: split, string_starts_with. Use the builtin tstl functions for that.

  // Omitted: online_players. Use game.connected_players
  // The lua code actually logs "But why?" if you do this...

  function clamp(x: number, lower: number, upper: number): number

  function get_walkable_tile(): string

  /**
   * This function takes 2 icons tables, and adds the second to the first, but applies scale, shift and tint to the entire second set.
   * This allows you to manipulate the entire second icons table in the same way as you would manipulate a single icon when adding to the icons table.
   */
  function combine_icons<T extends SpriteParameters>(
    icons1: readonly T[],
    icons2: readonly T[],
    inputs: {
      scale?: number
      shift?: MapPositionArray
      tint?: AnyColor
    }
  ): T[]

  // omitted: technology_icons. Create an issue if you really want to see these

  function parse_energy(energy: string): number

  function product_amount(product: {
    probability: number
    amount?: number
    amount_min?: number
    amount_max?: number
  }): number

  function empty_sprite(): SpriteParameters

  function draw_as_glow<T extends SpriteWithHrVersion>(sprite: T): T
  function remove_tile_references(data: PrototypeData, array_of_tiles_to_remove: readonly string[]): void

  function remove_from_list<T>(list: T[], value: T): boolean

  function list_to_map<V>(list: LuaPairsIterable<any, V>): LuaSet<NonNullable<V>>
  function list_to_map<T extends AnyNotNil>(list: T[]): LuaSet<T>
  function list_to_map<T extends AnyNotNil>(list: T): LuaSet<NonNullable<T[keyof T]>>
}
