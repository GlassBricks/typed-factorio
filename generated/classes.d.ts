// This is an auto-generated file. Do not edit directly!

/** @noSelfInFile */

/**
 * Collection of settings for overriding default ai behavior.
 *
 * {@link https://lua-api.factorio.com/latest/LuaAISettings.html View documentation}
 *
 * @noSelf
 */
interface LuaAISettings {
  /**
   * If enabled, units that repeatedly fail to succeed at commands will be destroyed.
   *
   * {@link https://lua-api.factorio.com/latest/LuaAISettings.html#LuaAISettings.allow_destroy_when_commands_fail View documentation}
   */
  allow_destroy_when_commands_fail: boolean
  /**
   * If enabled, units that have nothing else to do will attempt to return to a spawner.
   *
   * {@link https://lua-api.factorio.com/latest/LuaAISettings.html#LuaAISettings.allow_try_return_to_spawner View documentation}
   */
  allow_try_return_to_spawner: boolean
  /**
   * If enabled, units will try to separate themselves from nearby friendly units.
   *
   * {@link https://lua-api.factorio.com/latest/LuaAISettings.html#LuaAISettings.do_separation View documentation}
   */
  do_separation: boolean
  /**
   * The pathing resolution modifier, must be between -8 and 8.
   *
   * {@link https://lua-api.factorio.com/latest/LuaAISettings.html#LuaAISettings.path_resolution_modifier View documentation}
   */
  path_resolution_modifier: int8
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaAISettings"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Control behavior for accumulators.
 *
 * {@link https://lua-api.factorio.com/latest/LuaAccumulatorControlBehavior.html View documentation}
 *
 * @noSelf
 */
interface LuaAccumulatorControlBehavior extends LuaControlBehavior {
  output_signal: SignalID
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaAccumulatorControlBehavior"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Prototype of a achievement.
 *
 * {@link https://lua-api.factorio.com/latest/LuaAchievementPrototype.html View documentation}
 *
 * @noSelf
 */
interface LuaAchievementPrototype {
  /**
   * Name of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaAchievementPrototype.html#LuaAchievementPrototype.name View documentation}
   */
  readonly name: string
  /**
   * Order string of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaAchievementPrototype.html#LuaAchievementPrototype.order View documentation}
   */
  readonly order: string
  readonly localised_name: LocalisedString
  readonly localised_description: LocalisedString
  readonly allowed_without_fight: boolean
  readonly hidden: boolean
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaAchievementPrototype"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Prototype of a ammo category.
 *
 * {@link https://lua-api.factorio.com/latest/LuaAmmoCategoryPrototype.html View documentation}
 *
 * @noSelf
 */
interface LuaAmmoCategoryPrototype {
  /**
   * Name of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaAmmoCategoryPrototype.html#LuaAmmoCategoryPrototype.name View documentation}
   */
  readonly name: string
  /**
   * Order string of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaAmmoCategoryPrototype.html#LuaAmmoCategoryPrototype.order View documentation}
   */
  readonly order: string
  readonly localised_name: LocalisedString
  readonly localised_description: LocalisedString
  readonly bonus_gui_order: string
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaAmmoCategoryPrototype"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Control behavior for arithmetic combinators.
 *
 * {@link https://lua-api.factorio.com/latest/LuaArithmeticCombinatorControlBehavior.html View documentation}
 *
 * @noSelf
 */
interface LuaArithmeticCombinatorControlBehavior extends LuaCombinatorControlBehavior {
  /**
   * The arithmetic combinator parameters.
   *
   * **Note**: `parameters` may be `nil` in order to clear the parameters.
   *
   * {@link https://lua-api.factorio.com/latest/LuaArithmeticCombinatorControlBehavior.html#LuaArithmeticCombinatorControlBehavior.parameters View documentation}
   */
  parameters: ArithmeticCombinatorParameters
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaArithmeticCombinatorControlBehavior"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Prototype of an autoplace control.
 *
 * {@link https://lua-api.factorio.com/latest/LuaAutoplaceControlPrototype.html View documentation}
 *
 * @noSelf
 */
interface LuaAutoplaceControlPrototype {
  /**
   * Name of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaAutoplaceControlPrototype.html#LuaAutoplaceControlPrototype.name View documentation}
   */
  readonly name: string
  /**
   * Order string of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaAutoplaceControlPrototype.html#LuaAutoplaceControlPrototype.order View documentation}
   */
  readonly order: string
  readonly localised_name: LocalisedString
  readonly localised_description: LocalisedString
  readonly richness: boolean
  readonly control_order: string
  /**
   * Category name of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaAutoplaceControlPrototype.html#LuaAutoplaceControlPrototype.category View documentation}
   */
  readonly category: string
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaAutoplaceControlPrototype"
  /** All methods and properties that this object supports. */
  help(): string
}

type RaiseableEvents =
  | typeof defines.events.on_console_chat
  | typeof defines.events.on_player_crafted_item
  | typeof defines.events.on_player_fast_transferred
  | typeof defines.events.on_biter_base_built
  | typeof defines.events.on_market_item_purchased
  | typeof defines.events.script_raised_built
  | typeof defines.events.script_raised_destroy
  | typeof defines.events.script_raised_revive
  | typeof defines.events.script_raised_set_tiles

/**
 * Entry point for registering event handlers. It is accessible through the global object named `script`.
 *
 * {@link https://lua-api.factorio.com/latest/LuaBootstrap.html View documentation}
 *
 * @noSelf
 */
interface LuaBootstrap {
  /**
   * Register a callback to be run on mod initialization. This is only called when a new save game is created or when
   * a save file is loaded that previously didn't contain the mod. During it, the mod gets the chance to set up
   * initial values that it will use for its lifetime. It has full access to {@link LuaGameScript} and the `global`
   * table and can change anything about them that it deems appropriate. No other events will be raised for the mod
   * until it has finished this step.
   *
   * {@link https://lua-api.factorio.com/latest/LuaBootstrap.html#LuaBootstrap.on_init View documentation}
   *
   * @example
   *   Initialize a `players` table in `global` for later use.
   *
   *   ```lua
   *   script.on_init(function()
   *   global.players = {}
   *   end)
   *   ```
   *
   * @param f - The handler for this event. Passing `nil` will unregister it.
   */
  on_init(f: (() => void) | undefined): void
  /**
   * Register a function to be run on save load. This is only called for mods that have been part of the save
   * previously, or for players connecting to a running multiplayer session. It gives the mod the opportunity to do
   * some very specific actions, should it need to. Doing anything other than these three will lead to desyncs, which
   * breaks multiplayer and replay functionality. Access to {@link LuaGameScript} and {@link LuaRendering} is not
   * available. The `global` table can be accessed and is safe to read from, but not write to.
   *
   * The only legitimate uses of this event are these three:
   *
   * - Re-setup {@link https://www.lua.org/pil/13.html metatables} as they are not persisted through save-load.
   * - Re-setup conditional event handlers.
   * - Create local references to data stored in the {@link https://lua-api.factorio.com/latest/Global.html global} table.
   *
   * For all other purposes, {@link LuaBootstrap.on_init LuaBootstrap::on_init},
   * {@link LuaBootstrap.on_configuration_changed LuaBootstrap::on_configuration_changed} or migration scripts should
   * be used instead.
   *
   * {@link https://lua-api.factorio.com/latest/LuaBootstrap.html#LuaBootstrap.on_load View documentation}
   *
   * @param f - The handler for this event. Passing `nil` will unregister it.
   */
  on_load(f: (() => void) | undefined): void
  /**
   * Register a function to be run when mod configuration changes. This is called when the game version or any mod
   * version changes; when any mod is added or removed; or when prototypes or startup mod settings have changed. It
   * allows the mod to make any changes it deems appropriate to both the data structures in its `global` table or to
   * the game state through {@link LuaGameScript}.
   *
   * {@link https://lua-api.factorio.com/latest/LuaBootstrap.html#LuaBootstrap.on_configuration_changed View documentation}
   *
   * @param f - The handler for this event. Passing `nil` will unregister it.
   */
  on_configuration_changed(f: ((param1: ConfigurationChangedData) => void) | undefined): void
  /**
   * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any
   * additional registration will overwrite the previous one. This holds true even if different filters are used for
   * subsequent registrations.
   *
   * {@link https://lua-api.factorio.com/latest/LuaBootstrap.html#LuaBootstrap.on_event View documentation}
   *
   * @example
   *   Register for the {@link OnTickEvent on_tick} event to print the current tick to console each tick.
   *
   *   ```lua
   *   script.on_event(defines.events.on_tick,
   *   function(event) game.print(event.tick) end)
   *   ```
   *
   * @example
   *   Register for the {@link OnBuiltEntityEvent on_built_entity} event, limiting it to only be received when a `"fast-inserter"` is built.
   *
   *   ```lua
   *   script.on_event(defines.events.on_built_entity,
   *   function(event) game.print("Gotta go fast!") end,
   *   {{filter = "name", name = "fast-inserter"}})
   *   ```
   *
   * @param event - The event(s) or custom-input to invoke the handler on.
   * @param f - The handler for this event. Passing `nil` will unregister it.
   * @param filters - The filters for this event. Can only be used when registering for individual events.
   */
  on_event<E extends EventId<any, table>>(
    event: E,
    f: ((data: E["_eventData"]) => void) | undefined,
    filters?: E["_filter"][]
  ): void
  on_event<E extends EventId<any>>(event: E | E[], f: ((data: E["_eventData"]) => void) | undefined): void
  on_event(event: string, f: ((data: CustomInputEvent) => void) | undefined): void
  /**
   * Register a handler to run every nth-tick(s). When the game is on tick 0 it will trigger all registered handlers.
   *
   * {@link https://lua-api.factorio.com/latest/LuaBootstrap.html#LuaBootstrap.on_nth_tick View documentation}
   *
   * @param tick - The nth-tick(s) to invoke the handler on. Passing `nil` as the only parameter will unregister all
   *   nth-tick handlers.
   * @param f - The handler to run. Passing `nil` will unregister it for the provided nth-tick(s).
   */
  on_nth_tick(tick: uint | uint[] | undefined, f: ((param1: NthTickEventData) => void) | undefined): void
  /**
   * Registers an entity so that after it's destroyed, {@link OnEntityDestroyedEvent on_entity_destroyed} is called.
   * Once an entity is registered, it stays registered until it is actually destroyed, even through save/load cycles.
   * The registration is global across all mods, meaning once one mod registers an entity, all mods listening to
   * {@link OnEntityDestroyedEvent on_entity_destroyed} will receive the event when it is destroyed. Registering the
   * same entity multiple times will still only fire the destruction event once, and will return the same registration number.
   *
   * **Note**: Depending on when a given entity is destroyed, {@link OnEntityDestroyedEvent on_entity_destroyed} will
   * either be fired at the end of the current tick or at the end of the next tick.
   *
   * {@link https://lua-api.factorio.com/latest/LuaBootstrap.html#LuaBootstrap.register_on_entity_destroyed View documentation}
   *
   * @param entity - The entity to register.
   * @returns The registration number. It is used to identify the entity in the
   *   {@link OnEntityDestroyedEvent on_entity_destroyed} event.
   */
  register_on_entity_destroyed(entity: LuaEntity): uint64
  /**
   * Generate a new, unique event ID that can be used to raise custom events with
   * {@link LuaBootstrap.raise_event LuaBootstrap::raise_event}.
   *
   * {@link https://lua-api.factorio.com/latest/LuaBootstrap.html#LuaBootstrap.generate_event_name View documentation}
   *
   * @returns The newly generated event ID.
   */
  generate_event_name<T extends table>(): CustomEventId<T>
  /**
   * Find the event handler for an event.
   *
   * {@link https://lua-api.factorio.com/latest/LuaBootstrap.html#LuaBootstrap.get_event_handler View documentation}
   *
   * @param event - The event identifier to get a handler for.
   * @returns Reference to the function currently registered as the handler.
   */
  get_event_handler<E extends EventId<any>>(event: E): (data: E["_eventData"]) => void
  get_event_handler(event: string): (data: CustomInputEvent) => void
  /**
   * Gets the mod event order as a string.
   *
   * {@link https://lua-api.factorio.com/latest/LuaBootstrap.html#LuaBootstrap.get_event_order View documentation}
   */
  get_event_order(): string
  /**
   * Sets the filters for the given event. The filters are only retained when set after the actual event registration,
   * because registering for an event with different or no filters will overwrite previously set ones.
   *
   * {@link https://lua-api.factorio.com/latest/LuaBootstrap.html#LuaBootstrap.set_event_filter View documentation}
   *
   * @example
   *   Limit the {@link OnMarkedForDeconstructionEvent on_marked_for_deconstruction} event to only be received when a non-ghost entity is marked for deconstruction.
   *
   *   ```lua
   *   script.set_event_filter(defines.events.on_marked_for_deconstruction, {{filter = "ghost", invert = true}})
   *   ```
   *
   * @example
   *   Limit the {@link OnBuiltEntityEvent on_built_entity} event to only be received when either a `unit` or a `unit-spawner` is built.
   *
   *   ```lua
   *   script.set_event_filter(defines.events.on_built_entity, {{filter = "type", type = "unit"}, {filter = "type", type = "unit-spawner"}})
   *   ```
   *
   * @example
   *   Limit the {@link OnEntityDamagedEvent on_entity_damaged} event to only be received when a `rail` is damaged by an `acid` attack.
   *
   *   ```lua
   *   script.set_event_filter(defines.events.on_entity_damaged, {{filter = "rail"}, {filter = "damage-type", type = "acid", mode = "and"}})
   *   ```
   *
   * @param event - ID of the event to filter.
   * @param filters - The filters or `nil` to clear them.
   */
  set_event_filter<E extends EventId<any, table>>(event: E, filters: E["_filter"][] | undefined): void
  /**
   * Gets the filters for the given event.
   *
   * {@link https://lua-api.factorio.com/latest/LuaBootstrap.html#LuaBootstrap.get_event_filter View documentation}
   *
   * @param event - ID of the event to get.
   * @returns The filters or `nil` if none are defined.
   */
  get_event_filter<E extends EventId<any, table>>(event: E): E["_filter"][] | undefined
  /**
   * Raise an event. Only events generated with
   * {@link LuaBootstrap.generate_event_name LuaBootstrap::generate_event_name} and the following can be raised:
   *
   * - {@link OnConsoleChatEvent on_console_chat}
   * - {@link OnPlayerCraftedItemEvent on_player_crafted_item}
   * - {@link OnPlayerFastTransferredEvent on_player_fast_transferred}
   * - {@link OnBiterBaseBuiltEvent on_biter_base_built}
   * - {@link OnMarketItemPurchasedEvent on_market_item_purchased}
   * - {@link ScriptRaisedBuiltEvent script_raised_built}
   * - {@link ScriptRaisedDestroyEvent script_raised_destroy}
   * - {@link ScriptRaisedReviveEvent script_raised_revive}
   * - {@link ScriptRaisedSetTilesEvent script_raised_set_tiles}
   *
   * {@link https://lua-api.factorio.com/latest/LuaBootstrap.html#LuaBootstrap.raise_event View documentation}
   *
   * @example
   *   Raise the {@link OnConsoleChatEvent on_console_chat} event with the desired message 'from' the first player.
   *
   *   ```lua
   *   local data = {player_index = 1, message = "Hello friends!"}
   *   script.raise_event(defines.events.on_console_chat, data)
   *   ```
   *
   * @param event - ID of the event to raise.
   * @param data - Table with extra data that will be passed to the event handler.
   */
  raise_event<E extends RaiseableEvents | CustomEventId<any>>(
    event: E,
    data: Omit<E["_eventData"], keyof EventData>
  ): void
  /**
   * Raises {@link OnConsoleChatEvent on_console_chat} with the given parameters.
   *
   * {@link https://lua-api.factorio.com/latest/LuaBootstrap.html#LuaBootstrap.raise_console_chat View documentation}
   */
  raise_console_chat(params: {
    /** The player doing the chatting. */
    readonly player_index: uint
    /** The chat message to send. */
    readonly message: string
  }): void
  /**
   * Raises {@link OnPlayerCraftedItemEvent on_player_crafted_item} with the given parameters.
   *
   * {@link https://lua-api.factorio.com/latest/LuaBootstrap.html#LuaBootstrap.raise_player_crafted_item View documentation}
   */
  raise_player_crafted_item(params: {
    /** The item that has been crafted. */
    readonly item_stack: LuaItemStack
    /** The player doing the crafting. */
    readonly player_index: uint
    /** The recipe used to craft this item. */
    readonly recipe: LuaRecipe
  }): void
  /**
   * Raises {@link OnPlayerFastTransferredEvent on_player_fast_transferred} with the given parameters.
   *
   * {@link https://lua-api.factorio.com/latest/LuaBootstrap.html#LuaBootstrap.raise_player_fast_transferred View documentation}
   */
  raise_player_fast_transferred(params: {
    /** The player transferred from or to. */
    readonly player_index: uint
    /** The entity transferred from or to. */
    readonly entity: LuaEntity
    /** Whether the transfer was from player to entity. If `false`, the transfer was from entity to player. */
    readonly from_player: boolean
  }): void
  /**
   * Raises {@link OnBiterBaseBuiltEvent on_biter_base_built} with the given parameters.
   *
   * {@link https://lua-api.factorio.com/latest/LuaBootstrap.html#LuaBootstrap.raise_biter_base_built View documentation}
   */
  raise_biter_base_built(params: {
    /** The entity that was built. */
    readonly entity: LuaEntity
  }): void
  /**
   * Raises {@link OnMarketItemPurchasedEvent on_market_item_purchased} with the given parameters.
   *
   * {@link https://lua-api.factorio.com/latest/LuaBootstrap.html#LuaBootstrap.raise_market_item_purchased View documentation}
   */
  raise_market_item_purchased(params: {
    /** The player who did the purchasing. */
    readonly player_index: uint
    /** The market entity. */
    readonly market: LuaEntity
    /** The index of the offer purchased. */
    readonly offer_index: uint
    /** The amount of offers purchased. */
    readonly count: uint
  }): void
  /**
   * Raises {@link ScriptRaisedBuiltEvent script_raised_built} with the given parameters.
   *
   * {@link https://lua-api.factorio.com/latest/LuaBootstrap.html#LuaBootstrap.raise_script_built View documentation}
   */
  raise_script_built(params: {
    /** The entity that has been built. */
    readonly entity: LuaEntity
  }): void
  /**
   * Raises {@link ScriptRaisedDestroyEvent script_raised_destroy} with the given parameters.
   *
   * {@link https://lua-api.factorio.com/latest/LuaBootstrap.html#LuaBootstrap.raise_script_destroy View documentation}
   */
  raise_script_destroy(params: {
    /** The entity that was destroyed. */
    readonly entity: LuaEntity
  }): void
  /**
   * Raises {@link ScriptRaisedReviveEvent script_raised_revive} with the given parameters.
   *
   * {@link https://lua-api.factorio.com/latest/LuaBootstrap.html#LuaBootstrap.raise_script_revive View documentation}
   */
  raise_script_revive(params: {
    /** The entity that was revived. */
    readonly entity: LuaEntity
    /** The tags associated with this entity, if any. */
    readonly tags?: Tags
  }): void
  /**
   * Raises {@link ScriptRaisedSetTilesEvent script_raised_set_tiles} with the given parameters.
   *
   * {@link https://lua-api.factorio.com/latest/LuaBootstrap.html#LuaBootstrap.raise_script_set_tiles View documentation}
   */
  raise_script_set_tiles(params: {
    /** The surface whose tiles have been changed. */
    readonly surface_index: uint
    /** The tiles that have been changed. */
    readonly tiles: Tile[]
  }): void
  /**
   * The name of the mod from the environment this is used in.
   *
   * {@link https://lua-api.factorio.com/latest/LuaBootstrap.html#LuaBootstrap.mod_name View documentation}
   */
  readonly mod_name: string
  /**
   * Information about the currently running scenario/campaign/tutorial.
   *
   * {@link https://lua-api.factorio.com/latest/LuaBootstrap.html#LuaBootstrap.level View documentation}
   */
  readonly level: {
    /** Is this level a simulation? (The main menu and 'Tips and tricks' use simulations) */
    readonly is_simulation?: boolean
    /** Is this level a tutorial? */
    readonly is_tutorial?: boolean
    /** The campaign name if any. */
    readonly campaign_name?: string
    /** The level name. */
    readonly level_name: string
    /** The mod name if any. */
    readonly mod_name?: string
  }
  /**
   * A dictionary listing the names of all currently active mods and mapping them to their version.
   *
   * {@link https://lua-api.factorio.com/latest/LuaBootstrap.html#LuaBootstrap.active_mods View documentation}
   *
   * @example
   *   This will print the names and versions of all active mods to the console.
   *
   *   ```lua
   *   for name, version in pairs(script.active_mods) do
   *   game.print(name .. " version " .. version)
   *   end
   *   ```
   */
  readonly active_mods: Record<string, string>
  /** This object's name. */
  readonly object_name: "LuaBootstrap"
}

/**
 * A reference to the burner energy source owned by a specific {@link LuaEntity} or {@link LuaEquipment}.
 *
 * {@link https://lua-api.factorio.com/latest/LuaBurner.html View documentation}
 *
 * @noSelf
 */
interface LuaBurner {
  /**
   * The owner of this burner energy source
   *
   * {@link https://lua-api.factorio.com/latest/LuaBurner.html#LuaBurner.owner View documentation}
   */
  readonly owner: LuaEntity | LuaEquipment
  /**
   * The fuel inventory.
   *
   * {@link https://lua-api.factorio.com/latest/LuaBurner.html#LuaBurner.inventory View documentation}
   */
  readonly inventory: LuaInventory
  /**
   * The burnt result inventory.
   *
   * {@link https://lua-api.factorio.com/latest/LuaBurner.html#LuaBurner.burnt_result_inventory View documentation}
   */
  readonly burnt_result_inventory: LuaInventory
  heat: double
  readonly heat_capacity: double
  /**
   * **Note**: Writing will silently do nothing if there's no
   * {@link LuaBurner.currently_burning LuaBurner::currently_burning} set.
   *
   * {@link https://lua-api.factorio.com/latest/LuaBurner.html#LuaBurner.remaining_burning_fuel View documentation}
   */
  remaining_burning_fuel: double
  /**
   * **Note**: Writing automatically handles correcting
   * {@link LuaBurner.remaining_burning_fuel LuaBurner::remaining_burning_fuel}.
   *
   * {@link https://lua-api.factorio.com/latest/LuaBurner.html#LuaBurner.currently_burning View documentation}
   */
  currently_burning: LuaItemPrototype
  /**
   * The fuel categories this burner uses.
   *
   * **Note**: The value in the dictionary is meaningless and exists just to allow the dictionary type for easy lookup.
   *
   * {@link https://lua-api.factorio.com/latest/LuaBurner.html#LuaBurner.fuel_categories View documentation}
   */
  readonly fuel_categories: Record<string, boolean>
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaBurner"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Prototype of a burner energy source.
 *
 * {@link https://lua-api.factorio.com/latest/LuaBurnerPrototype.html View documentation}
 *
 * @noSelf
 */
interface LuaBurnerPrototype {
  readonly emissions: double
  readonly render_no_network_icon: boolean
  readonly render_no_power_icon: boolean
  readonly effectivity: double
  readonly fuel_inventory_size: uint
  readonly burnt_inventory_size: uint
  /**
   * The smoke sources for this burner prototype if any.
   *
   * {@link https://lua-api.factorio.com/latest/LuaBurnerPrototype.html#LuaBurnerPrototype.smoke View documentation}
   */
  readonly smoke: SmokeSource[]
  /**
   * The light flicker definition for this burner prototype if any.
   *
   * {@link https://lua-api.factorio.com/latest/LuaBurnerPrototype.html#LuaBurnerPrototype.light_flicker View documentation}
   */
  readonly light_flicker: {
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
   * **Note**: The value in the dictionary is meaningless and exists just to allow the dictionary type for easy lookup.
   *
   * {@link https://lua-api.factorio.com/latest/LuaBurnerPrototype.html#LuaBurnerPrototype.fuel_categories View documentation}
   */
  readonly fuel_categories: Record<string, boolean>
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaBurnerPrototype"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * A chunk iterator can be used for iterating chunks coordinates of a surface.
 *
 * The returned type is a {@link ChunkPositionAndArea} containing the chunk coordinates and its area.
 *
 * {@link https://lua-api.factorio.com/latest/LuaChunkIterator.html View documentation}
 *
 * @example
 *   ```lua
 *   for chunk in some_surface.get_chunks() do
 *     game.player.print("x: " .. chunk.x .. ", y: " .. chunk.y)
 *     game.player.print("area: " .. serpent.line(chunk.area))
 *   end
 *   ```
 *
 * @noSelf
 */
interface LuaChunkIterator extends LuaIterable<ChunkPositionAndArea> {
  /**
   * Get the next chunk position or `nil`, and increments the iterator.
   *
   * {@link https://lua-api.factorio.com/latest/LuaChunkIterator.html#LuaChunkIterator.operator%20() View documentation}
   */
  (): ChunkPositionAndArea | undefined
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaChunkIterator"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * A circuit network associated with a given entity, connector, and wire type.
 *
 * {@link https://lua-api.factorio.com/latest/LuaCircuitNetwork.html View documentation}
 *
 * @noSelf
 */
interface LuaCircuitNetwork {
  /**
   * {@link https://lua-api.factorio.com/latest/LuaCircuitNetwork.html#LuaCircuitNetwork.get_signal View documentation}
   *
   * @param signal - The signal to read.
   * @returns The current value of the signal.
   */
  get_signal(signal: SignalID): int
  /**
   * The entity this circuit network reference is associated with
   *
   * {@link https://lua-api.factorio.com/latest/LuaCircuitNetwork.html#LuaCircuitNetwork.entity View documentation}
   */
  readonly entity: LuaEntity
  /**
   * The wire type this network is associated with.
   *
   * {@link https://lua-api.factorio.com/latest/LuaCircuitNetwork.html#LuaCircuitNetwork.wire_type View documentation}
   */
  readonly wire_type: defines.wire_type
  /**
   * The circuit connector ID on the associated entity this network was gotten from.
   *
   * {@link https://lua-api.factorio.com/latest/LuaCircuitNetwork.html#LuaCircuitNetwork.circuit_connector_id View documentation}
   */
  readonly circuit_connector_id: defines.circuit_connector_id
  /**
   * The circuit network signals last tick. `nil` if there are no signals.
   *
   * {@link https://lua-api.factorio.com/latest/LuaCircuitNetwork.html#LuaCircuitNetwork.signals View documentation}
   */
  readonly signals: Signal[] | undefined
  /**
   * The circuit networks ID.
   *
   * {@link https://lua-api.factorio.com/latest/LuaCircuitNetwork.html#LuaCircuitNetwork.network_id View documentation}
   */
  readonly network_id: uint
  /**
   * The number of circuits connected to this network.
   *
   * {@link https://lua-api.factorio.com/latest/LuaCircuitNetwork.html#LuaCircuitNetwork.connected_circuit_count View documentation}
   */
  readonly connected_circuit_count: uint
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaCircuitNetwork"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * {@link https://lua-api.factorio.com/latest/LuaCombinatorControlBehavior.html View documentation}
 *
 * @noSelf
 */
interface LuaCombinatorControlBehavior extends LuaControlBehavior {
  /**
   * Gets the value of a specific signal sent by this combinator behavior last tick or nil if the signal didn't exist.
   *
   * {@link https://lua-api.factorio.com/latest/LuaCombinatorControlBehavior.html#LuaCombinatorControlBehavior.get_signal_last_tick View documentation}
   *
   * @param signal - The signal to get
   * @returns The value or `nil` if none.
   */
  get_signal_last_tick(signal: SignalID): int | undefined
  /**
   * The circuit network signals sent by this combinator last tick.
   *
   * {@link https://lua-api.factorio.com/latest/LuaCombinatorControlBehavior.html#LuaCombinatorControlBehavior.signals_last_tick View documentation}
   */
  readonly signals_last_tick: Signal[]
}

/**
 * Allows for the registration of custom console commands. Similarly to
 * {@link LuaBootstrap.on_event event subscriptions}, these don't persist through a save-and-load cycle.
 *
 * {@link https://lua-api.factorio.com/latest/LuaCommandProcessor.html View documentation}
 *
 * @noSelf
 */
interface LuaCommandProcessor {
  /**
   * Add a custom console command.
   *
   * **Note**: Trying to add a command with the `name` of a game command or the name of a custom command that is
   * already in use will result in an error.
   *
   * {@link https://lua-api.factorio.com/latest/LuaCommandProcessor.html#LuaCommandProcessor.add_command View documentation}
   *
   * @example
   *   This will register a custom event called `print_tick` that prints the current tick to either the player issuing the command or to everyone on the server, depending on the command parameter. It shows the usage of the table that gets passed to any function handling a custom command. This specific example makes use of the `tick` and the optional `player_index` and `parameter` fields. The user is supposed to either call it without any parameter (`"/print_tick"`) or with the `"me"` parameter (`"/print_tick me"`).
   *
   *   ```lua
   *   commands.add_command("print_tick", nil, function(command)
   *   if command.player_index ~= nil and command.parameter == "me" then
   *   game.get_player(command.player_index).print(command.tick)
   *   else
   *   game.print(command.tick)
   *   end
   *   end)
   *   ```
   *
   * @param name - The desired name of the command (case sensitive).
   * @param help - The localised help message. It will be shown to players using the `/help` command.
   * @param _function - The function that will be called when this command is invoked.
   */
  add_command(name: string, help: LocalisedString, _function: (param1: CustomCommandData) => void): void
  /**
   * Remove a custom console command.
   *
   * {@link https://lua-api.factorio.com/latest/LuaCommandProcessor.html#LuaCommandProcessor.remove_command View documentation}
   *
   * @param name - The name of the command to remove (case sensitive).
   * @returns Whether the command was successfully removed. Returns `false` if the command didn't exist.
   */
  remove_command(name: string): boolean
  /**
   * Lists the custom commands registered by scripts through `LuaCommandProcessor`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaCommandProcessor.html#LuaCommandProcessor.commands View documentation}
   */
  readonly commands: Record<string, LocalisedString>
  /**
   * Lists the built-in commands of the core game. The {@link https://wiki.factorio.com/Console wiki} has an overview of these.
   *
   * {@link https://lua-api.factorio.com/latest/LuaCommandProcessor.html#LuaCommandProcessor.game_commands View documentation}
   */
  readonly game_commands: Record<string, LocalisedString>
  /** This object's name. */
  readonly object_name: "LuaCommandProcessor"
}

/**
 * Control behavior for constant combinators.
 *
 * {@link https://lua-api.factorio.com/latest/LuaConstantCombinatorControlBehavior.html View documentation}
 *
 * @noSelf
 */
interface LuaConstantCombinatorControlBehavior extends LuaControlBehavior {
  /**
   * Sets the signal at the given index
   *
   * {@link https://lua-api.factorio.com/latest/LuaConstantCombinatorControlBehavior.html#LuaConstantCombinatorControlBehavior.set_signal View documentation}
   *
   * @param index
   * @param signal
   */
  set_signal(index: uint, signal: Signal): void
  /**
   * Gets the signal at the given index. Returned {@link Signal} will not contain signal if none is set for the index.
   *
   * {@link https://lua-api.factorio.com/latest/LuaConstantCombinatorControlBehavior.html#LuaConstantCombinatorControlBehavior.get_signal View documentation}
   *
   * @param index
   */
  get_signal(index: uint): Signal
  /**
   * The constant combinator parameters
   *
   * **Note**: Setting to `nil` clears the parameters.
   *
   * {@link https://lua-api.factorio.com/latest/LuaConstantCombinatorControlBehavior.html#LuaConstantCombinatorControlBehavior.parameters View documentation}
   */
  parameters: ConstantCombinatorParameters[]
  /**
   * Turns this constant combinator on and off.
   *
   * {@link https://lua-api.factorio.com/latest/LuaConstantCombinatorControlBehavior.html#LuaConstantCombinatorControlBehavior.enabled View documentation}
   */
  enabled: boolean
  /**
   * The number of signals this constant combinator supports
   *
   * {@link https://lua-api.factorio.com/latest/LuaConstantCombinatorControlBehavior.html#LuaConstantCombinatorControlBehavior.signals_count View documentation}
   */
  readonly signals_count: uint
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaConstantCombinatorControlBehavior"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Control behavior for container entities.
 *
 * {@link https://lua-api.factorio.com/latest/LuaContainerControlBehavior.html View documentation}
 *
 * @noSelf
 */
interface LuaContainerControlBehavior extends LuaControlBehavior {
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaContainerControlBehavior"
  /** All methods and properties that this object supports. */
  help(): string
}

interface BaseControlSetGuiArrow {
  /**
   * Where to point to. This field determines what other fields are mandatory. May be `"nowhere"`, `"goal"`,
   * `"entity_info"`, `"active_window"`, `"entity"`, `"position"`, `"crafting_queue"`, or `"item_stack"`.
   */
  readonly type:
    | "nowhere"
    | "goal"
    | "entity_info"
    | "active_window"
    | "entity"
    | "position"
    | "crafting_queue"
    | "item_stack"
}

interface EntityControlSetGuiArrow extends BaseControlSetGuiArrow {
  readonly type: "entity"
  readonly entity: LuaEntity
}

interface PositionControlSetGuiArrow extends BaseControlSetGuiArrow {
  readonly type: "position"
  readonly position: Position
}

interface CraftingQueueControlSetGuiArrow extends BaseControlSetGuiArrow {
  readonly type: "crafting_queue"
  readonly crafting_queueindex: uint
}

interface ItemStackControlSetGuiArrow extends BaseControlSetGuiArrow {
  readonly type: "item_stack"
  readonly inventory_index: defines.inventory
  readonly item_stack_index: uint
  /** May be either `"player"` or `"target"`. */
  readonly source: "player" | "target"
}

interface NowhereControlSetGuiArrow extends BaseControlSetGuiArrow {
  readonly type: "nowhere"
}

interface GoalControlSetGuiArrow extends BaseControlSetGuiArrow {
  readonly type: "goal"
}

interface EntityInfoControlSetGuiArrow extends BaseControlSetGuiArrow {
  readonly type: "entity_info"
}

interface ActiveWindowControlSetGuiArrow extends BaseControlSetGuiArrow {
  readonly type: "active_window"
}

type ControlSetGuiArrow =
  | EntityControlSetGuiArrow
  | PositionControlSetGuiArrow
  | CraftingQueueControlSetGuiArrow
  | ItemStackControlSetGuiArrow
  | NowhereControlSetGuiArrow
  | GoalControlSetGuiArrow
  | EntityInfoControlSetGuiArrow
  | ActiveWindowControlSetGuiArrow

/**
 * This is an abstract base class containing the common functionality between {@link LuaPlayer} and entities (see
 * {@link LuaEntity}). When accessing player-related functions through a {@link LuaEntity}, it must refer to a character entity.
 *
 * {@link https://lua-api.factorio.com/latest/LuaControl.html View documentation}
 *
 * @noSelf
 */
interface LuaControl {
  /**
   * Get an inventory belonging to this entity. This can be either the "main" inventory or some auxiliary one, like
   * the module slots or logistic trash slots.
   *
   * **Note**: A given {@link defines.inventory} is only meaningful for the corresponding LuaObject type. EG:
   * get_inventory(defines.inventory.character_main) is only meaningful if 'this' is a player character. You may get a
   * value back but if the type of 'this' isn't the type referred to by the {@link defines.inventory} it's almost
   * guaranteed to not be the inventory asked for.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.get_inventory View documentation}
   *
   * @param inventory
   * @returns Or `nil` if this entity doesn't have an inventory with the given index.
   */
  get_inventory(inventory: defines.inventory): LuaInventory | undefined
  /**
   * Gets the main inventory for this character or player if this is a character or player.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.get_main_inventory View documentation}
   *
   * @returns Or `nil` if this entity is not a character or player.
   */
  get_main_inventory(): LuaInventory | undefined
  /**
   * Can at least some items be inserted?
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.can_insert View documentation}
   *
   * @param items - Items that would be inserted.
   * @returns `true` if at least a part of the given items could be inserted into this inventory.
   */
  can_insert(items: ItemStackIdentification): boolean
  /**
   * Insert items into this entity. This works the same way as inserters or shift-clicking: the "best" inventory is
   * chosen automatically.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.insert View documentation}
   *
   * @param items - Items to insert.
   * @returns Number of items actually inserted.
   */
  insert(items: ItemStackIdentification): uint
  /**
   * Create an arrow which points at this entity. This is used in the tutorial. For examples, see `control.lua` in the
   * campaign missions.
   *
   * Other attributes may be specified depending on `type`:
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.set_gui_arrow View documentation}
   */
  set_gui_arrow(params: ControlSetGuiArrow): void
  /**
   * Removes the arrow created by `set_gui_arrow`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.clear_gui_arrow View documentation}
   */
  clear_gui_arrow(): void
  /**
   * Get the number of all or some items in this entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.get_item_count View documentation}
   *
   * @param item - Prototype name of the item to count. If not specified, count all items.
   */
  get_item_count(item?: string): uint
  /**
   * Does this entity have any item inside it?
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.has_items_inside View documentation}
   */
  has_items_inside(): boolean
  /**
   * Can a given entity be opened or accessed?
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.can_reach_entity View documentation}
   *
   * @param entity
   */
  can_reach_entity(entity: LuaEntity): boolean
  /**
   * Remove all items from this entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.clear_items_inside View documentation}
   */
  clear_items_inside(): void
  /**
   * Remove items from this entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.remove_item View documentation}
   *
   * @param items - Items to remove.
   * @returns Number of items actually removed.
   */
  remove_item(items: ItemStackIdentification): uint
  /**
   * Teleport the entity to a given position, possibly on another surface.
   *
   * **Note**: Some entities may not be teleported. For instance, transport belts won't allow teleportation and this
   * method will always return `false` when used on any such entity.
   *
   * **Note**: You can also pass 1 or 2 numbers as the parameters and they will be used as relative teleport
   * coordinates `'teleport(0, 1)'` to move the entity 1 tile positive y. `'teleport(4)'` to move the entity 4 tiles
   * to the positive x.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.teleport View documentation}
   *
   * @param position - Where to teleport to.
   * @param surface - Surface to teleport to. If not given, will teleport to the entity's current surface. Only
   *   players, cars, and spidertrons can be teleported cross-surface.
   * @returns `true` when the entity was successfully teleported.
   */
  teleport(position: MapPosition, surface?: SurfaceIdentification): boolean
  /**
   * Select an entity, as if by hovering the mouse above it.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.update_selected_entity View documentation}
   *
   * @param position - Position of the entity to select
   */
  update_selected_entity(position: MapPosition): void
  /**
   * Unselect any selected entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.clear_selected_entity View documentation}
   */
  clear_selected_entity(): void
  /**
   * Disable the flashlight.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.disable_flashlight View documentation}
   */
  disable_flashlight(): void
  /**
   * Enable the flashlight.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.enable_flashlight View documentation}
   */
  enable_flashlight(): void
  /**
   * Is the flashlight enabled.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.is_flashlight_enabled View documentation}
   */
  is_flashlight_enabled(): void
  /**
   * Gets the count of the given recipe that can be crafted.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.get_craftable_count View documentation}
   *
   * @param recipe - The recipe.
   * @returns The count that can be crafted.
   */
  get_craftable_count(recipe: string | LuaRecipe): uint
  /**
   * Begins crafting the given count of the given recipe.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.begin_crafting View documentation}
   *
   * @returns The count that was actually started crafting.
   */
  begin_crafting(params: {
    /** The count to craft. */
    readonly count: uint
    /** The recipe to craft. */
    readonly recipe: string | LuaRecipe
    /** If false and the recipe can't be crafted the requested number of times printing the failure is skipped. */
    readonly silent?: boolean
  }): uint
  /**
   * Cancels crafting the given count of the given crafting queue index.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.cancel_crafting View documentation}
   */
  cancel_crafting(params: {
    /** The crafting queue index. */
    readonly index: uint
    /** The count to cancel crafting. */
    readonly count: uint
  }): void
  /**
   * Mines the given entity as if this player (or character) mined it.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.mine_entity View documentation}
   *
   * @param entity - The entity to mine
   * @param force - Forces mining the entity even if the items can't fit in the player.
   * @returns If the mining succeeded.
   */
  mine_entity(entity: LuaEntity, force?: boolean): boolean
  /**
   * Mines the given tile as if this player (or character) mined it.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.mine_tile View documentation}
   *
   * @param tile - The tile to mine.
   * @returns If the mining succeeded.
   */
  mine_tile(tile: LuaTile): boolean
  /**
   * When `true` control adapter is a LuaPlayer object, `false` for entities including characters with players
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.is_player View documentation}
   */
  is_player(): boolean
  /**
   * Open the technology GUI and select a given technology.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.open_technology_gui View documentation}
   *
   * @param technology - The technology to select after opening the GUI.
   */
  open_technology_gui(technology?: TechnologyIdentification): void
  /**
   * Sets a personal logistic request and auto-trash slot to the given value.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.set_personal_logistic_slot View documentation}
   *
   * @param slot_index - The slot to set.
   * @param value - The logistic request parameters.
   * @returns Whether the slot was set successfully. `false` if personal logistics are not researched yet.
   */
  set_personal_logistic_slot(slot_index: uint, value: LogisticParameters): boolean
  /**
   * Sets a vehicle logistic request and auto-trash slot to the given value.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.set_vehicle_logistic_slot View documentation}
   *
   * @param slot_index - The slot to set.
   * @param value - The logistic request parameters.
   * @returns Whether the slot was set successfully. `false` if the vehicle does not use logistics.
   */
  set_vehicle_logistic_slot(slot_index: uint, value: LogisticParameters): boolean
  /**
   * Gets the parameters of a personal logistic request and auto-trash slot.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.get_personal_logistic_slot View documentation}
   *
   * @param slot_index - The slot to get.
   * @returns The logistic parameters. If personal logistics are not researched yet, their `name` will be `nil`.
   */
  get_personal_logistic_slot(slot_index: uint): LogisticParameters | undefined
  /**
   * Gets the parameters of a vehicle logistic request and auto-trash slot.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.get_vehicle_logistic_slot View documentation}
   *
   * @param slot_index - The slot to get.
   * @returns The logistic parameters. If the vehicle does not use logistics, their `name` will be `nil`.
   */
  get_vehicle_logistic_slot(slot_index: uint): LogisticParameters | undefined
  /**
   * **Note**: This will silently fail if personal logistics are not researched yet.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.clear_personal_logistic_slot View documentation}
   *
   * @param slot_index - The slot to clear.
   */
  clear_personal_logistic_slot(slot_index: uint): void
  /**
   * **Note**: This will silently fail if the vehicle does not use logistics.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.clear_vehicle_logistic_slot View documentation}
   *
   * @param slot_index - The slot to clear.
   */
  clear_vehicle_logistic_slot(slot_index: uint): void
  /**
   * Returns whether the player is holding a blueprint. This takes both blueprint items as well as blueprint records
   * from the blueprint library into account.
   *
   * **Note**: Both this method and {@link LuaControl.get_blueprint_entities LuaControl::get_blueprint_entities} refer
   * to the currently selected blueprint, meaning a blueprint book with a selected blueprint will return the
   * information as well.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.is_cursor_blueprint View documentation}
   */
  is_cursor_blueprint(): boolean
  /**
   * Gets the entities that are part of the currently selected blueprint, regardless of it being in a blueprint book
   * or picked from the blueprint library. Returns `nil` if there is no currently selected blueprint.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.get_blueprint_entities View documentation}
   */
  get_blueprint_entities(): BlueprintEntity[] | undefined
  /**
   * Returns whether the player is holding something in the cursor. It takes into account items from the blueprint
   * library, as well as items and ghost cursor.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.is_cursor_empty View documentation}
   */
  is_cursor_empty(): boolean
  /**
   * The surface this entity is currently on.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.surface View documentation}
   */
  readonly surface: LuaSurface
  /**
   * Current position of the entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.position View documentation}
   */
  readonly position: MapPosition
  /**
   * The vehicle the player is currently sitting in; `nil` if none.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.vehicle View documentation}
   */
  readonly vehicle: LuaEntity | undefined
  /**
   * The force of this entity. Reading will always give a {@link LuaForce}, but it is possible to assign either
   * {@link string} or {@link LuaForce} to this attribute to change the force.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.force View documentation}
   */
  force: ForceIdentification
  /**
   * The currently selected entity; `nil` if none. Assigning an entity will select it if selectable otherwise clears selection.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.selected View documentation}
   */
  selected: LuaEntity | undefined
  /**
   * The GUI the player currently has open, or `nil` if no GUI is open. Writing to it fires the
   * {@link OnGuiOpenedEvent on_gui_opened} event.
   *
   * This is the GUI that will asked to close (by firing the {@link OnGuiClosedEvent on_gui_closed} event) when the
   * `Esc` or `E` keys are pressed. If this attribute is not `nil`, and a new GUI is written to it, the existing one
   * will be asked to close.
   *
   * **Note**: Write supports any of the types. Read will return the `entity`, `equipment`, `equipment-grid`,
   * `player`, `element` or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.opened View documentation}
   */
  set opened(
    value:
      | LuaEntity
      | LuaItemStack
      | LuaEquipment
      | LuaEquipmentGrid
      | LuaPlayer
      | LuaGuiElement
      | defines.gui_type
      | undefined
  )
  get opened(): LuaEntity | LuaEquipment | LuaEquipmentGrid | LuaPlayer | LuaGuiElement | undefined
  /**
   * Size of the crafting queue.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.crafting_queue_size View documentation}
   */
  readonly crafting_queue_size: uint
  /**
   * The crafting queue progress [0-1] 0 when no recipe is being crafted.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.crafting_queue_progress View documentation}
   */
  readonly crafting_queue_progress: double
  /**
   * Current walking state.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.walking_state View documentation}
   *
   * @example
   *   Make the player go north. Note that a one-shot action like this will only make the player walk for one tick.
   *
   *   ```lua
   *   game.player.walking_state = {walking = true, direction = defines.direction.north}
   *   ```
   */
  walking_state: {
    /** If `false`, the player is currently not walking; otherwise it's going somewhere */
    readonly walking: boolean
    /** Direction where the player is walking */
    readonly direction: defines.direction
  }
  /**
   * Current riding state of this car or the vehicle this player is riding in.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.riding_state View documentation}
   */
  riding_state: RidingState
  /**
   * Current mining state.
   *
   * **Note**: When the player isn't mining tiles the player will mine what ever entity is currently selected. See
   * {@link LuaControl.selected LuaControl::selected} and
   * {@link LuaControl.update_selected_entity LuaControl::update_selected_entity}.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.mining_state View documentation}
   */
  mining_state: {
    /** Whether the player is mining at all */
    readonly mining: boolean
    /** What tiles the player is mining; only used when the player is mining tiles (holding a tile in the cursor). */
    readonly position?: Position
  }
  /**
   * Current shooting state.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.shooting_state View documentation}
   */
  shooting_state: {
    /** The current state */
    readonly state: defines.shooting
    /** The position being shot at */
    readonly position: Position
  }
  /**
   * Current item-picking state.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.picking_state View documentation}
   */
  picking_state: boolean
  /**
   * Current repair state.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.repair_state View documentation}
   */
  repair_state: {
    /** The current state */
    readonly repairing: boolean
    /** The position being repaired */
    readonly position: Position
  }
  /**
   * The player's cursor stack, or `nil` if the player controller is a spectator. Even though this property is marked
   * as read-only, it returns a {@link LuaItemStack}, meaning it can be manipulated like so:
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.cursor_stack View documentation}
   *
   * @example
   *   ```lua
   *     player.cursor_stack.clear()
   *     ```
   */
  readonly cursor_stack: LuaItemStack | undefined
  /**
   * The ghost prototype in the player's cursor.
   *
   * **Note**: When read, it will be a {@link LuaItemPrototype}.
   *
   * **Note**: Items in the cursor stack will take priority over the cursor ghost.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.cursor_ghost View documentation}
   */
  cursor_ghost: ItemPrototypeIdentification
  /**
   * `true` if the player is in a vehicle. Writing to this attribute puts the player in or out of a vehicle.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.driving View documentation}
   */
  driving: boolean
  /**
   * Gets the current crafting queue items.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.crafting_queue View documentation}
   */
  readonly crafting_queue: CraftingQueueItem[]
  /**
   * The current combat robots following the character
   *
   * **Note**: When called on a {@link LuaPlayer}, it must be associated with a character(see
   * {@link LuaPlayer.character LuaPlayer::character}).
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.following_robots View documentation}
   */
  readonly following_robots: LuaEntity[]
  /**
   * When `true` hand crafting is free and instant
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.cheat_mode View documentation}
   */
  cheat_mode: boolean
  /**
   * **Note**: When called on a {@link LuaPlayer}, it must be associated with a character (see
   * {@link LuaPlayer.character LuaPlayer::character}).
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.character_crafting_speed_modifier View documentation}
   */
  character_crafting_speed_modifier: double
  /**
   * **Note**: When called on a {@link LuaPlayer}, it must be associated with a character (see
   * {@link LuaPlayer.character LuaPlayer::character}).
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.character_mining_speed_modifier View documentation}
   */
  character_mining_speed_modifier: double
  /**
   * **Note**: When called on a {@link LuaPlayer}, it must be associated with a character (see
   * {@link LuaPlayer.character LuaPlayer::character}).
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.character_additional_mining_categories View documentation}
   */
  character_additional_mining_categories: string[]
  /**
   * Modifies the running speed of this character by the given value as a percentage. Setting the running modifier to
   * `0.5` makes the character run 50% faster. The minimum value of `-1` reduces the movement speed by 100%, resulting
   * in a speed of `0`.
   *
   * **Note**: When called on a {@link LuaPlayer}, it must be associated with a character (see
   * {@link LuaPlayer.character LuaPlayer::character}).
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.character_running_speed_modifier View documentation}
   */
  character_running_speed_modifier: double
  /**
   * **Note**: When called on a {@link LuaPlayer}, it must be associated with a character (see
   * {@link LuaPlayer.character LuaPlayer::character}).
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.character_build_distance_bonus View documentation}
   */
  character_build_distance_bonus: uint
  /**
   * **Note**: When called on a {@link LuaPlayer}, it must be associated with a character (see
   * {@link LuaPlayer.character LuaPlayer::character}).
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.character_item_drop_distance_bonus View documentation}
   */
  character_item_drop_distance_bonus: uint
  /**
   * **Note**: When called on a {@link LuaPlayer}, it must be associated with a character (see
   * {@link LuaPlayer.character LuaPlayer::character}).
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.character_reach_distance_bonus View documentation}
   */
  character_reach_distance_bonus: uint
  /**
   * **Note**: When called on a {@link LuaPlayer}, it must be associated with a character (see
   * {@link LuaPlayer.character LuaPlayer::character}).
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.character_resource_reach_distance_bonus View documentation}
   */
  character_resource_reach_distance_bonus: uint
  /**
   * **Note**: When called on a {@link LuaPlayer}, it must be associated with a character (see
   * {@link LuaPlayer.character LuaPlayer::character}).
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.character_item_pickup_distance_bonus View documentation}
   */
  character_item_pickup_distance_bonus: uint
  /**
   * **Note**: When called on a {@link LuaPlayer}, it must be associated with a character (see
   * {@link LuaPlayer.character LuaPlayer::character}).
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.character_loot_pickup_distance_bonus View documentation}
   */
  character_loot_pickup_distance_bonus: uint
  /**
   * **Note**: When called on a {@link LuaPlayer}, it must be associated with a character (see
   * {@link LuaPlayer.character LuaPlayer::character}).
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.character_inventory_slots_bonus View documentation}
   */
  character_inventory_slots_bonus: uint
  /**
   * **Note**: When called on a {@link LuaPlayer}, it must be associated with a character (see
   * {@link LuaPlayer.character LuaPlayer::character}).
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.character_trash_slot_count_bonus View documentation}
   */
  character_trash_slot_count_bonus: uint
  /**
   * **Note**: When called on a {@link LuaPlayer}, it must be associated with a character (see
   * {@link LuaPlayer.character LuaPlayer::character}).
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.character_maximum_following_robot_count_bonus View documentation}
   */
  character_maximum_following_robot_count_bonus: uint
  /**
   * **Note**: When called on a {@link LuaPlayer}, it must be associated with a character (see
   * {@link LuaPlayer.character LuaPlayer::character}).
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.character_health_bonus View documentation}
   */
  character_health_bonus: float
  /**
   * If personal logistic requests are enabled for this character or players character.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.character_personal_logistic_requests_enabled View documentation}
   */
  character_personal_logistic_requests_enabled: boolean
  /**
   * If personal logistic requests are enabled for this vehicle (spidertron).
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.vehicle_logistic_requests_enabled View documentation}
   */
  vehicle_logistic_requests_enabled: boolean
  /**
   * Returns the {@link defines.gui_type} or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.opened_gui_type View documentation}
   */
  readonly opened_gui_type: defines.gui_type | undefined
  /**
   * The build distance of this character or max uint when not a character or player connected to a character.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.build_distance View documentation}
   */
  readonly build_distance: uint
  /**
   * The item drop distance of this character or max uint when not a character or player connected to a character.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.drop_item_distance View documentation}
   */
  readonly drop_item_distance: uint
  /**
   * The reach distance of this character or max uint when not a character or player connected to a character.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.reach_distance View documentation}
   */
  readonly reach_distance: uint
  /**
   * The item pickup distance of this character or max double when not a character or player connected to a character.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.item_pickup_distance View documentation}
   */
  readonly item_pickup_distance: double
  /**
   * The loot pickup distance of this character or max double when not a character or player connected to a character.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.loot_pickup_distance View documentation}
   */
  readonly loot_pickup_distance: double
  /**
   * The resource reach distance of this character or max double when not a character or player connected to a character.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.resource_reach_distance View documentation}
   */
  readonly resource_reach_distance: double
  /**
   * If this character entity is in combat.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.in_combat View documentation}
   */
  readonly in_combat: boolean
  /**
   * Gets the current movement speed of this character, including effects from exoskeletons, tiles, stickers and shooting.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.character_running_speed View documentation}
   */
  readonly character_running_speed: double
  /**
   * Gets the current mining progress between 0 and 1 of this character, or 0 if they aren't mining.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControl.html#LuaControl.character_mining_progress View documentation}
   */
  readonly character_mining_progress: double
}

/**
 * The control behavior for an entity. Inserters have logistic network and circuit network behavior logic, lamps have
 * circuit logic and so on. This is an abstract base class that concrete control behaviors inherit.
 *
 * **Note**: An control reference becomes invalid once the control behavior is removed or the entity (see
 * {@link LuaEntity}) it resides in is destroyed.
 *
 * {@link https://lua-api.factorio.com/latest/LuaControlBehavior.html View documentation}
 *
 * @noSelf
 */
interface LuaControlBehavior {
  /**
   * {@link https://lua-api.factorio.com/latest/LuaControlBehavior.html#LuaControlBehavior.get_circuit_network View documentation}
   *
   * @param wire - Wire color of the network connected to this entity.
   * @param circuit_connector - The connector to get circuit network for. Must be specified for entities with more
   *   than one circuit network connector.
   * @returns The circuit network or nil.
   */
  get_circuit_network(
    wire: defines.wire_type,
    circuit_connector?: defines.circuit_connector_id
  ): LuaCircuitNetwork | undefined
  /**
   * The concrete type of this control behavior.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControlBehavior.html#LuaControlBehavior.type View documentation}
   */
  readonly type: defines.control_behavior.type
  /**
   * The entity this control behavior belongs to.
   *
   * {@link https://lua-api.factorio.com/latest/LuaControlBehavior.html#LuaControlBehavior.entity View documentation}
   */
  readonly entity: LuaEntity
}

/**
 * A custom tag that shows on the map view.
 *
 * {@link https://lua-api.factorio.com/latest/LuaCustomChartTag.html View documentation}
 *
 * @noSelf
 */
interface LuaCustomChartTag {
  /**
   * Destroys this tag.
   *
   * {@link https://lua-api.factorio.com/latest/LuaCustomChartTag.html#LuaCustomChartTag.destroy View documentation}
   */
  destroy(): void
  /**
   * This tag's icon, if it has one. Writing `nil` removes it.
   *
   * {@link https://lua-api.factorio.com/latest/LuaCustomChartTag.html#LuaCustomChartTag.icon View documentation}
   */
  icon: SignalID | undefined
  /**
   * The player who last edited this tag.
   *
   * {@link https://lua-api.factorio.com/latest/LuaCustomChartTag.html#LuaCustomChartTag.last_user View documentation}
   */
  last_user: LuaPlayer
  /**
   * The position of this tag.
   *
   * {@link https://lua-api.factorio.com/latest/LuaCustomChartTag.html#LuaCustomChartTag.position View documentation}
   */
  readonly position: PositionTable
  text: string
  /**
   * The unique ID for this tag on this force.
   *
   * {@link https://lua-api.factorio.com/latest/LuaCustomChartTag.html#LuaCustomChartTag.tag_number View documentation}
   */
  readonly tag_number: uint
  /**
   * The force this tag belongs to.
   *
   * {@link https://lua-api.factorio.com/latest/LuaCustomChartTag.html#LuaCustomChartTag.force View documentation}
   */
  readonly force: LuaForce
  /**
   * The surface this tag belongs to.
   *
   * {@link https://lua-api.factorio.com/latest/LuaCustomChartTag.html#LuaCustomChartTag.surface View documentation}
   */
  readonly surface: LuaSurface
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaCustomChartTag"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Prototype of a custom input.
 *
 * {@link https://lua-api.factorio.com/latest/LuaCustomInputPrototype.html View documentation}
 *
 * @noSelf
 */
interface LuaCustomInputPrototype {
  /**
   * Name of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaCustomInputPrototype.html#LuaCustomInputPrototype.name View documentation}
   */
  readonly name: string
  /**
   * Order string of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaCustomInputPrototype.html#LuaCustomInputPrototype.order View documentation}
   */
  readonly order: string
  readonly localised_name: LocalisedString
  readonly localised_description: LocalisedString
  /**
   * The default key sequence for this custom input.
   *
   * {@link https://lua-api.factorio.com/latest/LuaCustomInputPrototype.html#LuaCustomInputPrototype.key_sequence View documentation}
   */
  readonly key_sequence: string
  /**
   * The default alternative key sequence for this custom input. `nil` when not defined.
   *
   * {@link https://lua-api.factorio.com/latest/LuaCustomInputPrototype.html#LuaCustomInputPrototype.alternative_key_sequence View documentation}
   */
  readonly alternative_key_sequence: string | undefined
  /**
   * The linked game control name or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaCustomInputPrototype.html#LuaCustomInputPrototype.linked_game_control View documentation}
   */
  readonly linked_game_control: string | undefined
  /**
   * The consuming type: `"none"` or `"game-only"`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaCustomInputPrototype.html#LuaCustomInputPrototype.consuming View documentation}
   */
  readonly consuming: "none" | "game-only"
  /**
   * The action that happens when this custom input is triggered.
   *
   * {@link https://lua-api.factorio.com/latest/LuaCustomInputPrototype.html#LuaCustomInputPrototype.action View documentation}
   */
  readonly action: string
  /**
   * If this custom input is enabled. Disabled custom inputs exist but are not used by the game.
   *
   * {@link https://lua-api.factorio.com/latest/LuaCustomInputPrototype.html#LuaCustomInputPrototype.enabled View documentation}
   */
  readonly enabled: boolean
  /**
   * If this custom input is enabled while using the spectator controller.
   *
   * {@link https://lua-api.factorio.com/latest/LuaCustomInputPrototype.html#LuaCustomInputPrototype.enabled_while_spectating View documentation}
   */
  readonly enabled_while_spectating: boolean
  /**
   * If this custom input is enabled while using the cutscene controller.
   *
   * {@link https://lua-api.factorio.com/latest/LuaCustomInputPrototype.html#LuaCustomInputPrototype.enabled_while_in_cutscene View documentation}
   */
  readonly enabled_while_in_cutscene: boolean
  /**
   * If this custom input will include the selected prototype (if any) when triggered.
   *
   * {@link https://lua-api.factorio.com/latest/LuaCustomInputPrototype.html#LuaCustomInputPrototype.include_selected_prototype View documentation}
   */
  readonly include_selected_prototype: boolean
  /**
   * The item that gets spawned when this custom input is fired or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaCustomInputPrototype.html#LuaCustomInputPrototype.item_to_spawn View documentation}
   */
  readonly item_to_spawn: LuaItemPrototype | undefined
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaCustomInputPrototype"
  /** All methods and properties that this object supports. */
  help(): string
}

type CustomTableIndex<K extends keyof any, V>
/**
 * Access an element of this custom table.
 *
 * {@link https://lua-api.factorio.com/latest/LuaCustomTable.html#LuaCustomTable.operator%20[] View documentation}
 */ = {
  [P in K]: V
}

/** @noSelf */
interface LuaCustomTableMembers {
  /**
   * Number of elements in this table.
   *
   * {@link https://lua-api.factorio.com/latest/LuaCustomTable.html#LuaCustomTable.operator%20# View documentation}
   */
  readonly length: LuaLengthMethod<uint>
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaCustomTable"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Lazily evaluated table. For performance reasons, we sometimes return a custom table-like type instead of a native Lua
 * table. This custom type lazily constructs the necessary Lua wrappers of the corresponding C++ objects, therefore
 * preventing their unnecessary construction in some cases.
 *
 * There are some notable consequences to the usage of a custom table type rather than the native Lua table type:
 * Iterating a custom table is only possible using the `pairs` Lua function; `ipairs` won't work. Another key difference
 * is that custom tables cannot be serialised into a game save file -- if saving the game would require serialisation of
 * a custom table, an error will be displayed and the game will not be saved.
 *
 * {@link https://lua-api.factorio.com/latest/LuaCustomTable.html View documentation}
 *
 * @example
 *   In previous versions of Factorio, this would create a {@link LuaPlayer} instance for every player in the game, even though only one such wrapper is needed. In the current version, accessing {@link LuaGameScript.players game.players} by itself does not create any {@link LuaPlayer} instances; they are created lazily when accessed. Therefore, this example only constructs one {@link LuaPlayer} instance, no matter how many elements there are in `game.players`.
 *
 *   ```lua
 *   game.players["Oxyd"].character.die()
 *   ```
 *
 * @example
 *   Custom tables may be iterated using `pairs`.
 *
 *   ```lua
 *   for _, p in pairs(game.players) do game.player.print(p.name); end
 *   ```
 *
 * @example
 *   The following will produce no output because `ipairs` is not supported with custom tables.
 *
 *   ```lua
 *   for _, p in ipairs(game.players) do game.player.print(p.name); end  -- incorrect; use pairs instead
 *   ```
 *
 * @example
 *   This statement will execute successfully and `global.p` will be useable as one might expect. However, as soon as the user tries to save the game, a "LuaCustomTable cannot be serialized" error will be shown. The game will remain unsaveable so long as `global.p` refers to an instance of a custom table.
 *
 *   ```lua
 *   global.p = game.players  -- This has high potential to make the game unsaveable
 *   ```
 */
type LuaCustomTable<K extends keyof any, V> = LuaCustomTableMembers & CustomTableIndex<K, V>

/**
 * Prototype of a damage.
 *
 * {@link https://lua-api.factorio.com/latest/LuaDamagePrototype.html View documentation}
 *
 * @noSelf
 */
interface LuaDamagePrototype {
  /**
   * Name of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaDamagePrototype.html#LuaDamagePrototype.name View documentation}
   */
  readonly name: string
  /**
   * Order string of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaDamagePrototype.html#LuaDamagePrototype.order View documentation}
   */
  readonly order: string
  readonly localised_name: LocalisedString
  readonly localised_description: LocalisedString
  /**
   * Whether this damage type is hidden from entity tooltips.
   *
   * {@link https://lua-api.factorio.com/latest/LuaDamagePrototype.html#LuaDamagePrototype.hidden View documentation}
   */
  readonly hidden: boolean
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaDamagePrototype"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Control behavior for decider combinators.
 *
 * {@link https://lua-api.factorio.com/latest/LuaDeciderCombinatorControlBehavior.html View documentation}
 *
 * @noSelf
 */
interface LuaDeciderCombinatorControlBehavior extends LuaCombinatorControlBehavior {
  /**
   * The decider combinator parameters
   *
   * **Note**: Setting to `nil` clears the parameters.
   *
   * {@link https://lua-api.factorio.com/latest/LuaDeciderCombinatorControlBehavior.html#LuaDeciderCombinatorControlBehavior.parameters View documentation}
   */
  parameters: DeciderCombinatorParameters
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaDeciderCombinatorControlBehavior"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Prototype of an optimized decorative.
 *
 * {@link https://lua-api.factorio.com/latest/LuaDecorativePrototype.html View documentation}
 *
 * @noSelf
 */
interface LuaDecorativePrototype {
  /**
   * Name of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaDecorativePrototype.html#LuaDecorativePrototype.name View documentation}
   */
  readonly name: string
  /**
   * Order string of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaDecorativePrototype.html#LuaDecorativePrototype.order View documentation}
   */
  readonly order: string
  readonly localised_name: LocalisedString
  readonly localised_description: LocalisedString
  /**
   * The bounding box used for collision checking.
   *
   * {@link https://lua-api.factorio.com/latest/LuaDecorativePrototype.html#LuaDecorativePrototype.collision_box View documentation}
   */
  readonly collision_box: BoundingBoxTable
  /**
   * The collision masks this decorative uses
   *
   * {@link https://lua-api.factorio.com/latest/LuaDecorativePrototype.html#LuaDecorativePrototype.collision_mask View documentation}
   */
  readonly collision_mask: CollisionMask
  readonly collision_mask_with_flags: CollisionMaskWithFlags
  /**
   * Autoplace specification for this decorative prototype. `nil` if none.
   *
   * {@link https://lua-api.factorio.com/latest/LuaDecorativePrototype.html#LuaDecorativePrototype.autoplace_specification View documentation}
   */
  readonly autoplace_specification: AutoplaceSpecification | undefined
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaDecorativePrototype"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Prototype of an electric energy source.
 *
 * {@link https://lua-api.factorio.com/latest/LuaElectricEnergySourcePrototype.html View documentation}
 *
 * @noSelf
 */
interface LuaElectricEnergySourcePrototype {
  readonly buffer_capacity: double
  readonly usage_priority: string
  readonly input_flow_limit: double
  readonly output_flow_limit: double
  readonly drain: double
  readonly emissions: double
  readonly render_no_network_icon: boolean
  readonly render_no_power_icon: boolean
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaElectricEnergySourcePrototype"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * The primary interface for interacting with entities through the Lua API. Entities are everything that exists on the
 * map except for tiles (see {@link LuaTile}).
 *
 * Most functions on LuaEntity also work when the entity is contained in a ghost.
 *
 * {@link https://lua-api.factorio.com/latest/LuaEntity.html View documentation}
 *
 * @noSelf
 */
interface LuaEntity extends LuaControl {
  /**
   * Gets the entities output inventory if it has one.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_output_inventory View documentation}
   *
   * @returns A reference to the entities output inventory.
   */
  get_output_inventory(): LuaInventory
  /**
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_module_inventory View documentation}
   *
   * @returns Inventory for storing modules of this entity; `nil` if this entity has no module inventory.
   */
  get_module_inventory(): LuaInventory | undefined
  /**
   * The fuel inventory for this entity or `nil` if this entity doesn't have a fuel inventory.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_fuel_inventory View documentation}
   */
  get_fuel_inventory(): LuaInventory | undefined
  /**
   * The burnt result inventory for this entity or `nil` if this entity doesn't have a burnt result inventory.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_burnt_result_inventory View documentation}
   */
  get_burnt_result_inventory(): LuaInventory | undefined
  /**
   * Damages the entity.
   *
   * *Can only be used if this is EntityWithHealth*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.damage View documentation}
   *
   * @param damage - The amount of damage to be done
   * @param force - The force that will be doing the damage.
   * @param type - The type of damage to be done, defaults to "impact".
   * @param dealer - The entity to consider as the damage dealer.
   * @returns The total damage actually applied after resistances.
   */
  damage(damage: float, force: ForceIdentification, type?: string, dealer?: LuaEntity): float
  /**
   * Checks if the entity can be destroyed
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.can_be_destroyed View documentation}
   *
   * @returns If the entity can be destroyed.
   */
  can_be_destroyed(): boolean
  /**
   * Destroys the entity.
   *
   * **Note**: Not all entities can be destroyed - things such as rails under trains cannot be destroyed until the
   * train is moved or destroyed.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.destroy View documentation}
   *
   * @returns Returns `false` if the entity was valid and destruction failed, `true` in all other cases.
   */
  destroy(params?: {
    /** Whether neighbouring cliffs should be corrected. Defaults to `false`. */
    readonly do_cliff_correction?: boolean
    /** If `true`, {@link ScriptRaisedDestroyEvent script_raised_destroy} will be called. Defaults to `false`. */
    readonly raise_destroy?: boolean
  }): boolean
  /**
   * Give the entity a command.
   *
   * *Can only be used if this is Unit*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.set_command View documentation}
   *
   * @param command
   */
  set_command(command: Command): void
  /**
   * Give the entity a distraction command.
   *
   * *Can only be used if this is Unit*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.set_distraction_command View documentation}
   *
   * @param command
   */
  set_distraction_command(command: Command): void
  /**
   * Has this unit been assigned a command?
   *
   * *Can only be used if this is Unit*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.has_command View documentation}
   */
  has_command(): boolean
  /**
   * Immediately kills the entity. Does nothing if the entity doesn't have health.
   *
   * Unlike {@link LuaEntity.destroy LuaEntity::destroy}, `die` will trigger the
   * {@link OnEntityDiedEvent on_entity_died} event and the entity will produce a corpse and drop loot if it has any.
   *
   * **Note**: If `force` is not specified, `on_entity_died` will blame the `"neutral"` force.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.die View documentation}
   *
   * @example
   *   This function can be called with only the `cause` argument and no `force`:
   *
   *   ```lua
   *   entity.die(nil, killer_entity)
   *   ```
   *
   * @param force - The force to attribute the kill to.
   * @param cause - The cause to attribute the kill to.
   * @returns Whether the entity was successfully killed.
   */
  die(force?: ForceIdentification, cause?: LuaEntity): boolean
  /**
   * Test whether this entity's prototype has a certain flag set.
   *
   * **Note**: `entity.has_flag(f)` is a shortcut for `entity.prototype.has_flag(f)`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.has_flag View documentation}
   *
   * @param flag - The flag to test. See {@link EntityPrototypeFlags} for a list of flags.
   * @returns `true` if this entity has the given flag set.
   */
  has_flag(flag: string): boolean
  /**
   * Same as {@link LuaEntity.has_flag LuaEntity::has_flag}, but targets the inner entity on a entity ghost.
   *
   * *Can only be used if this is EntityGhost*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.ghost_has_flag View documentation}
   *
   * @param flag - The flag to test. See {@link EntityPrototypeFlags} for a list of flags.
   * @returns `true` if the entity has the given flag set.
   */
  ghost_has_flag(flag: string): boolean
  /**
   * Offer a thing on the market.
   *
   * *Can only be used if this is Market*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.add_market_item View documentation}
   *
   * @example
   *   Adds market offer, 1 copper ore for 10 iron ore.
   *
   *   ```lua
   *   market.add_market_item{price={{"iron-ore", 10}}, offer={type="give-item", item="copper-ore"}}
   *   ```
   *
   * @example
   *   Adds market offer, 1 copper ore for 5 iron ore and 5 stone ore.
   *
   *   ```lua
   *   market.add_market_item{price={{"iron-ore", 5}, {"stone", 5}}, offer={type="give-item", item="copper-ore"}}
   *   ```
   *
   * @param offer
   */
  add_market_item(offer: Offer): void
  /**
   * Remove an offer from a market.
   *
   * **Note**: The other offers are moved down to fill the gap created by removing the offer, which decrements the
   * overall size of the offer array.
   *
   * *Can only be used if this is Market*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.remove_market_item View documentation}
   *
   * @param offer - Index of offer to remove.
   * @returns `true` if the offer was successfully removed; `false` when the given index was not valid.
   */
  remove_market_item(offer: uint): boolean
  /**
   * Get all offers in a market as an array.
   *
   * *Can only be used if this is Market*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_market_items View documentation}
   */
  get_market_items(): Offer[]
  /**
   * Removes all offers from a market.
   *
   * *Can only be used if this is Market*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.clear_market_items View documentation}
   */
  clear_market_items(): void
  /**
   * Connect two devices with a circuit wire or copper cable. Depending on which type of connection should be made,
   * there are different procedures:
   *
   * - To connect two electric poles, `target` must be a {@link LuaEntity} that specifies another electric pole. This
   *   will connect them with copper cable.
   * - To connect two devices with circuit wire, `target` must be a table of type {@link WireConnectionDefinition}.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.connect_neighbour View documentation}
   *
   * @param target - The target with which to establish a connection.
   * @returns Whether the connection was successfully formed.
   */
  connect_neighbour(target: LuaEntity | WireConnectionDefinition): boolean
  /**
   * Disconnect circuit wires or copper cables between devices. Depending on which type of connection should be cut,
   * there are different procedures:
   *
   * - To remove all copper cables, leave the `target` parameter blank: `pole.disconnect_neighbour()`.
   * - To remove all wires of a specific color, set `target` to {@link defines.wire_type.red} or {@link defines.wire_type.green}.
   * - To remove a specific copper cable between two electric poles, `target` must be a {@link LuaEntity} that specifies
   *   the other pole: `pole1.disconnect_neighbour(pole2)`.
   * - To remove a specific circuit wire, `target` must be a table of type {@link WireConnectionDefinition}.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.disconnect_neighbour View documentation}
   *
   * @param target - The target with which to cut a connection.
   */
  disconnect_neighbour(target?: defines.wire_type | LuaEntity | WireConnectionDefinition): void
  /**
   * Sets the entity to be deconstructed by construction robots.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.order_deconstruction View documentation}
   *
   * @param force - The force whose robots are supposed to do the deconstruction.
   * @param player - The player to set the last_user to if any.
   * @returns If the entity was marked for deconstruction.
   */
  order_deconstruction(force: ForceIdentification, player?: PlayerIdentification): boolean
  /**
   * Cancels deconstruction if it is scheduled, does nothing otherwise.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.cancel_deconstruction View documentation}
   *
   * @param force - The force who did the deconstruction order.
   * @param player - The player to set the last_user to if any.
   */
  cancel_deconstruction(force: ForceIdentification, player?: PlayerIdentification): void
  /**
   * Is this entity marked for deconstruction?
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.to_be_deconstructed View documentation}
   */
  to_be_deconstructed(): boolean
  /**
   * Sets the entity to be upgraded by construction robots.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.order_upgrade View documentation}
   *
   * @returns If the entity was marked for upgrade.
   */
  order_upgrade(params: {
    /** The force whose robots are supposed to do the upgrade. */
    readonly force: ForceIdentification
    /** The prototype of the entity to upgrade to. */
    readonly target: EntityPrototypeIdentification
    readonly player?: PlayerIdentification
    /** The new direction if any. */
    readonly direction?: defines.direction
  }): boolean
  /**
   * Cancels upgrade if it is scheduled, does nothing otherwise.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.cancel_upgrade View documentation}
   *
   * @param force - The force who did the upgrade order.
   * @param player - The player to set the last_user to if any.
   * @returns If the cancel was successful.
   */
  cancel_upgrade(force: ForceIdentification, player?: PlayerIdentification): boolean
  /**
   * Is this entity marked for upgrade?
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.to_be_upgraded View documentation}
   */
  to_be_upgraded(): boolean
  /**
   * Get a logistic requester slot.
   *
   * **Note**: Useable only on entities that have requester slots.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_request_slot View documentation}
   *
   * @param slot - The slot index.
   * @returns Contents of the specified slot; `nil` if the given slot contains no request.
   */
  get_request_slot(slot: uint): SimpleItemStack | undefined
  /**
   * Set a logistic requester slot.
   *
   * **Note**: Useable only on entities that have requester slots.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.set_request_slot View documentation}
   *
   * @param request - What to request.
   * @param slot - The slot index.
   * @returns If the slot was set.
   */
  set_request_slot(request: ItemStackIdentification, slot: uint): boolean
  /**
   * Clear a logistic requester slot.
   *
   * **Note**: Useable only on entities that have requester slots.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.clear_request_slot View documentation}
   *
   * @param slot - The slot index.
   */
  clear_request_slot(slot: uint): void
  /**
   * Returns whether a craft is currently in process. It does not indicate whether progress is currently being made,
   * but whether any crafting action has made progress in this machine.
   *
   * *Can only be used if this is CraftingMachine*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.is_crafting View documentation}
   */
  is_crafting(): void
  /**
   * *Can only be used if this is Gate*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.is_opened View documentation}
   *
   * @returns `true` if this gate is currently opened.
   */
  is_opened(): boolean
  /**
   * *Can only be used if this is Gate*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.is_opening View documentation}
   *
   * @returns `true` if this gate is currently opening.
   */
  is_opening(): boolean
  /**
   * *Can only be used if this is Gate*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.is_closed View documentation}
   *
   * @returns `true` if this gate is currently closed.
   */
  is_closed(): boolean
  /**
   * *Can only be used if this is Gate*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.is_closing View documentation}
   *
   * @returns `true` if this gate is currently closing
   */
  is_closing(): boolean
  /**
   * *Can only be used if this is Gate*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.request_to_open View documentation}
   *
   * @param force - The force that requests the gate to be open.
   * @param extra_time - Extra ticks to stay open.
   */
  request_to_open(force: ForceIdentification, extra_time?: uint): void
  /**
   * *Can only be used if this is Gate*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.request_to_close View documentation}
   *
   * @param force - The force that requests the gate to be closed.
   */
  request_to_close(force: ForceIdentification): void
  /**
   * Get a transport line of a belt or belt connectable entity.
   *
   * *Can only be used if this is TransportBeltConnectable*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_transport_line View documentation}
   *
   * @param index - Index of the requested transport line. Transport lines are 1-indexed.
   */
  get_transport_line(index: uint): LuaTransportLine
  /**
   * Get the maximum transport line index of a belt or belt connectable entity.
   *
   * *Can only be used if this is TransportBeltConnectable*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_max_transport_line_index View documentation}
   */
  get_max_transport_line_index(): uint
  /**
   * *Can only be used if this is RocketSilo*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.launch_rocket View documentation}
   *
   * @returns `true` if the rocket was successfully launched. Return value of `false` means the silo is not ready for launch.
   */
  launch_rocket(): boolean
  /**
   * Revive a ghost. I.e. turn it from a ghost to a real entity or tile.
   *
   * **Note**: If this is an entity ghost and it is successfully revived this will also return the revived entity or
   * `nil` as a second return value and possibly item request proxy as the third parameter depending on value of
   * return_item_request_proxy.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.revive View documentation}
   *
   * @returns Any items the new real entity collided with or `nil` if the ghost could not be revived.
   */
  revive(params?: {
    /** If `true` the function will return item request proxy as the third parameter. */
    readonly return_item_request_proxy?: boolean
    /**
     * If true, and an entity ghost; {@link ScriptRaisedReviveEvent script_raised_revive} will be called. Else if
     * true, and a tile ghost; {@link ScriptRaisedSetTilesEvent script_raised_set_tiles} will be called.
     */
    readonly raise_revive?: boolean
  }): LuaMultiReturn<[undefined] | [Record<string, uint>, LuaEntity, LuaEntity | undefined]>
  /**
   * Revives a ghost silently.
   *
   * **Note**: If this is an entity ghost and it is successfully revived this will also return the revived entity or
   * `nil` as a second return value and possibly item request proxy as the third parameter depending on value of
   * return_item_request_proxy.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.silent_revive View documentation}
   *
   * @returns Any items the new real entity collided with or `nil` if the ghost could not be revived.
   */
  silent_revive(params?: {
    /** If `true` the function will return item request proxy as the third parameter. */
    readonly return_item_request_proxy?: boolean
    /**
     * If true, and an entity ghost; {@link ScriptRaisedReviveEvent script_raised_revive} will be called. Else if
     * true, and a tile ghost; {@link ScriptRaisedSetTilesEvent script_raised_set_tiles} will be called.
     */
    readonly raise_revive?: boolean
  }): LuaMultiReturn<[undefined] | [Record<string, uint>, LuaEntity, LuaEntity | undefined]>
  /**
   * *Can only be used if this is Rail*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_connected_rail View documentation}
   *
   * @returns Rail connected in the specified manner to this one.
   */
  get_connected_rail(params: {
    readonly rail_direction: defines.rail_direction
    readonly rail_connection_direction: defines.rail_connection_direction
  }): LuaEntity
  /**
   * Get the rails that this signal is connected to.
   *
   * *Can only be used if this is RailSignal or RailChainSignal*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_connected_rails View documentation}
   */
  get_connected_rails(): LuaEntity[]
  /**
   * Get the rail signal or train stop at the start/end of the rail segment this rail is in, or `nil` if the rail
   * segment doesn't start/end with a signal nor a train stop.
   *
   * **Note**: A rail segment is a continuous section of rail with no branches, signals, nor train stops.
   *
   * *Can only be used if this is Rail*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_rail_segment_entity View documentation}
   *
   * @param direction - The direction of travel relative to this rail.
   * @param in_else_out - If true, gets the entity at the entrance of the rail segment, otherwise gets the entity at
   *   the exit of the rail segment.
   */
  get_rail_segment_entity(direction: defines.rail_direction, in_else_out: boolean): LuaEntity | undefined
  /**
   * Get the rail at the end of the rail segment this rail is in.
   *
   * **Note**: A rail segment is a continuous section of rail with no branches, signals, nor train stops.
   *
   * **Note**: This function has a second return value. A {@link defines.rail_direction} that points out of the rail
   * segment from the end rail.
   *
   * *Can only be used if this is Rail*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_rail_segment_end View documentation}
   *
   * @param direction
   */
  get_rail_segment_end(direction: defines.rail_direction): LuaMultiReturn<[LuaEntity, defines.rail_direction]>
  /**
   * Get the length of the rail segment this rail is in.
   *
   * **Note**: A rail segment is a continuous section of rail with no branches, signals, nor train stops.
   *
   * *Can only be used if this is Rail*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_rail_segment_length View documentation}
   */
  get_rail_segment_length(): double
  /**
   * Get a rail from each rail segment that overlaps with this rail's rail segment.
   *
   * **Note**: A rail segment is a continuous section of rail with no branches, signals, nor train stops.
   *
   * *Can only be used if this is Rail*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_rail_segment_overlaps View documentation}
   */
  get_rail_segment_overlaps(): LuaEntity[]
  /**
   * Get the filter for a slot in an inserter, loader, or logistic storage container.
   *
   * **Note**: The entity must allow filters.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_filter View documentation}
   *
   * @param slot_index - Index of the slot to get the filter for.
   * @returns Prototype name of the item being filtered. `nil` if the given slot has no filter.
   */
  get_filter(slot_index: uint): string | undefined
  /**
   * Set the filter for a slot in an inserter, loader, or logistic storage container.
   *
   * **Note**: The entity must allow filters.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.set_filter View documentation}
   *
   * @param slot_index - Index of the slot to set the filter for.
   * @param item - Prototype name of the item to filter.
   */
  set_filter(slot_index: uint, item: string): void
  /**
   * Gets the filter for this infinity container at the given index or `nil` if the filter index doesn't exist or is empty.
   *
   * *Can only be used if this is InfinityContainer*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_infinity_container_filter View documentation}
   *
   * @param index - The index to get.
   */
  get_infinity_container_filter(index: uint): InfinityInventoryFilter | undefined
  /**
   * Sets the filter for this infinity container at the given index.
   *
   * *Can only be used if this is InfinityContainer*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.set_infinity_container_filter View documentation}
   *
   * @param index - The index to set.
   * @param filter - The new filter or `nil` to clear the filter.
   */
  set_infinity_container_filter(index: uint, filter: InfinityInventoryFilter | undefined): void
  /**
   * Gets the filter for this infinity pipe or `nil` if the filter is empty.
   *
   * *Can only be used if this is InfinityPipe*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_infinity_pipe_filter View documentation}
   */
  get_infinity_pipe_filter(): InfinityPipeFilter | undefined
  /**
   * Sets the filter for this infinity pipe.
   *
   * *Can only be used if this is InfinityPipe*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.set_infinity_pipe_filter View documentation}
   *
   * @param filter - The new filter or `nil` to clear the filter.
   */
  set_infinity_pipe_filter(filter: InfinityPipeFilter | undefined): void
  /**
   * Gets the heat setting for this heat interface.
   *
   * *Can only be used if this is HeatInterface*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_heat_setting View documentation}
   */
  get_heat_setting(): HeatSetting
  /**
   * Sets the heat setting for this heat interface.
   *
   * *Can only be used if this is HeatInterface*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.set_heat_setting View documentation}
   *
   * @param filter - The new setting.
   */
  set_heat_setting(filter: HeatSetting): void
  /**
   * Gets the control behavior of the entity (if any).
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_control_behavior View documentation}
   *
   * @returns The control behavior or nil.
   */
  get_control_behavior(): LuaControlBehavior | undefined
  /**
   * Gets (and or creates if needed) the control behavior of the entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_or_create_control_behavior View documentation}
   *
   * @returns The control behavior or nil.
   */
  get_or_create_control_behavior(): LuaControlBehavior | undefined
  /**
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_circuit_network View documentation}
   *
   * @param wire - Wire color of the network connected to this entity.
   * @param circuit_connector - The connector to get circuit network for. Must be specified for entities with more
   *   than one circuit network connector.
   * @returns The circuit network or nil.
   */
  get_circuit_network(
    wire: defines.wire_type,
    circuit_connector?: defines.circuit_connector_id
  ): LuaCircuitNetwork | undefined
  /**
   * Read a single signal from the combined circuit networks.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_merged_signal View documentation}
   *
   * @param signal - The signal to read.
   * @param circuit_connector - The connector to get signals for. Must be specified for entities with more than one
   *   circuit network connector.
   * @returns The current value of the signal.
   */
  get_merged_signal(signal: SignalID, circuit_connector?: defines.circuit_connector_id): int
  /**
   * The merged circuit network signals or `nil` if there are no signals.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_merged_signals View documentation}
   *
   * @param circuit_connector - The connector to get signals for. Must be specified for entities with more than one
   *   circuit network connector.
   * @returns The sum of signals on both the red and green networks, or nil if it doesn't have a circuit connector.
   */
  get_merged_signals(circuit_connector?: defines.circuit_connector_id): Signal[] | undefined
  /**
   * Whether this entity supports a backer name.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.supports_backer_name View documentation}
   */
  supports_backer_name(): boolean
  /**
   * Copies settings from the given entity onto this entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.copy_settings View documentation}
   *
   * @param entity
   * @param by_player - If provided, the copying is done 'as' this player and
   *   {@link OnEntitySettingsPastedEvent on_entity_settings_pasted} is triggered.
   * @returns Any items removed from this entity as a result of copying the settings.
   */
  copy_settings(entity: LuaEntity, by_player?: PlayerIdentification): Record<string, uint>
  /**
   * Gets all the `LuaLogisticPoint`s that this entity owns. Optionally returns only the point specified by the index parameter.
   *
   * **Note**: When `index` is not given, this will be a single `LuaLogisticPoint` for most entities. For some (such
   * as the player character), it can be zero or more.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_logistic_point View documentation}
   *
   * @param index - If provided, only returns the `LuaLogisticPoint` specified by this index.
   */
  get_logistic_point(index?: defines.logistic_member_index): LuaLogisticPoint | LuaLogisticPoint[]
  /**
   * Plays a note with the given instrument and note.
   *
   * *Can only be used if this is ProgrammableSpeaker*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.play_note View documentation}
   *
   * @param instrument
   * @param note
   * @returns If the request is valid. The sound may or may not be played depending on polyphony settings.
   */
  play_note(instrument: uint, note: uint): boolean
  /**
   * Connects the rolling stock in the given direction.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.connect_rolling_stock View documentation}
   *
   * @param direction
   * @returns If any connection was made
   */
  connect_rolling_stock(direction: defines.rail_direction): boolean
  /**
   * Tries to disconnect this rolling stock in the given direction.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.disconnect_rolling_stock View documentation}
   *
   * @param direction
   * @returns If anything was disconnected
   */
  disconnect_rolling_stock(direction: defines.rail_direction): boolean
  /**
   * Reconnect loader, beacon, cliff and mining drill connections to entities that might have been teleported out or
   * in by the script. The game doesn't do this automatically as we don't want to loose performance by checking this
   * in normal games.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.update_connections View documentation}
   */
  update_connections(): void
  /**
   * Current recipe being assembled by this machine or `nil` if no recipe is set.
   *
   * *Can only be used if this is CraftingMachine*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_recipe View documentation}
   */
  get_recipe(): LuaRecipe | undefined
  /**
   * Sets the current recipe in this assembly machine.
   *
   * *Can only be used if this is AssemblingMachine*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.set_recipe View documentation}
   *
   * @param recipe - The new recipe or `nil` to clear the recipe.
   * @returns Any items removed from this entity as a result of setting the recipe.
   */
  set_recipe(recipe: string | LuaRecipe | undefined): Record<string, uint>
  /**
   * Rotates this entity as if the player rotated it.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.rotate View documentation}
   *
   * @returns Whether the rotation was successful.
   */
  rotate(params?: {
    /** If `true`, rotate the entity in the counter-clockwise direction. */
    readonly reverse?: boolean
    readonly by_player?: PlayerIdentification
    /** If the player is not given should extra items be spilled or returned as a second return value from this. */
    readonly spill_items?: boolean
    /** When true, each spilled item will be flagged with the {@link LuaEntity.to_be_looted LuaEntity::to_be_looted} flag. */
    readonly enable_looted?: boolean
    /** When provided the spilled items will be marked for deconstruction by this force. */
    readonly force?: LuaForce | string
  }): boolean
  /**
   * Gets the driver of this vehicle if any.
   *
   * **Note**: May be `nil` if the vehicle contains no driver. To check if there's a passenger see
   * {@link LuaEntity.get_passenger LuaEntity::get_passenger}.
   *
   * *Can only be used if this is Vehicle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_driver View documentation}
   */
  get_driver(): LuaEntity | LuaPlayer | undefined
  /**
   * Sets the driver of this vehicle.
   *
   * **Note**: This differs over {@link LuaEntity.set_passenger LuaEntity::set_passenger} in that the passenger can't
   * drive the vehicle.
   *
   * *Can only be used if this is Vehicle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.set_driver View documentation}
   *
   * @param driver - The new driver or `nil` to eject the current driver if any.
   */
  set_driver(driver: LuaEntity | PlayerIdentification | undefined): void
  /**
   * Gets the passenger of this car or spidertron if any.
   *
   * **Note**: May be `nil` if the vehicle contains no passenger. To check if there's a driver see
   * {@link LuaEntity.get_driver LuaEntity::get_driver}.
   *
   * **Note**: This differs over {@link LuaEntity.get_driver LuaEntity::get_driver} in that the passenger can't drive the car.
   *
   * *Can only be used if this is Vehicle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_passenger View documentation}
   */
  get_passenger(): LuaEntity | LuaPlayer | undefined
  /**
   * Sets the passenger of this car or spidertron.
   *
   * **Note**: This differs over {@link LuaEntity.get_driver LuaEntity::get_driver} in that the passenger can't drive the car.
   *
   * *Can only be used if this is Vehicle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.set_passenger View documentation}
   *
   * @param passenger
   */
  set_passenger(passenger: LuaEntity | PlayerIdentification): void
  /**
   * Returns true if this entity is connected to an electric network.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.is_connected_to_electric_network View documentation}
   */
  is_connected_to_electric_network(): boolean
  /**
   * The trains scheduled to stop at this train stop.
   *
   * *Can only be used if this is TrainStop*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_train_stop_trains View documentation}
   */
  get_train_stop_trains(): LuaTrain[]
  /**
   * The train currently stopped at this train stop or `nil` if none.
   *
   * *Can only be used if this is TrainStop*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_stopped_train View documentation}
   */
  get_stopped_train(): LuaTrain | undefined
  /**
   * Clones this entity.
   *
   * **Note**: {@link defines.events.on_entity_cloned} is raised.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.clone View documentation}
   *
   * @returns The cloned entity or `nil` if this entity can't be cloned/can't be cloned to the given location.
   */
  clone(params: {
    /** The destination position */
    readonly position: MapPosition
    /** The destination surface */
    readonly surface?: LuaSurface
    readonly force?: ForceIdentification
    /** If false, the building effect smoke will not be shown around the new entity. */
    readonly create_build_effect_smoke?: boolean
  }): LuaEntity | undefined
  /**
   * Get the amount of all or some fluid in this entity.
   *
   * **Note**: If information about fluid temperatures is required, {@link LuaEntity.fluidbox LuaEntity::fluidbox}
   * should be used instead.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_fluid_count View documentation}
   *
   * @param fluid - Prototype name of the fluid to count. If not specified, count all fluids.
   */
  get_fluid_count(fluid?: string): double
  /**
   * Get amounts of all fluids in this entity.
   *
   * **Note**: If information about fluid temperatures is required, {@link LuaEntity.fluidbox LuaEntity::fluidbox}
   * should be used instead.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_fluid_contents View documentation}
   *
   * @returns The amounts, indexed by fluid names.
   */
  get_fluid_contents(): Record<string, double>
  /**
   * Remove fluid from this entity.
   *
   * **Note**: If temperature is given only fluid matching that exact temperature is removed. If minimum and maximum
   * is given fluid within that range is removed.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.remove_fluid View documentation}
   *
   * @returns Amount of fluid actually removed.
   */
  remove_fluid(params: {
    /** Fluid prototype name. */
    readonly name: string
    /** Amount to remove */
    readonly amount: double
    readonly minimum_temperature?: double
    readonly maximum_temperature?: double
    readonly temperature?: double
  }): double
  /**
   * Insert fluid into this entity. Fluidbox is chosen automatically.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.insert_fluid View documentation}
   *
   * @param fluid - Fluid to insert.
   * @returns Amount of fluid actually inserted.
   */
  insert_fluid(fluid: Fluid): double
  /**
   * Remove all fluids from this entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.clear_fluid_inside View documentation}
   */
  clear_fluid_inside(): void
  /**
   * Get the source of this beam.
   *
   * *Can only be used if this is Beam*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_beam_source View documentation}
   */
  get_beam_source(): BeamTarget
  /**
   * Set the source of this beam.
   *
   * *Can only be used if this is Beam*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.set_beam_source View documentation}
   *
   * @param source
   */
  set_beam_source(source: LuaEntity | Position): void
  /**
   * Get the target of this beam.
   *
   * *Can only be used if this is Beam*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_beam_target View documentation}
   */
  get_beam_target(): BeamTarget
  /**
   * Set the target of this beam.
   *
   * *Can only be used if this is Beam*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.set_beam_target View documentation}
   *
   * @param target
   */
  set_beam_target(target: LuaEntity | Position): void
  /**
   * The radius of this entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_radius View documentation}
   */
  get_radius(): double
  /**
   * The health ratio of this entity between 1 and 0 (for full health and no health respectively).
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_health_ratio View documentation}
   */
  get_health_ratio(): float
  /**
   * Creates the same smoke that is created when you place a building by hand. You can play the building sound to go
   * with it by using {@link LuaSurface.play_sound LuaSurface::play_sound}, eg:
   * entity.surface.play_sound{path="entity-build/"..entity.prototype.name, position=entity.position}
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.create_build_effect_smoke View documentation}
   */
  create_build_effect_smoke(): void
  /**
   * Release the unit from the spawner which spawned it. This allows the spawner to continue spawning additional units.
   *
   * *Can only be used if this is Unit*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.release_from_spawner View documentation}
   */
  release_from_spawner(): void
  /**
   * Toggle this entity's equipment movement bonus. Does nothing if the entity does not have an equipment grid.
   *
   * **Note**: This property can also be read and written on the equipment grid of this entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.toggle_equipment_movement_bonus View documentation}
   */
  toggle_equipment_movement_bonus(): void
  /**
   * If this character can shoot the given entity or position.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.can_shoot View documentation}
   *
   * @param target
   * @param position
   */
  can_shoot(target: LuaEntity, position: MapPosition): boolean
  /**
   * Only works if the entity is a speech-bubble, with an "effect" defined in its wrapper_flow_style. Starts animating
   * the opacity of the speech bubble towards zero, and destroys the entity when it hits zero.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.start_fading_out View documentation}
   */
  start_fading_out(): void
  /**
   * Returns the new entity prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_upgrade_target View documentation}
   *
   * @returns Nil if this entity is not marked for upgrade.
   */
  get_upgrade_target(): LuaEntityPrototype | undefined
  /**
   * Returns the new entity direction after upgrading.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_upgrade_direction View documentation}
   *
   * @returns Nil if this entity is not marked for upgrade.
   */
  get_upgrade_direction(): defines.direction | undefined
  /**
   * Returns the amount of damage to be taken by this entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_damage_to_be_taken View documentation}
   */
  get_damage_to_be_taken(): float
  /**
   * Depletes and destroys this resource entity.
   *
   * *Can only be used if this is ResourceEntity*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.deplete View documentation}
   */
  deplete(): void
  /**
   * Mines this entity.
   *
   * **Note**: 'standard' operation is to keep calling mine() with an inventory until all items are transferred and
   * the items dealt with.
   *
   * **Note**: The result of mining the entity (the item(s) it produces when mined) will be dropped on the ground if
   * they don't fit into the provided inventory.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.mine View documentation}
   *
   * @returns Whether mining succeeded.
   */
  mine(params?: {
    /**
     * If provided the item(s) will be transferred into this inventory. If provided, this must be an inventory
     * created with {@link LuaGameScript.create_inventory LuaGameScript::create_inventory} or be a basic inventory
     * owned by some entity.
     */
    readonly inventory?: LuaInventory
    /**
     * If true, when the item(s) don't fit into the given inventory the entity is force mined. If false, the mining
     * operation fails when there isn't enough room to transfer all of the items into the inventory. Defaults to
     * false. This is ignored and acts as 'true' if no inventory is provided.
     */
    readonly force?: boolean
    /** If true, {@link ScriptRaisedDestroyEvent script_raised_destroy} will be raised. Defaults to true. */
    readonly raise_destroyed?: boolean
    /**
     * If true, the minable state of the entity is ignored. Defaults to false. If false, an entity that isn't
     * minable (set as not-minable in the prototype or isn't minable for other reasons) will fail to be mined.
     */
    readonly ignore_minable?: boolean
  }): boolean
  /**
   * Triggers spawn_decoration actions defined in the entity prototype or does nothing if entity is not "turret" or
   * "unit-spawner".
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.spawn_decorations View documentation}
   */
  spawn_decorations(): void
  /**
   * Can wires reach between these entities.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.can_wires_reach View documentation}
   *
   * @param entity
   */
  can_wires_reach(entity: LuaEntity): boolean
  /**
   * Gets rolling stock connected to the given end of this stock
   *
   * **Note**: This will also return {@link defines.rail_direction} of other rolling stock that is connected back to
   * this rolling stock
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.get_connected_rolling_stock View documentation}
   *
   * @param direction
   * @returns One of connected rolling stocks
   */
  get_connected_rolling_stock(direction: defines.rail_direction): LuaEntity
  /**
   * Is this entity or tile ghost or item request proxy registered for construction? If false, it means a construction
   * robot has been dispatched to build the entity, or it is not an entity that can be constructed.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.is_registered_for_construction View documentation}
   */
  is_registered_for_construction(): boolean
  /**
   * Is this entity registered for deconstruction with this force? If false, it means a construction robot has been
   * dispatched to deconstruct it, or it is not marked for deconstruction. This is worst-case O(N) complexity where N
   * is the current number of things in the deconstruct queue.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.is_registered_for_deconstruction View documentation}
   *
   * @param force - The force construction manager to check.
   */
  is_registered_for_deconstruction(force: ForceIdentification): boolean
  /**
   * Is this entity registered for upgrade? If false, it means a construction robot has been dispatched to upgrade it,
   * or it is not marked for upgrade. This is worst-case O(N) complexity where N is the current number of things in
   * the upgrade queue.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.is_registered_for_upgrade View documentation}
   */
  is_registered_for_upgrade(): boolean
  /**
   * Is this entity registered for repair? If false, it means a construction robot has been dispatched to upgrade it,
   * or it is not damaged. This is worst-case O(N) complexity where N is the current number of things in the repair queue.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.is_registered_for_repair View documentation}
   */
  is_registered_for_repair(): boolean
  /**
   * Adds the given position to this spidertron's autopilot's queue of destinations.
   *
   * *Can only be used if this is SpiderVehicle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.add_autopilot_destination View documentation}
   *
   * @param position - The position the spidertron should move to.
   */
  add_autopilot_destination(position: MapPosition): void
  /**
   * Connects current linked belt with another one.
   *
   * Neighbours have to be of different type. If given linked belt is connected to something else it will be
   * disconnected first. If provided neighbour is connected to something else it will also be disconnected first.
   * Automatically updates neighbour to be connected back to this one.
   *
   * **Note**: Can also be used on entity ghost if it contains linked-belt
   *
   * *Can only be used if this is LinkedBelt*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.connect_linked_belts View documentation}
   *
   * @param neighbour - Another linked belt or entity ghost containing linked belt to connect or nil to disconnect
   */
  connect_linked_belts(neighbour: LuaEntity | undefined): void
  /**
   * Disconnects linked belt from its neighbour.
   *
   * **Note**: Can also be used on entity ghost if it contains linked-belt
   *
   * *Can only be used if this is LinkedBelt*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.disconnect_linked_belts View documentation}
   */
  disconnect_linked_belts(): void
  /**
   * Name of the entity prototype. E.g. "inserter" or "filter-inserter".
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.name View documentation}
   */
  readonly name: string
  /**
   * Name of the entity or tile contained in this ghost
   *
   * *Can only be used if this is Ghost*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.ghost_name View documentation}
   */
  readonly ghost_name: string
  /**
   * Localised name of the entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.localised_name View documentation}
   */
  readonly localised_name: LocalisedString
  readonly localised_description: LocalisedString
  /**
   * Localised name of the entity or tile contained in this ghost.
   *
   * *Can only be used if this is Ghost*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.ghost_localised_name View documentation}
   */
  readonly ghost_localised_name: LocalisedString
  /**
   * *Can only be used if this is Ghost*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.ghost_localised_description View documentation}
   */
  readonly ghost_localised_description: LocalisedString
  /**
   * The entity prototype type of this entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.type View documentation}
   */
  readonly type: string
  /**
   * The prototype type of the entity or tile contained in this ghost.
   *
   * *Can only be used if this is Ghost*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.ghost_type View documentation}
   */
  readonly ghost_type: string
  /**
   * Deactivating an entity will stop all its operations (car will stop moving, inserters will stop working, fish will
   * stop moving etc).
   *
   * **Note**: Entities that are not active naturally can't be set to be active (setting it to be active will do nothing)
   *
   * **Note**: Ghosts, simple smoke, and corpses can't be modified at this time.
   *
   * **Note**: It is even possible to set the character to not be active, so he can't move and perform most of the tasks.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.active View documentation}
   */
  active: boolean
  /**
   * When the entity is not destructible it can't be damaged.
   *
   * **Note**: An indestructible entity can still be mined.
   *
   * **Note**: Entities that are indestructible naturally (they have no health, like smoke, resource etc) can't be set
   * to be destructible.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.destructible View documentation}
   */
  destructible: boolean
  /**
   * **Note**: Not minable entities can still be destroyed.
   *
   * **Note**: Entities that are not minable naturally (like smoke, character, enemy units etc) can't be set to minable.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.minable View documentation}
   */
  minable: boolean
  /**
   * When entity is not to be rotatable (inserter, transport belt etc), it can't be rotated by player using the R key.
   *
   * **Note**: Entities that are not rotatable naturally (like chest or furnace) can't be set to be rotatable.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.rotatable View documentation}
   */
  rotatable: boolean
  /**
   * Player can't open gui of this entity and he can't quick insert/input stuff in to the entity when it is not operable.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.operable View documentation}
   */
  operable: boolean
  /**
   * The current health of the entity, or `nil` if it doesn't have health. Health is automatically clamped to be
   * between `0` and max health (inclusive). Entities with a health of `0` can not be attacked.
   *
   * **Note**: To get the maximum possible health of this entity, see
   * {@link LuaEntityPrototype.max_health LuaEntityPrototype::max_health} on its prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.health View documentation}
   */
  health: float | undefined
  /**
   * The current direction this entity is facing.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.direction View documentation}
   */
  direction: defines.direction
  /**
   * Whether the entity has direction. When it is false for this entity, it will always return north direction when asked for.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.supports_direction View documentation}
   */
  readonly supports_direction: boolean
  /**
   * The smooth orientation of this entity, if it supports orientation.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.orientation View documentation}
   */
  orientation: RealOrientation
  /**
   * The orientation of this cliff.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.cliff_orientation View documentation}
   */
  readonly cliff_orientation: CliffOrientation
  /**
   * The relative orientation of the vehicle turret, artillery turret, artillery wagon or `nil` if this entity isn't a
   * vehicle with a vehicle turret or artillery turret/wagon.
   *
   * **Note**: Writing does nothing if the vehicle doesn't have a turret.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.relative_turret_orientation View documentation}
   */
  relative_turret_orientation: RealOrientation | undefined
  /**
   * The torso orientation of this spider vehicle.
   *
   * *Can only be used if this is SpiderVehicle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.torso_orientation View documentation}
   */
  torso_orientation: RealOrientation
  /**
   * Count of resource units contained.
   *
   * *Can only be used if this is ResourceEntity*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.amount View documentation}
   */
  amount: uint
  /**
   * Count of initial resource units contained.
   *
   * **Note**: If this is not an infinite resource reading will give `nil` and writing will give an error.
   *
   * *Can only be used if this is ResourceEntity*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.initial_amount View documentation}
   */
  initial_amount: uint | undefined
  /**
   * Multiplies the acceleration the vehicle can create for one unit of energy. By default is `1`.
   *
   * *Can only be used if this is Car*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.effectivity_modifier View documentation}
   */
  effectivity_modifier: float
  /**
   * Multiplies the energy consumption.
   *
   * *Can only be used if this is Car*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.consumption_modifier View documentation}
   */
  consumption_modifier: float
  /**
   * Multiplies the car friction rate.
   *
   * *Can only be used if this is Car*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.friction_modifier View documentation}
   *
   * @example
   *   This will allow the car to go much faster
   *
   *   ```lua
   *   game.player.vehicle.friction_modifier = 0.5
   *   ```
   */
  friction_modifier: float
  /**
   * Whether the driver of this car or spidertron is the gunner, if false, the passenger is the gunner.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.driver_is_gunner View documentation}
   */
  driver_is_gunner: boolean
  /**
   * Read when this spidertron auto-targets enemies
   *
   * *Can only be used if this is SpiderVehicle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.vehicle_automatic_targeting_parameters View documentation}
   */
  vehicle_automatic_targeting_parameters: VehicleAutomaticTargetingParameters
  /**
   * The current speed of this car in tiles per tick, rolling stock, projectile or spider vehicle, or current max
   * speed of the unit. Only the speed of units, cars, and projectiles are writable.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.speed View documentation}
   */
  speed: float
  /**
   * The current speed of this unit in tiles per tick, taking into account any walking speed modifier given by the
   * tile the unit is standing on.
   *
   * *Can only be used if this is Unit*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.effective_speed View documentation}
   */
  readonly effective_speed: float
  /**
   * *Can only be used if this is ItemEntity*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.stack View documentation}
   */
  readonly stack: LuaItemStack
  /**
   * The entity prototype of this entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.prototype View documentation}
   */
  readonly prototype: LuaEntityPrototype
  /**
   * The prototype of the entity or tile contained in this ghost.
   *
   * *Can only be used if this is Ghost*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.ghost_prototype View documentation}
   */
  readonly ghost_prototype: LuaEntityPrototype | LuaTilePrototype
  /**
   * Position where the entity puts its stuff.
   *
   * **Note**: Meaningful only for entities that put stuff somewhere, such as mining drills or inserters. Mining
   * drills can't have their drop position changed; inserters must have `allow_custom_vectors` set to true on their
   * prototype to allow changing the drop position.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.drop_position View documentation}
   */
  drop_position: Position
  /**
   * Where the inserter will pick up items from.
   *
   * **Note**: Inserters must have `allow_custom_vectors` set to true on their prototype to allow changing the pickup position.
   *
   * *Can only be used if this is Inserter*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.pickup_position View documentation}
   */
  pickup_position: Position
  /**
   * The entity this entity is putting its items to, or `nil` if there is no such entity. If there are multiple
   * possible entities at the drop-off point, writing to this attribute allows a mod to choose which one to drop off
   * items to. The entity needs to collide with the tile box under the drop-off position.
   *
   * **Note**: Meaningful only for entities that put items somewhere, such as mining drills or inserters. Returns
   * `nil` for any other entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.drop_target View documentation}
   */
  drop_target: LuaEntity | undefined
  /**
   * The entity this inserter will attempt to pick up items from, or `nil` if there is no such entity. If there are
   * multiple possible entities at the pick-up point, writing to this attribute allows a mod to choose which one to
   * pick up items from. The entity needs to collide with the tile box under the pick-up position.
   *
   * *Can only be used if this is Inserter*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.pickup_target View documentation}
   */
  pickup_target: LuaEntity | undefined
  /**
   * Index of the currently selected weapon slot of this character, car, or spidertron, or `nil` if the car/spidertron
   * doesn't have guns.
   *
   * *Can only be used if this is Character or Car*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.selected_gun_index View documentation}
   */
  selected_gun_index: uint | undefined
  /**
   * Energy stored in the entity (heat in furnace, energy stored in electrical devices etc.). always 0 for entities
   * that don't have the concept of energy stored inside.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.energy View documentation}
   *
   * @example
   *   ```lua
   *     game.player.print("Machine energy: " .. game.player.selected.energy .. "J")
   *     game.player.selected.energy = 3000
   *     ```
   */
  energy: double
  /**
   * The temperature of this entities heat energy source if this entity uses a heat energy source or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.temperature View documentation}
   */
  temperature: double | undefined
  /**
   * The previous recipe this furnace was using or nil if the furnace had no previous recipe.
   *
   * *Can only be used if this is Furnace*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.previous_recipe View documentation}
   */
  readonly previous_recipe: LuaRecipe | undefined
  /**
   * The item stack currently held in an inserter's hand.
   *
   * *Can only be used if this is Inserter*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.held_stack View documentation}
   */
  readonly held_stack: LuaItemStack
  /**
   * Current position of the inserter's "hand".
   *
   * *Can only be used if this is Inserter*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.held_stack_position View documentation}
   */
  readonly held_stack_position: PositionTable
  /**
   * The train this rolling stock belongs to or nil if not rolling stock.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.train View documentation}
   */
  readonly train: LuaTrain | undefined
  /**
   * - When called on an electric pole, this is a dictionary of all connections, indexed by the strings `"copper"`,
   *   `"red"`, and `"green"`.
   * - When called on a pipe-connectable entity, this is an array of entity arrays of all entities a given fluidbox is
   *   connected to.
   * - When called on an underground transport belt, this is the other end of the underground belt connection, or `nil` if none.
   * - When called on a wall-connectable entity or reactor, this is a dictionary of all connections indexed by the
   *   connection direction "north", "south", "east", and "west".
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.neighbours View documentation}
   */
  readonly neighbours: Record<string, LuaEntity[]> | LuaEntity[][] | LuaEntity | undefined
  /**
   * The belt connectable neighbours of this belt connectable entity. Only entities that input to or are outputs of
   * this entity. Does not contain the other end of an underground belt, see
   * {@link LuaEntity.neighbours LuaEntity::neighbours} for that. This is a dictionary with `"inputs"`, `"outputs"`
   * entries that are arrays of transport belt connectable entities, or empty tables if no entities.
   *
   * *Can only be used if this is TransportBeltConnectable*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.belt_neighbours View documentation}
   */
  readonly belt_neighbours: Record<string, LuaEntity[]>
  /**
   * Fluidboxes of this entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.fluidbox View documentation}
   */
  fluidbox: LuaFluidBox
  /**
   * The backer name assigned to this entity, or `nil` if this entity doesn't support backer names. Entities that
   * support backer names are labs, locomotives, radars, roboports, and train stops.
   *
   * **Note**: While train stops get the name of a backer when placed down, players can rename them if they want to.
   * In this case, `backer_name` returns the player-given name of the entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.backer_name View documentation}
   */
  backer_name: string | undefined
  /**
   * The label of this entity if it has one or `nil`. Changing the value will trigger on_entity_renamed event
   *
   * **Note**: only usable on entities that have labels (currently only spider-vehicles).
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.entity_label View documentation}
   */
  entity_label: string | undefined
  /**
   * The ticks left before a ghost, combat robot, highlight box or smoke with trigger is destroyed.
   *
   * - For ghosts set to uint32 max (4,294,967,295) to never expire.
   * - For ghosts Cannot be set higher than {@link LuaForce.ghost_time_to_live LuaForce::ghost_time_to_live} of the entity's force.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.time_to_live View documentation}
   */
  time_to_live: uint
  /**
   * The character, rolling stock, train stop, car, spider-vehicle, flying text, corpse or simple-entity-with-owner
   * color. Returns `nil` if this entity doesn't use custom colors.
   *
   * **Note**: Car color is overridden by the color of the current driver/passenger, if there is one.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.color View documentation}
   */
  color: Color | undefined
  /**
   * The text of this flying-text entity.
   *
   * *Can only be used if this is FlyingText*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.text View documentation}
   */
  text: LocalisedString
  /**
   * The state of this rail signal.
   *
   * *Can only be used if this is RailSignal or RailChainSignal*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.signal_state View documentation}
   */
  readonly signal_state: defines.signal_state
  /**
   * The state of this chain signal.
   *
   * *Can only be used if this is RailChainSignal*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.chain_signal_state View documentation}
   */
  readonly chain_signal_state: defines.chain_signal_state
  /**
   * Will this entity be picked up automatically when the player walks over it?
   *
   * *Can only be used if this is ItemEntity*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.to_be_looted View documentation}
   */
  to_be_looted: boolean
  /**
   * The current crafting speed, including speed bonuses from modules and beacons.
   *
   * *Can only be used if this is CraftingMachine*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.crafting_speed View documentation}
   */
  readonly crafting_speed: double
  /**
   * The current crafting progress, as a number in range [0, 1].
   *
   * *Can only be used if this is CraftingMachine*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.crafting_progress View documentation}
   */
  crafting_progress: float
  /**
   * The current productivity bonus progress, as a number in range [0, 1].
   *
   * *Can only be used if this is CraftingMachine*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.bonus_progress View documentation}
   */
  bonus_progress: double
  /**
   * The productivity bonus of this entity.
   *
   * **Note**: This includes force based bonuses as well as beacon/module bonuses.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.productivity_bonus View documentation}
   */
  readonly productivity_bonus: double
  /**
   * The pollution bonus of this entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.pollution_bonus View documentation}
   */
  readonly pollution_bonus: double
  /**
   * The speed bonus of this entity.
   *
   * **Note**: This includes force based bonuses as well as beacon/module bonuses.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.speed_bonus View documentation}
   */
  readonly speed_bonus: double
  /**
   * The consumption bonus of this entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.consumption_bonus View documentation}
   */
  readonly consumption_bonus: double
  /**
   * `"input"` or `"output"`, depending on whether this underground belt goes down or up.
   *
   * *Can only be used if this is TransportBeltToGround*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.belt_to_ground_type View documentation}
   */
  readonly belt_to_ground_type: "input" | "output"
  /**
   * `"input"` or `"output"`, depending on whether this loader puts to or gets from a container.
   *
   * *Can only be used if this is Loader*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.loader_type View documentation}
   */
  loader_type: "input" | "output"
  /**
   * Number of rocket parts in the silo.
   *
   * *Can only be used if this is RocketSilo*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.rocket_parts View documentation}
   */
  rocket_parts: uint
  /**
   * The logistic network this entity is a part of.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.logistic_network View documentation}
   */
  logistic_network: LuaLogisticNetwork
  /**
   * The logistic cell this entity is a part of. Will be `nil` if this entity is not a part of any logistic cell.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.logistic_cell View documentation}
   */
  readonly logistic_cell: LuaLogisticCell | undefined
  /**
   * Items this ghost will request when revived or items this item request proxy is requesting. Result is a dictionary
   * mapping each item prototype name to the required count.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.item_requests View documentation}
   */
  item_requests: Record<string, uint>
  /**
   * The player connected to this character or `nil` if none.
   *
   * *Can only be used if this is Character*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.player View documentation}
   */
  readonly player: LuaPlayer | undefined
  /**
   * The unit group this unit is a member of, or `nil` if none.
   *
   * *Can only be used if this is Unit*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.unit_group View documentation}
   */
  readonly unit_group: LuaUnitGroup | undefined
  /**
   * The damage dealt by this turret, artillery turret, or artillery wagon.
   *
   * *Can only be used if this is Turret*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.damage_dealt View documentation}
   */
  damage_dealt: double
  /**
   * The number of units killed by this turret, artillery turret, or artillery wagon.
   *
   * *Can only be used if this is Turret*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.kills View documentation}
   */
  kills: uint
  /**
   * The last player that changed any setting on this entity. This includes building the entity, changing its color,
   * or configuring its circuit network. Can be `nil` if the last user is not part of the save anymore. Mods can
   * overwrite it if desired.
   *
   * *Can only be used if this is EntityWithOwner*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.last_user View documentation}
   */
  last_user: LuaPlayer | undefined
  /**
   * The buffer size for the electric energy source or nil if the entity doesn't have an electric energy source.
   *
   * **Note**: Write access is limited to the ElectricEnergyInterface type
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.electric_buffer_size View documentation}
   */
  electric_buffer_size: double | undefined
  /**
   * The input flow limit for the electric energy source or nil if the entity doesn't have an electric energy source.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.electric_input_flow_limit View documentation}
   */
  readonly electric_input_flow_limit: double | undefined
  /**
   * The output flow limit for the electric energy source or nil if the entity doesn't have an electric energy source.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.electric_output_flow_limit View documentation}
   */
  readonly electric_output_flow_limit: double | undefined
  /**
   * The electric drain for the electric energy source or nil if the entity doesn't have an electric energy source.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.electric_drain View documentation}
   */
  readonly electric_drain: double | undefined
  /**
   * The emissions for the electric energy source or nil if the entity doesn't have an electric energy source.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.electric_emissions View documentation}
   */
  readonly electric_emissions: double | undefined
  /**
   * The unit number or nil if the entity doesn't have one. This is universally unique for every entity that has one,
   * for the lifetime of a whole game.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.unit_number View documentation}
   */
  readonly unit_number: uint | undefined
  /**
   * The unit number of the entity contained in this ghost or nil if the entity doesn't have one.
   *
   * *Can only be used if this is EntityGhost*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.ghost_unit_number View documentation}
   */
  readonly ghost_unit_number: uint | undefined
  /**
   * The mining progress for this mining drill or `nil` if this isn't a mining drill. Is a number in range [0,
   * mining_target.prototype.mineable_properties.mining_time]
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.mining_progress View documentation}
   */
  mining_progress: double | undefined
  /**
   * The bonus mining progress for this mining drill or `nil` if this isn't a mining drill. Read yields a number in
   * range [0, mining_target.prototype.mineable_properties.mining_time]
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.bonus_mining_progress View documentation}
   */
  bonus_mining_progress: double | undefined
  /**
   * The power production specific to the ElectricEnergyInterface entity type.
   *
   * *Can only be used if this is ElectricEnergyInterface*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.power_production View documentation}
   */
  power_production: double
  /**
   * The power usage specific to the ElectricEnergyInterface entity type.
   *
   * *Can only be used if this is ElectricEnergyInterface*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.power_usage View documentation}
   */
  power_usage: double
  /**
   * {@link LuaEntityPrototype.collision_box LuaEntityPrototype::collision_box} around entity's given position and
   * respecting the current entity orientation.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.bounding_box View documentation}
   */
  readonly bounding_box: BoundingBoxTable
  /**
   * The secondary bounding box of this entity or `nil` if it doesn't have one.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.secondary_bounding_box View documentation}
   */
  readonly secondary_bounding_box: BoundingBoxTable | undefined
  /**
   * {@link LuaEntityPrototype.selection_box LuaEntityPrototype::selection_box} around entity's given position and
   * respecting the current entity orientation.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.selection_box View documentation}
   */
  readonly selection_box: BoundingBoxTable
  /**
   * The secondary selection box of this entity or `nil` if it doesn't have one.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.secondary_selection_box View documentation}
   */
  readonly secondary_selection_box: BoundingBoxTable | undefined
  /**
   * The mining target or `nil` if none
   *
   * *Can only be used if this is MiningDrill*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.mining_target View documentation}
   */
  readonly mining_target: LuaEntity | undefined
  /**
   * Entities that are directly connected to this entity via the circuit network.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.circuit_connected_entities View documentation}
   */
  readonly circuit_connected_entities: {
    /** Entities connected via the red wire. */
    readonly red: LuaEntity[]
    /** Entities connected via the green wire. */
    readonly green: LuaEntity[]
  }
  /**
   * The connection definition for entities that are directly connected to this entity via the circuit network.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.circuit_connection_definitions View documentation}
   */
  readonly circuit_connection_definitions: CircuitConnectionDefinition[]
  /**
   * The index of the configured request with the highest index for this entity. This means 0 if no requests are set
   * and e.g. 20 if the 20th request slot is configured.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.request_slot_count View documentation}
   */
  readonly request_slot_count: uint
  /**
   * The number of filter slots this inserter, loader, or logistic storage container has. 0 if not one of those entities.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.filter_slot_count View documentation}
   */
  readonly filter_slot_count: uint
  /**
   * The container entity this loader is pointing at/pulling from depending on the
   * {@link LuaEntity.loader_type LuaEntity::loader_type}.
   *
   * *Can only be used if this is Loader*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.loader_container View documentation}
   */
  readonly loader_container: LuaEntity
  /**
   * The equipment grid or `nil` if this entity doesn't have an equipment grid.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.grid View documentation}
   */
  readonly grid: LuaEquipmentGrid | undefined
  /**
   * The graphics variation for this entity or `nil` if this entity doesn't use graphics variations.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.graphics_variation View documentation}
   */
  graphics_variation: uint8 | undefined
  /**
   * Index of the tree color.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.tree_color_index View documentation}
   */
  tree_color_index: uint8
  /**
   * Maximum index of the tree colors.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.tree_color_index_max View documentation}
   */
  readonly tree_color_index_max: uint8
  /**
   * Index of the tree stage.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.tree_stage_index View documentation}
   */
  tree_stage_index: uint8
  /**
   * Maximum index of the tree stages.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.tree_stage_index_max View documentation}
   */
  readonly tree_stage_index_max: uint8
  /**
   * Index of the tree gray stage
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.tree_gray_stage_index View documentation}
   */
  tree_gray_stage_index: uint8
  /**
   * Maximum index of the tree gray stages.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.tree_gray_stage_index_max View documentation}
   */
  readonly tree_gray_stage_index_max: uint8
  /**
   * The burner energy source for this entity or `nil` if there isn't one.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.burner View documentation}
   */
  readonly burner: LuaBurner | undefined
  /**
   * The shooting target for this turret or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.shooting_target View documentation}
   */
  shooting_target: LuaEntity | undefined
  /**
   * The target entity for this item-request-proxy or `nil`
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.proxy_target View documentation}
   */
  readonly proxy_target: LuaEntity | undefined
  /**
   * The sticker entities attached to this entity or `nil` if none.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.stickers View documentation}
   */
  readonly stickers: LuaEntity[] | undefined
  /**
   * The entity this sticker is sticked to.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.sticked_to View documentation}
   */
  readonly sticked_to: LuaEntity
  /**
   * *Can only be used if this is ProgrammableSpeaker*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.parameters View documentation}
   */
  parameters: ProgrammableSpeakerParameters
  /**
   * *Can only be used if this is ProgrammableSpeaker*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.alert_parameters View documentation}
   */
  alert_parameters: ProgrammableSpeakerAlertParameters
  /**
   * The electric network statistics for this electric pole.
   *
   * *Can only be used if this is ElectricPole*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.electric_network_statistics View documentation}
   */
  readonly electric_network_statistics: LuaFlowStatistics
  /**
   * Sets the stack size limit on this inserter. If the stack size is > than the force stack size limit the value is ignored.
   *
   * **Note**: Set to 0 to reset.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.inserter_stack_size_override View documentation}
   */
  inserter_stack_size_override: uint
  /**
   * The number of products this machine finished crafting in its lifetime.
   *
   * *Can only be used if this is CraftingMachine*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.products_finished View documentation}
   */
  products_finished: uint
  /**
   * The spawner associated with this unit entity or `nil` if the unit has no associated spawner.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.spawner View documentation}
   */
  readonly spawner: LuaEntity | undefined
  /**
   * The units associated with this spawner entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.units View documentation}
   */
  readonly units: LuaEntity[]
  /**
   * The state of this power switch.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.power_switch_state View documentation}
   */
  power_switch_state: boolean
  /**
   * The effects being applied to this entity or `nil`. For beacons this is the effect the beacon is broadcasting.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.effects View documentation}
   */
  readonly effects: ModuleEffects | undefined
  /**
   * The filters for this infinity container.
   *
   * *Can only be used if this is InfinityContainer*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.infinity_container_filters View documentation}
   */
  infinity_container_filters: InfinityInventoryFilter[]
  /**
   * If items not included in this infinity container filters should be removed from the container.
   *
   * *Can only be used if this is InfinityContainer*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.remove_unfiltered_items View documentation}
   */
  remove_unfiltered_items: boolean
  /**
   * The player index associated with this character corpse.
   *
   * **Note**: The index is not guaranteed to be valid so it should always be checked first if a player with that
   * index actually exists.
   *
   * *Can only be used if this is CharacterCorpse*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.character_corpse_player_index View documentation}
   */
  character_corpse_player_index: uint
  /**
   * The tick this character corpse died at.
   *
   * *Can only be used if this is CharacterCorpse*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.character_corpse_tick_of_death View documentation}
   */
  character_corpse_tick_of_death: uint
  /**
   * The reason this character corpse character died (if any).
   *
   * *Can only be used if this is CharacterCorpse*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.character_corpse_death_cause View documentation}
   */
  character_corpse_death_cause: LocalisedString
  /**
   * The player this character is associated with or `nil` if none. When the player logs off in multiplayer all of the
   * associated characters will be logged off with him.
   *
   * **Note**: A character associated with a player is not directly controlled by any player.
   *
   * **Note**: Set to `nil` to clear. The player will be automatically disassociated when a controller is set on the character.
   *
   * *Can only be used if this is Character*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.associated_player View documentation}
   */
  associated_player: LuaPlayer | undefined
  /**
   * The last tick this character entity was attacked.
   *
   * *Can only be used if this is Character*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.tick_of_last_attack View documentation}
   */
  tick_of_last_attack: uint
  /**
   * The last tick this character entity was damaged.
   *
   * *Can only be used if this is Character*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.tick_of_last_damage View documentation}
   */
  tick_of_last_damage: uint
  /**
   * The filter for this splitter or `nil` if no filter is set.
   *
   * *Can only be used if this is Splitter*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.splitter_filter View documentation}
   */
  splitter_filter: LuaItemPrototype | undefined
  /**
   * The filter mode for this filter inserter: "whitelist", "blacklist", or `nil` if this inserter doesn't use filters.
   *
   * *Can only be used if this is Inserter*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.inserter_filter_mode View documentation}
   */
  inserter_filter_mode: "whitelist" | "blacklist" | undefined
  /**
   * The input priority for this splitter : "left", "none", or "right".
   *
   * *Can only be used if this is Splitter*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.splitter_input_priority View documentation}
   */
  splitter_input_priority: "left" | "none" | "right"
  /**
   * The output priority for this splitter : "left", "none", or "right".
   *
   * *Can only be used if this is Splitter*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.splitter_output_priority View documentation}
   */
  splitter_output_priority: "left" | "none" | "right"
  /**
   * If this land mine is armed.
   *
   * *Can only be used if this is LandMine*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.armed View documentation}
   */
  readonly armed: boolean
  /**
   * When locked; the recipe in this assembling machine can't be changed by the player.
   *
   * *Can only be used if this is AssemblingMachine*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.recipe_locked View documentation}
   */
  recipe_locked: boolean
  /**
   * The rail entity this train stop is connected to or `nil` if there is none.
   *
   * *Can only be used if this is TrainStop*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.connected_rail View documentation}
   */
  readonly connected_rail: LuaEntity | undefined
  /**
   * Rail direction to which this train stop is binding. This returns a value even when no rails are present.
   *
   * *Can only be used if this is TrainStop*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.connected_rail_direction View documentation}
   */
  readonly connected_rail_direction: defines.rail_direction
  /**
   * The number of trains in this rail block for this rail entity.
   *
   * *Can only be used if this is Rail*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.trains_in_block View documentation}
   */
  readonly trains_in_block: uint
  /**
   * The timeout that's left on this landmine in ticks. It describes the time between the landmine being placed and it
   * being armed.
   *
   * *Can only be used if this is LandMine*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.timeout View documentation}
   */
  timeout: uint
  /**
   * The current total neighbour bonus of this reactor.
   *
   * *Can only be used if this is Reactor*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.neighbour_bonus View documentation}
   */
  readonly neighbour_bonus: double
  /**
   * The ai settings of this unit.
   *
   * *Can only be used if this is Unit*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.ai_settings View documentation}
   */
  readonly ai_settings: LuaAISettings
  /**
   * The hightlight box type of this highlight box entity.
   *
   * *Can only be used if this is HighlightBox*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.highlight_box_type View documentation}
   */
  highlight_box_type: string
  /**
   * The blink interval of this highlight box entity. 0 indicates no blink.
   *
   * *Can only be used if this is HighlightBox*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.highlight_box_blink_interval View documentation}
   */
  highlight_box_blink_interval: uint
  /**
   * The status of this entity or `nil` if no status.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.status View documentation}
   */
  readonly status: defines.entity_status | undefined
  /**
   * If equipment grid logistics are enabled while this vehicle is moving.
   *
   * *Can only be used if this is Vehicle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.enable_logistics_while_moving View documentation}
   */
  enable_logistics_while_moving: boolean
  /**
   * The player that this `simple-entity-with-owner`, `simple-entity-with-force`, `flying-text`, or `highlight-box` is
   * visible to. `nil` means it is rendered for every player.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.render_player View documentation}
   */
  render_player: LuaPlayer | undefined
  /**
   * The forces that this `simple-entity-with-owner`, `simple-entity-with-force`, or `flying-text` is visible to.
   * `nil` or an empty array means it is rendered for every force.
   *
   * **Note**: Reading will always give an array of {@link LuaForce}
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.render_to_forces View documentation}
   */
  render_to_forces: ForceIdentification[] | undefined
  /**
   * The rail target of this pump or `nil`.
   *
   * *Can only be used if this is Pump*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.pump_rail_target View documentation}
   */
  readonly pump_rail_target: LuaEntity | undefined
  /**
   * Returns true if this unit is moving.
   *
   * *Can only be used if this is Unit*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.moving View documentation}
   */
  readonly moving: boolean
  /**
   * Returns the id of the electric network that this entity is connected to or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.electric_network_id View documentation}
   */
  readonly electric_network_id: uint | undefined
  /**
   * Whether this character's personal roboports are allowed to dispatch robots.
   *
   * *Can only be used if this is Character*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.allow_dispatching_robots View documentation}
   */
  allow_dispatching_robots: boolean
  /**
   * Whether this rocket silo automatically launches the rocket when cargo is inserted.
   *
   * *Can only be used if this is RocketSilo*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.auto_launch View documentation}
   */
  auto_launch: boolean
  /**
   * How much energy this generator generated in the last tick.
   *
   * *Can only be used if this is Generator*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.energy_generated_last_tick View documentation}
   */
  readonly energy_generated_last_tick: double
  /**
   * The storage filter for this logistic storage container.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.storage_filter View documentation}
   */
  storage_filter: LuaItemPrototype
  /**
   * Whether this requester chest is set to also request from buffer chests.
   *
   * **Note**: Useable only on entities that have requester slots.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.request_from_buffers View documentation}
   */
  request_from_buffers: boolean
  /**
   * Whether this corpse will ever fade away.
   *
   * **Note**: Useable only on corpses.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.corpse_expires View documentation}
   */
  corpse_expires: boolean
  /**
   * If true, corpse won't be destroyed when entities are placed over it. If false, whether corpse will be removed or
   * not depends on value of CorpsePrototype::remove_on_entity_placement.
   *
   * **Note**: Useable only on corpses.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.corpse_immune_to_entity_placement View documentation}
   */
  corpse_immune_to_entity_placement: boolean
  /**
   * The tags associated with this entity ghost or `nil` if not an entity ghost.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.tags View documentation}
   */
  tags: Tags | undefined
  /**
   * The command given to this unit or `nil` is the unit has no command.
   *
   * *Can only be used if this is Unit*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.command View documentation}
   */
  readonly command: Command | undefined
  /**
   * The distraction command given to this unit or `nil` is the unit currently isn't distracted.
   *
   * *Can only be used if this is Unit*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.distraction_command View documentation}
   */
  readonly distraction_command: Command | undefined
  /**
   * The ticks until the next trigger effect of this smoke-with-trigger.
   *
   * *Can only be used if this is SmokeWithTrigger*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.time_to_next_effect View documentation}
   */
  time_to_next_effect: uint
  /**
   * Destination position of spidertron's autopilot. Returns `nil` if autopilot doesn't have destination set.
   *
   * *Can only be used if this is SpiderVehicle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.autopilot_destination View documentation}
   */
  autopilot_destination: MapPosition | undefined
  /**
   * The queued destination positions of spidertron's autopilot.
   *
   * *Can only be used if this is SpiderVehicle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.autopilot_destinations View documentation}
   */
  readonly autopilot_destinations: MapPosition[]
  /**
   * Amount of trains related to this particular train stop. Includes train stopped at this train stop (until it finds
   * a path to next target) and trains having this train stop as goal or waypoint. Writing nil will disable the limit
   * (will set a maximum possible value).
   *
   * **Note**: Train may be included multiple times when braking distance covers this train stop multiple times
   *
   * **Note**: Value may be read even when train stop has no control behavior
   *
   * *Can only be used if this is TrainStop*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.trains_count View documentation}
   */
  readonly trains_count: uint | undefined
  /**
   * Amount of trains above which no new trains will be sent to this train stop.
   *
   * **Note**: When a train stop has a control behavior with wire connected and set_trains_limit enabled, this value
   * will be overwritten by it
   *
   * *Can only be used if this is TrainStop*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.trains_limit View documentation}
   */
  trains_limit: uint
  /**
   * If this entity is EntityWithForce
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.is_entity_with_force View documentation}
   */
  readonly is_entity_with_force: boolean
  /**
   * If this entity is EntityWithOwner
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.is_entity_with_owner View documentation}
   */
  readonly is_entity_with_owner: boolean
  /**
   * If this entity is EntityWithHealth
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.is_entity_with_health View documentation}
   */
  readonly is_entity_with_health: boolean
  /**
   * The owner of this combat robot if any.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.combat_robot_owner View documentation}
   */
  combat_robot_owner: LuaEntity
  /**
   * The link ID this linked container is using.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.link_id View documentation}
   */
  link_id: uint
  /**
   * The follow target of this spidertron if any.
   *
   * *Can only be used if this is SpiderVehicle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.follow_target View documentation}
   */
  follow_target: LuaEntity
  /**
   * The follow offset of this spidertron if any. If it is not following an entity this will be nil. This is
   * randomized each time the follow entity is set.
   *
   * *Can only be used if this is SpiderVehicle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.follow_offset View documentation}
   */
  follow_offset: Position | undefined
  /**
   * Type of linked belt: it is either `"input"` or `"output"`. Changing type will also flip direction so the belt is
   * out of the same side
   *
   * **Note**: Can only be changed when linked belt is disconnected (has no neighbour set)
   *
   * **Note**: Can also be used on entity ghost if it contains linked-belt
   *
   * *Can only be used if this is LinkedBelt*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.linked_belt_type View documentation}
   */
  linked_belt_type: "input" | "output"
  /**
   * Neighbour to which this linked belt is connected to. Returns nil if not connected.
   *
   * **Note**: Can also be used on entity ghost if it contains linked-belt
   *
   * **Note**: May return entity ghost which contains linked belt to which connection is made
   *
   * *Can only be used if this is LinkedBelt*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntity.html#LuaEntity.linked_belt_neighbour View documentation}
   */
  readonly linked_belt_neighbour: LuaEntity | undefined
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaEntity"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Prototype of an entity.
 *
 * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html View documentation}
 *
 * @noSelf
 */
interface LuaEntityPrototype {
  /**
   * Test whether this entity prototype has a certain flag set.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.has_flag View documentation}
   *
   * @param flag - The flag to test. See {@link EntityPrototypeFlags} for a list of flags.
   * @returns `true` if this prototype has the given flag set.
   */
  has_flag(flag: string): boolean
  /**
   * Gets the base size of the given inventory on this entity or `nil` if the given inventory doesn't exist.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.get_inventory_size View documentation}
   *
   * @param index
   */
  get_inventory_size(index: defines.inventory): uint | undefined
  /**
   * Type of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.type View documentation}
   */
  readonly type: string
  /**
   * Name of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.name View documentation}
   */
  readonly name: string
  readonly localised_name: LocalisedString
  readonly localised_description: LocalisedString
  /**
   * Max health of this entity. Will be `0` if this is not an entity with health.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.max_health View documentation}
   */
  readonly max_health: float
  /**
   * Is this resource infinite? Will be `nil` when used on a non-resource.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.infinite_resource View documentation}
   */
  readonly infinite_resource: boolean | undefined
  /**
   * Minimum amount of this resource. Will be `nil` when used on a non-resource.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.minimum_resource_amount View documentation}
   */
  readonly minimum_resource_amount: uint | undefined
  /**
   * The normal amount for this resource. `nil` when not a resource.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.normal_resource_amount View documentation}
   */
  readonly normal_resource_amount: uint | undefined
  /**
   * Every time this infinite resource 'ticks' down it is reduced by this amount. `nil` when not a resource.
   * Meaningless if this isn't an infinite type resource.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.infinite_depletion_resource_amount View documentation}
   */
  readonly infinite_depletion_resource_amount: uint | undefined
  /**
   * Name of the category of this resource or `nil` when not a resource.
   *
   * **Note**: During data stage this property is named "category".
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.resource_category View documentation}
   */
  readonly resource_category: string | undefined
  /**
   * Whether this entity is minable and what can be obtained by mining it.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.mineable_properties View documentation}
   */
  readonly mineable_properties: {
    /** Is this entity mineable at all? */
    readonly minable: boolean
    /** Energy required to mine an entity. */
    readonly mining_time: double
    /**
     * Prototype name of the particle produced when mining this entity. Will only be present if this entity produces
     * any particle during mining.
     */
    readonly mining_particle?: string
    /** Products obtained by mining this entity. */
    readonly products?: Product[]
    /** The required fluid amount if any. */
    readonly fluid_amount?: double
    /** The prototype name of the required fluid if any. */
    readonly required_fluid?: string
    /** The mining trigger if any. */
    readonly mining_trigger?: TriggerItem[]
  }
  /**
   * Items that, when placed, will produce this entity. It is an array of items, or `nil` if no items place this
   * entity. Construction bots will always choose the first item in this list to build this entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.items_to_place_this View documentation}
   */
  readonly items_to_place_this: SimpleItemStack[] | undefined
  /**
   * The bounding box used for collision checking.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.collision_box View documentation}
   */
  readonly collision_box: BoundingBoxTable
  /**
   * The secondary bounding box used for collision checking, or `nil` if it doesn't have one. This is only used in
   * rails and rail remnants.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.secondary_collision_box View documentation}
   */
  readonly secondary_collision_box: BoundingBoxTable | undefined
  /**
   * The bounding box used for map generator collision checking.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.map_generator_bounding_box View documentation}
   */
  readonly map_generator_bounding_box: BoundingBoxTable
  /**
   * The bounding box used for drawing selection.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.selection_box View documentation}
   */
  readonly selection_box: BoundingBoxTable
  /**
   * The bounding box used for drawing the entity icon.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.drawing_box View documentation}
   */
  readonly drawing_box: BoundingBoxTable
  /**
   * The bounding box used to attach sticker type entities.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.sticker_box View documentation}
   */
  readonly sticker_box: BoundingBoxTable
  /**
   * The collision masks this entity uses
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.collision_mask View documentation}
   */
  readonly collision_mask: CollisionMask
  readonly collision_mask_with_flags: CollisionMaskWithFlags
  /**
   * The hardcoded default collision mask (with flags) for this entity prototype type.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.default_collision_mask_with_flags View documentation}
   */
  readonly default_collision_mask_with_flags: CollisionMaskWithFlags
  /**
   * Order string of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.order View documentation}
   */
  readonly order: string
  /**
   * Group of this entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.group View documentation}
   */
  readonly group: LuaGroup
  /**
   * Subgroup of this entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.subgroup View documentation}
   */
  readonly subgroup: LuaGroup
  /**
   * Amount this entity can heal per tick.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.healing_per_tick View documentation}
   */
  readonly healing_per_tick: float
  /**
   * Amount of pollution emissions per second this entity will create.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.emissions_per_second View documentation}
   */
  readonly emissions_per_second: double
  /**
   * Corpses used when this entity is destroyed. It is a dictionary indexed by the corpse's prototype name.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.corpses View documentation}
   */
  readonly corpses: Record<string, LuaEntityPrototype>
  /**
   * Is this entity selectable?
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.selectable_in_game View documentation}
   */
  readonly selectable_in_game: boolean
  /**
   * The selection priority of this entity - a value between 0 and 255
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.selection_priority View documentation}
   */
  readonly selection_priority: uint
  /**
   * The weight of this vehicle prototype or `nil` if not a vehicle prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.weight View documentation}
   */
  readonly weight: double | undefined
  /**
   * List of resistances towards each damage type. It is a dictionary indexed by damage type names (see
   * `data/base/prototypes/damage-type.lua`).
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.resistances View documentation}
   */
  readonly resistances: Record<string, Resistance>
  /**
   * The group of mutually fast-replaceable entities. Possibly `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.fast_replaceable_group View documentation}
   */
  readonly fast_replaceable_group: string | undefined
  /**
   * The next upgrade for this entity or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.next_upgrade View documentation}
   */
  readonly next_upgrade: LuaEntityPrototype | undefined
  /**
   * Loot that will be dropped when this entity is killed. `nil` if there is no loot.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.loot View documentation}
   */
  readonly loot: Loot[] | undefined
  /**
   * Repair-speed modifier for this entity. Actual repair speed will be `tool_repair_speed *
   * entity_repair_speed_modifier`. May be `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.repair_speed_modifier View documentation}
   */
  readonly repair_speed_modifier: uint | undefined
  /**
   * The range of this turret or `nil` if this isn't a turret related prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.turret_range View documentation}
   */
  readonly turret_range: uint | undefined
  /**
   * Autoplace specification for this entity prototype. `nil` if none.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.autoplace_specification View documentation}
   */
  readonly autoplace_specification: AutoplaceSpecification | undefined
  /**
   * The speed of this transport belt or `nil` if this isn't a transport belt related prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.belt_speed View documentation}
   */
  readonly belt_speed: double | undefined
  /**
   * The result units and spawn points with weight and evolution factor for a biter spawner entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.result_units View documentation}
   */
  readonly result_units: UnitSpawnDefinition[]
  /**
   * The attack result of this entity if the entity has one, else `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.attack_result View documentation}
   */
  readonly attack_result: TriggerItem[] | undefined
  /**
   * The final attack result for projectiles `nil` if not a projectile
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.final_attack_result View documentation}
   */
  readonly final_attack_result: TriggerItem[] | undefined
  /**
   * The attack parameters for this entity or `nil` if the entity doesn't use attack parameters.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.attack_parameters View documentation}
   */
  readonly attack_parameters: AttackParameters | undefined
  /**
   * The spawning cooldown for this enemy spawner prototype or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.spawn_cooldown View documentation}
   */
  readonly spawn_cooldown:
    | {
        readonly min: double
        readonly max: double
      }
    | undefined
  /**
   * The mining radius of this mining drill prototype or `nil` if this isn't a mining drill prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.mining_drill_radius View documentation}
   */
  readonly mining_drill_radius: double | undefined
  /**
   * The mining speed of this mining drill/character prototype or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.mining_speed View documentation}
   */
  readonly mining_speed: double | undefined
  /**
   * The logistic mode of this logistic container or `nil` if this isn't a logistic container prototype. One of
   * `"requester"`, `"active-provider"`, `"passive-provider"`, `"buffer"`, `"storage"`, `"none"`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.logistic_mode View documentation}
   */
  readonly logistic_mode:
    | "requester"
    | "active-provider"
    | "passive-provider"
    | "buffer"
    | "storage"
    | "none"
    | undefined
  /**
   * The max underground distance for underground belts and underground pipes or `nil` if this isn't one of those prototypes.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.max_underground_distance View documentation}
   */
  readonly max_underground_distance: uint8 | undefined
  /**
   * The flags for this entity prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.flags View documentation}
   */
  readonly flags: EntityPrototypeFlags
  /**
   * The remains left behind when this entity is mined.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.remains_when_mined View documentation}
   */
  readonly remains_when_mined: LuaEntityPrototype[]
  /**
   * Entities this entity can be pasted onto in addition to the normal allowed ones.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.additional_pastable_entities View documentation}
   */
  readonly additional_pastable_entities: LuaEntityPrototype[]
  /**
   * When false copy-paste is not allowed for this entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.allow_copy_paste View documentation}
   */
  readonly allow_copy_paste: boolean
  /**
   * The cursor size used when shooting at this entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.shooting_cursor_size View documentation}
   */
  readonly shooting_cursor_size: double
  /**
   * The smoke trigger run when this entity is built or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.created_smoke View documentation}
   */
  readonly created_smoke:
    | {
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
    | undefined
  /**
   * The trigger run when this entity is created or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.created_effect View documentation}
   */
  readonly created_effect: TriggerItem[] | undefined
  /**
   * The map color used when charting this entity if a friendly or enemy color isn't defined or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.map_color View documentation}
   */
  readonly map_color: ColorTable | undefined
  /**
   * The friendly map color used when charting this entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.friendly_map_color View documentation}
   */
  readonly friendly_map_color: ColorTable
  /**
   * The enemy map color used when charting this entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.enemy_map_color View documentation}
   */
  readonly enemy_map_color: ColorTable
  /**
   * The evolution requirement to build this entity as a base when expanding enemy bases.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.build_base_evolution_requirement View documentation}
   */
  readonly build_base_evolution_requirement: double
  /**
   * The instruments for this programmable speaker or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.instruments View documentation}
   */
  readonly instruments: ProgrammableSpeakerInstrument[] | undefined
  /**
   * The maximum polyphony for this programmable speaker or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.max_polyphony View documentation}
   */
  readonly max_polyphony: uint | undefined
  /**
   * The module inventory size or `nil` if this entity doesn't support modules.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.module_inventory_size View documentation}
   */
  readonly module_inventory_size: uint | undefined
  /**
   * The max number of ingredients this crafting-machine prototype supports or `nil` if this isn't a crafting-machine prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.ingredient_count View documentation}
   */
  readonly ingredient_count: uint | undefined
  /**
   * The crafting speed of this crafting-machine or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.crafting_speed View documentation}
   */
  readonly crafting_speed: double | undefined
  /**
   * The crafting categories this entity supports. Only meaningful when this is a crafting-machine or player entity type.
   *
   * **Note**: The value in the dictionary is meaningless and exists just to allow the dictionary type for easy lookup.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.crafting_categories View documentation}
   */
  readonly crafting_categories: Record<string, boolean>
  /**
   * The resource categories this character or mining drill supports, or `nil` if not a character or mining dill.
   *
   * **Note**: The value in the dictionary is meaningless and exists just to allow the dictionary type for easy lookup.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.resource_categories View documentation}
   */
  readonly resource_categories: Record<string, boolean> | undefined
  /**
   * The supply area of this electric pole, beacon, or `nil` if this is neither.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.supply_area_distance View documentation}
   */
  readonly supply_area_distance: double | undefined
  /**
   * The maximum wire distance for this entity. 0 when the entity doesn't support wires.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.max_wire_distance View documentation}
   */
  readonly max_wire_distance: double
  /**
   * The maximum circuit wire distance for this entity. 0 when the entity doesn't support circuit wires.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.max_circuit_wire_distance View documentation}
   */
  readonly max_circuit_wire_distance: double
  /**
   * The direct energy usage of this entity or `nil` if this entity doesn't have a direct energy usage.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.energy_usage View documentation}
   */
  readonly energy_usage: double | undefined
  /**
   * The theoretical maximum energy usage for this entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.max_energy_usage View documentation}
   */
  readonly max_energy_usage: double
  /**
   * The theoretical maximum energy production for this this entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.max_energy_production View documentation}
   */
  readonly max_energy_production: double
  /**
   * The effectivity of this car prototype, generator prototype or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.effectivity View documentation}
   */
  readonly effectivity: double | undefined
  /**
   * The energy consumption of this car prototype or `nil` if not a car prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.consumption View documentation}
   */
  readonly consumption: double | undefined
  /**
   * The friction of this vehicle prototype or `nil` if not a vehicle prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.friction_force View documentation}
   */
  readonly friction_force: double | undefined
  /**
   * The braking force of this vehicle prototype or `nil` if not a vehicle prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.braking_force View documentation}
   */
  readonly braking_force: double | undefined
  /**
   * The air resistance of this rolling stock prototype or `nil` if not a rolling stock prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.air_resistance View documentation}
   */
  readonly air_resistance: double | undefined
  /**
   * If this car prototype uses tank controls to drive or `nil` if this is not a car prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.tank_driving View documentation}
   */
  readonly tank_driving: boolean | undefined
  /**
   * The rotation speed of this car prototype or `nil` if not a car prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.rotation_speed View documentation}
   */
  readonly rotation_speed: double | undefined
  /**
   * The turret rotation speed of this car prototype or `nil` if not a car prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.turret_rotation_speed View documentation}
   */
  readonly turret_rotation_speed: double | undefined
  /**
   * The guns this prototype uses or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.guns View documentation}
   */
  readonly guns: Record<string, LuaItemPrototype> | undefined
  /**
   * The default speed of this flying robot, rolling stock or unit, `nil` if not one of these.
   *
   * **Note**: For rolling stocks, this is their `max_speed`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.speed View documentation}
   */
  readonly speed: double | undefined
  /**
   * The speed multiplier when this flying robot is out of energy or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.speed_multiplier_when_out_of_energy View documentation}
   */
  readonly speed_multiplier_when_out_of_energy: float | undefined
  /**
   * The max payload size of this logistics or construction robot or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.max_payload_size View documentation}
   */
  readonly max_payload_size: uint | undefined
  /**
   * Whether this logistics or construction robot renders its cargo when flying or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.draw_cargo View documentation}
   */
  readonly draw_cargo: boolean | undefined
  /**
   * The energy consumed per tile moved for this flying robot or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.energy_per_move View documentation}
   */
  readonly energy_per_move: double | undefined
  /**
   * The energy consumed per tick for this flying robot or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.energy_per_tick View documentation}
   */
  readonly energy_per_tick: double | undefined
  /**
   * The max energy for this flying robot or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.max_energy View documentation}
   */
  readonly max_energy: double | undefined
  /**
   * The minimum energy for this flying robot before it tries to recharge or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.min_to_charge View documentation}
   */
  readonly min_to_charge: float | undefined
  /**
   * The maximum energy for this flying robot above which it won't try to recharge when stationing or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.max_to_charge View documentation}
   */
  readonly max_to_charge: float | undefined
  /**
   * The burner energy source prototype this entity uses or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.burner_prototype View documentation}
   */
  readonly burner_prototype: LuaBurnerPrototype | undefined
  /**
   * The electric energy source prototype this entity uses or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.electric_energy_source_prototype View documentation}
   */
  readonly electric_energy_source_prototype: LuaElectricEnergySourcePrototype | undefined
  /**
   * The heat energy source prototype this entity uses or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.heat_energy_source_prototype View documentation}
   */
  readonly heat_energy_source_prototype: LuaHeatEnergySourcePrototype | undefined
  /**
   * The fluid energy source prototype this entity uses or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.fluid_energy_source_prototype View documentation}
   */
  readonly fluid_energy_source_prototype: LuaFluidEnergySourcePrototype | undefined
  /**
   * The void energy source prototype this entity uses or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.void_energy_source_prototype View documentation}
   */
  readonly void_energy_source_prototype: LuaVoidEnergySourcePrototype | undefined
  /**
   * The log2 of grid size of the building
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.building_grid_bit_shift View documentation}
   */
  readonly building_grid_bit_shift: uint
  /**
   * The fluid usage of this generator prototype or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.fluid_usage_per_tick View documentation}
   */
  readonly fluid_usage_per_tick: double | undefined
  /**
   * The maximum fluid temperature of this generator prototype or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.maximum_temperature View documentation}
   */
  readonly maximum_temperature: double | undefined
  /**
   * The target temperature of this boiler prototype or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.target_temperature View documentation}
   */
  readonly target_temperature: double | undefined
  /**
   * The fluid this offshore pump produces or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.fluid View documentation}
   */
  readonly fluid: LuaFluidPrototype | undefined
  /**
   * The fluid capacity of this entity or 0 if this entity doesn't support fluids.
   *
   * **Note**: Crafting machines will report 0 due to their fluid capacity being what ever a given recipe needs.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.fluid_capacity View documentation}
   */
  readonly fluid_capacity: double
  /**
   * The pumping speed of this offshore pump, normal pump, or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.pumping_speed View documentation}
   */
  readonly pumping_speed: double | undefined
  /**
   * If this inserter is a stack-type.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.stack View documentation}
   */
  readonly stack: boolean
  /**
   * If this inserter allows custom pickup and drop vectors.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.allow_custom_vectors View documentation}
   */
  readonly allow_custom_vectors: boolean
  /**
   * If this inserter allows burner leeching.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.allow_burner_leech View documentation}
   */
  readonly allow_burner_leech: boolean
  /**
   * The extension speed of this inserter or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.inserter_extension_speed View documentation}
   */
  readonly inserter_extension_speed: double | undefined
  /**
   * The rotation speed of this inserter or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.inserter_rotation_speed View documentation}
   */
  readonly inserter_rotation_speed: double | undefined
  /**
   * The pickup position for this inserter or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.inserter_pickup_position View documentation}
   */
  readonly inserter_pickup_position: Vector | undefined
  /**
   * The drop position for this inserter or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.inserter_drop_position View documentation}
   */
  readonly inserter_drop_position: Vector | undefined
  /**
   * True if this inserter chases items on belts for pickup or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.inserter_chases_belt_items View documentation}
   */
  readonly inserter_chases_belt_items: boolean | undefined
  /**
   * If this simple-entity is counted as a rock for the deconstruction planner "trees and rocks only" filter.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.count_as_rock_for_filtered_deconstruction View documentation}
   */
  readonly count_as_rock_for_filtered_deconstruction: boolean
  /**
   * The filter count of this inserter, loader, or logistic chest or `nil`. For logistic containers, `nil` means no limit.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.filter_count View documentation}
   */
  readonly filter_count: uint | undefined
  /**
   * The time to live for this prototype or `0` if prototype doesn't have time_to_live or time_before_removed.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.time_to_live View documentation}
   */
  readonly time_to_live: uint
  /**
   * The distribution effectivity for this beacon prototype or `nil` if not a beacon prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.distribution_effectivity View documentation}
   */
  readonly distribution_effectivity: double | undefined
  /**
   * Does this explosion have a beam or `nil` if not an explosion prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.explosion_beam View documentation}
   */
  readonly explosion_beam: double | undefined
  /**
   * Does this explosion rotate or `nil` if not an explosion prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.explosion_rotate View documentation}
   */
  readonly explosion_rotate: double | undefined
  /**
   * If it is a tree, return the number of colors it supports. `nil` otherwise.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.tree_color_count View documentation}
   */
  readonly tree_color_count: uint8 | undefined
  /**
   * Does this entity with health prototype alert when damaged? or `nil` if not entity with health prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.alert_when_damaged View documentation}
   */
  readonly alert_when_damaged: boolean | undefined
  /**
   * Does this turret prototype alert when attacking? or `nil` if not turret prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.alert_when_attacking View documentation}
   */
  readonly alert_when_attacking: boolean | undefined
  /**
   * The color of the prototype, or `nil` if the prototype doesn't have color.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.color View documentation}
   */
  readonly color: ColorTable | undefined
  /**
   * Does this prototype collision mask collide with itself?
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.collision_mask_collides_with_self View documentation}
   */
  readonly collision_mask_collides_with_self: boolean
  /**
   * Does this prototype collision mask collide with tiles only?
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.collision_mask_collides_with_tiles_only View documentation}
   */
  readonly collision_mask_collides_with_tiles_only: boolean
  /**
   * Does this prototype collision mask consider tile transitions?
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.collision_mask_considers_tile_transitions View documentation}
   */
  readonly collision_mask_considers_tile_transitions: boolean
  /**
   * The allowed module effects for this entity or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.allowed_effects View documentation}
   */
  readonly allowed_effects: Record<string, boolean> | undefined
  /**
   * The rocket parts required for this rocket silo prototype or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.rocket_parts_required View documentation}
   */
  readonly rocket_parts_required: uint | undefined
  /**
   * The rocket rising delay for this rocket silo prototype or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.rocket_rising_delay View documentation}
   */
  readonly rocket_rising_delay: uint8 | undefined
  /**
   * The rocket launch delay for this rocket silo prototype or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.launch_wait_time View documentation}
   */
  readonly launch_wait_time: uint8 | undefined
  /**
   * The light blinking speed for this rocket silo prototype or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.light_blinking_speed View documentation}
   */
  readonly light_blinking_speed: double | undefined
  /**
   * The door opening speed for this rocket silo prototype or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.door_opening_speed View documentation}
   */
  readonly door_opening_speed: double | undefined
  /**
   * The rising speed for this rocket silo rocket prototype or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.rising_speed View documentation}
   */
  readonly rising_speed: double | undefined
  /**
   * The engine starting speed for this rocket silo rocket prototype or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.engine_starting_speed View documentation}
   */
  readonly engine_starting_speed: double | undefined
  /**
   * The flying speed for this rocket silo rocket prototype or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.flying_speed View documentation}
   */
  readonly flying_speed: double | undefined
  /**
   * The flying acceleration for this rocket silo rocket prototype or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.flying_acceleration View documentation}
   */
  readonly flying_acceleration: double | undefined
  /**
   * The fixed recipe name for this assembling machine prototype or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.fixed_recipe View documentation}
   */
  readonly fixed_recipe: string | undefined
  /**
   * The construction radius for this roboport prototype or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.construction_radius View documentation}
   */
  readonly construction_radius: double | undefined
  /**
   * The logistic radius for this roboport prototype or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.logistic_radius View documentation}
   */
  readonly logistic_radius: double | undefined
  /**
   * The energy used per hitpoint taken for this vehicle during collisions or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.energy_per_hit_point View documentation}
   */
  readonly energy_per_hit_point: double | undefined
  /**
   * If this prototype will attempt to create a ghost of itself on death.
   *
   * **Note**: If this is false then a ghost will never be made, if it's true a ghost may be made.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.create_ghost_on_death View documentation}
   */
  readonly create_ghost_on_death: boolean
  /**
   * The time it takes this land mine to arm.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.timeout View documentation}
   */
  readonly timeout: uint
  /**
   * The fluidbox prototypes for this entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.fluidbox_prototypes View documentation}
   */
  readonly fluidbox_prototypes: LuaFluidBoxPrototype[]
  /**
   * *Can only be used if this is Reactor*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.neighbour_bonus View documentation}
   */
  readonly neighbour_bonus: double
  /**
   * Controls how much a reactor extends when connected to other reactors.
   *
   * *Can only be used if this is Reactor*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.neighbour_collision_increase View documentation}
   */
  readonly neighbour_collision_increase: double
  /**
   * *Can only be used if this is Loader*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.container_distance View documentation}
   */
  readonly container_distance: double
  /**
   * *Can only be used if this is Loader*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.belt_distance View documentation}
   */
  readonly belt_distance: double
  /**
   * *Can only be used if this is Loader*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.belt_length View documentation}
   */
  readonly belt_length: double
  readonly is_building: boolean
  /**
   * The amount of ammo that inserters automatically insert into this ammo-turret or artillery-turret or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.automated_ammo_count View documentation}
   */
  readonly automated_ammo_count: uint | undefined
  /**
   * The max speed of this projectile prototype or flying robot prototype or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.max_speed View documentation}
   */
  readonly max_speed: double | undefined
  /**
   * Value between 0 and 1 darkness where all lamps of this lamp prototype are on or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.darkness_for_all_lamps_on View documentation}
   */
  readonly darkness_for_all_lamps_on: float | undefined
  /**
   * Value between 0 and 1 darkness where all lamps of this lamp prototype are off or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.darkness_for_all_lamps_off View documentation}
   */
  readonly darkness_for_all_lamps_off: float | undefined
  /**
   * Whether the lamp is always on (except when out of power or turned off by the circuit network) or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.always_on View documentation}
   */
  readonly always_on: boolean | undefined
  /**
   * The minimum darkness at which this unit spawner can spawn entities.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.min_darkness_to_spawn View documentation}
   */
  readonly min_darkness_to_spawn: float
  /**
   * The maximum darkness at which this unit spawner can spawn entities.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.max_darkness_to_spawn View documentation}
   */
  readonly max_darkness_to_spawn: float
  readonly call_for_help_radius: double
  /**
   * Count of enemies this spawner can sustain.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.max_count_of_owned_units View documentation}
   */
  readonly max_count_of_owned_units: double
  /**
   * How many friendly units are required within the spawning_radius of this spawner for it to stop producing more units.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.max_friends_around_to_spawn View documentation}
   */
  readonly max_friends_around_to_spawn: double
  /**
   * How far from the spawner can the units be spawned.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.spawning_radius View documentation}
   */
  readonly spawning_radius: double
  /**
   * What spaces should be between the spawned units.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.spawning_spacing View documentation}
   */
  readonly spawning_spacing: double
  /**
   * The radius of this entity prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.radius View documentation}
   */
  readonly radius: double
  /**
   * The item prototype name used to destroy this cliff or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.cliff_explosive_prototype View documentation}
   */
  readonly cliff_explosive_prototype: string | undefined
  /**
   * The rocket entity prototype associated with this rocket silo prototype or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.rocket_entity_prototype View documentation}
   */
  readonly rocket_entity_prototype: LuaEntityPrototype | undefined
  /**
   * Whether this unit, car, or character prototype has belt immunity, `nil` if not car, unit, or character prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.has_belt_immunity View documentation}
   */
  readonly has_belt_immunity: boolean | undefined
  /**
   * The vision distance of this unit prototype or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.vision_distance View documentation}
   */
  readonly vision_distance: double | undefined
  /**
   * The amount of pollution that has to be absorbed by the unit's spawner before the unit will leave the spawner and
   * attack the source of the pollution. `nil` when prototype is not a unit prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.pollution_to_join_attack View documentation}
   */
  readonly pollution_to_join_attack: float | undefined
  /**
   * The minimum pursue time of this unit prototype or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.min_pursue_time View documentation}
   */
  readonly min_pursue_time: uint | undefined
  /**
   * The maximum pursue distance of this unit prototype or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.max_pursue_distance View documentation}
   */
  readonly max_pursue_distance: double | undefined
  /**
   * The radar range of this unit prototype or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.radar_range View documentation}
   */
  readonly radar_range: uint | undefined
  /**
   * Whether this unit prototype can move while shooting or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.move_while_shooting View documentation}
   */
  readonly move_while_shooting: boolean | undefined
  /**
   * Whether this unit prototype can open gates or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.can_open_gates View documentation}
   */
  readonly can_open_gates: boolean | undefined
  /**
   * Whether this unit prototype is affected by tile walking speed modifiers or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.affected_by_tiles View documentation}
   */
  readonly affected_by_tiles: boolean | undefined
  /**
   * The distraction cooldown of this unit prototype or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.distraction_cooldown View documentation}
   */
  readonly distraction_cooldown: uint | undefined
  /**
   * The spawning time modifier of this unit prototype or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.spawning_time_modifier View documentation}
   */
  readonly spawning_time_modifier: double | undefined
  /**
   * The alert icon shift of this entity prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.alert_icon_shift View documentation}
   */
  readonly alert_icon_shift: Vector
  /**
   * The item prototype names that are the inputs of this lab prototype or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.lab_inputs View documentation}
   */
  readonly lab_inputs: string[] | undefined
  /**
   * The base researching speed of this lab prototype or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.researching_speed View documentation}
   */
  readonly researching_speed: double | undefined
  /**
   * The item slot count of this constant combinator prototype or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.item_slot_count View documentation}
   */
  readonly item_slot_count: uint | undefined
  /**
   * The base productivity of this crafting machine, lab, or mining drill, or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.base_productivity View documentation}
   */
  readonly base_productivity: double | undefined
  /**
   * If this market allows access to all forces or just friendly ones.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.allow_access_to_all_forces View documentation}
   */
  readonly allow_access_to_all_forces: boolean
  /**
   * If this entity prototype could possibly ever be rotated.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.supports_direction View documentation}
   */
  readonly supports_direction: boolean
  /**
   * The terrain friction modifier for this vehicle.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.terrain_friction_modifier View documentation}
   */
  readonly terrain_friction_modifier: float
  /**
   * If this vehicle allows passengers.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.allow_passengers View documentation}
   */
  readonly allow_passengers: boolean
  /**
   * The radius of the area this radar can chart, in chunks.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.max_distance_of_sector_revealed View documentation}
   */
  readonly max_distance_of_sector_revealed: uint
  /**
   * The radius of the area constantly revealed by this radar, in chunks.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.max_distance_of_nearby_sector_revealed View documentation}
   */
  readonly max_distance_of_nearby_sector_revealed: uint
  /**
   * The bounding box that specifies which tiles adjacent to the offshore pump should be checked.
   *
   * *Can only be used if this is OffshorePump*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.adjacent_tile_collision_box View documentation}
   */
  readonly adjacent_tile_collision_box: BoundingBoxTable
  /**
   * Tiles adjacent to the offshore pump must not collide with this collision mask.
   *
   * *Can only be used if this is OffshorePump*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.adjacent_tile_collision_mask View documentation}
   */
  readonly adjacent_tile_collision_mask: CollisionMask
  /**
   * If this mask is not empty, tiles adjacent to the offshore pump must not collide with this collision mask.
   *
   * *Can only be used if this is OffshorePump*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.adjacent_tile_collision_test View documentation}
   */
  readonly adjacent_tile_collision_test: CollisionMask
  /**
   * The collision mask used only for collision test with tile directly at offshore pump position.
   *
   * *Can only be used if this is OffshorePump*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.center_collision_mask View documentation}
   */
  readonly center_collision_mask: CollisionMask
  /**
   * The equipment grid prototype for this entity or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.grid_prototype View documentation}
   */
  readonly grid_prototype: LuaEquipmentGridPrototype | undefined
  readonly remove_decoratives: string
  /**
   * *Can only be used if this is TransportBelt*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.related_underground_belt View documentation}
   */
  readonly related_underground_belt: LuaEntityPrototype
  /**
   * Gets the built-in stack size bonus of this inserter prototype. `nil` if this is not an inserter.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.inserter_stack_size_bonus View documentation}
   */
  readonly inserter_stack_size_bonus: double | undefined
  /**
   * Gets the current movement speed of this character, including effects from exoskeletons, tiles, stickers and shooting.
   *
   * *Can only be used if this is Character*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.running_speed View documentation}
   */
  readonly running_speed: double
  /**
   * *Can only be used if this is Character*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.maximum_corner_sliding_distance View documentation}
   */
  readonly maximum_corner_sliding_distance: double
  /**
   * *Can only be used if this is Character*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.build_distance View documentation}
   */
  readonly build_distance: uint
  /**
   * *Can only be used if this is Character*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.drop_item_distance View documentation}
   */
  readonly drop_item_distance: uint
  /**
   * *Can only be used if this is Character*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.reach_distance View documentation}
   */
  readonly reach_distance: uint
  /**
   * *Can only be used if this is Character*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.reach_resource_distance View documentation}
   */
  readonly reach_resource_distance: double
  /**
   * *Can only be used if this is Character*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.item_pickup_distance View documentation}
   */
  readonly item_pickup_distance: double
  /**
   * *Can only be used if this is Character*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.loot_pickup_distance View documentation}
   */
  readonly loot_pickup_distance: double
  /**
   * *Can only be used if this is Character*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.enter_vehicle_distance View documentation}
   */
  readonly enter_vehicle_distance: double
  /**
   * *Can only be used if this is Character*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.ticks_to_keep_gun View documentation}
   */
  readonly ticks_to_keep_gun: uint
  /**
   * *Can only be used if this is Character*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.ticks_to_keep_aiming_direction View documentation}
   */
  readonly ticks_to_keep_aiming_direction: uint
  /**
   * *Can only be used if this is Character*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.ticks_to_stay_in_combat View documentation}
   */
  readonly ticks_to_stay_in_combat: uint
  /**
   * *Can only be used if this is Character*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.respawn_time View documentation}
   */
  readonly respawn_time: uint
  /**
   * *Can only be used if this is Character*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.damage_hit_tint View documentation}
   */
  readonly damage_hit_tint: ColorTable
  /**
   * *Can only be used if this is Character*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEntityPrototype.html#LuaEntityPrototype.character_corpse View documentation}
   */
  readonly character_corpse: LuaEntityPrototype
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaEntityPrototype"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * An item in a {@link LuaEquipmentGrid}, for example one's power armor.
 *
 * **Note**: An equipment reference becomes invalid once the equipment is removed or the equipment grid it resides in is
 * destroyed.
 *
 * {@link https://lua-api.factorio.com/latest/LuaEquipment.html View documentation}
 *
 * @noSelf
 */
interface LuaEquipment {
  /**
   * Name of this equipment.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipment.html#LuaEquipment.name View documentation}
   */
  readonly name: string
  /**
   * Type of this equipment.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipment.html#LuaEquipment.type View documentation}
   */
  readonly type: string
  /**
   * Position of this equipment in the equipment grid.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipment.html#LuaEquipment.position View documentation}
   */
  readonly position: PositionTable
  /**
   * Shape of this equipment.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipment.html#LuaEquipment.shape View documentation}
   */
  readonly shape: {
    readonly width: uint
    readonly height: uint
  }
  /**
   * Current shield value of the equipment.
   *
   * **Note**: Can't be set higher than {@link LuaEquipment.max_shield LuaEquipment::max_shield}.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipment.html#LuaEquipment.shield View documentation}
   */
  shield: double
  /**
   * Maximum shield value.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipment.html#LuaEquipment.max_shield View documentation}
   */
  readonly max_shield: double
  /**
   * Maximum solar power generated.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipment.html#LuaEquipment.max_solar_power View documentation}
   */
  readonly max_solar_power: double
  /**
   * Movement speed bonus.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipment.html#LuaEquipment.movement_bonus View documentation}
   */
  readonly movement_bonus: double
  /**
   * Energy generated per tick.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipment.html#LuaEquipment.generator_power View documentation}
   */
  readonly generator_power: double
  /**
   * Current available energy.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipment.html#LuaEquipment.energy View documentation}
   */
  energy: double
  /**
   * Maximum amount of energy that can be stored in this equipment.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipment.html#LuaEquipment.max_energy View documentation}
   */
  readonly max_energy: double
  readonly prototype: LuaEquipmentPrototype
  /**
   * The burner energy source for this equipment or `nil` if there isn't one.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipment.html#LuaEquipment.burner View documentation}
   */
  readonly burner: LuaBurner | undefined
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaEquipment"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Prototype of an equipment category.
 *
 * {@link https://lua-api.factorio.com/latest/LuaEquipmentCategoryPrototype.html View documentation}
 *
 * @noSelf
 */
interface LuaEquipmentCategoryPrototype {
  /**
   * Name of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentCategoryPrototype.html#LuaEquipmentCategoryPrototype.name View documentation}
   */
  readonly name: string
  /**
   * Order string of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentCategoryPrototype.html#LuaEquipmentCategoryPrototype.order View documentation}
   */
  readonly order: string
  readonly localised_name: LocalisedString
  readonly localised_description: LocalisedString
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaEquipmentCategoryPrototype"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * An equipment grid is for example the inside of a power armor.
 *
 * {@link https://lua-api.factorio.com/latest/LuaEquipmentGrid.html View documentation}
 *
 * @noSelf
 */
interface LuaEquipmentGrid {
  /**
   * Remove an equipment from the grid.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentGrid.html#LuaEquipmentGrid.take View documentation}
   *
   * @returns The removed equipment, or `nil` if no equipment was removed.
   */
  take(params: {
    /** Take the equipment that contains this position in the grid. */
    readonly position?: Position
    /** Take this exact equipment. */
    readonly equipment?: LuaEquipment
    /**
     * If provided the action is done 'as' this player and
     * {@link OnPlayerRemovedEquipmentEvent on_player_removed_equipment} is triggered.
     */
    readonly by_player?: PlayerIdentification
  }): SimpleItemStack | undefined
  /**
   * Remove all equipment from the grid.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentGrid.html#LuaEquipmentGrid.take_all View documentation}
   *
   * @param by_player - If provided, the action is done 'as' this player and
   *   {@link OnPlayerRemovedEquipmentEvent on_player_removed_equipment} is triggered.
   * @returns Count of each removed equipment, indexed by their prototype names.
   */
  take_all(by_player?: PlayerIdentification): Record<string, uint>
  /**
   * Clear all equipment from the grid, removing it without actually returning it.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentGrid.html#LuaEquipmentGrid.clear View documentation}
   *
   * @param by_player - If provided, the action is done 'as' this player and
   *   {@link OnPlayerRemovedEquipmentEvent on_player_removed_equipment} is triggered.
   */
  clear(by_player?: PlayerIdentification): void
  /**
   * Insert an equipment into the grid.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentGrid.html#LuaEquipmentGrid.put View documentation}
   *
   * @returns The newly-added equipment, or `nil` if the equipment could not be added.
   */
  put(params: {
    /** Equipment prototype name */
    readonly name: string
    /** Grid position to put the equipment in. */
    readonly position?: Position
    /**
     * If provided the action is done 'as' this player and
     * {@link OnPlayerPlacedEquipmentEvent on_player_placed_equipment} is triggered.
     */
    readonly by_player?: PlayerIdentification
  }): LuaEquipment | undefined
  /**
   * Check whether moving an equipment would succeed.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentGrid.html#LuaEquipmentGrid.can_move View documentation}
   */
  can_move(params: {
    /** The equipment to move */
    readonly equipment: LuaEquipment
    /** Where to put it */
    readonly position: Position
  }): boolean
  /**
   * Move an equipment within this grid.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentGrid.html#LuaEquipmentGrid.move View documentation}
   *
   * @returns `true` if the equipment was successfully moved.
   */
  move(params: {
    /** The equipment to move */
    readonly equipment: LuaEquipment
    /** Where to put it */
    readonly position: Position
  }): boolean
  /**
   * Find equipment in the Equipment Grid based off a position.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentGrid.html#LuaEquipmentGrid.get View documentation}
   *
   * @param position - The position
   * @returns The found equipment, or `nil` if equipment could not be found at the given position.
   */
  get(position: Position): LuaEquipment | undefined
  /**
   * Get counts of all equipment in this grid.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentGrid.html#LuaEquipmentGrid.get_contents View documentation}
   *
   * @returns The counts, indexed by equipment names.
   */
  get_contents(): Record<string, uint>
  readonly prototype: LuaEquipmentGridPrototype
  /**
   * Width of the equipment grid.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentGrid.html#LuaEquipmentGrid.width View documentation}
   */
  readonly width: uint
  /**
   * Height of the equipment grid.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentGrid.html#LuaEquipmentGrid.height View documentation}
   */
  readonly height: uint
  /**
   * All the equipment in this grid.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentGrid.html#LuaEquipmentGrid.equipment View documentation}
   */
  readonly equipment: LuaEquipment[]
  /**
   * Total energy per tick generated by the equipment inside this grid.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentGrid.html#LuaEquipmentGrid.generator_energy View documentation}
   */
  readonly generator_energy: double
  /**
   * Maximum energy per tick that can be created by any solar panels in the equipment grid. Actual generated energy
   * varies depending on the daylight levels.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentGrid.html#LuaEquipmentGrid.max_solar_energy View documentation}
   */
  readonly max_solar_energy: double
  /**
   * The total energy stored in all batteries in the equipment grid.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentGrid.html#LuaEquipmentGrid.available_in_batteries View documentation}
   */
  readonly available_in_batteries: double
  /**
   * Total energy storage capacity of all batteries in the equipment grid.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentGrid.html#LuaEquipmentGrid.battery_capacity View documentation}
   */
  readonly battery_capacity: double
  /**
   * The amount of shields this equipment grid has.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentGrid.html#LuaEquipmentGrid.shield View documentation}
   */
  readonly shield: float
  /**
   * The maximum amount of shields this equipment grid has.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentGrid.html#LuaEquipmentGrid.max_shield View documentation}
   */
  readonly max_shield: float
  /**
   * True if this movement bonus equipment is turned off, otherwise false.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentGrid.html#LuaEquipmentGrid.inhibit_movement_bonus View documentation}
   */
  inhibit_movement_bonus: boolean
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaEquipmentGrid"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Prototype of an equipment grid.
 *
 * {@link https://lua-api.factorio.com/latest/LuaEquipmentGridPrototype.html View documentation}
 *
 * @noSelf
 */
interface LuaEquipmentGridPrototype {
  /**
   * Name of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentGridPrototype.html#LuaEquipmentGridPrototype.name View documentation}
   */
  readonly name: string
  /**
   * Order string of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentGridPrototype.html#LuaEquipmentGridPrototype.order View documentation}
   */
  readonly order: string
  readonly localised_name: LocalisedString
  readonly localised_description: LocalisedString
  /**
   * Equipment category names for the categories that may be inserted into this equipment grid. The grid will accept
   * any equipment that has at least one category in this list.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentGridPrototype.html#LuaEquipmentGridPrototype.equipment_categories View documentation}
   *
   * @see {@link LuaEquipmentPrototype.equipment_categories}
   */
  readonly equipment_categories: string[]
  readonly width: uint
  readonly height: uint
  /**
   * If the player can move equipment into or out of this grid.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentGridPrototype.html#LuaEquipmentGridPrototype.locked View documentation}
   */
  readonly locked: boolean
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaEquipmentGridPrototype"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Prototype of a modular equipment.
 *
 * {@link https://lua-api.factorio.com/latest/LuaEquipmentPrototype.html View documentation}
 *
 * @noSelf
 */
interface LuaEquipmentPrototype {
  /**
   * Name of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentPrototype.html#LuaEquipmentPrototype.name View documentation}
   */
  readonly name: string
  /**
   * Type of this equipment prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentPrototype.html#LuaEquipmentPrototype.type View documentation}
   */
  readonly type: string
  /**
   * Order string of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentPrototype.html#LuaEquipmentPrototype.order View documentation}
   */
  readonly order: string
  readonly localised_name: LocalisedString
  readonly localised_description: LocalisedString
  /**
   * Shape of this equipment prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentPrototype.html#LuaEquipmentPrototype.shape View documentation}
   */
  readonly shape: {
    readonly width: uint
    readonly height: uint
    /** Only set when the shape is "manual" */
    readonly points?: EquipmentPoint[]
  }
  /**
   * The result item when taking this equipment out of an equipment grid. `nil` if there is no result item.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentPrototype.html#LuaEquipmentPrototype.take_result View documentation}
   */
  readonly take_result: LuaItemPrototype | undefined
  /**
   * The max power generated by this equipment.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentPrototype.html#LuaEquipmentPrototype.energy_production View documentation}
   */
  readonly energy_production: double
  /**
   * The shield value of this equipment. 0 for non-shield equipment.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentPrototype.html#LuaEquipmentPrototype.shield View documentation}
   */
  readonly shield: float
  /**
   * The energy per shield point restored. 0 for non-shield equipment.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentPrototype.html#LuaEquipmentPrototype.energy_per_shield View documentation}
   */
  readonly energy_per_shield: double
  /**
   * The logistic parameters for this roboport equipment.
   *
   * **Note**: Both the `charging_station_shift` and `stationing_offset` vectors are tables with `x` and `y` keys
   * instead of an array.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentPrototype.html#LuaEquipmentPrototype.logistic_parameters View documentation}
   */
  readonly logistic_parameters: {
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
   * *Can only be used if this is MovementBonusEquipmentPrototype*
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentPrototype.html#LuaEquipmentPrototype.movement_bonus View documentation}
   */
  readonly movement_bonus: float
  /**
   * The energy source prototype for the equipment.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentPrototype.html#LuaEquipmentPrototype.energy_source View documentation}
   */
  readonly energy_source: LuaElectricEnergySourcePrototype
  /**
   * Category names for this equipment. These categories will be used to determine whether this equipment is allowed
   * in a particular equipment grid.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentPrototype.html#LuaEquipmentPrototype.equipment_categories View documentation}
   *
   * @see {@link LuaEquipmentGridPrototype.equipment_categories}
   */
  readonly equipment_categories: string[]
  /**
   * The burner energy source prototype this equipment uses or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentPrototype.html#LuaEquipmentPrototype.burner_prototype View documentation}
   */
  readonly burner_prototype: LuaBurnerPrototype | undefined
  /**
   * The electric energy source prototype this equipment uses or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentPrototype.html#LuaEquipmentPrototype.electric_energy_source_prototype View documentation}
   */
  readonly electric_energy_source_prototype: LuaElectricEnergySourcePrototype | undefined
  /**
   * The background color of this equipment prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentPrototype.html#LuaEquipmentPrototype.background_color View documentation}
   */
  readonly background_color: ColorTable
  /**
   * The equipment attack parameters or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentPrototype.html#LuaEquipmentPrototype.attack_parameters View documentation}
   */
  readonly attack_parameters: AttackParameters | undefined
  /**
   * Is this active defense equipment automatic. Returns false if not active defense equipment.
   *
   * {@link https://lua-api.factorio.com/latest/LuaEquipmentPrototype.html#LuaEquipmentPrototype.automatic View documentation}
   */
  readonly automatic: boolean
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaEquipmentPrototype"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Encapsulates statistic data for different parts of the game. In the context of flow statistics, `input` and `output`
 * describe on which side of the associated GUI the values are shown. Input values are shown on the left side, output
 * values on the right side.
 *
 * Examples:
 *
 * - The item production GUI shows "consumption" on the right, thus `output` describes the item consumption numbers. The
 *   same goes for fluid consumption.
 * - The kills gui shows "losses" on the right, so `output` describes how many of the force's entities were killed by enemies.
 * - The electric network GUI shows "power consumption" on the left side, so in this case `input` describes the power
 *   consumption numbers.
 *
 * {@link https://lua-api.factorio.com/latest/LuaFlowStatistics.html View documentation}
 *
 * @noSelf
 */
interface LuaFlowStatistics {
  /**
   * Gets the total input count for a given prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFlowStatistics.html#LuaFlowStatistics.get_input_count View documentation}
   *
   * @param name - The prototype name.
   */
  get_input_count(name: string): uint64 | double
  /**
   * Sets the total input count for a given prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFlowStatistics.html#LuaFlowStatistics.set_input_count View documentation}
   *
   * @param name - The prototype name.
   * @param count - The new count. The type depends on the instance of the statistics.
   */
  set_input_count(name: string, count: uint64 | double): void
  /**
   * Gets the total output count for a given prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFlowStatistics.html#LuaFlowStatistics.get_output_count View documentation}
   *
   * @param name - The prototype name.
   */
  get_output_count(name: string): uint64 | double
  /**
   * Sets the total output count for a given prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFlowStatistics.html#LuaFlowStatistics.set_output_count View documentation}
   *
   * @param name - The prototype name.
   * @param count - The new count. The type depends on the instance of the statistics.
   */
  set_output_count(name: string, count: uint64 | double): void
  /**
   * Gets the flow count value for the given time frame.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFlowStatistics.html#LuaFlowStatistics.get_flow_count View documentation}
   */
  get_flow_count(params: {
    /** The prototype name. */
    readonly name: string
    /** Read the input values or the output values */
    readonly input: boolean
    /** The precision to read. */
    readonly precision_index: defines.flow_precision_index
    /** If true, the count is returned instead of the per-time-frame value. */
    readonly count?: boolean
  }): double
  /**
   * Adds a value to this flow statistics.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFlowStatistics.html#LuaFlowStatistics.on_flow View documentation}
   *
   * @param name - The prototype name.
   * @param count - The count: positive or negative determines if the value goes in the input or output statistics.
   */
  on_flow(name: string, count: float): void
  /**
   * Reset all the statistics data to 0.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFlowStatistics.html#LuaFlowStatistics.clear View documentation}
   */
  clear(): void
  /**
   * List of input counts indexed by prototype name. Represents the data that is shown on the left side of the GUI for
   * the given statistics.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFlowStatistics.html#LuaFlowStatistics.input_counts View documentation}
   */
  readonly input_counts: Record<string, uint64 | double>
  /**
   * List of output counts indexed by prototype name. Represents the data that is shown on the right side of the GUI
   * for the given statistics.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFlowStatistics.html#LuaFlowStatistics.output_counts View documentation}
   */
  readonly output_counts: Record<string, uint64 | double>
  /**
   * The force these statistics belong to or `nil` for pollution statistics.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFlowStatistics.html#LuaFlowStatistics.force View documentation}
   */
  readonly force: LuaForce | undefined
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaFlowStatistics"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * An array of fluid boxes of an entity. Entities may contain more than one fluid box, and some can change the number of
 * fluid boxes -- for instance, an assembling machine will change its number of fluid boxes depending on its active recipe.
 *
 * See {@link Fluid}
 *
 * Do note that reading from a {@link LuaFluidBox} creates a new table and writing will copy the given fields from the
 * table into the engine's own fluid box structure. Therefore, the correct way to update a fluidbox of an entity is to
 * read it first, modify the table, then write the modified table back. Directly accessing the returned table's
 * attributes won't have the desired effect.
 *
 * {@link https://lua-api.factorio.com/latest/LuaFluidBox.html View documentation}
 *
 * @example
 *   Double the temperature of the fluid in `entity`'s first fluid box.
 *
 *   ```lua
 *   fluid = entity.fluidbox[1]
 *   fluid.temperature = fluid.temperature * 2
 *   entity.fluidbox[1] = fluid
 *   ```
 *
 * @noSelf
 */
interface LuaFluidBox extends Array<Fluid | undefined> {
  /**
   * The prototype of this fluidbox index.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidBox.html#LuaFluidBox.get_prototype View documentation}
   *
   * @param index
   */
  get_prototype(index: uint): LuaFluidBoxPrototype
  /**
   * The capacity of the given fluidbox index.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidBox.html#LuaFluidBox.get_capacity View documentation}
   *
   * @param index
   */
  get_capacity(index: uint): double
  /**
   * The fluidbox connections for the given fluidbox index.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidBox.html#LuaFluidBox.get_connections View documentation}
   *
   * @param index
   */
  get_connections(index: uint): LuaFluidBox[]
  /**
   * Get a fluid box filter
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidBox.html#LuaFluidBox.get_filter View documentation}
   *
   * @param index - The index of the filter to get.
   * @returns The filter at the requested index. `nil` if there isn't one.
   */
  get_filter(index: uint): FluidBoxFilter | undefined
  /**
   * Set a fluid box filter.
   *
   * **Note**: Some entities cannot have their fluidbox filter set, notably fluid wagons and crafting machines.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidBox.html#LuaFluidBox.set_filter View documentation}
   *
   * @param index - The index of the filter to set.
   * @param filter - The filter to set. Setting `nil` clears the filter.
   * @returns Whether the filter was set successfully.
   */
  set_filter(index: uint, filter?: FluidBoxFilterSpec): boolean
  /**
   * Flow through the fluidbox in the last tick. It is the larger of in-flow and out-flow.
   *
   * **Note**: Fluid wagons do not track it and will return 0.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidBox.html#LuaFluidBox.get_flow View documentation}
   *
   * @param index
   */
  get_flow(index: uint): double
  /**
   * Returns the fluid the fluidbox is locked onto Returns 'nil' for no lock
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidBox.html#LuaFluidBox.get_locked_fluid View documentation}
   *
   * @param index
   */
  get_locked_fluid(index: uint): string | undefined
  /**
   * Flushes all fluid from this fluidbox and its fluid system.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidBox.html#LuaFluidBox.flush View documentation}
   *
   * @param index
   * @param fluid - If provided, only this fluid is flushed.
   * @returns The fluid removed.
   */
  flush(index: uint, fluid?: FluidIdentification): Record<string, float>
  /**
   * Number of fluid boxes.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidBox.html#LuaFluidBox.operator%20# View documentation}
   */
  readonly length: uint
  /**
   * The entity that owns this fluidbox.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidBox.html#LuaFluidBox.owner View documentation}
   */
  readonly owner: LuaEntity
  /**
   * Access, set or clear a fluid box. The index must always be in bounds (see
   * {@link LuaFluidBox.length LuaFluidBox::operator #}). New fluidboxes may not be added or removed using this
   * operator. If the given fluid box doesn't contain any fluid, `nil` is returned. Similarly, `nil` can be written to
   * a fluid box to remove all fluid from it.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidBox.html#LuaFluidBox.operator%20[] View documentation}
   */
  [index: number]: Fluid | undefined
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaFluidBox"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * A prototype of a fluidbox owned by some {@link LuaEntityPrototype}.
 *
 * {@link https://lua-api.factorio.com/latest/LuaFluidBoxPrototype.html View documentation}
 *
 * @noSelf
 */
interface LuaFluidBoxPrototype {
  /**
   * The entity that this belongs to.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidBoxPrototype.html#LuaFluidBoxPrototype.entity View documentation}
   */
  readonly entity: LuaEntityPrototype
  /**
   * The index of this fluidbox prototype in the owning entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidBoxPrototype.html#LuaFluidBoxPrototype.index View documentation}
   */
  readonly index: uint
  /**
   * The pipe connection points.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidBoxPrototype.html#LuaFluidBoxPrototype.pipe_connections View documentation}
   */
  readonly pipe_connections: FluidBoxConnection[]
  /**
   * The production type. "input", "output", "input-output", or "none".
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidBoxPrototype.html#LuaFluidBoxPrototype.production_type View documentation}
   */
  readonly production_type: "input" | "output" | "input-output" | "none"
  readonly base_area: double
  readonly base_level: double
  readonly height: double
  readonly volume: double
  /**
   * The filter or `nil` if no filter is set.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidBoxPrototype.html#LuaFluidBoxPrototype.filter View documentation}
   */
  readonly filter: LuaFluidPrototype | undefined
  /**
   * The minimum temperature or `nil` if none is set.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidBoxPrototype.html#LuaFluidBoxPrototype.minimum_temperature View documentation}
   */
  readonly minimum_temperature: double | undefined
  /**
   * The maximum temperature or `nil` if none is set.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidBoxPrototype.html#LuaFluidBoxPrototype.maximum_temperature View documentation}
   */
  readonly maximum_temperature: double | undefined
  /**
   * The secondary draw orders for the 4 possible connection directions.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidBoxPrototype.html#LuaFluidBoxPrototype.secondary_draw_orders View documentation}
   */
  readonly secondary_draw_orders: int[]
  /**
   * The render layer.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidBoxPrototype.html#LuaFluidBoxPrototype.render_layer View documentation}
   */
  readonly render_layer: string
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaFluidBoxPrototype"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Prototype of a fluid energy source.
 *
 * {@link https://lua-api.factorio.com/latest/LuaFluidEnergySourcePrototype.html View documentation}
 *
 * @noSelf
 */
interface LuaFluidEnergySourcePrototype {
  readonly emissions: double
  readonly render_no_network_icon: boolean
  readonly render_no_power_icon: boolean
  readonly effectivity: double
  readonly burns_fluid: boolean
  readonly scale_fluid_usage: boolean
  readonly destroy_non_fuel_fluid: boolean
  readonly fluid_usage_per_tick: double
  /**
   * The smoke sources for this prototype if any.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidEnergySourcePrototype.html#LuaFluidEnergySourcePrototype.smoke View documentation}
   */
  readonly smoke: SmokeSource[]
  readonly maximum_temperature: double
  /**
   * The fluid box for this energy source.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidEnergySourcePrototype.html#LuaFluidEnergySourcePrototype.fluid_box View documentation}
   */
  readonly fluid_box: LuaFluidBoxPrototype
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaFluidEnergySourcePrototype"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Prototype of a fluid.
 *
 * {@link https://lua-api.factorio.com/latest/LuaFluidPrototype.html View documentation}
 *
 * @noSelf
 */
interface LuaFluidPrototype {
  /**
   * Name of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidPrototype.html#LuaFluidPrototype.name View documentation}
   */
  readonly name: string
  readonly localised_name: LocalisedString
  readonly localised_description: LocalisedString
  /**
   * Default temperature of this fluid.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidPrototype.html#LuaFluidPrototype.default_temperature View documentation}
   */
  readonly default_temperature: double
  /**
   * Maximum temperature this fluid can reach.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidPrototype.html#LuaFluidPrototype.max_temperature View documentation}
   */
  readonly max_temperature: double
  /**
   * The amount of energy in Joules required to heat one unit of this fluid by 1°C.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidPrototype.html#LuaFluidPrototype.heat_capacity View documentation}
   */
  readonly heat_capacity: double
  /**
   * Order string for this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidPrototype.html#LuaFluidPrototype.order View documentation}
   */
  readonly order: string
  /**
   * Group of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidPrototype.html#LuaFluidPrototype.group View documentation}
   */
  readonly group: LuaGroup
  /**
   * Subgroup of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidPrototype.html#LuaFluidPrototype.subgroup View documentation}
   */
  readonly subgroup: LuaGroup
  readonly base_color: ColorTable
  readonly flow_color: ColorTable
  /**
   * The temperature above which this fluid will be shown as gaseous inside tanks and pipes.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidPrototype.html#LuaFluidPrototype.gas_temperature View documentation}
   */
  readonly gas_temperature: double
  /**
   * A multiplier on the amount of emissions produced when this fluid is burnt in a generator. A value above `1.0`
   * increases emissions and vice versa. The multiplier can't be negative.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidPrototype.html#LuaFluidPrototype.emissions_multiplier View documentation}
   */
  readonly emissions_multiplier: double
  /**
   * The amount of energy in Joules one unit of this fluid will produce when burnt in a generator. A value of `0`
   * means this fluid can't be used for energy generation. The value can't be negative.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidPrototype.html#LuaFluidPrototype.fuel_value View documentation}
   */
  readonly fuel_value: double
  /**
   * Whether this fluid is hidden from the fluid and signal selectors.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFluidPrototype.html#LuaFluidPrototype.hidden View documentation}
   */
  readonly hidden: boolean
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaFluidPrototype"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Prototype of a font.
 *
 * {@link https://lua-api.factorio.com/latest/LuaFontPrototype.html View documentation}
 *
 * @noSelf
 */
interface LuaFontPrototype {
  /**
   * Name of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFontPrototype.html#LuaFontPrototype.name View documentation}
   */
  readonly name: string
  readonly from: string
  readonly size: int
  readonly spacing: float
  readonly border: boolean
  readonly filtered: boolean
  /**
   * The border color or `nil` if not set.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFontPrototype.html#LuaFontPrototype.border_color View documentation}
   */
  readonly border_color: ColorTable | undefined
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaFontPrototype"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * `LuaForce` encapsulates data local to each "force" or "faction" of the game. Default forces are player, enemy and
 * neutral. Players and mods can create additional forces (up to 64 total).
 *
 * {@link https://lua-api.factorio.com/latest/LuaForce.html View documentation}
 *
 * @noSelf
 */
interface LuaForce {
  /**
   * Count entities of given type.
   *
   * **Note**: This function has O(1) time complexity as entity counts are kept and maintained in the game engine.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.get_entity_count View documentation}
   *
   * @param name - Prototype name of the entity.
   * @returns Number of entities of given prototype belonging to this force.
   */
  get_entity_count(name: string): uint
  /**
   * Disable research for this force.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.disable_research View documentation}
   */
  disable_research(): void
  /**
   * Enable research for this force.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.enable_research View documentation}
   */
  enable_research(): void
  /**
   * Disable all recipes and technologies. Only recipes and technologies enabled explicitly will be useable from this point.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.disable_all_prototypes View documentation}
   */
  disable_all_prototypes(): void
  /**
   * Enables all recipes and technologies. The opposite of
   * {@link LuaForce.disable_all_prototypes LuaForce::disable_all_prototypes}
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.enable_all_prototypes View documentation}
   */
  enable_all_prototypes(): void
  /**
   * Load the original version of all recipes from the prototypes.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.reset_recipes View documentation}
   */
  reset_recipes(): void
  /**
   * Unlock all recipes.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.enable_all_recipes View documentation}
   */
  enable_all_recipes(): void
  /**
   * Unlock all technologies.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.enable_all_technologies View documentation}
   */
  enable_all_technologies(): void
  /**
   * Research all technologies.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.research_all_technologies View documentation}
   *
   * @param include_disabled_prototypes - Whether technologies that are explicitly disabled in the prototype should
   *   also be researched. Defaults to `false`.
   */
  research_all_technologies(include_disabled_prototypes?: boolean): void
  /**
   * Load the original versions of technologies from prototypes. Preserves research state of technologies.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.reset_technologies View documentation}
   */
  reset_technologies(): void
  /**
   * Reset everything. All technologies are set to not researched, all modifiers are set to default values.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.reset View documentation}
   */
  reset(): void
  /**
   * Reapplies all possible research effects, including unlocked recipes. Any custom changes are lost. Preserves
   * research state of technologies.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.reset_technology_effects View documentation}
   */
  reset_technology_effects(): void
  /**
   * Chart a portion of the map. The chart for the given area is refreshed; it creates chart for any parts of the
   * given area that haven't been charted yet.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.chart View documentation}
   *
   * @example
   *   Charts a 2048x2048 rectangle centered around the origin.
   *
   *   ```lua
   *   game.player.force.chart(game.player.surface, {{x = -1024, y = -1024}, {x = 1024, y = 1024}})
   *   ```
   *
   * @param surface
   * @param area - The area on the given surface to chart.
   */
  chart(surface: SurfaceIdentification, area: BoundingBox): void
  /**
   * Erases chart data for this force.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.clear_chart View documentation}
   *
   * @param surface - Which surface to erase chart data for or if not provided all surfaces charts are erased.
   */
  clear_chart(surface?: SurfaceIdentification): void
  /**
   * Force a rechart of the whole chart.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.rechart View documentation}
   */
  rechart(): void
  /**
   * Chart all generated chunks.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.chart_all View documentation}
   *
   * @param surface - Which surface to chart or all if not given.
   */
  chart_all(surface?: SurfaceIdentification): void
  /**
   * Has a chunk been charted?
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.is_chunk_charted View documentation}
   *
   * @param surface
   * @param position - Position of the chunk.
   */
  is_chunk_charted(surface: SurfaceIdentification, position: ChunkPosition): boolean
  /**
   * Is the given chunk currently charted and visible (not covered by fog of war) on the map.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.is_chunk_visible View documentation}
   *
   * @param surface
   * @param position
   */
  is_chunk_visible(surface: SurfaceIdentification, position: ChunkPosition): boolean
  /**
   * Cancels pending chart requests for the given surface or all surfaces.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.cancel_charting View documentation}
   *
   * @param surface
   */
  cancel_charting(surface?: SurfaceIdentification): void
  /**
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.get_ammo_damage_modifier View documentation}
   *
   * @param ammo - Ammo category
   */
  get_ammo_damage_modifier(ammo: string): double
  /**
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.set_ammo_damage_modifier View documentation}
   *
   * @param ammo - Ammo category
   * @param modifier
   */
  set_ammo_damage_modifier(ammo: string, modifier: double): void
  /**
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.get_gun_speed_modifier View documentation}
   *
   * @param ammo - Ammo category
   */
  get_gun_speed_modifier(ammo: string): double
  /**
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.set_gun_speed_modifier View documentation}
   *
   * @param ammo - Ammo category
   * @param modifier
   */
  set_gun_speed_modifier(ammo: string, modifier: double): void
  /**
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.get_turret_attack_modifier View documentation}
   *
   * @param turret - Turret prototype name
   */
  get_turret_attack_modifier(turret: string): double
  /**
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.set_turret_attack_modifier View documentation}
   *
   * @param turret - Turret prototype name
   * @param modifier
   */
  set_turret_attack_modifier(turret: string, modifier: double): void
  /**
   * Add `other` force to this force's cease fire list. Forces on the cease fire list won't be targeted for attack.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.set_cease_fire View documentation}
   *
   * @param other
   * @param cease_fire
   */
  set_cease_fire(other: ForceIdentification, cease_fire: boolean): void
  /**
   * Is `other` force in this force's cease fire list?
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.get_cease_fire View documentation}
   *
   * @param other
   */
  get_cease_fire(other: ForceIdentification): boolean
  /**
   * Add `other` force to this force's friends list. Friends have unrestricted access to buildings and turrets won't
   * fire at them.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.set_friend View documentation}
   *
   * @param other
   * @param friend
   */
  set_friend(other: ForceIdentification, friend: boolean): void
  /**
   * Is `other` force in this force's friends list.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.get_friend View documentation}
   *
   * @param other
   */
  get_friend(other: ForceIdentification): boolean
  /**
   * Is pathfinder busy? When the pathfinder is busy, it won't accept any more pathfinding requests.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.is_pathfinder_busy View documentation}
   */
  is_pathfinder_busy(): boolean
  /**
   * Kill all units and flush the pathfinder.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.kill_all_units View documentation}
   */
  kill_all_units(): void
  /**
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.find_logistic_network_by_position View documentation}
   *
   * @param position - Position to find a network for
   * @param surface - Surface to search on
   * @returns The found network or `nil`.
   */
  find_logistic_network_by_position(position: Position, surface: SurfaceIdentification): LuaLogisticNetwork | undefined
  /**
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.set_spawn_position View documentation}
   *
   * @param position - The new position on the given surface.
   * @param surface - Surface to set the spawn position for.
   */
  set_spawn_position(position: Position, surface: SurfaceIdentification): void
  /**
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.get_spawn_position View documentation}
   *
   * @param surface
   */
  get_spawn_position(surface: SurfaceIdentification): PositionTable
  /**
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.unchart_chunk View documentation}
   *
   * @param position - The chunk position to unchart.
   * @param surface - Surface to unchart on.
   */
  unchart_chunk(position: ChunkPosition, surface: SurfaceIdentification): void
  /**
   * Gets the count of a given item launched in rockets.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.get_item_launched View documentation}
   *
   * @param item - The item to get
   * @returns The count of the item that has been launched.
   */
  get_item_launched(item: string): uint
  /**
   * Sets the count of a given item launched in rockets.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.set_item_launched View documentation}
   *
   * @param item - The item to set
   * @param count - The count to set
   */
  set_item_launched(item: string, count: uint): void
  /**
   * Print text to the chat console of all players on this force.
   *
   * **Note**: Messages that are identical to a message sent in the last 60 ticks are not printed again.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.print View documentation}
   *
   * @param message
   * @param color
   */
  print(message: LocalisedString, color?: Color): void
  /**
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.get_trains View documentation}
   *
   * @param surface - If given only trains on the surface are returned.
   */
  get_trains(surface?: SurfaceIdentification): LuaTrain[]
  /**
   * Adds a custom chart tag to the given surface and returns the new tag or `nil` if the given position isn't valid
   * for a chart tag.
   *
   * **Note**: The chunk must be charted for a tag to be valid at that location.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.add_chart_tag View documentation}
   *
   * @param surface - Which surface to add the tag to.
   * @param tag - The tag to add.
   */
  add_chart_tag(surface: SurfaceIdentification, tag: ChartTagSpec): LuaCustomChartTag | undefined
  /**
   * Finds all custom chart tags within the given bounding box on the given surface.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.find_chart_tags View documentation}
   *
   * @param surface
   * @param area
   */
  find_chart_tags(surface: SurfaceIdentification, area?: BoundingBox): LuaCustomChartTag[]
  /**
   * Gets the saved progress for the given technology or `nil` if there is no saved progress.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.get_saved_technology_progress View documentation}
   *
   * @param technology - The technology
   * @returns The progress as a percent.
   */
  get_saved_technology_progress(technology: TechnologyIdentification): double | undefined
  /**
   * Sets the saved progress for the given technology. The technology must not be in progress, must not be completed,
   * and the new progress must be < 100%.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.set_saved_technology_progress View documentation}
   *
   * @param technology - The technology
   * @param progress - Progress as a percent. Set to `nil` to remove the saved progress.
   */
  set_saved_technology_progress(technology: TechnologyIdentification, progress: double | undefined): void
  /**
   * Resets evolution for this force to zero.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.reset_evolution View documentation}
   */
  reset_evolution(): void
  /**
   * Play a sound for every player in this force.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.play_sound View documentation}
   */
  play_sound(params: {
    /** The sound to play. */
    readonly path: SoundPath
    /** Where the sound should be played. If not given, it's played at the current position of each player. */
    readonly position?: Position
    /** The volume of the sound to play. Must be between 0 and 1 inclusive. */
    readonly volume_modifier?: double
    /** The volume mixer to play the sound through. Defaults to the default mixer for the given sound type. */
    readonly override_sound_type?: SoundType
  }): void
  /**
   * Gets train stops matching the given filters.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.get_train_stops View documentation}
   */
  get_train_stops(params?: { readonly name?: string | string[]; readonly surface?: SurfaceIdentification }): LuaEntity[]
  /**
   * Gets if the given recipe is explicitly disabled from being hand crafted.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.get_hand_crafting_disabled_for_recipe View documentation}
   *
   * @param recipe
   */
  get_hand_crafting_disabled_for_recipe(recipe: string | LuaRecipe): boolean
  /**
   * Sets if the given recipe can be hand-crafted. This is used to explicitly disable hand crafting a recipe - it
   * won't allow hand-crafting otherwise not hand-craftable recipes.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.set_hand_crafting_disabled_for_recipe View documentation}
   *
   * @param recipe
   * @param hand_crafting_disabled
   */
  set_hand_crafting_disabled_for_recipe(recipe: string | LuaRecipe, hand_crafting_disabled: boolean): void
  /**
   * Add this technology to the back of the research queue if the queue is enabled. Otherwise, set this technology to
   * be researched now.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.add_research View documentation}
   *
   * @param technology
   * @returns If the technology was added.
   */
  add_research(technology: TechnologyIdentification): boolean
  /**
   * Stop the research currently in progress. This will remove any dependent technologies from the research queue.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.cancel_current_research View documentation}
   */
  cancel_current_research(): void
  /**
   * Gets the linked inventory for the given prototype and link ID if it exists or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.get_linked_inventory View documentation}
   *
   * @param prototype
   * @param link_id
   */
  get_linked_inventory(prototype: EntityPrototypeIdentification, link_id: uint): LuaInventory | undefined
  /**
   * Is this force a friend? This differs from `get_friend` in that it is always true for neutral force. This is
   * equivalent to checking the `friend` ForceCondition.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.is_friend View documentation}
   *
   * @param other
   */
  is_friend(other: ForceIdentification): boolean
  /**
   * Is this force an enemy? This differs from `get_cease_fire` in that it is always false for neutral force. This is
   * equivalent to checking the `enemy` ForceCondition.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.is_enemy View documentation}
   *
   * @param other
   */
  is_enemy(other: ForceIdentification): boolean
  /**
   * Name of the force.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.name View documentation}
   *
   * @example
   *   Prints "`player`"
   *
   *   ```lua
   *   game.player.print(game.player.force.name)
   *   ```
   */
  readonly name: string
  /**
   * Technologies owned by this force, indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.technologies View documentation}
   *
   * @example
   *   Researches the technology for the player's force
   *
   *   ```lua
   *   game.player.force.technologies["steel-processing"].researched = true
   *   ```
   */
  readonly technologies: LuaCustomTable<string, LuaTechnology>
  /**
   * Recipes available to this force, indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.recipes View documentation}
   *
   * @example
   *   Prints the category of the given recipe
   *
   *   ```lua
   *   game.player.print(game.player.force.recipes["transport-belt"].category)
   *   ```
   */
  readonly recipes: LuaCustomTable<string, LuaRecipe>
  /**
   * Multiplier of the manual mining speed. Default value is `0`. The actual mining speed will be multiplied by `1 +
   * manual_mining_speed_modifier`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.manual_mining_speed_modifier View documentation}
   *
   * @example
   *   Double the player's mining speed
   *
   *   ```lua
   *   game.player.force.manual_mining_speed_modifier = 1
   *   ```
   */
  manual_mining_speed_modifier: double
  /**
   * Multiplier of the manual crafting speed. Default value is `0`. The actual crafting speed will be multiplied by `1
   * + manual_crafting_speed_modifier`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.manual_crafting_speed_modifier View documentation}
   *
   * @example
   *   Double the player's crafting speed
   *
   *   ```lua
   *   game.player.force.manual_crafting_speed_modifier = 1
   *   ```
   */
  manual_crafting_speed_modifier: double
  laboratory_speed_modifier: double
  laboratory_productivity_bonus: double
  worker_robots_speed_modifier: double
  worker_robots_battery_modifier: double
  worker_robots_storage_bonus: double
  /**
   * The current technology in research, or `nil` if no research is currently ongoing.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.current_research View documentation}
   */
  readonly current_research: LuaTechnology | undefined
  /**
   * Progress of current research, as a number in range [0, 1].
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.research_progress View documentation}
   */
  research_progress: double
  /**
   * The previous research if any.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.previous_research View documentation}
   */
  previous_research: LuaTechnology
  /**
   * The inserter stack size bonus for non stack inserters
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.inserter_stack_size_bonus View documentation}
   */
  inserter_stack_size_bonus: double
  /**
   * Number of items that can be transferred by stack inserters. When writing to this value, it must be >= 0 and <= 254.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.stack_inserter_capacity_bonus View documentation}
   */
  stack_inserter_capacity_bonus: uint
  /**
   * Number of character trash slots.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.character_trash_slot_count View documentation}
   */
  character_trash_slot_count: double
  /**
   * Maximum number of follower robots.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.maximum_following_robot_count View documentation}
   */
  maximum_following_robot_count: uint
  /**
   * Additional lifetime for following robots.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.following_robots_lifetime_modifier View documentation}
   */
  following_robots_lifetime_modifier: double
  /**
   * The time, in ticks, before a placed ghost disappears.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.ghost_time_to_live View documentation}
   */
  ghost_time_to_live: uint
  /**
   * Players belonging to this force.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.players View documentation}
   */
  readonly players: LuaPlayer[]
  /**
   * Enables some higher-level AI behaviour for this force. When set to `true`, biters belonging to this force will
   * automatically expand into new territories, build new spawners, and form unit groups. By default, this value is
   * `true` for the enemy force and `false` for all others.
   *
   * **Note**: Setting this to `false` does not turn off biters' AI. They will still move around and attack players
   * who come close.
   *
   * **Note**: It is necessary for a force to be AI controllable in order to be able to create unit groups or build
   * bases from scripts.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.ai_controllable View documentation}
   */
  ai_controllable: boolean
  /**
   * List of logistic networks, grouped by surface.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.logistic_networks View documentation}
   */
  readonly logistic_networks: Record<string, LuaLogisticNetwork[]>
  /**
   * The item production statistics for this force.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.item_production_statistics View documentation}
   */
  readonly item_production_statistics: LuaFlowStatistics
  /**
   * The fluid production statistics for this force.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.fluid_production_statistics View documentation}
   */
  readonly fluid_production_statistics: LuaFlowStatistics
  /**
   * The kill counter statistics for this force.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.kill_count_statistics View documentation}
   */
  readonly kill_count_statistics: LuaFlowStatistics
  /**
   * The entity build statistics for this force (built and mined)
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.entity_build_count_statistics View documentation}
   */
  readonly entity_build_count_statistics: LuaFlowStatistics
  /**
   * Modifies the running speed of all characters in this force by the given value as a percentage. Setting the
   * running modifier to `0.5` makes the character run 50% faster. The minimum value of `-1` reduces the movement
   * speed by 100%, resulting in a speed of `0`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.character_running_speed_modifier View documentation}
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
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.character_inventory_slots_bonus View documentation}
   */
  character_inventory_slots_bonus: uint
  /**
   * The time, in ticks, before a deconstruction order is removed.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.deconstruction_time_to_live View documentation}
   */
  deconstruction_time_to_live: uint
  character_health_bonus: double
  max_successful_attempts_per_tick_per_construction_queue: uint
  max_failed_attempts_per_tick_per_construction_queue: uint
  /**
   * Ability to use zoom-to-world on map.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.zoom_to_world_enabled View documentation}
   */
  zoom_to_world_enabled: boolean
  /**
   * Ability to build ghosts through blueprint or direct ghost placement, or "mine" ghosts when using zoom-to-world.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.zoom_to_world_ghost_building_enabled View documentation}
   */
  zoom_to_world_ghost_building_enabled: boolean
  /**
   * Ability to create new blueprints using empty blueprint item when using zoom-to-world.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.zoom_to_world_blueprint_enabled View documentation}
   */
  zoom_to_world_blueprint_enabled: boolean
  /**
   * Ability to use deconstruction planner when using zoom-to-world.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.zoom_to_world_deconstruction_planner_enabled View documentation}
   */
  zoom_to_world_deconstruction_planner_enabled: boolean
  /**
   * Ability to use custom selection tools when using zoom-to-world.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.zoom_to_world_selection_tool_enabled View documentation}
   */
  zoom_to_world_selection_tool_enabled: boolean
  /**
   * `true` if character requester logistics is enabled.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.character_logistic_requests View documentation}
   */
  character_logistic_requests: boolean
  /**
   * The number of rockets launched.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.rockets_launched View documentation}
   */
  rockets_launched: uint
  /**
   * All of the items that have been launched in rockets.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.items_launched View documentation}
   */
  readonly items_launched: Record<string, uint>
  /**
   * The connected players belonging to this force.
   *
   * This is primarily useful when you want to do some action against all online players of this force.
   *
   * **Note**: This does *not* index using player index. See {@link LuaPlayer.index LuaPlayer::index} on each player
   * instance for the player index.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.connected_players View documentation}
   */
  readonly connected_players: LuaPlayer[]
  mining_drill_productivity_bonus: double
  train_braking_force_bonus: double
  /**
   * Evolution factor of this force.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.evolution_factor View documentation}
   */
  evolution_factor: double
  evolution_factor_by_pollution: double
  evolution_factor_by_time: double
  evolution_factor_by_killing_spawners: double
  /**
   * If friendly fire is enabled for this force.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.friendly_fire View documentation}
   */
  friendly_fire: boolean
  /**
   * If sharing chart data is enabled for this force.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.share_chart View documentation}
   */
  share_chart: boolean
  /**
   * Whether the research queue is available for this force.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.research_queue_enabled View documentation}
   */
  research_queue_enabled: boolean
  /**
   * Unique ID associated with this force.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.index View documentation}
   */
  readonly index: uint
  /**
   * The research queue of this force. The first technology in the array is the currently active one. Reading this
   * attribute gives an array of {@link LuaTechnology}.
   *
   * To write to this, the entire table must be written. Providing an empty table or `nil` will empty the research
   * queue and cancel the current research. Writing to this when the research queue is disabled will simply set the
   * last research in the table as the current research.
   *
   * **Note**: This only allows mods to queue research that this force is able to research in the first place. As an
   * example, an already researched technology or one whose prerequisites are not fulfilled will not be queued, but
   * dropped silently instead.
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.research_queue View documentation}
   */
  research_queue: TechnologyIdentification[] | undefined
  /**
   * Whether research is enabled for this force, see {@link LuaForce.enable_research LuaForce::enable_research} and
   * {@link LuaForce.disable_research LuaForce::disable_research}
   *
   * {@link https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.research_enabled View documentation}
   */
  readonly research_enabled: boolean
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaForce"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Prototype of a fuel category.
 *
 * {@link https://lua-api.factorio.com/latest/LuaFuelCategoryPrototype.html View documentation}
 *
 * @noSelf
 */
interface LuaFuelCategoryPrototype {
  /**
   * Name of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFuelCategoryPrototype.html#LuaFuelCategoryPrototype.name View documentation}
   */
  readonly name: string
  /**
   * Order string of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaFuelCategoryPrototype.html#LuaFuelCategoryPrototype.order View documentation}
   */
  readonly order: string
  readonly localised_name: LocalisedString
  readonly localised_description: LocalisedString
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaFuelCategoryPrototype"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Main toplevel type, provides access to most of the API though its members. An instance of LuaGameScript is available
 * as the global object named `game`.
 *
 * {@link https://lua-api.factorio.com/latest/LuaGameScript.html View documentation}
 *
 * @noSelf
 */
interface LuaGameScript {
  /**
   * Set scenario state.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.set_game_state View documentation}
   */
  set_game_state(params: {
    readonly game_finished: boolean
    readonly player_won: boolean
    readonly next_level: string
    readonly can_continue: boolean
    readonly victorious_force: ForceIdentification
  }): void
  /**
   * Reset scenario state (game_finished, player_won, etc.).
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.reset_game_state View documentation}
   */
  reset_game_state(): void
  /**
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.get_entity_by_tag View documentation}
   *
   * @param tag
   */
  get_entity_by_tag(tag: string): LuaEntity
  /**
   * Show an in-game message dialog.
   *
   * **Note**: Can only be used when the map contains exactly one player.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.show_message_dialog View documentation}
   */
  show_message_dialog(params: {
    /** What the dialog should say */
    readonly text: LocalisedString
    /** Path to an image to show on the dialog */
    readonly image?: string
    /**
     * If specified, dialog will show an arrow pointing to this place. When not specified, the arrow will point to
     * the player's position. (Use `point_to={type="nowhere"}` to remove the arrow entirely.) The dialog itself will
     * be placed near the arrow's target.
     */
    readonly point_to?: GuiArrowSpecification
    /** The gui style to use for this speech bubble. Must be of type speech_bubble. */
    readonly style?: string
    /** Must be of type flow_style. */
    readonly wrapper_frame_style?: string
  }): void
  /**
   * Is this the demo version of Factorio?
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.is_demo View documentation}
   */
  is_demo(): boolean
  /**
   * Forces a reload of the scenario script from the original scenario location.
   *
   * **Note**: This disables the replay if replay is enabled.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.reload_script View documentation}
   */
  reload_script(): void
  /**
   * Forces a reload of all mods.
   *
   * **Note**: This will act like saving and loading from the mod(s) perspective.
   *
   * **Note**: This will do nothing if run in multiplayer.
   *
   * **Note**: This disables the replay if replay is enabled.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.reload_mods View documentation}
   */
  reload_mods(): void
  /**
   * Saves the current configuration of Atlas to a file. This will result in huge file containing all of the game
   * graphics moved to as small space as possible.
   *
   * **Note**: Exists mainly for debugging reasons.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.save_atlas View documentation}
   */
  save_atlas(): void
  /**
   * Run internal consistency checks. Allegedly prints any errors it finds.
   *
   * **Note**: Exists mainly for debugging reasons.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.check_consistency View documentation}
   */
  check_consistency(): void
  /**
   * Regenerate autoplacement of some entities on all surfaces. This can be used to autoplace newly-added entities.
   *
   * **Note**: All specified entity prototypes must be autoplacable.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.regenerate_entity View documentation}
   *
   * @param entities - Prototype names of entity or entities to autoplace.
   */
  regenerate_entity(entities: string | string[]): void
  /**
   * Take a screenshot and save it to a file. The filename should include a file extension indicating the desired
   * image format. Supports `.png`, `.jpg` / `.jpeg`, `.tga` and `.bmp`.
   *
   * **Note**: If Factorio is running headless, this function will do nothing.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.take_screenshot View documentation}
   */
  take_screenshot(params: {
    /** The player to focus on. Defaults to the local player. */
    readonly player?: PlayerIdentification
    /** If defined, the screenshot will only be taken for this player. */
    readonly by_player?: PlayerIdentification
    /** If defined, the screenshot will be taken on this surface. */
    readonly surface?: SurfaceIdentification
    /** If defined, the screenshot will be centered on this position. Otherwise, the screenshot will center on `player`. */
    readonly position?: Position
    /**
     * The maximum allowed resolution is 16384x16384 (8192x8192 when `anti_alias` is `true`), but the maximum
     * recommended resolution is 4096x4096 (resp. 2048x2048).
     */
    readonly resolution?: Position
    /** The map zoom to take the screenshot at. Defaults to `1`. */
    readonly zoom?: double
    /** The sub-path in `"script-output"` to save the screenshot to. Defaults to `"screenshot.png"`. */
    readonly path?: string
    /** Whether to include GUIs in the screenshot or not. Defaults to `false`. */
    readonly show_gui?: boolean
    /** Whether to include entity info ("Alt mode") or not. Defaults to `false`. */
    readonly show_entity_info?: boolean
    /**
     * When `true` and when `player` is specified, the building preview for the item in the player's cursor will
     * also be rendered. Defaults to `false`.
     */
    readonly show_cursor_building_preview?: boolean
    /** Whether to render in double resolution and downscale the result (including GUI). Defaults to `false`. */
    readonly anti_alias?: boolean
    /**
     * The `.jpg` render quality as a percentage (from 0% to 100% inclusive), if used. A lower value means a more
     * compressed image. Defaults to `80`.
     */
    readonly quality?: int
    /** Whether to save the screenshot even during replay playback. Defaults to `false`. */
    readonly allow_in_replay?: boolean
    /** Overrides the current surface daytime for the duration of screenshot rendering. */
    readonly daytime?: double
    /** Overrides the tick of water animation, if animated water is enabled. */
    readonly water_tick?: uint
    /**
     * Screenshot requests are processed in between game update and render. The game may skip rendering (ie. drop
     * frames) if the previous frame has not finished rendering or the game simulation starts to fall below 60
     * updates per second. If `force_render` is set to `true`, the game won't drop frames and process the screenshot
     * request at the end of the update in which the request was created. This is not honored on multiplayer clients
     * that are catching up to server. Defaults to `false`.
     */
    readonly force_render?: boolean
  }): void
  /**
   * Forces the screenshot saving system to wait until all queued screenshots have been written to disk.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.set_wait_for_screenshots_to_finish View documentation}
   */
  set_wait_for_screenshots_to_finish(): void
  /**
   * Take a screenshot of the technology screen and save it to a file. The filename should include a file extension
   * indicating the desired image format. Supports `.png`, `.jpg` / `.jpeg`, `.tga` and `.bmp`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.take_technology_screenshot View documentation}
   */
  take_technology_screenshot(params: {
    /** The force whose technology to screenshot. If not given, the `"player`" force is used. */
    readonly force?: ForceIdentification
    /** The sub-path in `"script-output"` to save the screenshot to. Defaults to `"technology-screenshot.png"`. */
    readonly path?: string
    /** If given, the screenshot will only be taken for this player. */
    readonly by_player?: PlayerIdentification
    /** The technology to highlight. */
    readonly selected_technology?: TechnologyIdentification
    /**
     * If `true`, disabled technologies will be skipped. Their successors will be attached to the disabled
     * technology's parents. Defaults to `false`.
     */
    readonly skip_disabled?: boolean
    /**
     * The `.jpg` render quality as a percentage (from 0% to 100% inclusive), if used. A lower value means a more
     * compressed image. Defaults to `80`.
     */
    readonly quality?: int
  }): void
  /**
   * Convert a table to a JSON string
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.table_to_json View documentation}
   *
   * @param data
   */
  table_to_json(data: table): string
  /**
   * Convert a JSON string to a table.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.json_to_table View documentation}
   *
   * @param json - The string to convert.
   * @returns The returned object, or `nil` if the json was invalid.
   */
  json_to_table(json: string): AnyBasic | undefined
  /**
   * Write a string to a file.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.write_file View documentation}
   *
   * @param filename - Path to the file to write to.
   * @param data - File content
   * @param append - When `true`, this will append to the end of the file. Defaults to `false`, which will overwrite
   *   any pre-existing file with the new data.
   * @param for_player - If given, the file will only be written for this player_index. 0 means only the server if one exists.
   */
  write_file(filename: string, data: LocalisedString, append?: boolean, for_player?: uint): void
  /**
   * Remove file or directory. Given path is taken relative to the script output directory. Can be used to remove
   * files created by {@link LuaGameScript.write_file LuaGameScript::write_file}.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.remove_path View documentation}
   *
   * @param path - Path to remove, relative to the script output directory
   */
  remove_path(path: string): void
  /**
   * Remove players who are currently not connected from the map.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.remove_offline_players View documentation}
   *
   * @param players - List of players to remove. If not specified, remove all offline players.
   */
  remove_offline_players(players?: (LuaPlayer | string)[]): void
  /**
   * Force a CRC check. Tells all peers to calculate their current map CRC; these CRC are then compared against each
   * other. If a mismatch is detected, the game is desynced and some peers are forced to reconnect.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.force_crc View documentation}
   */
  force_crc(): void
  /**
   * Create a new force.
   *
   * **Note**: The game currently supports a maximum of 64 forces, including the three built-in forces. This means
   * that a maximum of 61 new forces may be created.
   *
   * **Note**: Force names must be unique.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.create_force View documentation}
   *
   * @param force - Name of the new force
   * @returns The force that was just created
   */
  create_force(force: string): LuaForce
  /**
   * Marks two forces to be merge together. All entities in the source force will be reassigned to the target force.
   * The source force will then be destroyed.
   *
   * **Note**: The three built-in forces -- player, enemy and neutral -- can't be destroyed. I.e. they can't be used
   * as the source argument to this function.
   *
   * **Note**: The source force is not merged until the end of the current tick or if called during the
   * {@link OnForcesMergingEvent on_forces_merging} event or {@link OnForcesMergedEvent on_forces_merged} event the end
   * of the next tick.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.merge_forces View documentation}
   *
   * @param source - The force to remove
   * @param destination - The force to reassign all entities to
   */
  merge_forces(source: ForceIdentification, destination: ForceIdentification): void
  /**
   * Create a new surface
   *
   * **Note**: The game currently supports a maximum of 4,294,967,295 surfaces, including the default surface.
   *
   * **Note**: Surface names must be unique
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.create_surface View documentation}
   *
   * @param name - Name of the new surface
   * @param settings - Map generation settings
   * @returns The surface that was just created
   */
  create_surface(name: string, settings?: MapGenSettings): LuaSurface
  /**
   * Instruct the server to save the map.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.server_save View documentation}
   *
   * @param name - Save name. If not specified, writes into the currently-running save.
   */
  server_save(name?: string): void
  /**
   * Instruct the game to perform an auto-save.
   *
   * **Note**: Only the server will save in multiplayer. In single player a standard auto-save is triggered.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.auto_save View documentation}
   *
   * @param name - The autosave name if any. Saves will be named _autosave-*name* when provided.
   */
  auto_save(name?: string): void
  /**
   * Deletes the given surface and all entities on it.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.delete_surface View documentation}
   *
   * @param surface - The surface to be deleted. Currently the primary surface (1, 'nauvis') cannot be deleted.
   */
  delete_surface(surface: string | LuaSurface): void
  /**
   * Disables replay saving for the current save file. Once done there's no way to re-enable replay saving for the
   * save file without loading an old save.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.disable_replay View documentation}
   */
  disable_replay(): void
  /**
   * Disables tutorial triggers, that unlock new tutorials and show notices about unlocked tutorials.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.disable_tutorial_triggers View documentation}
   */
  disable_tutorial_triggers(): void
  /**
   * Converts the given direction into the string version of the direction.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.direction_to_string View documentation}
   *
   * @param direction
   */
  direction_to_string(direction: defines.direction): void
  /**
   * Print text to the chat console all players.
   *
   * **Note**: Messages that are identical to a message sent in the last 60 ticks are not printed again.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.print View documentation}
   *
   * @param message
   * @param color
   */
  print(message: LocalisedString, color?: Color): void
  /**
   * Creates a deterministic standalone random generator with the given seed or if a seed is not provided the initial
   * map seed is used.
   *
   * **Note**: *Make sure* you actually want to use this over math.random(...) as this provides entirely different
   * functionality over math.random(...).
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.create_random_generator View documentation}
   *
   * @param seed
   */
  create_random_generator(seed?: uint): LuaRandomGenerator
  /**
   * Goes over all items, entities, tiles, recipes, technologies among other things and logs if the locale is incorrect.
   *
   * **Note**: Also prints true/false if called from the console.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.check_prototype_translations View documentation}
   */
  check_prototype_translations(): void
  /**
   * Play a sound for every player in the game.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.play_sound View documentation}
   */
  play_sound(params: {
    /** The sound to play. */
    readonly path: SoundPath
    /** Where the sound should be played. If not given, it's played at the current position of each player. */
    readonly position?: Position
    /** The volume of the sound to play. Must be between 0 and 1 inclusive. */
    readonly volume_modifier?: double
    /** The volume mixer to play the sound through. Defaults to the default mixer for the given sound type. */
    readonly override_sound_type?: SoundType
  }): void
  /**
   * Checks if the given SoundPath is valid.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.is_valid_sound_path View documentation}
   *
   * @param sound_path - Path to the sound.
   */
  is_valid_sound_path(sound_path: SoundPath): boolean
  /**
   * Checks if the given SpritePath is valid and contains a loaded sprite.
   *
   * **Note**: The existence of the image is not checked for paths of type `file`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.is_valid_sprite_path View documentation}
   *
   * @param sprite_path - Path to the image.
   */
  is_valid_sprite_path(sprite_path: SpritePath): boolean
  /**
   * Kicks the given player from this multiplayer game. Does nothing if this is a single player game or if the player
   * running this isn't an admin.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.kick_player View documentation}
   *
   * @param player - The player to kick.
   * @param reason - The reason given if any.
   */
  kick_player(player: PlayerIdentification, reason?: LocalisedString): void
  /**
   * Bans the given player from this multiplayer game. Does nothing if this is a single player game of if the player
   * running this isn't an admin.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.ban_player View documentation}
   *
   * @param player - The player to ban.
   * @param reason - The reason given if any.
   */
  ban_player(player: PlayerIdentification, reason?: LocalisedString): void
  /**
   * Unbans the given player from this multiplayer game. Does nothing if this is a single player game of if the player
   * running this isn't an admin.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.unban_player View documentation}
   *
   * @param player - The player to unban.
   */
  unban_player(player: PlayerIdentification): void
  /**
   * Purges the given players messages from the game. Does nothing if the player running this isn't an admin.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.purge_player View documentation}
   *
   * @param player - The player to purge.
   */
  purge_player(player: PlayerIdentification): void
  /**
   * Mutes the given player. Does nothing if the player running this isn't an admin.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.mute_player View documentation}
   *
   * @param player - The player to mute.
   */
  mute_player(player: PlayerIdentification): void
  /**
   * Unmutes the given player. Does nothing if the player running this isn't an admin.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.unmute_player View documentation}
   *
   * @param player - The player to unmute.
   */
  unmute_player(player: PlayerIdentification): void
  /**
   * Counts how many distinct groups of pipes exist in the world.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.count_pipe_groups View documentation}
   */
  count_pipe_groups(): void
  /**
   * Is the map loaded is multiplayer?
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.is_multiplayer View documentation}
   */
  is_multiplayer(): boolean
  /**
   * Gets the number of entities that are active (updated each tick).
   *
   * **Note**: This is very expensive to calculate.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.get_active_entities_count View documentation}
   *
   * @param surface - If give, only the entities active on this surface are counted.
   */
  get_active_entities_count(surface?: SurfaceIdentification): uint
  /**
   * Gets the map exchange string for the map generation settings that were used to create this map.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.get_map_exchange_string View documentation}
   */
  get_map_exchange_string(): string
  /**
   * Convert a map exchange string to map gen settings and map settings.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.parse_map_exchange_string View documentation}
   *
   * @param map_exchange_string
   */
  parse_map_exchange_string(map_exchange_string: string): MapExchangeStringData
  /**
   * Gets train stops matching the given filters.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.get_train_stops View documentation}
   */
  get_train_stops(params?: {
    readonly name?: string | string[]
    readonly surface?: SurfaceIdentification
    readonly force?: ForceIdentification
  }): LuaEntity[]
  /**
   * Gets the given player or returns `nil` if no player is found.
   *
   * **Note**: This is a shortcut for game.players[...]
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.get_player View documentation}
   *
   * @param player - The player index or name.
   */
  get_player(player: uint | string): LuaPlayer | undefined
  /**
   * Gets the given surface or returns `nil` if no surface is found.
   *
   * **Note**: This is a shortcut for game.surfaces[...]
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.get_surface View documentation}
   *
   * @param surface - The surface index or name.
   */
  get_surface(surface: uint | string): LuaSurface | undefined
  /**
   * Creates a {@link LuaProfiler}, which is used for measuring script performance.
   *
   * **Note**: LuaProfiler cannot be serialized.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.create_profiler View documentation}
   *
   * @param stopped - Create the timer stopped
   */
  create_profiler(stopped?: boolean): LuaProfiler
  /**
   * Evaluate an expression, substituting variables as provided. For details on the formula, see the relevant page on
   * the {@link https://wiki.factorio.com/Prototype/Technology#unit Factorio wiki}.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.evaluate_expression View documentation}
   *
   * @example
   *   Calculate the number of research units required to unlock mining productivity level 10.
   *
   *   ```lua
   *   local formula = game.forces["player"].technologies["mining-productivity-4"].research_unit_count_formula
   *   local units = game.evaluate_expression(formula, { L = 10, l = 10 })
   *   ```
   *
   * @param expression - The expression to evaluate.
   * @param variables - Variables to be substituted.
   */
  evaluate_expression(expression: string, variables?: Record<string, double>): double
  /**
   * Returns a dictionary of all LuaEntityPrototypes that fit the given filters. The prototypes are indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.get_filtered_entity_prototypes View documentation}
   *
   * @example
   *   Get every entity prototype that can craft recipes involving fluids in the way some assembling machines can.
   *
   *   ```lua
   *   local prototypes = game.get_filtered_entity_prototypes{{filter="crafting-category", crafting_category="crafting-with-fluid"}}
   *   ```
   *
   * @param filters
   */
  get_filtered_entity_prototypes(filters: EntityPrototypeFilter[]): LuaCustomTable<string, LuaEntityPrototype>
  /**
   * Returns a dictionary of all LuaItemPrototypes that fit the given filters. The prototypes are indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.get_filtered_item_prototypes View documentation}
   *
   * @example
   *   Get every item prototype that, when launched with a rocket, produces a result.
   *
   *   ```lua
   *   local prototypes = game.get_filtered_item_prototypes{{filter="has-rocket-launch-products"}}
   *   ```
   *
   * @param filters
   */
  get_filtered_item_prototypes(filters: ItemPrototypeFilter[]): LuaCustomTable<string, LuaItemPrototype>
  /**
   * Returns a dictionary of all LuaEquipmentPrototypes that fit the given filters. The prototypes are indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.get_filtered_equipment_prototypes View documentation}
   *
   * @example
   *   Get every equipment prototype that functions as a battery.
   *
   *   ```lua
   *   local prototypes = game.get_filtered_equipment_prototypes{{filter="type", type="battery-equipment"}}
   *   ```
   *
   * @param filters
   */
  get_filtered_equipment_prototypes(filters: EquipmentPrototypeFilter[]): LuaCustomTable<string, LuaEquipmentPrototype>
  /**
   * Returns a dictionary of all LuaModSettingPrototypes that fit the given filters. The prototypes are indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.get_filtered_mod_setting_prototypes View documentation}
   *
   * @example
   *   Get every mod setting prototype that belongs to the specified mod.
   *
   *   ```lua
   *   local prototypes = game.get_filtered_mod_setting_prototypes{{filter="mod", mod="space-exploration"}}
   *   ```
   *
   * @param filters
   */
  get_filtered_mod_setting_prototypes(
    filters: ModSettingPrototypeFilter[]
  ): LuaCustomTable<string, LuaModSettingPrototype>
  /**
   * Returns a dictionary of all LuaAchievementPrototypes that fit the given filters. The prototypes are indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.get_filtered_achievement_prototypes View documentation}
   *
   * @example
   *   Get every achievement prototype that is not allowed to be completed on the peaceful difficulty setting.
   *
   *   ```lua
   *   local prototypes = game.get_filtered_achievement_prototypes{{filter="allowed-without-fight", invert=true}}
   *   ```
   *
   * @param filters
   */
  get_filtered_achievement_prototypes(
    filters: AchievementPrototypeFilter[]
  ): LuaCustomTable<string, LuaAchievementPrototype>
  /**
   * Returns a dictionary of all LuaTilePrototypes that fit the given filters. The prototypes are indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.get_filtered_tile_prototypes View documentation}
   *
   * @example
   *   Get every tile prototype that improves a player's walking speed by at least 50%.
   *
   *   ```lua
   *   local prototypes = game.get_filtered_tile_prototypes{{filter="walking-speed-modifier", comparison="≥", value=1.5}}
   *   ```
   *
   * @param filters
   */
  get_filtered_tile_prototypes(filters: TilePrototypeFilter[]): LuaCustomTable<string, LuaTilePrototype>
  /**
   * Returns a dictionary of all LuaDecorativePrototypes that fit the given filters. The prototypes are indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.get_filtered_decorative_prototypes View documentation}
   *
   * @example
   *   Get every decorative prototype that is auto-placed.
   *
   *   ```lua
   *   local prototypes = game.get_filtered_decorative_prototypes{{filter="autoplace"}}
   *   ```
   *
   * @param filters
   */
  get_filtered_decorative_prototypes(
    filters: DecorativePrototypeFilter[]
  ): LuaCustomTable<string, LuaDecorativePrototype>
  /**
   * Returns a dictionary of all LuaFluidPrototypes that fit the given filters. The prototypes are indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.get_filtered_fluid_prototypes View documentation}
   *
   * @example
   *   Get every fluid prototype that has a heat capacity of exactly `100`.
   *
   *   ```lua
   *   local prototypes = game.get_filtered_fluid_prototypes{{filter="heat-capacity", comparison="=", value=100}}
   *   ```
   *
   * @param filters
   */
  get_filtered_fluid_prototypes(filters: FluidPrototypeFilter[]): LuaCustomTable<string, LuaFluidPrototype>
  /**
   * Returns a dictionary of all LuaRecipePrototypes that fit the given filters. The prototypes are indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.get_filtered_recipe_prototypes View documentation}
   *
   * @example
   *   Get every recipe prototype that takes less than half a second to craft (at crafting speed `1`).
   *
   *   ```lua
   *   local prototypes = game.get_filtered_recipe_prototypes{{filter="energy", comparison="<", value=0.5}}
   *   ```
   *
   * @param filters
   */
  get_filtered_recipe_prototypes(filters: RecipePrototypeFilter[]): LuaCustomTable<string, LuaRecipePrototype>
  /**
   * Returns a dictionary of all LuaTechnologyPrototypes that fit the given filters. The prototypes are indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.get_filtered_technology_prototypes View documentation}
   *
   * @example
   *   Get every technology prototype that can be researched at the start of the game.
   *
   *   ```lua
   *   local prototypes = game.get_filtered_technology_prototypes{{filter="has-prerequisites", invert=true}}
   *   ```
   *
   * @param filters
   */
  get_filtered_technology_prototypes(
    filters: TechnologyPrototypeFilter[]
  ): LuaCustomTable<string, LuaTechnologyPrototype>
  /**
   * Creates an inventory that is not owned by any game object. It can be resized later with
   * {@link LuaInventory.resize LuaInventory::resize}.
   *
   * **Note**: Make sure to destroy it when you are done with it with {@link LuaInventory.destroy LuaInventory::destroy}.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.create_inventory View documentation}
   *
   * @param size - The number of slots the inventory initially has.
   */
  create_inventory(size: uint16): LuaInventory
  /**
   * Gets the inventories created through {@link LuaGameScript.create_inventory LuaGameScript::create_inventory}
   *
   * **Note**: Inventories created through console commands will be owned by `"core"`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.get_script_inventories View documentation}
   *
   * @param mod - The mod who's inventories to get. If not provided all inventories are returned.
   * @returns A mapping of mod name to array of inventories owned by that mod.
   */
  get_script_inventories(mod?: string): Record<string, LuaInventory[]>
  /**
   * Resets the amount of time played for this map.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.reset_time_played View documentation}
   */
  reset_time_played(): void
  /**
   * Deflates and base64 encodes the given string.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.encode_string View documentation}
   *
   * @param string - The string to encode.
   * @returns The encoded string or `nil` if the encode failed.
   */
  encode_string(string: string): string | undefined
  /**
   * Base64 decodes and inflates the given string.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.decode_string View documentation}
   *
   * @param string - The string to decode.
   * @returns The decoded string or `nil` if the decode failed.
   */
  decode_string(string: string): string | undefined
  /**
   * The player typing at the console - `nil` in all other instances. See
   * {@link LuaGameScript.players LuaGameScript::players} for accessing all players.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.player View documentation}
   */
  readonly player: LuaPlayer | undefined
  /**
   * Get a table of all the players that currently exist. This sparse table allows you to find players by indexing it
   * with either their `name` or `index`. Iterating this table with `pairs()` will only iterate the array part of the
   * table. Iterating with `ipairs()` will not work at all.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.players View documentation}
   */
  readonly players: LuaCustomTable<uint | string, LuaPlayer>
  /**
   * The currently active set of map settings. Even though this property is marked as read-only, the members of the
   * dictionary that is returned can be modified mid-game.
   *
   * **Note**: This does not contain difficulty settings, use
   * {@link LuaGameScript.difficulty_settings LuaGameScript::difficulty_settings} instead.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.map_settings View documentation}
   */
  readonly map_settings: MapSettings
  /**
   * The currently active set of difficulty settings. Even though this property is marked as read-only, the members of
   * the dictionary that is returned can be modified mid-game. This is however not recommended as different
   * difficulties can have differing technology and recipe trees, which can cause problems for players.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.difficulty_settings View documentation}
   *
   * @example
   *   This will set the technology price multiplier to 12.
   *
   *   ```lua
   *   game.difficulty_settings.technology_price_multiplier = 12
   *   ```
   */
  readonly difficulty_settings: DifficultySettings
  /**
   * Current scenario difficulty.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.difficulty View documentation}
   */
  readonly difficulty: defines.difficulty
  /**
   * Get a table of all the forces that currently exist. This sparse table allows you to find forces by indexing it
   * with either their `name` or `index`. Iterating this table with `pairs()` will only iterate the array part of the
   * table. Iterating with `ipairs()` will not work at all.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.forces View documentation}
   */
  readonly forces: LuaCustomTable<uint | string, LuaForce>
  /**
   * A dictionary containing every LuaEntityPrototype indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.entity_prototypes View documentation}
   */
  readonly entity_prototypes: LuaCustomTable<string, LuaEntityPrototype>
  /**
   * A dictionary containing every LuaItemPrototype indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.item_prototypes View documentation}
   */
  readonly item_prototypes: LuaCustomTable<string, LuaItemPrototype>
  /**
   * A dictionary containing every LuaFluidPrototype indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.fluid_prototypes View documentation}
   */
  readonly fluid_prototypes: LuaCustomTable<string, LuaFluidPrototype>
  /**
   * A dictionary containing every LuaTilePrototype indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.tile_prototypes View documentation}
   */
  readonly tile_prototypes: LuaCustomTable<string, LuaTilePrototype>
  /**
   * A dictionary containing every LuaEquipmentPrototype indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.equipment_prototypes View documentation}
   */
  readonly equipment_prototypes: LuaCustomTable<string, LuaEquipmentPrototype>
  /**
   * A dictionary containing every LuaDamagePrototype indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.damage_prototypes View documentation}
   */
  readonly damage_prototypes: LuaCustomTable<string, LuaDamagePrototype>
  /**
   * A dictionary containing every LuaVirtualSignalPrototype indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.virtual_signal_prototypes View documentation}
   */
  readonly virtual_signal_prototypes: LuaCustomTable<string, LuaVirtualSignalPrototype>
  /**
   * A dictionary containing every LuaEquipmentGridPrototype indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.equipment_grid_prototypes View documentation}
   */
  readonly equipment_grid_prototypes: LuaCustomTable<string, LuaEquipmentGridPrototype>
  /**
   * A dictionary containing every LuaRecipePrototype indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.recipe_prototypes View documentation}
   */
  readonly recipe_prototypes: LuaCustomTable<string, LuaRecipePrototype>
  /**
   * A dictionary containing every {@link LuaTechnologyPrototype} indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.technology_prototypes View documentation}
   */
  readonly technology_prototypes: LuaCustomTable<string, LuaTechnologyPrototype>
  /**
   * A dictionary containing every LuaDecorativePrototype indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.decorative_prototypes View documentation}
   */
  readonly decorative_prototypes: LuaCustomTable<string, LuaDecorativePrototype>
  /**
   * A dictionary containing every LuaParticlePrototype indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.particle_prototypes View documentation}
   */
  readonly particle_prototypes: LuaCustomTable<string, LuaParticlePrototype>
  /**
   * A dictionary containing every LuaAutoplaceControlPrototype indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.autoplace_control_prototypes View documentation}
   */
  readonly autoplace_control_prototypes: LuaCustomTable<string, LuaAutoplaceControlPrototype>
  /**
   * A dictionary containing every LuaNoiseLayerPrototype indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.noise_layer_prototypes View documentation}
   */
  readonly noise_layer_prototypes: LuaCustomTable<string, LuaNoiseLayerPrototype>
  /**
   * A dictionary containing every LuaModSettingPrototype indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.mod_setting_prototypes View documentation}
   */
  readonly mod_setting_prototypes: LuaCustomTable<string, LuaModSettingPrototype>
  /**
   * A dictionary containing every LuaCustomInputPrototype indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.custom_input_prototypes View documentation}
   */
  readonly custom_input_prototypes: LuaCustomTable<string, LuaCustomInputPrototype>
  /**
   * A dictionary containing every LuaAmmoCategoryPrototype indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.ammo_category_prototypes View documentation}
   */
  readonly ammo_category_prototypes: LuaCustomTable<string, LuaAmmoCategoryPrototype>
  /**
   * A dictionary containing every LuaNamedNoiseExpression indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.named_noise_expressions View documentation}
   */
  readonly named_noise_expressions: LuaCustomTable<string, LuaNamedNoiseExpression>
  /**
   * A dictionary containing every ItemSubgroup indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.item_subgroup_prototypes View documentation}
   */
  readonly item_subgroup_prototypes: LuaCustomTable<string, LuaGroup>
  /**
   * A dictionary containing every ItemGroup indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.item_group_prototypes View documentation}
   */
  readonly item_group_prototypes: LuaCustomTable<string, LuaGroup>
  /**
   * A dictionary containing every LuaFuelCategoryPrototype indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.fuel_category_prototypes View documentation}
   */
  readonly fuel_category_prototypes: LuaCustomTable<string, LuaFuelCategoryPrototype>
  /**
   * A dictionary containing every LuaResourceCategoryPrototype indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.resource_category_prototypes View documentation}
   */
  readonly resource_category_prototypes: LuaCustomTable<string, LuaResourceCategoryPrototype>
  /**
   * A dictionary containing every LuaAchievementPrototype indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.achievement_prototypes View documentation}
   */
  readonly achievement_prototypes: LuaCustomTable<string, LuaAchievementPrototype>
  /**
   * A dictionary containing every LuaModuleCategoryPrototype indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.module_category_prototypes View documentation}
   */
  readonly module_category_prototypes: LuaCustomTable<string, LuaModuleCategoryPrototype>
  /**
   * A dictionary containing every LuaEquipmentCategoryPrototype indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.equipment_category_prototypes View documentation}
   */
  readonly equipment_category_prototypes: LuaCustomTable<string, LuaEquipmentCategoryPrototype>
  /**
   * A dictionary containing every LuaTrivialSmokePrototype indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.trivial_smoke_prototypes View documentation}
   */
  readonly trivial_smoke_prototypes: LuaCustomTable<string, LuaTrivialSmokePrototype>
  /**
   * A dictionary containing every LuaShortcutPrototype indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.shortcut_prototypes View documentation}
   */
  readonly shortcut_prototypes: LuaCustomTable<string, LuaShortcutPrototype>
  /**
   * A dictionary containing every LuaRecipeCategoryPrototype indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.recipe_category_prototypes View documentation}
   */
  readonly recipe_category_prototypes: LuaCustomTable<string, LuaRecipeCategoryPrototype>
  /**
   * A dictionary containing every LuaFontPrototype indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.font_prototypes View documentation}
   */
  readonly font_prototypes: LuaCustomTable<string, LuaFontPrototype>
  /**
   * A dictionary containing every MapGenPreset indexed by `name`.
   *
   * **Note**: A MapGenPreset is an exact copy of the prototype table provided from the data stage.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.map_gen_presets View documentation}
   */
  readonly map_gen_presets: LuaCustomTable<string, MapGenPreset>
  /**
   * The styles that {@link LuaGuiElement} can use, indexed by `name`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.styles View documentation}
   */
  readonly styles: LuaCustomTable<string, string>
  /**
   * Current map tick.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.tick View documentation}
   */
  readonly tick: uint
  /**
   * The number of ticks since this game was 'created'. A game is 'created' either by using "new game" or "new game
   * from scenario".
   *
   * **Note**: This differs over {@link LuaGameScript.tick LuaGameScript::tick} in that making a game from a scenario
   * always starts with ticks_played value at 0 even if the scenario has its own level data where the
   * {@link LuaGameScript.tick LuaGameScript::tick} is > 0.
   *
   * **Note**: This value has no relation with {@link LuaGameScript.tick LuaGameScript::tick} and can be completely
   * different values.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.ticks_played View documentation}
   */
  readonly ticks_played: uint
  /**
   * If the tick has been paused. This means that entity update has been paused.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.tick_paused View documentation}
   */
  tick_paused: boolean
  /**
   * The number of ticks to be run while the tick is paused. When
   * {@link LuaGameScript.tick_paused LuaGameScript::tick_paused} is true, ticks_to_run behaves the following way:
   * While this is > 0, the entity update is running normally and this value is decremented every tick. When this
   * reaches 0, the game will pause again.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.ticks_to_run View documentation}
   */
  ticks_to_run: uint
  /**
   * True while the victory screen is shown.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.finished View documentation}
   */
  readonly finished: boolean
  /**
   * True after players finished the game and clicked "continue".
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.finished_but_continuing View documentation}
   */
  readonly finished_but_continuing: boolean
  /**
   * Speed to update the map at. 1.0 is normal speed -- 60 UPS.
   *
   * **Note**: Minimum value is 0.01.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.speed View documentation}
   */
  speed: float
  /**
   * Get a table of all the surfaces that currently exist. This sparse table allows you to find surfaces by indexing
   * it with either their `name` or `index`. Iterating this table with `pairs()` will only iterate the array part of
   * the table. Iterating with `ipairs()` will not work at all.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.surfaces View documentation}
   */
  readonly surfaces: LuaCustomTable<uint | string, LuaSurface>
  /**
   * The active mods versions. The keys are mod names, the values are the versions.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.active_mods View documentation}
   *
   * @example
   *   This will print the names and versions of active mods to player p's console.
   *
   *   ```lua
   *   for name, version in pairs(game.active_mods) do
   *   p.print(name .. " version " .. version)
   *   end
   *   ```
   */
  readonly active_mods: Record<string, string>
  /**
   * The players that are currently online.
   *
   * This is primarily useful when you want to do some action against all online players.
   *
   * **Note**: This does *not* index using player index. See {@link LuaPlayer.index LuaPlayer::index} on each player
   * instance for the player index.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.connected_players View documentation}
   */
  readonly connected_players: LuaPlayer[]
  readonly permissions: LuaPermissionGroups
  /**
   * Array of the names of all the backers that supported the game development early on. These are used as names for
   * labs, locomotives, radars, roboports, and train stops.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.backer_names View documentation}
   */
  readonly backer_names: LuaCustomTable<uint, string>
  /**
   * The default map gen settings for this save.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.default_map_gen_settings View documentation}
   */
  readonly default_map_gen_settings: MapGenSettings
  /**
   * Determines if enemy land mines are completely invisible or not.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.enemy_has_vision_on_land_mines View documentation}
   */
  enemy_has_vision_on_land_mines: boolean
  /**
   * True by default. Can be used to disable autosaving. Make sure to turn it back on soon after.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.autosave_enabled View documentation}
   */
  autosave_enabled: boolean
  /**
   * True by default. Can be used to disable the highlighting of resource patches when they are hovered on the map.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.draw_resource_selection View documentation}
   */
  draw_resource_selection: boolean
  /**
   * The pollution statistics for this map.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.pollution_statistics View documentation}
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
  /** This object's name. */
  readonly object_name: "LuaGameScript"
}

/**
 * An abstract base class for behaviors that support switching the entity on or off based on some condition.
 *
 * {@link https://lua-api.factorio.com/latest/LuaGenericOnOffControlBehavior.html View documentation}
 *
 * @noSelf
 */
interface LuaGenericOnOffControlBehavior extends LuaControlBehavior {
  /**
   * If the entity is currently disabled because of the control behavior.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGenericOnOffControlBehavior.html#LuaGenericOnOffControlBehavior.disabled View documentation}
   */
  readonly disabled: boolean
  /**
   * The circuit condition.
   *
   * **Note**: `condition` may be `nil` in order to clear the circuit condition.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGenericOnOffControlBehavior.html#LuaGenericOnOffControlBehavior.circuit_condition View documentation}
   *
   * @example
   *   Tell an entity to be active (e.g. a lamp to be lit) when it receives a circuit signal of more than 4 chain signals.
   *
   *   ```lua
   *   a_behavior.circuit_condition = {condition={comparator=">",
   *   first_signal={type="item", name="rail-chain-signal"},
   *   constant=4}}
   *   ```
   */
  circuit_condition: CircuitConditionDefinition
  /**
   * The logistic condition.
   *
   * **Note**: `condition` may be `nil` in order to clear the logistic condition.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGenericOnOffControlBehavior.html#LuaGenericOnOffControlBehavior.logistic_condition View documentation}
   *
   * @example
   *   Tell an entity to be active (e.g. a lamp to be lit) when the logistics network it's connected to has more than four chain signals.
   *
   *   ```lua
   *   a_behavior.logistic_condition = {condition={comparator=">",
   *   first_signal={type="item", name="rail-chain-signal"},
   *   constant=4}}
   *   ```
   */
  logistic_condition: CircuitConditionDefinition
  /**
   * `true` if this should connect to the logistic network.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGenericOnOffControlBehavior.html#LuaGenericOnOffControlBehavior.connect_to_logistic_network View documentation}
   */
  connect_to_logistic_network: boolean
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: string
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Item group or subgroup.
 *
 * {@link https://lua-api.factorio.com/latest/LuaGroup.html View documentation}
 *
 * @noSelf
 */
interface LuaGroup {
  readonly name: string
  /**
   * Localised name of the group.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGroup.html#LuaGroup.localised_name View documentation}
   */
  readonly localised_name: LocalisedString
  readonly type: string
  /**
   * The parent group if any; `nil` if none.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGroup.html#LuaGroup.group View documentation}
   */
  readonly group: LuaGroup | undefined
  /**
   * Subgroups of this group.
   *
   * **Note**: Can only be used on groups, not on subgroups.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGroup.html#LuaGroup.subgroups View documentation}
   */
  readonly subgroups: LuaGroup[]
  /**
   * The additional order value used in recipe ordering.
   *
   * **Note**: Can only be used on groups, not on subgroups.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGroup.html#LuaGroup.order_in_recipe View documentation}
   */
  readonly order_in_recipe: string
  readonly order: string
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaGroup"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * The root of the GUI. This type houses the root elements, `top`, `left`, `center`, `goal`, and `screen`, to which
 * other elements can be added to be displayed on screen.
 *
 * **Note**: Every player can have a different GUI state.
 *
 * {@link https://lua-api.factorio.com/latest/LuaGui.html View documentation}
 *
 * @noSelf
 */
interface LuaGui {
  /**
   * Returns `true` if sprite_path is valid and contains loaded sprite, otherwise `false`. Sprite path of type `file`
   * doesn't validate if file exists.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGui.html#LuaGui.is_valid_sprite_path View documentation}
   *
   * @param sprite_path - Path to a image.
   */
  is_valid_sprite_path(sprite_path: SpritePath): boolean
  /**
   * The player who owns this gui.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGui.html#LuaGui.player View documentation}
   */
  readonly player: LuaPlayer
  /**
   * The children GUI elements mapped by name <> element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGui.html#LuaGui.children View documentation}
   */
  readonly children: Record<string, LuaGuiElement>
  /**
   * The top part of the GUI. It is a flow element inside a scroll pane element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGui.html#LuaGui.top View documentation}
   */
  readonly top: LuaGuiElement
  /**
   * The left part of the GUI. It is a flow element inside a scroll pane element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGui.html#LuaGui.left View documentation}
   */
  readonly left: LuaGuiElement
  /**
   * The center part of the GUI. It is a flow element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGui.html#LuaGui.center View documentation}
   */
  readonly center: LuaGuiElement
  /**
   * The flow used in the objectives window. It is a flow element. The objectives window is only visible when the flow
   * is not empty or the objective text is set.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGui.html#LuaGui.goal View documentation}
   */
  readonly goal: LuaGuiElement
  /**
   * For showing a GUI somewhere on the entire screen. It is an empty-widget element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGui.html#LuaGui.screen View documentation}
   */
  readonly screen: LuaGuiElement
  /**
   * For showing a GUI somewhere relative to one of the game GUIs. It is an empty-widget element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGui.html#LuaGui.relative View documentation}
   */
  readonly relative: LuaGuiElement
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaGui"
  /** All methods and properties that this object supports. */
  help(): string
}

type GuiElementType =
  | "choose-elem-button"
  | "drop-down"
  | "empty-widget"
  | "entity-preview"
  | "list-box"
  | "scroll-pane"
  | "sprite-button"
  | "tabbed-pane"
  | "text-box"
  | "button"
  | "camera"
  | "checkbox"
  | "flow"
  | "frame"
  | "label"
  | "line"
  | "minimap"
  | "progressbar"
  | "radiobutton"
  | "slider"
  | "sprite"
  | "switch"
  | "tab"
  | "table"
  | "textfield"

interface BaseGuiSpec {
  /** The kind of element to add. Has to be one of the GUI element types listed at the top of this page. */
  readonly type: GuiElementType
  /** Name of the child element. */
  readonly name?: string
  /**
   * Text displayed on the child element. For frames, this is their title. For other elements, like buttons or labels,
   * this is the content. Whilst this attribute may be used on all elements, it doesn't make sense for tables and
   * flows as they won't display it.
   */
  readonly caption?: LocalisedString
  /** Tooltip of the child element. */
  readonly tooltip?: LocalisedString
  /** Whether the child element is enabled. Defaults to `true`. */
  readonly enabled?: boolean
  /** Whether the child element is visible. Defaults to `true`. */
  readonly visible?: boolean
  /** Whether the child element is ignored by interaction. Defaults to `false`. */
  readonly ignored_by_interaction?: boolean
  /** Style of the child element. */
  readonly style?: string
  /** {@link Tags} associated with the child element. */
  readonly tags?: Tags
  /** Location in its parent that the child element should slot into. By default, the child will be appended onto the end. */
  readonly index?: uint
  /** Where to position the child element when in the `relative` element. */
  readonly anchor?: GuiAnchor
}

interface ButtonGuiSpec extends BaseGuiSpec {
  readonly type: "button"
  /** Which mouse buttons the button responds to. Defaults to `"left-and-right"`. */
  readonly mouse_button_filter?: MouseButtonFlags
}

interface FlowGuiSpec extends BaseGuiSpec {
  readonly type: "flow"
  /**
   * The initial direction of the flow's layout. See {@link LuaGuiElement.direction LuaGuiElement::direction}. Defaults
   * to `"horizontal"`.
   */
  readonly direction?: "horizontal" | "vertical"
}

interface FrameGuiSpec extends BaseGuiSpec {
  readonly type: "frame"
  /**
   * The initial direction of the frame's layout. See {@link LuaGuiElement.direction LuaGuiElement::direction}.
   * Defaults to `"horizontal"`.
   */
  readonly direction?: "horizontal" | "vertical"
}

interface TableGuiSpec extends BaseGuiSpec {
  readonly type: "table"
  /** Number of columns. This can't be changed after the table is created. */
  readonly column_count: uint
  /** Whether the table should draw vertical grid lines. Defaults to `false`. */
  readonly draw_vertical_lines?: boolean
  /** Whether the table should draw horizontal grid lines. Defaults to `false`. */
  readonly draw_horizontal_lines?: boolean
  /** Whether the table should draw a single horizontal grid line after the headers. Defaults to `false`. */
  readonly draw_horizontal_line_after_headers?: boolean
  /** Whether the content of the table should be vertically centered. Defaults to `true`. */
  readonly vertical_centering?: boolean
}

interface TextfieldGuiSpec extends BaseGuiSpec {
  readonly type: "textfield"
  /** The initial text contained in the textfield. */
  readonly text?: string
  /** Defaults to `false`. */
  readonly numeric?: boolean
  /** Defaults to `false`. */
  readonly allow_decimal?: boolean
  /** Defaults to `false`. */
  readonly allow_negative?: boolean
  /** Defaults to `false`. */
  readonly is_password?: boolean
  /** Defaults to `false`. */
  readonly lose_focus_on_confirm?: boolean
  /** Defaults to `false`. */
  readonly clear_and_focus_on_right_click?: boolean
}

interface ProgressbarGuiSpec extends BaseGuiSpec {
  readonly type: "progressbar"
  /** The initial value of the progressbar, in the range [0, 1]. Defaults to `0`. */
  readonly value?: double
}

interface CheckboxGuiSpec extends BaseGuiSpec {
  readonly type: "checkbox"
  /** The initial checked-state of the checkbox. */
  readonly state: boolean
}

interface RadiobuttonGuiSpec extends BaseGuiSpec {
  readonly type: "radiobutton"
  /** The initial checked-state of the radiobutton. */
  readonly state: boolean
}

interface SpriteButtonGuiSpec extends BaseGuiSpec {
  readonly type: "sprite-button"
  /** Path to the image to display on the button. */
  readonly sprite?: SpritePath
  /** Path to the image to display on the button when it is hovered. */
  readonly hovered_sprite?: SpritePath
  /** Path to the image to display on the button when it is clicked. */
  readonly clicked_sprite?: SpritePath
  /** The number shown on the button. */
  readonly number?: double
  /** Formats small numbers as percentages. Defaults to `false`. */
  readonly show_percent_for_small_numbers?: boolean
  /** The mouse buttons that the button responds to. Defaults to `"left-and-right"`. */
  readonly mouse_button_filter?: MouseButtonFlags
}

interface SpriteGuiSpec extends BaseGuiSpec {
  readonly type: "sprite"
  /** Path to the image to display. */
  readonly sprite?: SpritePath
  /** Whether the widget should resize according to the sprite in it. Defaults to `true`. */
  readonly resize_to_sprite?: boolean
}

interface ScrollPaneGuiSpec extends BaseGuiSpec {
  readonly type: "scroll-pane"
  /**
   * Policy of the horizontal scroll bar. Possible values are `"auto"`, `"never"`, `"always"`,
   * `"auto-and-reserve-space"`, `"dont-show-but-allow-scrolling"`. Defaults to `"auto"`.
   */
  readonly horizontal_scroll_policy?:
    | "auto"
    | "never"
    | "always"
    | "auto-and-reserve-space"
    | "dont-show-but-allow-scrolling"
  /**
   * Policy of the vertical scroll bar. Possible values are `"auto"`, `"never"`, `"always"`,
   * `"auto-and-reserve-space"`, `"dont-show-but-allow-scrolling"`. Defaults to `"auto"`.
   */
  readonly vertical_scroll_policy?:
    | "auto"
    | "never"
    | "always"
    | "auto-and-reserve-space"
    | "dont-show-but-allow-scrolling"
}

interface DropDownGuiSpec extends BaseGuiSpec {
  readonly type: "drop-down"
  /** The initial items in the dropdown. */
  readonly items?: LocalisedString[]
  /** The index of the initially selected item. Defaults to 0. */
  readonly selected_index?: uint
}

interface LineGuiSpec extends BaseGuiSpec {
  readonly type: "line"
  /** The initial direction of the line. Defaults to `"horizontal"`. */
  readonly direction?: "horizontal" | "vertical"
}

interface ListBoxGuiSpec extends BaseGuiSpec {
  readonly type: "list-box"
  /** The initial items in the listbox. */
  readonly items?: LocalisedString[]
  /** The index of the initially selected item. Defaults to 0. */
  readonly selected_index?: uint
}

interface CameraGuiSpec extends BaseGuiSpec {
  readonly type: "camera"
  /** The position the camera centers on. */
  readonly position: Position
  /** The surface that the camera will render. Defaults to the player's current surface. */
  readonly surface_index?: uint
  /** The initial camera zoom. Defaults to `0.75`. */
  readonly zoom?: double
}

type ChooseElemButtonType =
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

interface ChooseElemButtonFilters {
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

interface BaseChooseElemButtonSpec extends BaseGuiSpec {
  readonly type: "choose-elem-button"
  /** The type of the button - one of the following values. */
  readonly elem_type: ChooseElemButtonType
  /** Filters describing what to show in the selection window. See {@link LuaGuiElement.elem_filters LuaGuiElement::elem_filters}. */
  readonly elem_filters?: ChooseElemButtonFilters[this["elem_type"]]
}

interface ItemChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "item"
  /** If type is `"item"` - the default value for the button. */
  readonly item?: string
}

interface TileChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "tile"
  /** If type is `"tile"` - the default value for the button. */
  readonly tile?: string
}

interface EntityChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "entity"
  /** If type is `"entity"` - the default value for the button. */
  readonly entity?: string
}

interface SignalChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "signal"
  /** If type is `"signal"` - the default value for the button. */
  readonly signal?: SignalID
}

interface FluidChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "fluid"
  /** If type is `"fluid"` - the default value for the button. */
  readonly fluid?: string
}

interface RecipeChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "recipe"
  /** If type is `"recipe"` - the default value for the button. */
  readonly recipe?: string
}

interface DecorativeChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "decorative"
  /** If type is `"decorative"` - the default value for the button. */
  readonly decorative?: string
}

interface ItemGroupChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "item-group"
  /** If type is `"item-group"` - the default value for the button. */
  readonly "item-group"?: string
}

interface AchievementChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "achievement"
  /** If type is `"achievement"` - the default value for the button. */
  readonly achievement?: string
}

interface EquipmentChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "equipment"
  /** If type is `"equipment"` - the default value for the button. */
  readonly equipment?: string
}

interface TechnologyChooseElemButtonSpec extends BaseChooseElemButtonSpec {
  readonly elem_type: "technology"
  /** If type is `"technology"` - the default value for the button. */
  readonly technology?: string
}

type ChooseElemButtonGuiSpec =
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

interface TextBoxGuiSpec extends BaseGuiSpec {
  readonly type: "text-box"
  /** The initial text contained in the text-box. */
  readonly text?: string
  /** Defaults to `false`. */
  readonly clear_and_focus_on_right_click?: boolean
}

interface SliderGuiSpec extends BaseGuiSpec {
  readonly type: "slider"
  /** The minimum value for the slider. Defaults to `0`. */
  readonly minimum_value?: double
  /** The maximum value for the slider. Defaults to `30`. */
  readonly maximum_value?: double
  /** The initial value for the slider. Defaults to `minimum_value`. */
  readonly value?: double
  /** The minimum value the slider can move. Defaults to `1`. */
  readonly value_step?: double
  /** Defaults to `false`. */
  readonly discrete_slider?: boolean
  /** Defaults to `true`. */
  readonly discrete_values?: boolean
}

interface MinimapGuiSpec extends BaseGuiSpec {
  readonly type: "minimap"
  /** The position the minimap centers on. Defaults to the player's current position. */
  readonly position?: Position
  /** The surface the camera will render. Defaults to the player's current surface. */
  readonly surface_index?: uint
  /** The player index the map should use. Defaults to the current player. */
  readonly chart_player_index?: uint
  /** The force this minimap should use. Defaults to the player's current force. */
  readonly force?: string
  /** The initial camera zoom. Defaults to `0.75`. */
  readonly zoom?: double
}

interface TabGuiSpec extends BaseGuiSpec {
  readonly type: "tab"
  /** The text to display after the normal tab text (designed to work with numbers). */
  readonly badge_text?: LocalisedString
}

interface SwitchGuiSpec extends BaseGuiSpec {
  readonly type: "switch"
  /**
   * Possible values are `"left"`, `"right"`, or `"none"`. If set to "none", `allow_none_state` must be `true`.
   * Defaults to `"left"`.
   */
  readonly switch_state?: "left" | "right" | "none"
  /** Whether the switch can be set to a middle state. Defaults to `false`. */
  readonly allow_none_state?: boolean
  readonly left_label_caption?: LocalisedString
  readonly left_label_tooltip?: LocalisedString
  readonly right_label_caption?: LocalisedString
  readonly right_label_tooltip?: LocalisedString
}

interface EmptyWidgetGuiSpec extends BaseGuiSpec {
  readonly type: "empty-widget"
}

interface EntityPreviewGuiSpec extends BaseGuiSpec {
  readonly type: "entity-preview"
}

interface TabbedPaneGuiSpec extends BaseGuiSpec {
  readonly type: "tabbed-pane"
}

interface LabelGuiSpec extends BaseGuiSpec {
  readonly type: "label"
}

type GuiSpec =
  | ButtonGuiSpec
  | FlowGuiSpec
  | FrameGuiSpec
  | TableGuiSpec
  | TextfieldGuiSpec
  | ProgressbarGuiSpec
  | CheckboxGuiSpec
  | RadiobuttonGuiSpec
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
  | EmptyWidgetGuiSpec
  | EntityPreviewGuiSpec
  | TabbedPaneGuiSpec
  | LabelGuiSpec

interface GuiElementIndex {
  /**
   * The indexing operator. Gets children by name.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.operator%20[] View documentation}
   */
  readonly [name: string]: LuaGuiElement | undefined
}

/** @noSelf */
interface BaseGuiElement {
  /**
   * Add a new child element to this GuiElement.
   *
   * Other attributes may be specified depending on `type`:
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.add View documentation}
   *
   * @returns The added GUI element.
   */
  add<Type extends GuiElementType>(
    element: GuiSpec & {
      type: Type
    }
  ): Extract<
    LuaGuiElement,
    {
      type: Type
    }
  >
  /**
   * Remove children of this element. Any {@link LuaGuiElement} objects referring to the destroyed elements become
   * invalid after this operation.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.clear View documentation}
   *
   * @example
   *   ```lua
   *     game.player.gui.top.clear()
   *     ```
   */
  clear(): void
  /**
   * Remove this element, along with its children. Any {@link LuaGuiElement} objects referring to the destroyed
   * elements become invalid after this operation.
   *
   * **Note**: The top-level GUI elements - {@link LuaGui.top LuaGui::top}, {@link LuaGui.left LuaGui::left},
   * {@link LuaGui.center LuaGui::center} and {@link LuaGui.screen LuaGui::screen} - can't be destroyed.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.destroy View documentation}
   *
   * @example
   *   ```lua
   *     game.player.gui.top.greeting.destroy()
   *     ```
   */
  destroy(): void
  /**
   * The mod that owns this Gui element or `nil` if it's owned by the scenario script.
   *
   * **Note**: This has a not-super-expensive, but non-free cost to get.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.get_mod View documentation}
   */
  get_mod(): string | undefined
  /**
   * Gets the index that this element has in its parent element.
   *
   * **Note**: This iterates through the children of the parent of this element, meaning this has a non-free cost to
   * get, but is faster than doing the equivalent in Lua.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.get_index_in_parent View documentation}
   */
  get_index_in_parent(): uint
  /**
   * Swaps the children at the given indices in this element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.swap_children View documentation}
   *
   * @param index_1 - The index of the first child.
   * @param index_2 - The index of the second child.
   */
  swap_children(index_1: uint, index_2: uint): void
  /**
   * Focuses this GUI element if possible.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.focus View documentation}
   */
  focus(): void
  /**
   * Moves this GUI element to the "front" so it will draw over other elements.
   *
   * **Note**: Only works for elements in {@link LuaGui.screen LuaGui::screen}
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.bring_to_front View documentation}
   */
  bring_to_front(): void
  /**
   * The index of this GUI element (unique amongst the GUI elements of a LuaPlayer).
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.index View documentation}
   */
  readonly index: uint
  /**
   * The GUI this element is a child of.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.gui View documentation}
   */
  readonly gui: LuaGui
  /**
   * The direct parent of this element; `nil` if this is a top-level element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.parent View documentation}
   */
  readonly parent: LuaGuiElement | undefined
  /**
   * The name of this element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.name View documentation}
   *
   * @example
   *   ```lua
   *     game.player.gui.top.greeting.name == "greeting"
   *     ```
   */
  name: string
  /**
   * The text displayed on this element. For frames, this is the "heading". For other elements, like buttons or
   * labels, this is the content.
   *
   * **Note**: Whilst this attribute may be used on all elements without producing an error, it doesn't make sense for
   * tables and flows as they won't display it.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.caption View documentation}
   */
  caption: LocalisedString
  /**
   * The style of this element. When read, this evaluates to a {@link LuaStyle}. For writing, it only accepts a string
   * that specifies the textual identifier (prototype name) of the desired style.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.style View documentation}
   */
  set style(style: LuaStyle | string)
  get style(): LuaStyle
  /**
   * Sets whether this GUI element is visible or completely hidden, taking no space in the layout.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.visible View documentation}
   */
  visible: boolean
  /**
   * Names of all the children of this element. These are the identifiers that can be used to access the child as an
   * attribute of this element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.children_names View documentation}
   */
  readonly children_names: string[]
  /**
   * Index into {@link LuaGameScript.players LuaGameScript::players} specifying the player who owns this element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.player_index View documentation}
   */
  readonly player_index: uint
  tooltip: LocalisedString
  /**
   * The type of this GUI element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.type View documentation}
   */
  readonly type: GuiElementType
  /**
   * The child-elements of this GUI element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.children View documentation}
   */
  readonly children: LuaGuiElement[]
  /**
   * The location of this widget when stored in {@link LuaGui.screen LuaGui::screen}, or `nil` if not set or not in
   * {@link LuaGui.screen LuaGui::screen}.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.location View documentation}
   */
  location: GuiLocation | undefined
  /**
   * Whether this GUI element is enabled. Disabled GUI elements don't trigger events when clicked.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.enabled View documentation}
   */
  enabled: boolean
  /**
   * Whether this GUI element is ignored by interaction. This makes clicks on this element 'go through' to the GUI
   * element or even the game surface below it.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.ignored_by_interaction View documentation}
   */
  ignored_by_interaction: boolean
  /**
   * Sets the anchor for this relative widget. Setting `nil` clears the anchor.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.anchor View documentation}
   */
  anchor: GuiAnchor | undefined
  /**
   * The tags associated with this LuaGuiElement.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.tags View documentation}
   */
  tags: Tags
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaGuiElement"
  /** All methods and properties that this object supports. */
  help(): string
}

/** @noSelf */
interface ChooseElemButtonGuiElementMembers extends BaseGuiElement {
  /**
   * The type of this GUI element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.type View documentation}
   */
  readonly type: "choose-elem-button"
  /**
   * The elem type of this choose-elem-button.
   *
   * *Can only be used if this is choose-elem-button*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.elem_type View documentation}
   */
  readonly elem_type: ChooseElemButtonType
  /**
   * The elem value of this choose-elem-button or `nil` if there is no value.
   *
   * **Note**: The `"signal"` type operates with {@link SignalID}, while all other types use strings.
   *
   * *Can only be used if this is choose-elem-button*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.elem_value View documentation}
   */
  elem_value: (this["elem_type"] extends "signal" ? SignalID : string) | undefined
  /**
   * The elem filters of this choose-elem-button or `nil` if there are no filters.
   *
   * The compatible type of filter is determined by elem_type:
   *
   * - Type `"item"` - {@link ItemPrototypeFilter}
   * - Type `"tile"` - {@link TilePrototypeFilter}
   * - Type `"entity"` - {@link EntityPrototypeFilter}
   * - Type `"signal"` - Does not support filters
   * - Type `"fluid"` - {@link FluidPrototypeFilter}
   * - Type `"recipe"` - {@link RecipePrototypeFilter}
   * - Type `"decorative"` - {@link DecorativePrototypeFilter}
   * - Type `"item-group"` - Does not support filters
   * - Type `"achievement"` - {@link AchievementPrototypeFilter}
   * - Type `"equipment"` - {@link EquipmentPrototypeFilter}
   * - Type `"technology"` - {@link TechnologyPrototypeFilter}
   *
   * **Note**: Writing to this field does not change or clear the currently selected element.
   *
   * *Can only be used if this is choose-elem-button*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.elem_filters View documentation}
   *
   * @example
   *   This will configure a choose-elem-button of type `"entity"` to only show items of type `"furnace"`.
   *
   *   ```lua
   *   button.elem_filters = {{filter = "type", type = "furnace"}}
   *   ```
   *
   * @example
   *   Then, there are some types of filters that work on a specific kind of attribute. The following will configure a choose-elem-button of type `"entity"` to only show entities that have their `"hidden"` {@link EntityPrototypeFlags flags} set.
   *
   *   ```lua
   *   button.elem_filters = {{filter = "hidden"}}
   *   ```
   *
   * @example
   *   Lastly, these filters can be combined at will, taking care to specify how they should be combined (either `"and"` or `"or"`. The following will filter for any `"entities"` that are `"furnaces"` and that are not `"hidden"`.
   *
   *   ```lua
   *   button.elem_filters = {{filter = "type", type = "furnace"}, {filter = "hidden", invert = true, mode = "and"}}
   *   ```
   */
  elem_filters: ChooseElemButtonFilters[this["elem_type"]] | undefined
  /**
   * Whether this choose-elem-button can be changed by the player.
   *
   * *Can only be used if this is choose-elem-button*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.locked View documentation}
   */
  locked: boolean
}

type ChooseElemButtonGuiElement = ChooseElemButtonGuiElementMembers & GuiElementIndex

/** @noSelf */
interface DropDownGuiElementMembers extends BaseGuiElement {
  /**
   * The type of this GUI element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.type View documentation}
   */
  readonly type: "drop-down"
  /**
   * Removes the items in this dropdown or listbox.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.clear_items View documentation}
   */
  clear_items(): void
  /**
   * Gets the item at the given index from this dropdown or listbox.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.get_item View documentation}
   *
   * @param index - The index to get
   */
  get_item(index: uint): LocalisedString
  /**
   * Sets the given string at the given index in this dropdown or listbox.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.set_item View documentation}
   *
   * @param index - The index whose text to replace.
   * @param string - The text to set at the given index.
   */
  set_item(index: uint, string: LocalisedString): void
  /**
   * Inserts a string at the end or at the given index of this dropdown or listbox.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.add_item View documentation}
   *
   * @param string - The text to insert.
   * @param index - The index at which to insert the item.
   */
  add_item(string: LocalisedString, index?: uint): void
  /**
   * Removes the item at the given index from this dropdown or listbox.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.remove_item View documentation}
   *
   * @param index - The index
   */
  remove_item(index: uint): void
  /**
   * The items in this dropdown or listbox.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.items View documentation}
   */
  items: LocalisedString[]
  /**
   * The selected index for this dropdown or listbox. Returns `0` if none is selected.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.selected_index View documentation}
   */
  selected_index: uint
}

type DropDownGuiElement = DropDownGuiElementMembers & GuiElementIndex

/** @noSelf */
interface EmptyWidgetGuiElementMembers extends BaseGuiElement {
  /**
   * The type of this GUI element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.type View documentation}
   */
  readonly type: "empty-widget"
  /**
   * The frame drag target for this flow, frame, label, table, or empty-widget.
   *
   * **Note**: drag_target can only be set to a frame stored directly in {@link LuaGui.screen LuaGui::screen} or `nil`.
   *
   * **Note**: drag_target can only be set on child elements in {@link LuaGui.screen LuaGui::screen}.
   *
   * **Note**: drag_target can only be set to a higher level parent element (this element must be owned at some nested
   * level by the drag_target).
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.drag_target View documentation}
   */
  drag_target: LuaGuiElement | undefined
}

type EmptyWidgetGuiElement = EmptyWidgetGuiElementMembers & GuiElementIndex

/** @noSelf */
interface EntityPreviewGuiElementMembers extends BaseGuiElement {
  /**
   * The type of this GUI element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.type View documentation}
   */
  readonly type: "entity-preview"
  /**
   * The entity associated with this entity-preview, camera, minimap or `nil` if no entity is associated.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.entity View documentation}
   */
  entity: LuaEntity | undefined
}

type EntityPreviewGuiElement = EntityPreviewGuiElementMembers & GuiElementIndex

/** @noSelf */
interface ListBoxGuiElementMembers extends BaseGuiElement {
  /**
   * The type of this GUI element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.type View documentation}
   */
  readonly type: "list-box"
  /**
   * Removes the items in this dropdown or listbox.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.clear_items View documentation}
   */
  clear_items(): void
  /**
   * Gets the item at the given index from this dropdown or listbox.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.get_item View documentation}
   *
   * @param index - The index to get
   */
  get_item(index: uint): LocalisedString
  /**
   * Sets the given string at the given index in this dropdown or listbox.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.set_item View documentation}
   *
   * @param index - The index whose text to replace.
   * @param string - The text to set at the given index.
   */
  set_item(index: uint, string: LocalisedString): void
  /**
   * Inserts a string at the end or at the given index of this dropdown or listbox.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.add_item View documentation}
   *
   * @param string - The text to insert.
   * @param index - The index at which to insert the item.
   */
  add_item(string: LocalisedString, index?: uint): void
  /**
   * Removes the item at the given index from this dropdown or listbox.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.remove_item View documentation}
   *
   * @param index - The index
   */
  remove_item(index: uint): void
  /**
   * Scrolls the scroll bar such that the specified listbox item is visible to the player.
   *
   * *Can only be used if this is list-box*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.scroll_to_item View documentation}
   *
   * @param index - The item index to scroll to.
   * @param scroll_mode - Where the item should be positioned in the scroll-pane. Must be either `"in-view"` or
   *   `"top-third"`. Defaults to `"in-view"`.
   */
  scroll_to_item(index: int, scroll_mode?: "in-view" | "top-third"): void
  /**
   * The items in this dropdown or listbox.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.items View documentation}
   */
  items: LocalisedString[]
  /**
   * The selected index for this dropdown or listbox. Returns `0` if none is selected.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.selected_index View documentation}
   */
  selected_index: uint
}

type ListBoxGuiElement = ListBoxGuiElementMembers & GuiElementIndex

/** @noSelf */
interface ScrollPaneGuiElementMembers extends BaseGuiElement {
  /**
   * The type of this GUI element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.type View documentation}
   */
  readonly type: "scroll-pane"
  /**
   * Scrolls this scroll bar to the top.
   *
   * *Can only be used if this is scroll-pane or text-box*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.scroll_to_top View documentation}
   */
  scroll_to_top(): void
  /**
   * Scrolls this scroll bar to the bottom.
   *
   * *Can only be used if this is scroll-pane or text-box*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.scroll_to_bottom View documentation}
   */
  scroll_to_bottom(): void
  /**
   * Scrolls this scroll bar to the left.
   *
   * *Can only be used if this is scroll-pane or text-box*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.scroll_to_left View documentation}
   */
  scroll_to_left(): void
  /**
   * Scrolls this scroll bar to the right.
   *
   * *Can only be used if this is scroll-pane or text-box*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.scroll_to_right View documentation}
   */
  scroll_to_right(): void
  /**
   * Scrolls this scroll bar such that the specified GUI element is visible to the player.
   *
   * *Can only be used if this is scroll-pane*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.scroll_to_element View documentation}
   *
   * @param element - The element to scroll to.
   * @param scroll_mode - Where the element should be positioned in the scroll-pane. Must be either `"in-view"` or
   *   `"top-third"`. Defaults to `"in-view"`.
   */
  scroll_to_element(element: LuaGuiElement, scroll_mode?: "in-view" | "top-third"): void
  /**
   * Policy of the horizontal scroll bar. Possible values are `"auto"`, `"never"`, `"always"`,
   * `"auto-and-reserve-space"`, `"dont-show-but-allow-scrolling"`.
   *
   * *Can only be used if this is scroll-pane*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.horizontal_scroll_policy View documentation}
   */
  horizontal_scroll_policy: "auto" | "never" | "always" | "auto-and-reserve-space" | "dont-show-but-allow-scrolling"
  /**
   * Policy of the vertical scroll bar. Possible values are `"auto"`, `"never"`, `"always"`,
   * `"auto-and-reserve-space"`, `"dont-show-but-allow-scrolling"`.
   *
   * *Can only be used if this is scroll-pane*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.vertical_scroll_policy View documentation}
   */
  vertical_scroll_policy: "auto" | "never" | "always" | "auto-and-reserve-space" | "dont-show-but-allow-scrolling"
}

type ScrollPaneGuiElement = ScrollPaneGuiElementMembers & GuiElementIndex

/** @noSelf */
interface SpriteButtonGuiElementMembers extends BaseGuiElement {
  /**
   * The type of this GUI element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.type View documentation}
   */
  readonly type: "sprite-button"
  /**
   * The image to display on this sprite-button or sprite in the default state.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.sprite View documentation}
   */
  sprite: SpritePath
  /**
   * The image to display on this sprite-button when it is hovered.
   *
   * *Can only be used if this is sprite-button*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.hovered_sprite View documentation}
   */
  hovered_sprite: SpritePath
  /**
   * The image to display on this sprite-button when it is clicked.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.clicked_sprite View documentation}
   */
  clicked_sprite: SpritePath
  /**
   * The number to be shown in the bottom right corner of this sprite-button. Set this to `nil` to show nothing.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.number View documentation}
   */
  number: double | undefined
  /**
   * Related to the number to be shown in the bottom right corner of this sprite-button. When set to `true`, numbers
   * that are non-zero and smaller than one are shown as a percentage rather than the value. For example, `0.5` will
   * be shown as `50%` instead.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.show_percent_for_small_numbers View documentation}
   */
  show_percent_for_small_numbers: boolean
  /**
   * The mouse button filters for this button or sprite-button.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.mouse_button_filter View documentation}
   */
  mouse_button_filter: MouseButtonFlags
}

type SpriteButtonGuiElement = SpriteButtonGuiElementMembers & GuiElementIndex

/** @noSelf */
interface TabbedPaneGuiElementMembers extends BaseGuiElement {
  /**
   * The type of this GUI element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.type View documentation}
   */
  readonly type: "tabbed-pane"
  /**
   * Adds the given tab and content widgets to this tabbed pane as a new tab.
   *
   * *Can only be used if this is tabbed-pane*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.add_tab View documentation}
   *
   * @param tab - The tab to add, must be a GUI element of type "tab".
   * @param content - The content to show when this tab is selected. Can be any type of GUI element.
   */
  add_tab(tab: LuaGuiElement, content: LuaGuiElement): void
  /**
   * Removes the given tab and its associated content from this tabbed pane.
   *
   * **Note**: Removing a tab does not destroy the tab or the tab contents. It just removes them from the view.
   *
   * **Note**: When removing tabs, {@link LuaGuiElement.selected_tab_index LuaGuiElement::selected_tab_index} needs to
   * be manually updated.
   *
   * *Can only be used if this is tabbed-pane*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.remove_tab View documentation}
   *
   * @param tab - The tab to remove. If not given, it removes all tabs.
   */
  remove_tab(tab: LuaGuiElement): void
  /**
   * The selected tab index for this tabbed pane or `nil` if no tab is selected.
   *
   * *Can only be used if this is tabbed-pane*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.selected_tab_index View documentation}
   */
  selected_tab_index: uint | undefined
  /**
   * The tabs and contents being shown in this tabbed-pane.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.tabs View documentation}
   */
  readonly tabs: TabAndContent[]
}

type TabbedPaneGuiElement = TabbedPaneGuiElementMembers & GuiElementIndex

/** @noSelf */
interface TextBoxGuiElementMembers extends BaseGuiElement {
  /**
   * The type of this GUI element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.type View documentation}
   */
  readonly type: "text-box"
  /**
   * Scrolls this scroll bar to the top.
   *
   * *Can only be used if this is scroll-pane or text-box*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.scroll_to_top View documentation}
   */
  scroll_to_top(): void
  /**
   * Scrolls this scroll bar to the bottom.
   *
   * *Can only be used if this is scroll-pane or text-box*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.scroll_to_bottom View documentation}
   */
  scroll_to_bottom(): void
  /**
   * Scrolls this scroll bar to the left.
   *
   * *Can only be used if this is scroll-pane or text-box*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.scroll_to_left View documentation}
   */
  scroll_to_left(): void
  /**
   * Scrolls this scroll bar to the right.
   *
   * *Can only be used if this is scroll-pane or text-box*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.scroll_to_right View documentation}
   */
  scroll_to_right(): void
  /**
   * Selects all the text in this textbox.
   *
   * *Can only be used if this is textfield or text-box*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.select_all View documentation}
   */
  select_all(): void
  /**
   * Selects a range of text in this textbox.
   *
   * *Can only be used if this is textfield or text-box*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.select View documentation}
   *
   * @example
   *   Select the characters `amp` from `example`:
   *
   *   ```lua
   *   textbox.select(3, 5)
   *   ```
   *
   * @example
   *   Move the cursor to the start of the text box:
   *
   *   ```lua
   *   textbox.select(1, 0)
   *   ```
   *
   * @param start - The index of the first character to select
   * @param end - The index of the last character to select
   */
  select(start: int, end: int): void
  /**
   * The text contained in this textfield or text-box.
   *
   * *Can only be used if this is textfield or text-box*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.text View documentation}
   */
  text: string
  /**
   * Whether the contents of this text-box are selectable. Defaults to `true`.
   *
   * *Can only be used if this is text-box*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.selectable View documentation}
   */
  selectable: boolean
  /**
   * Whether this text-box will word-wrap automatically. Defaults to `false`.
   *
   * *Can only be used if this is text-box*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.word_wrap View documentation}
   */
  word_wrap: boolean
  /**
   * Whether this text-box is read-only. Defaults to `false`.
   *
   * *Can only be used if this is text-box*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.read_only View documentation}
   */
  read_only: boolean
  /**
   * Makes it so right-clicking on this textfield clears and focuses it.
   *
   * *Can only be used if this is textfield or text-box*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.clear_and_focus_on_right_click View documentation}
   */
  clear_and_focus_on_right_click: boolean
}

type TextBoxGuiElement = TextBoxGuiElementMembers & GuiElementIndex

/** @noSelf */
interface ButtonGuiElementMembers extends BaseGuiElement {
  /**
   * The type of this GUI element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.type View documentation}
   */
  readonly type: "button"
  /**
   * The mouse button filters for this button or sprite-button.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.mouse_button_filter View documentation}
   */
  mouse_button_filter: MouseButtonFlags
}

type ButtonGuiElement = ButtonGuiElementMembers & GuiElementIndex

/** @noSelf */
interface CameraGuiElementMembers extends BaseGuiElement {
  /**
   * The type of this GUI element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.type View documentation}
   */
  readonly type: "camera"
  /**
   * The position this camera or minimap is focused on, if any.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.position View documentation}
   */
  position: Position
  /**
   * The surface index this camera or minimap is using.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.surface_index View documentation}
   */
  surface_index: uint
  /**
   * The zoom this camera or minimap is using.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.zoom View documentation}
   */
  zoom: double
  /**
   * The entity associated with this entity-preview, camera, minimap or `nil` if no entity is associated.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.entity View documentation}
   */
  entity: LuaEntity | undefined
}

type CameraGuiElement = CameraGuiElementMembers & GuiElementIndex

/** @noSelf */
interface CheckboxGuiElementMembers extends BaseGuiElement {
  /**
   * The type of this GUI element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.type View documentation}
   */
  readonly type: "checkbox"
  /**
   * Is this checkbox or radiobutton checked?
   *
   * *Can only be used if this is CheckBox or RadioButton*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.state View documentation}
   */
  state: boolean
}

type CheckboxGuiElement = CheckboxGuiElementMembers & GuiElementIndex

/** @noSelf */
interface FlowGuiElementMembers extends BaseGuiElement {
  /**
   * The type of this GUI element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.type View documentation}
   */
  readonly type: "flow"
  /**
   * Direction of this element's layout. May be either `"horizontal"` or `"vertical"`.
   *
   * *Can only be used if this is frame, flow or line*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.direction View documentation}
   */
  readonly direction: "horizontal" | "vertical"
  /**
   * The frame drag target for this flow, frame, label, table, or empty-widget.
   *
   * **Note**: drag_target can only be set to a frame stored directly in {@link LuaGui.screen LuaGui::screen} or `nil`.
   *
   * **Note**: drag_target can only be set on child elements in {@link LuaGui.screen LuaGui::screen}.
   *
   * **Note**: drag_target can only be set to a higher level parent element (this element must be owned at some nested
   * level by the drag_target).
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.drag_target View documentation}
   */
  drag_target: LuaGuiElement | undefined
}

type FlowGuiElement = FlowGuiElementMembers & GuiElementIndex

/** @noSelf */
interface FrameGuiElementMembers extends BaseGuiElement {
  /**
   * The type of this GUI element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.type View documentation}
   */
  readonly type: "frame"
  /**
   * Forces this frame to re-auto-center. Only works on frames stored directly in {@link LuaGui.screen LuaGui::screen}.
   *
   * *Can only be used if this is frame*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.force_auto_center View documentation}
   */
  force_auto_center(): void
  /**
   * Direction of this element's layout. May be either `"horizontal"` or `"vertical"`.
   *
   * *Can only be used if this is frame, flow or line*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.direction View documentation}
   */
  readonly direction: "horizontal" | "vertical"
  /**
   * Whether this frame auto-centers on window resize when stored in {@link LuaGui.screen LuaGui::screen}.
   *
   * *Can only be used if this is frame*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.auto_center View documentation}
   */
  auto_center: boolean
  /**
   * The frame drag target for this flow, frame, label, table, or empty-widget.
   *
   * **Note**: drag_target can only be set to a frame stored directly in {@link LuaGui.screen LuaGui::screen} or `nil`.
   *
   * **Note**: drag_target can only be set on child elements in {@link LuaGui.screen LuaGui::screen}.
   *
   * **Note**: drag_target can only be set to a higher level parent element (this element must be owned at some nested
   * level by the drag_target).
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.drag_target View documentation}
   */
  drag_target: LuaGuiElement | undefined
}

type FrameGuiElement = FrameGuiElementMembers & GuiElementIndex

/** @noSelf */
interface LabelGuiElementMembers extends BaseGuiElement {
  /**
   * The type of this GUI element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.type View documentation}
   */
  readonly type: "label"
  /**
   * The frame drag target for this flow, frame, label, table, or empty-widget.
   *
   * **Note**: drag_target can only be set to a frame stored directly in {@link LuaGui.screen LuaGui::screen} or `nil`.
   *
   * **Note**: drag_target can only be set on child elements in {@link LuaGui.screen LuaGui::screen}.
   *
   * **Note**: drag_target can only be set to a higher level parent element (this element must be owned at some nested
   * level by the drag_target).
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.drag_target View documentation}
   */
  drag_target: LuaGuiElement | undefined
}

type LabelGuiElement = LabelGuiElementMembers & GuiElementIndex

/** @noSelf */
interface LineGuiElementMembers extends BaseGuiElement {
  /**
   * The type of this GUI element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.type View documentation}
   */
  readonly type: "line"
  /**
   * Direction of this element's layout. May be either `"horizontal"` or `"vertical"`.
   *
   * *Can only be used if this is frame, flow or line*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.direction View documentation}
   */
  readonly direction: "horizontal" | "vertical"
}

type LineGuiElement = LineGuiElementMembers & GuiElementIndex

/** @noSelf */
interface MinimapGuiElementMembers extends BaseGuiElement {
  /**
   * The type of this GUI element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.type View documentation}
   */
  readonly type: "minimap"
  /**
   * The position this camera or minimap is focused on, if any.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.position View documentation}
   */
  position: Position
  /**
   * The surface index this camera or minimap is using.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.surface_index View documentation}
   */
  surface_index: uint
  /**
   * The zoom this camera or minimap is using.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.zoom View documentation}
   */
  zoom: double
  /**
   * The player index this minimap is using.
   *
   * *Can only be used if this is minimap*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.minimap_player_index View documentation}
   */
  minimap_player_index: uint
  /**
   * The force this minimap is using or `nil` if no force is set.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.force View documentation}
   */
  force: string | undefined
  /**
   * The entity associated with this entity-preview, camera, minimap or `nil` if no entity is associated.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.entity View documentation}
   */
  entity: LuaEntity | undefined
}

type MinimapGuiElement = MinimapGuiElementMembers & GuiElementIndex

/** @noSelf */
interface ProgressbarGuiElementMembers extends BaseGuiElement {
  /**
   * The type of this GUI element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.type View documentation}
   */
  readonly type: "progressbar"
  /**
   * How much this progress bar is filled. It is a value in the range [0, 1].
   *
   * *Can only be used if this is progressbar*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.value View documentation}
   */
  value: double
}

type ProgressbarGuiElement = ProgressbarGuiElementMembers & GuiElementIndex

/** @noSelf */
interface RadiobuttonGuiElementMembers extends BaseGuiElement {
  /**
   * The type of this GUI element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.type View documentation}
   */
  readonly type: "radiobutton"
  /**
   * Is this checkbox or radiobutton checked?
   *
   * *Can only be used if this is CheckBox or RadioButton*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.state View documentation}
   */
  state: boolean
}

type RadiobuttonGuiElement = RadiobuttonGuiElementMembers & GuiElementIndex

/** @noSelf */
interface SliderGuiElementMembers extends BaseGuiElement {
  /**
   * The type of this GUI element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.type View documentation}
   */
  readonly type: "slider"
  /**
   * Gets this sliders minimum value.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.get_slider_minimum View documentation}
   */
  get_slider_minimum(): double
  /**
   * Gets this sliders maximum value.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.get_slider_maximum View documentation}
   */
  get_slider_maximum(): double
  /**
   * Sets this sliders minimum and maximum values.
   *
   * **Note**: The minimum can't be >= the maximum.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.set_slider_minimum_maximum View documentation}
   *
   * @param minimum
   * @param maximum
   */
  set_slider_minimum_maximum(minimum: double, maximum: double): void
  /**
   * Gets the minimum distance this slider can move.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.get_slider_value_step View documentation}
   */
  get_slider_value_step(): double
  /**
   * Returns whether this slider only allows being moved to discrete positions.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.get_slider_discrete_slider View documentation}
   */
  get_slider_discrete_slider(): boolean
  /**
   * Returns whether this slider only allows discrete values.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.get_slider_discrete_values View documentation}
   */
  get_slider_discrete_values(): boolean
  /**
   * Sets the minimum distance this slider can move.
   *
   * **Note**: The minimum distance can't be > (max - min).
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.set_slider_value_step View documentation}
   *
   * @param value
   */
  set_slider_value_step(value: double): void
  /**
   * Sets whether this slider only allows being moved to discrete positions.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.set_slider_discrete_slider View documentation}
   *
   * @param value
   */
  set_slider_discrete_slider(value: boolean): void
  /**
   * Sets whether this slider only allows discrete values.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.set_slider_discrete_values View documentation}
   *
   * @param value
   */
  set_slider_discrete_values(value: boolean): void
  /**
   * The value of this slider element.
   *
   * *Can only be used if this is slider*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.slider_value View documentation}
   */
  slider_value: double
}

type SliderGuiElement = SliderGuiElementMembers & GuiElementIndex

/** @noSelf */
interface SpriteGuiElementMembers extends BaseGuiElement {
  /**
   * The type of this GUI element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.type View documentation}
   */
  readonly type: "sprite"
  /**
   * The image to display on this sprite-button or sprite in the default state.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.sprite View documentation}
   */
  sprite: SpritePath
  /**
   * Whether the image widget should resize according to the sprite in it. Defaults to `true`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.resize_to_sprite View documentation}
   */
  resize_to_sprite: boolean
}

type SpriteGuiElement = SpriteGuiElementMembers & GuiElementIndex

/** @noSelf */
interface SwitchGuiElementMembers extends BaseGuiElement {
  /**
   * The type of this GUI element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.type View documentation}
   */
  readonly type: "switch"
  /**
   * The switch state (left, none, right) for this switch.
   *
   * **Note**: If {@link LuaGuiElement.allow_none_state LuaGuiElement::allow_none_state} is false this can't be set to `"none"`.
   *
   * *Can only be used if this is switch*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.switch_state View documentation}
   */
  switch_state: string
  /**
   * Whether the `"none"` state is allowed for this switch.
   *
   * **Note**: This can't be set to false if the current switch_state is 'none'.
   *
   * *Can only be used if this is switch*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.allow_none_state View documentation}
   */
  allow_none_state: boolean
  /**
   * The text shown for the left switch label.
   *
   * *Can only be used if this is switch*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.left_label_caption View documentation}
   */
  left_label_caption: LocalisedString
  /**
   * The tooltip shown on the left switch label.
   *
   * *Can only be used if this is switch*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.left_label_tooltip View documentation}
   */
  left_label_tooltip: LocalisedString
  /**
   * The text shown for the right switch label.
   *
   * *Can only be used if this is switch*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.right_label_caption View documentation}
   */
  right_label_caption: LocalisedString
  /**
   * The tooltip shown on the right switch label.
   *
   * *Can only be used if this is switch*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.right_label_tooltip View documentation}
   */
  right_label_tooltip: LocalisedString
}

type SwitchGuiElement = SwitchGuiElementMembers & GuiElementIndex

/** @noSelf */
interface TabGuiElementMembers extends BaseGuiElement {
  /**
   * The type of this GUI element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.type View documentation}
   */
  readonly type: "tab"
  /**
   * The text to display after the normal tab text (designed to work with numbers)
   *
   * *Can only be used if this is tab*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.badge_text View documentation}
   */
  badge_text: LocalisedString
}

type TabGuiElement = TabGuiElementMembers & GuiElementIndex

/** @noSelf */
interface TableGuiElementMembers extends BaseGuiElement {
  /**
   * The type of this GUI element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.type View documentation}
   */
  readonly type: "table"
  /**
   * Whether this table should draw vertical grid lines.
   *
   * *Can only be used if this is table*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.draw_vertical_lines View documentation}
   */
  draw_vertical_lines: boolean
  /**
   * Whether this table should draw horizontal grid lines.
   *
   * *Can only be used if this is table*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.draw_horizontal_lines View documentation}
   */
  draw_horizontal_lines: boolean
  /**
   * Whether this table should draw a horizontal grid line below the first table row.
   *
   * *Can only be used if this is table*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.draw_horizontal_line_after_headers View documentation}
   */
  draw_horizontal_line_after_headers: boolean
  /**
   * The number of columns in this table.
   *
   * *Can only be used if this is table*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.column_count View documentation}
   */
  readonly column_count: uint
  /**
   * Whether the content of this table should be vertically centered. Overrides
   * {@link LuaStyle.column_alignments LuaStyle::column_alignments}. Defaults to `true`.
   *
   * *Can only be used if this is table*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.vertical_centering View documentation}
   */
  vertical_centering: boolean
  /**
   * The frame drag target for this flow, frame, label, table, or empty-widget.
   *
   * **Note**: drag_target can only be set to a frame stored directly in {@link LuaGui.screen LuaGui::screen} or `nil`.
   *
   * **Note**: drag_target can only be set on child elements in {@link LuaGui.screen LuaGui::screen}.
   *
   * **Note**: drag_target can only be set to a higher level parent element (this element must be owned at some nested
   * level by the drag_target).
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.drag_target View documentation}
   */
  drag_target: LuaGuiElement | undefined
}

type TableGuiElement = TableGuiElementMembers & GuiElementIndex

/** @noSelf */
interface TextfieldGuiElementMembers extends BaseGuiElement {
  /**
   * The type of this GUI element.
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.type View documentation}
   */
  readonly type: "textfield"
  /**
   * Selects all the text in this textbox.
   *
   * *Can only be used if this is textfield or text-box*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.select_all View documentation}
   */
  select_all(): void
  /**
   * Selects a range of text in this textbox.
   *
   * *Can only be used if this is textfield or text-box*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.select View documentation}
   *
   * @example
   *   Select the characters `amp` from `example`:
   *
   *   ```lua
   *   textbox.select(3, 5)
   *   ```
   *
   * @example
   *   Move the cursor to the start of the text box:
   *
   *   ```lua
   *   textbox.select(1, 0)
   *   ```
   *
   * @param start - The index of the first character to select
   * @param end - The index of the last character to select
   */
  select(start: int, end: int): void
  /**
   * The text contained in this textfield or text-box.
   *
   * *Can only be used if this is textfield or text-box*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.text View documentation}
   */
  text: string
  /**
   * Whether this textfield is limited to only numberic characters.
   *
   * *Can only be used if this is textfield*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.numeric View documentation}
   */
  numeric: boolean
  /**
   * Whether this textfield (when in numeric mode) allows decimal numbers.
   *
   * *Can only be used if this is textfield*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.allow_decimal View documentation}
   */
  allow_decimal: boolean
  /**
   * Whether this textfield (when in numeric mode) allows negative numbers.
   *
   * *Can only be used if this is textfield*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.allow_negative View documentation}
   */
  allow_negative: boolean
  /**
   * Whether this textfield displays as a password field, which renders all characters as `*`.
   *
   * *Can only be used if this is textfield*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.is_password View documentation}
   */
  is_password: boolean
  /**
   * Whether this textfield loses focus after {@link defines.events.on_gui_confirmed} is fired.
   *
   * *Can only be used if this is textfield*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.lose_focus_on_confirm View documentation}
   */
  lose_focus_on_confirm: boolean
  /**
   * Makes it so right-clicking on this textfield clears and focuses it.
   *
   * *Can only be used if this is textfield or text-box*
   *
   * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html#LuaGuiElement.clear_and_focus_on_right_click View documentation}
   */
  clear_and_focus_on_right_click: boolean
}

type TextfieldGuiElement = TextfieldGuiElementMembers & GuiElementIndex

type GuiElementMembers =
  | ChooseElemButtonGuiElementMembers
  | DropDownGuiElementMembers
  | EmptyWidgetGuiElementMembers
  | EntityPreviewGuiElementMembers
  | ListBoxGuiElementMembers
  | ScrollPaneGuiElementMembers
  | SpriteButtonGuiElementMembers
  | TabbedPaneGuiElementMembers
  | TextBoxGuiElementMembers
  | ButtonGuiElementMembers
  | CameraGuiElementMembers
  | CheckboxGuiElementMembers
  | FlowGuiElementMembers
  | FrameGuiElementMembers
  | LabelGuiElementMembers
  | LineGuiElementMembers
  | MinimapGuiElementMembers
  | ProgressbarGuiElementMembers
  | RadiobuttonGuiElementMembers
  | SliderGuiElementMembers
  | SpriteGuiElementMembers
  | SwitchGuiElementMembers
  | TabGuiElementMembers
  | TableGuiElementMembers
  | TextfieldGuiElementMembers

/**
 * An element of a custom GUI. This type is used to represent any kind of a GUI element - labels, buttons and frames are
 * all instances of this type. Just like {@link LuaEntity}, different kinds of elements support different attributes;
 * attempting to access an attribute on an element that doesn't support it (for instance, trying to access the
 * `column_count` of a `textfield`) will result in a runtime error.
 *
 * The following types of GUI element are supported:
 *
 * - `"button"`: A clickable element. Relevant event: {@link OnGuiClickEvent on_gui_click}
 * - `"sprite-button"`: A `button` that displays a sprite rather than text. Relevant event: {@link OnGuiClickEvent on_gui_click}
 * - `"checkbox"`: A clickable element with a check mark that can be turned off or on. Relevant event:
 *   {@link OnGuiCheckedStateChangedEvent on_gui_checked_state_changed}
 * - `"flow"`: An invisible container that lays out its children either horizontally or vertically.
 * - `"frame"`: A non-transparent box that contains other elements. It can have a title (set via the `caption` attribute).
 *   Just like a `flow`, it lays out its children either horizontally or vertically. Relevant event:
 *   {@link OnGuiLocationChangedEvent on_gui_location_changed}
 * - `"label"`: A piece of text.
 * - `"line"`: A horizontal or vertical separation line.
 * - `"progressbar"`: A partially filled bar that can be used to indicate progress.
 * - `"table"`: An invisible container that lays out its children in a specific number of columns. The width of each
 *   column is determined by the widest element it contains.
 * - `"textfield"`: A single-line box the user can type into. Relevant events:
 *   {@link OnGuiTextChangedEvent on_gui_text_changed}, {@link OnGuiConfirmedEvent on_gui_confirmed}
 * - `"radiobutton"`: A clickable element that is functionally identical to a `checkbox`, but has a circular appearance.
 *   Relevant event: {@link OnGuiCheckedStateChangedEvent on_gui_checked_state_changed}
 * - `"sprite"`: An element that shows an image.
 * - `"scroll-pane"`: An invisible element that is similar to a `flow`, but has the ability to show and use scroll bars.
 * - `"drop-down"`: A drop-down containing strings of text. Relevant event:
 *   {@link OnGuiSelectionStateChangedEvent on_gui_selection_state_changed}
 * - `"list-box"`: A list of strings, only one of which can be selected at a time. Shows a scroll bar if necessary.
 *   Relevant event: {@link OnGuiSelectionStateChangedEvent on_gui_selection_state_changed}
 * - `"camera"`: A camera that shows the game at the given position on the given surface. It can visually track an
 *   {@link LuaGuiElement.entity entity} that is set after the element has been created.
 * - `"choose-elem-button"`: A button that lets the player pick from a certain kind of prototype, with optional filtering.
 *   Relevant event: {@link OnGuiElemChangedEvent on_gui_elem_changed}
 * - `"text-box"`: A multi-line `textfield`. Relevant event: {@link OnGuiTextChangedEvent on_gui_text_changed}
 * - `"slider"`: A horizontal number line which can be used to choose a number. Relevant event:
 *   {@link OnGuiValueChangedEvent on_gui_value_changed}
 * - `"minimap"`: A minimap preview, similar to the normal player minimap. It can visually track an
 *   {@link LuaGuiElement.entity entity} that is set after the element has been created.
 * - `"entity-preview"`: A preview of an entity. The {@link LuaGuiElement.entity entity} has to be set after the element
 *   has been created.
 * - `"empty-widget"`: An empty element that just exists. The root GUI elements `screen` and `relative` are `empty-widget`s.
 * - `"tabbed-pane"`: A collection of `tab`s and their contents. Relevant event:
 *   {@link OnGuiSelectedTabChangedEvent on_gui_selected_tab_changed}
 * - `"tab"`: A tab for use in a `tabbed-pane`.
 * - `"switch"`: A switch with three possible states. Can have labels attached to either side. Relevant event:
 *   {@link OnGuiSwitchStateChangedEvent on_gui_switch_state_changed}
 *
 * Each GUI element allows access to its children by having them as attributes. Thus, one can use the `parent.child`
 * syntax to refer to children. Lua also supports the `parent["child"]` syntax to refer to the same element. This can be
 * used in cases where the child has a name that isn't a valid Lua identifier.
 *
 * {@link https://lua-api.factorio.com/latest/LuaGuiElement.html View documentation}
 *
 * @example
 *   This will add a label called `greeting` to the top flow. Immediately after, it will change its text to illustrate accessing child elements.
 *
 *   ```lua
 *   game.player.gui.top.add{type="label", name="greeting", caption="Hi"}
 *   game.player.gui.top.greeting.caption = "Hello there!"
 *   game.player.gui.top["greeting"].caption = "Actually, never mind, I don't like your face"
 *   ```
 *
 * @example
 *   This will add a tabbed-pane and 2 tabs with contents.
 *
 *   ```lua
 *   local tabbed_pane = game.player.gui.top.add{type="tabbed-pane"}
 *   local tab1 = tabbed_pane.add{type="tab", caption="Tab 1"}
 *   local tab2 = tabbed_pane.add{type="tab", caption="Tab 2"}
 *   local label1 = tabbed_pane.add{type="label", caption="Label 1"}
 *   local label2 = tabbed_pane.add{type="label", caption="Label 2"}
 *   tabbed_pane.add_tab(tab1, label1)
 *   tabbed_pane.add_tab(tab2, label2)
 *   ```
 */
type LuaGuiElement = GuiElementMembers & GuiElementIndex

/**
 * Prototype of a heat energy source.
 *
 * {@link https://lua-api.factorio.com/latest/LuaHeatEnergySourcePrototype.html View documentation}
 *
 * @noSelf
 */
interface LuaHeatEnergySourcePrototype {
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
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaHeatEnergySourcePrototype"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Control behavior for inserters.
 *
 * {@link https://lua-api.factorio.com/latest/LuaInserterControlBehavior.html View documentation}
 *
 * @noSelf
 */
interface LuaInserterControlBehavior extends LuaGenericOnOffControlBehavior {
  /**
   * `true` if the contents of the inserter hand should be sent to the circuit network
   *
   * {@link https://lua-api.factorio.com/latest/LuaInserterControlBehavior.html#LuaInserterControlBehavior.circuit_read_hand_contents View documentation}
   */
  circuit_read_hand_contents: boolean
  /**
   * The circuit mode of operations for the inserter.
   *
   * {@link https://lua-api.factorio.com/latest/LuaInserterControlBehavior.html#LuaInserterControlBehavior.circuit_mode_of_operation View documentation}
   */
  circuit_mode_of_operation: defines.control_behavior.inserter.circuit_mode_of_operation
  /**
   * The hand read mode for the inserter.
   *
   * {@link https://lua-api.factorio.com/latest/LuaInserterControlBehavior.html#LuaInserterControlBehavior.circuit_hand_read_mode View documentation}
   */
  circuit_hand_read_mode: defines.control_behavior.inserter.hand_read_mode
  /**
   * If the stack size of the inserter is set through the circuit network or not.
   *
   * {@link https://lua-api.factorio.com/latest/LuaInserterControlBehavior.html#LuaInserterControlBehavior.circuit_set_stack_size View documentation}
   */
  circuit_set_stack_size: boolean
  /**
   * The signal used to set the stack size of the inserter.
   *
   * {@link https://lua-api.factorio.com/latest/LuaInserterControlBehavior.html#LuaInserterControlBehavior.circuit_stack_control_signal View documentation}
   */
  circuit_stack_control_signal: SignalID
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaInserterControlBehavior"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * A storage of item stacks.
 *
 * {@link https://lua-api.factorio.com/latest/LuaInventory.html View documentation}
 *
 * @noSelf
 */
interface LuaInventory extends ReadonlyArray<LuaItemStack> {
  /**
   * Make this inventory empty.
   *
   * {@link https://lua-api.factorio.com/latest/LuaInventory.html#LuaInventory.clear View documentation}
   */
  clear(): void
  /**
   * Can at least some items be inserted?
   *
   * {@link https://lua-api.factorio.com/latest/LuaInventory.html#LuaInventory.can_insert View documentation}
   *
   * @param items - Items that would be inserted.
   * @returns `true` if at least a part of the given items could be inserted into this inventory.
   */
  can_insert(items: ItemStackIdentification): boolean
  /**
   * Insert items into this inventory.
   *
   * {@link https://lua-api.factorio.com/latest/LuaInventory.html#LuaInventory.insert View documentation}
   *
   * @param items - Items to insert.
   * @returns Number of items actually inserted.
   */
  insert(items: ItemStackIdentification): uint
  /**
   * Remove items from this inventory.
   *
   * {@link https://lua-api.factorio.com/latest/LuaInventory.html#LuaInventory.remove View documentation}
   *
   * @param items - Items to remove.
   * @returns Number of items actually removed.
   */
  remove(items: ItemStackIdentification): uint
  /**
   * Get the number of all or some items in this inventory.
   *
   * {@link https://lua-api.factorio.com/latest/LuaInventory.html#LuaInventory.get_item_count View documentation}
   *
   * @param item - Prototype name of the item to count. If not specified, count all items.
   */
  get_item_count(item?: string): uint
  /**
   * Does this inventory contain nothing?
   *
   * {@link https://lua-api.factorio.com/latest/LuaInventory.html#LuaInventory.is_empty View documentation}
   */
  is_empty(): boolean
  /**
   * Get counts of all items in this inventory.
   *
   * {@link https://lua-api.factorio.com/latest/LuaInventory.html#LuaInventory.get_contents View documentation}
   *
   * @returns The counts, indexed by item names.
   */
  get_contents(): Record<string, uint>
  /**
   * Does this inventory support a bar? Bar is the draggable red thing, found for example on chests, that limits the
   * portion of the inventory that may be manipulated by machines.
   *
   * **Note**: "Supporting a bar" doesn't mean that the bar is set to some nontrivial value. Supporting a bar means
   * the inventory supports having this limit at all. The character's inventory is an example of an inventory without
   * a bar; the wooden chest's inventory is an example of one with a bar.
   *
   * {@link https://lua-api.factorio.com/latest/LuaInventory.html#LuaInventory.supports_bar View documentation}
   */
  supports_bar(): boolean
  /**
   * Get the current bar. This is the index at which the red area starts.
   *
   * **Note**: Only useable if this inventory supports having a bar.
   *
   * {@link https://lua-api.factorio.com/latest/LuaInventory.html#LuaInventory.get_bar View documentation}
   */
  get_bar(): uint
  /**
   * Set the current bar.
   *
   * **Note**: Only useable if this inventory supports having a bar.
   *
   * {@link https://lua-api.factorio.com/latest/LuaInventory.html#LuaInventory.set_bar View documentation}
   *
   * @param bar - The new limit. Omitting this parameter will clear the limit.
   */
  set_bar(bar?: uint): void
  /**
   * If this inventory supports filters.
   *
   * {@link https://lua-api.factorio.com/latest/LuaInventory.html#LuaInventory.supports_filters View documentation}
   */
  supports_filters(): boolean
  /**
   * If this inventory supports filters and has at least 1 filter set.
   *
   * {@link https://lua-api.factorio.com/latest/LuaInventory.html#LuaInventory.is_filtered View documentation}
   */
  is_filtered(): boolean
  /**
   * If the given inventory slot filter can be set to the given filter.
   *
   * {@link https://lua-api.factorio.com/latest/LuaInventory.html#LuaInventory.can_set_filter View documentation}
   *
   * @param index - The item stack index
   * @param filter - The item name of the filter
   */
  can_set_filter(index: uint, filter: string): boolean
  /**
   * Gets the filter for the given item stack index.
   *
   * {@link https://lua-api.factorio.com/latest/LuaInventory.html#LuaInventory.get_filter View documentation}
   *
   * @param index - The item stack index
   * @returns The current filter or nil if none.
   */
  get_filter(index: uint): string | undefined
  /**
   * Sets the filter for the given item stack index.
   *
   * **Note**: Some inventory slots don't allow some filters (gun ammo can't be filtered for non-ammo).
   *
   * {@link https://lua-api.factorio.com/latest/LuaInventory.html#LuaInventory.set_filter View documentation}
   *
   * @param index - The item stack index
   * @param filter - The new filter or nil to erase the filter
   * @returns If the filter was allowed to be set.
   */
  set_filter(index: uint, filter: string | undefined): boolean
  /**
   * Gets the first LuaItemStack in the inventory that matches the given item name.
   *
   * **Note**: This will also return the stack index if one is found that matches as a second return value.
   *
   * {@link https://lua-api.factorio.com/latest/LuaInventory.html#LuaInventory.find_item_stack View documentation}
   *
   * @param item - The item name to find
   * @returns The first matching stack, or `nil` if none match.
   */
  find_item_stack(item: string): LuaMultiReturn<[undefined] | [LuaItemStack, uint]>
  /**
   * Finds the first empty stack. Filtered slots are excluded unless a filter item is given.
   *
   * **Note**: This will also return the stack index if one is found that matches as a second return value.
   *
   * {@link https://lua-api.factorio.com/latest/LuaInventory.html#LuaInventory.find_empty_stack View documentation}
   *
   * @param item - If given, empty stacks that are filtered for this item will be included.
   * @returns The first empty stack, or `nil` if there aren't any empty stacks.
   */
  find_empty_stack(item?: string): LuaMultiReturn<[undefined] | [LuaItemStack, uint]>
  /**
   * Counts the number of empty stacks.
   *
   * {@link https://lua-api.factorio.com/latest/LuaInventory.html#LuaInventory.count_empty_stacks View documentation}
   *
   * @param include_filtered - If true, filtered slots will be included. Defaults to false.
   */
  count_empty_stacks(include_filtered?: boolean): uint
  /**
   * Gets the number of the given item that can be inserted into this inventory.
   *
   * **Note**: This is a "best guess" number; things like assembling machine filtered slots, module slots, items with
   * durability, and items with mixed health will cause the result to be inaccurate.
   *
   * **Note**: The main use for this is in checking how many of a basic item can fit into a basic inventory.
   *
   * **Note**: This accounts for the 'bar' on the inventory.
   *
   * {@link https://lua-api.factorio.com/latest/LuaInventory.html#LuaInventory.get_insertable_count View documentation}
   *
   * @param item - The item to check.
   */
  get_insertable_count(item: string): void
  /**
   * Sorts and merges the items in this inventory.
   *
   * {@link https://lua-api.factorio.com/latest/LuaInventory.html#LuaInventory.sort_and_merge View documentation}
   */
  sort_and_merge(): void
  /**
   * Resizes the inventory.
   *
   * **Note**: Items in slots beyond the new capacity are deleted.
   *
   * **Note**: Only inventories created by {@link LuaGameScript.create_inventory LuaGameScript::create_inventory} can be resized.
   *
   * {@link https://lua-api.factorio.com/latest/LuaInventory.html#LuaInventory.resize View documentation}
   *
   * @param size - New size of a inventory
   */
  resize(size: uint16): void
  /**
   * Destroys this inventory.
   *
   * **Note**: Only inventories created by {@link LuaGameScript.create_inventory LuaGameScript::create_inventory} can
   * be destroyed this way.
   *
   * {@link https://lua-api.factorio.com/latest/LuaInventory.html#LuaInventory.destroy View documentation}
   */
  destroy(): void
  /**
   * Get the number of slots in this inventory.
   *
   * {@link https://lua-api.factorio.com/latest/LuaInventory.html#LuaInventory.operator%20# View documentation}
   *
   * @example
   *   Will print the number of slots in the player's main inventory.
   *
   *   ```lua
   *   game.player.print(#game.player.get_main_inventory())
   *   ```
   */
  readonly length: uint
  /**
   * The inventory index this inventory uses, or `nil` if the inventory doesn't have an index.
   *
   * {@link https://lua-api.factorio.com/latest/LuaInventory.html#LuaInventory.index View documentation}
   */
  readonly index: defines.inventory | undefined
  /**
   * The entity that owns this inventory or `nil` if this isn't owned by an entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaInventory.html#LuaInventory.entity_owner View documentation}
   */
  readonly entity_owner: LuaEntity | undefined
  /**
   * The player that owns this inventory or `nil` if this isn't owned by a player.
   *
   * {@link https://lua-api.factorio.com/latest/LuaInventory.html#LuaInventory.player_owner View documentation}
   */
  readonly player_owner: LuaPlayer | undefined
  /**
   * The equipment that owns this inventory or `nil` if this isn't owned by an equipment.
   *
   * {@link https://lua-api.factorio.com/latest/LuaInventory.html#LuaInventory.equipment_owner View documentation}
   */
  readonly equipment_owner: LuaEquipment | undefined
  /**
   * The mod that owns this inventory or `nil` if this isn't owned by a mod.
   *
   * {@link https://lua-api.factorio.com/latest/LuaInventory.html#LuaInventory.mod_owner View documentation}
   */
  readonly mod_owner: string | undefined
  /**
   * The indexing operator.
   *
   * {@link https://lua-api.factorio.com/latest/LuaInventory.html#LuaInventory.operator%20[] View documentation}
   *
   * @example
   *   Will get the first item in the player's inventory.
   *
   *   ```lua
   *   game.player.get_main_inventory()[1]
   *   ```
   */
  readonly [index: number]: LuaItemStack
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaInventory"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Prototype of an item.
 *
 * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html View documentation}
 *
 * @example
 *   ```lua
 *   game.item_prototypes["iron-plate"]
 *   ```
 *
 * @noSelf
 */
interface LuaItemPrototype {
  /**
   * Test whether this item prototype has a certain flag set.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.has_flag View documentation}
   *
   * @param flag - The flag to test. See {@link ItemPrototypeFlags} for a list of flags.
   * @returns `true` if this prototype has the given flag set.
   */
  has_flag(flag: string): boolean
  /**
   * Type of this ammo prototype or `nil` if this is not an ammo prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.get_ammo_type View documentation}
   *
   * @param ammo_source_type - "default", "player", "turret", or "vehicle"
   */
  get_ammo_type(ammo_source_type?: "default" | "player" | "turret" | "vehicle"): AmmoType | undefined
  /**
   * Type of this prototype. E.g. `"gun"` or `"mining-tool"`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.type View documentation}
   */
  readonly type: string
  /**
   * Name of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.name View documentation}
   */
  readonly name: string
  readonly localised_name: LocalisedString
  readonly localised_description: LocalisedString
  /**
   * Order string.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.order View documentation}
   */
  readonly order: string
  /**
   * Prototype of the entity that will be created by placing this item, or `nil` if there is no such entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.place_result View documentation}
   */
  readonly place_result: LuaEntityPrototype | undefined
  /**
   * Prototype of the equipment that will be created by placing this item in an equipment grid or `nil` if there is no
   * equipment defined.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.place_as_equipment_result View documentation}
   */
  readonly place_as_equipment_result: LuaEquipmentPrototype | undefined
  /**
   * The place-as-tile result if one is defined, else `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.place_as_tile_result View documentation}
   */
  readonly place_as_tile_result: PlaceAsTileResult | undefined
  /**
   * Is this item allowed to stack at all?
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.stackable View documentation}
   */
  readonly stackable: boolean
  /**
   * The default request value.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.default_request_amount View documentation}
   */
  readonly default_request_amount: uint
  /**
   * Maximum stack size of the item specified by this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.stack_size View documentation}
   */
  readonly stack_size: uint
  /**
   * The number of items needed to connect 2 entities with this as wire.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.wire_count View documentation}
   */
  readonly wire_count: uint
  /**
   * The fuel category or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.fuel_category View documentation}
   */
  readonly fuel_category: string | undefined
  /**
   * The result of burning this item as fuel or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.burnt_result View documentation}
   */
  readonly burnt_result: LuaItemPrototype | undefined
  /**
   * Fuel value when burned.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.fuel_value View documentation}
   */
  readonly fuel_value: float
  /**
   * The acceleration multiplier when this item is used as fuel in a vehicle.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.fuel_acceleration_multiplier View documentation}
   */
  readonly fuel_acceleration_multiplier: double
  /**
   * The fuel top speed multiplier when this item is used as fuel in a vehicle.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.fuel_top_speed_multiplier View documentation}
   */
  readonly fuel_top_speed_multiplier: double
  /**
   * The emissions multiplier if this is used as fuel.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.fuel_emissions_multiplier View documentation}
   */
  readonly fuel_emissions_multiplier: double
  /**
   * The subgroup this prototype belongs to.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.subgroup View documentation}
   */
  readonly subgroup: LuaGroup
  /**
   * The group this prototype belongs to.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.group View documentation}
   */
  readonly group: LuaGroup
  /**
   * The flags for this item prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.flags View documentation}
   */
  readonly flags: ItemPrototypeFlags
  /**
   * The results from launching this item in a rocket.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.rocket_launch_products View documentation}
   */
  readonly rocket_launch_products: Product[]
  /**
   * If this item can be mod-opened.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.can_be_mod_opened View documentation}
   */
  readonly can_be_mod_opened: boolean
  /**
   * Size of full magazine; `nil` if this is not an ammo item.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.magazine_size View documentation}
   */
  readonly magazine_size: float | undefined
  /**
   * Amount of extra time (in ticks) it takes to reload the weapon after depleting the magazine or `nil` if this is
   * not an ammo item.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.reload_time View documentation}
   */
  readonly reload_time: float | undefined
  /**
   * The prototype of this armor equipment grid or `nil` if none or this is not an armor item.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.equipment_grid View documentation}
   */
  readonly equipment_grid: LuaEquipmentGridPrototype | undefined
  /**
   * Resistances of this armour item, indexed by damage type name. `nil` if not an armor or the armor has no resistances.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.resistances View documentation}
   */
  readonly resistances: Record<string, Resistance> | undefined
  /**
   * The inventory size bonus for this armor prototype. `nil` if this isn't an armor prototype.
   *
   * *Can only be used if this is ArmorPrototype*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.inventory_size_bonus View documentation}
   */
  readonly inventory_size_bonus: uint | undefined
  /**
   * The capsule action for this capsule item prototype or `nil` if this isn't a capsule item prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.capsule_action View documentation}
   */
  readonly capsule_action: CapsuleAction | undefined
  /**
   * The gun attack parameters or `nil` if not a gun item prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.attack_parameters View documentation}
   */
  readonly attack_parameters: AttackParameters | undefined
  /**
   * The main inventory size for item-with-inventory-prototype. `nil` if not an item-with-inventory-prototype.
   *
   * *Can only be used if this is ItemWithInventoryPrototype*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.inventory_size View documentation}
   */
  readonly inventory_size: uint | undefined
  /**
   * *Can only be used if this is ItemWithInventory*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.item_filters View documentation}
   */
  readonly item_filters: Record<string, LuaItemPrototype>
  /**
   * *Can only be used if this is ItemWithInventory*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.item_group_filters View documentation}
   */
  readonly item_group_filters: Record<string, LuaGroup>
  /**
   * *Can only be used if this is ItemWithInventory*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.item_subgroup_filters View documentation}
   */
  readonly item_subgroup_filters: Record<string, LuaGroup>
  /**
   * The filter mode used by this item with inventory.
   *
   * *Can only be used if this is ItemWithInventory*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.filter_mode View documentation}
   */
  readonly filter_mode: string
  /**
   * The insertion priority mode used by this item with inventory.
   *
   * *Can only be used if this is ItemWithInventory*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.insertion_priority_mode View documentation}
   */
  readonly insertion_priority_mode: string
  /**
   * The localised string used when the player attempts to put items into this item with inventory that aren't allowed.
   *
   * *Can only be used if this is ItemWithInventory*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.localised_filter_message View documentation}
   */
  readonly localised_filter_message: LocalisedString
  /**
   * If this item with inventory extends the inventory it resides in by default.
   *
   * *Can only be used if this is ItemWithInventory*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.extend_inventory_by_default View documentation}
   */
  readonly extend_inventory_by_default: boolean
  /**
   * The default label color used for this item with label. `nil` if not defined or if this isn't an item with label.
   *
   * *Can only be used if this is ItemWithLabel*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.default_label_color View documentation}
   */
  readonly default_label_color: ColorTable | undefined
  /**
   * If true, and this item with label has a label it is drawn in place of the normal number when held in the cursor.
   *
   * *Can only be used if this is ItemWithLabel*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.draw_label_for_cursor_render View documentation}
   */
  readonly draw_label_for_cursor_render: boolean
  /**
   * The repairing speed if this is a repairing tool; otherwise `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.speed View documentation}
   */
  readonly speed: float | undefined
  /**
   * Effects of this module; `nil` if this is not a module.
   *
   * *Can only be used if this is ModuleItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.module_effects View documentation}
   */
  readonly module_effects: ModuleEffects | undefined
  /**
   * The name of a {@link LuaModuleCategoryPrototype}. Used when upgrading modules: Ctrl + click modules into an entity
   * and it will replace lower tier modules of the same category with higher tier modules.
   *
   * *Can only be used if this is ModuleItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.category View documentation}
   */
  readonly category: string
  /**
   * Tier of the module inside its category. Used when upgrading modules: Ctrl + click modules into an entity and it
   * will replace lower tier modules with higher tier modules if they have the same category.
   *
   * *Can only be used if this is ModuleItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.tier View documentation}
   */
  readonly tier: uint
  /**
   * An array of recipe names this module is allowed to work with. Empty when all recipes are allowed.
   *
   * *Can only be used if this is ModuleItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.limitations View documentation}
   */
  readonly limitations: string[]
  /**
   * The limitation message key used when the player attempts to use this modules in some place it's not allowed.
   *
   * *Can only be used if this is ModuleItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.limitation_message_key View documentation}
   */
  readonly limitation_message_key: string
  /**
   * The straight rail prototype used for this rail planner prototype.
   *
   * *Can only be used if this is RailPlanner*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.straight_rail View documentation}
   */
  readonly straight_rail: LuaEntityPrototype
  /**
   * The curved rail prototype used for this rail planner prototype.
   *
   * *Can only be used if this is RailPlanner*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.curved_rail View documentation}
   */
  readonly curved_rail: LuaEntityPrototype
  /**
   * The repair result of this repair tool prototype or `nil` if this isn't a repair tool prototype.
   *
   * *Can only be used if this is RepairTool*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.repair_result View documentation}
   */
  readonly repair_result: TriggerItem[] | undefined
  /**
   * The color used when doing normal selection with this selection tool prototype.
   *
   * *Can only be used if this is SelectionTool*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.selection_border_color View documentation}
   */
  readonly selection_border_color: ColorTable
  /**
   * The color used when doing alt selection with this selection tool prototype.
   *
   * *Can only be used if this is SelectionTool*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.alt_selection_border_color View documentation}
   */
  readonly alt_selection_border_color: ColorTable
  /**
   * Flags that affect which entities will be selected.
   *
   * *Can only be used if this is SelectionTool*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.selection_mode_flags View documentation}
   */
  readonly selection_mode_flags: SelectionModeFlags
  /**
   * Flags that affect which entities will be selected during alternate selection.
   *
   * *Can only be used if this is SelectionTool*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.alt_selection_mode_flags View documentation}
   */
  readonly alt_selection_mode_flags: SelectionModeFlags
  /**
   * *Can only be used if this is SelectionTool*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.selection_cursor_box_type View documentation}
   */
  readonly selection_cursor_box_type: string
  /**
   * *Can only be used if this is SelectionTool*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.alt_selection_cursor_box_type View documentation}
   */
  readonly alt_selection_cursor_box_type: string
  /**
   * If tiles area always included when doing selection with this selection tool prototype.
   *
   * *Can only be used if this is SelectionTool*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.always_include_tiles View documentation}
   */
  readonly always_include_tiles: boolean
  /**
   * The entity filter mode used by this selection tool.
   *
   * *Can only be used if this is SelectionTool*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.entity_filter_mode View documentation}
   */
  readonly entity_filter_mode: string
  /**
   * The alt entity filter mode used by this selection tool.
   *
   * *Can only be used if this is SelectionTool*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.alt_entity_filter_mode View documentation}
   */
  readonly alt_entity_filter_mode: string
  /**
   * The tile filter mode used by this selection tool.
   *
   * *Can only be used if this is SelectionTool*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.tile_filter_mode View documentation}
   */
  readonly tile_filter_mode: string
  /**
   * The alt tile filter mode used by this selection tool.
   *
   * *Can only be used if this is SelectionTool*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.alt_tile_filter_mode View documentation}
   */
  readonly alt_tile_filter_mode: string
  /**
   * The entity filters used by this selection tool indexed by entity name.
   *
   * *Can only be used if this is SelectionTool*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.entity_filters View documentation}
   */
  readonly entity_filters: Record<string, LuaEntityPrototype>
  /**
   * The alt entity filters used by this selection tool indexed by entity name.
   *
   * *Can only be used if this is SelectionTool*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.alt_entity_filters View documentation}
   */
  readonly alt_entity_filters: Record<string, LuaEntityPrototype>
  /**
   * The entity type filters used by this selection tool indexed by entity type.
   *
   * **Note**: The boolean value is meaningless and is used to allow easy lookup if a type exists in the dictionary.
   *
   * *Can only be used if this is SelectionTool*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.entity_type_filters View documentation}
   */
  readonly entity_type_filters: Record<string, boolean>
  /**
   * The alt entity type filters used by this selection tool indexed by entity type.
   *
   * **Note**: The boolean value is meaningless and is used to allow easy lookup if a type exists in the dictionary.
   *
   * *Can only be used if this is SelectionTool*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.alt_entity_type_filters View documentation}
   */
  readonly alt_entity_type_filters: Record<string, boolean>
  /**
   * The tile filters used by this selection tool indexed by tile name.
   *
   * *Can only be used if this is SelectionTool*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.tile_filters View documentation}
   */
  readonly tile_filters: Record<string, LuaTilePrototype>
  /**
   * The alt tile filters used by this selection tool indexed by tile name.
   *
   * *Can only be used if this is SelectionTool*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.alt_tile_filters View documentation}
   */
  readonly alt_tile_filters: Record<string, LuaTilePrototype>
  /**
   * The number of entity filters this deconstruction item has or `nil` if this isn't a deconstruction item prototype.
   *
   * *Can only be used if this is DeconstructionItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.entity_filter_slots View documentation}
   */
  readonly entity_filter_slots: uint | undefined
  /**
   * The number of tile filters this deconstruction item has or `nil` if this isn't a deconstruction item prototype.
   *
   * *Can only be used if this is DeconstructionItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.tile_filter_slots View documentation}
   */
  readonly tile_filter_slots: uint | undefined
  /**
   * The durability message key used when displaying the durability of this tool.
   *
   * *Can only be used if this is ToolItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.durability_description_key View documentation}
   */
  readonly durability_description_key: string
  /**
   * The durability of this tool item or `nil` if not a tool item.
   *
   * *Can only be used if this is ToolItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.durability View documentation}
   */
  readonly durability: double | undefined
  /**
   * If this tool item has infinite durability. `nil` if not a tool type item.
   *
   * *Can only be used if this is ToolItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.infinite View documentation}
   */
  readonly infinite: boolean | undefined
  /**
   * How many filters an upgrade item has. `nil` if not a upgrade item.
   *
   * *Can only be used if this is UpgradeItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemPrototype.html#LuaItemPrototype.mapper_count View documentation}
   */
  readonly mapper_count: uint | undefined
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaItemPrototype"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * A reference to an item and count owned by some external entity.
 *
 * **Note**: In most instances this is a simple reference as in: it points at a specific slot in an inventory and not
 * the item in the slot.
 *
 * **Note**: In the instance this references an item on a {@link LuaTransportLine} the reference is only guaranteed to
 * stay valid (and refer to the same item) as long as nothing changes the transport line.
 *
 * {@link https://lua-api.factorio.com/latest/LuaItemStack.html View documentation}
 *
 * @noSelf
 */
interface LuaItemStack {
  /**
   * Is this blueprint item setup? I.e. is it a non-empty blueprint?
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.is_blueprint_setup View documentation}
   */
  is_blueprint_setup(): boolean
  /**
   * The entities in this blueprint.
   *
   * *Can only be used if this is BlueprintItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.get_blueprint_entities View documentation}
   */
  get_blueprint_entities(): BlueprintEntity[]
  /**
   * Set new entities to be a part of this blueprint.
   *
   * *Can only be used if this is BlueprintItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.set_blueprint_entities View documentation}
   *
   * @param entities - The new blueprint entities.
   */
  set_blueprint_entities(entities: BlueprintEntity[]): void
  /**
   * Add ammo to this ammo item.
   *
   * *Can only be used if this is AmmoItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.add_ammo View documentation}
   *
   * @param amount - Amount of ammo to add.
   */
  add_ammo(amount: float): void
  /**
   * Remove ammo from this ammo item.
   *
   * *Can only be used if this is AmmoItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.drain_ammo View documentation}
   *
   * @param amount - Amount of ammo to remove.
   */
  drain_ammo(amount: float): void
  /**
   * Add durability to this tool item.
   *
   * *Can only be used if this is ToolItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.add_durability View documentation}
   *
   * @param amount - Amount of durability to add.
   */
  add_durability(amount: double): void
  /**
   * Remove durability from this tool item.
   *
   * *Can only be used if this is ToolItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.drain_durability View documentation}
   *
   * @param amount - Amount of durability to remove.
   */
  drain_durability(amount: double): void
  /**
   * Would a call to {@link LuaItemStack.set_stack LuaItemStack::set_stack} succeed?
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.can_set_stack View documentation}
   *
   * @param stack - Stack that would be set, possibly `nil`.
   */
  can_set_stack(stack?: ItemStackIdentification): boolean
  /**
   * Set this item stack to another item stack.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.set_stack View documentation}
   *
   * @param stack - Item stack to set this one to. Omitting this parameter or passing `nil` will clear this item
   *   stack, as if by calling {@link LuaItemStack.clear LuaItemStack::clear}.
   * @returns Was the stack set successfully?
   */
  set_stack(stack?: ItemStackIdentification): boolean
  /**
   * Transfers the given item stack into this item stack.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.transfer_stack View documentation}
   *
   * @param stack
   * @returns True if the full stack was transferred.
   */
  transfer_stack(stack: ItemStackIdentification): boolean
  /**
   * Export a supported item (blueprint, blueprint-book, deconstruction-planner, upgrade-planner, item-with-tags) to a string.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.export_stack View documentation}
   *
   * @returns The exported string
   */
  export_stack(): string
  /**
   * Import a supported item (blueprint, blueprint-book, deconstruction-planner, upgrade-planner, item-with-tags) from a string.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.import_stack View documentation}
   *
   * @param data - The string to import
   * @returns 0 if the import succeeded with no errors. -1 if the import succeeded with errors. 1 if the import failed.
   */
  import_stack(data: string): int
  /**
   * Swaps this item stack with the given item stack if allowed.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.swap_stack View documentation}
   *
   * @param stack
   * @returns If the 2 stacks were swapped successfully.
   */
  swap_stack(stack: LuaItemStack): boolean
  /**
   * Clear this item stack.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.clear View documentation}
   */
  clear(): void
  /**
   * A list of the tiles in this blueprint.
   *
   * *Can only be used if this is BlueprintItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.get_blueprint_tiles View documentation}
   */
  get_blueprint_tiles(): Tile[]
  /**
   * Set specific tiles in this blueprint.
   *
   * *Can only be used if this is BlueprintItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.set_blueprint_tiles View documentation}
   *
   * @param tiles - Tiles to be a part of the blueprint.
   */
  set_blueprint_tiles(tiles: Tile[]): void
  /**
   * Access the inner inventory of an item.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.get_inventory View documentation}
   *
   * @param inventory - Index of the inventory to access -- currently can only be {@link defines.inventory.item_main}.
   * @returns Or `nil` if there is no inventory with the given index.
   */
  get_inventory(inventory: defines.inventory): LuaInventory | undefined
  /**
   * **Note**: Built entities can be come invalid between the building of the blueprint and the function returning if
   * by_player or raise_built is used and one of those events invalidates the entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.build_blueprint View documentation}
   *
   * @returns Array of created ghosts
   */
  build_blueprint(params: {
    /** Surface to build on */
    readonly surface: SurfaceIdentification
    /** Force to use for the building */
    readonly force: ForceIdentification
    /** The position to build at */
    readonly position: Position
    /** When true, anything that can be built is else nothing is built if any one thing can't be built */
    readonly force_build?: boolean
    /** The direction to use when building */
    readonly direction?: defines.direction
    /** If chunks covered by fog-of-war are skipped. */
    readonly skip_fog_of_war?: boolean
    /**
     * The player to use if any. If provided {@link defines.events.on_built_entity} will also be fired on successful
     * entity creation.
     */
    readonly by_player?: PlayerIdentification
    /**
     * If true; {@link defines.events.script_raised_built} will be fired on successful entity creation. Note: this is
     * ignored if by_player is provided.
     */
    readonly raise_built?: boolean
  }): LuaEntity[]
  /**
   * Deconstruct the given area with this deconstruction item.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.deconstruct_area View documentation}
   */
  deconstruct_area(params: {
    /** Surface to deconstruct on */
    readonly surface: SurfaceIdentification
    /** Force to use for the deconstruction */
    readonly force: ForceIdentification
    /** The area to deconstruct */
    readonly area: BoundingBox
    /** If chunks covered by fog-of-war are skipped. */
    readonly skip_fog_of_war?: boolean
    /** The player to use if any. */
    readonly by_player?: PlayerIdentification
  }): void
  /**
   * Cancel deconstruct the given area with this deconstruction item.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.cancel_deconstruct_area View documentation}
   */
  cancel_deconstruct_area(params: {
    /** Surface to cancel deconstruct on */
    readonly surface: SurfaceIdentification
    /** Force to use for canceling deconstruction */
    readonly force: ForceIdentification
    /** The area to deconstruct */
    readonly area: BoundingBox
    /** If chunks covered by fog-of-war are skipped. */
    readonly skip_fog_of_war?: boolean
    /** The player to use if any. */
    readonly by_player?: PlayerIdentification
  }): void
  /**
   * Sets up this blueprint using the found blueprintable entities/tiles on the surface.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.create_blueprint View documentation}
   *
   * @returns The blueprint entity index to source entity mapping.
   */
  create_blueprint(params: {
    /** Surface to create from */
    readonly surface: SurfaceIdentification
    /** Force to use for the creation */
    readonly force: ForceIdentification
    /** The bounding box */
    readonly area: BoundingBox
    /**
     * When true, blueprintable tiles are always included in the blueprint. When false they're only included if no
     * entities exist in the setup area.
     */
    readonly always_include_tiles?: boolean
    /** When true, entities are included in the blueprint. Defaults to true. */
    readonly include_entities?: boolean
    /** When true, modules are included in the blueprint. Defaults to true. */
    readonly include_modules?: boolean
    /** When true, station names are included in the blueprint. Defaults to false. */
    readonly include_station_names?: boolean
    /** When true, trains are included in the blueprint. Defaults to false. */
    readonly include_trains?: boolean
    /** When true, train fuel is included in the blueprint, Defaults to true. */
    readonly include_fuel?: boolean
  }): Record<uint, LuaEntity>
  /**
   * Gets the tag with the given name or returns `nil` if it doesn't exist.
   *
   * *Can only be used if this is ItemWithTags*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.get_tag View documentation}
   *
   * @param tag_name
   */
  get_tag(tag_name: string): AnyBasic | undefined
  /**
   * Sets the tag with the given name and value.
   *
   * *Can only be used if this is ItemWithTags*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.set_tag View documentation}
   *
   * @param tag_name
   * @param tag
   */
  set_tag(tag_name: string, tag: AnyBasic): AnyBasic
  /**
   * Removes a tag with the given name.
   *
   * *Can only be used if this is ItemWithTags*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.remove_tag View documentation}
   *
   * @param tag
   * @returns If the tag existed and was removed.
   */
  remove_tag(tag: string): boolean
  /**
   * Clears this blueprint item.
   *
   * *Can only be used if this is BlueprintItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.clear_blueprint View documentation}
   */
  clear_blueprint(): void
  /**
   * Gets the entity filter at the given index for this deconstruction item.
   *
   * *Can only be used if this is DeconstructionItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.get_entity_filter View documentation}
   *
   * @param index
   */
  get_entity_filter(index: uint): string
  /**
   * Sets the entity filter at the given index for this deconstruction item.
   *
   * *Can only be used if this is DeconstructionItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.set_entity_filter View documentation}
   *
   * @param index
   * @param filter - Setting to nil erases the filter.
   * @returns If the new filter was set (was valid.)
   */
  set_entity_filter(index: uint, filter: string | LuaEntityPrototype | LuaEntity | undefined): boolean
  /**
   * Gets the tile filter at the given index for this deconstruction item.
   *
   * *Can only be used if this is DeconstructionItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.get_tile_filter View documentation}
   *
   * @param index
   */
  get_tile_filter(index: uint): string
  /**
   * Sets the tile filter at the given index for this deconstruction item.
   *
   * *Can only be used if this is DeconstructionItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.set_tile_filter View documentation}
   *
   * @param index
   * @param filter - Setting to nil erases the filter.
   * @returns If the new filter was set (was valid.)
   */
  set_tile_filter(index: uint, filter: string | LuaTilePrototype | LuaTile | undefined): boolean
  /**
   * Clears all settings/filters on this deconstruction item resetting it to default values.
   *
   * *Can only be used if this is DeconstructionItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.clear_deconstruction_item View documentation}
   */
  clear_deconstruction_item(): void
  /**
   * Clears all settings/filters on this upgrade item resetting it to default values.
   *
   * *Can only be used if this is UpgradeItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.clear_upgrade_item View documentation}
   */
  clear_upgrade_item(): void
  /**
   * Gets the filter at the given index for this upgrade item.
   *
   * *Can only be used if this is UpgradeItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.get_mapper View documentation}
   *
   * @param index - The index of the mapper to read.
   * @param type - 'from' or 'to'.
   */
  get_mapper(index: uint, type: "from" | "to"): UpgradeFilter
  /**
   * Sets the module filter at the given index for this upgrade item.
   *
   * *Can only be used if this is UpgradeItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.set_mapper View documentation}
   *
   * @param index - The index of the mapper to set.
   * @param type - `from` or `to`.
   * @param filter - The filter to set or `nil`
   */
  set_mapper(index: uint, type: string, filter: UpgradeFilter | undefined): void
  /**
   * Gets the number of entities in this blueprint item.
   *
   * *Can only be used if this is BlueprintItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.get_blueprint_entity_count View documentation}
   */
  get_blueprint_entity_count(): uint
  /**
   * Gets the tags for the given blueprint entity index in this blueprint item.
   *
   * *Can only be used if this is BlueprintItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.get_blueprint_entity_tags View documentation}
   *
   * @param index
   */
  get_blueprint_entity_tags(index: uint): Tags
  /**
   * Sets the tags on the given blueprint entity index in this blueprint item.
   *
   * *Can only be used if this is BlueprintItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.set_blueprint_entity_tags View documentation}
   *
   * @param index - The entity index
   * @param tags
   */
  set_blueprint_entity_tags(index: uint, tags: Tags): void
  /**
   * Gets the given tag on the given blueprint entity index in this blueprint item.
   *
   * *Can only be used if this is BlueprintItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.get_blueprint_entity_tag View documentation}
   *
   * @param index - The entity index.
   * @param tag - The tag to get.
   */
  get_blueprint_entity_tag(index: uint, tag: string): AnyBasic
  /**
   * Sets the given tag on the given blueprint entity index in this blueprint item.
   *
   * *Can only be used if this is BlueprintItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.set_blueprint_entity_tag View documentation}
   *
   * @param index - The entity index.
   * @param tag - The tag to set.
   * @param value - The tag value to set or `nil` to clear the tag.
   */
  set_blueprint_entity_tag(index: uint, tag: string, value: AnyBasic | undefined): void
  /**
   * Creates the equipment grid for this item if it doesn't exist and this is an item-with-entity-data that supports
   * equipment grids.
   *
   * *Can only be used if this is ItemWithEntityData*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.create_grid View documentation}
   */
  create_grid(): LuaEquipmentGrid
  /**
   * Is this valid for reading? Differs from the usual `valid` in that `valid` will be `true` even if the item stack
   * is blank but the entity that holds it is still valid.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.valid_for_read View documentation}
   */
  readonly valid_for_read: boolean
  /**
   * Prototype of the item held in this stack.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.prototype View documentation}
   */
  readonly prototype: LuaItemPrototype
  /**
   * Prototype name of the item held in this stack.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.name View documentation}
   */
  readonly name: string
  /**
   * Type of the item prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.type View documentation}
   */
  readonly type: string
  /**
   * Number of items in this stack.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.count View documentation}
   */
  count: uint
  /**
   * The equipment grid of this item or `nil` if this item doesn't have a grid.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.grid View documentation}
   */
  readonly grid: LuaEquipmentGrid | undefined
  /**
   * How much health the item has, as a number in range [0, 1].
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.health View documentation}
   */
  health: float
  /**
   * Durability of the contained item. Automatically capped at the item's maximum durability.
   *
   * **Note**: When used on a non-tool item, the value of this attribute is `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.durability View documentation}
   */
  durability: double | undefined
  /**
   * Number of bullets left in the magazine.
   *
   * *Can only be used if this is AmmoItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.ammo View documentation}
   */
  ammo: uint
  /**
   * Icons of a blueprint item, blueprint book, deconstruction item or upgrade planner. An item that doesn't have
   * icons returns nil on read and throws error on write.
   *
   * *Can only be used if this is BlueprintItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.blueprint_icons View documentation}
   */
  blueprint_icons: BlueprintSignalIcon[] | undefined
  /**
   * The snapping grid size in this blueprint item or nil if snapping is not enabled.
   *
   * *Can only be used if this is BlueprintItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.blueprint_snap_to_grid View documentation}
   */
  blueprint_snap_to_grid: Position | undefined
  /**
   * The offset from the absolute grid or nil if absolute snapping is not enabled.
   *
   * *Can only be used if this is BlueprintItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.blueprint_position_relative_to_grid View documentation}
   */
  blueprint_position_relative_to_grid: Position | undefined
  /**
   * If absolute snapping is enabled on this blueprint item.
   *
   * *Can only be used if this is BlueprintItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.blueprint_absolute_snapping View documentation}
   */
  blueprint_absolute_snapping: boolean
  /**
   * The current label for this item. Nil when none.
   *
   * *Can only be used if this is ItemWithLabel*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.label View documentation}
   */
  label: string | undefined
  /**
   * The current label color for this item. Nil when none.
   *
   * *Can only be used if this is ItemWithLabel*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.label_color View documentation}
   */
  label_color: Color | undefined
  /**
   * If the label for this item can be manually changed. When false the label can only be changed through the API.
   *
   * *Can only be used if this is ItemWithLabel*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.allow_manual_label_change View documentation}
   */
  allow_manual_label_change: boolean
  /**
   * Raw materials required to build this blueprint. Result is a dictionary mapping each item prototype name to the
   * required count.
   *
   * *Can only be used if this is BlueprintItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.cost_to_build View documentation}
   */
  readonly cost_to_build: Record<string, uint>
  /**
   * If this item extends the inventory it resides in (provides its contents for counts, crafting, insertion). Only
   * callable on items with inventories.
   *
   * *Can only be used if this is ItemWithInventory*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.extends_inventory View documentation}
   */
  extends_inventory: boolean
  /**
   * The insertion mode priority this ItemWithInventory uses when items are inserted into an inventory it resides in.
   * Only callable on items with inventories.
   *
   * *Can only be used if this is ItemWithInventory*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.prioritize_insertion_mode View documentation}
   */
  prioritize_insertion_mode: string
  /**
   * The default icons for a blueprint item.
   *
   * *Can only be used if this is BlueprintItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.default_icons View documentation}
   */
  readonly default_icons: BlueprintItemIcon[]
  /**
   * *Can only be used if this is ItemWithTags*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.tags View documentation}
   */
  tags: Tags
  /**
   * The custom description this item-with-tags. This is shown over the normal item description if this is set to a
   * non-empty value.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.custom_description View documentation}
   */
  custom_description: LocalisedString
  /**
   * The entity filters for this deconstruction item. The attribute is a sparse array with the keys representing the
   * index of the filter. All strings in this array must be entity prototype names that don't have the
   * `"not-deconstructable"` flag set and are either a `cliff` or marked as `minable`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.entity_filters View documentation}
   */
  entity_filters: string[]
  /**
   * The tile filters for this deconstruction item. The attribute is a sparse array with the keys representing the
   * index of the filter. All strings in this array must be tile prototype names.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.tile_filters View documentation}
   */
  tile_filters: string[]
  /**
   * The blacklist/whitelist entity filter mode for this deconstruction item.
   *
   * *Can only be used if this is DeconstructionItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.entity_filter_mode View documentation}
   */
  entity_filter_mode: defines.deconstruction_item.entity_filter_mode
  /**
   * The blacklist/whitelist tile filter mode for this deconstruction item.
   *
   * *Can only be used if this is DeconstructionItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.tile_filter_mode View documentation}
   */
  tile_filter_mode: defines.deconstruction_item.tile_filter_mode
  /**
   * The tile selection mode for this deconstruction item.
   *
   * *Can only be used if this is DeconstructionItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.tile_selection_mode View documentation}
   */
  tile_selection_mode: defines.deconstruction_item.tile_selection_mode
  /**
   * If this deconstruction item is set to allow trees and rocks only.
   *
   * *Can only be used if this is DeconstructionItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.trees_and_rocks_only View documentation}
   */
  trees_and_rocks_only: boolean
  /**
   * The number of entity filters this deconstruction item supports.
   *
   * *Can only be used if this is DeconstructionItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.entity_filter_count View documentation}
   */
  readonly entity_filter_count: uint
  /**
   * The number of tile filters this deconstruction item supports.
   *
   * *Can only be used if this is DeconstructionItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.tile_filter_count View documentation}
   */
  readonly tile_filter_count: uint
  /**
   * The active blueprint index for this blueprint book. May be `nil`.
   *
   * *Can only be used if this is BlueprintBookItem*
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.active_index View documentation}
   */
  active_index: uint | undefined
  /**
   * The unique identifier for this item if it has one, `nil` otherwise. Note that this ID stays the same no matter
   * where the item is moved to.
   *
   * Only these types of items have unique IDs:
   *
   * - `"armor"`
   * - `"spidertron-remote"`
   * - `"selection-tool"`
   * - `"copy-paste-tool"`
   * - `"upgrade-item"`
   * - `"deconstruction-item"`
   * - `"blueprint"`
   * - `"blueprint-book"`
   * - `"item-with-entity-data"`
   * - `"item-with-inventory"`
   * - `"item-with-tags"`
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.item_number View documentation}
   */
  readonly item_number: uint | undefined
  /**
   * If this item is a spidertron remote that has a spidertron bound to it, it returns the connected spider-vehicle
   * entity, `nil` otherwise.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.connected_entity View documentation}
   */
  connected_entity: LuaEntity | undefined
  /**
   * If this is a blueprint item.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.is_blueprint View documentation}
   */
  readonly is_blueprint: boolean
  /**
   * If this is a blueprint book item.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.is_blueprint_book View documentation}
   */
  readonly is_blueprint_book: boolean
  /**
   * If this is a module item.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.is_module View documentation}
   */
  readonly is_module: boolean
  /**
   * If this is a tool item.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.is_tool View documentation}
   */
  readonly is_tool: boolean
  /**
   * If this is a mining tool item.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.is_mining_tool View documentation}
   */
  readonly is_mining_tool: boolean
  /**
   * If this is an armor item.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.is_armor View documentation}
   */
  readonly is_armor: boolean
  /**
   * If this is a repair tool item.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.is_repair_tool View documentation}
   */
  readonly is_repair_tool: boolean
  /**
   * If this is an item with label item.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.is_item_with_label View documentation}
   */
  readonly is_item_with_label: boolean
  /**
   * If this is an item with inventory item.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.is_item_with_inventory View documentation}
   */
  readonly is_item_with_inventory: boolean
  /**
   * If this is an item with entity data item.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.is_item_with_entity_data View documentation}
   */
  readonly is_item_with_entity_data: boolean
  /**
   * If this is a selection tool item.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.is_selection_tool View documentation}
   */
  readonly is_selection_tool: boolean
  /**
   * If this is an item with tags item.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.is_item_with_tags View documentation}
   */
  readonly is_item_with_tags: boolean
  /**
   * If this is a deconstruction tool item.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.is_deconstruction_item View documentation}
   */
  readonly is_deconstruction_item: boolean
  /**
   * If this is a upgrade item.
   *
   * {@link https://lua-api.factorio.com/latest/LuaItemStack.html#LuaItemStack.is_upgrade_item View documentation}
   */
  readonly is_upgrade_item: boolean
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaItemStack"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Control behavior for lamps.
 *
 * {@link https://lua-api.factorio.com/latest/LuaLampControlBehavior.html View documentation}
 *
 * @noSelf
 */
interface LuaLampControlBehavior extends LuaGenericOnOffControlBehavior {
  /**
   * `true` if the lamp should set the color from the circuit network signals.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLampControlBehavior.html#LuaLampControlBehavior.use_colors View documentation}
   */
  use_colors: boolean
  /**
   * The color the lamp is showing or `nil` if not using any color.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLampControlBehavior.html#LuaLampControlBehavior.color View documentation}
   */
  readonly color: ColorTable | undefined
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaLampControlBehavior"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * A lazily loaded value. For performance reasons, we sometimes return a custom lazily-loaded value type instead of the
 * native Lua value. This custom type lazily constructs the necessary value when
 * {@link LuaLazyLoadedValue.get LuaLazyLoadedValue::get} is called, therefore preventing its unnecessary construction in
 * some cases.
 *
 * An instance of LuaLazyLoadedValue is only valid during the event it was created from and cannot be saved.
 *
 * {@link https://lua-api.factorio.com/latest/LuaLazyLoadedValue.html View documentation}
 *
 * @noSelf
 */
interface LuaLazyLoadedValue<T> {
  /**
   * Gets the value of this lazy loaded value.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLazyLoadedValue.html#LuaLazyLoadedValue.get View documentation}
   */
  get(): T
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaLazyLoadedValue"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Logistic cell of a particular {@link LuaEntity}. A "Logistic Cell" is the given name for settings and properties used
 * by what would normally be seen as a "Roboport". A logistic cell however doesn't have to be attached to the roboport
 * entity (the character has one for the personal roboport).
 *
 * {@link https://lua-api.factorio.com/latest/LuaLogisticCell.html View documentation}
 *
 * @noSelf
 */
interface LuaLogisticCell {
  /**
   * Is a given position within the logistic range of this cell?
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticCell.html#LuaLogisticCell.is_in_logistic_range View documentation}
   *
   * @param position
   */
  is_in_logistic_range(position: Position): boolean
  /**
   * Is a given position within the construction range of this cell?
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticCell.html#LuaLogisticCell.is_in_construction_range View documentation}
   *
   * @param position
   */
  is_in_construction_range(position: Position): boolean
  /**
   * Are two cells neighbours?
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticCell.html#LuaLogisticCell.is_neighbour_with View documentation}
   *
   * @param other
   */
  is_neighbour_with(other: LuaLogisticCell): boolean
  /**
   * Logistic radius of this cell.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticCell.html#LuaLogisticCell.logistic_radius View documentation}
   */
  readonly logistic_radius: float
  /**
   * Logistic connection distance of this cell.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticCell.html#LuaLogisticCell.logistics_connection_distance View documentation}
   */
  readonly logistics_connection_distance: float
  /**
   * Construction radius of this cell.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticCell.html#LuaLogisticCell.construction_radius View documentation}
   */
  readonly construction_radius: float
  /**
   * Number of stationed logistic robots in this cell.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticCell.html#LuaLogisticCell.stationed_logistic_robot_count View documentation}
   */
  readonly stationed_logistic_robot_count: uint
  /**
   * Number of stationed construction robots in this cell.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticCell.html#LuaLogisticCell.stationed_construction_robot_count View documentation}
   */
  readonly stationed_construction_robot_count: uint
  /**
   * `true` if this is a mobile cell. In vanilla, only the logistic cell created by a character's personal roboport is mobile.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticCell.html#LuaLogisticCell.mobile View documentation}
   */
  readonly mobile: boolean
  /**
   * `true` if this cell is active.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticCell.html#LuaLogisticCell.transmitting View documentation}
   */
  readonly transmitting: boolean
  /**
   * Radius at which the robots hover when waiting to be charged.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticCell.html#LuaLogisticCell.charge_approach_distance View documentation}
   */
  readonly charge_approach_distance: float
  /**
   * Number of robots currently charging.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticCell.html#LuaLogisticCell.charging_robot_count View documentation}
   */
  readonly charging_robot_count: uint
  /**
   * Number of robots waiting to charge.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticCell.html#LuaLogisticCell.to_charge_robot_count View documentation}
   */
  readonly to_charge_robot_count: uint
  /**
   * This cell's owner.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticCell.html#LuaLogisticCell.owner View documentation}
   */
  readonly owner: LuaEntity
  /**
   * The network that owns this cell or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticCell.html#LuaLogisticCell.logistic_network View documentation}
   */
  readonly logistic_network: LuaLogisticNetwork | undefined
  /**
   * Neighbouring cells.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticCell.html#LuaLogisticCell.neighbours View documentation}
   */
  readonly neighbours: LuaLogisticCell[]
  /**
   * Robots currently being charged.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticCell.html#LuaLogisticCell.charging_robots View documentation}
   */
  readonly charging_robots: LuaEntity[]
  /**
   * Robots waiting to charge.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticCell.html#LuaLogisticCell.to_charge_robots View documentation}
   */
  readonly to_charge_robots: LuaEntity[]
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaLogisticCell"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Control behavior for logistic chests.
 *
 * {@link https://lua-api.factorio.com/latest/LuaLogisticContainerControlBehavior.html View documentation}
 *
 * @noSelf
 */
interface LuaLogisticContainerControlBehavior extends LuaControlBehavior {
  /**
   * The circuit mode of operations for the logistic container.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticContainerControlBehavior.html#LuaLogisticContainerControlBehavior.circuit_mode_of_operation View documentation}
   */
  circuit_mode_of_operation: defines.control_behavior.logistic_container.circuit_mode_of_operation
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaLogisticContainerControlBehavior"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * A single logistic network of a given force on a given surface.
 *
 * {@link https://lua-api.factorio.com/latest/LuaLogisticNetwork.html View documentation}
 *
 * @noSelf
 */
interface LuaLogisticNetwork {
  /**
   * Count given or all items in the network or given members.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticNetwork.html#LuaLogisticNetwork.get_item_count View documentation}
   *
   * @param item - Item name to count. If not given, gives counts of all items in the network.
   * @param member - Logistic members to check, must be either `"storage"` or `"providers"`. If not given, gives count
   *   in the entire network.
   */
  get_item_count(item?: string, member?: "storage" | "providers"): int
  /**
   * Get item counts for the entire network.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticNetwork.html#LuaLogisticNetwork.get_contents View documentation}
   *
   * @returns A mapping of item prototype names to the number available in the network.
   * @see {@link LuaInventory.get_contents}
   */
  get_contents(): Record<string, uint>
  /**
   * Remove items from the logistic network. This will actually remove the items from some logistic chests.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticNetwork.html#LuaLogisticNetwork.remove_item View documentation}
   *
   * @param item - What to remove.
   * @param members - Which logistic members to remove from. Must be `"storage"`, `"passive-provider"`, `"buffer"`, or
   *   `"active-provider"`. If not specified, removes from the network in the usual order.
   * @returns Number of items removed.
   */
  remove_item(
    item: ItemStackIdentification,
    members?: "storage" | "passive-provider" | "buffer" | "active-provider"
  ): uint
  /**
   * Insert items into the logistic network. This will actually insert the items into some logistic chests.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticNetwork.html#LuaLogisticNetwork.insert View documentation}
   *
   * @param item - What to insert.
   * @param members - Which logistic members to insert the items to. Must be `"storage"`, `"storage-empty"` (storage
   *   chests that are completely empty), `"storage-empty-slot"` (storage chests that have an empty slot), or
   *   `"requester"`. If not specified, inserts items into the logistic network in the usual order.
   * @returns Number of items actually inserted.
   */
  insert(
    item: ItemStackIdentification,
    members?: "storage" | "storage-empty" | "storage-empty-slot" | "requester"
  ): uint
  /**
   * Find logistic cell closest to a given position.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticNetwork.html#LuaLogisticNetwork.find_cell_closest_to View documentation}
   *
   * @param position
   * @returns May be `nil` if no cell was found.
   */
  find_cell_closest_to(position: Position): LuaLogisticCell | undefined
  /**
   * Find the 'best' logistic point with this item ID and from the given position or from given chest type.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticNetwork.html#LuaLogisticNetwork.select_pickup_point View documentation}
   *
   * @returns May be `nil` if no point was found.
   */
  select_pickup_point(params: {
    /** Name of the item to select. */
    readonly name: string
    /** When given, it will find the storage 'best' storage point from this position. */
    readonly position?: Position
    /** Whether to consider buffer chests or not. Defaults to false. Only considered if selecting with position. */
    readonly include_buffers?: boolean
    /**
     * When given, it will find from only the specific type of member. Must be `"storage"`, `"passive-provider"`,
     * `"buffer"` or `"active-provider"`. If not specified, selects with normal priorities. Not considered if
     * position is specified.
     */
    readonly members?: "storage" | "passive-provider" | "buffer" | "active-provider"
  }): LuaLogisticPoint | undefined
  /**
   * Find a logistic point to drop the specific item stack.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticNetwork.html#LuaLogisticNetwork.select_drop_point View documentation}
   *
   * @returns May be `nil` if no point was found.
   */
  select_drop_point(params: {
    /** Name of the item to select. */
    readonly stack: ItemStackIdentification
    /**
     * When given, it will find from only the specific type of member. Must be `"storage"`, `"storage-empty"`,
     * `"storage-empty-slot"` or `"requester"`. If not specified, selects with normal priorities.
     */
    readonly members?: "storage" | "storage-empty" | "storage-empty-slot" | "requester"
  }): LuaLogisticPoint | undefined
  /**
   * The force this logistic network belongs to.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticNetwork.html#LuaLogisticNetwork.force View documentation}
   */
  readonly force: LuaForce
  /**
   * Number of logistic robots available for a job.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticNetwork.html#LuaLogisticNetwork.available_logistic_robots View documentation}
   */
  readonly available_logistic_robots: uint
  /**
   * The total number of logistic robots in the network (idle and active + in roboports).
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticNetwork.html#LuaLogisticNetwork.all_logistic_robots View documentation}
   */
  readonly all_logistic_robots: uint
  /**
   * Number of construction robots available for a job.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticNetwork.html#LuaLogisticNetwork.available_construction_robots View documentation}
   */
  readonly available_construction_robots: uint
  /**
   * The total number of construction robots in the network (idle and active + in roboports).
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticNetwork.html#LuaLogisticNetwork.all_construction_robots View documentation}
   */
  readonly all_construction_robots: uint
  /**
   * Maximum number of robots the network can work with. Currently only used for the personal roboport.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticNetwork.html#LuaLogisticNetwork.robot_limit View documentation}
   */
  readonly robot_limit: uint
  /**
   * All cells in this network.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticNetwork.html#LuaLogisticNetwork.cells View documentation}
   */
  readonly cells: LuaLogisticCell[]
  /**
   * All entities that have logistic provider points in this network.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticNetwork.html#LuaLogisticNetwork.providers View documentation}
   */
  readonly providers: LuaEntity[]
  /**
   * All entities that have empty logistic provider points in this network.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticNetwork.html#LuaLogisticNetwork.empty_providers View documentation}
   */
  readonly empty_providers: LuaEntity[]
  /**
   * All entities that have logistic requester points in this network.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticNetwork.html#LuaLogisticNetwork.requesters View documentation}
   */
  readonly requesters: LuaEntity[]
  /**
   * All entities that have logistic storage points in this network.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticNetwork.html#LuaLogisticNetwork.storages View documentation}
   */
  readonly storages: LuaEntity[]
  /**
   * All other entities that have logistic points in this network (inserters mostly).
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticNetwork.html#LuaLogisticNetwork.logistic_members View documentation}
   */
  readonly logistic_members: LuaEntity[]
  /**
   * All things that have provider points in this network.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticNetwork.html#LuaLogisticNetwork.provider_points View documentation}
   */
  readonly provider_points: LuaLogisticPoint[]
  /**
   * All passive provider points in this network.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticNetwork.html#LuaLogisticNetwork.passive_provider_points View documentation}
   */
  readonly passive_provider_points: LuaLogisticPoint[]
  /**
   * All active provider points in this network.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticNetwork.html#LuaLogisticNetwork.active_provider_points View documentation}
   */
  readonly active_provider_points: LuaLogisticPoint[]
  /**
   * All things that have empty provider points in this network.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticNetwork.html#LuaLogisticNetwork.empty_provider_points View documentation}
   */
  readonly empty_provider_points: LuaLogisticPoint[]
  /**
   * All things that have requester points in this network.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticNetwork.html#LuaLogisticNetwork.requester_points View documentation}
   */
  readonly requester_points: LuaLogisticPoint[]
  /**
   * All things that have storage points in this network.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticNetwork.html#LuaLogisticNetwork.storage_points View documentation}
   */
  readonly storage_points: LuaLogisticPoint[]
  /**
   * All robots in this logistic network.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticNetwork.html#LuaLogisticNetwork.robots View documentation}
   */
  readonly robots: LuaEntity[]
  /**
   * All construction robots in this logistic network.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticNetwork.html#LuaLogisticNetwork.construction_robots View documentation}
   */
  readonly construction_robots: LuaEntity[]
  /**
   * All logistic robots in this logistic network.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticNetwork.html#LuaLogisticNetwork.logistic_robots View documentation}
   */
  readonly logistic_robots: LuaEntity[]
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaLogisticNetwork"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Logistic point of a particular {@link LuaEntity}. A "Logistic point" is the name given for settings and properties
 * used by requester, provider, and storage points in a given logistic network. These "points" don't have to be a
 * logistic container but often are. One other entity that can own several points is the "character" character type entity.
 *
 * {@link https://lua-api.factorio.com/latest/LuaLogisticPoint.html View documentation}
 *
 * @noSelf
 */
interface LuaLogisticPoint {
  /**
   * The {@link LuaEntity} owner of this {@link LuaLogisticPoint}.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticPoint.html#LuaLogisticPoint.owner View documentation}
   */
  readonly owner: LuaEntity
  readonly logistic_network: LuaLogisticNetwork
  /**
   * The Logistic member index of this logistic point.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticPoint.html#LuaLogisticPoint.logistic_member_index View documentation}
   */
  readonly logistic_member_index: uint
  /**
   * The logistic filters for this logistic point or `nil` if this doesn't use logistic filters.
   *
   * **Note**: The returned array will always have an entry for each filter and will be indexed in sequence when not nil.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticPoint.html#LuaLogisticPoint.filters View documentation}
   */
  readonly filters: LogisticFilter[] | undefined
  /**
   * The logistic mode.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticPoint.html#LuaLogisticPoint.mode View documentation}
   */
  readonly mode: defines.logistic_mode
  /**
   * The force of this logistic point.
   *
   * **Note**: This will always be the same as the {@link LuaLogisticPoint.owner LuaLogisticPoint::owner} force.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticPoint.html#LuaLogisticPoint.force View documentation}
   */
  readonly force: LuaForce
  /**
   * Items targeted to be picked up from this logistic point by robots.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticPoint.html#LuaLogisticPoint.targeted_items_pickup View documentation}
   */
  readonly targeted_items_pickup: Record<string, uint>
  /**
   * Items targeted to be dropped off into this logistic point by robots.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticPoint.html#LuaLogisticPoint.targeted_items_deliver View documentation}
   */
  readonly targeted_items_deliver: Record<string, uint>
  /**
   * If this logistic point is using the exact mode. In exact mode robots never over-deliver requests.
   *
   * {@link https://lua-api.factorio.com/latest/LuaLogisticPoint.html#LuaLogisticPoint.exact View documentation}
   */
  readonly exact: boolean
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaLogisticPoint"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Control behavior for mining drills.
 *
 * {@link https://lua-api.factorio.com/latest/LuaMiningDrillControlBehavior.html View documentation}
 *
 * @noSelf
 */
interface LuaMiningDrillControlBehavior extends LuaGenericOnOffControlBehavior {
  /**
   * `true` if this drill is enabled or disabled using the logistics or circuit condition.
   *
   * {@link https://lua-api.factorio.com/latest/LuaMiningDrillControlBehavior.html#LuaMiningDrillControlBehavior.circuit_enable_disable View documentation}
   */
  circuit_enable_disable: boolean
  /**
   * `true` if this drill should send the resources in the field to the circuit network. Which resources depends on
   * {@link LuaMiningDrillControlBehavior.resource_read_mode LuaMiningDrillControlBehavior::resource_read_mode}
   *
   * {@link https://lua-api.factorio.com/latest/LuaMiningDrillControlBehavior.html#LuaMiningDrillControlBehavior.circuit_read_resources View documentation}
   */
  circuit_read_resources: boolean
  /**
   * If the mining drill should send just the resources in its area or the entire field it's on to the circuit network.
   *
   * {@link https://lua-api.factorio.com/latest/LuaMiningDrillControlBehavior.html#LuaMiningDrillControlBehavior.resource_read_mode View documentation}
   */
  resource_read_mode: defines.control_behavior.mining_drill.resource_read_mode
  /**
   * The resource entities that the mining drill will send information about to the circuit network or an empty array.
   *
   * {@link https://lua-api.factorio.com/latest/LuaMiningDrillControlBehavior.html#LuaMiningDrillControlBehavior.resource_read_targets View documentation}
   */
  readonly resource_read_targets: LuaEntity[]
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaMiningDrillControlBehavior"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Prototype of a mod setting.
 *
 * {@link https://lua-api.factorio.com/latest/LuaModSettingPrototype.html View documentation}
 *
 * @noSelf
 */
interface LuaModSettingPrototype {
  /**
   * Name of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaModSettingPrototype.html#LuaModSettingPrototype.name View documentation}
   */
  readonly name: string
  /**
   * Order string of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaModSettingPrototype.html#LuaModSettingPrototype.order View documentation}
   */
  readonly order: string
  readonly localised_name: LocalisedString
  readonly localised_description: LocalisedString
  /**
   * The mod that owns this setting.
   *
   * {@link https://lua-api.factorio.com/latest/LuaModSettingPrototype.html#LuaModSettingPrototype.mod View documentation}
   */
  readonly mod: string
  readonly setting_type: string
  /**
   * The default value of this setting.
   *
   * {@link https://lua-api.factorio.com/latest/LuaModSettingPrototype.html#LuaModSettingPrototype.default_value View documentation}
   */
  readonly default_value: boolean | double | int | string
  /**
   * The minimum value for this setting or `nil` if this setting type doesn't support a minimum.
   *
   * {@link https://lua-api.factorio.com/latest/LuaModSettingPrototype.html#LuaModSettingPrototype.minimum_value View documentation}
   */
  readonly minimum_value: double | int | undefined
  /**
   * The maximum value for this setting or `nil` if this setting type doesn't support a maximum.
   *
   * {@link https://lua-api.factorio.com/latest/LuaModSettingPrototype.html#LuaModSettingPrototype.maximum_value View documentation}
   */
  readonly maximum_value: double | int | undefined
  /**
   * The allowed values for this setting or `nil` if this setting doesn't use the a fixed set of values.
   *
   * {@link https://lua-api.factorio.com/latest/LuaModSettingPrototype.html#LuaModSettingPrototype.allowed_values View documentation}
   */
  readonly allowed_values: string[] | int[] | double[] | undefined
  /**
   * If this string setting allows blank values or `nil` if not a string setting.
   *
   * {@link https://lua-api.factorio.com/latest/LuaModSettingPrototype.html#LuaModSettingPrototype.allow_blank View documentation}
   */
  readonly allow_blank: boolean | undefined
  /**
   * If this string setting auto-trims values or `nil` if not a string setting.
   *
   * {@link https://lua-api.factorio.com/latest/LuaModSettingPrototype.html#LuaModSettingPrototype.auto_trim View documentation}
   */
  readonly auto_trim: boolean | undefined
  /**
   * If this setting is hidden from the GUI.
   *
   * {@link https://lua-api.factorio.com/latest/LuaModSettingPrototype.html#LuaModSettingPrototype.hidden View documentation}
   */
  readonly hidden: boolean
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaModSettingPrototype"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Prototype of a module category.
 *
 * {@link https://lua-api.factorio.com/latest/LuaModuleCategoryPrototype.html View documentation}
 *
 * @noSelf
 */
interface LuaModuleCategoryPrototype {
  /**
   * Name of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaModuleCategoryPrototype.html#LuaModuleCategoryPrototype.name View documentation}
   */
  readonly name: string
  /**
   * Order string of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaModuleCategoryPrototype.html#LuaModuleCategoryPrototype.order View documentation}
   */
  readonly order: string
  readonly localised_name: LocalisedString
  readonly localised_description: LocalisedString
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaModuleCategoryPrototype"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Prototype of a named noise expression.
 *
 * {@link https://lua-api.factorio.com/latest/LuaNamedNoiseExpression.html View documentation}
 *
 * @noSelf
 */
interface LuaNamedNoiseExpression {
  /**
   * Name of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaNamedNoiseExpression.html#LuaNamedNoiseExpression.name View documentation}
   */
  readonly name: string
  /**
   * Order string of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaNamedNoiseExpression.html#LuaNamedNoiseExpression.order View documentation}
   */
  readonly order: string
  readonly localised_name: LocalisedString
  readonly localised_description: LocalisedString
  /**
   * Name of the property that this expression is intended to provide a value for, if any.
   *
   * {@link https://lua-api.factorio.com/latest/LuaNamedNoiseExpression.html#LuaNamedNoiseExpression.intended_property View documentation}
   */
  readonly intended_property: string
  /**
   * The expression itself.
   *
   * {@link https://lua-api.factorio.com/latest/LuaNamedNoiseExpression.html#LuaNamedNoiseExpression.expression View documentation}
   */
  readonly expression: NoiseExpression
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaNamedNoiseExpression"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Prototype of a noise layer.
 *
 * {@link https://lua-api.factorio.com/latest/LuaNoiseLayerPrototype.html View documentation}
 *
 * @noSelf
 */
interface LuaNoiseLayerPrototype {
  /**
   * Name of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaNoiseLayerPrototype.html#LuaNoiseLayerPrototype.name View documentation}
   */
  readonly name: string
  /**
   * Order string of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaNoiseLayerPrototype.html#LuaNoiseLayerPrototype.order View documentation}
   */
  readonly order: string
  readonly localised_name: LocalisedString
  readonly localised_description: LocalisedString
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaNoiseLayerPrototype"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Prototype of an optimized particle.
 *
 * {@link https://lua-api.factorio.com/latest/LuaParticlePrototype.html View documentation}
 *
 * @noSelf
 */
interface LuaParticlePrototype {
  /**
   * Name of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaParticlePrototype.html#LuaParticlePrototype.name View documentation}
   */
  readonly name: string
  /**
   * Order string of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaParticlePrototype.html#LuaParticlePrototype.order View documentation}
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
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaParticlePrototype"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * A permission group that defines what players in this group are allowed to do.
 *
 * {@link https://lua-api.factorio.com/latest/LuaPermissionGroup.html View documentation}
 *
 * @noSelf
 */
interface LuaPermissionGroup {
  /**
   * Adds the given player to this group.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPermissionGroup.html#LuaPermissionGroup.add_player View documentation}
   *
   * @param player
   * @returns If the player was added.
   */
  add_player(player: PlayerIdentification): boolean
  /**
   * Removes the given player from this group.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPermissionGroup.html#LuaPermissionGroup.remove_player View documentation}
   *
   * @param player
   * @returns If the player was removed.
   */
  remove_player(player: PlayerIdentification): boolean
  /**
   * Whether this group allows the given action.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPermissionGroup.html#LuaPermissionGroup.allows_action View documentation}
   *
   * @param action - The action in question.
   */
  allows_action(action: defines.input_action): boolean
  /**
   * Sets whether this group allows the performance the given action.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPermissionGroup.html#LuaPermissionGroup.set_allows_action View documentation}
   *
   * @param action - The action in question.
   * @param allow_action - Whether to allow the specified action.
   * @returns Whether the value was successfully applied.
   */
  set_allows_action(action: defines.input_action, allow_action: boolean): boolean
  /**
   * Destroys this group.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPermissionGroup.html#LuaPermissionGroup.destroy View documentation}
   *
   * @returns Whether the group was successfully destroyed.
   */
  destroy(): boolean
  /**
   * The name of this group.
   *
   * **Note**: Setting the name to `nil` or an empty string sets the name to the default value.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPermissionGroup.html#LuaPermissionGroup.name View documentation}
   */
  name: string
  /**
   * The players in this group.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPermissionGroup.html#LuaPermissionGroup.players View documentation}
   */
  readonly players: LuaPlayer[]
  /**
   * The group ID
   *
   * {@link https://lua-api.factorio.com/latest/LuaPermissionGroup.html#LuaPermissionGroup.group_id View documentation}
   */
  readonly group_id: uint
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaPermissionGroup"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * All permission groups.
 *
 * {@link https://lua-api.factorio.com/latest/LuaPermissionGroups.html View documentation}
 *
 * @noSelf
 */
interface LuaPermissionGroups {
  /**
   * Creates a new permission group.
   *
   * **Note**: May return nil if the calling player doesn't have permission to make groups.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPermissionGroups.html#LuaPermissionGroups.create_group View documentation}
   *
   * @param name
   */
  create_group(name?: string): LuaPermissionGroup | undefined
  /**
   * Gets the permission group with the given name or group ID or `nil` if there is no matching group.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPermissionGroups.html#LuaPermissionGroups.get_group View documentation}
   *
   * @param group
   */
  get_group(group: string | uint): LuaPermissionGroup | undefined
  /**
   * All of the permission groups.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPermissionGroups.html#LuaPermissionGroups.groups View documentation}
   */
  readonly groups: LuaPermissionGroup[]
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaPermissionGroups"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * A player in the game. Pay attention that a player may or may not have a character, which is the {@link LuaEntity} of
 * the little guy running around the world doing things.
 *
 * {@link https://lua-api.factorio.com/latest/LuaPlayer.html View documentation}
 *
 * @noSelf
 */
interface LuaPlayer extends LuaControl {
  /**
   * Setup the screen to be shown when the game is finished.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.set_ending_screen_data View documentation}
   *
   * @param message - Message to be shown.
   * @param file - Path to image to be shown.
   */
  set_ending_screen_data(message: LocalisedString, file?: string): void
  /**
   * Print text to the chat console.
   *
   * **Note**: Messages that are identical to a message sent in the last 60 ticks are not printed again.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.print View documentation}
   *
   * @param message
   * @param color
   */
  print(message: LocalisedString, color?: Color): void
  /**
   * Clear the chat console.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.clear_console View documentation}
   */
  clear_console(): void
  /**
   * Get the current goal description, as a localised string.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.get_goal_description View documentation}
   */
  get_goal_description(): LocalisedString
  /**
   * Set the text in the goal window (top left).
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.set_goal_description View documentation}
   *
   * @param text - The text to display. Lines can be delimited with `\n`. Passing an empty string or omitting this
   *   parameter entirely will make the goal window disappear.
   * @param only_update - When `true`, won't play the "goal updated" sound.
   */
  set_goal_description(text?: LocalisedString, only_update?: boolean): void
  /**
   * Set the controller type of the player.
   *
   * **Note**: Setting a player to {@link defines.controllers.editor} auto promotes the player to admin and enables cheat mode.
   *
   * **Note**: Setting a player to {@link defines.controllers.editor} also requires the calling player be an admin.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.set_controller View documentation}
   */
  set_controller(params: {
    /** Which controller to use. */
    readonly type: defines.controllers
    /** Entity to control. Mandatory when `type` is {@link defines.controllers.character}, ignored otherwise. */
    readonly character?: LuaEntity
    /**
     * List of waypoints for the cutscene controller. This parameter is mandatory when `type` is
     * {@link defines.controllers.cutscene}.
     */
    readonly waypoints?: CutsceneWaypoint
    /**
     * If specified and `type` is {@link defines.controllers.cutscene}, the cutscene will start at this position. If
     * not given the start position will be the player position.
     */
    readonly start_position?: Position
    /**
     * If specified and `type` is {@link defines.controllers.cutscene}, the cutscene will start at this zoom level.
     * If not given the start zoom will be the players zoom.
     */
    readonly start_zoom?: double
    /**
     * If specified and `type` is {@link defines.controllers.cutscene}, it is the time in ticks it will take for the
     * camera to pan from the final waypoint back to the starting position. If not given the camera will not pan
     * back to the start position/zoom.
     */
    readonly final_transition_time?: uint
    /**
     * If specified and `type` is {@link defines.controllers.cutscene}, the game will switch to chart-mode (map
     * zoomed out) rendering when the zoom level is less than this value.
     */
    readonly chart_mode_cutoff?: double
  }): void
  /**
   * Start/end wire dragging at the specified location, wire type is based on the cursor contents
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.drag_wire View documentation}
   *
   * @returns `true` if the action did something
   */
  drag_wire(params: {
    /**
     * Position at which cursor was clicked. Used only to decide which side of arithmetic combinator, decider
     * combinator or power switch is to be connected. Entity itself to be connected is based on the player's selected entity.
     */
    readonly position: MapPosition
  }): boolean
  /**
   * Disable recipe groups.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.disable_recipe_groups View documentation}
   */
  disable_recipe_groups(): void
  /**
   * Enable recipe groups.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.enable_recipe_groups View documentation}
   */
  enable_recipe_groups(): void
  /**
   * Disable recipe subgroups.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.disable_recipe_subgroups View documentation}
   */
  disable_recipe_subgroups(): void
  /**
   * Enable recipe subgroups.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.enable_recipe_subgroups View documentation}
   */
  enable_recipe_subgroups(): void
  /**
   * Print entity statistics to the player's console.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.print_entity_statistics View documentation}
   *
   * @param entities - Entity prototypes to get statistics for. If not specified or empty, display statistics for all entities.
   */
  print_entity_statistics(entities?: string[]): void
  /**
   * Print construction robot job counts to the players console.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.print_robot_jobs View documentation}
   */
  print_robot_jobs(): void
  /**
   * Print LuaObject counts per mod.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.print_lua_object_statistics View documentation}
   */
  print_lua_object_statistics(): void
  /**
   * Logs a dictionary of chunks -> active entities for the surface this player is on.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.log_active_entity_chunk_counts View documentation}
   */
  log_active_entity_chunk_counts(): void
  /**
   * Logs a dictionary of active entities -> count for the surface this player is on.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.log_active_entity_counts View documentation}
   */
  log_active_entity_counts(): void
  /**
   * Unlock the achievements of the given player. This has any effect only when this is the local player, the
   * achievement isn't unlocked so far and the achievement is of the type "achievement".
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.unlock_achievement View documentation}
   *
   * @param name - Name of the achievement to unlock
   */
  unlock_achievement(name: string): void
  /**
   * Invokes the "clear cursor" action on the player as if the user pressed it.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.clear_cursor View documentation}
   *
   * @returns If the cursor is now empty.
   */
  clear_cursor(): boolean
  /**
   * Creates and attaches a character entity to this player.
   *
   * **Note**: The player must not have a character already connected and must be online (see
   * {@link LuaPlayer.connected LuaPlayer::connected}).
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.create_character View documentation}
   *
   * @param character - The character to create else the default is used.
   * @returns Whether the character was created.
   */
  create_character(character?: string): boolean
  /**
   * Adds an alert to this player for the given entity of the given alert type.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.add_alert View documentation}
   *
   * @param entity
   * @param type
   */
  add_alert(entity: LuaEntity, type: defines.alert_type): void
  /**
   * Adds a custom alert to this player.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.add_custom_alert View documentation}
   *
   * @param entity - If the alert is clicked, the map will open at the position of this entity.
   * @param icon
   * @param message
   * @param show_on_map
   */
  add_custom_alert(entity: LuaEntity, icon: SignalID, message: LocalisedString, show_on_map: boolean): void
  /**
   * Removes all alerts matching the given filters or if an empty filters table is given all alerts are removed.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.remove_alert View documentation}
   */
  remove_alert(params: {
    readonly entity?: LuaEntity
    readonly prototype?: LuaEntityPrototype
    readonly position?: Position
    readonly type?: defines.alert_type
    readonly surface?: SurfaceIdentification
    readonly icon?: SignalID
    readonly message?: LocalisedString
  }): void
  /**
   * Get all alerts matching the given filters, or all alerts if no filters are given.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.get_alerts View documentation}
   *
   * @returns A mapping of surface index to an array of arrays of {@link Alert alerts} indexed by the
   *   {@link defines.alert_type alert type}.
   */
  get_alerts(params: {
    readonly entity?: LuaEntity
    readonly prototype?: LuaEntityPrototype
    readonly position?: Position
    readonly type?: defines.alert_type
    readonly surface?: SurfaceIdentification
  }): Record<uint, Record<defines.alert_type, Alert[]>>
  /**
   * Mutes alerts for the given alert category.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.mute_alert View documentation}
   *
   * @param alert_type
   * @returns If the alert type was muted (false if it was already muted).
   */
  mute_alert(alert_type: defines.alert_type): boolean
  /**
   * Unmutes alerts for the given alert category.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.unmute_alert View documentation}
   *
   * @param alert_type
   * @returns If the alert type was unmuted (false if it was wasn't muted).
   */
  unmute_alert(alert_type: defines.alert_type): boolean
  /**
   * If the given alert type is currently muted.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.is_alert_muted View documentation}
   *
   * @param alert_type
   */
  is_alert_muted(alert_type: defines.alert_type): boolean
  /**
   * Enables alerts for the given alert category.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.enable_alert View documentation}
   *
   * @param alert_type
   * @returns If the alert type was enabled (false if it was already enabled).
   */
  enable_alert(alert_type: defines.alert_type): boolean
  /**
   * Disables alerts for the given alert category.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.disable_alert View documentation}
   *
   * @param alert_type
   * @returns If the alert type was disabled (false if it was already disabled).
   */
  disable_alert(alert_type: defines.alert_type): boolean
  /**
   * If the given alert type is currently enabled.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.is_alert_enabled View documentation}
   *
   * @param alert_type
   */
  is_alert_enabled(alert_type: defines.alert_type): boolean
  /**
   * Invokes the "smart pipette" action on the player as if the user pressed it.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.pipette_entity View documentation}
   *
   * @param entity
   * @returns If the smart pipette found something to place
   */
  pipette_entity(entity: string | LuaEntity | LuaEntityPrototype): boolean
  /**
   * Checks if this player can build the give entity at the given location on the surface the player is on.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.can_place_entity View documentation}
   */
  can_place_entity(params: {
    /** Name of the entity to check */
    readonly name: string
    /** Where the entity would be placed */
    readonly position: MapPosition
    /** Direction the entity would be placed */
    readonly direction?: defines.direction
  }): boolean
  /**
   * Checks if this player can build what ever is in the cursor on the surface the player is on.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.can_build_from_cursor View documentation}
   */
  can_build_from_cursor(params: {
    /** Where the entity would be placed */
    readonly position: MapPosition
    /** Direction the entity would be placed */
    readonly direction?: defines.direction
    /** If alt build should be used instead of normal build. Defaults to normal. */
    readonly alt?: boolean
    /** The size for building terrain if building terrain. Defaults to 2. */
    readonly terrain_building_size?: uint
    /** If chunks covered by fog-of-war are skipped. */
    readonly skip_fog_of_war?: boolean
  }): boolean
  /**
   * Builds what ever is in the cursor on the surface the player is on.
   *
   * **Note**: Anything built will fire normal player-built events.
   *
   * **Note**: The cursor stack will automatically be reduced as if the player built normally.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.build_from_cursor View documentation}
   */
  build_from_cursor(params: {
    /** Where the entity would be placed */
    readonly position: MapPosition
    /** Direction the entity would be placed */
    readonly direction?: defines.direction
    /** If alt build should be used instead of normal build. Defaults to normal. */
    readonly alt?: boolean
    /** The size for building terrain if building terrain. Defaults to 2. */
    readonly terrain_building_size?: uint
    /** If chunks covered by fog-of-war are skipped. */
    readonly skip_fog_of_war?: boolean
  }): void
  /**
   * Uses the current item in the cursor if it's a capsule or does nothing if not.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.use_from_cursor View documentation}
   *
   * @param position - Where the item would be used.
   */
  use_from_cursor(position: Position): void
  /**
   * Play a sound for this player.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.play_sound View documentation}
   */
  play_sound(params: {
    /** The sound to play. */
    readonly path: SoundPath
    /** Where the sound should be played. If not given, it's played at the current position of the player. */
    readonly position?: Position
    /** The volume of the sound to play. Must be between 0 and 1 inclusive. */
    readonly volume_modifier?: double
    /** The volume mixer to play the sound through. Defaults to the default mixer for the given sound type. */
    readonly override_sound_type?: SoundType
  }): void
  /**
   * The characters associated with this player.
   *
   * **Note**: The array will always be empty when the player is disconnected (see
   * {@link LuaPlayer.connected LuaPlayer::connected}) regardless of there being associated characters.
   *
   * **Note**: Characters associated with this player will be logged off when this player disconnects but are not
   * controlled by any player.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.get_associated_characters View documentation}
   */
  get_associated_characters(): LuaEntity[]
  /**
   * Associates a character with this player.
   *
   * **Note**: The character must not be connected to any controller.
   *
   * **Note**: If this player is currently disconnected (see {@link LuaPlayer.connected LuaPlayer::connected}) the
   * character will be immediately "logged off".
   *
   * **Note**: See {@link LuaPlayer.get_associated_characters LuaPlayer::get_associated_characters} for more information.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.associate_character View documentation}
   *
   * @param character - The character entity.
   */
  associate_character(character: LuaEntity): void
  /**
   * Disassociates a character from this player. This is functionally the same as setting
   * {@link LuaEntity.associated_player LuaEntity::associated_player} to `nil`.
   *
   * **Note**: See {@link LuaPlayer.get_associated_characters LuaPlayer::get_associated_characters} for more information.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.disassociate_character View documentation}
   *
   * @param character - The character entity
   */
  disassociate_character(character: LuaEntity): void
  /**
   * Spawn flying text that is only visible to this player. Either `position` or `create_at_cursor` are required. When
   * `create_at_cursor` is `true`, all parameters other than `text` are ignored.
   *
   * **Note**: If no custom `speed` is set and the text is longer than 25 characters, its `time_to_live` and `speed`
   * are dynamically adjusted to give players more time to read it.
   *
   * **Note**: Local flying text is not saved, which means it will disappear after a save/load-cycle.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.create_local_flying_text View documentation}
   */
  create_local_flying_text(params: {
    /** The flying text to show. */
    readonly text: LocalisedString
    /** The location on the map at which to show the flying text. */
    readonly position?: MapPosition
    /** If `true`, the flying text is created at the player's cursor. Defaults to `false`. */
    readonly create_at_cursor?: boolean
    /** The color of the flying text. Defaults to white text. */
    readonly color?: Color
    /** The amount of ticks that the flying text will be shown for. Defaults to `80`. */
    readonly time_to_live?: uint
    /** The speed at which the text rises upwards in tiles/second. Can't be a negative value. */
    readonly speed?: double
  }): void
  /**
   * Gets the quick bar filter for the given slot or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.get_quick_bar_slot View documentation}
   *
   * @param index - The slot index. 1 for the first slot of page one, 2 for slot two of page one, 11 for the first
   *   slot of page 2, etc.
   */
  get_quick_bar_slot(index: uint): LuaItemPrototype | undefined
  /**
   * Sets the quick bar filter for the given slot.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.set_quick_bar_slot View documentation}
   *
   * @param index - The slot index. 1 for the first slot of page one, 2 for slot two of page one, 11 for the first
   *   slot of page 2, etc.
   * @param filter - The filter or `nil`.
   */
  set_quick_bar_slot(index: uint, filter: string | LuaItemPrototype | LuaItemStack | undefined): void
  /**
   * Gets which quick bar page is being used for the given screen page or `nil` if not known.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.get_active_quick_bar_page View documentation}
   *
   * @param index - The screen page. Index 1 is the top row in the gui. Index can go beyond the visible number of bars
   *   on the screen to account for the interface config setting change.
   */
  get_active_quick_bar_page(index: uint): uint8 | undefined
  /**
   * Sets which quick bar page is being used for the given screen page.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.set_active_quick_bar_page View documentation}
   *
   * @param screen_index - The screen page. Index 1 is the top row in the gui. Index can go beyond the visible number
   *   of bars on the screen to account for the interface config setting change.
   * @param page_index - The new quick bar page.
   */
  set_active_quick_bar_page(screen_index: uint, page_index: uint): void
  /**
   * Jump to the specified cutscene waypoint. Only works when the player is viewing a cutscene.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.jump_to_cutscene_waypoint View documentation}
   *
   * @param waypoint_index
   */
  jump_to_cutscene_waypoint(waypoint_index: uint): void
  /**
   * Exit the current cutscene. Errors if not in a cutscene.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.exit_cutscene View documentation}
   */
  exit_cutscene(): void
  /**
   * Queues a request to open the map at the specified position. If the map is already opened, the request will simply
   * set the position (and scale). Render mode change requests are processed before rendering of the next frame.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.open_map View documentation}
   *
   * @param position
   * @param scale
   */
  open_map(position: MapPosition, scale?: double): void
  /**
   * Queues a request to zoom to world at the specified position. If the player is already zooming to world, the
   * request will simply set the position (and scale). Render mode change requests are processed before rendering of
   * the next frame.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.zoom_to_world View documentation}
   *
   * @param position
   * @param scale
   */
  zoom_to_world(position: MapPosition, scale?: double): void
  /**
   * Queues request to switch to the normal game view from the map or zoom to world view. Render mode change requests
   * are processed before rendering of the next frame.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.close_map View documentation}
   */
  close_map(): void
  /**
   * Is a custom Lua shortcut currently toggled?
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.is_shortcut_toggled View documentation}
   *
   * @param prototype_name - Prototype name of the custom shortcut.
   */
  is_shortcut_toggled(prototype_name: string): boolean
  /**
   * Is a custom Lua shortcut currently available?
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.is_shortcut_available View documentation}
   *
   * @param prototype_name - Prototype name of the custom shortcut.
   */
  is_shortcut_available(prototype_name: string): boolean
  /**
   * Toggle or untoggle a custom Lua shortcut
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.set_shortcut_toggled View documentation}
   *
   * @param prototype_name - Prototype name of the custom shortcut.
   * @param toggled
   */
  set_shortcut_toggled(prototype_name: string, toggled: boolean): void
  /**
   * Make a custom Lua shortcut available or unavailable.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.set_shortcut_available View documentation}
   *
   * @param prototype_name - Prototype name of the custom shortcut.
   * @param available
   */
  set_shortcut_available(prototype_name: string, available: boolean): void
  /**
   * Asks the player if they would like to connect to the given server.
   *
   * **Note**: This only does anything when used on a multiplayer peer. Single player and server hosts will ignore the prompt.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.connect_to_server View documentation}
   */
  connect_to_server(params: {
    /** The server (address:port) if port is not given the default Factorio port is used. */
    readonly address: string
    /** The name of the server. */
    readonly name?: LocalisedString
    readonly description?: LocalisedString
    /**
     * The password if different from the one used to join this game. Note, if the current password is not empty but
     * the one required to join the new server is an empty string should be given for this field.
     */
    readonly password?: string
  }): void
  /**
   * Toggles this player into or out of the map editor. Does nothing if this player isn't an admin or if the player
   * doesn't have permission to use the map editor.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.toggle_map_editor View documentation}
   */
  toggle_map_editor(): void
  /**
   * Requests a translation for the given localised string. If the request is successful the
   * {@link OnStringTranslatedEvent on_string_translated} event will be fired at a later time with the results.
   *
   * **Note**: Does nothing if this player is not connected. (see {@link LuaPlayer.connected LuaPlayer::connected}).
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.request_translation View documentation}
   *
   * @param localised_string
   * @returns If the request was sent or not.
   */
  request_translation(localised_string: LocalisedString): boolean
  /**
   * Gets the filter for this map editor infinity filters at the given index or `nil` if the filter index doesn't
   * exist or is empty.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.get_infinity_inventory_filter View documentation}
   *
   * @param index - The index to get.
   */
  get_infinity_inventory_filter(index: uint): InfinityInventoryFilter | undefined
  /**
   * Sets the filter for this map editor infinity filters at the given index.
   *
   * *Can only be used if this is InfinityContainer*
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.set_infinity_inventory_filter View documentation}
   *
   * @param index - The index to set.
   * @param filter - The new filter or `nil` to clear the filter.
   */
  set_infinity_inventory_filter(index: uint, filter: InfinityInventoryFilter | undefined): void
  /**
   * Clears all recipe notifications for this player.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.clear_recipe_notifications View documentation}
   */
  clear_recipe_notifications(): void
  /**
   * Adds the given recipe to the list of recipe notifications for this player.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.add_recipe_notification View documentation}
   *
   * @param recipe - Name of the recipe prototype to add.
   */
  add_recipe_notification(recipe: string): void
  /**
   * Adds the given blueprint to this player's clipboard queue.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.add_to_clipboard View documentation}
   *
   * @param blueprint - The blueprint to add.
   */
  add_to_clipboard(blueprint: LuaItemStack): void
  /**
   * Gets a copy of the currently selected blueprint in the clipboard queue into the player's cursor, as if the player
   * activated Paste.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.activate_paste View documentation}
   */
  activate_paste(): void
  /**
   * Starts selection with selection tool from the specified position. Does nothing if the players cursor is not a
   * selection tool.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.start_selection View documentation}
   *
   * @param position - The position to start selection from.
   * @param selection_mode - The type of selection to start. Can be `select`, `alternative-select`, `reverse-select`.
   */
  start_selection(position: MapPosition, selection_mode: string): void
  /**
   * Clears the players selection tool selection position.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.clear_selection View documentation}
   */
  clear_selection(): void
  /**
   * The character attached to this player, or `nil` if no character.
   *
   * **Note**: Will also return `nil` when the player is disconnected (see {@link LuaPlayer.connected LuaPlayer::connected}).
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.character View documentation}
   */
  character: LuaEntity | undefined
  /**
   * When in a cutscene; the character this player would be using once the cutscene is over.
   *
   * **Note**: Will also return `nil` when the player is disconnected (see {@link LuaPlayer.connected LuaPlayer::connected}).
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.cutscene_character View documentation}
   */
  readonly cutscene_character: LuaEntity | undefined
  /**
   * This player's index in {@link LuaGameScript.players LuaGameScript::players}.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.index View documentation}
   */
  readonly index: uint
  readonly gui: LuaGui
  /**
   * `true` if the player opened itself. I.e. if they opened the character or god-controller GUI.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.opened_self View documentation}
   */
  readonly opened_self: boolean
  readonly controller_type: defines.controllers
  /**
   * The stashed controller type or `nil` if no controller is stashed.
   *
   * **Note**: This is mainly useful when a player is in the map editor.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.stashed_controller_type View documentation}
   */
  readonly stashed_controller_type: defines.controllers | undefined
  /**
   * The player's game view settings.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.game_view_settings View documentation}
   */
  game_view_settings: GameViewSettings
  /**
   * `true` if the minimap is visible.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.minimap_enabled View documentation}
   */
  minimap_enabled: boolean
  /**
   * The color associated with the player. This will be used to tint the player's character as well as their buildings
   * and vehicles.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.color View documentation}
   */
  color: Color
  /**
   * The color used when this player talks in game.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.chat_color View documentation}
   */
  chat_color: Color
  /**
   * The player's username.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.name View documentation}
   */
  readonly name: string
  /**
   * The tag that is shown after the player in chat and on the map.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.tag View documentation}
   */
  tag: string
  /**
   * `true` if the player is currently connected to the game.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.connected View documentation}
   */
  readonly connected: boolean
  /**
   * `true` if the player is an admin.
   *
   * **Note**: Trying to change player admin status from the console when you aren't an admin does nothing.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.admin View documentation}
   */
  admin: boolean
  /**
   * The source entity used during entity settings copy-paste if any.
   *
   * `nil` if there isn't currently a source entity.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.entity_copy_source View documentation}
   */
  readonly entity_copy_source: LuaEntity | undefined
  /**
   * How many ticks since the last action of this player
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.afk_time View documentation}
   */
  readonly afk_time: uint
  /**
   * How many ticks did this player spend playing this save (all sessions combined)
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.online_time View documentation}
   */
  readonly online_time: uint
  /**
   * At what tick this player was last online.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.last_online View documentation}
   */
  readonly last_online: uint
  /**
   * The permission group this player is part of or `nil` if not part of any group.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.permission_group View documentation}
   */
  permission_group: LuaPermissionGroup | undefined
  /**
   * Gets the current per-player settings for the this player, indexed by prototype name. Returns the same structure
   * as {@link LuaSettings.get_player_settings LuaSettings::get_player_settings}.
   *
   * **Note**: This table will become invalid if its associated player does.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.mod_settings View documentation}
   */
  readonly mod_settings: LuaCustomTable<string, ModSetting>
  /**
   * The number of ticks until this player will respawn or `nil` if not waiting to respawn.
   *
   * **Note**: Set to `nil` to immediately respawn the player.
   *
   * **Note**: Set to any positive value to trigger the respawn state for this player.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.ticks_to_respawn View documentation}
   */
  ticks_to_respawn: uint | undefined
  /**
   * The display resolution for this player.
   *
   * **Note**: During {@link OnPlayerCreatedEvent on_player_created}, this attribute will always return a resolution of
   * `{width=1920, height=1080}`. To get the actual resolution, listen to the
   * {@link OnPlayerDisplayResolutionChangedEvent on_player_display_resolution_changed} event raised shortly afterwards.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.display_resolution View documentation}
   */
  readonly display_resolution: DisplayResolution
  /**
   * The display scale for this player.
   *
   * **Note**: During {@link OnPlayerCreatedEvent on_player_created}, this attribute will always return a scale of `1`.
   * To get the actual scale, listen to the {@link OnPlayerDisplayScaleChangedEvent on_player_display_scale_changed}
   * event raised shortly afterwards.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.display_scale View documentation}
   */
  readonly display_scale: double
  /**
   * The item stack containing a blueprint to be setup.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.blueprint_to_setup View documentation}
   */
  readonly blueprint_to_setup: LuaItemStack
  /**
   * The render mode of the player, like map or zoom to world. The render mode can be set using
   * {@link LuaPlayer.open_map LuaPlayer::open_map}, {@link LuaPlayer.zoom_to_world LuaPlayer::zoom_to_world} and
   * {@link LuaPlayer.close_map LuaPlayer::close_map}.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.render_mode View documentation}
   */
  readonly render_mode: defines.render_mode
  /**
   * If `true`, zoom-to-world noise effect will be disabled and environmental sounds will be based on zoom-to-world
   * view instead of position of player's character.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.spectator View documentation}
   */
  spectator: boolean
  /**
   * If `true`, circle and name of given player is rendered on the map/chart.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.show_on_map View documentation}
   */
  show_on_map: boolean
  /**
   * If items not included in this map editor infinity inventory filters should be removed.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.remove_unfiltered_items View documentation}
   */
  remove_unfiltered_items: boolean
  /**
   * The filters for this map editor infinity inventory settings.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.infinity_inventory_filters View documentation}
   */
  infinity_inventory_filters: InfinityInventoryFilter[]
  /**
   * If the main inventory will be auto sorted.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.auto_sort_main_inventory View documentation}
   */
  readonly auto_sort_main_inventory: boolean
  /**
   * The original location of the item in the cursor, marked with a hand. When writing, the specified inventory slot
   * must be empty and the cursor stack must not be empty.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.hand_location View documentation}
   */
  hand_location: ItemStackLocation
  /**
   * The player's zoom-level.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.zoom View documentation}
   */
  set zoom(value: double)
  /**
   * The player's map view settings. To write to this, use a table containing the fields that should be changed.
   *
   * {@link https://lua-api.factorio.com/latest/LuaPlayer.html#LuaPlayer.map_view_settings View documentation}
   */
  set map_view_settings(value: MapViewSettings)
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaPlayer"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * An object used to measure script performance.
 *
 * **Note**: Since performance is non-deterministic these objects don't allow reading the raw time values from lua. They
 * can be used anywhere a {@link LocalisedString} is used.
 *
 * {@link https://lua-api.factorio.com/latest/LuaProfiler.html View documentation}
 *
 * @noSelf
 */
interface LuaProfiler {
  /**
   * Resets the clock, also restarting it.
   *
   * {@link https://lua-api.factorio.com/latest/LuaProfiler.html#LuaProfiler.reset View documentation}
   */
  reset(): void
  /**
   * Stops the clock.
   *
   * {@link https://lua-api.factorio.com/latest/LuaProfiler.html#LuaProfiler.stop View documentation}
   */
  stop(): void
  /**
   * Start the clock again, without resetting it.
   *
   * {@link https://lua-api.factorio.com/latest/LuaProfiler.html#LuaProfiler.restart View documentation}
   */
  restart(): void
  /**
   * Add the duration of another timer to this timer. Useful to reduce start/stop overhead when accumulating time onto
   * many timers at once.
   *
   * **Note**: If other is running, the time to now will be added.
   *
   * {@link https://lua-api.factorio.com/latest/LuaProfiler.html#LuaProfiler.add View documentation}
   *
   * @param other - The timer to add to this timer.
   */
  add(other: LuaProfiler): void
  /**
   * Divides the current duration by a set value. Useful for calculating the average of many iterations.
   *
   * **Note**: Does nothing if this isn't stopped.
   *
   * {@link https://lua-api.factorio.com/latest/LuaProfiler.html#LuaProfiler.divide View documentation}
   *
   * @param number - The number to divide by. Must be > 0.
   */
  divide(number: double): void
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaProfiler"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Control behavior for programmable speakers.
 *
 * {@link https://lua-api.factorio.com/latest/LuaProgrammableSpeakerControlBehavior.html View documentation}
 *
 * @noSelf
 */
interface LuaProgrammableSpeakerControlBehavior extends LuaControlBehavior {
  circuit_parameters: ProgrammableSpeakerCircuitParameters
  circuit_condition: CircuitConditionDefinition
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaProgrammableSpeakerControlBehavior"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * An interface to send messages to the calling RCON interface.
 *
 * {@link https://lua-api.factorio.com/latest/LuaRCON.html View documentation}
 *
 * @noSelf
 */
interface LuaRCON {
  /**
   * Print text to the calling RCON interface if any.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRCON.html#LuaRCON.print View documentation}
   *
   * @param message
   */
  print(message: LocalisedString): void
  /** This object's name. */
  readonly object_name: "LuaRCON"
}

/**
 * Control behavior for rail chain signals.
 *
 * {@link https://lua-api.factorio.com/latest/LuaRailChainSignalControlBehavior.html View documentation}
 *
 * @noSelf
 */
interface LuaRailChainSignalControlBehavior extends LuaControlBehavior {
  red_signal: SignalID
  orange_signal: SignalID
  green_signal: SignalID
  blue_signal: SignalID
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaRailChainSignalControlBehavior"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * A rail path.
 *
 * {@link https://lua-api.factorio.com/latest/LuaRailPath.html View documentation}
 *
 * @noSelf
 */
interface LuaRailPath {
  /**
   * The total number of rails in this path.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRailPath.html#LuaRailPath.size View documentation}
   */
  readonly size: uint
  /**
   * The current rail index.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRailPath.html#LuaRailPath.current View documentation}
   */
  readonly current: uint
  /**
   * The total path distance.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRailPath.html#LuaRailPath.total_distance View documentation}
   */
  readonly total_distance: double
  /**
   * The total distance travelled.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRailPath.html#LuaRailPath.travelled_distance View documentation}
   */
  readonly travelled_distance: double
  /**
   * Array of the rails that this path travels over.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRailPath.html#LuaRailPath.rails View documentation}
   */
  readonly rails: LuaCustomTable<uint, LuaEntity>
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaRailPath"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Control behavior for rail signals.
 *
 * {@link https://lua-api.factorio.com/latest/LuaRailSignalControlBehavior.html View documentation}
 *
 * @noSelf
 */
interface LuaRailSignalControlBehavior extends LuaControlBehavior {
  red_signal: SignalID
  orange_signal: SignalID
  green_signal: SignalID
  /**
   * If this will close the rail signal based off the circuit condition.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRailSignalControlBehavior.html#LuaRailSignalControlBehavior.close_signal View documentation}
   */
  close_signal: boolean
  /**
   * If this will read the rail signal state.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRailSignalControlBehavior.html#LuaRailSignalControlBehavior.read_signal View documentation}
   */
  read_signal: boolean
  /**
   * The circuit condition when controlling the signal through the circuit network.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRailSignalControlBehavior.html#LuaRailSignalControlBehavior.circuit_condition View documentation}
   */
  circuit_condition: CircuitConditionDefinition
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaRailSignalControlBehavior"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * A deterministic random generator independent from the core games random generator that can be seeded and re-seeded at
 * will. This random generator can be saved and loaded and will maintain its state. Note this is entirely different from
 * calling {@link https://lua-api.factorio.com/latest/Libraries.html#math.random math.random}() and you should be sure
 * you actually want to use this over calling `math.random()`. If you aren't sure if you need to use this over calling
 * `math.random()` then you probably don't need to use this.
 *
 * {@link https://lua-api.factorio.com/latest/LuaRandomGenerator.html View documentation}
 *
 * @example
 *   Create a generator and use it to print a random number.
 *
 *   ```lua
 *   global.generator = game.create_random_generator()
 *   game.player.print(global.generator())
 *   ```
 *
 * @noSelf
 */
interface LuaRandomGenerator {
  /**
   * Re-seeds the random generator with the given value.
   *
   * **Note**: Seeds that are close together will produce similar results. Seeds from 0 to 341 will produce the same results.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRandomGenerator.html#LuaRandomGenerator.re_seed View documentation}
   *
   * @param seed
   */
  re_seed(seed: uint): void
  /**
   * Generates a random number. If no parameters are given a number in the [0, 1) range is returned. If a single
   * parameter is given a floored number in the [1, N] range is returned. If 2 parameters are given a floored number
   * in the [N1, N2] range is returned.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRandomGenerator.html#LuaRandomGenerator.operator%20() View documentation}
   *
   * @param lower - Inclusive lower bound on the result
   * @param upper - Inclusive upper bound on the result
   */
  (lower?: int, upper?: int): double
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaRandomGenerator"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * A crafting recipe. Recipes belong to forces (see {@link LuaForce}) because some recipes are unlocked by research, and
 * researches are per-force.
 *
 * {@link https://lua-api.factorio.com/latest/LuaRecipe.html View documentation}
 *
 * @noSelf
 */
interface LuaRecipe {
  /**
   * Reload the recipe from the prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipe.html#LuaRecipe.reload View documentation}
   */
  reload(): void
  /**
   * Name of the recipe. This can be different than the name of the result items as there could be more recipes to
   * make the same item.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipe.html#LuaRecipe.name View documentation}
   */
  readonly name: string
  /**
   * Localised name of the recipe.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipe.html#LuaRecipe.localised_name View documentation}
   */
  readonly localised_name: LocalisedString
  readonly localised_description: LocalisedString
  /**
   * The prototype for this recipe.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipe.html#LuaRecipe.prototype View documentation}
   */
  readonly prototype: LuaRecipePrototype
  /**
   * Can the recipe be used?
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipe.html#LuaRecipe.enabled View documentation}
   */
  enabled: boolean
  /**
   * Category of the recipe.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipe.html#LuaRecipe.category View documentation}
   */
  readonly category: string
  /**
   * Ingredients for this recipe.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipe.html#LuaRecipe.ingredients View documentation}
   *
   * @example
   *   What the "steel-chest" recipe would return
   *
   *   ```lua
   *   {{type="item", name="steel-plate", amount=8}}
   *   ```
   *
   * @example
   *   What the "advanced-oil-processing" recipe would return
   *
   *   ```lua
   *   {{type="fluid", name="crude-oil", amount=10}, {type="fluid", name="water", amount=5}}
   *   ```
   */
  readonly ingredients: Ingredient[]
  /**
   * The results of this recipe.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipe.html#LuaRecipe.products View documentation}
   */
  readonly products: Product[]
  /**
   * Is the recipe hidden? Hidden recipe don't show up in the crafting menu.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipe.html#LuaRecipe.hidden View documentation}
   */
  readonly hidden: boolean
  /**
   * Is the recipe hidden from flow statistics?
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipe.html#LuaRecipe.hidden_from_flow_stats View documentation}
   */
  hidden_from_flow_stats: boolean
  /**
   * Energy required to execute this recipe. This directly affects the crafting time: Recipe's energy is exactly its
   * crafting time in seconds, when crafted in an assembling machine with crafting speed exactly equal to one.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipe.html#LuaRecipe.energy View documentation}
   */
  readonly energy: double
  /**
   * Order string. This is used to sort the crafting menu.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipe.html#LuaRecipe.order View documentation}
   */
  readonly order: string
  /**
   * Group of this recipe.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipe.html#LuaRecipe.group View documentation}
   */
  readonly group: LuaGroup
  /**
   * Subgroup of this recipe.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipe.html#LuaRecipe.subgroup View documentation}
   */
  readonly subgroup: LuaGroup
  /**
   * The force that owns this recipe.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipe.html#LuaRecipe.force View documentation}
   */
  readonly force: LuaForce
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaRecipe"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Prototype of a recipe category.
 *
 * {@link https://lua-api.factorio.com/latest/LuaRecipeCategoryPrototype.html View documentation}
 *
 * @noSelf
 */
interface LuaRecipeCategoryPrototype {
  /**
   * Name of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipeCategoryPrototype.html#LuaRecipeCategoryPrototype.name View documentation}
   */
  readonly name: string
  /**
   * Order string of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipeCategoryPrototype.html#LuaRecipeCategoryPrototype.order View documentation}
   */
  readonly order: string
  readonly localised_name: LocalisedString
  readonly localised_description: LocalisedString
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaRecipeCategoryPrototype"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * A crafting recipe prototype.
 *
 * {@link https://lua-api.factorio.com/latest/LuaRecipePrototype.html View documentation}
 *
 * @noSelf
 */
interface LuaRecipePrototype {
  /**
   * If this recipe prototype is enabled by default (enabled at the beginning of a game).
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipePrototype.html#LuaRecipePrototype.enabled View documentation}
   */
  readonly enabled: boolean
  /**
   * Name of the recipe. This can be different than the name of the result items as there could be more recipes to
   * make the same item.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipePrototype.html#LuaRecipePrototype.name View documentation}
   */
  readonly name: string
  /**
   * Localised name of the recipe.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipePrototype.html#LuaRecipePrototype.localised_name View documentation}
   */
  readonly localised_name: LocalisedString
  readonly localised_description: LocalisedString
  /**
   * Category of the recipe.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipePrototype.html#LuaRecipePrototype.category View documentation}
   */
  readonly category: string
  /**
   * Ingredients for this recipe.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipePrototype.html#LuaRecipePrototype.ingredients View documentation}
   */
  readonly ingredients: Ingredient[]
  /**
   * The results of this recipe.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipePrototype.html#LuaRecipePrototype.products View documentation}
   */
  readonly products: Product[]
  /**
   * The main product of this recipe, `nil` if no main product is defined.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipePrototype.html#LuaRecipePrototype.main_product View documentation}
   */
  readonly main_product: Product | undefined
  /**
   * Is the recipe hidden? Hidden recipe don't show up in the crafting menu.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipePrototype.html#LuaRecipePrototype.hidden View documentation}
   */
  readonly hidden: boolean
  /**
   * Is the recipe hidden from flow statistics (item/fluid production statistics)?
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipePrototype.html#LuaRecipePrototype.hidden_from_flow_stats View documentation}
   */
  readonly hidden_from_flow_stats: boolean
  /**
   * Is the recipe hidden from player crafting? The recipe will still show up for selection in machines.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipePrototype.html#LuaRecipePrototype.hidden_from_player_crafting View documentation}
   */
  readonly hidden_from_player_crafting: boolean
  /**
   * Should this recipe always show "Made in" in the tooltip?
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipePrototype.html#LuaRecipePrototype.always_show_made_in View documentation}
   */
  readonly always_show_made_in: boolean
  /**
   * Energy required to execute this recipe. This directly affects the crafting time: Recipe's energy is exactly its
   * crafting time in seconds, when crafted in an assembling machine with crafting speed exactly equal to one.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipePrototype.html#LuaRecipePrototype.energy View documentation}
   */
  readonly energy: double
  /**
   * Order string. This is used to sort the crafting menu.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipePrototype.html#LuaRecipePrototype.order View documentation}
   */
  readonly order: string
  /**
   * Group of this recipe.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipePrototype.html#LuaRecipePrototype.group View documentation}
   */
  readonly group: LuaGroup
  /**
   * Subgroup of this recipe.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipePrototype.html#LuaRecipePrototype.subgroup View documentation}
   */
  readonly subgroup: LuaGroup
  /**
   * The multiplier used when this recipe is copied from an assembling machine to a requester chest. For each item in
   * the recipe the item count * this value is set in the requester chest.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipePrototype.html#LuaRecipePrototype.request_paste_multiplier View documentation}
   */
  readonly request_paste_multiplier: uint
  /**
   * Used to determine how many extra items are put into an assembling machine before it's considered "full enough".
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipePrototype.html#LuaRecipePrototype.overload_multiplier View documentation}
   */
  readonly overload_multiplier: uint
  /**
   * If the recipe is allowed to have the extra inserter overload bonus applied (4 * stack inserter stack size).
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipePrototype.html#LuaRecipePrototype.allow_inserter_overload View documentation}
   */
  readonly allow_inserter_overload: boolean
  /**
   * If this recipe is enabled for the purpose of intermediate hand-crafting.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipePrototype.html#LuaRecipePrototype.allow_as_intermediate View documentation}
   */
  readonly allow_as_intermediate: boolean
  /**
   * If this recipe is allowed to use intermediate recipes when hand-crafting.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipePrototype.html#LuaRecipePrototype.allow_intermediates View documentation}
   */
  readonly allow_intermediates: boolean
  /**
   * If the amount is shown in the recipe tooltip title when the recipe produces more than 1 product.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipePrototype.html#LuaRecipePrototype.show_amount_in_title View documentation}
   */
  readonly show_amount_in_title: boolean
  /**
   * If the products are always shown in the recipe tooltip.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipePrototype.html#LuaRecipePrototype.always_show_products View documentation}
   */
  readonly always_show_products: boolean
  /**
   * The emissions multiplier for this recipe.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipePrototype.html#LuaRecipePrototype.emissions_multiplier View documentation}
   */
  readonly emissions_multiplier: double
  /**
   * Is this recipe allowed to be broken down for the recipe tooltip "Total raw" calculations?
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipePrototype.html#LuaRecipePrototype.allow_decomposition View documentation}
   */
  readonly allow_decomposition: boolean
  /**
   * Is this recipe unlocks the result item(s) so they're shown in filter-select GUIs.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRecipePrototype.html#LuaRecipePrototype.unlock_results View documentation}
   */
  readonly unlock_results: boolean
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaRecipePrototype"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Registry of interfaces between scripts. An interface is simply a dictionary mapping names to functions. A script or
 * mod can then register an interface with {@link LuaRemote}, after that any script can call the registered functions,
 * provided it knows the interface name and the desired function name. An instance of LuaRemote is available through the
 * global object named `remote`.
 *
 * {@link https://lua-api.factorio.com/latest/LuaRemote.html View documentation}
 *
 * @example
 *   Will register a remote interface containing two functions. Later, it will call these functions through `remote`.
 *
 *   ```lua
 *   remote.add_interface("human interactor",
 *   {hello = function() game.player.print("Hi!") end,
 *   bye = function(name) game.player.print("Bye " .. name) end})
 *   -- Some time later, possibly in a different mod...
 *   remote.call("human interactor", "hello")
 *   remote.call("human interactor", "bye", "dear reader")
 *   ```
 *
 * @noSelf
 */
interface LuaRemote {
  /**
   * Add a remote interface.
   *
   * **Note**: It is an error if the given interface `name` is already registered.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRemote.html#LuaRemote.add_interface View documentation}
   *
   * @param name - Name of the interface.
   * @param functions - List of functions that are members of the new interface.
   */
  add_interface(name: string, functions: Record<string, (...args: any) => void>): void
  /**
   * Removes an interface with the given name.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRemote.html#LuaRemote.remove_interface View documentation}
   *
   * @param name - Name of the interface.
   * @returns If the interface was removed. `False` if the interface didn't exist.
   */
  remove_interface(name: string): boolean
  /**
   * Call a function of an interface.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRemote.html#LuaRemote.call View documentation}
   *
   * @param _interface - Interface to look up `function` in.
   * @param _function - Function name that belongs to `interface`.
   * @param args - Arguments to pass to the called function.
   */
  call(_interface: string, _function: string, ...args: Any[]): Any
  /**
   * List of all registered interfaces. For each interface name, `remote.interfaces[name]` is a dictionary mapping the
   * interface's registered functions to the value `true`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRemote.html#LuaRemote.interfaces View documentation}
   *
   * @example
   *   Assuming the "human interactor" interface is registered as above
   *
   *   ```lua
   *   game.player.print(tostring(remote.interfaces["human interactor"]["hello"]))        -- prints true
   *   game.player.print(tostring(remote.interfaces["human interactor"]["nonexistent"]))  -- prints nil
   *   ```
   */
  readonly interfaces: Record<string, Record<string, boolean>>
  /** This object's name. */
  readonly object_name: "LuaRemote"
}

/**
 * Allows rendering of geometric shapes, text and sprites in the game world. Each render object is identified by an id
 * that is universally unique for the lifetime of a whole game.
 *
 * **Note**: If an entity target of an object is destroyed or changes surface, then the object is also destroyed.
 *
 * {@link https://lua-api.factorio.com/latest/LuaRendering.html View documentation}
 *
 * @noSelf
 */
interface LuaRendering {
  /**
   * Create a line.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.draw_line View documentation}
   *
   * @example
   *   Draw a white and 2 pixel wide line from {0, 0} to {2, 2}.
   *
   *   ```lua
   *   rendering.draw_line{surface = game.player.surface, from = {0, 0}, to = {2, 2}, color = {1, 1, 1}, width = 2}
   *   ```
   *
   * @example
   *   Draw a red and 3 pixel wide line from {0, 0} to {0, 5}. The line has 1 tile long dashes and gaps.
   *
   *   ```lua
   *   rendering.draw_line{surface = game.player.surface, from = {0, 0}, to = {0, 5}, color = {r = 1}, width = 3, gap_length = 1, dash_length = 1}
   *   ```
   *
   * @returns Id of the render object
   */
  draw_line(params: {
    readonly color: Color
    /** In pixels (32 per tile). */
    readonly width: float
    /** Length of the gaps that this line has, in tiles. Default is 0. */
    readonly gap_length?: double
    /** Length of the dashes that this line has. Used only if gap_length > 0. Default is 0. */
    readonly dash_length?: double
    readonly from: Position | LuaEntity
    /** Only used if `from` is a LuaEntity. */
    readonly from_offset?: Vector
    readonly to: Position | LuaEntity
    /** Only used if `to` is a LuaEntity. */
    readonly to_offset?: Vector
    readonly surface: SurfaceIdentification
    /** In ticks. Defaults to living forever. */
    readonly time_to_live?: uint
    /** The forces that this object is rendered to. */
    readonly forces?: ForceIdentification[]
    /** The players that this object is rendered to. */
    readonly players?: PlayerIdentification[]
    /** If this is rendered to anyone at all. Defaults to true. */
    readonly visible?: boolean
    /** If this should be drawn below sprites and entities. */
    readonly draw_on_ground?: boolean
    /** If this should only be rendered in alt mode. Defaults to false. */
    readonly only_in_alt_mode?: boolean
  }): uint64
  /**
   * Create a text.
   *
   * **Note**: Not all fonts support scaling.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.draw_text View documentation}
   *
   * @returns Id of the render object
   */
  draw_text(params: {
    /** The text to display. */
    readonly text: LocalisedString
    readonly surface: SurfaceIdentification
    readonly target: Position | LuaEntity
    /** Only used if `target` is a LuaEntity. */
    readonly target_offset?: Vector
    readonly color: Color
    readonly scale?: double
    /** Name of font to use. Defaults to the same font as flying-text. */
    readonly font?: string
    /** In ticks. Defaults to living forever. */
    readonly time_to_live?: uint
    /** The forces that this object is rendered to. */
    readonly forces?: ForceIdentification[]
    /** The players that this object is rendered to. */
    readonly players?: PlayerIdentification[]
    /** If this is rendered to anyone at all. Defaults to true. */
    readonly visible?: boolean
    /** If this should be drawn below sprites and entities. */
    readonly draw_on_ground?: boolean
    /** The orientation of the text. Default is 0. */
    readonly orientation?: RealOrientation
    /** Defaults to "left". Other options are "right" and "center". */
    readonly alignment?: "left" | "right" | "center"
    /** Defaults to "top". Other options are "middle", "baseline" and "bottom". */
    readonly vertical_alignment?: "top" | "middle" | "baseline" | "bottom"
    /**
     * Defaults to false. If true, the text scales with player zoom, resulting in it always being the same size on
     * screen, and the size compared to the game world changes.
     */
    readonly scale_with_zoom?: boolean
    /** If this should only be rendered in alt mode. Defaults to false. */
    readonly only_in_alt_mode?: boolean
  }): uint64
  /**
   * Create a circle.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.draw_circle View documentation}
   *
   * @returns Id of the render object
   */
  draw_circle(params: {
    readonly color: Color
    /** In tiles. */
    readonly radius: double
    /** Width of the outline, used only if filled = false. Value is in pixels (32 per tile). */
    readonly width?: float
    /** If the circle should be filled. */
    readonly filled: boolean
    readonly target: Position | LuaEntity
    /** Only used if `target` is a LuaEntity. */
    readonly target_offset?: Vector
    readonly surface: SurfaceIdentification
    /** In ticks. Defaults to living forever. */
    readonly time_to_live?: uint
    /** The forces that this object is rendered to. */
    readonly forces?: ForceIdentification[]
    /** The players that this object is rendered to. */
    readonly players?: PlayerIdentification[]
    /** If this is rendered to anyone at all. Defaults to true. */
    readonly visible?: boolean
    /** If this should be drawn below sprites and entities. */
    readonly draw_on_ground?: boolean
    /** If this should only be rendered in alt mode. Defaults to false. */
    readonly only_in_alt_mode?: boolean
  }): uint64
  /**
   * Create a rectangle.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.draw_rectangle View documentation}
   *
   * @returns Id of the render object
   */
  draw_rectangle(params: {
    readonly color: Color
    /** Width of the outline, used only if filled = false. Value is in pixels (32 per tile). */
    readonly width?: float
    /** If the rectangle should be filled. */
    readonly filled: boolean
    readonly left_top: Position | LuaEntity
    /** Only used if `left_top` is a LuaEntity. */
    readonly left_top_offset?: Vector
    readonly right_bottom: Position | LuaEntity
    /** Only used if `right_bottom` is a LuaEntity. */
    readonly right_bottom_offset?: Vector
    readonly surface: SurfaceIdentification
    /** In ticks. Defaults to living forever. */
    readonly time_to_live?: uint
    /** The forces that this object is rendered to. */
    readonly forces?: ForceIdentification[]
    /** The players that this object is rendered to. */
    readonly players?: PlayerIdentification[]
    /** If this is rendered to anyone at all. Defaults to true. */
    readonly visible?: boolean
    /** If this should be drawn below sprites and entities. */
    readonly draw_on_ground?: boolean
    /** If this should only be rendered in alt mode. Defaults to false. */
    readonly only_in_alt_mode?: boolean
  }): uint64
  /**
   * Create an arc.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.draw_arc View documentation}
   *
   * @returns Id of the render object
   */
  draw_arc(params: {
    readonly color: Color
    /** The radius of the outer edge of the arc, in tiles. */
    readonly max_radius: double
    /** The radius of the inner edge of the arc, in tiles. */
    readonly min_radius: double
    /** Where the arc starts, in radian. */
    readonly start_angle: float
    /** The angle of the arc, in radian. */
    readonly angle: float
    readonly target: Position | LuaEntity
    /** Only used if `target` is a LuaEntity. */
    readonly target_offset?: Vector
    readonly surface: SurfaceIdentification
    /** In ticks. Defaults to living forever. */
    readonly time_to_live?: uint
    /** The forces that this object is rendered to. */
    readonly forces?: ForceIdentification[]
    /** The players that this object is rendered to. */
    readonly players?: PlayerIdentification[]
    /** If this is rendered to anyone at all. Defaults to true. */
    readonly visible?: boolean
    /** If this should be drawn below sprites and entities. */
    readonly draw_on_ground?: boolean
    /** If this should only be rendered in alt mode. Defaults to false. */
    readonly only_in_alt_mode?: boolean
  }): uint64
  /**
   * Create a triangle mesh defined by a triangle strip.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.draw_polygon View documentation}
   *
   * @returns Id of the render object
   */
  draw_polygon(params: {
    readonly color: Color
    readonly vertices: ScriptRenderVertexTarget[]
    /** Acts like an offset applied to all vertices that are not set to an entity. */
    readonly target?: Position | LuaEntity
    /** Only used if `target` is a LuaEntity. */
    readonly target_offset?: Vector
    /** The orientation applied to all vertices. Default is 0. */
    readonly orientation?: RealOrientation
    /**
     * If given, the vertices (that are not set to an entity) rotate so that it faces this target. Note that
     * `orientation` is still applied.
     */
    readonly orientation_target?: Position | LuaEntity
    /** Only used if `orientation_target` is a LuaEntity. */
    readonly orientation_target_offset?: Vector
    readonly surface: SurfaceIdentification
    /** In ticks. Defaults to living forever. */
    readonly time_to_live?: uint
    /** The forces that this object is rendered to. */
    readonly forces?: ForceIdentification[]
    /** The players that this object is rendered to. */
    readonly players?: PlayerIdentification[]
    /** If this is rendered to anyone at all. Defaults to true. */
    readonly visible?: boolean
    /** If this should be drawn below sprites and entities. */
    readonly draw_on_ground?: boolean
    /** If this should only be rendered in alt mode. Defaults to false. */
    readonly only_in_alt_mode?: boolean
  }): uint64
  /**
   * Create a sprite.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.draw_sprite View documentation}
   *
   * @example
   *   This will draw an iron plate icon at the character's feet. The sprite will move together with the character.
   *
   *   ```lua
   *   rendering.draw_sprite{sprite = "item.iron-plate", target = game.player.character, surface = game.player.surface}
   *   ```
   *
   * @example
   *   This will draw an iron plate icon at the character's head. The sprite will move together with the character.
   *
   *   ```lua
   *   rendering.draw_sprite{sprite = "item.iron-plate", target = game.player.character, target_offset = {0, -2}, surface = game.player.surface}
   *   ```
   *
   * @returns Id of the render object
   */
  draw_sprite(params: {
    readonly sprite: SpritePath
    /** The orientation of the sprite. Default is 0. */
    readonly orientation?: RealOrientation
    /** Horizontal scale of the sprite. Default is 1. */
    readonly x_scale?: double
    /** Vertical scale of the sprite. Default is 1. */
    readonly y_scale?: double
    readonly tint?: Color
    readonly render_layer?: RenderLayer
    /** If given, the sprite rotates so that it faces this target. Note that `orientation` is still applied to the sprite. */
    readonly orientation_target?: Position | LuaEntity
    /** Only used if `orientation_target` is a LuaEntity. */
    readonly orientation_target_offset?: Vector
    /** Offsets the center of the sprite if `orientation_target` is given. This offset will rotate together with the sprite. */
    readonly oriented_offset?: Vector
    /** Center of the sprite. */
    readonly target: Position | LuaEntity
    /** Only used if `target` is a LuaEntity. */
    readonly target_offset?: Vector
    readonly surface: SurfaceIdentification
    /** In ticks. Defaults to living forever. */
    readonly time_to_live?: uint
    /** The forces that this object is rendered to. */
    readonly forces?: ForceIdentification[]
    /** The players that this object is rendered to. */
    readonly players?: PlayerIdentification[]
    /** If this is rendered to anyone at all. Defaults to true. */
    readonly visible?: boolean
    /** If this should only be rendered in alt mode. Defaults to false. */
    readonly only_in_alt_mode?: boolean
  }): uint64
  /**
   * Create a light.
   *
   * **Note**: The base game uses the utility sprites `light_medium` and `light_small` for lights.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.draw_light View documentation}
   *
   * @returns Id of the render object
   */
  draw_light(params: {
    readonly sprite: SpritePath
    /** The orientation of the light. Default is 0. */
    readonly orientation?: RealOrientation
    /** Default is 1. */
    readonly scale?: float
    /** Default is 1. */
    readonly intensity?: float
    /** The minimum darkness at which this light is rendered. Default is 0. */
    readonly minimum_darkness?: float
    /**
     * If this light has the same orientation as the entity target, default is false. Note that `orientation` is
     * still applied to the sprite.
     */
    readonly oriented?: boolean
    /** Defaults to white (no tint). */
    readonly color?: Color
    /** Center of the light. */
    readonly target: Position | LuaEntity
    /** Only used if `target` is a LuaEntity. */
    readonly target_offset?: Vector
    readonly surface: SurfaceIdentification
    /** In ticks. Defaults to living forever. */
    readonly time_to_live?: uint
    /** The forces that this object is rendered to. */
    readonly forces?: ForceIdentification[]
    /** The players that this object is rendered to. */
    readonly players?: PlayerIdentification[]
    /** If this is rendered to anyone at all. Defaults to true. */
    readonly visible?: boolean
    /** If this should only be rendered in alt mode. Defaults to false. */
    readonly only_in_alt_mode?: boolean
  }): uint64
  /**
   * Create an animation.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.draw_animation View documentation}
   *
   * @returns Id of the render object
   */
  draw_animation(params: {
    /** Name of an {@link https://wiki.factorio.com/Prototype/Animation animation prototype}. */
    readonly animation: string
    /** The orientation of the animation. Default is 0. */
    readonly orientation?: RealOrientation
    /** Horizontal scale of the animation. Default is 1. */
    readonly x_scale?: double
    /** Vertical scale of the animation. Default is 1. */
    readonly y_scale?: double
    readonly tint?: Color
    readonly render_layer?: RenderLayer
    /** How many frames the animation goes forward per tick. Default is 1. */
    readonly animation_speed?: double
    /** Offset of the animation in frames. Default is 0. */
    readonly animation_offset?: double
    /**
     * If given, the animation rotates so that it faces this target. Note that `orientation` is still applied to the
     * animation.
     */
    readonly orientation_target?: Position | LuaEntity
    /** Only used if `orientation_target` is a LuaEntity. */
    readonly orientation_target_offset?: Vector
    /**
     * Offsets the center of the animation if `orientation_target` is given. This offset will rotate together with
     * the animation.
     */
    readonly oriented_offset?: Vector
    /** Center of the animation. */
    readonly target: Position | LuaEntity
    /** Only used if `target` is a LuaEntity. */
    readonly target_offset?: Vector
    readonly surface: SurfaceIdentification
    /** In ticks. Defaults to living forever. */
    readonly time_to_live?: uint
    /** The forces that this object is rendered to. */
    readonly forces?: ForceIdentification[]
    /** The players that this object is rendered to. */
    readonly players?: PlayerIdentification[]
    /** If this is rendered to anyone at all. Defaults to true. */
    readonly visible?: boolean
    /** If this should only be rendered in alt mode. Defaults to false. */
    readonly only_in_alt_mode?: boolean
  }): uint64
  /**
   * Destroy the object with the given id.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.destroy View documentation}
   *
   * @param id
   */
  destroy(id: uint64): void
  /**
   * Does a font with this name exist?
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.is_font_valid View documentation}
   *
   * @param font_name
   */
  is_font_valid(font_name: string): boolean
  /**
   * Does a valid object with this id exist?
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.is_valid View documentation}
   *
   * @param id
   */
  is_valid(id: uint64): boolean
  /**
   * Gets an array of all valid object ids.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_all_ids View documentation}
   *
   * @param mod_name - If provided, get only the render objects created by this mod.
   */
  get_all_ids(mod_name?: string): uint64[]
  /**
   * Destroys all render objects.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.clear View documentation}
   *
   * @param mod_name - If provided, only the render objects created by this mod are destroyed.
   */
  clear(mod_name?: string): void
  /**
   * Gets the type of the given object. The types are "text", "line", "circle", "rectangle", "arc", "polygon",
   * "sprite", "light" and "animation".
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_type View documentation}
   *
   * @param id
   */
  get_type(id: uint64): "text" | "line" | "circle" | "rectangle" | "arc" | "polygon" | "sprite" | "light" | "animation"
  /**
   * Reorder this object so that it is drawn in front of the already existing objects.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.bring_to_front View documentation}
   *
   * @param id
   */
  bring_to_front(id: uint64): void
  /**
   * The surface the object with this id is rendered on.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_surface View documentation}
   *
   * @param id
   */
  get_surface(id: uint64): LuaSurface
  /**
   * Get the time to live of the object with this id. This will be 0 if the object does not expire.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_time_to_live View documentation}
   *
   * @param id
   */
  get_time_to_live(id: uint64): uint
  /**
   * Set the time to live of the object with this id. Set to 0 if the object should not expire.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_time_to_live View documentation}
   *
   * @param id
   * @param time_to_live
   */
  set_time_to_live(id: uint64, time_to_live: uint): void
  /**
   * Get the forces that the object with this id is rendered to or `nil` if visible to all forces.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_forces View documentation}
   *
   * @param id
   */
  get_forces(id: uint64): LuaForce[] | undefined
  /**
   * Set the forces that the object with this id is rendered to.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_forces View documentation}
   *
   * @param id
   * @param forces - Providing an empty array will set the object to be visible to all forces.
   */
  set_forces(id: uint64, forces: ForceIdentification[]): void
  /**
   * Get the players that the object with this id is rendered to or `nil` if visible to all players.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_players View documentation}
   *
   * @param id
   */
  get_players(id: uint64): LuaPlayer[] | undefined
  /**
   * Set the players that the object with this id is rendered to.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_players View documentation}
   *
   * @param id
   * @param players - Providing an empty array will set the object to be visible to all players.
   */
  set_players(id: uint64, players: PlayerIdentification[]): void
  /**
   * Get whether this is rendered to anyone at all.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_visible View documentation}
   *
   * @param id
   */
  get_visible(id: uint64): boolean
  /**
   * Set whether this is rendered to anyone at all.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_visible View documentation}
   *
   * @param id
   * @param visible
   */
  set_visible(id: uint64, visible: boolean): void
  /**
   * Get whether this is being drawn on the ground, under most entities and sprites.
   *
   * *Can only be used if this is Text, Line, Circle, Rectangle, Arc or Polygon*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_draw_on_ground View documentation}
   *
   * @param id
   */
  get_draw_on_ground(id: uint64): boolean
  /**
   * Set whether this is being drawn on the ground, under most entities and sprites.
   *
   * *Can only be used if this is Text, Line, Circle, Rectangle, Arc or Polygon*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_draw_on_ground View documentation}
   *
   * @param id
   * @param draw_on_ground
   */
  set_draw_on_ground(id: uint64, draw_on_ground: boolean): void
  /**
   * Get whether this is only rendered in alt-mode.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_only_in_alt_mode View documentation}
   *
   * @param id
   */
  get_only_in_alt_mode(id: uint64): boolean
  /**
   * Set whether this is only rendered in alt-mode.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_only_in_alt_mode View documentation}
   *
   * @param id
   * @param only_in_alt_mode
   */
  set_only_in_alt_mode(id: uint64, only_in_alt_mode: boolean): void
  /**
   * Get the color or tint of the object with this id.
   *
   * *Can only be used if this is Text, Line, Circle, Rectangle, Arc, Polygon, Sprite, Light or Animation*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_color View documentation}
   *
   * @param id
   * @returns Or `nil` if the object does not support color.
   */
  get_color(id: uint64): ColorTable | undefined
  /**
   * Set the color or tint of the object with this id. Does nothing if this object does not support color.
   *
   * *Can only be used if this is Text, Line, Circle, Rectangle, Arc, Polygon, Sprite, Light or Animation*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_color View documentation}
   *
   * @param id
   * @param color
   */
  set_color(id: uint64, color: Color): void
  /**
   * Get the width of the object with this id. Value is in pixels (32 per tile).
   *
   * *Can only be used if this is Line, Circle or Rectangle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_width View documentation}
   *
   * @param id
   * @returns Or `nil` if the object does not support width.
   */
  get_width(id: uint64): float | undefined
  /**
   * Set the width of the object with this id. Does nothing if this object does not support width. Value is in pixels
   * (32 per tile).
   *
   * *Can only be used if this is Line, Circle or Rectangle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_width View documentation}
   *
   * @param id
   * @param width
   */
  set_width(id: uint64, width: float): void
  /**
   * Get from where the line with this id is drawn or `nil` if this object is not a line.
   *
   * *Can only be used if this is Line*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_from View documentation}
   *
   * @param id
   */
  get_from(id: uint64): ScriptRenderTarget | undefined
  /**
   * Set from where the line with this id is drawn. Does nothing if the object is not a line.
   *
   * *Can only be used if this is Line*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_from View documentation}
   *
   * @param id
   * @param from
   * @param from_offset
   */
  set_from(id: uint64, from: Position | LuaEntity, from_offset?: Vector): void
  /**
   * Get where the line with this id is drawn to or `nil` if the object is not a line.
   *
   * *Can only be used if this is Line*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_to View documentation}
   *
   * @param id
   */
  get_to(id: uint64): ScriptRenderTarget | undefined
  /**
   * Set where the line with this id is drawn to. Does nothing if this object is not a line.
   *
   * *Can only be used if this is Line*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_to View documentation}
   *
   * @param id
   * @param to
   * @param to_offset
   */
  set_to(id: uint64, to: Position | LuaEntity, to_offset?: Vector): void
  /**
   * Get the dash length of the line with this id or `nil` if the object is not a line.
   *
   * *Can only be used if this is Line*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_dash_length View documentation}
   *
   * @param id
   */
  get_dash_length(id: uint64): double | undefined
  /**
   * Set the dash length of the line with this id. Does nothing if this object is not a line.
   *
   * *Can only be used if this is Line*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_dash_length View documentation}
   *
   * @param id
   * @param dash_length
   */
  set_dash_length(id: uint64, dash_length: double): void
  /**
   * Get the length of the gaps in the line with this id or `nil` if the object is not a line.
   *
   * *Can only be used if this is Line*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_gap_length View documentation}
   *
   * @param id
   */
  get_gap_length(id: uint64): double | undefined
  /**
   * Set the length of the gaps in the line with this id. Does nothing if this object is not a line.
   *
   * *Can only be used if this is Line*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_gap_length View documentation}
   *
   * @param id
   * @param gap_length
   */
  set_gap_length(id: uint64, gap_length: double): void
  /**
   * Set the length of the dashes and the length of the gaps in the line with this id. Does nothing if this object is
   * not a line.
   *
   * *Can only be used if this is Line*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_dashes View documentation}
   *
   * @param id
   * @param dash_length
   * @param gap_length
   */
  set_dashes(id: uint64, dash_length: double, gap_length: double): void
  /**
   * Get where the object with this id is drawn or `nil` if the object does not support target.
   *
   * **Note**: Polygon vertices that are set to an entity will ignore this.
   *
   * *Can only be used if this is Text, Circle, Arc, Polygon, Sprite, Light or Animation*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_target View documentation}
   *
   * @param id
   */
  get_target(id: uint64): ScriptRenderTarget | undefined
  /**
   * Set where the object with this id is drawn. Does nothing if this object does not support target.
   *
   * **Note**: Polygon vertices that are set to an entity will ignore this.
   *
   * *Can only be used if this is Text, Circle, Arc, Polygon, Sprite, Light or Animation*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_target View documentation}
   *
   * @param id
   * @param target
   * @param target_offset
   */
  set_target(id: uint64, target: Position | LuaEntity, target_offset?: Vector): void
  /**
   * Get the orientation of the object with this id or `nil` if the object is not a text, polygon, sprite, light or animation.
   *
   * **Note**: Polygon vertices that are set to an entity will ignore this.
   *
   * *Can only be used if this is Text, Polygon, Sprite, Light or Animation*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_orientation View documentation}
   *
   * @param id
   */
  get_orientation(id: uint64): RealOrientation | undefined
  /**
   * Set the orientation of the object with this id. Does nothing if this object is not a text, polygon, sprite, light
   * or animation.
   *
   * **Note**: Polygon vertices that are set to an entity will ignore this.
   *
   * *Can only be used if this is Text, Polygon, Sprite, Light or Animation*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_orientation View documentation}
   *
   * @param id
   * @param orientation
   */
  set_orientation(id: uint64, orientation: RealOrientation): void
  /**
   * Get the scale of the text or light with this id or `nil` if the object is not a text or light.
   *
   * *Can only be used if this is Text or Light*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_scale View documentation}
   *
   * @param id
   */
  get_scale(id: uint64): double | undefined
  /**
   * Set the scale of the text or light with this id. Does nothing if this object is not a text or light.
   *
   * *Can only be used if this is Text or Light*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_scale View documentation}
   *
   * @param id
   * @param scale
   */
  set_scale(id: uint64, scale: double): void
  /**
   * Get the text that is displayed by the text with this id or `nil` if the object is not a text.
   *
   * *Can only be used if this is Text*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_text View documentation}
   *
   * @param id
   */
  get_text(id: uint64): LocalisedString | undefined
  /**
   * Set the text that is displayed by the text with this id. Does nothing if this object is not a text.
   *
   * *Can only be used if this is Text*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_text View documentation}
   *
   * @param id
   * @param text
   */
  set_text(id: uint64, text: LocalisedString): void
  /**
   * Get the font of the text with this id or `nil` if the object is not a text.
   *
   * *Can only be used if this is Text*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_font View documentation}
   *
   * @param id
   */
  get_font(id: uint64): string | undefined
  /**
   * Set the font of the text with this id. Does nothing if this object is not a text.
   *
   * *Can only be used if this is Text*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_font View documentation}
   *
   * @param id
   * @param font
   */
  set_font(id: uint64, font: string): void
  /**
   * Get the alignment of the text with this id or `nil` if the object is not a text.
   *
   * *Can only be used if this is Text*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_alignment View documentation}
   *
   * @param id
   */
  get_alignment(id: uint64): string | undefined
  /**
   * Set the alignment of the text with this id. Does nothing if this object is not a text.
   *
   * *Can only be used if this is Text*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_alignment View documentation}
   *
   * @param id
   * @param alignment - "left", "right" or "center".
   */
  set_alignment(id: uint64, alignment: "left" | "right" | "center"): void
  /**
   * Get the vertical alignment of the text with this id or `nil` if the object is not a text.
   *
   * *Can only be used if this is Text*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_vertical_alignment View documentation}
   *
   * @param id
   */
  get_vertical_alignment(id: uint64): string | undefined
  /**
   * Set the vertical alignment of the text with this id. Does nothing if this object is not a text.
   *
   * *Can only be used if this is Text*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_vertical_alignment View documentation}
   *
   * @param id
   * @param alignment - "top", "middle", "baseline" or "bottom"
   */
  set_vertical_alignment(id: uint64, alignment: "top" | "middle" | "baseline" | "bottom"): void
  /**
   * Get if the text with this id scales with player zoom or `nil` if the object is not a text.
   *
   * *Can only be used if this is Text*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_scale_with_zoom View documentation}
   *
   * @param id
   */
  get_scale_with_zoom(id: uint64): boolean | undefined
  /**
   * Set if the text with this id scales with player zoom, resulting in it always being the same size on screen, and
   * the size compared to the game world changes. Does nothing if this object is not a text.
   *
   * *Can only be used if this is Text*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_scale_with_zoom View documentation}
   *
   * @param id
   * @param scale_with_zoom
   */
  set_scale_with_zoom(id: uint64, scale_with_zoom: boolean): void
  /**
   * Get if the circle or rectangle with this id is filled or `nil` if the object is not a circle or rectangle.
   *
   * *Can only be used if this is Circle or Rectangle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_filled View documentation}
   *
   * @param id
   */
  get_filled(id: uint64): boolean | undefined
  /**
   * Set if the circle or rectangle with this id is filled. Does nothing if this object is not a circle or rectangle.
   *
   * *Can only be used if this is Circle or Rectangle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_filled View documentation}
   *
   * @param id
   * @param filled
   */
  set_filled(id: uint64, filled: boolean): void
  /**
   * Get the radius of the circle with this id or `nil` if the object is not a circle.
   *
   * *Can only be used if this is Circle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_radius View documentation}
   *
   * @param id
   */
  get_radius(id: uint64): double | undefined
  /**
   * Set the radius of the circle with this id. Does nothing if this object is not a circle.
   *
   * *Can only be used if this is Circle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_radius View documentation}
   *
   * @param id
   * @param radius
   */
  set_radius(id: uint64, radius: double): void
  /**
   * Get where top left corner of the rectangle with this id is drawn or `nil` if the object is not a rectangle.
   *
   * *Can only be used if this is Rectangle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_left_top View documentation}
   *
   * @param id
   */
  get_left_top(id: uint64): ScriptRenderTarget | undefined
  /**
   * Set where top left corner of the rectangle with this id is drawn. Does nothing if this object is not a rectangle.
   *
   * *Can only be used if this is Rectangle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_left_top View documentation}
   *
   * @param id
   * @param left_top
   * @param left_top_offset
   */
  set_left_top(id: uint64, left_top: Position | LuaEntity, left_top_offset?: Vector): void
  /**
   * Get where bottom right corner of the rectangle with this id is drawn or `nil` if the object is not a rectangle.
   *
   * *Can only be used if this is Rectangle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_right_bottom View documentation}
   *
   * @param id
   */
  get_right_bottom(id: uint64): ScriptRenderTarget | undefined
  /**
   * Set where top bottom right of the rectangle with this id is drawn. Does nothing if this object is not a rectangle.
   *
   * *Can only be used if this is Rectangle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_right_bottom View documentation}
   *
   * @param id
   * @param right_bottom
   * @param right_bottom_offset
   */
  set_right_bottom(id: uint64, right_bottom: Position | LuaEntity, right_bottom_offset?: Vector): void
  /**
   * Set the corners of the rectangle with this id. Does nothing if this object is not a rectangle.
   *
   * *Can only be used if this is Rectangle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_corners View documentation}
   *
   * @param id
   * @param left_top
   * @param left_top_offset
   * @param right_bottom
   * @param right_bottom_offset
   */
  set_corners(
    id: uint64,
    left_top: Position | LuaEntity,
    left_top_offset: Vector,
    right_bottom: Position | LuaEntity,
    right_bottom_offset: Vector
  ): void
  /**
   * Get the radius of the outer edge of the arc with this id or `nil` if the object is not a arc.
   *
   * *Can only be used if this is Arc*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_max_radius View documentation}
   *
   * @param id
   */
  get_max_radius(id: uint64): double | undefined
  /**
   * Set the radius of the outer edge of the arc with this id. Does nothing if this object is not a arc.
   *
   * *Can only be used if this is Arc*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_max_radius View documentation}
   *
   * @param id
   * @param max_radius
   */
  set_max_radius(id: uint64, max_radius: double): void
  /**
   * Get the radius of the inner edge of the arc with this id or `nil` if the object is not a arc.
   *
   * *Can only be used if this is Arc*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_min_radius View documentation}
   *
   * @param id
   */
  get_min_radius(id: uint64): double | undefined
  /**
   * Set the radius of the inner edge of the arc with this id. Does nothing if this object is not a arc.
   *
   * *Can only be used if this is Arc*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_min_radius View documentation}
   *
   * @param id
   * @param min_radius
   */
  set_min_radius(id: uint64, min_radius: double): void
  /**
   * Get where the arc with this id starts or `nil` if the object is not a arc.
   *
   * *Can only be used if this is Arc*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_start_angle View documentation}
   *
   * @param id
   * @returns Angle in radian
   */
  get_start_angle(id: uint64): float | undefined
  /**
   * Set where the arc with this id starts. Does nothing if this object is not a arc.
   *
   * *Can only be used if this is Arc*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_start_angle View documentation}
   *
   * @param id
   * @param start_angle - Angle in radian
   */
  set_start_angle(id: uint64, start_angle: float): void
  /**
   * Get the angle of the arc with this id or `nil` if the object is not a arc.
   *
   * *Can only be used if this is Arc*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_angle View documentation}
   *
   * @param id
   * @returns Angle in radian
   */
  get_angle(id: uint64): float | undefined
  /**
   * Set the angle of the arc with this id. Does nothing if this object is not a arc.
   *
   * *Can only be used if this is Arc*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_angle View documentation}
   *
   * @param id
   * @param angle - Angle in radian
   */
  set_angle(id: uint64, angle: float): void
  /**
   * Get the vertices of the polygon with this id or `nil` if the object is not a polygon.
   *
   * *Can only be used if this is Polygon*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_vertices View documentation}
   *
   * @param id
   */
  get_vertices(id: uint64): ScriptRenderTarget[] | undefined
  /**
   * Set the vertices of the polygon with this id. Does nothing if this object is not a polygon.
   *
   * *Can only be used if this is Polygon*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_vertices View documentation}
   *
   * @param id
   * @param vertices
   */
  set_vertices(id: uint64, vertices: ScriptRenderVertexTarget[]): void
  /**
   * Get the sprite of the sprite or light with this id or `nil` if the object is not a sprite or light.
   *
   * *Can only be used if this is Sprite or Light*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_sprite View documentation}
   *
   * @param id
   */
  get_sprite(id: uint64): SpritePath | undefined
  /**
   * Set the sprite of the sprite or light with this id. Does nothing if this object is not a sprite or light.
   *
   * *Can only be used if this is Sprite or Light*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_sprite View documentation}
   *
   * @param id
   * @param sprite
   */
  set_sprite(id: uint64, sprite: SpritePath): void
  /**
   * Get the horizontal scale of the sprite or animation with this id or `nil` if the object is not a sprite or animation.
   *
   * *Can only be used if this is Sprite or Animation*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_x_scale View documentation}
   *
   * @param id
   */
  get_x_scale(id: uint64): double | undefined
  /**
   * Set the horizontal scale of the sprite or animation with this id. Does nothing if this object is not a sprite or animation.
   *
   * *Can only be used if this is Sprite or Animation*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_x_scale View documentation}
   *
   * @param id
   * @param x_scale
   */
  set_x_scale(id: uint64, x_scale: double): void
  /**
   * Get the vertical scale of the sprite or animation with this id or `nil` if the object is not a sprite or animation.
   *
   * *Can only be used if this is Sprite or Animation*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_y_scale View documentation}
   *
   * @param id
   */
  get_y_scale(id: uint64): double | undefined
  /**
   * Set the vertical scale of the sprite or animation with this id. Does nothing if this object is not a sprite or animation.
   *
   * *Can only be used if this is Sprite or Animation*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_y_scale View documentation}
   *
   * @param id
   * @param y_scale
   */
  set_y_scale(id: uint64, y_scale: double): void
  /**
   * Get the render layer of the sprite or animation with this id or `nil` if the object is not a sprite or animation.
   *
   * *Can only be used if this is Sprite or Animation*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_render_layer View documentation}
   *
   * @param id
   */
  get_render_layer(id: uint64): RenderLayer | undefined
  /**
   * Set the render layer of the sprite or animation with this id. Does nothing if this object is not a sprite or animation.
   *
   * *Can only be used if this is Sprite or Animation*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_render_layer View documentation}
   *
   * @param id
   * @param render_layer
   */
  set_render_layer(id: uint64, render_layer: RenderLayer): void
  /**
   * The object rotates so that it faces this target. Note that `orientation` is still applied to the object. Get the
   * orientation_target of the object with this id or `nil` if no target or if this object is not a polygon, sprite,
   * or animation.
   *
   * **Note**: Polygon vertices that are set to an entity will ignore this.
   *
   * *Can only be used if this is Polygon, Sprite or Animation*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_orientation_target View documentation}
   *
   * @param id
   */
  get_orientation_target(id: uint64): ScriptRenderTarget | undefined
  /**
   * The object rotates so that it faces this target. Note that `orientation` is still applied to the object. Set the
   * orientation_target of the object with this id. Does nothing if this object is not a polygon, sprite, or
   * animation. Set to `nil` if the object should not have an orientation_target.
   *
   * **Note**: Polygon vertices that are set to an entity will ignore this.
   *
   * *Can only be used if this is Polygon, Sprite or Animation*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_orientation_target View documentation}
   *
   * @param id
   * @param orientation_target
   * @param orientation_target_offset
   */
  set_orientation_target(id: uint64, orientation_target: Position | LuaEntity, orientation_target_offset?: Vector): void
  /**
   * Offsets the center of the sprite or animation if `orientation_target` is given. This offset will rotate together
   * with the sprite or animation. Get the oriented_offset of the sprite or animation with this id or `nil` if this
   * object is not a sprite or animation.
   *
   * *Can only be used if this is Sprite or Animation*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_oriented_offset View documentation}
   *
   * @param id
   */
  get_oriented_offset(id: uint64): Vector | undefined
  /**
   * Offsets the center of the sprite or animation if `orientation_target` is given. This offset will rotate together
   * with the sprite or animation. Set the oriented_offset of the sprite or animation with this id. Does nothing if
   * this object is not a sprite or animation.
   *
   * *Can only be used if this is Sprite or Animation*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_oriented_offset View documentation}
   *
   * @param id
   * @param oriented_offset
   */
  set_oriented_offset(id: uint64, oriented_offset: Vector): void
  /**
   * Get the intensity of the light with this id or `nil` if the object is not a light.
   *
   * *Can only be used if this is Light*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_intensity View documentation}
   *
   * @param id
   */
  get_intensity(id: uint64): float | undefined
  /**
   * Set the intensity of the light with this id. Does nothing if this object is not a light.
   *
   * *Can only be used if this is Light*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_intensity View documentation}
   *
   * @param id
   * @param intensity
   */
  set_intensity(id: uint64, intensity: float): void
  /**
   * Get the minimum darkness at which the light with this id is rendered or `nil` if the object is not a light.
   *
   * *Can only be used if this is Light*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_minimum_darkness View documentation}
   *
   * @param id
   */
  get_minimum_darkness(id: uint64): float | undefined
  /**
   * Set the minimum darkness at which the light with this id is rendered. Does nothing if this object is not a light.
   *
   * *Can only be used if this is Light*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_minimum_darkness View documentation}
   *
   * @param id
   * @param minimum_darkness
   */
  set_minimum_darkness(id: uint64, minimum_darkness: float): void
  /**
   * Get if the light with this id is rendered has the same orientation as the target entity or `nil` if the object is
   * not a light. Note that `orientation` is still applied to the sprite.
   *
   * *Can only be used if this is Light*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_oriented View documentation}
   *
   * @param id
   */
  get_oriented(id: uint64): boolean | undefined
  /**
   * Set if the light with this id is rendered has the same orientation as the target entity. Does nothing if this
   * object is not a light. Note that `orientation` is still applied to the sprite.
   *
   * *Can only be used if this is Light*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_oriented View documentation}
   *
   * @param id
   * @param oriented
   */
  set_oriented(id: uint64, oriented: boolean): void
  /**
   * Get the animation prototype name of the animation with this id or `nil` if the object is not an animation.
   *
   * *Can only be used if this is Animation*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_animation View documentation}
   *
   * @param id
   */
  get_animation(id: uint64): string | undefined
  /**
   * Set the animation prototype name of the animation with this id. Does nothing if this object is not an animation.
   *
   * *Can only be used if this is Animation*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_animation View documentation}
   *
   * @param id
   * @param animation
   */
  set_animation(id: uint64, animation: string): void
  /**
   * Get the animation speed of the animation with this id or `nil` if the object is not an animation.
   *
   * *Can only be used if this is Animation*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_animation_speed View documentation}
   *
   * @param id
   * @returns Animation speed in frames per tick.
   */
  get_animation_speed(id: uint64): double | undefined
  /**
   * Set the animation speed of the animation with this id. Does nothing if this object is not an animation.
   *
   * *Can only be used if this is Animation*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_animation_speed View documentation}
   *
   * @param id
   * @param animation_speed - Animation speed in frames per tick.
   */
  set_animation_speed(id: uint64, animation_speed: double): void
  /**
   * Get the animation offset of the animation with this id or `nil` if the object is not an animation.
   *
   * *Can only be used if this is Animation*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.get_animation_offset View documentation}
   *
   * @param id
   * @returns Animation offset in frames.
   */
  get_animation_offset(id: uint64): double | undefined
  /**
   * Set the animation offset of the animation with this id. Does nothing if this object is not an animation.
   *
   * *Can only be used if this is Animation*
   *
   * {@link https://lua-api.factorio.com/latest/LuaRendering.html#LuaRendering.set_animation_offset View documentation}
   *
   * @param id
   * @param animation_offset - Animation offset in frames.
   */
  set_animation_offset(id: uint64, animation_offset: double): void
  /** This object's name. */
  readonly object_name: "LuaRendering"
}

/**
 * Prototype of a resource category.
 *
 * {@link https://lua-api.factorio.com/latest/LuaResourceCategoryPrototype.html View documentation}
 *
 * @noSelf
 */
interface LuaResourceCategoryPrototype {
  /**
   * Name of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaResourceCategoryPrototype.html#LuaResourceCategoryPrototype.name View documentation}
   */
  readonly name: string
  /**
   * Order string of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaResourceCategoryPrototype.html#LuaResourceCategoryPrototype.order View documentation}
   */
  readonly order: string
  readonly localised_name: LocalisedString
  readonly localised_description: LocalisedString
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaResourceCategoryPrototype"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Control behavior for roboports.
 *
 * {@link https://lua-api.factorio.com/latest/LuaRoboportControlBehavior.html View documentation}
 *
 * @noSelf
 */
interface LuaRoboportControlBehavior extends LuaControlBehavior {
  /**
   * `true` if the roboport should report the logistics network content to the circuit network.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRoboportControlBehavior.html#LuaRoboportControlBehavior.read_logistics View documentation}
   */
  read_logistics: boolean
  /**
   * `true` if the roboport should report the robot statistics to the circuit network.
   *
   * {@link https://lua-api.factorio.com/latest/LuaRoboportControlBehavior.html#LuaRoboportControlBehavior.read_robot_stats View documentation}
   */
  read_robot_stats: boolean
  available_logistic_output_signal: SignalID
  total_logistic_output_signal: SignalID
  available_construction_output_signal: SignalID
  total_construction_output_signal: SignalID
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaRoboportControlBehavior"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Object containing mod settings of three distinct types: `startup`, `global`, and `player`. An instance of LuaSettings
 * is available through the global object named `settings`.
 *
 * {@link https://lua-api.factorio.com/latest/LuaSettings.html View documentation}
 *
 * @noSelf
 */
interface LuaSettings {
  /**
   * Gets the current per-player settings for the given player, indexed by prototype name. Returns the same structure
   * as {@link LuaPlayer.mod_settings LuaPlayer::mod_settings}.
   *
   * **Note**: This table will become invalid if its associated player does.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSettings.html#LuaSettings.get_player_settings View documentation}
   *
   * @param player
   */
  get_player_settings(player: PlayerIdentification): LuaCustomTable<string, ModSetting>
  /**
   * The startup mod settings, indexed by prototype name.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSettings.html#LuaSettings.startup View documentation}
   */
  readonly startup: LuaCustomTable<string, ModSetting>
  /**
   * The current global mod settings, indexed by prototype name.
   *
   * Even though these are marked as read-only, they can be changed by overwriting individual {@link ModSetting} tables
   * in the custom table. Mods can only change their own settings. Using the in-game console, all global settings can
   * be changed.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSettings.html#LuaSettings.global View documentation}
   */
  readonly global: LuaCustomTable<string, ModSetting>
  /**
   * The default player mod settings for this map, indexed by prototype name.
   *
   * Even though these are marked as read-only, they can be changed by overwriting individual {@link ModSetting} tables
   * in the custom table. Mods can only change their own settings. Using the in-game console, all player settings can
   * be changed.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSettings.html#LuaSettings.player View documentation}
   */
  readonly player: LuaCustomTable<string, ModSetting>
  /** This object's name. */
  readonly object_name: "LuaSettings"
}

/**
 * Prototype of a shortcut.
 *
 * {@link https://lua-api.factorio.com/latest/LuaShortcutPrototype.html View documentation}
 *
 * @noSelf
 */
interface LuaShortcutPrototype {
  /**
   * Name of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaShortcutPrototype.html#LuaShortcutPrototype.name View documentation}
   */
  readonly name: string
  /**
   * Order string of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaShortcutPrototype.html#LuaShortcutPrototype.order View documentation}
   */
  readonly order: string
  readonly localised_name: LocalisedString
  readonly localised_description: LocalisedString
  readonly action: string
  readonly item_to_spawn: LuaItemPrototype
  readonly technology_to_unlock: LuaTechnologyPrototype
  readonly toggleable: boolean
  readonly associated_control_input: string
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaShortcutPrototype"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Control behavior for storage tanks.
 *
 * {@link https://lua-api.factorio.com/latest/LuaStorageTankControlBehavior.html View documentation}
 *
 * @noSelf
 */
interface LuaStorageTankControlBehavior extends LuaControlBehavior {
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaStorageTankControlBehavior"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Style of a GUI element. All of the attributes listed here may be `nil` if not available for a particular GUI element.
 *
 * {@link https://lua-api.factorio.com/latest/LuaStyle.html View documentation}
 *
 * @noSelf
 */
interface LuaStyle {
  /**
   * Gui of the {@link LuaGuiElement} of this style.
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.gui View documentation}
   */
  readonly gui: LuaGui
  /**
   * Name of this style.
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.name View documentation}
   */
  readonly name: string
  /**
   * Minimal width ensures, that the widget will never be smaller than than that size. It can't be squashed to be smaller.
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.minimal_width View documentation}
   */
  minimal_width: int
  /**
   * Maximal width ensures, that the widget will never be bigger than than that size. It can't be stretched to be bigger.
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.maximal_width View documentation}
   */
  maximal_width: int
  /**
   * Minimal height ensures, that the widget will never be smaller than than that size. It can't be squashed to be smaller.
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.minimal_height View documentation}
   */
  minimal_height: int
  /**
   * Maximal height ensures, that the widget will never be bigger than than that size. It can't be stretched to be bigger.
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.maximal_height View documentation}
   */
  maximal_height: int
  /**
   * Natural width specifies the width of the element tries to have, but it can still be squashed/stretched to have a
   * smaller or bigger size.
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.natural_width View documentation}
   */
  natural_width: int
  /**
   * Natural height specifies the height of the element tries to have, but it can still be squashed/stretched to have
   * a smaller or bigger size.
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.natural_height View documentation}
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
   * Horizontal align of the inner content of the widget, possible values are "left", "center" or "right"
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.horizontal_align View documentation}
   */
  horizontal_align: "left" | "center" | "right"
  /**
   * Vertical align of the inner content of the widget, possible values are "top", "center" or "bottom"
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.vertical_align View documentation}
   */
  vertical_align: "top" | "center" | "bottom"
  font_color: Color
  font: string
  /**
   * Space between the table cell contents top and border.
   *
   * *Can only be used if this is LuaTableStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.top_cell_padding View documentation}
   */
  top_cell_padding: int
  /**
   * Space between the table cell contents right and border.
   *
   * *Can only be used if this is LuaTableStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.right_cell_padding View documentation}
   */
  right_cell_padding: int
  /**
   * Space between the table cell contents bottom and border.
   *
   * *Can only be used if this is LuaTableStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.bottom_cell_padding View documentation}
   */
  bottom_cell_padding: int
  /**
   * Space between the table cell contents left and border.
   *
   * *Can only be used if this is LuaTableStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.left_cell_padding View documentation}
   */
  left_cell_padding: int
  /**
   * If the GUI element stretches its size horizontally to other elements.
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.horizontally_stretchable View documentation}
   */
  horizontally_stretchable: boolean
  /**
   * If the GUI element stretches its size vertically to other elements.
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.vertically_stretchable View documentation}
   */
  vertically_stretchable: boolean
  /**
   * If the GUI element can be squashed (by maximal width of some parent element) horizontally. This is mainly meant
   * to be used for scroll-pane The default value is false.
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.horizontally_squashable View documentation}
   */
  horizontally_squashable: boolean
  /**
   * If the GUI element can be squashed (by maximal height of some parent element) vertically. This is mainly meant to
   * be used for scroll-pane The default (parent) value for scroll pane is true, false otherwise.
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.vertically_squashable View documentation}
   */
  vertically_squashable: boolean
  /**
   * How this GUI element handles rich text.
   *
   * *Can only be used if this is LuaLabelStyle, LuaTextBoxStyle or LuaTextFieldStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.rich_text_setting View documentation}
   */
  rich_text_setting: defines.rich_text_setting
  /**
   * *Can only be used if this is LuaButtonStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.hovered_font_color View documentation}
   */
  hovered_font_color: Color
  /**
   * *Can only be used if this is LuaButtonStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.clicked_font_color View documentation}
   */
  clicked_font_color: Color
  /**
   * *Can only be used if this is LuaButtonStyle or LuaTabStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.disabled_font_color View documentation}
   */
  disabled_font_color: Color
  /**
   * *Can only be used if this is LuaButtonStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.pie_progress_color View documentation}
   */
  pie_progress_color: Color
  /**
   * *Can only be used if this is LuaButtonStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.clicked_vertical_offset View documentation}
   */
  clicked_vertical_offset: int
  /**
   * *Can only be used if this is LuaButtonStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.selected_font_color View documentation}
   */
  selected_font_color: Color
  /**
   * *Can only be used if this is LuaButtonStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.selected_hovered_font_color View documentation}
   */
  selected_hovered_font_color: Color
  /**
   * *Can only be used if this is LuaButtonStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.selected_clicked_font_color View documentation}
   */
  selected_clicked_font_color: Color
  /**
   * *Can only be used if this is LuaButtonStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.strikethrough_color View documentation}
   */
  strikethrough_color: Color
  /**
   * Horizontal space between individual cells.
   *
   * *Can only be used if this is LuaTableStyle, LuaFlowStyle or LuaHorizontalFlow*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.horizontal_spacing View documentation}
   */
  horizontal_spacing: int
  /**
   * Vertical space between individual cells.
   *
   * *Can only be used if this is LuaTableStyle, LuaFlowStyle, LuaVerticalFlowStyle or LuaTabbedPaneStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.vertical_spacing View documentation}
   */
  vertical_spacing: int
  /**
   * *Can only be used if this is LuaFrameStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.use_header_filler View documentation}
   */
  use_header_filler: boolean
  /**
   * *Can only be used if this is LuaProgressBarStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.bar_width View documentation}
   */
  bar_width: uint
  /**
   * *Can only be used if this is LuaProgressBarStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.color View documentation}
   */
  color: Color
  /**
   * Array containing the alignment for every column of this table element. Even though this property is marked as
   * read-only, the alignment can be changed by indexing the LuaCustomTable, like so:
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.column_alignments View documentation}
   *
   * @example
   *   ```lua
   *     table_element.style.column_alignments[1] = "center"
   *     ```
   */
  readonly column_alignments: LuaCustomTable<uint, Alignment>
  /**
   * *Can only be used if this is LabelStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.single_line View documentation}
   */
  single_line: boolean
  /**
   * *Can only be used if this is ScrollPaneStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.extra_top_padding_when_activated View documentation}
   */
  extra_top_padding_when_activated: int
  /**
   * *Can only be used if this is ScrollPaneStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.extra_bottom_padding_when_activated View documentation}
   */
  extra_bottom_padding_when_activated: int
  /**
   * *Can only be used if this is ScrollPaneStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.extra_left_padding_when_activated View documentation}
   */
  extra_left_padding_when_activated: int
  /**
   * *Can only be used if this is ScrollPaneStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.extra_right_padding_when_activated View documentation}
   */
  extra_right_padding_when_activated: int
  /**
   * *Can only be used if this is ScrollPaneStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.extra_top_margin_when_activated View documentation}
   */
  extra_top_margin_when_activated: int
  /**
   * *Can only be used if this is ScrollPaneStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.extra_bottom_margin_when_activated View documentation}
   */
  extra_bottom_margin_when_activated: int
  /**
   * *Can only be used if this is ScrollPaneStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.extra_left_margin_when_activated View documentation}
   */
  extra_left_margin_when_activated: int
  /**
   * *Can only be used if this is ScrollPaneStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.extra_right_margin_when_activated View documentation}
   */
  extra_right_margin_when_activated: int
  /**
   * *Can only be used if this is ImageStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.stretch_image_to_widget_size View documentation}
   */
  stretch_image_to_widget_size: boolean
  /**
   * *Can only be used if this is TabStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.badge_font View documentation}
   */
  badge_font: string
  /**
   * *Can only be used if this is TabStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.badge_horizontal_spacing View documentation}
   */
  badge_horizontal_spacing: int
  /**
   * *Can only be used if this is TabStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.default_badge_font_color View documentation}
   */
  default_badge_font_color: Color
  /**
   * *Can only be used if this is TabStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.selected_badge_font_color View documentation}
   */
  selected_badge_font_color: Color
  /**
   * *Can only be used if this is TabStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.disabled_badge_font_color View documentation}
   */
  disabled_badge_font_color: Color
  /**
   * Sets both minimal and maximal width to the given value.
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.width View documentation}
   */
  set width(value: int)
  /**
   * Sets both minimal and maximal height to the given value.
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.height View documentation}
   */
  set height(value: int)
  /**
   * Sets both width and height to the given value. Also accepts an array with two values, setting width to the first
   * and height to the second one.
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.size View documentation}
   */
  set size(value: int | int[])
  /**
   * Sets top/right/bottom/left paddings to this value. An array with two values sets top/bottom padding to the first
   * value and left/right padding to the second value. An array with four values sets top, right, bottom, left padding
   * respectively.
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.padding View documentation}
   */
  set padding(value: int | int[])
  /**
   * Sets top/right/bottom/left margins to this value. An array with two values sets top/bottom margin to the first
   * value and left/right margin to the second value. An array with four values sets top, right, bottom, left margin
   * respectively.
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.margin View documentation}
   */
  set margin(value: int | int[])
  /**
   * Space between the table cell contents and border. Sets top/right/bottom/left cell paddings to this value.
   *
   * *Can only be used if this is LuaTableStyle*
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.cell_padding View documentation}
   */
  set cell_padding(value: int)
  /**
   * Sets extra_top/right/bottom/left_padding_when_actived to this value. An array with two values sets top/bottom
   * padding to the first value and left/right padding to the second value. An array with four values sets top, right,
   * bottom, left padding respectively.
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.extra_padding_when_activated View documentation}
   */
  set extra_padding_when_activated(value: int | int[])
  /**
   * Sets extra_top/right/bottom/left_margin_when_activated to this value. An array with two values sets top/bottom
   * margin to the first value and left/right margin to the second value. An array with four values sets top, right,
   * bottom, left margin respectively.
   *
   * {@link https://lua-api.factorio.com/latest/LuaStyle.html#LuaStyle.extra_margin_when_activated View documentation}
   */
  set extra_margin_when_activated(value: int | int[])
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaStyle"
  /** All methods and properties that this object supports. */
  help(): string
}

interface BaseSurfaceCreateEntity {
  /** The entity prototype name to create. */
  readonly name: string
  /** Where to create the entity. */
  readonly position: Position
  /** Desired orientation of the entity after creation. */
  readonly direction?: defines.direction
  /** Force of the entity, default is enemy. */
  readonly force?: ForceIdentification
  /** Entity with health for the new entity to target. */
  readonly target?: LuaEntity
  /** Source entity. Used for beams and highlight-boxes. */
  readonly source?: LuaEntity
  /** If true, building will attempt to simulate fast-replace building. */
  readonly fast_replace?: boolean
  /** If given set the last_user to this player. If fast_replace is true simulate fast replace using this player. */
  readonly player?: PlayerIdentification
  /**
   * If false while fast_replace is true and player is nil any items from fast-replacing will be deleted instead of
   * dropped on the ground.
   */
  readonly spill?: boolean
  /** If true; {@link defines.events.script_raised_built} will be fired on successful entity creation. */
  readonly raise_built?: boolean
  /** If false, the building effect smoke will not be shown around the new entity. */
  readonly create_build_effect_smoke?: boolean
  /** If true, entity types that have spawn_decorations property will apply triggers defined in the property. */
  readonly spawn_decorations?: boolean
  /** If true, any characters that are in the way of the entity are teleported out of the way. */
  readonly move_stuck_players?: boolean
  /**
   * If provided, the entity will attempt to pull stored values from this item (for example; creating a spidertron
   * from a previously named and mined spidertron)
   */
  readonly item?: LuaItemStack
}

interface AssemblingMachineSurfaceCreateEntity extends BaseSurfaceCreateEntity {
  readonly recipe?: string
}

interface BeamSurfaceCreateEntity extends BaseSurfaceCreateEntity {
  /**
   * Absolute target position that can be used instead of target entity (entity has precedence if both entity and
   * position are defined).
   */
  readonly target_position?: Position
  /**
   * Absolute source position that can be used instead of source entity (entity has precedence if both entity and
   * position are defined).
   */
  readonly source_position?: Position
  /** If set, beam will be destroyed when distance between source and target is greater than this value. */
  readonly max_length?: uint
  /** If set, beam will be destroyed after this value of ticks. */
  readonly duration?: uint
  /** Source position will be offset by this value when rendering the beam. */
  readonly source_offset?: Vector
}

interface ContainerSurfaceCreateEntity extends BaseSurfaceCreateEntity {
  /** Inventory index where the red limiting bar should be set. */
  readonly bar?: uint
}

interface CliffSurfaceCreateEntity extends BaseSurfaceCreateEntity {
  /** If not specified, `direction` will be used instead. */
  readonly cliff_orientation?: CliffOrientation
}

interface FlyingTextSurfaceCreateEntity extends BaseSurfaceCreateEntity {
  /** The string to show. */
  readonly text: LocalisedString
  /** Color of the displayed text. */
  readonly color?: Color
  readonly render_player_index?: uint
}

interface EntityGhostSurfaceCreateEntity extends BaseSurfaceCreateEntity {
  /** The prototype name of the entity contained in the ghost. */
  readonly inner_name: string
  /** If `false` the ghost entity will not expire. Default is `false`. */
  readonly expires?: boolean
}

interface FireSurfaceCreateEntity extends BaseSurfaceCreateEntity {
  /** With how many small flames should the fire on ground be created. Defaults to the initial flame count of the prototype. */
  readonly initial_ground_flame_count?: uint8
}

interface InserterSurfaceCreateEntity extends BaseSurfaceCreateEntity {
  readonly conditions: InserterCircuitConditions
  readonly filters: InventoryFilter[]
}

interface ItemEntitySurfaceCreateEntity extends BaseSurfaceCreateEntity {
  /** The stack of items to create. */
  readonly stack: SimpleItemStack
}

interface ItemRequestProxySurfaceCreateEntity extends BaseSurfaceCreateEntity {
  /** The target items are to be delivered to. */
  readonly target: LuaEntity
  /** The stacks of items to be delivered to target entity from logistic network. */
  readonly modules: Record<string, uint>
}

interface RollingStockSurfaceCreateEntity extends BaseSurfaceCreateEntity {
  /** The orientation of this rolling stock. */
  readonly orientation?: RealOrientation
  /** The color of this rolling stock, if it supports colors. */
  readonly color?: Color
}

interface LocomotiveSurfaceCreateEntity extends BaseSurfaceCreateEntity {
  /** Whether the locomotive should snap to an adjacent train stop. Defaults to true. */
  readonly snap_to_train_stop?: boolean
}

interface LogisticContainerSurfaceCreateEntity extends BaseSurfaceCreateEntity {
  readonly request_filters?: InventoryFilter[]
}

interface ParticleSurfaceCreateEntity extends BaseSurfaceCreateEntity {
  readonly movement: Vector
  readonly height: float
  readonly vertical_speed: float
  readonly frame_speed: float
}

interface ArtilleryFlareSurfaceCreateEntity extends BaseSurfaceCreateEntity {
  readonly movement: Vector
  readonly height: float
  readonly vertical_speed: float
  readonly frame_speed: float
}

interface ProjectileSurfaceCreateEntity extends BaseSurfaceCreateEntity {
  readonly speed: double
  readonly max_range: double
}

interface ResourceSurfaceCreateEntity extends BaseSurfaceCreateEntity {
  readonly amount: uint
  /**
   * If colliding trees are removed normally for this resource entity based off the prototype tree removal values.
   * Default is true.
   */
  readonly enable_tree_removal?: boolean
  /** If colliding cliffs are removed. Default is true. */
  readonly enable_cliff_removal?: boolean
  /**
   * If true, the resource entity will be placed to center of a tile as map generator would place it, otherwise
   * standard non-resource grid alignment rules will apply. Default is true.
   */
  readonly snap_to_tile_center?: boolean
}

interface UndergroundBeltSurfaceCreateEntity extends BaseSurfaceCreateEntity {
  /** `"output"` or `"input"`; default is `"input"`. */
  readonly type?: "output" | "input"
}

interface ProgrammableSpeakerSurfaceCreateEntity extends BaseSurfaceCreateEntity {
  readonly parameters?: ProgrammableSpeakerParameters
  readonly alert_parameters?: ProgrammableSpeakerAlertParameters
}

interface CharacterCorpseSurfaceCreateEntity extends BaseSurfaceCreateEntity {
  readonly inventory_size?: uint
  readonly player_index?: uint
}

interface HighlightBoxSurfaceCreateEntity extends BaseSurfaceCreateEntity {
  /**
   * The bounding box defining the highlight box using absolute map coordinates. If specified, the `position`
   * parameter is ignored, but needs to be present anyways. If not specified, the game falls back to the `source`
   * parameter first, then the `target` parameter second. One of these three parameters need to be specified.
   */
  readonly bounding_box?: BoundingBox
  /** Specifies the graphical appearance (color) of the highlight box. Defaults to `"electricity"`. */
  readonly box_type?: CursorBoxRenderType
  /** The player to render the highlight box for. If not provided, it will be rendered for all players. */
  readonly render_player_index?: uint
  /**
   * The blink interval for this highlight box. Makes it be shown every `blink_interval` ticks. Defaults to `0`
   * (constantly shown).
   */
  readonly blink_interval?: uint
  /** The amount of time in ticks that the highlight box will exist for. Defaults to existing forever. */
  readonly time_to_live?: uint
}

interface SpeechBubbleSurfaceCreateEntity extends BaseSurfaceCreateEntity {
  readonly text: LocalisedString
  readonly lifetime?: uint
}

interface SimpleEntityWithOwnerSurfaceCreateEntity extends BaseSurfaceCreateEntity {
  readonly render_player_index?: uint
}

interface SimpleEntityWithForceSurfaceCreateEntity extends BaseSurfaceCreateEntity {
  readonly render_player_index?: uint
}

type SurfaceCreateEntity =
  | AssemblingMachineSurfaceCreateEntity
  | BeamSurfaceCreateEntity
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
  | ResourceSurfaceCreateEntity
  | UndergroundBeltSurfaceCreateEntity
  | ProgrammableSpeakerSurfaceCreateEntity
  | CharacterCorpseSurfaceCreateEntity
  | HighlightBoxSurfaceCreateEntity
  | SpeechBubbleSurfaceCreateEntity
  | SimpleEntityWithOwnerSurfaceCreateEntity
  | SimpleEntityWithForceSurfaceCreateEntity

/**
 * A "domain" of the world. Surfaces can only be created and deleted through the API. Surfaces are uniquely identified
 * by their name. Every game contains at least the surface "nauvis".
 *
 * {@link https://lua-api.factorio.com/latest/LuaSurface.html View documentation}
 *
 * @noSelf
 */
interface LuaSurface {
  /**
   * Get the pollution for a given position.
   *
   * **Note**: Pollution is stored per chunk, so this will return the same value for all positions in one chunk.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.get_pollution View documentation}
   *
   * @example
   *   ```lua
   *     game.surfaces[1].get_pollution({1,2})
   *     ```
   *
   * @param position
   */
  get_pollution(position: Position): double
  /**
   * Check for collisions with terrain or other entities.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.can_place_entity View documentation}
   */
  can_place_entity(params: {
    /** Name of the entity prototype to check. */
    readonly name: string
    /** Where the entity would be placed. */
    readonly position: Position
    /** Direction of the placed entity. */
    readonly direction?: defines.direction
    /** The force that would place the entity. If not specified, the enemy force is assumed. */
    readonly force?: ForceIdentification
    /** Which type of check should be carried out. */
    readonly build_check_type?: defines.build_check_type
    /**
     * If `true`, entities that can be marked for deconstruction are ignored. Only used if `build_check_type` is
     * either `manual_ghost`, `script_ghost` or `blueprint_ghost`.
     */
    readonly forced?: boolean
    /** The prototype name of the entity contained in the ghost. Only used if `name` is `entity-ghost`. */
    readonly inner_name?: string
  }): boolean
  /**
   * If there exists an entity at the given location that can be fast-replaced with the given entity parameters.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.can_fast_replace View documentation}
   */
  can_fast_replace(params: {
    /** Name of the entity to check */
    readonly name: string
    /** Where the entity would be placed */
    readonly position: Position
    /** Direction the entity would be placed */
    readonly direction?: defines.direction
    /** The force that would place the entity. If not specified, the enemy force is assumed. */
    readonly force?: ForceIdentification
  }): boolean
  /**
   * Find a specific entity at a specific position.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.find_entity View documentation}
   *
   * @example
   *   ```lua
   *     game.player.selected.surface.find_entity('filter-inserter', {0,0})
   *     ```
   *
   * @param entity - Entity to look for
   * @param position - Coordinates to look at
   * @returns Will be `nil` if no such entity is found.
   */
  find_entity(entity: string, position: Position): LuaEntity | undefined
  /**
   * Find entities in a given area.
   *
   * If no area is given all entities on the surface are returned.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.find_entities View documentation}
   *
   * @example
   *   Will evaluate to a list of all entities within given area.
   *
   *   ```lua
   *   game.surfaces["nauvis"].find_entities({{-10, -10}, {10, 10}})
   *   ```
   *
   * @param area
   */
  find_entities(area?: BoundingBox): LuaEntity[]
  /**
   * Find all entities of the given type or name in the given area.
   *
   * If no filters (`name`, `type`, `force`, etc.) are given, this returns all entities in the search area. If
   * multiple filters are specified, only entities matching all given filters are returned.
   *
   * If no `area` or `position` are given, the entire surface is searched. If `position` is given, this returns the
   * entities colliding with that position (i.e the given position is within the entity's collision box). If
   * `position` and `radius` are given, this returns the entities within the radius of the position. If `area` is
   * specified, this returns the entities colliding with that area.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.find_entities_filtered View documentation}
   *
   * @example
   *   ```lua
   *     game.surfaces[1].find_entities_filtered{area = {{-10, -10}, {10, 10}}, type = "resource"} -- gets all resources in the rectangle
   *     game.surfaces[1].find_entities_filtered{area = {{-10, -10}, {10, 10}}, name = "iron-ore"} -- gets all iron ores in the rectangle
   *     game.surfaces[1].find_entities_filtered{area = {{-10, -10}, {10, 10}}, name = {"iron-ore", "copper-ore"}} -- gets all iron ore and copper ore in the rectangle
   *     game.surfaces[1].find_entities_filtered{area = {{-10, -10}, {10, 10}}, force = "player"}  -- gets player owned entities in the rectangle
   *     game.surfaces[1].find_entities_filtered{area = {{-10, -10}, {10, 10}}, limit = 5}  -- gets the first 5 entities in the rectangle
   *     game.surfaces[1].find_entities_filtered{position = {0, 0}, radius = 10}  -- gets all entities within 10 tiles of the position [0,0].
   *     ```
   */
  find_entities_filtered(params: {
    readonly area?: BoundingBox
    /** Has precedence over area field. */
    readonly position?: Position
    /** If given with position, will return all entities within the radius of the position. */
    readonly radius?: double
    readonly name?: string | string[]
    readonly type?: string | string[]
    readonly ghost_name?: string | string[]
    readonly ghost_type?: string | string[]
    readonly direction?: defines.direction | defines.direction[]
    readonly collision_mask?: CollisionMaskLayer | CollisionMaskLayer[]
    readonly force?: ForceIdentification | ForceIdentification[]
    readonly to_be_deconstructed?: boolean
    readonly to_be_upgraded?: boolean
    readonly limit?: uint
    /**
     * If the filters should be inverted. These filters are: name, type, ghost_name, ghost_type, direction,
     * collision_mask, force.
     */
    readonly invert?: boolean
  }): LuaEntity[]
  /**
   * Find all tiles of the given name in the given area.
   *
   * If no filters are given, this returns all tiles in the search area.
   *
   * If no `area` or `position` and `radius` is given, the entire surface is searched. If `position` and `radius` are
   * given, only tiles within the radius of the position are included.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.find_tiles_filtered View documentation}
   */
  find_tiles_filtered(params: {
    readonly area?: BoundingBox
    /** Ignored if not given with radius. */
    readonly position?: Position
    /** If given with position, will return all entities within the radius of the position. */
    readonly radius?: double
    readonly name?: string | string[]
    readonly limit?: uint
    readonly has_hidden_tile?: boolean
    readonly collision_mask?: CollisionMaskLayer | CollisionMaskLayer[]
  }): LuaTile[]
  /**
   * Count entities of given type or name in a given area. Works just like
   * {@link LuaSurface.find_entities_filtered LuaSurface::find_entities_filtered}, except this only returns the count.
   * As it doesn't construct all the wrapper objects, this is more efficient if one is only interested in the number
   * of entities.
   *
   * If no `area` or `position` are given, the entire surface is searched. If `position` is given, this returns the
   * entities colliding with that position (i.e the given position is within the entity's collision box). If
   * `position` and `radius` are given, this returns entities in the radius of the position. If `area` is specified,
   * this returns entities colliding with that area.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.count_entities_filtered View documentation}
   */
  count_entities_filtered(params: {
    readonly area?: BoundingBox
    readonly position?: Position
    /** If given with position, will count all entities within the radius of the position. */
    readonly radius?: double
    readonly name?: string | string[]
    readonly type?: string | string[]
    readonly ghost_name?: string | string[]
    readonly ghost_type?: string | string[]
    readonly direction?: defines.direction | defines.direction[]
    readonly collision_mask?: CollisionMaskLayer | CollisionMaskLayer[]
    readonly force?: ForceIdentification | ForceIdentification[]
    readonly to_be_deconstructed?: boolean
    readonly to_be_upgraded?: boolean
    readonly limit?: uint
    /**
     * If the filters should be inverted. These filters are: name, type, ghost_name, ghost_type, direction,
     * collision_mask, force.
     */
    readonly invert?: boolean
  }): uint
  /**
   * Count tiles of a given name in a given area. Works just like
   * {@link LuaSurface.find_tiles_filtered LuaSurface::find_tiles_filtered}, except this only returns the count. As it
   * doesn't construct all the wrapper objects, this is more efficient if one is only interested in the number of tiles.
   *
   * If no `area` or `position` and `radius` is given, the entire surface is searched. If `position` and `radius` are
   * given, only tiles within the radius of the position are included.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.count_tiles_filtered View documentation}
   */
  count_tiles_filtered(params: {
    readonly area?: BoundingBox
    /** Ignored if not given with radius. */
    readonly position?: Position
    /** If given with position, will return all entities within the radius of the position. */
    readonly radius?: double
    readonly name?: string | string[]
    readonly limit?: uint
    readonly has_hidden_tile?: boolean
    readonly collision_mask?: CollisionMaskLayer | CollisionMaskLayer[]
  }): uint
  /**
   * Find a non-colliding position within a given radius.
   *
   * **Note**: Special care needs to be taken when using a radius of `0`. The game will not stop searching until it
   * finds a suitable position, so it is important to make sure such a position exists. One particular case where it
   * would not be able to find a solution is running it before any chunks have been generated.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.find_non_colliding_position View documentation}
   *
   * @param name - Prototype name of the entity to find a position for. (The bounding box for the collision checking
   *   is taken from this prototype.)
   * @param center - Center of the search area.
   * @param radius - Max distance from `center` to search in. A radius of `0` means an infinitely-large search area.
   * @param precision - The step length from the given position as it searches, in tiles. Minimum value is `0.01`.
   * @param force_to_tile_center - Will only check tile centers. This can be useful when your intent is to place a
   *   building at the resulting position, as they must generally be placed at tile centers. Default false.
   * @returns The non-colliding position. May be `nil` if no suitable position was found.
   */
  find_non_colliding_position(
    name: string,
    center: Position,
    radius: double,
    precision: double,
    force_to_tile_center?: boolean
  ): PositionTable | undefined
  /**
   * Find a non-colliding position within a given rectangle.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.find_non_colliding_position_in_box View documentation}
   *
   * @param name - Prototype name of the entity to find a position for. (The bounding box for the collision checking
   *   is taken from this prototype.)
   * @param search_space - The rectangle to search inside.
   * @param precision - The step length from the given position as it searches, in tiles. Minimum value is 0.01.
   * @param force_to_tile_center - Will only check tile centers. This can be useful when your intent is to place a
   *   building at the resulting position, as they must generally be placed at tile centers. Default false.
   * @returns The non-colliding position. May be `nil` if no suitable position was found.
   */
  find_non_colliding_position_in_box(
    name: string,
    search_space: BoundingBox,
    precision: double,
    force_to_tile_center?: boolean
  ): PositionTable | undefined
  /**
   * Spill items on the ground centered at a given location.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.spill_item_stack View documentation}
   *
   * @param position - Center of the spillage
   * @param items - Items to spill
   * @param enable_looted - When true, each created item will be flagged with the
   *   {@link LuaEntity.to_be_looted LuaEntity::to_be_looted} flag.
   * @param force - When provided (and not `nil`) the items will be marked for deconstruction by this force.
   * @param allow_belts - Whether items can be spilled onto belts. Defaults to `true`.
   * @returns The created item-on-ground entities.
   */
  spill_item_stack(
    position: Position,
    items: ItemStackIdentification,
    enable_looted?: boolean,
    force?: LuaForce | string,
    allow_belts?: boolean
  ): LuaEntity[]
  /**
   * Find enemy units (entities with type "unit") of a given force within an area.
   *
   * **Note**: This is more efficient than {@link LuaSurface.find_entities LuaSurface::find_entities}.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.find_enemy_units View documentation}
   *
   * @example
   *   Find all units who would be interested to attack the player, within 100-tile area.
   *
   *   ```lua
   *   local enemies = game.player.surface.find_enemy_units(game.player.position, 100)
   *   ```
   *
   * @param center - Center of the search area
   * @param radius - Radius of the circular search area
   * @param force - Force to find enemies of. If not given, uses the player force.
   */
  find_enemy_units(center: Position, radius: double, force?: LuaForce | string): LuaEntity[]
  /**
   * Find units (entities with type "unit") of a given force and force condition within a given area.
   *
   * **Note**: This is more efficient than {@link LuaSurface.find_entities LuaSurface::find_entities}.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.find_units View documentation}
   *
   * @example
   *   Find friendly units to "player" force
   *
   *   ```lua
   *   local friendly_units = game.player.surface.find_units({area = {{-10, -10},{10, 10}}, force = "player", condition = "friend")
   *   ```
   *
   * @example
   *   Find units of "player" force
   *
   *   ```lua
   *   local units = game.player.surface.find_units({area = {{-10, -10},{10, 10}}, force = "player", condition = "same"})
   *   ```
   */
  find_units(params: {
    /** Box to find units within. */
    readonly area: BoundingBox
    /** Force performing the search. */
    readonly force: LuaForce | string
    /** Only forces which meet the condition will be included in the search. */
    readonly condition: ForceCondition
  }): LuaEntity[]
  /**
   * Find the enemy entity-with-force ({@link https://wiki.factorio.com/Military_units_and_structures military entity})
   * closest to the given position.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.find_nearest_enemy View documentation}
   *
   * @returns The nearest enemy entity-with-force or `nil` if no enemy could be found within the given area.
   */
  find_nearest_enemy(params: {
    /** Center of the search area. */
    readonly position: Position
    /** Radius of the circular search area. */
    readonly max_distance: double
    /** The force the result will be an enemy of. Uses the player force if not specified. */
    readonly force?: ForceIdentification
  }): LuaEntity | undefined
  /**
   * Find the enemy entity-with-owner closest to the given position.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.find_nearest_enemy_entity_with_owner View documentation}
   *
   * @returns The nearest enemy entity-with-owner or `nil` if no enemy could be found within the given area.
   */
  find_nearest_enemy_entity_with_owner(params: {
    /** Center of the search area. */
    readonly position: Position
    /** Radius of the circular search area. */
    readonly max_distance: double
    /** The force the result will be an enemy of. Uses the player force if not specified. */
    readonly force?: ForceIdentification
  }): LuaEntity | undefined
  /**
   * Give a command to multiple units. This will automatically select suitable units for the task.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.set_multi_command View documentation}
   *
   * @returns Number of units actually sent. May be less than `count` if not enough units were available.
   */
  set_multi_command(params: {
    readonly command: Command
    /** Number of units to give the command to. */
    readonly unit_count: uint
    /** Force of the units this command is to be given to. If not specified, uses the enemy force. */
    readonly force?: ForceIdentification
    /** Radius to search for units. The search area is centered on the destination of the command. */
    readonly unit_search_distance?: uint
  }): uint
  /**
   * Create an entity on this surface.
   *
   * Other attributes may be specified depending on the type of entity:
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.create_entity View documentation}
   *
   * @example
   *   ```lua
   *     asm = game.surfaces[1].create_entity{name = "assembling-machine-1", position = {15, 3}, force = game.forces.player, recipe = "iron-stick"}
   *     ```
   *
   * @example
   *   Creates a filter inserter with circuit conditions and a filter
   *
   *   ```lua
   *   game.surfaces[1].create_entity{
   *   name = "filter-inserter", position = {20, 15}, force = game.player.force,
   *   conditions = {red = {name = "wood", count = 3, operator = ">"},
   *   green = {name = "iron-ore", count = 1, operator = "<"},
   *   logistics = {name = "wood", count = 3, operator = "="}},
   *   filters = {{index = 1, name = "iron-ore"}}
   *   }
   *   ```
   *
   * @example
   *   Creates a requester chest already set to request 128 iron plates.
   *
   *   ```lua
   *   game.surfaces[1].create_entity{
   *   name = "logistic-chest-requester", position = {game.player.position.x+3, game.player.position.y},
   *   force = game.player.force, request_filters = {{index = 1, name = "iron-plate", count = 128}}
   *   }
   *   ```
   *
   * @example
   *   ```lua
   *     game.surfaces[1].create_entity{name = "big-biter", position = {15, 3}, force = game.forces.player} -- Friendly biter
   *     game.surfaces[1].create_entity{name = "medium-biter", position = {15, 3}, force = game.forces.enemy} -- Enemy biter
   *     ```
   *
   * @example
   *   Creates a basic inserter at the player's location facing north
   *
   *   ```lua
   *   game.surfaces[1].create_entity{name = "inserter", position = game.player.position, direction = defines.direction.north}
   *   ```
   *
   * @returns The created entity or `nil` if the creation failed.
   */
  create_entity(params: SurfaceCreateEntity): LuaEntity | undefined
  create_trivial_smoke(params: {
    /** The smoke prototype name to create. */
    readonly name: string
    /** Where to create the smoke. */
    readonly position: Position
  }): void
  /**
   * Creates a particle at the given location
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.create_particle View documentation}
   */
  create_particle(params: {
    /** The particle name. */
    readonly name: string
    /** Where to create the particle. */
    readonly position: Position
    readonly movement: Vector
    readonly height: float
    readonly vertical_speed: float
    readonly frame_speed: float
  }): void
  /**
   * Create a new unit group at a given position.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.create_unit_group View documentation}
   */
  create_unit_group(params: {
    /** Initial position of the new unit group. */
    readonly position: Position
    /** Force of the new unit group. Defaults to `"enemy"`. */
    readonly force?: ForceIdentification
  }): LuaUnitGroup
  /**
   * Send a group to build a new base.
   *
   * **Note**: The specified force must be AI-controlled; i.e. `force.ai_controllable` must be `true`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.build_enemy_base View documentation}
   *
   * @param position - Location of the new base.
   * @param unit_count - Number of biters to send for the base-building task.
   * @param force - Force the new base will belong to. Defaults to enemy.
   */
  build_enemy_base(position: Position, unit_count: uint, force?: ForceIdentification): void
  /**
   * Get the tile at a given position.
   *
   * **Note**: The input position params can also be a single tile position.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.get_tile View documentation}
   *
   * @param x
   * @param y
   */
  get_tile(x: int, y: int): LuaTile
  /**
   * Set tiles at specified locations. Can automatically correct the edges around modified tiles.
   *
   * Placing a {@link LuaTilePrototype.mineable_properties mineable} tile on top of a non-mineable one will turn the
   * latter into the {@link LuaTile.hidden_tile LuaTile::hidden_tile} for that tile. Placing a mineable tile on a
   * mineable one or a non-mineable tile on a non-mineable one will not modify the hidden tile. This restriction can
   * however be circumvented by using {@link LuaSurface.set_hidden_tile LuaSurface::set_hidden_tile}.
   *
   * **Note**: It is recommended to call this method once for all the tiles you want to change rather than calling it
   * individually for every tile. As the tile correction is used after every step, calling it one by one could cause
   * the tile correction logic to redo some of the changes. Also, many small API calls are generally more performance
   * intensive than one big one.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.set_tiles View documentation}
   *
   * @param tiles
   * @param correct_tiles - If `false`, the correction logic is not applied to the changed tiles. Defaults to `true`.
   * @param remove_colliding_entities - `true`, `false`, or `abort_on_collision`. Defaults to `true`.
   * @param remove_colliding_decoratives - `true` or `false`. Defaults to `true`.
   * @param raise_event - `true` or `false`. Defaults to `false`.
   */
  set_tiles(
    tiles: Tile[],
    correct_tiles?: boolean,
    remove_colliding_entities?: boolean | string,
    remove_colliding_decoratives?: boolean,
    raise_event?: boolean
  ): void
  /**
   * Spawn pollution at the given position.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.pollute View documentation}
   *
   * @param source - Where to spawn the pollution.
   * @param amount - How much pollution to add.
   */
  pollute(source: Position, amount: double): void
  /**
   * Get an iterator going over every chunk on this surface.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.get_chunks View documentation}
   */
  get_chunks(): LuaChunkIterator
  /**
   * Is a given chunk generated?
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.is_chunk_generated View documentation}
   *
   * @param position - The chunk's position.
   */
  is_chunk_generated(position: ChunkPosition): boolean
  /**
   * Request that the game's map generator generate chunks at the given position for the given radius on this surface.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.request_to_generate_chunks View documentation}
   *
   * @param position - Where to generate the new chunks.
   * @param radius - The chunk radius from `position` to generate new chunks in.
   */
  request_to_generate_chunks(position: Position, radius: uint): void
  /**
   * Blocks and generates all chunks that have been requested using all available threads.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.force_generate_chunk_requests View documentation}
   */
  force_generate_chunk_requests(): void
  /**
   * Set generated status of a chunk. Useful when copying chunks.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.set_chunk_generated_status View documentation}
   *
   * @param position - The chunk's position.
   * @param status - The chunk's new status.
   */
  set_chunk_generated_status(position: ChunkPosition, status: defines.chunk_generated_status): void
  /**
   * Find the logistic network that covers a given position.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.find_logistic_network_by_position View documentation}
   *
   * @param position
   * @param force - Force the logistic network should belong to.
   * @returns The found network or `nil` if no such network was found.
   */
  find_logistic_network_by_position(position: Position, force: ForceIdentification): LuaLogisticNetwork | undefined
  /**
   * Finds all of the logistics networks whose construction area intersects with the given position.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.find_logistic_networks_by_construction_area View documentation}
   *
   * @param position
   * @param force - Force the logistic networks should belong to.
   */
  find_logistic_networks_by_construction_area(position: Position, force: ForceIdentification): LuaLogisticNetwork[]
  /**
   * Place a deconstruction request.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.deconstruct_area View documentation}
   */
  deconstruct_area(params: {
    /** The area to mark for deconstruction. */
    readonly area: BoundingBox
    /** The force whose bots should perform the deconstruction. */
    readonly force: ForceIdentification
    /** The player to set the last_user to if any. */
    readonly player?: PlayerIdentification
    /** If chunks covered by fog-of-war are skipped. */
    readonly skip_fog_of_war?: boolean
    /** The deconstruction item to use if any. */
    readonly item?: LuaItemStack
  }): void
  /**
   * Cancel a deconstruction order.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.cancel_deconstruct_area View documentation}
   */
  cancel_deconstruct_area(params: {
    /** The area to cancel deconstruction orders in. */
    readonly area: BoundingBox
    /** The force whose deconstruction orders to cancel. */
    readonly force: ForceIdentification
    /** The player to set the last_user to if any. */
    readonly player?: PlayerIdentification
    /** If chunks covered by fog-of-war are skipped. */
    readonly skip_fog_of_war?: boolean
    /** The deconstruction item to use if any. */
    readonly item?: LuaItemStack
  }): void
  /**
   * Place an upgrade request.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.upgrade_area View documentation}
   */
  upgrade_area(params: {
    /** The area to mark for upgrade. */
    readonly area: BoundingBox
    /** The force whose bots should perform the upgrade. */
    readonly force: ForceIdentification
    /** The player to set the last_user to if any. */
    readonly player?: PlayerIdentification
    /** If chunks covered by fog-of-war are skipped. */
    readonly skip_fog_of_war?: boolean
    /** The upgrade item to use. */
    readonly item: LuaItemStack
  }): void
  /**
   * Cancel a upgrade order.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.cancel_upgrade_area View documentation}
   */
  cancel_upgrade_area(params: {
    /** The area to cancel upgrade orders in. */
    readonly area: BoundingBox
    /** The force whose upgrade orders to cancel. */
    readonly force: ForceIdentification
    /** The player to set the last_user to if any. */
    readonly player?: PlayerIdentification
    /** If chunks covered by fog-of-war are skipped. */
    readonly skip_fog_of_war?: boolean
    /** The upgrade item to use if any. */
    readonly item?: LuaItemStack
  }): void
  /**
   * The hidden tile name or `nil` if there isn't one for the given position.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.get_hidden_tile View documentation}
   *
   * @param position - The tile position.
   */
  get_hidden_tile(position: TilePosition): string | undefined
  /**
   * Set the hidden tile for the specified position. While during normal gameplay only
   * {@link LuaTilePrototype.mineable_properties non-mineable} tiles can become hidden, this method allows any kind of
   * tile to be set as the hidden one.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.set_hidden_tile View documentation}
   *
   * @param position - The tile position.
   * @param tile - The new hidden tile or `nil` to clear the hidden tile.
   */
  set_hidden_tile(position: TilePosition, tile: string | LuaTilePrototype | undefined): void
  /**
   * Gets all tiles of the given types that are connected horizontally or vertically to the given tile position
   * including the given tile position.
   *
   * **Note**: This won't find tiles in non-generated chunks.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.get_connected_tiles View documentation}
   *
   * @param position - The tile position to start at.
   * @param tiles - The tiles to search for.
   * @returns The resulting set of tiles.
   */
  get_connected_tiles(position: Position, tiles: string[]): PositionTable[]
  /**
   * **Note**: This won't delete the chunk immediately. Chunks are deleted at the end of the current tick.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.delete_chunk View documentation}
   *
   * @param position - The chunk position to delete
   */
  delete_chunk(position: ChunkPosition): void
  /**
   * Regenerate autoplacement of some entities on this surface. This can be used to autoplace newly-added entities.
   *
   * **Note**: All specified entity prototypes must be autoplacable. If nothing is given all entities are generated on
   * all chunks.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.regenerate_entity View documentation}
   *
   * @param entities - Prototype names of entity or entities to autoplace. When `nil` all entities with an autoplace are used.
   * @param chunks - The chunk positions to regenerate the entities on. If not given all chunks are regenerated. Note
   *   chunks with status < entities are ignored.
   */
  regenerate_entity(entities?: string | string[], chunks?: ChunkPosition[]): void
  /**
   * Regenerate autoplacement of some decoratives on this surface. This can be used to autoplace newly-added decoratives.
   *
   * **Note**: All specified decorative prototypes must be autoplacable. If nothing is given all decoratives are
   * generated on all chunks.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.regenerate_decorative View documentation}
   *
   * @param decoratives - Prototype names of decorative or decoratives to autoplace. When `nil` all decoratives with
   *   an autoplace are used.
   * @param chunks - The chunk positions to regenerate the entities on. If not given all chunks are regenerated. Note
   *   chunks with status < entities are ignored.
   */
  regenerate_decorative(decoratives?: string | string[], chunks?: ChunkPosition[]): void
  /**
   * Print text to the chat console of all players on this surface.
   *
   * **Note**: Messages that are identical to a message sent in the last 60 ticks are not printed again.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.print View documentation}
   *
   * @param message
   * @param color
   */
  print(message: LocalisedString, color?: Color): void
  /**
   * Removes all decoratives from the given area. If no area and no position are given, then the entire surface is searched.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.destroy_decoratives View documentation}
   */
  destroy_decoratives(params: {
    readonly area?: BoundingBox
    readonly position?: TilePosition
    readonly name?: string | string[] | LuaDecorativePrototype | LuaDecorativePrototype[]
    readonly limit?: uint
    /** If the filters should be inverted. */
    readonly invert?: boolean
  }): void
  /**
   * Adds the given decoratives to the surface.
   *
   * **Note**: This will merge decoratives of the same type that already exist effectively increasing the "amount" field.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.create_decoratives View documentation}
   */
  create_decoratives(params: {
    /** If collision should be checked against entities/tiles. */
    readonly check_collision?: boolean
    readonly decoratives: Decorative[]
  }): void
  /**
   * Find decoratives of a given name in a given area.
   *
   * If no filters are given, returns all decoratives in the search area. If multiple filters are specified, returns
   * only decoratives matching every given filter. If no area and no position are given, the entire surface is searched.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.find_decoratives_filtered View documentation}
   *
   * @example
   *   ```lua
   *     game.surfaces[1].find_decoratives_filtered{area = {{-10, -10}, {10, 10}}, name = "sand-decal"} -- gets all sand-decals in the rectangle
   *     game.surfaces[1].find_decoratives_filtered{area = {{-10, -10}, {10, 10}}, limit = 5}  -- gets the first 5 decoratives in the rectangle
   *     ```
   */
  find_decoratives_filtered(params: {
    readonly area?: BoundingBox
    readonly position?: TilePosition
    readonly name?: string | string[] | LuaDecorativePrototype | LuaDecorativePrototype[]
    readonly limit?: uint
    /** If the filters should be inverted. */
    readonly invert?: boolean
  }): DecorativeResult[]
  /**
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.get_trains View documentation}
   *
   * @param force - If given only trains matching this force are returned.
   */
  get_trains(force?: ForceIdentification): LuaTrain[]
  /**
   * Clears all pollution on this surface.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.clear_pollution View documentation}
   */
  clear_pollution(): void
  /**
   * Play a sound for every player on this surface.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.play_sound View documentation}
   */
  play_sound(params: {
    /** The sound to play. */
    readonly path: SoundPath
    /** Where the sound should be played. If not given, it's played at the current position of each player. */
    readonly position?: Position
    /** The volume of the sound to play. Must be between 0 and 1 inclusive. */
    readonly volume_modifier?: double
    /** The volume mixer to play the sound through. Defaults to the default mixer for the given sound type. */
    readonly override_sound_type?: SoundType
  }): void
  /**
   * Gets the resource amount of all resources on this surface
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.get_resource_counts View documentation}
   */
  get_resource_counts(): Record<string, uint>
  /**
   * Gets a random generated chunk position or 0,0 if no chunks have been generated on this surface.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.get_random_chunk View documentation}
   */
  get_random_chunk(): ChunkPositionTable
  /**
   * Clones the given area.
   *
   * **Note**: {@link defines.events.on_entity_cloned} is raised for each entity, and then
   * {@link defines.events.on_area_cloned} is raised.
   *
   * **Note**: Entities are cloned in an order such that they can always be created, eg rails before trains.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.clone_area View documentation}
   */
  clone_area(params: {
    readonly source_area: BoundingBox
    readonly destination_area: BoundingBox
    readonly destination_surface?: SurfaceIdentification
    readonly destination_force?: LuaForce | string
    /** If tiles should be cloned */
    readonly clone_tiles?: boolean
    /** If entities should be cloned */
    readonly clone_entities?: boolean
    /** If decoratives should be cloned */
    readonly clone_decoratives?: boolean
    /** If the destination entities should be cleared */
    readonly clear_destination_entities?: boolean
    /** If the destination decoratives should be cleared */
    readonly clear_destination_decoratives?: boolean
    /** If the destination surface should be expanded when destination_area is outside current bounds. Default false. */
    readonly expand_map?: boolean
    /** If true, the building effect smoke will be shown around the new entities. */
    readonly create_build_effect_smoke?: boolean
  }): void
  /**
   * Clones the given area.
   *
   * **Note**: {@link defines.events.on_entity_cloned} is raised for each entity, and then
   * {@link defines.events.on_area_cloned} is raised.
   *
   * **Note**: Entities are cloned in an order such that they can always be created, eg rails before trains.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.clone_brush View documentation}
   */
  clone_brush(params: {
    readonly source_offset: TilePosition
    readonly destination_offset: TilePosition
    readonly source_positions: TilePosition[]
    readonly destination_surface?: SurfaceIdentification
    readonly destination_force?: LuaForce | string
    /** If tiles should be cloned */
    readonly clone_tiles?: boolean
    /** If entities should be cloned */
    readonly clone_entities?: boolean
    /** If decoratives should be cloned */
    readonly clone_decoratives?: boolean
    /** If the destination entities should be cleared */
    readonly clear_destination_entities?: boolean
    /** If the destination decoratives should be cleared */
    readonly clear_destination_decoratives?: boolean
    /** If the destination surface should be expanded when destination_area is outside current bounds. Default false. */
    readonly expand_map?: boolean
    /** If manual-style collision checks should be done. */
    readonly manual_collision_mode?: boolean
    /** If true, the building effect smoke will be shown around the new entities. */
    readonly create_build_effect_smoke?: boolean
  }): void
  /**
   * Clones the given entities.
   *
   * **Note**: {@link defines.events.on_entity_cloned} is raised for each entity.
   *
   * **Note**: Entities are cloned in an order such that they can always be created, eg rails before trains.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.clone_entities View documentation}
   */
  clone_entities(params: {
    readonly entities: LuaEntity[]
    readonly destination_offset: Vector
    readonly destination_surface?: SurfaceIdentification
    readonly destination_force?: ForceIdentification
    readonly snap_to_grid?: boolean
    /** If true, the building effect smoke will be shown around the new entities. */
    readonly create_build_effect_smoke?: boolean
  }): void
  /**
   * Clears this surface deleting all entities and chunks on it.
   *
   * **Note**: This won't clear the surface immediately. It will be cleared at the end of the current tick.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.clear View documentation}
   *
   * @param ignore_characters - Whether characters on this surface that are connected to or associated with players
   *   should be ignored (not destroyed).
   */
  clear(ignore_characters?: boolean): void
  /**
   * Generates a path with the specified constraints (as an array of {@link PathfinderWaypoint PathfinderWaypoints})
   * using the unit pathfinding algorithm. This path can be used to emulate pathing behavior by script for non-unit
   * entities. If you want to command actual units to move, use the
   * {@link LuaEntity.set_command LuaEntity::set_command} functionality instead.
   *
   * The resulting path is ultimately returned asynchronously via
   * {@link OnScriptPathRequestFinishedEvent on_script_path_request_finished}.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.request_path View documentation}
   *
   * @returns A unique handle to identify this call when
   *   {@link OnScriptPathRequestFinishedEvent on_script_path_request_finished} fires.
   */
  request_path(params: {
    /** The dimensions of the object that's supposed to travel the path. */
    readonly bounding_box: BoundingBox
    /** The list of masks the `bounding_box` collides with. */
    readonly collision_mask: CollisionMask | string[]
    /** The position from which to start pathfinding. */
    readonly start: Position
    /** The position to find a path to. */
    readonly goal: Position
    /** The force for which to generate the path, determining which gates can be opened for example. */
    readonly force: ForceIdentification
    /** How close the pathfinder needs to get to its `goal` (in tiles). Defaults to `1`. */
    readonly radius?: double
    /** Flags that affect pathfinder behavior. */
    readonly pathfind_flags?: PathfinderFlags
    /** Whether the path request can open gates. Defaults to `false`. */
    readonly can_open_gates?: boolean
    /**
     * Defines how coarse the pathfinder's grid is. Smaller values mean a coarser grid (negative numbers allowed).
     * Defaults to `0`.
     */
    readonly path_resolution_modifier?: int
    /** Makes the pathfinder ignore collisions with this entity if it is given. */
    readonly entity_to_ignore?: LuaEntity
  }): uint
  /**
   * Gets the script areas that match the given name or if no name is given all areas are returned.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.get_script_areas View documentation}
   *
   * @param name
   */
  get_script_areas(name?: string): ScriptArea[]
  /**
   * Gets the first script area by name or id.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.get_script_area View documentation}
   *
   * @param key - The name or id of the area to get.
   */
  get_script_area(key?: string | uint): ScriptArea
  /**
   * Sets the given script area to the new values.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.edit_script_area View documentation}
   *
   * @param id - The area to edit.
   * @param area
   */
  edit_script_area(id: uint, area: ScriptArea): void
  /**
   * Adds the given script area.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.add_script_area View documentation}
   *
   * @param area
   * @returns The id of the created area.
   */
  add_script_area(area: ScriptArea): uint
  /**
   * Removes the given script area.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.remove_script_area View documentation}
   *
   * @param id
   * @returns If the area was actually removed. False when it didn't exist.
   */
  remove_script_area(id: uint): boolean
  /**
   * Gets the script positions that match the given name or if no name is given all positions are returned.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.get_script_positions View documentation}
   *
   * @param name
   */
  get_script_positions(name?: string): ScriptPosition[]
  /**
   * Gets the first script position by name or id.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.get_script_position View documentation}
   *
   * @param key - The name or id of the position to get.
   */
  get_script_position(key?: string | uint): ScriptPosition
  /**
   * Sets the given script position to the new values.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.edit_script_position View documentation}
   *
   * @param id - The position to edit.
   * @param area
   */
  edit_script_position(id: uint, area: ScriptPosition): void
  /**
   * Adds the given script position.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.add_script_position View documentation}
   *
   * @param area
   * @returns The id of the created position.
   */
  add_script_position(area: ScriptPosition): uint
  /**
   * Removes the given script position.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.remove_script_position View documentation}
   *
   * @param id
   * @returns If the position was actually removed. False when it didn't exist.
   */
  remove_script_position(id: uint): boolean
  /**
   * Gets the map exchange string for the current map generation settings of this surface.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.get_map_exchange_string View documentation}
   */
  get_map_exchange_string(): string
  /**
   * Gets the starting area radius of this surface.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.get_starting_area_radius View documentation}
   */
  get_starting_area_radius(): double
  /**
   * Gets the closest entity in the list to this position.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.get_closest View documentation}
   *
   * @param position
   * @param entities - The Entities to check
   */
  get_closest(position: Position, entities: LuaEntity[]): LuaEntity
  /**
   * Gets train stops matching the given filters.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.get_train_stops View documentation}
   */
  get_train_stops(params?: { readonly name?: string | string[]; readonly force?: ForceIdentification }): LuaEntity[]
  /**
   * Gets the total amount of pollution on the surface by iterating over all of the chunks containing pollution.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.get_total_pollution View documentation}
   */
  get_total_pollution(): double
  /**
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.entity_prototype_collides View documentation}
   *
   * @param prototype - The entity prototype to check
   * @param position - The position to check
   * @param use_map_generation_bounding_box - If the map generation bounding box should be used instead of the
   *   collision bounding box
   * @param direction
   */
  entity_prototype_collides(
    prototype: EntityPrototypeIdentification,
    position: Position,
    use_map_generation_bounding_box: boolean,
    direction?: defines.direction
  ): void
  /**
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.decorative_prototype_collides View documentation}
   *
   * @param prototype - The decorative prototype to check
   * @param position - The position to check
   */
  decorative_prototype_collides(prototype: string, position: Position): void
  /**
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.calculate_tile_properties View documentation}
   *
   * @param property_names - Names of properties (e.g. "elevation") to calculate
   * @param positions - Positions for which to calculate property values
   * @returns Table of property value lists, keyed by property name
   */
  calculate_tile_properties(property_names: string[], positions: Position[]): Record<string, double[]>
  /**
   * Returns all the entities with force on this chunk for the given force.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.get_entities_with_force View documentation}
   *
   * @param position - The chunk's position.
   * @param force - Entities of this force will be returned.
   */
  get_entities_with_force(position: ChunkPosition, force: LuaForce | string): LuaEntity[]
  /**
   * Sets the given area to the checkerboard lab tiles.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.build_checkerboard View documentation}
   *
   * @param area - The tile area.
   */
  build_checkerboard(area: BoundingBox): void
  /**
   * The name of this surface. Names are unique among surfaces.
   *
   * **Note**: the default surface can't be renamed.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.name View documentation}
   */
  name: string
  /**
   * Unique ID associated with this surface.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.index View documentation}
   */
  readonly index: uint
  /**
   * The generation settings for this surface. These can be modified to after surface generation, but note that this
   * will not retroactively update the surface. To manually adjust it,
   * {@link LuaSurface.regenerate_entity LuaSurface::regenerate_entity},
   * {@link LuaSurface.regenerate_decorative LuaSurface::regenerate_decorative} and
   * {@link LuaSurface.delete_chunk LuaSurface::delete_chunk} can be used.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.map_gen_settings View documentation}
   */
  map_gen_settings: MapGenSettings
  /**
   * When set to true, new chunks will be generated with lab tiles, instead of using the surface's map generation settings.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.generate_with_lab_tiles View documentation}
   */
  generate_with_lab_tiles: boolean
  /**
   * When set to true, the sun will always shine.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.always_day View documentation}
   */
  always_day: boolean
  /**
   * Current time of day, as a number in range [0, 1).
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.daytime View documentation}
   */
  daytime: double
  /**
   * Amount of darkness at the current time.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.darkness View documentation}
   */
  readonly darkness: float
  /**
   * Current wind speed.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.wind_speed View documentation}
   */
  wind_speed: double
  /**
   * Current wind direction.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.wind_orientation View documentation}
   */
  wind_orientation: RealOrientation
  /**
   * Change in wind orientation per tick.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.wind_orientation_change View documentation}
   */
  wind_orientation_change: double
  /**
   * Is peaceful mode enabled on this surface?
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.peaceful_mode View documentation}
   */
  peaceful_mode: boolean
  /**
   * True if daytime is currently frozen.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.freeze_daytime View documentation}
   */
  freeze_daytime: boolean
  /**
   * The number of ticks per day for this surface.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.ticks_per_day View documentation}
   */
  ticks_per_day: uint
  /**
   * The daytime when dusk starts.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.dusk View documentation}
   */
  dusk: double
  /**
   * The daytime when dawn starts.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.dawn View documentation}
   */
  dawn: double
  /**
   * The daytime when evening starts.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.evening View documentation}
   */
  evening: double
  /**
   * The daytime when morning starts.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.morning View documentation}
   */
  morning: double
  /**
   * The multiplier of solar power on this surface. Cannot be less than 0.
   *
   * **Note**: Solar equipment is still limited to its maximum power output.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.solar_power_multiplier View documentation}
   */
  solar_power_multiplier: double
  /**
   * The minimal brightness during the night. Default is `0.15`. The value has an effect on the game simalution only,
   * it doesn't have any effect on rendering.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.min_brightness View documentation}
   */
  min_brightness: double
  /**
   * Defines how surface daytime brightness influences each color channel of the current color lookup table (LUT).
   *
   * The LUT is multiplied by `((1 - weight) + brightness * weight)` and result is clamped to range [0, 1].
   *
   * Default is `{0, 0, 0}`, which means no influence.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.brightness_visual_weights View documentation}
   *
   * @example
   *   Makes night on the surface pitch black, assuming {@link LuaSurface.min_brightness LuaSurface::min_brightness} being set to default value `0.15`.
   *
   *   ```lua
   *   game.surfaces[1].brightness_visual_weights = { 1 / 0.85, 1 / 0.85, 1 / 0.85 }
   *   ```
   */
  brightness_visual_weights: ColorModifier
  /**
   * If clouds are shown on this surface.
   *
   * **Note**: If false, clouds are never shown. If true the player must also have clouds enabled in graphics settings
   * for them to be shown.
   *
   * {@link https://lua-api.factorio.com/latest/LuaSurface.html#LuaSurface.show_clouds View documentation}
   */
  show_clouds: boolean
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaSurface"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * One research item.
 *
 * {@link https://lua-api.factorio.com/latest/LuaTechnology.html View documentation}
 *
 * @noSelf
 */
interface LuaTechnology {
  /**
   * Reload this technology from its prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnology.html#LuaTechnology.reload View documentation}
   */
  reload(): void
  /**
   * The force this technology belongs to.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnology.html#LuaTechnology.force View documentation}
   */
  readonly force: LuaForce
  /**
   * Name of this technology.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnology.html#LuaTechnology.name View documentation}
   */
  readonly name: string
  /**
   * Localised name of this technology.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnology.html#LuaTechnology.localised_name View documentation}
   */
  readonly localised_name: LocalisedString
  readonly localised_description: LocalisedString
  /**
   * The prototype of this technology.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnology.html#LuaTechnology.prototype View documentation}
   */
  readonly prototype: LuaTechnologyPrototype
  /**
   * Can this technology be researched?
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnology.html#LuaTechnology.enabled View documentation}
   */
  enabled: boolean
  /**
   * If this technology will be visible in the research GUI even though it is disabled.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnology.html#LuaTechnology.visible_when_disabled View documentation}
   */
  visible_when_disabled: boolean
  /**
   * Is this an upgrade-type research?
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnology.html#LuaTechnology.upgrade View documentation}
   */
  readonly upgrade: boolean
  /**
   * Has this technology been researched? Switching from `false` to `true` will trigger the technology advancement
   * perks; switching from `true` to `false` will reverse them.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnology.html#LuaTechnology.researched View documentation}
   */
  researched: boolean
  /**
   * Prerequisites of this technology. The result maps technology name to the {@link LuaTechnology} object.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnology.html#LuaTechnology.prerequisites View documentation}
   */
  readonly prerequisites: Record<string, LuaTechnology>
  /**
   * Ingredients labs will require to research this technology.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnology.html#LuaTechnology.research_unit_ingredients View documentation}
   *
   * @see {@link LuaTechnology.research_unit_count}
   */
  readonly research_unit_ingredients: Ingredient[]
  /**
   * Effects applied when this technology is researched.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnology.html#LuaTechnology.effects View documentation}
   */
  readonly effects: TechnologyModifier[]
  /**
   * Number of research units required for this technology.
   *
   * **Note**: This is multiplied by the current research cost multiplier, unless
   * {@link LuaTechnologyPrototype.ignore_tech_cost_multiplier LuaTechnologyPrototype::ignore_tech_cost_multiplier} is `true`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnology.html#LuaTechnology.research_unit_count View documentation}
   *
   * @see {@link LuaTechnology.research_unit_ingredients}
   */
  readonly research_unit_count: uint
  /**
   * Amount of energy required to finish a unit of research.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnology.html#LuaTechnology.research_unit_energy View documentation}
   */
  readonly research_unit_energy: double
  /**
   * Order string for this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnology.html#LuaTechnology.order View documentation}
   */
  readonly order: string
  /**
   * The current level of this technology. For level-based technology writing to this is the same as researching the
   * technology to the *previous* level. Writing the level will set
   * {@link LuaTechnology.enabled LuaTechnology::enabled} to `true`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnology.html#LuaTechnology.level View documentation}
   */
  level: uint
  /**
   * The count formula used for this infinite research or nil if this isn't an infinite research.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnology.html#LuaTechnology.research_unit_count_formula View documentation}
   *
   * @see {@link LuaGameScript.evaluate_expression}
   */
  readonly research_unit_count_formula: string | undefined
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaTechnology"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * A Technology prototype.
 *
 * {@link https://lua-api.factorio.com/latest/LuaTechnologyPrototype.html View documentation}
 *
 * @noSelf
 */
interface LuaTechnologyPrototype {
  /**
   * Name of this technology.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnologyPrototype.html#LuaTechnologyPrototype.name View documentation}
   */
  readonly name: string
  /**
   * Localised name of this technology.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnologyPrototype.html#LuaTechnologyPrototype.localised_name View documentation}
   */
  readonly localised_name: LocalisedString
  readonly localised_description: LocalisedString
  /**
   * If this technology prototype is enabled by default (enabled at the beginning of a game).
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnologyPrototype.html#LuaTechnologyPrototype.enabled View documentation}
   */
  readonly enabled: boolean
  /**
   * If this technology prototype is hidden.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnologyPrototype.html#LuaTechnologyPrototype.hidden View documentation}
   */
  readonly hidden: boolean
  /**
   * If this technology will be visible in the research GUI even though it is disabled.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnologyPrototype.html#LuaTechnologyPrototype.visible_when_disabled View documentation}
   */
  readonly visible_when_disabled: boolean
  /**
   * If this technology ignores the technology cost multiplier setting.
   *
   * **Note**: {@link LuaTechnologyPrototype.research_unit_count LuaTechnologyPrototype::research_unit_count} will
   * already take this setting into account.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnologyPrototype.html#LuaTechnologyPrototype.ignore_tech_cost_multiplier View documentation}
   */
  readonly ignore_tech_cost_multiplier: boolean
  /**
   * If the is technology prototype is an upgrade to some other technology.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnologyPrototype.html#LuaTechnologyPrototype.upgrade View documentation}
   */
  readonly upgrade: boolean
  /**
   * Prerequisites of this technology. The result maps technology name to the {@link LuaTechnologyPrototype} object.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnologyPrototype.html#LuaTechnologyPrototype.prerequisites View documentation}
   */
  readonly prerequisites: Record<string, LuaTechnologyPrototype>
  /**
   * Ingredients labs will require to research this technology.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnologyPrototype.html#LuaTechnologyPrototype.research_unit_ingredients View documentation}
   *
   * @see {@link LuaTechnologyPrototype.research_unit_count}
   */
  readonly research_unit_ingredients: Ingredient[]
  /**
   * Effects applied when this technology is researched.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnologyPrototype.html#LuaTechnologyPrototype.effects View documentation}
   */
  readonly effects: TechnologyModifier[]
  /**
   * Number of research units required for this technology.
   *
   * **Note**: This is multiplied by the current research cost multiplier, unless
   * {@link LuaTechnologyPrototype.ignore_tech_cost_multiplier LuaTechnologyPrototype::ignore_tech_cost_multiplier} is `true`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnologyPrototype.html#LuaTechnologyPrototype.research_unit_count View documentation}
   *
   * @see {@link LuaTechnologyPrototype.research_unit_ingredients}
   */
  readonly research_unit_count: uint
  /**
   * Amount of energy required to finish a unit of research.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnologyPrototype.html#LuaTechnologyPrototype.research_unit_energy View documentation}
   */
  readonly research_unit_energy: double
  /**
   * Order string for this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnologyPrototype.html#LuaTechnologyPrototype.order View documentation}
   */
  readonly order: string
  /**
   * The level of this research.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnologyPrototype.html#LuaTechnologyPrototype.level View documentation}
   */
  readonly level: uint
  /**
   * The max level of this research.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnologyPrototype.html#LuaTechnologyPrototype.max_level View documentation}
   */
  readonly max_level: uint
  /**
   * The count formula used for this infinite research or nil if this isn't an infinite research.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTechnologyPrototype.html#LuaTechnologyPrototype.research_unit_count_formula View documentation}
   *
   * @see {@link LuaGameScript.evaluate_expression}
   */
  readonly research_unit_count_formula: string | undefined
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaTechnologyPrototype"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * A single "square" on the map.
 *
 * {@link https://lua-api.factorio.com/latest/LuaTile.html View documentation}
 *
 * @noSelf
 */
interface LuaTile {
  /**
   * What type of things can collide with this tile?
   *
   * {@link https://lua-api.factorio.com/latest/LuaTile.html#LuaTile.collides_with View documentation}
   *
   * @example
   *   Check if the character would collide with a tile
   *
   *   ```lua
   *   game.player.print(tostring(game.player.surface.get_tile(1, 1).collides_with("player-layer")))
   *   ```
   *
   * @param layer
   */
  collides_with(layer: CollisionMaskLayer): boolean
  /**
   * Is this tile marked for deconstruction?
   *
   * {@link https://lua-api.factorio.com/latest/LuaTile.html#LuaTile.to_be_deconstructed View documentation}
   */
  to_be_deconstructed(): boolean
  /**
   * Orders deconstruction of this tile by the given force.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTile.html#LuaTile.order_deconstruction View documentation}
   *
   * @param force - The force whose robots are supposed to do the deconstruction.
   * @param player - The player to set the last_user to if any.
   * @returns The deconstructible tile proxy created if any or `nil`.
   */
  order_deconstruction(force: ForceIdentification, player?: PlayerIdentification): LuaEntity | undefined
  /**
   * Cancels deconstruction if it is scheduled, does nothing otherwise.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTile.html#LuaTile.cancel_deconstruction View documentation}
   *
   * @param force - The force who did the deconstruction order.
   * @param player - The player to set the last_user to if any.
   */
  cancel_deconstruction(force: ForceIdentification, player?: PlayerIdentification): void
  /**
   * Prototype name of this tile. E.g. `"sand-3"` or `"grass-2"`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTile.html#LuaTile.name View documentation}
   */
  readonly name: string
  readonly prototype: LuaTilePrototype
  /**
   * The position this tile references.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTile.html#LuaTile.position View documentation}
   */
  readonly position: PositionTable
  /**
   * The name of the {@link LuaTilePrototype} hidden under this tile or `nil` if there is no hidden tile. During normal
   * gameplay, only {@link LuaTilePrototype.mineable_properties non-mineable} tiles can become hidden. This can however
   * be circumvented with {@link LuaSurface.set_hidden_tile LuaSurface::set_hidden_tile}.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTile.html#LuaTile.hidden_tile View documentation}
   */
  readonly hidden_tile: string | undefined
  /**
   * The surface this tile is on.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTile.html#LuaTile.surface View documentation}
   */
  readonly surface: LuaSurface
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaTile"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Prototype of a tile.
 *
 * {@link https://lua-api.factorio.com/latest/LuaTilePrototype.html View documentation}
 *
 * @noSelf
 */
interface LuaTilePrototype {
  /**
   * Name of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTilePrototype.html#LuaTilePrototype.name View documentation}
   */
  readonly name: string
  /**
   * Order string of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTilePrototype.html#LuaTilePrototype.order View documentation}
   */
  readonly order: string
  readonly localised_name: LocalisedString
  readonly localised_description: LocalisedString
  /**
   * The collision mask this tile uses
   *
   * {@link https://lua-api.factorio.com/latest/LuaTilePrototype.html#LuaTilePrototype.collision_mask View documentation}
   */
  readonly collision_mask: CollisionMask
  readonly collision_mask_with_flags: CollisionMaskWithFlags
  readonly layer: uint
  /**
   * Autoplace specification for this prototype. `nil` if none.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTilePrototype.html#LuaTilePrototype.autoplace_specification View documentation}
   */
  readonly autoplace_specification: AutoplaceSpecification | undefined
  readonly walking_speed_modifier: float
  readonly vehicle_friction_modifier: float
  readonly map_color: ColorTable
  /**
   * The probability that decorative entities will be removed from on top of this tile when this tile is generated.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTilePrototype.html#LuaTilePrototype.decorative_removal_probability View documentation}
   */
  readonly decorative_removal_probability: float
  readonly automatic_neighbors: boolean
  readonly allowed_neighbors: Record<string, LuaTilePrototype>
  /**
   * If this tile needs correction logic applied when it's generated in the world..
   *
   * {@link https://lua-api.factorio.com/latest/LuaTilePrototype.html#LuaTilePrototype.needs_correction View documentation}
   */
  readonly needs_correction: boolean
  readonly mineable_properties: {
    /** Is this tile mineable at all? */
    readonly minable: boolean
    /** Energy required to mine a tile. */
    readonly miningtime: double
    /**
     * Prototype name of the particle produced when mining this tile. Will only be present if this tile produces any
     * particle during mining.
     */
    readonly miningparticle?: string
    /** Products obtained by mining this tile. */
    readonly products: Product[]
  }
  /**
   * The next direction of this tile or `nil` - used when a tile has multiple directions (such as hazard concrete)
   *
   * {@link https://lua-api.factorio.com/latest/LuaTilePrototype.html#LuaTilePrototype.next_direction View documentation}
   */
  readonly next_direction: LuaTilePrototype | undefined
  /**
   * Items that when placed will produce this tile. It is a dictionary indexed by the item prototype name.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTilePrototype.html#LuaTilePrototype.items_to_place_this View documentation}
   */
  readonly items_to_place_this: SimpleItemStack[]
  /**
   * False if this tile is not allowed in blueprints regardless of the ability to build it.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTilePrototype.html#LuaTilePrototype.can_be_part_of_blueprint View documentation}
   */
  readonly can_be_part_of_blueprint: boolean
  /**
   * Amount of pollution emissions per second this tile will absorb.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTilePrototype.html#LuaTilePrototype.emissions_per_second View documentation}
   */
  readonly emissions_per_second: double
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaTilePrototype"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * A train. Trains are a sequence of connected rolling stocks -- locomotives and wagons.
 *
 * {@link https://lua-api.factorio.com/latest/LuaTrain.html View documentation}
 *
 * @noSelf
 */
interface LuaTrain {
  /**
   * Get the amount of a particular item stored in the train.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.get_item_count View documentation}
   *
   * @param item - Item name to count. If not given, counts all items.
   */
  get_item_count(item?: string): uint
  /**
   * Get a mapping of the train's inventory.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.get_contents View documentation}
   *
   * @returns The counts, indexed by item names.
   */
  get_contents(): Record<string, uint>
  /**
   * Remove some items from the train.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.remove_item View documentation}
   *
   * @param stack - The amount and type of items to remove
   * @returns Number of items actually removed.
   */
  remove_item(stack: ItemStackIdentification): uint
  /**
   * Insert a stack into the train.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.insert View documentation}
   *
   * @param stack
   */
  insert(stack: ItemStackIdentification): void
  /**
   * Clear all items in this train.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.clear_items_inside View documentation}
   */
  clear_items_inside(): void
  /**
   * Checks if the path is invalid and tries to re-path if it isn't.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.recalculate_path View documentation}
   *
   * @param force - Forces the train to re-path regardless of the current path being valid or not.
   * @returns If the train has a path after the repath attempt.
   */
  recalculate_path(force?: boolean): boolean
  /**
   * Get the amount of a particular fluid stored in the train.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.get_fluid_count View documentation}
   *
   * @param fluid - Fluid name to count. If not given, counts all fluids.
   */
  get_fluid_count(fluid?: string): double
  /**
   * Gets a mapping of the train's fluid inventory.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.get_fluid_contents View documentation}
   *
   * @returns The counts, indexed by fluid names.
   */
  get_fluid_contents(): Record<string, double>
  /**
   * Remove some fluid from the train.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.remove_fluid View documentation}
   *
   * @param fluid
   * @returns The amount of fluid actually removed.
   */
  remove_fluid(fluid: Fluid): double
  /**
   * Inserts the given fluid into the first available location in this train.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.insert_fluid View documentation}
   *
   * @param fluid
   * @returns The amount inserted.
   */
  insert_fluid(fluid: Fluid): double
  /**
   * Clears all fluids in this train.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.clear_fluids_inside View documentation}
   */
  clear_fluids_inside(): void
  /**
   * Go to the station specified by the index in the train's schedule.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.go_to_station View documentation}
   *
   * @param index
   */
  go_to_station(index: uint): void
  /**
   * Gets all rails under the train.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.get_rails View documentation}
   */
  get_rails(): LuaEntity[]
  /**
   * When `true`, the train is explicitly controlled by the player or script. When `false`, the train moves
   * autonomously according to its schedule.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.manual_mode View documentation}
   */
  manual_mode: boolean
  /**
   * Current speed.
   *
   * **Note**: Changing the speed of the train is potentially an unsafe operation because train uses the speed for its
   * internal calculations of break distances, etc.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.speed View documentation}
   */
  speed: double
  /**
   * Current max speed when moving forward, depends on locomotive prototype and fuel.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.max_forward_speed View documentation}
   */
  readonly max_forward_speed: double
  /**
   * Current max speed when moving backwards, depends on locomotive prototype and fuel.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.max_backward_speed View documentation}
   */
  readonly max_backward_speed: double
  /**
   * The weight of this train.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.weight View documentation}
   */
  readonly weight: double
  /**
   * Rolling stocks the train is composed of.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.carriages View documentation}
   */
  readonly carriages: LuaEntity[]
  /**
   * Arrays of locomotives. The result is two arrays, indexed by `"front_movers"` and `"back_movers"` containing the
   * locomotives. E.g. `{front_movers={loco1, loco2}, back_movers={loco3}}`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.locomotives View documentation}
   */
  readonly locomotives: Record<string, LuaEntity[]>
  /**
   * The cargo carriages the train contains.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.cargo_wagons View documentation}
   */
  readonly cargo_wagons: LuaEntity[]
  /**
   * The fluid carriages the train contains.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.fluid_wagons View documentation}
   */
  readonly fluid_wagons: LuaEntity[]
  /**
   * The trains current schedule or `nil` if empty. Set to `nil` to clear.
   *
   * **Note**: The schedule can't be changed by modifying the returned table. Instead, changes must be made by
   * assigning a new table to this attribute.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.schedule View documentation}
   */
  schedule: TrainSchedule | undefined
  /**
   * This train's current state.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.state View documentation}
   */
  readonly state: defines.train_state
  /**
   * The rail at the front end of the train, possibly `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.front_rail View documentation}
   */
  readonly front_rail: LuaEntity | undefined
  /**
   * The rail at the back end of the train, possibly `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.back_rail View documentation}
   */
  readonly back_rail: LuaEntity | undefined
  readonly rail_direction_from_front_rail: defines.rail_direction
  readonly rail_direction_from_back_rail: defines.rail_direction
  /**
   * The front stock of this train or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.front_stock View documentation}
   */
  readonly front_stock: LuaEntity | undefined
  /**
   * The back stock of this train or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.back_stock View documentation}
   */
  readonly back_stock: LuaEntity | undefined
  /**
   * The train stop this train is stopped at or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.station View documentation}
   */
  readonly station: LuaEntity | undefined
  /**
   * If this train has a path.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.has_path View documentation}
   */
  readonly has_path: boolean
  /**
   * The destination rail this train is currently pathing to or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.path_end_rail View documentation}
   */
  readonly path_end_rail: LuaEntity | undefined
  /**
   * The destination train stop this train is currently pathing to or `nil`.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.path_end_stop View documentation}
   */
  readonly path_end_stop: LuaEntity | undefined
  /**
   * The unique train ID.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.id View documentation}
   */
  readonly id: uint
  /**
   * The player passengers on the train
   *
   * **Note**: This does *not* index using player index. See {@link LuaPlayer.index LuaPlayer::index} on each player
   * instance for the player index.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.passengers View documentation}
   */
  readonly passengers: LuaPlayer[]
  /**
   * The riding state of this train.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.riding_state View documentation}
   */
  readonly riding_state: RidingState
  /**
   * The players killed by this train.
   *
   * The keys are the player indices, the values are how often this train killed that player.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.killed_players View documentation}
   */
  readonly killed_players: Record<uint, uint>
  /**
   * The total number of kills by this train.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.kill_count View documentation}
   */
  readonly kill_count: uint
  /**
   * The path this train is using or `nil` if none.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.path View documentation}
   */
  readonly path: LuaRailPath | undefined
  /**
   * The signal this train is arriving or waiting at or `nil` if none.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrain.html#LuaTrain.signal View documentation}
   */
  readonly signal: LuaEntity | undefined
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaTrain"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Control behavior for train stops.
 *
 * {@link https://lua-api.factorio.com/latest/LuaTrainStopControlBehavior.html View documentation}
 *
 * @noSelf
 */
interface LuaTrainStopControlBehavior extends LuaGenericOnOffControlBehavior {
  /**
   * `true` if the train stop should send the circuit network contents to the train to use.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrainStopControlBehavior.html#LuaTrainStopControlBehavior.send_to_train View documentation}
   */
  send_to_train: boolean
  /**
   * `true` if the train stop should send the train contents to the circuit network.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrainStopControlBehavior.html#LuaTrainStopControlBehavior.read_from_train View documentation}
   */
  read_from_train: boolean
  /**
   * `true` if the train stop should send the stopped train id to the circuit network.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrainStopControlBehavior.html#LuaTrainStopControlBehavior.read_stopped_train View documentation}
   */
  read_stopped_train: boolean
  /**
   * `true` if the trains_limit_signal is used to set a limit of trains incoming for train stop.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrainStopControlBehavior.html#LuaTrainStopControlBehavior.set_trains_limit View documentation}
   */
  set_trains_limit: boolean
  /**
   * `true` if the train stop should send amount of incoming trains to the circuit network.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrainStopControlBehavior.html#LuaTrainStopControlBehavior.read_trains_count View documentation}
   */
  read_trains_count: boolean
  /**
   * `true` if the train stop is enabled/disabled through the circuit network.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrainStopControlBehavior.html#LuaTrainStopControlBehavior.enable_disable View documentation}
   */
  enable_disable: boolean
  /**
   * The signal that will be sent when using the send-train-id option.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrainStopControlBehavior.html#LuaTrainStopControlBehavior.stopped_train_signal View documentation}
   */
  stopped_train_signal: SignalID
  /**
   * The signal that will be sent when using the read-trains-count option.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrainStopControlBehavior.html#LuaTrainStopControlBehavior.trains_count_signal View documentation}
   */
  trains_count_signal: SignalID
  /**
   * The signal to be used by set-trains-limit to limit amount of incoming trains
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrainStopControlBehavior.html#LuaTrainStopControlBehavior.trains_limit_signal View documentation}
   */
  trains_limit_signal: SignalID
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaTrainStopControlBehavior"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Control behavior for transport belts.
 *
 * {@link https://lua-api.factorio.com/latest/LuaTransportBeltControlBehavior.html View documentation}
 *
 * @noSelf
 */
interface LuaTransportBeltControlBehavior extends LuaGenericOnOffControlBehavior {
  /**
   * If the belt will be enabled/disabled based off the circuit network.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTransportBeltControlBehavior.html#LuaTransportBeltControlBehavior.enable_disable View documentation}
   */
  enable_disable: boolean
  /**
   * If the belt will read the contents and send them to the circuit network.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTransportBeltControlBehavior.html#LuaTransportBeltControlBehavior.read_contents View documentation}
   */
  read_contents: boolean
  /**
   * The read mode for the belt.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTransportBeltControlBehavior.html#LuaTransportBeltControlBehavior.read_contents_mode View documentation}
   */
  read_contents_mode: defines.control_behavior.transport_belt.content_read_mode
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaTransportBeltControlBehavior"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * One line on a transport belt.
 *
 * {@link https://lua-api.factorio.com/latest/LuaTransportLine.html View documentation}
 *
 * @noSelf
 */
interface LuaTransportLine extends ReadonlyArray<LuaItemStack> {
  /**
   * Remove all items from this transport line.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTransportLine.html#LuaTransportLine.clear View documentation}
   */
  clear(): void
  /**
   * Count some or all items on this line.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTransportLine.html#LuaTransportLine.get_item_count View documentation}
   *
   * @param item - Prototype name of the item to count. If not specified, count all items.
   * @see {@link LuaInventory.get_item_count}
   */
  get_item_count(item?: string): uint
  /**
   * Remove some items from this line.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTransportLine.html#LuaTransportLine.remove_item View documentation}
   *
   * @param items - Items to remove.
   * @returns Number of items actually removed.
   */
  remove_item(items: ItemStackIdentification): uint
  /**
   * Can an item be inserted at a given position?
   *
   * {@link https://lua-api.factorio.com/latest/LuaTransportLine.html#LuaTransportLine.can_insert_at View documentation}
   *
   * @param position - Where to insert an item.
   */
  can_insert_at(position: float): boolean
  /**
   * Can an item be inserted at the back of this line?
   *
   * {@link https://lua-api.factorio.com/latest/LuaTransportLine.html#LuaTransportLine.can_insert_at_back View documentation}
   */
  can_insert_at_back(): boolean
  /**
   * Insert items at a given position.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTransportLine.html#LuaTransportLine.insert_at View documentation}
   *
   * @param position - Where on the line to insert the items.
   * @param items - Items to insert.
   * @returns Were the items inserted successfully?
   */
  insert_at(position: float, items: ItemStackIdentification): boolean
  /**
   * Insert items at the back of this line.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTransportLine.html#LuaTransportLine.insert_at_back View documentation}
   *
   * @param items
   * @returns Were the items inserted successfully?
   */
  insert_at_back(items: ItemStackIdentification): boolean
  /**
   * Get counts of all items on this line.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTransportLine.html#LuaTransportLine.get_contents View documentation}
   *
   * @returns The counts, indexed by item names.
   * @see {@link LuaInventory.get_contents}
   */
  get_contents(): Record<string, uint>
  /**
   * Returns whether the associated internal transport line of this line is the same as the others associated internal
   * transport line.
   *
   * **Note**: This can return true even when the {@link LuaTransportLine.owner LuaTransportLine::owner}s are different
   * (so `this == other` is false), because the internal transport lines can span multiple tiles.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTransportLine.html#LuaTransportLine.line_equals View documentation}
   *
   * @param other
   */
  line_equals(other: LuaTransportLine): boolean
  /**
   * Get the number of items on this transport line.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTransportLine.html#LuaTransportLine.operator%20# View documentation}
   */
  readonly length: uint
  /**
   * The entity this transport line belongs to.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTransportLine.html#LuaTransportLine.owner View documentation}
   */
  readonly owner: LuaEntity
  /**
   * The transport lines that this transport line outputs items to or an empty table if none.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTransportLine.html#LuaTransportLine.output_lines View documentation}
   */
  readonly output_lines: LuaTransportLine[]
  /**
   * The transport lines that this transport line is fed by or an empty table if none.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTransportLine.html#LuaTransportLine.input_lines View documentation}
   */
  readonly input_lines: LuaTransportLine[]
  /**
   * The indexing operator.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTransportLine.html#LuaTransportLine.operator%20[] View documentation}
   */
  readonly [index: number]: LuaItemStack
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaTransportLine"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Prototype of a trivial smoke.
 *
 * {@link https://lua-api.factorio.com/latest/LuaTrivialSmokePrototype.html View documentation}
 *
 * @noSelf
 */
interface LuaTrivialSmokePrototype {
  /**
   * Name of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrivialSmokePrototype.html#LuaTrivialSmokePrototype.name View documentation}
   */
  readonly name: string
  /**
   * Order string of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaTrivialSmokePrototype.html#LuaTrivialSmokePrototype.order View documentation}
   */
  readonly order: string
  readonly localised_name: LocalisedString
  readonly localised_description: LocalisedString
  readonly color: ColorTable
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
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaTrivialSmokePrototype"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * A collection of units moving and attacking together. The engine creates autonomous unit groups to attack polluted
 * areas. The script can create and control such groups as well. Groups can accept commands in the same manner as regular units.
 *
 * {@link https://lua-api.factorio.com/latest/LuaUnitGroup.html View documentation}
 *
 * @noSelf
 */
interface LuaUnitGroup {
  /**
   * Make a unit a member of this group. Has the same effect as giving a `group_command` with this group to the unit.
   *
   * **Note**: The member must have the same force as the unit group.
   *
   * {@link https://lua-api.factorio.com/latest/LuaUnitGroup.html#LuaUnitGroup.add_member View documentation}
   *
   * @param unit
   */
  add_member(unit: LuaEntity): void
  /**
   * Give this group a command.
   *
   * {@link https://lua-api.factorio.com/latest/LuaUnitGroup.html#LuaUnitGroup.set_command View documentation}
   *
   * @param command
   * @see {@link LuaEntity.set_command}
   */
  set_command(command: Command): void
  /**
   * Give this group a distraction command.
   *
   * {@link https://lua-api.factorio.com/latest/LuaUnitGroup.html#LuaUnitGroup.set_distraction_command View documentation}
   *
   * @param command
   * @see {@link LuaEntity.set_command}
   */
  set_distraction_command(command: Command): void
  /**
   * Make this group autonomous. Autonomous groups will automatically attack polluted areas. Autonomous groups aren't
   * considered to be script driven
   *
   * {@link https://lua-api.factorio.com/latest/LuaUnitGroup.html#LuaUnitGroup.set_autonomous View documentation}
   *
   * @see {@link LuaUnitGroup.is_script_driven}
   */
  set_autonomous(): void
  /**
   * Make the group start moving even if some of its members haven't yet arrived.
   *
   * {@link https://lua-api.factorio.com/latest/LuaUnitGroup.html#LuaUnitGroup.start_moving View documentation}
   */
  start_moving(): void
  /**
   * Dissolve this group. Its members won't be destroyed, they will be merely unlinked from this group.
   *
   * {@link https://lua-api.factorio.com/latest/LuaUnitGroup.html#LuaUnitGroup.destroy View documentation}
   */
  destroy(): void
  /**
   * Members of this group.
   *
   * {@link https://lua-api.factorio.com/latest/LuaUnitGroup.html#LuaUnitGroup.members View documentation}
   */
  readonly members: LuaEntity[]
  /**
   * Group position. This can have different meanings depending on the group state. When the group is gathering, the
   * position is the place of gathering. When the group is moving, the position is the expected position of its
   * members along the path. When the group is attacking, it is the average position of its members.
   *
   * {@link https://lua-api.factorio.com/latest/LuaUnitGroup.html#LuaUnitGroup.position View documentation}
   */
  readonly position: PositionTable
  /**
   * Whether this group is gathering, moving or attacking.
   *
   * {@link https://lua-api.factorio.com/latest/LuaUnitGroup.html#LuaUnitGroup.state View documentation}
   */
  readonly state: defines.group_state
  /**
   * The force of this unit group.
   *
   * {@link https://lua-api.factorio.com/latest/LuaUnitGroup.html#LuaUnitGroup.force View documentation}
   */
  readonly force: LuaForce
  /**
   * The surface of this unit group.
   *
   * {@link https://lua-api.factorio.com/latest/LuaUnitGroup.html#LuaUnitGroup.surface View documentation}
   */
  readonly surface: LuaSurface
  /**
   * The group number for this unit group.
   *
   * {@link https://lua-api.factorio.com/latest/LuaUnitGroup.html#LuaUnitGroup.group_number View documentation}
   */
  readonly group_number: uint
  /**
   * Whether this unit group is controlled by a script or by the game engine.
   *
   * {@link https://lua-api.factorio.com/latest/LuaUnitGroup.html#LuaUnitGroup.is_script_driven View documentation}
   *
   * @see {@link LuaUnitGroup.set_autonomous}
   */
  readonly is_script_driven: boolean
  /**
   * The command given to this group or `nil` is the group has no command.
   *
   * {@link https://lua-api.factorio.com/latest/LuaUnitGroup.html#LuaUnitGroup.command View documentation}
   */
  readonly command: Command | undefined
  /**
   * The distraction command given to this group or `nil` is the group currently isn't distracted.
   *
   * {@link https://lua-api.factorio.com/latest/LuaUnitGroup.html#LuaUnitGroup.distraction_command View documentation}
   */
  readonly distraction_command: Command | undefined
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaUnitGroup"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Prototype of a virtual signal.
 *
 * {@link https://lua-api.factorio.com/latest/LuaVirtualSignalPrototype.html View documentation}
 *
 * @noSelf
 */
interface LuaVirtualSignalPrototype {
  /**
   * Name of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaVirtualSignalPrototype.html#LuaVirtualSignalPrototype.name View documentation}
   */
  readonly name: string
  /**
   * Order string of this prototype.
   *
   * {@link https://lua-api.factorio.com/latest/LuaVirtualSignalPrototype.html#LuaVirtualSignalPrototype.order View documentation}
   */
  readonly order: string
  readonly localised_name: LocalisedString
  readonly localised_description: LocalisedString
  /**
   * If this is a special signal
   *
   * {@link https://lua-api.factorio.com/latest/LuaVirtualSignalPrototype.html#LuaVirtualSignalPrototype.special View documentation}
   */
  readonly special: boolean
  readonly subgroup: LuaGroup
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaVirtualSignalPrototype"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Prototype of a void energy source.
 *
 * {@link https://lua-api.factorio.com/latest/LuaVoidEnergySourcePrototype.html View documentation}
 *
 * @noSelf
 */
interface LuaVoidEnergySourcePrototype {
  readonly emissions: double
  readonly render_no_network_icon: boolean
  readonly render_no_power_icon: boolean
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaVoidEnergySourcePrototype"
  /** All methods and properties that this object supports. */
  help(): string
}

/**
 * Control behavior for walls.
 *
 * {@link https://lua-api.factorio.com/latest/LuaWallControlBehavior.html View documentation}
 *
 * @noSelf
 */
interface LuaWallControlBehavior extends LuaControlBehavior {
  /**
   * The circuit condition.
   *
   * {@link https://lua-api.factorio.com/latest/LuaWallControlBehavior.html#LuaWallControlBehavior.circuit_condition View documentation}
   */
  circuit_condition: CircuitConditionDefinition
  open_gate: boolean
  read_sensor: boolean
  output_signal: SignalID
  /**
   * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that
   * the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the
   * object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any
   * change to the game state might have occurred between the creation of the Lua object and its access.
   */
  readonly valid: boolean
  /**
   * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be
   * suffixed with a dotted path to a member of the struct.
   */
  readonly object_name: "LuaWallControlBehavior"
  /** All methods and properties that this object supports. */
  help(): string
}
