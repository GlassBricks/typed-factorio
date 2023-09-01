/** @noResolution */
declare module "factorio:common" {
  import { Color } from "factorio:runtime"
  export type LocalisedString = string | number | boolean | undefined | readonly [string, ...LocalisedString[]]

  export interface ModSetting {
    /**
     * The value of the mod setting. The type depends on the kind of setting.
     */
    readonly value: number | boolean | string | Color
  }

  export interface SettingsGlobal {
    readonly startup: Record<string, ModSetting>
  }
}
