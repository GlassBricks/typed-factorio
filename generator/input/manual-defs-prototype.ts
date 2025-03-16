import { AnyPrototype, CustomInputName } from "factorio:common"

export type double = number
export type float = number
export type int8 = number
export type int16 = number
export type int32 = number
export type int64 = number
export type uint8 = number
export type uint16 = number
export type uint32 = number
export type uint64 = number

/** @omit */
export interface DataExtendMethod {}

export interface Data {
  raw: {
    readonly [Type in PrototypeType]: {
      readonly [Name in string]?: PrototypeMap[Type]
    }
  }

  /**
   * Add additional prototypes.
   */
  extend<P extends AnyPrototype>(prototypes: readonly P[]): void
}

/** @replace */
export type LocalisedString = string | number | boolean | undefined | readonly [string, ...LocalisedString[]]

interface PrototypeMap {}

type PrototypeType = keyof PrototypeMap

export interface SpacingItem {
  /**
   * The index of the row or column after which to insert `spacing`.
   * @see {@link https://lua-api.factorio.com/2.0.21/types/SpacingItem.html#index Online documentation}
   */
  index: uint32
  /**
   * The spacing in scaled pixels between columns `column` and `column + 1`.
   * @see {@link https://lua-api.factorio.com/2.0.21/types/SpacingItem.html#spacing Online documentation}
   */
  spacing: int32
}

interface TechnologySlotStyleSpecification {
  drag_handle_style?: string
}

interface PrototypeBase {
  type: PrototypeType
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
