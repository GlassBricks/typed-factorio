// This is an auto-generated file. Do not edit directly!

/** @noSelfInFile */

/**
 * See {@link LuaPlayer#index LuaPlayer.index}.
 *
 * If you really need to use a number/numeric literal for this type, you can use a cast, e.g. `2 as PlayerIndex`.
 */
type PlayerIndex =
  | (uint & {
      _playerIndexBrand: void
    })
  | 1

/**
 * See {@link LuaSurface#index LuaSurface.index}.
 *
 * If you really need to use a number/numeric literal for this type, you can use a cast, e.g. `2 as SurfaceIndex`.
 */
type SurfaceIndex =
  | (uint & {
      _surfaceIndexBrand: void
    })
  | 1

/**
 * See {@link LuaEntity#unit_number LuaEntity.unit_number}.
 *
 * If you really need to use a number/numeric literal for this type, you can use a cast, e.g. `2 as UnitNumber`.
 */
type UnitNumber = uint & {
  _unitNumberBrand: void
}

/**
 * See {@link LuaGuiElement#index LuaGuiElement.index}.
 *
 * If you really need to use a number/numeric literal for this type, you can use a cast, e.g. `2 as GuiElementIndex`.
 */
type GuiElementIndex = uint & {
  _guiElementIndexBrand: void
}

/**
 * See {@link LuaBootstrap#register_on_entity_destroyed LuaBootstrap.register_on_entity_destroyed}.
 *
 * If you really need to use a number/numeric literal for this type, you can use a cast, e.g. `2 as RegistrationNumber`.
 */
type RegistrationNumber = uint64 & {
  _registrationNumberBrand: void
}
