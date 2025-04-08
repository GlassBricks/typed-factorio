// This is an auto-generated file. Do not edit directly!

/** @noSelfInFile */

import type {
  EventId,
  OnAchievementGainedEvent,
  OnAiCommandCompletedEvent,
  OnAreaClonedEvent,
  OnBiterBaseBuiltEvent,
  OnBrushClonedEvent,
  OnBuildBaseArrivedEvent,
  OnBuiltEntityEvent,
  OnCancelledDeconstructionEvent,
  OnCancelledUpgradeEvent,
  OnCargoPodDeliveredCargoEvent,
  OnCargoPodFinishedAscendingEvent,
  OnCargoPodFinishedDescendingEvent,
  OnCharacterCorpseExpiredEvent,
  OnChartTagAddedEvent,
  OnChartTagModifiedEvent,
  OnChartTagRemovedEvent,
  OnChunkChartedEvent,
  OnChunkDeletedEvent,
  OnChunkGeneratedEvent,
  OnCombatRobotExpiredEvent,
  OnConsoleChatEvent,
  OnConsoleCommandEvent,
  OnCutsceneCancelledEvent,
  OnCutsceneFinishedEvent,
  OnCutsceneStartedEvent,
  OnCutsceneWaypointReachedEvent,
  OnEntityClonedEvent,
  OnEntityColorChangedEvent,
  OnEntityDamagedEvent,
  OnEntityDiedEvent,
  OnEntityLogisticSlotChangedEvent,
  OnEntityRenamedEvent,
  OnEntitySettingsPastedEvent,
  OnEntitySpawnedEvent,
  OnEquipmentInsertedEvent,
  OnEquipmentRemovedEvent,
  OnForceCeaseFireChangedEvent,
  OnForceCreatedEvent,
  OnForceFriendsChangedEvent,
  OnForceResetEvent,
  OnForcesMergedEvent,
  OnForcesMergingEvent,
  OnGameCreatedFromScenarioEvent,
  OnGuiCheckedStateChangedEvent,
  OnGuiClickEvent,
  OnGuiClosedEvent,
  OnGuiConfirmedEvent,
  OnGuiElemChangedEvent,
  OnGuiHoverEvent,
  OnGuiLeaveEvent,
  OnGuiLocationChangedEvent,
  OnGuiOpenedEvent,
  OnGuiSelectedTabChangedEvent,
  OnGuiSelectionStateChangedEvent,
  OnGuiSwitchStateChangedEvent,
  OnGuiTextChangedEvent,
  OnGuiValueChangedEvent,
  OnLandMineArmedEvent,
  OnLuaShortcutEvent,
  OnMarkedForDeconstructionEvent,
  OnMarkedForUpgradeEvent,
  OnMarketItemPurchasedEvent,
  OnModItemOpenedEvent,
  OnMultiplayerInitEvent,
  OnObjectDestroyedEvent,
  OnPermissionGroupAddedEvent,
  OnPermissionGroupDeletedEvent,
  OnPermissionGroupEditedEvent,
  OnPermissionStringImportedEvent,
  OnPickedUpItemEvent,
  OnPlayerAltReverseSelectedAreaEvent,
  OnPlayerAltSelectedAreaEvent,
  OnPlayerAmmoInventoryChangedEvent,
  OnPlayerArmorInventoryChangedEvent,
  OnPlayerBannedEvent,
  OnPlayerBuiltTileEvent,
  OnPlayerCancelledCraftingEvent,
  OnPlayerChangedForceEvent,
  OnPlayerChangedPositionEvent,
  OnPlayerChangedSurfaceEvent,
  OnPlayerCheatModeDisabledEvent,
  OnPlayerCheatModeEnabledEvent,
  OnPlayerClickedGpsTagEvent,
  OnPlayerConfiguredBlueprintEvent,
  OnPlayerControllerChangedEvent,
  OnPlayerCraftedItemEvent,
  OnPlayerCreatedEvent,
  OnPlayerCursorStackChangedEvent,
  OnPlayerDeconstructedAreaEvent,
  OnPlayerDemotedEvent,
  OnPlayerDiedEvent,
  OnPlayerDisplayDensityScaleChangedEvent,
  OnPlayerDisplayResolutionChangedEvent,
  OnPlayerDisplayScaleChangedEvent,
  OnPlayerDrivingChangedStateEvent,
  OnPlayerDroppedItemEvent,
  OnPlayerFastTransferredEvent,
  OnPlayerFlippedEntityEvent,
  OnPlayerFlushedFluidEvent,
  OnPlayerGunInventoryChangedEvent,
  OnPlayerInputMethodChangedEvent,
  OnPlayerJoinedGameEvent,
  OnPlayerKickedEvent,
  OnPlayerLeftGameEvent,
  OnPlayerLocaleChangedEvent,
  OnPlayerMainInventoryChangedEvent,
  OnPlayerMinedEntityEvent,
  OnPlayerMinedItemEvent,
  OnPlayerMinedTileEvent,
  OnPlayerMutedEvent,
  OnPlayerPipetteEvent,
  OnPlayerPlacedEquipmentEvent,
  OnPlayerPromotedEvent,
  OnPlayerRemovedEquipmentEvent,
  OnPlayerRemovedEvent,
  OnPlayerRepairedEntityEvent,
  OnPlayerRespawnedEvent,
  OnPlayerReverseSelectedAreaEvent,
  OnPlayerRotatedEntityEvent,
  OnPlayerSelectedAreaEvent,
  OnPlayerSetQuickBarSlotEvent,
  OnPlayerSetupBlueprintEvent,
  OnPlayerToggledAltModeEvent,
  OnPlayerToggledMapEditorEvent,
  OnPlayerTrashInventoryChangedEvent,
  OnPlayerUnbannedEvent,
  OnPlayerUnmutedEvent,
  OnPlayerUsedCapsuleEvent,
  OnPlayerUsedSpidertronRemoteEvent,
  OnPostEntityDiedEvent,
  OnPreBuildEvent,
  OnPreChunkDeletedEvent,
  OnPreEntitySettingsPastedEvent,
  OnPreGhostDeconstructedEvent,
  OnPreGhostUpgradedEvent,
  OnPrePermissionGroupDeletedEvent,
  OnPrePermissionStringImportedEvent,
  OnPrePlayerCraftedItemEvent,
  OnPrePlayerDiedEvent,
  OnPrePlayerLeftGameEvent,
  OnPrePlayerMinedItemEvent,
  OnPrePlayerRemovedEvent,
  OnPrePlayerToggledMapEditorEvent,
  OnPreRobotExplodedCliffEvent,
  OnPreScenarioFinishedEvent,
  OnPreScriptInventoryResizedEvent,
  OnPreSurfaceClearedEvent,
  OnPreSurfaceDeletedEvent,
  OnRedoAppliedEvent,
  OnResearchCancelledEvent,
  OnResearchFinishedEvent,
  OnResearchMovedEvent,
  OnResearchReversedEvent,
  OnResearchStartedEvent,
  OnResourceDepletedEvent,
  OnRobotBuiltEntityEvent,
  OnRobotBuiltTileEvent,
  OnRobotExplodedCliffEvent,
  OnRobotMinedEntityEvent,
  OnRobotMinedEvent,
  OnRobotMinedTileEvent,
  OnRobotPreMinedEvent,
  OnRocketLaunchedEvent,
  OnRocketLaunchOrderedEvent,
  OnRuntimeModSettingChangedEvent,
  OnScriptInventoryResizedEvent,
  OnScriptPathRequestFinishedEvent,
  OnScriptTriggerEffectEvent,
  OnSectorScannedEvent,
  OnSegmentEntityCreatedEvent,
  OnSelectedEntityChangedEvent,
  OnSingleplayerInitEvent,
  OnSpacePlatformBuiltEntityEvent,
  OnSpacePlatformBuiltTileEvent,
  OnSpacePlatformChangedStateEvent,
  OnSpacePlatformMinedEntityEvent,
  OnSpacePlatformMinedItemEvent,
  OnSpacePlatformMinedTileEvent,
  OnSpacePlatformPreMinedEvent,
  OnSpiderCommandCompletedEvent,
  OnStringTranslatedEvent,
  OnSurfaceClearedEvent,
  OnSurfaceCreatedEvent,
  OnSurfaceDeletedEvent,
  OnSurfaceImportedEvent,
  OnSurfaceRenamedEvent,
  OnTechnologyEffectsResetEvent,
  OnTickEvent,
  OnTrainChangedStateEvent,
  OnTrainCreatedEvent,
  OnTrainScheduleChangedEvent,
  OnTriggerCreatedEntityEvent,
  OnTriggerFiredArtilleryEvent,
  OnUndoAppliedEvent,
  OnUnitAddedToGroupEvent,
  OnUnitGroupCreatedEvent,
  OnUnitGroupFinishedGatheringEvent,
  OnUnitRemovedFromGroupEvent,
  OnWorkerRobotExpiredEvent,
  ScriptRaisedBuiltEvent,
  ScriptRaisedDestroyEvent,
  ScriptRaisedReviveEvent,
  ScriptRaisedSetTilesEvent,
  ScriptRaisedTeleportedEvent,
} from "factorio:runtime"

declare global {
  namespace defines {
    enum alert_type {
      collector_path_blocked,
      custom,
      entity_destroyed,
      entity_under_attack,
      no_material_for_construction,
      no_platform_storage,
      no_roboport_storage,
      no_storage,
      not_enough_construction_robots,
      not_enough_repair_packs,
      pipeline_overextended,
      platform_tile_building_blocked,
      train_no_path,
      train_out_of_fuel,
      turret_fire,
      turret_out_of_ammo,
      unclaimed_cargo,
    }
    /**
     * AI command exit status. See {@link LuaEntity#set_command LuaEntity::set_command}
     * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.behavior_result Online documentation}
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
    enum build_mode {
      normal,
      forced,
      superforced,
    }
    enum cargo_destination {
      /**
       * The default destination type of a cargo pod when created runtime. Setting its destination to any other type will instantly launch it.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.cargo_destination.invalid Online documentation}
       */
      invalid,
      /**
       * Cargo pods with orbit destination are destroyed when ascent is completed.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.cargo_destination.orbit Online documentation}
       */
      orbit,
      /**
       * Any cargo landing pad or space platform hub.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.cargo_destination.station Online documentation}
       */
      station,
      /**
       * Cargo pods will switch destination type from surface to station before starting descent if there is a station available and {@link CargoDestination#position CargoDestination::position} has not been specified. Note, setting the destination to "surface" when the surface is the same as the one the pod is on forces it to find and set a landing position.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.cargo_destination.surface Online documentation}
       */
      surface,
      /**
       * Only used for sending a space platform starter pack to a platform that is waiting for one. Regular deliveries to space platform hubs use {@link defines.cargo_destination.station station} destination type instead.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.cargo_destination.space_platform Online documentation}
       */
      space_platform,
    }
    /**
     * State of a chain signal.
     * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.chain_signal_state Online documentation}
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
    /**
     * Command given to units describing what they should do.
     * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.command Online documentation}
     */
    enum command {
      /**
       * Attack another entity.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.command.attack Online documentation}
       */
      attack = 0,
      /**
       * Go to a specific position.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.command.go_to_location Online documentation}
       */
      go_to_location = 1,
      /**
       * Chain commands together, see {@link defines.compound_command}.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.command.compound Online documentation}
       */
      compound = 2,
      /**
       * Do what your group wants you to do.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.command.group Online documentation}
       */
      group = 3,
      /**
       * Go to a place and attack what you see.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.command.attack_area Online documentation}
       */
      attack_area = 4,
      /**
       * Chill.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.command.wander Online documentation}
       */
      wander = 5,
      /**
       * Flee from another entity.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.command.flee Online documentation}
       */
      flee = 6,
      /**
       * Stop moving and stay where you are.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.command.stop Online documentation}
       */
      stop = 7,
      /**
       * Go to a position and build a base there.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.command.build_base Online documentation}
       */
      build_base = 8,
    }
    /**
     * How commands are joined together in a compound command (see {@link defines.command.compound}).
     * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.compound_command Online documentation}
     */
    enum compound_command {
      /**
       * Fail on first failure. Only succeeds if all commands (executed one after another) succeed.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.compound_command.logical_and Online documentation}
       */
      logical_and,
      /**
       * Succeed on first success. Only fails if all commands (executed one after another) fail.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.compound_command.logical_or Online documentation}
       */
      logical_or,
      /**
       * Execute all commands in sequence and fail or succeed depending on the return status of the last command.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.compound_command.return_last Online documentation}
       */
      return_last,
    }
    namespace control_behavior {
      namespace inserter {
        enum hand_read_mode {
          hold,
          pulse,
        }
      }
      namespace logistic_container {
        enum exclusive_mode {
          send_contents,
          set_requests,
          none,
        }
      }
      namespace lamp {
        enum color_mode {
          color_mapping,
          components,
          packed_rgb,
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
          entire_belt_hold,
        }
      }
      namespace rocket_silo {
        enum read_mode {
          none,
          logistic_inventory,
          orbital_requests,
        }
      }
      namespace roboport {
        enum read_items_mode {
          none,
          logistics,
          missing_requests,
        }
      }
      namespace cargo_landing_pad {
        enum exclusive_mode {
          none,
          send_contents,
          set_requests,
        }
      }
      enum type {
        /**
         * {@link LuaContainerControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.container Online documentation}
         */
        container,
        /**
         * {@link LuaGenericOnOffControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.generic_on_off Online documentation}
         */
        generic_on_off,
        /**
         * {@link LuaInserterControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.inserter Online documentation}
         */
        inserter,
        /**
         * {@link LuaLampControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.lamp Online documentation}
         */
        lamp,
        /**
         * {@link LuaLogisticContainerControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.logistic_container Online documentation}
         */
        logistic_container,
        /**
         * {@link LuaRoboportControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.roboport Online documentation}
         */
        roboport,
        /**
         * {@link LuaStorageTankControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.storage_tank Online documentation}
         */
        storage_tank,
        /**
         * {@link LuaTrainStopControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.train_stop Online documentation}
         */
        train_stop,
        /**
         * {@link LuaDeciderCombinatorControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.decider_combinator Online documentation}
         */
        decider_combinator,
        /**
         * {@link LuaArithmeticCombinatorControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.arithmetic_combinator Online documentation}
         */
        arithmetic_combinator,
        /**
         * {@link LuaConstantCombinatorControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.constant_combinator Online documentation}
         */
        constant_combinator,
        /**
         * {@link LuaTransportBeltControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.transport_belt Online documentation}
         */
        transport_belt,
        /**
         * {@link LuaAccumulatorControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.accumulator Online documentation}
         */
        accumulator,
        /**
         * {@link LuaRailSignalBaseControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.rail_signal Online documentation}
         */
        rail_signal,
        /**
         * {@link LuaRailSignalBaseControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.rail_chain_signal Online documentation}
         */
        rail_chain_signal,
        /**
         * {@link LuaWallControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.wall Online documentation}
         */
        wall,
        /**
         * {@link LuaMiningDrillControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.mining_drill Online documentation}
         */
        mining_drill,
        /**
         * {@link LuaProgrammableSpeakerControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.programmable_speaker Online documentation}
         */
        programmable_speaker,
        /**
         * {@link LuaAssemblingMachineControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.assembling_machine Online documentation}
         */
        assembling_machine,
        /**
         * {@link LuaPumpControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.pump Online documentation}
         */
        pump,
        /**
         * {@link LuaSelectorCombinatorControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.selector_combinator Online documentation}
         */
        selector_combinator,
        /**
         * {@link LuaRocketSiloControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.rocket_silo Online documentation}
         */
        rocket_silo,
        /**
         * {@link LuaTurretControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.turret Online documentation}
         */
        turret,
        /**
         * {@link LuaReactorControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.reactor Online documentation}
         */
        reactor,
        /**
         * {@link LuaSpacePlatformHubControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.space_platform_hub Online documentation}
         */
        space_platform_hub,
        /**
         * {@link LuaArtilleryTurretControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.artillery_turret Online documentation}
         */
        artillery_turret,
        /**
         * {@link LuaAsteroidCollectorControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.asteroid_collector Online documentation}
         */
        asteroid_collector,
        /**
         * {@link LuaRadarControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.radar Online documentation}
         */
        radar,
        /**
         * {@link LuaDisplayPanelControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.display_panel Online documentation}
         */
        display_panel,
        /**
         * {@link LuaLoaderControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.loader Online documentation}
         */
        loader,
        /**
         * {@link LuaCargoLandingPadControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.cargo_landing_pad Online documentation}
         */
        cargo_landing_pad,
        /**
         * {@link LuaAgriculturalTowerControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.agricultural_tower Online documentation}
         */
        agricultural_tower,
        /**
         * {@link LuaFurnaceControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.furnace Online documentation}
         */
        furnace,
        /**
         * {@link LuaProxyContainerControlBehavior}
         * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.control_behavior.type.proxy_container Online documentation}
         */
        proxy_container,
      }
    }
    enum controllers {
      /**
       * Can't interact with the world, can only observe. Used in the multiplayer waiting-to-respawn screen.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.controllers.ghost Online documentation}
       */
      ghost,
      /**
       * The controller controls a character. This is the default controller in freeplay.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.controllers.character Online documentation}
       */
      character,
      /**
       * The controller isn't tied to a character. This is the default controller in sandbox.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.controllers.god Online documentation}
       */
      god,
      /**
       * The Editor Controller near ultimate power to do almost anything in the game.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.controllers.editor Online documentation}
       */
      editor,
      /**
       * The player can't interact with the world, and the camera pans around in a predefined manner.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.controllers.cutscene Online documentation}
       */
      cutscene,
      /**
       * Can't change anything in the world but can view anything.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.controllers.spectator Online documentation}
       */
      spectator,
      /**
       * Can't move/change items but can build ghosts/change settings.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.controllers.remote Online documentation}
       */
      remote,
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
    // See https://forums.factorio.com/viewtopic.php?f=233&t=118305
    /** @omit */
    enum default_icon_size {}
    enum difficulty {
      easy,
      normal,
      hard,
    }
    enum direction {
      north = 0,
      northnortheast = 1,
      northeast = 2,
      eastnortheast = 3,
      east = 4,
      eastsoutheast = 5,
      southeast = 6,
      southsoutheast = 7,
      south = 8,
      southsouthwest = 9,
      southwest = 10,
      westsouthwest = 11,
      west = 12,
      westnorthwest = 13,
      northwest = 14,
      northnorthwest = 15,
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
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.distraction.none Online documentation}
       */
      none,
      /**
       * Attack closer enemy entities with force.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.distraction.by_enemy Online documentation}
       */
      by_enemy,
      /**
       * Attack closer enemy entities, including entities "built" by player (belts, inserters, chests).
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.distraction.by_anything Online documentation}
       */
      by_anything,
      /**
       * Attack when attacked.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.distraction.by_damage Online documentation}
       */
      by_damage,
    }
    enum entity_status {
      working,
      normal,
      /**
       * Used by ghosts.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.ghost Online documentation}
       */
      ghost,
      /**
       * Only used if set through {@link LuaEntity#status LuaEntity::status} or {@link import("factorio:prototype").ContainerPrototype#default_status ContainerPrototype::default_status}.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.broken Online documentation}
       */
      broken,
      no_power,
      low_power,
      no_fuel,
      frozen,
      disabled_by_control_behavior,
      opened_by_circuit_network,
      closed_by_circuit_network,
      disabled_by_script,
      marked_for_deconstruction,
      /**
       * Used by space platform hubs.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.paused Online documentation}
       */
      paused,
      /**
       * Used by generators and solar panels.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.not_plugged_in_electric_network Online documentation}
       */
      not_plugged_in_electric_network,
      /**
       * Used by power switches.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.networks_connected Online documentation}
       */
      networks_connected,
      /**
       * Used by power switches.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.networks_disconnected Online documentation}
       */
      networks_disconnected,
      /**
       * Used by accumulators.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.charging Online documentation}
       */
      charging,
      /**
       * Used by accumulators.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.discharging Online documentation}
       */
      discharging,
      /**
       * Used by accumulators.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.fully_charged Online documentation}
       */
      fully_charged,
      /**
       * Used by logistic containers.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.out_of_logistic_network Online documentation}
       */
      out_of_logistic_network,
      /**
       * Used by assembling machines.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.no_recipe Online documentation}
       */
      no_recipe,
      /**
       * Used by furnaces.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.no_ingredients Online documentation}
       */
      no_ingredients,
      /**
       * Used by boilers, fluid turrets and fluid energy sources: Boiler has no fluid to work with.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.no_input_fluid Online documentation}
       */
      no_input_fluid,
      /**
       * Used by labs.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.no_research_in_progress Online documentation}
       */
      no_research_in_progress,
      /**
       * Used by mining drills.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.no_minable_resources Online documentation}
       */
      no_minable_resources,
      /**
       * Used by cargo bays.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.not_connected_to_hub_or_pad Online documentation}
       */
      not_connected_to_hub_or_pad,
      /**
       * Used by boilers and fluid turrets: Boiler still has some fluid but is about to run out.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.low_input_fluid Online documentation}
       */
      low_input_fluid,
      /**
       * Used by crafting machines.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.fluid_ingredient_shortage Online documentation}
       */
      fluid_ingredient_shortage,
      /**
       * Used by crafting machines, boilers, burner energy sources and reactors: Reactor/burner has full burnt result inventory, boiler has full output fluidbox.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.full_output Online documentation}
       */
      full_output,
      /**
       * Used by agricultural towers.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.not_enough_space_in_output Online documentation}
       */
      not_enough_space_in_output,
      /**
       * Used by burner energy sources.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.full_burnt_result_output Online documentation}
       */
      full_burnt_result_output,
      /**
       * Used by crafting machines.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.item_ingredient_shortage Online documentation}
       */
      item_ingredient_shortage,
      /**
       * Used by mining drills when the mining fluid is missing.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.missing_required_fluid Online documentation}
       */
      missing_required_fluid,
      /**
       * Used by labs.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.missing_science_packs Online documentation}
       */
      missing_science_packs,
      /**
       * Used by inserters.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.waiting_for_source_items Online documentation}
       */
      waiting_for_source_items,
      /**
       * Used by inserters when wait_for_full_hand is set.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.waiting_for_more_items Online documentation}
       */
      waiting_for_more_items,
      /**
       * Used by inserters and mining drills.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.waiting_for_space_in_destination Online documentation}
       */
      waiting_for_space_in_destination,
      /**
       * Used by the rocket silo.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.preparing_rocket_for_launch Online documentation}
       */
      preparing_rocket_for_launch,
      /**
       * Used by the rocket silo.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.waiting_to_launch_rocket Online documentation}
       */
      waiting_to_launch_rocket,
      /**
       * Used by the rocket silo.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.waiting_for_space_in_platform_hub Online documentation}
       */
      waiting_for_space_in_platform_hub,
      /**
       * Used by the rocket silo.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.launching_rocket Online documentation}
       */
      launching_rocket,
      /**
       * Used by thrusters.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.thrust_not_required Online documentation}
       */
      thrust_not_required,
      /**
       * Used by space platform hubs.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.on_the_way Online documentation}
       */
      on_the_way,
      /**
       * Used by space platform hubs.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.waiting_in_orbit Online documentation}
       */
      waiting_in_orbit,
      /**
       * Used by trains.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.waiting_at_stop Online documentation}
       */
      waiting_at_stop,
      /**
       * Used by space platform hubs.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.waiting_for_rockets_to_arrive Online documentation}
       */
      waiting_for_rockets_to_arrive,
      /**
       * Used by space platform hubs.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.not_enough_thrust Online documentation}
       */
      not_enough_thrust,
      /**
       * Used by trains.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.destination_stop_full Online documentation}
       */
      destination_stop_full,
      /**
       * Used by trains and space platform hubs.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.no_path Online documentation}
       */
      no_path,
      /**
       * Used by beacons.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.no_modules_to_transmit Online documentation}
       */
      no_modules_to_transmit,
      /**
       * Used by roboports.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.recharging_after_power_outage Online documentation}
       */
      recharging_after_power_outage,
      /**
       * Used by inserters targeting entity ghosts.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.waiting_for_target_to_be_built Online documentation}
       */
      waiting_for_target_to_be_built,
      /**
       * Used by inserters targeting rails.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.waiting_for_train Online documentation}
       */
      waiting_for_train,
      /**
       * Used by ammo turrets.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.no_ammo Online documentation}
       */
      no_ammo,
      /**
       * Used by heat energy sources.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.low_temperature Online documentation}
       */
      low_temperature,
      /**
       * Used by constant combinators: Combinator is turned off via switch in GUI.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.disabled Online documentation}
       */
      disabled,
      /**
       * Used by lamps.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.turned_off_during_daytime Online documentation}
       */
      turned_off_during_daytime,
      /**
       * Used by rail signals.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.not_connected_to_rail Online documentation}
       */
      not_connected_to_rail,
      /**
       * Used by rail signals.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.cant_divide_segments Online documentation}
       */
      cant_divide_segments,
      /**
       * Used by filter inserters.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.no_filter Online documentation}
       */
      no_filter,
      /**
       * Used by agricultural towers.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.no_spot_seedable_by_inputs Online documentation}
       */
      no_spot_seedable_by_inputs,
      /**
       * Used by agricultural towers.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.waiting_for_plants_to_grow Online documentation}
       */
      waiting_for_plants_to_grow,
      /**
       * Used by asteroid collectors.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.computing_navigation Online documentation}
       */
      computing_navigation,
      /**
       * Used by pipes, pipes to ground and storage tanks.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.pipeline_overextended Online documentation}
       */
      pipeline_overextended,
      /**
       * Used by assembling machines.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.entity_status.recipe_not_researched Online documentation}
       */
      recipe_not_researched,
    }
    enum entity_status_diode {
      green,
      red,
      yellow,
    }
    /**
     * See the {@linkplain https://lua-api.factorio.com/2.0.44/events.html events page} for more info on what events contain and when they get raised.
     * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.events Online documentation}
     */
    namespace events {
      /**
       * Event type: {@link OnAchievementGainedEvent}
       */
      const on_achievement_gained: EventId<OnAchievementGainedEvent>
      /**
       * Event type: {@link OnAiCommandCompletedEvent}
       */
      const on_ai_command_completed: EventId<OnAiCommandCompletedEvent>
      /**
       * Event type: {@link OnAreaClonedEvent}
       */
      const on_area_cloned: EventId<OnAreaClonedEvent>
      /**
       * Event type: {@link OnBiterBaseBuiltEvent}
       */
      const on_biter_base_built: EventId<OnBiterBaseBuiltEvent>
      /**
       * Event type: {@link OnBrushClonedEvent}
       */
      const on_brush_cloned: EventId<OnBrushClonedEvent>
      /**
       * Event type: {@link OnBuildBaseArrivedEvent}
       */
      const on_build_base_arrived: EventId<OnBuildBaseArrivedEvent>
      /**
       * Event type: {@link OnBuiltEntityEvent}
       */
      const on_built_entity: EventId<OnBuiltEntityEvent>
      /**
       * Event type: {@link OnCancelledDeconstructionEvent}
       */
      const on_cancelled_deconstruction: EventId<OnCancelledDeconstructionEvent>
      /**
       * Event type: {@link OnCancelledUpgradeEvent}
       */
      const on_cancelled_upgrade: EventId<OnCancelledUpgradeEvent>
      /**
       * Event type: {@link OnCargoPodDeliveredCargoEvent}
       */
      const on_cargo_pod_delivered_cargo: EventId<OnCargoPodDeliveredCargoEvent>
      /**
       * Event type: {@link OnCargoPodFinishedAscendingEvent}
       */
      const on_cargo_pod_finished_ascending: EventId<OnCargoPodFinishedAscendingEvent>
      /**
       * Event type: {@link OnCargoPodFinishedDescendingEvent}
       */
      const on_cargo_pod_finished_descending: EventId<OnCargoPodFinishedDescendingEvent>
      /**
       * Event type: {@link OnCharacterCorpseExpiredEvent}
       */
      const on_character_corpse_expired: EventId<OnCharacterCorpseExpiredEvent>
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
       * Event type: {@link OnChunkChartedEvent}
       */
      const on_chunk_charted: EventId<OnChunkChartedEvent>
      /**
       * Event type: {@link OnChunkDeletedEvent}
       */
      const on_chunk_deleted: EventId<OnChunkDeletedEvent>
      /**
       * Event type: {@link OnChunkGeneratedEvent}
       */
      const on_chunk_generated: EventId<OnChunkGeneratedEvent>
      /**
       * Event type: {@link OnCombatRobotExpiredEvent}
       */
      const on_combat_robot_expired: EventId<OnCombatRobotExpiredEvent>
      /**
       * Event type: {@link OnConsoleChatEvent}
       */
      const on_console_chat: EventId<OnConsoleChatEvent>
      /**
       * Event type: {@link OnConsoleCommandEvent}
       */
      const on_console_command: EventId<OnConsoleCommandEvent>
      /**
       * Event type: {@link OnCutsceneCancelledEvent}
       */
      const on_cutscene_cancelled: EventId<OnCutsceneCancelledEvent>
      /**
       * Event type: {@link OnCutsceneFinishedEvent}
       */
      const on_cutscene_finished: EventId<OnCutsceneFinishedEvent>
      /**
       * Event type: {@link OnCutsceneStartedEvent}
       */
      const on_cutscene_started: EventId<OnCutsceneStartedEvent>
      /**
       * Event type: {@link OnCutsceneWaypointReachedEvent}
       */
      const on_cutscene_waypoint_reached: EventId<OnCutsceneWaypointReachedEvent>
      /**
       * Event type: {@link OnEntityClonedEvent}
       */
      const on_entity_cloned: EventId<OnEntityClonedEvent>
      /**
       * Event type: {@link OnEntityColorChangedEvent}
       */
      const on_entity_color_changed: EventId<OnEntityColorChangedEvent>
      /**
       * Event type: {@link OnEntityDamagedEvent}
       */
      const on_entity_damaged: EventId<OnEntityDamagedEvent>
      /**
       * Event type: {@link OnEntityDiedEvent}
       */
      const on_entity_died: EventId<OnEntityDiedEvent>
      /**
       * Event type: {@link OnEntityLogisticSlotChangedEvent}
       */
      const on_entity_logistic_slot_changed: EventId<OnEntityLogisticSlotChangedEvent>
      /**
       * Event type: {@link OnEntityRenamedEvent}
       */
      const on_entity_renamed: EventId<OnEntityRenamedEvent>
      /**
       * Event type: {@link OnEntitySettingsPastedEvent}
       */
      const on_entity_settings_pasted: EventId<OnEntitySettingsPastedEvent>
      /**
       * Event type: {@link OnEntitySpawnedEvent}
       */
      const on_entity_spawned: EventId<OnEntitySpawnedEvent>
      /**
       * Event type: {@link OnEquipmentInsertedEvent}
       */
      const on_equipment_inserted: EventId<OnEquipmentInsertedEvent>
      /**
       * Event type: {@link OnEquipmentRemovedEvent}
       */
      const on_equipment_removed: EventId<OnEquipmentRemovedEvent>
      /**
       * Event type: {@link OnForceCeaseFireChangedEvent}
       */
      const on_force_cease_fire_changed: EventId<OnForceCeaseFireChangedEvent>
      /**
       * Event type: {@link OnForceCreatedEvent}
       */
      const on_force_created: EventId<OnForceCreatedEvent>
      /**
       * Event type: {@link OnForceFriendsChangedEvent}
       */
      const on_force_friends_changed: EventId<OnForceFriendsChangedEvent>
      /**
       * Event type: {@link OnForceResetEvent}
       */
      const on_force_reset: EventId<OnForceResetEvent>
      /**
       * Event type: {@link OnForcesMergedEvent}
       */
      const on_forces_merged: EventId<OnForcesMergedEvent>
      /**
       * Event type: {@link OnForcesMergingEvent}
       */
      const on_forces_merging: EventId<OnForcesMergingEvent>
      /**
       * Event type: {@link OnGameCreatedFromScenarioEvent}
       */
      const on_game_created_from_scenario: EventId<OnGameCreatedFromScenarioEvent>
      /**
       * Event type: {@link OnGuiCheckedStateChangedEvent}
       */
      const on_gui_checked_state_changed: EventId<OnGuiCheckedStateChangedEvent>
      /**
       * Event type: {@link OnGuiClickEvent}
       */
      const on_gui_click: EventId<OnGuiClickEvent>
      /**
       * Event type: {@link OnGuiClosedEvent}
       */
      const on_gui_closed: EventId<OnGuiClosedEvent>
      /**
       * Event type: {@link OnGuiConfirmedEvent}
       */
      const on_gui_confirmed: EventId<OnGuiConfirmedEvent>
      /**
       * Event type: {@link OnGuiElemChangedEvent}
       */
      const on_gui_elem_changed: EventId<OnGuiElemChangedEvent>
      /**
       * Event type: {@link OnGuiHoverEvent}
       */
      const on_gui_hover: EventId<OnGuiHoverEvent>
      /**
       * Event type: {@link OnGuiLeaveEvent}
       */
      const on_gui_leave: EventId<OnGuiLeaveEvent>
      /**
       * Event type: {@link OnGuiLocationChangedEvent}
       */
      const on_gui_location_changed: EventId<OnGuiLocationChangedEvent>
      /**
       * Event type: {@link OnGuiOpenedEvent}
       */
      const on_gui_opened: EventId<OnGuiOpenedEvent>
      /**
       * Event type: {@link OnGuiSelectedTabChangedEvent}
       */
      const on_gui_selected_tab_changed: EventId<OnGuiSelectedTabChangedEvent>
      /**
       * Event type: {@link OnGuiSelectionStateChangedEvent}
       */
      const on_gui_selection_state_changed: EventId<OnGuiSelectionStateChangedEvent>
      /**
       * Event type: {@link OnGuiSwitchStateChangedEvent}
       */
      const on_gui_switch_state_changed: EventId<OnGuiSwitchStateChangedEvent>
      /**
       * Event type: {@link OnGuiTextChangedEvent}
       */
      const on_gui_text_changed: EventId<OnGuiTextChangedEvent>
      /**
       * Event type: {@link OnGuiValueChangedEvent}
       */
      const on_gui_value_changed: EventId<OnGuiValueChangedEvent>
      /**
       * Event type: {@link OnLandMineArmedEvent}
       */
      const on_land_mine_armed: EventId<OnLandMineArmedEvent>
      /**
       * Event type: {@link OnLuaShortcutEvent}
       */
      const on_lua_shortcut: EventId<OnLuaShortcutEvent>
      /**
       * Event type: {@link OnMarkedForDeconstructionEvent}
       */
      const on_marked_for_deconstruction: EventId<OnMarkedForDeconstructionEvent>
      /**
       * Event type: {@link OnMarkedForUpgradeEvent}
       */
      const on_marked_for_upgrade: EventId<OnMarkedForUpgradeEvent>
      /**
       * Event type: {@link OnMarketItemPurchasedEvent}
       */
      const on_market_item_purchased: EventId<OnMarketItemPurchasedEvent>
      /**
       * Event type: {@link OnModItemOpenedEvent}
       */
      const on_mod_item_opened: EventId<OnModItemOpenedEvent>
      /**
       * Event type: {@link OnMultiplayerInitEvent}
       */
      const on_multiplayer_init: EventId<OnMultiplayerInitEvent>
      /**
       * Event type: {@link OnObjectDestroyedEvent}
       */
      const on_object_destroyed: EventId<OnObjectDestroyedEvent>
      /**
       * Event type: {@link OnPermissionGroupAddedEvent}
       */
      const on_permission_group_added: EventId<OnPermissionGroupAddedEvent>
      /**
       * Event type: {@link OnPermissionGroupDeletedEvent}
       */
      const on_permission_group_deleted: EventId<OnPermissionGroupDeletedEvent>
      /**
       * Event type: {@link OnPermissionGroupEditedEvent}
       */
      const on_permission_group_edited: EventId<OnPermissionGroupEditedEvent>
      /**
       * Event type: {@link OnPermissionStringImportedEvent}
       */
      const on_permission_string_imported: EventId<OnPermissionStringImportedEvent>
      /**
       * Event type: {@link OnPickedUpItemEvent}
       */
      const on_picked_up_item: EventId<OnPickedUpItemEvent>
      /**
       * Event type: {@link OnPlayerAltReverseSelectedAreaEvent}
       */
      const on_player_alt_reverse_selected_area: EventId<OnPlayerAltReverseSelectedAreaEvent>
      /**
       * Event type: {@link OnPlayerAltSelectedAreaEvent}
       */
      const on_player_alt_selected_area: EventId<OnPlayerAltSelectedAreaEvent>
      /**
       * Event type: {@link OnPlayerAmmoInventoryChangedEvent}
       */
      const on_player_ammo_inventory_changed: EventId<OnPlayerAmmoInventoryChangedEvent>
      /**
       * Event type: {@link OnPlayerArmorInventoryChangedEvent}
       */
      const on_player_armor_inventory_changed: EventId<OnPlayerArmorInventoryChangedEvent>
      /**
       * Event type: {@link OnPlayerBannedEvent}
       */
      const on_player_banned: EventId<OnPlayerBannedEvent>
      /**
       * Event type: {@link OnPlayerBuiltTileEvent}
       */
      const on_player_built_tile: EventId<OnPlayerBuiltTileEvent>
      /**
       * Event type: {@link OnPlayerCancelledCraftingEvent}
       */
      const on_player_cancelled_crafting: EventId<OnPlayerCancelledCraftingEvent>
      /**
       * Event type: {@link OnPlayerChangedForceEvent}
       */
      const on_player_changed_force: EventId<OnPlayerChangedForceEvent>
      /**
       * Event type: {@link OnPlayerChangedPositionEvent}
       */
      const on_player_changed_position: EventId<OnPlayerChangedPositionEvent>
      /**
       * Event type: {@link OnPlayerChangedSurfaceEvent}
       */
      const on_player_changed_surface: EventId<OnPlayerChangedSurfaceEvent>
      /**
       * Event type: {@link OnPlayerCheatModeDisabledEvent}
       */
      const on_player_cheat_mode_disabled: EventId<OnPlayerCheatModeDisabledEvent>
      /**
       * Event type: {@link OnPlayerCheatModeEnabledEvent}
       */
      const on_player_cheat_mode_enabled: EventId<OnPlayerCheatModeEnabledEvent>
      /**
       * Event type: {@link OnPlayerClickedGpsTagEvent}
       */
      const on_player_clicked_gps_tag: EventId<OnPlayerClickedGpsTagEvent>
      /**
       * Event type: {@link OnPlayerConfiguredBlueprintEvent}
       */
      const on_player_configured_blueprint: EventId<OnPlayerConfiguredBlueprintEvent>
      /**
       * Event type: {@link OnPlayerControllerChangedEvent}
       */
      const on_player_controller_changed: EventId<OnPlayerControllerChangedEvent>
      /**
       * Event type: {@link OnPlayerCraftedItemEvent}
       */
      const on_player_crafted_item: EventId<OnPlayerCraftedItemEvent>
      /**
       * Event type: {@link OnPlayerCreatedEvent}
       */
      const on_player_created: EventId<OnPlayerCreatedEvent>
      /**
       * Event type: {@link OnPlayerCursorStackChangedEvent}
       */
      const on_player_cursor_stack_changed: EventId<OnPlayerCursorStackChangedEvent>
      /**
       * Event type: {@link OnPlayerDeconstructedAreaEvent}
       */
      const on_player_deconstructed_area: EventId<OnPlayerDeconstructedAreaEvent>
      /**
       * Event type: {@link OnPlayerDemotedEvent}
       */
      const on_player_demoted: EventId<OnPlayerDemotedEvent>
      /**
       * Event type: {@link OnPlayerDiedEvent}
       */
      const on_player_died: EventId<OnPlayerDiedEvent>
      /**
       * Event type: {@link OnPlayerDisplayDensityScaleChangedEvent}
       */
      const on_player_display_density_scale_changed: EventId<OnPlayerDisplayDensityScaleChangedEvent>
      /**
       * Event type: {@link OnPlayerDisplayResolutionChangedEvent}
       */
      const on_player_display_resolution_changed: EventId<OnPlayerDisplayResolutionChangedEvent>
      /**
       * Event type: {@link OnPlayerDisplayScaleChangedEvent}
       */
      const on_player_display_scale_changed: EventId<OnPlayerDisplayScaleChangedEvent>
      /**
       * Event type: {@link OnPlayerDrivingChangedStateEvent}
       */
      const on_player_driving_changed_state: EventId<OnPlayerDrivingChangedStateEvent>
      /**
       * Event type: {@link OnPlayerDroppedItemEvent}
       */
      const on_player_dropped_item: EventId<OnPlayerDroppedItemEvent>
      /**
       * Event type: {@link OnPlayerFastTransferredEvent}
       */
      const on_player_fast_transferred: EventId<OnPlayerFastTransferredEvent>
      /**
       * Event type: {@link OnPlayerFlippedEntityEvent}
       */
      const on_player_flipped_entity: EventId<OnPlayerFlippedEntityEvent>
      /**
       * Event type: {@link OnPlayerFlushedFluidEvent}
       */
      const on_player_flushed_fluid: EventId<OnPlayerFlushedFluidEvent>
      /**
       * Event type: {@link OnPlayerGunInventoryChangedEvent}
       */
      const on_player_gun_inventory_changed: EventId<OnPlayerGunInventoryChangedEvent>
      /**
       * Event type: {@link OnPlayerInputMethodChangedEvent}
       */
      const on_player_input_method_changed: EventId<OnPlayerInputMethodChangedEvent>
      /**
       * Event type: {@link OnPlayerJoinedGameEvent}
       */
      const on_player_joined_game: EventId<OnPlayerJoinedGameEvent>
      /**
       * Event type: {@link OnPlayerKickedEvent}
       */
      const on_player_kicked: EventId<OnPlayerKickedEvent>
      /**
       * Event type: {@link OnPlayerLeftGameEvent}
       */
      const on_player_left_game: EventId<OnPlayerLeftGameEvent>
      /**
       * Event type: {@link OnPlayerLocaleChangedEvent}
       */
      const on_player_locale_changed: EventId<OnPlayerLocaleChangedEvent>
      /**
       * Event type: {@link OnPlayerMainInventoryChangedEvent}
       */
      const on_player_main_inventory_changed: EventId<OnPlayerMainInventoryChangedEvent>
      /**
       * Event type: {@link OnPlayerMinedEntityEvent}
       */
      const on_player_mined_entity: EventId<OnPlayerMinedEntityEvent>
      /**
       * Event type: {@link OnPlayerMinedItemEvent}
       */
      const on_player_mined_item: EventId<OnPlayerMinedItemEvent>
      /**
       * Event type: {@link OnPlayerMinedTileEvent}
       */
      const on_player_mined_tile: EventId<OnPlayerMinedTileEvent>
      /**
       * Event type: {@link OnPlayerMutedEvent}
       */
      const on_player_muted: EventId<OnPlayerMutedEvent>
      /**
       * Event type: {@link OnPlayerPipetteEvent}
       */
      const on_player_pipette: EventId<OnPlayerPipetteEvent>
      /**
       * Event type: {@link OnPlayerPlacedEquipmentEvent}
       */
      const on_player_placed_equipment: EventId<OnPlayerPlacedEquipmentEvent>
      /**
       * Event type: {@link OnPlayerPromotedEvent}
       */
      const on_player_promoted: EventId<OnPlayerPromotedEvent>
      /**
       * Event type: {@link OnPlayerRemovedEvent}
       */
      const on_player_removed: EventId<OnPlayerRemovedEvent>
      /**
       * Event type: {@link OnPlayerRemovedEquipmentEvent}
       */
      const on_player_removed_equipment: EventId<OnPlayerRemovedEquipmentEvent>
      /**
       * Event type: {@link OnPlayerRepairedEntityEvent}
       */
      const on_player_repaired_entity: EventId<OnPlayerRepairedEntityEvent>
      /**
       * Event type: {@link OnPlayerRespawnedEvent}
       */
      const on_player_respawned: EventId<OnPlayerRespawnedEvent>
      /**
       * Event type: {@link OnPlayerReverseSelectedAreaEvent}
       */
      const on_player_reverse_selected_area: EventId<OnPlayerReverseSelectedAreaEvent>
      /**
       * Event type: {@link OnPlayerRotatedEntityEvent}
       */
      const on_player_rotated_entity: EventId<OnPlayerRotatedEntityEvent>
      /**
       * Event type: {@link OnPlayerSelectedAreaEvent}
       */
      const on_player_selected_area: EventId<OnPlayerSelectedAreaEvent>
      /**
       * Event type: {@link OnPlayerSetQuickBarSlotEvent}
       */
      const on_player_set_quick_bar_slot: EventId<OnPlayerSetQuickBarSlotEvent>
      /**
       * Event type: {@link OnPlayerSetupBlueprintEvent}
       */
      const on_player_setup_blueprint: EventId<OnPlayerSetupBlueprintEvent>
      /**
       * Event type: {@link OnPlayerToggledAltModeEvent}
       */
      const on_player_toggled_alt_mode: EventId<OnPlayerToggledAltModeEvent>
      /**
       * Event type: {@link OnPlayerToggledMapEditorEvent}
       */
      const on_player_toggled_map_editor: EventId<OnPlayerToggledMapEditorEvent>
      /**
       * Event type: {@link OnPlayerTrashInventoryChangedEvent}
       */
      const on_player_trash_inventory_changed: EventId<OnPlayerTrashInventoryChangedEvent>
      /**
       * Event type: {@link OnPlayerUnbannedEvent}
       */
      const on_player_unbanned: EventId<OnPlayerUnbannedEvent>
      /**
       * Event type: {@link OnPlayerUnmutedEvent}
       */
      const on_player_unmuted: EventId<OnPlayerUnmutedEvent>
      /**
       * Event type: {@link OnPlayerUsedCapsuleEvent}
       */
      const on_player_used_capsule: EventId<OnPlayerUsedCapsuleEvent>
      /**
       * Event type: {@link OnPlayerUsedSpidertronRemoteEvent}
       */
      const on_player_used_spidertron_remote: EventId<OnPlayerUsedSpidertronRemoteEvent>
      /**
       * Event type: {@link OnPostEntityDiedEvent}
       */
      const on_post_entity_died: EventId<OnPostEntityDiedEvent>
      /**
       * Event type: {@link OnPreBuildEvent}
       */
      const on_pre_build: EventId<OnPreBuildEvent>
      /**
       * Event type: {@link OnPreChunkDeletedEvent}
       */
      const on_pre_chunk_deleted: EventId<OnPreChunkDeletedEvent>
      /**
       * Event type: {@link OnPreEntitySettingsPastedEvent}
       */
      const on_pre_entity_settings_pasted: EventId<OnPreEntitySettingsPastedEvent>
      /**
       * Event type: {@link OnPreGhostDeconstructedEvent}
       */
      const on_pre_ghost_deconstructed: EventId<OnPreGhostDeconstructedEvent>
      /**
       * Event type: {@link OnPreGhostUpgradedEvent}
       */
      const on_pre_ghost_upgraded: EventId<OnPreGhostUpgradedEvent>
      /**
       * Event type: {@link OnPrePermissionGroupDeletedEvent}
       */
      const on_pre_permission_group_deleted: EventId<OnPrePermissionGroupDeletedEvent>
      /**
       * Event type: {@link OnPrePermissionStringImportedEvent}
       */
      const on_pre_permission_string_imported: EventId<OnPrePermissionStringImportedEvent>
      /**
       * Event type: {@link OnPrePlayerCraftedItemEvent}
       */
      const on_pre_player_crafted_item: EventId<OnPrePlayerCraftedItemEvent>
      /**
       * Event type: {@link OnPrePlayerDiedEvent}
       */
      const on_pre_player_died: EventId<OnPrePlayerDiedEvent>
      /**
       * Event type: {@link OnPrePlayerLeftGameEvent}
       */
      const on_pre_player_left_game: EventId<OnPrePlayerLeftGameEvent>
      /**
       * Event type: {@link OnPrePlayerMinedItemEvent}
       */
      const on_pre_player_mined_item: EventId<OnPrePlayerMinedItemEvent>
      /**
       * Event type: {@link OnPrePlayerRemovedEvent}
       */
      const on_pre_player_removed: EventId<OnPrePlayerRemovedEvent>
      /**
       * Event type: {@link OnPrePlayerToggledMapEditorEvent}
       */
      const on_pre_player_toggled_map_editor: EventId<OnPrePlayerToggledMapEditorEvent>
      /**
       * Event type: {@link OnPreRobotExplodedCliffEvent}
       */
      const on_pre_robot_exploded_cliff: EventId<OnPreRobotExplodedCliffEvent>
      /**
       * Event type: {@link OnPreScenarioFinishedEvent}
       */
      const on_pre_scenario_finished: EventId<OnPreScenarioFinishedEvent>
      /**
       * Event type: {@link OnPreScriptInventoryResizedEvent}
       */
      const on_pre_script_inventory_resized: EventId<OnPreScriptInventoryResizedEvent>
      /**
       * Event type: {@link OnPreSurfaceClearedEvent}
       */
      const on_pre_surface_cleared: EventId<OnPreSurfaceClearedEvent>
      /**
       * Event type: {@link OnPreSurfaceDeletedEvent}
       */
      const on_pre_surface_deleted: EventId<OnPreSurfaceDeletedEvent>
      /**
       * Event type: {@link OnRedoAppliedEvent}
       */
      const on_redo_applied: EventId<OnRedoAppliedEvent>
      /**
       * Event type: {@link OnResearchCancelledEvent}
       */
      const on_research_cancelled: EventId<OnResearchCancelledEvent>
      /**
       * Event type: {@link OnResearchFinishedEvent}
       */
      const on_research_finished: EventId<OnResearchFinishedEvent>
      /**
       * Event type: {@link OnResearchMovedEvent}
       */
      const on_research_moved: EventId<OnResearchMovedEvent>
      /**
       * Event type: {@link OnResearchReversedEvent}
       */
      const on_research_reversed: EventId<OnResearchReversedEvent>
      /**
       * Event type: {@link OnResearchStartedEvent}
       */
      const on_research_started: EventId<OnResearchStartedEvent>
      /**
       * Event type: {@link OnResourceDepletedEvent}
       */
      const on_resource_depleted: EventId<OnResourceDepletedEvent>
      /**
       * Event type: {@link OnRobotBuiltEntityEvent}
       */
      const on_robot_built_entity: EventId<OnRobotBuiltEntityEvent>
      /**
       * Event type: {@link OnRobotBuiltTileEvent}
       */
      const on_robot_built_tile: EventId<OnRobotBuiltTileEvent>
      /**
       * Event type: {@link OnRobotExplodedCliffEvent}
       */
      const on_robot_exploded_cliff: EventId<OnRobotExplodedCliffEvent>
      /**
       * Event type: {@link OnRobotMinedEvent}
       */
      const on_robot_mined: EventId<OnRobotMinedEvent>
      /**
       * Event type: {@link OnRobotMinedEntityEvent}
       */
      const on_robot_mined_entity: EventId<OnRobotMinedEntityEvent>
      /**
       * Event type: {@link OnRobotMinedTileEvent}
       */
      const on_robot_mined_tile: EventId<OnRobotMinedTileEvent>
      /**
       * Event type: {@link OnRobotPreMinedEvent}
       */
      const on_robot_pre_mined: EventId<OnRobotPreMinedEvent>
      /**
       * Event type: {@link OnRocketLaunchOrderedEvent}
       */
      const on_rocket_launch_ordered: EventId<OnRocketLaunchOrderedEvent>
      /**
       * Event type: {@link OnRocketLaunchedEvent}
       */
      const on_rocket_launched: EventId<OnRocketLaunchedEvent>
      /**
       * Event type: {@link OnRuntimeModSettingChangedEvent}
       */
      const on_runtime_mod_setting_changed: EventId<OnRuntimeModSettingChangedEvent>
      /**
       * Event type: {@link OnScriptInventoryResizedEvent}
       */
      const on_script_inventory_resized: EventId<OnScriptInventoryResizedEvent>
      /**
       * Event type: {@link OnScriptPathRequestFinishedEvent}
       */
      const on_script_path_request_finished: EventId<OnScriptPathRequestFinishedEvent>
      /**
       * Event type: {@link OnScriptTriggerEffectEvent}
       */
      const on_script_trigger_effect: EventId<OnScriptTriggerEffectEvent>
      /**
       * Event type: {@link OnSectorScannedEvent}
       */
      const on_sector_scanned: EventId<OnSectorScannedEvent>
      /**
       * Event type: {@link OnSegmentEntityCreatedEvent}
       */
      const on_segment_entity_created: EventId<OnSegmentEntityCreatedEvent>
      /**
       * Event type: {@link OnSelectedEntityChangedEvent}
       */
      const on_selected_entity_changed: EventId<OnSelectedEntityChangedEvent>
      /**
       * Event type: {@link OnSingleplayerInitEvent}
       */
      const on_singleplayer_init: EventId<OnSingleplayerInitEvent>
      /**
       * Event type: {@link OnSpacePlatformBuiltEntityEvent}
       */
      const on_space_platform_built_entity: EventId<OnSpacePlatformBuiltEntityEvent>
      /**
       * Event type: {@link OnSpacePlatformBuiltTileEvent}
       */
      const on_space_platform_built_tile: EventId<OnSpacePlatformBuiltTileEvent>
      /**
       * Event type: {@link OnSpacePlatformChangedStateEvent}
       */
      const on_space_platform_changed_state: EventId<OnSpacePlatformChangedStateEvent>
      /**
       * Event type: {@link OnSpacePlatformMinedEntityEvent}
       */
      const on_space_platform_mined_entity: EventId<OnSpacePlatformMinedEntityEvent>
      /**
       * Event type: {@link OnSpacePlatformMinedItemEvent}
       */
      const on_space_platform_mined_item: EventId<OnSpacePlatformMinedItemEvent>
      /**
       * Event type: {@link OnSpacePlatformMinedTileEvent}
       */
      const on_space_platform_mined_tile: EventId<OnSpacePlatformMinedTileEvent>
      /**
       * Event type: {@link OnSpacePlatformPreMinedEvent}
       */
      const on_space_platform_pre_mined: EventId<OnSpacePlatformPreMinedEvent>
      /**
       * Event type: {@link OnSpiderCommandCompletedEvent}
       */
      const on_spider_command_completed: EventId<OnSpiderCommandCompletedEvent>
      /**
       * Event type: {@link OnStringTranslatedEvent}
       */
      const on_string_translated: EventId<OnStringTranslatedEvent>
      /**
       * Event type: {@link OnSurfaceClearedEvent}
       */
      const on_surface_cleared: EventId<OnSurfaceClearedEvent>
      /**
       * Event type: {@link OnSurfaceCreatedEvent}
       */
      const on_surface_created: EventId<OnSurfaceCreatedEvent>
      /**
       * Event type: {@link OnSurfaceDeletedEvent}
       */
      const on_surface_deleted: EventId<OnSurfaceDeletedEvent>
      /**
       * Event type: {@link OnSurfaceImportedEvent}
       */
      const on_surface_imported: EventId<OnSurfaceImportedEvent>
      /**
       * Event type: {@link OnSurfaceRenamedEvent}
       */
      const on_surface_renamed: EventId<OnSurfaceRenamedEvent>
      /**
       * Event type: {@link OnTechnologyEffectsResetEvent}
       */
      const on_technology_effects_reset: EventId<OnTechnologyEffectsResetEvent>
      /**
       * Event type: {@link OnTickEvent}
       */
      const on_tick: EventId<OnTickEvent>
      /**
       * Event type: {@link OnTrainChangedStateEvent}
       */
      const on_train_changed_state: EventId<OnTrainChangedStateEvent>
      /**
       * Event type: {@link OnTrainCreatedEvent}
       */
      const on_train_created: EventId<OnTrainCreatedEvent>
      /**
       * Event type: {@link OnTrainScheduleChangedEvent}
       */
      const on_train_schedule_changed: EventId<OnTrainScheduleChangedEvent>
      /**
       * Event type: {@link OnTriggerCreatedEntityEvent}
       */
      const on_trigger_created_entity: EventId<OnTriggerCreatedEntityEvent>
      /**
       * Event type: {@link OnTriggerFiredArtilleryEvent}
       */
      const on_trigger_fired_artillery: EventId<OnTriggerFiredArtilleryEvent>
      /**
       * Event type: {@link OnUndoAppliedEvent}
       */
      const on_undo_applied: EventId<OnUndoAppliedEvent>
      /**
       * Event type: {@link OnUnitAddedToGroupEvent}
       */
      const on_unit_added_to_group: EventId<OnUnitAddedToGroupEvent>
      /**
       * Event type: {@link OnUnitGroupCreatedEvent}
       */
      const on_unit_group_created: EventId<OnUnitGroupCreatedEvent>
      /**
       * Event type: {@link OnUnitGroupFinishedGatheringEvent}
       */
      const on_unit_group_finished_gathering: EventId<OnUnitGroupFinishedGatheringEvent>
      /**
       * Event type: {@link OnUnitRemovedFromGroupEvent}
       */
      const on_unit_removed_from_group: EventId<OnUnitRemovedFromGroupEvent>
      /**
       * Event type: {@link OnWorkerRobotExpiredEvent}
       */
      const on_worker_robot_expired: EventId<OnWorkerRobotExpiredEvent>
      /**
       * Event type: {@link ScriptRaisedBuiltEvent}
       */
      const script_raised_built: EventId<ScriptRaisedBuiltEvent>
      /**
       * Event type: {@link ScriptRaisedDestroyEvent}
       */
      const script_raised_destroy: EventId<ScriptRaisedDestroyEvent>
      /**
       * Event type: {@link ScriptRaisedReviveEvent}
       */
      const script_raised_revive: EventId<ScriptRaisedReviveEvent>
      /**
       * Event type: {@link ScriptRaisedSetTilesEvent}
       */
      const script_raised_set_tiles: EventId<ScriptRaisedSetTilesEvent>
      /**
       * Event type: {@link ScriptRaisedTeleportedEvent}
       */
      const script_raised_teleported: EventId<ScriptRaisedTeleportedEvent>
    }
    /**
     * See the {@linkplain https://lua-api.factorio.com/2.0.44/events.html events page} for more info on what events contain and when they get raised.
     * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.events Online documentation}
     */
    type events = (typeof events)[keyof typeof events]
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
    enum game_controller_interaction {
      /**
       * Game controller will always hover this element regardless of type or state.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.game_controller_interaction.always Online documentation}
       */
      always,
      /**
       * Never hover this element with a game controller.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.game_controller_interaction.never Online documentation}
       */
      never,
      /**
       * Hover according to the element type and implementation.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.game_controller_interaction.normal Online documentation}
       */
      normal,
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
      achievement,
      blueprint_library,
      bonus,
      controller,
      custom,
      entity,
      equipment,
      global_electric_network,
      item,
      logistic,
      none,
      opened_entity_grid,
      other_player,
      permissions,
      player_management,
      production,
      script_inventory,
      server_management,
      tile,
      trains,
    }
    enum input_action {
      activate_interrupt,
      activate_paste,
      add_decider_combinator_condition,
      add_decider_combinator_output,
      add_logistic_section,
      add_permission_group,
      add_pin,
      add_train_interrupt,
      add_train_station,
      adjust_blueprint_snapping,
      admin_action,
      alt_reverse_select_area,
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
      cancel_delete_space_platform,
      cancel_new_blueprint,
      cancel_research,
      cancel_upgrade,
      change_active_character_tab,
      change_active_item_group_for_crafting,
      change_active_item_group_for_filters,
      change_active_quick_bar,
      change_arithmetic_combinator_parameters,
      change_entity_label,
      change_item_label,
      change_logistic_point_group,
      change_multiplayer_config,
      change_picking_state,
      change_programmable_speaker_alert_parameters,
      change_programmable_speaker_circuit_parameters,
      change_programmable_speaker_parameters,
      change_riding_state,
      change_selector_combinator_parameters,
      change_shooting_state,
      change_train_name,
      change_train_stop_station,
      change_train_wait_condition,
      change_train_wait_condition_data,
      clear_cursor,
      connect_rolling_stock,
      copy,
      copy_entity_settings,
      copy_large_opened_blueprint,
      copy_large_opened_item,
      copy_opened_blueprint,
      copy_opened_item,
      craft,
      create_space_platform,
      cursor_split,
      cursor_transfer,
      custom_input,
      cycle_blueprint_book_backwards,
      cycle_blueprint_book_forwards,
      cycle_quality_down,
      cycle_quality_up,
      deconstruct,
      delete_blueprint_library,
      delete_blueprint_record,
      delete_custom_tag,
      delete_logistic_group,
      delete_permission_group,
      delete_space_platform,
      destroy_item,
      destroy_opened_item,
      disconnect_rolling_stock,
      drag_decider_combinator_condition,
      drag_decider_combinator_output,
      drag_train_schedule,
      drag_train_schedule_interrupt,
      drag_train_wait_condition,
      drop_blueprint_record,
      drop_item,
      edit_blueprint_tool_preview,
      edit_custom_tag,
      edit_display_panel,
      edit_display_panel_always_show,
      edit_display_panel_icon,
      edit_display_panel_parameters,
      edit_display_panel_show_in_chart,
      edit_interrupt,
      edit_permission_group,
      edit_pin,
      enable_transitional_requests,
      export_blueprint,
      fast_entity_split,
      fast_entity_transfer,
      flip_entity,
      flush_opened_entity_fluid,
      flush_opened_entity_specific_fluid,
      go_to_train_station,
      grab_blueprint_record,
      gui_checked_state_changed,
      gui_click,
      gui_confirmed,
      gui_elem_changed,
      gui_hover,
      gui_leave,
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
      instantly_create_space_platform,
      inventory_split,
      inventory_transfer,
      land_at_planet,
      launch_rocket,
      lua_shortcut,
      map_editor_action,
      market_offer,
      mod_settings_changed,
      modify_decider_combinator_condition,
      modify_decider_combinator_output,
      move_pin,
      move_research,
      open_achievements_gui,
      open_blueprint_library_gui,
      open_blueprint_record,
      open_bonus_gui,
      open_character_gui,
      open_current_vehicle_gui,
      open_equipment,
      open_global_electric_network_gui,
      open_gui,
      open_item,
      open_logistics_gui,
      open_mod_item,
      open_new_platform_button_from_rocket_silo,
      open_opened_entity_grid,
      open_parent_of_opened_item,
      open_production_gui,
      open_train_gui,
      open_train_station_gui,
      open_trains_gui,
      parametrise_blueprint,
      paste_entity_settings,
      pin_alert_group,
      pin_custom_alert,
      pin_search_result,
      pipette,
      place_equipment,
      quick_bar_pick_slot,
      quick_bar_set_selected_page,
      quick_bar_set_slot,
      reassign_blueprint,
      redo,
      remote_view_entity,
      remote_view_surface,
      remove_cables,
      remove_decider_combinator_condition,
      remove_decider_combinator_output,
      remove_logistic_section,
      remove_pin,
      remove_train_interrupt,
      remove_train_station,
      rename_interrupt,
      rename_space_platform,
      reorder_logistic_section,
      request_missing_construction_materials,
      reset_assembling_machine,
      reverse_select_area,
      rotate_entity,
      select_area,
      select_asteroid_chunk_slot,
      select_blueprint_entities,
      select_entity_filter_slot,
      select_entity_slot,
      select_item_filter,
      select_mapper_slot_from,
      select_mapper_slot_to,
      select_next_valid_gun,
      select_tile_slot,
      send_spidertron,
      send_stack_to_trash,
      send_stacks_to_trash,
      send_train_to_pin_target,
      set_behavior_mode,
      set_car_weapons_control,
      set_cheat_mode_quality,
      set_circuit_condition,
      set_circuit_mode_of_operation,
      set_combinator_description,
      set_copy_color_from_train_stop,
      set_deconstruction_item_tile_selection_mode,
      set_deconstruction_item_trees_and_rocks_only,
      set_entity_color,
      set_entity_energy_property,
      set_filter,
      set_ghost_cursor,
      set_heat_interface_mode,
      set_heat_interface_temperature,
      set_infinity_container_filter_item,
      set_infinity_container_remove_unfiltered_items,
      set_infinity_pipe_filter,
      set_inserter_max_stack_size,
      set_inventory_bar,
      set_lamp_always_on,
      set_linked_container_link_i_d,
      set_loader_belt_stack_size_override,
      set_logistic_filter_item,
      set_logistic_network_name,
      set_logistic_section_active,
      set_player_color,
      set_pump_fluid_filter,
      set_request_from_buffers,
      set_research_finished_stops_game,
      set_rocket_silo_send_to_orbit_automated_mode,
      set_schedule_record_allow_unloading,
      set_signal,
      set_splitter_priority,
      set_spoil_priority,
      set_train_stop_priority,
      set_train_stopped,
      set_trains_limit,
      set_turret_ignore_unlisted,
      set_use_inserter_filters,
      set_vehicle_automatic_targeting_parameters,
      setup_assembling_machine,
      setup_blueprint,
      setup_single_blueprint_record,
      spawn_item,
      spectator_change_surface,
      stack_split,
      stack_transfer,
      start_repair,
      start_research,
      start_walking,
      stop_drag_build,
      swap_asteroid_chunk_slots,
      swap_entity_filter_slots,
      swap_entity_slots,
      swap_infinity_container_filter_items,
      swap_item_filters,
      swap_logistic_filter_items,
      swap_mappers,
      swap_tile_slots,
      switch_connect_to_logistic_network,
      switch_constant_combinator_state,
      switch_inserter_filter_mode_state,
      switch_loader_filter_mode,
      switch_mining_drill_filter_mode_state,
      switch_power_switch_state,
      take_equipment,
      toggle_artillery_auto_targeting,
      toggle_deconstruction_item_entity_filter_mode,
      toggle_deconstruction_item_tile_filter_mode,
      toggle_driving,
      toggle_enable_vehicle_logistics_while_moving,
      toggle_entity_logistic_requests,
      toggle_equipment_movement_bonus,
      toggle_map_editor,
      toggle_personal_logistic_requests,
      toggle_personal_roboport,
      toggle_selected_entity,
      toggle_show_entity_info,
      translate_string,
      trash_not_requested_items,
      undo,
      upgrade,
      upgrade_opened_blueprint_by_item,
      upgrade_opened_blueprint_by_record,
      use_item,
      wire_dragging,
      write_to_console,
    }
    enum input_method {
      keyboard_and_mouse,
      game_controller,
    }
    enum inventory {
      fuel,
      burnt_result,
      chest,
      logistic_container_trash,
      furnace_source,
      furnace_result,
      furnace_modules,
      /**
       * Used for spoil result items that do not fit into the recipe slots.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.inventory.furnace_trash Online documentation}
       */
      furnace_trash,
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
      /**
       * Used when items are ejected or items held by inserters cannot be inserted due to changing the recipe with the circuit network.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.inventory.assembling_machine_dump Online documentation}
       */
      assembling_machine_dump,
      /**
       * Used for spoil result items that do not fit into the recipe slots and for items that are ejected when changing the recipe via remote view.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.inventory.assembling_machine_trash Online documentation}
       */
      assembling_machine_trash,
      lab_input,
      lab_modules,
      mining_drill_modules,
      item_main,
      rocket_silo_rocket,
      rocket_silo_trash,
      rocket_silo_input,
      rocket_silo_output,
      rocket_silo_modules,
      cargo_unit,
      car_trunk,
      car_ammo,
      car_trash,
      cargo_wagon,
      turret_ammo,
      beacon_modules,
      character_corpse,
      artillery_turret_ammo,
      artillery_wagon_ammo,
      spider_trunk,
      spider_ammo,
      spider_trash,
      hub_main,
      hub_trash,
      cargo_landing_pad_main,
      cargo_landing_pad_trash,
      proxy_main,
    }
    enum logistic_member_index {
      logistic_container,
      logistic_container_trash_provider,
      vehicle_storage,
      character_requester,
      character_storage,
      character_provider,
      generic_on_off_behavior,
      spidertron_requester,
      spidertron_provider,
      car_requester,
      car_provider,
      roboport_provider,
      roboport_requester,
      rocket_silo_provider,
      rocket_silo_requester,
      rocket_silo_trash_provider,
      space_platform_hub_requester,
      space_platform_hub_provider,
    }
    enum logistic_mode {
      none,
      active_provider,
      storage,
      requester,
      passive_provider,
      buffer,
    }
    enum logistic_section_type {
      manual,
      circuit_controlled,
      /**
       * Used by rocket silos.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.logistic_section_type.transitional_request_controlled Online documentation}
       */
      transitional_request_controlled,
      /**
       * Used by space platform hubs.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.logistic_section_type.request_missing_materials_controlled Online documentation}
       */
      request_missing_materials_controlled,
    }
    enum mouse_button_type {
      none,
      left,
      right,
      middle,
    }
    enum moving_state {
      stale,
      moving,
      adaptive,
      stuck,
    }
    enum print_skip {
      /**
       * Print will not be skipped.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.print_skip.never Online documentation}
       */
      never,
      /**
       * Print will be skipped if same text was recently printed (within last 60 ticks). Used by most game messages.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.print_skip.if_redundant Online documentation}
       */
      if_redundant,
      /**
       * Print will be skipped if same text is still visible (printed within last 1152 ticks). Used by some notifications.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.print_skip.if_visible Online documentation}
       */
      if_visible,
    }
    enum print_sound {
      always,
      never,
      use_player_settings,
    }
    /**
     * This define describes all top-level prototypes and their associated subtypes. It is organized as a lookup table, meaning the values of all the defines is `0`. As an example, `defines.prototypes['entity']` looks like `{furnace=0, inserter=0, container=0, ...}`.
     * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.prototypes Online documentation}
     */
    interface prototypes {
      achievement: {
        achievement: 0
        "build-entity-achievement": 0
        "change-surface-achievement": 0
        "combat-robot-count-achievement": 0
        "complete-objective-achievement": 0
        "construct-with-robots-achievement": 0
        "create-platform-achievement": 0
        "deconstruct-with-robots-achievement": 0
        "deliver-by-robots-achievement": 0
        "deplete-resource-achievement": 0
        "destroy-cliff-achievement": 0
        "dont-build-entity-achievement": 0
        "dont-craft-manually-achievement": 0
        "dont-kill-manually-achievement": 0
        "dont-research-before-researching-achievement": 0
        "dont-use-entity-in-energy-production-achievement": 0
        "equip-armor-achievement": 0
        "group-attack-achievement": 0
        "kill-achievement": 0
        "module-transfer-achievement": 0
        "place-equipment-achievement": 0
        "player-damaged-achievement": 0
        "produce-achievement": 0
        "produce-per-hour-achievement": 0
        "research-achievement": 0
        "research-with-science-pack-achievement": 0
        "shoot-achievement": 0
        "space-connection-distance-traveled-achievement": 0
        "train-path-achievement": 0
        "use-entity-in-energy-production-achievement": 0
        "use-item-achievement": 0
      }
      "active-trigger": {
        "chain-active-trigger": 0
        "delayed-active-trigger": 0
      }
      "airborne-pollutant": {
        "airborne-pollutant": 0
      }
      "ambient-sound": {
        "ambient-sound": 0
      }
      "ammo-category": {
        "ammo-category": 0
      }
      animation: {
        animation: 0
      }
      "asteroid-chunk": {
        "asteroid-chunk": 0
      }
      "autoplace-control": {
        "autoplace-control": 0
      }
      "burner-usage": {
        "burner-usage": 0
      }
      "collision-layer": {
        "collision-layer": 0
      }
      "custom-event": {
        "custom-event": 0
      }
      "custom-input": {
        "custom-input": 0
      }
      "damage-type": {
        "damage-type": 0
      }
      decorative: {
        "optimized-decorative": 0
      }
      "deliver-category": {
        "deliver-category": 0
      }
      "deliver-impact-combination": {
        "deliver-impact-combination": 0
      }
      "editor-controller": {
        "editor-controller": 0
      }
      entity: {
        accumulator: 0
        "agricultural-tower": 0
        "ammo-turret": 0
        "arithmetic-combinator": 0
        arrow: 0
        "artillery-flare": 0
        "artillery-projectile": 0
        "artillery-turret": 0
        "artillery-wagon": 0
        "assembling-machine": 0
        asteroid: 0
        "asteroid-collector": 0
        beacon: 0
        beam: 0
        boiler: 0
        "burner-generator": 0
        "capture-robot": 0
        car: 0
        "cargo-bay": 0
        "cargo-landing-pad": 0
        "cargo-pod": 0
        "cargo-wagon": 0
        character: 0
        "character-corpse": 0
        cliff: 0
        "combat-robot": 0
        "constant-combinator": 0
        "construction-robot": 0
        container: 0
        corpse: 0
        "curved-rail-a": 0
        "curved-rail-b": 0
        "decider-combinator": 0
        "deconstructible-tile-proxy": 0
        "display-panel": 0
        "electric-energy-interface": 0
        "electric-pole": 0
        "electric-turret": 0
        "elevated-curved-rail-a": 0
        "elevated-curved-rail-b": 0
        "elevated-half-diagonal-rail": 0
        "elevated-straight-rail": 0
        "entity-ghost": 0
        explosion: 0
        fire: 0
        fish: 0
        "fluid-turret": 0
        "fluid-wagon": 0
        furnace: 0
        "fusion-generator": 0
        "fusion-reactor": 0
        gate: 0
        generator: 0
        "half-diagonal-rail": 0
        "heat-interface": 0
        "heat-pipe": 0
        "highlight-box": 0
        "infinity-cargo-wagon": 0
        "infinity-container": 0
        "infinity-pipe": 0
        inserter: 0
        "item-entity": 0
        "item-request-proxy": 0
        lab: 0
        lamp: 0
        "land-mine": 0
        "lane-splitter": 0
        "legacy-curved-rail": 0
        "legacy-straight-rail": 0
        lightning: 0
        "lightning-attractor": 0
        "linked-belt": 0
        "linked-container": 0
        loader: 0
        "loader-1x1": 0
        locomotive: 0
        "logistic-container": 0
        "logistic-robot": 0
        market: 0
        "mining-drill": 0
        "offshore-pump": 0
        "particle-source": 0
        pipe: 0
        "pipe-to-ground": 0
        plant: 0
        "player-port": 0
        "power-switch": 0
        "programmable-speaker": 0
        projectile: 0
        "proxy-container": 0
        pump: 0
        radar: 0
        "rail-chain-signal": 0
        "rail-ramp": 0
        "rail-remnants": 0
        "rail-signal": 0
        "rail-support": 0
        reactor: 0
        resource: 0
        roboport: 0
        "rocket-silo": 0
        "rocket-silo-rocket": 0
        "rocket-silo-rocket-shadow": 0
        segment: 0
        "segmented-unit": 0
        "selector-combinator": 0
        "simple-entity": 0
        "simple-entity-with-force": 0
        "simple-entity-with-owner": 0
        "smoke-with-trigger": 0
        "solar-panel": 0
        "space-platform-hub": 0
        "speech-bubble": 0
        "spider-leg": 0
        "spider-unit": 0
        "spider-vehicle": 0
        splitter: 0
        sticker: 0
        "storage-tank": 0
        "straight-rail": 0
        stream: 0
        "temporary-container": 0
        thruster: 0
        "tile-ghost": 0
        "train-stop": 0
        "transport-belt": 0
        tree: 0
        turret: 0
        "underground-belt": 0
        unit: 0
        "unit-spawner": 0
        wall: 0
      }
      equipment: {
        "active-defense-equipment": 0
        "battery-equipment": 0
        "belt-immunity-equipment": 0
        "energy-shield-equipment": 0
        "equipment-ghost": 0
        "generator-equipment": 0
        "inventory-bonus-equipment": 0
        "movement-bonus-equipment": 0
        "night-vision-equipment": 0
        "roboport-equipment": 0
        "solar-panel-equipment": 0
      }
      "equipment-category": {
        "equipment-category": 0
      }
      "equipment-grid": {
        "equipment-grid": 0
      }
      fluid: {
        fluid: 0
      }
      font: {
        font: 0
      }
      "fuel-category": {
        "fuel-category": 0
      }
      "god-controller": {
        "god-controller": 0
      }
      "gui-style": {
        "gui-style": 0
      }
      "impact-category": {
        "impact-category": 0
      }
      item: {
        ammo: 0
        armor: 0
        blueprint: 0
        "blueprint-book": 0
        capsule: 0
        "copy-paste-tool": 0
        "deconstruction-item": 0
        gun: 0
        item: 0
        "item-with-entity-data": 0
        "item-with-inventory": 0
        "item-with-label": 0
        "item-with-tags": 0
        module: 0
        "rail-planner": 0
        "repair-tool": 0
        "selection-tool": 0
        "space-platform-starter-pack": 0
        "spidertron-remote": 0
        tool: 0
        "upgrade-item": 0
      }
      "item-group": {
        "item-group": 0
      }
      "item-subgroup": {
        "item-subgroup": 0
      }
      "map-gen-presets": {
        "map-gen-presets": 0
      }
      "map-settings": {
        "map-settings": 0
      }
      "module-category": {
        "module-category": 0
      }
      "mouse-cursor": {
        "mouse-cursor": 0
      }
      "noise-expression": {
        "noise-expression": 0
      }
      "noise-function": {
        "noise-function": 0
      }
      particle: {
        "optimized-particle": 0
      }
      procession: {
        procession: 0
      }
      "procession-layer-inheritance-group": {
        "procession-layer-inheritance-group": 0
      }
      quality: {
        quality: 0
      }
      recipe: {
        recipe: 0
      }
      "recipe-category": {
        "recipe-category": 0
      }
      "remote-controller": {
        "remote-controller": 0
      }
      "resource-category": {
        "resource-category": 0
      }
      shortcut: {
        shortcut: 0
      }
      sound: {
        sound: 0
      }
      "space-connection": {
        "space-connection": 0
      }
      "space-location": {
        planet: 0
        "space-location": 0
      }
      "spectator-controller": {
        "spectator-controller": 0
      }
      sprite: {
        sprite: 0
      }
      surface: {
        surface: 0
      }
      "surface-property": {
        "surface-property": 0
      }
      technology: {
        technology: 0
      }
      tile: {
        tile: 0
      }
      "tile-effect": {
        "tile-effect": 0
      }
      "tips-and-tricks-item": {
        "tips-and-tricks-item": 0
      }
      "tips-and-tricks-item-category": {
        "tips-and-tricks-item-category": 0
      }
      "trigger-target-type": {
        "trigger-target-type": 0
      }
      "trivial-smoke": {
        "trivial-smoke": 0
      }
      tutorial: {
        tutorial: 0
      }
      "utility-constants": {
        "utility-constants": 0
      }
      "utility-sounds": {
        "utility-sounds": 0
      }
      "utility-sprites": {
        "utility-sprites": 0
      }
      "virtual-signal": {
        "virtual-signal": 0
      }
    }
    /**
     * This define describes all top-level prototypes and their associated subtypes. It is organized as a lookup table, meaning the values of all the defines is `0`. As an example, `defines.prototypes['entity']` looks like `{furnace=0, inserter=0, container=0, ...}`.
     * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.prototypes Online documentation}
     */
    const prototypes: prototypes
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
    enum rail_layer {
      ground,
      elevated,
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
      agriculture_tower_gui,
      arithmetic_combinator_gui,
      armor_gui,
      assembling_machine_gui,
      assembling_machine_select_recipe_gui,
      asteroid_collector_gui,
      beacon_gui,
      blueprint_book_gui,
      blueprint_library_gui,
      blueprint_setup_gui,
      bonus_gui,
      burner_equipment_gui,
      car_gui,
      cargo_landing_pad_gui,
      constant_combinator_gui,
      container_gui,
      controller_gui,
      decider_combinator_gui,
      deconstruction_item_gui,
      display_panel_gui,
      electric_energy_interface_gui,
      electric_network_gui,
      entity_variations_gui,
      entity_with_energy_source_gui,
      equipment_grid_gui,
      furnace_gui,
      generic_on_off_entity_gui,
      ghost_picker_gui,
      global_electric_network_gui,
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
      pick_stop_gui,
      pipe_gui,
      power_switch_gui,
      production_gui,
      programmable_speaker_gui,
      proxy_container_gui,
      pump_gui,
      rail_signal_base_gui,
      reactor_gui,
      resource_entity_gui,
      roboport_gui,
      rocket_silo_gui,
      script_inventory_gui,
      selector_combinator_gui,
      server_config_gui,
      space_platform_hub_gui,
      spider_vehicle_gui,
      splitter_gui,
      standalone_character_gui,
      storage_tank_gui,
      tile_variations_gui,
      tips_and_tricks_gui,
      train_gui,
      train_stop_gui,
      trains_gui,
      transport_belt_gui,
      turret_gui,
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
    enum robot_order_type {
      /**
       * Construct a ghost.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.robot_order_type.construct Online documentation}
       */
      construct,
      /**
       * Pickup an item.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.robot_order_type.pickup Online documentation}
       */
      pickup,
      /**
       * Deliver an item.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.robot_order_type.deliver Online documentation}
       */
      deliver,
      /**
       * Repair an entity.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.robot_order_type.repair Online documentation}
       */
      repair,
      /**
       * Deconstruct an entity.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.robot_order_type.deconstruct Online documentation}
       */
      deconstruct,
      /**
       * Deliver specific items to an entity (item request proxy).
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.robot_order_type.deliver_items Online documentation}
       */
      deliver_items,
      /**
       * Upgrade an entity.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.robot_order_type.upgrade Online documentation}
       */
      upgrade,
      /**
       * Explode a cliff.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.robot_order_type.explode_cliff Online documentation}
       */
      explode_cliff,
      /**
       * Pickup items from an entity (item request proxy).
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.robot_order_type.pickup_items Online documentation}
       */
      pickup_items,
    }
    /**
     * The various parts of the launch sequence of the rocket silo.
     * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.rocket_silo_status Online documentation}
     */
    enum rocket_silo_status {
      /**
       * The rocket silo is crafting rocket parts. When there are enough rocket parts, the silo will switch into the `create_rocket` state.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.rocket_silo_status.building_rocket Online documentation}
       */
      building_rocket,
      /**
       * The next state is `lights_blinking_open`. The rocket silo rocket entity gets created.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.rocket_silo_status.create_rocket Online documentation}
       */
      create_rocket,
      /**
       * The next state is `doors_opening`. The rocket is getting prepared for launch.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.rocket_silo_status.lights_blinking_open Online documentation}
       */
      lights_blinking_open,
      /**
       * The next state is `doors_opened`. The rocket is getting prepared for launch.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.rocket_silo_status.doors_opening Online documentation}
       */
      doors_opening,
      /**
       * The next state is `rocket_rising` or if the rocket is destroyed in this state then the next state will be `lights_blinking_close`. The rocket is getting prepared for launch.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.rocket_silo_status.doors_opened Online documentation}
       */
      doors_opened,
      /**
       * The next state is `arms_advance` or if the rocket is destroyed in this state then the next state will be `lights_blinking_close`. The rocket is getting prepared for launch.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.rocket_silo_status.rocket_rising Online documentation}
       */
      rocket_rising,
      /**
       * The next state is `rocket_ready` or if the rocket is destroyed in this state then the next state will be `lights_blinking_close`. The rocket is getting prepared for launch.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.rocket_silo_status.arms_advance Online documentation}
       */
      arms_advance,
      /**
       * The rocket launch can be started by the player. When the launch is started, the silo switches into the `launch_starting` state.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.rocket_silo_status.rocket_ready Online documentation}
       */
      rocket_ready,
      /**
       * The next state is `launch_started`.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.rocket_silo_status.launch_starting Online documentation}
       */
      launch_starting,
      /**
       * The next state is `arms_retract` or if the rocket is destroyed in this state then the next state will be `lights_blinking_close`. The rocket is getting launched.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.rocket_silo_status.engine_starting Online documentation}
       */
      engine_starting,
      /**
       * The next state is `rocket_flying` or if the rocket is destroyed in this state then the next state will be `lights_blinking_close`. The rocket is getting launched.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.rocket_silo_status.arms_retract Online documentation}
       */
      arms_retract,
      /**
       * The next state is `lights_blinking_close`. The rocket is getting launched.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.rocket_silo_status.rocket_flying Online documentation}
       */
      rocket_flying,
      /**
       * The next state is `doors_closing`.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.rocket_silo_status.lights_blinking_close Online documentation}
       */
      lights_blinking_close,
      /**
       * The next state is `building_rocket`.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.rocket_silo_status.doors_closing Online documentation}
       */
      doors_closing,
      /**
       * The next state is `engine_starting` or if the rocket is destroyed in this state then the next state will be `lights_blinking_close`. The rocket is getting launched.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.rocket_silo_status.launch_started Online documentation}
       */
      launch_started,
    }
    enum selection_mode {
      select,
      alt_select,
      reverse_select,
      alt_reverse_select,
    }
    enum shooting {
      not_shooting,
      shooting_enemies,
      shooting_selected,
    }
    /**
     * State of an ordinary rail signal.
     * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.signal_state Online documentation}
     */
    enum signal_state {
      /**
       * Green.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.signal_state.open Online documentation}
       */
      open,
      /**
       * Red.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.signal_state.closed Online documentation}
       */
      closed,
      /**
       * Orange.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.signal_state.reserved Online documentation}
       */
      reserved,
      /**
       * Red - From circuit network.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.signal_state.reserved_by_circuit_network Online documentation}
       */
      reserved_by_circuit_network,
    }
    enum space_platform_state {
      /**
       * Waiting for a starter pack.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.space_platform_state.waiting_for_starter_pack Online documentation}
       */
      waiting_for_starter_pack,
      /**
       * Starter pack was requested from the logistics system.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.space_platform_state.starter_pack_requested Online documentation}
       */
      starter_pack_requested,
      /**
       * Starter pack is on the way.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.space_platform_state.starter_pack_on_the_way Online documentation}
       */
      starter_pack_on_the_way,
      /**
       * Following the path.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.space_platform_state.on_the_path Online documentation}
       */
      on_the_path,
      /**
       * Platform is ready to leave this planet and does not accept deliveries.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.space_platform_state.waiting_for_departure Online documentation}
       */
      waiting_for_departure,
      /**
       * Doesn't have any stations in schedule.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.space_platform_state.no_schedule Online documentation}
       */
      no_schedule,
      /**
       * Doesn't have anywhere to go.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.space_platform_state.no_path Online documentation}
       */
      no_path,
      /**
       * Waiting at a station.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.space_platform_state.waiting_at_station Online documentation}
       */
      waiting_at_station,
      /**
       * Paused.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.space_platform_state.paused Online documentation}
       */
      paused,
    }
    enum target_type {
      entity,
      equipment,
      equipment_grid,
      item,
      logistic_cell,
      logistic_network,
      logistic_section,
      permission_group,
      planet,
      player,
      rail_path,
      render_object,
      space_platform,
      surface,
      train,
      commandable,
      custom_chart_tag,
      gui_element,
      cargo_hatch,
      schedule,
    }
    enum train_state {
      /**
       * Normal state -- following the path.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.train_state.on_the_path Online documentation}
       */
      on_the_path,
      /**
       * Doesn't have anywhere to go.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.train_state.no_schedule Online documentation}
       */
      no_schedule,
      /**
       * Has no path and is stopped.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.train_state.no_path Online documentation}
       */
      no_path,
      /**
       * Braking before a rail signal.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.train_state.arrive_signal Online documentation}
       */
      arrive_signal,
      /**
       * Waiting at a signal.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.train_state.wait_signal Online documentation}
       */
      wait_signal,
      /**
       * Braking before a station.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.train_state.arrive_station Online documentation}
       */
      arrive_station,
      /**
       * Switched to manual control and has to stop.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.train_state.manual_control_stop Online documentation}
       */
      manual_control_stop,
      /**
       * Can move if user explicitly sits in and rides the train.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.train_state.manual_control Online documentation}
       */
      manual_control,
      /**
       * Waiting at a station.
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.train_state.wait_station Online documentation}
       */
      wait_station,
      /**
       * Same as no_path but all candidate train stops are full
       * @see {@link https://lua-api.factorio.com/2.0.44/defines.html#defines.train_state.destination_full Online documentation}
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
    enum wire_connector_id {
      circuit_red,
      circuit_green,
      combinator_input_red,
      combinator_input_green,
      combinator_output_red,
      combinator_output_green,
      pole_copper,
      power_switch_left_copper,
      power_switch_right_copper,
    }
    enum wire_origin {
      player,
      script,
      radars,
    }
    enum wire_type {
      red,
      green,
      copper,
    }
  }
}
