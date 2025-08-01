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

export interface SignalID {}

export interface SignalIDWrite {}

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

/** @writeType BoundingBoxWrite BoundingBoxArray */
export interface BoundingBox {}

/** @invertTableOrArray */
export interface Vector {}

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

/** @readType LuaSurface */
export interface SurfaceIdentification {}

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

/** @replace */
export type BlueprintWire = readonly [
  source_entity_number: uint,
  source_wire_connector_id: defines.wire_connector_id,
  target_entity_number: uint,
  target_wire_connector_id: defines.wire_connector_id,
]
