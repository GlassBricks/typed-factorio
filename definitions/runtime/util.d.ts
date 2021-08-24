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

  function distance(position1: Position, position2: Position): number

  function positiontostr(position: Position): string

  function formattime(ticks: number): string

  /** Supports 'rrggbb', 'rgb', 'rrggbbaa', 'rgba', 'ww', 'w' */
  function color(hex: string): ColorTable

  function premul_color(color: Color): ColorTable

  function mix_color(c1: Color, c2: Color): ColorArray

  function multiply_color(c1: Color, n: number): ColorArray

  function moveposition(
    position: Position,
    direction: defines.direction.north | defines.direction.east | defines.direction.south | defines.direction.west,
    distance: number
  ): Position
  function moveposition(
    position: Position,
    direction: defines.direction, //todo: cardinal only
    distance: number
  ): Position | undefined

  function oppositedirection(direction: defines.direction): defines.direction

  /** Creates a new array where each element in `stripes` is duplicated `count` times */
  function multiplystripes<T>(count: number, stripes: T[]): T[]

  /** Gets tile position by pixel */
  function by_pixel(x: number, y: number): Position

  /** Gets tile position by pixel, hr */
  function by_pixel_hr(x: number, y: number): Position

  // omitted: foreach_sprite_definition

  function add_shift(a: PositionArray | undefined, b: PositionArray): PositionArray
  function add_shift(a: PositionArray, b: PositionArray | undefined): PositionArray
  function add_shift(a: PositionArray | undefined, b: PositionArray | undefined): PositionArray | undefined

  // omitted: add_shift_offset

  function mul_shift(shift: PositionArray, scale: number | undefined): PositionArray
  function mul_shift(shift: PositionArray | undefined, scale: number | undefined): PositionArray | undefined

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
