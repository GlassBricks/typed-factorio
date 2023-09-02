declare module "factorio:common" {
  /**
   * A map of type name -> prototype type.
   *
   * The settings/prototype stage extends this interface.
   */
  export interface PrototypeMap {}

  // export type AnyPrototype = PrototypeMap[keyof PrototypeMap]
  // Giant discriminated unions are slow, so we use the simpler interface below.
  /** Represents any valid prototype. */
  export interface AnyPrototype {
    readonly type: keyof PrototypeMap
    readonly name: string
  }

  export interface DataGlobal {
    readonly raw: {
      readonly [T in keyof PrototypeMap]: {
        readonly [name: string]: PrototypeMap[T] | undefined
      }
    }

    extend(prototypes: AnyPrototype[]): void
  }
}

import { DataGlobal } from "factorio:common"

declare global {
  const data: DataGlobal
}
