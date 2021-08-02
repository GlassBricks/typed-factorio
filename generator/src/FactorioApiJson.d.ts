interface FactorioApiJson {
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

interface BasicMember {
  name: string
  order: number
  description: string
}

interface WithNotes {
  notes?: string[]
  examples?: string[]
  see_also?: string[]
}

interface WithParameterVariants {
  parameters: Parameter[]
  variant_parameter_groups?: ParameterGroup[]
  variant_parameter_description: string
}

interface Class extends BasicMember, WithNotes {
  methods: Method[]
  attributes: Attribute[]
  operators: Operator[]
  base_classes?: string[]
}

interface CallOperator extends Method {
  name: "call"
}

interface IndexOperator extends Attribute {
  name: "index"
}

interface LengthOperator extends Attribute {
  name: "length"
}

type Operator = CallOperator | IndexOperator | LengthOperator

interface Event extends BasicMember, WithNotes {
  data: Parameter[]
}

interface Define extends BasicMember {
  values?: BasicMember[]
  subkeys?: Define[]
}

type BuiltinType = BasicMember

interface BaseConcept extends BasicMember, WithNotes {
  category: string
}

interface TableConcept extends BaseConcept, WithParameterVariants {
  category: "table"
}

interface TableOrArrayConcept extends BaseConcept {
  category: "table_or_array"
  parameters: Parameter[]
}

interface EnumConcept extends BaseConcept {
  category: "enum"
  options: BasicMember[]
}

interface FlagConcept extends BaseConcept {
  category: "flag"
  options: BasicMember[]
}

interface UnionConcept extends BaseConcept {
  category: "union"
  options: {
    type: Type
    order: number
    description: string
  }[]
}

interface FilterConcept extends BaseConcept, WithParameterVariants {
  category: "filter"
}

interface StructConcept extends BaseConcept {
  category: "struct"
  attributes: Attribute[]
}

interface ConceptConcept extends BaseConcept {
  category: "concept"
}

type Concept =
  | TableConcept
  | TableOrArrayConcept
  | EnumConcept
  | FlagConcept
  | UnionConcept
  | FilterConcept
  | StructConcept
  | ConceptConcept

interface GlobalObject extends BasicMember {
  type: string
}

interface BaseComplexType {
  complex_type: string
}

interface VariantComplexType extends BaseComplexType {
  complex_type: "variant"
  options: Type[]
}

interface ArrayComplexType extends BaseComplexType {
  complex_type: "array"
  value: Type
}

interface DictionaryComplexType extends BaseComplexType {
  complex_type: "dictionary"
  key: Type
  value: Type
}

interface LuaCustomTableComplexType extends BaseComplexType {
  complex_type: "LuaCustomTable"
  key: Type
  value: Type
}

interface FunctionComplexType extends BaseComplexType {
  complex_type: "function"
  parameters: Type[]
}

interface LuaLazyLoadedValueComplexType extends BaseComplexType {
  complex_type: "LuaLazyLoadedValue"
  value: Type
}

interface TableComplexType extends BaseComplexType, WithParameterVariants {
  complex_type: "table"
}

type ComplexType =
  | VariantComplexType
  | ArrayComplexType
  | DictionaryComplexType
  | LuaCustomTableComplexType
  | FunctionComplexType
  | LuaLazyLoadedValueComplexType
  | TableComplexType

type Type = string | ComplexType

interface Parameter extends BasicMember {
  type: Type
  optional: boolean
}

interface ParameterGroup extends BasicMember {
  parameters: Parameter[]
}

interface Method extends BasicMember, WithNotes, WithParameterVariants {
  subclasses?: string[]
  variadic_type?: Type
  variadic_description?: string
  takes_table: boolean
  table_is_optional?: boolean
  return_type?: Type
  return_description?: string
}

interface Attribute extends BasicMember, WithNotes {
  subclasses: string[]
  type: Type
  read: boolean
  write: boolean
}
