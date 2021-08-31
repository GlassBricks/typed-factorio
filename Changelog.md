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
