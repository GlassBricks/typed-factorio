/** @noResolution */
declare module "factorio:common" {
  import { Data, PrototypeMap } from "factorio:prototype"
  import { LuaBootstrap, ModSetting } from "factorio:runtime"
  import { SettingsPrototypeMap } from "factorio:settings"
  /**
   * A type map of type name -> prototype type.
   *
   * Including the settings/prototype stage in your tsconfig extends this interface.
   */
  export interface GlobalPrototypeMap {}

  /** Represents any valid prototype. */
  export interface AnyPrototype<M = GlobalPrototypeMap> {
    readonly type: keyof M
    readonly name: string
  }

  export interface SettingsGlobal {
    readonly startup: {
      [name: string]: ModSetting
    }
  }

  /** A version string, in the form "major.minor.patch". */
  export type VersionString = `${bigint}.${bigint}.${bigint}`

  export interface ActiveMods {
    readonly [modName: string]: VersionString | undefined
  }

  export type FeatureFlags = LuaBootstrap["feature_flags"]

  /**
   * Represents the `data` global variable for the prototype stage.
   *
   * If you did _not_ add `"typed-factorio/prototype"` to your tsconfig, you can manually declare this global like so:
   * ```ts
   * import { PrototypeData } from "factorio:prototype"
   * declare const data: PrototypeData
   *
   * data.extend(...)
   * ```
   */
  export type PrototypeData = Data<PrototypeMap>

  /**
   * Represents the `data` global variable for the settings stage.
   *
   * If you did _not_ add `"typed-factorio/settings"` to your tsconfig, you can manually declare this global like so:
   * ```ts
   * import { SettingsData } from "factorio:settings"
   * declare const data: SettingsData
   *
   * data.extend(...)
   * ```
   */
  export type SettingsData = Data<SettingsPrototypeMap>

  /**
   * You can optionally extend this interface to provide type checking and autocompletion for custom input names, like so:
   * ```ts
   * declare module "factorio:common" {
   *    export interface CustomInputNames {
   *        "my-custom-event": true
   *    }
   * }
   *
   * // this enables type checking for the following:
   * script.on_event("my-custom-event", ...)
   *
   * data.extend<CustomInputPrototype>([{
   *   type: "custom-input",
   *   name: "my-custom-event", // type checked
   * }])
   * ```
   * @see CustomInputName
   */
  export interface CustomInputNames {}

  /**
   * All custom event names. See {@link CustomInputNames}.
   *
   * If none are specified, this is just `string`.
   */
  export type CustomInputName = [keyof CustomInputNames] extends [never] ? string : keyof CustomInputNames
}
