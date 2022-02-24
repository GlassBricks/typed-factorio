// "util" is declared only as a module, even though it also modifies global variables
// This is both because of limitations in `declare module`, and that modules are much friendlier to tooling.

/** @noSelfInFile */

/** @noResolution */
declare module "util" {
  namespace table {
    function deepcopy<T>(table: T): T

    function compare<T>(tb1: T, tb2: T): boolean
  }

  function copy<T>(table: T): T

  function distance(position1: MapPosition, position2: MapPosition): number

  function positiontostr(position: MapPosition): string

  function formattime(ticks: number): string

  /** Supports 'rrggbb', 'rgb', 'rrggbbaa', 'rgba', 'ww', 'w' */
  function color(hex: string): ColorTable

  function premul_color(color: Color): ColorTable

  function mix_color(c1: Color, c2: Color): ColorArray

  function multiply_color(c1: Color, n: number): ColorArray

  function moveposition(
    position: MapPosition,
    direction: defines.direction.north | defines.direction.east | defines.direction.south | defines.direction.west,
    distance: number
  ): MapPosition
  function moveposition(position: MapPosition, direction: defines.direction, distance: number): MapPosition | undefined

  function oppositedirection(direction: defines.direction): defines.direction

  /** Creates a new array where each element in `stripes` is duplicated `count` times */
  function multiplystripes<T>(count: number, stripes: T[]): T[]

  /** Gets tile position by pixel */
  function by_pixel(x: number, y: number): MapPosition

  /** Gets tile position by pixel, hr */
  function by_pixel_hr(x: number, y: number): MapPosition

  // omitted: foreach_sprite_definition

  function add_shift(a: MapPositionArray | undefined, b: MapPositionArray): MapPositionArray
  function add_shift(a: MapPositionArray, b: MapPositionArray | undefined): MapPositionArray
  function add_shift(a: MapPositionArray | undefined, b: MapPositionArray | undefined): MapPositionArray | undefined

  // omitted: add_shift_offset

  function mul_shift(shift: MapPositionArray, scale: number | undefined): MapPositionArray
  function mul_shift(shift: MapPositionArray | undefined, scale: number | undefined): MapPositionArray | undefined

  function format_number(amount: number, append_suffix?: boolean): string

  function increment(t: number[], index: number, v?: number): void

  // omitted: conditional_return

  /**
   * Recursively merges and/or deep-copies tables. Entries in later tables override entries in earlier ones, unless both
   * entries are themselves tables, in which case they are recursively merged. Non-merged tables are deep-copied, so
   * that the result is brand new.
   */
  function merge<T extends object>(tables: T[]): T

  function insert_safe(entity: LuaEntity | undefined, item_dict: Record<string, number> | undefined): void

  function remove_safe(entity: LuaEntity | undefined, item_dict: Record<string, number> | undefined): void

  function split_whitespace(string: string): string[]

  // omitted: split, string_starts_with. already TS functions for that

  // omitted: online_players. use game.connected_players

  function clamp(x: number, lower: number, upper: number): number

  // omitted: get_walkable_tile

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

  function list_to_map<T extends keyof any>(list: T[]): Record<T, true>
  function list_to_map<T>(list: T[]): LuaTable<T, true>
  function list_to_map<T>(list: T): LuaTable<T[keyof T], true>
}
