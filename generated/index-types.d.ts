// This is an auto-generated file. Do not edit directly!

/** @noSelfInFile */

/**
 * See {@link LuaPlayer#index LuaPlayer.index}.
 *
 * If you really need to use a number/numeric literal for this type, you can use a cast, e.g. `2 as PlayerIndex`.
 */
type PlayerIndex = uint & IndexBrand<"_playerIndexBrand">

/**
 * See {@link LuaSurface#index LuaSurface.index}.
 *
 * If you really need to use a number/numeric literal for this type, you can use a cast, e.g. `2 as SurfaceIndex`.
 */
type SurfaceIndex = uint & IndexBrand<"_surfaceIndexBrand">

/**
 * See {@link LuaEntity#unit_number LuaEntity.unit_number}.
 *
 * If you really need to use a number/numeric literal for this type, you can use a cast, e.g. `2 as UnitNumber`.
 */
type UnitNumber = uint & IndexBrand<"_unitNumberBrand">

/**
 * See {@link LuaGuiElement#index LuaGuiElement.index}.
 *
 * If you really need to use a number/numeric literal for this type, you can use a cast, e.g. `2 as GuiElementIndex`.
 */
type GuiElementIndex = uint & IndexBrand<"_guiElementIndexBrand">

/**
 * See {@link LuaBootstrap#register_on_entity_destroyed LuaBootstrap.register_on_entity_destroyed}.
 *
 * If you really need to use a number/numeric literal for this type, you can use a cast, e.g. `2 as RegistrationNumber`.
 */
type RegistrationNumber = uint64 & IndexBrand<"_registrationNumberBrand">

interface __OptInFeatures {}

/**
 * Equals a branded type when __OptInFeatures contains strictIndexTypes, otherwise equals `unknown`.
 */
type IndexBrand<B extends string> = "strictIndexTypes" extends keyof __OptInFeatures
  ? {
      [K in B]: any
    }
  : unknown
