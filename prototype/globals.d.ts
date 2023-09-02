// This file declares all globals the factorio prototype stage.

/// <reference path="./index.d.ts" />

/// <reference path="../common/serpent.d.ts" />
/// <reference path="../common/settings-global.d.ts" />
/// <reference path="../common/mods-global.d.ts" />

// Some globals are shared with runtime.
/// <reference path="../runtime/defines-global.d.ts" />
/// <reference path="../runtime/generated/global-functions.d.ts" />

// the data global
/// <reference path="../common/data-global.d.ts" />
declare module "factorio:common" {
  import { PrototypeMap as PPrototypeMap } from "factorio:prototype"
  export interface PrototypeMap extends PPrototypeMap {}
}
