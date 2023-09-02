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

/** @unionAdd */
export type CollisionMaskLayer = `layer-${bigint}`

/** @replace */
export type LocalisedString = import("factorio:common").LocalisedString
