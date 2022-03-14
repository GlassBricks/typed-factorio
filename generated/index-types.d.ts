// This is an auto-generated file. Do not edit directly!

/** @noSelfInFile */

/**
 * See {@link LuaPlayer#index LuaPlayer.index}.
 *
 * If using strict-index-types, and you need to use a plain number for this type, you can use a cast, e.g. `1 as PlayerIndex`.
 */
type PlayerIndex = uint & IndexBrand<"_playerIndexBrand">

/**
 * See {@link LuaSurface#index LuaSurface.index}.
 *
 * If using strict-index-types, and you need to use a plain number for this type, you can use a cast, e.g. `1 as SurfaceIndex`.
 */
type SurfaceIndex = uint & IndexBrand<"_surfaceIndexBrand">

/**
 * See {@link LuaEntity#unit_number LuaEntity.unit_number}.
 *
 * If using strict-index-types, and you need to use a plain number for this type, you can use a cast, e.g. `1 as UnitNumber`.
 */
type UnitNumber = uint & IndexBrand<"_unitNumberBrand">

/**
 * See {@link LuaGuiElement#index LuaGuiElement.index}.
 *
 * If using strict-index-types, and you need to use a plain number for this type, you can use a cast, e.g. `1 as GuiElementIndex`.
 */
type GuiElementIndex = uint & IndexBrand<"_guiElementIndexBrand">

/**
 * See {@link LuaBootstrap#register_on_entity_destroyed LuaBootstrap.register_on_entity_destroyed}.
 *
 * If using strict-index-types, and you need to use a plain number for this type, you can use a cast, e.g. `1 as RegistrationNumber`.
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
