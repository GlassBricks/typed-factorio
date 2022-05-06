type double = number
type float = number
type table = object
type int = number
type uint = number
type uint64 = number

declare namespace defines {
  const prototypes: {
    readonly [Type in string]?: {
      readonly [Name in string]?: 0 & { _notFalsyBrand: any }
    }
  }

  namespace difficulty_settings {
    enum recipe_difficulty {}

    enum technology_difficulty {}
  }
  enum circuit_connector_id {}
  enum gui_type {}
  enum rail_direction {}
  namespace events {
    const on_console_chat: EventId<any>
    const on_player_crafted_item: EventId<any>
    const on_player_fast_transferred: EventId<any>
    const on_biter_base_built: EventId<any>
    const on_market_item_purchased: EventId<any>
    const script_raised_built: EventId<any>
    const script_raised_destroy: EventId<any>
    const script_raised_revive: EventId<any>
    const script_raised_set_tiles: EventId<any>
  }
  /** @numericEnum */
  enum command {}
  /** @numericEnum */
  enum direction {}

  namespace control_behavior {
    namespace mining_drill {
      enum resource_read_mode {}
    }
    namespace inserter {
      enum hand_read_mode {}
    }
    namespace transport_belt {
      enum content_read_mode {}
    }
  }
}

// -- classes --

// generics and extensions

type LuaCustomTable<K extends string | number, V> = {
  [P in K]: V
} & LuaPairsIterable<
  // this convoluted expression gives a number type if K includes a number, even if it includes a string, and K otherwise.
  // it also preserves number branding
  [number] extends [K extends number & IndexBrand<infer A> ? number : K] ? (K extends string ? never : K) : K,
  V
>

interface LuaLazyLoadedValue<T> {
  get(): T
}

interface ChunkPositionAndArea {}
interface LuaChunkIterator extends LuaIterable<ChunkPositionAndArea> {}

// Array-likeTypes

interface Fluid {}

interface LuaFluidBox extends Array<Fluid | undefined> {}

interface LuaTransportLine extends ReadonlyArray<LuaItemStack> {}

interface LuaInventory extends ReadonlyArray<LuaItemStack> {}

// Gui element

/** @addBefore BaseGuiSpec */
type GuiElementType =
  | "choose-elem-button"
  | "drop-down"
  | "empty-widget"
  | "entity-preview"
  | "list-box"
  | "scroll-pane"
  | "sprite-button"
  | "tabbed-pane"
  | "text-box"
  | "button"
  | "camera"
  | "checkbox"
  | "flow"
  | "frame"
  | "label"
  | "line"
  | "minimap"
  | "progressbar"
  | "radiobutton"
  | "slider"
  | "sprite"
  | "switch"
  | "tab"
  | "table"
  | "textfield"

/** @addTo concepts */
type StyleValuesArray =
  | readonly [topBottom: number, leftRight: number]
  | readonly [top: number, right: number, bottom: number, left: number]
/** @addTo concepts */
type SizeArray = readonly [width: int, height: int]

interface LuaStyle {
  set size(value: int | SizeArray)
  set padding(value: int | StyleValuesArray)
  set margin(value: int | StyleValuesArray)
  /** @subclasses scroll-pane */
  set extra_padding_when_activated(value: int | StyleValuesArray)
  /** @subclasses scroll-pane */
  set extra_margin_when_activated(value: int | StyleValuesArray)
}

interface LuaEquipment {}
interface LuaEquipmentGrid {}

interface BaseGuiSpec {
  readonly type: GuiElementType
}
interface FlowGuiSpec {
  readonly direction?: "horizontal" | "vertical"
}
interface FrameGuiSpec {
  readonly direction?: "horizontal" | "vertical"
}
interface LineGuiSpec {
  readonly direction?: "horizontal" | "vertical"
}

interface SignalID {}

interface ItemPrototypeFilter {}
interface TilePrototypeFilter {}
interface EntityPrototypeFilter {}
interface FluidPrototypeFilter {}
interface RecipePrototypeFilter {}
interface DecorativePrototypeFilter {}
interface AchievementPrototypeFilter {}
interface EquipmentPrototypeFilter {}
interface TechnologyPrototypeFilter {}

type PrototypeFilter =
  | ItemPrototypeFilter
  | TilePrototypeFilter
  | EntityPrototypeFilter
  | FluidPrototypeFilter
  | RecipePrototypeFilter
  | DecorativePrototypeFilter
  | AchievementPrototypeFilter
  | EquipmentPrototypeFilter
  | TechnologyPrototypeFilter

/** @addBefore ChooseElemButtonGuiSpec */
type ChooseElemButtonType =
  | "item"
  | "tile"
  | "entity"
  | "signal"
  | "fluid"
  | "recipe"
  | "decorative"
  | "item-group"
  | "achievement"
  | "equipment"
  | "technology"

/** @addBefore ChooseElemButtonGuiSpec */
interface ChooseElemButtonFilters {
  item: ItemPrototypeFilter[]
  tile: TilePrototypeFilter[]
  entity: EntityPrototypeFilter[]
  signal: never
  fluid: FluidPrototypeFilter[]
  recipe: RecipePrototypeFilter[]
  decorative: DecorativePrototypeFilter[]
  "item-group": never
  achievement: AchievementPrototypeFilter[]
  equipment: EquipmentPrototypeFilter[]
  technology: TechnologyPrototypeFilter[]
}

/** @addBefore ChooseElemButtonGuiSpec */
interface BaseChooseElemButtonSpec extends BaseGuiSpec {
  readonly type: "choose-elem-button"
  /** The type of the button - one of the following values. */
  readonly elem_type: ChooseElemButtonType
  /** Filters describing what to show in the selection window. See {@link LuaGuiElement.elem_filters LuaGuiElement::elem_filters}. */
  readonly elem_filters?: ChooseElemButtonFilters[this["elem_type"]]
}

/** @addBefore ChooseElemButtonGuiSpec */
interface ItemChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "item"
  /** If type is `"item"` - the default value for the button. */
  readonly item?: string
}

/** @addBefore ChooseElemButtonGuiSpec */
interface TileChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "tile"
  /** If type is `"tile"` - the default value for the button. */
  readonly tile?: string
}

/** @addBefore ChooseElemButtonGuiSpec */
interface EntityChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "entity"
  /** If type is `"entity"` - the default value for the button. */
  readonly entity?: string
}

/** @addBefore ChooseElemButtonGuiSpec */
interface SignalChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "signal"
  /** If type is `"signal"` - the default value for the button. */
  readonly signal?: SignalID
}

/** @addBefore ChooseElemButtonGuiSpec */
interface FluidChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "fluid"
  /** If type is `"fluid"` - the default value for the button. */
  readonly fluid?: string
}

/** @addBefore ChooseElemButtonGuiSpec */
interface RecipeChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "recipe"
  /** If type is `"recipe"` - the default value for the button. */
  readonly recipe?: string
}

/** @addBefore ChooseElemButtonGuiSpec */
interface DecorativeChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "decorative"
  /** If type is `"decorative"` - the default value for the button. */
  readonly decorative?: string
}

/** @addBefore ChooseElemButtonGuiSpec */
interface ItemGroupChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "item-group"
  /** If type is `"item-group"` - the default value for the button. */
  readonly "item-group"?: string
}

/** @addBefore ChooseElemButtonGuiSpec */
interface AchievementChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "achievement"
  /** If type is `"achievement"` - the default value for the button. */
  readonly achievement?: string
}

/** @addBefore ChooseElemButtonGuiSpec */
interface EquipmentChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "equipment"
  /** If type is `"equipment"` - the default value for the button. */
  readonly equipment?: string
}

/** @addBefore ChooseElemButtonGuiSpec */
interface TechnologyChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "technology"
  /** If type is `"technology"` - the default value for the button. */
  readonly technology?: string
}

type ChooseElemButtonGuiSpec =
  | ItemChooseElemButtonSpec
  | TileChooseElemButtonSpec
  | EntityChooseElemButtonSpec
  | SignalChooseElemButtonSpec
  | FluidChooseElemButtonSpec
  | RecipeChooseElemButtonSpec
  | DecorativeChooseElemButtonSpec
  | ItemGroupChooseElemButtonSpec
  | AchievementChooseElemButtonSpec
  | EquipmentChooseElemButtonSpec
  | TechnologyChooseElemButtonSpec

// stub only
interface GuiSpec {
  type
}

/** @discriminatedUnion type */
type LuaGuiElement = {
  readonly [name: string]: LuaGuiElement | undefined
} & {
  readonly type: GuiElementType

  /** @variantsName GuiSpec */
  add<Type extends GuiElementType>(element: GuiSpec & { type: Type }): Extract<LuaGuiElement, { type: Type }>

  readonly elem_type: ChooseElemButtonType
  // @ts-ignore
  elem_value: (this["elem_type"] extends "signal" ? SignalID : string) | undefined
  // @ts-ignore
  elem_filters: ChooseElemButtonFilters[this["elem_type"]] | undefined

  /** @subclasses dropdown list-box */
  clear_items()
  /** @subclasses dropdown list-box */
  get_item()
  /** @subclasses dropdown list-box */
  set_item()
  /** @subclasses dropdown list-box */
  add_item()
  /** @subclasses dropdown list-box */
  remove_item()
  /** @subclasses slider */
  get_slider_minimum()
  /** @subclasses slider */
  get_slider_maximum()
  /** @subclasses slider */
  set_slider_minimum_maximum()
  /** @subclasses slider */
  get_slider_value_step()
  /** @subclasses slider */
  get_slider_discrete_slider()
  /** @subclasses slider */
  get_slider_discrete_values()
  /** @subclasses slider */
  set_slider_value_step()
  /** @subclasses slider */
  set_slider_discrete_slider()
  /** @subclasses slider */
  set_slider_discrete_values()
  /** @subclasses sprite-button sprite */
  sprite
  /** @subclasses sprite */
  resize_to_sprite
  /** @subclasses sprite-button */
  clicked_sprite
  /** @subclasses dropdown list-box */
  items
  /** @subclasses dropdown list-box */
  selected_index
  /** @subclasses sprite-button */
  number
  /** @subclasses sprite-button */
  show_percent_for_small_numbers
  /** @subclasses camera minimap */
  position
  /** @subclasses camera minimap */
  surface_index
  /** @subclasses camera minimap */
  zoom
  /** @subclasses minimap */
  force
  /** @subclasses button sprite-button */
  mouse_button_filter
  /** @subclasses flow frame label table empty-widget */
  drag_target: LuaGuiElement | undefined
  /** @subclasses tabbed-pane */
  readonly tabs
  /** @subclasses entity-preview camera minimap */
  entity

  set style(style: LuaStyle | string)
  get style(): LuaStyle
}

// nullability, multi-return, different read/write types

interface LuaControl {
  set opened(
    value:
      | LuaEntity
      | LuaItemStack
      | LuaEquipment
      | LuaEquipmentGrid
      | LuaPlayer
      | LuaGuiElement
      | defines.gui_type
      | undefined
  )
  get opened(): LuaEntity | LuaEquipment | LuaEquipmentGrid | LuaPlayer | LuaGuiElement | undefined
}

interface LuaEntity {
  initial_amount: uint | undefined
  get_driver(): LuaEntity | LuaPlayer | undefined
  get_passenger(): LuaEntity | LuaPlayer | undefined
  // revive(): LuaMultiReturn<[undefined] | [Record<string, uint>, LuaEntity, LuaEntity | undefined]>
  // silent_revive(): LuaMultiReturn<[undefined] | [Record<string, uint>, LuaEntity, LuaEntity | undefined]>

  // get_rail_segment_end(direction: defines.rail_direction): LuaMultiReturn<[LuaEntity, defines.rail_direction]>
}

interface LuaItemStack {
  durability: double | undefined
}

interface LuaPermissionGroup {}
interface LuaPermissionGroups {
  create_group(name?: string): LuaPermissionGroup | undefined
}

interface LuaPlayer {
  readonly cutscene_character: LuaEntity | undefined
}

// other

interface LuaRemote {
  add_interface(name: string, functions: Record<string, (...args: any) => void>): void
}

// events

/** @addTo concepts */
type RaiseableEvents =
  | typeof defines.events.on_console_chat
  | typeof defines.events.on_player_crafted_item
  | typeof defines.events.on_player_fast_transferred
  | typeof defines.events.on_biter_base_built
  | typeof defines.events.on_market_item_purchased
  | typeof defines.events.script_raised_built
  | typeof defines.events.script_raised_destroy
  | typeof defines.events.script_raised_revive
  | typeof defines.events.script_raised_set_tiles

interface EventData {
  readonly name: EventId<EventData> | string
}

interface CustomInputEvent {
  readonly name: string
}

/** @addTo events */
/** An event id. */
type EventId<T extends table, F = unknown> = uint & {
  readonly _eventData: T
  readonly _filter: F
}

/** @addTo events */
/**
 * An event id generated by {@link LuaBootstrap#generate_event_name LuaBootstrap::generate_event_name} and raiseable via
 * {@link LuaBootstrap#raise_event LuaBootstrap::raise_event}.
 */
type CustomEventId<T extends table> = EventId<T> & {
  _customEventIdBrand: any
}

interface LuaBootstrap {
  on_event<E extends EventId<any, table>>(
    event: E,
    f: ((data: E["_eventData"]) => void) | undefined,
    filters?: E["_filter"][]
  ): void
  on_event<E extends EventId<any>>(event: E | E[], f: ((data: E["_eventData"]) => void) | undefined): void
  on_event(event: string, f: ((data: CustomInputEvent) => void) | undefined): void

  generate_event_name<T extends table>(): CustomEventId<T>

  get_event_handler<E extends EventId<any>>(event: E): (data: E["_eventData"]) => void | undefined
  get_event_handler(event: string): (data: CustomInputEvent) => void | undefined

  get_event_filter<E extends EventId<any, table>>(event: E): E["_filter"][] | undefined
  set_event_filter<E extends EventId<any, table>>(event: E, filters: E["_filter"][] | undefined): void

  raise_event<E extends RaiseableEvents | CustomEventId<any>>(
    event: E,
    data: Omit<E["_eventData"], keyof EventData>
  ): void
}

interface LuaSurface {}

type PlayerIndex = uint
type SurfaceIndex = uint

interface LuaGameScript {
  get_player(index: PlayerIndex | string): LuaPlayer | undefined
  get_surface(index: SurfaceIndex | string): LuaSurface | undefined
  readonly players: LuaCustomTable<PlayerIndex | string, LuaPlayer>
  readonly surfaces: LuaCustomTable<SurfaceIndex | string, LuaSurface>
}

// strict index types

/** @addTo index-types */
interface __OptInFeatures {}
/** @addTo index-types */
/**
 * Equals a branded type when __OptInFeatures contains strictIndexTypes, otherwise equals `unknown`.
 */
type IndexBrand<B extends string> = "strictIndexTypes" extends keyof __OptInFeatures
  ? {
      [K in B]: any
    }
  : unknown

//  -- Concepts --

type LocalisedString = readonly [string, ...LocalisedString[]] | string | number | boolean | undefined

type RealOrientation = float

type Tags = Record<string, AnyBasic | undefined>

interface MapPositionTable {}
interface MapPositionArray {}
interface MapPosition {}

/** @addAfter MapPosition */
/** @deprecated Replace with {@link MapPositionTable}. */
type PositionTable = MapPositionTable

/** @addAfter MapPosition */
/** @deprecated Replace with {@link MapPositionArray}. */
type PositionArray = MapPositionArray

/** @addAfter MapPosition */
/** @deprecated Replace with {@link MapPosition}. */
type Position = MapPosition

type Vector = MapPositionArray

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

interface ArithmeticCombinatorParameters {
  readonly operation?: "*" | "/" | "+" | "-" | "%" | "^" | "<<" | ">>" | "AND" | "OR" | "XOR"
}
/** @addBefore SpritePath */
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
// template string type allows for autocomplete
type SpritePath = string | `${SpriteType}/${string}`

type SoundType =
  | "utility"
  | "ambient"
  | "tile-walking"
  | "tile-mined"
  | "tile-build-small"
  | "tile-build-medium"
  | "tile-build-large"
  | "entity-build"
  | "entity-mined"
  | "entity-mining"
  | "entity-vehicle_impact"
  | "entity-rotated"
  | "entity-open"
  | "entity-close"
// template string type allows for autocomplete
type SoundPath = string | `${SoundType}/${string}`

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

type CollisionMask = {
  readonly [P in CollisionMaskLayer]?: true
}

type CollisionMaskWithFlags = {
  readonly [P in
    | CollisionMaskLayer
    | "not-colliding-with-itself"
    | "consider-tile-transitions"
    | "colliding-with-tiles-only"]?: true
}

type TriggerTargetMask = {
  readonly [P in string]?: true
}

type CircularProjectileCreationSpecification = [RealOrientation, Vector]

type AnyBasic = string | number | boolean | table

type Any = any

/** @addBefore MouseButtonFlags */
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

/** @addBefore MouseButtonFlags */
type MouseButtonFlagsTable = {
  readonly [P in MouseButtonFlag]?: true
}
/** @addBefore MouseButtonFlags */
type MouseButtonFlagsArray = readonly (MouseButtonFlag | "left-and-right")[]
/** @tableOrArray */
type MouseButtonFlags = MouseButtonFlagsTable | MouseButtonFlagsArray

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

/** @omit */
interface EventFilter {}

// where a vector is supposed to be a position table instead

interface SmokeSource {
  readonly position?: MapPositionTable
  readonly north_position?: MapPositionTable
  readonly east_position?: MapPositionTable
  readonly south_position?: MapPositionTable
  readonly west_position?: MapPositionTable
}

interface FluidBoxConnection {
  readonly positions: MapPositionTable[]
}

interface CircularParticleCreationSpecification {
  readonly center: MapPositionTable
}

interface BoundingBoxTable {}

/** @addAfter BoundingBox */
interface BoundingBoxRead extends BoundingBoxTable {
  readonly left_top: MapPositionTable
  readonly right_bottom: MapPositionTable
  readonly orientation?: RealOrientation
}

/** @readType BoundingBoxRead */
interface BoundingBox {}

/** @readType Fluid */
interface FluidIdentification {}

/** @readType LuaForce */
interface ForceIdentification {}

/** @readType LuaTechnology */
interface TechnologyIdentification {}

/** @readType LuaSurface */
interface SurfaceIdentification {}

/** @readType LuaPlayer */
interface PlayerIdentification {}

/** @readType LuaItemPrototype */
interface ItemPrototypeIdentification {}

// Skipped: EntityPrototypeIdentification, ItemStackIdentification

interface MapGenSettings {}

/** @addBefore BlueprintEntity */
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
/** @addBefore BlueprintEntity */
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
/** @addBefore BlueprintEntity */
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

interface CircuitCondition {}
interface Signal {}
interface DeciderCombinatorParameters {}
interface ProgrammableSpeakerCircuitParameters {}

/** @addTo concepts */
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
