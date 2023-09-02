// This declares the settings global variable.
// In the prototype, it is used as is; runtime extends the SettingsGlobal interface with LuaSettings.
declare module "factorio:common" {
  export interface SettingsGlobal {
    readonly startup: {
      readonly [name: string]: ModSetting
    }
  }
}
import type { SettingsGlobal } from "factorio:common"

declare global {
  /**
   * Provides access to the current mod settings.
   * This is available in the prototype and runtime stages.
   *
   * In the prototype stage, _only_ the "startup" settings are available.
   * In the runtime stage, this is extended with the full LuaSettings interface.
   */
  const settings: SettingsGlobal
}
