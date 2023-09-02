// This file declares globals for the factorio prototype stage.

/// <reference path="../index.d.ts" />
/// <reference path="../common/settings-global.d.ts" />
/// <reference path="../common/data-global.d.ts" />

/** @noResolution */
declare module "factorio:common" {
  import { PrototypeMap } from "factorio:prototype"
  export interface GlobalPrototypeMap extends PrototypeMap {}
}
