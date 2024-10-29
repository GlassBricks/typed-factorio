// prototype stage
// https://lua-api.factorio.com/latest/auxiliary/json-docs-prototype.html

import { Expansions } from "./FactorioRuntimeApiJson"

export interface FactorioPrototypeApiJson {
  application: "factorio"
  application_version: string
  api_version: 6
  stage: "prototype"

  prototypes: Prototype[]
  types: PrototypeConcept[]
}
export interface BasicMember {
  name: string
  order: number
  readonly description: string
}
export interface PrototypeWithExamples {
  lists?: string[]
  examples?: string[]
  images?: Image[]
}

export interface Prototype extends BasicMember, PrototypeWithExamples {
  visibility: Expansions
  parent?: string
  abstract: boolean
  typename?: string
  instance_limit?: number
  deprecated: boolean
  properties: Property[]
  custom_properties: CustomProperty // online doc says that this is an array, but it's not
}

export interface PrototypeConcept extends BasicMember, PrototypeWithExamples {
  parent?: string
  abstract?: boolean
  inline: boolean
  type: Type
  properties?: Property[]
}

export interface Property extends BasicMember, PrototypeWithExamples {
  alt_name: string
  override: boolean
  type: Type
  optional: boolean
  default?: string | LiteralType
}

export type Type = string | ArrayType | DictionaryType | TupleType | UnionType | LiteralType | TypeType | StructType

export interface ArrayType {
  complex_type: "array"
  value: Type
}
export interface DictionaryType {
  complex_type: "dictionary"
  key: Type
  value: Type
}

export interface TupleType {
  complex_type: "tuple"
  values: Type[]
}

export interface UnionType {
  complex_type: "union"
  options: Type[]
  full_format: boolean
}

export interface LiteralType {
  complex_type: "literal"
  value: string | number | boolean
  description?: string
}

export interface TypeType {
  complex_type: "type"
  value: Type
  description: string
}

export interface StructType {
  complex_type: "struct"
  // no additional properties
}

export interface Image {
  filename: string
  caption?: string
}

export interface CustomProperty extends PrototypeWithExamples {
  description: string
  key_type: Type
  value_type: Type
}
