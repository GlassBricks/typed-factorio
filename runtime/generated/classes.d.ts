// This is an auto-generated file. Do not edit directly!

/** @noSelfInFile */

import type { EntityType, EquipmentType, ItemType, PrototypeMap } from "factorio:prototype"

import type { ActiveMods, CustomInputName } from "factorio:common"

import type { SettingsPrototypeMap } from "factorio:settings"

/**
 * @noResolution
 */
declare module "factorio:runtime" {
  /**
   * Collection of settings for overriding default ai behavior.
   * @noSelf
   */
  export interface LuaAISettings {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * If enabled, units that repeatedly fail to succeed at commands will be destroyed.
     */
    allow_destroy_when_commands_fail: boolean
    /**
     * If enabled, units that have nothing else to do will attempt to return to a spawner.
     */
    allow_try_return_to_spawner: boolean
    /**
     * If enabled, units will try to separate themselves from nearby friendly units.
     */
    do_separation: boolean
    /**
     * Defines how coarse the pathfinder's grid is, where smaller values mean a coarser grid. Defaults to `0`, which equals a resolution of `1x1` tiles, centered on tile centers. Values range from `-8` to `8` inclusive, where each integer increment doubles/halves the resolution. So, a resolution of `-8` equals a grid of `256x256` tiles, and a resolution of `8` equals `1/256` of a tile.
     */
    path_resolution_modifier: int8
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaAISettings"
  }
  /**
   * Control behavior for accumulators.
   * @noSelf
   */
  export interface LuaAccumulatorControlBehavior extends LuaControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    output_signal: SignalID
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaAccumulatorControlBehavior"
  }
  /**
   * Prototype of a achievement.
   * @noSelf
   */
  export interface LuaAchievementPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Name of this prototype.
     */
    readonly name: string
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    readonly allowed_without_fight: boolean
    readonly hidden: boolean
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaAchievementPrototype"
  }
  /**
   * Prototype of a ammo category.
   * @noSelf
   */
  export interface LuaAmmoCategoryPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Name of this prototype.
     */
    readonly name: string
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    readonly bonus_gui_order: string
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaAmmoCategoryPrototype"
  }
  /**
   * Control behavior for arithmetic combinators.
   * @noSelf
   */
  export interface LuaArithmeticCombinatorControlBehavior extends LuaCombinatorControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * This arithmetic combinator's parameters.
     *
     * Writing `nil` clears the combinator's parameters.
     */
    parameters: ArithmeticCombinatorParameters | nil
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaArithmeticCombinatorControlBehavior"
  }
  /**
   * Prototype of an autoplace control.
   * @noSelf
   */
  export interface LuaAutoplaceControlPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Name of this prototype.
     */
    readonly name: string
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    readonly richness: boolean
    readonly can_be_disabled: boolean
    readonly control_order: string
    /**
     * Category name of this prototype.
     */
    readonly category: string
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaAutoplaceControlPrototype"
  }
  /**
   * Entry point for registering event handlers. It is accessible through the global object named `script`.
   * @noSelf
   */
  export interface LuaBootstrap {
    /**
     * Register a function to be run on mod initialization.
     *
     * This is only called when a new save game is created or when a save file is loaded that previously didn't contain the mod. During it, the mod gets the chance to set up initial values that it will use for its lifetime. It has full access to {@link LuaGameScript} and the {@linkplain https://lua-api.factorio.com/latest/global.html global} table and can change anything about them that it deems appropriate. No other events will be raised for the mod until it has finished this step.
     *
     * For more context, refer to the {@linkplain https://lua-api.factorio.com/latest/data-lifecycle.html Data Lifecycle} page.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @example
     * -- Initialize a `players` table in `global` for later use
     * script.on_init(function()
     *   global.players = {}
     * end)
     */
    on_init(handler: (() => void) | nil): void
    /**
     * Register a function to be run on save load. This is only called for mods that have been part of the save previously, or for players connecting to a running multiplayer session.
     *
     * It gives the mod the opportunity to rectify potential differences in local state introduced by the save/load cycle. Doing anything other than the following three will lead to desyncs, breaking multiplayer and replay functionality. Access to {@link LuaGameScript} is not available. The {@linkplain https://lua-api.factorio.com/latest/global.html global} table can be accessed and is safe to read from, but not write to, as doing so will lead to an error.
     *
     * The only legitimate uses of this event are these:
     *
     * - Re-setup {@linkplain https://www.lua.org/pil/13.html metatables} as they are not persisted through the save/load cycle.
     *
     * - Re-setup conditional event handlers, meaning subscribing to an event only when some condition is met to save processing time.
     *
     * - Create local references to data stored in the {@linkplain https://lua-api.factorio.com/latest/global.html global} table.
     *
     * For all other purposes, {@link LuaBootstrap#on_init LuaBootstrap::on_init}, {@link LuaBootstrap#on_configuration_changed LuaBootstrap::on_configuration_changed} or {@linkplain https://lua-api.factorio.com/latest/migrations.html migrations} should be used instead.
     *
     * For more context, refer to the {@linkplain https://lua-api.factorio.com/latest/data-lifecycle.html Data Lifecycle} page.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     */
    on_load(handler: (() => void) | nil): void
    /**
     * Register a function to be run when mod configuration changes.
     *
     * This is called when the game version or any mod version changed, when any mod was added or removed, when a startup setting has changed, when any prototypes have been added or removed, or when a migration was applied. It allows the mod to make any changes it deems appropriate to both the data structures in its {@linkplain https://lua-api.factorio.com/latest/global.html global} table or to the game state through {@link LuaGameScript}.
     *
     * For more context, refer to the {@linkplain https://lua-api.factorio.com/latest/data-lifecycle.html Data Lifecycle} page.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     */
    on_configuration_changed(handler: ((arg1: ConfigurationChangedData) => void) | nil): void
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example
     * -- Register for the on_tick event to print the current tick to console each tick
     * script.on_event(defines.events.on_tick,
     * function(event) game.print(event.tick) end)
     * @example
     * -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
     * script.on_event(defines.events.on_built_entity,
     * function(event) game.print("Gotta go fast!") end,
     * {{filter = "name", name = "fast-inserter"}})
     */
    on_event<E extends EventId<any, table>>(
      event: E,
      handler: ((data: E["_eventData"]) => void) | nil,
      filters?: E["_filter"][],
    ): void
    on_event<E extends EventId<any>>(event: E | E[], f: ((data: E["_eventData"]) => void) | nil): void
    on_event(event: CustomInputName, f: ((data: CustomInputEvent) => void) | nil): void
    /**
     * Register a handler to run every nth-tick(s). When the game is on tick 0 it will trigger all registered handlers.
     * @param tick The nth-tick(s) to invoke the handler on. Passing `nil` as the only parameter will unregister all nth-tick handlers.
     * @param handler The handler to run. Passing `nil` will unregister it for the provided nth-tick(s).
     */
    on_nth_tick(tick: uint | readonly uint[] | nil, handler: ((arg1: NthTickEventData) => void) | nil): void
    /**
     * Registers an entity so that after it's destroyed, {@link OnEntityDestroyedEvent on_entity_destroyed} is called.
     *
     * Once an entity is registered, it stays registered until it is actually destroyed, even through save/load cycles. The registration is global across all mods, meaning once one mod registers an entity, all mods listening to {@link OnEntityDestroyedEvent on_entity_destroyed} will receive the event when it is destroyed. Registering the same entity multiple times will still only fire the destruction event once, and will return the same registration number.
     *
     * Depending on when a given entity is destroyed, {@link OnEntityDestroyedEvent on_entity_destroyed} will either be fired at the end of the current tick or at the end of the next tick.
     * @param entity The entity to register.
     * @returns The registration number. It is used to identify the entity in the {@link OnEntityDestroyedEvent on_entity_destroyed} event.
     */
    register_on_entity_destroyed(entity: LuaEntity): RegistrationNumber
    /**
     * Register a metatable to have linkage recorded and restored when saving/loading.
     *
     * The metatable itself will not be saved. Instead, only the linkage to a registered metatable is saved, and the metatable registered under that name will be used when loading the table.
     *
     * `register_metatable()` can not be used in the console, in event listeners or during a `remote.call()`.
     *
     * The metatable first needs to be defined in the mod's root scope, then registered using this method. From then on, it will be properly restored for tables in {@linkplain https://lua-api.factorio.com/latest/global.html global}.
     *
     * ```
     * local metatable = {
     *   __index = function(key)
     *     return "no value for key " .. key
     *   end
     * }
     * script.register_metatable("my_metatable", metatable)
     * ```
     *
     * This previously defined `metatable` can then be set on any table as usual:
     *
     * ```
     * local table = {key="value"}
     * setmetatable(table, metatable)
     * ```
     * @param name The name of this metatable. Names must be unique per mod.
     * @param metatable The metatable to register.
     */
    register_metatable(name: string, metatable: table): void
    /**
     * Generate a new, unique event ID that can be used to raise custom events with {@link LuaBootstrap#raise_event LuaBootstrap::raise_event}.
     * @returns The newly generated event ID.
     */
    generate_event_name<T extends table>(): CustomEventId<T>
    /**
     * Find the event handler for an event.
     * @param event The event identifier to get a handler for.
     * @returns Reference to the function currently registered as the handler, if it was found.
     */
    get_event_handler<E extends EventId<any>>(event: E): (data: E["_eventData"]) => void | nil
    get_event_handler(event: CustomInputName): (data: CustomInputEvent) => void | nil
    /**
     * Gets the mod event order as a string.
     */
    get_event_order(): string
    /**
     * Sets the filters for the given event. The filters are only retained when set after the actual event registration, because registering for an event with different or no filters will overwrite previously set ones.
     *
     * Limit the {@link OnMarkedForDeconstructionEvent on_marked_for_deconstruction} event to only be received when a non-ghost entity is marked for deconstruction.
     *
     * ```
     * script.set_event_filter(defines.events.on_marked_for_deconstruction, {{filter = "ghost", invert = true}})
     * ```
     *
     * Limit the {@link OnBuiltEntityEvent on_built_entity} event to only be received when either a `unit` or a `unit-spawner` is built.
     *
     * ```
     * script.set_event_filter(defines.events.on_built_entity, {{filter = "type", type = "unit"}, {filter = "type", type = "unit-spawner"}})
     * ```
     *
     * Limit the {@link OnEntityDamagedEvent on_entity_damaged} event to only be received when a `rail` is damaged by an `acid` attack.
     *
     * ```
     * script.set_event_filter(defines.events.on_entity_damaged, {{filter = "rail"}, {filter = "damage-type", type = "acid", mode = "and"}})
     * ```
     * @param event ID of the event to filter.
     * @param filters The filters or `nil` to clear them.
     */
    set_event_filter<E extends EventId<any, table>>(event: E, filters: E["_filter"][] | nil): void
    /**
     * Gets the filters for the given event.
     * @param event ID of the event to get.
     * @returns The filters or `nil` if none are defined.
     */
    get_event_filter<E extends EventId<any, table>>(event: E): E["_filter"][] | nil
    /**
     * Gets the prototype history for the given type and name.
     */
    get_prototype_history(type: keyof PrototypeMap, name: string): PrototypeHistory
    /**
     * Raise an event. Only events generated with {@link LuaBootstrap#generate_event_name LuaBootstrap::generate_event_name} and the following can be raised.
     *
     * {@link https://lua-api.factorio.com/latest/classes/LuaBootstrap.html#LuaBootstrap.raise_event > Events that can be raised manually:}
     * @param event ID of the event to raise.
     * @param data Table with extra data that will be passed to the event handler. Any invalid LuaObjects will silently stop the event from being raised.
     * @example
     * -- Raise the on_console_chat event with the desired message 'from' the first player
     * local data = {player_index = 1, message = "Hello friends!"}
     * script.raise_event(defines.events.on_console_chat, data)
     */
    raise_event<E extends RaiseableEvents | CustomEventId<any>>(
      event: E,
      data: Omit<E["_eventData"], keyof EventData>,
    ): void
    /**
     * ## Raised events
     * - {@link OnConsoleChatEvent on_console_chat} _instantly_ Raised with the provided arguments.
     */
    raise_console_chat(params: {
      /**
       * The player doing the chatting.
       */
      readonly player_index: PlayerIndex
      /**
       * The chat message to send.
       */
      readonly message: string
    }): void
    /**
     * ## Raised events
     * - {@link OnPlayerCraftedItemEvent on_player_crafted_item} _instantly_ Raised with the provided arguments.
     */
    raise_player_crafted_item(params: {
      /**
       * The item that has been crafted.
       */
      readonly item_stack: LuaItemStack
      /**
       * The player doing the crafting.
       */
      readonly player_index: PlayerIndex
      /**
       * The recipe used to craft this item.
       */
      readonly recipe: LuaRecipe
    }): void
    /**
     * ## Raised events
     * - {@link OnPlayerFastTransferredEvent on_player_fast_transferred} _instantly_ Raised with the provided arguments.
     */
    raise_player_fast_transferred(params: {
      /**
       * The player transferred from or to.
       */
      readonly player_index: PlayerIndex
      /**
       * The entity transferred from or to.
       */
      readonly entity: LuaEntity
      /**
       * Whether the transfer was from player to entity. If `false`, the transfer was from entity to player.
       */
      readonly from_player: boolean
      /**
       * Whether the transfer was a split action (half stack).
       */
      readonly is_split: boolean
    }): void
    /**
     * ## Raised events
     * - {@link OnBiterBaseBuiltEvent on_biter_base_built} _instantly_ Raised with the provided arguments.
     */
    raise_biter_base_built(params: {
      /**
       * The entity that was built.
       */
      readonly entity: LuaEntity
    }): void
    /**
     * ## Raised events
     * - {@link OnMarketItemPurchasedEvent on_market_item_purchased} _instantly_ Raised with the provided arguments.
     */
    raise_market_item_purchased(params: {
      /**
       * The player who did the purchasing.
       */
      readonly player_index: PlayerIndex
      /**
       * The market entity.
       */
      readonly market: LuaEntity
      /**
       * The index of the offer purchased.
       */
      readonly offer_index: uint
      /**
       * The amount of offers purchased.
       */
      readonly count: uint
    }): void
    /**
     * ## Raised events
     * - {@link ScriptRaisedBuiltEvent script_raised_built} _instantly_ Raised with the provided arguments.
     */
    raise_script_built(params: {
      /**
       * The entity that has been built.
       */
      readonly entity: LuaEntity
    }): void
    /**
     * ## Raised events
     * - {@link ScriptRaisedDestroyEvent script_raised_destroy} _instantly_ Raised with the provided arguments.
     */
    raise_script_destroy(params: {
      /**
       * The entity that was destroyed.
       */
      readonly entity: LuaEntity
    }): void
    /**
     * ## Raised events
     * - {@link ScriptRaisedReviveEvent script_raised_revive} _instantly_ Raised with the provided arguments.
     */
    raise_script_revive(params: {
      /**
       * The entity that was revived.
       */
      readonly entity: LuaEntity
      /**
       * The tags associated with this entity, if any.
       */
      readonly tags?: Tags
    }): void
    /**
     * ## Raised events
     * - {@link ScriptRaisedTeleportedEvent script_raised_teleported} _instantly_ Raised with the provided arguments.
     */
    raise_script_teleported(params: {
      /**
       * The entity that was teleported.
       */
      readonly entity: LuaEntity
      /**
       * The entity's surface before the teleportation.
       */
      readonly old_surface_index: uint8
      /**
       * The entity's position before the teleportation.
       */
      readonly old_position: MapPosition | MapPositionArray
    }): void
    /**
     * ## Raised events
     * - {@link ScriptRaisedSetTilesEvent script_raised_set_tiles} _instantly_ Raised with the provided arguments.
     */
    raise_script_set_tiles(params: {
      /**
       * The surface whose tiles have been changed.
       */
      readonly surface_index: SurfaceIndex
      /**
       * The tiles that have been changed.
       */
      readonly tiles: readonly TileWrite[]
    }): void
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * The name of the mod from the environment this is used in.
     */
    readonly mod_name: string
    /**
     * Information about the currently running scenario/campaign/tutorial.
     */
    readonly level: {
      /**
       * Is this level a simulation? (The main menu and 'Tips and tricks' use simulations)
       */
      readonly is_simulation?: boolean
      /**
       * Is this level a tutorial?
       */
      readonly is_tutorial?: boolean
      /**
       * The campaign name if any.
       */
      readonly campaign_name?: string
      /**
       * The level name.
       */
      readonly level_name: string
      /**
       * The mod name if any.
       */
      readonly mod_name?: string
    }
    /**
     * A dictionary listing the names of all currently active mods and mapping them to their version.
     * @example
     * -- This will print the names and versions of all active mods to the console.
     * for name, version in pairs(script.active_mods) do
     *   game.print(name .. " version " .. version)
     * end
     */
    readonly active_mods: ActiveMods
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaBootstrap"
  }
  /**
   * A reference to the burner energy source owned by a specific {@link LuaEntity} or {@link LuaEquipment}.
   * @noSelf
   */
  export interface LuaBurner {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * The owner of this burner energy source
     */
    readonly owner: LuaEntity | LuaEquipment
    /**
     * The fuel inventory.
     */
    readonly inventory: LuaInventory
    /**
     * The burnt result inventory.
     */
    readonly burnt_result_inventory: LuaInventory
    /**
     * The current heat (energy) stored in this burner.
     */
    heat: double
    /**
     * The maximum heat (maximum energy) that this burner can store.
     */
    readonly heat_capacity: double
    /**
     * The amount of energy left in the currently-burning fuel item.
     *
     * Writing to this will silently do nothing if there's no {@link LuaBurner#currently_burning LuaBurner::currently_burning} set.
     */
    remaining_burning_fuel: double
    /**
     * The currently burning item. Writing `nil` will void the currently burning item without producing a {@link LuaBurner#burnt_result LuaBurner::burnt_result}.
     *
     * Writing to this automatically handles correcting {@link LuaBurner#remaining_burning_fuel LuaBurner::remaining_burning_fuel}.
     */
    currently_burning?: LuaItemPrototype
    /**
     * The fuel categories this burner uses.
     *
     * The value in the dictionary is meaningless and exists just to allow for easy lookup.
     */
    readonly fuel_categories: Record<string, true>
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaBurner"
  }
  /**
   * Prototype of a burner energy source.
   * @noSelf
   */
  export interface LuaBurnerPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * The emissions of this energy source in `pollution/Joule`. Multiplying it by energy consumption in `Watt` gives `pollution/second`.
     */
    readonly emissions: double
    readonly render_no_network_icon: boolean
    readonly render_no_power_icon: boolean
    readonly effectivity: double
    readonly fuel_inventory_size: uint
    readonly burnt_inventory_size: uint
    /**
     * The smoke sources for this burner prototype.
     */
    readonly smoke?: SmokeSource[]
    /**
     * The light flicker definition for this burner prototype.
     */
    readonly light_flicker?: {
      readonly minimum_intensity: float
      readonly maximum_intensity: float
      readonly derivation_change_frequency: float
      readonly derivation_change_deviation: float
      readonly border_fix_speed: float
      readonly minimum_light_size: float
      readonly light_intensity_to_size_coefficient: float
      readonly color: Color
    }
    /**
     * The value in the dictionary is meaningless and exists just to allow for easy lookup.
     */
    readonly fuel_categories: Record<string, true>
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaBurnerPrototype"
  }
  /**
   * A chunk iterator can be used for iterating chunks coordinates of a surface.
   *
   * The returned type is a {@link ChunkPositionAndArea} containing the chunk coordinates and its area.
   * @example
   * for chunk in some_surface.get_chunks() do
   *   game.player.print("x: " .. chunk.x .. ", y: " .. chunk.y)
   *   game.player.print("area: " .. serpent.line(chunk.area))
   * end
   * @noSelf
   */
  export interface LuaChunkIterator extends LuaIterable<ChunkPositionAndArea> {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Gets the next chunk position if the iterator is not yet done and increments the iterator.
     */
    (): ChunkPositionAndArea | nil
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaChunkIterator"
  }
  /**
   * A circuit network associated with a given entity, connector, and wire type.
   * @noSelf
   */
  export interface LuaCircuitNetwork {
    /**
     * @param signal The signal to read.
     * @returns The current value of the signal.
     */
    get_signal(signal: SignalID): int
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * The entity this circuit network reference is associated with.
     */
    readonly entity: LuaEntity
    /**
     * The wire type this network is associated with.
     */
    readonly wire_type: defines.wire_type
    /**
     * The circuit connector ID on the associated entity this network was gotten from.
     */
    readonly circuit_connector_id: defines.circuit_connector_id
    /**
     * The circuit network signals last tick. `nil` if there were no signals last tick.
     */
    readonly signals?: Signal[]
    /**
     * The circuit networks ID.
     */
    readonly network_id: uint
    /**
     * The number of circuits connected to this network.
     */
    readonly connected_circuit_count: uint
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaCircuitNetwork"
  }
  /**
   * @noSelf
   */
  export interface LuaCombinatorControlBehavior extends LuaControlBehavior {
    /**
     * Gets the value of a specific signal sent by this combinator behavior last tick or `nil` if the signal didn't exist.
     * @param signal The signal to get
     */
    get_signal_last_tick(signal: SignalID): int | nil
    /**
     * The circuit network signals sent by this combinator last tick.
     */
    readonly signals_last_tick: Signal[]
  }
  /**
   * Allows for the registration of custom console commands through the global object named `commands`. Similarly to {@link LuaBootstrap#on_event event subscriptions}, these don't persist through a save-and-load cycle.
   * @noSelf
   */
  export interface LuaCommandProcessor {
    /**
     * Add a custom console command.
     *
     * Trying to add a command with the `name` of a game command or the name of a custom command that is already in use will result in an error.
     *
     * This example command will register a custom event called `print_tick` that prints the current tick to either the player issuing the command or to everyone on the server, depending on the command parameter:
     *
     * ```
     * commands.add_command("print_tick", nil, function(command)
     *   if command.player_index ~= nil and command.parameter == "me" then
     *     game.get_player(command.player_index).print(command.tick)
     *   else
     *     game.print(command.tick)
     *   end
     * end)
     * ```
     *
     * This shows the usage of the table that gets passed to any function handling a custom command. This specific example makes use of the `tick` and the optional `player_index` and `parameter` fields. The user is supposed to either call it without any parameter (`"/print_tick"`) or with the `"me"` parameter (`"/print_tick me"`).
     * @param name The desired name of the command (case sensitive).
     * @param help The localised help message. It will be shown to players using the `/help` command.
     * @param _function The function that will be called when this command is invoked.
     */
    add_command(name: string, help: LocalisedString, _function: (arg1: CustomCommandData) => void): void
    /**
     * Remove a custom console command.
     * @param name The name of the command to remove (case sensitive).
     * @returns Whether the command was successfully removed. Returns `false` if the command didn't exist.
     */
    remove_command(name: string): boolean
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Lists the custom commands registered by scripts through `LuaCommandProcessor`.
     */
    readonly commands: Record<string, LocalisedString>
    /**
     * Lists the built-in commands of the core game. The {@linkplain https://wiki.factorio.com/Console wiki} has an overview of these.
     */
    readonly game_commands: Record<string, LocalisedString>
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaCommandProcessor"
  }
  /**
   * Control behavior for constant combinators.
   * @noSelf
   */
  export interface LuaConstantCombinatorControlBehavior extends LuaControlBehavior {
    /**
     * Sets the signal at the given index.
     * @param signal Passing `nil` clears the signal.
     */
    set_signal(index: uint, signal?: Signal): void
    /**
     * Gets the signal at the given index. Returned {@link Signal} will not contain signal if none is set for the index.
     */
    get_signal(index: uint): Signal
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * This constant combinator's parameters. `nil` if the {@link LuaEntityPrototype#item_slot_count item_slot_count} of the combinator's prototype is `0`.
     *
     * Writing `nil` clears the combinator's parameters.
     */
    parameters?: ConstantCombinatorParameters[]
    /**
     * Turns this constant combinator on and off.
     */
    enabled: boolean
    /**
     * The number of signals this constant combinator supports.
     */
    readonly signals_count: uint
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaConstantCombinatorControlBehavior"
  }
  /**
   * Control behavior for container entities.
   * @noSelf
   */
  export interface LuaContainerControlBehavior extends LuaControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaContainerControlBehavior"
  }
  export interface BaseControlSetGuiArrow {
    /**
     * Where to point to. This field determines what other fields are mandatory.
     */
    readonly type: GuiArrowType
  }
  /**
   * `"entity"` variant of {@link ControlSetGuiArrow}.
   */
  export interface EntityControlSetGuiArrow extends BaseControlSetGuiArrow {
    readonly type: "entity"
    readonly entity: LuaEntity
  }
  /**
   * `"position"` variant of {@link ControlSetGuiArrow}.
   */
  export interface PositionControlSetGuiArrow extends BaseControlSetGuiArrow {
    readonly type: "position"
    readonly position: MapPosition | MapPositionArray
  }
  /**
   * `"crafting_queue"` variant of {@link ControlSetGuiArrow}.
   */
  export interface CraftingQueueControlSetGuiArrow extends BaseControlSetGuiArrow {
    readonly type: "crafting_queue"
    /**
     * Index in the crafting queue to point to.
     */
    readonly crafting_queueindex: uint
  }
  /**
   * `"item_stack"` variant of {@link ControlSetGuiArrow}.
   */
  export interface ItemStackControlSetGuiArrow extends BaseControlSetGuiArrow {
    readonly type: "item_stack"
    /**
     * Which inventory the stack is in.
     */
    readonly inventory_index: defines.inventory
    /**
     * Which stack to point to.
     */
    readonly item_stack_index: uint
    readonly source: "player" | "target" | "player-quickbar" | "player-equipment-bar"
  }
  /**
   * Variants of {@link ControlSetGuiArrow} with no additional attributes.
   */
  export interface OtherControlSetGuiArrow extends BaseControlSetGuiArrow {
    readonly type: "nowhere" | "goal" | "entity_info" | "active_window"
  }
  export type ControlSetGuiArrow =
    | EntityControlSetGuiArrow
    | PositionControlSetGuiArrow
    | CraftingQueueControlSetGuiArrow
    | ItemStackControlSetGuiArrow
    | OtherControlSetGuiArrow
  /**
   * This is an abstract base class containing the common functionality between {@link LuaPlayer} and entities (see {@link LuaEntity}). When accessing player-related functions through a {@link LuaEntity}, it must refer to a character entity.
   * @noSelf
   */
  export interface LuaControl {
    /**
     * Get an inventory belonging to this entity. This can be either the "main" inventory or some auxiliary one, like the module slots or logistic trash slots.
     *
     * A given {@link defines.inventory} is only meaningful for the corresponding LuaObject type. EG: get_inventory(defines.inventory.character_main) is only meaningful if 'this' is a player character. You may get a value back but if the type of 'this' isn't the type referred to by the {@link defines.inventory} it's almost guaranteed to not be the inventory asked for.
     * @returns The inventory or `nil` if none with the given index was found.
     */
    get_inventory(inventory: defines.inventory): LuaInventory | nil
    /**
     * The highest index of all inventories this entity can use. Allows iteration over all of them if desired.
     * @example
     * for k = 1, entity.get_max_inventory_index() do [...] end
     */
    get_max_inventory_index(): defines.inventory
    /**
     * Gets the main inventory for this character or player if this is a character or player.
     * @returns The inventory or `nil` if this entity is not a character or player.
     */
    get_main_inventory(): LuaInventory | nil
    /**
     * Can at least some items be inserted?
     * @param items Items that would be inserted.
     * @returns `true` if at least a part of the given items could be inserted into this inventory.
     */
    can_insert(items: ItemStackIdentification): boolean
    /**
     * Insert items into this entity. This works the same way as inserters or shift-clicking: the "best" inventory is chosen automatically.
     * @param items The items to insert.
     * @returns The number of items that were actually inserted.
     */
    insert(items: ItemStackIdentification): uint
    /**
     * Create an arrow which points at this entity. This is used in the tutorial. For examples, see `control.lua` in the campaign missions.
     *
     * Other attributes may be specified depending on `type`:
     * - `"entity"`: {@link EntityControlSetGuiArrow}
     * - `"position"`: {@link PositionControlSetGuiArrow}
     * - `"crafting_queue"`: {@link CraftingQueueControlSetGuiArrow}
     * - `"item_stack"`: {@link ItemStackControlSetGuiArrow}
     */
    set_gui_arrow(params: ControlSetGuiArrow): void
    /**
     * Removes the arrow created by `set_gui_arrow`.
     */
    clear_gui_arrow(): void
    /**
     * Get the number of all or some items in this entity.
     * @param item Prototype name of the item to count. If not specified, count all items.
     */
    get_item_count(item?: string): uint
    /**
     * Does this entity have any item inside it?
     */
    has_items_inside(): boolean
    /**
     * Can a given entity be opened or accessed?
     */
    can_reach_entity(entity: LuaEntity): boolean
    /**
     * Remove all items from this entity.
     */
    clear_items_inside(): void
    /**
     * Remove items from this entity.
     * @param items The items to remove.
     * @returns The number of items that were actually removed.
     */
    remove_item(items: ItemStackIdentification): uint
    /**
     * Teleport the entity to a given position, possibly on another surface.
     *
     * Some entities may not be teleported. For instance, transport belts won't allow teleportation and this method will always return `false` when used on any such entity.
     *
     * You can also pass 1 or 2 numbers as the parameters and they will be used as relative teleport coordinates `'teleport(0, 1)'` to move the entity 1 tile positive y. `'teleport(4)'` to move the entity 4 tiles to the positive x.
     *
     * ## Raised events
     * - {@link OnPlayerChangedPositionEvent on_player_changed_position}? _instantly_ Raised if the teleported entity is a player character.
     * - {@link ScriptRaisedTeleportedEvent script_raised_teleported}? _instantly_ Raised if the `raise_teleported` flag was set and the entity was successfully teleported.
     * @param position Where to teleport to.
     * @param surface Surface to teleport to. If not given, will teleport to the entity's current surface. Only players, cars, and spidertrons can be teleported cross-surface.
     * @param raise_teleported If true, {@link defines.events.script_raised_teleported} will be fired on successful entity teleportation.
     * @returns `true` if the entity was successfully teleported.
     */
    teleport(
      position: MapPosition | MapPositionArray,
      surface?: SurfaceIdentification,
      raise_teleported?: boolean,
    ): boolean
    teleport(x: number, y?: number): boolean
    /**
     * Select an entity, as if by hovering the mouse above it.
     *
     * ## Raised events
     * - {@link OnSelectedEntityChangedEvent on_selected_entity_changed}? _instantly_ Raised if there is an entity at the given position to select.
     * @param position Position of the entity to select.
     */
    update_selected_entity(position: MapPosition | MapPositionArray): void
    /**
     * Unselect any selected entity.
     *
     * ## Raised events
     * - {@link OnSelectedEntityChangedEvent on_selected_entity_changed}? _instantly_ Raised if there is a currently selected entity.
     */
    clear_selected_entity(): void
    /**
     * Disable the flashlight.
     */
    disable_flashlight(): void
    /**
     * Enable the flashlight.
     */
    enable_flashlight(): void
    /**
     * Is the flashlight enabled.
     */
    is_flashlight_enabled(): boolean
    /**
     * Gets the count of the given recipe that can be crafted.
     * @param recipe The recipe.
     * @returns The count that can be crafted.
     */
    get_craftable_count(recipe: string | LuaRecipe): uint
    /**
     * Begins crafting the given count of the given recipe.
     *
     * ## Raised events
     * - {@link OnPrePlayerCraftedItemEvent on_pre_player_crafted_item}? _instantly_ Raised if crafting was able to be started.
     * - {@link OnPlayerMainInventoryChangedEvent on_player_main_inventory_changed}? _current_tick_ Raised if crafting was able to be started.
     * @returns The count that was actually started crafting.
     */
    begin_crafting(params: {
      /**
       * The count to craft.
       */
      readonly count: uint
      /**
       * The recipe to craft.
       */
      readonly recipe: string | LuaRecipe
      /**
       * If false and the recipe can't be crafted the requested number of times printing the failure is skipped.
       */
      readonly silent?: boolean
    }): uint
    /**
     * Cancels crafting the given count of the given crafting queue index.
     *
     * ## Raised events
     * - {@link OnPlayerCancelledCraftingEvent on_player_cancelled_crafting}? _instantly_ Raised if crafting was able to be cancelled.
     * - {@link OnPlayerMainInventoryChangedEvent on_player_main_inventory_changed}? _current_tick_ Raised if crafting was able to be cancelled.
     */
    cancel_crafting(params: {
      /**
       * The crafting queue index.
       */
      readonly index: uint
      /**
       * The count to cancel crafting.
       */
      readonly count: uint
    }): void
    /**
     * Mines the given entity as if this player (or character) mined it.
     *
     * ## Raised events
     * - {@link OnPrePlayerMinedItemEvent on_pre_player_mined_item}? _instantly_ Raised if mining is possible.
     * - {@link OnPlayerMinedEntityEvent on_player_mined_entity}? _instantly_ Raised if mining is successful.
     * - {@link OnPlayerMinedItemEvent on_player_mined_item}? _instantly_ Raised if mining is successful.
     * @param entity The entity to mine
     * @param force Forces mining the entity even if the items can't fit in the player.
     * @returns Whether the mining succeeded.
     */
    mine_entity(entity: LuaEntity, force?: boolean): boolean
    /**
     * Mines the given tile as if this player (or character) mined it.
     *
     * ## Raised events
     * - {@link OnPlayerMinedItemEvent on_player_mined_item}? _instantly_ Raised if mining is successful.
     * - {@link OnPlayerMinedTileEvent on_player_mined_tile}? _instantly_ Raised if mining is successful.
     * @param tile The tile to mine.
     * @returns Whether the mining succeeded.
     */
    mine_tile(tile: LuaTile): boolean
    /**
     * When `true` control adapter is a LuaPlayer object, `false` for entities including characters with players.
     */
    is_player(): boolean
    /**
     * Open the technology GUI and select a given technology.
     * @param technology The technology to select after opening the GUI.
     */
    open_technology_gui(technology?: TechnologyIdentification): void
    /**
     * Sets a personal logistic request and auto-trash slot to the given value.
     *
     * This will silently fail if personal logistics are not researched yet.
     *
     * ## Raised events
     * - {@link OnEntityLogisticSlotChangedEvent on_entity_logistic_slot_changed}? _instantly_ Raised if setting of logistic slot was successful.
     * @param slot_index The slot to set.
     * @param value The logistic request parameters.
     * @returns Whether the slot was set successfully. `false` if personal logistics are not researched yet.
     */
    set_personal_logistic_slot(slot_index: uint, value: LogisticParameters): boolean
    /**
     * Sets a vehicle logistic request and auto-trash slot to the given value. Only used on `spider-vehicle`.
     *
     * ## Raised events
     * - {@link OnEntityLogisticSlotChangedEvent on_entity_logistic_slot_changed}? _instantly_ Raised if setting of logistic slot was successful.
     * @param slot_index The slot to set.
     * @param value The logistic request parameters.
     * @returns Whether the slot was set successfully. `false` if the vehicle does not use logistics.
     */
    set_vehicle_logistic_slot(slot_index: uint, value: LogisticParameters): boolean
    /**
     * Gets the parameters of a personal logistic request and auto-trash slot.
     * @param slot_index The slot to get.
     * @returns The logistic parameters. If personal logistics are not researched yet, their `name` will be `nil`.
     */
    get_personal_logistic_slot(slot_index: uint): LogisticParameters
    /**
     * Gets the parameters of a vehicle logistic request and auto-trash slot. Only used on `spider-vehicle`.
     * @param slot_index The slot to get.
     * @returns The logistic parameters. If the vehicle does not use logistics, their `name` will be `nil`.
     */
    get_vehicle_logistic_slot(slot_index: uint): LogisticParameters
    /**
     * This will silently fail if personal logistics are not researched yet.
     *
     * ## Raised events
     * - {@link OnEntityLogisticSlotChangedEvent on_entity_logistic_slot_changed}? _instantly_ Raised if clearing of logistic slot was successful.
     * @param slot_index The slot to clear.
     */
    clear_personal_logistic_slot(slot_index: uint): void
    /**
     * This will silently fail if the vehicle does not use logistics.
     *
     * ## Raised events
     * - {@link OnEntityLogisticSlotChangedEvent on_entity_logistic_slot_changed}? _instantly_ Raised if clearing of logistic slot was successful.
     * @param slot_index The slot to clear.
     */
    clear_vehicle_logistic_slot(slot_index: uint): void
    /**
     * Returns whether the player is holding a blueprint. This takes both blueprint items as well as blueprint records from the blueprint library into account.
     *
     * Note that both this method and {@link LuaControl#get_blueprint_entities LuaControl::get_blueprint_entities} refer to the currently selected blueprint, meaning a blueprint book with a selected blueprint will return the information as well.
     */
    is_cursor_blueprint(): boolean
    /**
     * Gets the entities that are part of the currently selected blueprint, regardless of it being in a blueprint book or picked from the blueprint library.
     * @returns Returns `nil` if there is no currently selected blueprint.
     */
    get_blueprint_entities(): BlueprintEntity[] | nil
    /**
     * Returns whether the player is holding something in the cursor. Takes into account items from the blueprint library, as well as items and ghost cursor.
     */
    is_cursor_empty(): boolean
    /**
     * The surface this entity is currently on.
     */
    readonly surface: LuaSurface
    /**
     * Unique {@link LuaSurface#index index} (ID) associated with the surface this entity is currently on.
     */
    readonly surface_index: SurfaceIndex
    /**
     * The current position of the entity.
     */
    readonly position: MapPosition
    /**
     * The vehicle the player is currently sitting in.
     */
    readonly vehicle?: LuaEntity
    /**
     * The force of this entity. Reading will always give a {@link LuaForce}, but it is possible to assign either `string` or {@link LuaForce} to this attribute to change the force.
     */
    get force(): LuaForce
    set force(value: ForceIdentification)
    /**
     * Unique {@link LuaForce#index index} (ID) associated with the force of this entity.
     */
    readonly force_index: ForceIndex
    /**
     * The currently selected entity. Assigning an entity will select it if is selectable, otherwise the selection is cleared.
     *
     * ## Raised events
     * - {@link OnSelectedEntityChangedEvent on_selected_entity_changed}? _instantly_ Raised when a selectable entity is written to this attribute.
     */
    selected?: LuaEntity
    /**
     * The GUI the player currently has open.
     *
     * This is the GUI that will asked to close (by firing the {@link OnGuiClosedEvent on_gui_closed} event) when the `Esc` or `E` keys are pressed. If this attribute is non-nil, then writing `nil` or a new GUI to it will ask the existing GUI to close.
     *
     * Write supports any of the types. Read will return the `entity`, `equipment`, `equipment-grid`, `player`, `element`, `inventory`, `technology`, or `nil`.
     *
     * ## Raised events
     * - {@link OnGuiOpenedEvent on_gui_opened}? _instantly_ Raised when writing a valid GUI target to this attribute.
     */
    set opened(
      value:
        | LuaEntity
        | LuaItemStack
        | LuaEquipment
        | LuaEquipmentGrid
        | LuaPlayer
        | LuaGuiElement
        | LuaInventory
        | LuaTechnology
        | defines.gui_type
        | nil,
    )
    get opened():
      | LuaEntity
      | LuaEquipment
      | LuaEquipmentGrid
      | LuaPlayer
      | LuaGuiElement
      | LuaInventory
      | LuaTechnology
      | nil
    /**
     * Size of the crafting queue.
     */
    readonly crafting_queue_size: uint
    /**
     * The crafting queue progress in the range `[0-1]`. `0` when no recipe is being crafted.
     */
    crafting_queue_progress: double
    /**
     * Current walking state.
     * @example
     * -- Make the player go north. Note that a one-shot action like this will only make the player walk for one tick.
     * game.player.walking_state = {walking = true, direction = defines.direction.north}
     */
    walking_state: {
      /**
       * If `false`, the player is currently not walking; otherwise it's going somewhere
       */
      readonly walking: boolean
      /**
       * Direction where the player is walking
       */
      readonly direction: defines.direction
    }
    /**
     * Current riding state of this car, or of the car this player is riding in.
     */
    riding_state: RidingState
    /**
     * Current mining state.
     *
     * When the player isn't mining tiles the player will mine whatever entity is currently selected. See {@link LuaControl#selected LuaControl::selected} and {@link LuaControl#update_selected_entity LuaControl::update_selected_entity}.
     */
    get mining_state(): {
      /**
       * Whether the player is mining at all.
       */
      readonly mining: boolean
      /**
       * What location the player is mining. Only relevant if `mining` is `true`.
       */
      readonly position?: MapPosition
    }
    set mining_state(value: {
      /**
       * Whether the player is mining at all.
       */
      readonly mining: boolean
      /**
       * What location the player is mining. Only relevant if `mining` is `true`.
       */
      readonly position?: MapPosition | MapPositionArray
    })
    /**
     * Current shooting state.
     */
    get shooting_state(): {
      /**
       * The current state
       */
      readonly state: defines.shooting
      /**
       * The position being shot at
       */
      readonly position: MapPosition
    }
    set shooting_state(value: {
      /**
       * The current state
       */
      readonly state: defines.shooting
      /**
       * The position being shot at
       */
      readonly position: MapPosition | MapPositionArray
    })
    /**
     * Current item-picking state.
     */
    picking_state: boolean
    /**
     * Current repair state.
     */
    get repair_state(): {
      /**
       * The current state
       */
      readonly repairing: boolean
      /**
       * The position being repaired
       */
      readonly position: MapPosition
    }
    set repair_state(value: {
      /**
       * The current state
       */
      readonly repairing: boolean
      /**
       * The position being repaired
       */
      readonly position: MapPosition | MapPositionArray
    })
    /**
     * The player's cursor stack. `nil` if the player controller is a spectator.
     * @example
     * -- Even though this property is marked as read-only, it returns a LuaItemStack,
     * -- meaning it can be manipulated like so:
     * player.cursor_stack.clear()
     */
    readonly cursor_stack?: LuaItemStack
    /**
     * The ghost prototype in the player's cursor. When read, it will be a {@link LuaItemPrototype}.
     *
     * Items in the cursor stack will take priority over the cursor ghost.
     */
    get cursor_ghost(): LuaItemPrototype | nil
    set cursor_ghost(value: ItemPrototypeIdentification | nil)
    /**
     * `true` if the player is in a vehicle. Writing to this attribute puts the player in or out of a vehicle.
     *
     * ## Raised events
     * - {@link OnPlayerDrivingChangedStateEvent on_player_driving_changed_state}? _instantly_ Raised if the driving state successfully changed.
     */
    driving: boolean
    /**
     * The current crafting queue items.
     */
    readonly crafting_queue: CraftingQueueItem[]
    /**
     * The current combat robots following the character.
     *
     * When called on a {@link LuaPlayer}, it must be associated with a character (see {@link LuaPlayer#character LuaPlayer::character}).
     */
    readonly following_robots: LuaEntity[]
    /**
     * When `true` hand crafting is free and instant.
     */
    cheat_mode: boolean
    /**
     * When called on a {@link LuaPlayer}, it must be associated with a character (see {@link LuaPlayer#character LuaPlayer::character}).
     */
    character_crafting_speed_modifier: double
    /**
     * When called on a {@link LuaPlayer}, it must be associated with a character (see {@link LuaPlayer#character LuaPlayer::character}).
     */
    character_mining_speed_modifier: double
    /**
     * When called on a {@link LuaPlayer}, it must be associated with a character (see {@link LuaPlayer#character LuaPlayer::character}).
     */
    character_additional_mining_categories: string[]
    /**
     * Modifies the running speed of this character by the given value as a percentage. Setting the running modifier to `0.5` makes the character run 50% faster. The minimum value of `-1` reduces the movement speed by 100%, resulting in a speed of `0`.
     *
     * When called on a {@link LuaPlayer}, it must be associated with a character (see {@link LuaPlayer#character LuaPlayer::character}).
     */
    character_running_speed_modifier: double
    /**
     * When called on a {@link LuaPlayer}, it must be associated with a character (see {@link LuaPlayer#character LuaPlayer::character}).
     */
    character_build_distance_bonus: uint
    /**
     * When called on a {@link LuaPlayer}, it must be associated with a character (see {@link LuaPlayer#character LuaPlayer::character}).
     */
    character_item_drop_distance_bonus: uint
    /**
     * When called on a {@link LuaPlayer}, it must be associated with a character (see {@link LuaPlayer#character LuaPlayer::character}).
     */
    character_reach_distance_bonus: uint
    /**
     * When called on a {@link LuaPlayer}, it must be associated with a character (see {@link LuaPlayer#character LuaPlayer::character}).
     */
    character_resource_reach_distance_bonus: uint
    /**
     * When called on a {@link LuaPlayer}, it must be associated with a character (see {@link LuaPlayer#character LuaPlayer::character}).
     */
    character_item_pickup_distance_bonus: uint
    /**
     * When called on a {@link LuaPlayer}, it must be associated with a character (see {@link LuaPlayer#character LuaPlayer::character}).
     */
    character_loot_pickup_distance_bonus: uint
    /**
     * When called on a {@link LuaPlayer}, it must be associated with a character (see {@link LuaPlayer#character LuaPlayer::character}).
     */
    character_inventory_slots_bonus: uint
    /**
     * When called on a {@link LuaPlayer}, it must be associated with a character (see {@link LuaPlayer#character LuaPlayer::character}).
     */
    character_trash_slot_count_bonus: uint
    /**
     * When called on a {@link LuaPlayer}, it must be associated with a character (see {@link LuaPlayer#character LuaPlayer::character}).
     */
    character_maximum_following_robot_count_bonus: uint
    /**
     * When called on a {@link LuaPlayer}, it must be associated with a character (see {@link LuaPlayer#character LuaPlayer::character}).
     */
    character_health_bonus: float
    /**
     * If personal logistic requests are enabled for this character or players character.
     */
    character_personal_logistic_requests_enabled: boolean
    /**
     * If personal logistic requests are enabled for this vehicle (spidertron).
     */
    vehicle_logistic_requests_enabled: boolean
    readonly opened_gui_type?: defines.gui_type
    /**
     * The build distance of this character or max uint when not a character or player connected to a character.
     */
    readonly build_distance: uint
    /**
     * The item drop distance of this character or max uint when not a character or player connected to a character.
     */
    readonly drop_item_distance: uint
    /**
     * The reach distance of this character or max uint when not a character or player connected to a character.
     */
    readonly reach_distance: uint
    /**
     * The item pickup distance of this character or max double when not a character or player connected to a character.
     */
    readonly item_pickup_distance: double
    /**
     * The loot pickup distance of this character or max double when not a character or player connected to a character.
     */
    readonly loot_pickup_distance: double
    /**
     * The resource reach distance of this character or max double when not a character or player connected to a character.
     */
    readonly resource_reach_distance: double
    /**
     * Whether this character entity is in combat.
     */
    readonly in_combat: boolean
    /**
     * The current movement speed of this character, including effects from exoskeletons, tiles, stickers and shooting.
     */
    readonly character_running_speed: double
    /**
     * The current mining progress between 0 and 1 of this character, or 0 if they aren't mining.
     */
    readonly character_mining_progress: double
  }
  /**
   * The control behavior for an entity. Inserters have logistic network and circuit network behavior logic, lamps have circuit logic and so on. This is an abstract base class that concrete control behaviors inherit.
   *
   * A control reference becomes invalid once the control behavior is removed or the entity (see {@link LuaEntity}) it resides in is destroyed.
   * @noSelf
   */
  export interface LuaControlBehavior {
    /**
     * @param wire Wire color of the network connected to this entity.
     * @param circuit_connector The connector to get circuit network for. Must be specified for entities with more than one circuit network connector.
     * @returns The circuit network or nil.
     */
    get_circuit_network(
      wire: defines.wire_type,
      circuit_connector?: defines.circuit_connector_id,
    ): LuaCircuitNetwork | nil
    /**
     * The concrete type of this control behavior.
     */
    readonly type: defines.control_behavior.type
    /**
     * The entity this control behavior belongs to.
     */
    readonly entity: LuaEntity
  }
  /**
   * A custom tag that shows on the map view.
   * @noSelf
   */
  export interface LuaCustomChartTag {
    /**
     * Destroys this tag.
     */
    destroy(): void
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * This tag's icon, if it has one. Writing `nil` removes it.
     */
    icon: SignalID | nil
    /**
     * The player who last edited this tag.
     */
    last_user?: LuaPlayer
    /**
     * The position of this tag.
     */
    readonly position: MapPosition
    text: string
    /**
     * The unique ID for this tag on this force.
     */
    readonly tag_number: uint
    /**
     * The force this tag belongs to.
     */
    readonly force: LuaForce
    /**
     * The surface this tag belongs to.
     */
    readonly surface: LuaSurface
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaCustomChartTag"
  }
  /**
   * Prototype of a custom input.
   * @noSelf
   */
  export interface LuaCustomInputPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Name of this prototype.
     */
    readonly name: string
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    /**
     * The default key sequence for this custom input.
     */
    readonly key_sequence: string
    /**
     * The default alternative key sequence for this custom input, if any
     */
    readonly alternative_key_sequence?: string
    /**
     * The default controller key sequence for this custom input, if any
     */
    readonly controller_key_sequence?: string
    /**
     * The default controller alternative key sequence for this custom input, if any
     */
    readonly controller_alternative_key_sequence?: string
    /**
     * The linked game control name, if any.
     */
    readonly linked_game_control?: string
    /**
     * The consuming type.
     */
    readonly consuming: "none" | "game-only"
    /**
     * The action that happens when this custom input is triggered.
     */
    readonly action: string
    /**
     * Whether this custom input is enabled. Disabled custom inputs exist but are not used by the game.
     */
    readonly enabled: boolean
    /**
     * Whether this custom input is enabled while using the spectator controller.
     */
    readonly enabled_while_spectating: boolean
    /**
     * Whether this custom input is enabled while using the cutscene controller.
     */
    readonly enabled_while_in_cutscene: boolean
    /**
     * Whether this custom input will include the selected prototype (if any) when triggered.
     */
    readonly include_selected_prototype: boolean
    /**
     * The item that gets spawned when this custom input is fired, if any.
     */
    readonly item_to_spawn?: LuaItemPrototype
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaCustomInputPrototype"
  }
  export type CustomTableIndexer<K extends string | number, V> =
    /**
     * Access an element of this custom table.
     */
    {
      [P in K]: V
    }
  /**
   * @noSelf
   */
  export interface LuaCustomTableMembers {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Number of elements in this table.
     */
    readonly length: LuaLengthMethod<uint>
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaCustomTable"
  }
  /**
   * This type gives:
   * - a number type, if K includes a number in its union
   * - K otherwise
   *
   * It also preserves number branding.
   */
  export type LuaCustomTableIterKey<K> = [number] extends [K extends number ? number : K]
    ? K extends string
      ? never
      : K
    : K
  /**
   * Lazily evaluated table. For performance reasons, we sometimes return a custom table-like type instead of a native Lua table. This custom type lazily constructs the necessary Lua wrappers of the corresponding C++ objects, therefore preventing their unnecessary construction in some cases.
   *
   * There are some notable consequences to the usage of a custom table type rather than the native Lua table type: Iterating a custom table is only possible using the `pairs` Lua function; `ipairs` won't work. Another key difference is that custom tables cannot be serialised into a game save file -- if saving the game would require serialisation of a custom table, an error will be displayed and the game will not be saved.
   *
   * In previous versions of Factorio, this would create a {@link LuaPlayer} instance for every player in the game, even though only one such wrapper is needed. In the current version, accessing {@link LuaGameScript#players game.players} by itself does not create any {@link LuaPlayer} instances; they are created lazily when accessed. Therefore, this example only constructs one {@link LuaPlayer} instance, no matter how many elements there are in `game.players`.
   *
   * ```
   * game.players["Oxyd"].character.die()
   * ```
   *
   * This statement will execute successfully and `global.p` will be useable as one might expect. However, as soon as the user tries to save the game, a "LuaCustomTable cannot be serialized" error will be shown. The game will remain unsaveable so long as `global.p` refers to an instance of a custom table.
   *
   * ```
   * global.p = game.players  -- This has high potential to make the game unsaveable
   * ```
   *
   * The following will produce no output because `ipairs` is not supported with custom tables.
   *
   * ```
   * for _, p in ipairs(game.players) do game.player.print(p.name); end  -- incorrect; use pairs instead
   * ```
   * @example
   * -- Custom tables may be iterated using `pairs`.
   * for _, p in pairs(game.players) do game.player.print(p.name); end
   */
  export type LuaCustomTable<K extends string | number, V> = LuaCustomTableMembers &
    CustomTableIndexer<K, V> &
    LuaPairsIterable<LuaCustomTableIterKey<K>, V>
  /**
   * Prototype of a damage.
   * @noSelf
   */
  export interface LuaDamagePrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Name of this prototype.
     */
    readonly name: string
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    /**
     * Whether this damage type is hidden from entity tooltips.
     */
    readonly hidden: boolean
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaDamagePrototype"
  }
  /**
   * Control behavior for decider combinators.
   * @noSelf
   */
  export interface LuaDeciderCombinatorControlBehavior extends LuaCombinatorControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * This decider combinator's parameters.
     *
     * Writing `nil` clears the combinator's parameters.
     */
    get parameters(): DeciderCombinatorParameters | nil
    set parameters(value: DeciderCombinatorParametersWrite | nil)
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaDeciderCombinatorControlBehavior"
  }
  /**
   * Prototype of an optimized decorative.
   * @noSelf
   */
  export interface LuaDecorativePrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Name of this prototype.
     */
    readonly name: string
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    /**
     * The bounding box used for collision checking.
     */
    readonly collision_box: BoundingBox
    /**
     * The collision masks this decorative uses
     */
    readonly collision_mask: CollisionMask
    readonly collision_mask_with_flags: CollisionMaskWithFlags
    /**
     * Autoplace specification for this decorative prototype, if any.
     */
    readonly autoplace_specification?: AutoplaceSpecification
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaDecorativePrototype"
  }
  /**
   * Prototype of an electric energy source.
   * @noSelf
   */
  export interface LuaElectricEnergySourcePrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    readonly buffer_capacity: double
    readonly usage_priority: string
    readonly input_flow_limit: double
    readonly output_flow_limit: double
    readonly drain: double
    /**
     * The emissions of this energy source in `pollution/Joule`. Multiplying it by energy consumption in `Watt` gives `pollution/second`.
     */
    readonly emissions: double
    readonly render_no_network_icon: boolean
    readonly render_no_power_icon: boolean
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaElectricEnergySourcePrototype"
  }
  /**
   * The primary interface for interacting with entities through the Lua API. Entities are everything that exists on the map except for tiles (see {@link LuaTile}).
   *
   * Most functions on LuaEntity also work when the entity is contained in a ghost.
   * @noSelf
   */
  export interface LuaEntity extends LuaControl {
    /**
     * Gets the entity's output inventory if it has one.
     * @returns A reference to the entity's output inventory.
     */
    get_output_inventory(): LuaInventory | nil
    /**
     * Inventory for storing modules of this entity; `nil` if this entity has no module inventory.
     */
    get_module_inventory(): LuaInventory | nil
    /**
     * The fuel inventory for this entity or `nil` if this entity doesn't have a fuel inventory.
     */
    get_fuel_inventory(): LuaInventory | nil
    /**
     * The burnt result inventory for this entity or `nil` if this entity doesn't have a burnt result inventory.
     */
    get_burnt_result_inventory(): LuaInventory | nil
    /**
     * Damages the entity.
     *
     * ## Raised events
     * - {@link OnEntityDamagedEvent on_entity_damaged} _instantly_
     *
     * _Can only be used if this is EntityWithHealth_
     * @param damage The amount of damage to be done.
     * @param force The force that will be doing the damage.
     * @param type The type of damage to be done, defaults to `"impact"`. Can't be `nil`.
     * @param dealer The entity to consider as the damage dealer. Needs to be on the same surface as the entity being damaged.
     * @returns the total damage actually applied after resistances.
     */
    damage(damage: float, force: ForceIdentification, type?: string, dealer?: LuaEntity): float
    /**
     * Whether the entity can be destroyed
     */
    can_be_destroyed(): boolean
    /**
     * Destroys the entity.
     *
     * Not all entities can be destroyed - things such as rails under trains cannot be destroyed until the train is moved or destroyed.
     *
     * ## Raised events
     * - {@link ScriptRaisedDestroyEvent script_raised_destroy}? _instantly_ Raised if the `raise_destroy` flag was set and the entity was successfully destroyed.
     * @returns Returns `false` if the entity was valid and destruction failed, `true` in all other cases.
     */
    destroy(params?: {
      /**
       * Whether neighbouring cliffs should be corrected. Defaults to `false`.
       */
      readonly do_cliff_correction?: boolean
      /**
       * If `true`, {@link ScriptRaisedDestroyEvent script_raised_destroy} will be called. Defaults to `false`.
       */
      readonly raise_destroy?: boolean
    }): boolean
    /**
     * Give the entity a command.
     *
     * _Can only be used if this is Unit_
     */
    set_command(command: CommandWrite): void
    /**
     * Give the entity a distraction command.
     *
     * _Can only be used if this is Unit_
     */
    set_distraction_command(command: CommandWrite): void
    /**
     * Has this unit been assigned a command?
     *
     * _Can only be used if this is Unit_
     */
    has_command(): boolean
    /**
     * Immediately kills the entity. Does nothing if the entity doesn't have health.
     *
     * Unlike {@link LuaEntity#destroy LuaEntity::destroy}, `die` will trigger the {@link OnEntityDiedEvent on_entity_died} event and the entity will produce a corpse and drop loot if it has any.
     *
     * ## Raised events
     * - {@link OnEntityDiedEvent on_entity_died}? _instantly_ Raised if the entity was successfully killed. If `force` is not specified, the event will blame the `"neutral"` force.
     * - {@link OnPostEntityDiedEvent on_post_entity_died}? _instantly_ Raised if the entity was successfully killed.
     * @param force The force to attribute the kill to.
     * @param cause The cause to attribute the kill to.
     * @returns Whether the entity was successfully killed.
     * @example
     * -- This function can be called with only the `cause` argument and no `force`:
     * entity.die(nil, killer_entity)
     */
    die(force?: ForceIdentification, cause?: LuaEntity): boolean
    /**
     * Test whether this entity's prototype has a certain flag set.
     *
     * `entity.has_flag(f)` is a shortcut for `entity.prototype.has_flag(f)`.
     * @param flag The flag to test.
     * @returns `true` if this entity has the given flag set.
     */
    has_flag(flag: EntityPrototypeFlag): boolean
    /**
     * Same as {@link LuaEntity#has_flag LuaEntity::has_flag}, but targets the inner entity on a entity ghost.
     *
     * _Can only be used if this is EntityGhost_
     * @param flag The flag to test.
     * @returns `true` if the entity has the given flag set.
     */
    ghost_has_flag(flag: EntityPrototypeFlag): boolean
    /**
     * Offer a thing on the market.
     *
     * _Can only be used if this is Market_
     * @example
     * -- Adds market offer, 1 copper ore for 10 iron ore
     * market.add_market_item{price={{"iron-ore", 10}}, offer={type="give-item", item="copper-ore"}}
     * @example
     * -- Adds market offer, 1 copper ore for 5 iron ore and 5 stone ore
     * market.add_market_item{price={{"iron-ore", 5}, {"stone", 5}}, offer={type="give-item", item="copper-ore"}}
     */
    add_market_item(offer: Offer): void
    /**
     * Remove an offer from a market.
     *
     * The other offers are moved down to fill the gap created by removing the offer, which decrements the overall size of the offer array.
     *
     * _Can only be used if this is Market_
     * @param offer Index of offer to remove.
     * @returns `true` if the offer was successfully removed; `false` when the given index was not valid.
     */
    remove_market_item(offer: uint): boolean
    /**
     * Get all offers in a market as an array.
     *
     * _Can only be used if this is Market_
     */
    get_market_items(): Offer[]
    /**
     * Removes all offers from a market.
     *
     * _Can only be used if this is Market_
     */
    clear_market_items(): void
    /**
     * Connect two devices with a circuit wire or copper cable. Depending on which type of connection should be made, there are different procedures:
     *
     * To connect two electric poles, `target` must be a {@link LuaEntity} that specifies another electric pole. This will connect them with copper cable.
     *
     * To connect two devices with circuit wire, `target` must be a table of type {@link WireConnectionDefinition}.
     * @param target The target with which to establish a connection.
     * @returns Whether the connection was successfully formed.
     */
    connect_neighbour(target: LuaEntity | WireConnectionDefinition): boolean
    /**
     * Disconnect circuit wires or copper cables between devices. Depending on which type of connection should be cut, there are different procedures:
     *
     * {@link https://lua-api.factorio.com/latest/classes/LuaEntity.html#LuaEntity.disconnect_neighbour > Wires can be selectively removed in different ways:}
     * @param target The target with which to cut a connection.
     */
    disconnect_neighbour(target?: defines.wire_type | LuaEntity | WireConnectionDefinition): void
    /**
     * Sets the entity to be deconstructed by construction robots.
     *
     * ## Raised events
     * - {@link OnMarkedForDeconstructionEvent on_marked_for_deconstruction}? _instantly_ Raised if the entity was successfully marked for deconstruction.
     * @param force The force whose robots are supposed to do the deconstruction.
     * @param player The player to set the `last_user` to if any.
     * @returns if the entity was marked for deconstruction.
     */
    order_deconstruction(force: ForceIdentification, player?: PlayerIdentification): boolean
    /**
     * Cancels deconstruction if it is scheduled, does nothing otherwise.
     *
     * ## Raised events
     * - {@link OnCancelledDeconstructionEvent on_cancelled_deconstruction}? _instantly_ Raised if the entity's deconstruction was successfully cancelled.
     * @param force The force who did the deconstruction order.
     * @param player The player to set the `last_user` to if any.
     */
    cancel_deconstruction(force: ForceIdentification, player?: PlayerIdentification): void
    /**
     * Is this entity marked for deconstruction?
     */
    to_be_deconstructed(): boolean
    /**
     * Sets the entity to be upgraded by construction robots.
     *
     * ## Raised events
     * - {@link OnMarkedForUpgradeEvent on_marked_for_upgrade}? _instantly_ Raised if the entity was successfully marked for upgrade.
     * @returns Whether the entity was marked for upgrade.
     */
    order_upgrade(params: {
      /**
       * The force whose robots are supposed to do the upgrade.
       */
      readonly force: ForceIdentification
      /**
       * The prototype of the entity to upgrade to.
       */
      readonly target: EntityPrototypeIdentification
      readonly player?: PlayerIdentification
      /**
       * The new direction if any.
       */
      readonly direction?: defines.direction
    }): boolean
    /**
     * Cancels upgrade if it is scheduled, does nothing otherwise.
     *
     * ## Raised events
     * - {@link OnCancelledUpgradeEvent on_cancelled_upgrade}? _instantly_ Raised if the entity way previously marked for upgrade.
     * @param force The force who did the upgrade order.
     * @param player The player to set the last_user to if any.
     * @returns Whether the cancel was successful.
     */
    cancel_upgrade(force: ForceIdentification, player?: PlayerIdentification): boolean
    /**
     * Is this entity marked for upgrade?
     */
    to_be_upgraded(): boolean
    /**
     * Get a logistic requester slot. Only useable on entities that have requester slots.
     * @param slot The slot index.
     * @returns Contents of the specified slot; `nil` if the given slot contains no request.
     */
    get_request_slot(slot: uint): SimpleItemStack | nil
    /**
     * Set a logistic requester slot. Only useable on entities that have requester slots.
     * @param request What to request.
     * @param slot The slot index.
     * @returns Whether the slot was set.
     */
    set_request_slot(request: ItemStackIdentification, slot: uint): boolean
    /**
     * Clear a logistic requester slot. Only useable on entities that have requester slots.
     * @param slot The slot index.
     */
    clear_request_slot(slot: uint): void
    /**
     * Returns whether a craft is currently in process. It does not indicate whether progress is currently being made, but whether a crafting process has been started in this machine.
     *
     * _Can only be used if this is CraftingMachine_
     */
    is_crafting(): boolean
    /**
     * _Can only be used if this is Gate_
     * @returns `true` if this gate is currently opened.
     */
    is_opened(): boolean
    /**
     * _Can only be used if this is Gate_
     * @returns `true` if this gate is currently opening.
     */
    is_opening(): boolean
    /**
     * _Can only be used if this is Gate_
     * @returns `true` if this gate is currently closed.
     */
    is_closed(): boolean
    /**
     * _Can only be used if this is Gate_
     * @returns `true` if this gate is currently closing
     */
    is_closing(): boolean
    /**
     * _Can only be used if this is Gate_
     * @param force The force that requests the gate to be open.
     * @param extra_time Extra ticks to stay open.
     */
    request_to_open(force: ForceIdentification, extra_time?: uint): void
    /**
     * _Can only be used if this is Gate_
     * @param force The force that requests the gate to be closed.
     */
    request_to_close(force: ForceIdentification): void
    /**
     * Get a transport line of a belt or belt connectable entity.
     *
     * _Can only be used if this is TransportBeltConnectable_
     * @param index Index of the requested transport line. Transport lines are 1-indexed.
     */
    get_transport_line(index: uint): LuaTransportLine
    /**
     * Get the maximum transport line index of a belt or belt connectable entity.
     *
     * _Can only be used if this is TransportBeltConnectable_
     */
    get_max_transport_line_index(): uint
    /**
     * ## Raised events
     * - {@link OnRocketLaunchOrderedEvent on_rocket_launch_ordered}? _instantly_ Raised if the rocket launch was successfully initiated.
     *
     * _Can only be used if this is RocketSilo_
     * @returns `true` if the rocket was successfully launched. Return value of `false` means the silo is not ready for launch.
     */
    launch_rocket(): boolean
    /**
     * Revive a ghost, which turns it from a ghost into a real entity or tile.
     *
     * ## Raised events
     * - {@link ScriptRaisedReviveEvent script_raised_revive}? _instantly_ Raised if this was an entity ghost and the `raise_revive` flag was set and the entity was successfully revived.
     * - {@link ScriptRaisedSetTilesEvent script_raised_set_tiles}? _instantly_ Raised if this was a tile ghost and the `raise_revive` flag was set and the tile was successfully revived.
     *
     * _Can only be used if this is Ghost_
     * @returns Any items the new real entity collided with or `nil` if the ghost could not be revived.
     * @returns The revived entity if an entity ghost was successfully revived.
     * @returns The item request proxy if it was requested with `return_item_request_proxy`.
     */
    revive(params?: {
      /**
       * If `true` the function will return item request proxy as the third return value.
       */
      readonly return_item_request_proxy?: boolean
      /**
       * If true, and an entity ghost; {@link ScriptRaisedReviveEvent script_raised_revive} will be called. Else if true, and a tile ghost; {@link ScriptRaisedSetTilesEvent script_raised_set_tiles} will be called.
       */
      readonly raise_revive?: boolean
    }): LuaMultiReturn<[Record<string, uint> | nil, LuaEntity | nil, LuaEntity | nil]>
    /**
     * Revives a ghost silently, so the revival makes no sound and no smoke is created.
     *
     * ## Raised events
     * - {@link ScriptRaisedReviveEvent script_raised_revive}? _instantly_ Raised if this was an entity ghost and the `raise_revive` flag was set and the entity was successfully revived.
     * - {@link ScriptRaisedSetTilesEvent script_raised_set_tiles}? _instantly_ Raised if this was a tile ghost and the `raise_revive` flag was set and the tile was successfully revived.
     *
     * _Can only be used if this is Ghost_
     * @returns Any items the new real entity collided with or `nil` if the ghost could not be revived.
     * @returns The revived entity if an entity ghost was successfully revived.
     * @returns The item request proxy if it was requested with `return_item_request_proxy`.
     */
    silent_revive(params?: {
      /**
       * If `true` the function will return item request proxy as the third parameter.
       */
      readonly return_item_request_proxy?: boolean
      /**
       * If true, and an entity ghost; {@link ScriptRaisedReviveEvent script_raised_revive} will be called. Else if true, and a tile ghost; {@link ScriptRaisedSetTilesEvent script_raised_set_tiles} will be called.
       */
      readonly raise_revive?: boolean
    }): LuaMultiReturn<[Record<string, uint> | nil, LuaEntity | nil, LuaEntity | nil]>
    /**
     * _Can only be used if this is Rail_
     * @returns Rail connected in the specified manner to this one, `nil` if unsuccessful.
     * @returns Rail direction of the returned rail which points to origin rail
     * @returns Turn to be taken when going back from returned rail to origin rail
     */
    get_connected_rail(params: {
      readonly rail_direction: defines.rail_direction
      readonly rail_connection_direction: defines.rail_connection_direction
    }): LuaMultiReturn<[LuaEntity | nil, defines.rail_direction | nil, defines.rail_connection_direction | nil]>
    /**
     * Get the rails that this signal is connected to.
     *
     * _Can only be used if this is RailSignal or RailChainSignal_
     */
    get_connected_rails(): LuaEntity[]
    /**
     * Get the rail signal or train stop at the start/end of the rail segment this rail is in.
     *
     * A rail segment is a continuous section of rail with no branches, signals, nor train stops.
     *
     * _Can only be used if this is Rail_
     * @param direction The direction of travel relative to this rail.
     * @param in_else_out If true, gets the entity at the entrance of the rail segment, otherwise gets the entity at the exit of the rail segment.
     * @returns `nil` if the rail segment doesn't start/end with a signal nor a train stop.
     */
    get_rail_segment_entity(direction: defines.rail_direction, in_else_out: boolean): LuaEntity | nil
    /**
     * Get the rail at the end of the rail segment this rail is in.
     *
     * A rail segment is a continuous section of rail with no branches, signals, nor train stops.
     *
     * _Can only be used if this is Rail_
     * @returns The rail entity.
     * @returns A rail direction pointing out of the rail segment from the end rail.
     */
    get_rail_segment_end(direction: defines.rail_direction): LuaMultiReturn<[LuaEntity, defines.rail_direction]>
    /**
     * Get all rails of a rail segment this rail is in.
     *
     * A rail segment is a continuous section of rail with no branches, signals, nor train stops.
     *
     * _Can only be used if this is Rail_
     * @param direction Selects end of this rail that points to a rail segment end from which to start returning rails
     * @returns Rails of this rail segment
     */
    get_rail_segment_rails(direction: defines.rail_direction): LuaEntity[]
    /**
     * Get the length of the rail segment this rail is in.
     *
     * A rail segment is a continuous section of rail with no branches, signals, nor train stops.
     *
     * _Can only be used if this is Rail_
     */
    get_rail_segment_length(): double
    /**
     * Get a rail from each rail segment that overlaps with this rail's rail segment.
     *
     * A rail segment is a continuous section of rail with no branches, signals, nor train stops.
     *
     * _Can only be used if this is Rail_
     */
    get_rail_segment_overlaps(): LuaEntity[]
    /**
     * Checks if this rail and other rail both belong to the same rail segment.
     *
     * _Can only be used if this is Rail_
     */
    is_rail_in_same_rail_segment_as(other_rail: LuaEntity): boolean
    /**
     * Checks if this rail and other rail both belong to the same rail block.
     *
     * _Can only be used if this is Rail_
     */
    is_rail_in_same_rail_block_as(other_rail: LuaEntity): boolean
    /**
     * Returns all parent signals. Parent signals are always RailChainSignal. Parent signals are those signals that are checking state of this signal to determine their own chain state.
     *
     * _Can only be used if this is RailSignal or RailChainSignal_
     */
    get_parent_signals(): LuaEntity[]
    /**
     * Returns all child signals. Child signals can be either RailSignal or RailChainSignal. Child signals are signals which are checked by this signal to determine a chain state.
     *
     * _Can only be used if this is RailChainSignal_
     */
    get_child_signals(): LuaEntity[]
    /**
     * Returns all signals guarding entrance to a rail block this rail belongs to.
     *
     * _Can only be used if this is Rail_
     */
    get_inbound_signals(): LuaEntity[]
    /**
     * Returns all signals guarding exit from a rail block this rail belongs to.
     *
     * _Can only be used if this is Rail_
     */
    get_outbound_signals(): LuaEntity[]
    /**
     * Get the filter for a slot in an inserter, loader, or logistic storage container. The entity must allow filters.
     * @param slot_index Index of the slot to get the filter for.
     * @returns Prototype name of the item being filtered. `nil` if the given slot has no filter.
     */
    get_filter(slot_index: uint): string | nil
    /**
     * Set the filter for a slot in an inserter, loader, or logistic storage container. The entity must allow filters.
     * @param slot_index Index of the slot to set the filter for.
     * @param item Prototype name of the item to filter, or `nil` to clear the filter.
     */
    set_filter(slot_index: uint, item: string | nil): void
    /**
     * Gets the filter for this infinity container at the given index, or `nil` if the filter index doesn't exist or is empty.
     *
     * _Can only be used if this is InfinityContainer_
     * @param index The index to get.
     */
    get_infinity_container_filter(index: uint): InfinityInventoryFilter | nil
    /**
     * Sets the filter for this infinity container at the given index.
     *
     * _Can only be used if this is InfinityContainer_
     * @param index The index to set.
     * @param filter The new filter, or `nil` to clear the filter.
     */
    set_infinity_container_filter(index: uint, filter: InfinityInventoryFilter | nil): void
    /**
     * Gets the filter for this infinity pipe, or `nil` if the filter is empty.
     *
     * _Can only be used if this is InfinityPipe_
     */
    get_infinity_pipe_filter(): InfinityPipeFilter | nil
    /**
     * Sets the filter for this infinity pipe.
     *
     * _Can only be used if this is InfinityPipe_
     * @param filter The new filter, or `nil` to clear the filter.
     */
    set_infinity_pipe_filter(filter: InfinityPipeFilter | nil): void
    /**
     * Gets the heat setting for this heat interface.
     *
     * _Can only be used if this is HeatInterface_
     */
    get_heat_setting(): HeatSetting
    /**
     * Sets the heat setting for this heat interface.
     *
     * _Can only be used if this is HeatInterface_
     * @param filter The new setting.
     */
    set_heat_setting(filter: HeatSetting): void
    /**
     * Gets the control behavior of the entity (if any).
     * @returns The control behavior or `nil`.
     */
    get_control_behavior(): LuaControlBehavior | nil
    /**
     * Gets (and or creates if needed) the control behavior of the entity.
     * @returns The control behavior or `nil`.
     */
    get_or_create_control_behavior(): LuaControlBehavior | nil
    /**
     * @param wire Wire color of the network connected to this entity.
     * @param circuit_connector The connector to get circuit network for. Must be specified for entities with more than one circuit network connector.
     * @returns The circuit network or nil.
     */
    get_circuit_network(
      wire: defines.wire_type,
      circuit_connector?: defines.circuit_connector_id,
    ): LuaCircuitNetwork | nil
    /**
     * Read a single signal from the combined circuit networks.
     * @param signal The signal to read.
     * @param circuit_connector The connector to get signals for. Must be specified for entities with more than one circuit network connector.
     * @returns The current value of the signal.
     */
    get_merged_signal(signal: SignalID, circuit_connector?: defines.circuit_connector_id): int
    /**
     * The merged circuit network signals or `nil` if there are no signals.
     * @param circuit_connector The connector to get signals for. Must be specified for entities with more than one circuit network connector.
     * @returns The sum of signals on both the red and green networks, or `nil` if it doesn't have a circuit connector.
     */
    get_merged_signals(circuit_connector?: defines.circuit_connector_id): Signal[] | nil
    /**
     * Whether this entity supports a backer name.
     */
    supports_backer_name(): boolean
    /**
     * Copies settings from the given entity onto this entity.
     * @param by_player If provided, the copying is done 'as' this player and {@link OnEntitySettingsPastedEvent on_entity_settings_pasted} is triggered.
     * @returns Any items removed from this entity as a result of copying the settings.
     */
    copy_settings(entity: LuaEntity, by_player?: PlayerIdentification): Record<string, uint>
    /**
     * Gets all the `LuaLogisticPoint`s that this entity owns. Optionally returns only the point specified by the index parameter.
     *
     * When `index` is not given, this will be a single `LuaLogisticPoint` for most entities. For some (such as the player character), it can be zero or more.
     * @param index If provided, only returns the `LuaLogisticPoint` specified by this index.
     */
    get_logistic_point(index: defines.logistic_member_index): LuaLogisticPoint | nil
    get_logistic_point(): Record<defines.logistic_member_index, LuaLogisticPoint> | nil
    /**
     * Plays a note with the given instrument and note.
     *
     * _Can only be used if this is ProgrammableSpeaker_
     * @returns Whether the request is valid. The sound may or may not be played depending on polyphony settings.
     */
    play_note(instrument: uint, note: uint): boolean
    /**
     * Connects the rolling stock in the given direction.
     *
     * _Can only be used if this is RollingStock_
     * @returns Whether any connection was made
     */
    connect_rolling_stock(direction: defines.rail_direction): boolean
    /**
     * Tries to disconnect this rolling stock in the given direction.
     *
     * _Can only be used if this is RollingStock_
     * @returns If anything was disconnected
     */
    disconnect_rolling_stock(direction: defines.rail_direction): boolean
    /**
     * Reconnect loader, beacon, cliff and mining drill connections to entities that might have been teleported out or in by the script. The game doesn't do this automatically as we don't want to loose performance by checking this in normal games.
     */
    update_connections(): void
    /**
     * Current recipe being assembled by this machine, if any.
     *
     * _Can only be used if this is CraftingMachine_
     */
    get_recipe(): LuaRecipe | nil
    /**
     * Sets the given recipe in this assembly machine.
     *
     * _Can only be used if this is AssemblingMachine_
     * @param recipe The new recipe. Writing `nil` clears the recipe, if any.
     * @returns Any items removed from this entity as a result of setting the recipe.
     */
    set_recipe(recipe: string | LuaRecipe | nil): Record<string, uint>
    /**
     * Rotates this entity as if the player rotated it.
     *
     * ## Raised events
     * - {@link OnPlayerRotatedEntityEvent on_player_rotated_entity}? _instantly_ Raised if the `by_player` argument was given and the rotation was successful.
     * @returns Whether the rotation was successful.
     * @returns Count of spilled items indexed by their prototype names if `spill_items` was `true`.
     */
    rotate(params?: {
      /**
       * If `true`, rotate the entity in the counter-clockwise direction.
       */
      readonly reverse?: boolean
      /**
       * If not specified, the {@link OnPlayerRotatedEntityEvent on_player_rotated_entity} event will not be fired.
       */
      readonly by_player?: PlayerIdentification
      /**
       * If the player is not given should extra items be spilled or returned as a second return value from this.
       */
      readonly spill_items?: boolean
      /**
       * When true, each spilled item will be flagged with the {@link LuaEntity#to_be_looted LuaEntity::to_be_looted} flag.
       */
      readonly enable_looted?: boolean
      /**
       * When provided the spilled items will be marked for deconstruction by this force.
       */
      readonly force?: ForceIdentification
    }): LuaMultiReturn<[boolean, Record<string, uint> | nil]>
    /**
     * Gets the driver of this vehicle if any.
     *
     * _Can only be used if this is Vehicle_
     * @returns `nil` if the vehicle contains no driver. To check if there's a passenger see {@link LuaEntity#get_passenger LuaEntity::get_passenger}.
     */
    get_driver(): LuaEntity | LuaPlayer | nil
    /**
     * Sets the driver of this vehicle.
     *
     * This differs from {@link LuaEntity#set_passenger LuaEntity::set_passenger} in that the passenger can't drive the vehicle.
     *
     * ## Raised events
     * - {@link OnPlayerDrivingChangedStateEvent on_player_driving_changed_state}? _instantly_
     *
     * _Can only be used if this is Vehicle_
     * @param driver The new driver. Writing `nil` ejects the current driver, if any.
     */
    set_driver(driver?: LuaEntity | PlayerIdentification): void
    /**
     * Gets the passenger of this car or spidertron if any.
     *
     * This differs over {@link LuaEntity#get_driver LuaEntity::get_driver} in that the passenger can't drive the car.
     *
     * _Can only be used if this is Car or SpiderVehicle_
     * @returns `nil` if the vehicle contains no passenger. To check if there's a driver see {@link LuaEntity#get_driver LuaEntity::get_driver}.
     */
    get_passenger(): LuaEntity | LuaPlayer | nil
    /**
     * Sets the passenger of this car or spidertron.
     *
     * This differs from {@link LuaEntity#get_driver LuaEntity::get_driver} in that the passenger can't drive the car.
     *
     * ## Raised events
     * - {@link OnPlayerDrivingChangedStateEvent on_player_driving_changed_state}? _instantly_
     *
     * _Can only be used if this is Car or SpiderVehicle_
     * @param passenger The new passenger. Writing `nil` ejects the current passenger, if any.
     */
    set_passenger(passenger?: LuaEntity | PlayerIdentification): void
    /**
     * Returns `true` if this entity produces or consumes electricity and is connected to an electric network that has at least one entity that can produce power.
     */
    is_connected_to_electric_network(): boolean
    /**
     * The trains scheduled to stop at this train stop.
     *
     * _Can only be used if this is TrainStop_
     */
    get_train_stop_trains(): LuaTrain[]
    /**
     * The train currently stopped at this train stop, if any.
     *
     * _Can only be used if this is TrainStop_
     */
    get_stopped_train(): LuaTrain | nil
    /**
     * Clones this entity.
     *
     * ## Raised events
     * - {@link OnEntityClonedEvent on_entity_cloned}? _instantly_ Raised if the entity was successfully cloned.
     * @returns The cloned entity or `nil` if this entity can't be cloned/can't be cloned to the given location.
     */
    clone(params: {
      /**
       * The destination position
       */
      readonly position: MapPosition | MapPositionArray
      /**
       * The destination surface
       */
      readonly surface?: LuaSurface
      readonly force?: ForceIdentification
      /**
       * If false, the building effect smoke will not be shown around the new entity.
       */
      readonly create_build_effect_smoke?: boolean
    }): LuaEntity | nil
    /**
     * Get the amount of all or some fluid in this entity.
     *
     * If information about fluid temperatures is required, {@link LuaEntity#fluidbox LuaEntity::fluidbox} should be used instead.
     * @param fluid Prototype name of the fluid to count. If not specified, count all fluids.
     */
    get_fluid_count(fluid?: string): double
    /**
     * Get amounts of all fluids in this entity.
     *
     * If information about fluid temperatures is required, {@link LuaEntity#fluidbox LuaEntity::fluidbox} should be used instead.
     * @returns The amounts, indexed by fluid names.
     */
    get_fluid_contents(): Record<string, double>
    /**
     * Remove fluid from this entity.
     *
     * If temperature is given only fluid matching that exact temperature is removed. If minimum and maximum is given fluid within that range is removed.
     * @returns Amount of fluid actually removed.
     */
    remove_fluid(params: {
      /**
       * Fluid prototype name.
       */
      readonly name: string
      /**
       * Amount to remove
       */
      readonly amount: double
      readonly minimum_temperature?: double
      readonly maximum_temperature?: double
      readonly temperature?: double
    }): double
    /**
     * Insert fluid into this entity. The fluidbox is chosen automatically.
     * @param fluid Fluid to insert.
     * @returns Amount of fluid actually inserted.
     */
    insert_fluid(fluid: Fluid): double
    /**
     * Remove all fluids from this entity.
     */
    clear_fluid_inside(): void
    /**
     * Get the source of this beam.
     *
     * _Can only be used if this is Beam_
     */
    get_beam_source(): BeamTarget | nil
    /**
     * Set the source of this beam.
     *
     * _Can only be used if this is Beam_
     */
    set_beam_source(source: LuaEntity | (MapPosition | MapPositionArray)): void
    /**
     * Get the target of this beam.
     *
     * _Can only be used if this is Beam_
     */
    get_beam_target(): BeamTarget | nil
    /**
     * Set the target of this beam.
     *
     * _Can only be used if this is Beam_
     */
    set_beam_target(target: LuaEntity | (MapPosition | MapPositionArray)): void
    /**
     * The radius of this entity.
     */
    get_radius(): double
    /**
     * The health ratio of this entity between 1 and 0 (for full health and no health respectively).
     * @returns `nil` if this entity doesn't have health.
     */
    get_health_ratio(): float | nil
    /**
     * Creates the same smoke that is created when you place a building by hand.
     *
     * You can play the building sound to go with it by using {@link LuaSurface#play_sound LuaSurface::play_sound}, eg: `entity.surface.play_sound{path="entity-build/"..entity.prototype.name, position=entity.position}`
     */
    create_build_effect_smoke(): void
    /**
     * Release the unit from the spawner which spawned it. This allows the spawner to continue spawning additional units.
     *
     * _Can only be used if this is Unit_
     */
    release_from_spawner(): void
    /**
     * Toggle this entity's equipment movement bonus. Does nothing if the entity does not have an equipment grid.
     *
     * This property can also be read and written on the equipment grid of this entity.
     */
    toggle_equipment_movement_bonus(): void
    /**
     * Whether this character can shoot the given entity or position.
     *
     * _Can only be used if this is Character_
     */
    can_shoot(target: LuaEntity, position: MapPosition | MapPositionArray): boolean
    /**
     * Only works if the entity is a speech-bubble, with an "effect" defined in its wrapper_flow_style.
     *
     * Starts animating the opacity of the speech bubble towards zero, and destroys the entity when it hits zero.
     *
     * _Can only be used if this is SpeechBubble_
     */
    start_fading_out(): void
    /**
     * Returns the new entity prototype.
     * @returns `nil` if this entity is not marked for upgrade.
     */
    get_upgrade_target(): LuaEntityPrototype | nil
    /**
     * Returns the new entity direction after upgrading.
     * @returns `nil` if this entity is not marked for upgrade.
     */
    get_upgrade_direction(): defines.direction | nil
    /**
     * Returns the amount of damage to be taken by this entity.
     * @returns `nil` if this entity does not have health.
     */
    get_damage_to_be_taken(): float | nil
    /**
     * Depletes and destroys this resource entity.
     *
     * ## Raised events
     * - {@link OnResourceDepletedEvent on_resource_depleted} _instantly_
     *
     * _Can only be used if this is ResourceEntity_
     */
    deplete(): void
    /**
     * Mines this entity.
     *
     * 'Standard' operation is to keep calling `LuaEntity.mine` with an inventory until all items are transferred and the items dealt with.
     *
     * The result of mining the entity (the item(s) it produces when mined) will be dropped on the ground if they don't fit into the provided inventory.
     *
     * ## Raised events
     * - {@link ScriptRaisedDestroyEvent script_raised_destroy}? _instantly_ Raised if the `raise_destroyed` flag was set and the entity was successfully mined.
     * @returns Whether mining succeeded.
     */
    mine(params?: {
      /**
       * If provided the item(s) will be transferred into this inventory. If provided, this must be an inventory created with {@link LuaGameScript#create_inventory LuaGameScript::create_inventory} or be a basic inventory owned by some entity.
       */
      readonly inventory?: LuaInventory
      /**
       * If true, when the item(s) don't fit into the given inventory the entity is force mined. If false, the mining operation fails when there isn't enough room to transfer all of the items into the inventory. Defaults to false. This is ignored and acts as `true` if no inventory is provided.
       */
      readonly force?: boolean
      /**
       * If true, {@link ScriptRaisedDestroyEvent script_raised_destroy} will be raised. Defaults to `true`.
       */
      readonly raise_destroyed?: boolean
      /**
       * If true, the minable state of the entity is ignored. Defaults to `false`. If false, an entity that isn't minable (set as not-minable in the prototype or isn't minable for other reasons) will fail to be mined.
       */
      readonly ignore_minable?: boolean
    }): boolean
    /**
     * Triggers spawn_decoration actions defined in the entity prototype or does nothing if entity is not "turret" or "unit-spawner".
     */
    spawn_decorations(): void
    /**
     * Can wires reach between these entities.
     */
    can_wires_reach(entity: LuaEntity): boolean
    /**
     * Gets rolling stock connected to the given end of this stock.
     *
     * _Can only be used if this is RollingStock_
     * @returns The rolling stock connected at the given end, `nil` if none is connected there.
     * @returns The rail direction of the connected rolling stock if any.
     */
    get_connected_rolling_stock(
      direction: defines.rail_direction,
    ): LuaMultiReturn<[LuaEntity | nil, defines.rail_direction | nil]>
    /**
     * Is this entity or tile ghost or item request proxy registered for construction?
     *
     * If false, it means a construction robot has been dispatched to build the entity, or it is not an entity that can be constructed.
     */
    is_registered_for_construction(): boolean
    /**
     * Is this entity registered for deconstruction with this force?
     *
     * If false, it means a construction robot has been dispatched to deconstruct it, or it is not marked for deconstruction.
     *
     * The complexity is effectively O(1) - it depends on the number of objects targeting this entity which should be small enough.
     * @param force The force construction manager to check.
     */
    is_registered_for_deconstruction(force: ForceIdentification): boolean
    /**
     * Is this entity registered for upgrade?
     *
     * If false, it means a construction robot has been dispatched to upgrade it, or it is not marked for upgrade.
     *
     * This is worst-case O(N) complexity where N is the current number of things in the upgrade queue.
     */
    is_registered_for_upgrade(): boolean
    /**
     * Is this entity registered for repair?
     *
     * If false, it means a construction robot has been dispatched to upgrade it, or it is not damaged.
     *
     * This is worst-case O(N) complexity where N is the current number of things in the repair queue.
     */
    is_registered_for_repair(): boolean
    /**
     * Adds the given position to this spidertron's autopilot's queue of destinations.
     *
     * _Can only be used if this is SpiderVehicle_
     * @param position The position the spidertron should move to.
     */
    add_autopilot_destination(position: MapPosition | MapPositionArray): void
    /**
     * Connects current linked belt with another one.
     *
     * Neighbours have to be of different type. If given linked belt is connected to something else it will be disconnected first. If provided neighbour is connected to something else it will also be disconnected first.
     *
     * Automatically updates neighbour to be connected back to this one.
     *
     * Can also be used on entity ghost if it contains linked-belt.
     *
     * _Can only be used if this is LinkedBelt_
     * @param neighbour Another linked belt or entity ghost containing linked belt to connect or nil to disconnect
     */
    connect_linked_belts(neighbour: LuaEntity | nil): void
    /**
     * Disconnects linked belt from its neighbour.
     *
     * Can also be used on entity ghost if it contains linked-belt.
     *
     * _Can only be used if this is LinkedBelt_
     */
    disconnect_linked_belts(): void
    /**
     * Gets legs of given SpiderVehicle.
     *
     * _Can only be used if this is SpiderVehicle_
     */
    get_spider_legs(): LuaEntity[]
    /**
     * Sets the {@link LuaEntity#speed speed} of the given SpiderVehicle to zero. Notably does not clear its {@link LuaEntity#autopilot_destination autopilot_destination}, which it will continue moving towards if set.
     *
     * _Can only be used if this is SpiderVehicle_
     */
    stop_spider(): void
    /**
     * Returns a table with all beacons affecting this effect receiver. Can only be used when the entity has an effect receiver (AssemblingMachine, Furnace, Lab, MiningDrills)
     */
    get_beacons(): LuaEntity[] | nil
    /**
     * Returns a table with all entities affected by this beacon
     *
     * _Can only be used if this is Beacon_
     */
    get_beacon_effect_receivers(): LuaEntity[]
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Name of the entity prototype. E.g. "inserter" or "filter-inserter".
     */
    readonly name: string
    /**
     * Name of the entity or tile contained in this ghost
     *
     * _Can only be used if this is Ghost_
     */
    readonly ghost_name: string
    /**
     * Localised name of the entity.
     */
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    /**
     * Localised name of the entity or tile contained in this ghost.
     *
     * _Can only be used if this is Ghost_
     */
    readonly ghost_localised_name: LocalisedString
    /**
     * _Can only be used if this is Ghost_
     */
    readonly ghost_localised_description: LocalisedString
    /**
     * The entity prototype type of this entity.
     */
    readonly type: EntityType
    /**
     * The prototype type of the entity or tile contained in this ghost.
     *
     * _Can only be used if this is Ghost_
     */
    readonly ghost_type: EntityType
    /**
     * Deactivating an entity will stop all its operations (car will stop moving, inserters will stop working, fish will stop moving etc).
     *
     * Entities that are not active naturally can't be set to be active (setting it to be active will do nothing)
     *
     * Ghosts, simple smoke, and corpses can't be modified at this time.
     *
     * It is even possible to set the character to not be active, so he can't move and perform most of the tasks.
     */
    active: boolean
    /**
     * If set to `false`, this entity can't be damaged and won't be attacked automatically. It can however still be mined.
     *
     * Entities that are indestructible naturally (they have no health, like smoke, resource etc) can't be set to be destructible.
     */
    destructible: boolean
    /**
     * Not minable entities can still be destroyed.
     *
     * Entities that are not minable naturally (like smoke, character, enemy units etc) can't be set to minable.
     */
    minable: boolean
    /**
     * When entity is not to be rotatable (inserter, transport belt etc), it can't be rotated by player using the R key.
     *
     * Entities that are not rotatable naturally (like chest or furnace) can't be set to be rotatable.
     */
    rotatable: boolean
    /**
     * Player can't open gui of this entity and he can't quick insert/input stuff in to the entity when it is not operable.
     */
    operable: boolean
    /**
     * The current health of the entity, if any. Health is automatically clamped to be between `0` and max health (inclusive). Entities with a health of `0` can not be attacked.
     *
     * To get the maximum possible health of this entity, see {@link LuaEntityPrototype#max_health LuaEntityPrototype::max_health} on its prototype.
     */
    health?: float
    /**
     * The current direction this entity is facing.
     */
    direction: defines.direction
    /**
     * Whether the entity has direction. When it is false for this entity, it will always return north direction when asked for.
     */
    readonly supports_direction: boolean
    /**
     * The smooth orientation of this entity.
     */
    orientation: RealOrientation
    /**
     * The orientation of this cliff.
     *
     * _Can only be used if this is Cliff_
     */
    readonly cliff_orientation: CliffOrientation
    /**
     * The relative orientation of the vehicle turret, artillery turret, artillery wagon. `nil` if this entity isn't a vehicle with a vehicle turret or artillery turret/wagon.
     *
     * Writing does nothing if the vehicle doesn't have a turret.
     */
    relative_turret_orientation?: RealOrientation
    /**
     * The torso orientation of this spider vehicle.
     *
     * _Can only be used if this is SpiderVehicle_
     */
    torso_orientation: RealOrientation
    /**
     * Count of resource units contained.
     *
     * _Can only be used if this is ResourceEntity_
     */
    amount: uint
    /**
     * Count of initial resource units contained. `nil` if this is not an infinite resource.
     *
     * If this is not an infinite resource, writing will produce an error.
     *
     * _Can only be used if this is ResourceEntity_
     */
    initial_amount?: uint
    /**
     * Multiplies the acceleration the vehicle can create for one unit of energy. Defaults to `1`.
     *
     * _Can only be used if this is Car_
     */
    effectivity_modifier: float
    /**
     * Multiplies the energy consumption.
     *
     * _Can only be used if this is Car_
     */
    consumption_modifier: float
    /**
     * Multiplies the car friction rate.
     *
     * _Can only be used if this is Car_
     * @example
     * -- This will allow the car to go much faster
     * game.player.vehicle.friction_modifier = 0.5
     */
    friction_modifier: float
    /**
     * Whether the driver of this car or spidertron is the gunner. If `false`, the passenger is the gunner. `nil` if this is neither a car or a spidertron.
     *
     * _Can only be used if this is Car or SpiderVehicle_
     */
    driver_is_gunner?: boolean
    /**
     * Read when this spidertron auto-targets enemies
     *
     * _Can only be used if this is SpiderVehicle_
     */
    vehicle_automatic_targeting_parameters: VehicleAutomaticTargetingParameters
    /**
     * The current speed if this is a car, rolling stock, projectile or spidertron, or the maximum speed if this is a unit. The speed is in tiles per tick. `nil` if this is not a car, rolling stock, unit, projectile or spidertron.
     *
     * Only the speed of units, cars, and projectiles are writable.
     */
    speed?: float
    /**
     * The current speed of this unit in tiles per tick, taking into account any walking speed modifier given by the tile the unit is standing on. `nil` if this is not a unit.
     *
     * _Can only be used if this is Unit_
     */
    readonly effective_speed?: float
    /**
     * _Can only be used if this is ItemEntity_
     */
    readonly stack: LuaItemStack
    /**
     * The entity prototype of this entity.
     */
    readonly prototype: LuaEntityPrototype
    /**
     * The prototype of the entity or tile contained in this ghost.
     *
     * _Can only be used if this is Ghost_
     */
    readonly ghost_prototype: LuaEntityPrototype | LuaTilePrototype
    /**
     * Position where the entity puts its stuff.
     *
     * Meaningful only for entities that put stuff somewhere, such as mining drills or inserters. Mining drills can't have their drop position changed; inserters must have `allow_custom_vectors` set to true on their prototype to allow changing the drop position.
     */
    get drop_position(): MapPosition
    set drop_position(value: MapPosition | MapPositionArray)
    /**
     * Where the inserter will pick up items from.
     *
     * Inserters must have `allow_custom_vectors` set to true on their prototype to allow changing the pickup position.
     *
     * _Can only be used if this is Inserter_
     */
    get pickup_position(): MapPosition
    set pickup_position(value: MapPosition | MapPositionArray)
    /**
     * The entity this entity is putting its items to. If there are multiple possible entities at the drop-off point, writing to this attribute allows a mod to choose which one to drop off items to. The entity needs to collide with the tile box under the drop-off position. `nil` if there is no entity to put items to, or if this is not an entity that puts items somewhere.
     */
    drop_target?: LuaEntity
    /**
     * The entity this inserter will attempt to pick up items from. If there are multiple possible entities at the pick-up point, writing to this attribute allows a mod to choose which one to pick up items from. The entity needs to collide with the tile box under the pick-up position. `nil` if there is no entity to pull items from.
     *
     * _Can only be used if this is Inserter_
     */
    pickup_target?: LuaEntity
    /**
     * Index of the currently selected weapon slot of this character, car, or spidertron. `nil` if this entity doesn't have guns.
     *
     * _Can only be used if this is Character, Car or SpiderVehicle_
     */
    selected_gun_index?: uint
    /**
     * Energy stored in the entity (heat in furnace, energy stored in electrical devices etc.). Always 0 for entities that don't have the concept of energy stored inside.
     * @example
     * game.player.print("Machine energy: " .. game.player.selected.energy .. "J")
     * game.player.selected.energy = 3000
     */
    energy: double
    /**
     * The temperature of this entity's heat energy source. `nil` if this entity does not use a heat energy source.
     */
    temperature?: double
    /**
     * The previous recipe this furnace was using, if any.
     *
     * _Can only be used if this is Furnace_
     */
    readonly previous_recipe?: LuaRecipe
    /**
     * The item stack currently held in an inserter's hand.
     *
     * _Can only be used if this is Inserter_
     */
    readonly held_stack: LuaItemStack
    /**
     * Current position of the inserter's "hand".
     *
     * _Can only be used if this is Inserter_
     */
    readonly held_stack_position: MapPosition
    /**
     * The train this rolling stock belongs to, if any. `nil` if this is not a rolling stock.
     */
    readonly train?: LuaTrain
    /**
     * A list of neighbours for certain types of entities. Applies to electric poles, power switches, underground belts, walls, gates, reactors, cliffs, and pipe-connectable entities.
     *
     * {@link https://lua-api.factorio.com/latest/classes/LuaEntity.html#LuaEntity.neighbours > Differs depending on the type of entity:}
     */
    readonly neighbours: Record<string, LuaEntity[]> | LuaEntity[][] | LuaEntity
    /**
     * The belt connectable neighbours of this belt connectable entity. Only entities that input to or are outputs of this entity.
     *
     * Does not contain the other end of an underground belt, see {@link LuaEntity#neighbours LuaEntity::neighbours} for that.
     *
     * _Can only be used if this is TransportBeltConnectable_
     */
    readonly belt_neighbours: {
      /**
       * Array of transport belt connectable entities.
       */
      readonly inputs: LuaEntity[]
      /**
       * Array of transport belt connectable entities.
       */
      readonly outputs: LuaEntity[]
    }
    /**
     * Fluidboxes of this entity.
     */
    set fluidbox(value: LuaFluidBox)
    /**
     * The backer name assigned to this entity. Entities that support backer names are labs, locomotives, radars, roboports, and train stops. `nil` if this entity doesn't support backer names.
     *
     * While train stops get the name of a backer when placed down, players can rename them if they want to. In this case, `backer_name` returns the player-given name of the entity.
     *
     * ## Raised events
     * - {@link OnEntityRenamedEvent on_entity_renamed} _instantly_
     */
    backer_name?: string
    /**
     * The label on this spider-vehicle entity, if any. `nil` if this is not a spider-vehicle.
     *
     * ## Raised events
     * - {@link OnEntityRenamedEvent on_entity_renamed} _instantly_
     */
    entity_label?: string
    /**
     * The ticks left before a ghost, combat robot, highlight box, smoke with trigger or sticker is destroyed.
     *
     * For ghosts set to uint32 max (4 294 967 295) to never expire.
     *
     * For ghosts can not be set higher than {@link LuaForce#ghost_time_to_live LuaForce::ghost_time_to_live} of the entity's force.
     *
     * _Can only be used if this is Ghost, CombatRobot, HighlightBox, SmokeWithTrigger or Sticker_
     */
    time_to_live: uint
    /**
     * The color of this character, rolling stock, train stop, car, spider-vehicle, flying text, corpse or simple-entity-with-owner. `nil` if this entity doesn't use custom colors.
     *
     * Car color is overridden by the color of the current driver/passenger, if there is one.
     */
    get color(): Color | nil
    set color(value: Color | ColorArray | nil)
    /**
     * The text of this flying-text entity.
     *
     * _Can only be used if this is FlyingText_
     */
    text: LocalisedString
    /**
     * The state of this rail signal.
     *
     * _Can only be used if this is RailSignal or RailChainSignal_
     */
    readonly signal_state: defines.signal_state
    /**
     * The state of this chain signal.
     *
     * _Can only be used if this is RailChainSignal_
     */
    readonly chain_signal_state: defines.chain_signal_state
    /**
     * Will this entity be picked up automatically when the player walks over it?
     *
     * _Can only be used if this is ItemEntity_
     */
    to_be_looted: boolean
    /**
     * The current crafting speed, including speed bonuses from modules and beacons.
     *
     * _Can only be used if this is CraftingMachine_
     */
    readonly crafting_speed: double
    /**
     * The current crafting progress, as a number in range [0, 1].
     *
     * _Can only be used if this is CraftingMachine_
     */
    crafting_progress: float
    /**
     * The current productivity bonus progress, as a number in range [0, 1].
     *
     * _Can only be used if this is CraftingMachine_
     */
    bonus_progress: double
    /**
     * The productivity bonus of this entity.
     *
     * This includes force based bonuses as well as beacon/module bonuses.
     */
    readonly productivity_bonus: double
    /**
     * The pollution bonus of this entity.
     */
    readonly pollution_bonus: double
    /**
     * The speed bonus of this entity. This includes force based bonuses as well as beacon/module bonuses.
     */
    readonly speed_bonus: double
    /**
     * The consumption bonus of this entity.
     */
    readonly consumption_bonus: double
    /**
     * Whether this underground belt goes into or out of the ground.
     *
     * _Can only be used if this is UndergroundBelt_
     */
    readonly belt_to_ground_type: "input" | "output"
    /**
     * Whether this loader gets items from or puts item into a container.
     *
     * _Can only be used if this is Loader_
     */
    loader_type: "input" | "output"
    /**
     * Number of rocket parts in the silo.
     *
     * _Can only be used if this is RocketSilo_
     */
    rocket_parts: uint
    /**
     * The logistic network this entity is a part of, or `nil` if this entity is not a part of any logistic network.
     */
    logistic_network: LuaLogisticNetwork | nil
    /**
     * The logistic cell this entity is a part of. Will be `nil` if this entity is not a part of any logistic cell.
     */
    readonly logistic_cell: LuaLogisticCell | nil
    /**
     * Items this ghost will request when revived or items this item request proxy is requesting.
     *
     * The result is a dictionary mapping each item prototype name to the required count.
     */
    item_requests: Record<string, uint>
    /**
     * The player connected to this character, if any.
     *
     * _Can only be used if this is Character_
     */
    readonly player?: LuaPlayer
    /**
     * The unit group this unit is a member of, if any.
     *
     * _Can only be used if this is Unit_
     */
    readonly unit_group?: LuaUnitGroup
    /**
     * The damage dealt by this turret, artillery turret, or artillery wagon.
     *
     * _Can only be used if this is Turret_
     */
    damage_dealt: double
    /**
     * The number of units killed by this turret, artillery turret, or artillery wagon.
     *
     * _Can only be used if this is Turret_
     */
    kills: uint
    /**
     * The last player that changed any setting on this entity. This includes building the entity, changing its color, or configuring its circuit network. `nil` if the last user is not part of the save anymore.
     *
     * Reading this property will return a {@link LuaPlayer}, while {@link PlayerIdentification} can be used when writing.
     *
     * _Can only be used if this is EntityWithOwner, DeconstructibleTileProxy or TileGhost_
     */
    get last_user(): LuaPlayer | nil
    set last_user(value: LuaPlayer | PlayerIdentification | nil)
    /**
     * The buffer size for the electric energy source. `nil` if the entity doesn't have an electric energy source.
     *
     * Write access is limited to the ElectricEnergyInterface type.
     */
    electric_buffer_size?: double
    /**
     * The input flow limit for the electric energy source. `nil` if the entity doesn't have an electric energy source.
     */
    readonly electric_input_flow_limit?: double
    /**
     * The output flow limit for the electric energy source. `nil` if the entity doesn't have an electric energy source.
     */
    readonly electric_output_flow_limit?: double
    /**
     * The electric drain for the electric energy source. `nil` if the entity doesn't have an electric energy source.
     */
    readonly electric_drain?: double
    /**
     * The emissions for the electric energy source. `nil` if the entity doesn't have an electric energy source.
     */
    readonly electric_emissions?: double
    /**
     * A unique number identifying this entity for the lifetime of the save. These are allocated sequentially, and not re-used (until overflow).
     *
     * Only entities inheriting from {@link import("factorio:prototype").EntityWithOwnerPrototype EntityWithOwnerPrototype}, as well as {@link import("factorio:prototype").ItemRequestProxyPrototype ItemRequestProxyPrototype} and {@link import("factorio:prototype").EntityGhostPrototype EntityGhostPrototype} are assigned a unit number. Returns `nil` otherwise.
     */
    readonly unit_number?: UnitNumber
    /**
     * The {@link LuaEntity#unit_number unit_number} of the entity contained in this ghost. It is the same as the unit number of the {@link import("factorio:prototype").EntityWithOwnerPrototype EntityWithOwnerPrototype} that was destroyed to create this ghost. If it was created by other means, or if the inner entity does not support unit numbers, this property is `nil`.
     *
     * _Can only be used if this is EntityGhost_
     */
    readonly ghost_unit_number?: UnitNumber
    /**
     * The mining progress for this mining drill. Is a number in range [0, mining_target.prototype.mineable_properties.mining_time]. `nil` if this isn't a mining drill.
     */
    mining_progress?: double
    /**
     * The bonus mining progress for this mining drill. Read yields a number in range [0, mining_target.prototype.mineable_properties.mining_time]. `nil` if this isn't a mining drill.
     */
    bonus_mining_progress?: double
    /**
     * The power production specific to the ElectricEnergyInterface entity type.
     *
     * _Can only be used if this is ElectricEnergyInterface_
     */
    power_production: double
    /**
     * The power usage specific to the ElectricEnergyInterface entity type.
     *
     * _Can only be used if this is ElectricEnergyInterface_
     */
    power_usage: double
    /**
     * {@link LuaEntityPrototype#collision_box LuaEntityPrototype::collision_box} around entity's given position and respecting the current entity orientation.
     */
    readonly bounding_box: BoundingBox
    /**
     * The secondary bounding box of this entity or `nil` if it doesn't have one.
     *
     * This only exists for curved rails, and is automatically determined by the game.
     */
    readonly secondary_bounding_box?: BoundingBox
    /**
     * {@link LuaEntityPrototype#selection_box LuaEntityPrototype::selection_box} around entity's given position and respecting the current entity orientation.
     */
    readonly selection_box: BoundingBox
    /**
     * The secondary selection box of this entity or `nil` if it doesn't have one.
     *
     * This only exists for curved rails, and is automatically determined by the game.
     */
    readonly secondary_selection_box?: BoundingBox
    /**
     * The mining target, if any.
     *
     * _Can only be used if this is MiningDrill_
     */
    readonly mining_target?: LuaEntity
    /**
     * Entities that are directly connected to this entity via the circuit network. `nil` if this entity can't be connected to the circuit network.
     */
    readonly circuit_connected_entities?: {
      /**
       * Entities connected via the red wire.
       */
      readonly red: LuaEntity[]
      /**
       * Entities connected via the green wire.
       */
      readonly green: LuaEntity[]
    }
    /**
     * The connection definition for entities that are directly connected to this entity via the circuit network. `nil` if this entity can't be connected to the circuit network.
     */
    readonly circuit_connection_definitions?: CircuitConnectionDefinition[]
    /**
     * The connection definition for entities that are directly connected to this entity via copper cables.
     *
     * This function is temporary in 1.1.x, it will not be available in 2.0.
     */
    readonly copper_connection_definitions: CopperConnectionDefinition[]
    /**
     * The index of the configured request with the highest index for this entity. This means 0 if no requests are set and e.g. 20 if the 20th request slot is configured.
     */
    readonly request_slot_count: uint
    /**
     * The number of filter slots this inserter, loader, or logistic storage container has. 0 if not one of those entities.
     */
    readonly filter_slot_count: uint
    /**
     * The container entity this loader is pointing at/pulling from depending on the {@link LuaEntity#loader_type LuaEntity::loader_type}, if any.
     *
     * _Can only be used if this is Loader_
     */
    readonly loader_container?: LuaEntity
    /**
     * This entity's equipment grid, if any.
     */
    readonly grid?: LuaEquipmentGrid
    /**
     * The graphics variation for this entity. `nil` if this entity doesn't use graphics variations.
     */
    graphics_variation?: uint8
    /**
     * Index of the tree color.
     *
     * _Can only be used if this is Tree_
     */
    tree_color_index: uint8
    /**
     * Maximum index of the tree colors.
     *
     * _Can only be used if this is Tree_
     */
    readonly tree_color_index_max: uint8
    /**
     * Index of the tree stage.
     *
     * _Can only be used if this is Tree_
     */
    tree_stage_index: uint8
    /**
     * Maximum index of the tree stages.
     *
     * _Can only be used if this is Tree_
     */
    readonly tree_stage_index_max: uint8
    /**
     * Index of the tree gray stage
     *
     * _Can only be used if this is Tree_
     */
    tree_gray_stage_index: uint8
    /**
     * Maximum index of the tree gray stages.
     *
     * _Can only be used if this is Tree_
     */
    readonly tree_gray_stage_index_max: uint8
    /**
     * The burner energy source for this entity, if any.
     */
    readonly burner?: LuaBurner
    /**
     * The shooting target for this turret, if any. Can't be set to `nil` via script.
     *
     * _Can only be used if this is Turret_
     */
    shooting_target?: LuaEntity
    /**
     * The target entity for this item-request-proxy, if any.
     *
     * _Can only be used if this is ItemRequestProxy_
     */
    readonly proxy_target?: LuaEntity
    /**
     * The sticker entities attached to this entity, if any.
     */
    readonly stickers?: LuaEntity[]
    /**
     * The entity this sticker is sticked to.
     *
     * _Can only be used if this is Sticker_
     */
    readonly sticked_to: LuaEntity
    /**
     * The vehicle modifiers applied to this entity through the attached stickers.
     */
    readonly sticker_vehicle_modifiers?: {
      readonly speed_modifier: double
      readonly friction_modifier: double
    }
    /**
     * _Can only be used if this is ProgrammableSpeaker_
     */
    parameters: ProgrammableSpeakerParameters
    /**
     * _Can only be used if this is ProgrammableSpeaker_
     */
    alert_parameters: ProgrammableSpeakerAlertParameters
    /**
     * The electric network statistics for this electric pole.
     *
     * _Can only be used if this is ElectricPole_
     */
    readonly electric_network_statistics: LuaFlowStatistics
    /**
     * Returns the current target pickup count of the inserter.
     *
     * This considers the circuit network, manual override and the inserter stack size limit based on technology.
     *
     * _Can only be used if this is Inserter_
     */
    readonly inserter_target_pickup_count: uint
    /**
     * Sets the stack size limit on this inserter. If the stack size is > than the force stack size limit the value is ignored.
     *
     * Set to `0` to reset.
     *
     * _Can only be used if this is Inserter_
     */
    inserter_stack_size_override: uint
    /**
     * The number of products this machine finished crafting in its lifetime.
     *
     * _Can only be used if this is CraftingMachine_
     */
    products_finished: uint
    /**
     * The spawner associated with this unit entity, if any.
     *
     * _Can only be used if this is Unit_
     */
    readonly spawner?: LuaEntity
    /**
     * _Can only be used if this is Spawner_
     */
    readonly spawning_cooldown: double
    /**
     * _Can only be used if this is Spawner_
     */
    readonly absorbed_pollution: double
    /**
     * _Can only be used if this is Spawner_
     */
    readonly spawn_shift: double
    /**
     * The units associated with this spawner entity.
     *
     * _Can only be used if this is Spawner_
     */
    readonly units: LuaEntity[]
    /**
     * The state of this power switch.
     *
     * _Can only be used if this is PowerSwitch_
     */
    power_switch_state: boolean
    /**
     * The effects being applied to this entity, if any. For beacons, this is the effect the beacon is broadcasting.
     */
    readonly effects?: ModuleEffects
    /**
     * Number of beacons affecting this effect receiver. Can only be used when the entity has an effect receiver (AssemblingMachine, Furnace, Lab, MiningDrills)
     */
    readonly beacons_count?: uint
    /**
     * The filters for this infinity container.
     *
     * _Can only be used if this is InfinityContainer_
     */
    infinity_container_filters: InfinityInventoryFilter[]
    /**
     * Whether items not included in this infinity container filters should be removed from the container.
     *
     * _Can only be used if this is InfinityContainer_
     */
    remove_unfiltered_items: boolean
    /**
     * The player index associated with this character corpse.
     *
     * The index is not guaranteed to be valid so it should always be checked first if a player with that index actually exists.
     *
     * _Can only be used if this is CharacterCorpse_
     */
    character_corpse_player_index: uint
    /**
     * The tick this character corpse died at.
     *
     * _Can only be used if this is CharacterCorpse_
     */
    character_corpse_tick_of_death: uint
    /**
     * The reason this character corpse character died. `""` if there is no reason.
     *
     * _Can only be used if this is CharacterCorpse_
     */
    character_corpse_death_cause: LocalisedString
    /**
     * The player this character is associated with, if any. Set to `nil` to clear.
     *
     * The player will be automatically disassociated when a controller is set on the character. Also, all characters associated to a player will be logged off when the player logs off in multiplayer.
     *
     * Reading this property will return a {@link LuaPlayer}, while {@link PlayerIdentification} can be used when writing.
     *
     * A character associated with a player is not directly controlled by any player.
     *
     * _Can only be used if this is Character_
     */
    get associated_player(): LuaPlayer | nil
    set associated_player(value: LuaPlayer | PlayerIdentification | nil)
    /**
     * The last tick this character entity was attacked.
     *
     * _Can only be used if this is Character_
     */
    tick_of_last_attack: uint
    /**
     * The last tick this character entity was damaged.
     *
     * _Can only be used if this is Character_
     */
    tick_of_last_damage: uint
    /**
     * The filter for this splitter, if any is set.
     *
     * _Can only be used if this is Splitter_
     */
    splitter_filter?: LuaItemPrototype
    /**
     * The filter mode for this filter inserter. `nil` if this inserter doesn't use filters.
     *
     * _Can only be used if this is Inserter_
     */
    inserter_filter_mode?: "whitelist" | "blacklist"
    /**
     * The input priority for this splitter.
     *
     * _Can only be used if this is Splitter_
     */
    splitter_input_priority: "left" | "none" | "right"
    /**
     * The output priority for this splitter.
     *
     * _Can only be used if this is Splitter_
     */
    splitter_output_priority: "left" | "none" | "right"
    /**
     * Whether this land mine is armed.
     *
     * _Can only be used if this is LandMine_
     */
    readonly armed: boolean
    /**
     * When locked; the recipe in this assembling machine can't be changed by the player.
     *
     * _Can only be used if this is AssemblingMachine_
     */
    recipe_locked: boolean
    /**
     * The rail entity this train stop is connected to, if any.
     *
     * _Can only be used if this is TrainStop_
     */
    readonly connected_rail?: LuaEntity
    /**
     * Rail direction to which this train stop is binding. This returns a value even when no rails are present.
     *
     * _Can only be used if this is TrainStop_
     */
    readonly connected_rail_direction: defines.rail_direction
    /**
     * The number of trains in this rail block for this rail entity.
     *
     * _Can only be used if this is Rail_
     */
    readonly trains_in_block: uint
    /**
     * The timeout that's left on this landmine in ticks. It describes the time between the landmine being placed and it being armed.
     *
     * _Can only be used if this is LandMine_
     */
    timeout: uint
    /**
     * The current total neighbour bonus of this reactor.
     *
     * _Can only be used if this is Reactor_
     */
    readonly neighbour_bonus: double
    /**
     * The ai settings of this unit.
     *
     * _Can only be used if this is Unit_
     */
    readonly ai_settings: LuaAISettings
    /**
     * The highlight box type of this highlight box entity.
     *
     * _Can only be used if this is HighlightBox_
     */
    highlight_box_type: CursorBoxRenderType
    /**
     * The blink interval of this highlight box entity. `0` indicates no blink.
     *
     * _Can only be used if this is HighlightBox_
     */
    highlight_box_blink_interval: uint
    /**
     * The status of this entity, if any.
     */
    readonly status?: defines.entity_status
    /**
     * Whether equipment grid logistics are enabled while this vehicle is moving.
     *
     * _Can only be used if this is Vehicle_
     */
    enable_logistics_while_moving: boolean
    /**
     * The player that this `simple-entity-with-owner`, `simple-entity-with-force`, `flying-text`, or `highlight-box` is visible to. `nil` when this entity is rendered for all players.
     *
     * Reading this property will return a {@link LuaPlayer}, while {@link PlayerIdentification} can be used when writing.
     */
    get render_player(): LuaPlayer | nil
    set render_player(value: LuaPlayer | PlayerIdentification | nil)
    /**
     * The forces that this `simple-entity-with-owner`, `simple-entity-with-force`, or `flying-text` is visible to. `nil` or an empty array when this entity is rendered for all forces.
     *
     * Reading will always give an array of {@link LuaForce}
     */
    get render_to_forces(): LuaForce[] | nil
    set render_to_forces(value: readonly ForceIdentification[] | nil)
    /**
     * The rail target of this pump, if any.
     *
     * _Can only be used if this is Pump_
     */
    readonly pump_rail_target?: LuaEntity
    /**
     * Returns true if this unit is moving.
     *
     * _Can only be used if this is Unit_
     */
    readonly moving: boolean
    /**
     * Returns the id of the electric network that this entity is connected to, if any.
     */
    readonly electric_network_id?: uint
    /**
     * Whether this character's personal roboports are allowed to dispatch robots.
     *
     * _Can only be used if this is Character_
     */
    allow_dispatching_robots: boolean
    /**
     * Whether this rocket silo automatically launches the rocket when cargo is inserted.
     *
     * _Can only be used if this is RocketSilo_
     */
    auto_launch: boolean
    /**
     * How much energy this generator generated in the last tick.
     *
     * _Can only be used if this is Generator_
     */
    readonly energy_generated_last_tick: double
    /**
     * The storage filter for this logistic storage container.
     */
    storage_filter?: LuaItemPrototype
    /**
     * Whether this requester chest is set to also request from buffer chests.
     *
     * Useable only on entities that have requester slots.
     */
    request_from_buffers: boolean
    /**
     * Whether this corpse will ever fade away.
     *
     * _Can only be used if this is Corpse_
     */
    corpse_expires: boolean
    /**
     * If true, corpse won't be destroyed when entities are placed over it. If false, whether corpse will be removed or not depends on value of {@link import("factorio:prototype").CorpsePrototype#remove_on_entity_placement CorpsePrototype::remove_on_entity_placement}.
     *
     * _Can only be used if this is Corpse_
     */
    corpse_immune_to_entity_placement: boolean
    /**
     * The tags associated with this entity ghost. `nil` if this is not an entity ghost.
     */
    tags?: Tags
    /**
     * The command given to this unit, if any.
     *
     * _Can only be used if this is Unit_
     */
    readonly command?: Command
    /**
     * The distraction command given to this unit, if any.
     *
     * _Can only be used if this is Unit_
     */
    readonly distraction_command?: Command
    /**
     * The ticks until the next trigger effect of this smoke-with-trigger.
     *
     * _Can only be used if this is SmokeWithTrigger_
     */
    time_to_next_effect: uint
    /**
     * Destination of this spidertron's autopilot, if any. Writing `nil` clears all destinations.
     *
     * _Can only be used if this is SpiderVehicle_
     */
    get autopilot_destination(): MapPosition | nil
    set autopilot_destination(value: MapPosition | MapPositionArray | nil)
    /**
     * The queued destination positions of spidertron's autopilot.
     *
     * _Can only be used if this is SpiderVehicle_
     */
    readonly autopilot_destinations: MapPosition[]
    /**
     * Amount of trains related to this particular train stop. Includes train stopped at this train stop (until it finds a path to next target) and trains having this train stop as goal or waypoint.
     *
     * Train may be included multiple times when braking distance covers this train stop multiple times.
     *
     * Value may be read even when train stop has no control behavior.
     *
     * _Can only be used if this is TrainStop_
     */
    readonly trains_count: uint
    /**
     * Amount of trains above which no new trains will be sent to this train stop.
     *
     * Writing nil will disable the limit (will set a maximum possible value).
     *
     * When a train stop has a control behavior with wire connected and set_trains_limit enabled, this value will be overwritten by it.
     *
     * _Can only be used if this is TrainStop_
     */
    trains_limit: uint | nil
    /**
     * (deprecated by 1.1.51) If this entity is a MilitaryTarget. Returns same value as LuaEntity::is_military_target
     */
    readonly is_entity_with_force: boolean
    /**
     * Whether this entity is a MilitaryTarget.
     *
     * Can be written to if {@link LuaEntityPrototype#allow_run_time_change_of_is_military_target LuaEntityPrototype::allow_run_time_change_of_is_military_target} returns `true`.
     */
    is_military_target: boolean
    /**
     * If this entity is EntityWithOwner
     */
    readonly is_entity_with_owner: boolean
    /**
     * If this entity is EntityWithHealth
     */
    readonly is_entity_with_health: boolean
    /**
     * The owner of this combat robot, if any.
     *
     * _Can only be used if this is CombatRobot_
     */
    combat_robot_owner?: LuaEntity
    /**
     * The link ID this linked container is using.
     *
     * _Can only be used if this is LinkedContainer_
     */
    link_id: uint
    /**
     * The follow target of this spidertron, if any.
     *
     * _Can only be used if this is SpiderVehicle_
     */
    follow_target?: LuaEntity
    /**
     * The follow offset of this spidertron, if any entity is being followed. This is randomized each time the follow entity is set.
     *
     * _Can only be used if this is SpiderVehicle_
     */
    follow_offset?: Vector
    /**
     * Type of linked belt. Changing type will also flip direction so the belt is out of the same side.
     *
     * Can only be changed when linked belt is disconnected (has no neighbour set).
     *
     * Can also be used on entity ghost if it contains linked-belt.
     *
     * _Can only be used if this is LinkedBelt_
     */
    linked_belt_type: "input" | "output"
    /**
     * Neighbour to which this linked belt is connected to, if any.
     *
     * Can also be used on entity ghost if it contains linked-belt.
     *
     * May return entity ghost which contains linked belt to which connection is made.
     *
     * _Can only be used if this is LinkedBelt_
     */
    readonly linked_belt_neighbour?: LuaEntity
    /**
     * The current radar scan progress, as a number in range [0, 1].
     *
     * _Can only be used if this is Radar_
     */
    readonly radar_scan_progress: float
    /**
     * The status of this rocket silo entity.
     *
     * _Can only be used if this is RocketSilo_
     */
    readonly rocket_silo_status: defines.rocket_silo_status
    /**
     * Specifies the tiling size of the entity, is used to decide, if the center should be in the center of the tile (odd tile size dimension) or on the tile border (even tile size dimension).
     *
     * Uses the current direction of the entity.
     */
    readonly tile_width: uint
    /**
     * Specifies the tiling size of the entity, is used to decide, if the center should be in the center of the tile (odd tile size dimension) or on the tile border (even tile size dimension).
     *
     * Uses the current direction of the entity.
     */
    readonly tile_height: uint
    /**
     * If the rolling stock is facing train's front.
     *
     * _Can only be used if this is RollingStock_
     */
    readonly is_headed_to_trains_front: boolean
    /**
     * Gives a draw data of the given entity if it supports such data.
     *
     * _Can only be used if this is RollingStock_
     */
    readonly draw_data: RollingStockDrawData
    /**
     * Gives what is the current shape of a transport-belt.
     *
     * Can also be used on entity ghost if it contains transport-belt.
     *
     * _Can only be used if this is TransportBelt_
     */
    readonly belt_shape: "straight" | "left" | "right"
    /**
     * Returns a {@linkplain https://wiki.factorio.com/Rich_text rich text} string containing this entity's position and surface name as a gps tag. {@link LuaGameScript#print Printing} it will ping the location of the entity.
     * @example
     * -- called on a LuaEntity on the default surface it returns:
     * entity.gps_tag -- => "[gps=-4,-9]"
     *
     * -- called on a LuaEntity on "custom-surface" it returns:
     * different_entity.gps_tag -- => "[gps=1,-5,custom-surface]"
     */
    readonly gps_tag: string
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaEntity"
  }
  /**
   * @noSelf
   */
  export interface BaseEntity extends LuaControl {
    /**
     * Gets the entity's output inventory if it has one.
     * @returns A reference to the entity's output inventory.
     */
    get_output_inventory(): LuaInventory | nil
    /**
     * Inventory for storing modules of this entity; `nil` if this entity has no module inventory.
     */
    get_module_inventory(): LuaInventory | nil
    /**
     * The fuel inventory for this entity or `nil` if this entity doesn't have a fuel inventory.
     */
    get_fuel_inventory(): LuaInventory | nil
    /**
     * The burnt result inventory for this entity or `nil` if this entity doesn't have a burnt result inventory.
     */
    get_burnt_result_inventory(): LuaInventory | nil
    /**
     * Whether the entity can be destroyed
     */
    can_be_destroyed(): boolean
    /**
     * Destroys the entity.
     *
     * Not all entities can be destroyed - things such as rails under trains cannot be destroyed until the train is moved or destroyed.
     *
     * ## Raised events
     * - {@link ScriptRaisedDestroyEvent script_raised_destroy}? _instantly_ Raised if the `raise_destroy` flag was set and the entity was successfully destroyed.
     * @returns Returns `false` if the entity was valid and destruction failed, `true` in all other cases.
     */
    destroy(params?: {
      /**
       * Whether neighbouring cliffs should be corrected. Defaults to `false`.
       */
      readonly do_cliff_correction?: boolean
      /**
       * If `true`, {@link ScriptRaisedDestroyEvent script_raised_destroy} will be called. Defaults to `false`.
       */
      readonly raise_destroy?: boolean
    }): boolean
    /**
     * Immediately kills the entity. Does nothing if the entity doesn't have health.
     *
     * Unlike {@link LuaEntity#destroy LuaEntity::destroy}, `die` will trigger the {@link OnEntityDiedEvent on_entity_died} event and the entity will produce a corpse and drop loot if it has any.
     *
     * ## Raised events
     * - {@link OnEntityDiedEvent on_entity_died}? _instantly_ Raised if the entity was successfully killed. If `force` is not specified, the event will blame the `"neutral"` force.
     * - {@link OnPostEntityDiedEvent on_post_entity_died}? _instantly_ Raised if the entity was successfully killed.
     * @param force The force to attribute the kill to.
     * @param cause The cause to attribute the kill to.
     * @returns Whether the entity was successfully killed.
     * @example
     * -- This function can be called with only the `cause` argument and no `force`:
     * entity.die(nil, killer_entity)
     */
    die(force?: ForceIdentification, cause?: LuaEntity): boolean
    /**
     * Test whether this entity's prototype has a certain flag set.
     *
     * `entity.has_flag(f)` is a shortcut for `entity.prototype.has_flag(f)`.
     * @param flag The flag to test.
     * @returns `true` if this entity has the given flag set.
     */
    has_flag(flag: EntityPrototypeFlag): boolean
    /**
     * Connect two devices with a circuit wire or copper cable. Depending on which type of connection should be made, there are different procedures:
     *
     * To connect two electric poles, `target` must be a {@link LuaEntity} that specifies another electric pole. This will connect them with copper cable.
     *
     * To connect two devices with circuit wire, `target` must be a table of type {@link WireConnectionDefinition}.
     * @param target The target with which to establish a connection.
     * @returns Whether the connection was successfully formed.
     */
    connect_neighbour(target: LuaEntity | WireConnectionDefinition): boolean
    /**
     * Disconnect circuit wires or copper cables between devices. Depending on which type of connection should be cut, there are different procedures:
     *
     * {@link https://lua-api.factorio.com/latest/classes/LuaEntity.html#LuaEntity.disconnect_neighbour > Wires can be selectively removed in different ways:}
     * @param target The target with which to cut a connection.
     */
    disconnect_neighbour(target?: defines.wire_type | LuaEntity | WireConnectionDefinition): void
    /**
     * Sets the entity to be deconstructed by construction robots.
     *
     * ## Raised events
     * - {@link OnMarkedForDeconstructionEvent on_marked_for_deconstruction}? _instantly_ Raised if the entity was successfully marked for deconstruction.
     * @param force The force whose robots are supposed to do the deconstruction.
     * @param player The player to set the `last_user` to if any.
     * @returns if the entity was marked for deconstruction.
     */
    order_deconstruction(force: ForceIdentification, player?: PlayerIdentification): boolean
    /**
     * Cancels deconstruction if it is scheduled, does nothing otherwise.
     *
     * ## Raised events
     * - {@link OnCancelledDeconstructionEvent on_cancelled_deconstruction}? _instantly_ Raised if the entity's deconstruction was successfully cancelled.
     * @param force The force who did the deconstruction order.
     * @param player The player to set the `last_user` to if any.
     */
    cancel_deconstruction(force: ForceIdentification, player?: PlayerIdentification): void
    /**
     * Is this entity marked for deconstruction?
     */
    to_be_deconstructed(): boolean
    /**
     * Sets the entity to be upgraded by construction robots.
     *
     * ## Raised events
     * - {@link OnMarkedForUpgradeEvent on_marked_for_upgrade}? _instantly_ Raised if the entity was successfully marked for upgrade.
     * @returns Whether the entity was marked for upgrade.
     */
    order_upgrade(params: {
      /**
       * The force whose robots are supposed to do the upgrade.
       */
      readonly force: ForceIdentification
      /**
       * The prototype of the entity to upgrade to.
       */
      readonly target: EntityPrototypeIdentification
      readonly player?: PlayerIdentification
      /**
       * The new direction if any.
       */
      readonly direction?: defines.direction
    }): boolean
    /**
     * Cancels upgrade if it is scheduled, does nothing otherwise.
     *
     * ## Raised events
     * - {@link OnCancelledUpgradeEvent on_cancelled_upgrade}? _instantly_ Raised if the entity way previously marked for upgrade.
     * @param force The force who did the upgrade order.
     * @param player The player to set the last_user to if any.
     * @returns Whether the cancel was successful.
     */
    cancel_upgrade(force: ForceIdentification, player?: PlayerIdentification): boolean
    /**
     * Is this entity marked for upgrade?
     */
    to_be_upgraded(): boolean
    /**
     * Get a logistic requester slot. Only useable on entities that have requester slots.
     * @param slot The slot index.
     * @returns Contents of the specified slot; `nil` if the given slot contains no request.
     */
    get_request_slot(slot: uint): SimpleItemStack | nil
    /**
     * Set a logistic requester slot. Only useable on entities that have requester slots.
     * @param request What to request.
     * @param slot The slot index.
     * @returns Whether the slot was set.
     */
    set_request_slot(request: ItemStackIdentification, slot: uint): boolean
    /**
     * Clear a logistic requester slot. Only useable on entities that have requester slots.
     * @param slot The slot index.
     */
    clear_request_slot(slot: uint): void
    /**
     * Get the filter for a slot in an inserter, loader, or logistic storage container. The entity must allow filters.
     * @param slot_index Index of the slot to get the filter for.
     * @returns Prototype name of the item being filtered. `nil` if the given slot has no filter.
     */
    get_filter(slot_index: uint): string | nil
    /**
     * Set the filter for a slot in an inserter, loader, or logistic storage container. The entity must allow filters.
     * @param slot_index Index of the slot to set the filter for.
     * @param item Prototype name of the item to filter, or `nil` to clear the filter.
     */
    set_filter(slot_index: uint, item: string | nil): void
    /**
     * Gets the control behavior of the entity (if any).
     * @returns The control behavior or `nil`.
     */
    get_control_behavior(): LuaControlBehavior | nil
    /**
     * Gets (and or creates if needed) the control behavior of the entity.
     * @returns The control behavior or `nil`.
     */
    get_or_create_control_behavior(): LuaControlBehavior | nil
    /**
     * @param wire Wire color of the network connected to this entity.
     * @param circuit_connector The connector to get circuit network for. Must be specified for entities with more than one circuit network connector.
     * @returns The circuit network or nil.
     */
    get_circuit_network(
      wire: defines.wire_type,
      circuit_connector?: defines.circuit_connector_id,
    ): LuaCircuitNetwork | nil
    /**
     * Read a single signal from the combined circuit networks.
     * @param signal The signal to read.
     * @param circuit_connector The connector to get signals for. Must be specified for entities with more than one circuit network connector.
     * @returns The current value of the signal.
     */
    get_merged_signal(signal: SignalID, circuit_connector?: defines.circuit_connector_id): int
    /**
     * The merged circuit network signals or `nil` if there are no signals.
     * @param circuit_connector The connector to get signals for. Must be specified for entities with more than one circuit network connector.
     * @returns The sum of signals on both the red and green networks, or `nil` if it doesn't have a circuit connector.
     */
    get_merged_signals(circuit_connector?: defines.circuit_connector_id): Signal[] | nil
    /**
     * Whether this entity supports a backer name.
     */
    supports_backer_name(): boolean
    /**
     * Copies settings from the given entity onto this entity.
     * @param by_player If provided, the copying is done 'as' this player and {@link OnEntitySettingsPastedEvent on_entity_settings_pasted} is triggered.
     * @returns Any items removed from this entity as a result of copying the settings.
     */
    copy_settings(entity: LuaEntity, by_player?: PlayerIdentification): Record<string, uint>
    /**
     * Gets all the `LuaLogisticPoint`s that this entity owns. Optionally returns only the point specified by the index parameter.
     *
     * When `index` is not given, this will be a single `LuaLogisticPoint` for most entities. For some (such as the player character), it can be zero or more.
     * @param index If provided, only returns the `LuaLogisticPoint` specified by this index.
     */
    get_logistic_point(index: defines.logistic_member_index): LuaLogisticPoint | nil
    get_logistic_point(): Record<defines.logistic_member_index, LuaLogisticPoint> | nil
    /**
     * Reconnect loader, beacon, cliff and mining drill connections to entities that might have been teleported out or in by the script. The game doesn't do this automatically as we don't want to loose performance by checking this in normal games.
     */
    update_connections(): void
    /**
     * Rotates this entity as if the player rotated it.
     *
     * ## Raised events
     * - {@link OnPlayerRotatedEntityEvent on_player_rotated_entity}? _instantly_ Raised if the `by_player` argument was given and the rotation was successful.
     * @returns Whether the rotation was successful.
     * @returns Count of spilled items indexed by their prototype names if `spill_items` was `true`.
     */
    rotate(params?: {
      /**
       * If `true`, rotate the entity in the counter-clockwise direction.
       */
      readonly reverse?: boolean
      /**
       * If not specified, the {@link OnPlayerRotatedEntityEvent on_player_rotated_entity} event will not be fired.
       */
      readonly by_player?: PlayerIdentification
      /**
       * If the player is not given should extra items be spilled or returned as a second return value from this.
       */
      readonly spill_items?: boolean
      /**
       * When true, each spilled item will be flagged with the {@link LuaEntity#to_be_looted LuaEntity::to_be_looted} flag.
       */
      readonly enable_looted?: boolean
      /**
       * When provided the spilled items will be marked for deconstruction by this force.
       */
      readonly force?: ForceIdentification
    }): LuaMultiReturn<[boolean, Record<string, uint> | nil]>
    /**
     * Returns `true` if this entity produces or consumes electricity and is connected to an electric network that has at least one entity that can produce power.
     */
    is_connected_to_electric_network(): boolean
    /**
     * Clones this entity.
     *
     * ## Raised events
     * - {@link OnEntityClonedEvent on_entity_cloned}? _instantly_ Raised if the entity was successfully cloned.
     * @returns The cloned entity or `nil` if this entity can't be cloned/can't be cloned to the given location.
     */
    clone(params: {
      /**
       * The destination position
       */
      readonly position: MapPosition | MapPositionArray
      /**
       * The destination surface
       */
      readonly surface?: LuaSurface
      readonly force?: ForceIdentification
      /**
       * If false, the building effect smoke will not be shown around the new entity.
       */
      readonly create_build_effect_smoke?: boolean
    }): LuaEntity | nil
    /**
     * Get the amount of all or some fluid in this entity.
     *
     * If information about fluid temperatures is required, {@link LuaEntity#fluidbox LuaEntity::fluidbox} should be used instead.
     * @param fluid Prototype name of the fluid to count. If not specified, count all fluids.
     */
    get_fluid_count(fluid?: string): double
    /**
     * Get amounts of all fluids in this entity.
     *
     * If information about fluid temperatures is required, {@link LuaEntity#fluidbox LuaEntity::fluidbox} should be used instead.
     * @returns The amounts, indexed by fluid names.
     */
    get_fluid_contents(): Record<string, double>
    /**
     * Remove fluid from this entity.
     *
     * If temperature is given only fluid matching that exact temperature is removed. If minimum and maximum is given fluid within that range is removed.
     * @returns Amount of fluid actually removed.
     */
    remove_fluid(params: {
      /**
       * Fluid prototype name.
       */
      readonly name: string
      /**
       * Amount to remove
       */
      readonly amount: double
      readonly minimum_temperature?: double
      readonly maximum_temperature?: double
      readonly temperature?: double
    }): double
    /**
     * Insert fluid into this entity. The fluidbox is chosen automatically.
     * @param fluid Fluid to insert.
     * @returns Amount of fluid actually inserted.
     */
    insert_fluid(fluid: Fluid): double
    /**
     * Remove all fluids from this entity.
     */
    clear_fluid_inside(): void
    /**
     * The radius of this entity.
     */
    get_radius(): double
    /**
     * The health ratio of this entity between 1 and 0 (for full health and no health respectively).
     * @returns `nil` if this entity doesn't have health.
     */
    get_health_ratio(): float | nil
    /**
     * Creates the same smoke that is created when you place a building by hand.
     *
     * You can play the building sound to go with it by using {@link LuaSurface#play_sound LuaSurface::play_sound}, eg: `entity.surface.play_sound{path="entity-build/"..entity.prototype.name, position=entity.position}`
     */
    create_build_effect_smoke(): void
    /**
     * Toggle this entity's equipment movement bonus. Does nothing if the entity does not have an equipment grid.
     *
     * This property can also be read and written on the equipment grid of this entity.
     */
    toggle_equipment_movement_bonus(): void
    /**
     * Returns the new entity prototype.
     * @returns `nil` if this entity is not marked for upgrade.
     */
    get_upgrade_target(): LuaEntityPrototype | nil
    /**
     * Returns the new entity direction after upgrading.
     * @returns `nil` if this entity is not marked for upgrade.
     */
    get_upgrade_direction(): defines.direction | nil
    /**
     * Returns the amount of damage to be taken by this entity.
     * @returns `nil` if this entity does not have health.
     */
    get_damage_to_be_taken(): float | nil
    /**
     * Mines this entity.
     *
     * 'Standard' operation is to keep calling `LuaEntity.mine` with an inventory until all items are transferred and the items dealt with.
     *
     * The result of mining the entity (the item(s) it produces when mined) will be dropped on the ground if they don't fit into the provided inventory.
     *
     * ## Raised events
     * - {@link ScriptRaisedDestroyEvent script_raised_destroy}? _instantly_ Raised if the `raise_destroyed` flag was set and the entity was successfully mined.
     * @returns Whether mining succeeded.
     */
    mine(params?: {
      /**
       * If provided the item(s) will be transferred into this inventory. If provided, this must be an inventory created with {@link LuaGameScript#create_inventory LuaGameScript::create_inventory} or be a basic inventory owned by some entity.
       */
      readonly inventory?: LuaInventory
      /**
       * If true, when the item(s) don't fit into the given inventory the entity is force mined. If false, the mining operation fails when there isn't enough room to transfer all of the items into the inventory. Defaults to false. This is ignored and acts as `true` if no inventory is provided.
       */
      readonly force?: boolean
      /**
       * If true, {@link ScriptRaisedDestroyEvent script_raised_destroy} will be raised. Defaults to `true`.
       */
      readonly raise_destroyed?: boolean
      /**
       * If true, the minable state of the entity is ignored. Defaults to `false`. If false, an entity that isn't minable (set as not-minable in the prototype or isn't minable for other reasons) will fail to be mined.
       */
      readonly ignore_minable?: boolean
    }): boolean
    /**
     * Triggers spawn_decoration actions defined in the entity prototype or does nothing if entity is not "turret" or "unit-spawner".
     */
    spawn_decorations(): void
    /**
     * Can wires reach between these entities.
     */
    can_wires_reach(entity: LuaEntity): boolean
    /**
     * Is this entity or tile ghost or item request proxy registered for construction?
     *
     * If false, it means a construction robot has been dispatched to build the entity, or it is not an entity that can be constructed.
     */
    is_registered_for_construction(): boolean
    /**
     * Is this entity registered for deconstruction with this force?
     *
     * If false, it means a construction robot has been dispatched to deconstruct it, or it is not marked for deconstruction.
     *
     * The complexity is effectively O(1) - it depends on the number of objects targeting this entity which should be small enough.
     * @param force The force construction manager to check.
     */
    is_registered_for_deconstruction(force: ForceIdentification): boolean
    /**
     * Is this entity registered for upgrade?
     *
     * If false, it means a construction robot has been dispatched to upgrade it, or it is not marked for upgrade.
     *
     * This is worst-case O(N) complexity where N is the current number of things in the upgrade queue.
     */
    is_registered_for_upgrade(): boolean
    /**
     * Is this entity registered for repair?
     *
     * If false, it means a construction robot has been dispatched to upgrade it, or it is not damaged.
     *
     * This is worst-case O(N) complexity where N is the current number of things in the repair queue.
     */
    is_registered_for_repair(): boolean
    /**
     * Returns a table with all beacons affecting this effect receiver. Can only be used when the entity has an effect receiver (AssemblingMachine, Furnace, Lab, MiningDrills)
     */
    get_beacons(): LuaEntity[] | nil
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Name of the entity prototype. E.g. "inserter" or "filter-inserter".
     */
    readonly name: string
    /**
     * Localised name of the entity.
     */
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    /**
     * The entity prototype type of this entity.
     */
    readonly type: EntityType
    /**
     * Deactivating an entity will stop all its operations (car will stop moving, inserters will stop working, fish will stop moving etc).
     *
     * Entities that are not active naturally can't be set to be active (setting it to be active will do nothing)
     *
     * Ghosts, simple smoke, and corpses can't be modified at this time.
     *
     * It is even possible to set the character to not be active, so he can't move and perform most of the tasks.
     */
    active: boolean
    /**
     * If set to `false`, this entity can't be damaged and won't be attacked automatically. It can however still be mined.
     *
     * Entities that are indestructible naturally (they have no health, like smoke, resource etc) can't be set to be destructible.
     */
    destructible: boolean
    /**
     * Not minable entities can still be destroyed.
     *
     * Entities that are not minable naturally (like smoke, character, enemy units etc) can't be set to minable.
     */
    minable: boolean
    /**
     * When entity is not to be rotatable (inserter, transport belt etc), it can't be rotated by player using the R key.
     *
     * Entities that are not rotatable naturally (like chest or furnace) can't be set to be rotatable.
     */
    rotatable: boolean
    /**
     * Player can't open gui of this entity and he can't quick insert/input stuff in to the entity when it is not operable.
     */
    operable: boolean
    /**
     * The current health of the entity, if any. Health is automatically clamped to be between `0` and max health (inclusive). Entities with a health of `0` can not be attacked.
     *
     * To get the maximum possible health of this entity, see {@link LuaEntityPrototype#max_health LuaEntityPrototype::max_health} on its prototype.
     */
    health?: float
    /**
     * The current direction this entity is facing.
     */
    direction: defines.direction
    /**
     * Whether the entity has direction. When it is false for this entity, it will always return north direction when asked for.
     */
    readonly supports_direction: boolean
    /**
     * The smooth orientation of this entity.
     */
    orientation: RealOrientation
    /**
     * The relative orientation of the vehicle turret, artillery turret, artillery wagon. `nil` if this entity isn't a vehicle with a vehicle turret or artillery turret/wagon.
     *
     * Writing does nothing if the vehicle doesn't have a turret.
     */
    relative_turret_orientation?: RealOrientation
    /**
     * The current speed if this is a car, rolling stock, projectile or spidertron, or the maximum speed if this is a unit. The speed is in tiles per tick. `nil` if this is not a car, rolling stock, unit, projectile or spidertron.
     *
     * Only the speed of units, cars, and projectiles are writable.
     */
    speed?: float
    /**
     * The entity prototype of this entity.
     */
    readonly prototype: LuaEntityPrototype
    /**
     * Position where the entity puts its stuff.
     *
     * Meaningful only for entities that put stuff somewhere, such as mining drills or inserters. Mining drills can't have their drop position changed; inserters must have `allow_custom_vectors` set to true on their prototype to allow changing the drop position.
     */
    get drop_position(): MapPosition
    set drop_position(value: MapPosition | MapPositionArray)
    /**
     * The entity this entity is putting its items to. If there are multiple possible entities at the drop-off point, writing to this attribute allows a mod to choose which one to drop off items to. The entity needs to collide with the tile box under the drop-off position. `nil` if there is no entity to put items to, or if this is not an entity that puts items somewhere.
     */
    drop_target?: LuaEntity
    /**
     * Energy stored in the entity (heat in furnace, energy stored in electrical devices etc.). Always 0 for entities that don't have the concept of energy stored inside.
     * @example
     * game.player.print("Machine energy: " .. game.player.selected.energy .. "J")
     * game.player.selected.energy = 3000
     */
    energy: double
    /**
     * The temperature of this entity's heat energy source. `nil` if this entity does not use a heat energy source.
     */
    temperature?: double
    /**
     * The train this rolling stock belongs to, if any. `nil` if this is not a rolling stock.
     */
    readonly train?: LuaTrain
    /**
     * A list of neighbours for certain types of entities. Applies to electric poles, power switches, underground belts, walls, gates, reactors, cliffs, and pipe-connectable entities.
     *
     * {@link https://lua-api.factorio.com/latest/classes/LuaEntity.html#LuaEntity.neighbours > Differs depending on the type of entity:}
     */
    readonly neighbours: Record<string, LuaEntity[]> | LuaEntity[][] | LuaEntity
    /**
     * Fluidboxes of this entity.
     */
    set fluidbox(value: LuaFluidBox)
    /**
     * The backer name assigned to this entity. Entities that support backer names are labs, locomotives, radars, roboports, and train stops. `nil` if this entity doesn't support backer names.
     *
     * While train stops get the name of a backer when placed down, players can rename them if they want to. In this case, `backer_name` returns the player-given name of the entity.
     *
     * ## Raised events
     * - {@link OnEntityRenamedEvent on_entity_renamed} _instantly_
     */
    backer_name?: string
    /**
     * The label on this spider-vehicle entity, if any. `nil` if this is not a spider-vehicle.
     *
     * ## Raised events
     * - {@link OnEntityRenamedEvent on_entity_renamed} _instantly_
     */
    entity_label?: string
    /**
     * The color of this character, rolling stock, train stop, car, spider-vehicle, flying text, corpse or simple-entity-with-owner. `nil` if this entity doesn't use custom colors.
     *
     * Car color is overridden by the color of the current driver/passenger, if there is one.
     */
    get color(): Color | nil
    set color(value: Color | ColorArray | nil)
    /**
     * The productivity bonus of this entity.
     *
     * This includes force based bonuses as well as beacon/module bonuses.
     */
    readonly productivity_bonus: double
    /**
     * The pollution bonus of this entity.
     */
    readonly pollution_bonus: double
    /**
     * The speed bonus of this entity. This includes force based bonuses as well as beacon/module bonuses.
     */
    readonly speed_bonus: double
    /**
     * The consumption bonus of this entity.
     */
    readonly consumption_bonus: double
    /**
     * The logistic network this entity is a part of, or `nil` if this entity is not a part of any logistic network.
     */
    logistic_network: LuaLogisticNetwork | nil
    /**
     * The logistic cell this entity is a part of. Will be `nil` if this entity is not a part of any logistic cell.
     */
    readonly logistic_cell: LuaLogisticCell | nil
    /**
     * Items this ghost will request when revived or items this item request proxy is requesting.
     *
     * The result is a dictionary mapping each item prototype name to the required count.
     */
    item_requests: Record<string, uint>
    /**
     * The buffer size for the electric energy source. `nil` if the entity doesn't have an electric energy source.
     *
     * Write access is limited to the ElectricEnergyInterface type.
     */
    electric_buffer_size?: double
    /**
     * The input flow limit for the electric energy source. `nil` if the entity doesn't have an electric energy source.
     */
    readonly electric_input_flow_limit?: double
    /**
     * The output flow limit for the electric energy source. `nil` if the entity doesn't have an electric energy source.
     */
    readonly electric_output_flow_limit?: double
    /**
     * The electric drain for the electric energy source. `nil` if the entity doesn't have an electric energy source.
     */
    readonly electric_drain?: double
    /**
     * The emissions for the electric energy source. `nil` if the entity doesn't have an electric energy source.
     */
    readonly electric_emissions?: double
    /**
     * A unique number identifying this entity for the lifetime of the save. These are allocated sequentially, and not re-used (until overflow).
     *
     * Only entities inheriting from {@link import("factorio:prototype").EntityWithOwnerPrototype EntityWithOwnerPrototype}, as well as {@link import("factorio:prototype").ItemRequestProxyPrototype ItemRequestProxyPrototype} and {@link import("factorio:prototype").EntityGhostPrototype EntityGhostPrototype} are assigned a unit number. Returns `nil` otherwise.
     */
    readonly unit_number?: UnitNumber
    /**
     * The mining progress for this mining drill. Is a number in range [0, mining_target.prototype.mineable_properties.mining_time]. `nil` if this isn't a mining drill.
     */
    mining_progress?: double
    /**
     * The bonus mining progress for this mining drill. Read yields a number in range [0, mining_target.prototype.mineable_properties.mining_time]. `nil` if this isn't a mining drill.
     */
    bonus_mining_progress?: double
    /**
     * {@link LuaEntityPrototype#collision_box LuaEntityPrototype::collision_box} around entity's given position and respecting the current entity orientation.
     */
    readonly bounding_box: BoundingBox
    /**
     * The secondary bounding box of this entity or `nil` if it doesn't have one.
     *
     * This only exists for curved rails, and is automatically determined by the game.
     */
    readonly secondary_bounding_box?: BoundingBox
    /**
     * {@link LuaEntityPrototype#selection_box LuaEntityPrototype::selection_box} around entity's given position and respecting the current entity orientation.
     */
    readonly selection_box: BoundingBox
    /**
     * The secondary selection box of this entity or `nil` if it doesn't have one.
     *
     * This only exists for curved rails, and is automatically determined by the game.
     */
    readonly secondary_selection_box?: BoundingBox
    /**
     * Entities that are directly connected to this entity via the circuit network. `nil` if this entity can't be connected to the circuit network.
     */
    readonly circuit_connected_entities?: {
      /**
       * Entities connected via the red wire.
       */
      readonly red: LuaEntity[]
      /**
       * Entities connected via the green wire.
       */
      readonly green: LuaEntity[]
    }
    /**
     * The connection definition for entities that are directly connected to this entity via the circuit network. `nil` if this entity can't be connected to the circuit network.
     */
    readonly circuit_connection_definitions?: CircuitConnectionDefinition[]
    /**
     * The connection definition for entities that are directly connected to this entity via copper cables.
     *
     * This function is temporary in 1.1.x, it will not be available in 2.0.
     */
    readonly copper_connection_definitions: CopperConnectionDefinition[]
    /**
     * The index of the configured request with the highest index for this entity. This means 0 if no requests are set and e.g. 20 if the 20th request slot is configured.
     */
    readonly request_slot_count: uint
    /**
     * The number of filter slots this inserter, loader, or logistic storage container has. 0 if not one of those entities.
     */
    readonly filter_slot_count: uint
    /**
     * This entity's equipment grid, if any.
     */
    readonly grid?: LuaEquipmentGrid
    /**
     * The graphics variation for this entity. `nil` if this entity doesn't use graphics variations.
     */
    graphics_variation?: uint8
    /**
     * The burner energy source for this entity, if any.
     */
    readonly burner?: LuaBurner
    /**
     * The sticker entities attached to this entity, if any.
     */
    readonly stickers?: LuaEntity[]
    /**
     * The vehicle modifiers applied to this entity through the attached stickers.
     */
    readonly sticker_vehicle_modifiers?: {
      readonly speed_modifier: double
      readonly friction_modifier: double
    }
    /**
     * The effects being applied to this entity, if any. For beacons, this is the effect the beacon is broadcasting.
     */
    readonly effects?: ModuleEffects
    /**
     * Number of beacons affecting this effect receiver. Can only be used when the entity has an effect receiver (AssemblingMachine, Furnace, Lab, MiningDrills)
     */
    readonly beacons_count?: uint
    /**
     * The status of this entity, if any.
     */
    readonly status?: defines.entity_status
    /**
     * The player that this `simple-entity-with-owner`, `simple-entity-with-force`, `flying-text`, or `highlight-box` is visible to. `nil` when this entity is rendered for all players.
     *
     * Reading this property will return a {@link LuaPlayer}, while {@link PlayerIdentification} can be used when writing.
     */
    get render_player(): LuaPlayer | nil
    set render_player(value: LuaPlayer | PlayerIdentification | nil)
    /**
     * The forces that this `simple-entity-with-owner`, `simple-entity-with-force`, or `flying-text` is visible to. `nil` or an empty array when this entity is rendered for all forces.
     *
     * Reading will always give an array of {@link LuaForce}
     */
    get render_to_forces(): LuaForce[] | nil
    set render_to_forces(value: readonly ForceIdentification[] | nil)
    /**
     * Returns the id of the electric network that this entity is connected to, if any.
     */
    readonly electric_network_id?: uint
    /**
     * The storage filter for this logistic storage container.
     */
    storage_filter?: LuaItemPrototype
    /**
     * Whether this requester chest is set to also request from buffer chests.
     *
     * Useable only on entities that have requester slots.
     */
    request_from_buffers: boolean
    /**
     * The tags associated with this entity ghost. `nil` if this is not an entity ghost.
     */
    tags?: Tags
    /**
     * (deprecated by 1.1.51) If this entity is a MilitaryTarget. Returns same value as LuaEntity::is_military_target
     */
    readonly is_entity_with_force: boolean
    /**
     * Whether this entity is a MilitaryTarget.
     *
     * Can be written to if {@link LuaEntityPrototype#allow_run_time_change_of_is_military_target LuaEntityPrototype::allow_run_time_change_of_is_military_target} returns `true`.
     */
    is_military_target: boolean
    /**
     * If this entity is EntityWithOwner
     */
    readonly is_entity_with_owner: boolean
    /**
     * If this entity is EntityWithHealth
     */
    readonly is_entity_with_health: boolean
    /**
     * Specifies the tiling size of the entity, is used to decide, if the center should be in the center of the tile (odd tile size dimension) or on the tile border (even tile size dimension).
     *
     * Uses the current direction of the entity.
     */
    readonly tile_width: uint
    /**
     * Specifies the tiling size of the entity, is used to decide, if the center should be in the center of the tile (odd tile size dimension) or on the tile border (even tile size dimension).
     *
     * Uses the current direction of the entity.
     */
    readonly tile_height: uint
    /**
     * Returns a {@linkplain https://wiki.factorio.com/Rich_text rich text} string containing this entity's position and surface name as a gps tag. {@link LuaGameScript#print Printing} it will ping the location of the entity.
     * @example
     * -- called on a LuaEntity on the default surface it returns:
     * entity.gps_tag -- => "[gps=-4,-9]"
     *
     * -- called on a LuaEntity on "custom-surface" it returns:
     * different_entity.gps_tag -- => "[gps=1,-5,custom-surface]"
     */
    readonly gps_tag: string
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaEntity"
  }
  /**
   * @noSelf
   */
  export interface EntityWithHealthEntity extends BaseEntity {
    /**
     * Damages the entity.
     *
     * ## Raised events
     * - {@link OnEntityDamagedEvent on_entity_damaged} _instantly_
     *
     * _Can only be used if this is EntityWithHealth_
     * @param damage The amount of damage to be done.
     * @param force The force that will be doing the damage.
     * @param type The type of damage to be done, defaults to `"impact"`. Can't be `nil`.
     * @param dealer The entity to consider as the damage dealer. Needs to be on the same surface as the entity being damaged.
     * @returns the total damage actually applied after resistances.
     */
    damage(damage: float, force: ForceIdentification, type?: string, dealer?: LuaEntity): float
  }
  /**
   * @noSelf
   */
  export interface UnitEntity extends BaseEntity {
    /**
     * Give the entity a command.
     *
     * _Can only be used if this is Unit_
     */
    set_command(command: CommandWrite): void
    /**
     * Give the entity a distraction command.
     *
     * _Can only be used if this is Unit_
     */
    set_distraction_command(command: CommandWrite): void
    /**
     * Has this unit been assigned a command?
     *
     * _Can only be used if this is Unit_
     */
    has_command(): boolean
    /**
     * Release the unit from the spawner which spawned it. This allows the spawner to continue spawning additional units.
     *
     * _Can only be used if this is Unit_
     */
    release_from_spawner(): void
    /**
     * The current speed of this unit in tiles per tick, taking into account any walking speed modifier given by the tile the unit is standing on. `nil` if this is not a unit.
     *
     * _Can only be used if this is Unit_
     */
    readonly effective_speed?: float
    /**
     * The unit group this unit is a member of, if any.
     *
     * _Can only be used if this is Unit_
     */
    readonly unit_group?: LuaUnitGroup
    /**
     * The spawner associated with this unit entity, if any.
     *
     * _Can only be used if this is Unit_
     */
    readonly spawner?: LuaEntity
    /**
     * The ai settings of this unit.
     *
     * _Can only be used if this is Unit_
     */
    readonly ai_settings: LuaAISettings
    /**
     * Returns true if this unit is moving.
     *
     * _Can only be used if this is Unit_
     */
    readonly moving: boolean
    /**
     * The command given to this unit, if any.
     *
     * _Can only be used if this is Unit_
     */
    readonly command?: Command
    /**
     * The distraction command given to this unit, if any.
     *
     * _Can only be used if this is Unit_
     */
    readonly distraction_command?: Command
  }
  /**
   * @noSelf
   */
  export interface EntityGhostEntity extends BaseEntity {
    /**
     * Same as {@link LuaEntity#has_flag LuaEntity::has_flag}, but targets the inner entity on a entity ghost.
     *
     * _Can only be used if this is EntityGhost_
     * @param flag The flag to test.
     * @returns `true` if the entity has the given flag set.
     */
    ghost_has_flag(flag: EntityPrototypeFlag): boolean
    /**
     * The {@link LuaEntity#unit_number unit_number} of the entity contained in this ghost. It is the same as the unit number of the {@link import("factorio:prototype").EntityWithOwnerPrototype EntityWithOwnerPrototype} that was destroyed to create this ghost. If it was created by other means, or if the inner entity does not support unit numbers, this property is `nil`.
     *
     * _Can only be used if this is EntityGhost_
     */
    readonly ghost_unit_number?: UnitNumber
  }
  /**
   * @noSelf
   */
  export interface MarketEntity extends BaseEntity {
    /**
     * Offer a thing on the market.
     *
     * _Can only be used if this is Market_
     * @example
     * -- Adds market offer, 1 copper ore for 10 iron ore
     * market.add_market_item{price={{"iron-ore", 10}}, offer={type="give-item", item="copper-ore"}}
     * @example
     * -- Adds market offer, 1 copper ore for 5 iron ore and 5 stone ore
     * market.add_market_item{price={{"iron-ore", 5}, {"stone", 5}}, offer={type="give-item", item="copper-ore"}}
     */
    add_market_item(offer: Offer): void
    /**
     * Remove an offer from a market.
     *
     * The other offers are moved down to fill the gap created by removing the offer, which decrements the overall size of the offer array.
     *
     * _Can only be used if this is Market_
     * @param offer Index of offer to remove.
     * @returns `true` if the offer was successfully removed; `false` when the given index was not valid.
     */
    remove_market_item(offer: uint): boolean
    /**
     * Get all offers in a market as an array.
     *
     * _Can only be used if this is Market_
     */
    get_market_items(): Offer[]
    /**
     * Removes all offers from a market.
     *
     * _Can only be used if this is Market_
     */
    clear_market_items(): void
  }
  /**
   * @noSelf
   */
  export interface CraftingMachineEntity extends BaseEntity {
    /**
     * Returns whether a craft is currently in process. It does not indicate whether progress is currently being made, but whether a crafting process has been started in this machine.
     *
     * _Can only be used if this is CraftingMachine_
     */
    is_crafting(): boolean
    /**
     * Current recipe being assembled by this machine, if any.
     *
     * _Can only be used if this is CraftingMachine_
     */
    get_recipe(): LuaRecipe | nil
    /**
     * The current crafting speed, including speed bonuses from modules and beacons.
     *
     * _Can only be used if this is CraftingMachine_
     */
    readonly crafting_speed: double
    /**
     * The current crafting progress, as a number in range [0, 1].
     *
     * _Can only be used if this is CraftingMachine_
     */
    crafting_progress: float
    /**
     * The current productivity bonus progress, as a number in range [0, 1].
     *
     * _Can only be used if this is CraftingMachine_
     */
    bonus_progress: double
    /**
     * The number of products this machine finished crafting in its lifetime.
     *
     * _Can only be used if this is CraftingMachine_
     */
    products_finished: uint
  }
  /**
   * @noSelf
   */
  export interface GateEntity extends BaseEntity {
    /**
     * _Can only be used if this is Gate_
     * @returns `true` if this gate is currently opened.
     */
    is_opened(): boolean
    /**
     * _Can only be used if this is Gate_
     * @returns `true` if this gate is currently opening.
     */
    is_opening(): boolean
    /**
     * _Can only be used if this is Gate_
     * @returns `true` if this gate is currently closed.
     */
    is_closed(): boolean
    /**
     * _Can only be used if this is Gate_
     * @returns `true` if this gate is currently closing
     */
    is_closing(): boolean
    /**
     * _Can only be used if this is Gate_
     * @param force The force that requests the gate to be open.
     * @param extra_time Extra ticks to stay open.
     */
    request_to_open(force: ForceIdentification, extra_time?: uint): void
    /**
     * _Can only be used if this is Gate_
     * @param force The force that requests the gate to be closed.
     */
    request_to_close(force: ForceIdentification): void
  }
  /**
   * @noSelf
   */
  export interface TransportBeltConnectableEntity extends BaseEntity {
    /**
     * Get a transport line of a belt or belt connectable entity.
     *
     * _Can only be used if this is TransportBeltConnectable_
     * @param index Index of the requested transport line. Transport lines are 1-indexed.
     */
    get_transport_line(index: uint): LuaTransportLine
    /**
     * Get the maximum transport line index of a belt or belt connectable entity.
     *
     * _Can only be used if this is TransportBeltConnectable_
     */
    get_max_transport_line_index(): uint
    /**
     * The belt connectable neighbours of this belt connectable entity. Only entities that input to or are outputs of this entity.
     *
     * Does not contain the other end of an underground belt, see {@link LuaEntity#neighbours LuaEntity::neighbours} for that.
     *
     * _Can only be used if this is TransportBeltConnectable_
     */
    readonly belt_neighbours: {
      /**
       * Array of transport belt connectable entities.
       */
      readonly inputs: LuaEntity[]
      /**
       * Array of transport belt connectable entities.
       */
      readonly outputs: LuaEntity[]
    }
  }
  /**
   * @noSelf
   */
  export interface RocketSiloEntity extends BaseEntity {
    /**
     * ## Raised events
     * - {@link OnRocketLaunchOrderedEvent on_rocket_launch_ordered}? _instantly_ Raised if the rocket launch was successfully initiated.
     *
     * _Can only be used if this is RocketSilo_
     * @returns `true` if the rocket was successfully launched. Return value of `false` means the silo is not ready for launch.
     */
    launch_rocket(): boolean
    /**
     * Number of rocket parts in the silo.
     *
     * _Can only be used if this is RocketSilo_
     */
    rocket_parts: uint
    /**
     * Whether this rocket silo automatically launches the rocket when cargo is inserted.
     *
     * _Can only be used if this is RocketSilo_
     */
    auto_launch: boolean
    /**
     * The status of this rocket silo entity.
     *
     * _Can only be used if this is RocketSilo_
     */
    readonly rocket_silo_status: defines.rocket_silo_status
  }
  /**
   * @noSelf
   */
  export interface GhostEntity extends BaseEntity {
    /**
     * Revive a ghost, which turns it from a ghost into a real entity or tile.
     *
     * ## Raised events
     * - {@link ScriptRaisedReviveEvent script_raised_revive}? _instantly_ Raised if this was an entity ghost and the `raise_revive` flag was set and the entity was successfully revived.
     * - {@link ScriptRaisedSetTilesEvent script_raised_set_tiles}? _instantly_ Raised if this was a tile ghost and the `raise_revive` flag was set and the tile was successfully revived.
     *
     * _Can only be used if this is Ghost_
     * @returns Any items the new real entity collided with or `nil` if the ghost could not be revived.
     * @returns The revived entity if an entity ghost was successfully revived.
     * @returns The item request proxy if it was requested with `return_item_request_proxy`.
     */
    revive(params?: {
      /**
       * If `true` the function will return item request proxy as the third return value.
       */
      readonly return_item_request_proxy?: boolean
      /**
       * If true, and an entity ghost; {@link ScriptRaisedReviveEvent script_raised_revive} will be called. Else if true, and a tile ghost; {@link ScriptRaisedSetTilesEvent script_raised_set_tiles} will be called.
       */
      readonly raise_revive?: boolean
    }): LuaMultiReturn<[Record<string, uint> | nil, LuaEntity | nil, LuaEntity | nil]>
    /**
     * Revives a ghost silently, so the revival makes no sound and no smoke is created.
     *
     * ## Raised events
     * - {@link ScriptRaisedReviveEvent script_raised_revive}? _instantly_ Raised if this was an entity ghost and the `raise_revive` flag was set and the entity was successfully revived.
     * - {@link ScriptRaisedSetTilesEvent script_raised_set_tiles}? _instantly_ Raised if this was a tile ghost and the `raise_revive` flag was set and the tile was successfully revived.
     *
     * _Can only be used if this is Ghost_
     * @returns Any items the new real entity collided with or `nil` if the ghost could not be revived.
     * @returns The revived entity if an entity ghost was successfully revived.
     * @returns The item request proxy if it was requested with `return_item_request_proxy`.
     */
    silent_revive(params?: {
      /**
       * If `true` the function will return item request proxy as the third parameter.
       */
      readonly return_item_request_proxy?: boolean
      /**
       * If true, and an entity ghost; {@link ScriptRaisedReviveEvent script_raised_revive} will be called. Else if true, and a tile ghost; {@link ScriptRaisedSetTilesEvent script_raised_set_tiles} will be called.
       */
      readonly raise_revive?: boolean
    }): LuaMultiReturn<[Record<string, uint> | nil, LuaEntity | nil, LuaEntity | nil]>
    /**
     * Name of the entity or tile contained in this ghost
     *
     * _Can only be used if this is Ghost_
     */
    readonly ghost_name: string
    /**
     * Localised name of the entity or tile contained in this ghost.
     *
     * _Can only be used if this is Ghost_
     */
    readonly ghost_localised_name: LocalisedString
    /**
     * _Can only be used if this is Ghost_
     */
    readonly ghost_localised_description: LocalisedString
    /**
     * The prototype type of the entity or tile contained in this ghost.
     *
     * _Can only be used if this is Ghost_
     */
    readonly ghost_type: EntityType
    /**
     * The prototype of the entity or tile contained in this ghost.
     *
     * _Can only be used if this is Ghost_
     */
    readonly ghost_prototype: LuaEntityPrototype | LuaTilePrototype
    /**
     * The ticks left before a ghost, combat robot, highlight box, smoke with trigger or sticker is destroyed.
     *
     * For ghosts set to uint32 max (4 294 967 295) to never expire.
     *
     * For ghosts can not be set higher than {@link LuaForce#ghost_time_to_live LuaForce::ghost_time_to_live} of the entity's force.
     *
     * _Can only be used if this is Ghost, CombatRobot, HighlightBox, SmokeWithTrigger or Sticker_
     */
    time_to_live: uint
  }
  /**
   * @noSelf
   */
  export interface RailEntity extends BaseEntity {
    /**
     * _Can only be used if this is Rail_
     * @returns Rail connected in the specified manner to this one, `nil` if unsuccessful.
     * @returns Rail direction of the returned rail which points to origin rail
     * @returns Turn to be taken when going back from returned rail to origin rail
     */
    get_connected_rail(params: {
      readonly rail_direction: defines.rail_direction
      readonly rail_connection_direction: defines.rail_connection_direction
    }): LuaMultiReturn<[LuaEntity | nil, defines.rail_direction | nil, defines.rail_connection_direction | nil]>
    /**
     * Get the rail signal or train stop at the start/end of the rail segment this rail is in.
     *
     * A rail segment is a continuous section of rail with no branches, signals, nor train stops.
     *
     * _Can only be used if this is Rail_
     * @param direction The direction of travel relative to this rail.
     * @param in_else_out If true, gets the entity at the entrance of the rail segment, otherwise gets the entity at the exit of the rail segment.
     * @returns `nil` if the rail segment doesn't start/end with a signal nor a train stop.
     */
    get_rail_segment_entity(direction: defines.rail_direction, in_else_out: boolean): LuaEntity | nil
    /**
     * Get the rail at the end of the rail segment this rail is in.
     *
     * A rail segment is a continuous section of rail with no branches, signals, nor train stops.
     *
     * _Can only be used if this is Rail_
     * @returns The rail entity.
     * @returns A rail direction pointing out of the rail segment from the end rail.
     */
    get_rail_segment_end(direction: defines.rail_direction): LuaMultiReturn<[LuaEntity, defines.rail_direction]>
    /**
     * Get all rails of a rail segment this rail is in.
     *
     * A rail segment is a continuous section of rail with no branches, signals, nor train stops.
     *
     * _Can only be used if this is Rail_
     * @param direction Selects end of this rail that points to a rail segment end from which to start returning rails
     * @returns Rails of this rail segment
     */
    get_rail_segment_rails(direction: defines.rail_direction): LuaEntity[]
    /**
     * Get the length of the rail segment this rail is in.
     *
     * A rail segment is a continuous section of rail with no branches, signals, nor train stops.
     *
     * _Can only be used if this is Rail_
     */
    get_rail_segment_length(): double
    /**
     * Get a rail from each rail segment that overlaps with this rail's rail segment.
     *
     * A rail segment is a continuous section of rail with no branches, signals, nor train stops.
     *
     * _Can only be used if this is Rail_
     */
    get_rail_segment_overlaps(): LuaEntity[]
    /**
     * Checks if this rail and other rail both belong to the same rail segment.
     *
     * _Can only be used if this is Rail_
     */
    is_rail_in_same_rail_segment_as(other_rail: LuaEntity): boolean
    /**
     * Checks if this rail and other rail both belong to the same rail block.
     *
     * _Can only be used if this is Rail_
     */
    is_rail_in_same_rail_block_as(other_rail: LuaEntity): boolean
    /**
     * Returns all signals guarding entrance to a rail block this rail belongs to.
     *
     * _Can only be used if this is Rail_
     */
    get_inbound_signals(): LuaEntity[]
    /**
     * Returns all signals guarding exit from a rail block this rail belongs to.
     *
     * _Can only be used if this is Rail_
     */
    get_outbound_signals(): LuaEntity[]
    /**
     * The number of trains in this rail block for this rail entity.
     *
     * _Can only be used if this is Rail_
     */
    readonly trains_in_block: uint
  }
  /**
   * @noSelf
   */
  export interface RailSignalEntity extends BaseEntity {
    /**
     * Get the rails that this signal is connected to.
     *
     * _Can only be used if this is RailSignal or RailChainSignal_
     */
    get_connected_rails(): LuaEntity[]
    /**
     * Returns all parent signals. Parent signals are always RailChainSignal. Parent signals are those signals that are checking state of this signal to determine their own chain state.
     *
     * _Can only be used if this is RailSignal or RailChainSignal_
     */
    get_parent_signals(): LuaEntity[]
    /**
     * The state of this rail signal.
     *
     * _Can only be used if this is RailSignal or RailChainSignal_
     */
    readonly signal_state: defines.signal_state
  }
  /**
   * @noSelf
   */
  export interface RailChainSignalEntity extends BaseEntity {
    /**
     * Get the rails that this signal is connected to.
     *
     * _Can only be used if this is RailSignal or RailChainSignal_
     */
    get_connected_rails(): LuaEntity[]
    /**
     * Returns all parent signals. Parent signals are always RailChainSignal. Parent signals are those signals that are checking state of this signal to determine their own chain state.
     *
     * _Can only be used if this is RailSignal or RailChainSignal_
     */
    get_parent_signals(): LuaEntity[]
    /**
     * Returns all child signals. Child signals can be either RailSignal or RailChainSignal. Child signals are signals which are checked by this signal to determine a chain state.
     *
     * _Can only be used if this is RailChainSignal_
     */
    get_child_signals(): LuaEntity[]
    /**
     * The state of this rail signal.
     *
     * _Can only be used if this is RailSignal or RailChainSignal_
     */
    readonly signal_state: defines.signal_state
    /**
     * The state of this chain signal.
     *
     * _Can only be used if this is RailChainSignal_
     */
    readonly chain_signal_state: defines.chain_signal_state
  }
  /**
   * @noSelf
   */
  export interface InfinityContainerEntity extends BaseEntity {
    /**
     * Gets the filter for this infinity container at the given index, or `nil` if the filter index doesn't exist or is empty.
     *
     * _Can only be used if this is InfinityContainer_
     * @param index The index to get.
     */
    get_infinity_container_filter(index: uint): InfinityInventoryFilter | nil
    /**
     * Sets the filter for this infinity container at the given index.
     *
     * _Can only be used if this is InfinityContainer_
     * @param index The index to set.
     * @param filter The new filter, or `nil` to clear the filter.
     */
    set_infinity_container_filter(index: uint, filter: InfinityInventoryFilter | nil): void
    /**
     * The filters for this infinity container.
     *
     * _Can only be used if this is InfinityContainer_
     */
    infinity_container_filters: InfinityInventoryFilter[]
    /**
     * Whether items not included in this infinity container filters should be removed from the container.
     *
     * _Can only be used if this is InfinityContainer_
     */
    remove_unfiltered_items: boolean
  }
  /**
   * @noSelf
   */
  export interface InfinityPipeEntity extends BaseEntity {
    /**
     * Gets the filter for this infinity pipe, or `nil` if the filter is empty.
     *
     * _Can only be used if this is InfinityPipe_
     */
    get_infinity_pipe_filter(): InfinityPipeFilter | nil
    /**
     * Sets the filter for this infinity pipe.
     *
     * _Can only be used if this is InfinityPipe_
     * @param filter The new filter, or `nil` to clear the filter.
     */
    set_infinity_pipe_filter(filter: InfinityPipeFilter | nil): void
  }
  /**
   * @noSelf
   */
  export interface HeatInterfaceEntity extends BaseEntity {
    /**
     * Gets the heat setting for this heat interface.
     *
     * _Can only be used if this is HeatInterface_
     */
    get_heat_setting(): HeatSetting
    /**
     * Sets the heat setting for this heat interface.
     *
     * _Can only be used if this is HeatInterface_
     * @param filter The new setting.
     */
    set_heat_setting(filter: HeatSetting): void
  }
  /**
   * @noSelf
   */
  export interface ProgrammableSpeakerEntity extends BaseEntity {
    /**
     * Plays a note with the given instrument and note.
     *
     * _Can only be used if this is ProgrammableSpeaker_
     * @returns Whether the request is valid. The sound may or may not be played depending on polyphony settings.
     */
    play_note(instrument: uint, note: uint): boolean
    /**
     * _Can only be used if this is ProgrammableSpeaker_
     */
    parameters: ProgrammableSpeakerParameters
    /**
     * _Can only be used if this is ProgrammableSpeaker_
     */
    alert_parameters: ProgrammableSpeakerAlertParameters
  }
  /**
   * @noSelf
   */
  export interface RollingStockEntity extends BaseEntity {
    /**
     * Connects the rolling stock in the given direction.
     *
     * _Can only be used if this is RollingStock_
     * @returns Whether any connection was made
     */
    connect_rolling_stock(direction: defines.rail_direction): boolean
    /**
     * Tries to disconnect this rolling stock in the given direction.
     *
     * _Can only be used if this is RollingStock_
     * @returns If anything was disconnected
     */
    disconnect_rolling_stock(direction: defines.rail_direction): boolean
    /**
     * Gets rolling stock connected to the given end of this stock.
     *
     * _Can only be used if this is RollingStock_
     * @returns The rolling stock connected at the given end, `nil` if none is connected there.
     * @returns The rail direction of the connected rolling stock if any.
     */
    get_connected_rolling_stock(
      direction: defines.rail_direction,
    ): LuaMultiReturn<[LuaEntity | nil, defines.rail_direction | nil]>
    /**
     * If the rolling stock is facing train's front.
     *
     * _Can only be used if this is RollingStock_
     */
    readonly is_headed_to_trains_front: boolean
    /**
     * Gives a draw data of the given entity if it supports such data.
     *
     * _Can only be used if this is RollingStock_
     */
    readonly draw_data: RollingStockDrawData
  }
  /**
   * @noSelf
   */
  export interface AssemblingMachineEntity extends BaseEntity {
    /**
     * Sets the given recipe in this assembly machine.
     *
     * _Can only be used if this is AssemblingMachine_
     * @param recipe The new recipe. Writing `nil` clears the recipe, if any.
     * @returns Any items removed from this entity as a result of setting the recipe.
     */
    set_recipe(recipe: string | LuaRecipe | nil): Record<string, uint>
    /**
     * When locked; the recipe in this assembling machine can't be changed by the player.
     *
     * _Can only be used if this is AssemblingMachine_
     */
    recipe_locked: boolean
  }
  /**
   * @noSelf
   */
  export interface VehicleEntity extends BaseEntity {
    /**
     * Gets the driver of this vehicle if any.
     *
     * _Can only be used if this is Vehicle_
     * @returns `nil` if the vehicle contains no driver. To check if there's a passenger see {@link LuaEntity#get_passenger LuaEntity::get_passenger}.
     */
    get_driver(): LuaEntity | LuaPlayer | nil
    /**
     * Sets the driver of this vehicle.
     *
     * This differs from {@link LuaEntity#set_passenger LuaEntity::set_passenger} in that the passenger can't drive the vehicle.
     *
     * ## Raised events
     * - {@link OnPlayerDrivingChangedStateEvent on_player_driving_changed_state}? _instantly_
     *
     * _Can only be used if this is Vehicle_
     * @param driver The new driver. Writing `nil` ejects the current driver, if any.
     */
    set_driver(driver?: LuaEntity | PlayerIdentification): void
    /**
     * Whether equipment grid logistics are enabled while this vehicle is moving.
     *
     * _Can only be used if this is Vehicle_
     */
    enable_logistics_while_moving: boolean
  }
  /**
   * @noSelf
   */
  export interface CarEntity extends BaseEntity {
    /**
     * Gets the passenger of this car or spidertron if any.
     *
     * This differs over {@link LuaEntity#get_driver LuaEntity::get_driver} in that the passenger can't drive the car.
     *
     * _Can only be used if this is Car or SpiderVehicle_
     * @returns `nil` if the vehicle contains no passenger. To check if there's a driver see {@link LuaEntity#get_driver LuaEntity::get_driver}.
     */
    get_passenger(): LuaEntity | LuaPlayer | nil
    /**
     * Sets the passenger of this car or spidertron.
     *
     * This differs from {@link LuaEntity#get_driver LuaEntity::get_driver} in that the passenger can't drive the car.
     *
     * ## Raised events
     * - {@link OnPlayerDrivingChangedStateEvent on_player_driving_changed_state}? _instantly_
     *
     * _Can only be used if this is Car or SpiderVehicle_
     * @param passenger The new passenger. Writing `nil` ejects the current passenger, if any.
     */
    set_passenger(passenger?: LuaEntity | PlayerIdentification): void
    /**
     * Multiplies the acceleration the vehicle can create for one unit of energy. Defaults to `1`.
     *
     * _Can only be used if this is Car_
     */
    effectivity_modifier: float
    /**
     * Multiplies the energy consumption.
     *
     * _Can only be used if this is Car_
     */
    consumption_modifier: float
    /**
     * Multiplies the car friction rate.
     *
     * _Can only be used if this is Car_
     * @example
     * -- This will allow the car to go much faster
     * game.player.vehicle.friction_modifier = 0.5
     */
    friction_modifier: float
    /**
     * Whether the driver of this car or spidertron is the gunner. If `false`, the passenger is the gunner. `nil` if this is neither a car or a spidertron.
     *
     * _Can only be used if this is Car or SpiderVehicle_
     */
    driver_is_gunner?: boolean
    /**
     * Index of the currently selected weapon slot of this character, car, or spidertron. `nil` if this entity doesn't have guns.
     *
     * _Can only be used if this is Character, Car or SpiderVehicle_
     */
    selected_gun_index?: uint
  }
  /**
   * @noSelf
   */
  export interface SpiderVehicleEntity extends BaseEntity {
    /**
     * Gets the passenger of this car or spidertron if any.
     *
     * This differs over {@link LuaEntity#get_driver LuaEntity::get_driver} in that the passenger can't drive the car.
     *
     * _Can only be used if this is Car or SpiderVehicle_
     * @returns `nil` if the vehicle contains no passenger. To check if there's a driver see {@link LuaEntity#get_driver LuaEntity::get_driver}.
     */
    get_passenger(): LuaEntity | LuaPlayer | nil
    /**
     * Sets the passenger of this car or spidertron.
     *
     * This differs from {@link LuaEntity#get_driver LuaEntity::get_driver} in that the passenger can't drive the car.
     *
     * ## Raised events
     * - {@link OnPlayerDrivingChangedStateEvent on_player_driving_changed_state}? _instantly_
     *
     * _Can only be used if this is Car or SpiderVehicle_
     * @param passenger The new passenger. Writing `nil` ejects the current passenger, if any.
     */
    set_passenger(passenger?: LuaEntity | PlayerIdentification): void
    /**
     * Adds the given position to this spidertron's autopilot's queue of destinations.
     *
     * _Can only be used if this is SpiderVehicle_
     * @param position The position the spidertron should move to.
     */
    add_autopilot_destination(position: MapPosition | MapPositionArray): void
    /**
     * Gets legs of given SpiderVehicle.
     *
     * _Can only be used if this is SpiderVehicle_
     */
    get_spider_legs(): LuaEntity[]
    /**
     * Sets the {@link LuaEntity#speed speed} of the given SpiderVehicle to zero. Notably does not clear its {@link LuaEntity#autopilot_destination autopilot_destination}, which it will continue moving towards if set.
     *
     * _Can only be used if this is SpiderVehicle_
     */
    stop_spider(): void
    /**
     * The torso orientation of this spider vehicle.
     *
     * _Can only be used if this is SpiderVehicle_
     */
    torso_orientation: RealOrientation
    /**
     * Whether the driver of this car or spidertron is the gunner. If `false`, the passenger is the gunner. `nil` if this is neither a car or a spidertron.
     *
     * _Can only be used if this is Car or SpiderVehicle_
     */
    driver_is_gunner?: boolean
    /**
     * Read when this spidertron auto-targets enemies
     *
     * _Can only be used if this is SpiderVehicle_
     */
    vehicle_automatic_targeting_parameters: VehicleAutomaticTargetingParameters
    /**
     * Index of the currently selected weapon slot of this character, car, or spidertron. `nil` if this entity doesn't have guns.
     *
     * _Can only be used if this is Character, Car or SpiderVehicle_
     */
    selected_gun_index?: uint
    /**
     * Destination of this spidertron's autopilot, if any. Writing `nil` clears all destinations.
     *
     * _Can only be used if this is SpiderVehicle_
     */
    get autopilot_destination(): MapPosition | nil
    set autopilot_destination(value: MapPosition | MapPositionArray | nil)
    /**
     * The queued destination positions of spidertron's autopilot.
     *
     * _Can only be used if this is SpiderVehicle_
     */
    readonly autopilot_destinations: MapPosition[]
    /**
     * The follow target of this spidertron, if any.
     *
     * _Can only be used if this is SpiderVehicle_
     */
    follow_target?: LuaEntity
    /**
     * The follow offset of this spidertron, if any entity is being followed. This is randomized each time the follow entity is set.
     *
     * _Can only be used if this is SpiderVehicle_
     */
    follow_offset?: Vector
  }
  /**
   * @noSelf
   */
  export interface TrainStopEntity extends BaseEntity {
    /**
     * The trains scheduled to stop at this train stop.
     *
     * _Can only be used if this is TrainStop_
     */
    get_train_stop_trains(): LuaTrain[]
    /**
     * The train currently stopped at this train stop, if any.
     *
     * _Can only be used if this is TrainStop_
     */
    get_stopped_train(): LuaTrain | nil
    /**
     * The rail entity this train stop is connected to, if any.
     *
     * _Can only be used if this is TrainStop_
     */
    readonly connected_rail?: LuaEntity
    /**
     * Rail direction to which this train stop is binding. This returns a value even when no rails are present.
     *
     * _Can only be used if this is TrainStop_
     */
    readonly connected_rail_direction: defines.rail_direction
    /**
     * Amount of trains related to this particular train stop. Includes train stopped at this train stop (until it finds a path to next target) and trains having this train stop as goal or waypoint.
     *
     * Train may be included multiple times when braking distance covers this train stop multiple times.
     *
     * Value may be read even when train stop has no control behavior.
     *
     * _Can only be used if this is TrainStop_
     */
    readonly trains_count: uint
    /**
     * Amount of trains above which no new trains will be sent to this train stop.
     *
     * Writing nil will disable the limit (will set a maximum possible value).
     *
     * When a train stop has a control behavior with wire connected and set_trains_limit enabled, this value will be overwritten by it.
     *
     * _Can only be used if this is TrainStop_
     */
    trains_limit: uint | nil
  }
  /**
   * @noSelf
   */
  export interface BeamEntity extends BaseEntity {
    /**
     * Get the source of this beam.
     *
     * _Can only be used if this is Beam_
     */
    get_beam_source(): BeamTarget | nil
    /**
     * Set the source of this beam.
     *
     * _Can only be used if this is Beam_
     */
    set_beam_source(source: LuaEntity | (MapPosition | MapPositionArray)): void
    /**
     * Get the target of this beam.
     *
     * _Can only be used if this is Beam_
     */
    get_beam_target(): BeamTarget | nil
    /**
     * Set the target of this beam.
     *
     * _Can only be used if this is Beam_
     */
    set_beam_target(target: LuaEntity | (MapPosition | MapPositionArray)): void
  }
  /**
   * @noSelf
   */
  export interface CharacterEntity extends BaseEntity {
    /**
     * Whether this character can shoot the given entity or position.
     *
     * _Can only be used if this is Character_
     */
    can_shoot(target: LuaEntity, position: MapPosition | MapPositionArray): boolean
    /**
     * Index of the currently selected weapon slot of this character, car, or spidertron. `nil` if this entity doesn't have guns.
     *
     * _Can only be used if this is Character, Car or SpiderVehicle_
     */
    selected_gun_index?: uint
    /**
     * The player connected to this character, if any.
     *
     * _Can only be used if this is Character_
     */
    readonly player?: LuaPlayer
    /**
     * The player this character is associated with, if any. Set to `nil` to clear.
     *
     * The player will be automatically disassociated when a controller is set on the character. Also, all characters associated to a player will be logged off when the player logs off in multiplayer.
     *
     * Reading this property will return a {@link LuaPlayer}, while {@link PlayerIdentification} can be used when writing.
     *
     * A character associated with a player is not directly controlled by any player.
     *
     * _Can only be used if this is Character_
     */
    get associated_player(): LuaPlayer | nil
    set associated_player(value: LuaPlayer | PlayerIdentification | nil)
    /**
     * The last tick this character entity was attacked.
     *
     * _Can only be used if this is Character_
     */
    tick_of_last_attack: uint
    /**
     * The last tick this character entity was damaged.
     *
     * _Can only be used if this is Character_
     */
    tick_of_last_damage: uint
    /**
     * Whether this character's personal roboports are allowed to dispatch robots.
     *
     * _Can only be used if this is Character_
     */
    allow_dispatching_robots: boolean
  }
  /**
   * @noSelf
   */
  export interface SpeechBubbleEntity extends BaseEntity {
    /**
     * Only works if the entity is a speech-bubble, with an "effect" defined in its wrapper_flow_style.
     *
     * Starts animating the opacity of the speech bubble towards zero, and destroys the entity when it hits zero.
     *
     * _Can only be used if this is SpeechBubble_
     */
    start_fading_out(): void
  }
  /**
   * @noSelf
   */
  export interface ResourceEntity extends BaseEntity {
    /**
     * Depletes and destroys this resource entity.
     *
     * ## Raised events
     * - {@link OnResourceDepletedEvent on_resource_depleted} _instantly_
     *
     * _Can only be used if this is ResourceEntity_
     */
    deplete(): void
    /**
     * Count of resource units contained.
     *
     * _Can only be used if this is ResourceEntity_
     */
    amount: uint
    /**
     * Count of initial resource units contained. `nil` if this is not an infinite resource.
     *
     * If this is not an infinite resource, writing will produce an error.
     *
     * _Can only be used if this is ResourceEntity_
     */
    initial_amount?: uint
  }
  /**
   * @noSelf
   */
  export interface LinkedBeltEntity extends BaseEntity {
    /**
     * Connects current linked belt with another one.
     *
     * Neighbours have to be of different type. If given linked belt is connected to something else it will be disconnected first. If provided neighbour is connected to something else it will also be disconnected first.
     *
     * Automatically updates neighbour to be connected back to this one.
     *
     * Can also be used on entity ghost if it contains linked-belt.
     *
     * _Can only be used if this is LinkedBelt_
     * @param neighbour Another linked belt or entity ghost containing linked belt to connect or nil to disconnect
     */
    connect_linked_belts(neighbour: LuaEntity | nil): void
    /**
     * Disconnects linked belt from its neighbour.
     *
     * Can also be used on entity ghost if it contains linked-belt.
     *
     * _Can only be used if this is LinkedBelt_
     */
    disconnect_linked_belts(): void
    /**
     * Type of linked belt. Changing type will also flip direction so the belt is out of the same side.
     *
     * Can only be changed when linked belt is disconnected (has no neighbour set).
     *
     * Can also be used on entity ghost if it contains linked-belt.
     *
     * _Can only be used if this is LinkedBelt_
     */
    linked_belt_type: "input" | "output"
    /**
     * Neighbour to which this linked belt is connected to, if any.
     *
     * Can also be used on entity ghost if it contains linked-belt.
     *
     * May return entity ghost which contains linked belt to which connection is made.
     *
     * _Can only be used if this is LinkedBelt_
     */
    readonly linked_belt_neighbour?: LuaEntity
  }
  /**
   * @noSelf
   */
  export interface BeaconEntity extends BaseEntity {
    /**
     * Returns a table with all entities affected by this beacon
     *
     * _Can only be used if this is Beacon_
     */
    get_beacon_effect_receivers(): LuaEntity[]
  }
  export interface CliffEntity extends BaseEntity {
    /**
     * The orientation of this cliff.
     *
     * _Can only be used if this is Cliff_
     */
    readonly cliff_orientation: CliffOrientation
  }
  export interface ItemEntity extends BaseEntity {
    /**
     * _Can only be used if this is ItemEntity_
     */
    readonly stack: LuaItemStack
    /**
     * Will this entity be picked up automatically when the player walks over it?
     *
     * _Can only be used if this is ItemEntity_
     */
    to_be_looted: boolean
  }
  export interface InserterEntity extends BaseEntity {
    /**
     * Where the inserter will pick up items from.
     *
     * Inserters must have `allow_custom_vectors` set to true on their prototype to allow changing the pickup position.
     *
     * _Can only be used if this is Inserter_
     */
    get pickup_position(): MapPosition
    set pickup_position(value: MapPosition | MapPositionArray)
    /**
     * The entity this inserter will attempt to pick up items from. If there are multiple possible entities at the pick-up point, writing to this attribute allows a mod to choose which one to pick up items from. The entity needs to collide with the tile box under the pick-up position. `nil` if there is no entity to pull items from.
     *
     * _Can only be used if this is Inserter_
     */
    pickup_target?: LuaEntity
    /**
     * The item stack currently held in an inserter's hand.
     *
     * _Can only be used if this is Inserter_
     */
    readonly held_stack: LuaItemStack
    /**
     * Current position of the inserter's "hand".
     *
     * _Can only be used if this is Inserter_
     */
    readonly held_stack_position: MapPosition
    /**
     * Returns the current target pickup count of the inserter.
     *
     * This considers the circuit network, manual override and the inserter stack size limit based on technology.
     *
     * _Can only be used if this is Inserter_
     */
    readonly inserter_target_pickup_count: uint
    /**
     * Sets the stack size limit on this inserter. If the stack size is > than the force stack size limit the value is ignored.
     *
     * Set to `0` to reset.
     *
     * _Can only be used if this is Inserter_
     */
    inserter_stack_size_override: uint
    /**
     * The filter mode for this filter inserter. `nil` if this inserter doesn't use filters.
     *
     * _Can only be used if this is Inserter_
     */
    inserter_filter_mode?: "whitelist" | "blacklist"
  }
  export interface FurnaceEntity extends BaseEntity {
    /**
     * The previous recipe this furnace was using, if any.
     *
     * _Can only be used if this is Furnace_
     */
    readonly previous_recipe?: LuaRecipe
  }
  export interface CombatRobotEntity extends BaseEntity {
    /**
     * The ticks left before a ghost, combat robot, highlight box, smoke with trigger or sticker is destroyed.
     *
     * For ghosts set to uint32 max (4 294 967 295) to never expire.
     *
     * For ghosts can not be set higher than {@link LuaForce#ghost_time_to_live LuaForce::ghost_time_to_live} of the entity's force.
     *
     * _Can only be used if this is Ghost, CombatRobot, HighlightBox, SmokeWithTrigger or Sticker_
     */
    time_to_live: uint
    /**
     * The owner of this combat robot, if any.
     *
     * _Can only be used if this is CombatRobot_
     */
    combat_robot_owner?: LuaEntity
  }
  export interface HighlightBoxEntity extends BaseEntity {
    /**
     * The ticks left before a ghost, combat robot, highlight box, smoke with trigger or sticker is destroyed.
     *
     * For ghosts set to uint32 max (4 294 967 295) to never expire.
     *
     * For ghosts can not be set higher than {@link LuaForce#ghost_time_to_live LuaForce::ghost_time_to_live} of the entity's force.
     *
     * _Can only be used if this is Ghost, CombatRobot, HighlightBox, SmokeWithTrigger or Sticker_
     */
    time_to_live: uint
    /**
     * The highlight box type of this highlight box entity.
     *
     * _Can only be used if this is HighlightBox_
     */
    highlight_box_type: CursorBoxRenderType
    /**
     * The blink interval of this highlight box entity. `0` indicates no blink.
     *
     * _Can only be used if this is HighlightBox_
     */
    highlight_box_blink_interval: uint
  }
  export interface SmokeWithTriggerEntity extends BaseEntity {
    /**
     * The ticks left before a ghost, combat robot, highlight box, smoke with trigger or sticker is destroyed.
     *
     * For ghosts set to uint32 max (4 294 967 295) to never expire.
     *
     * For ghosts can not be set higher than {@link LuaForce#ghost_time_to_live LuaForce::ghost_time_to_live} of the entity's force.
     *
     * _Can only be used if this is Ghost, CombatRobot, HighlightBox, SmokeWithTrigger or Sticker_
     */
    time_to_live: uint
    /**
     * The ticks until the next trigger effect of this smoke-with-trigger.
     *
     * _Can only be used if this is SmokeWithTrigger_
     */
    time_to_next_effect: uint
  }
  export interface StickerEntity extends BaseEntity {
    /**
     * The ticks left before a ghost, combat robot, highlight box, smoke with trigger or sticker is destroyed.
     *
     * For ghosts set to uint32 max (4 294 967 295) to never expire.
     *
     * For ghosts can not be set higher than {@link LuaForce#ghost_time_to_live LuaForce::ghost_time_to_live} of the entity's force.
     *
     * _Can only be used if this is Ghost, CombatRobot, HighlightBox, SmokeWithTrigger or Sticker_
     */
    time_to_live: uint
    /**
     * The entity this sticker is sticked to.
     *
     * _Can only be used if this is Sticker_
     */
    readonly sticked_to: LuaEntity
  }
  export interface FlyingTextEntity extends BaseEntity {
    /**
     * The text of this flying-text entity.
     *
     * _Can only be used if this is FlyingText_
     */
    text: LocalisedString
  }
  export interface UndergroundBeltEntity extends BaseEntity {
    /**
     * Whether this underground belt goes into or out of the ground.
     *
     * _Can only be used if this is UndergroundBelt_
     */
    readonly belt_to_ground_type: "input" | "output"
  }
  export interface LoaderEntity extends BaseEntity {
    /**
     * Whether this loader gets items from or puts item into a container.
     *
     * _Can only be used if this is Loader_
     */
    loader_type: "input" | "output"
    /**
     * The container entity this loader is pointing at/pulling from depending on the {@link LuaEntity#loader_type LuaEntity::loader_type}, if any.
     *
     * _Can only be used if this is Loader_
     */
    readonly loader_container?: LuaEntity
  }
  export interface TurretEntity extends BaseEntity {
    /**
     * The damage dealt by this turret, artillery turret, or artillery wagon.
     *
     * _Can only be used if this is Turret_
     */
    damage_dealt: double
    /**
     * The number of units killed by this turret, artillery turret, or artillery wagon.
     *
     * _Can only be used if this is Turret_
     */
    kills: uint
    /**
     * The shooting target for this turret, if any. Can't be set to `nil` via script.
     *
     * _Can only be used if this is Turret_
     */
    shooting_target?: LuaEntity
  }
  export interface EntityWithOwnerEntity extends BaseEntity {
    /**
     * The last player that changed any setting on this entity. This includes building the entity, changing its color, or configuring its circuit network. `nil` if the last user is not part of the save anymore.
     *
     * Reading this property will return a {@link LuaPlayer}, while {@link PlayerIdentification} can be used when writing.
     *
     * _Can only be used if this is EntityWithOwner, DeconstructibleTileProxy or TileGhost_
     */
    get last_user(): LuaPlayer | nil
    set last_user(value: LuaPlayer | PlayerIdentification | nil)
  }
  export interface DeconstructibleTileProxyEntity extends BaseEntity {
    /**
     * The last player that changed any setting on this entity. This includes building the entity, changing its color, or configuring its circuit network. `nil` if the last user is not part of the save anymore.
     *
     * Reading this property will return a {@link LuaPlayer}, while {@link PlayerIdentification} can be used when writing.
     *
     * _Can only be used if this is EntityWithOwner, DeconstructibleTileProxy or TileGhost_
     */
    get last_user(): LuaPlayer | nil
    set last_user(value: LuaPlayer | PlayerIdentification | nil)
  }
  export interface TileGhostEntity extends BaseEntity {
    /**
     * The last player that changed any setting on this entity. This includes building the entity, changing its color, or configuring its circuit network. `nil` if the last user is not part of the save anymore.
     *
     * Reading this property will return a {@link LuaPlayer}, while {@link PlayerIdentification} can be used when writing.
     *
     * _Can only be used if this is EntityWithOwner, DeconstructibleTileProxy or TileGhost_
     */
    get last_user(): LuaPlayer | nil
    set last_user(value: LuaPlayer | PlayerIdentification | nil)
  }
  export interface ElectricEnergyInterfaceEntity extends BaseEntity {
    /**
     * The power production specific to the ElectricEnergyInterface entity type.
     *
     * _Can only be used if this is ElectricEnergyInterface_
     */
    power_production: double
    /**
     * The power usage specific to the ElectricEnergyInterface entity type.
     *
     * _Can only be used if this is ElectricEnergyInterface_
     */
    power_usage: double
  }
  export interface MiningDrillEntity extends BaseEntity {
    /**
     * The mining target, if any.
     *
     * _Can only be used if this is MiningDrill_
     */
    readonly mining_target?: LuaEntity
  }
  export interface TreeEntity extends BaseEntity {
    /**
     * Index of the tree color.
     *
     * _Can only be used if this is Tree_
     */
    tree_color_index: uint8
    /**
     * Maximum index of the tree colors.
     *
     * _Can only be used if this is Tree_
     */
    readonly tree_color_index_max: uint8
    /**
     * Index of the tree stage.
     *
     * _Can only be used if this is Tree_
     */
    tree_stage_index: uint8
    /**
     * Maximum index of the tree stages.
     *
     * _Can only be used if this is Tree_
     */
    readonly tree_stage_index_max: uint8
    /**
     * Index of the tree gray stage
     *
     * _Can only be used if this is Tree_
     */
    tree_gray_stage_index: uint8
    /**
     * Maximum index of the tree gray stages.
     *
     * _Can only be used if this is Tree_
     */
    readonly tree_gray_stage_index_max: uint8
  }
  export interface ItemRequestProxyEntity extends BaseEntity {
    /**
     * The target entity for this item-request-proxy, if any.
     *
     * _Can only be used if this is ItemRequestProxy_
     */
    readonly proxy_target?: LuaEntity
  }
  export interface ElectricPoleEntity extends BaseEntity {
    /**
     * The electric network statistics for this electric pole.
     *
     * _Can only be used if this is ElectricPole_
     */
    readonly electric_network_statistics: LuaFlowStatistics
  }
  export interface SpawnerEntity extends BaseEntity {
    /**
     * _Can only be used if this is Spawner_
     */
    readonly spawning_cooldown: double
    /**
     * _Can only be used if this is Spawner_
     */
    readonly absorbed_pollution: double
    /**
     * _Can only be used if this is Spawner_
     */
    readonly spawn_shift: double
    /**
     * The units associated with this spawner entity.
     *
     * _Can only be used if this is Spawner_
     */
    readonly units: LuaEntity[]
  }
  export interface PowerSwitchEntity extends BaseEntity {
    /**
     * The state of this power switch.
     *
     * _Can only be used if this is PowerSwitch_
     */
    power_switch_state: boolean
  }
  export interface CharacterCorpseEntity extends BaseEntity {
    /**
     * The player index associated with this character corpse.
     *
     * The index is not guaranteed to be valid so it should always be checked first if a player with that index actually exists.
     *
     * _Can only be used if this is CharacterCorpse_
     */
    character_corpse_player_index: uint
    /**
     * The tick this character corpse died at.
     *
     * _Can only be used if this is CharacterCorpse_
     */
    character_corpse_tick_of_death: uint
    /**
     * The reason this character corpse character died. `""` if there is no reason.
     *
     * _Can only be used if this is CharacterCorpse_
     */
    character_corpse_death_cause: LocalisedString
  }
  export interface SplitterEntity extends BaseEntity {
    /**
     * The filter for this splitter, if any is set.
     *
     * _Can only be used if this is Splitter_
     */
    splitter_filter?: LuaItemPrototype
    /**
     * The input priority for this splitter.
     *
     * _Can only be used if this is Splitter_
     */
    splitter_input_priority: "left" | "none" | "right"
    /**
     * The output priority for this splitter.
     *
     * _Can only be used if this is Splitter_
     */
    splitter_output_priority: "left" | "none" | "right"
  }
  export interface LandMineEntity extends BaseEntity {
    /**
     * Whether this land mine is armed.
     *
     * _Can only be used if this is LandMine_
     */
    readonly armed: boolean
    /**
     * The timeout that's left on this landmine in ticks. It describes the time between the landmine being placed and it being armed.
     *
     * _Can only be used if this is LandMine_
     */
    timeout: uint
  }
  export interface ReactorEntity extends BaseEntity {
    /**
     * The current total neighbour bonus of this reactor.
     *
     * _Can only be used if this is Reactor_
     */
    readonly neighbour_bonus: double
  }
  export interface PumpEntity extends BaseEntity {
    /**
     * The rail target of this pump, if any.
     *
     * _Can only be used if this is Pump_
     */
    readonly pump_rail_target?: LuaEntity
  }
  export interface GeneratorEntity extends BaseEntity {
    /**
     * How much energy this generator generated in the last tick.
     *
     * _Can only be used if this is Generator_
     */
    readonly energy_generated_last_tick: double
  }
  export interface CorpseEntity extends BaseEntity {
    /**
     * Whether this corpse will ever fade away.
     *
     * _Can only be used if this is Corpse_
     */
    corpse_expires: boolean
    /**
     * If true, corpse won't be destroyed when entities are placed over it. If false, whether corpse will be removed or not depends on value of {@link import("factorio:prototype").CorpsePrototype#remove_on_entity_placement CorpsePrototype::remove_on_entity_placement}.
     *
     * _Can only be used if this is Corpse_
     */
    corpse_immune_to_entity_placement: boolean
  }
  export interface LinkedContainerEntity extends BaseEntity {
    /**
     * The link ID this linked container is using.
     *
     * _Can only be used if this is LinkedContainer_
     */
    link_id: uint
  }
  export interface RadarEntity extends BaseEntity {
    /**
     * The current radar scan progress, as a number in range [0, 1].
     *
     * _Can only be used if this is Radar_
     */
    readonly radar_scan_progress: float
  }
  export interface TransportBeltEntity extends BaseEntity {
    /**
     * Gives what is the current shape of a transport-belt.
     *
     * Can also be used on entity ghost if it contains transport-belt.
     *
     * _Can only be used if this is TransportBelt_
     */
    readonly belt_shape: "straight" | "left" | "right"
  }
  /**
   * Prototype of an entity.
   * @noSelf
   */
  export interface LuaEntityPrototype {
    /**
     * Test whether this entity prototype has a certain flag set.
     * @param flag The flag to test.
     * @returns `true` if this prototype has the given flag set.
     */
    has_flag(flag: EntityPrototypeFlag): boolean
    /**
     * Gets the base size of the given inventory on this entity or `nil` if the given inventory doesn't exist.
     */
    get_inventory_size(index: defines.inventory): uint | nil
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Type of this prototype.
     */
    readonly type: EntityType
    /**
     * Name of this prototype.
     */
    readonly name: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    /**
     * Max health of this entity. Will be `0` if this is not an entity with health.
     */
    readonly max_health: float
    /**
     * Whether this resource is infinite.
     *
     * _Can only be used if this is ResourceEntity_
     */
    readonly infinite_resource?: boolean
    /**
     * Minimum amount of this resource.
     *
     * _Can only be used if this is ResourceEntity_
     */
    readonly minimum_resource_amount?: uint
    /**
     * The normal amount for this resource.
     *
     * _Can only be used if this is ResourceEntity_
     */
    readonly normal_resource_amount?: uint
    /**
     * Every time this infinite resource 'ticks' down, it is reduced by this amount. Meaningless if this isn't an infinite resource.
     *
     * _Can only be used if this is ResourceEntity_
     */
    readonly infinite_depletion_resource_amount?: uint
    /**
     * Name of the category of this resource.
     *
     * During data stage, this property is named "category".
     *
     * _Can only be used if this is ResourceEntity_
     */
    readonly resource_category?: string
    /**
     * Whether this entity is minable and what can be obtained by mining it.
     */
    readonly mineable_properties: {
      /**
       * Is this entity mineable at all?
       */
      readonly minable: boolean
      /**
       * Energy required to mine an entity.
       */
      readonly mining_time: double
      /**
       * Prototype name of the particle produced when mining this entity. Will only be present if this entity produces any particle during mining.
       */
      readonly mining_particle?: string
      /**
       * Products obtained by mining this entity.
       */
      readonly products?: Product[]
      /**
       * The required fluid amount if any.
       */
      readonly fluid_amount?: double
      /**
       * The prototype name of the required fluid if any.
       */
      readonly required_fluid?: string
      /**
       * The mining trigger if any.
       */
      readonly mining_trigger?: TriggerItem[]
    }
    /**
     * Items that when placed will produce this entity, if any. Construction bots will choose the first item in the list to build this entity.
     */
    readonly items_to_place_this?: ItemStackDefinition[]
    /**
     * The bounding box used for collision checking.
     */
    readonly collision_box: BoundingBox
    /**
     * The secondary bounding box used for collision checking, if any. This is only used in rails and rail remnants.
     */
    readonly secondary_collision_box?: BoundingBox
    /**
     * The bounding box used for map generator collision checking.
     */
    readonly map_generator_bounding_box: BoundingBox
    /**
     * The bounding box used for drawing selection.
     */
    readonly selection_box: BoundingBox
    /**
     * The bounding box used for drawing the entity icon.
     */
    readonly drawing_box: BoundingBox
    /**
     * The bounding box used to attach sticker type entities.
     */
    readonly sticker_box: BoundingBox
    /**
     * The collision masks this entity uses
     */
    readonly collision_mask: CollisionMask
    readonly collision_mask_with_flags: CollisionMaskWithFlags
    /**
     * The hardcoded default collision mask (with flags) for this entity prototype type.
     */
    readonly default_collision_mask_with_flags: CollisionMaskWithFlags
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    /**
     * Group of this entity.
     */
    readonly group: LuaGroup
    /**
     * Subgroup of this entity.
     */
    readonly subgroup: LuaGroup
    /**
     * Amount this entity can heal per tick, if any.
     */
    readonly healing_per_tick?: float
    /**
     * Amount of pollution emissions per second this entity will create.
     */
    readonly emissions_per_second: double
    /**
     * Corpses used when this entity is destroyed. It is a dictionary indexed by the corpse's prototype name.
     *
     * _Can only be used if this is EntityWithHealth_
     */
    readonly corpses?: Record<string, LuaEntityPrototype>
    /**
     * Is this entity selectable?
     */
    readonly selectable_in_game: boolean
    /**
     * The selection priority of this entity - a value between 0 and 255
     */
    readonly selection_priority: uint
    /**
     * The weight of this vehicle prototype.
     *
     * _Can only be used if this is Vehicle_
     */
    readonly weight?: double
    /**
     * List of resistances towards each damage type. It is a dictionary indexed by damage type names (see `data/base/prototypes/damage-type.lua`).
     *
     * _Can only be used if this is EntityWithHealth_
     */
    readonly resistances?: Record<string, Resistance>
    /**
     * The group of mutually fast-replaceable entities, if any.
     */
    readonly fast_replaceable_group?: string
    /**
     * The next upgrade for this entity, if any.
     */
    readonly next_upgrade?: LuaEntityPrototype
    /**
     * Loot that will be dropped when this entity is killed, if any.
     *
     * _Can only be used if this is EntityWithHealth_
     */
    readonly loot?: Loot[]
    /**
     * Repair-speed modifier for this entity, if any. Actual repair speed will be `tool_repair_speed * entity_repair_speed_modifier`.
     *
     * _Can only be used if this is EntityWithHealth_
     */
    readonly repair_speed_modifier?: uint
    /**
     * The range of this turret.
     *
     * _Can only be used if this is Turret_
     */
    readonly turret_range?: uint
    /**
     * Autoplace specification for this entity prototype, if any.
     */
    readonly autoplace_specification?: AutoplaceSpecification
    /**
     * The speed of this transport belt.
     *
     * _Can only be used if this is TransportBeltConnectable_
     */
    readonly belt_speed?: double
    /**
     * The result units and spawn points with weight and evolution factor for a biter spawner entity.
     *
     * _Can only be used if this is Spawner_
     */
    readonly result_units?: UnitSpawnDefinition[]
    /**
     * The attack result of this entity, if any.
     */
    readonly attack_result?: TriggerItem[]
    /**
     * The final attack result for this projectile.
     *
     * _Can only be used if this is Projectile_
     */
    readonly final_attack_result?: TriggerItem[]
    /**
     * The attack parameters for this entity, if any.
     */
    readonly attack_parameters?: AttackParameters
    /**
     * The spawning cooldown for this enemy spawner prototype.
     *
     * _Can only be used if this is Spawner_
     */
    readonly spawn_cooldown?: {
      readonly min: double
      readonly max: double
    }
    /**
     * The mining radius of this mining drill prototype.
     *
     * _Can only be used if this is MiningDrill_
     */
    readonly mining_drill_radius?: double
    /**
     * The mining speed of this mining drill/character prototype.
     *
     * _Can only be used if this is MiningDrill or Character_
     */
    readonly mining_speed?: double
    /**
     * The logistic mode of this logistic container.
     *
     * _Can only be used if this is LogisticContainer_
     */
    readonly logistic_mode?: "requester" | "active-provider" | "passive-provider" | "buffer" | "storage" | "none"
    /**
     * The max underground distance for underground belts and underground pipes.
     *
     * _Can only be used if this is UndergroundBelt or PipeToGround_
     */
    readonly max_underground_distance?: uint8
    /**
     * The flags for this entity prototype.
     */
    readonly flags: EntityPrototypeFlags
    /**
     * The remains left behind when this entity is mined.
     */
    readonly remains_when_mined: LuaEntityPrototype[]
    /**
     * Entities this entity can be pasted onto in addition to the normal allowed ones.
     */
    readonly additional_pastable_entities: LuaEntityPrototype[]
    /**
     * When false copy-paste is not allowed for this entity.
     */
    readonly allow_copy_paste: boolean
    /**
     * The cursor size used when shooting at this entity.
     */
    readonly shooting_cursor_size: float
    /**
     * The smoke trigger run when this entity is built, if any.
     */
    readonly created_smoke?: {
      readonly smoke_name: string
      readonly offsets: Vector[]
      readonly offset_deviation: BoundingBox
      readonly initial_height: float
      readonly max_radius?: float
      readonly speed: Vector
      readonly speed_multiplier: float
      readonly speed_multiplier_deviation: float
      readonly starting_frame: float
      readonly starting_frame_deviation: float
      readonly starting_frame_speed: float
      readonly starting_frame_speed_deviation: float
      readonly speed_from_center: float
      readonly speed_from_center_deviation: float
    }
    /**
     * The trigger to run when this entity is created, if any.
     */
    readonly created_effect?: TriggerItem[]
    /**
     * The map color used when charting this entity if a friendly or enemy color isn't defined, if any.
     */
    readonly map_color?: Color
    /**
     * The friendly map color used when charting this entity.
     */
    readonly friendly_map_color: Color
    /**
     * The enemy map color used when charting this entity.
     */
    readonly enemy_map_color: Color
    /**
     * The evolution requirement to build this entity as a base when expanding enemy bases.
     */
    readonly build_base_evolution_requirement: double
    /**
     * The instruments for this programmable speaker.
     *
     * _Can only be used if this is ProgrammableSpeaker_
     */
    readonly instruments?: ProgrammableSpeakerInstrument[]
    /**
     * The maximum polyphony for this programmable speaker.
     *
     * _Can only be used if this is ProgrammableSpeaker_
     */
    readonly max_polyphony?: uint
    /**
     * The module inventory size. `nil` if this entity doesn't support modules.
     */
    readonly module_inventory_size?: uint
    /**
     * The max number of ingredients this crafting machine prototype supports.
     *
     * _Can only be used if this is CraftingMachine_
     */
    readonly ingredient_count?: uint
    /**
     * The crafting speed.
     *
     * _Can only be used if this is CraftingMachine_
     */
    readonly crafting_speed?: double
    /**
     * The {@link LuaRecipeCategoryPrototype crafting categories} this entity prototype supports.
     *
     * The value in the dictionary is meaningless and exists just to allow for easy lookup.
     *
     * _Can only be used if this is CraftingMachine or Character_
     */
    readonly crafting_categories?: Record<string, true>
    /**
     * The {@link LuaResourceCategoryPrototype resource categories} this character or mining drill supports.
     *
     * The value in the dictionary is meaningless and exists just to allow for easy lookup.
     *
     * _Can only be used if this is MiningDrill or Character_
     */
    readonly resource_categories?: Record<string, true>
    /**
     * The supply area of this electric pole or beacon prototype.
     *
     * _Can only be used if this is ElectricPole or Beacon_
     */
    readonly supply_area_distance?: double
    /**
     * The maximum wire distance for this entity. 0 if the entity doesn't support wires.
     */
    readonly max_wire_distance: double
    /**
     * The maximum circuit wire distance for this entity. 0 if the entity doesn't support circuit wires.
     */
    readonly max_circuit_wire_distance: double
    /**
     * The direct energy usage of this entity, if any.
     */
    readonly energy_usage?: double
    /**
     * The theoretical maximum energy usage for this entity.
     */
    readonly max_energy_usage: double
    /**
     * The theoretical maximum energy production for this this entity.
     */
    readonly max_energy_production: double
    /**
     * The effectivity of this car prototype, generator prototype.
     *
     * _Can only be used if this is Car or Generator_
     */
    readonly effectivity?: double
    /**
     * The energy consumption of this car prototype.
     *
     * _Can only be used if this is Car_
     */
    readonly consumption?: double
    /**
     * The friction of this vehicle prototype.
     *
     * _Can only be used if this is Vehicle_
     */
    readonly friction_force?: double
    /**
     * The braking force of this vehicle prototype.
     *
     * _Can only be used if this is Vehicle_
     */
    readonly braking_force?: double
    /**
     * The air resistance of this rolling stock prototype.
     *
     * _Can only be used if this is RollingStock_
     */
    readonly air_resistance?: double
    /**
     * If this car prototype uses tank controls to drive.
     *
     * _Can only be used if this is Car_
     */
    readonly tank_driving?: boolean
    /**
     * The rotation speed of this car prototype.
     *
     * _Can only be used if this is Car_
     */
    readonly rotation_speed?: double
    /**
     * The turret rotation speed of this car prototype.
     *
     * _Can only be used if this is Car_
     */
    readonly turret_rotation_speed?: float
    /**
     * A mapping of the gun name to the gun prototype this prototype uses. `nil` if this entity prototype doesn't use guns.
     */
    readonly guns?: Record<string, LuaItemPrototype>
    /**
     * A vector of the gun prototypes of this car, spider vehicle, artillery wagon, or turret.
     *
     * _Can only be used if this is Car, SpiderVehicle, ArtilleryTurret or ArtilleryWagon_
     */
    readonly indexed_guns?: LuaItemPrototype[]
    /**
     * The default speed of this flying robot, rolling stock or unit. For rolling stocks, this is their `max_speed`.
     *
     * _Can only be used if this is FlyingRobot, RollingStock or Unit_
     */
    readonly speed?: double
    /**
     * The speed multiplier when this flying robot is out of energy.
     *
     * _Can only be used if this is FlyingRobot_
     */
    readonly speed_multiplier_when_out_of_energy?: float
    /**
     * The max payload size of this logistics or construction robot.
     *
     * _Can only be used if this is RobotWithLogisticsInterface_
     */
    readonly max_payload_size?: uint
    /**
     * Whether this logistics or construction robot renders its cargo when flying.
     *
     * _Can only be used if this is RobotWithLogisticsInterface_
     */
    readonly draw_cargo?: boolean
    /**
     * The energy consumed per tile moved for this flying robot.
     *
     * _Can only be used if this is FlyingRobot_
     */
    readonly energy_per_move?: double
    /**
     * The energy consumed per tick for this flying robot.
     *
     * _Can only be used if this is FlyingRobot_
     */
    readonly energy_per_tick?: double
    /**
     * The max energy for this flying robot.
     *
     * _Can only be used if this is FlyingRobot_
     */
    readonly max_energy?: double
    /**
     * The minimum energy for this flying robot before it tries to recharge.
     *
     * _Can only be used if this is FlyingRobot_
     */
    readonly min_to_charge?: float
    /**
     * The maximum energy for this flying robot above which it won't try to recharge when stationing.
     *
     * _Can only be used if this is FlyingRobot_
     */
    readonly max_to_charge?: float
    /**
     * The burner energy source prototype this entity uses, if any.
     */
    readonly burner_prototype?: LuaBurnerPrototype
    /**
     * The electric energy source prototype this entity uses, if any.
     */
    readonly electric_energy_source_prototype?: LuaElectricEnergySourcePrototype
    /**
     * The heat energy source prototype this entity uses, if any.
     */
    readonly heat_energy_source_prototype?: LuaHeatEnergySourcePrototype
    /**
     * The fluid energy source prototype this entity uses, if any.
     */
    readonly fluid_energy_source_prototype?: LuaFluidEnergySourcePrototype
    /**
     * The void energy source prototype this entity uses, if any.
     */
    readonly void_energy_source_prototype?: LuaVoidEnergySourcePrototype
    /**
     * The heat buffer prototype this entity uses, if any.
     */
    readonly heat_buffer_prototype?: LuaHeatBufferPrototype
    /**
     * The log2 of grid size of the building
     */
    readonly building_grid_bit_shift: uint
    /**
     * The fluid usage of this generator prototype.
     *
     * _Can only be used if this is Generator_
     */
    readonly fluid_usage_per_tick?: double
    /**
     * The maximum fluid temperature of this generator prototype.
     *
     * _Can only be used if this is Generator_
     */
    readonly maximum_temperature?: double
    /**
     * Whether this generator prototype burns fluid.
     *
     * _Can only be used if this is Generator_
     */
    readonly burns_fluid?: boolean
    /**
     * Whether this generator prototype scales fluid usage.
     *
     * _Can only be used if this is Generator_
     */
    readonly scale_fluid_usage?: boolean
    /**
     * Whether this generator prototype destroys non-fuel fluids.
     *
     * _Can only be used if this is Generator_
     */
    readonly destroy_non_fuel_fluid?: boolean
    /**
     * The default maximum power output of this generator prototype.
     *
     * _Can only be used if this is BurnerGenerator or Generator_
     */
    readonly max_power_output?: double
    /**
     * The target temperature of this boiler prototype.
     *
     * _Can only be used if this is Boiler_
     */
    readonly target_temperature?: double
    /**
     * The boiler operation mode of this boiler prototype.
     *
     * _Can only be used if this is Boiler_
     */
    readonly boiler_mode?: "heat-water-inside" | "output-to-separate-pipe"
    /**
     * The fluid this offshore pump produces.
     *
     * _Can only be used if this is OffshorePump_
     */
    readonly fluid?: LuaFluidPrototype
    /**
     * The fluid capacity of this entity or 0 if this entity doesn't support fluids.
     *
     * Crafting machines will report 0 due to their fluid capacity being whatever a given recipe needs.
     */
    readonly fluid_capacity: double
    /**
     * The pumping speed of this offshore or normal pump.
     *
     * _Can only be used if this is OffshorePump or Pump_
     */
    readonly pumping_speed?: double
    /**
     * Whether this inserter is a stack-type.
     *
     * _Can only be used if this is Inserter_
     */
    readonly stack?: boolean
    /**
     * Whether this inserter allows custom pickup and drop vectors.
     *
     * _Can only be used if this is Inserter_
     */
    readonly allow_custom_vectors?: boolean
    /**
     * Whether this inserter allows burner leeching.
     *
     * _Can only be used if this is Inserter_
     */
    readonly allow_burner_leech?: boolean
    /**
     * The extension speed of this inserter.
     *
     * _Can only be used if this is Inserter_
     */
    readonly inserter_extension_speed?: double
    /**
     * The rotation speed of this inserter.
     *
     * _Can only be used if this is Inserter_
     */
    readonly inserter_rotation_speed?: double
    /**
     * The pickup position for this inserter.
     *
     * _Can only be used if this is Inserter_
     */
    readonly inserter_pickup_position?: Vector
    /**
     * The drop position for this inserter.
     *
     * _Can only be used if this is Inserter_
     */
    readonly inserter_drop_position?: Vector
    /**
     * True if this inserter chases items on belts for pickup.
     *
     * _Can only be used if this is Inserter_
     */
    readonly inserter_chases_belt_items?: boolean
    /**
     * If this simple-entity is counted as a rock for the deconstruction planner "trees and rocks only" filter.
     *
     * _Can only be used if this is SimpleEntity_
     */
    readonly count_as_rock_for_filtered_deconstruction?: boolean
    /**
     * The filter count of this inserter, loader, or logistic chest. For logistic containers, `nil` means no limit.
     *
     * _Can only be used if this is Inserter, Loader or LogisticContainer_
     */
    readonly filter_count?: uint
    /**
     * The time to live for this prototype or `0` if prototype doesn't have time_to_live or time_before_removed.
     */
    readonly time_to_live: uint
    /**
     * The distribution effectivity for this beacon prototype.
     *
     * _Can only be used if this is Beacon_
     */
    readonly distribution_effectivity?: double
    /**
     * Whether this explosion has a beam.
     *
     * _Can only be used if this is Explosion_
     */
    readonly explosion_beam?: double
    /**
     * Whether this explosion rotates.
     *
     * _Can only be used if this is Explosion_
     */
    readonly explosion_rotate?: double
    /**
     * If it is a tree, return the number of colors it supports.
     *
     * _Can only be used if this is Tree_
     */
    readonly tree_color_count?: uint8
    /**
     * Whether this entity raises an alert when damaged.
     *
     * _Can only be used if this is EntityWithHealth_
     */
    readonly alert_when_damaged?: boolean
    /**
     * Whether this turret raises an alert when attacking
     *
     * _Can only be used if this is Turret_
     */
    readonly alert_when_attacking?: boolean
    /**
     * The color of the prototype, if any.
     */
    readonly color?: Color
    /**
     * Does this prototype collision mask collide with itself?
     */
    readonly collision_mask_collides_with_self: boolean
    /**
     * Does this prototype collision mask collide with tiles only?
     */
    readonly collision_mask_collides_with_tiles_only: boolean
    /**
     * Does this prototype collision mask consider tile transitions?
     */
    readonly collision_mask_considers_tile_transitions: boolean
    /**
     * The allowed module effects for this entity, if any.
     */
    readonly allowed_effects?: Record<string, boolean>
    /**
     * The rocket parts required for this rocket silo prototype.
     *
     * _Can only be used if this is RocketSilo_
     */
    readonly rocket_parts_required?: uint
    /**
     * The rocket rising delay for this rocket silo prototype.
     *
     * _Can only be used if this is RocketSilo_
     */
    readonly rocket_rising_delay?: uint8
    /**
     * The rocket launch delay for this rocket silo prototype.
     *
     * _Can only be used if this is RocketSilo_
     */
    readonly launch_wait_time?: uint8
    /**
     * The light blinking speed for this rocket silo prototype.
     *
     * _Can only be used if this is RocketSilo_
     */
    readonly light_blinking_speed?: double
    /**
     * The door opening speed for this rocket silo prototype.
     *
     * _Can only be used if this is RocketSilo_
     */
    readonly door_opening_speed?: double
    /**
     * The rising speed for this rocket silo rocket prototype.
     *
     * _Can only be used if this is RocketSiloRocket_
     */
    readonly rising_speed?: double
    /**
     * The engine starting speed for this rocket silo rocket prototype.
     *
     * _Can only be used if this is RocketSiloRocket_
     */
    readonly engine_starting_speed?: double
    /**
     * The flying speed for this rocket silo rocket prototype.
     *
     * _Can only be used if this is RocketSiloRocket_
     */
    readonly flying_speed?: double
    /**
     * The flying acceleration for this rocket silo rocket prototype.
     *
     * _Can only be used if this is RocketSiloRocket_
     */
    readonly flying_acceleration?: double
    /**
     * The fixed recipe name for this assembling machine prototype, if any.
     *
     * _Can only be used if this is AssemblingMachine_
     */
    readonly fixed_recipe?: string
    /**
     * The construction radius for this roboport prototype.
     *
     * _Can only be used if this is Roboport_
     */
    readonly construction_radius?: double
    /**
     * The logistic radius for this roboport prototype.
     *
     * _Can only be used if this is Roboport_
     */
    readonly logistic_radius?: double
    /**
     * The energy used per hitpoint taken for this vehicle during collisions.
     *
     * _Can only be used if this is Vehicle_
     */
    readonly energy_per_hit_point?: double
    /**
     * If this prototype will attempt to create a ghost of itself on death.
     *
     * If this is false then a ghost will never be made, if it's true a ghost may be made.
     */
    readonly create_ghost_on_death: boolean
    /**
     * Name of the ammo category of this land mine.
     *
     * _Can only be used if this is LandMine_
     */
    readonly ammo_category?: string
    /**
     * The time it takes this land mine to arm.
     *
     * _Can only be used if this is LandMine_
     */
    readonly timeout?: uint
    /**
     * The collision mask entities must collide with to make this landmine blow up.
     *
     * _Can only be used if this is LandMine_
     */
    readonly trigger_collision_mask?: CollisionMaskWithFlags
    /**
     * The fluidbox prototypes for this entity.
     */
    readonly fluidbox_prototypes: LuaFluidBoxPrototype[]
    /**
     * _Can only be used if this is Reactor_
     */
    readonly neighbour_bonus?: double
    /**
     * _Can only be used if this is Loader_
     */
    readonly container_distance?: double
    /**
     * _Can only be used if this is Loader_
     */
    readonly belt_distance?: double
    /**
     * _Can only be used if this is Loader_
     */
    readonly belt_length?: double
    /**
     * {@link https://lua-api.factorio.com/latest/classes/LuaEntityPrototype.html#LuaEntityPrototype.is_building > These are the objects that are considered buildings:}
     */
    readonly is_building: boolean
    /**
     * The amount of ammo that inserters automatically insert into this ammo-turret or artillery-turret.
     *
     * _Can only be used if this is ArtilleryTurret or AmmoTurret_
     */
    readonly automated_ammo_count?: uint
    /**
     * The max speed of this projectile or flying robot prototype.
     *
     * _Can only be used if this is Projectile or FlyingRobot_
     */
    readonly max_speed?: double
    /**
     * Value between 0 and 1 darkness where all lamps of this lamp prototype are on.
     *
     * _Can only be used if this is Lamp_
     */
    readonly darkness_for_all_lamps_on?: float
    /**
     * Value between 0 and 1 darkness where all lamps of this lamp prototype are off.
     *
     * _Can only be used if this is Lamp_
     */
    readonly darkness_for_all_lamps_off?: float
    /**
     * Whether the lamp is always on (except when out of power or turned off by the circuit network).
     *
     * _Can only be used if this is Lamp_
     */
    readonly always_on?: boolean
    /**
     * The minimum darkness at which this unit spawner can spawn entities.
     *
     * _Can only be used if this is Spawner_
     */
    readonly min_darkness_to_spawn?: float
    /**
     * The maximum darkness at which this unit spawner can spawn entities.
     *
     * _Can only be used if this is Spawner_
     */
    readonly max_darkness_to_spawn?: float
    /**
     * _Can only be used if this is Spawner_
     */
    readonly call_for_help_radius?: double
    /**
     * Count of enemies this spawner can sustain.
     *
     * _Can only be used if this is Spawner_
     */
    readonly max_count_of_owned_units?: double
    /**
     * How many friendly units are required within the spawning_radius of this spawner for it to stop producing more units.
     *
     * _Can only be used if this is Spawner_
     */
    readonly max_friends_around_to_spawn?: double
    /**
     * How far from the spawner can the units be spawned.
     *
     * _Can only be used if this is Spawner_
     */
    readonly spawning_radius?: double
    /**
     * What spaces should be between the spawned units.
     *
     * _Can only be used if this is Spawner_
     */
    readonly spawning_spacing?: double
    /**
     * The radius of this entity prototype.
     */
    readonly radius: double
    /**
     * The item prototype name used to destroy this cliff.
     *
     * _Can only be used if this is Cliff_
     */
    readonly cliff_explosive_prototype?: string
    /**
     * The rocket entity prototype associated with this rocket silo prototype.
     *
     * _Can only be used if this is RocketSilo_
     */
    readonly rocket_entity_prototype?: LuaEntityPrototype
    /**
     * Whether this unit, car, or character prototype has belt immunity.
     *
     * _Can only be used if this is Unit, Car or Character_
     */
    readonly has_belt_immunity?: boolean
    /**
     * The vision distance of this unit prototype.
     *
     * _Can only be used if this is Unit_
     */
    readonly vision_distance?: double
    /**
     * The amount of pollution that has to be absorbed by the unit's spawner before the unit will leave the spawner and attack the source of the pollution.
     *
     * _Can only be used if this is Unit_
     */
    readonly pollution_to_join_attack?: float
    /**
     * The minimum pursue time of this unit prototype.
     *
     * _Can only be used if this is Unit_
     */
    readonly min_pursue_time?: uint
    /**
     * The maximum pursue distance of this unit prototype.
     *
     * _Can only be used if this is Unit_
     */
    readonly max_pursue_distance?: double
    /**
     * The radar range of this unit prototype.
     *
     * _Can only be used if this is Unit_
     */
    readonly radar_range?: uint
    /**
     * Whether this unit prototype can move while shooting.
     *
     * _Can only be used if this is Unit_
     */
    readonly move_while_shooting?: boolean
    /**
     * Whether this unit prototype can open gates.
     *
     * _Can only be used if this is Unit_
     */
    readonly can_open_gates?: boolean
    /**
     * Whether this unit prototype is affected by tile walking speed modifiers.
     *
     * _Can only be used if this is Unit_
     */
    readonly affected_by_tiles?: boolean
    /**
     * The distraction cooldown of this unit prototype.
     *
     * _Can only be used if this is Unit_
     */
    readonly distraction_cooldown?: uint
    /**
     * The spawning time modifier of this unit prototype.
     *
     * _Can only be used if this is Unit_
     */
    readonly spawning_time_modifier?: double
    /**
     * The alert icon shift of this entity prototype.
     */
    readonly alert_icon_shift: Vector
    /**
     * The alert icon scale of this entity prototype.
     */
    readonly alert_icon_scale: float
    /**
     * The item prototype names that are the inputs of this lab prototype.
     *
     * _Can only be used if this is Lab_
     */
    readonly lab_inputs?: string[]
    /**
     * The base researching speed of this lab prototype.
     *
     * _Can only be used if this is Lab_
     */
    readonly researching_speed?: double
    /**
     * The item slot count of this constant combinator prototype.
     *
     * _Can only be used if this is ConstantCombinator_
     */
    readonly item_slot_count?: uint
    /**
     * The base productivity of this crafting machine, lab, or mining drill.
     *
     * _Can only be used if this is CraftingMachine, Lab or MiningDrill_
     */
    readonly base_productivity?: double
    /**
     * Whether this market allows access to all forces or just friendly ones.
     *
     * _Can only be used if this is Market_
     */
    readonly allow_access_to_all_forces?: boolean
    /**
     * Whether this entity prototype could possibly ever be rotated.
     */
    readonly supports_direction: boolean
    /**
     * The terrain friction modifier for this vehicle.
     *
     * _Can only be used if this is Vehicle_
     */
    readonly terrain_friction_modifier?: float
    /**
     * Whether this vehicle allows passengers.
     *
     * _Can only be used if this is Vehicle_
     */
    readonly allow_passengers?: boolean
    /**
     * The radius of the area this radar can chart, in chunks.
     *
     * _Can only be used if this is Radar_
     */
    readonly max_distance_of_sector_revealed?: uint
    /**
     * The radius of the area constantly revealed by this radar, in chunks.
     *
     * _Can only be used if this is Radar_
     */
    readonly max_distance_of_nearby_sector_revealed?: uint
    /**
     * The bounding box that specifies which tiles adjacent to the offshore pump should be checked.
     *
     * _Can only be used if this is OffshorePump_
     */
    readonly adjacent_tile_collision_box?: BoundingBox
    /**
     * Tiles adjacent to the offshore pump must not collide with this collision mask.
     *
     * _Can only be used if this is OffshorePump_
     */
    readonly adjacent_tile_collision_mask?: CollisionMask
    /**
     * If this mask is not empty, tiles adjacent to the offshore pump must not collide with this collision mask.
     *
     * _Can only be used if this is OffshorePump_
     */
    readonly adjacent_tile_collision_test?: CollisionMask
    /**
     * The collision mask used only for collision test with tile directly at offshore pump position.
     *
     * _Can only be used if this is OffshorePump_
     */
    readonly center_collision_mask?: CollisionMask
    /**
     * The equipment grid prototype for this entity, if any.
     */
    readonly grid_prototype?: LuaEquipmentGridPrototype
    /**
     * Whether this entity should remove decoratives that collide with it when this entity is built.
     */
    readonly remove_decoratives: "automatic" | "true" | "false"
    /**
     * _Can only be used if this is TransportBelt_
     */
    readonly related_underground_belt?: LuaEntityPrototype
    /**
     * The built-in stack size bonus of this inserter prototype.
     *
     * _Can only be used if this is Inserter_
     */
    readonly inserter_stack_size_bonus?: uint
    /**
     * True if this entity prototype should be included during tile collision checks with {@link LuaTilePrototype#check_collision_with_entities LuaTilePrototype::check_collision_with_entities} enabled.
     */
    readonly protected_from_tile_building: boolean
    /**
     * True if this is entity-with-owner
     */
    readonly is_entity_with_owner: boolean
    /**
     * True if this entity-with-owner is military target
     *
     * _Can only be used if this is EntityWithOwner_
     */
    readonly is_military_target?: boolean
    /**
     * True if this entity-with-owner's is_military_target can be changed run-time (on the entity, not on the prototype itself)
     *
     * _Can only be used if this is EntityWithOwner_
     */
    readonly allow_run_time_change_of_is_military_target?: boolean
    /**
     * The logistic parameters for this roboport.
     *
     * Both the `charging_station_shift` and `stationing_offset` vectors are tables with `x` and `y` keys instead of an array.
     *
     * _Can only be used if this is Roboport_
     */
    readonly logistic_parameters?: {
      readonly spawn_and_station_height: float
      readonly spawn_and_station_shadow_height_offset: float
      readonly charge_approach_distance: float
      readonly logistic_radius: float
      readonly construction_radius: float
      readonly charging_station_count: uint
      readonly charging_distance: float
      readonly charging_station_shift: Vector
      readonly charging_energy: double
      readonly charging_threshold_distance: float
      readonly robot_vertical_acceleration: float
      readonly stationing_offset: Vector
      readonly robot_limit: uint
      readonly logistics_connection_distance: float
      readonly robots_shrink_when_entering_and_exiting: boolean
    }
    /**
     * The height of this spider vehicle prototype.
     *
     * _Can only be used if this is SpiderVehicle_
     */
    readonly height?: double
    /**
     * The torso rotation speed of this spider vehicle prototype.
     *
     * _Can only be used if this is SpiderVehicle_
     */
    readonly torso_rotation_speed?: double
    /**
     * The torso bob speed of this spider vehicle prototype.
     *
     * _Can only be used if this is SpiderVehicle_
     */
    readonly torso_bob_speed?: double
    /**
     * Whether this spider vehicle prototype automatically cycles weapons.
     *
     * _Can only be used if this is SpiderVehicle_
     */
    readonly automatic_weapon_cycling?: boolean
    /**
     * The chain shooting cooldown modifier of this spider vehicle prototype.
     *
     * _Can only be used if this is SpiderVehicle_
     */
    readonly chain_shooting_cooldown_modifier?: double
    /**
     * The chunk exploration radius of this spider vehicle prototype.
     *
     * _Can only be used if this is SpiderVehicle_
     */
    readonly chunk_exploration_radius?: double
    /**
     * The animation speed coefficient of this belt connectable prototype.
     *
     * _Can only be used if this is BeltConnectable_
     */
    readonly animation_speed_coefficient?: double
    /**
     * The manual range modifier for this artillery turret or wagon prototype.
     *
     * _Can only be used if this is ArtilleryWagon or ArtilleryTurret_
     */
    readonly manual_range_modifier?: double
    /**
     * The dying time of this corpse prototype.
     *
     * _Can only be used if this is Corpse_
     */
    readonly dying_speed?: float
    /**
     * The active energy usage of this rocket silo or combinator prototype.
     *
     * _Can only be used if this is RocketSilo or Combinator_
     */
    readonly active_energy_usage?: double
    /**
     * The lamp energy usage of this rocket silo prototype.
     *
     * _Can only be used if this is RocketSilo_
     */
    readonly lamp_energy_usage?: double
    /**
     * Whether this logistic container prototype uses exact mode
     *
     * _Can only be used if this is LogisticContainer_
     */
    readonly use_exact_mode?: boolean
    /**
     * Specifies the tiling size of the entity, is used to decide, if the center should be in the center of the tile (odd tile size dimension) or on the tile border (even tile size dimension)
     */
    readonly tile_width: uint
    /**
     * Specifies the tiling size of the entity, is used to decide, if the center should be in the center of the tile (odd tile size dimension) or on the tile border (even tile size dimension)
     */
    readonly tile_height: uint
    /**
     * Vertical selection shift used by rolling stocks. It affects selection box vertical position but is also used to shift rolling stock graphics along the rails to fine tune train's look.
     *
     * _Can only be used if this is RollingStock_
     */
    readonly vertical_selection_shift?: double
    /**
     * _Can only be used if this is Spawner or Turret_
     */
    readonly spawn_decoration?: TriggerEffectItem[]
    /**
     * _Can only be used if this is Spawner or Turret_
     */
    readonly spawn_decorations_on_expansion?: boolean
    /**
     * _Can only be used if this is RollingStock_
     */
    readonly connection_distance?: double
    /**
     * _Can only be used if this is RollingStock_
     */
    readonly joint_distance?: double
    readonly radius_visualisation_specification?: RadiusVisualisationSpecification
    /**
     * _Can only be used if this is MiningDrill_
     */
    readonly vector_to_place_result?: Vector
    /**
     * The current movement speed of this character, including effects from exoskeletons, tiles, stickers and shooting.
     *
     * _Can only be used if this is Character_
     */
    readonly running_speed?: double
    /**
     * _Can only be used if this is Character_
     */
    readonly maximum_corner_sliding_distance?: double
    /**
     * _Can only be used if this is Character_
     */
    readonly build_distance?: uint
    /**
     * _Can only be used if this is Character_
     */
    readonly drop_item_distance?: uint
    /**
     * _Can only be used if this is Character_
     */
    readonly reach_distance?: uint
    /**
     * _Can only be used if this is Character_
     */
    readonly reach_resource_distance?: double
    /**
     * _Can only be used if this is Character_
     */
    readonly item_pickup_distance?: double
    /**
     * _Can only be used if this is Character_
     */
    readonly loot_pickup_distance?: double
    /**
     * _Can only be used if this is Character_
     */
    readonly enter_vehicle_distance?: double
    /**
     * _Can only be used if this is Character_
     */
    readonly ticks_to_keep_gun?: uint
    /**
     * _Can only be used if this is Character_
     */
    readonly ticks_to_keep_aiming_direction?: uint
    /**
     * _Can only be used if this is Character_
     */
    readonly ticks_to_stay_in_combat?: uint
    /**
     * _Can only be used if this is Character_
     */
    readonly respawn_time?: uint
    /**
     * _Can only be used if this is Character_
     */
    readonly damage_hit_tint?: Color
    /**
     * _Can only be used if this is Character_
     */
    readonly character_corpse?: LuaEntityPrototype
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaEntityPrototype"
  }
  /**
   * @noSelf
   */
  export interface BaseEntityPrototype {
    /**
     * Test whether this entity prototype has a certain flag set.
     * @param flag The flag to test.
     * @returns `true` if this prototype has the given flag set.
     */
    has_flag(flag: EntityPrototypeFlag): boolean
    /**
     * Gets the base size of the given inventory on this entity or `nil` if the given inventory doesn't exist.
     */
    get_inventory_size(index: defines.inventory): uint | nil
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Type of this prototype.
     */
    readonly type: EntityType
    /**
     * Name of this prototype.
     */
    readonly name: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    /**
     * Max health of this entity. Will be `0` if this is not an entity with health.
     */
    readonly max_health: float
    /**
     * Whether this entity is minable and what can be obtained by mining it.
     */
    readonly mineable_properties: {
      /**
       * Is this entity mineable at all?
       */
      readonly minable: boolean
      /**
       * Energy required to mine an entity.
       */
      readonly mining_time: double
      /**
       * Prototype name of the particle produced when mining this entity. Will only be present if this entity produces any particle during mining.
       */
      readonly mining_particle?: string
      /**
       * Products obtained by mining this entity.
       */
      readonly products?: Product[]
      /**
       * The required fluid amount if any.
       */
      readonly fluid_amount?: double
      /**
       * The prototype name of the required fluid if any.
       */
      readonly required_fluid?: string
      /**
       * The mining trigger if any.
       */
      readonly mining_trigger?: TriggerItem[]
    }
    /**
     * Items that when placed will produce this entity, if any. Construction bots will choose the first item in the list to build this entity.
     */
    readonly items_to_place_this?: ItemStackDefinition[]
    /**
     * The bounding box used for collision checking.
     */
    readonly collision_box: BoundingBox
    /**
     * The secondary bounding box used for collision checking, if any. This is only used in rails and rail remnants.
     */
    readonly secondary_collision_box?: BoundingBox
    /**
     * The bounding box used for map generator collision checking.
     */
    readonly map_generator_bounding_box: BoundingBox
    /**
     * The bounding box used for drawing selection.
     */
    readonly selection_box: BoundingBox
    /**
     * The bounding box used for drawing the entity icon.
     */
    readonly drawing_box: BoundingBox
    /**
     * The bounding box used to attach sticker type entities.
     */
    readonly sticker_box: BoundingBox
    /**
     * The collision masks this entity uses
     */
    readonly collision_mask: CollisionMask
    readonly collision_mask_with_flags: CollisionMaskWithFlags
    /**
     * The hardcoded default collision mask (with flags) for this entity prototype type.
     */
    readonly default_collision_mask_with_flags: CollisionMaskWithFlags
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    /**
     * Group of this entity.
     */
    readonly group: LuaGroup
    /**
     * Subgroup of this entity.
     */
    readonly subgroup: LuaGroup
    /**
     * Amount this entity can heal per tick, if any.
     */
    readonly healing_per_tick?: float
    /**
     * Amount of pollution emissions per second this entity will create.
     */
    readonly emissions_per_second: double
    /**
     * Is this entity selectable?
     */
    readonly selectable_in_game: boolean
    /**
     * The selection priority of this entity - a value between 0 and 255
     */
    readonly selection_priority: uint
    /**
     * The group of mutually fast-replaceable entities, if any.
     */
    readonly fast_replaceable_group?: string
    /**
     * The next upgrade for this entity, if any.
     */
    readonly next_upgrade?: LuaEntityPrototype
    /**
     * Autoplace specification for this entity prototype, if any.
     */
    readonly autoplace_specification?: AutoplaceSpecification
    /**
     * The attack result of this entity, if any.
     */
    readonly attack_result?: TriggerItem[]
    /**
     * The attack parameters for this entity, if any.
     */
    readonly attack_parameters?: AttackParameters
    /**
     * The flags for this entity prototype.
     */
    readonly flags: EntityPrototypeFlags
    /**
     * The remains left behind when this entity is mined.
     */
    readonly remains_when_mined: LuaEntityPrototype[]
    /**
     * Entities this entity can be pasted onto in addition to the normal allowed ones.
     */
    readonly additional_pastable_entities: LuaEntityPrototype[]
    /**
     * When false copy-paste is not allowed for this entity.
     */
    readonly allow_copy_paste: boolean
    /**
     * The cursor size used when shooting at this entity.
     */
    readonly shooting_cursor_size: float
    /**
     * The smoke trigger run when this entity is built, if any.
     */
    readonly created_smoke?: {
      readonly smoke_name: string
      readonly offsets: Vector[]
      readonly offset_deviation: BoundingBox
      readonly initial_height: float
      readonly max_radius?: float
      readonly speed: Vector
      readonly speed_multiplier: float
      readonly speed_multiplier_deviation: float
      readonly starting_frame: float
      readonly starting_frame_deviation: float
      readonly starting_frame_speed: float
      readonly starting_frame_speed_deviation: float
      readonly speed_from_center: float
      readonly speed_from_center_deviation: float
    }
    /**
     * The trigger to run when this entity is created, if any.
     */
    readonly created_effect?: TriggerItem[]
    /**
     * The map color used when charting this entity if a friendly or enemy color isn't defined, if any.
     */
    readonly map_color?: Color
    /**
     * The friendly map color used when charting this entity.
     */
    readonly friendly_map_color: Color
    /**
     * The enemy map color used when charting this entity.
     */
    readonly enemy_map_color: Color
    /**
     * The evolution requirement to build this entity as a base when expanding enemy bases.
     */
    readonly build_base_evolution_requirement: double
    /**
     * The module inventory size. `nil` if this entity doesn't support modules.
     */
    readonly module_inventory_size?: uint
    /**
     * The maximum wire distance for this entity. 0 if the entity doesn't support wires.
     */
    readonly max_wire_distance: double
    /**
     * The maximum circuit wire distance for this entity. 0 if the entity doesn't support circuit wires.
     */
    readonly max_circuit_wire_distance: double
    /**
     * The direct energy usage of this entity, if any.
     */
    readonly energy_usage?: double
    /**
     * The theoretical maximum energy usage for this entity.
     */
    readonly max_energy_usage: double
    /**
     * The theoretical maximum energy production for this this entity.
     */
    readonly max_energy_production: double
    /**
     * A mapping of the gun name to the gun prototype this prototype uses. `nil` if this entity prototype doesn't use guns.
     */
    readonly guns?: Record<string, LuaItemPrototype>
    /**
     * The burner energy source prototype this entity uses, if any.
     */
    readonly burner_prototype?: LuaBurnerPrototype
    /**
     * The electric energy source prototype this entity uses, if any.
     */
    readonly electric_energy_source_prototype?: LuaElectricEnergySourcePrototype
    /**
     * The heat energy source prototype this entity uses, if any.
     */
    readonly heat_energy_source_prototype?: LuaHeatEnergySourcePrototype
    /**
     * The fluid energy source prototype this entity uses, if any.
     */
    readonly fluid_energy_source_prototype?: LuaFluidEnergySourcePrototype
    /**
     * The void energy source prototype this entity uses, if any.
     */
    readonly void_energy_source_prototype?: LuaVoidEnergySourcePrototype
    /**
     * The heat buffer prototype this entity uses, if any.
     */
    readonly heat_buffer_prototype?: LuaHeatBufferPrototype
    /**
     * The log2 of grid size of the building
     */
    readonly building_grid_bit_shift: uint
    /**
     * The fluid capacity of this entity or 0 if this entity doesn't support fluids.
     *
     * Crafting machines will report 0 due to their fluid capacity being whatever a given recipe needs.
     */
    readonly fluid_capacity: double
    /**
     * The time to live for this prototype or `0` if prototype doesn't have time_to_live or time_before_removed.
     */
    readonly time_to_live: uint
    /**
     * The color of the prototype, if any.
     */
    readonly color?: Color
    /**
     * Does this prototype collision mask collide with itself?
     */
    readonly collision_mask_collides_with_self: boolean
    /**
     * Does this prototype collision mask collide with tiles only?
     */
    readonly collision_mask_collides_with_tiles_only: boolean
    /**
     * Does this prototype collision mask consider tile transitions?
     */
    readonly collision_mask_considers_tile_transitions: boolean
    /**
     * The allowed module effects for this entity, if any.
     */
    readonly allowed_effects?: Record<string, boolean>
    /**
     * If this prototype will attempt to create a ghost of itself on death.
     *
     * If this is false then a ghost will never be made, if it's true a ghost may be made.
     */
    readonly create_ghost_on_death: boolean
    /**
     * The fluidbox prototypes for this entity.
     */
    readonly fluidbox_prototypes: LuaFluidBoxPrototype[]
    /**
     * {@link https://lua-api.factorio.com/latest/classes/LuaEntityPrototype.html#LuaEntityPrototype.is_building > These are the objects that are considered buildings:}
     */
    readonly is_building: boolean
    /**
     * The radius of this entity prototype.
     */
    readonly radius: double
    /**
     * The alert icon shift of this entity prototype.
     */
    readonly alert_icon_shift: Vector
    /**
     * The alert icon scale of this entity prototype.
     */
    readonly alert_icon_scale: float
    /**
     * Whether this entity prototype could possibly ever be rotated.
     */
    readonly supports_direction: boolean
    /**
     * The equipment grid prototype for this entity, if any.
     */
    readonly grid_prototype?: LuaEquipmentGridPrototype
    /**
     * Whether this entity should remove decoratives that collide with it when this entity is built.
     */
    readonly remove_decoratives: "automatic" | "true" | "false"
    /**
     * True if this entity prototype should be included during tile collision checks with {@link LuaTilePrototype#check_collision_with_entities LuaTilePrototype::check_collision_with_entities} enabled.
     */
    readonly protected_from_tile_building: boolean
    /**
     * True if this is entity-with-owner
     */
    readonly is_entity_with_owner: boolean
    /**
     * Specifies the tiling size of the entity, is used to decide, if the center should be in the center of the tile (odd tile size dimension) or on the tile border (even tile size dimension)
     */
    readonly tile_width: uint
    /**
     * Specifies the tiling size of the entity, is used to decide, if the center should be in the center of the tile (odd tile size dimension) or on the tile border (even tile size dimension)
     */
    readonly tile_height: uint
    readonly radius_visualisation_specification?: RadiusVisualisationSpecification
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaEntityPrototype"
  }
  export interface ResourceEntityPrototype extends BaseEntityPrototype {
    /**
     * Whether this resource is infinite.
     *
     * _Can only be used if this is ResourceEntity_
     */
    readonly infinite_resource?: boolean
    /**
     * Minimum amount of this resource.
     *
     * _Can only be used if this is ResourceEntity_
     */
    readonly minimum_resource_amount?: uint
    /**
     * The normal amount for this resource.
     *
     * _Can only be used if this is ResourceEntity_
     */
    readonly normal_resource_amount?: uint
    /**
     * Every time this infinite resource 'ticks' down, it is reduced by this amount. Meaningless if this isn't an infinite resource.
     *
     * _Can only be used if this is ResourceEntity_
     */
    readonly infinite_depletion_resource_amount?: uint
    /**
     * Name of the category of this resource.
     *
     * During data stage, this property is named "category".
     *
     * _Can only be used if this is ResourceEntity_
     */
    readonly resource_category?: string
  }
  export interface EntityWithHealthEntityPrototype extends BaseEntityPrototype {
    /**
     * Corpses used when this entity is destroyed. It is a dictionary indexed by the corpse's prototype name.
     *
     * _Can only be used if this is EntityWithHealth_
     */
    readonly corpses?: Record<string, LuaEntityPrototype>
    /**
     * List of resistances towards each damage type. It is a dictionary indexed by damage type names (see `data/base/prototypes/damage-type.lua`).
     *
     * _Can only be used if this is EntityWithHealth_
     */
    readonly resistances?: Record<string, Resistance>
    /**
     * Loot that will be dropped when this entity is killed, if any.
     *
     * _Can only be used if this is EntityWithHealth_
     */
    readonly loot?: Loot[]
    /**
     * Repair-speed modifier for this entity, if any. Actual repair speed will be `tool_repair_speed * entity_repair_speed_modifier`.
     *
     * _Can only be used if this is EntityWithHealth_
     */
    readonly repair_speed_modifier?: uint
    /**
     * Whether this entity raises an alert when damaged.
     *
     * _Can only be used if this is EntityWithHealth_
     */
    readonly alert_when_damaged?: boolean
  }
  export interface VehicleEntityPrototype extends BaseEntityPrototype {
    /**
     * The weight of this vehicle prototype.
     *
     * _Can only be used if this is Vehicle_
     */
    readonly weight?: double
    /**
     * The friction of this vehicle prototype.
     *
     * _Can only be used if this is Vehicle_
     */
    readonly friction_force?: double
    /**
     * The braking force of this vehicle prototype.
     *
     * _Can only be used if this is Vehicle_
     */
    readonly braking_force?: double
    /**
     * The energy used per hitpoint taken for this vehicle during collisions.
     *
     * _Can only be used if this is Vehicle_
     */
    readonly energy_per_hit_point?: double
    /**
     * The terrain friction modifier for this vehicle.
     *
     * _Can only be used if this is Vehicle_
     */
    readonly terrain_friction_modifier?: float
    /**
     * Whether this vehicle allows passengers.
     *
     * _Can only be used if this is Vehicle_
     */
    readonly allow_passengers?: boolean
  }
  export interface TurretEntityPrototype extends BaseEntityPrototype {
    /**
     * The range of this turret.
     *
     * _Can only be used if this is Turret_
     */
    readonly turret_range?: uint
    /**
     * Whether this turret raises an alert when attacking
     *
     * _Can only be used if this is Turret_
     */
    readonly alert_when_attacking?: boolean
    /**
     * _Can only be used if this is Spawner or Turret_
     */
    readonly spawn_decoration?: TriggerEffectItem[]
    /**
     * _Can only be used if this is Spawner or Turret_
     */
    readonly spawn_decorations_on_expansion?: boolean
  }
  export interface TransportBeltConnectableEntityPrototype extends BaseEntityPrototype {
    /**
     * The speed of this transport belt.
     *
     * _Can only be used if this is TransportBeltConnectable_
     */
    readonly belt_speed?: double
  }
  export interface SpawnerEntityPrototype extends BaseEntityPrototype {
    /**
     * The result units and spawn points with weight and evolution factor for a biter spawner entity.
     *
     * _Can only be used if this is Spawner_
     */
    readonly result_units?: UnitSpawnDefinition[]
    /**
     * The spawning cooldown for this enemy spawner prototype.
     *
     * _Can only be used if this is Spawner_
     */
    readonly spawn_cooldown?: {
      readonly min: double
      readonly max: double
    }
    /**
     * The minimum darkness at which this unit spawner can spawn entities.
     *
     * _Can only be used if this is Spawner_
     */
    readonly min_darkness_to_spawn?: float
    /**
     * The maximum darkness at which this unit spawner can spawn entities.
     *
     * _Can only be used if this is Spawner_
     */
    readonly max_darkness_to_spawn?: float
    /**
     * _Can only be used if this is Spawner_
     */
    readonly call_for_help_radius?: double
    /**
     * Count of enemies this spawner can sustain.
     *
     * _Can only be used if this is Spawner_
     */
    readonly max_count_of_owned_units?: double
    /**
     * How many friendly units are required within the spawning_radius of this spawner for it to stop producing more units.
     *
     * _Can only be used if this is Spawner_
     */
    readonly max_friends_around_to_spawn?: double
    /**
     * How far from the spawner can the units be spawned.
     *
     * _Can only be used if this is Spawner_
     */
    readonly spawning_radius?: double
    /**
     * What spaces should be between the spawned units.
     *
     * _Can only be used if this is Spawner_
     */
    readonly spawning_spacing?: double
    /**
     * _Can only be used if this is Spawner or Turret_
     */
    readonly spawn_decoration?: TriggerEffectItem[]
    /**
     * _Can only be used if this is Spawner or Turret_
     */
    readonly spawn_decorations_on_expansion?: boolean
  }
  export interface ProjectileEntityPrototype extends BaseEntityPrototype {
    /**
     * The final attack result for this projectile.
     *
     * _Can only be used if this is Projectile_
     */
    readonly final_attack_result?: TriggerItem[]
    /**
     * The max speed of this projectile or flying robot prototype.
     *
     * _Can only be used if this is Projectile or FlyingRobot_
     */
    readonly max_speed?: double
  }
  export interface MiningDrillEntityPrototype extends BaseEntityPrototype {
    /**
     * The mining radius of this mining drill prototype.
     *
     * _Can only be used if this is MiningDrill_
     */
    readonly mining_drill_radius?: double
    /**
     * The mining speed of this mining drill/character prototype.
     *
     * _Can only be used if this is MiningDrill or Character_
     */
    readonly mining_speed?: double
    /**
     * The {@link LuaResourceCategoryPrototype resource categories} this character or mining drill supports.
     *
     * The value in the dictionary is meaningless and exists just to allow for easy lookup.
     *
     * _Can only be used if this is MiningDrill or Character_
     */
    readonly resource_categories?: Record<string, true>
    /**
     * The base productivity of this crafting machine, lab, or mining drill.
     *
     * _Can only be used if this is CraftingMachine, Lab or MiningDrill_
     */
    readonly base_productivity?: double
    /**
     * _Can only be used if this is MiningDrill_
     */
    readonly vector_to_place_result?: Vector
  }
  export interface CharacterEntityPrototype extends BaseEntityPrototype {
    /**
     * The mining speed of this mining drill/character prototype.
     *
     * _Can only be used if this is MiningDrill or Character_
     */
    readonly mining_speed?: double
    /**
     * The {@link LuaRecipeCategoryPrototype crafting categories} this entity prototype supports.
     *
     * The value in the dictionary is meaningless and exists just to allow for easy lookup.
     *
     * _Can only be used if this is CraftingMachine or Character_
     */
    readonly crafting_categories?: Record<string, true>
    /**
     * The {@link LuaResourceCategoryPrototype resource categories} this character or mining drill supports.
     *
     * The value in the dictionary is meaningless and exists just to allow for easy lookup.
     *
     * _Can only be used if this is MiningDrill or Character_
     */
    readonly resource_categories?: Record<string, true>
    /**
     * Whether this unit, car, or character prototype has belt immunity.
     *
     * _Can only be used if this is Unit, Car or Character_
     */
    readonly has_belt_immunity?: boolean
    /**
     * The current movement speed of this character, including effects from exoskeletons, tiles, stickers and shooting.
     *
     * _Can only be used if this is Character_
     */
    readonly running_speed?: double
    /**
     * _Can only be used if this is Character_
     */
    readonly maximum_corner_sliding_distance?: double
    /**
     * _Can only be used if this is Character_
     */
    readonly build_distance?: uint
    /**
     * _Can only be used if this is Character_
     */
    readonly drop_item_distance?: uint
    /**
     * _Can only be used if this is Character_
     */
    readonly reach_distance?: uint
    /**
     * _Can only be used if this is Character_
     */
    readonly reach_resource_distance?: double
    /**
     * _Can only be used if this is Character_
     */
    readonly item_pickup_distance?: double
    /**
     * _Can only be used if this is Character_
     */
    readonly loot_pickup_distance?: double
    /**
     * _Can only be used if this is Character_
     */
    readonly enter_vehicle_distance?: double
    /**
     * _Can only be used if this is Character_
     */
    readonly ticks_to_keep_gun?: uint
    /**
     * _Can only be used if this is Character_
     */
    readonly ticks_to_keep_aiming_direction?: uint
    /**
     * _Can only be used if this is Character_
     */
    readonly ticks_to_stay_in_combat?: uint
    /**
     * _Can only be used if this is Character_
     */
    readonly respawn_time?: uint
    /**
     * _Can only be used if this is Character_
     */
    readonly damage_hit_tint?: Color
    /**
     * _Can only be used if this is Character_
     */
    readonly character_corpse?: LuaEntityPrototype
  }
  export interface LogisticContainerEntityPrototype extends BaseEntityPrototype {
    /**
     * The logistic mode of this logistic container.
     *
     * _Can only be used if this is LogisticContainer_
     */
    readonly logistic_mode?: "requester" | "active-provider" | "passive-provider" | "buffer" | "storage" | "none"
    /**
     * The filter count of this inserter, loader, or logistic chest. For logistic containers, `nil` means no limit.
     *
     * _Can only be used if this is Inserter, Loader or LogisticContainer_
     */
    readonly filter_count?: uint
    /**
     * Whether this logistic container prototype uses exact mode
     *
     * _Can only be used if this is LogisticContainer_
     */
    readonly use_exact_mode?: boolean
  }
  export interface UndergroundBeltEntityPrototype extends BaseEntityPrototype {
    /**
     * The max underground distance for underground belts and underground pipes.
     *
     * _Can only be used if this is UndergroundBelt or PipeToGround_
     */
    readonly max_underground_distance?: uint8
  }
  export interface PipeToGroundEntityPrototype extends BaseEntityPrototype {
    /**
     * The max underground distance for underground belts and underground pipes.
     *
     * _Can only be used if this is UndergroundBelt or PipeToGround_
     */
    readonly max_underground_distance?: uint8
  }
  export interface ProgrammableSpeakerEntityPrototype extends BaseEntityPrototype {
    /**
     * The instruments for this programmable speaker.
     *
     * _Can only be used if this is ProgrammableSpeaker_
     */
    readonly instruments?: ProgrammableSpeakerInstrument[]
    /**
     * The maximum polyphony for this programmable speaker.
     *
     * _Can only be used if this is ProgrammableSpeaker_
     */
    readonly max_polyphony?: uint
  }
  export interface CraftingMachineEntityPrototype extends BaseEntityPrototype {
    /**
     * The max number of ingredients this crafting machine prototype supports.
     *
     * _Can only be used if this is CraftingMachine_
     */
    readonly ingredient_count?: uint
    /**
     * The crafting speed.
     *
     * _Can only be used if this is CraftingMachine_
     */
    readonly crafting_speed?: double
    /**
     * The {@link LuaRecipeCategoryPrototype crafting categories} this entity prototype supports.
     *
     * The value in the dictionary is meaningless and exists just to allow for easy lookup.
     *
     * _Can only be used if this is CraftingMachine or Character_
     */
    readonly crafting_categories?: Record<string, true>
    /**
     * The base productivity of this crafting machine, lab, or mining drill.
     *
     * _Can only be used if this is CraftingMachine, Lab or MiningDrill_
     */
    readonly base_productivity?: double
  }
  export interface ElectricPoleEntityPrototype extends BaseEntityPrototype {
    /**
     * The supply area of this electric pole or beacon prototype.
     *
     * _Can only be used if this is ElectricPole or Beacon_
     */
    readonly supply_area_distance?: double
  }
  export interface BeaconEntityPrototype extends BaseEntityPrototype {
    /**
     * The supply area of this electric pole or beacon prototype.
     *
     * _Can only be used if this is ElectricPole or Beacon_
     */
    readonly supply_area_distance?: double
    /**
     * The distribution effectivity for this beacon prototype.
     *
     * _Can only be used if this is Beacon_
     */
    readonly distribution_effectivity?: double
  }
  export interface CarEntityPrototype extends BaseEntityPrototype {
    /**
     * The effectivity of this car prototype, generator prototype.
     *
     * _Can only be used if this is Car or Generator_
     */
    readonly effectivity?: double
    /**
     * The energy consumption of this car prototype.
     *
     * _Can only be used if this is Car_
     */
    readonly consumption?: double
    /**
     * If this car prototype uses tank controls to drive.
     *
     * _Can only be used if this is Car_
     */
    readonly tank_driving?: boolean
    /**
     * The rotation speed of this car prototype.
     *
     * _Can only be used if this is Car_
     */
    readonly rotation_speed?: double
    /**
     * The turret rotation speed of this car prototype.
     *
     * _Can only be used if this is Car_
     */
    readonly turret_rotation_speed?: float
    /**
     * A vector of the gun prototypes of this car, spider vehicle, artillery wagon, or turret.
     *
     * _Can only be used if this is Car, SpiderVehicle, ArtilleryTurret or ArtilleryWagon_
     */
    readonly indexed_guns?: LuaItemPrototype[]
    /**
     * Whether this unit, car, or character prototype has belt immunity.
     *
     * _Can only be used if this is Unit, Car or Character_
     */
    readonly has_belt_immunity?: boolean
  }
  export interface GeneratorEntityPrototype extends BaseEntityPrototype {
    /**
     * The effectivity of this car prototype, generator prototype.
     *
     * _Can only be used if this is Car or Generator_
     */
    readonly effectivity?: double
    /**
     * The fluid usage of this generator prototype.
     *
     * _Can only be used if this is Generator_
     */
    readonly fluid_usage_per_tick?: double
    /**
     * The maximum fluid temperature of this generator prototype.
     *
     * _Can only be used if this is Generator_
     */
    readonly maximum_temperature?: double
    /**
     * Whether this generator prototype burns fluid.
     *
     * _Can only be used if this is Generator_
     */
    readonly burns_fluid?: boolean
    /**
     * Whether this generator prototype scales fluid usage.
     *
     * _Can only be used if this is Generator_
     */
    readonly scale_fluid_usage?: boolean
    /**
     * Whether this generator prototype destroys non-fuel fluids.
     *
     * _Can only be used if this is Generator_
     */
    readonly destroy_non_fuel_fluid?: boolean
    /**
     * The default maximum power output of this generator prototype.
     *
     * _Can only be used if this is BurnerGenerator or Generator_
     */
    readonly max_power_output?: double
  }
  export interface RollingStockEntityPrototype extends BaseEntityPrototype {
    /**
     * The air resistance of this rolling stock prototype.
     *
     * _Can only be used if this is RollingStock_
     */
    readonly air_resistance?: double
    /**
     * The default speed of this flying robot, rolling stock or unit. For rolling stocks, this is their `max_speed`.
     *
     * _Can only be used if this is FlyingRobot, RollingStock or Unit_
     */
    readonly speed?: double
    /**
     * Vertical selection shift used by rolling stocks. It affects selection box vertical position but is also used to shift rolling stock graphics along the rails to fine tune train's look.
     *
     * _Can only be used if this is RollingStock_
     */
    readonly vertical_selection_shift?: double
    /**
     * _Can only be used if this is RollingStock_
     */
    readonly connection_distance?: double
    /**
     * _Can only be used if this is RollingStock_
     */
    readonly joint_distance?: double
  }
  export interface SpiderVehicleEntityPrototype extends BaseEntityPrototype {
    /**
     * A vector of the gun prototypes of this car, spider vehicle, artillery wagon, or turret.
     *
     * _Can only be used if this is Car, SpiderVehicle, ArtilleryTurret or ArtilleryWagon_
     */
    readonly indexed_guns?: LuaItemPrototype[]
    /**
     * The height of this spider vehicle prototype.
     *
     * _Can only be used if this is SpiderVehicle_
     */
    readonly height?: double
    /**
     * The torso rotation speed of this spider vehicle prototype.
     *
     * _Can only be used if this is SpiderVehicle_
     */
    readonly torso_rotation_speed?: double
    /**
     * The torso bob speed of this spider vehicle prototype.
     *
     * _Can only be used if this is SpiderVehicle_
     */
    readonly torso_bob_speed?: double
    /**
     * Whether this spider vehicle prototype automatically cycles weapons.
     *
     * _Can only be used if this is SpiderVehicle_
     */
    readonly automatic_weapon_cycling?: boolean
    /**
     * The chain shooting cooldown modifier of this spider vehicle prototype.
     *
     * _Can only be used if this is SpiderVehicle_
     */
    readonly chain_shooting_cooldown_modifier?: double
    /**
     * The chunk exploration radius of this spider vehicle prototype.
     *
     * _Can only be used if this is SpiderVehicle_
     */
    readonly chunk_exploration_radius?: double
  }
  export interface ArtilleryTurretEntityPrototype extends BaseEntityPrototype {
    /**
     * A vector of the gun prototypes of this car, spider vehicle, artillery wagon, or turret.
     *
     * _Can only be used if this is Car, SpiderVehicle, ArtilleryTurret or ArtilleryWagon_
     */
    readonly indexed_guns?: LuaItemPrototype[]
    /**
     * The amount of ammo that inserters automatically insert into this ammo-turret or artillery-turret.
     *
     * _Can only be used if this is ArtilleryTurret or AmmoTurret_
     */
    readonly automated_ammo_count?: uint
    /**
     * The manual range modifier for this artillery turret or wagon prototype.
     *
     * _Can only be used if this is ArtilleryWagon or ArtilleryTurret_
     */
    readonly manual_range_modifier?: double
  }
  export interface ArtilleryWagonEntityPrototype extends BaseEntityPrototype {
    /**
     * A vector of the gun prototypes of this car, spider vehicle, artillery wagon, or turret.
     *
     * _Can only be used if this is Car, SpiderVehicle, ArtilleryTurret or ArtilleryWagon_
     */
    readonly indexed_guns?: LuaItemPrototype[]
    /**
     * The manual range modifier for this artillery turret or wagon prototype.
     *
     * _Can only be used if this is ArtilleryWagon or ArtilleryTurret_
     */
    readonly manual_range_modifier?: double
  }
  export interface FlyingRobotEntityPrototype extends BaseEntityPrototype {
    /**
     * The default speed of this flying robot, rolling stock or unit. For rolling stocks, this is their `max_speed`.
     *
     * _Can only be used if this is FlyingRobot, RollingStock or Unit_
     */
    readonly speed?: double
    /**
     * The speed multiplier when this flying robot is out of energy.
     *
     * _Can only be used if this is FlyingRobot_
     */
    readonly speed_multiplier_when_out_of_energy?: float
    /**
     * The energy consumed per tile moved for this flying robot.
     *
     * _Can only be used if this is FlyingRobot_
     */
    readonly energy_per_move?: double
    /**
     * The energy consumed per tick for this flying robot.
     *
     * _Can only be used if this is FlyingRobot_
     */
    readonly energy_per_tick?: double
    /**
     * The max energy for this flying robot.
     *
     * _Can only be used if this is FlyingRobot_
     */
    readonly max_energy?: double
    /**
     * The minimum energy for this flying robot before it tries to recharge.
     *
     * _Can only be used if this is FlyingRobot_
     */
    readonly min_to_charge?: float
    /**
     * The maximum energy for this flying robot above which it won't try to recharge when stationing.
     *
     * _Can only be used if this is FlyingRobot_
     */
    readonly max_to_charge?: float
    /**
     * The max speed of this projectile or flying robot prototype.
     *
     * _Can only be used if this is Projectile or FlyingRobot_
     */
    readonly max_speed?: double
  }
  export interface UnitEntityPrototype extends BaseEntityPrototype {
    /**
     * The default speed of this flying robot, rolling stock or unit. For rolling stocks, this is their `max_speed`.
     *
     * _Can only be used if this is FlyingRobot, RollingStock or Unit_
     */
    readonly speed?: double
    /**
     * Whether this unit, car, or character prototype has belt immunity.
     *
     * _Can only be used if this is Unit, Car or Character_
     */
    readonly has_belt_immunity?: boolean
    /**
     * The vision distance of this unit prototype.
     *
     * _Can only be used if this is Unit_
     */
    readonly vision_distance?: double
    /**
     * The amount of pollution that has to be absorbed by the unit's spawner before the unit will leave the spawner and attack the source of the pollution.
     *
     * _Can only be used if this is Unit_
     */
    readonly pollution_to_join_attack?: float
    /**
     * The minimum pursue time of this unit prototype.
     *
     * _Can only be used if this is Unit_
     */
    readonly min_pursue_time?: uint
    /**
     * The maximum pursue distance of this unit prototype.
     *
     * _Can only be used if this is Unit_
     */
    readonly max_pursue_distance?: double
    /**
     * The radar range of this unit prototype.
     *
     * _Can only be used if this is Unit_
     */
    readonly radar_range?: uint
    /**
     * Whether this unit prototype can move while shooting.
     *
     * _Can only be used if this is Unit_
     */
    readonly move_while_shooting?: boolean
    /**
     * Whether this unit prototype can open gates.
     *
     * _Can only be used if this is Unit_
     */
    readonly can_open_gates?: boolean
    /**
     * Whether this unit prototype is affected by tile walking speed modifiers.
     *
     * _Can only be used if this is Unit_
     */
    readonly affected_by_tiles?: boolean
    /**
     * The distraction cooldown of this unit prototype.
     *
     * _Can only be used if this is Unit_
     */
    readonly distraction_cooldown?: uint
    /**
     * The spawning time modifier of this unit prototype.
     *
     * _Can only be used if this is Unit_
     */
    readonly spawning_time_modifier?: double
  }
  export interface RobotWithLogisticsInterfaceEntityPrototype extends BaseEntityPrototype {
    /**
     * The max payload size of this logistics or construction robot.
     *
     * _Can only be used if this is RobotWithLogisticsInterface_
     */
    readonly max_payload_size?: uint
    /**
     * Whether this logistics or construction robot renders its cargo when flying.
     *
     * _Can only be used if this is RobotWithLogisticsInterface_
     */
    readonly draw_cargo?: boolean
  }
  export interface BurnerGeneratorEntityPrototype extends BaseEntityPrototype {
    /**
     * The default maximum power output of this generator prototype.
     *
     * _Can only be used if this is BurnerGenerator or Generator_
     */
    readonly max_power_output?: double
  }
  export interface BoilerEntityPrototype extends BaseEntityPrototype {
    /**
     * The target temperature of this boiler prototype.
     *
     * _Can only be used if this is Boiler_
     */
    readonly target_temperature?: double
    /**
     * The boiler operation mode of this boiler prototype.
     *
     * _Can only be used if this is Boiler_
     */
    readonly boiler_mode?: "heat-water-inside" | "output-to-separate-pipe"
  }
  export interface OffshorePumpEntityPrototype extends BaseEntityPrototype {
    /**
     * The fluid this offshore pump produces.
     *
     * _Can only be used if this is OffshorePump_
     */
    readonly fluid?: LuaFluidPrototype
    /**
     * The pumping speed of this offshore or normal pump.
     *
     * _Can only be used if this is OffshorePump or Pump_
     */
    readonly pumping_speed?: double
    /**
     * The bounding box that specifies which tiles adjacent to the offshore pump should be checked.
     *
     * _Can only be used if this is OffshorePump_
     */
    readonly adjacent_tile_collision_box?: BoundingBox
    /**
     * Tiles adjacent to the offshore pump must not collide with this collision mask.
     *
     * _Can only be used if this is OffshorePump_
     */
    readonly adjacent_tile_collision_mask?: CollisionMask
    /**
     * If this mask is not empty, tiles adjacent to the offshore pump must not collide with this collision mask.
     *
     * _Can only be used if this is OffshorePump_
     */
    readonly adjacent_tile_collision_test?: CollisionMask
    /**
     * The collision mask used only for collision test with tile directly at offshore pump position.
     *
     * _Can only be used if this is OffshorePump_
     */
    readonly center_collision_mask?: CollisionMask
  }
  export interface PumpEntityPrototype extends BaseEntityPrototype {
    /**
     * The pumping speed of this offshore or normal pump.
     *
     * _Can only be used if this is OffshorePump or Pump_
     */
    readonly pumping_speed?: double
  }
  export interface InserterEntityPrototype extends BaseEntityPrototype {
    /**
     * Whether this inserter is a stack-type.
     *
     * _Can only be used if this is Inserter_
     */
    readonly stack?: boolean
    /**
     * Whether this inserter allows custom pickup and drop vectors.
     *
     * _Can only be used if this is Inserter_
     */
    readonly allow_custom_vectors?: boolean
    /**
     * Whether this inserter allows burner leeching.
     *
     * _Can only be used if this is Inserter_
     */
    readonly allow_burner_leech?: boolean
    /**
     * The extension speed of this inserter.
     *
     * _Can only be used if this is Inserter_
     */
    readonly inserter_extension_speed?: double
    /**
     * The rotation speed of this inserter.
     *
     * _Can only be used if this is Inserter_
     */
    readonly inserter_rotation_speed?: double
    /**
     * The pickup position for this inserter.
     *
     * _Can only be used if this is Inserter_
     */
    readonly inserter_pickup_position?: Vector
    /**
     * The drop position for this inserter.
     *
     * _Can only be used if this is Inserter_
     */
    readonly inserter_drop_position?: Vector
    /**
     * True if this inserter chases items on belts for pickup.
     *
     * _Can only be used if this is Inserter_
     */
    readonly inserter_chases_belt_items?: boolean
    /**
     * The filter count of this inserter, loader, or logistic chest. For logistic containers, `nil` means no limit.
     *
     * _Can only be used if this is Inserter, Loader or LogisticContainer_
     */
    readonly filter_count?: uint
    /**
     * The built-in stack size bonus of this inserter prototype.
     *
     * _Can only be used if this is Inserter_
     */
    readonly inserter_stack_size_bonus?: uint
  }
  export interface SimpleEntityPrototype extends BaseEntityPrototype {
    /**
     * If this simple-entity is counted as a rock for the deconstruction planner "trees and rocks only" filter.
     *
     * _Can only be used if this is SimpleEntity_
     */
    readonly count_as_rock_for_filtered_deconstruction?: boolean
  }
  export interface LoaderEntityPrototype extends BaseEntityPrototype {
    /**
     * The filter count of this inserter, loader, or logistic chest. For logistic containers, `nil` means no limit.
     *
     * _Can only be used if this is Inserter, Loader or LogisticContainer_
     */
    readonly filter_count?: uint
    /**
     * _Can only be used if this is Loader_
     */
    readonly container_distance?: double
    /**
     * _Can only be used if this is Loader_
     */
    readonly belt_distance?: double
    /**
     * _Can only be used if this is Loader_
     */
    readonly belt_length?: double
  }
  export interface ExplosionEntityPrototype extends BaseEntityPrototype {
    /**
     * Whether this explosion has a beam.
     *
     * _Can only be used if this is Explosion_
     */
    readonly explosion_beam?: double
    /**
     * Whether this explosion rotates.
     *
     * _Can only be used if this is Explosion_
     */
    readonly explosion_rotate?: double
  }
  export interface TreeEntityPrototype extends BaseEntityPrototype {
    /**
     * If it is a tree, return the number of colors it supports.
     *
     * _Can only be used if this is Tree_
     */
    readonly tree_color_count?: uint8
  }
  export interface RocketSiloEntityPrototype extends BaseEntityPrototype {
    /**
     * The rocket parts required for this rocket silo prototype.
     *
     * _Can only be used if this is RocketSilo_
     */
    readonly rocket_parts_required?: uint
    /**
     * The rocket rising delay for this rocket silo prototype.
     *
     * _Can only be used if this is RocketSilo_
     */
    readonly rocket_rising_delay?: uint8
    /**
     * The rocket launch delay for this rocket silo prototype.
     *
     * _Can only be used if this is RocketSilo_
     */
    readonly launch_wait_time?: uint8
    /**
     * The light blinking speed for this rocket silo prototype.
     *
     * _Can only be used if this is RocketSilo_
     */
    readonly light_blinking_speed?: double
    /**
     * The door opening speed for this rocket silo prototype.
     *
     * _Can only be used if this is RocketSilo_
     */
    readonly door_opening_speed?: double
    /**
     * The rocket entity prototype associated with this rocket silo prototype.
     *
     * _Can only be used if this is RocketSilo_
     */
    readonly rocket_entity_prototype?: LuaEntityPrototype
    /**
     * The active energy usage of this rocket silo or combinator prototype.
     *
     * _Can only be used if this is RocketSilo or Combinator_
     */
    readonly active_energy_usage?: double
    /**
     * The lamp energy usage of this rocket silo prototype.
     *
     * _Can only be used if this is RocketSilo_
     */
    readonly lamp_energy_usage?: double
  }
  export interface RocketSiloRocketEntityPrototype extends BaseEntityPrototype {
    /**
     * The rising speed for this rocket silo rocket prototype.
     *
     * _Can only be used if this is RocketSiloRocket_
     */
    readonly rising_speed?: double
    /**
     * The engine starting speed for this rocket silo rocket prototype.
     *
     * _Can only be used if this is RocketSiloRocket_
     */
    readonly engine_starting_speed?: double
    /**
     * The flying speed for this rocket silo rocket prototype.
     *
     * _Can only be used if this is RocketSiloRocket_
     */
    readonly flying_speed?: double
    /**
     * The flying acceleration for this rocket silo rocket prototype.
     *
     * _Can only be used if this is RocketSiloRocket_
     */
    readonly flying_acceleration?: double
  }
  export interface AssemblingMachineEntityPrototype extends BaseEntityPrototype {
    /**
     * The fixed recipe name for this assembling machine prototype, if any.
     *
     * _Can only be used if this is AssemblingMachine_
     */
    readonly fixed_recipe?: string
  }
  export interface RoboportEntityPrototype extends BaseEntityPrototype {
    /**
     * The construction radius for this roboport prototype.
     *
     * _Can only be used if this is Roboport_
     */
    readonly construction_radius?: double
    /**
     * The logistic radius for this roboport prototype.
     *
     * _Can only be used if this is Roboport_
     */
    readonly logistic_radius?: double
    /**
     * The logistic parameters for this roboport.
     *
     * Both the `charging_station_shift` and `stationing_offset` vectors are tables with `x` and `y` keys instead of an array.
     *
     * _Can only be used if this is Roboport_
     */
    readonly logistic_parameters?: {
      readonly spawn_and_station_height: float
      readonly spawn_and_station_shadow_height_offset: float
      readonly charge_approach_distance: float
      readonly logistic_radius: float
      readonly construction_radius: float
      readonly charging_station_count: uint
      readonly charging_distance: float
      readonly charging_station_shift: Vector
      readonly charging_energy: double
      readonly charging_threshold_distance: float
      readonly robot_vertical_acceleration: float
      readonly stationing_offset: Vector
      readonly robot_limit: uint
      readonly logistics_connection_distance: float
      readonly robots_shrink_when_entering_and_exiting: boolean
    }
  }
  export interface LandMineEntityPrototype extends BaseEntityPrototype {
    /**
     * Name of the ammo category of this land mine.
     *
     * _Can only be used if this is LandMine_
     */
    readonly ammo_category?: string
    /**
     * The time it takes this land mine to arm.
     *
     * _Can only be used if this is LandMine_
     */
    readonly timeout?: uint
    /**
     * The collision mask entities must collide with to make this landmine blow up.
     *
     * _Can only be used if this is LandMine_
     */
    readonly trigger_collision_mask?: CollisionMaskWithFlags
  }
  export interface ReactorEntityPrototype extends BaseEntityPrototype {
    /**
     * _Can only be used if this is Reactor_
     */
    readonly neighbour_bonus?: double
  }
  export interface AmmoTurretEntityPrototype extends BaseEntityPrototype {
    /**
     * The amount of ammo that inserters automatically insert into this ammo-turret or artillery-turret.
     *
     * _Can only be used if this is ArtilleryTurret or AmmoTurret_
     */
    readonly automated_ammo_count?: uint
  }
  export interface LampEntityPrototype extends BaseEntityPrototype {
    /**
     * Value between 0 and 1 darkness where all lamps of this lamp prototype are on.
     *
     * _Can only be used if this is Lamp_
     */
    readonly darkness_for_all_lamps_on?: float
    /**
     * Value between 0 and 1 darkness where all lamps of this lamp prototype are off.
     *
     * _Can only be used if this is Lamp_
     */
    readonly darkness_for_all_lamps_off?: float
    /**
     * Whether the lamp is always on (except when out of power or turned off by the circuit network).
     *
     * _Can only be used if this is Lamp_
     */
    readonly always_on?: boolean
  }
  export interface CliffEntityPrototype extends BaseEntityPrototype {
    /**
     * The item prototype name used to destroy this cliff.
     *
     * _Can only be used if this is Cliff_
     */
    readonly cliff_explosive_prototype?: string
  }
  export interface LabEntityPrototype extends BaseEntityPrototype {
    /**
     * The item prototype names that are the inputs of this lab prototype.
     *
     * _Can only be used if this is Lab_
     */
    readonly lab_inputs?: string[]
    /**
     * The base researching speed of this lab prototype.
     *
     * _Can only be used if this is Lab_
     */
    readonly researching_speed?: double
    /**
     * The base productivity of this crafting machine, lab, or mining drill.
     *
     * _Can only be used if this is CraftingMachine, Lab or MiningDrill_
     */
    readonly base_productivity?: double
  }
  export interface ConstantCombinatorEntityPrototype extends BaseEntityPrototype {
    /**
     * The item slot count of this constant combinator prototype.
     *
     * _Can only be used if this is ConstantCombinator_
     */
    readonly item_slot_count?: uint
  }
  export interface MarketEntityPrototype extends BaseEntityPrototype {
    /**
     * Whether this market allows access to all forces or just friendly ones.
     *
     * _Can only be used if this is Market_
     */
    readonly allow_access_to_all_forces?: boolean
  }
  export interface RadarEntityPrototype extends BaseEntityPrototype {
    /**
     * The radius of the area this radar can chart, in chunks.
     *
     * _Can only be used if this is Radar_
     */
    readonly max_distance_of_sector_revealed?: uint
    /**
     * The radius of the area constantly revealed by this radar, in chunks.
     *
     * _Can only be used if this is Radar_
     */
    readonly max_distance_of_nearby_sector_revealed?: uint
  }
  export interface TransportBeltEntityPrototype extends BaseEntityPrototype {
    /**
     * _Can only be used if this is TransportBelt_
     */
    readonly related_underground_belt?: LuaEntityPrototype
  }
  export interface EntityWithOwnerEntityPrototype extends BaseEntityPrototype {
    /**
     * True if this entity-with-owner is military target
     *
     * _Can only be used if this is EntityWithOwner_
     */
    readonly is_military_target?: boolean
    /**
     * True if this entity-with-owner's is_military_target can be changed run-time (on the entity, not on the prototype itself)
     *
     * _Can only be used if this is EntityWithOwner_
     */
    readonly allow_run_time_change_of_is_military_target?: boolean
  }
  export interface BeltConnectableEntityPrototype extends BaseEntityPrototype {
    /**
     * The animation speed coefficient of this belt connectable prototype.
     *
     * _Can only be used if this is BeltConnectable_
     */
    readonly animation_speed_coefficient?: double
  }
  export interface CorpseEntityPrototype extends BaseEntityPrototype {
    /**
     * The dying time of this corpse prototype.
     *
     * _Can only be used if this is Corpse_
     */
    readonly dying_speed?: float
  }
  export interface CombinatorEntityPrototype extends BaseEntityPrototype {
    /**
     * The active energy usage of this rocket silo or combinator prototype.
     *
     * _Can only be used if this is RocketSilo or Combinator_
     */
    readonly active_energy_usage?: double
  }
  /**
   * An item in a {@link LuaEquipmentGrid}, for example a fusion reactor placed in one's power armor.
   *
   * An equipment reference becomes invalid once the equipment is removed or the equipment grid it resides in is destroyed.
   * @noSelf
   */
  export interface LuaEquipment {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Name of this equipment.
     */
    readonly name: string
    /**
     * Type of this equipment.
     */
    readonly type: EquipmentType
    /**
     * Position of this equipment in the equipment grid.
     */
    readonly position: EquipmentPosition
    /**
     * Shape of this equipment.
     */
    readonly shape: {
      readonly width: uint
      readonly height: uint
    }
    /**
     * Current shield value of the equipment.
     *
     * Can't be set higher than {@link LuaEquipment#max_shield LuaEquipment::max_shield}.
     */
    shield: double
    /**
     * Maximum shield value.
     */
    readonly max_shield: double
    /**
     * Maximum solar power generated.
     */
    readonly max_solar_power: double
    /**
     * Movement speed bonus.
     */
    readonly movement_bonus: double
    /**
     * Energy generated per tick.
     */
    readonly generator_power: double
    /**
     * Current available energy.
     */
    energy: double
    /**
     * Maximum amount of energy that can be stored in this equipment.
     */
    readonly max_energy: double
    readonly prototype: LuaEquipmentPrototype
    /**
     * The burner energy source for this equipment, if any.
     */
    readonly burner?: LuaBurner
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaEquipment"
  }
  /**
   * Prototype of an equipment category.
   * @noSelf
   */
  export interface LuaEquipmentCategoryPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Name of this prototype.
     */
    readonly name: string
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaEquipmentCategoryPrototype"
  }
  /**
   * An equipment grid is for example the inside of a power armor.
   * @noSelf
   */
  export interface LuaEquipmentGrid {
    /**
     * Remove an equipment from the grid.
     * @returns The removed equipment, or `nil` if no equipment was removed.
     */
    take(params: {
      /**
       * Take the equipment that contains this position in the grid.
       */
      readonly position?: EquipmentPosition | EquipmentPositionArray
      /**
       * Take this exact equipment.
       */
      readonly equipment?: LuaEquipment
      /**
       * If provided the action is done 'as' this player and {@link OnPlayerRemovedEquipmentEvent on_player_removed_equipment} is triggered.
       */
      readonly by_player?: PlayerIdentification
    }): SimpleItemStack | nil
    /**
     * Remove all equipment from the grid.
     * @param by_player If provided, the action is done 'as' this player and {@link OnPlayerRemovedEquipmentEvent on_player_removed_equipment} is triggered.
     * @returns Count of each removed equipment, indexed by their prototype names.
     */
    take_all(by_player?: PlayerIdentification): Record<string, uint>
    /**
     * Clear all equipment from the grid, removing it without actually returning it.
     * @param by_player If provided, the action is done 'as' this player and {@link OnPlayerRemovedEquipmentEvent on_player_removed_equipment} is triggered.
     */
    clear(by_player?: PlayerIdentification): void
    /**
     * Insert an equipment into the grid.
     * @returns The newly-added equipment, or `nil` if the equipment could not be added.
     */
    put(params: {
      /**
       * Equipment prototype name
       */
      readonly name: string
      /**
       * Grid position to put the equipment in.
       */
      readonly position?: EquipmentPosition | EquipmentPositionArray
      /**
       * If provided the action is done 'as' this player and {@link OnPlayerPlacedEquipmentEvent on_player_placed_equipment} is triggered.
       */
      readonly by_player?: PlayerIdentification
    }): LuaEquipment | nil
    /**
     * Check whether moving an equipment would succeed.
     */
    can_move(params: {
      /**
       * The equipment to move
       */
      readonly equipment: LuaEquipment
      /**
       * Where to put it
       */
      readonly position: EquipmentPosition | EquipmentPositionArray
    }): boolean
    /**
     * Move an equipment within this grid.
     * @returns `true` if the equipment was successfully moved.
     */
    move(params: {
      /**
       * The equipment to move
       */
      readonly equipment: LuaEquipment
      /**
       * Where to put it
       */
      readonly position: EquipmentPosition | EquipmentPositionArray
    }): boolean
    /**
     * Find equipment in the Equipment Grid based off a position.
     * @param position The position
     * @returns The found equipment, or `nil` if equipment could not be found at the given position.
     */
    get(position: EquipmentPosition | EquipmentPositionArray): LuaEquipment | nil
    /**
     * Get counts of all equipment in this grid.
     * @returns The counts, indexed by equipment names.
     */
    get_contents(): Record<string, uint>
    /**
     * Find equipment by name.
     * @param equipment Prototype name of the equipment to find.
     * @returns The first found equipment, or `nil` if equipment could not be found.
     */
    find(equipment: string): LuaEquipment | nil
    /**
     * Get the number of all or some equipment in this grid.
     * @param equipment Prototype name of the equipment to count. If not specified, count all equipment.
     */
    count(equipment?: string): uint
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    readonly prototype: LuaEquipmentGridPrototype
    /**
     * Width of the equipment grid.
     */
    readonly width: uint
    /**
     * Height of the equipment grid.
     */
    readonly height: uint
    /**
     * All the equipment in this grid.
     */
    readonly equipment: LuaEquipment[]
    /**
     * Total energy per tick generated by the equipment inside this grid.
     */
    readonly generator_energy: double
    /**
     * Maximum energy per tick that can be created by any solar panels in the equipment grid. Actual generated energy varies depending on the daylight levels.
     */
    readonly max_solar_energy: double
    /**
     * The total energy stored in all batteries in the equipment grid.
     */
    readonly available_in_batteries: double
    /**
     * Total energy storage capacity of all batteries in the equipment grid.
     */
    readonly battery_capacity: double
    /**
     * The amount of shields this equipment grid has.
     */
    readonly shield: float
    /**
     * The maximum amount of shields this equipment grid has.
     */
    readonly max_shield: float
    /**
     * Whether this grid's equipment movement bonus is active.
     */
    inhibit_movement_bonus: boolean
    /**
     * Unique identifier of this equipment grid.
     */
    readonly unique_id: uint
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaEquipmentGrid"
  }
  /**
   * Prototype of an equipment grid.
   * @noSelf
   */
  export interface LuaEquipmentGridPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Name of this prototype.
     */
    readonly name: string
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    /**
     * Equipment category names for the {@link LuaEquipmentPrototype#equipment_categories categories} that may be inserted into this equipment grid. The grid will accept any equipment that has at least one category in this list.
     */
    readonly equipment_categories: string[]
    readonly width: uint
    readonly height: uint
    /**
     * If the player can move equipment into or out of this grid.
     */
    readonly locked: boolean
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaEquipmentGridPrototype"
  }
  /**
   * Prototype of a modular equipment.
   * @noSelf
   */
  export interface LuaEquipmentPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Name of this prototype.
     */
    readonly name: string
    /**
     * Type of this equipment prototype.
     */
    readonly type: EquipmentType
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    /**
     * Shape of this equipment prototype.
     */
    readonly shape: {
      readonly width: uint
      readonly height: uint
      /**
       * Only set when the shape is "manual"
       */
      readonly points?: EquipmentPoint[]
    }
    /**
     * The result item when taking this equipment out of an equipment grid, if any.
     */
    readonly take_result?: LuaItemPrototype
    /**
     * The max power generated by this equipment.
     */
    readonly energy_production: double
    /**
     * The shield value of this equipment. 0 for non-shield equipment.
     */
    readonly shield: float
    /**
     * The energy per shield point restored. 0 for non-shield equipment.
     */
    readonly energy_per_shield: double
    /**
     * The logistic parameters for this roboport equipment.
     *
     * Both the `charging_station_shift` and `stationing_offset` vectors are tables with `x` and `y` keys instead of an array.
     *
     * _Can only be used if this is RoboportEquipment_
     */
    readonly logistic_parameters?: {
      readonly spawn_and_station_height: float
      readonly spawn_and_station_shadow_height_offset: float
      readonly charge_approach_distance: float
      readonly logistic_radius: float
      readonly construction_radius: float
      readonly charging_station_count: uint
      readonly charging_distance: float
      readonly charging_station_shift: Vector
      readonly charging_energy: double
      readonly charging_threshold_distance: float
      readonly robot_vertical_acceleration: float
      readonly stationing_offset: Vector
      readonly robot_limit: uint
      readonly logistics_connection_distance: float
      readonly robots_shrink_when_entering_and_exiting: boolean
    }
    readonly energy_consumption: double
    /**
     * _Can only be used if this is MovementBonusEquipment_
     */
    readonly movement_bonus?: float
    /**
     * The energy source prototype for the equipment.
     */
    readonly energy_source: LuaElectricEnergySourcePrototype
    /**
     * Category names for this equipment. These {@link LuaEquipmentGridPrototype#equipment_categories categories} will be used to determine whether this equipment is allowed in a particular equipment grid.
     */
    readonly equipment_categories: string[]
    /**
     * The burner energy source prototype this equipment uses, if any.
     */
    readonly burner_prototype?: LuaBurnerPrototype
    /**
     * The electric energy source prototype this equipment uses, if any.
     */
    readonly electric_energy_source_prototype?: LuaElectricEnergySourcePrototype
    /**
     * The background color of this equipment prototype.
     */
    readonly background_color: Color
    /**
     * The equipment attack parameters.
     *
     * _Can only be used if this is ActiveDefenseEquipment_
     */
    readonly attack_parameters?: AttackParameters
    /**
     * Whether this active defense equipment is automatic. Returns false if not active defense equipment.
     */
    readonly automatic: boolean
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaEquipmentPrototype"
  }
  /**
   * @noSelf
   */
  export interface BaseEquipmentPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Name of this prototype.
     */
    readonly name: string
    /**
     * Type of this equipment prototype.
     */
    readonly type: EquipmentType
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    /**
     * Shape of this equipment prototype.
     */
    readonly shape: {
      readonly width: uint
      readonly height: uint
      /**
       * Only set when the shape is "manual"
       */
      readonly points?: EquipmentPoint[]
    }
    /**
     * The result item when taking this equipment out of an equipment grid, if any.
     */
    readonly take_result?: LuaItemPrototype
    /**
     * The max power generated by this equipment.
     */
    readonly energy_production: double
    /**
     * The shield value of this equipment. 0 for non-shield equipment.
     */
    readonly shield: float
    /**
     * The energy per shield point restored. 0 for non-shield equipment.
     */
    readonly energy_per_shield: double
    readonly energy_consumption: double
    /**
     * The energy source prototype for the equipment.
     */
    readonly energy_source: LuaElectricEnergySourcePrototype
    /**
     * Category names for this equipment. These {@link LuaEquipmentGridPrototype#equipment_categories categories} will be used to determine whether this equipment is allowed in a particular equipment grid.
     */
    readonly equipment_categories: string[]
    /**
     * The burner energy source prototype this equipment uses, if any.
     */
    readonly burner_prototype?: LuaBurnerPrototype
    /**
     * The electric energy source prototype this equipment uses, if any.
     */
    readonly electric_energy_source_prototype?: LuaElectricEnergySourcePrototype
    /**
     * The background color of this equipment prototype.
     */
    readonly background_color: Color
    /**
     * Whether this active defense equipment is automatic. Returns false if not active defense equipment.
     */
    readonly automatic: boolean
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaEquipmentPrototype"
  }
  export interface RoboportEquipmentPrototype extends BaseEquipmentPrototype {
    /**
     * The logistic parameters for this roboport equipment.
     *
     * Both the `charging_station_shift` and `stationing_offset` vectors are tables with `x` and `y` keys instead of an array.
     *
     * _Can only be used if this is RoboportEquipment_
     */
    readonly logistic_parameters?: {
      readonly spawn_and_station_height: float
      readonly spawn_and_station_shadow_height_offset: float
      readonly charge_approach_distance: float
      readonly logistic_radius: float
      readonly construction_radius: float
      readonly charging_station_count: uint
      readonly charging_distance: float
      readonly charging_station_shift: Vector
      readonly charging_energy: double
      readonly charging_threshold_distance: float
      readonly robot_vertical_acceleration: float
      readonly stationing_offset: Vector
      readonly robot_limit: uint
      readonly logistics_connection_distance: float
      readonly robots_shrink_when_entering_and_exiting: boolean
    }
  }
  export interface MovementBonusEquipmentPrototype extends BaseEquipmentPrototype {
    /**
     * _Can only be used if this is MovementBonusEquipment_
     */
    readonly movement_bonus?: float
  }
  export interface ActiveDefenseEquipmentPrototype extends BaseEquipmentPrototype {
    /**
     * The equipment attack parameters.
     *
     * _Can only be used if this is ActiveDefenseEquipment_
     */
    readonly attack_parameters?: AttackParameters
  }
  /**
   * Encapsulates statistic data for different parts of the game.
   *
   * In the context of flow statistics, `input` and `output` describe on which side of the associated GUI the values are shown. Input values are shown on the left side, output values on the right side.
   *
   * - The item production GUI shows "consumption" on the right, thus `output` describes the item consumption numbers. The same goes for fluid consumption.
   *
   * - The kills GUI shows "losses" on the right, so `output` describes how many of the force's entities were killed by enemies.
   *
   * - The electric network GUI shows "power consumption" on the left side, so in this case `input` describes the power consumption numbers.
   * @noSelf
   */
  export interface LuaFlowStatistics {
    /**
     * Gets the total input count for a given prototype.
     * @param name The prototype name.
     */
    get_input_count(name: string): uint64 | double
    /**
     * Sets the total input count for a given prototype.
     * @param name The prototype name.
     * @param count The new count. The type depends on the instance of the statistics.
     */
    set_input_count(name: string, count: uint64 | double): void
    /**
     * Gets the total output count for a given prototype.
     * @param name The prototype name.
     */
    get_output_count(name: string): uint64 | double
    /**
     * Sets the total output count for a given prototype.
     * @param name The prototype name.
     * @param count The new count. The type depends on the instance of the statistics.
     */
    set_output_count(name: string, count: uint64 | double): void
    /**
     * Gets the flow count value for the given time frame. If `sample_index` is not provided, then the value returned is the average across the provided precision time period. These are the values shown in the bottom section of the statistics GUIs.
     *
     * Use `sample_index` to access the data used to generate the statistics graphs. Each precision level contains 300 samples of data so at a precision of 1 minute, each sample contains data averaged across 60s / 300 = 0.2s = 12 ticks.
     *
     * All return values are normalized to be per-tick for electric networks and per-minute for all other types.
     */
    get_flow_count(params: {
      /**
       * The prototype name.
       */
      readonly name: string
      /**
       * Read the input values or the output values
       */
      readonly input: boolean
      /**
       * The precision range to read.
       */
      readonly precision_index: defines.flow_precision_index
      /**
       * The sample index to read from within the precision range. If not provided, the entire precision range is read. Must be between 1 and 300 where 1 is the most recent sample and 300 is the oldest.
       */
      readonly sample_index?: uint16
      /**
       * If true, the count of items/fluids/entities is returned instead of the per-time-frame value.
       */
      readonly count?: boolean
    }): double
    /**
     * Adds a value to this flow statistics.
     * @param name The prototype name.
     * @param count The count: positive or negative determines if the value goes in the input or output statistics.
     */
    on_flow(name: string, count: float): void
    /**
     * Reset all the statistics data to 0.
     */
    clear(): void
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * List of input counts indexed by prototype name. Represents the data that is shown on the left side of the GUI for the given statistics.
     */
    readonly input_counts: Record<string, uint64 | double>
    /**
     * List of output counts indexed by prototype name. Represents the data that is shown on the right side of the GUI for the given statistics.
     */
    readonly output_counts: Record<string, uint64 | double>
    /**
     * The force these statistics belong to. `nil` for pollution statistics.
     */
    readonly force?: LuaForce
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaFlowStatistics"
  }
  /**
   * An array of fluid boxes of an entity. Entities may contain more than one fluid box, and some can change the number of fluid boxes -- for instance, an assembling machine will change its number of fluid boxes depending on its active recipe. See {@link Fluid}.
   *
   * Do note that reading from a {@link LuaFluidBox} creates a new table and writing will copy the given fields from the table into the engine's own fluid box structure. Therefore, the correct way to update a fluidbox of an entity is to read it first, modify the table, then write the modified table back. Directly accessing the returned table's attributes won't have the desired effect.
   * @example
   * -- Double the temperature of the fluid in entity's first fluid box.
   * fluid = entity.fluidbox[1]
   * fluid.temperature = fluid.temperature * 2
   * entity.fluidbox[1] = fluid
   * @noSelf
   */
  export interface LuaFluidBox extends Array<Fluid | nil> {
    /**
     * The prototype of this fluidbox index. If this is used on a fluidbox of a crafting machine which due to recipe was created by merging multiple prototypes, a table of prototypes that were merged will be returned instead
     */
    get_prototype(index: uint): LuaFluidBoxPrototype | LuaFluidBoxPrototype[]
    /**
     * The capacity of the given fluidbox index.
     */
    get_capacity(index: uint): double
    /**
     * The fluidboxes to which the fluidbox at the given index is connected.
     */
    get_connections(index: uint): LuaFluidBox[]
    /**
     * Get the fluid box's connections and associated data.
     */
    get_pipe_connections(index: uint): PipeConnection[]
    /**
     * Get a fluid box filter
     * @param index The index of the filter to get.
     * @returns The filter at the requested index, or `nil` if there isn't one.
     */
    get_filter(index: uint): FluidBoxFilter | nil
    /**
     * Set a fluid box filter.
     *
     * Some entities cannot have their fluidbox filter set, notably fluid wagons and crafting machines.
     * @param index The index of the filter to set.
     * @param filter The filter to set. Setting `nil` clears the filter.
     * @returns Whether the filter was set successfully.
     */
    set_filter(index: uint, filter: FluidBoxFilterSpec | nil): boolean
    /**
     * Flow through the fluidbox in the last tick. It is the larger of in-flow and out-flow.
     *
     * Fluid wagons do not track it and will return 0.
     */
    get_flow(index: uint): double
    /**
     * Returns the fluid the fluidbox is locked onto.
     * @returns `nil` if the fluidbox is not locked to any fluid.
     */
    get_locked_fluid(index: uint): string | nil
    /**
     * Gets unique fluid system identifier of selected fluid box. May return nil for fluid wagon, fluid turret's internal buffer or a fluidbox which does not belong to a fluid system
     */
    get_fluid_system_id(index: uint): uint | nil
    /**
     * Gets counts of all fluids in the fluid system. May return `nil` for fluid wagon, fluid turret's internal buffer, or a fluidbox which does not belong to a fluid system.
     * @returns The counts, indexed by fluid name.
     */
    get_fluid_system_contents(index: uint): Record<string, uint> | nil
    /**
     * Flushes all fluid from this fluidbox and its fluid system.
     * @param fluid If provided, only this fluid is flushed.
     * @returns The removed fluid.
     */
    flush(index: uint, fluid?: FluidIdentification): Record<string, float>
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Number of fluid boxes.
     */
    readonly length: uint
    /**
     * Access, set or clear a fluid box. The index must always be in bounds (see {@link LuaFluidBox#length LuaFluidBox::length_operator}). New fluidboxes may not be added or removed using this operator.
     *
     * Is `nil` if the given fluid box does not contain any fluid. Writing `nil` removes all fluid from the fluid box.
     */
    [index: number]: Fluid | nil
    /**
     * The entity that owns this fluidbox.
     */
    readonly owner: LuaEntity
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaFluidBox"
  }
  /**
   * A prototype of a fluidbox owned by some {@link LuaEntityPrototype}.
   * @noSelf
   */
  export interface LuaFluidBoxPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * The entity that this belongs to.
     */
    readonly entity: LuaEntityPrototype
    /**
     * The index of this fluidbox prototype in the owning entity.
     */
    readonly index: uint
    /**
     * The pipe connection points.
     */
    readonly pipe_connections: FluidBoxConnection[]
    /**
     * The production type.
     */
    readonly production_type: "input" | "input-output" | "output" | "none"
    readonly base_area: double
    readonly base_level: float
    readonly height: double
    readonly volume: double
    /**
     * The filter, if any is set.
     */
    readonly filter?: LuaFluidPrototype
    /**
     * The minimum temperature, if any is set.
     */
    readonly minimum_temperature?: double
    /**
     * The maximum temperature, if any is set.
     */
    readonly maximum_temperature?: double
    /**
     * The secondary draw orders for the 4 possible connection directions.
     */
    readonly secondary_draw_orders: int[]
    /**
     * The render layer.
     */
    readonly render_layer: string
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaFluidBoxPrototype"
  }
  /**
   * Prototype of a fluid energy source.
   * @noSelf
   */
  export interface LuaFluidEnergySourcePrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * The emissions of this energy source in `pollution/Joule`. Multiplying it by energy consumption in `Watt` gives `pollution/second`.
     */
    readonly emissions: double
    readonly render_no_network_icon: boolean
    readonly render_no_power_icon: boolean
    readonly effectivity: double
    readonly burns_fluid: boolean
    readonly scale_fluid_usage: boolean
    readonly destroy_non_fuel_fluid: boolean
    readonly fluid_usage_per_tick: double
    /**
     * The smoke sources for this prototype, if any.
     */
    readonly smoke: SmokeSource[]
    readonly maximum_temperature: double
    /**
     * The fluid box for this energy source.
     */
    readonly fluid_box: LuaFluidBoxPrototype
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaFluidEnergySourcePrototype"
  }
  /**
   * Prototype of a fluid.
   * @noSelf
   */
  export interface LuaFluidPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Name of this prototype.
     */
    readonly name: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    /**
     * Default temperature of this fluid.
     */
    readonly default_temperature: double
    /**
     * Maximum temperature this fluid can reach.
     */
    readonly max_temperature: double
    /**
     * The amount of energy in Joules required to heat one unit of this fluid by 1°C.
     */
    readonly heat_capacity: double
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    /**
     * Group of this prototype.
     */
    readonly group: LuaGroup
    /**
     * Subgroup of this prototype.
     */
    readonly subgroup: LuaGroup
    readonly base_color: Color
    readonly flow_color: Color
    /**
     * The temperature above which this fluid will be shown as gaseous inside tanks and pipes.
     */
    readonly gas_temperature: double
    /**
     * A multiplier on the amount of emissions produced when this fluid is burnt in a generator. A value above `1.0` increases emissions and vice versa. The multiplier can't be negative.
     */
    readonly emissions_multiplier: double
    /**
     * The amount of energy in Joules one unit of this fluid will produce when burnt in a generator. A value of `0` means this fluid can't be used for energy generation. The value can't be negative.
     */
    readonly fuel_value: double
    /**
     * Whether this fluid is hidden from the fluid and signal selectors.
     */
    readonly hidden: boolean
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaFluidPrototype"
  }
  /**
   * Prototype of a font.
   * @noSelf
   */
  export interface LuaFontPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Name of this prototype.
     */
    readonly name: string
    readonly from: string
    readonly size: int
    readonly spacing: float
    readonly border: boolean
    readonly filtered: boolean
    /**
     * The border color, if any.
     */
    readonly border_color?: Color
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaFontPrototype"
  }
  /**
   * `LuaForce` encapsulates data local to each "force" or "faction" of the game. Default forces are player, enemy and neutral. Players and mods can create additional forces (up to 64 total).
   * @noSelf
   */
  export interface LuaForce {
    /**
     * Count entities of given type.
     *
     * This function has O(1) time complexity as entity counts are kept and maintained in the game engine.
     * @param name Prototype name of the entity.
     * @returns Number of entities of given prototype belonging to this force.
     */
    get_entity_count(name: string): uint
    /**
     * Disable research for this force.
     */
    disable_research(): void
    /**
     * Enable research for this force.
     */
    enable_research(): void
    /**
     * Disable all recipes and technologies. Only recipes and technologies enabled explicitly will be useable from this point.
     */
    disable_all_prototypes(): void
    /**
     * Enables all recipes and technologies. The opposite of {@link LuaForce#disable_all_prototypes LuaForce::disable_all_prototypes}.
     */
    enable_all_prototypes(): void
    /**
     * Load the original version of all recipes from the prototypes.
     */
    reset_recipes(): void
    /**
     * Unlock all recipes.
     */
    enable_all_recipes(): void
    /**
     * Unlock all technologies.
     */
    enable_all_technologies(): void
    /**
     * Research all technologies.
     *
     * ## Raised events
     * - {@link OnResearchFinishedEvent on_research_finished} _instantly_
     * @param include_disabled_prototypes Whether technologies that are explicitly disabled in the prototype should also be researched. Defaults to `false`.
     */
    research_all_technologies(include_disabled_prototypes?: boolean): void
    /**
     * Load the original versions of technologies from prototypes. Preserves research state of technologies.
     */
    reset_technologies(): void
    /**
     * Reset everything. All technologies are set to not researched, all modifiers are set to default values.
     *
     * ## Raised events
     * - {@link OnForceResetEvent on_force_reset} _instantly_
     */
    reset(): void
    /**
     * Reapplies all possible research effects, including unlocked recipes. Any custom changes are lost. Preserves research state of technologies.
     *
     * ## Raised events
     * - {@link OnTechnologyEffectsResetEvent on_technology_effects_reset} _instantly_
     */
    reset_technology_effects(): void
    /**
     * Chart a portion of the map. The chart for the given area is refreshed; it creates chart for any parts of the given area that haven't been charted yet.
     * @param area The area on the given surface to chart.
     * @example
     * -- Charts a 2048x2048 rectangle centered around the origin.
     * game.player.force.chart(game.player.surface, {{x = -1024, y = -1024}, {x = 1024, y = 1024}})
     */
    chart(surface: SurfaceIdentification, area: BoundingBoxWrite | BoundingBoxArray): void
    /**
     * Erases chart data for this force.
     * @param surface Which surface to erase chart data for or if not provided all surfaces charts are erased.
     */
    clear_chart(surface?: SurfaceIdentification): void
    /**
     * Force a rechart of the whole chart.
     * @param surface Which surface to rechart or all if not given.
     */
    rechart(surface?: SurfaceIdentification): void
    /**
     * Chart all generated chunks.
     * @param surface Which surface to chart or all if not given.
     */
    chart_all(surface?: SurfaceIdentification): void
    /**
     * Has a chunk been charted?
     * @param position Position of the chunk.
     */
    is_chunk_charted(surface: SurfaceIdentification, position: ChunkPosition | ChunkPositionArray): boolean
    /**
     * Is the given chunk currently charted and visible (not covered by fog of war) on the map.
     */
    is_chunk_visible(surface: SurfaceIdentification, position: ChunkPosition | ChunkPositionArray): boolean
    /**
     * Has a chunk been requested for charting?
     * @param position Position of the chunk.
     */
    is_chunk_requested_for_charting(
      surface: SurfaceIdentification,
      position: ChunkPosition | ChunkPositionArray,
    ): boolean
    /**
     * Cancels pending chart requests for the given surface or all surfaces.
     */
    cancel_charting(surface?: SurfaceIdentification): void
    /**
     * @param ammo Ammo category
     */
    get_ammo_damage_modifier(ammo: string): double
    /**
     * @param ammo Ammo category
     */
    set_ammo_damage_modifier(ammo: string, modifier: double): void
    /**
     * @param ammo Ammo category
     */
    get_gun_speed_modifier(ammo: string): double
    /**
     * @param ammo Ammo category
     */
    set_gun_speed_modifier(ammo: string, modifier: double): void
    /**
     * @param turret Turret prototype name
     */
    get_turret_attack_modifier(turret: string): double
    /**
     * @param turret Turret prototype name
     */
    set_turret_attack_modifier(turret: string, modifier: double): void
    /**
     * Add `other` force to this force's cease fire list. Forces on the cease fire list won't be targeted for attack.
     *
     * ## Raised events
     * - {@link OnForceCeaseFireChangedEvent on_force_cease_fire_changed} _instantly_
     */
    set_cease_fire(other: ForceIdentification, cease_fire: boolean): void
    /**
     * Is `other` force in this force's cease fire list?
     */
    get_cease_fire(other: ForceIdentification): boolean
    /**
     * Add `other` force to this force's friends list. Friends have unrestricted access to buildings and turrets won't fire at them.
     *
     * ## Raised events
     * - {@link OnForceFriendsChangedEvent on_force_friends_changed} _instantly_
     */
    set_friend(other: ForceIdentification, friend: boolean): void
    /**
     * Is `other` force in this force's friends list.
     */
    get_friend(other: ForceIdentification): boolean
    /**
     * Is pathfinder busy? When the pathfinder is busy, it won't accept any more pathfinding requests.
     */
    is_pathfinder_busy(): boolean
    /**
     * Kill all units and flush the pathfinder.
     */
    kill_all_units(): void
    /**
     * @param position Position to find a network for
     * @param surface Surface to search on
     * @returns The found network or `nil`.
     */
    find_logistic_network_by_position(
      position: MapPosition | MapPositionArray,
      surface: SurfaceIdentification,
    ): LuaLogisticNetwork | nil
    /**
     * @param position The new position on the given surface.
     * @param surface Surface to set the spawn position for.
     */
    set_spawn_position(position: MapPosition | MapPositionArray, surface: SurfaceIdentification): void
    get_spawn_position(surface: SurfaceIdentification): MapPosition
    /**
     * @param position The chunk position to unchart.
     * @param surface Surface to unchart on.
     */
    unchart_chunk(position: ChunkPosition | ChunkPositionArray, surface: SurfaceIdentification): void
    /**
     * Gets the count of a given item launched in rockets.
     * @param item The item to get
     * @returns The count of the item that has been launched.
     */
    get_item_launched(item: string): uint
    /**
     * Sets the count of a given item launched in rockets.
     * @param item The item to set
     * @param count The count to set
     */
    set_item_launched(item: string, count: uint): void
    /**
     * Print text to the chat console of all players on this force.
     *
     * By default, messages that are identical to a message sent in the last 60 ticks are not printed again.
     */
    print(message: LocalisedString, print_settings?: (Color | ColorArray) | PrintSettings): void
    /**
     * @param surface The surface to search. Not providing a surface will match trains on any surface.
     */
    get_trains(surface?: SurfaceIdentification): LuaTrain[]
    /**
     * Adds a custom chart tag to the given surface and returns the new tag or `nil` if the given position isn't valid for a chart tag.
     *
     * The chunk must be charted for a tag to be valid at that location.
     *
     * ## Raised events
     * - {@link OnChartTagAddedEvent on_chart_tag_added}? _instantly_ Raised if the chart tag was successfully added.
     * @param surface Which surface to add the tag to.
     * @param tag The tag to add.
     */
    add_chart_tag(surface: SurfaceIdentification, tag: ChartTagSpec): LuaCustomChartTag | nil
    /**
     * Finds all custom chart tags within the given bounding box on the given surface.
     */
    find_chart_tags(surface: SurfaceIdentification, area?: BoundingBoxWrite | BoundingBoxArray): LuaCustomChartTag[]
    /**
     * Gets the saved progress for the given technology or `nil` if there is no saved progress.
     * @param technology The technology
     * @returns The progress as a percent.
     */
    get_saved_technology_progress(technology: TechnologyIdentification): double | nil
    /**
     * Sets the saved progress for the given technology. The technology must not be in progress, must not be completed, and the new progress must be < 100%.
     * @param technology The technology
     * @param progress Progress as a percent. Set to `nil` to remove the saved progress.
     */
    set_saved_technology_progress(technology: TechnologyIdentification, progress: double | nil): void
    /**
     * Resets evolution for this force to zero.
     */
    reset_evolution(): void
    /**
     * Play a sound for every player in this force.
     *
     * The sound is not played if its location is not {@link LuaForce#chart charted} for this force.
     */
    play_sound(params: {
      /**
       * The sound to play.
       */
      readonly path: SoundPath
      /**
       * Where the sound should be played. If not given, it's played at the current position of each player.
       */
      readonly position?: MapPosition | MapPositionArray
      /**
       * The volume of the sound to play. Must be between 0 and 1 inclusive.
       */
      readonly volume_modifier?: double
      /**
       * The volume mixer to play the sound through. Defaults to the default mixer for the given sound type.
       */
      readonly override_sound_type?: SoundType
    }): void
    /**
     * Gets train stops matching the given filters.
     */
    get_train_stops(params?: {
      /**
       * The name(s) of the train stops. Not providing names will match any stop.
       */
      readonly name?: string | readonly string[]
      /**
       * The surface to search. Not providing a surface will match stops on any surface.
       */
      readonly surface?: SurfaceIdentification
    }): LuaEntity[]
    /**
     * Gets if the given recipe is explicitly disabled from being hand crafted.
     */
    get_hand_crafting_disabled_for_recipe(recipe: string | LuaRecipe): boolean
    /**
     * Sets if the given recipe can be hand-crafted. This is used to explicitly disable hand crafting a recipe - it won't allow hand-crafting otherwise not hand-craftable recipes.
     */
    set_hand_crafting_disabled_for_recipe(recipe: string | LuaRecipe, hand_crafting_disabled: boolean): void
    /**
     * Add this technology to the back of the research queue if the queue is enabled. Otherwise, set this technology to be researched now.
     *
     * ## Raised events
     * - {@link OnResearchStartedEvent on_research_started}? _instantly_ Raised if the technology was successfully added.
     * @returns Whether the technology was successfully added.
     */
    add_research(technology: TechnologyIdentification): boolean
    /**
     * Stop the research currently in progress. This will remove any dependent technologies from the research queue.
     */
    cancel_current_research(): void
    /**
     * Gets the linked inventory for the given prototype and link ID if it exists or `nil`.
     */
    get_linked_inventory(prototype: EntityPrototypeIdentification, link_id: uint): LuaInventory | nil
    /**
     * Is this force a friend? This differs from `get_friend` in that it is always true for neutral force. This is equivalent to checking the `friend` ForceCondition.
     */
    is_friend(other: ForceIdentification): boolean
    /**
     * Is this force an enemy? This differs from `get_cease_fire` in that it is always false for neutral force. This is equivalent to checking the `enemy` ForceCondition.
     */
    is_enemy(other: ForceIdentification): boolean
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Name of the force.
     * @example
     * game.player.print(game.player.force.name) -- => "player"
     */
    readonly name: string
    /**
     * Technologies owned by this force, indexed by `name`.
     * @example
     * -- Researches the technology for the player's force
     * game.player.force.technologies["steel-processing"].researched = true
     */
    readonly technologies: LuaCustomTable<string, LuaTechnology>
    /**
     * Recipes available to this force, indexed by `name`.
     * @example
     * -- Prints the category of the given recipe
     * game.player.print(game.player.force.recipes["transport-belt"].category)
     */
    readonly recipes: LuaCustomTable<string, LuaRecipe>
    /**
     * Multiplier of the manual mining speed. Default value is `0`. The actual mining speed will be multiplied by `1 + manual_mining_speed_modifier`.
     * @example
     * -- Double the player's mining speed
     * game.player.force.manual_mining_speed_modifier = 1
     */
    manual_mining_speed_modifier: double
    /**
     * Multiplier of the manual crafting speed. Default value is `0`. The actual crafting speed will be multiplied by `1 + manual_crafting_speed_modifier`.
     * @example
     * -- Double the player's crafting speed
     * game.player.force.manual_crafting_speed_modifier = 1
     */
    manual_crafting_speed_modifier: double
    laboratory_speed_modifier: double
    laboratory_productivity_bonus: double
    worker_robots_speed_modifier: double
    worker_robots_battery_modifier: double
    worker_robots_storage_bonus: double
    /**
     * The currently ongoing technology research, if any.
     */
    readonly current_research?: LuaTechnology
    /**
     * Progress of current research, as a number in range `[0, 1]`.
     */
    research_progress: double
    /**
     * The previous research, if any.
     */
    previous_research?: LuaTechnology
    /**
     * The inserter stack size bonus for non stack inserters
     */
    inserter_stack_size_bonus: double
    /**
     * Number of items that can be transferred by stack inserters. When writing to this value, it must be >= 0 and <= 254.
     */
    stack_inserter_capacity_bonus: uint
    /**
     * Number of character trash slots.
     */
    character_trash_slot_count: double
    /**
     * Maximum number of follower robots.
     */
    maximum_following_robot_count: uint
    /**
     * Additional lifetime for following robots.
     */
    following_robots_lifetime_modifier: double
    /**
     * The time, in ticks, before a placed ghost disappears.
     */
    ghost_time_to_live: uint
    /**
     * Players belonging to this force.
     */
    readonly players: LuaPlayer[]
    /**
     * Enables some higher-level AI behaviour for this force. When set to `true`, biters belonging to this force will automatically expand into new territories, build new spawners, and form unit groups. By default, this value is `true` for the enemy force and `false` for all others.
     *
     * Setting this to `false` does not turn off biters' AI. They will still move around and attack players who come close.
     *
     * It is necessary for a force to be AI controllable in order to be able to create unit groups or build bases from scripts.
     */
    ai_controllable: boolean
    /**
     * List of logistic networks, grouped by surface.
     */
    readonly logistic_networks: Record<string, LuaLogisticNetwork[]>
    /**
     * The item production statistics for this force.
     */
    readonly item_production_statistics: LuaFlowStatistics
    /**
     * The fluid production statistics for this force.
     */
    readonly fluid_production_statistics: LuaFlowStatistics
    /**
     * The kill counter statistics for this force.
     */
    readonly kill_count_statistics: LuaFlowStatistics
    /**
     * The entity build statistics for this force (built and mined)
     */
    readonly entity_build_count_statistics: LuaFlowStatistics
    /**
     * Modifies the running speed of all characters in this force by the given value as a percentage. Setting the running modifier to `0.5` makes the character run 50% faster. The minimum value of `-1` reduces the movement speed by 100%, resulting in a speed of `0`.
     */
    character_running_speed_modifier: double
    artillery_range_modifier: double
    character_build_distance_bonus: uint
    character_item_drop_distance_bonus: uint
    character_reach_distance_bonus: uint
    character_resource_reach_distance_bonus: double
    character_item_pickup_distance_bonus: double
    character_loot_pickup_distance_bonus: double
    /**
     * The number of additional inventory slots the character main inventory has.
     */
    character_inventory_slots_bonus: uint
    /**
     * The time, in ticks, before a deconstruction order is removed.
     */
    deconstruction_time_to_live: uint
    character_health_bonus: double
    max_successful_attempts_per_tick_per_construction_queue: uint
    max_failed_attempts_per_tick_per_construction_queue: uint
    /**
     * Ability to use zoom-to-world on map.
     */
    zoom_to_world_enabled: boolean
    /**
     * Ability to build ghosts through blueprint or direct ghost placement, or "mine" ghosts when using zoom-to-world.
     */
    zoom_to_world_ghost_building_enabled: boolean
    /**
     * Ability to create new blueprints using empty blueprint item when using zoom-to-world.
     */
    zoom_to_world_blueprint_enabled: boolean
    /**
     * Ability to use deconstruction planner when using zoom-to-world.
     */
    zoom_to_world_deconstruction_planner_enabled: boolean
    /**
     * Ability to use custom selection tools when using zoom-to-world.
     */
    zoom_to_world_selection_tool_enabled: boolean
    /**
     * `true` if character requester logistics is enabled.
     */
    character_logistic_requests: boolean
    /**
     * The number of rockets launched.
     */
    rockets_launched: uint
    /**
     * All of the items that have been launched in rockets. The attribute is a dictionary mapping the item prototype names to the launched amounts.
     */
    readonly items_launched: Record<string, uint>
    /**
     * The connected players belonging to this force.
     *
     * This is primarily useful when you want to do some action against all online players of this force.
     *
     * This does *not* index using player index. See {@link LuaPlayer#index LuaPlayer::index} on each player instance for the player index.
     */
    readonly connected_players: LuaPlayer[]
    mining_drill_productivity_bonus: double
    train_braking_force_bonus: double
    /**
     * Evolution factor of this force.
     */
    evolution_factor: double
    evolution_factor_by_pollution: double
    evolution_factor_by_time: double
    evolution_factor_by_killing_spawners: double
    /**
     * If friendly fire is enabled for this force.
     */
    friendly_fire: boolean
    /**
     * If sharing chart data is enabled for this force.
     */
    share_chart: boolean
    /**
     * Whether the research queue is available for this force.
     */
    research_queue_enabled: boolean
    /**
     * This force's index in {@link LuaGameScript#forces LuaGameScript::forces} (unique ID). It is assigned when a force is created, and remains so until it is {@link OnForcesMergedEvent merged} (ie. deleted). Indexes of merged forces can be reused.
     */
    readonly index: ForceIndex
    /**
     * The research queue of this force. The first technology in the array is the currently active one. Reading this attribute gives an array of {@link LuaTechnology}.
     *
     * To write to this, the entire table must be written. Providing an empty table or `nil` will empty the research queue and cancel the current research.  Writing to this when the research queue is disabled will simply set the last research in the table as the current research.
     *
     * This only allows mods to queue research that this force is able to research in the first place. As an example, an already researched technology or one whose prerequisites are not fulfilled will not be queued, but dropped silently instead.
     */
    get research_queue(): LuaTechnology[] | nil
    set research_queue(value: readonly TechnologyIdentification[] | nil)
    /**
     * Whether research is enabled for this force, see {@link LuaForce#enable_research LuaForce::enable_research} and {@link LuaForce#disable_research LuaForce::disable_research}
     */
    readonly research_enabled: boolean
    /**
     * Custom color for this force. If specified, will take priority over other sources of the force color. Writing `nil` clears custom color. Will return `nil` if it was not specified or if was set to `{0,0,0,0}`.
     */
    get custom_color(): Color | nil
    set custom_color(value: Color | ColorArray | nil)
    /**
     * Effective color of this force.
     */
    readonly color: Color
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaForce"
  }
  /**
   * Prototype of a fuel category.
   * @noSelf
   */
  export interface LuaFuelCategoryPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Name of this prototype.
     */
    readonly name: string
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaFuelCategoryPrototype"
  }
  /**
   * Main toplevel type, provides access to most of the API though its members. An instance of LuaGameScript is available as the global object named `game`.
   * @noSelf
   */
  export interface LuaGameScript {
    /**
     * Set scenario state. Any parameters not provided do not change the current state.
     */
    set_game_state(params: {
      readonly game_finished?: boolean
      readonly player_won?: boolean
      readonly next_level?: string
      readonly can_continue?: boolean
      readonly victorious_force?: ForceIdentification
    }): void
    /**
     * Reset scenario state (game_finished, player_won, etc.).
     */
    reset_game_state(): void
    /**
     * Gets an entity by its name tag. Entity name tags can be set in the entity "extra settings" GUI in the map editor.
     */
    get_entity_by_tag(tag: string): LuaEntity | nil
    /**
     * Show an in-game message dialog.
     *
     * Can only be used when the map contains exactly one player.
     */
    show_message_dialog(params: {
      /**
       * What the dialog should say
       */
      readonly text: LocalisedString
      /**
       * Path to an image to show on the dialog
       */
      readonly image?: string
      /**
       * If specified, dialog will show an arrow pointing to this place. When not specified, the arrow will point to the player's position. (Use `point_to={type="nowhere"}` to remove the arrow entirely.) The dialog itself will be placed near the arrow's target.
       */
      readonly point_to?: GuiArrowSpecification
      /**
       * The gui style to use for this speech bubble. Must be of type speech_bubble.
       */
      readonly style?: string
      /**
       * Must be of type flow_style.
       */
      readonly wrapper_frame_style?: string
    }): void
    /**
     * Is this the demo version of Factorio?
     */
    is_demo(): boolean
    /**
     * Forces a reload of the scenario script from the original scenario location.
     *
     * This disables the replay if replay is enabled.
     */
    reload_script(): void
    /**
     * Forces a reload of all mods.
     *
     * This will act like saving and loading from the mod(s) perspective.
     *
     * This will do nothing if run in multiplayer.
     *
     * This disables the replay if replay is enabled.
     */
    reload_mods(): void
    /**
     * Saves the current configuration of Atlas to a file. This will result in huge file containing all of the game graphics moved to as small space as possible.
     *
     * Exists mainly for debugging reasons.
     */
    save_atlas(): void
    /**
     * Run internal consistency checks. Allegedly prints any errors it finds.
     *
     * Exists mainly for debugging reasons.
     */
    check_consistency(): void
    /**
     * Regenerate autoplacement of some entities on all surfaces. This can be used to autoplace newly-added entities.
     *
     * All specified entity prototypes must be autoplacable.
     * @param entities Prototype names of entity or entities to autoplace.
     */
    regenerate_entity(entities: string | readonly string[]): void
    /**
     * Take a screenshot of the game and save it to the `script-output` folder, located in the game's {@linkplain https://wiki.factorio.com/User_data_directory user data directory}. The name of the image file can be specified via the `path` parameter.
     *
     * If Factorio is running headless, this function will do nothing.
     */
    take_screenshot(params: {
      /**
       * The player to focus on. Defaults to the local player.
       */
      readonly player?: PlayerIdentification
      /**
       * If defined, the screenshot will only be taken for this player.
       */
      readonly by_player?: PlayerIdentification
      /**
       * If defined, the screenshot will be taken on this surface.
       */
      readonly surface?: SurfaceIdentification
      /**
       * If defined, the screenshot will be centered on this position. Otherwise, the screenshot will center on `player`.
       */
      readonly position?: MapPosition | MapPositionArray
      /**
       * The maximum allowed resolution is 16384x16384 (8192x8192 when `anti_alias` is `true`), but the maximum recommended resolution is 4096x4096 (resp. 2048x2048). The `x` value of the position is used as the width, the `y` value as the height.
       */
      readonly resolution?: TilePosition | TilePositionArray
      /**
       * The map zoom to take the screenshot at. Defaults to `1`.
       */
      readonly zoom?: double
      /**
       * The name of the image file. It should include a file extension indicating the desired format. Supports `.png`, `.jpg` /`.jpeg`, `.tga` and `.bmp`. Providing a directory path (ex. `"save/here/screenshot.png"`) will create the necessary folder structure in `script-output`. Defaults to `"screenshot.png"`.
       */
      readonly path?: string
      /**
       * Whether to include GUIs in the screenshot or not. Defaults to `false`.
       */
      readonly show_gui?: boolean
      /**
       * Whether to include entity info ("Alt mode") or not. Defaults to `false`.
       */
      readonly show_entity_info?: boolean
      /**
       * When `true` and when `player` is specified, the building preview for the item in the player's cursor will also be rendered. Defaults to `false`.
       */
      readonly show_cursor_building_preview?: boolean
      /**
       * Whether to render in double resolution and downscale the result (including GUI). Defaults to `false`.
       */
      readonly anti_alias?: boolean
      /**
       * The `.jpg` render quality as a percentage (from 0% to 100% inclusive), if used. A lower value means a more compressed image. Defaults to `80`.
       */
      readonly quality?: int
      /**
       * Whether to save the screenshot even during replay playback. Defaults to `false`.
       */
      readonly allow_in_replay?: boolean
      /**
       * Overrides the current surface daytime for the duration of screenshot rendering.
       */
      readonly daytime?: double
      /**
       * Overrides the tick of water animation, if animated water is enabled.
       */
      readonly water_tick?: uint
      /**
       * Screenshot requests are processed in between game update and render. The game may skip rendering (ie. drop frames) if the previous frame has not finished rendering or the game simulation starts to fall below 60 updates per second. If `force_render` is set to `true`, the game won't drop frames and process the screenshot request at the end of the update in which the request was created. This is not honored on multiplayer clients that are catching up to server. Defaults to `false`.
       */
      readonly force_render?: boolean
    }): void
    /**
     * Forces the screenshot saving system to wait until all queued screenshots have been written to disk.
     */
    set_wait_for_screenshots_to_finish(): void
    /**
     * Take a screenshot of the technology screen and save it to the `script-output` folder, located in the game's {@linkplain https://wiki.factorio.com/User_data_directory user data directory}. The name of the image file can be specified via the `path` parameter.
     */
    take_technology_screenshot(params: {
      /**
       * The force whose technology to screenshot. If not given, the `"player`" force is used.
       */
      readonly force?: ForceIdentification
      /**
       * The name of the image file. It should include a file extension indicating the desired format. Supports `.png`, `.jpg` /`.jpeg`, `.tga` and `.bmp`. Providing a directory path (ex. `"save/here/screenshot.png"`) will create the necessary folder structure in `script-output`. Defaults to `"technology-screenshot.png"`.
       */
      readonly path?: string
      /**
       * If given, the screenshot will only be taken for this player.
       */
      readonly by_player?: PlayerIdentification
      /**
       * The technology to highlight.
       */
      readonly selected_technology?: TechnologyIdentification
      /**
       * If `true`, disabled technologies will be skipped. Their successors will be attached to the disabled technology's parents. Defaults to `false`.
       */
      readonly skip_disabled?: boolean
      /**
       * The `.jpg` render quality as a percentage (from 0% to 100% inclusive), if used. A lower value means a more compressed image. Defaults to `80`.
       */
      readonly quality?: int
    }): void
    /**
     * Convert a table to a JSON string
     */
    table_to_json(data: table): string
    /**
     * Convert a JSON string to a table.
     * @param json The string to convert.
     * @returns The returned object, or `nil` if the JSON string was invalid.
     */
    json_to_table(json: string): AnyBasic | nil
    /**
     * Write a file to the `script-output` folder, located in the game's {@linkplain https://wiki.factorio.com/User_data_directory user data directory}. The name and file extension of the file can be specified via the `filename` parameter.
     * @param filename The name of the file. Providing a directory path (ex. `"save/here/example.txt"`) will create the necessary folder structure in `script-output`.
     * @param data The content to write to the file.
     * @param append If `true`, `data` will be appended to the end of the file. Defaults to `false`, which will overwrite any pre-existing file with the new `data`.
     * @param for_player If given, the file will only be written for this `player_index`. Providing `0` will only write to the server's output if present.
     */
    write_file(filename: string, data: LocalisedString, append?: boolean, for_player?: uint): void
    /**
     * Remove a file or directory in the `script-output` folder, located in the game's {@linkplain https://wiki.factorio.com/User_data_directory user data directory}. Can be used to remove files created by {@link LuaGameScript#write_file LuaGameScript::write_file}.
     * @param path The path to the file or directory to remove, relative to `script-output`.
     */
    remove_path(path: string): void
    /**
     * Remove players who are currently not connected from the map.
     *
     * ## Raised events
     * - {@link OnPrePlayerRemovedEvent on_pre_player_removed} _instantly_
     * - {@link OnPlayerRemovedEvent on_player_removed} _instantly_
     * @param players List of players to remove. If not specified, remove all offline players.
     */
    remove_offline_players(players?: readonly PlayerIdentification[]): void
    /**
     * Force a CRC check. Tells all peers to calculate their current CRC, which are then compared to each other. If a mismatch is detected, the game desyncs and some peers are forced to reconnect.
     */
    force_crc(): void
    /**
     * Create a new force.
     *
     * The game currently supports a maximum of 64 forces, including the three built-in forces. This means that a maximum of 61 new forces may be created. Force names must be unique.
     *
     * ## Raised events
     * - {@link OnForceCreatedEvent on_force_created} _instantly_
     * @param force Name of the new force
     * @returns The force that was just created
     */
    create_force(force: string): LuaForce
    /**
     * Marks two forces to be merged together. All players and entities in the source force will be reassigned to the target force. The source force will then be destroyed. Importantly, this does not merge technologies or bonuses, which are instead retained from the target force.
     *
     * The three built-in forces (player, enemy and neutral) can't be destroyed, meaning they can't be used as the source argument to this function.
     *
     * The source force is not removed until the end of the current tick, or if called during the {@link OnForcesMergingEvent on_forces_merging} or {@link OnForcesMergedEvent on_forces_merged} event, the end of the next tick.
     *
     * ## Raised events
     * - {@link OnForcesMergingEvent on_forces_merging} _future_tick_
     * - {@link OnForcesMergedEvent on_forces_merged} _future_tick_
     * @param source The force to remove.
     * @param destination The force to reassign all entities to.
     */
    merge_forces(source: ForceIdentification, destination: ForceIdentification): void
    /**
     * Create a new surface.
     *
     * The game currently supports a maximum of 4 294 967 295 surfaces, including the default surface. Surface names must be unique.
     *
     * ## Raised events
     * - {@link OnSurfaceCreatedEvent on_surface_created} _instantly_
     * @param name Name of the new surface.
     * @param settings Map generation settings.
     * @returns The surface that was just created.
     */
    create_surface(name: string, settings?: MapGenSettingsWrite): LuaSurface
    /**
     * Instruct the server to save the map. Only actually saves when in multiplayer.
     * @param name Save file name. If not specified, the currently running save is overwritten.
     */
    server_save(name?: string): void
    /**
     * Instruct the game to perform an auto-save.
     *
     * Only the server will save in multiplayer. In single player a standard auto-save is triggered.
     * @param name The autosave name if any. Saves will be named _autosave-*name* when provided.
     */
    auto_save(name?: string): void
    /**
     * Deletes the given surface and all entities on it.
     *
     * ## Raised events
     * - {@link OnPreSurfaceDeletedEvent on_pre_surface_deleted} _future_tick_
     * - {@link OnSurfaceDeletedEvent on_surface_deleted} _future_tick_
     * @param surface The surface to be deleted. Currently the primary surface (1, 'nauvis') cannot be deleted.
     */
    delete_surface(surface: SurfaceIdentification): void
    /**
     * Disables replay saving for the current save file. Once done there's no way to re-enable replay saving for the save file without loading an old save.
     */
    disable_replay(): void
    /**
     * Disables tutorial triggers, that unlock new tutorials and show notices about unlocked tutorials.
     */
    disable_tutorial_triggers(): void
    /**
     * Converts the given direction into the string version of the direction.
     */
    direction_to_string(direction: defines.direction): string
    /**
     * Print text to the chat console all players.
     *
     * By default, messages that are identical to a message sent in the last 60 ticks are not printed again.
     */
    print(message: LocalisedString, print_settings?: (Color | ColorArray) | PrintSettings): void
    /**
     * Creates a deterministic standalone random generator with the given seed or if a seed is not provided the initial map seed is used.
     *
     * *Make sure* you actually want to use this over math.random(...) as this provides entirely different functionality over math.random(...).
     */
    create_random_generator(seed?: uint): LuaRandomGenerator
    /**
     * Goes over all items, entities, tiles, recipes, technologies among other things and logs if the locale is incorrect.
     *
     * Also prints true/false if called from the console.
     */
    check_prototype_translations(): void
    /**
     * Play a sound for every player in the game.
     *
     * The sound is not played if its location is not {@link LuaForce#chart charted} for that player.
     */
    play_sound(params: {
      /**
       * The sound to play.
       */
      readonly path: SoundPath
      /**
       * Where the sound should be played. If not given, it's played at the current position of each player.
       */
      readonly position?: MapPosition | MapPositionArray
      /**
       * The volume of the sound to play. Must be between 0 and 1 inclusive.
       */
      readonly volume_modifier?: double
      /**
       * The volume mixer to play the sound through. Defaults to the default mixer for the given sound type.
       */
      readonly override_sound_type?: SoundType
    }): void
    /**
     * Checks if the given SoundPath is valid.
     * @param sound_path Path to the sound.
     */
    is_valid_sound_path(sound_path: SoundPath): boolean
    /**
     * Checks if the given SpritePath is valid and contains a loaded sprite. The existence of the image is not checked for paths of type `file`.
     * @param sprite_path Path to the image.
     */
    is_valid_sprite_path(sprite_path: SpritePath): boolean
    /**
     * Kicks the given player from this multiplayer game. Does nothing if this is a single player game or if the player running this isn't an admin.
     *
     * ## Raised events
     * - {@link OnPlayerKickedEvent on_player_kicked} _instantly_
     * - {@link OnConsoleCommandEvent on_console_command} _instantly_
     * @param player The player to kick.
     * @param reason The reason given if any.
     */
    kick_player(player: PlayerIdentification, reason?: string): void
    /**
     * Bans the given player from this multiplayer game. Does nothing if this is a single player game of if the player running this isn't an admin.
     *
     * ## Raised events
     * - {@link OnPlayerBannedEvent on_player_banned} _instantly_
     * - {@link OnConsoleCommandEvent on_console_command} _instantly_
     * @param player The player to ban.
     * @param reason The reason given if any.
     */
    ban_player(player: PlayerIdentification, reason?: string): void
    /**
     * Unbans the given player from this multiplayer game. Does nothing if this is a single player game of if the player running this isn't an admin.
     *
     * ## Raised events
     * - {@link OnPlayerUnbannedEvent on_player_unbanned} _instantly_
     * - {@link OnConsoleCommandEvent on_console_command} _instantly_
     * @param player The player to unban.
     */
    unban_player(player: PlayerIdentification): void
    /**
     * Purges the given players messages from the game. Does nothing if the player running this isn't an admin.
     *
     * ## Raised events
     * - {@link OnConsoleCommandEvent on_console_command} _instantly_
     * @param player The player to purge.
     */
    purge_player(player: PlayerIdentification): void
    /**
     * Mutes the given player. Does nothing if the player running this isn't an admin.
     *
     * ## Raised events
     * - {@link OnPlayerMutedEvent on_player_muted} _instantly_
     * - {@link OnConsoleCommandEvent on_console_command} _instantly_
     * @param player The player to mute.
     */
    mute_player(player: PlayerIdentification): void
    /**
     * Unmutes the given player. Does nothing if the player running this isn't an admin.
     *
     * ## Raised events
     * - {@link OnPlayerUnmutedEvent on_player_unmuted} _instantly_
     * - {@link OnConsoleCommandEvent on_console_command} _instantly_
     * @param player The player to unmute.
     */
    unmute_player(player: PlayerIdentification): void
    /**
     * Counts how many distinct groups of pipes exist in the world.
     */
    count_pipe_groups(): void
    /**
     * Whether the save is loaded as a multiplayer map.
     */
    is_multiplayer(): boolean
    /**
     * Gets the number of entities that are active (updated each tick).
     *
     * This is very expensive to determine.
     * @param surface If given, only the entities active on this surface are counted.
     */
    get_active_entities_count(surface?: SurfaceIdentification): uint
    /**
     * Gets the map exchange string for the map generation settings that were used to create this map.
     */
    get_map_exchange_string(): string
    /**
     * Convert a map exchange string to map gen settings and map settings.
     */
    parse_map_exchange_string(map_exchange_string: string): MapExchangeStringData
    /**
     * Gets train stops matching the given filters.
     */
    get_train_stops(params?: {
      /**
       * The name(s) of the train stops. Not providing names will match any stop.
       */
      readonly name?: string | readonly string[]
      /**
       * The surface to search. Not providing a surface will match stops on any surface.
       */
      readonly surface?: SurfaceIdentification
      /**
       * The force to search. Not providing a force will match stops in any force.
       */
      readonly force?: ForceIdentification
    }): LuaEntity[]
    /**
     * Gets the given player or returns `nil` if no player is found.
     * @param player The player index or name.
     */
    get_player(player: PlayerIndex | string): LuaPlayer | nil
    /**
     * Gets the given surface or returns `nil` if no surface is found.
     *
     * This is a shortcut for {@link LuaGameScript#surfaces LuaGameScript::surfaces}.
     * @param surface The surface index or name.
     */
    get_surface(surface: SurfaceIndex | string): LuaSurface | nil
    /**
     * Creates a {@link LuaProfiler}, which is used for measuring script performance.
     *
     * LuaProfiler cannot be serialized.
     * @param stopped Create the timer stopped
     */
    create_profiler(stopped?: boolean): LuaProfiler
    /**
     * Evaluate an expression, substituting variables as provided.
     *
     * For details on the formula, see {@link import("factorio:prototype").TechnologyPrototype#unit TechnologyPrototype::unit}.
     * @param expression The expression to evaluate.
     * @param variables Variables to be substituted.
     * @example
     * -- Calculate the number of research units required to unlock mining productivity level 10
     * local formula = game.forces["player"].technologies["mining-productivity-4"].research_unit_count_formula
     * local units = game.evaluate_expression(formula, { L = 10, l = 10 })
     */
    evaluate_expression(expression: string, variables?: Record<string, double>): double
    /**
     * Returns a dictionary of all LuaEntityPrototypes that fit the given filters. The prototypes are indexed by `name`.
     * @example
     * -- Get every entity prototype that can craft recipes involving fluids in the way some assembling machines can
     * local prototypes = game.get_filtered_entity_prototypes{{filter="crafting-category", crafting_category="crafting-with-fluid"}}
     */
    get_filtered_entity_prototypes(
      filters: readonly EntityPrototypeFilterWrite[],
    ): LuaCustomTable<string, LuaEntityPrototype>
    /**
     * Returns a dictionary of all LuaItemPrototypes that fit the given filters. The prototypes are indexed by `name`.
     * @example
     * -- Get every item prototype that, when launched with a rocket, produces a result.
     * local prototypes = game.get_filtered_item_prototypes{{filter="has-rocket-launch-products"}}
     */
    get_filtered_item_prototypes(filters: readonly ItemPrototypeFilterWrite[]): LuaCustomTable<string, LuaItemPrototype>
    /**
     * Returns a dictionary of all LuaEquipmentPrototypes that fit the given filters. The prototypes are indexed by `name`.
     * @example
     * -- Get every equipment prototype that functions as a battery.
     * local prototypes = game.get_filtered_equipment_prototypes{{filter="type", type="battery-equipment"}}
     */
    get_filtered_equipment_prototypes(
      filters: readonly EquipmentPrototypeFilter[],
    ): LuaCustomTable<string, LuaEquipmentPrototype>
    /**
     * Returns a dictionary of all LuaModSettingPrototypes that fit the given filters. The prototypes are indexed by `name`.
     * @example
     * -- Get every mod setting prototype that belongs to the specified mod.
     * local prototypes = game.get_filtered_mod_setting_prototypes{{filter="mod", mod="space-exploration"}}
     */
    get_filtered_mod_setting_prototypes(
      filters: readonly ModSettingPrototypeFilter[],
    ): LuaCustomTable<string, LuaModSettingPrototype>
    /**
     * Returns a dictionary of all LuaAchievementPrototypes that fit the given filters. The prototypes are indexed by `name`.
     * @example
     * -- Get every achievement prototype that is not allowed to be completed on the peaceful difficulty setting.
     * local prototypes = game.get_filtered_achievement_prototypes{{filter="allowed-without-fight", invert=true}}
     */
    get_filtered_achievement_prototypes(
      filters: readonly AchievementPrototypeFilter[],
    ): LuaCustomTable<string, LuaAchievementPrototype>
    /**
     * Returns a dictionary of all LuaTilePrototypes that fit the given filters. The prototypes are indexed by `name`.
     * @example
     * -- Get every tile prototype that improves a player's walking speed by at least 50%.
     * local prototypes = game.get_filtered_tile_prototypes{{filter="walking-speed-modifier", comparison="≥", value=1.5}}
     */
    get_filtered_tile_prototypes(filters: readonly TilePrototypeFilterWrite[]): LuaCustomTable<string, LuaTilePrototype>
    /**
     * Returns a dictionary of all LuaDecorativePrototypes that fit the given filters. The prototypes are indexed by `name`.
     * @example
     * -- Get every decorative prototype that is auto-placed.
     * local prototypes = game.get_filtered_decorative_prototypes{{filter="autoplace"}}
     */
    get_filtered_decorative_prototypes(
      filters: readonly DecorativePrototypeFilter[],
    ): LuaCustomTable<string, LuaDecorativePrototype>
    /**
     * Returns a dictionary of all LuaFluidPrototypes that fit the given filters. The prototypes are indexed by `name`.
     * @example
     * -- Get every fluid prototype that has a heat capacity of exactly `100`.
     * local prototypes = game.get_filtered_fluid_prototypes{{filter="heat-capacity", comparison="=", value=100}}
     */
    get_filtered_fluid_prototypes(
      filters: readonly FluidPrototypeFilterWrite[],
    ): LuaCustomTable<string, LuaFluidPrototype>
    /**
     * Returns a dictionary of all LuaRecipePrototypes that fit the given filters. The prototypes are indexed by `name`.
     * @example
     * -- Get every recipe prototype that takes less than half a second to craft (at crafting speed `1`).
     * local prototypes = game.get_filtered_recipe_prototypes{{filter="energy", comparison="<", value=0.5}}
     */
    get_filtered_recipe_prototypes(
      filters: readonly RecipePrototypeFilterWrite[],
    ): LuaCustomTable<string, LuaRecipePrototype>
    /**
     * Returns a dictionary of all LuaTechnologyPrototypes that fit the given filters. The prototypes are indexed by `name`.
     * @example
     * -- Get every technology prototype that can be researched at the start of the game.
     * local prototypes = game.get_filtered_technology_prototypes{{filter="has-prerequisites", invert=true}}
     */
    get_filtered_technology_prototypes(
      filters: readonly TechnologyPrototypeFilterWrite[],
    ): LuaCustomTable<string, LuaTechnologyPrototype>
    /**
     * Creates an inventory that is not owned by any game object.
     *
     * It can be resized later with {@link LuaInventory#resize LuaInventory::resize}.
     *
     * Make sure to destroy it when you are done with it using {@link LuaInventory#destroy LuaInventory::destroy}.
     * @param size The number of slots the inventory initially has.
     */
    create_inventory(size: uint16): LuaInventory
    /**
     * Gets the inventories created through {@link LuaGameScript#create_inventory LuaGameScript::create_inventory}.
     *
     * Inventories created through console commands will be owned by `"core"`.
     * @param mod The mod whose inventories to get. If not provided all inventories are returned.
     * @returns A mapping of mod name to array of inventories owned by that mod.
     */
    get_script_inventories(mod?: string): Record<string, LuaInventory[]>
    /**
     * Resets the amount of time played for this map.
     */
    reset_time_played(): void
    /**
     * Deflates and base64 encodes the given string.
     * @param string The string to encode.
     * @returns The encoded string or `nil` if the encode failed.
     */
    encode_string(string: string): string | nil
    /**
     * Base64 decodes and inflates the given string.
     * @param string The string to decode.
     * @returns The decoded string or `nil` if the decode failed.
     */
    decode_string(string: string): string | nil
    /**
     * Searches for a train with given ID.
     * @param train_id Train ID to search
     * @returns Train if found
     */
    get_train_by_id(train_id: uint): LuaTrain | nil
    /**
     * Direct access to Trains Pathfinder. Allows to search rail paths or querying which stops are accessible
     * @returns The type of the returned value depends on `type`.
     */
    request_train_path(params: {
      readonly goals: readonly (TrainStopGoal | RailEnd)[]
      /**
       * Defaults to `false`. If set to true, pathfinder will not return a path that cannot have its beginning immediately reserved. A path that cannot have its beginning immediately reserved could cause a train to stop inside of an intersection.
       */
      readonly in_chain_signal_section?: boolean
      /**
       * Mandatory if `from_front` and `from_back` are not provided, optional otherwise. Selects a context for the pathfinder to decide which train to exclude from penalties and which signals are considered possible to reacquire. If `from_front` and `from_back` are not provided, then it is also used to collect front and back ends for the search
       */
      readonly train?: LuaTrain
      /**
       * Request type. Determines the return type of the method. Defaults to `"path"`.
       */
      readonly type?: TrainPathRequestType
      /**
       * Only relevant if request type is `"path"`. Returning a full path is expensive due to multiple LuaEntity created. In order for path to be returned, true must be provided here. Defaults to false in which case a path will not be provided.
       */
      readonly return_path?: boolean
      /**
       * Manually provided starting front of the train.
       */
      readonly from_front?: RailEnd
      /**
       * Only relevant if `from_front` is given. Defaults to `true`. Providing false will cause the pathfinder to reject a path that starts on front and ends within the same segment as the path would be too short to provide correct alignment with a goal.
       */
      readonly allow_path_within_segment_front?: boolean
      /**
       * Manually provided starting back of the train.
       */
      readonly from_back?: RailEnd
      /**
       * Only relevant if `from_back` is given. Defaults to `true`. Providing false will cause the pathfinder to reject a path that starts on back and ends within the same segment as the path would be too short to provide correct alignment with a goal.
       */
      readonly allow_path_within_segment_back?: boolean
      /**
       * Only relevant if none of `from_front`/`from_back` was provided in which case `from_front` and `from_back` are deduced from the train. Selects which train ends should be considered as starts. Defaults to `"any-direction-with-locomotives"`.
       */
      readonly search_direction?: "respect-movement-direction" | "any-direction-with-locomotives"
      /**
       * Maximum amount of steps pathfinder is allowed to perform.
       */
      readonly steps_limit?: uint
    }): TrainPathFinderPathResult | TrainPathAnyGoalResult | TrainPathAllGoalsResult
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * This property is only populated inside {@link LuaCommandProcessor custom command} handlers and when writing {@linkplain https://wiki.factorio.com/Console#Scripting_and_cheat_commands Lua console commands}. Returns the player that is typing the command, `nil` in all other instances.
     *
     * See {@link LuaGameScript#players LuaGameScript::players} for accessing all players.
     */
    readonly player?: LuaPlayer
    /**
     * Get a table of all the players that currently exist. This sparse table allows you to find players by indexing it with either their `name` or `index`. Iterating this table with `pairs()` will only iterate the array part of the table. Iterating with `ipairs()` will not work at all.
     *
     * If only a single player is required, {@link LuaGameScript#get_player LuaGameScript::get_player} should be used instead, as it avoids the unnecessary overhead of passing the whole table to Lua.
     */
    readonly players: LuaCustomTable<PlayerIndex | string, LuaPlayer>
    /**
     * The currently active set of map settings. Even though this property is marked as read-only, the members of the dictionary that is returned can be modified mid-game.
     *
     * This does not contain difficulty settings, use {@link LuaGameScript#difficulty_settings LuaGameScript::difficulty_settings} instead.
     */
    readonly map_settings: MapSettings
    /**
     * The currently active set of difficulty settings. Even though this property is marked as read-only, the members of the dictionary that is returned can be modified mid-game. This is however not recommended as different difficulties can have differing technology and recipe trees, which can cause problems for players.
     * @example
     * -- This will set the technology price multiplier to 12.
     * game.difficulty_settings.technology_price_multiplier = 12
     */
    readonly difficulty_settings: DifficultySettings
    /**
     * Current scenario difficulty.
     */
    readonly difficulty: defines.difficulty
    /**
     * Get a table of all the forces that currently exist. This sparse table allows you to find forces by indexing it with either their `name` or `index`. Iterating this table with `pairs()` will only iterate the hash part of the table. Iterating with `ipairs()` will not work at all.
     */
    readonly forces: LuaCustomTable<uint | string, LuaForce>
    /**
     * A dictionary containing every LuaEntityPrototype indexed by `name`.
     */
    readonly entity_prototypes: LuaCustomTable<string, LuaEntityPrototype>
    /**
     * A dictionary containing every LuaItemPrototype indexed by `name`.
     */
    readonly item_prototypes: LuaCustomTable<string, LuaItemPrototype>
    /**
     * A dictionary containing every LuaFluidPrototype indexed by `name`.
     */
    readonly fluid_prototypes: LuaCustomTable<string, LuaFluidPrototype>
    /**
     * A dictionary containing every LuaTilePrototype indexed by `name`.
     */
    readonly tile_prototypes: LuaCustomTable<string, LuaTilePrototype>
    /**
     * A dictionary containing every LuaEquipmentPrototype indexed by `name`.
     */
    readonly equipment_prototypes: LuaCustomTable<string, LuaEquipmentPrototype>
    /**
     * A dictionary containing every LuaDamagePrototype indexed by `name`.
     */
    readonly damage_prototypes: LuaCustomTable<string, LuaDamagePrototype>
    /**
     * A dictionary containing every LuaVirtualSignalPrototype indexed by `name`.
     */
    readonly virtual_signal_prototypes: LuaCustomTable<string, LuaVirtualSignalPrototype>
    /**
     * A dictionary containing every LuaEquipmentGridPrototype indexed by `name`.
     */
    readonly equipment_grid_prototypes: LuaCustomTable<string, LuaEquipmentGridPrototype>
    /**
     * A dictionary containing every LuaRecipePrototype indexed by `name`.
     */
    readonly recipe_prototypes: LuaCustomTable<string, LuaRecipePrototype>
    /**
     * A dictionary containing every {@link LuaTechnologyPrototype} indexed by `name`.
     */
    readonly technology_prototypes: LuaCustomTable<string, LuaTechnologyPrototype>
    /**
     * A dictionary containing every LuaDecorativePrototype indexed by `name`.
     */
    readonly decorative_prototypes: LuaCustomTable<string, LuaDecorativePrototype>
    /**
     * A dictionary containing every LuaParticlePrototype indexed by `name`.
     */
    readonly particle_prototypes: LuaCustomTable<string, LuaParticlePrototype>
    /**
     * A dictionary containing every LuaAutoplaceControlPrototype indexed by `name`.
     */
    readonly autoplace_control_prototypes: LuaCustomTable<string, LuaAutoplaceControlPrototype>
    /**
     * A dictionary containing every LuaNoiseLayerPrototype indexed by `name`.
     */
    readonly noise_layer_prototypes: LuaCustomTable<string, LuaNoiseLayerPrototype>
    /**
     * A dictionary containing every LuaModSettingPrototype indexed by `name`.
     */
    readonly mod_setting_prototypes: LuaCustomTable<string, LuaModSettingPrototype>
    /**
     * A dictionary containing every LuaCustomInputPrototype indexed by `name`.
     */
    readonly custom_input_prototypes: LuaCustomTable<string, LuaCustomInputPrototype>
    /**
     * A dictionary containing every LuaAmmoCategoryPrototype indexed by `name`.
     */
    readonly ammo_category_prototypes: LuaCustomTable<string, LuaAmmoCategoryPrototype>
    /**
     * A dictionary containing every LuaNamedNoiseExpression indexed by `name`.
     */
    readonly named_noise_expressions: LuaCustomTable<string, LuaNamedNoiseExpression>
    /**
     * A dictionary containing every ItemSubgroup indexed by `name`.
     */
    readonly item_subgroup_prototypes: LuaCustomTable<string, LuaGroup>
    /**
     * A dictionary containing every ItemGroup indexed by `name`.
     */
    readonly item_group_prototypes: LuaCustomTable<string, LuaGroup>
    /**
     * A dictionary containing every LuaFuelCategoryPrototype indexed by `name`.
     */
    readonly fuel_category_prototypes: LuaCustomTable<string, LuaFuelCategoryPrototype>
    /**
     * A dictionary containing every LuaResourceCategoryPrototype indexed by `name`.
     */
    readonly resource_category_prototypes: LuaCustomTable<string, LuaResourceCategoryPrototype>
    /**
     * A dictionary containing every LuaAchievementPrototype indexed by `name`.
     */
    readonly achievement_prototypes: LuaCustomTable<string, LuaAchievementPrototype>
    /**
     * A dictionary containing every LuaModuleCategoryPrototype indexed by `name`.
     */
    readonly module_category_prototypes: LuaCustomTable<string, LuaModuleCategoryPrototype>
    /**
     * A dictionary containing every LuaEquipmentCategoryPrototype indexed by `name`.
     */
    readonly equipment_category_prototypes: LuaCustomTable<string, LuaEquipmentCategoryPrototype>
    /**
     * A dictionary containing every LuaTrivialSmokePrototype indexed by `name`.
     */
    readonly trivial_smoke_prototypes: LuaCustomTable<string, LuaTrivialSmokePrototype>
    /**
     * A dictionary containing every LuaShortcutPrototype indexed by `name`.
     */
    readonly shortcut_prototypes: LuaCustomTable<string, LuaShortcutPrototype>
    /**
     * A dictionary containing every LuaRecipeCategoryPrototype indexed by `name`.
     */
    readonly recipe_category_prototypes: LuaCustomTable<string, LuaRecipeCategoryPrototype>
    /**
     * A dictionary containing every LuaFontPrototype indexed by `name`.
     */
    readonly font_prototypes: LuaCustomTable<string, LuaFontPrototype>
    /**
     * A dictionary containing every MapGenPreset indexed by `name`.
     *
     * A MapGenPreset is an exact copy of the prototype table provided from the data stage.
     */
    readonly map_gen_presets: LuaCustomTable<string, MapGenPreset>
    /**
     * Whether a console command has been used.
     */
    readonly console_command_used: boolean
    /**
     * The styles that {@link LuaGuiElement} can use, indexed by `name`.
     */
    readonly styles: LuaCustomTable<string, string>
    /**
     * Current map tick.
     */
    readonly tick: uint
    /**
     * The number of ticks since this game was created using either "new game" or "new game from scenario". Notably, this number progresses even when the game is {@link LuaGameScript#tick_paused tick_paused}.
     *
     * This differs from {@link LuaGameScript#tick LuaGameScript::tick} in that creating a game from a scenario always starts with this value at `0`, even if the scenario has its own level data where the `tick` has progressed past `0`.
     */
    readonly ticks_played: uint
    /**
     * If the tick has been paused. This means that entity update has been paused.
     */
    tick_paused: boolean
    /**
     * The number of ticks to be run while the tick is paused.
     *
     * When {@link LuaGameScript#tick_paused LuaGameScript::tick_paused} is true, ticks_to_run behaves the following way:
     *
     * While this is > 0, the entity update is running normally and this value is decremented every tick. When this reaches 0, the game will pause again.
     */
    ticks_to_run: uint
    /**
     * True while the victory screen is shown.
     */
    readonly finished: boolean
    /**
     * True after players finished the game and clicked "continue".
     */
    readonly finished_but_continuing: boolean
    /**
     * Speed to update the map at. 1.0 is normal speed -- 60 UPS. Minimum value is 0.01.
     */
    speed: float
    /**
     * Get a table of all the surfaces that currently exist. This sparse table allows you to find surfaces by indexing it with either their `name` or `index`. Iterating this table with `pairs()` will only iterate the hash part of the table. Iterating with `ipairs()` will not work at all.
     */
    readonly surfaces: LuaCustomTable<SurfaceIndex | string, LuaSurface>
    /**
     * The active mods versions. The keys are mod names, the values are the versions.
     * @example
     * -- This will print the names and versions of active mods to player p's console.
     * for name, version in pairs(game.active_mods) do
     *   p.print(name .. " version " .. version)
     * end
     */
    readonly active_mods: ActiveMods
    /**
     * The players that are currently online.
     *
     * This does *not* index using player index. See {@link LuaPlayer#index LuaPlayer::index} on each player instance for the player index.
     *
     * This is primarily useful when you want to do some action against all online players.
     */
    readonly connected_players: LuaPlayer[]
    readonly permissions: LuaPermissionGroups
    /**
     * Array of the names of all the backers that supported the game development early on. These are used as names for labs, locomotives, radars, roboports, and train stops.
     */
    readonly backer_names: LuaCustomTable<uint, string>
    /**
     * The default map gen settings for this save.
     */
    readonly default_map_gen_settings: MapGenSettings
    /**
     * Determines if enemy land mines are completely invisible or not.
     */
    enemy_has_vision_on_land_mines: boolean
    /**
     * True by default. Can be used to disable autosaving. Make sure to turn it back on soon after.
     */
    autosave_enabled: boolean
    /**
     * True by default. Can be used to disable the highlighting of resource patches when they are hovered on the map.
     */
    draw_resource_selection: boolean
    /**
     * The pollution statistics for this map.
     */
    readonly pollution_statistics: LuaFlowStatistics
    readonly max_force_distraction_distance: double
    readonly max_force_distraction_chunk_distance: uint
    readonly max_electric_pole_supply_area_distance: float
    readonly max_electric_pole_connection_distance: double
    readonly max_beacon_supply_area_distance: double
    readonly max_gate_activation_distance: double
    readonly max_inserter_reach_distance: double
    readonly max_pipe_to_ground_distance: uint8
    readonly max_underground_belt_distance: uint8
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaGameScript"
  }
  /**
   * An abstract base class for behaviors that support switching the entity on or off based on some condition.
   */
  export interface LuaGenericOnOffControlBehavior extends LuaControlBehavior {
    /**
     * If the entity is currently disabled because of the control behavior.
     */
    readonly disabled: boolean
    /**
     * The circuit condition. Writing `nil` clears the circuit condition.
     * @example
     * -- Tell an entity to be active (for example a lamp to be lit) when it receives a
     * -- circuit signal of more than 4 chain signals.
     * a_behavior.circuit_condition = {condition={
     *   comparator=">",
     *   first_signal={type="item", name="rail-chain-signal"},
     *   constant=4}
     * }
     */
    get circuit_condition(): CircuitConditionDefinition | nil
    set circuit_condition(value: CircuitConditionDefinitionWrite | nil)
    /**
     * The logistic condition. Writing `nil` clears the logistic condition.
     * @example
     * -- Tell an entity to be active (for example a lamp to be lit) when the logistics
     * -- network it's connected to has more than four chain signals.
     * a_behavior.logistic_condition = {condition={
     *   comparator=">",
     *   first_signal={type="item", name="rail-chain-signal"},
     *   constant=4}
     * }
     */
    get logistic_condition(): CircuitConditionDefinition | nil
    set logistic_condition(value: CircuitConditionDefinitionWrite | nil)
    /**
     * `true` if this should connect to the logistic network.
     */
    connect_to_logistic_network: boolean
  }
  /**
   * Item group or subgroup.
   * @noSelf
   */
  export interface LuaGroup {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    readonly name: string
    /**
     * Localised name of the group.
     */
    readonly localised_name: LocalisedString
    readonly type: "item-group" | "item-subgroup"
    /**
     * The parent group.
     *
     * _Can only be used if this is ItemSubGroup_
     */
    readonly group: LuaGroup
    /**
     * Subgroups of this group.
     *
     * _Can only be used if this is ItemGroup_
     */
    readonly subgroups: LuaGroup[]
    /**
     * The additional order value used in recipe ordering.
     *
     * _Can only be used if this is ItemGroup_
     */
    readonly order_in_recipe: string
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaGroup"
  }
  /**
   * @noSelf
   */
  export interface BaseGroup {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    readonly name: string
    /**
     * Localised name of the group.
     */
    readonly localised_name: LocalisedString
    readonly type: "item-group" | "item-subgroup"
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaGroup"
  }
  export interface ItemSubGroup extends BaseGroup {
    /**
     * The parent group.
     *
     * _Can only be used if this is ItemSubGroup_
     */
    readonly group: LuaGroup
  }
  export interface ItemGroup extends BaseGroup {
    /**
     * Subgroups of this group.
     *
     * _Can only be used if this is ItemGroup_
     */
    readonly subgroups: LuaGroup[]
    /**
     * The additional order value used in recipe ordering.
     *
     * _Can only be used if this is ItemGroup_
     */
    readonly order_in_recipe: string
  }
  /**
   * The root of the GUI. This type houses the root elements, `top`, `left`, `center`,  `goal`, and `screen`, to which other elements can be added to be displayed on screen.
   *
   * Every player can have a different GUI state.
   * @noSelf
   */
  export interface LuaGui {
    /**
     * Returns `true` if sprite_path is valid and contains loaded sprite, otherwise `false`. Sprite path of type `file` doesn't validate if file exists.
     *
     * If you want to avoid needing a LuaGui object, {@link LuaGameScript#is_valid_sprite_path LuaGameScript::is_valid_sprite_path} can be used instead.
     * @param sprite_path Path to a image.
     */
    is_valid_sprite_path(sprite_path: SpritePath): boolean
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * The player who owns this gui.
     */
    readonly player: LuaPlayer
    /**
     * The children GUI elements mapped by name <> element.
     */
    readonly children: Record<string, LuaGuiElement>
    /**
     * The top part of the GUI. It is a flow element inside a scroll pane element.
     */
    readonly top: LuaGuiElement
    /**
     * The left part of the GUI. It is a flow element inside a scroll pane element.
     */
    readonly left: LuaGuiElement
    /**
     * The center part of the GUI. It is a flow element.
     */
    readonly center: LuaGuiElement
    /**
     * The flow used in the objectives window. It is a flow element. The objectives window is only visible when the flow is not empty or the objective text is set.
     */
    readonly goal: LuaGuiElement
    /**
     * For showing a GUI somewhere on the entire screen. It is an empty-widget element.
     */
    readonly screen: LuaGuiElement
    /**
     * For showing a GUI somewhere relative to one of the game GUIs. It is an empty-widget element.
     */
    readonly relative: LuaGuiElement
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaGui"
  }
  /**
   * Common attributes to all variants of {@link GuiSpec}.
   */
  export interface BaseGuiSpec {
    /**
     * The kind of element to add, which potentially has its own attributes as listed below.
     */
    readonly type: GuiElementType
    /**
     * Name of the child element. It must be unique within the parent element.
     */
    readonly name?: string
    /**
     * Text displayed on the child element. For frames, this is their title. For other elements, like buttons or labels, this is the content. Whilst this attribute may be used on all elements, it doesn't make sense for tables and flows as they won't display it.
     */
    readonly caption?: LocalisedString
    /**
     * Tooltip of the child element.
     */
    readonly tooltip?: LocalisedString
    /**
     * Elem tooltip of the child element. Will be displayed above `tooltip`.
     */
    readonly elem_tooltip?: ElemID
    /**
     * Whether the child element is enabled. Defaults to `true`.
     */
    readonly enabled?: boolean
    /**
     * Whether the child element is visible. Defaults to `true`.
     */
    readonly visible?: boolean
    /**
     * Whether the child element is ignored by interaction. Defaults to `false`.
     */
    readonly ignored_by_interaction?: boolean
    /**
     * The name of the style prototype to apply to the new element.
     */
    readonly style?: string
    /**
     * {@link Tags} associated with the child element.
     */
    readonly tags?: Tags
    /**
     * Location in its parent that the child element should slot into. By default, the child will be appended onto the end.
     */
    readonly index?: uint
    /**
     * Where to position the child element when in the `relative` element.
     */
    readonly anchor?: GuiAnchor
    /**
     * How the element should interact with game controllers. Defaults to {@link defines.game_controller_interaction.normal}.
     */
    readonly game_controller_interaction?: defines.game_controller_interaction
    /**
     * Whether this element will raise {@link OnGuiHoverEvent on_gui_hover} and {@link OnGuiLeaveEvent on_gui_leave}. Defaults to `false`.
     */
    readonly raise_hover_events?: boolean
  }
  /**
   * `"button"` variant of {@link GuiSpec}.
   */
  export interface ButtonGuiSpec extends BaseGuiSpec {
    readonly type: "button"
    /**
     * Which mouse buttons the button responds to. Defaults to `"left-and-right"`.
     */
    readonly mouse_button_filter?: MouseButtonFlagsWrite
    /**
     * Whether the button will automatically toggle when clicked. Defaults to `false`.
     */
    readonly auto_toggle?: boolean
    /**
     * The initial toggled state of the button. Defaults to `false`.
     */
    readonly toggled?: boolean
  }
  /**
   * `"flow"` variant of {@link GuiSpec}.
   */
  export interface FlowGuiSpec extends BaseGuiSpec {
    readonly type: "flow"
    /**
     * The initial direction of the flow's layout. Defaults to `"horizontal"`.
     */
    readonly direction?: "horizontal" | "vertical"
  }
  /**
   * `"frame"` variant of {@link GuiSpec}.
   */
  export interface FrameGuiSpec extends BaseGuiSpec {
    readonly type: "frame"
    /**
     * The initial direction of the frame's layout. Defaults to `"horizontal"`.
     */
    readonly direction?: "horizontal" | "vertical"
  }
  /**
   * `"table"` variant of {@link GuiSpec}.
   */
  export interface TableGuiSpec extends BaseGuiSpec {
    readonly type: "table"
    /**
     * Number of columns. This can't be changed after the table is created.
     */
    readonly column_count: uint
    /**
     * Whether the table should draw vertical grid lines. Defaults to `false`.
     */
    readonly draw_vertical_lines?: boolean
    /**
     * Whether the table should draw horizontal grid lines. Defaults to `false`.
     */
    readonly draw_horizontal_lines?: boolean
    /**
     * Whether the table should draw a single horizontal grid line after the headers. Defaults to `false`.
     */
    readonly draw_horizontal_line_after_headers?: boolean
    /**
     * Whether the content of the table should be vertically centered. Defaults to `true`.
     */
    readonly vertical_centering?: boolean
  }
  /**
   * `"textfield"` variant of {@link GuiSpec}.
   */
  export interface TextFieldGuiSpec extends BaseGuiSpec {
    readonly type: "textfield"
    /**
     * The initial text contained in the textfield.
     */
    readonly text?: string
    /**
     * Defaults to `false`.
     */
    readonly numeric?: boolean
    /**
     * Defaults to `false`.
     */
    readonly allow_decimal?: boolean
    /**
     * Defaults to `false`.
     */
    readonly allow_negative?: boolean
    /**
     * Defaults to `false`.
     */
    readonly is_password?: boolean
    /**
     * Defaults to `false`.
     */
    readonly lose_focus_on_confirm?: boolean
    /**
     * Defaults to `false`.
     */
    readonly clear_and_focus_on_right_click?: boolean
  }
  /**
   * `"progressbar"` variant of {@link GuiSpec}.
   */
  export interface ProgressBarGuiSpec extends BaseGuiSpec {
    readonly type: "progressbar"
    /**
     * The initial value of the progressbar, in the range [0, 1]. Defaults to `0`.
     */
    readonly value?: double
  }
  /**
   * `"checkbox"` variant of {@link GuiSpec}.
   */
  export interface CheckboxGuiSpec extends BaseGuiSpec {
    readonly type: "checkbox"
    /**
     * The initial checked-state of the checkbox.
     */
    readonly state: boolean
  }
  /**
   * `"radiobutton"` variant of {@link GuiSpec}.
   */
  export interface RadioButtonGuiSpec extends BaseGuiSpec {
    readonly type: "radiobutton"
    /**
     * The initial checked-state of the radiobutton.
     */
    readonly state: boolean
  }
  /**
   * `"sprite-button"` variant of {@link GuiSpec}.
   */
  export interface SpriteButtonGuiSpec extends BaseGuiSpec {
    readonly type: "sprite-button"
    /**
     * Path to the image to display on the button.
     */
    readonly sprite?: SpritePath
    /**
     * Path to the image to display on the button when it is hovered.
     */
    readonly hovered_sprite?: SpritePath
    /**
     * Path to the image to display on the button when it is clicked.
     */
    readonly clicked_sprite?: SpritePath
    /**
     * The number shown on the button.
     */
    readonly number?: double
    /**
     * Formats small numbers as percentages. Defaults to `false`.
     */
    readonly show_percent_for_small_numbers?: boolean
    /**
     * The mouse buttons that the button responds to. Defaults to `"left-and-right"`.
     */
    readonly mouse_button_filter?: MouseButtonFlagsWrite
    /**
     * Whether the button will automatically toggle when clicked. Defaults to `false`.
     */
    readonly auto_toggle?: boolean
    /**
     * The initial toggled state of the button. Defaults to `false`.
     */
    readonly toggled?: boolean
  }
  /**
   * `"sprite"` variant of {@link GuiSpec}.
   */
  export interface SpriteGuiSpec extends BaseGuiSpec {
    readonly type: "sprite"
    /**
     * Path to the image to display.
     */
    readonly sprite?: SpritePath
    /**
     * Whether the widget should resize according to the sprite in it. Defaults to `true`.
     */
    readonly resize_to_sprite?: boolean
  }
  /**
   * `"scroll-pane"` variant of {@link GuiSpec}.
   */
  export interface ScrollPaneGuiSpec extends BaseGuiSpec {
    readonly type: "scroll-pane"
    /**
     * Policy of the horizontal scroll bar. Defaults to `"auto"`.
     */
    readonly horizontal_scroll_policy?: ScrollPolicy
    /**
     * Policy of the vertical scroll bar. Defaults to `"auto"`.
     */
    readonly vertical_scroll_policy?: ScrollPolicy
  }
  /**
   * `"drop-down"` variant of {@link GuiSpec}.
   */
  export interface DropDownGuiSpec extends BaseGuiSpec {
    readonly type: "drop-down"
    /**
     * The initial items in the dropdown.
     */
    readonly items?: readonly LocalisedString[]
    /**
     * The index of the initially selected item. Defaults to 0.
     */
    readonly selected_index?: uint
  }
  /**
   * `"line"` variant of {@link GuiSpec}.
   */
  export interface LineGuiSpec extends BaseGuiSpec {
    readonly type: "line"
    /**
     * The initial direction of the line. Defaults to `"horizontal"`.
     */
    readonly direction?: "horizontal" | "vertical"
  }
  /**
   * `"list-box"` variant of {@link GuiSpec}.
   */
  export interface ListBoxGuiSpec extends BaseGuiSpec {
    readonly type: "list-box"
    /**
     * The initial items in the listbox.
     */
    readonly items?: readonly LocalisedString[]
    /**
     * The index of the initially selected item. Defaults to 0.
     */
    readonly selected_index?: uint
  }
  /**
   * `"camera"` variant of {@link GuiSpec}.
   */
  export interface CameraGuiSpec extends BaseGuiSpec {
    readonly type: "camera"
    /**
     * The position the camera centers on.
     */
    readonly position: MapPosition | MapPositionArray
    /**
     * The surface that the camera will render. Defaults to the player's current surface.
     */
    readonly surface_index?: SurfaceIndex
    /**
     * The initial camera zoom. Defaults to `0.75`.
     */
    readonly zoom?: double
  }
  export type ChooseElemButtonType =
    | "item"
    | "tile"
    | "entity"
    | "signal"
    | "fluid"
    | "recipe"
    | "decorative"
    | "item-group"
    | "achievement"
    | "equipment"
    | "technology"
  export interface ChooseElemButtonFilters {
    item: ItemPrototypeFilter[]
    tile: TilePrototypeFilter[]
    entity: EntityPrototypeFilter[]
    signal: never
    fluid: FluidPrototypeFilter[]
    recipe: RecipePrototypeFilter[]
    decorative: DecorativePrototypeFilter[]
    "item-group": never
    achievement: AchievementPrototypeFilter[]
    equipment: EquipmentPrototypeFilter[]
    technology: TechnologyPrototypeFilter[]
  }
  export interface BaseChooseElemButtonSpec extends BaseGuiSpec {
    readonly type: "choose-elem-button"
    /** The type of the button - one of the following values. */
    readonly elem_type: ChooseElemButtonType
    /** Filters describing what to show in the selection window. See {@link LuaGuiElement.elem_filters LuaGuiElement::elem_filters}. */
    readonly elem_filters?: ChooseElemButtonFilters[this["elem_type"]]
  }
  export interface ItemChooseElemButtonSpec extends BaseChooseElemButtonSpec {
    readonly elem_type: "item"
    /** If type is `"item"` - the default value for the button. */
    readonly item?: string
  }
  export interface TileChooseElemButtonSpec extends BaseChooseElemButtonSpec {
    readonly elem_type: "tile"
    /** If type is `"tile"` - the default value for the button. */
    readonly tile?: string
  }
  export interface EntityChooseElemButtonSpec extends BaseChooseElemButtonSpec {
    readonly elem_type: "entity"
    /** If type is `"entity"` - the default value for the button. */
    readonly entity?: string
  }
  export interface SignalChooseElemButtonSpec extends BaseChooseElemButtonSpec {
    readonly elem_type: "signal"
    /** If type is `"signal"` - the default value for the button. */
    readonly signal?: SignalID
  }
  export interface FluidChooseElemButtonSpec extends BaseChooseElemButtonSpec {
    readonly elem_type: "fluid"
    /** If type is `"fluid"` - the default value for the button. */
    readonly fluid?: string
  }
  export interface RecipeChooseElemButtonSpec extends BaseChooseElemButtonSpec {
    readonly elem_type: "recipe"
    /** If type is `"recipe"` - the default value for the button. */
    readonly recipe?: string
  }
  export interface DecorativeChooseElemButtonSpec extends BaseChooseElemButtonSpec {
    readonly elem_type: "decorative"
    /** If type is `"decorative"` - the default value for the button. */
    readonly decorative?: string
  }
  export interface ItemGroupChooseElemButtonSpec extends BaseChooseElemButtonSpec {
    readonly elem_type: "item-group"
    /** If type is `"item-group"` - the default value for the button. */
    readonly "item-group"?: string
  }
  export interface AchievementChooseElemButtonSpec extends BaseChooseElemButtonSpec {
    readonly elem_type: "achievement"
    /** If type is `"achievement"` - the default value for the button. */
    readonly achievement?: string
  }
  export interface EquipmentChooseElemButtonSpec extends BaseChooseElemButtonSpec {
    readonly elem_type: "equipment"
    /** If type is `"equipment"` - the default value for the button. */
    readonly equipment?: string
  }
  export interface TechnologyChooseElemButtonSpec extends BaseChooseElemButtonSpec {
    readonly elem_type: "technology"
    /** If type is `"technology"` - the default value for the button. */
    readonly technology?: string
  }
  /**
   * `"choose-elem-button"` variant of {@link GuiSpec}.
   */
  export type ChooseElemButtonGuiSpec =
    | ItemChooseElemButtonSpec
    | TileChooseElemButtonSpec
    | EntityChooseElemButtonSpec
    | SignalChooseElemButtonSpec
    | FluidChooseElemButtonSpec
    | RecipeChooseElemButtonSpec
    | DecorativeChooseElemButtonSpec
    | ItemGroupChooseElemButtonSpec
    | AchievementChooseElemButtonSpec
    | EquipmentChooseElemButtonSpec
    | TechnologyChooseElemButtonSpec
  /**
   * `"text-box"` variant of {@link GuiSpec}.
   */
  export interface TextBoxGuiSpec extends BaseGuiSpec {
    readonly type: "text-box"
    /**
     * The initial text contained in the text-box.
     */
    readonly text?: string
    /**
     * Defaults to `false`.
     */
    readonly clear_and_focus_on_right_click?: boolean
  }
  /**
   * `"slider"` variant of {@link GuiSpec}.
   */
  export interface SliderGuiSpec extends BaseGuiSpec {
    readonly type: "slider"
    /**
     * The minimum value for the slider. Defaults to `0`.
     */
    readonly minimum_value?: double
    /**
     * The maximum value for the slider. Defaults to `30`.
     */
    readonly maximum_value?: double
    /**
     * The initial value for the slider. Defaults to `minimum_value`.
     */
    readonly value?: double
    /**
     * The minimum value the slider can move. Defaults to `1`.
     */
    readonly value_step?: double
    /**
     * Defaults to `false`.
     */
    readonly discrete_slider?: boolean
    /**
     * Defaults to `true`.
     */
    readonly discrete_values?: boolean
  }
  /**
   * `"minimap"` variant of {@link GuiSpec}.
   */
  export interface MinimapGuiSpec extends BaseGuiSpec {
    readonly type: "minimap"
    /**
     * The position the minimap centers on. Defaults to the player's current position.
     */
    readonly position?: MapPosition | MapPositionArray
    /**
     * The surface the camera will render. Defaults to the player's current surface.
     */
    readonly surface_index?: SurfaceIndex
    /**
     * The player index the map should use. Defaults to the current player.
     */
    readonly chart_player_index?: uint
    /**
     * The force this minimap should use. Defaults to the player's current force.
     */
    readonly force?: string
    /**
     * The initial camera zoom. Defaults to `0.75`.
     */
    readonly zoom?: double
  }
  /**
   * `"tab"` variant of {@link GuiSpec}.
   */
  export interface TabGuiSpec extends BaseGuiSpec {
    readonly type: "tab"
    /**
     * The text to display after the normal tab text (designed to work with numbers).
     */
    readonly badge_text?: LocalisedString
  }
  /**
   * `"switch"` variant of {@link GuiSpec}.
   */
  export interface SwitchGuiSpec extends BaseGuiSpec {
    readonly type: "switch"
    /**
     * If set to "none", `allow_none_state` must be `true`. Defaults to `"left"`.
     */
    readonly switch_state?: SwitchState
    /**
     * Whether the switch can be set to a middle state. Defaults to `false`.
     */
    readonly allow_none_state?: boolean
    readonly left_label_caption?: LocalisedString
    readonly left_label_tooltip?: LocalisedString
    readonly right_label_caption?: LocalisedString
    readonly right_label_tooltip?: LocalisedString
  }
  /**
   * Variants of {@link GuiSpec} with no additional attributes.
   */
  export interface OtherGuiSpec extends BaseGuiSpec {
    readonly type: "label" | "entity-preview" | "empty-widget" | "tabbed-pane"
  }
  export type GuiSpec =
    | ButtonGuiSpec
    | FlowGuiSpec
    | FrameGuiSpec
    | TableGuiSpec
    | TextFieldGuiSpec
    | ProgressBarGuiSpec
    | CheckboxGuiSpec
    | RadioButtonGuiSpec
    | SpriteButtonGuiSpec
    | SpriteGuiSpec
    | ScrollPaneGuiSpec
    | DropDownGuiSpec
    | LineGuiSpec
    | ListBoxGuiSpec
    | CameraGuiSpec
    | ChooseElemButtonGuiSpec
    | TextBoxGuiSpec
    | SliderGuiSpec
    | MinimapGuiSpec
    | TabGuiSpec
    | SwitchGuiSpec
    | OtherGuiSpec
  export interface GuiElementIndexer {
    /**
     * The indexing operator. Gets children by name.
     */
    readonly [name: string]: LuaGuiElement | nil
  }
  /**
   * @noSelf
   */
  export interface BaseGuiElement {
    /**
     * Add a new child element to this GuiElement.
     *
     * Base attributes: {@link BaseGuiSpec}
     *
     * Other attributes may be specified depending on `type`:
     * - `"button"`: {@link ButtonGuiSpec}
     * - `"flow"`: {@link FlowGuiSpec}
     * - `"frame"`: {@link FrameGuiSpec}
     * - `"table"`: {@link TableGuiSpec}
     * - `"textfield"`: {@link TextFieldGuiSpec}
     * - `"progressbar"`: {@link ProgressBarGuiSpec}
     * - `"checkbox"`: {@link CheckboxGuiSpec}
     * - `"radiobutton"`: {@link RadioButtonGuiSpec}
     * - `"sprite-button"`: {@link SpriteButtonGuiSpec}
     * - `"sprite"`: {@link SpriteGuiSpec}
     * - `"scroll-pane"`: {@link ScrollPaneGuiSpec}
     * - `"drop-down"`: {@link DropDownGuiSpec}
     * - `"line"`: {@link LineGuiSpec}
     * - `"list-box"`: {@link ListBoxGuiSpec}
     * - `"camera"`: {@link CameraGuiSpec}
     * - `"choose-elem-button"`: {@link ChooseElemButtonGuiSpec}
     * - `"text-box"`: {@link TextBoxGuiSpec}
     * - `"slider"`: {@link SliderGuiSpec}
     * - `"minimap"`: {@link MinimapGuiSpec}
     * - `"tab"`: {@link TabGuiSpec}
     * - `"switch"`: {@link SwitchGuiSpec}
     * @returns The GUI element that was added.
     */
    add<Type extends GuiElementType>(
      element: GuiSpec & {
        type: Type
      },
    ): Extract<
      LuaGuiElement,
      {
        type: Type
      }
    >
    /**
     * Remove children of this element. Any {@link LuaGuiElement} objects referring to the destroyed elements become invalid after this operation.
     * @example
     * game.player.gui.top.clear()
     */
    clear(): void
    /**
     * Remove this element, along with its children. Any {@link LuaGuiElement} objects referring to the destroyed elements become invalid after this operation.
     *
     * The top-level GUI elements - {@link LuaGui#top LuaGui::top}, {@link LuaGui#left LuaGui::left}, {@link LuaGui#center LuaGui::center} and {@link LuaGui#screen LuaGui::screen} - can't be destroyed.
     * @example
     * game.player.gui.top.greeting.destroy()
     */
    destroy(): void
    /**
     * The mod that owns this Gui element or `nil` if it's owned by the scenario script.
     *
     * This has a not-super-expensive, but non-free cost to get.
     */
    get_mod(): string | nil
    /**
     * Gets the index that this element has in its parent element.
     *
     * This iterates through the children of the parent of this element, meaning this has a non-free cost to get, but is faster than doing the equivalent in Lua.
     */
    get_index_in_parent(): uint
    /**
     * Swaps the children at the given indices in this element.
     * @param index_1 The index of the first child.
     * @param index_2 The index of the second child.
     */
    swap_children(index_1: uint, index_2: uint): void
    /**
     * Focuses this GUI element if possible.
     */
    focus(): void
    /**
     * Moves this GUI element to the "front" so it will draw over other elements.
     *
     * Only works for elements in {@link LuaGui#screen LuaGui::screen}.
     */
    bring_to_front(): void
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * The index of this GUI element (unique amongst the GUI elements of a LuaPlayer).
     */
    readonly index: GuiElementIndex
    /**
     * The GUI this element is a child of.
     */
    readonly gui: LuaGui
    /**
     * The direct parent of this element. `nil` if this is a top-level element.
     */
    readonly parent?: LuaGuiElement
    /**
     * The name of this element. `""` if no name was set.
     * @example
     * game.player.gui.top.greeting.name == "greeting"
     */
    name: string
    /**
     * The text displayed on this element. For frames, this is the "heading". For other elements, like buttons or labels, this is the content.
     *
     * Whilst this attribute may be used on all elements without producing an error, it doesn't make sense for tables and flows as they won't display it.
     */
    caption: LocalisedString
    /**
     * The style of this element. When read, this evaluates to a {@link LuaStyle}. For writing, it only accepts a string that specifies the textual identifier (prototype name) of the desired style.
     */
    set style(style: LuaStyle | string)
    get style(): LuaStyle
    /**
     * Sets whether this GUI element is visible or completely hidden, taking no space in the layout.
     */
    visible: boolean
    /**
     * Names of all the children of this element. These are the identifiers that can be used to access the child as an attribute of this element.
     */
    readonly children_names: string[]
    /**
     * Index into {@link LuaGameScript#players LuaGameScript::players} specifying the player who owns this element.
     */
    readonly player_index: PlayerIndex
    /**
     * The text to display when hovering over this element. Writing `""` will disable the tooltip, while writing `nil` will set it to `"nil"`.
     */
    tooltip: LocalisedString | nil
    /**
     * The element tooltip to display when hovering over this element, or `nil`.
     */
    elem_tooltip?: ElemID
    /**
     * The type of this GUI element.
     */
    readonly type: GuiElementType
    /**
     * The child-elements of this GUI element.
     */
    readonly children: LuaGuiElement[]
    /**
     * The location of this widget when stored in {@link LuaGui#screen LuaGui::screen}. `nil` if not set or not in {@link LuaGui#screen LuaGui::screen}.
     */
    get location(): GuiLocation | nil
    set location(value: GuiLocation | GuiLocationArray | nil)
    /**
     * How this element should interact with game controllers.
     */
    game_controller_interaction: defines.game_controller_interaction
    /**
     * Whether this GUI element is enabled. Disabled GUI elements don't trigger events when clicked.
     */
    enabled: boolean
    /**
     * Whether this GUI element is ignored by interaction. This makes clicks on this element 'go through' to the GUI element or even the game surface below it.
     */
    ignored_by_interaction: boolean
    /**
     * The anchor for this relative widget, if any. Setting `nil` clears the anchor.
     */
    anchor?: GuiAnchor
    /**
     * The tags associated with this LuaGuiElement.
     */
    tags: Tags
    /**
     * Whether this element will raise {@link OnGuiHoverEvent on_gui_hover} and {@link OnGuiLeaveEvent on_gui_leave}.
     */
    raise_hover_events: boolean
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaGuiElement"
  }
  export interface ButtonGuiElementMembers extends BaseGuiElement {
    /**
     * The type of this GUI element.
     */
    readonly type: "button"
    /**
     * Whether this button will automatically toggle when clicked.
     *
     * _Can only be used if this is button or sprite-button_
     */
    auto_toggle: boolean
    /**
     * Whether this button is currently toggled. When a button is toggled, it will use the `selected_graphical_set` and `selected_font_color` defined in its style.
     *
     * _Can only be used if this is button or sprite-button_
     */
    toggled: boolean
    /**
     * The mouse button filters for this button or sprite-button.
     *
     * _Can only be used if this is button or sprite-button_
     */
    get mouse_button_filter(): MouseButtonFlags
    set mouse_button_filter(value: MouseButtonFlagsWrite)
  }
  export type ButtonGuiElement = ButtonGuiElementMembers & GuiElementIndexer
  export interface SpriteButtonGuiElementMembers extends BaseGuiElement {
    /**
     * The type of this GUI element.
     */
    readonly type: "sprite-button"
    /**
     * The sprite to display on this sprite-button or sprite in the default state.
     *
     * _Can only be used if this is sprite-button or sprite_
     */
    sprite: SpritePath
    /**
     * The sprite to display on this sprite-button when it is hovered.
     *
     * _Can only be used if this is sprite-button_
     */
    hovered_sprite: SpritePath
    /**
     * The sprite to display on this sprite-button when it is clicked.
     *
     * _Can only be used if this is sprite-button_
     */
    clicked_sprite: SpritePath
    /**
     * The number to be shown in the bottom right corner of this sprite-button. Set this to `nil` to show nothing.
     *
     * _Can only be used if this is sprite-button_
     */
    number: double | nil
    /**
     * Related to the number to be shown in the bottom right corner of this sprite-button. When set to `true`, numbers that are non-zero and smaller than one are shown as a percentage rather than the value. For example, `0.5` will be shown as `50%` instead.
     *
     * _Can only be used if this is sprite-button_
     */
    show_percent_for_small_numbers: boolean
    /**
     * Whether this button will automatically toggle when clicked.
     *
     * _Can only be used if this is button or sprite-button_
     */
    auto_toggle: boolean
    /**
     * Whether this button is currently toggled. When a button is toggled, it will use the `selected_graphical_set` and `selected_font_color` defined in its style.
     *
     * _Can only be used if this is button or sprite-button_
     */
    toggled: boolean
    /**
     * The mouse button filters for this button or sprite-button.
     *
     * _Can only be used if this is button or sprite-button_
     */
    get mouse_button_filter(): MouseButtonFlags
    set mouse_button_filter(value: MouseButtonFlagsWrite)
  }
  export type SpriteButtonGuiElement = SpriteButtonGuiElementMembers & GuiElementIndexer
  export interface CheckboxGuiElementMembers extends BaseGuiElement {
    /**
     * The type of this GUI element.
     */
    readonly type: "checkbox"
    /**
     * Is this checkbox or radiobutton checked?
     *
     * _Can only be used if this is checkbox or radiobutton_
     */
    state: boolean
  }
  export type CheckboxGuiElement = CheckboxGuiElementMembers & GuiElementIndexer
  export interface FlowGuiElementMembers extends BaseGuiElement {
    /**
     * The type of this GUI element.
     */
    readonly type: "flow"
    /**
     * Direction of this element's layout.
     *
     * _Can only be used if this is frame, flow or line_
     */
    readonly direction: GuiDirection
    /**
     * The `frame` that is being moved when dragging this GUI element, if any. This element needs to be a child of the `drag_target` at some level.
     *
     * Only top-level elements in {@link LuaGui#screen LuaGui::screen} can be `drag_target`s.
     *
     * _Can only be used if this is flow, frame, label, table or empty-widget_
     * @example
     * -- This creates a frame that contains a dragging handle which can move the frame.
     * local frame = player.gui.screen.add{type="frame", direction="vertical"}
     * local dragger = frame.add{type="empty-widget", style="draggable_space"}
     * dragger.style.size = {128, 24}
     * dragger.drag_target = frame
     */
    drag_target?: FrameGuiElement
  }
  export type FlowGuiElement = FlowGuiElementMembers & GuiElementIndexer
  /**
   * @noSelf
   */
  export interface FrameGuiElementMembers extends BaseGuiElement {
    /**
     * The type of this GUI element.
     */
    readonly type: "frame"
    /**
     * Forces this frame to re-auto-center. Only works on frames stored directly in {@link LuaGui#screen LuaGui::screen}.
     *
     * ## Raised events
     * - {@link OnGuiLocationChangedEvent on_gui_location_changed} _future_tick_
     *
     * _Can only be used if this is frame_
     */
    force_auto_center(): void
    /**
     * Direction of this element's layout.
     *
     * _Can only be used if this is frame, flow or line_
     */
    readonly direction: GuiDirection
    /**
     * Whether this frame auto-centers on window resize when stored in {@link LuaGui#screen LuaGui::screen}.
     *
     * _Can only be used if this is frame_
     */
    auto_center: boolean
    /**
     * The `frame` that is being moved when dragging this GUI element, if any. This element needs to be a child of the `drag_target` at some level.
     *
     * Only top-level elements in {@link LuaGui#screen LuaGui::screen} can be `drag_target`s.
     *
     * _Can only be used if this is flow, frame, label, table or empty-widget_
     * @example
     * -- This creates a frame that contains a dragging handle which can move the frame.
     * local frame = player.gui.screen.add{type="frame", direction="vertical"}
     * local dragger = frame.add{type="empty-widget", style="draggable_space"}
     * dragger.style.size = {128, 24}
     * dragger.drag_target = frame
     */
    drag_target?: FrameGuiElement
  }
  export type FrameGuiElement = FrameGuiElementMembers & GuiElementIndexer
  export interface LabelGuiElementMembers extends BaseGuiElement {
    /**
     * The type of this GUI element.
     */
    readonly type: "label"
    /**
     * The `frame` that is being moved when dragging this GUI element, if any. This element needs to be a child of the `drag_target` at some level.
     *
     * Only top-level elements in {@link LuaGui#screen LuaGui::screen} can be `drag_target`s.
     *
     * _Can only be used if this is flow, frame, label, table or empty-widget_
     * @example
     * -- This creates a frame that contains a dragging handle which can move the frame.
     * local frame = player.gui.screen.add{type="frame", direction="vertical"}
     * local dragger = frame.add{type="empty-widget", style="draggable_space"}
     * dragger.style.size = {128, 24}
     * dragger.drag_target = frame
     */
    drag_target?: FrameGuiElement
  }
  export type LabelGuiElement = LabelGuiElementMembers & GuiElementIndexer
  export interface LineGuiElementMembers extends BaseGuiElement {
    /**
     * The type of this GUI element.
     */
    readonly type: "line"
    /**
     * Direction of this element's layout.
     *
     * _Can only be used if this is frame, flow or line_
     */
    readonly direction: GuiDirection
  }
  export type LineGuiElement = LineGuiElementMembers & GuiElementIndexer
  export interface ProgressBarGuiElementMembers extends BaseGuiElement {
    /**
     * The type of this GUI element.
     */
    readonly type: "progressbar"
    /**
     * How much this progress bar is filled. It is a value in the range `[0, 1]`.
     *
     * _Can only be used if this is progressbar_
     */
    value: double
  }
  export type ProgressBarGuiElement = ProgressBarGuiElementMembers & GuiElementIndexer
  export interface TableGuiElementMembers extends BaseGuiElement {
    /**
     * The type of this GUI element.
     */
    readonly type: "table"
    /**
     * Whether this table should draw vertical grid lines.
     *
     * _Can only be used if this is table_
     */
    draw_vertical_lines: boolean
    /**
     * Whether this table should draw horizontal grid lines.
     *
     * _Can only be used if this is table_
     */
    draw_horizontal_lines: boolean
    /**
     * Whether this table should draw a horizontal grid line below the first table row.
     *
     * _Can only be used if this is table_
     */
    draw_horizontal_line_after_headers: boolean
    /**
     * The number of columns in this table.
     *
     * _Can only be used if this is table_
     */
    readonly column_count: uint
    /**
     * Whether the content of this table should be vertically centered. Overrides {@link LuaStyle#column_alignments LuaStyle::column_alignments}. Defaults to `true`.
     *
     * _Can only be used if this is table_
     */
    vertical_centering: boolean
    /**
     * The `frame` that is being moved when dragging this GUI element, if any. This element needs to be a child of the `drag_target` at some level.
     *
     * Only top-level elements in {@link LuaGui#screen LuaGui::screen} can be `drag_target`s.
     *
     * _Can only be used if this is flow, frame, label, table or empty-widget_
     * @example
     * -- This creates a frame that contains a dragging handle which can move the frame.
     * local frame = player.gui.screen.add{type="frame", direction="vertical"}
     * local dragger = frame.add{type="empty-widget", style="draggable_space"}
     * dragger.style.size = {128, 24}
     * dragger.drag_target = frame
     */
    drag_target?: FrameGuiElement
  }
  export type TableGuiElement = TableGuiElementMembers & GuiElementIndexer
  /**
   * @noSelf
   */
  export interface TextFieldGuiElementMembers extends BaseGuiElement {
    /**
     * The type of this GUI element.
     */
    readonly type: "textfield"
    /**
     * Selects all the text in this textbox.
     *
     * _Can only be used if this is textfield or text-box_
     */
    select_all(): void
    /**
     * Selects a range of text in this textbox.
     *
     * _Can only be used if this is textfield or text-box_
     * @param start_index The index of the first character to select
     * @param end_index The index of the last character to select
     * @example
     * -- Select the characters "amp" from "example":
     * textbox.select(3, 5)
     * @example
     * -- Move the cursor to the start of the text box:
     * textbox.select(1, 0)
     */
    select(start_index: int, end_index: int): void
    /**
     * The text contained in this textfield or text-box.
     *
     * _Can only be used if this is textfield or text-box_
     */
    text: string
    /**
     * Whether this textfield is limited to only numeric characters.
     *
     * _Can only be used if this is textfield_
     */
    numeric: boolean
    /**
     * Whether this textfield (when in numeric mode) allows decimal numbers.
     *
     * _Can only be used if this is textfield_
     */
    allow_decimal: boolean
    /**
     * Whether this textfield (when in numeric mode) allows negative numbers.
     *
     * _Can only be used if this is textfield_
     */
    allow_negative: boolean
    /**
     * Whether this textfield displays as a password field, which renders all characters as `*`.
     *
     * _Can only be used if this is textfield_
     */
    is_password: boolean
    /**
     * Whether this textfield loses focus after {@link defines.events.on_gui_confirmed} is fired.
     *
     * _Can only be used if this is textfield_
     */
    lose_focus_on_confirm: boolean
    /**
     * Makes it so right-clicking on this textfield clears and focuses it.
     *
     * _Can only be used if this is textfield or text-box_
     */
    clear_and_focus_on_right_click: boolean
  }
  export type TextFieldGuiElement = TextFieldGuiElementMembers & GuiElementIndexer
  export interface RadioButtonGuiElementMembers extends BaseGuiElement {
    /**
     * The type of this GUI element.
     */
    readonly type: "radiobutton"
    /**
     * Is this checkbox or radiobutton checked?
     *
     * _Can only be used if this is checkbox or radiobutton_
     */
    state: boolean
  }
  export type RadioButtonGuiElement = RadioButtonGuiElementMembers & GuiElementIndexer
  export interface SpriteGuiElementMembers extends BaseGuiElement {
    /**
     * The type of this GUI element.
     */
    readonly type: "sprite"
    /**
     * The sprite to display on this sprite-button or sprite in the default state.
     *
     * _Can only be used if this is sprite-button or sprite_
     */
    sprite: SpritePath
    /**
     * Whether the sprite widget should resize according to the sprite in it. Defaults to `true`.
     *
     * _Can only be used if this is sprite_
     */
    resize_to_sprite: boolean
  }
  export type SpriteGuiElement = SpriteGuiElementMembers & GuiElementIndexer
  /**
   * @noSelf
   */
  export interface ScrollPaneGuiElementMembers extends BaseGuiElement {
    /**
     * The type of this GUI element.
     */
    readonly type: "scroll-pane"
    /**
     * Scrolls this scroll bar to the top.
     *
     * _Can only be used if this is scroll-pane or text-box_
     */
    scroll_to_top(): void
    /**
     * Scrolls this scroll bar to the bottom.
     *
     * _Can only be used if this is scroll-pane or text-box_
     */
    scroll_to_bottom(): void
    /**
     * Scrolls this scroll bar to the left.
     *
     * _Can only be used if this is scroll-pane or text-box_
     */
    scroll_to_left(): void
    /**
     * Scrolls this scroll bar to the right.
     *
     * _Can only be used if this is scroll-pane or text-box_
     */
    scroll_to_right(): void
    /**
     * Scrolls this scroll bar such that the specified GUI element is visible to the player.
     *
     * _Can only be used if this is scroll-pane_
     * @param element The element to scroll to.
     * @param scroll_mode Where the element should be positioned in the scroll-pane. Defaults to `"in-view"`.
     */
    scroll_to_element(element: LuaGuiElement, scroll_mode?: "in-view" | "top-third"): void
    /**
     * Policy of the horizontal scroll bar.
     *
     * _Can only be used if this is scroll-pane_
     */
    horizontal_scroll_policy: ScrollPolicy
    /**
     * Policy of the vertical scroll bar.
     *
     * _Can only be used if this is scroll-pane_
     */
    vertical_scroll_policy: ScrollPolicy
  }
  export type ScrollPaneGuiElement = ScrollPaneGuiElementMembers & GuiElementIndexer
  /**
   * @noSelf
   */
  export interface DropDownGuiElementMembers extends BaseGuiElement {
    /**
     * The type of this GUI element.
     */
    readonly type: "drop-down"
    /**
     * Removes the items in this dropdown or listbox.
     *
     * _Can only be used if this is drop-down or list-box_
     */
    clear_items(): void
    /**
     * Gets the item at the given index from this dropdown or listbox.
     *
     * _Can only be used if this is drop-down or list-box_
     * @param index The index to get
     */
    get_item(index: uint): LocalisedString
    /**
     * Sets the given string at the given index in this dropdown or listbox.
     *
     * _Can only be used if this is drop-down or list-box_
     * @param index The index whose text to replace.
     * @param string The text to set at the given index.
     */
    set_item(index: uint, string: LocalisedString): void
    /**
     * Inserts a string at the end or at the given index of this dropdown or listbox.
     *
     * _Can only be used if this is drop-down or list-box_
     * @param string The text to insert.
     * @param index The index at which to insert the item.
     */
    add_item(string: LocalisedString, index?: uint): void
    /**
     * Removes the item at the given index from this dropdown or listbox.
     *
     * _Can only be used if this is drop-down or list-box_
     * @param index The index
     */
    remove_item(index: uint): void
    /**
     * Closes the dropdown list if this is a dropdown and it is open.
     */
    close_dropdown(): void
    /**
     * The items in this dropdown or listbox.
     *
     * _Can only be used if this is drop-down or list-box_
     */
    items: LocalisedString[]
    /**
     * The selected index for this dropdown or listbox. Returns `0` if none is selected.
     *
     * _Can only be used if this is drop-down or list-box_
     */
    selected_index: uint
  }
  export type DropDownGuiElement = DropDownGuiElementMembers & GuiElementIndexer
  /**
   * @noSelf
   */
  export interface ListBoxGuiElementMembers extends BaseGuiElement {
    /**
     * The type of this GUI element.
     */
    readonly type: "list-box"
    /**
     * Removes the items in this dropdown or listbox.
     *
     * _Can only be used if this is drop-down or list-box_
     */
    clear_items(): void
    /**
     * Gets the item at the given index from this dropdown or listbox.
     *
     * _Can only be used if this is drop-down or list-box_
     * @param index The index to get
     */
    get_item(index: uint): LocalisedString
    /**
     * Sets the given string at the given index in this dropdown or listbox.
     *
     * _Can only be used if this is drop-down or list-box_
     * @param index The index whose text to replace.
     * @param string The text to set at the given index.
     */
    set_item(index: uint, string: LocalisedString): void
    /**
     * Inserts a string at the end or at the given index of this dropdown or listbox.
     *
     * _Can only be used if this is drop-down or list-box_
     * @param string The text to insert.
     * @param index The index at which to insert the item.
     */
    add_item(string: LocalisedString, index?: uint): void
    /**
     * Removes the item at the given index from this dropdown or listbox.
     *
     * _Can only be used if this is drop-down or list-box_
     * @param index The index
     */
    remove_item(index: uint): void
    /**
     * Scrolls the scroll bar such that the specified listbox item is visible to the player.
     *
     * _Can only be used if this is list-box_
     * @param index The item index to scroll to.
     * @param scroll_mode Where the item should be positioned in the list-box. Defaults to `"in-view"`.
     */
    scroll_to_item(index: int, scroll_mode?: "in-view" | "top-third"): void
    /**
     * The items in this dropdown or listbox.
     *
     * _Can only be used if this is drop-down or list-box_
     */
    items: LocalisedString[]
    /**
     * The selected index for this dropdown or listbox. Returns `0` if none is selected.
     *
     * _Can only be used if this is drop-down or list-box_
     */
    selected_index: uint
  }
  export type ListBoxGuiElement = ListBoxGuiElementMembers & GuiElementIndexer
  export interface CameraGuiElementMembers extends BaseGuiElement {
    /**
     * The type of this GUI element.
     */
    readonly type: "camera"
    /**
     * The position this camera or minimap is focused on, if any.
     *
     * _Can only be used if this is camera or minimap_
     */
    get position(): MapPosition
    set position(value: MapPosition | MapPositionArray)
    /**
     * The surface index this camera or minimap is using.
     *
     * _Can only be used if this is camera or minimap_
     */
    surface_index: SurfaceIndex
    /**
     * The zoom this camera or minimap is using. This value must be positive.
     *
     * _Can only be used if this is camera or minimap_
     */
    zoom: double
    /**
     * The entity associated with this entity-preview, camera, minimap, if any.
     *
     * _Can only be used if this is entity-preview, camera or minimap_
     */
    entity?: LuaEntity
  }
  export type CameraGuiElement = CameraGuiElementMembers & GuiElementIndexer
  export interface ChooseElemButtonGuiElementMembers extends BaseGuiElement {
    /**
     * The type of this GUI element.
     */
    readonly type: "choose-elem-button"
    /**
     * The elem type of this choose-elem-button.
     *
     * _Can only be used if this is choose-elem-button_
     */
    readonly elem_type: ChooseElemButtonType
    /**
     * The elem value of this choose-elem-button, if any.
     *
     * The `"signal"` type operates with {@link SignalID}, while all other types use strings.
     *
     * _Can only be used if this is choose-elem-button_
     */
    elem_value: (this["elem_type"] extends "signal" ? SignalID : string) | nil
    /**
     * The elem filters of this choose-elem-button, if any. The compatible type of filter is determined by `elem_type`.
     *
     * Writing to this field does not change or clear the currently selected element.
     *
     * _Can only be used if this is choose-elem-button_
     * @example
     * -- This will configure a choose-elem-button of type "entity" to only show items of type "furnace".
     * button.elem_filters = {{filter = "type", type = "furnace"}}
     * @example
     * -- Then, there are some types of filters that work on a specific kind of attribute. The following will configure a
     * --   choose-elem-button of type "entity" to only show entities that have their "hidden" flags set.
     * button.elem_filters = {{filter = "hidden"}}
     * @example
     * -- Lastly, these filters can be combined at will, taking care to specify how they should be combined (either "and" or "or").
     * --   The following will filter for any entities that are "furnaces" and that are not "hidden".
     * button.elem_filters = {{filter = "type", type = "furnace"}, {filter = "hidden", invert = true, mode = "and"}}
     */
    get elem_filters(): PrototypeFilter | nil
    set elem_filters(value: PrototypeFilterWrite | nil)
    /**
     * Whether this choose-elem-button can be changed by the player.
     *
     * _Can only be used if this is choose-elem-button_
     */
    locked: boolean
  }
  export type ChooseElemButtonGuiElement = ChooseElemButtonGuiElementMembers & GuiElementIndexer
  /**
   * @noSelf
   */
  export interface TextBoxGuiElementMembers extends BaseGuiElement {
    /**
     * The type of this GUI element.
     */
    readonly type: "text-box"
    /**
     * Scrolls this scroll bar to the top.
     *
     * _Can only be used if this is scroll-pane or text-box_
     */
    scroll_to_top(): void
    /**
     * Scrolls this scroll bar to the bottom.
     *
     * _Can only be used if this is scroll-pane or text-box_
     */
    scroll_to_bottom(): void
    /**
     * Scrolls this scroll bar to the left.
     *
     * _Can only be used if this is scroll-pane or text-box_
     */
    scroll_to_left(): void
    /**
     * Scrolls this scroll bar to the right.
     *
     * _Can only be used if this is scroll-pane or text-box_
     */
    scroll_to_right(): void
    /**
     * Selects all the text in this textbox.
     *
     * _Can only be used if this is textfield or text-box_
     */
    select_all(): void
    /**
     * Selects a range of text in this textbox.
     *
     * _Can only be used if this is textfield or text-box_
     * @param start_index The index of the first character to select
     * @param end_index The index of the last character to select
     * @example
     * -- Select the characters "amp" from "example":
     * textbox.select(3, 5)
     * @example
     * -- Move the cursor to the start of the text box:
     * textbox.select(1, 0)
     */
    select(start_index: int, end_index: int): void
    /**
     * The text contained in this textfield or text-box.
     *
     * _Can only be used if this is textfield or text-box_
     */
    text: string
    /**
     * Whether the contents of this text-box are selectable. Defaults to `true`.
     *
     * _Can only be used if this is text-box_
     */
    selectable: boolean
    /**
     * Whether this text-box will word-wrap automatically. Defaults to `false`.
     *
     * _Can only be used if this is text-box_
     */
    word_wrap: boolean
    /**
     * Whether this text-box is read-only. Defaults to `false`.
     *
     * _Can only be used if this is text-box_
     */
    read_only: boolean
    /**
     * Makes it so right-clicking on this textfield clears and focuses it.
     *
     * _Can only be used if this is textfield or text-box_
     */
    clear_and_focus_on_right_click: boolean
  }
  export type TextBoxGuiElement = TextBoxGuiElementMembers & GuiElementIndexer
  /**
   * @noSelf
   */
  export interface SliderGuiElementMembers extends BaseGuiElement {
    /**
     * The type of this GUI element.
     */
    readonly type: "slider"
    /**
     * Gets this sliders minimum value.
     */
    get_slider_minimum(): double
    /**
     * Gets this sliders maximum value.
     */
    get_slider_maximum(): double
    /**
     * Sets this sliders minimum and maximum values. The minimum can't be >= the maximum.
     */
    set_slider_minimum_maximum(minimum: double, maximum: double): void
    /**
     * Gets the minimum distance this slider can move.
     */
    get_slider_value_step(): double
    /**
     * Returns whether this slider only allows being moved to discrete positions.
     */
    get_slider_discrete_slider(): boolean
    /**
     * Returns whether this slider only allows discrete values.
     */
    get_slider_discrete_values(): boolean
    /**
     * Sets the minimum distance this slider can move. The minimum distance can't be > (max - min).
     */
    set_slider_value_step(value: double): void
    /**
     * Sets whether this slider only allows being moved to discrete positions.
     */
    set_slider_discrete_slider(value: boolean): void
    /**
     * Sets whether this slider only allows discrete values.
     */
    set_slider_discrete_values(value: boolean): void
    /**
     * The value of this slider element.
     *
     * _Can only be used if this is slider_
     */
    slider_value: double
  }
  export type SliderGuiElement = SliderGuiElementMembers & GuiElementIndexer
  export interface MinimapGuiElementMembers extends BaseGuiElement {
    /**
     * The type of this GUI element.
     */
    readonly type: "minimap"
    /**
     * The position this camera or minimap is focused on, if any.
     *
     * _Can only be used if this is camera or minimap_
     */
    get position(): MapPosition
    set position(value: MapPosition | MapPositionArray)
    /**
     * The surface index this camera or minimap is using.
     *
     * _Can only be used if this is camera or minimap_
     */
    surface_index: SurfaceIndex
    /**
     * The zoom this camera or minimap is using. This value must be positive.
     *
     * _Can only be used if this is camera or minimap_
     */
    zoom: double
    /**
     * The player index this minimap is using.
     *
     * _Can only be used if this is minimap_
     */
    minimap_player_index: uint
    /**
     * The force this minimap is using, if any.
     *
     * _Can only be used if this is minimap_
     */
    force?: string
    /**
     * The entity associated with this entity-preview, camera, minimap, if any.
     *
     * _Can only be used if this is entity-preview, camera or minimap_
     */
    entity?: LuaEntity
  }
  export type MinimapGuiElement = MinimapGuiElementMembers & GuiElementIndexer
  export interface EntityPreviewGuiElementMembers extends BaseGuiElement {
    /**
     * The type of this GUI element.
     */
    readonly type: "entity-preview"
    /**
     * The entity associated with this entity-preview, camera, minimap, if any.
     *
     * _Can only be used if this is entity-preview, camera or minimap_
     */
    entity?: LuaEntity
  }
  export type EntityPreviewGuiElement = EntityPreviewGuiElementMembers & GuiElementIndexer
  export interface EmptyWidgetGuiElementMembers extends BaseGuiElement {
    /**
     * The type of this GUI element.
     */
    readonly type: "empty-widget"
    /**
     * The `frame` that is being moved when dragging this GUI element, if any. This element needs to be a child of the `drag_target` at some level.
     *
     * Only top-level elements in {@link LuaGui#screen LuaGui::screen} can be `drag_target`s.
     *
     * _Can only be used if this is flow, frame, label, table or empty-widget_
     * @example
     * -- This creates a frame that contains a dragging handle which can move the frame.
     * local frame = player.gui.screen.add{type="frame", direction="vertical"}
     * local dragger = frame.add{type="empty-widget", style="draggable_space"}
     * dragger.style.size = {128, 24}
     * dragger.drag_target = frame
     */
    drag_target?: FrameGuiElement
  }
  export type EmptyWidgetGuiElement = EmptyWidgetGuiElementMembers & GuiElementIndexer
  /**
   * @noSelf
   */
  export interface TabbedPaneGuiElementMembers extends BaseGuiElement {
    /**
     * The type of this GUI element.
     */
    readonly type: "tabbed-pane"
    /**
     * Adds the given tab and content widgets to this tabbed pane as a new tab.
     *
     * _Can only be used if this is tabbed-pane_
     * @param tab The tab to add, must be a GUI element of type "tab".
     * @param content The content to show when this tab is selected. Can be any type of GUI element.
     */
    add_tab(tab: LuaGuiElement, content: LuaGuiElement): void
    /**
     * Removes the given tab and its associated content from this tabbed pane.
     *
     * Removing a tab does not destroy the tab or the tab contents. It just removes them from the view. When removing tabs, {@link LuaGuiElement#selected_tab_index LuaGuiElement::selected_tab_index} needs to be manually updated.
     *
     * _Can only be used if this is tabbed-pane_
     * @param tab The tab to remove or `nil` to remove all tabs.
     */
    remove_tab(tab: LuaGuiElement | nil): void
    /**
     * The selected tab index for this tabbed pane, if any.
     *
     * _Can only be used if this is tabbed-pane_
     */
    selected_tab_index?: uint
    /**
     * The tabs and contents being shown in this tabbed-pane.
     *
     * _Can only be used if this is tabbed-pane_
     */
    readonly tabs: TabAndContent[]
  }
  export type TabbedPaneGuiElement = TabbedPaneGuiElementMembers & GuiElementIndexer
  export interface TabGuiElementMembers extends BaseGuiElement {
    /**
     * The type of this GUI element.
     */
    readonly type: "tab"
    /**
     * The text to display after the normal tab text (designed to work with numbers)
     *
     * _Can only be used if this is tab_
     */
    badge_text: LocalisedString
  }
  export type TabGuiElement = TabGuiElementMembers & GuiElementIndexer
  export interface SwitchGuiElementMembers extends BaseGuiElement {
    /**
     * The type of this GUI element.
     */
    readonly type: "switch"
    /**
     * The switch state for this switch.
     *
     * If {@link LuaGuiElement#allow_none_state LuaGuiElement::allow_none_state} is false this can't be set to `"none"`.
     *
     * _Can only be used if this is switch_
     */
    switch_state: SwitchState
    /**
     * Whether the `"none"` state is allowed for this switch.
     *
     * This can't be set to false if the current `switch_state` is `"none"`.
     *
     * _Can only be used if this is switch_
     */
    allow_none_state: boolean
    /**
     * The text shown for the left switch label.
     *
     * _Can only be used if this is switch_
     */
    left_label_caption: LocalisedString
    /**
     * The tooltip shown on the left switch label.
     *
     * _Can only be used if this is switch_
     */
    left_label_tooltip: LocalisedString
    /**
     * The text shown for the right switch label.
     *
     * _Can only be used if this is switch_
     */
    right_label_caption: LocalisedString
    /**
     * The tooltip shown on the right switch label.
     *
     * _Can only be used if this is switch_
     */
    right_label_tooltip: LocalisedString
  }
  export type SwitchGuiElement = SwitchGuiElementMembers & GuiElementIndexer
  type GuiElementMembers =
    | ButtonGuiElementMembers
    | SpriteButtonGuiElementMembers
    | CheckboxGuiElementMembers
    | FlowGuiElementMembers
    | FrameGuiElementMembers
    | LabelGuiElementMembers
    | LineGuiElementMembers
    | ProgressBarGuiElementMembers
    | TableGuiElementMembers
    | TextFieldGuiElementMembers
    | RadioButtonGuiElementMembers
    | SpriteGuiElementMembers
    | ScrollPaneGuiElementMembers
    | DropDownGuiElementMembers
    | ListBoxGuiElementMembers
    | CameraGuiElementMembers
    | ChooseElemButtonGuiElementMembers
    | TextBoxGuiElementMembers
    | SliderGuiElementMembers
    | MinimapGuiElementMembers
    | EntityPreviewGuiElementMembers
    | EmptyWidgetGuiElementMembers
    | TabbedPaneGuiElementMembers
    | TabGuiElementMembers
    | SwitchGuiElementMembers
  /**
   * An element of a custom GUI. This type is used to represent {@link GuiElementType any kind} of a GUI element - labels, buttons and frames are all instances of this type. Just like {@link LuaEntity}, different kinds of elements support different attributes; attempting to access an attribute on an element that doesn't support it (for instance, trying to access the `column_count` of a `textfield`) will result in a runtime error.
   *
   * For information on all supported GUI elements, see {@link GuiElementType}.
   *
   * Each GUI element allows access to its children by having them as attributes. Thus, one can use the `parent.child` syntax to refer to children. Lua also supports the `parent["child"]` syntax to refer to the same element. This can be used in cases where the child has a name that isn't a valid Lua identifier.
   * @example
   * -- This will add a label called "greeting" to the top flow.
   * -- Immediately after, it will change its text to illustrate accessing child elements.
   * game.player.gui.top.add{type="label", name="greeting", caption="Hi"}
   * game.player.gui.top.greeting.caption = "Hello there!"
   * game.player.gui.top["greeting"].caption = "Actually, never mind, I don't like your face"
   * @example
   * -- This will add a tabbed-pane and 2 tabs with contents.
   * local tabbed_pane = game.player.gui.top.add{type="tabbed-pane"}
   * local tab1 = tabbed_pane.add{type="tab", caption="Tab 1"}
   * local tab2 = tabbed_pane.add{type="tab", caption="Tab 2"}
   * local label1 = tabbed_pane.add{type="label", caption="Label 1"}
   * local label2 = tabbed_pane.add{type="label", caption="Label 2"}
   * tabbed_pane.add_tab(tab1, label1)
   * tabbed_pane.add_tab(tab2, label2)
   */
  type LuaGuiElement = GuiElementMembers & GuiElementIndexer
  /**
   * Prototype of a heat buffer.
   * @noSelf
   */
  export interface LuaHeatBufferPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    readonly max_temperature: double
    readonly default_temperature: double
    readonly specific_heat: double
    readonly max_transfer: double
    readonly min_temperature_gradient: double
    readonly min_working_temperature: double
    readonly minimum_glow_temperature: double
    readonly connections: HeatConnection[]
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaHeatBufferPrototype"
  }
  /**
   * Prototype of a heat energy source.
   * @noSelf
   */
  export interface LuaHeatEnergySourcePrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * The emissions of this energy source in `pollution/Joule`. Multiplying it by energy consumption in `Watt` gives `pollution/second`.
     */
    readonly emissions: double
    readonly render_no_network_icon: boolean
    readonly render_no_power_icon: boolean
    readonly max_temperature: double
    readonly default_temperature: double
    readonly specific_heat: double
    readonly max_transfer: double
    readonly min_temperature_gradient: double
    readonly min_working_temperature: double
    readonly minimum_glow_temperature: double
    readonly connections: HeatConnection[]
    readonly heat_buffer_prototype: LuaHeatBufferPrototype
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaHeatEnergySourcePrototype"
  }
  /**
   * Control behavior for inserters.
   * @noSelf
   */
  export interface LuaInserterControlBehavior extends LuaGenericOnOffControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * `true` if the contents of the inserter hand should be sent to the circuit network
     */
    circuit_read_hand_contents: boolean
    /**
     * The circuit mode of operations for the inserter.
     */
    circuit_mode_of_operation: defines.control_behavior.inserter.circuit_mode_of_operation
    /**
     * The hand read mode for the inserter.
     */
    circuit_hand_read_mode: defines.control_behavior.inserter.hand_read_mode
    /**
     * If the stack size of the inserter is set through the circuit network or not.
     */
    circuit_set_stack_size: boolean
    /**
     * The signal used to set the stack size of the inserter.
     */
    circuit_stack_control_signal: SignalID
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaInserterControlBehavior"
  }
  /**
   * A storage of item stacks.
   * @noSelf
   */
  export interface LuaInventory extends ReadonlyArray<LuaItemStack> {
    /**
     * Make this inventory empty.
     */
    clear(): void
    /**
     * Can at least some items be inserted?
     * @param items Items that would be inserted.
     * @returns `true` if at least a part of the given items could be inserted into this inventory.
     */
    can_insert(items: ItemStackIdentification): boolean
    /**
     * Insert items into this inventory.
     * @param items Items to insert.
     * @returns Number of items actually inserted.
     */
    insert(items: ItemStackIdentification): uint
    /**
     * Remove items from this inventory.
     * @param items Items to remove.
     * @returns Number of items actually removed.
     */
    remove(items: ItemStackIdentification): uint
    /**
     * Get the number of all or some items in this inventory.
     * @param item Prototype name of the item to count. If not specified, count all items.
     */
    get_item_count(item?: string): uint
    /**
     * Does this inventory contain nothing?
     */
    is_empty(): boolean
    /**
     * Is every stack in this inventory full? Ignores stacks blocked by the current bar.
     */
    is_full(): boolean
    /**
     * Get counts of all items in this inventory.
     * @returns The counts, indexed by item names.
     */
    get_contents(): Record<string, uint>
    /**
     * Does this inventory support a bar? Bar is the draggable red thing, found for example on chests, that limits the portion of the inventory that may be manipulated by machines.
     *
     * "Supporting a bar" doesn't mean that the bar is set to some nontrivial value. Supporting a bar means the inventory supports having this limit at all. The character's inventory is an example of an inventory without a bar; the wooden chest's inventory is an example of one with a bar.
     */
    supports_bar(): boolean
    /**
     * Get the current bar. This is the index at which the red area starts.
     *
     * Only useable if this inventory supports having a bar.
     */
    get_bar(): uint
    /**
     * Set the current bar.
     *
     * Only useable if this inventory supports having a bar.
     * @param bar The new limit. Omitting this parameter will clear the limit.
     */
    set_bar(bar?: uint): void
    /**
     * If this inventory supports filters.
     */
    supports_filters(): boolean
    /**
     * If this inventory supports filters and has at least 1 filter set.
     */
    is_filtered(): boolean
    /**
     * If the given inventory slot filter can be set to the given filter.
     * @param index The item stack index
     * @param filter The item name of the filter
     */
    can_set_filter(index: uint, filter: string): boolean
    /**
     * Gets the filter for the given item stack index.
     * @param index The item stack index
     * @returns The current filter or `nil` if none.
     */
    get_filter(index: uint): string | nil
    /**
     * Sets the filter for the given item stack index.
     *
     * Some inventory slots don't allow some filters (gun ammo can't be filtered for non-ammo).
     * @param index The item stack index.
     * @param filter The new filter. `nil` erases any existing filter.
     * @returns If the filter was allowed to be set.
     */
    set_filter(index: uint, filter: string | nil): boolean
    /**
     * Finds the first LuaItemStack in the inventory that matches the given item name.
     * @param item The item name to find
     * @returns The first matching stack, or `nil` if none match.
     * @returns The stack index of the matching stack, if any is found.
     */
    find_item_stack(item: string): LuaMultiReturn<[LuaItemStack | nil, uint | nil]>
    /**
     * Finds the first empty stack. Filtered slots are excluded unless a filter item is given.
     * @param item If given, empty stacks that are filtered for this item will be included.
     * @returns The first empty stack, or `nil` if there aren't any empty stacks.
     * @returns The stack index of the matching stack, if any is found.
     */
    find_empty_stack(item?: string): LuaMultiReturn<[LuaItemStack | nil, uint | nil]>
    /**
     * Counts the number of empty stacks.
     * @param include_filtered If true, filtered slots will be included. Defaults to false.
     * @param include_bar If true, slots blocked by the current bar will be included. Defaults to true.
     */
    count_empty_stacks(include_filtered?: boolean, include_bar?: boolean): uint
    /**
     * Gets the number of the given item that can be inserted into this inventory.
     *
     * This is a "best guess" number; things like assembling machine filtered slots, module slots, items with durability, and items with mixed health will cause the result to be inaccurate. The main use for this is in checking how many of a basic item can fit into a basic inventory.
     *
     * This accounts for the 'bar' on the inventory.
     * @param item The item to check.
     */
    get_insertable_count(item: string): uint
    /**
     * Sorts and merges the items in this inventory.
     */
    sort_and_merge(): void
    /**
     * Resizes the inventory.
     *
     * Items in slots beyond the new capacity are deleted.
     *
     * Only inventories created by {@link LuaGameScript#create_inventory LuaGameScript::create_inventory} can be resized.
     *
     * ## Raised events
     * - {@link OnPreScriptInventoryResizedEvent on_pre_script_inventory_resized} _instantly_
     * - {@link OnScriptInventoryResizedEvent on_script_inventory_resized} _instantly_
     * @param size New size of a inventory
     */
    resize(size: uint16): void
    /**
     * Destroys this inventory.
     *
     * Only inventories created by {@link LuaGameScript#create_inventory LuaGameScript::create_inventory} can be destroyed this way.
     */
    destroy(): void
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Get the number of slots in this inventory.
     * @example
     * -- Will print the number of slots in the player's main inventory.
     * game.player.print(#game.player.get_main_inventory())
     */
    readonly length: uint
    /**
     * The indexing operator.
     * @example
     * -- Will get the first item in the player's inventory.
     * game.player.get_main_inventory()[1]
     */
    readonly [index: number]: LuaItemStack
    /**
     * The inventory index this inventory uses, if any.
     */
    readonly index?: defines.inventory
    /**
     * The entity that owns this inventory, if any.
     */
    readonly entity_owner?: LuaEntity
    /**
     * The player that owns this inventory, if any.
     */
    readonly player_owner?: LuaPlayer
    /**
     * The equipment that owns this inventory, if any.
     */
    readonly equipment_owner?: LuaEquipment
    /**
     * The mod that owns this inventory, if any.
     */
    readonly mod_owner?: string
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaInventory"
  }
  /**
   * Prototype of an item. For example, an item prototype can be obtained from {@link LuaGameScript#item_prototypes LuaGameScript::item_prototypes} by its name: `game.item_prototypes["iron-plate"]`.
   * @noSelf
   */
  export interface LuaItemPrototype {
    /**
     * Does this prototype have a flag enabled?
     * @param flag The flag to check.
     */
    has_flag(flag: ItemPrototypeFlag): boolean
    /**
     * The type of this ammo prototype.
     *
     * _Can only be used if this is AmmoItem_
     * @param ammo_source_type Defaults to `"default"`.
     */
    get_ammo_type(ammo_source_type?: "default" | "player" | "turret" | "vehicle"): AmmoType | nil
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Type of this prototype. E.g. `"gun"` or `"mining-tool"`.
     */
    readonly type: ItemType
    /**
     * Name of this prototype.
     */
    readonly name: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    /**
     * Prototype of the entity that will be created by placing this item, if any.
     */
    readonly place_result?: LuaEntityPrototype
    /**
     * Prototype of the equipment that will be created by placing this item in an equipment grid, if any.
     */
    readonly place_as_equipment_result?: LuaEquipmentPrototype
    /**
     * The place-as-tile result if one is defined, if any.
     */
    readonly place_as_tile_result?: PlaceAsTileResult
    /**
     * Is this item allowed to stack at all?
     */
    readonly stackable: boolean
    /**
     * The default request value.
     */
    readonly default_request_amount: uint
    /**
     * Maximum stack size of the item specified by this prototype.
     */
    readonly stack_size: uint
    /**
     * The number of items needed to connect two entities with this as wire.
     */
    readonly wire_count: uint
    /**
     * The fuel category of this item prototype, if any.
     */
    readonly fuel_category?: string
    /**
     * The result of burning this item as fuel, if any.
     */
    readonly burnt_result?: LuaItemPrototype
    /**
     * Fuel value when burned.
     */
    readonly fuel_value: float
    /**
     * The acceleration multiplier when this item is used as fuel in a vehicle.
     */
    readonly fuel_acceleration_multiplier: double
    /**
     * The fuel top speed multiplier when this item is used as fuel in a vehicle.
     */
    readonly fuel_top_speed_multiplier: double
    /**
     * The emissions multiplier if this is used as fuel.
     */
    readonly fuel_emissions_multiplier: double
    /**
     * The subgroup this prototype belongs to.
     */
    readonly subgroup: LuaGroup
    /**
     * The group this prototype belongs to.
     */
    readonly group: LuaGroup
    /**
     * The flags for this item prototype.
     */
    readonly flags: ItemPrototypeFlags
    /**
     * The results of launching this item in a rocket.
     */
    readonly rocket_launch_products: Product[]
    /**
     * If this item can be mod-opened.
     */
    readonly can_be_mod_opened: boolean
    /**
     * Size of full magazine.
     *
     * _Can only be used if this is AmmoItem_
     */
    readonly magazine_size?: float
    /**
     * Amount of extra time (in ticks) it takes to reload the weapon after depleting the magazine.
     *
     * _Can only be used if this is AmmoItem_
     */
    readonly reload_time?: float
    /**
     * The prototype of this armor's equipment grid, if any.
     *
     * _Can only be used if this is Armor_
     */
    readonly equipment_grid?: LuaEquipmentGridPrototype
    /**
     * Resistances of this armor item, if any, indexed by damage type name.
     *
     * _Can only be used if this is Armor_
     */
    readonly resistances?: Record<string, Resistance>
    /**
     * The inventory size bonus for this armor prototype.
     *
     * _Can only be used if this is ArmorPrototype_
     */
    readonly inventory_size_bonus?: uint
    /**
     * The capsule action for this capsule item prototype.
     *
     * _Can only be used if this is Capsule_
     */
    readonly capsule_action?: CapsuleAction
    /**
     * The gun attack parameters.
     *
     * _Can only be used if this is Gun_
     */
    readonly attack_parameters?: AttackParameters
    /**
     * The main inventory size for item-with-inventory-prototype.
     *
     * _Can only be used if this is ItemWithInventoryPrototype_
     */
    readonly inventory_size?: uint
    /**
     * _Can only be used if this is ItemWithInventory_
     */
    readonly item_filters?: Record<string, LuaItemPrototype>
    /**
     * _Can only be used if this is ItemWithInventory_
     */
    readonly item_group_filters?: Record<string, LuaGroup>
    /**
     * _Can only be used if this is ItemWithInventory_
     */
    readonly item_subgroup_filters?: Record<string, LuaGroup>
    /**
     * The filter mode used by this item with inventory.
     *
     * _Can only be used if this is ItemWithInventory_
     */
    readonly filter_mode?: "none" | "whitelist" | "blacklist"
    /**
     * The insertion priority mode used by this item with inventory.
     *
     * _Can only be used if this is ItemWithInventory_
     */
    readonly insertion_priority_mode?: "default" | "never" | "always" | "when-manually-filtered"
    /**
     * The localised string used when the player attempts to put items into this item with inventory that aren't allowed.
     *
     * _Can only be used if this is ItemWithInventory_
     */
    readonly localised_filter_message?: LocalisedString
    /**
     * If this item with inventory extends the inventory it resides in by default.
     *
     * _Can only be used if this is ItemWithInventory_
     */
    readonly extend_inventory_by_default?: boolean
    /**
     * The default label color used for this item with label, if any.
     *
     * _Can only be used if this is ItemWithLabel_
     */
    readonly default_label_color?: Color
    /**
     * If true, and this item with label has a label it is drawn in place of the normal number when held in the cursor.
     *
     * _Can only be used if this is ItemWithLabel_
     */
    readonly draw_label_for_cursor_render?: boolean
    /**
     * The repairing speed if this is a repairing tool.
     *
     * _Can only be used if this is RepairTool_
     */
    readonly speed?: float
    /**
     * Effects of this module.
     *
     * _Can only be used if this is ModuleItem_
     */
    readonly module_effects?: ModuleEffects
    /**
     * The name of a {@link LuaModuleCategoryPrototype}. Used when upgrading modules: Ctrl + click modules into an entity and it will replace lower tier modules of the same category with higher tier modules.
     *
     * _Can only be used if this is ModuleItem_
     */
    readonly category?: string
    /**
     * Tier of the module inside its category. Used when upgrading modules: Ctrl + click modules into an entity and it will replace lower tier modules with higher tier modules if they have the same category.
     *
     * _Can only be used if this is ModuleItem_
     */
    readonly tier?: uint
    /**
     * An array of recipe names this module is allowed to work with. Empty when all recipes are allowed.
     *
     * _Can only be used if this is ModuleItem_
     */
    readonly limitations?: string[]
    /**
     * The limitation message key used when the player attempts to use this modules in some place it's not allowed.
     *
     * _Can only be used if this is ModuleItem_
     */
    readonly limitation_message_key?: string
    /**
     * The straight rail prototype used for this rail planner prototype.
     *
     * _Can only be used if this is RailPlanner_
     */
    readonly straight_rail?: LuaEntityPrototype
    /**
     * The curved rail prototype used for this rail planner prototype.
     *
     * _Can only be used if this is RailPlanner_
     */
    readonly curved_rail?: LuaEntityPrototype
    /**
     * The repair result of this repair tool prototype.
     *
     * _Can only be used if this is RepairTool_
     */
    readonly repair_result?: TriggerItem[]
    /**
     * The color used when doing normal selection with this selection tool prototype.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly selection_border_color?: Color
    /**
     * The color used when doing alt selection with this selection tool prototype.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly alt_selection_border_color?: Color
    /**
     * The color used when doing reverse selection with this selection tool prototype.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly reverse_selection_border_color?: Color
    /**
     * The color used when doing alt reverse selection with this selection tool prototype.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly alt_reverse_selection_border_color?: Color
    /**
     * Flags that affect which entities will be selected.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly selection_mode_flags?: SelectionModeFlags
    /**
     * Flags that affect which entities will be selected during alternate selection.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly alt_selection_mode_flags?: SelectionModeFlags
    /**
     * Flags that affect which entities will be selected during reverse selection.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly reverse_selection_mode_flags?: SelectionModeFlags
    /**
     * Flags that affect which entities will be selected during alt reverse selection.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly alt_reverse_selection_mode_flags?: SelectionModeFlags
    /**
     * _Can only be used if this is SelectionTool_
     */
    readonly selection_cursor_box_type?: CursorBoxRenderType
    /**
     * _Can only be used if this is SelectionTool_
     */
    readonly alt_selection_cursor_box_type?: CursorBoxRenderType
    /**
     * _Can only be used if this is SelectionTool_
     */
    readonly reverse_selection_cursor_box_type?: CursorBoxRenderType
    /**
     * _Can only be used if this is SelectionTool_
     */
    readonly alt_reverse_selection_cursor_box_type?: CursorBoxRenderType
    /**
     * If tiles area always included when doing selection with this selection tool prototype.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly always_include_tiles?: boolean
    /**
     * The entity filter mode used by this selection tool.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly entity_filter_mode?: PrototypeFilterMode
    /**
     * The alt entity filter mode used by this selection tool.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly alt_entity_filter_mode?: PrototypeFilterMode
    /**
     * The reverse entity filter mode used by this selection tool.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly reverse_alt_entity_filter_mode?: PrototypeFilterMode
    /**
     * The alt reverse entity filter mode used by this selection tool.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly alt_reverse_alt_entity_filter_mode?: PrototypeFilterMode
    /**
     * The tile filter mode used by this selection tool.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly tile_filter_mode?: PrototypeFilterMode
    /**
     * The alt tile filter mode used by this selection tool.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly alt_tile_filter_mode?: PrototypeFilterMode
    /**
     * The reverse tile filter mode used by this selection tool.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly reverse_tile_filter_mode?: PrototypeFilterMode
    /**
     * The alt reverse tile filter mode used by this selection tool.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly alt_reverse_tile_filter_mode?: PrototypeFilterMode
    /**
     * The entity filters used by this selection tool indexed by entity name.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly entity_filters?: Record<string, LuaEntityPrototype>
    /**
     * The alt entity filters used by this selection tool indexed by entity name.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly alt_entity_filters?: Record<string, LuaEntityPrototype>
    /**
     * The reverse entity filters used by this selection tool indexed by entity name.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly reverse_entity_filters?: Record<string, LuaEntityPrototype>
    /**
     * The alt reverse entity filters used by this selection tool indexed by entity name.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly alt_reverse_entity_filters?: Record<string, LuaEntityPrototype>
    /**
     * The entity type filters used by this selection tool indexed by entity type.
     *
     * The boolean value is meaningless and is used to allow easy lookup if a type exists in the dictionary.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly entity_type_filters?: Record<string, true>
    /**
     * The alt entity type filters used by this selection tool indexed by entity type.
     *
     * The boolean value is meaningless and is used to allow easy lookup if a type exists in the dictionary.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly alt_entity_type_filters?: Record<string, true>
    /**
     * The reverse entity type filters used by this selection tool indexed by entity type.
     *
     * The boolean value is meaningless and is used to allow easy lookup if a type exists in the dictionary.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly reverse_entity_type_filters?: Record<string, true>
    /**
     * The alt reverse entity type filters used by this selection tool indexed by entity type.
     *
     * The boolean value is meaningless and is used to allow easy lookup if a type exists in the dictionary.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly alt_reverse_entity_type_filters?: Record<string, true>
    /**
     * The tile filters used by this selection tool indexed by tile name.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly tile_filters?: Record<string, LuaTilePrototype>
    /**
     * The alt tile filters used by this selection tool indexed by tile name.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly alt_tile_filters?: Record<string, LuaTilePrototype>
    /**
     * The reverse tile filters used by this selection tool indexed by tile name.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly reverse_tile_filters?: Record<string, LuaTilePrototype>
    /**
     * The alt reverse tile filters used by this selection tool indexed by tile name.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly alt_reverse_tile_filters?: Record<string, LuaTilePrototype>
    /**
     * The number of entity filters this deconstruction item has.
     *
     * _Can only be used if this is DeconstructionItem_
     */
    readonly entity_filter_slots?: uint
    /**
     * The number of tile filters this deconstruction item has.
     *
     * _Can only be used if this is DeconstructionItem_
     */
    readonly tile_filter_slots?: uint
    /**
     * The durability message key used when displaying the durability of this tool.
     *
     * _Can only be used if this is ToolItem_
     */
    readonly durability_description_key?: string
    /**
     * The durability of this tool item.
     *
     * _Can only be used if this is ToolItem_
     */
    readonly durability?: double
    /**
     * If this tool item has infinite durability.
     *
     * _Can only be used if this is ToolItem_
     */
    readonly infinite?: boolean
    /**
     * How many filters an upgrade item has.
     *
     * _Can only be used if this is UpgradeItem_
     */
    readonly mapper_count?: uint
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaItemPrototype"
  }
  /**
   * @noSelf
   */
  export interface BaseItemPrototype {
    /**
     * Does this prototype have a flag enabled?
     * @param flag The flag to check.
     */
    has_flag(flag: ItemPrototypeFlag): boolean
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Type of this prototype. E.g. `"gun"` or `"mining-tool"`.
     */
    readonly type: ItemType
    /**
     * Name of this prototype.
     */
    readonly name: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    /**
     * Prototype of the entity that will be created by placing this item, if any.
     */
    readonly place_result?: LuaEntityPrototype
    /**
     * Prototype of the equipment that will be created by placing this item in an equipment grid, if any.
     */
    readonly place_as_equipment_result?: LuaEquipmentPrototype
    /**
     * The place-as-tile result if one is defined, if any.
     */
    readonly place_as_tile_result?: PlaceAsTileResult
    /**
     * Is this item allowed to stack at all?
     */
    readonly stackable: boolean
    /**
     * The default request value.
     */
    readonly default_request_amount: uint
    /**
     * Maximum stack size of the item specified by this prototype.
     */
    readonly stack_size: uint
    /**
     * The number of items needed to connect two entities with this as wire.
     */
    readonly wire_count: uint
    /**
     * The fuel category of this item prototype, if any.
     */
    readonly fuel_category?: string
    /**
     * The result of burning this item as fuel, if any.
     */
    readonly burnt_result?: LuaItemPrototype
    /**
     * Fuel value when burned.
     */
    readonly fuel_value: float
    /**
     * The acceleration multiplier when this item is used as fuel in a vehicle.
     */
    readonly fuel_acceleration_multiplier: double
    /**
     * The fuel top speed multiplier when this item is used as fuel in a vehicle.
     */
    readonly fuel_top_speed_multiplier: double
    /**
     * The emissions multiplier if this is used as fuel.
     */
    readonly fuel_emissions_multiplier: double
    /**
     * The subgroup this prototype belongs to.
     */
    readonly subgroup: LuaGroup
    /**
     * The group this prototype belongs to.
     */
    readonly group: LuaGroup
    /**
     * The flags for this item prototype.
     */
    readonly flags: ItemPrototypeFlags
    /**
     * The results of launching this item in a rocket.
     */
    readonly rocket_launch_products: Product[]
    /**
     * If this item can be mod-opened.
     */
    readonly can_be_mod_opened: boolean
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaItemPrototype"
  }
  /**
   * @noSelf
   */
  export interface AmmoItemPrototype extends BaseItemPrototype {
    /**
     * The type of this ammo prototype.
     *
     * _Can only be used if this is AmmoItem_
     * @param ammo_source_type Defaults to `"default"`.
     */
    get_ammo_type(ammo_source_type?: "default" | "player" | "turret" | "vehicle"): AmmoType | nil
    /**
     * Size of full magazine.
     *
     * _Can only be used if this is AmmoItem_
     */
    readonly magazine_size?: float
    /**
     * Amount of extra time (in ticks) it takes to reload the weapon after depleting the magazine.
     *
     * _Can only be used if this is AmmoItem_
     */
    readonly reload_time?: float
  }
  export interface ArmorItemPrototype extends BaseItemPrototype {
    /**
     * The prototype of this armor's equipment grid, if any.
     *
     * _Can only be used if this is Armor_
     */
    readonly equipment_grid?: LuaEquipmentGridPrototype
    /**
     * Resistances of this armor item, if any, indexed by damage type name.
     *
     * _Can only be used if this is Armor_
     */
    readonly resistances?: Record<string, Resistance>
    /**
     * The inventory size bonus for this armor prototype.
     *
     * _Can only be used if this is ArmorPrototype_
     */
    readonly inventory_size_bonus?: uint
  }
  export interface CapsuleItemPrototype extends BaseItemPrototype {
    /**
     * The capsule action for this capsule item prototype.
     *
     * _Can only be used if this is Capsule_
     */
    readonly capsule_action?: CapsuleAction
  }
  export interface GunItemPrototype extends BaseItemPrototype {
    /**
     * The gun attack parameters.
     *
     * _Can only be used if this is Gun_
     */
    readonly attack_parameters?: AttackParameters
  }
  export interface ItemWithInventoryItemPrototype extends BaseItemPrototype {
    /**
     * The main inventory size for item-with-inventory-prototype.
     *
     * _Can only be used if this is ItemWithInventoryPrototype_
     */
    readonly inventory_size?: uint
    /**
     * _Can only be used if this is ItemWithInventory_
     */
    readonly item_filters?: Record<string, LuaItemPrototype>
    /**
     * _Can only be used if this is ItemWithInventory_
     */
    readonly item_group_filters?: Record<string, LuaGroup>
    /**
     * _Can only be used if this is ItemWithInventory_
     */
    readonly item_subgroup_filters?: Record<string, LuaGroup>
    /**
     * The filter mode used by this item with inventory.
     *
     * _Can only be used if this is ItemWithInventory_
     */
    readonly filter_mode?: "none" | "whitelist" | "blacklist"
    /**
     * The insertion priority mode used by this item with inventory.
     *
     * _Can only be used if this is ItemWithInventory_
     */
    readonly insertion_priority_mode?: "default" | "never" | "always" | "when-manually-filtered"
    /**
     * The localised string used when the player attempts to put items into this item with inventory that aren't allowed.
     *
     * _Can only be used if this is ItemWithInventory_
     */
    readonly localised_filter_message?: LocalisedString
    /**
     * If this item with inventory extends the inventory it resides in by default.
     *
     * _Can only be used if this is ItemWithInventory_
     */
    readonly extend_inventory_by_default?: boolean
  }
  export interface ItemWithLabelItemPrototype extends BaseItemPrototype {
    /**
     * The default label color used for this item with label, if any.
     *
     * _Can only be used if this is ItemWithLabel_
     */
    readonly default_label_color?: Color
    /**
     * If true, and this item with label has a label it is drawn in place of the normal number when held in the cursor.
     *
     * _Can only be used if this is ItemWithLabel_
     */
    readonly draw_label_for_cursor_render?: boolean
  }
  export interface RepairToolItemPrototype extends BaseItemPrototype {
    /**
     * The repairing speed if this is a repairing tool.
     *
     * _Can only be used if this is RepairTool_
     */
    readonly speed?: float
    /**
     * The repair result of this repair tool prototype.
     *
     * _Can only be used if this is RepairTool_
     */
    readonly repair_result?: TriggerItem[]
  }
  export interface ModuleItemPrototype extends BaseItemPrototype {
    /**
     * Effects of this module.
     *
     * _Can only be used if this is ModuleItem_
     */
    readonly module_effects?: ModuleEffects
    /**
     * The name of a {@link LuaModuleCategoryPrototype}. Used when upgrading modules: Ctrl + click modules into an entity and it will replace lower tier modules of the same category with higher tier modules.
     *
     * _Can only be used if this is ModuleItem_
     */
    readonly category?: string
    /**
     * Tier of the module inside its category. Used when upgrading modules: Ctrl + click modules into an entity and it will replace lower tier modules with higher tier modules if they have the same category.
     *
     * _Can only be used if this is ModuleItem_
     */
    readonly tier?: uint
    /**
     * An array of recipe names this module is allowed to work with. Empty when all recipes are allowed.
     *
     * _Can only be used if this is ModuleItem_
     */
    readonly limitations?: string[]
    /**
     * The limitation message key used when the player attempts to use this modules in some place it's not allowed.
     *
     * _Can only be used if this is ModuleItem_
     */
    readonly limitation_message_key?: string
  }
  export interface RailPlannerItemPrototype extends BaseItemPrototype {
    /**
     * The straight rail prototype used for this rail planner prototype.
     *
     * _Can only be used if this is RailPlanner_
     */
    readonly straight_rail?: LuaEntityPrototype
    /**
     * The curved rail prototype used for this rail planner prototype.
     *
     * _Can only be used if this is RailPlanner_
     */
    readonly curved_rail?: LuaEntityPrototype
  }
  export interface SelectionToolItemPrototype extends BaseItemPrototype {
    /**
     * The color used when doing normal selection with this selection tool prototype.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly selection_border_color?: Color
    /**
     * The color used when doing alt selection with this selection tool prototype.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly alt_selection_border_color?: Color
    /**
     * The color used when doing reverse selection with this selection tool prototype.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly reverse_selection_border_color?: Color
    /**
     * The color used when doing alt reverse selection with this selection tool prototype.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly alt_reverse_selection_border_color?: Color
    /**
     * Flags that affect which entities will be selected.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly selection_mode_flags?: SelectionModeFlags
    /**
     * Flags that affect which entities will be selected during alternate selection.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly alt_selection_mode_flags?: SelectionModeFlags
    /**
     * Flags that affect which entities will be selected during reverse selection.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly reverse_selection_mode_flags?: SelectionModeFlags
    /**
     * Flags that affect which entities will be selected during alt reverse selection.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly alt_reverse_selection_mode_flags?: SelectionModeFlags
    /**
     * _Can only be used if this is SelectionTool_
     */
    readonly selection_cursor_box_type?: CursorBoxRenderType
    /**
     * _Can only be used if this is SelectionTool_
     */
    readonly alt_selection_cursor_box_type?: CursorBoxRenderType
    /**
     * _Can only be used if this is SelectionTool_
     */
    readonly reverse_selection_cursor_box_type?: CursorBoxRenderType
    /**
     * _Can only be used if this is SelectionTool_
     */
    readonly alt_reverse_selection_cursor_box_type?: CursorBoxRenderType
    /**
     * If tiles area always included when doing selection with this selection tool prototype.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly always_include_tiles?: boolean
    /**
     * The entity filter mode used by this selection tool.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly entity_filter_mode?: PrototypeFilterMode
    /**
     * The alt entity filter mode used by this selection tool.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly alt_entity_filter_mode?: PrototypeFilterMode
    /**
     * The reverse entity filter mode used by this selection tool.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly reverse_alt_entity_filter_mode?: PrototypeFilterMode
    /**
     * The alt reverse entity filter mode used by this selection tool.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly alt_reverse_alt_entity_filter_mode?: PrototypeFilterMode
    /**
     * The tile filter mode used by this selection tool.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly tile_filter_mode?: PrototypeFilterMode
    /**
     * The alt tile filter mode used by this selection tool.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly alt_tile_filter_mode?: PrototypeFilterMode
    /**
     * The reverse tile filter mode used by this selection tool.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly reverse_tile_filter_mode?: PrototypeFilterMode
    /**
     * The alt reverse tile filter mode used by this selection tool.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly alt_reverse_tile_filter_mode?: PrototypeFilterMode
    /**
     * The entity filters used by this selection tool indexed by entity name.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly entity_filters?: Record<string, LuaEntityPrototype>
    /**
     * The alt entity filters used by this selection tool indexed by entity name.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly alt_entity_filters?: Record<string, LuaEntityPrototype>
    /**
     * The reverse entity filters used by this selection tool indexed by entity name.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly reverse_entity_filters?: Record<string, LuaEntityPrototype>
    /**
     * The alt reverse entity filters used by this selection tool indexed by entity name.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly alt_reverse_entity_filters?: Record<string, LuaEntityPrototype>
    /**
     * The entity type filters used by this selection tool indexed by entity type.
     *
     * The boolean value is meaningless and is used to allow easy lookup if a type exists in the dictionary.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly entity_type_filters?: Record<string, true>
    /**
     * The alt entity type filters used by this selection tool indexed by entity type.
     *
     * The boolean value is meaningless and is used to allow easy lookup if a type exists in the dictionary.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly alt_entity_type_filters?: Record<string, true>
    /**
     * The reverse entity type filters used by this selection tool indexed by entity type.
     *
     * The boolean value is meaningless and is used to allow easy lookup if a type exists in the dictionary.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly reverse_entity_type_filters?: Record<string, true>
    /**
     * The alt reverse entity type filters used by this selection tool indexed by entity type.
     *
     * The boolean value is meaningless and is used to allow easy lookup if a type exists in the dictionary.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly alt_reverse_entity_type_filters?: Record<string, true>
    /**
     * The tile filters used by this selection tool indexed by tile name.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly tile_filters?: Record<string, LuaTilePrototype>
    /**
     * The alt tile filters used by this selection tool indexed by tile name.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly alt_tile_filters?: Record<string, LuaTilePrototype>
    /**
     * The reverse tile filters used by this selection tool indexed by tile name.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly reverse_tile_filters?: Record<string, LuaTilePrototype>
    /**
     * The alt reverse tile filters used by this selection tool indexed by tile name.
     *
     * _Can only be used if this is SelectionTool_
     */
    readonly alt_reverse_tile_filters?: Record<string, LuaTilePrototype>
  }
  export interface DeconstructionItemPrototype extends BaseItemPrototype {
    /**
     * The number of entity filters this deconstruction item has.
     *
     * _Can only be used if this is DeconstructionItem_
     */
    readonly entity_filter_slots?: uint
    /**
     * The number of tile filters this deconstruction item has.
     *
     * _Can only be used if this is DeconstructionItem_
     */
    readonly tile_filter_slots?: uint
  }
  export interface ToolItemPrototype extends BaseItemPrototype {
    /**
     * The durability message key used when displaying the durability of this tool.
     *
     * _Can only be used if this is ToolItem_
     */
    readonly durability_description_key?: string
    /**
     * The durability of this tool item.
     *
     * _Can only be used if this is ToolItem_
     */
    readonly durability?: double
    /**
     * If this tool item has infinite durability.
     *
     * _Can only be used if this is ToolItem_
     */
    readonly infinite?: boolean
  }
  export interface UpgradeItemPrototype extends BaseItemPrototype {
    /**
     * How many filters an upgrade item has.
     *
     * _Can only be used if this is UpgradeItem_
     */
    readonly mapper_count?: uint
  }
  /**
   * A reference to an item and count owned by some external entity.
   *
   * In most instances this is a simple reference as in: it points at a specific slot in an inventory and not the item in the slot.
   *
   * In the instance this references an item on a {@link LuaTransportLine} the reference is only guaranteed to stay valid (and refer to the same item) as long as nothing changes the transport line.
   * @noSelf
   */
  export interface LuaItemStack {
    /**
     * Is this blueprint item setup? I.e. is it a non-empty blueprint?
     */
    is_blueprint_setup(): boolean
    /**
     * The entities in this blueprint.
     *
     * _Can only be used if this is BlueprintItem_
     */
    get_blueprint_entities(): BlueprintEntity[] | nil
    /**
     * Set new entities to be a part of this blueprint.
     *
     * _Can only be used if this is BlueprintItem_
     * @param entities The new blueprint entities.
     */
    set_blueprint_entities(entities: readonly BlueprintEntityWrite[]): void
    /**
     * Add ammo to this ammo item.
     *
     * _Can only be used if this is AmmoItem_
     * @param amount Amount of ammo to add.
     */
    add_ammo(amount: float): void
    /**
     * Remove ammo from this ammo item.
     *
     * _Can only be used if this is AmmoItem_
     * @param amount Amount of ammo to remove.
     */
    drain_ammo(amount: float): void
    /**
     * Add durability to this tool item.
     *
     * _Can only be used if this is ToolItem_
     * @param amount Amount of durability to add.
     */
    add_durability(amount: double): void
    /**
     * Remove durability from this tool item.
     *
     * _Can only be used if this is ToolItem_
     * @param amount Amount of durability to remove.
     */
    drain_durability(amount: double): void
    /**
     * Use the capsule item with the entity as the source, targeting the given position.
     * @param entity The entity to use the capsule item with.
     * @param target_position The position to use the capsule item with.
     * @returns Array of the entities that were created by the capsule action.
     */
    use_capsule(entity: LuaEntity, target_position: MapPosition | MapPositionArray): LuaEntity[]
    /**
     * Would a call to {@link LuaItemStack#set_stack LuaItemStack::set_stack} succeed?
     * @param stack Stack that would be set, possibly `nil`.
     */
    can_set_stack(stack?: ItemStackIdentification): boolean
    /**
     * Set this item stack to another item stack.
     * @param stack Item stack to set it to. Omitting this parameter or passing `nil` will clear this item stack, as if {@link LuaItemStack#clear LuaItemStack::clear} was called.
     * @returns Whether the stack was set successfully. Returns `false` if this stack was not {@link LuaItemStack#can_set_stack valid for write}.
     */
    set_stack(stack?: ItemStackIdentification): boolean
    /**
     * Transfers the given item stack into this item stack.
     * @returns `true` if the full stack was transferred.
     */
    transfer_stack(stack: ItemStackIdentification): boolean
    /**
     * Export a supported item (blueprint, blueprint-book, deconstruction-planner, upgrade-planner, item-with-tags) to a string.
     * @returns The exported string
     */
    export_stack(): string
    /**
     * Import a supported item (blueprint, blueprint-book, deconstruction-planner, upgrade-planner, item-with-tags) from a string.
     * @param data The string to import
     * @returns 0 if the import succeeded with no errors. -1 if the import succeeded with errors. 1 if the import failed.
     */
    import_stack(data: string): int
    /**
     * Swaps this item stack with the given item stack if allowed.
     * @returns Whether the 2 stacks were swapped successfully.
     */
    swap_stack(stack: LuaItemStack): boolean
    /**
     * Clear this item stack.
     */
    clear(): void
    /**
     * A list of the tiles in this blueprint.
     *
     * _Can only be used if this is BlueprintItem_
     */
    get_blueprint_tiles(): Tile[] | nil
    /**
     * Set specific tiles in this blueprint.
     *
     * _Can only be used if this is BlueprintItem_
     * @param tiles Tiles to be a part of the blueprint.
     */
    set_blueprint_tiles(tiles: readonly TileWrite[]): void
    /**
     * Access the inner inventory of an item.
     * @param inventory Index of the inventory to access, which can only be {@link defines.inventory.item_main}.
     * @returns `nil` if there is no inventory with the given index.
     */
    get_inventory(inventory: defines.inventory): LuaInventory | nil
    /**
     * Build this blueprint or blueprint book at the given location.
     *
     * Built entities can be come invalid between the building of the blueprint and the function returning if by_player or raise_built is used and one of those events invalidates the entity.
     * @returns Array of created ghosts
     */
    build_blueprint(params: {
      /**
       * Surface to build on
       */
      readonly surface: SurfaceIdentification
      /**
       * Force to use for the building
       */
      readonly force: ForceIdentification
      /**
       * The position to build at
       */
      readonly position: MapPosition | MapPositionArray
      /**
       * When true, anything that can be built is else nothing is built if any one thing can't be built
       */
      readonly force_build?: boolean
      /**
       * The direction to use when building
       */
      readonly direction?: defines.direction
      /**
       * If chunks covered by fog-of-war are skipped.
       */
      readonly skip_fog_of_war?: boolean
      /**
       * The player to use if any. If provided {@link defines.events.on_built_entity} will also be fired on successful entity creation.
       */
      readonly by_player?: PlayerIdentification
      /**
       * If true; {@link defines.events.script_raised_built} will be fired on successful entity creation. Note: this is ignored if by_player is provided.
       */
      readonly raise_built?: boolean
    }): LuaEntity[]
    /**
     * Deconstruct the given area with this deconstruction item.
     */
    deconstruct_area(params: {
      /**
       * Surface to deconstruct on
       */
      readonly surface: SurfaceIdentification
      /**
       * Force to use for the deconstruction
       */
      readonly force: ForceIdentification
      /**
       * The area to deconstruct
       */
      readonly area: BoundingBoxWrite | BoundingBoxArray
      /**
       * If chunks covered by fog-of-war are skipped.
       */
      readonly skip_fog_of_war?: boolean
      /**
       * The player to use if any.
       */
      readonly by_player?: PlayerIdentification
    }): void
    /**
     * Cancel deconstruct the given area with this deconstruction item.
     */
    cancel_deconstruct_area(params: {
      /**
       * Surface to cancel deconstruct on
       */
      readonly surface: SurfaceIdentification
      /**
       * Force to use for canceling deconstruction
       */
      readonly force: ForceIdentification
      /**
       * The area to deconstruct
       */
      readonly area: BoundingBoxWrite | BoundingBoxArray
      /**
       * If chunks covered by fog-of-war are skipped.
       */
      readonly skip_fog_of_war?: boolean
      /**
       * The player to use if any.
       */
      readonly by_player?: PlayerIdentification
    }): void
    /**
     * Sets up this blueprint using the found blueprintable entities/tiles on the surface.
     * @returns The blueprint entity index to source entity mapping.
     */
    create_blueprint(params: {
      /**
       * Surface to create from
       */
      readonly surface: SurfaceIdentification
      /**
       * Force to use for the creation
       */
      readonly force: ForceIdentification
      /**
       * The bounding box
       */
      readonly area: BoundingBoxWrite | BoundingBoxArray
      /**
       * When true, blueprintable tiles are always included in the blueprint. When false they're only included if no entities exist in the setup area.
       */
      readonly always_include_tiles?: boolean
      /**
       * When true, entities are included in the blueprint. Defaults to true.
       */
      readonly include_entities?: boolean
      /**
       * When true, modules are included in the blueprint. Defaults to true.
       */
      readonly include_modules?: boolean
      /**
       * When true, station names are included in the blueprint. Defaults to false.
       */
      readonly include_station_names?: boolean
      /**
       * When true, trains are included in the blueprint. Defaults to false.
       */
      readonly include_trains?: boolean
      /**
       * When true, train fuel is included in the blueprint, Defaults to true.
       */
      readonly include_fuel?: boolean
    }): Record<uint, LuaEntity>
    /**
     * Gets the tag with the given name or returns `nil` if it doesn't exist.
     *
     * _Can only be used if this is ItemWithTags_
     */
    get_tag(tag_name: string): AnyBasic | nil
    /**
     * Sets the tag with the given name and value.
     *
     * _Can only be used if this is ItemWithTags_
     */
    set_tag(tag_name: string, tag: AnyBasic): void
    /**
     * Removes a tag with the given name.
     *
     * _Can only be used if this is ItemWithTags_
     * @returns If the tag existed and was removed.
     */
    remove_tag(tag: string): boolean
    /**
     * Clears this blueprint item.
     *
     * _Can only be used if this is BlueprintItem_
     */
    clear_blueprint(): void
    /**
     * Gets the entity filter at the given index for this deconstruction item.
     *
     * _Can only be used if this is DeconstructionItem_
     */
    get_entity_filter(index: uint): string | nil
    /**
     * Sets the entity filter at the given index for this deconstruction item.
     *
     * _Can only be used if this is DeconstructionItem_
     * @param filter Writing `nil` removes the filter.
     * @returns Whether the new filter was successfully set (meaning it was valid).
     */
    set_entity_filter(index: uint, filter: string | LuaEntityPrototype | LuaEntity | nil): boolean
    /**
     * Gets the tile filter at the given index for this deconstruction item.
     *
     * _Can only be used if this is DeconstructionItem_
     */
    get_tile_filter(index: uint): string | nil
    /**
     * Sets the tile filter at the given index for this deconstruction item.
     *
     * _Can only be used if this is DeconstructionItem_
     * @param filter Writing `nil` removes the filter.
     * @returns Whether the new filter was successfully set (meaning it was valid).
     */
    set_tile_filter(index: uint, filter: string | LuaTilePrototype | LuaTile | nil): boolean
    /**
     * Clears all settings/filters on this deconstruction item resetting it to default values.
     *
     * _Can only be used if this is DeconstructionItem_
     */
    clear_deconstruction_item(): void
    /**
     * Clears all settings/filters on this upgrade item resetting it to default values.
     *
     * _Can only be used if this is UpgradeItem_
     */
    clear_upgrade_item(): void
    /**
     * Gets the filter at the given index for this upgrade item.
     *
     * _Can only be used if this is UpgradeItem_
     * @param index The index of the mapper to read.
     */
    get_mapper(index: uint, type: "from" | "to"): UpgradeFilter
    /**
     * Sets the module filter at the given index for this upgrade item.
     *
     * _Can only be used if this is UpgradeItem_
     * @param index The index of the mapper to set.
     * @param filter The filter to set or `nil`
     */
    set_mapper(index: uint, type: "from" | "to", filter: UpgradeFilter | nil): void
    /**
     * Gets the number of entities in this blueprint item.
     *
     * _Can only be used if this is BlueprintItem_
     */
    get_blueprint_entity_count(): uint
    /**
     * Gets the tags for the given blueprint entity index in this blueprint item.
     *
     * _Can only be used if this is BlueprintItem_
     */
    get_blueprint_entity_tags(index: uint): Tags
    /**
     * Sets the tags on the given blueprint entity index in this blueprint item.
     *
     * _Can only be used if this is BlueprintItem_
     * @param index The entity index
     */
    set_blueprint_entity_tags(index: uint, tags: Tags): void
    /**
     * Gets the given tag on the given blueprint entity index in this blueprint item.
     *
     * _Can only be used if this is BlueprintItem_
     * @param index The entity index.
     * @param tag The tag to get.
     */
    get_blueprint_entity_tag(index: uint, tag: string): AnyBasic | nil
    /**
     * Sets the given tag on the given blueprint entity index in this blueprint item.
     *
     * _Can only be used if this is BlueprintItem_
     * @param index The entity index.
     * @param tag The tag to set.
     * @param value The tag value to set or `nil` to clear the tag.
     */
    set_blueprint_entity_tag(index: uint, tag: string, value: AnyBasic | nil): void
    /**
     * Creates the equipment grid for this item if it doesn't exist and this is an item-with-entity-data that supports equipment grids.
     *
     * _Can only be used if this is ItemWithEntityData_
     */
    create_grid(): LuaEquipmentGrid
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Is this valid for reading? Differs from the usual `valid` in that `valid` will be `true` even if
     *
     * the item stack is blank but the entity that holds it is still valid.
     */
    readonly valid_for_read: boolean
    /**
     * Prototype of the item held in this stack.
     */
    readonly prototype: LuaItemPrototype
    /**
     * Prototype name of the item held in this stack.
     */
    readonly name: string
    /**
     * Type of the item prototype.
     */
    readonly type: ItemType
    /**
     * Number of items in this stack.
     */
    count: uint
    /**
     * The equipment grid of this item, if any.
     */
    readonly grid?: LuaEquipmentGrid
    /**
     * How much health the item has, as a number in range `[0, 1]`.
     */
    health: float
    /**
     * Durability of the contained item. Automatically capped at the item's maximum durability.
     *
     * _Can only be used if this is Tool_
     */
    durability?: double
    /**
     * Number of bullets left in the magazine.
     *
     * _Can only be used if this is AmmoItem_
     */
    ammo: uint
    /**
     * Icons of this blueprint item, blueprint book, deconstruction item or upgrade planner. An item that doesn't have icons returns `nil` on read and throws error on write.
     *
     * _Can only be used if this is BlueprintItem_
     */
    blueprint_icons?: BlueprintSignalIcon[]
    /**
     * The snapping grid size in this blueprint item. `nil` if snapping is not enabled.
     *
     * _Can only be used if this is BlueprintItem_
     */
    get blueprint_snap_to_grid(): TilePosition | nil
    set blueprint_snap_to_grid(value: TilePosition | TilePositionArray | nil)
    /**
     * The offset from the absolute grid. `nil` if absolute snapping is not enabled.
     *
     * _Can only be used if this is BlueprintItem_
     */
    get blueprint_position_relative_to_grid(): TilePosition | nil
    set blueprint_position_relative_to_grid(value: TilePosition | TilePositionArray | nil)
    /**
     * If absolute snapping is enabled on this blueprint item.
     *
     * _Can only be used if this is BlueprintItem_
     */
    blueprint_absolute_snapping: boolean
    /**
     * The current label for this item, if any.
     *
     * _Can only be used if this is ItemWithLabel_
     */
    label?: string
    /**
     * The current label color for this item, if any.
     *
     * _Can only be used if this is ItemWithLabel_
     */
    get label_color(): Color | nil
    set label_color(value: Color | ColorArray | nil)
    /**
     * Whether the label for this item can be manually changed. When false the label can only be changed through the API.
     *
     * _Can only be used if this is ItemWithLabel_
     */
    allow_manual_label_change: boolean
    /**
     * Raw materials required to build this blueprint. Result is a dictionary mapping each item prototype name to the required count.
     *
     * _Can only be used if this is BlueprintItem_
     */
    readonly cost_to_build: Record<string, uint>
    /**
     * If this item extends the inventory it resides in (provides its contents for counts, crafting, insertion). Only callable on items with inventories.
     *
     * _Can only be used if this is ItemWithInventory_
     */
    extends_inventory: boolean
    /**
     * The insertion mode priority this ItemWithInventory uses when items are inserted into an inventory it resides in. Only callable on items with inventories.
     *
     * _Can only be used if this is ItemWithInventory_
     */
    prioritize_insertion_mode: "default" | "never" | "always" | "when-manually-filtered"
    /**
     * The default icons for a blueprint item.
     *
     * _Can only be used if this is BlueprintItem_
     */
    readonly default_icons: BlueprintSignalIcon[]
    /**
     * _Can only be used if this is ItemWithTags_
     */
    tags: Tags
    /**
     * The custom description this item-with-tags. This is shown over the normal item description if this is set to a non-empty value.
     */
    custom_description: LocalisedString
    /**
     * The entity filters for this deconstruction item. The attribute is a sparse array with the keys representing the index of the filter. All strings in this array must be entity prototype names that don't have the `"not-deconstructable"` flag set and are either a `cliff` or marked as `minable`.
     */
    entity_filters: string[]
    /**
     * The tile filters for this deconstruction item. The attribute is a sparse array with the keys representing the index of the filter. All strings in this array must be tile prototype names.
     */
    tile_filters: string[]
    /**
     * The blacklist/whitelist entity filter mode for this deconstruction item.
     *
     * _Can only be used if this is DeconstructionItem_
     */
    entity_filter_mode: defines.deconstruction_item.entity_filter_mode
    /**
     * The blacklist/whitelist tile filter mode for this deconstruction item.
     *
     * _Can only be used if this is DeconstructionItem_
     */
    tile_filter_mode: defines.deconstruction_item.tile_filter_mode
    /**
     * The tile selection mode for this deconstruction item.
     *
     * _Can only be used if this is DeconstructionItem_
     */
    tile_selection_mode: defines.deconstruction_item.tile_selection_mode
    /**
     * If this deconstruction item is set to allow trees and rocks only.
     *
     * _Can only be used if this is DeconstructionItem_
     */
    trees_and_rocks_only: boolean
    /**
     * The number of entity filters this deconstruction item supports.
     *
     * _Can only be used if this is DeconstructionItem_
     */
    readonly entity_filter_count: uint
    /**
     * The number of tile filters this deconstruction item supports.
     *
     * _Can only be used if this is DeconstructionItem_
     */
    readonly tile_filter_count: uint
    /**
     * The active blueprint index for this blueprint book. `nil` if this blueprint book is empty.
     *
     * _Can only be used if this is BlueprintBookItem_
     */
    active_index?: uint
    /**
     * The unique identifier for this item , if any. Note that this ID stays the same no matter where the item is moved to.
     *
     * {@link https://lua-api.factorio.com/latest/classes/LuaItemStack.html#LuaItemStack.item_number > Only these types of items have unique IDs:}
     */
    readonly item_number?: uint
    /**
     * If this item is a spidertron remote that has a spidertron bound to it, it returns the connected spider-vehicle entity.
     *
     * _Can only be used if this is SpidertronRemote_
     */
    connected_entity?: LuaEntity
    /**
     * If this is an item with entity data, get the stored entity label.
     *
     * _Can only be used if this is ItemWithEntityData_
     */
    entity_label?: string
    /**
     * If this is an item with entity data, get the stored entity color.
     *
     * _Can only be used if this is ItemWithEntityData_
     */
    get entity_color(): Color | nil
    set entity_color(value: Color | ColorArray | nil)
    /**
     * If this is a blueprint item.
     */
    readonly is_blueprint: boolean
    /**
     * If this is a blueprint book item.
     */
    readonly is_blueprint_book: boolean
    /**
     * If this is a module item.
     */
    readonly is_module: boolean
    /**
     * If this is an ammo item.
     */
    readonly is_ammo: boolean
    /**
     * If this is a tool item.
     */
    readonly is_tool: boolean
    /**
     * If this is a mining tool item.
     */
    readonly is_mining_tool: boolean
    /**
     * If this is an armor item.
     */
    readonly is_armor: boolean
    /**
     * If this is a repair tool item.
     */
    readonly is_repair_tool: boolean
    /**
     * If this is an item with label item.
     */
    readonly is_item_with_label: boolean
    /**
     * If this is an item with inventory item.
     */
    readonly is_item_with_inventory: boolean
    /**
     * If this is an item with entity data item.
     */
    readonly is_item_with_entity_data: boolean
    /**
     * If this is a selection tool item.
     */
    readonly is_selection_tool: boolean
    /**
     * If this is an item with tags item.
     */
    readonly is_item_with_tags: boolean
    /**
     * If this is a deconstruction tool item.
     */
    readonly is_deconstruction_item: boolean
    /**
     * If this is a upgrade item.
     */
    readonly is_upgrade_item: boolean
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaItemStack"
  }
  /**
   * @noSelf
   */
  export interface BaseItemStack {
    /**
     * Is this blueprint item setup? I.e. is it a non-empty blueprint?
     */
    is_blueprint_setup(): boolean
    /**
     * Use the capsule item with the entity as the source, targeting the given position.
     * @param entity The entity to use the capsule item with.
     * @param target_position The position to use the capsule item with.
     * @returns Array of the entities that were created by the capsule action.
     */
    use_capsule(entity: LuaEntity, target_position: MapPosition | MapPositionArray): LuaEntity[]
    /**
     * Would a call to {@link LuaItemStack#set_stack LuaItemStack::set_stack} succeed?
     * @param stack Stack that would be set, possibly `nil`.
     */
    can_set_stack(stack?: ItemStackIdentification): boolean
    /**
     * Set this item stack to another item stack.
     * @param stack Item stack to set it to. Omitting this parameter or passing `nil` will clear this item stack, as if {@link LuaItemStack#clear LuaItemStack::clear} was called.
     * @returns Whether the stack was set successfully. Returns `false` if this stack was not {@link LuaItemStack#can_set_stack valid for write}.
     */
    set_stack(stack?: ItemStackIdentification): boolean
    /**
     * Transfers the given item stack into this item stack.
     * @returns `true` if the full stack was transferred.
     */
    transfer_stack(stack: ItemStackIdentification): boolean
    /**
     * Export a supported item (blueprint, blueprint-book, deconstruction-planner, upgrade-planner, item-with-tags) to a string.
     * @returns The exported string
     */
    export_stack(): string
    /**
     * Import a supported item (blueprint, blueprint-book, deconstruction-planner, upgrade-planner, item-with-tags) from a string.
     * @param data The string to import
     * @returns 0 if the import succeeded with no errors. -1 if the import succeeded with errors. 1 if the import failed.
     */
    import_stack(data: string): int
    /**
     * Swaps this item stack with the given item stack if allowed.
     * @returns Whether the 2 stacks were swapped successfully.
     */
    swap_stack(stack: LuaItemStack): boolean
    /**
     * Clear this item stack.
     */
    clear(): void
    /**
     * Access the inner inventory of an item.
     * @param inventory Index of the inventory to access, which can only be {@link defines.inventory.item_main}.
     * @returns `nil` if there is no inventory with the given index.
     */
    get_inventory(inventory: defines.inventory): LuaInventory | nil
    /**
     * Build this blueprint or blueprint book at the given location.
     *
     * Built entities can be come invalid between the building of the blueprint and the function returning if by_player or raise_built is used and one of those events invalidates the entity.
     * @returns Array of created ghosts
     */
    build_blueprint(params: {
      /**
       * Surface to build on
       */
      readonly surface: SurfaceIdentification
      /**
       * Force to use for the building
       */
      readonly force: ForceIdentification
      /**
       * The position to build at
       */
      readonly position: MapPosition | MapPositionArray
      /**
       * When true, anything that can be built is else nothing is built if any one thing can't be built
       */
      readonly force_build?: boolean
      /**
       * The direction to use when building
       */
      readonly direction?: defines.direction
      /**
       * If chunks covered by fog-of-war are skipped.
       */
      readonly skip_fog_of_war?: boolean
      /**
       * The player to use if any. If provided {@link defines.events.on_built_entity} will also be fired on successful entity creation.
       */
      readonly by_player?: PlayerIdentification
      /**
       * If true; {@link defines.events.script_raised_built} will be fired on successful entity creation. Note: this is ignored if by_player is provided.
       */
      readonly raise_built?: boolean
    }): LuaEntity[]
    /**
     * Deconstruct the given area with this deconstruction item.
     */
    deconstruct_area(params: {
      /**
       * Surface to deconstruct on
       */
      readonly surface: SurfaceIdentification
      /**
       * Force to use for the deconstruction
       */
      readonly force: ForceIdentification
      /**
       * The area to deconstruct
       */
      readonly area: BoundingBoxWrite | BoundingBoxArray
      /**
       * If chunks covered by fog-of-war are skipped.
       */
      readonly skip_fog_of_war?: boolean
      /**
       * The player to use if any.
       */
      readonly by_player?: PlayerIdentification
    }): void
    /**
     * Cancel deconstruct the given area with this deconstruction item.
     */
    cancel_deconstruct_area(params: {
      /**
       * Surface to cancel deconstruct on
       */
      readonly surface: SurfaceIdentification
      /**
       * Force to use for canceling deconstruction
       */
      readonly force: ForceIdentification
      /**
       * The area to deconstruct
       */
      readonly area: BoundingBoxWrite | BoundingBoxArray
      /**
       * If chunks covered by fog-of-war are skipped.
       */
      readonly skip_fog_of_war?: boolean
      /**
       * The player to use if any.
       */
      readonly by_player?: PlayerIdentification
    }): void
    /**
     * Sets up this blueprint using the found blueprintable entities/tiles on the surface.
     * @returns The blueprint entity index to source entity mapping.
     */
    create_blueprint(params: {
      /**
       * Surface to create from
       */
      readonly surface: SurfaceIdentification
      /**
       * Force to use for the creation
       */
      readonly force: ForceIdentification
      /**
       * The bounding box
       */
      readonly area: BoundingBoxWrite | BoundingBoxArray
      /**
       * When true, blueprintable tiles are always included in the blueprint. When false they're only included if no entities exist in the setup area.
       */
      readonly always_include_tiles?: boolean
      /**
       * When true, entities are included in the blueprint. Defaults to true.
       */
      readonly include_entities?: boolean
      /**
       * When true, modules are included in the blueprint. Defaults to true.
       */
      readonly include_modules?: boolean
      /**
       * When true, station names are included in the blueprint. Defaults to false.
       */
      readonly include_station_names?: boolean
      /**
       * When true, trains are included in the blueprint. Defaults to false.
       */
      readonly include_trains?: boolean
      /**
       * When true, train fuel is included in the blueprint, Defaults to true.
       */
      readonly include_fuel?: boolean
    }): Record<uint, LuaEntity>
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Is this valid for reading? Differs from the usual `valid` in that `valid` will be `true` even if
     *
     * the item stack is blank but the entity that holds it is still valid.
     */
    readonly valid_for_read: boolean
    /**
     * Prototype of the item held in this stack.
     */
    readonly prototype: LuaItemPrototype
    /**
     * Prototype name of the item held in this stack.
     */
    readonly name: string
    /**
     * Type of the item prototype.
     */
    readonly type: ItemType
    /**
     * Number of items in this stack.
     */
    count: uint
    /**
     * The equipment grid of this item, if any.
     */
    readonly grid?: LuaEquipmentGrid
    /**
     * How much health the item has, as a number in range `[0, 1]`.
     */
    health: float
    /**
     * The custom description this item-with-tags. This is shown over the normal item description if this is set to a non-empty value.
     */
    custom_description: LocalisedString
    /**
     * The entity filters for this deconstruction item. The attribute is a sparse array with the keys representing the index of the filter. All strings in this array must be entity prototype names that don't have the `"not-deconstructable"` flag set and are either a `cliff` or marked as `minable`.
     */
    entity_filters: string[]
    /**
     * The tile filters for this deconstruction item. The attribute is a sparse array with the keys representing the index of the filter. All strings in this array must be tile prototype names.
     */
    tile_filters: string[]
    /**
     * The unique identifier for this item , if any. Note that this ID stays the same no matter where the item is moved to.
     *
     * {@link https://lua-api.factorio.com/latest/classes/LuaItemStack.html#LuaItemStack.item_number > Only these types of items have unique IDs:}
     */
    readonly item_number?: uint
    /**
     * If this is a blueprint item.
     */
    readonly is_blueprint: boolean
    /**
     * If this is a blueprint book item.
     */
    readonly is_blueprint_book: boolean
    /**
     * If this is a module item.
     */
    readonly is_module: boolean
    /**
     * If this is an ammo item.
     */
    readonly is_ammo: boolean
    /**
     * If this is a tool item.
     */
    readonly is_tool: boolean
    /**
     * If this is a mining tool item.
     */
    readonly is_mining_tool: boolean
    /**
     * If this is an armor item.
     */
    readonly is_armor: boolean
    /**
     * If this is a repair tool item.
     */
    readonly is_repair_tool: boolean
    /**
     * If this is an item with label item.
     */
    readonly is_item_with_label: boolean
    /**
     * If this is an item with inventory item.
     */
    readonly is_item_with_inventory: boolean
    /**
     * If this is an item with entity data item.
     */
    readonly is_item_with_entity_data: boolean
    /**
     * If this is a selection tool item.
     */
    readonly is_selection_tool: boolean
    /**
     * If this is an item with tags item.
     */
    readonly is_item_with_tags: boolean
    /**
     * If this is a deconstruction tool item.
     */
    readonly is_deconstruction_item: boolean
    /**
     * If this is a upgrade item.
     */
    readonly is_upgrade_item: boolean
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaItemStack"
  }
  /**
   * @noSelf
   */
  export interface BlueprintItemStack extends BaseItemStack {
    /**
     * The entities in this blueprint.
     *
     * _Can only be used if this is BlueprintItem_
     */
    get_blueprint_entities(): BlueprintEntity[] | nil
    /**
     * Set new entities to be a part of this blueprint.
     *
     * _Can only be used if this is BlueprintItem_
     * @param entities The new blueprint entities.
     */
    set_blueprint_entities(entities: readonly BlueprintEntityWrite[]): void
    /**
     * A list of the tiles in this blueprint.
     *
     * _Can only be used if this is BlueprintItem_
     */
    get_blueprint_tiles(): Tile[] | nil
    /**
     * Set specific tiles in this blueprint.
     *
     * _Can only be used if this is BlueprintItem_
     * @param tiles Tiles to be a part of the blueprint.
     */
    set_blueprint_tiles(tiles: readonly TileWrite[]): void
    /**
     * Clears this blueprint item.
     *
     * _Can only be used if this is BlueprintItem_
     */
    clear_blueprint(): void
    /**
     * Gets the number of entities in this blueprint item.
     *
     * _Can only be used if this is BlueprintItem_
     */
    get_blueprint_entity_count(): uint
    /**
     * Gets the tags for the given blueprint entity index in this blueprint item.
     *
     * _Can only be used if this is BlueprintItem_
     */
    get_blueprint_entity_tags(index: uint): Tags
    /**
     * Sets the tags on the given blueprint entity index in this blueprint item.
     *
     * _Can only be used if this is BlueprintItem_
     * @param index The entity index
     */
    set_blueprint_entity_tags(index: uint, tags: Tags): void
    /**
     * Gets the given tag on the given blueprint entity index in this blueprint item.
     *
     * _Can only be used if this is BlueprintItem_
     * @param index The entity index.
     * @param tag The tag to get.
     */
    get_blueprint_entity_tag(index: uint, tag: string): AnyBasic | nil
    /**
     * Sets the given tag on the given blueprint entity index in this blueprint item.
     *
     * _Can only be used if this is BlueprintItem_
     * @param index The entity index.
     * @param tag The tag to set.
     * @param value The tag value to set or `nil` to clear the tag.
     */
    set_blueprint_entity_tag(index: uint, tag: string, value: AnyBasic | nil): void
    /**
     * Icons of this blueprint item, blueprint book, deconstruction item or upgrade planner. An item that doesn't have icons returns `nil` on read and throws error on write.
     *
     * _Can only be used if this is BlueprintItem_
     */
    blueprint_icons?: BlueprintSignalIcon[]
    /**
     * The snapping grid size in this blueprint item. `nil` if snapping is not enabled.
     *
     * _Can only be used if this is BlueprintItem_
     */
    get blueprint_snap_to_grid(): TilePosition | nil
    set blueprint_snap_to_grid(value: TilePosition | TilePositionArray | nil)
    /**
     * The offset from the absolute grid. `nil` if absolute snapping is not enabled.
     *
     * _Can only be used if this is BlueprintItem_
     */
    get blueprint_position_relative_to_grid(): TilePosition | nil
    set blueprint_position_relative_to_grid(value: TilePosition | TilePositionArray | nil)
    /**
     * If absolute snapping is enabled on this blueprint item.
     *
     * _Can only be used if this is BlueprintItem_
     */
    blueprint_absolute_snapping: boolean
    /**
     * Raw materials required to build this blueprint. Result is a dictionary mapping each item prototype name to the required count.
     *
     * _Can only be used if this is BlueprintItem_
     */
    readonly cost_to_build: Record<string, uint>
    /**
     * The default icons for a blueprint item.
     *
     * _Can only be used if this is BlueprintItem_
     */
    readonly default_icons: BlueprintSignalIcon[]
  }
  /**
   * @noSelf
   */
  export interface AmmoItemStack extends BaseItemStack {
    /**
     * Add ammo to this ammo item.
     *
     * _Can only be used if this is AmmoItem_
     * @param amount Amount of ammo to add.
     */
    add_ammo(amount: float): void
    /**
     * Remove ammo from this ammo item.
     *
     * _Can only be used if this is AmmoItem_
     * @param amount Amount of ammo to remove.
     */
    drain_ammo(amount: float): void
    /**
     * Number of bullets left in the magazine.
     *
     * _Can only be used if this is AmmoItem_
     */
    ammo: uint
  }
  /**
   * @noSelf
   */
  export interface ToolItemStack extends BaseItemStack {
    /**
     * Add durability to this tool item.
     *
     * _Can only be used if this is ToolItem_
     * @param amount Amount of durability to add.
     */
    add_durability(amount: double): void
    /**
     * Remove durability from this tool item.
     *
     * _Can only be used if this is ToolItem_
     * @param amount Amount of durability to remove.
     */
    drain_durability(amount: double): void
    /**
     * Durability of the contained item. Automatically capped at the item's maximum durability.
     *
     * _Can only be used if this is Tool_
     */
    durability?: double
  }
  /**
   * @noSelf
   */
  export interface ItemWithTagsItemStack extends BaseItemStack {
    /**
     * Gets the tag with the given name or returns `nil` if it doesn't exist.
     *
     * _Can only be used if this is ItemWithTags_
     */
    get_tag(tag_name: string): AnyBasic | nil
    /**
     * Sets the tag with the given name and value.
     *
     * _Can only be used if this is ItemWithTags_
     */
    set_tag(tag_name: string, tag: AnyBasic): void
    /**
     * Removes a tag with the given name.
     *
     * _Can only be used if this is ItemWithTags_
     * @returns If the tag existed and was removed.
     */
    remove_tag(tag: string): boolean
    /**
     * _Can only be used if this is ItemWithTags_
     */
    tags: Tags
  }
  /**
   * @noSelf
   */
  export interface DeconstructionItemStack extends BaseItemStack {
    /**
     * Gets the entity filter at the given index for this deconstruction item.
     *
     * _Can only be used if this is DeconstructionItem_
     */
    get_entity_filter(index: uint): string | nil
    /**
     * Sets the entity filter at the given index for this deconstruction item.
     *
     * _Can only be used if this is DeconstructionItem_
     * @param filter Writing `nil` removes the filter.
     * @returns Whether the new filter was successfully set (meaning it was valid).
     */
    set_entity_filter(index: uint, filter: string | LuaEntityPrototype | LuaEntity | nil): boolean
    /**
     * Gets the tile filter at the given index for this deconstruction item.
     *
     * _Can only be used if this is DeconstructionItem_
     */
    get_tile_filter(index: uint): string | nil
    /**
     * Sets the tile filter at the given index for this deconstruction item.
     *
     * _Can only be used if this is DeconstructionItem_
     * @param filter Writing `nil` removes the filter.
     * @returns Whether the new filter was successfully set (meaning it was valid).
     */
    set_tile_filter(index: uint, filter: string | LuaTilePrototype | LuaTile | nil): boolean
    /**
     * Clears all settings/filters on this deconstruction item resetting it to default values.
     *
     * _Can only be used if this is DeconstructionItem_
     */
    clear_deconstruction_item(): void
    /**
     * The blacklist/whitelist entity filter mode for this deconstruction item.
     *
     * _Can only be used if this is DeconstructionItem_
     */
    entity_filter_mode: defines.deconstruction_item.entity_filter_mode
    /**
     * The blacklist/whitelist tile filter mode for this deconstruction item.
     *
     * _Can only be used if this is DeconstructionItem_
     */
    tile_filter_mode: defines.deconstruction_item.tile_filter_mode
    /**
     * The tile selection mode for this deconstruction item.
     *
     * _Can only be used if this is DeconstructionItem_
     */
    tile_selection_mode: defines.deconstruction_item.tile_selection_mode
    /**
     * If this deconstruction item is set to allow trees and rocks only.
     *
     * _Can only be used if this is DeconstructionItem_
     */
    trees_and_rocks_only: boolean
    /**
     * The number of entity filters this deconstruction item supports.
     *
     * _Can only be used if this is DeconstructionItem_
     */
    readonly entity_filter_count: uint
    /**
     * The number of tile filters this deconstruction item supports.
     *
     * _Can only be used if this is DeconstructionItem_
     */
    readonly tile_filter_count: uint
  }
  /**
   * @noSelf
   */
  export interface UpgradeItemStack extends BaseItemStack {
    /**
     * Clears all settings/filters on this upgrade item resetting it to default values.
     *
     * _Can only be used if this is UpgradeItem_
     */
    clear_upgrade_item(): void
    /**
     * Gets the filter at the given index for this upgrade item.
     *
     * _Can only be used if this is UpgradeItem_
     * @param index The index of the mapper to read.
     */
    get_mapper(index: uint, type: "from" | "to"): UpgradeFilter
    /**
     * Sets the module filter at the given index for this upgrade item.
     *
     * _Can only be used if this is UpgradeItem_
     * @param index The index of the mapper to set.
     * @param filter The filter to set or `nil`
     */
    set_mapper(index: uint, type: "from" | "to", filter: UpgradeFilter | nil): void
  }
  /**
   * @noSelf
   */
  export interface ItemWithEntityDataItemStack extends BaseItemStack {
    /**
     * Creates the equipment grid for this item if it doesn't exist and this is an item-with-entity-data that supports equipment grids.
     *
     * _Can only be used if this is ItemWithEntityData_
     */
    create_grid(): LuaEquipmentGrid
    /**
     * If this is an item with entity data, get the stored entity label.
     *
     * _Can only be used if this is ItemWithEntityData_
     */
    entity_label?: string
    /**
     * If this is an item with entity data, get the stored entity color.
     *
     * _Can only be used if this is ItemWithEntityData_
     */
    get entity_color(): Color | nil
    set entity_color(value: Color | ColorArray | nil)
  }
  export interface ItemWithLabelItemStack extends BaseItemStack {
    /**
     * The current label for this item, if any.
     *
     * _Can only be used if this is ItemWithLabel_
     */
    label?: string
    /**
     * The current label color for this item, if any.
     *
     * _Can only be used if this is ItemWithLabel_
     */
    get label_color(): Color | nil
    set label_color(value: Color | ColorArray | nil)
    /**
     * Whether the label for this item can be manually changed. When false the label can only be changed through the API.
     *
     * _Can only be used if this is ItemWithLabel_
     */
    allow_manual_label_change: boolean
  }
  export interface ItemWithInventoryItemStack extends BaseItemStack {
    /**
     * If this item extends the inventory it resides in (provides its contents for counts, crafting, insertion). Only callable on items with inventories.
     *
     * _Can only be used if this is ItemWithInventory_
     */
    extends_inventory: boolean
    /**
     * The insertion mode priority this ItemWithInventory uses when items are inserted into an inventory it resides in. Only callable on items with inventories.
     *
     * _Can only be used if this is ItemWithInventory_
     */
    prioritize_insertion_mode: "default" | "never" | "always" | "when-manually-filtered"
  }
  export interface BlueprintBookItemStack extends BaseItemStack {
    /**
     * The active blueprint index for this blueprint book. `nil` if this blueprint book is empty.
     *
     * _Can only be used if this is BlueprintBookItem_
     */
    active_index?: uint
  }
  export interface SpidertronRemoteItemStack extends BaseItemStack {
    /**
     * If this item is a spidertron remote that has a spidertron bound to it, it returns the connected spider-vehicle entity.
     *
     * _Can only be used if this is SpidertronRemote_
     */
    connected_entity?: LuaEntity
  }
  /**
   * Control behavior for lamps.
   * @noSelf
   */
  export interface LuaLampControlBehavior extends LuaGenericOnOffControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * `true` if the lamp should set the color from the circuit network signals.
     */
    use_colors: boolean
    /**
     * The color the lamp is showing, if any.
     */
    readonly color?: Color
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaLampControlBehavior"
  }
  /**
   * A lazily loaded value. For performance reasons, we sometimes return a custom lazily-loaded value type instead of the native Lua value. This custom type lazily constructs the necessary value when {@link LuaLazyLoadedValue#get LuaLazyLoadedValue::get} is called, therefore preventing its unnecessary construction in some cases.
   *
   * An instance of LuaLazyLoadedValue is only valid during the event it was created from and cannot be saved.
   * @noSelf
   */
  export interface LuaLazyLoadedValue<T> {
    /**
     * Gets the value of this lazy loaded value.
     */
    get(): T
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaLazyLoadedValue"
  }
  /**
   * Logistic cell of a particular {@link LuaEntity}. A "Logistic Cell" is the given name for settings and properties used by what would normally be seen as a "Roboport". A logistic cell however doesn't have to be attached to the roboport entity (the character has one for the personal roboport).
   * @noSelf
   */
  export interface LuaLogisticCell {
    /**
     * Is a given position within the logistic range of this cell?
     */
    is_in_logistic_range(position: MapPosition | MapPositionArray): boolean
    /**
     * Is a given position within the construction range of this cell?
     */
    is_in_construction_range(position: MapPosition | MapPositionArray): boolean
    /**
     * Are two cells neighbours?
     */
    is_neighbour_with(other: LuaLogisticCell): boolean
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Logistic radius of this cell.
     */
    readonly logistic_radius: float
    /**
     * Logistic connection distance of this cell.
     */
    readonly logistics_connection_distance: float
    /**
     * Construction radius of this cell.
     */
    readonly construction_radius: float
    /**
     * Number of stationed logistic robots in this cell.
     */
    readonly stationed_logistic_robot_count: uint
    /**
     * Number of stationed construction robots in this cell.
     */
    readonly stationed_construction_robot_count: uint
    /**
     * `true` if this is a mobile cell. In vanilla, only the logistic cell created by a character's personal roboport is mobile.
     */
    readonly mobile: boolean
    /**
     * `true` if this cell is active.
     */
    readonly transmitting: boolean
    /**
     * Radius at which the robots hover when waiting to be charged.
     */
    readonly charge_approach_distance: float
    /**
     * Number of robots currently charging.
     */
    readonly charging_robot_count: uint
    /**
     * Number of robots waiting to charge.
     */
    readonly to_charge_robot_count: uint
    /**
     * This cell's owner.
     */
    readonly owner: LuaEntity
    /**
     * The network that owns this cell, if any.
     */
    readonly logistic_network?: LuaLogisticNetwork
    /**
     * Neighbouring cells.
     */
    readonly neighbours: LuaLogisticCell[]
    /**
     * Robots currently being charged.
     */
    readonly charging_robots: LuaEntity[]
    /**
     * Robots waiting to charge.
     */
    readonly to_charge_robots: LuaEntity[]
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaLogisticCell"
  }
  /**
   * Control behavior for logistic chests.
   * @noSelf
   */
  export interface LuaLogisticContainerControlBehavior extends LuaControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * The circuit mode of operations for the logistic container. Can only be set on containers whose {@link LuaEntityPrototype#logistic_mode logistic_mode} is set to "requester".
     */
    circuit_mode_of_operation: defines.control_behavior.logistic_container.circuit_mode_of_operation
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaLogisticContainerControlBehavior"
  }
  /**
   * A single logistic network of a given force on a given surface.
   * @noSelf
   */
  export interface LuaLogisticNetwork {
    /**
     * Count given or all items in the network or given members.
     * @param item Item name to count. If not given, gives counts of all items in the network.
     * @param member Logistic members to check. If not given, gives count in the entire network.
     */
    get_item_count(item?: string, member?: "storage" | "providers"): int
    /**
     * Get item counts for the entire network, similar to how {@link LuaInventory#get_contents LuaInventory::get_contents} does.
     * @returns A mapping of item prototype names to the number available in the network.
     */
    get_contents(): Record<string, uint>
    /**
     * Remove items from the logistic network. This will actually remove the items from some logistic chests.
     * @param item What to remove.
     * @param members Which logistic members to remove from. If not specified, removes from the network in the usual order.
     * @returns Number of items removed.
     */
    remove_item(
      item: ItemStackIdentification,
      members?: "active-provider" | "passive-provider" | "buffer" | "storage",
    ): uint
    /**
     * Insert items into the logistic network. This will actually insert the items into some logistic chests.
     * @param item What to insert.
     * @param members Which logistic members to insert the items to. `"storage-empty"` inserts into storage chests that are completely empty, `"storage-empty-slot"` inserts into storage chests that have an empty slot. If not specified, inserts items into the logistic network in the usual order.
     * @returns Number of items actually inserted.
     */
    insert(
      item: ItemStackIdentification,
      members?: "storage" | "storage-empty" | "storage-empty-slot" | "requester",
    ): uint
    /**
     * Find logistic cell closest to a given position.
     * @returns `nil` if no cell was found.
     */
    find_cell_closest_to(position: MapPosition | MapPositionArray): LuaLogisticCell | nil
    /**
     * Find the 'best' logistic point with this item ID and from the given position or from given chest type.
     * @returns `nil` if no point was found.
     */
    select_pickup_point(params: {
      /**
       * Name of the item to pick up.
       */
      readonly name: string
      /**
       * When given, it will find the storage 'best' storage point from this position.
       */
      readonly position?: MapPosition | MapPositionArray
      /**
       * Whether to consider buffer chests or not. Defaults to false. Only considered if selecting with position.
       */
      readonly include_buffers?: boolean
      /**
       * When given, it will find from only the specific type of member. If not specified, selects with normal priorities. Not considered if position is specified.
       */
      readonly members?: "active-provider" | "passive-provider" | "buffer" | "storage"
    }): LuaLogisticPoint | nil
    /**
     * Find a logistic point to drop the specific item stack.
     * @returns `nil` if no point was found.
     */
    select_drop_point(params: {
      /**
       * Name of the item to drop off.
       */
      readonly stack: ItemStackIdentification
      /**
       * When given, it will find from only the specific type of member. If not specified, selects with normal priorities.
       */
      readonly members?: "storage" | "storage-empty" | "storage-empty-slot" | "requester"
    }): LuaLogisticPoint | nil
    /**
     * Can the network satisfy a request for a given item and count.
     * @param item Item name to check.
     * @param count Count to check. Defaults to 1.
     * @param include_buffers Should buffers be considered? Defaults to false.
     * @returns Whether the network can satisfy the request.
     */
    can_satisfy_request(item: string, count?: uint, include_buffers?: boolean): boolean
    /**
     * Get the amount of items of the given type indexed by the storage member.
     * @param item Item name to check.
     */
    get_supply_counts(item: string): LogisticsNetworkSupplyCounts
    /**
     * Gets the logistic points with of the given type indexed by the storage member.
     * @param item Item name to check.
     */
    get_supply_points(item: string): LogisticsNetworkSupplyPoints
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * The force this logistic network belongs to.
     */
    readonly force: LuaForce
    /**
     * Number of logistic robots available for a job.
     */
    readonly available_logistic_robots: uint
    /**
     * The total number of logistic robots in the network (idle and active + in roboports).
     */
    readonly all_logistic_robots: uint
    /**
     * Number of construction robots available for a job.
     */
    readonly available_construction_robots: uint
    /**
     * The total number of construction robots in the network (idle and active + in roboports).
     */
    readonly all_construction_robots: uint
    /**
     * Maximum number of robots the network can work with. Currently only used for the personal roboport.
     */
    readonly robot_limit: uint
    /**
     * All cells in this network.
     */
    readonly cells: LuaLogisticCell[]
    /**
     * All entities that have logistic provider points in this network.
     */
    readonly providers: LuaEntity[]
    /**
     * All entities that have empty logistic provider points in this network.
     */
    readonly empty_providers: LuaEntity[]
    /**
     * All entities that have logistic requester points in this network.
     */
    readonly requesters: LuaEntity[]
    /**
     * All entities that have logistic storage points in this network.
     */
    readonly storages: LuaEntity[]
    /**
     * All other entities that have logistic points in this network (inserters mostly).
     */
    readonly logistic_members: LuaEntity[]
    /**
     * All things that have provider points in this network.
     */
    readonly provider_points: LuaLogisticPoint[]
    /**
     * All passive provider points in this network.
     */
    readonly passive_provider_points: LuaLogisticPoint[]
    /**
     * All active provider points in this network.
     */
    readonly active_provider_points: LuaLogisticPoint[]
    /**
     * All things that have empty provider points in this network.
     */
    readonly empty_provider_points: LuaLogisticPoint[]
    /**
     * All things that have requester points in this network.
     */
    readonly requester_points: LuaLogisticPoint[]
    /**
     * All things that have storage points in this network.
     */
    readonly storage_points: LuaLogisticPoint[]
    /**
     * All robots in this logistic network.
     */
    readonly robots: LuaEntity[]
    /**
     * All construction robots in this logistic network.
     */
    readonly construction_robots: LuaEntity[]
    /**
     * All logistic robots in this logistic network.
     */
    readonly logistic_robots: LuaEntity[]
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaLogisticNetwork"
  }
  /**
   * Logistic point of a particular {@link LuaEntity}. A "Logistic point" is the name given for settings and properties used by requester, provider, and storage points in a given logistic network. These "points" don't have to be a logistic container but often are. One other entity that can own several points is the "character" character type entity.
   * @noSelf
   */
  export interface LuaLogisticPoint {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * The {@link LuaEntity} owner of this {@link LuaLogisticPoint}.
     */
    readonly owner: LuaEntity
    readonly logistic_network: LuaLogisticNetwork
    /**
     * The Logistic member index of this logistic point.
     */
    readonly logistic_member_index: uint
    /**
     * The logistic filters for this logistic point, if this uses any.
     *
     * The returned array will always have an entry for each filter and will be indexed in sequence when not nil.
     */
    readonly filters?: LogisticFilter[]
    /**
     * The logistic mode.
     */
    readonly mode: defines.logistic_mode
    /**
     * The force of this logistic point.
     *
     * This will always be the same as the {@link LuaLogisticPoint#owner LuaLogisticPoint::owner} force.
     */
    readonly force: LuaForce
    /**
     * Items targeted to be picked up from this logistic point by robots. The attribute is a dictionary mapping the item prototype names to their item counts.
     */
    readonly targeted_items_pickup: Record<string, uint>
    /**
     * Items targeted to be dropped off into this logistic point by robots. The attribute is a dictionary mapping the item prototype names to their item counts.
     */
    readonly targeted_items_deliver: Record<string, uint>
    /**
     * If this logistic point is using the exact mode. In exact mode robots never over-deliver requests.
     */
    readonly exact: boolean
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaLogisticPoint"
  }
  /**
   * Control behavior for mining drills.
   * @noSelf
   */
  export interface LuaMiningDrillControlBehavior extends LuaGenericOnOffControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * `true` if this drill is enabled or disabled using the logistics or circuit condition.
     */
    circuit_enable_disable: boolean
    /**
     * `true` if this drill should send the resources in the field to the circuit network. Which resources depends on {@link LuaMiningDrillControlBehavior#resource_read_mode LuaMiningDrillControlBehavior::resource_read_mode}
     */
    circuit_read_resources: boolean
    /**
     * If the mining drill should send just the resources in its area or the entire field it's on to the circuit network.
     */
    resource_read_mode: defines.control_behavior.mining_drill.resource_read_mode
    /**
     * The resource entities that the mining drill will send information about to the circuit network or an empty array.
     */
    readonly resource_read_targets: LuaEntity[]
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaMiningDrillControlBehavior"
  }
  /**
   * Prototype of a mod setting.
   * @noSelf
   */
  export interface LuaModSettingPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Type of this prototype.
     */
    readonly type: keyof SettingsPrototypeMap
    /**
     * Name of this prototype.
     */
    readonly name: string
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    /**
     * The mod that owns this setting.
     */
    readonly mod: string
    readonly setting_type: string
    /**
     * The default value of this setting.
     */
    readonly default_value: boolean | double | int | string
    /**
     * The minimum value for this setting. `nil` if this setting type doesn't support a minimum.
     */
    readonly minimum_value?: double | int
    /**
     * The maximum value for this setting. `nil` if this setting type doesn't support a maximum.
     */
    readonly maximum_value?: double | int
    /**
     * The allowed values for this setting. `nil` if this setting doesn't use the a fixed set of values.
     */
    readonly allowed_values?: string[] | int[] | double[]
    /**
     * Whether this string setting allows blank values. `nil` if not a string setting.
     */
    readonly allow_blank?: boolean
    /**
     * Whether this string setting auto-trims values. `nil` if not a string setting
     */
    readonly auto_trim?: boolean
    /**
     * Whether this setting is hidden from the GUI.
     */
    readonly hidden: boolean
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaModSettingPrototype"
  }
  /**
   * Prototype of a module category.
   * @noSelf
   */
  export interface LuaModuleCategoryPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Name of this prototype.
     */
    readonly name: string
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaModuleCategoryPrototype"
  }
  /**
   * Prototype of a named noise expression.
   * @noSelf
   */
  export interface LuaNamedNoiseExpression {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Name of this prototype.
     */
    readonly name: string
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    /**
     * Name of the property that this expression is intended to provide a value for, if any.
     */
    readonly intended_property: string
    /**
     * The expression itself.
     */
    readonly expression: NoiseExpression
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaNamedNoiseExpression"
  }
  /**
   * Prototype of a noise layer.
   * @noSelf
   */
  export interface LuaNoiseLayerPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Name of this prototype.
     */
    readonly name: string
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaNoiseLayerPrototype"
  }
  /**
   * Prototype of an optimized particle.
   * @noSelf
   */
  export interface LuaParticlePrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Name of this prototype.
     */
    readonly name: string
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    readonly regular_trigger_effect: TriggerEffectItem
    readonly ended_in_water_trigger_effect: TriggerEffectItem
    readonly render_layer: RenderLayer
    readonly render_layer_when_on_ground: RenderLayer
    readonly life_time: uint
    readonly regular_trigger_effect_frequency: uint
    readonly movement_modifier_when_on_ground: float
    readonly movement_modifier: float
    readonly mining_particle_frame_speed: float
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaParticlePrototype"
  }
  /**
   * A permission group that defines what players in this group are allowed to do.
   * @noSelf
   */
  export interface LuaPermissionGroup {
    /**
     * Adds the given player to this group.
     * @returns Whether the player was added.
     */
    add_player(player: PlayerIdentification): boolean
    /**
     * Removes the given player from this group.
     * @returns Whether the player was removed.
     */
    remove_player(player: PlayerIdentification): boolean
    /**
     * Whether this group allows the given action.
     * @param action The action in question.
     */
    allows_action(action: defines.input_action): boolean
    /**
     * Sets whether this group allows the performance the given action.
     * @param action The action in question.
     * @param allow_action Whether to allow the specified action.
     * @returns Whether the value was successfully applied.
     */
    set_allows_action(action: defines.input_action, allow_action: boolean): boolean
    /**
     * Destroys this group.
     * @returns Whether the group was successfully destroyed.
     */
    destroy(): boolean
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * The name of this group.
     *
     * Setting the name to `nil` or an empty string sets the name to the default value.
     */
    name: string | nil
    /**
     * The players in this group.
     */
    readonly players: LuaPlayer[]
    /**
     * The group ID.
     */
    readonly group_id: uint
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaPermissionGroup"
  }
  /**
   * All permission groups.
   * @noSelf
   */
  export interface LuaPermissionGroups {
    /**
     * Creates a new permission group.
     * @returns `nil` if the calling player doesn't have permission to make groups.
     */
    create_group(name?: string): LuaPermissionGroup | nil
    /**
     * Gets the permission group with the given name or group ID.
     * @returns `nil` if there is no matching group.
     */
    get_group(group: string | uint): LuaPermissionGroup | nil
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * All of the permission groups.
     */
    readonly groups: LuaPermissionGroup[]
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaPermissionGroups"
  }
  /**
   * A player in the game. Pay attention that a player may or may not have a character, which is the {@link LuaEntity} of the little guy running around the world doing things.
   * @noSelf
   */
  export interface LuaPlayer extends LuaControl {
    /**
     * Setup the screen to be shown when the game is finished.
     * @param message Message to be shown.
     * @param file Path to image to be shown.
     */
    set_ending_screen_data(message: LocalisedString, file?: string): void
    /**
     * Print text to the chat console.
     *
     * By default, messages that are identical to a message sent in the last 60 ticks are not printed again.
     */
    print(message: LocalisedString, print_settings?: (Color | ColorArray) | PrintSettings): void
    /**
     * Clear the chat console.
     */
    clear_console(): void
    /**
     * Get the current goal description, as a localised string.
     */
    get_goal_description(): LocalisedString
    /**
     * Set the text in the goal window (top left).
     * @param text The text to display. Lines can be delimited with `\n`. Passing an empty string or omitting this parameter entirely will make the goal window disappear.
     * @param only_update When `true`, won't play the "goal updated" sound.
     */
    set_goal_description(text?: LocalisedString, only_update?: boolean): void
    /**
     * Set the controller type of the player.
     *
     * Setting a player to {@link defines.controllers.editor} auto promotes the player to admin and enables cheat mode. Setting a player to {@link defines.controllers.editor} also requires the calling player be an admin.
     */
    set_controller(params: {
      /**
       * Which controller to use.
       */
      readonly type: defines.controllers
      /**
       * Entity to control. Mandatory when `type` is {@link defines.controllers.character}, ignored otherwise.
       */
      readonly character?: LuaEntity
      /**
       * List of waypoints for the cutscene controller. This parameter is mandatory when `type` is {@link defines.controllers.cutscene}.
       */
      readonly waypoints?: CutsceneWaypoint
      /**
       * If specified and `type` is {@link defines.controllers.cutscene}, the cutscene will start at this position. If not given the start position will be the player position.
       */
      readonly start_position?: MapPosition | MapPositionArray
      /**
       * If specified and `type` is {@link defines.controllers.cutscene}, the cutscene will start at this zoom level. If not given the start zoom will be the players zoom.
       */
      readonly start_zoom?: double
      /**
       * If specified and `type` is {@link defines.controllers.cutscene}, it is the time in ticks it will take for the camera to pan from the final waypoint back to the starting position. If not given the camera will not pan back to the start position/zoom.
       */
      readonly final_transition_time?: uint
      /**
       * If specified and `type` is {@link defines.controllers.cutscene}, the game will switch to chart-mode (map zoomed out) rendering when the zoom level is less than this value.
       */
      readonly chart_mode_cutoff?: double
    }): void
    /**
     * Start/end wire dragging at the specified location, wire type is based on the cursor contents
     * @returns `true` if the action did something
     */
    drag_wire(params: {
      /**
       * Position at which cursor was clicked. Used only to decide which side of arithmetic combinator, decider combinator or power switch is to be connected. Entity itself to be connected is based on the player's selected entity.
       */
      readonly position: MapPosition | MapPositionArray
    }): boolean
    /**
     * Disable recipe groups.
     */
    disable_recipe_groups(): void
    /**
     * Enable recipe groups.
     */
    enable_recipe_groups(): void
    /**
     * Disable recipe subgroups.
     */
    disable_recipe_subgroups(): void
    /**
     * Enable recipe subgroups.
     */
    enable_recipe_subgroups(): void
    /**
     * Print entity statistics to the player's console.
     * @param entities Entity prototypes to get statistics for. If not specified or empty, display statistics for all entities.
     */
    print_entity_statistics(entities?: readonly string[]): void
    /**
     * Print construction robot job counts to the players console.
     */
    print_robot_jobs(): void
    /**
     * Print LuaObject counts per mod.
     */
    print_lua_object_statistics(): void
    /**
     * Logs a dictionary of chunks -> active entities for the surface this player is on.
     */
    log_active_entity_chunk_counts(): void
    /**
     * Logs a dictionary of active entities -> count for the surface this player is on.
     */
    log_active_entity_counts(): void
    /**
     * Unlock the achievements of the given player. This has any effect only when this is the local player, the achievement isn't unlocked so far and the achievement is of the type "achievement".
     * @param name name of the achievement to unlock
     */
    unlock_achievement(name: string): void
    /**
     * Invokes the "clear cursor" action on the player as if the user pressed it.
     *
     * ## Raised events
     * - {@link OnPlayerCursorStackChangedEvent on_player_cursor_stack_changed}? _current_tick_ Raised when the cursor was successfully cleared.
     * @returns Whether the cursor is now empty.
     */
    clear_cursor(): boolean
    /**
     * Creates and attaches a character entity to this player.
     *
     * The player must not have a character already connected and must be online (see {@link LuaPlayer#connected LuaPlayer::connected}).
     * @param character The character to create else the default is used.
     * @returns Whether the character was created.
     */
    create_character(character?: string): boolean
    /**
     * Adds an alert to this player for the given entity of the given alert type.
     */
    add_alert(entity: LuaEntity, type: defines.alert_type): void
    /**
     * Adds a custom alert to this player.
     * @param entity If the alert is clicked, the map will open at the position of this entity.
     */
    add_custom_alert(entity: LuaEntity, icon: SignalID, message: LocalisedString, show_on_map: boolean): void
    /**
     * Removes all alerts matching the given filters or if an empty filters table is given all alerts are removed.
     */
    remove_alert(params: {
      readonly entity?: LuaEntity
      readonly prototype?: LuaEntityPrototype | string
      readonly position?: MapPosition | MapPositionArray
      readonly type?: defines.alert_type
      readonly surface?: SurfaceIdentification
      readonly icon?: SignalID
      readonly message?: LocalisedString
    }): void
    /**
     * Get all alerts matching the given filters, or all alerts if no filters are given.
     * @returns A mapping of surface index to an array of arrays of {@link Alert alerts} indexed by the {@link defines.alert_type alert type}.
     */
    get_alerts(params: {
      readonly entity?: LuaEntity
      readonly prototype?: LuaEntityPrototype
      readonly position?: MapPosition | MapPositionArray
      readonly type?: defines.alert_type
      readonly surface?: SurfaceIdentification
    }): Record<uint, Record<defines.alert_type, Alert[]>>
    /**
     * Mutes alerts for the given alert category.
     * @returns Whether the alert type was muted (false if it was already muted).
     */
    mute_alert(alert_type: defines.alert_type): boolean
    /**
     * Unmutes alerts for the given alert category.
     * @returns Whether the alert type was unmuted (false if it was wasn't muted).
     */
    unmute_alert(alert_type: defines.alert_type): boolean
    /**
     * If the given alert type is currently muted.
     */
    is_alert_muted(alert_type: defines.alert_type): boolean
    /**
     * Enables alerts for the given alert category.
     * @returns Whether the alert type was enabled (false if it was already enabled).
     */
    enable_alert(alert_type: defines.alert_type): boolean
    /**
     * Disables alerts for the given alert category.
     * @returns Whether the alert type was disabled (false if it was already disabled).
     */
    disable_alert(alert_type: defines.alert_type): boolean
    /**
     * If the given alert type is currently enabled.
     */
    is_alert_enabled(alert_type: defines.alert_type): boolean
    /**
     * Invokes the "smart pipette" action on the player as if the user pressed it.
     *
     * ## Raised events
     * - {@link OnPlayerPipetteEvent on_player_pipette}? _instantly_ Raised if the entity was successfully pipetted.
     * @returns Whether the smart pipette found something to place.
     */
    pipette_entity(entity: string | LuaEntity | LuaEntityPrototype): boolean
    /**
     * Checks if this player can build the given entity at the given location on the surface the player is on.
     */
    can_place_entity(params: {
      /**
       * Name of the entity to check.
       */
      readonly name: string
      /**
       * Where the entity would be placed.
       */
      readonly position: MapPosition | MapPositionArray
      /**
       * Direction the entity would be placed. Defaults to `north`.
       */
      readonly direction?: defines.direction
    }): boolean
    /**
     * Checks if this player can build what ever is in the cursor on the surface the player is on.
     */
    can_build_from_cursor(params: {
      /**
       * Where the entity would be placed
       */
      readonly position: MapPosition | MapPositionArray
      /**
       * Direction the entity would be placed
       */
      readonly direction?: defines.direction
      /**
       * If alt build should be used instead of normal build. Defaults to normal.
       */
      readonly alt?: boolean
      /**
       * The size for building terrain if building terrain. Defaults to 2.
       */
      readonly terrain_building_size?: uint
      /**
       * If chunks covered by fog-of-war are skipped.
       */
      readonly skip_fog_of_war?: boolean
    }): boolean
    /**
     * Builds whatever is in the cursor on the surface the player is on. The cursor stack will automatically be reduced as if the player built normally.
     *
     * ## Raised events
     * - {@link OnPreBuildEvent on_pre_build}? _instantly_ Raised if the cursor was successfully built.
     * - {@link OnBuiltEntityEvent on_built_entity}? _instantly_ Raised if the cursor was successfully built.
     */
    build_from_cursor(params: {
      /**
       * Where the entity would be placed
       */
      readonly position: MapPosition | MapPositionArray
      /**
       * Direction the entity would be placed
       */
      readonly direction?: defines.direction
      /**
       * If alt build should be used instead of normal build. Defaults to normal.
       */
      readonly alt?: boolean
      /**
       * The size for building terrain if building terrain. Defaults to 2.
       */
      readonly terrain_building_size?: uint
      /**
       * If chunks covered by fog-of-war are skipped.
       */
      readonly skip_fog_of_war?: boolean
    }): void
    /**
     * Uses the current item in the cursor if it's a capsule or does nothing if not.
     * @param position Where the item would be used.
     */
    use_from_cursor(position: MapPosition | MapPositionArray): void
    /**
     * Play a sound for this player.
     *
     * The sound is not played if its location is not {@link LuaForce#chart charted} for this player.
     */
    play_sound(params: {
      /**
       * The sound to play.
       */
      readonly path: SoundPath
      /**
       * Where the sound should be played. If not given, it's played at the current position of the player.
       */
      readonly position?: MapPosition | MapPositionArray
      /**
       * The volume of the sound to play. Must be between 0 and 1 inclusive.
       */
      readonly volume_modifier?: double
      /**
       * The volume mixer to play the sound through. Defaults to the default mixer for the given sound type.
       */
      readonly override_sound_type?: SoundType
    }): void
    /**
     * The characters associated with this player.
     *
     * The array will always be empty when the player is disconnected (see {@link LuaPlayer#connected LuaPlayer::connected}) regardless of there being associated characters.
     *
     * Characters associated with this player will be logged off when this player disconnects but are not controlled by any player.
     */
    get_associated_characters(): LuaEntity[]
    /**
     * Associates a character with this player.
     *
     * The character must not be connected to any controller.
     *
     * If this player is currently disconnected (see {@link LuaPlayer#connected LuaPlayer::connected}) the character will be immediately "logged off". See {@link LuaPlayer#get_associated_characters LuaPlayer::get_associated_characters} for more information.
     * @param character The character entity.
     */
    associate_character(character: LuaEntity): void
    /**
     * Disassociates a character from this player. This is functionally the same as setting {@link LuaEntity#associated_player LuaEntity::associated_player} to `nil`.
     *
     * See {@link LuaPlayer#get_associated_characters LuaPlayer::get_associated_characters} for more information.
     * @param character The character entity
     */
    disassociate_character(character: LuaEntity): void
    /**
     * Spawn flying text that is only visible to this player. Either `position` or `create_at_cursor` are required. When `create_at_cursor` is `true`, all parameters other than `text` are ignored.
     *
     * If no custom `speed` is set and the text is longer than 25 characters, its `time_to_live` and `speed` are dynamically adjusted to give players more time to read it.
     *
     * Local flying text is not saved, which means it will disappear after a save/load-cycle.
     */
    create_local_flying_text(params: {
      /**
       * The flying text to show.
       */
      readonly text: LocalisedString
      /**
       * The location on the map at which to show the flying text.
       */
      readonly position?: MapPosition | MapPositionArray
      /**
       * If `true`, the flying text is created at the player's cursor. Defaults to `false`.
       */
      readonly create_at_cursor?: boolean
      /**
       * The color of the flying text. Defaults to white text.
       */
      readonly color?: Color | ColorArray
      /**
       * The amount of ticks that the flying text will be shown for. Defaults to `80`.
       */
      readonly time_to_live?: uint
      /**
       * The speed at which the text rises upwards in tiles/second. Can't be a negative value.
       */
      readonly speed?: double
    }): void
    /**
     * Gets the quick bar filter for the given slot or `nil`.
     * @param index The slot index. 1 for the first slot of page one, 2 for slot two of page one, 11 for the first slot of page 2, etc.
     */
    get_quick_bar_slot(index: uint): LuaItemPrototype | nil
    /**
     * Sets the quick bar filter for the given slot. If a {@link LuaItemStack} is provided, the slot will be set to that particular item instance if it has extra data, for example a specific blueprint or spidertron remote.
     * @param index The slot index. 1 for the first slot of page one, 2 for slot two of page one, 11 for the first slot of page 2, etc.
     * @param filter The filter or `nil` to clear it.
     */
    set_quick_bar_slot(index: uint, filter: LuaItemStack | ItemPrototypeIdentification | nil): void
    /**
     * Gets which quick bar page is being used for the given screen page or `nil` if not known.
     * @param index The screen page. Index 1 is the top row in the gui. Index can go beyond the visible number of bars on the screen to account for the interface config setting change.
     */
    get_active_quick_bar_page(index: uint): uint8 | nil
    /**
     * Sets which quick bar page is being used for the given screen page.
     * @param screen_index The screen page. Index 1 is the top row in the gui. Index can go beyond the visible number of bars on the screen to account for the interface config setting change.
     * @param page_index The new quick bar page.
     */
    set_active_quick_bar_page(screen_index: uint, page_index: uint): void
    /**
     * Jump to the specified cutscene waypoint. Only works when the player is viewing a cutscene.
     */
    jump_to_cutscene_waypoint(waypoint_index: uint): void
    /**
     * Exit the current cutscene. Errors if not in a cutscene.
     */
    exit_cutscene(): void
    /**
     * Queues a request to open the map at the specified position. If the map is already opened, the request will simply set the position, scale, and entity to follow. Render mode change requests are processed before rendering of the next frame.
     * @param entity The entity to follow. If not given the current entity being followed will be cleared.
     */
    open_map(position: MapPosition | MapPositionArray, scale?: double, entity?: LuaEntity): void
    /**
     * Queues a request to zoom to world at the specified position. If the player is already zooming to world, the request will simply set the position, scale, and entity to follow. Render mode change requests are processed before rendering of the next frame.
     * @param entity The entity to follow. If not given the current entity being followed will be cleared.
     */
    zoom_to_world(position: MapPosition | MapPositionArray, scale?: double, entity?: LuaEntity): void
    /**
     * Queues request to switch to the normal game view from the map or zoom to world view. Render mode change requests are processed before rendering of the next frame.
     */
    close_map(): void
    /**
     * Is a custom Lua shortcut currently toggled?
     * @param prototype_name Prototype name of the custom shortcut.
     */
    is_shortcut_toggled(prototype_name: string): boolean
    /**
     * Is a custom Lua shortcut currently available?
     * @param prototype_name Prototype name of the custom shortcut.
     */
    is_shortcut_available(prototype_name: string): boolean
    /**
     * Toggle or untoggle a custom Lua shortcut
     * @param prototype_name Prototype name of the custom shortcut.
     */
    set_shortcut_toggled(prototype_name: string, toggled: boolean): void
    /**
     * Make a custom Lua shortcut available or unavailable.
     * @param prototype_name Prototype name of the custom shortcut.
     */
    set_shortcut_available(prototype_name: string, available: boolean): void
    /**
     * Asks the player if they would like to connect to the given server.
     *
     * This only does anything when used on a multiplayer peer. Single player and server hosts will ignore the prompt.
     */
    connect_to_server(params: {
      /**
       * The server (address:port) if port is not given the default Factorio port is used.
       */
      readonly address: string
      /**
       * The name of the server.
       */
      readonly name?: LocalisedString
      readonly description?: LocalisedString
      /**
       * The password if different from the one used to join this game. Note, if the current password is not empty but the one required to join the new server is an empty string should be given for this field.
       */
      readonly password?: string
    }): void
    /**
     * Toggles this player into or out of the map editor. Does nothing if this player isn't an admin or if the player doesn't have permission to use the map editor.
     *
     * ## Raised events
     * - {@link OnPrePlayerToggledMapEditorEvent on_pre_player_toggled_map_editor}? _instantly_ Raised if the map editor was successfully toggled.
     * - {@link OnPlayerToggledMapEditorEvent on_player_toggled_map_editor}? _instantly_ Raised if the map editor was successfully toggled.
     */
    toggle_map_editor(): void
    /**
     * Requests a translation for the given localised string. If the request is successful, the {@link OnStringTranslatedEvent on_string_translated} event will be fired with the results.
     *
     * Does nothing if this player is not connected (see {@link LuaPlayer#connected LuaPlayer::connected}).
     *
     * ## Raised events
     * - {@link OnStringTranslatedEvent on_string_translated}? _future_tick_ Raised if the request was successfully sent.
     * @returns The unique ID for the requested translation.
     */
    request_translation(localised_string: LocalisedString): uint | nil
    /**
     * Requests translation for the given set of localised strings. If the request is successful, a {@link OnStringTranslatedEvent on_string_translated} event will be fired for each string with the results.
     *
     * Does nothing if this player is not connected (see {@link LuaPlayer#connected LuaPlayer::connected}).
     *
     * ## Raised events
     * - {@link OnStringTranslatedEvent on_string_translated}? _future_tick_ Raised if the request was successfully sent.
     * @returns The unique IDs for the requested translations.
     */
    request_translations(localised_strings: readonly LocalisedString[]): uint[] | nil
    /**
     * Gets the filter for this map editor infinity filters at the given index or `nil` if the filter index doesn't exist or is empty.
     * @param index The index to get.
     */
    get_infinity_inventory_filter(index: uint): InfinityInventoryFilter | nil
    /**
     * Sets the filter for this map editor infinity filters at the given index.
     * @param index The index to set.
     * @param filter The new filter or `nil` to clear the filter.
     */
    set_infinity_inventory_filter(index: uint, filter: InfinityInventoryFilter | nil): void
    /**
     * Clears all recipe notifications for this player.
     */
    clear_recipe_notifications(): void
    /**
     * Adds the given recipe to the list of recipe notifications for this player.
     * @param recipe Name of the recipe prototype to add.
     */
    add_recipe_notification(recipe: string): void
    /**
     * Adds the given blueprint to this player's clipboard queue.
     * @param blueprint The blueprint to add.
     */
    add_to_clipboard(blueprint: LuaItemStack): void
    /**
     * Gets a copy of the currently selected blueprint in the clipboard queue into the player's cursor, as if the player activated Paste.
     */
    activate_paste(): void
    /**
     * Starts selection with selection tool from the specified position. Does nothing if the players cursor is not a selection tool.
     * @param position The position to start selection from.
     * @param selection_mode The type of selection to start.
     */
    start_selection(
      position: MapPosition | MapPositionArray,
      selection_mode: "select" | "alternative-select" | "reverse-select",
    ): void
    /**
     * Clears the players selection tool selection position.
     */
    clear_selection(): void
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * The character attached to this player, if any. Returns `nil` when the player is disconnected (see {@link LuaPlayer#connected LuaPlayer::connected}).
     */
    character?: LuaEntity
    /**
     * When in a cutscene; the character this player would be using once the cutscene is over, if any. Returns `nil` when the player is disconnected (see {@link LuaPlayer#connected LuaPlayer::connected}).
     */
    readonly cutscene_character: LuaEntity | nil
    /**
     * This player's index in {@link LuaGameScript#players LuaGameScript::players} (unique ID). It is assigned when a player is created, and remains so (even when the player is not {@link LuaPlayer#connected connected}) until the player is irreversibly {@link OnPlayerRemovedEvent removed}. Indexes of removed players can be reused.
     */
    readonly index: PlayerIndex
    readonly gui: LuaGui
    /**
     * `true` if the player opened itself. I.e. if they opened the character or god-controller GUI.
     */
    readonly opened_self: boolean
    readonly controller_type: defines.controllers
    /**
     * The stashed controller type, if any. This is mainly useful when a player is in the map editor.
     */
    readonly stashed_controller_type?: defines.controllers
    /**
     * The player's game view settings.
     */
    game_view_settings: GameViewSettings
    /**
     * `true` if the minimap is visible.
     */
    minimap_enabled: boolean
    /**
     * The color associated with the player. This will be used to tint the player's character as well as their buildings and vehicles.
     */
    get color(): Color
    set color(value: Color | ColorArray)
    /**
     * The color used when this player talks in game.
     */
    get chat_color(): Color
    set chat_color(value: Color | ColorArray)
    /**
     * The player's username.
     */
    readonly name: string
    /**
     * The tag that is shown after the player in chat and on the map.
     */
    tag: string
    /**
     * `true` if the player is currently connected to the game.
     */
    readonly connected: boolean
    /**
     * `true` if the player is an admin.
     *
     * Trying to change player admin status from the console when you aren't an admin does nothing.
     */
    admin: boolean
    /**
     * The source entity used during entity settings copy-paste, if any.
     */
    readonly entity_copy_source?: LuaEntity
    /**
     * How many ticks since the last action of this player
     */
    readonly afk_time: uint
    /**
     * How many ticks did this player spend playing this save (all sessions combined)
     */
    readonly online_time: uint
    /**
     * At what tick this player was last online.
     */
    readonly last_online: uint
    /**
     * The permission group this player is part of, if any.
     */
    permission_group?: LuaPermissionGroup
    /**
     * The current per-player settings for the this player, indexed by prototype name. Returns the same structure as {@link LuaSettings#get_player_settings LuaSettings::get_player_settings}. This table becomes invalid if its associated player does.
     *
     * Even though this attribute is marked as read-only, individual settings can be changed by overwriting their {@link ModSetting} table. Mods can only change their own settings. Using the in-game console, all player settings can be changed.
     * @example
     * -- Change the value of the "active_lifestyle" setting
     * player.mod_settings["active_lifestyle"] = {value = true}
     */
    readonly mod_settings: LuaCustomTable<string, ModSetting>
    /**
     * The number of ticks until this player will respawn. `nil` if this player is not waiting to respawn.
     *
     * Set to `nil` to immediately respawn the player.
     *
     * Set to any positive value to trigger the respawn state for this player.
     */
    ticks_to_respawn?: uint
    /**
     * The display resolution for this player.
     *
     * During {@link OnPlayerCreatedEvent on_player_created}, this attribute will always return a resolution of `{width=1920, height=1080}`. To get the actual resolution, listen to the {@link OnPlayerDisplayResolutionChangedEvent on_player_display_resolution_changed} event raised shortly afterwards.
     */
    readonly display_resolution: DisplayResolution
    /**
     * The display scale for this player.
     *
     * During {@link OnPlayerCreatedEvent on_player_created}, this attribute will always return a scale of `1`. To get the actual scale, listen to the {@link OnPlayerDisplayScaleChangedEvent on_player_display_scale_changed} event raised shortly afterwards.
     */
    readonly display_scale: double
    /**
     * The item stack containing a blueprint to be setup.
     */
    readonly blueprint_to_setup: LuaItemStack
    /**
     * The render mode of the player, like map or zoom to world. The render mode can be set using {@link LuaPlayer#open_map LuaPlayer::open_map}, {@link LuaPlayer#zoom_to_world LuaPlayer::zoom_to_world} and {@link LuaPlayer#close_map LuaPlayer::close_map}.
     */
    readonly render_mode: defines.render_mode
    /**
     * The input method of the player, mouse and keyboard or game controller
     */
    readonly input_method: defines.input_method
    /**
     * If `true`, zoom-to-world noise effect will be disabled and environmental sounds will be based on zoom-to-world view instead of position of player's character.
     */
    spectator: boolean
    /**
     * If `true`, circle and name of given player is rendered on the map/chart.
     */
    show_on_map: boolean
    /**
     * If items not included in this map editor infinity inventory filters should be removed.
     */
    remove_unfiltered_items: boolean
    /**
     * The filters for this map editor infinity inventory settings.
     */
    infinity_inventory_filters: InfinityInventoryFilter[]
    /**
     * If the main inventory will be auto sorted.
     */
    readonly auto_sort_main_inventory: boolean
    /**
     * The original location of the item in the cursor, marked with a hand. `nil` if the cursor stack is empty. When writing, the specified inventory slot must be empty and the cursor stack must not be empty.
     */
    hand_location?: ItemStackLocation
    /**
     * Returns true if the current item stack in cursor will be destroyed after clearing the cursor. Manually putting it into inventory still preserves the item. If the cursor stack is not one of the supported types (blueprint, blueprint-book, deconstruction-planner, upgrade-planner), write operation will be silently ignored.
     */
    cursor_stack_temporary: boolean
    /**
     * The wire drag target for this player, if any.
     */
    readonly drag_target?: DragTarget
    /**
     * The player's zoom-level.
     */
    set zoom(value: double)
    /**
     * The player's map view settings. To write to this, use a table containing the fields that should be changed.
     */
    set map_view_settings(value: MapViewSettings)
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaPlayer"
  }
  /**
   * An object used to measure script performance.
   *
   * Since performance is non-deterministic, these objects don't allow reading the raw time values from Lua. They can be used anywhere a {@link LocalisedString} is used, except for {@link LuaGuiElement#add LuaGuiElement::add}'s LocalisedString arguments, {@link LuaSurface#create_entity LuaSurface::create_entity}'s `text` argument, and {@link LuaEntity#add_market_item LuaEntity::add_market_item}.
   * @noSelf
   */
  export interface LuaProfiler {
    /**
     * Resets the clock, also restarting it.
     */
    reset(): void
    /**
     * Stops the clock.
     */
    stop(): void
    /**
     * Start the clock again, without resetting it.
     */
    restart(): void
    /**
     * Add the duration of another timer to this timer. Useful to reduce start/stop overhead when accumulating time onto many timers at once.
     *
     * If other is running, the time to now will be added.
     * @param other The timer to add to this timer.
     */
    add(other: LuaProfiler): void
    /**
     * Divides the current duration by a set value. Useful for calculating the average of many iterations.
     *
     * Does nothing if this isn't stopped.
     * @param number The number to divide by. Must be > 0.
     */
    divide(number: double): void
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaProfiler"
  }
  /**
   * Control behavior for programmable speakers.
   * @noSelf
   */
  export interface LuaProgrammableSpeakerControlBehavior extends LuaControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    circuit_parameters: ProgrammableSpeakerCircuitParameters
    get circuit_condition(): CircuitConditionDefinition
    set circuit_condition(value: CircuitConditionDefinitionWrite)
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaProgrammableSpeakerControlBehavior"
  }
  /**
   * An interface to send messages to the calling RCON interface through the global object named `rcon`.
   * @noSelf
   */
  export interface LuaRCON {
    /**
     * Print text to the calling RCON interface if any.
     */
    print(message: LocalisedString): void
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaRCON"
  }
  /**
   * Control behavior for rail chain signals.
   * @noSelf
   */
  export interface LuaRailChainSignalControlBehavior extends LuaControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    red_signal: SignalID
    orange_signal: SignalID
    green_signal: SignalID
    blue_signal: SignalID
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaRailChainSignalControlBehavior"
  }
  /**
   * A rail path.
   * @noSelf
   */
  export interface LuaRailPath {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * The total number of rails in this path.
     */
    readonly size: uint
    /**
     * The current rail index.
     */
    readonly current: uint
    /**
     * The total path distance.
     */
    readonly total_distance: double
    /**
     * The total distance traveled.
     */
    readonly travelled_distance: double
    /**
     * Array of the rails that this path travels over.
     */
    readonly rails: LuaCustomTable<uint, LuaEntity>
    /**
     * If the path goes from the front of the train
     */
    readonly is_front: boolean
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaRailPath"
  }
  /**
   * Control behavior for rail signals.
   * @noSelf
   */
  export interface LuaRailSignalControlBehavior extends LuaControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    red_signal: SignalID
    orange_signal: SignalID
    green_signal: SignalID
    /**
     * If this will close the rail signal based off the circuit condition.
     */
    close_signal: boolean
    /**
     * If this will read the rail signal state.
     */
    read_signal: boolean
    /**
     * The circuit condition when controlling the signal through the circuit network.
     */
    get circuit_condition(): CircuitConditionDefinition
    set circuit_condition(value: CircuitConditionDefinitionWrite)
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaRailSignalControlBehavior"
  }
  /**
   * A deterministic random generator independent from the core games random generator that can be seeded and re-seeded at will. This random generator can be saved and loaded and will maintain its state.
   *
   * Note this is entirely different from calling {@linkplain https://lua-api.factorio.com/latest/libraries.html math.random()} and you should be sure you actually want to use this over calling `math.random()`. If you aren't sure if you need to use this over calling `math.random()`, then you probably don't need to use this.
   * @example
   * -- Create a generator and use it to print a random number.
   * global.generator = game.create_random_generator()
   * game.player.print(global.generator())
   * @noSelf
   */
  export interface LuaRandomGenerator {
    /**
     * Re-seeds the random generator with the given value.
     *
     * Seeds that are close together will produce similar results. Seeds from 0 to 341 will produce the same results.
     */
    re_seed(seed: uint): void
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Generates a random number. If no parameters are given a number in the `[0, 1)` range is returned. If a single parameter is given a floored number in the [1, N] range is returned. If 2 parameters are given a floored number in the [N1, N2] range is returned.
     * @param lower Inclusive lower bound on the result
     * @param upper Inclusive upper bound on the result
     */
    (lower?: int, upper?: int): double
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaRandomGenerator"
  }
  /**
   * A crafting recipe. Recipes belong to forces (see {@link LuaForce}) because some recipes are unlocked by research, and researches are per-force.
   * @noSelf
   */
  export interface LuaRecipe {
    /**
     * Reload the recipe from the prototype.
     */
    reload(): void
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Name of the recipe. This can be different than the name of the result items as there could be more recipes to make the same item.
     */
    readonly name: string
    /**
     * Localised name of the recipe.
     */
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    /**
     * The prototype for this recipe.
     */
    readonly prototype: LuaRecipePrototype
    /**
     * Can the recipe be used?
     */
    enabled: boolean
    /**
     * Category of the recipe.
     */
    readonly category: string
    /**
     * The ingredients to this recipe.
     * @example
     * -- The ingredients of "advanced-oil-processing" would look like this:
     * {{type="fluid", name="crude-oil", amount=100}, {type="fluid", name="water", amount=50}}
     */
    readonly ingredients: Ingredient[]
    /**
     * The results/products of this recipe.
     * @example
     * -- The products of "advanced-oil-processing" would look like this:
     * {{type="fluid", name="heavy-oil", amount=25}, {type="fluid", name="light-oil", amount=45}, {type="fluid", name="petroleum-gas", amount=55}}
     */
    readonly products: Product[]
    /**
     * Is the recipe hidden? Hidden recipe don't show up in the crafting menu.
     */
    readonly hidden: boolean
    /**
     * Is the recipe hidden from flow statistics?
     */
    hidden_from_flow_stats: boolean
    /**
     * Energy required to execute this recipe. This directly affects the crafting time: Recipe's energy is exactly its crafting time in seconds, when crafted in an assembling machine with crafting speed exactly equal to one.
     */
    readonly energy: double
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    /**
     * Group of this recipe.
     */
    readonly group: LuaGroup
    /**
     * Subgroup of this recipe.
     */
    readonly subgroup: LuaGroup
    /**
     * The force that owns this recipe.
     */
    readonly force: LuaForce
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaRecipe"
  }
  /**
   * Prototype of a recipe category.
   * @noSelf
   */
  export interface LuaRecipeCategoryPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Name of this prototype.
     */
    readonly name: string
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaRecipeCategoryPrototype"
  }
  /**
   * A crafting recipe prototype.
   * @noSelf
   */
  export interface LuaRecipePrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * If this recipe prototype is enabled by default (enabled at the beginning of a game).
     */
    readonly enabled: boolean
    /**
     * Name of the recipe. This can be different than the name of the result items as there could be more recipes to make the same item.
     */
    readonly name: string
    /**
     * Localised name of the recipe.
     */
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    /**
     * Category of the recipe.
     */
    readonly category: string
    /**
     * The ingredients to this recipe.
     * @example
     * -- The ingredients of "advanced-oil-processing" would look like this
     * {{type="fluid", name="crude-oil", amount=100}, {type="fluid", name="water", amount=50}}
     */
    readonly ingredients: Ingredient[]
    /**
     * The results/products of this recipe.
     * @example
     * -- The products of "advanced-oil-processing" would look like this:
     * {{type="fluid", name="heavy-oil", amount=25}, {type="fluid", name="light-oil", amount=45}, {type="fluid", name="petroleum-gas", amount=55}}
     */
    readonly products: Product[]
    /**
     * The main product of this recipe, if any.
     */
    readonly main_product?: Product
    /**
     * Is the recipe hidden? Hidden recipe don't show up in the crafting menu.
     */
    readonly hidden: boolean
    /**
     * Is the recipe hidden from flow statistics (item/fluid production statistics)?
     */
    readonly hidden_from_flow_stats: boolean
    /**
     * Is the recipe hidden from player crafting? The recipe will still show up for selection in machines.
     */
    readonly hidden_from_player_crafting: boolean
    /**
     * Should this recipe always show "Made in" in the tooltip?
     */
    readonly always_show_made_in: boolean
    /**
     * Energy required to execute this recipe. This directly affects the crafting time: Recipe's energy is exactly its crafting time in seconds, when crafted in an assembling machine with crafting speed exactly equal to one.
     */
    readonly energy: double
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    /**
     * Group of this recipe.
     */
    readonly group: LuaGroup
    /**
     * Subgroup of this recipe.
     */
    readonly subgroup: LuaGroup
    /**
     * The multiplier used when this recipe is copied from an assembling machine to a requester chest. For each item in the recipe the item count * this value is set in the requester chest.
     */
    readonly request_paste_multiplier: uint
    /**
     * Used to determine how many extra items are put into an assembling machine before it's considered "full enough".
     */
    readonly overload_multiplier: uint
    /**
     * If the recipe is allowed to have the extra inserter overload bonus applied (4 * stack inserter stack size).
     */
    readonly allow_inserter_overload: boolean
    /**
     * If this recipe is enabled for the purpose of intermediate hand-crafting.
     */
    readonly allow_as_intermediate: boolean
    /**
     * If this recipe is allowed to use intermediate recipes when hand-crafting.
     */
    readonly allow_intermediates: boolean
    /**
     * If the amount is shown in the recipe tooltip title when the recipe produces more than 1 product.
     */
    readonly show_amount_in_title: boolean
    /**
     * If the products are always shown in the recipe tooltip.
     */
    readonly always_show_products: boolean
    /**
     * The emissions multiplier for this recipe.
     */
    readonly emissions_multiplier: double
    /**
     * Is this recipe allowed to be broken down for the recipe tooltip "Total raw" calculations?
     */
    readonly allow_decomposition: boolean
    /**
     * Is this recipe unlocks the result item(s) so they're shown in filter-select GUIs.
     */
    readonly unlock_results: boolean
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaRecipePrototype"
  }
  /**
   * Registry of interfaces between scripts. An interface is simply a dictionary mapping names to functions. A script or mod can then register an interface with {@link LuaRemote}, after that any script can call the registered functions, provided it knows the interface name and the desired function name. An instance of LuaRemote is available through the global object named `remote`.
   * @example
   * -- Will register a remote interface containing two functions. Later, it will call these functions through `remote`.
   * remote.add_interface("human interactor",
   *   {
   *     hello = function() game.player.print("Hi!") end,
   *     bye = function(name) game.player.print("Bye " .. name) end
   *   })
   * -- Some time later, possibly in a different mod...
   * remote.call("human interactor", "hello")
   * remote.call("human interactor", "bye", "dear reader")
   * @noSelf
   */
  export interface LuaRemote {
    /**
     * Add a remote interface.
     * @param name Name of the interface. If the name matches any existing interface, an error is thrown.
     * @param functions List of functions that are members of the new interface.
     */
    add_interface(name: string, functions: Record<string, (...args: any) => void>): void
    /**
     * Removes an interface with the given name.
     * @param name Name of the interface.
     * @returns Whether the interface was removed. `False` if the interface didn't exist.
     */
    remove_interface(name: string): boolean
    /**
     * Call a function of an interface.
     *
     * Providing an unknown interface or function name will result in a script error.
     * @param _interface Interface to look up `function` in.
     * @param _function Function name that belongs to the `interface`.
     * @param args Arguments to pass to the called function. Note that any arguments passed through the interface are a copy of the original, not a reference. Metatables are not retained, while references to LuaObjects stay intact.
     */
    call<T extends (...args: any) => any>(_interface: string, _function: string, ...args: Parameters<T>): ReturnType<T>
    call(_interface: string, _function: string, ...args: readonly Any[]): Any | nil
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * List of all registered interfaces. For each interface name, `remote.interfaces[name]` is a dictionary mapping the interface's registered functions to `true`.
     * @example
     * -- Assuming the "human interactor" interface is registered as above
     * game.player.print(tostring(remote.interfaces["human interactor"]["hello"]))        -- prints true
     * game.player.print(tostring(remote.interfaces["human interactor"]["nonexistent"]))  -- prints nil
     */
    readonly interfaces: Record<string, Record<string, true>>
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaRemote"
  }
  /**
   * Allows rendering of geometric shapes, text and sprites in the game world through the global object named `rendering`. Each render object is identified by an id that is universally unique for the lifetime of a whole game.
   *
   * If an entity target of an object is destroyed or changes surface, then the object is also destroyed.
   * @noSelf
   */
  export interface LuaRendering {
    /**
     * Create a line.
     * @returns Id of the render object
     * @example
     * -- Draw a white and 2 pixel wide line from {0, 0} to {2, 2}.
     * rendering.draw_line{surface = game.player.surface, from = {0, 0}, to = {2, 2}, color = {1, 1, 1}, width = 2}
     * @example
     * -- Draw a red and 3 pixel wide line from {0, 0} to {0, 5}. The line has 1 tile long dashes and gaps.
     * rendering.draw_line{surface = game.player.surface, from = {0, 0}, to = {0, 5}, color = {r = 1}, width = 3, gap_length = 1, dash_length = 1}
     */
    draw_line(params: {
      readonly color: Color | ColorArray
      /**
       * In pixels (32 per tile).
       */
      readonly width: float
      /**
       * Length of the gaps that this line has, in tiles. Default is 0.
       */
      readonly gap_length?: double
      /**
       * Length of the dashes that this line has. Used only if gap_length > 0. Default is 0.
       */
      readonly dash_length?: double
      /**
       * Starting offset to apply to dashes. Cannot be greater than dash_length + gap_length. Default is 0.
       */
      readonly dash_offset?: double
      readonly from: (MapPosition | MapPositionArray) | LuaEntity
      /**
       * Only used if `from` is a LuaEntity.
       */
      readonly from_offset?: Vector
      readonly to: (MapPosition | MapPositionArray) | LuaEntity
      /**
       * Only used if `to` is a LuaEntity.
       */
      readonly to_offset?: Vector
      readonly surface: SurfaceIdentification
      /**
       * In ticks. Defaults to living forever.
       */
      readonly time_to_live?: uint
      /**
       * The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
       */
      readonly forces?: readonly ForceIdentification[]
      /**
       * The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
       */
      readonly players?: readonly PlayerIdentification[]
      /**
       * If this is rendered to anyone at all. Defaults to true.
       */
      readonly visible?: boolean
      /**
       * If this should be drawn below sprites and entities.
       */
      readonly draw_on_ground?: boolean
      /**
       * If this should only be rendered in alt mode. Defaults to false.
       */
      readonly only_in_alt_mode?: boolean
    }): uint64
    /**
     * Create a text.
     *
     * Note that not all fonts support scaling.
     * @returns Id of the render object
     */
    draw_text(params: {
      /**
       * The text to display.
       */
      readonly text: LocalisedString
      readonly surface: SurfaceIdentification
      readonly target: (MapPosition | MapPositionArray) | LuaEntity
      /**
       * Only used if `target` is a LuaEntity.
       */
      readonly target_offset?: Vector
      readonly color: Color | ColorArray
      readonly scale?: double
      /**
       * Name of font to use. Defaults to the same font as flying-text.
       */
      readonly font?: string
      /**
       * In ticks. Defaults to living forever.
       */
      readonly time_to_live?: uint
      /**
       * The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
       */
      readonly forces?: readonly ForceIdentification[]
      /**
       * The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
       */
      readonly players?: readonly PlayerIdentification[]
      /**
       * If this is rendered to anyone at all. Defaults to true.
       */
      readonly visible?: boolean
      /**
       * If this should be drawn below sprites and entities. Rich text does not support this option.
       */
      readonly draw_on_ground?: boolean
      /**
       * The orientation of the text. Default is 0.
       */
      readonly orientation?: RealOrientation
      /**
       * Defaults to "left".
       */
      readonly alignment?: TextAlign
      /**
       * Defaults to "top".
       */
      readonly vertical_alignment?: VerticalTextAlign
      /**
       * Defaults to false. If true, the text scales with player zoom, resulting in it always being the same size on screen, and the size compared to the game world changes.
       */
      readonly scale_with_zoom?: boolean
      /**
       * If this should only be rendered in alt mode. Defaults to false.
       */
      readonly only_in_alt_mode?: boolean
      /**
       * If rich text rendering is enabled. Defaults to false.
       */
      readonly use_rich_text?: boolean
    }): uint64
    /**
     * Create a circle.
     * @returns Id of the render object
     */
    draw_circle(params: {
      readonly color: Color | ColorArray
      /**
       * In tiles.
       */
      readonly radius: double
      /**
       * Width of the outline, used only if filled = false. Value is in pixels (32 per tile). Defaults to 1.
       */
      readonly width?: float
      /**
       * If the circle should be filled. Defaults to false.
       */
      readonly filled?: boolean
      readonly target: (MapPosition | MapPositionArray) | LuaEntity
      /**
       * Only used if `target` is a LuaEntity.
       */
      readonly target_offset?: Vector
      readonly surface: SurfaceIdentification
      /**
       * In ticks. Defaults to living forever.
       */
      readonly time_to_live?: uint
      /**
       * The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
       */
      readonly forces?: readonly ForceIdentification[]
      /**
       * The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
       */
      readonly players?: readonly PlayerIdentification[]
      /**
       * If this is rendered to anyone at all. Defaults to true.
       */
      readonly visible?: boolean
      /**
       * If this should be drawn below sprites and entities.
       */
      readonly draw_on_ground?: boolean
      /**
       * If this should only be rendered in alt mode. Defaults to false.
       */
      readonly only_in_alt_mode?: boolean
    }): uint64
    /**
     * Create a rectangle.
     * @returns Id of the render object
     * @example
     * -- Draw a white and 1 pixel wide square outline with the corners {0, 0} and {2, 2}.
     * rendering.draw_rectangle{surface = game.player.surface, left_top = {0, 0}, right_bottom = {2, 2}, color = {1, 1, 1}}
     */
    draw_rectangle(params: {
      readonly color: Color | ColorArray
      /**
       * Width of the outline, used only if filled = false. Value is in pixels (32 per tile). Defaults to 1.
       */
      readonly width?: float
      /**
       * If the rectangle should be filled. Defaults to false.
       */
      readonly filled?: boolean
      readonly left_top: (MapPosition | MapPositionArray) | LuaEntity
      /**
       * Only used if `left_top` is a LuaEntity.
       */
      readonly left_top_offset?: Vector
      readonly right_bottom: (MapPosition | MapPositionArray) | LuaEntity
      /**
       * Only used if `right_bottom` is a LuaEntity.
       */
      readonly right_bottom_offset?: Vector
      readonly surface: SurfaceIdentification
      /**
       * In ticks. Defaults to living forever.
       */
      readonly time_to_live?: uint
      /**
       * The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
       */
      readonly forces?: readonly ForceIdentification[]
      /**
       * The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
       */
      readonly players?: readonly PlayerIdentification[]
      /**
       * If this is rendered to anyone at all. Defaults to true.
       */
      readonly visible?: boolean
      /**
       * If this should be drawn below sprites and entities.
       */
      readonly draw_on_ground?: boolean
      /**
       * If this should only be rendered in alt mode. Defaults to false.
       */
      readonly only_in_alt_mode?: boolean
    }): uint64
    /**
     * Create an arc.
     * @returns Id of the render object
     */
    draw_arc(params: {
      readonly color: Color | ColorArray
      /**
       * The radius of the outer edge of the arc, in tiles.
       */
      readonly max_radius: double
      /**
       * The radius of the inner edge of the arc, in tiles.
       */
      readonly min_radius: double
      /**
       * Where the arc starts, in radian.
       */
      readonly start_angle: float
      /**
       * The angle of the arc, in radian.
       */
      readonly angle: float
      readonly target: (MapPosition | MapPositionArray) | LuaEntity
      /**
       * Only used if `target` is a LuaEntity.
       */
      readonly target_offset?: Vector
      readonly surface: SurfaceIdentification
      /**
       * In ticks. Defaults to living forever.
       */
      readonly time_to_live?: uint
      /**
       * The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
       */
      readonly forces?: readonly ForceIdentification[]
      /**
       * The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
       */
      readonly players?: readonly PlayerIdentification[]
      /**
       * If this is rendered to anyone at all. Defaults to true.
       */
      readonly visible?: boolean
      /**
       * If this should be drawn below sprites and entities.
       */
      readonly draw_on_ground?: boolean
      /**
       * If this should only be rendered in alt mode. Defaults to false.
       */
      readonly only_in_alt_mode?: boolean
    }): uint64
    /**
     * Create a triangle mesh defined by a triangle strip.
     * @returns Id of the render object
     */
    draw_polygon(params: {
      readonly color: Color | ColorArray
      readonly vertices: readonly ScriptRenderVertexTarget[]
      /**
       * Acts like an offset applied to all vertices that are not set to an entity.
       */
      readonly target?: (MapPosition | MapPositionArray) | LuaEntity
      /**
       * Only used if `target` is a LuaEntity.
       */
      readonly target_offset?: Vector
      /**
       * The orientation applied to all vertices. Default is 0.
       */
      readonly orientation?: RealOrientation
      /**
       * If given, the vertices (that are not set to an entity) rotate so that it faces this target. Note that `orientation` is still applied.
       */
      readonly orientation_target?: (MapPosition | MapPositionArray) | LuaEntity
      /**
       * Only used if `orientation_target` is a LuaEntity.
       */
      readonly orientation_target_offset?: Vector
      /**
       * Only used if `orientation_target` is a LuaEntity.
       */
      readonly use_target_orientation?: boolean
      readonly surface: SurfaceIdentification
      /**
       * In ticks. Defaults to living forever.
       */
      readonly time_to_live?: uint
      /**
       * The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
       */
      readonly forces?: readonly ForceIdentification[]
      /**
       * The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
       */
      readonly players?: readonly PlayerIdentification[]
      /**
       * If this is rendered to anyone at all. Defaults to true.
       */
      readonly visible?: boolean
      /**
       * If this should be drawn below sprites and entities.
       */
      readonly draw_on_ground?: boolean
      /**
       * If this should only be rendered in alt mode. Defaults to false.
       */
      readonly only_in_alt_mode?: boolean
    }): uint64
    /**
     * Create a sprite.
     * @returns Id of the render object
     * @example
     * -- This will draw an iron plate icon at the character's feet. The sprite will move together with the character.
     * rendering.draw_sprite{sprite = "item.iron-plate", target = game.player.character, surface = game.player.surface}
     * @example
     * -- This will draw an iron plate icon at the character's head. The sprite will move together with the character.
     * rendering.draw_sprite{sprite = "item.iron-plate", target = game.player.character, target_offset = {0, -2}, surface = game.player.surface}
     */
    draw_sprite(params: {
      readonly sprite: SpritePath
      /**
       * The orientation of the sprite. Default is 0.
       */
      readonly orientation?: RealOrientation
      /**
       * Horizontal scale of the sprite. Default is 1.
       */
      readonly x_scale?: double
      /**
       * Vertical scale of the sprite. Default is 1.
       */
      readonly y_scale?: double
      readonly tint?: Color | ColorArray
      /**
       * Render layer of the sprite. Defaults to `"arrow"`.
       */
      readonly render_layer?: RenderLayer
      /**
       * If given, the sprite rotates so that it faces this target. Note that `orientation` is still applied to the sprite.
       */
      readonly orientation_target?: (MapPosition | MapPositionArray) | LuaEntity
      /**
       * Only used if `orientation_target` is a LuaEntity.
       */
      readonly orientation_target_offset?: Vector
      /**
       * Only used if `orientation_target` is a LuaEntity.
       */
      readonly use_target_orientation?: boolean
      /**
       * Offsets the center of the sprite if `orientation_target` is given. This offset will rotate together with the sprite.
       */
      readonly oriented_offset?: Vector
      /**
       * Center of the sprite.
       */
      readonly target: (MapPosition | MapPositionArray) | LuaEntity
      /**
       * Only used if `target` is a LuaEntity.
       */
      readonly target_offset?: Vector
      readonly surface: SurfaceIdentification
      /**
       * In ticks. Defaults to living forever.
       */
      readonly time_to_live?: uint
      /**
       * The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
       */
      readonly forces?: readonly ForceIdentification[]
      /**
       * The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
       */
      readonly players?: readonly PlayerIdentification[]
      /**
       * If this is rendered to anyone at all. Defaults to true.
       */
      readonly visible?: boolean
      /**
       * If this should only be rendered in alt mode. Defaults to false.
       */
      readonly only_in_alt_mode?: boolean
    }): uint64
    /**
     * Create a light.
     *
     * The base game uses the utility sprites `light_medium` and `light_small` for lights.
     * @returns Id of the render object
     */
    draw_light(params: {
      readonly sprite: SpritePath
      /**
       * The orientation of the light. Default is 0.
       */
      readonly orientation?: RealOrientation
      /**
       * Default is 1.
       */
      readonly scale?: float
      /**
       * Default is 1.
       */
      readonly intensity?: float
      /**
       * The minimum darkness at which this light is rendered. Default is 0.
       */
      readonly minimum_darkness?: float
      /**
       * If this light has the same orientation as the entity target, default is false. Note that `orientation` is still applied to the sprite.
       */
      readonly oriented?: boolean
      /**
       * Defaults to white (no tint).
       */
      readonly color?: Color | ColorArray
      /**
       * Center of the light.
       */
      readonly target: (MapPosition | MapPositionArray) | LuaEntity
      /**
       * Only used if `target` is a LuaEntity.
       */
      readonly target_offset?: Vector
      readonly surface: SurfaceIdentification
      /**
       * In ticks. Defaults to living forever.
       */
      readonly time_to_live?: uint
      /**
       * The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
       */
      readonly forces?: readonly ForceIdentification[]
      /**
       * The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
       */
      readonly players?: readonly PlayerIdentification[]
      /**
       * If this is rendered to anyone at all. Defaults to true.
       */
      readonly visible?: boolean
      /**
       * If this should only be rendered in alt mode. Defaults to false.
       */
      readonly only_in_alt_mode?: boolean
    }): uint64
    /**
     * Create an animation.
     * @returns Id of the render object
     */
    draw_animation(params: {
      /**
       * Name of an {@link import("factorio:prototype").AnimationPrototype AnimationPrototype}.
       */
      readonly animation: string
      /**
       * The orientation of the animation. Default is 0.
       */
      readonly orientation?: RealOrientation
      /**
       * Horizontal scale of the animation. Default is 1.
       */
      readonly x_scale?: double
      /**
       * Vertical scale of the animation. Default is 1.
       */
      readonly y_scale?: double
      readonly tint?: Color | ColorArray
      /**
       * Render layer of the animation. Defaults to `"arrow"`.
       */
      readonly render_layer?: RenderLayer
      /**
       * How many frames the animation goes forward per tick. Default is 1.
       */
      readonly animation_speed?: double
      /**
       * Offset of the animation in frames. Default is 0.
       */
      readonly animation_offset?: double
      /**
       * If given, the animation rotates so that it faces this target. Note that `orientation` is still applied to the animation.
       */
      readonly orientation_target?: (MapPosition | MapPositionArray) | LuaEntity
      /**
       * Only used if `orientation_target` is a LuaEntity.
       */
      readonly orientation_target_offset?: Vector
      /**
       * Only used if `orientation_target` is a LuaEntity.
       */
      readonly use_target_orientation?: boolean
      /**
       * Offsets the center of the animation if `orientation_target` is given. This offset will rotate together with the animation.
       */
      readonly oriented_offset?: Vector
      /**
       * Center of the animation.
       */
      readonly target: (MapPosition | MapPositionArray) | LuaEntity
      /**
       * Only used if `target` is a LuaEntity.
       */
      readonly target_offset?: Vector
      readonly surface: SurfaceIdentification
      /**
       * In ticks. Defaults to living forever.
       */
      readonly time_to_live?: uint
      /**
       * The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
       */
      readonly forces?: readonly ForceIdentification[]
      /**
       * The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
       */
      readonly players?: readonly PlayerIdentification[]
      /**
       * If this is rendered to anyone at all. Defaults to true.
       */
      readonly visible?: boolean
      /**
       * If this should only be rendered in alt mode. Defaults to false.
       */
      readonly only_in_alt_mode?: boolean
    }): uint64
    /**
     * Destroy the object with the given id. Does not error when the object is invalid.
     */
    destroy(id: uint64): void
    /**
     * Does a font with this name exist?
     */
    is_font_valid(font_name: string): boolean
    /**
     * Does a valid object with this id exist?
     */
    is_valid(id: uint64): boolean
    /**
     * Gets an array of all valid object ids.
     * @param mod_name If provided, get only the render objects created by this mod. An empty string (`""`) refers to all objects not belonging to a mod, such as those created using console commands.
     */
    get_all_ids(mod_name?: string): uint64[]
    /**
     * Destroys all render objects.
     * @param mod_name If provided, only the render objects created by this mod are destroyed. An empty string (`""`) refers to all objects not belonging to a mod, such as those created using console commands.
     */
    clear(mod_name?: string): void
    /**
     * Gets the type of the given object.
     */
    get_type(
      id: uint64,
    ): "text" | "line" | "circle" | "rectangle" | "arc" | "polygon" | "sprite" | "light" | "animation"
    /**
     * Reorder this object so that it is drawn in front of the already existing objects.
     */
    bring_to_front(id: uint64): void
    /**
     * Reorder this object so that it is drawn in the back of the already existing objects.
     */
    move_to_back(id: uint64): void
    /**
     * The surface the object with this id is rendered on.
     */
    get_surface(id: uint64): LuaSurface
    /**
     * Get the time to live of the object with this id. This will be 0 if the object does not expire.
     */
    get_time_to_live(id: uint64): uint
    /**
     * Set the time to live of the object with this id. Set to 0 if the object should not expire.
     */
    set_time_to_live(id: uint64, time_to_live: uint): void
    /**
     * Get the forces that the object with this id is rendered to or `nil` if visible to all forces.
     */
    get_forces(id: uint64): LuaForce[] | nil
    /**
     * Set the forces that the object with this id is rendered to.
     * @param forces Providing an empty array will set the object to be visible to all forces.
     */
    set_forces(id: uint64, forces: readonly ForceIdentification[]): void
    /**
     * Get the players that the object with this id is rendered to or `nil` if visible to all players.
     */
    get_players(id: uint64): LuaPlayer[] | nil
    /**
     * Set the players that the object with this id is rendered to.
     * @param players Providing an empty array will set the object to be visible to all players.
     */
    set_players(id: uint64, players: readonly PlayerIdentification[]): void
    /**
     * Get whether this is rendered to anyone at all.
     */
    get_visible(id: uint64): boolean
    /**
     * Set whether this is rendered to anyone at all.
     */
    set_visible(id: uint64, visible: boolean): void
    /**
     * Get whether this is being drawn on the ground, under most entities and sprites.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc or Polygon_
     */
    get_draw_on_ground(id: uint64): boolean
    /**
     * Set whether this is being drawn on the ground, under most entities and sprites.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc or Polygon_
     */
    set_draw_on_ground(id: uint64, draw_on_ground: boolean): void
    /**
     * Get whether this is only rendered in alt-mode.
     */
    get_only_in_alt_mode(id: uint64): boolean
    /**
     * Set whether this is only rendered in alt-mode.
     */
    set_only_in_alt_mode(id: uint64, only_in_alt_mode: boolean): void
    /**
     * Get whether this uses the target orientation.
     * @returns `nil` if the object is not a sprite, polygon, or animation.
     */
    get_use_target_orientation(id: uint64): boolean | nil
    /**
     * Set whether this uses the target orientation.
     */
    set_use_target_orientation(id: uint64, use_target_orientation: boolean): void
    /**
     * Get the color or tint of the object with this id.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc, Polygon, Sprite, Light or Animation_
     * @returns `nil` if the object does not support color.
     */
    get_color(id: uint64): Color | nil
    /**
     * Set the color or tint of the object with this id. Does nothing if this object does not support color.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc, Polygon, Sprite, Light or Animation_
     */
    set_color(id: uint64, color: Color | ColorArray): void
    /**
     * Get the width of the object with this id. Value is in pixels (32 per tile).
     *
     * _Can only be used if this is Line, Circle or Rectangle_
     * @returns `nil` if the object does not support width.
     */
    get_width(id: uint64): float | nil
    /**
     * Set the width of the object with this id. Does nothing if this object does not support width. Value is in pixels (32 per tile).
     *
     * _Can only be used if this is Line, Circle or Rectangle_
     */
    set_width(id: uint64, width: float): void
    /**
     * Get from where the line with this id is drawn.
     *
     * _Can only be used if this is Line_
     * @returns `nil` if this object is not a line.
     */
    get_from(id: uint64): ScriptRenderTarget | nil
    /**
     * Set from where the line with this id is drawn. Does nothing if the object is not a line.
     *
     * _Can only be used if this is Line_
     */
    set_from(id: uint64, from: (MapPosition | MapPositionArray) | LuaEntity, from_offset?: Vector): void
    /**
     * Get where the line with this id is drawn to.
     *
     * _Can only be used if this is Line_
     * @returns `nil` if the object is not a line.
     */
    get_to(id: uint64): ScriptRenderTarget | nil
    /**
     * Set where the line with this id is drawn to. Does nothing if this object is not a line.
     *
     * _Can only be used if this is Line_
     */
    set_to(id: uint64, to: (MapPosition | MapPositionArray) | LuaEntity, to_offset?: Vector): void
    /**
     * Get the dash length of the line with this id.
     *
     * _Can only be used if this is Line_
     * @returns `nil` if the object is not a line.
     */
    get_dash_length(id: uint64): double | nil
    /**
     * Set the dash length of the line with this id. Does nothing if this object is not a line.
     *
     * _Can only be used if this is Line_
     */
    set_dash_length(id: uint64, dash_length: double): void
    /**
     * Get the length of the gaps in the line with this id.
     *
     * _Can only be used if this is Line_
     * @returns `nil` if the object is not a line.
     */
    get_gap_length(id: uint64): double | nil
    /**
     * Set the length of the gaps in the line with this id. Does nothing if this object is not a line.
     *
     * _Can only be used if this is Line_
     */
    set_gap_length(id: uint64, gap_length: double): void
    /**
     * Set the length of the dashes and the length of the gaps in the line with this id. Does nothing if this object is not a line.
     *
     * _Can only be used if this is Line_
     */
    set_dashes(id: uint64, dash_length: double, gap_length: double): void
    /**
     * Get where the object with this id is drawn.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Text, Circle, Arc, Polygon, Sprite, Light or Animation_
     * @returns `nil` if the object does not support target.
     */
    get_target(id: uint64): ScriptRenderTarget | nil
    /**
     * Set where the object with this id is drawn. Does nothing if this object does not support target.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Text, Circle, Arc, Polygon, Sprite, Light or Animation_
     */
    set_target(id: uint64, target: (MapPosition | MapPositionArray) | LuaEntity, target_offset?: Vector): void
    /**
     * Get the orientation of the object with this id.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Text, Polygon, Sprite, Light or Animation_
     * @returns `nil` if the object is not a text, polygon, sprite, light or animation.
     */
    get_orientation(id: uint64): RealOrientation | nil
    /**
     * Set the orientation of the object with this id. Does nothing if this object is not a text, polygon, sprite, light or animation.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Text, Polygon, Sprite, Light or Animation_
     */
    set_orientation(id: uint64, orientation: RealOrientation): void
    /**
     * Get the scale of the text or light with this id.
     *
     * _Can only be used if this is Text or Light_
     * @returns `nil` if the object is not a text or light.
     */
    get_scale(id: uint64): double | nil
    /**
     * Set the scale of the text or light with this id. Does nothing if this object is not a text or light.
     *
     * _Can only be used if this is Text or Light_
     */
    set_scale(id: uint64, scale: double): void
    /**
     * Get the text that is displayed by the text with this id.
     *
     * _Can only be used if this is Text_
     * @returns `nil` if the object is not a text.
     */
    get_text(id: uint64): LocalisedString | nil
    /**
     * Set the text that is displayed by the text with this id. Does nothing if this object is not a text.
     *
     * _Can only be used if this is Text_
     */
    set_text(id: uint64, text: LocalisedString): void
    /**
     * Get the font of the text with this id.
     *
     * _Can only be used if this is Text_
     * @returns `nil` if the object is not a text.
     */
    get_font(id: uint64): string | nil
    /**
     * Set the font of the text with this id. Does nothing if this object is not a text.
     *
     * _Can only be used if this is Text_
     */
    set_font(id: uint64, font: string): void
    /**
     * Get the alignment of the text with this id.
     *
     * _Can only be used if this is Text_
     * @returns `nil` if the object is not a text.
     */
    get_alignment(id: uint64): TextAlign | nil
    /**
     * Set the alignment of the text with this id. Does nothing if this object is not a text.
     *
     * _Can only be used if this is Text_
     */
    set_alignment(id: uint64, alignment: TextAlign): void
    /**
     * Get the vertical alignment of the text with this id.
     *
     * _Can only be used if this is Text_
     * @returns `nil` if the object is not a text.
     */
    get_vertical_alignment(id: uint64): VerticalTextAlign | nil
    /**
     * Set the vertical alignment of the text with this id. Does nothing if this object is not a text.
     *
     * _Can only be used if this is Text_
     */
    set_vertical_alignment(id: uint64, alignment: VerticalTextAlign): void
    /**
     * Get if the text with this id scales with player zoom.
     *
     * _Can only be used if this is Text_
     * @returns `nil` if the object is not a text.
     */
    get_scale_with_zoom(id: uint64): boolean | nil
    /**
     * Set if the text with this id scales with player zoom, resulting in it always being the same size on screen, and the size compared to the game world changes. Does nothing if this object is not a text.
     *
     * _Can only be used if this is Text_
     */
    set_scale_with_zoom(id: uint64, scale_with_zoom: boolean): void
    /**
     * Get if the text with this id parses rich text tags.
     *
     * _Can only be used if this is Text_
     * @returns `nil` if the object is not a text.
     */
    get_use_rich_text(id: uint64): boolean | nil
    /**
     * Set if the text with this id parses rich text tags.
     *
     * _Can only be used if this is Text_
     */
    set_use_rich_text(id: uint64, use_rich_text: boolean): void
    /**
     * Get if the circle or rectangle with this id is filled.
     *
     * _Can only be used if this is Circle or Rectangle_
     * @returns `nil` if the object is not a circle or rectangle.
     */
    get_filled(id: uint64): boolean | nil
    /**
     * Set if the circle or rectangle with this id is filled. Does nothing if this object is not a circle or rectangle.
     *
     * _Can only be used if this is Circle or Rectangle_
     */
    set_filled(id: uint64, filled: boolean): void
    /**
     * Get the radius of the circle with this id.
     *
     * _Can only be used if this is Circle_
     * @returns `nil` if the object is not a circle.
     */
    get_radius(id: uint64): double | nil
    /**
     * Set the radius of the circle with this id. Does nothing if this object is not a circle.
     *
     * _Can only be used if this is Circle_
     */
    set_radius(id: uint64, radius: double): void
    /**
     * Get where top left corner of the rectangle with this id is drawn.
     *
     * _Can only be used if this is Rectangle_
     * @returns `nil` if the object is not a rectangle.
     */
    get_left_top(id: uint64): ScriptRenderTarget | nil
    /**
     * Set where top left corner of the rectangle with this id is drawn. Does nothing if this object is not a rectangle.
     *
     * _Can only be used if this is Rectangle_
     */
    set_left_top(id: uint64, left_top: (MapPosition | MapPositionArray) | LuaEntity, left_top_offset?: Vector): void
    /**
     * Get where bottom right corner of the rectangle with this id is drawn.
     *
     * _Can only be used if this is Rectangle_
     * @returns `nil` if the object is not a rectangle.
     */
    get_right_bottom(id: uint64): ScriptRenderTarget | nil
    /**
     * Set where top bottom right of the rectangle with this id is drawn. Does nothing if this object is not a rectangle.
     *
     * _Can only be used if this is Rectangle_
     */
    set_right_bottom(
      id: uint64,
      right_bottom: (MapPosition | MapPositionArray) | LuaEntity,
      right_bottom_offset?: Vector,
    ): void
    /**
     * Set the corners of the rectangle with this id. Does nothing if this object is not a rectangle.
     *
     * _Can only be used if this is Rectangle_
     */
    set_corners(
      id: uint64,
      left_top: (MapPosition | MapPositionArray) | LuaEntity,
      left_top_offset: Vector,
      right_bottom: (MapPosition | MapPositionArray) | LuaEntity,
      right_bottom_offset: Vector,
    ): void
    /**
     * Get the radius of the outer edge of the arc with this id.
     *
     * _Can only be used if this is Arc_
     * @returns `nil` if the object is not a arc.
     */
    get_max_radius(id: uint64): double | nil
    /**
     * Set the radius of the outer edge of the arc with this id. Does nothing if this object is not a arc.
     *
     * _Can only be used if this is Arc_
     */
    set_max_radius(id: uint64, max_radius: double): void
    /**
     * Get the radius of the inner edge of the arc with this id.
     *
     * _Can only be used if this is Arc_
     * @returns `nil` if the object is not a arc.
     */
    get_min_radius(id: uint64): double | nil
    /**
     * Set the radius of the inner edge of the arc with this id. Does nothing if this object is not a arc.
     *
     * _Can only be used if this is Arc_
     */
    set_min_radius(id: uint64, min_radius: double): void
    /**
     * Get where the arc with this id starts.
     *
     * _Can only be used if this is Arc_
     * @returns Angle in radian. `nil` if the object is not a arc.
     */
    get_start_angle(id: uint64): float | nil
    /**
     * Set where the arc with this id starts. Does nothing if this object is not a arc.
     *
     * _Can only be used if this is Arc_
     * @param start_angle angle in radian
     */
    set_start_angle(id: uint64, start_angle: float): void
    /**
     * Get the angle of the arc with this id.
     *
     * _Can only be used if this is Arc_
     * @returns Angle in radian. `nil` if the object is not a arc.
     */
    get_angle(id: uint64): float | nil
    /**
     * Set the angle of the arc with this id. Does nothing if this object is not a arc.
     *
     * _Can only be used if this is Arc_
     * @param angle angle in radian
     */
    set_angle(id: uint64, angle: float): void
    /**
     * Get the vertices of the polygon with this id.
     *
     * _Can only be used if this is Polygon_
     * @returns `nil` if the object is not a polygon.
     */
    get_vertices(id: uint64): ScriptRenderTarget[] | nil
    /**
     * Set the vertices of the polygon with this id. Does nothing if this object is not a polygon.
     *
     * _Can only be used if this is Polygon_
     */
    set_vertices(id: uint64, vertices: readonly ScriptRenderVertexTarget[]): void
    /**
     * Get the sprite of the sprite or light with this id.
     *
     * _Can only be used if this is Sprite or Light_
     * @returns `nil` if the object is not a sprite or light.
     */
    get_sprite(id: uint64): SpritePath | nil
    /**
     * Set the sprite of the sprite or light with this id. Does nothing if this object is not a sprite or light.
     *
     * _Can only be used if this is Sprite or Light_
     */
    set_sprite(id: uint64, sprite: SpritePath): void
    /**
     * Get the horizontal scale of the sprite or animation with this id.
     *
     * _Can only be used if this is Sprite or Animation_
     * @returns `nil` if the object is not a sprite or animation.
     */
    get_x_scale(id: uint64): double | nil
    /**
     * Set the horizontal scale of the sprite or animation with this id. Does nothing if this object is not a sprite or animation.
     *
     * _Can only be used if this is Sprite or Animation_
     */
    set_x_scale(id: uint64, x_scale: double): void
    /**
     * Get the vertical scale of the sprite or animation with this id.
     *
     * _Can only be used if this is Sprite or Animation_
     * @returns `nil` if the object is not a sprite or animation.
     */
    get_y_scale(id: uint64): double | nil
    /**
     * Set the vertical scale of the sprite or animation with this id. Does nothing if this object is not a sprite or animation.
     *
     * _Can only be used if this is Sprite or Animation_
     */
    set_y_scale(id: uint64, y_scale: double): void
    /**
     * Get the render layer of the sprite or animation with this id.
     *
     * _Can only be used if this is Sprite or Animation_
     * @returns `nil` if the object is not a sprite or animation.
     */
    get_render_layer(id: uint64): RenderLayer | nil
    /**
     * Set the render layer of the sprite or animation with this id. Does nothing if this object is not a sprite or animation.
     *
     * _Can only be used if this is Sprite or Animation_
     */
    set_render_layer(id: uint64, render_layer: RenderLayer): void
    /**
     * Get the orientation_target of the object with this id. The object rotates so that it faces this target. Note that `orientation` is still applied to the object.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Polygon, Sprite or Animation_
     * @returns `nil` if no target or if this object is not a polygon, sprite, or animation.
     */
    get_orientation_target(id: uint64): ScriptRenderTarget | nil
    /**
     * Set the orientation_target of the object with this id. Does nothing if this object is not a polygon, sprite, or animation. The object rotates so that it faces this target. Note that `orientation` is still applied to the object. Set to `nil` if the object should not have an orientation_target.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Polygon, Sprite or Animation_
     */
    set_orientation_target(
      id: uint64,
      orientation_target: (MapPosition | MapPositionArray) | LuaEntity,
      orientation_target_offset?: Vector,
    ): void
    /**
     * Get the oriented_offset of the sprite or animation with this id. Offsets the center of the sprite or animation if `orientation_target` is given. This offset will rotate together with the sprite or animation.
     *
     * _Can only be used if this is Sprite or Animation_
     * @returns `nil` if this object is not a sprite or animation.
     */
    get_oriented_offset(id: uint64): Vector | nil
    /**
     * Set the oriented_offset of the sprite or animation with this id. Does nothing if this object is not a sprite or animation. Offsets the center of the sprite or animation if `orientation_target` is given. This offset will rotate together with the sprite or animation.
     *
     * _Can only be used if this is Sprite or Animation_
     */
    set_oriented_offset(id: uint64, oriented_offset: Vector): void
    /**
     * Get the intensity of the light with this id.
     *
     * _Can only be used if this is Light_
     * @returns `nil` if the object is not a light.
     */
    get_intensity(id: uint64): float | nil
    /**
     * Set the intensity of the light with this id. Does nothing if this object is not a light.
     *
     * _Can only be used if this is Light_
     */
    set_intensity(id: uint64, intensity: float): void
    /**
     * Get the minimum darkness at which the light with this id is rendered.
     *
     * _Can only be used if this is Light_
     * @returns `nil` if the object is not a light.
     */
    get_minimum_darkness(id: uint64): float | nil
    /**
     * Set the minimum darkness at which the light with this id is rendered. Does nothing if this object is not a light.
     *
     * _Can only be used if this is Light_
     */
    set_minimum_darkness(id: uint64, minimum_darkness: float): void
    /**
     * Get if the light with this id is rendered has the same orientation as the target entity. Note that `orientation` is still applied to the sprite.
     *
     * _Can only be used if this is Light_
     * @returns `nil` if the object is not a light.
     */
    get_oriented(id: uint64): boolean | nil
    /**
     * Set if the light with this id is rendered has the same orientation as the target entity. Does nothing if this object is not a light. Note that `orientation` is still applied to the sprite.
     *
     * _Can only be used if this is Light_
     */
    set_oriented(id: uint64, oriented: boolean): void
    /**
     * Get the animation prototype name of the animation with this id.
     *
     * _Can only be used if this is Animation_
     * @returns `nil` if the object is not an animation.
     */
    get_animation(id: uint64): string | nil
    /**
     * Set the animation prototype name of the animation with this id. Does nothing if this object is not an animation.
     *
     * _Can only be used if this is Animation_
     */
    set_animation(id: uint64, animation: string): void
    /**
     * Get the animation speed of the animation with this id.
     *
     * _Can only be used if this is Animation_
     * @returns Animation speed in frames per tick. `nil` if the object is not an animation.
     */
    get_animation_speed(id: uint64): double | nil
    /**
     * Set the animation speed of the animation with this id. Does nothing if this object is not an animation.
     *
     * _Can only be used if this is Animation_
     * @param animation_speed Animation speed in frames per tick.
     */
    set_animation_speed(id: uint64, animation_speed: double): void
    /**
     * Get the animation offset of the animation with this id.
     *
     * _Can only be used if this is Animation_
     * @returns Animation offset in frames. `nil` if the object is not an animation.
     */
    get_animation_offset(id: uint64): double | nil
    /**
     * Set the animation offset of the animation with this id. Does nothing if this object is not an animation.
     *
     * _Can only be used if this is Animation_
     * @param animation_offset Animation offset in frames.
     */
    set_animation_offset(id: uint64, animation_offset: double): void
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaRendering"
  }
  /**
   * @noSelf
   */
  export interface BaseRendering {
    /**
     * Create a line.
     * @returns Id of the render object
     * @example
     * -- Draw a white and 2 pixel wide line from {0, 0} to {2, 2}.
     * rendering.draw_line{surface = game.player.surface, from = {0, 0}, to = {2, 2}, color = {1, 1, 1}, width = 2}
     * @example
     * -- Draw a red and 3 pixel wide line from {0, 0} to {0, 5}. The line has 1 tile long dashes and gaps.
     * rendering.draw_line{surface = game.player.surface, from = {0, 0}, to = {0, 5}, color = {r = 1}, width = 3, gap_length = 1, dash_length = 1}
     */
    draw_line(params: {
      readonly color: Color | ColorArray
      /**
       * In pixels (32 per tile).
       */
      readonly width: float
      /**
       * Length of the gaps that this line has, in tiles. Default is 0.
       */
      readonly gap_length?: double
      /**
       * Length of the dashes that this line has. Used only if gap_length > 0. Default is 0.
       */
      readonly dash_length?: double
      /**
       * Starting offset to apply to dashes. Cannot be greater than dash_length + gap_length. Default is 0.
       */
      readonly dash_offset?: double
      readonly from: (MapPosition | MapPositionArray) | LuaEntity
      /**
       * Only used if `from` is a LuaEntity.
       */
      readonly from_offset?: Vector
      readonly to: (MapPosition | MapPositionArray) | LuaEntity
      /**
       * Only used if `to` is a LuaEntity.
       */
      readonly to_offset?: Vector
      readonly surface: SurfaceIdentification
      /**
       * In ticks. Defaults to living forever.
       */
      readonly time_to_live?: uint
      /**
       * The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
       */
      readonly forces?: readonly ForceIdentification[]
      /**
       * The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
       */
      readonly players?: readonly PlayerIdentification[]
      /**
       * If this is rendered to anyone at all. Defaults to true.
       */
      readonly visible?: boolean
      /**
       * If this should be drawn below sprites and entities.
       */
      readonly draw_on_ground?: boolean
      /**
       * If this should only be rendered in alt mode. Defaults to false.
       */
      readonly only_in_alt_mode?: boolean
    }): uint64
    /**
     * Create a text.
     *
     * Note that not all fonts support scaling.
     * @returns Id of the render object
     */
    draw_text(params: {
      /**
       * The text to display.
       */
      readonly text: LocalisedString
      readonly surface: SurfaceIdentification
      readonly target: (MapPosition | MapPositionArray) | LuaEntity
      /**
       * Only used if `target` is a LuaEntity.
       */
      readonly target_offset?: Vector
      readonly color: Color | ColorArray
      readonly scale?: double
      /**
       * Name of font to use. Defaults to the same font as flying-text.
       */
      readonly font?: string
      /**
       * In ticks. Defaults to living forever.
       */
      readonly time_to_live?: uint
      /**
       * The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
       */
      readonly forces?: readonly ForceIdentification[]
      /**
       * The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
       */
      readonly players?: readonly PlayerIdentification[]
      /**
       * If this is rendered to anyone at all. Defaults to true.
       */
      readonly visible?: boolean
      /**
       * If this should be drawn below sprites and entities. Rich text does not support this option.
       */
      readonly draw_on_ground?: boolean
      /**
       * The orientation of the text. Default is 0.
       */
      readonly orientation?: RealOrientation
      /**
       * Defaults to "left".
       */
      readonly alignment?: TextAlign
      /**
       * Defaults to "top".
       */
      readonly vertical_alignment?: VerticalTextAlign
      /**
       * Defaults to false. If true, the text scales with player zoom, resulting in it always being the same size on screen, and the size compared to the game world changes.
       */
      readonly scale_with_zoom?: boolean
      /**
       * If this should only be rendered in alt mode. Defaults to false.
       */
      readonly only_in_alt_mode?: boolean
      /**
       * If rich text rendering is enabled. Defaults to false.
       */
      readonly use_rich_text?: boolean
    }): uint64
    /**
     * Create a circle.
     * @returns Id of the render object
     */
    draw_circle(params: {
      readonly color: Color | ColorArray
      /**
       * In tiles.
       */
      readonly radius: double
      /**
       * Width of the outline, used only if filled = false. Value is in pixels (32 per tile). Defaults to 1.
       */
      readonly width?: float
      /**
       * If the circle should be filled. Defaults to false.
       */
      readonly filled?: boolean
      readonly target: (MapPosition | MapPositionArray) | LuaEntity
      /**
       * Only used if `target` is a LuaEntity.
       */
      readonly target_offset?: Vector
      readonly surface: SurfaceIdentification
      /**
       * In ticks. Defaults to living forever.
       */
      readonly time_to_live?: uint
      /**
       * The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
       */
      readonly forces?: readonly ForceIdentification[]
      /**
       * The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
       */
      readonly players?: readonly PlayerIdentification[]
      /**
       * If this is rendered to anyone at all. Defaults to true.
       */
      readonly visible?: boolean
      /**
       * If this should be drawn below sprites and entities.
       */
      readonly draw_on_ground?: boolean
      /**
       * If this should only be rendered in alt mode. Defaults to false.
       */
      readonly only_in_alt_mode?: boolean
    }): uint64
    /**
     * Create a rectangle.
     * @returns Id of the render object
     * @example
     * -- Draw a white and 1 pixel wide square outline with the corners {0, 0} and {2, 2}.
     * rendering.draw_rectangle{surface = game.player.surface, left_top = {0, 0}, right_bottom = {2, 2}, color = {1, 1, 1}}
     */
    draw_rectangle(params: {
      readonly color: Color | ColorArray
      /**
       * Width of the outline, used only if filled = false. Value is in pixels (32 per tile). Defaults to 1.
       */
      readonly width?: float
      /**
       * If the rectangle should be filled. Defaults to false.
       */
      readonly filled?: boolean
      readonly left_top: (MapPosition | MapPositionArray) | LuaEntity
      /**
       * Only used if `left_top` is a LuaEntity.
       */
      readonly left_top_offset?: Vector
      readonly right_bottom: (MapPosition | MapPositionArray) | LuaEntity
      /**
       * Only used if `right_bottom` is a LuaEntity.
       */
      readonly right_bottom_offset?: Vector
      readonly surface: SurfaceIdentification
      /**
       * In ticks. Defaults to living forever.
       */
      readonly time_to_live?: uint
      /**
       * The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
       */
      readonly forces?: readonly ForceIdentification[]
      /**
       * The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
       */
      readonly players?: readonly PlayerIdentification[]
      /**
       * If this is rendered to anyone at all. Defaults to true.
       */
      readonly visible?: boolean
      /**
       * If this should be drawn below sprites and entities.
       */
      readonly draw_on_ground?: boolean
      /**
       * If this should only be rendered in alt mode. Defaults to false.
       */
      readonly only_in_alt_mode?: boolean
    }): uint64
    /**
     * Create an arc.
     * @returns Id of the render object
     */
    draw_arc(params: {
      readonly color: Color | ColorArray
      /**
       * The radius of the outer edge of the arc, in tiles.
       */
      readonly max_radius: double
      /**
       * The radius of the inner edge of the arc, in tiles.
       */
      readonly min_radius: double
      /**
       * Where the arc starts, in radian.
       */
      readonly start_angle: float
      /**
       * The angle of the arc, in radian.
       */
      readonly angle: float
      readonly target: (MapPosition | MapPositionArray) | LuaEntity
      /**
       * Only used if `target` is a LuaEntity.
       */
      readonly target_offset?: Vector
      readonly surface: SurfaceIdentification
      /**
       * In ticks. Defaults to living forever.
       */
      readonly time_to_live?: uint
      /**
       * The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
       */
      readonly forces?: readonly ForceIdentification[]
      /**
       * The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
       */
      readonly players?: readonly PlayerIdentification[]
      /**
       * If this is rendered to anyone at all. Defaults to true.
       */
      readonly visible?: boolean
      /**
       * If this should be drawn below sprites and entities.
       */
      readonly draw_on_ground?: boolean
      /**
       * If this should only be rendered in alt mode. Defaults to false.
       */
      readonly only_in_alt_mode?: boolean
    }): uint64
    /**
     * Create a triangle mesh defined by a triangle strip.
     * @returns Id of the render object
     */
    draw_polygon(params: {
      readonly color: Color | ColorArray
      readonly vertices: readonly ScriptRenderVertexTarget[]
      /**
       * Acts like an offset applied to all vertices that are not set to an entity.
       */
      readonly target?: (MapPosition | MapPositionArray) | LuaEntity
      /**
       * Only used if `target` is a LuaEntity.
       */
      readonly target_offset?: Vector
      /**
       * The orientation applied to all vertices. Default is 0.
       */
      readonly orientation?: RealOrientation
      /**
       * If given, the vertices (that are not set to an entity) rotate so that it faces this target. Note that `orientation` is still applied.
       */
      readonly orientation_target?: (MapPosition | MapPositionArray) | LuaEntity
      /**
       * Only used if `orientation_target` is a LuaEntity.
       */
      readonly orientation_target_offset?: Vector
      /**
       * Only used if `orientation_target` is a LuaEntity.
       */
      readonly use_target_orientation?: boolean
      readonly surface: SurfaceIdentification
      /**
       * In ticks. Defaults to living forever.
       */
      readonly time_to_live?: uint
      /**
       * The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
       */
      readonly forces?: readonly ForceIdentification[]
      /**
       * The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
       */
      readonly players?: readonly PlayerIdentification[]
      /**
       * If this is rendered to anyone at all. Defaults to true.
       */
      readonly visible?: boolean
      /**
       * If this should be drawn below sprites and entities.
       */
      readonly draw_on_ground?: boolean
      /**
       * If this should only be rendered in alt mode. Defaults to false.
       */
      readonly only_in_alt_mode?: boolean
    }): uint64
    /**
     * Create a sprite.
     * @returns Id of the render object
     * @example
     * -- This will draw an iron plate icon at the character's feet. The sprite will move together with the character.
     * rendering.draw_sprite{sprite = "item.iron-plate", target = game.player.character, surface = game.player.surface}
     * @example
     * -- This will draw an iron plate icon at the character's head. The sprite will move together with the character.
     * rendering.draw_sprite{sprite = "item.iron-plate", target = game.player.character, target_offset = {0, -2}, surface = game.player.surface}
     */
    draw_sprite(params: {
      readonly sprite: SpritePath
      /**
       * The orientation of the sprite. Default is 0.
       */
      readonly orientation?: RealOrientation
      /**
       * Horizontal scale of the sprite. Default is 1.
       */
      readonly x_scale?: double
      /**
       * Vertical scale of the sprite. Default is 1.
       */
      readonly y_scale?: double
      readonly tint?: Color | ColorArray
      /**
       * Render layer of the sprite. Defaults to `"arrow"`.
       */
      readonly render_layer?: RenderLayer
      /**
       * If given, the sprite rotates so that it faces this target. Note that `orientation` is still applied to the sprite.
       */
      readonly orientation_target?: (MapPosition | MapPositionArray) | LuaEntity
      /**
       * Only used if `orientation_target` is a LuaEntity.
       */
      readonly orientation_target_offset?: Vector
      /**
       * Only used if `orientation_target` is a LuaEntity.
       */
      readonly use_target_orientation?: boolean
      /**
       * Offsets the center of the sprite if `orientation_target` is given. This offset will rotate together with the sprite.
       */
      readonly oriented_offset?: Vector
      /**
       * Center of the sprite.
       */
      readonly target: (MapPosition | MapPositionArray) | LuaEntity
      /**
       * Only used if `target` is a LuaEntity.
       */
      readonly target_offset?: Vector
      readonly surface: SurfaceIdentification
      /**
       * In ticks. Defaults to living forever.
       */
      readonly time_to_live?: uint
      /**
       * The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
       */
      readonly forces?: readonly ForceIdentification[]
      /**
       * The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
       */
      readonly players?: readonly PlayerIdentification[]
      /**
       * If this is rendered to anyone at all. Defaults to true.
       */
      readonly visible?: boolean
      /**
       * If this should only be rendered in alt mode. Defaults to false.
       */
      readonly only_in_alt_mode?: boolean
    }): uint64
    /**
     * Create a light.
     *
     * The base game uses the utility sprites `light_medium` and `light_small` for lights.
     * @returns Id of the render object
     */
    draw_light(params: {
      readonly sprite: SpritePath
      /**
       * The orientation of the light. Default is 0.
       */
      readonly orientation?: RealOrientation
      /**
       * Default is 1.
       */
      readonly scale?: float
      /**
       * Default is 1.
       */
      readonly intensity?: float
      /**
       * The minimum darkness at which this light is rendered. Default is 0.
       */
      readonly minimum_darkness?: float
      /**
       * If this light has the same orientation as the entity target, default is false. Note that `orientation` is still applied to the sprite.
       */
      readonly oriented?: boolean
      /**
       * Defaults to white (no tint).
       */
      readonly color?: Color | ColorArray
      /**
       * Center of the light.
       */
      readonly target: (MapPosition | MapPositionArray) | LuaEntity
      /**
       * Only used if `target` is a LuaEntity.
       */
      readonly target_offset?: Vector
      readonly surface: SurfaceIdentification
      /**
       * In ticks. Defaults to living forever.
       */
      readonly time_to_live?: uint
      /**
       * The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
       */
      readonly forces?: readonly ForceIdentification[]
      /**
       * The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
       */
      readonly players?: readonly PlayerIdentification[]
      /**
       * If this is rendered to anyone at all. Defaults to true.
       */
      readonly visible?: boolean
      /**
       * If this should only be rendered in alt mode. Defaults to false.
       */
      readonly only_in_alt_mode?: boolean
    }): uint64
    /**
     * Create an animation.
     * @returns Id of the render object
     */
    draw_animation(params: {
      /**
       * Name of an {@link import("factorio:prototype").AnimationPrototype AnimationPrototype}.
       */
      readonly animation: string
      /**
       * The orientation of the animation. Default is 0.
       */
      readonly orientation?: RealOrientation
      /**
       * Horizontal scale of the animation. Default is 1.
       */
      readonly x_scale?: double
      /**
       * Vertical scale of the animation. Default is 1.
       */
      readonly y_scale?: double
      readonly tint?: Color | ColorArray
      /**
       * Render layer of the animation. Defaults to `"arrow"`.
       */
      readonly render_layer?: RenderLayer
      /**
       * How many frames the animation goes forward per tick. Default is 1.
       */
      readonly animation_speed?: double
      /**
       * Offset of the animation in frames. Default is 0.
       */
      readonly animation_offset?: double
      /**
       * If given, the animation rotates so that it faces this target. Note that `orientation` is still applied to the animation.
       */
      readonly orientation_target?: (MapPosition | MapPositionArray) | LuaEntity
      /**
       * Only used if `orientation_target` is a LuaEntity.
       */
      readonly orientation_target_offset?: Vector
      /**
       * Only used if `orientation_target` is a LuaEntity.
       */
      readonly use_target_orientation?: boolean
      /**
       * Offsets the center of the animation if `orientation_target` is given. This offset will rotate together with the animation.
       */
      readonly oriented_offset?: Vector
      /**
       * Center of the animation.
       */
      readonly target: (MapPosition | MapPositionArray) | LuaEntity
      /**
       * Only used if `target` is a LuaEntity.
       */
      readonly target_offset?: Vector
      readonly surface: SurfaceIdentification
      /**
       * In ticks. Defaults to living forever.
       */
      readonly time_to_live?: uint
      /**
       * The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
       */
      readonly forces?: readonly ForceIdentification[]
      /**
       * The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
       */
      readonly players?: readonly PlayerIdentification[]
      /**
       * If this is rendered to anyone at all. Defaults to true.
       */
      readonly visible?: boolean
      /**
       * If this should only be rendered in alt mode. Defaults to false.
       */
      readonly only_in_alt_mode?: boolean
    }): uint64
    /**
     * Destroy the object with the given id. Does not error when the object is invalid.
     */
    destroy(id: uint64): void
    /**
     * Does a font with this name exist?
     */
    is_font_valid(font_name: string): boolean
    /**
     * Does a valid object with this id exist?
     */
    is_valid(id: uint64): boolean
    /**
     * Gets an array of all valid object ids.
     * @param mod_name If provided, get only the render objects created by this mod. An empty string (`""`) refers to all objects not belonging to a mod, such as those created using console commands.
     */
    get_all_ids(mod_name?: string): uint64[]
    /**
     * Destroys all render objects.
     * @param mod_name If provided, only the render objects created by this mod are destroyed. An empty string (`""`) refers to all objects not belonging to a mod, such as those created using console commands.
     */
    clear(mod_name?: string): void
    /**
     * Gets the type of the given object.
     */
    get_type(
      id: uint64,
    ): "text" | "line" | "circle" | "rectangle" | "arc" | "polygon" | "sprite" | "light" | "animation"
    /**
     * Reorder this object so that it is drawn in front of the already existing objects.
     */
    bring_to_front(id: uint64): void
    /**
     * Reorder this object so that it is drawn in the back of the already existing objects.
     */
    move_to_back(id: uint64): void
    /**
     * The surface the object with this id is rendered on.
     */
    get_surface(id: uint64): LuaSurface
    /**
     * Get the time to live of the object with this id. This will be 0 if the object does not expire.
     */
    get_time_to_live(id: uint64): uint
    /**
     * Set the time to live of the object with this id. Set to 0 if the object should not expire.
     */
    set_time_to_live(id: uint64, time_to_live: uint): void
    /**
     * Get the forces that the object with this id is rendered to or `nil` if visible to all forces.
     */
    get_forces(id: uint64): LuaForce[] | nil
    /**
     * Set the forces that the object with this id is rendered to.
     * @param forces Providing an empty array will set the object to be visible to all forces.
     */
    set_forces(id: uint64, forces: readonly ForceIdentification[]): void
    /**
     * Get the players that the object with this id is rendered to or `nil` if visible to all players.
     */
    get_players(id: uint64): LuaPlayer[] | nil
    /**
     * Set the players that the object with this id is rendered to.
     * @param players Providing an empty array will set the object to be visible to all players.
     */
    set_players(id: uint64, players: readonly PlayerIdentification[]): void
    /**
     * Get whether this is rendered to anyone at all.
     */
    get_visible(id: uint64): boolean
    /**
     * Set whether this is rendered to anyone at all.
     */
    set_visible(id: uint64, visible: boolean): void
    /**
     * Get whether this is only rendered in alt-mode.
     */
    get_only_in_alt_mode(id: uint64): boolean
    /**
     * Set whether this is only rendered in alt-mode.
     */
    set_only_in_alt_mode(id: uint64, only_in_alt_mode: boolean): void
    /**
     * Get whether this uses the target orientation.
     * @returns `nil` if the object is not a sprite, polygon, or animation.
     */
    get_use_target_orientation(id: uint64): boolean | nil
    /**
     * Set whether this uses the target orientation.
     */
    set_use_target_orientation(id: uint64, use_target_orientation: boolean): void
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaRendering"
  }
  /**
   * @noSelf
   */
  export interface TextRendering extends BaseRendering {
    /**
     * Get whether this is being drawn on the ground, under most entities and sprites.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc or Polygon_
     */
    get_draw_on_ground(id: uint64): boolean
    /**
     * Set whether this is being drawn on the ground, under most entities and sprites.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc or Polygon_
     */
    set_draw_on_ground(id: uint64, draw_on_ground: boolean): void
    /**
     * Get the color or tint of the object with this id.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc, Polygon, Sprite, Light or Animation_
     * @returns `nil` if the object does not support color.
     */
    get_color(id: uint64): Color | nil
    /**
     * Set the color or tint of the object with this id. Does nothing if this object does not support color.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc, Polygon, Sprite, Light or Animation_
     */
    set_color(id: uint64, color: Color | ColorArray): void
    /**
     * Get where the object with this id is drawn.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Text, Circle, Arc, Polygon, Sprite, Light or Animation_
     * @returns `nil` if the object does not support target.
     */
    get_target(id: uint64): ScriptRenderTarget | nil
    /**
     * Set where the object with this id is drawn. Does nothing if this object does not support target.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Text, Circle, Arc, Polygon, Sprite, Light or Animation_
     */
    set_target(id: uint64, target: (MapPosition | MapPositionArray) | LuaEntity, target_offset?: Vector): void
    /**
     * Get the orientation of the object with this id.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Text, Polygon, Sprite, Light or Animation_
     * @returns `nil` if the object is not a text, polygon, sprite, light or animation.
     */
    get_orientation(id: uint64): RealOrientation | nil
    /**
     * Set the orientation of the object with this id. Does nothing if this object is not a text, polygon, sprite, light or animation.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Text, Polygon, Sprite, Light or Animation_
     */
    set_orientation(id: uint64, orientation: RealOrientation): void
    /**
     * Get the scale of the text or light with this id.
     *
     * _Can only be used if this is Text or Light_
     * @returns `nil` if the object is not a text or light.
     */
    get_scale(id: uint64): double | nil
    /**
     * Set the scale of the text or light with this id. Does nothing if this object is not a text or light.
     *
     * _Can only be used if this is Text or Light_
     */
    set_scale(id: uint64, scale: double): void
    /**
     * Get the text that is displayed by the text with this id.
     *
     * _Can only be used if this is Text_
     * @returns `nil` if the object is not a text.
     */
    get_text(id: uint64): LocalisedString | nil
    /**
     * Set the text that is displayed by the text with this id. Does nothing if this object is not a text.
     *
     * _Can only be used if this is Text_
     */
    set_text(id: uint64, text: LocalisedString): void
    /**
     * Get the font of the text with this id.
     *
     * _Can only be used if this is Text_
     * @returns `nil` if the object is not a text.
     */
    get_font(id: uint64): string | nil
    /**
     * Set the font of the text with this id. Does nothing if this object is not a text.
     *
     * _Can only be used if this is Text_
     */
    set_font(id: uint64, font: string): void
    /**
     * Get the alignment of the text with this id.
     *
     * _Can only be used if this is Text_
     * @returns `nil` if the object is not a text.
     */
    get_alignment(id: uint64): TextAlign | nil
    /**
     * Set the alignment of the text with this id. Does nothing if this object is not a text.
     *
     * _Can only be used if this is Text_
     */
    set_alignment(id: uint64, alignment: TextAlign): void
    /**
     * Get the vertical alignment of the text with this id.
     *
     * _Can only be used if this is Text_
     * @returns `nil` if the object is not a text.
     */
    get_vertical_alignment(id: uint64): VerticalTextAlign | nil
    /**
     * Set the vertical alignment of the text with this id. Does nothing if this object is not a text.
     *
     * _Can only be used if this is Text_
     */
    set_vertical_alignment(id: uint64, alignment: VerticalTextAlign): void
    /**
     * Get if the text with this id scales with player zoom.
     *
     * _Can only be used if this is Text_
     * @returns `nil` if the object is not a text.
     */
    get_scale_with_zoom(id: uint64): boolean | nil
    /**
     * Set if the text with this id scales with player zoom, resulting in it always being the same size on screen, and the size compared to the game world changes. Does nothing if this object is not a text.
     *
     * _Can only be used if this is Text_
     */
    set_scale_with_zoom(id: uint64, scale_with_zoom: boolean): void
    /**
     * Get if the text with this id parses rich text tags.
     *
     * _Can only be used if this is Text_
     * @returns `nil` if the object is not a text.
     */
    get_use_rich_text(id: uint64): boolean | nil
    /**
     * Set if the text with this id parses rich text tags.
     *
     * _Can only be used if this is Text_
     */
    set_use_rich_text(id: uint64, use_rich_text: boolean): void
  }
  /**
   * @noSelf
   */
  export interface LineRendering extends BaseRendering {
    /**
     * Get whether this is being drawn on the ground, under most entities and sprites.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc or Polygon_
     */
    get_draw_on_ground(id: uint64): boolean
    /**
     * Set whether this is being drawn on the ground, under most entities and sprites.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc or Polygon_
     */
    set_draw_on_ground(id: uint64, draw_on_ground: boolean): void
    /**
     * Get the color or tint of the object with this id.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc, Polygon, Sprite, Light or Animation_
     * @returns `nil` if the object does not support color.
     */
    get_color(id: uint64): Color | nil
    /**
     * Set the color or tint of the object with this id. Does nothing if this object does not support color.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc, Polygon, Sprite, Light or Animation_
     */
    set_color(id: uint64, color: Color | ColorArray): void
    /**
     * Get the width of the object with this id. Value is in pixels (32 per tile).
     *
     * _Can only be used if this is Line, Circle or Rectangle_
     * @returns `nil` if the object does not support width.
     */
    get_width(id: uint64): float | nil
    /**
     * Set the width of the object with this id. Does nothing if this object does not support width. Value is in pixels (32 per tile).
     *
     * _Can only be used if this is Line, Circle or Rectangle_
     */
    set_width(id: uint64, width: float): void
    /**
     * Get from where the line with this id is drawn.
     *
     * _Can only be used if this is Line_
     * @returns `nil` if this object is not a line.
     */
    get_from(id: uint64): ScriptRenderTarget | nil
    /**
     * Set from where the line with this id is drawn. Does nothing if the object is not a line.
     *
     * _Can only be used if this is Line_
     */
    set_from(id: uint64, from: (MapPosition | MapPositionArray) | LuaEntity, from_offset?: Vector): void
    /**
     * Get where the line with this id is drawn to.
     *
     * _Can only be used if this is Line_
     * @returns `nil` if the object is not a line.
     */
    get_to(id: uint64): ScriptRenderTarget | nil
    /**
     * Set where the line with this id is drawn to. Does nothing if this object is not a line.
     *
     * _Can only be used if this is Line_
     */
    set_to(id: uint64, to: (MapPosition | MapPositionArray) | LuaEntity, to_offset?: Vector): void
    /**
     * Get the dash length of the line with this id.
     *
     * _Can only be used if this is Line_
     * @returns `nil` if the object is not a line.
     */
    get_dash_length(id: uint64): double | nil
    /**
     * Set the dash length of the line with this id. Does nothing if this object is not a line.
     *
     * _Can only be used if this is Line_
     */
    set_dash_length(id: uint64, dash_length: double): void
    /**
     * Get the length of the gaps in the line with this id.
     *
     * _Can only be used if this is Line_
     * @returns `nil` if the object is not a line.
     */
    get_gap_length(id: uint64): double | nil
    /**
     * Set the length of the gaps in the line with this id. Does nothing if this object is not a line.
     *
     * _Can only be used if this is Line_
     */
    set_gap_length(id: uint64, gap_length: double): void
    /**
     * Set the length of the dashes and the length of the gaps in the line with this id. Does nothing if this object is not a line.
     *
     * _Can only be used if this is Line_
     */
    set_dashes(id: uint64, dash_length: double, gap_length: double): void
  }
  /**
   * @noSelf
   */
  export interface CircleRendering extends BaseRendering {
    /**
     * Get whether this is being drawn on the ground, under most entities and sprites.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc or Polygon_
     */
    get_draw_on_ground(id: uint64): boolean
    /**
     * Set whether this is being drawn on the ground, under most entities and sprites.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc or Polygon_
     */
    set_draw_on_ground(id: uint64, draw_on_ground: boolean): void
    /**
     * Get the color or tint of the object with this id.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc, Polygon, Sprite, Light or Animation_
     * @returns `nil` if the object does not support color.
     */
    get_color(id: uint64): Color | nil
    /**
     * Set the color or tint of the object with this id. Does nothing if this object does not support color.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc, Polygon, Sprite, Light or Animation_
     */
    set_color(id: uint64, color: Color | ColorArray): void
    /**
     * Get the width of the object with this id. Value is in pixels (32 per tile).
     *
     * _Can only be used if this is Line, Circle or Rectangle_
     * @returns `nil` if the object does not support width.
     */
    get_width(id: uint64): float | nil
    /**
     * Set the width of the object with this id. Does nothing if this object does not support width. Value is in pixels (32 per tile).
     *
     * _Can only be used if this is Line, Circle or Rectangle_
     */
    set_width(id: uint64, width: float): void
    /**
     * Get where the object with this id is drawn.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Text, Circle, Arc, Polygon, Sprite, Light or Animation_
     * @returns `nil` if the object does not support target.
     */
    get_target(id: uint64): ScriptRenderTarget | nil
    /**
     * Set where the object with this id is drawn. Does nothing if this object does not support target.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Text, Circle, Arc, Polygon, Sprite, Light or Animation_
     */
    set_target(id: uint64, target: (MapPosition | MapPositionArray) | LuaEntity, target_offset?: Vector): void
    /**
     * Get if the circle or rectangle with this id is filled.
     *
     * _Can only be used if this is Circle or Rectangle_
     * @returns `nil` if the object is not a circle or rectangle.
     */
    get_filled(id: uint64): boolean | nil
    /**
     * Set if the circle or rectangle with this id is filled. Does nothing if this object is not a circle or rectangle.
     *
     * _Can only be used if this is Circle or Rectangle_
     */
    set_filled(id: uint64, filled: boolean): void
    /**
     * Get the radius of the circle with this id.
     *
     * _Can only be used if this is Circle_
     * @returns `nil` if the object is not a circle.
     */
    get_radius(id: uint64): double | nil
    /**
     * Set the radius of the circle with this id. Does nothing if this object is not a circle.
     *
     * _Can only be used if this is Circle_
     */
    set_radius(id: uint64, radius: double): void
  }
  /**
   * @noSelf
   */
  export interface RectangleRendering extends BaseRendering {
    /**
     * Get whether this is being drawn on the ground, under most entities and sprites.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc or Polygon_
     */
    get_draw_on_ground(id: uint64): boolean
    /**
     * Set whether this is being drawn on the ground, under most entities and sprites.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc or Polygon_
     */
    set_draw_on_ground(id: uint64, draw_on_ground: boolean): void
    /**
     * Get the color or tint of the object with this id.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc, Polygon, Sprite, Light or Animation_
     * @returns `nil` if the object does not support color.
     */
    get_color(id: uint64): Color | nil
    /**
     * Set the color or tint of the object with this id. Does nothing if this object does not support color.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc, Polygon, Sprite, Light or Animation_
     */
    set_color(id: uint64, color: Color | ColorArray): void
    /**
     * Get the width of the object with this id. Value is in pixels (32 per tile).
     *
     * _Can only be used if this is Line, Circle or Rectangle_
     * @returns `nil` if the object does not support width.
     */
    get_width(id: uint64): float | nil
    /**
     * Set the width of the object with this id. Does nothing if this object does not support width. Value is in pixels (32 per tile).
     *
     * _Can only be used if this is Line, Circle or Rectangle_
     */
    set_width(id: uint64, width: float): void
    /**
     * Get if the circle or rectangle with this id is filled.
     *
     * _Can only be used if this is Circle or Rectangle_
     * @returns `nil` if the object is not a circle or rectangle.
     */
    get_filled(id: uint64): boolean | nil
    /**
     * Set if the circle or rectangle with this id is filled. Does nothing if this object is not a circle or rectangle.
     *
     * _Can only be used if this is Circle or Rectangle_
     */
    set_filled(id: uint64, filled: boolean): void
    /**
     * Get where top left corner of the rectangle with this id is drawn.
     *
     * _Can only be used if this is Rectangle_
     * @returns `nil` if the object is not a rectangle.
     */
    get_left_top(id: uint64): ScriptRenderTarget | nil
    /**
     * Set where top left corner of the rectangle with this id is drawn. Does nothing if this object is not a rectangle.
     *
     * _Can only be used if this is Rectangle_
     */
    set_left_top(id: uint64, left_top: (MapPosition | MapPositionArray) | LuaEntity, left_top_offset?: Vector): void
    /**
     * Get where bottom right corner of the rectangle with this id is drawn.
     *
     * _Can only be used if this is Rectangle_
     * @returns `nil` if the object is not a rectangle.
     */
    get_right_bottom(id: uint64): ScriptRenderTarget | nil
    /**
     * Set where top bottom right of the rectangle with this id is drawn. Does nothing if this object is not a rectangle.
     *
     * _Can only be used if this is Rectangle_
     */
    set_right_bottom(
      id: uint64,
      right_bottom: (MapPosition | MapPositionArray) | LuaEntity,
      right_bottom_offset?: Vector,
    ): void
    /**
     * Set the corners of the rectangle with this id. Does nothing if this object is not a rectangle.
     *
     * _Can only be used if this is Rectangle_
     */
    set_corners(
      id: uint64,
      left_top: (MapPosition | MapPositionArray) | LuaEntity,
      left_top_offset: Vector,
      right_bottom: (MapPosition | MapPositionArray) | LuaEntity,
      right_bottom_offset: Vector,
    ): void
  }
  /**
   * @noSelf
   */
  export interface ArcRendering extends BaseRendering {
    /**
     * Get whether this is being drawn on the ground, under most entities and sprites.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc or Polygon_
     */
    get_draw_on_ground(id: uint64): boolean
    /**
     * Set whether this is being drawn on the ground, under most entities and sprites.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc or Polygon_
     */
    set_draw_on_ground(id: uint64, draw_on_ground: boolean): void
    /**
     * Get the color or tint of the object with this id.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc, Polygon, Sprite, Light or Animation_
     * @returns `nil` if the object does not support color.
     */
    get_color(id: uint64): Color | nil
    /**
     * Set the color or tint of the object with this id. Does nothing if this object does not support color.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc, Polygon, Sprite, Light or Animation_
     */
    set_color(id: uint64, color: Color | ColorArray): void
    /**
     * Get where the object with this id is drawn.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Text, Circle, Arc, Polygon, Sprite, Light or Animation_
     * @returns `nil` if the object does not support target.
     */
    get_target(id: uint64): ScriptRenderTarget | nil
    /**
     * Set where the object with this id is drawn. Does nothing if this object does not support target.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Text, Circle, Arc, Polygon, Sprite, Light or Animation_
     */
    set_target(id: uint64, target: (MapPosition | MapPositionArray) | LuaEntity, target_offset?: Vector): void
    /**
     * Get the radius of the outer edge of the arc with this id.
     *
     * _Can only be used if this is Arc_
     * @returns `nil` if the object is not a arc.
     */
    get_max_radius(id: uint64): double | nil
    /**
     * Set the radius of the outer edge of the arc with this id. Does nothing if this object is not a arc.
     *
     * _Can only be used if this is Arc_
     */
    set_max_radius(id: uint64, max_radius: double): void
    /**
     * Get the radius of the inner edge of the arc with this id.
     *
     * _Can only be used if this is Arc_
     * @returns `nil` if the object is not a arc.
     */
    get_min_radius(id: uint64): double | nil
    /**
     * Set the radius of the inner edge of the arc with this id. Does nothing if this object is not a arc.
     *
     * _Can only be used if this is Arc_
     */
    set_min_radius(id: uint64, min_radius: double): void
    /**
     * Get where the arc with this id starts.
     *
     * _Can only be used if this is Arc_
     * @returns Angle in radian. `nil` if the object is not a arc.
     */
    get_start_angle(id: uint64): float | nil
    /**
     * Set where the arc with this id starts. Does nothing if this object is not a arc.
     *
     * _Can only be used if this is Arc_
     * @param start_angle angle in radian
     */
    set_start_angle(id: uint64, start_angle: float): void
    /**
     * Get the angle of the arc with this id.
     *
     * _Can only be used if this is Arc_
     * @returns Angle in radian. `nil` if the object is not a arc.
     */
    get_angle(id: uint64): float | nil
    /**
     * Set the angle of the arc with this id. Does nothing if this object is not a arc.
     *
     * _Can only be used if this is Arc_
     * @param angle angle in radian
     */
    set_angle(id: uint64, angle: float): void
  }
  /**
   * @noSelf
   */
  export interface PolygonRendering extends BaseRendering {
    /**
     * Get whether this is being drawn on the ground, under most entities and sprites.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc or Polygon_
     */
    get_draw_on_ground(id: uint64): boolean
    /**
     * Set whether this is being drawn on the ground, under most entities and sprites.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc or Polygon_
     */
    set_draw_on_ground(id: uint64, draw_on_ground: boolean): void
    /**
     * Get the color or tint of the object with this id.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc, Polygon, Sprite, Light or Animation_
     * @returns `nil` if the object does not support color.
     */
    get_color(id: uint64): Color | nil
    /**
     * Set the color or tint of the object with this id. Does nothing if this object does not support color.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc, Polygon, Sprite, Light or Animation_
     */
    set_color(id: uint64, color: Color | ColorArray): void
    /**
     * Get where the object with this id is drawn.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Text, Circle, Arc, Polygon, Sprite, Light or Animation_
     * @returns `nil` if the object does not support target.
     */
    get_target(id: uint64): ScriptRenderTarget | nil
    /**
     * Set where the object with this id is drawn. Does nothing if this object does not support target.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Text, Circle, Arc, Polygon, Sprite, Light or Animation_
     */
    set_target(id: uint64, target: (MapPosition | MapPositionArray) | LuaEntity, target_offset?: Vector): void
    /**
     * Get the orientation of the object with this id.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Text, Polygon, Sprite, Light or Animation_
     * @returns `nil` if the object is not a text, polygon, sprite, light or animation.
     */
    get_orientation(id: uint64): RealOrientation | nil
    /**
     * Set the orientation of the object with this id. Does nothing if this object is not a text, polygon, sprite, light or animation.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Text, Polygon, Sprite, Light or Animation_
     */
    set_orientation(id: uint64, orientation: RealOrientation): void
    /**
     * Get the vertices of the polygon with this id.
     *
     * _Can only be used if this is Polygon_
     * @returns `nil` if the object is not a polygon.
     */
    get_vertices(id: uint64): ScriptRenderTarget[] | nil
    /**
     * Set the vertices of the polygon with this id. Does nothing if this object is not a polygon.
     *
     * _Can only be used if this is Polygon_
     */
    set_vertices(id: uint64, vertices: readonly ScriptRenderVertexTarget[]): void
    /**
     * Get the orientation_target of the object with this id. The object rotates so that it faces this target. Note that `orientation` is still applied to the object.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Polygon, Sprite or Animation_
     * @returns `nil` if no target or if this object is not a polygon, sprite, or animation.
     */
    get_orientation_target(id: uint64): ScriptRenderTarget | nil
    /**
     * Set the orientation_target of the object with this id. Does nothing if this object is not a polygon, sprite, or animation. The object rotates so that it faces this target. Note that `orientation` is still applied to the object. Set to `nil` if the object should not have an orientation_target.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Polygon, Sprite or Animation_
     */
    set_orientation_target(
      id: uint64,
      orientation_target: (MapPosition | MapPositionArray) | LuaEntity,
      orientation_target_offset?: Vector,
    ): void
  }
  /**
   * @noSelf
   */
  export interface SpriteRendering extends BaseRendering {
    /**
     * Get the color or tint of the object with this id.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc, Polygon, Sprite, Light or Animation_
     * @returns `nil` if the object does not support color.
     */
    get_color(id: uint64): Color | nil
    /**
     * Set the color or tint of the object with this id. Does nothing if this object does not support color.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc, Polygon, Sprite, Light or Animation_
     */
    set_color(id: uint64, color: Color | ColorArray): void
    /**
     * Get where the object with this id is drawn.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Text, Circle, Arc, Polygon, Sprite, Light or Animation_
     * @returns `nil` if the object does not support target.
     */
    get_target(id: uint64): ScriptRenderTarget | nil
    /**
     * Set where the object with this id is drawn. Does nothing if this object does not support target.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Text, Circle, Arc, Polygon, Sprite, Light or Animation_
     */
    set_target(id: uint64, target: (MapPosition | MapPositionArray) | LuaEntity, target_offset?: Vector): void
    /**
     * Get the orientation of the object with this id.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Text, Polygon, Sprite, Light or Animation_
     * @returns `nil` if the object is not a text, polygon, sprite, light or animation.
     */
    get_orientation(id: uint64): RealOrientation | nil
    /**
     * Set the orientation of the object with this id. Does nothing if this object is not a text, polygon, sprite, light or animation.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Text, Polygon, Sprite, Light or Animation_
     */
    set_orientation(id: uint64, orientation: RealOrientation): void
    /**
     * Get the sprite of the sprite or light with this id.
     *
     * _Can only be used if this is Sprite or Light_
     * @returns `nil` if the object is not a sprite or light.
     */
    get_sprite(id: uint64): SpritePath | nil
    /**
     * Set the sprite of the sprite or light with this id. Does nothing if this object is not a sprite or light.
     *
     * _Can only be used if this is Sprite or Light_
     */
    set_sprite(id: uint64, sprite: SpritePath): void
    /**
     * Get the horizontal scale of the sprite or animation with this id.
     *
     * _Can only be used if this is Sprite or Animation_
     * @returns `nil` if the object is not a sprite or animation.
     */
    get_x_scale(id: uint64): double | nil
    /**
     * Set the horizontal scale of the sprite or animation with this id. Does nothing if this object is not a sprite or animation.
     *
     * _Can only be used if this is Sprite or Animation_
     */
    set_x_scale(id: uint64, x_scale: double): void
    /**
     * Get the vertical scale of the sprite or animation with this id.
     *
     * _Can only be used if this is Sprite or Animation_
     * @returns `nil` if the object is not a sprite or animation.
     */
    get_y_scale(id: uint64): double | nil
    /**
     * Set the vertical scale of the sprite or animation with this id. Does nothing if this object is not a sprite or animation.
     *
     * _Can only be used if this is Sprite or Animation_
     */
    set_y_scale(id: uint64, y_scale: double): void
    /**
     * Get the render layer of the sprite or animation with this id.
     *
     * _Can only be used if this is Sprite or Animation_
     * @returns `nil` if the object is not a sprite or animation.
     */
    get_render_layer(id: uint64): RenderLayer | nil
    /**
     * Set the render layer of the sprite or animation with this id. Does nothing if this object is not a sprite or animation.
     *
     * _Can only be used if this is Sprite or Animation_
     */
    set_render_layer(id: uint64, render_layer: RenderLayer): void
    /**
     * Get the orientation_target of the object with this id. The object rotates so that it faces this target. Note that `orientation` is still applied to the object.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Polygon, Sprite or Animation_
     * @returns `nil` if no target or if this object is not a polygon, sprite, or animation.
     */
    get_orientation_target(id: uint64): ScriptRenderTarget | nil
    /**
     * Set the orientation_target of the object with this id. Does nothing if this object is not a polygon, sprite, or animation. The object rotates so that it faces this target. Note that `orientation` is still applied to the object. Set to `nil` if the object should not have an orientation_target.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Polygon, Sprite or Animation_
     */
    set_orientation_target(
      id: uint64,
      orientation_target: (MapPosition | MapPositionArray) | LuaEntity,
      orientation_target_offset?: Vector,
    ): void
    /**
     * Get the oriented_offset of the sprite or animation with this id. Offsets the center of the sprite or animation if `orientation_target` is given. This offset will rotate together with the sprite or animation.
     *
     * _Can only be used if this is Sprite or Animation_
     * @returns `nil` if this object is not a sprite or animation.
     */
    get_oriented_offset(id: uint64): Vector | nil
    /**
     * Set the oriented_offset of the sprite or animation with this id. Does nothing if this object is not a sprite or animation. Offsets the center of the sprite or animation if `orientation_target` is given. This offset will rotate together with the sprite or animation.
     *
     * _Can only be used if this is Sprite or Animation_
     */
    set_oriented_offset(id: uint64, oriented_offset: Vector): void
  }
  /**
   * @noSelf
   */
  export interface LightRendering extends BaseRendering {
    /**
     * Get the color or tint of the object with this id.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc, Polygon, Sprite, Light or Animation_
     * @returns `nil` if the object does not support color.
     */
    get_color(id: uint64): Color | nil
    /**
     * Set the color or tint of the object with this id. Does nothing if this object does not support color.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc, Polygon, Sprite, Light or Animation_
     */
    set_color(id: uint64, color: Color | ColorArray): void
    /**
     * Get where the object with this id is drawn.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Text, Circle, Arc, Polygon, Sprite, Light or Animation_
     * @returns `nil` if the object does not support target.
     */
    get_target(id: uint64): ScriptRenderTarget | nil
    /**
     * Set where the object with this id is drawn. Does nothing if this object does not support target.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Text, Circle, Arc, Polygon, Sprite, Light or Animation_
     */
    set_target(id: uint64, target: (MapPosition | MapPositionArray) | LuaEntity, target_offset?: Vector): void
    /**
     * Get the orientation of the object with this id.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Text, Polygon, Sprite, Light or Animation_
     * @returns `nil` if the object is not a text, polygon, sprite, light or animation.
     */
    get_orientation(id: uint64): RealOrientation | nil
    /**
     * Set the orientation of the object with this id. Does nothing if this object is not a text, polygon, sprite, light or animation.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Text, Polygon, Sprite, Light or Animation_
     */
    set_orientation(id: uint64, orientation: RealOrientation): void
    /**
     * Get the scale of the text or light with this id.
     *
     * _Can only be used if this is Text or Light_
     * @returns `nil` if the object is not a text or light.
     */
    get_scale(id: uint64): double | nil
    /**
     * Set the scale of the text or light with this id. Does nothing if this object is not a text or light.
     *
     * _Can only be used if this is Text or Light_
     */
    set_scale(id: uint64, scale: double): void
    /**
     * Get the sprite of the sprite or light with this id.
     *
     * _Can only be used if this is Sprite or Light_
     * @returns `nil` if the object is not a sprite or light.
     */
    get_sprite(id: uint64): SpritePath | nil
    /**
     * Set the sprite of the sprite or light with this id. Does nothing if this object is not a sprite or light.
     *
     * _Can only be used if this is Sprite or Light_
     */
    set_sprite(id: uint64, sprite: SpritePath): void
    /**
     * Get the intensity of the light with this id.
     *
     * _Can only be used if this is Light_
     * @returns `nil` if the object is not a light.
     */
    get_intensity(id: uint64): float | nil
    /**
     * Set the intensity of the light with this id. Does nothing if this object is not a light.
     *
     * _Can only be used if this is Light_
     */
    set_intensity(id: uint64, intensity: float): void
    /**
     * Get the minimum darkness at which the light with this id is rendered.
     *
     * _Can only be used if this is Light_
     * @returns `nil` if the object is not a light.
     */
    get_minimum_darkness(id: uint64): float | nil
    /**
     * Set the minimum darkness at which the light with this id is rendered. Does nothing if this object is not a light.
     *
     * _Can only be used if this is Light_
     */
    set_minimum_darkness(id: uint64, minimum_darkness: float): void
    /**
     * Get if the light with this id is rendered has the same orientation as the target entity. Note that `orientation` is still applied to the sprite.
     *
     * _Can only be used if this is Light_
     * @returns `nil` if the object is not a light.
     */
    get_oriented(id: uint64): boolean | nil
    /**
     * Set if the light with this id is rendered has the same orientation as the target entity. Does nothing if this object is not a light. Note that `orientation` is still applied to the sprite.
     *
     * _Can only be used if this is Light_
     */
    set_oriented(id: uint64, oriented: boolean): void
  }
  /**
   * @noSelf
   */
  export interface AnimationRendering extends BaseRendering {
    /**
     * Get the color or tint of the object with this id.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc, Polygon, Sprite, Light or Animation_
     * @returns `nil` if the object does not support color.
     */
    get_color(id: uint64): Color | nil
    /**
     * Set the color or tint of the object with this id. Does nothing if this object does not support color.
     *
     * _Can only be used if this is Text, Line, Circle, Rectangle, Arc, Polygon, Sprite, Light or Animation_
     */
    set_color(id: uint64, color: Color | ColorArray): void
    /**
     * Get where the object with this id is drawn.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Text, Circle, Arc, Polygon, Sprite, Light or Animation_
     * @returns `nil` if the object does not support target.
     */
    get_target(id: uint64): ScriptRenderTarget | nil
    /**
     * Set where the object with this id is drawn. Does nothing if this object does not support target.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Text, Circle, Arc, Polygon, Sprite, Light or Animation_
     */
    set_target(id: uint64, target: (MapPosition | MapPositionArray) | LuaEntity, target_offset?: Vector): void
    /**
     * Get the orientation of the object with this id.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Text, Polygon, Sprite, Light or Animation_
     * @returns `nil` if the object is not a text, polygon, sprite, light or animation.
     */
    get_orientation(id: uint64): RealOrientation | nil
    /**
     * Set the orientation of the object with this id. Does nothing if this object is not a text, polygon, sprite, light or animation.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Text, Polygon, Sprite, Light or Animation_
     */
    set_orientation(id: uint64, orientation: RealOrientation): void
    /**
     * Get the horizontal scale of the sprite or animation with this id.
     *
     * _Can only be used if this is Sprite or Animation_
     * @returns `nil` if the object is not a sprite or animation.
     */
    get_x_scale(id: uint64): double | nil
    /**
     * Set the horizontal scale of the sprite or animation with this id. Does nothing if this object is not a sprite or animation.
     *
     * _Can only be used if this is Sprite or Animation_
     */
    set_x_scale(id: uint64, x_scale: double): void
    /**
     * Get the vertical scale of the sprite or animation with this id.
     *
     * _Can only be used if this is Sprite or Animation_
     * @returns `nil` if the object is not a sprite or animation.
     */
    get_y_scale(id: uint64): double | nil
    /**
     * Set the vertical scale of the sprite or animation with this id. Does nothing if this object is not a sprite or animation.
     *
     * _Can only be used if this is Sprite or Animation_
     */
    set_y_scale(id: uint64, y_scale: double): void
    /**
     * Get the render layer of the sprite or animation with this id.
     *
     * _Can only be used if this is Sprite or Animation_
     * @returns `nil` if the object is not a sprite or animation.
     */
    get_render_layer(id: uint64): RenderLayer | nil
    /**
     * Set the render layer of the sprite or animation with this id. Does nothing if this object is not a sprite or animation.
     *
     * _Can only be used if this is Sprite or Animation_
     */
    set_render_layer(id: uint64, render_layer: RenderLayer): void
    /**
     * Get the orientation_target of the object with this id. The object rotates so that it faces this target. Note that `orientation` is still applied to the object.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Polygon, Sprite or Animation_
     * @returns `nil` if no target or if this object is not a polygon, sprite, or animation.
     */
    get_orientation_target(id: uint64): ScriptRenderTarget | nil
    /**
     * Set the orientation_target of the object with this id. Does nothing if this object is not a polygon, sprite, or animation. The object rotates so that it faces this target. Note that `orientation` is still applied to the object. Set to `nil` if the object should not have an orientation_target.
     *
     * Polygon vertices that are set to an entity will ignore this.
     *
     * _Can only be used if this is Polygon, Sprite or Animation_
     */
    set_orientation_target(
      id: uint64,
      orientation_target: (MapPosition | MapPositionArray) | LuaEntity,
      orientation_target_offset?: Vector,
    ): void
    /**
     * Get the oriented_offset of the sprite or animation with this id. Offsets the center of the sprite or animation if `orientation_target` is given. This offset will rotate together with the sprite or animation.
     *
     * _Can only be used if this is Sprite or Animation_
     * @returns `nil` if this object is not a sprite or animation.
     */
    get_oriented_offset(id: uint64): Vector | nil
    /**
     * Set the oriented_offset of the sprite or animation with this id. Does nothing if this object is not a sprite or animation. Offsets the center of the sprite or animation if `orientation_target` is given. This offset will rotate together with the sprite or animation.
     *
     * _Can only be used if this is Sprite or Animation_
     */
    set_oriented_offset(id: uint64, oriented_offset: Vector): void
    /**
     * Get the animation prototype name of the animation with this id.
     *
     * _Can only be used if this is Animation_
     * @returns `nil` if the object is not an animation.
     */
    get_animation(id: uint64): string | nil
    /**
     * Set the animation prototype name of the animation with this id. Does nothing if this object is not an animation.
     *
     * _Can only be used if this is Animation_
     */
    set_animation(id: uint64, animation: string): void
    /**
     * Get the animation speed of the animation with this id.
     *
     * _Can only be used if this is Animation_
     * @returns Animation speed in frames per tick. `nil` if the object is not an animation.
     */
    get_animation_speed(id: uint64): double | nil
    /**
     * Set the animation speed of the animation with this id. Does nothing if this object is not an animation.
     *
     * _Can only be used if this is Animation_
     * @param animation_speed Animation speed in frames per tick.
     */
    set_animation_speed(id: uint64, animation_speed: double): void
    /**
     * Get the animation offset of the animation with this id.
     *
     * _Can only be used if this is Animation_
     * @returns Animation offset in frames. `nil` if the object is not an animation.
     */
    get_animation_offset(id: uint64): double | nil
    /**
     * Set the animation offset of the animation with this id. Does nothing if this object is not an animation.
     *
     * _Can only be used if this is Animation_
     * @param animation_offset Animation offset in frames.
     */
    set_animation_offset(id: uint64, animation_offset: double): void
  }
  /**
   * Prototype of a resource category.
   * @noSelf
   */
  export interface LuaResourceCategoryPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Name of this prototype.
     */
    readonly name: string
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaResourceCategoryPrototype"
  }
  /**
   * Control behavior for roboports.
   * @noSelf
   */
  export interface LuaRoboportControlBehavior extends LuaControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * `true` if the roboport should report the logistics network content to the circuit network.
     */
    read_logistics: boolean
    /**
     * `true` if the roboport should report the robot statistics to the circuit network.
     */
    read_robot_stats: boolean
    available_logistic_output_signal: SignalID
    total_logistic_output_signal: SignalID
    available_construction_output_signal: SignalID
    total_construction_output_signal: SignalID
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaRoboportControlBehavior"
  }
  /**
   * Object containing mod settings of three distinct types: `startup`, `global`, and `player`. An instance of LuaSettings is available through the global object named `settings`.
   * @noSelf
   */
  export interface LuaSettings {
    /**
     * Gets the current per-player settings for the given player, indexed by prototype name. Returns the same structure as {@link LuaPlayer#mod_settings LuaPlayer::mod_settings}. This table becomes invalid if its associated player does.
     *
     * Even though this attribute is marked as read-only, individual settings can be changed by overwriting their {@link ModSetting} table. Mods can only change their own settings. Using the in-game console, all player settings can be changed.
     * @example
     * -- Change the value of the "active_lifestyle" setting
     * settings.get_player_settings(player_index)["active_lifestyle"] = {value = true}
     */
    get_player_settings(player: PlayerIdentification): LuaCustomTable<string, ModSetting>
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * The startup mod settings, indexed by prototype name.
     */
    readonly startup: {
      readonly [name: string]: ModSetting
    }
    /**
     * The current global mod settings, indexed by prototype name.
     *
     * Even though this attribute is marked as read-only, individual settings can be changed by overwriting their {@link ModSetting} table. Mods can only change their own settings. Using the in-game console, all player settings can be changed.
     */
    readonly global: LuaCustomTable<string, ModSetting>
    /**
     * The default player mod settings for this map, indexed by prototype name.
     *
     * Even though this attribute is marked as read-only, individual settings can be changed by overwriting their {@link ModSetting} table. Mods can only change their own settings. Using the in-game console, all player settings can be changed.
     */
    readonly player: LuaCustomTable<string, ModSetting>
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaSettings"
  }
  /**
   * Prototype of a shortcut.
   * @noSelf
   */
  export interface LuaShortcutPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Name of this prototype.
     */
    readonly name: string
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    readonly action: string
    /**
     * The item to create when this shortcut is used, if any.
     */
    readonly item_to_spawn?: LuaItemPrototype
    /**
     * The technology that needs to be researched once (in any save) for this shortcut to be unlocked (in all saves).
     */
    readonly technology_to_unlock?: LuaTechnologyPrototype
    readonly toggleable: boolean
    /**
     * The control input that is associated with this shortcut, if any.
     */
    readonly associated_control_input?: string
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaShortcutPrototype"
  }
  /**
   * Control behavior for storage tanks.
   * @noSelf
   */
  export interface LuaStorageTankControlBehavior extends LuaControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaStorageTankControlBehavior"
  }
  /**
   * Style of a GUI element. All of the attributes listed here may be `nil` if not available for a particular GUI element.
   * @noSelf
   */
  export interface LuaStyle {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Gui of the {@link LuaGuiElement} of this style.
     */
    readonly gui: LuaGui
    /**
     * Name of this style.
     */
    readonly name: string
    /**
     * Minimal width ensures, that the widget will never be smaller than than that size. It can't be squashed to be smaller.
     */
    minimal_width: int
    /**
     * Maximal width ensures, that the widget will never be bigger than than that size. It can't be stretched to be bigger.
     */
    maximal_width: int
    /**
     * Minimal height ensures, that the widget will never be smaller than than that size. It can't be squashed to be smaller.
     */
    minimal_height: int
    /**
     * Maximal height ensures, that the widget will never be bigger than than that size. It can't be stretched to be bigger.
     */
    maximal_height: int
    /**
     * Natural width specifies the width of the element tries to have, but it can still be squashed/stretched to have a smaller or bigger size.
     */
    natural_width: int
    /**
     * Natural height specifies the height of the element tries to have, but it can still be squashed/stretched to have a smaller or bigger size.
     */
    natural_height: int
    top_padding: int
    right_padding: int
    bottom_padding: int
    left_padding: int
    top_margin: int
    right_margin: int
    bottom_margin: int
    left_margin: int
    /**
     * Horizontal align of the inner content of the widget, if any.
     */
    horizontal_align?: "left" | "center" | "right"
    /**
     * Vertical align of the inner content of the widget, if any.
     */
    vertical_align?: "top" | "center" | "bottom"
    get font_color(): Color
    set font_color(value: Color | ColorArray)
    font: string
    /**
     * Space between the table cell contents top and border.
     *
     * _Can only be used if this is LuaTableStyle_
     */
    top_cell_padding: int
    /**
     * Space between the table cell contents right and border.
     *
     * _Can only be used if this is LuaTableStyle_
     */
    right_cell_padding: int
    /**
     * Space between the table cell contents bottom and border.
     *
     * _Can only be used if this is LuaTableStyle_
     */
    bottom_cell_padding: int
    /**
     * Space between the table cell contents left and border.
     *
     * _Can only be used if this is LuaTableStyle_
     */
    left_cell_padding: int
    /**
     * Whether the GUI element stretches its size horizontally to other elements. `nil` if this element does not support stretching.
     */
    horizontally_stretchable?: boolean
    /**
     * Whether the GUI element stretches its size vertically to other elements. `nil` if this element does not support stretching.
     */
    vertically_stretchable?: boolean
    /**
     * Whether the GUI element can be squashed (by maximal width of some parent element) horizontally. `nil` if this element does not support squashing.
     *
     * This is mainly meant to be used for scroll-pane. The default value is `false`.
     */
    horizontally_squashable?: boolean
    /**
     * Whether the GUI element can be squashed (by maximal height of some parent element) vertically. `nil` if this element does not support squashing.
     *
     * This is mainly meant to be used for scroll-pane. The default (parent) value for scroll pane is `true`, `false` otherwise.
     */
    vertically_squashable?: boolean
    /**
     * How this GUI element handles rich text.
     *
     * _Can only be used if this is LuaLabelStyle, LuaTextBoxStyle or LuaTextFieldStyle_
     */
    rich_text_setting: defines.rich_text_setting
    /**
     * _Can only be used if this is LuaButtonStyle_
     */
    get hovered_font_color(): Color
    set hovered_font_color(value: Color | ColorArray)
    /**
     * _Can only be used if this is LuaButtonStyle_
     */
    get clicked_font_color(): Color
    set clicked_font_color(value: Color | ColorArray)
    /**
     * _Can only be used if this is LuaButtonStyle or LuaTabStyle_
     */
    get disabled_font_color(): Color
    set disabled_font_color(value: Color | ColorArray)
    /**
     * _Can only be used if this is LuaButtonStyle_
     */
    get pie_progress_color(): Color
    set pie_progress_color(value: Color | ColorArray)
    /**
     * _Can only be used if this is LuaButtonStyle_
     */
    clicked_vertical_offset: int
    /**
     * _Can only be used if this is LuaButtonStyle_
     */
    get selected_font_color(): Color
    set selected_font_color(value: Color | ColorArray)
    /**
     * _Can only be used if this is LuaButtonStyle_
     */
    get selected_hovered_font_color(): Color
    set selected_hovered_font_color(value: Color | ColorArray)
    /**
     * _Can only be used if this is LuaButtonStyle_
     */
    get selected_clicked_font_color(): Color
    set selected_clicked_font_color(value: Color | ColorArray)
    /**
     * _Can only be used if this is LuaButtonStyle_
     */
    get strikethrough_color(): Color
    set strikethrough_color(value: Color | ColorArray)
    /**
     * _Can only be used if this is LuaButtonStyle_
     */
    draw_grayscale_picture: boolean
    /**
     * Horizontal space between individual cells.
     *
     * _Can only be used if this is LuaTableStyle, LuaFlowStyle or LuaHorizontalFlowStyle_
     */
    horizontal_spacing: int
    /**
     * Vertical space between individual cells.
     *
     * _Can only be used if this is LuaTableStyle, LuaFlowStyle, LuaVerticalFlowStyle or LuaTabbedPaneStyle_
     */
    vertical_spacing: int
    /**
     * _Can only be used if this is LuaFrameStyle_
     */
    use_header_filler: boolean
    /**
     * _Can only be used if this is LuaProgressBarStyle_
     */
    bar_width: uint
    /**
     * _Can only be used if this is LuaProgressBarStyle_
     */
    get color(): Color
    set color(value: Color | ColorArray)
    /**
     * Array containing the alignment for every column of this table element. Even though this property is marked as read-only, the alignment can be changed by indexing the LuaCustomTable.
     * @example
     * table_element.style.column_alignments[1] = "center"
     */
    readonly column_alignments: LuaCustomTable<uint, Alignment>
    /**
     * _Can only be used if this is LabelStyle_
     */
    single_line: boolean
    /**
     * _Can only be used if this is ScrollPaneStyle_
     */
    extra_top_padding_when_activated: int
    /**
     * _Can only be used if this is ScrollPaneStyle_
     */
    extra_bottom_padding_when_activated: int
    /**
     * _Can only be used if this is ScrollPaneStyle_
     */
    extra_left_padding_when_activated: int
    /**
     * _Can only be used if this is ScrollPaneStyle_
     */
    extra_right_padding_when_activated: int
    /**
     * _Can only be used if this is ScrollPaneStyle_
     */
    extra_top_margin_when_activated: int
    /**
     * _Can only be used if this is ScrollPaneStyle_
     */
    extra_bottom_margin_when_activated: int
    /**
     * _Can only be used if this is ScrollPaneStyle_
     */
    extra_left_margin_when_activated: int
    /**
     * _Can only be used if this is ScrollPaneStyle_
     */
    extra_right_margin_when_activated: int
    /**
     * _Can only be used if this is ImageStyle_
     */
    stretch_image_to_widget_size: boolean
    /**
     * _Can only be used if this is TabStyle_
     */
    badge_font: string
    /**
     * _Can only be used if this is TabStyle_
     */
    badge_horizontal_spacing: int
    /**
     * _Can only be used if this is TabStyle_
     */
    get default_badge_font_color(): Color
    set default_badge_font_color(value: Color | ColorArray)
    /**
     * _Can only be used if this is TabStyle_
     */
    get selected_badge_font_color(): Color
    set selected_badge_font_color(value: Color | ColorArray)
    /**
     * _Can only be used if this is TabStyle_
     */
    get disabled_badge_font_color(): Color
    set disabled_badge_font_color(value: Color | ColorArray)
    /**
     * Sets both minimal and maximal width to the given value.
     */
    set width(value: int)
    /**
     * Sets both minimal and maximal height to the given value.
     */
    set height(value: int)
    /**
     * Sets both width and height to the given value. Also accepts an array with two values, setting width to the first and height to the second one.
     */
    set size(value: int | SizeArray)
    /**
     * Sets top/right/bottom/left paddings to this value. An array with two values sets top/bottom padding to the first value and left/right padding to the second value. An array with four values sets top, right, bottom, left padding respectively.
     */
    set padding(value: int | StyleValuesArray)
    /**
     * Sets top/right/bottom/left margins to this value. An array with two values sets top/bottom margin to the first value and left/right margin to the second value. An array with four values sets top, right, bottom, left margin respectively.
     */
    set margin(value: int | StyleValuesArray)
    /**
     * Space between the table cell contents and border. Sets top/right/bottom/left cell paddings to this value.
     *
     * _Can only be used if this is LuaTableStyle_
     */
    set cell_padding(value: int)
    /**
     * Sets `extra_top/right/bottom/left_padding_when_activated` to this value. An array with two values sets top/bottom padding to the first value and left/right padding to the second value. An array with four values sets top, right, bottom, left padding respectively.
     */
    set extra_padding_when_activated(value: int | StyleValuesArray)
    /**
     * Sets `extra_top/right/bottom/left_margin_when_activated` to this value. An array with two values sets top/bottom margin to the first value and left/right margin to the second value. An array with four values sets top, right, bottom, left margin respectively.
     */
    set extra_margin_when_activated(value: int | StyleValuesArray)
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaStyle"
  }
  /**
   * @noSelf
   */
  export interface BaseStyle {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Gui of the {@link LuaGuiElement} of this style.
     */
    readonly gui: LuaGui
    /**
     * Name of this style.
     */
    readonly name: string
    /**
     * Minimal width ensures, that the widget will never be smaller than than that size. It can't be squashed to be smaller.
     */
    minimal_width: int
    /**
     * Maximal width ensures, that the widget will never be bigger than than that size. It can't be stretched to be bigger.
     */
    maximal_width: int
    /**
     * Minimal height ensures, that the widget will never be smaller than than that size. It can't be squashed to be smaller.
     */
    minimal_height: int
    /**
     * Maximal height ensures, that the widget will never be bigger than than that size. It can't be stretched to be bigger.
     */
    maximal_height: int
    /**
     * Natural width specifies the width of the element tries to have, but it can still be squashed/stretched to have a smaller or bigger size.
     */
    natural_width: int
    /**
     * Natural height specifies the height of the element tries to have, but it can still be squashed/stretched to have a smaller or bigger size.
     */
    natural_height: int
    top_padding: int
    right_padding: int
    bottom_padding: int
    left_padding: int
    top_margin: int
    right_margin: int
    bottom_margin: int
    left_margin: int
    /**
     * Horizontal align of the inner content of the widget, if any.
     */
    horizontal_align?: "left" | "center" | "right"
    /**
     * Vertical align of the inner content of the widget, if any.
     */
    vertical_align?: "top" | "center" | "bottom"
    get font_color(): Color
    set font_color(value: Color | ColorArray)
    font: string
    /**
     * Whether the GUI element stretches its size horizontally to other elements. `nil` if this element does not support stretching.
     */
    horizontally_stretchable?: boolean
    /**
     * Whether the GUI element stretches its size vertically to other elements. `nil` if this element does not support stretching.
     */
    vertically_stretchable?: boolean
    /**
     * Whether the GUI element can be squashed (by maximal width of some parent element) horizontally. `nil` if this element does not support squashing.
     *
     * This is mainly meant to be used for scroll-pane. The default value is `false`.
     */
    horizontally_squashable?: boolean
    /**
     * Whether the GUI element can be squashed (by maximal height of some parent element) vertically. `nil` if this element does not support squashing.
     *
     * This is mainly meant to be used for scroll-pane. The default (parent) value for scroll pane is `true`, `false` otherwise.
     */
    vertically_squashable?: boolean
    /**
     * Array containing the alignment for every column of this table element. Even though this property is marked as read-only, the alignment can be changed by indexing the LuaCustomTable.
     * @example
     * table_element.style.column_alignments[1] = "center"
     */
    readonly column_alignments: LuaCustomTable<uint, Alignment>
    /**
     * Sets both minimal and maximal width to the given value.
     */
    set width(value: int)
    /**
     * Sets both minimal and maximal height to the given value.
     */
    set height(value: int)
    /**
     * Sets both width and height to the given value. Also accepts an array with two values, setting width to the first and height to the second one.
     */
    set size(value: int | SizeArray)
    /**
     * Sets top/right/bottom/left paddings to this value. An array with two values sets top/bottom padding to the first value and left/right padding to the second value. An array with four values sets top, right, bottom, left padding respectively.
     */
    set padding(value: int | StyleValuesArray)
    /**
     * Sets top/right/bottom/left margins to this value. An array with two values sets top/bottom margin to the first value and left/right margin to the second value. An array with four values sets top, right, bottom, left margin respectively.
     */
    set margin(value: int | StyleValuesArray)
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaStyle"
  }
  export interface TableStyle extends BaseStyle {
    /**
     * Space between the table cell contents top and border.
     *
     * _Can only be used if this is LuaTableStyle_
     */
    top_cell_padding: int
    /**
     * Space between the table cell contents right and border.
     *
     * _Can only be used if this is LuaTableStyle_
     */
    right_cell_padding: int
    /**
     * Space between the table cell contents bottom and border.
     *
     * _Can only be used if this is LuaTableStyle_
     */
    bottom_cell_padding: int
    /**
     * Space between the table cell contents left and border.
     *
     * _Can only be used if this is LuaTableStyle_
     */
    left_cell_padding: int
    /**
     * Horizontal space between individual cells.
     *
     * _Can only be used if this is LuaTableStyle, LuaFlowStyle or LuaHorizontalFlowStyle_
     */
    horizontal_spacing: int
    /**
     * Vertical space between individual cells.
     *
     * _Can only be used if this is LuaTableStyle, LuaFlowStyle, LuaVerticalFlowStyle or LuaTabbedPaneStyle_
     */
    vertical_spacing: int
    /**
     * Space between the table cell contents and border. Sets top/right/bottom/left cell paddings to this value.
     *
     * _Can only be used if this is LuaTableStyle_
     */
    set cell_padding(value: int)
  }
  export interface LabelStyle extends BaseStyle {
    /**
     * How this GUI element handles rich text.
     *
     * _Can only be used if this is LuaLabelStyle, LuaTextBoxStyle or LuaTextFieldStyle_
     */
    rich_text_setting: defines.rich_text_setting
    /**
     * _Can only be used if this is LabelStyle_
     */
    single_line: boolean
  }
  export interface TextBoxStyle extends BaseStyle {
    /**
     * How this GUI element handles rich text.
     *
     * _Can only be used if this is LuaLabelStyle, LuaTextBoxStyle or LuaTextFieldStyle_
     */
    rich_text_setting: defines.rich_text_setting
  }
  export interface TextFieldStyle extends BaseStyle {
    /**
     * How this GUI element handles rich text.
     *
     * _Can only be used if this is LuaLabelStyle, LuaTextBoxStyle or LuaTextFieldStyle_
     */
    rich_text_setting: defines.rich_text_setting
  }
  export interface ButtonStyle extends BaseStyle {
    /**
     * _Can only be used if this is LuaButtonStyle_
     */
    get hovered_font_color(): Color
    set hovered_font_color(value: Color | ColorArray)
    /**
     * _Can only be used if this is LuaButtonStyle_
     */
    get clicked_font_color(): Color
    set clicked_font_color(value: Color | ColorArray)
    /**
     * _Can only be used if this is LuaButtonStyle or LuaTabStyle_
     */
    get disabled_font_color(): Color
    set disabled_font_color(value: Color | ColorArray)
    /**
     * _Can only be used if this is LuaButtonStyle_
     */
    get pie_progress_color(): Color
    set pie_progress_color(value: Color | ColorArray)
    /**
     * _Can only be used if this is LuaButtonStyle_
     */
    clicked_vertical_offset: int
    /**
     * _Can only be used if this is LuaButtonStyle_
     */
    get selected_font_color(): Color
    set selected_font_color(value: Color | ColorArray)
    /**
     * _Can only be used if this is LuaButtonStyle_
     */
    get selected_hovered_font_color(): Color
    set selected_hovered_font_color(value: Color | ColorArray)
    /**
     * _Can only be used if this is LuaButtonStyle_
     */
    get selected_clicked_font_color(): Color
    set selected_clicked_font_color(value: Color | ColorArray)
    /**
     * _Can only be used if this is LuaButtonStyle_
     */
    get strikethrough_color(): Color
    set strikethrough_color(value: Color | ColorArray)
    /**
     * _Can only be used if this is LuaButtonStyle_
     */
    draw_grayscale_picture: boolean
  }
  export interface TabStyle extends BaseStyle {
    /**
     * _Can only be used if this is LuaButtonStyle or LuaTabStyle_
     */
    get disabled_font_color(): Color
    set disabled_font_color(value: Color | ColorArray)
    /**
     * _Can only be used if this is TabStyle_
     */
    badge_font: string
    /**
     * _Can only be used if this is TabStyle_
     */
    badge_horizontal_spacing: int
    /**
     * _Can only be used if this is TabStyle_
     */
    get default_badge_font_color(): Color
    set default_badge_font_color(value: Color | ColorArray)
    /**
     * _Can only be used if this is TabStyle_
     */
    get selected_badge_font_color(): Color
    set selected_badge_font_color(value: Color | ColorArray)
    /**
     * _Can only be used if this is TabStyle_
     */
    get disabled_badge_font_color(): Color
    set disabled_badge_font_color(value: Color | ColorArray)
  }
  export interface FlowStyle extends BaseStyle {
    /**
     * Horizontal space between individual cells.
     *
     * _Can only be used if this is LuaTableStyle, LuaFlowStyle or LuaHorizontalFlowStyle_
     */
    horizontal_spacing: int
    /**
     * Vertical space between individual cells.
     *
     * _Can only be used if this is LuaTableStyle, LuaFlowStyle, LuaVerticalFlowStyle or LuaTabbedPaneStyle_
     */
    vertical_spacing: int
  }
  export interface HorizontalFlowStyle extends BaseStyle {
    /**
     * Horizontal space between individual cells.
     *
     * _Can only be used if this is LuaTableStyle, LuaFlowStyle or LuaHorizontalFlowStyle_
     */
    horizontal_spacing: int
  }
  export interface VerticalFlowStyle extends BaseStyle {
    /**
     * Vertical space between individual cells.
     *
     * _Can only be used if this is LuaTableStyle, LuaFlowStyle, LuaVerticalFlowStyle or LuaTabbedPaneStyle_
     */
    vertical_spacing: int
  }
  export interface TabbedPaneStyle extends BaseStyle {
    /**
     * Vertical space between individual cells.
     *
     * _Can only be used if this is LuaTableStyle, LuaFlowStyle, LuaVerticalFlowStyle or LuaTabbedPaneStyle_
     */
    vertical_spacing: int
  }
  export interface FrameStyle extends BaseStyle {
    /**
     * _Can only be used if this is LuaFrameStyle_
     */
    use_header_filler: boolean
  }
  export interface ProgressBarStyle extends BaseStyle {
    /**
     * _Can only be used if this is LuaProgressBarStyle_
     */
    bar_width: uint
    /**
     * _Can only be used if this is LuaProgressBarStyle_
     */
    get color(): Color
    set color(value: Color | ColorArray)
  }
  export interface ScrollPaneStyle extends BaseStyle {
    /**
     * _Can only be used if this is ScrollPaneStyle_
     */
    extra_top_padding_when_activated: int
    /**
     * _Can only be used if this is ScrollPaneStyle_
     */
    extra_bottom_padding_when_activated: int
    /**
     * _Can only be used if this is ScrollPaneStyle_
     */
    extra_left_padding_when_activated: int
    /**
     * _Can only be used if this is ScrollPaneStyle_
     */
    extra_right_padding_when_activated: int
    /**
     * _Can only be used if this is ScrollPaneStyle_
     */
    extra_top_margin_when_activated: int
    /**
     * _Can only be used if this is ScrollPaneStyle_
     */
    extra_bottom_margin_when_activated: int
    /**
     * _Can only be used if this is ScrollPaneStyle_
     */
    extra_left_margin_when_activated: int
    /**
     * _Can only be used if this is ScrollPaneStyle_
     */
    extra_right_margin_when_activated: int
    /**
     * Sets `extra_top/right/bottom/left_padding_when_activated` to this value. An array with two values sets top/bottom padding to the first value and left/right padding to the second value. An array with four values sets top, right, bottom, left padding respectively.
     */
    set extra_padding_when_activated(value: int | StyleValuesArray)
    /**
     * Sets `extra_top/right/bottom/left_margin_when_activated` to this value. An array with two values sets top/bottom margin to the first value and left/right margin to the second value. An array with four values sets top, right, bottom, left margin respectively.
     */
    set extra_margin_when_activated(value: int | StyleValuesArray)
  }
  export interface ImageStyle extends BaseStyle {
    /**
     * _Can only be used if this is ImageStyle_
     */
    stretch_image_to_widget_size: boolean
  }
  /**
   * Common attributes to all variants of {@link SurfaceCreateEntity}.
   */
  export interface BaseSurfaceCreateEntity {
    /**
     * The entity prototype name to create.
     */
    readonly name: string
    /**
     * Where to create the entity.
     */
    readonly position: MapPosition | MapPositionArray
    /**
     * Desired orientation of the entity after creation.
     */
    readonly direction?: defines.direction
    /**
     * Force of the entity, default is enemy.
     */
    readonly force?: ForceIdentification
    /**
     * Entity with health for the new entity to target.
     */
    readonly target?: LuaEntity | (MapPosition | MapPositionArray)
    /**
     * Source entity. Used for beams, projectiles, and highlight-boxes.
     */
    readonly source?: LuaEntity | (MapPosition | MapPositionArray)
    /**
     * If true, building will attempt to simulate fast-replace building.
     */
    readonly fast_replace?: boolean
    /**
     * If given set the last_user to this player. If fast_replace is true simulate fast replace using this player.
     */
    readonly player?: PlayerIdentification
    /**
     * If fast_replace is true simulate fast replace using this character.
     */
    readonly character?: LuaEntity
    /**
     * If false while fast_replace is true and player is nil any items from fast-replacing will be deleted instead of dropped on the ground.
     */
    readonly spill?: boolean
    /**
     * If true; {@link defines.events.script_raised_built} will be fired on successful entity creation.
     */
    readonly raise_built?: boolean
    /**
     * If false, the building effect smoke will not be shown around the new entity.
     */
    readonly create_build_effect_smoke?: boolean
    /**
     * If true, entity types that have spawn_decorations property will apply triggers defined in the property.
     */
    readonly spawn_decorations?: boolean
    /**
     * If true, any characters that are in the way of the entity are teleported out of the way.
     */
    readonly move_stuck_players?: boolean
    /**
     * If provided, the entity will attempt to pull stored values from this item (for example; creating a spidertron from a previously named and mined spidertron)
     */
    readonly item?: LuaItemStack
  }
  /**
   * `"assembling-machine"` variant of {@link SurfaceCreateEntity}.
   */
  export interface AssemblingMachineSurfaceCreateEntity extends BaseSurfaceCreateEntity {
    readonly recipe?: string
  }
  /**
   * `"beam"` variant of {@link SurfaceCreateEntity}.
   */
  export interface BeamSurfaceCreateEntity extends BaseSurfaceCreateEntity {
    /**
     * Absolute target position that can be used instead of target entity (entity has precedence if both entity and position are defined).
     */
    readonly target_position?: MapPosition | MapPositionArray
    /**
     * Absolute source position that can be used instead of source entity (entity has precedence if both entity and position are defined).
     */
    readonly source_position?: MapPosition | MapPositionArray
    /**
     * If set, beam will be destroyed when distance between source and target is greater than this value.
     */
    readonly max_length?: uint
    /**
     * If set, beam will be destroyed after this value of ticks.
     */
    readonly duration?: uint
    /**
     * Source position will be offset by this value when rendering the beam.
     */
    readonly source_offset?: Vector
  }
  /**
   * `"stream"` variant of {@link SurfaceCreateEntity}.
   */
  export interface StreamSurfaceCreateEntity extends BaseSurfaceCreateEntity {
    /**
     * Absolute target position that can be used instead of target entity (entity has precedence if both entity and position are defined).
     */
    readonly target_position?: MapPosition | MapPositionArray
    /**
     * Absolute source position that can be used instead of source entity (entity has precedence if both entity and position are defined).
     */
    readonly source_position?: MapPosition | MapPositionArray
    /**
     * Source position will be offset by this value when rendering the stream.
     */
    readonly source_offset?: Vector
  }
  /**
   * `"container"` variant of {@link SurfaceCreateEntity}.
   */
  export interface ContainerSurfaceCreateEntity extends BaseSurfaceCreateEntity {
    /**
     * Inventory index where the red limiting bar should be set.
     */
    readonly bar?: uint
  }
  /**
   * `"cliff"` variant of {@link SurfaceCreateEntity}.
   */
  export interface CliffSurfaceCreateEntity extends BaseSurfaceCreateEntity {
    /**
     * If not specified, `direction` will be used instead.
     */
    readonly cliff_orientation?: CliffOrientation
  }
  /**
   * `"flying-text"` variant of {@link SurfaceCreateEntity}.
   */
  export interface FlyingTextSurfaceCreateEntity extends BaseSurfaceCreateEntity {
    /**
     * The string to show.
     */
    readonly text: LocalisedString
    /**
     * Color of the displayed text.
     */
    readonly color?: Color | ColorArray
    readonly render_player_index?: uint
  }
  /**
   * `"entity-ghost"` variant of {@link SurfaceCreateEntity}.
   */
  export interface EntityGhostSurfaceCreateEntity extends BaseSurfaceCreateEntity {
    /**
     * The prototype name of the entity contained in the ghost.
     */
    readonly inner_name: string
    /**
     * If `false` the ghost entity will not expire. Default is `false`. Creating ghost with `expires = true` when ghost_time_to_live of this force is 0 will result in a script error.
     */
    readonly expires?: boolean
  }
  /**
   * `"fire"` variant of {@link SurfaceCreateEntity}.
   */
  export interface FireSurfaceCreateEntity extends BaseSurfaceCreateEntity {
    /**
     * With how many small flames should the fire on ground be created. Defaults to the initial flame count of the prototype.
     */
    readonly initial_ground_flame_count?: uint8
  }
  /**
   * `"inserter"` variant of {@link SurfaceCreateEntity}.
   */
  export interface InserterSurfaceCreateEntity extends BaseSurfaceCreateEntity {
    readonly conditions: InserterCircuitConditions
    readonly filters: readonly InventoryFilter[]
  }
  /**
   * `"item-entity"` variant of {@link SurfaceCreateEntity}.
   */
  export interface ItemEntitySurfaceCreateEntity extends BaseSurfaceCreateEntity {
    /**
     * The stack of items to create.
     */
    readonly stack: SimpleItemStack
  }
  /**
   * `"item-request-proxy"` variant of {@link SurfaceCreateEntity}.
   */
  export interface ItemRequestProxySurfaceCreateEntity extends BaseSurfaceCreateEntity {
    /**
     * The target items are to be delivered to.
     */
    readonly target: LuaEntity
    /**
     * The stacks of items to be delivered to target entity from logistic network.
     */
    readonly modules: Record<string, uint>
  }
  /**
   * `"rolling-stock"` variant of {@link SurfaceCreateEntity}.
   */
  export interface RollingStockSurfaceCreateEntity extends BaseSurfaceCreateEntity {
    /**
     * The orientation of this rolling stock.
     */
    readonly orientation?: RealOrientation
    /**
     * The color of this rolling stock, if it supports colors.
     */
    readonly color?: Color | ColorArray
  }
  /**
   * `"locomotive"` variant of {@link SurfaceCreateEntity}.
   */
  export interface LocomotiveSurfaceCreateEntity extends BaseSurfaceCreateEntity {
    /**
     * Whether the locomotive should snap to an adjacent train stop. Defaults to true.
     */
    readonly snap_to_train_stop?: boolean
  }
  /**
   * `"logistic-container"` variant of {@link SurfaceCreateEntity}.
   */
  export interface LogisticContainerSurfaceCreateEntity extends BaseSurfaceCreateEntity {
    readonly request_filters?: readonly InventoryFilter[]
  }
  /**
   * `"particle"` variant of {@link SurfaceCreateEntity}.
   */
  export interface ParticleSurfaceCreateEntity extends BaseSurfaceCreateEntity {
    readonly movement: Vector
    readonly height: float
    readonly vertical_speed: float
    readonly frame_speed: float
  }
  /**
   * `"artillery-flare"` variant of {@link SurfaceCreateEntity}.
   */
  export interface ArtilleryFlareSurfaceCreateEntity extends BaseSurfaceCreateEntity {
    readonly movement: Vector
    readonly height: float
    readonly vertical_speed: float
    readonly frame_speed: float
  }
  /**
   * `"projectile"` variant of {@link SurfaceCreateEntity}.
   */
  export interface ProjectileSurfaceCreateEntity extends BaseSurfaceCreateEntity {
    readonly speed: double
    readonly max_range?: double
  }
  /**
   * `"artillery-projectile"` variant of {@link SurfaceCreateEntity}.
   */
  export interface ArtilleryProjectileSurfaceCreateEntity extends BaseSurfaceCreateEntity {
    readonly speed: double
    readonly max_range?: double
  }
  /**
   * `"resource"` variant of {@link SurfaceCreateEntity}.
   */
  export interface ResourceSurfaceCreateEntity extends BaseSurfaceCreateEntity {
    readonly amount: uint
    /**
     * If colliding trees are removed normally for this resource entity based off the prototype tree removal values. Default is true.
     */
    readonly enable_tree_removal?: boolean
    /**
     * If colliding cliffs are removed. Default is true.
     */
    readonly enable_cliff_removal?: boolean
    /**
     * If true, the resource entity will be placed to center of a tile as map generator would place it, otherwise standard non-resource grid alignment rules will apply. Default is true.
     */
    readonly snap_to_tile_center?: boolean
  }
  /**
   * `"underground-belt"` variant of {@link SurfaceCreateEntity}.
   */
  export interface UndergroundBeltSurfaceCreateEntity extends BaseSurfaceCreateEntity {
    /**
     * Defaults to `"input"`.
     */
    readonly type?: "output" | "input"
  }
  /**
   * `"loader"` variant of {@link SurfaceCreateEntity}.
   */
  export interface LoaderSurfaceCreateEntity extends BaseSurfaceCreateEntity {
    /**
     * Defaults to `"input"`.
     */
    readonly type?: "output" | "input"
    readonly request_filters?: readonly InventoryFilter[]
  }
  /**
   * `"loader-1x1"` variant of {@link SurfaceCreateEntity}.
   */
  export interface Loader1x1SurfaceCreateEntity extends BaseSurfaceCreateEntity {
    /**
     * Defaults to `"input"`.
     */
    readonly type?: "output" | "input"
    readonly request_filters?: readonly InventoryFilter[]
  }
  /**
   * `"programmable-speaker"` variant of {@link SurfaceCreateEntity}.
   */
  export interface ProgrammableSpeakerSurfaceCreateEntity extends BaseSurfaceCreateEntity {
    readonly parameters?: ProgrammableSpeakerParameters
    readonly alert_parameters?: ProgrammableSpeakerAlertParameters
  }
  /**
   * `"character-corpse"` variant of {@link SurfaceCreateEntity}.
   */
  export interface CharacterCorpseSurfaceCreateEntity extends BaseSurfaceCreateEntity {
    readonly inventory_size?: uint
    readonly player_index?: PlayerIndex
  }
  /**
   * `"highlight-box"` variant of {@link SurfaceCreateEntity}.
   */
  export interface HighlightBoxSurfaceCreateEntity extends BaseSurfaceCreateEntity {
    /**
     * The bounding box defining the highlight box using absolute map coordinates. If specified, the general `position` parameter still needs to be present, but will be ignored. If not specified, the game falls back to the `source` parameter first, then the `target` parameter second. One of these three parameters need to be specified.
     */
    readonly bounding_box?: BoundingBoxWrite | BoundingBoxArray
    /**
     * Specifies the graphical appearance (color) of the highlight box. Defaults to `"electricity"`.
     */
    readonly box_type?: CursorBoxRenderType
    /**
     * The player to render the highlight box for. If not provided, it will be rendered for all players.
     */
    readonly render_player_index?: uint
    /**
     * The blink interval for this highlight box. Makes it be shown every `blink_interval` ticks. Defaults to `0` (constantly shown).
     */
    readonly blink_interval?: uint
    /**
     * The amount of time in ticks that the highlight box will exist for. Defaults to existing forever.
     */
    readonly time_to_live?: uint
  }
  /**
   * `"speech-bubble"` variant of {@link SurfaceCreateEntity}.
   */
  export interface SpeechBubbleSurfaceCreateEntity extends BaseSurfaceCreateEntity {
    readonly text: LocalisedString
    readonly lifetime?: uint
  }
  /**
   * `"simple-entity-with-owner"` variant of {@link SurfaceCreateEntity}.
   */
  export interface SimpleEntityWithOwnerSurfaceCreateEntity extends BaseSurfaceCreateEntity {
    readonly render_player_index?: uint
  }
  /**
   * `"simple-entity-with-force"` variant of {@link SurfaceCreateEntity}.
   */
  export interface SimpleEntityWithForceSurfaceCreateEntity extends BaseSurfaceCreateEntity {
    readonly render_player_index?: uint
  }
  export type SurfaceCreateEntity =
    | AssemblingMachineSurfaceCreateEntity
    | BeamSurfaceCreateEntity
    | StreamSurfaceCreateEntity
    | ContainerSurfaceCreateEntity
    | CliffSurfaceCreateEntity
    | FlyingTextSurfaceCreateEntity
    | EntityGhostSurfaceCreateEntity
    | FireSurfaceCreateEntity
    | InserterSurfaceCreateEntity
    | ItemEntitySurfaceCreateEntity
    | ItemRequestProxySurfaceCreateEntity
    | RollingStockSurfaceCreateEntity
    | LocomotiveSurfaceCreateEntity
    | LogisticContainerSurfaceCreateEntity
    | ParticleSurfaceCreateEntity
    | ArtilleryFlareSurfaceCreateEntity
    | ProjectileSurfaceCreateEntity
    | ArtilleryProjectileSurfaceCreateEntity
    | ResourceSurfaceCreateEntity
    | UndergroundBeltSurfaceCreateEntity
    | LoaderSurfaceCreateEntity
    | Loader1x1SurfaceCreateEntity
    | ProgrammableSpeakerSurfaceCreateEntity
    | CharacterCorpseSurfaceCreateEntity
    | HighlightBoxSurfaceCreateEntity
    | SpeechBubbleSurfaceCreateEntity
    | SimpleEntityWithOwnerSurfaceCreateEntity
    | SimpleEntityWithForceSurfaceCreateEntity
  /**
   * A "domain" of the world. Surfaces can only be created and deleted through the API. Surfaces are uniquely identified by their name. Every game contains at least the surface "nauvis".
   * @noSelf
   */
  export interface LuaSurface {
    /**
     * Get the pollution for a given position.
     *
     * Pollution is stored per chunk, so this will return the same value for all positions in one chunk.
     * @example
     * game.surfaces[1].get_pollution({1,2})
     */
    get_pollution(position: MapPosition | MapPositionArray): double
    /**
     * Check for collisions with terrain or other entities.
     */
    can_place_entity(params: {
      /**
       * Name of the entity prototype to check.
       */
      readonly name: string
      /**
       * Where the entity would be placed.
       */
      readonly position: MapPosition | MapPositionArray
      /**
       * Direction of the placed entity. Defaults to `north`.
       */
      readonly direction?: defines.direction
      /**
       * The force that would place the entity. Defaults to the `"neutral"` force.
       */
      readonly force?: ForceIdentification
      /**
       * Which type of check should be carried out. Defaults to `ghost_revive`.
       */
      readonly build_check_type?: defines.build_check_type
      /**
       * If `true`, entities that can be marked for deconstruction are ignored. Only used if `build_check_type` is either `manual_ghost`, `script_ghost` or `blueprint_ghost`. Defaults to `false`.
       */
      readonly forced?: boolean
      /**
       * The prototype name of the entity contained in the ghost. Only used if `name` is `entity-ghost`.
       */
      readonly inner_name?: string
    }): boolean
    /**
     * If there exists an entity at the given location that can be fast-replaced with the given entity parameters.
     */
    can_fast_replace(params: {
      /**
       * Name of the entity to check.
       */
      readonly name: string
      /**
       * Where the entity would be placed.
       */
      readonly position: MapPosition | MapPositionArray
      /**
       * Direction the entity would be placed. Defaults to `north`.
       */
      readonly direction?: defines.direction
      /**
       * The force that would place the entity. Defaults to the `"neutral"` force.
       */
      readonly force?: ForceIdentification
    }): boolean
    /**
     * Find an entity of the given name at the given position. This checks both the exact position and the bounding box of the entity.
     * @param entity Name of the entity to look for.
     * @param position Coordinates to look at.
     * @returns `nil` if no such entity is found.
     * @example
     * game.player.selected.surface.find_entity('filter-inserter', {0,0})
     */
    find_entity(entity: string, position: MapPosition | MapPositionArray): LuaEntity | nil
    /**
     * Find entities in a given area.
     *
     * If no area is given all entities on the surface are returned.
     * @example
     * -- Will evaluate to a list of all entities within given area.
     * game.surfaces["nauvis"].find_entities({{-10, -10}, {10, 10}})
     */
    find_entities(area?: BoundingBoxWrite | BoundingBoxArray): LuaEntity[]
    /**
     * Find all entities of the given type or name in the given area.
     *
     * If no filters (`name`, `type`, `force`, etc.) are given, this returns all entities in the search area. If multiple filters are specified, only entities matching all given filters are returned.
     *
     * - If no `area` or `position` are given, the entire surface is searched.
     *
     * - If `position` is given, this returns the entities colliding with that position (i.e the given position is within the entity's collision box).
     *
     * - If `position` and `radius` are given, this returns the entities within the radius of the position. Looks for the center of entities.
     *
     * - If `area` is specified, this returns the entities colliding with that area.
     * @example
     * game.surfaces[1].find_entities_filtered{area = {{-10, -10}, {10, 10}}, type = "resource"} -- gets all resources in the rectangle
     * game.surfaces[1].find_entities_filtered{area = {{-10, -10}, {10, 10}}, name = "iron-ore"} -- gets all iron ores in the rectangle
     * game.surfaces[1].find_entities_filtered{area = {{-10, -10}, {10, 10}}, name = {"iron-ore", "copper-ore"}} -- gets all iron ore and copper ore in the rectangle
     * game.surfaces[1].find_entities_filtered{area = {{-10, -10}, {10, 10}}, force = "player"}  -- gets player owned entities in the rectangle
     * game.surfaces[1].find_entities_filtered{area = {{-10, -10}, {10, 10}}, limit = 5}  -- gets the first 5 entities in the rectangle
     * game.surfaces[1].find_entities_filtered{position = {0, 0}, radius = 10}  -- gets all entities within 10 tiles of the position [0,0].
     */
    find_entities_filtered(params: {
      readonly area?: BoundingBoxWrite | BoundingBoxArray
      /**
       * Has precedence over area field.
       */
      readonly position?: MapPosition | MapPositionArray
      readonly radius?: double
      /**
       * An empty array means the same as providing nothing (`nil`).
       */
      readonly name?: string | readonly string[]
      /**
       * An empty array means the same as providing nothing (`nil`).
       */
      readonly type?: string | readonly string[]
      /**
       * An empty array means the same as providing nothing (`nil`).
       */
      readonly ghost_name?: string | readonly string[]
      /**
       * An empty array means the same as providing nothing (`nil`).
       */
      readonly ghost_type?: string | readonly string[]
      readonly direction?: defines.direction | readonly defines.direction[]
      readonly collision_mask?: CollisionMaskLayer | readonly CollisionMaskLayer[]
      readonly force?: ForceIdentification | readonly ForceIdentification[]
      readonly to_be_deconstructed?: boolean
      readonly to_be_upgraded?: boolean
      readonly limit?: uint
      readonly is_military_target?: boolean
      readonly has_item_inside?: LuaItemPrototype
      /**
       * Whether the filters should be inverted.
       */
      readonly invert?: boolean
    }): LuaEntity[]
    /**
     * Find all tiles of the given name in the given area.
     *
     * If no filters are given, this returns all tiles in the search area.
     *
     * If no `area` or `position` and `radius` is given, the entire surface is searched. If `position` and `radius` are given, only tiles within the radius of the position are included.
     */
    find_tiles_filtered(params: {
      readonly area?: BoundingBoxWrite | BoundingBoxArray
      /**
       * Ignored if not given with radius.
       */
      readonly position?: MapPosition | MapPositionArray
      /**
       * If given with position, will return all tiles within the radius of the position.
       */
      readonly radius?: double
      /**
       * An empty array means the same as providing nothing (`nil`).
       */
      readonly name?: string | readonly string[]
      readonly force?: ForceIdentification | readonly ForceIdentification[]
      readonly limit?: uint
      readonly has_hidden_tile?: boolean
      /**
       * Can be further filtered by supplying a `force` filter.
       */
      readonly has_tile_ghost?: boolean
      /**
       * Can be further filtered by supplying a `force` filter.
       */
      readonly to_be_deconstructed?: boolean
      readonly collision_mask?: CollisionMaskLayer | readonly CollisionMaskLayer[]
      /**
       * Whether the filters should be inverted.
       */
      readonly invert?: boolean
    }): LuaTile[]
    /**
     * Count entities of given type or name in a given area. Works just like {@link LuaSurface#find_entities_filtered LuaSurface::find_entities_filtered}, except this only returns the count. As it doesn't construct all the wrapper objects, this is more efficient if one is only interested in the number of entities.
     *
     * - If no `area` or `position` are given, the entire surface is searched.
     *
     * - If `position` is given, this returns the entities colliding with that position (i.e the given position is within the entity's collision box).
     *
     * - If `position` and `radius` are given, this returns entities in the radius of the position.
     *
     * - If `area` is specified, this returns entities colliding with that area.
     */
    count_entities_filtered(params: {
      readonly area?: BoundingBoxWrite | BoundingBoxArray
      readonly position?: MapPosition | MapPositionArray
      /**
       * If given with position, will count all entities within the radius of the position.
       */
      readonly radius?: double
      /**
       * An empty array means the same as providing nothing (`nil`).
       */
      readonly name?: string | readonly string[]
      /**
       * An empty array means the same as providing nothing (`nil`).
       */
      readonly type?: string | readonly string[]
      /**
       * An empty array means the same as providing nothing (`nil`).
       */
      readonly ghost_name?: string | readonly string[]
      /**
       * An empty array means the same as providing nothing (`nil`).
       */
      readonly ghost_type?: string | readonly string[]
      readonly direction?: defines.direction | readonly defines.direction[]
      readonly collision_mask?: CollisionMaskLayer | readonly CollisionMaskLayer[]
      readonly force?: ForceIdentification | readonly ForceIdentification[]
      readonly to_be_deconstructed?: boolean
      readonly to_be_upgraded?: boolean
      readonly limit?: uint
      readonly is_military_target?: boolean
      /**
       * Whether the filters should be inverted.
       */
      readonly invert?: boolean
    }): uint
    /**
     * Count tiles of a given name in a given area. Works just like {@link LuaSurface#find_tiles_filtered LuaSurface::find_tiles_filtered}, except this only returns the count. As it doesn't construct all the wrapper objects, this is more efficient if one is only interested in the number of tiles.
     *
     * If no `area` or `position` and `radius` is given, the entire surface is searched. If `position` and `radius` are given, only tiles within the radius of the position are included.
     */
    count_tiles_filtered(params: {
      readonly area?: BoundingBoxWrite | BoundingBoxArray
      /**
       * Ignored if not given with radius.
       */
      readonly position?: MapPosition | MapPositionArray
      /**
       * If given with position, will return all tiles within the radius of the position.
       */
      readonly radius?: double
      /**
       * An empty array means the same as providing nothing (`nil`).
       */
      readonly name?: string | readonly string[]
      readonly force?: ForceIdentification | readonly ForceIdentification[]
      readonly limit?: uint
      readonly has_hidden_tile?: boolean
      /**
       * Can be further filtered by supplying a `force` filter.
       */
      readonly has_tile_ghost?: boolean
      /**
       * Can be further filtered by supplying a `force` filter.
       */
      readonly to_be_deconstructed?: boolean
      readonly collision_mask?: CollisionMaskLayer | readonly CollisionMaskLayer[]
      /**
       * If the filters should be inverted.
       */
      readonly invert?: boolean
    }): uint
    /**
     * Find a non-colliding position within a given radius.
     *
     * Special care needs to be taken when using a radius of `0`. The game will not stop searching until it finds a suitable position, so it is important to make sure such a position exists. One particular case where it would not be able to find a solution is running it before any chunks have been generated.
     * @param name Prototype name of the entity to find a position for. (The bounding box for the collision checking is taken from this prototype.)
     * @param center Center of the search area.
     * @param radius Max distance from `center` to search in. A radius of `0` means an infinitely-large search area.
     * @param precision The step length from the given position as it searches, in tiles. Minimum value is `0.01`.
     * @param force_to_tile_center Will only check tile centers. This can be useful when your intent is to place a building at the resulting position, as they must generally be placed at tile centers. Defaults to `false`.
     * @returns The non-colliding position. May be `nil` if no suitable position was found.
     */
    find_non_colliding_position(
      name: string,
      center: MapPosition | MapPositionArray,
      radius: double,
      precision: double,
      force_to_tile_center?: boolean,
    ): MapPosition | nil
    /**
     * Find a non-colliding position within a given rectangle.
     * @param name Prototype name of the entity to find a position for. (The bounding box for the collision checking is taken from this prototype.)
     * @param search_space The rectangle to search inside.
     * @param precision The step length from the given position as it searches, in tiles. Minimum value is 0.01.
     * @param force_to_tile_center Will only check tile centers. This can be useful when your intent is to place a building at the resulting position, as they must generally be placed at tile centers. Defaults to `false`.
     * @returns The non-colliding position. May be `nil` if no suitable position was found.
     */
    find_non_colliding_position_in_box(
      name: string,
      search_space: BoundingBoxWrite | BoundingBoxArray,
      precision: double,
      force_to_tile_center?: boolean,
    ): MapPosition | nil
    /**
     * Spill items on the ground centered at a given location.
     * @param position Center of the spillage
     * @param items Items to spill
     * @param enable_looted When true, each created item will be flagged with the {@link LuaEntity#to_be_looted LuaEntity::to_be_looted} flag.
     * @param force When provided (and not `nil`) the items will be marked for deconstruction by this force.
     * @param allow_belts Whether items can be spilled onto belts. Defaults to `true`.
     * @returns The created item-on-ground entities.
     */
    spill_item_stack(
      position: MapPosition | MapPositionArray,
      items: ItemStackIdentification,
      enable_looted?: boolean,
      force?: ForceIdentification,
      allow_belts?: boolean,
    ): LuaEntity[]
    /**
     * Find enemy units (entities with type "unit") of a given force within an area.
     *
     * This is more efficient than {@link LuaSurface#find_entities LuaSurface::find_entities}.
     * @param center Center of the search area
     * @param radius Radius of the circular search area
     * @param force Force to find enemies of. If not given, uses the player force.
     * @example
     * -- Find all units who would be interested to attack the player, within 100-tile area.
     * local enemies = game.player.surface.find_enemy_units(game.player.position, 100)
     */
    find_enemy_units(center: MapPosition | MapPositionArray, radius: double, force?: ForceIdentification): LuaEntity[]
    /**
     * Find units (entities with type "unit") of a given force and force condition within a given area.
     *
     * This is more efficient than {@link LuaSurface#find_entities LuaSurface::find_entities}.
     * @example
     * -- Find friendly units to "player" force
     * local friendly_units = game.player.surface.find_units({area = {{-10, -10},{10, 10}}, force = "player", condition = "friend")
     * @example
     * -- Find units of "player" force
     * local units = game.player.surface.find_units({area = {{-10, -10},{10, 10}}, force = "player", condition = "same"})
     */
    find_units(params: {
      /**
       * Box to find units within.
       */
      readonly area: BoundingBoxWrite | BoundingBoxArray
      /**
       * Force performing the search.
       */
      readonly force: ForceIdentification
      /**
       * Only forces which meet the condition will be included in the search.
       */
      readonly condition: ForceCondition
    }): LuaEntity[]
    /**
     * Find the enemy military target ({@linkplain https://wiki.factorio.com/Military_units_and_structures military entity}) closest to the given position.
     * @returns The nearest enemy military target or `nil` if no enemy could be found within the given area.
     */
    find_nearest_enemy(params: {
      /**
       * Center of the search area.
       */
      readonly position: MapPosition | MapPositionArray
      /**
       * Radius of the circular search area.
       */
      readonly max_distance: double
      /**
       * The force the result will be an enemy of. Uses the player force if not specified.
       */
      readonly force?: ForceIdentification
    }): LuaEntity | nil
    /**
     * Find the enemy entity-with-owner closest to the given position.
     * @returns The nearest enemy entity-with-owner or `nil` if no enemy could be found within the given area.
     */
    find_nearest_enemy_entity_with_owner(params: {
      /**
       * Center of the search area.
       */
      readonly position: MapPosition | MapPositionArray
      /**
       * Radius of the circular search area.
       */
      readonly max_distance: double
      /**
       * The force the result will be an enemy of. Uses the player force if not specified.
       */
      readonly force?: ForceIdentification
    }): LuaEntity | nil
    /**
     * Give a command to multiple units. This will automatically select suitable units for the task.
     * @returns Number of units actually sent. May be less than `count` if not enough units were available.
     */
    set_multi_command(params: {
      readonly command: CommandWrite
      /**
       * Number of units to give the command to.
       */
      readonly unit_count: uint
      /**
       * Force of the units this command is to be given to. If not specified, uses the enemy force.
       */
      readonly force?: ForceIdentification
      /**
       * Radius to search for units. The search area is centered on the destination of the command.
       */
      readonly unit_search_distance?: uint
    }): uint
    /**
     * Create an entity on this surface.
     *
     * Base attributes: {@link BaseSurfaceCreateEntity}
     *
     * Other attributes may be specified depending on the type of entity:
     * - `"assembling-machine"`: {@link AssemblingMachineSurfaceCreateEntity}
     * - `"beam"`: {@link BeamSurfaceCreateEntity}
     * - `"stream"`: {@link StreamSurfaceCreateEntity}
     * - `"container"`: {@link ContainerSurfaceCreateEntity}
     * - `"cliff"`: {@link CliffSurfaceCreateEntity}
     * - `"flying-text"`: {@link FlyingTextSurfaceCreateEntity}
     * - `"entity-ghost"`: {@link EntityGhostSurfaceCreateEntity}
     * - `"fire"`: {@link FireSurfaceCreateEntity}
     * - `"inserter"`: {@link InserterSurfaceCreateEntity}
     * - `"item-entity"`: {@link ItemEntitySurfaceCreateEntity}
     * - `"item-request-proxy"`: {@link ItemRequestProxySurfaceCreateEntity}
     * - `"rolling-stock"`: {@link RollingStockSurfaceCreateEntity}
     * - `"locomotive"`: {@link LocomotiveSurfaceCreateEntity}
     * - `"logistic-container"`: {@link LogisticContainerSurfaceCreateEntity}
     * - `"particle"`: {@link ParticleSurfaceCreateEntity}
     * - `"artillery-flare"`: {@link ArtilleryFlareSurfaceCreateEntity}
     * - `"projectile"`: {@link ProjectileSurfaceCreateEntity}
     * - `"artillery-projectile"`: {@link ArtilleryProjectileSurfaceCreateEntity}
     * - `"resource"`: {@link ResourceSurfaceCreateEntity}
     * - `"underground-belt"`: {@link UndergroundBeltSurfaceCreateEntity}
     * - `"loader"`: {@link LoaderSurfaceCreateEntity}
     * - `"loader-1x1"`: {@link Loader1x1SurfaceCreateEntity}
     * - `"programmable-speaker"`: {@link ProgrammableSpeakerSurfaceCreateEntity}
     * - `"character-corpse"`: {@link CharacterCorpseSurfaceCreateEntity}
     * - `"highlight-box"`: {@link HighlightBoxSurfaceCreateEntity}
     * - `"speech-bubble"`: {@link SpeechBubbleSurfaceCreateEntity}
     * - `"simple-entity-with-owner"`: {@link SimpleEntityWithOwnerSurfaceCreateEntity}
     * - `"simple-entity-with-force"`: {@link SimpleEntityWithForceSurfaceCreateEntity}
     *
     * ## Raised events
     * - {@link ScriptRaisedBuiltEvent script_raised_built}? _instantly_ Raised if the `raise_built` flag was set and the entity was successfully created.
     * @returns The created entity or `nil` if the creation failed.
     * @example
     * asm = game.surfaces[1].create_entity{name = "assembling-machine-1", position = {15, 3}, force = game.forces.player, recipe = "iron-stick"}
     * @example
     * -- Creates a filter inserter with circuit conditions and a filter
     * game.surfaces[1].create_entity{
     *   name = "filter-inserter", position = {20, 15}, force = game.player.force,
     *   conditions =
     *   {
     *     red = {name = "wood", count = 3, operator = ">"},
     *     green = {name = "iron-ore", count = 1, operator = "<"},
     *     logistics = {name = "wood", count = 3, operator = "="}
     *   },
     *   filters = {{index = 1, name = "iron-ore"}}
     * }
     * @example
     * -- Creates a requester chest already set to request 128 iron plates.
     * game.surfaces[1].create_entity{
     *   name = "logistic-chest-requester", position = {game.player.position.x+3, game.player.position.y},
     *   force = game.player.force, request_filters = {{index = 1, name = "iron-plate", count = 128}}
     * }
     * @example
     * game.surfaces[1].create_entity{name = "big-biter", position = {15, 3}, force = game.forces.player} -- Friendly biter
     * game.surfaces[1].create_entity{name = "medium-biter", position = {15, 3}, force = game.forces.enemy} -- Enemy biter
     * @example
     * -- Creates a basic inserter at the player's location facing north
     * game.surfaces[1].create_entity{name = "inserter", position = game.player.position, direction = defines.direction.north}
     */
    create_entity(params: SurfaceCreateEntity): LuaEntity | nil
    create_trivial_smoke(params: {
      /**
       * The smoke prototype name to create.
       */
      readonly name: string
      /**
       * Where to create the smoke.
       */
      readonly position: MapPosition | MapPositionArray
    }): void
    /**
     * Creates a particle at the given location
     */
    create_particle(params: {
      /**
       * The particle name.
       */
      readonly name: string
      /**
       * Where to create the particle.
       */
      readonly position: MapPosition | MapPositionArray
      readonly movement: Vector
      readonly height: float
      readonly vertical_speed: float
      readonly frame_speed: float
    }): void
    /**
     * Create a new unit group at a given position.
     *
     * ## Raised events
     * - {@link OnUnitGroupCreatedEvent on_unit_group_created} _instantly_
     */
    create_unit_group(params: {
      /**
       * Initial position of the new unit group.
       */
      readonly position: MapPosition | MapPositionArray
      /**
       * Force of the new unit group. Defaults to `"enemy"`.
       */
      readonly force?: ForceIdentification
    }): LuaUnitGroup
    /**
     * Send a group to build a new base.
     *
     * The specified force must be AI-controlled; i.e. `force.ai_controllable` must be `true`.
     * @param position Location of the new base.
     * @param unit_count Number of biters to send for the base-building task.
     * @param force Force the new base will belong to. Defaults to enemy.
     */
    build_enemy_base(position: MapPosition | MapPositionArray, unit_count: uint, force?: ForceIdentification): void
    /**
     * Get the tile at a given position. An alternative call signature for this method is passing it a single {@link TilePosition}.
     *
     * Non-integer values will result in them being rounded down.
     */
    get_tile(x: int, y: int): LuaTile
    /**
     * Set tiles at specified locations. Can automatically correct the edges around modified tiles.
     *
     * Placing a {@link LuaTilePrototype#mineable_properties mineable} tile on top of a non-mineable one will turn the latter into the {@link LuaTile#hidden_tile LuaTile::hidden_tile} for that tile. Placing a mineable tile on a mineable one or a non-mineable tile on a non-mineable one will not modify the hidden tile. This restriction can however be circumvented by using {@link LuaSurface#set_hidden_tile LuaSurface::set_hidden_tile}.
     *
     * It is recommended to call this method once for all the tiles you want to change rather than calling it individually for every tile. As the tile correction is used after every step, calling it one by one could cause the tile correction logic to redo some of the changes. Also, many small API calls are generally more performance intensive than one big one.
     *
     * ## Raised events
     * - {@link ScriptRaisedSetTilesEvent script_raised_set_tiles}? _instantly_ Raised if the `raise_event` flag was set.
     * @param correct_tiles If `false`, the correction logic is not applied to the changed tiles. Defaults to `true`.
     * @param remove_colliding_entities Defaults to `true`.
     * @param remove_colliding_decoratives Defaults to `true`.
     * @param raise_event Defaults to `false`.
     */
    set_tiles(
      tiles: readonly TileWrite[],
      correct_tiles?: boolean,
      remove_colliding_entities?: boolean | "abort_on_collision",
      remove_colliding_decoratives?: boolean,
      raise_event?: boolean,
    ): void
    /**
     * Spawn pollution at the given position.
     * @param source Where to spawn the pollution.
     * @param amount How much pollution to add.
     */
    pollute(source: MapPosition | MapPositionArray, amount: double): void
    /**
     * Get an iterator going over every chunk on this surface.
     */
    get_chunks(): LuaChunkIterator
    /**
     * Is a given chunk generated?
     * @param position The chunk's position.
     */
    is_chunk_generated(position: ChunkPosition | ChunkPositionArray): boolean
    /**
     * Request that the game's map generator generate chunks at the given position for the given radius on this surface. If the radius is `0`, then only the chunk at the given position is generated.
     * @param position Where to generate the new chunks.
     * @param radius The chunk radius from `position` to generate new chunks in. Defaults to `0`.
     */
    request_to_generate_chunks(position: MapPosition | MapPositionArray, radius?: uint): void
    /**
     * Blocks and generates all chunks that have been requested using all available threads.
     */
    force_generate_chunk_requests(): void
    /**
     * Set generated status of a chunk. Useful when copying chunks.
     * @param position The chunk's position.
     * @param status The chunk's new status.
     */
    set_chunk_generated_status(
      position: ChunkPosition | ChunkPositionArray,
      status: defines.chunk_generated_status,
    ): void
    /**
     * Find the logistic network that covers a given position.
     * @param force Force the logistic network should belong to.
     * @returns The found network or `nil` if no such network was found.
     */
    find_logistic_network_by_position(
      position: MapPosition | MapPositionArray,
      force: ForceIdentification,
    ): LuaLogisticNetwork | nil
    /**
     * Find the logistic network with a cell closest to a given position.
     * @param force Force the logistic network should belong to.
     * @returns The found network or `nil` if no such network was found.
     */
    find_closest_logistic_network_by_position(
      position: MapPosition | MapPositionArray,
      force: ForceIdentification,
    ): LuaLogisticNetwork | nil
    /**
     * Finds all of the logistics networks whose construction area intersects with the given position.
     * @param force Force the logistic networks should belong to.
     */
    find_logistic_networks_by_construction_area(
      position: MapPosition | MapPositionArray,
      force: ForceIdentification,
    ): LuaLogisticNetwork[]
    /**
     * Place a deconstruction request.
     *
     * ## Raised events
     * - {@link OnMarkedForDeconstructionEvent on_marked_for_deconstruction}? _instantly_ Raised for every entity that has been successfully marked for deconstruction.
     */
    deconstruct_area(params: {
      /**
       * The area to mark for deconstruction.
       */
      readonly area: BoundingBoxWrite | BoundingBoxArray
      /**
       * The force whose bots should perform the deconstruction.
       */
      readonly force: ForceIdentification
      /**
       * The player to set the last_user to if any.
       */
      readonly player?: PlayerIdentification
      /**
       * If chunks covered by fog-of-war are skipped.
       */
      readonly skip_fog_of_war?: boolean
      /**
       * The deconstruction item to use if any.
       */
      readonly item?: LuaItemStack
    }): void
    /**
     * Cancel a deconstruction order.
     *
     * ## Raised events
     * - {@link OnCancelledDeconstructionEvent on_cancelled_deconstruction}? _instantly_ Raised for every entity whose deconstruction has been successfully cancelled.
     */
    cancel_deconstruct_area(params: {
      /**
       * The area to cancel deconstruction orders in.
       */
      readonly area: BoundingBoxWrite | BoundingBoxArray
      /**
       * The force whose deconstruction orders to cancel.
       */
      readonly force: ForceIdentification
      /**
       * The player to set the last_user to if any.
       */
      readonly player?: PlayerIdentification
      /**
       * If chunks covered by fog-of-war are skipped.
       */
      readonly skip_fog_of_war?: boolean
      /**
       * The deconstruction item to use if any.
       */
      readonly item?: LuaItemStack
    }): void
    /**
     * Place an upgrade request.
     *
     * ## Raised events
     * - {@link OnMarkedForUpgradeEvent on_marked_for_upgrade}? _instantly_ Raised for every entity that has been successfully marked for upgrade.
     */
    upgrade_area(params: {
      /**
       * The area to mark for upgrade.
       */
      readonly area: BoundingBoxWrite | BoundingBoxArray
      /**
       * The force whose bots should perform the upgrade.
       */
      readonly force: ForceIdentification
      /**
       * The player to set the last_user to if any.
       */
      readonly player?: PlayerIdentification
      /**
       * If chunks covered by fog-of-war are skipped.
       */
      readonly skip_fog_of_war?: boolean
      /**
       * The upgrade item to use.
       */
      readonly item: LuaItemStack
    }): void
    /**
     * Cancel a upgrade order.
     *
     * ## Raised events
     * - {@link OnCancelledUpgradeEvent on_cancelled_upgrade}? _instantly_ Raised for every entity whose upgrade has been successfully cancelled.
     */
    cancel_upgrade_area(params: {
      /**
       * The area to cancel upgrade orders in.
       */
      readonly area: BoundingBoxWrite | BoundingBoxArray
      /**
       * The force whose upgrade orders to cancel.
       */
      readonly force: ForceIdentification
      /**
       * The player to set the last_user to if any.
       */
      readonly player?: PlayerIdentification
      /**
       * If chunks covered by fog-of-war are skipped.
       */
      readonly skip_fog_of_war?: boolean
      /**
       * The upgrade item to use if any.
       */
      readonly item?: LuaItemStack
    }): void
    /**
     * The hidden tile name.
     * @param position The tile position.
     * @returns `nil` if there isn't one for the given position.
     */
    get_hidden_tile(position: TilePosition | TilePositionArray): string | nil
    /**
     * Set the hidden tile for the specified position. While during normal gameplay only {@link LuaTilePrototype#mineable_properties non-mineable} tiles can become hidden, this method allows any kind of tile to be set as the hidden one.
     * @param position The tile position.
     * @param tile The new hidden tile or `nil` to clear the hidden tile.
     */
    set_hidden_tile(position: TilePosition | TilePositionArray, tile: string | LuaTilePrototype | nil): void
    /**
     * Gets all tiles of the given types that are connected horizontally or vertically to the given tile position including the given tile position.
     *
     * This won't find tiles in non-generated chunks.
     * @param position The tile position to start at.
     * @param tiles The tiles to search for.
     * @param include_diagonal Include tiles that are connected diagonally.
     * @param area The area to find connected tiles in. If provided the start position must be in this area.
     * @returns The resulting set of tiles.
     */
    get_connected_tiles(
      position: TilePosition | TilePositionArray,
      tiles: readonly string[],
      include_diagonal?: boolean,
      area?: BoundingBoxWrite | BoundingBoxArray,
    ): TilePosition[]
    /**
     * ## Raised events
     * - {@link OnPreChunkDeletedEvent on_pre_chunk_deleted} _future_tick_
     * - {@link OnChunkDeletedEvent on_chunk_deleted} _future_tick_
     * @param position The chunk position to delete
     */
    delete_chunk(position: ChunkPosition | ChunkPositionArray): void
    /**
     * Regenerate autoplacement of some entities on this surface. This can be used to autoplace newly-added entities.
     *
     * All specified entity prototypes must be autoplacable. If nothing is given all entities are generated on all chunks.
     * @param entities Prototype names of entity or entities to autoplace. When `nil` all entities with an autoplace are used.
     * @param chunks The chunk positions to regenerate the entities on. If not given all chunks are regenerated. Note chunks with status < entities are ignored.
     */
    regenerate_entity(
      entities?: string | readonly string[],
      chunks?: readonly (ChunkPosition | ChunkPositionArray)[],
    ): void
    /**
     * Regenerate autoplacement of some decoratives on this surface. This can be used to autoplace newly-added decoratives.
     *
     * All specified decorative prototypes must be autoplacable. If nothing is given all decoratives are generated on all chunks.
     * @param decoratives Prototype names of decorative or decoratives to autoplace. When `nil` all decoratives with an autoplace are used.
     * @param chunks The chunk positions to regenerate the entities on. If not given all chunks are regenerated. Note chunks with status < entities are ignored.
     */
    regenerate_decorative(
      decoratives?: string | readonly string[],
      chunks?: readonly (ChunkPosition | ChunkPositionArray)[],
    ): void
    /**
     * Print text to the chat console of all players on this surface.
     *
     * By default, messages that are identical to a message sent in the last 60 ticks are not printed again.
     */
    print(message: LocalisedString, print_settings?: (Color | ColorArray) | PrintSettings): void
    /**
     * Removes all decoratives from the given area.
     *
     * If no area and no position are given, then the entire surface is searched.
     */
    destroy_decoratives(params: {
      readonly area?: BoundingBoxWrite | BoundingBoxArray
      readonly position?: TilePosition | TilePositionArray
      readonly name?: string | readonly string[] | LuaDecorativePrototype | readonly LuaDecorativePrototype[]
      readonly collision_mask?: CollisionMaskLayer | readonly CollisionMaskLayer[]
      readonly from_layer?: string
      readonly to_layer?: string
      /**
       * Soft decoratives can be drawn over rails.
       */
      readonly exclude_soft?: boolean
      readonly limit?: uint
      /**
       * If the filters should be inverted.
       */
      readonly invert?: boolean
    }): void
    /**
     * Adds the given decoratives to the surface.
     *
     * This will merge decoratives of the same type that already exist effectively increasing the "amount" field.
     */
    create_decoratives(params: {
      /**
       * If collision should be checked against entities/tiles.
       */
      readonly check_collision?: boolean
      readonly decoratives: readonly Decorative[]
    }): void
    /**
     * Find decoratives of a given name in a given area.
     *
     * If no filters are given, returns all decoratives in the search area. If multiple filters are specified, returns only decoratives matching every given filter. If no area and no position are given, the entire surface is searched.
     * @example
     * game.surfaces[1].find_decoratives_filtered{area = {{-10, -10}, {10, 10}}, name = "sand-decal"} -- gets all sand-decals in the rectangle
     * game.surfaces[1].find_decoratives_filtered{area = {{-10, -10}, {10, 10}}, limit = 5}  -- gets the first 5 decoratives in the rectangle
     */
    find_decoratives_filtered(params: {
      readonly area?: BoundingBoxWrite | BoundingBoxArray
      readonly position?: TilePosition | TilePositionArray
      readonly name?: string | readonly string[] | LuaDecorativePrototype | readonly LuaDecorativePrototype[]
      readonly collision_mask?: CollisionMaskLayer | readonly CollisionMaskLayer[]
      readonly from_layer?: string
      readonly to_layer?: string
      /**
       * Soft decoratives can be drawn over rails.
       */
      readonly exclude_soft?: boolean
      readonly limit?: uint
      /**
       * If the filters should be inverted.
       */
      readonly invert?: boolean
    }): DecorativeResult[]
    /**
     * @param force The force to search. Not providing a force will match trains in any force.
     */
    get_trains(force?: ForceIdentification): LuaTrain[]
    /**
     * Clears all pollution on this surface.
     */
    clear_pollution(): void
    /**
     * Play a sound for every player on this surface.
     *
     * The sound is not played if its location is not {@link LuaForce#chart charted} for that player.
     */
    play_sound(params: {
      /**
       * The sound to play.
       */
      readonly path: SoundPath
      /**
       * Where the sound should be played. If not given, it's played at the current position of each player.
       */
      readonly position?: MapPosition | MapPositionArray
      /**
       * The volume of the sound to play. Must be between 0 and 1 inclusive.
       */
      readonly volume_modifier?: double
      /**
       * The volume mixer to play the sound through. Defaults to the default mixer for the given sound type.
       */
      readonly override_sound_type?: SoundType
    }): void
    /**
     * Gets the resource amount of all resources on this surface
     */
    get_resource_counts(): Record<string, uint>
    /**
     * Gets a random generated chunk position or 0,0 if no chunks have been generated on this surface.
     */
    get_random_chunk(): ChunkPosition
    /**
     * Clones the given area. Entities are cloned in an order such that they can always be created, eg. rails before trains.
     *
     * ## Raised events
     * - {@link OnEntityClonedEvent on_entity_cloned} _instantly_ Raised for every entity that was cloned.
     * - {@link OnAreaClonedEvent on_area_cloned} _instantly_ Raised after the individual `on_entity_cloned` events.
     */
    clone_area(params: {
      readonly source_area: BoundingBoxWrite | BoundingBoxArray
      readonly destination_area: BoundingBoxWrite | BoundingBoxArray
      readonly destination_surface?: SurfaceIdentification
      readonly destination_force?: ForceIdentification
      /**
       * If tiles should be cloned
       */
      readonly clone_tiles?: boolean
      /**
       * If entities should be cloned
       */
      readonly clone_entities?: boolean
      /**
       * If decoratives should be cloned
       */
      readonly clone_decoratives?: boolean
      /**
       * If the destination entities should be cleared
       */
      readonly clear_destination_entities?: boolean
      /**
       * If the destination decoratives should be cleared
       */
      readonly clear_destination_decoratives?: boolean
      /**
       * If the destination surface should be expanded when destination_area is outside current bounds. Default false.
       */
      readonly expand_map?: boolean
      /**
       * If true, the building effect smoke will be shown around the new entities.
       */
      readonly create_build_effect_smoke?: boolean
    }): void
    /**
     * Clones the given area.
     *
     * {@link defines.events.on_entity_cloned} is raised for each entity, and then {@link defines.events.on_area_cloned} is raised.
     *
     * Entities are cloned in an order such that they can always be created, eg. rails before trains.
     */
    clone_brush(params: {
      readonly source_offset: TilePosition | TilePositionArray
      readonly destination_offset: TilePosition | TilePositionArray
      readonly source_positions: readonly (TilePosition | TilePositionArray)[]
      readonly destination_surface?: SurfaceIdentification
      readonly destination_force?: LuaForce | string
      /**
       * If tiles should be cloned
       */
      readonly clone_tiles?: boolean
      /**
       * If entities should be cloned
       */
      readonly clone_entities?: boolean
      /**
       * If decoratives should be cloned
       */
      readonly clone_decoratives?: boolean
      /**
       * If the destination entities should be cleared
       */
      readonly clear_destination_entities?: boolean
      /**
       * If the destination decoratives should be cleared
       */
      readonly clear_destination_decoratives?: boolean
      /**
       * If the destination surface should be expanded when destination_area is outside current bounds. Default false.
       */
      readonly expand_map?: boolean
      /**
       * If manual-style collision checks should be done.
       */
      readonly manual_collision_mode?: boolean
      /**
       * If true, the building effect smoke will be shown around the new entities.
       */
      readonly create_build_effect_smoke?: boolean
    }): void
    /**
     * Clones the given entities.
     *
     * Entities are cloned in an order such that they can always be created, eg. rails before trains.
     *
     * ## Raised events
     * - {@link OnEntityClonedEvent on_entity_cloned} _instantly_ Raised for every entity that was cloned.
     */
    clone_entities(params: {
      readonly entities: readonly LuaEntity[]
      readonly destination_offset: Vector
      readonly destination_surface?: SurfaceIdentification
      readonly destination_force?: ForceIdentification
      readonly snap_to_grid?: boolean
      /**
       * If true, the building effect smoke will be shown around the new entities.
       */
      readonly create_build_effect_smoke?: boolean
    }): void
    /**
     * Clears this surface deleting all entities and chunks on it.
     *
     * ## Raised events
     * - {@link OnPreSurfaceClearedEvent on_pre_surface_cleared} _future_tick_
     * - {@link OnSurfaceClearedEvent on_surface_cleared} _future_tick_
     * @param ignore_characters Whether characters on this surface that are connected to or associated with players should be ignored (not destroyed). Defaults to `false`.
     */
    clear(ignore_characters?: boolean): void
    /**
     * Generates a path with the specified constraints (as an array of {@link PathfinderWaypoint PathfinderWaypoints}) using the unit pathfinding algorithm. This path can be used to emulate pathing behavior by script for non-unit entities, such as vehicles. If you want to command actual units (such as biters or spitters) to move, use {@link LuaEntity#set_command LuaEntity::set_command} instead.
     *
     * The resulting path is ultimately returned asynchronously via {@link OnScriptPathRequestFinishedEvent on_script_path_request_finished}.
     *
     * ## Raised events
     * - {@link OnScriptPathRequestFinishedEvent on_script_path_request_finished} _future_tick_
     * @returns A unique handle to identify this call when {@link OnScriptPathRequestFinishedEvent on_script_path_request_finished} fires.
     */
    request_path(params: {
      /**
       * The dimensions of the object that's supposed to travel the path.
       */
      readonly bounding_box: BoundingBoxWrite | BoundingBoxArray
      /**
       * The list of masks the `bounding_box` collides with.
       */
      readonly collision_mask: CollisionMaskWithFlags | readonly string[]
      /**
       * The position from which to start pathfinding.
       */
      readonly start: MapPosition | MapPositionArray
      /**
       * The position to find a path to.
       */
      readonly goal: MapPosition | MapPositionArray
      /**
       * The force for which to generate the path, determining which gates can be opened for example.
       */
      readonly force: ForceIdentification
      /**
       * How close the pathfinder needs to get to its `goal` (in tiles). Defaults to `1`.
       */
      readonly radius?: double
      /**
       * Flags that affect pathfinder behavior.
       */
      readonly pathfind_flags?: PathfinderFlags
      /**
       * Whether the path request can open gates. Defaults to `false`.
       */
      readonly can_open_gates?: boolean
      /**
       * Defines how coarse the pathfinder's grid is, where smaller values mean a coarser grid. Defaults to `0`, which equals a resolution of `1x1` tiles, centered on tile centers. Values range from `-8` to `8` inclusive, where each integer increment doubles/halves the resolution. So, a resolution of `-8` equals a grid of `256x256` tiles, and a resolution of `8` equals `1/256` of a tile.
       */
      readonly path_resolution_modifier?: int
      /**
       * Makes the pathfinder ignore collisions with this entity if it is given.
       */
      readonly entity_to_ignore?: LuaEntity
    }): uint
    /**
     * Gets the script areas that match the given name or if no name is given all areas are returned.
     */
    get_script_areas(name?: string): ScriptArea[]
    /**
     * Gets the first script area by name or id.
     * @param key The name or id of the area to get.
     */
    get_script_area(key?: string | uint): ScriptArea | nil
    /**
     * Sets the given script area to the new values.
     * @param id The area to edit.
     */
    edit_script_area(id: uint, area: ScriptAreaWrite): void
    /**
     * Adds the given script area.
     * @returns The id of the created area.
     */
    add_script_area(area: ScriptAreaWrite): uint
    /**
     * Removes the given script area.
     * @returns If the area was actually removed. False when it didn't exist.
     */
    remove_script_area(id: uint): boolean
    /**
     * Gets the script positions that match the given name or if no name is given all positions are returned.
     */
    get_script_positions(name?: string): ScriptPosition[]
    /**
     * Gets the first script position by name or id.
     * @param key The name or id of the position to get.
     */
    get_script_position(key?: string | uint): ScriptPosition | nil
    /**
     * Sets the given script position to the new values.
     * @param id The position to edit.
     */
    edit_script_position(id: uint, area: ScriptPositionWrite): void
    /**
     * Adds the given script position.
     * @returns The id of the created position.
     */
    add_script_position(area: ScriptPositionWrite): uint
    /**
     * Removes the given script position.
     * @returns If the position was actually removed. False when it didn't exist.
     */
    remove_script_position(id: uint): boolean
    /**
     * Gets the map exchange string for the current map generation settings of this surface.
     */
    get_map_exchange_string(): string
    /**
     * Gets the starting area radius of this surface.
     */
    get_starting_area_radius(): double
    /**
     * Gets the closest entity in the list to this position.
     * @param entities The Entities to check
     */
    get_closest(position: MapPosition | MapPositionArray, entities: readonly LuaEntity[]): LuaEntity | nil
    /**
     * Gets train stops matching the given filters.
     */
    get_train_stops(params?: {
      /**
       * The name(s) of the train stops. Not providing names will match any stop.
       */
      readonly name?: string | readonly string[]
      /**
       * The force to search. Not providing a force will match stops in any force.
       */
      readonly force?: ForceIdentification
    }): LuaEntity[]
    /**
     * Gets the total amount of pollution on the surface by iterating over all of the chunks containing pollution.
     */
    get_total_pollution(): double
    /**
     * Whether the given entity prototype collides at the given position and direction.
     * @param prototype The entity prototype to check
     * @param position The position to check
     * @param use_map_generation_bounding_box If the map generation bounding box should be used instead of the collision bounding box
     */
    entity_prototype_collides(
      prototype: EntityPrototypeIdentification,
      position: MapPosition | MapPositionArray,
      use_map_generation_bounding_box: boolean,
      direction?: defines.direction,
    ): boolean
    /**
     * Whether the given decorative prototype collides at the given position and direction.
     * @param prototype The decorative prototype to check
     * @param position The position to check
     */
    decorative_prototype_collides(prototype: string, position: MapPosition | MapPositionArray): boolean
    /**
     * Calculate values for a list of tile properties at a list of positions.
     *
     * Requests for unrecognized properties will be ignored, so this can also be used to test whether those properties exist.
     * @param property_names Names of properties (`"elevation"`, etc) to calculate.
     * @param positions Positions for which to calculate property values
     * @returns Table of property value lists, keyed by property name
     */
    calculate_tile_properties(
      property_names: readonly string[],
      positions: readonly (MapPosition | MapPositionArray)[],
    ): Record<string, double[]>
    /**
     * Returns all the military targets (entities with force) on this chunk for the given force.
     * @param position The chunk's position.
     * @param force Entities of this force will be returned.
     */
    get_entities_with_force(position: ChunkPosition | ChunkPositionArray, force: ForceIdentification): LuaEntity[]
    /**
     * Sets the given area to the checkerboard lab tiles.
     * @param area The tile area.
     */
    build_checkerboard(area: BoundingBoxWrite | BoundingBoxArray): void
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * The name of this surface. Names are unique among surfaces.
     *
     * The default surface can't be renamed.
     *
     * ## Raised events
     * - {@link OnSurfaceRenamedEvent on_surface_renamed} _instantly_
     */
    name: string
    /**
     * This surface's index in {@link LuaGameScript#surfaces LuaGameScript::surfaces} (unique ID). It is assigned when a surface is created, and remains so until it is {@link OnSurfaceDeletedEvent deleted}. Indexes of deleted surfaces can be reused.
     */
    readonly index: SurfaceIndex
    /**
     * The generation settings for this surface. These can be modified after surface generation, but note that this will not retroactively update the surface. To manually regenerate it, {@link LuaSurface#regenerate_entity LuaSurface::regenerate_entity}, {@link LuaSurface#regenerate_decorative LuaSurface::regenerate_decorative}, and {@link LuaSurface#delete_chunk LuaSurface::delete_chunk} can be used.
     */
    get map_gen_settings(): MapGenSettings
    set map_gen_settings(value: MapGenSettingsWrite)
    /**
     * When set to true, new chunks will be generated with lab tiles, instead of using the surface's map generation settings.
     */
    generate_with_lab_tiles: boolean
    /**
     * When set to true, the sun will always shine.
     */
    always_day: boolean
    /**
     * Current time of day, as a number in range `[0, 1)`.
     */
    daytime: double
    /**
     * Amount of darkness at the current time, as a number in range `[0, 1]`.
     */
    readonly darkness: float
    /**
     * Current wind speed in tiles per tick.
     */
    wind_speed: double
    /**
     * Current wind direction.
     */
    wind_orientation: RealOrientation
    /**
     * Change in wind orientation per tick.
     */
    wind_orientation_change: double
    /**
     * Is peaceful mode enabled on this surface?
     */
    peaceful_mode: boolean
    /**
     * True if daytime is currently frozen.
     */
    freeze_daytime: boolean
    /**
     * The number of ticks per day for this surface.
     */
    ticks_per_day: uint
    /**
     * The daytime when dusk starts.
     */
    dusk: double
    /**
     * The daytime when dawn starts.
     */
    dawn: double
    /**
     * The daytime when evening starts.
     */
    evening: double
    /**
     * The daytime when morning starts.
     */
    morning: double
    /**
     * The multiplier of solar power on this surface. Cannot be less than 0.
     */
    solar_power_multiplier: double
    /**
     * The minimal brightness during the night. Defaults to `0.15`. This has an effect on both rendering and game mechanics such as biter spawns and solar power.
     */
    min_brightness: double
    /**
     * Defines how surface daytime brightness influences each color channel of the current color lookup table (LUT).
     *
     * The LUT is multiplied by `((1 - weight) + brightness * weight)` and result is clamped to range `[0, 1]`.
     *
     * Default is `{0, 0, 0}`, which means no influence.
     * @example
     * -- Makes night on the surface pitch black, LuaSurface::min_brightness is set to default value 0.15.
     * game.surfaces[1].brightness_visual_weights = { 1 / 0.85, 1 / 0.85, 1 / 0.85 }
     */
    get brightness_visual_weights(): ColorModifier
    set brightness_visual_weights(value: ColorModifier | ColorModifierArray)
    /**
     * If clouds are shown on this surface. If `false`, clouds are never shown. If `true`, the player must also have clouds enabled in graphics settings for them to be shown.
     */
    show_clouds: boolean
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaSurface"
  }
  /**
   * One research item.
   * @noSelf
   */
  export interface LuaTechnology {
    /**
     * Reload this technology from its prototype.
     */
    reload(): void
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * The force this technology belongs to.
     */
    readonly force: LuaForce
    /**
     * Name of this technology.
     */
    readonly name: string
    /**
     * Localised name of this technology.
     */
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    /**
     * The prototype of this technology.
     */
    readonly prototype: LuaTechnologyPrototype
    /**
     * Can this technology be researched?
     */
    enabled: boolean
    /**
     * If this technology will be visible in the research GUI even though it is disabled.
     */
    visible_when_disabled: boolean
    /**
     * Is this an upgrade-type research?
     */
    readonly upgrade: boolean
    /**
     * Has this technology been researched? Switching from `false` to `true` will trigger the technology advancement perks; switching from `true` to `false` will reverse them.
     */
    researched: boolean
    /**
     * Prerequisites of this technology. The result maps technology name to the {@link LuaTechnology} object.
     */
    readonly prerequisites: Record<string, LuaTechnology>
    /**
     * The types of ingredients that labs will require to research this technology.
     */
    readonly research_unit_ingredients: Ingredient[]
    /**
     * Effects applied when this technology is researched.
     */
    readonly effects: TechnologyModifier[]
    /**
     * The number of research units required for this technology.
     *
     * This is multiplied by the current research cost multiplier, unless {@link LuaTechnologyPrototype#ignore_tech_cost_multiplier LuaTechnologyPrototype::ignore_tech_cost_multiplier} is `true`.
     */
    readonly research_unit_count: uint
    /**
     * Amount of energy required to finish a unit of research.
     */
    readonly research_unit_energy: double
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    /**
     * The current level of this technology. For level-based technology writing to this is the same as researching the technology to the previous level. Writing the level will set {@link LuaTechnology#enabled LuaTechnology::enabled} to `true`.
     */
    level: uint
    /**
     * The count formula, if this research has any. See {@link import("factorio:prototype").TechnologyUnit#count_formula TechnologyUnit::count_formula} for details.
     */
    readonly research_unit_count_formula?: string
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaTechnology"
  }
  /**
   * A Technology prototype.
   * @noSelf
   */
  export interface LuaTechnologyPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Name of this technology.
     */
    readonly name: string
    /**
     * Localised name of this technology.
     */
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    /**
     * If this technology prototype is enabled by default (enabled at the beginning of a game).
     */
    readonly enabled: boolean
    /**
     * If this technology prototype is hidden.
     */
    readonly hidden: boolean
    /**
     * If this technology will be visible in the research GUI even though it is disabled.
     */
    readonly visible_when_disabled: boolean
    /**
     * If this technology ignores the technology cost multiplier setting.
     *
     * {@link LuaTechnologyPrototype#research_unit_count LuaTechnologyPrototype::research_unit_count} will already take this setting into account.
     */
    readonly ignore_tech_cost_multiplier: boolean
    /**
     * If the is technology prototype is an upgrade to some other technology.
     */
    readonly upgrade: boolean
    /**
     * Prerequisites of this technology. The result maps technology name to the {@link LuaTechnologyPrototype} object.
     */
    readonly prerequisites: Record<string, LuaTechnologyPrototype>
    /**
     * The types of ingredients that labs will require to research this technology.
     */
    readonly research_unit_ingredients: Ingredient[]
    /**
     * Effects applied when this technology is researched.
     */
    readonly effects: TechnologyModifier[]
    /**
     * The number of research units required for this technology.
     *
     * This is multiplied by the current research cost multiplier, unless {@link LuaTechnologyPrototype#ignore_tech_cost_multiplier LuaTechnologyPrototype::ignore_tech_cost_multiplier} is `true`.
     */
    readonly research_unit_count: uint
    /**
     * Amount of energy required to finish a unit of research.
     */
    readonly research_unit_energy: double
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    /**
     * The level of this research.
     */
    readonly level: uint
    /**
     * The max level of this research.
     */
    readonly max_level: uint
    /**
     * The count formula, if this research has any. See {@link import("factorio:prototype").TechnologyUnit#count_formula TechnologyUnit::count_formula} for details.
     */
    readonly research_unit_count_formula?: string
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaTechnologyPrototype"
  }
  /**
   * A single "square" on the map.
   * @noSelf
   */
  export interface LuaTile {
    /**
     * What type of things can collide with this tile?
     * @example
     * -- Check if the character would collide with a tile
     * game.player.print(tostring(game.player.surface.get_tile(1, 1).collides_with("player-layer")))
     */
    collides_with(layer: CollisionMaskLayer): boolean
    /**
     * Is this tile marked for deconstruction?
     * @param force The force who did the deconstruction order.
     */
    to_be_deconstructed(force?: ForceIdentification): boolean
    /**
     * Orders deconstruction of this tile by the given force.
     *
     * ## Raised events
     * - {@link OnMarkedForDeconstructionEvent on_marked_for_deconstruction}? _instantly_ Raised if the tile was successfully marked for deconstruction.
     * @param force The force whose robots are supposed to do the deconstruction.
     * @param player The player to set the last_user to if any.
     * @returns The deconstructible tile proxy created, if any.
     */
    order_deconstruction(force: ForceIdentification, player?: PlayerIdentification): LuaEntity | nil
    /**
     * Cancels deconstruction if it is scheduled, does nothing otherwise.
     *
     * ## Raised events
     * - {@link OnCancelledDeconstructionEvent on_cancelled_deconstruction}? _instantly_ Raised if the tile's deconstruction was successfully cancelled.
     * @param force The force who did the deconstruction order.
     * @param player The player to set the last_user to if any.
     */
    cancel_deconstruction(force: ForceIdentification, player?: PlayerIdentification): void
    /**
     * Does this tile have any tile ghosts on it.
     * @param force Check for tile ghosts of this force.
     */
    has_tile_ghost(force?: ForceIdentification): boolean
    /**
     * Gets all tile ghosts on this tile.
     * @param force Get tile ghosts of this force.
     */
    get_tile_ghosts(force?: ForceIdentification): LuaTile[]
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Prototype name of this tile. E.g. `"sand-3"` or `"grass-2"`.
     */
    readonly name: string
    readonly prototype: LuaTilePrototype
    /**
     * The position this tile references.
     */
    readonly position: TilePosition
    /**
     * The name of the {@link LuaTilePrototype} hidden under this tile, if any.
     *
     * During normal gameplay, only {@link LuaTilePrototype#mineable_properties non-mineable} tiles can become hidden. This can however be circumvented with {@link LuaSurface#set_hidden_tile LuaSurface::set_hidden_tile}.
     */
    readonly hidden_tile?: string
    /**
     * The surface this tile is on.
     */
    readonly surface: LuaSurface
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaTile"
  }
  /**
   * Prototype of a tile.
   * @noSelf
   */
  export interface LuaTilePrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Name of this prototype.
     */
    readonly name: string
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    /**
     * The collision mask this tile uses
     */
    readonly collision_mask: CollisionMask
    readonly collision_mask_with_flags: CollisionMaskWithFlags
    readonly layer: uint
    /**
     * Autoplace specification for this prototype, if any.
     */
    readonly autoplace_specification?: AutoplaceSpecification
    readonly walking_speed_modifier: float
    readonly vehicle_friction_modifier: float
    readonly map_color: Color
    /**
     * The probability that decorative entities will be removed from on top of this tile when this tile is generated.
     */
    readonly decorative_removal_probability: float
    readonly automatic_neighbors: boolean
    readonly allowed_neighbors: Record<string, LuaTilePrototype>
    /**
     * If this tile needs correction logic applied when it's generated in the world.
     */
    readonly needs_correction: boolean
    readonly mineable_properties: {
      /**
       * Is this tile mineable at all?
       */
      readonly minable: boolean
      /**
       * Energy required to mine a tile.
       */
      readonly mining_time: double
      /**
       * Prototype name of the particle produced when mining this tile. Will only be present if this tile produces any particle during mining.
       */
      readonly mining_particle?: string
      /**
       * Products obtained by mining this tile.
       */
      readonly products: Product[]
    }
    /**
     * The next direction of this tile, if any. Used when a tile has multiple directions (such as hazard concrete)
     */
    readonly next_direction?: LuaTilePrototype
    /**
     * Items that when placed will produce this tile, if any. Construction bots will choose the first item in the list to build this tile.
     */
    readonly items_to_place_this?: ItemStackDefinition[]
    /**
     * False if this tile is not allowed in blueprints regardless of the ability to build it.
     */
    readonly can_be_part_of_blueprint: boolean
    /**
     * Amount of pollution emissions per second this tile will absorb.
     */
    readonly emissions_per_second: double
    /**
     * True if building this tile should check for colliding entities above and prevent building if such are found. Also during mining tiles above this tile checks for entities colliding with this tile and prevents mining if such are found.
     */
    readonly check_collision_with_entities: boolean
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaTilePrototype"
  }
  /**
   * A train. Trains are a sequence of connected rolling stocks -- locomotives and wagons.
   * @noSelf
   */
  export interface LuaTrain {
    /**
     * Get the amount of a particular item stored in the train.
     * @param item Item name to count. If not given, counts all items.
     */
    get_item_count(item?: string): uint
    /**
     * Get a mapping of the train's inventory.
     * @returns The counts, indexed by item names.
     */
    get_contents(): Record<string, uint>
    /**
     * Remove some items from the train.
     * @param stack The amount and type of items to remove
     * @returns Number of items actually removed.
     */
    remove_item(stack: ItemStackIdentification): uint
    /**
     * Insert a stack into the train.
     */
    insert(stack: ItemStackIdentification): void
    /**
     * Clear all items in this train.
     */
    clear_items_inside(): void
    /**
     * Checks if the path is invalid and tries to re-path if it isn't.
     * @param force Forces the train to re-path regardless of the current path being valid or not.
     * @returns If the train has a path after the repath attempt.
     */
    recalculate_path(force?: boolean): boolean
    /**
     * Get the amount of a particular fluid stored in the train.
     * @param fluid Fluid name to count. If not given, counts all fluids.
     */
    get_fluid_count(fluid?: string): double
    /**
     * Gets a mapping of the train's fluid inventory.
     * @returns The counts, indexed by fluid names.
     */
    get_fluid_contents(): Record<string, double>
    /**
     * Remove some fluid from the train.
     * @returns The amount of fluid actually removed.
     */
    remove_fluid(fluid: Fluid): double
    /**
     * Inserts the given fluid into the first available location in this train.
     * @returns The amount inserted.
     */
    insert_fluid(fluid: Fluid): double
    /**
     * Clears all fluids in this train.
     */
    clear_fluids_inside(): void
    /**
     * Go to the station specified by the index in the train's schedule.
     */
    go_to_station(index: uint): void
    /**
     * Gets all rails under the train.
     */
    get_rails(): LuaEntity[]
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * When `true`, the train is explicitly controlled by the player or script. When `false`, the train moves autonomously according to its schedule.
     */
    manual_mode: boolean
    /**
     * Current speed.
     *
     * Changing the speed of the train is potentially an unsafe operation because train uses the speed for its internal calculations of break distances, etc.
     */
    speed: double
    /**
     * Current max speed when moving forward, depends on locomotive prototype and fuel.
     */
    readonly max_forward_speed: double
    /**
     * Current max speed when moving backwards, depends on locomotive prototype and fuel.
     */
    readonly max_backward_speed: double
    /**
     * The weight of this train.
     */
    readonly weight: double
    /**
     * The rolling stocks this train is composed of, with the numbering starting at the {@link LuaTrain#front_stock front} of the train.
     */
    readonly carriages: LuaEntity[]
    /**
     * Locomotives of the train.
     * @example
     * -- called on a LuaTrain with 3 locomotives, it returns 3 LuaEntities:
     * train.locomotives -- => {front_movers = {loco1, loco2}, back_movers = {loco3}}
     */
    readonly locomotives: {
      /**
       * Array of locomotives.
       */
      readonly front_movers: LuaEntity[]
      /**
       * Array of locomotives.
       */
      readonly back_movers: LuaEntity[]
    }
    /**
     * The cargo carriages the train contains.
     */
    readonly cargo_wagons: LuaEntity[]
    /**
     * The fluid carriages the train contains.
     */
    readonly fluid_wagons: LuaEntity[]
    /**
     * This train's current schedule, if any. Set to `nil` to clear.
     *
     * The schedule can't be changed by modifying the returned table. Instead, changes must be made by assigning a new table to this attribute.
     */
    get schedule(): TrainSchedule | nil
    set schedule(value: TrainScheduleWrite | nil)
    /**
     * This train's current state.
     */
    readonly state: defines.train_state
    /**
     * The rail at the front end of the train, if any.
     */
    readonly front_rail?: LuaEntity
    /**
     * The rail at the back end of the train, if any.
     */
    readonly back_rail?: LuaEntity
    readonly rail_direction_from_front_rail: defines.rail_direction
    readonly rail_direction_from_back_rail: defines.rail_direction
    /**
     * The front stock of this train, if any. The front of the train is in the direction that a majority of locomotives are pointing in. If it's a tie, the North and West directions take precedence.
     */
    readonly front_stock?: LuaEntity
    /**
     * The back stock of this train, if any. The back of the train is at the opposite end of the {@link LuaTrain#front_stock front}.
     */
    readonly back_stock?: LuaEntity
    /**
     * The train stop this train is stopped at, if any.
     */
    readonly station?: LuaEntity
    /**
     * If this train has a path.
     */
    readonly has_path: boolean
    /**
     * The destination rail this train is currently pathing to, if any.
     */
    readonly path_end_rail?: LuaEntity
    /**
     * The destination train stop this train is currently pathing to, if any.
     */
    readonly path_end_stop?: LuaEntity
    /**
     * The unique train ID.
     */
    readonly id: uint
    /**
     * The player passengers on the train.
     *
     * This does *not* index using player index. See {@link LuaPlayer#index LuaPlayer::index} on each player instance for the player index.
     */
    readonly passengers: LuaPlayer[]
    /**
     * The riding state of this train.
     */
    readonly riding_state: RidingState
    /**
     * The players killed by this train.
     *
     * The keys are the player indices, the values are how often this train killed that player.
     */
    readonly killed_players: Record<uint, uint>
    /**
     * The total number of kills by this train.
     */
    readonly kill_count: uint
    /**
     * The path this train is using, if any.
     */
    readonly path?: LuaRailPath
    /**
     * The signal this train is arriving or waiting at, if any.
     */
    readonly signal?: LuaEntity
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaTrain"
  }
  /**
   * Control behavior for train stops.
   * @noSelf
   */
  export interface LuaTrainStopControlBehavior extends LuaGenericOnOffControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * `true` if the train stop should send the circuit network contents to the train to use.
     */
    send_to_train: boolean
    /**
     * `true` if the train stop should send the train contents to the circuit network.
     */
    read_from_train: boolean
    /**
     * `true` if the train stop should send the stopped train id to the circuit network.
     */
    read_stopped_train: boolean
    /**
     * `true` if the trains_limit_signal is used to set a limit of trains incoming for train stop.
     */
    set_trains_limit: boolean
    /**
     * `true` if the train stop should send amount of incoming trains to the circuit network.
     */
    read_trains_count: boolean
    /**
     * `true` if the train stop is enabled/disabled through the circuit network.
     */
    enable_disable: boolean
    /**
     * The signal that will be sent when using the send-train-id option.
     */
    stopped_train_signal: SignalID
    /**
     * The signal that will be sent when using the read-trains-count option.
     */
    trains_count_signal: SignalID
    /**
     * The signal to be used by set-trains-limit to limit amount of incoming trains
     */
    trains_limit_signal: SignalID
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaTrainStopControlBehavior"
  }
  /**
   * Control behavior for transport belts.
   * @noSelf
   */
  export interface LuaTransportBeltControlBehavior extends LuaGenericOnOffControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * If the belt will be enabled/disabled based off the circuit network.
     */
    enable_disable: boolean
    /**
     * If the belt will read the contents and send them to the circuit network.
     */
    read_contents: boolean
    /**
     * The read mode for the belt.
     */
    read_contents_mode: defines.control_behavior.transport_belt.content_read_mode
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaTransportBeltControlBehavior"
  }
  /**
   * One line on a transport belt.
   * @noSelf
   */
  export interface LuaTransportLine extends ReadonlyArray<LuaItemStack> {
    /**
     * Remove all items from this transport line.
     */
    clear(): void
    /**
     * Count some or all items on this line, similar to how {@link LuaInventory#get_item_count LuaInventory::get_item_count} does.
     * @param item Prototype name of the item to count. If not specified, count all items.
     */
    get_item_count(item?: string): uint
    /**
     * Remove some items from this line.
     * @param items Items to remove.
     * @returns Number of items actually removed.
     */
    remove_item(items: ItemStackIdentification): uint
    /**
     * Can an item be inserted at a given position?
     * @param position Where to insert an item.
     */
    can_insert_at(position: float): boolean
    /**
     * Can an item be inserted at the back of this line?
     */
    can_insert_at_back(): boolean
    /**
     * Insert items at a given position.
     * @param position Where on the line to insert the items.
     * @param items Items to insert.
     * @returns Were the items inserted successfully?
     */
    insert_at(position: float, items: ItemStackIdentification): boolean
    /**
     * Insert items at the back of this line.
     * @returns Were the items inserted successfully?
     */
    insert_at_back(items: ItemStackIdentification): boolean
    /**
     * Get counts of all items on this line, similar to how {@link LuaInventory#get_contents LuaInventory::get_contents} does.
     * @returns The counts, indexed by item names.
     */
    get_contents(): Record<string, uint>
    /**
     * Returns whether the associated internal transport line of this line is the same as the others associated internal transport line.
     *
     * This can return true even when the {@link LuaTransportLine#owner LuaTransportLine::owner}s are different (so `this == other` is false), because the internal transport lines can span multiple tiles.
     */
    line_equals(other: LuaTransportLine): boolean
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Get the number of items on this transport line.
     */
    readonly length: uint
    /**
     * The indexing operator.
     */
    readonly [index: number]: LuaItemStack
    /**
     * The entity this transport line belongs to.
     */
    readonly owner: LuaEntity
    /**
     * The transport lines that this transport line outputs items to or an empty table if none.
     */
    readonly output_lines: LuaTransportLine[]
    /**
     * The transport lines that this transport line is fed by or an empty table if none.
     */
    readonly input_lines: LuaTransportLine[]
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaTransportLine"
  }
  /**
   * Prototype of a trivial smoke.
   * @noSelf
   */
  export interface LuaTrivialSmokePrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Name of this prototype.
     */
    readonly name: string
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    readonly color: Color
    readonly start_scale: double
    readonly end_scale: double
    readonly movement_slow_down_factor: double
    readonly duration: uint
    readonly spread_duration: uint
    readonly fade_away_duration: uint
    readonly fade_in_duration: uint
    readonly glow_fade_away_duration: uint
    readonly cyclic: boolean
    readonly affected_by_wind: boolean
    readonly show_when_smoke_off: boolean
    readonly glow_animation: boolean
    readonly render_layer: RenderLayer
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaTrivialSmokePrototype"
  }
  /**
   * A collection of units moving and attacking together. The engine creates autonomous unit groups to attack polluted areas. The script can create and control such groups as well. Groups can accept commands in the same manner as regular units.
   * @noSelf
   */
  export interface LuaUnitGroup {
    /**
     * Make a unit a member of this group. Has the same effect as giving a `group_command` with this group to the unit.
     *
     * The member must have the same force as the unit group.
     */
    add_member(unit: LuaEntity): void
    /**
     * Give this group a command.
     */
    set_command(command: CommandWrite): void
    /**
     * Give this group a distraction command.
     */
    set_distraction_command(command: CommandWrite): void
    /**
     * Make this group autonomous. Autonomous groups will automatically attack polluted areas. Autonomous groups aren't considered to be {@link LuaUnitGroup#is_script_driven script-driven}.
     */
    set_autonomous(): void
    /**
     * Make the group start moving even if some of its members haven't yet arrived.
     */
    start_moving(): void
    /**
     * Dissolve this group. Its members won't be destroyed, they will be merely unlinked from this group.
     */
    destroy(): void
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Members of this group.
     */
    readonly members: LuaEntity[]
    /**
     * Group position. This can have different meanings depending on the group state. When the group is gathering, the position is the place of gathering. When the group is moving, the position is the expected position of its members along the path. When the group is attacking, it is the average position of its members.
     */
    readonly position: MapPosition
    /**
     * Whether this group is gathering, moving or attacking.
     */
    readonly state: defines.group_state
    /**
     * The force of this unit group.
     */
    readonly force: LuaForce
    /**
     * The surface of this unit group.
     */
    readonly surface: LuaSurface
    /**
     * The group number for this unit group.
     */
    readonly group_number: uint
    /**
     * Whether this unit group is controlled by a script or by the game engine. This can be changed using {@link LuaUnitGroup#set_autonomous LuaUnitGroup::set_autonomous}.
     */
    readonly is_script_driven: boolean
    /**
     * The command given to this group, if any.
     */
    readonly command?: Command
    /**
     * The distraction command given to this group, if any.
     */
    readonly distraction_command?: Command
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaUnitGroup"
  }
  /**
   * Prototype of a virtual signal.
   * @noSelf
   */
  export interface LuaVirtualSignalPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * Name of this prototype.
     */
    readonly name: string
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    /**
     * Whether this is a special signal. The `everything`, `anything`, `each`, and `unknown` signals are considered special.
     */
    readonly special: boolean
    readonly subgroup: LuaGroup
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaVirtualSignalPrototype"
  }
  /**
   * Prototype of a void energy source.
   * @noSelf
   */
  export interface LuaVoidEnergySourcePrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * The emissions of this energy source in `pollution/Joule`. Multiplying it by energy consumption in `Watt` gives `pollution/second`.
     */
    readonly emissions: double
    readonly render_no_network_icon: boolean
    readonly render_no_power_icon: boolean
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaVoidEnergySourcePrototype"
  }
  /**
   * Control behavior for walls.
   * @noSelf
   */
  export interface LuaWallControlBehavior extends LuaControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(): string
    /**
     * The circuit condition.
     */
    get circuit_condition(): CircuitConditionDefinition
    set circuit_condition(value: CircuitConditionDefinitionWrite)
    open_gate: boolean
    read_sensor: boolean
    output_signal: SignalID
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: "LuaWallControlBehavior"
  }
}
