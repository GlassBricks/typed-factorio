// This is an auto-generated file. Do not edit directly!

/** @noSelfInFile */


/**
 * @noResolution
 */
declare module "factorio:runtime" {
    /**
     * Localised strings are a way to support translation of in-game text. It is an array where the first element is the key and the remaining elements are parameters that will be substituted for placeholders in the template designated by the key.
     *
     * The key identifies the string template. For example, `"gui-alert-tooltip.attack"` (for the template `"__1__
     *
     *     objects are being damaged"`; see the file `data/core/locale/en.cfg`).
     *
     * The template can contain placeholders such as `__1__` or `__2__`. These will be replaced by the respective parameter in the LocalisedString. The parameters themselves can be other localised strings, which will be processed recursively in the same fashion. Localised strings can not be recursed deeper than 20 levels and can not have more than 20 parameters.
     *
     * There are two special flags for the localised string, indicated by the key being a particular string. First, if the key is the empty string (`""`), then all parameters will be concatenated (after processing, if any are localised strings themselves). Second, if the key is a question mark (`"?"`), then the first valid parameter will be used. A parameter can be invalid if its name doesn't match any string template. If no parameters are valid, the last one is returned. This is useful to implement a fallback for missing locale templates.
     *
     * Furthermore, when an API function expects a localised string, it will also accept a regular string (i.e. not a table) which will not be translated, as well as a number, boolean or `nil`, which will be converted to their textual representation.
     * @example In the English translation, this will print `"No ammo"`; in the Czech translation, it will print `"Bez munice"`:
     * game.player.print({"description.no-ammo"})
     * @example In the English translation, this will print `"Durability: 5/9"`; in the Japanese one, it will print `"耐久度: 5/9"`:
     * game.player.print({"description.durability", 5, 9})
     * @example This will print `"hello"` in all translations:
     * game.player.print({"", "hello"})
     * @example This will print `"Iron plate: 60"` in the English translation and `"Eisenplatte: 60"` in the German translation.
     * game.print({"", {"item-name.iron-plate"}, ": ", 60})
     * @example As an example of a localised string with fallback, consider this:
     * {"?", {"", {"entity-description.furnace"}, "\n"}, {"item-description.furnace"}, "optional fallback"}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#LocalisedString Online documentation}
     */
    export type LocalisedString = string | number | boolean | LuaObject | nil | readonly [string, ...LocalisedString[]];
    export interface DisplayResolution {
        readonly width: uint;
        readonly height: uint;
    }
    export interface LogisticParameters {
        /**
         * The item. `nil` clears the filter.
         */
        readonly name?: string;
        readonly min?: uint;
        readonly max?: uint;
    }
    /**
     * The smooth orientation. It is a {@link float} in the range `[0, 1)` that covers a full circle, starting at the top and going clockwise. This means a value of `0` indicates "north", a value of `0.5` indicates "south".
     *
     * For example then, a value of `0.625` would indicate "south-west", and a value of `0.875` would indicate "north-west".
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#RealOrientation Online documentation}
     */
    export type RealOrientation = float;
    /**
     * Coordinates on a surface, for example of an entity. MapPositions may be specified either as a dictionary with `x`, `y` as keys, or simply as an array with two elements.
     *
     * The coordinates are saved as a fixed-size 32 bit integer, with 8 bits reserved for decimal precision, meaning the smallest value step is `1/2^8 = 0.00390625` tiles.
     * @see MapPositionArray
     * @example Explicit definition:
     * {x = 5.5, y = 2}
     * {y = 2.25, x = 5.125}
     * @example Shorthand:
     * {1.625, 2.375}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#MapPosition Online documentation}
     */
    export interface MapPosition {
        readonly x: double;
        readonly y: double;
    }
    /**
     * Array form of {@link MapPosition}.
     * @see MapPosition
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#MapPosition Online documentation}
     */
    export type MapPositionArray = readonly [
        x: double,
        y: double
    ];
    /**
     * Coordinates of a chunk in a {@link LuaSurface} where each integer `x`/`y` represents a different chunk. This uses the same format as {@link MapPosition}, meaning it can be specified either with or without explicit keys. A {@link MapPosition} can be translated to a ChunkPosition by dividing the `x`/`y` values by 32.
     * @see ChunkPositionArray
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#ChunkPosition Online documentation}
     */
    export interface ChunkPosition {
        readonly x: int;
        readonly y: int;
    }
    /**
     * Array form of {@link ChunkPosition}.
     * @see ChunkPosition
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#ChunkPosition Online documentation}
     */
    export type ChunkPositionArray = readonly [
        x: int,
        y: int
    ];
    /**
     * Coordinates of a tile on a {@link LuaSurface} where each integer `x`/`y` represents a different tile. This uses the same format as {@link MapPosition}, except it rounds any non-integer `x`/`y` down to whole numbers. It can be specified either with or without explicit keys.
     * @see TilePositionArray
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#TilePosition Online documentation}
     */
    export interface TilePosition {
        readonly x: int;
        readonly y: int;
    }
    /**
     * Array form of {@link TilePosition}.
     * @see TilePosition
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#TilePosition Online documentation}
     */
    export type TilePositionArray = readonly [
        x: int,
        y: int
    ];
    /**
     * Position inside an equipment grid. This uses the same format as {@link MapPosition}, meaning it can be specified either with or without explicit keys.
     * @see EquipmentPositionArray
     * @example Explicit definition:
     * {x = 5, y = 2}
     * {y = 2, x = 5}
     * @example Shorthand:
     * {1, 2}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#EquipmentPosition Online documentation}
     */
    export interface EquipmentPosition {
        readonly x: int;
        readonly y: int;
    }
    /**
     * Array form of {@link EquipmentPosition}.
     * @see EquipmentPosition
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#EquipmentPosition Online documentation}
     */
    export type EquipmentPositionArray = readonly [
        x: int,
        y: int
    ];
    /**
     * Screen coordinates of a GUI element in a {@link LuaGui}. This uses the same format as {@link TilePosition}, meaning it can be specified either with or without explicit keys.
     * @see GuiLocationArray
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#GuiLocation Online documentation}
     */
    export interface GuiLocation {
        readonly x: int;
        readonly y: int;
    }
    /**
     * Array form of {@link GuiLocation}.
     * @see GuiLocation
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#GuiLocation Online documentation}
     */
    export type GuiLocationArray = readonly [
        x: int,
        y: int
    ];
    /**
     * A {@link ChunkPosition} with an added bounding box for the area of the chunk.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#ChunkPositionAndArea Online documentation}
     */
    export interface ChunkPositionAndArea {
        readonly x: int;
        readonly y: int;
        readonly area: BoundingBox;
    }
    /**
     * A table used to define a manual shape for a piece of equipment.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#EquipmentPoint Online documentation}
     */
    export interface EquipmentPoint {
        readonly x: uint;
        readonly y: uint;
    }
    export interface GuiAnchor {
        readonly gui: defines.relative_gui_type;
        readonly position: defines.relative_gui_position;
        /**
         * If provided, only anchors the GUI element when the opened things type matches the type.
         */
        readonly type?: string;
        /**
         * If provided, only anchors the GUI element when the opened thing matches the name. `name` takes precedence over `names`.
         */
        readonly name?: string;
        /**
         * If provided, only anchors the GUI element when the opened thing matches one of the names. When reading an anchor, `names` is always populated.
         */
        readonly names?: string[];
    }
    export interface TabAndContent {
        readonly tab: LuaGuiElement;
        readonly content: LuaGuiElement;
    }
    export interface OldTileAndPosition {
        readonly old_tile: LuaTilePrototype;
        readonly position: TilePosition;
    }
    /**
     * A dictionary of string to the four basic Lua types: `string`, `boolean`, `number`, `table`.
     *
     * Note that the API returns tags as a simple table, meaning any modifications to it will not propagate back to the game. Thus, to modify a set of tags, the whole table needs to be written back to the respective property.
     * @example
     * {a = 1, b = true, c = "three", d = {e = "f"}}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#Tags Online documentation}
     */
    export type Tags = Record<string, AnyBasic>;
    /**
     * @remarks The vectors for all 5 position attributes are a table with `x` and `y` keys instead of an array.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#SmokeSource Online documentation}
     */
    export interface SmokeSource {
        readonly name: string;
        readonly frequency: double;
        readonly offset: double;
        readonly position?: MapPosition;
        readonly north_position?: MapPosition;
        readonly east_position?: MapPosition;
        readonly south_position?: MapPosition;
        readonly west_position?: MapPosition;
        readonly deviation?: MapPosition;
        readonly starting_frame_speed: uint16;
        readonly starting_frame_speed_deviation: double;
        readonly starting_frame: uint16;
        readonly starting_frame_deviation: double;
        readonly slow_down_factor: uint8;
        readonly height: float;
        readonly height_deviation: float;
        readonly starting_vertical_speed: float;
        readonly starting_vertical_speed_deviation: float;
        readonly vertical_speed_slowdown: float;
    }
    /**
     * A vector is a two-element array containing the `x` and `y` components. In some specific cases, the vector is a table with `x` and `y` keys instead, which the documentation will point out.
     * @example
     * right = {1.0, 0.0}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#Vector Online documentation}
     */
    export type Vector = MapPositionArray;
    /**
     * Two positions, specifying the top-left and bottom-right corner of the box respectively. Like with {@link MapPosition}, the names of the members may be omitted. When read from the game, the third member `orientation` is present if it is non-zero.
     * @see BoundingBoxArray
     * @example Explicit definition:
     * {left_top = {x = -2, y = -3}, right_bottom = {x = 5, y = 8}}
     * @example Shorthand:
     * {{-2, -3}, {5, 8}}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#BoundingBox Online documentation}
     */
    export interface BoundingBox {
        readonly left_top: MapPosition;
        readonly right_bottom: MapPosition;
        readonly orientation?: RealOrientation;
    }
    /**
     * Write form of {@link BoundingBox}, as a table, where positions are allowed to take an array form.
     */
    export interface BoundingBoxWrite {
        readonly left_top: MapPosition | MapPositionArray;
        readonly right_bottom: MapPosition | MapPositionArray;
        readonly orientation?: RealOrientation;
    }
    /**
     * Array form of {@link BoundingBox}.
     * @see BoundingBox
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#BoundingBox Online documentation}
     */
    export type BoundingBoxArray = readonly [
        left_top: MapPosition | MapPositionArray,
        right_bottom: MapPosition | MapPositionArray,
        orientation?: RealOrientation
    ];
    /**
     * An area defined using the map editor.
     * @see ScriptAreaWrite
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#ScriptArea Online documentation}
     */
    export interface ScriptArea {
        readonly area: BoundingBox;
        readonly name: string;
        readonly color: Color;
        readonly id: uint;
    }
    /**
     * Write form of {@link ScriptArea}, where table-or-array concepts are allowed to take an array form.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#ScriptArea Online documentation}
     */
    export interface ScriptAreaWrite {
        readonly area: BoundingBoxWrite | BoundingBoxArray;
        readonly name: string;
        readonly color: Color | ColorArray;
        readonly id: uint;
    }
    /**
     * A position defined using the map editor.
     * @see ScriptPositionWrite
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#ScriptPosition Online documentation}
     */
    export interface ScriptPosition {
        readonly position: MapPosition;
        readonly name: string;
        readonly color: Color;
        readonly id: uint;
    }
    /**
     * Write form of {@link ScriptPosition}, where table-or-array concepts are allowed to take an array form.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#ScriptPosition Online documentation}
     */
    export interface ScriptPositionWrite {
        readonly position: MapPosition | MapPositionArray;
        readonly name: string;
        readonly color: Color | ColorArray;
        readonly id: uint;
    }
    /**
     * Red, green, blue and alpha values, all in range [0, 1] or all in range [0, 255] if any value is > 1. All values here are optional. Color channels default to `0`, the alpha channel defaults to `1`.
     *
     * Similar to {@link MapPosition}, Color allows the short-hand notation of passing an array of exactly 3 or 4 numbers. The game usually expects colors to be in pre-multiplied form (color channels are pre-multiplied by alpha).
     * @see ColorArray
     * @example
     * red1 = {r = 0.5, g = 0, b = 0, a = 0.5}  -- Half-opacity red
     * red2 = {r = 0.5, a = 0.5}                -- Same color as red1
     * black = {}                               -- All channels omitted: black
     * red1_short = {0.5, 0, 0, 0.5}            -- Same color as red1 in short-hand notation
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#Color Online documentation}
     */
    export interface Color {
        readonly r?: float;
        readonly g?: float;
        readonly b?: float;
        readonly a?: float;
    }
    /**
     * Array form of {@link Color}.
     * @see Color
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#Color Online documentation}
     */
    export type ColorArray = readonly [
        r?: float,
        g?: float,
        b?: float,
        a?: float
    ];
    /**
     * Same as {@link Color}, but red, green, blue and alpha values can be any floating point number, without any special handling of the range [1, 255].
     * @see ColorModifierArray
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#ColorModifier Online documentation}
     */
    export interface ColorModifier {
        readonly r?: float;
        readonly g?: float;
        readonly b?: float;
        readonly a?: float;
    }
    /**
     * Array form of {@link ColorModifier}.
     * @see ColorModifier
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#ColorModifier Online documentation}
     */
    export type ColorModifierArray = readonly [
        r?: float,
        g?: float,
        b?: float,
        a?: float
    ];
    export interface CraftingQueueItem {
        /**
         * The index of the item in the crafting queue.
         */
        readonly index: uint;
        /**
         * The recipe being crafted.
         */
        readonly recipe: string;
        /**
         * The amount of items being crafted.
         */
        readonly count: uint;
        /**
         * The item is a prerequisite for another item in the queue.
         */
        readonly prerequisite: boolean;
    }
    export interface Alert {
        /**
         * The tick this alert was created.
         */
        readonly tick: uint;
        readonly target?: LuaEntity;
        readonly prototype?: LuaEntityPrototype;
        readonly position?: MapPosition;
        /**
         * The SignalID used for a custom alert. Only present for custom alerts.
         */
        readonly icon?: SignalID;
        /**
         * The message for a custom alert. Only present for custom alerts.
         */
        readonly message?: LocalisedString;
    }
    /**
     * One vertex of a ScriptRenderPolygon.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#ScriptRenderVertexTarget Online documentation}
     */
    export interface ScriptRenderVertexTarget {
        readonly target: (MapPosition | MapPositionArray) | LuaEntity;
        /**
         * Only used if `target` is a LuaEntity.
         */
        readonly target_offset?: Vector;
    }
    export interface PathfinderWaypoint {
        /**
         * The position of the waypoint on its surface.
         */
        readonly position: MapPosition;
        /**
         * `true` if the path from the previous waypoint to this one goes through an entity that must be destroyed.
         */
        readonly needs_destroy_to_reach: boolean;
    }
    export interface CutsceneWaypoint {
        /**
         * Position to pan the camera to.
         */
        readonly position?: MapPosition | MapPositionArray;
        /**
         * Entity or unit group to pan the camera to.
         */
        readonly target?: LuaEntity | LuaUnitGroup;
        /**
         * How many ticks it will take to reach this waypoint from the previous one.
         */
        readonly transition_time: uint;
        /**
         * Time in ticks to wait before moving to the next waypoint.
         */
        readonly time_to_wait: uint;
        /**
         * Zoom level to be set when the waypoint is reached. When not specified, the previous waypoint's zoom is used.
         */
        readonly zoom?: double;
    }
    export interface Decorative {
        /**
         * The name of the decorative prototype.
         */
        readonly name: string;
        readonly position: TilePosition | TilePositionArray;
        readonly amount: uint8;
    }
    export interface DecorativeResult {
        readonly position: TilePosition;
        readonly decorative: LuaDecorativePrototype;
        readonly amount: uint;
    }
    export interface PrototypeHistory {
        /**
         * The mod that created this prototype.
         */
        readonly created: string;
        /**
         * The mods that changed this prototype in the order they changed it.
         */
        readonly changed: string[];
    }
    /**
     * @remarks Either `icon`, `text`, or both must be provided.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#ChartTagSpec Online documentation}
     */
    export interface ChartTagSpec {
        readonly position: MapPosition | MapPositionArray;
        readonly icon?: SignalID;
        readonly text?: string;
        readonly last_user?: PlayerIdentification;
    }
    /**
     * Parameters that affect the look and control of the game. Updating any of the member attributes here will immediately take effect in the game engine.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#GameViewSettings Online documentation}
     */
    export interface GameViewSettings {
        /**
         * Show the controller GUI elements. This includes the toolbar, the selected tool slot, the armour slot, and the gun and ammunition slots.
         * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#GameViewSettings#GameViewSettings.show_controller_gui Online documentation}
         */
        show_controller_gui: boolean;
        /**
         * Show the chart in the upper right-hand corner of the screen.
         * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#GameViewSettings#GameViewSettings.show_minimap Online documentation}
         */
        show_minimap: boolean;
        /**
         * Show research progress and name in the upper right-hand corner of the screen.
         * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#GameViewSettings#GameViewSettings.show_research_info Online documentation}
         */
        show_research_info: boolean;
        /**
         * Show overlay icons on entities. Also known as "alt-mode".
         * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#GameViewSettings#GameViewSettings.show_entity_info Online documentation}
         */
        show_entity_info: boolean;
        /**
         * Show the flashing alert icons next to the player's toolbar.
         * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#GameViewSettings#GameViewSettings.show_alert_gui Online documentation}
         */
        show_alert_gui: boolean;
        /**
         * When `true` (the default), mousing over an entity will select it. Otherwise, moving the mouse won't update entity selection.
         * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#GameViewSettings#GameViewSettings.update_entity_selection Online documentation}
         */
        update_entity_selection: boolean;
        /**
         * When `true` (`false` is default), the rails will always show the rail block visualisation.
         * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#GameViewSettings#GameViewSettings.show_rail_block_visualisation Online documentation}
         */
        show_rail_block_visualisation: boolean;
        /**
         * Shows or hides the buttons row.
         * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#GameViewSettings#GameViewSettings.show_side_menu Online documentation}
         */
        show_side_menu: boolean;
        /**
         * Shows or hides the view options when map is opened.
         * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#GameViewSettings#GameViewSettings.show_map_view_options Online documentation}
         */
        show_map_view_options: boolean;
        /**
         * Shows or hides the tooltip that is displayed when selecting an entity.
         * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#GameViewSettings#GameViewSettings.show_entity_tooltip Online documentation}
         */
        show_entity_tooltip: boolean;
        /**
         * Shows or hides quickbar of shortcuts.
         * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#GameViewSettings#GameViewSettings.show_quickbar Online documentation}
         */
        show_quickbar: boolean;
        /**
         * Shows or hides the shortcut bar.
         * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#GameViewSettings#GameViewSettings.show_shortcut_bar Online documentation}
         */
        show_shortcut_bar: boolean;
        /**
         * Shows or hides the crafting queue.
         * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#GameViewSettings#GameViewSettings.show_crafting_queue Online documentation}
         */
        show_crafting_queue: boolean;
        /**
         * Shows or hides the tool window with the weapons and armor.
         * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#GameViewSettings#GameViewSettings.show_tool_bar Online documentation}
         */
        show_tool_bar: boolean;
        /**
         * Shows or hides the mouse and keyboard/controller button hints in the bottom left corner if they are enabled in the interface settings.
         * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#GameViewSettings#GameViewSettings.show_hotkey_suggestions Online documentation}
         */
        show_hotkey_suggestions: boolean;
    }
    /**
     * What is shown in the map view. If a field is not given, that setting will not be changed.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#MapViewSettings Online documentation}
     */
    export interface MapViewSettings {
        readonly "show-logistic-network"?: boolean;
        readonly "show-electric-network"?: boolean;
        readonly "show-turret-range"?: boolean;
        readonly "show-pollution"?: boolean;
        readonly "show-train-station-names"?: boolean;
        readonly "show-player-names"?: boolean;
        readonly "show-networkless-logistic-members"?: boolean;
        readonly "show-non-standard-map-info"?: boolean;
    }
    /**
     * These values are for the time frame of one second (60 ticks).
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#PollutionMapSettings Online documentation}
     */
    export interface PollutionMapSettings {
        /**
         * Whether pollution is enabled at all.
         */
        readonly enabled: boolean;
        /**
         * The amount that is diffused to a neighboring chunk (possibly repeated for other directions as well). Defaults to `0.02`.
         */
        readonly diffusion_ratio: double;
        /**
         * The amount of PUs that need to be in a chunk for it to start diffusing. Defaults to `15`.
         */
        readonly min_to_diffuse: double;
        /**
         * The amount of pollution eaten by a chunk's tiles as a percentage of 1. Defaults to `1`.
         */
        readonly ageing: double;
        /**
         * Any amount of pollution larger than this value is visualized as this value instead. Defaults to `150`.
         */
        readonly expected_max_per_chunk: double;
        /**
         * Any amount of pollution smaller than this value (but bigger than zero) is visualized as this value instead. Defaults to `50`.
         */
        readonly min_to_show_per_chunk: double;
        /**
         * Defaults to `60`.
         */
        readonly min_pollution_to_damage_trees: double;
        /**
         * Defaults to `150`.
         */
        readonly pollution_with_max_forest_damage: double;
        /**
         * Defaults to `50`.
         */
        readonly pollution_per_tree_damage: double;
        /**
         * Defaults to `10`.
         */
        readonly pollution_restored_per_tree_damage: double;
        /**
         * Defaults to `20`.
         */
        readonly max_pollution_to_restore_trees: double;
        /**
         * Defaults to `1`.
         */
        readonly enemy_attack_pollution_consumption_modifier: double;
    }
    /**
     * These values represent a percentual increase in evolution. This means a value of `0.1` would increase evolution by 10%.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#EnemyEvolutionMapSettings Online documentation}
     */
    export interface EnemyEvolutionMapSettings {
        /**
         * Whether enemy evolution is enabled at all.
         */
        readonly enabled: boolean;
        /**
         * The amount evolution naturally progresses by every second. Defaults to `0.000004`.
         */
        readonly time_factor: double;
        /**
         * The amount evolution progresses for every destroyed spawner. Defaults to `0.002`.
         */
        readonly destroy_factor: double;
        /**
         * The amount evolution progresses for every unit of pollution. Defaults to `0.0000009`.
         */
        readonly pollution_factor: double;
    }
    /**
     * Candidate chunks are given scores to determine which one of them should be expanded into. This score takes into account various settings noted below. The iteration is over a square region centered around the chunk for which the calculation is done, and includes the central chunk as well. Distances are calculated as {@linkplain https://en.wikipedia.org/wiki/Taxicab_geometry Manhattan distance}.
     *
     * The pseudocode algorithm to determine a chunk's score is as follows:
     *
     * ```
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
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#EnemyExpansionMapSettings Online documentation}
     */
    export interface EnemyExpansionMapSettings {
        /**
         * Whether enemy expansion is enabled at all.
         */
        readonly enabled: boolean;
        /**
         * Distance in chunks from the furthest base around to prevent expansions from reaching too far into the player's territory. Defaults to `7`.
         */
        readonly max_expansion_distance: uint;
        /**
         * Defaults to `2`.
         */
        readonly friendly_base_influence_radius: uint;
        /**
         * Defaults to `2`.
         */
        readonly enemy_building_influence_radius: uint;
        /**
         * Defaults to `0.1`.
         */
        readonly building_coefficient: double;
        /**
         * Defaults to `2.0`.
         */
        readonly other_base_coefficient: double;
        /**
         * Defaults to `0.5`.
         */
        readonly neighbouring_chunk_coefficient: double;
        /**
         * Defaults to `0.4`.
         */
        readonly neighbouring_base_chunk_coefficient: double;
        /**
         * A chunk has to have at most this high of a percentage of unbuildable tiles for it to be considered a candidate to avoid chunks full of water as candidates. Defaults to `0.9`, or 90%.
         */
        readonly max_colliding_tiles_coefficient: double;
        /**
         * The minimum size of a biter group that goes to build a new base. This is multiplied by the evolution factor. Defaults to `5`.
         */
        readonly settler_group_min_size: uint;
        /**
         * The maximum size of a biter group that goes to build a new base. This is multiplied by the evolution factor. Defaults to `20`.
         */
        readonly settler_group_max_size: uint;
        /**
         * The minimum time between expansions in ticks. The actual cooldown is adjusted to the current evolution levels. Defaults to `4*3'600=14'400` ticks.
         */
        readonly min_expansion_cooldown: uint;
        /**
         * The maximum time between expansions in ticks. The actual cooldown is adjusted to the current evolution levels. Defaults to `60*3'600=216'000` ticks.
         */
        readonly max_expansion_cooldown: uint;
    }
    export interface UnitGroupMapSettings {
        /**
         * The minimum amount of time in ticks a group will spend gathering before setting off. The actual time is a random time between the minimum and maximum times. Defaults to `3'600` ticks.
         */
        readonly min_group_gathering_time: uint;
        /**
         * The maximum amount of time in ticks a group will spend gathering before setting off. The actual time is a random time between the minimum and maximum times. Defaults to `10*3'600=36'000` ticks.
         */
        readonly max_group_gathering_time: uint;
        /**
         * After gathering has finished, the group is allowed to wait this long in ticks for delayed members. New members are not accepted anymore however. Defaults to `2*3'600=7'200` ticks.
         */
        readonly max_wait_time_for_late_members: uint;
        /**
         * The minimum group radius in tiles. The actual radius is adjusted based on the number of members. Defaults to `5.0`.
         */
        readonly min_group_radius: double;
        /**
         * The maximum group radius in tiles. The actual radius is adjusted based on the number of members. Defaults to `30.0`.
         */
        readonly max_group_radius: double;
        /**
         * The maximum speed a percentage of its regular speed that a group member can speed up to when catching up with the group. Defaults to `1.4`, or 140%.
         */
        readonly max_member_speedup_when_behind: double;
        /**
         * The minimum speed a percentage of its regular speed that a group member can slow down to when ahead of the group. Defaults to `0.6`, or 60%.
         */
        readonly max_member_slowdown_when_ahead: double;
        /**
         * The minimum speed as a percentage of its maximum speed that a group will slow down to so members that fell behind can catch up. Defaults to `0.3`, or 30%.
         */
        readonly max_group_slowdown_factor: double;
        /**
         * When a member of a group falls back more than this factor times the group radius, the group will slow down to its `max_group_slowdown_factor` speed to let them catch up. Defaults to `3`.
         */
        readonly max_group_member_fallback_factor: double;
        /**
         * When a member of a group falls back more than this factor times the group radius, it will be dropped from the group. Defaults to `10`.
         */
        readonly member_disown_distance: double;
        readonly tick_tolerance_when_member_arrives: uint;
        /**
         * The maximum number of automatically created unit groups gathering for attack at any time. Defaults to `30`.
         */
        readonly max_gathering_unit_groups: uint;
        /**
         * The maximum number of members for an attack unit group. This only affects automatically created unit groups, manual groups created through the API are unaffected. Defaults to `200`.
         */
        readonly max_unit_group_size: uint;
    }
    export interface SteeringMapSetting {
        /**
         * Does not include the radius of the unit.
         */
        readonly radius: double;
        readonly separation_factor: double;
        readonly separation_force: double;
        /**
         * Used to make steering look better for aesthetic purposes.
         */
        readonly force_unit_fuzzy_goto_behavior: boolean;
    }
    export interface SteeringMapSettings {
        readonly default: SteeringMapSetting;
        readonly moving: SteeringMapSetting;
    }
    export interface PathFinderMapSettings {
        /**
         * The pathfinder performs a step of the backward search every `fwd2bwd_ratio`'th step. The minimum allowed value is `2`, which means symmetric search. The default value is `5`.
         */
        readonly fwd2bwd_ratio: uint;
        /**
         * When looking at which node to check next, their heuristic value is multiplied by this ratio. The higher it is, the more the search is directed straight at the goal. Defaults to `2`.
         */
        readonly goal_pressure_ratio: double;
        /**
         * The maximum number of nodes that are expanded per tick. Defaults to `1'000`.
         */
        readonly max_steps_worked_per_tick: double;
        /**
         * The maximum amount of work each pathfinding job is allowed to do per tick. Defaults to `8'000`.
         */
        readonly max_work_done_per_tick: uint;
        /**
         * Whether to cache paths at all. Defaults to `true`.
         */
        readonly use_path_cache: boolean;
        /**
         * Number of elements in the short cache. Defaults to `5`.
         */
        readonly short_cache_size: uint;
        /**
         * Number of elements in the long cache. Defaults to `25`.
         */
        readonly long_cache_size: uint;
        /**
         * The minimal distance to the goal in tiles required to be searched in the short path cache. Defaults to `10`.
         */
        readonly short_cache_min_cacheable_distance: double;
        /**
         * The minimal number of nodes required to be searched in the short path cache. Defaults to `50`.
         */
        readonly short_cache_min_algo_steps_to_cache: uint;
        /**
         * The minimal distance to the goal in tiles required to be searched in the long path cache. Defaults to `30`.
         */
        readonly long_cache_min_cacheable_distance: double;
        /**
         * When looking for a connection to a cached path, search at most for this number of steps times the original estimate. Defaults to `100`.
         */
        readonly cache_max_connect_to_cache_steps_multiplier: uint;
        /**
         * When looking for a path from cache, make sure it doesn't start too far from the requested start in relative terms. Defaults to `0.2`.
         */
        readonly cache_accept_path_start_distance_ratio: double;
        /**
         * When looking for a path from cache, make sure it doesn't end too far from the requested end in relative terms. This is typically more lenient than the start ratio since the end target could be moving. Defaults to `0.15`.
         */
        readonly cache_accept_path_end_distance_ratio: double;
        /**
         * Same principle as `cache_accept_path_start_distance_ratio`, but used for negative cache queries. Defaults to `0.3`.
         */
        readonly negative_cache_accept_path_start_distance_ratio: double;
        /**
         * Same principle as `cache_accept_path_end_distance_ratio`, but used for negative cache queries. Defaults to `0.3`.
         */
        readonly negative_cache_accept_path_end_distance_ratio: double;
        /**
         * When assigning a rating to the best path, this multiplier times start distances is considered. Defaults to `10`.
         */
        readonly cache_path_start_distance_rating_multiplier: double;
        /**
         * When assigning a rating to the best path, this multiplier times end distances is considered. This value is typically higher than the start multiplier as this results in better end path quality. Defaults to `20`.
         */
        readonly cache_path_end_distance_rating_multiplier: double;
        /**
         * A penalty that is applied for another unit that is on the way to the goal. This is mainly relevant for situations where a group of units has arrived at the target they are supposed to attack, making units further back circle around to reach the target. Defaults to `30`.
         */
        readonly stale_enemy_with_same_destination_collision_penalty: double;
        /**
         * The distance in tiles after which other moving units are not considered for pathfinding. Defaults to `5`.
         */
        readonly ignore_moving_enemy_collision_distance: double;
        /**
         * A penalty that is applied for another unit that is too close and either not moving or has a different goal. Defaults to `30`.
         */
        readonly enemy_with_different_destination_collision_penalty: double;
        /**
         * The general collision penalty with other units. Defaults to `10`.
         */
        readonly general_entity_collision_penalty: double;
        /**
         * The collision penalty for positions that require the destruction of an entity to get to. Defaults to `3`.
         */
        readonly general_entity_subsequent_collision_penalty: double;
        /**
         * The collision penalty for collisions in the extended bounding box but outside the entity's actual bounding box. Defaults to `3`.
         */
        readonly extended_collision_penalty: double;
        /**
         * The amount of path finder requests accepted per tick regardless of the requested path's length. Defaults to `10`.
         */
        readonly max_clients_to_accept_any_new_request: uint;
        /**
         * When the `max_clients_to_accept_any_new_request` amount is exhausted, only path finder requests with a short estimate will be accepted until this amount (per tick) is reached. Defaults to `100`.
         */
        readonly max_clients_to_accept_short_new_request: uint;
        /**
         * The maximum direct distance in tiles before a request is no longer considered short. Defaults to `100`.
         */
        readonly direct_distance_to_consider_short_request: uint;
        /**
         * The maximum amount of nodes a short request will traverse before being rescheduled as a long request. Defaults to `1000`.
         */
        readonly short_request_max_steps: uint;
        /**
         * The amount of steps that are allocated to short requests each tick, as a percentage of all available steps. Defaults to `0.5`, or 50%.
         */
        readonly short_request_ratio: double;
        /**
         * The minimum amount of steps that are guaranteed to be performed for every request. Defaults to `2000`.
         */
        readonly min_steps_to_check_path_find_termination: uint;
        /**
         * If the actual amount of steps is higher than the initial estimate by this factor, pathfinding is terminated. Defaults to `2000.0`.
         */
        readonly start_to_goal_cost_multiplier_to_terminate_path_find: double;
        /**
         * The thresholds of waiting clients after each of which the per-tick work limit will be increased by the corresponding value in `overload_multipliers`. This is to avoid clients having to wait too long. Must have the same number of elements as `overload_multipliers`. Defaults to `{0, 100, 500}`.
         */
        readonly overload_levels: uint[];
        /**
         * The multipliers to the amount of per-tick work applied after the corresponding thresholds in `overload_levels` have been reached. Must have the same number of elements as `overload_multipliers`. Defaults to `{2, 3, 4}`.
         */
        readonly overload_multipliers: double[];
        /**
         * The delay in ticks between decrementing the score of all paths in the negative cache by one. Defaults to `20`.
         */
        readonly negative_path_cache_delay_interval: uint;
    }
    /**
     * Various game-related settings. Updating any of the attributes will immediately take effect in the game engine.
     * @example Increase the number of short paths the pathfinder can cache.
     * game.map_settings.path_finder.short_cache_size = 15
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#MapSettings Online documentation}
     */
    export interface MapSettings {
        pollution: PollutionMapSettings;
        enemy_evolution: EnemyEvolutionMapSettings;
        enemy_expansion: EnemyExpansionMapSettings;
        unit_group: UnitGroupMapSettings;
        steering: SteeringMapSetting;
        path_finder: PathFinderMapSettings;
        /**
         * If a behavior fails this many times, the enemy (or enemy group) is destroyed. This solves biters getting stuck within their own base.
         * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#MapSettings#MapSettings.max_failed_behavior_count Online documentation}
         */
        max_failed_behavior_count: uint;
    }
    /**
     * Technology and recipe difficulty settings. Updating any of the attributes will immediately take effect in the game engine.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#DifficultySettings Online documentation}
     */
    export interface DifficultySettings {
        recipe_difficulty: defines.difficulty_settings.recipe_difficulty;
        technology_difficulty: defines.difficulty_settings.technology_difficulty;
        /**
         * A value in range [0.001, 1000].
         * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#DifficultySettings#DifficultySettings.technology_price_multiplier Online documentation}
         */
        technology_price_multiplier: double;
        /**
         * Either `"after-victory"`, `"always"` or `"never"`. Changing this to `"always"` or `"after-victory"` does not automatically unlock the research queue. See {@link LuaForce} for that.
         * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#DifficultySettings#DifficultySettings.research_queue_setting Online documentation}
         */
        research_queue_setting: "after-victory" | "always" | "never";
    }
    /**
     * A standard table containing all {@link MapSettings} attributes plus an additional table that contains all {@link DifficultySettings} properties.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#MapAndDifficultySettings Online documentation}
     */
    export interface MapAndDifficultySettings {
        readonly pollution: PollutionMapSettings;
        readonly enemy_evolution: EnemyEvolutionMapSettings;
        readonly enemy_expansion: EnemyExpansionMapSettings;
        readonly unit_group: UnitGroupMapSettings;
        readonly steering: SteeringMapSettings;
        readonly path_finder: PathFinderMapSettings;
        /**
         * If a behavior fails this many times, the enemy (or enemy group) is destroyed. This solves biters getting stuck within their own base.
         */
        readonly max_failed_behavior_count: uint;
        readonly difficulty_settings: MapDifficultySettings;
    }
    export interface MapDifficultySettings {
        readonly recipe_difficulty: defines.difficulty_settings.recipe_difficulty;
        readonly technology_difficulty: defines.difficulty_settings.technology_difficulty;
        /**
         * A value in range [0.001, 1000].
         */
        readonly technology_price_multiplier: double;
        /**
         * Either `"after-victory"`, `"always"` or `"never"`. Changing this to `"always"` or `"after-victory"` does not automatically unlock the research queue. See {@link LuaForce} for that.
         */
        readonly research_queue_setting: "after-victory" | "always" | "never";
    }
    /**
     * The data that can be extracted from a map exchange string, as a plain table.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#MapExchangeStringData Online documentation}
     */
    export interface MapExchangeStringData {
        readonly map_settings: MapAndDifficultySettings;
        readonly map_gen_settings: MapGenSettings;
    }
    export interface BlueprintSignalIcon {
        /**
         * The icon to use. It can be any item icon as well as any virtual signal icon.
         */
        readonly signal: SignalID;
        /**
         * Index of the icon in the blueprint icons slots. Has to be an integer in the range [1, 4].
         */
        readonly index: uint;
    }
    /**
     * The representation of an entity inside of a blueprint. It has at least these fields, but can contain additional ones depending on the kind of entity.
     * @see BlueprintEntityWrite
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#BlueprintEntity Online documentation}
     */
    export interface BlueprintEntity {
        /**
         * The entity's unique identifier in the blueprint.
         */
        readonly entity_number: uint;
        /**
         * The prototype name of the entity.
         */
        readonly name: string;
        /**
         * The position of the entity.
         */
        readonly position: MapPosition;
        /**
         * The direction the entity is facing. Only present for entities that can face in different directions and when the entity is not facing north.
         */
        readonly direction?: defines.direction;
        /**
         * The entity tags of the entity, if there are any. Only relevant for entity ghosts.
         */
        readonly tags?: Tags;
        /**
         * The items that the entity will request when revived, if there are any. It's a mapping of prototype names to amounts. Only relevant for entity ghosts.
         */
        readonly items?: Record<string, uint>;
        /**
         * The circuit network connections of the entity, if there are any. Only relevant for entities that support circuit connections.
         */
        readonly connections?: BlueprintCircuitConnection;
        /**
         * The control behavior of the entity, if it has one. The format of the control behavior depends on the entity's type. Only relevant for entities that support control behaviors.
         */
        readonly control_behavior?: BlueprintControlBehavior;
        /**
         * The schedule of the entity, if it has one. Only relevant for locomotives.
         */
        readonly schedule?: TrainScheduleRecord[];
        /** Orientation of the cargo wagon or locomotive, value 0 to 1 */
        readonly orientation?: RealOrientation;
        /** Copper wire connections, array of entity_numbers */
        readonly neighbours?: uint[];
        /** Name of the recipe prototype this assembling machine is set to. */
        readonly recipe?: string;
        /** Used by {@link https://wiki.factorio.com/Prototype/Container Prototype/Container}. The index of the first inaccessible item slot due to limiting with the red "bar". 0-based. */
        readonly bar?: uint16;
        /** Cargo wagon inventory configuration */
        readonly inventory?: BlueprintInventory;
        /** Used by {@link https://wiki.factorio.com/Prototype/InfinityContainer Prototype/InfinityContainer}. */
        readonly infinity_settings?: BlueprintInfinitySettings | InfinityPipeFilter;
        /** Type of the underground belt or loader. Either "input" or "output". */
        readonly type?: "input" | "output";
        /** Input priority of the splitter. Either "right" or "left", "none" is omitted. */
        readonly input_priority?: "right" | "left";
        /** Output priority of the splitter. Either "right" or "left", "none" is omitted. */
        readonly output_priority?: "right" | "left";
        /** Filter of the splitter. Name of the item prototype the filter is set to. */
        readonly filter?: string;
        /** Filters of the filter inserter or loader. Array of {@link InventoryFilter} objects. */
        readonly filters?: InventoryFilter[];
        /** Filter mode of the filter inserter. Either "whitelist" or "blacklist". */
        readonly filter_mode?: "whitelist" | "blacklist";
        /** The stack size the inserter is set to. */
        readonly override_stack_size?: uint8;
        /** The drop position the inserter is set to. */
        readonly drop_position?: MapPosition;
        /** The pickup position the inserter is set to. */
        readonly pickup_position?: MapPosition;
        /** Used by {@link https://wiki.factorio.com/Prototype/LogisticContainer Prototype/LogisticContainer}. */
        readonly request_filters?: LogisticFilter[];
        /** Whether this requester chest can request from buffer chests. */
        readonly request_from_buffers?: boolean;
        /** Used by {@link https://wiki.factorio.com/Programmable_speaker Programmable speaker}. */
        readonly parameters?: ProgrammableSpeakerParameters;
        /** Used by {@link https://wiki.factorio.com/Programmable_speaker Programmable speaker}. */
        readonly alert_parameters?: ProgrammableSpeakerAlertParameters;
        /** Used by the rocket silo, whether auto launch is enabled. */
        readonly auto_launch?: boolean;
        /** Used by {@link https://wiki.factorio.com/Prototype/SimpleEntityWithForce Prototype/SimpleEntityWithForce} or {@link https://wiki.factorio.com/Prototype/SimpleEntityWithOwner Prototype/SimpleEntityWithOwner}. */
        readonly variation?: uint8;
        /** Color of the {@link https://wiki.factorio.com/Prototype/SimpleEntityWithForce Prototype/SimpleEntityWithForce}, {@link https://wiki.factorio.com/Prototype/SimpleEntityWithOwner Prototype/SimpleEntityWithOwner}, or train station. */
        readonly color?: Color;
        /** The name of the train station. */
        readonly station?: string;
    }
    /**
     * Information about a single connection between two connection points.
     *
     * {@link https://wiki.factorio.com/Blueprint_string_format#Connection_data_object View Documentation}
     */
    export interface BlueprintConnectionData {
        /** ID of the entity this connection is connected with. */
        entity_id: uint;
        /** The circuit connector id of the entity this connection is connected to, see {@link defines.circuit_connector_id} */
        circuit_id?: defines.circuit_connector_id;
    }
    /**
     * The actual point where a wire is connected to. Contains information about where it is connected to.
     *
     * {@link https://wiki.factorio.com/Blueprint_string_format#Connection_point_object View Documentation}
     */
    export interface BlueprintConnectionPoint {
        /**
         * An array of {@link BlueprintConnectionData Connection data object} containing all the connections from this point
         * created by red wire.
         */
        red?: BlueprintConnectionData[];
        /**
         * An array of {@link BlueprintConnectionData Connection data object} containing all the connections from this point
         * created by green wire.
         */
        green?: BlueprintConnectionData[];
    }
    /**
     * Object containing information about the connections to other entities formed by red or green wires.
     *
     * {@link https://wiki.factorio.com/Blueprint_string_format#Connection_object View Documentation}
     */
    export interface BlueprintCircuitConnection {
        /** First connection point. The default for everything that doesn't have multiple connection points. */
        "1"?: BlueprintConnectionPoint;
        /** Second connection point. For example, the "output" part of an arithmetic combinator. */
        "2"?: BlueprintConnectionPoint;
    }
    export interface BlueprintInventory {
        readonly filters?: InventoryFilter[];
        /** The index of the first inaccessible item slot due to limiting with the red "bar". 0-based. */
        readonly bar?: uint16;
    }
    export interface BlueprintInfinitySettings {
        /** Whether the "remove unfiltered items" checkbox is checked. */
        readonly remove_unfiltered_items: boolean;
        /** Filters of the infinity container. */
        readonly filters?: InfinityInventoryFilter[];
    }
    export interface BlueprintControlBehavior {
        readonly condition?: CircuitCondition;
        readonly circuit_condition?: CircuitCondition;
        readonly filters?: ConstantCombinatorParameters[];
        readonly is_on?: boolean;
        readonly arithmetic_conditions?: ArithmeticCombinatorParameters;
        readonly decider_conditions?: DeciderCombinatorParameters;
        readonly circuit_enable_disable?: boolean;
        readonly circuit_read_resources?: boolean;
        readonly circuit_resource_read_mode?: defines.control_behavior.mining_drill.resource_read_mode;
        readonly read_stopped_train?: boolean;
        readonly train_stopped_signal?: SignalID;
        readonly read_from_train?: boolean;
        readonly send_to_train?: boolean;
        readonly circuit_mode_of_operation?: defines.control_behavior.inserter.circuit_mode_of_operation | defines.control_behavior.logistic_container.circuit_mode_of_operation | defines.control_behavior.lamp.circuit_mode_of_operation;
        readonly circuit_read_hand_contents?: boolean;
        readonly circuit_hand_read_mode?: defines.control_behavior.inserter.hand_read_mode;
        readonly circuit_set_stack_size?: boolean;
        readonly stack_control_input_signal?: SignalID;
        readonly use_colors?: boolean;
        readonly read_robot_stats?: boolean;
        readonly read_logistics?: boolean;
        readonly available_logistic_output_signal?: boolean;
        readonly total_logistic_output_signal?: boolean;
        readonly available_construction_output_signal?: boolean;
        readonly total_construction_output_signal?: boolean;
        readonly circuit_contents_read_mode?: defines.control_behavior.transport_belt.content_read_mode;
        readonly output_signal?: SignalID;
        readonly circuit_close_signal?: boolean;
        readonly circuit_read_signal?: boolean;
        readonly red_output_signal?: SignalID;
        readonly orange_output_signal?: SignalID;
        readonly green_output_signal?: SignalID;
        readonly blue_output_signal?: SignalID;
        readonly circuit_open_gate?: boolean;
        readonly circuit_read_sensor?: boolean;
        readonly circuit_parameters?: ProgrammableSpeakerCircuitParameters;
    }
    /**
     * Write form of {@link BlueprintEntity}, where table-or-array concepts are allowed to take an array form.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#BlueprintEntity Online documentation}
     */
    export interface BlueprintEntityWrite {
        /**
         * The entity's unique identifier in the blueprint.
         */
        readonly entity_number: uint;
        /**
         * The prototype name of the entity.
         */
        readonly name: string;
        /**
         * The position of the entity.
         */
        readonly position: MapPosition | MapPositionArray;
        /**
         * The direction the entity is facing. Only present for entities that can face in different directions and when the entity is not facing north.
         */
        readonly direction?: defines.direction;
        /**
         * The entity tags of the entity, if there are any. Only relevant for entity ghosts.
         */
        readonly tags?: Tags;
        /**
         * The items that the entity will request when revived, if there are any. It's a mapping of prototype names to amounts. Only relevant for entity ghosts.
         */
        readonly items?: Record<string, uint>;
        /**
         * The circuit network connections of the entity, if there are any. Only relevant for entities that support circuit connections.
         */
        readonly connections?: BlueprintCircuitConnection;
        /**
         * The control behavior of the entity, if it has one. The format of the control behavior depends on the entity's type. Only relevant for entities that support control behaviors.
         */
        readonly control_behavior?: BlueprintControlBehavior;
        /**
         * The schedule of the entity, if it has one. Only relevant for locomotives.
         */
        readonly schedule?: readonly TrainScheduleRecordWrite[];
        /** Orientation of the cargo wagon or locomotive, value 0 to 1 */
        readonly orientation?: RealOrientation;
        /** Copper wire connections, array of entity_numbers */
        readonly neighbours?: uint[];
        /** Name of the recipe prototype this assembling machine is set to. */
        readonly recipe?: string;
        /** Used by {@link https://wiki.factorio.com/Prototype/Container Prototype/Container}. The index of the first inaccessible item slot due to limiting with the red "bar". 0-based. */
        readonly bar?: uint16;
        /** Cargo wagon inventory configuration */
        readonly inventory?: BlueprintInventory;
        /** Used by {@link https://wiki.factorio.com/Prototype/InfinityContainer Prototype/InfinityContainer}. */
        readonly infinity_settings?: BlueprintInfinitySettings | InfinityPipeFilter;
        /** Type of the underground belt or loader. Either "input" or "output". */
        readonly type?: "input" | "output";
        /** Input priority of the splitter. Either "right" or "left", "none" is omitted. */
        readonly input_priority?: "right" | "left";
        /** Output priority of the splitter. Either "right" or "left", "none" is omitted. */
        readonly output_priority?: "right" | "left";
        /** Filter of the splitter. Name of the item prototype the filter is set to. */
        readonly filter?: string;
        /** Filters of the filter inserter or loader. Array of {@link InventoryFilter} objects. */
        readonly filters?: InventoryFilter[];
        /** Filter mode of the filter inserter. Either "whitelist" or "blacklist". */
        readonly filter_mode?: "whitelist" | "blacklist";
        /** The stack size the inserter is set to. */
        readonly override_stack_size?: uint8;
        /** The drop position the inserter is set to. */
        readonly drop_position?: MapPosition;
        /** The pickup position the inserter is set to. */
        readonly pickup_position?: MapPosition;
        /** Used by {@link https://wiki.factorio.com/Prototype/LogisticContainer Prototype/LogisticContainer}. */
        readonly request_filters?: LogisticFilter[];
        /** Whether this requester chest can request from buffer chests. */
        readonly request_from_buffers?: boolean;
        /** Used by {@link https://wiki.factorio.com/Programmable_speaker Programmable speaker}. */
        readonly parameters?: ProgrammableSpeakerParameters;
        /** Used by {@link https://wiki.factorio.com/Programmable_speaker Programmable speaker}. */
        readonly alert_parameters?: ProgrammableSpeakerAlertParameters;
        /** Used by the rocket silo, whether auto launch is enabled. */
        readonly auto_launch?: boolean;
        /** Used by {@link https://wiki.factorio.com/Prototype/SimpleEntityWithForce Prototype/SimpleEntityWithForce} or {@link https://wiki.factorio.com/Prototype/SimpleEntityWithOwner Prototype/SimpleEntityWithOwner}. */
        readonly variation?: uint8;
        /** Color of the {@link https://wiki.factorio.com/Prototype/SimpleEntityWithForce Prototype/SimpleEntityWithForce}, {@link https://wiki.factorio.com/Prototype/SimpleEntityWithOwner Prototype/SimpleEntityWithOwner}, or train station. */
        readonly color?: Color;
        /** The name of the train station. */
        readonly station?: string;
    }
    /**
     * @see TileWrite
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#Tile Online documentation}
     */
    export interface Tile {
        /**
         * The position of the tile.
         */
        readonly position: TilePosition;
        /**
         * The prototype name of the tile.
         */
        readonly name: string;
    }
    /**
     * Write form of {@link Tile}, where table-or-array concepts are allowed to take an array form.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#Tile Online documentation}
     */
    export interface TileWrite {
        /**
         * The position of the tile.
         */
        readonly position: TilePosition | TilePositionArray;
        /**
         * The prototype name of the tile.
         */
        readonly name: string;
    }
    export interface Fluid {
        /**
         * Fluid prototype name of the fluid.
         */
        readonly name: string;
        /**
         * Amount of the fluid.
         */
        readonly amount: double;
        /**
         * The temperature. When reading from {@link LuaFluidBox}, this field will always be present. It is not necessary to specify it when writing, however. When not specified, the fluid will be set to the fluid's default temperature as specified in the fluid's prototype.
         */
        readonly temperature?: double;
    }
    /**
     * Common attributes to all variants of {@link Ingredient}.
     */
    export interface BaseIngredient {
        /**
         * `"item"` or `"fluid"`.
         */
        readonly type: "item" | "fluid";
        /**
         * Prototype name of the required item or fluid.
         */
        readonly name: string;
        /**
         * Amount of the item or fluid.
         */
        readonly amount: double;
        /**
         * How much of this ingredient is a catalyst.
         */
        readonly catalyst_amount?: uint | double;
    }
    /**
     * `"fluid"` variant of {@link Ingredient}.
     */
    export interface FluidIngredient extends BaseIngredient {
        readonly type: "fluid";
        /**
         * The minimum fluid temperature required.
         */
        readonly minimum_temperature?: double;
        /**
         * The maximum fluid temperature allowed.
         */
        readonly maximum_temperature?: double;
    }
    /**
     * Variants of {@link Ingredient} with no additional attributes.
     */
    export interface OtherIngredient extends BaseIngredient {
        readonly type: "item";
    }
    /**
     * Base attributes: {@link BaseIngredient}
     *
     * Other attributes may be specified depending on `type`:
     * - `"fluid"`: {@link FluidIngredient}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#Ingredient Online documentation}
     */
    export type Ingredient = FluidIngredient | OtherIngredient;
    /**
     * Common attributes to all variants of {@link Product}.
     */
    export interface BaseProduct {
        /**
         * `"item"` or `"fluid"`.
         */
        readonly type: "item" | "fluid";
        /**
         * Prototype name of the result.
         */
        readonly name: string;
        /**
         * Amount of the item or fluid to give. If not specified, `amount_min`, `amount_max` and `probability` must all be specified.
         */
        readonly amount?: double;
        /**
         * Minimal amount of the item or fluid to give. Has no effect when `amount` is specified.
         */
        readonly amount_min?: uint | double;
        /**
         * Maximum amount of the item or fluid to give. Has no effect when `amount` is specified.
         */
        readonly amount_max?: uint | double;
        /**
         * A value in range [0, 1]. Item or fluid is only given with this probability; otherwise no product is produced.
         */
        readonly probability?: double;
        /**
         * How much of this product is a catalyst.
         */
        readonly catalyst_amount?: uint | double;
    }
    /**
     * `"fluid"` variant of {@link Product}.
     */
    export interface FluidProduct extends BaseProduct {
        readonly type: "fluid";
        /**
         * The fluid temperature of this product.
         */
        readonly temperature?: double;
    }
    /**
     * Variants of {@link Product} with no additional attributes.
     */
    export interface OtherProduct extends BaseProduct {
        readonly type: "item";
    }
    /**
     * Base attributes: {@link BaseProduct}
     *
     * Other attributes may be specified depending on `type`:
     * - `"fluid"`: {@link FluidProduct}
     * @example Products of the "steel-chest" recipe (an array of Product):
     * {{type="item", name="steel-chest", amount=1}}
     * @example Products of the "advanced-oil-processing" recipe:
     * {{type="fluid", name="heavy-oil", amount=1},
     *  {type="fluid", name="light-oil", amount=4.5},
     *  {type="fluid", name="petroleum-gas", amount=5.5}}
     * @example What a custom recipe would look like that had a probability of 0.5 to return a minimum amount of 1 and a maximum amount of 5:
     * {{type="item", name="custom-item", probability=0.5, amount_min=1, amount_max=5}}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#Product Online documentation}
     */
    export type Product = FluidProduct | OtherProduct;
    export interface Loot {
        /**
         * Item prototype name of the result.
         */
        readonly item: string;
        /**
         * Probability that any loot at all will drop, as a number in range [0, 1].
         */
        readonly probability: double;
        /**
         * Minimum amount of loot to drop.
         */
        readonly count_min: double;
        /**
         * Maximum amount of loot to drop.
         */
        readonly count_max: double;
    }
    export interface BaseTechnologyModifier {
        /**
         * Modifier type. Specifies which of the other fields will be available. Possible values are: `"inserter-stack-size-bonus"`, `"stack-inserter-capacity-bonus"`, `"laboratory-speed"`, `"character-logistic-trash-slots"`, `"maximum-following-robots-count"`, `"worker-robot-speed"`, `"worker-robot-storage"`, `"ghost-time-to-live"`, `"turret-attack"`, `"ammo-damage"`, `"give-item"`, `"gun-speed"`, `"unlock-recipe"`, `"character-crafting-speed"`, `"character-mining-speed"`, `"character-running-speed"`, `"character-build-distance"`, `"character-item-drop-distance"`, `"character-reach-distance"`, `"character-resource-reach-distance"`, `"character-item-pickup-distance"`, `"character-loot-pickup-distance"`, `"character-inventory-slots-bonus"`, `"deconstruction-time-to-live"`, `"max-failed-attempts-per-tick-per-construction-queue"`, `"max-successful-attempts-per-tick-per-construction-queue"`, `"character-health-bonus"`, `"mining-drill-productivity-bonus"`, `"train-braking-force-bonus"`, `"zoom-to-world-enabled"`, `"zoom-to-world-ghost-building-enabled"`, `"zoom-to-world-blueprint-enabled"`, `"zoom-to-world-deconstruction-planner-enabled"`, `"zoom-to-world-upgrade-planner-enabled"`, `"zoom-to-world-selection-tool-enabled"`, `"worker-robot-battery"`, `"laboratory-productivity"`, `"follower-robot-lifetime"`, `"artillery-range"`, `"nothing"`, `"character-additional-mining-categories"`, `"character-logistic-requests"`.
         */
        readonly type: "inserter-stack-size-bonus" | "stack-inserter-capacity-bonus" | "laboratory-speed" | "character-logistic-trash-slots" | "maximum-following-robots-count" | "worker-robot-speed" | "worker-robot-storage" | "ghost-time-to-live" | "turret-attack" | "ammo-damage" | "give-item" | "gun-speed" | "unlock-recipe" | "character-crafting-speed" | "character-mining-speed" | "character-running-speed" | "character-build-distance" | "character-item-drop-distance" | "character-reach-distance" | "character-resource-reach-distance" | "character-item-pickup-distance" | "character-loot-pickup-distance" | "character-inventory-slots-bonus" | "deconstruction-time-to-live" | "max-failed-attempts-per-tick-per-construction-queue" | "max-successful-attempts-per-tick-per-construction-queue" | "character-health-bonus" | "mining-drill-productivity-bonus" | "train-braking-force-bonus" | "zoom-to-world-enabled" | "zoom-to-world-ghost-building-enabled" | "zoom-to-world-blueprint-enabled" | "zoom-to-world-deconstruction-planner-enabled" | "zoom-to-world-upgrade-planner-enabled" | "zoom-to-world-selection-tool-enabled" | "worker-robot-battery" | "laboratory-productivity" | "follower-robot-lifetime" | "artillery-range" | "nothing" | "character-additional-mining-categories" | "character-logistic-requests";
    }
    /**
     * `"gun-speed"` variant of {@link TechnologyModifier}.
     */
    export interface GunSpeedTechnologyModifier extends BaseTechnologyModifier {
        readonly type: "gun-speed";
        /**
         * Prototype name of the ammunition category that is affected
         */
        readonly ammo_category: string;
        /**
         * Modification value. This will be added to the current gun speed modifier upon researching.
         */
        readonly modifier: double;
    }
    /**
     * `"ammo-damage"` variant of {@link TechnologyModifier}.
     */
    export interface AmmoDamageTechnologyModifier extends BaseTechnologyModifier {
        readonly type: "ammo-damage";
        /**
         * Prototype name of the ammunition category that is affected
         */
        readonly ammo_category: string;
        /**
         * Modification value. This will be added to the current ammo damage modifier upon researching.
         */
        readonly modifier: double;
    }
    /**
     * `"give-item"` variant of {@link TechnologyModifier}.
     */
    export interface GiveItemTechnologyModifier extends BaseTechnologyModifier {
        readonly type: "give-item";
        /**
         * Item prototype name to give.
         */
        readonly item: string;
        /**
         * Number of items to give. Defaults to `1`.
         */
        readonly count?: uint;
    }
    /**
     * `"turret-attack"` variant of {@link TechnologyModifier}.
     */
    export interface TurretAttackTechnologyModifier extends BaseTechnologyModifier {
        readonly type: "turret-attack";
        /**
         * Turret prototype name this modifier will affect.
         */
        readonly turret_id: string;
        /**
         * Modification value. This will be added to the current turret damage modifier upon researching.
         */
        readonly modifier: double;
    }
    /**
     * `"unlock-recipe"` variant of {@link TechnologyModifier}.
     */
    export interface UnlockRecipeTechnologyModifier extends BaseTechnologyModifier {
        readonly type: "unlock-recipe";
        /**
         * Recipe prototype name to unlock.
         */
        readonly recipe: string;
    }
    /**
     * `"nothing"` variant of {@link TechnologyModifier}.
     */
    export interface NothingTechnologyModifier extends BaseTechnologyModifier {
        readonly type: "nothing";
        /**
         * Description of this nothing modifier.
         */
        readonly effect_description: LocalisedString;
    }
    /**
     * Variants of {@link TechnologyModifier} with no additional attributes.
     */
    export interface OtherTechnologyModifier extends BaseTechnologyModifier {
        readonly type: "inserter-stack-size-bonus" | "stack-inserter-capacity-bonus" | "laboratory-speed" | "character-logistic-trash-slots" | "maximum-following-robots-count" | "worker-robot-speed" | "worker-robot-storage" | "ghost-time-to-live" | "character-crafting-speed" | "character-mining-speed" | "character-running-speed" | "character-build-distance" | "character-item-drop-distance" | "character-reach-distance" | "character-resource-reach-distance" | "character-item-pickup-distance" | "character-loot-pickup-distance" | "character-inventory-slots-bonus" | "deconstruction-time-to-live" | "max-failed-attempts-per-tick-per-construction-queue" | "max-successful-attempts-per-tick-per-construction-queue" | "character-health-bonus" | "mining-drill-productivity-bonus" | "train-braking-force-bonus" | "zoom-to-world-enabled" | "zoom-to-world-ghost-building-enabled" | "zoom-to-world-blueprint-enabled" | "zoom-to-world-deconstruction-planner-enabled" | "zoom-to-world-upgrade-planner-enabled" | "zoom-to-world-selection-tool-enabled" | "worker-robot-battery" | "laboratory-productivity" | "follower-robot-lifetime" | "artillery-range" | "character-additional-mining-categories" | "character-logistic-requests";
        /**
         * Modification value. This value will be added to the variable it modifies.
         */
        readonly modifier: double;
    }
    /**
     * The effect that is applied when a technology is researched. It is a table that contains at least the field `type`.
     *
     * Other attributes may be specified depending on `type`:
     * - `"gun-speed"`: {@link GunSpeedTechnologyModifier}
     * - `"ammo-damage"`: {@link AmmoDamageTechnologyModifier}
     * - `"give-item"`: {@link GiveItemTechnologyModifier}
     * - `"turret-attack"`: {@link TurretAttackTechnologyModifier}
     * - `"unlock-recipe"`: {@link UnlockRecipeTechnologyModifier}
     * - `"nothing"`: {@link NothingTechnologyModifier}
     * - Other types: {@link OtherTechnologyModifier}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#TechnologyModifier Online documentation}
     */
    export type TechnologyModifier = GunSpeedTechnologyModifier | AmmoDamageTechnologyModifier | GiveItemTechnologyModifier | TurretAttackTechnologyModifier | UnlockRecipeTechnologyModifier | NothingTechnologyModifier | OtherTechnologyModifier;
    /**
     * A single offer on a market entity.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#Offer Online documentation}
     */
    export interface Offer {
        /**
         * List of prices.
         */
        readonly price: Ingredient[];
        /**
         * The action that will take place when a player accepts the offer. Usually a `"give-item"` modifier.
         */
        readonly offer: TechnologyModifier;
    }
    /**
     * Specifies how probability and richness are calculated when placing something on the map. Can be specified either using `probability_expression` and `richness_expression` or by using all the other fields.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#AutoplaceSpecification Online documentation}
     */
    export interface AutoplaceSpecification {
        readonly probability_expression: NoiseExpression;
        readonly richness_expression: NoiseExpression;
        readonly coverage: double;
        readonly sharpness: double;
        readonly max_probability: double;
        readonly placement_density: uint;
        readonly richness_base: double;
        readonly richness_multiplier: double;
        readonly richness_multiplier_distance_bonus: double;
        readonly starting_area_size: uint;
        readonly order: string;
        readonly default_enabled: boolean;
        readonly peaks?: AutoplaceSpecificationPeak[];
        /**
         * Control prototype name.
         */
        readonly control?: string;
        readonly tile_restriction?: AutoplaceSpecificationRestriction[];
        readonly force: string;
        readonly random_probability_penalty: double;
    }
    /**
     * A fragment of a functional program used to generate coherent noise, probably for purposes related to terrain generation. These can only be meaningfully written/modified during the data load phase. More detailed information is found on the {@link prototype:NamedNoiseExpression prototype docs}.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#NoiseExpression Online documentation}
     */
    export interface NoiseExpression {
        /**
         * Names the type of the expression and determines what other fields are required.
         */
        readonly type: string;
    }
    export interface AutoplaceSpecificationPeak {
        readonly influence: double;
        readonly max_influence: double;
        readonly min_influence: double;
        readonly richness_influence: double;
        readonly noisePersistence: double;
        /**
         * Prototype name of the noise layer.
         */
        readonly noise_layer?: string;
        readonly noise_octaves_difference: double;
        readonly water_optimal: double;
        readonly water_range: double;
        readonly water_max_range: double;
        readonly water_top_property_limit: double;
        readonly elevation_optimal: double;
        readonly elevation_range: double;
        readonly elevation_max_range: double;
        readonly elevation_top_property_limit: double;
        readonly temperature_optimal: double;
        readonly temperature_range: double;
        readonly temperature_max_range: double;
        readonly temperature_top_property_limit: double;
        readonly starting_area_weight_optimal: double;
        readonly starting_area_weight_range: double;
        readonly starting_area_weight_max_range: double;
        readonly starting_area_weight_top_property_limit: double;
        readonly tier_from_start_optimal: double;
        readonly tier_from_start_range: double;
        readonly tier_from_start_max_range: double;
        readonly tier_from_start_top_property_limit: double;
        readonly distance_optimal: double;
        readonly distance_range: double;
        readonly distance_max_range: double;
        readonly distance_top_property_limit: double;
        readonly aux_optimal: double;
        readonly aux_range: double;
        readonly aux_max_range: double;
        readonly aux_top_property_limit: double;
    }
    export interface AutoplaceSpecificationRestriction {
        /**
         * Tile prototype name
         */
        readonly first?: string;
        /**
         * Second prototype name
         */
        readonly second?: string;
    }
    export interface Resistance {
        /**
         * Absolute damage decrease
         */
        readonly decrease: float;
        /**
         * Percentual damage decrease
         */
        readonly percent: float;
    }
    /**
     * A floating point number specifying an amount.
     *
     * For backwards compatibility, MapGenSizes can also be specified as one of the following strings, which will be converted to a number (when queried, a number will always be returned):
     *
     * **Options:**
     * - {@link float}: Specifying a map gen dimension.
     * - `"none"`: equivalent to `0`.
     * - `"very-low"`: equivalent to `1/2`.
     * - `"very-small"`: equivalent to `1/2`.
     * - `"very-poor"`: equivalent to `1/2`.
     * - `"low"`: equivalent to `1/sqrt(2)`.
     * - `"small"`: equivalent to `1/sqrt(2)`.
     * - `"poor"`: equivalent to `1/sqrt(2)`.
     * - `"normal"`: equivalent to `1`.
     * - `"medium"`: equivalent to `1`.
     * - `"regular"`: equivalent to `1`.
     * - `"high"`: equivalent to `sqrt(2)`.
     * - `"big"`: equivalent to `sqrt(2)`.
     * - `"good"`: equivalent to `sqrt(2)`.
     * - `"very-high"`: equivalent to `2`.
     * - `"very-big"`: equivalent to `2`.
     * - `"very-good"`: equivalent to `2`.
     * @remarks The map generation algorithm officially supports the range of values the in-game map generation screen shows (specifically `0` and values from `1/6` to `6`). Values outside this range are not guaranteed to work as expected.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#MapGenSize Online documentation}
     */
    export type MapGenSize = float | "none" | "very-low" | "very-small" | "very-poor" | "low" | "small" | "poor" | "normal" | "medium" | "regular" | "high" | "big" | "good" | "very-high" | "very-big" | "very-good";
    /**
     * @see AutoplaceControlWrite
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#AutoplaceControl Online documentation}
     */
    export interface AutoplaceControl {
        /**
         * For things that are placed as spots such as ores and enemy bases, frequency is generally proportional to number of spots placed per unit area. For continuous features such as forests, frequency is how compressed the probability function is over distance, i.e. the inverse of 'scale' (similar to terrain_segmentation). When the {@link LuaAutoplaceControlPrototype} is of the category `"terrain"`, then scale is shown in the map generator GUI instead of frequency.
         */
        readonly frequency: float;
        /**
         * For things that are placed as spots, size is proportional to the area of each spot. For continuous features, size affects how much of the map is covered with the thing, and is called 'coverage' in the GUI.
         */
        readonly size: float;
        /**
         * Has different effects for different things, but generally affects the 'health' or density of a thing that is placed without affecting where it is placed. For trees, richness affects tree health. For ores, richness multiplies the amount of ore at any given tile in a patch. Metadata about autoplace controls (such as whether or not 'richness' does anything for them) can be found in the {@link LuaAutoplaceControlPrototype} by looking up `game.autoplace_control_prototypes[(control prototype name)]`, e.g. `game.autoplace_control_prototypes["enemy-base"].richness` is false, because enemy base autoplacement doesn't use richness.
         */
        readonly richness: float;
    }
    /**
     * Write form of {@link AutoplaceControl}, where table-or-array concepts are allowed to take an array form.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#AutoplaceControl Online documentation}
     */
    export interface AutoplaceControlWrite {
        /**
         * For things that are placed as spots such as ores and enemy bases, frequency is generally proportional to number of spots placed per unit area. For continuous features such as forests, frequency is how compressed the probability function is over distance, i.e. the inverse of 'scale' (similar to terrain_segmentation). When the {@link LuaAutoplaceControlPrototype} is of the category `"terrain"`, then scale is shown in the map generator GUI instead of frequency.
         */
        readonly frequency: MapGenSize;
        /**
         * For things that are placed as spots, size is proportional to the area of each spot. For continuous features, size affects how much of the map is covered with the thing, and is called 'coverage' in the GUI.
         */
        readonly size: MapGenSize;
        /**
         * Has different effects for different things, but generally affects the 'health' or density of a thing that is placed without affecting where it is placed. For trees, richness affects tree health. For ores, richness multiplies the amount of ore at any given tile in a patch. Metadata about autoplace controls (such as whether or not 'richness' does anything for them) can be found in the {@link LuaAutoplaceControlPrototype} by looking up `game.autoplace_control_prototypes[(control prototype name)]`, e.g. `game.autoplace_control_prototypes["enemy-base"].richness` is false, because enemy base autoplacement doesn't use richness.
         */
        readonly richness: MapGenSize;
    }
    /**
     * @see AutoplaceSettingsWrite
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#AutoplaceSettings Online documentation}
     */
    export interface AutoplaceSettings {
        /**
         * Whether missing autoplace names for this type should be default enabled.
         */
        readonly treat_missing_as_default: boolean;
        readonly settings: Record<string, AutoplaceControl>;
    }
    /**
     * Write form of {@link AutoplaceSettings}, where table-or-array concepts are allowed to take an array form.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#AutoplaceSettings Online documentation}
     */
    export interface AutoplaceSettingsWrite {
        /**
         * Whether missing autoplace names for this type should be default enabled.
         */
        readonly treat_missing_as_default: boolean;
        readonly settings: Record<string, AutoplaceControlWrite>;
    }
    /**
     * @see CliffPlacementSettingsWrite
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#CliffPlacementSettings Online documentation}
     */
    export interface CliffPlacementSettings {
        /**
         * Name of the cliff prototype.
         */
        readonly name: string;
        /**
         * Elevation at which the first row of cliffs is placed. The default is `10`, and this cannot be set from the map generation GUI.
         */
        readonly cliff_elevation_0: float;
        /**
         * Elevation difference between successive rows of cliffs. This is inversely proportional to 'frequency' in the map generation GUI. Specifically, when set from the GUI the value is `40 / frequency`.
         */
        readonly cliff_elevation_interval: float;
        /**
         * Corresponds to 'continuity' in the GUI. This value is not used directly, but is used by the 'cliffiness' noise expression, which in combination with elevation and the two cliff elevation properties drives cliff placement (cliffs are placed when elevation crosses the elevation contours defined by `cliff_elevation_0` and `cliff_elevation_interval` when 'cliffiness' is greater than `0.5`). The default 'cliffiness' expression interprets this value such that larger values result in longer unbroken walls of cliffs, and smaller values (between `0` and `1`) result in larger gaps in cliff walls.
         */
        readonly richness: float;
    }
    /**
     * Write form of {@link CliffPlacementSettings}, where table-or-array concepts are allowed to take an array form.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#CliffPlacementSettings Online documentation}
     */
    export interface CliffPlacementSettingsWrite {
        /**
         * Name of the cliff prototype.
         */
        readonly name: string;
        /**
         * Elevation at which the first row of cliffs is placed. The default is `10`, and this cannot be set from the map generation GUI.
         */
        readonly cliff_elevation_0: float;
        /**
         * Elevation difference between successive rows of cliffs. This is inversely proportional to 'frequency' in the map generation GUI. Specifically, when set from the GUI the value is `40 / frequency`.
         */
        readonly cliff_elevation_interval: float;
        /**
         * Corresponds to 'continuity' in the GUI. This value is not used directly, but is used by the 'cliffiness' noise expression, which in combination with elevation and the two cliff elevation properties drives cliff placement (cliffs are placed when elevation crosses the elevation contours defined by `cliff_elevation_0` and `cliff_elevation_interval` when 'cliffiness' is greater than `0.5`). The default 'cliffiness' expression interprets this value such that larger values result in longer unbroken walls of cliffs, and smaller values (between `0` and `1`) result in larger gaps in cliff walls.
         */
        readonly richness: MapGenSize;
    }
    /**
     * The 'map type' dropdown in the map generation GUI is actually a selector for elevation generator. The base game sets `property_expression_names.elevation` to `"0_16-elevation"` to reproduce terrain from 0.16 or to `"0_17-island"` for the island preset. If generators are available for other properties, the 'map type' dropdown in the GUI will be renamed to 'elevation' and shown along with selectors for the other selectable properties.
     * @see MapGenSettingsWrite
     * @example Assuming a NamedNoiseExpression with the name "my-alternate-grass1-probability" is defined
     * local surface = game.player.surface
     * local mgs = surface.map_gen_settings
     * mgs.property_expression_names["tile:grass1:probability"] = "my-alternate-grass1-probability"
     * surface.map_gen_settings = mgs
     * @example To make there be no deep water on (newly generated chunks) a surface:
     * local surface = game.player.surface
     * local mgs = surface.map_gen_settings
     * mgs.property_expression_names["tile:deepwater:probability"] = -1000
     * surface.map_gen_settings = mgs
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#MapGenSettings Online documentation}
     */
    export interface MapGenSettings {
        /**
         * The inverse of 'water scale' in the map generator GUI. Lower `terrain_segmentation` increases the scale of elevation features (lakes, continents, etc). This behavior can be overridden with alternate elevation generators (see `property_expression_names`, below).
         */
        readonly terrain_segmentation: float;
        /**
         * The equivalent to 'water coverage' in the map generator GUI. Specifically, when this value is non-zero, `water_level = 10 * log2` (the value of this field), and the elevation generator subtracts water level from elevation before adding starting lakes. If water is set to 'none', elevation is clamped to a small positive value before adding starting lakes. This behavior can be overridden with alternate elevation generators (see `property_expression_names`, below).
         */
        readonly water: float;
        /**
         * Indexed by autoplace control prototype name.
         */
        readonly autoplace_controls: Record<string, AutoplaceControl>;
        /**
         * Whether undefined `autoplace_controls` should fall back to the default controls or not. Defaults to `true`.
         */
        readonly default_enable_all_autoplace_controls: boolean;
        /**
         * Each setting in this dictionary maps the string type to the settings for that type. Valid types are `"entity"`, `"tile"` and `"decorative"`.
         */
        readonly autoplace_settings: Record<string, AutoplaceSettings>;
        /**
         * Map generation settings for entities of the type "cliff".
         */
        readonly cliff_settings: CliffPlacementSettings;
        /**
         * The random seed used to generated this map.
         */
        readonly seed: uint;
        /**
         * Width in tiles. If `0`, the map has 'infinite' width, with the actual limitation being one million tiles in each direction from the center.
         */
        readonly width: uint;
        /**
         * Height in tiles. If `0`, the map has 'infinite' height, with the actual limitation being one million tiles in each direction from the center.
         */
        readonly height: uint;
        /**
         * Size of the starting area.
         */
        readonly starting_area: float;
        /**
         * Positions of the starting areas.
         */
        readonly starting_points: MapPosition[];
        /**
         * Whether peaceful mode is enabled for this map.
         */
        readonly peaceful_mode: boolean;
        /**
         * Overrides for tile property value generators. Values either name a NamedNoiseExpression or can be literal numbers, stored as strings (e.g. `"5"`). All other controls can be overridden by a property expression names. Notable properties:
         * - `moisture` - a value between 0 and 1 that determines whether a tile becomes sandy (low moisture) or grassy (high moisture).
         * - `aux` - a value between 0 and 1 that determines whether low-moisture tiles become sand or red desert.
         * - `temperature` - provides a value (vaguely representing degrees Celsius, varying between -20 and 50) that is used (together with moisture and aux) as part of tree and decorative placement.
         * - `elevation` - tiles values less than zero become water. Cliffs are placed along certain contours according to {@link CliffPlacementSettings}.
         * - `cliffiness` - determines whether (when >0.5) or not (when <0.5) a cliff will be placed at an otherwise suitable (according to {@link CliffPlacementSettings}) location.
         * - `enemy-base-intensity` - a number that is referenced by both `enemy-base-frequency` and `enemy-base-radius`. i.e. if this is overridden, enemy base frequency and size will both be affected and do something reasonable. By default, this expression returns a value proportional to distance from any starting point, clamped at about 7.
         * - `enemy-base-frequency` - a number representing average number of enemy bases per tile for a region, by default in terms of `enemy-base-intensity`.
         * - `enemy-base-radius` - a number representing the radius of an enemy base, if one were to be placed on the given tile, by default proportional to a constant plus `enemy-base-intensity`. Climate controls ('Moisture' and 'Terrain type' at the bottom of the Terrain tab in the map generator GUI) don't have their own dedicated structures in MapGenSettings. Instead, their values are stored as property expression overrides with long names:
         * - `control-setting:moisture:frequency:multiplier` - frequency (inverse of scale) multiplier for moisture noise. Default is 1.
         * - `control-setting:moisture:bias` - global bias for moisture (which normally varies between 0 and 1). Default is 0.
         * - `control-setting:aux:frequency:multiplier` - frequency (inverse of scale) multiplier for aux (called 'terrain type' in the GUI) noise. Default is 1.
         * - `control-setting:aux:bias` - global bias for aux/terrain type (which normally varies between 0 and 1). Default is 0. All other MapGenSettings feed into named noise expressions, and therefore placement can be overridden by including the name of a property in this dictionary. The probability and richness functions for placing specific tiles, entities, and decoratives can be overridden by including an entry named `{tile|entity|decorative}:(prototype name):{probability|richness}`.
         */
        readonly property_expression_names: Record<string, string>;
    }
    /**
     * Write form of {@link MapGenSettings}, where table-or-array concepts are allowed to take an array form.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#MapGenSettings Online documentation}
     */
    export interface MapGenSettingsWrite {
        /**
         * The inverse of 'water scale' in the map generator GUI. Lower `terrain_segmentation` increases the scale of elevation features (lakes, continents, etc). This behavior can be overridden with alternate elevation generators (see `property_expression_names`, below).
         */
        readonly terrain_segmentation: MapGenSize;
        /**
         * The equivalent to 'water coverage' in the map generator GUI. Specifically, when this value is non-zero, `water_level = 10 * log2` (the value of this field), and the elevation generator subtracts water level from elevation before adding starting lakes. If water is set to 'none', elevation is clamped to a small positive value before adding starting lakes. This behavior can be overridden with alternate elevation generators (see `property_expression_names`, below).
         */
        readonly water: MapGenSize;
        /**
         * Indexed by autoplace control prototype name.
         */
        readonly autoplace_controls: Record<string, AutoplaceControlWrite>;
        /**
         * Whether undefined `autoplace_controls` should fall back to the default controls or not. Defaults to `true`.
         */
        readonly default_enable_all_autoplace_controls: boolean;
        /**
         * Each setting in this dictionary maps the string type to the settings for that type. Valid types are `"entity"`, `"tile"` and `"decorative"`.
         */
        readonly autoplace_settings: Record<string, AutoplaceSettingsWrite>;
        /**
         * Map generation settings for entities of the type "cliff".
         */
        readonly cliff_settings: CliffPlacementSettingsWrite;
        /**
         * The random seed used to generated this map.
         */
        readonly seed: uint;
        /**
         * Width in tiles. If `0`, the map has 'infinite' width, with the actual limitation being one million tiles in each direction from the center.
         */
        readonly width: uint;
        /**
         * Height in tiles. If `0`, the map has 'infinite' height, with the actual limitation being one million tiles in each direction from the center.
         */
        readonly height: uint;
        /**
         * Size of the starting area.
         */
        readonly starting_area: MapGenSize;
        /**
         * Positions of the starting areas.
         */
        readonly starting_points: readonly (MapPosition | MapPositionArray)[];
        /**
         * Whether peaceful mode is enabled for this map.
         */
        readonly peaceful_mode: boolean;
        /**
         * Overrides for tile property value generators. Values either name a NamedNoiseExpression or can be literal numbers, stored as strings (e.g. `"5"`). All other controls can be overridden by a property expression names. Notable properties:
         * - `moisture` - a value between 0 and 1 that determines whether a tile becomes sandy (low moisture) or grassy (high moisture).
         * - `aux` - a value between 0 and 1 that determines whether low-moisture tiles become sand or red desert.
         * - `temperature` - provides a value (vaguely representing degrees Celsius, varying between -20 and 50) that is used (together with moisture and aux) as part of tree and decorative placement.
         * - `elevation` - tiles values less than zero become water. Cliffs are placed along certain contours according to {@link CliffPlacementSettings}.
         * - `cliffiness` - determines whether (when >0.5) or not (when <0.5) a cliff will be placed at an otherwise suitable (according to {@link CliffPlacementSettings}) location.
         * - `enemy-base-intensity` - a number that is referenced by both `enemy-base-frequency` and `enemy-base-radius`. i.e. if this is overridden, enemy base frequency and size will both be affected and do something reasonable. By default, this expression returns a value proportional to distance from any starting point, clamped at about 7.
         * - `enemy-base-frequency` - a number representing average number of enemy bases per tile for a region, by default in terms of `enemy-base-intensity`.
         * - `enemy-base-radius` - a number representing the radius of an enemy base, if one were to be placed on the given tile, by default proportional to a constant plus `enemy-base-intensity`. Climate controls ('Moisture' and 'Terrain type' at the bottom of the Terrain tab in the map generator GUI) don't have their own dedicated structures in MapGenSettings. Instead, their values are stored as property expression overrides with long names:
         * - `control-setting:moisture:frequency:multiplier` - frequency (inverse of scale) multiplier for moisture noise. Default is 1.
         * - `control-setting:moisture:bias` - global bias for moisture (which normally varies between 0 and 1). Default is 0.
         * - `control-setting:aux:frequency:multiplier` - frequency (inverse of scale) multiplier for aux (called 'terrain type' in the GUI) noise. Default is 1.
         * - `control-setting:aux:bias` - global bias for aux/terrain type (which normally varies between 0 and 1). Default is 0. All other MapGenSettings feed into named noise expressions, and therefore placement can be overridden by including the name of a property in this dictionary. The probability and richness functions for placing specific tiles, entities, and decoratives can be overridden by including an entry named `{tile|entity|decorative}:(prototype name):{probability|richness}`.
         */
        readonly property_expression_names: Record<string, string>;
    }
    export interface AdvancedMapGenSettings {
        readonly pollution: PollutionMapSettings;
        readonly enemy_evolution: EnemyEvolutionMapSettings;
        readonly enemy_expansion: EnemyExpansionMapSettings;
        readonly difficulty_settings: DifficultySettings;
    }
    export interface MapGenPreset {
        /**
         * The string used to alphabetically sort the presets. It is a simple string that has no additional semantic meaning.
         */
        readonly order: string;
        /**
         * Whether this is the preset that is selected by default.
         */
        readonly default?: boolean;
        readonly basic_settings?: MapGenSettings;
        readonly advanced_settings?: AdvancedMapGenSettings;
    }
    export interface SignalID {
        /**
         * `"item"`, `"fluid"`, or `"virtual"`.
         */
        readonly type: "item" | "fluid" | "virtual";
        /**
         * Name of the item, fluid or virtual signal.
         */
        readonly name?: string;
    }
    /**
     * An actual signal transmitted by the network.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#Signal Online documentation}
     */
    export interface Signal {
        /**
         * ID of the signal.
         */
        readonly signal: SignalID;
        /**
         * Value of the signal.
         */
        readonly count: int;
    }
    export interface UpgradeFilter {
        /**
         * `"item"`, or `"entity"`.
         */
        readonly type: "item" | "entity";
        /**
         * Name of the item, or entity.
         */
        readonly name?: string;
    }
    /**
     * A single filter used by an infinity-filters instance.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#InfinityInventoryFilter Online documentation}
     */
    export interface InfinityInventoryFilter {
        /**
         * Name of the item.
         */
        readonly name: string;
        /**
         * The count of the filter.
         */
        readonly count?: uint;
        /**
         * `"at-least"`, `"at-most"`, or `"exactly"`. Defaults to `"at-least"`.
         */
        readonly mode?: "at-least" | "at-most" | "exactly";
        /**
         * The index of this filter in the filters list. Not required when writing a filter.
         */
        readonly index: uint;
    }
    /**
     * A single filter used by an infinity-pipe type entity.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#InfinityPipeFilter Online documentation}
     */
    export interface InfinityPipeFilter {
        /**
         * Name of the fluid.
         */
        readonly name: string;
        /**
         * The fill percentage the pipe (e.g. 0.5 for 50%). Can't be negative.
         */
        readonly percentage?: double;
        /**
         * The temperature of the fluid. Defaults to the default/minimum temperature of the fluid.
         */
        readonly temperature?: double;
        /**
         * `"at-least"`, `"at-most"`, `"exactly"`, `"add"`, or `"remove"`. Defaults to `"at-least"`.
         */
        readonly mode?: "at-least" | "at-most" | "exactly" | "add" | "remove";
    }
    export interface FluidBoxFilter {
        /**
         * Fluid prototype name of the filtered fluid.
         */
        readonly name: string;
        /**
         * The minimum temperature allowed into the fluidbox.
         */
        readonly minimum_temperature: double;
        /**
         * The maximum temperature allowed into the fluidbox.
         */
        readonly maximum_temperature: double;
    }
    export interface FluidBoxFilterSpec {
        /**
         * Fluid prototype name of the filtered fluid.
         */
        readonly name: string;
        /**
         * The minimum temperature allowed into the fluidbox.
         */
        readonly minimum_temperature?: double;
        /**
         * The maximum temperature allowed into the fluidbox.
         */
        readonly maximum_temperature?: double;
        /**
         * Force the filter to be set, regardless of current fluid content.
         */
        readonly force?: boolean;
    }
    /**
     * The settings used by a heat-interface type entity.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#HeatSetting Online documentation}
     */
    export interface HeatSetting {
        /**
         * The target temperature. Defaults to the minimum temperature of the heat buffer.
         */
        readonly temperature?: double;
        /**
         * `"at-least"`, `"at-most"`, `"exactly"`, `"add"`, or `"remove"`. Defaults to `"at-least"`.
         */
        readonly mode?: "at-least" | "at-most" | "exactly" | "add" | "remove";
    }
    export interface HeatConnection {
        readonly position: Vector;
        readonly direction: defines.direction;
    }
    /**
     * A definition of a fluidbox connection point.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#FluidBoxConnection Online documentation}
     */
    export interface FluidBoxConnection {
        /**
         * One of "input", "output", or "input-output".
         */
        readonly type: "input" | "output" | "input-output";
        /**
         * The 4 cardinal direction connection points for this pipe. This vector is a table with `x` and `y` keys instead of an array.
         */
        readonly positions: MapPosition[];
        /**
         * The maximum tile distance this underground connection can connect at if this is an underground pipe.
         */
        readonly max_underground_distance?: uint;
    }
    /**
     * A single pipe connection for a given fluidbox.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#PipeConnection Online documentation}
     */
    export interface PipeConnection {
        /**
         * One of "input", "output", or "input-output".
         */
        readonly flow_direction: "input" | "output" | "input-output";
        /**
         * One of "normal" or "underground".
         */
        readonly connection_type: "normal" | "underground";
        /**
         * The absolute position of this connection within the entity.
         */
        readonly position: MapPosition;
        /**
         * The absolute position of the connection's intended target.
         */
        readonly target_position: MapPosition;
        /**
         * The connected fluidbox, if any.
         */
        readonly target?: LuaFluidBox;
        /**
         * The index of the target fluidbox, if any.
         */
        readonly target_fluidbox_index?: uint;
        /**
         * The index of the target fluidbox pipe connection, if any.
         */
        readonly target_pipe_connection_index?: uint;
    }
    export interface ArithmeticCombinatorParameters {
        /**
         * First signal to use in an operation. If not specified, the second argument will be the value of `first_constant`.
         */
        readonly first_signal?: SignalID;
        /**
         * Second signal to use in an operation. If not specified, the second argument will be the value of `second_constant`.
         */
        readonly second_signal?: SignalID;
        /**
         * Constant to use as the first argument of the operation. Has no effect when `first_signal` is set. Defaults to `0`.
         */
        readonly first_constant?: int;
        /**
         * Constant to use as the second argument of the operation. Has no effect when `second_signal` is set. Defaults to `0`.
         */
        readonly second_constant?: int;
        /**
         * Must be one of `"*"`, `"/"`, `"+"`, `"-"`, `"%"`, `"^"`, `"<<"`, `">>"`, `"AND"`, `"OR"`, `"XOR"`. When not specified, defaults to `"*"`.
         */
        readonly operation?: "*" | "/" | "+" | "-" | "%" | "^" | "<<" | ">>" | "AND" | "OR" | "XOR";
        /**
         * Specifies the signal to output.
         */
        readonly output_signal?: SignalID;
    }
    export interface ConstantCombinatorParameters {
        /**
         * Signal to emit.
         */
        readonly signal: SignalID;
        /**
         * Value of the signal to emit.
         */
        readonly count: int;
        /**
         * Index of the constant combinator's slot to set this signal to.
         */
        readonly index: uint;
    }
    /**
     * A string that specifies how the inputs should be compared
     *
     * **Options:**
     * - `"="`: "equal to"
     * - `">"`: "greater than"
     * - `"<"`: "lesser than"
     * - `"≥"`: "greater than or equal to"
     * - `">="`: "greater than or equal to"
     * - `"≤"`: "lesser than or equal to"
     * - `"<="`: "lesser than or equal to"
     * - `"≠"`: "not equal to"
     * - `"!="`: "not equal to"
     * @remarks While the API accepts both versions for `"less/greater than or equal to"` and `"not equal"`, it'll always return `"≥"`, `"≤"` or `"≠"` respectively when reading them back.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#ComparatorString Online documentation}
     */
    export type ComparatorString = "=" | ">" | "<" | "≥" | ">=" | "≤" | "<=" | "≠" | "!=";
    /** @see ComparatorString */
    export type ComparatorStringRead = "=" | ">" | "<" | "≥" | "≤" | "≠";
    /**
     * @see DeciderCombinatorParametersWrite
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#DeciderCombinatorParameters Online documentation}
     */
    export interface DeciderCombinatorParameters {
        /**
         * Defaults to blank.
         */
        readonly first_signal?: SignalID;
        /**
         * Second signal to use in an operation, if any. If this is not specified, the second argument to a decider combinator's operation is assumed to be the value of `constant`.
         */
        readonly second_signal?: SignalID;
        /**
         * Constant to use as the second argument of operation. Defaults to `0`.
         */
        readonly constant?: uint;
        /**
         * Specifies how the inputs should be compared. If not specified, defaults to `"<"`.
         */
        readonly comparator?: ComparatorStringRead;
        /**
         * Defaults to blank.
         */
        readonly output_signal?: SignalID;
        /**
         * Defaults to `true`. When `false`, will output a value of `1` for the given `output_signal`.
         */
        readonly copy_count_from_input?: boolean;
    }
    /**
     * Write form of {@link DeciderCombinatorParameters}, where table-or-array concepts are allowed to take an array form.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#DeciderCombinatorParameters Online documentation}
     */
    export interface DeciderCombinatorParametersWrite {
        /**
         * Defaults to blank.
         */
        readonly first_signal?: SignalID;
        /**
         * Second signal to use in an operation, if any. If this is not specified, the second argument to a decider combinator's operation is assumed to be the value of `constant`.
         */
        readonly second_signal?: SignalID;
        /**
         * Constant to use as the second argument of operation. Defaults to `0`.
         */
        readonly constant?: uint;
        /**
         * Specifies how the inputs should be compared. If not specified, defaults to `"<"`.
         */
        readonly comparator?: ComparatorString;
        /**
         * Defaults to blank.
         */
        readonly output_signal?: SignalID;
        /**
         * Defaults to `true`. When `false`, will output a value of `1` for the given `output_signal`.
         */
        readonly copy_count_from_input?: boolean;
    }
    export interface InserterCircuitConditions {
        readonly circuit?: CircuitConditionWrite;
        readonly logistics?: CircuitConditionWrite;
    }
    /**
     * @see CircuitConditionWrite
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#CircuitCondition Online documentation}
     */
    export interface CircuitCondition {
        /**
         * Specifies how the inputs should be compared. If not specified, defaults to `"<"`.
         */
        readonly comparator?: ComparatorStringRead;
        /**
         * Defaults to blank
         */
        readonly first_signal?: SignalID;
        /**
         * What to compare `first_signal` to. If not specified, `first_signal` will be compared to `constant`.
         */
        readonly second_signal?: SignalID;
        /**
         * Constant to compare `first_signal` to. Has no effect when `second_signal` is set. When neither `second_signal` nor `constant` are specified, the effect is as though `constant` were specified with the value `0`.
         */
        readonly constant?: int;
    }
    /**
     * Write form of {@link CircuitCondition}, where table-or-array concepts are allowed to take an array form.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#CircuitCondition Online documentation}
     */
    export interface CircuitConditionWrite {
        /**
         * Specifies how the inputs should be compared. If not specified, defaults to `"<"`.
         */
        readonly comparator?: ComparatorString;
        /**
         * Defaults to blank
         */
        readonly first_signal?: SignalID;
        /**
         * What to compare `first_signal` to. If not specified, `first_signal` will be compared to `constant`.
         */
        readonly second_signal?: SignalID;
        /**
         * Constant to compare `first_signal` to. Has no effect when `second_signal` is set. When neither `second_signal` nor `constant` are specified, the effect is as though `constant` were specified with the value `0`.
         */
        readonly constant?: int;
    }
    /**
     * @see CircuitConditionDefinitionWrite
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#CircuitConditionDefinition Online documentation}
     */
    export interface CircuitConditionDefinition {
        readonly condition: CircuitCondition;
        /**
         * Whether the condition is currently fulfilled
         */
        readonly fulfilled?: boolean;
    }
    /**
     * Write form of {@link CircuitConditionDefinition}, where table-or-array concepts are allowed to take an array form.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#CircuitConditionDefinition Online documentation}
     */
    export interface CircuitConditionDefinitionWrite {
        readonly condition: CircuitConditionWrite;
        /**
         * Whether the condition is currently fulfilled
         */
        readonly fulfilled?: boolean;
    }
    export interface CircuitConnectionDefinition {
        /**
         * Wire color, either {@link defines.wire_type.red} or {@link defines.wire_type.green}.
         */
        readonly wire: defines.wire_type;
        readonly target_entity: LuaEntity;
        readonly source_circuit_id: defines.circuit_connector_id;
        readonly target_circuit_id: defines.circuit_connector_id;
    }
    export interface CopperConnectionDefinition {
        readonly source_wire_connector: defines.wire_connection_id;
        readonly target_entity: LuaEntity;
        readonly target_wire_connector: defines.wire_connection_id;
    }
    export interface WireConnectionDefinition {
        /**
         * The type of wire used.
         */
        readonly wire: defines.wire_type;
        /**
         * The entity to (dis)connect the source entity with.
         */
        readonly target_entity: LuaEntity;
        /**
         * Mandatory if the source entity has more than one circuit connection using circuit wire.
         */
        readonly source_circuit_id?: defines.circuit_connector_id;
        /**
         * Mandatory if the target entity has more than one circuit connection using circuit wire.
         */
        readonly target_circuit_id?: defines.circuit_connector_id;
        /**
         * Mandatory if the source entity has more than one wire connection using copper wire.
         */
        readonly source_wire_id?: defines.wire_connection_id;
        /**
         * Mandatory if the target entity has more than one wire connection using copper wire.
         */
        readonly target_wire_id?: defines.wire_connection_id;
    }
    export interface DragTarget {
        readonly target_entity: LuaEntity;
        /**
         * If the wire being dragged is a circuit wire this is the connector id.
         */
        readonly target_circuit_id?: defines.circuit_connector_id;
        /**
         * If the wire being dragged is copper wire this is the wire id.
         */
        readonly target_wire_id?: defines.wire_connection_id;
    }
    export interface InventoryFilter {
        /**
         * Position of the corresponding filter slot.
         */
        readonly index: uint;
        /**
         * Item prototype name of the item to filter.
         */
        readonly name: string;
    }
    export interface PlaceAsTileResult {
        /**
         * The tile prototype.
         */
        readonly result: LuaTilePrototype;
        readonly condition_size: uint;
        readonly condition: CollisionMask;
    }
    export interface BaseCommand {
        /**
         * Type of command. The remaining fields depend on the value of this field.
         */
        readonly type: defines.command;
    }
    /**
     * {@link defines.command.attack} variant of {@link Command}.
     */
    export interface AttackCommand extends BaseCommand {
        readonly type: defines.command.attack;
        readonly target: LuaEntity;
        /**
         * Defaults to `defines.distraction.by_enemy`.
         */
        readonly distraction?: defines.distraction;
    }
    /**
     * {@link defines.command.go_to_location} variant of {@link Command}.
     */
    export interface GoToLocationCommand extends BaseCommand {
        readonly type: defines.command.go_to_location;
        /**
         * The position to path to. Either this or `destination_entity` need to be specified. If both are, `destination_entity` is used.
         */
        readonly destination?: MapPosition;
        /**
         * The entity to path to. Either this or `destination` need to be specified. If both are, `destination_entity` is used.
         */
        readonly destination_entity?: LuaEntity;
        /**
         * Defaults to `defines.distraction.by_enemy`.
         */
        readonly distraction?: defines.distraction;
        /**
         * Flags that affect pathfinder behavior.
         */
        readonly pathfind_flags?: PathfinderFlags;
        /**
         * How close the pathfinder needs to get to its destination (in tiles). Defaults to `3`.
         */
        readonly radius?: double;
    }
    export interface GoToLocationCommandWrite extends BaseCommand {
        readonly type: defines.command.go_to_location;
        /**
         * The position to path to. Either this or `destination_entity` need to be specified. If both are, `destination_entity` is used.
         */
        readonly destination?: MapPosition | MapPositionArray;
        /**
         * The entity to path to. Either this or `destination` need to be specified. If both are, `destination_entity` is used.
         */
        readonly destination_entity?: LuaEntity;
        /**
         * Defaults to `defines.distraction.by_enemy`.
         */
        readonly distraction?: defines.distraction;
        /**
         * Flags that affect pathfinder behavior.
         */
        readonly pathfind_flags?: PathfinderFlags;
        /**
         * How close the pathfinder needs to get to its destination (in tiles). Defaults to `3`.
         */
        readonly radius?: double;
    }
    /**
     * {@link defines.command.compound} variant of {@link Command}.
     */
    export interface CompoundCommand extends BaseCommand {
        readonly type: defines.command.compound;
        /**
         * How the commands should be chained together.
         */
        readonly structure_type: defines.compound_command;
        /**
         * The sub-commands.
         */
        readonly commands: Command[];
    }
    export interface CompoundCommandWrite extends BaseCommand {
        readonly type: defines.command.compound;
        /**
         * How the commands should be chained together.
         */
        readonly structure_type: defines.compound_command;
        /**
         * The sub-commands.
         */
        readonly commands: readonly CommandWrite[];
    }
    /**
     * {@link defines.command.group} variant of {@link Command}.
     */
    export interface GroupCommand extends BaseCommand {
        readonly type: defines.command.group;
        /**
         * The group whose command to follow.
         */
        readonly group: LuaUnitGroup;
        /**
         * Defaults to `defines.distraction.by_enemy`.
         */
        readonly distraction?: defines.distraction;
        /**
         * Whether the unit will use the group distraction or the commands distraction. Defaults to true.
         */
        readonly use_group_distraction?: boolean;
    }
    /**
     * {@link defines.command.attack_area} variant of {@link Command}.
     */
    export interface AttackAreaCommand extends BaseCommand {
        readonly type: defines.command.attack_area;
        /**
         * Center of the attack area.
         */
        readonly destination: MapPosition;
        /**
         * Radius of the attack area.
         */
        readonly radius: double;
        /**
         * Defaults to `defines.distraction.by_enemy`.
         */
        readonly distraction?: defines.distraction;
    }
    export interface AttackAreaCommandWrite extends BaseCommand {
        readonly type: defines.command.attack_area;
        /**
         * Center of the attack area.
         */
        readonly destination: MapPosition | MapPositionArray;
        /**
         * Radius of the attack area.
         */
        readonly radius: double;
        /**
         * Defaults to `defines.distraction.by_enemy`.
         */
        readonly distraction?: defines.distraction;
    }
    /**
     * {@link defines.command.wander} variant of {@link Command}.
     */
    export interface WanderCommand extends BaseCommand {
        readonly type: defines.command.wander;
        /**
         * Defaults to `defines.distraction.by_enemy`.
         */
        readonly distraction?: defines.distraction;
        /**
         * Defaults to 10. Does not apply when `wander_in_group` is `true`.
         */
        readonly radius?: double;
        /**
         * When commanding a group, defines how the group will wander. When `true`, the units in the group will wander around inside the group's radius, just like gathering biters. When `false`, the units will wander as a group, ie they will all walk together in the same random direction. Default is true for groups. Passing true for a single unit is an error.
         */
        readonly wander_in_group?: boolean;
        /**
         * Ticks to wander before successfully completing the command. Default is max uint, which means wander forever.
         */
        readonly ticks_to_wait?: uint;
    }
    /**
     * {@link defines.command.stop} variant of {@link Command}.
     */
    export interface StopCommand extends BaseCommand {
        readonly type: defines.command.stop;
        /**
         * Defaults to `defines.distraction.by_enemy`.
         */
        readonly distraction?: defines.distraction;
        /**
         * Ticks to wander before successfully completing the command. Default is max uint, which means stop forever.
         */
        readonly ticks_to_wait?: uint;
    }
    /**
     * {@link defines.command.flee} variant of {@link Command}.
     */
    export interface FleeCommand extends BaseCommand {
        readonly type: defines.command.flee;
        /**
         * The entity to flee from
         */
        readonly from: LuaEntity;
        /**
         * Defaults to `defines.distraction.by_enemy`.
         */
        readonly distraction?: defines.distraction;
    }
    /**
     * {@link defines.command.build_base} variant of {@link Command}.
     */
    export interface BuildBaseCommand extends BaseCommand {
        readonly type: defines.command.build_base;
        /**
         * Where to build the base.
         */
        readonly destination: MapPosition;
        /**
         * Defaults to `defines.distraction.by_enemy`.
         */
        readonly distraction?: defines.distraction;
        /**
         * Whether the units should ignore expansion candidate chunks. When `false`, they will obey and not build a base in a non-candidate chunk. Defaults to `false`.
         */
        readonly ignore_planner?: boolean;
    }
    export interface BuildBaseCommandWrite extends BaseCommand {
        readonly type: defines.command.build_base;
        /**
         * Where to build the base.
         */
        readonly destination: MapPosition | MapPositionArray;
        /**
         * Defaults to `defines.distraction.by_enemy`.
         */
        readonly distraction?: defines.distraction;
        /**
         * Whether the units should ignore expansion candidate chunks. When `false`, they will obey and not build a base in a non-candidate chunk. Defaults to `false`.
         */
        readonly ignore_planner?: boolean;
    }
    /**
     * Commands can be given to enemies and unit groups.
     *
     * Other attributes may be specified depending on `type`:
     * - {@link defines.command.attack}: {@link AttackCommand}
     * - {@link defines.command.go_to_location}: {@link GoToLocationCommand}
     * - {@link defines.command.compound}: {@link CompoundCommand}
     * - {@link defines.command.group}: {@link GroupCommand}
     * - {@link defines.command.attack_area}: {@link AttackAreaCommand}
     * - {@link defines.command.wander}: {@link WanderCommand}
     * - {@link defines.command.stop}: {@link StopCommand}
     * - {@link defines.command.flee}: {@link FleeCommand}
     * - {@link defines.command.build_base}: {@link BuildBaseCommand}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#Command Online documentation}
     */
    export type Command = AttackCommand | GoToLocationCommand | CompoundCommand | GroupCommand | AttackAreaCommand | WanderCommand | StopCommand | FleeCommand | BuildBaseCommand;
    /**
     * Write form of {@link Command}, where table-or-array concepts are allowed to take an array form.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#Command Online documentation}
     */
    export type CommandWrite = AttackCommand | GoToLocationCommandWrite | CompoundCommandWrite | GroupCommand | AttackAreaCommandWrite | WanderCommand | StopCommand | FleeCommand | BuildBaseCommandWrite;
    export interface PathfinderFlags {
        /**
         * Allows pathing through friendly entities. Defaults to `false`.
         */
        readonly allow_destroy_friendly_entities?: boolean;
        /**
         * Allows the pathfinder to path through entities of the same force. Defaults to `false`.
         */
        readonly allow_paths_through_own_entities?: boolean;
        /**
         * Enables path caching. This can be more efficient, but might fail to respond to changes in the environment. Defaults to `true`.
         */
        readonly cache?: boolean;
        /**
         * Makes the pathfinder try to path in straight lines. Defaults to `false`.
         */
        readonly prefer_straight_paths?: boolean;
        /**
         * Sets lower priority on the path request, meaning it might take longer to find a path at the expense of speeding up others. Defaults to `false`.
         */
        readonly low_priority?: boolean;
        /**
         * Makes the pathfinder not break in the middle of processing this pathfind, no matter how much work is needed. Defaults to `false`.
         */
        readonly no_break?: boolean;
    }
    export interface UnitSpawnDefinition {
        /**
         * Prototype name of the unit that would be spawned.
         */
        readonly unit: string;
        /**
         * The points at which to spawn the unit.
         */
        readonly spawn_points: SpawnPointDefinition[];
    }
    export interface SpawnPointDefinition {
        /**
         * Evolution factor for which this weight applies.
         */
        readonly evolution_factor: double;
        /**
         * Probability of spawning this unit at this evolution factor.
         */
        readonly weight: double;
    }
    export interface ItemStackDefinition {
        /**
         * Prototype name of the item the stack holds.
         */
        readonly name: string;
        /**
         * Number of items the stack holds. If not specified, defaults to `1`.
         */
        readonly count?: uint;
        /**
         * Health of the items in the stack. Defaults to `1.0`.
         */
        readonly health?: float;
        /**
         * Durability of the tool items in the stack.
         */
        readonly durability?: double;
        /**
         * Amount of ammo in the ammo items in the stack.
         */
        readonly ammo?: double;
        /**
         * Tags of the items with tags in the stack.
         */
        readonly tags?: string[];
    }
    /**
     * An item stack may be specified in one of two ways.
     *
     * **Options:**
     * - `string`: The name of the item, which represents a full stack of that item.
     * - {@link ItemStackDefinition}: The detailed definition of an item stack.
     * @example Both of these lines specify an item stack of one iron plate:
     * {name="iron-plate"}
     * @example This is a stack of 47 copper plates:
     * {name="copper-plate", count=47}
     * @example These are both full stacks of iron plates (for iron-plate, a full stack is 100 plates):
     * "iron-plate"
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#SimpleItemStack Online documentation}
     */
    export type SimpleItemStack = string | ItemStackDefinition;
    /**
     * A fluid may be specified in one of three ways.
     *
     * **Options:**
     * - `string`: The fluid name.
     * - {@link LuaFluidPrototype}: The fluid prototype.
     * - {@link Fluid}: The fluid.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#FluidIdentification Online documentation}
     */
    export type FluidIdentification = string | LuaFluidPrototype | Fluid;
    /**
     * A force may be specified in one of three ways.
     *
     * **Options:**
     * - ForceIndex: The force index.
     * - `string`: The force name.
     * - {@link LuaForce}: A reference to {@link LuaForce} may be passed directly.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#ForceIdentification Online documentation}
     */
    export type ForceIdentification = ForceIndex | string | LuaForce;
    /**
     * A technology may be specified in one of three ways.
     *
     * **Options:**
     * - `string`: The technology name.
     * - {@link LuaTechnology}: A reference to {@link LuaTechnology} may be passed directly.
     * - {@link LuaTechnologyPrototype}: A reference to {@link LuaTechnologyPrototype} may be passed directly.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#TechnologyIdentification Online documentation}
     */
    export type TechnologyIdentification = string | LuaTechnology | LuaTechnologyPrototype;
    /**
     * A surface may be specified in one of three ways.
     *
     * **Options:**
     * - SurfaceIndex: It will be the index of the surface. `nauvis` has index `1`, the first surface-created surface will have index `2` and so on.
     * - `string`: It will be the surface name. E.g. `"nauvis"`.
     * - {@link LuaSurface}: A reference to {@link LuaSurface} may be passed directly.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#SurfaceIdentification Online documentation}
     */
    export type SurfaceIdentification = SurfaceIndex | string | LuaSurface;
    /**
     * A player may be specified in one of three ways.
     *
     * **Options:**
     * - PlayerIndex: The player index.
     * - `string`: The player name.
     * - {@link LuaPlayer}: A reference to {@link LuaPlayer} may be passed directly.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#PlayerIdentification Online documentation}
     */
    export type PlayerIdentification = PlayerIndex | string | LuaPlayer;
    /**
     * An item may be specified in one of two ways.
     *
     * **Options:**
     * - {@link SimpleItemStack}
     * - {@link LuaItemStack}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#ItemStackIdentification Online documentation}
     */
    export type ItemStackIdentification = SimpleItemStack | LuaItemStack;
    /**
     * An entity prototype may be specified in one of three ways.
     *
     * **Options:**
     * - {@link LuaEntity}: The entity.
     * - {@link LuaEntityPrototype}: The entity prototype.
     * - `string`: The prototype name.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#EntityPrototypeIdentification Online documentation}
     */
    export type EntityPrototypeIdentification = LuaEntity | LuaEntityPrototype | string;
    /**
     * An item prototype may be specified in one of three ways.
     *
     * **Options:**
     * - {@link LuaItemStack}: The item.
     * - {@link LuaItemPrototype}: The item prototype.
     * - `string`: The prototype name.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#ItemPrototypeIdentification Online documentation}
     */
    export type ItemPrototypeIdentification = LuaItemStack | LuaItemPrototype | string;
    /**
     * @see WaitConditionWrite
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#WaitCondition Online documentation}
     */
    export interface WaitCondition {
        /**
         * One of `"time"`, `"inactivity"`, `"full"`, `"empty"`, `"item_count"`, `"circuit"`, `"robots_inactive"`, `"fluid_count"`, `"passenger_present"`, `"passenger_not_present"`.
         */
        readonly type: "time" | "inactivity" | "full" | "empty" | "item_count" | "circuit" | "robots_inactive" | "fluid_count" | "passenger_present" | "passenger_not_present";
        /**
         * Either `"and"`, or `"or"`. Tells how this condition is to be compared with the preceding conditions in the corresponding `wait_conditions` array.
         */
        readonly compare_type: "and" | "or";
        /**
         * Number of ticks to wait when `type` is `"time"`, or number of ticks of inactivity when `type` is `"inactivity"`.
         */
        readonly ticks?: uint;
        /**
         * Only present when `type` is `"item_count"`, `"circuit"` or `"fluid_count"`, and a circuit condition is configured.
         */
        readonly condition?: CircuitCondition;
    }
    /**
     * Write form of {@link WaitCondition}, where table-or-array concepts are allowed to take an array form.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#WaitCondition Online documentation}
     */
    export interface WaitConditionWrite {
        /**
         * One of `"time"`, `"inactivity"`, `"full"`, `"empty"`, `"item_count"`, `"circuit"`, `"robots_inactive"`, `"fluid_count"`, `"passenger_present"`, `"passenger_not_present"`.
         */
        readonly type: "time" | "inactivity" | "full" | "empty" | "item_count" | "circuit" | "robots_inactive" | "fluid_count" | "passenger_present" | "passenger_not_present";
        /**
         * Either `"and"`, or `"or"`. Tells how this condition is to be compared with the preceding conditions in the corresponding `wait_conditions` array.
         */
        readonly compare_type: "and" | "or";
        /**
         * Number of ticks to wait when `type` is `"time"`, or number of ticks of inactivity when `type` is `"inactivity"`.
         */
        readonly ticks?: uint;
        /**
         * Only present when `type` is `"item_count"`, `"circuit"` or `"fluid_count"`, and a circuit condition is configured.
         */
        readonly condition?: CircuitConditionWrite;
    }
    /**
     * @see TrainScheduleRecordWrite
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#TrainScheduleRecord Online documentation}
     */
    export interface TrainScheduleRecord {
        /**
         * Name of the station.
         */
        readonly station?: string;
        /**
         * Rail to path to. Ignored if `station` is present.
         */
        readonly rail?: LuaEntity;
        /**
         * When a train is allowed to reach rail target from any direction it will be `nil`. If rail has to be reached from specific direction, this value allows to choose the direction. This value corresponds to {@link LuaEntity#connected_rail_direction LuaEntity::connected_rail_direction} of a TrainStop.
         */
        readonly rail_direction?: defines.rail_direction;
        readonly wait_conditions?: WaitCondition[];
        /**
         * Only present when the station is temporary, the value is then always `true`.
         */
        readonly temporary?: boolean;
    }
    /**
     * Write form of {@link TrainScheduleRecord}, where table-or-array concepts are allowed to take an array form.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#TrainScheduleRecord Online documentation}
     */
    export interface TrainScheduleRecordWrite {
        /**
         * Name of the station.
         */
        readonly station?: string;
        /**
         * Rail to path to. Ignored if `station` is present.
         */
        readonly rail?: LuaEntity;
        /**
         * When a train is allowed to reach rail target from any direction it will be `nil`. If rail has to be reached from specific direction, this value allows to choose the direction. This value corresponds to {@link LuaEntity#connected_rail_direction LuaEntity::connected_rail_direction} of a TrainStop.
         */
        readonly rail_direction?: defines.rail_direction;
        readonly wait_conditions?: readonly WaitConditionWrite[];
        /**
         * Only present when the station is temporary, the value is then always `true`.
         */
        readonly temporary?: boolean;
    }
    /**
     * @see TrainScheduleWrite
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#TrainSchedule Online documentation}
     */
    export interface TrainSchedule {
        /**
         * Index of the currently active record
         */
        readonly current: uint;
        readonly records: TrainScheduleRecord[];
    }
    /**
     * Write form of {@link TrainSchedule}, where table-or-array concepts are allowed to take an array form.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#TrainSchedule Online documentation}
     */
    export interface TrainScheduleWrite {
        /**
         * Index of the currently active record
         */
        readonly current: uint;
        readonly records: readonly TrainScheduleRecordWrite[];
    }
    export interface BaseGuiArrowSpecification {
        /**
         * This determines which of the following fields will be required. Must be one of `"nowhere"` (will remove the arrow entirely), `"goal"` (will point to the current goal), `"entity_info"`, `"active_window"`, `"entity"`, `"position"`, `"crafting_queue"` or `"item_stack"` (will point to a given item stack in an inventory). Depending on this value, other fields may have to be specified.
         */
        readonly type: "nowhere" | "goal" | "entity_info" | "active_window" | "entity" | "position" | "crafting_queue" | "item_stack";
    }
    /**
     * `"entity"` variant of {@link GuiArrowSpecification}.
     */
    export interface EntityGuiArrowSpecification extends BaseGuiArrowSpecification {
        readonly type: "entity";
        readonly entity: LuaEntity;
    }
    /**
     * `"position"` variant of {@link GuiArrowSpecification}.
     */
    export interface PositionGuiArrowSpecification extends BaseGuiArrowSpecification {
        readonly type: "position";
        readonly position: MapPosition | MapPositionArray;
    }
    /**
     * `"crafting_queue"` variant of {@link GuiArrowSpecification}.
     */
    export interface CraftingQueueGuiArrowSpecification extends BaseGuiArrowSpecification {
        readonly type: "crafting_queue";
        /**
         * Index in the crafting queue to point to.
         */
        readonly crafting_queueindex: uint;
    }
    /**
     * `"item_stack"` variant of {@link GuiArrowSpecification}.
     */
    export interface ItemStackGuiArrowSpecification extends BaseGuiArrowSpecification {
        readonly type: "item_stack";
        /**
         * Which inventory the stack is in.
         */
        readonly inventory_index: defines.inventory;
        /**
         * Which stack to point to.
         */
        readonly item_stack_index: uint;
        /**
         * Must be either `"player"`, `"target"`, `"player-quickbar"` or `"player-equipment-bar"`.
         */
        readonly source: "player" | "target" | "player-quickbar" | "player-equipment-bar";
    }
    /**
     * Variants of {@link GuiArrowSpecification} with no additional attributes.
     */
    export interface OtherGuiArrowSpecification extends BaseGuiArrowSpecification {
        readonly type: "nowhere" | "goal" | "entity_info" | "active_window";
    }
    /**
     * Used for specifying where a GUI arrow should point to.
     *
     * Other attributes may be specified depending on `type`:
     * - `"entity"`: {@link EntityGuiArrowSpecification}
     * - `"position"`: {@link PositionGuiArrowSpecification}
     * - `"crafting_queue"`: {@link CraftingQueueGuiArrowSpecification}
     * - `"item_stack"`: {@link ItemStackGuiArrowSpecification}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#GuiArrowSpecification Online documentation}
     */
    export type GuiArrowSpecification = EntityGuiArrowSpecification | PositionGuiArrowSpecification | CraftingQueueGuiArrowSpecification | ItemStackGuiArrowSpecification | OtherGuiArrowSpecification;
    export interface AmmoType {
        readonly action?: TriggerItem[];
        /**
         * One of `"entity"` (fires at an entity), `"position"` (fires directly at a position), or `"direction"` (fires in a direction).
         */
        readonly target_type: "entity" | "position" | "direction";
        /**
         * When `true`, the gun will be able to shoot even when the target is out of range. Only applies when `target_type` is `position`. The gun will fire at the maximum range in the direction of the target position. Defaults to `false`.
         */
        readonly clamp_position?: boolean;
        /**
         * Ammo category of this ammo.
         */
        readonly category: string;
        /**
         * Energy consumption of a single shot, if applicable. Defaults to `0`.
         */
        readonly energy_consumption?: double;
        readonly range_modifier?: double;
        readonly cooldown_modifier?: double;
        readonly consumption_modifier?: double;
    }
    export interface BeamTarget {
        /**
         * The target entity.
         */
        readonly entity?: LuaEntity;
        /**
         * The target position.
         */
        readonly position?: MapPosition;
    }
    export interface RidingState {
        readonly acceleration: defines.riding.acceleration;
        readonly direction: defines.riding.direction;
    }
    export type SpriteType = "item" | "entity" | "technology" | "recipe" | "item-group" | "fluid" | "tile" | "virtual-signal" | "achievement" | "equipment" | "file" | "utility";
    /**
     * It can be either the name of a {@link prototype:SpritePrototype SpritePrototype} defined in the data stage, or a path in form "type/name".
     *
     * The validity of a SpritePath can be verified at runtime using {@link LuaGameScript#is_valid_sprite_path LuaGameScript::is_valid_sprite_path}.
     *
     * The supported types are:
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
     * - `"file"` - path to an image file located inside the current scenario. This file is not preloaded so it will be slower; for frequently used sprites, it is better to define sprite prototype and use it instead.
     * - `"utility"` - sprite defined in the utility-sprites object, these are the pictures used by the game internally for the UI.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#SpritePath Online documentation}
     */
    export type SpritePath = (string & {
        _?: never;
    }) | `${SpriteType}/${string}`;
    export type SoundCategory = "utility" | "ambient" | "tile-walking" | "tile-mined" | "tile-build-small" | "tile-build-medium" | "tile-build-large" | "entity-build" | "entity-mined" | "entity-mining" | "entity-vehicle_impact" | "entity-rotated" | "entity-open" | "entity-close";
    /**
     * It can be either the name of a {@link prototype:SoundPrototype SoundPrototype} defined in the data stage, or a path in the form `"type/name"`. The latter option can be sorted into three categories.
     *
     * The validity of a SoundPath can be verified at runtime using {@link LuaGameScript#is_valid_sound_path LuaGameScript::is_valid_sound_path}.
     *
     * The utility and ambient types each contain general use sound prototypes defined by the game itself.
     * - `"utility"` - Uses {@link prototype:UtilitySounds UtilitySounds}. Example: `"utility/wire_connect_pole"`
     * - `"ambient"` - Uses {@link prototype:AmbientSound AmbientSound}. Example: `"ambient/resource-deficiency"`
     *
     * The following types can be combined with any tile name as long as its prototype defines the
     *
     *     corresponding sound.
     * - `"tile-walking"` - Uses {@link prototype:TilePrototype::walking_sound TilePrototype::walking_sound}. Example: `"tile-walking/concrete"`
     * - `"tile-mined"` - Uses {@link prototype:TilePrototype::mined_sound TilePrototype::mined_sound}
     * - `"tile-build-small"` - Uses {@link prototype:TilePrototype::build_sound TilePrototype::build_sound}. Example: `"tile-build-small/concrete"`
     * - `"tile-build-medium"` - Uses {@link prototype:TilePrototype::build_sound TilePrototype::build_sound}
     * - `"tile-build-large"` - Uses {@link prototype:TilePrototype::build_sound TilePrototype::build_sound}
     *
     * The following types can be combined with any entity name as long as its prototype defines the
     *
     *     corresponding sound.
     * - `"entity-build"` - Uses {@link prototype:EntityPrototype::build_sound Entity::build_sound}. Example: `"entity-build/wooden-chest"`
     * - `"entity-mined"` - Uses {@link prototype:EntityPrototype::mined_sound Entity::mined_sound}
     * - `"entity-mining"` - Uses {@link prototype:EntityPrototype::mining_sound Entity::mining_sound}
     * - `"entity-vehicle_impact"` - Uses {@link prototype:EntityPrototype::vehicle_impact_sound EntityPrototype::vehicle_impact_sound}
     * - `"entity-rotated"` - Uses {@link prototype:EntityPrototype::rotated_sound EntityPrototype::rotated_sound}
     * - `"entity-open"` - Uses {@link prototype:EntityPrototype::open_sound Entity::open_sound}
     * - `"entity-close"` - Uses {@link prototype:EntityPrototype::close_sound Entity::close_sound}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#SoundPath Online documentation}
     */
    export type SoundPath = (string & {
        _?: never;
    }) | `${SoundCategory}/${string}`;
    export interface ModuleEffectValue {
        /**
         * The percentual increase of the attribute. A value of `0.6` means a 60% increase.
         */
        readonly bonus: float;
    }
    /**
     * @example These are the effects of the vanilla Productivity Module 3 (up to floating point imprecisions):
     * {consumption={bonus=0.6},
     *  speed={bonus=-0.15},
     *  productivity={bonus=0.06},
     *  pollution={bonus=0.075}}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#ModuleEffects Online documentation}
     */
    export interface ModuleEffects {
        readonly consumption?: ModuleEffectValue;
        readonly speed?: ModuleEffectValue;
        readonly productivity?: ModuleEffectValue;
        readonly pollution?: ModuleEffectValue;
    }
    /**
     * A set of flags. Active flags are in the dictionary as `true`, while inactive flags aren't present at all.
     *
     * By default, none of these flags are set.
     *
     * **Options:**
     * - `"not-rotatable"`: Prevents the entity from being rotated before or after placement.
     * - `"placeable-neutral"`: Determines the default force when placing entities in the map editor and using the "AUTO" option for the force.
     * - `"placeable-player"`: Determines the default force when placing entities in the map editor and using the "AUTO" option for the force.
     * - `"placeable-enemy"`: Determines the default force when placing entities in the map editor and using the "AUTO" option for the force.
     * - `"placeable-off-grid"`: Determines whether the entity needs to be aligned with the invisible grid within the world. Most entities are confined in this way, with a few exceptions such as trees and land mines.
     * - `"player-creation"`: Makes it possible to blueprint, deconstruct, and repair the entity (which can be turned off again using the specific flags). Makes it possible for the biter AI to target the entity as a distraction. Enables dust to automatically be created when building the entity. If the entity does not have a `map_color` set, this flag makes the entity appear on the map with the default color specified by the UtilityConstants.
     * - `"building-direction-8-way"`: Uses 45 degree angle increments when selecting direction.
     * - `"filter-directions"`: Used to automatically detect the proper direction of the entity if possible. Used by the pump, train stop, and train signal by default.
     * - `"fast-replaceable-no-build-while-moving"`: Fast replace will not apply when building while moving.
     * - `"breaths-air"`: Used to specify that the entity breathes air, and is thus affected by poison.
     * - `"not-repairable"`: Used to specify that the entity can not be 'healed' by repair packs.
     * - `"not-on-map"`: Prevents the entity from being drawn on the map.
     * - `"not-deconstructable"`: Prevents the entity from being deconstructed.
     * - `"not-blueprintable"`: Prevents the entity from being part of a blueprint.
     * - `"hidden"`: Hides the entity from the bonus GUI and from the "made in"-property of recipe tooltips.
     * - `"hide-alt-info"`: Hides the alt-info of this entity when in alt-mode.
     * - `"fast-replaceable-no-cross-type-while-moving"`: Does not fast replace this entity over other entity types when building while moving.
     * - `"no-gap-fill-while-building"`
     * - `"not-flammable"`: Does not apply fire stickers to the entity.
     * - `"no-automated-item-removal"`: Prevents inserters and loaders from taking items from this entity.
     * - `"no-automated-item-insertion"`: Prevents inserters and loaders from inserting items into this entity.
     * - `"no-copy-paste"`: Prevents the entity from being copy-pasted.
     * - `"not-selectable-in-game"`: Disallows selection of the entity even when a selection box is specified for other reasons. For example, selection boxes are used to determine the size of outlines to be shown when highlighting entities inside electric pole ranges.
     * - `"not-upgradable"`: Prevents the entity from being selected by the upgrade planner.
     * - `"not-in-kill-statistics"`: Prevents the entity from being shown in the kill statistics.
     * - `"not-in-made-in"`: Prevents the entity from being shown in the "made in" list in recipe tooltips.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#EntityPrototypeFlags Online documentation}
     */
    export interface EntityPrototypeFlags {
        /**
         * Prevents the entity from being rotated before or after placement.
         */
        readonly "not-rotatable"?: true;
        /**
         * Determines the default force when placing entities in the map editor and using the "AUTO" option for the force.
         */
        readonly "placeable-neutral"?: true;
        /**
         * Determines the default force when placing entities in the map editor and using the "AUTO" option for the force.
         */
        readonly "placeable-player"?: true;
        /**
         * Determines the default force when placing entities in the map editor and using the "AUTO" option for the force.
         */
        readonly "placeable-enemy"?: true;
        /**
         * Determines whether the entity needs to be aligned with the invisible grid within the world. Most entities are confined in this way, with a few exceptions such as trees and land mines.
         */
        readonly "placeable-off-grid"?: true;
        /**
         * Makes it possible to blueprint, deconstruct, and repair the entity (which can be turned off again using the specific flags). Makes it possible for the biter AI to target the entity as a distraction. Enables dust to automatically be created when building the entity. If the entity does not have a `map_color` set, this flag makes the entity appear on the map with the default color specified by the UtilityConstants.
         */
        readonly "player-creation"?: true;
        /**
         * Uses 45 degree angle increments when selecting direction.
         */
        readonly "building-direction-8-way"?: true;
        /**
         * Used to automatically detect the proper direction of the entity if possible. Used by the pump, train stop, and train signal by default.
         */
        readonly "filter-directions"?: true;
        /**
         * Fast replace will not apply when building while moving.
         */
        readonly "fast-replaceable-no-build-while-moving"?: true;
        /**
         * Used to specify that the entity breathes air, and is thus affected by poison.
         */
        readonly "breaths-air"?: true;
        /**
         * Used to specify that the entity can not be 'healed' by repair packs.
         */
        readonly "not-repairable"?: true;
        /**
         * Prevents the entity from being drawn on the map.
         */
        readonly "not-on-map"?: true;
        /**
         * Prevents the entity from being deconstructed.
         */
        readonly "not-deconstructable"?: true;
        /**
         * Prevents the entity from being part of a blueprint.
         */
        readonly "not-blueprintable"?: true;
        /**
         * Hides the entity from the bonus GUI and from the "made in"-property of recipe tooltips.
         */
        readonly hidden?: true;
        /**
         * Hides the alt-info of this entity when in alt-mode.
         */
        readonly "hide-alt-info"?: true;
        /**
         * Does not fast replace this entity over other entity types when building while moving.
         */
        readonly "fast-replaceable-no-cross-type-while-moving"?: true;
        readonly "no-gap-fill-while-building"?: true;
        /**
         * Does not apply fire stickers to the entity.
         */
        readonly "not-flammable"?: true;
        /**
         * Prevents inserters and loaders from taking items from this entity.
         */
        readonly "no-automated-item-removal"?: true;
        /**
         * Prevents inserters and loaders from inserting items into this entity.
         */
        readonly "no-automated-item-insertion"?: true;
        /**
         * Prevents the entity from being copy-pasted.
         */
        readonly "no-copy-paste"?: true;
        /**
         * Disallows selection of the entity even when a selection box is specified for other reasons. For example, selection boxes are used to determine the size of outlines to be shown when highlighting entities inside electric pole ranges.
         */
        readonly "not-selectable-in-game"?: true;
        /**
         * Prevents the entity from being selected by the upgrade planner.
         */
        readonly "not-upgradable"?: true;
        /**
         * Prevents the entity from being shown in the kill statistics.
         */
        readonly "not-in-kill-statistics"?: true;
        /**
         * Prevents the entity from being shown in the "made in" list in recipe tooltips.
         */
        readonly "not-in-made-in"?: true;
    }
    /**
     * A set of flags. Active flags are in the dictionary as `true`, while inactive flags aren't present at all.
     *
     * By default, none of these flags are set.
     *
     * **Options:**
     * - `"draw-logistic-overlay"`: Determines whether the logistics areas of roboports should be drawn when holding this item. Used by the deconstruction planner by default.
     * - `"hidden"`: Hides the item in the logistic requests and filters GUIs (among others).
     * - `"always-show"`: Always shows the item in the logistic requests and filters GUIs (among others) even when the recipe for that item is locked.
     * - `"hide-from-bonus-gui"`: Hides the item from the bonus GUI.
     * - `"hide-from-fuel-tooltip"`: Hides the item from the tooltip that's shown when hovering over a burner inventory.
     * - `"not-stackable"`: Prevents the item from being stacked. It also prevents the item from stacking in assembling machine input slots, which can otherwise exceed the item stack size if required by the recipe. Additionally, the item does not show an item count when in the cursor.
     * - `"can-extend-inventory"`: Makes the item act as an extension to the inventory that it is placed in. Only has an effect for items with inventory.
     * - `"primary-place-result"`: Makes construction bots prefer this item when building the entity specified by its `place_result`.
     * - `"mod-openable"`: Allows the item to be opened by the player, firing the `on_mod_item_opened` event. Only has an effect for selection tool items.
     * - `"only-in-cursor"`: Makes it so the item is deleted when clearing the cursor, instead of being put into the player's inventory. The copy-paste tools use this by default, for example.
     * - `"spawnable"`: Allows the item to be spawned by a quickbar shortcut or custom input.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#ItemPrototypeFlags Online documentation}
     */
    export interface ItemPrototypeFlags {
        /**
         * Determines whether the logistics areas of roboports should be drawn when holding this item. Used by the deconstruction planner by default.
         */
        readonly "draw-logistic-overlay"?: true;
        /**
         * Hides the item in the logistic requests and filters GUIs (among others).
         */
        readonly hidden?: true;
        /**
         * Always shows the item in the logistic requests and filters GUIs (among others) even when the recipe for that item is locked.
         */
        readonly "always-show"?: true;
        /**
         * Hides the item from the bonus GUI.
         */
        readonly "hide-from-bonus-gui"?: true;
        /**
         * Hides the item from the tooltip that's shown when hovering over a burner inventory.
         */
        readonly "hide-from-fuel-tooltip"?: true;
        /**
         * Prevents the item from being stacked. It also prevents the item from stacking in assembling machine input slots, which can otherwise exceed the item stack size if required by the recipe. Additionally, the item does not show an item count when in the cursor.
         */
        readonly "not-stackable"?: true;
        /**
         * Makes the item act as an extension to the inventory that it is placed in. Only has an effect for items with inventory.
         */
        readonly "can-extend-inventory"?: true;
        /**
         * Makes construction bots prefer this item when building the entity specified by its `place_result`.
         */
        readonly "primary-place-result"?: true;
        /**
         * Allows the item to be opened by the player, firing the `on_mod_item_opened` event. Only has an effect for selection tool items.
         */
        readonly "mod-openable"?: true;
        /**
         * Makes it so the item is deleted when clearing the cursor, instead of being put into the player's inventory. The copy-paste tools use this by default, for example.
         */
        readonly "only-in-cursor"?: true;
        /**
         * Allows the item to be spawned by a quickbar shortcut or custom input.
         */
        readonly spawnable?: true;
    }
    /**
     * A `string` specifying a collision mask layer.
     *
     * In addition to the listed layers, there is `"layer-13"` through `"layer-55"`. These layers are currently unused by the game but may change. If a mod is going to use one of the unused layers it's recommended to start at the higher layers because the base game will take from the lower ones.
     *
     * **Options:**
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
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#CollisionMaskLayer Online documentation}
     */
    export type CollisionMaskLayer = "ground-tile" | "water-tile" | "resource-layer" | "doodad-layer" | "floor-layer" | "item-layer" | "ghost-layer" | "object-layer" | "player-layer" | "train-layer" | "rail-layer" | "transport-belt-layer" | "not-setup" | `layer-${bigint}`;
    /**
     * A set of flags. Active flags are in the dictionary as `true`, while inactive flags aren't present at all.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#CollisionMask Online documentation}
     */
    export type CollisionMask = {
        readonly [T in CollisionMaskLayer]?: true;
    };
    /**
     * A {@link CollisionMask} which also includes any flags this mask has.
     *
     * **Options:**
     * - {@link CollisionMaskLayer}
     * - `"not-colliding-with-itself"`: Any two entities that both have this option enabled on their prototype and have an identical collision mask layers list will not collide. Other collision mask options are not included in the identical layer list check. This does mean that two different prototypes with the same collision mask layers and this option enabled will not collide.
     * - `"consider-tile-transitions"`: Uses the prototypes position rather than its collision box when doing collision checks with tile prototypes. Allows the prototype to overlap colliding tiles up until its center point. This is only respected for character movement and cars driven by players.
     * - `"colliding-with-tiles-only"`: Any prototype with this collision option will only be checked for collision with other prototype's collision masks if they are a tile.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#CollisionMaskWithFlags Online documentation}
     */
    export type CollisionMaskWithFlags = {
        /**
         * Any two entities that both have this option enabled on their prototype and have an identical collision mask layers list will not collide. Other collision mask options are not included in the identical layer list check. This does mean that two different prototypes with the same collision mask layers and this option enabled will not collide.
         */
        readonly "not-colliding-with-itself"?: true;
        /**
         * Uses the prototypes position rather than its collision box when doing collision checks with tile prototypes. Allows the prototype to overlap colliding tiles up until its center point. This is only respected for character movement and cars driven by players.
         */
        readonly "consider-tile-transitions"?: true;
        /**
         * Any prototype with this collision option will only be checked for collision with other prototype's collision masks if they are a tile.
         */
        readonly "colliding-with-tiles-only"?: true;
    } & {
        readonly [T in CollisionMaskLayer]?: true;
    };
    /**
     * A set of trigger target masks.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#TriggerTargetMask Online documentation}
     */
    export type TriggerTargetMask = Record<string, boolean>;
    export interface TriggerEffectItem {
        /**
         * One of`"damage"`, `"create-entity"`, `"create-explosion"`, `"create-fire"`, `"create-smoke"`, `"create-trivial-smoke"`, `"create-particle"`, `"create-sticker"`, `"nested-result"`, `"play-sound"`, `"push-back"`, `"destroy-cliffs"`, `"show-explosion-on-chart"`, `"insert-item"`, `"script"`.
         */
        readonly type: "damage" | "create-entity" | "create-explosion" | "create-fire" | "create-smoke" | "create-trivial-smoke" | "create-particle" | "create-sticker" | "nested-result" | "play-sound" | "push-back" | "destroy-cliffs" | "show-explosion-on-chart" | "insert-item" | "script";
        readonly repeat_count: uint;
        readonly affects_target: boolean;
        readonly show_in_tooltip: boolean;
    }
    export interface TriggerDelivery {
        /**
         * One of `"instant"`, `"projectile"`, `"flame-thrower"`, `"beam"`, `"stream"`, `"artillery"`.
         */
        readonly type: "instant" | "projectile" | "flame-thrower" | "beam" | "stream" | "artillery";
        readonly source_effects: TriggerEffectItem[];
        readonly target_effects: TriggerEffectItem[];
    }
    export interface TriggerItem {
        /**
         * One of `"direct"`, `"area"`, `"line"`, `"cluster"`.
         */
        readonly type: "direct" | "area" | "line" | "cluster";
        readonly action_delivery?: TriggerDelivery[];
        /**
         * The trigger will only affect entities that contain any of these flags.
         */
        readonly entity_flags?: EntityPrototypeFlags;
        readonly ignore_collision_condition: boolean;
        /**
         * The trigger will only affect entities that would collide with given collision mask.
         */
        readonly collision_mask: CollisionMask;
        readonly trigger_target_mask: TriggerTargetMask;
        /**
         * If `"enemy"`, the trigger will only affect entities whose force is different from the attacker's and for which there is no cease-fire set. `"ally"` is the opposite of `"enemy"`.
         */
        readonly force: ForceCondition;
        readonly repeat_count: uint;
    }
    export interface CircularParticleCreationSpecification {
        /**
         * Name of the {@link LuaEntityPrototype}
         */
        readonly name: string;
        readonly direction: float;
        readonly direction_deviation: float;
        readonly speed: float;
        readonly speed_deviation: float;
        readonly starting_frame_speed: float;
        readonly starting_frame_speed_deviation: float;
        readonly height: float;
        readonly height_deviation: float;
        readonly vertical_speed: float;
        readonly vertical_speed_deviation: float;
        /**
         * This vector is a table with `x` and `y` keys instead of an array.
         */
        readonly center: MapPosition;
        readonly creation_distance: double;
        readonly creation_distance_orientation: double;
        readonly use_source_position: boolean;
    }
    export type CircularProjectileCreationSpecification = readonly [
        _: RealOrientation,
        _: Vector
    ];
    export interface AttackParameterFluid {
        /**
         * Name of the {@link LuaFluidPrototype}.
         */
        readonly type: string;
        /**
         * Multiplier applied to the damage of an attack.
         */
        readonly damage_modifier: double;
    }
    /**
     * Common attributes to all variants of {@link AttackParameters}.
     */
    export interface BaseAttackParameters {
        /**
         * The type of AttackParameter. One of `'projectile'`, `'stream'` or `'beam'`.
         */
        readonly type: "projectile" | "stream" | "beam";
        /**
         * Maximum range of attack.
         */
        readonly range: float;
        /**
         * Minimum range of attack. Used with flamethrower turrets to prevent self-immolation.
         */
        readonly min_range: float;
        /**
         * Defines how the range is determined. Either `'center-to-center'` or `'bounding-box-to-bounding-box'`.
         */
        readonly range_mode: "center-to-center" | "bounding-box-to-bounding-box";
        /**
         * When searching for the nearest enemy to attack, `fire_penalty` is added to the enemy's distance if they are on fire.
         */
        readonly fire_penalty: float;
        /**
         * When searching for an enemy to attack, a higher `rotate_penalty` will discourage targeting enemies that would take longer to turn to face.
         */
        readonly rotate_penalty: float;
        /**
         * When searching for an enemy to attack, a higher `health_penalty` will discourage targeting enemies with high health. A negative penalty will do the opposite.
         */
        readonly health_penalty: float;
        /**
         * If less than `range`, the entity will choose a random distance between `range` and `min_attack_distance` and attack from that distance. Used for spitters.
         */
        readonly min_attack_distance: float;
        /**
         * The arc that the entity can attack in as a fraction of a circle. A value of `1` means the full 360 degrees.
         */
        readonly turn_range: float;
        /**
         * Multiplier applied to the damage of an attack.
         */
        readonly damage_modifier: float;
        /**
         * Multiplier applied to the ammo consumption of an attack.
         */
        readonly ammo_consumption_modifier: float;
        /**
         * Minimum amount of ticks between shots. If this is less than `1`, multiple shots can be performed per tick.
         */
        readonly cooldown: float;
        /**
         * Number of ticks it takes for the weapon to actually shoot after it has been ordered to do so.
         */
        readonly warmup: uint;
        readonly movement_slow_down_factor: double;
        readonly movement_slow_down_cooldown: float;
        readonly ammo_type?: AmmoType;
        /**
         * List of the names of compatible {@link LuaAmmoCategoryPrototype LuaAmmoCategoryPrototypes}.
         */
        readonly ammo_categories?: string[];
    }
    /**
     * `"projectile"` variant of {@link AttackParameters}.
     */
    export interface ProjectileAttackParameters extends BaseAttackParameters {
        readonly type: "projectile";
        readonly projectile_center: Vector;
        readonly projectile_creation_distance: float;
        readonly projectile_orientation_offset: float;
        readonly shell_particle?: CircularParticleCreationSpecification;
        readonly projectile_creation_parameters?: CircularProjectileCreationSpecification[];
    }
    /**
     * `"stream"` variant of {@link AttackParameters}.
     */
    export interface StreamAttackParameters extends BaseAttackParameters {
        readonly type: "stream";
        readonly gun_barrel_length: float;
        readonly gun_center_shift: Record<string, Vector>;
        readonly fluid_consumption: float;
        readonly fluids?: AttackParameterFluid[];
        readonly projectile_creation_parameters?: CircularProjectileCreationSpecification[];
    }
    /**
     * Variants of {@link AttackParameters} with no additional attributes.
     */
    export interface OtherAttackParameters extends BaseAttackParameters {
        readonly type: "beam";
    }
    /**
     * Base attributes: {@link BaseAttackParameters}
     *
     * Other attributes may be specified depending on `type`:
     * - `"projectile"`: {@link ProjectileAttackParameters}
     * - `"stream"`: {@link StreamAttackParameters}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#AttackParameters Online documentation}
     */
    export type AttackParameters = ProjectileAttackParameters | StreamAttackParameters | OtherAttackParameters;
    export interface BaseCapsuleAction {
        /**
         * One of `"throw"`, `"equipment-remote"`, `"use-on-self"`, `"artillery-remote"`, `"destroy-cliffs"`.
         */
        readonly type: "throw" | "equipment-remote" | "use-on-self" | "artillery-remote" | "destroy-cliffs";
    }
    /**
     * `"throw"` variant of {@link CapsuleAction}.
     */
    export interface ThrowCapsuleAction extends BaseCapsuleAction {
        readonly type: "throw";
        readonly attack_parameters: AttackParameters;
        /**
         * Whether using the capsule consumes an item from the stack.
         */
        readonly uses_stack: boolean;
    }
    /**
     * `"equipment-remote"` variant of {@link CapsuleAction}.
     */
    export interface EquipmentRemoteCapsuleAction extends BaseCapsuleAction {
        readonly type: "equipment-remote";
        /**
         * Name of the {@link LuaEquipmentPrototype}.
         */
        readonly equipment: string;
    }
    /**
     * `"use-on-self"` variant of {@link CapsuleAction}.
     */
    export interface UseOnSelfCapsuleAction extends BaseCapsuleAction {
        readonly type: "use-on-self";
        readonly attack_parameters: AttackParameters;
    }
    /**
     * `"artillery-remote"` variant of {@link CapsuleAction}.
     */
    export interface ArtilleryRemoteCapsuleAction extends BaseCapsuleAction {
        readonly type: "artillery-remote";
        /**
         * Name of the {@link LuaEntityPrototype flare prototype}.
         */
        readonly flare: string;
    }
    /**
     * `"destroy-cliffs"` variant of {@link CapsuleAction}.
     */
    export interface DestroyCliffsCapsuleAction extends BaseCapsuleAction {
        readonly type: "destroy-cliffs";
        readonly attack_parameters: AttackParameters;
        readonly radius: float;
        readonly timeout: uint;
    }
    /**
     * Other attributes may be specified depending on `type`:
     * - `"throw"`: {@link ThrowCapsuleAction}
     * - `"equipment-remote"`: {@link EquipmentRemoteCapsuleAction}
     * - `"use-on-self"`: {@link UseOnSelfCapsuleAction}
     * - `"artillery-remote"`: {@link ArtilleryRemoteCapsuleAction}
     * - `"destroy-cliffs"`: {@link DestroyCliffsCapsuleAction}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#CapsuleAction Online documentation}
     */
    export type CapsuleAction = ThrowCapsuleAction | EquipmentRemoteCapsuleAction | UseOnSelfCapsuleAction | ArtilleryRemoteCapsuleAction | DestroyCliffsCapsuleAction;
    /**
     * A set of flags on a selection tool that define how entities and tiles are selected. Active flags are in the dictionary as `true`, while inactive flags aren't present at all.
     *
     * **Options:**
     * - `"blueprint"`: Selects entities and tiles as if selecting them for a blueprint.
     * - `"deconstruct"`: Selects entities and tiles as if selecting them for deconstruction.
     * - `"cancel-deconstruct"`: Selects entities and tiles as if selecting them for deconstruction cancellation.
     * - `"items"`: Selects items on the ground.
     * - `"trees"`: Selects trees.
     * - `"buildable-type"`: Selects entities which are considered a {@link LuaEntityPrototype#is_building building}, plus landmines.
     * - `"nothing"`: Selects no entities or tiles, but is useful to select an area.
     * - `"items-to-place"`: Selects entities and tiles that can be {@link LuaItemPrototype#place_result built by an item}.
     * - `"any-entity"`: Selects all entities.
     * - `"any-tile"`: Selects all tiles.
     * - `"same-force"`: Selects entities with the same force as the selecting player.
     * - `"not-same-force"`: Selects entities with a different force as the selecting player.
     * - `"friend"`: Selects entities from a {@link LuaForce#is_friend friendly} force.
     * - `"enemy"`: Selects entities from an {@link LuaForce#is_enemy enemy} force.
     * - `"upgrade"`: Selects entities as if selecting them for upgrading.
     * - `"cancel-upgrade"`: Selects entities as if selecting them for upgrade cancellation.
     * - `"downgrade"`: Selects entities as if selecting them for downgrading.
     * - `"entity-with-health"`: Selects entities that are {@link LuaEntity#is_entity_with_health entities with health}.
     * - `"entity-with-force"`: Deprecated. Replaced by `is-military-target`.
     * - `"is-military-target"`: Selects entities that are {@link LuaEntity#is_military_target military targets}.
     * - `"entity-with-owner"`: Selects entities that are {@link LuaEntity#is_entity_with_owner entities with owner}.
     * - `"avoid-rolling-stock"`: Selects entities that are not `rolling-stock`s.
     * - `"entity-ghost"`: Selects entities that are `entity-ghost`s.
     * - `"tile-ghost"`: Selects entities that are `tile-ghost`s.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#SelectionModeFlags Online documentation}
     */
    export interface SelectionModeFlags {
        /**
         * Selects entities and tiles as if selecting them for a blueprint.
         */
        readonly blueprint?: true;
        /**
         * Selects entities and tiles as if selecting them for deconstruction.
         */
        readonly deconstruct?: true;
        /**
         * Selects entities and tiles as if selecting them for deconstruction cancellation.
         */
        readonly "cancel-deconstruct"?: true;
        /**
         * Selects items on the ground.
         */
        readonly items?: true;
        /**
         * Selects trees.
         */
        readonly trees?: true;
        /**
         * Selects entities which are considered a {@link LuaEntityPrototype#is_building building}, plus landmines.
         */
        readonly "buildable-type"?: true;
        /**
         * Selects no entities or tiles, but is useful to select an area.
         */
        readonly nothing?: true;
        /**
         * Selects entities and tiles that can be {@link LuaItemPrototype#place_result built by an item}.
         */
        readonly "items-to-place"?: true;
        /**
         * Selects all entities.
         */
        readonly "any-entity"?: true;
        /**
         * Selects all tiles.
         */
        readonly "any-tile"?: true;
        /**
         * Selects entities with the same force as the selecting player.
         */
        readonly "same-force"?: true;
        /**
         * Selects entities with a different force as the selecting player.
         */
        readonly "not-same-force"?: true;
        /**
         * Selects entities from a {@link LuaForce#is_friend friendly} force.
         */
        readonly friend?: true;
        /**
         * Selects entities from an {@link LuaForce#is_enemy enemy} force.
         */
        readonly enemy?: true;
        /**
         * Selects entities as if selecting them for upgrading.
         */
        readonly upgrade?: true;
        /**
         * Selects entities as if selecting them for upgrade cancellation.
         */
        readonly "cancel-upgrade"?: true;
        /**
         * Selects entities as if selecting them for downgrading.
         */
        readonly downgrade?: true;
        /**
         * Selects entities that are {@link LuaEntity#is_entity_with_health entities with health}.
         */
        readonly "entity-with-health"?: true;
        /**
         * Deprecated. Replaced by `is-military-target`.
         */
        readonly "entity-with-force"?: true;
        /**
         * Selects entities that are {@link LuaEntity#is_military_target military targets}.
         */
        readonly "is-military-target"?: true;
        /**
         * Selects entities that are {@link LuaEntity#is_entity_with_owner entities with owner}.
         */
        readonly "entity-with-owner"?: true;
        /**
         * Selects entities that are not `rolling-stock`s.
         */
        readonly "avoid-rolling-stock"?: true;
        /**
         * Selects entities that are `entity-ghost`s.
         */
        readonly "entity-ghost"?: true;
        /**
         * Selects entities that are `tile-ghost`s.
         */
        readonly "tile-ghost"?: true;
    }
    export interface LogisticFilter {
        /**
         * The index this filter applies to.
         */
        readonly index: uint;
        /**
         * The item name for this filter.
         */
        readonly name: string;
        /**
         * The count for this filter.
         */
        readonly count: uint;
    }
    export interface ModSetting {
        /**
         * The value of the mod setting. The type depends on the kind of setting.
         */
        readonly value: int | double | boolean | string | Color;
    }
    /**
     * Any basic type (string, number, boolean) or table.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#AnyBasic Online documentation}
     */
    export type AnyBasic = string | boolean | number | table;
    /**
     * Any basic type (string, number, boolean), table, or LuaObject.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#Any Online documentation}
     */
    export type Any = string | boolean | number | table | LuaObject;
    export interface ProgrammableSpeakerParameters {
        readonly playback_volume: double;
        readonly playback_globally: boolean;
        readonly allow_polyphony: boolean;
    }
    export interface ProgrammableSpeakerAlertParameters {
        readonly show_alert: boolean;
        readonly show_on_map: boolean;
        readonly icon_signal_id: SignalID;
        readonly alert_message: string;
    }
    export interface ProgrammableSpeakerCircuitParameters {
        readonly signal_value_is_pitch: boolean;
        readonly instrument_id: uint;
        readonly note_id: uint;
    }
    export interface ProgrammableSpeakerInstrument {
        readonly name: string;
        readonly notes: string[];
    }
    /**
     * A `string` that specifies where a GUI element should be.
     *
     * **Options:**
     * - `"top-left"`
     * - `"middle-left"`
     * - `"left"`: The same as `"middle-left"`
     * - `"bottom-left"`
     * - `"top-center"`
     * - `"middle-center"`
     * - `"center"`: The same as `"middle-center"`
     * - `"bottom-center"`
     * - `"top-right"`
     * - `"right"`: The same as `"middle-right"`
     * - `"bottom-right"`
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#Alignment Online documentation}
     */
    export type Alignment = "top-left" | "middle-left" | "left" | "bottom-left" | "top-center" | "middle-center" | "center" | "bottom-center" | "top-right" | "right" | "bottom-right";
    /**
     * Information about the event that has been raised. The table can also contain other fields depending on the type of event. See {@linkplain https://lua-api.factorio.com/1.1.89/events.html the list of Factorio events} for more information on these.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#EventData Online documentation}
     */
    export interface EventData {
        /**
         * The identifier of the event this handler was registered to.
         */
        readonly name: EventId<EventData> | string;
        /**
         * The tick during which the event happened.
         */
        readonly tick: uint;
        /**
         * The name of the mod that raised the event if it was raised using {@link LuaBootstrap#raise_event LuaBootstrap::raise_event}.
         */
        readonly mod_name?: string;
    }
    export interface NthTickEventData {
        /**
         * The tick during which the event happened.
         */
        readonly tick: uint;
        /**
         * The nth tick this handler was registered to.
         */
        readonly nth_tick: uint;
    }
    export interface ModChangeData {
        /**
         * Old version of the mod. May be `nil` if the mod wasn't previously present (i.e. it was just added).
         */
        readonly old_version: string | nil;
        /**
         * New version of the mod. May be `nil` if the mod is no longer present (i.e. it was just removed).
         */
        readonly new_version: string | nil;
    }
    export interface ConfigurationChangedData {
        /**
         * Old version of the map. Present only when loading map version other than the current version.
         */
        readonly old_version?: string;
        /**
         * New version of the map. Present only when loading map version other than the current version.
         */
        readonly new_version?: string;
        /**
         * Dictionary of mod changes. It is indexed by mod name.
         */
        readonly mod_changes: Record<string, ModChangeData>;
        /**
         * `true` when mod startup settings have changed since the last time this save was loaded.
         */
        readonly mod_startup_settings_changed: boolean;
        /**
         * `true` when mod prototype migrations have been applied since the last time this save was loaded.
         */
        readonly migration_applied: boolean;
    }
    export interface CustomCommandData {
        /**
         * The name of the command.
         */
        readonly name: string;
        /**
         * The tick the command was used in.
         */
        readonly tick: uint;
        /**
         * The player who issued the command, or `nil` if it was issued from the server console.
         */
        readonly player_index?: PlayerIndex;
        /**
         * The parameter passed after the command, if there is one.
         */
        readonly parameter?: string;
    }
    export interface SelectedPrototypeData {
        /**
         * E.g. `"entity"`.
         */
        readonly base_type: string;
        /**
         * E.g. `"tree"`.
         */
        readonly derived_type: string;
        /**
         * E.g. `"tree-05"`.
         */
        readonly name: string;
    }
    export interface ScriptRenderTarget {
        readonly entity?: LuaEntity;
        readonly entity_offset?: Vector;
        readonly position?: MapPosition;
    }
    /**
     * A set of flags. Active flags are in the dictionary as `true`, while inactive flags aren't present at all.
     *
     * To write to this, use an array[`string`] of the mouse buttons that should be possible to use with on button. The flag `"left-and-right"` can also be set, which will set `"left"` and `"right"` to `true`.
     *
     * **Options:**
     * - `"left"`
     * - `"right"`
     * - `"middle"`
     * - `"button-4"`
     * - `"button-5"`
     * - `"button-6"`
     * - `"button-7"`
     * - `"button-8"`
     * - `"button-9"`
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#MouseButtonFlags Online documentation}
     */
    export interface MouseButtonFlags {
        readonly left?: true;
        readonly right?: true;
        readonly middle?: true;
        readonly "button-4"?: true;
        readonly "button-5"?: true;
        readonly "button-6"?: true;
        readonly "button-7"?: true;
        readonly "button-8"?: true;
        readonly "button-9"?: true;
    }
    /** @see MouseButtonFlags */
    export type MouseButtonFlagsWrite = MouseButtonFlags | ReadonlyArray<keyof MouseButtonFlags | "left-and-right">;
    /**
     * **Options:**
     * - `"entity"`: Yellow box.
     * - `"not-allowed"`: Red box.
     * - `"electricity"`: Light blue box.
     * - `"pair"`: Light blue box.
     * - `"copy"`: Green box.
     * - `"train-visualization"`: White box.
     * - `"logistics"`: Light blue box.
     * - `"blueprint-snap-rectangle"`: Green box.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#CursorBoxRenderType Online documentation}
     */
    export type CursorBoxRenderType = "entity" | "not-allowed" | "electricity" | "pair" | "copy" | "train-visualization" | "logistics" | "blueprint-snap-rectangle";
    /**
     * **Options:**
     * - `"all"`: All forces pass.
     * - `"enemy"`: Forces which will attack pass.
     * - `"ally"`: Forces which won't attack pass.
     * - `"friend"`: Forces which are friends pass.
     * - `"not-friend"`: Forces which are not friends pass.
     * - `"same"`: The same force pass.
     * - `"not-same"`: The non-same forces pass.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#ForceCondition Online documentation}
     */
    export type ForceCondition = "all" | "enemy" | "ally" | "friend" | "not-friend" | "same" | "not-same";
    /**
     * A number between 0 and 255 inclusive, represented by one of the following named strings or the string version of the number. For example `"27"` and `"decals"` are both valid. Higher values are rendered above lower values.
     *
     * **Options:**
     * - `string`: A string of a number
     * - `"water-tile"`: 15
     * - `"ground-tile"`: 25
     * - `"tile-transition"`: 26
     * - `"decals"`: 27
     * - `"lower-radius-visualization"`: 29
     * - `"radius-visualization"`: 30
     * - `"transport-belt-integration"`: 65
     * - `"resource"`: 66
     * - `"building-smoke"`: 67
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
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#RenderLayer Online documentation}
     */
    export type RenderLayer = `${bigint}` | "water-tile" | "ground-tile" | "tile-transition" | "decals" | "lower-radius-visualization" | "radius-visualization" | "transport-belt-integration" | "resource" | "building-smoke" | "decorative" | "ground-patch" | "ground-patch-higher" | "ground-patch-higher2" | "remnants" | "floor" | "transport-belt" | "transport-belt-endings" | "floor-mechanics-under-corpse" | "corpse" | "floor-mechanics" | "item" | "lower-object" | "transport-belt-circuit-connector" | "lower-object-above-shadow" | "object" | "higher-object-under" | "higher-object-above" | "item-in-inserter-hand" | "wires" | "wires-above" | "entity-info-icon" | "entity-info-icon-above" | "explosion" | "projectile" | "smoke" | "air-object" | "air-entity-info-icon" | "light-effect" | "selection-box" | "higher-selection-box" | "collision-selection-box" | "arrow" | "cursor";
    /**
     * **Options:**
     * - `"west-to-east"`
     * - `"north-to-south"`
     * - `"east-to-west"`
     * - `"south-to-north"`
     * - `"west-to-north"`
     * - `"north-to-east"`
     * - `"east-to-south"`
     * - `"south-to-west"`
     * - `"west-to-south"`
     * - `"north-to-west"`
     * - `"east-to-north"`
     * - `"south-to-east"`
     * - `"west-to-none"`
     * - `"none-to-east"`
     * - `"east-to-none"`
     * - `"none-to-west"`
     * - `"north-to-none"`
     * - `"none-to-south"`
     * - `"south-to-none"`
     * - `"none-to-north"`
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#CliffOrientation Online documentation}
     */
    export type CliffOrientation = "west-to-east" | "north-to-south" | "east-to-west" | "south-to-north" | "west-to-north" | "north-to-east" | "east-to-south" | "south-to-west" | "west-to-south" | "north-to-west" | "east-to-north" | "south-to-east" | "west-to-none" | "none-to-east" | "east-to-none" | "none-to-west" | "north-to-none" | "none-to-south" | "south-to-none" | "none-to-north";
    export interface ItemStackLocation {
        readonly inventory: defines.inventory;
        readonly slot: uint;
    }
    export interface VehicleAutomaticTargetingParameters {
        readonly auto_target_without_gunner: boolean;
        readonly auto_target_with_gunner: boolean;
    }
    /**
     * Defines which slider in the game's sound settings affects the volume of this sound. Furthermore, some sound types are mixed differently than others, e.g. zoom level effects are applied.
     *
     * **Options:**
     * - `"game-effect"`
     * - `"gui-effect"`
     * - `"ambient"`
     * - `"environment"`
     * - `"walking"`
     * - `"alert"`
     * - `"wind"`
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#SoundType Online documentation}
     */
    export type SoundType = "game-effect" | "gui-effect" | "ambient" | "environment" | "walking" | "alert" | "wind";
    /**
     * **Options:**
     * - `"button"`: A clickable element. Relevant event: {@link OnGuiClickEvent on_gui_click}
     * - `"sprite-button"`: A `button` that displays a sprite rather than text. Relevant event: {@link OnGuiClickEvent on_gui_click}
     * - `"checkbox"`: A clickable element with a check mark that can be turned off or on. Relevant event: {@link OnGuiCheckedStateChangedEvent on_gui_checked_state_changed}
     * - `"flow"`: An invisible container that lays out its children either horizontally or vertically.
     * - `"frame"`: A non-transparent box that contains other elements. It can have a title (set via the `caption` attribute). Just like a `flow`, it lays out its children either horizontally or vertically. Relevant event: {@link OnGuiLocationChangedEvent on_gui_location_changed}
     * - `"label"`: A piece of text.
     * - `"line"`: A horizontal or vertical separation line.
     * - `"progressbar"`: A partially filled bar that can be used to indicate progress.
     * - `"table"`: An invisible container that lays out its children in a specific number of columns. The width of each column is determined by the widest element it contains.
     * - `"textfield"`: A single-line box the user can type into. Relevant events: {@link OnGuiTextChangedEvent on_gui_text_changed}, {@link OnGuiConfirmedEvent on_gui_confirmed}
     * - `"radiobutton"`: An element that is similar to a `checkbox`, but with a circular appearance. Clicking a selected radio button will not unselect it. Radio buttons are not linked to each other in any way. Relevant event: {@link OnGuiCheckedStateChangedEvent on_gui_checked_state_changed}
     * - `"sprite"`: An element that shows an image.
     * - `"scroll-pane"`: An invisible element that is similar to a `flow`, but has the ability to show and use scroll bars.
     * - `"drop-down"`: A drop-down containing strings of text. Relevant event: {@link OnGuiSelectionStateChangedEvent on_gui_selection_state_changed}
     * - `"list-box"`: A list of strings, only one of which can be selected at a time. Shows a scroll bar if necessary. Relevant event: {@link OnGuiSelectionStateChangedEvent on_gui_selection_state_changed}
     * - `"camera"`: A camera that shows the game at the given position on the given surface. It can visually track an {@link LuaGuiElement#entity entity} that is set after the element has been created.
     * - `"choose-elem-button"`: A button that lets the player pick from a certain kind of prototype, with optional filtering. Relevant event: {@link OnGuiElemChangedEvent on_gui_elem_changed}
     * - `"text-box"`: A multi-line `textfield`. Relevant event: {@link OnGuiTextChangedEvent on_gui_text_changed}
     * - `"slider"`: A horizontal number line which can be used to choose a number. Relevant event: {@link OnGuiValueChangedEvent on_gui_value_changed}
     * - `"minimap"`: A minimap preview, similar to the normal player minimap. It can visually track an {@link LuaGuiElement#entity entity} that is set after the element has been created.
     * - `"entity-preview"`: A preview of an entity. The {@link LuaGuiElement#entity entity} has to be set after the element has been created.
     * - `"empty-widget"`: An empty element that just exists. The root GUI elements `screen` and `relative` are `empty-widget`s.
     * - `"tabbed-pane"`: A collection of `tab`s and their contents. Relevant event: {@link OnGuiSelectedTabChangedEvent on_gui_selected_tab_changed}
     * - `"tab"`: A tab for use in a `tabbed-pane`.
     * - `"switch"`: A switch with three possible states. Can have labels attached to either side. Relevant event: {@link OnGuiSwitchStateChangedEvent on_gui_switch_state_changed}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#GuiElementType Online documentation}
     */
    export type GuiElementType = "button" | "sprite-button" | "checkbox" | "flow" | "frame" | "label" | "line" | "progressbar" | "table" | "textfield" | "radiobutton" | "sprite" | "scroll-pane" | "drop-down" | "list-box" | "camera" | "choose-elem-button" | "text-box" | "slider" | "minimap" | "entity-preview" | "empty-widget" | "tabbed-pane" | "tab" | "switch";
    /**
     * **Options:**
     * - `"nowhere"`
     * - `"goal"`
     * - `"entity_info"`
     * - `"active_window"`
     * - `"entity"`
     * - `"position"`
     * - `"crafting_queue"`
     * - `"item_stack"`
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#GuiArrowType Online documentation}
     */
    export type GuiArrowType = "nowhere" | "goal" | "entity_info" | "active_window" | "entity" | "position" | "crafting_queue" | "item_stack";
    /**
     * Types `"signal"` and `"item-group"` do not support filters.
     *
     * **Options:**
     * - ItemPrototypeFilter: for type `"item"`
     * - TilePrototypeFilter: for type `"tile"`
     * - EntityPrototypeFilter: for type `"entity"`
     * - FluidPrototypeFilter: for type `"fluid"`
     * - RecipePrototypeFilter: for type `"recipe"`
     * - {@link DecorativePrototypeFilter}: for type `"decorative"`
     * - {@link AchievementPrototypeFilter}: for type `"achievement"`
     * - {@link EquipmentPrototypeFilter}: for type `"equipment"`
     * - TechnologyPrototypeFilter: for type `"technology"`
     * @see PrototypeFilterWrite
     * @remarks Filters are always used as an array of filters of a specific type. Every filter can only be used with its corresponding event, and different types of event filters can not be mixed.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#PrototypeFilter Online documentation}
     */
    export type PrototypeFilter = (ItemPrototypeFilter | TilePrototypeFilter | EntityPrototypeFilter | FluidPrototypeFilter | RecipePrototypeFilter | DecorativePrototypeFilter | AchievementPrototypeFilter | EquipmentPrototypeFilter | TechnologyPrototypeFilter)[];
    /**
     * Write form of {@link PrototypeFilter}, where table-or-array concepts are allowed to take an array form.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#PrototypeFilter Online documentation}
     */
    export type PrototypeFilterWrite = readonly (ItemPrototypeFilterWrite | TilePrototypeFilterWrite | EntityPrototypeFilterWrite | FluidPrototypeFilterWrite | RecipePrototypeFilterWrite | DecorativePrototypeFilter | AchievementPrototypeFilter | EquipmentPrototypeFilter | TechnologyPrototypeFilterWrite)[];
    /**
     * Common attributes to all variants of {@link ItemPrototypeFilter}.
     */
    export interface BaseItemPrototypeFilter {
        /**
         * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`.
         */
        readonly filter: "tool" | "mergeable" | "item-with-inventory" | "selection-tool" | "item-with-label" | "has-rocket-launch-products" | "fuel" | "place-result" | "burnt-result" | "place-as-tile" | "placed-as-equipment-result" | "name" | "type" | "flag" | "subgroup" | "fuel-category" | "stack-size" | "default-request-amount" | "wire-count" | "fuel-value" | "fuel-acceleration-multiplier" | "fuel-top-speed-multiplier" | "fuel-emissions-multiplier";
        /**
         * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
         */
        readonly mode?: "or" | "and";
        /**
         * Inverts the condition. Default is `false`.
         */
        readonly invert?: boolean;
    }
    /**
     * `"place-result"` variant of {@link ItemPrototypeFilter}.
     */
    export interface PlaceResultItemPrototypeFilter extends BaseItemPrototypeFilter {
        readonly filter: "place-result";
        /**
         * Filters for the place result.
         */
        readonly elem_filters?: EntityPrototypeFilter[];
    }
    export interface PlaceResultItemPrototypeFilterWrite extends BaseItemPrototypeFilter {
        readonly filter: "place-result";
        /**
         * Filters for the place result.
         */
        readonly elem_filters?: readonly EntityPrototypeFilterWrite[];
    }
    /**
     * `"burnt-result"` variant of {@link ItemPrototypeFilter}.
     */
    export interface BurntResultItemPrototypeFilter extends BaseItemPrototypeFilter {
        readonly filter: "burnt-result";
        /**
         * Filters for the burnt result.
         */
        readonly elem_filters?: ItemPrototypeFilter[];
    }
    export interface BurntResultItemPrototypeFilterWrite extends BaseItemPrototypeFilter {
        readonly filter: "burnt-result";
        /**
         * Filters for the burnt result.
         */
        readonly elem_filters?: readonly ItemPrototypeFilterWrite[];
    }
    /**
     * `"place-as-tile"` variant of {@link ItemPrototypeFilter}.
     */
    export interface PlaceAsTileItemPrototypeFilter extends BaseItemPrototypeFilter {
        readonly filter: "place-as-tile";
        /**
         * Filters for the placed tile.
         */
        readonly elem_filters?: TilePrototypeFilter[];
    }
    export interface PlaceAsTileItemPrototypeFilterWrite extends BaseItemPrototypeFilter {
        readonly filter: "place-as-tile";
        /**
         * Filters for the placed tile.
         */
        readonly elem_filters?: readonly TilePrototypeFilterWrite[];
    }
    /**
     * `"placed-as-equipment-result"` variant of {@link ItemPrototypeFilter}.
     */
    export interface PlacedAsEquipmentResultItemPrototypeFilter extends BaseItemPrototypeFilter {
        readonly filter: "placed-as-equipment-result";
        /**
         * Filters for the placed equipment.
         */
        readonly elem_filters?: EquipmentPrototypeFilter[];
    }
    /**
     * `"name"` variant of {@link ItemPrototypeFilter}.
     *
     * For use within nested filters such as the `has-product-item` filter of array[{@link RecipePrototypeFilter}]. To get a specific prototype by name, see {@link LuaGameScript#item_prototypes LuaGameScript::item_prototypes}.
     */
    export interface NameItemPrototypeFilter extends BaseItemPrototypeFilter {
        readonly filter: "name";
        /**
         * The prototype name, or list of acceptable names.
         */
        readonly name: string | string[];
    }
    /**
     * `"type"` variant of {@link ItemPrototypeFilter}.
     *
     * Usage example:
     *
     * ```
     * game.get_filtered_item_prototypes({{filter = "type", type = "armor"}})
     * ```
     */
    export interface TypeItemPrototypeFilter extends BaseItemPrototypeFilter {
        readonly filter: "type";
        /**
         * The prototype type, or a list of acceptable types.
         */
        readonly type: string | string[];
    }
    /**
     * `"flag"` variant of {@link ItemPrototypeFilter}.
     */
    export interface FlagItemPrototypeFilter extends BaseItemPrototypeFilter {
        readonly filter: "flag";
        /**
         * One of the values in {@link ItemPrototypeFlags}.
         */
        readonly flag: keyof ItemPrototypeFlags;
    }
    /**
     * `"subgroup"` variant of {@link ItemPrototypeFilter}.
     */
    export interface SubgroupItemPrototypeFilter extends BaseItemPrototypeFilter {
        readonly filter: "subgroup";
        /**
         * A {@link LuaGroup} (subgroup) name
         */
        readonly subgroup: string;
    }
    /**
     * `"fuel-category"` variant of {@link ItemPrototypeFilter}.
     */
    export interface FuelCategoryItemPrototypeFilter extends BaseItemPrototypeFilter {
        readonly filter: "fuel-category";
        /**
         * A {@link LuaFuelCategoryPrototype} name
         */
        readonly "fuel-category": string;
    }
    /**
     * `"stack-size"` variant of {@link ItemPrototypeFilter}.
     *
     * Usage example:
     *
     * ```
     * game.get_filtered_item_prototypes({{filter = "stack-size", comparison = ">", value = 20}, {filter = "stack-size", comparison = "<", value = 100, mode = "and"}})
     * ```
     */
    export interface StackSizeItemPrototypeFilter extends BaseItemPrototypeFilter {
        readonly filter: "stack-size";
        readonly comparison: ComparatorStringRead;
        /**
         * The value to compare against.
         */
        readonly value: uint;
    }
    export interface StackSizeItemPrototypeFilterWrite extends BaseItemPrototypeFilter {
        readonly filter: "stack-size";
        readonly comparison: ComparatorString;
        /**
         * The value to compare against.
         */
        readonly value: uint;
    }
    /**
     * `"default-request-amount"` variant of {@link ItemPrototypeFilter}.
     */
    export interface DefaultRequestAmountItemPrototypeFilter extends BaseItemPrototypeFilter {
        readonly filter: "default-request-amount";
        readonly comparison: ComparatorStringRead;
        /**
         * The value to compare against.
         */
        readonly value: uint;
    }
    export interface DefaultRequestAmountItemPrototypeFilterWrite extends BaseItemPrototypeFilter {
        readonly filter: "default-request-amount";
        readonly comparison: ComparatorString;
        /**
         * The value to compare against.
         */
        readonly value: uint;
    }
    /**
     * `"wire-count"` variant of {@link ItemPrototypeFilter}.
     */
    export interface WireCountItemPrototypeFilter extends BaseItemPrototypeFilter {
        readonly filter: "wire-count";
        readonly comparison: ComparatorStringRead;
        /**
         * The value to compare against.
         */
        readonly value: uint;
    }
    export interface WireCountItemPrototypeFilterWrite extends BaseItemPrototypeFilter {
        readonly filter: "wire-count";
        readonly comparison: ComparatorString;
        /**
         * The value to compare against.
         */
        readonly value: uint;
    }
    /**
     * `"fuel-value"` variant of {@link ItemPrototypeFilter}.
     */
    export interface FuelValueItemPrototypeFilter extends BaseItemPrototypeFilter {
        readonly filter: "fuel-value";
        readonly comparison: ComparatorStringRead;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    export interface FuelValueItemPrototypeFilterWrite extends BaseItemPrototypeFilter {
        readonly filter: "fuel-value";
        readonly comparison: ComparatorString;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    /**
     * `"fuel-acceleration-multiplier"` variant of {@link ItemPrototypeFilter}.
     */
    export interface FuelAccelerationMultiplierItemPrototypeFilter extends BaseItemPrototypeFilter {
        readonly filter: "fuel-acceleration-multiplier";
        readonly comparison: ComparatorStringRead;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    export interface FuelAccelerationMultiplierItemPrototypeFilterWrite extends BaseItemPrototypeFilter {
        readonly filter: "fuel-acceleration-multiplier";
        readonly comparison: ComparatorString;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    /**
     * `"fuel-top-speed-multiplier"` variant of {@link ItemPrototypeFilter}.
     */
    export interface FuelTopSpeedMultiplierItemPrototypeFilter extends BaseItemPrototypeFilter {
        readonly filter: "fuel-top-speed-multiplier";
        readonly comparison: ComparatorStringRead;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    export interface FuelTopSpeedMultiplierItemPrototypeFilterWrite extends BaseItemPrototypeFilter {
        readonly filter: "fuel-top-speed-multiplier";
        readonly comparison: ComparatorString;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    /**
     * `"fuel-emissions-multiplier"` variant of {@link ItemPrototypeFilter}.
     */
    export interface FuelEmissionsMultiplierItemPrototypeFilter extends BaseItemPrototypeFilter {
        readonly filter: "fuel-emissions-multiplier";
        readonly comparison: ComparatorStringRead;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    export interface FuelEmissionsMultiplierItemPrototypeFilterWrite extends BaseItemPrototypeFilter {
        readonly filter: "fuel-emissions-multiplier";
        readonly comparison: ComparatorString;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    /**
     * Variants of {@link ItemPrototypeFilter} with no additional attributes.
     */
    export interface OtherItemPrototypeFilter extends BaseItemPrototypeFilter {
        readonly filter: "tool" | "mergeable" | "item-with-inventory" | "selection-tool" | "item-with-label" | "has-rocket-launch-products" | "fuel";
    }
    /**
     * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
     *
     * Base attributes: {@link BaseItemPrototypeFilter}
     *
     * Other attributes may be specified depending on `filter`:
     * - `"place-result"`: {@link PlaceResultItemPrototypeFilter}
     * - `"burnt-result"`: {@link BurntResultItemPrototypeFilter}
     * - `"place-as-tile"`: {@link PlaceAsTileItemPrototypeFilter}
     * - `"placed-as-equipment-result"`: {@link PlacedAsEquipmentResultItemPrototypeFilter}
     * - `"name"`: {@link NameItemPrototypeFilter}
     * - `"type"`: {@link TypeItemPrototypeFilter}
     * - `"flag"`: {@link FlagItemPrototypeFilter}
     * - `"subgroup"`: {@link SubgroupItemPrototypeFilter}
     * - `"fuel-category"`: {@link FuelCategoryItemPrototypeFilter}
     * - `"stack-size"`: {@link StackSizeItemPrototypeFilter}
     * - `"default-request-amount"`: {@link DefaultRequestAmountItemPrototypeFilter}
     * - `"wire-count"`: {@link WireCountItemPrototypeFilter}
     * - `"fuel-value"`: {@link FuelValueItemPrototypeFilter}
     * - `"fuel-acceleration-multiplier"`: {@link FuelAccelerationMultiplierItemPrototypeFilter}
     * - `"fuel-top-speed-multiplier"`: {@link FuelTopSpeedMultiplierItemPrototypeFilter}
     * - `"fuel-emissions-multiplier"`: {@link FuelEmissionsMultiplierItemPrototypeFilter}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#ItemPrototypeFilter Online documentation}
     */
    export type ItemPrototypeFilter = PlaceResultItemPrototypeFilter | BurntResultItemPrototypeFilter | PlaceAsTileItemPrototypeFilter | PlacedAsEquipmentResultItemPrototypeFilter | NameItemPrototypeFilter | TypeItemPrototypeFilter | FlagItemPrototypeFilter | SubgroupItemPrototypeFilter | FuelCategoryItemPrototypeFilter | StackSizeItemPrototypeFilter | DefaultRequestAmountItemPrototypeFilter | WireCountItemPrototypeFilter | FuelValueItemPrototypeFilter | FuelAccelerationMultiplierItemPrototypeFilter | FuelTopSpeedMultiplierItemPrototypeFilter | FuelEmissionsMultiplierItemPrototypeFilter | OtherItemPrototypeFilter;
    /**
     * Write form of {@link ItemPrototypeFilter}, where table-or-array concepts are allowed to take an array form.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#ItemPrototypeFilter Online documentation}
     */
    export type ItemPrototypeFilterWrite = PlaceResultItemPrototypeFilterWrite | BurntResultItemPrototypeFilterWrite | PlaceAsTileItemPrototypeFilterWrite | PlacedAsEquipmentResultItemPrototypeFilter | NameItemPrototypeFilter | TypeItemPrototypeFilter | FlagItemPrototypeFilter | SubgroupItemPrototypeFilter | FuelCategoryItemPrototypeFilter | StackSizeItemPrototypeFilterWrite | DefaultRequestAmountItemPrototypeFilterWrite | WireCountItemPrototypeFilterWrite | FuelValueItemPrototypeFilterWrite | FuelAccelerationMultiplierItemPrototypeFilterWrite | FuelTopSpeedMultiplierItemPrototypeFilterWrite | FuelEmissionsMultiplierItemPrototypeFilterWrite | OtherItemPrototypeFilter;
    /**
     * Common attributes to all variants of {@link ModSettingPrototypeFilter}.
     */
    export interface BaseModSettingPrototypeFilter {
        /**
         * The condition to filter on. One of `"type"`, `"mod"`, `"setting-type"`.
         */
        readonly filter: "type" | "mod" | "setting-type";
        /**
         * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
         */
        readonly mode?: "or" | "and";
        /**
         * Inverts the condition. Default is `false`.
         */
        readonly invert?: boolean;
    }
    /**
     * `"type"` variant of {@link ModSettingPrototypeFilter}.
     */
    export interface TypeModSettingPrototypeFilter extends BaseModSettingPrototypeFilter {
        readonly filter: "type";
        /**
         * The prototype type, or a list of acceptable types.
         */
        readonly type: string | readonly string[];
    }
    /**
     * `"mod"` variant of {@link ModSettingPrototypeFilter}.
     */
    export interface ModModSettingPrototypeFilter extends BaseModSettingPrototypeFilter {
        readonly filter: "mod";
        /**
         * The mod name
         */
        readonly mod: string;
    }
    /**
     * `"setting-type"` variant of {@link ModSettingPrototypeFilter}.
     */
    export interface SettingTypeModSettingPrototypeFilter extends BaseModSettingPrototypeFilter {
        readonly filter: "setting-type";
        /**
         * The setting scope type (`"startup"`, `"runtime-global"`, or `"runtime-per-user"`)
         */
        readonly type: "startup" | "runtime-global" | "runtime-per-user";
    }
    /**
     * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
     *
     * Base attributes: {@link BaseModSettingPrototypeFilter}
     *
     * Other attributes may be specified depending on `filter`:
     * - `"type"`: {@link TypeModSettingPrototypeFilter}
     * - `"mod"`: {@link ModModSettingPrototypeFilter}
     * - `"setting-type"`: {@link SettingTypeModSettingPrototypeFilter}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#ModSettingPrototypeFilter Online documentation}
     */
    export type ModSettingPrototypeFilter = TypeModSettingPrototypeFilter | ModModSettingPrototypeFilter | SettingTypeModSettingPrototypeFilter;
    /**
     * Common attributes to all variants of {@link TechnologyPrototypeFilter}.
     */
    export interface BaseTechnologyPrototypeFilter {
        /**
         * The condition to filter on. One of `"enabled"`, `"hidden"`, `"upgrade"`, `"visible-when-disabled"`, `"has-effects"`, `"has-prerequisites"`, `"research-unit-ingredient"`, `"unlocks-recipe"`, `"level"`, `"max-level"`, `"time"`.
         */
        readonly filter: "enabled" | "hidden" | "upgrade" | "visible-when-disabled" | "has-effects" | "has-prerequisites" | "research-unit-ingredient" | "unlocks-recipe" | "level" | "max-level" | "time";
        /**
         * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
         */
        readonly mode?: "or" | "and";
        /**
         * Inverts the condition. Default is `false`.
         */
        readonly invert?: boolean;
    }
    /**
     * `"research-unit-ingredient"` variant of {@link TechnologyPrototypeFilter}.
     */
    export interface ResearchUnitIngredientTechnologyPrototypeFilter extends BaseTechnologyPrototypeFilter {
        readonly filter: "research-unit-ingredient";
        /**
         * The research ingredient to check.
         */
        readonly ingredient: string;
    }
    /**
     * `"unlocks-recipe"` variant of {@link TechnologyPrototypeFilter}.
     */
    export interface UnlocksRecipeTechnologyPrototypeFilter extends BaseTechnologyPrototypeFilter {
        readonly filter: "unlocks-recipe";
        /**
         * The recipe to check.
         */
        readonly recipe: string;
    }
    /**
     * `"level"` variant of {@link TechnologyPrototypeFilter}.
     */
    export interface LevelTechnologyPrototypeFilter extends BaseTechnologyPrototypeFilter {
        readonly filter: "level";
        readonly comparison: ComparatorStringRead;
        /**
         * The value to compare against.
         */
        readonly value: uint;
    }
    export interface LevelTechnologyPrototypeFilterWrite extends BaseTechnologyPrototypeFilter {
        readonly filter: "level";
        readonly comparison: ComparatorString;
        /**
         * The value to compare against.
         */
        readonly value: uint;
    }
    /**
     * `"max-level"` variant of {@link TechnologyPrototypeFilter}.
     */
    export interface MaxLevelTechnologyPrototypeFilter extends BaseTechnologyPrototypeFilter {
        readonly filter: "max-level";
        readonly comparison: ComparatorStringRead;
        /**
         * The value to compare against.
         */
        readonly value: uint;
    }
    export interface MaxLevelTechnologyPrototypeFilterWrite extends BaseTechnologyPrototypeFilter {
        readonly filter: "max-level";
        readonly comparison: ComparatorString;
        /**
         * The value to compare against.
         */
        readonly value: uint;
    }
    /**
     * `"time"` variant of {@link TechnologyPrototypeFilter}.
     */
    export interface TimeTechnologyPrototypeFilter extends BaseTechnologyPrototypeFilter {
        readonly filter: "time";
        readonly comparison: ComparatorStringRead;
        /**
         * The value to compare against.
         */
        readonly value: uint;
    }
    export interface TimeTechnologyPrototypeFilterWrite extends BaseTechnologyPrototypeFilter {
        readonly filter: "time";
        readonly comparison: ComparatorString;
        /**
         * The value to compare against.
         */
        readonly value: uint;
    }
    /**
     * Variants of {@link TechnologyPrototypeFilter} with no additional attributes.
     */
    export interface OtherTechnologyPrototypeFilter extends BaseTechnologyPrototypeFilter {
        readonly filter: "enabled" | "hidden" | "upgrade" | "visible-when-disabled" | "has-effects" | "has-prerequisites";
    }
    /**
     * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
     *
     * Base attributes: {@link BaseTechnologyPrototypeFilter}
     *
     * Other attributes may be specified depending on `filter`:
     * - `"research-unit-ingredient"`: {@link ResearchUnitIngredientTechnologyPrototypeFilter}
     * - `"unlocks-recipe"`: {@link UnlocksRecipeTechnologyPrototypeFilter}
     * - `"level"`: {@link LevelTechnologyPrototypeFilter}
     * - `"max-level"`: {@link MaxLevelTechnologyPrototypeFilter}
     * - `"time"`: {@link TimeTechnologyPrototypeFilter}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#TechnologyPrototypeFilter Online documentation}
     */
    export type TechnologyPrototypeFilter = ResearchUnitIngredientTechnologyPrototypeFilter | UnlocksRecipeTechnologyPrototypeFilter | LevelTechnologyPrototypeFilter | MaxLevelTechnologyPrototypeFilter | TimeTechnologyPrototypeFilter | OtherTechnologyPrototypeFilter;
    /**
     * Write form of {@link TechnologyPrototypeFilter}, where table-or-array concepts are allowed to take an array form.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#TechnologyPrototypeFilter Online documentation}
     */
    export type TechnologyPrototypeFilterWrite = ResearchUnitIngredientTechnologyPrototypeFilter | UnlocksRecipeTechnologyPrototypeFilter | LevelTechnologyPrototypeFilterWrite | MaxLevelTechnologyPrototypeFilterWrite | TimeTechnologyPrototypeFilterWrite | OtherTechnologyPrototypeFilter;
    /**
     * Common attributes to all variants of {@link DecorativePrototypeFilter}.
     */
    export interface BaseDecorativePrototypeFilter {
        /**
         * The condition to filter on. One of `"decal"`, `"autoplace"`, `"collision-mask"`.
         */
        readonly filter: "decal" | "autoplace" | "collision-mask";
        /**
         * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
         */
        readonly mode?: "or" | "and";
        /**
         * Inverts the condition. Default is `false`.
         */
        readonly invert?: boolean;
    }
    /**
     * `"collision-mask"` variant of {@link DecorativePrototypeFilter}.
     */
    export interface CollisionMaskDecorativePrototypeFilter extends BaseDecorativePrototypeFilter {
        readonly filter: "collision-mask";
        readonly mask: CollisionMask | CollisionMaskWithFlags;
        /**
         * How to filter: `"collides"`, `"layers-equals"`, `"contains-any"` or `"contains-all"`
         */
        readonly mask_mode: "collides" | "layers-equals" | "contains-any" | "contains-all";
    }
    /**
     * Variants of {@link DecorativePrototypeFilter} with no additional attributes.
     */
    export interface OtherDecorativePrototypeFilter extends BaseDecorativePrototypeFilter {
        readonly filter: "decal" | "autoplace";
    }
    /**
     * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
     *
     * Base attributes: {@link BaseDecorativePrototypeFilter}
     *
     * Other attributes may be specified depending on `filter`:
     * - `"collision-mask"`: {@link CollisionMaskDecorativePrototypeFilter}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#DecorativePrototypeFilter Online documentation}
     */
    export type DecorativePrototypeFilter = CollisionMaskDecorativePrototypeFilter | OtherDecorativePrototypeFilter;
    /**
     * Common attributes to all variants of {@link AchievementPrototypeFilter}.
     */
    export interface BaseAchievementPrototypeFilter {
        /**
         * The condition to filter on. One of `"allowed-without-fight"`, `"type"`.
         */
        readonly filter: "allowed-without-fight" | "type";
        /**
         * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
         */
        readonly mode?: "or" | "and";
        /**
         * Inverts the condition. Default is `false`.
         */
        readonly invert?: boolean;
    }
    /**
     * `"type"` variant of {@link AchievementPrototypeFilter}.
     */
    export interface TypeAchievementPrototypeFilter extends BaseAchievementPrototypeFilter {
        readonly filter: "type";
        /**
         * The prototype type, or a list of acceptable types.
         */
        readonly type: string | string[];
    }
    /**
     * Variants of {@link AchievementPrototypeFilter} with no additional attributes.
     */
    export interface OtherAchievementPrototypeFilter extends BaseAchievementPrototypeFilter {
        readonly filter: "allowed-without-fight";
    }
    /**
     * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
     *
     * Base attributes: {@link BaseAchievementPrototypeFilter}
     *
     * Other attributes may be specified depending on `filter`:
     * - `"type"`: {@link TypeAchievementPrototypeFilter}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#AchievementPrototypeFilter Online documentation}
     */
    export type AchievementPrototypeFilter = TypeAchievementPrototypeFilter | OtherAchievementPrototypeFilter;
    /**
     * Common attributes to all variants of {@link FluidPrototypeFilter}.
     */
    export interface BaseFluidPrototypeFilter {
        /**
         * The condition to filter on. One of `"hidden"`, `"name"`, `"subgroup"`, `"default-temperature"`, `"max-temperature"`, `"heat-capacity"`, `"fuel-value"`, `"emissions-multiplier"`, `"gas-temperature"`.
         */
        readonly filter: "hidden" | "name" | "subgroup" | "default-temperature" | "max-temperature" | "heat-capacity" | "fuel-value" | "emissions-multiplier" | "gas-temperature";
        /**
         * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
         */
        readonly mode?: "or" | "and";
        /**
         * Inverts the condition. Default is `false`.
         */
        readonly invert?: boolean;
    }
    /**
     * `"name"` variant of {@link FluidPrototypeFilter}.
     *
     * For use within nested filters such as the `has-product-fluid` filter of array[{@link RecipePrototypeFilter}]. To get a specific prototype by name, see {@link LuaGameScript#fluid_prototypes LuaGameScript::fluid_prototypes}.
     */
    export interface NameFluidPrototypeFilter extends BaseFluidPrototypeFilter {
        readonly filter: "name";
        /**
         * The prototype name, or list of acceptable names.
         */
        readonly name: string | string[];
    }
    /**
     * `"subgroup"` variant of {@link FluidPrototypeFilter}.
     */
    export interface SubgroupFluidPrototypeFilter extends BaseFluidPrototypeFilter {
        readonly filter: "subgroup";
        /**
         * A {@link LuaGroup} (subgroup) name
         */
        readonly subgroup: string;
    }
    /**
     * `"default-temperature"` variant of {@link FluidPrototypeFilter}.
     */
    export interface DefaultTemperatureFluidPrototypeFilter extends BaseFluidPrototypeFilter {
        readonly filter: "default-temperature";
        readonly comparison: ComparatorStringRead;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    export interface DefaultTemperatureFluidPrototypeFilterWrite extends BaseFluidPrototypeFilter {
        readonly filter: "default-temperature";
        readonly comparison: ComparatorString;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    /**
     * `"max-temperature"` variant of {@link FluidPrototypeFilter}.
     */
    export interface MaxTemperatureFluidPrototypeFilter extends BaseFluidPrototypeFilter {
        readonly filter: "max-temperature";
        readonly comparison: ComparatorStringRead;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    export interface MaxTemperatureFluidPrototypeFilterWrite extends BaseFluidPrototypeFilter {
        readonly filter: "max-temperature";
        readonly comparison: ComparatorString;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    /**
     * `"heat-capacity"` variant of {@link FluidPrototypeFilter}.
     */
    export interface HeatCapacityFluidPrototypeFilter extends BaseFluidPrototypeFilter {
        readonly filter: "heat-capacity";
        readonly comparison: ComparatorStringRead;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    export interface HeatCapacityFluidPrototypeFilterWrite extends BaseFluidPrototypeFilter {
        readonly filter: "heat-capacity";
        readonly comparison: ComparatorString;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    /**
     * `"fuel-value"` variant of {@link FluidPrototypeFilter}.
     */
    export interface FuelValueFluidPrototypeFilter extends BaseFluidPrototypeFilter {
        readonly filter: "fuel-value";
        readonly comparison: ComparatorStringRead;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    export interface FuelValueFluidPrototypeFilterWrite extends BaseFluidPrototypeFilter {
        readonly filter: "fuel-value";
        readonly comparison: ComparatorString;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    /**
     * `"emissions-multiplier"` variant of {@link FluidPrototypeFilter}.
     */
    export interface EmissionsMultiplierFluidPrototypeFilter extends BaseFluidPrototypeFilter {
        readonly filter: "emissions-multiplier";
        readonly comparison: ComparatorStringRead;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    export interface EmissionsMultiplierFluidPrototypeFilterWrite extends BaseFluidPrototypeFilter {
        readonly filter: "emissions-multiplier";
        readonly comparison: ComparatorString;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    /**
     * `"gas-temperature"` variant of {@link FluidPrototypeFilter}.
     */
    export interface GasTemperatureFluidPrototypeFilter extends BaseFluidPrototypeFilter {
        readonly filter: "gas-temperature";
        readonly comparison: ComparatorStringRead;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    export interface GasTemperatureFluidPrototypeFilterWrite extends BaseFluidPrototypeFilter {
        readonly filter: "gas-temperature";
        readonly comparison: ComparatorString;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    /**
     * Variants of {@link FluidPrototypeFilter} with no additional attributes.
     */
    export interface OtherFluidPrototypeFilter extends BaseFluidPrototypeFilter {
        readonly filter: "hidden";
    }
    /**
     * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
     *
     * Base attributes: {@link BaseFluidPrototypeFilter}
     *
     * Other attributes may be specified depending on `filter`:
     * - `"name"`: {@link NameFluidPrototypeFilter}
     * - `"subgroup"`: {@link SubgroupFluidPrototypeFilter}
     * - `"default-temperature"`: {@link DefaultTemperatureFluidPrototypeFilter}
     * - `"max-temperature"`: {@link MaxTemperatureFluidPrototypeFilter}
     * - `"heat-capacity"`: {@link HeatCapacityFluidPrototypeFilter}
     * - `"fuel-value"`: {@link FuelValueFluidPrototypeFilter}
     * - `"emissions-multiplier"`: {@link EmissionsMultiplierFluidPrototypeFilter}
     * - `"gas-temperature"`: {@link GasTemperatureFluidPrototypeFilter}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#FluidPrototypeFilter Online documentation}
     */
    export type FluidPrototypeFilter = NameFluidPrototypeFilter | SubgroupFluidPrototypeFilter | DefaultTemperatureFluidPrototypeFilter | MaxTemperatureFluidPrototypeFilter | HeatCapacityFluidPrototypeFilter | FuelValueFluidPrototypeFilter | EmissionsMultiplierFluidPrototypeFilter | GasTemperatureFluidPrototypeFilter | OtherFluidPrototypeFilter;
    /**
     * Write form of {@link FluidPrototypeFilter}, where table-or-array concepts are allowed to take an array form.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#FluidPrototypeFilter Online documentation}
     */
    export type FluidPrototypeFilterWrite = NameFluidPrototypeFilter | SubgroupFluidPrototypeFilter | DefaultTemperatureFluidPrototypeFilterWrite | MaxTemperatureFluidPrototypeFilterWrite | HeatCapacityFluidPrototypeFilterWrite | FuelValueFluidPrototypeFilterWrite | EmissionsMultiplierFluidPrototypeFilterWrite | GasTemperatureFluidPrototypeFilterWrite | OtherFluidPrototypeFilter;
    /**
     * Common attributes to all variants of {@link EquipmentPrototypeFilter}.
     */
    export interface BaseEquipmentPrototypeFilter {
        /**
         * The condition to filter on. One of `"item-to-place"`, `"type"`.
         */
        readonly filter: "item-to-place" | "type";
        /**
         * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
         */
        readonly mode?: "or" | "and";
        /**
         * Inverts the condition. Default is `false`.
         */
        readonly invert?: boolean;
    }
    /**
     * `"type"` variant of {@link EquipmentPrototypeFilter}.
     */
    export interface TypeEquipmentPrototypeFilter extends BaseEquipmentPrototypeFilter {
        readonly filter: "type";
        /**
         * The prototype type, or a list of acceptable types.
         */
        readonly type: string | string[];
    }
    /**
     * Variants of {@link EquipmentPrototypeFilter} with no additional attributes.
     */
    export interface OtherEquipmentPrototypeFilter extends BaseEquipmentPrototypeFilter {
        readonly filter: "item-to-place";
    }
    /**
     * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
     *
     * Base attributes: {@link BaseEquipmentPrototypeFilter}
     *
     * Other attributes may be specified depending on `filter`:
     * - `"type"`: {@link TypeEquipmentPrototypeFilter}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#EquipmentPrototypeFilter Online documentation}
     */
    export type EquipmentPrototypeFilter = TypeEquipmentPrototypeFilter | OtherEquipmentPrototypeFilter;
    /**
     * Common attributes to all variants of {@link TilePrototypeFilter}.
     */
    export interface BaseTilePrototypeFilter {
        /**
         * The condition to filter on. One of `"minable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"collision-mask"`, `"walking-speed-modifier"`, `"vehicle-friction-modifier"`, `"decorative-removal-probability"`, `"emissions"`.
         */
        readonly filter: "minable" | "autoplace" | "blueprintable" | "item-to-place" | "collision-mask" | "walking-speed-modifier" | "vehicle-friction-modifier" | "decorative-removal-probability" | "emissions";
        /**
         * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
         */
        readonly mode?: "or" | "and";
        /**
         * Inverts the condition. Default is `false`.
         */
        readonly invert?: boolean;
    }
    /**
     * `"collision-mask"` variant of {@link TilePrototypeFilter}.
     */
    export interface CollisionMaskTilePrototypeFilter extends BaseTilePrototypeFilter {
        readonly filter: "collision-mask";
        readonly mask: CollisionMask | CollisionMaskWithFlags;
        /**
         * How to filter: `"collides"`, `"layers-equals"`, `"contains-any"` or `"contains-all"`
         */
        readonly mask_mode: "collides" | "layers-equals" | "contains-any" | "contains-all";
    }
    /**
     * `"walking-speed-modifier"` variant of {@link TilePrototypeFilter}.
     */
    export interface WalkingSpeedModifierTilePrototypeFilter extends BaseTilePrototypeFilter {
        readonly filter: "walking-speed-modifier";
        readonly comparison: ComparatorStringRead;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    export interface WalkingSpeedModifierTilePrototypeFilterWrite extends BaseTilePrototypeFilter {
        readonly filter: "walking-speed-modifier";
        readonly comparison: ComparatorString;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    /**
     * `"vehicle-friction-modifier"` variant of {@link TilePrototypeFilter}.
     */
    export interface VehicleFrictionModifierTilePrototypeFilter extends BaseTilePrototypeFilter {
        readonly filter: "vehicle-friction-modifier";
        readonly comparison: ComparatorStringRead;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    export interface VehicleFrictionModifierTilePrototypeFilterWrite extends BaseTilePrototypeFilter {
        readonly filter: "vehicle-friction-modifier";
        readonly comparison: ComparatorString;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    /**
     * `"decorative-removal-probability"` variant of {@link TilePrototypeFilter}.
     */
    export interface DecorativeRemovalProbabilityTilePrototypeFilter extends BaseTilePrototypeFilter {
        readonly filter: "decorative-removal-probability";
        readonly comparison: ComparatorStringRead;
        /**
         * The value to compare against.
         */
        readonly value: float;
    }
    export interface DecorativeRemovalProbabilityTilePrototypeFilterWrite extends BaseTilePrototypeFilter {
        readonly filter: "decorative-removal-probability";
        readonly comparison: ComparatorString;
        /**
         * The value to compare against.
         */
        readonly value: float;
    }
    /**
     * `"emissions"` variant of {@link TilePrototypeFilter}.
     */
    export interface EmissionsTilePrototypeFilter extends BaseTilePrototypeFilter {
        readonly filter: "emissions";
        readonly comparison: ComparatorStringRead;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    export interface EmissionsTilePrototypeFilterWrite extends BaseTilePrototypeFilter {
        readonly filter: "emissions";
        readonly comparison: ComparatorString;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    /**
     * Variants of {@link TilePrototypeFilter} with no additional attributes.
     */
    export interface OtherTilePrototypeFilter extends BaseTilePrototypeFilter {
        readonly filter: "minable" | "autoplace" | "blueprintable" | "item-to-place";
    }
    /**
     * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
     *
     * Base attributes: {@link BaseTilePrototypeFilter}
     *
     * Other attributes may be specified depending on `filter`:
     * - `"collision-mask"`: {@link CollisionMaskTilePrototypeFilter}
     * - `"walking-speed-modifier"`: {@link WalkingSpeedModifierTilePrototypeFilter}
     * - `"vehicle-friction-modifier"`: {@link VehicleFrictionModifierTilePrototypeFilter}
     * - `"decorative-removal-probability"`: {@link DecorativeRemovalProbabilityTilePrototypeFilter}
     * - `"emissions"`: {@link EmissionsTilePrototypeFilter}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#TilePrototypeFilter Online documentation}
     */
    export type TilePrototypeFilter = CollisionMaskTilePrototypeFilter | WalkingSpeedModifierTilePrototypeFilter | VehicleFrictionModifierTilePrototypeFilter | DecorativeRemovalProbabilityTilePrototypeFilter | EmissionsTilePrototypeFilter | OtherTilePrototypeFilter;
    /**
     * Write form of {@link TilePrototypeFilter}, where table-or-array concepts are allowed to take an array form.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#TilePrototypeFilter Online documentation}
     */
    export type TilePrototypeFilterWrite = CollisionMaskTilePrototypeFilter | WalkingSpeedModifierTilePrototypeFilterWrite | VehicleFrictionModifierTilePrototypeFilterWrite | DecorativeRemovalProbabilityTilePrototypeFilterWrite | EmissionsTilePrototypeFilterWrite | OtherTilePrototypeFilter;
    /**
     * Common attributes to all variants of {@link RecipePrototypeFilter}.
     */
    export interface BaseRecipePrototypeFilter {
        /**
         * The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`.
         */
        readonly filter: "enabled" | "hidden" | "hidden-from-flow-stats" | "hidden-from-player-crafting" | "allow-as-intermediate" | "allow-intermediates" | "allow-decomposition" | "always-show-made-in" | "always-show-products" | "show-amount-in-title" | "has-ingredients" | "has-products" | "has-ingredient-item" | "has-ingredient-fluid" | "has-product-item" | "has-product-fluid" | "subgroup" | "category" | "energy" | "emissions-multiplier" | "request-paste-multiplier" | "overload-multiplier";
        /**
         * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
         */
        readonly mode?: "or" | "and";
        /**
         * Inverts the condition. Default is `false`.
         */
        readonly invert?: boolean;
    }
    /**
     * `"has-ingredient-item"` variant of {@link RecipePrototypeFilter}.
     */
    export interface HasIngredientItemRecipePrototypeFilter extends BaseRecipePrototypeFilter {
        readonly filter: "has-ingredient-item";
        /**
         * Matches if at least 1 ingredient is an item that matches these filters.
         */
        readonly elem_filters?: ItemPrototypeFilter[];
    }
    export interface HasIngredientItemRecipePrototypeFilterWrite extends BaseRecipePrototypeFilter {
        readonly filter: "has-ingredient-item";
        /**
         * Matches if at least 1 ingredient is an item that matches these filters.
         */
        readonly elem_filters?: readonly ItemPrototypeFilterWrite[];
    }
    /**
     * `"has-ingredient-fluid"` variant of {@link RecipePrototypeFilter}.
     *
     * Usage example:
     *
     * ```
     * -- selects recipes that consume sulfuric acid
     * {{filter = "has-ingredient-fluid", elem_filters = {{filter = "name", name = "sulfuric-acid"}}}}
     * ```
     */
    export interface HasIngredientFluidRecipePrototypeFilter extends BaseRecipePrototypeFilter {
        readonly filter: "has-ingredient-fluid";
        /**
         * Matches if at least 1 ingredient is a fluid that matches these filters.
         */
        readonly elem_filters?: FluidPrototypeFilter[];
    }
    export interface HasIngredientFluidRecipePrototypeFilterWrite extends BaseRecipePrototypeFilter {
        readonly filter: "has-ingredient-fluid";
        /**
         * Matches if at least 1 ingredient is a fluid that matches these filters.
         */
        readonly elem_filters?: readonly FluidPrototypeFilterWrite[];
    }
    /**
     * `"has-product-item"` variant of {@link RecipePrototypeFilter}.
     *
     * Usage example:
     *
     * ```
     * -- selects recipes that produce an item
     * {{filter = "has-product-item"}}
     * -- selects recipes that produce iron plates
     * {{filter = "has-product-item", elem_filters = {{filter = "name", name = "iron-plate"}}}}
     * -- selects recipes that produce items that place furnaces
     * {{filter = "has-product-item", elem_filters = {{filter = "place-result", elem_filters = {{filter = "type", type = "furnace"}}}}}}
     * ```
     */
    export interface HasProductItemRecipePrototypeFilter extends BaseRecipePrototypeFilter {
        readonly filter: "has-product-item";
        /**
         * Matches if at least 1 product is an item that matches these filters.
         */
        readonly elem_filters?: ItemPrototypeFilter[];
    }
    export interface HasProductItemRecipePrototypeFilterWrite extends BaseRecipePrototypeFilter {
        readonly filter: "has-product-item";
        /**
         * Matches if at least 1 product is an item that matches these filters.
         */
        readonly elem_filters?: readonly ItemPrototypeFilterWrite[];
    }
    /**
     * `"has-product-fluid"` variant of {@link RecipePrototypeFilter}.
     */
    export interface HasProductFluidRecipePrototypeFilter extends BaseRecipePrototypeFilter {
        readonly filter: "has-product-fluid";
        /**
         * Matches if at least 1 product is a fluid that matches these filters.
         */
        readonly elem_filters?: FluidPrototypeFilter[];
    }
    export interface HasProductFluidRecipePrototypeFilterWrite extends BaseRecipePrototypeFilter {
        readonly filter: "has-product-fluid";
        /**
         * Matches if at least 1 product is a fluid that matches these filters.
         */
        readonly elem_filters?: readonly FluidPrototypeFilterWrite[];
    }
    /**
     * `"subgroup"` variant of {@link RecipePrototypeFilter}.
     */
    export interface SubgroupRecipePrototypeFilter extends BaseRecipePrototypeFilter {
        readonly filter: "subgroup";
        /**
         * A {@link LuaGroup} (subgroup) name
         */
        readonly subgroup: string;
    }
    /**
     * `"category"` variant of {@link RecipePrototypeFilter}.
     */
    export interface CategoryRecipePrototypeFilter extends BaseRecipePrototypeFilter {
        readonly filter: "category";
        /**
         * A {@link LuaRecipeCategoryPrototype} name
         */
        readonly category: string;
    }
    /**
     * `"energy"` variant of {@link RecipePrototypeFilter}.
     */
    export interface EnergyRecipePrototypeFilter extends BaseRecipePrototypeFilter {
        readonly filter: "energy";
        readonly comparison: ComparatorStringRead;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    export interface EnergyRecipePrototypeFilterWrite extends BaseRecipePrototypeFilter {
        readonly filter: "energy";
        readonly comparison: ComparatorString;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    /**
     * `"emissions-multiplier"` variant of {@link RecipePrototypeFilter}.
     */
    export interface EmissionsMultiplierRecipePrototypeFilter extends BaseRecipePrototypeFilter {
        readonly filter: "emissions-multiplier";
        readonly comparison: ComparatorStringRead;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    export interface EmissionsMultiplierRecipePrototypeFilterWrite extends BaseRecipePrototypeFilter {
        readonly filter: "emissions-multiplier";
        readonly comparison: ComparatorString;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    /**
     * `"request-paste-multiplier"` variant of {@link RecipePrototypeFilter}.
     */
    export interface RequestPasteMultiplierRecipePrototypeFilter extends BaseRecipePrototypeFilter {
        readonly filter: "request-paste-multiplier";
        readonly comparison: ComparatorStringRead;
        /**
         * The value to compare against.
         */
        readonly value: uint;
    }
    export interface RequestPasteMultiplierRecipePrototypeFilterWrite extends BaseRecipePrototypeFilter {
        readonly filter: "request-paste-multiplier";
        readonly comparison: ComparatorString;
        /**
         * The value to compare against.
         */
        readonly value: uint;
    }
    /**
     * `"overload-multiplier"` variant of {@link RecipePrototypeFilter}.
     */
    export interface OverloadMultiplierRecipePrototypeFilter extends BaseRecipePrototypeFilter {
        readonly filter: "overload-multiplier";
        readonly comparison: ComparatorStringRead;
        /**
         * The value to compare against.
         */
        readonly value: uint;
    }
    export interface OverloadMultiplierRecipePrototypeFilterWrite extends BaseRecipePrototypeFilter {
        readonly filter: "overload-multiplier";
        readonly comparison: ComparatorString;
        /**
         * The value to compare against.
         */
        readonly value: uint;
    }
    /**
     * Variants of {@link RecipePrototypeFilter} with no additional attributes.
     */
    export interface OtherRecipePrototypeFilter extends BaseRecipePrototypeFilter {
        readonly filter: "enabled" | "hidden" | "hidden-from-flow-stats" | "hidden-from-player-crafting" | "allow-as-intermediate" | "allow-intermediates" | "allow-decomposition" | "always-show-made-in" | "always-show-products" | "show-amount-in-title" | "has-ingredients" | "has-products";
    }
    /**
     * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
     *
     * Base attributes: {@link BaseRecipePrototypeFilter}
     *
     * Other attributes may be specified depending on `filter`:
     * - `"has-ingredient-item"`: {@link HasIngredientItemRecipePrototypeFilter}
     * - `"has-ingredient-fluid"`: {@link HasIngredientFluidRecipePrototypeFilter}
     * - `"has-product-item"`: {@link HasProductItemRecipePrototypeFilter}
     * - `"has-product-fluid"`: {@link HasProductFluidRecipePrototypeFilter}
     * - `"subgroup"`: {@link SubgroupRecipePrototypeFilter}
     * - `"category"`: {@link CategoryRecipePrototypeFilter}
     * - `"energy"`: {@link EnergyRecipePrototypeFilter}
     * - `"emissions-multiplier"`: {@link EmissionsMultiplierRecipePrototypeFilter}
     * - `"request-paste-multiplier"`: {@link RequestPasteMultiplierRecipePrototypeFilter}
     * - `"overload-multiplier"`: {@link OverloadMultiplierRecipePrototypeFilter}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#RecipePrototypeFilter Online documentation}
     */
    export type RecipePrototypeFilter = HasIngredientItemRecipePrototypeFilter | HasIngredientFluidRecipePrototypeFilter | HasProductItemRecipePrototypeFilter | HasProductFluidRecipePrototypeFilter | SubgroupRecipePrototypeFilter | CategoryRecipePrototypeFilter | EnergyRecipePrototypeFilter | EmissionsMultiplierRecipePrototypeFilter | RequestPasteMultiplierRecipePrototypeFilter | OverloadMultiplierRecipePrototypeFilter | OtherRecipePrototypeFilter;
    /**
     * Write form of {@link RecipePrototypeFilter}, where table-or-array concepts are allowed to take an array form.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#RecipePrototypeFilter Online documentation}
     */
    export type RecipePrototypeFilterWrite = HasIngredientItemRecipePrototypeFilterWrite | HasIngredientFluidRecipePrototypeFilterWrite | HasProductItemRecipePrototypeFilterWrite | HasProductFluidRecipePrototypeFilterWrite | SubgroupRecipePrototypeFilter | CategoryRecipePrototypeFilter | EnergyRecipePrototypeFilterWrite | EmissionsMultiplierRecipePrototypeFilterWrite | RequestPasteMultiplierRecipePrototypeFilterWrite | OverloadMultiplierRecipePrototypeFilterWrite | OtherRecipePrototypeFilter;
    /**
     * Common attributes to all variants of {@link EntityPrototypeFilter}.
     */
    export interface BaseEntityPrototypeFilter {
        /**
         * The condition to filter on. One of `"flying-robot"`, `"robot-with-logistics-interface"`, `"rail"`, `"ghost"`, `"explosion"`, `"vehicle"`, `"crafting-machine"`, `"rolling-stock"`, `"turret"`, `"transport-belt-connectable"`, `"wall-connectable"`, `"buildable"`, `"placable-in-editor"`, `"clonable"`, `"selectable"`, `"hidden"`, `"entity-with-health"`, `"building"`, `"fast-replaceable"`, `"uses-direction"`, `"minable"`, `"circuit-connectable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"name"`, `"type"`, `"collision-mask"`, `"flag"`, `"build-base-evolution-requirement"`, `"selection-priority"`, `"emissions"`, `"crafting-category"`.
         */
        readonly filter: "flying-robot" | "robot-with-logistics-interface" | "rail" | "ghost" | "explosion" | "vehicle" | "crafting-machine" | "rolling-stock" | "turret" | "transport-belt-connectable" | "wall-connectable" | "buildable" | "placable-in-editor" | "clonable" | "selectable" | "hidden" | "entity-with-health" | "building" | "fast-replaceable" | "uses-direction" | "minable" | "circuit-connectable" | "autoplace" | "blueprintable" | "item-to-place" | "name" | "type" | "collision-mask" | "flag" | "build-base-evolution-requirement" | "selection-priority" | "emissions" | "crafting-category";
        /**
         * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
         */
        readonly mode?: "or" | "and";
        /**
         * Inverts the condition. Default is `false`.
         */
        readonly invert?: boolean;
    }
    /**
     * `"name"` variant of {@link EntityPrototypeFilter}.
     *
     * For use within nested filters such as the `place-result` filter of array[{@link ItemPrototypeFilter}]. To get a specific prototype by name, see {@link LuaGameScript#entity_prototypes LuaGameScript::entity_prototypes}.
     */
    export interface NameEntityPrototypeFilter extends BaseEntityPrototypeFilter {
        readonly filter: "name";
        /**
         * The prototype name, or list of acceptable names.
         */
        readonly name: string | string[];
    }
    /**
     * `"type"` variant of {@link EntityPrototypeFilter}.
     *
     * Usage example:
     *
     * ```
     * game.get_filtered_entity_prototypes({{filter = "type", type = "unit"}})
     * ```
     */
    export interface TypeEntityPrototypeFilter extends BaseEntityPrototypeFilter {
        readonly filter: "type";
        /**
         * The prototype type, or a list of acceptable types.
         */
        readonly type: string | string[];
    }
    /**
     * `"collision-mask"` variant of {@link EntityPrototypeFilter}.
     *
     * Usage example:
     *
     * ```
     * game.get_filtered_entity_prototypes({{filter = "collision-mask", mask = "player-layer", mask_mode = "collides"}})
     * ```
     */
    export interface CollisionMaskEntityPrototypeFilter extends BaseEntityPrototypeFilter {
        readonly filter: "collision-mask";
        readonly mask: CollisionMask | CollisionMaskWithFlags;
        /**
         * How to filter: `"collides"`, `"layers-equals"`, `"contains-any"` or `"contains-all"`
         */
        readonly mask_mode: "collides" | "layers-equals" | "contains-any" | "contains-all";
    }
    /**
     * `"flag"` variant of {@link EntityPrototypeFilter}.
     *
     * Usage example:
     *
     * ```
     * game.get_filtered_entity_prototypes({{filter = "flag", flag = "placeable-player"}, {filter = "flag", flag = "placeable-enemy", mode = "and"}})
     * ```
     */
    export interface FlagEntityPrototypeFilter extends BaseEntityPrototypeFilter {
        readonly filter: "flag";
        /**
         * One of the values in {@link EntityPrototypeFlags}.
         */
        readonly flag: keyof EntityPrototypeFlags;
    }
    /**
     * `"build-base-evolution-requirement"` variant of {@link EntityPrototypeFilter}.
     */
    export interface BuildBaseEvolutionRequirementEntityPrototypeFilter extends BaseEntityPrototypeFilter {
        readonly filter: "build-base-evolution-requirement";
        readonly comparison: ComparatorStringRead;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    export interface BuildBaseEvolutionRequirementEntityPrototypeFilterWrite extends BaseEntityPrototypeFilter {
        readonly filter: "build-base-evolution-requirement";
        readonly comparison: ComparatorString;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    /**
     * `"selection-priority"` variant of {@link EntityPrototypeFilter}.
     */
    export interface SelectionPriorityEntityPrototypeFilter extends BaseEntityPrototypeFilter {
        readonly filter: "selection-priority";
        readonly comparison: ComparatorStringRead;
        /**
         * The value to compare against.
         */
        readonly value: uint8;
    }
    export interface SelectionPriorityEntityPrototypeFilterWrite extends BaseEntityPrototypeFilter {
        readonly filter: "selection-priority";
        readonly comparison: ComparatorString;
        /**
         * The value to compare against.
         */
        readonly value: uint8;
    }
    /**
     * `"emissions"` variant of {@link EntityPrototypeFilter}.
     */
    export interface EmissionsEntityPrototypeFilter extends BaseEntityPrototypeFilter {
        readonly filter: "emissions";
        readonly comparison: ComparatorStringRead;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    export interface EmissionsEntityPrototypeFilterWrite extends BaseEntityPrototypeFilter {
        readonly filter: "emissions";
        readonly comparison: ComparatorString;
        /**
         * The value to compare against.
         */
        readonly value: double;
    }
    /**
     * `"crafting-category"` variant of {@link EntityPrototypeFilter}.
     */
    export interface CraftingCategoryEntityPrototypeFilter extends BaseEntityPrototypeFilter {
        readonly filter: "crafting-category";
        /**
         * Matches if the prototype is for a crafting machine with this crafting category.
         */
        readonly crafting_category: string;
    }
    /**
     * Variants of {@link EntityPrototypeFilter} with no additional attributes.
     */
    export interface OtherEntityPrototypeFilter extends BaseEntityPrototypeFilter {
        readonly filter: "flying-robot" | "robot-with-logistics-interface" | "rail" | "ghost" | "explosion" | "vehicle" | "crafting-machine" | "rolling-stock" | "turret" | "transport-belt-connectable" | "wall-connectable" | "buildable" | "placable-in-editor" | "clonable" | "selectable" | "hidden" | "entity-with-health" | "building" | "fast-replaceable" | "uses-direction" | "minable" | "circuit-connectable" | "autoplace" | "blueprintable" | "item-to-place";
    }
    /**
     * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
     *
     * Base attributes: {@link BaseEntityPrototypeFilter}
     *
     * Other attributes may be specified depending on `filter`:
     * - `"name"`: {@link NameEntityPrototypeFilter}
     * - `"type"`: {@link TypeEntityPrototypeFilter}
     * - `"collision-mask"`: {@link CollisionMaskEntityPrototypeFilter}
     * - `"flag"`: {@link FlagEntityPrototypeFilter}
     * - `"build-base-evolution-requirement"`: {@link BuildBaseEvolutionRequirementEntityPrototypeFilter}
     * - `"selection-priority"`: {@link SelectionPriorityEntityPrototypeFilter}
     * - `"emissions"`: {@link EmissionsEntityPrototypeFilter}
     * - `"crafting-category"`: {@link CraftingCategoryEntityPrototypeFilter}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#EntityPrototypeFilter Online documentation}
     */
    export type EntityPrototypeFilter = NameEntityPrototypeFilter | TypeEntityPrototypeFilter | CollisionMaskEntityPrototypeFilter | FlagEntityPrototypeFilter | BuildBaseEvolutionRequirementEntityPrototypeFilter | SelectionPriorityEntityPrototypeFilter | EmissionsEntityPrototypeFilter | CraftingCategoryEntityPrototypeFilter | OtherEntityPrototypeFilter;
    /**
     * Write form of {@link EntityPrototypeFilter}, where table-or-array concepts are allowed to take an array form.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#EntityPrototypeFilter Online documentation}
     */
    export type EntityPrototypeFilterWrite = NameEntityPrototypeFilter | TypeEntityPrototypeFilter | CollisionMaskEntityPrototypeFilter | FlagEntityPrototypeFilter | BuildBaseEvolutionRequirementEntityPrototypeFilterWrite | SelectionPriorityEntityPrototypeFilterWrite | EmissionsEntityPrototypeFilterWrite | CraftingCategoryEntityPrototypeFilter | OtherEntityPrototypeFilter;
    /**
     * Used to filter out irrelevant event callbacks in a performant way.
     *
     * **Options:**
     * - {@link LuaEntityClonedEventFilter}
     * - LuaEntityDamagedEventFilter
     * - {@link LuaPlayerMinedEntityEventFilter}
     * - {@link LuaPreRobotMinedEntityEventFilter}
     * - {@link LuaRobotBuiltEntityEventFilter}
     * - {@link LuaPostEntityDiedEventFilter}
     * - {@link LuaEntityDiedEventFilter}
     * - {@link LuaScriptRaisedReviveEventFilter}
     * - {@link LuaPrePlayerMinedEntityEventFilter}
     * - {@link LuaEntityMarkedForDeconstructionEventFilter}
     * - {@link LuaPreGhostDeconstructedEventFilter}
     * - {@link LuaPreGhostUpgradedEventFilter}
     * - {@link LuaEntityDeconstructionCancelledEventFilter}
     * - {@link LuaEntityMarkedForUpgradeEventFilter}
     * - {@link LuaSectorScannedEventFilter}
     * - {@link LuaRobotMinedEntityEventFilter}
     * - {@link LuaScriptRaisedDestroyEventFilter}
     * - {@link LuaUpgradeCancelledEventFilter}
     * - {@link LuaScriptRaisedBuiltEventFilter}
     * - {@link LuaPlayerBuiltEntityEventFilter}
     * - {@link LuaPlayerRepairedEntityEventFilter}
     * @see EventFilterWrite
     * @remarks Filters are always used as an array of filters of a specific type. Every filter can only be used with its corresponding event, and different types of event filters can not be mixed.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#EventFilter Online documentation}
     */
    export type EventFilter = (LuaEntityClonedEventFilter | LuaEntityDamagedEventFilter | LuaPlayerMinedEntityEventFilter | LuaPreRobotMinedEntityEventFilter | LuaRobotBuiltEntityEventFilter | LuaPostEntityDiedEventFilter | LuaEntityDiedEventFilter | LuaScriptRaisedReviveEventFilter | LuaPrePlayerMinedEntityEventFilter | LuaEntityMarkedForDeconstructionEventFilter | LuaPreGhostDeconstructedEventFilter | LuaPreGhostUpgradedEventFilter | LuaEntityDeconstructionCancelledEventFilter | LuaEntityMarkedForUpgradeEventFilter | LuaSectorScannedEventFilter | LuaRobotMinedEntityEventFilter | LuaScriptRaisedDestroyEventFilter | LuaUpgradeCancelledEventFilter | LuaScriptRaisedBuiltEventFilter | LuaPlayerBuiltEntityEventFilter | LuaPlayerRepairedEntityEventFilter)[];
    /**
     * Write form of {@link EventFilter}, where table-or-array concepts are allowed to take an array form.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#EventFilter Online documentation}
     */
    export type EventFilterWrite = readonly (LuaEntityClonedEventFilter | LuaEntityDamagedEventFilterWrite | LuaPlayerMinedEntityEventFilter | LuaPreRobotMinedEntityEventFilter | LuaRobotBuiltEntityEventFilter | LuaPostEntityDiedEventFilter | LuaEntityDiedEventFilter | LuaScriptRaisedReviveEventFilter | LuaPrePlayerMinedEntityEventFilter | LuaEntityMarkedForDeconstructionEventFilter | LuaPreGhostDeconstructedEventFilter | LuaPreGhostUpgradedEventFilter | LuaEntityDeconstructionCancelledEventFilter | LuaEntityMarkedForUpgradeEventFilter | LuaSectorScannedEventFilter | LuaRobotMinedEntityEventFilter | LuaScriptRaisedDestroyEventFilter | LuaUpgradeCancelledEventFilter | LuaScriptRaisedBuiltEventFilter | LuaPlayerBuiltEntityEventFilter | LuaPlayerRepairedEntityEventFilter)[];
    export interface RollingStockDrawData {
        readonly position: MapPosition;
        readonly orientaton: RealOrientation;
    }
    /**
     * Common attributes to all variants of {@link LuaScriptRaisedReviveEventFilter}.
     */
    export interface BaseScriptRaisedReviveEventFilter {
        /**
         * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
         */
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable" | "type" | "name" | "ghost_type" | "ghost_name";
        /**
         * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
         */
        readonly mode?: "or" | "and";
        /**
         * Inverts the condition. Default is `false`.
         */
        readonly invert?: boolean;
    }
    /**
     * `"type"` variant of {@link LuaScriptRaisedReviveEventFilter}.
     */
    export interface TypeScriptRaisedReviveEventFilter extends BaseScriptRaisedReviveEventFilter {
        readonly filter: "type";
        /**
         * The prototype type
         */
        readonly type: string;
    }
    /**
     * `"name"` variant of {@link LuaScriptRaisedReviveEventFilter}.
     */
    export interface NameScriptRaisedReviveEventFilter extends BaseScriptRaisedReviveEventFilter {
        readonly filter: "name";
        /**
         * The prototype name
         */
        readonly name: string;
    }
    /**
     * `"ghost_type"` variant of {@link LuaScriptRaisedReviveEventFilter}.
     */
    export interface GhostTypeScriptRaisedReviveEventFilter extends BaseScriptRaisedReviveEventFilter {
        readonly filter: "ghost_type";
        /**
         * The ghost prototype type
         */
        readonly type: string;
    }
    /**
     * `"ghost_name"` variant of {@link LuaScriptRaisedReviveEventFilter}.
     */
    export interface GhostNameScriptRaisedReviveEventFilter extends BaseScriptRaisedReviveEventFilter {
        readonly filter: "ghost_name";
        /**
         * The ghost prototype name
         */
        readonly name: string;
    }
    /**
     * Variants of {@link LuaScriptRaisedReviveEventFilter} with no additional attributes.
     */
    export interface OtherScriptRaisedReviveEventFilter extends BaseScriptRaisedReviveEventFilter {
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable";
    }
    /**
     * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
     *
     * Base attributes: {@link BaseScriptRaisedReviveEventFilter}
     *
     * Other attributes may be specified depending on `filter`:
     * - `"type"`: {@link TypeScriptRaisedReviveEventFilter}
     * - `"name"`: {@link NameScriptRaisedReviveEventFilter}
     * - `"ghost_type"`: {@link GhostTypeScriptRaisedReviveEventFilter}
     * - `"ghost_name"`: {@link GhostNameScriptRaisedReviveEventFilter}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#LuaScriptRaisedReviveEventFilter Online documentation}
     */
    export type LuaScriptRaisedReviveEventFilter = TypeScriptRaisedReviveEventFilter | NameScriptRaisedReviveEventFilter | GhostTypeScriptRaisedReviveEventFilter | GhostNameScriptRaisedReviveEventFilter | OtherScriptRaisedReviveEventFilter;
    /**
     * Common attributes to all variants of {@link LuaEntityDiedEventFilter}.
     */
    export interface BaseEntityDiedEventFilter {
        /**
         * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
         */
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable" | "type" | "name" | "ghost_type" | "ghost_name";
        /**
         * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
         */
        readonly mode?: "or" | "and";
        /**
         * Inverts the condition. Default is `false`.
         */
        readonly invert?: boolean;
    }
    /**
     * `"type"` variant of {@link LuaEntityDiedEventFilter}.
     */
    export interface TypeEntityDiedEventFilter extends BaseEntityDiedEventFilter {
        readonly filter: "type";
        /**
         * The prototype type
         */
        readonly type: string;
    }
    /**
     * `"name"` variant of {@link LuaEntityDiedEventFilter}.
     */
    export interface NameEntityDiedEventFilter extends BaseEntityDiedEventFilter {
        readonly filter: "name";
        /**
         * The prototype name
         */
        readonly name: string;
    }
    /**
     * `"ghost_type"` variant of {@link LuaEntityDiedEventFilter}.
     */
    export interface GhostTypeEntityDiedEventFilter extends BaseEntityDiedEventFilter {
        readonly filter: "ghost_type";
        /**
         * The ghost prototype type
         */
        readonly type: string;
    }
    /**
     * `"ghost_name"` variant of {@link LuaEntityDiedEventFilter}.
     */
    export interface GhostNameEntityDiedEventFilter extends BaseEntityDiedEventFilter {
        readonly filter: "ghost_name";
        /**
         * The ghost prototype name
         */
        readonly name: string;
    }
    /**
     * Variants of {@link LuaEntityDiedEventFilter} with no additional attributes.
     */
    export interface OtherEntityDiedEventFilter extends BaseEntityDiedEventFilter {
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable";
    }
    /**
     * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
     *
     * Base attributes: {@link BaseEntityDiedEventFilter}
     *
     * Other attributes may be specified depending on `filter`:
     * - `"type"`: {@link TypeEntityDiedEventFilter}
     * - `"name"`: {@link NameEntityDiedEventFilter}
     * - `"ghost_type"`: {@link GhostTypeEntityDiedEventFilter}
     * - `"ghost_name"`: {@link GhostNameEntityDiedEventFilter}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#LuaEntityDiedEventFilter Online documentation}
     */
    export type LuaEntityDiedEventFilter = TypeEntityDiedEventFilter | NameEntityDiedEventFilter | GhostTypeEntityDiedEventFilter | GhostNameEntityDiedEventFilter | OtherEntityDiedEventFilter;
    /**
     * Common attributes to all variants of {@link LuaEntityMarkedForDeconstructionEventFilter}.
     */
    export interface BaseEntityMarkedForDeconstructionEventFilter {
        /**
         * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
         */
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable" | "type" | "name" | "ghost_type" | "ghost_name";
        /**
         * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
         */
        readonly mode?: "or" | "and";
        /**
         * Inverts the condition. Default is `false`.
         */
        readonly invert?: boolean;
    }
    /**
     * `"type"` variant of {@link LuaEntityMarkedForDeconstructionEventFilter}.
     */
    export interface TypeEntityMarkedForDeconstructionEventFilter extends BaseEntityMarkedForDeconstructionEventFilter {
        readonly filter: "type";
        /**
         * The prototype type
         */
        readonly type: string;
    }
    /**
     * `"name"` variant of {@link LuaEntityMarkedForDeconstructionEventFilter}.
     */
    export interface NameEntityMarkedForDeconstructionEventFilter extends BaseEntityMarkedForDeconstructionEventFilter {
        readonly filter: "name";
        /**
         * The prototype name
         */
        readonly name: string;
    }
    /**
     * `"ghost_type"` variant of {@link LuaEntityMarkedForDeconstructionEventFilter}.
     */
    export interface GhostTypeEntityMarkedForDeconstructionEventFilter extends BaseEntityMarkedForDeconstructionEventFilter {
        readonly filter: "ghost_type";
        /**
         * The ghost prototype type
         */
        readonly type: string;
    }
    /**
     * `"ghost_name"` variant of {@link LuaEntityMarkedForDeconstructionEventFilter}.
     */
    export interface GhostNameEntityMarkedForDeconstructionEventFilter extends BaseEntityMarkedForDeconstructionEventFilter {
        readonly filter: "ghost_name";
        /**
         * The ghost prototype name
         */
        readonly name: string;
    }
    /**
     * Variants of {@link LuaEntityMarkedForDeconstructionEventFilter} with no additional attributes.
     */
    export interface OtherEntityMarkedForDeconstructionEventFilter extends BaseEntityMarkedForDeconstructionEventFilter {
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable";
    }
    /**
     * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
     *
     * Base attributes: {@link BaseEntityMarkedForDeconstructionEventFilter}
     *
     * Other attributes may be specified depending on `filter`:
     * - `"type"`: {@link TypeEntityMarkedForDeconstructionEventFilter}
     * - `"name"`: {@link NameEntityMarkedForDeconstructionEventFilter}
     * - `"ghost_type"`: {@link GhostTypeEntityMarkedForDeconstructionEventFilter}
     * - `"ghost_name"`: {@link GhostNameEntityMarkedForDeconstructionEventFilter}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#LuaEntityMarkedForDeconstructionEventFilter Online documentation}
     */
    export type LuaEntityMarkedForDeconstructionEventFilter = TypeEntityMarkedForDeconstructionEventFilter | NameEntityMarkedForDeconstructionEventFilter | GhostTypeEntityMarkedForDeconstructionEventFilter | GhostNameEntityMarkedForDeconstructionEventFilter | OtherEntityMarkedForDeconstructionEventFilter;
    /**
     * Common attributes to all variants of {@link LuaPreGhostDeconstructedEventFilter}.
     */
    export interface BasePreGhostDeconstructedEventFilter {
        /**
         * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
         */
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable" | "type" | "name" | "ghost_type" | "ghost_name";
        /**
         * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
         */
        readonly mode?: "or" | "and";
        /**
         * Inverts the condition. Default is `false`.
         */
        readonly invert?: boolean;
    }
    /**
     * `"type"` variant of {@link LuaPreGhostDeconstructedEventFilter}.
     */
    export interface TypePreGhostDeconstructedEventFilter extends BasePreGhostDeconstructedEventFilter {
        readonly filter: "type";
        /**
         * The prototype type
         */
        readonly type: string;
    }
    /**
     * `"name"` variant of {@link LuaPreGhostDeconstructedEventFilter}.
     */
    export interface NamePreGhostDeconstructedEventFilter extends BasePreGhostDeconstructedEventFilter {
        readonly filter: "name";
        /**
         * The prototype name
         */
        readonly name: string;
    }
    /**
     * `"ghost_type"` variant of {@link LuaPreGhostDeconstructedEventFilter}.
     */
    export interface GhostTypePreGhostDeconstructedEventFilter extends BasePreGhostDeconstructedEventFilter {
        readonly filter: "ghost_type";
        /**
         * The ghost prototype type
         */
        readonly type: string;
    }
    /**
     * `"ghost_name"` variant of {@link LuaPreGhostDeconstructedEventFilter}.
     */
    export interface GhostNamePreGhostDeconstructedEventFilter extends BasePreGhostDeconstructedEventFilter {
        readonly filter: "ghost_name";
        /**
         * The ghost prototype name
         */
        readonly name: string;
    }
    /**
     * Variants of {@link LuaPreGhostDeconstructedEventFilter} with no additional attributes.
     */
    export interface OtherPreGhostDeconstructedEventFilter extends BasePreGhostDeconstructedEventFilter {
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable";
    }
    /**
     * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
     *
     * Base attributes: {@link BasePreGhostDeconstructedEventFilter}
     *
     * Other attributes may be specified depending on `filter`:
     * - `"type"`: {@link TypePreGhostDeconstructedEventFilter}
     * - `"name"`: {@link NamePreGhostDeconstructedEventFilter}
     * - `"ghost_type"`: {@link GhostTypePreGhostDeconstructedEventFilter}
     * - `"ghost_name"`: {@link GhostNamePreGhostDeconstructedEventFilter}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#LuaPreGhostDeconstructedEventFilter Online documentation}
     */
    export type LuaPreGhostDeconstructedEventFilter = TypePreGhostDeconstructedEventFilter | NamePreGhostDeconstructedEventFilter | GhostTypePreGhostDeconstructedEventFilter | GhostNamePreGhostDeconstructedEventFilter | OtherPreGhostDeconstructedEventFilter;
    /**
     * Common attributes to all variants of {@link LuaScriptRaisedDestroyEventFilter}.
     */
    export interface BaseScriptRaisedDestroyEventFilter {
        /**
         * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
         */
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable" | "type" | "name" | "ghost_type" | "ghost_name";
        /**
         * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
         */
        readonly mode?: "or" | "and";
        /**
         * Inverts the condition. Default is `false`.
         */
        readonly invert?: boolean;
    }
    /**
     * `"type"` variant of {@link LuaScriptRaisedDestroyEventFilter}.
     */
    export interface TypeScriptRaisedDestroyEventFilter extends BaseScriptRaisedDestroyEventFilter {
        readonly filter: "type";
        /**
         * The prototype type
         */
        readonly type: string;
    }
    /**
     * `"name"` variant of {@link LuaScriptRaisedDestroyEventFilter}.
     */
    export interface NameScriptRaisedDestroyEventFilter extends BaseScriptRaisedDestroyEventFilter {
        readonly filter: "name";
        /**
         * The prototype name
         */
        readonly name: string;
    }
    /**
     * `"ghost_type"` variant of {@link LuaScriptRaisedDestroyEventFilter}.
     */
    export interface GhostTypeScriptRaisedDestroyEventFilter extends BaseScriptRaisedDestroyEventFilter {
        readonly filter: "ghost_type";
        /**
         * The ghost prototype type
         */
        readonly type: string;
    }
    /**
     * `"ghost_name"` variant of {@link LuaScriptRaisedDestroyEventFilter}.
     */
    export interface GhostNameScriptRaisedDestroyEventFilter extends BaseScriptRaisedDestroyEventFilter {
        readonly filter: "ghost_name";
        /**
         * The ghost prototype name
         */
        readonly name: string;
    }
    /**
     * Variants of {@link LuaScriptRaisedDestroyEventFilter} with no additional attributes.
     */
    export interface OtherScriptRaisedDestroyEventFilter extends BaseScriptRaisedDestroyEventFilter {
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable";
    }
    /**
     * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
     *
     * Base attributes: {@link BaseScriptRaisedDestroyEventFilter}
     *
     * Other attributes may be specified depending on `filter`:
     * - `"type"`: {@link TypeScriptRaisedDestroyEventFilter}
     * - `"name"`: {@link NameScriptRaisedDestroyEventFilter}
     * - `"ghost_type"`: {@link GhostTypeScriptRaisedDestroyEventFilter}
     * - `"ghost_name"`: {@link GhostNameScriptRaisedDestroyEventFilter}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#LuaScriptRaisedDestroyEventFilter Online documentation}
     */
    export type LuaScriptRaisedDestroyEventFilter = TypeScriptRaisedDestroyEventFilter | NameScriptRaisedDestroyEventFilter | GhostTypeScriptRaisedDestroyEventFilter | GhostNameScriptRaisedDestroyEventFilter | OtherScriptRaisedDestroyEventFilter;
    /**
     * Common attributes to all variants of {@link LuaUpgradeCancelledEventFilter}.
     */
    export interface BaseUpgradeCancelledEventFilter {
        /**
         * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
         */
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable" | "type" | "name" | "ghost_type" | "ghost_name";
        /**
         * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
         */
        readonly mode?: "or" | "and";
        /**
         * Inverts the condition. Default is `false`.
         */
        readonly invert?: boolean;
    }
    /**
     * `"type"` variant of {@link LuaUpgradeCancelledEventFilter}.
     */
    export interface TypeUpgradeCancelledEventFilter extends BaseUpgradeCancelledEventFilter {
        readonly filter: "type";
        /**
         * The prototype type
         */
        readonly type: string;
    }
    /**
     * `"name"` variant of {@link LuaUpgradeCancelledEventFilter}.
     */
    export interface NameUpgradeCancelledEventFilter extends BaseUpgradeCancelledEventFilter {
        readonly filter: "name";
        /**
         * The prototype name
         */
        readonly name: string;
    }
    /**
     * `"ghost_type"` variant of {@link LuaUpgradeCancelledEventFilter}.
     */
    export interface GhostTypeUpgradeCancelledEventFilter extends BaseUpgradeCancelledEventFilter {
        readonly filter: "ghost_type";
        /**
         * The ghost prototype type
         */
        readonly type: string;
    }
    /**
     * `"ghost_name"` variant of {@link LuaUpgradeCancelledEventFilter}.
     */
    export interface GhostNameUpgradeCancelledEventFilter extends BaseUpgradeCancelledEventFilter {
        readonly filter: "ghost_name";
        /**
         * The ghost prototype name
         */
        readonly name: string;
    }
    /**
     * Variants of {@link LuaUpgradeCancelledEventFilter} with no additional attributes.
     */
    export interface OtherUpgradeCancelledEventFilter extends BaseUpgradeCancelledEventFilter {
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable";
    }
    /**
     * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
     *
     * Base attributes: {@link BaseUpgradeCancelledEventFilter}
     *
     * Other attributes may be specified depending on `filter`:
     * - `"type"`: {@link TypeUpgradeCancelledEventFilter}
     * - `"name"`: {@link NameUpgradeCancelledEventFilter}
     * - `"ghost_type"`: {@link GhostTypeUpgradeCancelledEventFilter}
     * - `"ghost_name"`: {@link GhostNameUpgradeCancelledEventFilter}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#LuaUpgradeCancelledEventFilter Online documentation}
     */
    export type LuaUpgradeCancelledEventFilter = TypeUpgradeCancelledEventFilter | NameUpgradeCancelledEventFilter | GhostTypeUpgradeCancelledEventFilter | GhostNameUpgradeCancelledEventFilter | OtherUpgradeCancelledEventFilter;
    /**
     * Common attributes to all variants of {@link LuaPlayerRepairedEntityEventFilter}.
     */
    export interface BasePlayerRepairedEntityEventFilter {
        /**
         * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
         */
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable" | "type" | "name" | "ghost_type" | "ghost_name";
        /**
         * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
         */
        readonly mode?: "or" | "and";
        /**
         * Inverts the condition. Default is `false`.
         */
        readonly invert?: boolean;
    }
    /**
     * `"type"` variant of {@link LuaPlayerRepairedEntityEventFilter}.
     */
    export interface TypePlayerRepairedEntityEventFilter extends BasePlayerRepairedEntityEventFilter {
        readonly filter: "type";
        /**
         * The prototype type
         */
        readonly type: string;
    }
    /**
     * `"name"` variant of {@link LuaPlayerRepairedEntityEventFilter}.
     */
    export interface NamePlayerRepairedEntityEventFilter extends BasePlayerRepairedEntityEventFilter {
        readonly filter: "name";
        /**
         * The prototype name
         */
        readonly name: string;
    }
    /**
     * `"ghost_type"` variant of {@link LuaPlayerRepairedEntityEventFilter}.
     */
    export interface GhostTypePlayerRepairedEntityEventFilter extends BasePlayerRepairedEntityEventFilter {
        readonly filter: "ghost_type";
        /**
         * The ghost prototype type
         */
        readonly type: string;
    }
    /**
     * `"ghost_name"` variant of {@link LuaPlayerRepairedEntityEventFilter}.
     */
    export interface GhostNamePlayerRepairedEntityEventFilter extends BasePlayerRepairedEntityEventFilter {
        readonly filter: "ghost_name";
        /**
         * The ghost prototype name
         */
        readonly name: string;
    }
    /**
     * Variants of {@link LuaPlayerRepairedEntityEventFilter} with no additional attributes.
     */
    export interface OtherPlayerRepairedEntityEventFilter extends BasePlayerRepairedEntityEventFilter {
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable";
    }
    /**
     * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
     *
     * Base attributes: {@link BasePlayerRepairedEntityEventFilter}
     *
     * Other attributes may be specified depending on `filter`:
     * - `"type"`: {@link TypePlayerRepairedEntityEventFilter}
     * - `"name"`: {@link NamePlayerRepairedEntityEventFilter}
     * - `"ghost_type"`: {@link GhostTypePlayerRepairedEntityEventFilter}
     * - `"ghost_name"`: {@link GhostNamePlayerRepairedEntityEventFilter}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#LuaPlayerRepairedEntityEventFilter Online documentation}
     */
    export type LuaPlayerRepairedEntityEventFilter = TypePlayerRepairedEntityEventFilter | NamePlayerRepairedEntityEventFilter | GhostTypePlayerRepairedEntityEventFilter | GhostNamePlayerRepairedEntityEventFilter | OtherPlayerRepairedEntityEventFilter;
    /**
     * Common attributes to all variants of {@link LuaScriptRaisedTeleportedEventFilter}.
     */
    export interface BaseScriptRaisedTeleportedEventFilter {
        /**
         * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
         */
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable" | "type" | "name" | "ghost_type" | "ghost_name";
        /**
         * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
         */
        readonly mode?: "or" | "and";
        /**
         * Inverts the condition. Default is `false`.
         */
        readonly invert?: boolean;
    }
    /**
     * `"type"` variant of {@link LuaScriptRaisedTeleportedEventFilter}.
     */
    export interface TypeScriptRaisedTeleportedEventFilter extends BaseScriptRaisedTeleportedEventFilter {
        readonly filter: "type";
        /**
         * The prototype type
         */
        readonly type: string;
    }
    /**
     * `"name"` variant of {@link LuaScriptRaisedTeleportedEventFilter}.
     */
    export interface NameScriptRaisedTeleportedEventFilter extends BaseScriptRaisedTeleportedEventFilter {
        readonly filter: "name";
        /**
         * The prototype name
         */
        readonly name: string;
    }
    /**
     * `"ghost_type"` variant of {@link LuaScriptRaisedTeleportedEventFilter}.
     */
    export interface GhostTypeScriptRaisedTeleportedEventFilter extends BaseScriptRaisedTeleportedEventFilter {
        readonly filter: "ghost_type";
        /**
         * The ghost prototype type
         */
        readonly type: string;
    }
    /**
     * `"ghost_name"` variant of {@link LuaScriptRaisedTeleportedEventFilter}.
     */
    export interface GhostNameScriptRaisedTeleportedEventFilter extends BaseScriptRaisedTeleportedEventFilter {
        readonly filter: "ghost_name";
        /**
         * The ghost prototype name
         */
        readonly name: string;
    }
    /**
     * Variants of {@link LuaScriptRaisedTeleportedEventFilter} with no additional attributes.
     */
    export interface OtherScriptRaisedTeleportedEventFilter extends BaseScriptRaisedTeleportedEventFilter {
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable";
    }
    /**
     * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
     *
     * Base attributes: {@link BaseScriptRaisedTeleportedEventFilter}
     *
     * Other attributes may be specified depending on `filter`:
     * - `"type"`: {@link TypeScriptRaisedTeleportedEventFilter}
     * - `"name"`: {@link NameScriptRaisedTeleportedEventFilter}
     * - `"ghost_type"`: {@link GhostTypeScriptRaisedTeleportedEventFilter}
     * - `"ghost_name"`: {@link GhostNameScriptRaisedTeleportedEventFilter}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#LuaScriptRaisedTeleportedEventFilter Online documentation}
     */
    export type LuaScriptRaisedTeleportedEventFilter = TypeScriptRaisedTeleportedEventFilter | NameScriptRaisedTeleportedEventFilter | GhostTypeScriptRaisedTeleportedEventFilter | GhostNameScriptRaisedTeleportedEventFilter | OtherScriptRaisedTeleportedEventFilter;
    /**
     * Common attributes to all variants of {@link LuaEntityMarkedForUpgradeEventFilter}.
     */
    export interface BaseEntityMarkedForUpgradeEventFilter {
        /**
         * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
         */
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable" | "type" | "name" | "ghost_type" | "ghost_name";
        /**
         * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
         */
        readonly mode?: "or" | "and";
        /**
         * Inverts the condition. Default is `false`.
         */
        readonly invert?: boolean;
    }
    /**
     * `"type"` variant of {@link LuaEntityMarkedForUpgradeEventFilter}.
     */
    export interface TypeEntityMarkedForUpgradeEventFilter extends BaseEntityMarkedForUpgradeEventFilter {
        readonly filter: "type";
        /**
         * The prototype type
         */
        readonly type: string;
    }
    /**
     * `"name"` variant of {@link LuaEntityMarkedForUpgradeEventFilter}.
     */
    export interface NameEntityMarkedForUpgradeEventFilter extends BaseEntityMarkedForUpgradeEventFilter {
        readonly filter: "name";
        /**
         * The prototype name
         */
        readonly name: string;
    }
    /**
     * `"ghost_type"` variant of {@link LuaEntityMarkedForUpgradeEventFilter}.
     */
    export interface GhostTypeEntityMarkedForUpgradeEventFilter extends BaseEntityMarkedForUpgradeEventFilter {
        readonly filter: "ghost_type";
        /**
         * The ghost prototype type
         */
        readonly type: string;
    }
    /**
     * `"ghost_name"` variant of {@link LuaEntityMarkedForUpgradeEventFilter}.
     */
    export interface GhostNameEntityMarkedForUpgradeEventFilter extends BaseEntityMarkedForUpgradeEventFilter {
        readonly filter: "ghost_name";
        /**
         * The ghost prototype name
         */
        readonly name: string;
    }
    /**
     * Variants of {@link LuaEntityMarkedForUpgradeEventFilter} with no additional attributes.
     */
    export interface OtherEntityMarkedForUpgradeEventFilter extends BaseEntityMarkedForUpgradeEventFilter {
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable";
    }
    /**
     * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
     *
     * Base attributes: {@link BaseEntityMarkedForUpgradeEventFilter}
     *
     * Other attributes may be specified depending on `filter`:
     * - `"type"`: {@link TypeEntityMarkedForUpgradeEventFilter}
     * - `"name"`: {@link NameEntityMarkedForUpgradeEventFilter}
     * - `"ghost_type"`: {@link GhostTypeEntityMarkedForUpgradeEventFilter}
     * - `"ghost_name"`: {@link GhostNameEntityMarkedForUpgradeEventFilter}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#LuaEntityMarkedForUpgradeEventFilter Online documentation}
     */
    export type LuaEntityMarkedForUpgradeEventFilter = TypeEntityMarkedForUpgradeEventFilter | NameEntityMarkedForUpgradeEventFilter | GhostTypeEntityMarkedForUpgradeEventFilter | GhostNameEntityMarkedForUpgradeEventFilter | OtherEntityMarkedForUpgradeEventFilter;
    /**
     * Common attributes to all variants of {@link LuaPostEntityDiedEventFilter}.
     */
    export interface BasePostEntityDiedEventFilter {
        /**
         * The condition to filter on. Can only be `"type"`.
         */
        readonly filter: "type";
        /**
         * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
         */
        readonly mode?: "or" | "and";
        /**
         * Inverts the condition. Default is `false`.
         */
        readonly invert?: boolean;
    }
    /**
     * `"type"` variant of {@link LuaPostEntityDiedEventFilter}.
     */
    export interface TypePostEntityDiedEventFilter extends BasePostEntityDiedEventFilter {
        readonly filter: "type";
        /**
         * The prototype type
         */
        readonly type: string;
    }
    /**
     * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
     *
     * Base attributes: {@link BasePostEntityDiedEventFilter}
     *
     * Other attributes may be specified depending on `filter`:
     * - `"type"`: {@link TypePostEntityDiedEventFilter}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#LuaPostEntityDiedEventFilter Online documentation}
     */
    export type LuaPostEntityDiedEventFilter = TypePostEntityDiedEventFilter;
    /**
     * Common attributes to all variants of {@link LuaPreRobotMinedEntityEventFilter}.
     */
    export interface BasePreRobotMinedEntityEventFilter {
        /**
         * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
         */
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable" | "type" | "name" | "ghost_type" | "ghost_name";
        /**
         * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
         */
        readonly mode?: "or" | "and";
        /**
         * Inverts the condition. Default is `false`.
         */
        readonly invert?: boolean;
    }
    /**
     * `"type"` variant of {@link LuaPreRobotMinedEntityEventFilter}.
     */
    export interface TypePreRobotMinedEntityEventFilter extends BasePreRobotMinedEntityEventFilter {
        readonly filter: "type";
        /**
         * The prototype type
         */
        readonly type: string;
    }
    /**
     * `"name"` variant of {@link LuaPreRobotMinedEntityEventFilter}.
     */
    export interface NamePreRobotMinedEntityEventFilter extends BasePreRobotMinedEntityEventFilter {
        readonly filter: "name";
        /**
         * The prototype name
         */
        readonly name: string;
    }
    /**
     * `"ghost_type"` variant of {@link LuaPreRobotMinedEntityEventFilter}.
     */
    export interface GhostTypePreRobotMinedEntityEventFilter extends BasePreRobotMinedEntityEventFilter {
        readonly filter: "ghost_type";
        /**
         * The ghost prototype type
         */
        readonly type: string;
    }
    /**
     * `"ghost_name"` variant of {@link LuaPreRobotMinedEntityEventFilter}.
     */
    export interface GhostNamePreRobotMinedEntityEventFilter extends BasePreRobotMinedEntityEventFilter {
        readonly filter: "ghost_name";
        /**
         * The ghost prototype name
         */
        readonly name: string;
    }
    /**
     * Variants of {@link LuaPreRobotMinedEntityEventFilter} with no additional attributes.
     */
    export interface OtherPreRobotMinedEntityEventFilter extends BasePreRobotMinedEntityEventFilter {
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable";
    }
    /**
     * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
     *
     * Base attributes: {@link BasePreRobotMinedEntityEventFilter}
     *
     * Other attributes may be specified depending on `filter`:
     * - `"type"`: {@link TypePreRobotMinedEntityEventFilter}
     * - `"name"`: {@link NamePreRobotMinedEntityEventFilter}
     * - `"ghost_type"`: {@link GhostTypePreRobotMinedEntityEventFilter}
     * - `"ghost_name"`: {@link GhostNamePreRobotMinedEntityEventFilter}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#LuaPreRobotMinedEntityEventFilter Online documentation}
     */
    export type LuaPreRobotMinedEntityEventFilter = TypePreRobotMinedEntityEventFilter | NamePreRobotMinedEntityEventFilter | GhostTypePreRobotMinedEntityEventFilter | GhostNamePreRobotMinedEntityEventFilter | OtherPreRobotMinedEntityEventFilter;
    /**
     * Common attributes to all variants of {@link LuaEntityClonedEventFilter}.
     */
    export interface BaseEntityClonedEventFilter {
        /**
         * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
         */
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable" | "type" | "name" | "ghost_type" | "ghost_name";
        /**
         * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
         */
        readonly mode?: "or" | "and";
        /**
         * Inverts the condition. Default is `false`.
         */
        readonly invert?: boolean;
    }
    /**
     * `"type"` variant of {@link LuaEntityClonedEventFilter}.
     */
    export interface TypeEntityClonedEventFilter extends BaseEntityClonedEventFilter {
        readonly filter: "type";
        /**
         * The prototype type
         */
        readonly type: string;
    }
    /**
     * `"name"` variant of {@link LuaEntityClonedEventFilter}.
     */
    export interface NameEntityClonedEventFilter extends BaseEntityClonedEventFilter {
        readonly filter: "name";
        /**
         * The prototype name
         */
        readonly name: string;
    }
    /**
     * `"ghost_type"` variant of {@link LuaEntityClonedEventFilter}.
     */
    export interface GhostTypeEntityClonedEventFilter extends BaseEntityClonedEventFilter {
        readonly filter: "ghost_type";
        /**
         * The ghost prototype type
         */
        readonly type: string;
    }
    /**
     * `"ghost_name"` variant of {@link LuaEntityClonedEventFilter}.
     */
    export interface GhostNameEntityClonedEventFilter extends BaseEntityClonedEventFilter {
        readonly filter: "ghost_name";
        /**
         * The ghost prototype name
         */
        readonly name: string;
    }
    /**
     * Variants of {@link LuaEntityClonedEventFilter} with no additional attributes.
     */
    export interface OtherEntityClonedEventFilter extends BaseEntityClonedEventFilter {
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable";
    }
    /**
     * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
     *
     * Base attributes: {@link BaseEntityClonedEventFilter}
     *
     * Other attributes may be specified depending on `filter`:
     * - `"type"`: {@link TypeEntityClonedEventFilter}
     * - `"name"`: {@link NameEntityClonedEventFilter}
     * - `"ghost_type"`: {@link GhostTypeEntityClonedEventFilter}
     * - `"ghost_name"`: {@link GhostNameEntityClonedEventFilter}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#LuaEntityClonedEventFilter Online documentation}
     */
    export type LuaEntityClonedEventFilter = TypeEntityClonedEventFilter | NameEntityClonedEventFilter | GhostTypeEntityClonedEventFilter | GhostNameEntityClonedEventFilter | OtherEntityClonedEventFilter;
    /**
     * Common attributes to all variants of {@link LuaScriptRaisedBuiltEventFilter}.
     */
    export interface BaseScriptRaisedBuiltEventFilter {
        /**
         * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
         */
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable" | "type" | "name" | "ghost_type" | "ghost_name";
        /**
         * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
         */
        readonly mode?: "or" | "and";
        /**
         * Inverts the condition. Default is `false`.
         */
        readonly invert?: boolean;
    }
    /**
     * `"type"` variant of {@link LuaScriptRaisedBuiltEventFilter}.
     */
    export interface TypeScriptRaisedBuiltEventFilter extends BaseScriptRaisedBuiltEventFilter {
        readonly filter: "type";
        /**
         * The prototype type
         */
        readonly type: string;
    }
    /**
     * `"name"` variant of {@link LuaScriptRaisedBuiltEventFilter}.
     */
    export interface NameScriptRaisedBuiltEventFilter extends BaseScriptRaisedBuiltEventFilter {
        readonly filter: "name";
        /**
         * The prototype name
         */
        readonly name: string;
    }
    /**
     * `"ghost_type"` variant of {@link LuaScriptRaisedBuiltEventFilter}.
     */
    export interface GhostTypeScriptRaisedBuiltEventFilter extends BaseScriptRaisedBuiltEventFilter {
        readonly filter: "ghost_type";
        /**
         * The ghost prototype type
         */
        readonly type: string;
    }
    /**
     * `"ghost_name"` variant of {@link LuaScriptRaisedBuiltEventFilter}.
     */
    export interface GhostNameScriptRaisedBuiltEventFilter extends BaseScriptRaisedBuiltEventFilter {
        readonly filter: "ghost_name";
        /**
         * The ghost prototype name
         */
        readonly name: string;
    }
    /**
     * Variants of {@link LuaScriptRaisedBuiltEventFilter} with no additional attributes.
     */
    export interface OtherScriptRaisedBuiltEventFilter extends BaseScriptRaisedBuiltEventFilter {
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable";
    }
    /**
     * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
     *
     * Base attributes: {@link BaseScriptRaisedBuiltEventFilter}
     *
     * Other attributes may be specified depending on `filter`:
     * - `"type"`: {@link TypeScriptRaisedBuiltEventFilter}
     * - `"name"`: {@link NameScriptRaisedBuiltEventFilter}
     * - `"ghost_type"`: {@link GhostTypeScriptRaisedBuiltEventFilter}
     * - `"ghost_name"`: {@link GhostNameScriptRaisedBuiltEventFilter}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#LuaScriptRaisedBuiltEventFilter Online documentation}
     */
    export type LuaScriptRaisedBuiltEventFilter = TypeScriptRaisedBuiltEventFilter | NameScriptRaisedBuiltEventFilter | GhostTypeScriptRaisedBuiltEventFilter | GhostNameScriptRaisedBuiltEventFilter | OtherScriptRaisedBuiltEventFilter;
    /**
     * Common attributes to all variants of {@link LuaRobotMinedEntityEventFilter}.
     */
    export interface BaseRobotMinedEntityEventFilter {
        /**
         * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
         */
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable" | "type" | "name" | "ghost_type" | "ghost_name";
        /**
         * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
         */
        readonly mode?: "or" | "and";
        /**
         * Inverts the condition. Default is `false`.
         */
        readonly invert?: boolean;
    }
    /**
     * `"type"` variant of {@link LuaRobotMinedEntityEventFilter}.
     */
    export interface TypeRobotMinedEntityEventFilter extends BaseRobotMinedEntityEventFilter {
        readonly filter: "type";
        /**
         * The prototype type
         */
        readonly type: string;
    }
    /**
     * `"name"` variant of {@link LuaRobotMinedEntityEventFilter}.
     */
    export interface NameRobotMinedEntityEventFilter extends BaseRobotMinedEntityEventFilter {
        readonly filter: "name";
        /**
         * The prototype name
         */
        readonly name: string;
    }
    /**
     * `"ghost_type"` variant of {@link LuaRobotMinedEntityEventFilter}.
     */
    export interface GhostTypeRobotMinedEntityEventFilter extends BaseRobotMinedEntityEventFilter {
        readonly filter: "ghost_type";
        /**
         * The ghost prototype type
         */
        readonly type: string;
    }
    /**
     * `"ghost_name"` variant of {@link LuaRobotMinedEntityEventFilter}.
     */
    export interface GhostNameRobotMinedEntityEventFilter extends BaseRobotMinedEntityEventFilter {
        readonly filter: "ghost_name";
        /**
         * The ghost prototype name
         */
        readonly name: string;
    }
    /**
     * Variants of {@link LuaRobotMinedEntityEventFilter} with no additional attributes.
     */
    export interface OtherRobotMinedEntityEventFilter extends BaseRobotMinedEntityEventFilter {
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable";
    }
    /**
     * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
     *
     * Base attributes: {@link BaseRobotMinedEntityEventFilter}
     *
     * Other attributes may be specified depending on `filter`:
     * - `"type"`: {@link TypeRobotMinedEntityEventFilter}
     * - `"name"`: {@link NameRobotMinedEntityEventFilter}
     * - `"ghost_type"`: {@link GhostTypeRobotMinedEntityEventFilter}
     * - `"ghost_name"`: {@link GhostNameRobotMinedEntityEventFilter}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#LuaRobotMinedEntityEventFilter Online documentation}
     */
    export type LuaRobotMinedEntityEventFilter = TypeRobotMinedEntityEventFilter | NameRobotMinedEntityEventFilter | GhostTypeRobotMinedEntityEventFilter | GhostNameRobotMinedEntityEventFilter | OtherRobotMinedEntityEventFilter;
    /**
     * Common attributes to all variants of {@link LuaPrePlayerMinedEntityEventFilter}.
     */
    export interface BasePrePlayerMinedEntityEventFilter {
        /**
         * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
         */
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable" | "type" | "name" | "ghost_type" | "ghost_name";
        /**
         * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
         */
        readonly mode?: "or" | "and";
        /**
         * Inverts the condition. Default is `false`.
         */
        readonly invert?: boolean;
    }
    /**
     * `"type"` variant of {@link LuaPrePlayerMinedEntityEventFilter}.
     */
    export interface TypePrePlayerMinedEntityEventFilter extends BasePrePlayerMinedEntityEventFilter {
        readonly filter: "type";
        /**
         * The prototype type
         */
        readonly type: string;
    }
    /**
     * `"name"` variant of {@link LuaPrePlayerMinedEntityEventFilter}.
     */
    export interface NamePrePlayerMinedEntityEventFilter extends BasePrePlayerMinedEntityEventFilter {
        readonly filter: "name";
        /**
         * The prototype name
         */
        readonly name: string;
    }
    /**
     * `"ghost_type"` variant of {@link LuaPrePlayerMinedEntityEventFilter}.
     */
    export interface GhostTypePrePlayerMinedEntityEventFilter extends BasePrePlayerMinedEntityEventFilter {
        readonly filter: "ghost_type";
        /**
         * The ghost prototype type
         */
        readonly type: string;
    }
    /**
     * `"ghost_name"` variant of {@link LuaPrePlayerMinedEntityEventFilter}.
     */
    export interface GhostNamePrePlayerMinedEntityEventFilter extends BasePrePlayerMinedEntityEventFilter {
        readonly filter: "ghost_name";
        /**
         * The ghost prototype name
         */
        readonly name: string;
    }
    /**
     * Variants of {@link LuaPrePlayerMinedEntityEventFilter} with no additional attributes.
     */
    export interface OtherPrePlayerMinedEntityEventFilter extends BasePrePlayerMinedEntityEventFilter {
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable";
    }
    /**
     * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
     *
     * Base attributes: {@link BasePrePlayerMinedEntityEventFilter}
     *
     * Other attributes may be specified depending on `filter`:
     * - `"type"`: {@link TypePrePlayerMinedEntityEventFilter}
     * - `"name"`: {@link NamePrePlayerMinedEntityEventFilter}
     * - `"ghost_type"`: {@link GhostTypePrePlayerMinedEntityEventFilter}
     * - `"ghost_name"`: {@link GhostNamePrePlayerMinedEntityEventFilter}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#LuaPrePlayerMinedEntityEventFilter Online documentation}
     */
    export type LuaPrePlayerMinedEntityEventFilter = TypePrePlayerMinedEntityEventFilter | NamePrePlayerMinedEntityEventFilter | GhostTypePrePlayerMinedEntityEventFilter | GhostNamePrePlayerMinedEntityEventFilter | OtherPrePlayerMinedEntityEventFilter;
    /**
     * Common attributes to all variants of {@link LuaRobotBuiltEntityEventFilter}.
     */
    export interface BaseRobotBuiltEntityEventFilter {
        /**
         * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`.
         */
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable" | "type" | "name" | "ghost_type" | "ghost_name" | "force";
        /**
         * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
         */
        readonly mode?: "or" | "and";
        /**
         * Inverts the condition. Default is `false`.
         */
        readonly invert?: boolean;
    }
    /**
     * `"type"` variant of {@link LuaRobotBuiltEntityEventFilter}.
     */
    export interface TypeRobotBuiltEntityEventFilter extends BaseRobotBuiltEntityEventFilter {
        readonly filter: "type";
        /**
         * The prototype type
         */
        readonly type: string;
    }
    /**
     * `"name"` variant of {@link LuaRobotBuiltEntityEventFilter}.
     */
    export interface NameRobotBuiltEntityEventFilter extends BaseRobotBuiltEntityEventFilter {
        readonly filter: "name";
        /**
         * The prototype name
         */
        readonly name: string;
    }
    /**
     * `"ghost_type"` variant of {@link LuaRobotBuiltEntityEventFilter}.
     */
    export interface GhostTypeRobotBuiltEntityEventFilter extends BaseRobotBuiltEntityEventFilter {
        readonly filter: "ghost_type";
        /**
         * The ghost prototype type
         */
        readonly type: string;
    }
    /**
     * `"ghost_name"` variant of {@link LuaRobotBuiltEntityEventFilter}.
     */
    export interface GhostNameRobotBuiltEntityEventFilter extends BaseRobotBuiltEntityEventFilter {
        readonly filter: "ghost_name";
        /**
         * The ghost prototype name
         */
        readonly name: string;
    }
    /**
     * `"force"` variant of {@link LuaRobotBuiltEntityEventFilter}.
     */
    export interface ForceRobotBuiltEntityEventFilter extends BaseRobotBuiltEntityEventFilter {
        readonly filter: "force";
        /**
         * The entity force
         */
        readonly force: string;
    }
    /**
     * Variants of {@link LuaRobotBuiltEntityEventFilter} with no additional attributes.
     */
    export interface OtherRobotBuiltEntityEventFilter extends BaseRobotBuiltEntityEventFilter {
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable";
    }
    /**
     * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
     *
     * Base attributes: {@link BaseRobotBuiltEntityEventFilter}
     *
     * Other attributes may be specified depending on `filter`:
     * - `"type"`: {@link TypeRobotBuiltEntityEventFilter}
     * - `"name"`: {@link NameRobotBuiltEntityEventFilter}
     * - `"ghost_type"`: {@link GhostTypeRobotBuiltEntityEventFilter}
     * - `"ghost_name"`: {@link GhostNameRobotBuiltEntityEventFilter}
     * - `"force"`: {@link ForceRobotBuiltEntityEventFilter}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#LuaRobotBuiltEntityEventFilter Online documentation}
     */
    export type LuaRobotBuiltEntityEventFilter = TypeRobotBuiltEntityEventFilter | NameRobotBuiltEntityEventFilter | GhostTypeRobotBuiltEntityEventFilter | GhostNameRobotBuiltEntityEventFilter | ForceRobotBuiltEntityEventFilter | OtherRobotBuiltEntityEventFilter;
    /**
     * Common attributes to all variants of {@link LuaPreGhostUpgradedEventFilter}.
     */
    export interface BasePreGhostUpgradedEventFilter {
        /**
         * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
         */
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable" | "type" | "name" | "ghost_type" | "ghost_name";
        /**
         * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
         */
        readonly mode?: "or" | "and";
        /**
         * Inverts the condition. Default is `false`.
         */
        readonly invert?: boolean;
    }
    /**
     * `"type"` variant of {@link LuaPreGhostUpgradedEventFilter}.
     */
    export interface TypePreGhostUpgradedEventFilter extends BasePreGhostUpgradedEventFilter {
        readonly filter: "type";
        /**
         * The prototype type
         */
        readonly type: string;
    }
    /**
     * `"name"` variant of {@link LuaPreGhostUpgradedEventFilter}.
     */
    export interface NamePreGhostUpgradedEventFilter extends BasePreGhostUpgradedEventFilter {
        readonly filter: "name";
        /**
         * The prototype name
         */
        readonly name: string;
    }
    /**
     * `"ghost_type"` variant of {@link LuaPreGhostUpgradedEventFilter}.
     */
    export interface GhostTypePreGhostUpgradedEventFilter extends BasePreGhostUpgradedEventFilter {
        readonly filter: "ghost_type";
        /**
         * The ghost prototype type
         */
        readonly type: string;
    }
    /**
     * `"ghost_name"` variant of {@link LuaPreGhostUpgradedEventFilter}.
     */
    export interface GhostNamePreGhostUpgradedEventFilter extends BasePreGhostUpgradedEventFilter {
        readonly filter: "ghost_name";
        /**
         * The ghost prototype name
         */
        readonly name: string;
    }
    /**
     * Variants of {@link LuaPreGhostUpgradedEventFilter} with no additional attributes.
     */
    export interface OtherPreGhostUpgradedEventFilter extends BasePreGhostUpgradedEventFilter {
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable";
    }
    /**
     * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
     *
     * Base attributes: {@link BasePreGhostUpgradedEventFilter}
     *
     * Other attributes may be specified depending on `filter`:
     * - `"type"`: {@link TypePreGhostUpgradedEventFilter}
     * - `"name"`: {@link NamePreGhostUpgradedEventFilter}
     * - `"ghost_type"`: {@link GhostTypePreGhostUpgradedEventFilter}
     * - `"ghost_name"`: {@link GhostNamePreGhostUpgradedEventFilter}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#LuaPreGhostUpgradedEventFilter Online documentation}
     */
    export type LuaPreGhostUpgradedEventFilter = TypePreGhostUpgradedEventFilter | NamePreGhostUpgradedEventFilter | GhostTypePreGhostUpgradedEventFilter | GhostNamePreGhostUpgradedEventFilter | OtherPreGhostUpgradedEventFilter;
    /**
     * Common attributes to all variants of {@link LuaEntityDeconstructionCancelledEventFilter}.
     */
    export interface BaseEntityDeconstructionCancelledEventFilter {
        /**
         * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
         */
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable" | "type" | "name" | "ghost_type" | "ghost_name";
        /**
         * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
         */
        readonly mode?: "or" | "and";
        /**
         * Inverts the condition. Default is `false`.
         */
        readonly invert?: boolean;
    }
    /**
     * `"type"` variant of {@link LuaEntityDeconstructionCancelledEventFilter}.
     */
    export interface TypeEntityDeconstructionCancelledEventFilter extends BaseEntityDeconstructionCancelledEventFilter {
        readonly filter: "type";
        /**
         * The prototype type
         */
        readonly type: string;
    }
    /**
     * `"name"` variant of {@link LuaEntityDeconstructionCancelledEventFilter}.
     */
    export interface NameEntityDeconstructionCancelledEventFilter extends BaseEntityDeconstructionCancelledEventFilter {
        readonly filter: "name";
        /**
         * The prototype name
         */
        readonly name: string;
    }
    /**
     * `"ghost_type"` variant of {@link LuaEntityDeconstructionCancelledEventFilter}.
     */
    export interface GhostTypeEntityDeconstructionCancelledEventFilter extends BaseEntityDeconstructionCancelledEventFilter {
        readonly filter: "ghost_type";
        /**
         * The ghost prototype type
         */
        readonly type: string;
    }
    /**
     * `"ghost_name"` variant of {@link LuaEntityDeconstructionCancelledEventFilter}.
     */
    export interface GhostNameEntityDeconstructionCancelledEventFilter extends BaseEntityDeconstructionCancelledEventFilter {
        readonly filter: "ghost_name";
        /**
         * The ghost prototype name
         */
        readonly name: string;
    }
    /**
     * Variants of {@link LuaEntityDeconstructionCancelledEventFilter} with no additional attributes.
     */
    export interface OtherEntityDeconstructionCancelledEventFilter extends BaseEntityDeconstructionCancelledEventFilter {
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable";
    }
    /**
     * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
     *
     * Base attributes: {@link BaseEntityDeconstructionCancelledEventFilter}
     *
     * Other attributes may be specified depending on `filter`:
     * - `"type"`: {@link TypeEntityDeconstructionCancelledEventFilter}
     * - `"name"`: {@link NameEntityDeconstructionCancelledEventFilter}
     * - `"ghost_type"`: {@link GhostTypeEntityDeconstructionCancelledEventFilter}
     * - `"ghost_name"`: {@link GhostNameEntityDeconstructionCancelledEventFilter}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#LuaEntityDeconstructionCancelledEventFilter Online documentation}
     */
    export type LuaEntityDeconstructionCancelledEventFilter = TypeEntityDeconstructionCancelledEventFilter | NameEntityDeconstructionCancelledEventFilter | GhostTypeEntityDeconstructionCancelledEventFilter | GhostNameEntityDeconstructionCancelledEventFilter | OtherEntityDeconstructionCancelledEventFilter;
    /**
     * Common attributes to all variants of {@link LuaPlayerBuiltEntityEventFilter}.
     */
    export interface BasePlayerBuiltEntityEventFilter {
        /**
         * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`.
         */
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable" | "type" | "name" | "ghost_type" | "ghost_name" | "force";
        /**
         * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
         */
        readonly mode?: "or" | "and";
        /**
         * Inverts the condition. Default is `false`.
         */
        readonly invert?: boolean;
    }
    /**
     * `"type"` variant of {@link LuaPlayerBuiltEntityEventFilter}.
     */
    export interface TypePlayerBuiltEntityEventFilter extends BasePlayerBuiltEntityEventFilter {
        readonly filter: "type";
        /**
         * The prototype type
         */
        readonly type: string;
    }
    /**
     * `"name"` variant of {@link LuaPlayerBuiltEntityEventFilter}.
     */
    export interface NamePlayerBuiltEntityEventFilter extends BasePlayerBuiltEntityEventFilter {
        readonly filter: "name";
        /**
         * The prototype name
         */
        readonly name: string;
    }
    /**
     * `"ghost_type"` variant of {@link LuaPlayerBuiltEntityEventFilter}.
     */
    export interface GhostTypePlayerBuiltEntityEventFilter extends BasePlayerBuiltEntityEventFilter {
        readonly filter: "ghost_type";
        /**
         * The ghost prototype type
         */
        readonly type: string;
    }
    /**
     * `"ghost_name"` variant of {@link LuaPlayerBuiltEntityEventFilter}.
     */
    export interface GhostNamePlayerBuiltEntityEventFilter extends BasePlayerBuiltEntityEventFilter {
        readonly filter: "ghost_name";
        /**
         * The ghost prototype name
         */
        readonly name: string;
    }
    /**
     * `"force"` variant of {@link LuaPlayerBuiltEntityEventFilter}.
     */
    export interface ForcePlayerBuiltEntityEventFilter extends BasePlayerBuiltEntityEventFilter {
        readonly filter: "force";
        /**
         * The entity force
         */
        readonly force: string;
    }
    /**
     * Variants of {@link LuaPlayerBuiltEntityEventFilter} with no additional attributes.
     */
    export interface OtherPlayerBuiltEntityEventFilter extends BasePlayerBuiltEntityEventFilter {
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable";
    }
    /**
     * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
     *
     * Base attributes: {@link BasePlayerBuiltEntityEventFilter}
     *
     * Other attributes may be specified depending on `filter`:
     * - `"type"`: {@link TypePlayerBuiltEntityEventFilter}
     * - `"name"`: {@link NamePlayerBuiltEntityEventFilter}
     * - `"ghost_type"`: {@link GhostTypePlayerBuiltEntityEventFilter}
     * - `"ghost_name"`: {@link GhostNamePlayerBuiltEntityEventFilter}
     * - `"force"`: {@link ForcePlayerBuiltEntityEventFilter}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#LuaPlayerBuiltEntityEventFilter Online documentation}
     */
    export type LuaPlayerBuiltEntityEventFilter = TypePlayerBuiltEntityEventFilter | NamePlayerBuiltEntityEventFilter | GhostTypePlayerBuiltEntityEventFilter | GhostNamePlayerBuiltEntityEventFilter | ForcePlayerBuiltEntityEventFilter | OtherPlayerBuiltEntityEventFilter;
    /**
     * Common attributes to all variants of {@link LuaPlayerMinedEntityEventFilter}.
     */
    export interface BasePlayerMinedEntityEventFilter {
        /**
         * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
         */
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable" | "type" | "name" | "ghost_type" | "ghost_name";
        /**
         * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
         */
        readonly mode?: "or" | "and";
        /**
         * Inverts the condition. Default is `false`.
         */
        readonly invert?: boolean;
    }
    /**
     * `"type"` variant of {@link LuaPlayerMinedEntityEventFilter}.
     */
    export interface TypePlayerMinedEntityEventFilter extends BasePlayerMinedEntityEventFilter {
        readonly filter: "type";
        /**
         * The prototype type
         */
        readonly type: string;
    }
    /**
     * `"name"` variant of {@link LuaPlayerMinedEntityEventFilter}.
     */
    export interface NamePlayerMinedEntityEventFilter extends BasePlayerMinedEntityEventFilter {
        readonly filter: "name";
        /**
         * The prototype name
         */
        readonly name: string;
    }
    /**
     * `"ghost_type"` variant of {@link LuaPlayerMinedEntityEventFilter}.
     */
    export interface GhostTypePlayerMinedEntityEventFilter extends BasePlayerMinedEntityEventFilter {
        readonly filter: "ghost_type";
        /**
         * The ghost prototype type
         */
        readonly type: string;
    }
    /**
     * `"ghost_name"` variant of {@link LuaPlayerMinedEntityEventFilter}.
     */
    export interface GhostNamePlayerMinedEntityEventFilter extends BasePlayerMinedEntityEventFilter {
        readonly filter: "ghost_name";
        /**
         * The ghost prototype name
         */
        readonly name: string;
    }
    /**
     * Variants of {@link LuaPlayerMinedEntityEventFilter} with no additional attributes.
     */
    export interface OtherPlayerMinedEntityEventFilter extends BasePlayerMinedEntityEventFilter {
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable";
    }
    /**
     * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
     *
     * Base attributes: {@link BasePlayerMinedEntityEventFilter}
     *
     * Other attributes may be specified depending on `filter`:
     * - `"type"`: {@link TypePlayerMinedEntityEventFilter}
     * - `"name"`: {@link NamePlayerMinedEntityEventFilter}
     * - `"ghost_type"`: {@link GhostTypePlayerMinedEntityEventFilter}
     * - `"ghost_name"`: {@link GhostNamePlayerMinedEntityEventFilter}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#LuaPlayerMinedEntityEventFilter Online documentation}
     */
    export type LuaPlayerMinedEntityEventFilter = TypePlayerMinedEntityEventFilter | NamePlayerMinedEntityEventFilter | GhostTypePlayerMinedEntityEventFilter | GhostNamePlayerMinedEntityEventFilter | OtherPlayerMinedEntityEventFilter;
    /**
     * Common attributes to all variants of {@link LuaEntityDamagedEventFilter}.
     */
    export interface BaseEntityDamagedEventFilter {
        /**
         * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"original-damage-amount"`, `"final-damage-amount"`, `"damage-type"`, `"final-health"`.
         */
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable" | "type" | "name" | "ghost_type" | "ghost_name" | "original-damage-amount" | "final-damage-amount" | "damage-type" | "final-health";
        /**
         * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
         */
        readonly mode?: "or" | "and";
        /**
         * Inverts the condition. Default is `false`.
         */
        readonly invert?: boolean;
    }
    /**
     * `"type"` variant of {@link LuaEntityDamagedEventFilter}.
     */
    export interface TypeEntityDamagedEventFilter extends BaseEntityDamagedEventFilter {
        readonly filter: "type";
        /**
         * The prototype type
         */
        readonly type: string;
    }
    /**
     * `"name"` variant of {@link LuaEntityDamagedEventFilter}.
     */
    export interface NameEntityDamagedEventFilter extends BaseEntityDamagedEventFilter {
        readonly filter: "name";
        /**
         * The prototype name
         */
        readonly name: string;
    }
    /**
     * `"ghost_type"` variant of {@link LuaEntityDamagedEventFilter}.
     */
    export interface GhostTypeEntityDamagedEventFilter extends BaseEntityDamagedEventFilter {
        readonly filter: "ghost_type";
        /**
         * The ghost prototype type
         */
        readonly type: string;
    }
    /**
     * `"ghost_name"` variant of {@link LuaEntityDamagedEventFilter}.
     */
    export interface GhostNameEntityDamagedEventFilter extends BaseEntityDamagedEventFilter {
        readonly filter: "ghost_name";
        /**
         * The ghost prototype name
         */
        readonly name: string;
    }
    /**
     * `"original-damage-amount"` variant of {@link LuaEntityDamagedEventFilter}.
     */
    export interface OriginalDamageAmountEntityDamagedEventFilter extends BaseEntityDamagedEventFilter {
        readonly filter: "original-damage-amount";
        readonly comparison: ComparatorStringRead;
        /**
         * The value to compare against.
         */
        readonly value: float;
    }
    export interface OriginalDamageAmountEntityDamagedEventFilterWrite extends BaseEntityDamagedEventFilter {
        readonly filter: "original-damage-amount";
        readonly comparison: ComparatorString;
        /**
         * The value to compare against.
         */
        readonly value: float;
    }
    /**
     * `"final-damage-amount"` variant of {@link LuaEntityDamagedEventFilter}.
     */
    export interface FinalDamageAmountEntityDamagedEventFilter extends BaseEntityDamagedEventFilter {
        readonly filter: "final-damage-amount";
        readonly comparison: ComparatorStringRead;
        /**
         * The value to compare against.
         */
        readonly value: float;
    }
    export interface FinalDamageAmountEntityDamagedEventFilterWrite extends BaseEntityDamagedEventFilter {
        readonly filter: "final-damage-amount";
        readonly comparison: ComparatorString;
        /**
         * The value to compare against.
         */
        readonly value: float;
    }
    /**
     * `"damage-type"` variant of {@link LuaEntityDamagedEventFilter}.
     */
    export interface DamageTypeEntityDamagedEventFilter extends BaseEntityDamagedEventFilter {
        readonly filter: "damage-type";
        /**
         * A {@link LuaDamagePrototype} name
         */
        readonly type: string;
    }
    /**
     * `"final-health"` variant of {@link LuaEntityDamagedEventFilter}.
     */
    export interface FinalHealthEntityDamagedEventFilter extends BaseEntityDamagedEventFilter {
        readonly filter: "final-health";
        readonly comparison: ComparatorStringRead;
        /**
         * The value to compare against.
         */
        readonly value: float;
    }
    export interface FinalHealthEntityDamagedEventFilterWrite extends BaseEntityDamagedEventFilter {
        readonly filter: "final-health";
        readonly comparison: ComparatorString;
        /**
         * The value to compare against.
         */
        readonly value: float;
    }
    /**
     * Variants of {@link LuaEntityDamagedEventFilter} with no additional attributes.
     */
    export interface OtherEntityDamagedEventFilter extends BaseEntityDamagedEventFilter {
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable";
    }
    /**
     * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
     *
     * Base attributes: {@link BaseEntityDamagedEventFilter}
     *
     * Other attributes may be specified depending on `filter`:
     * - `"type"`: {@link TypeEntityDamagedEventFilter}
     * - `"name"`: {@link NameEntityDamagedEventFilter}
     * - `"ghost_type"`: {@link GhostTypeEntityDamagedEventFilter}
     * - `"ghost_name"`: {@link GhostNameEntityDamagedEventFilter}
     * - `"original-damage-amount"`: {@link OriginalDamageAmountEntityDamagedEventFilter}
     * - `"final-damage-amount"`: {@link FinalDamageAmountEntityDamagedEventFilter}
     * - `"damage-type"`: {@link DamageTypeEntityDamagedEventFilter}
     * - `"final-health"`: {@link FinalHealthEntityDamagedEventFilter}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#LuaEntityDamagedEventFilter Online documentation}
     */
    export type LuaEntityDamagedEventFilter = TypeEntityDamagedEventFilter | NameEntityDamagedEventFilter | GhostTypeEntityDamagedEventFilter | GhostNameEntityDamagedEventFilter | OriginalDamageAmountEntityDamagedEventFilter | FinalDamageAmountEntityDamagedEventFilter | DamageTypeEntityDamagedEventFilter | FinalHealthEntityDamagedEventFilter | OtherEntityDamagedEventFilter;
    /**
     * Write form of {@link LuaEntityDamagedEventFilter}, where table-or-array concepts are allowed to take an array form.
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#LuaEntityDamagedEventFilter Online documentation}
     */
    export type LuaEntityDamagedEventFilterWrite = TypeEntityDamagedEventFilter | NameEntityDamagedEventFilter | GhostTypeEntityDamagedEventFilter | GhostNameEntityDamagedEventFilter | OriginalDamageAmountEntityDamagedEventFilterWrite | FinalDamageAmountEntityDamagedEventFilterWrite | DamageTypeEntityDamagedEventFilter | FinalHealthEntityDamagedEventFilterWrite | OtherEntityDamagedEventFilter;
    /**
     * Common attributes to all variants of {@link LuaSectorScannedEventFilter}.
     */
    export interface BaseSectorScannedEventFilter {
        /**
         * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
         */
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable" | "type" | "name" | "ghost_type" | "ghost_name";
        /**
         * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
         */
        readonly mode?: "or" | "and";
        /**
         * Inverts the condition. Default is `false`.
         */
        readonly invert?: boolean;
    }
    /**
     * `"type"` variant of {@link LuaSectorScannedEventFilter}.
     */
    export interface TypeSectorScannedEventFilter extends BaseSectorScannedEventFilter {
        readonly filter: "type";
        /**
         * The prototype type
         */
        readonly type: string;
    }
    /**
     * `"name"` variant of {@link LuaSectorScannedEventFilter}.
     */
    export interface NameSectorScannedEventFilter extends BaseSectorScannedEventFilter {
        readonly filter: "name";
        /**
         * The prototype name
         */
        readonly name: string;
    }
    /**
     * `"ghost_type"` variant of {@link LuaSectorScannedEventFilter}.
     */
    export interface GhostTypeSectorScannedEventFilter extends BaseSectorScannedEventFilter {
        readonly filter: "ghost_type";
        /**
         * The ghost prototype type
         */
        readonly type: string;
    }
    /**
     * `"ghost_name"` variant of {@link LuaSectorScannedEventFilter}.
     */
    export interface GhostNameSectorScannedEventFilter extends BaseSectorScannedEventFilter {
        readonly filter: "ghost_name";
        /**
         * The ghost prototype name
         */
        readonly name: string;
    }
    /**
     * Variants of {@link LuaSectorScannedEventFilter} with no additional attributes.
     */
    export interface OtherSectorScannedEventFilter extends BaseSectorScannedEventFilter {
        readonly filter: "ghost" | "rail" | "rail-signal" | "rolling-stock" | "robot-with-logistics-interface" | "vehicle" | "turret" | "crafting-machine" | "wall-connectable" | "transport-belt-connectable" | "circuit-network-connectable";
    }
    /**
     * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
     *
     * Base attributes: {@link BaseSectorScannedEventFilter}
     *
     * Other attributes may be specified depending on `filter`:
     * - `"type"`: {@link TypeSectorScannedEventFilter}
     * - `"name"`: {@link NameSectorScannedEventFilter}
     * - `"ghost_type"`: {@link GhostTypeSectorScannedEventFilter}
     * - `"ghost_name"`: {@link GhostNameSectorScannedEventFilter}
     * @see {@link https://lua-api.factorio.com/1.1.89/concepts.html#LuaSectorScannedEventFilter Online documentation}
     */
    export type LuaSectorScannedEventFilter = TypeSectorScannedEventFilter | NameSectorScannedEventFilter | GhostTypeSectorScannedEventFilter | GhostNameSectorScannedEventFilter | OtherSectorScannedEventFilter;
    export type StyleValuesArray = readonly [
        topBottom: int,
        leftRight: int
    ] | readonly [
        top: int,
        right: int,
        bottom: int,
        left: int
    ];
    export type SizeArray = readonly [
        width: int,
        height: int
    ];
    export type RaiseableEvents = typeof defines.events.on_console_chat | typeof defines.events.on_player_crafted_item | typeof defines.events.on_player_fast_transferred | typeof defines.events.on_biter_base_built | typeof defines.events.on_market_item_purchased | typeof defines.events.script_raised_built | typeof defines.events.script_raised_destroy | typeof defines.events.script_raised_revive | typeof defines.events.script_raised_teleported | typeof defines.events.script_raised_set_tiles;
}

