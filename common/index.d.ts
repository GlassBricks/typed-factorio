/** @noResolution */
declare module "factorio:common" {
  import { ColorArray } from "factorio:runtime"
  export type LocalisedString = string | number | boolean | undefined | readonly [string, ...LocalisedString[]]

  export interface Color {
    readonly r?: number
    readonly g?: number
    readonly b?: number
    readonly a?: number
  }

  /**
   * The value of the mod setting. The type depends on the kind of setting.
   */
  export interface ModSetting {
    readonly value: number | boolean | string | Color | ColorArray
  }
}
