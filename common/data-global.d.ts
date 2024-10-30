/**
 * Provides access to read/edit prototypes.
 *
 * This is only available in the settings or prototype stage.
 * Only prototypes for the current stage can be accessed.
 */
declare const data: import("factorio:common").DataGlobal

/**
 * A table of (mod name -> mod version) for all currently active mods.
 *
 * This global is only available in the settings or prototype stage.
 * In the runtime stage, use `script.active_mods`.
 */
declare const mods: import("factorio:common").ActiveMods

/**
 * A dict of feature flags and their status.
 *
 * This global is only available in the settings or prototype stage.
 * In the runtime stage, use `script.feature_flags`.
 */
declare const feature_flags: import("factorio:common").FeatureFlags
