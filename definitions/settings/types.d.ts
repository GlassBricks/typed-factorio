// Based off of https://wiki.factorio.com/Tutorial:Mod_settings

export type SettingType = "bool-setting" | "int-setting" | "double-setting" | "string-setting"

export interface BaseSettingDefinition {
  type: SettingType
  /**
   * The name of the settings prototype should be unique to avoid mod conflicts since the mod settings are global across
   * all mods. Because of that it is recommended to prefix mod settings with your mod name,
   */
  name: string
  localized_name?: LocalisedString
  localized_description?: LocalisedString

  /**
   * The order property can be used to change how the mod settings are ordered in the settings gui. Mod settings are sorted
   *
   * - First by mod
   * - Then by the setting "order" string
   * - Then finally by the setting name.
   */
  order?: string
  /**
   * The hidden property can be used to hide mod settings from GUIs, so that they cannot be seen or changed by players.
   * However, other mods can still access hidden settings. {@link https://forums.factorio.com/83316}
   */
  hidden?: boolean
  /**
   * There are the overall kinds of settings:
   *
   * - **startup**: This kind of setting is available in the prototype stage, and can not be changed runtime. They have to
   *   be set to the same values for all players on a server.
   * - **runtime-global**: This kind of setting is global to an entire save game and can be changed runtime. On servers,
   *   only admins can change these settings.
   * - **runtime-per-user**: This kind of setting is only available runtime in the control.lua stage and each player has
   *   their own instance of this setting. When a player joins a server their local setting of "keep mod settings per
   *   save" determines if the local settings they have set are synced to the loaded save or if the save's settings are used.
   *
   * This "setting_type" also determines in which tab the setting is showed in the mod settings menu.
   */

  setting_type: "startup" | "runtime-global" | "runtime-per-user"
}
/** A true/false checkbox */
export interface BoolSettingDefinition extends BaseSettingDefinition {
  type: "bool-setting"
  /** Defines the default value of the setting, in this case whether the checkbox is checked or not. */
  default_value: boolean
  /**
   * Only loaded if `hidden = true`. This forces the setting to be of this value. This can be useful for mod
   * compatibility. {@link https://forums.factorio.com/viewtopic.php?p=531322#p531322}
   */
  forced_value?: boolean
}
/** A signed 64 bit integer textfield (or selection dropdown) */
export interface IntSettingDefinition extends BaseSettingDefinition {
  type: "int-setting"
  /** Defines the default value of the setting. */
  default_value: number
  /** Defines the lowest possible number. */
  minimum_value?: number
  /** Defines the highest possible number. */
  maximum_value?: number
  /**
   * Makes it possible to force the player to choose between the defined numbers, creates a dropdown instead of a
   * textfield. If only one allowed value is given, the settings is forced to be of that value.
   */
  allowed_values?: number[]
}
/** A double precision floating point textfield (or selection dropdown) */
export interface DoubleSettingDefinition extends BaseSettingDefinition {
  type: "double-setting"
  /** Defines the default value of the setting. */
  default_value: number
  /** Defines the lowest possible number. */
  minimum_value?: number
  /** Defines the highest possible number. */
  maximum_value?: number
  /**
   * Makes it possible to force the player to choose between the defined numbers, creates a dropdown instead of a
   * textfield. If only one allowed value is given, the settings is forced to be of that value.
   */
  allowed_values?: number[]
}
/** A string textfield (or selection dropdown) */
export interface StringSettingDefinition extends BaseSettingDefinition {
  type: "string-setting"
  /** Defines the default value of the setting. */
  default_value: string
  /** Defines whether it's possible for the user to set the textfield to empty and apply the setting. */
  allow_blank?: boolean
  /** Whether values that are input by the user should have whitespace removed from both ends of the string. */
  auto_trim?: boolean
  /**
   * Makes it possible to force the player to choose between the defined strings, creates a dropdown instead of a
   * textfield. The strings in the dropdown can be localized (translated) and can have a tooltip, see below. If only one
   * allowed value is given, the settings is forced to be of that value.
   */
  allowed_values?: string[]
}
/** Setting definitions. See {@link https://wiki.factorio.com/Tutorial:Mod_settings} for more info. */
export type SettingDefinition =
  | BoolSettingDefinition
  | IntSettingDefinition
  | DoubleSettingDefinition
  | StringSettingDefinition

export interface Data {
  readonly raw: {
    [T in SettingDefinition["type"]]: Record<string, Extract<SettingDefinition, { type: T }>>
  }
  /**
   * The `data` table expects a specific format for each item in the table. Missing properties will either fall back to
   * default values or give an error indicating what's missing. Extra properties that the game isn't looking for are
   * simply ignored.
   */
  extend(prototypes: SettingDefinition[]): void
}
/** A mapping of mod names to mod version for all enabled mods. */
export type Mods = Record<string, string>
