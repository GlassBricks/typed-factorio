// This is an auto-generated file. Do not edit directly!

/** @noSelfInFile */


/**
 * @noResolution
 */
declare module "factorio:prototype" {
    /**
     * Entity with energy source with specialised animation for charging/discharging. Used for the {@linkplain https://wiki.factorio.com/Accumulator accumulator} entity.
     * @example
     * {
     *   type = "accumulator",
     *   name = "accumulator",
     *   icon = "__base__/graphics/icons/accumulator.png",
     *   icon_size = 32,
     *   flags = {"placeable-neutral", "player-creation"},
     *   minable = {mining_time = 0.1, result = "accumulator"},
     *   max_health = 150,
     *   corpse = "accumulator-remnants",
     *   collision_box = {{-0.9, -0.9}, {0.9, 0.9}},
     *   selection_box = {{-1, -1}, {1, 1}},
     *   drawing_box = {{-1, -1.5}, {1, 1}},
     *   energy_source =
     *   {
     *     type = "electric",
     *     buffer_capacity = "5MJ",
     *     usage_priority = "tertiary",
     *     input_flow_limit = "300kW",
     *     output_flow_limit = "300kW"
     *   },
     *   picture = accumulator_picture(),
     *   charge_animation = accumulator_charge(),
     *
     *   charge_cooldown = 30,
     *   charge_light = {intensity = 0.3, size = 7, color = {r = 1.0, g = 1.0, b = 1.0}},
     *   discharge_animation = accumulator_discharge(),
     *   discharge_cooldown = 60,
     *   discharge_light = {intensity = 0.7, size = 7, color = {r = 1.0, g = 1.0, b = 1.0}},
     *   vehicle_impact_sound =  { filename = "__base__/sound/car-metal-impact.ogg", volume = 0.65 },
     *   working_sound =
     *   {
     *     sound =
     *     {
     *       filename = "__base__/sound/accumulator-working.ogg",
     *       volume = 1
     *     },
     *     idle_sound =
     *     {
     *       filename = "__base__/sound/accumulator-idle.ogg",
     *       volume = 0.4
     *     },
     *     max_sounds_per_type = 5
     *   },
     *
     *   circuit_wire_connection_point = circuit_connector_definitions["accumulator"].points,
     *   circuit_connector_sprites = circuit_connector_definitions["accumulator"].sprites,
     *   circuit_wire_max_distance = default_circuit_wire_max_distance,
     *
     *   default_output_signal = {type = "virtual", name = "signal-A"}
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AccumulatorPrototype.html Online documentation}
     */
    export interface AccumulatorPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * This prototype definition is used for the in-game achievements.
     * @example
     * {
     *   type = "achievement",
     *   name = "so-long-and-thanks-for-all-the-fish",
     *   order = "g[secret]-a[so-long-and-thanks-for-all-the-fish]",
     *   icon = "__base__/graphics/achievement/so-long-and-thanks-for-all-the-fish.png",
     *   icon_size = 128
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AchievementPrototype.html Online documentation}
     */
    export interface AchievementPrototype extends PrototypeBase {
    }
    /**
     * Used by {@linkplain https://wiki.factorio.com/Discharge_defense discharge defense} and {@linkplain https://wiki.factorio.com/Personal_laser_defense personal laser defense}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ActiveDefenseEquipmentPrototype.html Online documentation}
     */
    export interface ActiveDefenseEquipmentPrototype extends EquipmentPrototype {
    }
    /**
     * This prototype is used to make sound while playing the game. This includes the game's {@linkplain https://store.steampowered.com/app/436090/Factorio__Soundtrack/ music}, composed by Daniel James Taylor.
     * @example
     * {
     *   type = "ambient-sound",
     *   name = "world-ambience-4",
     *   track_type = "interlude",
     *   sound =
     *   {
     *     filename = "__base__/sound/ambient/world-ambience-4.ogg",
     *     volume = 1.2
     *   }
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AmbientSound.html Online documentation}
     */
    export interface AmbientSound {
    }
    /**
     * An ammo category. Each weapon has an ammo category, and can use any ammo with the same ammo category. Ammo categories can also be upgraded by technologies.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AmmoCategory.html Online documentation}
     */
    export interface AmmoCategory extends PrototypeBase {
    }
    /**
     * Ammo used for a gun.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AmmoItemPrototype.html Online documentation}
     */
    export interface AmmoItemPrototype extends OmitType<ItemPrototype> {
    }
    /**
     * A turret that consumes ammo items.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AmmoTurretPrototype.html Online documentation}
     */
    export interface AmmoTurretPrototype extends OmitType<TurretPrototype> {
    }
    /**
     * Specifies an animation that can be used with {@link import("factorio:runtime").undefined#draw_animation LuaRendering::draw_animation} at runtime.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html Online documentation}
     */
    export interface AnimationPrototype {
    }
    /**
     * An {@linkplain https://wiki.factorio.com/Arithmetic_combinator arithmetic combinator}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArithmeticCombinatorPrototype.html Online documentation}
     */
    export interface ArithmeticCombinatorPrototype extends CombinatorPrototype {
    }
    /**
     * Armor to wear on your in-game {@link CharacterPrototype character} for defense and buffs.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArmorPrototype.html Online documentation}
     */
    export interface ArmorPrototype extends OmitType<ToolPrototype> {
    }
    /**
     * The arrows used for example in the campaign, they are literally just arrows.
     * @example
     * {
     *   type = "arrow",
     *   name = "orange-arrow-with-circle",
     *   flags = { "placeable-off-grid", "not-on-map" },
     *   blinking = true,
     *   arrow_picture =
     *   {
     *     filename = "__core__/graphics/arrows/gui-arrow-medium.png",
     *     priority = "low",
     *     width = 58,
     *     height = 62
     *   },
     *   circle_picture =
     *   {
     *     filename = "__core__/graphics/arrows/gui-arrow-circle.png",
     *     priority = "low",
     *     width = 50,
     *     height = 50
     *   }
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArrowPrototype.html Online documentation}
     */
    export interface ArrowPrototype extends EntityPrototype {
    }
    /**
     * The entity spawned by the {@linkplain https://wiki.factorio.com/Artillery_targeting_remote artillery targeting remote}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArtilleryFlarePrototype.html Online documentation}
     */
    export interface ArtilleryFlarePrototype extends EntityPrototype {
    }
    /**
     * The projectile shot by {@linkplain https://wiki.factorio.com/Artillery artillery}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArtilleryProjectilePrototype.html Online documentation}
     */
    export interface ArtilleryProjectilePrototype extends EntityPrototype {
    }
    /**
     * An {@linkplain https://wiki.factorio.com/Artillery_turret artillery turret}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArtilleryTurretPrototype.html Online documentation}
     */
    export interface ArtilleryTurretPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * An {@linkplain https://wiki.factorio.com/Artillery_wagon artillery wagon}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArtilleryWagonPrototype.html Online documentation}
     */
    export interface ArtilleryWagonPrototype extends RollingStockPrototype {
    }
    /**
     * An assembling machine - like the assembling machines 1/2/3 in the game, but you can use your own recipe categories.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AssemblingMachinePrototype.html Online documentation}
     */
    export interface AssemblingMachinePrototype extends CraftingMachinePrototype {
    }
    /**
     * A setting in the map creation GUI. Used by the {@link AutoplaceSpecification#control autoplace system}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AutoplaceControl.html Online documentation}
     */
    export interface AutoplaceControl extends PrototypeBase {
    }
    /**
     * Used by {@linkplain https://wiki.factorio.com/Personal_battery personal battery}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BatteryEquipmentPrototype.html Online documentation}
     */
    export interface BatteryEquipmentPrototype extends EquipmentPrototype {
    }
    /**
     * Entity with the ability to transfer module's effects to its neighboring entities.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BeaconPrototype.html Online documentation}
     */
    export interface BeaconPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * Used as a laser beam.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BeamPrototype.html Online documentation}
     */
    export interface BeamPrototype extends EntityPrototype {
    }
    /**
     * Used by {@linkplain https://wiki.factorio.com/Belt_immunity_equipment belt immunity equipment}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BeltImmunityEquipmentPrototype.html Online documentation}
     */
    export interface BeltImmunityEquipmentPrototype extends EquipmentPrototype {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Blueprint_book blueprint book}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BlueprintBookPrototype.html Online documentation}
     */
    export interface BlueprintBookPrototype extends OmitType<ItemWithInventoryPrototype> {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Blueprint blueprint}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BlueprintItemPrototype.html Online documentation}
     */
    export interface BlueprintItemPrototype extends OmitType<SelectionToolPrototype> {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Boiler boiler}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BoilerPrototype.html Online documentation}
     */
    export interface BoilerPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * This prototype is used for receiving an achievement when the player builds an entity.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BuildEntityAchievementPrototype.html Online documentation}
     */
    export interface BuildEntityAchievementPrototype extends OmitType<AchievementPrototype> {
    }
    /**
     * An entity that produces power from a burner energy source.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BurnerGeneratorPrototype.html Online documentation}
     */
    export interface BurnerGeneratorPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * A capsule, for example a {@linkplain https://wiki.factorio.com/Combat_robot_capsules combat robot capsule} or the {@linkplain https://wiki.factorio.com/Raw_fish raw fish}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CapsulePrototype.html Online documentation}
     */
    export interface CapsulePrototype extends OmitType<ItemPrototype> {
    }
    /**
     * Entity with specialized properties for acceleration, braking, and turning.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CarPrototype.html Online documentation}
     */
    export interface CarPrototype extends VehiclePrototype {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Cargo_wagon cargo wagon}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CargoWagonPrototype.html Online documentation}
     */
    export interface CargoWagonPrototype extends RollingStockPrototype {
    }
    /**
     * The corpse of a {@link CharacterPrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CharacterCorpsePrototype.html Online documentation}
     */
    export interface CharacterCorpsePrototype extends EntityPrototype {
    }
    /**
     * Entity that you move around on the screen during the campaign and freeplay.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CharacterPrototype.html Online documentation}
     */
    export interface CharacterPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Cliff cliff}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CliffPrototype.html Online documentation}
     */
    export interface CliffPrototype extends EntityPrototype {
    }
    /**
     * This prototype is used for receiving an achievement when the player has a certain robot follower count.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CombatRobotCountAchievementPrototype.html Online documentation}
     */
    export interface CombatRobotCountAchievementPrototype extends OmitType<AchievementPrototype> {
    }
    /**
     * A combat robot. Can attack enemies.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CombatRobotPrototype.html Online documentation}
     */
    export interface CombatRobotPrototype extends FlyingRobotPrototype {
    }
    /**
     * Abstract base type for decider and arithmetic combinators.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CombinatorPrototype.html Online documentation}
     */
    export interface CombinatorPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Constant_combinator constant combinator}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ConstantCombinatorPrototype.html Online documentation}
     */
    export interface ConstantCombinatorPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * This prototype is used for receiving an achievement when the player constructs enough entities with construction robots.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ConstructWithRobotsAchievementPrototype.html Online documentation}
     */
    export interface ConstructWithRobotsAchievementPrototype extends OmitType<AchievementPrototype> {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Construction_robot construction robot}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ConstructionRobotPrototype.html Online documentation}
     */
    export interface ConstructionRobotPrototype extends RobotWithLogisticInterfacePrototype {
    }
    /**
     * A generic container, such as a chest. Can not be rotated.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ContainerPrototype.html Online documentation}
     */
    export interface ContainerPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * A copy-paste or cut-paste tool.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CopyPasteToolPrototype.html Online documentation}
     */
    export interface CopyPasteToolPrototype extends OmitType<SelectionToolPrototype> {
    }
    /**
     * Used for corpses, for example the remnants when destroying buildings.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CorpsePrototype.html Online documentation}
     */
    export interface CorpsePrototype extends EntityPrototype {
    }
    /**
     * The abstract basis of the assembling machines and furnaces. Contains the properties that both of them have.
     *
     * Note that a crafting machine cannot be rotated unless it has at least one of the following: a fluid box, a heat energy source, a fluid energy source, or a non-square collision box. Crafting machines with non-square collision boxes can only be rotated before placement, not after.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CraftingMachinePrototype.html Online documentation}
     */
    export interface CraftingMachinePrototype extends EntityWithOwnerPrototype {
    }
    /**
     * A curved rail.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CurvedRailPrototype.html Online documentation}
     */
    export interface CurvedRailPrototype extends RailPrototype {
    }
    /**
     * Used for custom keyboard shortcuts/key bindings in mods. The key associated with the custom input can be changed in the options. This means that `key_sequence` is simply the default key binding.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CustomInputPrototype.html Online documentation}
     */
    export interface CustomInputPrototype extends PrototypeBase {
    }
    /**
     * A damage type. This is used in the {@linkplain https://wiki.factorio.com/Damage damage system}. {@linkplain https://wiki.factorio.com/Damage#Damage_types A list of built-in damage types can be found here}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DamageType.html Online documentation}
     */
    export interface DamageType extends PrototypeBase {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Decider_combinator decider combinator}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DeciderCombinatorPrototype.html Online documentation}
     */
    export interface DeciderCombinatorPrototype extends CombinatorPrototype {
    }
    /**
     * This prototype is used for receiving an achievement when the player deconstructs enough entities with construction robots.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DeconstructWithRobotsAchievementPrototype.html Online documentation}
     */
    export interface DeconstructWithRobotsAchievementPrototype extends OmitType<AchievementPrototype> {
    }
    /**
     * Entity used to signify that the tile below it should be deconstructed.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DeconstructibleTileProxyPrototype.html Online documentation}
     */
    export interface DeconstructibleTileProxyPrototype extends EntityPrototype {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Deconstruction_planner deconstruction planner}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DeconstructionItemPrototype.html Online documentation}
     */
    export interface DeconstructionItemPrototype extends OmitType<SelectionToolPrototype> {
    }
    /**
     * Simple decorative purpose objects on the map, they have no health and some of them are removed when the player builds over. Usually used for grass patches, roots, small plants etc.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DecorativePrototype.html Online documentation}
     */
    export interface DecorativePrototype extends PrototypeBase {
    }
    /**
     * This prototype is used for receiving an achievement, when the player requests and receives enough items using logistic robots.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DeliverByRobotsAchievementPrototype.html Online documentation}
     */
    export interface DeliverByRobotsAchievementPrototype extends OmitType<AchievementPrototype> {
    }
    /**
     * This prototype is used for receiving an achievement when the player finishes the game without building a specific entity.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DontBuildEntityAchievementPrototype.html Online documentation}
     */
    export interface DontBuildEntityAchievementPrototype extends OmitType<AchievementPrototype> {
    }
    /**
     * This prototype is used for receiving an achievement when the player finishes the game without crafting more than a set amount.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DontCraftManuallyAchievementPrototype.html Online documentation}
     */
    export interface DontCraftManuallyAchievementPrototype extends OmitType<AchievementPrototype> {
    }
    /**
     * This prototype is used for receiving an achievement when the player finishes the game without receiving energy from a specific energy source.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DontUseEntityInEnergyProductionAchievementPrototype.html Online documentation}
     */
    export interface DontUseEntityInEnergyProductionAchievementPrototype extends OmitType<AchievementPrototype> {
    }
    /**
     * Properties of the editor controller.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EditorControllerPrototype.html Online documentation}
     */
    export interface EditorControllerPrototype {
    }
    /**
     * Entity with electric energy source with that can have some of its values changed runtime. Useful for modding in energy consumers/producers.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ElectricEnergyInterfacePrototype.html Online documentation}
     */
    export interface ElectricEnergyInterfacePrototype extends EntityWithOwnerPrototype {
    }
    /**
     * An electric pole - part of the {@linkplain https://wiki.factorio.com/Electric_system electric system}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ElectricPolePrototype.html Online documentation}
     */
    export interface ElectricPolePrototype extends EntityWithOwnerPrototype {
    }
    /**
     * A turret that consumes electricity as ammo.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ElectricTurretPrototype.html Online documentation}
     */
    export interface ElectricTurretPrototype extends OmitType<TurretPrototype> {
    }
    /**
     * Can spawn entities. Used for biter/spitter nests.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EnemySpawnerPrototype.html Online documentation}
     */
    export interface EnemySpawnerPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * Used by {@linkplain https://wiki.factorio.com/Energy_shield energy shield}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EnergyShieldEquipmentPrototype.html Online documentation}
     */
    export interface EnergyShieldEquipmentPrototype extends EquipmentPrototype {
    }
    /**
     * The entity used for ghosts of entities. In-game, the inner entity (the entity this is a ghost of) is rendered with a {@link UtilityConstants#ghost_tint UtilityConstants::ghost_tint}.
     * @example
     * {
     *   type = "entity-ghost",
     *   name = "entity-ghost",
     *   icon = "__core__/graphics/icons/mip/ghost-entity.png",
     *   icon_size = 64,
     *   icon_mipmaps = 3,
     *   build_sound = { { filename = "__core__/sound/build-ghost-small.ogg",  volume = 0.6 } },
     *   medium_build_sound = { { filename = "__core__/sound/build-ghost-medium.ogg",  volume = 0.7 } },
     *   large_build_sound = { { filename = "__core__/sound/build-ghost-large.ogg",  volume = 0.7 } },
     *   minable = { mining_time = 0, results = {} },
     *   mined_sound = { { filename = "__core__/sound/deconstruct-ghost.ogg",  volume = 0.4 } }
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityGhostPrototype.html Online documentation}
     */
    export interface EntityGhostPrototype extends EntityPrototype {
    }
    /**
     * Deprecated in 0.18. The type "particle" has been obsoleted and cannot be created. See {@link ParticlePrototype} for particles.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityParticlePrototype.html Online documentation}
     */
    export interface EntityParticlePrototype extends EntityPrototype {
    }
    /**
     * Abstract base of all entities in the game. Entity is nearly everything that can be on the map(except tiles).
     *
     * For in game script access to entity, take a look at {@link import("factorio:runtime").undefined LuaEntity}.
     * @example
     * {
     *   type = "container",
     *   name = "wooden-chest",
     *   icon = "__base__/graphics/icons/wooden-chest.png",
     *   flags = { "placeable-neutral", "player-creation" },
     *   minable = { mining_time = 1, result = "wooden-chest" },
     *   max_health = 100,
     *   corpse = "small-remnants",
     *   collision_box = { {-0.35, -0.35}, {0.35, 0.35} },
     *   fast_replaceable_group = "container",
     *   selection_box = { {-0.5, -0.5}, {0.5, 0.5} },
     *   inventory_size = 16,
     *   open_sound = { filename = "__base__/sound/wooden-chest-open.ogg" },
     *   close_sound = { filename = "__base__/sound/wooden-chest-close.ogg" },
     *   vehicle_impact_sound = { filename = "__base__/sound/car-wood-impact.ogg", volume = 1.0 },
     *   picture =
     *   {
     *     filename = "__base__/graphics/entity/wooden-chest/wooden-chest.png",
     *     priority = "extra-high",
     *     width = 46,
     *     height = 33,
     *     shift = {0.25, 0.015625}
     *   }
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityPrototype.html Online documentation}
     */
    export interface EntityPrototype extends PrototypeBase {
    }
    /**
     * Abstract base of all entities with health in the game.
     * @example
     * {
     *   type = "container",
     *   name = "wooden-chest",
     *   icon = "__base__/graphics/icons/wooden-chest.png",
     *   flags = { "placeable-neutral", "player-creation" },
     *   minable = { mining_time = 1, result = "wooden-chest" },
     *   max_health = 100,
     *   corpse = "small-remnants",
     *   collision_box = { {-0.35, -0.35}, {0.35, 0.35} },
     *   fast_replaceable_group = "container",
     *   selection_box = { {-0.5, -0.5}, {0.5, 0.5} },
     *   inventory_size = 16,
     *   open_sound = { filename = "__base__/sound/wooden-chest-open.ogg" },
     *   close_sound = { filename = "__base__/sound/wooden-chest-close.ogg" },
     *   vehicle_impact_sound = { filename = "__base__/sound/car-wood-impact.ogg", volume = 1.0 },
     *   picture =
     *   {
     *     filename = "__base__/graphics/entity/wooden-chest/wooden-chest.png",
     *     priority = "extra-high",
     *     width = 46,
     *     height = 33,
     *     shift = {0.25, 0.015625}
     *   }
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityWithHealthPrototype.html Online documentation}
     */
    export interface EntityWithHealthPrototype extends EntityPrototype {
    }
    /**
     * Abstract base of all entities with a force in the game. These entities have a {@link import("factorio:runtime").undefined#unit_number LuaEntity::unit_number} during runtime. Can be high priority {@linkplain https://wiki.factorio.com/Military_units_and_structures military targets}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityWithOwnerPrototype.html Online documentation}
     */
    export interface EntityWithOwnerPrototype extends EntityWithHealthPrototype {
    }
    /**
     * Defines a category to be available to {@link EquipmentPrototype equipment} and {@link EquipmentGridPrototype equipment grids}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EquipmentCategory.html Online documentation}
     */
    export interface EquipmentCategory extends PrototypeBase {
    }
    /**
     * The prototype of an equipment grid, for example the one used in a {@linkplain https://wiki.factorio.com/Power_armor power armor}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EquipmentGridPrototype.html Online documentation}
     */
    export interface EquipmentGridPrototype extends PrototypeBase {
    }
    /**
     * Abstract base of all equipment modules. Equipment modules can be inserted into {@link EquipmentGridPrototype equipment grids}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EquipmentPrototype.html Online documentation}
     */
    export interface EquipmentPrototype extends PrototypeBase {
    }
    /**
     * Used to play an animation and a sound.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ExplosionPrototype.html Online documentation}
     */
    export interface ExplosionPrototype extends EntityPrototype {
    }
    /**
     * This prototype is used for receiving an achievement when the player finishes the game.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FinishTheGameAchievementPrototype.html Online documentation}
     */
    export interface FinishTheGameAchievementPrototype extends OmitType<AchievementPrototype> {
    }
    /**
     * A fire.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FireFlamePrototype.html Online documentation}
     */
    export interface FireFlamePrototype extends EntityPrototype {
    }
    /**
     * Entity that spawns in water tiles, which can be mined. Moves around unless deactivated with {@link import("factorio:runtime").undefined#active LuaEntity::active} = false.
     * @example
     * {
     *   type = "fish",
     *   name = "fish",
     *   icon = "__base__/graphics/icons/fish.png",
     *   icon_size = 64, icon_mipmaps = 4,
     *   flags = { "placeable-neutral", "not-on-map" },
     *   minable = { mining_time = 1, result = "raw-fish", count = 5 },
     *   max_health = 20,
     *   subgroup = "creatures",
     *   order = "b-a",
     *   collision_box = { {-0.75, -0.75}, {0.75, 0.75} },
     *   selection_box = { {-0.5, -0.3}, {0.5, 0.3} },
     *   pictures =
     *   {
     *     {
     *       filename = "__base__/graphics/entity/fish/fish-1.png",
     *       priority = "extra-high",
     *       width = 22,
     *       height = 36
     *     },
     *     {
     *       filename = "__base__/graphics/entity/fish/fish-2.png",
     *       priority = "extra-high",
     *       width = 32,
     *       height = 32
     *     }
     *   },
     *   autoplace = { influence = 0.01 },
     *   protected_from_tile_building = false
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FishPrototype.html Online documentation}
     */
    export interface FishPrototype extends EntityWithHealthPrototype {
    }
    /**
     * Explosion that can deal damage.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FlameThrowerExplosionPrototype.html Online documentation}
     */
    export interface FlameThrowerExplosionPrototype extends OmitType<ExplosionPrototype> {
    }
    /**
     * A fluid.
     * @example
     * {
     *   type = "fluid",
     *   name = "water",
     *   default_temperature = 15,
     *   max_temperature = 100,
     *   heat_capacity = "0.2KJ",
     *   base_color = { r = 0, g = 0.34, b = 0.6 },
     *   flow_color = { r = 0.7, g = 0.7, b = 0.7 },
     *   icon = "__base__/graphics/icons/fluid/water.png",
     *   icon_size = 64,
     *   icon_mipmaps = 4,
     *   order = "a[fluid]-a[water]"
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidPrototype.html Online documentation}
     */
    export interface FluidPrototype extends PrototypeBase {
    }
    /**
     * Used for example for the handheld flamethrower.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidStreamPrototype.html Online documentation}
     */
    export interface FluidStreamPrototype extends EntityPrototype {
    }
    /**
     * A turret that consumes fluid as ammo.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidTurretPrototype.html Online documentation}
     */
    export interface FluidTurretPrototype extends OmitType<TurretPrototype> {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Fluid_wagon fluid wagon}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidWagonPrototype.html Online documentation}
     */
    export interface FluidWagonPrototype extends RollingStockPrototype {
    }
    /**
     * Abstract base for construction/logistics and combat robots.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FlyingRobotPrototype.html Online documentation}
     */
    export interface FlyingRobotPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * An upwards flying text that disappears after a certain time (setting {@link import("factorio:runtime").undefined#active LuaEntity::active} = false stops the flying and the disappearing.)
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FlyingTextPrototype.html Online documentation}
     */
    export interface FlyingTextPrototype extends EntityPrototype {
    }
    /**
     * Fonts are used in all GUIs in the game.
     * @example
     * {
     *   type = "font",
     *   name = "default-button",
     *   from = "default-bold",
     *   size = 18
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FontPrototype.html Online documentation}
     */
    export interface FontPrototype {
    }
    /**
     * Each item which has a fuel_value must have a fuel category. The fuel categories are used to allow only certain fuels to be used in {@link EnergySource}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FuelCategory.html Online documentation}
     */
    export interface FuelCategory extends PrototypeBase {
    }
    /**
     * A furnace. Normal furnaces only process "smelting" category recipes, but you can make furnaces that process other {@link RecipeCategory recipe categories}. The difference to assembling machines is that furnaces automatically choose their recipe based on input.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FurnacePrototype.html Online documentation}
     */
    export interface FurnacePrototype extends CraftingMachinePrototype {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Gate gate}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GatePrototype.html Online documentation}
     */
    export interface GatePrototype extends EntityWithOwnerPrototype {
    }
    /**
     * Used by {@linkplain https://wiki.factorio.com/Portable_fusion_reactor portable fusion reactor}. Provides power in equipment grids. Can produce power for free or use a burner energy source.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GeneratorEquipmentPrototype.html Online documentation}
     */
    export interface GeneratorEquipmentPrototype extends EquipmentPrototype {
    }
    /**
     * An entity that produces power from fluids, for example a {@linkplain https://wiki.factorio.com/Steam_engine steam engine}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GeneratorPrototype.html Online documentation}
     */
    export interface GeneratorPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * Properties of the god controller.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GodControllerPrototype.html Online documentation}
     */
    export interface GodControllerPrototype {
    }
    /**
     * This prototype is used for receiving an achievement when the player gets attacked due to pollution.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GroupAttackAchievementPrototype.html Online documentation}
     */
    export interface GroupAttackAchievementPrototype extends OmitType<AchievementPrototype> {
    }
    /**
     * The available GUI styles.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GuiStyle.html Online documentation}
     */
    export interface GuiStyle extends PrototypeBase {
    }
    /**
     * A gun. A weapon to deal damage to entities.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GunPrototype.html Online documentation}
     */
    export interface GunPrototype extends OmitType<ItemPrototype> {
    }
    /**
     * This entity produces or consumes heat. Its heat settings can be changed runtime.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/HeatInterfacePrototype.html Online documentation}
     */
    export interface HeatInterfacePrototype extends EntityWithOwnerPrototype {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Heat_pipe heat pipe}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/HeatPipePrototype.html Online documentation}
     */
    export interface HeatPipePrototype extends EntityWithOwnerPrototype {
    }
    /**
     * Used to attach graphics for {@link CursorBoxType cursor boxes} to entities during runtime. HighlightBoxEntity can also be independent from entities so it is simply drawn somewhere in the world. See {@link import("factorio:runtime").undefined#create_entity LuaSurface::create_entity} for the available options for type "highlight-box".
     *
     * The {@link EntityPrototype#collision_box collision_box} of the highlight box prototype is ignored during runtime, instead the "bounding_box" given in create_entity() or the selection box of the target entity is used.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/HighlightBoxEntityPrototype.html Online documentation}
     */
    export interface HighlightBoxEntityPrototype extends EntityPrototype {
    }
    /**
     * A generic container, such as a chest, that can spawn or void items and interact with the logistics network.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/InfinityContainerPrototype.html Online documentation}
     */
    export interface InfinityContainerPrototype extends OmitType<LogisticContainerPrototype> {
    }
    /**
     * This entity produces or consumes fluids. Its fluid settings can be changed runtime.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/InfinityPipePrototype.html Online documentation}
     */
    export interface InfinityPipePrototype extends OmitType<PipePrototype> {
    }
    /**
     * An {@linkplain https://wiki.factorio.com/Inserter inserter}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/InserterPrototype.html Online documentation}
     */
    export interface InserterPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * The entity used for items on the ground.
     * @example
     * {
     *   type = "item-entity",
     *   name = "item-on-ground",
     *   flags = { "placeable-off-grid", "not-on-map" },
     *   collision_box = { {-0.14, -0.14}, {0.14, 0.14} },
     *   selection_box = { {-0.17, -0.17}, {0.17, 0.17} },
     *   minable = { mining_time = 0.025 }
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemEntityPrototype.html Online documentation}
     */
    export interface ItemEntityPrototype extends EntityPrototype {
    }
    /**
     * An item group. Item groups are shown above the list of craftable items in the player's inventory. The built-in groups are "logistics", "production", "intermediate-products" and "combat" but mods can define their own.
     *
     * Items are sorted into item groups by sorting them into a {@link ItemPrototype#subgroup subgroup} which then belongs to a {@link ItemSubGroup#group item group}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemGroup.html Online documentation}
     */
    export interface ItemGroup extends PrototypeBase {
    }
    /**
     * Possible configuration for all items.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemPrototype.html Online documentation}
     */
    export interface ItemPrototype extends PrototypeBase {
    }
    /**
     * Entity used to signify that an entity is requesting items, for example modules for an assembling machine after it was blueprinted with modules inside.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemRequestProxyPrototype.html Online documentation}
     */
    export interface ItemRequestProxyPrototype extends EntityPrototype {
    }
    /**
     * An item subgroup. The built-in subgroups can be found {@linkplain https://wiki.factorio.com/Data.raw#item-subgroup here}. See {@link ItemPrototype#subgroup ItemPrototype::subgroup}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemSubGroup.html Online documentation}
     */
    export interface ItemSubGroup extends PrototypeBase {
    }
    /**
     * ItemWithEntityData saves data associated with the entity that it represents, for example the content of the equipment grid of a car.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemWithEntityDataPrototype.html Online documentation}
     */
    export interface ItemWithEntityDataPrototype extends OmitType<ItemPrototype> {
    }
    /**
     * The inventory allows setting player defined filters similar to cargo wagon inventories.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemWithInventoryPrototype.html Online documentation}
     */
    export interface ItemWithInventoryPrototype extends OmitType<ItemWithLabelPrototype> {
    }
    /**
     * Like a normal item but with the ability to have a colored label.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemWithLabelPrototype.html Online documentation}
     */
    export interface ItemWithLabelPrototype extends OmitType<ItemPrototype> {
    }
    /**
     * Item type that can store any basic arbitrary Lua data, see {@link import("factorio:runtime").undefined#tags LuaItemStack::tags}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemWithTagsPrototype.html Online documentation}
     */
    export interface ItemWithTagsPrototype extends OmitType<ItemWithLabelPrototype> {
    }
    /**
     * This prototype is used for receiving an achievement when the player destroys a certain amount of an entity, with a specific damage type.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/KillAchievementPrototype.html Online documentation}
     */
    export interface KillAchievementPrototype extends OmitType<AchievementPrototype> {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Lab lab}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LabPrototype.html Online documentation}
     */
    export interface LabPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Lamp lamp} to provide light, using energy.
     * @example
     * {
     *   type = "lamp",
     *   name = "small-lamp",
     *   icon = "__base__/graphics/icons/small-lamp.png",
     *   icon_size = 64, icon_mipmaps = 4,
     *   flags = {"placeable-neutral", "player-creation"},
     *   minable = {mining_time = 0.1, result = "small-lamp"},
     *   max_health = 100,
     *   corpse = "lamp-remnants",
     *   dying_explosion = "lamp-explosion",
     *   collision_box = {{-0.15, -0.15}, {0.15, 0.15}},
     *   selection_box = {{-0.5, -0.5}, {0.5, 0.5}},
     *   energy_source =
     *   {
     *     type = "electric",
     *     usage_priority = "lamp"
     *   },
     *   energy_usage_per_tick = "5KW",
     *   darkness_for_all_lamps_on = 0.5,
     *   darkness_for_all_lamps_off = 0.3,
     *   light = {intensity = 0.9, size = 40, color = {r=1.0, g=1.0, b=0.75}},
     *   light_when_colored = {intensity = 0, size = 6, color = {r=1.0, g=1.0, b=0.75}},
     *   glow_size = 6,
     *   glow_color_intensity = 1,
     *   glow_render_mode = "multiplicative",
     *   picture_off =
     *   {
     *     layers =
     *     {
     *       {
     *         filename = "__base__/graphics/entity/small-lamp/lamp.png",
     *         priority = "high",
     *         width = 42,
     *         height = 36,
     *         frame_count = 1,
     *         axially_symmetrical = false,
     *         direction_count = 1,
     *         shift = util.by_pixel(0,3)
     *       },
     *       {
     *         filename = "__base__/graphics/entity/small-lamp/lamp-shadow.png",
     *         priority = "high",
     *         width = 38,
     *         height = 24,
     *         frame_count = 1,
     *         axially_symmetrical = false,
     *         direction_count = 1,
     *         shift = util.by_pixel(4,5),
     *         draw_as_shadow = true
     *       }
     *     }
     *   },
     *   picture_on =
     *   {
     *     filename = "__base__/graphics/entity/small-lamp/lamp-light.png",
     *     priority = "high",
     *     width = 46,
     *     height = 40,
     *     frame_count = 1,
     *     axially_symmetrical = false,
     *     direction_count = 1,
     *     shift = util.by_pixel(0, -7)
     *   },
     *   signal_to_color_mapping =
     *   {
     *     {type = "virtual", name = "signal-red",    color = {r = 1, g = 0, b = 0}},
     *     {type = "virtual", name = "signal-green",  color = {r = 0, g = 1, b = 0}},
     *     {type = "virtual", name = "signal-blue",   color = {r = 0, g = 0, b = 1}},
     *     {type = "virtual", name = "signal-yellow", color = {r = 1, g = 1, b = 0}},
     *     {type = "virtual", name = "signal-pink",   color = {r = 1, g = 0, b = 1}},
     *     {type = "virtual", name = "signal-cyan",   color = {r = 0, g = 1, b = 1}},
     *     {type = "virtual", name = "signal-white",  color = {r = 1, g = 1, b = 1}}
     *   },
     *
     *   circuit_wire_connection_point = circuit_connector_definitions["lamp"].points,
     *   circuit_connector_sprites = circuit_connector_definitions["lamp"].sprites,
     *   circuit_wire_max_distance = default_circuit_wire_max_distance
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LampPrototype.html Online documentation}
     */
    export interface LampPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Land_mine land mine}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LandMinePrototype.html Online documentation}
     */
    export interface LandMinePrototype extends EntityWithOwnerPrototype {
    }
    /**
     * Deprecated in 0.18. Particles that are exclusively meant for leaves of trees. The type "leaf-particle" has been obsoleted and cannot be created. See {@link ParticlePrototype} for particles.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LeafParticlePrototype.html Online documentation}
     */
    export interface LeafParticlePrototype extends OmitType<EntityParticlePrototype> {
    }
    /**
     * A belt that can be connected to a belt anywhere else, including on a different surface. The linked belts have to be {@linkplain https://wiki.factorio.com/Console#Connect_linked_belts connected with console commands} or runtime scripting in mods or scenarios. {@link import("factorio:runtime").undefined#connect_linked_belts LuaEntity::connect_linked_belts} and other runtime functions.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LinkedBeltPrototype.html Online documentation}
     */
    export interface LinkedBeltPrototype extends TransportBeltConnectablePrototype {
    }
    /**
     * A container that shares its inventory with containers with the same {@link import("factorio:runtime").undefined#link_id link_id}, which can be set via the GUI. The link IDs are per prototype and force, so only containers with the **same ID**, **same prototype name** and **same force** will share inventories.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LinkedContainerPrototype.html Online documentation}
     */
    export interface LinkedContainerPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * Continuously loads and unloads machines, as an alternative to inserters.
     *
     * This loader type is identical to {@link Loader1x2Prototype} with the exception of its hardcoded belt_distance. The belt_distance of the loader determines the distance between the position of this loader and the tile of the loader's belt target.
     *
     * This loader type always has a belt_distance of 0, meaning by default it is 1 tile long in total. For a loader type with a belt_distance of 0.5, see {@link Loader1x2Prototype}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/Loader1x1Prototype.html Online documentation}
     */
    export interface Loader1x1Prototype extends LoaderPrototype {
    }
    /**
     * Continuously loads and unloads machines, as an alternative to inserters.
     *
     * This loader type is identical to {@link Loader1x1Prototype} with the exception of its hardcoded belt_distance. The belt_distance of the loader determines the distance between the position of this loader and the tile of the loader's belt target.
     *
     * This loader type always has a belt_distance of 0.5, meaning by default it is 2 tiles long in total. For a loader type with a belt_distance of 0, see {@link Loader1x1Prototype}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/Loader1x2Prototype.html Online documentation}
     */
    export interface Loader1x2Prototype extends LoaderPrototype {
    }
    /**
     * Continuously loads and unloads machines, as an alternative to inserters.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LoaderPrototype.html Online documentation}
     */
    export interface LoaderPrototype extends TransportBeltConnectablePrototype {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Locomotive locomotive}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LocomotivePrototype.html Online documentation}
     */
    export interface LocomotivePrototype extends RollingStockPrototype {
    }
    /**
     * A generic container, such as a chest, that interacts with the logistics network.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LogisticContainerPrototype.html Online documentation}
     */
    export interface LogisticContainerPrototype extends OmitType<ContainerPrototype> {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Logistic_robot logistic robot}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LogisticRobotPrototype.html Online documentation}
     */
    export interface LogisticRobotPrototype extends RobotWithLogisticInterfacePrototype {
    }
    /**
     * The available map gen presets.
     * @example
     * {
     *   type = "map-gen-presets",
     *   name = "default",
     *   ["marathon"] =
     *   {
     *     order = "c",
     *     basic_settings =
     *     {
     *       property_expression_names = {},
     *     },
     *     advanced_settings =
     *     {
     *       difficulty_settings =
     *       {
     *         recipe_difficulty = defines.difficulty_settings.recipe_difficulty.expensive,
     *         technology_difficulty = defines.difficulty_settings.technology_difficulty.expensive,
     *         technology_price_multiplier = 4
     *       }
     *     }
     *   },
     *   ["island"] =
     *   {
     *     order = "g",
     *     basic_settings =
     *     {
     *       property_expression_names =
     *       {
     *         elevation = "0_17-island",
     *       },
     *       autoplace_controls = {},
     *       terrain_segmentation = 1,
     *     }
     *   }
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MapGenPresets.html Online documentation}
     */
    export interface MapGenPresets {
    }
    /**
     * The default map settings.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MapSettings.html Online documentation}
     */
    export interface MapSettings {
    }
    /**
     * Offers can be added to a market and they are shown when opening the entity. Offers allow to spend items to get research bonuses or items.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MarketPrototype.html Online documentation}
     */
    export interface MarketPrototype {
    }
    /**
     * A mining drill for automatically extracting resources from {@link ResourceEntityPrototype resource entities}. This prototype type is used by {@linkplain https://wiki.factorio.com/Burner_mining_drill burner mining drill}, {@linkplain https://wiki.factorio.com/Electric_mining_drill electric mining drill} and {@linkplain https://wiki.factorio.com/Pumpjack pumpjack} in vanilla.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MiningDrillPrototype.html Online documentation}
     */
    export interface MiningDrillPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * Exists only for migration, cannot be used by mods.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MiningToolPrototype.html Online documentation}
     */
    export interface MiningToolPrototype extends OmitType<ToolPrototype> {
    }
    /**
     * A module category. The built-in categories can be found {@linkplain https://wiki.factorio.com/Data.raw#module-category here}. See {@link ModulePrototype#category ModulePrototype::category}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ModuleCategory.html Online documentation}
     */
    export interface ModuleCategory extends PrototypeBase {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Module module}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ModulePrototype.html Online documentation}
     */
    export interface ModulePrototype extends OmitType<ItemPrototype> {
    }
    /**
     * Used by {@link SelectionToolPrototype#mouse_cursor SelectionToolPrototype::mouse_cursor}.
     * @example
     * {
     *   type = "mouse-cursor",
     *   name = "selection-tool-cursor",
     *   filename = "__core__/graphics/cross-select-x32.png",
     *   hot_pixel_x = 16,
     *   hot_pixel_y = 16
     * }
     * @example
     * {
     *   type = "mouse-cursor",
     *   name = "system-crosshair",
     *   system_cursor = "crosshair"
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MouseCursor.html Online documentation}
     */
    export interface MouseCursor {
    }
    /**
     * Used by {@linkplain https://wiki.factorio.com/Exoskeleton exoskeleton}. Increases max speed of characters or acceleration of vehicles if they have this equipment in their grid.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MovementBonusEquipmentPrototype.html Online documentation}
     */
    export interface MovementBonusEquipmentPrototype extends EquipmentPrototype {
    }
    /**
     * A {@link NoiseExpression} with a name. The base game uses named noise expressions to specify functions for many map properties to be used in map generation; e.g. the "elevation" expression is used to calculate elevation for every point on a map. For a list of the built-in named noise expressions, see {@linkplain https://wiki.factorio.com/Data.raw#noise-expression data.raw}.
     *
     * Named noise expressions can be used by {@link MapGenSettings} and {@link MapGenPreset} to override which named expression is used to calculate a given property by having an entry in `property_expression_names`, e.g. `elevation = "0.16-elevation"`.
     *
     * Alternate expressions can be made available in the map generator GUI by setting their `intended_property` to the name of the property they should override.
     *
     * Named noise expressions can also be used by {@link NoiseExpression#variable noise variables}, e.g. `noise.var("my-named-expression")`.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/NamedNoiseExpression.html Online documentation}
     */
    export interface NamedNoiseExpression extends PrototypeBase {
    }
    /**
     * Used by {@linkplain https://wiki.factorio.com/Nightvision nightvision}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/NightVisionEquipmentPrototype.html Online documentation}
     */
    export interface NightVisionEquipmentPrototype extends EquipmentPrototype {
    }
    /**
     * A noise layer used by the {@link AutoplacePeak#noise_layer autoplace system}. For a list of built-in layers, see {@linkplain https://wiki.factorio.com/Data.raw#noise-layer here}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/NoiseLayer.html Online documentation}
     */
    export interface NoiseLayer extends PrototypeBase {
    }
    /**
     * An {@linkplain https://wiki.factorio.com/Offshore_pump offshore pump}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/OffshorePumpPrototype.html Online documentation}
     */
    export interface OffshorePumpPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * An entity with a limited lifetime that can use trigger effects.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ParticlePrototype.html Online documentation}
     */
    export interface ParticlePrototype extends PrototypeBase {
    }
    /**
     * Creates particles.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ParticleSourcePrototype.html Online documentation}
     */
    export interface ParticleSourcePrototype extends EntityPrototype {
    }
    /**
     * An entity to transport fluids over a distance and between machines.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PipePrototype.html Online documentation}
     */
    export interface PipePrototype extends EntityWithOwnerPrototype {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Pipe_to_ground pipe to ground}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PipeToGroundPrototype.html Online documentation}
     */
    export interface PipeToGroundPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * This prototype is used for receiving an achievement when the player receives damage.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PlayerDamagedAchievementPrototype.html Online documentation}
     */
    export interface PlayerDamagedAchievementPrototype extends OmitType<AchievementPrototype> {
    }
    /**
     * When a character dies, this entity will immediately respawn the character at the entities location, so there is no respawn time. If there are multiple player ports in the world, the character will respawn at the nearest player port to their death location.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PlayerPortPrototype.html Online documentation}
     */
    export interface PlayerPortPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Power_switch power switch}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PowerSwitchPrototype.html Online documentation}
     */
    export interface PowerSwitchPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * This prototype is used for receiving an achievement when the player produces more than the specified amount of items.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ProduceAchievementPrototype.html Online documentation}
     */
    export interface ProduceAchievementPrototype extends OmitType<AchievementPrototype> {
    }
    /**
     * This prototype is used for receiving an achievement when the player crafts a specified item a certain amount, in an hour.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ProducePerHourAchievementPrototype.html Online documentation}
     */
    export interface ProducePerHourAchievementPrototype extends OmitType<AchievementPrototype> {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Programmable_speaker programmable speaker}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ProgrammableSpeakerPrototype.html Online documentation}
     */
    export interface ProgrammableSpeakerPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * Entity with limited lifetime that can hit other entities and has triggers when this happens.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ProjectilePrototype.html Online documentation}
     */
    export interface ProjectilePrototype extends EntityPrototype {
    }
    /**
     * The abstract base for prototypes. PrototypeBase defines the common features of prototypes, such as localization and order.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PrototypeBase.html Online documentation}
     */
    export interface PrototypeBase {
    }
    /**
     * The pump is used to transfer fluids between tanks, fluid wagons and pipes.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PumpPrototype.html Online documentation}
     */
    export interface PumpPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Radar radar}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RadarPrototype.html Online documentation}
     */
    export interface RadarPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Rail_chain_signal rail chain signal}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RailChainSignalPrototype.html Online documentation}
     */
    export interface RailChainSignalPrototype extends RailSignalBasePrototype {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Rail_planner rail planner}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RailPlannerPrototype.html Online documentation}
     */
    export interface RailPlannerPrototype extends OmitType<ItemPrototype> {
    }
    /**
     * The abstract base of both rail prototypes.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RailPrototype.html Online documentation}
     */
    export interface RailPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * Used for rail corpses.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RailRemnantsPrototype.html Online documentation}
     */
    export interface RailRemnantsPrototype extends OmitType<CorpsePrototype> {
    }
    /**
     * The abstract base entity for both rail signals.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RailSignalBasePrototype.html Online documentation}
     */
    export interface RailSignalBasePrototype extends EntityWithOwnerPrototype {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Rail_signal rail signal}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RailSignalPrototype.html Online documentation}
     */
    export interface RailSignalPrototype extends RailSignalBasePrototype {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Reactor reactor}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ReactorPrototype.html Online documentation}
     */
    export interface ReactorPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * A recipe category. The built-in categories can be found {@linkplain https://wiki.factorio.com/Data.raw#recipe-category here}. See {@link RecipePrototype#category RecipePrototype::category}. Recipe categories can be used to specify which {@link CraftingMachinePrototype#crafting_categories machine} can craft which {@link RecipePrototype recipes}.
     *
     * The recipe category with the name "crafting" cannot contain recipes with fluid ingredients or products.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RecipeCategory.html Online documentation}
     */
    export interface RecipeCategory extends PrototypeBase {
    }
    /**
     * A recipe. It can be a crafting recipe, a smelting recipe, or a custom type of recipe, see {@link RecipeCategory}.
     *
     * This prototype has two different formats that can be specified. If both `normal` and `expensive` are not defined, the standard properties define this recipe. Otherwise, they are ignored, and the `normal` and `expensive` properties are used exclusively to define this recipe.
     * @example
     * {
     *   type = "recipe",
     *   name = "iron-plate",
     *   category = "smelting",
     *   energy_required = 3.5,
     *   ingredients = {{"iron-ore", 1}},
     *   result = "iron-plate"
     * }
     * @example
     * {
     *   type = "recipe",
     *   name = "coal-liquefaction",
     *   category = "oil-processing",
     *   subgroup = "fluid-recipes",
     *   order = "a[oil-processing]-c[coal-liquefaction]",
     *   enabled = false,
     *   energy_required = 5,
     *   icon = "__base__/graphics/icons/fluid/coal-liquefaction.png",
     *   icon_size = 32,
     *   ingredients =
     *   {
     *     {type="item", name="coal", amount=10},
     *     {type="fluid", name="heavy-oil", amount=25},
     *     {type="fluid", name="steam", amount=50}
     *   },
     *   results=
     *   {
     *     {type="fluid", name="heavy-oil", amount=35},
     *     {type="fluid", name="light-oil", amount=15},
     *     {type="fluid", name="petroleum-gas", amount=20}
     *   },
     *   allow_decomposition = false
     * }
     * @example
     * {  -- Recipe with difficulty
     *   type = "recipe",
     *   name = "iron-gear-wheel",
     *   normal =
     *   {
     *     ingredients = {{"iron-plate", 2}},
     *     result = "iron-gear-wheel"
     *   },
     *   expensive =
     *   {
     *     ingredients = {{"iron-plate", 4}},
     *     result = "iron-gear-wheel"
     *   }
     * }
     * @example
     * {  -- Uncraftable in normal mode (unless unlocked via command/research)
     *   type = "recipe",
     *   name = "iron-gear-wheel",
     *   normal = false,
     *   expensive =
     *   {
     *     ingredients = {{"iron-plate", 4}},
     *     result = "iron-gear-wheel"
     *   }
     * }
     * @example
     * {  -- Expensive recipe always used, even when in normal mode
     *   type = "recipe",
     *   name = "iron-gear-wheel",
     *   normal = nil, -- can be omitted
     *   expensive =
     *   {
     *     ingredients = {{"iron-plate", 4}},
     *     result = "iron-gear-wheel"
     *   }
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RecipePrototype.html Online documentation}
     */
    export interface RecipePrototype extends PrototypeBase {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Repair_pack repair pack}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RepairToolPrototype.html Online documentation}
     */
    export interface RepairToolPrototype extends OmitType<ToolPrototype> {
    }
    /**
     * This prototype is used for receiving an achievement when the player completes a specific research.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ResearchAchievementPrototype.html Online documentation}
     */
    export interface ResearchAchievementPrototype extends OmitType<AchievementPrototype> {
    }
    /**
     * A resource category. The built-in categories can be found {@linkplain https://wiki.factorio.com/Data.raw#resource-category here}. See {@link ResourceEntityPrototype#category ResourceEntityPrototype::category}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ResourceCategory.html Online documentation}
     */
    export interface ResourceCategory extends PrototypeBase {
    }
    /**
     * A mineable/gatherable entity. Its {@link EntityPrototype#collision_mask collision_mask} must contain "resource-layer" if it should be minable with a {@link MiningDrillPrototype}.
     * @example
     * {
     *   type = "resource",
     *   name = "crude-oil",
     *   icon = "__base__/graphics/icons/crude-oil.png",
     *   icon_size = 32,
     *   flags = {"placeable-neutral"},
     *   category = "basic-fluid",
     *   order="a-b-a",
     *   infinite = true,
     *   highlight = true,
     *   minimum = 60000,
     *   normal = 300000,
     *   infinite_depletion_amount = 10,
     *   resource_patch_search_radius = 12,
     *   tree_removal_probability = 0.7,
     *   tree_removal_max_distance = 32 * 32,
     *   minable =
     *   {
     *     mining_time = 1,
     *     results =
     *     {
     *       {
     *         type = "fluid",
     *         name = "crude-oil",
     *         amount_min = 10,
     *         amount_max = 10,
     *         probability = 1
     *       }
     *     }
     *   },
     *   collision_box = {{ -1.4, -1.4}, {1.4, 1.4}},
     *   selection_box = {{ -0.5, -0.5}, {0.5, 0.5}},
     *   autoplace = resource_autoplace.resource_autoplace_settings{
     *     name = "crude-oil",
     *     order = "c", -- Other resources are "b"; oil won't get placed if something else is already there.
     *     base_density = 8.2,
     *     base_spots_per_km2 = 1.8,
     *     random_probability = 1/48,
     *     random_spot_size_minimum = 1,
     *     random_spot_size_maximum = 1, -- don't randomize spot size
     *     additional_richness = 220000, -- this increases the total everywhere, so base_density needs to be decreased to compensate
     *     has_starting_area_placement = false,
     *     resource_index = resource_autoplace.resource_indexes["crude-oil"],
     *     regular_rq_factor_multiplier = 1
     *   },
     *   stage_counts = {0},
     *   stages =
     *   {
     *     sheet =
     *     {
     *       filename = "__base__/graphics/entity/crude-oil/crude-oil.png",
     *       priority = "extra-high",
     *       width = 75,
     *       height = 61,
     *       frame_count = 4,
     *       variation_count = 1
     *     }
     *   },
     *   map_color = {r=0.78, g=0.2, b=0.77},
     *   map_grid = false
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ResourceEntityPrototype.html Online documentation}
     */
    export interface ResourceEntityPrototype extends EntityPrototype {
    }
    /**
     * Used by {@linkplain https://wiki.factorio.com/Personal_roboport personal roboport}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportEquipmentPrototype.html Online documentation}
     */
    export interface RoboportEquipmentPrototype extends EquipmentPrototype {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Roboport roboport}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportPrototype.html Online documentation}
     */
    export interface RoboportPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * The common properties of logistic and construction robots represented by an abstract prototype.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RobotWithLogisticInterfacePrototype.html Online documentation}
     */
    export interface RobotWithLogisticInterfacePrototype extends FlyingRobotPrototype {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Rocket_silo rocket silo}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RocketSiloPrototype.html Online documentation}
     */
    export interface RocketSiloPrototype extends OmitType<AssemblingMachinePrototype> {
    }
    /**
     * The rocket inside the rocket silo.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RocketSiloRocketPrototype.html Online documentation}
     */
    export interface RocketSiloRocketPrototype extends EntityPrototype {
    }
    /**
     * The shadow of the rocket inside the rocket silo.
     * @example
     * {
     *   type = "rocket-silo-rocket-shadow",
     *   name = "rocket-silo-rocket-shadow",
     *   flags = {"not-on-map"},
     *   collision_mask = {"not-colliding-with-itself"},
     *   collision_box = {{0, 0}, {10, 3.5}},
     *   selection_box = {{0, 0}, {0, 0}}
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RocketSiloRocketShadowPrototype.html Online documentation}
     */
    export interface RocketSiloRocketShadowPrototype extends EntityPrototype {
    }
    /**
     * The abstract base of all rolling stock.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RollingStockPrototype.html Online documentation}
     */
    export interface RollingStockPrototype extends VehiclePrototype {
    }
    /**
     * Used in the base game as a base for the blueprint item and the deconstruction item.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SelectionToolPrototype.html Online documentation}
     */
    export interface SelectionToolPrototype extends OmitType<ItemWithLabelPrototype> {
    }
    /**
     * Definition for a shortcut button in the {@linkplain https://wiki.factorio.com/Shortcut_bar shortcut bar}.
     *
     * This is **not** a custom keybinding (keyboard shortcut), for that see {@link CustomInputPrototype}.
     * @example
     * {
     *   type = "shortcut",
     *   name = "give-deconstruction-planner",
     *   order = "b[blueprints]-g[deconstruction-planner]",
     *   action = "spawn-item",
     *   localised_name = {"shortcut.make-deconstruction-planner"},
     *   associated_control_input = "give-deconstruction-planner",
     *   technology_to_unlock = "construction-robotics",
     *   item_to_spawn = "deconstruction-planner",
     *   style = "red",
     *   icon =
     *   {
     *     filename = "__base__/graphics/icons/shortcut-toolbar/mip/new-deconstruction-planner-x32-white.png",
     *     priority = "extra-high-no-scale",
     *     size = 32,
     *     mipmap_count = 2,
     *     flags = {"gui-icon"}
     *   },
     *   small_icon =
     *   {
     *     filename = "__base__/graphics/icons/shortcut-toolbar/mip/new-deconstruction-planner-x24-white.png",
     *     priority = "extra-high-no-scale",
     *     size = 24,
     *     mipmap_count = 2,
     *     flags = {"gui-icon"}
     *   },
     *   disabled_small_icon =
     *   {
     *     filename = "__base__/graphics/icons/shortcut-toolbar/mip/new-deconstruction-planner-x24-white.png",
     *     priority = "extra-high-no-scale",
     *     size = 24,
     *     mipmap_count = 2,
     *     flags = {"gui-icon"}
     *   }
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ShortcutPrototype.html Online documentation}
     */
    export interface ShortcutPrototype extends PrototypeBase {
    }
    /**
     * An extremely basic entity with no special functionality. Used for minable rocks.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SimpleEntityPrototype.html Online documentation}
     */
    export interface SimpleEntityPrototype extends EntityWithHealthPrototype {
    }
    /**
     * By default, this entity will be a priority target for units/turrets, who will choose to attack it even if it does not block their path. Use {@link SimpleEntityWithOwnerPrototype} for entities that are only attacked when they block enemies.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SimpleEntityWithForcePrototype.html Online documentation}
     */
    export interface SimpleEntityWithForcePrototype extends OmitType<SimpleEntityWithOwnerPrototype> {
    }
    /**
     * Has a force, but unlike {@link SimpleEntityWithForcePrototype} it is only attacked if the biters get stuck on it (or if {@link EntityWithOwnerPrototype#is_military_target EntityWithOwnerPrototype::is_military_target} set to true to make the two entity types equivalent).
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SimpleEntityWithOwnerPrototype.html Online documentation}
     */
    export interface SimpleEntityWithOwnerPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * Deprecated in 0.16. The type "simple-smoke" has been obsoleted and cannot be created. Use {@link TrivialSmokePrototype} or {@link SmokeWithTriggerPrototype} instead.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SimpleSmokePrototype.html Online documentation}
     */
    export interface SimpleSmokePrototype extends SmokePrototype {
    }
    /**
     * Abstract entity that has an animation.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SmokePrototype.html Online documentation}
     */
    export interface SmokePrototype extends EntityPrototype {
    }
    /**
     * An entity with animation and a trigger.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SmokeWithTriggerPrototype.html Online documentation}
     */
    export interface SmokeWithTriggerPrototype extends SmokePrototype {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Portable_solar_panel portable solar panel}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SolarPanelEquipmentPrototype.html Online documentation}
     */
    export interface SolarPanelEquipmentPrototype extends EquipmentPrototype {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Solar_panel solar panel}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SolarPanelPrototype.html Online documentation}
     */
    export interface SolarPanelPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * Specifies a sound that can be used with {@link import("factorio:runtime").undefined SoundPath} at runtime.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SoundPrototype.html Online documentation}
     */
    export interface SoundPrototype {
    }
    /**
     * Properties of the spectator controller.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpectatorControllerPrototype.html Online documentation}
     */
    export interface SpectatorControllerPrototype {
    }
    /**
     * A speech bubble. It floats in the world and can display text.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpeechBubblePrototype.html Online documentation}
     */
    export interface SpeechBubblePrototype extends EntityPrototype {
    }
    /**
     * Used by {@link SpiderLegSpecification} for {@link SpiderVehiclePrototype}, also known as {@linkplain https://wiki.factorio.com/Spidertron spidertron}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpiderLegPrototype.html Online documentation}
     */
    export interface SpiderLegPrototype extends EntityWithHealthPrototype {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Spidertron spidertron}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpiderVehiclePrototype.html Online documentation}
     */
    export interface SpiderVehiclePrototype extends VehiclePrototype {
    }
    /**
     * The {@linkplain https://wiki.factorio.com/Spidertron_remote spidertron remote}. This remote can only be connected to entities of type {@link SpiderVehiclePrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpidertronRemotePrototype.html Online documentation}
     */
    export interface SpidertronRemotePrototype extends OmitType<ItemPrototype> {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Splitter splitter}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SplitterPrototype.html Online documentation}
     */
    export interface SplitterPrototype extends TransportBeltConnectablePrototype {
    }
    /**
     * Specifies an image that can be used with {@link import("factorio:runtime").undefined SpritePath} at runtime.
     * @example
     * {
     *   type = "sprite"
     *   name = "accumulator-sprite",
     *   filename = "__base__/graphics/entity/basic-accumulator/basic-accumulator.png",
     *   priority = "extra-high",
     *   width = 124,
     *   height = 103,
     *   shift = {0.7, -0.2}
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpritePrototype.html Online documentation}
     */
    export interface SpritePrototype {
    }
    /**
     * Entity that sticks to another entity, and damages/slows it. Stickers can only be attached to {@link UnitPrototype}, {@link CharacterPrototype}, {@link CarPrototype} and {@link SpiderVehiclePrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/StickerPrototype.html Online documentation}
     */
    export interface StickerPrototype extends EntityPrototype {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Storage_tank storage tank}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/StorageTankPrototype.html Online documentation}
     */
    export interface StorageTankPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * A straight rail.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/StraightRailPrototype.html Online documentation}
     */
    export interface StraightRailPrototype extends RailPrototype {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Technologies technology}.
     *
     * This prototype has two different formats that can be specified. If both `normal` and `expensive` are not defined, the standard properties define this technology. Otherwise, they are ignored, and the `normal` and `expensive` properties are used exclusively to define this technology.
     * @example
     * {
     *   type = "technology",
     *   name = "steel-processing",
     *   icon_size = 256,
     *   icon_mipmaps = 4,
     *   icon = "__base__/graphics/technology/steel-processing.png",
     *   effects =
     *   {
     *     {
     *       type = "unlock-recipe",
     *       recipe = "steel-plate"
     *     },
     *     {
     *       type = "unlock-recipe",
     *       recipe = "steel-chest"
     *     }
     *   },
     *   unit =
     *   {
     *     count = 50,
     *     ingredients = {{"automation-science-pack", 1}},
     *     time = 5
     *   },
     *   order = "c-a"
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TechnologyPrototype.html Online documentation}
     */
    export interface TechnologyPrototype extends PrototypeBase {
    }
    /**
     * Used to define the parameters for the water shader.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TileEffectDefinition.html Online documentation}
     */
    export interface TileEffectDefinition {
    }
    /**
     * The entity used for tile ghosts.
     * @example
     * {
     *   type = "tile-ghost",
     *   name = "tile-ghost",
     *   flags = {"not-on-map"},
     *   minable = { mining_time = 0, results={}},
     *   collision_box = {{-0.5, -0.5}, {0.5, 0.5}},
     *   selection_priority = 45
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TileGhostPrototype.html Online documentation}
     */
    export interface TileGhostPrototype extends EntityPrototype {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Tile tile}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TilePrototype.html Online documentation}
     */
    export interface TilePrototype extends PrototypeBase {
    }
    /**
     * A tips and tricks entry.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TipsAndTricksItem.html Online documentation}
     */
    export interface TipsAndTricksItem extends PrototypeBase {
    }
    /**
     * A {@link TipsAndTricksItem} category, used for sorting of tips and tricks entries: Tips and trick entries are sorted first by category and then by their order within that category.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TipsAndTricksItemCategory.html Online documentation}
     */
    export interface TipsAndTricksItemCategory {
    }
    /**
     * Items with a "durability". Used for {@linkplain https://wiki.factorio.com/Science_pack science packs}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ToolPrototype.html Online documentation}
     */
    export interface ToolPrototype extends OmitType<ItemPrototype> {
    }
    /**
     * This prototype is used for receiving an achievement when the player has a specified train path length.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TrainPathAchievementPrototype.html Online documentation}
     */
    export interface TrainPathAchievementPrototype extends OmitType<AchievementPrototype> {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Train_stop train stop}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TrainStopPrototype.html Online documentation}
     */
    export interface TrainStopPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * Abstract class that anything that is a belt or can connect to belts uses.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TransportBeltConnectablePrototype.html Online documentation}
     */
    export interface TransportBeltConnectablePrototype extends EntityWithOwnerPrototype {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Transport_belt transport belt}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TransportBeltPrototype.html Online documentation}
     */
    export interface TransportBeltPrototype extends TransportBeltConnectablePrototype {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Tree tree}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TreePrototype.html Online documentation}
     */
    export interface TreePrototype extends EntityWithHealthPrototype {
    }
    /**
     * The base game always internally defines a "common" trigger target type. See {@linkplain https://forums.factorio.com/71657 Design discussion: Trigger target type}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TriggerTargetType.html Online documentation}
     */
    export interface TriggerTargetType {
    }
    /**
     * Smoke, but it's not an entity for optimization purposes.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TrivialSmokePrototype.html Online documentation}
     */
    export interface TrivialSmokePrototype extends PrototypeBase {
    }
    /**
     * A turret that needs no extra ammunition. See the children for turrets that need some kind of ammunition.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TurretPrototype.html Online documentation}
     */
    export interface TurretPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * The definition of the tutorial to be used in the tips and tricks, see {@link TipsAndTricksItem}. The actual tutorial code is defined in the tutorials folder, in the folder that has the name of the scenario property.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TutorialDefinition.html Online documentation}
     */
    export interface TutorialDefinition extends PrototypeBase {
    }
    /**
     * An {@linkplain https://wiki.factorio.com/Underground_belt underground belt}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UndergroundBeltPrototype.html Online documentation}
     */
    export interface UndergroundBeltPrototype extends TransportBeltConnectablePrototype {
    }
    /**
     * Entity that moves around and attacks players, for example {@linkplain https://wiki.factorio.com/Enemies#Creatures biters and spitters}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UnitPrototype.html Online documentation}
     */
    export interface UnitPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * An {@linkplain https://wiki.factorio.com/Upgrade_planner upgrade planner}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UpgradeItemPrototype.html Online documentation}
     */
    export interface UpgradeItemPrototype extends OmitType<SelectionToolPrototype> {
    }
    /**
     * Constants used by the game that are not specific to certain prototypes. See {@linkplain https://github.com/wube/factorio-data/blob/master/core/prototypes/utility-constants.lua utility-constants.lua} for the values used by the base game.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UtilityConstants.html Online documentation}
     */
    export interface UtilityConstants extends PrototypeBase {
    }
    /**
     * Sounds used by the game that are not specific to certain prototypes.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UtilitySounds.html Online documentation}
     */
    export interface UtilitySounds extends PrototypeBase {
    }
    /**
     * Sprites used by the game that are not specific to certain prototypes.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UtilitySprites.html Online documentation}
     */
    export interface UtilitySprites extends PrototypeBase {
    }
    /**
     * Abstract base of all vehicles.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/VehiclePrototype.html Online documentation}
     */
    export interface VehiclePrototype extends EntityWithOwnerPrototype {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Circuit_network#Virtual_signals virtual signal}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/VirtualSignalPrototype.html Online documentation}
     */
    export interface VirtualSignalPrototype extends PrototypeBase {
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Wall wall}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/WallPrototype.html Online documentation}
     */
    export interface WallPrototype extends EntityWithOwnerPrototype {
    }
    /**
     * A wind sound.
     * @example
     * {
     *   type = "wind-sound",
     *   name = "wind-1",
     *   sound =
     *   {
     *     filename = "__base__/sound/wind/wind.ogg",
     *     volume = 1.0
     *   }
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/WindSound.html Online documentation}
     */
    export interface WindSound {
    }
    export type OmitType<T> = Omit<T, "type">;
}

