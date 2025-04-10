[![NPM Version](https://img.shields.io/npm/v/typed-factorio)](https://www.npmjs.com/package/typed-factorio) ![Factorio version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fregistry.npmjs.com%2Ftyped-factorio%2Flatest&query=%24.factorioVersion&prefix=v&label=Factorio%20version)

# Typed Factorio

Complete and featureful typescript definitions for the Factorio modding lua API, for use with [TypescriptToLua](https://typescripttolua.github.io/).

This project aims to provide type definitions that are as complete as possible.

## Installation

To use in your [TypescriptToLua](https://typescripttolua.github.io/) project:

1. Install this package: `npm install --save-dev typed-factorio`
   > Note: When types are updated for a new factorio version, you will need to update this package.

2. Add types for the [Factorio stages](https://lua-api.factorio.com/latest) used to your `tsconfig.json` under `compilerOptions > types`.
   The available stages are `"typed-factorio/settings"`, `"typed-factorio/prototype"`, and `"typed-factorio/runtime"`.

Example:

```diff
// in tsconfig.json
{
  "compilerOptions": {
+    "types": [ "typed-factorio/runtime" ]
  }
}
```

Each stage will define the global variables used in that stage.
You can include multiple stages, but there are some caveats. For more info, see [Using multiple stages in the same project](#using-multiple-loading-stages-in-the-same-project).

## Usage notes

Some more info on using types.

### Types for other stages

No matter which stage(s) are selected, type definitions for all stages are available in the modules `"factorio:settings"`, `"factorio:prototype"`, and `"factorio:runtime"`:

```ts
import { BoolSettingDefinition } from "factorio:settings"
import { ItemPrototype } from "factorio:prototype"
import { LuaEntity } from "factorio:runtime"
```

You can also include just `"typed-factorio"` in your tsconfig's `types`. This will define only global variables that are available to _all_ stages.

### The `storage` table

The `storage` table (in the runtime stage) can have any shape, so it is not defined here. Instead, you can define it yourself:

- Add `declare const storage: <Your type>` in a `.d.ts` file. Make sure this file is included by your tsconfig!
- Add `declare global { const storage: <Your type> }` in a `.ts` file included in your project.
- Add `declare const storage: {...}` to each file where needed. This way, you can define only properties that each file specifically uses.

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

### Types for `data.extend()` 

In the settings and prototype stages, the `data` global variable is available.

For [performance reasons](https://github.com/microsoft/TypeScript/wiki/Performance#preferring-base-types-over-unions), `data.extend()` is by default loosely typed.
To get full strict type checking, you can use one of the following methods:

```ts
// Use `satisfies` to check types:
data.extend([
  {
    type: "ammo-category",
    name: "foo",
  } satisfies AmmoCategory,
  {
    type: "item",
    name: "bar",
    // ...other fields
  } satisfies ItemPrototype,
])

// List types used as a type argument to `extend`:
data.extend<AmmoCategory | ItemPrototype>([
  {
    type: "ammo-category",
    name: "foo",
  },
  {
    type: "item",
    name: "bar",
    // ...other fields
  },
])

// Use types on separate variables:
const fooCategory: AmmoCategory = {
  /* ... */
}
const barItem: ItemPrototype = {
  /* ... */
}
data.extend([fooCategory, barItem])
```

## Using multiple loading stages in the same project

Every Factorio loading stage declares different global variables.
To add types for multiple Factorio stages, you have a few options:

1. Add multiple stages to the "types" field, e.g. `"types": ["typed-factorio/prototype", "typed-factorio/runtime"]`. This will define global variables for _all_ stages selected. With this option, take care that you only use global variables available in the stages the code is run.
2. Add _only_ the runtime stage, then manually declare other global variables in files that use them. There are types in `"factorio:common"` to allow this:
   ```ts
   // -- For the prototype stage --
   import { PrototypeData, ActiveMods, FeatureFlags } from "factorio:common"
   declare const data: PrototypeData
   declare const mods: ActiveMods
   declare const feature_flags: FeatureFlags
   // The `settings` global variable is already declared in the runtime stage.
   // However, in the prototype stage _only_ `settings.startup` are available.
   ```
   ```ts
   // -- For the settings stage --
   import { SettingsData, ActiveMods, FeatureFlags } from "factorio:common"
   declare const data: SettingsData
   declare const mods: ActiveMods
   declare const feature_flags: FeatureFlags
   ```
3. Use a separate `tsconfig.json` for each stage. In each `tsconfig.json`, add only files in that stage to the `"include"` field, e.g. `include: ["src/control.ts"]` for the runtime stage. However, this means you need to run `tstl` separately for each stage, and files shared by multiple stages will be compiled multiple times.

## Type features

Here is some info on type features that you may find useful:

### `nil`

The `nil` type is equivalent to `undefined`.
A class attribute is marked as possibly nil if the _read_ type is possibly `nil`. For properties where `nil` is possible on _write_, but not _read_, you can use `undefined!` or `myNullableValue!`, e.g. `controlBehavior.parameters = undefined!`.

### Parameter Variants

Parameter tables with variants (having "additional attributes can be specified depending on type ...") are defined as a union of all variants. The type for a specific variant is prefixed with the variant name (e.g. `AmmoDamageTechnologyModifier`), or prefixed with "Other" for variants without extra properties (e.g. `OtherTechnologyModifier`).

### Events

Event IDs (`defines.events`) hold type info on their corresponding event data type and filters, which is used by various methods in `script`.

You can pass a type parameter to `script.generate_event_name<T>()`, and it will return a `CustomEventId` that includes type info.

### Optional CustomInput name checking

You can optionally enable type-checking for custom input names (for `script.on_event` and `CustomInputPrototype`).
To do so, specify names by extending the CustomInputNames interface like so:

```ts
declare module "factorio:common" {
  export interface CustomInputNames {
    "my-custom-input": any
  }
}

script.on_event("my-custom-input", () => {}) // type-checked
// script.on_event("my-customm-input", () => {}) // mispelled, will error
```

The type `CustomInputName` (not plural) will be a union of strings, for all custom input names. 
If not specified like above, `CustomInputName` defaults to just `string`.

### Array-like classes

A few classes that have an index operator, a length operator, and have an array-like structure, which will subclass from `(Readonly)Array`. These are `LuaInventory`, `LuaFluidBox`, `LuaTransportLine`.
This allows you to use these classes like arrays, e.g. having array methods and `.length` translating to the lua length operator. However, this means like typescript arrays, they are **0-indexed, not 1-indexed**.

### Read and write variants

For concepts that can take a table-or-array form, the main type (e.g. `MapPosition`) defines the table form, and a type suffixed with `Array` (e.g. `MapPositionArray`) defines the array form.
Concepts in a "read" position are in table form. Concepts in a "write" position may be in either table or array form (e.g. `MapPosition | MapPositionArray`).
Concepts that include table-or-array concepts may have an additional `Write` variant (e.g. `ScriptArea`, `ScriptAreaWrite`).

### Classes with subclasses

Some classes have attributes that only work for particular subclasses (e.g. LuaEntity.recipe only works if this is crafting-machine). For these classes, there are more specific types you can _optionally_ use:

- A "Base" type (e.g. `BaseEntity`) which contains only members usable by all subclasses
- Subclass types, e.g. `CraftingMachineEntity`, which extends the base type with members specific to that subclass.

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

## Support

If you find this project useful, consider tipping me on Kofi!

<a href='https://ko-fi.com/Z8Z1VI6P8' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi2.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
