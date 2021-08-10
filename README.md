# Typed Factorio

## NOTE: this package is not _yet_ published to npm

Featureful, strongly-typed Typescript definitions for the Factorio lua api. This is intended to be used with [TypescriptToLua](https://typescripttolua.github.io/).

This project aims to provide type definitions for the Factorio API that are as complete as possible. This means minimal `any`s and `unknown`s, correct nullability, and many manually defined features and additions to provide more complete types.

The generator integrates both the Factorio JSON api docs, and manually defined additions and overrides.

## Installation

1. Install this package

```
npm add typed-factorio

or

yarn add typed-factorio
```

2. Add to your `tsconfig.json`:

```diff
{
  "compilerOptions": {
+    "types": [ "/<version>" ]
  }
}
```

Where `<version>` is a factorio version e.g. `1.1.37`, or `latest` for the latest factorio version.

Note: You will need update your package version to get types for a new factorio version, when released.

## Notes on types

### Lua features

The types include [TypescriptToLua language extensions](https://typescripttolua.github.io/docs/advanced/language-extensions/)
and [lua-types](https://github.com/TypeScriptToLua/lua-types) (for v5.2), as dependencies.

### `nil`

The types consistently use `undefined` to represent `nil`.
`null` is not used instead because `undefined` in typescript is more similar to `nil` in lua, than `null`, and optional parameters/properties already use the `undefined`.

A class attribute is marked as possibly undefined only if the type when _read_ is possibly nil. To _write_ `nil` to properties where `nil` is accepted, but the _read_ type cannot be nil, you can use `undefined!` or `myNullableValue!`, e.g. `controlBehavior.parameters = undefined!`.

### Array-like types

Classes that have an index and length operator and have an array-like structure inherit from `(Readonly)Array`. This allows you to use array methods on them. However, this also means, like typescript arrays, they are **0-indexed, not 1-indexed**.

### LuaGuiElement

`LuaGuiElement` is broken up into a discriminated union for each gui element type (See [here](https://basarat.gitbook.io/typescript/type-system/discriminated-unions) for information on discriminated unions). The type for a specific GuiElement type is `<Type>GuiElement`, e.g. `ButtonGuiElement`.

Similarly, the table passed to `LuaGuiElement.add`, referred to as `GuiSpec`, is also broken up into a discriminated union for each gui element type. The type for a specific GuiSpec type is `<Type>GuiSpec`, e.g. `ListBoxGuiSpec`.

### Events

`script.on_event()`, `script.get/set_filters()`, and `script.raise_event()` all have type checking on the event data/filter type.

You can pass a type parameter to `script.generate_event_name()` with the type of the event data, and it will return an `EventId` that also holds type info for that data.

### Examples

Check out the [`/types/test/compileTest`](types/test/compileTest) directory for examples on particular type features.
