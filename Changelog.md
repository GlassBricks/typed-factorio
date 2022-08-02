# v1.6.0

- Updated to factorio version 1.1.64

# v1.5.1

- Added old `Read` types as deprecated type aliases of new types; to help with migration.

# v1.5.0

### BREAKING

- Read-only forms of concepts (the most common form used) is now specified with just the name; forms with a `Read` or `Table` suffix have been removed.
- Write forms are now specified as either a union of table and array forms, or with a `Write` suffix for concepts.
  - For table-or-array concepts: `MapPositionRead` -> `MapPosition`, `MapPosition` -> `MapPosition | PositionArray`
  - For table concepts: `ScriptAreaRead` -> `ScriptArea`, `ScriptArea` -> `ScriptAreaWrite`
- The minimum TSTL version has been increased to v1.6.1 (A bug with documentation comments was fixed in that version).

### Other

- Updated to factorio version 1.1.63.
- Upgraded to factorio api docs json version 3.
- The new type `nil` is used instead of `undefined` (they are equivalent).
- More complete type for `BlueprintEntity`.
- Fixed missing read-write forms for more concepts.
- Improved documentation comments (enabled by json docs version 3).
- Improved documentation comments for variant parameter groups.

# v1.4.0

- Improve doc comments for enum concepts
- Improve doc comment formatting
- Improve types of concepts with literal union types
- Add read-specific types to AutoplaceControl and ComparatorString

# v1.3.2

- Move "notes" comment into the main body of doc comment, instead of in @remarks. This works around #13.
- Add manually defined overload for LuaControl::teleport().

# v1.3.1

- Use @linkplain instead of @link for web links. This hopefully works around issue #13

# v1.3.0

- Updated to factorio version 1.1.61

# v1.2.0

- Updated to factorio version 1.1.60

# v1.1.0

- Updated to factorio version 1.1.59

# v1.0.0

- This project now has all the features that was originally planned, and can now guarantee reasonable backwards compatibility for future releases.
- Updated to factorio version 1.1.57

# v0.20.0

- Updated to factorio version 1.1.56
- This is an **opt-in** feature: Some numeric types which represent indices/number,e.g. player_index, entity_number, are now branded numbers with their own type, e.g. `PlayerIndex` and `EntityNumber`. See the README for more info.
- Added custom-index-template.d.ts to assist trying out custom changes to types in a project.

# v0.19.0

- Updated to factorio version 1.1.53
- Updated to json api version 2
- Improved documentation comments

## Changes

- `Position`, `PositionArray`, and `PositionTable` have been replaced by `MapPosition`, `MapPositionArray`, and `MapPositionTable` respectively. These are now deprecated and may be removed in a future version.

# v0.18.1

- `TechnologyIdentification` now also has a more specific type when read.

# v0.18.0

- `ForceIdentification` and `ItemPrototypeIdentification` now have more specific types when read.
- Properties which represent a flag concept now have the correct specific type, instead of `string`.

# v0.17.1

- Fixed documentation links for events

# v0.17.0

- Updated to factorio version 1.1.52

# v0.16.0

- `LuaCustomTable` can be iterated on in a for-of loop directly (without using `pairs`). This requires TSTL v1.3.0 or later.
- TSTL dependency minimum version is now v1.3.0.

# v0.15.0

- Table or array concepts are now declared in table form wherever it is an "read" position.
  - This works with setter overloading for applicable properties: `player.color.x; player.color = [1, 1, 1]` is now valid!
  - This also applies to concepts/complex types which contain table_or_array properties.
- Some concepts now also have a special form where it is known to be in a "read" position, where all table_or_array concepts are declared in table form. These concepts are suffixed with "Read", e.g. `ScriptAreaRead`.
- Arrays which are known to be in a "write" only form (e.g. method parameters) now are marked readonly. This means you can now pass readonly arrays to these methods.
- `MapPosition` is now a table or array concept.
- Classes with subclasses are now declared with all properties, instead of an intersection of subclasses (reversion)
- Subclass specializations added for some missing classes

# v0.14.1

- LuaStyle: `extra_margin/padding_when_activated` is now for subclass scroll_pane

# v0.14.0

- LuaStyle size, margin/padding setters now have more specific array types. These array types are `SizeArray` and `StyleValuesArray` for size and margin/padding, respectively.
- `@noSelf` annotation is now only present when necessary.
- For classes with subclasses:
  - The original class name (e.g. `LuaItemStack`) still contains attributes of all subclasses (same as before).
  - There is now a `Base` type (e.g. `BaseItemStack`) which only includes attributes common to all subclasses.
  - There is a separate type definition for each subclass, e.g. `BlueprintItem`. Note that one instance may still belong to multiple subclasses (the subclasses are not mutually exclusive).
  - The above two can be optionally used for stricter types.

# v0.13.2

- Fix: resize_to_sprite property should not be on subclass sprite-button
- Fix: ChooseElemButtonSpec filters should be named elem_filters
- Switch back to `/latest` api docs link
  - New version of web api docs is now active

# v0.13.0

- Update to factorio version 1.1.49

# v0.12.0

- Update to factorio version 1.1.48

# v0.11.1

- Localised strings now accept boolean and undefined.

# v0.11.0

- Update to factorio version 1.1.46

# v0.10.0

- LuaGuiElement.style and LuaControl.opened now have different get/set types (more specific get type).
- The array form of LocalizedString is now readonly.

# v0.9.0

- Update to factorio version 1.1.43
- The `defines.events `_type_ was renamed to `defines.Events`, to reduce confusion between the namespace/type

# v0.8.0

- All event types now explicitly extend `EventData`
- Variant parameter groups without additional fields now have their own type, instead of all being grouped into `Other`

# v0.7.3

- Update to factorio version 1.1.42
  - No api changes, but improvements to descriptions

# v0.7.2

- Fix minor issue for event types

# v0.7.0

- Updated to factorio version 1.1.41 (no changes to lua api)
- Improved smart types for events

# v0.6.1

- Added type for BlueprintControlBehavior

# v0.6.0

- Updated to factorio version 1.1.40
- Fixed regression with duplicate strings in string union types

# v0.5.0

- Updated to factorio version 1.1.39
- Documentation links now point to the new API docs website. More info here: https://forums.factorio.com/viewtopic.php?f=34&t=99797

# v0.4.1

### Changed

- LuaRemote.addInterface now lets remote functions take any arguments.

# v0.4.0

## **BREAKING**

- Only the latest version api is now provided.
- It is now accessed using `typed-factorio/runtime` instead of `typed-factorio/<version>`

### Added

- Basic types for settings and data stage. See README for more details.
- Types for "util" and "mod-gui" lualib modules

### Fixed

- LuaGuiElement::add with a literal now give diagnostic if you supply a field that shouldn't be there.

### Internal

- Split generated files into multiple files
- Improved compilation tests

# v0.3.0

- Added factorio version `1.1.38`

# v0.2.0

- `AnyBasic` now uses type `table` instead of type `Record<any, AnyBasic>`
- README changes

# v0.1.0

- Initial release
