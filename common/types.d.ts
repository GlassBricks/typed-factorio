/** @noResolution */
declare module "factorio:common" {
  import { ModSetting } from "factorio:runtime"
  import { PrototypeMap as PrototypePrototypeMap } from "factorio:prototype"
  import { PrototypeMap as SettingsPrototypeMap } from "factorio:settings"
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

  export interface DataGlobal<M = GlobalPrototypeMap> {
    /**
     * A table of the already added prototypes.
     * Indexed by prototype type, then by prototype name.
     */
    readonly raw: {
      readonly [T in keyof M]: {
        readonly [name: string]: M[T] | undefined
      }
    }

    /**
     * Add additional prototypes.
     */
    extend(prototypes: readonly AnyPrototype<M>[]): void
  }

  export interface SettingsGlobal {
    readonly startup: {
      readonly [name: string]: ModSetting
    }
  }

  /** A version string, in the form "major.minor.patch". */
  export type VersionString = `${bigint}.${bigint}.${bigint}`

  export interface ActiveMods {
    readonly [modName: string]: VersionString | undefined
  }

  /**
   * Represents a `data` global variable for the prototype stage.
   *
   * If you did _not_ add `"typed-factorio/prototype"` to your tsconfig, you can manually declare this global like so:
   * ```ts
   * import { PrototypeData } from "factorio:prototype"
   * declare const data: PrototypeData
   *
   * data.extend(...)
   * ```
   */
  export type PrototypeData = DataGlobal<PrototypePrototypeMap>

  /**
   * Represents a `data` global variable for the settings stage.
   *
   * If you did _not_ add `"typed-factorio/settings"` to your tsconfig, you can manually declare this global like so:
   * ```ts
   * import { SettingsData } from "factorio:settings"
   * declare const data: SettingsData
   *
   * data.extend(...)
   * ```
   */
  export type SettingsData = DataGlobal<SettingsPrototypeMap>
}
