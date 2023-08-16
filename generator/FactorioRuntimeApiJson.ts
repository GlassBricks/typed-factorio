// runtime stage
// reference: https://lua-api.factorio.com/1.1.89/auxiliary/json-docs-runtime.html
export interface FactorioRuntimeApiJson {
  application: "factorio"
  stage: "runtime"
  application_version: string
  api_version: 4

  classes: Class[]
  events: Event[]
  defines: Define[]
  builtin_types: BuiltinType[]
  concepts: Concept[]
  global_objects: GlobalObject[]
  global_functions: Method[]
}
export interface BasicMember {
  name: string
  order: number
  description: string
}

export interface WithNotes {
  notes?: string[]
  examples?: string[]
}

export interface WithVariantParameterGroups {
  parameters: Parameter[]
  variant_parameter_groups?: ParameterGroup[]
  variant_parameter_description: string
}

export interface Class extends BasicMember, WithNotes {
  methods: Method[]
  attributes: Attribute[]
  operators: Operator[]
  abstract: boolean
  base_classes?: string[]
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

export interface Event extends BasicMember, WithNotes {
  data: Parameter[]
}

export interface Define extends BasicMember {
  values?: BasicMember[]
  subkeys?: Define[]
}

export type BuiltinType = BasicMember

export interface Concept extends BasicMember, WithNotes {
  type: Type
}

export interface GlobalObject extends BasicMember {
  type: string
}

export interface EventRaised extends BasicMember {
  timeframe: "instantly" | "current_tick" | "future_tick"
  optional: boolean
}

// type

export type Type =
  | string
  | TypeType
  | UnionType
  | ArrayType
  | DictionaryType
  | FunctionType
  | LiteralType
  | LuaLazyLoadedValueType
  | LuaStructType
  | TableType

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

export interface TableType extends WithVariantParameterGroups {
  complex_type: "table" | "tuple"
}

export interface EventRaised extends BasicMember {
  timeframe: "instantly" | "current_tick" | "future_tick"
  optional: boolean
}

export interface Parameter extends BasicMember {
  type: Type
  optional: boolean
}

export interface ParameterGroup extends BasicMember {
  parameters: Parameter[]
}

export interface Method extends BasicMember, WithNotes, WithVariantParameterGroups {
  raises?: EventRaised[]
  subclasses?: string[]
  variadic_type?: Type
  variadic_description?: string
  takes_table: boolean
  table_is_optional?: boolean
  return_values: Omit<Parameter, "name">[]
}

export interface Attribute extends BasicMember, WithNotes {
  raises?: EventRaised[]
  subclasses?: string[]
  type: Type
  optional: boolean
  read: boolean
  write: boolean
}
