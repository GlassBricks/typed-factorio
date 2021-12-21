# Typed Factorio

Complete and featureful typescript definitions for the Factorio modding lua api. This is intended to be used with [TypescriptToLua](https://typescripttolua.github.io/).

This project aims to provide type definitions for the Factorio lua API that are as complete as possible. This means no `any`s or `unknown`s, correct nullability, and smart types where possible. The generator integrates both the Factorio JSON api docs and manually defined additions and overrides.

## Installation

To use in your TypescriptToLua project:

1. Install this package

```
npm install typed-factorio

or

yarn add typed-factorio
```

2. Add to your `tsconfig.json`:

```diff
{
  "compilerOptions": {
+    "types": [ "typed-factorio/runtime" ]
  }
}
```

This will add the types for the runtime stage to your entire project.

Note: When types are updated, or released for a new factorio version, you will need update your package version to get the types.

### Settings and data stage

There are also definitions for the settings/data stage.

To avoid type conflicts, the global tables for the settings/data stages have to be declared manually where you need them. These types can be imported from `typed-factorio/data/types` or `typed-factorio/settings/types`.

Example:

```ts
import { Data, Mods } from "typed-factorio/data/types"
// or 
import { Data, Mods } from "typed-factorio/settings/types"

declare const data: Data
declare const mods: Mods

data.extend([{ ... }])
```

There are currently full types for settings stage, but only basic types for the data stage.

### Factorio lualib modules

Currently, there are types for the following modules:

- `util`
- `mod-gui`

If you have a need for types to more lualib modules, feel free to open an issue or pull request on GitHub.

### The `global` table

The `global` table is just a lua table which can have any shape the mod desires, so it is not defined in typed-factorio. Instead, you can either:

- add `declare const global: <Your type>` in a `.d.ts` file included in your project, to apply it project-wide, or
- add `declare const global: {...}` to each module/file where needed. This way, you can also only define attributes that each module/file specifically uses.

## Type features

Typed-factorio has 100% complete types for the runtime stage. Description-only concepts and some not documented types are filled in manually.

Here are some details on particular type features in the definitions:

### Lua features

The types include [TypescriptToLua language extensions](https://typescripttolua.github.io/docs/advanced/language-extensions/)
and [lua-types](https://github.com/TypeScriptToLua/lua-types) (for v5.2) as dependencies.

### `nil`

The types consistently use `undefined` to represent `nil`.
`null` is not used, because `undefined` in typescript is much more similar to `nil` in lua, and optional parameters/properties already use `undefined`.

A class attribute is marked as possibly undefined only if the _read_ type is possibly `nil`. For properties where `nil` is not possible on _read_, but is possible on _write_, you can write `nil` by using `undefined!` or `myNullableValue!`, e.g. `controlBehavior.parameters = undefined!`.

### Variant parameter types

Variant parameter types (types with "additional fields can be specified depending on type") are handled as a union of all variants (which is often a [discriminated union](https://basarat.gitbook.io/typescript/type-system/discriminated-unions#discriminated-union)). This gives proper type checking for each variant.

The type for a specific variant is prefixed with the variant name, or with "Other" for variants without additional fields (e.g. `AmmoDamageTechnologyModifier`, `OtherTechnologyModifier`).

### Types with subclasses

Some classes have attributes that are documented to only work on particular subclasses. For these classes, e.g. `LuaEntity`, there are also these other types that you can _optionally_ use:
- a "Base" type, e.g. `BaseEntity`, which only contains members usable by all subclasses
- individual subclass types, e.g. `CraftingMachineEntity`, which extends the base type with members specific to that subclass

The simple class name, `LuaEntity` in this example, still contains attributes for _all_ subclasses.

### Events

`script.on_event()`, `script.get/set_filters()`, and `script.raise_event()` all have type checking on the event data/filter type, inferred from what is passed as the event name/id.

You can pass a type parameter to `script.generate_event_name<T>()`, and it will return an `EventId` that holds type info of the event data. Event functions on `script` can then use the type data when the `EventId` is passed.

### Array-like types

Classes that have an index operator, a length operator, and have an array-like structure, inherit from `(Readonly)Array`. These are `LuaInventory`, `LuaFluidBox`, `LuaTransportLine`. This allows you to use these classes like arrays, meaning having array methods, and `.length` translating to the lua length operator. However, this also means, like typescript arrays, they are **0-indexed, not 1-indexed**.

### Table or array types

For table or array types (e.g. Position), there also are types such as `PositionTable` and `PositionArray` that refer to the table or array form specifically.

### LuaGuiElement

`LuaGuiElement` is broken up into a [discriminated union](https://basarat.gitbook.io/typescript/type-system/discriminated-unions), with a separate type for each gui element type. Individual gui element types can be referred to by `<Type>GuiElement`, e.g. `ButtonGuiElement`.

Similarly, the table passed to `LuaGuiElement.add`, referred to as `GuiSpec`, is also broken up into a discriminated union for each gui element type. The type for a specific GuiSpec type is `<Type>GuiSpec`, e.g. `ListBoxGuiSpec`. `LuaGuiElement.add` will return the appropriate gui element type corresponding to the gui spec type received.

This is done both to provide more accurate types, and for possible integration with [JSX](https://typescripttolua.github.io/docs/jsx/).

### Examples

Check out the `test` directory on GitHub for more examples on particular type features.
