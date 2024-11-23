# v3.5.1

- Fix that vehicle_automatic_targeting_parameters was not optional in BlueprintEntity

# v3.5.0

- Updated to factorio version 2.0.21
- Updated type of BlueprintEntity for Factorio v2.0! Special thanks to thedoh for helping out.

# v3.4.0

- Added different write-types for FluidID, ItemID, etc., and types that include them.

# v3.3.1

- Updated to factorio version 2.0.17
- Fix LuaControl.crafting_queue to be potentially undefined (#47). Thanks @nmalaguti!
- Deduplicated types in union types.

# v3.2.0

- Updated to factorio version 2.0.16
- Fix game.forces to be LuaForce instead of LuaSurface (#46). Thanks @nmalaguti!

# v3.1.1

- Updated to factorio version 2.0.15
- Defines enum values are no longer string escaped when not necessary.

# v3.0.1

- Added definition for the "feature_flags" global.

# v3.0.0

- Updated to factorio 2.0!! SPAAACE!!
- Simplified types for ChooseElemButtonSpec; it is no longer a discriminated union for each subtype.
- Iteration key type for `LuaCustomTable`s are now accurate.

The major version has been bumped to reflect breaking changes in the factorio API. However, the way typed-factorio is
accessed or configured has not changed.

# v2.14.0

- Updated to a newer revision of factorio version 1.1.110

# v2.13.0

- Updated to factorio version 1.1.110

# v2.12.0

- Updated to factorio version 1.1.109

# v2.11.0

- Updated to factorio version 1.1.108

# v2.10.1

- Updated to factorio version 1.1.107
- Added types for the new "color-setting".
- Fixed wrong spelling for `localised_name` and `localised_description` in settings definitions.

# v2.9.0

- Updated to factorio version 1.1.105
- Fixed links to `defines` in documentation comments for the prototype stage

# 2.8.0

- The `type` attribute of prototype classes now includes all subclasses of that prototype. For instance,
  `EntityPrototype.type` includes `"accumulator"`, `"assembling-machine"`, etc.
- Added `AchievmentType`, `EntityType`, `EquipmentType`, and `ItemType` types, which lists all typenames for the
  specific prototype type.
- In runtime types, the values for `type` and `ghost_type` attributes are specified to be specific prototype typenames
  when possible. For instance, `LuaEntity.type` now has type `EntityType` instead of `string`.

- Updated to factorio version 1.1.104

# v2.7.2

- The type definition for ColorArray and ColorModifierArray are now readonly, consistent with other array types.

# v2.7.1

- Updated to factorio version 1.1.103
- Fixed type definition for ColorArray and ColorModifierArray

# v2.6.0

- Added feature `CustomInputNames`. By extending this interface, this allows optionally type-checking custom input
  names.
  For more details, see the README, or the documentation on `CustomInputNames` (in the `factorio:common` module).
- Removed `readonly` property from prototype `type` fields. This may be useful when copying another prototype for a
  sub-prototype.
- Updated to factorio version 1.1.101

# v2.5.0

- Updated to factorio version 1.1.97

# v2.4.0

- Updated to factorio version 1.1.95

# v2.3.0

- Updated to factorio version 1.1.94

# v2.2.0

- Updated to factorio version 1.1.92

# v2.1.0

- Updated to factorio version 1.1.90

# v2.0.1

- Added manual type definition for CraftingMachinePrototype.fluid_boxes. Thanks @Bilka2!

# v2.0.0

## New features

- Added complete types for the prototype stage! See the README for more details.

## Breaking changes

- With the addition of prototype stage types, types are no longer global. Instead, types are divided into the "virtual"
  modules `"factorio:settings"`, `"factorio:prototype"`, and `"factorio:runtime"`.
  - The `defines` and `serpent` namespaces are still global.
- The placeholder types for the data and settings stage have been removed; see the README for how to add the full types.
- The "strict index types" option is now always applied (no longer an opt-in feature).
- The deprecated `Read` types have been removed.

## Other changes

- In online documentation links, the specific factorio version instead of "latest".
- Documentation comments updated to be more similar to the online documentation.
- Updated to factorio version 1.1.89

# v1.17.0

- Updated to factorio version 1.1.86

# v1.16.0

- Updated to factorio version 1.1.83

# v1.15.0

- Updated to factorio version 1.1.82

# v1.14.0

- Updated to factorio version 1.1.77

# v1.13.0

- Updated to factorio version 1.1.75

# v1.12.0

- Updated to factorio version 1.1.74

# v1.11.0

- Updated to factorio version 1.1.72

# v1.10.2

- Fix BlueprintControlBehavior.filters

# v1.10.1

- BlueprintEntity.infinity_filters can also be of type InfinityPipeFilter

# v1.10.0

- Updated to factorio version 1.1.71

# v1.9.0

- Updated to factorio version 1.1.70
- Fixed online documentation links for operators

# v1.8.1

- Added optional typing for remote interface calls

# v1.8.0

- Updated to factorio version 1.1.69

# v1.7.4

- Fix advanced types of method returns (nullability, string unions, etc.)

# v1.7.3

- Improve types of "util" lualib module
- Made compatible with typescript v4.8

# v1.7.1

- Added proper nullablity to members with different read/write types
- Deduped union types

# v1.7.0

- Updated to factorio version 1.1.67

# v1.6.1

- Fixed write type for `BoundingBox`.
- Simplified types for BlueprintEntity.

# v1.6.0

- Updated to factorio version 1.1.64

# v1.5.1

- Added old `Read` types as deprecated type aliases of new types; to help with migration.

# v1.5.0

### BREAKING

- Read-only forms of concepts (the most common form used) is now specified with just the name; forms with a `Read` or
  `Table` suffix have been removed.
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

- This project now has all features that were originally planned, and can now guarantee reasonable backwards
  compatibility for future releases.
- Updated to factorio version 1.1.57

# v0.20.0

- Updated to factorio version 1.1.56
- This is an **opt-in** feature: Some numeric types which represent indices/number,e.g. player_index, entity_number, are
  now branded numbers with their own type, e.g. `PlayerIndex` and `EntityNumber`. See the README for more info.
- Added custom-index-template.d.ts to assist trying out custom changes to types in a project.

# v0.19.0

- Updated to factorio version 1.1.53
- Updated to json api version 2
- Improved documentation comments

## Changes

- `Position`, `PositionArray`, and `PositionTable` have been replaced by `MapPosition`, `MapPositionArray`, and
  `MapPositionTable` respectively. These are now deprecated and may be removed in a future version.

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

- `LuaCustomTable` can be iterated on in a for-of loop directly (without using `pairs`). This requires TSTL v1.3.0 or
  later.
- TSTL dependency minimum version is now v1.3.0.

# v0.15.0

- Table or array concepts are now declared in table form wherever it is an "read" position.
  - This works with setter overloading for applicable properties: `player.color.x; player.color = [1, 1, 1]` is now
    valid!
  - This also applies to concepts/complex types which contain table_or_array properties.
- Some concepts now also have a special form where it is known to be in a "read" position, where all table_or_array
  concepts are declared in table form. These concepts are suffixed with "Read", e.g. `ScriptAreaRead`.
- Arrays which are known to be in a "write" only form (e.g. method parameters) now are marked readonly. This means you
  can now pass readonly arrays to these methods.
- `MapPosition` is now a table or array concept.
- Classes with subclasses are now declared with all properties, instead of an intersection of subclasses (reversion)
- Subclass specializations added for some missing classes

# v0.14.1

- LuaStyle: `extra_margin/padding_when_activated` is now for subclass scroll_pane

# v0.14.0

- LuaStyle size, margin/padding setters now have more specific array types. These array types are `SizeArray` and
  `StyleValuesArray` for size and margin/padding, respectively.
- `@noSelf` annotation is now only present when necessary.
- For classes with subclasses:
  - The original class name (e.g. `LuaItemStack`) still contains attributes of all subclasses (same as before).
  - There is now a `Base` type (e.g. `BaseItemStack`) which only includes attributes common to all subclasses.
  - There is a separate type definition for each subclass, e.g. `BlueprintItem`. Note that one instance may still
    belong to multiple subclasses (the subclasses are not mutually exclusive).
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
- Documentation links now point to the new API docs website. More info
  here: https://forums.factorio.com/viewtopic.php?f=34&t=99797

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
