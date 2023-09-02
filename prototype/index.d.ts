// This file declares globals for the factorio prototype stage.

/// <reference path="../index.d.ts" />
/// <reference path="../common/settings-global.d.ts" />
/// <reference path="../common/data-global.d.ts" />

declare module "factorio:common" {
  import { PrototypeMap as PPrototypeMap } from "factorio:prototype"
  export interface PrototypeMap extends PPrototypeMap {}
}
