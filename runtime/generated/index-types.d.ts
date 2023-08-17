// This is an auto-generated file. Do not edit directly!

/** @noSelfInFile */

/**
 * See {@link LuaPlayer#index LuaPlayer.index}.
 *
 * You can cast a raw number to this type, e.g. `1 as PlayerIndex`.
 */
type PlayerIndex = uint & {
  _playerIndexBrand: void
}

/**
 * See {@link LuaSurface#index LuaSurface.index}.
 *
 * You can cast a raw number to this type, e.g. `1 as SurfaceIndex`.
 */
type SurfaceIndex = uint & {
  _surfaceIndexBrand: void
}

/**
 * See {@link LuaForce#index LuaForce.index}.
 *
 * You can cast a raw number to this type, e.g. `1 as ForceIndex`.
 */
type ForceIndex = uint & {
  _forceIndexBrand: void
}

/**
 * See {@link LuaEntity#unit_number LuaEntity.unit_number}.
 *
 * You can cast a raw number to this type, e.g. `1 as UnitNumber`.
 */
type UnitNumber = uint & {
  _unitNumberBrand: void
}

/**
 * See {@link LuaGuiElement#index LuaGuiElement.index}.
 *
 * You can cast a raw number to this type, e.g. `1 as GuiElementIndex`.
 */
type GuiElementIndex = uint & {
  _guiElementIndexBrand: void
}

/**
 * See {@link LuaBootstrap#register_on_entity_destroyed LuaBootstrap.register_on_entity_destroyed}.
 *
 * You can cast a raw number to this type, e.g. `1 as RegistrationNumber`.
 */
type RegistrationNumber = uint64 & {
  _registrationNumberBrand: void
}

interface __OptInFeatures {}

/**
 * Equals a branded type when __OptInFeatures contains strictIndexTypes, otherwise equals `unknown`.
 */
type IndexBrand<B extends string> = "strictIndexTypes" extends keyof __OptInFeatures
  ? {
      [K in B]: any
    }
  : unknown
