# Typed Factorio

Complete and featureful typescript definitions for the Factorio modding lua api. This is intended to be used with [TypescriptToLua](https://typescripttolua.github.io/).

This project aims to provide type definitions for the Factorio API that are as complete as possible. This means minimal `any`s and `unknown`s, correct nullability, and smart types where possible. The generator integrates both the Factorio JSON api docs and manually defined additions and overrides.

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

## Type features

Typed-factorio has 100% complete types for the runtime stage. Description-only concepts and some not documented types are filled in manually.

### Lua features

The types include [TypescriptToLua language extensions](https://typescripttolua.github.io/docs/advanced/language-extensions/)
and [lua-types](https://github.com/TypeScriptToLua/lua-types) (for v5.2) as dependencies.

This is to use tstl features such as `LuaLengthMethod` and `LuaMultiReturn`.

### `nil`

The types consistently use `undefined` to represent `nil`.
`null` is not used, because `undefined` in typescript is much more similar to `nil` in lua, and optional parameters/properties already use `undefined`.

A class attribute is marked as possibly undefined only if the _read_ type is possibly `nil`. For properties where `nil` is not possible on _read_, but is possible on _write_, you can write `nil` by using `undefined!` or `myNullableValue!`, e.g. `controlBehavior.parameters = undefined!`.

### Variant parameter types

Variant parameter types (types with "additional fields can be specified depending on ...") are handled as discriminated unions. This gives proper type checking for individual variants.

The type for a specific variant is prefixed with the either variant name or "Other" for variants without additional fields, e.g. `AmmoDamageTechnologyModifier`, `OtherTechnologyModifier`

### Events

`script.on_event()`, `script.get/set_filters()`, and `script.raise_event()` all have type checking on the event data/filter type, inferred from what is passed as the event name/id.

You can pass a type parameter to `script.generate_event_name()`, and it will return an `EventId` that holds type info of the event data. Event functions on `script` can then use the type data when the `EventId` is passed.

### Array-like types

Classes that have an index operator, a length operator, and have an array-like structure, inherit from `(Readonly)Array`. These are `LuaInventory`, `LuaFluidBox`, `LuaTransportLine`. This allows you to use these classes like arrays, meaning having array methods, and `.length` translating to the lua length operator. However, this also means, like typescript arrays, they are **0-indexed, not 1-indexed**.

### Table or array types

For table or array types (e.g. Position), there also are types such as `PositionTable` and `PositionArray` that refer to the table or array form specifically.

### LuaGuiElement

`LuaGuiElement` is broken up into a discriminated union for each gui element type (See [here](https://basarat.gitbook.io/typescript/type-system/discriminated-unions) for information on discriminated unions). The type for a specific GuiElement type is `<Type>GuiElement`, e.g. `ButtonGuiElement`.

Similarly, the table passed to `LuaGuiElement.add`, referred to as `GuiSpec`, is also broken up into a discriminated union for each gui element type. The type for a specific GuiSpec type is `<Type>GuiSpec`, e.g. `ListBoxGuiSpec`.

This is done both to provide more accurate types, and for possible integration with [JSX](https://typescripttolua.github.io/docs/jsx/).

### Examples

Check out the `test` directory on GitHub for more examples on particular type features.
