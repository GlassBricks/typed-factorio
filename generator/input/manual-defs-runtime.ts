/// <reference path="../../prototype/generated/prototypes.d.ts" />
/// <reference path="../../prototype/generated/types.d.ts" />
/// <reference path="../../settings/types.d.ts" />
// noinspection JSUnusedGlobalSymbols

import { ActiveMods, CustomInputName, VersionString } from "factorio:common"
import { PrototypeMap } from "factorio:prototype"
import { SettingsPrototypeMap } from "factorio:settings"

export interface LuaObject {
  readonly object_name: string
}

export type double = number
export type float = number
export type table = object
export type int = number
export type int8 = number
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
    const script_raised_teleported: EventId<any>
    const script_raised_set_tiles: EventId<any>
  }

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
      enum circuit_mode_of_operation {}

      enum hand_read_mode {}
    }
    namespace logistic_container {
      enum circuit_mode_of_operation {}
    }
    namespace lamp {
      enum circuit_mode_of_operation {}
    }
  }
}

// -- classes --

/** @addBefore LuaCustomTable */
/**
 * This type gives:
 * - a number type, if K includes a number in its union
 * - K otherwise
 *
 * It also preserves number branding.
 */
export type LuaCustomTableIterKey<K> = [number] extends [K extends number ? number : K]
  ? K extends string
    ? never
    : K
  : K

export type LuaCustomTable<K extends string | number, V> = {
  [P in K]: V
} & LuaPairsIterable<LuaCustomTableIterKey<K>, V>

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

/** @addTo concepts */
export type StyleValuesArray =
  | readonly [topBottom: int, leftRight: int]
  | readonly [top: int, right: int, bottom: int, left: int]
/** @addTo concepts */
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

export interface BaseGuiSpec {
  readonly type: GuiElementType
}

export interface FlowGuiSpec {
  readonly direction?: "horizontal" | "vertical"
}

export interface FrameGuiSpec {
  readonly direction?: "horizontal" | "vertical"
}

export interface LineGuiSpec {
  readonly direction?: "horizontal" | "vertical"
}

export interface SignalID {}

export interface ItemPrototypeFilter {}

export interface TilePrototypeFilter {}

export interface EntityPrototypeFilter {}

export interface FluidPrototypeFilter {}

export interface RecipePrototypeFilter {}

export interface DecorativePrototypeFilter {}

export interface AchievementPrototypeFilter {}

export interface EquipmentPrototypeFilter {}

export interface TechnologyPrototypeFilter {}

/** @addBefore ChooseElemButtonGuiSpec */
export type ChooseElemButtonType =
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
export interface ChooseElemButtonFilters {
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
export interface BaseChooseElemButtonSpec extends BaseGuiSpec {
  readonly type: "choose-elem-button"
  /** The type of the button - one of the following values. */
  readonly elem_type: ChooseElemButtonType
  /** Filters describing what to show in the selection window. See {@link LuaGuiElement.elem_filters LuaGuiElement::elem_filters}. */
  readonly elem_filters?: ChooseElemButtonFilters[this["elem_type"]]
}

/** @addBefore ChooseElemButtonGuiSpec */
export interface ItemChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "item"
  /** If type is `"item"` - the default value for the button. */
  readonly item?: string
}

/** @addBefore ChooseElemButtonGuiSpec */
export interface TileChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "tile"
  /** If type is `"tile"` - the default value for the button. */
  readonly tile?: string
}

/** @addBefore ChooseElemButtonGuiSpec */
export interface EntityChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "entity"
  /** If type is `"entity"` - the default value for the button. */
  readonly entity?: string
}

/** @addBefore ChooseElemButtonGuiSpec */
export interface SignalChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "signal"
  /** If type is `"signal"` - the default value for the button. */
  readonly signal?: SignalID
}

/** @addBefore ChooseElemButtonGuiSpec */
export interface FluidChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "fluid"
  /** If type is `"fluid"` - the default value for the button. */
  readonly fluid?: string
}

/** @addBefore ChooseElemButtonGuiSpec */
export interface RecipeChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "recipe"
  /** If type is `"recipe"` - the default value for the button. */
  readonly recipe?: string
}

/** @addBefore ChooseElemButtonGuiSpec */
export interface DecorativeChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "decorative"
  /** If type is `"decorative"` - the default value for the button. */
  readonly decorative?: string
}

/** @addBefore ChooseElemButtonGuiSpec */
export interface ItemGroupChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "item-group"
  /** If type is `"item-group"` - the default value for the button. */
  readonly "item-group"?: string
}

/** @addBefore ChooseElemButtonGuiSpec */
export interface AchievementChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "achievement"
  /** If type is `"achievement"` - the default value for the button. */
  readonly achievement?: string
}

/** @addBefore ChooseElemButtonGuiSpec */
export interface EquipmentChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "equipment"
  /** If type is `"equipment"` - the default value for the button. */
  readonly equipment?: string
}

/** @addBefore ChooseElemButtonGuiSpec */
export interface TechnologyChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "technology"
  /** If type is `"technology"` - the default value for the button. */
  readonly technology?: string
}

export type ChooseElemButtonGuiSpec =
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
export interface GuiSpec {
  type
}

/** @discriminatedUnion type */
export type LuaGuiElement = {
  readonly [name: string]: LuaGuiElement | nil
} & {
  readonly type: GuiElementType

  /** @variantsName GuiSpec */
  add<Type extends GuiElementType>(element: GuiSpec & { type: Type }): Extract<LuaGuiElement, { type: Type }>

  readonly elem_type: ChooseElemButtonType
  // @ts-ignore
  elem_value: (this["elem_type"] extends "signal" ? SignalID : string) | nil

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
  /** @subclasses dropdown */
  close_dropdown()
  /** @subclasses flow frame label table empty-widget */
  drag_target?: FrameGuiElement

  set style(style: LuaStyle | string)
  get style(): LuaStyle
}

export interface FrameGuiElement {}

// nullability, multi-return, different read/write types

export interface LuaEquipment {}

export interface LuaEquipmentGrid {}

export interface LuaTechnology {}

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

export interface LuaModSettingPrototype {
  readonly type: keyof SettingsPrototypeMap
}

export interface LuaItemStack {}

export interface LuaPlayer {
  readonly cutscene_character: LuaEntity | nil
}

// other

export interface Any {}

export interface LuaRemote {
  add_interface(name: string, functions: Record<string, (...args: any) => void>): void

  call<T extends (...args: any) => any>(_interface: string, _function: string, ...args: Parameters<T>): ReturnType<T>

  call(_interface: string, _function: string, ...args: readonly Any[]): Any | nil
}

// events

/** @addTo concepts */
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

/** @addTo concepts */
/** An event id. */
export type EventId<T extends object, F = unknown> = uint & {
  readonly _eventData: T
  readonly _filter: F
}

/** @addTo events */
/**
 * An event id generated by {@link LuaBootstrap#generate_event_name LuaBootstrap::generate_event_name} and raiseable via
 * {@link LuaBootstrap#raise_event LuaBootstrap::raise_event}.
 */
export type CustomEventId<T extends table> = EventId<T> & {
  _customEventIdBrand: any
}

export interface LuaBootstrap {
  on_event<E extends EventId<any, table>>(
    event: E,
    handler: ((data: E["_eventData"]) => void) | nil,
    filters?: E["_filter"][],
  ): void

  on_event<E extends EventId<any>>(event: E | E[], f: ((data: E["_eventData"]) => void) | nil): void

  on_event(event: CustomInputName, f: ((data: CustomInputEvent) => void) | nil): void

  generate_event_name<T extends table>(): CustomEventId<T>

  get_event_handler<E extends EventId<any>>(event: E): (data: E["_eventData"]) => void | nil

  get_event_handler(event: CustomInputName): (data: CustomInputEvent) => void | nil

  get_event_filter<E extends EventId<any, table>>(event: E): E["_filter"][] | nil

  set_event_filter<E extends EventId<any, table>>(event: E, filters: E["_filter"][] | nil): void

  raise_event<E extends RaiseableEvents | CustomEventId<any>>(
    event: E,
    data: Omit<E["_eventData"], keyof EventData>,
  ): void

  readonly active_mods: ActiveMods

  get_prototype_history(type: keyof PrototypeMap, name: string)
}

export interface LuaSurface {}

export type PlayerIndex = uint
export type SurfaceIndex = uint

export interface LuaGameScript {
  get_player(player: PlayerIndex | string): LuaPlayer | nil

  get_surface(surface: SurfaceIndex | string): LuaSurface | nil

  readonly players: LuaCustomTable<PlayerIndex | string, LuaPlayer>
  readonly surfaces: LuaCustomTable<SurfaceIndex | string, LuaSurface>

  readonly active_mods: ActiveMods
}

export interface ModSetting {
  /**
   * The value of the mod setting. The type depends on the kind of setting.
   */
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

export type ColorArray = readonly [r: double, g: double, b: double, a?: double]
export type ColorModifierArray = readonly [r: double, g: double, b: double, a?: double]

/** @replace */
export type Vector = MapPositionArray

/** @readType float */
export interface MapGenSize {}

/** @readType ComparatorStringRead */
export interface ComparatorString {}

/** @addAfter ComparatorString */
/** @see ComparatorString */
export type ComparatorStringRead = "=" | ">" | "<" | "≥" | "≤" | "≠"

export interface ArithmeticCombinatorParameters {
  readonly operation?: "*" | "/" | "+" | "-" | "%" | "^" | "<<" | ">>" | "AND" | "OR" | "XOR"
}

/** @writeType MouseButtonFlagsWrite */
export interface MouseButtonFlags {}

/** @addAfter MouseButtonFlags */
/** @see MouseButtonFlags */
export type MouseButtonFlagsWrite = MouseButtonFlags | ReadonlyArray<keyof MouseButtonFlags | "left-and-right">

/** @addBefore SpritePath */
export type SpriteType =
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

/** @replace */
export type SpritePath = (string & { _?: never }) | `${SpriteType}/${string}`

/** @addBefore SoundPath */
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

/** @replace */
export type SoundPath = (string & { _?: never }) | `${SoundCategory}/${string}`

/** @unionAdd */
export type CollisionMaskLayer = `layer-${bigint}`

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

export interface FluidBoxConnection {
  readonly positions: MapPosition[]
}

/** @writeType BoundingBoxWrite BoundingBoxArray */
export interface BoundingBox {}

/** @addAfter BoundingBox */
/**
 * Write form of {@link BoundingBox}, as a table, where positions are allowed to take an array form.
 */
export interface BoundingBoxWrite {
  readonly left_top: MapPosition | MapPositionArray
  readonly right_bottom: MapPosition | MapPositionArray
  readonly orientation?: RealOrientation
}

// /** @readType Fluid */
// interface FluidIdentification {}

/** @readType LuaForce */
export interface ForceIdentification {}

/** @readType LuaTechnology */
export interface TechnologyIdentification {}

// /** @readType LuaSurface */
export interface SurfaceIdentification {}

/** @readType LuaPlayer */
export interface PlayerIdentification {}

/** @readType LuaItemPrototype */
export interface ItemPrototypeIdentification {}

// Skipped: EntityPrototypeIdentification, ItemStackIdentification

export interface InfinityPipeFilter {}

/** @addProperties */
export interface BlueprintEntity {
  /** Orientation of the cargo wagon or locomotive, value 0 to 1 */
  readonly orientation?: RealOrientation
  /** Copper wire connections, array of entity_numbers */
  readonly neighbours?: uint[]
  /** Name of the recipe prototype this assembling machine is set to. */
  readonly recipe?: string
  /** Used by {@link https://wiki.factorio.com/Prototype/Container Prototype/Container}. The index of the first inaccessible item slot due to limiting with the red "bar". 0-based. */
  readonly bar?: uint16
  /** Cargo wagon inventory configuration */
  readonly inventory?: BlueprintInventory
  /** Used by {@link https://wiki.factorio.com/Prototype/InfinityContainer Prototype/InfinityContainer}. */
  readonly infinity_settings?: BlueprintInfinitySettings | InfinityPipeFilter
  /** Type of the underground belt or loader. Either "input" or "output". */
  readonly type?: "input" | "output"
  /** Input priority of the splitter. Either "right" or "left", "none" is omitted. */
  readonly input_priority?: "right" | "left"
  /** Output priority of the splitter. Either "right" or "left", "none" is omitted. */
  readonly output_priority?: "right" | "left"
  /** Filter of the splitter. Name of the item prototype the filter is set to. */
  readonly filter?: string
  /** Filters of the filter inserter or loader. Array of {@link InventoryFilter} objects. */
  readonly filters?: InventoryFilter[]
  /** Filter mode of the filter inserter. Either "whitelist" or "blacklist". */
  readonly filter_mode?: "whitelist" | "blacklist"
  /** The stack size the inserter is set to. */
  readonly override_stack_size?: uint8
  /** The drop position the inserter is set to. */
  readonly drop_position?: MapPosition
  /** The pickup position the inserter is set to. */
  readonly pickup_position?: MapPosition
  /** Used by {@link https://wiki.factorio.com/Prototype/LogisticContainer Prototype/LogisticContainer}. */
  readonly request_filters?: LogisticFilter[]
  /** Whether this requester chest can request from buffer chests. */
  readonly request_from_buffers?: boolean
  /** Used by {@link https://wiki.factorio.com/Programmable_speaker Programmable speaker}. */
  readonly parameters?: ProgrammableSpeakerParameters
  /** Used by {@link https://wiki.factorio.com/Programmable_speaker Programmable speaker}. */
  readonly alert_parameters?: ProgrammableSpeakerAlertParameters
  /** Used by the rocket silo, whether auto launch is enabled. */
  readonly auto_launch?: boolean
  /** Used by {@link https://wiki.factorio.com/Prototype/SimpleEntityWithForce Prototype/SimpleEntityWithForce} or {@link https://wiki.factorio.com/Prototype/SimpleEntityWithOwner Prototype/SimpleEntityWithOwner}. */
  readonly variation?: uint8
  /** Color of the {@link https://wiki.factorio.com/Prototype/SimpleEntityWithForce Prototype/SimpleEntityWithForce}, {@link https://wiki.factorio.com/Prototype/SimpleEntityWithOwner Prototype/SimpleEntityWithOwner}, or train station. */
  readonly color?: Color
  /** The name of the train station. */
  readonly station?: string
}

/** @addAfter BlueprintEntity */
/**
 * Information about a single connection between two connection points.
 *
 * {@link https://wiki.factorio.com/Blueprint_string_format#Connection_data_object View Documentation}
 */
export interface BlueprintConnectionData {
  /** ID of the entity this connection is connected with. */
  entity_id: uint
  /** The circuit connector id of the entity this connection is connected to, see {@link defines.circuit_connector_id} */
  circuit_id?: defines.circuit_connector_id
}

/** @addAfter BlueprintEntity */
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
  red?: BlueprintConnectionData[]
  /**
   * An array of {@link BlueprintConnectionData Connection data object} containing all the connections from this point
   * created by green wire.
   */
  green?: BlueprintConnectionData[]
}

/** @addAfter BlueprintEntity */
/**
 * Object containing information about the connections to other entities formed by red or green wires.
 *
 * {@link https://wiki.factorio.com/Blueprint_string_format#Connection_object View Documentation}
 */
export interface BlueprintCircuitConnection {
  /** First connection point. The default for everything that doesn't have multiple connection points. */
  "1"?: BlueprintConnectionPoint
  /** Second connection point. For example, the "output" part of an arithmetic combinator. */
  "2"?: BlueprintConnectionPoint
}

/** @addAfter BlueprintEntity */
export interface BlueprintInventory {
  readonly filters?: InventoryFilter[]
  /** The index of the first inaccessible item slot due to limiting with the red "bar". 0-based. */
  readonly bar?: uint16
}

/** @addAfter BlueprintEntity */
export interface BlueprintInfinitySettings {
  /** Whether the "remove unfiltered items" checkbox is checked. */
  readonly remove_unfiltered_items: boolean
  /** Filters of the infinity container. */
  readonly filters?: InfinityInventoryFilter[]
}

export interface InventoryFilter {}

export interface LogisticFilter {}

export interface InfinityInventoryFilter {}

export interface ProgrammableSpeakerParameters {}

export interface ProgrammableSpeakerAlertParameters {}

export interface CircuitCondition {}

export interface Signal {}

export interface DeciderCombinatorParameters {}

export interface ProgrammableSpeakerCircuitParameters {}

export interface ConstantCombinatorParameters {}

/** @addAfter BlueprintEntity */
export interface BlueprintControlBehavior {
  readonly condition?: CircuitCondition
  readonly circuit_condition?: CircuitCondition
  readonly filters?: ConstantCombinatorParameters[]
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
  readonly circuit_mode_of_operation?:
    | defines.control_behavior.inserter.circuit_mode_of_operation
    | defines.control_behavior.logistic_container.circuit_mode_of_operation
    | defines.control_behavior.lamp.circuit_mode_of_operation
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
