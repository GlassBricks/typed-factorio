// This is an auto-generated file. Do not edit directly!

/** @noSelfInFile */

/**
 * @noResolution
 */
declare module "factorio:prototype" {
  export interface ActivateEquipmentCapsuleAction {
    readonly type: "equipment-remote"
    /**
     * Activation is only implemented for {@link ActiveDefenseEquipmentPrototype}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ActivateEquipmentCapsuleAction.html#equipment Online documentation}
     */
    equipment: EquipmentID
  }
  export interface ActivateImpactTriggerEffectItem extends TriggerEffectItem {
    readonly type: "activate-impact"
    /**
     * **Default:** `""`
     *
     * Name of a {@link DeliverCategory}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ActivateImpactTriggerEffectItem.html#deliver_category Online documentation}
     */
    deliver_category?: string
  }
  export interface ActivatePasteTipTrigger extends CountBasedTipTrigger {
    readonly type: "activate-paste"
  }
  /**
   * The name of an {@link ActiveTriggerPrototype}.
   * @example
   * "chain-lightning-chain"
   * @example
   * "chain-lightning-turret-chain"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ActiveTriggerID.html Online documentation}
   */
  export type ActiveTriggerID = string
  export interface ActivityBarStyleSpecification extends BaseStyleSpecification {
    readonly type: "activity_bar_style"
    speed?: float
    bar_width?: uint32
    color?: Color
    bar_background?: ElementImageSet
    bar?: ElementImageSet
    bar_size_ratio?: float
  }
  export interface ActivityMatchingModifiers {
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ActivityMatchingModifiers.html#multiplier Online documentation}
     */
    multiplier?: float
    /**
     * **Default:** `0`
     *
     * Cannot be larger than `maximum`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ActivityMatchingModifiers.html#minimum Online documentation}
     */
    minimum?: float
    /**
     * **Default:** `infinity`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ActivityMatchingModifiers.html#maximum Online documentation}
     */
    maximum?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ActivityMatchingModifiers.html#offset Online documentation}
     */
    offset?: float
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ActivityMatchingModifiers.html#inverted Online documentation}
     */
    inverted?: bool
  }
  /**
   * @see MapGenPreset.advanced_settings
   * @see {@link https://lua-api.factorio.com/2.0.16/types/MapGenPreset.html#advanced_settings Online documentation}
   */
  export interface AdvancedMapGenSettings {
    asteroids?: MapGenPresetAsteroidSettings
    pollution?: MapGenPresetPollutionSettings
    enemy_evolution?: MapGenPresetEnemyEvolutionSettings
    enemy_expansion?: MapGenPresetEnemyExpansionSettings
    difficulty_settings?: MapGenPresetDifficultySettings
  }
  export interface AdvancedVolumeControl {
    attenuation?: Fade
    fades?: Fades
    /**
     * **Default:** `0`
     *
     * Has to be in the range (-1.0, 1.0).
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AdvancedVolumeControl.html#darkness_threshold Online documentation}
     */
    darkness_threshold?: float
  }
  export interface AggregationSpecification {
    max_count: uint32
    /**
     * **Default:** `1`
     *
     * If `count_already_playing` is `true`, this will determine maximum progress when instance is counted toward playing sounds.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AggregationSpecification.html#progress_threshold Online documentation}
     */
    progress_threshold?: float
    /**
     * **Default:** `2`
     *
     * Has to be greater than or equal to 0.0.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AggregationSpecification.html#volume_reduction_rate Online documentation}
     */
    volume_reduction_rate?: float
    /**
     * If `false`, the volume of sound instances above `max_count` is calculated according to the formula `volume = (x + 1) ^ (-volume_reduction_rate)`, where `x` is the order number of an instance above the threshold.
     *
     * If `true`, sound instances above `max_count` are removed.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AggregationSpecification.html#remove Online documentation}
     */
    remove: bool
    /**
     * **Default:** `false`
     *
     * If `true`, already playing sounds are taken into account when checking `max_count`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AggregationSpecification.html#count_already_playing Online documentation}
     */
    count_already_playing?: bool
    /**
     * **Default:** `"closest"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AggregationSpecification.html#priority Online documentation}
     */
    priority?: "closest" | "farthest" | "newest" | "oldest"
  }
  export interface AgriculturalCraneProperties {
    speed: AgriculturalCraneSpeed
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AgriculturalCraneProperties.html#min_arm_extent Online documentation}
     */
    min_arm_extent?: double
    /**
     * **Default:** `0.2`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AgriculturalCraneProperties.html#min_grappler_extent Online documentation}
     */
    min_grappler_extent?: double
    /**
     * **Default:** `45`
     *
     * In degrees.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AgriculturalCraneProperties.html#operation_angle Online documentation}
     */
    operation_angle?: float
    /**
     * **Default:** `0.5`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AgriculturalCraneProperties.html#telescope_default_extention Online documentation}
     */
    telescope_default_extention?: double
    origin: Vector3D
    shadow_direction: Vector3D
    parts: readonly CranePart[]
  }
  export interface AgriculturalCraneSpeed {
    arm: AgriculturalCraneSpeedArm
    grappler: AgriculturalCraneSpeedGrappler
  }
  export interface AgriculturalCraneSpeedArm {
    /**
     * **Default:** `0.01`
     *
     * May not be 0.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AgriculturalCraneSpeedArm.html#turn_rate Online documentation}
     */
    turn_rate?: double
    /**
     * **Default:** `0.05`
     *
     * Must be positive.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AgriculturalCraneSpeedArm.html#extension_speed Online documentation}
     */
    extension_speed?: double
  }
  export interface AgriculturalCraneSpeedGrappler {
    /**
     * **Default:** `0.01`
     *
     * May not be 0.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AgriculturalCraneSpeedGrappler.html#vertical_turn_rate Online documentation}
     */
    vertical_turn_rate?: double
    /**
     * **Default:** `0.01`
     *
     * May not be 0.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AgriculturalCraneSpeedGrappler.html#horizontal_turn_rate Online documentation}
     */
    horizontal_turn_rate?: double
    /**
     * **Default:** `0.01`
     *
     * Must be positive.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AgriculturalCraneSpeedGrappler.html#extension_speed Online documentation}
     */
    extension_speed?: double
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AgriculturalCraneSpeedGrappler.html#allow_transpolar_movement Online documentation}
     */
    allow_transpolar_movement?: bool
  }
  /**
   * The name of an {@link AirbornePollutantPrototype}.
   * @example
   * "pollution"
   * @example
   * "pollen"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/AirbornePollutantID.html Online documentation}
   */
  export type AirbornePollutantID = string
  export interface AlternativeBuildTipTrigger extends CountBasedTipTrigger {
    readonly type: "alternative-build"
  }
  /**
   * Lets the game know in what instances the audio file is played.
   *
   * ## Union members
   * - `"menu-track"`: This track is only played in the main menu.
   * - `"main-track"`: This track is played interleaved (alternating) with `"interlude"` tracks.
   * - `"hero-track"`: This track is played when a character steps on a new surface for the first time. Only one `"hero-track"` per planet or space platform is allowed.
   * - `"interlude"`: This track is played interleaved (alternating) with `"main-track"` tracks.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/AmbientSoundType.html Online documentation}
   */
  export type AmbientSoundType = "menu-track" | "main-track" | "hero-track" | "interlude"
  /**
   * The name of an {@link AmmoCategory}.
   * @example
   * "bullet"
   * @example
   * "melee"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/AmmoCategoryID.html Online documentation}
   */
  export type AmmoCategoryID = string
  export interface AmmoDamageModifier extends BaseModifier {
    readonly type: "ammo-damage"
    /**
     * **Default:** `true`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AmmoDamageModifier.html#infer_icon Online documentation}
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AmmoDamageModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
    /**
     * Name of the {@link AmmoCategory} that is affected.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AmmoDamageModifier.html#ammo_category Online documentation}
     */
    ammo_category: AmmoCategoryID
    /**
     * Modification value, which will be added to the current ammo damage modifier upon researching.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AmmoDamageModifier.html#modifier Online documentation}
     */
    modifier: double
  }
  /**
   * Used to allow specifying different ammo effects depending on which kind of entity the ammo is used in.
   *
   * If ammo is used in an entity that isn't covered by the defined source_types, e.g. only `"player"` and `"vehicle"` are defined and the ammo is used by a turret, the first defined AmmoType in the {@link AmmoItemPrototype#ammo_type AmmoItemPrototype::ammo_type} array is used.
   *
   * ## Union members
   * - `"default"`
   * - `"player"`
   * - `"turret"`
   * - `"vehicle"`
   * @see {@link https://lua-api.factorio.com/2.0.16/types/AmmoSourceType.html Online documentation}
   */
  export type AmmoSourceType = "default" | "player" | "turret" | "vehicle"
  /**
   * Definition of actual parameters used in attack.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/AmmoType.html Online documentation}
   */
  export interface AmmoType {
    /**
     * Describes actions taken upon attack happening.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AmmoType.html#action Online documentation}
     */
    action?: Trigger
    /**
     * **Default:** `false`
     *
     * When true, the gun will be able to shoot even when the target is out of range. Only applies when `target_type` equals `"position"`. The gun will fire at the maximum range in the direction of the target position.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AmmoType.html#clamp_position Online documentation}
     */
    clamp_position?: bool
    /**
     * Energy consumption of a single shot, if applicable.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AmmoType.html#energy_consumption Online documentation}
     */
    energy_consumption?: Energy
    /**
     * **Default:** `1`
     *
     * Affects the `range` value of the shooting gun prototype's {@link BaseAttackParameters} to give a modified maximum range. The `min_range` value of the gun is unaffected.
     *
     * This has no effect on artillery turrets and wagons even though the bonus appears in the GUI. {@linkplain https://forums.factorio.com/103658 Forum thread}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AmmoType.html#range_modifier Online documentation}
     */
    range_modifier?: double
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AmmoType.html#cooldown_modifier Online documentation}
     */
    cooldown_modifier?: double
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AmmoType.html#consumption_modifier Online documentation}
     */
    consumption_modifier?: float
    /**
     * **Default:** `"entity"`
     *
     * `"entity"` fires at an entity, `"position"` fires directly at a position, `"direction"` fires in a direction.
     *
     * If this is `"entity"`, `clamp_position` is forced to be `false`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AmmoType.html#target_type Online documentation}
     */
    target_type?: "entity" | "position" | "direction"
    /**
     * Only exists (and is then mandatory) if the {@link AmmoItemPrototype#ammo_type AmmoItemPrototype::ammo_type} this AmmoType is defined on has multiple ammo types.
     *
     * Defines for which kind of entity this ammo type applies. Each entity kind can only be used once per array.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AmmoType.html#source_type Online documentation}
     */
    source_type?: AmmoSourceType
    /**
     * List of entities that can be targeted by this ammo type.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AmmoType.html#target_filter Online documentation}
     */
    target_filter?: readonly EntityID[]
  }
  export interface AndTipTrigger {
    readonly type: "and"
    /**
     * If all of the triggers are fulfilled, this trigger is considered fulfilled.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AndTipTrigger.html#triggers Online documentation}
     */
    triggers: readonly TipTrigger[]
  }
  export interface AnimatedVector {
    /**
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AnimatedVector.html#rotations Online documentation}
     */
    rotations: readonly VectorRotation[]
    /**
     * Default render layer for the rotations.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AnimatedVector.html#render_layer Online documentation}
     */
    render_layer?: RenderLayer
    /**
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AnimatedVector.html#direction_shift Online documentation}
     */
    direction_shift?: DirectionShift
  }
  /**
   * Specifies an animation that can be used in the game.
   *
   * Note that if any frame of the animation is specified from the same source as any other {@link Sprite} or frame of other animation, it will be shared.
   * @example
   * -- simple animation
   * horizontal_animation =
   * {
   *   filename = "__base__/graphics/entity/steam-engine/steam-engine-H.png",
   *   width = 352,
   *   height = 257,
   *   frame_count = 32,
   *   line_length = 8,
   *   shift = {0.03125, -0.1484375}
   * }
   * @example
   * -- animation with layers
   * horizontal_animation =
   * {
   *   layers =
   *   {
   *     {
   *       filename = "__base__/graphics/entity/steam-engine/steam-engine-H.png",
   *       width = 352,
   *       height = 257,
   *       frame_count = 32,
   *       line_length = 8,
   *       shift = {0.03125, -0.15625}
   *     },
   *     {
   *       filename = "__base__/graphics/entity/steam-engine/steam-engine-H-shadow.png",
   *       width = 508,
   *       height = 160,
   *       frame_count = 32,
   *       line_length = 8,
   *       draw_as_shadow = true,
   *       shift = {1.5, 0.75}
   *     }
   *   }
   * }
   * @see {@link https://lua-api.factorio.com/2.0.16/types/Animation.html Online documentation}
   */
  export interface Animation extends Omit<AnimationParameters, "filename"> {
    /**
     * If this property is present, all Animation definitions have to be placed as entries in the array, and they will all be loaded from there. `layers` may not be an empty table. Each definition in the array may also have the `layers` property.
     *
     * `animation_speed` and `max_advance` of the first layer are used for all layers. All layers will run at the same speed.
     *
     * If this property is present, all other properties, including those inherited from AnimationParameters, are ignored.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Animation.html#layers Online documentation}
     */
    layers?: readonly Animation[]
    /**
     * Only loaded if `layers` is not defined. Mandatory if neither `stripes` nor `filenames` are defined.
     *
     * The path to the sprite file to use.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Animation.html#filename Online documentation}
     */
    filename?: FileName
    /**
     * Only loaded if `layers` is not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Animation.html#stripes Online documentation}
     */
    stripes?: readonly Stripe[]
    /**
     * Only loaded if neither `layers` nor `stripes` are defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Animation.html#filenames Online documentation}
     */
    filenames?: readonly FileName[]
    /**
     * **Default:** `Value of `frame_count``
     *
     * Only loaded if `layers` is not defined and if `filenames` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Animation.html#slice Online documentation}
     */
    slice?: uint32
    /**
     * Only loaded if `layers` is not defined. Mandatory if `filenames` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Animation.html#lines_per_file Online documentation}
     */
    lines_per_file?: uint32
  }
  /**
   * Struct type for {@link Animation4Way}
   * @see Animation4Way
   * @see {@link https://lua-api.factorio.com/2.0.16/types/Animation4Way.html Online documentation}
   */
  export interface Animation4WayStruct {
    north: Animation
    north_east?: Animation
    east?: Animation
    south_east?: Animation
    south?: Animation
    south_west?: Animation
    west?: Animation
    north_west?: Animation
  }
  /**
   * If this is loaded as a single Animation, it applies to all directions. Any direction that is not defined defaults to the north animation.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/Animation4Way.html Online documentation}
   */
  export type Animation4Way = Animation4WayStruct | Animation
  export interface AnimationElement {
    /**
     * **Default:** `"object"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AnimationElement.html#render_layer Online documentation}
     */
    render_layer?: RenderLayer
    /**
     * Used to determine render order for sprites with the same `render_layer` in the same position. Sprites with a higher `secondary_draw_order` are drawn on top.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AnimationElement.html#secondary_draw_order Online documentation}
     */
    secondary_draw_order?: int8
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AnimationElement.html#apply_tint Online documentation}
     */
    apply_tint?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AnimationElement.html#always_draw Online documentation}
     */
    always_draw?: bool
    animation?: Animation
  }
  /**
   * This is a list of 1-based frame indices into the spritesheet. The actual length of the animation will then be the length of the frame_sequence (times `repeat_count`, plus the length minus two if `run_mode` is `"forward-then-backward"`). There is a limit for (actual) animation length of 255 frames.
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
   * @see {@link https://lua-api.factorio.com/2.0.16/types/AnimationFrameSequence.html Online documentation}
   */
  export type AnimationFrameSequence = readonly uint16[]
  export interface AnimationParameters extends SpriteParameters {
    /**
     * The width and height of one frame. If this is a tuple, the first member of the tuple is the width and the second is the height. Otherwise the size is both width and height. Width and height may only be in the range of 0-4096.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AnimationParameters.html#size Online documentation}
     */
    size?: SpriteSizeType | readonly [SpriteSizeType, SpriteSizeType]
    /**
     * Mandatory if `size` is not defined.
     *
     * Width of one frame in pixels, from 0-4096.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AnimationParameters.html#width Online documentation}
     */
    width?: SpriteSizeType
    /**
     * Mandatory if `size` is not defined.
     *
     * Height of one frame in pixels, from 0-4096.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AnimationParameters.html#height Online documentation}
     */
    height?: SpriteSizeType
    /**
     * **Default:** `"forward"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AnimationParameters.html#run_mode Online documentation}
     */
    run_mode?: AnimationRunMode
    /**
     * **Default:** `1`
     *
     * Can't be `0`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AnimationParameters.html#frame_count Online documentation}
     */
    frame_count?: uint32
    /**
     * **Default:** `0`
     *
     * Specifies how many pictures are on each horizontal line in the image file. `0` means that all the pictures are in one horizontal line. Once the specified number of pictures are loaded from a line, the pictures from the next line are loaded. This is to allow having longer animations loaded in to Factorio's graphics matrix than the game engine's width limit of 8192px per input file. The restriction on input files is to be compatible with most graphics cards.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AnimationParameters.html#line_length Online documentation}
     */
    line_length?: uint32
    /**
     * **Default:** `1`
     *
     * Modifier of the animation playing speed, the default of `1` means one animation frame per tick (60 fps). The speed of playing can often vary depending on the usage (output of steam engine for example). Has to be greater than `0`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AnimationParameters.html#animation_speed Online documentation}
     */
    animation_speed?: float
    /**
     * **Default:** `MAX_FLOAT`
     *
     * Maximum amount of frames the animation can move forward in one update. Useful to cap the animation speed on entities where it is variable, such as car animations.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AnimationParameters.html#max_advance Online documentation}
     */
    max_advance?: float
    /**
     * **Default:** `1`
     *
     * How many times to repeat the animation to complete an animation cycle. E.g. if one layer is 10 frames, a second layer of 1 frame would need `repeat_count = 10` to match the complete cycle.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AnimationParameters.html#repeat_count Online documentation}
     */
    repeat_count?: uint8
    /**
     * Number of slices this is sliced into when using the "optimized atlas packing" option. If you are a modder, you can just ignore this property. Example: If this is 4, the sprite will be sliced into a 4×4 grid.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AnimationParameters.html#dice Online documentation}
     */
    dice?: uint8
    /**
     * Same as `dice` above, but this specifies only how many slices there are on the x axis.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AnimationParameters.html#dice_x Online documentation}
     */
    dice_x?: uint8
    /**
     * Same as `dice` above, but this specifies only how many slices there are on the y axis.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AnimationParameters.html#dice_y Online documentation}
     */
    dice_y?: uint8
    frame_sequence?: AnimationFrameSequence
    /**
     * **Default:** `0`
     *
     * Only loaded if this is an icon, that is it has the flag `"group=icon"` or `"group=gui"`.
     *
     * Note that `mipmap_count` doesn't make sense in an animation, as it is not possible to layout mipmaps in a way that would load both the animation and the mipmaps correctly (besides animations with just one frame). See {@linkplain https://forums.factorio.com/viewtopic.php?p=549058#p549058 here}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AnimationParameters.html#mipmap_count Online documentation}
     */
    mipmap_count?: uint8
    /**
     * **Default:** `false`
     *
     * Unused.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AnimationParameters.html#generate_sdf Online documentation}
     */
    generate_sdf?: bool
  }
  /**
   * ## Union members
   * - `"forward"`
   * - `"backward"`
   * - `"forward-then-backward"`: Does not repeat the first and last frame when running backwards.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/AnimationRunMode.html Online documentation}
   */
  export type AnimationRunMode = "forward" | "backward" | "forward-then-backward"
  export interface AnimationSheet extends Omit<AnimationParameters, "filename"> {
    variation_count: uint32
    /**
     * **Default:** `Value of `variation_count``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AnimationSheet.html#line_length Online documentation}
     */
    line_length?: uint32
    /**
     * Only loaded, and mandatory if `filenames` is not defined.
     *
     * The path to the animation file to use.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AnimationSheet.html#filename Online documentation}
     */
    filename?: FileName
    filenames?: readonly FileName[]
    /**
     * Mandatory if `filenames` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AnimationSheet.html#lines_per_file Online documentation}
     */
    lines_per_file?: uint32
  }
  /**
   * Struct type for {@link AnimationVariations}
   * @see AnimationVariations
   * @see {@link https://lua-api.factorio.com/2.0.16/types/AnimationVariations.html Online documentation}
   */
  export interface AnimationVariationsStruct {
    /**
     * The variations are arranged vertically in the file, one row for each variation.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AnimationVariations.html#sheet Online documentation}
     */
    sheet?: AnimationSheet
    /**
     * Only loaded if `sheet` is not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AnimationVariations.html#sheets Online documentation}
     */
    sheets?: readonly AnimationSheet[]
  }
  /**
   * @example
   * -- array of animations
   * animations =
   * {
   *   {
   *     filename = "__base__/graphics/entity/explosion-gunshot/explosion-gunshot.png",
   *     draw_as_glow = true,
   *     priority = "extra-high",
   *     width = 34,
   *     height = 38,
   *     frame_count = 2,
   *     animation_speed = 1.5,
   *     shift = {0, 0}
   *   },
   *   {
   *     filename = "__base__/graphics/entity/explosion-gunshot/explosion-gunshot.png",
   *     draw_as_glow = true,
   *     priority = "extra-high",
   *     width = 34,
   *     height = 38,
   *     x = 34 * 2,
   *     frame_count = 2,
   *     animation_speed = 1.5,
   *     shift = {0, 0}
   *   },
   *   -- [...]
   * }
   * @example
   * -- animation sheet using "sheet"
   * pictures =
   * {
   *   sheet =
   *   {
   *     filename = "__base__/graphics/entity/character/footprints.png",
   *     line_length = 2,
   *     frame_count = 2,
   *     width = 30,
   *     height = 22,
   *     shift = util.by_pixel(0.25, 0.25),
   *     scale = 0.5,
   *     variation_count = 8
   *   }
   * }
   * @see {@link https://lua-api.factorio.com/2.0.16/types/AnimationVariations.html Online documentation}
   */
  export type AnimationVariations = AnimationVariationsStruct | Animation | readonly Animation[]
  /**
   * A union of all prototypes. A specific prototype is loaded based on the value of the `type` key.
   *
   * See the {@linkplain https://lua-api.factorio.com/2.0.16/prototypes.html Prototypes page} for more information.
   *
   * ## Union members
   * - {@link AccumulatorPrototype}: `'accumulator'`
   * - {@link AchievementPrototype}: `'achievement'`
   * - {@link ActiveDefenseEquipmentPrototype}: `'active-defense-equipment'`
   * - {@link AgriculturalTowerPrototype}: `'agricultural-tower'`
   * - {@link AirbornePollutantPrototype}: `'airborne-pollutant'`
   * - {@link AmbientSound}: `'ambient-sound'`
   * - {@link AmmoCategory}: `'ammo-category'`
   * - {@link AmmoItemPrototype}: `'ammo'`
   * - {@link AmmoTurretPrototype}: `'ammo-turret'`
   * - {@link AnimationPrototype}: `'animation'`
   * - {@link ArithmeticCombinatorPrototype}: `'arithmetic-combinator'`
   * - {@link ArmorPrototype}: `'armor'`
   * - {@link ArrowPrototype}: `'arrow'`
   * - {@link ArtilleryFlarePrototype}: `'artillery-flare'`
   * - {@link ArtilleryProjectilePrototype}: `'artillery-projectile'`
   * - {@link ArtilleryTurretPrototype}: `'artillery-turret'`
   * - {@link ArtilleryWagonPrototype}: `'artillery-wagon'`
   * - {@link AssemblingMachinePrototype}: `'assembling-machine'`
   * - {@link AsteroidChunkPrototype}: `'asteroid-chunk'`
   * - {@link AsteroidCollectorPrototype}: `'asteroid-collector'`
   * - {@link AsteroidPrototype}: `'asteroid'`
   * - {@link AutoplaceControl}: `'autoplace-control'`
   * - {@link BatteryEquipmentPrototype}: `'battery-equipment'`
   * - {@link BeaconPrototype}: `'beacon'`
   * - {@link BeamPrototype}: `'beam'`
   * - {@link BeltImmunityEquipmentPrototype}: `'belt-immunity-equipment'`
   * - {@link BlueprintBookPrototype}: `'blueprint-book'`
   * - {@link BlueprintItemPrototype}: `'blueprint'`
   * - {@link BoilerPrototype}: `'boiler'`
   * - {@link BuildEntityAchievementPrototype}: `'build-entity-achievement'`
   * - {@link BurnerGeneratorPrototype}: `'burner-generator'`
   * - {@link BurnerUsagePrototype}: `'burner-usage'`
   * - {@link CapsulePrototype}: `'capsule'`
   * - {@link CaptureRobotPrototype}: `'capture-robot'`
   * - {@link CarPrototype}: `'car'`
   * - {@link CargoBayPrototype}: `'cargo-bay'`
   * - {@link CargoLandingPadPrototype}: `'cargo-landing-pad'`
   * - {@link CargoPodPrototype}: `'cargo-pod'`
   * - {@link CargoWagonPrototype}: `'cargo-wagon'`
   * - {@link ChainActiveTriggerPrototype}: `'chain-active-trigger'`
   * - {@link ChangedSurfaceAchievementPrototype}: `'change-surface-achievement'`
   * - {@link CharacterCorpsePrototype}: `'character-corpse'`
   * - {@link CharacterPrototype}: `'character'`
   * - {@link CliffPrototype}: `'cliff'`
   * - {@link CollisionLayerPrototype}: `'collision-layer'`
   * - {@link CombatRobotCountAchievementPrototype}: `'combat-robot-count-achievement'`
   * - {@link CombatRobotPrototype}: `'combat-robot'`
   * - {@link CompleteObjectiveAchievementPrototype}: `'complete-objective-achievement'`
   * - {@link ConstantCombinatorPrototype}: `'constant-combinator'`
   * - {@link ConstructWithRobotsAchievementPrototype}: `'construct-with-robots-achievement'`
   * - {@link ConstructionRobotPrototype}: `'construction-robot'`
   * - {@link ContainerPrototype}: `'container'`
   * - {@link CopyPasteToolPrototype}: `'copy-paste-tool'`
   * - {@link CorpsePrototype}: `'corpse'`
   * - {@link CreatePlatformAchievementPrototype}: `'create-platform-achievement'`
   * - {@link CurvedRailAPrototype}: `'curved-rail-a'`
   * - {@link CurvedRailBPrototype}: `'curved-rail-b'`
   * - {@link CustomEventPrototype}: `'custom-event'`
   * - {@link CustomInputPrototype}: `'custom-input'`
   * - {@link DamageType}: `'damage-type'`
   * - {@link DeciderCombinatorPrototype}: `'decider-combinator'`
   * - {@link DeconstructWithRobotsAchievementPrototype}: `'deconstruct-with-robots-achievement'`
   * - {@link DeconstructibleTileProxyPrototype}: `'deconstructible-tile-proxy'`
   * - {@link DeconstructionItemPrototype}: `'deconstruction-item'`
   * - {@link DecorativePrototype}: `'optimized-decorative'`
   * - {@link DelayedActiveTriggerPrototype}: `'delayed-active-trigger'`
   * - {@link DeliverByRobotsAchievementPrototype}: `'deliver-by-robots-achievement'`
   * - {@link DeliverCategory}: `'deliver-category'`
   * - {@link DeliverImpactCombination}: `'deliver-impact-combination'`
   * - {@link DepleteResourceAchievementPrototype}: `'deplete-resource-achievement'`
   * - {@link DestroyCliffAchievementPrototype}: `'destroy-cliff-achievement'`
   * - {@link DisplayPanelPrototype}: `'display-panel'`
   * - {@link DontBuildEntityAchievementPrototype}: `'dont-build-entity-achievement'`
   * - {@link DontCraftManuallyAchievementPrototype}: `'dont-craft-manually-achievement'`
   * - {@link DontKillManuallyAchievementPrototype}: `'dont-kill-manually-achievement'`
   * - {@link DontResearchBeforeResearchingAchievementPrototype}: `'dont-research-before-researching-achievement'`
   * - {@link DontUseEntityInEnergyProductionAchievementPrototype}: `'dont-use-entity-in-energy-production-achievement'`
   * - {@link EditorControllerPrototype}: `'editor-controller'`
   * - {@link ElectricEnergyInterfacePrototype}: `'electric-energy-interface'`
   * - {@link ElectricPolePrototype}: `'electric-pole'`
   * - {@link ElectricTurretPrototype}: `'electric-turret'`
   * - {@link ElevatedCurvedRailAPrototype}: `'elevated-curved-rail-a'`
   * - {@link ElevatedCurvedRailBPrototype}: `'elevated-curved-rail-b'`
   * - {@link ElevatedHalfDiagonalRailPrototype}: `'elevated-half-diagonal-rail'`
   * - {@link ElevatedStraightRailPrototype}: `'elevated-straight-rail'`
   * - {@link EnemySpawnerPrototype}: `'unit-spawner'`
   * - {@link EnergyShieldEquipmentPrototype}: `'energy-shield-equipment'`
   * - {@link EntityGhostPrototype}: `'entity-ghost'`
   * - {@link EquipArmorAchievementPrototype}: `'equip-armor-achievement'`
   * - {@link EquipmentCategory}: `'equipment-category'`
   * - {@link EquipmentGhostPrototype}: `'equipment-ghost'`
   * - {@link EquipmentGridPrototype}: `'equipment-grid'`
   * - {@link ExplosionPrototype}: `'explosion'`
   * - {@link FireFlamePrototype}: `'fire'`
   * - {@link FishPrototype}: `'fish'`
   * - {@link FluidPrototype}: `'fluid'`
   * - {@link FluidStreamPrototype}: `'stream'`
   * - {@link FluidTurretPrototype}: `'fluid-turret'`
   * - {@link FluidWagonPrototype}: `'fluid-wagon'`
   * - {@link FontPrototype}: `'font'`
   * - {@link FuelCategory}: `'fuel-category'`
   * - {@link FurnacePrototype}: `'furnace'`
   * - {@link FusionGeneratorPrototype}: `'fusion-generator'`
   * - {@link FusionReactorPrototype}: `'fusion-reactor'`
   * - {@link GatePrototype}: `'gate'`
   * - {@link GeneratorEquipmentPrototype}: `'generator-equipment'`
   * - {@link GeneratorPrototype}: `'generator'`
   * - {@link GodControllerPrototype}: `'god-controller'`
   * - {@link GroupAttackAchievementPrototype}: `'group-attack-achievement'`
   * - {@link GuiStyle}: `'gui-style'`
   * - {@link GunPrototype}: `'gun'`
   * - {@link HalfDiagonalRailPrototype}: `'half-diagonal-rail'`
   * - {@link HeatInterfacePrototype}: `'heat-interface'`
   * - {@link HeatPipePrototype}: `'heat-pipe'`
   * - {@link HighlightBoxEntityPrototype}: `'highlight-box'`
   * - {@link ImpactCategory}: `'impact-category'`
   * - {@link InfinityContainerPrototype}: `'infinity-container'`
   * - {@link InfinityPipePrototype}: `'infinity-pipe'`
   * - {@link InserterPrototype}: `'inserter'`
   * - {@link InventoryBonusEquipmentPrototype}: `'inventory-bonus-equipment'`
   * - {@link ItemEntityPrototype}: `'item-entity'`
   * - {@link ItemGroup}: `'item-group'`
   * - {@link ItemPrototype}: `'item'`
   * - {@link ItemRequestProxyPrototype}: `'item-request-proxy'`
   * - {@link ItemSubGroup}: `'item-subgroup'`
   * - {@link ItemWithEntityDataPrototype}: `'item-with-entity-data'`
   * - {@link ItemWithInventoryPrototype}: `'item-with-inventory'`
   * - {@link ItemWithLabelPrototype}: `'item-with-label'`
   * - {@link ItemWithTagsPrototype}: `'item-with-tags'`
   * - {@link KillAchievementPrototype}: `'kill-achievement'`
   * - {@link LabPrototype}: `'lab'`
   * - {@link LampPrototype}: `'lamp'`
   * - {@link LandMinePrototype}: `'land-mine'`
   * - {@link LaneSplitterPrototype}: `'lane-splitter'`
   * - {@link LegacyCurvedRailPrototype}: `'legacy-curved-rail'`
   * - {@link LegacyStraightRailPrototype}: `'legacy-straight-rail'`
   * - {@link LightningAttractorPrototype}: `'lightning-attractor'`
   * - {@link LightningPrototype}: `'lightning'`
   * - {@link LinkedBeltPrototype}: `'linked-belt'`
   * - {@link LinkedContainerPrototype}: `'linked-container'`
   * - {@link Loader1x1Prototype}: `'loader-1x1'`
   * - {@link Loader1x2Prototype}: `'loader'`
   * - {@link LocomotivePrototype}: `'locomotive'`
   * - {@link LogisticContainerPrototype}: `'logistic-container'`
   * - {@link LogisticRobotPrototype}: `'logistic-robot'`
   * - {@link MapGenPresets}: `'map-gen-presets'`
   * - {@link MapSettings}: `'map-settings'`
   * - {@link MarketPrototype}: `'market'`
   * - {@link MiningDrillPrototype}: `'mining-drill'`
   * - {@link ModuleCategory}: `'module-category'`
   * - {@link ModulePrototype}: `'module'`
   * - {@link ModuleTransferAchievementPrototype}: `'module-transfer-achievement'`
   * - {@link MouseCursor}: `'mouse-cursor'`
   * - {@link MovementBonusEquipmentPrototype}: `'movement-bonus-equipment'`
   * - {@link NamedNoiseExpression}: `'noise-expression'`
   * - {@link NamedNoiseFunction}: `'noise-function'`
   * - {@link NightVisionEquipmentPrototype}: `'night-vision-equipment'`
   * - {@link OffshorePumpPrototype}: `'offshore-pump'`
   * - {@link ParticlePrototype}: `'optimized-particle'`
   * - {@link ParticleSourcePrototype}: `'particle-source'`
   * - {@link PipePrototype}: `'pipe'`
   * - {@link PipeToGroundPrototype}: `'pipe-to-ground'`
   * - {@link PlaceEquipmentAchievementPrototype}: `'place-equipment-achievement'`
   * - {@link PlanetPrototype}: `'planet'`
   * - {@link PlantPrototype}: `'plant'`
   * - {@link PlayerDamagedAchievementPrototype}: `'player-damaged-achievement'`
   * - {@link PlayerPortPrototype}: `'player-port'`
   * - {@link PowerSwitchPrototype}: `'power-switch'`
   * - {@link ProcessionLayerInheritanceGroup}: `'procession-layer-inheritance-group'`
   * - {@link ProcessionPrototype}: `'procession'`
   * - {@link ProduceAchievementPrototype}: `'produce-achievement'`
   * - {@link ProducePerHourAchievementPrototype}: `'produce-per-hour-achievement'`
   * - {@link ProgrammableSpeakerPrototype}: `'programmable-speaker'`
   * - {@link ProjectilePrototype}: `'projectile'`
   * - {@link PumpPrototype}: `'pump'`
   * - {@link QualityPrototype}: `'quality'`
   * - {@link RadarPrototype}: `'radar'`
   * - {@link RailChainSignalPrototype}: `'rail-chain-signal'`
   * - {@link RailPlannerPrototype}: `'rail-planner'`
   * - {@link RailRampPrototype}: `'rail-ramp'`
   * - {@link RailRemnantsPrototype}: `'rail-remnants'`
   * - {@link RailSignalPrototype}: `'rail-signal'`
   * - {@link RailSupportPrototype}: `'rail-support'`
   * - {@link ReactorPrototype}: `'reactor'`
   * - {@link RecipeCategory}: `'recipe-category'`
   * - {@link RecipePrototype}: `'recipe'`
   * - {@link RemoteControllerPrototype}: `'remote-controller'`
   * - {@link RepairToolPrototype}: `'repair-tool'`
   * - {@link ResearchAchievementPrototype}: `'research-achievement'`
   * - {@link ResearchWithSciencePackAchievementPrototype}: `'research-with-science-pack-achievement'`
   * - {@link ResourceCategory}: `'resource-category'`
   * - {@link ResourceEntityPrototype}: `'resource'`
   * - {@link RoboportEquipmentPrototype}: `'roboport-equipment'`
   * - {@link RoboportPrototype}: `'roboport'`
   * - {@link RocketSiloPrototype}: `'rocket-silo'`
   * - {@link RocketSiloRocketPrototype}: `'rocket-silo-rocket'`
   * - {@link RocketSiloRocketShadowPrototype}: `'rocket-silo-rocket-shadow'`
   * - {@link SegmentPrototype}: `'segment'`
   * - {@link SegmentedUnitPrototype}: `'segmented-unit'`
   * - {@link SelectionToolPrototype}: `'selection-tool'`
   * - {@link SelectorCombinatorPrototype}: `'selector-combinator'`
   * - {@link ShootAchievementPrototype}: `'shoot-achievement'`
   * - {@link ShortcutPrototype}: `'shortcut'`
   * - {@link SimpleEntityPrototype}: `'simple-entity'`
   * - {@link SimpleEntityWithForcePrototype}: `'simple-entity-with-force'`
   * - {@link SimpleEntityWithOwnerPrototype}: `'simple-entity-with-owner'`
   * - {@link SmokeWithTriggerPrototype}: `'smoke-with-trigger'`
   * - {@link SolarPanelEquipmentPrototype}: `'solar-panel-equipment'`
   * - {@link SolarPanelPrototype}: `'solar-panel'`
   * - {@link SoundPrototype}: `'sound'`
   * - {@link SpaceConnectionDistanceTraveledAchievementPrototype}: `'space-connection-distance-traveled-achievement'`
   * - {@link SpaceConnectionPrototype}: `'space-connection'`
   * - {@link SpaceLocationPrototype}: `'space-location'`
   * - {@link SpacePlatformHubPrototype}: `'space-platform-hub'`
   * - {@link SpacePlatformStarterPackPrototype}: `'space-platform-starter-pack'`
   * - {@link SpectatorControllerPrototype}: `'spectator-controller'`
   * - {@link SpeechBubblePrototype}: `'speech-bubble'`
   * - {@link SpiderLegPrototype}: `'spider-leg'`
   * - {@link SpiderUnitPrototype}: `'spider-unit'`
   * - {@link SpiderVehiclePrototype}: `'spider-vehicle'`
   * - {@link SpidertronRemotePrototype}: `'spidertron-remote'`
   * - {@link SplitterPrototype}: `'splitter'`
   * - {@link SpritePrototype}: `'sprite'`
   * - {@link StickerPrototype}: `'sticker'`
   * - {@link StorageTankPrototype}: `'storage-tank'`
   * - {@link StraightRailPrototype}: `'straight-rail'`
   * - {@link SurfacePropertyPrototype}: `'surface-property'`
   * - {@link SurfacePrototype}: `'surface'`
   * - {@link TechnologyPrototype}: `'technology'`
   * - {@link TemporaryContainerPrototype}: `'temporary-container'`
   * - {@link ThrusterPrototype}: `'thruster'`
   * - {@link TileEffectDefinition}: `'tile-effect'`
   * - {@link TileGhostPrototype}: `'tile-ghost'`
   * - {@link TilePrototype}: `'tile'`
   * - {@link TipsAndTricksItem}: `'tips-and-tricks-item'`
   * - {@link TipsAndTricksItemCategory}: `'tips-and-tricks-item-category'`
   * - {@link ToolPrototype}: `'tool'`
   * - {@link TrainPathAchievementPrototype}: `'train-path-achievement'`
   * - {@link TrainStopPrototype}: `'train-stop'`
   * - {@link TransportBeltPrototype}: `'transport-belt'`
   * - {@link TreePrototype}: `'tree'`
   * - {@link TriggerTargetType}: `'trigger-target-type'`
   * - {@link TrivialSmokePrototype}: `'trivial-smoke'`
   * - {@link TurretPrototype}: `'turret'`
   * - {@link TutorialDefinition}: `'tutorial'`
   * - {@link UndergroundBeltPrototype}: `'underground-belt'`
   * - {@link UnitPrototype}: `'unit'`
   * - {@link UpgradeItemPrototype}: `'upgrade-item'`
   * - {@link UseEntityInEnergyProductionAchievementPrototype}: `'use-entity-in-energy-production-achievement'`
   * - {@link UseItemAchievementPrototype}: `'use-item-achievement'`
   * - {@link UtilityConstants}: `'utility-constants'`
   * - {@link UtilitySounds}: `'utility-sounds'`
   * - {@link UtilitySprites}: `'utility-sprites'`
   * - {@link VirtualSignalPrototype}: `'virtual-signal'`
   * - {@link WallPrototype}: `'wall'`
   * @see {@link https://lua-api.factorio.com/2.0.16/types/AnyPrototype.html Online documentation}
   */
  export type AnyPrototype =
    | AccumulatorPrototype
    | AchievementPrototype
    | ActiveDefenseEquipmentPrototype
    | AgriculturalTowerPrototype
    | AirbornePollutantPrototype
    | AmbientSound
    | AmmoCategory
    | AmmoItemPrototype
    | AmmoTurretPrototype
    | AnimationPrototype
    | ArithmeticCombinatorPrototype
    | ArmorPrototype
    | ArrowPrototype
    | ArtilleryFlarePrototype
    | ArtilleryProjectilePrototype
    | ArtilleryTurretPrototype
    | ArtilleryWagonPrototype
    | AssemblingMachinePrototype
    | AsteroidChunkPrototype
    | AsteroidCollectorPrototype
    | AsteroidPrototype
    | AutoplaceControl
    | BatteryEquipmentPrototype
    | BeaconPrototype
    | BeamPrototype
    | BeltImmunityEquipmentPrototype
    | BlueprintBookPrototype
    | BlueprintItemPrototype
    | BoilerPrototype
    | BuildEntityAchievementPrototype
    | BurnerGeneratorPrototype
    | BurnerUsagePrototype
    | CapsulePrototype
    | CaptureRobotPrototype
    | CarPrototype
    | CargoBayPrototype
    | CargoLandingPadPrototype
    | CargoPodPrototype
    | CargoWagonPrototype
    | ChainActiveTriggerPrototype
    | ChangedSurfaceAchievementPrototype
    | CharacterCorpsePrototype
    | CharacterPrototype
    | CliffPrototype
    | CollisionLayerPrototype
    | CombatRobotCountAchievementPrototype
    | CombatRobotPrototype
    | CompleteObjectiveAchievementPrototype
    | ConstantCombinatorPrototype
    | ConstructWithRobotsAchievementPrototype
    | ConstructionRobotPrototype
    | ContainerPrototype
    | CopyPasteToolPrototype
    | CorpsePrototype
    | CreatePlatformAchievementPrototype
    | CurvedRailAPrototype
    | CurvedRailBPrototype
    | CustomEventPrototype
    | CustomInputPrototype
    | DamageType
    | DeciderCombinatorPrototype
    | DeconstructWithRobotsAchievementPrototype
    | DeconstructibleTileProxyPrototype
    | DeconstructionItemPrototype
    | DecorativePrototype
    | DelayedActiveTriggerPrototype
    | DeliverByRobotsAchievementPrototype
    | DeliverCategory
    | DeliverImpactCombination
    | DepleteResourceAchievementPrototype
    | DestroyCliffAchievementPrototype
    | DisplayPanelPrototype
    | DontBuildEntityAchievementPrototype
    | DontCraftManuallyAchievementPrototype
    | DontKillManuallyAchievementPrototype
    | DontResearchBeforeResearchingAchievementPrototype
    | DontUseEntityInEnergyProductionAchievementPrototype
    | EditorControllerPrototype
    | ElectricEnergyInterfacePrototype
    | ElectricPolePrototype
    | ElectricTurretPrototype
    | ElevatedCurvedRailAPrototype
    | ElevatedCurvedRailBPrototype
    | ElevatedHalfDiagonalRailPrototype
    | ElevatedStraightRailPrototype
    | EnemySpawnerPrototype
    | EnergyShieldEquipmentPrototype
    | EntityGhostPrototype
    | EquipArmorAchievementPrototype
    | EquipmentCategory
    | EquipmentGhostPrototype
    | EquipmentGridPrototype
    | ExplosionPrototype
    | FireFlamePrototype
    | FishPrototype
    | FluidPrototype
    | FluidStreamPrototype
    | FluidTurretPrototype
    | FluidWagonPrototype
    | FontPrototype
    | FuelCategory
    | FurnacePrototype
    | FusionGeneratorPrototype
    | FusionReactorPrototype
    | GatePrototype
    | GeneratorEquipmentPrototype
    | GeneratorPrototype
    | GodControllerPrototype
    | GroupAttackAchievementPrototype
    | GuiStyle
    | GunPrototype
    | HalfDiagonalRailPrototype
    | HeatInterfacePrototype
    | HeatPipePrototype
    | HighlightBoxEntityPrototype
    | ImpactCategory
    | InfinityContainerPrototype
    | InfinityPipePrototype
    | InserterPrototype
    | InventoryBonusEquipmentPrototype
    | ItemEntityPrototype
    | ItemGroup
    | ItemPrototype
    | ItemRequestProxyPrototype
    | ItemSubGroup
    | ItemWithEntityDataPrototype
    | ItemWithInventoryPrototype
    | ItemWithLabelPrototype
    | ItemWithTagsPrototype
    | KillAchievementPrototype
    | LabPrototype
    | LampPrototype
    | LandMinePrototype
    | LaneSplitterPrototype
    | LegacyCurvedRailPrototype
    | LegacyStraightRailPrototype
    | LightningAttractorPrototype
    | LightningPrototype
    | LinkedBeltPrototype
    | LinkedContainerPrototype
    | Loader1x1Prototype
    | Loader1x2Prototype
    | LocomotivePrototype
    | LogisticContainerPrototype
    | LogisticRobotPrototype
    | MapGenPresets
    | MapSettings
    | MarketPrototype
    | MiningDrillPrototype
    | ModuleCategory
    | ModulePrototype
    | ModuleTransferAchievementPrototype
    | MouseCursor
    | MovementBonusEquipmentPrototype
    | NamedNoiseExpression
    | NamedNoiseFunction
    | NightVisionEquipmentPrototype
    | OffshorePumpPrototype
    | ParticlePrototype
    | ParticleSourcePrototype
    | PipePrototype
    | PipeToGroundPrototype
    | PlaceEquipmentAchievementPrototype
    | PlanetPrototype
    | PlantPrototype
    | PlayerDamagedAchievementPrototype
    | PlayerPortPrototype
    | PowerSwitchPrototype
    | ProcessionLayerInheritanceGroup
    | ProcessionPrototype
    | ProduceAchievementPrototype
    | ProducePerHourAchievementPrototype
    | ProgrammableSpeakerPrototype
    | ProjectilePrototype
    | PumpPrototype
    | QualityPrototype
    | RadarPrototype
    | RailChainSignalPrototype
    | RailPlannerPrototype
    | RailRampPrototype
    | RailRemnantsPrototype
    | RailSignalPrototype
    | RailSupportPrototype
    | ReactorPrototype
    | RecipeCategory
    | RecipePrototype
    | RemoteControllerPrototype
    | RepairToolPrototype
    | ResearchAchievementPrototype
    | ResearchWithSciencePackAchievementPrototype
    | ResourceCategory
    | ResourceEntityPrototype
    | RoboportEquipmentPrototype
    | RoboportPrototype
    | RocketSiloPrototype
    | RocketSiloRocketPrototype
    | RocketSiloRocketShadowPrototype
    | SegmentPrototype
    | SegmentedUnitPrototype
    | SelectionToolPrototype
    | SelectorCombinatorPrototype
    | ShootAchievementPrototype
    | ShortcutPrototype
    | SimpleEntityPrototype
    | SimpleEntityWithForcePrototype
    | SimpleEntityWithOwnerPrototype
    | SmokeWithTriggerPrototype
    | SolarPanelEquipmentPrototype
    | SolarPanelPrototype
    | SoundPrototype
    | SpaceConnectionDistanceTraveledAchievementPrototype
    | SpaceConnectionPrototype
    | SpaceLocationPrototype
    | SpacePlatformHubPrototype
    | SpacePlatformStarterPackPrototype
    | SpectatorControllerPrototype
    | SpeechBubblePrototype
    | SpiderLegPrototype
    | SpiderUnitPrototype
    | SpiderVehiclePrototype
    | SpidertronRemotePrototype
    | SplitterPrototype
    | SpritePrototype
    | StickerPrototype
    | StorageTankPrototype
    | StraightRailPrototype
    | SurfacePropertyPrototype
    | SurfacePrototype
    | TechnologyPrototype
    | TemporaryContainerPrototype
    | ThrusterPrototype
    | TileEffectDefinition
    | TileGhostPrototype
    | TilePrototype
    | TipsAndTricksItem
    | TipsAndTricksItemCategory
    | ToolPrototype
    | TrainPathAchievementPrototype
    | TrainStopPrototype
    | TransportBeltPrototype
    | TreePrototype
    | TriggerTargetType
    | TrivialSmokePrototype
    | TurretPrototype
    | TutorialDefinition
    | UndergroundBeltPrototype
    | UnitPrototype
    | UpgradeItemPrototype
    | UseEntityInEnergyProductionAchievementPrototype
    | UseItemAchievementPrototype
    | UtilityConstants
    | UtilitySounds
    | UtilitySprites
    | VirtualSignalPrototype
    | WallPrototype
  export interface ApplyStarterPackTipTrigger extends CountBasedTipTrigger {
    readonly type: "apply-starter-pack"
  }
  export interface AreaTriggerItem extends TriggerItem {
    readonly type: "area"
    radius: double
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AreaTriggerItem.html#trigger_from_target Online documentation}
     */
    trigger_from_target?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AreaTriggerItem.html#target_entities Online documentation}
     */
    target_entities?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AreaTriggerItem.html#show_in_tooltip Online documentation}
     */
    show_in_tooltip?: bool
    /**
     * **Default:** `"distance-from-collision-box"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AreaTriggerItem.html#collision_mode Online documentation}
     */
    collision_mode?: "distance-from-collision-box" | "distance-from-center"
  }
  export interface ArtilleryRangeModifier extends SimpleModifier {
    readonly type: "artillery-range"
    /**
     * **Default:** `false`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ArtilleryRangeModifier.html#infer_icon Online documentation}
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ArtilleryRangeModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface ArtilleryRemoteCapsuleAction {
    readonly type: "artillery-remote"
    /**
     * Name of an {@link ArtilleryFlarePrototype}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ArtilleryRemoteCapsuleAction.html#flare Online documentation}
     */
    flare: EntityID
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ArtilleryRemoteCapsuleAction.html#play_sound_on_failure Online documentation}
     */
    play_sound_on_failure?: bool
  }
  export interface ArtilleryTriggerDelivery extends TriggerDeliveryItem {
    readonly type: "artillery"
    /**
     * Name of a {@link ArtilleryProjectilePrototype}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ArtilleryTriggerDelivery.html#projectile Online documentation}
     */
    projectile: EntityID
    starting_speed: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ArtilleryTriggerDelivery.html#starting_speed_deviation Online documentation}
     */
    starting_speed_deviation?: float
    /**
     * **Default:** `0`
     *
     * Maximum deviation of the projectile from source orientation, in +/- (`x radians / 2`). Example: `3.14 radians -> +/- (180° / 2)`, meaning up to 90° deviation in either direction of rotation.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ArtilleryTriggerDelivery.html#direction_deviation Online documentation}
     */
    direction_deviation?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ArtilleryTriggerDelivery.html#range_deviation Online documentation}
     */
    range_deviation?: float
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ArtilleryTriggerDelivery.html#trigger_fired_artillery Online documentation}
     */
    trigger_fired_artillery?: bool
  }
  /**
   * The name of an {@link AsteroidChunkPrototype}.
   * @example
   * "metallic-asteroid-chunk"
   * @example
   * "oxide-asteroid-chunk"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/AsteroidChunkID.html Online documentation}
   */
  export type AsteroidChunkID = string
  /**
   * @see AsteroidCollectorPrototype.graphics_set
   * @see {@link https://lua-api.factorio.com/2.0.16/prototypes/AsteroidCollectorPrototype.html#graphics_set Online documentation}
   */
  export interface AsteroidCollectorGraphicsSet {
    animation?: Animation4Way
    status_lamp_picture_on?: RotatedSprite
    status_lamp_picture_full?: RotatedSprite
    status_lamp_picture_off?: RotatedSprite
    below_arm_pictures?: RotatedSprite
    below_ground_pictures?: RotatedSprite
    arm_head_animation?: RotatedAnimation
    arm_head_top_animation?: RotatedAnimation
    arm_link?: RotatedSprite
  }
  export interface AsteroidGraphicsSet {
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AsteroidGraphicsSet.html#rotation_speed Online documentation}
     */
    rotation_speed?: float
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AsteroidGraphicsSet.html#normal_strength Online documentation}
     */
    normal_strength?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AsteroidGraphicsSet.html#light_width Online documentation}
     */
    light_width?: float
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AsteroidGraphicsSet.html#brightness Online documentation}
     */
    brightness?: float
    /**
     * **Default:** `5`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AsteroidGraphicsSet.html#specular_strength Online documentation}
     */
    specular_strength?: float
    /**
     * **Default:** `6`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AsteroidGraphicsSet.html#specular_power Online documentation}
     */
    specular_power?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AsteroidGraphicsSet.html#specular_purity Online documentation}
     */
    specular_purity?: float
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AsteroidGraphicsSet.html#sss_contrast Online documentation}
     */
    sss_contrast?: float
    /**
     * **Default:** `5`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AsteroidGraphicsSet.html#sss_amount Online documentation}
     */
    sss_amount?: float
    sprite?: Sprite
    variations?: AsteroidVariation | readonly AsteroidVariation[]
    lights?: LightProperties | readonly LightProperties[]
    /**
     * **Default:** ``{0.05, 0.05, 0.05, 1.0}``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AsteroidGraphicsSet.html#ambient_light Online documentation}
     */
    ambient_light?: Color
  }
  export interface AsteroidSettings {
    spawning_rate: double
    max_ray_portals_expanded_per_tick: uint32
  }
  export interface AsteroidSpawnPoint {
    /**
     * Must be >= 0.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AsteroidSpawnPoint.html#probability Online documentation}
     */
    probability: double
    /**
     * Must be > 0.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AsteroidSpawnPoint.html#speed Online documentation}
     */
    speed: double
    /**
     * **Default:** `1`
     *
     * Facing the north. Must be in `[0, 1]` range.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AsteroidSpawnPoint.html#angle_when_stopped Online documentation}
     */
    angle_when_stopped?: double
  }
  export interface AsteroidVariation {
    color_texture: Sprite
    normal_map: Sprite
    roughness_map: Sprite
    shadow_shift?: Vector
  }
  /**
   * Loaded as one of the {@link BaseAttackParameters} extensions, based on the value of the `type` key.
   *
   * ## Union members
   * - {@link ProjectileAttackParameters}: Loaded when the `type` is `"projectile"`.
   * - {@link BeamAttackParameters}: Loaded when the `type` is `"beam"`.
   * - {@link StreamAttackParameters}: Loaded when the `type` is `"stream"`.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/AttackParameters.html Online documentation}
   */
  export type AttackParameters = ProjectileAttackParameters | BeamAttackParameters | StreamAttackParameters
  export interface AttackReactionItem {
    range: float
    action?: Trigger
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AttackReactionItem.html#reaction_modifier Online documentation}
     */
    reaction_modifier?: float
    damage_type?: DamageTypeID
  }
  export interface Attenuation {
    curve_type: AttenuationType
    /**
     * **Default:** `-1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Attenuation.html#tuning_parameter Online documentation}
     */
    tuning_parameter?: float
  }
  /**
   * ## Union members
   * - `"none"`
   * - `"linear"`
   * - `"logarithmic"`
   * - `"exponential"`
   * - `"cosine"`
   * - `"S-curve"`
   * @see {@link https://lua-api.factorio.com/2.0.16/types/AttenuationType.html Online documentation}
   */
  export type AttenuationType = "none" | "linear" | "logarithmic" | "exponential" | "cosine" | "S-curve"
  /**
   * The name of an {@link AutoplaceControl}.
   * @example
   * "copper-ore"
   * @example
   * "trees"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/AutoplaceControlID.html Online documentation}
   */
  export type AutoplaceControlID = string
  export interface AutoplaceSettings {
    /**
     * Whether missing autoplace names for this type should be default enabled.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AutoplaceSettings.html#treat_missing_as_default Online documentation}
     */
    treat_missing_as_default?: bool
    /**
     * Overrides the FrequencySizeRichness provided to the {@link AutoplaceSpecification} of the entity/tile/decorative. Takes priority over the FrequencySizeRichness set in the {@link AutoplaceSpecification#control autoplace control}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AutoplaceSettings.html#settings Online documentation}
     */
    settings?: Record<EntityID | TileID | DecorativeID, FrequencySizeRichness>
  }
  /**
   * Autoplace specification is used to determine which entities are placed when generating map. Currently it is used for enemy bases, tiles, resources and other entities (trees, fishes, etc.).
   *
   * Autoplace specification describe conditions for placing tiles, entities, and decoratives during surface generation. Autoplace specification defines probability of placement on any given tile and richness, which has different meaning depending on the thing being placed.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/AutoplaceSpecification.html Online documentation}
   */
  export interface AutoplaceSpecification {
    /**
     * Name of the {@link AutoplaceControl} (row in the map generator GUI) that applies to this entity.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AutoplaceSpecification.html#control Online documentation}
     */
    control?: AutoplaceControlID
    /**
     * **Default:** `true`
     *
     * Indicates whether the thing should be placed even if {@link MapGenSettings} do not provide frequency/size/richness for it. (either for the specific prototype or for the control named by AutoplaceSpecification.control).
     *
     * If true, normal frequency/size/richness (`value=1`) are used in that case. Otherwise it is treated as if 'none' were selected.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AutoplaceSpecification.html#default_enabled Online documentation}
     */
    default_enabled?: bool
    /**
     * **Default:** `"neutral"`
     *
     * Force of the placed entity. Can be a custom force name. Only relevant for {@link EntityWithOwnerPrototype}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AutoplaceSpecification.html#force Online documentation}
     */
    force?: "enemy" | "player" | "neutral" | string
    /**
     * **Default:** `""`
     *
     * Order for placing the entity (has no effect when placing tiles). Entities whose order compares less are placed earlier (this influences placing multiple entities which collide with itself), from entities with equal order string only one with the highest probability is placed.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AutoplaceSpecification.html#order Online documentation}
     */
    order?: Order
    /**
     * **Default:** `1`
     *
     * For entities and decoratives, how many times to attempt to place on each tile. Probability and collisions are taken into account each attempt.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AutoplaceSpecification.html#placement_density Online documentation}
     */
    placement_density?: uint32
    /**
     * Restricts tiles or tile transitions the entity can appear on.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AutoplaceSpecification.html#tile_restriction Online documentation}
     */
    tile_restriction?: readonly TileIDRestriction[]
    /**
     * Provides a noise expression that will be evaluated at every point on the map to determine probability.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AutoplaceSpecification.html#probability_expression Online documentation}
     */
    probability_expression: NoiseExpression
    /**
     * If specified, provides a noise expression that will be evaluated to determine richness. Otherwise, `probability_expression` will be used instead.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AutoplaceSpecification.html#richness_expression Online documentation}
     */
    richness_expression?: NoiseExpression
    /**
     * A map of expression name to expression. Used by `probability_expression` and `richness_expression`.
     *
     * Local expressions are meant to store data locally similar to local variables in Lua. Their purpose is to hold noise expressions used multiple times in the named noise expression, or just to tell the reader that the local expression has a specific purpose. Local expressions can access other local definitions and also function parameters, but recursive definitions aren't supported.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AutoplaceSpecification.html#local_expressions Online documentation}
     */
    local_expressions?: Record<string, NoiseExpression>
    /**
     * A map of function name to function. Used by `probability_expression` and `richness_expression`.
     *
     * Local functions serve the same purpose as local expressions - they aren't visible outside of the specific prototype and they have access to other local definitions.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/AutoplaceSpecification.html#local_functions Online documentation}
     */
    local_functions?: Record<string, NoiseFunction>
  }
  /**
   * The abstract base of all {@link AttackParameters}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseAttackParameters.html Online documentation}
   */
  export interface BaseAttackParameters {
    /**
     * Before an entity can attack, the distance (in tiles) between the entity and target must be less than or equal to this.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseAttackParameters.html#range Online documentation}
     */
    range: float
    /**
     * Number of ticks in which it will be possible to shoot again. If < 1, multiple shots can be performed in one tick.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseAttackParameters.html#cooldown Online documentation}
     */
    cooldown: float
    /**
     * **Default:** `0`
     *
     * The minimum distance (in tiles) between an entity and target. If a unit's target is less than this, the unit will attempt to move away before attacking. A {@linkplain https://wiki.factorio.com/Flamethrower_turret flamethrower turret} does not move, but has a minimum range. Less than this, it is unable to target an enemy.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseAttackParameters.html#min_range Online documentation}
     */
    min_range?: float
    /**
     * **Default:** `1`
     *
     * If this is <= 0, it is set to 1. Arc from 0 to 1, so for example 0.25 is 90°. Used by the {@linkplain https://wiki.factorio.com/Flamethrower_turret flamethrower turret} in the base game. Arcs greater than 0.5 but less than 1 will be clamped to 0.5 as targeting in arcs larger than half circle is {@linkplain https://forums.factorio.com/94654 not implemented}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseAttackParameters.html#turn_range Online documentation}
     */
    turn_range?: float
    /**
     * **Default:** `0`
     *
     * Used when searching for the nearest enemy, when this is > 0, enemies that aren't burning are preferred over burning enemies. Definition of "burning" for this: Entity has sticker attached to it, and the sticker has a {@link StickerPrototype#spread_fire_entity spread_fire_entity} set.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseAttackParameters.html#fire_penalty Online documentation}
     */
    fire_penalty?: float
    /**
     * **Default:** `0`
     *
     * A higher penalty will discourage turrets from targeting units that would take longer to turn to face.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseAttackParameters.html#rotate_penalty Online documentation}
     */
    rotate_penalty?: float
    /**
     * **Default:** `0`
     *
     * A higher penalty will discourage turrets from targeting units with higher health. A negative penalty will encourage turrets to target units with higher health.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseAttackParameters.html#health_penalty Online documentation}
     */
    health_penalty?: float
    /**
     * **Default:** `"center-to-center"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseAttackParameters.html#range_mode Online documentation}
     */
    range_mode?: RangeMode
    /**
     * **Default:** `equal to `range` property`
     *
     * If less than `range`, the entity will choose a random distance between `range` and `min_attack_distance` and attack from that distance.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseAttackParameters.html#min_attack_distance Online documentation}
     */
    min_attack_distance?: float
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseAttackParameters.html#damage_modifier Online documentation}
     */
    damage_modifier?: float
    /**
     * **Default:** `1`
     *
     * Must be greater than or equal to `0`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseAttackParameters.html#ammo_consumption_modifier Online documentation}
     */
    ammo_consumption_modifier?: float
    /**
     * **Default:** `0`
     *
     * Must be between `0` and `1`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseAttackParameters.html#cooldown_deviation Online documentation}
     */
    cooldown_deviation?: float
    /**
     * **Default:** `0`
     *
     * Number of ticks it takes for the weapon to actually shoot after the order for shooting has been made. This also allows to "adjust" the shooting animation to the effect of shooting.
     *
     * {@link CapsuleAction CapsuleActions} cannot have attack parameters with non-zero warmup.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseAttackParameters.html#warmup Online documentation}
     */
    warmup?: uint32
    /**
     * **Default:** `0`
     *
     * Setting this to anything but zero causes homing projectiles to aim for the predicted location based on enemy movement instead of the current enemy location. If set, this property specifies the distance travelled per tick of the fired projectile.
     * @example
     * -- this is same as particle horizontal speed of flamethrower fire stream
     * lead_target_for_projectile_speed = 0.2* 0.75 * 1.5
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseAttackParameters.html#lead_target_for_projectile_speed Online documentation}
     */
    lead_target_for_projectile_speed?: float
    /**
     * **Default:** `0`
     *
     * Setting this to anything but zero causes projectiles to aim for the predicted location based on enemy movement instead of the current enemy location. If set, this property adds a flat number of ticks atop `lead_target_for_projectile_speed` that the shooter must lead.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseAttackParameters.html#lead_target_for_projectile_delay Online documentation}
     */
    lead_target_for_projectile_delay?: uint32
    /**
     * **Default:** `equal to `cooldown` property`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseAttackParameters.html#movement_slow_down_cooldown Online documentation}
     */
    movement_slow_down_cooldown?: float
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseAttackParameters.html#movement_slow_down_factor Online documentation}
     */
    movement_slow_down_factor?: double
    /**
     * Can be mandatory.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseAttackParameters.html#ammo_type Online documentation}
     */
    ammo_type?: AmmoType
    /**
     * **Default:** `"shoot"`
     *
     * Used in tooltips to set the tooltip category. It is also used to get the locale keys for activation instructions and speed of the action for the tooltip.
     *
     * For example, an activation_type of "throw" will result in the tooltip category "thrown" and the tooltip locale keys "gui.instruction-to-throw" and "description.throwing-speed".
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseAttackParameters.html#activation_type Online documentation}
     */
    activation_type?: "shoot" | "throw" | "consume" | "activate"
    /**
     * Played once at the start of the attack if these are {@link ProjectileAttackParameters}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseAttackParameters.html#sound Online documentation}
     */
    sound?: LayeredSound
    animation?: RotatedAnimation
    /**
     * Played during the attack.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseAttackParameters.html#cyclic_sound Online documentation}
     */
    cyclic_sound?: CyclicSound
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseAttackParameters.html#use_shooter_direction Online documentation}
     */
    use_shooter_direction?: bool
    /**
     * Mandatory if `ammo_category` is not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseAttackParameters.html#ammo_categories Online documentation}
     */
    ammo_categories?: readonly AmmoCategoryID[]
    /**
     * Mandatory if `ammo_categories` is not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseAttackParameters.html#ammo_category Online documentation}
     */
    ammo_category?: AmmoCategoryID
  }
  /**
   * The abstract base of all {@link EnergySource EnergySources}. Specifies the way an entity gets its energy.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseEnergySource.html Online documentation}
   */
  export interface BaseEnergySource {
    /**
     * The pollution an entity emits per minute at full energy consumption. This is exactly the value that is shown in the entity tooltip.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseEnergySource.html#emissions_per_minute Online documentation}
     */
    emissions_per_minute?: Record<AirbornePollutantID, double>
    /**
     * **Default:** `true`
     *
     * Whether to render the "no power" icon if the entity is low on power. Also applies to the "no fuel" icon when using burner energy sources.
     *
     * ![](https://lua-api.factorio.com/2.0.16/static/images/no_power_icon.png)
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseEnergySource.html#render_no_power_icon Online documentation}
     */
    render_no_power_icon?: bool
    /**
     * **Default:** `true`
     *
     * Whether to render the "no network" icon if the entity is not connected to an electric network.
     *
     * ![](https://lua-api.factorio.com/2.0.16/static/images/no_network_icon.png)
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseEnergySource.html#render_no_network_icon Online documentation}
     */
    render_no_network_icon?: bool
  }
  /**
   * The abstract base of all {@link Modifier Modifiers}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseModifier.html Online documentation}
   */
  export interface BaseModifier {
    /**
     * Can't be an empty array.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseModifier.html#icons Online documentation}
     */
    icons?: readonly IconData[]
    /**
     * Path to the icon file.
     *
     * Only loaded if `icons` is not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseModifier.html#icon Online documentation}
     */
    icon?: FileName
    /**
     * **Default:** `64`
     *
     * The size of the square icon, in pixels. E.g. `32` for a 32px by 32px icon. Must be larger than `0`.
     *
     * Only loaded if `icons` is not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseModifier.html#icon_size Online documentation}
     */
    icon_size?: SpriteSizeType
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseModifier.html#hidden Online documentation}
     */
    hidden?: bool
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
   * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseStyleSpecification.html Online documentation}
   */
  export interface BaseStyleSpecification {
    /**
     * Name of a {@link StyleSpecification}. This style inherits all property values from its parent.
     *
     * Styles without a parent property default to the root style for their type. The exception to this are the root styles themselves, as they cannot have a parent set. Due to this, for root styles, some style properties are mandatory and behavior may be unexpected, such as an element not showing up because its size defaults to `0`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseStyleSpecification.html#parent Online documentation}
     */
    parent?: string
    /**
     * **Default:** `"left"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseStyleSpecification.html#horizontal_align Online documentation}
     */
    horizontal_align?: HorizontalAlign
    /**
     * **Default:** `"top"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseStyleSpecification.html#vertical_align Online documentation}
     */
    vertical_align?: VerticalAlign
    ignored_by_search?: bool
    never_hide_by_search?: bool
    /**
     * **Default:** `"auto"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseStyleSpecification.html#horizontally_stretchable Online documentation}
     */
    horizontally_stretchable?: StretchRule
    /**
     * **Default:** `"auto"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseStyleSpecification.html#vertically_stretchable Online documentation}
     */
    vertically_stretchable?: StretchRule
    /**
     * **Default:** `"auto"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseStyleSpecification.html#horizontally_squashable Online documentation}
     */
    horizontally_squashable?: StretchRule
    /**
     * **Default:** `"auto"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseStyleSpecification.html#vertically_squashable Online documentation}
     */
    vertically_squashable?: StretchRule
    /**
     * If this is a tuple, the first member sets `natural_width` and the second sets `natural_height`. Otherwise, both `natural_width` and `natural_height` are set to the same value.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseStyleSpecification.html#natural_size Online documentation}
     */
    natural_size?: uint32 | readonly [uint32, uint32]
    /**
     * If this is a tuple, the first member sets `width`, and the second sets `height`. Otherwise, both `width` and `height` are set to the same value.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseStyleSpecification.html#size Online documentation}
     */
    size?: uint32 | readonly [uint32, uint32]
    /**
     * Sets `minimal_width`, `maximal_width` and `natural_width` to the same value.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseStyleSpecification.html#width Online documentation}
     */
    width?: uint32
    /**
     * **Default:** `0`
     *
     * Minimal width ensures that the widget will never be smaller than than that size. It can't be squashed to be smaller.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseStyleSpecification.html#minimal_width Online documentation}
     */
    minimal_width?: uint32
    /**
     * **Default:** `0`
     *
     * Maximal width ensures that the widget will never be bigger than than that size. It can't be stretched to be bigger.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseStyleSpecification.html#maximal_width Online documentation}
     */
    maximal_width?: uint32
    /**
     * **Default:** `0`
     *
     * Natural width specifies the width of the element tries to have, but it can still be squashed/stretched to have a different size.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseStyleSpecification.html#natural_width Online documentation}
     */
    natural_width?: uint32
    /**
     * Sets `minimal_height`, `maximal_height` and `natural_height` to the same value.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseStyleSpecification.html#height Online documentation}
     */
    height?: uint32
    /**
     * **Default:** `0`
     *
     * Minimal height ensures that the widget will never be smaller than than that size. It can't be squashed to be smaller.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseStyleSpecification.html#minimal_height Online documentation}
     */
    minimal_height?: uint32
    /**
     * **Default:** `0`
     *
     * Maximal height ensures that the widget will never be bigger than than that size. It can't be stretched to be bigger.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseStyleSpecification.html#maximal_height Online documentation}
     */
    maximal_height?: uint32
    /**
     * **Default:** `0`
     *
     * Natural height specifies the height of the element tries to have, but it can still be squashed/stretched to have a different size.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseStyleSpecification.html#natural_height Online documentation}
     */
    natural_height?: uint32
    /**
     * Sets `top_padding`, `right_padding`, `bottom_padding` and `left_padding` to the same value.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseStyleSpecification.html#padding Online documentation}
     */
    padding?: int16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseStyleSpecification.html#top_padding Online documentation}
     */
    top_padding?: int16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseStyleSpecification.html#right_padding Online documentation}
     */
    right_padding?: int16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseStyleSpecification.html#bottom_padding Online documentation}
     */
    bottom_padding?: int16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseStyleSpecification.html#left_padding Online documentation}
     */
    left_padding?: int16
    /**
     * Sets `top_margin`, `right_margin`, `bottom_margin` and `left_margin` to the same value.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseStyleSpecification.html#margin Online documentation}
     */
    margin?: int16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseStyleSpecification.html#top_margin Online documentation}
     */
    top_margin?: int16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseStyleSpecification.html#right_margin Online documentation}
     */
    right_margin?: int16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseStyleSpecification.html#bottom_margin Online documentation}
     */
    bottom_margin?: int16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseStyleSpecification.html#left_margin Online documentation}
     */
    left_margin?: int16
    /**
     * Name of a custom GUI effect, which are hard-coded in the game's engine. Only has one option currently.
     *
     * ## Union members
     * - `"compilatron-hologram"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseStyleSpecification.html#effect Online documentation}
     */
    effect?: "compilatron-hologram"
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BaseStyleSpecification.html#effect_opacity Online documentation}
     */
    effect_opacity?: float
    tooltip?: LocalisedString
  }
  export interface BeaconDistributionModifier extends SimpleModifier {
    readonly type: "beacon-distribution"
    /**
     * **Default:** `true`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeaconDistributionModifier.html#infer_icon Online documentation}
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeaconDistributionModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface BeaconGraphicsSet {
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeaconGraphicsSet.html#draw_animation_when_idle Online documentation}
     */
    draw_animation_when_idle?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeaconGraphicsSet.html#draw_light_when_idle Online documentation}
     */
    draw_light_when_idle?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeaconGraphicsSet.html#random_animation_offset Online documentation}
     */
    random_animation_offset?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeaconGraphicsSet.html#module_icons_suppressed Online documentation}
     */
    module_icons_suppressed?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeaconGraphicsSet.html#reset_animation_when_frozen Online documentation}
     */
    reset_animation_when_frozen?: bool
    /**
     * **Default:** `"object"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeaconGraphicsSet.html#base_layer Online documentation}
     */
    base_layer?: RenderLayer
    /**
     * **Default:** `"object"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeaconGraphicsSet.html#animation_layer Online documentation}
     */
    animation_layer?: RenderLayer
    /**
     * **Default:** `"object"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeaconGraphicsSet.html#top_layer Online documentation}
     */
    top_layer?: RenderLayer
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeaconGraphicsSet.html#animation_progress Online documentation}
     */
    animation_progress?: float
    /**
     * **Default:** `"none"`
     *
     * Which tint set in {@link ModulePrototype#beacon_tint ModulePrototype::beacon_tint} should be applied to elements of the `animation_list`, if any.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeaconGraphicsSet.html#apply_module_tint Online documentation}
     */
    apply_module_tint?: ModuleTint
    /**
     * **Default:** `no color`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeaconGraphicsSet.html#no_modules_tint Online documentation}
     */
    no_modules_tint?: Color
    animation_list?: readonly AnimationElement[]
    frozen_patch?: Sprite
    light?: LightDefinition
    /**
     * The visualisations available for displaying the modules in the beacon. The visualisation is chosen based on art style, see {@link BeaconModuleVisualizations#art_style BeaconModuleVisualizations::art_style} and {@link ModulePrototype#art_style ModulePrototype::art_style}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeaconGraphicsSet.html#module_visualisations Online documentation}
     */
    module_visualisations?: readonly BeaconModuleVisualizations[]
    /**
     * **Default:** `"single-module"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeaconGraphicsSet.html#module_tint_mode Online documentation}
     */
    module_tint_mode?: "single-module" | "mix"
  }
  export interface BeaconModuleVisualization {
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeaconModuleVisualization.html#has_empty_slot Online documentation}
     */
    has_empty_slot?: bool
    /**
     * **Default:** `0`
     *
     * Used to determine render order for sprites with the same `render_layer` in the same position. Sprites with a higher `secondary_draw_order` are drawn on top.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeaconModuleVisualization.html#secondary_draw_order Online documentation}
     */
    secondary_draw_order?: int8
    /**
     * **Default:** `"none"`
     *
     * Which tint set in {@link ModulePrototype#beacon_tint ModulePrototype::beacon_tint} should be applied to this, if any.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeaconModuleVisualization.html#apply_module_tint Online documentation}
     */
    apply_module_tint?: ModuleTint
    /**
     * **Default:** `"object"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeaconModuleVisualization.html#render_layer Online documentation}
     */
    render_layer?: RenderLayer
    pictures?: SpriteVariations
  }
  export interface BeaconModuleVisualizations {
    /**
     * The visualization is chosen based on the {@link ModulePrototype#art_style ModulePrototype::art_style}, meaning if module art style equals beacon module visualization art style then this visualization is chosen. Vanilla uses `"vanilla"` here.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeaconModuleVisualizations.html#art_style Online documentation}
     */
    art_style: string
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeaconModuleVisualizations.html#use_for_empty_slots Online documentation}
     */
    use_for_empty_slots?: bool
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeaconModuleVisualizations.html#tier_offset Online documentation}
     */
    tier_offset?: int32
    /**
     * The outer array contains the different slots, the inner array contains the different layers for those slots (with different tints etc). Example:
     * @example
     * slots =
     * {
     *   { --slot 1
     *     { --layer 1 of slot 1
     *       BeaconModuleVisualization data
     *     },
     *     { --layer 2 of slot 1
     *       BeaconModuleVisualization data
     *     }
     *   },
     *   { --slot 2
     *     { --layer 1 of slot 2
     *       BeaconModuleVisualization data
     *     },
     *     { --layer 2 of slot 2
     *       BeaconModuleVisualization data
     *     },
     *     { --layer 3 of slot 2
     *       BeaconModuleVisualization data
     *     }
     *   }
     * }
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeaconModuleVisualizations.html#slots Online documentation}
     */
    slots?: readonly (readonly BeaconModuleVisualization[])[]
  }
  /**
   * @see ModulePrototype.beacon_tint
   * @see {@link https://lua-api.factorio.com/2.0.16/prototypes/ModulePrototype.html#beacon_tint Online documentation}
   */
  export interface BeaconVisualizationTints {
    /**
     * **Default:** `no color`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeaconVisualizationTints.html#primary Online documentation}
     */
    primary?: Color
    /**
     * **Default:** `no color`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeaconVisualizationTints.html#secondary Online documentation}
     */
    secondary?: Color
    /**
     * **Default:** `no color`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeaconVisualizationTints.html#tertiary Online documentation}
     */
    tertiary?: Color
    /**
     * **Default:** `no color`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeaconVisualizationTints.html#quaternary Online documentation}
     */
    quaternary?: Color
  }
  export interface BeamAnimationSet {
    /**
     * Start point of the beam.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeamAnimationSet.html#start Online documentation}
     */
    start?: Animation
    /**
     * End point of the beam.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeamAnimationSet.html#ending Online documentation}
     */
    ending?: Animation
    /**
     * Head segment of the beam.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeamAnimationSet.html#head Online documentation}
     */
    head?: Animation
    /**
     * Tail segment of the beam.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeamAnimationSet.html#tail Online documentation}
     */
    tail?: Animation
    /**
     * Body segment of the beam.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeamAnimationSet.html#body Online documentation}
     */
    body?: AnimationVariations
    /**
     * **Default:** `"projectile"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeamAnimationSet.html#render_layer Online documentation}
     */
    render_layer?: RenderLayer
  }
  export interface BeamAttackParameters extends BaseAttackParameters {
    readonly type: "beam"
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeamAttackParameters.html#source_direction_count Online documentation}
     */
    source_direction_count?: uint32
    source_offset?: Vector
  }
  export interface BeamGraphicsSet {
    beam?: BeamAnimationSet
    ground?: BeamAnimationSet
    /**
     * **Default:** `1`
     *
     * Must be larger than 0.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeamGraphicsSet.html#desired_segment_length Online documentation}
     */
    desired_segment_length?: float
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeamGraphicsSet.html#random_end_animation_rotation Online documentation}
     */
    random_end_animation_rotation?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeamGraphicsSet.html#transparent_start_end_animations Online documentation}
     */
    transparent_start_end_animations?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeamGraphicsSet.html#randomize_animation_per_segment Online documentation}
     */
    randomize_animation_per_segment?: bool
  }
  export interface BeamTriggerDelivery extends TriggerDeliveryItem {
    readonly type: "beam"
    /**
     * Name of a {@link BeamPrototype}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeamTriggerDelivery.html#beam Online documentation}
     */
    beam: EntityID
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeamTriggerDelivery.html#add_to_shooter Online documentation}
     */
    add_to_shooter?: bool
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeamTriggerDelivery.html#max_length Online documentation}
     */
    max_length?: uint32
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeamTriggerDelivery.html#duration Online documentation}
     */
    duration?: uint32
    source_offset?: Vector
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeamTriggerDelivery.html#destroy_with_source_or_target Online documentation}
     */
    destroy_with_source_or_target?: bool
  }
  export interface BeltReaderLayer {
    /**
     * **Default:** `"transport-belt-reader"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeltReaderLayer.html#render_layer Online documentation}
     */
    render_layer?: RenderLayer
    /**
     * Must have a `frame_count` of `4`, one for each direction.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeltReaderLayer.html#sprites Online documentation}
     */
    sprites: RotatedAnimation
  }
  export interface BeltStackSizeBonusModifier extends SimpleModifier {
    readonly type: "belt-stack-size-bonus"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BeltStackSizeBonusModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface BeltTraverseTipTrigger extends CountBasedTipTrigger {
    readonly type: "belt-traverse"
  }
  /**
   * Determines how sprites/animations should blend with the background. The possible values are listed below.
   *
   * Note that in most of Factorio it is assumed colors are in alpha pre-multiplied format, see {@linkplain https://www.factorio.com/blog/post/fff-172 FFF #172 - Blending and Rendering}. Sprites get pre-multiplied when loaded, unless `premul_alpha` is set to `false` on the sprite/animation itself. Since generating mipmaps doesn't respect `premul_alpha`, lower mipmap levels will be in pre-multiplied format regardless.
   *
   * ## Union members
   * - `"normal"`: The result color is determined with the following formula: `Result = Active_RGB + Background_RGB * ( 1 - Active_Alpha )`. Note that this is alpha blending with an assumption that `Active_RGB` is already pre-multiplied with `Active_Alpha`.
   * - `"additive"`: The result color is determined with the following formula: `Result = Active_RGB + Background_RGB`
   * - `"additive-soft"`: The result color is determined with the following formula: `Result = Active_RGB * ( 1 - Background_RGB ) + Background_RGB`
   * - `"multiplicative"`: The result color is determined with the following formula: `Result = Active_RGB * Background_RGB`
   * - `"multiplicative-with-alpha"`: The result color is determined with the following formula: `Result = Active_RGB * Background_RGB * Active_Alpha + Background_RGB * ( 1 - Active_Alpha )`
   * - `"overwrite"`: The result color is determined with the following formula: `Result = Active_RGBA or Background_RGBA`
   * @see {@link https://lua-api.factorio.com/2.0.16/types/BlendMode.html Online documentation}
   */
  export type BlendMode =
    | "normal"
    | "additive"
    | "additive-soft"
    | "multiplicative"
    | "multiplicative-with-alpha"
    | "overwrite"
  /**
   * @see BoilerPrototype.pictures
   * @see {@link https://lua-api.factorio.com/2.0.16/prototypes/BoilerPrototype.html#pictures Online documentation}
   */
  export interface BoilerPictureSet {
    north: BoilerPictures
    east: BoilerPictures
    south: BoilerPictures
    west: BoilerPictures
  }
  export interface BoilerPictures {
    structure: Animation
    /**
     * Drawn above the `structure`, in the "higher-object-under" {@link RenderLayer}. May be useful to correct problems with neighboring pipes overlapping the structure graphics.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BoilerPictures.html#patch Online documentation}
     */
    patch?: Sprite
    /**
     * Animation that is drawn on top of the `structure` when `burning_cooldown` is larger than 1. The animation alpha can be controlled by the energy source light intensity, depending on `fire_flicker_enabled`.
     *
     * The secondary draw order of this is higher than the secondary draw order of `fire_glow`, so this is drawn above `fire_glow`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BoilerPictures.html#fire Online documentation}
     */
    fire?: Animation
    /**
     * Animation that is drawn on top of the `structure` when `burning_cooldown` is larger than 1. The animation alpha can be controlled by the energy source light intensity, depending on `fire_glow_flicker_enabled`.
     *
     * The secondary draw order of this is lower than the secondary draw order of `fire`, so this is drawn below `fire`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BoilerPictures.html#fire_glow Online documentation}
     */
    fire_glow?: Animation
  }
  /**
   * @see UtilityConstants.bonus_gui_ordering
   * @see {@link https://lua-api.factorio.com/2.0.16/prototypes/UtilityConstants.html#bonus_gui_ordering Online documentation}
   */
  export interface BonusGuiOrdering {
    artillery_range: Order
    worker_robots: Order
    character: Order
    follower_robots: Order
    research_speed: Order
    beacon_distribution: Order
    inserter: Order
    stack_inserter: Order
    bulk_inserter: Order
    turret_attack: Order
    mining_productivity: Order
    train_braking_force: Order
  }
  export interface BoolModifier extends BaseModifier {
    /**
     * The value this modifier will have upon researching.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BoolModifier.html#modifier Online documentation}
     */
    modifier: bool
  }
  export interface BorderImageSet {
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BorderImageSet.html#scale Online documentation}
     */
    scale?: double
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BorderImageSet.html#border_width Online documentation}
     */
    border_width?: int32
    vertical_line?: Sprite
    horizontal_line?: Sprite
    top_right_corner?: Sprite
    bottom_right_corner?: Sprite
    bottom_left_corner?: Sprite
    top_left_coner?: Sprite
    top_t?: Sprite
    right_t?: Sprite
    bottom_t?: Sprite
    left_t?: Sprite
    cross?: Sprite
    top_end?: Sprite
    right_end?: Sprite
    bottom_end?: Sprite
    left_end?: Sprite
  }
  /**
   * Struct type for {@link BoundingBox}
   * @see BoundingBox
   * @see {@link https://lua-api.factorio.com/2.0.16/types/BoundingBox.html Online documentation}
   */
  export interface BoundingBoxStruct {
    left_top: MapPosition
    right_bottom: MapPosition
    /**
     * Unused.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BoundingBox.html#orientation Online documentation}
     */
    orientation?: RealOrientation
  }
  /**
   * BoundingBoxes are typically centered around the position of an entity.
   *
   * BoundingBoxes are usually specified with the short-hand notation of passing an array of exactly 2 or 3 items.
   *
   * The first tuple item is left_top, the second tuple item is right_bottom. There is an unused third tuple item, a {@link float} that represents the orientation.
   *
   * Positive x goes towards east, positive y goes towards south. This means that the upper-left point is the least dimension in x and y, and lower-right is the greatest.
   * @example
   * {{-0.4, -0.4}, {0.4, 0.4}}
   * @example
   * -- long definition
   * {left_top = {x = -2, y = -3}, right_bottom = {x = 5, y = 8}}
   * @see {@link https://lua-api.factorio.com/2.0.16/types/BoundingBox.html Online documentation}
   */
  export type BoundingBox = BoundingBoxStruct | readonly [MapPosition, MapPosition]
  /**
   * A cursor box, for use in {@link UtilitySprites}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/BoxSpecification.html Online documentation}
   */
  export interface BoxSpecification {
    sprite: Sprite
    /**
     * **Default:** `false`
     *
     * Whether this is a complete box or just the top left corner. If this is true, `side_length` and `side_height` must be present. Otherwise `max_side_length` must be present.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BoxSpecification.html#is_whole_box Online documentation}
     */
    is_whole_box?: bool
    /**
     * Only loaded, and mandatory if `is_whole_box` is `true`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BoxSpecification.html#side_length Online documentation}
     */
    side_length?: double
    /**
     * Only loaded, and mandatory if `is_whole_box` is `true`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BoxSpecification.html#side_height Online documentation}
     */
    side_height?: double
    /**
     * Only loaded, and mandatory if `is_whole_box` is `false`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BoxSpecification.html#max_side_length Online documentation}
     */
    max_side_length?: double
  }
  export interface BuildEntityByRobotTipTrigger extends CountBasedTipTrigger {
    readonly type: "build-entity-by-robot"
  }
  export interface BuildEntityTechnologyTrigger {
    readonly type: "build-entity"
    entity: EntityIDFilter
  }
  export interface BuildEntityTipTrigger extends CountBasedTipTrigger {
    readonly type: "build-entity"
    entity?: EntityID
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BuildEntityTipTrigger.html#match_type_only Online documentation}
     */
    match_type_only?: bool
    build_by_dragging?: bool
    /**
     * **Default:** `false`
     *
     * Building is considered consecutive when the built entity is the same as the last built entity.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BuildEntityTipTrigger.html#consecutive Online documentation}
     */
    consecutive?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BuildEntityTipTrigger.html#linear_power_pole_line Online documentation}
     */
    linear_power_pole_line?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BuildEntityTipTrigger.html#build_in_line Online documentation}
     */
    build_in_line?: bool
    quality?: QualityID
  }
  /**
   * ## Union members
   * - `"normal"`
   * - `"forced"`
   * - `"superforced"`
   * @see {@link https://lua-api.factorio.com/2.0.16/types/BuildMode.html Online documentation}
   */
  export type BuildMode = "normal" | "forced" | "superforced"
  export interface BulkInserterCapacityBonusModifier extends SimpleModifier {
    readonly type: "bulk-inserter-capacity-bonus"
    /**
     * **Default:** `false`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BulkInserterCapacityBonusModifier.html#infer_icon Online documentation}
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BulkInserterCapacityBonusModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface BurnerEnergySource extends BaseEnergySource {
    readonly type: "burner"
    fuel_inventory_size: ItemStackIndex
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BurnerEnergySource.html#burnt_inventory_size Online documentation}
     */
    burnt_inventory_size?: ItemStackIndex
    smoke?: readonly SmokeSource[]
    light_flicker?: LightFlickeringDefinition
    /**
     * **Default:** `1`
     *
     * `1` means 100% effectivity. Must be greater than `0`. Multiplier of the energy output.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BurnerEnergySource.html#effectivity Online documentation}
     */
    effectivity?: double
    /**
     * **Default:** `"fuel"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BurnerEnergySource.html#burner_usage Online documentation}
     */
    burner_usage?: BurnerUsageID
    /**
     * **Default:** ``{"chemical"}``
     *
     * The energy source can be used with fuel from these {@link FuelCategory fuel categories}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/BurnerEnergySource.html#fuel_categories Online documentation}
     */
    fuel_categories?: readonly FuelCategoryID[]
  }
  /**
   * The name of a {@link BurnerUsagePrototype}.
   * @example
   * "fuel"
   * @example
   * "food"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/BurnerUsageID.html Online documentation}
   */
  export type BurnerUsageID = string
  export interface ButtonStyleSpecification extends StyleWithClickableGraphicalSetSpecification {
    readonly type: "button_style"
    /**
     * Name of a {@link FontPrototype}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ButtonStyleSpecification.html#font Online documentation}
     */
    font?: string
    default_font_color?: Color
    hovered_font_color?: Color
    clicked_font_color?: Color
    disabled_font_color?: Color
    selected_font_color?: Color
    selected_hovered_font_color?: Color
    selected_clicked_font_color?: Color
    strikethrough_color?: Color
    pie_progress_color?: Color
    clicked_vertical_offset?: uint32
    draw_shadow_under_picture?: bool
    draw_grayscale_picture?: bool
    invert_colors_of_picture_when_hovered_or_toggled?: bool
    invert_colors_of_picture_when_disabled?: bool
    icon_horizontal_align?: HorizontalAlign
  }
  export interface CameraEffectTriggerEffectItem extends TriggerEffectItem {
    readonly type: "camera-effect"
    duration: uint8
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CameraEffectTriggerEffectItem.html#ease_in_duration Online documentation}
     */
    ease_in_duration?: uint8
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CameraEffectTriggerEffectItem.html#ease_out_duration Online documentation}
     */
    ease_out_duration?: uint8
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CameraEffectTriggerEffectItem.html#delay Online documentation}
     */
    delay?: uint8
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CameraEffectTriggerEffectItem.html#full_strength_max_distance Online documentation}
     */
    full_strength_max_distance?: uint16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CameraEffectTriggerEffectItem.html#max_distance Online documentation}
     */
    max_distance?: uint16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CameraEffectTriggerEffectItem.html#strength Online documentation}
     */
    strength?: float
  }
  export interface CameraStyleSpecification extends Omit<EmptyWidgetStyleSpecification, "type"> {
    readonly type: "camera_style"
  }
  /**
   * Loaded as one of the capsule actions, based on the value of the `type` key.
   *
   * ## Union members
   * - {@link ThrowCapsuleAction}: Loaded when the `type` is `"throw"`.
   * - {@link ActivateEquipmentCapsuleAction}: Loaded when the `type` is `"equipment-remote"`.
   * - {@link UseOnSelfCapsuleAction}: Loaded when the `type` is `"use-on-self"`.
   * - {@link DestroyCliffsCapsuleAction}: Loaded when the `type` is `"destroy-cliffs"`.
   * - {@link ArtilleryRemoteCapsuleAction}: Loaded when the `type` is `"artillery-remote"`.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/CapsuleAction.html Online documentation}
   */
  export type CapsuleAction =
    | ThrowCapsuleAction
    | ActivateEquipmentCapsuleAction
    | UseOnSelfCapsuleAction
    | DestroyCliffsCapsuleAction
    | ArtilleryRemoteCapsuleAction
  export interface CaptureSpawnerTechnologyTrigger {
    readonly type: "capture-spawner"
    entity?: EntityID
  }
  export interface CargoBayConnectableGraphicsSet {
    picture?: LayeredSprite
    animation?: Animation
    /**
     * **Default:** `object`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CargoBayConnectableGraphicsSet.html#animation_render_layer Online documentation}
     */
    animation_render_layer?: RenderLayer
    connections?: CargoBayConnections
  }
  /**
   * Walls should have an even number of variations because they are interleaved.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/CargoBayConnections.html Online documentation}
   */
  export interface CargoBayConnections {
    top_wall?: LayeredSpriteVariations
    right_wall?: LayeredSpriteVariations
    bottom_wall?: LayeredSpriteVariations
    left_wall?: LayeredSpriteVariations
    top_left_outer_corner?: LayeredSpriteVariations
    top_right_outer_corner?: LayeredSpriteVariations
    bottom_left_outer_corner?: LayeredSpriteVariations
    bottom_right_outer_corner?: LayeredSpriteVariations
    top_left_inner_corner?: LayeredSpriteVariations
    top_right_inner_corner?: LayeredSpriteVariations
    bottom_left_inner_corner?: LayeredSpriteVariations
    bottom_right_inner_corner?: LayeredSpriteVariations
    bridge_horizontal_narrow?: LayeredSpriteVariations
    bridge_horizontal_wide?: LayeredSpriteVariations
    bridge_vertical_narrow?: LayeredSpriteVariations
    bridge_vertical_wide?: LayeredSpriteVariations
    bridge_crossing?: LayeredSpriteVariations
  }
  export interface CargoHatchDefinition {
    hatch_graphics?: Animation
    /**
     * **Default:** `"cargo-hatch"`
     *
     * render layer for the hatch itself.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CargoHatchDefinition.html#hatch_render_layer Online documentation}
     */
    hatch_render_layer?: RenderLayer
    /**
     * **Default:** `"cargo-hatch"`
     *
     * render layer for objects entering the hatch.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CargoHatchDefinition.html#entering_render_layer Online documentation}
     */
    entering_render_layer?: RenderLayer
    /**
     * **Default:** ``{0, 0}``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CargoHatchDefinition.html#offset Online documentation}
     */
    offset?: Vector
    /**
     * **Default:** ``{0, 0}``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CargoHatchDefinition.html#pod_shadow_offset Online documentation}
     */
    pod_shadow_offset?: Vector
    /**
     * **Default:** `-1`
     *
     * y height relative to hatch position where the pod art gets clipped from sky to regular sorting layer.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CargoHatchDefinition.html#sky_slice_height Online documentation}
     */
    sky_slice_height?: float
    /**
     * **Default:** `1`
     *
     * y height relative to hatch position where the pod art gets cut off.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CargoHatchDefinition.html#slice_height Online documentation}
     */
    slice_height?: float
    /**
     * **Default:** `1`
     *
     * y height relative to hatch position where the pod travels to during preparing and parking.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CargoHatchDefinition.html#travel_height Online documentation}
     */
    travel_height?: float
    /**
     * **Default:** `120`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CargoHatchDefinition.html#busy_timeout_ticks Online documentation}
     */
    busy_timeout_ticks?: uint32
    /**
     * **Default:** `80`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CargoHatchDefinition.html#hatch_opening_ticks Online documentation}
     */
    hatch_opening_ticks?: uint32
    /**
     * Cannot use `fade_ticks`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CargoHatchDefinition.html#opening_sound Online documentation}
     */
    opening_sound?: InterruptibleSound
    /**
     * Cannot use `fade_ticks`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CargoHatchDefinition.html#closing_sound Online documentation}
     */
    closing_sound?: InterruptibleSound
    cargo_unit_entity_to_spawn?: EntityID
    /**
     * **Default:** `-1`
     *
     * {@link ProcessionGraphic} index pointing to the {@link ProcessionGraphicCatalogue} inside the current {@link SpaceLocationPrototype}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CargoHatchDefinition.html#illumination_graphic_index Online documentation}
     */
    illumination_graphic_index?: uint32
    receiving_cargo_units?: readonly EntityID[]
  }
  export interface CargoLandingPadLimitModifier extends SimpleModifier {
    readonly type: "cargo-landing-pad-count"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CargoLandingPadLimitModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  /**
   * A cargo station is any entity that has the capacity to send cargo units. In Space Age those are {@link RocketSiloPrototype}, {@link SpacePlatformHubPrototype} and {@link CargoLandingPadPrototype}. {@link CargoBayPrototype Cargo bays} may provide additional cargo hatches to cargo stations which are cargo bay connectable.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/CargoStationParameters.html Online documentation}
   */
  export interface CargoStationParameters {
    /**
     * **Default:** `false`
     *
     * Packed cargo units will wait for the full order to be completed. This is useful to save rockets in rocket silos when items trickle in slowly. The platform hub has immediate access to items so false is better to allow partial fulfillments.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CargoStationParameters.html#prefer_packed_cargo_units Online documentation}
     */
    prefer_packed_cargo_units?: bool
    hatch_definitions?: readonly CargoHatchDefinition[]
    /**
     * Big additional hatch that goes over the actual hatches.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CargoStationParameters.html#giga_hatch_definitions Online documentation}
     */
    giga_hatch_definitions?: readonly GigaCargoHatchDefinition[]
  }
  export interface ChainTriggerDelivery extends TriggerDeliveryItem {
    readonly type: "chain"
    chain: ActiveTriggerID
  }
  export interface ChangeRecipeProductivityModifier extends BaseModifier {
    readonly type: "change-recipe-productivity"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ChangeRecipeProductivityModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
    recipe: RecipeID
    change: EffectValue
  }
  export interface ChangeSurfaceTipTrigger extends CountBasedTipTrigger {
    readonly type: "change-surface"
    surface: string
  }
  /**
   * The data for one variation of {@link CharacterPrototype#animations character animations}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/CharacterArmorAnimation.html Online documentation}
   */
  export interface CharacterArmorAnimation {
    idle?: RotatedAnimation
    idle_with_gun: RotatedAnimation
    running?: RotatedAnimation
    /**
     * Must contain exactly 18 or 40 directions, so all of the combination of gun direction and moving direction can be covered. Some of these variations are used in reverse to save space. You can use the character animation in the base game for reference.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CharacterArmorAnimation.html#running_with_gun Online documentation}
     */
    running_with_gun: RotatedAnimation
    mining_with_tool: RotatedAnimation
    /**
     * flipped_shadow_running_with_gun must be nil or contain exactly 18 directions, so all of the combination of gun direction and moving direction can be covered. Some of these variations are used in reverse to save space. You can use the character animation in the base game for reference. `flipped_shadow_running_with_gun` has to have same frame count as `running_with_gun`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CharacterArmorAnimation.html#flipped_shadow_running_with_gun Online documentation}
     */
    flipped_shadow_running_with_gun?: RotatedAnimation
    idle_in_air?: RotatedAnimation
    idle_with_gun_in_air?: RotatedAnimation
    flying?: RotatedAnimation
    /**
     * Must contain exactly 18 or 40 directions, so all of the combination of gun direction and moving direction can be covered. Some of these variations are used in reverse to save space. You can use the character animation in the base game for reference.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CharacterArmorAnimation.html#flying_with_gun Online documentation}
     */
    flying_with_gun?: RotatedAnimation
    take_off?: RotatedAnimation
    landing?: RotatedAnimation
    /**
     * The names of the armors this animation data is used for. Don't define this if you want the animations to be used for the player without armor.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CharacterArmorAnimation.html#armors Online documentation}
     */
    armors?: readonly ItemID[]
    /**
     * Smoke generator for when in air.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CharacterArmorAnimation.html#smoke_in_air Online documentation}
     */
    smoke_in_air?: readonly SmokeSource[]
    /**
     * **Default:** `1`
     *
     * Will be clamped to range {@link SmokeSource 0, 1000]. When the character is flying, each [SmokeSource} in `smoke_in_air` will generate `smoke_cycles_per_tick` * {@link SmokeSource#frequency SmokeSource::frequency} smokes per tick on average.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CharacterArmorAnimation.html#smoke_cycles_per_tick Online documentation}
     */
    smoke_cycles_per_tick?: float
    /**
     * **Default:** `0`
     *
     * Will be clamped to range {@link SmokeSource 0, 1000]. When the character is flying, each [SmokeSource} in `smoke_in_air` will generate `extra_smoke_cycles_per_tile` * {@link SmokeSource#frequency SmokeSource::frequency} additional smokes per tile moved.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CharacterArmorAnimation.html#extra_smoke_cycles_per_tile Online documentation}
     */
    extra_smoke_cycles_per_tile?: float
  }
  export interface CharacterBuildDistanceModifier extends SimpleModifier {
    readonly type: "character-build-distance"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CharacterBuildDistanceModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterCraftingSpeedModifier extends SimpleModifier {
    readonly type: "character-crafting-speed"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CharacterCraftingSpeedModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterHealthBonusModifier extends SimpleModifier {
    readonly type: "character-health-bonus"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CharacterHealthBonusModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterInventorySlotsBonusModifier extends SimpleModifier {
    readonly type: "character-inventory-slots-bonus"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CharacterInventorySlotsBonusModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterItemDropDistanceModifier extends SimpleModifier {
    readonly type: "character-item-drop-distance"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CharacterItemDropDistanceModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterItemPickupDistanceModifier extends SimpleModifier {
    readonly type: "character-item-pickup-distance"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CharacterItemPickupDistanceModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterLogisticRequestsModifier extends BoolModifier {
    readonly type: "character-logistic-requests"
    /**
     * **Default:** `false`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CharacterLogisticRequestsModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterLogisticTrashSlotsModifier extends SimpleModifier {
    readonly type: "character-logistic-trash-slots"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CharacterLogisticTrashSlotsModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterLootPickupDistanceModifier extends SimpleModifier {
    readonly type: "character-loot-pickup-distance"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CharacterLootPickupDistanceModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterMiningSpeedModifier extends SimpleModifier {
    readonly type: "character-mining-speed"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CharacterMiningSpeedModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterReachDistanceModifier extends SimpleModifier {
    readonly type: "character-reach-distance"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CharacterReachDistanceModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterResourceReachDistanceModifier extends SimpleModifier {
    readonly type: "character-resource-reach-distance"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CharacterResourceReachDistanceModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterRunningSpeedModifier extends SimpleModifier {
    readonly type: "character-running-speed"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CharacterRunningSpeedModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface ChargableGraphics {
    picture?: Sprite
    charge_animation?: Animation
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ChargableGraphics.html#charge_animation_is_looped Online documentation}
     */
    charge_animation_is_looped?: bool
    charge_light?: LightDefinition
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ChargableGraphics.html#charge_cooldown Online documentation}
     */
    charge_cooldown?: uint16
    discharge_animation?: Animation
    discharge_light?: LightDefinition
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ChargableGraphics.html#discharge_cooldown Online documentation}
     */
    discharge_cooldown?: uint16
  }
  export interface ChartUtilityConstants {
    copper_wire_color: Color
    electric_power_pole_color: Color
    enabled_switch_color: Color
    disabled_switch_color: Color
    electric_line_width: float
    electric_line_minimum_absolute_width: float
    red_wire_color: Color
    green_wire_color: Color
    circuit_network_member_color: Color
    turret_range_color: Color
    artillery_range_color: Color
    default_friendly_color: Color
    default_enemy_color: Color
    default_enemy_territory_color: Color
    rail_color: Color
    elevated_rail_color: Color
    rail_ramp_color: Color
    entity_ghost_color: Color
    tile_ghost_color: Color
    vehicle_outer_color: Color
    vehicle_outer_color_selected: Color
    vehicle_inner_color: Color
    vehicle_wagon_connection_color: Color
    resource_outline_selection_color: Color
    chart_train_stop_text_color: Color
    chart_train_stop_disabled_text_color: Color
    chart_train_stop_full_text_color: Color
    red_signal_color: Color
    green_signal_color: Color
    blue_signal_color: Color
    yellow_signal_color: Color
    chart_deconstruct_tint: Color
    chart_deconstruct_active_color: Color
    chart_player_circle_size: float
    /**
     * The strings are entity types.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ChartUtilityConstants.html#default_friendly_color_by_type Online documentation}
     */
    default_friendly_color_by_type?: Record<string, Color>
    /**
     * The strings are entity types.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ChartUtilityConstants.html#default_color_by_type Online documentation}
     */
    default_color_by_type?: Record<string, Color>
    explosion_visualization_duration: uint32
    train_path_color: Color
    train_preview_path_outline_color: Color
    train_current_path_outline_color: Color
    chart_logistic_robot_color: Color
    chart_construction_robot_color: Color
    chart_mobile_construction_robot_color: Color
    chart_personal_construction_robot_color: Color
    chart_delivery_to_me_logistic_robot_color: Color
    zoom_threshold_to_draw_spider_path: double
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ChartUtilityConstants.html#custom_tag_scale Online documentation}
     */
    custom_tag_scale?: float
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ChartUtilityConstants.html#custom_tag_max_scale Online documentation}
     */
    custom_tag_max_scale?: float
    custom_tag_selected_overlay_tint?: Color
  }
  export interface CheckBoxStyleSpecification extends StyleWithClickableGraphicalSetSpecification {
    readonly type: "checkbox_style"
    /**
     * Name of a {@link FontPrototype}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CheckBoxStyleSpecification.html#font Online documentation}
     */
    font?: string
    font_color?: Color
    disabled_font_color?: Color
    checkmark?: Sprite
    disabled_checkmark?: Sprite
    intermediate_mark?: Sprite
    text_padding?: uint32
  }
  /**
   * Definition of a circuit connector.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/CircuitConnectorDefinition.html Online documentation}
   */
  export interface CircuitConnectorDefinition {
    /**
     * The pictures displayed for circuit connector.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CircuitConnectorDefinition.html#sprites Online documentation}
     */
    sprites?: CircuitConnectorSprites
    /**
     * Defines how wires visually connect to this circuit connector.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CircuitConnectorDefinition.html#points Online documentation}
     */
    points?: WireConnectionPoint
  }
  export interface CircuitConnectorLayer {
    /**
     * **Default:** `"object"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CircuitConnectorLayer.html#north Online documentation}
     */
    north?: RenderLayer
    /**
     * **Default:** `"object"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CircuitConnectorLayer.html#east Online documentation}
     */
    east?: RenderLayer
    /**
     * **Default:** `"object"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CircuitConnectorLayer.html#south Online documentation}
     */
    south?: RenderLayer
    /**
     * **Default:** `"object"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CircuitConnectorLayer.html#west Online documentation}
     */
    west?: RenderLayer
  }
  export interface CircuitConnectorSecondaryDrawOrder {
    /**
     * **Default:** `100`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CircuitConnectorSecondaryDrawOrder.html#north Online documentation}
     */
    north?: int8
    /**
     * **Default:** `100`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CircuitConnectorSecondaryDrawOrder.html#east Online documentation}
     */
    east?: int8
    /**
     * **Default:** `100`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CircuitConnectorSecondaryDrawOrder.html#south Online documentation}
     */
    south?: int8
    /**
     * **Default:** `100`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CircuitConnectorSecondaryDrawOrder.html#west Online documentation}
     */
    west?: int8
  }
  export interface CircuitConnectorSprites {
    led_red: Sprite
    led_green: Sprite
    led_blue: Sprite
    led_light: LightDefinition
    /**
     * Drawn when the entity is connected to a circuit network or a logistic network.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CircuitConnectorSprites.html#connector_main Online documentation}
     */
    connector_main?: Sprite
    /**
     * Drawn when the entity is connected to a circuit network or a logistic network.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CircuitConnectorSprites.html#connector_shadow Online documentation}
     */
    connector_shadow?: Sprite
    /**
     * Drawn when the entity is connected to a circuit network.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CircuitConnectorSprites.html#wire_pins Online documentation}
     */
    wire_pins?: Sprite
    /**
     * Drawn when the entity is connected to a circuit network.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CircuitConnectorSprites.html#wire_pins_shadow Online documentation}
     */
    wire_pins_shadow?: Sprite
    led_blue_off?: Sprite
    blue_led_light_offset?: Vector
    red_green_led_light_offset?: Vector
  }
  export interface CircuitNetworkModifier extends BoolModifier {
    readonly type: "unlock-circuit-network"
    /**
     * **Default:** `false`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CircuitNetworkModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface CircularParticleCreationSpecification {
    name: ParticleID
    starting_frame_speed: float
    /**
     * **Default:** `0.25`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CircularParticleCreationSpecification.html#direction Online documentation}
     */
    direction?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CircularParticleCreationSpecification.html#direction_deviation Online documentation}
     */
    direction_deviation?: float
    /**
     * **Default:** `0.1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CircularParticleCreationSpecification.html#speed Online documentation}
     */
    speed?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CircularParticleCreationSpecification.html#speed_deviation Online documentation}
     */
    speed_deviation?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CircularParticleCreationSpecification.html#starting_frame_speed_deviation Online documentation}
     */
    starting_frame_speed_deviation?: float
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CircularParticleCreationSpecification.html#height Online documentation}
     */
    height?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CircularParticleCreationSpecification.html#height_deviation Online documentation}
     */
    height_deviation?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CircularParticleCreationSpecification.html#vertical_speed Online documentation}
     */
    vertical_speed?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CircularParticleCreationSpecification.html#vertical_speed_deviation Online documentation}
     */
    vertical_speed_deviation?: float
    /**
     * **Default:** `"`{0, 0}`"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CircularParticleCreationSpecification.html#center Online documentation}
     */
    center?: Vector
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CircularParticleCreationSpecification.html#creation_distance Online documentation}
     */
    creation_distance?: double
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CircularParticleCreationSpecification.html#creation_distance_orientation Online documentation}
     */
    creation_distance_orientation?: double
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CircularParticleCreationSpecification.html#use_source_position Online documentation}
     */
    use_source_position?: bool
  }
  export type CircularProjectileCreationSpecification = readonly (readonly [RealOrientation, Vector])[]
  export interface ClearCursorTipTrigger extends CountBasedTipTrigger {
    readonly type: "clear-cursor"
  }
  export interface CliffDeconstructionEnabledModifier extends BoolModifier {
    readonly type: "cliff-deconstruction-enabled"
    /**
     * **Default:** `false`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CliffDeconstructionEnabledModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface CliffPlacementSettings {
    /**
     * Name of the {@link CliffPrototype}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CliffPlacementSettings.html#name Online documentation}
     */
    name?: EntityID
    /**
     * Name of the {@link AutoplaceControl}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CliffPlacementSettings.html#control Online documentation}
     */
    control?: AutoplaceControlID
    /**
     * **Default:** `10`
     *
     * Elevation at which the first row of cliffs is placed. Can not be set from the map generation GUI.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CliffPlacementSettings.html#cliff_elevation_0 Online documentation}
     */
    cliff_elevation_0?: float
    /**
     * **Default:** `40`
     *
     * Elevation difference between successive rows of cliffs. This is inversely proportional to 'frequency' in the map generation GUI. Specifically, when set from the GUI the value is `40 / frequency`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CliffPlacementSettings.html#cliff_elevation_interval Online documentation}
     */
    cliff_elevation_interval?: float
    /**
     * **Default:** `1`
     *
     * Smoothing makes cliffs straighter on rough elevation but makes placement inaccurate. 0 is no smoothing, 1 is full smoothing. Values outside of 0-1 are possible for specific effects but not recommended.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CliffPlacementSettings.html#cliff_smoothing Online documentation}
     */
    cliff_smoothing?: float
    /**
     * Corresponds to 'continuity' in the GUI. This value is not used directly, but is used by the 'cliffiness' noise expression, which in combination with elevation and the two cliff elevation properties drives cliff placement (cliffs are placed when elevation crosses the elevation contours defined by `cliff_elevation_0` and `cliff_elevation_interval` when 'cliffiness' is greater than `0.5`). The default 'cliffiness' expression interprets this value such that larger values result in longer unbroken walls of cliffs, and smaller values (between `0` and `1`) result in larger gaps in cliff walls.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CliffPlacementSettings.html#richness Online documentation}
     */
    richness?: float
  }
  /**
   * Additional mask which dictates where in the world certain {@link ProcessionLayer ProcessionLayers} are drawn. Origin determined by {@link EffectRelativeTo}.
   *
   * ## Union members
   * - `"none"`: No mask.
   * - `"euclidean"`: Only show within a circular radius around origin.
   * - `"manhattan"`: Only show within a square area around origin.
   * - `"euclidean-outside"`: Only show outside a circular radius around origin.
   * - `"manhattan-outside"`: Only show outside a square area around origin.
   * - `"horizontal-stripe"`: Manhattan, but only along y axis. Useful when you want a layer to occlude screen regardless of width.
   * - `"texture"`: Only show area covered by the 'effect_mask' texture.
   * - `"texture-outside"`: Show area covered by the 'effect_mask' texture and fill the rest of the screen.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/CloudEffectStyle.html Online documentation}
   */
  export type CloudEffectStyle =
    | "none"
    | "euclidean"
    | "manhattan"
    | "euclidean-outside"
    | "manhattan-outside"
    | "horizontal-stripe"
    | "texture"
    | "texture-outside"
  export interface CloudsEffectProperties {
    shape_noise_texture: EffectTexture
    detail_noise_texture: EffectTexture
    warp_sample_1: CloudsTextureCoordinateTransformation
    warp_sample_2: CloudsTextureCoordinateTransformation
    warped_shape_sample: CloudsTextureCoordinateTransformation
    additional_density_sample: CloudsTextureCoordinateTransformation
    detail_sample_1: CloudsTextureCoordinateTransformation
    detail_sample_2: CloudsTextureCoordinateTransformation
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CloudsEffectProperties.html#scale Online documentation}
     */
    scale?: float
    /**
     * **Default:** `0.75`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CloudsEffectProperties.html#movement_speed_multiplier Online documentation}
     */
    movement_speed_multiplier?: float
    /**
     * **Default:** `0.06`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CloudsEffectProperties.html#shape_warp_strength Online documentation}
     */
    shape_warp_strength?: float
    /**
     * **Default:** `0.4`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CloudsEffectProperties.html#shape_warp_weight Online documentation}
     */
    shape_warp_weight?: float
    /**
     * **Default:** `0.25`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CloudsEffectProperties.html#opacity Online documentation}
     */
    opacity?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CloudsEffectProperties.html#opacity_at_night Online documentation}
     */
    opacity_at_night?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CloudsEffectProperties.html#density Online documentation}
     */
    density?: float
    /**
     * **Default:** `Value of `density``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CloudsEffectProperties.html#density_at_night Online documentation}
     */
    density_at_night?: float
    /**
     * **Default:** `1.5`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CloudsEffectProperties.html#detail_factor Online documentation}
     */
    detail_factor?: float
    /**
     * **Default:** `Value of `detail_factor``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CloudsEffectProperties.html#detail_factor_at_night Online documentation}
     */
    detail_factor_at_night?: float
    /**
     * **Default:** `-1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CloudsEffectProperties.html#shape_factor Online documentation}
     */
    shape_factor?: float
    /**
     * **Default:** `0.1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CloudsEffectProperties.html#detail_exponent Online documentation}
     */
    detail_exponent?: float
    /**
     * **Default:** `256`
     *
     * When set to 0, detail textures are not being "morphed" to each other, but lerped with ratio 0.5 instead.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CloudsEffectProperties.html#detail_sample_morph_duration Online documentation}
     */
    detail_sample_morph_duration?: uint32
  }
  export interface CloudsTextureCoordinateTransformation {
    scale: float
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CloudsTextureCoordinateTransformation.html#wind_speed_factor Online documentation}
     */
    wind_speed_factor?: float
  }
  export interface ClusterTriggerItem extends TriggerItem {
    readonly type: "cluster"
    /**
     * Must be at least `2`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ClusterTriggerItem.html#cluster_count Online documentation}
     */
    cluster_count: uint32
    distance: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ClusterTriggerItem.html#distance_deviation Online documentation}
     */
    distance_deviation?: float
  }
  /**
   * The name of a {@link CollisionLayerPrototype}.
   * @example
   * "meltable"
   * @example
   * "floor"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/CollisionLayerID.html Online documentation}
   */
  export type CollisionLayerID = string
  /**
   * The base game provides common collision mask functions in a Lua file in the core {@linkplain https://github.com/wube/factorio-data/blob/master/core/lualib/collision-mask-util.lua lualib}.
   * @example
   * -- Most common collision mask of buildings:
   * collision_mask = {layers = {item = true, meltable = true, object = true, player = true, water_tile = true, is_object = true, is_lower_object = true}}
   * @see {@link https://lua-api.factorio.com/2.0.16/types/CollisionMaskConnector.html Online documentation}
   */
  export interface CollisionMaskConnector {
    /**
     * Every key in the dictionary is the name of one {@link CollisionLayerPrototype layer} the object collides with. The value is meaningless and always `true`. An empty table means that no layers are set.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CollisionMaskConnector.html#layers Online documentation}
     */
    layers: Record<CollisionLayerID, true>
    /**
     * **Default:** `false`
     *
     * Any two entities that both have this option enabled on their prototype and have an identical collision mask layers list will not collide. Other collision mask options are not included in the identical layer list check. This does mean that two different prototypes with the same collision mask layers and this option enabled will not collide.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CollisionMaskConnector.html#not_colliding_with_itself Online documentation}
     */
    not_colliding_with_itself?: bool
    /**
     * **Default:** `false`
     *
     * Uses the prototypes position rather than its collision box when doing collision checks with tile prototypes. Allows the prototype to overlap colliding tiles up until its center point. This is only respected for character movement and cars driven by players.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CollisionMaskConnector.html#consider_tile_transitions Online documentation}
     */
    consider_tile_transitions?: bool
    /**
     * **Default:** `false`
     *
     * Any prototype with this collision option will only be checked for collision with other prototype's collision masks if they are a tile.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CollisionMaskConnector.html#colliding_with_tiles_only Online documentation}
     */
    colliding_with_tiles_only?: bool
  }
  /**
   * Struct type for {@link Color}
   * @see Color
   * @see {@link https://lua-api.factorio.com/2.0.16/types/Color.html Online documentation}
   */
  export interface ColorStruct {
    /**
     * **Default:** `0`
     *
     * red value
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Color.html#r Online documentation}
     */
    r?: float
    /**
     * **Default:** `0`
     *
     * green value
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Color.html#g Online documentation}
     */
    g?: float
    /**
     * **Default:** `0`
     *
     * blue value
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Color.html#b Online documentation}
     */
    b?: float
    /**
     * **Default:** `1`
     *
     * alpha value (opacity)
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Color.html#a Online documentation}
     */
    a?: float
  }
  /**
   * Table of red, green, blue, and alpha float values between 0 and 1. Alternatively, values can be from 0-255, they are interpreted as such if at least one value is `> 1`.
   *
   * Color allows the short-hand notation of passing an array of exactly 3 or 4 numbers. The array items are r, g, b and optionally a, in that order.
   *
   * The game usually expects colors to be in pre-multiplied form (color channels are pre-multiplied by alpha).
   * @example
   * color = {r=1, g=0, b=0, a=1} -- red, full opacity
   * color = {r=1} -- the same red, omitting default values
   * color = {1, 0, 0, 1} -- also the same red
   * color = {0, 0, 1} -- blue
   * color = {r=0, g=0.5, b=0, a=0.5} -- half transparency green
   * color = {} -- full opacity black
   * @see {@link https://lua-api.factorio.com/2.0.16/types/Color.html Online documentation}
   */
  export type Color = ColorStruct | readonly [float, float, float] | readonly [float, float, float, float]
  /**
   * @see UtilityConstants.color_filters
   * @see {@link https://lua-api.factorio.com/2.0.16/prototypes/UtilityConstants.html#color_filters Online documentation}
   */
  export interface ColorFilterData {
    name: string
    localised_name: LocalisedString
    /**
     * 4 arrays of 4-length float arrays, essentially a 4x4 matrix.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ColorFilterData.html#matrix Online documentation}
     */
    matrix: readonly (readonly float[])[]
  }
  export interface ColorHintSpecification {
    /**
     * **Default:** `""`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ColorHintSpecification.html#text Online documentation}
     */
    text?: string
    text_color?: Color
  }
  /**
   * A lookup table (LUT) for the color which maps the original color to a position in the sprite where the replacement color is found. The file pointed to by the filename must be a sprite of size 256×16.
   * @example
   * "identity"
   * @example
   * "__core__/graphics/color_luts/frozen.png"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ColorLookupTable.html Online documentation}
   */
  export type ColorLookupTable = FileName | "identity"
  export interface ColumnAlignment {
    /**
     * Column index.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ColumnAlignment.html#column Online documentation}
     */
    column: uint32
    /**
     * ## Union members
     * - `"center"`
     * - `"left"`
     * - `"right"`
     * - `"top-left"`
     * - `"middle-left"`
     * - `"bottom-left"`
     * - `"top-center"`
     * - `"middle-center"`
     * - `"bottom-center"`
     * - `"top-right"`
     * - `"middle-right"`
     * - `"bottom-right"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ColumnAlignment.html#alignment Online documentation}
     */
    alignment:
      | "center"
      | "left"
      | "right"
      | "top-left"
      | "middle-left"
      | "bottom-left"
      | "top-center"
      | "middle-center"
      | "bottom-center"
      | "top-right"
      | "middle-right"
      | "bottom-right"
  }
  export interface ColumnWidth extends ColumnWidthItem {
    /**
     * Column index.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ColumnWidth.html#column Online documentation}
     */
    column: uint32
  }
  export interface ColumnWidthItem {
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ColumnWidthItem.html#minimal_width Online documentation}
     */
    minimal_width?: int32
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ColumnWidthItem.html#maximal_width Online documentation}
     */
    maximal_width?: int32
    /**
     * **Default:** `0`
     *
     * Sets `minimal_width` and `maximal_width` to the same value.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ColumnWidthItem.html#width Online documentation}
     */
    width?: int32
  }
  /**
   * A string that specifies how the inputs should be compared.
   *
   * ## Union members
   * - `"="`: "equal to"
   * - `">"`: "greater than"
   * - `"<"`: "lesser than"
   * - `"≥"`: "greater than or equal to"
   * - `">="`: "greater than or equal to"
   * - `"≤"`: "lesser than or equal to"
   * - `"<="`: "lesser than or equal to"
   * - `"≠"`: "not equal to"
   * - `"!="`: "not equal to"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ComparatorString.html Online documentation}
   */
  export type ComparatorString = "=" | ">" | "<" | "≥" | ">=" | "≤" | "<=" | "≠" | "!="
  /**
   * Graphics for the heat pipe.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ConnectableEntityGraphics.html Online documentation}
   */
  export interface ConnectableEntityGraphics {
    single: SpriteVariations
    straight_vertical: SpriteVariations
    straight_horizontal: SpriteVariations
    corner_right_down: SpriteVariations
    corner_left_down: SpriteVariations
    corner_right_up: SpriteVariations
    corner_left_up: SpriteVariations
    t_up: SpriteVariations
    t_right: SpriteVariations
    t_down: SpriteVariations
    t_left: SpriteVariations
    ending_up: SpriteVariations
    ending_right: SpriteVariations
    ending_down: SpriteVariations
    ending_left: SpriteVariations
    cross: SpriteVariations
  }
  /**
   * Defines which other inputs a {@link CustomInputPrototype} consumes.
   *
   * ## Union members
   * - `"none"`: The associated script event will fire when satisfied and pass through to normal game events.
   * - `"game-only"`: The associated script event will fire when satisfied and block game events that conflict with the key sequence. Actions that are processed regardless of game paused state cannot be blocked.
   * @example
   * consuming = "none"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ConsumingType.html Online documentation}
   */
  export type ConsumingType = "none" | "game-only"
  /**
   * Struct type for {@link ControlPoint}
   * @see ControlPoint
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ControlPoint.html Online documentation}
   */
  export interface ControlPointStruct {
    control: float
    /**
     * Has to be in range (0.0, 100.0).
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ControlPoint.html#volume_percentage Online documentation}
     */
    volume_percentage: float
  }
  export type ControlPoint = ControlPointStruct | readonly [float, float]
  export interface CountBasedTipTrigger {
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CountBasedTipTrigger.html#count Online documentation}
     */
    count?: uint32
  }
  /**
   * Clips the CoverGraphicProcessionLayer.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicEffectData.html Online documentation}
   */
  export interface CoverGraphicEffectData {
    /**
     * **Default:** `"none"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicEffectData.html#style Online documentation}
     */
    style?: CloudEffectStyle
    /**
     * **Default:** `"pod"`
     *
     * Where the effect mask is centered.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicEffectData.html#relative_to Online documentation}
     */
    relative_to?: EffectRelativeTo
    /**
     * **Default:** `{0,0}`
     *
     * How much the pod's distance traveled moves the effect
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicEffectData.html#distance_traveled_strength Online documentation}
     */
    distance_traveled_strength?: Vector
    /**
     * **Default:** `{0,0}`
     *
     * How much the pod's position moves the effect
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicEffectData.html#pod_movement_strength Online documentation}
     */
    pod_movement_strength?: Vector
  }
  /**
   * Draws a layer of cloud texture covering the screen. It can fade in an out based on opacity and using the picture mask as gradient of areas which fade in soon or later.
   *
   * There are two important concepts to understand:
   *
   * - `mask` refers to something like a depth texture. It is applied across the whole screen and determines how the entire graphic fades in and out.
   *
   * - `effect` in this context refers to clipping out portion of the cover graphic. It can use an effect_graphic. `is_cloud_effect_advanced` makes the `effect` modify opacity threshold of the `mask` rather than multiplying alpha.
   *
   * Additionally an area can be masked out by range or effect mask.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayer.html Online documentation}
   */
  export interface CoverGraphicProcessionLayer {
    readonly type: "cover-graphic"
    /**
     * The group this layer belongs to, for inheritance.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayer.html#reference_group Online documentation}
     */
    reference_group?: ProcessionLayerInheritanceGroupID
    /**
     * Adds the final position value from given layer to this one.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayer.html#inherit_from Online documentation}
     */
    inherit_from?: ProcessionLayerInheritanceGroupID
    /**
     * Main texture of the layer.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayer.html#graphic Online documentation}
     */
    graphic?: ProcessionGraphic
    /**
     * Opacity gradient of the layer.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayer.html#mask_graphic Online documentation}
     */
    mask_graphic?: ProcessionGraphic
    /**
     * Used by certain effects.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayer.html#effect_graphic Online documentation}
     */
    effect_graphic?: ProcessionGraphic
    /**
     * **Default:** `"object"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayer.html#render_layer Online documentation}
     */
    render_layer?: RenderLayer
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayer.html#secondary_draw_order Online documentation}
     */
    secondary_draw_order?: int8
    /**
     * **Default:** `false`
     *
     * Advanced cloud effect mask modifies the regular mask thresholds instead of being a flat multiplication of the resulting opacity.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayer.html#is_cloud_effect_advanced Online documentation}
     */
    is_cloud_effect_advanced?: bool
    /**
     * **Default:** `false`
     *
     * The texture and mask are interpreted as four smaller textures that are randomly tiled.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayer.html#is_quad_texture Online documentation}
     */
    is_quad_texture?: bool
    /**
     * **Default:** `false`
     *
     * Add rotation of the pod to the cloud rotation.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayer.html#rotate_with_pod Online documentation}
     */
    rotate_with_pod?: bool
    /**
     * **Default:** `"ground-origin"`
     *
     * Where the tiled texture is centered and rotated.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayer.html#texture_relative_to Online documentation}
     */
    texture_relative_to?: EffectRelativeTo
    /**
     * **Default:** `{0,0}`
     *
     * How much the pod's distance traveled moves the cloud coordinates
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayer.html#distance_traveled_strength Online documentation}
     */
    distance_traveled_strength?: Vector
    /**
     * **Default:** `{1,1}`
     *
     * How much the pod's position moves the cloud coordinates
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayer.html#pod_movement_strength Online documentation}
     */
    pod_movement_strength?: Vector
    /**
     * **Default:** `{512, 512}`
     *
     * Size the textures are scaled to in the world.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayer.html#world_size Online documentation}
     */
    world_size?: Vector
    /**
     * Clips the graphic.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayer.html#effect Online documentation}
     */
    effect?: CoverGraphicEffectData
    /**
     * Clips the graphic.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayer.html#alt_effect Online documentation}
     */
    alt_effect?: CoverGraphicEffectData
    /**
     * Default values if unspecified:
     *
     * - opacity : 1.0
     *
     * - rotation : 0.0
     *
     * - effect_scale_min : 0.0
     *
     * - effect_scale_max : 1.0
     *
     * - effect_shift : {0, 0}
     *
     * - alt_effect_scale_min : 0.0
     *
     * - alt_effect_scale_max : 1.0
     *
     * - alt_effect_shift : {0, 0}
     *
     * - offset : {0, 0}
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayer.html#frames Online documentation}
     */
    frames: readonly CoverGraphicProcessionLayerBezierControlPoint[]
  }
  /**
   * One frame in time for a Bezier interpolation.
   * @see CoverGraphicProcessionLayer.frames
   * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayer.html#frames Online documentation}
   */
  export interface CoverGraphicProcessionLayerBezierControlPoint {
    /**
     * Mandatory if `opacity` or `rotation` or `effect_scale_min` or `effect_scale_max` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayerBezierControlPoint.html#timestamp Online documentation}
     */
    timestamp?: MapTick
    /**
     * `opacity` and `opacity_t` interpolate a double smoothly over time.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayerBezierControlPoint.html#opacity Online documentation}
     */
    opacity?: double
    /**
     * Bidirectional tangent at the given timestamp.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayerBezierControlPoint.html#opacity_t Online documentation}
     */
    opacity_t?: double
    /**
     * `rotation` and `rotation_t` interpolate a double smoothly over time.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayerBezierControlPoint.html#rotation Online documentation}
     */
    rotation?: double
    /**
     * Bidirectional tangent at the given timestamp.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayerBezierControlPoint.html#rotation_t Online documentation}
     */
    rotation_t?: double
    /**
     * `effect_scale_min` and `effect_scale_min_t` interpolate a double smoothly over time.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayerBezierControlPoint.html#effect_scale_min Online documentation}
     */
    effect_scale_min?: double
    /**
     * Bidirectional tangent at the given timestamp.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayerBezierControlPoint.html#effect_scale_min_t Online documentation}
     */
    effect_scale_min_t?: double
    /**
     * `effect_scale_max` and `effect_scale_max_t` interpolate a double smoothly over time.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayerBezierControlPoint.html#effect_scale_max Online documentation}
     */
    effect_scale_max?: double
    /**
     * Bidirectional tangent at the given timestamp.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayerBezierControlPoint.html#effect_scale_max_t Online documentation}
     */
    effect_scale_max_t?: double
    /**
     * `alt_effect_scale_min` and `alt_effect_scale_min_t` interpolate a double smoothly over time.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayerBezierControlPoint.html#alt_effect_scale_min Online documentation}
     */
    alt_effect_scale_min?: double
    /**
     * Bidirectional tangent at the given timestamp.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayerBezierControlPoint.html#alt_effect_scale_min_t Online documentation}
     */
    alt_effect_scale_min_t?: double
    /**
     * `alt_effect_scale_max` and `alt_effect_scale_max_t` interpolate a double smoothly over time.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayerBezierControlPoint.html#alt_effect_scale_max Online documentation}
     */
    alt_effect_scale_max?: double
    /**
     * Bidirectional tangent at the given timestamp.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayerBezierControlPoint.html#alt_effect_scale_max_t Online documentation}
     */
    alt_effect_scale_max_t?: double
    /**
     * `effect_shift` and `effect_shift_t` interpolate a vector smoothly over time using `effect_shift_rate` and `effect_shift_rate_t` for a 0-1 rate curve.
     *
     * Vector value.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayerBezierControlPoint.html#effect_shift Online documentation}
     */
    effect_shift?: Vector
    /**
     * Vector tangent.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayerBezierControlPoint.html#effect_shift_t Online documentation}
     */
    effect_shift_t?: Vector
    /**
     * Rate 0-1 value.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayerBezierControlPoint.html#effect_shift_rate Online documentation}
     */
    effect_shift_rate?: double
    /**
     * Rate tangent.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayerBezierControlPoint.html#effect_shift_rate_t Online documentation}
     */
    effect_shift_rate_t?: double
    /**
     * `alt_effect_shift` and `alt_effect_shift_t` interpolate a vector smoothly over time using `alt_effect_shift_rate` and `alt_effect_shift_rate_t` for a 0-1 rate curve.
     *
     * Vector value.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayerBezierControlPoint.html#alt_effect_shift Online documentation}
     */
    alt_effect_shift?: Vector
    /**
     * Vector tangent.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayerBezierControlPoint.html#alt_effect_shift_t Online documentation}
     */
    alt_effect_shift_t?: Vector
    /**
     * Rate 0-1 value.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayerBezierControlPoint.html#alt_effect_shift_rate Online documentation}
     */
    alt_effect_shift_rate?: double
    /**
     * Rate tangent.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayerBezierControlPoint.html#alt_effect_shift_rate_t Online documentation}
     */
    alt_effect_shift_rate_t?: double
    /**
     * `offset` and `offset_t` interpolate a vector smoothly over time using `offset_rate` and `offset_rate_t` for a 0-1 rate curve.
     *
     * Vector value.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayerBezierControlPoint.html#offset Online documentation}
     */
    offset?: Vector
    /**
     * Vector tangent.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayerBezierControlPoint.html#offset_t Online documentation}
     */
    offset_t?: Vector
    /**
     * Rate 0-1 value.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayerBezierControlPoint.html#offset_rate Online documentation}
     */
    offset_rate?: double
    /**
     * Rate tangent.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CoverGraphicProcessionLayerBezierControlPoint.html#offset_rate_t Online documentation}
     */
    offset_rate_t?: double
  }
  export interface CraftFluidTechnologyTrigger {
    readonly type: "craft-fluid"
    fluid: FluidID
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CraftFluidTechnologyTrigger.html#amount Online documentation}
     */
    amount?: double
  }
  export interface CraftItemTechnologyTrigger {
    readonly type: "craft-item"
    item: ItemID
    item_quality?: QualityID
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CraftItemTechnologyTrigger.html#count Online documentation}
     */
    count?: ItemCountType
  }
  export interface CraftItemTipTrigger extends CountBasedTipTrigger {
    readonly type: "craft-item"
    item?: ItemID
    /**
     * ## Union members
     * - `"crafting-of-single-item-ordered"`
     * - `"crafting-of-multiple-items-ordered"`
     * - `"crafting-finished"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CraftItemTipTrigger.html#event_type Online documentation}
     */
    event_type: "crafting-of-single-item-ordered" | "crafting-of-multiple-items-ordered" | "crafting-finished"
    /**
     * **Default:** `false`
     *
     * Can only be used when `event_type` is `"crafting-finished"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CraftItemTipTrigger.html#consecutive Online documentation}
     */
    consecutive?: bool
  }
  export interface CraftingMachineGraphicsSet extends WorkingVisualisations {
    frozen_patch?: Sprite4Way
    /**
     * **Default:** `"object"`
     *
     * Render layer(s) for all directions of the circuit connectors.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CraftingMachineGraphicsSet.html#circuit_connector_layer Online documentation}
     */
    circuit_connector_layer?: RenderLayer | CircuitConnectorLayer
    /**
     * **Default:** `100`
     *
     * Secondary draw order(s) for all directions of the circuit connectors.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CraftingMachineGraphicsSet.html#circuit_connector_secondary_draw_order Online documentation}
     */
    circuit_connector_secondary_draw_order?: int8 | CircuitConnectorSecondaryDrawOrder
    /**
     * **Default:** `0.5`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CraftingMachineGraphicsSet.html#animation_progress Online documentation}
     */
    animation_progress?: float
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CraftingMachineGraphicsSet.html#reset_animation_when_frozen Online documentation}
     */
    reset_animation_when_frozen?: bool
  }
  export interface CranePart {
    /**
     * **Default:** `0`
     *
     * Angle in radian, which is internally converted to a {@link RealOrientation}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CranePart.html#orientation_shift Online documentation}
     */
    orientation_shift?: float
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CranePart.html#is_contractible_by_cropping Online documentation}
     */
    is_contractible_by_cropping?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CranePart.html#should_scale_for_perspective Online documentation}
     */
    should_scale_for_perspective?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CranePart.html#scale_to_fit_model Online documentation}
     */
    scale_to_fit_model?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CranePart.html#allow_sprite_rotation Online documentation}
     */
    allow_sprite_rotation?: bool
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CranePart.html#snap_start Online documentation}
     */
    snap_start?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CranePart.html#snap_end Online documentation}
     */
    snap_end?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CranePart.html#snap_end_arm_extent_multiplier Online documentation}
     */
    snap_end_arm_extent_multiplier?: float
    /**
     * **Default:** `""`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CranePart.html#name Online documentation}
     */
    name?: string
    dying_effect?: CranePartDyingEffect
    relative_position?: Vector3D
    relative_position_grappler?: Vector3D
    static_length?: Vector3D
    extendable_length?: Vector3D
    static_length_grappler?: Vector3D
    extendable_length_grappler?: Vector3D
    sprite?: Sprite
    /**
     * Only loaded if `sprite` is not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CranePart.html#rotated_sprite Online documentation}
     */
    rotated_sprite?: RotatedSprite
    sprite_shadow?: Sprite
    /**
     * Only loaded if `sprite_shadow` is not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CranePart.html#rotated_sprite_shadow Online documentation}
     */
    rotated_sprite_shadow?: RotatedSprite
    sprite_reflection?: Sprite
    /**
     * Only loaded if `sprite_reflection` is not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CranePart.html#rotated_sprite_reflection Online documentation}
     */
    rotated_sprite_reflection?: RotatedSprite
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CranePart.html#layer Online documentation}
     */
    layer?: int8
  }
  export interface CranePartDyingEffect {
    /**
     * **Default:** `0.25`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CranePartDyingEffect.html#particle_effect_linear_distance_step Online documentation}
     */
    particle_effect_linear_distance_step?: float
    /**
     * **Default:** `0.5`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CranePartDyingEffect.html#explosion_linear_distance_step Online documentation}
     */
    explosion_linear_distance_step?: float
    particle_effects?: readonly CreateParticleTriggerEffectItem[]
    explosion?: ExplosionDefinition
  }
  export interface CraterPlacementDefinition {
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CraterPlacementDefinition.html#minimum_segments_to_place Online documentation}
     */
    minimum_segments_to_place?: uint32
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CraterPlacementDefinition.html#segment_probability Online documentation}
     */
    segment_probability?: float
    /**
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CraterPlacementDefinition.html#segments Online documentation}
     */
    segments: readonly CraterSegment[]
  }
  /**
   * @see CraterPlacementDefinition.segments
   * @see {@link https://lua-api.factorio.com/2.0.16/types/CraterPlacementDefinition.html#segments Online documentation}
   */
  export interface CraterSegment {
    orientation: float
    offset: Vector
  }
  export interface CreateAsteroidChunkEffectItem extends TriggerEffectItem {
    readonly type: "create-asteroid-chunk"
    asteroid_name: AsteroidChunkID
    offset_deviation?: BoundingBox
    offsets?: readonly Vector[]
  }
  export interface CreateDecorativesTriggerEffectItem extends TriggerEffectItem {
    readonly type: "create-decorative"
    decorative: DecorativeID
    spawn_max: uint16
    spawn_min_radius: float
    /**
     * Must be less than 24.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateDecorativesTriggerEffectItem.html#spawn_max_radius Online documentation}
     */
    spawn_max_radius: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateDecorativesTriggerEffectItem.html#spawn_min Online documentation}
     */
    spawn_min?: uint16
    /**
     * **Default:** `0.5`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateDecorativesTriggerEffectItem.html#radius_curve Online documentation}
     */
    radius_curve?: float
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateDecorativesTriggerEffectItem.html#apply_projection Online documentation}
     */
    apply_projection?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateDecorativesTriggerEffectItem.html#spread_evenly Online documentation}
     */
    spread_evenly?: bool
  }
  export interface CreateEntityTriggerEffectItem extends TriggerEffectItem {
    readonly type: "create-entity"
    /**
     * The name of the entity that should be created.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateEntityTriggerEffectItem.html#entity_name Online documentation}
     */
    entity_name: EntityID
    offset_deviation?: BoundingBox
    /**
     * **Default:** `false`
     *
     * If `true`, the {@link import("factorio:runtime").on_trigger_created_entity on_trigger_created_entity} event will be raised.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateEntityTriggerEffectItem.html#trigger_created_entity Online documentation}
     */
    trigger_created_entity?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateEntityTriggerEffectItem.html#check_buildability Online documentation}
     */
    check_buildability?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateEntityTriggerEffectItem.html#show_in_tooltip Online documentation}
     */
    show_in_tooltip?: bool
    /**
     * Entity creation will not occur if any tile matches the collision condition. Defaults to no collisions.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateEntityTriggerEffectItem.html#tile_collision_mask Online documentation}
     */
    tile_collision_mask?: CollisionMaskConnector
    /**
     * If multiple offsets are specified, multiple entities are created. The projectile of the {@linkplain https://wiki.factorio.com/Distractor_capsule Distractor capsule} uses this property to spawn three Distractors.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateEntityTriggerEffectItem.html#offsets Online documentation}
     */
    offsets?: readonly Vector[]
    /**
     * **Default:** `false`
     *
     * If true, creates the entity as a member of the enemy force. If the surface.no_enemies_mode is true, the entity will not be created.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateEntityTriggerEffectItem.html#as_enemy Online documentation}
     */
    as_enemy?: bool
    /**
     * **Default:** `false`
     *
     * If true and `as_enemy` is true, allows the entity to be created even if the current surface.no_enemies_mode is true.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateEntityTriggerEffectItem.html#ignore_no_enemies_mode Online documentation}
     */
    ignore_no_enemies_mode?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateEntityTriggerEffectItem.html#find_non_colliding_position Online documentation}
     */
    find_non_colliding_position?: bool
    /**
     * **Default:** `5`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateEntityTriggerEffectItem.html#non_colliding_search_radius Online documentation}
     */
    non_colliding_search_radius?: double
    /**
     * **Default:** `0.2`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateEntityTriggerEffectItem.html#non_colliding_search_precision Online documentation}
     */
    non_colliding_search_precision?: double
    /**
     * Only loaded if `find_non_colliding_position` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateEntityTriggerEffectItem.html#non_colliding_fail_result Online documentation}
     */
    non_colliding_fail_result?: Trigger
    /**
     * **Default:** `false`
     *
     * The result entity will be protected from automated attacks of enemies.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateEntityTriggerEffectItem.html#protected Online documentation}
     */
    protected?: bool
  }
  export interface CreateExplosionTriggerEffectItem extends Omit<CreateEntityTriggerEffectItem, "type"> {
    readonly type: "create-explosion"
    /**
     * **Default:** `-1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateExplosionTriggerEffectItem.html#max_movement_distance Online documentation}
     */
    max_movement_distance?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateExplosionTriggerEffectItem.html#max_movement_distance_deviation Online documentation}
     */
    max_movement_distance_deviation?: float
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateExplosionTriggerEffectItem.html#inherit_movement_distance_from_projectile Online documentation}
     */
    inherit_movement_distance_from_projectile?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateExplosionTriggerEffectItem.html#cycle_while_moving Online documentation}
     */
    cycle_while_moving?: bool
  }
  export interface CreateFireTriggerEffectItem extends Omit<CreateEntityTriggerEffectItem, "type"> {
    readonly type: "create-fire"
    /**
     * **Default:** `MAX_UINT8`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateFireTriggerEffectItem.html#initial_ground_flame_count Online documentation}
     */
    initial_ground_flame_count?: uint8
  }
  export interface CreateGhostOnEntityDeathModifier extends BoolModifier {
    readonly type: "create-ghost-on-entity-death"
    /**
     * **Default:** `false`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateGhostOnEntityDeathModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface CreateParticleTriggerEffectItem extends TriggerEffectItem {
    readonly type: "create-particle"
    particle_name: ParticleID
    initial_height: float
    offset_deviation?: SimpleBoundingBox
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateParticleTriggerEffectItem.html#show_in_tooltip Online documentation}
     */
    show_in_tooltip?: bool
    tile_collision_mask?: CollisionMaskConnector
    offsets?: readonly Vector[]
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateParticleTriggerEffectItem.html#initial_height_deviation Online documentation}
     */
    initial_height_deviation?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateParticleTriggerEffectItem.html#initial_vertical_speed Online documentation}
     */
    initial_vertical_speed?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateParticleTriggerEffectItem.html#initial_vertical_speed_deviation Online documentation}
     */
    initial_vertical_speed_deviation?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateParticleTriggerEffectItem.html#speed_from_center Online documentation}
     */
    speed_from_center?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateParticleTriggerEffectItem.html#speed_from_center_deviation Online documentation}
     */
    speed_from_center_deviation?: float
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateParticleTriggerEffectItem.html#frame_speed Online documentation}
     */
    frame_speed?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateParticleTriggerEffectItem.html#frame_speed_deviation Online documentation}
     */
    frame_speed_deviation?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateParticleTriggerEffectItem.html#movement_multiplier Online documentation}
     */
    movement_multiplier?: float
    /**
     * **Default:** `0`
     *
     * Silently capped to a maximum of 100.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateParticleTriggerEffectItem.html#tail_length Online documentation}
     */
    tail_length?: uint8
    /**
     * **Default:** `0`
     *
     * Silently capped to a maximum of 100.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateParticleTriggerEffectItem.html#tail_length_deviation Online documentation}
     */
    tail_length_deviation?: uint8
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateParticleTriggerEffectItem.html#tail_width Online documentation}
     */
    tail_width?: float
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateParticleTriggerEffectItem.html#rotate_offsets Online documentation}
     */
    rotate_offsets?: bool
    /**
     * **Default:** `false`
     *
     * Create particles only when they are in 200 tiles range of any connected player.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateParticleTriggerEffectItem.html#only_when_visible Online documentation}
     */
    only_when_visible?: bool
    apply_tile_tint?: "primary" | "secondary"
    /**
     * **Default:** ``{1, 1, 1, 1} (white)``
     *
     * Only loaded if `apply_tile_tint` is not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateParticleTriggerEffectItem.html#tint Online documentation}
     */
    tint?: Color
  }
  export interface CreateSmokeTriggerEffectItem extends Omit<CreateEntityTriggerEffectItem, "type"> {
    readonly type: "create-smoke"
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateSmokeTriggerEffectItem.html#initial_height Online documentation}
     */
    initial_height?: float
    speed?: Vector
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateSmokeTriggerEffectItem.html#speed_multiplier Online documentation}
     */
    speed_multiplier?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateSmokeTriggerEffectItem.html#speed_multiplier_deviation Online documentation}
     */
    speed_multiplier_deviation?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateSmokeTriggerEffectItem.html#starting_frame Online documentation}
     */
    starting_frame?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateSmokeTriggerEffectItem.html#starting_frame_deviation Online documentation}
     */
    starting_frame_deviation?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateSmokeTriggerEffectItem.html#speed_from_center Online documentation}
     */
    speed_from_center?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateSmokeTriggerEffectItem.html#speed_from_center_deviation Online documentation}
     */
    speed_from_center_deviation?: float
  }
  export interface CreateSpacePlatformTechnologyTrigger {
    readonly type: "create-space-platform"
  }
  export interface CreateStickerTriggerEffectItem extends TriggerEffectItem {
    readonly type: "create-sticker"
    /**
     * Name of a {@link StickerPrototype} that should be created.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateStickerTriggerEffectItem.html#sticker Online documentation}
     */
    sticker: EntityID
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateStickerTriggerEffectItem.html#show_in_tooltip Online documentation}
     */
    show_in_tooltip?: bool
    /**
     * **Default:** `false`
     *
     * If `true`, {@link import("factorio:runtime").on_trigger_created_entity on_trigger_created_entity} will be triggered when the sticker is created.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateStickerTriggerEffectItem.html#trigger_created_entity Online documentation}
     */
    trigger_created_entity?: bool
  }
  export interface CreateTrivialSmokeEffectItem extends TriggerEffectItem {
    readonly type: "create-trivial-smoke"
    smoke_name: TrivialSmokeID
    offset_deviation?: BoundingBox
    offsets?: readonly Vector[]
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateTrivialSmokeEffectItem.html#initial_height Online documentation}
     */
    initial_height?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateTrivialSmokeEffectItem.html#max_radius Online documentation}
     */
    max_radius?: float
    speed?: Vector
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateTrivialSmokeEffectItem.html#speed_multiplier Online documentation}
     */
    speed_multiplier?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateTrivialSmokeEffectItem.html#speed_multiplier_deviation Online documentation}
     */
    speed_multiplier_deviation?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateTrivialSmokeEffectItem.html#starting_frame Online documentation}
     */
    starting_frame?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateTrivialSmokeEffectItem.html#starting_frame_deviation Online documentation}
     */
    starting_frame_deviation?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateTrivialSmokeEffectItem.html#speed_from_center Online documentation}
     */
    speed_from_center?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CreateTrivialSmokeEffectItem.html#speed_from_center_deviation Online documentation}
     */
    speed_from_center_deviation?: float
  }
  /**
   * @see UtilitySprites.cursor_box
   * @see {@link https://lua-api.factorio.com/2.0.16/prototypes/UtilitySprites.html#cursor_box Online documentation}
   */
  export interface CursorBoxSpecification {
    regular: readonly BoxSpecification[]
    multiplayer_selection: readonly BoxSpecification[]
    not_allowed: readonly BoxSpecification[]
    copy: readonly BoxSpecification[]
    electricity: readonly BoxSpecification[]
    logistics: readonly BoxSpecification[]
    pair: readonly BoxSpecification[]
    train_visualization: readonly BoxSpecification[]
    blueprint_snap_rectangle: readonly BoxSpecification[]
    rts_selected: readonly BoxSpecification[]
    rts_to_be_selected: readonly BoxSpecification[]
  }
  /**
   * One of the following values:
   *
   * ## Union members
   * - `"entity"`: The normal entity selection box. Yellow by default.
   * - `"multiplayer-entity"`: The multiplayer entity selection box which gets tinted using {@link import("factorio:runtime").LuaPlayer#chat_color LuaPlayer::chat_color}. White by default.
   * - `"electricity"`: The selection box used to specify electric poles an entity is connected to. Light blue by default.
   * - `"copy"`: The selection box used when doing entity copy-paste. Green by default.
   * - `"not-allowed"`: The selection box used when specifying colliding entities. Red by default.
   * - `"pair"`: Light blue by default.
   * - `"logistics"`: Light blue by default.
   * - `"train-visualization"`: White by default.
   * - `"blueprint-snap-rectangle"`: Green by default.
   * - `"spidertron-remote-selected"`
   * - `"spidertron-remote-to-be-selected"`
   * @see {@link https://lua-api.factorio.com/2.0.16/types/CursorBoxType.html Online documentation}
   */
  export type CursorBoxType =
    | "entity"
    | "multiplayer-entity"
    | "electricity"
    | "copy"
    | "not-allowed"
    | "pair"
    | "logistics"
    | "train-visualization"
    | "blueprint-snap-rectangle"
    | "spidertron-remote-selected"
    | "spidertron-remote-to-be-selected"
  /**
   * Used by {@link BaseAttackParameters} to play a sound during the attack.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/CyclicSound.html Online documentation}
   */
  export interface CyclicSound {
    /**
     * Played once at the beginning of the overall cyclic sound.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CyclicSound.html#begin_sound Online documentation}
     */
    begin_sound?: Sound
    /**
     * Played repeatedly after the begin_sound was played.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CyclicSound.html#middle_sound Online documentation}
     */
    middle_sound?: Sound
    /**
     * Played once when the overall cyclic sound is requested to end.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/CyclicSound.html#end_sound Online documentation}
     */
    end_sound?: Sound
  }
  /**
   * Used to specify what type of damage and how much damage something deals.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/DamageParameters.html Online documentation}
   */
  export interface DamageParameters {
    amount: float
    /**
     * The type of damage. See {@linkplain https://wiki.factorio.com/Data.raw#damage-type here} for a list of built-in types, and {@link DamageType} for creating custom types.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/DamageParameters.html#type Online documentation}
     */
    readonly type: DamageTypeID
  }
  export interface DamageTriggerEffectItem extends TriggerEffectItem {
    readonly type: "damage"
    damage: DamageParameters
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/DamageTriggerEffectItem.html#apply_damage_to_trees Online documentation}
     */
    apply_damage_to_trees?: bool
    /**
     * **Default:** `false`
     *
     * If `true`, no corpse for killed entities will be created.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/DamageTriggerEffectItem.html#vaporize Online documentation}
     */
    vaporize?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/DamageTriggerEffectItem.html#use_substitute Online documentation}
     */
    use_substitute?: bool
    /**
     * **Default:** `MAX_UINT16`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/DamageTriggerEffectItem.html#lower_distance_threshold Online documentation}
     */
    lower_distance_threshold?: uint16
    /**
     * **Default:** `MAX_UINT16`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/DamageTriggerEffectItem.html#upper_distance_threshold Online documentation}
     */
    upper_distance_threshold?: uint16
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/DamageTriggerEffectItem.html#lower_damage_modifier Online documentation}
     */
    lower_damage_modifier?: float
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/DamageTriggerEffectItem.html#upper_damage_modifier Online documentation}
     */
    upper_damage_modifier?: float
  }
  /**
   * Struct type for {@link DamageTypeFilters}
   * @see DamageTypeFilters
   * @see {@link https://lua-api.factorio.com/2.0.16/types/DamageTypeFilters.html Online documentation}
   */
  export interface DamageTypeFiltersStruct {
    /**
     * The damage types to filter for.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/DamageTypeFilters.html#types Online documentation}
     */
    types: DamageTypeID | readonly DamageTypeID[]
    /**
     * **Default:** `false`
     *
     * Whether this is a whitelist or a blacklist of damage types. Defaults to being a blacklist.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/DamageTypeFilters.html#whitelist Online documentation}
     */
    whitelist?: bool
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
   * @see {@link https://lua-api.factorio.com/2.0.16/types/DamageTypeFilters.html Online documentation}
   */
  export type DamageTypeFilters = DamageTypeFiltersStruct | DamageTypeID | readonly DamageTypeID[]
  /**
   * The name of a {@link DamageType}.
   * @example
   * "impact"
   * @example
   * "poison"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/DamageTypeID.html Online documentation}
   */
  export type DamageTypeID = string
  /**
   * The data table is read by the game to load all prototypes.
   *
   * At the end of the prototype stage, the data table is loaded by the game engine and the format of the prototypes is validated. Any extra properties are ignored. See {@linkplain https://lua-api.factorio.com/2.0.16/auxiliary/data-lifecycle.html Data Lifecycle} for more information.
   *
   * The data table and its properties are defined in Lua, so their source code can be viewed in {@linkplain https://github.com/wube/factorio-data/blob/master/core/lualib/dataloader.lua dataloader.lua}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/Data.html Online documentation}
   */
  export interface Data {
    /**
     * A dictionary of prototype types to values that themselves are dictionaries of prototype names to specific prototypes.
     *
     * This means that individual prototypes can be accessed with `local prototype = data.raw["prototype-type"]["internal-name"]`.
     * @example
     * -- set the stack size of coal to be 1000
     * data.raw["item"]["coal"].stack_size = 1000
     * @example
     * -- get the max health of the wooden chest
     * local health = data.raw["container"]["wooden-chest"].max_health
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Data.html#raw Online documentation}
     */
    raw: {
      readonly [Type in PrototypeType]: {
        readonly [Name in string]?: PrototypeMap[Type]
      }
    }
    /**
     * Add additional prototypes.
     */
    /**
     * The primary way to add prototypes to the data table.
     * @example
     * local not_coal =
     * {
     *   type = "item",
     *   name = "a-thing",
     *   icon = "__base__/graphics/icons/coal.png",
     *   icon_size = 64,
     *   stack_size = 2
     * }
     * local proto2 =
     * {
     *   type = "fuel-category",
     *   name = "best-fuel"
     * }
     * data:extend({not_coal, proto2})
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Data.html#extend Online documentation}
     */
    extend<P extends AnyPrototype>(prototypes: readonly P[]): void
    /**
     * Set by the game based on whether the demo or retail version is running. Should not be used by mods.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Data.html#is_demo Online documentation}
     */
    is_demo: bool
  }
  /**
   * The first member of the tuple states at which time of the day the LUT should be used. If the current game time is between two values defined in the color lookup that have different LUTs, the color is interpolated to create a smooth transition. (Sharp transition can be achieved by having the two values differing only by a small fraction.)
   *
   * If there is only one tuple, it means that the LUT will be used all the time, regardless of the value of the first member of the tuple.
   *
   * The second member of the tuple is a lookup table (LUT) for the color which maps the original color to a position in the sprite where the replacement color is found.
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
   * @see {@link https://lua-api.factorio.com/2.0.16/types/DaytimeColorLookupTable.html Online documentation}
   */
  export type DaytimeColorLookupTable = readonly (readonly [double, ColorLookupTable])[]
  export interface DeconstructionTimeToLiveModifier extends SimpleModifier {
    readonly type: "deconstruction-time-to-live"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/DeconstructionTimeToLiveModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  /**
   * The name of a {@link DecorativePrototype}.
   * @example
   * "dark-mud-decal"
   * @example
   * "red-pita"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/DecorativeID.html Online documentation}
   */
  export type DecorativeID = string
  export interface DelayedTriggerDelivery extends TriggerDeliveryItem {
    readonly type: "delayed"
    delayed_trigger: ActiveTriggerID
  }
  /**
   * This trigger is considered fulfilled when the {@link TipsAndTricksItem#dependencies TipsAndTricksItem::dependencies} are fulfilled.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/DependenciesMetTipTrigger.html Online documentation}
   */
  export interface DependenciesMetTipTrigger {
    readonly type: "dependencies-met"
  }
  export interface DestroyCliffsCapsuleAction {
    readonly type: "destroy-cliffs"
    attack_parameters: AttackParameters
    radius: float
    /**
     * **Default:** `3600`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/DestroyCliffsCapsuleAction.html#timeout Online documentation}
     */
    timeout?: uint32
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/DestroyCliffsCapsuleAction.html#play_sound_on_failure Online documentation}
     */
    play_sound_on_failure?: bool
    /**
     * **Default:** `true`
     *
     * Whether using the capsule consumes an item from the stack.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/DestroyCliffsCapsuleAction.html#uses_stack Online documentation}
     */
    uses_stack?: bool
  }
  export interface DestroyCliffsTriggerEffectItem extends TriggerEffectItem {
    readonly type: "destroy-cliffs"
    radius: float
    /**
     * Entity created at trigger location every time trigger executes.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/DestroyCliffsTriggerEffectItem.html#explosion_at_trigger Online documentation}
     */
    explosion_at_trigger?: EntityID
    /**
     * Entity created at cliff location when a cliff is destroyed.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/DestroyCliffsTriggerEffectItem.html#explosion_at_cliff Online documentation}
     */
    explosion_at_cliff?: EntityID
  }
  export interface DestroyDecorativesTriggerEffectItem extends TriggerEffectItem {
    readonly type: "destroy-decoratives"
    radius: float
    /**
     * **Default:** `first layer`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/DestroyDecorativesTriggerEffectItem.html#from_render_layer Online documentation}
     */
    from_render_layer?: RenderLayer
    /**
     * **Default:** `last layer`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/DestroyDecorativesTriggerEffectItem.html#to_render_layer Online documentation}
     */
    to_render_layer?: RenderLayer
    /**
     * **Default:** `false`
     *
     * Soft decoratives are those where {@link DecorativePrototype#grows_through_rail_path DecorativePrototype::grows_through_rail_path} is `true`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/DestroyDecorativesTriggerEffectItem.html#include_soft_decoratives Online documentation}
     */
    include_soft_decoratives?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/DestroyDecorativesTriggerEffectItem.html#include_decals Online documentation}
     */
    include_decals?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/DestroyDecorativesTriggerEffectItem.html#invoke_decorative_trigger Online documentation}
     */
    invoke_decorative_trigger?: bool
    /**
     * **Default:** `false`
     *
     * If `true`, only decoratives with a {@link DecorativePrototype#trigger_effect DecorativePrototype::trigger_effect} will be destroyed.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/DestroyDecorativesTriggerEffectItem.html#decoratives_with_trigger_only Online documentation}
     */
    decoratives_with_trigger_only?: bool
  }
  export interface DifficultySettings {
    /**
     * **Default:** `1`
     *
     * Must be >= 0.001 and <= 1000.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/DifficultySettings.html#technology_price_multiplier Online documentation}
     */
    technology_price_multiplier?: double
    /**
     * **Default:** `1`
     *
     * Must be >= 0.01 and <= 100.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/DifficultySettings.html#spoil_time_modifier Online documentation}
     */
    spoil_time_modifier?: double
  }
  export interface DirectTriggerItem extends TriggerItem {
    readonly type: "direct"
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/DirectTriggerItem.html#filter_enabled Online documentation}
     */
    filter_enabled?: bool
  }
  /**
   * Usually specified by using {@link defines.direction}.
   *
   * ## Union members
   * - `0`: North
   * - `1`: NorthNorthEast
   * - `2`: NorthEast
   * - `3`: EastNorthEast
   * - `4`: East
   * - `5`: EastSouthEast
   * - `6`: SouthEast
   * - `7`: SouthSouthEast
   * - `8`: South
   * - `9`: SouthSouthWest
   * - `10`: SouthWest
   * - `11`: WestSouthWest
   * - `12`: West
   * - `13`: WestNorthWest
   * - `14`: NorthWest
   * - `15`: NorthNorthWest
   * @see {@link https://lua-api.factorio.com/2.0.16/types/Direction.html Online documentation}
   */
  export type Direction = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15
  /**
   * @see AnimatedVector.direction_shift
   * @see {@link https://lua-api.factorio.com/2.0.16/types/AnimatedVector.html#direction_shift Online documentation}
   */
  export interface DirectionShift {
    north?: Vector
    east?: Vector
    south?: Vector
    west?: Vector
  }
  /**
   * One of the 16 directions, specified with a string.
   *
   * ## Union members
   * - `"north"`
   * - `"north_north_east"`
   * - `"north_east"`
   * - `"east_north_east"`
   * - `"east"`
   * - `"east_south_east"`
   * - `"south_east"`
   * - `"south_south_east"`
   * - `"south"`
   * - `"south_south_west"`
   * - `"south_west"`
   * - `"west_south_west"`
   * - `"west"`
   * - `"west_north_west"`
   * - `"north_west"`
   * - `"north_north_west"`
   * @see {@link https://lua-api.factorio.com/2.0.16/types/DirectionString.html Online documentation}
   */
  export type DirectionString =
    | "north"
    | "north_north_east"
    | "north_east"
    | "east_north_east"
    | "east"
    | "east_south_east"
    | "south_east"
    | "south_south_east"
    | "south"
    | "south_south_west"
    | "south_west"
    | "west_south_west"
    | "west"
    | "west_north_west"
    | "north_west"
    | "north_north_west"
  export interface DoubleSliderStyleSpecification extends Omit<SliderStyleSpecification, "type"> {
    readonly type: "double_slider_style"
  }
  export interface DropDownStyleSpecification extends BaseStyleSpecification {
    readonly type: "dropdown_style"
    button_style?: ButtonStyleSpecification
    icon?: Sprite
    list_box_style?: ListBoxStyleSpecification
    selector_and_title_spacing?: int16
    opened_sound?: Sound
  }
  export interface DropItemTipTrigger extends CountBasedTipTrigger {
    readonly type: "drop-item"
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/DropItemTipTrigger.html#drop_into_entity Online documentation}
     */
    drop_into_entity?: bool
  }
  /**
   * When applied to {@link ModulePrototype modules}, the resulting effect is a sum of all module effects, multiplied through calculations: `(1 + sum module effects)` or, for productivity `(0 + sum)`.
   * @example
   * effect =
   * {
   *   productivity = 0.04,
   *   consumption = 0.4,
   *   pollution = 0.05,
   *   speed = -0.05
   * }
   * @see {@link https://lua-api.factorio.com/2.0.16/types/Effect.html Online documentation}
   */
  export interface Effect {
    /**
     * Multiplier to energy used during operation (not idle/drain use). The minimum possible sum is -80%.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Effect.html#consumption Online documentation}
     */
    consumption?: EffectValue
    /**
     * Modifier to crafting speed, research speed, etc. The minimum possible sum is -80%.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Effect.html#speed Online documentation}
     */
    speed?: EffectValue
    /**
     * Multiplied against work completed, adds to the bonus results of operating. E.g. an extra crafted recipe or immediate research bonus. The minimum possible sum is 0%.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Effect.html#productivity Online documentation}
     */
    productivity?: EffectValue
    /**
     * Multiplier to the pollution factor of an entity's pollution during use. The minimum possible sum is -80%.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Effect.html#pollution Online documentation}
     */
    pollution?: EffectValue
    quality?: EffectValue
  }
  export interface EffectReceiver {
    base_effect?: Effect
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/EffectReceiver.html#uses_module_effects Online documentation}
     */
    uses_module_effects?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/EffectReceiver.html#uses_beacon_effects Online documentation}
     */
    uses_beacon_effects?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/EffectReceiver.html#uses_surface_effects Online documentation}
     */
    uses_surface_effects?: bool
  }
  /**
   * Identifies what {@link CloudEffectStyle} refers to.
   *
   * ## Union members
   * - `"ground-origin"`: Refers to the ground position the pod entity is relative to.
   * - `"pod"`: Refers to the current position of pod playing the transition.
   * - `"spawn-origin"`: Refers to the position where this transition started on tick 0. Useful as a blank slate to apply inherited offsets via {@link ProcessionLayerInheritanceGroup}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/EffectRelativeTo.html Online documentation}
   */
  export type EffectRelativeTo = "ground-origin" | "pod" | "spawn-origin"
  export interface EffectTexture extends SpriteSource {}
  /**
   * A list of {@link ModulePrototype module} effects, or just a single effect. Modules with other effects cannot be used on the machine. This means that both effects from modules and from surrounding beacons are restricted to the listed effects. If `allowed_effects` is an empty array, the machine cannot be affected by modules or beacons.
   *
   * ## Union members
   * - `"speed"`: Modules that increase or decrease the machine's speed.
   * - `"productivity"`: Modules that make the machine produce bonus items.
   * - `"consumption"`: Modules that increase or decrease the machine's energy consumption.
   * - `"pollution"`: Modules that make the machine produce more or less pollution.
   * - `"quality"`
   * @example
   * -- Allow all module types
   * allowed_effects = {"speed", "productivity", "consumption", "pollution", "quality"}
   * @example
   * -- Allow only modules that affect speed
   * allowed_effects = "speed"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/EffectTypeLimitation.html Online documentation}
   */
  export type EffectTypeLimitation =
    | ("speed" | "productivity" | "consumption" | "pollution" | "quality")
    | readonly ("speed" | "productivity" | "consumption" | "pollution" | "quality")[]
  /**
   * Precision is ignored beyond two decimals - `0.567` results in `0.56` and means 56% etc. Values can range from `-327.68` to `327.67`. Numbers outside of this range will wrap around.
   * @example
   * 0.07 -- 7% bonus
   * @see {@link https://lua-api.factorio.com/2.0.16/types/EffectValue.html Online documentation}
   */
  export type EffectValue = float
  /**
   * ## Union members
   * - `"lava"`: Valid only when {@link FeatureFlags#expansion_shaders expansion_shaders} feature flag is enabled.
   * - `"wetland-water"`: Valid only when {@link FeatureFlags#expansion_shaders expansion_shaders} feature flag is enabled.
   * - `"oil"`: Valid only when {@link FeatureFlags#expansion_shaders expansion_shaders} feature flag is enabled.
   * - `"water"`
   * @see {@link https://lua-api.factorio.com/2.0.16/types/EffectVariation.html Online documentation}
   */
  export type EffectVariation = "lava" | "wetland-water" | "oil" | "water"
  /**
   * @example
   * energy_source = -- energy source of oil pumpjack
   * {
   *   type = "electric",
   *   emissions_per_minute = { pollution = 10 },
   *   usage_priority = "secondary-input"
   * }
   * @example
   * energy_source = -- energy source of accumulator
   * {
   *   type = "electric",
   *   buffer_capacity = "5MJ",
   *   usage_priority = "tertiary",
   *   input_flow_limit = "300kW",
   *   output_flow_limit = "300kW"
   * }
   * @example
   * energy_source = -- energy source of steam engine
   * {
   *   type = "electric",
   *   usage_priority = "secondary-output"
   * }
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ElectricEnergySource.html Online documentation}
   */
  export interface ElectricEnergySource extends BaseEnergySource {
    readonly type: "electric"
    /**
     * How much energy this entity can hold.
     * @example
     * buffer_capacity = "5MJ"
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElectricEnergySource.html#buffer_capacity Online documentation}
     */
    buffer_capacity?: Energy
    /**
     * @example
     * usage_priority = "secondary-input"
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElectricEnergySource.html#usage_priority Online documentation}
     */
    usage_priority: ElectricUsagePriority
    /**
     * **Default:** `Max `double` value`
     *
     * The rate at which energy can be taken, from the network, to refill the energy buffer. `0` means no transfer.
     * @example
     * input_flow_limit = "300kW"
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElectricEnergySource.html#input_flow_limit Online documentation}
     */
    input_flow_limit?: Energy
    /**
     * **Default:** `Max `double` value`
     *
     * The rate at which energy can be provided, to the network, from the energy buffer. `0` means no transfer.
     * @example
     * output_flow_limit = "300kW"
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElectricEnergySource.html#output_flow_limit Online documentation}
     */
    output_flow_limit?: Energy
    /**
     * How much energy (per second) will be continuously removed from the energy buffer. In-game, this is shown in the tooltip as "Min. {@link import("factorio:runtime").LuaEntity#active Minimum] Consumption". Applied as a constant consumption-per-tick, even when the entity has the property [active} set to `false`.
     * @example
     * drain = "1kW"
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElectricEnergySource.html#drain Online documentation}
     */
    drain?: Energy
  }
  /**
   * Used to specify priority of energy usage in the {@linkplain https://wiki.factorio.com/Electric_system electric system}.
   *
   * ## Union members
   * - `"primary-input"`: Used for the most important machines, for example laser turrets.
   * - `"primary-output"`
   * - `"secondary-input"`: Used for all other machines.
   * - `"secondary-output"`: Used in steam generators.
   * - `"tertiary"`: As input/output used for accumulators, to collect the overproduction or provide energy when neither primary/secondary output can't.
   * - `"solar"`: Can only be used by {@link SolarPanelPrototype}, will be ignored otherwise.
   * - `"lamp"`: Can only be used by {@link LampPrototype}, will be ignored otherwise.
   * @example
   * usage_priority = "primary-input"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ElectricUsagePriority.html Online documentation}
   */
  export type ElectricUsagePriority =
    | "primary-input"
    | "primary-output"
    | "secondary-input"
    | "secondary-output"
    | "tertiary"
    | "solar"
    | "lamp"
  /**
   * Struct type for {@link ElementImageSet}
   * @see ElementImageSet
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSet.html Online documentation}
   */
  export interface ElementImageSetStruct {
    base?: ElementImageSetLayer
    shadow?: ElementImageSetLayer
    glow?: ElementImageSetLayer
  }
  /**
   * If this is loaded as a single ElementImageSetLayer, it gets used as `base`.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSet.html Online documentation}
   */
  export type ElementImageSet = ElementImageSetStruct | ElementImageSetLayer
  /**
   * Struct type for {@link ElementImageSetLayer}
   * @see ElementImageSetLayer
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html Online documentation}
   */
  export interface ElementImageSetLayerStruct {
    /**
     * **Default:** `"inner"`
     *
     * Defines whether the border should be drawn inside the widget, which affects the padding and content size of the widget, or outside of the widget which doesn't affect size. The outer draw type is most commonly used for shadows, glows and insets.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#draw_type Online documentation}
     */
    draw_type?: "inner" | "outer"
    /**
     * **Default:** ``"none"` if this has no other properties, otherwise `"composition"``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#type Online documentation}
     */
    readonly type?: "none" | "composition"
    /**
     * **Default:** ``{r=1, g=1, b=1, a=1}``
     *
     * Only loaded if `type` is `"composition"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#tint Online documentation}
     */
    tint?: Color
    /**
     * Only loaded if `type` is `"composition"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#center Online documentation}
     */
    center?: Sprite
    /**
     * Only loaded if `type` is `"composition"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#left Online documentation}
     */
    left?: Sprite
    /**
     * Only loaded if `type` is `"composition"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#left_top Online documentation}
     */
    left_top?: Sprite
    /**
     * Only loaded if `type` is `"composition"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#left_bottom Online documentation}
     */
    left_bottom?: Sprite
    /**
     * Only loaded if `type` is `"composition"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#right Online documentation}
     */
    right?: Sprite
    /**
     * Only loaded if `type` is `"composition"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#right_top Online documentation}
     */
    right_top?: Sprite
    /**
     * Only loaded if `type` is `"composition"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#right_bottom Online documentation}
     */
    right_bottom?: Sprite
    /**
     * Only loaded if `type` is `"composition"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#top Online documentation}
     */
    top?: Sprite
    /**
     * Only loaded if `type` is `"composition"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#bottom Online documentation}
     */
    bottom?: Sprite
    /**
     * If this is a tuple, the first member of the tuple is width and the second is height. Otherwise the size is both width and height.
     *
     * Only loaded if `type` is `"composition"`.
     *
     * ![In base game, the corner size is 8 and the sides are 1px long and 8px wide.](https://lua-api.factorio.com/2.0.16/static/images/ElementImageSetLayer_base_sizes.png)
     * @example
     * {
     *   -- How an ElementImageSet is loaded which has only one layer, which uses the corner_size shown in the diagram
     *   base = {position = {0, 17}, corner_size = 8}
     * }
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#corner_size Online documentation}
     */
    corner_size?: uint16 | readonly [uint16, uint16]
    /**
     * **Default:** `The `default_tileset` set in GuiStyle`
     *
     * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#filename Online documentation}
     */
    filename?: FileName
    /**
     * Mandatory if `corner_size` is defined. Only loaded if `type` is `"composition"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#position Online documentation}
     */
    position?: MapPosition
    /**
     * **Default:** `true`
     *
     * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#load_in_minimal_mode Online documentation}
     */
    load_in_minimal_mode?: bool
    /**
     * **Default:** `1`
     *
     * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#top_width Online documentation}
     */
    top_width?: SpriteSizeType
    /**
     * **Default:** `1`
     *
     * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#bottom_width Online documentation}
     */
    bottom_width?: SpriteSizeType
    /**
     * **Default:** `1`
     *
     * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#left_height Online documentation}
     */
    left_height?: SpriteSizeType
    /**
     * **Default:** `1`
     *
     * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#right_height Online documentation}
     */
    right_height?: SpriteSizeType
    /**
     * **Default:** `1`
     *
     * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#center_width Online documentation}
     */
    center_width?: SpriteSizeType
    /**
     * **Default:** `1`
     *
     * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#center_height Online documentation}
     */
    center_height?: SpriteSizeType
    /**
     * **Default:** `1`
     *
     * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#scale Online documentation}
     */
    scale?: double
    /**
     * Only loaded if `type` is `"composition"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#top_border Online documentation}
     */
    top_border?: int32
    /**
     * Only loaded if `type` is `"composition"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#right_border Online documentation}
     */
    right_border?: int32
    /**
     * Only loaded if `type` is `"composition"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#bottom_border Online documentation}
     */
    bottom_border?: int32
    /**
     * Only loaded if `type` is `"composition"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#left_border Online documentation}
     */
    left_border?: int32
    /**
     * Sets `top_border`, `right_border`, `bottom_border` and `left_border`.
     *
     * Only loaded if `corner_size` is not defined. Only loaded if `type` is `"composition"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#border Online documentation}
     */
    border?: int32
    /**
     * **Default:** `true`
     *
     * Only loaded if `type` is `"composition"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#stretch_monolith_image_to_size Online documentation}
     */
    stretch_monolith_image_to_size?: bool
    /**
     * **Default:** `false`
     *
     * Tiling is used to make a side (not corner) texture repeat instead of being stretched.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#left_tiling Online documentation}
     */
    left_tiling?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#right_tiling Online documentation}
     */
    right_tiling?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#top_tiling Online documentation}
     */
    top_tiling?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#bottom_tiling Online documentation}
     */
    bottom_tiling?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#center_tiling_vertical Online documentation}
     */
    center_tiling_vertical?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#center_tiling_horizontal Online documentation}
     */
    center_tiling_horizontal?: bool
    /**
     * **Default:** `0`
     *
     * Overall tiling is used to make the overall texture repeat instead of being stretched.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#overall_tiling_horizontal_size Online documentation}
     */
    overall_tiling_horizontal_size?: uint16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#overall_tiling_horizontal_spacing Online documentation}
     */
    overall_tiling_horizontal_spacing?: uint16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#overall_tiling_horizontal_padding Online documentation}
     */
    overall_tiling_horizontal_padding?: uint16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#overall_tiling_vertical_size Online documentation}
     */
    overall_tiling_vertical_size?: uint16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#overall_tiling_vertical_spacing Online documentation}
     */
    overall_tiling_vertical_spacing?: uint16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#overall_tiling_vertical_padding Online documentation}
     */
    overall_tiling_vertical_padding?: uint16
    custom_horizontal_tiling_sizes?: readonly uint32[]
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#opacity Online documentation}
     */
    opacity?: double
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#background_blur Online documentation}
     */
    background_blur?: bool
    /**
     * **Default:** ``4` if `background_blur` is `true``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#background_blur_sigma Online documentation}
     */
    background_blur_sigma?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#top_outer_border_shift Online documentation}
     */
    top_outer_border_shift?: int32
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#bottom_outer_border_shift Online documentation}
     */
    bottom_outer_border_shift?: int32
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#right_outer_border_shift Online documentation}
     */
    right_outer_border_shift?: int32
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html#left_outer_border_shift Online documentation}
     */
    left_outer_border_shift?: int32
  }
  /**
   * If this is loaded as a Sprite, it gets used as `center`.
   *
   * ![How the sprites are laid out graphically when using a composition type element image set layer.](https://lua-api.factorio.com/2.0.16/static/images/ElementImageSetLayer_properties.png)
   *
   * ![How the sprites are stretched when using a composition type element image set layer.](https://lua-api.factorio.com/2.0.16/static/images/ElementImageSetLayer_stretching.png)
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ElementImageSetLayer.html Online documentation}
   */
  export type ElementImageSetLayer = ElementImageSetLayerStruct | Sprite
  export interface EmptyWidgetStyleSpecification extends BaseStyleSpecification {
    readonly type: "empty_widget_style"
    graphical_set?: ElementImageSet
  }
  export interface EnemyEvolutionSettings {
    enabled: bool
    /**
     * Percentual increase in the evolution factor for every second (60 ticks)
     * @see {@link https://lua-api.factorio.com/2.0.16/types/EnemyEvolutionSettings.html#time_factor Online documentation}
     */
    time_factor: double
    /**
     * Percentual increase in the evolution factor for every destroyed spawner
     * @see {@link https://lua-api.factorio.com/2.0.16/types/EnemyEvolutionSettings.html#destroy_factor Online documentation}
     */
    destroy_factor: double
    /**
     * Percentual increase in the evolution factor for 1 pollution unit
     * @see {@link https://lua-api.factorio.com/2.0.16/types/EnemyEvolutionSettings.html#pollution_factor Online documentation}
     */
    pollution_factor: double
  }
  export interface EnemyExpansionSettings {
    enabled: bool
    /**
     * Distance in chunks from the furthest base around. This prevents expansions from reaching too far into the player's territory.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/EnemyExpansionSettings.html#max_expansion_distance Online documentation}
     */
    max_expansion_distance: uint32
    friendly_base_influence_radius: uint32
    enemy_building_influence_radius: uint32
    building_coefficient: double
    other_base_coefficient: double
    neighbouring_chunk_coefficient: double
    neighbouring_base_chunk_coefficient: double
    /**
     * A chunk has to have at most this much percent unbuildable tiles for it to be considered a candidate. This is to avoid chunks full of water to be marked as candidates.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/EnemyExpansionSettings.html#max_colliding_tiles_coefficient Online documentation}
     */
    max_colliding_tiles_coefficient: double
    /**
     * Size of the group that goes to build new base (the game interpolates between min size and max size based on evolution factor).
     * @see {@link https://lua-api.factorio.com/2.0.16/types/EnemyExpansionSettings.html#settler_group_min_size Online documentation}
     */
    settler_group_min_size: uint32
    settler_group_max_size: uint32
    /**
     * Ticks to expand to a single position for a base is used. Cooldown is calculated as follows: `cooldown = lerp(max_expansion_cooldown, min_expansion_cooldown, -e^2 + 2 * e)` where `lerp` is the linear interpolation function, and e is the current evolution factor.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/EnemyExpansionSettings.html#min_expansion_cooldown Online documentation}
     */
    min_expansion_cooldown: uint32
    max_expansion_cooldown: uint32
  }
  export interface EnemySpawnerAbsorption {
    absolute: double
    proportional: double
  }
  export interface EnemySpawnerGraphicsSet {
    animations?: AnimationVariations
    underwater_animations?: AnimationVariations
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/EnemySpawnerGraphicsSet.html#underwater_layer_offset Online documentation}
     */
    underwater_layer_offset?: int8
    water_effect_map_animations?: AnimationVariations
    integration?: SpriteVariations
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/EnemySpawnerGraphicsSet.html#random_animation_offset Online documentation}
     */
    random_animation_offset?: bool
  }
  /**
   * Specifies an amount of electric energy in joules, or electric energy per time in watts.
   *
   * Internally, the input in `Watt` or `Joule/second` is always converted into `Joule/tick`, where 1 second is equal to 60 ticks. This means it uses the following formula: `Power in Joule/tick = Power in Watt / 60`. See {@linkplain https://wiki.factorio.com/Units#Power Power}.
   *
   * Supported Multipliers:
   *
   * - `k`: 10^3, or 1 000
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
   *
   * - `R`: 10^27
   *
   * - `Q`: 10^30
   * @example
   * buffer_capacity = "5MJ"
   * input_flow_limit = "300W"
   * -- the following two lines result in the same power consumption:
   * energy_usage = "60W"
   * energy_usage = "1J" -- not recommended, Watt is convention for power
   * @see {@link https://lua-api.factorio.com/2.0.16/types/Energy.html Online documentation}
   */
  export type Energy = string
  /**
   * Loaded as one of the {@link BaseEnergySource} extensions, based on the value of the `type` key.
   *
   * ## Union members
   * - {@link ElectricEnergySource}: Loaded when the `type` is `"electric"`.
   * - {@link BurnerEnergySource}: Loaded when the `type` is `"burner"`.
   * - {@link HeatEnergySource}: Loaded when the `type` is `"heat"`.
   * - {@link FluidEnergySource}: Loaded when the `type` is `"fluid"`.
   * - {@link VoidEnergySource}: Loaded when the `type` is `"void"`.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/EnergySource.html Online documentation}
   */
  export type EnergySource =
    | ElectricEnergySource
    | BurnerEnergySource
    | HeatEnergySource
    | FluidEnergySource
    | VoidEnergySource
  export interface EnterVehicleTipTrigger extends CountBasedTipTrigger {
    readonly type: "enter-vehicle"
    vehicle?: EntityID
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/EnterVehicleTipTrigger.html#match_type_only Online documentation}
     */
    match_type_only?: bool
  }
  /**
   * A single tiles worth of animations used when building entities.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/EntityBuildAnimationPiece.html Online documentation}
   */
  export interface EntityBuildAnimationPiece {
    /**
     * The animation must have a total of 32 frames.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/EntityBuildAnimationPiece.html#top Online documentation}
     */
    top: Animation
    /**
     * The animation must have a total of 32 frames.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/EntityBuildAnimationPiece.html#body Online documentation}
     */
    body: Animation
  }
  /**
   * A set of animations used when building entities on space platforms. All EntityBuildAnimationPieces must have the same animation speed.
   * @see UtilitySprites.platform_entity_build_animations
   * @see {@link https://lua-api.factorio.com/2.0.16/prototypes/UtilitySprites.html#platform_entity_build_animations Online documentation}
   */
  export interface EntityBuildAnimations {
    back_left: EntityBuildAnimationPiece
    back_right: EntityBuildAnimationPiece
    front_left: EntityBuildAnimationPiece
    front_right: EntityBuildAnimationPiece
  }
  /**
   * The name of an {@link EntityPrototype}.
   * @example
   * "stone-furnace"
   * @example
   * "bulk-inserter"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/EntityID.html Online documentation}
   */
  export type EntityID = string
  /**
   * Struct type for {@link EntityIDFilter}
   * @see EntityIDFilter
   * @see {@link https://lua-api.factorio.com/2.0.16/types/EntityIDFilter.html Online documentation}
   */
  export interface EntityIDFilterStruct {
    name: EntityID
    quality?: QualityID
    /**
     * Only loaded if `quality` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/EntityIDFilter.html#comparator Online documentation}
     */
    comparator?: ComparatorString
  }
  export type EntityIDFilter = EntityIDFilterStruct | EntityID
  /**
   * An array containing the following values.
   *
   * If an entity is a {@link import("factorio:runtime").LuaEntityPrototype#is_building building} and has the `"player-creation"` flag set, it is considered for multiple enemy/unit behaviors:
   *
   * - Autonomous enemy attacks (usually triggered by pollution) can only attack within chunks that contain at least one entity that is both a building and a player-creation.
   *
   * - Enemy expansion considers entities that are both buildings and player-creations as "enemy" entities that may block expansion.
   *
   * ## Union members
   * - `"not-rotatable"`: Can't be rotated before or after placing.
   * - `"placeable-neutral"`: Determines the default force when placing entities in the map editor and using the *AUTO* option for the force.
   * - `"placeable-player"`: Determines the default force when placing entities in the map editor and using the *AUTO* option for the force.
   * - `"placeable-enemy"`: Determines the default force when placing entities in the map editor and using the *AUTO* option for the force.
   * - `"placeable-off-grid"`: Refers to the fact that most entities are placed on an invisible 'grid' within the world, entities with this flag do not have to line up with this grid (like trees and land-mines).
   * - `"player-creation"`: Makes it possible for the biter AI to target the entity as a distraction in distraction mode {@link defines.distraction.by_anything by_anything}. Makes it possible to blueprint, deconstruct, and repair the entity (can be turned off again using the specific flags). Enables smoke to be created automatically when building the entity. If the entity does not have {@link EntityPrototype#map_color EntityPrototype::map_color} set, this flag makes the entity appear on the map/minimap with the default color specified in the {@link UtilityConstants}.
   * - `"building-direction-8-way"`: Uses 45 degree angle increments when selecting direction.
   * - `"filter-directions"`: Used to automatically detect the proper direction, if possible. Used by base with the pump, train stop, and train signal.
   * - `"get-by-unit-number"`: When set, entity will be possible to obtain by using {@link import("factorio:runtime").LuaGameScript#get_entity_by_unit_number LuaGameScript::get_entity_by_unit_number}. It also changes input actions sent by a player to be selecting entity by unit number instead of a position which may help players in latency to select moving entities.
   * - `"breaths-air"`: This is used to specify that the entity breathes air, and so is affected by poison (currently {@linkplain https://wiki.factorio.com/Poison_capsule poison capsules} are the only source).
   * - `"not-repairable"`: Used to specify that the entity can not be 'healed' by repair-packs (or construction robots with repair packs)
   * - `"not-on-map"`: The entity does not get drawn on the map.
   * - `"not-deconstructable"`: The entity can not be deconstructed.
   * - `"not-blueprintable"`: The entity can not be used in blueprints.
   * - `"hide-alt-info"`: Hides the alt-info of an entity in alt-mode, for example the recipe icon.
   * - `"no-gap-fill-while-building"`
   * - `"not-flammable"`: Do not apply fire stickers to the entity.
   * - `"no-automated-item-removal"`: Prevents inserters and loaders from taking items from this entity.
   * - `"no-automated-item-insertion"`: Prevents inserters and loaders from inserting items into this entity.
   * - `"no-copy-paste"`: This flag does nothing when set in the data stage because it gets overridden by {@link EntityPrototype#allow_copy_paste EntityPrototype::allow_copy_paste}. Thus, it must be set on the entity via that property.
   * - `"not-selectable-in-game"`: Disallows selection of the entity even when a selection box is specified for other reasons. For example, selection boxes are used to determine the size of outlines to be shown when highlighting entities inside electric pole ranges. This flag does nothing when set in the data stage because it gets overridden by {@link EntityPrototype#selectable_in_game EntityPrototype::selectable_in_game}. Thus, it must be set on the entity via that property.
   * - `"not-upgradable"`: The entity can't be selected by the {@linkplain https://wiki.factorio.com/Upgrade_planner upgrade planner}.
   * - `"not-in-kill-statistics"`: The entity is not shown in the kill statistics.
   * - `"building-direction-16-way"`
   * - `"snap-to-rail-support-spot"`
   * - `"not-in-made-in"`: The entity is not shown in the made in property of recipe tooltips.
   * @example
   * flags = {"placeable-neutral", "player-creation"}
   * @see {@link https://lua-api.factorio.com/2.0.16/types/EntityPrototypeFlags.html Online documentation}
   */
  export type EntityPrototypeFlags = readonly (
    | "not-rotatable"
    | "placeable-neutral"
    | "placeable-player"
    | "placeable-enemy"
    | "placeable-off-grid"
    | "player-creation"
    | "building-direction-8-way"
    | "filter-directions"
    | "get-by-unit-number"
    | "breaths-air"
    | "not-repairable"
    | "not-on-map"
    | "not-deconstructable"
    | "not-blueprintable"
    | "hide-alt-info"
    | "no-gap-fill-while-building"
    | "not-flammable"
    | "no-automated-item-removal"
    | "no-automated-item-insertion"
    | "no-copy-paste"
    | "not-selectable-in-game"
    | "not-upgradable"
    | "not-in-kill-statistics"
    | "building-direction-16-way"
    | "snap-to-rail-support-spot"
    | "not-in-made-in"
  )[]
  /**
   * How far (in tiles) entities should be rendered outside the visible area of the screen.
   * @see UtilityConstants.entity_renderer_search_box_limits
   * @see {@link https://lua-api.factorio.com/2.0.16/prototypes/UtilityConstants.html#entity_renderer_search_box_limits Online documentation}
   */
  export interface EntityRendererSearchBoxLimits {
    /**
     * Min value 6, max value 15. Min value 6 to compensate for shadows.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/EntityRendererSearchBoxLimits.html#left Online documentation}
     */
    left: uint8
    /**
     * Min value 3, max value 15.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/EntityRendererSearchBoxLimits.html#top Online documentation}
     */
    top: uint8
    /**
     * Min value 3, max value 15.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/EntityRendererSearchBoxLimits.html#right Online documentation}
     */
    right: uint8
    /**
     * Min value 4, max value 15. Min value 4 to compensate for tall entities like electric poles.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/EntityRendererSearchBoxLimits.html#bottom Online documentation}
     */
    bottom: uint8
  }
  /**
   * ## Union members
   * - `"working"`
   * - `"normal"`
   * - `"ghost"`
   * - `"not-plugged-in-electric-network"`
   * - `"networks-connected"`
   * - `"networks-disconnected"`
   * - `"no-ammo"`
   * - `"waiting-for-target-to-be-built"`
   * - `"waiting-for-train"`
   * - `"no-power"`
   * - `"low-temperature"`
   * - `"charging"`
   * - `"discharging"`
   * - `"fully-charged"`
   * - `"no-fuel"`
   * - `"no-food"`
   * - `"out-of-logistic-network"`
   * - `"no-recipe"`
   * - `"no-ingredients"`
   * - `"no-input-fluid"`
   * - `"no-research-in-progress"`
   * - `"no-minable-resources"`
   * - `"low-input-fluid"`
   * - `"low-power"`
   * - `"not-connected-to-rail"`
   * - `"cant-divide-segments"`
   * - `"recharging-after-power-outage"`
   * - `"no-modules-to-transmit"`
   * - `"disabled-by-control-behavior"`
   * - `"opened-by-circuit-network"`
   * - `"closed-by-circuit-network"`
   * - `"disabled-by-script"`
   * - `"disabled"`
   * - `"turned-off-during-daytime"`
   * - `"fluid-ingredient-shortage"`
   * - `"item-ingredient-shortage"`
   * - `"full-output"`
   * - `"not-enough-space-in-output"`
   * - `"full-burnt-result-output"`
   * - `"marked-for-deconstruction"`
   * - `"missing-required-fluid"`
   * - `"missing-science-packs"`
   * - `"waiting-for-source-items"`
   * - `"waiting-for-space-in-destination"`
   * - `"preparing-rocket-for-launch"`
   * - `"waiting-to-launch-rocket"`
   * - `"waiting-for-space-in-platform-hub"`
   * - `"launching-rocket"`
   * - `"thrust-not-required"`
   * - `"not-enough-thrust"`
   * - `"on-the-way"`
   * - `"waiting-in-orbit"`
   * - `"waiting-for-rocket-to-arrive"`
   * - `"no-path"`
   * - `"broken"`
   * - `"none"`
   * - `"frozen"`
   * - `"paused"`
   * - `"not-connected-to-hub-or-pad"`
   * - `"computing-navigation"`
   * - `"no-filter"`
   * - `"waiting-at-stop"`
   * - `"destination-stop-full"`
   * - `"pipeline-overextended"`
   * - `"no-spot-seedable-by-inputs"`
   * - `"waiting-for-plants-to-grow"`
   * - `"recipe-not-researched"`
   * @see {@link https://lua-api.factorio.com/2.0.16/types/EntityStatus.html Online documentation}
   */
  export type EntityStatus =
    | "working"
    | "normal"
    | "ghost"
    | "not-plugged-in-electric-network"
    | "networks-connected"
    | "networks-disconnected"
    | "no-ammo"
    | "waiting-for-target-to-be-built"
    | "waiting-for-train"
    | "no-power"
    | "low-temperature"
    | "charging"
    | "discharging"
    | "fully-charged"
    | "no-fuel"
    | "no-food"
    | "out-of-logistic-network"
    | "no-recipe"
    | "no-ingredients"
    | "no-input-fluid"
    | "no-research-in-progress"
    | "no-minable-resources"
    | "low-input-fluid"
    | "low-power"
    | "not-connected-to-rail"
    | "cant-divide-segments"
    | "recharging-after-power-outage"
    | "no-modules-to-transmit"
    | "disabled-by-control-behavior"
    | "opened-by-circuit-network"
    | "closed-by-circuit-network"
    | "disabled-by-script"
    | "disabled"
    | "turned-off-during-daytime"
    | "fluid-ingredient-shortage"
    | "item-ingredient-shortage"
    | "full-output"
    | "not-enough-space-in-output"
    | "full-burnt-result-output"
    | "marked-for-deconstruction"
    | "missing-required-fluid"
    | "missing-science-packs"
    | "waiting-for-source-items"
    | "waiting-for-space-in-destination"
    | "preparing-rocket-for-launch"
    | "waiting-to-launch-rocket"
    | "waiting-for-space-in-platform-hub"
    | "launching-rocket"
    | "thrust-not-required"
    | "not-enough-thrust"
    | "on-the-way"
    | "waiting-in-orbit"
    | "waiting-for-rocket-to-arrive"
    | "no-path"
    | "broken"
    | "none"
    | "frozen"
    | "paused"
    | "not-connected-to-hub-or-pad"
    | "computing-navigation"
    | "no-filter"
    | "waiting-at-stop"
    | "destination-stop-full"
    | "pipeline-overextended"
    | "no-spot-seedable-by-inputs"
    | "waiting-for-plants-to-grow"
    | "recipe-not-researched"
  export interface EntityTransferTipTrigger extends CountBasedTipTrigger {
    readonly type: "entity-transfer"
    /**
     * **Default:** `any transfer`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/EntityTransferTipTrigger.html#transfer Online documentation}
     */
    transfer?: "in" | "out"
  }
  /**
   * The name of an {@link EquipmentCategory}.
   * @example
   * "armor"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/EquipmentCategoryID.html Online documentation}
   */
  export type EquipmentCategoryID = string
  /**
   * The name of an {@link EquipmentGridPrototype}.
   * @example
   * "small-equipment-grid"
   * @example
   * "spidertron-equipment-grid"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/EquipmentGridID.html Online documentation}
   */
  export type EquipmentGridID = string
  /**
   * The name of an {@link EquipmentPrototype}.
   * @example
   * "fusion-reactor-equipment"
   * @example
   * "exoskeleton-equipment"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/EquipmentID.html Online documentation}
   */
  export type EquipmentID = string
  /**
   * The shape and dimensions of an equipment module.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/EquipmentShape.html Online documentation}
   */
  export interface EquipmentShape {
    width: uint32
    height: uint32
    /**
     * The shape. When using "manual", `points` must be defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/EquipmentShape.html#type Online documentation}
     */
    readonly type: "full" | "manual"
    /**
     * Only used when when `type` is `"manual"`. Each inner array is a "position" inside width×height of the equipment. Each positions that is defined is a filled squares of the equipment shape. `{0, 0}` is the upper left corner of the equipment.
     * @example
     * -- A set of points which fall within the width/height - can't be empty
     * points =
     * {
     *   {0, 0}, {1, 0}, {2, 0}, {3, 0},
     *   {0, 1},                 {3, 1},
     *   {0, 2},                 {3, 2},
     *   {0, 3}, {1, 3}, {2, 3}, {3, 3}
     * }
     * @see {@link https://lua-api.factorio.com/2.0.16/types/EquipmentShape.html#points Online documentation}
     */
    points?: readonly (readonly uint32[])[]
  }
  /**
   * Struct type for {@link ExplosionDefinition}
   * @see ExplosionDefinition
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ExplosionDefinition.html Online documentation}
   */
  export interface ExplosionDefinitionStruct {
    name: EntityID
    offset?: Vector
  }
  export type ExplosionDefinition = EntityID | ExplosionDefinitionStruct
  /**
   * Struct type for {@link Fade}
   * @see Fade
   * @see {@link https://lua-api.factorio.com/2.0.16/types/Fade.html Online documentation}
   */
  export interface FadeStruct extends Attenuation {
    from?: ControlPoint
    to?: ControlPoint
  }
  export type Fade = FadeStruct | AttenuationType
  export interface Fades {
    /**
     * At least one of `fade_in`and `fade_out` needs to be defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Fades.html#fade_in Online documentation}
     */
    fade_in?: Fade
    /**
     * At least one of `fade_in`and `fade_out` needs to be defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Fades.html#fade_out Online documentation}
     */
    fade_out?: Fade
  }
  export interface FastBeltBendTipTrigger extends CountBasedTipTrigger {
    readonly type: "fast-belt-bend"
  }
  export interface FastReplaceTipTrigger extends CountBasedTipTrigger {
    readonly type: "fast-replace"
    source?: EntityID
    target?: EntityID
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FastReplaceTipTrigger.html#match_type_only Online documentation}
     */
    match_type_only?: bool
  }
  /**
   * A dictionary of feature flags and their status. It can be used to adjust prototypes based on whether the feature flags are enabled.
   * @example
   * -- sets coal to spoil only when the spoiling feature flag is enabled
   * if feature_flags["spoiling"] then
   *   data.raw.item.coal.spoil_ticks = 600
   * end
   * @see {@link https://lua-api.factorio.com/2.0.16/types/FeatureFlags.html Online documentation}
   */
  export interface FeatureFlags {
    quality: bool
    rail_bridges: bool
    space_travel: bool
    spoiling: bool
    freezing: bool
    segmented_units: bool
    expansion_shaders: bool
  }
  /**
   * A slash `"/"` is always used as the directory delimiter. A path always begins with the specification of a root, which can be one of three formats:
   *
   * - **core**: A path starting with `__core__` will access the resources in the data/core directory, these resources are always accessible regardless of mod specifications.
   *
   * - **base**: A path starting with `__base__` will access the resources in the base mod in data/base directory. These resources are usually available, as long as the base mod isn't removed/deactivated.
   *
   * - **mod path**: The format `__<mod-name>__` is placeholder for root of any other mod (mods/<mod-name>), and is accessible as long as the mod is active.
   * @example
   * filename = "__base__/graphics/entity/accumulator/accumulator.png"
   * @example
   * filename = "__a-mod__/animations/assembler.png"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/FileName.html Online documentation}
   */
  export type FileName = string
  export interface FlipEntityTipTrigger extends CountBasedTipTrigger {
    readonly type: "flip-entity"
  }
  export interface FlowStyleSpecification extends BaseStyleSpecification {
    readonly type: "flow_style"
    max_on_row?: int32
    horizontal_spacing?: int32
    vertical_spacing?: int32
  }
  /**
   * A fluid amount. The amount is stored as a fixed-size signed 64 bit integer, with 24 bits reserved for decimal precision, meaning the smallest value step is `1/2^24`.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidAmount.html Online documentation}
   */
  export type FluidAmount = double
  /**
   * Used to set the fluid amount an entity can hold, as well as the connection points for pipes leading into and out of the entity.
   *
   * Entities can have multiple fluidboxes. These can be part of a {@link FluidEnergySource}, or be specified directly in the entity prototype.
   *
   * A fluidbox can store only one type of fluid at a time. However, a fluid system (ie. multiple connected fluid boxes) can contain multiple different fluids, see {@linkplain https://wiki.factorio.com/Fluid_system#Fluid_mixing Fluid mixing}.
   * @example
   * fluid_box =
   * {
   *   volume = 200,
   *   pipe_covers = pipecoverspictures(),
   *   pipe_connections =
   *   {
   *     {flow_direction = "input-output", direction = defines.direction.west, position = {-1, 0.5}},
   *     {flow_direction = "input-output", direction = defines.direction.east, position = {1, 0.5}}
   *   },
   *   production_type = "input-output",
   *   filter = "water"
   * }
   * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidBox.html Online documentation}
   */
  export interface FluidBox {
    /**
     * Must be greater than 0.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidBox.html#volume Online documentation}
     */
    volume: FluidAmount
    /**
     * Connection points to connect to other fluidboxes. This is also marked as blue arrows in alt mode. Fluid may flow in or out depending on the `type` field of each connection.
     *
     * Connection points may depend on the direction the entity is facing. These connection points cannot share positions with one another or the connection points of another fluid box belonging to the same entity.
     *
     * Can't have more than 255 connections.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidBox.html#pipe_connections Online documentation}
     */
    pipe_connections: readonly PipeConnectionDefinition[]
    /**
     * Can be used to specify which fluid is allowed to enter this fluid box. See {@linkplain https://forums.factorio.com/viewtopic.php?f=28&t=46302 here}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidBox.html#filter Online documentation}
     */
    filter?: FluidID
    /**
     * **Default:** `"object"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidBox.html#render_layer Online documentation}
     */
    render_layer?: RenderLayer
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidBox.html#draw_only_when_connected Online documentation}
     */
    draw_only_when_connected?: bool
    /**
     * **Default:** `false`
     *
     * Hides the blue input/output arrows and icons at each connection point.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidBox.html#hide_connection_info Online documentation}
     */
    hide_connection_info?: bool
    /**
     * The pictures to show when another fluid box connects to this one.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidBox.html#pipe_covers Online documentation}
     */
    pipe_covers?: Sprite4Way
    pipe_covers_frozen?: Sprite4Way
    pipe_picture?: Sprite4Way
    pipe_picture_frozen?: Sprite4Way
    /**
     * The minimum temperature allowed into the fluidbox. Only applied if a `filter` is specified.
     * @example
     * minimum_temperature = 100.0
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidBox.html#minimum_temperature Online documentation}
     */
    minimum_temperature?: float
    /**
     * The maximum temperature allowed into the fluidbox. Only applied if a `filter` is specified.
     * @example
     * maximum_temperature = 1000.0
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidBox.html#maximum_temperature Online documentation}
     */
    maximum_temperature?: float
    /**
     * **Default:** `Value of `UtilityConstants::default_pipeline_extent``
     *
     * The max extent that a pipeline with this fluidbox can span. A given pipeline's extent is calculated as the min extent of all the fluidboxes that comprise it.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidBox.html#max_pipeline_extent Online documentation}
     */
    max_pipeline_extent?: uint32
    /**
     * **Default:** `"none"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidBox.html#production_type Online documentation}
     */
    production_type?: ProductionType
    /**
     * **Default:** `1`
     *
     * Set the secondary draw order for all orientations. Used to determine render order for sprites with the same `render_layer` in the same position. Sprites with a higher `secondary_draw_order` are drawn on top.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidBox.html#secondary_draw_order Online documentation}
     */
    secondary_draw_order?: int8
    /**
     * Set the secondary draw order for each orientation. Used to determine render order for sprites with the same `render_layer` in the same position. Sprites with a higher `secondary_draw_order` are drawn on top.
     *
     * The individual directions default to the value of `secondary_draw_order`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidBox.html#secondary_draw_orders Online documentation}
     */
    secondary_draw_orders?: FluidBoxSecondaryDrawOrders
    /**
     * Defaults to true if `pipe_picture` is not defined, otherwise defaults to false.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidBox.html#always_draw_covers Online documentation}
     */
    always_draw_covers?: bool
    /**
     * Array of the {@link WorkingVisualisation#name WorkingVisualisation::name} of working visualisations to enable when this fluidbox is present.
     *
     * If `draw_only_when_connected` is `true`, then the working visualisation are only enabled when this is *connected*.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidBox.html#enable_working_visualisations Online documentation}
     */
    enable_working_visualisations?: readonly string[]
  }
  export type FluidBoxLinkedConnectionID = uint32
  /**
   * @see FluidBox.secondary_draw_orders
   * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidBox.html#secondary_draw_orders Online documentation}
   */
  export interface FluidBoxSecondaryDrawOrders {
    north?: int8
    east?: int8
    south?: int8
    west?: int8
  }
  export interface FluidEnergySource extends BaseEnergySource {
    readonly type: "fluid"
    /**
     * All standard fluid box configurations are acceptable, but the type must be `"input"` or `"input-output"` to function correctly. `scale_fluid_usage = true`, `fluid_usage_per_tick`, or a filter on the fluidbox must be set to be able to calculate the fluid usage of the energy source.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidEnergySource.html#fluid_box Online documentation}
     */
    fluid_box: FluidBox
    smoke?: readonly SmokeSource[]
    light_flicker?: LightFlickeringDefinition
    /**
     * **Default:** `1`
     *
     * `1` means 100% effectivity. Must be greater than `0`. Multiplier of the energy output.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidEnergySource.html#effectivity Online documentation}
     */
    effectivity?: double
    /**
     * **Default:** `false`
     *
     * If set to `true`, the energy source will calculate power based on the fluid's `fuel_value`, else it will calculate based on fluid temperature.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidEnergySource.html#burns_fluid Online documentation}
     */
    burns_fluid?: bool
    /**
     * **Default:** `false`
     *
     * If set to `true`, the energy source will consume as much fluid as required to produce the desired power, otherwise it will consume as much as it is allowed to, wasting any excess.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidEnergySource.html#scale_fluid_usage Online documentation}
     */
    scale_fluid_usage?: bool
    /**
     * **Default:** `true`
     *
     * Property is only used when `burns_fluid` is `true` and the fluid has a {@link FluidPrototype#fuel_value fuel_value} of `0`, or when `burns_fluid` is `false` and the fluid is at its `default_temperature`.
     *
     * In those cases, this property determines whether the fluid should be destroyed, meaning that the fluid is consumed at the rate of `fluid_usage_per_tick`, without producing any power.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidEnergySource.html#destroy_non_fuel_fluid Online documentation}
     */
    destroy_non_fuel_fluid?: bool
    /**
     * **Default:** `0`
     *
     * The number of fluid units the energy source uses per tick. If used with `scale_fluid_usage`, this specifies the maximum. If this value is not set, `scale_energy_usage` is `false` and a fluid box filter is set, the game will attempt to calculate this value from the fluid box filter's fluid's `fuel_value` or `heat_capacity` and the entity's `energy_usage`. If `burns_fluid` is `false`, `maximum_temperature` will also be used. If the attempt of the game to calculate this value fails (`scale_energy_usage` is `false` and a fluid box filter is set), then `scale_energy_usage` will be forced to `true`, to prevent the energy source from being an infinite fluid sink. More context {@linkplain https://forums.factorio.com/90613 on the forums}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidEnergySource.html#fluid_usage_per_tick Online documentation}
     */
    fluid_usage_per_tick?: FluidAmount
    /**
     * **Default:** `0`
     *
     * `0` means unlimited maximum temperature. If this is non-zero while `scale_fluid_usage` is `false` and `fluid_usage_per_tick` is not specified, the game will use this value to calculate `fluid_usage_per_tick`. To do that, the filter on the `fluid_box` must be set.
     *
     * Only loaded if `burns_fluid` is `false`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidEnergySource.html#maximum_temperature Online documentation}
     */
    maximum_temperature?: float
  }
  /**
   * The name of a {@link FluidPrototype}.
   * @example
   * "water"
   * @example
   * "lubricant"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidID.html Online documentation}
   */
  export type FluidID = string
  /**
   * A fluid ingredient definition.
   * @example
   * {type="fluid", name="water", amount=50}
   * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidIngredientPrototype.html Online documentation}
   */
  export interface FluidIngredientPrototype {
    readonly type: "fluid"
    /**
     * The name of a {@link FluidPrototype}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidIngredientPrototype.html#name Online documentation}
     */
    name: FluidID
    /**
     * Can not be `<= 0`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidIngredientPrototype.html#amount Online documentation}
     */
    amount: FluidAmount
    /**
     * Sets the expected temperature of the fluid ingredient.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidIngredientPrototype.html#temperature Online documentation}
     */
    temperature?: float
    /**
     * If `temperature` is not set, this sets the expected minimum temperature of the fluid ingredient.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidIngredientPrototype.html#minimum_temperature Online documentation}
     */
    minimum_temperature?: float
    /**
     * If `temperature` is not set, this sets the expected maximum temperature of the fluid ingredient.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidIngredientPrototype.html#maximum_temperature Online documentation}
     */
    maximum_temperature?: float
    /**
     * **Default:** `0`
     *
     * Amount that should not be included in the consumption statistics, typically with a matching product having the same amount set as {@link FluidProductPrototype#ignored_by_stats ignored_by_stats}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidIngredientPrototype.html#ignored_by_stats Online documentation}
     */
    ignored_by_stats?: FluidAmount
    /**
     * **Default:** `0`
     *
     * Used to specify which {@link CraftingMachinePrototype#fluid_boxes CraftingMachinePrototype::fluid_boxes} this ingredient should use. It will use this one fluidbox. The index is 1-based and separate for input and output fluidboxes.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidIngredientPrototype.html#fluidbox_index Online documentation}
     */
    fluidbox_index?: uint32
    /**
     * **Default:** `2`
     *
     * Used to set crafting machine fluidbox volumes. Must be at least 1.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidIngredientPrototype.html#fluidbox_multiplier Online documentation}
     */
    fluidbox_multiplier?: uint8
  }
  /**
   * A fluid product definition.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidProductPrototype.html Online documentation}
   */
  export interface FluidProductPrototype {
    readonly type: "fluid"
    /**
     * The name of a {@link FluidPrototype}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidProductPrototype.html#name Online documentation}
     */
    name: FluidID
    /**
     * Can not be `< 0`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidProductPrototype.html#amount Online documentation}
     */
    amount?: FluidAmount
    /**
     * Only loaded, and mandatory if `amount` is not defined.
     *
     * Can not be `< 0`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidProductPrototype.html#amount_min Online documentation}
     */
    amount_min?: FluidAmount
    /**
     * Only loaded, and mandatory if `amount` is not defined.
     *
     * If set to a number that is less than `amount_min`, the game will use `amount_min` instead.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidProductPrototype.html#amount_max Online documentation}
     */
    amount_max?: FluidAmount
    /**
     * **Default:** `1`
     *
     * Value between 0 and 1, `0` for 0% chance and `1` for 100% chance.
     *
     * The effect of probability is no product, or a linear distribution on [min, max]. For a recipe with probability `p`, amount_min `min`, and amount_max `max`, the Expected Value of this product can be expressed as `p * (0.5 * (max + min))`. This is what will be shown in a recipe tooltip. The effect of `ignored_by_productivity` on the product is not shown.
     *
     * When `amount_min` and `amount_max` are not provided, `amount` applies as min and max. The Expected Value simplifies to `p * amount`, providing `0` product, or `amount` product, on recipe completion.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidProductPrototype.html#probability Online documentation}
     */
    probability?: double
    /**
     * **Default:** `0`
     *
     * Amount that should not be included in the fluid production statistics, typically with a matching ingredient having the same amount set as {@link FluidIngredientPrototype#ignored_by_stats ignored_by_stats}.
     *
     * If `ignored_by_stats` is larger than the amount crafted (for instance due to probability) it will instead show as consumed.
     *
     * Products with `ignored_by_stats` defined will not be set as recipe through the circuit network when using the product's fluid-signal.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidProductPrototype.html#ignored_by_stats Online documentation}
     */
    ignored_by_stats?: FluidAmount
    /**
     * **Default:** `0`
     *
     * Amount that should be deducted from any productivity induced bonus crafts.
     *
     * This value can safely be set larger than the maximum expected craft amount, any excess is ignored.
     *
     * This value is ignored when {@link RecipePrototype#allow_productivity allow_productivity} is `false`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidProductPrototype.html#ignored_by_productivity Online documentation}
     */
    ignored_by_productivity?: FluidAmount
    /**
     * The temperature of the fluid product.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidProductPrototype.html#temperature Online documentation}
     */
    temperature?: float
    /**
     * **Default:** `0`
     *
     * Used to specify which {@link CraftingMachinePrototype#fluid_boxes CraftingMachinePrototype::fluid_boxes} this product should use. It will use this one fluidbox. The index is 1-based and separate for input and output fluidboxes.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidProductPrototype.html#fluidbox_index Online documentation}
     */
    fluidbox_index?: uint32
    /**
     * **Default:** `true`
     *
     * When hovering over a recipe in the crafting menu the recipe tooltip will be shown. An additional item tooltip will be shown for every product, as a separate tooltip, if the item tooltip has a description and/or properties to show and if `show_details_in_recipe_tooltip` is `true`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidProductPrototype.html#show_details_in_recipe_tooltip Online documentation}
     */
    show_details_in_recipe_tooltip?: bool
  }
  /**
   * @see PumpPrototype.fluid_wagon_connector_graphics
   * @see {@link https://lua-api.factorio.com/2.0.16/prototypes/PumpPrototype.html#fluid_wagon_connector_graphics Online documentation}
   */
  export interface FluidWagonConnectorGraphics {
    load_animations: PumpConnectorGraphics
    unload_animations: PumpConnectorGraphics
  }
  export interface FogEffectProperties {
    /**
     * **Default:** `"vulcanus"`
     *
     * `gleba` type is rendered per chunk and opacity of fog depends on count of tiles with {@link TilePrototype#lowland_fog lowland_fog} set to `true` on the chunk.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FogEffectProperties.html#fog_type Online documentation}
     */
    fog_type?: "vulcanus" | "gleba"
    shape_noise_texture: EffectTexture
    detail_noise_texture: EffectTexture
    /**
     * **Default:** `{1, 1, 1, 1}`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FogEffectProperties.html#color1 Online documentation}
     */
    color1?: Color
    /**
     * **Default:** `{1, 1, 1, 1}`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FogEffectProperties.html#color2 Online documentation}
     */
    color2?: Color
  }
  export interface FogMaskShapeDefinition {
    rect: SimpleBoundingBox
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FogMaskShapeDefinition.html#falloff Online documentation}
     */
    falloff?: float
  }
  export interface FollowerRobotLifetimeModifier extends SimpleModifier {
    readonly type: "follower-robot-lifetime"
    /**
     * **Default:** `true`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FollowerRobotLifetimeModifier.html#infer_icon Online documentation}
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FollowerRobotLifetimeModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface FootprintParticle {
    /**
     * The tiles this footprint particle is shown on when the player walks over them.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FootprintParticle.html#tiles Online documentation}
     */
    tiles: readonly TileID[]
    /**
     * The name of the particle that should be created when the character walks on the defined tiles.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FootprintParticle.html#particle_name Online documentation}
     */
    particle_name?: ParticleID
    /**
     * **Default:** `false`
     *
     * Whether this footprint particle should be the default particle that is used for `tiles` that don't have an associated footprint particle.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FootprintParticle.html#use_as_default Online documentation}
     */
    use_as_default?: bool
  }
  export interface FootstepTriggerEffectItem extends CreateParticleTriggerEffectItem {
    tiles: readonly TileID[]
    /**
     * Can be used to specify multiple CreateParticleTriggerEffectItems. If this property is defined, all properties inherited from CreateParticleTriggerEffectItem are ignored.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FootstepTriggerEffectItem.html#actions Online documentation}
     */
    actions?: readonly CreateParticleTriggerEffectItem[]
    /**
     * **Default:** `false`
     *
     * When `true`, the trigger(s) defined in `actions` are the default triggers for tiles that don't have an associated footstep particle trigger. (ie. don't show up in one of the "tiles" lists).
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FootstepTriggerEffectItem.html#use_as_default Online documentation}
     */
    use_as_default?: bool
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
   * @see {@link https://lua-api.factorio.com/2.0.16/types/FootstepTriggerEffectList.html Online documentation}
   */
  export type FootstepTriggerEffectList = readonly FootstepTriggerEffectItem[]
  /**
   * One of the following values:
   *
   * ## Union members
   * - `"all"`
   * - `"enemy"`
   * - `"ally"`
   * - `"friend"`
   * - `"not-friend"`
   * - `"same"`
   * - `"not-same"`
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ForceCondition.html Online documentation}
   */
  export type ForceCondition = "all" | "enemy" | "ally" | "friend" | "not-friend" | "same" | "not-same"
  export interface FrameStyleSpecification extends BaseStyleSpecification {
    readonly type: "frame_style"
    graphical_set?: ElementImageSet
    horizontal_flow_style?: HorizontalFlowStyleSpecification
    vertical_flow_style?: VerticalFlowStyleSpecification
    header_flow_style?: HorizontalFlowStyleSpecification
    header_filler_style?: EmptyWidgetStyleSpecification
    title_style?: LabelStyleSpecification
    use_header_filler?: bool
    drag_by_title?: bool
    header_background?: ElementImageSet
    background_graphical_set?: ElementImageSet
    border?: BorderImageSet
  }
  export interface FrequencySizeRichness {
    frequency?: MapGenSize
    size?: MapGenSize
    richness?: MapGenSize
  }
  /**
   * The name of a {@link FuelCategory}.
   * @example
   * "chemical"
   * @example
   * "nuclear"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/FuelCategoryID.html Online documentation}
   */
  export type FuelCategoryID = string
  export interface FusionGeneratorDirectionGraphicsSet {
    animation?: Animation
    working_light?: Animation
    fusion_effect_uv_map?: Sprite
    fluid_input_graphics?: readonly FusionGeneratorFluidInputGraphics[]
  }
  export interface FusionGeneratorFluidInputGraphics {
    sprite?: Sprite
    working_light?: Sprite
    fusion_effect_uv_map?: Sprite
  }
  export interface FusionGeneratorGraphicsSet {
    north_graphics_set: FusionGeneratorDirectionGraphicsSet
    east_graphics_set: FusionGeneratorDirectionGraphicsSet
    south_graphics_set: FusionGeneratorDirectionGraphicsSet
    west_graphics_set: FusionGeneratorDirectionGraphicsSet
    /**
     * **Default:** `"object"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FusionGeneratorGraphicsSet.html#render_layer Online documentation}
     */
    render_layer?: RenderLayer
    light?: LightDefinition
    /**
     * **Default:** ``{1, 1, 1}``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FusionGeneratorGraphicsSet.html#glow_color Online documentation}
     */
    glow_color?: Color
  }
  export interface FusionReactorConnectionGraphics {
    pictures?: Animation
    working_light_pictures?: Animation
    fusion_effect_uv_map?: Sprite
  }
  export interface FusionReactorGraphicsSet {
    structure?: Sprite4Way
    /**
     * **Default:** `"object"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FusionReactorGraphicsSet.html#render_layer Online documentation}
     */
    render_layer?: RenderLayer
    /**
     * **Default:** ``{1, 1, 1}``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FusionReactorGraphicsSet.html#default_fuel_glow_color Online documentation}
     */
    default_fuel_glow_color?: Color
    light?: LightDefinition
    working_light_pictures?: Sprite4Way
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FusionReactorGraphicsSet.html#use_fuel_glow_color Online documentation}
     */
    use_fuel_glow_color?: bool
    fusion_effect_uv_map?: Sprite
    connections_graphics?: readonly FusionReactorConnectionGraphics[]
    direction_to_connections_graphics?: Record<DirectionString, readonly uint8[]>
    /**
     * Cannot be an empty string.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/FusionReactorGraphicsSet.html#plasma_category Online documentation}
     */
    plasma_category: NeighbourConnectableConnectionCategory
  }
  export interface GameControllerVibrationData {
    /**
     * **Default:** `0`
     *
     * Vibration intensity must be between 0 and 1.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GameControllerVibrationData.html#low_frequency_vibration_intensity Online documentation}
     */
    low_frequency_vibration_intensity?: float
    /**
     * **Default:** `0`
     *
     * Vibration intensity must be between 0 and 1.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GameControllerVibrationData.html#high_frequency_vibration_intensity Online documentation}
     */
    high_frequency_vibration_intensity?: float
    /**
     * **Default:** `0`
     *
     * Duration in milliseconds.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GameControllerVibrationData.html#duration Online documentation}
     */
    duration?: uint32
    /**
     * **Default:** `"character_actions"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GameControllerVibrationData.html#play_for Online documentation}
     */
    play_for?: PlayFor
  }
  export interface GameViewSettings {
    /**
     * If this is defined then it sets the default value for all other properties.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GameViewSettings.html#default_show_value Online documentation}
     */
    default_show_value?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GameViewSettings.html#show_controller_gui Online documentation}
     */
    show_controller_gui?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GameViewSettings.html#show_minimap Online documentation}
     */
    show_minimap?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GameViewSettings.html#show_research_info Online documentation}
     */
    show_research_info?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GameViewSettings.html#show_entity_info Online documentation}
     */
    show_entity_info?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GameViewSettings.html#show_alert_gui Online documentation}
     */
    show_alert_gui?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GameViewSettings.html#update_entity_selection Online documentation}
     */
    update_entity_selection?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GameViewSettings.html#show_rail_block_visualisation Online documentation}
     */
    show_rail_block_visualisation?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GameViewSettings.html#show_side_menu Online documentation}
     */
    show_side_menu?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GameViewSettings.html#show_map_view_options Online documentation}
     */
    show_map_view_options?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GameViewSettings.html#show_entity_tooltip Online documentation}
     */
    show_entity_tooltip?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GameViewSettings.html#show_quickbar Online documentation}
     */
    show_quickbar?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GameViewSettings.html#show_shortcut_bar Online documentation}
     */
    show_shortcut_bar?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GameViewSettings.html#show_crafting_queue Online documentation}
     */
    show_crafting_queue?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GameViewSettings.html#show_tool_bar Online documentation}
     */
    show_tool_bar?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GameViewSettings.html#show_hotkey_suggestions Online documentation}
     */
    show_hotkey_suggestions?: bool
  }
  export interface GateOverRailBuildTipTrigger extends CountBasedTipTrigger {
    readonly type: "gate-over-rail-build"
  }
  export interface GeneratingPowerTipTrigger extends CountBasedTipTrigger {
    readonly type: "generating-power"
  }
  export interface GhostShimmerConfig {
    tint: Color
    distortion: float
    blend_mode: int32
    visualize_borders: bool
    proportional_distortion: bool
    world_uv_modulo: int32
    /**
     * The array must have at least 6 elements.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GhostShimmerConfig.html#overlay_layers Online documentation}
     */
    overlay_layers: readonly GhostShimmerOverlayData[]
    /**
     * The array must have at least 6 elements.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GhostShimmerConfig.html#distortion_layers Online documentation}
     */
    distortion_layers: readonly GhostShimmerDistortionData[]
  }
  export interface GhostShimmerDistortionData {
    shape: int32
    intensity: float
    x: float
    y: float
  }
  export interface GhostShimmerOverlayData {
    blend_mode: int32
    shape: int32
    x: float
    y: float
    tint: Color
    cutoff: float
  }
  export interface GhostTintSet {
    ghost_tint: Color
    ghost_delivery_tint: Color
    tile_ghost_tint: Color
    tile_ghost_delivery_tint: Color
    /**
     * Wires are hard to read when the ghost_tint is very satured, so they use a separate tint color for better fine tuning.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GhostTintSet.html#wire_tint Online documentation}
     */
    wire_tint: Color
  }
  export interface GigaCargoHatchDefinition {
    hatch_graphics_back?: Animation
    hatch_graphics_front?: Animation
    /**
     * **Default:** `"higher-object-under"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GigaCargoHatchDefinition.html#hatch_render_layer_back Online documentation}
     */
    hatch_render_layer_back?: RenderLayer
    /**
     * **Default:** `"higher-object-above"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GigaCargoHatchDefinition.html#hatch_render_layer_front Online documentation}
     */
    hatch_render_layer_front?: RenderLayer
    covered_hatches: readonly uint32[]
    /**
     * Cannot use `fade_ticks`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GigaCargoHatchDefinition.html#opening_sound Online documentation}
     */
    opening_sound?: InterruptibleSound
    /**
     * Cannot use `fade_ticks`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GigaCargoHatchDefinition.html#closing_sound Online documentation}
     */
    closing_sound?: InterruptibleSound
  }
  export interface GiveItemModifier extends BaseModifier {
    readonly type: "give-item"
    /**
     * **Default:** `false`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GiveItemModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
    item: ItemID
    /**
     * **Default:** `"normal"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GiveItemModifier.html#quality Online documentation}
     */
    quality?: QualityID
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GiveItemModifier.html#count Online documentation}
     */
    count?: ItemCountType
  }
  export interface GlobalRecipeTints {
    /**
     * **Default:** ``{1, 1, 1, 1}``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GlobalRecipeTints.html#primary Online documentation}
     */
    primary?: Color
    /**
     * **Default:** ``{1, 1, 1, 1}``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GlobalRecipeTints.html#secondary Online documentation}
     */
    secondary?: Color
    /**
     * **Default:** ``{1, 1, 1, 1}``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GlobalRecipeTints.html#tertiary Online documentation}
     */
    tertiary?: Color
    /**
     * **Default:** ``{1, 1, 1, 1}``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GlobalRecipeTints.html#quaternary Online documentation}
     */
    quaternary?: Color
  }
  export interface GlobalTintEffectProperties {
    noise_texture: EffectTexture
    offset: Vector4f
    intensity: Vector4f
    scale_u: Vector4f
    scale_v: Vector4f
    global_intensity: float
    global_scale: float
    zoom_factor: float
    zoom_intensity: float
  }
  export interface GlowStyleSpecification extends BaseStyleSpecification {
    readonly type: "glow_style"
    image_set?: ElementImageSet
  }
  export interface GraphStyleSpecification extends BaseStyleSpecification {
    readonly type: "graph_style"
    background_color?: Color
    line_colors?: readonly Color[]
    horizontal_label_style?: LabelStyleSpecification
    vertical_label_style?: LabelStyleSpecification
    minimal_horizontal_label_spacing?: uint32
    minimal_vertical_label_spacing?: uint32
    horizontal_labels_margin?: uint32
    vertical_labels_margin?: uint32
    graph_top_margin?: uint32
    graph_right_margin?: uint32
    data_line_highlight_distance?: uint32
    selection_dot_radius?: uint32
    grid_lines_color?: Color
    guide_lines_color?: Color
    /**
     * Name of a {@link FontPrototype}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GraphStyleSpecification.html#font Online documentation}
     */
    font?: string
  }
  export interface GroupAttackTipTrigger extends CountBasedTipTrigger {
    readonly type: "group-attack"
  }
  /**
   * @see StreamAttackParameters.gun_center_shift
   * @see {@link https://lua-api.factorio.com/2.0.16/types/StreamAttackParameters.html#gun_center_shift Online documentation}
   */
  export interface GunShift4Way {
    north: Vector
    east?: Vector
    south?: Vector
    west?: Vector
  }
  export interface GunSpeedModifier extends BaseModifier {
    readonly type: "gun-speed"
    /**
     * **Default:** `true`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GunSpeedModifier.html#infer_icon Online documentation}
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GunSpeedModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
    /**
     * Name of the {@link AmmoCategory} that is affected.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GunSpeedModifier.html#ammo_category Online documentation}
     */
    ammo_category: AmmoCategoryID
    /**
     * Modification value, which will be added to the current gun speed modifier upon researching.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/GunSpeedModifier.html#modifier Online documentation}
     */
    modifier: double
  }
  /**
   * Used to specify heat capacity properties without a {@link HeatEnergySource heat energy source}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/HeatBuffer.html Online documentation}
   */
  export interface HeatBuffer {
    /**
     * Must be >= `default_temperature`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/HeatBuffer.html#max_temperature Online documentation}
     */
    max_temperature: double
    specific_heat: Energy
    max_transfer: Energy
    /**
     * **Default:** `15`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/HeatBuffer.html#default_temperature Online documentation}
     */
    default_temperature?: double
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/HeatBuffer.html#min_temperature_gradient Online documentation}
     */
    min_temperature_gradient?: double
    /**
     * **Default:** `15`
     *
     * Must be >= `default_temperature` and <= `max_temperature`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/HeatBuffer.html#min_working_temperature Online documentation}
     */
    min_working_temperature?: double
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/HeatBuffer.html#minimum_glow_temperature Online documentation}
     */
    minimum_glow_temperature?: float
    pipe_covers?: Sprite4Way
    heat_pipe_covers?: Sprite4Way
    heat_picture?: Sprite4Way
    heat_glow?: Sprite4Way
    /**
     * May contain up to 32 connections.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/HeatBuffer.html#connections Online documentation}
     */
    connections?: readonly HeatConnection[]
  }
  /**
   * Defines the connections for {@link HeatEnergySource} and {@link HeatBuffer}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/HeatConnection.html Online documentation}
   */
  export interface HeatConnection {
    /**
     * The location of the heat pipe connection, relative to the center of the entity in the north-facing direction.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/HeatConnection.html#position Online documentation}
     */
    position: MapPosition
    /**
     * The "outward" direction of this heat connection. For a connection to succeed, the other heat connection must face the opposite direction (a south-facing connection needs a north-facing connection to succeed). A connection rotates with the entity.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/HeatConnection.html#direction Online documentation}
     */
    direction: Direction
  }
  export interface HeatEnergySource extends BaseEnergySource {
    readonly type: "heat"
    /**
     * Must be >= `default_temperature`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/HeatEnergySource.html#max_temperature Online documentation}
     */
    max_temperature: double
    specific_heat: Energy
    max_transfer: Energy
    /**
     * **Default:** `15`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/HeatEnergySource.html#default_temperature Online documentation}
     */
    default_temperature?: double
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/HeatEnergySource.html#min_temperature_gradient Online documentation}
     */
    min_temperature_gradient?: double
    /**
     * **Default:** `15`
     *
     * Must be >= `default_temperature` and <= `max_temperature`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/HeatEnergySource.html#min_working_temperature Online documentation}
     */
    min_working_temperature?: double
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/HeatEnergySource.html#minimum_glow_temperature Online documentation}
     */
    minimum_glow_temperature?: float
    pipe_covers?: Sprite4Way
    heat_pipe_covers?: Sprite4Way
    heat_picture?: Sprite4Way
    heat_glow?: Sprite4Way
    /**
     * May contain up to 32 connections.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/HeatEnergySource.html#connections Online documentation}
     */
    connections?: readonly HeatConnection[]
    /**
     * **Default:** `0`
     *
     * Heat energy sources do not support producing pollution.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/HeatEnergySource.html#emissions_per_minute Online documentation}
     */
    emissions_per_minute?: Record<AirbornePollutantID, double>
  }
  /**
   * ## Union members
   * - `"left"`
   * - `"center"`
   * - `"right"`
   * @see {@link https://lua-api.factorio.com/2.0.16/types/HorizontalAlign.html Online documentation}
   */
  export type HorizontalAlign = "left" | "center" | "right"
  export interface HorizontalFlowStyleSpecification extends BaseStyleSpecification {
    readonly type: "horizontal_flow_style"
    horizontal_spacing?: int32
  }
  export interface HorizontalScrollBarStyleSpecification extends ScrollBarStyleSpecification {
    readonly type: "horizontal_scrollbar_style"
  }
  /**
   * One layer of an icon. Icon layering follows the following rules:
   *
   * - The rendering order of the individual icon layers follows the array order: Later added icon layers (higher index) are drawn on top of previously added icon layers (lower index).
   *
   * - By default the first icon layer will draw an outline (or shadow in GUI), other layers will draw it only if they have `draw_background` explicitly set to `true`. There are caveats to this though. See {@link IconData#draw_background the doc}.
   *
   * - When the final icon is displayed with transparency (e.g. a faded out alert), the icon layer overlap may look {@linkplain https://forums.factorio.com/viewtopic.php?p=575844#p575844 undesirable}.
   *
   * - When the final icon is displayed with a shadow (e.g. an item on the ground or on a belt when item shadows are turned on), each icon layer will {@linkplain https://forums.factorio.com/84888 cast a shadow} and the shadow is cast on the layer below it.
   *
   * - The final icon will always be resized and centered in GUI so that all its layers fit the target slot, but won't be resized when displayed on machines in alt-mode. For example: recipe first icon layer is size 128, scale 1, the icon group will be displayed at resolution /4 to fit the 32px GUI boxes, but will be displayed 4 times as large on buildings.
   *
   * - Shift values are based on {@link IconData#scale `expected_icon_size / 2`}.
   *
   * The game automatically generates {@linkplain https://factorio.com/blog/post/fff-291 icon mipmaps} for all icons. However, icons can have custom mipmaps defined. Custom mipmaps may help to achieve clearer icons at reduced size (e.g. when zooming out) than auto-generated mipmaps. If an icon file contains mipmaps then the game will automatically infer the icon's mipmap count. Icon files for custom mipmaps must contain half-size images with a geometric-ratio, for each mipmap level. Each next level is aligned to the upper-left corner, with no extra padding. Example sequence: `128x128@(0,0)`, `64x64@(128,0)`, `32x32@(192,0)` is three mipmaps.
   * @example
   * -- one icon layer
   * {
   *   icon = "__base__/graphics/icons/fluid/heavy-oil.png",
   *   icon_size = 64,
   *   scale = 0.5,
   *   shift = {4, -8}
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
   *     shift = {7, 8}
   *   }
   * }
   * @see {@link https://lua-api.factorio.com/2.0.16/types/IconData.html Online documentation}
   */
  export interface IconData {
    /**
     * Path to the icon file.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/IconData.html#icon Online documentation}
     */
    icon: FileName
    /**
     * **Default:** `64`
     *
     * The size of the square icon, in pixels. E.g. `32` for a 32px by 32px icon. Must be larger than `0`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/IconData.html#icon_size Online documentation}
     */
    icon_size?: SpriteSizeType
    /**
     * **Default:** ``{r=1, g=1, b=1, a=1}``
     *
     * The tint to apply to the icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/IconData.html#tint Online documentation}
     */
    tint?: Color
    /**
     * **Default:** ``{0, 0}``
     *
     * Used to offset the icon "layer" from the overall icon. The shift is applied from the center (so negative shifts are left and up, respectively). Shift values are "in pixels" where the overall icon is assumed to be `expected_icon_size / 2` pixels in width and height, meaning shift `{0, expected_icon_size/2}` will shift it by entire icon height down.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/IconData.html#shift Online documentation}
     */
    shift?: Vector
    /**
     * Defaults to `(expected_icon_size / 2) / icon_size`.
     *
     * Specifies the scale of the icon on the GUI scale. A scale of `2` means that the icon will be two times bigger on screen (and thus more pixelated).
     *
     * Expected icon sizes:
     *
     * - `512` for {@link SpaceLocationPrototype#starmap_icon SpaceLocationPrototype::starmap_icon}.
     *
     * - `256` for {@link TechnologyPrototype}.
     *
     * - `128` for {@link AchievementPrototype} and {@link ItemGroup}.
     *
     * - `32` for {@link ShortcutPrototype#icons ShortcutPrototype::icons} and `24` for {@link ShortcutPrototype#small_icons ShortcutPrototype::small_icons}.
     *
     * - `64` for the rest of the prototypes that use icons.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/IconData.html#scale Online documentation}
     */
    scale?: double
    /**
     * **Default:** ``true` for the first layer, `false` otherwise`
     *
     * Outline is drawn using signed distance field generated on load.One icon image, will have only one SDF generated. But if the image is used in multiple icon with different scales, outline width won't match the desired width in all the scales but the largest one.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/IconData.html#draw_background Online documentation}
     */
    draw_background?: bool
  }
  /**
   * Specification of where and how should be the alt-mode icons of entities be drawn.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/IconDrawSpecification.html Online documentation}
   */
  export interface IconDrawSpecification {
    /**
     * **Default:** ``{0, 0}``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/IconDrawSpecification.html#shift Online documentation}
     */
    shift?: Vector
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/IconDrawSpecification.html#scale Online documentation}
     */
    scale?: float
    /**
     * **Default:** `1`
     *
     * Scale of the icon when there are many items.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/IconDrawSpecification.html#scale_for_many Online documentation}
     */
    scale_for_many?: float
    /**
     * **Default:** `"entity-info-icon-below"`
     *
     * Render layer of the icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/IconDrawSpecification.html#renderLayer Online documentation}
     */
    renderLayer?: "entity-info-icon-below" | "entity-info-icon-above" | "air-entity-info-icon"
  }
  /**
   * Specification of where and how should be the icons of individual inventories be drawn.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/IconSequencePositioning.html Online documentation}
   */
  export interface IconSequencePositioning {
    inventory_index: defines.inventory
    /**
     * **Default:** `width of entity selection box / 0.75`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/IconSequencePositioning.html#max_icons_per_row Online documentation}
     */
    max_icons_per_row?: uint8
    /**
     * **Default:** `width of entity selection box / 1.5`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/IconSequencePositioning.html#max_icon_rows Online documentation}
     */
    max_icon_rows?: uint8
    /**
     * **Default:** `{0, 0.7}`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/IconSequencePositioning.html#shift Online documentation}
     */
    shift?: Vector
    /**
     * **Default:** `0.5`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/IconSequencePositioning.html#scale Online documentation}
     */
    scale?: float
    /**
     * **Default:** `1.1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/IconSequencePositioning.html#separation_multiplier Online documentation}
     */
    separation_multiplier?: float
    /**
     * **Default:** `-0.1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/IconSequencePositioning.html#multi_row_initial_height_modifier Online documentation}
     */
    multi_row_initial_height_modifier?: float
  }
  /**
   * @example
   * data.raw["gui-style"]["default"]["stretchy-sprite"] = {
   *   type = "image_style",
   *   vertically_stretchable = "on",
   *   horizontally_stretchable = "on",
   *   stretch_image_to_widget_size = true,
   * }
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ImageStyleSpecification.html Online documentation}
   */
  export interface ImageStyleSpecification extends BaseStyleSpecification {
    readonly type: "image_style"
    graphical_set?: ElementImageSet
    stretch_image_to_widget_size?: bool
    invert_colors_of_picture_when_hovered_or_toggled?: bool
  }
  /**
   * Item or fluid ingredient.
   *
   * ## Union members
   * - {@link ItemIngredientPrototype}: Loaded when the `type` is `"item"`.
   * - {@link FluidIngredientPrototype}: Loaded when the `type` is `"fluid"`.
   * @example
   * {type="item", name="steel-plate", amount=8} -- item ingredient
   * @example
   * {type="fluid", name="water", amount=50} -- fluid ingredient
   * @see {@link https://lua-api.factorio.com/2.0.16/types/IngredientPrototype.html Online documentation}
   */
  export type IngredientPrototype = ItemIngredientPrototype | FluidIngredientPrototype
  export interface InsertItemTriggerEffectItem extends TriggerEffectItem {
    readonly type: "insert-item"
    /**
     * Name of the {@link ItemPrototype} that should be created.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/InsertItemTriggerEffectItem.html#item Online documentation}
     */
    item: ItemID
    /**
     * **Default:** `"normal"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/InsertItemTriggerEffectItem.html#quality Online documentation}
     */
    quality?: QualityID
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/InsertItemTriggerEffectItem.html#count Online documentation}
     */
    count?: ItemCountType
  }
  export interface InserterStackSizeBonusModifier extends SimpleModifier {
    readonly type: "inserter-stack-size-bonus"
    /**
     * **Default:** `false`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/InserterStackSizeBonusModifier.html#infer_icon Online documentation}
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/InserterStackSizeBonusModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface InstantTriggerDelivery extends TriggerDeliveryItem {
    readonly type: "instant"
  }
  export interface InterruptibleSound {
    /**
     * At least one of sound and stopped_sound has to be defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/InterruptibleSound.html#sound Online documentation}
     */
    sound?: Sound
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/InterruptibleSound.html#minimal_change_per_tick Online documentation}
     */
    minimal_change_per_tick?: float
    /**
     * At least one of sound and stopped_sound has to be defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/InterruptibleSound.html#stopped_sound Online documentation}
     */
    stopped_sound?: Sound
    /**
     * **Default:** `1`
     *
     * Has to be greater or equal to `1`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/InterruptibleSound.html#minimal_sound_duration_for_stopped_sound Online documentation}
     */
    minimal_sound_duration_for_stopped_sound?: uint16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/InterruptibleSound.html#fade_ticks Online documentation}
     */
    fade_ticks?: uint32
  }
  export interface InvokeTileEffectTriggerEffectItem extends TriggerEffectItem {
    readonly type: "invoke-tile-trigger"
    tile_collision_mask?: CollisionMaskConnector
  }
  export type ItemCountType = uint32
  /**
   * The name of an {@link ItemGroup}.
   * @example
   * "logistics"
   * @example
   * "production"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ItemGroupID.html Online documentation}
   */
  export type ItemGroupID = string
  /**
   * @see UtilityConstants.item_health_bar_colors
   * @see {@link https://lua-api.factorio.com/2.0.16/prototypes/UtilityConstants.html#item_health_bar_colors Online documentation}
   */
  export interface ItemHealthColorData {
    /**
     * Cannot be negative.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ItemHealthColorData.html#threshold Online documentation}
     */
    threshold: float
    color: Color
  }
  /**
   * The name of an {@link ItemPrototype}.
   * @example
   * "iron-plate"
   * @example
   * "blueprint-book"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ItemID.html Online documentation}
   */
  export type ItemID = string
  /**
   * Struct type for {@link ItemIDFilter}
   * @see ItemIDFilter
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ItemIDFilter.html Online documentation}
   */
  export interface ItemIDFilterStruct {
    name: ItemID
    quality?: QualityID
    /**
     * Only loaded if `quality` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ItemIDFilter.html#comparator Online documentation}
     */
    comparator?: ComparatorString
  }
  export type ItemIDFilter = ItemIDFilterStruct | ItemID
  /**
   * An item ingredient definition.
   * @example
   * {type="item", name="steel-plate", amount=8}
   * @example
   * {type="item", name="iron-plate", amount=12}
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ItemIngredientPrototype.html Online documentation}
   */
  export interface ItemIngredientPrototype {
    readonly type: "item"
    name: ItemID
    /**
     * Cannot be `0`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ItemIngredientPrototype.html#amount Online documentation}
     */
    amount: uint16
    /**
     * **Default:** `0`
     *
     * Amount that should not be included in the consumption statistics, typically with a matching product having the same amount set as {@link ItemProductPrototype#ignored_by_stats ignored_by_stats}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ItemIngredientPrototype.html#ignored_by_stats Online documentation}
     */
    ignored_by_stats?: uint16
  }
  /**
   * An item product definition.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ItemProductPrototype.html Online documentation}
   */
  export interface ItemProductPrototype {
    readonly type: "item"
    /**
     * The name of an {@link ItemPrototype}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ItemProductPrototype.html#name Online documentation}
     */
    name: ItemID
    amount?: uint16
    /**
     * Only loaded, and mandatory if `amount` is not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ItemProductPrototype.html#amount_min Online documentation}
     */
    amount_min?: uint16
    /**
     * Only loaded, and mandatory if `amount` is not defined.
     *
     * If set to a number that is less than `amount_min`, the game will use `amount_min` instead.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ItemProductPrototype.html#amount_max Online documentation}
     */
    amount_max?: uint16
    /**
     * **Default:** `1`
     *
     * Value between 0 and 1, `0` for 0% chance and `1` for 100% chance.
     *
     * The effect of probability is no product, or a linear distribution on [min, max]. For a recipe with probability `p`, amount_min `min`, and amount_max `max`, the Expected Value of this product can be expressed as `p * (0.5 * (max + min))`. This is what will be shown in a recipe tooltip. The effect of `ignored_by_productivity` on the product is not shown.
     *
     * When `amount_min` and `amount_max` are not provided, `amount` applies as min and max. The Expected Value simplifies to `p * amount`, providing `0` product, or `amount` product, on recipe completion.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ItemProductPrototype.html#probability Online documentation}
     */
    probability?: double
    /**
     * **Default:** `0`
     *
     * Amount that should not be included in the item production statistics, typically with a matching ingredient having the same amount set as {@link ItemIngredientPrototype#ignored_by_stats ignored_by_stats}.
     *
     * If `ignored_by_stats` is larger than the amount crafted (for instance due to probability) it will instead show as consumed.
     *
     * Products with `ignored_by_stats` defined will not be set as recipe through the circuit network when using the product's item-signal.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ItemProductPrototype.html#ignored_by_stats Online documentation}
     */
    ignored_by_stats?: uint16
    /**
     * **Default:** `0`
     *
     * Amount that should be deducted from any productivity induced bonus crafts.
     *
     * This value can safely be set larger than the maximum expected craft amount, any excess is ignored.
     *
     * This value is ignored when {@link RecipePrototype#allow_productivity allow_productivity} is `false`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ItemProductPrototype.html#ignored_by_productivity Online documentation}
     */
    ignored_by_productivity?: uint16
    /**
     * **Default:** `true`
     *
     * When hovering over a recipe in the crafting menu the recipe tooltip will be shown. An additional item tooltip will be shown for every product, as a separate tooltip, if the item tooltip has a description and/or properties to show and if `show_details_in_recipe_tooltip` is `true`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ItemProductPrototype.html#show_details_in_recipe_tooltip Online documentation}
     */
    show_details_in_recipe_tooltip?: bool
    /**
     * **Default:** `0`
     *
     * Probability that a craft will yield one additional product. Also applies to bonus crafts caused by productivity.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ItemProductPrototype.html#extra_count_fraction Online documentation}
     */
    extra_count_fraction?: float
    /**
     * **Default:** `0`
     *
     * Must be >= `0` and < `1`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ItemProductPrototype.html#percent_spoiled Online documentation}
     */
    percent_spoiled?: float
  }
  /**
   * An array containing the following values.
   *
   * ## Union members
   * - `"draw-logistic-overlay"`: Whether the logistics areas of roboports should be drawn when holding this item. Used for example by the {@linkplain https://wiki.factorio.com/Deconstruction_planner deconstruction planner}.
   * - `"excluded-from-trash-unrequested"`: Whether the trash-unrequested feature skips this item.
   * - `"always-show"`: Always show the item in selection lists (item filter, logistic request etc.) even when locked recipe for that item is present.
   * - `"hide-from-bonus-gui"`: Item will not appear in the bonus gui.
   * - `"hide-from-fuel-tooltip"`: Item will not appear in the tooltips shown when hovering over a burner inventory with the fuel category the item is in.
   * - `"not-stackable"`: The item can never be stacked. Additionally, the item does not show an item count when in the cursor. This also prevents the item from stacking in assembling machine input slots, which otherwise can exceed the item stack size if required by the recipe.
   * - `"primary-place-result"`: Item will be preferred by construction bots when building the entity specified by the item's {@link ItemPrototype#place_result place_result}.
   * - `"mod-openable"`: Only works for {@link SelectionToolPrototype} and derived classes. Corresponds to the runtime {@link import("factorio:runtime").on_mod_item_opened on_mod_item_opened} event.
   * - `"only-in-cursor"`: Item is deleted when removed from the cursor by pressing `Q` ("clear cursor"). Used for example by the copy/paste tools.
   * - `"spawnable"`: Item is able to be spawned by a {@link ShortcutPrototype} or {@link CustomInputPrototype}.
   * - `"spoil-result"`
   * - `"ignore-spoil-time-modifier"`: Controls whether the spoil time ignores the spoil time modifier in the {@link DifficultySettings}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ItemPrototypeFlags.html Online documentation}
   */
  export type ItemPrototypeFlags = readonly (
    | "draw-logistic-overlay"
    | "excluded-from-trash-unrequested"
    | "always-show"
    | "hide-from-bonus-gui"
    | "hide-from-fuel-tooltip"
    | "not-stackable"
    | "primary-place-result"
    | "mod-openable"
    | "only-in-cursor"
    | "spawnable"
    | "spoil-result"
    | "ignore-spoil-time-modifier"
  )[]
  export type ItemStackIndex = uint16
  /**
   * The name of an {@link ItemSubGroup}.
   * @example
   * "capsule"
   * @example
   * "military-equipment"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ItemSubGroupID.html Online documentation}
   */
  export type ItemSubGroupID = string
  /**
   * Item that when placed creates this entity/tile.
   * @example
   * {item = "iron-chest", count = 1}
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ItemToPlace.html Online documentation}
   */
  export interface ItemToPlace {
    /**
     * The item used to place this entity/tile.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ItemToPlace.html#item Online documentation}
     */
    item: ItemID
    /**
     * How many items are used to place one of this entity/tile. Can't be larger than the stack size of the item.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ItemToPlace.html#count Online documentation}
     */
    count: ItemCountType
  }
  export interface KillTipTrigger extends CountBasedTipTrigger {
    readonly type: "kill"
    entity?: EntityID
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/KillTipTrigger.html#match_type_only Online documentation}
     */
    match_type_only?: bool
    damage_type?: DamageTypeID
  }
  export interface LabelStyleSpecification extends BaseStyleSpecification {
    readonly type: "label_style"
    /**
     * Name of a {@link FontPrototype}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LabelStyleSpecification.html#font Online documentation}
     */
    font?: string
    font_color?: Color
    hovered_font_color?: Color
    game_controller_hovered_font_color?: Color
    clicked_font_color?: Color
    disabled_font_color?: Color
    parent_hovered_font_color?: Color
    rich_text_setting?: RichTextSetting
    single_line?: bool
    underlined?: bool
    rich_text_highlight_error_color?: Color
    rich_text_highlight_warning_color?: Color
    rich_text_highlight_ok_color?: Color
  }
  export interface LaboratoryProductivityModifier extends SimpleModifier {
    readonly type: "laboratory-productivity"
    /**
     * **Default:** `true`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LaboratoryProductivityModifier.html#infer_icon Online documentation}
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LaboratoryProductivityModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface LaboratorySpeedModifier extends SimpleModifier {
    readonly type: "laboratory-speed"
    /**
     * **Default:** `true`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LaboratorySpeedModifier.html#infer_icon Online documentation}
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LaboratorySpeedModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  /**
   * Struct type for {@link LayeredSound}
   * @see LayeredSound
   * @see {@link https://lua-api.factorio.com/2.0.16/types/LayeredSound.html Online documentation}
   */
  export interface LayeredSoundStruct {
    layers: readonly Sound[]
  }
  export type LayeredSound = LayeredSoundStruct | Sound
  /**
   * Struct type for {@link LayeredSprite}
   * @see LayeredSprite
   * @see {@link https://lua-api.factorio.com/2.0.16/types/LayeredSprite.html Online documentation}
   */
  export interface LayeredSpriteStruct extends Sprite {
    render_layer: RenderLayer
  }
  export type LayeredSprite = LayeredSpriteStruct | readonly LayeredSprite[]
  export type LayeredSpriteVariations = readonly LayeredSprite[]
  /**
   * Struct type for {@link LightDefinition}
   * @see LightDefinition
   * @see {@link https://lua-api.factorio.com/2.0.16/types/LightDefinition.html Online documentation}
   */
  export interface LightDefinitionStruct {
    /**
     * **Default:** `"basic"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightDefinition.html#type Online documentation}
     */
    readonly type?: "basic" | "oriented"
    /**
     * Only loaded, and mandatory if `type` is `"oriented"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightDefinition.html#picture Online documentation}
     */
    picture?: Sprite
    /**
     * **Default:** `0`
     *
     * Only loaded if `type` is `"oriented"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightDefinition.html#rotation_shift Online documentation}
     */
    rotation_shift?: RealOrientation
    /**
     * Brightness of the light in the range `[0, 1]`, where `0` is no light and `1` is the maximum light.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightDefinition.html#intensity Online documentation}
     */
    intensity: float
    /**
     * The radius of the light in tiles. Note that the light gets darker near the edges, so the effective size of the light will appear to be smaller.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightDefinition.html#size Online documentation}
     */
    size: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightDefinition.html#source_orientation_offset Online documentation}
     */
    source_orientation_offset?: RealOrientation
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightDefinition.html#add_perspective Online documentation}
     */
    add_perspective?: bool
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightDefinition.html#flicker_interval Online documentation}
     */
    flicker_interval?: uint8
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightDefinition.html#flicker_min_modifier Online documentation}
     */
    flicker_min_modifier?: float
    /**
     * **Default:** `Value of `flicker_min_modifier``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightDefinition.html#flicker_max_modifier Online documentation}
     */
    flicker_max_modifier?: float
    /**
     * **Default:** `false`
     *
     * Offsets tick used to calculate flicker by position hash. Useful to desynchronize flickering of multiple stationary lights.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightDefinition.html#offset_flicker Online documentation}
     */
    offset_flicker?: bool
    shift?: Vector
    /**
     * **Default:** ``{r=1, g=1, b=1}``
     *
     * Color of the light.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightDefinition.html#color Online documentation}
     */
    color?: Color
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightDefinition.html#minimum_darkness Online documentation}
     */
    minimum_darkness?: float
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
   * @see {@link https://lua-api.factorio.com/2.0.16/types/LightDefinition.html Online documentation}
   */
  export type LightDefinition =
    | LightDefinitionStruct
    | readonly {
        /**
         * **Default:** `"basic"`
         * @see {@link https://lua-api.factorio.com/2.0.16/types/LightDefinition.html#type Online documentation}
         */
        readonly type?: "basic" | "oriented"
        /**
         * Only loaded, and mandatory if `type` is `"oriented"`.
         * @see {@link https://lua-api.factorio.com/2.0.16/types/LightDefinition.html#picture Online documentation}
         */
        picture?: Sprite
        /**
         * **Default:** `0`
         *
         * Only loaded if `type` is `"oriented"`.
         * @see {@link https://lua-api.factorio.com/2.0.16/types/LightDefinition.html#rotation_shift Online documentation}
         */
        rotation_shift?: RealOrientation
        /**
         * Brightness of the light in the range `[0, 1]`, where `0` is no light and `1` is the maximum light.
         * @see {@link https://lua-api.factorio.com/2.0.16/types/LightDefinition.html#intensity Online documentation}
         */
        intensity: float
        /**
         * The radius of the light in tiles. Note that the light gets darker near the edges, so the effective size of the light will appear to be smaller.
         * @see {@link https://lua-api.factorio.com/2.0.16/types/LightDefinition.html#size Online documentation}
         */
        size: float
        /**
         * **Default:** `0`
         * @see {@link https://lua-api.factorio.com/2.0.16/types/LightDefinition.html#source_orientation_offset Online documentation}
         */
        source_orientation_offset?: RealOrientation
        /**
         * **Default:** `false`
         * @see {@link https://lua-api.factorio.com/2.0.16/types/LightDefinition.html#add_perspective Online documentation}
         */
        add_perspective?: bool
        /**
         * **Default:** `0`
         * @see {@link https://lua-api.factorio.com/2.0.16/types/LightDefinition.html#flicker_interval Online documentation}
         */
        flicker_interval?: uint8
        /**
         * **Default:** `1`
         * @see {@link https://lua-api.factorio.com/2.0.16/types/LightDefinition.html#flicker_min_modifier Online documentation}
         */
        flicker_min_modifier?: float
        /**
         * **Default:** `Value of `flicker_min_modifier``
         * @see {@link https://lua-api.factorio.com/2.0.16/types/LightDefinition.html#flicker_max_modifier Online documentation}
         */
        flicker_max_modifier?: float
        /**
         * **Default:** `false`
         *
         * Offsets tick used to calculate flicker by position hash. Useful to desynchronize flickering of multiple stationary lights.
         * @see {@link https://lua-api.factorio.com/2.0.16/types/LightDefinition.html#offset_flicker Online documentation}
         */
        offset_flicker?: bool
        shift?: Vector
        /**
         * **Default:** ``{r=1, g=1, b=1}``
         *
         * Color of the light.
         * @see {@link https://lua-api.factorio.com/2.0.16/types/LightDefinition.html#color Online documentation}
         */
        color?: Color
        /**
         * **Default:** `0`
         * @see {@link https://lua-api.factorio.com/2.0.16/types/LightDefinition.html#minimum_darkness Online documentation}
         */
        minimum_darkness?: float
      }[]
  /**
   * Specifies the light flicker. Note that this defaults to "showing a white light" instead of the usually expected "showing nothing".
   * @see {@link https://lua-api.factorio.com/2.0.16/types/LightFlickeringDefinition.html Online documentation}
   */
  export interface LightFlickeringDefinition {
    /**
     * **Default:** `0.2`
     *
     * Brightness of the light in the range `[0, 1]` where `0` is no light and `1` is the maximum light.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightFlickeringDefinition.html#minimum_intensity Online documentation}
     */
    minimum_intensity?: float
    /**
     * **Default:** `0.8`
     *
     * Brightness of the light in the range `[0, 1]` where `0` is no light and `1` is the maximum light.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightFlickeringDefinition.html#maximum_intensity Online documentation}
     */
    maximum_intensity?: float
    /**
     * **Default:** `0.3`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightFlickeringDefinition.html#derivation_change_frequency Online documentation}
     */
    derivation_change_frequency?: float
    /**
     * **Default:** `0.06`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightFlickeringDefinition.html#derivation_change_deviation Online documentation}
     */
    derivation_change_deviation?: float
    /**
     * **Default:** `0.02`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightFlickeringDefinition.html#border_fix_speed Online documentation}
     */
    border_fix_speed?: float
    /**
     * **Default:** `0.5`
     *
     * The radius of the light in tiles. Note, that the light gets darker near the edges, so the effective size of the light seems to be smaller.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightFlickeringDefinition.html#minimum_light_size Online documentation}
     */
    minimum_light_size?: float
    /**
     * **Default:** `0.5`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightFlickeringDefinition.html#light_intensity_to_size_coefficient Online documentation}
     */
    light_intensity_to_size_coefficient?: float
    /**
     * **Default:** `{r=1, g=1, b=1} (White)`
     *
     * Color of the light.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightFlickeringDefinition.html#color Online documentation}
     */
    color?: Color
  }
  export interface LightProperties {
    /**
     * **Default:** `{1, 1, 1, 1}`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightProperties.html#color Online documentation}
     */
    color?: Color
    /**
     * **Default:** `{1, 1, 1}`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightProperties.html#direction Online documentation}
     */
    direction?: Vector3D
  }
  export interface LightningGraphicsSet {
    /**
     * If not empty, enables the lightning shader.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightningGraphicsSet.html#shader_configuration Online documentation}
     */
    shader_configuration?: readonly LightningShaderConfiguration[]
    /**
     * **Default:** `0.005`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightningGraphicsSet.html#bolt_half_width Online documentation}
     */
    bolt_half_width?: float
    /**
     * **Default:** `0.05`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightningGraphicsSet.html#bolt_midpoint_variance Online documentation}
     */
    bolt_midpoint_variance?: float
    /**
     * **Default:** `0.35`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightningGraphicsSet.html#max_bolt_offset Online documentation}
     */
    max_bolt_offset?: float
    /**
     * **Default:** `0.9`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightningGraphicsSet.html#max_fork_probability Online documentation}
     */
    max_fork_probability?: float
    /**
     * **Default:** `0.5`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightningGraphicsSet.html#min_relative_fork_length Online documentation}
     */
    min_relative_fork_length?: float
    /**
     * **Default:** `0.7`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightningGraphicsSet.html#max_relative_fork_length Online documentation}
     */
    max_relative_fork_length?: float
    /**
     * **Default:** `0.05`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightningGraphicsSet.html#fork_orientation_variance Online documentation}
     */
    fork_orientation_variance?: float
    /**
     * **Default:** `0.7`
     *
     * Cannot be 1.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightningGraphicsSet.html#fork_intensity_multiplier Online documentation}
     */
    fork_intensity_multiplier?: float
    /**
     * **Default:** `0.2`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightningGraphicsSet.html#relative_cloud_fork_length Online documentation}
     */
    relative_cloud_fork_length?: float
    /**
     * **Default:** `0.015`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightningGraphicsSet.html#cloud_fork_orientation_variance Online documentation}
     */
    cloud_fork_orientation_variance?: float
    /**
     * **Default:** `2`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightningGraphicsSet.html#min_ground_streamer_distance Online documentation}
     */
    min_ground_streamer_distance?: float
    /**
     * **Default:** `4`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightningGraphicsSet.html#max_ground_streamer_distance Online documentation}
     */
    max_ground_streamer_distance?: float
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightningGraphicsSet.html#ground_streamer_variance Online documentation}
     */
    ground_streamer_variance?: float
    /**
     * **Default:** `5`
     *
     * Cannot be 255.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightningGraphicsSet.html#cloud_forks Online documentation}
     */
    cloud_forks?: uint8
    /**
     * **Default:** `3`
     *
     * Must be less than or equal to `bolt_detail_level`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightningGraphicsSet.html#cloud_detail_level Online documentation}
     */
    cloud_detail_level?: uint8
    /**
     * **Default:** `6`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightningGraphicsSet.html#bolt_detail_level Online documentation}
     */
    bolt_detail_level?: uint8
    cloud_background?: Animation
    explosion?: AnimationVariations
    attractor_hit_animation?: Animation
    ground_streamers?: readonly Animation[]
    light?: LightDefinition
  }
  export interface LightningPriorityRule extends LightningRuleBase {
    priority_bonus: int32
  }
  export interface LightningProperties {
    lightnings_per_chunk_per_tick: double
    search_radius: double
    /**
     * Cannot be an empty array. Names of {@link LightningPrototype lightning entities}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LightningProperties.html#lightning_types Online documentation}
     */
    lightning_types: readonly EntityID[]
    priority_rules: readonly LightningPriorityRule[]
    exemption_rules: readonly LightningRuleBase[]
  }
  export interface LightningRuleBase {
    readonly type: "impact-soundset" | "prototype" | "id" | "countAsRockForFilteredDeconstruction"
    string: string
  }
  /**
   * @see LightningGraphicsSet.shader_configuration
   * @see {@link https://lua-api.factorio.com/2.0.16/types/LightningGraphicsSet.html#shader_configuration Online documentation}
   */
  export interface LightningShaderConfiguration {
    color: Color
    distortion: float
    thickness: float
    power: float
  }
  export interface LimitChestTipTrigger extends CountBasedTipTrigger {
    readonly type: "limit-chest"
  }
  export interface LineStyleSpecification extends BaseStyleSpecification {
    readonly type: "line_style"
    border?: BorderImageSet
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
   * @see {@link https://lua-api.factorio.com/2.0.16/types/LineTriggerItem.html Online documentation}
   */
  export interface LineTriggerItem extends TriggerItem {
    readonly type: "line"
    range: double
    width: double
    range_effects?: TriggerEffect
  }
  /**
   * @see LinkedBeltPrototype.structure
   * @see {@link https://lua-api.factorio.com/2.0.16/prototypes/LinkedBeltPrototype.html#structure Online documentation}
   */
  export interface LinkedBeltStructure {
    direction_in?: Sprite4Way
    direction_out?: Sprite4Way
    back_patch?: Sprite4Way
    front_patch?: Sprite4Way
    direction_in_side_loading?: Sprite4Way
    direction_out_side_loading?: Sprite4Way
  }
  /**
   * The internal name of a game control (key binding).
   *
   * ## Union members
   * - `"move-up"`
   * - `"move-down"`
   * - `"move-left"`
   * - `"move-right"`
   * - `"open-character-gui"`
   * - `"open-gui"`
   * - `"confirm-gui"`
   * - `"toggle-free-cursor"`
   * - `"mine"`
   * - `"build"`
   * - `"build-ghost"`
   * - `"super-forced-build"`
   * - `"clear-cursor"`
   * - `"pipette"`
   * - `"rotate"`
   * - `"reverse-rotate"`
   * - `"flip-horizontal"`
   * - `"flip-vertical"`
   * - `"pick-items"`
   * - `"drop-cursor"`
   * - `"show-info"`
   * - `"shoot-enemy"`
   * - `"shoot-selected"`
   * - `"next-weapon"`
   * - `"toggle-driving"`
   * - `"zoom-in"`
   * - `"zoom-out"`
   * - `"use-item"`
   * - `"alternative-use-item"`
   * - `"toggle-console"`
   * - `"copy-entity-settings"`
   * - `"paste-entity-settings"`
   * - `"controller-gui-logistics-tab"`
   * - `"controller-gui-character-tab"`
   * - `"controller-gui-crafting-tab"`
   * - `"toggle-rail-layer"`
   * - `"select-for-blueprint"`
   * - `"select-for-cancel-deconstruct"`
   * - `"select-for-super-forced-deconstruct"`
   * - `"reverse-select"`
   * - `"alt-reverse-select"`
   * - `"deselect"`
   * - `"cycle-blueprint-forwards"`
   * - `"cycle-blueprint-backwards"`
   * - `"focus-search"`
   * - `"larger-terrain-building-area"`
   * - `"smaller-terrain-building-area"`
   * - `"remove-pole-cables"`
   * - `"build-with-obstacle-avoidance"`
   * - `"add-station"`
   * - `"add-temporary-station"`
   * - `"rename-all"`
   * - `"fast-wait-condition"`
   * - `"drag-map"`
   * - `"move-tag"`
   * - `"place-in-chat"`
   * - `"place-ping"`
   * - `"pin"`
   * - `"activate-tooltip"`
   * - `"next-surface"`
   * - `"previous-surface"`
   * - `"cycle-quality-up"`
   * - `"cycle-quality-down"`
   * - `"craft"`
   * - `"craft-5"`
   * - `"craft-all"`
   * - `"cancel-craft"`
   * - `"cancel-craft-5"`
   * - `"cancel-craft-all"`
   * - `"pick-item"`
   * - `"stack-transfer"`
   * - `"inventory-transfer"`
   * - `"fast-entity-transfer"`
   * - `"cursor-split"`
   * - `"stack-split"`
   * - `"inventory-split"`
   * - `"fast-entity-split"`
   * - `"toggle-filter"`
   * - `"open-item"`
   * - `"copy-inventory-filter"`
   * - `"paste-inventory-filter"`
   * - `"show-quick-panel"`
   * - `"next-quick-panel-page"`
   * - `"previous-quick-panel-page"`
   * - `"next-quick-panel-tab"`
   * - `"previous-quick-panel-tab"`
   * - `"rotate-active-quick-bars"`
   * - `"next-active-quick-bar"`
   * - `"previous-active-quick-bar"`
   * - `"quick-bar-button-1"`
   * - `"quick-bar-button-2"`
   * - `"quick-bar-button-3"`
   * - `"quick-bar-button-4"`
   * - `"quick-bar-button-5"`
   * - `"quick-bar-button-6"`
   * - `"quick-bar-button-7"`
   * - `"quick-bar-button-8"`
   * - `"quick-bar-button-9"`
   * - `"quick-bar-button-10"`
   * - `"quick-bar-button-1-secondary"`
   * - `"quick-bar-button-2-secondary"`
   * - `"quick-bar-button-3-secondary"`
   * - `"quick-bar-button-4-secondary"`
   * - `"quick-bar-button-5-secondary"`
   * - `"quick-bar-button-6-secondary"`
   * - `"quick-bar-button-7-secondary"`
   * - `"quick-bar-button-8-secondary"`
   * - `"quick-bar-button-9-secondary"`
   * - `"quick-bar-button-10-secondary"`
   * - `"action-bar-select-page-1"`
   * - `"action-bar-select-page-2"`
   * - `"action-bar-select-page-3"`
   * - `"action-bar-select-page-4"`
   * - `"action-bar-select-page-5"`
   * - `"action-bar-select-page-6"`
   * - `"action-bar-select-page-7"`
   * - `"action-bar-select-page-8"`
   * - `"action-bar-select-page-9"`
   * - `"action-bar-select-page-10"`
   * - `"copy"`
   * - `"cut"`
   * - `"paste"`
   * - `"cycle-clipboard-forwards"`
   * - `"cycle-clipboard-backwards"`
   * - `"undo"`
   * - `"redo"`
   * - `"toggle-menu"`
   * - `"toggle-map"`
   * - `"close-menu"`
   * - `"open-technology-gui"`
   * - `"production-statistics"`
   * - `"logistic-networks"`
   * - `"toggle-blueprint-library"`
   * - `"open-trains-gui"`
   * - `"open-factoriopedia"`
   * - `"back"`
   * - `"forward"`
   * - `"pause-game"`
   * - `"confirm-message"`
   * - `"previous-technology"`
   * - `"previous-mod"`
   * - `"connect-train"`
   * - `"disconnect-train"`
   * - `"submit-feedback"`
   * - `"editor-next-variation"`
   * - `"editor-previous-variation"`
   * - `"editor-clone-item"`
   * - `"editor-delete-item"`
   * - `"editor-toggle-pause"`
   * - `"editor-tick-once"`
   * - `"editor-speed-up"`
   * - `"editor-speed-down"`
   * - `"editor-reset-speed"`
   * - `"editor-set-clone-brush-source"`
   * - `"editor-set-clone-brush-destination"`
   * - `"editor-switch-to-surface"`
   * - `"editor-remove-scripting-object"`
   * - `"debug-toggle-atlas-gui"`
   * - `"debug-toggle-gui-visibility"`
   * - `"debug-toggle-debug-settings"`
   * - `"debug-toggle-basic"`
   * - `"debug-reset-zoom"`
   * - `"debug-reset-zoom-2x"`
   * - `"toggle-gui-debug"`
   * - `"toggle-gui-style-view"`
   * - `"toggle-gui-shadows"`
   * - `"toggle-gui-glows"`
   * - `"open-prototypes-gui"`
   * - `"open-prototype-explorer-gui"`
   * - `"increase-ui-scale"`
   * - `"decrease-ui-scale"`
   * - `"reset-ui-scale"`
   * - `"slash-editor"`
   * - `"toggle-entity"`
   * - `"next-player-in-replay"`
   * - `"move-blueprint-absolute-grid-up"`
   * - `"move-blueprint-absolute-grid-down"`
   * - `"move-blueprint-absolute-grid-left"`
   * - `"move-blueprint-absolute-grid-right"`
   * - `"move-blueprint-entities-up"`
   * - `"move-blueprint-entities-down"`
   * - `"move-blueprint-entities-left"`
   * - `"move-blueprint-entities-right"`
   * - `"play-next-track"`
   * - `"play-previous-track"`
   * - `"pause-resume-music"`
   * @see {@link https://lua-api.factorio.com/2.0.16/types/LinkedGameControl.html Online documentation}
   */
  export type LinkedGameControl =
    | "move-up"
    | "move-down"
    | "move-left"
    | "move-right"
    | "open-character-gui"
    | "open-gui"
    | "confirm-gui"
    | "toggle-free-cursor"
    | "mine"
    | "build"
    | "build-ghost"
    | "super-forced-build"
    | "clear-cursor"
    | "pipette"
    | "rotate"
    | "reverse-rotate"
    | "flip-horizontal"
    | "flip-vertical"
    | "pick-items"
    | "drop-cursor"
    | "show-info"
    | "shoot-enemy"
    | "shoot-selected"
    | "next-weapon"
    | "toggle-driving"
    | "zoom-in"
    | "zoom-out"
    | "use-item"
    | "alternative-use-item"
    | "toggle-console"
    | "copy-entity-settings"
    | "paste-entity-settings"
    | "controller-gui-logistics-tab"
    | "controller-gui-character-tab"
    | "controller-gui-crafting-tab"
    | "toggle-rail-layer"
    | "select-for-blueprint"
    | "select-for-cancel-deconstruct"
    | "select-for-super-forced-deconstruct"
    | "reverse-select"
    | "alt-reverse-select"
    | "deselect"
    | "cycle-blueprint-forwards"
    | "cycle-blueprint-backwards"
    | "focus-search"
    | "larger-terrain-building-area"
    | "smaller-terrain-building-area"
    | "remove-pole-cables"
    | "build-with-obstacle-avoidance"
    | "add-station"
    | "add-temporary-station"
    | "rename-all"
    | "fast-wait-condition"
    | "drag-map"
    | "move-tag"
    | "place-in-chat"
    | "place-ping"
    | "pin"
    | "activate-tooltip"
    | "next-surface"
    | "previous-surface"
    | "cycle-quality-up"
    | "cycle-quality-down"
    | "craft"
    | "craft-5"
    | "craft-all"
    | "cancel-craft"
    | "cancel-craft-5"
    | "cancel-craft-all"
    | "pick-item"
    | "stack-transfer"
    | "inventory-transfer"
    | "fast-entity-transfer"
    | "cursor-split"
    | "stack-split"
    | "inventory-split"
    | "fast-entity-split"
    | "toggle-filter"
    | "open-item"
    | "copy-inventory-filter"
    | "paste-inventory-filter"
    | "show-quick-panel"
    | "next-quick-panel-page"
    | "previous-quick-panel-page"
    | "next-quick-panel-tab"
    | "previous-quick-panel-tab"
    | "rotate-active-quick-bars"
    | "next-active-quick-bar"
    | "previous-active-quick-bar"
    | "quick-bar-button-1"
    | "quick-bar-button-2"
    | "quick-bar-button-3"
    | "quick-bar-button-4"
    | "quick-bar-button-5"
    | "quick-bar-button-6"
    | "quick-bar-button-7"
    | "quick-bar-button-8"
    | "quick-bar-button-9"
    | "quick-bar-button-10"
    | "quick-bar-button-1-secondary"
    | "quick-bar-button-2-secondary"
    | "quick-bar-button-3-secondary"
    | "quick-bar-button-4-secondary"
    | "quick-bar-button-5-secondary"
    | "quick-bar-button-6-secondary"
    | "quick-bar-button-7-secondary"
    | "quick-bar-button-8-secondary"
    | "quick-bar-button-9-secondary"
    | "quick-bar-button-10-secondary"
    | "action-bar-select-page-1"
    | "action-bar-select-page-2"
    | "action-bar-select-page-3"
    | "action-bar-select-page-4"
    | "action-bar-select-page-5"
    | "action-bar-select-page-6"
    | "action-bar-select-page-7"
    | "action-bar-select-page-8"
    | "action-bar-select-page-9"
    | "action-bar-select-page-10"
    | "copy"
    | "cut"
    | "paste"
    | "cycle-clipboard-forwards"
    | "cycle-clipboard-backwards"
    | "undo"
    | "redo"
    | "toggle-menu"
    | "toggle-map"
    | "close-menu"
    | "open-technology-gui"
    | "production-statistics"
    | "logistic-networks"
    | "toggle-blueprint-library"
    | "open-trains-gui"
    | "open-factoriopedia"
    | "back"
    | "forward"
    | "pause-game"
    | "confirm-message"
    | "previous-technology"
    | "previous-mod"
    | "connect-train"
    | "disconnect-train"
    | "submit-feedback"
    | "editor-next-variation"
    | "editor-previous-variation"
    | "editor-clone-item"
    | "editor-delete-item"
    | "editor-toggle-pause"
    | "editor-tick-once"
    | "editor-speed-up"
    | "editor-speed-down"
    | "editor-reset-speed"
    | "editor-set-clone-brush-source"
    | "editor-set-clone-brush-destination"
    | "editor-switch-to-surface"
    | "editor-remove-scripting-object"
    | "debug-toggle-atlas-gui"
    | "debug-toggle-gui-visibility"
    | "debug-toggle-debug-settings"
    | "debug-toggle-basic"
    | "debug-reset-zoom"
    | "debug-reset-zoom-2x"
    | "toggle-gui-debug"
    | "toggle-gui-style-view"
    | "toggle-gui-shadows"
    | "toggle-gui-glows"
    | "open-prototypes-gui"
    | "open-prototype-explorer-gui"
    | "increase-ui-scale"
    | "decrease-ui-scale"
    | "reset-ui-scale"
    | "slash-editor"
    | "toggle-entity"
    | "next-player-in-replay"
    | "move-blueprint-absolute-grid-up"
    | "move-blueprint-absolute-grid-down"
    | "move-blueprint-absolute-grid-left"
    | "move-blueprint-absolute-grid-right"
    | "move-blueprint-entities-up"
    | "move-blueprint-entities-down"
    | "move-blueprint-entities-left"
    | "move-blueprint-entities-right"
    | "play-next-track"
    | "play-previous-track"
    | "pause-resume-music"
  export interface ListBoxStyleSpecification extends BaseStyleSpecification {
    readonly type: "list_box_style"
    item_style?: ButtonStyleSpecification
    scroll_pane_style?: ScrollPaneStyleSpecification
  }
  export interface LoaderStructure {
    direction_in?: Sprite4Way
    direction_out?: Sprite4Way
    back_patch?: Sprite4Way
    front_patch?: Sprite4Way
    frozen_patch_in?: Sprite4Way
    frozen_patch_out?: Sprite4Way
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
   * -- In the English translation, this will result in "No ammo"; in the Czech translation, it will result in "Bez munice":
   * localised_description = {"description.no-ammo"}
   * -- The "description.no-ammo" template contains no placeholders, so no further parameters are necessary.
   * @example
   * -- In the English translation, this will result in "80 hitpoints"; in the Japanese one, it will result in "80 HP":
   * localised_description = {"description.hitpoints", tostring(80)}
   * @example
   * -- This will result in "hello" in all translations:
   * localised_description = {"", "hello"}
   * @example
   * -- This will result in "Iron plate: 60" in the English translation and "Eisenplatte: 60" in the German translation.
   * localised_description = {"", {"item-name.iron-plate"}, ": ", tostring(60)}
   * @example
   * -- As an example of a localised string with fallback, consider this:
   * {"?", {"", {"entity-description.furnace"}, "\n"}, {"item-description.furnace"}, "optional fallback"}
   * -- If "entity-description.furnace" exists, it is concatenated with "\n" and returned. Otherwise, if
   * -- "item-description.furnace" exists, it is returned as-is. Otherwise, "optional fallback" is returned. If this
   * -- value wasn't specified, the translation result would be "Unknown key: 'item-description.furnace'".
   * @see {@link https://lua-api.factorio.com/2.0.16/types/LocalisedString.html Online documentation}
   */
  export type LocalisedString = string | number | boolean | undefined | readonly [string, ...LocalisedString[]]
  export type LogisticFilterIndex = uint16
  /**
   * The items generated when an {@link EntityWithHealthPrototype} is killed.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/LootItem.html Online documentation}
   */
  export interface LootItem {
    /**
     * The item to spawn.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LootItem.html#item Online documentation}
     */
    item: ItemID
    /**
     * **Default:** `1`
     *
     * `0` is 0% and `1` is 100%. Must be `> 0`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LootItem.html#probability Online documentation}
     */
    probability?: double
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LootItem.html#count_min Online documentation}
     */
    count_min?: double
    /**
     * **Default:** `1`
     *
     * Must be `> 0`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/LootItem.html#count_max Online documentation}
     */
    count_max?: double
  }
  export interface LowPowerTipTrigger extends CountBasedTipTrigger {
    readonly type: "low-power"
  }
  export interface MainSound {
    sound?: Sound
    /**
     * **Default:** `1`
     *
     * Modifies how far a sound can be heard. Can only be 1 or lower, has to be a positive number.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MainSound.html#audible_distance_modifier Online documentation}
     */
    audible_distance_modifier?: double
    /**
     * **Default:** `1`
     *
     * Modifies how often the sound is played.
     * @example
     * probability = 1 / (3 * 60) -- average pause between the sound is 3 seconds
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MainSound.html#probability Online documentation}
     */
    probability?: double
    /**
     * **Default:** `0`
     *
     * Can't be used when `match_progress_to_activity` is `true`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MainSound.html#fade_in_ticks Online documentation}
     */
    fade_in_ticks?: uint32
    /**
     * **Default:** `0`
     *
     * Can't be used when `match_progress_to_activity` is `true`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MainSound.html#fade_out_ticks Online documentation}
     */
    fade_out_ticks?: uint32
    activity_to_volume_modifiers?: ActivityMatchingModifiers
    activity_to_speed_modifiers?: ActivityMatchingModifiers
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MainSound.html#match_progress_to_activity Online documentation}
     */
    match_progress_to_activity?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MainSound.html#match_volume_to_activity Online documentation}
     */
    match_volume_to_activity?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MainSound.html#match_speed_to_activity Online documentation}
     */
    match_speed_to_activity?: bool
    play_for_working_visualisations?: readonly string[]
    /**
     * **Default:** `0`
     *
     * Only used if {@link WorkingSound#persistent WorkingSound::persistent} is `true`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MainSound.html#volume_smoothing_window_size Online documentation}
     */
    volume_smoothing_window_size?: uint32
  }
  export interface ManualTransferTipTrigger extends CountBasedTipTrigger {
    readonly type: "manual-transfer"
  }
  export interface ManualWireDragTipTrigger extends CountBasedTipTrigger {
    readonly type: "manual-wire-drag"
    source?: EntityID
    target?: EntityID
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ManualWireDragTipTrigger.html#match_type_only Online documentation}
     */
    match_type_only?: bool
    wire_type?: "red" | "green" | "copper"
  }
  /**
   * @see UtilityConstants.map_editor
   * @see {@link https://lua-api.factorio.com/2.0.16/prototypes/UtilityConstants.html#map_editor Online documentation}
   */
  export interface MapEditorConstants {
    clone_editor_copy_source_color: Color
    clone_editor_copy_destination_allowed_color: Color
    clone_editor_copy_destination_not_allowed_color: Color
    clone_editor_brush_source_color: Color
    clone_editor_brush_destination_color: Color
    clone_editor_brush_cursor_preview_tint: Color
    clone_editor_brush_world_preview_tint: Color
    script_editor_select_area_color: Color
    script_editor_drag_area_color: Color
    force_editor_select_area_color: Color
    cliff_editor_remove_cliffs_color: Color
    tile_editor_selection_preview_tint: Color
    tile_editor_area_selection_color: Color
    decorative_editor_selection_preview_tint: Color
    tile_editor_selection_preview_radius: uint8
    decorative_editor_selection_preview_radius: uint8
  }
  export interface MapGenPreset {
    /**
     * Specifies the ordering in the {@linkplain https://wiki.factorio.com/Map_generator map generator GUI}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MapGenPreset.html#order Online documentation}
     */
    order: Order
    /**
     * **Default:** `true`
     *
     * Whether this is the default preset. If `true`, this preset may not have any other properties besides this and order.
     *
     * If no MapGenPreset has `default = true`, the preset selector will have a blank preset label, with default settings. The "blank" preset goes away when another preset is selected.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MapGenPreset.html#default Online documentation}
     */
    default?: bool
    /**
     * If any setting is not set, it will use the default values.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MapGenPreset.html#basic_settings Online documentation}
     */
    basic_settings?: MapGenSettings
    /**
     * If any setting is not set, it will use the default values.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MapGenPreset.html#advanced_settings Online documentation}
     */
    advanced_settings?: AdvancedMapGenSettings
  }
  export interface MapGenPresetAsteroidSettings {
    spawning_rate?: double
    max_ray_portals_expanded_per_tick?: uint32
  }
  export interface MapGenPresetDifficultySettings {
    technology_price_multiplier?: double
  }
  export interface MapGenPresetEnemyEvolutionSettings {
    enabled?: bool
    /**
     * Percentual increase in the evolution factor for every second (60 ticks)
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MapGenPresetEnemyEvolutionSettings.html#time_factor Online documentation}
     */
    time_factor?: double
    /**
     * Percentual increase in the evolution factor for every destroyed spawner
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MapGenPresetEnemyEvolutionSettings.html#destroy_factor Online documentation}
     */
    destroy_factor?: double
    /**
     * Percentual increase in the evolution factor for 1 pollution unit
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MapGenPresetEnemyEvolutionSettings.html#pollution_factor Online documentation}
     */
    pollution_factor?: double
  }
  export interface MapGenPresetEnemyExpansionSettings {
    enabled?: bool
    /**
     * Distance in chunks from the furthest base around. This prevents expansions from reaching too far into the player's territory.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MapGenPresetEnemyExpansionSettings.html#max_expansion_distance Online documentation}
     */
    max_expansion_distance?: uint32
    /**
     * Size of the group that goes to build new base (the game interpolates between min size and max size based on evolution factor).
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MapGenPresetEnemyExpansionSettings.html#settler_group_min_size Online documentation}
     */
    settler_group_min_size?: uint32
    settler_group_max_size?: uint32
    /**
     * Ticks to expand to a single position for a base is used. Cooldown is calculated as follows: `cooldown = lerp(max_expansion_cooldown, min_expansion_cooldown, -e^2 + 2 * e)` where `lerp` is the linear interpolation function, and e is the current evolution factor.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MapGenPresetEnemyExpansionSettings.html#min_expansion_cooldown Online documentation}
     */
    min_expansion_cooldown?: uint32
    /**
     * In ticks.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MapGenPresetEnemyExpansionSettings.html#max_expansion_cooldown Online documentation}
     */
    max_expansion_cooldown?: uint32
  }
  /**
   * The pollution settings, the values are for 60 ticks (1 second).
   * @see {@link https://lua-api.factorio.com/2.0.16/types/MapGenPresetPollutionSettings.html Online documentation}
   */
  export interface MapGenPresetPollutionSettings {
    enabled?: bool
    /**
     * Must be <= 0.25. Amount that is diffused to neighboring chunks.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MapGenPresetPollutionSettings.html#diffusion_ratio Online documentation}
     */
    diffusion_ratio?: double
    /**
     * Must be >= 0.1. Also known as absorption modifier.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MapGenPresetPollutionSettings.html#ageing Online documentation}
     */
    ageing?: double
    min_pollution_to_damage_trees?: double
    /**
     * Must be >= 0.1.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MapGenPresetPollutionSettings.html#enemy_attack_pollution_consumption_modifier Online documentation}
     */
    enemy_attack_pollution_consumption_modifier?: double
    pollution_restored_per_tree_damage?: double
  }
  export interface MapGenSettings {
    /**
     * **Default:** `true`
     *
     * Whether undefined `autoplace_controls` should fall back to the default controls or not.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MapGenSettings.html#default_enable_all_autoplace_controls Online documentation}
     */
    default_enable_all_autoplace_controls?: bool
    autoplace_controls?: Record<AutoplaceControlID, FrequencySizeRichness>
    /**
     * Each setting in this table maps the string type to the settings for that type.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MapGenSettings.html#autoplace_settings Online documentation}
     */
    autoplace_settings?: Record<"entity" | "tile" | "decorative", AutoplaceSettings>
    /**
     * Map of property name (`"elevation"`, etc) to name of noise expression that will provide it. Entries may be omitted. A notable usage is changing autoplace behavior of an entity based on the preset, which cannot be read from a noise expression.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MapGenSettings.html#property_expression_names Online documentation}
     */
    property_expression_names?: Record<string, string | bool | double>
    /**
     * Array of the positions of the starting areas.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MapGenSettings.html#starting_points Online documentation}
     */
    starting_points?: readonly MapPosition[]
    /**
     * Read by the game, but not used or set in the GUI.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MapGenSettings.html#seed Online documentation}
     */
    seed?: uint32
    /**
     * Width of the map in tiles. Silently limited to 2 000 000, ie. +/- 1 million tiles from the center in both directions.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MapGenSettings.html#width Online documentation}
     */
    width?: uint32
    /**
     * Height of the map in tiles. Silently limited to 2 000 000, ie. +/- 1 million tiles from the center in both directions.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MapGenSettings.html#height Online documentation}
     */
    height?: uint32
    /**
     * Size of the starting area. The starting area only effects enemy placement, and has no effect on resources.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MapGenSettings.html#starting_area Online documentation}
     */
    starting_area?: MapGenSize
    /**
     * If true, enemy creatures will not attack unless the player first attacks them.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MapGenSettings.html#peaceful_mode Online documentation}
     */
    peaceful_mode?: bool
    /**
     * If true, enemy creatures will not naturally spawn from spawners, map gen, or trigger effects.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MapGenSettings.html#no_enemies_mode Online documentation}
     */
    no_enemies_mode?: bool
    cliff_settings?: CliffPlacementSettings
    territory_settings?: TerritorySettings
  }
  /**
   * A floating point number specifying an amount.
   *
   * For backwards compatibility, MapGenSizes can also be specified as one of the following strings, which will be converted to a number:
   *
   * Each of the values in a triplet (such as "low", "small", and "poor") are synonymous. In-game the values can be set from `0.166` to `6` via the GUI (respective to the percentages), while `0` is used to disable the autoplace control.
   *
   * ## Union members
   * - {@link float}: Specifying a map gen dimension.
   * - `"none"`: equivalent to `0`.
   * - `"very-low"`: equivalent to `1/2`.
   * - `"very-small"`: equivalent to `1/2`.
   * - `"very-poor"`: equivalent to `1/2`.
   * - `"low"`: equivalent to `1/sqrt(2)`.
   * - `"small"`: equivalent to `1/sqrt(2)`.
   * - `"poor"`: equivalent to `1/sqrt(2)`.
   * - `"normal"`: equivalent to `1`.
   * - `"medium"`: equivalent to `1`.
   * - `"regular"`: equivalent to `1`.
   * - `"high"`: equivalent to `sqrt(2)`.
   * - `"big"`: equivalent to `sqrt(2)`.
   * - `"good"`: equivalent to `sqrt(2)`.
   * - `"very-high"`: equivalent to `2`.
   * - `"very-big"`: equivalent to `2`.
   * - `"very-good"`: equivalent to `2`.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/MapGenSize.html Online documentation}
   */
  export type MapGenSize =
    | float
    | "none"
    | "very-low"
    | "very-small"
    | "very-poor"
    | "low"
    | "small"
    | "poor"
    | "normal"
    | "medium"
    | "regular"
    | "high"
    | "big"
    | "good"
    | "very-high"
    | "very-big"
    | "very-good"
  /**
   * @see NeighbourConnectableConnectionDefinition.location
   * @see {@link https://lua-api.factorio.com/2.0.16/types/NeighbourConnectableConnectionDefinition.html#location Online documentation}
   */
  export interface MapLocation {
    /**
     * Position relative to entity's position where the connection point will be located at.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MapLocation.html#position Online documentation}
     */
    position: MapPosition
    /**
     * Direction this connection point will be facing to.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MapLocation.html#direction Online documentation}
     */
    direction: MapPosition
  }
  /**
   * Struct type for {@link MapPosition}
   * @see MapPosition
   * @see {@link https://lua-api.factorio.com/2.0.16/types/MapPosition.html Online documentation}
   */
  export interface MapPositionStruct {
    x: double
    y: double
  }
  /**
   * Coordinates of a tile in a map. Positive x goes towards east, positive y goes towards south, and x is the first dimension in the array format.
   *
   * The coordinates are stored as a fixed-size 32 bit integer, with 8 bits reserved for decimal precision, meaning the smallest value step is `1/2^8 = 0.00390625` tiles.
   * @example
   * -- Explicit definition
   * {x = 5.5, y = 2}
   * {y = 2.25, x = 5.125}
   * @example
   * -- Shorthand
   * {1.625, 2.375}
   * @see {@link https://lua-api.factorio.com/2.0.16/types/MapPosition.html Online documentation}
   */
  export type MapPosition = MapPositionStruct | readonly [double, double]
  /**
   * `math.huge` represents the maximum possible tick.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/MapTick.html Online documentation}
   */
  export type MapTick = uint64
  export type MaterialAmountType = double
  /**
   * Used by {@link TilePrototype}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/MaterialTextureParameters.html Online documentation}
   */
  export interface MaterialTextureParameters {
    /**
     * Frame count.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MaterialTextureParameters.html#count Online documentation}
     */
    count: uint32
    picture: FileName
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MaterialTextureParameters.html#scale Online documentation}
     */
    scale?: float
    /**
     * **Default:** `0`
     *
     * Horizontal position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MaterialTextureParameters.html#x Online documentation}
     */
    x?: SpriteSizeType
    /**
     * **Default:** `0`
     *
     * Vertical position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MaterialTextureParameters.html#y Online documentation}
     */
    y?: SpriteSizeType
    /**
     * **Default:** `0`
     *
     * Once the specified number of pictures is loaded, other pictures are loaded on other line. This is to allow having longer animations in matrix, to input files with too high width. The game engine limits the width of any input files to 8192px, so it is compatible with most graphics cards. 0 means that all the pictures are in one horizontal line.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MaterialTextureParameters.html#line_length Online documentation}
     */
    line_length?: uint32
  }
  /**
   * A string that represents a math expression. The expression parser recognizes four basic token types (with their regex):
   *
   * - Whitespace: `[ \n\r\t]*`
   *
   * - Number: `(0x[0-9a-f]+|([0-9]+\.?[0-9]*|\.[0-9]+)(e-?[0-9]+)?)` (e.g. `3.2`, `100`, `.6`, `4.2e-5`, `0x2a5f`). Supports hexadecimal input and scientific notation for decimal numbers.
   *
   * - Operator: `+`, `-`, `*`, `/`, `^`, and `()` for brackets, which may be nested.
   *
   * - Identifier: The functions listed below and any variables listed where the expression is used.
   *
   * Identifiers are used to name functions and variables, which result in or represent numbers. The following functions are always available:
   *
   * - `abs(value)`: Returns absolute value of the given argument; i.e. if the argument is negative, it is inverted.
   *
   * - `log2(value)`: Returns a binary logarithm of the given value.
   *
   * - `sign(value)`: Returns `-1` for negative numbers, `0` for zero (regardless of sign), `1` for positive numbers
   *
   * - `max(value1, value2, ...)`: Returns the greater of the given values. Supports between 2 and 255 arguments.
   *
   * - `min(value1, value2, ...)`: Returns the smaller of the given values. Supports between 2 and 255 arguments.
   *
   * The property where the expression is used may provide variables. For example in {@link TechnologyUnit#count_formula TechnologyUnit::count_formula} `L` and `l` may be used for the technology level.
   *
   * The formula is executed following the {@linkplain https://en.wikipedia.org/wiki/Order_of_operations#Conventional_order BODMAS} order (also known as PEMDAS).
   * @example
   * "2500 * (L - 3)"
   * @example
   * "(4e5 * (abs(speed) + 10.5)) / weight"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/MathExpression.html Online documentation}
   */
  export type MathExpression = string
  export interface MaxFailedAttemptsPerTickPerConstructionQueueModifier extends SimpleModifier {
    readonly type: "max-failed-attempts-per-tick-per-construction-queue"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MaxFailedAttemptsPerTickPerConstructionQueueModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface MaxSuccessfulAttemptsPerTickPerConstructionQueueModifier extends SimpleModifier {
    readonly type: "max-successful-attempts-per-tick-per-construction-queue"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MaxSuccessfulAttemptsPerTickPerConstructionQueueModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface MaximumFollowingRobotsCountModifier extends SimpleModifier {
    readonly type: "maximum-following-robots-count"
    /**
     * **Default:** `false`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MaximumFollowingRobotsCountModifier.html#infer_icon Online documentation}
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MaximumFollowingRobotsCountModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
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
   * @see {@link https://lua-api.factorio.com/2.0.16/types/MinableProperties.html Online documentation}
   */
  export interface MinableProperties {
    /**
     * How many seconds are required to mine this object at 1 mining speed.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MinableProperties.html#mining_time Online documentation}
     */
    mining_time: double
    /**
     * The items that are returned when this object is mined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MinableProperties.html#results Online documentation}
     */
    results?: readonly ProductPrototype[]
    /**
     * Only loaded if `results` is not defined.
     *
     * Which item is dropped when this is mined. Cannot be empty. If you want the entity to not be minable, don't specify the minable properties, if you want it to be minable with no result item, don't specify the result at all.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MinableProperties.html#result Online documentation}
     */
    result?: ItemID
    /**
     * **Default:** `0`
     *
     * The amount of fluid that is used up when this object is mined. If this is > 0, this object cannot be mined by hand.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MinableProperties.html#fluid_amount Online documentation}
     */
    fluid_amount?: FluidAmount
    /**
     * Name of a {@link ParticlePrototype}. Which set of particles to use.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MinableProperties.html#mining_particle Online documentation}
     */
    mining_particle?: ParticleID
    /**
     * Name of a {@link FluidPrototype}. The fluid that is used up when this object is mined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MinableProperties.html#required_fluid Online documentation}
     */
    required_fluid?: FluidID
    /**
     * **Default:** `1`
     *
     * Only loaded if `results` is not defined.
     *
     * How many of result are dropped.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MinableProperties.html#count Online documentation}
     */
    count?: uint16
    mining_trigger?: Trigger
  }
  export interface MineEntityTechnologyTrigger {
    readonly type: "mine-entity"
    entity: EntityID
  }
  export interface MineItemByRobotTipTrigger extends CountBasedTipTrigger {
    readonly type: "mine-item-by-robot"
  }
  export interface MinimapStyleSpecification extends Omit<EmptyWidgetStyleSpecification, "type"> {
    readonly type: "minimap_style"
  }
  /**
   * Used by {@link MiningDrillPrototype}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/MiningDrillGraphicsSet.html Online documentation}
   */
  export interface MiningDrillGraphicsSet extends WorkingVisualisations {
    frozen_patch?: Sprite4Way
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MiningDrillGraphicsSet.html#reset_animation_when_frozen Online documentation}
     */
    reset_animation_when_frozen?: bool
    /**
     * **Default:** `"object"`
     *
     * Render layer(s) for all directions of the circuit connectors.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MiningDrillGraphicsSet.html#circuit_connector_layer Online documentation}
     */
    circuit_connector_layer?: RenderLayer | CircuitConnectorLayer
    /**
     * **Default:** `100`
     *
     * Secondary draw order(s) for all directions of the circuit connectors.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MiningDrillGraphicsSet.html#circuit_connector_secondary_draw_order Online documentation}
     */
    circuit_connector_secondary_draw_order?: int8 | CircuitConnectorSecondaryDrawOrder
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MiningDrillGraphicsSet.html#drilling_vertical_movement_duration Online documentation}
     */
    drilling_vertical_movement_duration?: uint16
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MiningDrillGraphicsSet.html#animation_progress Online documentation}
     */
    animation_progress?: float
  }
  export interface MiningDrillProductivityBonusModifier extends SimpleModifier {
    readonly type: "mining-drill-productivity-bonus"
    /**
     * **Default:** `false`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MiningDrillProductivityBonusModifier.html#infer_icon Online documentation}
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MiningDrillProductivityBonusModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface MiningWithFluidModifier extends BoolModifier {
    readonly type: "mining-with-fluid"
    /**
     * **Default:** `false`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/MiningWithFluidModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  /**
   * ## Union members
   * - `"horizontal"`
   * - `"vertical"`
   * - `"diagonal-pos"`
   * - `"diagonal-neg"`
   * @see {@link https://lua-api.factorio.com/2.0.16/types/Mirroring.html Online documentation}
   */
  export type Mirroring = "horizontal" | "vertical" | "diagonal-pos" | "diagonal-neg"
  /**
   * The user-set value of a startup {@linkplain https://wiki.factorio.com/Tutorial:Mod_settings mod setting}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ModSetting.html Online documentation}
   */
  export interface ModSetting {
    /**
     * The value of the mod setting. The type depends on the kind of setting.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ModSetting.html#value Online documentation}
     */
    value: int32 | double | bool | string | Color
  }
  /**
   * The effect that is applied when a {@link TechnologyPrototype} is researched.
   *
   * Loaded as one of the {@link BaseModifier} extensions, based on the value of the `type` key.
   *
   * ## Union members
   * - {@link InserterStackSizeBonusModifier}: Loaded when the `type` is `"inserter-stack-size-bonus"`.
   * - {@link BulkInserterCapacityBonusModifier}: Loaded when the `type` is `"bulk-inserter-capacity-bonus"`.
   * - {@link LaboratorySpeedModifier}: Loaded when the `type` is `"laboratory-speed"`.
   * - {@link CharacterLogisticTrashSlotsModifier}: Loaded when the `type` is `"character-logistic-trash-slots"`.
   * - {@link MaximumFollowingRobotsCountModifier}: Loaded when the `type` is `"maximum-following-robots-count"`.
   * - {@link WorkerRobotSpeedModifier}: Loaded when the `type` is `"worker-robot-speed"`.
   * - {@link WorkerRobotStorageModifier}: Loaded when the `type` is `"worker-robot-storage"`.
   * - {@link TurretAttackModifier}: Loaded when the `type` is `"turret-attack"`.
   * - {@link AmmoDamageModifier}: Loaded when the `type` is `"ammo-damage"`.
   * - {@link GiveItemModifier}: Loaded when the `type` is `"give-item"`.
   * - {@link GunSpeedModifier}: Loaded when the `type` is `"gun-speed"`.
   * - {@link UnlockRecipeModifier}: Loaded when the `type` is `"unlock-recipe"`.
   * - {@link CharacterCraftingSpeedModifier}: Loaded when the `type` is `"character-crafting-speed"`.
   * - {@link CharacterMiningSpeedModifier}: Loaded when the `type` is `"character-mining-speed"`.
   * - {@link CharacterRunningSpeedModifier}: Loaded when the `type` is `"character-running-speed"`.
   * - {@link CharacterBuildDistanceModifier}: Loaded when the `type` is `"character-build-distance"`.
   * - {@link CharacterItemDropDistanceModifier}: Loaded when the `type` is `"character-item-drop-distance"`.
   * - {@link CharacterReachDistanceModifier}: Loaded when the `type` is `"character-reach-distance"`.
   * - {@link CharacterResourceReachDistanceModifier}: Loaded when the `type` is `"character-resource-reach-distance"`.
   * - {@link CharacterItemPickupDistanceModifier}: Loaded when the `type` is `"character-item-pickup-distance"`.
   * - {@link CharacterLootPickupDistanceModifier}: Loaded when the `type` is `"character-loot-pickup-distance"`.
   * - {@link CharacterInventorySlotsBonusModifier}: Loaded when the `type` is `"character-inventory-slots-bonus"`.
   * - {@link DeconstructionTimeToLiveModifier}: Loaded when the `type` is `"deconstruction-time-to-live"`.
   * - {@link MaxFailedAttemptsPerTickPerConstructionQueueModifier}: Loaded when the `type` is `"max-failed-attempts-per-tick-per-construction-queue"`.
   * - {@link MaxSuccessfulAttemptsPerTickPerConstructionQueueModifier}: Loaded when the `type` is `"max-successful-attempts-per-tick-per-construction-queue"`.
   * - {@link CharacterHealthBonusModifier}: Loaded when the `type` is `"character-health-bonus"`.
   * - {@link MiningDrillProductivityBonusModifier}: Loaded when the `type` is `"mining-drill-productivity-bonus"`.
   * - {@link TrainBrakingForceBonusModifier}: Loaded when the `type` is `"train-braking-force-bonus"`.
   * - {@link WorkerRobotBatteryModifier}: Loaded when the `type` is `"worker-robot-battery"`.
   * - {@link LaboratoryProductivityModifier}: Loaded when the `type` is `"laboratory-productivity"`.
   * - {@link FollowerRobotLifetimeModifier}: Loaded when the `type` is `"follower-robot-lifetime"`.
   * - {@link ArtilleryRangeModifier}: Loaded when the `type` is `"artillery-range"`.
   * - {@link NothingModifier}: Loaded when the `type` is `"nothing"`.
   * - {@link CharacterLogisticRequestsModifier}: Loaded when the `type` is `"character-logistic-requests"`.
   * - {@link VehicleLogisticsModifier}: Loaded when the `type` is `"vehicle-logistics"`.
   * - {@link UnlockSpaceLocationModifier}: Loaded when the `type` is `"unlock-space-location"`.
   * - {@link UnlockQualityModifier}: Loaded when the `type` is `"unlock-quality"`.
   * - {@link SpacePlatformsModifier}: Loaded when the `type` is `"unlock-space-platforms"`.
   * - {@link CircuitNetworkModifier}: Loaded when the `type` is `"unlock-circuit-network"`.
   * - {@link CargoLandingPadLimitModifier}: Loaded when the `type` is `"cargo-landing-pad-count"`.
   * - {@link ChangeRecipeProductivityModifier}: Loaded when the `type` is `"change-recipe-productivity"`.
   * - {@link CliffDeconstructionEnabledModifier}: Loaded when the `type` is `"cliff-deconstruction-enabled"`.
   * - {@link MiningWithFluidModifier}: Loaded when the `type` is `"mining-with-fluid"`.
   * - {@link RailSupportOnDeepOilOceanModifier}: Loaded when the `type` is `"rail-support-on-deep-oil-ocean"`.
   * - {@link RailPlannerAllowElevatedRailsModifier}: Loaded when the `type` is `"rail-planner-allow-elevated-rails"`.
   * - {@link BeaconDistributionModifier}: Loaded when the `type` is `"beacon-distribution"`.
   * - {@link CreateGhostOnEntityDeathModifier}: Loaded when the `type` is `"create-ghost-on-entity-death"`.
   * - {@link BeltStackSizeBonusModifier}: Loaded when the `type` is `"belt-stack-size-bonus"`.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/Modifier.html Online documentation}
   */
  export type Modifier =
    | InserterStackSizeBonusModifier
    | BulkInserterCapacityBonusModifier
    | LaboratorySpeedModifier
    | CharacterLogisticTrashSlotsModifier
    | MaximumFollowingRobotsCountModifier
    | WorkerRobotSpeedModifier
    | WorkerRobotStorageModifier
    | TurretAttackModifier
    | AmmoDamageModifier
    | GiveItemModifier
    | GunSpeedModifier
    | UnlockRecipeModifier
    | CharacterCraftingSpeedModifier
    | CharacterMiningSpeedModifier
    | CharacterRunningSpeedModifier
    | CharacterBuildDistanceModifier
    | CharacterItemDropDistanceModifier
    | CharacterReachDistanceModifier
    | CharacterResourceReachDistanceModifier
    | CharacterItemPickupDistanceModifier
    | CharacterLootPickupDistanceModifier
    | CharacterInventorySlotsBonusModifier
    | DeconstructionTimeToLiveModifier
    | MaxFailedAttemptsPerTickPerConstructionQueueModifier
    | MaxSuccessfulAttemptsPerTickPerConstructionQueueModifier
    | CharacterHealthBonusModifier
    | MiningDrillProductivityBonusModifier
    | TrainBrakingForceBonusModifier
    | WorkerRobotBatteryModifier
    | LaboratoryProductivityModifier
    | FollowerRobotLifetimeModifier
    | ArtilleryRangeModifier
    | NothingModifier
    | CharacterLogisticRequestsModifier
    | VehicleLogisticsModifier
    | UnlockSpaceLocationModifier
    | UnlockQualityModifier
    | SpacePlatformsModifier
    | CircuitNetworkModifier
    | CargoLandingPadLimitModifier
    | ChangeRecipeProductivityModifier
    | CliffDeconstructionEnabledModifier
    | MiningWithFluidModifier
    | RailSupportOnDeepOilOceanModifier
    | RailPlannerAllowElevatedRailsModifier
    | BeaconDistributionModifier
    | CreateGhostOnEntityDeathModifier
    | BeltStackSizeBonusModifier
  /**
   * A dictionary of mod names to mod versions of all active mods. It can be used to adjust mod functionality based on the presence of other mods.
   * @example
   * -- executes pineapple only when the pizza mod is active
   * if mods["pizza"] then
   *   pineapple()
   * end
   * @example
   * -- when the only active mod is the space-age mod with version 1.2.0
   * -- then this logs
   * for name, version in pairs(mods) do
   *   log(name .. " version " .. version) -- => space-age version 1.2.0
   * end
   * @see {@link https://lua-api.factorio.com/2.0.16/types/Mods.html Online documentation}
   */
  export type Mods = Record<string, string>
  /**
   * The name of a {@link ModuleCategory}.
   * @example
   * "productivity"
   * @example
   * "efficiency"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ModuleCategoryID.html Online documentation}
   */
  export type ModuleCategoryID = string
  /**
   * ## Union members
   * - `"primary"`
   * - `"secondary"`
   * - `"tertiary"`
   * - `"quaternary"`
   * - `"none"`
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ModuleTint.html Online documentation}
   */
  export type ModuleTint = "primary" | "secondary" | "tertiary" | "quaternary" | "none"
  export interface ModuleTransferTipTrigger extends CountBasedTipTrigger {
    readonly type: "module-transfer"
    module: ItemID
  }
  /**
   * The name of a {@link MouseCursor}.
   * @example
   * "selection-tool-cursor"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/MouseCursorID.html Online documentation}
   */
  export type MouseCursorID = string
  /**
   * Defines how this entity connects to its neighbours
   * @see {@link https://lua-api.factorio.com/2.0.16/types/NeighbourConnectable.html Online documentation}
   */
  export interface NeighbourConnectable {
    /**
     * **Default:** `true`
     *
     * If the connection positions and directions will be affected by entity's direction.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/NeighbourConnectable.html#affected_by_direction Online documentation}
     */
    affected_by_direction?: bool
    /**
     * **Default:** `0.7`
     *
     * Distance by which connection point is shifted along its direction to select a position where neighbor will be searched.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/NeighbourConnectable.html#neighbour_search_distance Online documentation}
     */
    neighbour_search_distance?: float
    /**
     * Definitions of the connection points.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/NeighbourConnectable.html#connections Online documentation}
     */
    connections: readonly NeighbourConnectableConnectionDefinition[]
  }
  export type NeighbourConnectableConnectionCategory = string
  /**
   * In order for 2 NeighbourConnectable to connect they need to share a connection point at the same position with opposite direction and both accept neighbor's category.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/NeighbourConnectableConnectionDefinition.html Online documentation}
   */
  export interface NeighbourConnectableConnectionDefinition {
    /**
     * @see {@link https://lua-api.factorio.com/2.0.16/types/NeighbourConnectableConnectionDefinition.html#location Online documentation}
     */
    location: MapLocation
    /**
     * Name of a category this connection should belong to. Used when deciding which connections are allowed to connect to this.
     *
     * Cannot be an empty string.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/NeighbourConnectableConnectionDefinition.html#category Online documentation}
     */
    category: NeighbourConnectableConnectionCategory
    /**
     * Table of neighbor categories this connection will connect to.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/NeighbourConnectableConnectionDefinition.html#neighbour_category Online documentation}
     */
    neighbour_category?: readonly NeighbourConnectableConnectionCategory[]
  }
  export interface NestedTriggerEffectItem extends TriggerEffectItem {
    readonly type: "nested-result"
    action: Trigger
  }
  /**
   * A boolean or double as simple values or a string that represents a math expression. The expression parser recognizes five basic token types (with their regex):
   *
   * - **Whitespace:** `[ \n\r\t]*`
   *
   * - **Identifier:** `[a-zA-Z_][a-zA-Z0-9_:]*` (e.g. cat_bar123)
   *
   * - **Number:** `(0x[0-9a-f]+|([0-9]+\.?[0-9]*|\.[0-9]+)(e-?[0-9]+)?)` (e.g. `3.2`, `100`, `.6`, `4.2e-5`, `0x2a5f`). Supports hexadecimal input and scientific notation for decimal numbers.
   *
   * - **String:** `("[^"]*"|'[^']*')` (e.g. `"cat bar 123"`, `'control-setting:copper-ore'`)
   *
   * - **Operator:** See the list below
   *
   * Identifiers are used to name functions and variables. The built-in functions and variables are documented in the {@linkplain https://lua-api.factorio.com/2.0.16/auxiliary/noise-expressions.html auxiliary docs}. Mods can define their own noise expressions which can be used as variables and functions. The entry points for this are {@link NamedNoiseFunction} and {@link NamedNoiseExpression} as well as local functions and expressions.
   *
   * All functions accept both named and positional arguments. To differentiate between these function calls, positional arguments start/end with `(`/`)` and named arguments with `{`/`}`, e.g. `clamp(x, -1, 1)` and `clamp{min = -1, max = 1, value = x}` are the same function call. Because of this, positional arguments can't be mixed with named arguments. A function can't have more than 255 parameters.
   *
   * The following operators are available, ordered by precedence:
   *
   * - `x^y`: Exponentiation (fast, inaccurate), equivalent to the built-in `pow(x, y)` noise function
   *
   * - `+x`, `-x`, `~x`: Unary plus and minus and unary bitwise not
   *
   * - `x*y`, `x/y`, `x%y`, `x%%y`: Multiplication and division, modulo and remainder.
   *
   * - `x+y`, `x-y`: Addition and subtraction
   *
   * - `x<y`, `x<=y`, `x>y`, `x>=y`: Less than, less than or equal, greater than, greater than or equal
   *
   * - `x==y`, `x~=y`, `x!=y`: Equal to and not equal to (Lua and C++ syntax)
   *
   * - `x&y`: Bitwise and
   *
   * - `x~y`: Bitwise xor
   *
   * - `x|y`: Bitwise or
   *
   * Modulo is implemented as `x - floor(x / y) * y` and remainder uses C++ {@linkplain https://en.cppreference.com/w/cpp/numeric/math/fmod `fmod(x, y)`} function.
   *
   * The boolean operators (less than, less than or equal, equal, not equal, greater than, greater than or equal) take two numbers and return 0 for false or 1 for true.
   *
   * The bitwise operators convert single-precision floating-point numbers to signed 32-bit integers before computing the result.
   * @example
   * "distance_from_nearest_point{x = x, y = y, points = starting_positions}"
   * @example
   * "clamp(x, -1, 1)"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/NoiseExpression.html Online documentation}
   */
  export type NoiseExpression = string | bool | double
  /**
   * The advantage of noise functions over {@link NoiseExpression noise expressions} is that they have parameters.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/NoiseFunction.html Online documentation}
   */
  export interface NoiseFunction {
    /**
     * The order of the parameters matters because functions can also be called with positional arguments.
     *
     * A function can't have more than 255 parameters.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/NoiseFunction.html#parameters Online documentation}
     */
    parameters: readonly string[]
    expression: NoiseExpression
    /**
     * A map of expression name to expression.
     *
     * Local expressions are meant to store data locally similar to local variables in Lua. Their purpose is to hold noise expressions used multiple times in the named noise expression, or just to tell the reader that the local expression has a specific purpose. Local expressions can access other local definitions and also function parameters, but recursive definitions aren't supported.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/NoiseFunction.html#local_expressions Online documentation}
     */
    local_expressions?: Record<string, NoiseExpression>
    /**
     * A map of function name to function.
     *
     * Local functions serve the same purpose as local expressions - they aren't visible outside of the specific prototype and they have access to other local definitions.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/NoiseFunction.html#local_functions Online documentation}
     */
    local_functions?: Record<string, NoiseFunction>
  }
  export interface NothingModifier extends BaseModifier {
    readonly type: "nothing"
    /**
     * **Default:** `false`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/NothingModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
    effect_description?: LocalisedString
  }
  export interface OffshorePumpGraphicsSet {
    /**
     * Rendered in "object" layer, with secondary draw order 0.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/OffshorePumpGraphicsSet.html#animation Online documentation}
     */
    animation?: Animation4Way
    /**
     * **Default:** `"ground-patch"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/OffshorePumpGraphicsSet.html#base_render_layer Online documentation}
     */
    base_render_layer?: RenderLayer
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/OffshorePumpGraphicsSet.html#underwater_layer_offset Online documentation}
     */
    underwater_layer_offset?: int8
    /**
     * Rendered in "object" layer, with secondary draw order 20.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/OffshorePumpGraphicsSet.html#fluid_animation Online documentation}
     */
    fluid_animation?: Animation4Way
    /**
     * Rendered in "object" layer, with secondary draw order 40.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/OffshorePumpGraphicsSet.html#glass_pictures Online documentation}
     */
    glass_pictures?: Sprite4Way
    /**
     * Rendered in layer specified by `base_render_layer`, with secondary draw order 0.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/OffshorePumpGraphicsSet.html#base_pictures Online documentation}
     */
    base_pictures?: Sprite4Way
    /**
     * Drawn by tile renderer when water animation is enabled.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/OffshorePumpGraphicsSet.html#underwater_pictures Online documentation}
     */
    underwater_pictures?: Sprite4Way
  }
  export interface OrTipTrigger {
    readonly type: "or"
    /**
     * If at least one of the triggers is fulfilled, this trigger is considered fulfilled.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/OrTipTrigger.html#triggers Online documentation}
     */
    triggers: readonly TipTrigger[]
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
   * @see {@link https://lua-api.factorio.com/2.0.16/types/Order.html Online documentation}
   */
  export type Order = string
  export interface OrientedCliffPrototype {
    render_layer?: RenderLayer
    collision_bounding_box: BoundingBox
    pictures?: SpriteVariations
    pictures_lower?: SpriteVariations
  }
  /**
   * @see CliffPrototype.orientations
   * @see {@link https://lua-api.factorio.com/2.0.16/prototypes/CliffPrototype.html#orientations Online documentation}
   */
  export interface OrientedCliffPrototypeSet {
    west_to_east: OrientedCliffPrototype
    north_to_south: OrientedCliffPrototype
    east_to_west: OrientedCliffPrototype
    south_to_north: OrientedCliffPrototype
    west_to_north: OrientedCliffPrototype
    north_to_east: OrientedCliffPrototype
    east_to_south: OrientedCliffPrototype
    south_to_west: OrientedCliffPrototype
    west_to_south: OrientedCliffPrototype
    north_to_west: OrientedCliffPrototype
    east_to_north: OrientedCliffPrototype
    south_to_east: OrientedCliffPrototype
    west_to_none: OrientedCliffPrototype
    none_to_east: OrientedCliffPrototype
    north_to_none: OrientedCliffPrototype
    none_to_south: OrientedCliffPrototype
    east_to_none: OrientedCliffPrototype
    none_to_west: OrientedCliffPrototype
    south_to_none: OrientedCliffPrototype
    none_to_north: OrientedCliffPrototype
  }
  /**
   * @see ProgressBarStyleSpecification.other_colors
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ProgressBarStyleSpecification.html#other_colors Online documentation}
   */
  export interface OtherColors {
    less_than: double
    color?: Color
    bar?: ElementImageSet
  }
  /**
   * The name of a {@link ParticlePrototype}.
   * @example
   * "beacon-metal-particle-small"
   * @example
   * "wooden-particle"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ParticleID.html Online documentation}
   */
  export type ParticleID = string
  export interface PasteEntitySettingsTipTrigger extends CountBasedTipTrigger {
    readonly type: "paste-entity-settings"
    source?: EntityID
    target?: EntityID
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PasteEntitySettingsTipTrigger.html#match_type_only Online documentation}
     */
    match_type_only?: bool
  }
  export interface PathFinderSettings {
    /**
     * The pathfinder performs a step of the backward search every `fwd2bwd_ratio`'th step. The minimum allowed value is 2, which means symmetric search.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PathFinderSettings.html#fwd2bwd_ratio Online documentation}
     */
    fwd2bwd_ratio: uint32
    /**
     * When comparing nodes in open which one to check next, heuristic value is multiplied by this ratio. The higher the number the more is the search directed directly towards the goal.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PathFinderSettings.html#goal_pressure_ratio Online documentation}
     */
    goal_pressure_ratio: double
    use_path_cache: bool
    /**
     * When this is exhausted no more requests are allowed, at the moment the first path to exhaust this will be finished (even if it is hundreds of steps).
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PathFinderSettings.html#max_steps_worked_per_tick Online documentation}
     */
    max_steps_worked_per_tick: double
    max_work_done_per_tick: uint32
    /**
     * Number of elements in the cache.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PathFinderSettings.html#short_cache_size Online documentation}
     */
    short_cache_size: uint32
    long_cache_size: uint32
    /**
     * Minimal distance to goal for path to be searched in short path cache.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PathFinderSettings.html#short_cache_min_cacheable_distance Online documentation}
     */
    short_cache_min_cacheable_distance: double
    /**
     * Minimal number of algorithm steps for path to be inserted into the short path cache.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PathFinderSettings.html#short_cache_min_algo_steps_to_cache Online documentation}
     */
    short_cache_min_algo_steps_to_cache: uint32
    /**
     * Minimal distance to goal for path to be searched in long path cache.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PathFinderSettings.html#long_cache_min_cacheable_distance Online documentation}
     */
    long_cache_min_cacheable_distance: double
    /**
     * When searching for connection to path cache path, search at most for this number of steps times the initial estimate.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PathFinderSettings.html#cache_max_connect_to_cache_steps_multiplier Online documentation}
     */
    cache_max_connect_to_cache_steps_multiplier: uint32
    /**
     * When looking for path from cache make sure it doesn't start too far from requested start in relative distance terms.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PathFinderSettings.html#cache_accept_path_start_distance_ratio Online documentation}
     */
    cache_accept_path_start_distance_ratio: double
    /**
     * When looking for path from cache make sure it doesn't end too far from requested end. This is typically higher than accept value for the start because the end target can be moving.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PathFinderSettings.html#cache_accept_path_end_distance_ratio Online documentation}
     */
    cache_accept_path_end_distance_ratio: double
    /**
     * Same as cache_accept_path_start_distance_ratio, but used for negative cache queries.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PathFinderSettings.html#negative_cache_accept_path_start_distance_ratio Online documentation}
     */
    negative_cache_accept_path_start_distance_ratio: double
    /**
     * Same as cache_accept_path_end_distance_ratio, but used for negative cache queries.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PathFinderSettings.html#negative_cache_accept_path_end_distance_ratio Online documentation}
     */
    negative_cache_accept_path_end_distance_ratio: double
    /**
     * When assigning rating to the best path this * start distances is considered.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PathFinderSettings.html#cache_path_start_distance_rating_multiplier Online documentation}
     */
    cache_path_start_distance_rating_multiplier: double
    /**
     * When assigning rating to the best path this * end distances is considered. This is typically higher than value for the start to achieve better path end quality.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PathFinderSettings.html#cache_path_end_distance_rating_multiplier Online documentation}
     */
    cache_path_end_distance_rating_multiplier: double
    /**
     * Somewhere along the path is stuck enemy we need to avoid. This is mainly to handle situations when units have arrived and are attacking the target then units further in the back will use this and run around the target.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PathFinderSettings.html#stale_enemy_with_same_destination_collision_penalty Online documentation}
     */
    stale_enemy_with_same_destination_collision_penalty: double
    /**
     * If there is a moving unit further than this we don't really care.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PathFinderSettings.html#ignore_moving_enemy_collision_distance Online documentation}
     */
    ignore_moving_enemy_collision_distance: double
    /**
     * Enemy is not moving/or is too close and has different destination.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PathFinderSettings.html#enemy_with_different_destination_collision_penalty Online documentation}
     */
    enemy_with_different_destination_collision_penalty: double
    /**
     * Simplification for now; collision with everything else is this.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PathFinderSettings.html#general_entity_collision_penalty Online documentation}
     */
    general_entity_collision_penalty: double
    /**
     * Collision penalty for successors of positions that require destroy to reach.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PathFinderSettings.html#general_entity_subsequent_collision_penalty Online documentation}
     */
    general_entity_subsequent_collision_penalty: double
    /**
     * Collision penalty for collisions in the extended bounding box but outside the entity's actual bounding box.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PathFinderSettings.html#extended_collision_penalty Online documentation}
     */
    extended_collision_penalty: double
    /**
     * Up until this amount any client will be served by the path finder (no estimate on the path length).
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PathFinderSettings.html#max_clients_to_accept_any_new_request Online documentation}
     */
    max_clients_to_accept_any_new_request: uint32
    /**
     * From max_clients_to_accept_any_new_request till this one only those that have a short estimate will be served.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PathFinderSettings.html#max_clients_to_accept_short_new_request Online documentation}
     */
    max_clients_to_accept_short_new_request: uint32
    /**
     * This is the "threshold" to decide what is short and what is not.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PathFinderSettings.html#direct_distance_to_consider_short_request Online documentation}
     */
    direct_distance_to_consider_short_request: uint32
    /**
     * If a short request takes more than this many steps, it will be rescheduled as a long request.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PathFinderSettings.html#short_request_max_steps Online documentation}
     */
    short_request_max_steps: uint32
    /**
     * How many steps will be allocated to short requests each tick, as a ratio of all available steps per tick.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PathFinderSettings.html#short_request_ratio Online documentation}
     */
    short_request_ratio: double
    /**
     * Absolute minimum of steps that will be performed for every path find request no matter what.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PathFinderSettings.html#min_steps_to_check_path_find_termination Online documentation}
     */
    min_steps_to_check_path_find_termination: uint32
    /**
     * If the current actual cost from start is higher than this times estimate of start to goal then path finding is terminated.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PathFinderSettings.html#start_to_goal_cost_multiplier_to_terminate_path_find Online documentation}
     */
    start_to_goal_cost_multiplier_to_terminate_path_find: double
    overload_levels: readonly uint32[]
    overload_multipliers: readonly double[]
    negative_path_cache_delay_interval: uint32
  }
  export interface PerceivedPerformance {
    /**
     * **Default:** `0`
     *
     * Must be less than or equal to `maximum`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PerceivedPerformance.html#minimum Online documentation}
     */
    minimum?: double
    /**
     * **Default:** `Max double`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PerceivedPerformance.html#maximum Online documentation}
     */
    maximum?: double
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PerceivedPerformance.html#performance_to_activity_rate Online documentation}
     */
    performance_to_activity_rate?: double
  }
  /**
   * Struct type for {@link PersistentWorldAmbientSoundDefinition}
   * @see PersistentWorldAmbientSoundDefinition
   * @see {@link https://lua-api.factorio.com/2.0.16/types/PersistentWorldAmbientSoundDefinition.html Online documentation}
   */
  export interface PersistentWorldAmbientSoundDefinitionStruct {
    sound: Sound
  }
  export type PersistentWorldAmbientSoundDefinition = PersistentWorldAmbientSoundDefinitionStruct | Sound
  export interface PersistentWorldAmbientSoundsDefinition {
    /**
     * Mandatory if `crossfade` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PersistentWorldAmbientSoundsDefinition.html#base_ambience Online documentation}
     */
    base_ambience?: PersistentWorldAmbientSoundDefinition | readonly PersistentWorldAmbientSoundDefinition[]
    /**
     * Mandatory if `crossfade` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PersistentWorldAmbientSoundsDefinition.html#wind Online documentation}
     */
    wind?: PersistentWorldAmbientSoundDefinition | readonly PersistentWorldAmbientSoundDefinition[]
    crossfade?: PersistentWorldAmbientSoundsDefinitionCrossfade
    semi_persistent?: SemiPersistentWorldAmbientSoundDefinition | readonly SemiPersistentWorldAmbientSoundDefinition[]
  }
  export interface PersistentWorldAmbientSoundsDefinitionCrossfade extends FadeStruct {
    order: readonly ["wind" | "base_ambience", "wind" | "base_ambience"]
  }
  export interface PipeConnectionDefinition {
    /**
     * Allowed direction of fluid flow at this connection. Pipeline entities (`pipe`, `pipe-to-ground`, and `storage-tank`) do not support this property.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PipeConnectionDefinition.html#flow_direction Online documentation}
     */
    flow_direction?: "input-output" | "input" | "output"
    /**
     * Selects set of rules to follow when looking for other FluidBox this connection should connect to.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PipeConnectionDefinition.html#connection_type Online documentation}
     */
    connection_type?: PipeConnectionType
    /**
     * Array of the {@link WorkingVisualisation#name WorkingVisualisation::name} of working visualisations to enable when this pipe connection is present.
     *
     * If the owning fluidbox has {@link FluidBox#draw_only_when_connected draw_only_when_connected} set to `true`, then the working visualisation is only enabled if this pipe connection is *connected*.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PipeConnectionDefinition.html#enable_working_visualisations Online documentation}
     */
    enable_working_visualisations?: readonly string[]
    /**
     * Primary direction this connection points to when entity direction is north and the entity is not mirrored. When entity is rotated or mirrored, effective direction will be computed based on this value.
     *
     * Only loaded, and mandatory if `connection_type` is `"normal"` or `"underground"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PipeConnectionDefinition.html#direction Online documentation}
     */
    direction?: Direction
    /**
     * Position relative to entity's center where pipes can connect to this fluidbox regardless the directions of entity.
     *
     * Only loaded if `connection_type` is `"normal"` or `"underground"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PipeConnectionDefinition.html#position Online documentation}
     */
    position?: MapPosition
    /**
     * The 4 separate positions corresponding to the 4 main directions of entity. Positions must correspond to directions going one after another.
     *
     * This is used for example by "pumpjack" where connections are consistently near bottom-left corner (2 directions) or near top-right corner (2 directions).
     *
     * Only loaded, and mandatory if `position` is not defined and if `connection_type` is `"normal"` or `"underground"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PipeConnectionDefinition.html#positions Online documentation}
     */
    positions?: readonly [MapPosition, MapPosition, MapPosition, MapPosition]
    /**
     * **Default:** `"default"`
     *
     * Connection category bitmask makes it possible to define different categories of pipe connections that are not able to connect with each other. For example if a mod should have a "steam pipes" and "cryogenic pipes" category and they should not connect with each other.
     *
     * In case of a normal connection, a bitmask may contain multiple bits set. This allows to create a mod where pipes of different categories would not connect to each other while still making it possible for crafting machines and other entities to connect to any of the specified pipes.
     *
     * By default, all pipe connections have the `"default"` category. So a pipe that should connect to a new category and standard pipes can have the `connection_category = {"my-new-pipe", "default"}`.
     *
     * May have at most one category when `connection_type` is `"underground"`.
     *
     * Only loaded if `connection_type` is `"normal"` or `"underground"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PipeConnectionDefinition.html#connection_category Online documentation}
     */
    connection_category?: string | readonly string[]
    /**
     * **Default:** `0`
     *
     * Only loaded if `connection_type` is `"underground"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PipeConnectionDefinition.html#max_underground_distance Online documentation}
     */
    max_underground_distance?: uint8
    /**
     * Only loaded if `connection_type` is `"underground"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PipeConnectionDefinition.html#max_distance_tint Online documentation}
     */
    max_distance_tint?: Color
    /**
     * An underground connection may be defined as colliding with tiles in which case if any tile is placed between underground ends the connection will not be established.
     *
     * In order to connect, both ends must have the same collision mask specified.
     *
     * Only loaded if `connection_type` is `"underground"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PipeConnectionDefinition.html#underground_collision_mask Online documentation}
     */
    underground_collision_mask?: CollisionMaskConnector
    /**
     * Expected to be unique inside of a single entity. Used to uniquely identify where a linked connection should connect to.
     *
     * Only loaded, and mandatory if `connection_type` is `"linked"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PipeConnectionDefinition.html#linked_connection_id Online documentation}
     */
    linked_connection_id?: FluidBoxLinkedConnectionID
  }
  /**
   * ## Union members
   * - `"normal"`: 2 connections are required to be adjacent tiles next to each other on their respective directions.
   * - `"underground"`: Allows distant connection up to a certain limit. Those connections may be blocked by tiles.
   * - `"linked"`: For mods, connections between entities have to be explicitly requested by script.
   * @see PipeConnectionDefinition.connection_type
   * @see {@link https://lua-api.factorio.com/2.0.16/types/PipeConnectionDefinition.html#connection_type Online documentation}
   */
  export type PipeConnectionType = "normal" | "underground" | "linked"
  export interface PipePictures {
    straight_vertical_single?: Sprite
    straight_vertical?: Sprite
    straight_vertical_window?: Sprite
    straight_horizontal?: Sprite
    straight_horizontal_window?: Sprite
    corner_up_right?: Sprite
    corner_up_left?: Sprite
    corner_down_right?: Sprite
    corner_down_left?: Sprite
    t_up?: Sprite
    t_down?: Sprite
    t_right?: Sprite
    t_left?: Sprite
    cross?: Sprite
    ending_up?: Sprite
    ending_down?: Sprite
    ending_right?: Sprite
    ending_left?: Sprite
    straight_vertical_single_frozen?: Sprite
    straight_vertical_frozen?: Sprite
    straight_vertical_window_frozen?: Sprite
    straight_horizontal_frozen?: Sprite
    straight_horizontal_window_frozen?: Sprite
    corner_up_right_frozen?: Sprite
    corner_up_left_frozen?: Sprite
    corner_down_right_frozen?: Sprite
    corner_down_left_frozen?: Sprite
    t_up_frozen?: Sprite
    t_down_frozen?: Sprite
    t_right_frozen?: Sprite
    t_left_frozen?: Sprite
    cross_frozen?: Sprite
    ending_up_frozen?: Sprite
    ending_down_frozen?: Sprite
    ending_right_frozen?: Sprite
    ending_left_frozen?: Sprite
    straight_vertical_single_visualization?: Sprite
    straight_vertical_visualization?: Sprite
    straight_vertical_window_visualization?: Sprite
    straight_horizontal_visualization?: Sprite
    straight_horizontal_window_visualization?: Sprite
    corner_up_right_visualization?: Sprite
    corner_up_left_visualization?: Sprite
    corner_down_right_visualization?: Sprite
    corner_down_left_visualization?: Sprite
    t_up_visualization?: Sprite
    t_down_visualization?: Sprite
    t_right_visualization?: Sprite
    t_left_visualization?: Sprite
    cross_visualization?: Sprite
    ending_up_visualization?: Sprite
    ending_down_visualization?: Sprite
    ending_right_visualization?: Sprite
    ending_left_visualization?: Sprite
    straight_vertical_single_disabled_visualization?: Sprite
    straight_vertical_disabled_visualization?: Sprite
    straight_vertical_window_disabled_visualization?: Sprite
    straight_horizontal_disabled_visualization?: Sprite
    straight_horizontal_window_disabled_visualization?: Sprite
    corner_up_right_disabled_visualization?: Sprite
    corner_up_left_disabled_visualization?: Sprite
    corner_down_right_disabled_visualization?: Sprite
    corner_down_left_disabled_visualization?: Sprite
    t_up_disabled_visualization?: Sprite
    t_down_disabled_visualization?: Sprite
    t_right_disabled_visualization?: Sprite
    t_left_disabled_visualization?: Sprite
    cross_disabled_visualization?: Sprite
    ending_up_disabled_visualization?: Sprite
    ending_down_disabled_visualization?: Sprite
    ending_right_disabled_visualization?: Sprite
    ending_left_disabled_visualization?: Sprite
    horizontal_window_background?: Sprite
    vertical_window_background?: Sprite
    fluid_background?: Sprite
    /**
     * Visualizes the flow of the fluid in the pipe. Drawn when `(fluid_temp - fluid_min_temp) / (fluid_max_temp - fluid_min_temp)` is less than or equal to `1/3` and the fluid's temperature is below {@link FluidPrototype#gas_temperature FluidPrototype::gas_temperature}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PipePictures.html#low_temperature_flow Online documentation}
     */
    low_temperature_flow?: Sprite
    /**
     * Visualizes the flow of the fluid in the pipe. Drawn when `(fluid_temp - fluid_min_temp) / (fluid_max_temp - fluid_min_temp)` is larger than `1/3` and less than or equal to `2/3` and the fluid's temperature is below {@link FluidPrototype#gas_temperature FluidPrototype::gas_temperature}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PipePictures.html#middle_temperature_flow Online documentation}
     */
    middle_temperature_flow?: Sprite
    /**
     * Visualizes the flow of the fluid in the pipe. Drawn when `(fluid_temp - fluid_min_temp) / (fluid_max_temp - fluid_min_temp)` is larger than `2/3` and the fluid's temperature is below {@link FluidPrototype#gas_temperature FluidPrototype::gas_temperature}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PipePictures.html#high_temperature_flow Online documentation}
     */
    high_temperature_flow?: Sprite
    /**
     * Visualizes the flow of the fluid in the pipe. Drawn when the fluid's temperature is above {@link FluidPrototype#gas_temperature FluidPrototype::gas_temperature}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PipePictures.html#gas_flow Online documentation}
     */
    gas_flow?: Animation
  }
  /**
   * @see ItemPrototype.place_as_tile
   * @see {@link https://lua-api.factorio.com/2.0.16/prototypes/ItemPrototype.html#place_as_tile Online documentation}
   */
  export interface PlaceAsTile {
    result: TileID
    condition: CollisionMaskConnector
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PlaceAsTile.html#invert Online documentation}
     */
    invert?: bool
    condition_size: uint32
    tile_condition?: readonly TileID[]
  }
  export interface PlaceEquipmentTipTrigger extends CountBasedTipTrigger {
    readonly type: "place-equipment"
    equipment?: EquipmentID
  }
  export interface PlanTrainPathTipTrigger {
    readonly type: "plan-train-path"
    distance: double
  }
  export interface PlanetPrototypeMapGenSettings {
    cliff_settings?: CliffPlacementSettings
    territory_settings?: TerritorySettings
    autoplace_controls?: Record<AutoplaceControlID, FrequencySizeRichness>
    /**
     * Each setting in this table maps the string type to the settings for that type.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PlanetPrototypeMapGenSettings.html#autoplace_settings Online documentation}
     */
    autoplace_settings?: Record<"entity" | "tile" | "decorative", AutoplaceSettings>
    /**
     * Map of property name (e.g. "elevation") to name of noise expression that will provide it. Entries may be omitted. A notable usage is changing autoplace behavior of an entity based on the preset, which cannot be read from a noise expression.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PlanetPrototypeMapGenSettings.html#property_expression_names Online documentation}
     */
    property_expression_names?: Record<string, string | bool | double>
    /**
     * **Default:** `false`
     *
     * Used for showing the planet icon in map generator GUI next to moisture climate control.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PlanetPrototypeMapGenSettings.html#moisture_climate_control Online documentation}
     */
    moisture_climate_control?: bool
    /**
     * **Default:** `false`
     *
     * Used for showing the planet icon in map generator GUI next to aux climate control.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PlanetPrototypeMapGenSettings.html#aux_climate_control Online documentation}
     */
    aux_climate_control?: bool
  }
  /**
   * Defines when controller vibrations should be played.
   *
   * ## Union members
   * - `"character_actions"`: Play the vibration only if it was caused by the player. For example when shooting a gun, vibration will play when the character shoots but not when a turret shoots.
   * - `"everything"`: Always play the vibration. Useful for example for explosions.
   * @see GameControllerVibrationData.play_for
   * @see {@link https://lua-api.factorio.com/2.0.16/types/GameControllerVibrationData.html#play_for Online documentation}
   */
  export type PlayFor = "character_actions" | "everything"
  export interface PlaySoundTriggerEffectItem extends TriggerEffectItem {
    readonly type: "play-sound"
    sound: Sound
    /**
     * **Default:** `0`
     *
     * Negative values are silently clamped to 0.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PlaySoundTriggerEffectItem.html#min_distance Online documentation}
     */
    min_distance?: float
    /**
     * **Default:** `1e21`
     *
     * Negative values are silently clamped to 0.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PlaySoundTriggerEffectItem.html#max_distance Online documentation}
     */
    max_distance?: float
    /**
     * **Default:** `1`
     *
     * Negative values are silently clamped to 0.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PlaySoundTriggerEffectItem.html#volume_modifier Online documentation}
     */
    volume_modifier?: float
    /**
     * **Default:** `1`
     *
     * Negative values are silently clamped to 0.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PlaySoundTriggerEffectItem.html#audible_distance_modifier Online documentation}
     */
    audible_distance_modifier?: float
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PlaySoundTriggerEffectItem.html#play_on_target_position Online documentation}
     */
    play_on_target_position?: bool
  }
  /**
   * @see UtilityConstants.player_colors
   * @see {@link https://lua-api.factorio.com/2.0.16/prototypes/UtilityConstants.html#player_colors Online documentation}
   */
  export interface PlayerColorData {
    name: string
    player_color: Color
    chat_color: Color
  }
  /**
   * ## Union members
   * - `"all"`
   * - `"keyboard_and_mouse"`
   * - `"game_controller"`
   * @see {@link https://lua-api.factorio.com/2.0.16/types/PlayerInputMethodFilter.html Online documentation}
   */
  export type PlayerInputMethodFilter = "all" | "keyboard_and_mouse" | "game_controller"
  export interface PlumeEffect extends StatelessVisualisation {
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PlumeEffect.html#age_discrimination Online documentation}
     */
    age_discrimination?: int8
  }
  export interface PlumesSpecification {
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PlumesSpecification.html#min_probability Online documentation}
     */
    min_probability?: float
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PlumesSpecification.html#max_probability Online documentation}
     */
    max_probability?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PlumesSpecification.html#min_y_offset Online documentation}
     */
    min_y_offset?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PlumesSpecification.html#max_y_offset Online documentation}
     */
    max_y_offset?: float
    /**
     * Array may not be empty and may at most have 255 elements.
     *
     * Non-zero `period` needs to be provided. May not have `positions` or `particle_tick_offset`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PlumesSpecification.html#stateless_visualisations Online documentation}
     */
    stateless_visualisations?: PlumeEffect | readonly PlumeEffect[]
  }
  /**
   * One frame in time for a Bezier interpolation.
   * @see PodAnimationProcessionLayer.frames
   * @see {@link https://lua-api.factorio.com/2.0.16/types/PodAnimationProcessionLayer.html#frames Online documentation}
   */
  export interface PodAnimationProcessionBezierControlPoint {
    timestamp: MapTick
    /**
     * the frame of the pod animation played.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PodAnimationProcessionBezierControlPoint.html#frame Online documentation}
     */
    frame: float
  }
  export interface PodAnimationProcessionLayer {
    readonly type: "pod-animation"
    graphic?: ProcessionGraphic
    /**
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PodAnimationProcessionLayer.html#frames Online documentation}
     */
    frames: readonly PodAnimationProcessionBezierControlPoint[]
  }
  /**
   * One frame in time for a Bezier interpolation.
   * @see PodDistanceTraveledProcessionLayer.frames
   * @see {@link https://lua-api.factorio.com/2.0.16/types/PodDistanceTraveledProcessionLayer.html#frames Online documentation}
   */
  export interface PodDistanceTraveledProcessionBezierControlPoint {
    /**
     * Mandatory if `distance` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PodDistanceTraveledProcessionBezierControlPoint.html#timestamp Online documentation}
     */
    timestamp?: MapTick
    /**
     * `distance` and `distance_t` interpolate a double smoothly over time.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PodDistanceTraveledProcessionBezierControlPoint.html#distance Online documentation}
     */
    distance?: double
    /**
     * Bidirectional tangent at the given timestamp.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PodDistanceTraveledProcessionBezierControlPoint.html#distance_t Online documentation}
     */
    distance_t?: double
  }
  export interface PodDistanceTraveledProcessionLayer {
    readonly type: "pod-distance-traveled"
    /**
     * The group this layer belongs to, for inheritance.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PodDistanceTraveledProcessionLayer.html#reference_group Online documentation}
     */
    reference_group?: ProcessionLayerInheritanceGroupID
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PodDistanceTraveledProcessionLayer.html#contribute_to_distance_traveled Online documentation}
     */
    contribute_to_distance_traveled?: bool
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PodDistanceTraveledProcessionLayer.html#distance_traveled_contribution Online documentation}
     */
    distance_traveled_contribution?: float
    /**
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PodDistanceTraveledProcessionLayer.html#frames Online documentation}
     */
    frames: readonly PodDistanceTraveledProcessionBezierControlPoint[]
  }
  /**
   * One frame in time for a Bezier interpolation.
   * @see PodMovementProcessionLayer.frames
   * @see {@link https://lua-api.factorio.com/2.0.16/types/PodMovementProcessionLayer.html#frames Online documentation}
   */
  export interface PodMovementProcessionBezierControlPoint {
    /**
     * Mandatory if `tilt` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PodMovementProcessionBezierControlPoint.html#timestamp Online documentation}
     */
    timestamp?: MapTick
    /**
     * `tilt` and `tilt_t` interpolate a double smoothly over time.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PodMovementProcessionBezierControlPoint.html#tilt Online documentation}
     */
    tilt?: double
    /**
     * Bidirectional tangent at the given timestamp.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PodMovementProcessionBezierControlPoint.html#tilt_t Online documentation}
     */
    tilt_t?: double
    /**
     * `offset` and `offset_t` interpolate a vector smoothly over time using `offset_rate` and `offset_rate_t` for a 0-1 rate curve.
     *
     * Vector value.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PodMovementProcessionBezierControlPoint.html#offset Online documentation}
     */
    offset?: Vector
    /**
     * Vector tangent.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PodMovementProcessionBezierControlPoint.html#offset_t Online documentation}
     */
    offset_t?: Vector
    /**
     * Rate 0-1 value.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PodMovementProcessionBezierControlPoint.html#offset_rate Online documentation}
     */
    offset_rate?: double
    /**
     * Rate tangent.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PodMovementProcessionBezierControlPoint.html#offset_rate_t Online documentation}
     */
    offset_rate_t?: double
  }
  /**
   * @example
   * {
   *   type = "pod-movement",
   *   frames =
   *   {
   *     { timestamp = 700 , tilt = 0.0               , tilt_t = 0 },
   *     { timestamp = 700 , offset = {0, 0 - 500}    , offset_t = {0, -40} },
   *     { timestamp = 900 , offset = {15, -60 - 500} , offset_t = {-10, -10} },
   *     { timestamp = 900 , opacity = 1.0 },
   *     { timestamp = 960 , tilt = 0.05              , tilt_t = -0.03 },
   *     { timestamp = 1050, tilt = 0.25              , tilt_t = 0 },
   *     { timestamp = 1050, offset = {40, -70 - 500} , offset_t = {-1, 0} },
   *     { timestamp = 1050, opacity = 0.0 },
   *     { timestamp = 700 , offset_rate = 0 },
   *     { timestamp = 1050, offset_rate = 1.0 }
   *   }
   * }
   * @see {@link https://lua-api.factorio.com/2.0.16/types/PodMovementProcessionLayer.html Online documentation}
   */
  export interface PodMovementProcessionLayer {
    readonly type: "pod-movement"
    /**
     * The group this layer belongs to, for inheritance.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PodMovementProcessionLayer.html#reference_group Online documentation}
     */
    reference_group?: ProcessionLayerInheritanceGroupID
    /**
     * Adds the final position value from given layer to this one.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PodMovementProcessionLayer.html#inherit_from Online documentation}
     */
    inherit_from?: ProcessionLayerInheritanceGroupID
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PodMovementProcessionLayer.html#contribute_to_distance_traveled Online documentation}
     */
    contribute_to_distance_traveled?: bool
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PodMovementProcessionLayer.html#distance_traveled_contribution Online documentation}
     */
    distance_traveled_contribution?: float
    /**
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PodMovementProcessionLayer.html#frames Online documentation}
     */
    frames: readonly PodMovementProcessionBezierControlPoint[]
  }
  /**
   * One frame in time for a Bezier interpolation.
   * @see PodOpacityProcessionLayer.frames
   * @see {@link https://lua-api.factorio.com/2.0.16/types/PodOpacityProcessionLayer.html#frames Online documentation}
   */
  export interface PodOpacityProcessionBezierControlPoint {
    /**
     * Mandatory if `cutscene_opacity` or `outside_opacity` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PodOpacityProcessionBezierControlPoint.html#timestamp Online documentation}
     */
    timestamp?: MapTick
    /**
     * `cutscene_opacity` and `cutscene_opacity_t` interpolate a double smoothly over time.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PodOpacityProcessionBezierControlPoint.html#cutscene_opacity Online documentation}
     */
    cutscene_opacity?: double
    /**
     * Bidirectional tangent at the given timestamp.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PodOpacityProcessionBezierControlPoint.html#cutscene_opacity_t Online documentation}
     */
    cutscene_opacity_t?: double
    /**
     * `outside_opacity` and `outside_opacity_t` interpolate a double smoothly over time.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PodOpacityProcessionBezierControlPoint.html#outside_opacity Online documentation}
     */
    outside_opacity?: double
    /**
     * Bidirectional tangent at the given timestamp.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PodOpacityProcessionBezierControlPoint.html#outside_opacity_t Online documentation}
     */
    outside_opacity_t?: double
    /**
     * `lut_blend` and `lut_blend_t` interpolate a double smoothly over time.
     *
     * LUT won't be overridden however, until the pod is drawn above the game via `draw_switch_tick`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PodOpacityProcessionBezierControlPoint.html#lut_blend Online documentation}
     */
    lut_blend?: double
    /**
     * Bidirectional tangent at the given timestamp.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PodOpacityProcessionBezierControlPoint.html#lut_blend_t Online documentation}
     */
    lut_blend_t?: double
  }
  export interface PodOpacityProcessionLayer {
    readonly type: "pod-opacity"
    lut: ColorLookupTable
    /**
     * Default values if unspecified:
     *
     * - cutscene_opacity : 1.0
     *
     * - outside_opacity : 1.0
     *
     * - lut_blend : 0.0
     *
     * - environment_volume : 1.0
     *
     * - environment_muffle_intensity : 0.0
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PodOpacityProcessionLayer.html#frames Online documentation}
     */
    frames: readonly PodOpacityProcessionBezierControlPoint[]
  }
  /**
   * The pollution settings, the values are for 60 ticks (1 second).
   * @see {@link https://lua-api.factorio.com/2.0.16/types/PollutionSettings.html Online documentation}
   */
  export interface PollutionSettings {
    enabled: bool
    /**
     * Amount that is diffused to neighboring chunks.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PollutionSettings.html#diffusion_ratio Online documentation}
     */
    diffusion_ratio: double
    /**
     * This much pollution units must be on the chunk to start diffusing.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PollutionSettings.html#min_to_diffuse Online documentation}
     */
    min_to_diffuse: double
    /**
     * Constant modifier a percentage of 1; the pollution eaten by a chunks tiles. Also known as absorption modifier.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PollutionSettings.html#ageing Online documentation}
     */
    ageing: double
    /**
     * Anything bigger than this is visualized as this value.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PollutionSettings.html#expected_max_per_chunk Online documentation}
     */
    expected_max_per_chunk: double
    /**
     * Anything lower than this (but > 0) is visualized as this value.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PollutionSettings.html#min_to_show_per_chunk Online documentation}
     */
    min_to_show_per_chunk: double
    min_pollution_to_damage_trees: double
    pollution_with_max_forest_damage: double
    pollution_restored_per_tree_damage: double
    pollution_per_tree_damage: double
    max_pollution_to_restore_trees: double
    enemy_attack_pollution_consumption_modifier: double
  }
  /**
   * Probabilities of all items must add up to 100.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ProbabilityTable.html Online documentation}
   */
  export type ProbabilityTable = readonly ProbabilityTableItem[]
  /**
   * The first number is the value.
   *
   * The second number is the probability in percents. It must be in the `(0, 100]` interval.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ProbabilityTableItem.html Online documentation}
   */
  export type ProbabilityTableItem = readonly [uint8, uint8]
  export interface ProcessionAudio {
    readonly type: ProcessionAudioType
    /**
     * Mandatory if `type` is `"sound"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProcessionAudio.html#sound Online documentation}
     */
    sound?: Sound
    /**
     * Mandatory if `type` is `"looped-sound"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProcessionAudio.html#looped_sound Online documentation}
     */
    looped_sound?: InterruptibleSound
    /**
     * Mandatory if `type` is `"pod_catalogue"` or `type` is `"location_catalogue"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProcessionAudio.html#catalogue_id Online documentation}
     */
    catalogue_id?: uint32
  }
  /**
   * Allows a prototype to load variable amount of sounds which may be referenced by index.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ProcessionAudioCatalogue.html Online documentation}
   */
  export type ProcessionAudioCatalogue = readonly ProcessionAudioCatalogueItem[]
  export interface ProcessionAudioCatalogueItem {
    index: uint32
    /**
     * One or the other.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProcessionAudioCatalogueItem.html#sound Online documentation}
     */
    sound?: Sound
    /**
     * One or the other.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProcessionAudioCatalogueItem.html#looped_sound Online documentation}
     */
    looped_sound?: InterruptibleSound
  }
  /**
   * Controls sounds during procession.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ProcessionAudioEvent.html Online documentation}
   */
  export interface ProcessionAudioEvent {
    readonly type: ProcessionAudioEventType
    /**
     * Has to be defined unless the type is "stop-looped-sound".
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProcessionAudioEvent.html#usage Online documentation}
     */
    usage?: ProcessionAudioUsage
    /**
     * Has to be defined unless the type is "stop-looped-sound".
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProcessionAudioEvent.html#audio Online documentation}
     */
    audio?: ProcessionAudio
    /**
     * Has to be defined unless the type is "play-sound".
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProcessionAudioEvent.html#loop_id Online documentation}
     */
    loop_id?: uint32
  }
  /**
   * Type of {@link ProcessionAudioEvent}.
   *
   * ## Union members
   * - `"play-sound"`: Plays a single sound once.
   * - `"start-looped-sound"`: Starts a looping sound under a specified index until "stop-looped-sound" is triggered or the procession ends. Starting a second looped sound will stop the first.
   * - `"stop-looped-sound"`: Ends a looping sound under a specified index.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ProcessionAudioEventType.html Online documentation}
   */
  export type ProcessionAudioEventType = "play-sound" | "start-looped-sound" | "stop-looped-sound"
  /**
   * Types of {@link ProcessionAudio}.
   *
   * ## Union members
   * - `"none"`: Empty graphic.
   * - `"sound"`: {@link Sound}.
   * - `"looped-sound"`: {@link Sound}.
   * - `"pod-catalogue"`: Defined inside {@link CargoPodPrototype}.
   * - `"location-catalogue"`: Defined inside {@link SpaceLocationPrototype}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ProcessionAudioType.html Online documentation}
   */
  export type ProcessionAudioType = "none" | "sound" | "looped-sound" | "pod-catalogue" | "location-catalogue"
  /**
   * Who will hear {@link ProcessionAudioEvent}.
   *
   * ## Union members
   * - `"both"`: The player inside a pod and an outside viewer.
   * - `"passenger"`: Only the player inside a pod.
   * - `"outside"`: Only an outside viewer.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ProcessionAudioUsage.html Online documentation}
   */
  export type ProcessionAudioUsage = "both" | "passenger" | "outside"
  export interface ProcessionGraphic {
    readonly type: ProcessionGraphicType
    /**
     * Mandatory if `type` is `"sprite"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProcessionGraphic.html#sprite Online documentation}
     */
    sprite?: Sprite
    /**
     * Mandatory if `type` is `"animation"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProcessionGraphic.html#animation Online documentation}
     */
    animation?: Animation
    /**
     * Mandatory if `type` is `"pod-catalogue"` or `type` is `"location-catalogue"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProcessionGraphic.html#catalogue_id Online documentation}
     */
    catalogue_id?: uint32
  }
  /**
   * Allows a prototype to load variable amount of sprites which may be referenced by index.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ProcessionGraphicCatalogue.html Online documentation}
   */
  export type ProcessionGraphicCatalogue = readonly ProcessionGraphicCatalogueItem[]
  /**
   * Either picture or animation must be provided.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ProcessionGraphicCatalogueItem.html Online documentation}
   */
  export interface ProcessionGraphicCatalogueItem {
    index: uint32
    animation?: Animation
    picture?: Sprite
  }
  /**
   * Types of {@link ProcessionGraphic}.
   *
   * ## Union members
   * - `"none"`: Empty graphic.
   * - `"sprite"`: {@link Sprite}.
   * - `"animation"`: {@link Animation}.
   * - `"pod-catalogue"`: Defined inside {@link CargoPodPrototype}.
   * - `"location-catalogue"`: Defined inside {@link SpaceLocationPrototype}.
   * - `"hatch-location-catalogue-index"`: Uses index from {@link CargoHatchDefinition} to address catalogue inside {@link SpaceLocationPrototype}. Only works for graphics drawn in-world such as 'single-graphic'.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ProcessionGraphicType.html Online documentation}
   */
  export type ProcessionGraphicType =
    | "none"
    | "sprite"
    | "animation"
    | "pod-catalogue"
    | "location-catalogue"
    | "hatch-location-catalogue-index"
  /**
   * The name of a {@link ProcessionPrototype}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ProcessionID.html Online documentation}
   */
  export type ProcessionID = string
  /**
   * Describes one aspect of a procession. Animation and picture are interchangeable for types that require it.
   *
   * Loaded as one of the procession layers, based on the value of the `type` key.
   *
   * ## Union members
   * - {@link PodDistanceTraveledProcessionLayer}: Loaded when the `type` is `"pod-distance-traveled"`. Add to distance traveled by the pod. Used by other visual layers. single layer of this type is allowed per ProcessionPrototype.
   * - {@link PodMovementProcessionLayer}: Loaded when the `type` is `"pod-movement"`. Defines the timeline for the pod movement and rotation. A single layer of this type is allowed per ProcessionPrototype.
   * - {@link PodOpacityProcessionLayer}: Loaded when the `type` is `"pod-opacity"`. Defines the outside and cutscene opacity of the pod and strength of surface lighting. A single layer of this type is allowed per ProcessionPrototype.
   * - {@link SingleGraphicProcessionLayer}: Loaded when the `type` is `"single-graphic"`. Paints a sprite over the cargo pod.
   * - {@link CoverGraphicProcessionLayer}: Loaded when the `type` is `"cover-graphic"`. Paints a tiling sprite over the entire screen. Optionally can mask nearby area or far area.
   * - {@link TintProcessionLayer}: Loaded when the `type` is `"tint"`. Tints the whole surface with a color.
   * - {@link PodAnimationProcessionLayer}: Loaded when the `type` is `"pod-animation"`. Defines an override graphic for the pod within the given range.
   * @example
   * {
   *   type = "pod-movement",
   *   frames =
   *   {
   *     { timestamp = 700 , tilt = 0.0               , tilt_t = 0 },
   *     { timestamp = 700 , offset = {0, 0 - 500}    , offset_t = {0, -40} },
   *     { timestamp = 900 , offset = {15, -60 - 500} , offset_t = {-10, -10} },
   *     { timestamp = 900 , opacity = 1.0 },
   *     { timestamp = 960 , tilt = 0.05              , tilt_t = -0.03 },
   *     { timestamp = 1050, tilt = 0.25              , tilt_t = 0 },
   *     { timestamp = 1050, offset = {40, -70 - 500} , offset_t = {-1, 0} },
   *     { timestamp = 1050, opacity = 0.0 },
   *     { timestamp = 700 , offset_rate = 0 },
   *     { timestamp = 1050, offset_rate = 1.0 }
   *   }
   * }
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ProcessionLayer.html Online documentation}
   */
  export type ProcessionLayer =
    | PodDistanceTraveledProcessionLayer
    | PodMovementProcessionLayer
    | PodOpacityProcessionLayer
    | SingleGraphicProcessionLayer
    | CoverGraphicProcessionLayer
    | TintProcessionLayer
    | PodAnimationProcessionLayer
  /**
   * The name of an {@link ProcessionLayerInheritanceGroup}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ProcessionLayerInheritanceGroupID.html Online documentation}
   */
  export type ProcessionLayerInheritanceGroupID = string
  export type ProcessionLayerWithTime = ProcessionLayer
  /**
   * Lists arrivals and departures available for travel to a given surface.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ProcessionSet.html Online documentation}
   */
  export interface ProcessionSet {
    arrival: readonly ProcessionID[]
    departure: readonly ProcessionID[]
  }
  /**
   * A wrapper for a collection of {@link ProcessionLayer ProcessionLayers}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ProcessionTimeline.html Online documentation}
   */
  export interface ProcessionTimeline {
    /**
     * The time to play this cutscene regardless of individual layer durations.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProcessionTimeline.html#duration Online documentation}
     */
    duration: MapTick
    /**
     * **Default:** `1/2 of duration`
     *
     * Time to initiate usage specific actions:
     *
     * - Ascending animation will detach from rocket on this tick.
     *
     * - Descending animation will request hatch to be opened.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProcessionTimeline.html#special_action_tick Online documentation}
     */
    special_action_tick?: MapTick
    /**
     * **Default:** `1/2 of duration`
     *
     * During procession, the pod will at some point start being drawn above the rest of the game:
     *
     * - When ascending this tick will go from world to above.
     *
     * - When descending this tick will go from above to world.
     *
     * Notably, LUT override won't be applied until the pod is drawn above the game.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProcessionTimeline.html#draw_switch_tick Online documentation}
     */
    draw_switch_tick?: MapTick
    /**
     * **Default:** `0`
     *
     * The real duration of the intermezzo playing will be above this value.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProcessionTimeline.html#intermezzo_min_duration Online documentation}
     */
    intermezzo_min_duration?: MapTick
    /**
     * **Default:** `0`
     *
     * The real duration of the intermezzo playing will be below this value.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProcessionTimeline.html#intermezzo_max_duration Online documentation}
     */
    intermezzo_max_duration?: MapTick
    layers: readonly ProcessionLayer[]
    audio_events: readonly ProcessionAudioEvent[]
  }
  /**
   * ## Union members
   * - {@link ItemProductPrototype}: Loaded when the `type` is `"item"`.
   * - {@link FluidProductPrototype}: Loaded when the `type` is `"fluid"`.
   * - {@link ResearchProgressProductPrototype}: Loaded when the `type` is `"research-progress"`.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ProductPrototype.html Online documentation}
   */
  export type ProductPrototype = ItemProductPrototype | FluidProductPrototype | ResearchProgressProductPrototype
  export interface ProductionHealthEffect {
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProductionHealthEffect.html#producing Online documentation}
     */
    producing?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProductionHealthEffect.html#not_producing Online documentation}
     */
    not_producing?: float
  }
  /**
   * Specifies how the entity will utilize this fluidbox. `input-output` should only be used for boilers in fluid heating mode.
   *
   * ## Union members
   * - `"none"`
   * - `"input"`
   * - `"input-output"`
   * - `"output"`
   * @see FluidBox.production_type
   * @see {@link https://lua-api.factorio.com/2.0.16/types/FluidBox.html#production_type Online documentation}
   */
  export type ProductionType = "none" | "input" | "input-output" | "output"
  /**
   * @see ProgrammableSpeakerPrototype.instruments
   * @see {@link https://lua-api.factorio.com/2.0.16/prototypes/ProgrammableSpeakerPrototype.html#instruments Online documentation}
   */
  export interface ProgrammableSpeakerInstrument {
    name: string
    /**
     * Cannot be an empty array.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProgrammableSpeakerInstrument.html#notes Online documentation}
     */
    notes: readonly ProgrammableSpeakerNote[]
  }
  export interface ProgrammableSpeakerNote {
    name: string
    /**
     * Cannot contain aggregation.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProgrammableSpeakerNote.html#sound Online documentation}
     */
    sound: Sound
  }
  export interface ProgressBarStyleSpecification extends BaseStyleSpecification {
    readonly type: "progressbar_style"
    bar_width?: uint32
    color?: Color
    /**
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProgressBarStyleSpecification.html#other_colors Online documentation}
     */
    other_colors?: readonly OtherColors[]
    bar?: ElementImageSet
    bar_background?: ElementImageSet
    /**
     * Name of a {@link FontPrototype}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProgressBarStyleSpecification.html#font Online documentation}
     */
    font?: string
    font_color?: Color
    filled_font_color?: Color
    embed_text_in_bar?: bool
    side_text_padding?: int16
  }
  export interface ProjectileAttackParameters extends BaseAttackParameters {
    readonly type: "projectile"
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProjectileAttackParameters.html#apply_projection_to_projectile_creation_position Online documentation}
     */
    apply_projection_to_projectile_creation_position?: bool
    /**
     * **Default:** ``{0, 0}``
     *
     * When used with `projectile_creation_parameters`, this offsets what the turret's sprite looks at. Setting to `{0,1}` will cause the turret to aim one tile up from the target but the projectile will still aim for the entity. Can be used to give the illusion of height but can also confuse aim logic when set too high.
     *
     * When used without `projectile_creation_parameters`, this sets the turret's rotation axis.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProjectileAttackParameters.html#projectile_center Online documentation}
     */
    projectile_center?: Vector
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProjectileAttackParameters.html#projectile_creation_distance Online documentation}
     */
    projectile_creation_distance?: float
    /**
     * Used to show bullet shells/casings being ejected from the gun, see {@linkplain https://factorio.com/blog/post/fff-345 artillery shell casings}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProjectileAttackParameters.html#shell_particle Online documentation}
     */
    shell_particle?: CircularParticleCreationSpecification
    /**
     * Used to shoot projectiles from arbitrary points. Used by worms. If not set then the launch positions are calculated using `projectile_center` and `projectile_creation_distance`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProjectileAttackParameters.html#projectile_creation_parameters Online documentation}
     */
    projectile_creation_parameters?: CircularProjectileCreationSpecification
    /**
     * **Default:** `0`
     *
     * Used to shoot from different sides of the turret. Setting to `0.25` shoots from the right side, `0.5` shoots from the back, and `0.75` shoots from the left. The turret will look at the enemy as normal but the bullet will spawn from the offset position. Can be used to create right-handed weapons.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProjectileAttackParameters.html#projectile_orientation_offset Online documentation}
     */
    projectile_orientation_offset?: RealOrientation
    /**
     * Used to shoot from multiple points. The turret will look at the enemy as normal but the bullet will spawn from a random offset position. Can be used to create multi-barreled weapons.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProjectileAttackParameters.html#projectile_creation_offsets Online documentation}
     */
    projectile_creation_offsets?: readonly Vector[]
  }
  export interface ProjectileTriggerDelivery extends TriggerDeliveryItem {
    readonly type: "projectile"
    /**
     * Name of a {@link ProjectilePrototype}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProjectileTriggerDelivery.html#projectile Online documentation}
     */
    projectile: EntityID
    /**
     * Starting speed in tiles per tick.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProjectileTriggerDelivery.html#starting_speed Online documentation}
     */
    starting_speed: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProjectileTriggerDelivery.html#starting_speed_deviation Online documentation}
     */
    starting_speed_deviation?: float
    /**
     * **Default:** `0`
     *
     * Maximum deviation of the projectile from source orientation, in +/- (`x radians / 2`). Example: `3.14 radians -> +/- (180° / 2)`, meaning up to 90° deviation in either direction of rotation.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProjectileTriggerDelivery.html#direction_deviation Online documentation}
     */
    direction_deviation?: float
    /**
     * **Default:** `0`
     *
     * The maximum deviation of the projectile maximum range from `max_range` is `max_range × range_deviation ÷ 2`. This means a deviation of `0.5` will appear as a maximum of `0.25` (25%) deviation of an initial range goal. Post-deviation range may exceed `max_range` or be less than `min_range`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProjectileTriggerDelivery.html#range_deviation Online documentation}
     */
    range_deviation?: float
    /**
     * **Default:** `1000`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProjectileTriggerDelivery.html#max_range Online documentation}
     */
    max_range?: double
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ProjectileTriggerDelivery.html#min_range Online documentation}
     */
    min_range?: double
  }
  /**
   * Used by {@link UnitPrototype}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/PrototypeStrafeSettings.html Online documentation}
   */
  export interface PrototypeStrafeSettings {
    /**
     * **Default:** `20`
     *
     * Must be >= `0`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PrototypeStrafeSettings.html#max_distance Online documentation}
     */
    max_distance?: double
    /**
     * **Default:** `10`
     *
     * Must be between 0 and max_distance inclusive.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PrototypeStrafeSettings.html#ideal_distance Online documentation}
     */
    ideal_distance?: double
    /**
     * **Default:** `0.5`
     *
     * Must be >= `0`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PrototypeStrafeSettings.html#ideal_distance_tolerance Online documentation}
     */
    ideal_distance_tolerance?: double
    /**
     * **Default:** `1`
     *
     * Must be >= `0`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PrototypeStrafeSettings.html#ideal_distance_variance Online documentation}
     */
    ideal_distance_variance?: double
    /**
     * **Default:** `0.5`
     *
     * Must be between between 0 and 1 inclusive.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PrototypeStrafeSettings.html#ideal_distance_importance Online documentation}
     */
    ideal_distance_importance?: float
    /**
     * **Default:** `0.1`
     *
     * Must be between 0 and ideal_distance_importance inclusive.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PrototypeStrafeSettings.html#ideal_distance_importance_variance Online documentation}
     */
    ideal_distance_importance_variance?: float
    /**
     * **Default:** `0.5`
     *
     * Must be between 0 and 1 inclusive.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PrototypeStrafeSettings.html#clockwise_chance Online documentation}
     */
    clockwise_chance?: float
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PrototypeStrafeSettings.html#face_target Online documentation}
     */
    face_target?: bool
  }
  export interface PuddleTileEffectParameters {
    puddle_noise_texture: EffectTexture
    water_effect_parameters?: WaterTileEffectParameters
    /**
     * Only loaded, and mandatory if `water_effect_parameters` is not defined. Must be name of a {@link TileEffectDefinition} which has `shader` set to `"water"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PuddleTileEffectParameters.html#water_effect Online documentation}
     */
    water_effect?: TileEffectDefinitionID
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
   *       width = 110,
   *       height = 126,
   *       scale = 0.5,
   *       line_length = 1,
   *       frame_count = 20,
   *       shift = util.by_pixel(-23.5, -13.5)
   *     },
   *     standup_shadow = {
   *       filename = "__base__/graphics/entity/pump/connector/V-R-1-load-standup-base-shadow.png",
   *       width = 157,
   *       height = 136,
   *       scale = 0.5,
   *       line_length = 1,
   *       frame_count = 20,
   *       shift = util.by_pixel(-8.75, 8.5)
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
   * @see {@link https://lua-api.factorio.com/2.0.16/types/PumpConnectorGraphics.html Online documentation}
   */
  export interface PumpConnectorGraphics {
    /**
     * Size of the array must be 6 or more.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PumpConnectorGraphics.html#north Online documentation}
     */
    north: readonly PumpConnectorGraphicsAnimation[]
    /**
     * Size of the array must be 6 or more.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PumpConnectorGraphics.html#east Online documentation}
     */
    east: readonly PumpConnectorGraphicsAnimation[]
    /**
     * Size of the array must be 6 or more.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PumpConnectorGraphics.html#south Online documentation}
     */
    south: readonly PumpConnectorGraphicsAnimation[]
    /**
     * Size of the array must be 6 or more.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/PumpConnectorGraphics.html#west Online documentation}
     */
    west: readonly PumpConnectorGraphicsAnimation[]
  }
  export interface PumpConnectorGraphicsAnimation {
    standup_base?: Animation
    standup_top?: Animation
    standup_shadow?: Animation
    connector?: Animation
    connector_shadow?: Animation
  }
  /**
   * The push back effect used by the {@linkplain https://wiki.factorio.com/Discharge_defense discharge defense}.
   *
   * Aims to push the target entity away from the source entity by the `distance` from the target entity's current position. Searches within double the `distance` from the pushed to position for the nearest non-colliding position for the target entity to be teleported too. If no valid non-colliding position is found or the target is not teleportable, then no push back occurs.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/PushBackTriggerEffectItem.html Online documentation}
   */
  export interface PushBackTriggerEffectItem extends TriggerEffectItem {
    readonly type: "push-back"
    distance: float
  }
  /**
   * The name of a {@link QualityPrototype}.
   * @example
   * "rare"
   * @example
   * "legendary"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/QualityID.html Online documentation}
   */
  export type QualityID = string
  export interface RadioButtonStyleSpecification extends StyleWithClickableGraphicalSetSpecification {
    readonly type: "radiobutton_style"
    /**
     * Name of a {@link FontPrototype}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RadioButtonStyleSpecification.html#font Online documentation}
     */
    font?: string
    font_color?: Color
    disabled_font_color?: Color
    text_padding?: uint32
  }
  /**
   * Sprite to be shown around the entity when it is selected/held in the cursor.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/RadiusVisualisationSpecification.html Online documentation}
   */
  export interface RadiusVisualisationSpecification {
    sprite?: Sprite
    /**
     * **Default:** `0`
     *
     * Must be greater than or equal to 0.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RadiusVisualisationSpecification.html#distance Online documentation}
     */
    distance?: double
    offset?: Vector
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RadiusVisualisationSpecification.html#draw_in_cursor Online documentation}
     */
    draw_in_cursor?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RadiusVisualisationSpecification.html#draw_on_selection Online documentation}
     */
    draw_on_selection?: bool
  }
  export interface RailFenceDirectionSet {
    north?: SpriteVariations
    northeast?: SpriteVariations
    east?: SpriteVariations
    southeast?: SpriteVariations
    south?: SpriteVariations
    southwest?: SpriteVariations
    west?: SpriteVariations
    northwest?: SpriteVariations
  }
  /**
   * Used for graphics by {@link RailPrototype}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/RailFenceGraphicsSet.html Online documentation}
   */
  export interface RailFenceGraphicsSet {
    /**
     * Must be 2 or 4.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailFenceGraphicsSet.html#segment_count Online documentation}
     */
    segment_count: uint8
    /**
     * **Default:** `"elevated-lower-object"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailFenceGraphicsSet.html#back_fence_render_layer Online documentation}
     */
    back_fence_render_layer?: RenderLayer
    /**
     * **Default:** `"elevated-higher-object"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailFenceGraphicsSet.html#front_fence_render_layer Online documentation}
     */
    front_fence_render_layer?: RenderLayer
    /**
     * **Default:** `"elevated-lower-object"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailFenceGraphicsSet.html#back_fence_render_layer_secondary Online documentation}
     */
    back_fence_render_layer_secondary?: RenderLayer
    /**
     * **Default:** `"elevated-higher-object"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailFenceGraphicsSet.html#front_fence_render_layer_secondary Online documentation}
     */
    front_fence_render_layer_secondary?: RenderLayer
    side_A: RailFencePictureSet
    side_B: RailFencePictureSet
  }
  export interface RailFencePictureSet {
    ends: readonly [RailFenceDirectionSet, RailFenceDirectionSet, RailFenceDirectionSet, RailFenceDirectionSet]
    fence: RailFenceDirectionSet
    ends_upper?: readonly [RailFenceDirectionSet, RailFenceDirectionSet, RailFenceDirectionSet, RailFenceDirectionSet]
    fence_upper?: RailFenceDirectionSet
  }
  export interface RailPictureSet {
    north: RailPieceLayers
    northeast: RailPieceLayers
    east: RailPieceLayers
    southeast: RailPieceLayers
    south: RailPieceLayers
    southwest: RailPieceLayers
    west: RailPieceLayers
    northwest: RailPieceLayers
    /**
     * **Default:** `Value of `rail_endings``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailPictureSet.html#front_rail_endings Online documentation}
     */
    front_rail_endings?: Sprite16Way
    /**
     * **Default:** `Value of `rail_endings``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailPictureSet.html#back_rail_endings Online documentation}
     */
    back_rail_endings?: Sprite16Way
    /**
     * Can be used to load rail endings instead of the front and back variants.
     *
     * Only loaded if `front_rail_endings` or `back_rail_endings` are not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailPictureSet.html#rail_endings Online documentation}
     */
    rail_endings: Sprite16Way
    /**
     * Must contain exactly 16 directions and 6 frames.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailPictureSet.html#segment_visualisation_endings Online documentation}
     */
    segment_visualisation_endings?: RotatedAnimation
    render_layers: RailRenderLayers
    /**
     * **Default:** `Value of `render_layers``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailPictureSet.html#secondary_render_layers Online documentation}
     */
    secondary_render_layers?: RailRenderLayers
    /**
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailPictureSet.html#slice_origin Online documentation}
     */
    slice_origin?: RailsSliceOffsets
    /**
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailPictureSet.html#fog_mask Online documentation}
     */
    fog_mask?: RailsFogMaskDefinitions
  }
  /**
   * Used for graphics by {@link RailPrototype} and {@link RailRemnantsPrototype}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/RailPieceLayers.html Online documentation}
   */
  export interface RailPieceLayers {
    /**
     * May not have more than 16 variations.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailPieceLayers.html#metals Online documentation}
     */
    metals?: SpriteVariations
    /**
     * Must have same number of variations as `metals` or be empty.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailPieceLayers.html#backplates Online documentation}
     */
    backplates?: SpriteVariations
    /**
     * May not have more than 16 variations.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailPieceLayers.html#ties Online documentation}
     */
    ties?: SpriteVariations
    /**
     * May not have more than 16 variations.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailPieceLayers.html#stone_path Online documentation}
     */
    stone_path?: SpriteVariations
    /**
     * May not have more than 16 variations.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailPieceLayers.html#stone_path_background Online documentation}
     */
    stone_path_background?: SpriteVariations
    segment_visualisation_middle?: Sprite
    water_reflection?: Sprite
    underwater_structure?: Sprite
    shadow_subtract_mask?: Sprite
    shadow_mask?: Sprite
  }
  export interface RailPlannerAllowElevatedRailsModifier extends BoolModifier {
    readonly type: "rail-planner-allow-elevated-rails"
    /**
     * **Default:** `false`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailPlannerAllowElevatedRailsModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface RailRenderLayers {
    /**
     * **Default:** `"rail-stone-path-lower"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailRenderLayers.html#stone_path_lower Online documentation}
     */
    stone_path_lower?: RenderLayer
    /**
     * **Default:** `"rail-stone-path"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailRenderLayers.html#stone_path Online documentation}
     */
    stone_path?: RenderLayer
    /**
     * **Default:** `"rail-tie"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailRenderLayers.html#tie Online documentation}
     */
    tie?: RenderLayer
    /**
     * **Default:** `"rail-screw"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailRenderLayers.html#screw Online documentation}
     */
    screw?: RenderLayer
    /**
     * **Default:** `"rail-metal"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailRenderLayers.html#metal Online documentation}
     */
    metal?: RenderLayer
    /**
     * **Default:** `Value of `screw``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailRenderLayers.html#front_end Online documentation}
     */
    front_end?: RenderLayer
    /**
     * **Default:** `Value of `screw``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailRenderLayers.html#back_end Online documentation}
     */
    back_end?: RenderLayer
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailRenderLayers.html#underwater_layer_offset Online documentation}
     */
    underwater_layer_offset?: int8
  }
  export interface RailSignalColorToFrameIndex {
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailSignalColorToFrameIndex.html#none Online documentation}
     */
    none?: uint8
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailSignalColorToFrameIndex.html#red Online documentation}
     */
    red?: uint8
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailSignalColorToFrameIndex.html#green Online documentation}
     */
    green?: uint8
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailSignalColorToFrameIndex.html#blue Online documentation}
     */
    blue?: uint8
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailSignalColorToFrameIndex.html#yellow Online documentation}
     */
    yellow?: uint8
  }
  export interface RailSignalLightDefinition {
    light: LightDefinition
    shift?: Vector
  }
  export interface RailSignalLights {
    red?: RailSignalLightDefinition
    green?: RailSignalLightDefinition
    blue?: RailSignalLightDefinition
    yellow?: RailSignalLightDefinition
  }
  export interface RailSignalPictureSet {
    structure: RotatedAnimation
    /**
     * **Default:** `"floor-mechanics"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailSignalPictureSet.html#structure_render_layer Online documentation}
     */
    structure_render_layer?: RenderLayer
    signal_color_to_structure_frame_index: RailSignalColorToFrameIndex
    rail_piece?: RailSignalStaticSpriteLayer
    upper_rail_piece?: RailSignalStaticSpriteLayer
    lights: RailSignalLights
    circuit_connector?: readonly CircuitConnectorDefinition[]
    /**
     * **Default:** `"object"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailSignalPictureSet.html#circuit_connector_render_layer Online documentation}
     */
    circuit_connector_render_layer?: RenderLayer
    structure_align_to_animation_index?: readonly uint8[]
    selection_box_shift?: readonly Vector[]
  }
  export interface RailSignalStaticSpriteLayer {
    sprites: Animation
    /**
     * **Default:** `"rail-chain-signal-metal"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailSignalStaticSpriteLayer.html#render_layer Online documentation}
     */
    render_layer?: RenderLayer
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailSignalStaticSpriteLayer.html#hide_if_simulation Online documentation}
     */
    hide_if_simulation?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailSignalStaticSpriteLayer.html#hide_if_not_connected_to_rails Online documentation}
     */
    hide_if_not_connected_to_rails?: bool
    /**
     * Must be an empty array or contain exactly 16 values.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailSignalStaticSpriteLayer.html#shifts Online documentation}
     */
    shifts?: readonly MapPosition[]
    align_to_frame_index?: readonly uint8[]
  }
  /**
   * @see RailSupportPrototype.graphics_set
   * @see {@link https://lua-api.factorio.com/2.0.16/prototypes/RailSupportPrototype.html#graphics_set Online documentation}
   */
  export interface RailSupportGraphicsSet {
    underwater_structure?: RotatedSprite
    structure: RotatedSprite
    /**
     * **Default:** `"object"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailSupportGraphicsSet.html#render_layer Online documentation}
     */
    render_layer?: RenderLayer
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailSupportGraphicsSet.html#underwater_layer_offset Online documentation}
     */
    underwater_layer_offset?: int8
  }
  export interface RailSupportOnDeepOilOceanModifier extends BoolModifier {
    readonly type: "rail-support-on-deep-oil-ocean"
    /**
     * **Default:** `false`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RailSupportOnDeepOilOceanModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  /**
   * @see RailPictureSet.fog_mask
   * @see {@link https://lua-api.factorio.com/2.0.16/types/RailPictureSet.html#fog_mask Online documentation}
   */
  export interface RailsFogMaskDefinitions {
    north?: FogMaskShapeDefinition
    east?: FogMaskShapeDefinition
    south?: FogMaskShapeDefinition
    west?: FogMaskShapeDefinition
  }
  /**
   * @see RailPictureSet.slice_origin
   * @see {@link https://lua-api.factorio.com/2.0.16/types/RailPictureSet.html#slice_origin Online documentation}
   */
  export interface RailsSliceOffsets {
    north?: Vector
    east?: Vector
    south?: Vector
    west?: Vector
  }
  /**
   * Define a numerical property in terms of minimum and maximum to be used as a randomly chosen value in that range (inclusively).
   *
   * The maximum cannot be less than the minimum.
   *
   * ## Union members
   * - [{@link uint8}, {@link uint8}]: First number is the minimum, second is the maximum.
   * - {@link uint8}: The same minimum and maximum.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/RandomRange.html Online documentation}
   */
  export type RandomRange = readonly [uint8, uint8] | uint8
  /**
   * ## Union members
   * - `"center-to-center"`
   * - `"bounding-box-to-bounding-box"`
   * - `"center-to-bounding-box"`
   * @see {@link https://lua-api.factorio.com/2.0.16/types/RangeMode.html Online documentation}
   */
  export type RangeMode = "center-to-center" | "bounding-box-to-bounding-box" | "center-to-bounding-box"
  export type RangedValue = readonly [float, float] | float
  /**
   * Specified by a {@link float} between 0 and 1, including 0 and excluding 1.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/RealOrientation.html Online documentation}
   */
  export type RealOrientation = float
  /**
   * The name of a {@link RecipeCategory}.
   * @example
   * "crafting"
   * @example
   * "smelting"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/RecipeCategoryID.html Online documentation}
   */
  export type RecipeCategoryID = string
  /**
   * The name of a {@link RecipePrototype}.
   * @example
   * "electronic-circuit"
   * @example
   * "kovarex-enrichment-process"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/RecipeID.html Online documentation}
   */
  export type RecipeID = string
  /**
   * If no tint is specified, the machine falls back to {@link WorkingVisualisations#default_recipe_tint WorkingVisualisations::default_recipe_tint}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/RecipeTints.html Online documentation}
   */
  export interface RecipeTints {
    /**
     * **Default:** `no tint`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RecipeTints.html#primary Online documentation}
     */
    primary?: Color
    /**
     * **Default:** `no tint`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RecipeTints.html#secondary Online documentation}
     */
    secondary?: Color
    /**
     * **Default:** `no tint`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RecipeTints.html#tertiary Online documentation}
     */
    tertiary?: Color
    /**
     * **Default:** `no tint`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RecipeTints.html#quaternary Online documentation}
     */
    quaternary?: Color
  }
  /**
   * The render layer specifies the order of the sprite when rendering, most of the objects have it hardcoded in the source, but some are configurable. The union contains valid values from lowest to highest.
   *
   * Note: `decals` is used as special marker for {@link DecorativePrototype#render_layer DecorativePrototype::render_layer}. When used elsewhere, the sprites will draw over the terrain.
   *
   * ## Union members
   * - `"zero"`
   * - `"background-transitions"`
   * - `"under-tiles"`
   * - `"decals"`
   * - `"above-tiles"`
   * - `"ground-layer-1"`
   * - `"ground-layer-2"`
   * - `"ground-layer-3"`
   * - `"ground-layer-4"`
   * - `"ground-layer-5"`
   * - `"lower-radius-visualization"`
   * - `"radius-visualization"`
   * - `"transport-belt-integration"`
   * - `"resource"`
   * - `"building-smoke"`
   * - `"rail-stone-path-lower"`
   * - `"rail-stone-path"`
   * - `"rail-tie"`
   * - `"decorative"`
   * - `"ground-patch"`
   * - `"ground-patch-higher"`
   * - `"ground-patch-higher2"`
   * - `"rail-chain-signal-metal"`
   * - `"rail-screw"`
   * - `"rail-metal"`
   * - `"remnants"`
   * - `"floor"`
   * - `"transport-belt"`
   * - `"transport-belt-endings"`
   * - `"floor-mechanics-under-corpse"`
   * - `"corpse"`
   * - `"floor-mechanics"`
   * - `"item"`
   * - `"transport-belt-reader"`
   * - `"lower-object"`
   * - `"transport-belt-circuit-connector"`
   * - `"lower-object-above-shadow"`
   * - `"lower-object-overlay"`
   * - `"object-under"`
   * - `"object"`
   * - `"cargo-hatch"`
   * - `"higher-object-under"`
   * - `"higher-object-above"`
   * - `"train-stop-top"`
   * - `"item-in-inserter-hand"`
   * - `"above-inserter"`
   * - `"wires"`
   * - `"under-elevated"`
   * - `"elevated-rail-stone-path-lower"`
   * - `"elevated-rail-stone-path"`
   * - `"elevated-rail-tie"`
   * - `"elevated-rail-screw"`
   * - `"elevated-rail-metal"`
   * - `"elevated-lower-object"`
   * - `"elevated-object"`
   * - `"elevated-higher-object"`
   * - `"fluid-visualization"`
   * - `"wires-above"`
   * - `"entity-info-icon"`
   * - `"entity-info-icon-above"`
   * - `"explosion"`
   * - `"projectile"`
   * - `"smoke"`
   * - `"air-object"`
   * - `"air-entity-info-icon"`
   * - `"light-effect"`
   * - `"selection-box"`
   * - `"higher-selection-box"`
   * - `"collision-selection-box"`
   * - `"arrow"`
   * - `"cursor"`
   * @see {@link https://lua-api.factorio.com/2.0.16/types/RenderLayer.html Online documentation}
   */
  export type RenderLayer =
    | "zero"
    | "background-transitions"
    | "under-tiles"
    | "decals"
    | "above-tiles"
    | "ground-layer-1"
    | "ground-layer-2"
    | "ground-layer-3"
    | "ground-layer-4"
    | "ground-layer-5"
    | "lower-radius-visualization"
    | "radius-visualization"
    | "transport-belt-integration"
    | "resource"
    | "building-smoke"
    | "rail-stone-path-lower"
    | "rail-stone-path"
    | "rail-tie"
    | "decorative"
    | "ground-patch"
    | "ground-patch-higher"
    | "ground-patch-higher2"
    | "rail-chain-signal-metal"
    | "rail-screw"
    | "rail-metal"
    | "remnants"
    | "floor"
    | "transport-belt"
    | "transport-belt-endings"
    | "floor-mechanics-under-corpse"
    | "corpse"
    | "floor-mechanics"
    | "item"
    | "transport-belt-reader"
    | "lower-object"
    | "transport-belt-circuit-connector"
    | "lower-object-above-shadow"
    | "lower-object-overlay"
    | "object-under"
    | "object"
    | "cargo-hatch"
    | "higher-object-under"
    | "higher-object-above"
    | "train-stop-top"
    | "item-in-inserter-hand"
    | "above-inserter"
    | "wires"
    | "under-elevated"
    | "elevated-rail-stone-path-lower"
    | "elevated-rail-stone-path"
    | "elevated-rail-tie"
    | "elevated-rail-screw"
    | "elevated-rail-metal"
    | "elevated-lower-object"
    | "elevated-object"
    | "elevated-higher-object"
    | "fluid-visualization"
    | "wires-above"
    | "entity-info-icon"
    | "entity-info-icon-above"
    | "explosion"
    | "projectile"
    | "smoke"
    | "air-object"
    | "air-entity-info-icon"
    | "light-effect"
    | "selection-box"
    | "higher-selection-box"
    | "collision-selection-box"
    | "arrow"
    | "cursor"
  /**
   * Defines the amount of an item required to research one unit of a {@link TechnologyPrototype technology}. The first member of the tuple is the name of a {@link ToolPrototype} and the second is the amount. Amount must not be 0.
   * @example
   * {"automation-science-pack", 1}
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ResearchIngredient.html Online documentation}
   */
  export type ResearchIngredient = readonly [ItemID, uint16]
  /**
   * A research progress product definition.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ResearchProgressProductPrototype.html Online documentation}
   */
  export interface ResearchProgressProductPrototype {
    readonly type: "research-progress"
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ResearchProgressProductPrototype.html#amount Online documentation}
     */
    amount?: double
    research_item: ItemID
  }
  export interface ResearchTechnologyTipTrigger {
    readonly type: "research"
    technology: TechnologyID
  }
  export interface ResearchWithSciencePackTipTrigger {
    readonly type: "research-with-science-pack"
    science_pack: ItemID
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
   * @see {@link https://lua-api.factorio.com/2.0.16/types/Resistance.html Online documentation}
   */
  export interface Resistance {
    readonly type: DamageTypeID
    /**
     * **Default:** `0`
     *
     * The {@linkplain https://wiki.factorio.com/Damage#Decrease.2C_or_.22flat.22_resistance flat resistance} to the given damage type. (Higher is better)
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Resistance.html#decrease Online documentation}
     */
    decrease?: float
    /**
     * **Default:** `0`
     *
     * The {@linkplain https://wiki.factorio.com/Damage#Percentage_resistance percentage resistance} to the given damage type. (Higher is better)
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Resistance.html#percent Online documentation}
     */
    percent?: float
  }
  /**
   * The name of a {@link ResourceCategory}.
   * @example
   * "basic-solid"
   * @example
   * "basic-fluid"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ResourceCategoryID.html Online documentation}
   */
  export type ResourceCategoryID = string
  /**
   * ## Union members
   * - `"enabled"`
   * - `"disabled"`
   * - `"highlight"`
   * @see {@link https://lua-api.factorio.com/2.0.16/types/RichTextSetting.html Online documentation}
   */
  export type RichTextSetting = "enabled" | "disabled" | "highlight"
  export interface RollingStockRotatedSlopedGraphics {
    rotated: RotatedSprite
    sloped?: RotatedSprite
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RollingStockRotatedSlopedGraphics.html#slope_back_equals_front Online documentation}
     */
    slope_back_equals_front?: bool
    /**
     * **Default:** `1.333`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RollingStockRotatedSlopedGraphics.html#slope_angle_between_frames Online documentation}
     */
    slope_angle_between_frames?: double
  }
  export interface RotateEntityTipTrigger extends CountBasedTipTrigger {
    readonly type: "rotate-entity"
  }
  export interface RotatedAnimation extends Omit<AnimationParameters, "filename"> {
    /**
     * If this property is present, all RotatedAnimation definitions have to be placed as entries in the array, and they will all be loaded from there. `layers` may not be an empty table. Each definition in the array may also have the `layers` property.
     *
     * If this property is present, all other properties, including those inherited from AnimationParameters, are ignored.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedAnimation.html#layers Online documentation}
     */
    layers?: readonly RotatedAnimation[]
    /**
     * **Default:** `1`
     *
     * Only loaded if `layers` is not defined.
     *
     * The sequential animation instance is loaded equal to the entities direction within the `direction_count` setting.
     *
     * Direction count to {@link Direction} (animation sequence number):
     *
     * - `1`: North (1)
     *
     * - `2`: North (1), South (2)
     *
     * - `4`: North (1), East (2), South (3), West (4)
     *
     * - `8`: North (1), Northeast (2), East (3), Southeast (4), South (5), Southwest (6), West (7), Northwest (8)
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedAnimation.html#direction_count Online documentation}
     */
    direction_count?: uint32
    /**
     * Only loaded, and mandatory if `layers`, `stripes`, and `filenames` are not defined.
     *
     * The path to the sprite file to use.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedAnimation.html#filename Online documentation}
     */
    filename?: FileName
    /**
     * Only loaded if both `layers` and `stripes` are not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedAnimation.html#filenames Online documentation}
     */
    filenames?: readonly FileName[]
    /**
     * Only loaded if `layers` is not defined. Mandatory if `filenames` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedAnimation.html#lines_per_file Online documentation}
     */
    lines_per_file?: uint32
    /**
     * Only loaded if `layers` is not defined. Mandatory if `filenames` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedAnimation.html#slice Online documentation}
     */
    slice?: uint32
    /**
     * **Default:** `0`
     *
     * Only loaded if `layers` is not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedAnimation.html#still_frame Online documentation}
     */
    still_frame?: uint32
    /**
     * **Default:** `false`
     *
     * Only loaded if `layers` is not defined.
     *
     * If `true`, `direction_count` must be greater than `1`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedAnimation.html#axially_symmetrical Online documentation}
     */
    axially_symmetrical?: bool
    /**
     * **Default:** `false`
     *
     * Only loaded if `layers` is not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedAnimation.html#counterclockwise Online documentation}
     */
    counterclockwise?: bool
    /**
     * **Default:** `0.5`
     *
     * Only loaded if `layers` is not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedAnimation.html#middle_orientation Online documentation}
     */
    middle_orientation?: RealOrientation
    /**
     * **Default:** `1`
     *
     * Only loaded if `layers` is not defined.
     *
     * Automatically clamped to be between `0` and `1`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedAnimation.html#orientation_range Online documentation}
     */
    orientation_range?: float
    /**
     * **Default:** `true`
     *
     * Only loaded if `layers` is not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedAnimation.html#apply_projection Online documentation}
     */
    apply_projection?: bool
    /**
     * Only loaded if `layers` is not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedAnimation.html#stripes Online documentation}
     */
    stripes?: readonly Stripe[]
  }
  /**
   * Struct type for {@link RotatedAnimation8Way}
   * @see RotatedAnimation8Way
   * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedAnimation8Way.html Online documentation}
   */
  export interface RotatedAnimation8WayStruct {
    north: RotatedAnimation
    north_east?: RotatedAnimation
    east?: RotatedAnimation
    south_east?: RotatedAnimation
    south?: RotatedAnimation
    south_west?: RotatedAnimation
    west?: RotatedAnimation
    north_west?: RotatedAnimation
  }
  /**
   * A map of rotated animations for all 8 directions of the entity. If this is loaded as a single RotatedAnimation, it applies to all directions.
   *
   * Any direction that is not defined defaults to the rotated animation of the opposite direction. If that is also not defined, it defaults to the north rotated animation.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedAnimation8Way.html Online documentation}
   */
  export type RotatedAnimation8Way = RotatedAnimation8WayStruct | RotatedAnimation
  export type RotatedAnimationVariations = RotatedAnimation | readonly RotatedAnimation[]
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
   *       width = 196,
   *       height = 254,
   *       apply_projection = false,
   *       direction_count = 64,
   *       line_length = 8,
   *       shift = util.by_pixel(1, -16),
   *       scale = 0.5
   *     },
   *     {
   *       filename = "__base__/graphics/entity/radar/radar-shadow.png",
   *       priority = "low",
   *       width = 343,
   *       height = 186,
   *       apply_projection = false,
   *       direction_count = 64,
   *       line_length = 8,
   *       shift = util.by_pixel(39.25,3),
   *       draw_as_shadow = true,
   *       scale = 0.5
   *     }
   *   }
   * }
   * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedSprite.html Online documentation}
   */
  export interface RotatedSprite extends Omit<SpriteParameters, "filename"> {
    /**
     * If this property is present, all RotatedSprite definitions have to be placed as entries in the array, and they will all be loaded from there. `layers` may not be an empty table. Each definition in the array may also have the `layers` property.
     *
     * If this property is present, all other properties, including those inherited from SpriteParameters, are ignored.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedSprite.html#layers Online documentation}
     */
    layers?: readonly RotatedSprite[]
    /**
     * Only loaded, and mandatory if `layers` is not defined.
     *
     * Count of direction (frames) specified.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedSprite.html#direction_count Online documentation}
     */
    direction_count?: uint16
    /**
     * Only loaded if `layers` is not defined.
     *
     * The path to the sprite file to use.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedSprite.html#filename Online documentation}
     */
    filename?: FileName
    /**
     * Only loaded, and mandatory if both `layers` and `filename` are not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedSprite.html#filenames Online documentation}
     */
    filenames?: readonly FileName[]
    /**
     * **Default:** `0`
     *
     * Only loaded if `layers` is not defined. Mandatory if `filenames` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedSprite.html#lines_per_file Online documentation}
     */
    lines_per_file?: uint64
    /**
     * Only loaded if `layers` is not defined.
     *
     * Number of slices this is sliced into when using the "optimized atlas packing" option. If you are a modder, you can just ignore this property. Example: If this is 4, the sprite will be sliced into a 4x4 grid.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedSprite.html#dice Online documentation}
     */
    dice?: SpriteSizeType
    /**
     * Only loaded if `layers` is not defined.
     *
     * Same as `dice` above, but this specifies only how many slices there are on the x axis.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedSprite.html#dice_x Online documentation}
     */
    dice_x?: SpriteSizeType
    /**
     * Only loaded if `layers` is not defined.
     *
     * Same as `dice` above, but this specifies only how many slices there are on the y axis.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedSprite.html#dice_y Online documentation}
     */
    dice_y?: SpriteSizeType
    /**
     * **Default:** `false`
     *
     * Only loaded if `layers` is not defined.
     *
     * Unused.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedSprite.html#generate_sdf Online documentation}
     */
    generate_sdf?: bool
    /**
     * **Default:** `false`
     *
     * Only loaded if `layers` is not defined.
     *
     * When `true`, the same picture is used for left/right direction, just flipped, which can save half of the space required, but is not usable once the picture contains shadows, etc.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedSprite.html#axially_symmetrical Online documentation}
     */
    axially_symmetrical?: bool
    /**
     * **Default:** `false`
     *
     * Only loaded if `layers` is not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedSprite.html#back_equals_front Online documentation}
     */
    back_equals_front?: bool
    /**
     * **Default:** `true`
     *
     * Only loaded if `layers` is not defined.
     *
     * Used to fix the inconsistency of direction of the entity in 3d when rendered and direction on the screen (where the 45 degree angle for projection is used).
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedSprite.html#apply_projection Online documentation}
     */
    apply_projection?: bool
    /**
     * **Default:** `false`
     *
     * Only loaded if `layers` is not defined.
     *
     * Set to `true` to indicate sprites in the spritesheet are in counterclockwise order.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedSprite.html#counterclockwise Online documentation}
     */
    counterclockwise?: bool
    /**
     * **Default:** `0`
     *
     * Only loaded if `layers` is not defined.
     *
     * Once the specified number of pictures is loaded, other pictures are loaded on other line. This is to allow having more sprites in matrix, to input files with too high width. The game engine limits the width of any input files to 8192px, so it is compatible with most graphics cards. 0 means that all the pictures are in one horizontal line.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedSprite.html#line_length Online documentation}
     */
    line_length?: uint32
    /**
     * **Default:** `false`
     *
     * Only loaded if `layers` is not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedSprite.html#allow_low_quality_rotation Online documentation}
     */
    allow_low_quality_rotation?: bool
    /**
     * A list of overrides and customizations for each specific frame within the rotated sprite. This can be used to adjust each individual frame's width, height, and other properties. If this property is present, then it must contain at least as many `RotatedSpriteFrame` as there are sprites in this RotatedSprite.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedSprite.html#frames Online documentation}
     */
    frames?: readonly RotatedSpriteFrame[]
  }
  /**
   * Specifies frame-specific properties of an individual sprite within a RotatedSprite set. Some properties are absolute values, and some are relative and inherited from the parent RotatedSprite prototype definition.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedSpriteFrame.html Online documentation}
   */
  export interface RotatedSpriteFrame {
    /**
     * **Default:** `inherited width`
     *
     * Width of the sprite in pixels, from 0-4096. If not defined, inherits the width of the parent RotatedSprite.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedSpriteFrame.html#width Online documentation}
     */
    width?: SpriteSizeType
    /**
     * **Default:** `inherited height`
     *
     * Height of the sprite in pixels, from 0-4096. If not defined, inherits the height of the parent RotatedSprite.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedSpriteFrame.html#height Online documentation}
     */
    height?: SpriteSizeType
    /**
     * **Default:** `0`
     *
     * The horizontal offset of the sprite relative to its specific frame within the parent RotatedSprite.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedSpriteFrame.html#x Online documentation}
     */
    x?: SpriteSizeType
    /**
     * **Default:** `0`
     *
     * The vertical offset of the sprite relative to its specific frame within the parent RotatedSprite.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedSpriteFrame.html#y Online documentation}
     */
    y?: SpriteSizeType
    /**
     * **Default:** ``{0, 0}``
     *
     * The shift in tiles of this specific frame, relative to the shift of the parent RotatedSprite. `util.by_pixel()` can be used to divide the shift by 32 which is the usual pixel height/width of 1 tile in normal resolution. Note that 32 pixel tile height/width is not enforced anywhere - any other tile height or width is also possible.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/RotatedSpriteFrame.html#shift Online documentation}
     */
    shift?: Vector
  }
  export interface ScriptTriggerEffectItem extends TriggerEffectItem {
    readonly type: "script"
    /**
     * The effect ID that will be provided in {@link import("factorio:runtime").on_script_trigger_effect on_script_trigger_effect}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ScriptTriggerEffectItem.html#effect_id Online documentation}
     */
    effect_id: string
  }
  export interface ScrollBarStyleSpecification extends BaseStyleSpecification {
    background_graphical_set?: ElementImageSet
    thumb_button_style?: ButtonStyleSpecification
  }
  export interface ScrollPaneStyleSpecification extends BaseStyleSpecification {
    readonly type: "scroll_pane_style"
    vertical_flow_style?: VerticalFlowStyleSpecification
    horizontal_scrollbar_style?: HorizontalScrollBarStyleSpecification
    vertical_scrollbar_style?: VerticalScrollBarStyleSpecification
    graphical_set?: ElementImageSet
    background_graphical_set?: ElementImageSet
    /**
     * Sets `extra_top_padding_when_activated`, `extra_bottom_padding_when_activated`, `extra_left_padding_when_activated` and `extra_right_padding_when_activated`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ScrollPaneStyleSpecification.html#extra_padding_when_activated Online documentation}
     */
    extra_padding_when_activated?: int32
    extra_top_padding_when_activated?: int32
    extra_bottom_padding_when_activated?: int32
    extra_left_padding_when_activated?: int32
    extra_right_padding_when_activated?: int32
    /**
     * Sets `extra_top_margin_when_activated`, `extra_bottom_margin_when_activated`, `extra_left_margin_when_activated` and `extra_right_margin_when_activated`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ScrollPaneStyleSpecification.html#extra_margin_when_activated Online documentation}
     */
    extra_margin_when_activated?: int32
    extra_top_margin_when_activated?: int32
    extra_bottom_margin_when_activated?: int32
    extra_left_margin_when_activated?: int32
    extra_right_margin_when_activated?: int32
    dont_force_clipping_rect_for_contents?: bool
    always_draw_borders?: bool
    scrollbars_go_outside?: bool
  }
  /**
   * Used by {@link SegmentedUnitPrototype} to define and manage the segments that make up the body of the entity.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/SegmentEngineSpecification.html Online documentation}
   */
  export interface SegmentEngineSpecification {
    /**
     * The segments that compose the entity's body. Must contain no more than 63 entries.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SegmentEngineSpecification.html#segments Online documentation}
     */
    segments: readonly SegmentSpecification[]
  }
  /**
   * A container for an individual instance of a {@link SegmentPrototype} within a {@link SegmentEngineSpecification}. May contain context-specific customizations unique to the associated segment instance.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/SegmentSpecification.html Online documentation}
   */
  export interface SegmentSpecification {
    /**
     * Name of the {@link SegmentPrototype} to use in this position.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SegmentSpecification.html#segment Online documentation}
     */
    segment: EntityID
  }
  export interface SelectionModeData {
    border_color: Color
    /**
     * **Default:** `Value of border_color`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SelectionModeData.html#count_button_color Online documentation}
     */
    count_button_color?: Color
    /**
     * **Default:** `Value of border_color`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SelectionModeData.html#chart_color Online documentation}
     */
    chart_color?: Color
    cursor_box_type: CursorBoxType
    mode: SelectionModeFlags
    entity_filters?: readonly EntityID[]
    entity_type_filters?: readonly string[]
    tile_filters?: readonly TileID[]
    started_sound?: Sound
    ended_sound?: Sound
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SelectionModeData.html#play_ended_sound_when_nothing_selected Online documentation}
     */
    play_ended_sound_when_nothing_selected?: bool
    /**
     * **Default:** `"whitelist"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SelectionModeData.html#entity_filter_mode Online documentation}
     */
    entity_filter_mode?: "whitelist" | "blacklist"
    /**
     * **Default:** `"whitelist"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SelectionModeData.html#tile_filter_mode Online documentation}
     */
    tile_filter_mode?: "whitelist" | "blacklist"
  }
  /**
   * An array containing the following values.
   *
   * ## Union members
   * - `"blueprint"`: Selects entities and tiles as if selecting them for a blueprint.
   * - `"deconstruct"`: Selects entities and tiles as if selecting them for deconstruction.
   * - `"cancel-deconstruct"`: Selects entities and tiles as if selecting them for deconstruction cancellation.
   * - `"items"`: Selects items on the ground.
   * - `"trees"`: Selects trees.
   * - `"buildable-type"`: Selects entities which are considered {@link import("factorio:runtime").LuaEntityPrototype#is_building a building}, plus landmines.
   * - `"nothing"`: Selects no entities or tiles, but is useful to select an area.
   * - `"items-to-place"`: Selects entities and tiles that can be built by an item.
   * - `"any-entity"`: Selects all entities.
   * - `"any-tile"`: Selects all tiles.
   * - `"same-force"`: Selects entities with the same force as the selecting player.
   * - `"not-same-force"`: Selects entities with a different force as the selecting player.
   * - `"friend"`: Selects entities from a friendly force.
   * - `"enemy"`: Selects entities from an enemy force.
   * - `"upgrade"`: Selects entities as if selecting them for upgrading.
   * - `"cancel-upgrade"`: Selects entities as if selecting them for upgrade cancellation.
   * - `"downgrade"`: Selects entities as if selecting them for downgrading.
   * - `"entity-with-health"`: Selects entities that are an {@link EntityWithHealthPrototype}.
   * - `"is-military-target"`: Selects entities which are {@link EntityWithOwnerPrototype#is_military_target EntityWithOwnerPrototype::is_military_target}.
   * - `"entity-with-owner"`: Selects entities that are an {@link EntityWithOwnerPrototype}.
   * - `"avoid-rolling-stock"`: Selects entities that are not a {@link RollingStockPrototype}.
   * - `"avoid-vehicle"`
   * - `"controllable"`
   * - `"controllable-add"`
   * - `"controllable-remove"`
   * - `"entity-ghost"`: Selects entities that are an {@link EntityGhostPrototype}.
   * - `"tile-ghost"`: Selects entities that are a {@link TileGhostPrototype}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/SelectionModeFlags.html Online documentation}
   */
  export type SelectionModeFlags =
    | (
        | "blueprint"
        | "deconstruct"
        | "cancel-deconstruct"
        | "items"
        | "trees"
        | "buildable-type"
        | "nothing"
        | "items-to-place"
        | "any-entity"
        | "any-tile"
        | "same-force"
        | "not-same-force"
        | "friend"
        | "enemy"
        | "upgrade"
        | "cancel-upgrade"
        | "downgrade"
        | "entity-with-health"
        | "is-military-target"
        | "entity-with-owner"
        | "avoid-rolling-stock"
        | "avoid-vehicle"
        | "controllable"
        | "controllable-add"
        | "controllable-remove"
        | "entity-ghost"
        | "tile-ghost"
      )
    | readonly (
        | "blueprint"
        | "deconstruct"
        | "cancel-deconstruct"
        | "items"
        | "trees"
        | "buildable-type"
        | "nothing"
        | "items-to-place"
        | "any-entity"
        | "any-tile"
        | "same-force"
        | "not-same-force"
        | "friend"
        | "enemy"
        | "upgrade"
        | "cancel-upgrade"
        | "downgrade"
        | "entity-with-health"
        | "is-military-target"
        | "entity-with-owner"
        | "avoid-rolling-stock"
        | "avoid-vehicle"
        | "controllable"
        | "controllable-add"
        | "controllable-remove"
        | "entity-ghost"
        | "tile-ghost"
      )[]
  /**
   * Struct type for {@link SemiPersistentWorldAmbientSoundDefinition}
   * @see SemiPersistentWorldAmbientSoundDefinition
   * @see {@link https://lua-api.factorio.com/2.0.16/types/SemiPersistentWorldAmbientSoundDefinition.html Online documentation}
   */
  export interface SemiPersistentWorldAmbientSoundDefinitionStruct {
    sound: Sound
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SemiPersistentWorldAmbientSoundDefinition.html#delay_mean_seconds Online documentation}
     */
    delay_mean_seconds?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SemiPersistentWorldAmbientSoundDefinition.html#delay_variance_seconds Online documentation}
     */
    delay_variance_seconds?: float
  }
  export type SemiPersistentWorldAmbientSoundDefinition = SemiPersistentWorldAmbientSoundDefinitionStruct | Sound
  export interface SendItemToOrbitTechnologyTrigger {
    readonly type: "send-item-to-orbit"
    item: ItemIDFilter
  }
  export interface SendSpidertronTipTrigger extends CountBasedTipTrigger {
    readonly type: "send-spidertron"
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SendSpidertronTipTrigger.html#append Online documentation}
     */
    append?: bool
  }
  /**
   * ## Union members
   * - `"not-sendable"`
   * - `"manual"`
   * - `"automated"`
   * @see {@link https://lua-api.factorio.com/2.0.16/types/SendToOrbitMode.html Online documentation}
   */
  export type SendToOrbitMode = "not-sendable" | "manual" | "automated"
  export interface SequenceTipTrigger {
    readonly type: "sequence"
    /**
     * List of triggers to fulfill.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SequenceTipTrigger.html#triggers Online documentation}
     */
    triggers: readonly TipTrigger[]
  }
  export interface SetFilterTipTrigger extends CountBasedTipTrigger {
    readonly type: "set-filter"
    entity?: EntityID
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SetFilterTipTrigger.html#match_type_only Online documentation}
     */
    match_type_only?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SetFilterTipTrigger.html#consecutive Online documentation}
     */
    consecutive?: bool
  }
  export interface SetLogisticRequestTipTrigger extends CountBasedTipTrigger {
    readonly type: "set-logistic-request"
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SetLogisticRequestTipTrigger.html#logistic_chest_only Online documentation}
     */
    logistic_chest_only?: bool
    entity?: EntityID
  }
  export interface SetRecipeTipTrigger extends CountBasedTipTrigger {
    readonly type: "set-recipe"
    recipe?: RecipeID
    machine?: EntityID
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SetRecipeTipTrigger.html#consecutive Online documentation}
     */
    consecutive?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SetRecipeTipTrigger.html#any_quality Online documentation}
     */
    any_quality?: bool
    /**
     * **Default:** `any`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SetRecipeTipTrigger.html#uses_fluid Online documentation}
     */
    uses_fluid?: bool
  }
  export interface SetTileTriggerEffectItem extends TriggerEffectItem {
    readonly type: "set-tile"
    tile_name: TileID
    radius: float
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SetTileTriggerEffectItem.html#apply_projection Online documentation}
     */
    apply_projection?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SetTileTriggerEffectItem.html#apply_on_space_platform Online documentation}
     */
    apply_on_space_platform?: bool
    tile_collision_mask?: CollisionMaskConnector
  }
  /**
   * A struct that provides access to the user-set values of startup {@linkplain https://wiki.factorio.com/Tutorial:Mod_settings mod settings}.
   * @example
   * -- Accessing the value of a mod setting
   * local val = settings.startup["my-mod-setting-name"].value
   * @see {@link https://lua-api.factorio.com/2.0.16/types/Settings.html Online documentation}
   */
  export interface Settings {
    /**
     * All startup mod settings, indexed by the name of the setting.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Settings.html#startup Online documentation}
     */
    startup: Record<string, ModSetting>
  }
  export interface ShiftAnimationWaypoints {
    north: readonly Vector[]
    east: readonly Vector[]
    south: readonly Vector[]
    west: readonly Vector[]
  }
  export interface ShootTipTrigger extends CountBasedTipTrigger {
    readonly type: "shoot"
    target?: "enemy" | "entity"
  }
  export interface ShowExplosionOnChartTriggerEffectItem extends TriggerEffectItem {
    readonly type: "show-explosion-on-chart"
    scale: float
  }
  export interface SignalColorMapping extends SignalIDConnector {
    color: Color
  }
  export interface SignalIDConnector {
    /**
     * ## Union members
     * - `"virtual"`
     * - `"item"`
     * - `"fluid"`
     * - `"recipe"`
     * - `"entity"`
     * - `"space-location"`
     * - `"asteroid-chunk"`
     * - `"quality"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SignalIDConnector.html#type Online documentation}
     */
    readonly type: "virtual" | "item" | "fluid" | "recipe" | "entity" | "space-location" | "asteroid-chunk" | "quality"
    /**
     * Name of the signal.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SignalIDConnector.html#name Online documentation}
     */
    name: VirtualSignalID | ItemID | FluidID | RecipeID | EntityID | SpaceLocationID | AsteroidChunkID | QualityID
  }
  /**
   * Struct type for {@link SimpleBoundingBox}
   * @see SimpleBoundingBox
   * @see {@link https://lua-api.factorio.com/2.0.16/types/SimpleBoundingBox.html Online documentation}
   */
  export interface SimpleBoundingBoxStruct {
    left_top: MapPosition
    right_bottom: MapPosition
  }
  /**
   * An axis aligned bounding box.
   *
   * SimpleBoundingBoxes are usually specified with the short-hand notation of passing an array of exactly 2 numbers. The first position is left_top, the second position is right_bottom.
   *
   * Positive x goes towards east, positive y goes towards south. This means that the upper-left point is the least dimension in x and y, and lower-right is the greatest.
   * @example
   * {{-0.4, -0.4}, {0.4, 0.4}}
   * @example
   * -- long definition
   * {left_top = {x = -2, y = -3}, right_bottom = {x = 5, y = 8}}
   * @see {@link https://lua-api.factorio.com/2.0.16/types/SimpleBoundingBox.html Online documentation}
   */
  export type SimpleBoundingBox = SimpleBoundingBoxStruct | readonly [MapPosition, MapPosition]
  export interface SimpleModifier extends BaseModifier {
    /**
     * Modification value, which will be added to the variable it modifies.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SimpleModifier.html#modifier Online documentation}
     */
    modifier: double
  }
  /**
   * Used by tips and tricks and main menu simulations. Simulations can be controlled at runtime via {@link import("factorio:runtime").LuaSimulation LuaSimulation}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/SimulationDefinition.html Online documentation}
   */
  export interface SimulationDefinition {
    /**
     * **Default:** `"nauvis"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SimulationDefinition.html#planet Online documentation}
     */
    planet?: SpaceLocationID
    game_view_settings?: GameViewSettings
    /**
     * The save file that is used for this simulation. If not given and `generate_map` is `true`, a map is generated by the game.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SimulationDefinition.html#save Online documentation}
     */
    save?: FileName
    /**
     * This code is run as a (silent) console command inside the simulation when it is first initialized. Since this is run as a console command, the restrictions of console commands apply, e.g. `require` is not available, see {@linkplain https://lua-api.factorio.com/2.0.16/auxiliary/libraries.html here}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SimulationDefinition.html#init_file Online documentation}
     */
    init_file?: FileName
    /**
     * **Default:** `""`
     *
     * Only loaded if `init_file` is not defined.
     *
     * This code is run as a (silent) console command inside the simulation when it is first initialized. Since this is run as a console command, the restrictions of console commands apply, e.g. `require` is not available, see {@linkplain https://lua-api.factorio.com/2.0.16/auxiliary/libraries.html here}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SimulationDefinition.html#init Online documentation}
     */
    init?: string
    /**
     * This code is run as a (silent) console command inside the simulation every time the simulation is updated. Since this is run as a console command, the restrictions of console commands apply, e.g. `require` is not available, see {@linkplain https://lua-api.factorio.com/2.0.16/auxiliary/libraries.html here}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SimulationDefinition.html#update_file Online documentation}
     */
    update_file?: FileName
    /**
     * **Default:** `""`
     *
     * Only loaded if `update_file` is not defined.
     *
     * This code is run as a (silent) console command inside the simulation every time the simulation is updated. Since this is run as a console command, the restrictions of console commands apply, e.g. `require` is not available, see {@linkplain https://lua-api.factorio.com/2.0.16/auxiliary/libraries.html here}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SimulationDefinition.html#update Online documentation}
     */
    update?: string
    /**
     * An array of mods that will be run in this simulation if they are present and enabled.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SimulationDefinition.html#mods Online documentation}
     */
    mods?: readonly string[]
    /**
     * **Default:** `0`
     *
     * Amount of ticks that this simulation should run for before the simulation is shown to the player. These updates happen after init/init_file has been run and at the highest possible rate (> 60 UPS).
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SimulationDefinition.html#init_update_count Online documentation}
     */
    init_update_count?: uint32
    /**
     * **Default:** `0`
     *
     * How long this simulation takes. In the main menu simulations, another simulation will start after this simulation ends.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SimulationDefinition.html#length Online documentation}
     */
    length?: uint32
    /**
     * **Default:** `false`
     *
     * If `save` is not given and this is true, a map gets generated by the game for use in the simulation.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SimulationDefinition.html#generate_map Online documentation}
     */
    generate_map?: bool
    /**
     * **Default:** `true`
     *
     * If this is true, the map of the simulation is set to be a lab-tile checkerboard in the area of `{{-20, -15},{20, 15}}` when the scenario is first initialized (before init/init_file run).
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SimulationDefinition.html#checkboard Online documentation}
     */
    checkboard?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SimulationDefinition.html#hide_health_bars Online documentation}
     */
    hide_health_bars?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SimulationDefinition.html#mute_technology_finished_sound Online documentation}
     */
    mute_technology_finished_sound?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SimulationDefinition.html#mute_alert_sounds Online documentation}
     */
    mute_alert_sounds?: bool
    /**
     * Multiplier for the simulation volume set by the player in the sound settings.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SimulationDefinition.html#volume_modifier Online documentation}
     */
    volume_modifier?: float
    /**
     * If true, overrides the simulation volume set by the player in the sound settings, simply setting the volume modifier to `1`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SimulationDefinition.html#override_volume Online documentation}
     */
    override_volume?: bool
    /**
     * Overrides whether a simulation has its wind sounds muted.
     *
     * Tips and Tricks simulations and Factoriopedia simulations have their wind sounds muted by default, other simulations don't.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SimulationDefinition.html#mute_wind_sounds Online documentation}
     */
    mute_wind_sounds?: bool
    hide_factoriopedia_gradient?: bool
  }
  /**
   * One frame in time for a Bezier interpolation.
   * @see SingleGraphicProcessionLayer.frames
   * @see {@link https://lua-api.factorio.com/2.0.16/types/SingleGraphicProcessionLayer.html#frames Online documentation}
   */
  export interface SingleGraphicLayerProcessionBezierControlPoint {
    /**
     * Mandatory if `opacity` or `tint` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SingleGraphicLayerProcessionBezierControlPoint.html#timestamp Online documentation}
     */
    timestamp?: MapTick
    /**
     * `opacity` and `opacity_t` interpolate a double smoothly over time.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SingleGraphicLayerProcessionBezierControlPoint.html#opacity Online documentation}
     */
    opacity?: double
    /**
     * Bidirectional tangent at the given timestamp.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SingleGraphicLayerProcessionBezierControlPoint.html#opacity_t Online documentation}
     */
    opacity_t?: double
    /**
     * `tint` and `tint_t` interpolate a color smoothly over time.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SingleGraphicLayerProcessionBezierControlPoint.html#tint Online documentation}
     */
    tint?: Color
    /**
     * Bidirectional tangent at the given timestamp.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SingleGraphicLayerProcessionBezierControlPoint.html#tint_t Online documentation}
     */
    tint_t?: Color
    /**
     * `rotation` and `rotation_t` interpolate a double smoothly over time.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SingleGraphicLayerProcessionBezierControlPoint.html#rotation Online documentation}
     */
    rotation?: double
    /**
     * Bidirectional tangent at the given timestamp.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SingleGraphicLayerProcessionBezierControlPoint.html#rotation_t Online documentation}
     */
    rotation_t?: double
    /**
     * `scale` and `scale_t` interpolate a double smoothly over time.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SingleGraphicLayerProcessionBezierControlPoint.html#scale Online documentation}
     */
    scale?: double
    /**
     * Bidirectional tangent at the given timestamp.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SingleGraphicLayerProcessionBezierControlPoint.html#scale_t Online documentation}
     */
    scale_t?: double
    /**
     * `shift` and `shift_t` interpolate a vector smoothly over time using `shift_rate` and `shift_rate_t` for a 0-1 rate curve.
     *
     * Vector value.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SingleGraphicLayerProcessionBezierControlPoint.html#shift Online documentation}
     */
    shift?: Vector
    /**
     * Vector tangent.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SingleGraphicLayerProcessionBezierControlPoint.html#shift_t Online documentation}
     */
    shift_t?: Vector
    /**
     * Rate 0-1 value.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SingleGraphicLayerProcessionBezierControlPoint.html#shift_rate Online documentation}
     */
    shift_rate?: double
    /**
     * Rate tangent.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SingleGraphicLayerProcessionBezierControlPoint.html#shift_rate_t Online documentation}
     */
    shift_rate_t?: double
    /**
     * the frame of the pod animation played. Used only when 'animation_driven_by_curve' is enabled.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SingleGraphicLayerProcessionBezierControlPoint.html#frame Online documentation}
     */
    frame: float
  }
  export interface SingleGraphicProcessionLayer {
    readonly type: "single-graphic"
    graphic: ProcessionGraphic
    /**
     * **Default:** `"object"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SingleGraphicProcessionLayer.html#render_layer Online documentation}
     */
    render_layer?: RenderLayer
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SingleGraphicProcessionLayer.html#secondary_draw_order Online documentation}
     */
    secondary_draw_order?: int8
    /**
     * **Default:** `"pod"`
     *
     * Where the sprite is centered.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SingleGraphicProcessionLayer.html#relative_to Online documentation}
     */
    relative_to?: EffectRelativeTo
    /**
     * **Default:** `true`
     *
     * Swaps the order of sprite shift and rotation.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SingleGraphicProcessionLayer.html#compensated_pivot Online documentation}
     */
    compensated_pivot?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SingleGraphicProcessionLayer.html#rotates_with_pod Online documentation}
     */
    rotates_with_pod?: bool
    /**
     * **Default:** `true`
     *
     * Only applied when the `relative_to` is `pod`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SingleGraphicProcessionLayer.html#shift_rotates_with_pod Online documentation}
     */
    shift_rotates_with_pod?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SingleGraphicProcessionLayer.html#is_passenger_only Online documentation}
     */
    is_passenger_only?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SingleGraphicProcessionLayer.html#clip_with_hatches Online documentation}
     */
    clip_with_hatches?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SingleGraphicProcessionLayer.html#animation_driven_by_curve Online documentation}
     */
    animation_driven_by_curve?: bool
    /**
     * Default values if unspecified:
     *
     * - opacity : 1.0
     *
     * - tint : {1.0, 1.0, 1.0, 1.0}
     *
     * - scale : 1.0
     *
     * - rotation : 0.0
     *
     * - shift : {0.0, 0.0}
     *
     * - frame : 0.0
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SingleGraphicProcessionLayer.html#frames Online documentation}
     */
    frames: readonly SingleGraphicLayerProcessionBezierControlPoint[]
  }
  export interface SliderStyleSpecification extends BaseStyleSpecification {
    readonly type: "slider_style"
    full_bar?: ElementImageSet
    full_bar_disabled?: ElementImageSet
    empty_bar?: ElementImageSet
    empty_bar_disabled?: ElementImageSet
    draw_notches?: bool
    notch?: ElementImageSet
    button?: ButtonStyleSpecification
    high_button?: ButtonStyleSpecification
  }
  /**
   * Definition of the smoke of an entity.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/SmokeSource.html Online documentation}
   */
  export interface SmokeSource {
    name: TrivialSmokeID
    /**
     * Number of smokes generated per entity animation cycle (or per tick for some entities). Can't be negative or infinite.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SmokeSource.html#frequency Online documentation}
     */
    frequency: float
    /**
     * **Default:** `0`
     *
     * Offsets animation cycle, to move at which points of the cycle the smoke gets emitted.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SmokeSource.html#offset Online documentation}
     */
    offset?: float
    /**
     * Positional offset of smoke source relative to owner entity position. The vector is rotated by orientation of the entity.
     *
     * If any of `north_position`, `north_east_position`, `east_position`, `south_east_position`, `south_position`, `south_west_position`, `west_position`, `north_west_position` is defined, `position` is used only as default value for directional positions. Orientation of the owner entity will be rounded to 4 or 8 directions and one of the directional positions will be used as the offset instead of `position`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SmokeSource.html#position Online documentation}
     */
    position?: Vector
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SmokeSource.html#has_8_directions Online documentation}
     */
    has_8_directions?: bool
    /**
     * **Default:** `Value of `position``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SmokeSource.html#north_position Online documentation}
     */
    north_position?: Vector
    /**
     * **Default:** `Value of `position` rotated north-east`
     *
     * Only loaded if `has_8_directions` is `true`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SmokeSource.html#north_east_position Online documentation}
     */
    north_east_position?: Vector
    /**
     * **Default:** `Value of `position` rotated east`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SmokeSource.html#east_position Online documentation}
     */
    east_position?: Vector
    /**
     * **Default:** `Value of `position` rotated south-east`
     *
     * Only loaded if `has_8_directions` is `true`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SmokeSource.html#south_east_position Online documentation}
     */
    south_east_position?: Vector
    /**
     * **Default:** `Value of `position` rotated south`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SmokeSource.html#south_position Online documentation}
     */
    south_position?: Vector
    /**
     * **Default:** `Value of `position` rotated south-west`
     *
     * Only loaded if `has_8_directions` is `true`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SmokeSource.html#south_west_position Online documentation}
     */
    south_west_position?: Vector
    /**
     * **Default:** `Value of `position` rotated west`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SmokeSource.html#west_position Online documentation}
     */
    west_position?: Vector
    /**
     * **Default:** `Value of `position` rotated north-west`
     *
     * Only loaded if `has_8_directions` is `true`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SmokeSource.html#north_west_position Online documentation}
     */
    north_west_position?: Vector
    deviation?: Vector
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SmokeSource.html#starting_frame Online documentation}
     */
    starting_frame?: uint16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SmokeSource.html#starting_frame_deviation Online documentation}
     */
    starting_frame_deviation?: uint16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SmokeSource.html#height Online documentation}
     */
    height?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SmokeSource.html#height_deviation Online documentation}
     */
    height_deviation?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SmokeSource.html#starting_vertical_speed Online documentation}
     */
    starting_vertical_speed?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SmokeSource.html#starting_vertical_speed_deviation Online documentation}
     */
    starting_vertical_speed_deviation?: float
    /**
     * **Default:** `0.965`
     *
     * A value between `0` and `1`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SmokeSource.html#vertical_speed_slowdown Online documentation}
     */
    vertical_speed_slowdown?: float
  }
  /**
   * Struct type for {@link Sound}
   * @see Sound
   * @see {@link https://lua-api.factorio.com/2.0.16/types/Sound.html Online documentation}
   */
  export interface SoundStruct {
    category?: SoundType
    /**
     * **Default:** `127`
     *
     * Sounds with higher priority will replace a sound with lower priority if the maximum sounds limit is reached.
     *
     * 0 is the highest priority, 255 is the lowest priority.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sound.html#priority Online documentation}
     */
    priority?: uint8
    aggregation?: AggregationSpecification
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sound.html#allow_random_repeat Online documentation}
     */
    allow_random_repeat?: bool
    /**
     * **Default:** `1`
     *
     * Modifies how far a sound can be heard. Must be between `0` and `1` inclusive.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sound.html#audible_distance_modifier Online documentation}
     */
    audible_distance_modifier?: double
    game_controller_vibration_data?: GameControllerVibrationData
    advanced_volume_control?: AdvancedVolumeControl
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sound.html#speed_smoothing_window_size Online documentation}
     */
    speed_smoothing_window_size?: uint32
    variations?: SoundDefinition | readonly SoundDefinition[]
    /**
     * Supported sound file formats are `.ogg` (Vorbis) and `.wav`.
     *
     * Only loaded, and mandatory if `variations` is not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sound.html#filename Online documentation}
     */
    filename?: FileName
    /**
     * **Default:** `1`
     *
     * Only loaded if `variations` is not defined.
     *
     * This sets both min and max volumes.
     *
     * Must be `>= 0`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sound.html#volume Online documentation}
     */
    volume?: float
    /**
     * **Default:** `1`
     *
     * Only loaded if `variations` and `volume` are not defined.
     *
     * Must be `>= 0`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sound.html#min_volume Online documentation}
     */
    min_volume?: float
    /**
     * **Default:** `1`
     *
     * Only loaded if `variations` is not defined.
     *
     * Only loaded if `min_volume` is defined.
     *
     * Must be `>= min_volume`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sound.html#max_volume Online documentation}
     */
    max_volume?: float
    /**
     * Only loaded if `variations` is not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sound.html#preload Online documentation}
     */
    preload?: bool
    /**
     * **Default:** `1`
     *
     * Speed must be `>= 1 / 64`. This sets both min and max speeds.
     *
     * Only loaded if `variations` is not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sound.html#speed Online documentation}
     */
    speed?: float
    /**
     * **Default:** `1`
     *
     * Must be `>= 1 / 64`.
     *
     * Only loaded if both `variations` and `speed` are not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sound.html#min_speed Online documentation}
     */
    min_speed?: float
    /**
     * **Default:** `1`
     *
     * Must be `>= min_speed`.
     *
     * Only loaded if `variations` is not defined. Only loaded, and mandatory if `min_speed` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sound.html#max_speed Online documentation}
     */
    max_speed?: float
    /**
     * Only loaded if `variations` is not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sound.html#modifiers Online documentation}
     */
    modifiers?: SoundModifier | readonly SoundModifier[]
  }
  /**
   * @example
   * {
   *   filename = "__base__/sound/ambient/world-ambience-3.ogg",
   *   volume = 1.2
   * }
   * @see {@link https://lua-api.factorio.com/2.0.16/types/Sound.html Online documentation}
   */
  export type Sound = SoundStruct | readonly SoundDefinition[]
  export interface SoundAccent {
    sound?: Sound
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SoundAccent.html#frame Online documentation}
     */
    frame?: uint16
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SoundAccent.html#audible_distance_modifier Online documentation}
     */
    audible_distance_modifier?: float
    play_for_working_visualisations?: readonly string[]
  }
  /**
   * Struct type for {@link SoundDefinition}
   * @see SoundDefinition
   * @see {@link https://lua-api.factorio.com/2.0.16/types/SoundDefinition.html Online documentation}
   */
  export interface SoundDefinitionStruct {
    /**
     * Supported sound file formats are `.ogg` (Vorbis) and `.wav`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SoundDefinition.html#filename Online documentation}
     */
    filename: FileName
    /**
     * **Default:** `1`
     *
     * This sets both min and max volumes.
     *
     * Must be `>= 0`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SoundDefinition.html#volume Online documentation}
     */
    volume?: float
    /**
     * **Default:** `1`
     *
     * Only loaded if `volume` is not defined.
     *
     * Must be `>= 0`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SoundDefinition.html#min_volume Online documentation}
     */
    min_volume?: float
    /**
     * **Default:** `1`
     *
     * Only loaded if `min_volume` is defined.
     *
     * Must be `>= min_volume`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SoundDefinition.html#max_volume Online documentation}
     */
    max_volume?: float
    preload?: bool
    /**
     * **Default:** `1`
     *
     * Speed must be `>= 1 / 64`. This sets both min and max speeds.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SoundDefinition.html#speed Online documentation}
     */
    speed?: float
    /**
     * **Default:** `1`
     *
     * Only loaded if `speed` is not defined.
     *
     * Must be `>= 1 / 64`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SoundDefinition.html#min_speed Online documentation}
     */
    min_speed?: float
    /**
     * **Default:** `1`
     *
     * Only loaded, and mandatory, if `min_speed` is defined.
     *
     * Must be `>= min_speed`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SoundDefinition.html#max_speed Online documentation}
     */
    max_speed?: float
    modifiers?: SoundModifier | readonly SoundModifier[]
  }
  export type SoundDefinition = SoundDefinitionStruct | FileName
  export interface SoundModifier {
    readonly type: SoundModifierType
    volume_multiplier: float
  }
  /**
   * ## Union members
   * - `"game"`
   * - `"main-menu"`
   * - `"tips-and-tricks"`
   * - `"driving"`
   * - `"elevation"`
   * - `"space-platform"`
   * @see {@link https://lua-api.factorio.com/2.0.16/types/SoundModifierType.html Online documentation}
   */
  export type SoundModifierType = "game" | "main-menu" | "tips-and-tricks" | "driving" | "elevation" | "space-platform"
  /**
   * This defines which slider in the sound settings affects the volume of this sound. Furthermore, some sound types are mixed differently than others, e.g. zoom level effects are applied.
   *
   * ## Union members
   * - `"game-effect"`
   * - `"gui-effect"`
   * - `"ambient"`
   * - `"environment"`
   * - `"walking"`
   * - `"alert"`
   * - `"wind"`
   * - `"world-ambient"`
   * - `"weapon"`
   * - `"explosion"`
   * - `"enemy"`
   * @see {@link https://lua-api.factorio.com/2.0.16/types/SoundType.html Online documentation}
   */
  export type SoundType =
    | "game-effect"
    | "gui-effect"
    | "ambient"
    | "environment"
    | "walking"
    | "alert"
    | "wind"
    | "world-ambient"
    | "weapon"
    | "explosion"
    | "enemy"
  /**
   * Struct type for {@link SpaceConnectionAsteroidSpawnDefinition}
   * @see SpaceConnectionAsteroidSpawnDefinition
   * @see {@link https://lua-api.factorio.com/2.0.16/types/SpaceConnectionAsteroidSpawnDefinition.html Online documentation}
   */
  export interface SpaceConnectionAsteroidSpawnDefinitionStruct {
    /**
     * **Default:** `"entity"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpaceConnectionAsteroidSpawnDefinition.html#type Online documentation}
     */
    readonly type?: "entity" | "asteroid-chunk"
    /**
     * The type this is loaded as depends on `type`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpaceConnectionAsteroidSpawnDefinition.html#asteroid Online documentation}
     */
    asteroid: EntityID | AsteroidChunkID
    spawn_points: readonly SpaceConnectionAsteroidSpawnPoint[]
  }
  export type SpaceConnectionAsteroidSpawnDefinition =
    | SpaceConnectionAsteroidSpawnDefinitionStruct
    | readonly [EntityID, readonly SpaceConnectionAsteroidSpawnPoint[]]
  export interface SpaceConnectionAsteroidSpawnPoint extends AsteroidSpawnPoint {
    distance: double
  }
  /**
   * The name of a {@link SpaceConnectionPrototype}.
   * @example
   * "nauvis-vulcanus"
   * @example
   * "fulgora-aquilo"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/SpaceConnectionID.html Online documentation}
   */
  export type SpaceConnectionID = string
  export interface SpaceDustEffectProperties {
    noise_texture: EffectTexture
    asteroid_texture: EffectTexture
    asteroid_normal_texture: EffectTexture
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpaceDustEffectProperties.html#animation_speed Online documentation}
     */
    animation_speed?: float
  }
  export interface SpaceLocationAsteroidSpawnDefinition extends AsteroidSpawnPoint {
    /**
     * **Default:** `"entity"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpaceLocationAsteroidSpawnDefinition.html#type Online documentation}
     */
    readonly type?: "entity" | "asteroid-chunk"
    /**
     * The type this is loaded as depends on `type`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpaceLocationAsteroidSpawnDefinition.html#asteroid Online documentation}
     */
    asteroid: EntityID | AsteroidChunkID
  }
  /**
   * The name of a {@link SpaceLocationPrototype}.
   * @example
   * "shattered-planet"
   * @example
   * "solar-system-edge"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/SpaceLocationID.html Online documentation}
   */
  export type SpaceLocationID = string
  export interface SpacePlatformTileDefinition {
    tile: TileID
    position: TilePosition
  }
  export interface SpacePlatformsModifier extends BoolModifier {
    readonly type: "unlock-space-platforms"
    /**
     * **Default:** `false`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpacePlatformsModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  /**
   * Nebulae are rendered only behind tiles with the effect, but stars are rendered behind entire terrain. For that reason using two or more tile types with different space effect on one surface is not supported. The game will allow this to happen, but rendering will chose one star configuration for entire screen.
   *
   * Zoom is recalculated using formula `max(1/1024, pow(max(0, zoom * base_factor + base_offset), exponent) * factor + offset)`.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/SpaceTileEffectParameters.html Online documentation}
   */
  export interface SpaceTileEffectParameters {
    /**
     * **Default:** `0.25`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpaceTileEffectParameters.html#scroll_factor Online documentation}
     */
    scroll_factor?: float
    /**
     * **Default:** `0.25`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpaceTileEffectParameters.html#zoom_base_factor Online documentation}
     */
    zoom_base_factor?: float
    /**
     * **Default:** `0.75`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpaceTileEffectParameters.html#zoom_base_offset Online documentation}
     */
    zoom_base_offset?: float
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpaceTileEffectParameters.html#zoom_exponent Online documentation}
     */
    zoom_exponent?: float
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpaceTileEffectParameters.html#zoom_factor Online documentation}
     */
    zoom_factor?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpaceTileEffectParameters.html#zoom_offset Online documentation}
     */
    zoom_offset?: float
    /**
     * **Default:** `0.9`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpaceTileEffectParameters.html#nebula_scale Online documentation}
     */
    nebula_scale?: float
    /**
     * **Default:** `0.5`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpaceTileEffectParameters.html#nebula_brightness Online documentation}
     */
    nebula_brightness?: float
    /**
     * **Default:** `0.9`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpaceTileEffectParameters.html#nebula_saturation Online documentation}
     */
    nebula_saturation?: float
    /**
     * **Default:** `0.01`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpaceTileEffectParameters.html#star_density Online documentation}
     */
    star_density?: float
    /**
     * **Default:** `100`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpaceTileEffectParameters.html#star_scale Online documentation}
     */
    star_scale?: float
    /**
     * **Default:** `0.06`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpaceTileEffectParameters.html#star_parallax Online documentation}
     */
    star_parallax?: float
    /**
     * **Default:** `1.666`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpaceTileEffectParameters.html#star_shape Online documentation}
     */
    star_shape?: float
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpaceTileEffectParameters.html#star_brightness Online documentation}
     */
    star_brightness?: float
    /**
     * **Default:** `0.5`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpaceTileEffectParameters.html#star_saturations Online documentation}
     */
    star_saturations?: float
  }
  /**
   * Struct type for {@link SpawnPoint}
   * @see SpawnPoint
   * @see {@link https://lua-api.factorio.com/2.0.16/types/SpawnPoint.html Online documentation}
   */
  export interface SpawnPointStruct {
    evolution_factor: double
    /**
     * Must be `>= 0`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpawnPoint.html#spawn_weight Online documentation}
     */
    spawn_weight: double
  }
  /**
   * The definition of a evolution and probability weights for a {@link UnitSpawnDefinition spawnable unit} for a {@link EnemySpawnerPrototype}.
   *
   * It can be specified as a table with named or numbered keys, but not a mix of both. If this is specified as a table with numbered keys then the first value is the evolution factor and the second is the spawn weight.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/SpawnPoint.html Online documentation}
   */
  export type SpawnPoint = SpawnPointStruct | readonly [double, double]
  export interface SpeechBubbleStyleSpecification extends BaseStyleSpecification {
    readonly type: "speech_bubble_style"
    frame_style?: FrameStyleSpecification
    label_style?: LabelStyleSpecification
    arrow_graphical_set?: ElementImageSet
    close_color?: Color
    arrow_indent?: double
    pass_through_mouse?: bool
  }
  /**
   * Used by {@link SpiderVehiclePrototype}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/SpiderEngineSpecification.html Online documentation}
   */
  export interface SpiderEngineSpecification {
    legs: SpiderLegSpecification | readonly SpiderLegSpecification[]
    /**
     * **Default:** `0`
     *
     * The amount of overlap allowed between spider leg walking groups. Valid values are between 0.0 and 1.0. Default is 0.0 (no overlap); all legs in the current walking group must complete their step before the next walking group is allowed to move. 0.5 means the next walking group is allowed to start when the time remaining in the current walking group's step is about half of the time that the next group's step is predicted to take.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpiderEngineSpecification.html#walking_group_overlap Online documentation}
     */
    walking_group_overlap?: float
  }
  /**
   * @see SpiderLegPrototype.graphics_set
   * @see {@link https://lua-api.factorio.com/2.0.16/prototypes/SpiderLegPrototype.html#graphics_set Online documentation}
   */
  export interface SpiderLegGraphicsSet {
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpiderLegGraphicsSet.html#joint_turn_offset Online documentation}
     */
    joint_turn_offset?: float
    /**
     * **Default:** `"train-stop-top"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpiderLegGraphicsSet.html#joint_render_layer Online documentation}
     */
    joint_render_layer?: RenderLayer
    joint?: RotatedSprite
    joint_shadow?: RotatedSprite
    upper_part?: SpiderLegPart
    lower_part?: SpiderLegPart
    upper_part_shadow?: SpiderLegPart
    lower_part_shadow?: SpiderLegPart
    upper_part_water_reflection?: SpiderLegPart
    lower_part_water_reflection?: SpiderLegPart
    foot?: RotatedSprite
    foot_shadow?: RotatedSprite
  }
  export interface SpiderLegPart {
    top_end?: RotatedSprite
    middle?: RotatedSprite
    bottom_end?: RotatedSprite
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpiderLegPart.html#middle_offset_from_top Online documentation}
     */
    middle_offset_from_top?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpiderLegPart.html#middle_offset_from_bottom Online documentation}
     */
    middle_offset_from_bottom?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpiderLegPart.html#top_end_length Online documentation}
     */
    top_end_length?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpiderLegPart.html#bottom_end_length Online documentation}
     */
    bottom_end_length?: float
    /**
     * **Default:** `0`
     *
     * The number of tiles in screen space to shift the top end of the leg part AWAY from the top joint.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpiderLegPart.html#top_end_offset Online documentation}
     */
    top_end_offset?: float
    /**
     * **Default:** `0`
     *
     * The number of tiles in screen space to shift the bottom end of the leg part AWAY from the bottom joint.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpiderLegPart.html#bottom_end_offset Online documentation}
     */
    bottom_end_offset?: float
    /**
     * **Default:** `"higher-object-above"`
     *
     * The sprite layer in which to draw this leg part.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpiderLegPart.html#render_layer Online documentation}
     */
    render_layer?: RenderLayer
  }
  /**
   * Used by {@link SpiderEngineSpecification} for {@link SpiderVehiclePrototype}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/SpiderLegSpecification.html Online documentation}
   */
  export interface SpiderLegSpecification {
    /**
     * Name of a {@link SpiderLegPrototype}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpiderLegSpecification.html#leg Online documentation}
     */
    leg: EntityID
    mount_position: Vector
    ground_position: Vector
    /**
     * Triggers to activate whenever the leg hits the ground, even if the owning spider is actively attacking an entity. For triggers, the source is the leg entity and the target is the leg's current position. Certain effects may not raise as desired, e.g. `"push-back"` does nothing.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpiderLegSpecification.html#leg_hit_the_ground_trigger Online documentation}
     */
    leg_hit_the_ground_trigger?: TriggerEffect
    /**
     * Triggers to activate whenever the leg hits the ground and the owning spider is actively attacking an entity. These effects will trigger after `leg_hit_the_ground_trigger` have triggered. For triggers, the source is the let entity and the target is the leg's current position. Certain effects may not raise as desired.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpiderLegSpecification.html#leg_hit_the_ground_when_attacking_trigger Online documentation}
     */
    leg_hit_the_ground_when_attacking_trigger?: TriggerEffect
    /**
     * The walking group this leg belongs to. Legs in the same walking group move or stay still at the same time, according to the engine that drives them. Walking groups must start at 1 and increment upward without skipping any numbers. If all legs are part of the same walking_group, they will all move simultaneously.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpiderLegSpecification.html#walking_group Online documentation}
     */
    walking_group: uint8
  }
  export interface SpiderLegTriggerEffect {
    /**
     * A number between 0 and 1 (inclusive) representing the distance from the upper end of the leg (0) to the lower end of the leg (1) where the effects will be triggered. For the upper leg, position 0 represents the point that the leg connects to the entity's hip and position 1 represents the knee. For the lower leg, position 0 represents the knee and position 1 represents the foot.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpiderLegTriggerEffect.html#position Online documentation}
     */
    position: float
    effect: TriggerEffect
  }
  export interface SpiderTorsoGraphicsSet {
    base_animation?: RotatedAnimation
    shadow_base_animation?: RotatedAnimation
    animation?: RotatedAnimation
    shadow_animation?: RotatedAnimation
    /**
     * **Default:** `"higher-object-under"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpiderTorsoGraphicsSet.html#base_render_layer Online documentation}
     */
    base_render_layer?: RenderLayer
    /**
     * **Default:** `"under-elevated"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpiderTorsoGraphicsSet.html#render_layer Online documentation}
     */
    render_layer?: RenderLayer
  }
  /**
   * Used to specify the graphics for {@link SpiderVehiclePrototype}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/SpiderVehicleGraphicsSet.html Online documentation}
   */
  export interface SpiderVehicleGraphicsSet extends SpiderTorsoGraphicsSet {
    /**
     * **Default:** `"object"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpiderVehicleGraphicsSet.html#autopilot_destination_visualisation_render_layer Online documentation}
     */
    autopilot_destination_visualisation_render_layer?: RenderLayer
    light?: LightDefinition
    /**
     * Placed in multiple positions, as determined by `light_positions`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpiderVehicleGraphicsSet.html#eye_light Online documentation}
     */
    eye_light?: LightDefinition
    autopilot_destination_on_map_visualisation?: Animation
    autopilot_destination_queue_on_map_visualisation?: Animation
    autopilot_destination_visualisation?: Animation
    autopilot_destination_queue_visualisation?: Animation
    /**
     * **Default:** `0.125`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpiderVehicleGraphicsSet.html#autopilot_path_visualisation_line_width Online documentation}
     */
    autopilot_path_visualisation_line_width?: float
    /**
     * **Default:** `2`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpiderVehicleGraphicsSet.html#autopilot_path_visualisation_on_map_line_width Online documentation}
     */
    autopilot_path_visualisation_on_map_line_width?: float
    /**
     * Defines where each `eye_light` is placed. One array per eye and each of those arrays should contain one position per body direction.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpiderVehicleGraphicsSet.html#light_positions Online documentation}
     */
    light_positions?: readonly (readonly Vector[])[]
  }
  export interface SpoilToTriggerResult {
    trigger: Trigger
    /**
     * Must be positive (larger than 0).
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpoilToTriggerResult.html#items_per_trigger Online documentation}
     */
    items_per_trigger: ItemCountType
  }
  /**
   * Specifies one picture that can be used in the game.
   *
   * When there is more than one sprite or {@link Animation} frame with the same source file and dimensions/position in the game, they all share the same memory.
   * @example
   * -- simple sprite
   * picture_set_enemy =
   * {
   *   filename = "__base__/graphics/entity/land-mine/land-mine-set-enemy.png",
   *   priority = "medium",
   *   width = 32,
   *   height = 32
   * }
   * @example
   * -- sprite with layers
   * picture =
   * {
   *   layers =
   *   {
   *     {
   *       filename = "__base__/graphics/entity/wooden-chest/wooden-chest.png",
   *       priority = "extra-high",
   *       width = 62,
   *       height = 72,
   *       shift = util.by_pixel(0.5, -2),
   *       scale = 0.5
   *     },
   *     {
   *       filename = "__base__/graphics/entity/wooden-chest/wooden-chest-shadow.png",
   *       priority = "extra-high",
   *       width = 104,
   *       height = 40,
   *       shift = util.by_pixel(10, 6.5),
   *       draw_as_shadow = true,
   *       scale = 0.5
   *     }
   *   }
   * }
   * @see {@link https://lua-api.factorio.com/2.0.16/types/Sprite.html Online documentation}
   */
  export interface Sprite extends Omit<SpriteParameters, "filename"> {
    /**
     * If this property is present, all Sprite definitions have to be placed as entries in the array, and they will all be loaded from there. `layers` may not be an empty table. Each definition in the array may also have the `layers` property.
     *
     * If this property is present, all other properties, including those inherited from SpriteParameters, are ignored.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sprite.html#layers Online documentation}
     */
    layers?: readonly Sprite[]
    /**
     * Only loaded, and mandatory if `layers` is not defined.
     *
     * The path to the sprite file to use.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sprite.html#filename Online documentation}
     */
    filename?: FileName
    /**
     * Only loaded if `layers` is not defined.
     *
     * Number of slices this is sliced into when using the "optimized atlas packing" option. If you are a modder, you can just ignore this property. Example: If this is 4, the sprite will be sliced into a 4x4 grid.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sprite.html#dice Online documentation}
     */
    dice?: SpriteSizeType
    /**
     * Only loaded if `layers` is not defined.
     *
     * Same as `dice` above, but this specifies only how many slices there are on the x axis.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sprite.html#dice_x Online documentation}
     */
    dice_x?: SpriteSizeType
    /**
     * Only loaded if `layers` is not defined.
     *
     * Same as `dice` above, but this specifies only how many slices there are on the y axis.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sprite.html#dice_y Online documentation}
     */
    dice_y?: SpriteSizeType
  }
  /**
   * A map of sprites for all 16 directions of the entity.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/Sprite16Way.html Online documentation}
   */
  export interface Sprite16Way {
    sheets?: readonly SpriteNWaySheet[]
    /**
     * Only loaded if `sheets` is not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sprite16Way.html#sheet Online documentation}
     */
    sheet?: SpriteNWaySheet
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sprite16Way.html#north Online documentation}
     */
    north?: Sprite
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sprite16Way.html#north_north_east Online documentation}
     */
    north_north_east?: Sprite
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sprite16Way.html#north_east Online documentation}
     */
    north_east?: Sprite
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sprite16Way.html#east_north_east Online documentation}
     */
    east_north_east?: Sprite
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sprite16Way.html#east Online documentation}
     */
    east?: Sprite
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sprite16Way.html#east_south_east Online documentation}
     */
    east_south_east?: Sprite
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sprite16Way.html#south_east Online documentation}
     */
    south_east?: Sprite
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sprite16Way.html#south_south_east Online documentation}
     */
    south_south_east?: Sprite
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sprite16Way.html#south Online documentation}
     */
    south?: Sprite
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sprite16Way.html#south_south_west Online documentation}
     */
    south_south_west?: Sprite
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sprite16Way.html#south_west Online documentation}
     */
    south_west?: Sprite
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sprite16Way.html#west_south_west Online documentation}
     */
    west_south_west?: Sprite
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sprite16Way.html#west Online documentation}
     */
    west?: Sprite
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sprite16Way.html#west_north_west Online documentation}
     */
    west_north_west?: Sprite
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sprite16Way.html#north_west Online documentation}
     */
    north_west?: Sprite
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sprite16Way.html#north_north_west Online documentation}
     */
    north_north_west?: Sprite
  }
  /**
   * Struct type for {@link Sprite4Way}
   * @see Sprite4Way
   * @see {@link https://lua-api.factorio.com/2.0.16/types/Sprite4Way.html Online documentation}
   */
  export interface Sprite4WayStruct {
    sheets?: readonly SpriteNWaySheet[]
    /**
     * Only loaded if `sheets` is not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sprite4Way.html#sheet Online documentation}
     */
    sheet?: SpriteNWaySheet
    /**
     * Only loaded if both `sheets` and `sheet` are not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sprite4Way.html#north Online documentation}
     */
    north?: Sprite
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     *
     * Only loaded if `north` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sprite4Way.html#east Online documentation}
     */
    east?: Sprite
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     *
     * Only loaded if `north` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sprite4Way.html#south Online documentation}
     */
    south?: Sprite
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     *
     * Only loaded if `north` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Sprite4Way.html#west Online documentation}
     */
    west?: Sprite
  }
  /**
   * Sprites for the 4 major directions of the entity. If this is loaded as a single Sprite, it applies to all directions.
   *
   * This struct is either loaded as `sheets` or `sheet` or a map of one sprite per direction. For per direction sprites, the sprites are loaded via `north`, `east`, `south` and `west`.
   * @example
   * -- separate sprites per direction
   * {
   *   north =
   *   {
   *     filename = "__base__/graphics/entity/assembling-machine-3/assembling-machine-3-pipe-N.png",
   *     priority = "extra-high",
   *     width = 71,
   *     height = 38,
   *     shift = util.by_pixel(2.25, 13.5),
   *     scale = 0.5
   *   },
   *   east =
   *   {
   *     filename = "__base__/graphics/entity/assembling-machine-3/assembling-machine-3-pipe-E.png",
   *     priority = "extra-high",
   *     width = 42,
   *     height = 76,
   *     shift = util.by_pixel(-24.5, 1),
   *     scale = 0.5
   *   },
   *   south =
   *   {
   *     filename = "__base__/graphics/entity/assembling-machine-3/assembling-machine-3-pipe-S.png",
   *     priority = "extra-high",
   *     width = 88,
   *     height = 61,
   *     shift = util.by_pixel(0, -31.25),
   *     scale = 0.5
   *   },
   *   west =
   *   {
   *     filename = "__base__/graphics/entity/assembling-machine-3/assembling-machine-3-pipe-W.png",
   *     priority = "extra-high",
   *     width = 39,
   *     height = 73,
   *     shift = util.by_pixel(25.75, 1.25),
   *     scale = 0.5
   *   }
   * }
   * @see {@link https://lua-api.factorio.com/2.0.16/types/Sprite4Way.html Online documentation}
   */
  export type Sprite4Way = Sprite4WayStruct | Sprite
  /**
   * An array containing the following values.
   *
   * ## Union members
   * - `"no-crop"`: The sprite won't be automatically cropped.
   * - `"not-compressed"`
   * - `"always-compressed"`
   * - `"mipmap"`
   * - `"linear-minification"`
   * - `"linear-magnification"`
   * - `"linear-mip-level"`
   * - `"alpha-mask"`
   * - `"no-scale"`
   * - `"mask"`: This flag will internally set these flags: `"group=none"`
   * - `"icon"`: This flag will internally set these flags: `"no-crop"`, `"no-scale"`, `"mipmap"`, `"linear-minification"`, `"linear-magnification"`, `"linear-mip-level"`, `"not-compressed"`, `"group=icon"`
   * - `"gui"`: This flag will internally set these flags: `"no-crop"`, `"no-scale"`, `"mipmap"`, `"linear-minification"`, `"linear-magnification"`, `"linear-mip-level"`, `"not-compressed"`, `"group=gui"`
   * - `"gui-icon"`: This flag will internally set these flags: `"no-crop"`, `"no-scale"`, `"mipmap"`, `"linear-minification"`, `"linear-magnification"`, `"not-compressed"`, `"group=icon"`
   * - `"light"`: This flag will internally set these flags: `"mipmap"`, `"linear-mip-level"`, `"linear-minification"`, `"linear-magnification"`, `"group=none"`
   * - `"terrain"`: This flag will internally set these flags: `"mipmap"`, `"linear-mip-level"`, `"linear-minification"`, `"no-crop"`, `"group=terrain"`
   * - `"terrain-effect-map"`: This flag will internally set these flags: `"mipmap"`, `"linear-mip-level"`, `"linear-minification"`, `"no-crop"`, `"terrain-effect-map"` (internal group flag)
   * - `"reflection-effect-map"`: This flag will internally set these flags: `"mipmap"`, `"linear-mip-level"`, `"linear-minification"`, `"terrain-effect-map"` (internal group flag)
   * - `"shadow"`
   * - `"smoke"`: This flag will internally set these flags: `"mipmap"`, `"linear-minification"`, `"linear-magnification"`, `"group=smoke"`
   * - `"decal"`: This flag will internally set these flags: `"group=decal"`
   * - `"low-object"`
   * - `"corpse-decay"`
   * - `"trilinear-filtering"`
   * - `"group=none"`
   * - `"group=terrain"`
   * - `"group=shadow"`
   * - `"group=smoke"`
   * - `"group=decal"`
   * - `"group=low-object"`
   * - `"group=gui"`
   * - `"group=icon"`
   * - `"group=icon-background"`
   * - `"group=effect-texture"`
   * @example
   * flags = { "linear-minification", "linear-magnification" }
   * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteFlags.html Online documentation}
   */
  export type SpriteFlags = readonly (
    | "no-crop"
    | "not-compressed"
    | "always-compressed"
    | "mipmap"
    | "linear-minification"
    | "linear-magnification"
    | "linear-mip-level"
    | "alpha-mask"
    | "no-scale"
    | "mask"
    | "icon"
    | "gui"
    | "gui-icon"
    | "light"
    | "terrain"
    | "terrain-effect-map"
    | "reflection-effect-map"
    | "shadow"
    | "smoke"
    | "decal"
    | "low-object"
    | "corpse-decay"
    | "trilinear-filtering"
    | "group=none"
    | "group=terrain"
    | "group=shadow"
    | "group=smoke"
    | "group=decal"
    | "group=low-object"
    | "group=gui"
    | "group=icon"
    | "group=icon-background"
    | "group=effect-texture"
  )[]
  /**
   * @example
   * sheet =
   * {
   *   filename = "__base__/graphics/entity/burner-inserter/burner-inserter-platform.png",
   *   priority = "extra-high",
   *   width = 105,
   *   height = 79,
   *   shift = util.by_pixel(1.5, 7.5-1),
   *   scale = 0.5
   * }
   * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteNWaySheet.html Online documentation}
   */
  export interface SpriteNWaySheet extends SpriteParameters {
    /**
     * **Default:** `4 if used in Sprite4Way, 8 if used in Sprite8Way`
     *
     * Specifies how many of the directions of the SpriteNWay are filled up with this sheet.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteNWaySheet.html#frames Online documentation}
     */
    frames?: uint32
    /**
     * **Default:** `false`
     *
     * Unused.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteNWaySheet.html#generate_sdf Online documentation}
     */
    generate_sdf?: bool
  }
  export interface SpriteParameters extends SpriteSource {
    /**
     * **Default:** `"medium"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteParameters.html#priority Online documentation}
     */
    priority?: SpritePriority
    flags?: SpriteFlags
    /**
     * **Default:** ``{0, 0}``
     *
     * The shift in tiles. `util.by_pixel()` can be used to divide the shift by 32 which is the usual pixel height/width of 1 tile in normal resolution. Note that 32 pixel tile height/width is not enforced anywhere - any other tile height or width is also possible.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteParameters.html#shift Online documentation}
     */
    shift?: Vector
    /**
     * **Default:** `false`
     *
     * Whether to rotate the `shift` alongside the sprite's rotation. This only applies to sprites which are procedurally rotated by the game engine (like projectiles, wires, inserter hands, etc).
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteParameters.html#rotate_shift Online documentation}
     */
    rotate_shift?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteParameters.html#apply_special_effect Online documentation}
     */
    apply_special_effect?: bool
    /**
     * **Default:** `1`
     *
     * Values other than `1` specify the scale of the sprite on default zoom. A scale of `2` means that the picture will be two times bigger on screen (and thus more pixelated).
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteParameters.html#scale Online documentation}
     */
    scale?: double
    /**
     * **Default:** `false`
     *
     * Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true. This takes precedence over `draw_as_glow` and `draw_as_light`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteParameters.html#draw_as_shadow Online documentation}
     */
    draw_as_shadow?: bool
    /**
     * **Default:** `false`
     *
     * Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true. This takes precedence over `draw_as_light`.
     *
     * Draws first as a normal sprite, then again as a light layer. See {@linkplain https://forums.factorio.com/91682}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteParameters.html#draw_as_glow Online documentation}
     */
    draw_as_glow?: bool
    /**
     * **Default:** `false`
     *
     * Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteParameters.html#draw_as_light Online documentation}
     */
    draw_as_light?: bool
    /**
     * **Default:** `0`
     *
     * Only loaded if this is an icon, that is it has the flag `"group=icon"` or `"group=gui"`. Will be clamped to range `[0, 5]`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteParameters.html#mipmap_count Online documentation}
     */
    mipmap_count?: uint8
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteParameters.html#apply_runtime_tint Online documentation}
     */
    apply_runtime_tint?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteParameters.html#tint_as_overlay Online documentation}
     */
    tint_as_overlay?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteParameters.html#invert_colors Online documentation}
     */
    invert_colors?: bool
    /**
     * **Default:** ``{r=1, g=1, b=1, a=1}``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteParameters.html#tint Online documentation}
     */
    tint?: Color
    /**
     * **Default:** `"normal"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteParameters.html#blend_mode Online documentation}
     */
    blend_mode?: BlendMode
    /**
     * **Default:** `false`
     *
     * This property is only used by sprites used in {@link UtilitySprites} that have the `"icon"` flag set.
     *
     * If this is set to `true`, the game will generate an icon shadow (using signed distance fields) for the sprite.
     *
     * ![Example of the icon shadow in the character modifier icon used by the steel axe research](https://lua-api.factorio.com/2.0.16/static/images/Generate_sdf_example.png)
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteParameters.html#generate_sdf Online documentation}
     */
    generate_sdf?: bool
    /**
     * **Default:** `"any"`
     *
     * Provides hint to sprite atlas system, so it can try to put sprites that are intended to be used at the same locations to the same sprite atlas.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteParameters.html#surface Online documentation}
     */
    surface?: SpriteUsageSurfaceHint
    /**
     * **Default:** `"any"`
     *
     * Provides hint to sprite atlas system, so it can pack sprites that are related to each other to the same sprite atlas.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteParameters.html#usage Online documentation}
     */
    usage?: SpriteUsageHint
  }
  /**
   * This sets the "caching priority" of a sprite, so deciding priority of it being included in VRAM instead of streaming it and is therefore a purely technical value. See {@linkplain https://forums.factorio.com/viewtopic.php?p=437380#p437380 here} and {@linkplain https://www.factorio.com/blog/post/fff-264 here}. The possible values are listed below.
   *
   * ## Union members
   * - `"extra-high-no-scale"`
   * - `"extra-high"`
   * - `"high"`
   * - `"medium"`
   * - `"low"`
   * - `"very-low"`
   * - `"no-atlas"`
   * @see {@link https://lua-api.factorio.com/2.0.16/types/SpritePriority.html Online documentation}
   */
  export type SpritePriority =
    | "extra-high-no-scale"
    | "extra-high"
    | "high"
    | "medium"
    | "low"
    | "very-low"
    | "no-atlas"
  export interface SpriteSheet extends SpriteParameters {
    /**
     * If this property is present, all SpriteSheet definitions have to be placed as entries in the array, and they will all be loaded from there. `layers` may not be an empty table. Each definition in the array may also have the `layers` property.
     *
     * If this property is present, all other properties, including those inherited from SpriteParameters, are ignored.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteSheet.html#layers Online documentation}
     */
    layers?: readonly SpriteSheet[]
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteSheet.html#variation_count Online documentation}
     */
    variation_count?: uint32
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteSheet.html#repeat_count Online documentation}
     */
    repeat_count?: uint32
    /**
     * **Default:** `Value of `variation_count``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteSheet.html#line_length Online documentation}
     */
    line_length?: uint32
    filenames?: readonly FileName[]
    /**
     * Mandatory if `filenames` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteSheet.html#lines_per_file Online documentation}
     */
    lines_per_file?: uint32
    /**
     * Number of slices this is sliced into when using the "optimized atlas packing" option. If you are a modder, you can just ignore this property. Example: If this is 4, the sprite will be sliced into a 4x4 grid.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteSheet.html#dice Online documentation}
     */
    dice?: SpriteSizeType
    /**
     * Same as `dice` above, but this specifies only how many slices there are on the x axis.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteSheet.html#dice_x Online documentation}
     */
    dice_x?: SpriteSizeType
    /**
     * Same as `dice` above, but this specifies only how many slices there are on the y axis.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteSheet.html#dice_y Online documentation}
     */
    dice_y?: SpriteSizeType
  }
  export type SpriteSizeType = int16
  export interface SpriteSource {
    /**
     * The path to the sprite file to use.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteSource.html#filename Online documentation}
     */
    filename: FileName
    /**
     * The width and height of the sprite. If this is a tuple, the first member of the tuple is the width and the second is the height. Otherwise the size is both width and height. Width and height may only be in the range of 0-4096.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteSource.html#size Online documentation}
     */
    size?: SpriteSizeType | readonly [SpriteSizeType, SpriteSizeType]
    /**
     * Mandatory if `size` is not defined.
     *
     * Width of the picture in pixels, from 0-4096.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteSource.html#width Online documentation}
     */
    width?: SpriteSizeType
    /**
     * Mandatory if `size` is not defined.
     *
     * Height of the picture in pixels, from 0-4096.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteSource.html#height Online documentation}
     */
    height?: SpriteSizeType
    /**
     * **Default:** `0`
     *
     * Horizontal position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteSource.html#x Online documentation}
     */
    x?: SpriteSizeType
    /**
     * **Default:** `0`
     *
     * Vertical position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteSource.html#y Online documentation}
     */
    y?: SpriteSizeType
    /**
     * Loaded only when `x` and `y` are both `0`. The first member of the tuple is `x` and the second is `y`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteSource.html#position Online documentation}
     */
    position?: readonly [SpriteSizeType, SpriteSizeType]
    /**
     * **Default:** `false`
     *
     * Minimal mode is entered when mod loading fails. You are in it when you see the gray box after (part of) the loading screen that tells you a mod error. Modders can ignore this property.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteSource.html#load_in_minimal_mode Online documentation}
     */
    load_in_minimal_mode?: bool
    /**
     * **Default:** `true`
     *
     * Whether alpha should be pre-multiplied.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteSource.html#premul_alpha Online documentation}
     */
    premul_alpha?: bool
    /**
     * **Default:** `false`
     *
     * If `true`, the sprite may be downsampled to half its size on load even when 'Sprite quality' graphics setting is set to 'High'. Whether downsampling happens depends on detected hardware and other graphics settings.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteSource.html#allow_forced_downscale Online documentation}
     */
    allow_forced_downscale?: bool
  }
  /**
   * Provides hint to sprite atlas system, so it can pack sprites that are related to each other to the same sprite atlas.
   *
   * ## Union members
   * - `"any"`
   * - `"mining"`
   * - `"tile-artifical"`
   * - `"corpse-decay"`
   * - `"enemy"`
   * - `"player"`
   * - `"train"`
   * - `"vehicle"`
   * - `"explosion"`
   * - `"rail"`
   * - `"elevated-rail"`
   * - `"air"`
   * - `"remnant"`
   * - `"decorative"`
   * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteUsageHint.html Online documentation}
   */
  export type SpriteUsageHint =
    | "any"
    | "mining"
    | "tile-artifical"
    | "corpse-decay"
    | "enemy"
    | "player"
    | "train"
    | "vehicle"
    | "explosion"
    | "rail"
    | "elevated-rail"
    | "air"
    | "remnant"
    | "decorative"
  /**
   * Provides hint to sprite atlas system, so it can try to put sprites that are intended to be used at the same locations to the same sprite atlas.
   *
   * ## Union members
   * - `"any"`
   * - `"nauvis"`
   * - `"vulcanus"`
   * - `"gleba"`
   * - `"fulgora"`
   * - `"aquilo"`
   * - `"space"`
   * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteUsageSurfaceHint.html Online documentation}
   */
  export type SpriteUsageSurfaceHint = "any" | "nauvis" | "vulcanus" | "gleba" | "fulgora" | "aquilo" | "space"
  /**
   * Struct type for {@link SpriteVariations}
   * @see SpriteVariations
   * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteVariations.html Online documentation}
   */
  export interface SpriteVariationsStruct {
    sheet: SpriteSheet
  }
  /**
   * @example
   * -- array of sprites
   * pictures =
   * {
   *   {size = 64, filename = "__base__/graphics/icons/coal.png", scale = 0.5, mipmap_count = 4},
   *   {size = 64, filename = "__base__/graphics/icons/coal-1.png", scale = 0.5, mipmap_count = 4},
   *   {size = 64, filename = "__base__/graphics/icons/coal-2.png", scale = 0.5, mipmap_count = 4},
   *   {size = 64, filename = "__base__/graphics/icons/coal-3.png", scale = 0.5, mipmap_count = 4}
   * }
   * @example
   * -- sprite sheet using "sheet"
   * connection_patches_connected =
   * {
   *   sheet =
   *   {
   *     filename = "__base__/graphics/entity/nuclear-reactor/reactor-connect-patches.png",
   *     width = 64,
   *     height = 64,
   *     variation_count = 12,
   *     scale = 0.5
   *   }
   * }
   * @see {@link https://lua-api.factorio.com/2.0.16/types/SpriteVariations.html Online documentation}
   */
  export type SpriteVariations = SpriteVariationsStruct | SpriteSheet | readonly Sprite[]
  export interface StackTransferTipTrigger extends CountBasedTipTrigger {
    readonly type: "stack-transfer"
    /**
     * **Default:** `any transfer`
     *
     * ## Union members
     * - `"stack"`
     * - `"inventory"`
     * - `"whole-inventory"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StackTransferTipTrigger.html#transfer Online documentation}
     */
    transfer?: "stack" | "inventory" | "whole-inventory"
  }
  export interface StateSteeringSettings {
    /**
     * Not including the radius of the unit.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StateSteeringSettings.html#radius Online documentation}
     */
    radius: double
    separation_factor: double
    separation_force: double
    /**
     * Used only for special "to look good" purposes (like in trailer).
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StateSteeringSettings.html#force_unit_fuzzy_goto_behavior Online documentation}
     */
    force_unit_fuzzy_goto_behavior: bool
  }
  export interface StatelessVisualisation {
    /**
     * One of `nested_visualisations`, `animation` and `light` needs to be defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StatelessVisualisation.html#animation Online documentation}
     */
    animation?: AnimationVariations
    /**
     * Shadow variation count must be equal to animation variation count.
     *
     * Only loaded if `animation` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StatelessVisualisation.html#shadow Online documentation}
     */
    shadow?: AnimationVariations
    /**
     * One of `nested_visualisations`, `animation` and `light` needs to be defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StatelessVisualisation.html#light Online documentation}
     */
    light?: LightDefinition
    count?: uint16
    /**
     * **Default:** `1`
     *
     * Only loaded if `count` is not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StatelessVisualisation.html#min_count Online documentation}
     */
    min_count?: uint16
    /**
     * **Default:** `Value of `min_count``
     *
     * Only loaded if `count` is not defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StatelessVisualisation.html#max_count Online documentation}
     */
    max_count?: uint16
    period?: uint16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StatelessVisualisation.html#particle_tick_offset Online documentation}
     */
    particle_tick_offset?: float
    /**
     * **Default:** `1`
     *
     * Silently clamped to be between 0 and 1.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StatelessVisualisation.html#probability Online documentation}
     */
    probability?: float
    offset_x?: RangedValue
    offset_y?: RangedValue
    offset_z?: RangedValue
    speed_x?: RangedValue
    speed_y?: RangedValue
    speed_z?: RangedValue
    acceleration_x?: float
    acceleration_y?: float
    acceleration_z?: float
    /**
     * Silently clamped to be between 0 and 1.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StatelessVisualisation.html#movement_slowdown_factor_x Online documentation}
     */
    movement_slowdown_factor_x?: float
    /**
     * Silently clamped to be between 0 and 1.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StatelessVisualisation.html#movement_slowdown_factor_y Online documentation}
     */
    movement_slowdown_factor_y?: float
    /**
     * Silently clamped to be between 0 and 1.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StatelessVisualisation.html#movement_slowdown_factor_z Online documentation}
     */
    movement_slowdown_factor_z?: float
    scale?: RangedValue
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StatelessVisualisation.html#begin_scale Online documentation}
     */
    begin_scale?: float
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StatelessVisualisation.html#end_scale Online documentation}
     */
    end_scale?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StatelessVisualisation.html#fade_in_progress_duration Online documentation}
     */
    fade_in_progress_duration?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StatelessVisualisation.html#fade_out_progress_duration Online documentation}
     */
    fade_out_progress_duration?: float
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StatelessVisualisation.html#spread_progress_duration Online documentation}
     */
    spread_progress_duration?: float
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StatelessVisualisation.html#adjust_animation_speed_by_base_scale Online documentation}
     */
    adjust_animation_speed_by_base_scale?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StatelessVisualisation.html#affected_by_wind Online documentation}
     */
    affected_by_wind?: bool
    /**
     * **Default:** `"object"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StatelessVisualisation.html#render_layer Online documentation}
     */
    render_layer?: RenderLayer
    /**
     * Array may be at most 32 elements.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StatelessVisualisation.html#positions Online documentation}
     */
    positions?: readonly Vector[]
    /**
     * One of `nested_visualisations`, `animation` and `light` needs to be defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StatelessVisualisation.html#nested_visualisations Online documentation}
     */
    nested_visualisations?: StatelessVisualisation | readonly StatelessVisualisation[]
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StatelessVisualisation.html#can_lay_on_the_ground Online documentation}
     */
    can_lay_on_the_ground?: bool
  }
  export type StatelessVisualisations = StatelessVisualisation | readonly StatelessVisualisation[]
  export interface StatusColors {
    /**
     * **Default:** ``{1, 1, 1, 1}``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StatusColors.html#idle Online documentation}
     */
    idle?: Color
    /**
     * **Default:** `idle`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StatusColors.html#no_minable_resources Online documentation}
     */
    no_minable_resources?: Color
    /**
     * **Default:** `idle`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StatusColors.html#full_output Online documentation}
     */
    full_output?: Color
    /**
     * **Default:** `idle`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StatusColors.html#insufficient_input Online documentation}
     */
    insufficient_input?: Color
    /**
     * **Default:** `idle`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StatusColors.html#disabled Online documentation}
     */
    disabled?: Color
    /**
     * **Default:** `No color`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StatusColors.html#no_power Online documentation}
     */
    no_power?: Color
    /**
     * **Default:** ``{1, 1, 1, 1}``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StatusColors.html#working Online documentation}
     */
    working?: Color
    /**
     * **Default:** `working`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StatusColors.html#low_power Online documentation}
     */
    low_power?: Color
  }
  /**
   * @see MapSettings.steering
   * @see {@link https://lua-api.factorio.com/2.0.16/prototypes/MapSettings.html#steering Online documentation}
   */
  export interface SteeringSettings {
    default: StateSteeringSettings
    moving: StateSteeringSettings
  }
  /**
   * @see StorageTankPrototype.pictures
   * @see {@link https://lua-api.factorio.com/2.0.16/prototypes/StorageTankPrototype.html#pictures Online documentation}
   */
  export interface StorageTankPictures {
    picture?: Sprite4Way
    frozen_patch?: Sprite4Way
    window_background?: Sprite
    fluid_background?: Sprite
    flow_sprite?: Sprite
    gas_flow?: Animation
  }
  export interface StreamAttackParameters extends BaseAttackParameters {
    readonly type: "stream"
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StreamAttackParameters.html#fluid_consumption Online documentation}
     */
    fluid_consumption?: FluidAmount
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StreamAttackParameters.html#gun_barrel_length Online documentation}
     */
    gun_barrel_length?: float
    projectile_creation_parameters?: CircularProjectileCreationSpecification
    /**
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StreamAttackParameters.html#gun_center_shift Online documentation}
     */
    gun_center_shift?: Vector | GunShift4Way
    /**
     * Controls which fluids can fuel this stream attack and their potential damage bonuses.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StreamAttackParameters.html#fluids Online documentation}
     */
    fluids?: readonly StreamFluidProperties[]
  }
  /**
   * @see StreamAttackParameters.fluids
   * @see {@link https://lua-api.factorio.com/2.0.16/types/StreamAttackParameters.html#fluids Online documentation}
   */
  export interface StreamFluidProperties {
    readonly type: FluidID
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StreamFluidProperties.html#damage_modifier Online documentation}
     */
    damage_modifier?: double
  }
  export interface StreamTriggerDelivery extends TriggerDeliveryItem {
    readonly type: "stream"
    /**
     * Name of a {@link FluidStreamPrototype}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/StreamTriggerDelivery.html#stream Online documentation}
     */
    stream: EntityID
    source_offset?: Vector
  }
  /**
   * Sets whether a GUI element can be stretched or squashed.
   *
   * ## Union members
   * - `"on"`: Stretching/squashing is enabled.
   * - `"off"`: Stretching/squashing is disabled even when the container contains stretchable/squashable elements.
   * - `"auto"`: Stretching/squashing depends on the contents of the layout, for example a flow with stretchable element gets stretchable.
   * - `"stretch_and_expand"`: Used only for stretchable (not squashable) properties on scroll panes, labels, check boxes and radio buttons. The element this is set on expands its size to maximum and is stretched at the same time. This means the element takes up its maximum size even before its contents require it.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/StretchRule.html Online documentation}
   */
  export type StretchRule = "on" | "off" | "auto" | "stretch_and_expand"
  /**
   * Used as an alternative way to specify animations.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/Stripe.html Online documentation}
   */
  export interface Stripe {
    width_in_frames: uint32
    /**
     * Mandatory when Stripe is used in {@link Animation}.
     *
     * Optional when it is used in {@link RotatedAnimation}, where it defaults to {@link RotatedAnimation#direction_count RotatedAnimation::direction_count}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Stripe.html#height_in_frames Online documentation}
     */
    height_in_frames: uint32
    filename: FileName
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Stripe.html#x Online documentation}
     */
    x?: uint32
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/Stripe.html#y Online documentation}
     */
    y?: uint32
  }
  /**
   * Loaded as one of the {@link BaseStyleSpecification} extensions, based on the value of the `type` key.
   *
   * ## Union members
   * - {@link ActivityBarStyleSpecification}: Loaded when the `type` is `"activity_bar_style"`.
   * - {@link ButtonStyleSpecification}: Loaded when the `type` is `"button_style"`.
   * - {@link CameraStyleSpecification}: Loaded when the `type` is `"camera_style"`.
   * - {@link CheckBoxStyleSpecification}: Loaded when the `type` is `"checkbox_style"`.
   * - {@link DropDownStyleSpecification}: Loaded when the `type` is `"dropdown_style"`.
   * - {@link FlowStyleSpecification}: Loaded when the `type` is `"flow_style"`.
   * - {@link FrameStyleSpecification}: Loaded when the `type` is `"frame_style"`.
   * - {@link GraphStyleSpecification}: Loaded when the `type` is `"graph_style"`.
   * - {@link HorizontalFlowStyleSpecification}: Loaded when the `type` is `"horizontal_flow_style"`.
   * - {@link LineStyleSpecification}: Loaded when the `type` is `"line_style"`.
   * - {@link ImageStyleSpecification}: Loaded when the `type` is `"image_style"`.
   * - {@link LabelStyleSpecification}: Loaded when the `type` is `"label_style"`.
   * - {@link ListBoxStyleSpecification}: Loaded when the `type` is `"list_box_style"`.
   * - {@link ProgressBarStyleSpecification}: Loaded when the `type` is `"progressbar_style"`.
   * - {@link RadioButtonStyleSpecification}: Loaded when the `type` is `"radiobutton_style"`.
   * - {@link HorizontalScrollBarStyleSpecification}: Loaded when the `type` is `"horizontal_scrollbar_style"`.
   * - {@link VerticalScrollBarStyleSpecification}: Loaded when the `type` is `"vertical_scrollbar_style"`.
   * - {@link ScrollPaneStyleSpecification}: Loaded when the `type` is `"scroll_pane_style"`.
   * - {@link SliderStyleSpecification}: Loaded when the `type` is `"slider_style"`.
   * - {@link SwitchStyleSpecification}: Loaded when the `type` is `"switch_style"`.
   * - {@link TableStyleSpecification}: Loaded when the `type` is `"table_style"`.
   * - {@link TabStyleSpecification}: Loaded when the `type` is `"tab_style"`.
   * - {@link TextBoxStyleSpecification}: Loaded when the `type` is `"textbox_style"`.
   * - {@link VerticalFlowStyleSpecification}: Loaded when the `type` is `"vertical_flow_style"`.
   * - {@link TabbedPaneStyleSpecification}: Loaded when the `type` is `"tabbed_pane_style"`.
   * - {@link EmptyWidgetStyleSpecification}: Loaded when the `type` is `"empty_widget_style"`.
   * - {@link MinimapStyleSpecification}: Loaded when the `type` is `"minimap_style"`.
   * - {@link TechnologySlotStyleSpecification}: Loaded when the `type` is `"technology_slot_style"`.
   * - {@link GlowStyleSpecification}: Loaded when the `type` is `"glow_style"`.
   * - {@link SpeechBubbleStyleSpecification}: Loaded when the `type` is `"speech_bubble_style"`.
   * - {@link DoubleSliderStyleSpecification}: Loaded when the `type` is `"double_slider_style"`.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/StyleSpecification.html Online documentation}
   */
  export type StyleSpecification =
    | ActivityBarStyleSpecification
    | ButtonStyleSpecification
    | CameraStyleSpecification
    | CheckBoxStyleSpecification
    | DropDownStyleSpecification
    | FlowStyleSpecification
    | FrameStyleSpecification
    | GraphStyleSpecification
    | HorizontalFlowStyleSpecification
    | LineStyleSpecification
    | ImageStyleSpecification
    | LabelStyleSpecification
    | ListBoxStyleSpecification
    | ProgressBarStyleSpecification
    | RadioButtonStyleSpecification
    | HorizontalScrollBarStyleSpecification
    | VerticalScrollBarStyleSpecification
    | ScrollPaneStyleSpecification
    | SliderStyleSpecification
    | SwitchStyleSpecification
    | TableStyleSpecification
    | TabStyleSpecification
    | TextBoxStyleSpecification
    | VerticalFlowStyleSpecification
    | TabbedPaneStyleSpecification
    | EmptyWidgetStyleSpecification
    | MinimapStyleSpecification
    | TechnologySlotStyleSpecification
    | GlowStyleSpecification
    | SpeechBubbleStyleSpecification
    | DoubleSliderStyleSpecification
  export interface StyleWithClickableGraphicalSetSpecification extends BaseStyleSpecification {
    default_graphical_set?: ElementImageSet
    hovered_graphical_set?: ElementImageSet
    clicked_graphical_set?: ElementImageSet
    disabled_graphical_set?: ElementImageSet
    selected_graphical_set?: ElementImageSet
    selected_hovered_graphical_set?: ElementImageSet
    game_controller_selected_hovered_graphical_set?: ElementImageSet
    selected_clicked_graphical_set?: ElementImageSet
    left_click_sound?: Sound
  }
  /**
   * Requires Space Age to use.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/SurfaceCondition.html Online documentation}
   */
  export interface SurfaceCondition {
    property: SurfacePropertyID
    /**
     * **Default:** `Lowest double`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SurfaceCondition.html#min Online documentation}
     */
    min?: double
    /**
     * **Default:** `Max double`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SurfaceCondition.html#max Online documentation}
     */
    max?: double
  }
  /**
   * The name of a {@link SurfacePrototype}.
   * @example
   * "space-platform"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/SurfaceID.html Online documentation}
   */
  export type SurfaceID = string
  /**
   * The name of a {@link SurfacePropertyPrototype}.
   * @example
   * "solar-power"
   * @example
   * "magnetic-field"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/SurfacePropertyID.html Online documentation}
   */
  export type SurfacePropertyID = string
  export interface SurfaceRenderParameters {
    day_night_cycle_color_lookup?: DaytimeColorLookupTable
    /**
     * **Default:** `0.5`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SurfaceRenderParameters.html#shadow_opacity Online documentation}
     */
    shadow_opacity?: float
    /**
     * **Default:** `false`
     *
     * When set to `true` and `clouds` property is not set, the legacy sprite clouds will be rendered on the surface.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SurfaceRenderParameters.html#draw_sprite_clouds Online documentation}
     */
    draw_sprite_clouds?: bool
    clouds?: CloudsEffectProperties
    /**
     * ![Space Age](https://wiki.factorio.com/images/thumb/Space_age_icon.png/16px-Space_age_icon.png) ***Space Age*** required to use.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SurfaceRenderParameters.html#fog Online documentation}
     */
    fog?: FogEffectProperties
    /**
     * ![Space Age](https://wiki.factorio.com/images/thumb/Space_age_icon.png/16px-Space_age_icon.png) ***Space Age*** required to use.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SurfaceRenderParameters.html#terrain_tint_effect Online documentation}
     */
    terrain_tint_effect?: GlobalTintEffectProperties
    /**
     * ![Space Age](https://wiki.factorio.com/images/thumb/Space_age_icon.png/16px-Space_age_icon.png) ***Space Age*** required to use.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SurfaceRenderParameters.html#space_dust_background Online documentation}
     */
    space_dust_background?: SpaceDustEffectProperties
    /**
     * ![Space Age](https://wiki.factorio.com/images/thumb/Space_age_icon.png/16px-Space_age_icon.png) ***Space Age*** required to use.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/SurfaceRenderParameters.html#space_dust_foreground Online documentation}
     */
    space_dust_foreground?: SpaceDustEffectProperties
  }
  export interface SwitchStyleSpecification extends BaseStyleSpecification {
    readonly type: "switch_style"
    left_button_position?: uint32
    middle_button_position?: uint32
    right_button_position?: uint32
    default_background?: Sprite
    hover_background?: Sprite
    disabled_background?: Sprite
    button?: ButtonStyleSpecification
    active_label?: LabelStyleSpecification
    inactive_label?: LabelStyleSpecification
  }
  export interface TabStyleSpecification extends StyleWithClickableGraphicalSetSpecification {
    readonly type: "tab_style"
    /**
     * Name of a {@link FontPrototype}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TabStyleSpecification.html#font Online documentation}
     */
    font?: string
    /**
     * Name of a {@link FontPrototype}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TabStyleSpecification.html#badge_font Online documentation}
     */
    badge_font?: string
    badge_horizontal_spacing?: int16
    default_font_color?: Color
    selected_font_color?: Color
    disabled_font_color?: Color
    default_badge_font_color?: Color
    selected_badge_font_color?: Color
    disabled_badge_font_color?: Color
    override_graphics_on_edges?: bool
    increase_height_when_selected?: bool
    left_edge_selected_graphical_set?: ElementImageSet
    right_edge_selected_graphical_set?: ElementImageSet
    default_badge_graphical_set?: ElementImageSet
    selected_badge_graphical_set?: ElementImageSet
    hover_badge_graphical_set?: ElementImageSet
    press_badge_graphical_set?: ElementImageSet
    disabled_badge_graphical_set?: ElementImageSet
    draw_grayscale_picture?: bool
  }
  export interface TabbedPaneStyleSpecification extends BaseStyleSpecification {
    readonly type: "tabbed_pane_style"
    vertical_spacing?: uint32
    tab_content_frame?: FrameStyleSpecification
    tab_container?: TableStyleSpecification
  }
  export interface TableStyleSpecification extends BaseStyleSpecification {
    readonly type: "table_style"
    horizontal_spacing?: int32
    vertical_spacing?: int32
    /**
     * Sets `top_cell_padding`, `right_cell_padding`, `bottom_cell_padding` and `left_cell_padding` to the same value.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TableStyleSpecification.html#cell_padding Online documentation}
     */
    cell_padding?: int16
    top_cell_padding?: int16
    right_cell_padding?: int16
    bottom_cell_padding?: int16
    left_cell_padding?: int16
    apply_row_graphical_set_per_column?: bool
    wide_as_column_count?: bool
    column_graphical_set?: ElementImageSet
    default_row_graphical_set?: ElementImageSet
    even_row_graphical_set?: ElementImageSet
    odd_row_graphical_set?: ElementImageSet
    hovered_graphical_set?: ElementImageSet
    clicked_graphical_set?: ElementImageSet
    selected_graphical_set?: ElementImageSet
    selected_hovered_graphical_set?: ElementImageSet
    selected_clicked_graphical_set?: ElementImageSet
    background_graphical_set?: ElementImageSet
    column_alignments?: readonly ColumnAlignment[]
    column_widths?: ColumnWidthItem | readonly ColumnWidth[]
    hovered_row_color?: Color
    selected_row_color?: Color
    vertical_line_color?: Color
    horizontal_line_color?: Color
    column_ordering_ascending_button_style?: ButtonStyleSpecification
    column_ordering_descending_button_style?: ButtonStyleSpecification
    inactive_column_ordering_ascending_button_style?: ButtonStyleSpecification
    inactive_column_ordering_descending_button_style?: ButtonStyleSpecification
    border?: BorderImageSet
  }
  /**
   * The name of a {@link TechnologyPrototype}.
   * @example
   * "automated-rail-transportation"
   * @example
   * "steel-axe"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/TechnologyID.html Online documentation}
   */
  export type TechnologyID = string
  export interface TechnologySlotStyleSpecification extends Omit<ButtonStyleSpecification, "type"> {
    readonly type: "technology_slot_style"
    highlighted_graphical_set?: ElementImageSet
    default_background_shadow?: ElementImageSet
    level_band?: ElementImageSet
    hovered_level_band?: ElementImageSet
    level_offset_x?: int32
    level_offset_y?: int32
    level_band_width?: uint32
    level_band_height?: uint32
    /**
     * Name of a {@link FontPrototype}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TechnologySlotStyleSpecification.html#level_font Online documentation}
     */
    level_font?: string
    /**
     * Name of a {@link FontPrototype}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TechnologySlotStyleSpecification.html#level_range_font Online documentation}
     */
    level_range_font?: string
    level_font_color?: Color
    hovered_level_font_color?: Color
    level_range_font_color?: Color
    hovered_level_range_font_color?: Color
    level_range_band?: ElementImageSet
    hovered_level_range_band?: ElementImageSet
    level_range_offset_x?: int32
    level_range_offset_y?: int32
    ingredients_height?: uint32
    default_ingredients_background?: ElementImageSet
    hovered_ingredients_background?: ElementImageSet
    clicked_ingredients_background?: ElementImageSet
    disabled_ingredients_background?: ElementImageSet
    highlighted_ingredients_background?: ElementImageSet
    ingredients_padding?: uint32
    ingredient_icon_size?: uint32
    ingredient_icon_overlap?: uint32
    clicked_overlay?: ElementImageSet
    progress_bar_background?: ElementImageSet
    progress_bar?: ElementImageSet
    progress_bar_shadow?: ElementImageSet
    progress_bar_height?: uint32
    progress_bar_color?: Color
  }
  /**
   * Loaded as one of the technology triggers, based on the value of the `type` key.
   *
   * ## Union members
   * - {@link MineEntityTechnologyTrigger}: Loaded when the `type` is `"mine-entity"`.
   * - {@link CraftItemTechnologyTrigger}: Loaded when the `type` is `"craft-item"`.
   * - {@link CraftFluidTechnologyTrigger}: Loaded when the `type` is `"craft-fluid"`.
   * - {@link SendItemToOrbitTechnologyTrigger}: Loaded when the `type` is `"send-item-to-orbit"`.
   * - {@link CaptureSpawnerTechnologyTrigger}: Loaded when the `type` is `"capture-spawner"`.
   * - {@link BuildEntityTechnologyTrigger}: Loaded when the `type` is `"build-entity"`.
   * - {@link CreateSpacePlatformTechnologyTrigger}: Loaded when the `type` is `"create-space-platform"`.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/TechnologyTrigger.html Online documentation}
   */
  export type TechnologyTrigger =
    | MineEntityTechnologyTrigger
    | CraftItemTechnologyTrigger
    | CraftFluidTechnologyTrigger
    | SendItemToOrbitTechnologyTrigger
    | CaptureSpawnerTechnologyTrigger
    | BuildEntityTechnologyTrigger
    | CreateSpacePlatformTechnologyTrigger
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
   * @see {@link https://lua-api.factorio.com/2.0.16/types/TechnologyUnit.html Online documentation}
   */
  export interface TechnologyUnit {
    /**
     * How many units are needed. Must be `> 0`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TechnologyUnit.html#count Online documentation}
     */
    count?: uint64
    /**
     * Formula that specifies how many units are needed per level of the technology.
     *
     * If the last characters of the prototype name are `-<number>`, the level is taken to be the number, e.g. `physical-projectile-damage-2` implies a number of `2`. This defaults to `1`. There does not need to be lower-level technologies for a technology to be detected as having a level, meaning a technology or sequence of upgrade technologies can begin at any number.
     *
     * For an infinite technology, the level begins at the given suffix (or `1` by default) and gains 1 level upon being researched, or if the `max_level` is reached, marked as completed. The initial level of a technology can not be greater than its `max_level`.
     *
     * `l` and `L` are provided as variables in the expression, they represent the current level of the technology.
     *
     * This formula can also be used at {@link import("factorio:runtime").LuaHelpers#evaluate_expression runtime}.
     * @example
     * count_formula = "2500*(L - 3)"
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TechnologyUnit.html#count_formula Online documentation}
     */
    count_formula?: MathExpression
    /**
     * How much time one unit takes to research. In a lab with a crafting speed of `1`, it corresponds to the number of seconds.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TechnologyUnit.html#time Online documentation}
     */
    time: double
    /**
     * List of ingredients needed for one unit of research. The items must all be {@link ToolPrototype ToolPrototypes}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TechnologyUnit.html#ingredients Online documentation}
     */
    ingredients: readonly ResearchIngredient[]
  }
  export interface TerritorySettings {
    /**
     * Names of the {@link SegmentedUnitPrototype}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TerritorySettings.html#units Online documentation}
     */
    units?: readonly EntityID[]
    /**
     * Mandatory if `units` is not empty.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TerritorySettings.html#territory_index_expression Online documentation}
     */
    territory_index_expression?: string
    /**
     * **Default:** `0`
     *
     * The result will be converted to integer, clamped and used as an index for `units` array. Negative values will result in empty spawn location.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TerritorySettings.html#territory_variation_expression Online documentation}
     */
    territory_variation_expression?: string
    /**
     * **Default:** `0`
     *
     * Minimum number of chunks a territory must have. Below this, it will get deleted.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TerritorySettings.html#minimum_territory_size Online documentation}
     */
    minimum_territory_size?: uint32
  }
  export interface TextBoxStyleSpecification extends BaseStyleSpecification {
    readonly type: "textbox_style"
    /**
     * Name of a {@link FontPrototype}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TextBoxStyleSpecification.html#font Online documentation}
     */
    font?: string
    font_color?: Color
    disabled_font_color?: Color
    selection_background_color?: Color
    default_background?: ElementImageSet
    active_background?: ElementImageSet
    game_controller_hovered_background?: ElementImageSet
    disabled_background?: ElementImageSet
    rich_text_setting?: RichTextSetting
    rich_text_highlight_error_color?: Color
    rich_text_highlight_warning_color?: Color
    rich_text_highlight_ok_color?: Color
    selected_rich_text_highlight_error_color?: Color
    selected_rich_text_highlight_warning_color?: Color
    selected_rich_text_highlight_ok_color?: Color
  }
  export interface ThrowCapsuleAction {
    readonly type: "throw"
    attack_parameters: AttackParameters
    /**
     * **Default:** `true`
     *
     * Whether using the capsule consumes an item from the stack.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ThrowCapsuleAction.html#uses_stack Online documentation}
     */
    uses_stack?: bool
  }
  export interface ThrusterGraphicsSet extends WorkingVisualisations {
    flame?: Sprite
    flame_effect?: EffectTexture
    flame_position?: Vector
    /**
     * **Default:** `31.25`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ThrusterGraphicsSet.html#flame_effect_height Online documentation}
     */
    flame_effect_height?: float
    /**
     * **Default:** `6`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ThrusterGraphicsSet.html#flame_effect_width Online documentation}
     */
    flame_effect_width?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ThrusterGraphicsSet.html#flame_half_height Online documentation}
     */
    flame_half_height?: float
    /**
     * **Default:** `1.5625`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/ThrusterGraphicsSet.html#flame_effect_offset Online documentation}
     */
    flame_effect_offset?: float
  }
  /**
   * Struct type for {@link ThrusterPerformancePoint}
   * @see ThrusterPerformancePoint
   * @see {@link https://lua-api.factorio.com/2.0.16/types/ThrusterPerformancePoint.html Online documentation}
   */
  export interface ThrusterPerformancePointStruct {
    fluid_volume: double
    fluid_usage: FluidAmount
    effectivity: double
  }
  export type ThrusterPerformancePoint = ThrusterPerformancePointStruct | readonly [double, double, double]
  /**
   * @see FireFlamePrototype.burnt_patch_alpha_variations
   * @see {@link https://lua-api.factorio.com/2.0.16/prototypes/FireFlamePrototype.html#burnt_patch_alpha_variations Online documentation}
   */
  export interface TileAndAlpha {
    tile: TileID
    alpha: float
  }
  /**
   * Used for particles created with {@link CreateParticleTriggerEffectItem#apply_tile_tint apply_tile_tint} defined.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/TileBasedParticleTints.html Online documentation}
   */
  export interface TileBasedParticleTints {
    /**
     * **Default:** `{1,1,1,1} (white)`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileBasedParticleTints.html#primary Online documentation}
     */
    primary?: Color
    /**
     * **Default:** `Value of `primary``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileBasedParticleTints.html#secondary Online documentation}
     */
    secondary?: Color
  }
  /**
   * @see TilePrototype.build_sound
   * @see {@link https://lua-api.factorio.com/2.0.16/prototypes/TilePrototype.html#build_sound Online documentation}
   */
  export interface TileBuildSound {
    small?: Sound
    medium?: Sound
    large?: Sound
    animated?: Sound
  }
  export interface TileBuildabilityRule {
    area: SimpleBoundingBox
    /**
     * **Default:** `No masks`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileBuildabilityRule.html#required_tiles Online documentation}
     */
    required_tiles?: CollisionMaskConnector
    /**
     * **Default:** `No masks`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileBuildabilityRule.html#colliding_tiles Online documentation}
     */
    colliding_tiles?: CollisionMaskConnector
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileBuildabilityRule.html#remove_on_collision Online documentation}
     */
    remove_on_collision?: bool
  }
  /**
   * The name of an {@link TileEffectDefinition}.
   * @example
   * "water"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/TileEffectDefinitionID.html Online documentation}
   */
  export type TileEffectDefinitionID = string
  /**
   * The name of a {@link TilePrototype}.
   * @example
   * "grass-2"
   * @example
   * "landfill"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/TileID.html Online documentation}
   */
  export type TileID = string
  /**
   * Name of an allowed tile, or a list of two tile names for entities allowed on transitions.
   * @see AutoplaceSpecification.tile_restriction
   * @see {@link https://lua-api.factorio.com/2.0.16/types/AutoplaceSpecification.html#tile_restriction Online documentation}
   */
  export type TileIDRestriction = TileID | readonly [TileID, TileID]
  export interface TileLightPictures extends TileSpriteLayout {
    /**
     * Only powers of 2 from 1 to 128 can be used. Square size of the tile arrangement this sprite is used for. Used to calculate the `width` and `height` of the sprite which cannot be set directly. (width or height) = size * 32 / scale.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileLightPictures.html#size Online documentation}
     */
    size: uint32
  }
  export interface TileMainPictures extends TileSpriteLayout {
    /**
     * Only powers of 2 from 1 to 128 can be used. Square size of the tile arrangement this sprite is used for. Used to calculate the `width` and `height` of the sprite which cannot be set directly. (width or height) = size * 32 / scale.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileMainPictures.html#size Online documentation}
     */
    size: uint32
    /**
     * **Default:** `1`
     *
     * Probability of 1x1 (size = 1) version of tile must be 1.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileMainPictures.html#probability Online documentation}
     */
    probability?: double
    weights?: readonly double[]
  }
  /**
   * Struct type for {@link TilePosition}
   * @see TilePosition
   * @see {@link https://lua-api.factorio.com/2.0.16/types/TilePosition.html Online documentation}
   */
  export interface TilePositionStruct {
    x: int32
    y: int32
  }
  /**
   * Coordinates of a tile on a map where each integer `x`/`y` represents a different tile. This uses the same format as {@link MapPosition}, except it rounds any non-integer `x`/`y` down to whole numbers. It can be specified either with or without explicit keys.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/TilePosition.html Online documentation}
   */
  export type TilePosition = TilePositionStruct | readonly [int32, int32]
  /**
   * ## Union members
   * - `"zero"`: 64 layers. Used for tile sprites above background (e.g. transitions to out-of-map).
   * - `"water"`: 16 layers. Used for water related tile sprites. Water shaders are rendered above these layers.
   * - `"water-overlay"`: 64 layers. Used for lowland tiles and tile transitions to water that are desired to be drawn under the ground sprites. Puddles are rendered above these layers.
   * - `"ground-natural"`: 256 layers. Used for natural tile sprites above water. Global tile tint shaders are rendered above these layers.
   * - `"ground-artificial"`: 128 layers. Used for tile sprites which are intended to be above natural ground. Like tiles that player can build.
   * - `"top"`: 1 layer. The top most tile render layer.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/TileRenderLayer.html Online documentation}
   */
  export type TileRenderLayer = "zero" | "water" | "water-overlay" | "ground-natural" | "ground-artificial" | "top"
  export interface TileSpriteLayout {
    picture: FileName
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileSpriteLayout.html#scale Online documentation}
     */
    scale?: float
    /**
     * **Default:** `0`
     *
     * Horizontal position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileSpriteLayout.html#x Online documentation}
     */
    x?: SpriteSizeType
    /**
     * **Default:** `0`
     *
     * Vertical position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileSpriteLayout.html#y Online documentation}
     */
    y?: SpriteSizeType
    /**
     * **Default:** `0`
     *
     * Once the specified number of pictures is loaded, other pictures are loaded on other line. This is to allow having longer animations in matrix, to input files with too high width. The game engine limits the width of any input files to 8192px, so it is compatible with most graphics cards. 0 means that all the pictures are in one horizontal line.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileSpriteLayout.html#line_length Online documentation}
     */
    line_length?: uint8
    /**
     * **Default:** `0`
     *
     * Frame count.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileSpriteLayout.html#count Online documentation}
     */
    count?: uint8
  }
  export interface TileSpriteLayoutVariant {
    spritesheet?: FileName
    scale?: float
    /**
     * Horizontal position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileSpriteLayoutVariant.html#x Online documentation}
     */
    x?: SpriteSizeType
    /**
     * Vertical position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileSpriteLayoutVariant.html#y Online documentation}
     */
    y?: SpriteSizeType
    /**
     * **Default:** `1`
     *
     * Height of the transition sprite in tiles. May be 1 or 2. It is forced to 1 for mask layers and for o_transition. A tile is considered 32px with scale 1 (so 64px with scale 0.5). Shift of the sprite will be adjusted such that the top 1x1 tile is centered on a tile being drawn (so it will be
     *
     * ```
     * {0, 0.5*(tile_height - 1)}
     * ```
     *
     * ) It can be anything between 1 to 8 for `background` layer if `draw_background_layer_under_tiles` is set to true.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileSpriteLayoutVariant.html#tile_height Online documentation}
     */
    tile_height?: uint8
    /**
     * **Default:** `0`
     *
     * Once the specified number of pictures is loaded, other pictures are loaded on other line. This is to allow having longer animations in matrix, to input files with too high width. The game engine limits the width of any input files to 8192px, so it is compatible with most graphics cards. 0 means that all the pictures are in one horizontal line.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileSpriteLayoutVariant.html#line_length Online documentation}
     */
    line_length?: uint8
    /**
     * Frame count.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileSpriteLayoutVariant.html#count Online documentation}
     */
    count?: uint8
  }
  /**
   * The properties from the parent TileSpriteLayoutVariant provide defaults for the TileTransitionVariantLayouts.
   *
   * The `{inner_corner | outer_corner | side | double_side | u_transition | o_transition}_*` properties provide defaults for the corresponding properties in the TileTransitionVariantLayouts. They are used when the TileTransitionVariantLayouts have the same layout. See the example below.
   * @example
   * -- all the layers use the same layout, at different offsets inside the spritesheet
   * layout =
   * {
   *   scale = 0.5,
   *   inner_corner_count = 8,
   *   outer_corner_count = 8,
   *   o_transition_count = 1,
   *   outer_corner_x = 576,
   *   u_transition_x = 1728,
   *
   *   overlay = { y_offset = 0 },  -- 0 is default, but by defining overlay property, we enable the layer
   *   mask = { y_offset = 512 },
   *   background = { y_offset = 1024 }
   * }
   * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionSpritesheetLayout.html Online documentation}
   */
  export interface TileTransitionSpritesheetLayout extends TileSpriteLayoutVariant {
    /**
     * Only loaded if {@link TileTransitions#overlay_layout TileTransitions::overlay_layout} is not defined in the TileTransitions that load this.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionSpritesheetLayout.html#overlay Online documentation}
     */
    overlay?: TileTransitionVariantLayout
    /**
     * Only loaded if {@link TileTransitions#mask_layout TileTransitions::mask_layout} is not defined in the TileTransitions that load this.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionSpritesheetLayout.html#mask Online documentation}
     */
    mask?: TileTransitionVariantLayout
    /**
     * Only loaded if {@link TileTransitions#background_layout TileTransitions::background_layout} is not defined in the TileTransitions that load this.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionSpritesheetLayout.html#background Online documentation}
     */
    background?: TileTransitionVariantLayout
    /**
     * Only loaded if {@link TileTransitions#background_mask_layout TileTransitions::background_mask_layout} is not defined in the TileTransitions that load this.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionSpritesheetLayout.html#background_mask Online documentation}
     */
    background_mask?: TileTransitionVariantLayout
    /**
     * Only loaded if {@link TileTransitions#effect_map_layout TileTransitions::effect_map_layout} is not defined in the TileTransitions that load this.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionSpritesheetLayout.html#effect_map Online documentation}
     */
    effect_map?: TileTransitionVariantLayout
    /**
     * Only loaded if {@link TileTransitions#lightmap_layout TileTransitions::lightmap_layout} is not defined in the TileTransitions that load this.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionSpritesheetLayout.html#lightmap Online documentation}
     */
    lightmap?: TileTransitionVariantLayout
    /**
     * Only loaded if {@link TileTransitions#auxiliary_effect_mask_layout TileTransitions::auxiliary_effect_mask_layout} is not defined in the TileTransitions that load this.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionSpritesheetLayout.html#auxiliary_effect_mask Online documentation}
     */
    auxiliary_effect_mask?: TileTransitionVariantLayout
    inner_corner_scale?: float
    /**
     * Horizontal position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionSpritesheetLayout.html#inner_corner_x Online documentation}
     */
    inner_corner_x?: SpriteSizeType
    /**
     * Vertical position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionSpritesheetLayout.html#inner_corner_y Online documentation}
     */
    inner_corner_y?: SpriteSizeType
    inner_corner_tile_height?: uint8
    inner_corner_line_length?: uint8
    inner_corner_count?: uint8
    outer_corner_scale?: float
    /**
     * Horizontal position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionSpritesheetLayout.html#outer_corner_x Online documentation}
     */
    outer_corner_x?: SpriteSizeType
    /**
     * Vertical position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionSpritesheetLayout.html#outer_corner_y Online documentation}
     */
    outer_corner_y?: SpriteSizeType
    outer_corner_tile_height?: uint8
    outer_corner_line_length?: uint8
    outer_corner_count?: uint8
    side_scale?: float
    /**
     * Horizontal position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionSpritesheetLayout.html#side_x Online documentation}
     */
    side_x?: SpriteSizeType
    /**
     * Vertical position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionSpritesheetLayout.html#side_y Online documentation}
     */
    side_y?: SpriteSizeType
    side_tile_height?: uint8
    side_line_length?: uint8
    side_count?: uint8
    double_side_scale?: float
    /**
     * Horizontal position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionSpritesheetLayout.html#double_side_x Online documentation}
     */
    double_side_x?: SpriteSizeType
    /**
     * Vertical position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionSpritesheetLayout.html#double_side_y Online documentation}
     */
    double_side_y?: SpriteSizeType
    double_side_tile_height?: uint8
    double_side_line_length?: uint8
    double_side_count?: uint8
    u_transition_scale?: float
    /**
     * Horizontal position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionSpritesheetLayout.html#u_transition_x Online documentation}
     */
    u_transition_x?: SpriteSizeType
    /**
     * Vertical position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionSpritesheetLayout.html#u_transition_y Online documentation}
     */
    u_transition_y?: SpriteSizeType
    u_transition_tile_height?: uint8
    u_transition_line_length?: uint8
    u_transition_count?: uint8
    o_transition_scale?: float
    /**
     * Horizontal position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionSpritesheetLayout.html#o_transition_x Online documentation}
     */
    o_transition_x?: SpriteSizeType
    /**
     * Vertical position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionSpritesheetLayout.html#o_transition_y Online documentation}
     */
    o_transition_y?: SpriteSizeType
    o_transition_tile_height?: uint8
    o_transition_line_length?: uint8
    o_transition_count?: uint8
  }
  /**
   * The properties from the parent TileSpriteLayoutVariant provide defaults for the properties defined here.
   *
   * The `{inner_corner | outer_corner | side | double_side | u_transition | o_transition}_*` properties provide defaults for the properties inside the specific variant. They are used to specify select values for the variant without creating the table for the variant.
   *
   * These various ways to define the variants are also shown in the examples below.
   * @example
   * -- longest version, using TileSpriteLayoutVariant tables for each variant
   * {
   *   inner_corner =
   *   {
   *     scale = 0.5,
   *     count = 8,
   *   },
   *   outer_corner =
   *   {
   *   	scale = 0.5,
   *   	count = 8,
   *   	x = 576
   *   },
   *   u_transition  =
   *   {
   *   	scale = 0.5,
   *     count = 1,
   *     x = 1728
   *   },
   *   [...]
   * }
   * @example
   * -- The above version is quite verbose, scale is duplicated in each variant layout.
   * -- So it is possible to define default value of each property of TileSpriteLayoutVariant directly in TileTransitionVariantLayout:
   * {
   *   scale = 0.5,
   *   inner_corner =
   *   {
   *     count = 8,
   *   },
   *   outer_corner =
   *   {
   *   	count = 8,
   *   	x = 576
   *   },
   *   u_transition  =
   *   {
   *     count = 1,
   *     x = 1728
   *   },
   *   [...]
   * }
   * @example
   * -- The above version is creating a table to just specify inner_corner has 8 count. It can be shorter by using variant prefix properties:
   * {
   *   scale = 0.5,
   *   inner_corner_count = 8,
   *   outer_corner_count = 8,
   *   u_transition_count = 1,
   *   outer_corner_x = 576,
   *   u_transition_x = 1728,
   *   [...]
   * }
   * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionVariantLayout.html Online documentation}
   */
  export interface TileTransitionVariantLayout extends TileSpriteLayoutVariant {
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionVariantLayout.html#x_offset Online documentation}
     */
    x_offset?: SpriteSizeType
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionVariantLayout.html#y_offset Online documentation}
     */
    y_offset?: SpriteSizeType
    /**
     * Defaults to the values set in the `inner_corner_*` properties.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionVariantLayout.html#inner_corner Online documentation}
     */
    inner_corner?: TileSpriteLayoutVariant
    /**
     * Defaults to the values set in the `outer_corner_*` properties.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionVariantLayout.html#outer_corner Online documentation}
     */
    outer_corner?: TileSpriteLayoutVariant
    /**
     * Defaults to the values set in the `side_*` properties.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionVariantLayout.html#side Online documentation}
     */
    side?: TileSpriteLayoutVariant
    /**
     * Defaults to the values set in the `double_side_*` properties.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionVariantLayout.html#double_side Online documentation}
     */
    double_side?: TileSpriteLayoutVariant
    /**
     * Defaults to the values set in the `u_transition_*` properties.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionVariantLayout.html#u_transition Online documentation}
     */
    u_transition?: TileSpriteLayoutVariant
    /**
     * Defaults to the values set in the `o_transition_*` properties.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionVariantLayout.html#o_transition Online documentation}
     */
    o_transition?: TileSpriteLayoutVariant
    inner_corner_scale?: float
    /**
     * Horizontal position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionVariantLayout.html#inner_corner_x Online documentation}
     */
    inner_corner_x?: SpriteSizeType
    /**
     * Vertical position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionVariantLayout.html#inner_corner_y Online documentation}
     */
    inner_corner_y?: SpriteSizeType
    inner_corner_tile_height?: uint8
    inner_corner_line_length?: uint8
    inner_corner_count?: uint8
    outer_corner_scale?: float
    /**
     * Horizontal position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionVariantLayout.html#outer_corner_x Online documentation}
     */
    outer_corner_x?: SpriteSizeType
    /**
     * Vertical position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionVariantLayout.html#outer_corner_y Online documentation}
     */
    outer_corner_y?: SpriteSizeType
    outer_corner_tile_height?: uint8
    outer_corner_line_length?: uint8
    outer_corner_count?: uint8
    side_scale?: float
    /**
     * Horizontal position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionVariantLayout.html#side_x Online documentation}
     */
    side_x?: SpriteSizeType
    /**
     * Vertical position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionVariantLayout.html#side_y Online documentation}
     */
    side_y?: SpriteSizeType
    side_tile_height?: uint8
    side_line_length?: uint8
    side_count?: uint8
    double_side_scale?: float
    /**
     * Horizontal position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionVariantLayout.html#double_side_x Online documentation}
     */
    double_side_x?: SpriteSizeType
    /**
     * Vertical position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionVariantLayout.html#double_side_y Online documentation}
     */
    double_side_y?: SpriteSizeType
    double_side_tile_height?: uint8
    double_side_line_length?: uint8
    double_side_count?: uint8
    u_transition_scale?: float
    /**
     * Horizontal position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionVariantLayout.html#u_transition_x Online documentation}
     */
    u_transition_x?: SpriteSizeType
    /**
     * Vertical position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionVariantLayout.html#u_transition_y Online documentation}
     */
    u_transition_y?: SpriteSizeType
    u_transition_tile_height?: uint8
    u_transition_line_length?: uint8
    u_transition_count?: uint8
    o_transition_scale?: float
    /**
     * Horizontal position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionVariantLayout.html#o_transition_x Online documentation}
     */
    o_transition_x?: SpriteSizeType
    /**
     * Vertical position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionVariantLayout.html#o_transition_y Online documentation}
     */
    o_transition_y?: SpriteSizeType
    o_transition_tile_height?: uint8
    o_transition_line_length?: uint8
    o_transition_count?: uint8
  }
  /**
   * Used for {@link TilePrototype} graphics.
   *
   * Use `layout` with `spritesheet` to define all the tile layers inside the `layout` property. The `*_enabled`, `*_layout` and `*_spritesheet` properties can be used to override specific layers of a reused layout.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitions.html Online documentation}
   */
  export interface TileTransitions {
    layout?: TileTransitionSpritesheetLayout
    /**
     * Default spritesheet for all TileSpriteLayouts.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitions.html#spritesheet Online documentation}
     */
    spritesheet?: FileName
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitions.html#overlay_enabled Online documentation}
     */
    overlay_enabled?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitions.html#mask_enabled Online documentation}
     */
    mask_enabled?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitions.html#background_enabled Online documentation}
     */
    background_enabled?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitions.html#background_mask_enabled Online documentation}
     */
    background_mask_enabled?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitions.html#effect_map_enabled Online documentation}
     */
    effect_map_enabled?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitions.html#lightmap_enabled Online documentation}
     */
    lightmap_enabled?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitions.html#auxiliary_effect_mask_enabled Online documentation}
     */
    auxiliary_effect_mask_enabled?: bool
    /**
     * Overrides the `overlay` definition inside `layout`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitions.html#overlay_layout Online documentation}
     */
    overlay_layout?: TileTransitionVariantLayout
    /**
     * Overrides the `mask` definition inside `layout`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitions.html#mask_layout Online documentation}
     */
    mask_layout?: TileTransitionVariantLayout
    /**
     * Overrides the `background` definition inside `layout`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitions.html#background_layout Online documentation}
     */
    background_layout?: TileTransitionVariantLayout
    /**
     * Overrides the `background_mask` definition inside `layout`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitions.html#background_mask_layout Online documentation}
     */
    background_mask_layout?: TileTransitionVariantLayout
    /**
     * Overrides the `effect_map` definition inside `layout`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitions.html#effect_map_layout Online documentation}
     */
    effect_map_layout?: TileTransitionVariantLayout
    /**
     * Overrides the `lightmap` definition inside `layout`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitions.html#lightmap_layout Online documentation}
     */
    lightmap_layout?: TileTransitionVariantLayout
    /**
     * Overrides the `auxiliary_effect_mask` definition inside `layout`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitions.html#auxiliary_effect_mask_layout Online documentation}
     */
    auxiliary_effect_mask_layout?: TileTransitionVariantLayout
    /**
     * **Default:** `Value of `spritesheet``
     *
     * Only loaded if `layout` or `mask_layout` is defined.
     *
     * Default spritesheet for `mask_layout` and `layout.mask`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitions.html#mask_spritesheet Online documentation}
     */
    mask_spritesheet?: FileName
    /**
     * **Default:** `Value of `spritesheet``
     *
     * Only loaded if `layout` or `background_layout` is defined.
     *
     * Default spritesheet for `background_layout` and `layout.background`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitions.html#background_spritesheet Online documentation}
     */
    background_spritesheet?: FileName
    /**
     * **Default:** `Value of `spritesheet``
     *
     * Only loaded if `layout` or `background_mask_layout` is defined.
     *
     * Default spritesheet for `background_mask_layout` and `layout.background_mask`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitions.html#background_mask_spritesheet Online documentation}
     */
    background_mask_spritesheet?: FileName
    /**
     * **Default:** `Value of `spritesheet``
     *
     * Only loaded if `layout` or `effect_map_layout` is defined.
     *
     * Default spritesheet for `effect_map_layout` and `layout.effect_map`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitions.html#effect_map_spritesheet Online documentation}
     */
    effect_map_spritesheet?: FileName
    /**
     * **Default:** `Value of `spritesheet``
     *
     * Only loaded if `layout` or `lightmap_layout` is defined.
     *
     * Default spritesheet for `lightmap_layout` and `layout.lightmap`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitions.html#lightmap_spritesheet Online documentation}
     */
    lightmap_spritesheet?: FileName
    /**
     * **Default:** `Value of `spritesheet``
     *
     * Only loaded if `layout` or `auxiliary_effect_mask_layout` is defined.
     *
     * Default spritesheet for `auxiliary_effect_mask_layout` and `layout.auxiliary_effect_mask`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitions.html#auxiliary_effect_mask_spritesheet Online documentation}
     */
    auxiliary_effect_mask_spritesheet?: FileName
    water_patch?: Sprite
    overlay_layer_group?: TileRenderLayer
    background_layer_group?: TileRenderLayer
    /**
     * **Default:** `0.15`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitions.html#waving_effect_time_scale Online documentation}
     */
    waving_effect_time_scale?: float
    overlay_layer_offset?: int8
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitions.html#masked_overlay_layer_offset Online documentation}
     */
    masked_overlay_layer_offset?: int8
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitions.html#background_layer_offset Online documentation}
     */
    background_layer_offset?: int8
    /**
     * **Default:** `Value of `background_layer_offset``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitions.html#masked_background_layer_offset Online documentation}
     */
    masked_background_layer_offset?: int8
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitions.html#draw_background_layer_under_tiles Online documentation}
     */
    draw_background_layer_under_tiles?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitions.html#apply_effect_color_to_overlay Online documentation}
     */
    apply_effect_color_to_overlay?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitions.html#apply_waving_effect_on_masks Online documentation}
     */
    apply_waving_effect_on_masks?: bool
    /**
     * **Default:** `Value of `apply_waving_effect_on_masks``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitions.html#apply_waving_effect_on_background_mask Online documentation}
     */
    apply_waving_effect_on_background_mask?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitions.html#draw_simple_outer_corner_over_diagonal Online documentation}
     */
    draw_simple_outer_corner_over_diagonal?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitions.html#offset_background_layer_by_tile_layer Online documentation}
     */
    offset_background_layer_by_tile_layer?: bool
    inner_corner_weights?: readonly float[]
    outer_corner_weights?: readonly float[]
    side_weights?: readonly float[]
    side_variations_in_group?: uint8
    double_side_weights?: readonly float[]
    double_side_variations_in_group?: uint8
    u_transition_weights?: readonly float[]
  }
  export interface TileTransitionsBetweenTransitions extends TileTransitions {
    transition_group1: uint8
    transition_group2: uint8
  }
  export interface TileTransitionsToTiles extends TileTransitions {
    to_tiles: readonly TileID[]
    transition_group: uint8
  }
  export interface TileTransitionsVariants {
    main: readonly TileMainPictures[]
    /**
     * **Default:** `8`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionsVariants.html#material_texture_width_in_tiles Online documentation}
     */
    material_texture_width_in_tiles?: uint8
    /**
     * **Default:** `8`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionsVariants.html#material_texture_height_in_tiles Online documentation}
     */
    material_texture_height_in_tiles?: uint8
    material_background?: MaterialTextureParameters
    light?: readonly TileLightPictures[]
    /**
     * Must have the same `count` as material_background.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionsVariants.html#material_light Online documentation}
     */
    material_light?: MaterialTextureParameters
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionsVariants.html#empty_transitions Online documentation}
     */
    empty_transitions?: bool
    /**
     * Only loaded, and mandatory if `empty_transitions` is `false`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TileTransitionsVariants.html#transition Online documentation}
     */
    transition?: TileTransitions
  }
  export interface TimeElapsedTipTrigger {
    readonly type: "time-elapsed"
    ticks: uint32
  }
  export interface TimeSinceLastTipActivationTipTrigger {
    readonly type: "time-since-last-tip-activation"
    ticks: MapTick
  }
  /**
   * One frame in time for a Bezier interpolation.
   * @see TintProcessionLayer.frames
   * @see {@link https://lua-api.factorio.com/2.0.16/types/TintProcessionLayer.html#frames Online documentation}
   */
  export interface TintProcessionBezierControlPoint {
    /**
     * Mandatory if `opacity` or `tint_upper` or `tint_lower` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TintProcessionBezierControlPoint.html#timestamp Online documentation}
     */
    timestamp?: MapTick
    /**
     * `opacity` and `opacity_t` interpolate a double smoothly over time.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TintProcessionBezierControlPoint.html#opacity Online documentation}
     */
    opacity?: double
    /**
     * Bidirectional tangent at the given timestamp.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TintProcessionBezierControlPoint.html#opacity_t Online documentation}
     */
    opacity_t?: double
    /**
     * `tint_upper` and `tint_upper_t` interpolate a color smoothly over time.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TintProcessionBezierControlPoint.html#tint_upper Online documentation}
     */
    tint_upper?: Color
    /**
     * Bidirectional tangent at the given timestamp.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TintProcessionBezierControlPoint.html#tint_upper_t Online documentation}
     */
    tint_upper_t?: Color
    /**
     * `tint_lower` and `tint_lower_t` interpolate a color smoothly over time.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TintProcessionBezierControlPoint.html#tint_lower Online documentation}
     */
    tint_lower?: Color
    /**
     * Bidirectional tangent at the given timestamp.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TintProcessionBezierControlPoint.html#tint_lower_t Online documentation}
     */
    tint_lower_t?: Color
  }
  /**
   * Fullscreen overlay which blends gradient from top to bottom edge of the screen using {@link BlendMode#normal premultiplied alpha blending}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/TintProcessionLayer.html Online documentation}
   */
  export interface TintProcessionLayer {
    readonly type: "tint"
    /**
     * **Default:** `"object"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TintProcessionLayer.html#render_layer Online documentation}
     */
    render_layer?: RenderLayer
    /**
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TintProcessionLayer.html#frames Online documentation}
     */
    frames: readonly TintProcessionBezierControlPoint[]
  }
  /**
   * This is used by {@link TipsAndTricksItem} for the initial starting status. One of the following values:
   *
   * ## Union members
   * - `"locked"`: The tip is hidden.
   * - `"optional"`: Same as `"locked"`.
   * - `"dependencies-not-met"`: The {@link TipsAndTricksItem#trigger trigger} for the tip was already met, but the tip is still hidden because of dependencies.
   * - `"unlocked"`: Not suggested by trigger yet, but visible in the window. This is also the state that tips are left in when the /unlock-tips command is used in-game.
   * - `"suggested"`: The dependencies and triggers are met, the game suggests the tip, shows the notification icon in the GUI.
   * - `"not-to-be-suggested"`
   * - `"completed-without-tutorial"`: The tip is considered completed.
   * - `"completed"`: The tip is considered completed.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/TipStatus.html Online documentation}
   */
  export type TipStatus =
    | "locked"
    | "optional"
    | "dependencies-not-met"
    | "unlocked"
    | "suggested"
    | "not-to-be-suggested"
    | "completed-without-tutorial"
    | "completed"
  /**
   * Loaded as one of the tip triggers, based on the value of the `type` key.
   *
   * ## Union members
   * - {@link OrTipTrigger}: Loaded when the `type` is `"or"`.
   * - {@link AndTipTrigger}: Loaded when the `type` is `"and"`.
   * - {@link SequenceTipTrigger}: Loaded when the `type` is `"sequence"`.
   * - {@link DependenciesMetTipTrigger}: Loaded when the `type` is `"dependencies-met"`.
   * - {@link TimeElapsedTipTrigger}: Loaded when the `type` is `"time-elapsed"`.
   * - {@link TimeSinceLastTipActivationTipTrigger}: Loaded when the `type` is `"time-since-last-tip-activation"`.
   * - {@link ResearchTechnologyTipTrigger}: Loaded when the `type` is `"research"`.
   * - {@link ResearchWithSciencePackTipTrigger}: Loaded when the `type` is `"research-with-science-pack"`.
   * - {@link UnlockRecipeTipTrigger}: Loaded when the `type` is `"unlock-recipe"`.
   * - {@link CraftItemTipTrigger}: Loaded when the `type` is `"craft-item"`.
   * - {@link BuildEntityTipTrigger}: Loaded when the `type` is `"build-entity"`.
   * - {@link ManualTransferTipTrigger}: Loaded when the `type` is `"manual-transfer"`.
   * - {@link ModuleTransferTipTrigger}: Loaded when the `type` is `"module-transfer"`.
   * - {@link StackTransferTipTrigger}: Loaded when the `type` is `"stack-transfer"`.
   * - {@link EntityTransferTipTrigger}: Loaded when the `type` is `"entity-transfer"`.
   * - {@link DropItemTipTrigger}: Loaded when the `type` is `"drop-item"`.
   * - {@link SetRecipeTipTrigger}: Loaded when the `type` is `"set-recipe"`.
   * - {@link SetFilterTipTrigger}: Loaded when the `type` is `"set-filter"`.
   * - {@link LimitChestTipTrigger}: Loaded when the `type` is `"limit-chest"`.
   * - {@link UsePipetteTipTrigger}: Loaded when the `type` is `"use-pipette"`.
   * - {@link SetLogisticRequestTipTrigger}: Loaded when the `type` is `"set-logistic-request"`.
   * - {@link UseConfirmTipTrigger}: Loaded when the `type` is `"use-confirm"`.
   * - {@link ToggleShowEntityInfoTipTrigger}: Loaded when the `type` is `"toggle-show-entity-info"`.
   * - {@link GeneratingPowerTipTrigger}: Loaded when the `type` is `"generating-power"`.
   * - {@link LowPowerTipTrigger}: Loaded when the `type` is `"low-power"`.
   * - {@link PasteEntitySettingsTipTrigger}: Loaded when the `type` is `"paste-entity-settings"`.
   * - {@link FastReplaceTipTrigger}: Loaded when the `type` is `"fast-replace"`.
   * - {@link GroupAttackTipTrigger}: Loaded when the `type` is `"group-attack"`.
   * - {@link FastBeltBendTipTrigger}: Loaded when the `type` is `"fast-belt-bend"`.
   * - {@link BeltTraverseTipTrigger}: Loaded when the `type` is `"belt-traverse"`.
   * - {@link PlaceEquipmentTipTrigger}: Loaded when the `type` is `"place-equipment"`.
   * - {@link ClearCursorTipTrigger}: Loaded when the `type` is `"clear-cursor"`.
   * - {@link RotateEntityTipTrigger}: Loaded when the `type` is `"rotate-entity"`.
   * - {@link FlipEntityTipTrigger}: Loaded when the `type` is `"flip-entity"`.
   * - {@link AlternativeBuildTipTrigger}: Loaded when the `type` is `"alternative-build"`.
   * - {@link GateOverRailBuildTipTrigger}: Loaded when the `type` is `"gate-over-rail-build"`.
   * - {@link ManualWireDragTipTrigger}: Loaded when the `type` is `"manual-wire-drag"`.
   * - {@link ShootTipTrigger}: Loaded when the `type` is `"shoot"`.
   * - {@link ChangeSurfaceTipTrigger}: Loaded when the `type` is `"change-surface"`.
   * - {@link ApplyStarterPackTipTrigger}: Loaded when the `type` is `"apply-starter-pack"`.
   * - {@link MineItemByRobotTipTrigger}: Loaded when the `type` is `"mine-item-by-robot"`.
   * - {@link BuildEntityByRobotTipTrigger}: Loaded when the `type` is `"build-entity-by-robot"`.
   * - {@link PlanTrainPathTipTrigger}: Loaded when the `type` is `"plan-train-path"`.
   * - {@link UseRailPlannerTipTrigger}: Loaded when the `type` is `"use-rail-planner"`.
   * - {@link ToggleRailLayerTipTrigger}: Loaded when the `type` is `"toggle-rail-layer"`.
   * - {@link EnterVehicleTipTrigger}: Loaded when the `type` is `"enter-vehicle"`.
   * - {@link SendSpidertronTipTrigger}: Loaded when the `type` is `"send-spidertron"`.
   * - {@link ActivatePasteTipTrigger}: Loaded when the `type` is `"activate-paste"`.
   * - {@link KillTipTrigger}: Loaded when the `type` is `"kill"`.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/TipTrigger.html Online documentation}
   */
  export type TipTrigger =
    | OrTipTrigger
    | AndTipTrigger
    | SequenceTipTrigger
    | DependenciesMetTipTrigger
    | TimeElapsedTipTrigger
    | TimeSinceLastTipActivationTipTrigger
    | ResearchTechnologyTipTrigger
    | ResearchWithSciencePackTipTrigger
    | UnlockRecipeTipTrigger
    | CraftItemTipTrigger
    | BuildEntityTipTrigger
    | ManualTransferTipTrigger
    | ModuleTransferTipTrigger
    | StackTransferTipTrigger
    | EntityTransferTipTrigger
    | DropItemTipTrigger
    | SetRecipeTipTrigger
    | SetFilterTipTrigger
    | LimitChestTipTrigger
    | UsePipetteTipTrigger
    | SetLogisticRequestTipTrigger
    | UseConfirmTipTrigger
    | ToggleShowEntityInfoTipTrigger
    | GeneratingPowerTipTrigger
    | LowPowerTipTrigger
    | PasteEntitySettingsTipTrigger
    | FastReplaceTipTrigger
    | GroupAttackTipTrigger
    | FastBeltBendTipTrigger
    | BeltTraverseTipTrigger
    | PlaceEquipmentTipTrigger
    | ClearCursorTipTrigger
    | RotateEntityTipTrigger
    | FlipEntityTipTrigger
    | AlternativeBuildTipTrigger
    | GateOverRailBuildTipTrigger
    | ManualWireDragTipTrigger
    | ShootTipTrigger
    | ChangeSurfaceTipTrigger
    | ApplyStarterPackTipTrigger
    | MineItemByRobotTipTrigger
    | BuildEntityByRobotTipTrigger
    | PlanTrainPathTipTrigger
    | UseRailPlannerTipTrigger
    | ToggleRailLayerTipTrigger
    | EnterVehicleTipTrigger
    | SendSpidertronTipTrigger
    | ActivatePasteTipTrigger
    | KillTipTrigger
  export interface ToggleRailLayerTipTrigger extends CountBasedTipTrigger {
    readonly type: "toggle-rail-layer"
  }
  export interface ToggleShowEntityInfoTipTrigger extends CountBasedTipTrigger {
    readonly type: "toggle-show-entity-info"
  }
  export interface TrainBrakingForceBonusModifier extends SimpleModifier {
    readonly type: "train-braking-force-bonus"
    /**
     * **Default:** `true`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TrainBrakingForceBonusModifier.html#infer_icon Online documentation}
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TrainBrakingForceBonusModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  /**
   * @see UtilityConstants.train_path_finding
   * @see {@link https://lua-api.factorio.com/2.0.16/prototypes/UtilityConstants.html#train_path_finding Online documentation}
   */
  export interface TrainPathFinderConstants {
    train_stop_penalty: uint32
    stopped_manually_controlled_train_penalty: uint32
    stopped_manually_controlled_train_without_passenger_penalty: uint32
    signal_reserved_by_circuit_network_penalty: uint32
    train_in_station_penalty: uint32
    train_in_station_with_no_other_valid_stops_in_schedule: uint32
    train_arriving_to_station_penalty: uint32
    train_arriving_to_signal_penalty: uint32
    train_waiting_at_signal_penalty: uint32
    /**
     * Must be >= 0.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TrainPathFinderConstants.html#train_waiting_at_signal_tick_multiplier_penalty Online documentation}
     */
    train_waiting_at_signal_tick_multiplier_penalty: float
    train_with_no_path_penalty: uint32
    train_auto_without_schedule_penalty: uint32
  }
  /**
   * @see TrainStopPrototype.drawing_boxes
   * @see {@link https://lua-api.factorio.com/2.0.16/prototypes/TrainStopPrototype.html#drawing_boxes Online documentation}
   */
  export interface TrainStopDrawingBoxes {
    north: BoundingBox
    east: BoundingBox
    south: BoundingBox
    west: BoundingBox
  }
  export interface TrainStopLight {
    picture: Sprite4Way
    red_picture: Sprite4Way
    light: LightDefinition
  }
  export interface TrainVisualizationConstants {
    not_last_box_color: Color
    last_box_color: Color
    box_width: float
    box_length: float
    joint_distance: float
    connection_distance: float
    final_margin: float
    stock_number_scale: float
  }
  export interface TransitionApplication {
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransitionApplication.html#offset Online documentation}
     */
    offset?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransitionApplication.html#pod_offset Online documentation}
     */
    pod_offset?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransitionApplication.html#rotation Online documentation}
     */
    rotation?: bool
  }
  export interface TransportBeltAnimationSet {
    animation_set: RotatedAnimation
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSet.html#east_index Online documentation}
     */
    east_index?: uint8
    /**
     * **Default:** `2`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSet.html#west_index Online documentation}
     */
    west_index?: uint8
    /**
     * **Default:** `3`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSet.html#north_index Online documentation}
     */
    north_index?: uint8
    /**
     * **Default:** `4`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSet.html#south_index Online documentation}
     */
    south_index?: uint8
    /**
     * **Default:** `13`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSet.html#starting_south_index Online documentation}
     */
    starting_south_index?: uint8
    /**
     * **Default:** `14`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSet.html#ending_south_index Online documentation}
     */
    ending_south_index?: uint8
    /**
     * **Default:** `15`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSet.html#starting_west_index Online documentation}
     */
    starting_west_index?: uint8
    /**
     * **Default:** `16`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSet.html#ending_west_index Online documentation}
     */
    ending_west_index?: uint8
    /**
     * **Default:** `17`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSet.html#starting_north_index Online documentation}
     */
    starting_north_index?: uint8
    /**
     * **Default:** `18`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSet.html#ending_north_index Online documentation}
     */
    ending_north_index?: uint8
    /**
     * **Default:** `19`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSet.html#starting_east_index Online documentation}
     */
    starting_east_index?: uint8
    /**
     * **Default:** `20`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSet.html#ending_east_index Online documentation}
     */
    ending_east_index?: uint8
    frozen_patch?: RotatedSprite
    /**
     * **Default:** `1`
     *
     * Only loaded if `frozen_patch` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSet.html#east_index_frozen Online documentation}
     */
    east_index_frozen?: uint8
    /**
     * **Default:** `2`
     *
     * Only loaded if `frozen_patch` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSet.html#west_index_frozen Online documentation}
     */
    west_index_frozen?: uint8
    /**
     * **Default:** `3`
     *
     * Only loaded if `frozen_patch` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSet.html#north_index_frozen Online documentation}
     */
    north_index_frozen?: uint8
    /**
     * **Default:** `4`
     *
     * Only loaded if `frozen_patch` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSet.html#south_index_frozen Online documentation}
     */
    south_index_frozen?: uint8
    /**
     * **Default:** `13`
     *
     * Only loaded if `frozen_patch` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSet.html#starting_south_index_frozen Online documentation}
     */
    starting_south_index_frozen?: uint8
    /**
     * **Default:** `14`
     *
     * Only loaded if `frozen_patch` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSet.html#ending_south_index_frozen Online documentation}
     */
    ending_south_index_frozen?: uint8
    /**
     * **Default:** `15`
     *
     * Only loaded if `frozen_patch` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSet.html#starting_west_index_frozen Online documentation}
     */
    starting_west_index_frozen?: uint8
    /**
     * **Default:** `16`
     *
     * Only loaded if `frozen_patch` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSet.html#ending_west_index_frozen Online documentation}
     */
    ending_west_index_frozen?: uint8
    /**
     * **Default:** `17`
     *
     * Only loaded if `frozen_patch` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSet.html#starting_north_index_frozen Online documentation}
     */
    starting_north_index_frozen?: uint8
    /**
     * **Default:** `18`
     *
     * Only loaded if `frozen_patch` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSet.html#ending_north_index_frozen Online documentation}
     */
    ending_north_index_frozen?: uint8
    /**
     * **Default:** `19`
     *
     * Only loaded if `frozen_patch` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSet.html#starting_east_index_frozen Online documentation}
     */
    starting_east_index_frozen?: uint8
    /**
     * **Default:** `20`
     *
     * Only loaded if `frozen_patch` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSet.html#ending_east_index_frozen Online documentation}
     */
    ending_east_index_frozen?: uint8
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSet.html#alternate Online documentation}
     */
    alternate?: bool
    belt_reader?: readonly BeltReaderLayer[]
  }
  export interface TransportBeltAnimationSetWithCorners extends TransportBeltAnimationSet {
    /**
     * **Default:** `5`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSetWithCorners.html#east_to_north_index Online documentation}
     */
    east_to_north_index?: uint8
    /**
     * **Default:** `6`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSetWithCorners.html#north_to_east_index Online documentation}
     */
    north_to_east_index?: uint8
    /**
     * **Default:** `7`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSetWithCorners.html#west_to_north_index Online documentation}
     */
    west_to_north_index?: uint8
    /**
     * **Default:** `8`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSetWithCorners.html#north_to_west_index Online documentation}
     */
    north_to_west_index?: uint8
    /**
     * **Default:** `9`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSetWithCorners.html#south_to_east_index Online documentation}
     */
    south_to_east_index?: uint8
    /**
     * **Default:** `10`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSetWithCorners.html#east_to_south_index Online documentation}
     */
    east_to_south_index?: uint8
    /**
     * **Default:** `11`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSetWithCorners.html#south_to_west_index Online documentation}
     */
    south_to_west_index?: uint8
    /**
     * **Default:** `12`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSetWithCorners.html#west_to_south_index Online documentation}
     */
    west_to_south_index?: uint8
    /**
     * **Default:** `5`
     *
     * Only loaded if `frozen_patch` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSetWithCorners.html#east_to_north_index_frozen Online documentation}
     */
    east_to_north_index_frozen?: uint8
    /**
     * **Default:** `6`
     *
     * Only loaded if `frozen_patch` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSetWithCorners.html#north_to_east_index_frozen Online documentation}
     */
    north_to_east_index_frozen?: uint8
    /**
     * **Default:** `7`
     *
     * Only loaded if `frozen_patch` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSetWithCorners.html#west_to_north_index_frozen Online documentation}
     */
    west_to_north_index_frozen?: uint8
    /**
     * **Default:** `8`
     *
     * Only loaded if `frozen_patch` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSetWithCorners.html#north_to_west_index_frozen Online documentation}
     */
    north_to_west_index_frozen?: uint8
    /**
     * **Default:** `9`
     *
     * Only loaded if `frozen_patch` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSetWithCorners.html#south_to_east_index_frozen Online documentation}
     */
    south_to_east_index_frozen?: uint8
    /**
     * **Default:** `10`
     *
     * Only loaded if `frozen_patch` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSetWithCorners.html#east_to_south_index_frozen Online documentation}
     */
    east_to_south_index_frozen?: uint8
    /**
     * **Default:** `11`
     *
     * Only loaded if `frozen_patch` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSetWithCorners.html#south_to_west_index_frozen Online documentation}
     */
    south_to_west_index_frozen?: uint8
    /**
     * **Default:** `12`
     *
     * Only loaded if `frozen_patch` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltAnimationSetWithCorners.html#west_to_south_index_frozen Online documentation}
     */
    west_to_south_index_frozen?: uint8
  }
  /**
   * Used to define the graphics for the (in vanilla) yellow frame that is used when a {@link TransportBeltPrototype} is connected to the circuit network.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/TransportBeltConnectorFrame.html Online documentation}
   */
  export interface TransportBeltConnectorFrame {
    frame_main: AnimationVariations
    frame_shadow: AnimationVariations
    frame_main_scanner: Animation
    frame_main_scanner_movement_speed: float
    frame_main_scanner_horizontal_start_shift: Vector
    frame_main_scanner_horizontal_end_shift: Vector
    frame_main_scanner_horizontal_y_scale: float
    frame_main_scanner_horizontal_rotation: RealOrientation
    frame_main_scanner_vertical_start_shift: Vector
    frame_main_scanner_vertical_end_shift: Vector
    frame_main_scanner_vertical_y_scale: float
    frame_main_scanner_vertical_rotation: RealOrientation
    frame_main_scanner_cross_horizontal_start_shift: Vector
    frame_main_scanner_cross_horizontal_end_shift: Vector
    frame_main_scanner_cross_horizontal_y_scale: float
    frame_main_scanner_cross_horizontal_rotation: RealOrientation
    frame_main_scanner_cross_vertical_start_shift: Vector
    frame_main_scanner_cross_vertical_end_shift: Vector
    frame_main_scanner_cross_vertical_y_scale: float
    frame_main_scanner_cross_vertical_rotation: RealOrientation
    frame_main_scanner_nw_ne: Animation
    frame_main_scanner_sw_se: Animation
    frame_back_patch?: SpriteVariations
    frame_front_patch?: SpriteVariations
  }
  /**
   * Tree has number of "dying" stages, which is deduced from frame count of `shadow` if shadow is defined, otherwise from frame count of `trunk`. Frame count of `leaves` has to be one less than deduced number stages, as last stage is always assumed to be leafless.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/TreeVariation.html Online documentation}
   */
  export interface TreeVariation {
    /**
     * If `shadow` is not specified, this has to have one more frame than `leaves`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TreeVariation.html#trunk Online documentation}
     */
    trunk: Animation
    leaves: Animation
    leaf_generation: CreateParticleTriggerEffectItem
    branch_generation: CreateParticleTriggerEffectItem
    /**
     * Shadow must have 1 more `frame_count` than `leaves`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TreeVariation.html#shadow Online documentation}
     */
    shadow?: Animation
    /**
     * Only loaded if `shadow` is present. Defaults to `shadow.frame_count - 1`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TreeVariation.html#disable_shadow_distortion_beginning_at_frame Online documentation}
     */
    disable_shadow_distortion_beginning_at_frame?: uint32
    /**
     * Normal must have the same frame_count as `leaves`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TreeVariation.html#normal Online documentation}
     */
    normal?: Animation
    /**
     * Overlay must have the same frame_count as `leaves`. Won't be tinted by the tree color unless `apply_runtime_tint` is set to `true` in the sprite definition. See {@linkplain https://forums.factorio.com/viewtopic.php?p=547758#p547758 here}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TreeVariation.html#overlay Online documentation}
     */
    overlay?: Animation
    underwater?: Animation
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TreeVariation.html#underwater_layer_offset Online documentation}
     */
    underwater_layer_offset?: int8
    water_reflection?: WaterReflectionDefinition
  }
  /**
   * Loaded as one of the {@link TriggerItem} extensions, based on the value of the `type` key.
   *
   * ## Union members
   * - {@link DirectTriggerItem}: Loaded when the `type` is `"direct"`.
   * - {@link AreaTriggerItem}: Loaded when the `type` is `"area"`.
   * - {@link LineTriggerItem}: Loaded when the `type` is `"line"`.
   * - {@link ClusterTriggerItem}: Loaded when the `type` is `"cluster"`.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/Trigger.html Online documentation}
   */
  export type Trigger =
    | (DirectTriggerItem | AreaTriggerItem | LineTriggerItem | ClusterTriggerItem)
    | readonly (DirectTriggerItem | AreaTriggerItem | LineTriggerItem | ClusterTriggerItem)[]
  /**
   * Loaded as one of the {@link TriggerDeliveryItem} extensions, based on the value of the `type` key.
   *
   * ## Union members
   * - {@link InstantTriggerDelivery}: Loaded when the `type` is `"instant"`.
   * - {@link ProjectileTriggerDelivery}: Loaded when the `type` is `"projectile"`.
   * - {@link BeamTriggerDelivery}: Loaded when the `type` is `"beam"`.
   * - {@link StreamTriggerDelivery}: Loaded when the `type` is `"stream"`.
   * - {@link ArtilleryTriggerDelivery}: Loaded when the `type` is `"artillery"`.
   * - {@link ChainTriggerDelivery}: Loaded when the `type` is `"chain"`.
   * - {@link DelayedTriggerDelivery}: Loaded when the `type` is `"delayed"`.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/TriggerDelivery.html Online documentation}
   */
  export type TriggerDelivery =
    | InstantTriggerDelivery
    | ProjectileTriggerDelivery
    | BeamTriggerDelivery
    | StreamTriggerDelivery
    | ArtilleryTriggerDelivery
    | ChainTriggerDelivery
    | DelayedTriggerDelivery
  /**
   * The abstract base of all {@link TriggerDelivery TriggerDeliveries}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/TriggerDeliveryItem.html Online documentation}
   */
  export interface TriggerDeliveryItem {
    /**
     * Provides the source of the TriggerDelivery as as both the source and target of the effect.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TriggerDeliveryItem.html#source_effects Online documentation}
     */
    source_effects?: TriggerEffect
    target_effects?: TriggerEffect
  }
  /**
   * Loaded as one of the {@link TriggerEffectItem} extensions, based on the value of the `type` key.
   *
   * ## Union members
   * - {@link DamageTriggerEffectItem}: Loaded when the `type` is `"damage"`.
   * - {@link CreateEntityTriggerEffectItem}: Loaded when the `type` is `"create-entity"`.
   * - {@link CreateExplosionTriggerEffectItem}: Loaded when the `type` is `"create-explosion"`.
   * - {@link CreateFireTriggerEffectItem}: Loaded when the `type` is `"create-fire"`.
   * - {@link CreateSmokeTriggerEffectItem}: Loaded when the `type` is `"create-smoke"`.
   * - {@link CreateTrivialSmokeEffectItem}: Loaded when the `type` is `"create-trivial-smoke"`.
   * - {@link CreateAsteroidChunkEffectItem}: Loaded when the `type` is `"create-asteroid-chunk"`.
   * - {@link CreateParticleTriggerEffectItem}: Loaded when the `type` is `"create-particle"`.
   * - {@link CreateStickerTriggerEffectItem}: Loaded when the `type` is `"create-sticker"`.
   * - {@link CreateDecorativesTriggerEffectItem}: Loaded when the `type` is `"create-decorative"`.
   * - {@link NestedTriggerEffectItem}: Loaded when the `type` is `"nested-result"`.
   * - {@link PlaySoundTriggerEffectItem}: Loaded when the `type` is `"play-sound"`.
   * - {@link PushBackTriggerEffectItem}: Loaded when the `type` is `"push-back"`.
   * - {@link DestroyCliffsTriggerEffectItem}: Loaded when the `type` is `"destroy-cliffs"`.
   * - {@link ShowExplosionOnChartTriggerEffectItem}: Loaded when the `type` is `"show-explosion-on-chart"`.
   * - {@link InsertItemTriggerEffectItem}: Loaded when the `type` is `"insert-item"`.
   * - {@link ScriptTriggerEffectItem}: Loaded when the `type` is `"script"`.
   * - {@link SetTileTriggerEffectItem}: Loaded when the `type` is `"set-tile"`.
   * - {@link InvokeTileEffectTriggerEffectItem}: Loaded when the `type` is `"invoke-tile-trigger"`.
   * - {@link DestroyDecorativesTriggerEffectItem}: Loaded when the `type` is `"destroy-decoratives"`.
   * - {@link CameraEffectTriggerEffectItem}: Loaded when the `type` is `"camera-effect"`.
   * - {@link ActivateImpactTriggerEffectItem}: Loaded when the `type` is `"activate-impact"`.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/TriggerEffect.html Online documentation}
   */
  export type TriggerEffect =
    | (
        | DamageTriggerEffectItem
        | CreateEntityTriggerEffectItem
        | CreateExplosionTriggerEffectItem
        | CreateFireTriggerEffectItem
        | CreateSmokeTriggerEffectItem
        | CreateTrivialSmokeEffectItem
        | CreateAsteroidChunkEffectItem
        | CreateParticleTriggerEffectItem
        | CreateStickerTriggerEffectItem
        | CreateDecorativesTriggerEffectItem
        | NestedTriggerEffectItem
        | PlaySoundTriggerEffectItem
        | PushBackTriggerEffectItem
        | DestroyCliffsTriggerEffectItem
        | ShowExplosionOnChartTriggerEffectItem
        | InsertItemTriggerEffectItem
        | ScriptTriggerEffectItem
        | SetTileTriggerEffectItem
        | InvokeTileEffectTriggerEffectItem
        | DestroyDecorativesTriggerEffectItem
        | CameraEffectTriggerEffectItem
        | ActivateImpactTriggerEffectItem
      )
    | readonly (
        | DamageTriggerEffectItem
        | CreateEntityTriggerEffectItem
        | CreateExplosionTriggerEffectItem
        | CreateFireTriggerEffectItem
        | CreateSmokeTriggerEffectItem
        | CreateTrivialSmokeEffectItem
        | CreateAsteroidChunkEffectItem
        | CreateParticleTriggerEffectItem
        | CreateStickerTriggerEffectItem
        | CreateDecorativesTriggerEffectItem
        | NestedTriggerEffectItem
        | PlaySoundTriggerEffectItem
        | PushBackTriggerEffectItem
        | DestroyCliffsTriggerEffectItem
        | ShowExplosionOnChartTriggerEffectItem
        | InsertItemTriggerEffectItem
        | ScriptTriggerEffectItem
        | SetTileTriggerEffectItem
        | InvokeTileEffectTriggerEffectItem
        | DestroyDecorativesTriggerEffectItem
        | CameraEffectTriggerEffectItem
        | ActivateImpactTriggerEffectItem
      )[]
  /**
   * The abstract base of all {@link TriggerEffect TriggerEffects}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/TriggerEffectItem.html Online documentation}
   */
  export interface TriggerEffectItem {
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TriggerEffectItem.html#repeat_count Online documentation}
     */
    repeat_count?: uint16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TriggerEffectItem.html#repeat_count_deviation Online documentation}
     */
    repeat_count_deviation?: uint16
    /**
     * **Default:** `1`
     *
     * Must be greater than `0` and less than or equal to `1`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TriggerEffectItem.html#probability Online documentation}
     */
    probability?: float
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TriggerEffectItem.html#affects_target Online documentation}
     */
    affects_target?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TriggerEffectItem.html#show_in_tooltip Online documentation}
     */
    show_in_tooltip?: bool
    /**
     * Guaranteed to work with {@link EntityWithHealthPrototype#damaged_trigger_effect EntityWithHealthPrototype::damaged_trigger_effect} and {@link EntityWithHealthPrototype#dying_trigger_effect EntityWithHealthPrototype::dying_trigger_effect}. Unknown if it works with other properties that use {@link TriggerEffect}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TriggerEffectItem.html#damage_type_filters Online documentation}
     */
    damage_type_filters?: DamageTypeFilters
  }
  /**
   * A {@link TriggerEffect} with cooldown conditions, used to limit the frequency of trigger effects that would otherwise fire every single tick. If multiple cooldown conditions are defined, then all cooldowns must be satisfied before the effect can be triggered.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/TriggerEffectWithCooldown.html Online documentation}
   */
  export interface TriggerEffectWithCooldown {
    /**
     * **Default:** `0`
     *
     * The travel distance between triggers that the triggerer must travel between effects. Negative values will mean there is no cooldown.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TriggerEffectWithCooldown.html#distance_cooldown Online documentation}
     */
    distance_cooldown?: double
    /**
     * **Default:** `0`
     *
     * The initial state of the distance cooldown. In other words, the distance the triggerer must travel before the first effect can be triggered. Useful for staggering multiple effects.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TriggerEffectWithCooldown.html#initial_distance_cooldown Online documentation}
     */
    initial_distance_cooldown?: double
    /**
     * **Default:** `0`
     *
     * The number of ticks that elapse between triggers.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TriggerEffectWithCooldown.html#time_cooldown Online documentation}
     */
    time_cooldown?: MapTick
    /**
     * **Default:** `0`
     *
     * The initial amount of time to wait before triggering the effect for the first time.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TriggerEffectWithCooldown.html#initial_time_cooldown Online documentation}
     */
    initial_time_cooldown?: MapTick
    effect: TriggerEffect
  }
  /**
   * The abstract base of all {@link Trigger Triggers}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/TriggerItem.html Online documentation}
   */
  export interface TriggerItem {
    /**
     * **Default:** `All flags`
     *
     * Only prototypes with these flags are affected by the trigger item.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TriggerItem.html#entity_flags Online documentation}
     */
    entity_flags?: EntityPrototypeFlags
    /**
     * **Default:** `All masks`
     *
     * Only prototypes with these collision masks are affected by the trigger item.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TriggerItem.html#collision_mask Online documentation}
     */
    collision_mask?: CollisionMaskConnector
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TriggerItem.html#ignore_collision_condition Online documentation}
     */
    ignore_collision_condition?: bool
    /**
     * **Default:** `Everything`
     *
     * The trigger affects only prototypes with these masks.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TriggerItem.html#trigger_target_mask Online documentation}
     */
    trigger_target_mask?: TriggerTargetMask
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TriggerItem.html#repeat_count Online documentation}
     */
    repeat_count?: uint32
    /**
     * **Default:** `1`
     *
     * Must be greater than 0 and less than or equal to 1.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TriggerItem.html#probability Online documentation}
     */
    probability?: float
    action_delivery?: TriggerDelivery | readonly TriggerDelivery[]
    /**
     * **Default:** `All forces`
     *
     * Only entities meeting the force condition are affected by the trigger item.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TriggerItem.html#force Online documentation}
     */
    force?: ForceCondition
  }
  /**
   * An array of names of {@link TriggerTargetType}. See {@linkplain https://forums.factorio.com/71657 Design discussion: Trigger target type} and {@linkplain https://forums.factorio.com/86164 Blacklist for prototypes turrets shouldn't attack}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/TriggerTargetMask.html Online documentation}
   */
  export type TriggerTargetMask = readonly string[]
  /**
   * The name of a {@link TrivialSmokePrototype}.
   * @example
   * "smoke-building"
   * @example
   * "nuclear-smoke"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/TrivialSmokeID.html Online documentation}
   */
  export type TrivialSmokeID = string
  export interface TurretAttackModifier extends BaseModifier {
    readonly type: "turret-attack"
    /**
     * **Default:** `true`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TurretAttackModifier.html#infer_icon Online documentation}
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TurretAttackModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
    /**
     * Name of the {@link EntityPrototype} that is affected. This also works for non-turrets such as tanks, however, the bonus does not appear in the entity's tooltips.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TurretAttackModifier.html#turret_id Online documentation}
     */
    turret_id: EntityID
    /**
     * Modification value, which will be added to the current turret attack modifier upon researching.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TurretAttackModifier.html#modifier Online documentation}
     */
    modifier: double
  }
  export interface TurretBaseVisualisation {
    /**
     * **Default:** `"lower-object"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TurretBaseVisualisation.html#render_layer Online documentation}
     */
    render_layer?: RenderLayer
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TurretBaseVisualisation.html#secondary_draw_order Online documentation}
     */
    secondary_draw_order?: int8
    /**
     * If not defined, visualisation will be drawn in all states.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TurretBaseVisualisation.html#enabled_states Online documentation}
     */
    enabled_states?: readonly TurretState[]
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TurretBaseVisualisation.html#draw_when_has_energy Online documentation}
     */
    draw_when_has_energy?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TurretBaseVisualisation.html#draw_when_no_energy Online documentation}
     */
    draw_when_no_energy?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TurretBaseVisualisation.html#draw_when_has_ammo Online documentation}
     */
    draw_when_has_ammo?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TurretBaseVisualisation.html#draw_when_no_ammo Online documentation}
     */
    draw_when_no_ammo?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TurretBaseVisualisation.html#draw_when_frozen Online documentation}
     */
    draw_when_frozen?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TurretBaseVisualisation.html#draw_when_not_frozen Online documentation}
     */
    draw_when_not_frozen?: bool
    animation: Animation4Way
  }
  export interface TurretGraphicsSet {
    base_visualisation?: TurretBaseVisualisation | readonly TurretBaseVisualisation[]
  }
  export interface TurretSpecialEffect {
    readonly type: "mask-by-circle"
    center?: TurretSpecialEffectCenter
    /**
     * **Default:** `0`
     *
     * Only loaded if `type` is `"mask-by-circle"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TurretSpecialEffect.html#min_radius Online documentation}
     */
    min_radius?: float
    /**
     * Only loaded, and mandatory if `type` is `"mask-by-circle"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TurretSpecialEffect.html#max_radius Online documentation}
     */
    max_radius?: float
    /**
     * **Default:** `0`
     *
     * Only loaded if `type` is `"mask-by-circle"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TurretSpecialEffect.html#falloff Online documentation}
     */
    falloff?: float
    /**
     * Only loaded if `type` is `"mask-by-circle"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TurretSpecialEffect.html#attacking_min_radius Online documentation}
     */
    attacking_min_radius?: float
    /**
     * Only loaded if `type` is `"mask-by-circle"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TurretSpecialEffect.html#attacking_max_radius Online documentation}
     */
    attacking_max_radius?: float
    /**
     * Only loaded if `type` is `"mask-by-circle"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/TurretSpecialEffect.html#attacking_falloff Online documentation}
     */
    attacking_falloff?: float
  }
  /**
   * Struct type for {@link TurretSpecialEffectCenter}
   * @see TurretSpecialEffectCenter
   * @see {@link https://lua-api.factorio.com/2.0.16/types/TurretSpecialEffectCenter.html Online documentation}
   */
  export interface TurretSpecialEffectCenterStruct {
    default?: Vector
    north?: Vector
    north_east?: Vector
    east?: Vector
    south_east?: Vector
    south?: Vector
    south_west?: Vector
    west?: Vector
    north_west?: Vector
  }
  /**
   * If this is loaded as a single Vector, it is used for all directions.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/TurretSpecialEffectCenter.html Online documentation}
   */
  export type TurretSpecialEffectCenter = TurretSpecialEffectCenterStruct | Vector
  /**
   * ## Union members
   * - `"folded"`
   * - `"preparing"`
   * - `"prepared"`
   * - `"starting-attack"`
   * - `"attacking"`
   * - `"ending-attack"`
   * - `"rotate-for-folding"`
   * - `"folding"`
   * @see {@link https://lua-api.factorio.com/2.0.16/types/TurretState.html Online documentation}
   */
  export type TurretState =
    | "folded"
    | "preparing"
    | "prepared"
    | "starting-attack"
    | "attacking"
    | "ending-attack"
    | "rotate-for-folding"
    | "folding"
  /**
   * @see UndergroundBeltPrototype.structure
   * @see {@link https://lua-api.factorio.com/2.0.16/prototypes/UndergroundBeltPrototype.html#structure Online documentation}
   */
  export interface UndergroundBeltStructure {
    direction_in?: Sprite4Way
    direction_out?: Sprite4Way
    back_patch?: Sprite4Way
    front_patch?: Sprite4Way
    direction_in_side_loading?: Sprite4Way
    direction_out_side_loading?: Sprite4Way
    frozen_patch_in?: Sprite4Way
    frozen_patch_out?: Sprite4Way
  }
  /**
   * Used by {@link UnitPrototype} and {@link SpiderUnitPrototype}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/UnitAISettings.html Online documentation}
   */
  export interface UnitAISettings {
    /**
     * **Default:** `false`
     *
     * If enabled, units that repeatedly fail to succeed at commands will be destroyed.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/UnitAISettings.html#destroy_when_commands_fail Online documentation}
     */
    destroy_when_commands_fail?: bool
    /**
     * **Default:** `false`
     *
     * If enabled, units that have nothing else to do will attempt to return to a spawner.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/UnitAISettings.html#allow_try_return_to_spawner Online documentation}
     */
    allow_try_return_to_spawner?: bool
    /**
     * **Default:** `true`
     *
     * If enabled, units will try to separate themselves from nearby friendly units.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/UnitAISettings.html#do_separation Online documentation}
     */
    do_separation?: bool
    /**
     * **Default:** `0`
     *
     * Must be between -8 and 8.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/UnitAISettings.html#path_resolution_modifier Online documentation}
     */
    path_resolution_modifier?: int8
    strafe_settings?: PrototypeStrafeSettings
  }
  export interface UnitAlternativeFrameSequence {
    /**
     * Indices of frames from the attack parameter animation.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/UnitAlternativeFrameSequence.html#warmup_frame_sequence Online documentation}
     */
    warmup_frame_sequence: readonly uint16[]
    /**
     * Indices of frames from the attack parameter animation.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/UnitAlternativeFrameSequence.html#warmup2_frame_sequence Online documentation}
     */
    warmup2_frame_sequence: readonly uint16[]
    /**
     * Indices of frames from the attack parameter animation.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/UnitAlternativeFrameSequence.html#attacking_frame_sequence Online documentation}
     */
    attacking_frame_sequence: readonly uint16[]
    /**
     * Indices of frames from the attack parameter animation.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/UnitAlternativeFrameSequence.html#cooldown_frame_sequence Online documentation}
     */
    cooldown_frame_sequence: readonly uint16[]
    /**
     * Indices of frames from the attack parameter animation.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/UnitAlternativeFrameSequence.html#prepared_frame_sequence Online documentation}
     */
    prepared_frame_sequence: readonly uint16[]
    /**
     * Indices of frames from the attack parameter animation.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/UnitAlternativeFrameSequence.html#back_to_walk_frame_sequence Online documentation}
     */
    back_to_walk_frame_sequence: readonly uint16[]
    warmup_animation_speed: float
    attacking_animation_speed: float
    cooldown_animation_speed: float
    prepared_animation_speed: float
    back_to_walk_animation_speed: float
  }
  export interface UnitGroupSettings {
    /**
     * Pollution triggered group waiting time is a random time between min and max gathering time
     * @see {@link https://lua-api.factorio.com/2.0.16/types/UnitGroupSettings.html#min_group_gathering_time Online documentation}
     */
    min_group_gathering_time: uint32
    max_group_gathering_time: uint32
    /**
     * After the gathering is finished the group can still wait for late members, but it doesn't accept new ones anymore.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/UnitGroupSettings.html#max_wait_time_for_late_members Online documentation}
     */
    max_wait_time_for_late_members: uint32
    /**
     * Limits for group radius (calculated by number of numbers).
     * @see {@link https://lua-api.factorio.com/2.0.16/types/UnitGroupSettings.html#max_group_radius Online documentation}
     */
    max_group_radius: double
    min_group_radius: double
    /**
     * When a member falls behind the group he can speedup up till this much of his regular speed.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/UnitGroupSettings.html#max_member_speedup_when_behind Online documentation}
     */
    max_member_speedup_when_behind: double
    /**
     * When a member gets ahead of its group, it will slow down to at most this factor of its speed.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/UnitGroupSettings.html#max_member_slowdown_when_ahead Online documentation}
     */
    max_member_slowdown_when_ahead: double
    /**
     * When members of a group are behind, the entire group will slow down to at most this factor of its max speed.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/UnitGroupSettings.html#max_group_slowdown_factor Online documentation}
     */
    max_group_slowdown_factor: double
    /**
     * If a member falls behind more than this times the group radius, the group will slow down to max_group_slowdown_factor.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/UnitGroupSettings.html#max_group_member_fallback_factor Online documentation}
     */
    max_group_member_fallback_factor: double
    /**
     * If a member falls behind more than this time the group radius, it will be removed from the group.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/UnitGroupSettings.html#member_disown_distance Online documentation}
     */
    member_disown_distance: double
    tick_tolerance_when_member_arrives: uint32
    /**
     * Maximum number of automatically created unit groups gathering for attack at any time.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/UnitGroupSettings.html#max_gathering_unit_groups Online documentation}
     */
    max_gathering_unit_groups: uint32
    /**
     * Maximum size of an attack unit group. This only affects automatically-created unit groups; manual groups created through the API are unaffected.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/UnitGroupSettings.html#max_unit_group_size Online documentation}
     */
    max_unit_group_size: uint32
  }
  /**
   * Struct type for {@link UnitSpawnDefinition}
   * @see UnitSpawnDefinition
   * @see {@link https://lua-api.factorio.com/2.0.16/types/UnitSpawnDefinition.html Online documentation}
   */
  export interface UnitSpawnDefinitionStruct {
    unit: EntityID
    /**
     * Array of evolution and probability info, with the following conditions:
     *
     * - The `evolution_factor` must be ascending from entry to entry.
     *
     * - The last entry's weight will be used when the `evolution_factor` is larger than the last entry.
     *
     * - Weights are linearly interpolated between entries.
     *
     * - Individual weights are scaled linearly so that the cumulative weight is `1`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/UnitSpawnDefinition.html#spawn_points Online documentation}
     */
    spawn_points: readonly SpawnPoint[]
  }
  /**
   * It can be specified as a table with named or numbered keys, but not a mix of both. If this is specified as a table with numbered keys then the first value is the unit and the second is the spawn points.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/UnitSpawnDefinition.html Online documentation}
   */
  export type UnitSpawnDefinition = UnitSpawnDefinitionStruct | readonly [EntityID, readonly SpawnPoint[]]
  export interface UnlockQualityModifier extends BaseModifier {
    readonly type: "unlock-quality"
    /**
     * **Default:** `false`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/UnlockQualityModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
    quality: QualityID
  }
  export interface UnlockRecipeModifier extends BaseModifier {
    readonly type: "unlock-recipe"
    /**
     * **Default:** `false`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/UnlockRecipeModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
    /**
     * Prototype name of the {@link RecipePrototype} that is unlocked upon researching.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/UnlockRecipeModifier.html#recipe Online documentation}
     */
    recipe: RecipeID
  }
  export interface UnlockRecipeTipTrigger {
    readonly type: "unlock-recipe"
    recipe: RecipeID
  }
  export interface UnlockSpaceLocationModifier extends BaseModifier {
    readonly type: "unlock-space-location"
    /**
     * **Default:** `false`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/UnlockSpaceLocationModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
    space_location: SpaceLocationID
  }
  export interface UseConfirmTipTrigger extends CountBasedTipTrigger {
    readonly type: "use-confirm"
  }
  export interface UseOnSelfCapsuleAction {
    readonly type: "use-on-self"
    attack_parameters: AttackParameters
    /**
     * **Default:** `true`
     *
     * Whether using the capsule consumes an item from the stack.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/UseOnSelfCapsuleAction.html#uses_stack Online documentation}
     */
    uses_stack?: bool
  }
  export interface UsePipetteTipTrigger extends CountBasedTipTrigger {
    readonly type: "use-pipette"
  }
  export interface UseRailPlannerTipTrigger extends CountBasedTipTrigger {
    readonly type: "use-rail-planner"
    build_mode: BuildMode
  }
  /**
   * Defines how are individual samples selected and played after each other.
   *
   * ## Union members
   * - `"randomized"`: Samples are selected randomly. The same sample cannot be repeated twice in a row.
   * - `"semi-randomized"`: Samples are selected in a repeating randomly selected sequence of a given length. The sequence is generated on each state transition. The same sample cannot be repeated twice in a row.
   * - `"shuffled"`: Samples are selected in a repeating sequence in which each sample is played once.
   * - `"layer-controlled"`: Samples are selected based on a sample currently playing in a different layer.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundCompositionMode.html Online documentation}
   */
  export type VariableAmbientSoundCompositionMode = "randomized" | "semi-randomized" | "shuffled" | "layer-controlled"
  export interface VariableAmbientSoundLayer {
    /**
     * Name has to be unique across all layers.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundLayer.html#name Online documentation}
     */
    name: string
    /**
     * Cannot be empty.
     *
     * Samples within a layer are the {@link Sound#variations Sound::variations}.
     *
     * Number of samples must be the same across all variants.
     *
     * Samples cannot have variable volume and all samples must have the same default volume.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundLayer.html#variants Online documentation}
     */
    variants: readonly Sound[]
    composition_mode: VariableAmbientSoundCompositionMode
    /**
     * Name of a layer which controls this layer, a layer cannot control itself.
     *
     * Only loaded, and mandatory if `composition_mode` is `"layer-controlled"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundLayer.html#control_layer Online documentation}
     */
    control_layer?: string
    /**
     * Defines a mapping between controlling layer's samples and this (controlled) layer's samples. The number of items in the mapping must be the same as the number of samples in the controlling layer. Item in the mapping with index N defines which samples of this layer can play when the sample N is playing in the controlling layer.
     *
     * Only loaded, and mandatory if `composition_mode` is `"layer-controlled"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundLayer.html#control_layer_sample_mapping Online documentation}
     */
    control_layer_sample_mapping?: readonly (readonly uint8[])[]
    /**
     * **Default:** `false`
     *
     * If `true`, the first of {@link Sound#variations Sound::variations} is played at the start of a sequence. The start sample counts towards the {@link VariableAmbientSoundLayerStateProperties#sequence_length VariableAmbientSoundLayerStateProperties::sequence_length}
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundLayer.html#has_start_sample Online documentation}
     */
    has_start_sample?: bool
    /**
     * **Default:** `false`
     *
     * If `true`, the last of {@link Sound#variations Sound::variations} is played at the end of a sequence (if the sequence is long enough). The end sample counts towards the {@link VariableAmbientSoundLayerStateProperties#sequence_length VariableAmbientSoundLayerStateProperties::sequence_length}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundLayer.html#has_end_sample Online documentation}
     */
    has_end_sample?: bool
    /**
     * **Default:** `1`
     *
     * If greater than one, samples are composed in overlapping sub-layers, offset from each other.
     *
     * If greater than one, one of `sublayer_starting_offset` or `sublayer_offset` must be defined. Both cannot be defined together.
     *
     * Cannot be defined for layers with `"shuffled"` `composition_mode`.
     *
     * Cannot be zero.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundLayer.html#number_of_sublayers Online documentation}
     */
    number_of_sublayers?: uint8
    /**
     * Specifies starting offset of the second sub-layer.
     *
     * Only loaded if `number_of_sublayers` is greater than one.
     *
     * Cannot be defined together with `sublayer_offset`.
     *
     * The minimum of {@link RandomRange} variant cannot be zero.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundLayer.html#sublayer_starting_offset Online documentation}
     */
    sublayer_starting_offset?: RandomRange | ProbabilityTable
    /**
     * Specifies offset between two sub-layers' samples.
     *
     * This implicitly dictates the sample lengths as two sub-layer offsets.
     *
     * Only loaded if `number_of_sublayers` is greater than one.
     *
     * Cannot be defined together with `sublayer_starting_offset`.
     *
     * The minimum of {@link RandomRange} variant cannot be zero.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundLayer.html#sublayer_offset Online documentation}
     */
    sublayer_offset?: RandomRange | ProbabilityTable
    /**
     * Explicitly defines sample lengths. The whole sample is played when this is not specified.
     *
     * Cannot be defined together with `sublayer_offset`.
     *
     * The minimum cannot be zero.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundLayer.html#sample_length Online documentation}
     */
    sample_length?: RandomRange
  }
  /**
   * First property is the name of a layer.
   *
   * Second property is the sample index.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundLayerSample.html Online documentation}
   */
  export type VariableAmbientSoundLayerSample = readonly [string, uint32]
  export interface VariableAmbientSoundLayerStateProperties {
    enabled?: bool
    /**
     * Index of a layer's variant.
     *
     * Cannot be zero.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundLayerStateProperties.html#variant Online documentation}
     */
    variant?: uint8
    /**
     * Number of samples in a sequence.
     *
     * The minimum cannot be zero.
     *
     * Mandatory for layers with `"semi-randomized"` {@link VariableAmbientSoundCompositionMode}.
     *
     * Applicable for layers with `"randomized"` {@link VariableAmbientSoundCompositionMode}.
     *
     * Cannot be defined for layers with `"shuffled"` {@link VariableAmbientSoundCompositionMode}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundLayerStateProperties.html#sequence_length Online documentation}
     */
    sequence_length?: RandomRange
    /**
     * The number of times a layer repeats itself until it's considered finished. If it's not defined, the layer never finishes on its own. What counts as repetition depends on the {@link VariableAmbientSoundCompositionMode}.
     *
     * Each sample played is counted as a repetition of `"randomized"` layer.
     *
     * Repetition of `"semi-randomized"` layer is counted when its sequence is finished.
     *
     * Repetition of `"shuffled"` layer is counted when all samples play once.
     *
     * Each sample played is counted as a repetition of `"layer-controlled"` layer.
     *
     * If `number_of_repetitions` of {@link VariableAmbientSoundLayer#control_layer VariableAmbientSoundLayer::control_layer} of `"layer-controlled"` layer is smaller than `number_of_repetitions` of the controlled layer, `number_of_repetitions` of the control layer is used for the purposes of `pause_between_repetitions` and `end_pause`.
     *
     * Cannot be zero.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundLayerStateProperties.html#number_of_repetitions Online documentation}
     */
    number_of_repetitions?: RandomRange | ProbabilityTable
    /**
     * Pause before a layer starts playing.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundLayerStateProperties.html#start_pause Online documentation}
     */
    start_pause?: RandomRange
    /**
     * Pause between individual samples within a sequence.
     *
     * Cannot be defined for `"randomized"` layers without defining `sequence_length` as well. Alternatively, use `pause_between_repetitions` instead.
     *
     * Cannot be defined for layers with `sublayer_offset` defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundLayerStateProperties.html#pause_between_samples Online documentation}
     */
    pause_between_samples?: RandomRange
    /**
     * Pause between each repetition of a layer. The repetition is not counted until the pause finishes.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundLayerStateProperties.html#pause_between_repetitions Online documentation}
     */
    pause_between_repetitions?: RandomRange
    /**
     * Pause before a layer finishes playing. The last repetition and consequently the layer being finished is not counted until the pause finishes.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundLayerStateProperties.html#end_pause Online documentation}
     */
    end_pause?: RandomRange
    /**
     * **Default:** `0`
     *
     * A sample replaced by silence still counts as played for the purposes of sequence count, repetition count, pauses, etc.
     *
     * Must be in the `[0.0, 1.0]` interval.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundLayerStateProperties.html#silence_instead_of_sample_probability Online documentation}
     */
    silence_instead_of_sample_probability?: float
  }
  export interface VariableAmbientSoundNextStateConditions {
    /**
     * Cannot be zero.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundNextStateConditions.html#weight Online documentation}
     */
    weight: uint32
    /**
     * Specified sample must be playing in the specified layer.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundNextStateConditions.html#layer_sample Online documentation}
     */
    layer_sample?: VariableAmbientSoundLayerSample
    previous_state?: string
  }
  export interface VariableAmbientSoundNextStateItem {
    /**
     * Name of the state.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundNextStateItem.html#state Online documentation}
     */
    state: string
    /**
     * Transition to `state` is possible only if all conditions are met.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundNextStateItem.html#conditions Online documentation}
     */
    conditions: VariableAmbientSoundNextStateConditions
  }
  /**
   * Defines how a transition to next state is triggered.
   *
   * ## Union members
   * - `"layers-finished"`: Next state is triggered when all specified layers finish playing.
   * - `"duration"`: Next state is triggered after a set time.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundNextStateTrigger.html Online documentation}
   */
  export type VariableAmbientSoundNextStateTrigger = "layers-finished" | "duration"
  export interface VariableAmbientSoundState {
    /**
     * Name has to be unique across all states.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundState.html#name Online documentation}
     */
    name: string
    /**
     * **Default:** `"regular"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundState.html#type Online documentation}
     */
    readonly type?: VariableAmbientSoundStateType
    /**
     * Cannot be defined if `next_states` is defined.
     *
     * Doesn't need to be defined if there is only one state.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundState.html#next_state Online documentation}
     */
    next_state?: string
    /**
     * Cannot be defined if `next_state` is defined.
     *
     * Cannot be defined if there is only one state.
     *
     * Cannot be empty.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundState.html#next_states Online documentation}
     */
    next_states?: readonly VariableAmbientSoundNextStateItem[]
    /**
     * Mandatory if there is more than one state or if the only state transitions to itself.
     *
     * Can be defined for `regular` states only.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundState.html#next_state_trigger Online documentation}
     */
    next_state_trigger?: VariableAmbientSoundNextStateTrigger
    /**
     * List of name of layers used to trigger state transition.
     *
     * Only loaded, and mandatory if `next_state_trigger` is `"layers-finished"`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundState.html#next_state_layers_finished_layers Online documentation}
     */
    next_state_layers_finished_layers?: readonly string[]
    /**
     * Defines for how long this state will be active.
     *
     * Mandatory if `next_state_trigger` is `"duration"`.
     *
     * Optionally loaded for `intermezzo` states.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundState.html#state_duration_seconds Online documentation}
     */
    state_duration_seconds?: uint32
    /**
     * Must contain as many items as there is layers in the variable track. The items themselves can be empty. The order of items corresponds to the order of layers as they appear in the prototype definition.
     *
     * Mandatory for `regular` and `final` states.
     *
     * Cannot be defined for `intermezzo` or `stop` states.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundState.html#layers_properties Online documentation}
     */
    layers_properties?: readonly VariableAmbientSoundLayerStateProperties[]
    /**
     * Pause before a layer starts playing.
     *
     * Optionally loaded for `intermezzo` states.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundState.html#start_pause Online documentation}
     */
    start_pause?: RandomRange
    /**
     * Pause before a layer finishes playing. The layer being finished is not counted until the pause finishes.
     *
     * Optionally loaded for `intermezzo` states.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundState.html#end_pause Online documentation}
     */
    end_pause?: RandomRange
    /**
     * Defines how many layers will be playing. Which layers will be playing is selected randomly.
     *
     * The minimum cannot be zero, the maximum cannot be greater than the number of layers.
     *
     * Cannot be defined if any of `layers_properties` define the `enabled` property.
     *
     * Cannot be defined for `intermezzo` or `stop` states.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundState.html#number_of_enabled_layers Online documentation}
     */
    number_of_enabled_layers?: RandomRange
  }
  /**
   * ## Union members
   * - `"regular"`
   * - `"intermezzo"`: Only special intermezzo layer plays in this state, the rest is paused.
   * - `"final"`: The track will stay in this state for the remainder of the track's duration.
   * - `"stop"`: Transitioning into this state stops the track.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundStateType.html Online documentation}
   */
  export type VariableAmbientSoundStateType = "regular" | "intermezzo" | "final" | "stop"
  export interface VariableAmbientSoundVariableSound {
    /**
     * Cannot be empty.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundVariableSound.html#layers Online documentation}
     */
    layers: readonly VariableAmbientSoundLayer[]
    intermezzo?: Sound
    /**
     * The first state is used as the starting state and cannot be an intermezzo state.
     *
     * Cannot be empty.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundVariableSound.html#states Online documentation}
     */
    states: readonly VariableAmbientSoundState[]
    /**
     * Cannot be zero.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundVariableSound.html#length_seconds Online documentation}
     */
    length_seconds: uint32
    /**
     * **Default:** `12600`
     *
     * Number of audio signal samples (default sampling frequency is 44.1kHz) defining a time grid. Music samples are aligned with this grid when queued.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VariableAmbientSoundVariableSound.html#alignment_samples Online documentation}
     */
    alignment_samples?: uint32
  }
  /**
   * Struct type for {@link Vector}
   * @see Vector
   * @see {@link https://lua-api.factorio.com/2.0.16/types/Vector.html Online documentation}
   */
  export interface VectorStruct {
    x: double
    y: double
  }
  /**
   * A vector is a two-element array or dictionary containing the x and y components. Positive x goes east, positive y goes south.
   * @example
   * shift = {0, 12}
   * @example
   * right = {1.0, 0.5}
   * @example
   * vector = {x = 2.3, y = 3.4}
   * @see {@link https://lua-api.factorio.com/2.0.16/types/Vector.html Online documentation}
   */
  export type Vector = VectorStruct | readonly [double, double]
  /**
   * Struct type for {@link Vector3D}
   * @see Vector3D
   * @see {@link https://lua-api.factorio.com/2.0.16/types/Vector3D.html Online documentation}
   */
  export interface Vector3DStruct {
    x: float
    y: float
    z: float
  }
  /**
   * If this is specified as a three-element array then the array items are x, y and z, in that order.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/Vector3D.html Online documentation}
   */
  export type Vector3D = Vector3DStruct | readonly [float, float, float]
  /**
   * Struct type for {@link Vector4f}
   * @see Vector4f
   * @see {@link https://lua-api.factorio.com/2.0.16/types/Vector4f.html Online documentation}
   */
  export interface Vector4fStruct {
    x: float
    y: float
    z: float
    w: float
  }
  export type Vector4f = Vector4fStruct | readonly [float, float, float, float]
  /**
   * @see AnimatedVector.rotations
   * @see {@link https://lua-api.factorio.com/2.0.16/types/AnimatedVector.html#rotations Online documentation}
   */
  export interface VectorRotation {
    /**
     * The size of all `frames` must be the same.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VectorRotation.html#frames Online documentation}
     */
    frames: readonly Vector[]
    render_layer?: RenderLayer
  }
  export interface VehicleLogisticsModifier extends BoolModifier {
    readonly type: "vehicle-logistics"
    /**
     * **Default:** `false`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/VehicleLogisticsModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  /**
   * ## Union members
   * - `"top"`
   * - `"center"`
   * - `"bottom"`
   * @see {@link https://lua-api.factorio.com/2.0.16/types/VerticalAlign.html Online documentation}
   */
  export type VerticalAlign = "top" | "center" | "bottom"
  export interface VerticalFlowStyleSpecification extends BaseStyleSpecification {
    readonly type: "vertical_flow_style"
    vertical_spacing?: int32
  }
  export interface VerticalScrollBarStyleSpecification extends ScrollBarStyleSpecification {
    readonly type: "vertical_scrollbar_style"
  }
  /**
   * The name of a {@link VirtualSignalPrototype}.
   * @example
   * "signal-red"
   * @example
   * "signal-each"
   * @see {@link https://lua-api.factorio.com/2.0.16/types/VirtualSignalID.html Online documentation}
   */
  export type VirtualSignalID = string
  export interface VisualState {
    name: string
    next_active: string
    next_inactive: string
    duration: uint8
    color?: Color
  }
  /**
   * Void energy sources provide unlimited free energy.
   * @example
   * energy_source = {type = "void"}
   * @see {@link https://lua-api.factorio.com/2.0.16/types/VoidEnergySource.html Online documentation}
   */
  export interface VoidEnergySource extends BaseEnergySource {
    readonly type: "void"
  }
  /**
   * @see WallPrototype.pictures
   * @see {@link https://lua-api.factorio.com/2.0.16/prototypes/WallPrototype.html#pictures Online documentation}
   */
  export interface WallPictures {
    single?: SpriteVariations
    straight_vertical?: SpriteVariations
    straight_horizontal?: SpriteVariations
    corner_right_down?: SpriteVariations
    corner_left_down?: SpriteVariations
    t_up?: SpriteVariations
    ending_right?: SpriteVariations
    ending_left?: SpriteVariations
    filling?: SpriteVariations
    water_connection_patch?: Sprite4Way
    gate_connection_patch?: Sprite4Way
  }
  /**
   * Entity water reflection. {@linkplain https://forums.factorio.com/100703 Currently only renders} for {@link EntityWithHealthPrototype}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/WaterReflectionDefinition.html Online documentation}
   */
  export interface WaterReflectionDefinition {
    pictures?: SpriteVariations
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WaterReflectionDefinition.html#orientation_to_variation Online documentation}
     */
    orientation_to_variation?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WaterReflectionDefinition.html#rotate Online documentation}
     */
    rotate?: bool
  }
  export interface WaterTileEffectParameters {
    specular_lightness: Color
    foam_color: Color
    foam_color_multiplier: float
    tick_scale: float
    animation_speed: float
    animation_scale: float | readonly [float, float]
    dark_threshold: float | readonly [float, float]
    reflection_threshold: float | readonly [float, float]
    specular_threshold: float | readonly [float, float]
    /**
     * Texture size must be 512x512. Shader variant `"water"` must have 1 texture, `"lava"` and `"wetland-water"` must have 2 textures and `"oil"` must have 4 textures.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WaterTileEffectParameters.html#textures Online documentation}
     */
    textures: readonly EffectTexture[]
    /**
     * **Default:** `2`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WaterTileEffectParameters.html#near_zoom Online documentation}
     */
    near_zoom?: float
    /**
     * **Default:** `0.5`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WaterTileEffectParameters.html#far_zoom Online documentation}
     */
    far_zoom?: float
    /**
     * **Default:** `"water"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WaterTileEffectParameters.html#shader_variation Online documentation}
     */
    shader_variation?: EffectVariation
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WaterTileEffectParameters.html#texture_variations_rows Online documentation}
     */
    texture_variations_rows?: uint8
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WaterTileEffectParameters.html#texture_variations_columns Online documentation}
     */
    texture_variations_columns?: uint8
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WaterTileEffectParameters.html#secondary_texture_variations_rows Online documentation}
     */
    secondary_texture_variations_rows?: uint8
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WaterTileEffectParameters.html#secondary_texture_variations_columns Online documentation}
     */
    secondary_texture_variations_columns?: uint8
  }
  /**
   * Weight of an object. The weight is stored as a fixed-size 64 bit integer, with 16 bits reserved for decimal precision, meaning the smallest value step is `1/2^16`.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/Weight.html Online documentation}
   */
  export type Weight = double
  /**
   * Definition of a point where circuit network wires can be connected to an entity.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/WireConnectionPoint.html Online documentation}
   */
  export interface WireConnectionPoint {
    wire: WirePosition
    shadow: WirePosition
  }
  /**
   * Used by {@link WireConnectionPoint}.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/WirePosition.html Online documentation}
   */
  export interface WirePosition {
    copper?: Vector
    red?: Vector
    green?: Vector
  }
  export interface WorkerRobotBatteryModifier extends SimpleModifier {
    readonly type: "worker-robot-battery"
    /**
     * **Default:** `true`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkerRobotBatteryModifier.html#infer_icon Online documentation}
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkerRobotBatteryModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface WorkerRobotSpeedModifier extends SimpleModifier {
    readonly type: "worker-robot-speed"
    /**
     * **Default:** `true`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkerRobotSpeedModifier.html#infer_icon Online documentation}
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkerRobotSpeedModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface WorkerRobotStorageModifier extends SimpleModifier {
    readonly type: "worker-robot-storage"
    /**
     * **Default:** `true`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkerRobotStorageModifier.html#infer_icon Online documentation}
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkerRobotStorageModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  /**
   * Struct type for {@link WorkingSound}
   * @see WorkingSound
   * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingSound.html Online documentation}
   */
  export interface WorkingSoundStruct extends MainSound {
    /**
     * If this property is defined, all properties inherited from MainSound (and not overridden here) are ignored.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingSound.html#main_sounds Online documentation}
     */
    main_sounds?: MainSound | readonly MainSound[]
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingSound.html#apparent_volume Online documentation}
     */
    apparent_volume?: float
    max_sounds_per_type?: uint8
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingSound.html#extra_sounds_ignore_limit Online documentation}
     */
    extra_sounds_ignore_limit?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingSound.html#persistent Online documentation}
     */
    persistent?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingSound.html#use_doppler_shift Online documentation}
     */
    use_doppler_shift?: bool
    /**
     * **Default:** `1`
     *
     * Modifies how far a sound can be heard. Can only be 1 or lower, has to be a positive number.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingSound.html#audible_distance_modifier Online documentation}
     */
    audible_distance_modifier?: double
    /**
     * The sound to be played when the entity is idle. Might not work with all entities that use working_sound.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingSound.html#idle_sound Online documentation}
     */
    idle_sound?: Sound
    /**
     * Might not work with all entities that use working_sound.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingSound.html#activate_sound Online documentation}
     */
    activate_sound?: Sound
    /**
     * Might not work with all entities that use working_sound.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingSound.html#deactivate_sound Online documentation}
     */
    deactivate_sound?: Sound
    sound_accents?: SoundAccent | readonly SoundAccent[]
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
   * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingSound.html Online documentation}
   */
  export type WorkingSound = WorkingSoundStruct | Sound
  /**
   * Used by crafting machines to display different graphics when the machine is running.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisation.html Online documentation}
   */
  export interface WorkingVisualisation {
    /**
     * **Default:** `"object"`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisation.html#render_layer Online documentation}
     */
    render_layer?: RenderLayer
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisation.html#fadeout Online documentation}
     */
    fadeout?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisation.html#synced_fadeout Online documentation}
     */
    synced_fadeout?: bool
    /**
     * **Default:** `false`
     *
     * Whether the animations are always played at the same speed, not adjusted to the machine speed.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisation.html#constant_speed Online documentation}
     */
    constant_speed?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisation.html#always_draw Online documentation}
     */
    always_draw?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisation.html#animated_shift Online documentation}
     */
    animated_shift?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisation.html#align_to_waypoint Online documentation}
     */
    align_to_waypoint?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisation.html#mining_drill_scorch_mark Online documentation}
     */
    mining_drill_scorch_mark?: bool
    /**
     * Used to determine render order for sprites with the same `render_layer` in the same position. Sprites with a higher `secondary_draw_order` are drawn on top.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisation.html#secondary_draw_order Online documentation}
     */
    secondary_draw_order?: int8
    light?: LightDefinition
    effect?: "flicker" | "uranium-glow" | "none"
    /**
     * Used by {@link CraftingMachinePrototype}. Has precedence over `apply_tint`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisation.html#apply_recipe_tint Online documentation}
     */
    apply_recipe_tint?: "primary" | "secondary" | "tertiary" | "quaternary" | "none"
    /**
     * Used by {@link CraftingMachinePrototype} ("status" and "visual-state-color" only) and {@link MiningDrillPrototype}.
     *
     * For "status" on CraftingMachine and MiningDrill, the colors are specified via {@link WorkingVisualisations#status_colors WorkingVisualisations::status_colors}. For "resource-color", the colors are specified via {@link ResourceEntityPrototype#mining_visualisation_tint ResourceEntityPrototype::mining_visualisation_tint}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisation.html#apply_tint Online documentation}
     */
    apply_tint?:
      | "resource-color"
      | "input-fluid-base-color"
      | "input-fluid-flow-color"
      | "status"
      | "none"
      | "visual-state-color"
    north_animation?: Animation
    east_animation?: Animation
    south_animation?: Animation
    west_animation?: Animation
    north_position?: Vector
    east_position?: Vector
    south_position?: Vector
    west_position?: Vector
    /**
     * **Default:** `Value of `secondary_draw_order``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisation.html#north_secondary_draw_order Online documentation}
     */
    north_secondary_draw_order?: int8
    /**
     * **Default:** `Value of `secondary_draw_order``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisation.html#east_secondary_draw_order Online documentation}
     */
    east_secondary_draw_order?: int8
    /**
     * **Default:** `Value of `secondary_draw_order``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisation.html#south_secondary_draw_order Online documentation}
     */
    south_secondary_draw_order?: int8
    /**
     * **Default:** `Value of `secondary_draw_order``
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisation.html#west_secondary_draw_order Online documentation}
     */
    west_secondary_draw_order?: int8
    /**
     * If defined, animation in this visualisation layer will be used only as mask for fog effect and will not render in world.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisation.html#north_fog_mask Online documentation}
     */
    north_fog_mask?: FogMaskShapeDefinition
    /**
     * If defined, animation in this visualisation layer will be used only as mask for fog effect and will not render in world.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisation.html#east_fog_mask Online documentation}
     */
    east_fog_mask?: FogMaskShapeDefinition
    /**
     * If defined, animation in this visualisation layer will be used only as mask for fog effect and will not render in world.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisation.html#south_fog_mask Online documentation}
     */
    south_fog_mask?: FogMaskShapeDefinition
    /**
     * If defined, animation in this visualisation layer will be used only as mask for fog effect and will not render in world.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisation.html#west_fog_mask Online documentation}
     */
    west_fog_mask?: FogMaskShapeDefinition
    /**
     * Loaded only if at least one of north_fog_mask, east_fog_mask, south_fog_mask, west_fog_mask is not specified.
     *
     * If defined, animation in this visualisation layer will be used only as mask for fog effect and will not render in world.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisation.html#fog_mask Online documentation}
     */
    fog_mask?: FogMaskShapeDefinition
    animation?: Animation
    /**
     * Only loaded if {@link WorkingVisualisations#states WorkingVisualisations::states} is defined in the WorkingVisualisations that loads this.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisation.html#draw_in_states Online documentation}
     */
    draw_in_states?: readonly string[]
    /**
     * **Default:** `true`
     *
     * Only loaded if {@link WorkingVisualisations#states WorkingVisualisations::states} is defined in the WorkingVisualisations that loads this.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisation.html#draw_when_state_filter_matches Online documentation}
     */
    draw_when_state_filter_matches?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisation.html#enabled_by_name Online documentation}
     */
    enabled_by_name?: bool
    /**
     * **Default:** `""`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisation.html#name Online documentation}
     */
    name?: string
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisation.html#enabled_in_animated_shift_during_waypoint_stop Online documentation}
     */
    enabled_in_animated_shift_during_waypoint_stop?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisation.html#enabled_in_animated_shift_during_transition Online documentation}
     */
    enabled_in_animated_shift_during_transition?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisation.html#frame_based_on_shift_animation_progress Online documentation}
     */
    frame_based_on_shift_animation_progress?: bool
    /**
     * Only loaded, and mandatory if `mining_drill_scorch_mark` is `true`. Cannot be larger than `scorch_mark_lifetime`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisation.html#scorch_mark_fade_out_duration Online documentation}
     */
    scorch_mark_fade_out_duration?: uint16
    /**
     * Only loaded, and mandatory if `mining_drill_scorch_mark` is `true`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisation.html#scorch_mark_lifetime Online documentation}
     */
    scorch_mark_lifetime?: uint16
    /**
     * Only loaded, and mandatory if `mining_drill_scorch_mark` is `true`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisation.html#scorch_mark_fade_in_frames Online documentation}
     */
    scorch_mark_fade_in_frames?: uint8
  }
  export interface WorkingVisualisations {
    animation?: Animation4Way
    /**
     * Idle animation must have the same frame count as animation.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisations.html#idle_animation Online documentation}
     */
    idle_animation?: Animation4Way
    /**
     * **Default:** `false`
     *
     * Only loaded if `idle_animation` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisations.html#always_draw_idle_animation Online documentation}
     */
    always_draw_idle_animation?: bool
    default_recipe_tint?: GlobalRecipeTints
    recipe_not_set_tint?: GlobalRecipeTints
    /**
     * At least 2 visual states must be defined or no states at all. At most 32 states may be defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisations.html#states Online documentation}
     */
    states?: readonly VisualState[]
    /**
     * Used to display different animations when the machine is running, for example tinted based on the current recipe.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisations.html#working_visualisations Online documentation}
     */
    working_visualisations?: readonly WorkingVisualisation[]
    /**
     * Only loaded if one of `shift_animation_waypoint_stop_duration` or `shift_animation_transition_duration` is not 0.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisations.html#shift_animation_waypoints Online documentation}
     */
    shift_animation_waypoints?: ShiftAnimationWaypoints
    /**
     * **Default:** `0`
     *
     * Only loaded if `shift_animation_waypoints` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisations.html#shift_animation_waypoint_stop_duration Online documentation}
     */
    shift_animation_waypoint_stop_duration?: uint16
    /**
     * **Default:** `0`
     *
     * Only loaded if `shift_animation_waypoints` is defined.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisations.html#shift_animation_transition_duration Online documentation}
     */
    shift_animation_transition_duration?: uint16
    /**
     * Used by {@link WorkingVisualisation#apply_tint WorkingVisualisation::apply_tint}.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorkingVisualisations.html#status_colors Online documentation}
     */
    status_colors?: StatusColors
  }
  /**
   * Struct type for {@link WorldAmbientSoundDefinition}
   * @see WorldAmbientSoundDefinition
   * @see {@link https://lua-api.factorio.com/2.0.16/types/WorldAmbientSoundDefinition.html Online documentation}
   */
  export interface WorldAmbientSoundDefinitionStruct {
    sound?: Sound
    /**
     * **Default:** `10`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorldAmbientSoundDefinition.html#radius Online documentation}
     */
    radius?: double
    /**
     * **Default:** `5`
     *
     * Has to be less than or equal to `max_entity_count`.
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorldAmbientSoundDefinition.html#min_entity_count Online documentation}
     */
    min_entity_count?: uint32
    /**
     * **Default:** `15`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorldAmbientSoundDefinition.html#max_entity_count Online documentation}
     */
    max_entity_count?: uint32
    /**
     * **Default:** `0.2`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorldAmbientSoundDefinition.html#entity_to_sound_ratio Online documentation}
     */
    entity_to_sound_ratio?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/2.0.16/types/WorldAmbientSoundDefinition.html#average_pause_seconds Online documentation}
     */
    average_pause_seconds?: double
  }
  export type WorldAmbientSoundDefinition = WorldAmbientSoundDefinitionStruct | Sound
  /**
   * A variable type which can have one of two values: `true` or `false`. Wikipedia has a {@linkplain https://en.wikipedia.org/wiki/Boolean comprehensive article} on Booleans.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/bool.html Online documentation}
   */
  export type bool = boolean
  /**
   * Format uses a dot as its decimal delimiter. Doubles are stored in the {@linkplain http://en.wikipedia.org/wiki/Double-precision_floating-point_format double precision} floating point format.
   *
   * May not be {@linkplain https://en.wikipedia.org/wiki/NaN NaN}.
   * @example
   * 7.5
   * 6
   * @see {@link https://lua-api.factorio.com/2.0.16/types/double.html Online documentation}
   */
  export type double = number
  /**
   * Format uses a dot as its decimal delimiter. Floats are stored in the {@linkplain https://en.wikipedia.org/wiki/Single-precision_floating-point_format single precision} floating point format.
   *
   * May not be {@linkplain https://en.wikipedia.org/wiki/NaN NaN}.
   * @example
   * 7.5
   * 6
   * @see {@link https://lua-api.factorio.com/2.0.16/types/float.html Online documentation}
   */
  export type float = number
  /**
   * 16 bit signed integer. Ranges from `-32 768` to `32 767`, or `[-2^15, 2^15-1]`.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/int16.html Online documentation}
   */
  export type int16 = number
  /**
   * 32 bit signed integer. Ranges from `-2 147 483 648` to `2 147 483 647`, or `[-2^31, 2^31-1]`.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/int32.html Online documentation}
   */
  export type int32 = number
  /**
   * 64 bit signed integer.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/int64.html Online documentation}
   */
  export type int64 = number
  /**
   * 8 bit signed integer. Ranges from `-128` to `127`, or `[-2^7, 2^7-1]`.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/int8.html Online documentation}
   */
  export type int8 = number
  /**
   * 16 bit unsigned integer. Ranges from `0` to `65 535`, or `[0, 2^16-1]`.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/uint16.html Online documentation}
   */
  export type uint16 = number
  /**
   * 32 bit unsigned integer. Ranges from `0` to `4 294 967 295`, or `[0, 2^32-1]`.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/uint32.html Online documentation}
   */
  export type uint32 = number
  /**
   * 64 bit unsigned integer.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/uint64.html Online documentation}
   */
  export type uint64 = number
  /**
   * 8 bit unsigned integer. Ranges from `0` to `255`, or `[0, 2^8-1]`.
   * @see {@link https://lua-api.factorio.com/2.0.16/types/uint8.html Online documentation}
   */
  export type uint8 = number
}
