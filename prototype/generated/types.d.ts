// This is an auto-generated file. Do not edit directly!

/** @noSelfInFile */


/**
 * @noResolution
 */
declare module "factorio:prototype" {
    interface ActivateEquipmentCapsuleAction {
    }
    interface ActivityBarStyleSpecification {
    }
    interface AdvancedMapGenSettings {
    }
    interface AggregationSpecification {
    }
    /**
     * The name of an {@link AmmoCategory}.
     * @example
     * "bullet"
     * @example
     * "melee"
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#AmmoCategoryID Online documentation}
     */
    interface AmmoCategoryID {
    }
    interface AmmoDamageModifier {
    }
    /**
     * Used to allow specifying different ammo effects depending on which kind of entity the ammo is used in.
     *
     * If ammo is used in an entity that isn't covered by the defined source_types, e.g. only `"player"` and `"vehicle"` are defined and the ammo is used by a turret, the first defined AmmoType in the {@link AmmoItemPrototype#ammo_type AmmoItemPrototype::ammo_type} array is used.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#AmmoSourceType Online documentation}
     */
    interface AmmoSourceType {
    }
    /**
     * Definition of actual parameters used in attack.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#AmmoType Online documentation}
     */
    interface AmmoType {
    }
    interface AndTipTrigger {
    }
    interface AnimatedVector {
    }
    /**
     * Specifies an animation that can be used in the game.
     *
     * Note that if any frame of the animation is specified from the same source as any other {@link Sprite} or frame of other animation, it will be shared.
     * @example
     * animation =
     * {
     *   filename = "__base__/graphics/entity/beacon/beacon-antenna.png",
     *   width = 54,
     *   height = 50,
     *   line_length = 8,
     *   frame_count = 32,
     *   shift = { -0.03125, -1.71875},
     *   animation_speed = 0.5
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#Animation Online documentation}
     */
    interface Animation {
    }
    /**
     * If this is loaded as a single Animation, it applies to all directions.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#Animation4Way Online documentation}
     */
    interface Animation4Way {
    }
    interface AnimationElement {
    }
    /**
     * This is a list of 1-based frame indices into the spritesheet. The actual length of the animation will then be the length of the frame_sequence (times `repeat_count`, times two if `run_mode` is `"forward-then-backward"`). There is a limit for (actual) animation length of 255 frames.
     *
     * Indices can be used in any order, repeated or not used at all. Unused frames are not loaded into VRAM at all, frames referenced multiple times are loaded just once, see {@linkplain https://forums.factorio.com/53202 here}.
     * @example
     * -- Trivial example - frame_sequence defines same sequence in which the animation would load by default,
     * -- so it is useless in this case:
     * frame_count = 4,
     * frame_sequence = { 1, 2, 3, 4 }
     * @example
     * -- Usage example - first five times repeat frame 2, then alternate between 4 and 3 two times. Frame 1 is not used:
     * frame_count = 4,
     * frame_sequence = { 2, 2, 2, 2, 2, 4, 3, 4, 3 }
     * @example
     * -- Complex example - animation contains different layers with different frame counts:
     * local custom_frame_sequence = { 2, 2, 2, 2, 2, 4, 3, 4, 3 }
     * layers = {
     *   {
     *     -- Animation with custom frame sequence
     *     frame_count = 4,
     *     frame_sequence = custom_frame_sequence,
     *   },
     *   {
     *     -- Single sprite that's repeated
     *     repeat_count = #custom_frame_sequence,
     *   },
     *   {
     *     -- Other animation with different frame count
     *     -- Assuming: #custom_frame_sequence < frame_count
     *     frame_count = #custom_frame_sequence,
     *   },
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#AnimationFrameSequence Online documentation}
     */
    interface AnimationFrameSequence {
    }
    interface AnimationParameters {
    }
    interface AnimationSheet {
    }
    interface AnimationVariations {
    }
    interface AreaTriggerItem {
    }
    interface ArtilleryRangeModifier {
    }
    interface ArtilleryRemoteCapsuleAction {
    }
    interface ArtilleryTriggerDelivery {
    }
    /**
     * Loaded as one of the {@link BaseAttackParameters} extensions, based on the value of the `type` key.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#AttackParameters Online documentation}
     */
    interface AttackParameters {
    }
    interface AttackReactionItem {
    }
    /**
     * The name of an {@link AutoplaceControl}.
     * @example
     * "copper-ore"
     * @example
     * "trees"
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#AutoplaceControlID Online documentation}
     */
    interface AutoplaceControlID {
    }
    interface AutoplacePeak {
    }
    interface AutoplaceSettings {
    }
    /**
     * Autoplace specification is used to determine which entities are placed when generating map. Currently it is used for enemy bases, tiles, resources and other entities (trees, fishes, etc.).
     *
     * Autoplace specification describe conditions for placing tiles, entities, and decoratives during surface generation. Autoplace specification defines probability of placement on any given tile and richness, which has different meaning depending on the thing being placed.
     *
     * There are two entirely separate ways to specify the probability and richness:
     *
     * - The newer noise expression-based system using `probability_expression` and `richness_expression`.
     *
     * - The older peaks-based system using `peaks` and the properties listed below it.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#AutoplaceSpecification Online documentation}
     */
    interface AutoplaceSpecification {
    }
    /**
     * The abstract base of all {@link AttackParameters}.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#BaseAttackParameters Online documentation}
     */
    interface BaseAttackParameters {
    }
    /**
     * The abstract base of all {@link EnergySource EnergySources}. Specifies the way an entity gets its energy.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#BaseEnergySource Online documentation}
     */
    interface BaseEnergySource {
    }
    /**
     * The abstract base of all {@link Modifier Modifiers}.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#BaseModifier Online documentation}
     */
    interface BaseModifier {
    }
    /**
     * A list of notable {@link NamedNoiseExpression NamedNoiseExpressions} defined in the base game. A list of all named noise expression defined in the base game can be found {@linkplain https://wiki.factorio.com/Data.raw#noise-expression here}.
     *
     * Note that the named noise expressions are all defined in Lua, so mods may remove or change the notable expressions listed here, or change how they are used in the map generation.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#BaseNamedNoiseExpressions Online documentation}
     */
    interface BaseNamedNoiseExpressions {
    }
    /**
     * The abstract base of all {@link StyleSpecification StyleSpecifications}.
     * @example
     * -- Adding a custom frame_style-type style via GuiStyle
     * data.raw["gui-style"]["default"]["custom_style_for_a_frame"] =
     * {
     *   type = "frame_style",
     *   parent = "frame",
     *   use_header_filler = false,
     *   drag_by_title = false
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#BaseStyleSpecification Online documentation}
     */
    interface BaseStyleSpecification {
    }
    interface BeaconGraphicsSet {
    }
    interface BeaconModuleVisualization {
    }
    interface BeaconModuleVisualizations {
    }
    interface BeaconVisualizationTints {
    }
    interface BeamAnimationSet {
    }
    interface BeamAttackParameters {
    }
    interface BeamTriggerDelivery {
    }
    interface BeltTraverseTipTrigger {
    }
    /**
     * Determines how sprites/animations should blend with the background. The possible values are listed below.
     *
     * Note that in most of Factorio it is assumed colors are in alpha pre-multiplied format, see {@linkplain https://www.factorio.com/blog/post/fff-172 FFF #172 - Blending and Rendering}. Sprites get pre-multiplied when loaded, unless `premul_alpha` is set to `false` on the sprite/animation itself. Since generating mipmaps doesn't respect `premul_alpha`, lower mipmap levels will be in pre-multiplied format regardless.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#BlendMode Online documentation}
     */
    interface BlendMode {
    }
    /**
     * The table itself is required, but it can be empty.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#BoilerFire Online documentation}
     */
    interface BoilerFire {
    }
    /**
     * The table itself is required, but it can be empty.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#BoilerFireGlow Online documentation}
     */
    interface BoilerFireGlow {
    }
    interface BoilerPatch {
    }
    interface BoilerStructure {
    }
    interface BonusGuiOrdering {
    }
    interface BoolModifier {
    }
    interface BorderImageSet {
    }
    /**
     * BoundingBoxes are typically centered around the position of an entity.
     *
     * The first position is leftTop, the second position is rightBottom. There is an unused third member, a {@link float} that represents the orientation.
     *
     * Positive x goes towards east, positive y goes towards south. This means that the upper-left point is the least dimension in x and y, and lower-right is the greatest.
     * @example
     * {{-0.4, -0.4}, {0.4, 0.4}}
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#BoundingBox Online documentation}
     */
    interface BoundingBox {
    }
    /**
     * A cursor box, for use in {@link UtilitySprites}.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#BoxSpecification Online documentation}
     */
    interface BoxSpecification {
    }
    interface BuildEntityTipTrigger {
    }
    interface BurnerEnergySource {
    }
    interface ButtonStyleSpecification {
    }
    interface CameraEffectTriggerEffectItem {
    }
    interface CameraStyleSpecification {
    }
    /**
     * Loaded as one of the capsule actions, based on the value of the `type` key.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#CapsuleAction Online documentation}
     */
    interface CapsuleAction {
    }
    /**
     * The data for one variation of character animations. {@link CharacterPrototype#animations CharacterPrototype::animations}.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#CharacterArmorAnimation Online documentation}
     */
    interface CharacterArmorAnimation {
    }
    interface CharacterBuildDistanceModifier {
    }
    interface CharacterCraftingSpeedModifier {
    }
    interface CharacterHealthBonusModifier {
    }
    interface CharacterInventorySlotsBonusModifier {
    }
    interface CharacterItemDropDistanceModifier {
    }
    interface CharacterItemPickupDistanceModifier {
    }
    interface CharacterLogisticRequestsModifier {
    }
    interface CharacterLogisticTrashSlotsModifier {
    }
    interface CharacterLootPickupDistanceModifier {
    }
    interface CharacterMiningSpeedModifier {
    }
    interface CharacterReachDistanceModifier {
    }
    interface CharacterResourceReachDistanceModifier {
    }
    interface CharacterRunningSpeedModifier {
    }
    interface ChartUtilityConstants {
    }
    interface CheckBoxStyleSpecification {
    }
    interface CircuitConnectorLayer {
    }
    interface CircuitConnectorSecondaryDrawOrder {
    }
    interface CircuitConnectorSprites {
    }
    interface CircularParticleCreationSpecification {
    }
    interface CircularProjectileCreationSpecification {
    }
    interface ClearCursorTipTrigger {
    }
    interface CliffPlacementSettings {
    }
    interface ClusterTriggerItem {
    }
    /**
     * Every entry in the array is a specification of one layer the object collides with or a special collision option. Supplying an empty table means that no layers and no collision options are set.
     *
     * The default collision masks of all entity types can be found {@link EntityPrototype#collision_mask here}. The base game provides common collision mask functions in a Lua file in the core {@linkplain https://github.com/wube/factorio-data/blob/master/core/lualib/collision-mask-util.lua lualib}.
     *
     * Supplying an empty array means that no layers and no collision options are set.
     *
     * The three options in addition to the standard layers are not collision masks, instead they control other aspects of collision.
     * @example
     * -- Most common collision mask of buildings:
     * collision_mask = { "item-layer", "object-layer", "player-layer", "water-tile"}
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#CollisionMask Online documentation}
     */
    interface CollisionMask {
    }
    /**
     * A string specifying a collision mask layer.
     *
     * In addition to the listed layers, there is `"layer-13"` through `"layer-55"`. These layers are currently unused by the game but may change. If a mod is going to use one of the unused layers it's recommended to use the `collision_mask_util.get_first_unused_layer()` method from the vanilla {@linkplain https://github.com/wube/factorio-data/blob/master/core/lualib/collision-mask-util.lua library}. When not using the library, mods should start at the higher layers because the base game will take from the lower ones.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#CollisionMaskLayer Online documentation}
     */
    interface CollisionMaskLayer {
    }
    /**
     * Table of red, green, blue, and alpha float values between 0 and 1.Alternatively, values can be from 0-255, they are interpreted as such if at least one value is `> 1`.
     *
     * Color allows the short-hand notation of passing an array of exactly 3 or 4 numbers.
     *
     * The game usually expects colors to be in pre-multiplied form (color channels are pre-multiplied by alpha).
     * @example
     * color = {r=1, g=0, b=0, a=1} -- red, full opacity
     * color = {r=1} -- the same red, omitting default values
     * color = {1, 0, 0, 1} -- also the same red
     * color = {0, 0, 1} -- blue
     * color = {r=0, g=0.5, b=0, a=0.5} -- half transparency green
     * color = {} -- full opacity black
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#Color Online documentation}
     */
    interface Color {
    }
    interface ColorFilterData {
    }
    interface ColumnAlignment {
    }
    interface ColumnWidth {
    }
    /**
     * Graphics for the heat pipe.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#ConnectableEntityGraphics Online documentation}
     */
    interface ConnectableEntityGraphics {
    }
    /**
     * A constant boolean noise expression, such as a literal boolean. When using a constant number,  it evaluates to true for numbers bigger than zero, anything else evaluates to false.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#ConstantNoiseBoolean Online documentation}
     */
    interface ConstantNoiseBoolean {
    }
    /**
     * A constant numeric noise expression, such as a literal number, the result of addition of constants or multioctave noise that uses only constant arguments.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#ConstantNoiseNumber Online documentation}
     */
    interface ConstantNoiseNumber {
    }
    /**
     * Defines which other inputs a {@link CustomInputPrototype} consumes.
     * @example
     * consuming = "none"
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#ConsumingType Online documentation}
     */
    interface ConsumingType {
    }
    interface CraftItemTipTrigger {
    }
    /**
     * If no tint is specified, the crafting machine falls back to {@link CraftingMachinePrototype#default_recipe_tint CraftingMachinePrototype::default_recipe_tint}.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#CraftingMachineTint Online documentation}
     */
    interface CraftingMachineTint {
    }
    interface CreateDecorativesTriggerEffectItem {
    }
    interface CreateEntityTriggerEffectItem {
    }
    interface CreateExplosionTriggerEffectItem {
    }
    interface CreateFireTriggerEffectItem {
    }
    interface CreateParticleTriggerEffectItem {
    }
    interface CreateSmokeTriggerEffectItem {
    }
    interface CreateStickerTriggerEffectItem {
    }
    interface CreateTrivialSmokeEffectItem {
    }
    interface CursorBoxSpecification {
    }
    /**
     * One of the following values:
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#CursorBoxType Online documentation}
     */
    interface CursorBoxType {
    }
    /**
     * Used by {@link BaseAttackParameters} to play a sound during the attack.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#CyclicSound Online documentation}
     */
    interface CyclicSound {
    }
    /**
     * A property type, NOT a prototype. Used to specify what type of damage and how much damage something deals.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#DamagePrototype Online documentation}
     */
    interface DamagePrototype {
    }
    interface DamageTriggerEffectItem {
    }
    /**
     * @example
     * damage_type_filters = "fire"
     * @example
     * damage_type_filters = { "fire" } -- more damage types could be specified here
     * @example
     * damage_type_filters =
     * {
     *   whitelist = false, -- optional
     *   types = "fire"
     * }
     * @example
     * damage_type_filters =
     * {
     *   whitelist = false, -- optional
     *   types = { "fire" } -- more damage types could be specified here
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#DamageTypeFilters Online documentation}
     */
    interface DamageTypeFilters {
    }
    /**
     * The name of a {@link DamageType}.
     * @example
     * "impact"
     * @example
     * "poison"
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#DamageTypeID Online documentation}
     */
    interface DamageTypeID {
    }
    /**
     * The first member of the tuple states at which time of the day the LUT should be used. If the current game time is between two values defined in the color lookup that have different LUTs, the color is interpolated to create a smooth transition. (Sharp transition can be achieved by having the two values differing only by a small fraction.)
     *
     * If there is only one tuple, it means that the LUT will be used all the time, regardless of the value of the first member of the tuple.
     *
     * The second member of the tuple is a lookup table (LUT) for the color which maps the original color to a position in the sprite where is the replacement color is found. The file pointed to by the filename must be a sprite of size 256×16 or 16×256.
     * @example
     * color_lookup = {{1, "identity"}}
     * @example
     * color_lookup = {{0.5, "__core__/graphics/color_luts/nightvision.png"}}
     * @example
     * zoom_to_world_daytime_color_lookup =
     * {
     *   {0.25, "identity"},
     *   {0.45, "__core__/graphics/color_luts/night.png"},
     *   {0.55, "__core__/graphics/color_luts/night.png"},
     *   {0.75, "identity"},
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#DaytimeColorLookupTable Online documentation}
     */
    interface DaytimeColorLookupTable {
    }
    interface DeconstructionTimeToLiveModifier {
    }
    /**
     * The name of a {@link DecorativePrototype}.
     * @example
     * "dark-mud-decal"
     * @example
     * "red-pita"
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#DecorativeID Online documentation}
     */
    interface DecorativeID {
    }
    interface DefaultRecipeTint {
    }
    /**
     * This trigger is considered fulfilled when the {@link TipsAndTricksItem#dependencies TipsAndTricksItem::dependencies} are fulfilled.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#DependenciesMetTipTrigger Online documentation}
     */
    interface DependenciesMetTipTrigger {
    }
    interface DestroyCliffsCapsuleAction {
    }
    interface DestroyCliffsTriggerEffectItem {
    }
    interface DestroyDecorativesTriggerEffectItem {
    }
    interface DifficultySettings {
    }
    interface DirectTriggerItem {
    }
    interface Direction {
    }
    interface DirectionShift {
    }
    interface DistanceFromNearestPointArguments {
    }
    interface DoubleSliderStyleSpecification {
    }
    interface DropDownStyleSpecification {
    }
    /**
     * When applied to modules, the resulting effect is a sum of all module affects, multiplied through calculations: `(1 + sum module effects)` or, for productivity `(0 + sum)`.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#Effect Online documentation}
     */
    interface Effect {
    }
    /**
     * A list of module effects, or just a single effect. Modules with other effects cannot be used on the machine. This means that both effects from modules and from surrounding beacons are restricted to the listed effects. If `allowed_effects` is set to `nil`, the machine cannot be affected by modules or beacons.
     * @example
     * -- Allow all module types
     * allowed_effects = {"speed", "productivity", "consumption", "pollution"}
     * @example
     * -- Allow only modules that affect speed
     * allowed_effects = "speed"
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#EffectTypeLimitation Online documentation}
     */
    interface EffectTypeLimitation {
    }
    interface EffectValue {
    }
    interface ElectricEnergySource {
    }
    /**
     * Used to specify priority of energy usage in the {@linkplain https://wiki.factorio.com/Electric_system electric system}.
     * @example
     * usage_priority = "primary-input"
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#ElectricUsagePriority Online documentation}
     */
    interface ElectricUsagePriority {
    }
    /**
     * If this is loaded as a single ElementImageSetLayer, it gets used as `base`.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#ElementImageSet Online documentation}
     */
    interface ElementImageSet {
    }
    /**
     * If this is loaded as a Sprite, it gets used as `center`.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#ElementImageSetLayer Online documentation}
     */
    interface ElementImageSetLayer {
    }
    interface EmptyWidgetStyleSpecification {
    }
    interface EnemyEvolutionSettings {
    }
    interface EnemyExpansionSettings {
    }
    /**
     * Specifies an amount of electric energy in joules, or electric energy per time in watts.
     *
     * Internally, the input in `Watt` or `Joule/second` is always converted into `Joule/tick` or `Joule/(1/60)second`, using the following formula: `Power in Joule/tick = Power in Watt / 60`. See {@linkplain https://wiki.factorio.com/Units#Power Power}.
     *
     * Supported Multipliers:
     *
     * - `k/K`: 10^3, or 1'000
     *
     * - `M`: 10^6
     *
     * - `G`: 10^9
     *
     * - `T`: 10^12
     *
     * - `P`: 10^15
     *
     * - `E`: 10^18
     *
     * - `Z`: 10^21
     *
     * - `Y`: 10^24
     * @example
     * buffer_capacity = "5MJ"
     * input_flow_limit = "300W"
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#Energy Online documentation}
     */
    interface Energy {
    }
    /**
     * Loaded as one of the {@link BaseEnergySource} extensions, based on the value of the `type` key.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#EnergySource Online documentation}
     */
    interface EnergySource {
    }
    /**
     * The name of an {@link EntityPrototype}.
     * @example
     * "stone-furnace"
     * @example
     * "stack-inserter"
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#EntityID Online documentation}
     */
    interface EntityID {
    }
    /**
     * An array containing the following values.
     * @example
     * flags = {"placeable-neutral", "player-creation"}
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#EntityPrototypeFlags Online documentation}
     */
    interface EntityPrototypeFlags {
    }
    /**
     * How far (in tiles) entities should be rendered outside the visible area of the screen.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#EntityRendererSearchBoxLimits Online documentation}
     */
    interface EntityRendererSearchBoxLimits {
    }
    interface EntityTransferTipTrigger {
    }
    /**
     * The name of an {@link EquipmentCategory}.
     * @example
     * "armor"
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#EquipmentCategoryID Online documentation}
     */
    interface EquipmentCategoryID {
    }
    /**
     * The name of an {@link EquipmentGridPrototype}.
     * @example
     * "small-equipment-grid"
     * @example
     * "spidertron-equipment-grid"
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#EquipmentGridID Online documentation}
     */
    interface EquipmentGridID {
    }
    /**
     * The name of an {@link EquipmentPrototype}.
     * @example
     * "fusion-reactor-equipment"
     * @example
     * "exoskeleton-equipment"
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#EquipmentID Online documentation}
     */
    interface EquipmentID {
    }
    /**
     * The shape and dimensions of an equipment module.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#EquipmentShape Online documentation}
     */
    interface EquipmentShape {
    }
    interface ExplosionDefinition {
    }
    interface FactorioBasisNoiseArguments {
    }
    interface FactorioMultioctaveNoiseArguments {
    }
    interface FactorioQuickMultioctaveNoiseArguments {
    }
    interface FastBeltBendTipTrigger {
    }
    interface FastReplaceTipTrigger {
    }
    /**
     * A slash `"/"` is always used as the directory delimiter. A path always begins with the specification of a root, which can be one of three formats:
     *
     * - **core**: A path starting with `__core__` will access the resources in the data/core directory, these resources are always accessible regardless of mod specifications.
     *
     * - **base**: A path starting with __base__ will access the resources in the base mod in data/base directory. These resources are usually available, as long as the base mod isn't removed/deactivated.
     *
     * - **mod path**: The format `__<mod-name>__` is placeholder for root of any other mod (mods/<mod-name>), and is accessible as long as the mod is active.
     * @example
     * filename = "__base__/graphics/entity/basic-transport-belt/basic-transport-belt.png"
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#FileName Online documentation}
     */
    interface FileName {
    }
    interface FlameThrowerExplosionTriggerDelivery {
    }
    interface FlowStyleSpecification {
    }
    /**
     * Used to set the fluid amount an entity can hold, as well as the connection points for pipes leading into and out of the entity.
     *
     * Entities can have multiple fluidboxes. These can be part of a {@link FluidEnergySource}, or be specified directly in the entity prototype.
     *
     * A fluidbox can store only one type of fluid at a time. However, a fluid system (ie. multiple connected fluid boxes) can contain multiple different fluids, see {@linkplain https://wiki.factorio.com/Fluid_system#Fluid_mixing Fluid mixing}.
     * @example
     * fluid_box =
     * {
     *   base_area = 1,
     *   height = 2,
     *   base_level = -1,
     *   pipe_covers = pipecoverspictures(),
     *   pipe_connections =
     *   {
     *     {type = "input-output", position = {-2, 0.5}},
     *     {type = "input-output", position = {2, 0.5}}
     *   },
     *   production_type = "input-output"
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#FluidBox Online documentation}
     */
    interface FluidBox {
    }
    interface FluidBoxSecondaryDrawOrders {
    }
    interface FluidEnergySource {
    }
    /**
     * The name of a {@link FluidPrototype}.
     * @example
     * "water"
     * @example
     * "lubricant"
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#FluidID Online documentation}
     */
    interface FluidID {
    }
    /**
     * A fluid ingredient definition.
     * @example
     * {type="fluid", name="water", amount=50}
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#FluidIngredientPrototype Online documentation}
     */
    interface FluidIngredientPrototype {
    }
    /**
     * A fluid product definition.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#FluidProductPrototype Online documentation}
     */
    interface FluidProductPrototype {
    }
    interface FluidWagonConnectorGraphics {
    }
    interface FollowerRobotLifetimeModifier {
    }
    interface FootprintParticle {
    }
    interface FootstepTriggerEffectItem {
    }
    /**
     * @example
     * footstep_particle_triggers =
     * {
     *   {
     *     tiles = { "water", "water-shallow" },
     *     type = "create-particle",
     *     particle_name = "water-particle",
     *     [...]
     *   },
     *   {
     *     tiles = { "grass-1", "grass-2" },
     *     type = "create-particle",
     *     particle_name = "grass-particle",
     *     [...]
     *   },
     *   [...]
     * }
     * @example
     * footstep_particle_triggers =
     * {
     *   {
     *     tiles = { "water", "water-shallow" },
     *     actions =
     *     {
     *       {
     *         type = "create-particle",
     *         particle_name = "water-particle-1",
     *         [...]
     *       },
     *       {
     *         type = "create-particle",
     *         particle_name = "water-particle-2",
     *         [...]
     *       },
     *       [...]
     *     }
     *   },
     *   {
     *     tiles = { "grass-1", "grass-2" },
     *     actions =
     *     {
     *       {
     *         type = "create-particle",
     *         particle_name = "grass-particle-1",
     *         [...]
     *       },
     *       {
     *         type = "create-particle",
     *         particle_name = "grass-particle-2",
     *         [...]
     *       },
     *       [...]
     *     }
     *   }
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#FootstepTriggerEffectList Online documentation}
     */
    interface FootstepTriggerEffectList {
    }
    /**
     * One of the following values:
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#ForceCondition Online documentation}
     */
    interface ForceCondition {
    }
    interface FrameStyleSpecification {
    }
    interface FrequencySizeRichness {
    }
    /**
     * The name of a {@link FuelCategory}.
     * @example
     * "chemical"
     * @example
     * "nuclear"
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#FuelCategoryID Online documentation}
     */
    interface FuelCategoryID {
    }
    interface GameControllerVibrationData {
    }
    interface GateOverRailBuildTipTrigger {
    }
    interface GhostTimeToLiveModifier {
    }
    interface GiveItemModifier {
    }
    interface GlowStyleSpecification {
    }
    interface GraphStyleSpecification {
    }
    interface GroupAttackTipTrigger {
    }
    interface GunShift4Way {
    }
    interface GunSpeedModifier {
    }
    /**
     * Used to specify heat capacity properties without a {@link HeatEnergySource heat energy source}.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#HeatBuffer Online documentation}
     */
    interface HeatBuffer {
    }
    /**
     * Defines the connections for {@link HeatEnergySource} and {@link HeatBuffer}.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#HeatConnection Online documentation}
     */
    interface HeatConnection {
    }
    interface HeatEnergySource {
    }
    interface HorizontalAlign {
    }
    interface HorizontalFlowStyleSpecification {
    }
    interface HorizontalScrollBarStyleSpecification {
    }
    /**
     * Icon layering follows the following rules:
     *
     * - The rendering order of the individual icons follows the array order: Later added icons (higher index) are drawn on top of previously added icons (lower index).
     *
     * - Only the first icon layer will display a shadow.
     *
     * - When the final icon is displayed with transparency (e.g. a faded out alert), the icon layer overlap may look {@linkplain https://forums.factorio.com/viewtopic.php?p=575844#p575844 undesirable}.
     *
     * - The final combination of icons will always be resized in GUI based on the first icon layer's size, but won't be resized when displayed on machines in alt-mode. For example: recipe first icon layer is size 128, scale 1, the icon group will be displayed at resolution /4 to fit the 32px GUI boxes, but will be displayed 4 times as large on buildings.
     *
     * - Shift values are based on final size (`icon_size * scale`) of the first icon layer.
     * @example
     * -- one icon layer
     * {
     *   icon = "__base__/graphics/icons/fluid/heavy-oil.png",
     *   icon_size = 64,
     *   scale = 0.5,
     *   shift = {4, -8}
     * }
     * @example
     * -- Layered icon, with size defined outside of layers
     * icon_size = 32,
     * icons = {
     *   {
     *     icon = "__base__/graphics/icons/fluid/barreling/empty-barrel.png"
     *   },
     *   {
     *     icon = "__base__/graphics/icons/fluid/barreling/barrel-side-mask.png",
     *     tint = { a = 0.75,  b = 0, g = 0, r = 0 }
     *   },
     *   {
     *     icon = "__base__/graphics/icons/fluid/barreling/barrel-hoop-top-mask.png",
     *     tint = { a = 0.75, b = 0.5, g = 0.5, r = 0.5 }
     *   }
     * }
     * @example
     * -- Layered icon, with size defined per layer
     * icons = {
     *   {
     *     icon = "__base__/graphics/icons/fluid/barreling/barrel-empty.png",
     *     icon_size = 32
     *   },
     *   {
     *     icon = "__base__/graphics/icons/fluid/barreling/barrel-empty-side-mask.png",
     *     icon_size = 32,
     *     tint = { a = 0.75, b = 0, g = 0, r = 0 }
     *   },
     *   {
     *     icon = "__base__/graphics/icons/fluid/barreling/barrel-empty-top-mask.png",
     *     icon_size = 32,
     *     tint = { a = 0.75, b = 0.5, g = 0.5, r = 0.5 }
     *   },
     *   {
     *     icon = "__base__/graphics/icons/fluid/crude-oil.png",
     *     icon_size = 32,
     *     scale = 0.5,
     *     shift = {7, 8 }
     *   }
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#IconData Online documentation}
     */
    interface IconData {
    }
    /**
     * Icons of reduced size will be used at decreased scale. 0 or 1 mipmaps is a single image. The file must contain half-size images with a geometric-ratio, for each mipmap level. Each next level is aligned to the upper-left corner. Example sequence: `128x128@(0,0)`, `64x64@(128,0)`, `32x32@(196,0)` is three mipmaps.
     *
     * See {@linkplain https://factorio.com/blog/post/fff-291 here} for more about the visual effects of icon mipmaps.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#IconMipMapType Online documentation}
     */
    interface IconMipMapType {
    }
    /**
     * @example
     * data.raw["gui-style"]["default"]["stretchy-sprite"] = {
     *   type = "image_style",
     *   vertically_stretchable = "on",
     *   horizontally_stretchable = "on",
     *   stretch_image_to_widget_size = true,
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#ImageStyleSpecification Online documentation}
     */
    interface ImageStyleSpecification {
    }
    /**
     * Defaults to loading ingredients as items.
     * @example
     * {type="item", name="steel-plate", amount=8}
     * @example
     * {type="fluid", name="water", amount=50}
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#IngredientPrototype Online documentation}
     */
    interface IngredientPrototype {
    }
    interface InsertItemTriggerEffectItem {
    }
    interface InserterStackSizeBonusModifier {
    }
    interface InstantTriggerDelivery {
    }
    interface InterruptibleSound {
    }
    interface InvokeTileEffectTriggerEffectItem {
    }
    interface ItemCountType {
    }
    /**
     * The name of an {@link ItemGroup}.
     * @example
     * "logistics"
     * @example
     * "production"
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#ItemGroupID Online documentation}
     */
    interface ItemGroupID {
    }
    /**
     * The name of an {@link ItemPrototype}.
     * @example
     * "iron-plate"
     * @example
     * "blueprint-book"
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#ItemID Online documentation}
     */
    interface ItemID {
    }
    /**
     * An item ingredient definition. It can be specified as a table with named or numbered keys, but not a mix of both.
     * @example
     * {type="item", name="steel-plate", amount=8}
     * @example
     * {"iron-plate", 12}
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#ItemIngredientPrototype Online documentation}
     */
    interface ItemIngredientPrototype {
    }
    /**
     * An item product definition. It can be specified as a table with named or numbered keys, but not a mix of both.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#ItemProductPrototype Online documentation}
     */
    interface ItemProductPrototype {
    }
    /**
     * An array containing the following values.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#ItemPrototypeFlags Online documentation}
     */
    interface ItemPrototypeFlags {
    }
    interface ItemStackIndex {
    }
    /**
     * The name of an {@link ItemSubGroup}.
     * @example
     * "capsule"
     * @example
     * "military-equipment"
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#ItemSubGroupID Online documentation}
     */
    interface ItemSubGroupID {
    }
    /**
     * Item that when placed creates this entity/tile.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#ItemToPlace Online documentation}
     */
    interface ItemToPlace {
    }
    interface LabelStyleSpecification {
    }
    interface LaboratoryProductivityModifier {
    }
    interface LaboratorySpeedModifier {
    }
    interface LayeredSound {
    }
    /**
     * Specifies a light source. This is loaded either as a single light source or as an array of light sources.
     * @example
     * -- The light of the orange state of the rail signal
     * orange_light = {intensity = 0.2, size = 4, color={r=1, g=0.5}}
     * @example
     * -- The front lights of the car
     * light =
     * {
     *   {
     *     type = "oriented",
     *     minimum_darkness = 0.3,
     *     picture =
     *     {
     *       filename = "__core__/graphics/light-cone.png",
     *       priority = "extra-high",
     *       flags = { "light" },
     *       scale = 2,
     *       width = 200,
     *       height = 200
     *     },
     *     shift = {-0.6, -14},
     *     size = 2,
     *     intensity = 0.6,
     *     color = {r = 0.92, g = 0.77, b = 0.3}
     *   },
     *   {
     *     type = "oriented",
     *     minimum_darkness = 0.3,
     *     picture =
     *     {
     *       filename = "__core__/graphics/light-cone.png",
     *       priority = "extra-high",
     *       flags = { "light" },
     *       scale = 2,
     *       width = 200,
     *       height = 200
     *     },
     *     shift = {0.6, -14},
     *     size = 2,
     *     intensity = 0.6,
     *     color = {r = 0.92, g = 0.77, b = 0.3}
     *   }
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#LightDefinition Online documentation}
     */
    interface LightDefinition {
    }
    /**
     * Specifies the light flicker. Note that this defaults to "showing a white light" instead of the usually expected "showing nothing".
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#LightFlickeringDefinition Online documentation}
     */
    interface LightFlickeringDefinition {
    }
    interface LimitChestTipTrigger {
    }
    interface LineStyleSpecification {
    }
    /**
     * @example
     * action =
     * {
     *   type = "line",
     *   range = 25,
     *   width = 0.5,
     *
     *   range_effects =
     *   {
     *     type = "create-explosion",
     *     entity_name = "railgun-beam"
     *   },
     *
     *   action_delivery =
     *   {
     *     type = "instant",
     *     target_effects =
     *     {
     *       type = "damage",
     *       damage = { amount = 100, type = "physical"}
     *     }
     *   }
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#LineTriggerItem Online documentation}
     */
    interface LineTriggerItem {
    }
    interface LinkedBeltStructure {
    }
    interface ListBoxStyleSpecification {
    }
    interface LoaderStructure {
    }
    /**
     * Localised strings are a way to support translation of in-game text. They offer a language-independent code representation of the text that should be shown to players.
     *
     * It is an array where the first element is the key and the remaining elements are parameters that will be substituted for placeholders in the template designated by the key.
     *
     * The key identifies the string template. For example, `"gui-alert-tooltip.attack"` (for the template `"__1__ objects are being damaged"`; see the file `data/core/locale/en.cfg`). In the settings and prototype stages, this key cannot be longer than 200 characters.
     *
     * The template can contain placeholders such as `__1__` or `__2__`. These will be replaced by the respective parameter in the LocalisedString. The parameters themselves can be other localised strings, which will be processed recursively in the same fashion. Localised strings can not be recursed deeper than 20 levels and can not have more than 20 parameters.
     *
     * There are two special flags for the localised string, indicated by the key being a particular string. First, if the key is the empty string (`""`), then all parameters will be concatenated (after processing, if any are localised strings themselves). Second, if the key is a question mark (`"?"`), then the first valid parameter will be used. A parameter can be invalid if its name doesn't match any string template. If no parameters are valid, the last one is returned. This is useful to implement a fallback for missing locale templates.
     *
     * Furthermore, when an API function expects a localised string, it will also accept a regular string (i.e. not a table) which will not be translated, as well as a number or boolean, which will be converted to their textual representation.
     *
     * See {@linkplain https://wiki.factorio.com/Tutorial:Localisation Tutorial:Localisation} for more information.
     * @example
     * -- In the English translation, this will print "No ammo"; in the Czech translation, it will print "Bez munice":
     * game.player.print({"description.no-ammo"})
     * -- The "description.no-ammo" template contains no placeholders, so no further parameters are necessary.
     * @example
     * -- In the English translation, this will print "Durability: 5/9"; in the Japanese one, it will print "耐久度: 5/9":
     * game.player.print({"description.durability", 5, 9})
     * @example
     * -- This will print "hello" in all translations:
     * game.player.print({"", "hello"})
     * @example
     * -- This will print "Iron plate: 60" in the English translation and "Eisenplatte: 60" in the German translation.
     * game.print({"", {"item-name.iron-plate"}, ": ", 60})
     * @example
     * -- As an example of a localised string with fallback, consider this:
     * {"?", {"", {"entity-description.furnace"}, "\n"}, {"item-description.furnace"}, "optional fallback"}
     * -- If "entity-description.furnace" exists, it is concatenated with "\n" and returned. Otherwise, if
     * -- "item-description.furnace" exists, it is returned as-is. Otherwise, "optional fallback" is returned. If this
     * -- value wasn't specified, the translation result would be "Unknown key: 'item-description.furnace'".
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#LocalisedString Online documentation}
     */
    interface LocalisedString {
    }
    /**
     * The items generated when an {@link EntityWithHealthPrototype} is killed.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#LootItem Online documentation}
     */
    interface LootItem {
    }
    interface LowPowerTipTrigger {
    }
    interface ManualTransferTipTrigger {
    }
    interface ManualWireDragTipTrigger {
    }
    interface MapEditorConstants {
    }
    interface MapGenPreset {
    }
    interface MapGenPresetDifficultySettings {
    }
    interface MapGenPresetEnemyEvolutionSettings {
    }
    interface MapGenPresetEnemyExpansionSettings {
    }
    /**
     * The pollution settings, the values are for 60 ticks (1 second).
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#MapGenPresetPollutionSettings Online documentation}
     */
    interface MapGenPresetPollutionSettings {
    }
    interface MapGenSettings {
    }
    /**
     * A floating point number specifying an amount.
     *
     * For backwards compatibility, MapGenSizes can also be specified as one of the following strings, which will be converted to a number (when queried, a number will always be returned):
     *
     * Each of the values in a triplet (such as "low", "small", and "poor") are synonymous. In-game the values can be set from `0.166` to `6` via the GUI (respective to the percentages), while `0` is used to disable the autoplace control.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#MapGenSize Online documentation}
     */
    interface MapGenSize {
    }
    /**
     * Coordinates of a tile in a map. Positive x goes towards east, positive y goes towards south, and x is the first dimension in the array format.
     *
     * The coordinates are saved as a fixed-size 32 bit integer, with 8 bits reserved for decimal precision, meaning the smallest value step is `1/2^8 = 0.00390625` tiles.
     * @example
     * -- Explicit definition
     * {x = 5.5, y = 2}
     * {y = 2.25, x = 5.125}
     * @example
     * -- Shorthand
     * {1.625, 2.375}
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#MapPosition Online documentation}
     */
    interface MapPosition {
    }
    interface MaterialAmountType {
    }
    interface MaxFailedAttemptsPerTickPerConstructionQueueModifier {
    }
    interface MaxSuccessfulAttemptsPerTickPerConstructionQueueModifier {
    }
    interface MaximumFollowingRobotsCountModifier {
    }
    /**
     * The mining properties of objects. For formulas for the mining time, see {@linkplain https://wiki.factorio.com/Mining mining}.
     * @example
     * minable = { mining_time = 0.55, result = "wood", count = 4, mining_particle = "wooden-particle" }
     * @example
     * minable = {
     *   mining_time = 1,
     *   results =
     *   {
     *     {
     *       type = "fluid",
     *       name = "crude-oil",
     *       amount = 10
     *     }
     *   }
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#MinableProperties Online documentation}
     */
    interface MinableProperties {
    }
    interface MinimapStyleSpecification {
    }
    /**
     * Used by {@link MiningDrillPrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#MiningDrillGraphicsSet Online documentation}
     */
    interface MiningDrillGraphicsSet {
    }
    interface MiningDrillProductivityBonusModifier {
    }
    /**
     * The effect that is applied when a {@link TechnologyPrototype} is researched.
     *
     * Loaded as one of the {@link BaseModifier} extensions, based on the value of the `type` key.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#Modifier Online documentation}
     */
    interface Modifier {
    }
    /**
     * The name of a {@link ModuleCategory}.
     * @example
     * "productivity"
     * @example
     * "effectivity"
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#ModuleCategoryID Online documentation}
     */
    interface ModuleCategoryID {
    }
    /**
     * The number of module slots in this entity, and their icon positions.
     * @example
     * module_specification =
     * {
     *   module_slots = 2,
     *   module_info_icon_shift = {0, 0.5},
     *   module_info_multi_row_initial_height_modifier = -0.3
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#ModuleSpecification Online documentation}
     */
    interface ModuleSpecification {
    }
    interface ModuleTint {
    }
    /**
     * The name of a {@link MouseCursor}.
     * @example
     * "selection-tool-cursor"
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#MouseCursorID Online documentation}
     */
    interface MouseCursorID {
    }
    interface NestedTriggerEffectItem {
    }
    /**
     * `value_expressions` property should be a list of numeric expressions, each of which will be evaluated to come up with the corresponding numeric value in the resulting array.
     *
     * Used to construct map positions (`{x, y}`) and map position lists (`{{x0,y0}, {y1,y1}, {@link NoiseFunctionOffsetPoints ...]}`) for [offset-points} and {@link NoiseFunctionDistanceFromNearestPoint distance-from-nearest-point} functions.
     * @example
     * -- Examples of constructing a map position and map position list
     * local noise = require("noise")
     * local tne = noise.to_noise_expression
     *
     * local map_pos_1 = -- the map position {x = 100, y = -200} specified directly
     * {
     *   type = "array-construction",
     *   value_expressions = {tne(100), tne(-200)}
     * }
     * -- or with make_array from the noise lib required above
     * local map_pos_2 = noise.make_array({100, 200})
     *
     * local map_pos_list = -- a map position list: {{x = 100, y = -200}, {x = 100, y = 200}}
     * {
     *   type = "array-construction",
     *   value_expressions = {map_pos_1, map_pos_2}
     * }
     * -- or with the noise lib
     * local also_map_post_list = noise.make_point_list({{100, -200}, {100, 200}})
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseArrayConstruction Online documentation}
     */
    interface NoiseArrayConstruction {
    }
    /**
     * Loaded as one of the noise expressions listed in this union, based on the value of the `type` key.
     *
     * A fragment of a functional program used to generate coherent noise, probably for purposes related to terrain generation.
     *
     * Noise expressions can be provided as table literals or built using functions in the built-in {@linkplain https://github.com/wube/factorio-data/blob/master/core/lualib/noise.lua noise library}. The built-in noise library allows writing much more concise code, so its usage will be shown in most examples on this page.
     *
     * {@linkplain https://github.com/wube/factorio-data/blob/master/core/lualib/noise.lua#L272 noise.define_noise_function} allows noise expressions to be defined using a shorthand that's a subset of Lua (see the example for details).
     *
     * See {@linkplain https://togos.github.io/togos-example-noise-programs/ here} for a tutorial on authoring noise expressions.
     * @example
     * -- "noise" library required beforehand
     * expression = noise.define_noise_function(function(x, y, tile, map)
     *   return (x + y) / 1000
     * end)
     * @example
     * expression = {
     *   type = "function-application",
     *   function_name = "divide",
     *   arguments = {
     *     {
     *       type = "function-application",
     *       function_name = "add",
     *       arguments = {
     *         {
     *           type = "variable",
     *           variable_name = "x"
     *         },
     *         {
     *           type = "variable",
     *           variable_name = "y"
     *         }
     *       }
     *     },
     *     {
     *       type = "literal-number",
     *       literal_value = 1000
     *     }
     *   }
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseExpression Online documentation}
     */
    interface NoiseExpression {
    }
    /**
     * Takes a single argument and returns its absolute value. Ie. if the argument is negative, it is inverted.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseFunctionAbsoluteValue Online documentation}
     */
    interface NoiseFunctionAbsoluteValue {
    }
    /**
     * Takes between 0 and 32 numbers and adds them up.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseFunctionAdd Online documentation}
     */
    interface NoiseFunctionAdd {
    }
    /**
     * Loaded as one of the NoiseFunctions listed in this union, based on the value of the `function_name` key.
     *
     * Apply a function to a list or associative array of arguments. Some functions expect arguments to be named and some expect them not to be.
     *
     * Function calls are their own class of expression (as opposed to every function just being its own expression type) because function calls all have similar properties -- arguments are themselves expressions, a function call with all-constant arguments can be constant-folded (due to {@linkplain http://en.wikipedia.org/wiki/Referential_transparency referential transparency}), etc.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseFunctionApplication Online documentation}
     */
    interface NoiseFunctionApplication {
    }
    /**
     * Returns the arc tangent of y/x using the signs of arguments to determine the correct quadrant.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseFunctionAtan2 Online documentation}
     */
    interface NoiseFunctionAtan2 {
    }
    interface NoiseFunctionAutoplaceProbability {
    }
    interface NoiseFunctionAutoplaceRichness {
    }
    /**
     * Casts between 0 and 32 numbers to 32-bit integers and performs a bitwise AND on them.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseFunctionBitwiseAnd Online documentation}
     */
    interface NoiseFunctionBitwiseAnd {
    }
    /**
     * Casts the single argument to a 32-bit integer and performs bitwise negates it.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseFunctionBitwiseNot Online documentation}
     */
    interface NoiseFunctionBitwiseNot {
    }
    /**
     * Casts between 0 and 32 numbers to 32-bit integers and performs a bitwise OR on them.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseFunctionBitwiseOr Online documentation}
     */
    interface NoiseFunctionBitwiseOr {
    }
    /**
     * Casts between 0 and 32 numbers to 32-bit integers and performs a bitwise EXCLUSIVE OR on them.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseFunctionBitwiseXor Online documentation}
     */
    interface NoiseFunctionBitwiseXor {
    }
    /**
     * Takes a single argument and returns its ceil.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseFunctionCeil Online documentation}
     */
    interface NoiseFunctionCeil {
    }
    /**
     * The first argument is clamped to be between the second and third. The second is treated as a lower limit and the third the upper limit.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseFunctionClamp Online documentation}
     */
    interface NoiseFunctionClamp {
    }
    /**
     * Prints between 0 and 32 arguments to the {@linkplain https://wiki.factorio.com/Log_file log file} when the expression is compiled. For that it needs to part of another expression that is compiled. The last argument of the `compile-time-log` is returned as the "result" of the `compile-time-log`.
     * @example
     * -- Example usage inside a NamedNoiseExpression
     * local noise = require("noise")
     * local tne = noise.to_noise_expression
     *
     * data:extend{{
     *   type = "noise-expression",
     *   name = "compile-log-test",
     *   intended_property = "elevation",
     *   expression = noise.compile_time_log(2000, noise.var("y"), tne(100) - noise.var("distance"))
     * }}
     *
     * -- When "compile-log-test" is selected as the map type and a map preview or map is generated, this logs:
     * --  Info data-updates.lua:24: 2000.000000 reference to variable 'y' subtract
     * -- Furthermore, the elevation noise expression is set to 'tne(100) - noise.var("distance")', producing a circular island with a 100 tile radius
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseFunctionCompileTimeLog Online documentation}
     */
    interface NoiseFunctionCompileTimeLog {
    }
    /**
     * Takes a single argument and returns its cosine.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseFunctionCos Online documentation}
     */
    interface NoiseFunctionCos {
    }
    /**
     * Computes the {@linkplain https://en.wikipedia.org/wiki/Euclidean_distance euclidean distance} of the position `{x, y}` to all position listed in points and returns the shortest distance. The returned distance can be `maximum_distance` at most.
     * @example
     * -- Shortest distance at the current {x, y} from the two given points, but at most 1000
     * local noise = require("noise")
     * local tne = noise.to_noise_expression
     * local positions = noise.make_point_list({{-100, -40}, {-50, -200}})
     *
     * local shortest_distance =
     * {
     *   type = "function-application",
     *   function_name = "distance-from-nearest-point",
     *   arguments = {x = noise.var("x"), y = noise.var("y"), points = positions, maximum_distance = tne(1000)}
     * }
     * -- or with the noise lib
     * local also_shortest_distance = noise.function_application("distance-from-nearest-point", {x = noise.var("x"), y = noise.var("y"), points = positions, maximum_distance = 1000})
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseFunctionDistanceFromNearestPoint Online documentation}
     */
    interface NoiseFunctionDistanceFromNearestPoint {
    }
    /**
     * Takes two arguments and divides the first by the second.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseFunctionDivide Online documentation}
     */
    interface NoiseFunctionDivide {
    }
    /**
     * Returns the result of first argument == second argument as a literal number that is `0` for false and `1` for true.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseFunctionEquals Online documentation}
     */
    interface NoiseFunctionEquals {
    }
    /**
     * Takes two arguments and raises the first to the second power.
     * @example
     * local one_thousand = -- 10^3
     * {
     *   type = "function-application",
     *   function_name = "exponentiate",
     *   arguments = {
     *     {
     *       type = "literal-number",
     *       literal_value = 10
     *     },
     *     {
     *       type = "literal-number",
     *       literal_value = 3
     *     }
     * }
     *
     * -- or with the noise lib
     * local noise = require("noise")
     * local tne = noise.to_noise_expression
     *
     * local twentyfive = tne(5)^tne(2) -- 5^2
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseFunctionExponentiate Online documentation}
     */
    interface NoiseFunctionExponentiate {
    }
    /**
     * Scaling input and output can be accomplished other ways, but are done so commonly as to be built into this function for performance reasons.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseFunctionFactorioBasisNoise Online documentation}
     */
    interface NoiseFunctionFactorioBasisNoise {
    }
    interface NoiseFunctionFactorioMultioctaveNoise {
    }
    interface NoiseFunctionFactorioQuickMultioctaveNoise {
    }
    /**
     * Takes a single argument and returns its floor.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseFunctionFloor Online documentation}
     */
    interface NoiseFunctionFloor {
    }
    /**
     * Returns the result of first argument <= second argument as a literal number that is `0` for false and `1` for true.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseFunctionLessOrEqual Online documentation}
     */
    interface NoiseFunctionLessOrEqual {
    }
    /**
     * Returns the result of first argument < second argument as a literal number that is `0` for false and `1` for true.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseFunctionLessThan Online documentation}
     */
    interface NoiseFunctionLessThan {
    }
    interface NoiseFunctionLog2 {
    }
    /**
     * Takes two arguments and divides the first by the second and returns the remainder. This is implemented using {@linkplain https://en.cppreference.com/w/cpp/numeric/math/fmod fmod(double, double)}.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseFunctionModulo Online documentation}
     */
    interface NoiseFunctionModulo {
    }
    /**
     * Takes between 0 and 32 numbers and multiplies them.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseFunctionMultiply Online documentation}
     */
    interface NoiseFunctionMultiply {
    }
    interface NoiseFunctionNoiseLayerNameToID {
    }
    /**
     * The first argument represents a vector of how the positions should be shifted, and the second argument lists the positions that should be shifted.
     * @example
     * -- Shifts "positions" by {100, 90}
     * local noise = require("noise")
     * local positions = noise.make_point_list({{-10, -40}, {-50, -20}})
     * local offset = noise.make_array({100, 90})
     * local offset_positions =
     * {
     *   type = "function-application",
     *   function_name = "offset-points",
     *   arguments = {offset, positions}
     * }
     * -- or with the noise lib
     * local also_offset_positions = noise.function_application("offset-points", {offset, positions})
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseFunctionOffsetPoints Online documentation}
     */
    interface NoiseFunctionOffsetPoints {
    }
    /**
     * Subtracts a random value in the `[0, amplitude)` range from `source` if `source` is larger than `0`.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseFunctionRandomPenalty Online documentation}
     */
    interface NoiseFunctionRandomPenalty {
    }
    /**
     * Similar to {@link NoiseFunctionClamp clamp}, where the first argument is folded back across the third and second limits until it lies between them.
     * @example
     * local noise = require("noise")
     * local ridge_1 = noise.ridge(6, 1, 5) -- this returns 4
     * local ridge_2 = noise.ridge(-1, 1, 5) -- this returns 3
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseFunctionRidge Online documentation}
     */
    interface NoiseFunctionRidge {
    }
    /**
     * Takes a single argument and returns its sine.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseFunctionSin Online documentation}
     */
    interface NoiseFunctionSin {
    }
    /**
     * Generates random conical spots. The map is divided into square regions, and within each region, candidate points are chosen at random and target density, spot quantity, and radius are calculated for each point (or one of every `skip_span` candidate points) by configured expressions. Each spot contributes a quantity to a regional target total (which is the average of sampled target densities times the area of the region) until the total has been reached or a maximum spot count is hit. The output value of the function is the maximum height of any spot at a given point.
     *
     * The parameters that provide expressions to be evaluated for each point (all named something_expression) need to actually return expression objects.
     *
     * The quantity of the spot is assumed to be the same as its volume. Since the volume of a cone is `pi * radius^2 * height / 3`, the height ('peak value') of any given spot is calculated as `3 * quantity / (pi * radius^2)`
     *
     * The infinite series of candidate points (of which `candidate_point_count` are actually considered) generated by `spot-noise` expressions with the same `seed0`, `seed1`, `region_size`, and `suggested_minimum_candidate_point_spacing` will be identical. This allows multiple spot-noise expressions (e.g. for different ore patches) to avoid overlap by using different points from the same list, determined by `skip_span` and `skip_offset`.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseFunctionSpotNoise Online documentation}
     */
    interface NoiseFunctionSpotNoise {
    }
    /**
     * Takes two arguments and subtracts the second from the first.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseFunctionSubtract Online documentation}
     */
    interface NoiseFunctionSubtract {
    }
    /**
     * The first argument is the value to be terraced. The second argument is the offset, the third the width, and the fourth the strength.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseFunctionTerrace Online documentation}
     */
    interface NoiseFunctionTerrace {
    }
    /**
     * Has an `arguments` property that is a list of condition-result expression pairs followed by a default result expression, like so:
     *
     * ```
     * {
     *   type = "if-else-chain",
     *   arguments = {
     *     condition1, result1,
     *     condition2, result2,
     *     ...
     *     defaultResult
     *   }
     * }
     * ```
     *
     * The result of the if-else-chain is the value of the first result expression whose condition expression evaluated to true, or the value of the default result ('else') expression.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseIfElseChain Online documentation}
     */
    interface NoiseIfElseChain {
    }
    /**
     * The name of a {@link NoiseLayer}.
     * @example
     * "aux"
     * @example
     * "trees-3"
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseLayerID Online documentation}
     */
    interface NoiseLayerID {
    }
    /**
     * Evaluates to the same boolean value (true or false) every time, given by the `literal_value` property. May be used as a number value, evaluates to `1` for true and `0` for false.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseLiteralBoolean Online documentation}
     */
    interface NoiseLiteralBoolean {
    }
    /**
     * Returns the expression represented by its `literal_value` property. Useful mostly for passing expressions (to be evaluated later) to the {@link NoiseFunctionSpotNoise spot-noise} function.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseLiteralExpression Online documentation}
     */
    interface NoiseLiteralExpression {
    }
    /**
     * Evaluates to the same number every time, given by the `literal_value` property. All numbers are treated as {@link float} internally unless otherwise specified. May be used as a boolean value, evaluates to true for numbers bigger than zero, anything else evaluates to false.
     * @example
     * local ten =
     * {
     *   type = "literal-number",
     *   literal_value = 10
     * }
     *
     * -- or with the noise lib
     * local noise = require("noise")
     * local twenty_point_five = noise.to_noise_expression(20.5)
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseLiteralNumber Online documentation}
     */
    interface NoiseLiteralNumber {
    }
    /**
     * Evaluates to the same object every time, given by the `literal_value` property. Since the noise generation runtime has no notion of objects or use for them, this is useful only in constant contexts, such as the argument of the `autoplace-probability` function (where the 'literal object' is an {@link AutoplaceSpecification}).
     * @example
     * {
     *   type = "literal-object",
     *   literal_value = {
     *     name = "Bob Hope",
     *     birth_date = {
     *       year = 1903,
     *       month = 5,
     *       day_of_month = 29
     *     }
     *   }
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseLiteralObject Online documentation}
     */
    interface NoiseLiteralObject {
    }
    /**
     * Evaluates to the same string every time, given by the `literal_value` property. Since the noise generation runtime has no notion of strings or use for them, this is useful only in constant contexts.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseLiteralString Online documentation}
     */
    interface NoiseLiteralString {
    }
    /**
     * A numeric noise expression, such as a literal number, the result of addition, or multioctave noise.
     *
     * This encompasses all {@link NoiseExpression NoiseExpressions}, except for {@link NoiseLiteralBoolean}, {@link NoiseLiteralString}, {@link NoiseLiteralObject}, {@link NoiseLiteralExpression}, {@link NoiseArrayConstruction}, and {@link NoiseFunctionOffsetPoints}.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseNumber Online documentation}
     */
    interface NoiseNumber {
    }
    /**
     * Evaluates and returns the value of its expression property, which is itself an expression.
     *
     * This hints to the compiler that it should break the subexpression into its own procedure so that the result can be re-used in multiple places. For instance if you want to re-use the same multioctave noise for determining probability of multiple tiles/entities, wrap the multioctave noise expression in a procedure-delimiter. Alternatively, make the noise its own {@link NamedNoiseExpression} and reference it by name, using a {@link NoiseVariable}.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseProcedureDelimiter Online documentation}
     */
    interface NoiseProcedureDelimiter {
    }
    /**
     * Variables referencing named noise expressions may have their reference overridden by other named noise expression if their `intended_property` is the variable name and it is selected by the user in the map generator GUI. See the second example on {@link NamedNoiseExpression#intended_property NamedNoiseExpression::intended_property}.
     * @example
     * local noise = require("noise")
     *
     * local y =
     * {
     *   type = "variable",
     *   variable_name = "y" -- predefined variable
     * }
     * local x = noise.var("x") -- predefined variable, with the noise lib
     *
     * local width =
     * {
     *   type = "variable",
     *   variable_name = "map_width" -- predefined constant
     * }
     * local height = noise.var("map_height") -- predefined constant, with the noise lib
     *
     * local aux =
     * {
     *   type = "variable",
     *   variable_name = "aux" -- named noise expression
     * }
     * local cliffiness = noise.var("cliffiness") -- named noise expression, with the noise lib
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseVariable Online documentation}
     */
    interface NoiseVariable {
    }
    /**
     * A set of constants largely determined by {@link MapGenSettings}.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#NoiseVariableConstants Online documentation}
     */
    interface NoiseVariableConstants {
    }
    interface NothingModifier {
    }
    interface OffshorePumpGraphicsSet {
    }
    interface OrTipTrigger {
    }
    /**
     * The order property is a simple `string`. When the game needs to sort prototypes (of the same type), it looks at their order properties and sorts those alphabetically. A prototype with an order string of `"a"` will be listed before other prototypes with order string `"b"` or `"c"`. The `"-"` or `"[]"` structures that can be found in vanilla order strings do *not* have any special meaning.
     *
     * The alphabetical sorting uses {@linkplain https://en.wikipedia.org/wiki/Lexicographic_order lexicographical comparison} to determine if a given prototype is shown before or after another. If the order strings are equal then the game falls back to comparing the prototype names to determine order.
     * @example
     * {  -- This item will be shown after the below one
     *   type = "item",
     *   name = "item-1",
     *   order = "ad",
     * },
     * {  -- This item will be shown before the above one
     *   type = "item",
     *   name = "item-2",
     *   order = "ab",
     * }
     * @example
     * -- The order of special characters can be identified by looking at a UTF-8 character list.
     * -- This is the order some common characters are sorted in:
     * "-"
     * "0"
     * "9"
     * "A"
     * "Z"
     * "["
     * "]"
     * "a"
     * "z"
     * -- The following order strings would be ordered thusly then:
     * "a"
     * "ab"
     * "azaaa"  -- "b" is sorted before "z", so "ab" comes before "az", regardless of the letters following it
     * "b"
     * "b-zzz"
     * "b[aaa]" -- "[" is sorted after "-" in UTF-8
     * "bb"  -- "b" is sorted after "[" in UTF-8
     * ]
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#Order Online documentation}
     */
    interface Order {
    }
    interface OrientedCliffPrototype {
    }
    interface OrientedCliffPrototypeSet {
    }
    interface OtherColors {
    }
    /**
     * The name of a {@link ParticlePrototype}.
     * @example
     * "beacon-metal-particle-small"
     * @example
     * "wooden-particle"
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#ParticleID Online documentation}
     */
    interface ParticleID {
    }
    interface PasteEntitySettingsTipTrigger {
    }
    interface PathFinderSettings {
    }
    interface PipeConnectionDefinition {
    }
    interface PipePictures {
    }
    interface PipeToGroundPictures {
    }
    interface PlaceAsTile {
    }
    interface PlaceEquipmentTipTrigger {
    }
    /**
     * Defines when controller vibrations should be played.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#PlayFor Online documentation}
     */
    interface PlayFor {
    }
    interface PlaySoundTriggerEffectItem {
    }
    interface PlayerColorData {
    }
    interface PlayerInputMethodFilter {
    }
    /**
     * The pollution settings, the values are for 60 ticks (1 second).
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#PollutionSettings Online documentation}
     */
    interface PollutionSettings {
    }
    /**
     * Defaults to loading products as items.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#ProductPrototype Online documentation}
     */
    interface ProductPrototype {
    }
    interface ProductionType {
    }
    interface ProgrammableSpeakerInstrument {
    }
    interface ProgrammableSpeakerNote {
    }
    interface ProgressBarStyleSpecification {
    }
    interface ProjectileAttackParameters {
    }
    interface ProjectileTriggerDelivery {
    }
    /**
     * A mapping of arrays of {@link PumpConnectorGraphicsAnimation PumpConnectorGraphicsAnimations} to all 4 directions of the pump connection (to a fluid wagon).
     * @example
     * load_animations =
     * {
     * west = {
     *   [1] = {
     *     standup_base = {
     *       filename = "__base__/graphics/entity/pump/connector/V-R-135-load-standup-base.png",
     *       width = 55,
     *       height = 63,
     *       line_length =1,
     *       frame_count =20,
     *       shift = util.by_pixel(-23.5, -13.5),
     *       hr_version = {
     *         filename = "__base__/graphics/entity/pump/connector/hr-V-R-135-load-standup-base.png",
     *         width = 110,
     *         height = 126,
     *         scale = 0.5,
     *         line_length = 1,
     *         frame_count = 20,
     *         shift = util.by_pixel(-23.5, -13.5)
     *       },
     *     },
     *     standup_shadow = {
     *       filename = "__base__/graphics/entity/pump/connector/V-R-1-load-standup-base-shadow.png",
     *       width = 79,
     *       height = 69,
     *       line_length =1,
     *       frame_count =20,
     *       shift = util.by_pixel(-8.5, 8.5),
     *       hr_version = {
     *         filename = "__base__/graphics/entity/pump/connector/hr-V-R-1-load-standup-base-shadow.png",
     *         width = 157,
     *         height = 136,
     *         scale = 0.5,
     *         line_length = 1,
     *         frame_count = 20,
     *         shift = util.by_pixel(-8.75, 8.5)
     *       },
     *     },
     *   },
     *   [2] = {
     *     standup_base = { ... },
     *     standup_shadow = { ... },
     *     connector_shadow = { ... },
     *   },
     *   [3] = { ... },
     *   [4] = { ... },
     *   [5] = { ... },
     *   [6] = { ... },
     * },
     * north = { ... },
     * east = { ... },
     * south = { ... },
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#PumpConnectorGraphics Online documentation}
     */
    interface PumpConnectorGraphics {
    }
    interface PumpConnectorGraphicsAnimation {
    }
    /**
     * The push back effect used by the {@linkplain https://wiki.factorio.com/Discharge_defense discharge defense}.
     *
     * Aims to push the target entity away from the source entity by the `distance` from the target entity's current position. Searches within double the `distance` from the pushed to position for the nearest non-colliding position for the target entity to be teleported too. If no valid non-colliding position is found or the target is not teleportable, then no push back occurs.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#PushBackTriggerEffectItem Online documentation}
     */
    interface PushBackTriggerEffectItem {
    }
    interface RadioButtonStyleSpecification {
    }
    /**
     * Sprite to be shown around the entity when it is selected/held in the cursor.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#RadiusVisualisationSpecification Online documentation}
     */
    interface RadiusVisualisationSpecification {
    }
    interface RailPictureSet {
    }
    /**
     * Used for graphics by {@link RailPrototype} and {@link RailRemnantsPrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#RailPieceLayers Online documentation}
     */
    interface RailPieceLayers {
    }
    interface RandomPenaltyArguments {
    }
    /**
     * Specified by a {@link float} between 0 and 1, including 0 and excluding 1.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#RealOrientation Online documentation}
     */
    interface RealOrientation {
    }
    /**
     * The name of a {@link RecipeCategory}.
     * @example
     * "crafting"
     * @example
     * "smelting"
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#RecipeCategoryID Online documentation}
     */
    interface RecipeCategoryID {
    }
    /**
     * Used when defining a {@link RecipePrototype} that uses difficulty. For a recipe without difficulty, these same properties are defined on the prototype itself.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#RecipeData Online documentation}
     */
    interface RecipeData {
    }
    /**
     * The name of a {@link RecipePrototype}.
     * @example
     * "electronic-circuit"
     * @example
     * "kovarex-enrichment-process"
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#RecipeID Online documentation}
     */
    interface RecipeID {
    }
    /**
     * The render layer specifies the order of the sprite when rendering, most of the objects have it hardcoded in the source, but some are configurable. The union contains valid values from lowest to highest.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#RenderLayer Online documentation}
     */
    interface RenderLayer {
    }
    interface ResearchTechnologyTipTrigger {
    }
    /**
     * Resistances to certain types of attacks from enemy, and physical damage. See {@linkplain https://wiki.factorio.com/Damage Damage}.
     * @example
     * resistances =
     * {
     *   {
     *     type = "physical",
     *     decrease = 6,
     *     percent = 30
     *   },
     *   {
     *     type = "explosion",
     *     decrease = 20,
     *     percent = 30
     *   },
     *   {
     *     type = "acid",
     *     decrease = 3,
     *     percent = 30
     *   },
     *   {
     *     type = "fire",
     *     decrease = 0,
     *     percent = 30
     *   }
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#Resistances Online documentation}
     */
    interface Resistances {
    }
    /**
     * The name of a {@link ResourceCategory}.
     * @example
     * "basic-solid"
     * @example
     * "basic-fluid"
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#ResourceCategoryID Online documentation}
     */
    interface ResourceCategoryID {
    }
    interface RichTextSetting {
    }
    interface RotatedAnimation {
    }
    /**
     * A map of rotated animations for all 4 directions of the entity. If this is loaded as a single RotatedAnimation, it applies to all directions.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#RotatedAnimation4Way Online documentation}
     */
    interface RotatedAnimation4Way {
    }
    interface RotatedAnimationVariations {
    }
    /**
     * Specifies series of sprites used to visualize different rotations of the object.
     * @example
     * pictures =
     * {
     *   layers =
     *   {
     *     {
     *       filename = "__base__/graphics/entity/radar/radar.png",
     *       priority = "low",
     *       width = 98,
     *       height = 128,
     *       apply_projection = false,
     *       direction_count = 64,
     *       line_length = 8,
     *       shift = util.by_pixel(1, -16),
     *       hr_version =
     *       {
     *         filename = "__base__/graphics/entity/radar/hr-radar.png",
     *         priority = "low",
     *         width = 196,
     *         height = 254,
     *         apply_projection = false,
     *         direction_count = 64,
     *         line_length = 8,
     *         shift = util.by_pixel(1, -16),
     *         scale = 0.5
     *       }
     *     },
     *     {
     *       filename = "__base__/graphics/entity/radar/radar-shadow.png",
     *       priority = "low",
     *       width = 172,
     *       height = 94,
     *       apply_projection = false,
     *       direction_count = 64,
     *       line_length = 8,
     *       shift = util.by_pixel(39,3),
     *       draw_as_shadow = true,
     *       hr_version =
     *       {
     *         filename = "__base__/graphics/entity/radar/hr-radar-shadow.png",
     *         priority = "low",
     *         width = 343,
     *         height = 186,
     *         apply_projection = false,
     *         direction_count = 64,
     *         line_length = 8,
     *         shift = util.by_pixel(39.25,3),
     *         draw_as_shadow = true,
     *         scale = 0.5
     *       }
     *     }
     *   }
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#RotatedSprite Online documentation}
     */
    interface RotatedSprite {
    }
    interface ScriptTriggerEffectItem {
    }
    interface ScrollBarStyleSpecification {
    }
    interface ScrollPaneStyleSpecification {
    }
    /**
     * An array containing the following values.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#SelectionModeFlags Online documentation}
     */
    interface SelectionModeFlags {
    }
    interface SequenceTipTrigger {
    }
    interface SetFilterTipTrigger {
    }
    interface SetLogisticRequestTipTrigger {
    }
    interface SetRecipeTipTrigger {
    }
    interface SetTileTriggerEffectItem {
    }
    interface ShiftAnimationWaypoints {
    }
    interface ShiftBuildTipTrigger {
    }
    interface ShowExplosionOnChartTriggerEffectItem {
    }
    interface SignalColorMapping {
    }
    interface SignalIDConnector {
    }
    interface SimpleModifier {
    }
    /**
     * Used by tips and tricks and main menu simulations.
     *
     * There are a few simulation-only APIs:
     *
     * ```
     * game.create_test_player{name=string}
     * game.activate_rail_planner{position=position,ghost_mode=bool}
     * game.deactivate_rail_planner()
     * game.move_cursor{position=position,speed=number}  -- should be called every tick; returns true when target is reached
     * game.activate_selection()
     * game.finish_selection()
     * game.deactivate_selection()
     * game.scroll_clipboard_forwards()
     * game.scroll_clipboard_backwards()
     * game.camera_player_cursor_position [RW]
     * game.camera_position [RW]
     * game.camera_zoom [W]
     * game.camera_player [W]
     * game.camera_player_cursor_direction [W]
     * game.camera_alt_info [W]
     * game.smart_belt_building [W]
     * player.drag_start_position [W]
     * player.raw_build_from_cursor{ghost_mode=bool,created_by_moving=bool,position=position}
     * surface.create_entities_from_blueprint_string{string=string,position=position,force=force,direction=defines.direction,flip_horizonal=bool,flip_vertical=bool,by_player=player}
     * ```
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#SimulationDefinition Online documentation}
     */
    interface SimulationDefinition {
    }
    interface SliderStyleSpecification {
    }
    /**
     * Definition of the smoke of an entity.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#SmokeSource Online documentation}
     */
    interface SmokeSource {
    }
    /**
     * @example
     * {
     *   filename = "__base__/sound/ambient/world-ambience-3.ogg",
     *   volume = 1.2
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#Sound Online documentation}
     */
    interface Sound {
    }
    interface SoundDefinition {
    }
    /**
     * This defines which slider in the sound settings affects the volume of this sound. Furthermore, some sound types are mixed differently than others, e.g. zoom level effects are applied.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#SoundType Online documentation}
     */
    interface SoundType {
    }
    /**
     * The definition of a evolution and probability weights for a {@link UnitSpawnDefinition spawnable unit} for a {@link EnemySpawnerPrototype}.
     *
     * It can be specified as a table with named or numbered keys, but not a mix of both.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#SpawnPoint Online documentation}
     */
    interface SpawnPoint {
    }
    interface SpeechBubbleStyleSpecification {
    }
    /**
     * Used by {@link SpiderVehiclePrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#SpiderEnginePrototype Online documentation}
     */
    interface SpiderEnginePrototype {
    }
    interface SpiderLegGraphicsSet {
    }
    interface SpiderLegPart {
    }
    /**
     * Used by {@link SpiderEnginePrototype} for {@link SpiderVehiclePrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#SpiderLegSpecification Online documentation}
     */
    interface SpiderLegSpecification {
    }
    /**
     * Used to specify the graphics for {@link SpiderVehiclePrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#SpiderVehicleGraphicsSet Online documentation}
     */
    interface SpiderVehicleGraphicsSet {
    }
    interface SpotNoiseArguments {
    }
    /**
     * Specifies one picture that can be used in the game.
     *
     * When there is more than one sprite or {@link Animation} frame with the same source file and dimensions/position in the game, they all share the same memory.
     * @example
     * picture = {
     *   filename = "__base__/graphics/entity/basic-accumulator/basic-accumulator.png",
     *   priority = "extra-high",
     *   width = 124,
     *   height = 103,
     *   shift = {0.7, -0.2}
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#Sprite Online documentation}
     */
    interface Sprite {
    }
    /**
     * A map of sprites for all 4 directions of the entity.  If this is loaded as a single Sprite, it applies to all directions.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#Sprite4Way Online documentation}
     */
    interface Sprite4Way {
    }
    /**
     * A map of sprites for all 8 directions of the entity.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#Sprite8Way Online documentation}
     */
    interface Sprite8Way {
    }
    /**
     * An array containing the following values.
     * @example
     * flags = { "linear-minification", "linear-magnification" }
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#SpriteFlags Online documentation}
     */
    interface SpriteFlags {
    }
    /**
     * @example
     * sheet =
     * {
     *   filename = "__base__/graphics/entity/burner-inserter/burner-inserter-platform.png",
     *   priority = "extra-high",
     *   width = 46,
     *   height = 46,
     *   shift = {0.09375, 0},
     *   hr_version =
     *   {
     *     filename = "__base__/graphics/entity/burner-inserter/hr-burner-inserter-platform.png",
     *     priority = "extra-high",
     *     width = 105,
     *     height = 79,
     *     shift = util.by_pixel(1.5, 7.5-1),
     *     scale = 0.5
     *   }
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#SpriteNWaySheet Online documentation}
     */
    interface SpriteNWaySheet {
    }
    interface SpriteParameters {
    }
    /**
     * This sets the "caching priority" of a sprite, so deciding priority of it being included in VRAM instead of streaming it and is therefore a purely technical value. See {@linkplain https://forums.factorio.com/viewtopic.php?p=437380#p437380 here} and {@linkplain https://www.factorio.com/blog/post/fff-264 here}. The possible values are listed below.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#SpritePriority Online documentation}
     */
    interface SpritePriority {
    }
    interface SpriteSheet {
    }
    interface SpriteSizeType {
    }
    /**
     * @example
     * pictures =
     * {
     *   {
     *     filename = "__base__/graphics/entity/decorative/green-carpet-grass/green-carpet-grass-01.png",
     *     width = 105,
     *     height = 73
     *   },
     *   {
     *     filename = "__base__/graphics/entity/decorative/green-carpet-grass/green-carpet-grass-02.png",
     *     width = 185,
     *     height = 164
     *   },
     *   [...]
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#SpriteVariations Online documentation}
     */
    interface SpriteVariations {
    }
    interface StackInserterCapacityBonusModifier {
    }
    interface StackTransferTipTrigger {
    }
    interface StateSteeringSettings {
    }
    interface StatusColors {
    }
    interface SteeringSettings {
    }
    interface StorageTankPictures {
    }
    interface StreamAttackParameters {
    }
    interface StreamFluidProperties {
    }
    interface StreamTriggerDelivery {
    }
    /**
     * Sets whether a GUI element can be stretched or squashed.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#StretchRule Online documentation}
     */
    interface StretchRule {
    }
    /**
     * Used as an alternative way to specify animations.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#Stripe Online documentation}
     */
    interface Stripe {
    }
    /**
     * Loaded as one of the {@link BaseStyleSpecification} extensions, based on the value of the `type` key.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#StyleSpecification Online documentation}
     */
    interface StyleSpecification {
    }
    interface StyleWithClickableGraphicalSetSpecification {
    }
    interface SwitchStyleSpecification {
    }
    interface TabStyleSpecification {
    }
    interface TabbedPaneStyleSpecification {
    }
    interface TableStyleSpecification {
    }
    /**
     * Used when defining a {@link TechnologyPrototype} that uses difficulty. For a technology without difficulty, these same properties are defined on the prototype itself.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#TechnologyData Online documentation}
     */
    interface TechnologyData {
    }
    /**
     * The name of a {@link TechnologyPrototype}.
     * @example
     * "automated-rail-transportation"
     * @example
     * "steel-axe"
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#TechnologyID Online documentation}
     */
    interface TechnologyID {
    }
    interface TechnologySlotStyleSpecification {
    }
    /**
     * Either `count` or `count_formula` must be defined, never both.
     * @example
     * unit =
     * {
     *   count_formula = "2^(L-6)*1000",
     *   ingredients =
     *   {
     *     {"automation-science-pack", 1},
     *     {"logistic-science-pack", 1},
     *     {"chemical-science-pack", 1},
     *     {"production-science-pack", 1},
     *     {"utility-science-pack", 1},
     *     {"space-science-pack", 1}
     *   },
     *   time = 60
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#TechnologyUnit Online documentation}
     */
    interface TechnologyUnit {
    }
    interface TextBoxStyleSpecification {
    }
    interface ThrowCapsuleAction {
    }
    interface TileAndAlpha {
    }
    interface TileBuildSound {
    }
    /**
     * The name of a {@link TilePrototype}.
     * @example
     * "grass-2"
     * @example
     * "landfill"
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#TileID Online documentation}
     */
    interface TileID {
    }
    /**
     * Name of an allowed tile, or a list of two tile names for entities allowed on transitions.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#TileIDRestriction Online documentation}
     */
    interface TileIDRestriction {
    }
    interface TileRenderLayer {
    }
    /**
     * Used by {@link TilePrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#TileSprite Online documentation}
     */
    interface TileSprite {
    }
    interface TileSpriteWithProbability {
    }
    interface TileTransitionSprite {
    }
    /**
     * Used for {@link TilePrototype} graphics.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#TileTransitions Online documentation}
     */
    interface TileTransitions {
    }
    interface TileTransitionsBetweenTransitions {
    }
    interface TileTransitionsToTiles {
    }
    interface TileTransitionsVariants {
    }
    interface TimeElapsedTipTrigger {
    }
    /**
     * This is used by {@link TipsAndTricksItem} for the initial starting status. One of the following values:
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#TipStatus Online documentation}
     */
    interface TipStatus {
    }
    /**
     * Loaded as one of the tip triggers, based on the value of the `type` key.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#TipTrigger Online documentation}
     */
    interface TipTrigger {
    }
    interface TrainBrakingForceBonusModifier {
    }
    interface TrainPathFinderConstants {
    }
    interface TrainStopDrawingBoxes {
    }
    interface TrainStopLight {
    }
    interface TransportBeltAnimationSet {
    }
    interface TransportBeltAnimationSetWithCorners {
    }
    /**
     * Used to define the graphics for the (in vanilla) yellow frame that is used when a {@link TransportBeltPrototype} is connected to the circuit network.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#TransportBeltConnectorFrame Online documentation}
     */
    interface TransportBeltConnectorFrame {
    }
    interface TreeVariation {
    }
    /**
     * Loaded as one of the {@link TriggerItem} extensions, based on the value of the `type` key.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#Trigger Online documentation}
     */
    interface Trigger {
    }
    /**
     * Loaded as one of the {@link TriggerDeliveryItem} extensions, based on the value of the `type` key.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#TriggerDelivery Online documentation}
     */
    interface TriggerDelivery {
    }
    /**
     * The abstract base of all {@link TriggerDelivery TriggerDeliveries}.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#TriggerDeliveryItem Online documentation}
     */
    interface TriggerDeliveryItem {
    }
    /**
     * Loaded as one of the {@link TriggerEffectItem} extensions, based on the value of the `type` key.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#TriggerEffect Online documentation}
     */
    interface TriggerEffect {
    }
    /**
     * The abstract base of all {@link TriggerEffect TriggerEffects}.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#TriggerEffectItem Online documentation}
     */
    interface TriggerEffectItem {
    }
    /**
     * The abstract base of all {@link Trigger Triggers}.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#TriggerItem Online documentation}
     */
    interface TriggerItem {
    }
    /**
     * An array of names of {@link TriggerTargetType}. See {@linkplain https://forums.factorio.com/71657 Design discussion: Trigger target type} and {@linkplain https://forums.factorio.com/86164 Blacklist for prototypes turrets shouldn't attack}.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#TriggerTargetMask Online documentation}
     */
    interface TriggerTargetMask {
    }
    /**
     * The name of a {@link TrivialSmokePrototype}.
     * @example
     * "smoke-building"
     * @example
     * "nuclear-smoke"
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#TrivialSmokeID Online documentation}
     */
    interface TrivialSmokeID {
    }
    interface TurretAttackModifier {
    }
    interface UndergroundBeltStructure {
    }
    /**
     * Used by {@link UnitPrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#UnitAISettings Online documentation}
     */
    interface UnitAISettings {
    }
    interface UnitAlternativeFrameSequence {
    }
    interface UnitGroupSettings {
    }
    /**
     * It can be specified as a table with named or numbered keys, but not a mix of both.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#UnitSpawnDefinition Online documentation}
     */
    interface UnitSpawnDefinition {
    }
    interface UnlockRecipeModifier {
    }
    interface UnlockRecipeTipTrigger {
    }
    interface UseConfirmTipTrigger {
    }
    interface UseOnSelfCapsuleAction {
    }
    interface UsePipetteTipTrigger {
    }
    /**
     * A vector is a two-element array containing the x and y components. Unlike Positions, vectors don't use the x, y keys. Positive x goes east, positive y goes south. See also: {@link import("factorio:runtime").undefined Runtime Vector}.
     * @example
     * vector = {0, 12}
     * @example
     * right = {1.0, 0.5}
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#Vector Online documentation}
     */
    interface Vector {
    }
    interface Vector3D {
    }
    interface VectorRotation {
    }
    interface VerticalAlign {
    }
    interface VerticalFlowStyleSpecification {
    }
    interface VerticalScrollBarStyleSpecification {
    }
    /**
     * The name of a {@link VirtualSignalPrototype}.
     * @example
     * "signal-red"
     * @example
     * "signal-each"
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#VirtualSignalID Online documentation}
     */
    interface VirtualSignalID {
    }
    /**
     * Void energy sources provide unlimited free energy.
     * @example
     * energy_source = {type = "void"}
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#VoidEnergySource Online documentation}
     */
    interface VoidEnergySource {
    }
    interface WallPictures {
    }
    /**
     * Entity water reflection. {@linkplain https://forums.factorio.com/100703 Currently only renders} for {@link EntityWithHealthPrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#WaterReflectionDefinition Online documentation}
     */
    interface WaterReflectionDefinition {
    }
    /**
     * Definition of a point where circuit network wires can be connected to an entity.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#WireConnectionPoint Online documentation}
     */
    interface WireConnectionPoint {
    }
    /**
     * Used by {@link WireConnectionPoint}.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#WirePosition Online documentation}
     */
    interface WirePosition {
    }
    interface WorkerRobotBatteryModifier {
    }
    interface WorkerRobotSpeedModifier {
    }
    interface WorkerRobotStorageModifier {
    }
    /**
     * This type is used to produce sound from in-game entities when they are working/idle.
     * @example
     * -- refinery
     * working_sound =
     * {
     *   sound = { filename = "__base__/sound/oil-refinery.ogg" },
     *   idle_sound = { filename = "__base__/sound/idle1.ogg", volume = 0.6 },
     *   apparent_volume = 2.5,
     * }
     * @example
     * -- roboport
     * working_sound =
     * {
     *   sound = { filename = "__base__/sound/roboport-working.ogg", volume = 0.6 },
     *   max_sounds_per_type = 3,
     *   audible_distance_modifier = 0.5,
     *   probability = 1 / (5 * 60) -- average pause between the sound is 5 seconds
     * }
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#WorkingSound Online documentation}
     */
    interface WorkingSound {
    }
    /**
     * Used by crafting machines to display different graphics when the machine is running.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#WorkingVisualisation Online documentation}
     */
    interface WorkingVisualisation {
    }
    interface ZoomToWorldBlueprintEnabledModifier {
    }
    interface ZoomToWorldDeconstructionPlannerEnabledModifier {
    }
    interface ZoomToWorldEnabledModifier {
    }
    interface ZoomToWorldGhostBuildingEnabledModifier {
    }
    interface ZoomToWorldSelectionToolEnabledModifier {
    }
    interface ZoomToWorldUpgradePlannerEnabledModifier {
    }
    /**
     * A variable type which can have one of two values: `true` or `false`. Wikipedia has a {@linkplain https://en.wikipedia.org/wiki/Boolean comprehensive article} on Booleans.
     *
     * Booleans used in prototypes can also be be defined by other variable types which are then coerced to boolean values by the game. This type coercion differs from the {@linkplain https://www.lua.org/manual/5.2/manual.html#2.1 standard Lua truthy/falsy} coercion.
     *
     * It is recommended to only use `true` and `false`.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#bool Online documentation}
     */
    interface bool {
    }
    /**
     * Format uses a dot as its decimal delimiter. Doubles are stored in the {@linkplain http://en.wikipedia.org/wiki/Double-precision_floating-point_format double precision} floating point format.
     * @example
     * 7.5
     * 6
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#double Online documentation}
     */
    interface double {
    }
    /**
     * Format uses a dot as its decimal delimiter. Floats are stored in the {@linkplain https://en.wikipedia.org/wiki/Single-precision_floating-point_format single precision} floating point format.
     * @example
     * 7.5
     * 6
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#float Online documentation}
     */
    interface float {
    }
    /**
     * 16 bit signed integer. Ranges from `-32'768` to `32'767`, or `[-2^15, 2^15-1]`.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#int16 Online documentation}
     */
    interface int16 {
    }
    /**
     * 32 bit signed integer. Ranges from `-2'147'483'648` to `2'147'483'647`, or `[-2^31, 2^31-1]`.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#int32 Online documentation}
     */
    interface int32 {
    }
    /**
     * 8 bit signed integer. Ranges from `-128` to `127`, or `[-2^7, 2^7-1]`.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#int8 Online documentation}
     */
    interface int8 {
    }
    /**
     * Strings are enclosed in double-quotes.
     * @example
     * "Hello, world!"
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#string Online documentation}
     */
    interface string {
    }
    /**
     * 16 bit unsigned integer. Ranges from `0` to `65'535`, or `[0, 2^16-1]`.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#uint16 Online documentation}
     */
    interface uint16 {
    }
    /**
     * 32 bit unsigned integer. Ranges from `0` to `4'294'967'295`, or `[0, 2^32-1]`.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#uint32 Online documentation}
     */
    interface uint32 {
    }
    /**
     * 64 bit unsigned integer.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#uint64 Online documentation}
     */
    interface uint64 {
    }
    /**
     * 8 bit unsigned integer. Ranges from `0` to `255`, or `[0, 2^8-1]`.
     * @see {@link https://lua-api.factorio.com/1.1.89/types.html#uint8 Online documentation}
     */
    interface uint8 {
    }
}

