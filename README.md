# Typed Factorio

Complete and featureful typescript definitions for the Factorio modding lua api. This is intended to be used with [TypescriptToLua](https://typescripttolua.github.io/).

This project aims to provide type definitions for the Factorio lua API that are as complete as possible.
The generator integrates both the Factorio JSON api docs and manually defined additions.

## Installation

To use in your [TypescriptToLua](https://typescripttolua.github.io/) project:

1. Install this package: `npm install typed-factorio`
    - > Note: When types are updated for a new factorio version, you will need to update your npm package as well.

2. Add the types for the [stages](https://lua-api.factorio.com/1.1.89/index.html) used in your project to `tsconfig.json > compilerOptions > types`.
   The available stages are `typed-factorio/settings`, `typed-factorio/prototype`, and `typed-factorio/runtime`.

```diff
{
  "compilerOptions": {
+    "types": [ "typed-factorio/prototype", "typed-factorio/runtime" ]
  }
}
```

The stages selected will control the global variables defined.
It is possible to include multiple stages. However, this will add global variables for _all_ stages.

You can also add just `"typed-factorio"` to `types`; this will only include globals common to all stages.

## Usage

No matter which stage is chosen, _type_ definitions for all stages are can be accessed in the modules `"factorio:settings"`, `"factorio:prototype"`, and `"factorio:runtime"`. These can be imported, e.g. `import { LuaEntity } from "factorio:runtime"`.

### Factorio lualib modules

There are types for the following [Factorio lualib modules](https://github.com/wube/factorio-data/tree/master/core/lualib):

- `util`
- `mod-gui`

These can be imported as modules:
```ts
import * as util from "util"

const foo = util.copy(bar)
```

If you wish to see types for more lualib modules, feel free to open an issue or pull request.

### The `global` table

The `global` table (in the runtime stage) can have any shape, so it is not defined here. Instead, you can:

- add `declare const global: <Your type>` in a `.d.ts` file included in your project, to apply it project-wide, or
- add `declare const global: {...}` to each file where needed. This way, you can define only properties that each file specifically uses.

## Type features

### `nil`

`nil` is equivalent to `undefined`.
A class attribute is marked as possibly nil only if the _read_ type is possibly `nil`. For properties where `nil` is possible on _write_, but not _read_, you can use `undefined!` or `myNullableValue!`, e.g. `controlBehavior.parameters = undefined!`.

### Parameter Variants

Parameter tables with variants (having "additional attributes can be specified depending on type ...") are defined as a union of all variants. The type for a specific variant is prefixed with the variant name (e.g. `AmmoDamageTechnologyModifier`), or prefixed with "Other" for variants without extra properties (e.g. `OtherTechnologyModifier`).

### Events

Event IDs (`defines.events`) include types for their event type and filters, which is used by various methods in `script`.
You can pass an event data type parameter to `script.generate_event_name<T>()`, and it will return a `CustomEventId` that includes type info.

### Array-like classes

Classes that have an index operator, a length operator, and have an array-like structure subclass from `(Readonly)Array`. These are `LuaInventory`, `LuaFluidBox`, `LuaTransportLine`.
This allows you to use these classes like arrays, e.g. having array methods and `.length` translating to the lua length operator. However, this means like typescript arrays, they are **0-indexed, not 1-indexed**.

### Read and write variants

For concepts that can take a table or array form, the main type (e.g. `MapPosition`) defines the table form, and an `Array` suffix (e.g. `MapPositionArray`) defines the array form.
Concepts in a "read" position are in table form, and concepts in a "write" position may be either in table or array form (e.g. `MapPosition | MapPositionArray`).
Concepts that include table-or-array concepts may have an additional `Write` variant (e.g. `ScriptArea`, `ScriptAreaWrite`).

### Classes with subclasses

Some classes have attributes that only work for particular subclasses. For these classes (e.g. `LuaEntity`) there are specific types that you can _optionally_ use:

- A "Base" type (e.g. `BaseEntity`) which contains only members usable by all subclasses
- Multiple subclass types, e.g. `CraftingMachineEntity`, which extends the base type with members specific to that subclass.

The original class name (e.g. `LuaEntity`) contains attributes for _all_ subclasses.

For stricter types, use the `Base` type generally, and the specific subclass type when needed.
You can also create your own type-narrowing functions:

```ts
function isCraftingMachineEntity(entity: BaseEntity): entity is CraftingMachineEntity {
  return entity.type === "crafting-machine"
}
```

### LuaGuiElement

`LuaGuiElement` is broken up into a [discriminated union](https://basarat.gitbook.io/typescript/type-system/discriminated-unions), for each gui element type. Individual gui element types can be referred to by `<Type>GuiElement`, e.g. `ButtonGuiElement`.

Similarly, `GuiSpec` (the table passed to `LuaGuiElement.add`), is also a discriminated union. The type for a specific GuiSpec is `<Type>GuiSpec`, e.g. `ListBoxGuiSpec`. `LuaGuiElement.add` will return the appropriate gui element type corresponding to the GuiSpec type passed in.

This is done both to provide more accurate types, and for possible integration with [JSX](https://typescripttolua.github.io/docs/jsx/).

### Strict index types

This is a recommended **opt-in** feature. To opt in, add `"typed-factorio/strict-index-types"` to `compilerOptions > types` in your tsconfig.json (in addition to `"typed-factorio/runtime"`).

Some `uint` types which represent unique indices, e.g. player_index, entity_number, can be "branded" numbers, e.g. `PlayerIndex` and `EntityNumber`. If opted-in, these index-types will be still assignable to `number`, but a plain `number` is not directly assignable to them. This helps ensure their correct use.
You can use these types as keys in an index signature, e.g. `{ [index: PlayerIndex]: "foo" }`.
You can cast "plain" numbers to these types, e.g. `1 as PlayerIndex`, do this with caution.
