/** @addTo prototypes */
export type OmitType<T> = Omit<T, "type"> & {
  type: string
}

interface PrototypeBase {
  type: string
}
