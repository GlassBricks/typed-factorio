// This file declares globals for the factorio settings stage.
/// <reference path="../index.d.ts" />

/// <reference path="../common/data-global.d.ts" />

declare module "factorio:common" {
  import { PrototypeMap as SPrototypeMap } from "factorio:settings"
  export interface PrototypeMap extends SPrototypeMap {}
}
