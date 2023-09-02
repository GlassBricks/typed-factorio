/** @noResolution */
declare module "factorio:common" {
  import { ModSetting } from "factorio:runtime"
  /**
   * A type map of type name -> prototype type.
   *
   * Including the settings/prototype stage in your tsconfig extends this interface.
   */
  export interface PrototypeMap {}

  /** Represents any valid prototype. */
  export interface AnyPrototype {
    readonly type: keyof PrototypeMap
    readonly name: string
  }

  export interface DataGlobal {
    /**
     * A table of the already added prototypes.
     * Indexed by prototype type, then by prototype name.
     */
    readonly raw: {
      readonly [T in keyof PrototypeMap]: {
        readonly [name: string]: PrototypeMap[T] | undefined
      }
    }

    /**
     * Add additional prototypes.
     */
    extend(prototypes: readonly AnyPrototype[]): void
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
}
