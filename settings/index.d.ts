// This file declares globals for the factorio settings stage.

/// <reference path="../index.d.ts" />
/// <reference path="../common/data-global.d.ts" />

/** @noResolution */
declare module "factorio:common" {
  import { PrototypeMap } from "factorio:settings"
  export interface GlobalPrototypeMap extends PrototypeMap {}
}
