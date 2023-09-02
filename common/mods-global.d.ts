/**
 * A table of the current active mods, in the form of modName => versionString.
 *
 * This is only available in the settings and data stage, not the runtime stage.
 *
 * For the runtime stage, use script.active_mods.
 */
declare const mods: Record<string, string | undefined>
