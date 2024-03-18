import { AnyPrototype, CustomInputName } from "factorio:common"

export type bool = boolean
export type double = number
export type float = number
export type int8 = number
export type int16 = number
export type int32 = number
export type uint8 = number
export type uint16 = number
export type uint32 = number
export type uint64 = number

/** @omit */
export type DataExtendMethod = unknown

export interface Data {
  raw: {
    readonly [Type in keyof PrototypeMap]: {
      readonly [Name in string]?: PrototypeMap[Type]
    }
  }

  /**
   * Add additional prototypes.
   */
  extend<P extends AnyPrototype>(prototypes: readonly P[]): void
}

/** @unionAdd */
export type CollisionMaskLayer = `layer-${bigint}`

/** @replace */
export type LocalisedString = string | number | boolean | undefined | readonly [string, ...LocalisedString[]]

interface PrototypeMap {}

interface PrototypeBase {
  type: keyof PrototypeMap
}

interface FluidBox {}

interface CraftingMachinePrototype {
  fluid_boxes?: FluidBox[] & {
    /**
     * TSTL tip: You can use `Object.assign()` to add properties to an array:
     * ```
     * fluid_boxes: Object.assign([a,b,c], {off_when_no_fluid_recipe: true})
     * ```
     */
    off_when_no_fluid_recipe?: boolean
  }
}

interface CustomInputPrototype {
  name: CustomInputName
}
