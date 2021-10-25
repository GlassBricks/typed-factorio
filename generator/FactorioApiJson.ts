export interface FactorioApiJson {
  application: "factorio"
  stage: "runtime"
  application_version: string
  api_version: 1

  classes: Class[]
  events: Event[]
  defines: Define[]
  builtin_types: BuiltinType[]
  concepts: Concept[]
  global_objects: GlobalObject[]
}

export interface BasicMember {
  name: string
  order: number
  description: string
}

export interface WithNotes {
  notes?: string[]
  examples?: string[]
  see_also?: string[]
}

export interface WithParameterVariants {
  parameters: Parameter[]
  variant_parameter_groups?: ParameterGroup[]
  variant_parameter_description: string
}

export interface Class extends BasicMember, WithNotes {
  methods: Method[]
  attributes: Attribute[]
  operators: Operator[]
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

export interface BaseConcept extends BasicMember, WithNotes {
  category: string
}

export interface TableConcept extends BaseConcept, WithParameterVariants {
  category: "table"
}

export interface TableOrArrayConcept extends BaseConcept {
  category: "table_or_array"
  parameters: Parameter[]
}

export interface EnumConcept extends BaseConcept {
  category: "enum"
  options: BasicMember[]
}

export interface FlagConcept extends BaseConcept {
  category: "flag"
  options: BasicMember[]
}

export interface UnionConcept extends BaseConcept {
  category: "union"
  options: {
    type: Type
    order: number
    description: string
  }[]
}

export interface FilterConcept extends BaseConcept, WithParameterVariants {
  category: "filter"
}

export interface StructConcept extends BaseConcept {
  category: "struct"
  attributes: Attribute[]
}

export interface ConceptConcept extends BaseConcept {
  category: "concept"
}

export type Concept =
  | TableConcept
  | TableOrArrayConcept
  | EnumConcept
  | FlagConcept
  | UnionConcept
  | FilterConcept
  | StructConcept
  | ConceptConcept

export interface GlobalObject extends BasicMember {
  type: string
}

export interface BaseComplexType {
  complex_type: string
}

export interface VariantComplexType extends BaseComplexType {
  complex_type: "variant"
  options: Type[]
}

export interface ArrayComplexType extends BaseComplexType {
  complex_type: "array"
  value: Type
}

export interface DictionaryComplexType extends BaseComplexType {
  complex_type: "dictionary"
  key: Type
  value: Type
}

export interface LuaCustomTableComplexType extends BaseComplexType {
  complex_type: "LuaCustomTable"
  key: Type
  value: Type
}

export interface FunctionComplexType extends BaseComplexType {
  complex_type: "function"
  parameters: Type[]
}

export interface LuaLazyLoadedValueComplexType extends BaseComplexType {
  complex_type: "LuaLazyLoadedValue"
  value: Type
}

export interface TableComplexType extends BaseComplexType, WithParameterVariants {
  complex_type: "table"
}

export type ComplexType =
  | VariantComplexType
  | ArrayComplexType
  | DictionaryComplexType
  | LuaCustomTableComplexType
  | FunctionComplexType
  | LuaLazyLoadedValueComplexType
  | TableComplexType

export type Type = string | ComplexType

export interface Parameter extends BasicMember {
  type: Type
  optional: boolean
}

export interface ParameterGroup extends BasicMember {
  parameters: Parameter[]
}

export interface Method extends BasicMember, WithNotes, WithParameterVariants {
  subclasses?: string[]
  variadic_type?: Type
  variadic_description?: string
  takes_table: boolean
  table_is_optional?: boolean
  return_type?: Type
  return_description?: string
}

export interface Attribute extends BasicMember, WithNotes {
  subclasses: string[]
  type: Type
  read: boolean
  write: boolean
}
