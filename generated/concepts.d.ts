// This is an auto-generated file. Do not edit directly!

/** @noSelfInFile */

/**
 * Localised strings are a way to support translation of in-game text. It is an array where the first element is the key
 * and the remaining elements are parameters that will be substituted for placeholders in the template designated by the key.
 *
 * The key identifies the string template. For example, `"gui-alert-tooltip.attack"` (for the template `"__1__ objects
 * are being damaged"`; see the file `data/core/locale/en.cfg`).
 *
 * The template can contain placeholders such as `__1__` or `__2__`. These will be replaced by the respective parameter
 * in the LocalisedString. The parameters themselves can be other localised strings, which will be processed recursively
 * in the same fashion. Localised strings can not be recursed deeper than 20 levels and can not have more than 20 parameters.
 *
 * As a special case, when the key is just the empty string, all the parameters will be concatenated (after processing,
 * if any are localised strings). If there is only one parameter, it will be used as is.
 *
 * Furthermore, when an API function expects a localised string, it will also accept a regular string (i.e. not a table)
 * which will not be translated, as well as a number or boolean, which will be converted to their textual representation.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#LocalisedString View documentation}
 *
 * @example
 *   In the English translation, this will print `"No ammo"`; in the Czech translation, it will print `"Bez munice"`:
 *
 *   ```lua
 *   game.player.print({"description.no-ammo"})
 *   ``` The `description.no-ammo` template contains no placeholders, so no further parameters are necessary.
 *
 * @example
 *   In the English translation, this will print `"Durability: 5/9"`; in the Japanese one, it will print `"耐久度: 5/9"`:
 *
 *   ```lua
 *   game.player.print({"description.durability", 5, 9})
 *   ```
 *
 * @example
 *   This will print `"hello"` in all translations:
 *
 *   ```lua
 *   game.player.print({"", "hello"})
 *   ```
 *
 * @example
 *   This will print `"Iron plate: 60"` in the English translation and `"Eisenplatte: 60"` in the German translation.
 *
 *   ```lua
 *   game.print({"", {"item-name.iron-plate"}, ": ", 60})
 *   ```
 */
type LocalisedString = readonly [string, ...LocalisedString[]] | string | number | boolean | undefined

interface DisplayResolution {
  readonly width: uint
  readonly height: uint
}

interface LogisticParameters {
  /** The item. `nil` clears the filter. */
  readonly name?: string
  readonly min?: uint
  readonly max?: uint
}

/**
 * The smooth orientation. It is a {@link float} in the range `[0, 1)` that covers a full circle, starting at the top and
 * going clockwise. This means a value of `0` indicates "north", a value of `0.5` indicates "south".
 *
 * For example then, a value of `0.625` would indicate "south-west", and a value of `0.875` would indicate "north-west".
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#RealOrientation View documentation}
 */
type RealOrientation = float

interface PositionTable {
  readonly x: int
  readonly y: int
}

type PositionArray = readonly [x: int, y: int]

/**
 * Coordinates of a tile in a map. Positions may be specified either as a dictionary with `x`, `y` as keys, or simply as
 * an array with two elements.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#Position View documentation}
 *
 * @example
 *   Explicit definition:
 *
 *   ```lua
 *   {x = 50, y = 20}
 *   {y = 20, x = 50}
 *   ```
 *
 * @example
 *   Shorthand: ```lua
 *   {10, 20}
 *   ```
 */
type Position = PositionTable | PositionArray

interface MapPositionTable {
  readonly x: double
  readonly y: double
}

type MapPositionArray = readonly [x: double, y: double]

/**
 * Coordinates of an entity on a map. This uses the same format as {@link Position}, meaning it can be specified either
 * with or without explicit keys.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#MapPosition View documentation}
 */
type MapPosition = MapPositionTable | MapPositionArray

interface ChunkPositionTable {
  readonly x: int
  readonly y: int
}

type ChunkPositionArray = readonly [x: int, y: int]

/**
 * Coordinates of a chunk in a {@link LuaSurface} where each integer `x`/`y` represents a different chunk. This uses the
 * same format as {@link Position}, meaning it can be specified either with or without explicit keys. A {@link Position}
 * can be translated to a ChunkPosition by dividing the `x`/`y` values by 32.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#ChunkPosition View documentation}
 */
type ChunkPosition = ChunkPositionTable | ChunkPositionArray

interface TilePositionTable {
  readonly x: int
  readonly y: int
}

type TilePositionArray = readonly [x: int, y: int]

/**
 * Coordinates of a tile in a chunk on a {@link LuaSurface} where each integer `x`/`y` represents a different tile. This
 * uses the same format as {@link Position} except it rounds any `x`/`y` down to whole numbers. It can be specified
 * either with or without explicit keys.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#TilePosition View documentation}
 */
type TilePosition = TilePositionTable | TilePositionArray

interface GuiLocationTable {
  readonly x: int
  readonly y: int
}

type GuiLocationArray = readonly [x: int, y: int]

/**
 * Screen coordinates of a GUI element in a {@link LuaGui}. This uses the same format as {@link Position} except it rounds
 * any `x`/`y` down to whole numbers. It can be specified either with or without explicit keys.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#GuiLocation View documentation}
 */
type GuiLocation = GuiLocationTable | GuiLocationArray

/**
 * A {@link ChunkPosition} with an added bounding box for the area of the chunk.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#ChunkPositionAndArea View documentation}
 */
interface ChunkPositionAndArea {
  readonly x: int
  readonly y: int
  readonly area: BoundingBoxRead
}

/**
 * A table used to define a manual shape for a piece of equipment.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#EquipmentPoint View documentation}
 */
interface EquipmentPoint {
  readonly x: uint
  readonly y: uint
}

interface GuiAnchor {
  readonly gui: defines.relative_gui_type
  readonly position: defines.relative_gui_position
  /** If provided, only anchors the GUI element when the opened things type matches the type. */
  readonly type?: string
  /** If provided, only anchors the GUI element when the opened thing matches the name. `name` takes precedence over `names`. */
  readonly name?: string
  /**
   * If provided, only anchors the GUI element when the opened thing matches one of the names. When reading an anchor,
   * `names` is always populated.
   */
  readonly names?: string[]
}

interface TabAndContent {
  readonly tab: LuaGuiElement
  readonly content: LuaGuiElement
}

interface OldTileAndPosition {
  readonly old_tile: LuaTilePrototype
  readonly position: TilePositionTable
}

/**
 * A dictionary of string to the four basic Lua types: `string`, `boolean`, `number`, `table`.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#Tags View documentation}
 *
 * @example
 *   ```lua
 *   {a = 1, b = true, c = "three", d = {e = "f"}}
 *   ```
 */
type Tags = Record<string, AnyBasic | undefined>

/**
 * **Note**: The vectors for all 5 position attributes are a table with `x` and `y` keys instead of an array.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#SmokeSource View documentation}
 */
interface SmokeSource {
  readonly name: string
  readonly frequency: double
  readonly offset: double
  readonly position?: PositionTable
  readonly north_position?: PositionTable
  readonly east_position?: PositionTable
  readonly south_position?: PositionTable
  readonly west_position?: PositionTable
  readonly deviation?: PositionTable
  readonly starting_frame_speed: uint16
  readonly starting_frame_speed_deviation: double
  readonly starting_frame: uint16
  readonly starting_frame_deviation: double
  readonly slow_down_factor: uint8
  readonly height: float
  readonly height_deviation: float
  readonly starting_vertical_speed: float
  readonly starting_vertical_speed_deviation: float
  readonly vertical_speed_slowdown: float
}

/**
 * A vector is a two-element array containing the `x` and `y` components. In some specific cases, the vector is a table
 * with `x` and `y` keys instead, which the documentation will point out.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#Vector View documentation}
 *
 * @example
 *   ```lua
 *   right = {1.0, 0.0}
 *   ```
 */
type Vector = PositionArray

interface BoundingBoxTable {
  readonly left_top: Position
  readonly right_bottom: Position
  readonly orientation?: RealOrientation
}

type BoundingBoxArray = readonly [left_top: Position, right_bottom: Position, orientation?: RealOrientation]

interface BoundingBoxRead {
  readonly left_top: PositionTable
  readonly right_bottom: PositionTable
  readonly orientation?: RealOrientation
}

/**
 * Two positions, specifying the top-left and bottom-right corner of the box respectively. Like with {@link Position},
 * the names of the members may be omitted. When read from the game, the third member `orientation` is present if it is
 * non-zero, however it is ignored when provided to the game.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#BoundingBox View documentation}
 *
 * @example
 *   Explicit definition:
 *
 *   ```lua
 *   {left_top = {-2, -3}, right_bottom = {5, 8}}
 *   ```
 *
 * @example
 *   Shorthand: ```lua
 *   {{-2, -3}, {5, 8}}
 *   ```
 */
type BoundingBox = BoundingBoxTable | BoundingBoxArray

interface ScriptAreaRead {
  readonly area: BoundingBoxRead
  readonly name: string
  readonly color: ColorTable
  readonly id: uint
}

/**
 * An area defined using the map editor.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#ScriptArea View documentation}
 */
interface ScriptArea {
  readonly area: BoundingBox
  readonly name: string
  readonly color: Color
  readonly id: uint
}

interface ScriptPositionRead {
  readonly position: PositionTable
  readonly name: string
  readonly color: ColorTable
  readonly id: uint
}

/**
 * A position defined using the map editor.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#ScriptPosition View documentation}
 */
interface ScriptPosition {
  readonly position: Position
  readonly name: string
  readonly color: Color
  readonly id: uint
}

interface ColorTable {
  readonly r?: float
  readonly g?: float
  readonly b?: float
  readonly a?: float
}

type ColorArray = readonly [r?: float, g?: float, b?: float, a?: float]

/**
 * Red, green, blue and alpha values, all in range [0, 1] or all in range [0, 255] if any value is > 1. All values here
 * are optional. Color channels default to `0`, the alpha channel defaults to `1`.
 *
 * Similar to {@link Position}, Color allows the short-hand notation of passing an array of exactly 3 or 4 numbers. The
 * game usually expects colors to be in pre-multiplied form (color channels are pre-multiplied by alpha).
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#Color View documentation}
 *
 * @example
 *   ```lua
 *   red1 = {r = 0.5, g = 0, b = 0, a = 0.5}  -- Half-opacity red
 *   red2 = {r = 0.5, a = 0.5}                -- Same color as red1
 *   black = {}                               -- All channels omitted: black
 *   red1_short = {0.5, 0, 0, 0.5}            -- Same color as red1 in short-hand notation
 *   ```
 */
type Color = ColorTable | ColorArray

interface ColorModifierTable {
  readonly r?: float
  readonly g?: float
  readonly b?: float
  readonly a?: float
}

type ColorModifierArray = readonly [r?: float, g?: float, b?: float, a?: float]

/**
 * Same as {@link Color}, but red, green, blue and alpha values can be any floating point number, without any special
 * handling of the range [1, 255].
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#ColorModifier View documentation}
 */
type ColorModifier = ColorModifierTable | ColorModifierArray

interface CraftingQueueItem {
  /** The index of the item in the crafting queue. */
  readonly index: uint
  /** The recipe being crafted. */
  readonly recipe: string
  /** The amount of items being crafted. */
  readonly count: uint
}

interface Alert {
  /** The tick this alert was created. */
  readonly tick: uint
  readonly target?: LuaEntity
  readonly prototype?: LuaEntityPrototype
  readonly position?: PositionTable
  /** The SignalID used for a custom alert. Only present for custom alerts. */
  readonly icon?: SignalID
  /** The message for a custom alert. Only present for custom alerts. */
  readonly message?: LocalisedString
}

/**
 * One vertex of a ScriptRenderPolygon.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#ScriptRenderVertexTarget View documentation}
 */
interface ScriptRenderVertexTarget {
  readonly target: Position | LuaEntity
  /** Only used if `target` is a LuaEntity. */
  readonly target_offset?: Vector
}

interface PathfinderWaypoint {
  /** The position of the waypoint on its surface. */
  readonly position: PositionTable
  /** `true` if the path from the previous waypoint to this one goes through an entity that must be destroyed. */
  readonly needs_destroy_to_reach: boolean
}

interface CutsceneWaypoint {
  /** Position to pan the camera to. */
  readonly position?: Position
  /** Entity or unit group to pan the camera to. */
  readonly target?: LuaEntity | LuaUnitGroup
  /** How many ticks it will take to reach this waypoint from the previous one. */
  readonly transition_time: uint
  /** Time in ticks to wait before moving to the next waypoint. */
  readonly time_to_wait: uint
  /** Zoom level to be set when the waypoint is reached. When not specified, the previous waypoint's zoom is used. */
  readonly zoom?: double
}

interface Decorative {
  /** The name of the decorative prototype. */
  readonly name: string
  readonly position: Position
  readonly amount: uint8
}

interface DecorativeResult {
  readonly position: TilePositionTable
  readonly decorative: LuaDecorativePrototype
  readonly amount: uint
}

/**
 * **Note**: Either `icon`, `text`, or both must be provided.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#ChartTagSpec View documentation}
 */
interface ChartTagSpec {
  readonly position: Position
  readonly icon?: SignalID
  readonly text?: string
  readonly last_user?: PlayerIdentification
}

/**
 * Parameters that affect the look and control of the game. Updating any of the member attributes here will immediately
 * take effect in the game engine.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#GameViewSettings View documentation}
 */
interface GameViewSettings {
  /**
   * Show the controller GUI elements. This includes the toolbar, the selected tool slot, the armour slot, and the gun
   * and ammunition slots.
   *
   * {@link https://lua-api.factorio.com/latest/Concepts.html#GameViewSettings#GameViewSettings.show_controller_gui View documentation}
   */
  show_controller_gui: boolean
  /**
   * Show the chart in the upper right-hand corner of the screen.
   *
   * {@link https://lua-api.factorio.com/latest/Concepts.html#GameViewSettings#GameViewSettings.show_minimap View documentation}
   */
  show_minimap: boolean
  /**
   * Show research progress and name in the upper right-hand corner of the screen.
   *
   * {@link https://lua-api.factorio.com/latest/Concepts.html#GameViewSettings#GameViewSettings.show_research_info View documentation}
   */
  show_research_info: boolean
  /**
   * Show overlay icons on entities. Also known as "alt-mode".
   *
   * {@link https://lua-api.factorio.com/latest/Concepts.html#GameViewSettings#GameViewSettings.show_entity_info View documentation}
   */
  show_entity_info: boolean
  /**
   * Show the flashing alert icons next to the player's toolbar.
   *
   * {@link https://lua-api.factorio.com/latest/Concepts.html#GameViewSettings#GameViewSettings.show_alert_gui View documentation}
   */
  show_alert_gui: boolean
  /**
   * When `true` (the default), mousing over an entity will select it. Otherwise, moving the mouse won't update entity
   * selection.
   *
   * {@link https://lua-api.factorio.com/latest/Concepts.html#GameViewSettings#GameViewSettings.update_entity_selection View documentation}
   */
  update_entity_selection: boolean
  /**
   * When `true` (`false` is default), the rails will always show the rail block visualisation.
   *
   * {@link https://lua-api.factorio.com/latest/Concepts.html#GameViewSettings#GameViewSettings.show_rail_block_visualisation View documentation}
   */
  show_rail_block_visualisation: boolean
  /**
   * Shows or hides the buttons row.
   *
   * {@link https://lua-api.factorio.com/latest/Concepts.html#GameViewSettings#GameViewSettings.show_side_menu View documentation}
   */
  show_side_menu: boolean
  /**
   * Shows or hides the view options when map is opened.
   *
   * {@link https://lua-api.factorio.com/latest/Concepts.html#GameViewSettings#GameViewSettings.show_map_view_options View documentation}
   */
  show_map_view_options: boolean
  /**
   * Shows or hides quickbar of shortcuts.
   *
   * {@link https://lua-api.factorio.com/latest/Concepts.html#GameViewSettings#GameViewSettings.show_quickbar View documentation}
   */
  show_quickbar: boolean
  /**
   * Shows or hides the shortcut bar.
   *
   * {@link https://lua-api.factorio.com/latest/Concepts.html#GameViewSettings#GameViewSettings.show_shortcut_bar View documentation}
   */
  show_shortcut_bar: boolean
}

/**
 * What is shown in the map view. If a field is not given, that setting will not be changed.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#MapViewSettings View documentation}
 */
interface MapViewSettings {
  readonly "show-logistic-network"?: boolean
  readonly "show-electric-network"?: boolean
  readonly "show-turret-range"?: boolean
  readonly "show-pollution"?: boolean
  readonly "show-train-station-names"?: boolean
  readonly "show-player-names"?: boolean
  readonly "show-networkless-logistic-members"?: boolean
  readonly "show-non-standard-map-info"?: boolean
}

/**
 * These values are for the time frame of one second (60 ticks).
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#PollutionMapSettings View documentation}
 */
interface PollutionMapSettings {
  /** Whether pollution is enabled at all. */
  readonly enabled: boolean
  /** The amount that is diffused to a neighboring chunk (possibly repeated for other directions as well). Defaults to `0.02`. */
  readonly diffusion_ratio: double
  /** The amount of PUs that need to be in a chunk for it to start diffusing. Defaults to `15`. */
  readonly min_to_diffuse: double
  /** The amount of pollution eaten by a chunk's tiles as a percentage of 1. Defaults to `1`. */
  readonly aeging: double
  /** Any amount of pollution larger than this value is visualized as this value instead. Defaults to `150`. */
  readonly expected_max_per_chunk: double
  /**
   * Any amount of pollution smaller than this value (but bigger than zero) is visualized as this value instead.
   * Defaults to `50`.
   */
  readonly min_to_show_per_chunk: double
  /** Defaults to `60`. */
  readonly min_pollution_to_damage_trees: double
  /** Defaults to `150`. */
  readonly pollution_with_max_forest_damage: double
  /** Defaults to `50`. */
  readonly pollution_per_tree_damage: double
  /** Defaults to `10`. */
  readonly pollution_restored_per_tree_damage: double
  /** Defaults to `20`. */
  readonly max_pollution_to_restore_trees: double
  /** Defaults to `1`. */
  readonly enemy_attack_pollution_consumption_modifier: double
}

/**
 * These values represent a percentual increase in evolution. This means a value of `0.1` would increase evolution by 10%.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#EnemyEvolutionMapSettings View documentation}
 */
interface EnemyEvolutionMapSettings {
  /** Whether enemy evolution is enabled at all. */
  readonly enabled: boolean
  /** The amount evolution naturally progresses by every second. Defaults to `0.000004`. */
  readonly time_factor: double
  /** The amount evolution progresses for every destroyed spawner. Defaults to `0.002`. */
  readonly destroy_factor: double
  /** The amount evolution progresses for every unit of pollution. Defaults to `0.0000009`. */
  readonly pollution_factor: double
}

/**
 * Candidate chunks are given scores to determine which one of them should be expanded into. This score takes into
 * account various settings noted below. The iteration is over a square region centered around the chunk for which the
 * calculation is done, and includes the central chunk as well. Distances are calculated as
 * {@link https://en.wikipedia.org/wiki/Taxicab_geometry Manhattan distance}.
 *
 * The pseudocode algorithm to determine a chunk's score is as follows:
 *
 * ```lua
 * player = 0
 * for neighbour in all chunks within enemy_building_influence_radius from chunk:
 *   player += number of player buildings on neighbour
 *           * building_coefficient
 *           * neighbouring_chunk_coefficient^distance(chunk, neighbour)
 *
 * base = 0
 * for neighbour in all chunk within friendly_base_influence_radius from chunk:
 *   base += num of enemy bases on neighbour
 *           * other_base_coefficient
 *           * neighbouring_base_chunk_coefficient^distance(chunk, neighbour)
 *
 * score(chunk) = 1 / (1 + player + base)
 * ```
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#EnemyExpansionMapSettings View documentation}
 */
interface EnemyExpansionMapSettings {
  /** Whether enemy expansion is enabled at all. */
  readonly enabled: boolean
  /**
   * Distance in chunks from the furthest base around to prevent expansions from reaching too far into the player's
   * territory. Defaults to `7`.
   */
  readonly max_expansion_distance: uint
  /** Defaults to `2`. */
  readonly friendly_base_influence_radius: uint
  /** Defaults to `2`. */
  readonly enemy_building_influence_radius: uint
  /** Defaults to `0.1`. */
  readonly building_coefficient: double
  /** Defaults to `2.0`. */
  readonly other_base_coefficient: double
  /** Defaults to `0.5`. */
  readonly neighbouring_chunk_coefficient: double
  /** Defaults to `0.4`. */
  readonly neighbouring_base_chunk_coefficient: double
  /**
   * A chunk has to have at most this high of a percentage of unbuildable tiles for it to be considered a candidate to
   * avoid chunks full of water as candidates. Defaults to `0.9`, or 90%.
   */
  readonly max_colliding_tiles_coefficient: double
  /**
   * The minimum size of a biter group that goes to build a new base. This is multiplied by the evolution factor.
   * Defaults to `5`.
   */
  readonly settler_group_min_size: uint
  /**
   * The maximum size of a biter group that goes to build a new base. This is multiplied by the evolution factor.
   * Defaults to `20`.
   */
  readonly settler_group_max_size: uint
  /**
   * The minimum time between expansions in ticks. The actual cooldown is adjusted to the current evolution levels.
   * Defaults to `4*3,600=14,400` ticks.
   */
  readonly min_expansion_cooldown: uint
  /**
   * The maximum time between expansions in ticks. The actual cooldown is adjusted to the current evolution levels.
   * Defaults to `60*3,600=216,000` ticks.
   */
  readonly max_expansion_cooldown: uint
}

interface UnitGroupMapSettings {
  /**
   * The minimum amount of time in ticks a group will spend gathering before setting off. The actual time is a random
   * time between the minimum and maximum times. Defaults to `3,600` ticks.
   */
  readonly min_group_gathering_time: uint
  /**
   * The maximum amount of time in ticks a group will spend gathering before setting off. The actual time is a random
   * time between the minimum and maximum times. Defaults to `10*3,600=36,000` ticks.
   */
  readonly max_group_gathering_time: uint
  /**
   * After gathering has finished, the group is allowed to wait this long in ticks for delayed members. New members
   * are not accepted anymore however. Defaults to `2*3,600=7,200` ticks.
   */
  readonly max_wait_time_for_late_members: uint
  /** The minimum group radius in tiles. The actual radius is adjusted based on the number of members. Defaults to `5.0`. */
  readonly min_group_radius: double
  /** The maximum group radius in tiles. The actual radius is adjusted based on the number of members. Defaults to `30.0`. */
  readonly max_group_radius: double
  /**
   * The maximum speed a percentage of its regular speed that a group member can speed up to when catching up with the
   * group. Defaults to `1.4`, or 140%.
   */
  readonly max_member_speedup_when_behind: double
  /**
   * The minimum speed a percentage of its regular speed that a group member can slow down to when ahead of the group.
   * Defaults to `0.6`, or 60%.
   */
  readonly max_member_slowdown_when_ahead: double
  /**
   * The minimum speed as a percentage of its maximum speed that a group will slow down to so members that fell behind
   * can catch up. Defaults to `0.3`, or 30%.
   */
  readonly max_group_slowdown_factor: double
  /**
   * When a member of a group falls back more than this factor times the group radius, the group will slow down to its
   * `max_group_slowdown_factor` speed to let them catch up. Defaults to `3`.
   */
  readonly max_group_member_fallback_factor: double
  /**
   * When a member of a group falls back more than this factor times the group radius, it will be dropped from the
   * group. Defaults to `10`.
   */
  readonly member_disown_distance: double
  readonly tick_tolerance_when_member_arrives: uint
  /** The maximum number of automatically created unit groups gathering for attack at any time. Defaults to `30`. */
  readonly max_gathering_unit_groups: uint
  /**
   * The maximum number of members for an attack unit group. This only affects automatically created unit groups,
   * manual groups created through the API are unaffected. Defaults to `200`.
   */
  readonly max_unit_group_size: uint
}

interface SteeringMapSetting {
  /** Does not include the radius of the unit. */
  readonly radius: double
  readonly separation_factor: double
  readonly separation_force: double
  /** Used to make steering look better for aesthetic purposes. */
  readonly force_unit_fuzzy_goto_behavior: boolean
}

interface SteeringMapSettings {
  readonly default: SteeringMapSetting
  readonly moving: SteeringMapSetting
}

interface PathFinderMapSettings {
  /**
   * The pathfinder performs a step of the backward search every `fwd2bwd_ratio`'th step. The minimum allowed value is
   * `2`, which means symmetric search. The default value is `5`.
   */
  readonly fwd2bwd_ratio: uint
  /**
   * When looking at which node to check next, their heuristic value is multiplied by this ratio. The higher it is,
   * the more the search is directed straight at the goal. Defaults to `2`.
   */
  readonly goal_pressure_ratio: double
  /** The maximum number of nodes that are expanded per tick. Defaults to `1,000`. */
  readonly max_steps_worked_per_tick: double
  /** The maximum amount of work each pathfinding job is allowed to do per tick. Defaults to `8,000`. */
  readonly max_work_done_per_tick: uint
  /** Whether to cache paths at all. Defaults to `true`. */
  readonly use_path_cache: boolean
  /** Number of elements in the short cache. Defaults to `5`. */
  readonly short_cache_size: uint
  /** Number of elements in the long cache. Defaults to `25`. */
  readonly long_cache_size: uint
  /** The minimal distance to the goal in tiles required to be searched in the short path cache. Defaults to `10`. */
  readonly short_cache_min_cacheable_distance: double
  /** The minimal number of nodes required to be searched in the short path cache. Defaults to `50`. */
  readonly short_cache_min_algo_steps_to_cache: uint
  /** The minimal distance to the goal in tiles required to be searched in the long path cache. Defaults to `30`. */
  readonly long_cache_min_cacheable_distance: double
  /**
   * When looking for a connection to a cached path, search at most for this number of steps times the original
   * estimate. Defaults to `100`.
   */
  readonly cache_max_connect_to_cache_steps_multiplier: uint
  /**
   * When looking for a path from cache, make sure it doesn't start too far from the requested start in relative
   * terms. Defaults to `0.2`.
   */
  readonly cache_accept_path_start_distance_ratio: double
  /**
   * When looking for a path from cache, make sure it doesn't end too far from the requested end in relative terms.
   * This is typically more lenient than the start ratio since the end target could be moving. Defaults to `0.15`.
   */
  readonly cache_accept_path_end_distance_ratio: double
  /** Same principle as `cache_accept_path_start_distance_ratio`, but used for negative cache queries. Defaults to `0.3`. */
  readonly negative_cache_accept_path_start_distance_ratio: double
  /** Same principle as `cache_accept_path_end_distance_ratio`, but used for negative cache queries. Defaults to `0.3`. */
  readonly negative_cache_accept_path_end_distance_ratio: double
  /** When assigning a rating to the best path, this multiplier times start distances is considered. Defaults to `10`. */
  readonly cache_path_start_distance_rating_multiplier: double
  /**
   * When assigning a rating to the best path, this multiplier times end distances is considered. This value is
   * typically higher than the start multiplier as this results in better end path quality. Defaults to `20`.
   */
  readonly cache_path_end_distance_rating_multiplier: double
  /**
   * A penalty that is applied for another unit that is on the way to the goal. This is mainly relevant for situations
   * where a group of units has arrived at the target they are supposed to attack, making units further back circle
   * around to reach the target. Defaults to `30`.
   */
  readonly stale_enemy_with_same_destination_collision_penalty: double
  /** The distance in tiles after which other moving units are not considered for pathfinding. Defaults to `5`. */
  readonly ignore_moving_enemy_collision_distance: double
  /**
   * A penalty that is applied for another unit that is too close and either not moving or has a different goal.
   * Defaults to `30`.
   */
  readonly enemy_with_different_destination_collision_penalty: double
  /** The general collision penalty with other units. Defaults to `10`. */
  readonly general_entity_collision_penalty: double
  /** The collision penalty for positions that require the destruction of an entity to get to. Defaults to `3`. */
  readonly general_entity_subsequent_collision_penalty: double
  /**
   * The collision penalty for collisions in the extended bounding box but outside the entity's actual bounding box.
   * Defaults to `3`.
   */
  readonly extended_collision_penalty: double
  /** The amount of path finder requests accepted per tick regardless of the requested path's length. Defaults to `10`. */
  readonly max_clients_to_accept_any_new_request: uint
  /**
   * When the `max_clients_to_accept_any_new_request` amount is exhausted, only path finder requests with a short
   * estimate will be accepted until this amount (per tick) is reached. Defaults to `100`.
   */
  readonly max_clients_to_accept_short_new_request: uint
  /** The maximum direct distance in tiles before a request is no longer considered short. Defaults to `100`. */
  readonly direct_distance_to_consider_short_request: uint
  /** The maximum amount of nodes a short request will traverse before being rescheduled as a long request. Defaults to `1000`. */
  readonly short_request_max_steps: uint
  /**
   * The amount of steps that are allocated to short requests each tick, as a percentage of all available steps.
   * Defaults to `0.5`, or 50%.
   */
  readonly short_request_ratio: double
  /** The minimum amount of steps that are guaranteed to be performed for every request. Defaults to `2000`. */
  readonly min_steps_to_check_path_find_termination: uint
  /**
   * If the actual amount of steps is higher than the initial estimate by this factor, pathfinding is terminated.
   * Defaults to `2000.0`.
   */
  readonly start_to_goal_cost_multiplier_to_terminate_path_find: double
  /**
   * The thresholds of waiting clients after each of which the per-tick work limit will be increased by the
   * corresponding value in `overload_multipliers`. This is to avoid clients having to wait too long. Must have the
   * same number of elements as `overload_multipliers`. Defaults to `{0, 100, 500}`.
   */
  readonly overload_levels: uint[]
  /**
   * The multipliers to the amount of per-tick work applied after the corresponding thresholds in `overload_levels`
   * have been reached. Must have the same number of elements as `overload_multipliers`. Defaults to `{2, 3, 4}`.
   */
  readonly overload_multipliers: double[]
  /** The delay in ticks between decrementing the score of all paths in the negative cache by one. Defaults to `20`. */
  readonly negative_path_cache_delay_interval: uint
}

/**
 * Various game-related settings. Updating any of the attributes will immediately take effect in the game engine.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#MapSettings View documentation}
 *
 * @example
 *   Increase the number of short paths the pathfinder can cache.
 *
 *   ```lua
 *   game.map_settings.path_finder.short_cache_size = 15
 *   ```
 */
interface MapSettings {
  readonly pollution: PollutionMapSettings
  readonly enemy_evolution: EnemyEvolutionMapSettings
  readonly enemy_expansion: EnemyExpansionMapSettings
  readonly unit_group: UnitGroupMapSettings
  readonly steering: SteeringMapSettings
  readonly path_finder: PathFinderMapSettings
  /**
   * If a behavior fails this many times, the enemy (or enemy group) is destroyed. This solves biters getting stuck
   * within their own base.
   */
  readonly max_failed_behavior_count: uint
}

/**
 * Technology and recipe difficulty settings. Updating any of the attributes will immediately take effect in the game engine.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#DifficultySettings View documentation}
 */
interface DifficultySettings {
  readonly recipe_difficulty: defines.difficulty_settings.recipe_difficulty
  readonly technology_difficulty: defines.difficulty_settings.technology_difficulty
  /** A value in range [0.001, 1000]. */
  readonly technology_price_multiplier: double
  /**
   * Either `"after-victory"`, `"always"` or `"never"`. Changing this to `"always"` or `"after-victory"` does not
   * automatically unlock the research queue. See {@link LuaForce} for that.
   */
  readonly research_queue_setting: "after-victory" | "always" | "never"
}

/**
 * All regular {@link MapSettings} plus an additional table that contains the {@link DifficultySettings}.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#MapAndDifficultySettings View documentation}
 */
interface MapAndDifficultySettings {
  readonly pollution: PollutionMapSettings
  readonly enemy_evolution: EnemyEvolutionMapSettings
  readonly enemy_expansion: EnemyExpansionMapSettings
  readonly unit_group: UnitGroupMapSettings
  readonly steering: SteeringMapSettings
  readonly path_finder: PathFinderMapSettings
  /**
   * If a behavior fails this many times, the enemy (or enemy group) is destroyed. This solves biters getting stuck
   * within their own base.
   */
  readonly max_failed_behavior_count: uint
  readonly difficulty_settings: DifficultySettings
}

/**
 * The data that can be extracted from a map exchange string, as a plain table.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#MapExchangeStringData View documentation}
 */
interface MapExchangeStringData {
  readonly map_settings: MapAndDifficultySettings
  readonly map_gen_settings: MapGenSettingsRead
}

interface BlueprintItemIcon {
  /** Name of the item prototype whose icon should be used. */
  readonly name: string
  /** Index of the icon in the blueprint icons slots. Has to be an integer in the range [1, 4]. */
  readonly index: uint
}

interface BlueprintSignalIcon {
  /** The icon to use. It can be any item icon as well as any virtual signal icon. */
  readonly signal: SignalID
  /** Index of the icon in the blueprint icons slots. Has to be an integer in the range [1, 4]. */
  readonly index: uint
}

interface BlueprintEntityRead {
  /** The entity's unique identifier in the blueprint. */
  readonly entity_number: uint
  /** The prototype name of the entity. */
  readonly name: string
  /** The position of the entity. */
  readonly position: PositionTable
  /**
   * The direction the entity is facing. Only present for entities that can face in different directions and when the
   * entity is not facing north.
   */
  readonly direction?: defines.direction
  /** The entity tags of the entity, if there are any. Only relevant for entity ghosts. */
  readonly tags?: Tags
  /**
   * The items that the entity will request when revived, if there are any. It's a mapping of prototype names to
   * amounts. Only relevant for entity ghosts.
   */
  readonly items?: Record<string, uint>
  /**
   * The circuit network connections of the entity, if there are any. Only relevant for entities that support circuit
   * connections.
   */
  readonly connections?: BlueprintCircuitConnection
  /**
   * The control behavior of the entity, if it has one. The format of the control behavior depends on the entity's
   * type. Only relevant for entities that support control behaviors.
   */
  readonly control_behavior?: BlueprintControlBehavior
  /** The schedule of the entity, if it has one. Only relevant for locomotives. */
  readonly schedule?: TrainScheduleRecord[]
}

/**
 * Information about a single connection between two connection points.
 *
 * {@link https://wiki.factorio.com/Blueprint_string_format#Connection_data_object View Documentation}
 */
interface BlueprintConnectionData {
  /** ID of the entity this connection is connected with. */
  entity_id: uint
  /** The circuit connector id of the entity this connection is connected to, see {@link defines.circuit_connector_id} */
  circuit_id?: defines.circuit_connector_id
}

/**
 * The actual point where a wire is connected to. Contains information about where it is connected to.
 *
 * {@link https://wiki.factorio.com/Blueprint_string_format#Connection_point_object View Documentation}
 */
interface BlueprintConnectionPoint {
  /**
   * An array of {@link BlueprintConnectionData Connection data object} containing all the connections from this point
   * created by red wire.
   */
  red?: BlueprintConnectionData[]
  /**
   * An array of {@link BlueprintConnectionData Connection data object} containing all the connections from this point
   * created by green wire.
   */
  green?: BlueprintConnectionData[]
}

/**
 * Object containing information about the connections to other entities formed by red or green wires.
 *
 * {@link https://wiki.factorio.com/Blueprint_string_format#Connection_object View Documentation}
 */
interface BlueprintCircuitConnection {
  /** First connection point. The default for everything that doesn't have multiple connection points. */
  "1"?: BlueprintConnectionPoint
  /** Second connection point. For example, the "output" part of an arithmetic combinator. */
  "2"?: BlueprintConnectionPoint
}

/**
 * The representation of an entity inside of a blueprint. It has at least these fields, but can contain additional ones
 * depending on the kind of entity.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#BlueprintEntity View documentation}
 */
interface BlueprintEntity {
  /** The entity's unique identifier in the blueprint. */
  readonly entity_number: uint
  /** The prototype name of the entity. */
  readonly name: string
  /** The position of the entity. */
  readonly position: Position
  /**
   * The direction the entity is facing. Only present for entities that can face in different directions and when the
   * entity is not facing north.
   */
  readonly direction?: defines.direction
  /** The entity tags of the entity, if there are any. Only relevant for entity ghosts. */
  readonly tags?: Tags
  /**
   * The items that the entity will request when revived, if there are any. It's a mapping of prototype names to
   * amounts. Only relevant for entity ghosts.
   */
  readonly items?: Record<string, uint>
  /**
   * The circuit network connections of the entity, if there are any. Only relevant for entities that support circuit
   * connections.
   */
  readonly connections?: BlueprintCircuitConnection
  /**
   * The control behavior of the entity, if it has one. The format of the control behavior depends on the entity's
   * type. Only relevant for entities that support control behaviors.
   */
  readonly control_behavior?: BlueprintControlBehavior
  /** The schedule of the entity, if it has one. Only relevant for locomotives. */
  readonly schedule?: readonly TrainScheduleRecord[]
}

interface TileRead {
  /** The position of the tile. */
  readonly position: PositionTable
  /** The prototype name of the tile. */
  readonly name: string
}

interface Tile {
  /** The position of the tile. */
  readonly position: Position
  /** The prototype name of the tile. */
  readonly name: string
}

interface Fluid {
  /** Fluid prototype name of the fluid. */
  readonly name: string
  /** Amount of the fluid. */
  readonly amount: double
  /**
   * The temperature. When reading from {@link LuaFluidBox}, this field will always be present. It is not necessary to
   * specify it when writing, however. When not specified, the fluid will be set to the fluid's default temperature as
   * specified in the fluid's prototype.
   */
  readonly temperature?: double
}

interface BaseIngredient {
  /** `"item"` or `"fluid"`. */
  readonly type: "item" | "fluid"
  /** Prototype name of the required item or fluid. */
  readonly name: string
  /** Amount of the item or fluid. */
  readonly amount: double
  /** How much of this ingredient is a catalyst. */
  readonly catalyst_amount?: uint | double
}

interface FluidIngredient extends BaseIngredient {
  readonly type: "fluid"
  /** The minimum fluid temperature required. */
  readonly minimum_temperature?: double
  /** The maximum fluid temperature allowed. */
  readonly maximum_temperature?: double
}

interface ItemIngredient extends BaseIngredient {
  readonly type: "item"
}

/**
 * Other attributes may be specified depending on `type`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#Ingredient View documentation}
 */
type Ingredient = FluidIngredient | ItemIngredient

interface BaseProduct {
  /** `"item"` or `"fluid"`. */
  readonly type: "item" | "fluid"
  /** Prototype name of the result. */
  readonly name: string
  /** Amount of the item or fluid to give. If not specified, `amount_min`, `amount_max` and `probability` must all be specified. */
  readonly amount?: double
  /** Minimal amount of the item or fluid to give. Has no effect when `amount` is specified. */
  readonly amount_min?: uint | double
  /** Maximum amount of the item or fluid to give. Has no effect when `amount` is specified. */
  readonly amount_max?: uint | double
  /** A value in range [0, 1]. Item or fluid is only given with this probability; otherwise no product is produced. */
  readonly probability?: double
  /** How much of this product is a catalyst. */
  readonly catalyst_amount?: uint | double
}

interface FluidProduct extends BaseProduct {
  readonly type: "fluid"
  /** The fluid temperature of this product. */
  readonly temperature?: double
}

interface ItemProduct extends BaseProduct {
  readonly type: "item"
}

/**
 * Other attributes may be specified depending on `type`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#Product View documentation}
 *
 * @example
 *   Products of the "steel-chest" recipe (an array of Product):
 *
 *   ```lua
 *   {{type="item", name="steel-chest", amount=1}}
 *   ```
 *
 * @example
 *   Products of the "advanced-oil-processing" recipe:
 *
 *   ```lua
 *   {{type="fluid", name="heavy-oil", amount=1},
 *   {type="fluid", name="light-oil", amount=4.5},
 *   {type="fluid", name="petroleum-gas", amount=5.5}}
 *   ```
 *
 * @example
 *   What a custom recipe would look like that had a probability of 0.5 to return a minimum amount of 1 and a maximum amount of 5:
 *
 *   ```lua
 *   {{type=0, name="custom-item", probability=0.5, amount_min=1, amount_max=5}}
 *   ```
 *
 * @see {@link LuaRecipe.products}
 */
type Product = FluidProduct | ItemProduct

interface Loot {
  /** Item prototype name of the result. */
  readonly item: string
  /** Probability that any loot at all will drop, as a number in range [0, 1]. */
  readonly probability: double
  /** Minimum amount of loot to drop. */
  readonly count_min: double
  /** Maximum amount of loot to drop. */
  readonly count_max: double
}

interface BaseTechnologyModifier {
  /**
   * Modifier type. Specifies which of the other fields will be available. Possible values are:
   * `"inserter-stack-size-bonus"`, `"stack-inserter-capacity-bonus"`, `"laboratory-speed"`,
   * `"character-logistic-trash-slots"`, `"maximum-following-robots-count"`, `"worker-robot-speed"`,
   * `"worker-robot-storage"`, `"ghost-time-to-live"`, `"turret-attack"`, `"ammo-damage"`, `"give-item"`,
   * `"gun-speed"`, `"unlock-recipe"`, `"character-crafting-speed"`, `"character-mining-speed"`,
   * `"character-running-speed"`, `"character-build-distance"`, `"character-item-drop-distance"`,
   * `"character-reach-distance"`, `"character-resource-reach-distance"`, `"character-item-pickup-distance"`,
   * `"character-loot-pickup-distance"`, `"character-inventory-slots-bonus"`, `"deconstruction-time-to-live"`,
   * `"max-failed-attempts-per-tick-per-construction-queue"`,
   * `"max-successful-attempts-per-tick-per-construction-queue"`, `"character-health-bonus"`,
   * `"mining-drill-productivity-bonus"`, `"train-braking-force-bonus"`, `"zoom-to-world-enabled"`,
   * `"zoom-to-world-ghost-building-enabled"`, `"zoom-to-world-blueprint-enabled"`,
   * `"zoom-to-world-deconstruction-planner-enabled"`, `"zoom-to-world-upgrade-planner-enabled"`,
   * `"zoom-to-world-selection-tool-enabled"`, `"worker-robot-battery"`, `"laboratory-productivity"`,
   * `"follower-robot-lifetime"`, `"artillery-range"`, `"nothing"`, `"character-additional-mining-categories"`,
   * `"character-logistic-requests"`.
   */
  readonly type:
    | "inserter-stack-size-bonus"
    | "stack-inserter-capacity-bonus"
    | "laboratory-speed"
    | "character-logistic-trash-slots"
    | "maximum-following-robots-count"
    | "worker-robot-speed"
    | "worker-robot-storage"
    | "ghost-time-to-live"
    | "turret-attack"
    | "ammo-damage"
    | "give-item"
    | "gun-speed"
    | "unlock-recipe"
    | "character-crafting-speed"
    | "character-mining-speed"
    | "character-running-speed"
    | "character-build-distance"
    | "character-item-drop-distance"
    | "character-reach-distance"
    | "character-resource-reach-distance"
    | "character-item-pickup-distance"
    | "character-loot-pickup-distance"
    | "character-inventory-slots-bonus"
    | "deconstruction-time-to-live"
    | "max-failed-attempts-per-tick-per-construction-queue"
    | "max-successful-attempts-per-tick-per-construction-queue"
    | "character-health-bonus"
    | "mining-drill-productivity-bonus"
    | "train-braking-force-bonus"
    | "zoom-to-world-enabled"
    | "zoom-to-world-ghost-building-enabled"
    | "zoom-to-world-blueprint-enabled"
    | "zoom-to-world-deconstruction-planner-enabled"
    | "zoom-to-world-upgrade-planner-enabled"
    | "zoom-to-world-selection-tool-enabled"
    | "worker-robot-battery"
    | "laboratory-productivity"
    | "follower-robot-lifetime"
    | "artillery-range"
    | "nothing"
    | "character-additional-mining-categories"
    | "character-logistic-requests"
}

interface GunSpeedTechnologyModifier extends BaseTechnologyModifier {
  readonly type: "gun-speed"
  /** Prototype name of the ammunition category that is affected */
  readonly ammo_category: string
  /** Modification value. This will be added to the current gun speed modifier upon researching. */
  readonly modifier: double
}

interface AmmoDamageTechnologyModifier extends BaseTechnologyModifier {
  readonly type: "ammo-damage"
  /** Prototype name of the ammunition category that is affected */
  readonly ammo_category: string
  /** Modification value. This will be added to the current ammo damage modifier upon researching. */
  readonly modifier: double
}

interface GiveItemTechnologyModifier extends BaseTechnologyModifier {
  readonly type: "give-item"
  /** Item prototype name to give. */
  readonly item: string
  /** Number of items to give. Defaults to `1`. */
  readonly count?: uint
}

interface TurretAttackTechnologyModifier extends BaseTechnologyModifier {
  readonly type: "turret-attack"
  /** Turret prototype name this modifier will affect. */
  readonly turret_id: string
  /** Modification value. This will be added to the current turret damage modifier upon researching. */
  readonly modifier: double
}

interface UnlockRecipeTechnologyModifier extends BaseTechnologyModifier {
  readonly type: "unlock-recipe"
  /** Recipe prototype name to unlock. */
  readonly recipe: string
}

interface NothingTechnologyModifier extends BaseTechnologyModifier {
  readonly type: "nothing"
  /** Description of this nothing modifier. */
  readonly effect_description: LocalisedString
}

interface OtherTechnologyModifier extends BaseTechnologyModifier {
  readonly type:
    | "inserter-stack-size-bonus"
    | "stack-inserter-capacity-bonus"
    | "laboratory-speed"
    | "character-logistic-trash-slots"
    | "maximum-following-robots-count"
    | "worker-robot-speed"
    | "worker-robot-storage"
    | "ghost-time-to-live"
    | "turret-attack"
    | "ammo-damage"
    | "give-item"
    | "gun-speed"
    | "unlock-recipe"
    | "character-crafting-speed"
    | "character-mining-speed"
    | "character-running-speed"
    | "character-build-distance"
    | "character-item-drop-distance"
    | "character-reach-distance"
    | "character-resource-reach-distance"
    | "character-item-pickup-distance"
    | "character-loot-pickup-distance"
    | "character-inventory-slots-bonus"
    | "deconstruction-time-to-live"
    | "max-failed-attempts-per-tick-per-construction-queue"
    | "max-successful-attempts-per-tick-per-construction-queue"
    | "character-health-bonus"
    | "mining-drill-productivity-bonus"
    | "train-braking-force-bonus"
    | "zoom-to-world-enabled"
    | "zoom-to-world-ghost-building-enabled"
    | "zoom-to-world-blueprint-enabled"
    | "zoom-to-world-deconstruction-planner-enabled"
    | "zoom-to-world-upgrade-planner-enabled"
    | "zoom-to-world-selection-tool-enabled"
    | "worker-robot-battery"
    | "laboratory-productivity"
    | "follower-robot-lifetime"
    | "artillery-range"
    | "nothing"
    | "character-additional-mining-categories"
    | "character-logistic-requests"
  /** Modification value. This value will be added to the variable it modifies. */
  readonly modifier: double
}

/**
 * The effect that is applied when a technology is researched. It is a table that contains at least the field `type`.
 *
 * Other attributes may be specified depending on `type`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#TechnologyModifier View documentation}
 */
type TechnologyModifier =
  | GunSpeedTechnologyModifier
  | AmmoDamageTechnologyModifier
  | GiveItemTechnologyModifier
  | TurretAttackTechnologyModifier
  | UnlockRecipeTechnologyModifier
  | NothingTechnologyModifier
  | OtherTechnologyModifier

/**
 * A single offer on a market entity.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#Offer View documentation}
 */
interface Offer {
  /** List of prices. */
  readonly price: Ingredient[]
  /** The action that will take place when a player accepts the offer. Usually a `"give-item"` modifier. */
  readonly offer: TechnologyModifier
}

/**
 * Specifies how probability and richness are calculated when placing something on the map. Can be specified either
 * using `probability_expression` and `richness_expression` or by using all the other fields.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#AutoplaceSpecification View documentation}
 */
interface AutoplaceSpecification {
  readonly probability_expression: NoiseExpression
  readonly richness_expression: NoiseExpression
  readonly coverage: double
  readonly sharpness: double
  readonly max_probability: double
  readonly placement_density: uint
  readonly richness_base: double
  readonly richness_multiplier: double
  readonly richness_multiplier_distance_bonus: double
  readonly starting_area_size: uint
  readonly order: string
  readonly default_enabled: boolean
  readonly peaks?: AutoplaceSpecificationPeak[]
  /** Control prototype name. */
  readonly control?: string
  readonly tile_restriction?: AutoplaceSpecificationRestriction[]
  readonly force: string
  readonly random_probability_penalty: double
}

/**
 * A fragment of a functional program used to generate coherent noise, probably for purposes related to terrain
 * generation. These can only be meaningfully written/modified during the data load phase. More detailed information is
 * found on the {@link https://wiki.factorio.com/Types/NoiseExpression wiki}.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#NoiseExpression View documentation}
 */
interface NoiseExpression {
  /** Names the type of the expression and determines what other fields are required. */
  readonly type: string
}

interface AutoplaceSpecificationPeak {
  readonly influence: double
  readonly max_influence: double
  readonly min_influence: double
  readonly richness_influence: double
  readonly noisePersistence: double
  /** Prototype name of the noise layer. */
  readonly noise_layer?: string
  readonly noise_octaves_difference: double
  readonly water_optimal: double
  readonly water_range: double
  readonly water_max_range: double
  readonly water_top_property_limit: double
  readonly elevation_optimal: double
  readonly elevation_range: double
  readonly elevation_max_range: double
  readonly elevation_top_property_limit: double
  readonly temperature_optimal: double
  readonly temperature_range: double
  readonly temperature_max_range: double
  readonly temperature_top_property_limit: double
  readonly starting_area_weight_optimal: double
  readonly starting_area_weight_range: double
  readonly starting_area_weight_max_range: double
  readonly starting_area_weight_top_property_limit: double
  readonly tier_from_start_optimal: double
  readonly tier_from_start_range: double
  readonly tier_from_start_max_range: double
  readonly tier_from_start_top_property_limit: double
  readonly distance_optimal: double
  readonly distance_range: double
  readonly distance_max_range: double
  readonly distance_top_property_limit: double
  readonly aux_optimal: double
  readonly aux_range: double
  readonly aux_max_range: double
  readonly aux_top_property_limit: double
}

interface AutoplaceSpecificationRestriction {
  /** Tile prototype name */
  readonly first?: string
  /** Second prototype name */
  readonly second?: string
}

interface Resistance {
  /** Absolute damage decrease */
  readonly decrease: float
  /** Percentual damage decrease */
  readonly percent: float
}

/**
 * A floating point number specifying an amount.
 *
 * For backwards compatibility, MapGenSizes can also be specified as one of the following strings, which will be
 * converted to a number (when queried, a number will always be returned):
 *
 * - `"none"` - equivalent to `0`
 * - `"very-low"`, `"very-small"`, `"very-poor"` - equivalent to `1/2`
 * - `"low"`, `"small"`, `"poor"` - equivalent to `1/sqrt(2)`
 * - `"normal"`, `"medium"`, `"regular"` - equivalent to `1`
 * - `"high"`, `"big"`, `"good"` - equivalent to `sqrt(2)`
 * - `"very-high"`, `"very-big"`, `"very-good"` - equivalent to `2`
 *
 * **Note**: The map generation algorithm officially supports the range of values the in-game map generation screen
 * shows (specifically `0` and values from `1/6` to `6`). Values outside this range are not guaranteed to work as expected.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#MapGenSize View documentation}
 */
type MapGenSize =
  | number
  | "none"
  | "very-low"
  | "very-small"
  | "very-poor"
  | "low"
  | "small"
  | "poor"
  | "normal"
  | "medium"
  | "regular"
  | "high"
  | "big"
  | "good"
  | "very-high"
  | "very-big"
  | "very-good"

interface AutoplaceSetting {
  readonly frequency: MapGenSize
  readonly size: MapGenSize
  readonly richness: MapGenSize
}

interface AutoplaceSettings {
  /** Whether missing autoplace names for this type should be default enabled. */
  readonly treat_missing_as_default: boolean
  readonly settings: Record<string, AutoplaceSetting>
}

interface AutoplaceControl {
  /**
   * For things that are placed as spots such as ores and enemy bases, frequency is generally proportional to number
   * of spots placed per unit area. For continuous features such as forests, frequency is how compressed the
   * probability function is over distance, i.e. the inverse of 'scale' (similar to terrain_segmentation). When the
   * {@link LuaAutoplaceControlPrototype} is of the category `"terrain"`, then scale is shown in the map generator GUI
   * instead of frequency.
   */
  readonly frequency: MapGenSize
  /**
   * For things that are placed as spots, size is proportional to the area of each spot. For continuous features, size
   * affects how much of the map is covered with the thing, and is called 'coverage' in the GUI.
   */
  readonly size: MapGenSize
  /**
   * Has different effects for different things, but generally affects the 'health' or density of a thing that is
   * placed without affecting where it is placed. For trees, richness affects tree health. For ores, richness
   * multiplies the amount of ore at any given tile in a patch. Metadata about autoplace controls (such as whether or
   * not 'richness' does anything for them) can be found in the {@link LuaAutoplaceControlPrototype} by looking up
   * `game.autoplace_control_prototypes[(control prototype name)]`, e.g.
   * `game.autoplace_control_prototypes["enemy-base"].richness` is false, because enemy base autoplacement doesn't use
   * richness.
   */
  readonly richness: MapGenSize
}

interface CliffPlacementSettings {
  /** Name of the cliff prototype. */
  readonly name: string
  /**
   * Elevation at which the first row of cliffs is placed. The default is `10`, and this cannot be set from the map
   * generation GUI.
   */
  readonly cliff_elevation_0: float
  /**
   * Elevation difference between successive rows of cliffs. This is inversely proportional to 'frequency' in the map
   * generation GUI. Specifically, when set from the GUI the value is `40 / frequency`.
   */
  readonly cliff_elevation_interval: float
  /**
   * Corresponds to 'continuity' in the GUI. This value is not used directly, but is used by the 'cliffiness' noise
   * expression, which in combination with elevation and the two cliff elevation properties drives cliff placement
   * (cliffs are placed when elevation crosses the elevation contours defined by `cliff_elevation_0` and
   * `cliff_elevation_interval` when 'cliffiness' is greater than `0.5`). The default 'cliffiness' expression
   * interprets this value such that larger values result in longer unbroken walls of cliffs, and smaller values
   * (between `0` and `1`) result in larger gaps in cliff walls.
   */
  readonly richness: MapGenSize
}

interface MapGenSettingsRead {
  /**
   * The inverse of 'water scale' in the map generator GUI. Lower `terrain_segmentation` increases the scale of
   * elevation features (lakes, continents, etc). This behavior can be overridden with alternate elevation generators
   * (see `property_expression_names`, below).
   */
  readonly terrain_segmentation: MapGenSize
  /**
   * The equivalent to 'water coverage' in the map generator GUI. Specifically, when this value is non-zero,
   * `water_level = 10 * log2` (the value of this field), and the elevation generator subtracts water level from
   * elevation before adding starting lakes. If water is set to 'none', elevation is clamped to a small positive value
   * before adding starting lakes. This behavior can be overridden with alternate elevation generators (see
   * `property_expression_names`, below).
   */
  readonly water: MapGenSize
  /** Indexed by autoplace control prototype name. */
  readonly autoplace_controls: Record<string, AutoplaceControl>
  /** Whether undefined `autoplace_controls` should fall back to the default controls or not. Defaults to `true`. */
  readonly default_enable_all_autoplace_controls: boolean
  /**
   * Each setting in this dictionary maps the string type to the settings for that type. Valid types are `"entity"`,
   * `"tile"` and `"decorative"`.
   */
  readonly autoplace_settings: Record<string, AutoplaceSettings>
  /** Map generation settings for entities of the type "cliff". */
  readonly cliff_settings: CliffPlacementSettings
  /** The random seed used to generated this map. */
  readonly seed: uint
  /**
   * Width in tiles. If `0`, the map has 'infinite' width, with the actual limitation being one million tiles in each
   * direction from the center.
   */
  readonly width: uint
  /**
   * Height in tiles. If `0`, the map has 'infinite' height, with the actual limitation being one million tiles in
   * each direction from the center.
   */
  readonly height: uint
  /** Size of the starting area. */
  readonly starting_area: MapGenSize
  /** Positions of the starting areas. */
  readonly starting_points: PositionTable[]
  /** Whether peaceful mode is enabled for this map. */
  readonly peaceful_mode: boolean
  /**
   * Overrides for tile property value generators. Values either name a NamedNoiseExpression or can be literal
   * numbers, stored as strings (e.g. `"5"`). All other controls can be overridden by a property expression names.
   * Notable properties:
   *
   * - `moisture` - a value between 0 and 1 that determines whether a tile becomes sandy (low moisture) or grassy (high moisture).
   * - `aux` - a value between 0 and 1 that determines whether low-moisture tiles become sand or red desert.
   * - `temperature` - provides a value (vaguely representing degrees Celsius, varying between -20 and 50) that is used
   *   (together with moisture and aux) as part of tree and decorative placement.
   * - `elevation` - tiles values less than zero become water. Cliffs are placed along certain contours according to
   *   {@link CliffPlacementSettings}.
   * - `cliffiness` - determines whether (when >0.5) or not (when <0.5) a cliff will be placed at an otherwise suitable
   *   (according to {@link CliffPlacementSettings}) location.
   * - `enemy-base-intensity` - a number that is referenced by both `enemy-base-frequency` and `enemy-base-radius`. i.e.
   *   if this is overridden, enemy base frequency and size will both be affected and do something reasonable. By
   *   default, this expression returns a value proportional to distance from any starting point, clamped at about 7.
   * - `enemy-base-frequency` - a number representing average number of enemy bases per tile for a region, by default in
   *   terms of `enemy-base-intensity`.
   * - `enemy-base-radius` - a number representing the radius of an enemy base, if one were to be placed on the given
   *   tile, by default proportional to a constant plus `enemy-base-intensity`. Climate controls ('Moisture' and
   *   'Terrain type' at the bottom of the Terrain tab in the map generator GUI) don't have their own dedicated
   *   structures in MapGenSettings. Instead, their values are stored as property expression overrides with long names:
   * - `control-setting:moisture:frequency:multiplier` - frequency (inverse of scale) multiplier for moisture noise. Default is 1.
   * - `control-setting:moisture:bias` - global bias for moisture (which normally varies between 0 and 1). Default is 0.
   * - `control-setting:aux:frequency:multiplier` - frequency (inverse of scale) multiplier for aux (called 'terrain
   *   type' in the GUI) noise. Default is 1.
   * - `control-setting:aux:bias` - global bias for aux/terrain type (which normally varies between 0 and 1). Default is
   *   0. All other MapGenSettings feed into named noise expressions, and therefore placement can be overridden by
   *   including the name of a property in this dictionary. The probability and richness functions for placing
   *   specific tiles, entities, and decoratives can be overridden by including an entry named
   *   `{tile|entity|decorative}:(prototype name):{probability|richness}`.
   */
  readonly property_expression_names: Record<string, string>
}

/**
 * The 'map type' dropdown in the map generation GUI is actually a selector for elevation generator. The base game sets
 * `property_expression_names.elevation` to `"0_16-elevation"` to reproduce terrain from 0.16 or to `"0_17-island"` for
 * the island preset. If generators are available for other properties, the 'map type' dropdown in the GUI will be
 * renamed to 'elevation' and shown along with selectors for the other selectable properties.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#MapGenSettings View documentation}
 *
 * @example
 *   Assuming a NamedNoiseExpression with the name "my-alternate-grass1-probability" is defined
 *
 *   ```lua
 *   local surface = game.player.surface
 *   local mgs = surface.map_gen_settings
 *   mgs.property_expression_names["tile:grass1:probability"] = "my-alternate-grass1-probability"
 *   surface.map_gen_settings = mgs
 *   ``` would override the probability of grass1 being placed at any given point on the current surface.
 *
 * @example
 *   To make there be no deep water on (newly generated chunks) a surface:
 *
 *   ```lua
 *   local surface = game.player.surface
 *   local mgs = surface.map_gen_settings
 *   mgs.property_expression_names["tile:deepwater:probability"] = -1000
 *   surface.map_gen_settings = mgs
 *   ``` This does not require a NamedNoiseExpression to be defined, since literal numbers (and strings naming literal numbers, e.g. `"123"`) are understood to stand for constant value expressions.
 */
interface MapGenSettings {
  /**
   * The inverse of 'water scale' in the map generator GUI. Lower `terrain_segmentation` increases the scale of
   * elevation features (lakes, continents, etc). This behavior can be overridden with alternate elevation generators
   * (see `property_expression_names`, below).
   */
  readonly terrain_segmentation: MapGenSize
  /**
   * The equivalent to 'water coverage' in the map generator GUI. Specifically, when this value is non-zero,
   * `water_level = 10 * log2` (the value of this field), and the elevation generator subtracts water level from
   * elevation before adding starting lakes. If water is set to 'none', elevation is clamped to a small positive value
   * before adding starting lakes. This behavior can be overridden with alternate elevation generators (see
   * `property_expression_names`, below).
   */
  readonly water: MapGenSize
  /** Indexed by autoplace control prototype name. */
  readonly autoplace_controls: Record<string, AutoplaceControl>
  /** Whether undefined `autoplace_controls` should fall back to the default controls or not. Defaults to `true`. */
  readonly default_enable_all_autoplace_controls: boolean
  /**
   * Each setting in this dictionary maps the string type to the settings for that type. Valid types are `"entity"`,
   * `"tile"` and `"decorative"`.
   */
  readonly autoplace_settings: Record<string, AutoplaceSettings>
  /** Map generation settings for entities of the type "cliff". */
  readonly cliff_settings: CliffPlacementSettings
  /** The random seed used to generated this map. */
  readonly seed: uint
  /**
   * Width in tiles. If `0`, the map has 'infinite' width, with the actual limitation being one million tiles in each
   * direction from the center.
   */
  readonly width: uint
  /**
   * Height in tiles. If `0`, the map has 'infinite' height, with the actual limitation being one million tiles in
   * each direction from the center.
   */
  readonly height: uint
  /** Size of the starting area. */
  readonly starting_area: MapGenSize
  /** Positions of the starting areas. */
  readonly starting_points: readonly Position[]
  /** Whether peaceful mode is enabled for this map. */
  readonly peaceful_mode: boolean
  /**
   * Overrides for tile property value generators. Values either name a NamedNoiseExpression or can be literal
   * numbers, stored as strings (e.g. `"5"`). All other controls can be overridden by a property expression names.
   * Notable properties:
   *
   * - `moisture` - a value between 0 and 1 that determines whether a tile becomes sandy (low moisture) or grassy (high moisture).
   * - `aux` - a value between 0 and 1 that determines whether low-moisture tiles become sand or red desert.
   * - `temperature` - provides a value (vaguely representing degrees Celsius, varying between -20 and 50) that is used
   *   (together with moisture and aux) as part of tree and decorative placement.
   * - `elevation` - tiles values less than zero become water. Cliffs are placed along certain contours according to
   *   {@link CliffPlacementSettings}.
   * - `cliffiness` - determines whether (when >0.5) or not (when <0.5) a cliff will be placed at an otherwise suitable
   *   (according to {@link CliffPlacementSettings}) location.
   * - `enemy-base-intensity` - a number that is referenced by both `enemy-base-frequency` and `enemy-base-radius`. i.e.
   *   if this is overridden, enemy base frequency and size will both be affected and do something reasonable. By
   *   default, this expression returns a value proportional to distance from any starting point, clamped at about 7.
   * - `enemy-base-frequency` - a number representing average number of enemy bases per tile for a region, by default in
   *   terms of `enemy-base-intensity`.
   * - `enemy-base-radius` - a number representing the radius of an enemy base, if one were to be placed on the given
   *   tile, by default proportional to a constant plus `enemy-base-intensity`. Climate controls ('Moisture' and
   *   'Terrain type' at the bottom of the Terrain tab in the map generator GUI) don't have their own dedicated
   *   structures in MapGenSettings. Instead, their values are stored as property expression overrides with long names:
   * - `control-setting:moisture:frequency:multiplier` - frequency (inverse of scale) multiplier for moisture noise. Default is 1.
   * - `control-setting:moisture:bias` - global bias for moisture (which normally varies between 0 and 1). Default is 0.
   * - `control-setting:aux:frequency:multiplier` - frequency (inverse of scale) multiplier for aux (called 'terrain
   *   type' in the GUI) noise. Default is 1.
   * - `control-setting:aux:bias` - global bias for aux/terrain type (which normally varies between 0 and 1). Default is
   *   0. All other MapGenSettings feed into named noise expressions, and therefore placement can be overridden by
   *   including the name of a property in this dictionary. The probability and richness functions for placing
   *   specific tiles, entities, and decoratives can be overridden by including an entry named
   *   `{tile|entity|decorative}:(prototype name):{probability|richness}`.
   */
  readonly property_expression_names: Record<string, string>
}

interface SignalID {
  /** `"item"`, `"fluid"`, or `"virtual"`. */
  readonly type: "item" | "fluid" | "virtual"
  /** Name of the item, fluid or virtual signal. */
  readonly name?: string
}

/**
 * An actual signal transmitted by the network.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#Signal View documentation}
 */
interface Signal {
  /** ID of the signal. */
  readonly signal: SignalID
  /** Value of the signal. */
  readonly count: int
}

interface UpgradeFilter {
  /** `"item"`, or `"entity"`. */
  readonly type: "item" | "entity"
  /** Name of the item, or entity. */
  readonly name?: string
}

/**
 * A single filter used by an infinity-filters instance.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#InfinityInventoryFilter View documentation}
 */
interface InfinityInventoryFilter {
  /** Name of the item. */
  readonly name: string
  /** The count of the filter. */
  readonly count?: uint
  /** `"at-least"`, `"at-most"`, or `"exactly"`. Defaults to `"at-least"`. */
  readonly mode?: "at-least" | "at-most" | "exactly"
  /** The index of this filter in the filters list. */
  readonly index: uint
}

/**
 * A single filter used by an infinity-pipe type entity.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#InfinityPipeFilter View documentation}
 */
interface InfinityPipeFilter {
  /** Name of the fluid. */
  readonly name: string
  /** The fill percentage the pipe (e.g. 0.5 for 50%). Can't be negative. */
  readonly percentage?: double
  /** The temperature of the fluid. Defaults to the default/minimum temperature of the fluid. */
  readonly temperature?: double
  /** `"at-least"`, `"at-most"`, `"exactly"`, `"add"`, or `"remove"`. Defaults to `"at-least"`. */
  readonly mode?: "at-least" | "at-most" | "exactly" | "add" | "remove"
}

interface FluidBoxFilter {
  /** Fluid prototype name of the filtered fluid. */
  readonly name: string
  /** The minimum temperature allowed into the fluidbox. */
  readonly minimum_temperature: double
  /** The maximum temperature allowed into the fluidbox. */
  readonly maximum_temperature: double
}

interface FluidBoxFilterSpec {
  /** Fluid prototype name of the filtered fluid. */
  readonly name: string
  /** The minimum temperature allowed into the fluidbox. */
  readonly minimum_temperature?: double
  /** The maximum temperature allowed into the fluidbox. */
  readonly maximum_temperature?: double
  /** Force the filter to be set, regardless of current fluid content. */
  readonly force?: boolean
}

/**
 * The settings used by a heat-interface type entity.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#HeatSetting View documentation}
 */
interface HeatSetting {
  /** The target temperature. Defaults to the minimum temperature of the heat buffer. */
  readonly temperature?: double
  /** `"at-least"`, `"at-most"`, `"exactly"`, `"add"`, or `"remove"`. Defaults to `"at-least"`. */
  readonly mode?: "at-least" | "at-most" | "exactly" | "add" | "remove"
}

interface HeatConnection {
  readonly position: Vector
  readonly direction: defines.direction
}

/**
 * A definition of a fluidbox connection point.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#FluidBoxConnection View documentation}
 */
interface FluidBoxConnection {
  /** The connection type: "input", "output", or "input-output". */
  readonly type: "input" | "output" | "input-output"
  /** The 4 cardinal direction connection points for this pipe. This vector is a table with `x` and `y` keys instead of an array. */
  readonly positions: PositionTable[]
  /** The maximum tile distance this underground connection can connect at if this is an underground pipe. */
  readonly max_underground_distance?: uint
}

interface ArithmeticCombinatorParameters {
  /** First signal to use in an operation. If not specified, the second argument will be the value of `first_constant`. */
  readonly first_signal?: SignalID
  /** Second signal to use in an operation. If not specified, the second argument will be the value of `second_constant`. */
  readonly second_signal?: SignalID
  /** Constant to use as the first argument of the operation. Has no effect when `first_signal` is set. Defaults to `0`. */
  readonly first_constant?: int
  /** Constant to use as the second argument of the operation. Has no effect when `second_signal` is set. Defaults to `0`. */
  readonly second_constant?: int
  /**
   * Must be one of `"*"`, `"/"`, `"+"`, `"-"`, `"%"`, `"^"`, `"<<"`, `">>"`, `"AND"`, `"OR"`, `"XOR"`. When not
   * specified, defaults to `"*"`.
   */
  readonly operation?: "*" | "/" | "+" | "-" | "%" | "^" | "<<" | ">>" | "AND" | "OR" | "XOR"
  /** Specifies the signal to output. */
  readonly output_signal?: SignalID
}

interface ConstantCombinatorParameters {
  /** Signal to emit. */
  readonly signal: SignalID
  /** Value of the signal to emit. */
  readonly count: int
  /** Index of the constant combinator's slot to set this signal to. */
  readonly index: uint
}

/**
 * A {@link string} that specifies how the inputs should be compared.
 *
 * **Note**: While the API accepts both versions for `"less/greater than or equal to"` and `"not equal"`, it'll always
 * return `"≥"`, `"≤"` or `"≠"` respectively when reading them back.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#ComparatorString View documentation}
 */
type ComparatorString /** "equal to" */ =
  | "=" /** "greater than" */
  | ">" /** "lesser than" */
  | "<" /** "greater than or equal to" */
  | "\u2265" /** "greater than or equal to" */
  | ">=" /** "lesser than or equal to" */
  | "\u2264" /** "lesser than or equal to" */
  | "<=" /** "not equal to" */
  | "\u2260" /** "not equal to" */
  | "!="

interface DeciderCombinatorParameters {
  /** Defaults to blank. */
  readonly first_signal?: SignalID
  /**
   * Second signal to use in an operation, if any. If this is not specified, the second argument to a decider
   * combinator's operation is assumed to be the value of `constant`.
   */
  readonly second_signal?: SignalID
  /** Constant to use as the second argument of operation. Defaults to `0`. */
  readonly constant?: uint
  /** Specifies how the inputs should be compared. If not specified, defaults to `"<"`. */
  readonly comparator?: ComparatorString
  /** Defaults to blank. */
  readonly output_signal?: SignalID
  /** Defaults to `true`. When `false`, will output a value of `1` for the given `output_signal`. */
  readonly copy_count_from_input?: boolean
}

interface InserterCircuitConditions {
  readonly circuit?: CircuitCondition
  readonly logistics?: CircuitCondition
}

interface CircuitCondition {
  /** Specifies how the inputs should be compared. If not specified, defaults to `"<"`. */
  readonly comparator?: ComparatorString
  /** Defaults to blank */
  readonly first_signal?: SignalID
  /** What to compare `first_signal` to. If not specified, `first_signal` will be compared to `constant`. */
  readonly second_signal?: SignalID
  /**
   * Constant to compare `first_signal` to. Has no effect when `second_signal` is set. When neither `second_signal`
   * nor `constant` are specified, the effect is as though `constant` were specified with the value `0`.
   */
  readonly constant?: int
}

interface CircuitConditionDefinition {
  readonly condition: CircuitCondition
  /** Whether the condition is currently fulfilled */
  readonly fulfilled?: boolean
}

interface CircuitConnectionDefinition {
  /** Wire color, either {@link defines.wire_type.red} or {@link defines.wire_type.green}. */
  readonly wire: defines.wire_type
  readonly target_entity: LuaEntity
  readonly source_circuit_id: defines.circuit_connector_id
  readonly target_circuit_id: defines.circuit_connector_id
}

interface WireConnectionDefinition {
  /** Wire color, either {@link defines.wire_type.red} or {@link defines.wire_type.green}. */
  readonly wire: defines.wire_type
  /** The entity to (dis)connect the source entity with. */
  readonly target_entity: LuaEntity
  /** Mandatory if the source entity has more than one circuit connection using circuit wire. */
  readonly source_circuit_id?: defines.circuit_connector_id
  /** Mandatory if the target entity has more than one circuit connection using circuit wire. */
  readonly target_circuit_id?: defines.circuit_connector_id
  /** Mandatory if the source entity has more than one wire connection using copper wire. */
  readonly source_wire_id?: defines.circuit_connector_id
  /** Mandatory if the target entity has more than one wire connection using copper wire. */
  readonly target_wire_id?: defines.circuit_connector_id
}

interface InventoryFilter {
  /** Position of the corresponding filter slot. */
  readonly index: uint
  /** Item prototype name of the item to filter. */
  readonly name: string
}

interface PlaceAsTileResult {
  /** The tile prototype. */
  readonly result: LuaTilePrototype
  readonly condition_size: uint
  readonly condition: CollisionMask
}

interface BaseCommand {
  /** Type of command. The remaining fields depend on the value of this field. */
  readonly type: defines.command
}

interface AttackCommand extends BaseCommand {
  readonly type: defines.command.attack
  readonly target: LuaEntity
  /** Defaults to `defines.distraction.by_enemy`. */
  readonly distraction?: defines.distraction
}

interface GoToLocationCommandRead extends BaseCommand {
  readonly type: defines.command.go_to_location
  /**
   * The position to path to. Either this or `destination_entity` need to be specified. If both are,
   * `destination_entity` is used.
   */
  readonly destination?: PositionTable
  /** The entity to path to. Either this or `destination` need to be specified. If both are, `destination_entity` is used. */
  readonly destination_entity?: LuaEntity
  /** Defaults to `defines.distraction.by_enemy`. */
  readonly distraction?: defines.distraction
  /** Flags that affect pathfinder behavior. */
  readonly pathfind_flags?: PathfinderFlags
  /** How close the pathfinder needs to get to its destination (in tiles). Defaults to `3`. */
  readonly radius?: double
}

interface GoToLocationCommand extends BaseCommand {
  readonly type: defines.command.go_to_location
  /**
   * The position to path to. Either this or `destination_entity` need to be specified. If both are,
   * `destination_entity` is used.
   */
  readonly destination?: Position
  /** The entity to path to. Either this or `destination` need to be specified. If both are, `destination_entity` is used. */
  readonly destination_entity?: LuaEntity
  /** Defaults to `defines.distraction.by_enemy`. */
  readonly distraction?: defines.distraction
  /** Flags that affect pathfinder behavior. */
  readonly pathfind_flags?: PathfinderFlags
  /** How close the pathfinder needs to get to its destination (in tiles). Defaults to `3`. */
  readonly radius?: double
}

interface CompoundCommandRead extends BaseCommand {
  readonly type: defines.command.compound
  /** How the commands should be chained together. */
  readonly structure_type: defines.compound_command
  /** The sub-commands. */
  readonly commands: CommandRead[]
}

interface CompoundCommand extends BaseCommand {
  readonly type: defines.command.compound
  /** How the commands should be chained together. */
  readonly structure_type: defines.compound_command
  /** The sub-commands. */
  readonly commands: Command[]
}

interface GroupCommand extends BaseCommand {
  readonly type: defines.command.group
  /** The group whose command to follow. */
  readonly group: LuaUnitGroup
  /** Defaults to `defines.distraction.by_enemy`. */
  readonly distraction?: defines.distraction
  /** Whether the unit will use the group distraction or the commands distraction. Defaults to true. */
  readonly use_group_distraction?: boolean
}

interface AttackAreaCommandRead extends BaseCommand {
  readonly type: defines.command.attack_area
  /** Center of the attack area. */
  readonly destination: PositionTable
  /** Radius of the attack area. */
  readonly radius: double
  /** Defaults to `defines.distraction.by_enemy`. */
  readonly distraction?: defines.distraction
}

interface AttackAreaCommand extends BaseCommand {
  readonly type: defines.command.attack_area
  /** Center of the attack area. */
  readonly destination: Position
  /** Radius of the attack area. */
  readonly radius: double
  /** Defaults to `defines.distraction.by_enemy`. */
  readonly distraction?: defines.distraction
}

interface WanderCommand extends BaseCommand {
  readonly type: defines.command.wander
  /** Defaults to `defines.distraction.by_enemy`. */
  readonly distraction?: defines.distraction
  /** Defaults to 10. Does not apply when `wander_in_group` is `true`. */
  readonly radius?: double
  /**
   * When commanding a group, defines how the group will wander. When `true`, the units in the group will wander
   * around inside the group's radius, just like gathering biters. When `false`, the units will wander as a group, ie
   * they will all walk together in the same random direction. Default is true for groups. Passing true for a single
   * unit is an error.
   */
  readonly wander_in_group?: boolean
  /** Ticks to wander before successfully completing the command. Default is max uint, which means wander forever. */
  readonly ticks_to_wait?: uint
}

interface StopCommand extends BaseCommand {
  readonly type: defines.command.stop
  /** Defaults to `defines.distraction.by_enemy`. */
  readonly distraction?: defines.distraction
  /** Ticks to wander before successfully completing the command. Default is max uint, which means stop forever. */
  readonly ticks_to_wait?: uint
}

interface FleeCommand extends BaseCommand {
  readonly type: defines.command.flee
  /** The entity to flee from */
  readonly from: LuaEntity
  /** Defaults to `defines.distraction.by_enemy`. */
  readonly distraction?: defines.distraction
}

interface BuildBaseCommandRead extends BaseCommand {
  readonly type: defines.command.build_base
  /** Where to build the base. */
  readonly destination: PositionTable
  /** Defaults to `defines.distraction.by_enemy`. */
  readonly distraction?: defines.distraction
  /**
   * Whether the units should ignore expansion candidate chunks. When `false`, they will obey and not build a base in
   * a non-candidate chunk. Defaults to `false`.
   */
  readonly ignore_planner?: boolean
}

interface BuildBaseCommand extends BaseCommand {
  readonly type: defines.command.build_base
  /** Where to build the base. */
  readonly destination: Position
  /** Defaults to `defines.distraction.by_enemy`. */
  readonly distraction?: defines.distraction
  /**
   * Whether the units should ignore expansion candidate chunks. When `false`, they will obey and not build a base in
   * a non-candidate chunk. Defaults to `false`.
   */
  readonly ignore_planner?: boolean
}

type CommandRead =
  | AttackCommand
  | GoToLocationCommandRead
  | CompoundCommandRead
  | GroupCommand
  | AttackAreaCommandRead
  | WanderCommand
  | StopCommand
  | FleeCommand
  | BuildBaseCommandRead

/**
 * Commands can be given to enemies and unit groups.
 *
 * Other attributes may be specified depending on `type`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#Command View documentation}
 */
type Command =
  | AttackCommand
  | GoToLocationCommand
  | CompoundCommand
  | GroupCommand
  | AttackAreaCommand
  | WanderCommand
  | StopCommand
  | FleeCommand
  | BuildBaseCommand

interface PathfinderFlags {
  /** Allows pathing through friendly entities. Defaults to `false`. */
  readonly allow_destroy_friendly_entities?: boolean
  /** Allows the pathfinder to path through entities of the same force. Defaults to `false`. */
  readonly allow_paths_through_own_entities?: boolean
  /**
   * Enables path caching. This can be more efficient, but might fail to respond to changes in the environment.
   * Defaults to `true`.
   */
  readonly cache?: boolean
  /** Makes the pathfinder try to path in straight lines. Defaults to `false`. */
  readonly prefer_straight_paths?: boolean
  /**
   * Sets lower priority on the path request, meaning it might take longer to find a path at the expense of speeding
   * up others. Defaults to `false`.
   */
  readonly low_priority?: boolean
  /**
   * Makes the pathfinder not break in the middle of processing this pathfind, no matter how much work is needed.
   * Defaults to `false`.
   */
  readonly no_break?: boolean
}

interface UnitSpawnDefinition {
  /** Prototype name of the unit that would be spawned. */
  readonly unit: string
  /** The points at which to spawn the unit. */
  readonly spawn_points: SpawnPointDefinition[]
}

interface SpawnPointDefinition {
  /** Evolution factor for which this weight applies. */
  readonly evolution_factor: double
  /** Probability of spawning this unit at this evolution factor. */
  readonly weight: double
}

interface ItemStackDefinition {
  /** Prototype name of the item the stack holds. */
  readonly name: string
  /** Number of items the stack holds. If not specified, defaults to `1`. */
  readonly count?: uint
  /** Health of the items in the stack. Defaults to `1.0`. */
  readonly health?: float
  /** Durability of the tool items in the stack. */
  readonly durability?: double
  /** Amount of ammo in the ammo items in the stack. */
  readonly ammo?: double
  /** Tags of the items with tags in the stack. */
  readonly tags?: string[]
}

/**
 * - String: The name of the item, which represents a full stack of that item.
 * - ItemStackDefinition: The detailed definition of an item stack.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#SimpleItemStack View documentation}
 *
 * @example
 *   Both of these lines specify an item stack of one iron plate:
 *
 *   ```lua
 *   {name="iron-plate"}
 *   ```
 *
 *   ```lua
 *   {name="iron-plate", count=1}
 *   ```
 *
 * @example
 *   This is a stack of 47 copper plates:
 *
 *   ```lua
 *   {name="copper-plate", count=47}
 *   ```
 *
 * @example
 *   These are both full stacks of iron plates (for iron-plate, a full stack is 100 plates):
 *
 *   ```lua
 *   "iron-plate"
 *   ```
 *
 *   ```lua
 *   {name="iron-plate", count=100}
 *   ```
 */
type SimpleItemStack = string | ItemStackDefinition

/**
 * - String: The fluid name.
 * - LuaFluidPrototype: The fluid prototype.
 * - Fluid: The fluid.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#FluidIdentification View documentation}
 */
type FluidIdentification = string | LuaFluidPrototype | Fluid

/**
 * - String: The force name.
 * - LuaForce: A reference to {@link LuaForce} may be passed directly.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#ForceIdentification View documentation}
 */
type ForceIdentification = string | LuaForce

/**
 * - String: The technology name.
 * - LuaTechnology: A reference to {@link LuaTechnology} may be passed directly.
 * - LuaTechnologyPrototype: A reference to {@link LuaTechnologyPrototype} may be passed directly.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#TechnologyIdentification View documentation}
 */
type TechnologyIdentification = string | LuaTechnology | LuaTechnologyPrototype

/**
 * - Uint: It will be the index of the surface. `nauvis` has index `1`, the first surface-created surface will have index
 *   `2` and so on.
 * - String: It will be the surface name. E.g. `"nauvis"`.
 * - LuaSurface: A reference to {@link LuaSurface} may be passed directly.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#SurfaceIdentification View documentation}
 */
type SurfaceIdentification = uint | string | LuaSurface

/**
 * - Uint: The player index.
 * - String: The player name.
 * - LuaPlayer: A reference to {@link LuaPlayer} may be passed directly.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#PlayerIdentification View documentation}
 */
type PlayerIdentification = uint | string | LuaPlayer

type ItemStackIdentification = SimpleItemStack | LuaItemStack

/**
 * - LuaEntity: The entity.
 * - LuaEntityPrototype: The entity prototype.
 * - String: The prototype name.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#EntityPrototypeIdentification View documentation}
 */
type EntityPrototypeIdentification = LuaEntity | LuaEntityPrototype | string

/**
 * - LuaItemStack: The item.
 * - LuaItemPrototype: The item prototype.
 * - String: The prototype name.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#ItemPrototypeIdentification View documentation}
 */
type ItemPrototypeIdentification = LuaItemStack | LuaItemPrototype | string

interface WaitCondition {
  /**
   * One of `"time"`, `"inactivity"`, `"full"`, `"empty"`, `"item_count"`, `"circuit"`, `"robots_inactive"`,
   * `"fluid_count"`, `"passenger_present"`, `"passenger_not_present"`.
   */
  readonly type:
    | "time"
    | "inactivity"
    | "full"
    | "empty"
    | "item_count"
    | "circuit"
    | "robots_inactive"
    | "fluid_count"
    | "passenger_present"
    | "passenger_not_present"
  /**
   * Either `"and"`, or `"or"`. Tells how this condition is to be compared with the preceding conditions in the
   * corresponding `wait_conditions` array.
   */
  readonly compare_type: "and" | "or"
  /** Number of ticks to wait or of inactivity. Only present when `type` is `"time"` or `"inactivity"`. */
  readonly ticks?: uint
  /** Only present when `type` is `"item_count"`, `"circuit"` or `"fluid_count"`. */
  readonly condition?: CircuitCondition
}

interface TrainScheduleRecord {
  /** Name of the station. */
  readonly station?: string
  /** Rail to path to. Ignored if `station` is present. */
  readonly rail?: LuaEntity
  /**
   * When a train is allowed to reach rail target from any direction it will be `nil`. If rail has to be reached from
   * specific direction, this value allows to choose the direction. This value corresponds to
   * {@link LuaEntity.connected_rail_direction LuaEntity::connected_rail_direction} of a TrainStop.
   */
  readonly rail_direction?: defines.rail_direction
  readonly wait_conditions?: WaitCondition[]
  /** Only present when the station is temporary, the value is then always `true`. */
  readonly temporary?: boolean
}

interface TrainSchedule {
  /** Index of the currently active record */
  readonly current: uint
  readonly records: TrainScheduleRecord[]
}

interface BaseGuiArrowSpecification {
  /**
   * This determines which of the following fields will be required. Must be one of `"nowhere"` (will remove the arrow
   * entirely), `"goal"` (will point to the current goal), `"entity_info"`, `"active_window"`, `"entity"`,
   * `"position"`, `"crafting_queue"` or `"item_stack"` (will point to a given item stack in an inventory). Depending
   * on this value, other fields may have to be specified.
   */
  readonly type:
    | "nowhere"
    | "goal"
    | "entity_info"
    | "active_window"
    | "entity"
    | "position"
    | "crafting_queue"
    | "item_stack"
}

interface EntityGuiArrowSpecification extends BaseGuiArrowSpecification {
  readonly type: "entity"
  readonly entity: LuaEntity
}

interface PositionGuiArrowSpecification extends BaseGuiArrowSpecification {
  readonly type: "position"
  readonly position: Position
}

interface CraftingQueueGuiArrowSpecification extends BaseGuiArrowSpecification {
  readonly type: "crafting_queue"
  /** Index in the crafting queue to point to. */
  readonly crafting_queueindex: uint
}

interface ItemStackGuiArrowSpecification extends BaseGuiArrowSpecification {
  readonly type: "item_stack"
  /** Which inventory the stack is in. */
  readonly inventory_index: defines.inventory
  /** Which stack to point to. */
  readonly item_stack_index: uint
  /** Must be either `"player"`, `"target"`, `"player-quickbar"` or `"player-equipment-bar"`. */
  readonly source: "player" | "target" | "player-quickbar" | "player-equipment-bar"
}

interface NowhereGuiArrowSpecification extends BaseGuiArrowSpecification {
  readonly type: "nowhere"
}

interface GoalGuiArrowSpecification extends BaseGuiArrowSpecification {
  readonly type: "goal"
}

interface EntityInfoGuiArrowSpecification extends BaseGuiArrowSpecification {
  readonly type: "entity_info"
}

interface ActiveWindowGuiArrowSpecification extends BaseGuiArrowSpecification {
  readonly type: "active_window"
}

/**
 * Used for specifying where a GUI arrow should point to.
 *
 * Other attributes may be specified depending on `type`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#GuiArrowSpecification View documentation}
 */
type GuiArrowSpecification =
  | EntityGuiArrowSpecification
  | PositionGuiArrowSpecification
  | CraftingQueueGuiArrowSpecification
  | ItemStackGuiArrowSpecification
  | NowhereGuiArrowSpecification
  | GoalGuiArrowSpecification
  | EntityInfoGuiArrowSpecification
  | ActiveWindowGuiArrowSpecification

interface AmmoType {
  readonly action?: TriggerItem[]
  /**
   * One of `"entity"` (fires at an entity), `"position"` (fires directly at a position), or `"direction"` (fires in a
   * direction).
   */
  readonly target_type: "entity" | "position" | "direction"
  /**
   * When `true`, the gun will be able to shoot even when the target is out of range. Only applies when `target_type`
   * is `position`. The gun will fire at the maximum range in the direction of the target position. Defaults to `false`.
   */
  readonly clamp_position?: boolean
  /** Ammo category of this ammo. */
  readonly category: string
  /** Energy consumption of a single shot, if applicable. Defaults to `0`. */
  readonly energy_consumption?: double
}

interface BeamTarget {
  /** The target entity. */
  readonly entity?: LuaEntity
  /** The target position. */
  readonly position?: PositionTable
}

interface RidingState {
  readonly acceleration: defines.riding.acceleration
  readonly direction: defines.riding.direction
}

type SpriteType =
  | "item"
  | "entity"
  | "technology"
  | "recipe"
  | "item-group"
  | "fluid"
  | "tile"
  | "virtual-signal"
  | "achievement"
  | "equipment"
  | "file"
  | "utility"

/**
 * It is specified by {@link string}. It can be either the name of a
 * {@link https://wiki.factorio.com/Prototype/Sprite sprite prototype} defined in the data stage or a path in form "type/name".
 *
 * The supported types are:
 *
 * - `"item"` - for example "item/iron-plate" is the icon sprite of iron plate
 * - `"entity"` - for example "entity/small-biter" is the icon sprite of the small biter
 * - `"technology"`
 * - `"recipe"`
 * - `"item-group"`
 * - `"fluid"`
 * - `"tile"`
 * - `"virtual-signal"`
 * - `"achievement"`
 * - `"equipment"`
 * - `"file"` - path to an image file located inside the current scenario. This file is not preloaded so it will be
 *   slower; for frequently used sprites, it is better to define sprite prototype and use it instead.
 * - `"utility"` - sprite defined in the utility-sprites object, these are the pictures used by the game internally for the UI.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#SpritePath View documentation}
 */
type SpritePath = string | `${SpriteType}/${string}`

/**
 * A sound defined by a {@link string}. It can be either the name of a
 * {@link https://wiki.factorio.com/Prototype/Sound sound prototype} defined in the data stage or a path in the form
 * `"type/name"`. The latter option can be sorted into three categories.
 *
 * The utility and ambient types each contain general use sound prototypes defined by the game itself.
 *
 * - `"utility"` - Uses the {@link https://wiki.factorio.com/Prototype/UtilitySounds UtilitySounds} prototype. Example:
 *   `"utility/wire_connect_pole"`
 * - `"ambient"` - Uses {@link https://wiki.factorio.com/Prototype/AmbientSound AmbientSound} prototypes. Example:
 *   `"ambient/resource-deficiency"`
 *
 * The following types can be combined with any tile name as long as its prototype defines the
 *
 *     corresponding sound.
 *
 * - `"tile-walking"` - Uses {@link https://wiki.factorio.com/Prototype/Tile#walking_sound Tile::walking_sound}. Example:
 *   `"tile-walking/concrete"`
 * - `"tile-mined"` - Uses {@link https://wiki.factorio.com/Prototype/Tile#mined_sound Tile::mined_sound}
 * - `"tile-build-small"` - Uses {@link https://wiki.factorio.com/Prototype/Tile#build_sound Tile::build_sound}. Example:
 *   `"tile-build-small/concrete"`
 * - `"tile-build-medium"` - Uses {@link https://wiki.factorio.com/Prototype/Tile#build_sound Tile::build_sound}
 * - `"tile-build-large"` - Uses {@link https://wiki.factorio.com/Prototype/Tile#build_sound Tile::build_sound}
 *
 * The following types can be combined with any entity name as long as its prototype defines the
 *
 *     corresponding sound.
 *
 * - `"entity-build"` - Uses {@link https://wiki.factorio.com/Prototype/Entity#build_sound Entity::build_sound}. Example:
 *   `"entity-build/wooden-chest"`
 * - `"entity-mined"` - Uses {@link https://wiki.factorio.com/Prototype/Entity#mined_sound Entity::mined_sound}
 * - `"entity-mining"` - Uses {@link https://wiki.factorio.com/Prototype/Entity#mining_sound Entity::mining_sound}
 * - `"entity-vehicle_impact"` - Uses
 *   {@link https://wiki.factorio.com/Prototype/Entity#vehicle_impact_sound Entity::vehicle_impact_sound}
 * - `"entity-rotated"` - Uses {@link https://wiki.factorio.com/Prototype/Entity#rotated_sound Entity::rotated_sound}
 * - `"entity-open"` - Uses {@link https://wiki.factorio.com/Prototype/Entity#open_sound Entity::open_sound}
 * - `"entity-close"` - Uses {@link https://wiki.factorio.com/Prototype/Entity#close_sound Entity::close_sound}
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#SoundPath View documentation}
 */
type SoundPath = string | `${SoundType}/${string}`

interface ModuleEffectValue {
  /** The percentual increase of the attribute. A value of `0.6` means a 60% increase. */
  readonly bonus: float
}

/**
 * {@link https://lua-api.factorio.com/latest/Concepts.html#ModuleEffects View documentation}
 *
 * @example
 *   These are the effects of the vanilla Productivity Module 3 (up to floating point imprecisions):
 *
 *   ```lua
 *   {consumption={bonus=0.6},
 *   speed={bonus=-0.15},
 *   productivity={bonus=0.06},
 *   pollution={bonus=0.075}}
 *   ```
 */
interface ModuleEffects {
  readonly consumption?: ModuleEffectValue
  readonly speed?: ModuleEffectValue
  readonly productivity?: ModuleEffectValue
  readonly pollution?: ModuleEffectValue
}

/**
 * This is a set of flags given as a dictionary[{@link string} → {@link boolean}]. When a flag is set, it is present in
 * the dictionary with the value `true`. Unset flags aren't present in the dictionary at all. So, the boolean value is
 * meaningless and exists just for easy table lookup if a flag is set.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#EntityPrototypeFlags View documentation}
 */
interface EntityPrototypeFlags {
  readonly "not-rotatable"?: boolean
  readonly "placeable-neutral"?: boolean
  readonly "placeable-player"?: boolean
  readonly "placeable-enemy"?: boolean
  readonly "placeable-off-grid"?: boolean
  readonly "player-creation"?: boolean
  readonly "building-direction-8-way"?: boolean
  readonly "filter-directions"?: boolean
  readonly "fast-replaceable-no-build-while-moving"?: boolean
  readonly "breaths-air"?: boolean
  readonly "not-repairable"?: boolean
  readonly "not-on-map"?: boolean
  readonly "not-deconstructable"?: boolean
  readonly "not-blueprintable"?: boolean
  readonly hidden?: boolean
  readonly "hide-alt-info"?: boolean
  readonly "fast-replaceable-no-cross-type-while-moving"?: boolean
  readonly "no-gap-fill-while-building"?: boolean
  readonly "not-flammable"?: boolean
  readonly "no-automated-item-removal"?: boolean
  readonly "no-automated-item-insertion"?: boolean
  readonly "no-copy-paste"?: boolean
  readonly "not-selectable-in-game"?: boolean
  readonly "not-upgradable"?: boolean
  readonly "not-in-kill-statistics"?: boolean
}

/**
 * This is a set of flags given as dictionary[{@link string} → {@link boolean}]. When a flag is set, it is present in the
 * dictionary with the value `true`. Unset flags aren't present in the dictionary at all. So, the boolean value is
 * meaningless and exists just for easy table lookup if a flag is set.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#ItemPrototypeFlags View documentation}
 */
interface ItemPrototypeFlags {
  readonly "draw-logistic-overlay"?: boolean
  readonly hidden?: boolean
  readonly "always-show"?: boolean
  readonly "hide-from-bonus-gui"?: boolean
  readonly "hide-from-fuel-tooltip"?: boolean
  readonly "not-stackable"?: boolean
  readonly "can-extend-inventory"?: boolean
  readonly "primary-place-result"?: boolean
  readonly "mod-openable"?: boolean
  readonly "only-in-cursor"?: boolean
  readonly spawnable?: boolean
}

/**
 * A {@link string} specifying a collision mask layer.
 *
 * Possible values for the string are:
 *
 * - `"ground-tile"`
 * - `"water-tile"`
 * - `"resource-layer"`
 * - `"doodad-layer"`
 * - `"floor-layer"`
 * - `"item-layer"`
 * - `"ghost-layer"`
 * - `"object-layer"`
 * - `"player-layer"`
 * - `"train-layer"`
 * - `"rail-layer"`
 * - `"transport-belt-layer"`
 * - `"not-setup"`
 *
 * Additionally the values `"layer-13"` through `"layer-55"`. These layers are currently unused by the game but may
 * change. If a mod is going to use one of the unused layers it's recommended to start at the higher layers because the
 * base game will take from the lower ones.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#CollisionMaskLayer View documentation}
 */
type CollisionMaskLayer =
  | "ground-tile"
  | "water-tile"
  | "resource-layer"
  | "doodad-layer"
  | "floor-layer"
  | "item-layer"
  | "ghost-layer"
  | "object-layer"
  | "player-layer"
  | "train-layer"
  | "rail-layer"
  | "transport-belt-layer"
  | "not-setup"
  | `layer-${number}`

/**
 * This is a set of masks given as a dictionary[{@link CollisionMaskLayer} → {@link boolean}]. Only set masks are present
 * in the dictionary and they have the value `true`. Unset flags aren't present at all.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#CollisionMask View documentation}
 */
type CollisionMask = {
  readonly [P in CollisionMaskLayer]?: true
}

/**
 * A {@link CollisionMask} but also includes any flags this mask has.
 *
 * Flags such as:
 *
 * - `"not-colliding-with-itself"`
 * - `"consider-tile-transitions"`
 * - `"colliding-with-tiles-only"`
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#CollisionMaskWithFlags View documentation}
 */
type CollisionMaskWithFlags = {
  readonly [P in
    | CollisionMaskLayer
    | "not-colliding-with-itself"
    | "consider-tile-transitions"
    | "colliding-with-tiles-only"]?: true
}

/**
 * This is a set of trigger target masks given as a dictionary[{@link string} → {@link boolean}].
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#TriggerTargetMask View documentation}
 */
type TriggerTargetMask = {
  readonly [P in string]?: true
}

interface TriggerEffectItem {
  /**
   * One of`"damage"`, `"create-entity"`, `"create-explosion"`, `"create-fire"`, `"create-smoke"`,
   * `"create-trivial-smoke"`, `"create-particle"`, `"create-sticker"`, `"nested-result"`, `"play-sound"`,
   * `"push-back"`, `"destroy-cliffs"`, `"show-explosion-on-chart"`, `"insert-item"`, `"script"`.
   */
  readonly type:
    | "damage"
    | "create-entity"
    | "create-explosion"
    | "create-fire"
    | "create-smoke"
    | "create-trivial-smoke"
    | "create-particle"
    | "create-sticker"
    | "nested-result"
    | "play-sound"
    | "push-back"
    | "destroy-cliffs"
    | "show-explosion-on-chart"
    | "insert-item"
    | "script"
  readonly repeat_count: uint
  readonly affects_target: boolean
  readonly show_in_tooltip: boolean
}

interface TriggerDelivery {
  /** One of `"instant"`, `"projectile"`, `"flame-thrower"`, `"beam"`, `"stream"`, `"artillery"`. */
  readonly type: "instant" | "projectile" | "flame-thrower" | "beam" | "stream" | "artillery"
  readonly source_effects: TriggerEffectItem[]
  readonly target_effects: TriggerEffectItem[]
}

interface TriggerItem {
  /** One of `"direct"`, `"area"`, `"line"`, `"cluster"`. */
  readonly type: "direct" | "area" | "line" | "cluster"
  readonly action_delivery?: TriggerDelivery[]
  /** The trigger will only affect entities that contain any of these flags. */
  readonly entity_flags?: EntityPrototypeFlags
  readonly ignore_collision_condition: boolean
  /** The trigger will only affect entities that would collide with given collision mask. */
  readonly collision_mask: CollisionMask
  readonly trigger_target_mask: TriggerTargetMask
  /**
   * If `"enemy"`, the trigger will only affect entities whose force is different from the attacker's and for which
   * there is no cease-fire set. `"ally"` is the opposite of `"enemy"`.
   */
  readonly force: ForceCondition
  readonly repeat_count: uint
}

interface CircularParticleCreationSpecification {
  /** Name of the {@link LuaEntityPrototype} */
  readonly name: string
  readonly direction: float
  readonly direction_deviation: float
  readonly speed: float
  readonly speed_deviation: float
  readonly starting_frame_speed: float
  readonly starting_frame_speed_deviation: float
  readonly height: float
  readonly height_deviation: float
  readonly vertical_speed: float
  readonly vertical_speed_deviation: float
  /** This vector is a table with `x` and `y` keys instead of an array. */
  readonly center: PositionTable
  readonly creation_distance: double
  readonly creation_distance_orientation: double
  readonly use_source_position: boolean
}

/**
 * An array with the following members:
 *
 * - A {@link RealOrientation}
 * - A {@link Vector}
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#CircularProjectileCreationSpecification View documentation}
 */
type CircularProjectileCreationSpecification = [RealOrientation, Vector]

interface AttackParameterFluid {
  /** Name of the {@link LuaFluidPrototype}. */
  readonly type: string
  /** Multiplier applied to the damage of an attack. */
  readonly damage_modifier: double
}

interface BaseAttackParameters {
  /** The type of AttackParameter. One of `'projectile'`, `'stream'` or `'beam'`. */
  readonly type: "projectile" | "stream" | "beam"
  /** Maximum range of attack. */
  readonly range: float
  /** Minimum range of attack. Used with flamethrower turrets to prevent self-immolation. */
  readonly min_range: float
  /** Defines how the range is determined. Either `'center-to-center'` or `'bounding-box-to-bounding-box'`. */
  readonly range_mode: "center-to-center" | "bounding-box-to-bounding-box"
  /** When searching for the nearest enemy to attack, `fire_penalty` is added to the enemy's distance if they are on fire. */
  readonly fire_penalty: float
  /**
   * When searching for an enemy to attack, a higher `rotate_penalty` will discourage targeting enemies that would
   * take longer to turn to face.
   */
  readonly rotate_penalty: float
  /**
   * When searching for an enemy to attack, a higher `health_penalty` will discourage targeting enemies with high
   * health. A negative penalty will do the opposite.
   */
  readonly health_penalty: float
  /**
   * If less than `range`, the entity will choose a random distance between `range` and `min_attack_distance` and
   * attack from that distance. Used for spitters.
   */
  readonly min_attack_distance: float
  /** The arc that the entity can attack in as a fraction of a circle. A value of `1` means the full 360 degrees. */
  readonly turn_range: float
  /** Multiplier applied to the damage of an attack. */
  readonly damage_modifier: float
  /** Multiplier applied to the ammo consumption of an attack. */
  readonly ammo_consumption_modifier: float
  /** Minimum amount of ticks between shots. If this is less than `1`, multiple shots can be performed per tick. */
  readonly cooldown: float
  /** Number of ticks it takes for the weapon to actually shoot after it has been ordered to do so. */
  readonly warmup: uint
  readonly movement_slow_down_factor: double
  readonly movement_slow_down_cooldown: float
  readonly ammo_type?: AmmoType
  /** List of the names of compatible {@link LuaAmmoCategoryPrototype LuaAmmoCategoryPrototypes}. */
  readonly ammo_categories?: string[]
}

interface ProjectileAttackParameters extends BaseAttackParameters {
  readonly type: "projectile"
  readonly projectile_center: Vector
  readonly projectile_creation_distance: float
  readonly projectile_orientation_offset: float
  readonly shell_particle?: CircularParticleCreationSpecification
  readonly projectile_creation_parameters?: CircularProjectileCreationSpecification[]
}

interface StreamAttackParameters extends BaseAttackParameters {
  readonly type: "stream"
  readonly gun_barrel_length: float
  readonly gun_center_shift: Record<string, Vector>
  readonly fluid_consumption: float
  readonly fluids?: AttackParameterFluid[]
  readonly projectile_creation_parameters?: CircularProjectileCreationSpecification[]
}

interface BeamAttackParameters extends BaseAttackParameters {
  readonly type: "beam"
}

/**
 * Other attributes may be specified depending on `type`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#AttackParameters View documentation}
 */
type AttackParameters = ProjectileAttackParameters | StreamAttackParameters | BeamAttackParameters

interface CapsuleAction {
  /** One of `"throw"`, `"equipment-remote"`, `"use-on-self"`. */
  readonly type: "throw" | "equipment-remote" | "use-on-self"
  /** Only present when `type` is `"throw"` or `"use-on-self"`. */
  readonly attack_parameters?: AttackParameters
  /** Only present when `type` is `"equipment-remote"`. It is the equipment prototype name. */
  readonly equipment?: string
}

/**
 * This is a set of flags given as a dictionary[{@link string} → {@link boolean}]. Set flags are present in the dictionary
 * with the value `true`; unset flags aren't present at all.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#SelectionModeFlags View documentation}
 */
interface SelectionModeFlags {
  /** Entities that can be selected for blueprint. */
  readonly blueprint?: boolean
  /** Entities that can be marked for deconstruction. */
  readonly deconstruct?: boolean
  /** Entities that can be marked for deconstruction cancelling. */
  readonly "cancel-deconstruct"?: boolean
  readonly items?: boolean
  readonly trees?: boolean
  /** Buildable entities. */
  readonly "buildable-type"?: boolean
  /** Only select an area. */
  readonly nothing?: boolean
  /** Entities that can be placed using an item. */
  readonly "items-to-place"?: boolean
  readonly "any-entity"?: boolean
  readonly "any-tile"?: boolean
  /** Entities with the same force as the selector. */
  readonly "same-force"?: boolean
  readonly "not-same-force"?: boolean
  readonly friend?: boolean
  readonly enemy?: boolean
  readonly upgrade?: boolean
  readonly "cancel-upgrade"?: boolean
  readonly "entity-with-health"?: boolean
  readonly "entity-with-force"?: boolean
  readonly "entity-with-owner"?: boolean
}

interface LogisticFilter {
  /** The index this filter applies to. */
  readonly index: uint
  /** The item name for this filter. */
  readonly name: string
  /** The count for this filter. */
  readonly count: uint
}

/**
 * **Note**: Runtime settings can be changed through console commands and by the mod that owns the settings by writing a
 * new table to the ModSetting.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#ModSetting View documentation}
 */
interface ModSetting {
  /** The value of the mod setting. The type depends on the setting. */
  readonly value: uint | double | boolean | string
}

/**
 * Any basic type (string, number, boolean) or table.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#AnyBasic View documentation}
 */
type AnyBasic = string | number | boolean | table

/**
 * Any basic type (string, number, boolean), table, or LuaObject.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#Any View documentation}
 */
type Any = any

interface ProgrammableSpeakerParameters {
  readonly playback_volume: double
  readonly playback_globally: boolean
  readonly allow_polyphony: boolean
}

interface ProgrammableSpeakerAlertParameters {
  readonly show_alert: boolean
  readonly show_on_map: boolean
  readonly icon_signal_id: SignalID
  readonly alert_message: string
}

interface ProgrammableSpeakerCircuitParameters {
  readonly signal_value_is_pitch: boolean
  readonly instrument_id: uint
  readonly note_id: uint
}

interface ProgrammableSpeakerInstrument {
  readonly name: string
  readonly notes: string[]
}

/**
 * A {@link string} that specifies where a gui element should be.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#Alignment View documentation}
 */
type Alignment =
  | "top-left"
  | "middle-left" /** The same as `"middle-left"` */
  | "left"
  | "bottom-left"
  | "top-center"
  | "middle-center" /** The same as `"middle-center"` */
  | "center"
  | "bottom-center"
  | "top-right" /** The same as `"middle-right"` */
  | "right"
  | "bottom-right"

/**
 * Information about the event that has been raised. The table can also contain other fields depending on the type of
 * event. See {@link https://lua-api.factorio.com/latest/events.html the list of Factorio events} for more information on these.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#EventData View documentation}
 */
interface EventData {
  /** The identifier of the event this handler was registered to. */
  readonly name: EventId<EventData> | string
  /** The tick during which the event happened. */
  readonly tick: uint
  /** The name of the mod that raised the event if it was raised using {@link LuaBootstrap.raise_event LuaBootstrap::raise_event}. */
  readonly mod_name?: string
}

interface NthTickEventData {
  /** The tick during which the event happened. */
  readonly tick: uint
  /** The nth tick this handler was registered to. */
  readonly nth_tick: uint
}

interface ModChangeData {
  /** Old version of the mod. May be `nil` if the mod wasn't previously present (i.e. it was just added). */
  readonly old_version: string | undefined
  /** New version of the mod. May be `nil` if the mod is no longer present (i.e. it was just removed). */
  readonly new_version: string | undefined
}

interface ConfigurationChangedData {
  /** Old version of the map. Present only when loading map version other than the current version. */
  readonly old_version?: string
  /** New version of the map. Present only when loading map version other than the current version. */
  readonly new_version?: string
  /** Dictionary of mod changes. It is indexed by mod name. */
  readonly mod_changes: Record<string, ModChangeData>
  /** `true` when mod startup settings have changed since the last time this save was loaded. */
  readonly mod_startup_settings_changed: boolean
  /** `true` when mod prototype migrations have been applied since the last time this save was loaded. */
  readonly migration_applied: boolean
}

interface CustomCommandData {
  /** The name of the command. */
  readonly name: string
  /** The tick the command was used in. */
  readonly tick: uint
  /** The player who issued the command, or `nil` if it was issued from the server console. */
  readonly player_index?: uint
  /** The parameter passed after the command, if there is one. */
  readonly parameter?: string
}

interface SelectedPrototypeData {
  /** E.g. `"entity"`. */
  readonly base_type: string
  /** E.g. `"tree"`. */
  readonly derived_type: string
  /** E.g. `"tree-05"`. */
  readonly name: string
}

interface ScriptRenderTarget {
  readonly entity?: LuaEntity
  readonly entity_offset?: Vector
  readonly position?: PositionTable
}

type MouseButtonFlag =
  | "left"
  | "right"
  | "middle"
  | "button-4"
  | "button-5"
  | "button-6"
  | "button-7"
  | "button-8"
  | "button-9"

type MouseButtonFlagsTable = {
  readonly [P in MouseButtonFlag]?: true
}

type MouseButtonFlagsArray = readonly (MouseButtonFlag | "left-and-right")[]

/**
 * This is a set of flags given as a dictionary[{@link string} → {@link boolean}]. When a flag is set, it is present in
 * the dictionary with the value `true`. Unset flags aren't present in the dictionary at all.
 *
 * To write to this, use an array[{@link string}] of the mouse buttons that should be possible to use with on button.
 *
 * When setting flags, the flag `"left-and-right"` can also be set which will set `"left"` and `"right"` true.
 *
 * Possible flags when reading are:
 *
 * - `"left"`
 * - `"right"`
 * - `"middle"`
 * - `"button-4"`
 * - `"button-5"`
 * - `"button-6"`
 * - `"button-7"`
 * - `"button-8"`
 * - `"button-9"`
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#MouseButtonFlags View documentation}
 */
type MouseButtonFlags = MouseButtonFlagsTable | MouseButtonFlagsArray

/**
 * It is specified by {@link string}.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#CursorBoxRenderType View documentation}
 */
type CursorBoxRenderType /** Yellow box. */ =
  | "entity" /** Red box. */
  | "not-allowed" /** Light blue box. */
  | "electricity" /** Light blue box. */
  | "pair" /** Green box. */
  | "copy" /** White box. */
  | "train-visualization" /** Light blue box. */
  | "logistics" /** Green box. */
  | "blueprint-snap-rectangle"

/**
 * It is specified by {@link string}.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#ForceCondition View documentation}
 */
type ForceCondition /** All forces pass. */ =
  | "all" /** Forces which will attack pass. */
  | "enemy" /** Forces which won't attack pass. */
  | "ally" /** Forces which are friends pass. */
  | "friend" /** Forces which are not friends pass. */
  | "not-friend" /** The same force pass. */
  | "same" /** The non-same forces pass. */
  | "not-same"

/**
 * A value between 0 and 255 inclusive represented by one of the following named {@link string} or string version of the
 * value (for example `"27"` and `"decals"` are both valid). Higher values are rendered on top of lower values.
 *
 * - `"water-tile"`: 15
 * - `"ground-tile"`: 25
 * - `"tile-transition"`: 26
 * - `"decals"`: 27
 * - `"lower-radius-visualization"`: 29
 * - `"radius-visualization"`: 30
 * - `"transport-belt-integration"`: 65
 * - `"resource"`:66
 * - `"building-smoke"`:67
 * - `"decorative"`: 92
 * - `"ground-patch"`: 93
 * - `"ground-patch-higher"`: 94
 * - `"ground-patch-higher2"`: 95
 * - `"remnants"`: 112
 * - `"floor"`: 113
 * - `"transport-belt"`: 114
 * - `"transport-belt-endings"`: 115
 * - `"floor-mechanics-under-corpse"`: 120
 * - `"corpse"`: 121
 * - `"floor-mechanics"`: 122
 * - `"item"`: 123
 * - `"lower-object"`: 124
 * - `"transport-belt-circuit-connector"`: 126
 * - `"lower-object-above-shadow"`: 127
 * - `"object"`: 129
 * - `"higher-object-under"`: 131
 * - `"higher-object-above"`: 132
 * - `"item-in-inserter-hand"`: 134
 * - `"wires"`: 135
 * - `"wires-above"`: 136
 * - `"entity-info-icon"`: 138
 * - `"entity-info-icon-above"`: 139
 * - `"explosion"`: 142
 * - `"projectile"`: 143
 * - `"smoke"`: 144
 * - `"air-object"`: 145
 * - `"air-entity-info-icon"`: 147
 * - `"light-effect"`: 148
 * - `"selection-box"`: 187
 * - `"higher-selection-box"`: 188
 * - `"collision-selection-box"`: 189
 * - `"arrow"`: 190
 * - `"cursor"`: 210
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#RenderLayer View documentation}
 */
type RenderLayer =
  | number
  | `${number}`
  | "water-tile"
  | "ground-tile"
  | "tile-transition"
  | "decals"
  | "lower-radius-visualization"
  | "radius-visualization"
  | "transport-belt-integration"
  | "resource"
  | "building-smoke"
  | "decorative"
  | "ground-patch"
  | "ground-patch-higher"
  | "remnants"
  | "floor"
  | "transport-belt"
  | "transport-belt-endings"
  | "floor-mechanics-under-corpse"
  | "corpse"
  | "floor-mechanics"
  | "item"
  | "lower-object"
  | "transport-belt-circuit-connector"
  | "lower-object-above-shadow"
  | "object"
  | "higher-object-under"
  | "higher-object-above"
  | "item-in-inserter-hand"
  | "wires"
  | "wires-above"
  | "entity-info-icon"
  | "entity-info-icon-above"
  | "explosion"
  | "projectile"
  | "smoke"
  | "air-object"
  | "air-entity-info-icon"
  | "light-effect"
  | "selection-box"
  | "higher-selection-box"
  | "collision-selection-box"
  | "arrow"
  | "cursor"

type CliffOrientation =
  | "west-to-east"
  | "north-to-south"
  | "east-to-west"
  | "south-to-north"
  | "west-to-north"
  | "north-to-east"
  | "east-to-south"
  | "south-to-west"
  | "west-to-south"
  | "north-to-west"
  | "east-to-north"
  | "south-to-east"
  | "west-to-none"
  | "none-to-east"
  | "east-to-none"
  | "none-to-west"
  | "north-to-none"
  | "none-to-south"
  | "south-to-none"
  | "none-to-north"

interface ItemStackLocation {
  readonly inventory: defines.inventory
  readonly slot: uint
}

interface VehicleAutomaticTargetingParameters {
  readonly auto_target_without_gunner: boolean
  readonly auto_target_with_gunner: boolean
}

/**
 * Defines which slider in the game's sound settings affects the volume of this sound. Furthermore, some sound types are
 * mixed differently than others, e.g. zoom level effects are applied.
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#SoundType View documentation}
 */
type SoundType = "game-effect" | "gui-effect" | "ambient" | "environment" | "walking" | "alert" | "wind"

interface BaseItemPrototypeFilter {
  /**
   * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`,
   * `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`,
   * `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`,
   * `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`,
   * `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
   */
  readonly filter:
    | "tool"
    | "mergeable"
    | "item-with-inventory"
    | "selection-tool"
    | "item-with-label"
    | "has-rocket-launch-products"
    | "fuel"
    | "place-result"
    | "burnt-result"
    | "place-as-tile"
    | "placed-as-equipment-result"
    | "name"
    | "type"
    | "flag"
    | "subgroup"
    | "fuel-category"
    | "stack-size"
    | "default-request-amount"
    | "wire-count"
    | "fuel-value"
    | "fuel-acceleration-multiplier"
    | "fuel-top-speed-multiplier"
    | "fuel-emissions-multiplier"
  /**
   * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the
   * filters, `"and"` has higher precedence than `"or"`.
   */
  readonly mode?: "or" | "and"
  /** Inverts the condition. Default is `false`. */
  readonly invert?: boolean
}

interface PlaceResultItemPrototypeFilter extends BaseItemPrototypeFilter {
  readonly filter: "place-result"
  /** Filters for the place result. */
  readonly elem_filters?: EntityPrototypeFilter[]
}

interface BurntResultItemPrototypeFilter extends BaseItemPrototypeFilter {
  readonly filter: "burnt-result"
  /** Filters for the burnt result. */
  readonly elem_filters?: ItemPrototypeFilter[]
}

interface PlaceAsTileItemPrototypeFilter extends BaseItemPrototypeFilter {
  readonly filter: "place-as-tile"
  /** Filters for the placed tile. */
  readonly elem_filters?: TilePrototypeFilter[]
}

interface PlacedAsEquipmentResultItemPrototypeFilter extends BaseItemPrototypeFilter {
  readonly filter: "placed-as-equipment-result"
  /** Filters for the placed equipment. */
  readonly elem_filters?: EquipmentPrototypeFilter[]
}

/**
 * For use within nested filters such as the `has-product-item` filter of array[{@link RecipePrototypeFilter}]. To get a
 * specific prototype by name, see {@link LuaGameScript.item_prototypes LuaGameScript::item_prototypes}.
 */
interface NameItemPrototypeFilter extends BaseItemPrototypeFilter {
  readonly filter: "name"
  /** The prototype name, or list of acceptable names. */
  readonly name: string | string[]
}

/**
 * Usage example:
 *
 * ```lua
 * game.get_filtered_item_prototypes({{filter = "type", type = "armor"}})
 * ```
 */
interface TypeItemPrototypeFilter extends BaseItemPrototypeFilter {
  readonly filter: "type"
  /** The prototype type */
  readonly type: string
}

interface FlagItemPrototypeFilter extends BaseItemPrototypeFilter {
  readonly filter: "flag"
  /** One of the values in {@link ItemPrototypeFlags}. */
  readonly flag: string
}

interface SubgroupItemPrototypeFilter extends BaseItemPrototypeFilter {
  readonly filter: "subgroup"
  /** A {@link LuaGroup} (subgroup) name */
  readonly subgroup: string
}

interface FuelCategoryItemPrototypeFilter extends BaseItemPrototypeFilter {
  readonly filter: "fuel-category"
  /** A {@link LuaFuelCategoryPrototype} name */
  readonly "fuel-category": string
}

/**
 * Usage example:
 *
 * ```lua
 * game.get_filtered_item_prototypes({{filter = "stack-size", comparison = ">", value = 20}, {filter = "stack-size", comparison = "<", value = 100, mode = "and"}})
 * ```
 */
interface StackSizeItemPrototypeFilter extends BaseItemPrototypeFilter {
  readonly filter: "stack-size"
  readonly comparison: ComparatorString
  /** The value to compare against. */
  readonly value: uint
}

interface DefaultRequestAmountItemPrototypeFilter extends BaseItemPrototypeFilter {
  readonly filter: "default-request-amount"
  readonly comparison: ComparatorString
  /** The value to compare against. */
  readonly value: uint
}

interface WireCountItemPrototypeFilter extends BaseItemPrototypeFilter {
  readonly filter: "wire-count"
  readonly comparison: ComparatorString
  /** The value to compare against. */
  readonly value: uint
}

interface FuelValueItemPrototypeFilter extends BaseItemPrototypeFilter {
  readonly filter: "fuel-value"
  readonly comparison: ComparatorString
  /** The value to compare against. */
  readonly value: double
}

interface FuelAccelerationMultiplierItemPrototypeFilter extends BaseItemPrototypeFilter {
  readonly filter: "fuel-acceleration-multiplier"
  readonly comparison: ComparatorString
  /** The value to compare against. */
  readonly value: double
}

interface FuelTopSpeedMultiplierItemPrototypeFilter extends BaseItemPrototypeFilter {
  readonly filter: "fuel-top-speed-multiplier"
  readonly comparison: ComparatorString
  /** The value to compare against. */
  readonly value: double
}

interface FuelEmissionsMultiplierItemPrototypeFilter extends BaseItemPrototypeFilter {
  readonly filter: "fuel-emissions-multiplier"
  readonly comparison: ComparatorString
  /** The value to compare against. */
  readonly value: double
}

interface ToolItemPrototypeFilter extends BaseItemPrototypeFilter {
  readonly filter: "tool"
}

interface MergeableItemPrototypeFilter extends BaseItemPrototypeFilter {
  readonly filter: "mergeable"
}

interface ItemWithInventoryItemPrototypeFilter extends BaseItemPrototypeFilter {
  readonly filter: "item-with-inventory"
}

interface SelectionToolItemPrototypeFilter extends BaseItemPrototypeFilter {
  readonly filter: "selection-tool"
}

interface ItemWithLabelItemPrototypeFilter extends BaseItemPrototypeFilter {
  readonly filter: "item-with-label"
}

interface HasRocketLaunchProductsItemPrototypeFilter extends BaseItemPrototypeFilter {
  readonly filter: "has-rocket-launch-products"
}

interface FuelItemPrototypeFilter extends BaseItemPrototypeFilter {
  readonly filter: "fuel"
}

/**
 * Other attributes may be specified depending on `filter`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#ItemPrototypeFilter View documentation}
 */
type ItemPrototypeFilter =
  | PlaceResultItemPrototypeFilter
  | BurntResultItemPrototypeFilter
  | PlaceAsTileItemPrototypeFilter
  | PlacedAsEquipmentResultItemPrototypeFilter
  | NameItemPrototypeFilter
  | TypeItemPrototypeFilter
  | FlagItemPrototypeFilter
  | SubgroupItemPrototypeFilter
  | FuelCategoryItemPrototypeFilter
  | StackSizeItemPrototypeFilter
  | DefaultRequestAmountItemPrototypeFilter
  | WireCountItemPrototypeFilter
  | FuelValueItemPrototypeFilter
  | FuelAccelerationMultiplierItemPrototypeFilter
  | FuelTopSpeedMultiplierItemPrototypeFilter
  | FuelEmissionsMultiplierItemPrototypeFilter
  | ToolItemPrototypeFilter
  | MergeableItemPrototypeFilter
  | ItemWithInventoryItemPrototypeFilter
  | SelectionToolItemPrototypeFilter
  | ItemWithLabelItemPrototypeFilter
  | HasRocketLaunchProductsItemPrototypeFilter
  | FuelItemPrototypeFilter

interface BaseModSettingPrototypeFilter {
  /** The condition to filter on. One of `"type"`, `"mod"`, `"setting-type"` */
  readonly filter: "type" | "mod" | "setting-type"
  /**
   * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the
   * filters, `"and"` has higher precedence than `"or"`.
   */
  readonly mode?: "or" | "and"
  /** Inverts the condition. Default is `false`. */
  readonly invert?: boolean
}

interface TypeModSettingPrototypeFilter extends BaseModSettingPrototypeFilter {
  readonly filter: "type"
  /** The prototype type */
  readonly type: string
}

interface ModModSettingPrototypeFilter extends BaseModSettingPrototypeFilter {
  readonly filter: "mod"
  /** The mod name */
  readonly mod: string
}

interface SettingTypeModSettingPrototypeFilter extends BaseModSettingPrototypeFilter {
  readonly filter: "setting-type"
  /** The setting scope type (startup, runtime-global, or runtime-per-user) */
  readonly type: string
}

/**
 * Other attributes may be specified depending on `filter`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#ModSettingPrototypeFilter View documentation}
 */
type ModSettingPrototypeFilter =
  | TypeModSettingPrototypeFilter
  | ModModSettingPrototypeFilter
  | SettingTypeModSettingPrototypeFilter

interface BaseTechnologyPrototypeFilter {
  /**
   * The condition to filter on. One of `"enabled"`, `"hidden"`, `"upgrade"`, `"visible-when-disabled"`,
   * `"has-effects"`, `"has-prerequisites"`, `"research-unit-ingredient"`, `"level"`, `"max-level"`, `"time"`
   */
  readonly filter:
    | "enabled"
    | "hidden"
    | "upgrade"
    | "visible-when-disabled"
    | "has-effects"
    | "has-prerequisites"
    | "research-unit-ingredient"
    | "level"
    | "max-level"
    | "time"
  /**
   * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the
   * filters, `"and"` has higher precedence than `"or"`.
   */
  readonly mode?: "or" | "and"
  /** Inverts the condition. Default is `false`. */
  readonly invert?: boolean
}

interface ResearchUnitIngredientTechnologyPrototypeFilter extends BaseTechnologyPrototypeFilter {
  readonly filter: "research-unit-ingredient"
  /** The research ingredient to check. */
  readonly ingredient: string
}

interface LevelTechnologyPrototypeFilter extends BaseTechnologyPrototypeFilter {
  readonly filter: "level"
  readonly comparison: ComparatorString
  /** The value to compare against. */
  readonly value: uint
}

interface MaxLevelTechnologyPrototypeFilter extends BaseTechnologyPrototypeFilter {
  readonly filter: "max-level"
  readonly comparison: ComparatorString
  /** The value to compare against. */
  readonly value: uint
}

interface TimeTechnologyPrototypeFilter extends BaseTechnologyPrototypeFilter {
  readonly filter: "time"
  readonly comparison: ComparatorString
  /** The value to compare against. */
  readonly value: uint
}

interface EnabledTechnologyPrototypeFilter extends BaseTechnologyPrototypeFilter {
  readonly filter: "enabled"
}

interface HiddenTechnologyPrototypeFilter extends BaseTechnologyPrototypeFilter {
  readonly filter: "hidden"
}

interface UpgradeTechnologyPrototypeFilter extends BaseTechnologyPrototypeFilter {
  readonly filter: "upgrade"
}

interface VisibleWhenDisabledTechnologyPrototypeFilter extends BaseTechnologyPrototypeFilter {
  readonly filter: "visible-when-disabled"
}

interface HasEffectsTechnologyPrototypeFilter extends BaseTechnologyPrototypeFilter {
  readonly filter: "has-effects"
}

interface HasPrerequisitesTechnologyPrototypeFilter extends BaseTechnologyPrototypeFilter {
  readonly filter: "has-prerequisites"
}

/**
 * Other attributes may be specified depending on `filter`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#TechnologyPrototypeFilter View documentation}
 */
type TechnologyPrototypeFilter =
  | ResearchUnitIngredientTechnologyPrototypeFilter
  | LevelTechnologyPrototypeFilter
  | MaxLevelTechnologyPrototypeFilter
  | TimeTechnologyPrototypeFilter
  | EnabledTechnologyPrototypeFilter
  | HiddenTechnologyPrototypeFilter
  | UpgradeTechnologyPrototypeFilter
  | VisibleWhenDisabledTechnologyPrototypeFilter
  | HasEffectsTechnologyPrototypeFilter
  | HasPrerequisitesTechnologyPrototypeFilter

interface BaseDecorativePrototypeFilter {
  /** The condition to filter on. One of `"decal"`, `"autoplace"`, `"collision-mask"` */
  readonly filter: "decal" | "autoplace" | "collision-mask"
  /**
   * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the
   * filters, `"and"` has higher precedence than `"or"`.
   */
  readonly mode?: "or" | "and"
  /** Inverts the condition. Default is `false`. */
  readonly invert?: boolean
}

interface CollisionMaskDecorativePrototypeFilter extends BaseDecorativePrototypeFilter {
  readonly filter: "collision-mask"
  readonly mask: CollisionMask | CollisionMaskWithFlags
  /** How to filter: `"collides"` or `"layers-equals"` */
  readonly mask_mode: "collides" | "layers-equals"
}

interface DecalDecorativePrototypeFilter extends BaseDecorativePrototypeFilter {
  readonly filter: "decal"
}

interface AutoplaceDecorativePrototypeFilter extends BaseDecorativePrototypeFilter {
  readonly filter: "autoplace"
}

/**
 * Other attributes may be specified depending on `filter`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#DecorativePrototypeFilter View documentation}
 */
type DecorativePrototypeFilter =
  | CollisionMaskDecorativePrototypeFilter
  | DecalDecorativePrototypeFilter
  | AutoplaceDecorativePrototypeFilter

interface BaseAchievementPrototypeFilter {
  /** The condition to filter on. One of `"allowed-without-fight"`, `"type"` */
  readonly filter: "allowed-without-fight" | "type"
  /**
   * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the
   * filters, `"and"` has higher precedence than `"or"`.
   */
  readonly mode?: "or" | "and"
  /** Inverts the condition. Default is `false`. */
  readonly invert?: boolean
}

interface TypeAchievementPrototypeFilter extends BaseAchievementPrototypeFilter {
  readonly filter: "type"
  /** The prototype type */
  readonly type: string
}

interface AllowedWithoutFightAchievementPrototypeFilter extends BaseAchievementPrototypeFilter {
  readonly filter: "allowed-without-fight"
}

/**
 * Other attributes may be specified depending on `filter`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#AchievementPrototypeFilter View documentation}
 */
type AchievementPrototypeFilter = TypeAchievementPrototypeFilter | AllowedWithoutFightAchievementPrototypeFilter

interface BaseFluidPrototypeFilter {
  /**
   * The condition to filter on. One of `"hidden"`, `"name"`, `"subgroup"`, `"default-temperature"`,
   * `"max-temperature"`, `"heat-capacity"`, `"fuel-value"`, `"emissions-multiplier"`, `"gas-temperature"`
   */
  readonly filter:
    | "hidden"
    | "name"
    | "subgroup"
    | "default-temperature"
    | "max-temperature"
    | "heat-capacity"
    | "fuel-value"
    | "emissions-multiplier"
    | "gas-temperature"
  /**
   * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the
   * filters, `"and"` has higher precedence than `"or"`.
   */
  readonly mode?: "or" | "and"
  /** Inverts the condition. Default is `false`. */
  readonly invert?: boolean
}

/**
 * For use within nested filters such as the `has-product-fluid` filter of array[{@link RecipePrototypeFilter}]. To get a
 * specific prototype by name, see {@link LuaGameScript.fluid_prototypes LuaGameScript::fluid_prototypes}.
 */
interface NameFluidPrototypeFilter extends BaseFluidPrototypeFilter {
  readonly filter: "name"
  /** The prototype name, or list of acceptable names. */
  readonly name: string | string[]
}

interface SubgroupFluidPrototypeFilter extends BaseFluidPrototypeFilter {
  readonly filter: "subgroup"
  /** A {@link LuaGroup} (subgroup) name */
  readonly subgroup: string
}

interface DefaultTemperatureFluidPrototypeFilter extends BaseFluidPrototypeFilter {
  readonly filter: "default-temperature"
  readonly comparison: ComparatorString
  /** The value to compare against. */
  readonly value: double
}

interface MaxTemperatureFluidPrototypeFilter extends BaseFluidPrototypeFilter {
  readonly filter: "max-temperature"
  readonly comparison: ComparatorString
  /** The value to compare against. */
  readonly value: double
}

interface HeatCapacityFluidPrototypeFilter extends BaseFluidPrototypeFilter {
  readonly filter: "heat-capacity"
  readonly comparison: ComparatorString
  /** The value to compare against. */
  readonly value: double
}

interface FuelValueFluidPrototypeFilter extends BaseFluidPrototypeFilter {
  readonly filter: "fuel-value"
  readonly comparison: ComparatorString
  /** The value to compare against. */
  readonly value: double
}

interface EmissionsMultiplierFluidPrototypeFilter extends BaseFluidPrototypeFilter {
  readonly filter: "emissions-multiplier"
  readonly comparison: ComparatorString
  /** The value to compare against. */
  readonly value: double
}

interface GasTemperatureFluidPrototypeFilter extends BaseFluidPrototypeFilter {
  readonly filter: "gas-temperature"
  readonly comparison: ComparatorString
  /** The value to compare against. */
  readonly value: double
}

interface HiddenFluidPrototypeFilter extends BaseFluidPrototypeFilter {
  readonly filter: "hidden"
}

/**
 * Other attributes may be specified depending on `filter`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#FluidPrototypeFilter View documentation}
 */
type FluidPrototypeFilter =
  | NameFluidPrototypeFilter
  | SubgroupFluidPrototypeFilter
  | DefaultTemperatureFluidPrototypeFilter
  | MaxTemperatureFluidPrototypeFilter
  | HeatCapacityFluidPrototypeFilter
  | FuelValueFluidPrototypeFilter
  | EmissionsMultiplierFluidPrototypeFilter
  | GasTemperatureFluidPrototypeFilter
  | HiddenFluidPrototypeFilter

interface BaseEquipmentPrototypeFilter {
  /** The condition to filter on. One of `"item-to-place"`, `"type"` */
  readonly filter: "item-to-place" | "type"
  /**
   * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the
   * filters, `"and"` has higher precedence than `"or"`.
   */
  readonly mode?: "or" | "and"
  /** Inverts the condition. Default is `false`. */
  readonly invert?: boolean
}

interface TypeEquipmentPrototypeFilter extends BaseEquipmentPrototypeFilter {
  readonly filter: "type"
  /** The prototype type */
  readonly type: string
}

interface ItemToPlaceEquipmentPrototypeFilter extends BaseEquipmentPrototypeFilter {
  readonly filter: "item-to-place"
}

/**
 * Other attributes may be specified depending on `filter`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#EquipmentPrototypeFilter View documentation}
 */
type EquipmentPrototypeFilter = TypeEquipmentPrototypeFilter | ItemToPlaceEquipmentPrototypeFilter

interface BaseTilePrototypeFilter {
  /**
   * The condition to filter on. One of `"minable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`,
   * `"collision-mask"`, `"walking-speed-modifier"`, `"vehicle-friction-modifier"`,
   * `"decorative-removal-probability"`, `"emissions"`
   */
  readonly filter:
    | "minable"
    | "autoplace"
    | "blueprintable"
    | "item-to-place"
    | "collision-mask"
    | "walking-speed-modifier"
    | "vehicle-friction-modifier"
    | "decorative-removal-probability"
    | "emissions"
  /**
   * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the
   * filters, `"and"` has higher precedence than `"or"`.
   */
  readonly mode?: "or" | "and"
  /** Inverts the condition. Default is `false`. */
  readonly invert?: boolean
}

interface CollisionMaskTilePrototypeFilter extends BaseTilePrototypeFilter {
  readonly filter: "collision-mask"
  readonly mask: CollisionMask | CollisionMaskWithFlags
  /** How to filter: `"collides"` or `"layers-equals"` */
  readonly mask_mode: "collides" | "layers-equals"
}

interface WalkingSpeedModifierTilePrototypeFilter extends BaseTilePrototypeFilter {
  readonly filter: "walking-speed-modifier"
  readonly comparison: ComparatorString
  /** The value to compare against. */
  readonly value: double
}

interface VehicleFrictionModifierTilePrototypeFilter extends BaseTilePrototypeFilter {
  readonly filter: "vehicle-friction-modifier"
  readonly comparison: ComparatorString
  /** The value to compare against. */
  readonly value: double
}

interface DecorativeRemovalProbabilityTilePrototypeFilter extends BaseTilePrototypeFilter {
  readonly filter: "decorative-removal-probability"
  readonly comparison: ComparatorString
  /** The value to compare against. */
  readonly value: float
}

interface EmissionsTilePrototypeFilter extends BaseTilePrototypeFilter {
  readonly filter: "emissions"
  readonly comparison: ComparatorString
  /** The value to compare against. */
  readonly value: double
}

interface MinableTilePrototypeFilter extends BaseTilePrototypeFilter {
  readonly filter: "minable"
}

interface AutoplaceTilePrototypeFilter extends BaseTilePrototypeFilter {
  readonly filter: "autoplace"
}

interface BlueprintableTilePrototypeFilter extends BaseTilePrototypeFilter {
  readonly filter: "blueprintable"
}

interface ItemToPlaceTilePrototypeFilter extends BaseTilePrototypeFilter {
  readonly filter: "item-to-place"
}

/**
 * Other attributes may be specified depending on `filter`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#TilePrototypeFilter View documentation}
 */
type TilePrototypeFilter =
  | CollisionMaskTilePrototypeFilter
  | WalkingSpeedModifierTilePrototypeFilter
  | VehicleFrictionModifierTilePrototypeFilter
  | DecorativeRemovalProbabilityTilePrototypeFilter
  | EmissionsTilePrototypeFilter
  | MinableTilePrototypeFilter
  | AutoplaceTilePrototypeFilter
  | BlueprintableTilePrototypeFilter
  | ItemToPlaceTilePrototypeFilter

interface BaseRecipePrototypeFilter {
  /**
   * The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`,
   * `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`,
   * `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`,
   * `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`,
   * `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`
   */
  readonly filter:
    | "enabled"
    | "hidden"
    | "hidden-from-flow-stats"
    | "hidden-from-player-crafting"
    | "allow-as-intermediate"
    | "allow-intermediates"
    | "allow-decomposition"
    | "always-show-made-in"
    | "always-show-products"
    | "show-amount-in-title"
    | "has-ingredients"
    | "has-products"
    | "has-ingredient-item"
    | "has-ingredient-fluid"
    | "has-product-item"
    | "has-product-fluid"
    | "subgroup"
    | "category"
    | "energy"
    | "emissions-multiplier"
    | "request-paste-multiplier"
    | "overload-multiplier"
  /**
   * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the
   * filters, `"and"` has higher precedence than `"or"`.
   */
  readonly mode?: "or" | "and"
  /** Inverts the condition. Default is `false`. */
  readonly invert?: boolean
}

interface HasIngredientItemRecipePrototypeFilter extends BaseRecipePrototypeFilter {
  readonly filter: "has-ingredient-item"
  /** Matches if at least 1 ingredient is an item that matches these filters. */
  readonly elem_filters?: ItemPrototypeFilter[]
}

/**
 * Usage example:
 *
 * ```lua
 * -- selects recipes that consume sulfuric acid
 * {{filter = "has-ingredient-fluid", elem_filters = {{filter = "name", name = "sulfuric-acid"}}}}
 * ```
 */
interface HasIngredientFluidRecipePrototypeFilter extends BaseRecipePrototypeFilter {
  readonly filter: "has-ingredient-fluid"
  /** Matches if at least 1 ingredient is a fluid that matches these filters. */
  readonly elem_filters?: FluidPrototypeFilter[]
}

/**
 * Usage example:
 *
 * ```lua
 * -- selects recipes that produce an item
 * {{filter = "has-product-item"}}
 * -- selects recipes that produce iron plates
 * {{filter = "has-product-item", elem_filters = {{filter = "name", name = "iron-plate"}}}}
 * -- selects recipes that produce items that place furnaces
 * {{filter = "has-product-item", elem_filters = {{filter = "place-result", elem_filters = {{filter = "type", type = "furnace"}}}}}}
 * ```
 */
interface HasProductItemRecipePrototypeFilter extends BaseRecipePrototypeFilter {
  readonly filter: "has-product-item"
  /** Matches if at least 1 product is an item that matches these filters. */
  readonly elem_filters?: ItemPrototypeFilter[]
}

interface HasProductFluidRecipePrototypeFilter extends BaseRecipePrototypeFilter {
  readonly filter: "has-product-fluid"
  /** Matches if at least 1 product is a fluid that matches these filters. */
  readonly elem_filters?: FluidPrototypeFilter[]
}

interface SubgroupRecipePrototypeFilter extends BaseRecipePrototypeFilter {
  readonly filter: "subgroup"
  /** A {@link LuaGroup} (subgroup) name */
  readonly subgroup: string
}

interface CategoryRecipePrototypeFilter extends BaseRecipePrototypeFilter {
  readonly filter: "category"
  /** A {@link LuaRecipeCategoryPrototype} name */
  readonly category: string
}

interface EnergyRecipePrototypeFilter extends BaseRecipePrototypeFilter {
  readonly filter: "energy"
  readonly comparison: ComparatorString
  /** The value to compare against. */
  readonly value: double
}

interface EmissionsMultiplierRecipePrototypeFilter extends BaseRecipePrototypeFilter {
  readonly filter: "emissions-multiplier"
  readonly comparison: ComparatorString
  /** The value to compare against. */
  readonly value: double
}

interface RequestPasteMultiplierRecipePrototypeFilter extends BaseRecipePrototypeFilter {
  readonly filter: "request-paste-multiplier"
  readonly comparison: ComparatorString
  /** The value to compare against. */
  readonly value: uint
}

interface OverloadMultiplierRecipePrototypeFilter extends BaseRecipePrototypeFilter {
  readonly filter: "overload-multiplier"
  readonly comparison: ComparatorString
  /** The value to compare against. */
  readonly value: uint
}

interface EnabledRecipePrototypeFilter extends BaseRecipePrototypeFilter {
  readonly filter: "enabled"
}

interface HiddenRecipePrototypeFilter extends BaseRecipePrototypeFilter {
  readonly filter: "hidden"
}

interface HiddenFromFlowStatsRecipePrototypeFilter extends BaseRecipePrototypeFilter {
  readonly filter: "hidden-from-flow-stats"
}

interface HiddenFromPlayerCraftingRecipePrototypeFilter extends BaseRecipePrototypeFilter {
  readonly filter: "hidden-from-player-crafting"
}

interface AllowAsIntermediateRecipePrototypeFilter extends BaseRecipePrototypeFilter {
  readonly filter: "allow-as-intermediate"
}

interface AllowIntermediatesRecipePrototypeFilter extends BaseRecipePrototypeFilter {
  readonly filter: "allow-intermediates"
}

interface AllowDecompositionRecipePrototypeFilter extends BaseRecipePrototypeFilter {
  readonly filter: "allow-decomposition"
}

interface AlwaysShowMadeInRecipePrototypeFilter extends BaseRecipePrototypeFilter {
  readonly filter: "always-show-made-in"
}

interface AlwaysShowProductsRecipePrototypeFilter extends BaseRecipePrototypeFilter {
  readonly filter: "always-show-products"
}

interface ShowAmountInTitleRecipePrototypeFilter extends BaseRecipePrototypeFilter {
  readonly filter: "show-amount-in-title"
}

interface HasIngredientsRecipePrototypeFilter extends BaseRecipePrototypeFilter {
  readonly filter: "has-ingredients"
}

interface HasProductsRecipePrototypeFilter extends BaseRecipePrototypeFilter {
  readonly filter: "has-products"
}

/**
 * Other attributes may be specified depending on `filter`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#RecipePrototypeFilter View documentation}
 */
type RecipePrototypeFilter =
  | HasIngredientItemRecipePrototypeFilter
  | HasIngredientFluidRecipePrototypeFilter
  | HasProductItemRecipePrototypeFilter
  | HasProductFluidRecipePrototypeFilter
  | SubgroupRecipePrototypeFilter
  | CategoryRecipePrototypeFilter
  | EnergyRecipePrototypeFilter
  | EmissionsMultiplierRecipePrototypeFilter
  | RequestPasteMultiplierRecipePrototypeFilter
  | OverloadMultiplierRecipePrototypeFilter
  | EnabledRecipePrototypeFilter
  | HiddenRecipePrototypeFilter
  | HiddenFromFlowStatsRecipePrototypeFilter
  | HiddenFromPlayerCraftingRecipePrototypeFilter
  | AllowAsIntermediateRecipePrototypeFilter
  | AllowIntermediatesRecipePrototypeFilter
  | AllowDecompositionRecipePrototypeFilter
  | AlwaysShowMadeInRecipePrototypeFilter
  | AlwaysShowProductsRecipePrototypeFilter
  | ShowAmountInTitleRecipePrototypeFilter
  | HasIngredientsRecipePrototypeFilter
  | HasProductsRecipePrototypeFilter

interface BaseEntityPrototypeFilter {
  /**
   * The condition to filter on. One of `"flying-robot"`, `"robot-with-logistics-interface"`, `"rail"`, `"ghost"`,
   * `"explosion"`, `"vehicle"`, `"crafting-machine"`, `"rolling-stock"`, `"turret"`, `"transport-belt-connectable"`,
   * `"wall-connectable"`, `"buildable"`, `"placable-in-editor"`, `"clonable"`, `"selectable"`, `"hidden"`,
   * `"entity-with-health"`, `"building"`, `"fast-replaceable"`, `"uses-direction"`, `"minable"`,
   * `"circuit-connectable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"name"`, `"type"`,
   * `"collision-mask"`, `"flag"`, `"build-base-evolution-requirement"`, `"selection-priority"`, `"emissions"`,
   * `"crafting-category"`
   */
  readonly filter:
    | "flying-robot"
    | "robot-with-logistics-interface"
    | "rail"
    | "ghost"
    | "explosion"
    | "vehicle"
    | "crafting-machine"
    | "rolling-stock"
    | "turret"
    | "transport-belt-connectable"
    | "wall-connectable"
    | "buildable"
    | "placable-in-editor"
    | "clonable"
    | "selectable"
    | "hidden"
    | "entity-with-health"
    | "building"
    | "fast-replaceable"
    | "uses-direction"
    | "minable"
    | "circuit-connectable"
    | "autoplace"
    | "blueprintable"
    | "item-to-place"
    | "name"
    | "type"
    | "collision-mask"
    | "flag"
    | "build-base-evolution-requirement"
    | "selection-priority"
    | "emissions"
    | "crafting-category"
  /**
   * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the
   * filters, `"and"` has higher precedence than `"or"`.
   */
  readonly mode?: "or" | "and"
  /** Inverts the condition. Default is `false`. */
  readonly invert?: boolean
}

/**
 * For use within nested filters such as the `place-result` filter of array[{@link ItemPrototypeFilter}]. To get a
 * specific prototype by name, see {@link LuaGameScript.entity_prototypes LuaGameScript::entity_prototypes}.
 */
interface NameEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "name"
  /** The prototype name, or list of acceptable names. */
  readonly name: string | string[]
}

/**
 * Usage example:
 *
 * ```lua
 * game.get_filtered_entity_prototypes({{filter = "type", type = "unit"}})
 * ```
 */
interface TypeEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "type"
  /** The prototype type */
  readonly type: string
}

/**
 * Usage example:
 *
 * ```lua
 * game.get_filtered_entity_prototypes({{filter = "collision-mask", mask = "player-layer", mask_mode = "collides"}})
 * ```
 */
interface CollisionMaskEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "collision-mask"
  readonly mask: CollisionMask | CollisionMaskWithFlags
  /** How to filter: `"collides"` or `"layers-equals"` */
  readonly mask_mode: "collides" | "layers-equals"
}

/**
 * Usage example:
 *
 * ```lua
 * game.get_filtered_entity_prototypes({{filter = "flag", flag = "placeable-player"}, {filter = "flag", flag = "placeable-enemy", mode = "and"}})
 * ```
 */
interface FlagEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "flag"
  /** One of the values in {@link EntityPrototypeFlags}. */
  readonly flag: string
}

interface BuildBaseEvolutionRequirementEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "build-base-evolution-requirement"
  readonly comparison: ComparatorString
  /** The value to compare against. */
  readonly value: double
}

interface SelectionPriorityEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "selection-priority"
  readonly comparison: ComparatorString
  /** The value to compare against. */
  readonly value: uint8
}

interface EmissionsEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "emissions"
  readonly comparison: ComparatorString
  /** The value to compare against. */
  readonly value: double
}

interface CraftingCategoryEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "crafting-category"
  /** Matches if the prototype is for a crafting machine with this crafting category. */
  readonly crafting_category: string
}

interface FlyingRobotEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "flying-robot"
}

interface RobotWithLogisticsInterfaceEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "robot-with-logistics-interface"
}

interface RailEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "rail"
}

interface GhostEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "ghost"
}

interface ExplosionEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "explosion"
}

interface VehicleEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "vehicle"
}

interface CraftingMachineEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "crafting-machine"
}

interface RollingStockEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "rolling-stock"
}

interface TurretEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "turret"
}

interface TransportBeltConnectableEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "transport-belt-connectable"
}

interface WallConnectableEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "wall-connectable"
}

interface BuildableEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "buildable"
}

interface PlacableInEditorEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "placable-in-editor"
}

interface ClonableEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "clonable"
}

interface SelectableEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "selectable"
}

interface HiddenEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "hidden"
}

interface EntityWithHealthEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "entity-with-health"
}

interface BuildingEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "building"
}

interface FastReplaceableEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "fast-replaceable"
}

interface UsesDirectionEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "uses-direction"
}

interface MinableEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "minable"
}

interface CircuitConnectableEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "circuit-connectable"
}

interface AutoplaceEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "autoplace"
}

interface BlueprintableEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "blueprintable"
}

interface ItemToPlaceEntityPrototypeFilter extends BaseEntityPrototypeFilter {
  readonly filter: "item-to-place"
}

/**
 * Other attributes may be specified depending on `filter`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#EntityPrototypeFilter View documentation}
 */
type EntityPrototypeFilter =
  | NameEntityPrototypeFilter
  | TypeEntityPrototypeFilter
  | CollisionMaskEntityPrototypeFilter
  | FlagEntityPrototypeFilter
  | BuildBaseEvolutionRequirementEntityPrototypeFilter
  | SelectionPriorityEntityPrototypeFilter
  | EmissionsEntityPrototypeFilter
  | CraftingCategoryEntityPrototypeFilter
  | FlyingRobotEntityPrototypeFilter
  | RobotWithLogisticsInterfaceEntityPrototypeFilter
  | RailEntityPrototypeFilter
  | GhostEntityPrototypeFilter
  | ExplosionEntityPrototypeFilter
  | VehicleEntityPrototypeFilter
  | CraftingMachineEntityPrototypeFilter
  | RollingStockEntityPrototypeFilter
  | TurretEntityPrototypeFilter
  | TransportBeltConnectableEntityPrototypeFilter
  | WallConnectableEntityPrototypeFilter
  | BuildableEntityPrototypeFilter
  | PlacableInEditorEntityPrototypeFilter
  | ClonableEntityPrototypeFilter
  | SelectableEntityPrototypeFilter
  | HiddenEntityPrototypeFilter
  | EntityWithHealthEntityPrototypeFilter
  | BuildingEntityPrototypeFilter
  | FastReplaceableEntityPrototypeFilter
  | UsesDirectionEntityPrototypeFilter
  | MinableEntityPrototypeFilter
  | CircuitConnectableEntityPrototypeFilter
  | AutoplaceEntityPrototypeFilter
  | BlueprintableEntityPrototypeFilter
  | ItemToPlaceEntityPrototypeFilter

interface BaseScriptRaisedReviveEventFilter {
  /**
   * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`,
   * `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`,
   * `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
   */
  readonly filter:
    | "ghost"
    | "rail"
    | "rail-signal"
    | "rolling-stock"
    | "robot-with-logistics-interface"
    | "vehicle"
    | "turret"
    | "crafting-machine"
    | "wall-connectable"
    | "transport-belt-connectable"
    | "circuit-network-connectable"
    | "type"
    | "name"
    | "ghost_type"
    | "ghost_name"
  /**
   * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the
   * filters, `"and"` has higher precedence than `"or"`.
   */
  readonly mode?: "or" | "and"
  /** Inverts the condition. Default is `false`. */
  readonly invert?: boolean
}

interface TypeScriptRaisedReviveEventFilter extends BaseScriptRaisedReviveEventFilter {
  readonly filter: "type"
  /** The prototype type */
  readonly type: string
}

interface NameScriptRaisedReviveEventFilter extends BaseScriptRaisedReviveEventFilter {
  readonly filter: "name"
  /** The prototype name */
  readonly name: string
}

interface GhostTypeScriptRaisedReviveEventFilter extends BaseScriptRaisedReviveEventFilter {
  readonly filter: "ghost_type"
  /** The ghost prototype type */
  readonly type: string
}

interface GhostNameScriptRaisedReviveEventFilter extends BaseScriptRaisedReviveEventFilter {
  readonly filter: "ghost_name"
  /** The ghost prototype name */
  readonly name: string
}

interface GhostScriptRaisedReviveEventFilter extends BaseScriptRaisedReviveEventFilter {
  readonly filter: "ghost"
}

interface RailScriptRaisedReviveEventFilter extends BaseScriptRaisedReviveEventFilter {
  readonly filter: "rail"
}

interface RailSignalScriptRaisedReviveEventFilter extends BaseScriptRaisedReviveEventFilter {
  readonly filter: "rail-signal"
}

interface RollingStockScriptRaisedReviveEventFilter extends BaseScriptRaisedReviveEventFilter {
  readonly filter: "rolling-stock"
}

interface RobotWithLogisticsInterfaceScriptRaisedReviveEventFilter extends BaseScriptRaisedReviveEventFilter {
  readonly filter: "robot-with-logistics-interface"
}

interface VehicleScriptRaisedReviveEventFilter extends BaseScriptRaisedReviveEventFilter {
  readonly filter: "vehicle"
}

interface TurretScriptRaisedReviveEventFilter extends BaseScriptRaisedReviveEventFilter {
  readonly filter: "turret"
}

interface CraftingMachineScriptRaisedReviveEventFilter extends BaseScriptRaisedReviveEventFilter {
  readonly filter: "crafting-machine"
}

interface WallConnectableScriptRaisedReviveEventFilter extends BaseScriptRaisedReviveEventFilter {
  readonly filter: "wall-connectable"
}

interface TransportBeltConnectableScriptRaisedReviveEventFilter extends BaseScriptRaisedReviveEventFilter {
  readonly filter: "transport-belt-connectable"
}

interface CircuitNetworkConnectableScriptRaisedReviveEventFilter extends BaseScriptRaisedReviveEventFilter {
  readonly filter: "circuit-network-connectable"
}

/**
 * Other attributes may be specified depending on `filter`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#LuaScriptRaisedReviveEventFilter View documentation}
 */
type LuaScriptRaisedReviveEventFilter =
  | TypeScriptRaisedReviveEventFilter
  | NameScriptRaisedReviveEventFilter
  | GhostTypeScriptRaisedReviveEventFilter
  | GhostNameScriptRaisedReviveEventFilter
  | GhostScriptRaisedReviveEventFilter
  | RailScriptRaisedReviveEventFilter
  | RailSignalScriptRaisedReviveEventFilter
  | RollingStockScriptRaisedReviveEventFilter
  | RobotWithLogisticsInterfaceScriptRaisedReviveEventFilter
  | VehicleScriptRaisedReviveEventFilter
  | TurretScriptRaisedReviveEventFilter
  | CraftingMachineScriptRaisedReviveEventFilter
  | WallConnectableScriptRaisedReviveEventFilter
  | TransportBeltConnectableScriptRaisedReviveEventFilter
  | CircuitNetworkConnectableScriptRaisedReviveEventFilter

interface BaseEntityDiedEventFilter {
  /**
   * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`,
   * `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`,
   * `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
   */
  readonly filter:
    | "ghost"
    | "rail"
    | "rail-signal"
    | "rolling-stock"
    | "robot-with-logistics-interface"
    | "vehicle"
    | "turret"
    | "crafting-machine"
    | "wall-connectable"
    | "transport-belt-connectable"
    | "circuit-network-connectable"
    | "type"
    | "name"
    | "ghost_type"
    | "ghost_name"
  /**
   * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the
   * filters, `"and"` has higher precedence than `"or"`.
   */
  readonly mode?: "or" | "and"
  /** Inverts the condition. Default is `false`. */
  readonly invert?: boolean
}

interface TypeEntityDiedEventFilter extends BaseEntityDiedEventFilter {
  readonly filter: "type"
  /** The prototype type */
  readonly type: string
}

interface NameEntityDiedEventFilter extends BaseEntityDiedEventFilter {
  readonly filter: "name"
  /** The prototype name */
  readonly name: string
}

interface GhostTypeEntityDiedEventFilter extends BaseEntityDiedEventFilter {
  readonly filter: "ghost_type"
  /** The ghost prototype type */
  readonly type: string
}

interface GhostNameEntityDiedEventFilter extends BaseEntityDiedEventFilter {
  readonly filter: "ghost_name"
  /** The ghost prototype name */
  readonly name: string
}

interface GhostEntityDiedEventFilter extends BaseEntityDiedEventFilter {
  readonly filter: "ghost"
}

interface RailEntityDiedEventFilter extends BaseEntityDiedEventFilter {
  readonly filter: "rail"
}

interface RailSignalEntityDiedEventFilter extends BaseEntityDiedEventFilter {
  readonly filter: "rail-signal"
}

interface RollingStockEntityDiedEventFilter extends BaseEntityDiedEventFilter {
  readonly filter: "rolling-stock"
}

interface RobotWithLogisticsInterfaceEntityDiedEventFilter extends BaseEntityDiedEventFilter {
  readonly filter: "robot-with-logistics-interface"
}

interface VehicleEntityDiedEventFilter extends BaseEntityDiedEventFilter {
  readonly filter: "vehicle"
}

interface TurretEntityDiedEventFilter extends BaseEntityDiedEventFilter {
  readonly filter: "turret"
}

interface CraftingMachineEntityDiedEventFilter extends BaseEntityDiedEventFilter {
  readonly filter: "crafting-machine"
}

interface WallConnectableEntityDiedEventFilter extends BaseEntityDiedEventFilter {
  readonly filter: "wall-connectable"
}

interface TransportBeltConnectableEntityDiedEventFilter extends BaseEntityDiedEventFilter {
  readonly filter: "transport-belt-connectable"
}

interface CircuitNetworkConnectableEntityDiedEventFilter extends BaseEntityDiedEventFilter {
  readonly filter: "circuit-network-connectable"
}

/**
 * Other attributes may be specified depending on `filter`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#LuaEntityDiedEventFilter View documentation}
 */
type LuaEntityDiedEventFilter =
  | TypeEntityDiedEventFilter
  | NameEntityDiedEventFilter
  | GhostTypeEntityDiedEventFilter
  | GhostNameEntityDiedEventFilter
  | GhostEntityDiedEventFilter
  | RailEntityDiedEventFilter
  | RailSignalEntityDiedEventFilter
  | RollingStockEntityDiedEventFilter
  | RobotWithLogisticsInterfaceEntityDiedEventFilter
  | VehicleEntityDiedEventFilter
  | TurretEntityDiedEventFilter
  | CraftingMachineEntityDiedEventFilter
  | WallConnectableEntityDiedEventFilter
  | TransportBeltConnectableEntityDiedEventFilter
  | CircuitNetworkConnectableEntityDiedEventFilter

interface BaseEntityMarkedForDeconstructionEventFilter {
  /**
   * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`,
   * `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`,
   * `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
   */
  readonly filter:
    | "ghost"
    | "rail"
    | "rail-signal"
    | "rolling-stock"
    | "robot-with-logistics-interface"
    | "vehicle"
    | "turret"
    | "crafting-machine"
    | "wall-connectable"
    | "transport-belt-connectable"
    | "circuit-network-connectable"
    | "type"
    | "name"
    | "ghost_type"
    | "ghost_name"
  /**
   * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the
   * filters, `"and"` has higher precedence than `"or"`.
   */
  readonly mode?: "or" | "and"
  /** Inverts the condition. Default is `false`. */
  readonly invert?: boolean
}

interface TypeEntityMarkedForDeconstructionEventFilter extends BaseEntityMarkedForDeconstructionEventFilter {
  readonly filter: "type"
  /** The prototype type */
  readonly type: string
}

interface NameEntityMarkedForDeconstructionEventFilter extends BaseEntityMarkedForDeconstructionEventFilter {
  readonly filter: "name"
  /** The prototype name */
  readonly name: string
}

interface GhostTypeEntityMarkedForDeconstructionEventFilter extends BaseEntityMarkedForDeconstructionEventFilter {
  readonly filter: "ghost_type"
  /** The ghost prototype type */
  readonly type: string
}

interface GhostNameEntityMarkedForDeconstructionEventFilter extends BaseEntityMarkedForDeconstructionEventFilter {
  readonly filter: "ghost_name"
  /** The ghost prototype name */
  readonly name: string
}

interface GhostEntityMarkedForDeconstructionEventFilter extends BaseEntityMarkedForDeconstructionEventFilter {
  readonly filter: "ghost"
}

interface RailEntityMarkedForDeconstructionEventFilter extends BaseEntityMarkedForDeconstructionEventFilter {
  readonly filter: "rail"
}

interface RailSignalEntityMarkedForDeconstructionEventFilter extends BaseEntityMarkedForDeconstructionEventFilter {
  readonly filter: "rail-signal"
}

interface RollingStockEntityMarkedForDeconstructionEventFilter extends BaseEntityMarkedForDeconstructionEventFilter {
  readonly filter: "rolling-stock"
}

interface RobotWithLogisticsInterfaceEntityMarkedForDeconstructionEventFilter
  extends BaseEntityMarkedForDeconstructionEventFilter {
  readonly filter: "robot-with-logistics-interface"
}

interface VehicleEntityMarkedForDeconstructionEventFilter extends BaseEntityMarkedForDeconstructionEventFilter {
  readonly filter: "vehicle"
}

interface TurretEntityMarkedForDeconstructionEventFilter extends BaseEntityMarkedForDeconstructionEventFilter {
  readonly filter: "turret"
}

interface CraftingMachineEntityMarkedForDeconstructionEventFilter extends BaseEntityMarkedForDeconstructionEventFilter {
  readonly filter: "crafting-machine"
}

interface WallConnectableEntityMarkedForDeconstructionEventFilter extends BaseEntityMarkedForDeconstructionEventFilter {
  readonly filter: "wall-connectable"
}

interface TransportBeltConnectableEntityMarkedForDeconstructionEventFilter
  extends BaseEntityMarkedForDeconstructionEventFilter {
  readonly filter: "transport-belt-connectable"
}

interface CircuitNetworkConnectableEntityMarkedForDeconstructionEventFilter
  extends BaseEntityMarkedForDeconstructionEventFilter {
  readonly filter: "circuit-network-connectable"
}

/**
 * Other attributes may be specified depending on `filter`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#LuaEntityMarkedForDeconstructionEventFilter View documentation}
 */
type LuaEntityMarkedForDeconstructionEventFilter =
  | TypeEntityMarkedForDeconstructionEventFilter
  | NameEntityMarkedForDeconstructionEventFilter
  | GhostTypeEntityMarkedForDeconstructionEventFilter
  | GhostNameEntityMarkedForDeconstructionEventFilter
  | GhostEntityMarkedForDeconstructionEventFilter
  | RailEntityMarkedForDeconstructionEventFilter
  | RailSignalEntityMarkedForDeconstructionEventFilter
  | RollingStockEntityMarkedForDeconstructionEventFilter
  | RobotWithLogisticsInterfaceEntityMarkedForDeconstructionEventFilter
  | VehicleEntityMarkedForDeconstructionEventFilter
  | TurretEntityMarkedForDeconstructionEventFilter
  | CraftingMachineEntityMarkedForDeconstructionEventFilter
  | WallConnectableEntityMarkedForDeconstructionEventFilter
  | TransportBeltConnectableEntityMarkedForDeconstructionEventFilter
  | CircuitNetworkConnectableEntityMarkedForDeconstructionEventFilter

interface BasePreGhostDeconstructedEventFilter {
  /**
   * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`,
   * `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`,
   * `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
   */
  readonly filter:
    | "ghost"
    | "rail"
    | "rail-signal"
    | "rolling-stock"
    | "robot-with-logistics-interface"
    | "vehicle"
    | "turret"
    | "crafting-machine"
    | "wall-connectable"
    | "transport-belt-connectable"
    | "circuit-network-connectable"
    | "type"
    | "name"
    | "ghost_type"
    | "ghost_name"
  /**
   * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the
   * filters, `"and"` has higher precedence than `"or"`.
   */
  readonly mode?: "or" | "and"
  /** Inverts the condition. Default is `false`. */
  readonly invert?: boolean
}

interface TypePreGhostDeconstructedEventFilter extends BasePreGhostDeconstructedEventFilter {
  readonly filter: "type"
  /** The prototype type */
  readonly type: string
}

interface NamePreGhostDeconstructedEventFilter extends BasePreGhostDeconstructedEventFilter {
  readonly filter: "name"
  /** The prototype name */
  readonly name: string
}

interface GhostTypePreGhostDeconstructedEventFilter extends BasePreGhostDeconstructedEventFilter {
  readonly filter: "ghost_type"
  /** The ghost prototype type */
  readonly type: string
}

interface GhostNamePreGhostDeconstructedEventFilter extends BasePreGhostDeconstructedEventFilter {
  readonly filter: "ghost_name"
  /** The ghost prototype name */
  readonly name: string
}

interface GhostPreGhostDeconstructedEventFilter extends BasePreGhostDeconstructedEventFilter {
  readonly filter: "ghost"
}

interface RailPreGhostDeconstructedEventFilter extends BasePreGhostDeconstructedEventFilter {
  readonly filter: "rail"
}

interface RailSignalPreGhostDeconstructedEventFilter extends BasePreGhostDeconstructedEventFilter {
  readonly filter: "rail-signal"
}

interface RollingStockPreGhostDeconstructedEventFilter extends BasePreGhostDeconstructedEventFilter {
  readonly filter: "rolling-stock"
}

interface RobotWithLogisticsInterfacePreGhostDeconstructedEventFilter extends BasePreGhostDeconstructedEventFilter {
  readonly filter: "robot-with-logistics-interface"
}

interface VehiclePreGhostDeconstructedEventFilter extends BasePreGhostDeconstructedEventFilter {
  readonly filter: "vehicle"
}

interface TurretPreGhostDeconstructedEventFilter extends BasePreGhostDeconstructedEventFilter {
  readonly filter: "turret"
}

interface CraftingMachinePreGhostDeconstructedEventFilter extends BasePreGhostDeconstructedEventFilter {
  readonly filter: "crafting-machine"
}

interface WallConnectablePreGhostDeconstructedEventFilter extends BasePreGhostDeconstructedEventFilter {
  readonly filter: "wall-connectable"
}

interface TransportBeltConnectablePreGhostDeconstructedEventFilter extends BasePreGhostDeconstructedEventFilter {
  readonly filter: "transport-belt-connectable"
}

interface CircuitNetworkConnectablePreGhostDeconstructedEventFilter extends BasePreGhostDeconstructedEventFilter {
  readonly filter: "circuit-network-connectable"
}

/**
 * Other attributes may be specified depending on `filter`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#LuaPreGhostDeconstructedEventFilter View documentation}
 */
type LuaPreGhostDeconstructedEventFilter =
  | TypePreGhostDeconstructedEventFilter
  | NamePreGhostDeconstructedEventFilter
  | GhostTypePreGhostDeconstructedEventFilter
  | GhostNamePreGhostDeconstructedEventFilter
  | GhostPreGhostDeconstructedEventFilter
  | RailPreGhostDeconstructedEventFilter
  | RailSignalPreGhostDeconstructedEventFilter
  | RollingStockPreGhostDeconstructedEventFilter
  | RobotWithLogisticsInterfacePreGhostDeconstructedEventFilter
  | VehiclePreGhostDeconstructedEventFilter
  | TurretPreGhostDeconstructedEventFilter
  | CraftingMachinePreGhostDeconstructedEventFilter
  | WallConnectablePreGhostDeconstructedEventFilter
  | TransportBeltConnectablePreGhostDeconstructedEventFilter
  | CircuitNetworkConnectablePreGhostDeconstructedEventFilter

interface BaseScriptRaisedDestroyEventFilter {
  /**
   * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`,
   * `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`,
   * `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
   */
  readonly filter:
    | "ghost"
    | "rail"
    | "rail-signal"
    | "rolling-stock"
    | "robot-with-logistics-interface"
    | "vehicle"
    | "turret"
    | "crafting-machine"
    | "wall-connectable"
    | "transport-belt-connectable"
    | "circuit-network-connectable"
    | "type"
    | "name"
    | "ghost_type"
    | "ghost_name"
  /**
   * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the
   * filters, `"and"` has higher precedence than `"or"`.
   */
  readonly mode?: "or" | "and"
  /** Inverts the condition. Default is `false`. */
  readonly invert?: boolean
}

interface TypeScriptRaisedDestroyEventFilter extends BaseScriptRaisedDestroyEventFilter {
  readonly filter: "type"
  /** The prototype type */
  readonly type: string
}

interface NameScriptRaisedDestroyEventFilter extends BaseScriptRaisedDestroyEventFilter {
  readonly filter: "name"
  /** The prototype name */
  readonly name: string
}

interface GhostTypeScriptRaisedDestroyEventFilter extends BaseScriptRaisedDestroyEventFilter {
  readonly filter: "ghost_type"
  /** The ghost prototype type */
  readonly type: string
}

interface GhostNameScriptRaisedDestroyEventFilter extends BaseScriptRaisedDestroyEventFilter {
  readonly filter: "ghost_name"
  /** The ghost prototype name */
  readonly name: string
}

interface GhostScriptRaisedDestroyEventFilter extends BaseScriptRaisedDestroyEventFilter {
  readonly filter: "ghost"
}

interface RailScriptRaisedDestroyEventFilter extends BaseScriptRaisedDestroyEventFilter {
  readonly filter: "rail"
}

interface RailSignalScriptRaisedDestroyEventFilter extends BaseScriptRaisedDestroyEventFilter {
  readonly filter: "rail-signal"
}

interface RollingStockScriptRaisedDestroyEventFilter extends BaseScriptRaisedDestroyEventFilter {
  readonly filter: "rolling-stock"
}

interface RobotWithLogisticsInterfaceScriptRaisedDestroyEventFilter extends BaseScriptRaisedDestroyEventFilter {
  readonly filter: "robot-with-logistics-interface"
}

interface VehicleScriptRaisedDestroyEventFilter extends BaseScriptRaisedDestroyEventFilter {
  readonly filter: "vehicle"
}

interface TurretScriptRaisedDestroyEventFilter extends BaseScriptRaisedDestroyEventFilter {
  readonly filter: "turret"
}

interface CraftingMachineScriptRaisedDestroyEventFilter extends BaseScriptRaisedDestroyEventFilter {
  readonly filter: "crafting-machine"
}

interface WallConnectableScriptRaisedDestroyEventFilter extends BaseScriptRaisedDestroyEventFilter {
  readonly filter: "wall-connectable"
}

interface TransportBeltConnectableScriptRaisedDestroyEventFilter extends BaseScriptRaisedDestroyEventFilter {
  readonly filter: "transport-belt-connectable"
}

interface CircuitNetworkConnectableScriptRaisedDestroyEventFilter extends BaseScriptRaisedDestroyEventFilter {
  readonly filter: "circuit-network-connectable"
}

/**
 * Other attributes may be specified depending on `filter`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#LuaScriptRaisedDestroyEventFilter View documentation}
 */
type LuaScriptRaisedDestroyEventFilter =
  | TypeScriptRaisedDestroyEventFilter
  | NameScriptRaisedDestroyEventFilter
  | GhostTypeScriptRaisedDestroyEventFilter
  | GhostNameScriptRaisedDestroyEventFilter
  | GhostScriptRaisedDestroyEventFilter
  | RailScriptRaisedDestroyEventFilter
  | RailSignalScriptRaisedDestroyEventFilter
  | RollingStockScriptRaisedDestroyEventFilter
  | RobotWithLogisticsInterfaceScriptRaisedDestroyEventFilter
  | VehicleScriptRaisedDestroyEventFilter
  | TurretScriptRaisedDestroyEventFilter
  | CraftingMachineScriptRaisedDestroyEventFilter
  | WallConnectableScriptRaisedDestroyEventFilter
  | TransportBeltConnectableScriptRaisedDestroyEventFilter
  | CircuitNetworkConnectableScriptRaisedDestroyEventFilter

interface BaseUpgradeCancelledEventFilter {
  /**
   * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`,
   * `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`,
   * `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
   */
  readonly filter:
    | "ghost"
    | "rail"
    | "rail-signal"
    | "rolling-stock"
    | "robot-with-logistics-interface"
    | "vehicle"
    | "turret"
    | "crafting-machine"
    | "wall-connectable"
    | "transport-belt-connectable"
    | "circuit-network-connectable"
    | "type"
    | "name"
    | "ghost_type"
    | "ghost_name"
  /**
   * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the
   * filters, `"and"` has higher precedence than `"or"`.
   */
  readonly mode?: "or" | "and"
  /** Inverts the condition. Default is `false`. */
  readonly invert?: boolean
}

interface TypeUpgradeCancelledEventFilter extends BaseUpgradeCancelledEventFilter {
  readonly filter: "type"
  /** The prototype type */
  readonly type: string
}

interface NameUpgradeCancelledEventFilter extends BaseUpgradeCancelledEventFilter {
  readonly filter: "name"
  /** The prototype name */
  readonly name: string
}

interface GhostTypeUpgradeCancelledEventFilter extends BaseUpgradeCancelledEventFilter {
  readonly filter: "ghost_type"
  /** The ghost prototype type */
  readonly type: string
}

interface GhostNameUpgradeCancelledEventFilter extends BaseUpgradeCancelledEventFilter {
  readonly filter: "ghost_name"
  /** The ghost prototype name */
  readonly name: string
}

interface GhostUpgradeCancelledEventFilter extends BaseUpgradeCancelledEventFilter {
  readonly filter: "ghost"
}

interface RailUpgradeCancelledEventFilter extends BaseUpgradeCancelledEventFilter {
  readonly filter: "rail"
}

interface RailSignalUpgradeCancelledEventFilter extends BaseUpgradeCancelledEventFilter {
  readonly filter: "rail-signal"
}

interface RollingStockUpgradeCancelledEventFilter extends BaseUpgradeCancelledEventFilter {
  readonly filter: "rolling-stock"
}

interface RobotWithLogisticsInterfaceUpgradeCancelledEventFilter extends BaseUpgradeCancelledEventFilter {
  readonly filter: "robot-with-logistics-interface"
}

interface VehicleUpgradeCancelledEventFilter extends BaseUpgradeCancelledEventFilter {
  readonly filter: "vehicle"
}

interface TurretUpgradeCancelledEventFilter extends BaseUpgradeCancelledEventFilter {
  readonly filter: "turret"
}

interface CraftingMachineUpgradeCancelledEventFilter extends BaseUpgradeCancelledEventFilter {
  readonly filter: "crafting-machine"
}

interface WallConnectableUpgradeCancelledEventFilter extends BaseUpgradeCancelledEventFilter {
  readonly filter: "wall-connectable"
}

interface TransportBeltConnectableUpgradeCancelledEventFilter extends BaseUpgradeCancelledEventFilter {
  readonly filter: "transport-belt-connectable"
}

interface CircuitNetworkConnectableUpgradeCancelledEventFilter extends BaseUpgradeCancelledEventFilter {
  readonly filter: "circuit-network-connectable"
}

/**
 * Other attributes may be specified depending on `filter`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#LuaUpgradeCancelledEventFilter View documentation}
 */
type LuaUpgradeCancelledEventFilter =
  | TypeUpgradeCancelledEventFilter
  | NameUpgradeCancelledEventFilter
  | GhostTypeUpgradeCancelledEventFilter
  | GhostNameUpgradeCancelledEventFilter
  | GhostUpgradeCancelledEventFilter
  | RailUpgradeCancelledEventFilter
  | RailSignalUpgradeCancelledEventFilter
  | RollingStockUpgradeCancelledEventFilter
  | RobotWithLogisticsInterfaceUpgradeCancelledEventFilter
  | VehicleUpgradeCancelledEventFilter
  | TurretUpgradeCancelledEventFilter
  | CraftingMachineUpgradeCancelledEventFilter
  | WallConnectableUpgradeCancelledEventFilter
  | TransportBeltConnectableUpgradeCancelledEventFilter
  | CircuitNetworkConnectableUpgradeCancelledEventFilter

interface BasePlayerRepairedEntityEventFilter {
  /**
   * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`,
   * `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`,
   * `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
   */
  readonly filter:
    | "ghost"
    | "rail"
    | "rail-signal"
    | "rolling-stock"
    | "robot-with-logistics-interface"
    | "vehicle"
    | "turret"
    | "crafting-machine"
    | "wall-connectable"
    | "transport-belt-connectable"
    | "circuit-network-connectable"
    | "type"
    | "name"
    | "ghost_type"
    | "ghost_name"
  /**
   * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the
   * filters, `"and"` has higher precedence than `"or"`.
   */
  readonly mode?: "or" | "and"
  /** Inverts the condition. Default is `false`. */
  readonly invert?: boolean
}

interface TypePlayerRepairedEntityEventFilter extends BasePlayerRepairedEntityEventFilter {
  readonly filter: "type"
  /** The prototype type */
  readonly type: string
}

interface NamePlayerRepairedEntityEventFilter extends BasePlayerRepairedEntityEventFilter {
  readonly filter: "name"
  /** The prototype name */
  readonly name: string
}

interface GhostTypePlayerRepairedEntityEventFilter extends BasePlayerRepairedEntityEventFilter {
  readonly filter: "ghost_type"
  /** The ghost prototype type */
  readonly type: string
}

interface GhostNamePlayerRepairedEntityEventFilter extends BasePlayerRepairedEntityEventFilter {
  readonly filter: "ghost_name"
  /** The ghost prototype name */
  readonly name: string
}

interface GhostPlayerRepairedEntityEventFilter extends BasePlayerRepairedEntityEventFilter {
  readonly filter: "ghost"
}

interface RailPlayerRepairedEntityEventFilter extends BasePlayerRepairedEntityEventFilter {
  readonly filter: "rail"
}

interface RailSignalPlayerRepairedEntityEventFilter extends BasePlayerRepairedEntityEventFilter {
  readonly filter: "rail-signal"
}

interface RollingStockPlayerRepairedEntityEventFilter extends BasePlayerRepairedEntityEventFilter {
  readonly filter: "rolling-stock"
}

interface RobotWithLogisticsInterfacePlayerRepairedEntityEventFilter extends BasePlayerRepairedEntityEventFilter {
  readonly filter: "robot-with-logistics-interface"
}

interface VehiclePlayerRepairedEntityEventFilter extends BasePlayerRepairedEntityEventFilter {
  readonly filter: "vehicle"
}

interface TurretPlayerRepairedEntityEventFilter extends BasePlayerRepairedEntityEventFilter {
  readonly filter: "turret"
}

interface CraftingMachinePlayerRepairedEntityEventFilter extends BasePlayerRepairedEntityEventFilter {
  readonly filter: "crafting-machine"
}

interface WallConnectablePlayerRepairedEntityEventFilter extends BasePlayerRepairedEntityEventFilter {
  readonly filter: "wall-connectable"
}

interface TransportBeltConnectablePlayerRepairedEntityEventFilter extends BasePlayerRepairedEntityEventFilter {
  readonly filter: "transport-belt-connectable"
}

interface CircuitNetworkConnectablePlayerRepairedEntityEventFilter extends BasePlayerRepairedEntityEventFilter {
  readonly filter: "circuit-network-connectable"
}

/**
 * Other attributes may be specified depending on `filter`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#LuaPlayerRepairedEntityEventFilter View documentation}
 */
type LuaPlayerRepairedEntityEventFilter =
  | TypePlayerRepairedEntityEventFilter
  | NamePlayerRepairedEntityEventFilter
  | GhostTypePlayerRepairedEntityEventFilter
  | GhostNamePlayerRepairedEntityEventFilter
  | GhostPlayerRepairedEntityEventFilter
  | RailPlayerRepairedEntityEventFilter
  | RailSignalPlayerRepairedEntityEventFilter
  | RollingStockPlayerRepairedEntityEventFilter
  | RobotWithLogisticsInterfacePlayerRepairedEntityEventFilter
  | VehiclePlayerRepairedEntityEventFilter
  | TurretPlayerRepairedEntityEventFilter
  | CraftingMachinePlayerRepairedEntityEventFilter
  | WallConnectablePlayerRepairedEntityEventFilter
  | TransportBeltConnectablePlayerRepairedEntityEventFilter
  | CircuitNetworkConnectablePlayerRepairedEntityEventFilter

interface BaseEntityMarkedForUpgradeEventFilter {
  /**
   * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`,
   * `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`,
   * `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
   */
  readonly filter:
    | "ghost"
    | "rail"
    | "rail-signal"
    | "rolling-stock"
    | "robot-with-logistics-interface"
    | "vehicle"
    | "turret"
    | "crafting-machine"
    | "wall-connectable"
    | "transport-belt-connectable"
    | "circuit-network-connectable"
    | "type"
    | "name"
    | "ghost_type"
    | "ghost_name"
  /**
   * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the
   * filters, `"and"` has higher precedence than `"or"`.
   */
  readonly mode?: "or" | "and"
  /** Inverts the condition. Default is `false`. */
  readonly invert?: boolean
}

interface TypeEntityMarkedForUpgradeEventFilter extends BaseEntityMarkedForUpgradeEventFilter {
  readonly filter: "type"
  /** The prototype type */
  readonly type: string
}

interface NameEntityMarkedForUpgradeEventFilter extends BaseEntityMarkedForUpgradeEventFilter {
  readonly filter: "name"
  /** The prototype name */
  readonly name: string
}

interface GhostTypeEntityMarkedForUpgradeEventFilter extends BaseEntityMarkedForUpgradeEventFilter {
  readonly filter: "ghost_type"
  /** The ghost prototype type */
  readonly type: string
}

interface GhostNameEntityMarkedForUpgradeEventFilter extends BaseEntityMarkedForUpgradeEventFilter {
  readonly filter: "ghost_name"
  /** The ghost prototype name */
  readonly name: string
}

interface GhostEntityMarkedForUpgradeEventFilter extends BaseEntityMarkedForUpgradeEventFilter {
  readonly filter: "ghost"
}

interface RailEntityMarkedForUpgradeEventFilter extends BaseEntityMarkedForUpgradeEventFilter {
  readonly filter: "rail"
}

interface RailSignalEntityMarkedForUpgradeEventFilter extends BaseEntityMarkedForUpgradeEventFilter {
  readonly filter: "rail-signal"
}

interface RollingStockEntityMarkedForUpgradeEventFilter extends BaseEntityMarkedForUpgradeEventFilter {
  readonly filter: "rolling-stock"
}

interface RobotWithLogisticsInterfaceEntityMarkedForUpgradeEventFilter extends BaseEntityMarkedForUpgradeEventFilter {
  readonly filter: "robot-with-logistics-interface"
}

interface VehicleEntityMarkedForUpgradeEventFilter extends BaseEntityMarkedForUpgradeEventFilter {
  readonly filter: "vehicle"
}

interface TurretEntityMarkedForUpgradeEventFilter extends BaseEntityMarkedForUpgradeEventFilter {
  readonly filter: "turret"
}

interface CraftingMachineEntityMarkedForUpgradeEventFilter extends BaseEntityMarkedForUpgradeEventFilter {
  readonly filter: "crafting-machine"
}

interface WallConnectableEntityMarkedForUpgradeEventFilter extends BaseEntityMarkedForUpgradeEventFilter {
  readonly filter: "wall-connectable"
}

interface TransportBeltConnectableEntityMarkedForUpgradeEventFilter extends BaseEntityMarkedForUpgradeEventFilter {
  readonly filter: "transport-belt-connectable"
}

interface CircuitNetworkConnectableEntityMarkedForUpgradeEventFilter extends BaseEntityMarkedForUpgradeEventFilter {
  readonly filter: "circuit-network-connectable"
}

/**
 * Other attributes may be specified depending on `filter`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#LuaEntityMarkedForUpgradeEventFilter View documentation}
 */
type LuaEntityMarkedForUpgradeEventFilter =
  | TypeEntityMarkedForUpgradeEventFilter
  | NameEntityMarkedForUpgradeEventFilter
  | GhostTypeEntityMarkedForUpgradeEventFilter
  | GhostNameEntityMarkedForUpgradeEventFilter
  | GhostEntityMarkedForUpgradeEventFilter
  | RailEntityMarkedForUpgradeEventFilter
  | RailSignalEntityMarkedForUpgradeEventFilter
  | RollingStockEntityMarkedForUpgradeEventFilter
  | RobotWithLogisticsInterfaceEntityMarkedForUpgradeEventFilter
  | VehicleEntityMarkedForUpgradeEventFilter
  | TurretEntityMarkedForUpgradeEventFilter
  | CraftingMachineEntityMarkedForUpgradeEventFilter
  | WallConnectableEntityMarkedForUpgradeEventFilter
  | TransportBeltConnectableEntityMarkedForUpgradeEventFilter
  | CircuitNetworkConnectableEntityMarkedForUpgradeEventFilter

interface BasePostEntityDiedEventFilter {
  /** The condition to filter on. One of `"type"` */
  readonly filter: "type"
  /**
   * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the
   * filters, `"and"` has higher precedence than `"or"`.
   */
  readonly mode?: "or" | "and"
  /** Inverts the condition. Default is `false`. */
  readonly invert?: boolean
}

interface TypePostEntityDiedEventFilter extends BasePostEntityDiedEventFilter {
  readonly filter: "type"
  /** The prototype type */
  readonly type: string
}

/**
 * Other attributes may be specified depending on `filter`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#LuaPostEntityDiedEventFilter View documentation}
 */
type LuaPostEntityDiedEventFilter = TypePostEntityDiedEventFilter

interface BasePreRobotMinedEntityEventFilter {
  /**
   * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`,
   * `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`,
   * `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
   */
  readonly filter:
    | "ghost"
    | "rail"
    | "rail-signal"
    | "rolling-stock"
    | "robot-with-logistics-interface"
    | "vehicle"
    | "turret"
    | "crafting-machine"
    | "wall-connectable"
    | "transport-belt-connectable"
    | "circuit-network-connectable"
    | "type"
    | "name"
    | "ghost_type"
    | "ghost_name"
  /**
   * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the
   * filters, `"and"` has higher precedence than `"or"`.
   */
  readonly mode?: "or" | "and"
  /** Inverts the condition. Default is `false`. */
  readonly invert?: boolean
}

interface TypePreRobotMinedEntityEventFilter extends BasePreRobotMinedEntityEventFilter {
  readonly filter: "type"
  /** The prototype type */
  readonly type: string
}

interface NamePreRobotMinedEntityEventFilter extends BasePreRobotMinedEntityEventFilter {
  readonly filter: "name"
  /** The prototype name */
  readonly name: string
}

interface GhostTypePreRobotMinedEntityEventFilter extends BasePreRobotMinedEntityEventFilter {
  readonly filter: "ghost_type"
  /** The ghost prototype type */
  readonly type: string
}

interface GhostNamePreRobotMinedEntityEventFilter extends BasePreRobotMinedEntityEventFilter {
  readonly filter: "ghost_name"
  /** The ghost prototype name */
  readonly name: string
}

interface GhostPreRobotMinedEntityEventFilter extends BasePreRobotMinedEntityEventFilter {
  readonly filter: "ghost"
}

interface RailPreRobotMinedEntityEventFilter extends BasePreRobotMinedEntityEventFilter {
  readonly filter: "rail"
}

interface RailSignalPreRobotMinedEntityEventFilter extends BasePreRobotMinedEntityEventFilter {
  readonly filter: "rail-signal"
}

interface RollingStockPreRobotMinedEntityEventFilter extends BasePreRobotMinedEntityEventFilter {
  readonly filter: "rolling-stock"
}

interface RobotWithLogisticsInterfacePreRobotMinedEntityEventFilter extends BasePreRobotMinedEntityEventFilter {
  readonly filter: "robot-with-logistics-interface"
}

interface VehiclePreRobotMinedEntityEventFilter extends BasePreRobotMinedEntityEventFilter {
  readonly filter: "vehicle"
}

interface TurretPreRobotMinedEntityEventFilter extends BasePreRobotMinedEntityEventFilter {
  readonly filter: "turret"
}

interface CraftingMachinePreRobotMinedEntityEventFilter extends BasePreRobotMinedEntityEventFilter {
  readonly filter: "crafting-machine"
}

interface WallConnectablePreRobotMinedEntityEventFilter extends BasePreRobotMinedEntityEventFilter {
  readonly filter: "wall-connectable"
}

interface TransportBeltConnectablePreRobotMinedEntityEventFilter extends BasePreRobotMinedEntityEventFilter {
  readonly filter: "transport-belt-connectable"
}

interface CircuitNetworkConnectablePreRobotMinedEntityEventFilter extends BasePreRobotMinedEntityEventFilter {
  readonly filter: "circuit-network-connectable"
}

/**
 * Other attributes may be specified depending on `filter`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#LuaPreRobotMinedEntityEventFilter View documentation}
 */
type LuaPreRobotMinedEntityEventFilter =
  | TypePreRobotMinedEntityEventFilter
  | NamePreRobotMinedEntityEventFilter
  | GhostTypePreRobotMinedEntityEventFilter
  | GhostNamePreRobotMinedEntityEventFilter
  | GhostPreRobotMinedEntityEventFilter
  | RailPreRobotMinedEntityEventFilter
  | RailSignalPreRobotMinedEntityEventFilter
  | RollingStockPreRobotMinedEntityEventFilter
  | RobotWithLogisticsInterfacePreRobotMinedEntityEventFilter
  | VehiclePreRobotMinedEntityEventFilter
  | TurretPreRobotMinedEntityEventFilter
  | CraftingMachinePreRobotMinedEntityEventFilter
  | WallConnectablePreRobotMinedEntityEventFilter
  | TransportBeltConnectablePreRobotMinedEntityEventFilter
  | CircuitNetworkConnectablePreRobotMinedEntityEventFilter

interface BaseEntityClonedEventFilter {
  /**
   * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`,
   * `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`,
   * `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
   */
  readonly filter:
    | "ghost"
    | "rail"
    | "rail-signal"
    | "rolling-stock"
    | "robot-with-logistics-interface"
    | "vehicle"
    | "turret"
    | "crafting-machine"
    | "wall-connectable"
    | "transport-belt-connectable"
    | "circuit-network-connectable"
    | "type"
    | "name"
    | "ghost_type"
    | "ghost_name"
  /**
   * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the
   * filters, `"and"` has higher precedence than `"or"`.
   */
  readonly mode?: "or" | "and"
  /** Inverts the condition. Default is `false`. */
  readonly invert?: boolean
}

interface TypeEntityClonedEventFilter extends BaseEntityClonedEventFilter {
  readonly filter: "type"
  /** The prototype type */
  readonly type: string
}

interface NameEntityClonedEventFilter extends BaseEntityClonedEventFilter {
  readonly filter: "name"
  /** The prototype name */
  readonly name: string
}

interface GhostTypeEntityClonedEventFilter extends BaseEntityClonedEventFilter {
  readonly filter: "ghost_type"
  /** The ghost prototype type */
  readonly type: string
}

interface GhostNameEntityClonedEventFilter extends BaseEntityClonedEventFilter {
  readonly filter: "ghost_name"
  /** The ghost prototype name */
  readonly name: string
}

interface GhostEntityClonedEventFilter extends BaseEntityClonedEventFilter {
  readonly filter: "ghost"
}

interface RailEntityClonedEventFilter extends BaseEntityClonedEventFilter {
  readonly filter: "rail"
}

interface RailSignalEntityClonedEventFilter extends BaseEntityClonedEventFilter {
  readonly filter: "rail-signal"
}

interface RollingStockEntityClonedEventFilter extends BaseEntityClonedEventFilter {
  readonly filter: "rolling-stock"
}

interface RobotWithLogisticsInterfaceEntityClonedEventFilter extends BaseEntityClonedEventFilter {
  readonly filter: "robot-with-logistics-interface"
}

interface VehicleEntityClonedEventFilter extends BaseEntityClonedEventFilter {
  readonly filter: "vehicle"
}

interface TurretEntityClonedEventFilter extends BaseEntityClonedEventFilter {
  readonly filter: "turret"
}

interface CraftingMachineEntityClonedEventFilter extends BaseEntityClonedEventFilter {
  readonly filter: "crafting-machine"
}

interface WallConnectableEntityClonedEventFilter extends BaseEntityClonedEventFilter {
  readonly filter: "wall-connectable"
}

interface TransportBeltConnectableEntityClonedEventFilter extends BaseEntityClonedEventFilter {
  readonly filter: "transport-belt-connectable"
}

interface CircuitNetworkConnectableEntityClonedEventFilter extends BaseEntityClonedEventFilter {
  readonly filter: "circuit-network-connectable"
}

/**
 * Other attributes may be specified depending on `filter`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#LuaEntityClonedEventFilter View documentation}
 */
type LuaEntityClonedEventFilter =
  | TypeEntityClonedEventFilter
  | NameEntityClonedEventFilter
  | GhostTypeEntityClonedEventFilter
  | GhostNameEntityClonedEventFilter
  | GhostEntityClonedEventFilter
  | RailEntityClonedEventFilter
  | RailSignalEntityClonedEventFilter
  | RollingStockEntityClonedEventFilter
  | RobotWithLogisticsInterfaceEntityClonedEventFilter
  | VehicleEntityClonedEventFilter
  | TurretEntityClonedEventFilter
  | CraftingMachineEntityClonedEventFilter
  | WallConnectableEntityClonedEventFilter
  | TransportBeltConnectableEntityClonedEventFilter
  | CircuitNetworkConnectableEntityClonedEventFilter

interface BaseScriptRaisedBuiltEventFilter {
  /**
   * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`,
   * `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`,
   * `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
   */
  readonly filter:
    | "ghost"
    | "rail"
    | "rail-signal"
    | "rolling-stock"
    | "robot-with-logistics-interface"
    | "vehicle"
    | "turret"
    | "crafting-machine"
    | "wall-connectable"
    | "transport-belt-connectable"
    | "circuit-network-connectable"
    | "type"
    | "name"
    | "ghost_type"
    | "ghost_name"
  /**
   * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the
   * filters, `"and"` has higher precedence than `"or"`.
   */
  readonly mode?: "or" | "and"
  /** Inverts the condition. Default is `false`. */
  readonly invert?: boolean
}

interface TypeScriptRaisedBuiltEventFilter extends BaseScriptRaisedBuiltEventFilter {
  readonly filter: "type"
  /** The prototype type */
  readonly type: string
}

interface NameScriptRaisedBuiltEventFilter extends BaseScriptRaisedBuiltEventFilter {
  readonly filter: "name"
  /** The prototype name */
  readonly name: string
}

interface GhostTypeScriptRaisedBuiltEventFilter extends BaseScriptRaisedBuiltEventFilter {
  readonly filter: "ghost_type"
  /** The ghost prototype type */
  readonly type: string
}

interface GhostNameScriptRaisedBuiltEventFilter extends BaseScriptRaisedBuiltEventFilter {
  readonly filter: "ghost_name"
  /** The ghost prototype name */
  readonly name: string
}

interface GhostScriptRaisedBuiltEventFilter extends BaseScriptRaisedBuiltEventFilter {
  readonly filter: "ghost"
}

interface RailScriptRaisedBuiltEventFilter extends BaseScriptRaisedBuiltEventFilter {
  readonly filter: "rail"
}

interface RailSignalScriptRaisedBuiltEventFilter extends BaseScriptRaisedBuiltEventFilter {
  readonly filter: "rail-signal"
}

interface RollingStockScriptRaisedBuiltEventFilter extends BaseScriptRaisedBuiltEventFilter {
  readonly filter: "rolling-stock"
}

interface RobotWithLogisticsInterfaceScriptRaisedBuiltEventFilter extends BaseScriptRaisedBuiltEventFilter {
  readonly filter: "robot-with-logistics-interface"
}

interface VehicleScriptRaisedBuiltEventFilter extends BaseScriptRaisedBuiltEventFilter {
  readonly filter: "vehicle"
}

interface TurretScriptRaisedBuiltEventFilter extends BaseScriptRaisedBuiltEventFilter {
  readonly filter: "turret"
}

interface CraftingMachineScriptRaisedBuiltEventFilter extends BaseScriptRaisedBuiltEventFilter {
  readonly filter: "crafting-machine"
}

interface WallConnectableScriptRaisedBuiltEventFilter extends BaseScriptRaisedBuiltEventFilter {
  readonly filter: "wall-connectable"
}

interface TransportBeltConnectableScriptRaisedBuiltEventFilter extends BaseScriptRaisedBuiltEventFilter {
  readonly filter: "transport-belt-connectable"
}

interface CircuitNetworkConnectableScriptRaisedBuiltEventFilter extends BaseScriptRaisedBuiltEventFilter {
  readonly filter: "circuit-network-connectable"
}

/**
 * Other attributes may be specified depending on `filter`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#LuaScriptRaisedBuiltEventFilter View documentation}
 */
type LuaScriptRaisedBuiltEventFilter =
  | TypeScriptRaisedBuiltEventFilter
  | NameScriptRaisedBuiltEventFilter
  | GhostTypeScriptRaisedBuiltEventFilter
  | GhostNameScriptRaisedBuiltEventFilter
  | GhostScriptRaisedBuiltEventFilter
  | RailScriptRaisedBuiltEventFilter
  | RailSignalScriptRaisedBuiltEventFilter
  | RollingStockScriptRaisedBuiltEventFilter
  | RobotWithLogisticsInterfaceScriptRaisedBuiltEventFilter
  | VehicleScriptRaisedBuiltEventFilter
  | TurretScriptRaisedBuiltEventFilter
  | CraftingMachineScriptRaisedBuiltEventFilter
  | WallConnectableScriptRaisedBuiltEventFilter
  | TransportBeltConnectableScriptRaisedBuiltEventFilter
  | CircuitNetworkConnectableScriptRaisedBuiltEventFilter

interface BaseRobotMinedEntityEventFilter {
  /**
   * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`,
   * `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`,
   * `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
   */
  readonly filter:
    | "ghost"
    | "rail"
    | "rail-signal"
    | "rolling-stock"
    | "robot-with-logistics-interface"
    | "vehicle"
    | "turret"
    | "crafting-machine"
    | "wall-connectable"
    | "transport-belt-connectable"
    | "circuit-network-connectable"
    | "type"
    | "name"
    | "ghost_type"
    | "ghost_name"
  /**
   * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the
   * filters, `"and"` has higher precedence than `"or"`.
   */
  readonly mode?: "or" | "and"
  /** Inverts the condition. Default is `false`. */
  readonly invert?: boolean
}

interface TypeRobotMinedEntityEventFilter extends BaseRobotMinedEntityEventFilter {
  readonly filter: "type"
  /** The prototype type */
  readonly type: string
}

interface NameRobotMinedEntityEventFilter extends BaseRobotMinedEntityEventFilter {
  readonly filter: "name"
  /** The prototype name */
  readonly name: string
}

interface GhostTypeRobotMinedEntityEventFilter extends BaseRobotMinedEntityEventFilter {
  readonly filter: "ghost_type"
  /** The ghost prototype type */
  readonly type: string
}

interface GhostNameRobotMinedEntityEventFilter extends BaseRobotMinedEntityEventFilter {
  readonly filter: "ghost_name"
  /** The ghost prototype name */
  readonly name: string
}

interface GhostRobotMinedEntityEventFilter extends BaseRobotMinedEntityEventFilter {
  readonly filter: "ghost"
}

interface RailRobotMinedEntityEventFilter extends BaseRobotMinedEntityEventFilter {
  readonly filter: "rail"
}

interface RailSignalRobotMinedEntityEventFilter extends BaseRobotMinedEntityEventFilter {
  readonly filter: "rail-signal"
}

interface RollingStockRobotMinedEntityEventFilter extends BaseRobotMinedEntityEventFilter {
  readonly filter: "rolling-stock"
}

interface RobotWithLogisticsInterfaceRobotMinedEntityEventFilter extends BaseRobotMinedEntityEventFilter {
  readonly filter: "robot-with-logistics-interface"
}

interface VehicleRobotMinedEntityEventFilter extends BaseRobotMinedEntityEventFilter {
  readonly filter: "vehicle"
}

interface TurretRobotMinedEntityEventFilter extends BaseRobotMinedEntityEventFilter {
  readonly filter: "turret"
}

interface CraftingMachineRobotMinedEntityEventFilter extends BaseRobotMinedEntityEventFilter {
  readonly filter: "crafting-machine"
}

interface WallConnectableRobotMinedEntityEventFilter extends BaseRobotMinedEntityEventFilter {
  readonly filter: "wall-connectable"
}

interface TransportBeltConnectableRobotMinedEntityEventFilter extends BaseRobotMinedEntityEventFilter {
  readonly filter: "transport-belt-connectable"
}

interface CircuitNetworkConnectableRobotMinedEntityEventFilter extends BaseRobotMinedEntityEventFilter {
  readonly filter: "circuit-network-connectable"
}

/**
 * Other attributes may be specified depending on `filter`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#LuaRobotMinedEntityEventFilter View documentation}
 */
type LuaRobotMinedEntityEventFilter =
  | TypeRobotMinedEntityEventFilter
  | NameRobotMinedEntityEventFilter
  | GhostTypeRobotMinedEntityEventFilter
  | GhostNameRobotMinedEntityEventFilter
  | GhostRobotMinedEntityEventFilter
  | RailRobotMinedEntityEventFilter
  | RailSignalRobotMinedEntityEventFilter
  | RollingStockRobotMinedEntityEventFilter
  | RobotWithLogisticsInterfaceRobotMinedEntityEventFilter
  | VehicleRobotMinedEntityEventFilter
  | TurretRobotMinedEntityEventFilter
  | CraftingMachineRobotMinedEntityEventFilter
  | WallConnectableRobotMinedEntityEventFilter
  | TransportBeltConnectableRobotMinedEntityEventFilter
  | CircuitNetworkConnectableRobotMinedEntityEventFilter

interface BasePrePlayerMinedEntityEventFilter {
  /**
   * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`,
   * `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`,
   * `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
   */
  readonly filter:
    | "ghost"
    | "rail"
    | "rail-signal"
    | "rolling-stock"
    | "robot-with-logistics-interface"
    | "vehicle"
    | "turret"
    | "crafting-machine"
    | "wall-connectable"
    | "transport-belt-connectable"
    | "circuit-network-connectable"
    | "type"
    | "name"
    | "ghost_type"
    | "ghost_name"
  /**
   * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the
   * filters, `"and"` has higher precedence than `"or"`.
   */
  readonly mode?: "or" | "and"
  /** Inverts the condition. Default is `false`. */
  readonly invert?: boolean
}

interface TypePrePlayerMinedEntityEventFilter extends BasePrePlayerMinedEntityEventFilter {
  readonly filter: "type"
  /** The prototype type */
  readonly type: string
}

interface NamePrePlayerMinedEntityEventFilter extends BasePrePlayerMinedEntityEventFilter {
  readonly filter: "name"
  /** The prototype name */
  readonly name: string
}

interface GhostTypePrePlayerMinedEntityEventFilter extends BasePrePlayerMinedEntityEventFilter {
  readonly filter: "ghost_type"
  /** The ghost prototype type */
  readonly type: string
}

interface GhostNamePrePlayerMinedEntityEventFilter extends BasePrePlayerMinedEntityEventFilter {
  readonly filter: "ghost_name"
  /** The ghost prototype name */
  readonly name: string
}

interface GhostPrePlayerMinedEntityEventFilter extends BasePrePlayerMinedEntityEventFilter {
  readonly filter: "ghost"
}

interface RailPrePlayerMinedEntityEventFilter extends BasePrePlayerMinedEntityEventFilter {
  readonly filter: "rail"
}

interface RailSignalPrePlayerMinedEntityEventFilter extends BasePrePlayerMinedEntityEventFilter {
  readonly filter: "rail-signal"
}

interface RollingStockPrePlayerMinedEntityEventFilter extends BasePrePlayerMinedEntityEventFilter {
  readonly filter: "rolling-stock"
}

interface RobotWithLogisticsInterfacePrePlayerMinedEntityEventFilter extends BasePrePlayerMinedEntityEventFilter {
  readonly filter: "robot-with-logistics-interface"
}

interface VehiclePrePlayerMinedEntityEventFilter extends BasePrePlayerMinedEntityEventFilter {
  readonly filter: "vehicle"
}

interface TurretPrePlayerMinedEntityEventFilter extends BasePrePlayerMinedEntityEventFilter {
  readonly filter: "turret"
}

interface CraftingMachinePrePlayerMinedEntityEventFilter extends BasePrePlayerMinedEntityEventFilter {
  readonly filter: "crafting-machine"
}

interface WallConnectablePrePlayerMinedEntityEventFilter extends BasePrePlayerMinedEntityEventFilter {
  readonly filter: "wall-connectable"
}

interface TransportBeltConnectablePrePlayerMinedEntityEventFilter extends BasePrePlayerMinedEntityEventFilter {
  readonly filter: "transport-belt-connectable"
}

interface CircuitNetworkConnectablePrePlayerMinedEntityEventFilter extends BasePrePlayerMinedEntityEventFilter {
  readonly filter: "circuit-network-connectable"
}

/**
 * Other attributes may be specified depending on `filter`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#LuaPrePlayerMinedEntityEventFilter View documentation}
 */
type LuaPrePlayerMinedEntityEventFilter =
  | TypePrePlayerMinedEntityEventFilter
  | NamePrePlayerMinedEntityEventFilter
  | GhostTypePrePlayerMinedEntityEventFilter
  | GhostNamePrePlayerMinedEntityEventFilter
  | GhostPrePlayerMinedEntityEventFilter
  | RailPrePlayerMinedEntityEventFilter
  | RailSignalPrePlayerMinedEntityEventFilter
  | RollingStockPrePlayerMinedEntityEventFilter
  | RobotWithLogisticsInterfacePrePlayerMinedEntityEventFilter
  | VehiclePrePlayerMinedEntityEventFilter
  | TurretPrePlayerMinedEntityEventFilter
  | CraftingMachinePrePlayerMinedEntityEventFilter
  | WallConnectablePrePlayerMinedEntityEventFilter
  | TransportBeltConnectablePrePlayerMinedEntityEventFilter
  | CircuitNetworkConnectablePrePlayerMinedEntityEventFilter

interface BaseRobotBuiltEntityEventFilter {
  /**
   * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`,
   * `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`,
   * `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`,
   * `"ghost_name"`, `"force"`
   */
  readonly filter:
    | "ghost"
    | "rail"
    | "rail-signal"
    | "rolling-stock"
    | "robot-with-logistics-interface"
    | "vehicle"
    | "turret"
    | "crafting-machine"
    | "wall-connectable"
    | "transport-belt-connectable"
    | "circuit-network-connectable"
    | "type"
    | "name"
    | "ghost_type"
    | "ghost_name"
    | "force"
  /**
   * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the
   * filters, `"and"` has higher precedence than `"or"`.
   */
  readonly mode?: "or" | "and"
  /** Inverts the condition. Default is `false`. */
  readonly invert?: boolean
}

interface TypeRobotBuiltEntityEventFilter extends BaseRobotBuiltEntityEventFilter {
  readonly filter: "type"
  /** The prototype type */
  readonly type: string
}

interface NameRobotBuiltEntityEventFilter extends BaseRobotBuiltEntityEventFilter {
  readonly filter: "name"
  /** The prototype name */
  readonly name: string
}

interface GhostTypeRobotBuiltEntityEventFilter extends BaseRobotBuiltEntityEventFilter {
  readonly filter: "ghost_type"
  /** The ghost prototype type */
  readonly type: string
}

interface GhostNameRobotBuiltEntityEventFilter extends BaseRobotBuiltEntityEventFilter {
  readonly filter: "ghost_name"
  /** The ghost prototype name */
  readonly name: string
}

interface ForceRobotBuiltEntityEventFilter extends BaseRobotBuiltEntityEventFilter {
  readonly filter: "force"
  /** The entity force */
  readonly force: string
}

interface GhostRobotBuiltEntityEventFilter extends BaseRobotBuiltEntityEventFilter {
  readonly filter: "ghost"
}

interface RailRobotBuiltEntityEventFilter extends BaseRobotBuiltEntityEventFilter {
  readonly filter: "rail"
}

interface RailSignalRobotBuiltEntityEventFilter extends BaseRobotBuiltEntityEventFilter {
  readonly filter: "rail-signal"
}

interface RollingStockRobotBuiltEntityEventFilter extends BaseRobotBuiltEntityEventFilter {
  readonly filter: "rolling-stock"
}

interface RobotWithLogisticsInterfaceRobotBuiltEntityEventFilter extends BaseRobotBuiltEntityEventFilter {
  readonly filter: "robot-with-logistics-interface"
}

interface VehicleRobotBuiltEntityEventFilter extends BaseRobotBuiltEntityEventFilter {
  readonly filter: "vehicle"
}

interface TurretRobotBuiltEntityEventFilter extends BaseRobotBuiltEntityEventFilter {
  readonly filter: "turret"
}

interface CraftingMachineRobotBuiltEntityEventFilter extends BaseRobotBuiltEntityEventFilter {
  readonly filter: "crafting-machine"
}

interface WallConnectableRobotBuiltEntityEventFilter extends BaseRobotBuiltEntityEventFilter {
  readonly filter: "wall-connectable"
}

interface TransportBeltConnectableRobotBuiltEntityEventFilter extends BaseRobotBuiltEntityEventFilter {
  readonly filter: "transport-belt-connectable"
}

interface CircuitNetworkConnectableRobotBuiltEntityEventFilter extends BaseRobotBuiltEntityEventFilter {
  readonly filter: "circuit-network-connectable"
}

/**
 * Other attributes may be specified depending on `filter`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#LuaRobotBuiltEntityEventFilter View documentation}
 */
type LuaRobotBuiltEntityEventFilter =
  | TypeRobotBuiltEntityEventFilter
  | NameRobotBuiltEntityEventFilter
  | GhostTypeRobotBuiltEntityEventFilter
  | GhostNameRobotBuiltEntityEventFilter
  | ForceRobotBuiltEntityEventFilter
  | GhostRobotBuiltEntityEventFilter
  | RailRobotBuiltEntityEventFilter
  | RailSignalRobotBuiltEntityEventFilter
  | RollingStockRobotBuiltEntityEventFilter
  | RobotWithLogisticsInterfaceRobotBuiltEntityEventFilter
  | VehicleRobotBuiltEntityEventFilter
  | TurretRobotBuiltEntityEventFilter
  | CraftingMachineRobotBuiltEntityEventFilter
  | WallConnectableRobotBuiltEntityEventFilter
  | TransportBeltConnectableRobotBuiltEntityEventFilter
  | CircuitNetworkConnectableRobotBuiltEntityEventFilter

interface BaseEntityDeconstructionCancelledEventFilter {
  /**
   * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`,
   * `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`,
   * `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
   */
  readonly filter:
    | "ghost"
    | "rail"
    | "rail-signal"
    | "rolling-stock"
    | "robot-with-logistics-interface"
    | "vehicle"
    | "turret"
    | "crafting-machine"
    | "wall-connectable"
    | "transport-belt-connectable"
    | "circuit-network-connectable"
    | "type"
    | "name"
    | "ghost_type"
    | "ghost_name"
  /**
   * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the
   * filters, `"and"` has higher precedence than `"or"`.
   */
  readonly mode?: "or" | "and"
  /** Inverts the condition. Default is `false`. */
  readonly invert?: boolean
}

interface TypeEntityDeconstructionCancelledEventFilter extends BaseEntityDeconstructionCancelledEventFilter {
  readonly filter: "type"
  /** The prototype type */
  readonly type: string
}

interface NameEntityDeconstructionCancelledEventFilter extends BaseEntityDeconstructionCancelledEventFilter {
  readonly filter: "name"
  /** The prototype name */
  readonly name: string
}

interface GhostTypeEntityDeconstructionCancelledEventFilter extends BaseEntityDeconstructionCancelledEventFilter {
  readonly filter: "ghost_type"
  /** The ghost prototype type */
  readonly type: string
}

interface GhostNameEntityDeconstructionCancelledEventFilter extends BaseEntityDeconstructionCancelledEventFilter {
  readonly filter: "ghost_name"
  /** The ghost prototype name */
  readonly name: string
}

interface GhostEntityDeconstructionCancelledEventFilter extends BaseEntityDeconstructionCancelledEventFilter {
  readonly filter: "ghost"
}

interface RailEntityDeconstructionCancelledEventFilter extends BaseEntityDeconstructionCancelledEventFilter {
  readonly filter: "rail"
}

interface RailSignalEntityDeconstructionCancelledEventFilter extends BaseEntityDeconstructionCancelledEventFilter {
  readonly filter: "rail-signal"
}

interface RollingStockEntityDeconstructionCancelledEventFilter extends BaseEntityDeconstructionCancelledEventFilter {
  readonly filter: "rolling-stock"
}

interface RobotWithLogisticsInterfaceEntityDeconstructionCancelledEventFilter
  extends BaseEntityDeconstructionCancelledEventFilter {
  readonly filter: "robot-with-logistics-interface"
}

interface VehicleEntityDeconstructionCancelledEventFilter extends BaseEntityDeconstructionCancelledEventFilter {
  readonly filter: "vehicle"
}

interface TurretEntityDeconstructionCancelledEventFilter extends BaseEntityDeconstructionCancelledEventFilter {
  readonly filter: "turret"
}

interface CraftingMachineEntityDeconstructionCancelledEventFilter extends BaseEntityDeconstructionCancelledEventFilter {
  readonly filter: "crafting-machine"
}

interface WallConnectableEntityDeconstructionCancelledEventFilter extends BaseEntityDeconstructionCancelledEventFilter {
  readonly filter: "wall-connectable"
}

interface TransportBeltConnectableEntityDeconstructionCancelledEventFilter
  extends BaseEntityDeconstructionCancelledEventFilter {
  readonly filter: "transport-belt-connectable"
}

interface CircuitNetworkConnectableEntityDeconstructionCancelledEventFilter
  extends BaseEntityDeconstructionCancelledEventFilter {
  readonly filter: "circuit-network-connectable"
}

/**
 * Other attributes may be specified depending on `filter`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#LuaEntityDeconstructionCancelledEventFilter View documentation}
 */
type LuaEntityDeconstructionCancelledEventFilter =
  | TypeEntityDeconstructionCancelledEventFilter
  | NameEntityDeconstructionCancelledEventFilter
  | GhostTypeEntityDeconstructionCancelledEventFilter
  | GhostNameEntityDeconstructionCancelledEventFilter
  | GhostEntityDeconstructionCancelledEventFilter
  | RailEntityDeconstructionCancelledEventFilter
  | RailSignalEntityDeconstructionCancelledEventFilter
  | RollingStockEntityDeconstructionCancelledEventFilter
  | RobotWithLogisticsInterfaceEntityDeconstructionCancelledEventFilter
  | VehicleEntityDeconstructionCancelledEventFilter
  | TurretEntityDeconstructionCancelledEventFilter
  | CraftingMachineEntityDeconstructionCancelledEventFilter
  | WallConnectableEntityDeconstructionCancelledEventFilter
  | TransportBeltConnectableEntityDeconstructionCancelledEventFilter
  | CircuitNetworkConnectableEntityDeconstructionCancelledEventFilter

interface BasePlayerBuiltEntityEventFilter {
  /**
   * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`,
   * `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`,
   * `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`,
   * `"ghost_name"`, `"force"`
   */
  readonly filter:
    | "ghost"
    | "rail"
    | "rail-signal"
    | "rolling-stock"
    | "robot-with-logistics-interface"
    | "vehicle"
    | "turret"
    | "crafting-machine"
    | "wall-connectable"
    | "transport-belt-connectable"
    | "circuit-network-connectable"
    | "type"
    | "name"
    | "ghost_type"
    | "ghost_name"
    | "force"
  /**
   * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the
   * filters, `"and"` has higher precedence than `"or"`.
   */
  readonly mode?: "or" | "and"
  /** Inverts the condition. Default is `false`. */
  readonly invert?: boolean
}

interface TypePlayerBuiltEntityEventFilter extends BasePlayerBuiltEntityEventFilter {
  readonly filter: "type"
  /** The prototype type */
  readonly type: string
}

interface NamePlayerBuiltEntityEventFilter extends BasePlayerBuiltEntityEventFilter {
  readonly filter: "name"
  /** The prototype name */
  readonly name: string
}

interface GhostTypePlayerBuiltEntityEventFilter extends BasePlayerBuiltEntityEventFilter {
  readonly filter: "ghost_type"
  /** The ghost prototype type */
  readonly type: string
}

interface GhostNamePlayerBuiltEntityEventFilter extends BasePlayerBuiltEntityEventFilter {
  readonly filter: "ghost_name"
  /** The ghost prototype name */
  readonly name: string
}

interface ForcePlayerBuiltEntityEventFilter extends BasePlayerBuiltEntityEventFilter {
  readonly filter: "force"
  /** The entity force */
  readonly force: string
}

interface GhostPlayerBuiltEntityEventFilter extends BasePlayerBuiltEntityEventFilter {
  readonly filter: "ghost"
}

interface RailPlayerBuiltEntityEventFilter extends BasePlayerBuiltEntityEventFilter {
  readonly filter: "rail"
}

interface RailSignalPlayerBuiltEntityEventFilter extends BasePlayerBuiltEntityEventFilter {
  readonly filter: "rail-signal"
}

interface RollingStockPlayerBuiltEntityEventFilter extends BasePlayerBuiltEntityEventFilter {
  readonly filter: "rolling-stock"
}

interface RobotWithLogisticsInterfacePlayerBuiltEntityEventFilter extends BasePlayerBuiltEntityEventFilter {
  readonly filter: "robot-with-logistics-interface"
}

interface VehiclePlayerBuiltEntityEventFilter extends BasePlayerBuiltEntityEventFilter {
  readonly filter: "vehicle"
}

interface TurretPlayerBuiltEntityEventFilter extends BasePlayerBuiltEntityEventFilter {
  readonly filter: "turret"
}

interface CraftingMachinePlayerBuiltEntityEventFilter extends BasePlayerBuiltEntityEventFilter {
  readonly filter: "crafting-machine"
}

interface WallConnectablePlayerBuiltEntityEventFilter extends BasePlayerBuiltEntityEventFilter {
  readonly filter: "wall-connectable"
}

interface TransportBeltConnectablePlayerBuiltEntityEventFilter extends BasePlayerBuiltEntityEventFilter {
  readonly filter: "transport-belt-connectable"
}

interface CircuitNetworkConnectablePlayerBuiltEntityEventFilter extends BasePlayerBuiltEntityEventFilter {
  readonly filter: "circuit-network-connectable"
}

/**
 * Other attributes may be specified depending on `filter`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#LuaPlayerBuiltEntityEventFilter View documentation}
 */
type LuaPlayerBuiltEntityEventFilter =
  | TypePlayerBuiltEntityEventFilter
  | NamePlayerBuiltEntityEventFilter
  | GhostTypePlayerBuiltEntityEventFilter
  | GhostNamePlayerBuiltEntityEventFilter
  | ForcePlayerBuiltEntityEventFilter
  | GhostPlayerBuiltEntityEventFilter
  | RailPlayerBuiltEntityEventFilter
  | RailSignalPlayerBuiltEntityEventFilter
  | RollingStockPlayerBuiltEntityEventFilter
  | RobotWithLogisticsInterfacePlayerBuiltEntityEventFilter
  | VehiclePlayerBuiltEntityEventFilter
  | TurretPlayerBuiltEntityEventFilter
  | CraftingMachinePlayerBuiltEntityEventFilter
  | WallConnectablePlayerBuiltEntityEventFilter
  | TransportBeltConnectablePlayerBuiltEntityEventFilter
  | CircuitNetworkConnectablePlayerBuiltEntityEventFilter

interface BasePlayerMinedEntityEventFilter {
  /**
   * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`,
   * `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`,
   * `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
   */
  readonly filter:
    | "ghost"
    | "rail"
    | "rail-signal"
    | "rolling-stock"
    | "robot-with-logistics-interface"
    | "vehicle"
    | "turret"
    | "crafting-machine"
    | "wall-connectable"
    | "transport-belt-connectable"
    | "circuit-network-connectable"
    | "type"
    | "name"
    | "ghost_type"
    | "ghost_name"
  /**
   * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the
   * filters, `"and"` has higher precedence than `"or"`.
   */
  readonly mode?: "or" | "and"
  /** Inverts the condition. Default is `false`. */
  readonly invert?: boolean
}

interface TypePlayerMinedEntityEventFilter extends BasePlayerMinedEntityEventFilter {
  readonly filter: "type"
  /** The prototype type */
  readonly type: string
}

interface NamePlayerMinedEntityEventFilter extends BasePlayerMinedEntityEventFilter {
  readonly filter: "name"
  /** The prototype name */
  readonly name: string
}

interface GhostTypePlayerMinedEntityEventFilter extends BasePlayerMinedEntityEventFilter {
  readonly filter: "ghost_type"
  /** The ghost prototype type */
  readonly type: string
}

interface GhostNamePlayerMinedEntityEventFilter extends BasePlayerMinedEntityEventFilter {
  readonly filter: "ghost_name"
  /** The ghost prototype name */
  readonly name: string
}

interface GhostPlayerMinedEntityEventFilter extends BasePlayerMinedEntityEventFilter {
  readonly filter: "ghost"
}

interface RailPlayerMinedEntityEventFilter extends BasePlayerMinedEntityEventFilter {
  readonly filter: "rail"
}

interface RailSignalPlayerMinedEntityEventFilter extends BasePlayerMinedEntityEventFilter {
  readonly filter: "rail-signal"
}

interface RollingStockPlayerMinedEntityEventFilter extends BasePlayerMinedEntityEventFilter {
  readonly filter: "rolling-stock"
}

interface RobotWithLogisticsInterfacePlayerMinedEntityEventFilter extends BasePlayerMinedEntityEventFilter {
  readonly filter: "robot-with-logistics-interface"
}

interface VehiclePlayerMinedEntityEventFilter extends BasePlayerMinedEntityEventFilter {
  readonly filter: "vehicle"
}

interface TurretPlayerMinedEntityEventFilter extends BasePlayerMinedEntityEventFilter {
  readonly filter: "turret"
}

interface CraftingMachinePlayerMinedEntityEventFilter extends BasePlayerMinedEntityEventFilter {
  readonly filter: "crafting-machine"
}

interface WallConnectablePlayerMinedEntityEventFilter extends BasePlayerMinedEntityEventFilter {
  readonly filter: "wall-connectable"
}

interface TransportBeltConnectablePlayerMinedEntityEventFilter extends BasePlayerMinedEntityEventFilter {
  readonly filter: "transport-belt-connectable"
}

interface CircuitNetworkConnectablePlayerMinedEntityEventFilter extends BasePlayerMinedEntityEventFilter {
  readonly filter: "circuit-network-connectable"
}

/**
 * Other attributes may be specified depending on `filter`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#LuaPlayerMinedEntityEventFilter View documentation}
 */
type LuaPlayerMinedEntityEventFilter =
  | TypePlayerMinedEntityEventFilter
  | NamePlayerMinedEntityEventFilter
  | GhostTypePlayerMinedEntityEventFilter
  | GhostNamePlayerMinedEntityEventFilter
  | GhostPlayerMinedEntityEventFilter
  | RailPlayerMinedEntityEventFilter
  | RailSignalPlayerMinedEntityEventFilter
  | RollingStockPlayerMinedEntityEventFilter
  | RobotWithLogisticsInterfacePlayerMinedEntityEventFilter
  | VehiclePlayerMinedEntityEventFilter
  | TurretPlayerMinedEntityEventFilter
  | CraftingMachinePlayerMinedEntityEventFilter
  | WallConnectablePlayerMinedEntityEventFilter
  | TransportBeltConnectablePlayerMinedEntityEventFilter
  | CircuitNetworkConnectablePlayerMinedEntityEventFilter

interface BaseEntityDamagedEventFilter {
  /**
   * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`,
   * `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`,
   * `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`,
   * `"ghost_name"`, `"original-damage-amount"`, `"final-damage-amount"`, `"damage-type"`, `"final-health"`
   */
  readonly filter:
    | "ghost"
    | "rail"
    | "rail-signal"
    | "rolling-stock"
    | "robot-with-logistics-interface"
    | "vehicle"
    | "turret"
    | "crafting-machine"
    | "wall-connectable"
    | "transport-belt-connectable"
    | "circuit-network-connectable"
    | "type"
    | "name"
    | "ghost_type"
    | "ghost_name"
    | "original-damage-amount"
    | "final-damage-amount"
    | "damage-type"
    | "final-health"
  /**
   * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the
   * filters, `"and"` has higher precedence than `"or"`.
   */
  readonly mode?: "or" | "and"
  /** Inverts the condition. Default is `false`. */
  readonly invert?: boolean
}

interface TypeEntityDamagedEventFilter extends BaseEntityDamagedEventFilter {
  readonly filter: "type"
  /** The prototype type */
  readonly type: string
}

interface NameEntityDamagedEventFilter extends BaseEntityDamagedEventFilter {
  readonly filter: "name"
  /** The prototype name */
  readonly name: string
}

interface GhostTypeEntityDamagedEventFilter extends BaseEntityDamagedEventFilter {
  readonly filter: "ghost_type"
  /** The ghost prototype type */
  readonly type: string
}

interface GhostNameEntityDamagedEventFilter extends BaseEntityDamagedEventFilter {
  readonly filter: "ghost_name"
  /** The ghost prototype name */
  readonly name: string
}

interface OriginalDamageAmountEntityDamagedEventFilter extends BaseEntityDamagedEventFilter {
  readonly filter: "original-damage-amount"
  readonly comparison: ComparatorString
  /** The value to compare against. */
  readonly value: float
}

interface FinalDamageAmountEntityDamagedEventFilter extends BaseEntityDamagedEventFilter {
  readonly filter: "final-damage-amount"
  readonly comparison: ComparatorString
  /** The value to compare against. */
  readonly value: float
}

interface DamageTypeEntityDamagedEventFilter extends BaseEntityDamagedEventFilter {
  readonly filter: "damage-type"
  /** A {@link LuaDamagePrototype} name */
  readonly type: string
}

interface FinalHealthEntityDamagedEventFilter extends BaseEntityDamagedEventFilter {
  readonly filter: "final-health"
  readonly comparison: ComparatorString
  /** The value to compare against. */
  readonly value: float
}

interface GhostEntityDamagedEventFilter extends BaseEntityDamagedEventFilter {
  readonly filter: "ghost"
}

interface RailEntityDamagedEventFilter extends BaseEntityDamagedEventFilter {
  readonly filter: "rail"
}

interface RailSignalEntityDamagedEventFilter extends BaseEntityDamagedEventFilter {
  readonly filter: "rail-signal"
}

interface RollingStockEntityDamagedEventFilter extends BaseEntityDamagedEventFilter {
  readonly filter: "rolling-stock"
}

interface RobotWithLogisticsInterfaceEntityDamagedEventFilter extends BaseEntityDamagedEventFilter {
  readonly filter: "robot-with-logistics-interface"
}

interface VehicleEntityDamagedEventFilter extends BaseEntityDamagedEventFilter {
  readonly filter: "vehicle"
}

interface TurretEntityDamagedEventFilter extends BaseEntityDamagedEventFilter {
  readonly filter: "turret"
}

interface CraftingMachineEntityDamagedEventFilter extends BaseEntityDamagedEventFilter {
  readonly filter: "crafting-machine"
}

interface WallConnectableEntityDamagedEventFilter extends BaseEntityDamagedEventFilter {
  readonly filter: "wall-connectable"
}

interface TransportBeltConnectableEntityDamagedEventFilter extends BaseEntityDamagedEventFilter {
  readonly filter: "transport-belt-connectable"
}

interface CircuitNetworkConnectableEntityDamagedEventFilter extends BaseEntityDamagedEventFilter {
  readonly filter: "circuit-network-connectable"
}

/**
 * Other attributes may be specified depending on `filter`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#LuaEntityDamagedEventFilter View documentation}
 */
type LuaEntityDamagedEventFilter =
  | TypeEntityDamagedEventFilter
  | NameEntityDamagedEventFilter
  | GhostTypeEntityDamagedEventFilter
  | GhostNameEntityDamagedEventFilter
  | OriginalDamageAmountEntityDamagedEventFilter
  | FinalDamageAmountEntityDamagedEventFilter
  | DamageTypeEntityDamagedEventFilter
  | FinalHealthEntityDamagedEventFilter
  | GhostEntityDamagedEventFilter
  | RailEntityDamagedEventFilter
  | RailSignalEntityDamagedEventFilter
  | RollingStockEntityDamagedEventFilter
  | RobotWithLogisticsInterfaceEntityDamagedEventFilter
  | VehicleEntityDamagedEventFilter
  | TurretEntityDamagedEventFilter
  | CraftingMachineEntityDamagedEventFilter
  | WallConnectableEntityDamagedEventFilter
  | TransportBeltConnectableEntityDamagedEventFilter
  | CircuitNetworkConnectableEntityDamagedEventFilter

interface BaseSectorScannedEventFilter {
  /**
   * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`,
   * `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`,
   * `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
   */
  readonly filter:
    | "ghost"
    | "rail"
    | "rail-signal"
    | "rolling-stock"
    | "robot-with-logistics-interface"
    | "vehicle"
    | "turret"
    | "crafting-machine"
    | "wall-connectable"
    | "transport-belt-connectable"
    | "circuit-network-connectable"
    | "type"
    | "name"
    | "ghost_type"
    | "ghost_name"
  /**
   * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the
   * filters, `"and"` has higher precedence than `"or"`.
   */
  readonly mode?: "or" | "and"
  /** Inverts the condition. Default is `false`. */
  readonly invert?: boolean
}

interface TypeSectorScannedEventFilter extends BaseSectorScannedEventFilter {
  readonly filter: "type"
  /** The prototype type */
  readonly type: string
}

interface NameSectorScannedEventFilter extends BaseSectorScannedEventFilter {
  readonly filter: "name"
  /** The prototype name */
  readonly name: string
}

interface GhostTypeSectorScannedEventFilter extends BaseSectorScannedEventFilter {
  readonly filter: "ghost_type"
  /** The ghost prototype type */
  readonly type: string
}

interface GhostNameSectorScannedEventFilter extends BaseSectorScannedEventFilter {
  readonly filter: "ghost_name"
  /** The ghost prototype name */
  readonly name: string
}

interface GhostSectorScannedEventFilter extends BaseSectorScannedEventFilter {
  readonly filter: "ghost"
}

interface RailSectorScannedEventFilter extends BaseSectorScannedEventFilter {
  readonly filter: "rail"
}

interface RailSignalSectorScannedEventFilter extends BaseSectorScannedEventFilter {
  readonly filter: "rail-signal"
}

interface RollingStockSectorScannedEventFilter extends BaseSectorScannedEventFilter {
  readonly filter: "rolling-stock"
}

interface RobotWithLogisticsInterfaceSectorScannedEventFilter extends BaseSectorScannedEventFilter {
  readonly filter: "robot-with-logistics-interface"
}

interface VehicleSectorScannedEventFilter extends BaseSectorScannedEventFilter {
  readonly filter: "vehicle"
}

interface TurretSectorScannedEventFilter extends BaseSectorScannedEventFilter {
  readonly filter: "turret"
}

interface CraftingMachineSectorScannedEventFilter extends BaseSectorScannedEventFilter {
  readonly filter: "crafting-machine"
}

interface WallConnectableSectorScannedEventFilter extends BaseSectorScannedEventFilter {
  readonly filter: "wall-connectable"
}

interface TransportBeltConnectableSectorScannedEventFilter extends BaseSectorScannedEventFilter {
  readonly filter: "transport-belt-connectable"
}

interface CircuitNetworkConnectableSectorScannedEventFilter extends BaseSectorScannedEventFilter {
  readonly filter: "circuit-network-connectable"
}

/**
 * Other attributes may be specified depending on `filter`:
 *
 * {@link https://lua-api.factorio.com/latest/Concepts.html#LuaSectorScannedEventFilter View documentation}
 */
type LuaSectorScannedEventFilter =
  | TypeSectorScannedEventFilter
  | NameSectorScannedEventFilter
  | GhostTypeSectorScannedEventFilter
  | GhostNameSectorScannedEventFilter
  | GhostSectorScannedEventFilter
  | RailSectorScannedEventFilter
  | RailSignalSectorScannedEventFilter
  | RollingStockSectorScannedEventFilter
  | RobotWithLogisticsInterfaceSectorScannedEventFilter
  | VehicleSectorScannedEventFilter
  | TurretSectorScannedEventFilter
  | CraftingMachineSectorScannedEventFilter
  | WallConnectableSectorScannedEventFilter
  | TransportBeltConnectableSectorScannedEventFilter
  | CircuitNetworkConnectableSectorScannedEventFilter

type StyleValuesArray =
  | readonly [topBottom: number, leftRight: number]
  | readonly [top: number, right: number, bottom: number, left: number]

type SizeArray = readonly [width: int, height: int]

/**
 * A map gen preset. Used in {@link https://wiki.factorio.com/Prototype/MapGenPresets Prototype/MapGenPresets}.
 *
 * {@link https://wiki.factorio.com/Types/MapGenPreset View Documentation}
 */
interface MapGenPreset {
  /** Specifies the ordering the map generator gui. */
  order: string
  /**
   * Whether this is the default preset. If set to boolean, this preset may not have any other properties besides this
   * and order.
   */
  default?: boolean
  /**
   * This is a table with the below key/value pairs. All key/value pairs are optional. If not set they will just use
   * the default values.
   */
  basic_settings: Partial<MapGenSettings>
  /**
   * This is a table with the below key/value pairs. All key/value pairs are optional, if not set they will just use
   * the existing values.
   */
  readonly advanced_settings: {
    readonly pollution?: {
      enabled?: boolean
      /** Must be <= 0.25. */
      diffusion_ratio?: double
      /** Also known as dissipation rate. Must be >= 0.5. */
      ageing?: double
      enemy_attack_pollution_consumption_modifier?: double
      min_pollution_to_damage_trees?: double
      pollution_restored_per_tree_damage?: double
    }
    readonly enemy_evolution?: {
      enabled?: boolean
      time_factor?: double
      destroy_factor?: double
      pollution_factor?: double
    }
    readonly enemy_expansion?: {
      enabled?: boolean
      max_expansion_distance?: double
      settler_group_min_size?: double
      settler_group_max_size?: double
      /** In ticks. */
      min_expansion_cooldown?: double
      /** In ticks. */
      max_expansion_cooldown?: double
    }
    readonly difficulty_settings?: {
      recipe_difficulty?: defines.difficulty_settings.recipe_difficulty
      technology_difficulty?: defines.difficulty_settings.technology_difficulty
      technology_price_multiplier?: double
      research_queue_setting?: "after-victory" | "always" | "never"
    }
  }
}

interface BlueprintControlBehavior {
  readonly condition?: CircuitCondition
  readonly circuit_condition?: CircuitCondition
  readonly filters?: Signal[]
  readonly is_on?: boolean
  readonly arithmetic_conditions?: ArithmeticCombinatorParameters
  readonly decider_conditions?: DeciderCombinatorParameters
  readonly circuit_enable_disable?: boolean
  readonly circuit_read_resources?: boolean
  readonly circuit_resource_read_mode?: defines.control_behavior.mining_drill.resource_read_mode
  readonly read_stopped_train?: boolean
  readonly train_stopped_signal?: SignalID
  readonly read_from_train?: boolean
  readonly send_to_train?: boolean
  readonly circuit_mode_of_operation?: number
  readonly circuit_read_hand_contents?: boolean
  readonly circuit_hand_read_mode?: defines.control_behavior.inserter.hand_read_mode
  readonly circuit_set_stack_size?: boolean
  readonly stack_control_input_signal?: SignalID
  readonly use_colors?: boolean
  readonly read_robot_stats?: boolean
  readonly read_logistics?: boolean
  readonly available_logistic_output_signal?: boolean
  readonly total_logistic_output_signal?: boolean
  readonly available_construction_output_signal?: boolean
  readonly total_construction_output_signal?: boolean
  readonly circuit_contents_read_mode?: defines.control_behavior.transport_belt.content_read_mode
  readonly output_signal?: SignalID
  readonly circuit_close_signal?: boolean
  readonly circuit_read_signal?: boolean
  readonly red_output_signal?: SignalID
  readonly orange_output_signal?: SignalID
  readonly green_output_signal?: SignalID
  readonly blue_output_signal?: SignalID
  readonly circuit_open_gate?: boolean
  readonly circuit_read_sensor?: boolean
  readonly circuit_parameters?: ProgrammableSpeakerCircuitParameters
}
