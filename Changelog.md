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
