// runtime stage
// https://lua-api.factorio.com/1.1.108/auxiliary/json-docs-runtime.html
export interface FactorioRuntimeApiJson {
  application: "factorio"
  application_version: string
  api_version: 5
  stage: "runtime"

  classes: Class[]
  events: Event[]
  concepts: Concept[]
  defines: Define[]
  global_objects: Parameter[]
  global_functions: Method[]
}

export interface BasicObject {
  name: string
  order: number
  description: string
}

export interface BasicMember extends BasicObject {
  lists?: string[]
  examples?: string[]
  images?: Image[]
}

export type Expansions = "space_age"
export interface Class extends BasicMember {
  visibility?: Expansions[]
  parent: string
  abstract: boolean
  methods: Method[]
  attributes: Attribute[]
  operators: Operator[]
}

export interface CallOperator extends Method {
  name: "call"
}

export interface IndexOperator extends Attribute {
  name: "index"
}

export interface LengthOperator extends Attribute {
  name: "length"
}

export type Operator = CallOperator | IndexOperator | LengthOperator

export interface Event extends BasicMember {
  data: Parameter[]
  /** The name of the filter concept that applies to this event. */
  filter?: string
}

export interface Concept extends BasicMember {
  type: Type
}

export interface Define extends BasicMember {
  values?: BasicObject[]
  subkeys?: Define[]
}

// other types

export interface WithVariantParameterGroups {
  parameters: Parameter[]
  /** For methods: only applies if takes_table is true */
  variant_parameter_groups?: ParameterGroup[]
  variant_parameter_description: string
}

// type
export type Type =
  | string
  | TypeType
  | UnionType
  | ArrayType
  | DictionaryType
  | TableType
  | TupleType
  | FunctionType
  | LiteralType
  | LuaLazyLoadedValueType
  | LuaStructType
  | BuiltinType

export interface TypeType {
  complex_type: "type"
  value: Type
  description: string
}

export interface UnionType {
  complex_type: "union"
  options: Type[]
  full_format: boolean
}

export interface ArrayType {
  complex_type: "array"
  value: Type
}

export interface DictionaryType {
  complex_type: "dictionary" | "LuaCustomTable"
  key: Type
  value: Type
}

export interface TableType extends WithVariantParameterGroups {
  complex_type: "table"
}

export interface TupleType {
  complex_type: "tuple"
  values: Type[]
}

export interface FunctionType {
  complex_type: "function"
  parameters: Type[]
}

export interface LiteralType {
  complex_type: "literal"
  value: string | number | boolean
  description?: string
}

export interface LuaLazyLoadedValueType {
  complex_type: "LuaLazyLoadedValue"
  value: Type
}

export interface LuaStructType {
  complex_type: "LuaStruct"
  attributes: Attribute[]
}

export interface BuiltinType {
  complex_type: "builtin"
}

export interface EventRaised extends BasicMember {
  timeframe: "instantly" | "current_tick" | "future_tick"
  optional: boolean
}

export interface Parameter extends BasicObject {
  type: Type
  optional: boolean
}

export interface ParameterGroup extends BasicObject {
  parameters: Parameter[]
}

export interface Method extends BasicMember, WithVariantParameterGroups {
  visibility?: Expansions[]
  raises?: EventRaised[]
  subclasses?: string[]

  variadic_parameter?: VariadicParameter
  format: MethodFormat

  return_values: Omit<Parameter, "name">[]
}
export interface VariadicParameter {
  type?: Type
  description: string
}
export interface MethodFormat {
  takes_table: boolean
  table_optional?: boolean
}

export interface Attribute extends BasicMember {
  visibility?: Expansions[]
  raises?: EventRaised[]
  subclasses?: string[]
  type: Type
  optional: boolean
  read: boolean
  write: boolean
}

export interface EventRaised extends BasicMember {
  timeframe: "instantly" | "current_tick" | "future_tick"
  optional: boolean
}

export interface Image {
  filename: string
  caption?: string
}
