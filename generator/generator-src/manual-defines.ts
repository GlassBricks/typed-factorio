type uint = number
type double = number
declare namespace defines {
  namespace difficulty_settings {
    enum recipe_difficulty {}

    enum technology_difficulty {}
  }
  enum circuit_connector_id {}
}

// indexing + generics
type LuaCustomTable<K extends keyof any, V> = {
  [P in K]: V
}

interface LuaLazyLoadedValue<T> {
  get(): T
}

interface Fluid {}

interface LuaFluidBox extends Array<Fluid | undefined> {}

type LuaGuiElement = {
  readonly [name: string]: LuaGuiElement | undefined
}

interface LuaItemStack {}

interface LuaInventory extends ReadonlyArray<LuaItemStack> {}

interface LuaTransportLine extends ReadonlyArray<LuaItemStack> {}

// concepts

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

// additional types

/**
 * Common properties of many factorio LuaObjects.
 *
 * @noSelf
 */
interface LuaObject {
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean

  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed
   * with a dotted path to a member of the struct.
   */
  readonly object_name: string

  /** All methods and properties that this object supports. */
  help(): string
}

interface MapGenSettings {}

/**
 * A map gen preset. Used in {@link https://wiki.factorio.com/Prototype/MapGenPresets Prototype/MapGenPresets}.
 *
 * {@link https://wiki.factorio.com/Types/MapGenPreset View Documentation}
 */
interface MapGenPreset {
  /** Specifies the ordering the map generator gui. */
  order: string
  /** Whether this is the default preset. If set to true, this preset may not have any other properties besides this and order. */
  default?: boolean
  /**
   * This is a table with the below key/value pairs. All key/value pairs are optional. If not set they will just use the
   * default values.
   */
  basic_settings: Partial<MapGenSettings>
  /**
   * This is a table with the below key/value pairs. All key/value pairs are optional, if not set they will just use the
   * existing values.
   */
  advanced_settings: {
    pollution?: {
      enabled?: boolean
      /** Must be <= 0.25. */
      diffusion_ratio?: double
      /** Also known as dissipation rate. Must be >= 0.5. */
      ageing?: double
      enemy_attack_pollution_consumption_modifier?: double
      min_pollution_to_damage_trees?: double
      pollution_restored_per_tree_damage?: double
    }
    enemy_evolution?: {
      enabled?: boolean
      time_factor?: double
      destroy_factor?: double
      pollution_factor?: double
    }
    enemy_expansion?: {
      enabled?: boolean
      max_expansion_distance?: double
      settler_group_min_size?: double
      settler_group_max_size?: double
      /** In ticks. */
      min_expansion_cooldown?: double
      /** In ticks. */
      max_expansion_cooldown?: double
    }
    difficulty_settings?: {
      recipe_difficulty?: defines.difficulty_settings.recipe_difficulty
      technology_difficulty?: defines.difficulty_settings.technology_difficulty
      technology_price_multiplier?: double
      research_queue_setting?: "after-victory" | "always" | "never"
    }
  }
}

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

// wiki scraping?

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
