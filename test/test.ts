// noinspection JSUnusedLocalSymbols

import { LuaEntity, UnitNumber } from "factorio:runtime"

declare const entity: LuaEntity
declare function checkIs<T>(value: T): void

checkIs<UnitNumber>(entity.unit_number!)
