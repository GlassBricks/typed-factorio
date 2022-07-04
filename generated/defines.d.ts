// This is an auto-generated file. Do not edit directly!

/** @noSelfInFile */

declare namespace defines {
  enum alert_type {
    entity_destroyed,
    entity_under_attack,
    not_enough_construction_robots,
    no_material_for_construction,
    not_enough_repair_packs,
    turret_fire,
    custom,
    no_storage,
    train_out_of_fuel,
  }
  /**
   * AI command exit status. See {@link LuaEntity#set_command LuaEntity::set_command}
   *
   * {@link https://lua-api.factorio.com/latest/defines.html#defines.behavior_result View documentation}
   */
  enum behavior_result {
    in_progress,
    fail,
    success,
    deleted,
  }
  enum build_check_type {
    script,
    manual,
    manual_ghost,
    script_ghost,
    blueprint_ghost,
    ghost_revive,
  }
  /**
   * State of a chain signal.
   *
   * {@link https://lua-api.factorio.com/latest/defines.html#defines.chain_signal_state View documentation}
   */
  enum chain_signal_state {
    none,
    all_open,
    partially_open,
    none_open,
  }
  enum chunk_generated_status {
    nothing,
    custom_tiles,
    basic_tiles,
    corrected_tiles,
    tiles,
    entities,
  }
  enum circuit_condition_index {
    inserter_circuit,
    inserter_logistic,
    lamp,
    arithmetic_combinator,
    decider_combinator,
    constant_combinator,
    offshore_pump,
    pump,
  }
  enum circuit_connector_id {
    accumulator,
    constant_combinator,
    container,
    programmable_speaker,
    rail_signal,
    rail_chain_signal,
    roboport,
    storage_tank,
    wall,
    electric_pole,
    inserter,
    lamp,
    combinator_input,
    combinator_output,
    offshore_pump,
    pump,
  }
  /**
   * Command given to units describing what they should do.
   *
   * {@link https://lua-api.factorio.com/latest/defines.html#defines.command View documentation}
   */
  enum command {
    /**
     * Attack another entity.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.command.attack View documentation}
     */
    attack = 0,
    /**
     * Go to a specific position.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.command.go_to_location View documentation}
     */
    go_to_location = 1,
    /**
     * Chain commands together, see {@link defines.compound_command}.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.command.compound View documentation}
     */
    compound = 2,
    /**
     * Do what your group wants you to do.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.command.group View documentation}
     */
    group = 3,
    /**
     * Go to a place and attack what you see.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.command.attack_area View documentation}
     */
    attack_area = 4,
    /**
     * Chill.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.command.wander View documentation}
     */
    wander = 5,
    /**
     * Flee from another entity.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.command.flee View documentation}
     */
    flee = 6,
    /**
     * Stop moving and stay where you are.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.command.stop View documentation}
     */
    stop = 7,
    /**
     * Go to a position and build a base there.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.command.build_base View documentation}
     */
    build_base = 8,
  }
  /**
   * How commands are joined together in a compound command (see {@link defines.command.compound}).
   *
   * {@link https://lua-api.factorio.com/latest/defines.html#defines.compound_command View documentation}
   */
  enum compound_command {
    /**
     * Fail on first failure. Only succeeds if all commands (executed one after another) succeed.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.compound_command.logical_and View documentation}
     */
    logical_and,
    /**
     * Succeed on first success. Only fails if all commands (executed one after another) fail.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.compound_command.logical_or View documentation}
     */
    logical_or,
    /**
     * Execute all commands in sequence and fail or succeed depending on the return status of the last command.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.compound_command.return_last View documentation}
     */
    return_last,
  }
  namespace control_behavior {
    namespace inserter {
      enum circuit_mode_of_operation {
        none,
        enable_disable,
        set_filters,
        read_hand_contents,
        set_stack_size,
      }
      enum hand_read_mode {
        hold,
        pulse,
      }
    }
    namespace logistic_container {
      enum circuit_mode_of_operation {
        send_contents,
        set_requests,
      }
    }
    namespace lamp {
      enum circuit_mode_of_operation {
        use_colors,
      }
    }
    namespace mining_drill {
      enum resource_read_mode {
        this_miner,
        entire_patch,
      }
    }
    namespace transport_belt {
      enum content_read_mode {
        pulse,
        hold,
      }
    }
    enum type {
      /**
       * {@link LuaContainerControlBehavior}
       *
       * {@link https://lua-api.factorio.com/latest/defines.html#defines.control_behavior.type.container View documentation}
       */
      container,
      /**
       * {@link LuaGenericOnOffControlBehavior}
       *
       * {@link https://lua-api.factorio.com/latest/defines.html#defines.control_behavior.type.generic_on_off View documentation}
       */
      generic_on_off,
      /**
       * {@link LuaInserterControlBehavior}
       *
       * {@link https://lua-api.factorio.com/latest/defines.html#defines.control_behavior.type.inserter View documentation}
       */
      inserter,
      /**
       * {@link LuaLampControlBehavior}
       *
       * {@link https://lua-api.factorio.com/latest/defines.html#defines.control_behavior.type.lamp View documentation}
       */
      lamp,
      /**
       * {@link LuaLogisticContainerControlBehavior}
       *
       * {@link https://lua-api.factorio.com/latest/defines.html#defines.control_behavior.type.logistic_container View documentation}
       */
      logistic_container,
      /**
       * {@link LuaRoboportControlBehavior}
       *
       * {@link https://lua-api.factorio.com/latest/defines.html#defines.control_behavior.type.roboport View documentation}
       */
      roboport,
      /**
       * {@link LuaStorageTankControlBehavior}
       *
       * {@link https://lua-api.factorio.com/latest/defines.html#defines.control_behavior.type.storage_tank View documentation}
       */
      storage_tank,
      /**
       * {@link LuaTrainStopControlBehavior}
       *
       * {@link https://lua-api.factorio.com/latest/defines.html#defines.control_behavior.type.train_stop View documentation}
       */
      train_stop,
      /**
       * {@link LuaDeciderCombinatorControlBehavior}
       *
       * {@link https://lua-api.factorio.com/latest/defines.html#defines.control_behavior.type.decider_combinator View documentation}
       */
      decider_combinator,
      /**
       * {@link LuaArithmeticCombinatorControlBehavior}
       *
       * {@link https://lua-api.factorio.com/latest/defines.html#defines.control_behavior.type.arithmetic_combinator View documentation}
       */
      arithmetic_combinator,
      /**
       * {@link LuaConstantCombinatorControlBehavior}
       *
       * {@link https://lua-api.factorio.com/latest/defines.html#defines.control_behavior.type.constant_combinator View documentation}
       */
      constant_combinator,
      /**
       * {@link LuaTransportBeltControlBehavior}
       *
       * {@link https://lua-api.factorio.com/latest/defines.html#defines.control_behavior.type.transport_belt View documentation}
       */
      transport_belt,
      /**
       * {@link LuaAccumulatorControlBehavior}
       *
       * {@link https://lua-api.factorio.com/latest/defines.html#defines.control_behavior.type.accumulator View documentation}
       */
      accumulator,
      /**
       * {@link LuaRailSignalControlBehavior}
       *
       * {@link https://lua-api.factorio.com/latest/defines.html#defines.control_behavior.type.rail_signal View documentation}
       */
      rail_signal,
      /**
       * {@link LuaRailChainSignalControlBehavior}
       *
       * {@link https://lua-api.factorio.com/latest/defines.html#defines.control_behavior.type.rail_chain_signal View documentation}
       */
      rail_chain_signal,
      /**
       * {@link LuaWallControlBehavior}
       *
       * {@link https://lua-api.factorio.com/latest/defines.html#defines.control_behavior.type.wall View documentation}
       */
      wall,
      /**
       * {@link LuaMiningDrillControlBehavior}
       *
       * {@link https://lua-api.factorio.com/latest/defines.html#defines.control_behavior.type.mining_drill View documentation}
       */
      mining_drill,
      /**
       * {@link LuaProgrammableSpeakerControlBehavior}
       *
       * {@link https://lua-api.factorio.com/latest/defines.html#defines.control_behavior.type.programmable_speaker View documentation}
       */
      programmable_speaker,
    }
  }
  enum controllers {
    /**
     * Can't interact with the world, can only observe. Used in the multiplayer waiting-to-respawn screen.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.controllers.ghost View documentation}
     */
    ghost,
    /**
     * The controller controls a character. This is the default controller in freeplay.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.controllers.character View documentation}
     */
    character,
    /**
     * The controller isn't tied to a character. This is the default controller in sandbox.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.controllers.god View documentation}
     */
    god,
    /**
     * The Editor Controller near ultimate power to do almost anything in the game.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.controllers.editor View documentation}
     */
    editor,
    /**
     * The player can't interact with the world, and the camera pans around in a predefined manner.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.controllers.cutscene View documentation}
     */
    cutscene,
    /**
     * Can't change anything in the world but can view anything.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.controllers.spectator View documentation}
     */
    spectator,
  }
  namespace deconstruction_item {
    enum entity_filter_mode {
      whitelist,
      blacklist,
    }
    enum tile_filter_mode {
      whitelist,
      blacklist,
    }
    enum tile_selection_mode {
      normal,
      always,
      never,
      only,
    }
  }
  enum difficulty {
    easy,
    normal,
    hard,
  }
  namespace difficulty_settings {
    enum recipe_difficulty {
      normal,
      expensive,
    }
    enum technology_difficulty {
      normal,
      expensive,
    }
  }
  enum direction {
    north = 0,
    northeast = 1,
    east = 2,
    southeast = 3,
    south = 4,
    southwest = 5,
    west = 6,
    northwest = 7,
  }
  enum disconnect_reason {
    quit,
    dropped,
    reconnect,
    wrong_input,
    desync_limit_reached,
    cannot_keep_up,
    afk,
    kicked,
    kicked_and_deleted,
    banned,
    switching_servers,
  }
  enum distraction {
    /**
     * Perform command even if someone attacks the unit.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.distraction.none View documentation}
     */
    none,
    /**
     * Attack closer enemy entities with force.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.distraction.by_enemy View documentation}
     */
    by_enemy,
    /**
     * Attack closer enemy entities, including entities "built" by player (belts, inserters, chests).
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.distraction.by_anything View documentation}
     */
    by_anything,
    /**
     * Attack when attacked.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.distraction.by_damage View documentation}
     */
    by_damage,
  }
  enum entity_status {
    working,
    normal,
    no_power,
    low_power,
    no_fuel,
    disabled_by_control_behavior,
    opened_by_circuit_network,
    closed_by_circuit_network,
    disabled_by_script,
    marked_for_deconstruction,
    /**
     * Used by generators and solar panels.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.not_plugged_in_electric_network View documentation}
     */
    not_plugged_in_electric_network,
    /**
     * Used by power switches.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.networks_connected View documentation}
     */
    networks_connected,
    /**
     * Used by power switches.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.networks_disconnected View documentation}
     */
    networks_disconnected,
    /**
     * Used by accumulators.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.charging View documentation}
     */
    charging,
    /**
     * Used by accumulators.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.discharging View documentation}
     */
    discharging,
    /**
     * Used by accumulators.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.fully_charged View documentation}
     */
    fully_charged,
    /**
     * Used by logistic containers.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.out_of_logistic_network View documentation}
     */
    out_of_logistic_network,
    /**
     * Used by assembling machines.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.no_recipe View documentation}
     */
    no_recipe,
    /**
     * Used by furnaces.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.no_ingredients View documentation}
     */
    no_ingredients,
    /**
     * Used by boilers, fluid turrets and fluid energy sources: Boiler has no fluid to work with.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.no_input_fluid View documentation}
     */
    no_input_fluid,
    /**
     * Used by labs.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.no_research_in_progress View documentation}
     */
    no_research_in_progress,
    /**
     * Used by mining drills.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.no_minable_resources View documentation}
     */
    no_minable_resources,
    /**
     * Used by boilers and fluid turrets: Boiler still has some fluid but is about to run out.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.low_input_fluid View documentation}
     */
    low_input_fluid,
    /**
     * Used by crafting machines.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.fluid_ingredient_shortage View documentation}
     */
    fluid_ingredient_shortage,
    /**
     * Used by crafting machines, boilers, burner energy sources and reactors: Reactor/burner has full burnt result inventory, boiler has full output fluidbox.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.full_output View documentation}
     */
    full_output,
    /**
     * Used by crafting machines.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.item_ingredient_shortage View documentation}
     */
    item_ingredient_shortage,
    /**
     * Used by mining drills when the mining fluid is missing.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.missing_required_fluid View documentation}
     */
    missing_required_fluid,
    /**
     * Used by labs.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.missing_science_packs View documentation}
     */
    missing_science_packs,
    /**
     * Used by inserters.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.waiting_for_source_items View documentation}
     */
    waiting_for_source_items,
    /**
     * Used by inserters and mining drills.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.waiting_for_space_in_destination View documentation}
     */
    waiting_for_space_in_destination,
    /**
     * Used by the rocket silo.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.preparing_rocket_for_launch View documentation}
     */
    preparing_rocket_for_launch,
    /**
     * Used by the rocket silo.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.waiting_to_launch_rocket View documentation}
     */
    waiting_to_launch_rocket,
    /**
     * Used by the rocket silo.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.launching_rocket View documentation}
     */
    launching_rocket,
    /**
     * Used by beacons.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.no_modules_to_transmit View documentation}
     */
    no_modules_to_transmit,
    /**
     * Used by roboports.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.recharging_after_power_outage View documentation}
     */
    recharging_after_power_outage,
    /**
     * Used by inserters targeting entity ghosts.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.waiting_for_target_to_be_built View documentation}
     */
    waiting_for_target_to_be_built,
    /**
     * Used by inserters targeting rails.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.waiting_for_train View documentation}
     */
    waiting_for_train,
    /**
     * Used by ammo turrets.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.no_ammo View documentation}
     */
    no_ammo,
    /**
     * Used by heat energy sources.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.low_temperature View documentation}
     */
    low_temperature,
    /**
     * Used by constant combinators: Combinator is turned off via switch in GUI.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.disabled View documentation}
     */
    disabled,
    /**
     * Used by lamps.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.turned_off_during_daytime View documentation}
     */
    turned_off_during_daytime,
    /**
     * Used by rail signals.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.not_connected_to_rail View documentation}
     */
    not_connected_to_rail,
    /**
     * Used by rail signals.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.entity_status.cant_divide_segments View documentation}
     */
    cant_divide_segments,
  }
  /**
   * See the {@linkplain https://lua-api.factorio.com/latest/events.html events page} for more info on what events contain and when they get raised.
   *
   * {@link https://lua-api.factorio.com/latest/defines.html#defines.events View documentation}
   */
  namespace events {
    /**
     * Event type: {@link OnTickEvent}
     */
    const on_tick: EventId<OnTickEvent>
    /**
     * Event type: {@link OnGuiClickEvent}
     */
    const on_gui_click: EventId<OnGuiClickEvent>
    /**
     * Event type: {@link OnGuiConfirmedEvent}
     */
    const on_gui_confirmed: EventId<OnGuiConfirmedEvent>
    /**
     * Event type: {@link OnGuiTextChangedEvent}
     */
    const on_gui_text_changed: EventId<OnGuiTextChangedEvent>
    /**
     * Event type: {@link OnGuiCheckedStateChangedEvent}
     */
    const on_gui_checked_state_changed: EventId<OnGuiCheckedStateChangedEvent>
    /**
     * Event type: {@link OnEntityDiedEvent}
     *
     * Event filter: {@link LuaEntityDiedEventFilter}
     */
    const on_entity_died: EventId<OnEntityDiedEvent, LuaEntityDiedEventFilter>
    /**
     * Event type: {@link OnPostEntityDiedEvent}
     *
     * Event filter: {@link LuaPostEntityDiedEventFilter}
     */
    const on_post_entity_died: EventId<OnPostEntityDiedEvent, LuaPostEntityDiedEventFilter>
    /**
     * Event type: {@link OnEntityDamagedEvent}
     *
     * Event filter: {@link LuaEntityDamagedEventFilter}
     */
    const on_entity_damaged: EventId<OnEntityDamagedEvent, LuaEntityDamagedEventFilter>
    /**
     * Event type: {@link OnPickedUpItemEvent}
     */
    const on_picked_up_item: EventId<OnPickedUpItemEvent>
    /**
     * Event type: {@link OnBuiltEntityEvent}
     *
     * Event filter: {@link LuaPlayerBuiltEntityEventFilter}
     */
    const on_built_entity: EventId<OnBuiltEntityEvent, LuaPlayerBuiltEntityEventFilter>
    /**
     * Event type: {@link OnSectorScannedEvent}
     *
     * Event filter: {@link LuaSectorScannedEventFilter}
     */
    const on_sector_scanned: EventId<OnSectorScannedEvent, LuaSectorScannedEventFilter>
    /**
     * Event type: {@link OnPlayerMinedItemEvent}
     */
    const on_player_mined_item: EventId<OnPlayerMinedItemEvent>
    /**
     * Event type: {@link OnPreBuildEvent}
     */
    const on_pre_build: EventId<OnPreBuildEvent>
    /**
     * Event type: {@link OnRocketLaunchedEvent}
     */
    const on_rocket_launched: EventId<OnRocketLaunchedEvent>
    /**
     * Event type: {@link OnPrePlayerMinedItemEvent}
     *
     * Event filter: {@link LuaPrePlayerMinedEntityEventFilter}
     */
    const on_pre_player_mined_item: EventId<OnPrePlayerMinedItemEvent, LuaPrePlayerMinedEntityEventFilter>
    /**
     * Event type: {@link OnChunkGeneratedEvent}
     */
    const on_chunk_generated: EventId<OnChunkGeneratedEvent>
    /**
     * Event type: {@link OnPlayerCraftedItemEvent}
     */
    const on_player_crafted_item: EventId<OnPlayerCraftedItemEvent>
    /**
     * Event type: {@link OnRobotBuiltEntityEvent}
     *
     * Event filter: {@link LuaRobotBuiltEntityEventFilter}
     */
    const on_robot_built_entity: EventId<OnRobotBuiltEntityEvent, LuaRobotBuiltEntityEventFilter>
    /**
     * Event type: {@link OnRobotPreMinedEvent}
     *
     * Event filter: {@link LuaPreRobotMinedEntityEventFilter}
     */
    const on_robot_pre_mined: EventId<OnRobotPreMinedEvent, LuaPreRobotMinedEntityEventFilter>
    /**
     * Event type: {@link OnRobotMinedEvent}
     */
    const on_robot_mined: EventId<OnRobotMinedEvent>
    /**
     * Event type: {@link OnResearchStartedEvent}
     */
    const on_research_started: EventId<OnResearchStartedEvent>
    /**
     * Event type: {@link OnResearchFinishedEvent}
     */
    const on_research_finished: EventId<OnResearchFinishedEvent>
    /**
     * Event type: {@link OnResearchReversedEvent}
     */
    const on_research_reversed: EventId<OnResearchReversedEvent>
    /**
     * Event type: {@link OnResearchCancelledEvent}
     */
    const on_research_cancelled: EventId<OnResearchCancelledEvent>
    /**
     * Event type: {@link OnPlayerRotatedEntityEvent}
     */
    const on_player_rotated_entity: EventId<OnPlayerRotatedEntityEvent>
    /**
     * Event type: {@link OnMarkedForDeconstructionEvent}
     *
     * Event filter: {@link LuaEntityMarkedForDeconstructionEventFilter}
     */
    const on_marked_for_deconstruction: EventId<
      OnMarkedForDeconstructionEvent,
      LuaEntityMarkedForDeconstructionEventFilter
    >
    /**
     * Event type: {@link OnCancelledDeconstructionEvent}
     *
     * Event filter: {@link LuaEntityDeconstructionCancelledEventFilter}
     */
    const on_cancelled_deconstruction: EventId<
      OnCancelledDeconstructionEvent,
      LuaEntityDeconstructionCancelledEventFilter
    >
    /**
     * Event type: {@link OnTriggerCreatedEntityEvent}
     */
    const on_trigger_created_entity: EventId<OnTriggerCreatedEntityEvent>
    /**
     * Event type: {@link OnTriggerFiredArtilleryEvent}
     */
    const on_trigger_fired_artillery: EventId<OnTriggerFiredArtilleryEvent>
    /**
     * Event type: {@link OnTrainChangedStateEvent}
     */
    const on_train_changed_state: EventId<OnTrainChangedStateEvent>
    /**
     * Event type: {@link OnPlayerCreatedEvent}
     */
    const on_player_created: EventId<OnPlayerCreatedEvent>
    /**
     * Event type: {@link OnResourceDepletedEvent}
     */
    const on_resource_depleted: EventId<OnResourceDepletedEvent>
    /**
     * Event type: {@link OnPlayerDrivingChangedStateEvent}
     */
    const on_player_driving_changed_state: EventId<OnPlayerDrivingChangedStateEvent>
    /**
     * Event type: {@link OnForceCreatedEvent}
     */
    const on_force_created: EventId<OnForceCreatedEvent>
    /**
     * Event type: {@link OnForcesMergingEvent}
     */
    const on_forces_merging: EventId<OnForcesMergingEvent>
    /**
     * Event type: {@link OnPlayerCursorStackChangedEvent}
     */
    const on_player_cursor_stack_changed: EventId<OnPlayerCursorStackChangedEvent>
    /**
     * Event type: {@link OnPreEntitySettingsPastedEvent}
     */
    const on_pre_entity_settings_pasted: EventId<OnPreEntitySettingsPastedEvent>
    /**
     * Event type: {@link OnEntitySettingsPastedEvent}
     */
    const on_entity_settings_pasted: EventId<OnEntitySettingsPastedEvent>
    /**
     * Event type: {@link OnPlayerMainInventoryChangedEvent}
     */
    const on_player_main_inventory_changed: EventId<OnPlayerMainInventoryChangedEvent>
    /**
     * Event type: {@link OnPlayerArmorInventoryChangedEvent}
     */
    const on_player_armor_inventory_changed: EventId<OnPlayerArmorInventoryChangedEvent>
    /**
     * Event type: {@link OnPlayerAmmoInventoryChangedEvent}
     */
    const on_player_ammo_inventory_changed: EventId<OnPlayerAmmoInventoryChangedEvent>
    /**
     * Event type: {@link OnPlayerGunInventoryChangedEvent}
     */
    const on_player_gun_inventory_changed: EventId<OnPlayerGunInventoryChangedEvent>
    /**
     * Event type: {@link OnPlayerPlacedEquipmentEvent}
     */
    const on_player_placed_equipment: EventId<OnPlayerPlacedEquipmentEvent>
    /**
     * Event type: {@link OnPlayerRemovedEquipmentEvent}
     */
    const on_player_removed_equipment: EventId<OnPlayerRemovedEquipmentEvent>
    /**
     * Event type: {@link OnPrePlayerDiedEvent}
     */
    const on_pre_player_died: EventId<OnPrePlayerDiedEvent>
    /**
     * Event type: {@link OnPlayerDiedEvent}
     */
    const on_player_died: EventId<OnPlayerDiedEvent>
    /**
     * Event type: {@link OnPlayerRespawnedEvent}
     */
    const on_player_respawned: EventId<OnPlayerRespawnedEvent>
    /**
     * Event type: {@link OnPlayerJoinedGameEvent}
     */
    const on_player_joined_game: EventId<OnPlayerJoinedGameEvent>
    /**
     * Event type: {@link OnPlayerLeftGameEvent}
     */
    const on_player_left_game: EventId<OnPlayerLeftGameEvent>
    /**
     * Event type: {@link OnPlayerBuiltTileEvent}
     */
    const on_player_built_tile: EventId<OnPlayerBuiltTileEvent>
    /**
     * Event type: {@link OnPlayerMinedTileEvent}
     */
    const on_player_mined_tile: EventId<OnPlayerMinedTileEvent>
    /**
     * Event type: {@link OnRobotBuiltTileEvent}
     */
    const on_robot_built_tile: EventId<OnRobotBuiltTileEvent>
    /**
     * Event type: {@link OnRobotMinedTileEvent}
     */
    const on_robot_mined_tile: EventId<OnRobotMinedTileEvent>
    /**
     * Event type: {@link OnPlayerSelectedAreaEvent}
     */
    const on_player_selected_area: EventId<OnPlayerSelectedAreaEvent>
    /**
     * Event type: {@link OnPlayerAltSelectedAreaEvent}
     */
    const on_player_alt_selected_area: EventId<OnPlayerAltSelectedAreaEvent>
    /**
     * Event type: {@link OnPlayerChangedSurfaceEvent}
     */
    const on_player_changed_surface: EventId<OnPlayerChangedSurfaceEvent>
    /**
     * Event type: {@link OnSelectedEntityChangedEvent}
     */
    const on_selected_entity_changed: EventId<OnSelectedEntityChangedEvent>
    /**
     * Event type: {@link OnMarketItemPurchasedEvent}
     */
    const on_market_item_purchased: EventId<OnMarketItemPurchasedEvent>
    /**
     * Event type: {@link OnPlayerDroppedItemEvent}
     */
    const on_player_dropped_item: EventId<OnPlayerDroppedItemEvent>
    /**
     * Event type: {@link OnBiterBaseBuiltEvent}
     */
    const on_biter_base_built: EventId<OnBiterBaseBuiltEvent>
    /**
     * Event type: {@link OnPlayerChangedForceEvent}
     */
    const on_player_changed_force: EventId<OnPlayerChangedForceEvent>
    /**
     * Event type: {@link OnEntityRenamedEvent}
     */
    const on_entity_renamed: EventId<OnEntityRenamedEvent>
    /**
     * Event type: {@link OnGuiSelectionStateChangedEvent}
     */
    const on_gui_selection_state_changed: EventId<OnGuiSelectionStateChangedEvent>
    /**
     * Event type: {@link OnRuntimeModSettingChangedEvent}
     */
    const on_runtime_mod_setting_changed: EventId<OnRuntimeModSettingChangedEvent>
    /**
     * Event type: {@link OnDifficultySettingsChangedEvent}
     */
    const on_difficulty_settings_changed: EventId<OnDifficultySettingsChangedEvent>
    /**
     * Event type: {@link OnSurfaceCreatedEvent}
     */
    const on_surface_created: EventId<OnSurfaceCreatedEvent>
    /**
     * Event type: {@link OnSurfaceDeletedEvent}
     */
    const on_surface_deleted: EventId<OnSurfaceDeletedEvent>
    /**
     * Event type: {@link OnPreSurfaceDeletedEvent}
     */
    const on_pre_surface_deleted: EventId<OnPreSurfaceDeletedEvent>
    /**
     * Event type: {@link OnPlayerMinedEntityEvent}
     *
     * Event filter: {@link LuaPlayerMinedEntityEventFilter}
     */
    const on_player_mined_entity: EventId<OnPlayerMinedEntityEvent, LuaPlayerMinedEntityEventFilter>
    /**
     * Event type: {@link OnRobotMinedEntityEvent}
     *
     * Event filter: {@link LuaRobotMinedEntityEventFilter}
     */
    const on_robot_mined_entity: EventId<OnRobotMinedEntityEvent, LuaRobotMinedEntityEventFilter>
    /**
     * Event type: {@link OnTrainCreatedEvent}
     */
    const on_train_created: EventId<OnTrainCreatedEvent>
    /**
     * Event type: {@link OnGuiElemChangedEvent}
     */
    const on_gui_elem_changed: EventId<OnGuiElemChangedEvent>
    /**
     * Event type: {@link OnPlayerSetupBlueprintEvent}
     */
    const on_player_setup_blueprint: EventId<OnPlayerSetupBlueprintEvent>
    /**
     * Event type: {@link OnPlayerDeconstructedAreaEvent}
     */
    const on_player_deconstructed_area: EventId<OnPlayerDeconstructedAreaEvent>
    /**
     * Event type: {@link OnPlayerConfiguredBlueprintEvent}
     */
    const on_player_configured_blueprint: EventId<OnPlayerConfiguredBlueprintEvent>
    /**
     * Event type: {@link OnConsoleChatEvent}
     */
    const on_console_chat: EventId<OnConsoleChatEvent>
    /**
     * Event type: {@link OnConsoleCommandEvent}
     */
    const on_console_command: EventId<OnConsoleCommandEvent>
    /**
     * Event type: {@link OnPlayerRemovedEvent}
     */
    const on_player_removed: EventId<OnPlayerRemovedEvent>
    /**
     * Event type: {@link OnPrePlayerRemovedEvent}
     */
    const on_pre_player_removed: EventId<OnPrePlayerRemovedEvent>
    /**
     * Event type: {@link OnPlayerUsedCapsuleEvent}
     */
    const on_player_used_capsule: EventId<OnPlayerUsedCapsuleEvent>
    /**
     * Event type: {@link ScriptRaisedBuiltEvent}
     *
     * Event filter: {@link LuaScriptRaisedBuiltEventFilter}
     */
    const script_raised_built: EventId<ScriptRaisedBuiltEvent, LuaScriptRaisedBuiltEventFilter>
    /**
     * Event type: {@link ScriptRaisedDestroyEvent}
     *
     * Event filter: {@link LuaScriptRaisedDestroyEventFilter}
     */
    const script_raised_destroy: EventId<ScriptRaisedDestroyEvent, LuaScriptRaisedDestroyEventFilter>
    /**
     * Event type: {@link ScriptRaisedReviveEvent}
     *
     * Event filter: {@link LuaScriptRaisedReviveEventFilter}
     */
    const script_raised_revive: EventId<ScriptRaisedReviveEvent, LuaScriptRaisedReviveEventFilter>
    /**
     * Event type: {@link ScriptRaisedSetTilesEvent}
     */
    const script_raised_set_tiles: EventId<ScriptRaisedSetTilesEvent>
    /**
     * Event type: {@link OnPlayerPromotedEvent}
     */
    const on_player_promoted: EventId<OnPlayerPromotedEvent>
    /**
     * Event type: {@link OnPlayerDemotedEvent}
     */
    const on_player_demoted: EventId<OnPlayerDemotedEvent>
    /**
     * Event type: {@link OnCombatRobotExpiredEvent}
     */
    const on_combat_robot_expired: EventId<OnCombatRobotExpiredEvent>
    /**
     * Event type: {@link OnWorkerRobotExpiredEvent}
     */
    const on_worker_robot_expired: EventId<OnWorkerRobotExpiredEvent>
    /**
     * Event type: {@link OnPlayerChangedPositionEvent}
     */
    const on_player_changed_position: EventId<OnPlayerChangedPositionEvent>
    /**
     * Event type: {@link OnModItemOpenedEvent}
     */
    const on_mod_item_opened: EventId<OnModItemOpenedEvent>
    /**
     * Event type: {@link OnGuiOpenedEvent}
     */
    const on_gui_opened: EventId<OnGuiOpenedEvent>
    /**
     * Event type: {@link OnGuiClosedEvent}
     */
    const on_gui_closed: EventId<OnGuiClosedEvent>
    /**
     * Event type: {@link OnGuiValueChangedEvent}
     */
    const on_gui_value_changed: EventId<OnGuiValueChangedEvent>
    /**
     * Event type: {@link OnPlayerMutedEvent}
     */
    const on_player_muted: EventId<OnPlayerMutedEvent>
    /**
     * Event type: {@link OnPlayerUnmutedEvent}
     */
    const on_player_unmuted: EventId<OnPlayerUnmutedEvent>
    /**
     * Event type: {@link OnPlayerCheatModeEnabledEvent}
     */
    const on_player_cheat_mode_enabled: EventId<OnPlayerCheatModeEnabledEvent>
    /**
     * Event type: {@link OnPlayerCheatModeDisabledEvent}
     */
    const on_player_cheat_mode_disabled: EventId<OnPlayerCheatModeDisabledEvent>
    /**
     * Event type: {@link OnCharacterCorpseExpiredEvent}
     */
    const on_character_corpse_expired: EventId<OnCharacterCorpseExpiredEvent>
    /**
     * Event type: {@link OnPreGhostDeconstructedEvent}
     *
     * Event filter: {@link LuaPreGhostDeconstructedEventFilter}
     */
    const on_pre_ghost_deconstructed: EventId<OnPreGhostDeconstructedEvent, LuaPreGhostDeconstructedEventFilter>
    /**
     * Event type: {@link OnPlayerPipetteEvent}
     */
    const on_player_pipette: EventId<OnPlayerPipetteEvent>
    /**
     * Event type: {@link OnPlayerDisplayResolutionChangedEvent}
     */
    const on_player_display_resolution_changed: EventId<OnPlayerDisplayResolutionChangedEvent>
    /**
     * Event type: {@link OnPlayerDisplayScaleChangedEvent}
     */
    const on_player_display_scale_changed: EventId<OnPlayerDisplayScaleChangedEvent>
    /**
     * Event type: {@link OnPrePlayerCraftedItemEvent}
     */
    const on_pre_player_crafted_item: EventId<OnPrePlayerCraftedItemEvent>
    /**
     * Event type: {@link OnPlayerCancelledCraftingEvent}
     */
    const on_player_cancelled_crafting: EventId<OnPlayerCancelledCraftingEvent>
    /**
     * Event type: {@link OnChunkChartedEvent}
     */
    const on_chunk_charted: EventId<OnChunkChartedEvent>
    /**
     * Event type: {@link OnTechnologyEffectsResetEvent}
     */
    const on_technology_effects_reset: EventId<OnTechnologyEffectsResetEvent>
    /**
     * Event type: {@link OnForceResetEvent}
     */
    const on_force_reset: EventId<OnForceResetEvent>
    /**
     * Event type: {@link OnLandMineArmedEvent}
     */
    const on_land_mine_armed: EventId<OnLandMineArmedEvent>
    /**
     * Event type: {@link OnForcesMergedEvent}
     */
    const on_forces_merged: EventId<OnForcesMergedEvent>
    /**
     * Event type: {@link OnPlayerTrashInventoryChangedEvent}
     */
    const on_player_trash_inventory_changed: EventId<OnPlayerTrashInventoryChangedEvent>
    /**
     * Event type: {@link OnPrePlayerLeftGameEvent}
     */
    const on_pre_player_left_game: EventId<OnPrePlayerLeftGameEvent>
    /**
     * Event type: {@link OnPreSurfaceClearedEvent}
     */
    const on_pre_surface_cleared: EventId<OnPreSurfaceClearedEvent>
    /**
     * Event type: {@link OnSurfaceClearedEvent}
     */
    const on_surface_cleared: EventId<OnSurfaceClearedEvent>
    /**
     * Event type: {@link OnChunkDeletedEvent}
     */
    const on_chunk_deleted: EventId<OnChunkDeletedEvent>
    /**
     * Event type: {@link OnPreChunkDeletedEvent}
     */
    const on_pre_chunk_deleted: EventId<OnPreChunkDeletedEvent>
    /**
     * Event type: {@link OnTrainScheduleChangedEvent}
     */
    const on_train_schedule_changed: EventId<OnTrainScheduleChangedEvent>
    /**
     * Event type: {@link OnPlayerBannedEvent}
     */
    const on_player_banned: EventId<OnPlayerBannedEvent>
    /**
     * Event type: {@link OnPlayerKickedEvent}
     */
    const on_player_kicked: EventId<OnPlayerKickedEvent>
    /**
     * Event type: {@link OnPlayerUnbannedEvent}
     */
    const on_player_unbanned: EventId<OnPlayerUnbannedEvent>
    /**
     * Event type: {@link OnRocketLaunchOrderedEvent}
     */
    const on_rocket_launch_ordered: EventId<OnRocketLaunchOrderedEvent>
    /**
     * Event type: {@link OnScriptPathRequestFinishedEvent}
     */
    const on_script_path_request_finished: EventId<OnScriptPathRequestFinishedEvent>
    /**
     * Event type: {@link OnAiCommandCompletedEvent}
     */
    const on_ai_command_completed: EventId<OnAiCommandCompletedEvent>
    /**
     * Event type: {@link OnMarkedForUpgradeEvent}
     *
     * Event filter: {@link LuaEntityMarkedForUpgradeEventFilter}
     */
    const on_marked_for_upgrade: EventId<OnMarkedForUpgradeEvent, LuaEntityMarkedForUpgradeEventFilter>
    /**
     * Event type: {@link OnCancelledUpgradeEvent}
     *
     * Event filter: {@link LuaUpgradeCancelledEventFilter}
     */
    const on_cancelled_upgrade: EventId<OnCancelledUpgradeEvent, LuaUpgradeCancelledEventFilter>
    /**
     * Event type: {@link OnPlayerToggledMapEditorEvent}
     */
    const on_player_toggled_map_editor: EventId<OnPlayerToggledMapEditorEvent>
    /**
     * Event type: {@link OnEntityClonedEvent}
     *
     * Event filter: {@link LuaEntityClonedEventFilter}
     */
    const on_entity_cloned: EventId<OnEntityClonedEvent, LuaEntityClonedEventFilter>
    /**
     * Event type: {@link OnAreaClonedEvent}
     */
    const on_area_cloned: EventId<OnAreaClonedEvent>
    /**
     * Event type: {@link OnBrushClonedEvent}
     */
    const on_brush_cloned: EventId<OnBrushClonedEvent>
    /**
     * Event type: {@link OnGameCreatedFromScenarioEvent}
     */
    const on_game_created_from_scenario: EventId<OnGameCreatedFromScenarioEvent>
    /**
     * Event type: {@link OnSurfaceImportedEvent}
     */
    const on_surface_imported: EventId<OnSurfaceImportedEvent>
    /**
     * Event type: {@link OnSurfaceRenamedEvent}
     */
    const on_surface_renamed: EventId<OnSurfaceRenamedEvent>
    /**
     * Event type: {@link OnPlayerToggledAltModeEvent}
     */
    const on_player_toggled_alt_mode: EventId<OnPlayerToggledAltModeEvent>
    /**
     * Event type: {@link OnPlayerRepairedEntityEvent}
     *
     * Event filter: {@link LuaPlayerRepairedEntityEventFilter}
     */
    const on_player_repaired_entity: EventId<OnPlayerRepairedEntityEvent, LuaPlayerRepairedEntityEventFilter>
    /**
     * Event type: {@link OnPlayerFastTransferredEvent}
     */
    const on_player_fast_transferred: EventId<OnPlayerFastTransferredEvent>
    /**
     * Event type: {@link OnPreRobotExplodedCliffEvent}
     */
    const on_pre_robot_exploded_cliff: EventId<OnPreRobotExplodedCliffEvent>
    /**
     * Event type: {@link OnRobotExplodedCliffEvent}
     */
    const on_robot_exploded_cliff: EventId<OnRobotExplodedCliffEvent>
    /**
     * Event type: {@link OnEntitySpawnedEvent}
     */
    const on_entity_spawned: EventId<OnEntitySpawnedEvent>
    /**
     * Event type: {@link OnCutsceneWaypointReachedEvent}
     */
    const on_cutscene_waypoint_reached: EventId<OnCutsceneWaypointReachedEvent>
    /**
     * Event type: {@link OnUnitGroupCreatedEvent}
     */
    const on_unit_group_created: EventId<OnUnitGroupCreatedEvent>
    /**
     * Event type: {@link OnUnitAddedToGroupEvent}
     */
    const on_unit_added_to_group: EventId<OnUnitAddedToGroupEvent>
    /**
     * Event type: {@link OnUnitRemovedFromGroupEvent}
     */
    const on_unit_removed_from_group: EventId<OnUnitRemovedFromGroupEvent>
    /**
     * Event type: {@link OnUnitGroupFinishedGatheringEvent}
     */
    const on_unit_group_finished_gathering: EventId<OnUnitGroupFinishedGatheringEvent>
    /**
     * Event type: {@link OnBuildBaseArrivedEvent}
     */
    const on_build_base_arrived: EventId<OnBuildBaseArrivedEvent>
    /**
     * Event type: {@link OnChartTagAddedEvent}
     */
    const on_chart_tag_added: EventId<OnChartTagAddedEvent>
    /**
     * Event type: {@link OnChartTagModifiedEvent}
     */
    const on_chart_tag_modified: EventId<OnChartTagModifiedEvent>
    /**
     * Event type: {@link OnChartTagRemovedEvent}
     */
    const on_chart_tag_removed: EventId<OnChartTagRemovedEvent>
    /**
     * Event type: {@link OnLuaShortcutEvent}
     */
    const on_lua_shortcut: EventId<OnLuaShortcutEvent>
    /**
     * Event type: {@link OnGuiLocationChangedEvent}
     */
    const on_gui_location_changed: EventId<OnGuiLocationChangedEvent>
    /**
     * Event type: {@link OnGuiSelectedTabChangedEvent}
     */
    const on_gui_selected_tab_changed: EventId<OnGuiSelectedTabChangedEvent>
    /**
     * Event type: {@link OnGuiSwitchStateChangedEvent}
     */
    const on_gui_switch_state_changed: EventId<OnGuiSwitchStateChangedEvent>
    /**
     * Event type: {@link OnForceCeaseFireChangedEvent}
     */
    const on_force_cease_fire_changed: EventId<OnForceCeaseFireChangedEvent>
    /**
     * Event type: {@link OnForceFriendsChangedEvent}
     */
    const on_force_friends_changed: EventId<OnForceFriendsChangedEvent>
    /**
     * Event type: {@link OnStringTranslatedEvent}
     */
    const on_string_translated: EventId<OnStringTranslatedEvent>
    /**
     * Event type: {@link OnScriptTriggerEffectEvent}
     */
    const on_script_trigger_effect: EventId<OnScriptTriggerEffectEvent>
    /**
     * Event type: {@link OnPlayerSetQuickBarSlotEvent}
     */
    const on_player_set_quick_bar_slot: EventId<OnPlayerSetQuickBarSlotEvent>
    /**
     * Event type: {@link OnPrePlayerToggledMapEditorEvent}
     */
    const on_pre_player_toggled_map_editor: EventId<OnPrePlayerToggledMapEditorEvent>
    /**
     * Event type: {@link OnPreScriptInventoryResizedEvent}
     */
    const on_pre_script_inventory_resized: EventId<OnPreScriptInventoryResizedEvent>
    /**
     * Event type: {@link OnScriptInventoryResizedEvent}
     */
    const on_script_inventory_resized: EventId<OnScriptInventoryResizedEvent>
    /**
     * Event type: {@link OnEntityDestroyedEvent}
     */
    const on_entity_destroyed: EventId<OnEntityDestroyedEvent>
    /**
     * Event type: {@link OnPlayerClickedGpsTagEvent}
     */
    const on_player_clicked_gps_tag: EventId<OnPlayerClickedGpsTagEvent>
    /**
     * Event type: {@link OnPlayerFlushedFluidEvent}
     */
    const on_player_flushed_fluid: EventId<OnPlayerFlushedFluidEvent>
    /**
     * Event type: {@link OnPermissionGroupEditedEvent}
     */
    const on_permission_group_edited: EventId<OnPermissionGroupEditedEvent>
    /**
     * Event type: {@link OnPrePermissionStringImportedEvent}
     */
    const on_pre_permission_string_imported: EventId<OnPrePermissionStringImportedEvent>
    /**
     * Event type: {@link OnPermissionStringImportedEvent}
     */
    const on_permission_string_imported: EventId<OnPermissionStringImportedEvent>
    /**
     * Event type: {@link OnPrePermissionGroupDeletedEvent}
     */
    const on_pre_permission_group_deleted: EventId<OnPrePermissionGroupDeletedEvent>
    /**
     * Event type: {@link OnPermissionGroupDeletedEvent}
     */
    const on_permission_group_deleted: EventId<OnPermissionGroupDeletedEvent>
    /**
     * Event type: {@link OnPermissionGroupAddedEvent}
     */
    const on_permission_group_added: EventId<OnPermissionGroupAddedEvent>
    /**
     * Event type: {@link OnCutsceneCancelledEvent}
     */
    const on_cutscene_cancelled: EventId<OnCutsceneCancelledEvent>
    /**
     * Event type: {@link OnPlayerConfiguredSpiderRemoteEvent}
     */
    const on_player_configured_spider_remote: EventId<OnPlayerConfiguredSpiderRemoteEvent>
    /**
     * Event type: {@link OnPlayerUsedSpiderRemoteEvent}
     */
    const on_player_used_spider_remote: EventId<OnPlayerUsedSpiderRemoteEvent>
    /**
     * Event type: {@link OnSpiderCommandCompletedEvent}
     */
    const on_spider_command_completed: EventId<OnSpiderCommandCompletedEvent>
    /**
     * Event type: {@link OnEntityLogisticSlotChangedEvent}
     */
    const on_entity_logistic_slot_changed: EventId<OnEntityLogisticSlotChangedEvent>
    /**
     * Event type: {@link OnEquipmentInsertedEvent}
     */
    const on_equipment_inserted: EventId<OnEquipmentInsertedEvent>
    /**
     * Event type: {@link OnEquipmentRemovedEvent}
     */
    const on_equipment_removed: EventId<OnEquipmentRemovedEvent>
    /**
     * Event type: {@link OnPlayerReverseSelectedAreaEvent}
     */
    const on_player_reverse_selected_area: EventId<OnPlayerReverseSelectedAreaEvent>
  }
  /**
   * See the {@linkplain https://lua-api.factorio.com/latest/events.html events page} for more info on what events contain and when they get raised.
   *
   * {@link https://lua-api.factorio.com/latest/defines.html#defines.events View documentation}
   */
  type Events = typeof events[keyof typeof events]
  enum flow_precision_index {
    five_seconds,
    one_minute,
    ten_minutes,
    one_hour,
    ten_hours,
    fifty_hours,
    two_hundred_fifty_hours,
    one_thousand_hours,
  }
  enum group_state {
    gathering,
    moving,
    attacking_distraction,
    attacking_target,
    finished,
    pathfinding,
    wander_in_group,
  }
  enum gui_type {
    none,
    entity,
    research,
    controller,
    production,
    item,
    bonus,
    trains,
    achievement,
    blueprint_library,
    equipment,
    logistic,
    other_player,
    permissions,
    tutorials,
    custom,
    server_management,
    player_management,
    tile,
  }
  enum input_action {
    activate_copy,
    activate_cut,
    activate_paste,
    add_permission_group,
    add_train_station,
    admin_action,
    alt_select_area,
    alt_select_blueprint_entities,
    alternative_copy,
    begin_mining,
    begin_mining_terrain,
    build,
    build_rail,
    build_terrain,
    cancel_craft,
    cancel_deconstruct,
    cancel_new_blueprint,
    cancel_research,
    cancel_upgrade,
    change_active_character_tab,
    change_active_item_group_for_crafting,
    change_active_item_group_for_filters,
    change_active_quick_bar,
    change_arithmetic_combinator_parameters,
    change_decider_combinator_parameters,
    change_entity_label,
    change_item_description,
    change_item_label,
    change_multiplayer_config,
    change_picking_state,
    change_programmable_speaker_alert_parameters,
    change_programmable_speaker_circuit_parameters,
    change_programmable_speaker_parameters,
    change_riding_state,
    change_shooting_state,
    change_train_stop_station,
    change_train_wait_condition,
    change_train_wait_condition_data,
    clear_cursor,
    connect_rolling_stock,
    copy,
    copy_entity_settings,
    copy_opened_blueprint,
    copy_opened_item,
    craft,
    cursor_split,
    cursor_transfer,
    custom_input,
    cycle_blueprint_book_backwards,
    cycle_blueprint_book_forwards,
    deconstruct,
    delete_blueprint_library,
    delete_blueprint_record,
    delete_custom_tag,
    delete_permission_group,
    destroy_item,
    destroy_opened_item,
    disconnect_rolling_stock,
    drag_train_schedule,
    drag_train_wait_condition,
    drop_blueprint_record,
    drop_item,
    edit_blueprint_tool_preview,
    edit_custom_tag,
    edit_permission_group,
    export_blueprint,
    fast_entity_split,
    fast_entity_transfer,
    flush_opened_entity_fluid,
    flush_opened_entity_specific_fluid,
    go_to_train_station,
    grab_blueprint_record,
    gui_checked_state_changed,
    gui_click,
    gui_confirmed,
    gui_elem_changed,
    gui_location_changed,
    gui_selected_tab_changed,
    gui_selection_state_changed,
    gui_switch_state_changed,
    gui_text_changed,
    gui_value_changed,
    import_blueprint,
    import_blueprint_string,
    import_blueprints_filtered,
    import_permissions_string,
    inventory_split,
    inventory_transfer,
    launch_rocket,
    lua_shortcut,
    map_editor_action,
    market_offer,
    mod_settings_changed,
    open_achievements_gui,
    open_blueprint_library_gui,
    open_blueprint_record,
    open_bonus_gui,
    open_character_gui,
    open_current_vehicle_gui,
    open_equipment,
    open_gui,
    open_item,
    open_logistic_gui,
    open_mod_item,
    open_parent_of_opened_item,
    open_production_gui,
    open_technology_gui,
    open_tips_and_tricks_gui,
    open_train_gui,
    open_train_station_gui,
    open_trains_gui,
    paste_entity_settings,
    place_equipment,
    quick_bar_pick_slot,
    quick_bar_set_selected_page,
    quick_bar_set_slot,
    reassign_blueprint,
    remove_cables,
    remove_train_station,
    reset_assembling_machine,
    reset_item,
    reverse_select_area,
    rotate_entity,
    select_area,
    select_blueprint_entities,
    select_entity_slot,
    select_item,
    select_mapper_slot,
    select_next_valid_gun,
    select_tile_slot,
    send_spidertron,
    set_auto_launch_rocket,
    set_autosort_inventory,
    set_behavior_mode,
    set_car_weapons_control,
    set_circuit_condition,
    set_circuit_mode_of_operation,
    set_controller_logistic_trash_filter_item,
    set_deconstruction_item_tile_selection_mode,
    set_deconstruction_item_trees_and_rocks_only,
    set_entity_color,
    set_entity_energy_property,
    set_entity_logistic_trash_filter_item,
    set_filter,
    set_flat_controller_gui,
    set_heat_interface_mode,
    set_heat_interface_temperature,
    set_infinity_container_filter_item,
    set_infinity_container_remove_unfiltered_items,
    set_infinity_pipe_filter,
    set_inserter_max_stack_size,
    set_inventory_bar,
    set_linked_container_link_i_d,
    set_logistic_filter_item,
    set_logistic_filter_signal,
    set_player_color,
    set_recipe_notifications,
    set_request_from_buffers,
    set_research_finished_stops_game,
    set_signal,
    set_splitter_priority,
    set_train_stopped,
    set_trains_limit,
    set_vehicle_automatic_targeting_parameters,
    setup_assembling_machine,
    setup_blueprint,
    setup_single_blueprint_record,
    smart_pipette,
    spawn_item,
    stack_split,
    stack_transfer,
    start_repair,
    start_research,
    start_walking,
    stop_building_by_moving,
    switch_connect_to_logistic_network,
    switch_constant_combinator_state,
    switch_inserter_filter_mode_state,
    switch_power_switch_state,
    switch_to_rename_stop_gui,
    take_equipment,
    toggle_deconstruction_item_entity_filter_mode,
    toggle_deconstruction_item_tile_filter_mode,
    toggle_driving,
    toggle_enable_vehicle_logistics_while_moving,
    toggle_entity_logistic_requests,
    toggle_equipment_movement_bonus,
    toggle_map_editor,
    toggle_personal_logistic_requests,
    toggle_personal_roboport,
    toggle_show_entity_info,
    translate_string,
    undo,
    upgrade,
    upgrade_opened_blueprint_by_item,
    upgrade_opened_blueprint_by_record,
    use_artillery_remote,
    use_item,
    wire_dragging,
    write_to_console,
  }
  enum inventory {
    fuel,
    burnt_result,
    chest,
    furnace_source,
    furnace_result,
    furnace_modules,
    character_main,
    character_guns,
    character_ammo,
    character_armor,
    character_vehicle,
    character_trash,
    god_main,
    editor_main,
    editor_guns,
    editor_ammo,
    editor_armor,
    roboport_robot,
    roboport_material,
    robot_cargo,
    robot_repair,
    assembling_machine_input,
    assembling_machine_output,
    assembling_machine_modules,
    lab_input,
    lab_modules,
    mining_drill_modules,
    item_main,
    rocket_silo_rocket,
    rocket_silo_result,
    rocket,
    car_trunk,
    car_ammo,
    cargo_wagon,
    turret_ammo,
    beacon_modules,
    character_corpse,
    artillery_turret_ammo,
    artillery_wagon_ammo,
    spider_trunk,
    spider_ammo,
    spider_trash,
  }
  enum logistic_member_index {
    logistic_container,
    vehicle_storage,
    character_requester,
    character_storage,
    character_provider,
    generic_on_off_behavior,
  }
  enum logistic_mode {
    none,
    active_provider,
    storage,
    requester,
    passive_provider,
    buffer,
  }
  enum mouse_button_type {
    none,
    left,
    right,
    middle,
  }
  /**
   * A dictionary mapping all top-level prototypes by name to a list of their associated subtypes. This list is organized as a lookup table, meaning it maps the sub-prototype names to `0`. As an example, `defines.prototypes['entity']` looks like this: `{furnace=0, inserter=0, container=0, ...}`.
   *
   * {@link https://lua-api.factorio.com/latest/defines.html#defines.prototypes View documentation}
   */
  const prototypes: {
    readonly [Type in string]?: {
      readonly [Name in string]?: 0 & {
        _notFalsyBrand: any
      }
    }
  }
  enum rail_connection_direction {
    left,
    straight,
    right,
    none,
  }
  enum rail_direction {
    front,
    back,
  }
  enum relative_gui_position {
    top,
    bottom,
    left,
    right,
  }
  enum relative_gui_type {
    accumulator_gui,
    achievement_gui,
    additional_entity_info_gui,
    admin_gui,
    arithmetic_combinator_gui,
    armor_gui,
    assembling_machine_gui,
    assembling_machine_select_recipe_gui,
    beacon_gui,
    blueprint_book_gui,
    blueprint_library_gui,
    blueprint_setup_gui,
    bonus_gui,
    burner_equipment_gui,
    car_gui,
    constant_combinator_gui,
    container_gui,
    controller_gui,
    decider_combinator_gui,
    deconstruction_item_gui,
    electric_energy_interface_gui,
    electric_network_gui,
    entity_variations_gui,
    entity_with_energy_source_gui,
    equipment_grid_gui,
    furnace_gui,
    generic_on_off_entity_gui,
    heat_interface_gui,
    infinity_pipe_gui,
    inserter_gui,
    item_with_inventory_gui,
    lab_gui,
    lamp_gui,
    linked_container_gui,
    loader_gui,
    logistic_gui,
    market_gui,
    mining_drill_gui,
    other_player_gui,
    permissions_gui,
    pipe_gui,
    power_switch_gui,
    production_gui,
    programmable_speaker_gui,
    rail_chain_signal_gui,
    rail_signal_gui,
    reactor_gui,
    rename_stop_gui,
    resource_entity_gui,
    roboport_gui,
    rocket_silo_gui,
    server_config_gui,
    spider_vehicle_gui,
    splitter_gui,
    standalone_character_gui,
    storage_tank_gui,
    tile_variations_gui,
    train_gui,
    train_stop_gui,
    trains_gui,
    transport_belt_gui,
    upgrade_item_gui,
    wall_gui,
  }
  enum render_mode {
    game,
    chart,
    chart_zoomed_in,
  }
  enum rich_text_setting {
    enabled,
    disabled,
    highlight,
  }
  namespace riding {
    enum acceleration {
      nothing,
      accelerating,
      braking,
      reversing,
    }
    enum direction {
      left,
      straight,
      right,
    }
  }
  enum shooting {
    not_shooting,
    shooting_enemies,
    shooting_selected,
  }
  /**
   * State of an ordinary rail signal.
   *
   * {@link https://lua-api.factorio.com/latest/defines.html#defines.signal_state View documentation}
   */
  enum signal_state {
    /**
     * Green.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.signal_state.open View documentation}
     */
    open,
    /**
     * Red.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.signal_state.closed View documentation}
     */
    closed,
    /**
     * Orange.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.signal_state.reserved View documentation}
     */
    reserved,
    /**
     * Red - From circuit network.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.signal_state.reserved_by_circuit_network View documentation}
     */
    reserved_by_circuit_network,
  }
  enum train_state {
    /**
     * Normal state -- following the path.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.train_state.on_the_path View documentation}
     */
    on_the_path,
    /**
     * Had path and lost it -- must stop.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.train_state.path_lost View documentation}
     */
    path_lost,
    /**
     * Doesn't have anywhere to go.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.train_state.no_schedule View documentation}
     */
    no_schedule,
    /**
     * Has no path and is stopped.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.train_state.no_path View documentation}
     */
    no_path,
    /**
     * Braking before a rail signal.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.train_state.arrive_signal View documentation}
     */
    arrive_signal,
    /**
     * Waiting at a signal.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.train_state.wait_signal View documentation}
     */
    wait_signal,
    /**
     * Braking before a station.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.train_state.arrive_station View documentation}
     */
    arrive_station,
    /**
     * Waiting at a station.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.train_state.wait_station View documentation}
     */
    wait_station,
    /**
     * Switched to manual control and has to stop.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.train_state.manual_control_stop View documentation}
     */
    manual_control_stop,
    /**
     * Can move if user explicitly sits in and rides the train.
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.train_state.manual_control View documentation}
     */
    manual_control,
    /**
     * Same as no_path but all candidate train stops are full
     *
     * {@link https://lua-api.factorio.com/latest/defines.html#defines.train_state.destination_full View documentation}
     */
    destination_full,
  }
  enum transport_line {
    left_line,
    right_line,
    left_underground_line,
    right_underground_line,
    secondary_left_line,
    secondary_right_line,
    left_split_line,
    right_split_line,
    secondary_left_split_line,
    secondary_right_split_line,
  }
  enum wire_connection_id {
    electric_pole,
    power_switch_left,
    power_switch_right,
  }
  enum wire_type {
    red,
    green,
    copper,
  }
}
