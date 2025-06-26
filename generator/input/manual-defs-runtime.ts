/// <reference path="../../prototype/generated/prototypes.d.ts" />
/// <reference path="../../prototype/generated/types.d.ts" />
/// <reference path="../../settings/types.d.ts" />
// noinspection JSUnusedGlobalSymbols

import { ActiveMods, CustomInputName, VersionString } from "factorio:common" // See https://forums.factorio.com/viewtopic.php?f=233&t=118305

/** @omit */
export interface VirtualSignalID {}

/** @omit */
export interface SpaceConnectionID {}

export interface LuaObject {
  readonly object_name: string
}

export interface LogisticSections {}

export interface LogisticSection {}

export interface BlueprintLogisticFilter {}

export type double = number
export type float = number
export type table = object
export type int = number
export type int8 = number
export type int16 = number
export type uint = number
export type uint8 = number
export type uint16 = number
export type uint64 = number
export type nil = undefined

declare namespace defines {
  namespace difficulty_settings {
    enum recipe_difficulty {}

    enum technology_difficulty {}
  }

  enum wire_connector_id {}

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
    const script_raised_teleported: EventId<any>
    const script_raised_set_tiles: EventId<any>
  }

  // See https://forums.factorio.com/viewtopic.php?f=233&t=118305
  /** @omit */
  enum default_icon_size {}

  /** @numericEnum */
  enum command {}

  /** @numericEnum */
  enum direction {}

  enum logistic_member_index {}

  namespace control_behavior {
    namespace mining_drill {
      enum resource_read_mode {}
    }
    namespace transport_belt {
      enum content_read_mode {}
    }
    namespace inserter {
      enum hand_read_mode {}
    }
    namespace logistic_container {
      enum exclusive_mode {}
    }
    namespace lamp {
      enum color_mode {}
    }
    namespace roboport {
      enum read_items_mode {}
    }
    namespace cargo_landing_pad {
      enum exclusive_mode {}
    }
    namespace rocket_silo {
      enum read_mode {}
    }
  }
}

// -- classes --

export type LuaCustomTable<K extends string | number, V, IterKey extends string | number = K> = {
  [P in K]: V
} & LuaPairsIterable<IterKey, V>

export interface LuaLazyLoadedValue<T> {
  get(): T
}

export interface ChunkPositionAndArea {}

export interface LuaChunkIterator extends LuaIterable<ChunkPositionAndArea> {}

// Array-likeTypes

export interface Fluid {}

export interface LuaFluidBox extends Array<Fluid | nil> {}

export interface LuaTransportLine extends ReadonlyArray<LuaItemStack> {}

export interface LuaInventory extends ReadonlyArray<LuaItemStack> {}

/**
 * @addTo concepts
 * @usage w
 */
export type StyleValuesArray =
  | readonly [topBottom: int, leftRight: int]
  | readonly [top: int, right: int, bottom: int, left: int]
/**
 * @addTo concepts
 * @usage w
 */
export type SizeArray = readonly [width: int, height: int]

export interface LuaStyle {
  set size(value: int | SizeArray)

  set padding(value: int | StyleValuesArray)

  set margin(value: int | StyleValuesArray)

  /** @subclasses scroll-pane */
  set extra_padding_when_activated(value: int | StyleValuesArray)

  /** @subclasses scroll-pane */
  set extra_margin_when_activated(value: int | StyleValuesArray)
}

export interface GuiElementType {}

export interface BaseGuiSpec {}

export interface SignalID {}

export interface SignalIDWrite {}

export interface ItemIDAndQualityIDPair {}

// stub only
export interface GuiSpec {
  type
}

/**
 * @readType PrototypeWithQualityRead
 */
interface PrototypeWithQuality {}
/** @addTo concepts after PrototypeWithQuality */
interface PrototypeWithQualityRead {
  readonly name: string
  readonly quality: string
}

/** @discriminatedUnion type */
export type LuaGuiElement = {
  readonly [name: string]: LuaGuiElement | nil
} & {
  readonly type: GuiElementType

  /** @variantsName GuiSpec */
  add<Type extends GuiElementType>(element: GuiSpec & { type: Type }): Extract<LuaGuiElement, { type: Type }>

  get elem_value(): // @ts-ignore
  this["elem_type"] extends "signal"
    ? SignalID | nil
    : // @ts-ignore
      this["elem_type"] extends "with-quality"
      ? PrototypeWithQualityRead | nil
      : string | nil
  set elem_value(
    value: // @ts-ignore
    this["elem_type"] extends "signal"
      ? SignalIDWrite | nil
      : // @ts-ignore
        this["elem_type"] extends "with-quality"
        ? PrototypeWithQuality | nil
        : string | nil,
  )

  /** @subclasses slider */
  get_slider_minimum()
  /** @subclasses slider */
  get_slider_maximum()
  /** @subclasses slider */
  set_slider_minimum_maximum()

  /** @subclasses slider */
  get_slider_value_step()
  /** @subclasses slider */
  get_slider_discrete_values()
  /** @subclasses slider */
  set_slider_value_step()
  /** @subclasses slider */
  set_slider_discrete_values()
  /** @subclasses dropdown */
  close_dropdown()

  drag_target?: FrameGuiElement

  set style(style: LuaStyle | string)
  get style(): LuaStyle
}

export interface FrameGuiElement {}

export interface LuaEquipment {}

export interface LuaEquipmentGrid {}

export interface LuaTechnology {}

export interface CraftingQueueItem {}

export interface LuaPrototypeBase {}

export interface LuaControl {
  set opened(
    value:
      | LuaEntity
      | LuaItemStack
      | LuaEquipment
      | LuaEquipmentGrid
      | LuaPlayer
      | LuaGuiElement
      | LuaInventory
      | LuaTechnology
      | defines.gui_type
      | nil,
  )

  get opened():
    | LuaEntity
    | LuaEquipment
    | LuaEquipmentGrid
    | LuaPlayer
    | LuaGuiElement
    | LuaInventory
    | LuaTechnology
    | nil

  /** @overload */
  teleport(x: number, y?: number): boolean
}

export interface LuaLogisticPoint {}

export interface LuaEntity {
  get_logistic_point(index: defines.logistic_member_index): LuaLogisticPoint | nil
  get_logistic_point(): Record<defines.logistic_member_index, LuaLogisticPoint> | nil
}

export interface LuaGroup {
  readonly type: "item-group" | "item-subgroup"
}

export interface LuaItemStack {}

export interface LuaPlayer {
  readonly cutscene_character?: LuaEntity
}

// other

export interface Any {}

export interface LuaRemote {
  add_interface(name: string, functions: Record<string, (...args: any) => void>): void

  call<I extends Record<K, (...args: any) => any>, K extends keyof I>(
    _interface: string,
    _function: K,
    ...args: Parameters<I[K]>
  ): ReturnType<I[K]>
  call<T extends (...args: any) => any>(_interface: string, _function: string, ...args: Parameters<T>): ReturnType<T>
  call(_interface: string, _function: string, ...args: readonly Any[]): Any | nil
}

// events

/** @addTo concepts before EventData */
export type RaiseableEvents =
  | typeof defines.events.on_console_chat
  | typeof defines.events.on_player_crafted_item
  | typeof defines.events.on_player_fast_transferred
  | typeof defines.events.on_biter_base_built
  | typeof defines.events.on_market_item_purchased
  | typeof defines.events.script_raised_built
  | typeof defines.events.script_raised_destroy
  | typeof defines.events.script_raised_revive
  | typeof defines.events.script_raised_teleported
  | typeof defines.events.script_raised_set_tiles

export interface EventData {
  readonly name: EventId<EventData> | string
}

export interface CustomInputEvent {}

export interface ModChangeData {
  readonly old_version: VersionString | nil
  readonly new_version: VersionString | nil
}

export interface ConfigurationChangedData {
  readonly old_version?: VersionString
  readonly new_version?: VersionString
}

/**
 * @addTo concepts before EventData
 * @usage rw
 */
/** An event id. */
export type EventId<T extends object, F = unknown> = uint & {
  readonly _eventData: T & EventData
  readonly _filter: F
}

/** @addTo concepts before EventData */
/**
 * An event id generated by {@link LuaBootstrap#generate_event_name LuaBootstrap::generate_event_name} and raiseable via
 * {@link LuaBootstrap#raise_event LuaBootstrap::raise_event}.
 */
export type CustomEventId<T extends table> = EventId<T> & {
  _customEventIdBrand: any
}

/** @unionAdd */
type LuaEventType = EventId<any>

interface LuaCustomInputPrototype {
  readonly event_id: EventId<CustomInputEvent>
}

interface LuaCustomEventPrototype {
  readonly event_id: EventId<EventData>
}

/**
 * @addTo concepts
 * @usage w
 */
export type EventTypeOf<T extends LuaEventType> = T extends string | LuaCustomInputPrototype
  ? CustomInputEvent
  : T extends EventId<infer E, any>
    ? E
    : T extends LuaCustomEventPrototype
      ? EventData
      : never

/**
 * @references RaiseableEvents CustomEventId
 */
export interface LuaBootstrap {
  on_event<E extends EventId<any, table>>(
    event: E,
    handler: ((data: E["_eventData"]) => void) | nil,
    filters?: E["_filter"][],
  ): void
  on_event<E extends EventId<any>>(event: E | readonly E[], f: ((data: E["_eventData"]) => void) | nil): void
  on_event(event: CustomInputName | LuaCustomInputPrototype, f: ((data: CustomInputEvent) => void) | nil): void
  on_event<E extends LuaEventType>(event: E, f: ((data: EventTypeOf<E>) => void) | nil): void

  generate_event_name<T extends table>(): CustomEventId<T>

  get_event_id<E extends EventId<any, any>>(event: E): E
  get_event_id<E extends LuaEventType>(event: E): EventId<EventTypeOf<E>>

  get_event_handler<E extends EventId<any>>(event: E): (data: E["_eventData"]) => void | nil
  get_event_handler(event: CustomInputName | LuaCustomInputPrototype): (data: CustomInputEvent) => void | nil
  get_event_handler<E extends LuaEventType>(event: E): (data: EventTypeOf<E>) => void | nil

  get_event_filter<E extends EventId<any, table>>(event: E): E["_filter"][] | nil
  set_event_filter<E extends EventId<any, table>>(event: E, filters: E["_filter"][] | nil): void

  raise_event<E extends RaiseableEvents | CustomEventId<any>>(
    event: E,
    data: Omit<E["_eventData"], keyof EventData>,
  ): void

  readonly active_mods: ActiveMods
}

export interface LuaSurface {}

export interface LuaForce {}

export interface PipeConnectionDefinition {
  linked_connection_id: uint
}

export type PlayerIndex = uint
export type SurfaceIndex = uint
export type ForceIndex = uint

export interface LuaGameScript {
  get_player(player: PlayerIndex | string): LuaPlayer | nil

  get_surface(surface: SurfaceIndex | string): LuaSurface | nil

  readonly players: LuaCustomTable<PlayerIndex | string, LuaPlayer, PlayerIndex>
  readonly surfaces: LuaCustomTable<SurfaceIndex | string, LuaSurface, string>
  readonly forces: LuaCustomTable<ForceIndex | string, LuaForce, string>
}

export interface ModSetting {
  readonly value: int | double | boolean | string | Color | ColorArray
}

export interface LuaSettings {
  readonly startup: {
    readonly [name: string]: ModSetting
  }
}

//  -- Concepts --

/** @unionReplace array */
export type LocalisedString = [string, ...LocalisedString[]]

export interface RealOrientation {}

export interface MapPosition {}

export interface MapPositionArray {}

export interface Color {}

// more specific type described in Color's description
export type ColorArray = readonly [r: double, g: double, b: double, a?: double]
export type ColorModifierArray = readonly [r: double, g: double, b: double, a?: double]

/** @replace */
export type Vector = MapPositionArray

/** @readType float */
export interface MapGenSize {}

/** @readType ComparatorStringRead */
export interface ComparatorString {}

/** @addTo concepts after ComparatorString */
/** @see ComparatorString */
export type ComparatorStringRead = "=" | ">" | "<" | "≥" | "≤" | "≠"

/** @writeType MouseButtonFlagsWrite */
export interface MouseButtonFlags {}

/** @addTo concepts after MouseButtonFlags */
/** @see MouseButtonFlags */
export type MouseButtonFlagsWrite = MouseButtonFlags | ReadonlyArray<keyof MouseButtonFlags | "left-and-right">

/** @addTo concepts before SpritePath */
export type SpriteType =
  | "item"
  | "entity"
  | "technology"
  | "recipe"
  | "fluid"
  | "tile"
  | "item-group"
  | "virtual-signal"
  | "shortcut"
  | "achievement"
  | "equipment"
  | "ammo-category"
  | "decorative"
  | "space-connection"
  | "space-location"
  | "surface"
  | "airborne-pollutant"
  | "asteroid-chunk"
  | "quality"
  | "file"
  | "utility"

/**
 * @replace
 * @references SpriteType
 */
export type SpritePath = (string & { _?: never }) | `${SpriteType}${"/" | "."}${string}`

/** @addTo concepts before SoundPath */
export type SoundCategory =
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

/**
 * @replace
 * @references SoundCategory
 */
export type SoundPath = (string & { _?: never }) | `${SoundCategory}/${string}`

/** @unionReplace type */
export type RenderLayer = `${bigint}`

// where a vector is supposed to be a position table instead

export interface SmokeSource {
  readonly position?: MapPosition
  readonly north_position?: MapPosition
  readonly east_position?: MapPosition
  readonly south_position?: MapPosition
  readonly west_position?: MapPosition
}

/** @writeType BoundingBoxWrite BoundingBoxArray */
export interface BoundingBox {}

/** @addTo concepts after BoundingBox */
/**
 * Write form of {@link BoundingBox}, as a table, where positions are allowed to take an array form.
 */
export interface BoundingBoxWrite {
  readonly left_top: MapPosition | MapPositionArray
  readonly right_bottom: MapPosition | MapPositionArray
  readonly orientation?: RealOrientation
}

// /** @readType Fluid */
// export interface FluidID {}

/** @readType LuaForce */
export interface ForceID {}

/** @readType LuaTechnology */
export interface TechnologyID {}

// /** @readType LuaSurface */
// export interface SurfaceIdentification {}

export interface EntityID {}

export interface QualityID {}

/** @readType LuaPlayer */
export interface PlayerIdentification {}

export interface SpaceLocationAsteroidSpawnDefinition {
  type: "asteroid-chunk" | "entity"
}

export interface SpaceConnectionAsteroidSpawnDefinition {
  type: "asteroid-chunk" | "entity"
}

export interface BasePostEntityDiedEventFilter {
  filter: "ghost" | "type"
}

export interface BaseUndoRedoAction {
  type:
    | "built-entity"
    | "removed-entity"
    | "built-tile"
    | "removed-tile"
    | "upgraded-entity"
    | "upgraded-modules"
    | "wire-added"
    | "wire-removed"
    | "rotated-entity"
    | "copy-entity-settings"
}

export interface InfinityPipeFilter {}

export interface InfinityInventoryFilter {}

export interface EquipmentPosition {}

export interface DisplayPanelMessageDefinition {}

export interface VehicleAutomaticTargetingParameters {}

export interface BlueprintSchedule {}

/** @addTo concepts after BlueprintEntity */
export interface BlueprintRequestFilters extends LogisticSections {
  /** False if disabled in a vehicle. */
  enabled?: boolean
  request_from_buffers?: boolean
}

/** @addTo concepts after BlueprintEntity */
export interface BlueprintEquipment {
  equipment: ItemIDAndQualityIDPair
  position: EquipmentPosition
}

/** @addProperties */
export interface BlueprintEntity {
  /** Used by assembling machines. Name of the recipe prototype */
  recipe?: string
  /** Used by assembling machines; quality of the recipe. */
  recipe_quality?: QualityID

  /** Used by containers (chests). The index of the first inaccessible item slot due to limiting with the red "bar". 0-based. */
  bar?: uint16

  /** Cargo wagon or filtered container inventory configuration, for item filters and bar. */
  inventory?: BlueprintInventory

  /** Used by Infinity containers and infinity pipes. */
  infinity_settings?: InfinityContainerFilter | InfinityPipeFilter

  /** Used by heat interfaces. */
  mode?: "at-least" | "at-most" | "exactly" | "add" | "remove"
  /** Used by heat interfaces. */
  temperature?: uint

  /** Type of the underground belt or loader. Either "input" or "output". */
  type?: "input" | "output"

  /** Input priority of the splitter. Either "right" or "left", "none" is omitted. */
  input_priority?: "right" | "left"
  /** Output priority of the splitter. Either "right" or "left", "none" is omitted. */
  output_priority?: "right" | "left"
  /** Filter of the splitter. */
  filter?: BlueprintLogisticFilter

  /** Filters of the filter inserter or loader. */
  filters?: BlueprintLogisticFilter[]
  /** Filter mode of the filter inserter. */
  filter_mode?: "whitelist" | "blacklist"
  /** The stack size the inserter is set to. */
  override_stack_size?: uint8
  /** The drop position the inserter is set to. */
  drop_position?: MapPosition
  /** The pickup position the inserter is set to. */
  pickup_position?: MapPosition
  /** Spoiled priority of an inserter. "spoiled-first" or "fresh-first", "none" is omitted. */
  spoil_priority?: "spoiled-first" | "fresh-first"

  /** Used by all entities with logistics sections, except for combinators. */
  request_filters?: BlueprintRequestFilters

  /** Used by programmable speakers. */
  parameters?: ProgrammableSpeakerParameters
  /** Used by programmable speakers. */
  alert_parameters?: ProgrammableSpeakerAlertParameters

  /** Used by rocket silos. I have no idea what this is. */
  transitional_request_index?: uint

  /** Used by {@link https://wiki.factorio.com/Prototype/SimpleEntityWithForce Prototype/SimpleEntityWithForce} or {@link https://wiki.factorio.com/Prototype/SimpleEntityWithOwner Prototype/SimpleEntityWithOwner}. */
  variation?: uint8

  /** Color of the entity. Used by SimpleEntityWithForce, SimpleEntityWithOwner, train stations, locomotives, and vehicles. */
  color?: Color

  /** The name of the train station. */
  station?: string
  /** The train limit of a train stop. */
  manual_trains_limit?: uint
  /** The priority of the train station. */
  priority?: uint8

  /** Orientation of the cargo wagon or locomotive, value from 0 to 1 */
  orientation?: RealOrientation

  /** If this locomotive copies its color from the train stop. Default true. */
  copy_color_from_train_stop?: boolean

  /** Used by spidertons. */
  vehicle_automatic_targeting_parameters?: VehicleAutomaticTargetingParameters
  /** Used by vehicles. */
  driver_is_main_gunner?: boolean
  /** Used by vehicles. */
  selected_gun_index?: uint
  /** Used to vehicles and rolling stock. */
  enable_logistics_while_moving?: boolean

  /** Equipment grid. Note that [items] requests also needs to be set for bots to insert into the grid. */
  grid?: BlueprintEquipment[]

  artillery_auto_targeting?: boolean

  /** Combinator description. */
  player_description?: string

  /** Used by display panels. */
  always_show?: boolean
  /** Used by display panels. */
  show_in_chart?: boolean
  /** Display panel icon. */
  icon?: SignalID
  /** Display panel text. */
  text?: string

  /** Turret configuration. */
  "ignore-unprioritised"?: boolean
  /** Turret configuration. */
  "priority-list"?: {
    index: uint
    entity_id: EntityID
  }[]
}

/** @addTo concepts after BlueprintEntity */
export interface BlueprintInventory {
  filters?: BlueprintLogisticFilter[]
  /** The index of the first inaccessible item slot due to limiting with the red "bar". 0-based. */
  bar?: uint16
}

/** @addTo concepts after BlueprintEntity */
export interface InfinityContainerFilter {
  /** Whether the "remove unfiltered items" checkbox is checked. */
  remove_unfiltered_items: boolean
  /** Filters of the infinity container. */
  filters?: InfinityInventoryFilter[]
}

export interface LogisticFilter {}

export interface ProgrammableSpeakerParameters {}

export interface ProgrammableSpeakerAlertParameters {}

export interface CircuitCondition {}

export interface Signal {}

export interface DeciderCombinatorParameters {}

export interface ProgrammableSpeakerCircuitParameters {}

export interface ArithmeticCombinatorParameters {}

export interface SelectorCombinatorParameters {}

export interface LuaGenericOnOffControlBehavior {
  circuit_enable_disable
  connect_to_logistic_network
  logistic_condition
}

/** @addTo concepts after BlueprintEntity */
export interface BlueprintControlBehavior {
  /**
   * If this entity is enabled/disabled by the circuit network.
   * Does **not** apply to logistic containers, see instead {@link circuit_condition_enabled}.
   *
   * Corresponds to {@link LuaGenericOnOffControlBehavior.circuit_enable_disable}
   */
  circuit_enabled?: boolean
  /** Applies to any entity that can be enabled/disabled by the circuit network. */
  circuit_condition?: CircuitCondition
  /** Corresponds to {@link LuaGenericOnOffControlBehavior.connect_to_logistic_network}. */
  connect_to_logistic_network?: boolean
  /** Corresponds to {@link LuaGenericOnOffControlBehavior.logistic_condition}. */
  logistic_condition?: CircuitCondition

  /**
   * If this entity with inventory reads its contents to the circuit network. Default true.
   * Does not apply to asteroid collectors, see {@link circuit_read_contents}.
   */
  read_contents?: boolean

  /**
   * For assembling machines, whether to include items in crafting for {@link read_contents}.
   * Default true.
   */
  include_in_crafting?: boolean

  /** If an **asteroid collector** reads its contents to the circuit network. Default false.*/
  circuit_read_contents?: boolean

  /** On a turret, if the ammo is read by the circuit network. Default true. */
  read_ammo?: boolean
  /** Used by turrets. */
  set_priority_list?: boolean
  /** Used by turrets. */
  set_ignore_unlisted_targets?: boolean
  /** Used by turrets. */
  ignore_unlisted_targets_condition?: CircuitCondition

  circuit_mode_of_operation?:
    | defines.control_behavior.logistic_container.exclusive_mode
    | defines.control_behavior.cargo_landing_pad.exclusive_mode

  /**
   * If this **logistics container** is enabled/disabled by the circuit network.
   * For other machines, see {@link circuit_enabled}.
   */
  circuit_condition_enabled?: boolean

  /** Accumulator or gate output signal. */
  output_signal?: SignalID

  /** If the accumulator sends its charge to the circuit network. Default true. */
  read_charge?: boolean

  /** Used by walls connected to gates. */
  circuit_open_gate?: boolean
  /** Used by walls connected to gates. The signal is defined by {@link output_signal}. */
  circuit_read_sensor?: boolean

  /** If this inserter or belt is read by the circuit network. */
  circuit_read_hand_contents?: boolean
  /** For reading contents of an inserter. */
  circuit_hand_read_mode?: defines.control_behavior.inserter.hand_read_mode
  /** For reading contents of a belt. */
  circuit_contents_read_mode?: defines.control_behavior.transport_belt.content_read_mode

  /** If this inserter, loader, or asteroid collector has its filters set by the circuit network. */
  circuit_set_filters?: boolean

  /** If this pump should set its only filter from the circuit network */
  set_filter?: boolean

  /** If this loader pulses its transfers to the circuit network. */
  circuit_read_transfers?: boolean

  /** If this inserter has its stack size set by the circuit network. */
  circuit_set_stack_size?: boolean
  stack_control_input_signal?: SignalID

  /** Used by assembling machines. */
  set_recipe?: boolean
  read_ingredients?: boolean
  read_recipe_finished?: boolean
  read_recipe_finished_signal?: SignalID
  read_working?: boolean
  read_working_signal?: SignalID

  /** If this mining drill reads its resources to the circuit network. */
  circuit_read_resources?: boolean
  circuit_resource_read_mode?: defines.control_behavior.mining_drill.resource_read_mode

  /** Used by constant combinators. */
  is_on?: boolean
  /** Used by constant combinators. */
  sections?: LogisticSections

  arithmetic_conditions?: ArithmeticCombinatorParameters
  decider_conditions?: DeciderCombinatorParameters

  // selector combinator parameters are inlined, for some reason
  /** Used by selector combinators. */
  index_signal?: SignalID
  /** Used by selector combinators. */
  index_constant?: uint
  /** Used by selector combinators. */
  count_signal?: SignalID
  /** Used by selector combinators. When not specified, defaults to "select". */
  operation?: "select" | "count" | "random"
  /** Used by selector combinators. */
  select_max?: boolean

  /** Applies to train stop. Default true. */
  send_to_train?: boolean
  read_from_train?: boolean

  set_trains_limit?: boolean
  trains_limit_signal?: SignalID

  read_stopped_train?: boolean
  train_stopped_signal?: SignalID

  read_trains_count?: boolean
  trains_count_signal?: SignalID

  set_priority?: boolean
  priority_signal?: SignalID

  /** Used by lamps. */
  use_colors?: boolean
  color_mode?: defines.control_behavior.lamp.color_mode
  /** Used by **lamps**. For rail signals, see {@link red_output_signal}. */
  red_signal?: SignalID
  /** Used by **lamps**. For rail signals, see {@link green_output_signal}. */
  green_signal?: SignalID
  /** Used by **lamps**. For rail signals, see {@link orange_output_signal}. */
  blue_signal?: SignalID
  /** Used by lamps. */
  rgb_signal?: SignalID

  /** Used by roboports. */
  read_items_mode?: defines.control_behavior.roboport.read_items_mode | defines.control_behavior.rocket_silo.read_mode
  read_robot_stats?: boolean
  available_logistic_output_signal?: SignalID
  total_logistic_output_signal?: SignalID
  available_construction_output_signal?: SignalID
  total_construction_output_signal?: SignalID
  roboport_count_output_signal?: SignalID

  /** Used by train signals. */
  circuit_close_signal?: boolean
  /** Used by train signals. */
  circuit_read_signal?: boolean
  /** Used by **train signals**. For lamps, seed {@link red_signal}. */
  red_output_signal?: SignalID
  /** used by train signals. */
  orange_output_signal?: SignalID
  /** Used by **train signals**. For lamps, seed {@link green_signal}. */
  green_output_signal?: SignalID
  /** Used by **train signals**. For lamps, seed {@link blue_signal}. */
  blue_output_signal?: SignalID

  /** Used by programmable speakers. */
  circuit_parameters?: ProgrammableSpeakerCircuitParameters

  /** Display panel configuration. */
  parameters?: DisplayPanelMessageDefinition

  /** If this reads the fuel contents of this reactor. */
  read_burner_fuel?: boolean

  /** If this reads the temperature of this reactor. */
  read_temperature?: boolean
  temperature_signal?: SignalID

  /** Used by space platform hub. */
  send_to_platform?: boolean
  read_moving_from?: boolean
  read_moving_to?: boolean
  read_speed?: boolean
  speed_signal?: SignalID
  read_damage_taken?: boolean
  damage_taken_signal?: SignalID
}
