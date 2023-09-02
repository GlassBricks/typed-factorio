// This file declares globals for the factorio runtime stage.

/// <reference path="../index.d.ts" />
/// <reference path="./generated/global-objects.d.ts" />
/// <reference path="../common/settings-global.d.ts" />
/** @noResolution */
declare module "factorio:common" {
  import { LuaSettings } from "factorio:runtime"
  export interface SettingsGlobal extends LuaSettings {}
}
