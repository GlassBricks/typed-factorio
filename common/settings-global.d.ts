/**
 * Provides access to the current mod settings.
 * This is available in the prototype and runtime stages.
 *
 * In the prototype stage, _only_ the `startup` settings are available.
 * In the runtime stage, this is extended with the full {@link LuaSettings} interface.
 */
declare const settings: import("factorio:common").SettingsGlobal
