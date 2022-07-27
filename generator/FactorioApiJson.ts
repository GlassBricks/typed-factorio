export interface FactorioApiJson {
  application: "factorio"
  stage: "runtime"
  application_version: string
  api_version: 3

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

export interface BaseComplexType {
  complex_type: string
}

export interface TypeComplexType {
  complex_type: "type"
  value: Type
  description: string
}

export interface UnionComplexType extends BaseComplexType {
  complex_type: "union"
  options: Type[]
  full_format: boolean
}

export interface ArrayComplexType extends BaseComplexType {
  complex_type: "array"
  value: Type
}

export interface DictionaryComplexType extends BaseComplexType {
  complex_type: "dictionary" | "LuaCustomTable"
  key: Type
  value: Type
}

export interface FunctionComplexType extends BaseComplexType {
  complex_type: "function"
  parameters: Type[]
}

export interface LiteralComplexType extends BaseComplexType {
  complex_type: "literal"
  value: string | number | boolean
  description?: string
}

export interface LuaLazyLoadedValueComplexType extends BaseComplexType {
  complex_type: "LuaLazyLoadedValue"
  value: Type
}

export interface StructComplexType extends BaseComplexType {
  complex_type: "struct"
  attributes: Attribute[]
}

export interface TableComplexType extends BaseComplexType, WithVariantParameterGroups {
  complex_type: "table" | "tuple"
}

export type ComplexType =
  | TypeComplexType
  | UnionComplexType
  | ArrayComplexType
  | DictionaryComplexType
  | FunctionComplexType
  | LiteralComplexType
  | LuaLazyLoadedValueComplexType
  | StructComplexType
  | TableComplexType

export type Type = string | ComplexType

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
  subclasses?: string[]
  variadic_type?: Type
  variadic_description?: string
  takes_table: boolean
  table_is_optional?: boolean
  return_values: Omit<Parameter, "name">[]
  raises?: EventRaised[]
}

export interface Attribute extends BasicMember, WithNotes {
  raises?: EventRaised[]
  subclasses?: string[]
  type: Type
  optional: boolean
  read: boolean
  write: boolean
}
