import { CustomInputName } from "factorio:common"

export type double = number
export type float = number
export type table = object
export type int8 = number
export type int16 = number
export type int32 = number
export type uint8 = number
export type uint16 = number
export type uint32 = number
export type uint64 = number

/** @omit */
export interface DataExtendMethod {}

export interface Data<M = import("factorio:common").GlobalPrototypeMap> {
  readonly raw: {
    [Type in keyof M]: {
      [Name in string]?: M[Type]
    }
  }

  extend<P extends import("factorio:common").AnyPrototype<M>>(prototypes: readonly P[]): void
}

/** @replace */
export type LocalisedString = string | number | boolean | undefined | readonly [string, ...LocalisedString[]]

interface PrototypeMap {}

type PrototypeType = keyof PrototypeMap

interface PrototypeBase {
  type: PrototypeType
}
interface CustomInputPrototype {
  name: CustomInputName
}
