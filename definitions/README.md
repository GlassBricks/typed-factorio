# Typed Factorio

Featureful typescript definitions for the Factorio modding lua api. This is intended to be used with [TypescriptToLua](https://typescripttolua.github.io/).

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
+    "types": [ "typed-factorio/<version>" ]
  }
}
```

Where `<version>` is a factorio version e.g. `1.1.37`, or `latest` for the latest factorio version.

Note: When the types are released for a new factorio version, you will need update your package version to get the types.

## Notes on types

### Lua features

The types include [TypescriptToLua language extensions](https://typescripttolua.github.io/docs/advanced/language-extensions/)
and [lua-types](https://github.com/TypeScriptToLua/lua-types) (for v5.2), as dependencies.

This is so that features like `LuaLengthMethod` and `LuaMultiReturn` can be used.

### `nil`

The types consistently use `undefined` to represent `nil`.
`null` is not used instead because `undefined` in typescript is more similar to `nil` in lua, than `null`, and optional parameters/properties already use `undefined`.

A class attribute is marked as undefined only if the _read_ read is possibly nil. To _write_ `nil` to properties where `nil` is accepted but the _read_ type cannot be nil, you can use `undefined!` or `myNullableValue!`, e.g. `controlBehavior.parameters = undefined!`.

### Array-like types

Classes that have an index and length operator and have an array-like structure inherit from `(Readonly)Array`. This allows you to use them like arrays, such as array methods and `.length`. However, this also means, like typescript arrays, they are **0-indexed, not 1-indexed**.

### LuaGuiElement

`LuaGuiElement` is broken up into a discriminated union for each gui element type (See [here](https://basarat.gitbook.io/typescript/type-system/discriminated-unions) for information on discriminated unions). The type for a specific GuiElement type is `<Type>GuiElement`, e.g. `ButtonGuiElement`.

Similarly, the table passed to `LuaGuiElement.add`, referred to as `GuiSpec`, is also broken up into a discriminated union for each gui element type. The type for a specific GuiSpec type is `<Type>GuiSpec`, e.g. `ListBoxGuiSpec`.

### Events

`script.on_event()`, `script.get/set_filters()`, and `script.raise_event()` all have type checking on the event data/filter type, inferred from what is passed as the event name/id.

You can pass a type parameter to `script.generate_event_name()` with the type of the event data, and it will return an `EventId` that also holds type info for that data.

### Examples

Check out the [`/definitions/test/compileTest`](definitions/test/compileTest) directory for more examples on particular type features.
