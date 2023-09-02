// This file declares all globals the factorio settings stage.

/// <reference path="./index.d.ts" />

/// <reference path="../common/serpent.d.ts" />
/// <reference path="../common/mods-global.d.ts" />

/// <reference path="../runtime/defines-global.d.ts" />
/// <reference path="../runtime/generated/global-functions.d.ts" />

// the data global
/// <reference path="../common/data-global.d.ts" />
declare module "factorio:common" {
  import { PrototypeMap as SPrototypeMap } from "factorio:settings"
  export interface PrototypeMap extends SPrototypeMap {}
}
