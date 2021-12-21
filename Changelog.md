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
