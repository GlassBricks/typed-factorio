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
     */
    equipment: EquipmentID
  }
  export interface ActivityBarStyleSpecification extends BaseStyleSpecification {
    readonly type: "activity_bar_style"
    speed?: float
    bar_width?: uint32
    color?: Color
    bar_background?: Sprite
    bar?: Sprite
    bar_size_ratio?: float
  }
  /**
   * @see MapGenPreset.advanced_settings
   */
  export interface AdvancedMapGenSettings {
    pollution?: MapGenPresetPollutionSettings
    enemy_evolution?: MapGenPresetEnemyEvolutionSettings
    enemy_expansion?: MapGenPresetEnemyExpansionSettings
    difficulty_settings?: MapGenPresetDifficultySettings
  }
  export interface AggregationSpecification {
    max_count: uint32
    /**
     * **Default:** `1`
     *
     * If `count_already_playing` is `true`, this will determine maximum progress when instance is counted toward playing sounds.
     */
    progress_threshold?: float
    remove: bool
    /**
     * **Default:** `false`
     *
     * If `true`, already playing sounds are taken into account when checking `max_count`.
     */
    count_already_playing?: bool
  }
  /**
   * The name of an {@link AmmoCategory}.
   * @example
   * "bullet"
   * @example
   * "melee"
   */
  export type AmmoCategoryID = string
  export interface AmmoDamageModifier extends BaseModifier {
    readonly type: "ammo-damage"
    /**
     * **Default:** `true`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
    /**
     * Name of the {@link AmmoCategory} that is affected.
     */
    ammo_category: AmmoCategoryID
    /**
     * Modification value, which will be added to the current ammo damage modifier upon researching.
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
   */
  export type AmmoSourceType = "default" | "player" | "turret" | "vehicle"
  /**
   * Definition of actual parameters used in attack.
   */
  export interface AmmoType {
    /**
     * Name of a {@link AmmoCategory}. Defines whether the attack will be affected by upgrades.
     */
    category: AmmoCategoryID
    /**
     * Describes actions taken upon attack happening.
     */
    action?: Trigger
    /**
     * **Default:** `false`
     *
     * When true, the gun will be able to shoot even when the target is out of range. Only applies when `target_type` equals `"position"`. The gun will fire at the maximum range in the direction of the target position.
     */
    clamp_position?: bool
    /**
     * Energy consumption of a single shot, if applicable.
     */
    energy_consumption?: Energy
    /**
     * **Default:** `1`
     *
     * Affects the `range` value of the shooting gun prototype's {@link BaseAttackParameters} to give a modified maximum range. The `min_range` value of the gun is unaffected.
     *
     * This has no effect on artillery turrets and wagons even though the bonus appears in the GUI. {@linkplain https://forums.factorio.com/103658 Forum thread}.
     */
    range_modifier?: double
    /**
     * **Default:** `1`
     */
    cooldown_modifier?: double
    /**
     * **Default:** `1`
     */
    consumption_modifier?: float
    /**
     * **Default:** `"entity"`
     *
     * `"entity"` fires at an entity, `"position"` fires directly at a position, `"direction"` fires in a direction.
     *
     * If this is `"entity"`, `clamp_position` is forced to be `false`.
     */
    target_type?: "entity" | "position" | "direction"
    /**
     * Only exists (and is then mandatory) if the {@link AmmoItemPrototype#ammo_type AmmoItemPrototype::ammo_type} this AmmoType is defined on has multiple ammo types.
     *
     * Defines for which kind of entity this ammo type applies. Each entity kind can only be used once per array.
     */
    source_type?: AmmoSourceType
  }
  export interface AndTipTrigger {
    readonly type: "and"
    /**
     * If all of the triggers are fulfilled, this trigger is considered fulfilled.
     */
    triggers: readonly TipTrigger[]
  }
  export interface AnimatedVector {
    /**
     */
    rotations: readonly VectorRotation[]
    /**
     * Default render layer for the rotations.
     */
    render_layer?: RenderLayer
    /**
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
   *   width = 176,
   *   height = 128,
   *   frame_count = 32,
   *   line_length = 8,
   *   shift = {0.03125, -0.15625}
   * }
   * @example
   * -- animation with hr version
   * horizontal_animation =
   * {
   *   filename = "__base__/graphics/entity/steam-engine/steam-engine-H.png",
   *   width = 176,
   *   height = 128,
   *   frame_count = 32,
   *   line_length = 8,
   *   shift = {0.03125, -0.15625},
   *   hr_version =
   *   {
   *     filename = "__base__/graphics/entity/steam-engine/hr-steam-engine-H.png",
   *     width = 352,
   *     height = 257,
   *     frame_count = 32,
   *     line_length = 8,
   *     shift = {0.03125, -0.1484375},
   *     scale = 0.5
   *   }
   * }
   * @example
   * -- animation with layers
   * horizontal_animation =
   * {
   *   layers =
   *   {
   *     {
   *       filename = "__base__/graphics/entity/steam-engine/steam-engine-H.png",
   *       width = 176,
   *       height = 128,
   *       frame_count = 32,
   *       line_length = 8,
   *       shift = {0.03125, -0.15625}
   *     },
   *     {
   *       filename = "__base__/graphics/entity/steam-engine/steam-engine-H-shadow.png",
   *       width = 254,
   *       height = 80,
   *       frame_count = 32,
   *       line_length = 8,
   *       draw_as_shadow = true,
   *       shift = {1.5, 0.75}
   *     }
   *   }
   * }
   */
  export interface Animation extends Omit<AnimationParameters, "filename"> {
    /**
     * If this property is present, all Animation definitions have to be placed as entries in the array, and they will all be loaded from there. `layers` may not be an empty table. Each definition in the array may also have the `layers` property.
     *
     * `animation_speed` and `max_advance` of the first layer are used for all layers. All layers will run at the same speed.
     *
     * If this property is present, all other properties, including those inherited from AnimationParameters, are ignored.
     */
    layers?: readonly Animation[]
    /**
     * Only loaded if `layers` is not defined. Mandatory if `stripes` is not defined.
     *
     * The path to the sprite file to use.
     */
    filename?: FileName
    /**
     * Only loaded if `layers` is not defined.
     *
     * If this property exists and high resolution sprites are turned on, this is used to load the Animation.
     */
    hr_version?: Animation
    /**
     * Only loaded if `layers` is not defined.
     */
    stripes?: readonly Stripe[]
  }
  /**
   * If this is loaded as a single Animation, it applies to all directions.
   */
  export type Animation4Way =
    | {
        north: Animation
        /**
         * Defaults to the north animation.
         */
        east?: Animation
        /**
         * Defaults to the north animation.
         */
        south?: Animation
        /**
         * Defaults to the east animation.
         */
        west?: Animation
      }
    | Animation
  export interface AnimationElement {
    /**
     * **Default:** `"object"`
     */
    render_layer?: RenderLayer
    /**
     * Used to determine render order for sprites with the same `render_layer` in the same position. Sprites with a higher `secondary_draw_order` are drawn on top.
     */
    secondary_draw_order?: int8
    /**
     * **Default:** `true`
     */
    draw_as_sprite?: bool
    /**
     * **Default:** `false`
     */
    draw_as_light?: bool
    /**
     * **Default:** `false`
     */
    apply_tint?: bool
    /**
     * **Default:** `true`
     */
    always_draw?: bool
    animation?: Animation
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
   */
  export type AnimationFrameSequence = readonly uint16[]
  export interface AnimationParameters extends SpriteParameters {
    /**
     * The width and height of one frame. If this is a tuple, the first member of the tuple is the width and the second is the height. Otherwise the size is both width and height. Width and height may only be in the range of 0-8192.
     */
    size?: SpriteSizeType | readonly [SpriteSizeType, SpriteSizeType]
    /**
     * Mandatory if `size` is not defined.
     *
     * Width of one frame in pixels, from 0-8192.
     */
    width?: SpriteSizeType
    /**
     * Mandatory if `size` is not defined.
     *
     * Height of one frame in pixels, from 0-8192.
     */
    height?: SpriteSizeType
    /**
     * **Default:** `"forward"`
     */
    run_mode?: "forward" | "backward" | "forward-then-backward"
    /**
     * **Default:** `1`
     *
     * Can't be `0`.
     */
    frame_count?: uint32
    /**
     * **Default:** `0`
     *
     * Specifies how many pictures are on each horizontal line in the image file. `0` means that all the pictures are in one horizontal line. Once the specified number of pictures are loaded from a line, the pictures from the next line are loaded. This is to allow having longer animations loaded in to Factorio's graphics matrix than the game engine's width limit of 8192px per input file. The restriction on input files is to be compatible with most graphics cards.
     */
    line_length?: uint32
    /**
     * **Default:** `1`
     *
     * Modifier of the animation playing speed, the default of `1` means one animation frame per tick (60 fps). The speed of playing can often vary depending on the usage (output of steam engine for example). Has to be greater than `0`.
     */
    animation_speed?: float
    /**
     * **Default:** `MAX_FLOAT`
     *
     * Maximum amount of frames the animation can move forward in one update. Useful to cap the animation speed on entities where it is variable, such as car animations.
     */
    max_advance?: float
    /**
     * **Default:** `1`
     *
     * How many times to repeat the animation to complete an animation cycle. E.g. if one layer is 10 frames, a second layer of 1 frame would need `repeat_count = 10` to match the complete cycle.
     */
    repeat_count?: uint8
    /**
     * Number of slices this is sliced into when using the "optimized atlas packing" option. If you are a modder, you can just ignore this property. Example: If this is 4, the sprite will be sliced into a 4×4 grid.
     */
    dice?: uint8
    /**
     * Same as `dice` above, but this specifies only how many slices there are on the x axis.
     */
    dice_x?: uint8
    /**
     * Same as `dice` above, but this specifies only how many slices there are on the y axis.
     */
    dice_y?: uint8
    frame_sequence?: AnimationFrameSequence
    /**
     * **Default:** `0`
     *
     * Only loaded if this is an icon, that is it has the flag `"group=icon"` or `"group=gui"`.
     *
     * Note that `mipmap_count` doesn't make sense in an animation, as it is not possible to layout mipmaps in a way that would load both the animation and the mipmaps correctly (besides animations with just one frame). See {@linkplain https://forums.factorio.com/viewtopic.php?p=549058#p549058 here}.
     */
    mipmap_count?: uint8
    /**
     * **Default:** `false`
     *
     * Unused.
     */
    generate_sdf?: bool
  }
  export interface AnimationSheet extends AnimationParameters {
    /**
     * If this property exists and high resolution sprites are turned on, this is used to load the AnimationSheet.
     */
    hr_version?: AnimationSheet
    variation_count: uint32
    /**
     * **Default:** `1`
     */
    frame_count?: uint32
    /**
     * **Default:** `Value of `variation_count``
     */
    line_length?: uint32
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
   *     width = 15,
   *     height = 11,
   *     shift = util.by_pixel(0.5, 0.5),
   *     variation_count = 8,
   *     hr_version =
   *     {
   *       filename = "__base__/graphics/entity/character/hr-footprints.png",
   *       line_length = 2,
   *       frame_count = 2,
   *       width = 30,
   *       height = 22,
   *       shift = util.by_pixel(0.25, 0.25),
   *       scale = 0.5,
   *       variation_count = 8
   *     }
   *   }
   * }
   */
  export type AnimationVariations =
    | {
        /**
         * The variations are arranged vertically in the file, one row for each variation.
         */
        sheet?: AnimationSheet
        /**
         * Only loaded if `sheet` is not defined.
         */
        sheets?: readonly AnimationSheet[]
      }
    | Animation
    | readonly Animation[]
  /**
   * A union of all prototypes. A specific prototype is loaded based on the value of the `type` key.
   *
   * See the {@linkplain https://lua-api.factorio.com/latest/prototypes.html Prototypes page} for more information.
   *
   * ## Union members
   * - {@link PrototypeBase}
   * - {@link AmbientSound}
   * - {@link AnimationPrototype}
   * - {@link EditorControllerPrototype}
   * - {@link FontPrototype}
   * - {@link GodControllerPrototype}
   * - {@link MapGenPresets}
   * - {@link MapSettings}
   * - {@link MouseCursor}
   * - {@link SoundPrototype}
   * - {@link SpectatorControllerPrototype}
   * - {@link SpritePrototype}
   * - {@link TileEffectDefinition}
   * - {@link TipsAndTricksItemCategory}
   * - {@link TriggerTargetType}
   * - {@link WindSound}
   */
  export type AnyPrototype =
    | PrototypeBase
    | AmbientSound
    | AnimationPrototype
    | EditorControllerPrototype
    | FontPrototype
    | GodControllerPrototype
    | MapGenPresets
    | MapSettings
    | MouseCursor
    | SoundPrototype
    | SpectatorControllerPrototype
    | SpritePrototype
    | TileEffectDefinition
    | TipsAndTricksItemCategory
    | TriggerTargetType
    | WindSound
  export interface AreaTriggerItem extends TriggerItem {
    readonly type: "area"
    radius: double
    /**
     * **Default:** `false`
     */
    trigger_from_target?: bool
    /**
     * **Default:** `true`
     */
    target_entities?: bool
    /**
     * **Default:** `true`
     */
    show_in_tooltip?: bool
    /**
     * **Default:** `"distance-from-collision-box"`
     */
    collision_mode?: "distance-from-collision-box" | "distance-from-center"
  }
  export interface ArtilleryRangeModifier extends SimpleModifier {
    readonly type: "artillery-range"
    /**
     * **Default:** `false`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  export interface ArtilleryRemoteCapsuleAction {
    readonly type: "artillery-remote"
    /**
     * Name of an {@link ArtilleryFlarePrototype}.
     */
    flare: EntityID
    /**
     * **Default:** `true`
     */
    play_sound_on_failure?: bool
  }
  export interface ArtilleryTriggerDelivery extends TriggerDeliveryItem {
    readonly type: "artillery"
    /**
     * Name of a {@link ArtilleryProjectilePrototype}.
     */
    projectile: EntityID
    starting_speed: float
    /**
     * **Default:** `0`
     */
    starting_speed_deviation?: float
    /**
     * **Default:** `0`
     *
     * Maximum deviation of the projectile from source orientation, in +/- (`x radians / 2`). Example: `3.14 radians -> +/- (180° / 2)`, meaning up to 90° deviation in either direction of rotation.
     */
    direction_deviation?: float
    /**
     * **Default:** `0`
     */
    range_deviation?: float
    /**
     * **Default:** `false`
     */
    trigger_fired_artillery?: bool
  }
  /**
   * Loaded as one of the {@link BaseAttackParameters} extensions, based on the value of the `type` key.
   *
   * ## Union members
   * - {@link ProjectileAttackParameters}: Loaded when the `type` is `"projectile"`.
   * - {@link BeamAttackParameters}: Loaded when the `type` is `"beam"`.
   * - {@link StreamAttackParameters}: Loaded when the `type` is `"stream"`.
   */
  export type AttackParameters = ProjectileAttackParameters | BeamAttackParameters | StreamAttackParameters
  export interface AttackReactionItem {
    range: float
    action?: Trigger
    /**
     * **Default:** `0`
     */
    reaction_modifier?: float
    damage_type?: DamageTypeID
  }
  /**
   * The name of an {@link AutoplaceControl}.
   * @example
   * "copper-ore"
   * @example
   * "trees"
   */
  export type AutoplaceControlID = string
  export interface AutoplacePeak {
    /**
     * **Default:** `1`
     *
     * Influence multiplier.
     *
     * Influence is calculated as a sum of influences of peaks. Influence of a peak is obtained by calculating a distance from each of its dimensions and sum of these individual distances is used as a distance from optimal conditions. Based on this distance a peak gets influence between -1 and 1. This is then multiplied by the noise function, if it is specified, and by the `influence` constant (or by `influence` + `richness_influence` if calculating richness). Finally this value is clamped to a range between `min_influence` and `max_influence`.
     *
     * When {@link AutoplaceSpecification#starting_area_amount AutoplaceSpecification::starting_area_amount} is non-zero a position in starting area is selected and a blob is placed centered on this position. Influence is then a maximum of the default calculated value and a value obtained from this blob.
     */
    influence?: double
    /**
     * **Default:** `min double`
     *
     * Minimal influence (after all calculations) of current peak. See `influence`.
     */
    min_influence?: double
    /**
     * **Default:** `max double`
     *
     * Maximal influence (after all calculations) of current peak. See `influence`.
     */
    max_influence?: double
    /**
     * **Default:** `0`
     *
     * Bonus for influence multiplier when calculating richness. See `influence`.
     */
    richness_influence?: double
    /**
     * **Default:** `""`
     *
     * Name of {@link NoiseLayer} to use for this peak. If empty, then no noise is added to this peak.
     *
     * A peak may have a noise multiplied with its influence. Intended use is to have noise layers separate for different types of objects that might appear (trees-12 vs enemy-base).
     */
    noise_layer?: NoiseLayerID
    /**
     * **Default:** `0.5`
     *
     * Must be between 0 and 1. Persistence of the noise.
     */
    noise_persistence?: double
    /**
     * **Default:** `0`
     *
     * Difference between number of octaves of the world and of the noise.
     */
    noise_octaves_difference?: double
    /**
     * **Default:** `1`
     */
    noise_scale?: double
    /**
     * Optimal value of starting_area_weight. If starting_area_weight is close to this value, peak influence is 1.
     *
     * starting_area_weight corresponds to the `starting_area_weight` {@link BaseNamedNoiseExpressions noise expression}.
     */
    starting_area_weight_optimal?: double
    /**
     * **Default:** `0`
     *
     * Distance from the optimal parameters that is still considered optimal.
     *
     * Only loaded if `starting_area_weight_optimal` is defined.
     */
    starting_area_weight_range?: double
    /**
     * Distance from the optimal parameters that get influence of -1.
     *
     * Only loaded if `starting_area_weight_optimal` is defined.
     */
    starting_area_weight_max_range?: double
    /**
     * **Default:** `max double`
     *
     * Limit distance from the optimum on a single (positive) side. This is pure magic.
     *
     * Only loaded if `starting_area_weight_optimal` is defined.
     */
    starting_area_weight_top_property_limit?: double
    /**
     * Optimal value of elevation. If elevation is close to this value, peak influence is 1.
     *
     * elevation corresponds to the `elevation` {@link BaseNamedNoiseExpressions noise expression}.
     */
    elevation_optimal?: double
    /**
     * **Default:** `0`
     *
     * Distance from the optimal parameters that is still considered optimal.
     *
     * Only loaded if `elevation_optimal` is defined.
     */
    elevation_range?: double
    /**
     * Distance from the optimal parameters that get influence of -1.
     *
     * Only loaded if `elevation_optimal` is defined.
     */
    elevation_max_range?: double
    /**
     * **Default:** `max double`
     *
     * Limit distance from the optimum on a single (positive) side. This is pure magic.
     *
     * Only loaded if `elevation_optimal` is defined.
     */
    elevation_top_property_limit?: double
    /**
     * Optimal value of water. If water is close to this value, peak influence is 1.
     *
     * water corresponds to the `moisture` {@link BaseNamedNoiseExpressions noise expression}.
     */
    water_optimal?: double
    /**
     * **Default:** `0`
     *
     * Distance from the optimal parameters that is still considered optimal.
     *
     * Only loaded if `water_optimal` is defined.
     */
    water_range?: double
    /**
     * Distance from the optimal parameters that get influence of -1.
     *
     * Only loaded if `water_optimal` is defined.
     */
    water_max_range?: double
    /**
     * **Default:** `max double`
     *
     * Limit distance from the optimum on a single (positive) side. This is pure magic.
     *
     * Only loaded if `water_optimal` is defined.
     */
    water_top_property_limit?: double
    /**
     * Optimal value of temperature. If temperature is close to this value, peak influence is 1.
     *
     * temperature corresponds to the `temperature` {@link BaseNamedNoiseExpressions noise expression}.
     */
    temperature_optimal?: double
    /**
     * **Default:** `0`
     *
     * Distance from the optimal parameters that is still considered optimal.
     *
     * Only loaded if `temperature_optimal` is defined.
     */
    temperature_range?: double
    /**
     * Distance from the optimal parameters that get influence of -1.
     *
     * Only loaded if `temperature_optimal` is defined.
     */
    temperature_max_range?: double
    /**
     * **Default:** `max double`
     *
     * Limit distance from the optimum on a single (positive) side. This is pure magic.
     *
     * Only loaded if `temperature_optimal` is defined.
     */
    temperature_top_property_limit?: double
    /**
     * Optimal value of aux. If aux is close to this value, peak influence is 1.
     *
     * aux corresponds to the `aux` {@link BaseNamedNoiseExpressions noise expression}.
     */
    aux_optimal?: double
    /**
     * **Default:** `0`
     *
     * Distance from the optimal parameters that is still considered optimal.
     *
     * Only loaded if `aux_optimal` is defined.
     */
    aux_range?: double
    /**
     * Distance from the optimal parameters that get influence of -1.
     *
     * Only loaded if `aux_optimal` is defined.
     */
    aux_max_range?: double
    /**
     * **Default:** `max double`
     *
     * Limit distance from the optimum on a single (positive) side. This is pure magic.
     *
     * Only loaded if `aux_optimal` is defined.
     */
    aux_top_property_limit?: double
    /**
     * Optimal value of tier_from_start. If tier_from_start is close to this value, peak influence is 1.
     *
     * tier_from_start corresponds to the `tier_from_start` {@link BaseNamedNoiseExpressions noise expression}.
     */
    tier_from_start_optimal?: double
    /**
     * **Default:** `0`
     *
     * Distance from the optimal parameters that is still considered optimal.
     *
     * Only loaded if `tier_from_start_optimal` is defined.
     */
    tier_from_start_range?: double
    /**
     * Distance from the optimal parameters that get influence of -1.
     *
     * Only loaded if `tier_from_start_optimal` is defined.
     */
    tier_from_start_max_range?: double
    /**
     * **Default:** `max double`
     *
     * Limit distance from the optimum on a single (positive) side. This is pure magic.
     *
     * Only loaded if `tier_from_start_optimal` is defined.
     */
    tier_from_start_top_property_limit?: double
    /**
     * Optimal value of distance. If distance is close to this value, peak influence is 1.
     *
     * distance corresponds to the `distance` {@link BaseNamedNoiseExpressions noise expression}.
     */
    distance_optimal?: double
    /**
     * **Default:** `0`
     *
     * Distance from the optimal parameters that is still considered optimal.
     *
     * Only loaded if `distance_optimal` is defined.
     */
    distance_range?: double
    /**
     * Distance from the optimal parameters that get influence of -1.
     *
     * Only loaded if `distance_optimal` is defined.
     */
    distance_max_range?: double
    /**
     * **Default:** `max double`
     *
     * Limit distance from the optimum on a single (positive) side. This is pure magic.
     *
     * Only loaded if `distance_optimal` is defined.
     */
    distance_top_property_limit?: double
  }
  export interface AutoplaceSettings {
    /**
     * Whether missing autoplace names for this type should be default enabled.
     */
    treat_missing_as_default?: bool
    /**
     * Overrides the FrequencySizeRichness provided to the {@link AutoplaceSpecification} of the entity/tile/decorative. Takes priority over the FrequencySizeRichness set in the {@link AutoplaceSpecification#control autoplace control}.
     */
    settings?: Record<EntityID | TileID | DecorativeID, FrequencySizeRichness>
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
   */
  export type AutoplaceSpecification =
    | {
        /**
         * **Default:** `""`
         *
         * Name of the {@link AutoplaceControl} (row in the map generator GUI) that applies to this entity.
         */
        control?: AutoplaceControlID
        /**
         * **Default:** `true`
         *
         * Indicates whether the thing should be placed even if {@link MapGenSettings} do not provide frequency/size/richness for it. (either for the specific prototype or for the control named by AutoplaceSpecification.control).
         *
         * If true, normal frequency/size/richness (`value=1`) are used in that case. Otherwise it is treated as if 'none' were selected.
         */
        default_enabled?: bool
        /**
         * **Default:** `"neutral"`
         *
         * Force of the placed entity. Can be a custom force name. Only relevant for {@link EntityWithOwnerPrototype}.
         */
        force?: "enemy" | "player" | "neutral" | string
        /**
         * **Default:** `""`
         *
         * Order for placing the entity (has no effect when placing tiles). Entities whose order compares less are placed earlier (this influences placing multiple entities which collide with itself), from entities with equal order string only one with the highest probability is placed.
         */
        order?: Order
        /**
         * **Default:** `1`
         *
         * For entities and decoratives, how many times to attempt to place on each tile. Probability and collisions are taken into account each attempt.
         */
        placement_density?: uint32
        /**
         * Restricts tiles or tile transitions the entity can appear on.
         */
        tile_restriction?: readonly TileIDRestriction[]
        /**
         * If specified, provides a noise expression that will be evaluated at every point on the map to determine probability.
         *
         * If left blank, probability is determined by the `peaks` system based on the properties listed below.
         */
        probability_expression?: NoiseExpression
        /**
         * If specified, provides a noise expression that will be evaluated to determine richness.
         *
         * If probability_expression is specified and `richness_expression` is not, then `probability_expression` will be used as the richness expression.
         *
         * If neither are specified, then probability and richness are both determined by the `peaks` system based on the properties listed below.
         */
        richness_expression?: NoiseExpression
        peaks?: readonly AutoplacePeak[]
        /**
         * **Default:** `0`
         *
         * Parameter of the sharpness filter for post-processing probability of entity placement. Value of `0` disables the filter, with value `1`, the filter is a step function centered around `0.5`.
         *
         * ![Example of sharpness filter with value 0.5.](https://lua-api.factorio.com/latest/static/images/AutoplaceSpecification_sharpness.png)
         */
        sharpness?: double
        /**
         * **Default:** `1`
         *
         * Multiplier for output of the sharpness filter.
         *
         * Probability is calculated as `max_probability * sharpness_filter(sum of influences and size modifier from GUI) - random(0, random_probability_penalty)`.
         */
        max_probability?: double
        /**
         * **Default:** `0`
         *
         * Base Richness. It is calculated as `sum of influences * (richness_multiplier + distance * richness_multiplier_distance_bonus) + richness_base`.
         *
         * Note, that when calculating richness, influences of individual peaks use {@link AutoplacePeak#richness_influence AutoplacePeak::richness_influence} bonus.
         */
        richness_base?: double
        /**
         * **Default:** `0`
         *
         * See `richness_base`.
         */
        richness_multiplier?: double
        /**
         * **Default:** `0`
         *
         * Bonus to richness multiplier per tile of distance from starting point. See `richness_base`.
         */
        richness_multiplier_distance_bonus?: double
        /**
         * **Default:** `0`
         *
         * A random value between `0` and this number is subtracted from a probability after sharpness filter. Only works for entities.
         */
        random_probability_penalty?: double
        /**
         * **Default:** `Calculated from existing peaks.`
         *
         * Sets a fraction of surface that should be covered by this item.
         */
        coverage?: double
        /**
         * **Default:** `0`
         *
         * If this value is non zero, influence of this entity will be calculated differently in starting area: For each entity with this parameter a position in starting area is selected and a blob is placed centered on this position. The central tile of this blob will have approximately amount of resources selected by this value.
         *
         * See {@link AutoplacePeak#influence AutoplacePeak::influence} for the general influence calculation.
         */
        starting_area_amount?: uint32
        /**
         * **Default:** `10`
         *
         * See `starting_area_amount`. Controls approximate radius of the blob in tiles.
         */
        starting_area_size?: uint32
      }
    | AutoplacePeak
  /**
   * The abstract base of all {@link AttackParameters}.
   */
  export interface BaseAttackParameters {
    /**
     * Before an entity can attack, the distance (in tiles) between the entity and target must be less than or equal to this.
     */
    range: float
    /**
     * Number of ticks in which it will be possible to shoot again. If < 1, multiple shots can be performed in one tick.
     */
    cooldown: float
    /**
     * **Default:** `0`
     *
     * The minimum distance (in tiles) between an entity and target. If a unit's target is less than this, the unit will attempt to move away before attacking. A {@linkplain https://wiki.factorio.com/Flamethrower_turret flamethrower turret} does not move, but has a minimum range. Less than this, it is unable to target an enemy.
     */
    min_range?: float
    /**
     * **Default:** `1`
     *
     * If this is <= 0, it is set to 1. Arc from 0 to 1, so for example 0.25 is 90°. Used by the {@linkplain https://wiki.factorio.com/Flamethrower_turret flamethrower turret} in the base game. Arcs greater than 0.5 but less than 1 will be clamped to 0.5 as targeting in arcs larger than half circle is {@linkplain https://forums.factorio.com/94654 not implemented}.
     */
    turn_range?: float
    /**
     * **Default:** `0`
     *
     * Used when searching for the nearest enemy, when this is > 0, enemies that aren't burning are preferred over burning enemies. Definition of "burning" for this: Entity has sticker attached to it, and the sticker has a {@link StickerPrototype#spread_fire_entity spread_fire_entity} set.
     */
    fire_penalty?: float
    /**
     * **Default:** `0`
     *
     * A higher penalty will discourage turrets from targeting units that would take longer to turn to face.
     */
    rotate_penalty?: float
    /**
     * **Default:** `0`
     *
     * A higher penalty will discourage turrets from targeting units with higher health. A negative penalty will encourage turrets to target units with higher health.
     */
    health_penalty?: float
    /**
     * **Default:** `"center-to-center"`
     */
    range_mode?: "center-to-center" | "bounding-box-to-bounding-box"
    /**
     * **Default:** `equal to `range` property`
     *
     * If less than `range`, the entity will choose a random distance between `range` and `min_attack_distance` and attack from that distance.
     */
    min_attack_distance?: float
    /**
     * **Default:** `1`
     */
    damage_modifier?: float
    /**
     * **Default:** `1`
     *
     * Must be greater than or equal to `0`.
     */
    ammo_consumption_modifier?: float
    /**
     * **Default:** `0`
     *
     * Must be between `0` and `1`.
     */
    cooldown_deviation?: float
    /**
     * **Default:** `0`
     *
     * Number of ticks it takes for the weapon to actually shoot after the order for shooting has been made. This also allows to "adjust" the shooting animation to the effect of shooting.
     *
     * {@link CapsuleAction CapsuleActions} cannot have attack parameters with non-zero warmup.
     */
    warmup?: uint32
    /**
     * **Default:** `0`
     *
     * Setting this to anything but zero causes homing projectiles to aim for the predicted location based on enemy movement instead of the current enemy location.
     * @example
     * -- this is same as particle horizontal speed of flamethrower fire stream
     * lead_target_for_projectile_speed = 0.2* 0.75 * 1.5
     */
    lead_target_for_projectile_speed?: float
    /**
     * **Default:** `equal to `cooldown` property`
     */
    movement_slow_down_cooldown?: float
    /**
     * **Default:** `1`
     */
    movement_slow_down_factor?: double
    /**
     * Can be mandatory.
     */
    ammo_type?: AmmoType
    /**
     * **Default:** `"shoot"`
     *
     * Used in tooltips to set the tooltip category. It is also used to get the locale keys for activation instructions and speed of the action for the tooltip.
     *
     * For example, an activation_type of "throw" will result in the tooltip category "thrown" and the tooltip locale keys "gui.instruction-to-throw" and "description.throwing-speed".
     */
    activation_type?: "shoot" | "throw" | "consume" | "activate"
    /**
     * Played once at the start of the attack if these are {@link ProjectileAttackParameters}.
     */
    sound?: LayeredSound
    animation?: RotatedAnimation
    /**
     * Played during the attack.
     */
    cyclic_sound?: CyclicSound
    /**
     * **Default:** `false`
     */
    use_shooter_direction?: bool
    ammo_categories?: readonly AmmoCategoryID[]
    /**
     * Mandatory if both `ammo_type` and `ammo_categories` are not defined.
     */
    ammo_category?: AmmoCategoryID
  }
  /**
   * The abstract base of all {@link EnergySource EnergySources}. Specifies the way an entity gets its energy.
   */
  export interface BaseEnergySource {
    /**
     * **Default:** `0`
     *
     * The pollution an entity emits per minute at full energy consumption. This is exactly the value that is shown in the entity tooltip.
     */
    emissions_per_minute?: double
    /**
     * **Default:** `true`
     *
     * Whether to render the "no power" icon if the entity is low on power. Also applies to the "no fuel" icon when using burner energy sources.
     *
     * ![](https://lua-api.factorio.com/latest/static/images/no_power_icon.png)
     */
    render_no_power_icon?: bool
    /**
     * **Default:** `true`
     *
     * Whether to render the "no network" icon if the entity is not connected to an electric network.
     *
     * ![](https://lua-api.factorio.com/latest/static/images/no_network_icon.png)
     */
    render_no_network_icon?: bool
  }
  /**
   * The abstract base of all {@link Modifier Modifiers}.
   */
  export interface BaseModifier {
    /**
     * Can't be an empty array.
     */
    icons?: readonly IconData[]
    /**
     * Path to the icon file.
     *
     * Only loaded if `icons` is not defined.
     */
    icon?: FileName
    /**
     * The size of the square icon, in pixels. E.g. `32` for a 32px by 32px icon.
     *
     * Only loaded if `icons` is not defined, or if `icon_size` is not specified for all instances of `icons`.
     */
    icon_size?: SpriteSizeType
    /**
     * **Default:** `0`
     *
     * Icons of reduced size will be used at decreased scale.
     */
    icon_mipmaps?: IconMipMapType
  }
  /**
   * A list of notable {@link NamedNoiseExpression NamedNoiseExpressions} defined in the base game. A list of all named noise expression defined in the base game can be found {@linkplain https://wiki.factorio.com/Data.raw#noise-expression here}.
   *
   * Note that the named noise expressions are all defined in Lua, so mods may remove or change the notable expressions listed here, or change how they are used in the map generation.
   *
   * ## Union members
   * - `"distance"`: `noise.distance_from(noise.var("x"), noise.var("y"), noise.var("starting_positions"))`, so the distance from the closest starting position. distance is never `< 0`.
   * - `"tier_from_start"`: `noise.max(0.0, noise.var("distance") - noise.var("starting_area_radius")) / noise.var("starting_area_radius")`
   * - `"tier"`: `noise.var("tier_from_start")`, so same as `tier_from_start`.
   * - `"starting_area_weight"`: `1 - noise.min(1.0, noise.var("tier_from_start") / 2.0)`
   * - `"moisture"`: A value between `0` and `1` that determines whether a tile becomes sandy (low moisture) or grassy (high moisture).
   * - `"aux"`: A value between `0` and `1` that determines whether low-moisture tiles become sand or red desert.
   * - `"temperature"`: Provides a value (vaguely representing degrees Celsius, varying between `-20` and `50`) that is used (together with moisture and aux) as part of tree and decorative placement.
   * - `"elevation"`: Tiles values less than zero become water. Cliffs are placed along certain contours according to {@link CliffPlacementSettings}.
   * - `"cliffiness"`: Determines whether (when `>0.5`) or not (when `<0.5`) a cliff will be placed at an otherwise suitable (according to {@link CliffPlacementSettings}) location.
   * - `"enemy-base-intensity"`: Is referenced by both `enemy-base-frequency` and `enemy-base-radius`. If this is overridden, enemy base frequency and size will both be affected and do something reasonable. By default, this expression returns a value proportional to distance from any starting point, clamped at about `7`.
   * - `"enemy-base-frequency"`: Represents average number of enemy bases per tile for a region, by default in terms of `enemy-base-intensity`.
   * - `"enemy-base-radius"`: Represents the radius of an enemy base, if one were to be placed on the given tile, by default proportional to a constant plus `enemy-base-intensity`.
   */
  export type BaseNamedNoiseExpressions =
    | "distance"
    | "tier_from_start"
    | "tier"
    | "starting_area_weight"
    | "moisture"
    | "aux"
    | "temperature"
    | "elevation"
    | "cliffiness"
    | "enemy-base-intensity"
    | "enemy-base-frequency"
    | "enemy-base-radius"
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
   */
  export interface BaseStyleSpecification {
    /**
     * Name of a {@link StyleSpecification}. This style inherits all property values from its parent.
     *
     * Styles without a parent property default to the root style for their type. The exception to this are the root styles themselves, as they cannot have a parent set. Due to this, for root styles, some style properties are mandatory and behavior may be unexpected, such as an element not showing up because its size defaults to `0`.
     */
    parent?: string
    /**
     * **Default:** `"left"`
     */
    horizontal_align?: HorizontalAlign
    /**
     * **Default:** `"top"`
     */
    vertical_align?: VerticalAlign
    ignored_by_search?: bool
    never_hide_by_search?: bool
    /**
     * **Default:** `"auto"`
     */
    horizontally_stretchable?: StretchRule
    /**
     * **Default:** `"auto"`
     */
    vertically_stretchable?: StretchRule
    /**
     * **Default:** `"auto"`
     */
    horizontally_squashable?: StretchRule
    /**
     * **Default:** `"auto"`
     */
    vertically_squashable?: StretchRule
    /**
     * If this is a tuple, the first member sets `natural_width` and the second sets `natural_height`. Otherwise, both `natural_width` and `natural_height` are set to the same value.
     */
    natural_size?: uint32 | readonly [uint32, uint32]
    /**
     * If this is a tuple, the first member sets `width`, and the second sets `height`. Otherwise, both `width` and `height` are set to the same value.
     */
    size?: uint32 | readonly [uint32, uint32]
    /**
     * Sets `minimal_width`, `maximal_width` and `natural_width` to the same value.
     */
    width?: uint32
    /**
     * **Default:** `0`
     *
     * Minimal width ensures that the widget will never be smaller than than that size. It can't be squashed to be smaller.
     */
    minimal_width?: uint32
    /**
     * **Default:** `0`
     *
     * Maximal width ensures that the widget will never be bigger than than that size. It can't be stretched to be bigger.
     */
    maximal_width?: uint32
    /**
     * **Default:** `0`
     *
     * Natural width specifies the width of the element tries to have, but it can still be squashed/stretched to have a different size.
     */
    natural_width?: uint32
    /**
     * Sets `minimal_height`, `maximal_height` and `natural_height` to the same value.
     */
    height?: uint32
    /**
     * **Default:** `0`
     *
     * Minimal height ensures that the widget will never be smaller than than that size. It can't be squashed to be smaller.
     */
    minimal_height?: uint32
    /**
     * **Default:** `0`
     *
     * Maximal height ensures that the widget will never be bigger than than that size. It can't be stretched to be bigger.
     */
    maximal_height?: uint32
    /**
     * **Default:** `0`
     *
     * Natural height specifies the height of the element tries to have, but it can still be squashed/stretched to have a different size.
     */
    natural_height?: uint32
    /**
     * Sets `top_padding`, `right_padding`, `bottom_padding` and `left_padding` to the same value.
     */
    padding?: int16
    /**
     * **Default:** `0`
     */
    top_padding?: int16
    /**
     * **Default:** `0`
     */
    right_padding?: int16
    /**
     * **Default:** `0`
     */
    bottom_padding?: int16
    /**
     * **Default:** `0`
     */
    left_padding?: int16
    /**
     * Sets `top_margin`, `right_margin`, `bottom_margin` and `left_margin` to the same value.
     */
    margin?: int16
    /**
     * **Default:** `0`
     */
    top_margin?: int16
    /**
     * **Default:** `0`
     */
    right_margin?: int16
    /**
     * **Default:** `0`
     */
    bottom_margin?: int16
    /**
     * **Default:** `0`
     */
    left_margin?: int16
    /**
     * Name of a custom GUI effect, which are hard-coded in the game's engine. Only has one option currently.
     *
     * ## Union members
     * - `"compilatron-hologram"`
     */
    effect?: "compilatron-hologram"
    /**
     * **Default:** `1`
     */
    effect_opacity?: float
    tooltip?: LocalisedString
  }
  export interface BeaconGraphicsSet {
    /**
     * **Default:** `true`
     */
    draw_animation_when_idle?: bool
    /**
     * **Default:** `false`
     */
    draw_light_when_idle?: bool
    /**
     * **Default:** `false`
     */
    random_animation_offset?: bool
    /**
     * **Default:** `false`
     */
    module_icons_suppressed?: bool
    /**
     * **Default:** `"object"`
     */
    base_layer?: RenderLayer
    /**
     * **Default:** `"object"`
     */
    animation_layer?: RenderLayer
    /**
     * **Default:** `"object"`
     */
    top_layer?: RenderLayer
    /**
     * **Default:** `1`
     */
    animation_progress?: float
    /**
     * **Default:** `0`
     */
    min_animation_progress?: float
    /**
     * **Default:** `1000`
     */
    max_animation_progress?: float
    /**
     * **Default:** `"none"`
     *
     * Which tint set in {@link ModulePrototype#beacon_tint ModulePrototype::beacon_tint} should be applied to this, if any.
     */
    apply_module_tint?: ModuleTint
    /**
     * **Default:** `"none"`
     *
     * Which tint set in {@link ModulePrototype#beacon_tint ModulePrototype::beacon_tint} should be applied to the light, if any.
     */
    apply_module_tint_to_light?: ModuleTint
    /**
     * **Default:** `no color`
     */
    no_modules_tint?: Color
    animation_list?: readonly AnimationElement[]
    light?: LightDefinition
    /**
     * The visualisations available for displaying the modules in the beacon. The visualisation is chosen based on art style, see {@link BeaconModuleVisualizations#art_style BeaconModuleVisualizations::art_style} and {@link ModulePrototype#art_style ModulePrototype::art_style}.
     */
    module_visualisations?: readonly BeaconModuleVisualizations[]
    /**
     * **Default:** `"single-module"`
     */
    module_tint_mode?: "single-module" | "mix"
  }
  export interface BeaconModuleVisualization {
    /**
     * **Default:** `false`
     */
    has_empty_slot?: bool
    /**
     * **Default:** `false`
     */
    draw_as_light?: bool
    /**
     * **Default:** `true`
     */
    draw_as_sprite?: bool
    /**
     * **Default:** `0`
     *
     * Used to determine render order for sprites with the same `render_layer` in the same position. Sprites with a higher `secondary_draw_order` are drawn on top.
     */
    secondary_draw_order?: int8
    /**
     * **Default:** `"none"`
     *
     * Which tint set in {@link ModulePrototype#beacon_tint ModulePrototype::beacon_tint} should be applied to this, if any.
     */
    apply_module_tint?: ModuleTint
    /**
     * **Default:** `"object"`
     */
    render_layer?: RenderLayer
    pictures?: SpriteVariations
  }
  export interface BeaconModuleVisualizations {
    /**
     * The visualization is chosen based on the {@link ModulePrototype#art_style ModulePrototype::art_style}, meaning if module art style equals beacon module visualization art style then this visualization is chosen. Vanilla uses `"vanilla"` here.
     */
    art_style: string
    /**
     * **Default:** `false`
     */
    use_for_empty_slots?: bool
    /**
     * **Default:** `0`
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
     */
    slots?: readonly (readonly BeaconModuleVisualization[])[]
  }
  /**
   * @see ModulePrototype.beacon_tint
   */
  export interface BeaconVisualizationTints {
    /**
     * **Default:** `no color`
     */
    primary?: Color
    /**
     * **Default:** `no color`
     */
    secondary?: Color
    /**
     * **Default:** `no color`
     */
    tertiary?: Color
    /**
     * **Default:** `no color`
     */
    quaternary?: Color
  }
  export interface BeamAnimationSet {
    start?: Animation
    ending?: Animation
    head?: Animation
    tail?: Animation
    body?: AnimationVariations
  }
  export interface BeamAttackParameters extends BaseAttackParameters {
    readonly type: "beam"
    /**
     * **Default:** `0`
     */
    source_direction_count?: uint32
    source_offset?: Vector
  }
  export interface BeamTriggerDelivery extends TriggerDeliveryItem {
    readonly type: "beam"
    /**
     * Name of a {@link BeamPrototype}.
     */
    beam: EntityID
    /**
     * **Default:** `true`
     */
    add_to_shooter?: bool
    /**
     * **Default:** `0`
     */
    max_length?: uint32
    /**
     * **Default:** `0`
     */
    duration?: uint32
    source_offset?: Vector
  }
  export interface BeltTraverseTipTrigger {
    readonly type: "belt-traverse"
    /**
     * **Default:** `1`
     */
    count?: uint32
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
   */
  export type BlendMode =
    | "normal"
    | "additive"
    | "additive-soft"
    | "multiplicative"
    | "multiplicative-with-alpha"
    | "overwrite"
  /**
   * The table itself is required, but it can be empty.
   * @see BoilerPrototype.fire
   */
  export interface BoilerFire {
    north?: Animation
    east?: Animation
    south?: Animation
    west?: Animation
  }
  /**
   * The table itself is required, but it can be empty.
   * @see BoilerPrototype.fire_glow
   */
  export interface BoilerFireGlow {
    north?: Animation
    east?: Animation
    south?: Animation
    west?: Animation
  }
  /**
   * @see BoilerPrototype.patch
   */
  export interface BoilerPatch {
    north?: Sprite
    east?: Sprite
    south?: Sprite
    west?: Sprite
  }
  /**
   * @see BoilerPrototype.structure
   */
  export interface BoilerStructure {
    north: Animation
    east: Animation
    south: Animation
    west: Animation
  }
  /**
   * @see UtilityConstants.bonus_gui_ordering
   */
  export interface BonusGuiOrdering {
    artillery_range: Order
    worker_robots: Order
    character: Order
    follower_robots: Order
    research_speed: Order
    inserter: Order
    stack_inserter: Order
    turret_attack: Order
    mining_productivity: Order
    train_braking_force: Order
  }
  export interface BoolModifier extends BaseModifier {
    /**
     * The value this modifier will have upon researching.
     */
    modifier: bool
  }
  export interface BorderImageSet {
    /**
     * **Default:** `1`
     */
    scale?: double
    /**
     * **Default:** `0`
     */
    border_width?: uint32
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
   * BoundingBoxes are typically centered around the position of an entity.
   *
   * The first position is leftTop, the second position is rightBottom. There is an unused third member, a {@link float} that represents the orientation.
   *
   * Positive x goes towards east, positive y goes towards south. This means that the upper-left point is the least dimension in x and y, and lower-right is the greatest.
   * @example
   * {{-0.4, -0.4}, {0.4, 0.4}}
   */
  export type BoundingBox = readonly [MapPosition, MapPosition]
  /**
   * A cursor box, for use in {@link UtilitySprites}.
   */
  export interface BoxSpecification {
    sprite: Sprite
    /**
     * **Default:** `false`
     *
     * Whether this is a complete box or just the top left corner. If this is true, `side_length` and `side_height` must be present. Otherwise `max_side_length` must be present.
     */
    is_whole_box?: bool
    /**
     * Only loaded, and mandatory if `is_whole_box` is `true`.
     */
    side_length?: double
    /**
     * Only loaded, and mandatory if `is_whole_box` is `true`.
     */
    side_height?: double
    /**
     * Only loaded, and mandatory if `is_whole_box` is `false`.
     */
    max_side_length?: double
  }
  export interface BuildEntityTipTrigger {
    readonly type: "build-entity"
    /**
     * **Default:** `1`
     */
    count?: uint32
    entity?: EntityID
    /**
     * **Default:** `false`
     */
    match_type_only?: bool
    build_by_dragging?: bool
    /**
     * **Default:** `false`
     *
     * Building is considered consecutive when the built entity is the same as the last built entity.
     */
    consecutive?: bool
    /**
     * **Default:** `false`
     */
    linear_power_pole_line?: bool
    /**
     * **Default:** `false`
     */
    build_in_line?: bool
  }
  export interface BurnerEnergySource extends BaseEnergySource {
    /**
     * This is only loaded, and mandatory if the energy source can be loaded as multiple energy source types.
     */
    readonly type?: "burner"
    fuel_inventory_size: ItemStackIndex
    /**
     * **Default:** `0`
     */
    burnt_inventory_size?: ItemStackIndex
    smoke?: readonly SmokeSource[]
    light_flicker?: LightFlickeringDefinition
    /**
     * **Default:** `1`
     *
     * `1` means 100% effectivity. Must be greater than `0`. Multiplier of the energy output.
     */
    effectivity?: double
    /**
     * **Default:** `"chemical"`
     *
     * The energy source can be used with fuel from this {@link FuelCategory fuel category}. For a list of built-in categories, see {@linkplain https://wiki.factorio.com/Data.raw#fuel-category here}.
     *
     * Only loaded if `fuel_categories` is not defined.
     */
    fuel_category?: FuelCategoryID
    /**
     * The energy source can be used with fuel from these {@link FuelCategory fuel categories}.
     */
    fuel_categories?: readonly FuelCategoryID[]
  }
  export interface ButtonStyleSpecification extends StyleWithClickableGraphicalSetSpecification {
    readonly type: "button_style"
    /**
     * Name of a {@link FontPrototype}.
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
    icon_horizontal_align?: HorizontalAlign
  }
  export interface CameraEffectTriggerEffectItem extends TriggerEffectItem {
    readonly type: "camera-effect"
    /**
     * Required, read by the game and then immediately discarded. In short: Does nothing.
     */
    effect: string
    duration: uint8
    /**
     * **Default:** `0`
     */
    ease_in_duration?: uint8
    /**
     * **Default:** `0`
     */
    ease_out_duration?: uint8
    /**
     * **Default:** `0`
     */
    delay?: uint8
    /**
     * **Default:** `0`
     */
    full_strength_max_distance?: uint16
    /**
     * **Default:** `0`
     */
    max_distance?: uint16
    /**
     * **Default:** `0`
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
   */
  export type CapsuleAction =
    | ThrowCapsuleAction
    | ActivateEquipmentCapsuleAction
    | UseOnSelfCapsuleAction
    | DestroyCliffsCapsuleAction
    | ArtilleryRemoteCapsuleAction
  /**
   * The data for one variation of {@link CharacterPrototype#animations character animations}.
   */
  export interface CharacterArmorAnimation {
    idle: RotatedAnimation
    idle_with_gun: RotatedAnimation
    running: RotatedAnimation
    /**
     * Must contain exactly 18 directions, so all of the combination of gun direction and moving direction can be covered. Some of these variations are used in reverse to save space. You can use the character animation in the base game for reference.
     */
    running_with_gun: RotatedAnimation
    mining_with_tool: RotatedAnimation
    /**
     * flipped_shadow_running_with_gun must be nil or contain exactly 18 directions, so all of the combination of gun direction and moving direction can be covered. Some of these variations are used in reverse to save space. You can use the character animation in the base game for reference. `flipped_shadow_running_with_gun` has to have same frame count as `running_with_gun`.
     */
    flipped_shadow_running_with_gun?: RotatedAnimation
    /**
     * The names of the armors this animation data is used for. Don't define this if you want the animations to be used for the player without armor.
     */
    armors?: readonly ItemID[]
  }
  export interface CharacterBuildDistanceModifier extends SimpleModifier {
    readonly type: "character-build-distance"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterCraftingSpeedModifier extends SimpleModifier {
    readonly type: "character-crafting-speed"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterHealthBonusModifier extends SimpleModifier {
    readonly type: "character-health-bonus"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterInventorySlotsBonusModifier extends SimpleModifier {
    readonly type: "character-inventory-slots-bonus"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterItemDropDistanceModifier extends SimpleModifier {
    readonly type: "character-item-drop-distance"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterItemPickupDistanceModifier extends SimpleModifier {
    readonly type: "character-item-pickup-distance"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterLogisticRequestsModifier extends BoolModifier {
    readonly type: "character-logistic-requests"
    /**
     * **Default:** `false`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterLogisticTrashSlotsModifier extends SimpleModifier {
    readonly type: "character-logistic-trash-slots"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterLootPickupDistanceModifier extends SimpleModifier {
    readonly type: "character-loot-pickup-distance"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterMiningSpeedModifier extends SimpleModifier {
    readonly type: "character-mining-speed"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterReachDistanceModifier extends SimpleModifier {
    readonly type: "character-reach-distance"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterResourceReachDistanceModifier extends SimpleModifier {
    readonly type: "character-resource-reach-distance"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterRunningSpeedModifier extends SimpleModifier {
    readonly type: "character-running-speed"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  /**
   * @see UtilityConstants.chart
   */
  export interface ChartUtilityConstants {
    electric_lines_color: Color
    electric_lines_color_switch_enabled: Color
    electric_lines_color_switch_disabled: Color
    electric_power_pole_color: Color
    switch_color: Color
    electric_line_width: float
    electric_line_minimum_absolute_width: float
    turret_range_color: Color
    artillery_range_color: Color
    pollution_color: Color
    default_friendly_color: Color
    default_enemy_color: Color
    rail_color: Color
    entity_ghost_color: Color
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
    /**
     * The strings are entity types.
     */
    default_friendly_color_by_type?: Record<string, Color>
    /**
     * The strings are entity types.
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
    /**
     * **Default:** `0.5`
     */
    zoom_threshold_to_draw_spider_path?: double
    /**
     * **Default:** `0.6`
     */
    custom_tag_scale?: float
    custom_tag_selected_overlay_tint: Color
  }
  export interface CheckBoxStyleSpecification extends StyleWithClickableGraphicalSetSpecification {
    readonly type: "checkbox_style"
    /**
     * Name of a {@link FontPrototype}.
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
   * @see MiningDrillGraphicsSet.circuit_connector_layer
   */
  export interface CircuitConnectorLayer {
    /**
     * **Default:** `"object"`
     */
    north?: RenderLayer
    /**
     * **Default:** `"object"`
     */
    east?: RenderLayer
    /**
     * **Default:** `"object"`
     */
    south?: RenderLayer
    /**
     * **Default:** `"object"`
     */
    west?: RenderLayer
  }
  /**
   * @see MiningDrillGraphicsSet.circuit_connector_secondary_draw_order
   */
  export interface CircuitConnectorSecondaryDrawOrder {
    /**
     * **Default:** `100`
     */
    north?: int8
    /**
     * **Default:** `100`
     */
    east?: int8
    /**
     * **Default:** `100`
     */
    south?: int8
    /**
     * **Default:** `100`
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
     */
    connector_main?: Sprite
    /**
     * Drawn when the entity is connected to a circuit network or a logistic network.
     */
    connector_shadow?: Sprite
    /**
     * Drawn when the entity is connected to a circuit network.
     */
    wire_pins?: Sprite
    /**
     * Drawn when the entity is connected to a circuit network.
     */
    wire_pins_shadow?: Sprite
    led_blue_off?: Sprite
    blue_led_light_offset?: Vector
    red_green_led_light_offset?: Vector
  }
  export interface CircularParticleCreationSpecification {
    name: ParticleID
    starting_frame_speed: float
    /**
     * **Default:** `0.25`
     */
    direction?: float
    /**
     * **Default:** `0`
     */
    direction_deviation?: float
    /**
     * **Default:** `0.1`
     */
    speed?: float
    /**
     * **Default:** `0`
     */
    speed_deviation?: float
    /**
     * **Default:** `0`
     */
    starting_frame_speed_deviation?: float
    /**
     * **Default:** `1`
     */
    height?: float
    /**
     * **Default:** `0`
     */
    height_deviation?: float
    /**
     * **Default:** `0`
     */
    vertical_speed?: float
    /**
     * **Default:** `0`
     */
    vertical_speed_deviation?: float
    /**
     * **Default:** `"`{0, 0}`"`
     */
    center?: Vector
    /**
     * **Default:** `0`
     */
    creation_distance?: double
    /**
     * **Default:** `0`
     */
    creation_distance_orientation?: double
    /**
     * **Default:** `false`
     */
    use_source_position?: bool
  }
  export type CircularProjectileCreationSpecification = readonly (readonly [RealOrientation, Vector])[]
  export interface ClearCursorTipTrigger {
    readonly type: "clear-cursor"
    /**
     * **Default:** `1`
     */
    count?: uint32
  }
  export interface CliffPlacementSettings {
    /**
     * Name of the {@link CliffPrototype}.
     */
    name?: EntityID
    /**
     * **Default:** `10`
     *
     * Elevation at which the first row of cliffs is placed. Can not be set from the map generation GUI.
     */
    cliff_elevation_0?: float
    /**
     * Elevation difference between successive rows of cliffs. This is inversely proportional to 'frequency' in the map generation GUI. Specifically, when set from the GUI the value is `40 / frequency`.
     */
    cliff_elevation_interval?: float
    /**
     * Corresponds to 'continuity' in the GUI. This value is not used directly, but is used by the 'cliffiness' noise expression, which in combination with elevation and the two cliff elevation properties drives cliff placement (cliffs are placed when elevation crosses the elevation contours defined by `cliff_elevation_0` and `cliff_elevation_interval` when 'cliffiness' is greater than `0.5`). The default 'cliffiness' expression interprets this value such that larger values result in longer unbroken walls of cliffs, and smaller values (between `0` and `1`) result in larger gaps in cliff walls.
     */
    richness?: MapGenSize
  }
  export interface ClusterTriggerItem extends TriggerItem {
    readonly type: "cluster"
    /**
     * Must be at least `2`.
     */
    cluster_count: uint32
    distance: float
    /**
     * **Default:** `0`
     */
    distance_deviation?: float
  }
  /**
   * Every entry in the array is a specification of one layer the object collides with or a special collision option. Supplying an empty table means that no layers and no collision options are set.
   *
   * The default collision masks of all entity types can be found {@link EntityPrototype#collision_mask here}. The base game provides common collision mask functions in a Lua file in the core {@linkplain https://github.com/wube/factorio-data/blob/master/core/lualib/collision-mask-util.lua lualib}.
   *
   * Supplying an empty array means that no layers and no collision options are set.
   *
   * The three options in addition to the standard layers are not collision masks, instead they control other aspects of collision.
   *
   * ## Union members
   * - {@link CollisionMaskLayer}: A standard collision mask layer.
   * - `"not-colliding-with-itself"`: Any two entities that both have this option enabled on their prototype and have an identical collision mask layers list will not collide. Other collision mask options are not included in the identical layer list check. This does mean that two different prototypes with the same collision mask layers and this option enabled will not collide.
   * - `"consider-tile-transitions"`: Uses the prototypes position rather than its collision box when doing collision checks with tile prototypes. Allows the prototype to overlap colliding tiles up until its center point. This is only respected for character movement and cars driven by players.
   * - `"colliding-with-tiles-only"`: Any prototype with this collision option will only be checked for collision with other prototype's collision masks if they are a tile.
   * @example
   * -- Most common collision mask of buildings:
   * collision_mask = { "item-layer", "object-layer", "player-layer", "water-tile"}
   */
  export type CollisionMask = readonly (
    | CollisionMaskLayer
    | "not-colliding-with-itself"
    | "consider-tile-transitions"
    | "colliding-with-tiles-only"
  )[]
  /**
   * A string specifying a collision mask layer.
   *
   * In addition to the listed layers, there is `"layer-13"` through `"layer-55"`. These layers are currently unused by the game but may change. If a mod is going to use one of the unused layers it's recommended to use the `collision_mask_util.get_first_unused_layer()` method from the vanilla {@linkplain https://github.com/wube/factorio-data/blob/master/core/lualib/collision-mask-util.lua library}. When not using the library, mods should start at the higher layers because the base game will take from the lower ones.
   *
   * ## Union members
   * - `"ground-tile"`
   * - `"water-tile"`
   * - `"resource-layer"`
   * - `"doodad-layer"`
   * - `"floor-layer"`
   * - `"item-layer"`
   * - `"ghost-layer"`
   * - `"object-layer"`
   * - `"player-layer"`
   * - `"train-layer"`
   * - `"rail-layer"`
   * - `"transport-belt-layer"`
   */
  export type CollisionMaskLayer =
    | "ground-tile"
    | "water-tile"
    | "resource-layer"
    | "doodad-layer"
    | "floor-layer"
    | "item-layer"
    | "ghost-layer"
    | "object-layer"
    | "player-layer"
    | "train-layer"
    | "rail-layer"
    | "transport-belt-layer"
    | `layer-${bigint}`
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
   */
  export type Color =
    | {
        /**
         * **Default:** `0`
         *
         * red value
         */
        r?: float
        /**
         * **Default:** `0`
         *
         * green value
         */
        g?: float
        /**
         * **Default:** `0`
         *
         * blue value
         */
        b?: float
        /**
         * **Default:** `1`
         *
         * alpha value (opacity)
         */
        a?: float
      }
    | readonly [float, float, float]
    | readonly [float, float, float, float]
  /**
   * @see UtilityConstants.color_filters
   */
  export interface ColorFilterData {
    name: string
    localised_name: LocalisedString
    /**
     * 4 arrays of 4-length float arrays, essentially a 4x4 matrix.
     */
    matrix: readonly (readonly float[])[]
  }
  export interface ColumnAlignment {
    /**
     * Column index.
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
  export interface ColumnWidth {
    /**
     * Column index.
     */
    column: uint32
    /**
     * **Default:** `0`
     */
    minimal_width?: int32
    /**
     * **Default:** `0`
     */
    maximal_width?: int32
    /**
     * Sets `minimal_width` and `maximal_width` to the same value.
     */
    width?: int32
  }
  /**
   * Graphics for the heat pipe.
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
   * A constant boolean noise expression, such as a literal boolean. When using a constant number, it evaluates to true for numbers bigger than zero, anything else evaluates to false.
   */
  export type ConstantNoiseBoolean = NoiseLiteralBoolean | ConstantNoiseNumber
  /**
   * A constant numeric noise expression, such as a literal number, the result of addition of constants or multioctave noise that uses only constant arguments.
   */
  export type ConstantNoiseNumber = NoiseNumber
  /**
   * Defines which other inputs a {@link CustomInputPrototype} consumes.
   *
   * ## Union members
   * - `"none"`: The associated script event will fire when satisfied and pass through to normal game events.
   * - `"game-only"`: The associated script event will fire when satisfied and block game events that conflict with the key sequence. Actions that are processed regardless of game paused state cannot be blocked.
   * @example
   * consuming = "none"
   */
  export type ConsumingType = "none" | "game-only"
  export interface CraftItemTipTrigger {
    readonly type: "craft-item"
    item?: ItemID
    /**
     * ## Union members
     * - `"crafting-of-single-item-ordered"`
     * - `"crafting-of-multiple-items-ordered"`
     * - `"crafting-finished"`
     */
    event_type: "crafting-of-single-item-ordered" | "crafting-of-multiple-items-ordered" | "crafting-finished"
    /**
     * **Default:** `false`
     *
     * Can only be used when `event_type` is `"crafting-finished"`.
     */
    consecutive?: bool
    /**
     * **Default:** `1`
     */
    count?: uint32
  }
  /**
   * If no tint is specified, the crafting machine falls back to {@link CraftingMachinePrototype#default_recipe_tint CraftingMachinePrototype::default_recipe_tint}.
   * @see RecipePrototype.crafting_machine_tint
   */
  export interface CraftingMachineTint {
    /**
     * **Default:** `no tint`
     */
    primary?: Color
    /**
     * **Default:** `no tint`
     */
    secondary?: Color
    /**
     * **Default:** `no tint`
     */
    tertiary?: Color
    /**
     * **Default:** `no tint`
     */
    quaternary?: Color
  }
  export interface CreateDecorativesTriggerEffectItem extends TriggerEffectItem {
    readonly type: "create-decorative"
    decorative: DecorativeID
    spawn_max: uint16
    spawn_min_radius: float
    /**
     * Must be less than 24.
     */
    spawn_max_radius: float
    /**
     * **Default:** `0`
     */
    spawn_min?: uint16
    /**
     * **Default:** `0.5`
     */
    radius_curve?: float
    /**
     * **Default:** `false`
     */
    apply_projection?: bool
    /**
     * **Default:** `false`
     */
    spread_evenly?: bool
  }
  export interface CreateEntityTriggerEffectItem extends TriggerEffectItem {
    readonly type: "create-entity"
    /**
     * The name of the entity that should be created.
     */
    entity_name: EntityID
    offset_deviation?: BoundingBox
    /**
     * **Default:** `false`
     *
     * If `true`, the {@link import("factorio:runtime").on_trigger_created_entity on_trigger_created_entity} event will be raised.
     */
    trigger_created_entity?: bool
    /**
     * **Default:** `false`
     */
    check_buildability?: bool
    /**
     * **Default:** `false`
     */
    show_in_tooltip?: bool
    /**
     * Entity creation will not occur if any tile matches the collision condition. Defaults to no collisions.
     */
    tile_collision_mask?: CollisionMask
    /**
     * If multiple offsets are specified, multiple entities are created. The projectile of the {@linkplain https://wiki.factorio.com/Distractor_capsule Distractor capsule} uses this property to spawn three Distractors.
     */
    offsets?: Vector | readonly Vector[]
  }
  export interface CreateExplosionTriggerEffectItem extends Omit<CreateEntityTriggerEffectItem, "type"> {
    readonly type: "create-explosion"
    /**
     * **Default:** `-1`
     */
    max_movement_distance?: float
    /**
     * **Default:** `0`
     */
    max_movement_distance_deviation?: float
    /**
     * **Default:** `false`
     */
    inherit_movement_distance_from_projectile?: bool
    /**
     * **Default:** `false`
     */
    cycle_while_moving?: bool
  }
  export interface CreateFireTriggerEffectItem extends Omit<CreateEntityTriggerEffectItem, "type"> {
    readonly type: "create-fire"
    /**
     * **Default:** `MAX_UINT8`
     */
    initial_ground_flame_count?: uint8
  }
  export interface CreateParticleTriggerEffectItem extends TriggerEffectItem {
    readonly type: "create-particle"
    particle_name: ParticleID
    initial_height: float
    offset_deviation?: BoundingBox
    /**
     * **Default:** `false`
     */
    show_in_tooltip?: bool
    tile_collision_mask?: CollisionMask
    offsets?: Vector | readonly Vector[]
    /**
     * **Default:** `0`
     */
    initial_height_deviation?: float
    /**
     * **Default:** `0`
     */
    initial_vertical_speed?: float
    /**
     * **Default:** `0`
     */
    initial_vertical_speed_deviation?: float
    /**
     * **Default:** `0`
     */
    speed_from_center?: float
    /**
     * **Default:** `0`
     */
    speed_from_center_deviation?: float
    /**
     * **Default:** `1`
     */
    frame_speed?: float
    /**
     * **Default:** `0`
     */
    frame_speed_deviation?: float
    /**
     * **Default:** `0`
     *
     * Silently capped to a maximum of 100.
     */
    tail_length?: uint8
    /**
     * **Default:** `0`
     *
     * Silently capped to a maximum of 100.
     */
    tail_length_deviation?: uint8
    /**
     * **Default:** `1`
     */
    tail_width?: float
    /**
     * **Default:** `false`
     */
    rotate_offsets?: bool
  }
  export interface CreateSmokeTriggerEffectItem extends Omit<CreateEntityTriggerEffectItem, "type"> {
    readonly type: "create-smoke"
    /**
     * **Default:** `0`
     */
    initial_height?: float
    speed?: Vector
    /**
     * **Default:** `0`
     */
    speed_multiplier?: float
    /**
     * **Default:** `0`
     */
    speed_multiplier_deviation?: float
    /**
     * **Default:** `0`
     */
    starting_frame?: float
    /**
     * **Default:** `0`
     */
    starting_frame_deviation?: float
    /**
     * **Default:** `0`
     */
    starting_frame_speed?: float
    /**
     * **Default:** `0`
     */
    starting_frame_speed_deviation?: float
    /**
     * **Default:** `0`
     */
    speed_from_center?: float
    /**
     * **Default:** `0`
     */
    speed_from_center_deviation?: float
  }
  export interface CreateStickerTriggerEffectItem extends TriggerEffectItem {
    readonly type: "create-sticker"
    /**
     * Name of a {@link StickerPrototype} that should be created.
     */
    sticker: EntityID
    /**
     * **Default:** `false`
     */
    show_in_tooltip?: bool
    /**
     * **Default:** `false`
     *
     * If `true`, {@link import("factorio:runtime").on_trigger_created_entity on_trigger_created_entity} will be triggered when the sticker is created.
     */
    trigger_created_entity?: bool
  }
  export interface CreateTrivialSmokeEffectItem extends TriggerEffectItem {
    readonly type: "create-trivial-smoke"
    smoke_name: TrivialSmokeID
    offset_deviation?: BoundingBox
    offsets?: Vector | readonly Vector[]
    /**
     * **Default:** `0`
     */
    initial_height?: float
    /**
     * **Default:** `0`
     */
    max_radius?: float
    speed?: Vector
    /**
     * **Default:** `0`
     */
    speed_multiplier?: float
    /**
     * **Default:** `0`
     */
    speed_multiplier_deviation?: float
    /**
     * **Default:** `0`
     */
    starting_frame?: float
    /**
     * **Default:** `0`
     */
    starting_frame_deviation?: float
    /**
     * **Default:** `0`
     */
    starting_frame_speed?: float
    /**
     * **Default:** `0`
     */
    starting_frame_speed_deviation?: float
    /**
     * **Default:** `0`
     */
    speed_from_center?: float
    /**
     * **Default:** `0`
     */
    speed_from_center_deviation?: float
  }
  /**
   * @see UtilitySprites.cursor_box
   */
  export interface CursorBoxSpecification {
    regular: readonly BoxSpecification[]
    not_allowed: readonly BoxSpecification[]
    copy: readonly BoxSpecification[]
    electricity: readonly BoxSpecification[]
    logistics: readonly BoxSpecification[]
    pair: readonly BoxSpecification[]
    train_visualization: readonly BoxSpecification[]
    blueprint_snap_rectangle: readonly BoxSpecification[]
  }
  /**
   * One of the following values:
   *
   * ## Union members
   * - `"entity"`: The normal entity selection box. Yellow by default.
   * - `"electricity"`: The selection box used to specify electric poles an entity is connected to. Light blue by default.
   * - `"copy"`: The selection box used when doing entity copy-paste. Green by default.
   * - `"not-allowed"`: The selection box used when specifying colliding entities. Red by default.
   * - `"pair"`: Light blue by default.
   * - `"logistics"`: Light blue by default.
   * - `"train-visualization"`: White by default.
   * - `"blueprint-snap-rectangle"`: Green by default.
   */
  export type CursorBoxType =
    | "entity"
    | "electricity"
    | "copy"
    | "not-allowed"
    | "pair"
    | "logistics"
    | "train-visualization"
    | "blueprint-snap-rectangle"
  /**
   * Used by {@link BaseAttackParameters} to play a sound during the attack.
   */
  export interface CyclicSound {
    /**
     * Played once at the beginning of the overall cyclic sound.
     */
    begin_sound?: Sound
    /**
     * Played repeatedly after the begin_sound was played.
     */
    middle_sound?: Sound
    /**
     * Played once when the overall cyclic sound is requested to end.
     */
    end_sound?: Sound
  }
  /**
   * A property type, NOT a prototype. Used to specify what type of damage and how much damage something deals.
   */
  export interface DamagePrototype {
    amount: float
    /**
     * The type of damage. See {@linkplain https://wiki.factorio.com/Data.raw#damage-type here} for a list of built-in types, and {@link DamageType} for creating custom types.
     */
    readonly type: DamageTypeID
  }
  export interface DamageTriggerEffectItem extends TriggerEffectItem {
    readonly type: "damage"
    damage: DamagePrototype
    /**
     * **Default:** `true`
     */
    apply_damage_to_trees?: bool
    /**
     * **Default:** `false`
     *
     * If `true`, no corpse for killed entities will be created.
     */
    vaporize?: bool
    /**
     * **Default:** `MAX_UINT16`
     */
    lower_distance_threshold?: uint16
    /**
     * **Default:** `MAX_UINT16`
     */
    upper_distance_threshold?: uint16
    /**
     * **Default:** `1`
     */
    lower_damage_modifier?: float
    /**
     * **Default:** `1`
     */
    upper_damage_modifier?: float
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
   */
  export type DamageTypeFilters =
    | {
        /**
         * The damage types to filter for.
         */
        types: DamageTypeID | readonly DamageTypeID[]
        /**
         * **Default:** `false`
         *
         * Whether this is a whitelist or a blacklist of damage types. Defaults to being a blacklist.
         */
        whitelist?: bool
      }
    | DamageTypeID
    | readonly DamageTypeID[]
  /**
   * The name of a {@link DamageType}.
   * @example
   * "impact"
   * @example
   * "poison"
   */
  export type DamageTypeID = string
  /**
   * The data table is read by the game to load all prototypes.
   *
   * At the end of the prototype stage, the data table is loaded by the game engine and the format of the prototypes is validated. Any extra properties are ignored. See {@linkplain https://lua-api.factorio.com/latest/data-lifecycle.html Data Lifecycle} for more information.
   *
   * The data table and its properties are defined in Lua, so their source code can be viewed in {@linkplain https://github.com/wube/factorio-data/blob/master/core/lualib/dataloader.lua dataloader.lua}.
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
     */
    raw: {
      readonly [Type in keyof PrototypeMap]: {
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
     */
    extend<P extends AnyPrototype>(prototypes: readonly P[]): void
    /**
     * Set by the game based on whether the demo or retail version is running. Should not be used by mods.
     */
    is_demo: bool
  }
  /**
   * The first member of the tuple states at which time of the day the LUT should be used. If the current game time is between two values defined in the color lookup that have different LUTs, the color is interpolated to create a smooth transition. (Sharp transition can be achieved by having the two values differing only by a small fraction.)
   *
   * If there is only one tuple, it means that the LUT will be used all the time, regardless of the value of the first member of the tuple.
   *
   * The second member of the tuple is a lookup table (LUT) for the color which maps the original color to a position in the sprite where is the replacement color is found. The file pointed to by the filename must be a sprite of size 256×16.
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
   */
  export type DaytimeColorLookupTable = readonly (readonly [double, FileName | "identity"])[]
  export interface DeconstructionTimeToLiveModifier extends SimpleModifier {
    readonly type: "deconstruction-time-to-live"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  /**
   * The name of a {@link DecorativePrototype}.
   * @example
   * "dark-mud-decal"
   * @example
   * "red-pita"
   */
  export type DecorativeID = string
  export interface DefaultRecipeTint {
    /**
     * **Default:** ``{1, 1, 1, 1}``
     */
    primary?: Color
    /**
     * **Default:** ``{1, 1, 1, 1}``
     */
    secondary?: Color
    /**
     * **Default:** ``{1, 1, 1, 1}``
     */
    tertiary?: Color
    /**
     * **Default:** ``{1, 1, 1, 1}``
     */
    quaternary?: Color
  }
  /**
   * This trigger is considered fulfilled when the {@link TipsAndTricksItem#dependencies TipsAndTricksItem::dependencies} are fulfilled.
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
     */
    timeout?: uint32
    /**
     * **Default:** `true`
     */
    play_sound_on_failure?: bool
    /**
     * **Default:** `true`
     *
     * Whether using the capsule consumes an item from the stack.
     */
    uses_stack?: bool
  }
  export interface DestroyCliffsTriggerEffectItem extends TriggerEffectItem {
    readonly type: "destroy-cliffs"
    radius: float
    explosion?: EntityID
  }
  export interface DestroyDecorativesTriggerEffectItem extends TriggerEffectItem {
    readonly type: "destroy-decoratives"
    radius: float
    /**
     * **Default:** `first layer`
     */
    from_render_layer?: RenderLayer
    /**
     * **Default:** `last layer`
     */
    to_render_layer?: RenderLayer
    /**
     * **Default:** `false`
     *
     * Soft decoratives are those where {@link DecorativePrototype#grows_through_rail_path DecorativePrototype::grows_through_rail_path} is `true`.
     */
    include_soft_decoratives?: bool
    /**
     * **Default:** `false`
     */
    include_decals?: bool
    /**
     * **Default:** `true`
     */
    invoke_decorative_trigger?: bool
    /**
     * **Default:** `false`
     *
     * If `true`, only decoratives with a {@link DecorativePrototype#trigger_effect DecorativePrototype::trigger_effect} will be destroyed.
     */
    decoratives_with_trigger_only?: bool
  }
  export interface DifficultySettings {
    /**
     * A {@link defines.difficulty_settings.recipe_difficulty}.
     */
    recipe_difficulty: uint8
    /**
     * A {@link defines.difficulty_settings.technology_difficulty}.
     */
    technology_difficulty: uint8
    /**
     * **Default:** `1`
     *
     * Must be >= 0.001 and <= 1000.
     */
    technology_price_multiplier?: double
    /**
     * **Default:** `"after-victory"`
     */
    research_queue_setting?: "always" | "after-victory" | "never"
  }
  export interface DirectTriggerItem extends TriggerItem {
    readonly type: "direct"
    /**
     * **Default:** `false`
     */
    filter_enabled?: bool
  }
  /**
   * Usually specified by using {@link defines.direction}.
   *
   * ## Union members
   * - `0`: North
   * - `1`: Northeast
   * - `2`: East
   * - `3`: Southeast
   * - `4`: South
   * - `5`: Southwest
   * - `6`: West
   * - `7`: Northwest
   */
  export type Direction = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
  /**
   * @see AnimatedVector.direction_shift
   */
  export interface DirectionShift {
    north?: Vector
    east?: Vector
    south?: Vector
    west?: Vector
  }
  /**
   * @see NoiseFunctionDistanceFromNearestPoint.arguments
   */
  export interface DistanceFromNearestPointArguments {
    x: NoiseNumber
    y: NoiseNumber
    points: NoiseArrayConstruction
    /**
     * **Default:** `max double`
     */
    maximum_distance?: ConstantNoiseNumber
  }
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
  /**
   * When applied to {@link ModulePrototype modules}, the resulting effect is a sum of all module effects, multiplied through calculations: `(1 + sum module effects)` or, for productivity `(0 + sum)`.
   * @example
   * effect =
   * {
   *   productivity = {bonus = 0.04},
   *   consumption = {bonus = 0.4},
   *   pollution = {bonus = 0.05},
   *   speed = {bonus = -0.05}
   * }
   */
  export interface Effect {
    /**
     * Multiplier to energy used during operation (not idle/drain use). The minimum possible sum is -80%.
     */
    consumption?: EffectValue
    /**
     * Modifier to crafting speed, research speed, etc. The minimum possible sum is -80%.
     */
    speed?: EffectValue
    /**
     * Multiplied against work completed, adds to the bonus results of operating. E.g. an extra crafted recipe or immediate research bonus. The minimum possible sum is 0%.
     */
    productivity?: EffectValue
    /**
     * Multiplier to the pollution factor of an entity's pollution during use. The minimum possible sum is -80%.
     */
    pollution?: EffectValue
  }
  /**
   * A list of {@link ModulePrototype module} effects, or just a single effect. Modules with other effects cannot be used on the machine. This means that both effects from modules and from surrounding beacons are restricted to the listed effects. If `allowed_effects` is an empty array, the machine cannot be affected by modules or beacons.
   *
   * ## Union members
   * - `"speed"`: Modules that increase or decrease the machine's speed.
   * - `"productivity"`: Modules that make the machine produce bonus items.
   * - `"consumption"`: Modules that increase or decrease the machine's energy consumption.
   * - `"pollution"`: Modules that make the machine produce more or less pollution.
   * @example
   * -- Allow all module types
   * allowed_effects = {"speed", "productivity", "consumption", "pollution"}
   * @example
   * -- Allow only modules that affect speed
   * allowed_effects = "speed"
   */
  export type EffectTypeLimitation =
    | ("speed" | "productivity" | "consumption" | "pollution")
    | readonly ("speed" | "productivity" | "consumption" | "pollution")[]
  export interface EffectValue {
    /**
     * **Default:** `0`
     *
     * Precision is ignored beyond two decimals - `0.567` results in `0.56` and means 56% etc.
     * @example
     * bonus = 0.07 -- 7% bonus
     */
    bonus?: double
  }
  /**
   * @example
   * energy_source = -- energy source of oil pumpjack
   * {
   *   type = "electric",
   *   emissions_per_minute = 10,
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
   */
  export interface ElectricEnergySource extends BaseEnergySource {
    /**
     * This is only loaded, and mandatory if the energy source can be loaded as multiple energy source types.
     */
    readonly type?: "electric"
    /**
     * How much energy this entity can hold.
     * @example
     * buffer_capacity = "5MJ"
     */
    buffer_capacity?: Energy
    /**
     * @example
     * usage_priority = "secondary-input"
     */
    usage_priority: ElectricUsagePriority
    /**
     * **Default:** `Max `double` value`
     *
     * The rate at which energy can be taken, from the network, to refill the energy buffer. `0` means no transfer.
     * @example
     * input_flow_limit = "300kW"
     */
    input_flow_limit?: Energy
    /**
     * **Default:** `Max `double` value`
     *
     * The rate at which energy can be provided, to the network, from the energy buffer. `0` means no transfer.
     * @example
     * output_flow_limit = "300kW"
     */
    output_flow_limit?: Energy
    /**
     * How much energy (per second) will be continuously removed from the energy buffer. In-game, this is shown in the tooltip as "Min. {@link import("factorio:runtime").LuaEntity#active Minimum] Consumption". Applied as a constant consumption-per-tick, even when the entity has the property [active} set to `false`.
     * @example
     * drain = "1kW"
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
   * If this is loaded as a single ElementImageSetLayer, it gets used as `base`.
   */
  export type ElementImageSet =
    | {
        base?: ElementImageSetLayer
        shadow?: ElementImageSetLayer
        glow?: ElementImageSetLayer
      }
    | ElementImageSetLayer
  /**
   * If this is loaded as a Sprite, it gets used as `center`.
   *
   * ![How the sprites are laid out graphically when using a composition type element image set layer.](https://lua-api.factorio.com/latest/static/images/ElementImageSetLayer_properties.png)
   *
   * ![How the sprites are stretched when using a composition type element image set layer.](https://lua-api.factorio.com/latest/static/images/ElementImageSetLayer_stretching.png)
   */
  export type ElementImageSetLayer =
    | {
        /**
         * **Default:** `"inner"`
         *
         * Defines whether the border should be drawn inside the widget, which affects the padding and content size of the widget, or outside of the widget which doesn't affect size. The outer draw type is most commonly used for shadows, glows and insets.
         */
        draw_type?: "inner" | "outer"
        /**
         * **Default:** ``"none"` if this has no other properties, otherwise `"composition"``
         */
        readonly type?: "none" | "composition"
        /**
         * **Default:** ``{r=1, g=1, b=1, a=1}``
         *
         * Only loaded if `type` is `"composition"`.
         */
        tint?: Color
        /**
         * Only loaded if `type` is `"composition"`.
         */
        center?: Sprite
        /**
         * Only loaded if `type` is `"composition"`.
         */
        left?: Sprite
        /**
         * Only loaded if `type` is `"composition"`.
         */
        left_top?: Sprite
        /**
         * Only loaded if `type` is `"composition"`.
         */
        left_bottom?: Sprite
        /**
         * Only loaded if `type` is `"composition"`.
         */
        right?: Sprite
        /**
         * Only loaded if `type` is `"composition"`.
         */
        right_top?: Sprite
        /**
         * Only loaded if `type` is `"composition"`.
         */
        right_bottom?: Sprite
        /**
         * Only loaded if `type` is `"composition"`.
         */
        top?: Sprite
        /**
         * Only loaded if `type` is `"composition"`.
         */
        bottom?: Sprite
        /**
         * If this is a tuple, the first member of the tuple is width and the second is height. Otherwise the size is both width and height.
         *
         * Only loaded if `type` is `"composition"`.
         *
         * ![In base game, the corner size is 8 and the sides are 1px long and 8px wide.](https://lua-api.factorio.com/latest/static/images/ElementImageSetLayer_base_sizes.png)
         * @example
         * {
         *   -- How an ElementImageSet is loaded which has only one layer, which uses the corner_size shown in the diagram
         *   base = {position = {0, 17}, corner_size = 8}
         * }
         */
        corner_size?: uint16 | readonly [uint16, uint16]
        /**
         * **Default:** `The `default_tileset` set in GuiStyle`
         *
         * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
         */
        filename?: FileName
        /**
         * Mandatory if `corner_size` is defined. Only loaded if `type` is `"composition"`.
         */
        position?: MapPosition
        /**
         * **Default:** `true`
         *
         * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
         */
        load_in_minimal_mode?: bool
        /**
         * **Default:** `1`
         *
         * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
         */
        top_width?: SpriteSizeType
        /**
         * **Default:** `1`
         *
         * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
         */
        bottom_width?: SpriteSizeType
        /**
         * **Default:** `1`
         *
         * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
         */
        left_height?: SpriteSizeType
        /**
         * **Default:** `1`
         *
         * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
         */
        right_height?: SpriteSizeType
        /**
         * **Default:** `1`
         *
         * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
         */
        center_width?: SpriteSizeType
        /**
         * **Default:** `1`
         *
         * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
         */
        center_height?: SpriteSizeType
        /**
         * **Default:** `1`
         *
         * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
         */
        scale?: double
        /**
         * Only loaded if `type` is `"composition"`.
         */
        top_border?: int32
        /**
         * Only loaded if `type` is `"composition"`.
         */
        right_border?: int32
        /**
         * Only loaded if `type` is `"composition"`.
         */
        bottom_border?: int32
        /**
         * Only loaded if `type` is `"composition"`.
         */
        left_border?: int32
        /**
         * Sets `top_border`, `right_border`, `bottom_border` and `left_border`.
         *
         * Only loaded if `corner_size` is not defined. Only loaded if `type` is `"composition"`.
         */
        border?: int32
        /**
         * **Default:** `true`
         *
         * Only loaded if `type` is `"composition"`.
         */
        stretch_monolith_image_to_size?: bool
        /**
         * **Default:** `false`
         *
         * Tiling is used to make a side (not corner) texture repeat instead of being stretched.
         */
        left_tiling?: bool
        /**
         * **Default:** `false`
         */
        right_tiling?: bool
        /**
         * **Default:** `false`
         */
        top_tiling?: bool
        /**
         * **Default:** `false`
         */
        bottom_tiling?: bool
        /**
         * **Default:** `false`
         */
        center_tiling_vertical?: bool
        /**
         * **Default:** `false`
         */
        center_tiling_horizontal?: bool
        /**
         * **Default:** `0`
         *
         * Overall tiling is used to make the overall texture repeat instead of being stretched.
         */
        overall_tiling_horizontal_size?: uint16
        /**
         * **Default:** `0`
         */
        overall_tiling_horizontal_spacing?: uint16
        /**
         * **Default:** `0`
         */
        overall_tiling_horizontal_padding?: uint16
        /**
         * **Default:** `0`
         */
        overall_tiling_vertical_size?: uint16
        /**
         * **Default:** `0`
         */
        overall_tiling_vertical_spacing?: uint16
        /**
         * **Default:** `0`
         */
        overall_tiling_vertical_padding?: uint16
        custom_horizontal_tiling_sizes?: readonly uint32[]
        /**
         * **Default:** `1`
         */
        opacity?: double
        /**
         * **Default:** `false`
         */
        background_blur?: bool
        /**
         * **Default:** ``4` if `background_blur` is `true``
         */
        background_blur_sigma?: float
        /**
         * **Default:** `0`
         */
        top_outer_border_shift?: int32
        /**
         * **Default:** `0`
         */
        bottom_outer_border_shift?: int32
        /**
         * **Default:** `0`
         */
        right_outer_border_shift?: int32
        /**
         * **Default:** `0`
         */
        left_outer_border_shift?: int32
      }
    | Sprite
  export interface EmptyWidgetStyleSpecification extends BaseStyleSpecification {
    readonly type: "empty_widget_style"
    graphical_set?: ElementImageSet
  }
  export interface EnemyEvolutionSettings {
    enabled: bool
    /**
     * Percentual increase in the evolution factor for every second (60 ticks)
     */
    time_factor: double
    /**
     * Percentual increase in the evolution factor for every destroyed spawner
     */
    destroy_factor: double
    /**
     * Percentual increase in the evolution factor for 1 pollution unit
     */
    pollution_factor: double
  }
  export interface EnemyExpansionSettings {
    enabled: bool
    /**
     * Distance in chunks from the furthest base around. This prevents expansions from reaching too far into the player's territory.
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
     */
    max_colliding_tiles_coefficient: double
    /**
     * Size of the group that goes to build new base (the game interpolates between min size and max size based on evolution factor).
     */
    settler_group_min_size: uint32
    settler_group_max_size: uint32
    /**
     * Ticks to expand to a single position for a base is used. Cooldown is calculated as follows: `cooldown = lerp(max_expansion_cooldown, min_expansion_cooldown, -e^2 + 2 * e)` where `lerp` is the linear interpolation function, and e is the current evolution factor.
     */
    min_expansion_cooldown: uint32
    max_expansion_cooldown: uint32
  }
  /**
   * Specifies an amount of electric energy in joules, or electric energy per time in watts.
   *
   * Internally, the input in `Watt` or `Joule/second` is always converted into `Joule/tick`, where 1 second is equal to 60 ticks. This means it uses the following formula: `Power in Joule/tick = Power in Watt / 60`. See {@linkplain https://wiki.factorio.com/Units#Power Power}.
   *
   * Supported Multipliers:
   *
   * - `k/K`: 10^3, or 1 000
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
   * -- the following two lines result in the same power consumption:
   * energy_usage = "60W"
   * energy_usage = "1J" -- not recommended, Watt is convention for power
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
   */
  export type EnergySource =
    | ElectricEnergySource
    | BurnerEnergySource
    | HeatEnergySource
    | FluidEnergySource
    | VoidEnergySource
  /**
   * The name of an {@link EntityPrototype}.
   * @example
   * "stone-furnace"
   * @example
   * "stack-inserter"
   */
  export type EntityID = string
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
   * - `"fast-replaceable-no-build-while-moving"`: Fast replace will not apply when building while moving.
   * - `"breaths-air"`: This is used to specify that the entity breathes air, and so is affected by poison (currently {@linkplain https://wiki.factorio.com/Poison_capsule poison capsules} are the only source).
   * - `"not-repairable"`: Used to specify that the entity can not be 'healed' by repair-packs (or construction robots with repair packs)
   * - `"not-on-map"`: The entity does not get drawn on the map.
   * - `"not-deconstructable"`: The entity can not be deconstructed.
   * - `"not-blueprintable"`: The entity can not be used in blueprints.
   * - `"hidden"`: Hides the entity from the bonus GUI (button above the map) and from the made in property of recipe tooltips.
   * - `"hide-alt-info"`: Hides the alt-info of an entity in alt-mode, for example the recipe icon.
   * - `"fast-replaceable-no-cross-type-while-moving"`: Do not fast replace over other entity types when building while moving.
   * - `"no-gap-fill-while-building"`
   * - `"not-flammable"`: Do not apply fire stickers to the entity.
   * - `"no-automated-item-removal"`: Prevents inserters and loaders from taking items from this entity.
   * - `"no-automated-item-insertion"`: Prevents inserters and loaders from inserting items into this entity.
   * - `"no-copy-paste"`: This flag does nothing when set in the data stage because it gets overridden by {@link EntityPrototype#allow_copy_paste EntityPrototype::allow_copy_paste}. Thus, it must be set on the entity via that property.
   * - `"not-selectable-in-game"`: Disallows selection of the entity even when a selection box is specified for other reasons. For example, selection boxes are used to determine the size of outlines to be shown when highlighting entities inside electric pole ranges. This flag does nothing when set in the data stage because it gets overridden by {@link EntityPrototype#selectable_in_game EntityPrototype::selectable_in_game}. Thus, it must be set on the entity via that property.
   * - `"not-upgradable"`: The entity can't be selected by the {@linkplain https://wiki.factorio.com/Upgrade_planner upgrade planner}.
   * - `"not-in-kill-statistics"`: The entity is not shown in the kill statistics.
   * - `"not-in-made-in"`: The entity is not shown in the made in property of recipe tooltips.
   * @example
   * flags = {"placeable-neutral", "player-creation"}
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
    | "fast-replaceable-no-build-while-moving"
    | "breaths-air"
    | "not-repairable"
    | "not-on-map"
    | "not-deconstructable"
    | "not-blueprintable"
    | "hidden"
    | "hide-alt-info"
    | "fast-replaceable-no-cross-type-while-moving"
    | "no-gap-fill-while-building"
    | "not-flammable"
    | "no-automated-item-removal"
    | "no-automated-item-insertion"
    | "no-copy-paste"
    | "not-selectable-in-game"
    | "not-upgradable"
    | "not-in-kill-statistics"
    | "not-in-made-in"
  )[]
  /**
   * How far (in tiles) entities should be rendered outside the visible area of the screen.
   * @see UtilityConstants.entity_renderer_search_box_limits
   */
  export interface EntityRendererSearchBoxLimits {
    /**
     * Min value 6, max value 15. Min value 6 to compensate for shadows.
     */
    left: uint8
    /**
     * Min value 3, max value 15.
     */
    top: uint8
    /**
     * Min value 3, max value 15.
     */
    right: uint8
    /**
     * Min value 4, max value 15. Min value 4 to compensate for tall entities like electric poles.
     */
    bottom: uint8
  }
  export interface EntityTransferTipTrigger {
    readonly type: "entity-transfer"
    /**
     * **Default:** `1`
     */
    count?: uint32
    /**
     * **Default:** `any transfer`
     */
    transfer?: "in" | "out"
  }
  /**
   * The name of an {@link EquipmentCategory}.
   * @example
   * "armor"
   */
  export type EquipmentCategoryID = string
  /**
   * The name of an {@link EquipmentGridPrototype}.
   * @example
   * "small-equipment-grid"
   * @example
   * "spidertron-equipment-grid"
   */
  export type EquipmentGridID = string
  /**
   * The name of an {@link EquipmentPrototype}.
   * @example
   * "fusion-reactor-equipment"
   * @example
   * "exoskeleton-equipment"
   */
  export type EquipmentID = string
  /**
   * The shape and dimensions of an equipment module.
   */
  export interface EquipmentShape {
    width: uint32
    height: uint32
    /**
     * The shape. When using "manual", `points` must be defined.
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
     */
    points?: readonly (readonly uint32[])[]
  }
  export type ExplosionDefinition =
    | EntityID
    | {
        name: EntityID
        offset?: Vector
      }
  /**
   * @see NoiseFunctionFactorioBasisNoise.arguments
   */
  export interface FactorioBasisNoiseArguments {
    x: NoiseNumber
    y: NoiseNumber
    /**
     * Integer between 0 and 4 294 967 295 (inclusive) used to populate the backing random noise.
     */
    seed0: ConstantNoiseNumber
    /**
     * Integer between 0 and 255 (inclusive) used to provide extra randomness when sampling.
     */
    seed1: ConstantNoiseNumber
    /**
     * **Default:** `1`
     *
     * `x` and `y` will be multiplied by this value before sampling.
     */
    input_scale?: ConstantNoiseNumber
    /**
     * **Default:** `1`
     *
     * The output will be multiplied by this value before returning.
     */
    output_scale?: ConstantNoiseNumber
  }
  /**
   * @see NoiseFunctionFactorioMultioctaveNoise.arguments
   */
  export interface FactorioMultioctaveNoiseArguments {
    x: NoiseNumber
    y: NoiseNumber
    /**
     * How strong is each layer compared to the next larger one.
     */
    persistence: ConstantNoiseNumber
    /**
     * Integer between 0 and 4 294 967 295 (inclusive) used to populate the backing random noise.
     */
    seed0: ConstantNoiseNumber
    /**
     * Integer between 0 and 255 (inclusive) used to provide extra randomness when sampling.
     */
    seed1: ConstantNoiseNumber
    /**
     * **Default:** `1`
     *
     * `x` and `y` will be multiplied by this value before sampling.
     */
    input_scale?: ConstantNoiseNumber
    /**
     * **Default:** `1`
     *
     * The output will be multiplied by this value before returning.
     */
    output_scale?: ConstantNoiseNumber
    /**
     * How many layers of noise at different scales to sum.
     */
    octaves: ConstantNoiseNumber
  }
  /**
   * @see NoiseFunctionFactorioQuickMultioctaveNoise.arguments
   */
  export interface FactorioQuickMultioctaveNoiseArguments {
    x: NoiseNumber
    y: NoiseNumber
    seed0: ConstantNoiseNumber
    seed1: ConstantNoiseNumber
    /**
     * **Default:** `1`
     */
    input_scale?: ConstantNoiseNumber
    /**
     * **Default:** `1`
     */
    output_scale?: ConstantNoiseNumber
    octaves: ConstantNoiseNumber
    /**
     * **Default:** `0.5`
     */
    octave_input_scale_multiplier?: ConstantNoiseNumber
    /**
     * **Default:** `2`
     */
    octave_output_scale_multiplier?: ConstantNoiseNumber
    /**
     * **Default:** `1`
     */
    octave_seed0_shift?: ConstantNoiseNumber
  }
  export interface FastBeltBendTipTrigger {
    readonly type: "fast-belt-bend"
    /**
     * **Default:** `1`
     */
    count?: uint32
  }
  export interface FastReplaceTipTrigger {
    readonly type: "fast-replace"
    /**
     * **Default:** `1`
     */
    count?: uint32
    source?: EntityID
    target?: EntityID
    /**
     * **Default:** `false`
     */
    match_type_only?: bool
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
   */
  export type FileName = string
  export interface FlameThrowerExplosionTriggerDelivery extends TriggerDeliveryItem {
    readonly type: "flame-thrower"
    /**
     * Name of a {@link FlameThrowerExplosionPrototype}.
     */
    explosion: EntityID
    starting_distance: double
    /**
     * **Default:** `0`
     */
    direction_deviation?: double
    /**
     * **Default:** `0`
     */
    speed_deviation?: double
    /**
     * **Default:** `0`
     */
    starting_frame_fraciton_deviation?: double
    /**
     * **Default:** `1`
     */
    projectile_starting_speed?: double
  }
  export interface FlowStyleSpecification extends BaseStyleSpecification {
    readonly type: "flow_style"
    max_on_row?: int32
    horizontal_spacing?: int32
    vertical_spacing?: int32
  }
  /**
   * Used to set the fluid amount an entity can hold, as well as the connection points for pipes leading into and out of the entity.
   *
   * Entities can have multiple fluidboxes. These can be part of a {@link FluidEnergySource}, or be specified directly in the entity prototype.
   *
   * A fluidbox can store only one type of fluid at a time. However, a fluid system (ie. multiple connected fluid boxes) can contain multiple different fluids, see {@linkplain https://wiki.factorio.com/Fluid_system#Fluid_mixing Fluid mixing}.
   *
   * ![Visual representation of base_area, base_level and height. When all the fluidboxes are connected, the water leaves fluidbox A and flows into the other 3 boxes through fluidbox B until the water level is equal in all boxes.](https://lua-api.factorio.com/latest/static/images/Fluidboxes.png)
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
   */
  export interface FluidBox {
    /**
     * Connection points to connect to other fluidboxes. This is also marked as blue arrows in alt mode. Fluid may flow in or out depending on the `type` field of each connection.
     *
     * Connection points may depend on the direction the entity is facing. These connection points cannot share positions with one another or the connection points of another fluid box belonging to the same entity.
     *
     * Can't have more than 255 connections.
     */
    pipe_connections: readonly PipeConnectionDefinition[]
    /**
     * **Default:** `1`
     *
     * Must be greater than `0`. The total fluid capacity of the fluid box is `base_area × height × 100`.
     */
    base_area?: double
    /**
     * **Default:** `0`
     *
     * Base level is the elevation of the invisible fluid box. `0` is ground level.
     *
     * For example, if the base level is `-1` and the height is `1`, it puts the top of the fluid box at the bottom of a pipe connection with base_level `0` and height `1`. This means fluid "falls" in to the fluid box, and can't get out.
     *
     * For example, if the base level is `1`, it puts the bottom of the fluid box at the top of a pipe connection with base_level `0` and height `1`. This means fluid "falls" out of the fluid box, but fluids already outside can't get into it.
     */
    base_level?: float
    /**
     * **Default:** `1`
     *
     * Must be greater than `0`. The total fluid capacity of the fluid box is `base_area × height × 100`.
     */
    height?: double
    /**
     * Can be used to specify which fluid is allowed to enter this fluid box. See {@linkplain https://forums.factorio.com/viewtopic.php?f=28&t=46302 here}.
     */
    filter?: FluidID
    /**
     * **Default:** `"object"`
     */
    render_layer?: RenderLayer
    /**
     * **Default:** `false`
     *
     * Hides the blue input/output arrows and icons at each connection point.
     */
    hide_connection_info?: bool
    /**
     * The pictures to show when another fluid box connects to this one.
     */
    pipe_covers?: Sprite4Way
    pipe_picture?: Sprite4Way
    /**
     * The minimum temperature allowed into the fluidbox. Only applied if a `filter` is specified.
     * @example
     * minimum_temperature = 100.0
     */
    minimum_temperature?: double
    /**
     * The maximum temperature allowed into the fluidbox. Only applied if a `filter` is specified.
     * @example
     * maximum_temperature = 1000.0
     */
    maximum_temperature?: double
    /**
     * **Default:** `"none"`
     */
    production_type?: ProductionType
    /**
     * **Default:** `1`
     *
     * Set the secondary draw order for all orientations. Used to determine render order for sprites with the same `render_layer` in the same position. Sprites with a higher `secondary_draw_order` are drawn on top.
     */
    secondary_draw_order?: int8
    /**
     * Set the secondary draw order for each orientation. Used to determine render order for sprites with the same `render_layer` in the same position. Sprites with a higher `secondary_draw_order` are drawn on top.
     */
    secondary_draw_orders?: FluidBoxSecondaryDrawOrders
  }
  /**
   * @see FluidBox.secondary_draw_orders
   */
  export interface FluidBoxSecondaryDrawOrders {
    /**
     * **Default:** `1`
     */
    north?: int8
    /**
     * **Default:** `1`
     */
    east?: int8
    /**
     * **Default:** `1`
     */
    south?: int8
    /**
     * **Default:** `1`
     */
    west?: int8
  }
  export interface FluidEnergySource extends BaseEnergySource {
    readonly type: "fluid"
    /**
     * All standard fluid box configurations are acceptable, but the type must be `"input"` or `"input-output"` to function correctly. `scale_fluid_usage`, `fluid_usage_per_tick`, or a filter on the fluidbox must be set to be able to calculate the fluid usage of the energy source.
     */
    fluid_box: FluidBox
    smoke?: readonly SmokeSource[]
    light_flicker?: LightFlickeringDefinition
    /**
     * **Default:** `1`
     *
     * `1` means 100% effectivity. Must be greater than `0`. Multiplier of the energy output.
     */
    effectivity?: double
    /**
     * **Default:** `false`
     *
     * If set to `true`, the energy source will calculate power based on the fluid's `fuel_value`, else it will calculate based on fluid temperature.
     */
    burns_fluid?: bool
    /**
     * **Default:** `false`
     *
     * If set to `true`, the energy source will consume as much fluid as required to produce the desired power, otherwise it will consume as much as it is allowed to, wasting any excess.
     */
    scale_fluid_usage?: bool
    /**
     * **Default:** `true`
     *
     * Property is only used when `burns_fluid` is `true` and the fluid has a {@link FluidPrototype#fuel_value fuel_value} of `0`, or when `burns_fluid` is `false` and the fluid is at its `default_temperature`.
     *
     * In those cases, this property determines whether the fluid should be destroyed, meaning that the fluid is consumed at the rate of `fluid_usage_per_tick`, without producing any power.
     */
    destroy_non_fuel_fluid?: bool
    /**
     * **Default:** `0`
     *
     * The number of fluid units the energy source uses per tick. If used with `scale_fluid_usage`, this specifies the maximum. If this value is not set, `scale_energy_usage` is `false` and a fluid box filter is set, the game will attempt to calculate this value from the fluid box filter's fluid's `fuel_value` or `heat_capacity` and the entity's `energy_usage`. If `burns_fluid` is `false`, `maximum_temperature` will also be used. If the attempt of the game to calculate this value fails (`scale_energy_usage` is `false` and a fluid box filter is set), then `scale_energy_usage` will be forced to `true`, to prevent the energy source from being an infinite fluid sink. More context {@linkplain https://forums.factorio.com/90613 on the forums}.
     */
    fluid_usage_per_tick?: double
    /**
     * **Default:** `0`
     *
     * `0` means unlimited maximum temperature. If specified while `scale_fluid_usage` is `false` and `fluid_usage_per_tick` is not specified, the game will use this value to calculate `fluid_usage_per_tick`.
     *
     * Only loaded if `burns_fluid` is `false`.
     */
    maximum_temperature?: double
  }
  /**
   * The name of a {@link FluidPrototype}.
   * @example
   * "water"
   * @example
   * "lubricant"
   */
  export type FluidID = string
  /**
   * A fluid ingredient definition.
   * @example
   * {type="fluid", name="water", amount=50}
   */
  export interface FluidIngredientPrototype {
    readonly type: "fluid"
    /**
     * The name of a {@link FluidPrototype}.
     */
    name: FluidID
    /**
     * Can not be `<= 0`.
     */
    amount: double
    /**
     * Sets the expected temperature of the fluid ingredient.
     */
    temperature?: double
    /**
     * If `temperature` is not set, this sets the expected minimum temperature of the fluid ingredient.
     */
    minimum_temperature?: double
    /**
     * If `temperature` is not set, this sets the expected maximum temperature of the fluid ingredient.
     */
    maximum_temperature?: double
    /**
     * **Default:** `0`
     *
     * Amount of this ingredient that should not be included in the fluid consumption statistics. Usually used together with an equal catalyst amount on the "product" of the catalyst in the recipe.
     *
     * If this FluidIngredientPrototype is used in a recipe, the `catalyst_amount` is calculated automatically based on the {@link RecipePrototype#ingredients RecipePrototype::ingredients} and {@link RecipePrototype#results RecipePrototype::results}. See {@linkplain https://factorio.com/blog/post/fff-256 here}.
     */
    catalyst_amount?: double
    /**
     * **Default:** `0`
     *
     * Used to specify which {@link CraftingMachinePrototype#fluid_boxes CraftingMachinePrototype::fluid_boxes} this ingredient should use. It will use this one fluidbox. The index is 1-based and separate for input and output fluidboxes.
     */
    fluidbox_index?: uint32
  }
  /**
   * A fluid product definition.
   */
  export interface FluidProductPrototype {
    readonly type: "fluid"
    /**
     * The name of a {@link FluidPrototype}.
     */
    name: FluidID
    /**
     * Can not be `< 0`.
     */
    amount?: double
    /**
     * Only loaded if `amount` is not defined.
     *
     * Can not be `< 0`.
     */
    amount_min: MaterialAmountType
    /**
     * Only loaded if `amount` is not defined.
     *
     * If set to a number that is less than `amount_min`, the game will use `amount_min` instead.
     */
    amount_max: MaterialAmountType
    /**
     * **Default:** `1`
     *
     * Value between 0 and 1, `0` for 0% chance and `1` for 100% chance.
     *
     * The effect of probability is no product, or a linear distribution on [min, max]. For a recipe with probability `p`, amount_min `min`, and amount_max `max`, the Expected Value of this product can be expressed as `p * (0.5 * (max + min))`. This is what will be shown in a recipe tooltip. The effect of `catalyst_amount` on the product is not shown.
     *
     * When `amount_min` and `amount_max` are not provided, `amount` applies as min and max. The Expected Value simplifies to `p * amount`, providing `0` product, or `amount` product, on recipe completion.
     */
    probability?: double
    /**
     * **Default:** `0`
     *
     * Amount that should not be affected by productivity modules (not yielded from bonus production) and should not be included in the fluid production statistics.
     *
     * If this FluidProductPrototype is used in a recipe, the `catalyst_amount` is calculated automatically based on the {@link RecipePrototype#ingredients RecipePrototype::ingredients} and {@link RecipePrototype#results RecipePrototype::results}. See {@linkplain https://factorio.com/blog/post/fff-256 here}.
     */
    catalyst_amount?: double
    /**
     * The temperature of the fluid product.
     */
    temperature?: double
    /**
     * **Default:** `0`
     *
     * Used to specify which {@link CraftingMachinePrototype#fluid_boxes CraftingMachinePrototype::fluid_boxes} this product should use. It will use this one fluidbox. The index is 1-based and separate for input and output fluidboxes.
     */
    fluidbox_index?: uint32
    /**
     * **Default:** `true`
     *
     * When hovering over a recipe in the crafting menu the recipe tooltip will be shown. An additional item tooltip will be shown for every product, as a separate tooltip, if the item tooltip has a description and/or properties to show and if `show_details_in_recipe_tooltip` is `true`.
     */
    show_details_in_recipe_tooltip?: bool
  }
  /**
   * @see PumpPrototype.fluid_wagon_connector_graphics
   */
  export interface FluidWagonConnectorGraphics {
    load_animations: PumpConnectorGraphics
    unload_animations: PumpConnectorGraphics
  }
  export interface FollowerRobotLifetimeModifier extends SimpleModifier {
    readonly type: "follower-robot-lifetime"
    /**
     * **Default:** `true`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  export interface FootprintParticle {
    /**
     * The tiles this footprint particle is shown on when the player walks over them.
     */
    tiles: readonly TileID[]
    /**
     * The name of the particle that should be created when the character walks on the defined tiles.
     */
    particle_name?: ParticleID
    /**
     * **Default:** `false`
     *
     * Whether this footprint particle should be the default particle that is used for `tiles` that don't have an associated footprint particle.
     */
    use_as_default?: bool
  }
  export interface FootstepTriggerEffectItem extends CreateParticleTriggerEffectItem {
    tiles: readonly TileID[]
    /**
     * Can be used to specify multiple CreateParticleTriggerEffectItems. If this property is defined, all properties inherited from CreateParticleTriggerEffectItem are ignored.
     */
    actions?: readonly CreateParticleTriggerEffectItem[]
    /**
     * **Default:** `false`
     *
     * When `true`, the trigger(s) defined in `actions` are the default triggers for tiles that don't have an associated footstep particle trigger. (ie. don't show up in one of the "tiles" lists).
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
   */
  export type FuelCategoryID = string
  export interface GameControllerVibrationData {
    /**
     * **Default:** `0`
     *
     * Vibration intensity must be between 0 and 1.
     */
    low_frequency_vibration_intensity?: float
    /**
     * **Default:** `0`
     *
     * Vibration intensity must be between 0 and 1.
     */
    high_frequency_vibration_intensity?: float
    /**
     * **Default:** `0`
     *
     * Duration in milliseconds.
     */
    duration?: uint32
    /**
     * **Default:** `"character_actions"`
     */
    play_for?: PlayFor
  }
  export interface GateOverRailBuildTipTrigger {
    readonly type: "gate-over-rail-build"
    /**
     * **Default:** `1`
     */
    count?: uint32
  }
  export interface GhostTimeToLiveModifier extends SimpleModifier {
    readonly type: "ghost-time-to-live"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  export interface GiveItemModifier extends BaseModifier {
    readonly type: "give-item"
    /**
     * **Default:** `false`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
    item: ItemID
    /**
     * **Default:** `1`
     *
     * Must be `> 0`.
     */
    count?: ItemCountType
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
  }
  export interface GroupAttackTipTrigger {
    readonly type: "group-attack"
    /**
     * **Default:** `1`
     */
    count?: uint32
  }
  /**
   * @see StreamAttackParameters.gun_center_shift
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
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
    /**
     * Name of the {@link AmmoCategory} that is affected.
     */
    ammo_category: AmmoCategoryID
    /**
     * Modification value, which will be added to the current gun speed modifier upon researching.
     */
    modifier: double
  }
  /**
   * Used to specify heat capacity properties without a {@link HeatEnergySource heat energy source}.
   */
  export interface HeatBuffer {
    /**
     * Must be >= `default_temperature`.
     */
    max_temperature: double
    specific_heat: Energy
    max_transfer: Energy
    /**
     * **Default:** `15`
     */
    default_temperature?: double
    /**
     * **Default:** `1`
     */
    min_temperature_gradient?: double
    /**
     * **Default:** `15`
     *
     * Must be >= `default_temperature` and <= `max_temperature`.
     */
    min_working_temperature?: double
    /**
     * **Default:** `1`
     */
    minimum_glow_temperature?: float
    pipe_covers?: Sprite4Way
    heat_pipe_covers?: Sprite4Way
    heat_picture?: Sprite4Way
    heat_glow?: Sprite4Way
    /**
     * May contain up to 32 connections.
     */
    connections?: readonly HeatConnection[]
  }
  /**
   * Defines the connections for {@link HeatEnergySource} and {@link HeatBuffer}.
   */
  export interface HeatConnection {
    /**
     * The location of the heat pipe connection, relative to the center of the entity in the north-facing direction.
     */
    position: MapPosition
    /**
     * The "outward" direction of this heat connection. For a connection to succeed, the other heat connection must face the opposite direction (a south-facing connection needs a north-facing connection to succeed). A connection rotates with the entity.
     */
    direction: Direction
  }
  export interface HeatEnergySource extends BaseEnergySource {
    readonly type: "heat"
    /**
     * Must be >= `default_temperature`.
     */
    max_temperature: double
    specific_heat: Energy
    max_transfer: Energy
    /**
     * **Default:** `15`
     */
    default_temperature?: double
    /**
     * **Default:** `1`
     */
    min_temperature_gradient?: double
    /**
     * **Default:** `15`
     *
     * Must be >= `default_temperature` and <= `max_temperature`.
     */
    min_working_temperature?: double
    /**
     * **Default:** `1`
     */
    minimum_glow_temperature?: float
    pipe_covers?: Sprite4Way
    heat_pipe_covers?: Sprite4Way
    heat_picture?: Sprite4Way
    heat_glow?: Sprite4Way
    /**
     * May contain up to 32 connections.
     */
    connections?: readonly HeatConnection[]
  }
  /**
   * ## Union members
   * - `"left"`
   * - `"center"`
   * - `"right"`
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
   */
  export interface IconData {
    /**
     * Path to the icon file.
     */
    icon: FileName
    /**
     * The size of the square icon, in pixels. E.g. `32` for a 32px by 32px icon.
     *
     * Mandatory if `icon_size` is not specified outside of `icons`.
     */
    icon_size?: SpriteSizeType
    /**
     * **Default:** ``{r=1, g=1, b=1, a=1}``
     *
     * The tint to apply to the icon.
     */
    tint?: Color
    /**
     * **Default:** ``{0, 0}``
     *
     * Used to offset the icon "layer" from the overall icon. The shift is applied from the center (so negative shifts are left and up, respectively). Shift values are based on final size (`icon_size * scale`) of the first icon.
     */
    shift?: Vector
    /**
     * Defaults to `32/icon_size` for items and recipes, and `256/icon_size` for technologies.
     *
     * Specifies the scale of the icon on the GUI scale. A scale of `2` means that the icon will be two times bigger on screen (and thus more pixelated).
     */
    scale?: double
    /**
     * **Default:** `0`
     *
     * Icons of reduced size will be used at decreased scale.
     */
    icon_mipmaps?: IconMipMapType
  }
  /**
   * Icons of reduced size will be used at decreased scale. 0 or 1 mipmaps is a single image. The file must contain half-size images with a geometric-ratio, for each mipmap level. Each next level is aligned to the upper-left corner, with no extra padding. Example sequence: `128x128@(0,0)`, `64x64@(128,0)`, `32x32@(192,0)` is three mipmaps.
   *
   * See {@linkplain https://factorio.com/blog/post/fff-291 here} for more about the visual effects of icon mipmaps.
   */
  export type IconMipMapType = uint8
  /**
   * @example
   * data.raw["gui-style"]["default"]["stretchy-sprite"] = {
   *   type = "image_style",
   *   vertically_stretchable = "on",
   *   horizontally_stretchable = "on",
   *   stretch_image_to_widget_size = true,
   * }
   */
  export interface ImageStyleSpecification extends BaseStyleSpecification {
    readonly type: "image_style"
    graphical_set?: ElementImageSet
    stretch_image_to_widget_size?: bool
  }
  /**
   * Defaults to loading ingredients as items. This allows {@link ItemIngredientPrototype} to load in a shorthand array format.
   *
   * ## Union members
   * - {@link ItemIngredientPrototype}: Loaded when the `type` is `"item"`.
   * - {@link FluidIngredientPrototype}: Loaded when the `type` is `"fluid"`.
   * @example
   * {"electronic-circuit", 5} -- short format used for item ingredients
   * @example
   * {type="item", name="steel-plate", amount=8} -- long format used for item ingredients
   * @example
   * {type="fluid", name="water", amount=50} -- fluid ingredients must use the long format
   */
  export type IngredientPrototype = ItemIngredientPrototype | FluidIngredientPrototype
  export interface InsertItemTriggerEffectItem extends TriggerEffectItem {
    readonly type: "insert-item"
    /**
     * Name of the {@link ItemPrototype} that should be created.
     */
    item: ItemID
    /**
     * **Default:** `1`
     */
    count?: uint32
  }
  export interface InserterStackSizeBonusModifier extends SimpleModifier {
    readonly type: "inserter-stack-size-bonus"
    /**
     * **Default:** `false`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  export interface InstantTriggerDelivery extends TriggerDeliveryItem {
    readonly type: "instant"
  }
  export interface InterruptibleSound {
    sound: Sound
    /**
     * **Default:** `0`
     */
    fade_ticks?: uint32
  }
  export interface InvokeTileEffectTriggerEffectItem extends TriggerEffectItem {
    readonly type: "invoke-tile-trigger"
    tile_collision_mask?: CollisionMask
  }
  export type ItemCountType = uint32
  /**
   * The name of an {@link ItemGroup}.
   * @example
   * "logistics"
   * @example
   * "production"
   */
  export type ItemGroupID = string
  /**
   * The name of an {@link ItemPrototype}.
   * @example
   * "iron-plate"
   * @example
   * "blueprint-book"
   */
  export type ItemID = string
  /**
   * An item ingredient definition. It can be specified as a table with named or numbered keys, but not a mix of both. If this is specified as a table with numbered keys then the first value is the item name and the second is the amount.
   * @example
   * {type="item", name="steel-plate", amount=8}
   * @example
   * {"iron-plate", 12}
   */
  export type ItemIngredientPrototype =
    | {
        /**
         * **Default:** `"item"`
         */
        readonly type?: "item"
        name: ItemID
        amount: uint16
        /**
         * **Default:** `0`
         *
         * Amount of this ingredient that should not be included in the item consumption statistics. Usually used together with an equal catalyst amount on the "product" of the catalyst in the recipe.
         *
         * If this fluid is used in a recipe, the `catalyst_amount` is calculated automatically based on the {@link RecipePrototype#ingredients RecipePrototype::ingredients} and {@link RecipePrototype#results RecipePrototype::results}. See {@linkplain https://factorio.com/blog/post/fff-256 here}.
         */
        catalyst_amount?: uint16
      }
    | readonly [ItemID, uint16]
  /**
   * An item product definition. It can be specified as a table with named or numbered keys, but not a mix of both. If this is specified as a table with numbered keys then the first value is the item name and the second is the amount.
   */
  export type ItemProductPrototype =
    | {
        /**
         * **Default:** `"item"`
         */
        readonly type?: "item"
        /**
         * The name of an {@link ItemPrototype}.
         */
        name: ItemID
        amount?: uint16
        /**
         * Only loaded if `amount` is not defined.
         */
        amount_min: uint16
        /**
         * Only loaded if `amount` is not defined.
         *
         * If set to a number that is less than `amount_min`, the game will use `amount_min` instead.
         */
        amount_max: uint16
        /**
         * **Default:** `1`
         *
         * Value between 0 and 1, `0` for 0% chance and `1` for 100% chance.
         *
         * The effect of probability is no product, or a linear distribution on [min, max]. For a recipe with probability `p`, amount_min `min`, and amount_max `max`, the Expected Value of this product can be expressed as `p * (0.5 * (max + min))`. This is what will be shown in a recipe tooltip. The effect of `catalyst_amount` on the product is not shown.
         *
         * When `amount_min` and `amount_max` are not provided, `amount` applies as min and max. The Expected Value simplifies to `p * amount`, providing `0` product, or `amount` product, on recipe completion.
         */
        probability?: double
        /**
         * **Default:** `0`
         *
         * Amount that should not be affected by productivity modules (not yielded from bonus production) and should not be included in the item production statistics.
         *
         * If this item is used in a recipe, the `catalyst_amount` is calculated automatically based on the {@link RecipePrototype#ingredients RecipePrototype::ingredients} and {@link RecipePrototype#results RecipePrototype::results}. See {@linkplain https://factorio.com/blog/post/fff-256 here}.
         */
        catalyst_amount?: uint16
        /**
         * **Default:** `true`
         *
         * When hovering over a recipe in the crafting menu the recipe tooltip will be shown. An additional item tooltip will be shown for every product, as a separate tooltip, if the item tooltip has a description and/or properties to show and if `show_details_in_recipe_tooltip` is `true`.
         */
        show_details_in_recipe_tooltip?: bool
      }
    | readonly [ItemID, uint16]
  /**
   * An array containing the following values.
   *
   * ## Union members
   * - `"draw-logistic-overlay"`: Whether the logistics areas of roboports should be drawn when holding this item. Used for example by the {@linkplain https://wiki.factorio.com/Deconstruction_planner deconstruction planner}.
   * - `"hidden"`: Item will not appear in lists of all items such as those for logistics requests, filters, etc.
   * - `"always-show"`: Always show the item in selection lists (item filter, logistic request etc.) even when locked recipe for that item is present.
   * - `"hide-from-bonus-gui"`: Item will not appear in the bonus gui.
   * - `"hide-from-fuel-tooltip"`: Item will not appear in the tooltips shown when hovering over a burner inventory with the fuel category the item is in.
   * - `"not-stackable"`: The item can never be stacked. Additionally, the item does not show an item count when in the cursor. This also prevents the item from stacking in assembling machine input slots, which otherwise can exceed the item stack size if required by the recipe.
   * - `"can-extend-inventory"`: Must be set on {@link ItemWithInventoryPrototype} when the item should act as an extension to the inventory that it is placed in. Does nothing for other item types.
   * - `"primary-place-result"`: Item will be preferred by construction bots when building the entity specified by the item's {@link ItemPrototype#place_result place_result}.
   * - `"mod-openable"`: Only works for {@link SelectionToolPrototype} and derived classes. Corresponds to the runtime {@link import("factorio:runtime").on_mod_item_opened on_mod_item_opened} event.
   * - `"only-in-cursor"`: Item is deleted when removed from the cursor by pressing `Q` ("clear cursor"). Used for example by the copy/paste tools.
   * - `"spawnable"`: Item is able to be spawned by a {@link ShortcutPrototype} or {@link CustomInputPrototype}.
   */
  export type ItemPrototypeFlags = readonly (
    | "draw-logistic-overlay"
    | "hidden"
    | "always-show"
    | "hide-from-bonus-gui"
    | "hide-from-fuel-tooltip"
    | "not-stackable"
    | "can-extend-inventory"
    | "primary-place-result"
    | "mod-openable"
    | "only-in-cursor"
    | "spawnable"
  )[]
  export type ItemStackIndex = uint16
  /**
   * The name of an {@link ItemSubGroup}.
   * @example
   * "capsule"
   * @example
   * "military-equipment"
   */
  export type ItemSubGroupID = string
  /**
   * Item that when placed creates this entity/tile.
   * @example
   * {item = "iron-chest", count = 1}
   */
  export interface ItemToPlace {
    /**
     * The item used to place this entity/tile.
     */
    item: ItemID
    /**
     * How many items are used to place one of this entity/tile. Can't be larger than the stack size of the item.
     */
    count: uint32
  }
  export interface LabelStyleSpecification extends BaseStyleSpecification {
    readonly type: "label_style"
    /**
     * Name of a {@link FontPrototype}.
     */
    font?: string
    font_color?: Color
    hovered_font_color?: Color
    game_controller_hovered_font_color?: Color
    clicked_font_color?: Color
    disabled_font_color?: Color
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
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  export interface LaboratorySpeedModifier extends SimpleModifier {
    readonly type: "laboratory-speed"
    /**
     * **Default:** `true`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  export type LayeredSound =
    | {
        layers: readonly Sound[]
      }
    | Sound
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
   */
  export type LightDefinition =
    | {
        /**
         * **Default:** `"basic"`
         */
        readonly type?: "basic" | "oriented"
        /**
         * Only loaded, and mandatory if `type` is `"oriented"`.
         */
        picture?: Sprite
        /**
         * **Default:** `0`
         *
         * Only loaded if `type` is `"oriented"`.
         */
        rotation_shift?: RealOrientation
        /**
         * Brightness of the light in the range `[0, 1]`, where `0` is no light and `1` is the maximum light.
         */
        intensity: float
        /**
         * The radius of the light in tiles. Note that the light gets darker near the edges, so the effective size of the light will appear to be smaller.
         */
        size: float
        /**
         * **Default:** `0`
         */
        source_orientation_offset?: RealOrientation
        /**
         * **Default:** `false`
         */
        add_perspective?: bool
        shift?: Vector
        /**
         * **Default:** `Light has no color`
         *
         * Color of the light.
         */
        color?: Color
        /**
         * **Default:** `0`
         */
        minimum_darkness?: float
      }
    | readonly {
        /**
         * **Default:** `"basic"`
         */
        readonly type?: "basic" | "oriented"
        /**
         * Only loaded, and mandatory if `type` is `"oriented"`.
         */
        picture?: Sprite
        /**
         * **Default:** `0`
         *
         * Only loaded if `type` is `"oriented"`.
         */
        rotation_shift?: RealOrientation
        /**
         * Brightness of the light in the range `[0, 1]`, where `0` is no light and `1` is the maximum light.
         */
        intensity: float
        /**
         * The radius of the light in tiles. Note that the light gets darker near the edges, so the effective size of the light will appear to be smaller.
         */
        size: float
        /**
         * **Default:** `0`
         */
        source_orientation_offset?: RealOrientation
        /**
         * **Default:** `false`
         */
        add_perspective?: bool
        shift?: Vector
        /**
         * **Default:** `Light has no color`
         *
         * Color of the light.
         */
        color?: Color
        /**
         * **Default:** `0`
         */
        minimum_darkness?: float
      }[]
  /**
   * Specifies the light flicker. Note that this defaults to "showing a white light" instead of the usually expected "showing nothing".
   */
  export interface LightFlickeringDefinition {
    /**
     * **Default:** `0.2`
     *
     * Brightness of the light in the range [0, 1] where 0 is no light and 1 is the maximum light.
     */
    minimum_intensity?: float
    /**
     * **Default:** `0.8`
     *
     * Brightness of the light in the range [0, 1] where 0 is no light and 1 is the maximum light.
     */
    maximum_intensity?: float
    /**
     * **Default:** `0.3`
     */
    derivation_change_frequency?: float
    /**
     * **Default:** `0.06`
     */
    derivation_change_deviation?: float
    /**
     * **Default:** `0.02`
     */
    border_fix_speed?: float
    /**
     * **Default:** `0.5`
     *
     * The radius of the light in tiles. Note, that the light gets darker near the edges, so the effective size of the light seems to be smaller.
     */
    minimum_light_size?: float
    /**
     * **Default:** `0.5`
     */
    light_intensity_to_size_coefficient?: float
    /**
     * **Default:** `{r=1, g=1, b=1} (White)`
     *
     * Color of the light.
     */
    color?: Color
  }
  export interface LimitChestTipTrigger {
    readonly type: "limit-chest"
    /**
     * **Default:** `1`
     */
    count?: uint32
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
   */
  export interface LineTriggerItem extends TriggerItem {
    readonly type: "line"
    range: double
    width: double
    range_effects?: TriggerEffect
  }
  /**
   * @see LinkedBeltPrototype.structure
   */
  export interface LinkedBeltStructure {
    direction_in: Sprite4Way
    direction_out: Sprite4Way
    back_patch?: Sprite4Way
    front_patch?: Sprite4Way
    direction_in_side_loading?: Sprite4Way
    direction_out_side_loading?: Sprite4Way
  }
  /**
   * The internal name of a game control (key binding).
   *
   * ## Union members
   * - `"action-bar-select-page-1"`
   * - `"action-bar-select-page-10"`
   * - `"action-bar-select-page-2"`
   * - `"action-bar-select-page-3"`
   * - `"action-bar-select-page-4"`
   * - `"action-bar-select-page-5"`
   * - `"action-bar-select-page-6"`
   * - `"action-bar-select-page-7"`
   * - `"action-bar-select-page-8"`
   * - `"action-bar-select-page-9"`
   * - `"activate-tooltip"`
   * - `"add-station"`
   * - `"add-temporary-station"`
   * - `"alt-zoom-in"`
   * - `"alt-zoom-out"`
   * - `"build"`
   * - `"build-ghost"`
   * - `"build-with-obstacle-avoidance"`
   * - `"cancel-craft"`
   * - `"cancel-craft-5"`
   * - `"cancel-craft-all"`
   * - `"clear-cursor"`
   * - `"confirm-gui"`
   * - `"confirm-message"`
   * - `"connect-train"`
   * - `"controller-gui-crafting-tab"`
   * - `"controller-gui-logistics-tab"`
   * - `"copy"`
   * - `"copy-entity-settings"`
   * - `"craft"`
   * - `"craft-5"`
   * - `"craft-all"`
   * - `"cursor-split"`
   * - `"cut"`
   * - `"cycle-blueprint-backwards"`
   * - `"cycle-blueprint-forwards"`
   * - `"cycle-clipboard-backwards"`
   * - `"cycle-clipboard-forwards"`
   * - `"debug-reset-zoom"`
   * - `"debug-reset-zoom-2x"`
   * - `"debug-toggle-atlas-gui"`
   * - `"debug-toggle-basic"`
   * - `"debug-toggle-debug-settings"`
   * - `"decrease-ui-scale"`
   * - `"disconnect-train"`
   * - `"drag-map"`
   * - `"drop-cursor"`
   * - `"editor-clone-item"`
   * - `"editor-delete-item"`
   * - `"editor-next-variation"`
   * - `"editor-previous-variation"`
   * - `"editor-remove-scripting-object"`
   * - `"editor-reset-speed"`
   * - `"editor-set-clone-brush-destination"`
   * - `"editor-set-clone-brush-source"`
   * - `"editor-speed-down"`
   * - `"editor-speed-up"`
   * - `"editor-switch-to-surface"`
   * - `"editor-tick-once"`
   * - `"editor-toggle-pause"`
   * - `"fast-entity-split"`
   * - `"fast-entity-transfer"`
   * - `"flip-blueprint-horizontal"`
   * - `"flip-blueprint-vertical"`
   * - `"focus-search"`
   * - `"increase-ui-scale"`
   * - `"inventory-split"`
   * - `"inventory-transfer"`
   * - `"larger-terrain-building-area"`
   * - `"logistic-networks"`
   * - `"mine"`
   * - `"move-down"`
   * - `"move-left"`
   * - `"move-right"`
   * - `"move-up"`
   * - `"next-active-quick-bar"`
   * - `"next-player-in-replay"`
   * - `"next-weapon"`
   * - `"open-character-gui"`
   * - `"open-gui"`
   * - `"open-item"`
   * - `"open-prototype-explorer-gui"`
   * - `"open-prototypes-gui"`
   * - `"open-technology-gui"`
   * - `"open-trains-gui"`
   * - `"order-to-follow"`
   * - `"paste"`
   * - `"paste-entity-settings"`
   * - `"pause-game"`
   * - `"pick-item"`
   * - `"pick-items"`
   * - `"place-in-chat"`
   * - `"place-ping"`
   * - `"previous-active-quick-bar"`
   * - `"previous-mod"`
   * - `"previous-technology"`
   * - `"production-statistics"`
   * - `"quick-bar-button-1"`
   * - `"quick-bar-button-1-secondary"`
   * - `"quick-bar-button-10"`
   * - `"quick-bar-button-10-secondary"`
   * - `"quick-bar-button-2"`
   * - `"quick-bar-button-2-secondary"`
   * - `"quick-bar-button-3"`
   * - `"quick-bar-button-3-secondary"`
   * - `"quick-bar-button-4"`
   * - `"quick-bar-button-4-secondary"`
   * - `"quick-bar-button-5"`
   * - `"quick-bar-button-5-secondary"`
   * - `"quick-bar-button-6"`
   * - `"quick-bar-button-6-secondary"`
   * - `"quick-bar-button-7"`
   * - `"quick-bar-button-7-secondary"`
   * - `"quick-bar-button-8"`
   * - `"quick-bar-button-8-secondary"`
   * - `"quick-bar-button-9"`
   * - `"quick-bar-button-9-secondary"`
   * - `"remove-pole-cables"`
   * - `"reset-ui-scale"`
   * - `"reverse-rotate"`
   * - `"reverse-select"`
   * - `"alt-reverse-select"`
   * - `"rotate"`
   * - `"rotate-active-quick-bars"`
   * - `"select-for-blueprint"`
   * - `"select-for-cancel-deconstruct"`
   * - `"shoot-enemy"`
   * - `"shoot-selected"`
   * - `"show-info"`
   * - `"smaller-terrain-building-area"`
   * - `"smart-pipette"`
   * - `"stack-split"`
   * - `"stack-transfer"`
   * - `"toggle-blueprint-library"`
   * - `"toggle-console"`
   * - `"toggle-driving"`
   * - `"toggle-filter"`
   * - `"toggle-gui-debug"`
   * - `"toggle-gui-glows"`
   * - `"toggle-gui-shadows"`
   * - `"toggle-gui-style-view"`
   * - `"toggle-map"`
   * - `"toggle-menu"`
   * - `"undo"`
   * - `"zoom-in"`
   * - `"zoom-out"`
   */
  export type LinkedGameControl =
    | "action-bar-select-page-1"
    | "action-bar-select-page-10"
    | "action-bar-select-page-2"
    | "action-bar-select-page-3"
    | "action-bar-select-page-4"
    | "action-bar-select-page-5"
    | "action-bar-select-page-6"
    | "action-bar-select-page-7"
    | "action-bar-select-page-8"
    | "action-bar-select-page-9"
    | "activate-tooltip"
    | "add-station"
    | "add-temporary-station"
    | "alt-zoom-in"
    | "alt-zoom-out"
    | "build"
    | "build-ghost"
    | "build-with-obstacle-avoidance"
    | "cancel-craft"
    | "cancel-craft-5"
    | "cancel-craft-all"
    | "clear-cursor"
    | "confirm-gui"
    | "confirm-message"
    | "connect-train"
    | "controller-gui-crafting-tab"
    | "controller-gui-logistics-tab"
    | "copy"
    | "copy-entity-settings"
    | "craft"
    | "craft-5"
    | "craft-all"
    | "cursor-split"
    | "cut"
    | "cycle-blueprint-backwards"
    | "cycle-blueprint-forwards"
    | "cycle-clipboard-backwards"
    | "cycle-clipboard-forwards"
    | "debug-reset-zoom"
    | "debug-reset-zoom-2x"
    | "debug-toggle-atlas-gui"
    | "debug-toggle-basic"
    | "debug-toggle-debug-settings"
    | "decrease-ui-scale"
    | "disconnect-train"
    | "drag-map"
    | "drop-cursor"
    | "editor-clone-item"
    | "editor-delete-item"
    | "editor-next-variation"
    | "editor-previous-variation"
    | "editor-remove-scripting-object"
    | "editor-reset-speed"
    | "editor-set-clone-brush-destination"
    | "editor-set-clone-brush-source"
    | "editor-speed-down"
    | "editor-speed-up"
    | "editor-switch-to-surface"
    | "editor-tick-once"
    | "editor-toggle-pause"
    | "fast-entity-split"
    | "fast-entity-transfer"
    | "flip-blueprint-horizontal"
    | "flip-blueprint-vertical"
    | "focus-search"
    | "increase-ui-scale"
    | "inventory-split"
    | "inventory-transfer"
    | "larger-terrain-building-area"
    | "logistic-networks"
    | "mine"
    | "move-down"
    | "move-left"
    | "move-right"
    | "move-up"
    | "next-active-quick-bar"
    | "next-player-in-replay"
    | "next-weapon"
    | "open-character-gui"
    | "open-gui"
    | "open-item"
    | "open-prototype-explorer-gui"
    | "open-prototypes-gui"
    | "open-technology-gui"
    | "open-trains-gui"
    | "order-to-follow"
    | "paste"
    | "paste-entity-settings"
    | "pause-game"
    | "pick-item"
    | "pick-items"
    | "place-in-chat"
    | "place-ping"
    | "previous-active-quick-bar"
    | "previous-mod"
    | "previous-technology"
    | "production-statistics"
    | "quick-bar-button-1"
    | "quick-bar-button-1-secondary"
    | "quick-bar-button-10"
    | "quick-bar-button-10-secondary"
    | "quick-bar-button-2"
    | "quick-bar-button-2-secondary"
    | "quick-bar-button-3"
    | "quick-bar-button-3-secondary"
    | "quick-bar-button-4"
    | "quick-bar-button-4-secondary"
    | "quick-bar-button-5"
    | "quick-bar-button-5-secondary"
    | "quick-bar-button-6"
    | "quick-bar-button-6-secondary"
    | "quick-bar-button-7"
    | "quick-bar-button-7-secondary"
    | "quick-bar-button-8"
    | "quick-bar-button-8-secondary"
    | "quick-bar-button-9"
    | "quick-bar-button-9-secondary"
    | "remove-pole-cables"
    | "reset-ui-scale"
    | "reverse-rotate"
    | "reverse-select"
    | "alt-reverse-select"
    | "rotate"
    | "rotate-active-quick-bars"
    | "select-for-blueprint"
    | "select-for-cancel-deconstruct"
    | "shoot-enemy"
    | "shoot-selected"
    | "show-info"
    | "smaller-terrain-building-area"
    | "smart-pipette"
    | "stack-split"
    | "stack-transfer"
    | "toggle-blueprint-library"
    | "toggle-console"
    | "toggle-driving"
    | "toggle-filter"
    | "toggle-gui-debug"
    | "toggle-gui-glows"
    | "toggle-gui-shadows"
    | "toggle-gui-style-view"
    | "toggle-map"
    | "toggle-menu"
    | "undo"
    | "zoom-in"
    | "zoom-out"
  export interface ListBoxStyleSpecification extends BaseStyleSpecification {
    readonly type: "list_box_style"
    item_style?: ButtonStyleSpecification
    scroll_pane_style?: ScrollPaneStyleSpecification
  }
  export interface LoaderStructure {
    direction_in: Sprite4Way
    direction_out: Sprite4Way
    back_patch?: Sprite4Way
    front_patch?: Sprite4Way
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
   */
  export type LocalisedString = string | number | boolean | undefined | readonly [string, ...LocalisedString[]]
  /**
   * The items generated when an {@link EntityWithHealthPrototype} is killed.
   */
  export interface LootItem {
    /**
     * The item to spawn.
     */
    item: ItemID
    /**
     * **Default:** `1`
     *
     * `0` is 0% and `1` is 100%. Must be `> 0`.
     */
    probability?: double
    /**
     * **Default:** `1`
     */
    count_min?: double
    /**
     * **Default:** `1`
     *
     * Must be `> 0`.
     */
    count_max?: double
  }
  export interface LowPowerTipTrigger {
    readonly type: "low-power"
    /**
     * **Default:** `1`
     */
    count?: uint32
  }
  export interface ManualTransferTipTrigger {
    readonly type: "manual-transfer"
    /**
     * **Default:** `1`
     */
    count?: uint32
  }
  export interface ManualWireDragTipTrigger {
    readonly type: "manual-wire-drag"
    /**
     * **Default:** `1`
     */
    count?: uint32
  }
  /**
   * @see UtilityConstants.map_editor
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
     */
    order: Order
    /**
     * **Default:** `true`
     *
     * Whether this is the default preset. If `true`, this preset may not have any other properties besides this and order.
     *
     * If no MapGenPreset has `default = true`, the preset selector will have a blank preset label, with default settings. The "blank" preset goes away when another preset is selected.
     */
    default?: bool
    /**
     * If any setting is not set, it will use the default values.
     */
    basic_settings?: MapGenSettings
    /**
     * If any setting is not set, it will use the default values.
     */
    advanced_settings?: AdvancedMapGenSettings
  }
  export interface MapGenPresetDifficultySettings {
    /**
     * A {@link defines.difficulty_settings.recipe_difficulty}.
     */
    recipe_difficulty?: uint8
    /**
     * A {@link defines.difficulty_settings.technology_difficulty}.
     */
    technology_difficulty?: uint8
    technology_price_multiplier?: double
    research_queue_setting?: "always" | "after-victory" | "never"
  }
  export interface MapGenPresetEnemyEvolutionSettings {
    enabled?: bool
    /**
     * Percentual increase in the evolution factor for every second (60 ticks)
     */
    time_factor?: double
    /**
     * Percentual increase in the evolution factor for every destroyed spawner
     */
    destroy_factor?: double
    /**
     * Percentual increase in the evolution factor for 1 pollution unit
     */
    pollution_factor?: double
  }
  export interface MapGenPresetEnemyExpansionSettings {
    enabled?: bool
    /**
     * Distance in chunks from the furthest base around. This prevents expansions from reaching too far into the player's territory.
     */
    max_expansion_distance?: uint32
    /**
     * Size of the group that goes to build new base (the game interpolates between min size and max size based on evolution factor).
     */
    settler_group_min_size?: uint32
    settler_group_max_size?: uint32
    /**
     * Ticks to expand to a single position for a base is used. Cooldown is calculated as follows: `cooldown = lerp(max_expansion_cooldown, min_expansion_cooldown, -e^2 + 2 * e)` where `lerp` is the linear interpolation function, and e is the current evolution factor.
     */
    min_expansion_cooldown?: uint32
    /**
     * In ticks.
     */
    max_expansion_cooldown?: uint32
  }
  /**
   * The pollution settings, the values are for 60 ticks (1 second).
   */
  export interface MapGenPresetPollutionSettings {
    enabled?: bool
    /**
     * Must be <= 0.25. Amount that is diffused to neighboring chunks.
     */
    diffusion_ratio?: double
    /**
     * Must be >= 0.1. Also known as absorption modifier and previously dissipation rate.
     */
    ageing?: double
    min_pollution_to_damage_trees?: double
    /**
     * Must be >= 0.1.
     */
    enemy_attack_pollution_consumption_modifier?: double
    pollution_restored_per_tree_damage?: double
  }
  export interface MapGenSettings {
    /**
     * This is the inverse of "water scale" in the map generator GUI. So a water scale that shows as 50% in the GUI is a value of `1/0.5 = 2` for `terrain_segmentation`.
     */
    terrain_segmentation?: MapGenSize
    /**
     * Shown as water coverage in the map generator GUI.
     */
    water?: MapGenSize
    /**
     * **Default:** `true`
     *
     * Whether undefined `autoplace_controls` should fall back to the default controls or not.
     */
    default_enable_all_autoplace_controls?: bool
    autoplace_controls?: Record<AutoplaceControlID, FrequencySizeRichness>
    /**
     * Each setting in this table maps the string type to the settings for that type.
     */
    autoplace_settings?: Record<"entity" | "tile" | "decorative", AutoplaceSettings>
    /**
     * Map of property name (`"elevation"`, etc) to name of noise expression that will provide it. Entries may be omitted. A notable usage is changing autoplace behavior of an entity based on the preset, which cannot be read from a noise expression.
     */
    property_expression_names?: Record<string, string | bool | double>
    /**
     * Array of the positions of the starting areas.
     */
    starting_points?: readonly MapPosition[]
    /**
     * Read by the game, but not used or set in the GUI.
     */
    seed?: uint32
    /**
     * Width of the map in tiles. Silently limited to 2 000 000, ie. +/- 1 million tiles from the center in both directions.
     */
    width?: uint32
    /**
     * Height of the map in tiles. Silently limited to 2 000 000, ie. +/- 1 million tiles from the center in both directions.
     */
    height?: uint32
    /**
     * Size of the starting area. The starting area only effects enemy placement, and has no effect on resources.
     */
    starting_area?: MapGenSize
    peaceful_mode?: bool
    cliff_settings?: CliffPlacementSettings
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
   */
  export type MapPosition =
    | {
        x: double
        y: double
      }
    | readonly [double, double]
  export type MaterialAmountType = double
  export interface MaxFailedAttemptsPerTickPerConstructionQueueModifier extends SimpleModifier {
    readonly type: "max-failed-attempts-per-tick-per-construction-queue"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  export interface MaxSuccessfulAttemptsPerTickPerConstructionQueueModifier extends SimpleModifier {
    readonly type: "max-successful-attempts-per-tick-per-construction-queue"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  export interface MaximumFollowingRobotsCountModifier extends SimpleModifier {
    readonly type: "maximum-following-robots-count"
    /**
     * **Default:** `false`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
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
   */
  export interface MinableProperties {
    /**
     * How many seconds are required to mine this object at 1 mining speed.
     */
    mining_time: double
    /**
     * The items that are returned when this object is mined.
     */
    results?: readonly ProductPrototype[]
    /**
     * Only loaded if `results` is not defined.
     *
     * Which item is dropped when this is mined. Cannot be empty. If you want the entity to not be minable, don't specify the minable properties, if you want it to be minable with no result item, don't specify the result at all.
     */
    result?: ItemID
    /**
     * **Default:** `0`
     *
     * The amount of fluid that is used up when this object is mined. If this is > 0, this object cannot be mined by hand.
     */
    fluid_amount?: double
    /**
     * Name of a {@link ParticlePrototype}. Which set of particles to use.
     */
    mining_particle?: ParticleID
    /**
     * Name of a {@link FluidPrototype}. The fluid that is used up when this object is mined.
     */
    required_fluid?: FluidID
    /**
     * **Default:** `1`
     *
     * Only loaded if `results` is not defined.
     *
     * How many of result are dropped.
     */
    count?: uint16
    mining_trigger?: Trigger
  }
  export interface MinimapStyleSpecification extends Omit<EmptyWidgetStyleSpecification, "type"> {
    readonly type: "minimap_style"
  }
  /**
   * Used by {@link MiningDrillPrototype}.
   */
  export interface MiningDrillGraphicsSet {
    animation?: Animation4Way
    /**
     * Idle animation must have the same frame count as animation.
     */
    idle_animation?: Animation4Way
    /**
     * **Default:** `false`
     *
     * Only loaded if `idle_animation` is defined.
     */
    always_draw_idle_animation?: bool
    default_recipe_tint?: DefaultRecipeTint
    working_visualisations?: readonly WorkingVisualisation[]
    /**
     * Only loaded if one of `shift_animation_waypoint_stop_duration` or `shift_animation_transition_duration` is not `0`.
     */
    shift_animation_waypoints?: ShiftAnimationWaypoints
    /**
     * **Default:** `0`
     *
     * Only loaded if `shift_animation_waypoints` is defined.
     */
    shift_animation_waypoint_stop_duration?: uint16
    /**
     * **Default:** `0`
     *
     * Only loaded if `shift_animation_waypoints` is defined.
     */
    shift_animation_transition_duration?: uint16
    /**
     * Used by {@link WorkingVisualisation#apply_tint WorkingVisualisation::apply_tint}.
     */
    status_colors?: StatusColors
    /**
     * **Default:** `0`
     */
    drilling_vertical_movement_duration?: uint16
    /**
     * **Default:** `1`
     */
    animation_progress?: float
    /**
     * **Default:** `1000`
     */
    max_animation_progress?: float
    /**
     * **Default:** `0`
     */
    min_animation_progress?: float
    /**
     * **Default:** `"object"`
     *
     * Render layer(s) for all directions of the circuit connectors.
     */
    circuit_connector_layer?: RenderLayer | CircuitConnectorLayer
    /**
     * **Default:** `100`
     *
     * Secondary draw order(s) for all directions of the circuit connectors.
     */
    circuit_connector_secondary_draw_order?: int8 | CircuitConnectorSecondaryDrawOrder
  }
  export interface MiningDrillProductivityBonusModifier extends SimpleModifier {
    readonly type: "mining-drill-productivity-bonus"
    /**
     * **Default:** `false`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  /**
   * The user-set value of a startup {@linkplain https://wiki.factorio.com/Tutorial:Mod_settings mod setting}.
   */
  export interface ModSetting {
    /**
     * The value of the mod setting. The type depends on the kind of setting.
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
   * - {@link StackInserterCapacityBonusModifier}: Loaded when the `type` is `"stack-inserter-capacity-bonus"`.
   * - {@link LaboratorySpeedModifier}: Loaded when the `type` is `"laboratory-speed"`.
   * - {@link LaboratoryProductivityModifier}: Loaded when the `type` is `"laboratory-productivity"`.
   * - {@link MaximumFollowingRobotsCountModifier}: Loaded when the `type` is `"maximum-following-robots-count"`.
   * - {@link WorkerRobotSpeedModifier}: Loaded when the `type` is `"worker-robot-speed"`.
   * - {@link WorkerRobotStorageModifier}: Loaded when the `type` is `"worker-robot-storage"`.
   * - {@link WorkerRobotBatteryModifier}: Loaded when the `type` is `"worker-robot-battery"`.
   * - {@link FollowerRobotLifetimeModifier}: Loaded when the `type` is `"follower-robot-lifetime"`.
   * - {@link GhostTimeToLiveModifier}: Loaded when the `type` is `"ghost-time-to-live"`.
   * - {@link DeconstructionTimeToLiveModifier}: Loaded when the `type` is `"deconstruction-time-to-live"`.
   * - {@link TurretAttackModifier}: Loaded when the `type` is `"turret-attack"`.
   * - {@link AmmoDamageModifier}: Loaded when the `type` is `"ammo-damage"`.
   * - {@link ArtilleryRangeModifier}: Loaded when the `type` is `"artillery-range"`.
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
   * - {@link CharacterHealthBonusModifier}: Loaded when the `type` is `"character-health-bonus"`.
   * - {@link CharacterLogisticRequestsModifier}: Loaded when the `type` is `"character-logistic-requests"`.
   * - {@link CharacterLogisticTrashSlotsModifier}: Loaded when the `type` is `"character-logistic-trash-slots"`.
   * - {@link MaxFailedAttemptsPerTickPerConstructionQueueModifier}: Loaded when the `type` is `"max-failed-attempts-per-tick-per-construction-queue"`.
   * - {@link MaxSuccessfulAttemptsPerTickPerConstructionQueueModifier}: Loaded when the `type` is `"max-successful-attempts-per-tick-per-construction-queue"`.
   * - {@link MiningDrillProductivityBonusModifier}: Loaded when the `type` is `"mining-drill-productivity-bonus"`.
   * - {@link TrainBrakingForceBonusModifier}: Loaded when the `type` is `"train-braking-force-bonus"`.
   * - {@link ZoomToWorldEnabledModifier}: Loaded when the `type` is `"zoom-to-world-enabled"`.
   * - {@link ZoomToWorldGhostBuildingEnabledModifier}: Loaded when the `type` is `"zoom-to-world-ghost-building-enabled"`.
   * - {@link ZoomToWorldBlueprintEnabledModifier}: Loaded when the `type` is `"zoom-to-world-blueprint-enabled"`.
   * - {@link ZoomToWorldDeconstructionPlannerEnabledModifier}: Loaded when the `type` is `"zoom-to-world-deconstruction-planner-enabled"`.
   * - {@link ZoomToWorldUpgradePlannerEnabledModifier}: Loaded when the `type` is `"zoom-to-world-upgrade-planner-enabled"`.
   * - {@link ZoomToWorldSelectionToolEnabledModifier}: Loaded when the `type` is `"zoom-to-world-selection-tool-enabled"`.
   * - {@link NothingModifier}: Loaded when the `type` is `"nothing"`.
   */
  export type Modifier =
    | InserterStackSizeBonusModifier
    | StackInserterCapacityBonusModifier
    | LaboratorySpeedModifier
    | LaboratoryProductivityModifier
    | MaximumFollowingRobotsCountModifier
    | WorkerRobotSpeedModifier
    | WorkerRobotStorageModifier
    | WorkerRobotBatteryModifier
    | FollowerRobotLifetimeModifier
    | GhostTimeToLiveModifier
    | DeconstructionTimeToLiveModifier
    | TurretAttackModifier
    | AmmoDamageModifier
    | ArtilleryRangeModifier
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
    | CharacterHealthBonusModifier
    | CharacterLogisticRequestsModifier
    | CharacterLogisticTrashSlotsModifier
    | MaxFailedAttemptsPerTickPerConstructionQueueModifier
    | MaxSuccessfulAttemptsPerTickPerConstructionQueueModifier
    | MiningDrillProductivityBonusModifier
    | TrainBrakingForceBonusModifier
    | ZoomToWorldEnabledModifier
    | ZoomToWorldGhostBuildingEnabledModifier
    | ZoomToWorldBlueprintEnabledModifier
    | ZoomToWorldDeconstructionPlannerEnabledModifier
    | ZoomToWorldUpgradePlannerEnabledModifier
    | ZoomToWorldSelectionToolEnabledModifier
    | NothingModifier
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
   */
  export type Mods = Record<string, string>
  /**
   * The name of a {@link ModuleCategory}.
   * @example
   * "productivity"
   * @example
   * "effectivity"
   */
  export type ModuleCategoryID = string
  /**
   * The number of module slots in this entity, and their icon positions.
   * @example
   * module_specification =
   * {
   *   module_slots = 2,
   *   module_info_icon_shift = {0, 0.5},
   *   module_info_multi_row_initial_height_modifier = -0.3
   * }
   */
  export interface ModuleSpecification {
    /**
     * **Default:** `0`
     *
     * The number of module slots in this entity.
     */
    module_slots?: ItemStackIndex
    /**
     * **Default:** `width of entity selection box / 0.75`
     */
    module_info_max_icons_per_row?: uint8
    /**
     * **Default:** `width of entity selection box / 1.5`
     */
    module_info_max_icon_rows?: uint8
    /**
     * **Default:** `{0, 0.7}`
     */
    module_info_icon_shift?: Vector
    /**
     * **Default:** `0.5`
     */
    module_info_icon_scale?: float
    /**
     * **Default:** `1.1`
     */
    module_info_separation_multiplier?: float
    /**
     * **Default:** `-0.1`
     */
    module_info_multi_row_initial_height_modifier?: float
  }
  /**
   * ## Union members
   * - `"primary"`
   * - `"secondary"`
   * - `"tertiary"`
   * - `"quaternary"`
   * - `"none"`
   */
  export type ModuleTint = "primary" | "secondary" | "tertiary" | "quaternary" | "none"
  /**
   * The name of a {@link MouseCursor}.
   * @example
   * "selection-tool-cursor"
   */
  export type MouseCursorID = string
  export interface NestedTriggerEffectItem extends TriggerEffectItem {
    readonly type: "nested-result"
    action: Trigger
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
   */
  export interface NoiseArrayConstruction {
    readonly type: "array-construction"
    value_expressions: readonly NoiseExpression[]
  }
  /**
   * Loaded as one of the noise expressions listed in this union, based on the value of the `type` key.
   *
   * A fragment of a functional program used to generate coherent noise, probably for purposes related to terrain generation.
   *
   * Noise expressions can be provided as table literals or built using functions in the built-in {@linkplain https://github.com/wube/factorio-data/blob/master/core/lualib/noise.lua noise library}. The built-in noise library allows writing much more concise code, so its usage will be shown in most examples for noise expressions.
   *
   * {@linkplain https://github.com/wube/factorio-data/blob/master/core/lualib/noise.lua#L272 noise.define_noise_function} allows noise expressions to be defined using a shorthand that's a subset of Lua (see the example for details).
   *
   * See {@linkplain https://togos.github.io/togos-example-noise-programs/ here} for a tutorial on authoring noise expressions.
   *
   * The most frequently used noise functions are loaded via {@link NoiseFunctionApplication}.
   *
   * ## Union members
   * - {@link NoiseVariable}: Loaded when the `type` is `"variable"`.
   * - {@link NoiseFunctionApplication}: Loaded when the `type` is `"function-application"`.
   * - {@link NoiseLiteralBoolean}: Loaded when the `type` is `"literal-boolean"`.
   * - {@link NoiseLiteralNumber}: Loaded when the `type` is `"literal-number"`.
   * - {@link NoiseLiteralString}: Loaded when the `type` is `"literal-string"`.
   * - {@link NoiseLiteralObject}: Loaded when the `type` is `"literal-object"`.
   * - {@link NoiseLiteralExpression}: Loaded when the `type` is `"literal-expression"`.
   * - {@link NoiseArrayConstruction}: Loaded when the `type` is `"array-construction"`.
   * - {@link NoiseProcedureDelimiter}: Loaded when the `type` is `"procedure-delimiter"`.
   * - {@link NoiseIfElseChain}: Loaded when the `type` is `"if-else-chain"`.
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
   */
  export type NoiseExpression =
    | NoiseVariable
    | NoiseFunctionApplication
    | NoiseLiteralBoolean
    | NoiseLiteralNumber
    | NoiseLiteralString
    | NoiseLiteralObject
    | NoiseLiteralExpression
    | NoiseArrayConstruction
    | NoiseProcedureDelimiter
    | NoiseIfElseChain
  /**
   * Takes a single argument and returns its absolute value. Ie. if the argument is negative, it is inverted.
   */
  export interface NoiseFunctionAbsoluteValue {
    readonly type: "function-application"
    function_name: "absolute-value"
    arguments: readonly [NoiseNumber]
  }
  /**
   * Takes between 0 and 32 numbers and adds them up.
   */
  export interface NoiseFunctionAdd {
    readonly type: "function-application"
    function_name: "add"
    arguments: readonly NoiseNumber[]
  }
  /**
   * Loaded as one of the NoiseFunctions listed in this union, based on the value of the `function_name` key.
   *
   * Apply a function to a list or associative array of arguments. Some functions expect arguments to be named and some expect them not to be.
   *
   * Function calls are their own class of expression (as opposed to every function just being its own expression type) because function calls all have similar properties -- arguments are themselves expressions, a function call with all-constant arguments can be constant-folded (due to {@linkplain http://en.wikipedia.org/wiki/Referential_transparency referential transparency}), etc.
   *
   * ## Union members
   * - {@link NoiseFunctionAdd}: Loaded when the `function_name` is `"add"`.
   * - {@link NoiseFunctionSubtract}: Loaded when the `function_name` is `"subtract"`.
   * - {@link NoiseFunctionMultiply}: Loaded when the `function_name` is `"multiply"`.
   * - {@link NoiseFunctionDivide}: Loaded when the `function_name` is `"divide"`.
   * - {@link NoiseFunctionExponentiate}: Loaded when the `function_name` is `"exponentiate"`.
   * - {@link NoiseFunctionAbsoluteValue}: Loaded when the `function_name` is `"absolute-value"`.
   * - {@link NoiseFunctionClamp}: Loaded when the `function_name` is `"clamp"`.
   * - {@link NoiseFunctionCompileTimeLog}: Loaded when the `function_name` is `"compile-time-log"`.
   * - {@link NoiseFunctionDistanceFromNearestPoint}: Loaded when the `function_name` is `"distance-from-nearest-point"`.
   * - {@link NoiseFunctionRidge}: Loaded when the `function_name` is `"ridge"`.
   * - {@link NoiseFunctionTerrace}: Loaded when the `function_name` is `"terrace"`.
   * - {@link NoiseFunctionModulo}: Loaded when the `function_name` is `"modulo"`.
   * - {@link NoiseFunctionFloor}: Loaded when the `function_name` is `"floor"`.
   * - {@link NoiseFunctionCeil}: Loaded when the `function_name` is `"ceil"`.
   * - {@link NoiseFunctionBitwiseAnd}: Loaded when the `function_name` is `"bitwise-and"`.
   * - {@link NoiseFunctionBitwiseOr}: Loaded when the `function_name` is `"bitwise-or"`.
   * - {@link NoiseFunctionBitwiseXor}: Loaded when the `function_name` is `"bitwise-xor"`.
   * - {@link NoiseFunctionBitwiseNot}: Loaded when the `function_name` is `"bitwise-not"`.
   * - {@link NoiseFunctionSin}: Loaded when the `function_name` is `"sin"`.
   * - {@link NoiseFunctionCos}: Loaded when the `function_name` is `"cos"`.
   * - {@link NoiseFunctionAtan2}: Loaded when the `function_name` is `"atan2"`.
   * - {@link NoiseFunctionLessThan}: Loaded when the `function_name` is `"less-than"`.
   * - {@link NoiseFunctionLessOrEqual}: Loaded when the `function_name` is `"less-or-equal"`.
   * - {@link NoiseFunctionEquals}: Loaded when the `function_name` is `"equals"`.
   * - {@link NoiseFunctionFactorioBasisNoise}: Loaded when the `function_name` is `"factorio-basis-noise"`.
   * - {@link NoiseFunctionFactorioQuickMultioctaveNoise}: Loaded when the `function_name` is `"factorio-quick-multioctave-noise"`.
   * - {@link NoiseFunctionRandomPenalty}: Loaded when the `function_name` is `"random-penalty"`.
   * - {@link NoiseFunctionLog2}: Loaded when the `function_name` is `"log2"`.
   * - {@link NoiseFunctionNoiseLayerNameToID}: Loaded when the `function_name` is `"noise-layer-name-to-id"`.
   * - {@link NoiseFunctionAutoplaceProbability}: Loaded when the `function_name` is `"autoplace-probability"`.
   * - {@link NoiseFunctionAutoplaceRichness}: Loaded when the `function_name` is `"autoplace-richness"`.
   * - {@link NoiseFunctionOffsetPoints}: Loaded when the `function_name` is `"offset-points"`.
   * - {@link NoiseFunctionFactorioMultioctaveNoise}: Loaded when the `function_name` is `"factorio-multioctave-noise"`.
   * - {@link NoiseFunctionSpotNoise}: Loaded when the `function_name` is `"spot-noise"`.
   */
  export type NoiseFunctionApplication =
    | NoiseFunctionAdd
    | NoiseFunctionSubtract
    | NoiseFunctionMultiply
    | NoiseFunctionDivide
    | NoiseFunctionExponentiate
    | NoiseFunctionAbsoluteValue
    | NoiseFunctionClamp
    | NoiseFunctionCompileTimeLog
    | NoiseFunctionDistanceFromNearestPoint
    | NoiseFunctionRidge
    | NoiseFunctionTerrace
    | NoiseFunctionModulo
    | NoiseFunctionFloor
    | NoiseFunctionCeil
    | NoiseFunctionBitwiseAnd
    | NoiseFunctionBitwiseOr
    | NoiseFunctionBitwiseXor
    | NoiseFunctionBitwiseNot
    | NoiseFunctionSin
    | NoiseFunctionCos
    | NoiseFunctionAtan2
    | NoiseFunctionLessThan
    | NoiseFunctionLessOrEqual
    | NoiseFunctionEquals
    | NoiseFunctionFactorioBasisNoise
    | NoiseFunctionFactorioQuickMultioctaveNoise
    | NoiseFunctionRandomPenalty
    | NoiseFunctionLog2
    | NoiseFunctionNoiseLayerNameToID
    | NoiseFunctionAutoplaceProbability
    | NoiseFunctionAutoplaceRichness
    | NoiseFunctionOffsetPoints
    | NoiseFunctionFactorioMultioctaveNoise
    | NoiseFunctionSpotNoise
  /**
   * Returns the arc tangent of y/x using the signs of arguments to determine the correct quadrant.
   */
  export interface NoiseFunctionAtan2 {
    readonly type: "function-application"
    function_name: "atan2"
    /**
     * The first argument is y and the second is x.
     */
    arguments: readonly [NoiseNumber, NoiseNumber]
  }
  export interface NoiseFunctionAutoplaceProbability {
    readonly type: "function-application"
    function_name: "autoplace-probability"
    arguments: readonly [NoiseLiteralObject]
  }
  export interface NoiseFunctionAutoplaceRichness {
    readonly type: "function-application"
    function_name: "autoplace-richness"
    arguments: readonly [NoiseLiteralObject]
  }
  /**
   * Casts between 0 and 32 numbers to 32-bit integers and performs a bitwise AND on them.
   */
  export interface NoiseFunctionBitwiseAnd {
    readonly type: "function-application"
    function_name: "bitwise-and"
    arguments: readonly NoiseNumber[]
  }
  /**
   * Casts the single argument to a 32-bit integer and performs bitwise negates it.
   */
  export interface NoiseFunctionBitwiseNot {
    readonly type: "function-application"
    function_name: "bitwise-not"
    arguments: readonly [NoiseNumber]
  }
  /**
   * Casts between 0 and 32 numbers to 32-bit integers and performs a bitwise OR on them.
   */
  export interface NoiseFunctionBitwiseOr {
    readonly type: "function-application"
    function_name: "bitwise-or"
    arguments: readonly NoiseNumber[]
  }
  /**
   * Casts between 0 and 32 numbers to 32-bit integers and performs a bitwise EXCLUSIVE OR on them.
   */
  export interface NoiseFunctionBitwiseXor {
    readonly type: "function-application"
    function_name: "bitwise-xor"
    arguments: readonly NoiseNumber[]
  }
  /**
   * Takes a single argument and returns its ceil.
   */
  export interface NoiseFunctionCeil {
    readonly type: "function-application"
    function_name: "ceil"
    arguments: readonly [NoiseNumber]
  }
  /**
   * The first argument is clamped to be between the second and third. The second is treated as a lower limit and the third the upper limit.
   */
  export interface NoiseFunctionClamp {
    readonly type: "function-application"
    function_name: "clamp"
    arguments: readonly [NoiseNumber, NoiseNumber, NoiseNumber]
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
   */
  export interface NoiseFunctionCompileTimeLog {
    readonly type: "function-application"
    function_name: "compile-time-log"
    arguments: readonly NoiseExpression[]
  }
  /**
   * Takes a single argument and returns its cosine.
   */
  export interface NoiseFunctionCos {
    readonly type: "function-application"
    function_name: "cos"
    arguments: readonly [NoiseNumber]
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
   */
  export interface NoiseFunctionDistanceFromNearestPoint {
    readonly type: "function-application"
    function_name: "distance-from-nearest-point"
    /**
     */
    arguments: DistanceFromNearestPointArguments
  }
  /**
   * Takes two arguments and divides the first by the second.
   */
  export interface NoiseFunctionDivide {
    readonly type: "function-application"
    function_name: "divide"
    arguments: readonly [NoiseNumber, NoiseNumber]
  }
  /**
   * Returns the result of first argument == second argument as a literal number that is `0` for false and `1` for true.
   */
  export interface NoiseFunctionEquals {
    readonly type: "function-application"
    function_name: "equals"
    arguments: readonly [NoiseNumber, NoiseNumber]
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
   */
  export interface NoiseFunctionExponentiate {
    readonly type: "function-application"
    function_name: "exponentiate"
    arguments: readonly [NoiseNumber, NoiseNumber]
  }
  /**
   * Scaling input and output can be accomplished other ways, but are done so commonly as to be built into this function for performance reasons.
   */
  export interface NoiseFunctionFactorioBasisNoise {
    readonly type: "function-application"
    function_name: "factorio-basis-noise"
    /**
     */
    arguments: FactorioBasisNoiseArguments
  }
  export interface NoiseFunctionFactorioMultioctaveNoise {
    readonly type: "function-application"
    function_name: "factorio-multioctave-noise"
    /**
     */
    arguments: FactorioMultioctaveNoiseArguments
  }
  export interface NoiseFunctionFactorioQuickMultioctaveNoise {
    readonly type: "function-application"
    function_name: "factorio-quick-multioctave-noise"
    /**
     */
    arguments: FactorioQuickMultioctaveNoiseArguments
  }
  /**
   * Takes a single argument and returns its floor.
   */
  export interface NoiseFunctionFloor {
    readonly type: "function-application"
    function_name: "floor"
    arguments: readonly [NoiseNumber]
  }
  /**
   * Returns the result of first argument <= second argument as a literal number that is `0` for false and `1` for true.
   */
  export interface NoiseFunctionLessOrEqual {
    readonly type: "function-application"
    function_name: "less-or-equal"
    arguments: readonly [NoiseNumber, NoiseNumber]
  }
  /**
   * Returns the result of first argument < second argument as a literal number that is `0` for false and `1` for true.
   */
  export interface NoiseFunctionLessThan {
    readonly type: "function-application"
    function_name: "less-than"
    arguments: readonly [NoiseNumber, NoiseNumber]
  }
  export interface NoiseFunctionLog2 {
    readonly type: "function-application"
    function_name: "log2"
    arguments: readonly [NoiseNumber]
  }
  /**
   * Takes two arguments and divides the first by the second and returns the remainder. This is implemented using {@linkplain https://en.cppreference.com/w/cpp/numeric/math/fmod fmod(double, double)}.
   */
  export interface NoiseFunctionModulo {
    readonly type: "function-application"
    function_name: "modulo"
    arguments: readonly [NoiseNumber, NoiseNumber]
  }
  /**
   * Takes between 0 and 32 numbers and multiplies them.
   */
  export interface NoiseFunctionMultiply {
    readonly type: "function-application"
    function_name: "multiply"
    arguments: readonly NoiseNumber[]
  }
  export interface NoiseFunctionNoiseLayerNameToID {
    readonly type: "function-application"
    function_name: "noise-layer-name-to-id"
    arguments: readonly [NoiseLiteralString]
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
   */
  export interface NoiseFunctionOffsetPoints {
    readonly type: "function-application"
    function_name: "offset-points"
    arguments: readonly [NoiseArrayConstruction, NoiseArrayConstruction]
  }
  /**
   * Subtracts a random value in the `[0, amplitude)` range from `source` if `source` is larger than `0`.
   */
  export interface NoiseFunctionRandomPenalty {
    readonly type: "function-application"
    function_name: "random-penalty"
    /**
     */
    arguments: RandomPenaltyArguments
  }
  /**
   * Similar to {@link NoiseFunctionClamp clamp}, where the first argument is folded back across the third and second limits until it lies between them.
   * @example
   * local noise = require("noise")
   * local ridge_1 = noise.ridge(6, 1, 5) -- this returns 4
   * local ridge_2 = noise.ridge(-1, 1, 5) -- this returns 3
   */
  export interface NoiseFunctionRidge {
    readonly type: "function-application"
    function_name: "ridge"
    /**
     * The first argument is the number to be ridged, the second is the lower limit and the third is the upper limit.
     */
    arguments: readonly [NoiseNumber, NoiseNumber, NoiseNumber]
  }
  /**
   * Takes a single argument and returns its sine.
   */
  export interface NoiseFunctionSin {
    readonly type: "function-application"
    function_name: "sin"
    arguments: readonly [NoiseNumber]
  }
  /**
   * Generates random conical spots. The map is divided into square regions, and within each region, candidate points are chosen at random and target density, spot quantity, and radius are calculated for each point (or one of every `skip_span` candidate points) by configured expressions. Each spot contributes a quantity to a regional target total (which is the average of sampled target densities times the area of the region) until the total has been reached or a maximum spot count is hit. The output value of the function is the maximum height of any spot at a given point.
   *
   * The parameters that provide expressions to be evaluated for each point (all named something_expression) need to actually return expression objects.
   *
   * The quantity of the spot is assumed to be the same as its volume. Since the volume of a cone is `pi * radius^2 * height / 3`, the height ('peak value') of any given spot is calculated as `3 * quantity / (pi * radius^2)`
   *
   * The infinite series of candidate points (of which `candidate_point_count` are actually considered) generated by `spot-noise` expressions with the same `seed0`, `seed1`, `region_size`, and `suggested_minimum_candidate_point_spacing` will be identical. This allows multiple spot-noise expressions (e.g. for different ore patches) to avoid overlap by using different points from the same list, determined by `skip_span` and `skip_offset`.
   */
  export interface NoiseFunctionSpotNoise {
    readonly type: "function-application"
    function_name: "spot-noise"
    /**
     */
    arguments: SpotNoiseArguments
  }
  /**
   * Takes two arguments and subtracts the second from the first.
   */
  export interface NoiseFunctionSubtract {
    readonly type: "function-application"
    function_name: "subtract"
    arguments: readonly [NoiseNumber, NoiseNumber]
  }
  /**
   * The first argument is the value to be terraced. The second argument is the offset, the third the width, and the fourth the strength.
   */
  export interface NoiseFunctionTerrace {
    readonly type: "function-application"
    function_name: "terrace"
    arguments: readonly [NoiseNumber, ConstantNoiseNumber, ConstantNoiseNumber, NoiseNumber]
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
   */
  export interface NoiseIfElseChain {
    readonly type: "if-else-chain"
    arguments: readonly NoiseExpression[]
  }
  /**
   * The name of a {@link NoiseLayer}.
   * @example
   * "aux"
   * @example
   * "trees-3"
   */
  export type NoiseLayerID = string
  /**
   * Evaluates to the same boolean value (true or false) every time, given by the `literal_value` property. May be used as a number value, evaluates to `1` for true and `0` for false.
   */
  export interface NoiseLiteralBoolean {
    readonly type: "literal-boolean"
    literal_value: bool
  }
  /**
   * Returns the expression represented by its `literal_value` property. Useful mostly for passing expressions (to be evaluated later) to the {@link NoiseFunctionSpotNoise spot-noise} function.
   */
  export interface NoiseLiteralExpression {
    readonly type: "literal-expression"
    literal_value: NoiseExpression
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
   */
  export interface NoiseLiteralNumber {
    readonly type: "literal-number"
    literal_value: float
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
   */
  export interface NoiseLiteralObject {
    readonly type: "literal-object"
    literal_value: AutoplaceSpecification
  }
  /**
   * Evaluates to the same string every time, given by the `literal_value` property. Since the noise generation runtime has no notion of strings or use for them, this is useful only in constant contexts.
   */
  export interface NoiseLiteralString {
    readonly type: "literal-string"
    literal_value: string
  }
  /**
   * A numeric noise expression, such as a literal number, the result of addition, or multioctave noise.
   *
   * This encompasses all {@link NoiseExpression NoiseExpressions}, except for {@link NoiseLiteralBoolean}, {@link NoiseLiteralString}, {@link NoiseLiteralObject}, {@link NoiseLiteralExpression}, {@link NoiseArrayConstruction}, and {@link NoiseFunctionOffsetPoints}.
   *
   * ## Union members
   * - {@link NoiseVariable}
   * - {@link NoiseFunctionApplication}
   * - {@link NoiseLiteralNumber}
   * - {@link NoiseProcedureDelimiter}
   * - {@link NoiseIfElseChain}
   * - {@link NoiseFunctionAdd}
   * - {@link NoiseFunctionSubtract}
   * - {@link NoiseFunctionMultiply}
   * - {@link NoiseFunctionDivide}
   * - {@link NoiseFunctionExponentiate}
   * - {@link NoiseFunctionFactorioQuickMultioctaveNoise}
   * - {@link NoiseFunctionFactorioMultioctaveNoise}
   * - {@link NoiseFunctionDistanceFromNearestPoint}
   * - {@link NoiseFunctionFactorioBasisNoise}
   * - {@link NoiseFunctionAbsoluteValue}
   * - {@link NoiseFunctionClamp}
   * - {@link NoiseFunctionRidge}
   * - {@link NoiseFunctionTerrace}
   * - {@link NoiseFunctionSpotNoise}
   * - {@link NoiseFunctionRandomPenalty}
   * - {@link NoiseFunctionLog2}
   * - {@link NoiseFunctionModulo}
   * - {@link NoiseFunctionFloor}
   * - {@link NoiseFunctionCeil}
   * - {@link NoiseFunctionBitwiseAnd}
   * - {@link NoiseFunctionBitwiseOr}
   * - {@link NoiseFunctionBitwiseXor}
   * - {@link NoiseFunctionBitwiseNot}
   * - {@link NoiseFunctionSin}
   * - {@link NoiseFunctionAtan2}
   * - {@link NoiseFunctionCos}
   * - {@link NoiseFunctionLessThan}
   * - {@link NoiseFunctionLessOrEqual}
   * - {@link NoiseFunctionEquals}
   * - {@link NoiseFunctionCompileTimeLog}
   * - {@link NoiseFunctionNoiseLayerNameToID}
   * - {@link NoiseFunctionAutoplaceProbability}
   * - {@link NoiseFunctionAutoplaceRichness}
   */
  export type NoiseNumber =
    | NoiseVariable
    | NoiseFunctionApplication
    | NoiseLiteralNumber
    | NoiseProcedureDelimiter
    | NoiseIfElseChain
    | NoiseFunctionAdd
    | NoiseFunctionSubtract
    | NoiseFunctionMultiply
    | NoiseFunctionDivide
    | NoiseFunctionExponentiate
    | NoiseFunctionFactorioQuickMultioctaveNoise
    | NoiseFunctionFactorioMultioctaveNoise
    | NoiseFunctionDistanceFromNearestPoint
    | NoiseFunctionFactorioBasisNoise
    | NoiseFunctionAbsoluteValue
    | NoiseFunctionClamp
    | NoiseFunctionRidge
    | NoiseFunctionTerrace
    | NoiseFunctionSpotNoise
    | NoiseFunctionRandomPenalty
    | NoiseFunctionLog2
    | NoiseFunctionModulo
    | NoiseFunctionFloor
    | NoiseFunctionCeil
    | NoiseFunctionBitwiseAnd
    | NoiseFunctionBitwiseOr
    | NoiseFunctionBitwiseXor
    | NoiseFunctionBitwiseNot
    | NoiseFunctionSin
    | NoiseFunctionAtan2
    | NoiseFunctionCos
    | NoiseFunctionLessThan
    | NoiseFunctionLessOrEqual
    | NoiseFunctionEquals
    | NoiseFunctionCompileTimeLog
    | NoiseFunctionNoiseLayerNameToID
    | NoiseFunctionAutoplaceProbability
    | NoiseFunctionAutoplaceRichness
  /**
   * Evaluates and returns the value of its expression property, which is itself an expression.
   *
   * This hints to the compiler that it should break the subexpression into its own procedure so that the result can be re-used in multiple places. For instance if you want to re-use the same multioctave noise for determining probability of multiple tiles/entities, wrap the multioctave noise expression in a procedure-delimiter. Alternatively, make the noise its own {@link NamedNoiseExpression} and reference it by name, using a {@link NoiseVariable}.
   */
  export interface NoiseProcedureDelimiter {
    readonly type: "procedure-delimiter"
    expression: NoiseExpression
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
   */
  export interface NoiseVariable {
    readonly type: "variable"
    /**
     * A string referring to a pre-defined variable, constant, or {@link NamedNoiseExpression}.
     *
     * The `"x"` or `"y"` variables refer to the current coordinates of the map position being evaluated.
     *
     * The constants refer to a set of values mostly defined by {@link MapGenSettings}.
     *
     * The named noise expressions refer to one of the notable {@link BaseNamedNoiseExpressions}, or any other existing one by name.
     */
    variable_name: "x" | "y" | NoiseVariableConstants | BaseNamedNoiseExpressions | string
  }
  /**
   * A set of constants largely determined by {@link MapGenSettings}.
   *
   * ## Union members
   * - `string`: Additional constants are generated for all {@link TilePrototype tile}, {@link EntityPrototype entity}, {@link DecorativePrototype decorative}, and {@link AutoplaceControl autoplace-control} prototypes. These follow these three patterns: `control-setting:<name>:frequency`, `control-setting:<name>:size`, and `control-setting:<name>:richness`.
   * - `"map_seed"`: {@link MapGenSettings#seed MapGenSettings::seed}
   * - `"map_width"`: {@link MapGenSettings#width MapGenSettings::width}
   * - `"map_height"`: {@link MapGenSettings#height MapGenSettings::height}
   * - `"water_level"`: Should not be used, `wlc_elevation_minimum` should be used instead.
   * - `"finite_water_level"`: Should not be used, `wlc_elevation_offset` should be used instead.
   * - `"wlc_elevation_minimum"`: When the result of `10 * log2("water")` ({@link MapGenSettings#water MapGenSettings::water}) is infinite, `wlc_elevation_minimum = -∞`, else `wlc_elevation_minimum = 4`.
   * - `"wlc_elevation_offset"`: When the result of `10 * log2("water")` ({@link MapGenSettings#water MapGenSettings::water}) is finite, `wlc_elevation_offset = -(10 * log2(water))`, else `wlc_elevation_offset = 0`.
   * - `"cliff_elevation_offset"`: Based on {@link CliffPlacementSettings#cliff_elevation_0 CliffPlacementSettings::cliff_elevation_0}
   * - `"cliff_elevation_interval"`: {@link CliffPlacementSettings#cliff_elevation_interval CliffPlacementSettings::cliff_elevation_interval}
   * - `"control-setting:cliffs:richness:multiplier"`: {@link CliffPlacementSettings#richness CliffPlacementSettings::richness}
   * - `"terrace_elevation_offset"`: Calculated from the cliff and water settings.
   * - `"terrace_elevation_interval"`: Same as `cliff_elevation_interval`.
   * - `"starting_area_radius"`: Based on {@link MapGenSettings#starting_area MapGenSettings::starting_area}.
   * - `"starting_positions"`: {@link MapGenSettings#starting_points MapGenSettings::starting_points}
   * - `"starting_lake_positions"`: Calculated from starting positions and map seed.
   * - `"peaceful_mode"`: {@link MapGenSettings#peaceful_mode MapGenSettings::peaceful_mode}
   */
  export type NoiseVariableConstants =
    | string
    | "map_seed"
    | "map_width"
    | "map_height"
    | "water_level"
    | "finite_water_level"
    | "wlc_elevation_minimum"
    | "wlc_elevation_offset"
    | "cliff_elevation_offset"
    | "cliff_elevation_interval"
    | "control-setting:cliffs:richness:multiplier"
    | "terrace_elevation_offset"
    | "terrace_elevation_interval"
    | "starting_area_radius"
    | "starting_positions"
    | "starting_lake_positions"
    | "peaceful_mode"
  export interface NothingModifier extends BaseModifier {
    readonly type: "nothing"
    /**
     * **Default:** `false`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
    effect_description?: LocalisedString
  }
  /**
   * @see OffshorePumpPrototype.graphics_set
   */
  export interface OffshorePumpGraphicsSet {
    /**
     * Rendered in "object" layer, with secondary draw order 0.
     */
    animation: Animation4Way
    /**
     * **Default:** `"ground-patch"`
     */
    base_render_layer?: RenderLayer
    /**
     * **Default:** `1`
     */
    underwater_layer_offset?: int8
    /**
     * Rendered in "object" layer, with secondary draw order 20.
     */
    fluid_animation?: Animation4Way
    /**
     * Rendered in "object" layer, with secondary draw order 40.
     */
    glass_pictures?: Sprite4Way
    /**
     * Rendered in layer specified by `base_render_layer`, with secondary draw order 0.
     */
    base_pictures?: Sprite4Way
    /**
     * Drawn by tile renderer when water animation is enabled.
     */
    underwater_pictures?: Sprite4Way
  }
  export interface OrTipTrigger {
    readonly type: "or"
    /**
     * If at least one of the triggers is fulfilled, this trigger is considered fulfilled.
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
   */
  export type Order = string
  export interface OrientedCliffPrototype {
    collision_bounding_box: BoundingBox
    pictures: SpriteVariations
    /**
     * Unused.
     */
    fill_volume: uint32
  }
  /**
   * @see CliffPrototype.orientations
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
   */
  export type ParticleID = string
  export interface PasteEntitySettingsTipTrigger {
    readonly type: "paste-entity-settings"
    /**
     * **Default:** `1`
     */
    count?: uint32
    source?: EntityID
    target?: EntityID
    /**
     * **Default:** `false`
     */
    match_type_only?: bool
  }
  export interface PathFinderSettings {
    /**
     * The pathfinder performs a step of the backward search every `fwd2bwd_ratio`'th step. The minimum allowed value is 2, which means symmetric search.
     */
    fwd2bwd_ratio: uint32
    /**
     * When comparing nodes in open which one to check next, heuristic value is multiplied by this ratio. The higher the number the more is the search directed directly towards the goal.
     */
    goal_pressure_ratio: double
    use_path_cache: bool
    /**
     * When this is exhausted no more requests are allowed, at the moment the first path to exhaust this will be finished (even if it is hundreds of steps).
     */
    max_steps_worked_per_tick: double
    max_work_done_per_tick: uint32
    /**
     * Number of elements in the cache.
     */
    short_cache_size: uint32
    long_cache_size: uint32
    /**
     * Minimal distance to goal for path to be searched in short path cache.
     */
    short_cache_min_cacheable_distance: double
    /**
     * Minimal number of algorithm steps for path to be inserted into the short path cache.
     */
    short_cache_min_algo_steps_to_cache: uint32
    /**
     * Minimal distance to goal for path to be searched in long path cache.
     */
    long_cache_min_cacheable_distance: double
    /**
     * When searching for connection to path cache path, search at most for this number of steps times the initial estimate.
     */
    cache_max_connect_to_cache_steps_multiplier: uint32
    /**
     * When looking for path from cache make sure it doesn't start too far from requested start in relative distance terms.
     */
    cache_accept_path_start_distance_ratio: double
    /**
     * When looking for path from cache make sure it doesn't end too far from requested end. This is typically higher than accept value for the start because the end target can be moving.
     */
    cache_accept_path_end_distance_ratio: double
    /**
     * Same as cache_accept_path_start_distance_ratio, but used for negative cache queries.
     */
    negative_cache_accept_path_start_distance_ratio: double
    /**
     * Same as cache_accept_path_end_distance_ratio, but used for negative cache queries.
     */
    negative_cache_accept_path_end_distance_ratio: double
    /**
     * When assigning rating to the best path this * start distances is considered.
     */
    cache_path_start_distance_rating_multiplier: double
    /**
     * When assigning rating to the best path this * end distances is considered. This is typically higher than value for the start to achieve better path end quality.
     */
    cache_path_end_distance_rating_multiplier: double
    /**
     * Somewhere along the path is stuck enemy we need to avoid. This is mainly to handle situations when units have arrived and are attacking the target then units further in the back will use this and run around the target.
     */
    stale_enemy_with_same_destination_collision_penalty: double
    /**
     * If there is a moving unit further than this we don't really care.
     */
    ignore_moving_enemy_collision_distance: double
    /**
     * Enemy is not moving/or is too close and has different destination.
     */
    enemy_with_different_destination_collision_penalty: double
    /**
     * Simplification for now; collision with everything else is this.
     */
    general_entity_collision_penalty: double
    /**
     * Collision penalty for successors of positions that require destroy to reach.
     */
    general_entity_subsequent_collision_penalty: double
    /**
     * Collision penalty for collisions in the extended bounding box but outside the entity's actual bounding box.
     */
    extended_collision_penalty: double
    /**
     * Up until this amount any client will be served by the path finder (no estimate on the path length).
     */
    max_clients_to_accept_any_new_request: uint32
    /**
     * From max_clients_to_accept_any_new_request till this one only those that have a short estimate will be served.
     */
    max_clients_to_accept_short_new_request: uint32
    /**
     * This is the "threshold" to decide what is short and what is not.
     */
    direct_distance_to_consider_short_request: uint32
    /**
     * If a short request takes more than this many steps, it will be rescheduled as a long request.
     */
    short_request_max_steps: uint32
    /**
     * How many steps will be allocated to short requests each tick, as a ratio of all available steps per tick.
     */
    short_request_ratio: double
    /**
     * Absolute minimum of steps that will be performed for every path find request no matter what.
     */
    min_steps_to_check_path_find_termination: uint32
    /**
     * If the current actual cost from start is higher than this times estimate of start to goal then path finding is terminated.
     */
    start_to_goal_cost_multiplier_to_terminate_path_find: double
    overload_levels: readonly uint32[]
    overload_multipliers: readonly double[]
  }
  export interface PipeConnectionDefinition {
    /**
     * Where pipes can connect to this fluidbox regardless the directions of entity.
     */
    position?: Vector
    /**
     * Only loaded, and mandatory if `position` is not defined.
     *
     * Where pipes can connect to this fluidbox, depending on the entity direction.
     *
     * Table must have 4 members, which are 4 explicit positions corresponding to the 4 directions of entity. Positions must correspond to directions going one after another.
     */
    positions?: readonly Vector[]
    /**
     * **Default:** `0`
     *
     * `0` means not underground.
     */
    max_underground_distance?: uint32
    /**
     * **Default:** `"input-output"`
     *
     * ## Union members
     * - `"input"`
     * - `"input-output"`
     * - `"output"`
     */
    readonly type?: "input" | "input-output" | "output"
  }
  export interface PipePictures {
    straight_vertical_single: Sprite
    straight_vertical: Sprite
    straight_vertical_window: Sprite
    straight_horizontal: Sprite
    straight_horizontal_window: Sprite
    corner_up_right: Sprite
    corner_up_left: Sprite
    corner_down_right: Sprite
    corner_down_left: Sprite
    t_up: Sprite
    t_down: Sprite
    t_right: Sprite
    t_left: Sprite
    cross: Sprite
    ending_up: Sprite
    ending_down: Sprite
    ending_right: Sprite
    ending_left: Sprite
    horizontal_window_background: Sprite
    vertical_window_background: Sprite
    fluid_background: Sprite
    /**
     * Visualizes the flow of the fluid in the pipe. Drawn when `(fluid_temp - fluid_min_temp) / (fluid_max_temp - fluid_min_temp)` is less than or equal to `1/3` and the fluid's temperature is below {@link FluidPrototype#gas_temperature FluidPrototype::gas_temperature}.
     */
    low_temperature_flow: Sprite
    /**
     * Visualizes the flow of the fluid in the pipe. Drawn when `(fluid_temp - fluid_min_temp) / (fluid_max_temp - fluid_min_temp)` is larger than `1/3` and less than or equal to `2/3` and the fluid's temperature is below {@link FluidPrototype#gas_temperature FluidPrototype::gas_temperature}.
     */
    middle_temperature_flow: Sprite
    /**
     * Visualizes the flow of the fluid in the pipe. Drawn when `(fluid_temp - fluid_min_temp) / (fluid_max_temp - fluid_min_temp)` is larger than `2/3` and the fluid's temperature is below {@link FluidPrototype#gas_temperature FluidPrototype::gas_temperature}.
     */
    high_temperature_flow: Sprite
    /**
     * Visualizes the flow of the fluid in the pipe. Drawn when the fluid's temperature is above {@link FluidPrototype#gas_temperature FluidPrototype::gas_temperature}.
     */
    gas_flow: Animation
  }
  /**
   * @see PipeToGroundPrototype.pictures
   */
  export interface PipeToGroundPictures {
    down: Sprite
    up: Sprite
    left: Sprite
    right: Sprite
  }
  /**
   * @see ItemPrototype.place_as_tile
   */
  export interface PlaceAsTile {
    result: TileID
    condition: CollisionMask
    condition_size: int32
  }
  export interface PlaceEquipmentTipTrigger {
    readonly type: "place-equipment"
    /**
     * **Default:** `1`
     */
    count?: uint32
    equipment?: EquipmentID
  }
  /**
   * Defines when controller vibrations should be played.
   *
   * ## Union members
   * - `"character_actions"`: Play the vibration only if it was caused by the player. For example when shooting a gun, vibration will play when the character shoots but not when a turret shoots.
   * - `"everything"`: Always play the vibration. Useful for example for explosions.
   * @see GameControllerVibrationData.play_for
   */
  export type PlayFor = "character_actions" | "everything"
  export interface PlaySoundTriggerEffectItem extends TriggerEffectItem {
    readonly type: "play-sound"
    sound: Sound
    /**
     * **Default:** `0`
     *
     * Negative values are silently clamped to 0.
     */
    min_distance?: float
    /**
     * **Default:** `1e21`
     *
     * Negative values are silently clamped to 0.
     */
    max_distance?: float
    /**
     * **Default:** `1`
     *
     * Negative values are silently clamped to 0.
     */
    volume_modifier?: float
    /**
     * **Default:** `1`
     *
     * Negative values are silently clamped to 0.
     */
    audible_distance_modifier?: float
    /**
     * **Default:** `false`
     */
    play_on_target_position?: bool
  }
  /**
   * @see UtilityConstants.player_colors
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
   */
  export type PlayerInputMethodFilter = "all" | "keyboard_and_mouse" | "game_controller"
  /**
   * The pollution settings, the values are for 60 ticks (1 second).
   */
  export interface PollutionSettings {
    enabled: bool
    /**
     * Amount that is diffused to neighboring chunks.
     */
    diffusion_ratio: double
    /**
     * This much pollution units must be on the chunk to start diffusing.
     */
    min_to_diffuse: double
    /**
     * Constant modifier a percentage of 1; the pollution eaten by a chunks tiles. Also known as absorption modifier.
     */
    ageing: double
    /**
     * Anything bigger than this is visualized as this value.
     */
    expected_max_per_chunk: double
    /**
     * Anything lower than this (but > 0) is visualized as this value.
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
   * Defaults to loading products as items.
   *
   * ## Union members
   * - {@link ItemProductPrototype}: Loaded when the `type` is `"item"`.
   * - {@link FluidProductPrototype}: Loaded when the `type` is `"fluid"`.
   */
  export type ProductPrototype = ItemProductPrototype | FluidProductPrototype
  /**
   * ## Union members
   * - `"None"`
   * - `"none"`
   * - `"input"`
   * - `"input-output"`
   * - `"output"`
   * @see FluidBox.production_type
   */
  export type ProductionType = "None" | "none" | "input" | "input-output" | "output"
  /**
   * @see ProgrammableSpeakerPrototype.instruments
   */
  export interface ProgrammableSpeakerInstrument {
    name: string
    notes: readonly ProgrammableSpeakerNote[]
  }
  export interface ProgrammableSpeakerNote {
    name: string
    sound: Sound
  }
  export interface ProgressBarStyleSpecification extends BaseStyleSpecification {
    readonly type: "progressbar_style"
    bar_width?: uint32
    color?: Color
    /**
     */
    other_colors?: readonly OtherColors[]
    bar?: ElementImageSet
    bar_background?: ElementImageSet
    /**
     * Name of a {@link FontPrototype}.
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
     * **Default:** ``{0, 0}``
     *
     * When used with `projectile_creation_parameters`, this offsets what the turret's sprite looks at. Setting to `{0,1}` will cause the turret to aim one tile up from the target but the projectile will still aim for the entity. Can be used to give the illusion of height but can also confuse aim logic when set too high.
     *
     * When used without `projectile_creation_parameters`, this sets the turret's rotation axis.
     */
    projectile_center?: Vector
    /**
     * **Default:** `0`
     */
    projectile_creation_distance?: float
    /**
     * Used to show bullet shells/casings being ejected from the gun, see {@linkplain https://factorio.com/blog/post/fff-345 artillery shell casings}.
     */
    shell_particle?: CircularParticleCreationSpecification
    /**
     * Used to shoot projectiles from arbitrary points. Used by worms and multi-barreled weapons. Use multiple points with the same angle to cause the turret to shoot from multiple barrels. If not set then the launch positions are calculated using `projectile_center` and `projectile_creation_distance`.
     */
    projectile_creation_parameters?: CircularProjectileCreationSpecification
    /**
     * **Default:** `0`
     *
     * Used to shoot from different sides of the turret. Setting to `0.25` shoots from the right side, `0.5` shoots from the back, and `0.75` shoots from the left. The turret will look at the enemy as normal but the bullet will spawn from the offset position. Can be used to create right-handed weapons.
     */
    projectile_orientation_offset?: float
  }
  export interface ProjectileTriggerDelivery extends TriggerDeliveryItem {
    readonly type: "projectile"
    /**
     * Name of a {@link ProjectilePrototype}.
     */
    projectile: EntityID
    /**
     * Starting speed in tiles per tick.
     */
    starting_speed: float
    /**
     * **Default:** `0`
     */
    starting_speed_deviation?: float
    /**
     * **Default:** `0`
     *
     * Maximum deviation of the projectile from source orientation, in +/- (`x radians / 2`). Example: `3.14 radians -> +/- (180° / 2)`, meaning up to 90° deviation in either direction of rotation.
     */
    direction_deviation?: float
    /**
     * **Default:** `0`
     *
     * The maximum deviation of the projectile maximum range from `max_range` is `max_range × range_deviation ÷ 2`. This means a deviation of `0.5` will appear as a maximum of `0.25` (25%) deviation of an initial range goal. Post-deviation range may exceed `max_range` or be less than `min_range`.
     */
    range_deviation?: float
    /**
     * **Default:** `1000`
     */
    max_range?: double
    /**
     * **Default:** `0`
     */
    min_range?: double
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
   */
  export interface PumpConnectorGraphics {
    /**
     * Size of the array must be 6 or more.
     */
    north: readonly PumpConnectorGraphicsAnimation[]
    /**
     * Size of the array must be 6 or more.
     */
    east: readonly PumpConnectorGraphicsAnimation[]
    /**
     * Size of the array must be 6 or more.
     */
    south: readonly PumpConnectorGraphicsAnimation[]
    /**
     * Size of the array must be 6 or more.
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
   */
  export interface PushBackTriggerEffectItem extends TriggerEffectItem {
    readonly type: "push-back"
    distance: float
  }
  export interface RadioButtonStyleSpecification extends StyleWithClickableGraphicalSetSpecification {
    readonly type: "radiobutton_style"
    /**
     * Name of a {@link FontPrototype}.
     */
    font?: string
    font_color?: Color
    disabled_font_color?: Color
    text_padding?: uint32
  }
  /**
   * Sprite to be shown around the entity when it is selected/held in the cursor.
   */
  export interface RadiusVisualisationSpecification {
    sprite?: Sprite
    /**
     * **Default:** `0`
     *
     * Must be greater than or equal to 0.
     */
    distance?: double
    offset?: Vector
    /**
     * **Default:** `true`
     */
    draw_in_cursor?: bool
    /**
     * **Default:** `true`
     */
    draw_on_selection?: bool
  }
  export interface RailPictureSet {
    straight_rail_horizontal: RailPieceLayers
    straight_rail_vertical: RailPieceLayers
    straight_rail_diagonal_left_top: RailPieceLayers
    straight_rail_diagonal_right_top: RailPieceLayers
    straight_rail_diagonal_right_bottom: RailPieceLayers
    straight_rail_diagonal_left_bottom: RailPieceLayers
    curved_rail_vertical_left_top: RailPieceLayers
    curved_rail_vertical_right_top: RailPieceLayers
    curved_rail_vertical_right_bottom: RailPieceLayers
    curved_rail_vertical_left_bottom: RailPieceLayers
    curved_rail_horizontal_left_top: RailPieceLayers
    curved_rail_horizontal_right_top: RailPieceLayers
    curved_rail_horizontal_right_bottom: RailPieceLayers
    curved_rail_horizontal_left_bottom: RailPieceLayers
    rail_endings: Sprite8Way
  }
  /**
   * Used for graphics by {@link RailPrototype} and {@link RailRemnantsPrototype}.
   */
  export interface RailPieceLayers {
    /**
     * Must have between 1 and 4 variations.
     */
    metals: SpriteVariations
    /**
     * Must have same number of variations as `metals`.
     */
    backplates: SpriteVariations
    /**
     * Must have between 1 and 4 variations.
     */
    ties: SpriteVariations
    /**
     * Must have between 1 and 4 variations.
     */
    stone_path: SpriteVariations
    /**
     * Must have less or equal than 4 variations.
     */
    stone_path_background?: SpriteVariations
    segment_visualisation_middle?: Sprite
    segment_visualisation_ending_front?: Sprite
    segment_visualisation_ending_back?: Sprite
    segment_visualisation_continuing_front?: Sprite
    segment_visualisation_continuing_back?: Sprite
  }
  /**
   * @see NoiseFunctionRandomPenalty.arguments
   */
  export interface RandomPenaltyArguments {
    /**
     * Number used to seed the random generator.
     */
    x: NoiseNumber
    /**
     * Number used to seed the random generator.
     */
    y: NoiseNumber
    /**
     * Number that the penalty is applied to.
     */
    source: NoiseNumber
    /**
     * **Default:** `1`
     *
     * Integer used to seed the random generator.
     */
    seed?: ConstantNoiseNumber
    /**
     * **Default:** `1`
     */
    amplitude?: ConstantNoiseNumber
  }
  /**
   * Specified by a {@link float} between 0 and 1, including 0 and excluding 1.
   */
  export type RealOrientation = float
  /**
   * The name of a {@link RecipeCategory}.
   * @example
   * "crafting"
   * @example
   * "smelting"
   */
  export type RecipeCategoryID = string
  /**
   * Used when defining a {@link RecipePrototype} that uses difficulty. For a recipe without difficulty, these same properties are defined on the prototype itself.
   */
  export interface RecipeData {
    /**
     * A table containing ingredient names and counts. Can also contain information about fluid temperature and catalyst amounts. The catalyst amounts are automatically calculated from the recipe, or can be set manually in the IngredientPrototype (see {@linkplain https://factorio.com/blog/post/fff-256 here}).
     *
     * The maximum ingredient amount is 65 535. Can be set to an empty table to create a recipe that needs no ingredients.
     *
     * Duplicate ingredients, e.g. two entries with the same name, are *not* allowed. In-game, the item ingredients are ordered by {@link ItemGroup#order_in_recipe ItemGroup::order_in_recipe}.
     * @example
     * -- Shorthand format
     * ingredients = {{"iron-stick", 2}, {"iron-plate", 3}}
     * @example
     * -- Full format
     * ingredients = {
     *   {type = "item", name = "iron-stick", amount = 2},
     *   {type = "item", name = "iron-plate", amount = 3}
     * }
     * @example
     * -- Fluids don't support shorthand
     * ingredients = {
     *   {type="fluid", name="water", amount=50},
     *   {type="fluid", name="crude-oil", amount=100}
     * }
     */
    ingredients: readonly IngredientPrototype[]
    /**
     * A table containing result names and counts. Can also contain information about fluid temperature and catalyst amounts. The catalyst amounts are automatically calculated from the recipe, or can be set manually in the ProductPrototype (see {@linkplain https://factorio.com/blog/post/fff-256 here}).
     *
     * Can be set to an empty table to create a recipe that produces nothing. Duplicate results, e.g. two entries with the same name, are allowed.
     * @example
     * results = {
     *   {type="fluid", name="heavy-oil", amount=3},
     *   {type="fluid", name="light-oil", amount=3},
     *   {type="fluid", name="petroleum-gas", amount=4}
     * }
     * @example
     * results = {
     *   {type = "item", name = "iron-nuggets", amount = 9},
     *   {type = "item", name = "gold-nuggets", amount = 1}
     * }
     * @example
     * results = {{type = "fluid", name = "steam", amount = 1, temperature = 165}}
     */
    results: readonly ProductPrototype[]
    /**
     * The item created by this recipe. Must be the name of an {@link ItemPrototype item}, such as `"iron-gear-wheel"`.
     *
     * Only loaded if `results` is not defined.
     */
    result?: ItemID
    /**
     * **Default:** `1`
     *
     * The number of items created by this recipe.
     *
     * Only loaded if `results` is not defined.
     */
    result_count?: uint16
    /**
     * For recipes with one or more products: Subgroup, localised_name and icon default to the values of the singular/main product, but can be overwritten by the recipe. Setting the main_product to an empty string (`""`) forces the title in the recipe tooltip to use the recipe's name (not that of the product) and shows the products in the tooltip.
     *
     * If 1) there are multiple products and this property is nil, 2) this property is set to an empty string (`""`), or 3) there are no products, the recipe will use the localised_name, icon, and subgroup of the recipe. icon and subgroup become non-optional.
     */
    main_product?: string
    /**
     * **Default:** `0.5`
     *
     * The amount of time it takes to make this recipe. Must be `> 0.001`. Equals the number of seconds it takes to craft at crafting speed `1`.
     */
    energy_required?: double
    /**
     * **Default:** `1`
     */
    emissions_multiplier?: double
    /**
     * **Default:** `30`
     */
    requester_paste_multiplier?: uint32
    /**
     * **Default:** `0`
     *
     * Used to determine how many extra items are put into an assembling machine before it's considered "full enough". See {@linkplain https://wiki.factorio.com/Inserters#Insertion_limits insertion limits}.
     *
     * If set to `0`, it instead uses the following formula: `1.166 / (energy_required / the assembler's crafting_speed)`, rounded up, and clamped to be between`2` and `100`. The numbers used in this formula can be changed by the {@link UtilityConstants} properties `dynamic_recipe_overload_factor`, `minimum_recipe_overload_multiplier`, and `maximum_recipe_overload_multiplier`.
     */
    overload_multiplier?: uint32
    /**
     * **Default:** `true`
     *
     * Whether the recipe is allowed to have the extra inserter overload bonus applied (4 * stack inserter stack size).
     */
    allow_inserter_overload?: bool
    /**
     * **Default:** `true`
     *
     * This can be `false` to disable the recipe at the start of the game, or `true` to leave it enabled.
     *
     * If a recipe is unlocked via technology, this should be set to `false`.
     */
    enabled?: bool
    /**
     * **Default:** `false`
     *
     * Hides the recipe from crafting menus.
     */
    hidden?: bool
    /**
     * **Default:** `false`
     *
     * Hides the recipe from item/fluid production statistics.
     */
    hide_from_stats?: bool
    /**
     * **Default:** `false`
     *
     * Hides the recipe from the player's crafting screen. The recipe will still show up for selection in machines.
     */
    hide_from_player_crafting?: bool
    /**
     * **Default:** `true`
     *
     * Whether this recipe is allowed to be broken down for the recipe tooltip "Total raw" calculations.
     */
    allow_decomposition?: bool
    /**
     * **Default:** `true`
     *
     * Whether the recipe can be used as an intermediate recipe in hand-crafting.
     */
    allow_as_intermediate?: bool
    /**
     * **Default:** `true`
     *
     * Whether the recipe is allowed to use intermediate recipes when hand-crafting.
     */
    allow_intermediates?: bool
    /**
     * **Default:** `false`
     *
     * Whether the "Made in: <Machine>" part of the tool-tip should always be present, and not only when the recipe can't be hand-crafted.
     */
    always_show_made_in?: bool
    /**
     * **Default:** `true`
     *
     * Whether the recipe name should have the product amount in front of it. E.g. "2x Transport belt"
     */
    show_amount_in_title?: bool
    /**
     * **Default:** `false`
     *
     * Whether the products are always shown in the recipe tooltip.
     */
    always_show_products?: bool
    /**
     * **Default:** `true`
     *
     * Whether enabling this recipe unlocks its item products to show in selection lists (item filters, logistic requests, etc.).
     */
    unlock_results?: bool
  }
  /**
   * The name of a {@link RecipePrototype}.
   * @example
   * "electronic-circuit"
   * @example
   * "kovarex-enrichment-process"
   */
  export type RecipeID = string
  /**
   * The render layer specifies the order of the sprite when rendering, most of the objects have it hardcoded in the source, but some are configurable. The union contains valid values from lowest to highest.
   *
   * ## Union members
   * - `"water-tile"`
   * - `"ground-tile"`
   * - `"tile-transition"`
   * - `"decals"`
   * - `"lower-radius-visualization"`
   * - `"radius-visualization"`
   * - `"transport-belt-integration"`
   * - `"resource"`
   * - `"building-smoke"`
   * - `"decorative"`
   * - `"ground-patch"`
   * - `"ground-patch-higher"`
   * - `"ground-patch-higher2"`
   * - `"remnants"`
   * - `"floor"`
   * - `"transport-belt"`
   * - `"transport-belt-endings"`
   * - `"transport-belt-circuit-connector"`
   * - `"floor-mechanics-under-corpse"`
   * - `"corpse"`
   * - `"floor-mechanics"`
   * - `"item"`
   * - `"lower-object"`
   * - `"lower-object-above-shadow"`
   * - `"object"`
   * - `"higher-object-under"`
   * - `"higher-object-above"`
   * - `"item-in-inserter-hand"`
   * - `"wires"`
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
   */
  export type RenderLayer =
    | "water-tile"
    | "ground-tile"
    | "tile-transition"
    | "decals"
    | "lower-radius-visualization"
    | "radius-visualization"
    | "transport-belt-integration"
    | "resource"
    | "building-smoke"
    | "decorative"
    | "ground-patch"
    | "ground-patch-higher"
    | "ground-patch-higher2"
    | "remnants"
    | "floor"
    | "transport-belt"
    | "transport-belt-endings"
    | "transport-belt-circuit-connector"
    | "floor-mechanics-under-corpse"
    | "corpse"
    | "floor-mechanics"
    | "item"
    | "lower-object"
    | "lower-object-above-shadow"
    | "object"
    | "higher-object-under"
    | "higher-object-above"
    | "item-in-inserter-hand"
    | "wires"
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
  export interface ResearchTechnologyTipTrigger {
    readonly type: "research"
    technology: TechnologyID
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
   */
  export interface Resistance {
    readonly type: DamageTypeID
    /**
     * **Default:** `0`
     *
     * The {@linkplain https://wiki.factorio.com/Damage#Decrease.2C_or_.22flat.22_resistance flat resistance} to the given damage type. (Higher is better)
     */
    decrease?: float
    /**
     * **Default:** `0`
     *
     * The {@linkplain https://wiki.factorio.com/Damage#Percentage_resistance percentage resistance} to the given damage type. (Higher is better)
     */
    percent?: float
  }
  /**
   * The name of a {@link ResourceCategory}.
   * @example
   * "basic-solid"
   * @example
   * "basic-fluid"
   */
  export type ResourceCategoryID = string
  /**
   * ## Union members
   * - `"enabled"`
   * - `"disabled"`
   * - `"highlight"`
   */
  export type RichTextSetting = "enabled" | "disabled" | "highlight"
  export interface RotatedAnimation extends Omit<AnimationParameters, "filename"> {
    /**
     * If this property is present, all RotatedAnimation definitions have to be placed as entries in the array, and they will all be loaded from there. `layers` may not be an empty table. Each definition in the array may also have the `layers` property.
     *
     * If this property is present, all other properties, including those inherited from AnimationParameters, are ignored.
     */
    layers?: readonly RotatedAnimation[]
    /**
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
     */
    direction_count: uint32
    /**
     * Only loaded if `layers` is not defined.
     *
     * If this property exists and high resolution sprites are turned on, this is used to load the animation.
     */
    hr_version?: RotatedAnimation
    /**
     * Only loaded, and mandatory if `layers`, `stripes`, and `filenames` are not defined.
     *
     * The path to the sprite file to use.
     */
    filename?: FileName
    /**
     * Only loaded if both `layers` and `stripes` are not defined.
     */
    filenames?: readonly FileName[]
    /**
     * Only loaded if `layers` is not defined. Mandatory if `filenames` is defined.
     */
    lines_per_file?: uint32
    /**
     * Only loaded if `layers` is not defined. Mandatory if `filenames` is defined.
     */
    slice?: uint32
    /**
     * **Default:** `0`
     *
     * Only loaded if `layers` is not defined.
     */
    still_frame?: uint32
    /**
     * **Default:** `false`
     *
     * Only loaded if `layers` is not defined.
     *
     * If `true`, `direction_count` must be greater than `1`.
     */
    axially_symmetrical?: bool
    /**
     * **Default:** `false`
     *
     * Only loaded if `layers` is not defined.
     */
    counterclockwise?: bool
    /**
     * **Default:** `0.5`
     *
     * Only loaded if `layers` is not defined.
     */
    middle_orientation?: RealOrientation
    /**
     * **Default:** `1`
     *
     * Only loaded if `layers` is not defined.
     *
     * Automatically clamped to be between `0` and `1`.
     */
    orientation_range?: float
    /**
     * **Default:** `true`
     *
     * Only loaded if `layers` is not defined.
     */
    apply_projection?: bool
    /**
     * Only loaded if `layers` is not defined.
     */
    stripes?: readonly Stripe[]
  }
  /**
   * A map of rotated animations for all 4 directions of the entity. If this is loaded as a single RotatedAnimation, it applies to all directions.
   */
  export type RotatedAnimation4Way =
    | {
        north: RotatedAnimation
        /**
         * Defaults to the north animation.
         */
        east?: RotatedAnimation
        /**
         * Defaults to the north animation.
         */
        south?: RotatedAnimation
        /**
         * Defaults to the east animation.
         */
        west?: RotatedAnimation
      }
    | RotatedAnimation
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
   */
  export interface RotatedSprite extends Omit<SpriteParameters, "filename"> {
    /**
     * If this property is present, all RotatedSprite definitions have to be placed as entries in the array, and they will all be loaded from there. `layers` may not be an empty table. Each definition in the array may also have the `layers` property.
     *
     * If this property is present, all other properties, including those inherited from SpriteParameters, are ignored.
     */
    layers?: readonly RotatedSprite[]
    /**
     * Count of direction (frames) specified.
     */
    direction_count: uint16
    /**
     * Only loaded if `layers` is not defined.
     *
     * If this property exists and high resolution sprites are turned on, this is used to load the sprite.
     */
    hr_version?: RotatedSprite
    /**
     * Only loaded if `layers` is not defined.
     *
     * The path to the sprite file to use.
     */
    filename?: FileName
    /**
     * Only loaded, and mandatory if both `layers` and `filename` are not defined.
     */
    filenames?: readonly FileName[]
    /**
     * **Default:** `0`
     *
     * Only loaded if `layers` is not defined. Mandatory if `filenames` is defined.
     */
    lines_per_file?: uint64
    /**
     * Only loaded if `layers` is not defined.
     *
     * Number of slices this is sliced into when using the "optimized atlas packing" option. If you are a modder, you can just ignore this property. As an example, if this is `4`, the sprite will be sliced into a `4x4` grid.
     */
    slice?: SpriteSizeType
    dice?: SpriteSizeType
    /**
     * Only loaded if `layers` is not defined.
     *
     * Same as `slice`, but this specifies only how many slices there are on the x-axis.
     */
    slice_x?: SpriteSizeType
    dice_x?: SpriteSizeType
    /**
     * Only loaded if `layers` is not defined.
     *
     * Same as `slice`, but this specifies only how many slices there are on the y-axis.
     */
    slice_y?: SpriteSizeType
    dice_y?: SpriteSizeType
    /**
     * **Default:** `false`
     *
     * Only loaded if `layers` is not defined.
     *
     * Unused.
     */
    generate_sdf?: bool
    /**
     * **Default:** `false`
     *
     * Only loaded if `layers` is not defined.
     *
     * When `true`, the same picture is used for left/right direction, just flipped, which can save half of the space required, but is not usable once the picture contains shadows, etc.
     */
    axially_symmetrical?: bool
    /**
     * **Default:** `false`
     *
     * Only loaded if `layers` is not defined.
     */
    back_equals_front?: bool
    /**
     * **Default:** `true`
     *
     * Only loaded if `layers` is not defined.
     *
     * Used to fix the inconsistency of direction of the entity in 3d when rendered and direction on the screen (where the 45 degree angle for projection is used).
     */
    apply_projection?: bool
    /**
     * **Default:** `false`
     *
     * Only loaded if `layers` is not defined.
     *
     * Set to `true` to indicate sprites in the spritesheet are in counterclockwise order.
     */
    counterclockwise?: bool
    /**
     * **Default:** `0`
     *
     * Only loaded if `layers` is not defined.
     *
     * Once the specified number of pictures is loaded, other pictures are loaded on other line. This is to allow having more sprites in matrix, to input files with too high width. The game engine limits the width of any input files to 8192px, so it is compatible with most graphics cards. 0 means that all the pictures are in one horizontal line.
     */
    line_length?: uint32
    /**
     * **Default:** `false`
     *
     * Only loaded if `layers` is not defined.
     */
    allow_low_quality_rotation?: bool
  }
  export interface ScriptTriggerEffectItem extends TriggerEffectItem {
    readonly type: "script"
    /**
     * The effect ID that will be provided in {@link import("factorio:runtime").on_script_trigger_effect on_script_trigger_effect}.
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
     */
    extra_padding_when_activated?: int32
    extra_top_padding_when_activated?: int32
    extra_bottom_padding_when_activated?: int32
    extra_left_padding_when_activated?: int32
    extra_right_padding_when_activated?: int32
    /**
     * Sets `extra_top_margin_when_activated`, `extra_bottom_margin_when_activated`, `extra_left_margin_when_activated` and `extra_right_margin_when_activated`.
     */
    extra_margin_when_activated?: int32
    extra_top_margin_when_activated?: int32
    extra_bottom_margin_when_activated?: int32
    extra_left_margin_when_activated?: int32
    extra_right_margin_when_activated?: int32
    dont_force_clipping_rect_for_contents?: bool
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
   * - `"entity-with-force"`: Deprecated. Replaced by "is-military-target".
   * - `"is-military-target"`: Selects entities which are {@link EntityWithOwnerPrototype#is_military_target EntityWithOwnerPrototype::is_military_target}.
   * - `"entity-with-owner"`: Selects entities that are an {@link EntityWithOwnerPrototype}.
   * - `"avoid-rolling-stock"`: Selects entities that are not a {@link RollingStockPrototype}.
   * - `"entity-ghost"`: Selects entities that are an {@link EntityGhostPrototype}.
   * - `"tile-ghost"`: Selects entities that are a {@link TileGhostPrototype}.
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
        | "entity-with-force"
        | "is-military-target"
        | "entity-with-owner"
        | "avoid-rolling-stock"
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
        | "entity-with-force"
        | "is-military-target"
        | "entity-with-owner"
        | "avoid-rolling-stock"
        | "entity-ghost"
        | "tile-ghost"
      )[]
  export interface SequenceTipTrigger {
    readonly type: "sequence"
    /**
     * List of triggers to fulfill.
     */
    triggers: readonly TipTrigger[]
  }
  export interface SetFilterTipTrigger {
    readonly type: "set-filter"
    /**
     * **Default:** `1`
     */
    count?: uint32
    entity?: EntityID
    /**
     * **Default:** `false`
     */
    match_type_only?: bool
    /**
     * **Default:** `false`
     */
    consecutive?: bool
  }
  export interface SetLogisticRequestTipTrigger {
    readonly type: "set-logistic-request"
    /**
     * **Default:** `1`
     */
    count?: uint32
    /**
     * **Default:** `false`
     */
    logistic_chest_only?: bool
  }
  export interface SetRecipeTipTrigger {
    readonly type: "set-recipe"
    recipe?: RecipeID
    machine?: EntityID
    /**
     * **Default:** `false`
     */
    consecutive?: bool
    /**
     * **Default:** `any`
     */
    uses_fluid?: bool
  }
  export interface SetTileTriggerEffectItem extends TriggerEffectItem {
    readonly type: "set-tile"
    tile_name: TileID
    radius: float
    /**
     * **Default:** `false`
     */
    apply_projection?: bool
    tile_collision_mask?: CollisionMask
  }
  /**
   * A struct that provides access to the user-set values of startup {@linkplain https://wiki.factorio.com/Tutorial:Mod_settings mod settings}.
   * @example
   * -- Accessing the value of a mod setting
   * local val = settings.startup["my-mod-setting-name"].value
   */
  export interface Settings {
    /**
     * All startup mod settings, indexed by the name of the setting.
     */
    startup: Record<string, ModSetting>
  }
  export interface ShiftAnimationWaypoints {
    north: readonly Vector[]
    east: readonly Vector[]
    south: readonly Vector[]
    west: readonly Vector[]
  }
  export interface ShiftBuildTipTrigger {
    readonly type: "shift-build"
    /**
     * **Default:** `1`
     */
    count?: uint32
  }
  export interface ShowExplosionOnChartTriggerEffectItem extends TriggerEffectItem {
    readonly type: "show-explosion-on-chart"
    scale: float
  }
  /**
   * @see LampPrototype.signal_to_color_mapping
   */
  export interface SignalColorMapping {
    readonly type: "virtual" | "item" | "fluid"
    /**
     * Name of the signal that shows this color.
     */
    name: VirtualSignalID | ItemID | FluidID
    color: Color
  }
  export interface SignalIDConnector {
    readonly type: "virtual" | "item" | "fluid"
    /**
     * Name of the signal that shows this color.
     */
    name: VirtualSignalID | ItemID | FluidID
  }
  export interface SimpleModifier extends BaseModifier {
    /**
     * Modification value, which will be added to the variable it modifies.
     */
    modifier: double
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
   */
  export interface SimulationDefinition {
    /**
     * The save file that is used for this simulation. If not given and `generate_map` is `true`, a map is generated by the game.
     */
    save?: FileName
    /**
     * This code is run as a (silent) console command inside the simulation when it is first initialized. Since this is run as a console command, the restrictions of console commands apply, e.g. `require` is not available, see {@link import("factorio:runtime").libraries here}.
     */
    init_file?: FileName
    /**
     * **Default:** `""`
     *
     * Only loaded if `init_file` is not defined.
     *
     * This code is run as a (silent) console command inside the simulation when it is first initialized. Since this is run as a console command, the restrictions of console commands apply, e.g. `require` is not available, see {@link import("factorio:runtime").libraries here}.
     */
    init?: string
    /**
     * This code is run as a (silent) console command inside the simulation every time the simulation is updated. Since this is run as a console command, the restrictions of console commands apply, e.g. `require` is not available, see {@link import("factorio:runtime").libraries here}.
     */
    update_file?: FileName
    /**
     * **Default:** `""`
     *
     * Only loaded if `update_file` is not defined.
     *
     * This code is run as a (silent) console command inside the simulation every time the simulation is updated. Since this is run as a console command, the restrictions of console commands apply, e.g. `require` is not available, see {@link import("factorio:runtime").libraries here}.
     */
    update?: string
    /**
     * An array of mods that will be run in this simulation if they are present and enabled.
     */
    mods?: readonly string[]
    /**
     * **Default:** `0`
     *
     * Amount of ticks that this simulation should run for before the simulation is shown to the player. These updates happen after init/init_file has been run and at the highest possible rate (> 60 UPS).
     */
    init_update_count?: uint32
    /**
     * **Default:** `0`
     *
     * How long this simulation takes. In the main menu simulations, another simulation will start after this simulation ends.
     */
    length?: uint32
    /**
     * **Default:** `false`
     *
     * If `save` is not given and this is true, a map gets generated by the game for use in the simulation.
     */
    generate_map?: bool
    /**
     * **Default:** `true`
     *
     * If this is true, the map of the simulation is set to be a lab-tile checkerboard in the area of `{{-20, -15},{20, 15}}` when the scenario is first initialized (before init/init_file run).
     */
    checkboard?: bool
    /**
     * Multiplier for the simulation volume set by the player in the sound settings.
     */
    volume_modifier?: float
    /**
     * If true, overrides the simulation volume set by the player in the sound settings, simply setting the volume modifier to `1`.
     */
    override_volume?: bool
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
   */
  export interface SmokeSource {
    name: TrivialSmokeID
    /**
     * Can't be negative, NaN or infinite.
     */
    frequency: double
    /**
     * **Default:** `0`
     */
    offset?: double
    position?: Vector
    north_position?: Vector
    east_position?: Vector
    south_position?: Vector
    west_position?: Vector
    deviation?: MapPosition
    /**
     * **Default:** `0`
     */
    starting_frame_speed?: uint16
    /**
     * **Default:** `0`
     */
    starting_frame_speed_deviation?: double
    /**
     * **Default:** `0`
     */
    starting_frame?: uint16
    /**
     * **Default:** `0`
     */
    starting_frame_deviation?: double
    /**
     * **Default:** `1`
     */
    slow_down_factor?: uint8
    /**
     * **Default:** `0`
     */
    height?: float
    /**
     * **Default:** `0`
     */
    height_deviation?: float
    /**
     * **Default:** `0`
     */
    starting_vertical_speed?: float
    /**
     * **Default:** `0`
     */
    starting_vertical_speed_deviation?: float
    /**
     * **Default:** `0.965`
     *
     * A value between `0` and `1`.
     */
    vertical_speed_slowdown?: float
  }
  /**
   * @example
   * {
   *   filename = "__base__/sound/ambient/world-ambience-3.ogg",
   *   volume = 1.2
   * }
   */
  export type Sound =
    | {
        aggregation?: AggregationSpecification
        /**
         * **Default:** `false`
         */
        allow_random_repeat?: bool
        /**
         * **Default:** `1`
         *
         * Modifies how far a sound can be heard. Must be between `0` and `1` inclusive.
         */
        audible_distance_modifier?: double
        game_controller_vibration_data?: GameControllerVibrationData
        variations?: readonly SoundDefinition[]
        /**
         * Supported sound file formats are `.ogg` (Vorbis) and `.wav`.
         *
         * Only loaded, and mandatory if `variations` is not defined.
         */
        filename?: FileName
        /**
         * **Default:** `1`
         *
         * Only loaded if `variations` is not defined.
         */
        volume?: float
        /**
         * Only loaded if `variations` is not defined.
         */
        preload?: bool
        /**
         * **Default:** `1`
         *
         * Speed must be `>= 1 / 64`. This sets both min and max speeds.
         *
         * Only loaded if `variations` is not defined.
         */
        speed?: float
        /**
         * **Default:** `1`
         *
         * Must be `>= 1 / 64`.
         *
         * Only loaded if both `variations` and `speed` are not defined.
         */
        min_speed?: float
        /**
         * **Default:** `1`
         *
         * Must be `>= min_speed`.
         *
         * Only loaded if `variations` is not defined. Only loaded, and mandatory if `min_speed` is defined.
         */
        max_speed?: float
      }
    | readonly SoundDefinition[]
  export interface SoundDefinition {
    /**
     * Supported sound file formats are `.ogg` (Vorbis) and `.wav`.
     */
    filename: FileName
    /**
     * **Default:** `1`
     */
    volume?: float
    preload?: bool
    /**
     * **Default:** `1`
     *
     * Speed must be `>= 1 / 64`. This sets both min and max speeds.
     */
    speed?: float
    /**
     * **Default:** `1`
     *
     * Only loaded if `speed` is not defined.
     *
     * Must be `>= 1 / 64`.
     */
    min_speed?: float
    /**
     * **Default:** `1`
     *
     * Only loaded, and mandatory, if `min_speed` is defined.
     *
     * Must be `>= min_speed`.
     */
    max_speed?: float
  }
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
   */
  export type SoundType = "game-effect" | "gui-effect" | "ambient" | "environment" | "walking" | "alert" | "wind"
  /**
   * The definition of a evolution and probability weights for a {@link UnitSpawnDefinition spawnable unit} for a {@link EnemySpawnerPrototype}.
   *
   * It can be specified as a table with named or numbered keys, but not a mix of both. If this is specified as a table with numbered keys then the first value is the evolution factor and the second is the spawn weight.
   */
  export type SpawnPoint =
    | {
        evolution_factor: double
        /**
         * Must be `>= 0`.
         */
        spawn_weight: double
      }
    | readonly [double, double]
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
   */
  export interface SpiderEnginePrototype {
    legs: SpiderLegSpecification | readonly SpiderLegSpecification[]
    /**
     * The string content is irrelevant, if it is present at all then the {@link SpiderVehiclePrototype} is considered to have {@link EntityWithOwnerPrototype#is_military_target EntityWithOwnerPrototype::is_military_target} set to true. This gets enemies interested in attacking the spider vehicle even when nobody is in it.
     */
    military_target?: string
  }
  /**
   * @see SpiderLegPrototype.graphics_set
   */
  export interface SpiderLegGraphicsSet {
    /**
     * **Default:** `0`
     */
    joint_turn_offset?: float
    joint?: Sprite
    joint_shadow?: Sprite
    upper_part?: SpiderLegPart
    lower_part?: SpiderLegPart
    upper_part_shadow?: SpiderLegPart
    lower_part_shadow?: SpiderLegPart
    upper_part_water_reflection?: SpiderLegPart
    lower_part_water_reflection?: SpiderLegPart
  }
  export interface SpiderLegPart {
    top_end?: Sprite
    middle?: Sprite
    bottom_end?: Sprite
    /**
     * **Default:** `0`
     */
    middle_offset_from_top?: float
    /**
     * **Default:** `0`
     */
    middle_offset_from_bottom?: float
    /**
     * **Default:** `0`
     */
    top_end_length?: float
    /**
     * **Default:** `0`
     */
    bottom_end_length?: float
  }
  /**
   * Used by {@link SpiderEnginePrototype} for {@link SpiderVehiclePrototype}.
   */
  export interface SpiderLegSpecification {
    /**
     * Name of a {@link SpiderLegPrototype}.
     */
    leg: EntityID
    mount_position: Vector
    ground_position: Vector
    /**
     * The 1-based indices of the legs that should block this leg's movement.
     */
    blocking_legs: readonly uint32[]
    /**
     * For triggers, the source and target is the leg entity. Certain effects may not raise as desired, e.g. `"push-back"` does nothing, and `"script"` has `leg` as the source and target of the event.
     */
    leg_hit_the_ground_trigger?: TriggerEffect
  }
  /**
   * Used to specify the graphics for {@link SpiderVehiclePrototype}.
   */
  export interface SpiderVehicleGraphicsSet {
    base_animation?: RotatedAnimation
    shadow_base_animation?: RotatedAnimation
    animation?: RotatedAnimation
    shadow_animation?: RotatedAnimation
    /**
     * **Default:** `"higher-object-under"`
     */
    base_render_layer?: RenderLayer
    /**
     * **Default:** `"wires-above"`
     */
    render_layer?: RenderLayer
    /**
     * **Default:** `"object"`
     */
    autopilot_destination_visualisation_render_layer?: RenderLayer
    light?: LightDefinition
    /**
     * Placed in multiple positions, as determined by `light_positions`.
     */
    eye_light?: LightDefinition
    autopilot_destination_on_map_visualisation?: Animation
    autopilot_destination_queue_on_map_visualisation?: Animation
    autopilot_destination_visualisation?: Animation
    autopilot_destination_queue_visualisation?: Animation
    /**
     * **Default:** `0.125`
     */
    autopilot_path_visualisation_line_width?: float
    /**
     * **Default:** `2`
     */
    autopilot_path_visualisation_on_map_line_width?: float
    /**
     * Defines where each `eye_light` is placed. One array per eye and each of those arrays should contain one position per body direction.
     */
    light_positions?: readonly (readonly Vector[])[]
  }
  /**
   * @see NoiseFunctionSpotNoise.arguments
   */
  export interface SpotNoiseArguments {
    x: NoiseNumber
    y: NoiseNumber
    /**
     * Integer. First random seed, usually the map seed is used.
     */
    seed0: ConstantNoiseNumber
    /**
     * Integer. Second random seed, usually chosen to identify the noise layer.
     */
    seed1: ConstantNoiseNumber
    /**
     * **Default:** `512`
     *
     * Integer. The width and height of each region.
     */
    region_size?: ConstantNoiseNumber
    /**
     * **Default:** `0`
     *
     * Integer. Offset of the first candidate point to use.
     */
    skip_offset?: ConstantNoiseNumber
    /**
     * **Default:** `1`
     *
     * Integer. Number of candidate points to skip over after each one used as a spot, including the used one.
     */
    skip_span?: ConstantNoiseNumber
    /**
     * **Default:** `256`
     *
     * Integer. How many candidate points to generate.
     */
    candidate_point_count?: ConstantNoiseNumber
    /**
     * **Default:** `depends on `skip_span``
     *
     * Integer. An alternative to `candidate_point_count`: number of spots to generate: `candidate_spot_count = X` is equivalent to `candidate_point_count / skip_span = X`
     */
    candidate_spot_count?: ConstantNoiseNumber
    /**
     * **Default:** `depends on `region_size` and `candidate_point_count``
     *
     * The minimum spacing to *try* to achieve while randomly picking points. Spot noise may end up placing spots closer than this in crowded regions.
     */
    suggested_minimum_candidate_point_spacing?: ConstantNoiseNumber
    /**
     * **Default:** `true`
     *
     * Whether to place a hard limit on the total quantity in each region by reducing the size of any spot (which will be the last spot chosen) that would put it over the limit.
     */
    hard_region_target_quantity?: ConstantNoiseBoolean
    /**
     * A numeric expression that will be evaluated for each candidate spot to calculate density at that point.
     */
    density_expression: NoiseLiteralExpression
    /**
     * A numeric expression that will be evaluated for each candidate spot to calculate the spot's quantity.
     */
    spot_quantity_expression: NoiseLiteralExpression
    /**
     * A numeric expression that will be evaluated for each candidate spot to calculate the spot's radius. This, together with quantity, will determine the spots peak value.
     */
    spot_radius_expression: NoiseLiteralExpression
    /**
     * A numeric expression that will be evaluated for each candidate spot to calculate the spot's favorability. Spots with higher favorability will be considered first when building the final list of spots for a region.
     */
    spot_favorability_expression: NoiseLiteralExpression
    basement_value: ConstantNoiseNumber
    maximum_spot_basement_radius: ConstantNoiseNumber
    comment: NoiseLiteralString
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
   * -- sprite with hr version
   * picture =
   * {
   *   filename = "__base__/graphics/entity/wooden-chest/wooden-chest.png",
   *   priority = "extra-high",
   *   width = 32,
   *   height = 36,
   *   shift = util.by_pixel(0.5, -2),
   *   hr_version =
   *   {
   *     filename = "__base__/graphics/entity/wooden-chest/hr-wooden-chest.png",
   *     priority = "extra-high",
   *     width = 62,
   *     height = 72,
   *     shift = util.by_pixel(0.5, -2),
   *     scale = 0.5
   *   }
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
   *       width = 32,
   *       height = 36,
   *       shift = util.by_pixel(0.5, -2)
   *     },
   *     {
   *       filename = "__base__/graphics/entity/wooden-chest/wooden-chest-shadow.png",
   *       priority = "extra-high",
   *       width = 52,
   *       height = 20,
   *       shift = util.by_pixel(10, 6.5),
   *       draw_as_shadow = true
   *     }
   *   }
   * }
   * @example
   * -- sprite with layers and hr version
   * picture =
   * {
   *   layers =
   *   {
   *     {
   *       filename = "__base__/graphics/entity/wooden-chest/wooden-chest.png",
   *       priority = "extra-high",
   *       width = 32,
   *       height = 36,
   *       shift = util.by_pixel(0.5, -2),
   *       hr_version =
   *       {
   *         filename = "__base__/graphics/entity/wooden-chest/hr-wooden-chest.png",
   *         priority = "extra-high",
   *         width = 62,
   *         height = 72,
   *         shift = util.by_pixel(0.5, -2),
   *         scale = 0.5
   *       }
   *     },
   *     {
   *       filename = "__base__/graphics/entity/wooden-chest/wooden-chest-shadow.png",
   *       priority = "extra-high",
   *       width = 52,
   *       height = 20,
   *       shift = util.by_pixel(10, 6.5),
   *       draw_as_shadow = true,
   *       hr_version =
   *       {
   *         filename = "__base__/graphics/entity/wooden-chest/hr-wooden-chest-shadow.png",
   *         priority = "extra-high",
   *         width = 104,
   *         height = 40,
   *         shift = util.by_pixel(10, 6.5),
   *         draw_as_shadow = true,
   *         scale = 0.5
   *       }
   *     }
   *   }
   * }
   */
  export interface Sprite extends Omit<SpriteParameters, "filename"> {
    /**
     * If this property is present, all Sprite definitions have to be placed as entries in the array, and they will all be loaded from there. `layers` may not be an empty table. Each definition in the array may also have the `layers` property.
     *
     * If this property is present, all other properties, including those inherited from SpriteParameters, are ignored.
     */
    layers?: readonly Sprite[]
    /**
     * Only loaded, and mandatory if `layers` is not defined.
     *
     * The path to the sprite file to use.
     */
    filename?: FileName
    /**
     * Only loaded if `layers` is not defined.
     *
     * If this property exists and high resolution sprites are turned on, this is used to load the Sprite.
     */
    hr_version?: Sprite
    /**
     * Only loaded if `layers` is not defined.
     *
     * Number of slices this is sliced into when using the "optimized atlas packing" option. If you are a modder, you can just ignore this property. As an example, if this is `4`, the sprite will be sliced into a `4x4` grid.
     */
    slice?: SpriteSizeType
    dice?: SpriteSizeType
    /**
     * Only loaded if `layers` is not defined.
     *
     * Same as `slice`, but this specifies only how many slices there are on the x-axis.
     */
    slice_x?: SpriteSizeType
    dice_x?: SpriteSizeType
    /**
     * Only loaded if `layers` is not defined.
     *
     * Same as `slice`, but this specifies only how many slices there are on the y-axis.
     */
    slice_y?: SpriteSizeType
    dice_y?: SpriteSizeType
  }
  /**
   * A map of sprites for all 4 directions of the entity. If this is loaded as a single Sprite, it applies to all directions.
   * @example
   * -- separate sprites per direction
   * {
   *   north =
   *   {
   *     filename = "__base__/graphics/entity/assembling-machine-3/assembling-machine-3-pipe-N.png",
   *     priority = "extra-high",
   *     width = 35,
   *     height = 18,
   *     shift = util.by_pixel(2.5, 14)
   *   },
   *   east =
   *   {
   *     filename = "__base__/graphics/entity/assembling-machine-3/assembling-machine-3-pipe-E.png",
   *     priority = "extra-high",
   *     width = 20,
   *     height = 38,
   *     shift = util.by_pixel(-25, 1)
   *   },
   *   south =
   *   {
   *     filename = "__base__/graphics/entity/assembling-machine-3/assembling-machine-3-pipe-S.png",
   *     priority = "extra-high",
   *     width = 44,
   *     height = 31,
   *     shift = util.by_pixel(0, -31.5)
   *   },
   *   west =
   *   {
   *     filename = "__base__/graphics/entity/assembling-machine-3/assembling-machine-3-pipe-W.png",
   *     priority = "extra-high",
   *     width = 19,
   *     height = 37,
   *     shift = util.by_pixel(25.5, 1.5)
   *   }
   * }
   */
  export type Sprite4Way =
    | {
        sheets?: readonly SpriteNWaySheet[]
        /**
         * Only loaded if `sheets` is not defined.
         */
        sheet?: SpriteNWaySheet
        /**
         * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
         */
        north?: Sprite
        /**
         * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
         */
        east?: Sprite
        /**
         * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
         */
        south?: Sprite
        /**
         * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
         */
        west?: Sprite
      }
    | Sprite
  /**
   * A map of sprites for all 8 directions of the entity.
   */
  export interface Sprite8Way {
    sheets?: readonly SpriteNWaySheet[]
    /**
     * Only loaded if `sheets` is not defined.
     */
    sheet?: SpriteNWaySheet
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    north?: Sprite
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    north_east?: Sprite
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    east?: Sprite
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    south_east?: Sprite
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    south?: Sprite
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    south_west?: Sprite
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    west?: Sprite
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    north_west?: Sprite
  }
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
   * - `"terrain"`: This flag will internally set these flags: `"mipmap"`, `"linear-mip-level"`, `"linear-minifaction"`, `"no-crop"`, `"group=terrain"`
   * - `"terrain-effect-map"`: This flag will internally set these flags: `"mipmap"`, `"linear-mip-level"`, `"linear-minifaction"`, `"no-crop"`, `"terrain-effect-map"` (internal group flag)
   * - `"shadow"`
   * - `"smoke"`: This flag will internally set these flags: `"mipmap"`, `"linear-minification"`, `"linear-magnification"`, `"group=smoke"`
   * - `"decal"`: This flag will internally set these flags: `"group=decal"`
   * - `"low-object"`
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
   * - `"compressed"`: Deprecated flag that does nothing but is kept to prevent "unknown sprite flag" errors.
   * @example
   * flags = { "linear-minification", "linear-magnification" }
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
    | "shadow"
    | "smoke"
    | "decal"
    | "low-object"
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
    | "compressed"
  )[]
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
   */
  export interface SpriteNWaySheet extends SpriteParameters {
    /**
     * **Default:** `4 if used in Sprite4Way, 8 if used in Sprite8Way`
     *
     * Specifies how many of the directions of the SpriteNWay are filled up with this sheet.
     */
    frames?: uint32
    /**
     * If this property exists and high resolution sprites are turned on, this is used to load the Sheet.
     */
    hr_version?: SpriteNWaySheet
    /**
     * **Default:** `false`
     *
     * Unused.
     */
    generate_sdf?: bool
  }
  export interface SpriteParameters {
    /**
     * The path to the sprite file to use.
     */
    filename: FileName
    /**
     * **Default:** `"medium"`
     */
    priority?: SpritePriority
    flags?: SpriteFlags
    /**
     * The width and height of the sprite. If this is a tuple, the first member of the tuple is the width and the second is the height. Otherwise the size is both width and height. Width and height may only be in the range of 0-8192.
     */
    size?: SpriteSizeType | readonly [SpriteSizeType, SpriteSizeType]
    /**
     * Mandatory if `size` is not defined.
     *
     * Width of the picture in pixels, from 0-8192.
     */
    width?: SpriteSizeType
    /**
     * Mandatory if `size` is not defined.
     *
     * Height of the picture in pixels, from 0-8192.
     */
    height?: SpriteSizeType
    /**
     * **Default:** `0`
     *
     * Horizontal position of the sprite in the source file in pixels.
     */
    x?: SpriteSizeType
    /**
     * **Default:** `0`
     *
     * Vertical position of the sprite in the source file in pixels.
     */
    y?: SpriteSizeType
    /**
     * Loaded only when `x` and `y` are both `0`. The first member of the tuple is `x` and the second is `y`.
     */
    position?: readonly [SpriteSizeType, SpriteSizeType]
    /**
     * **Default:** ``{0, 0}``
     *
     * The shift in tiles. `util.by_pixel()` can be used to divide the shift by 32 which is the usual pixel height/width of 1 tile in normal resolution. Note that 32 pixel tile height/width is not enforced anywhere - any other tile height or width is also possible.
     */
    shift?: Vector
    /**
     * **Default:** `1`
     *
     * Values other than `1` specify the scale of the sprite on default zoom. A scale of `2` means that the picture will be two times bigger on screen (and thus more pixelated).
     */
    scale?: double
    /**
     * **Default:** `false`
     *
     * Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true. This takes precedence over `draw_as_glow` and `draw_as_light`.
     */
    draw_as_shadow?: bool
    /**
     * **Default:** `false`
     *
     * Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true. This takes precedence over `draw_as_light`.
     *
     * Draws first as a normal sprite, then again as a light layer. See {@linkplain https://forums.factorio.com/91682}.
     */
    draw_as_glow?: bool
    /**
     * **Default:** `false`
     *
     * Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true.
     */
    draw_as_light?: bool
    /**
     * **Default:** `0`
     *
     * Only loaded if this is an icon, that is it has the flag `"group=icon"` or `"group=gui"`.
     */
    mipmap_count?: uint8
    /**
     * **Default:** `false`
     */
    apply_runtime_tint?: bool
    /**
     * **Default:** ``{r=1, g=1, b=1, a=1}``
     */
    tint?: Color
    /**
     * **Default:** `"normal"`
     */
    blend_mode?: BlendMode
    /**
     * **Default:** `false`
     *
     * Minimal mode is entered when mod loading fails. You are in it when you see the gray box after (part of) the loading screen that tells you a mod error ({@linkplain https://cdn.discordapp.com/attachments/340530709712076801/532315796626472972/unknown.png Example}). Modders can ignore this property.
     */
    load_in_minimal_mode?: bool
    /**
     * **Default:** `true`
     *
     * Whether alpha should be pre-multiplied.
     */
    premul_alpha?: bool
    /**
     * **Default:** `false`
     *
     * This property is only used by sprites used in {@link UtilitySprites} that have the `"icon"` flag set.
     *
     * If this is set to `true`, the game will generate an icon shadow (using signed distance fields) for the sprite.
     *
     * ![Example of the icon shadow in the character modifier icon used by the steel axe research](https://lua-api.factorio.com/latest/static/images/Generate_sdf_example.png)
     */
    generate_sdf?: bool
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
     */
    layers?: readonly SpriteSheet[]
    /**
     * Only loaded if `layers` is not defined.
     *
     * If this property exists and high resolution sprites are turned on, this is used to load the SpriteSheet.
     */
    hr_version?: SpriteSheet
    /**
     * **Default:** `1`
     */
    variation_count?: uint32
    /**
     * **Default:** `1`
     */
    repeat_count?: uint32
    /**
     * **Default:** `Value of `variation_count``
     */
    line_length?: uint32
  }
  export type SpriteSizeType = int16
  /**
   * @example
   * -- array of sprites
   * pictures =
   * {
   *   { size = 64, filename = "__base__/graphics/icons/coal.png",   scale = 0.25, mipmap_count = 4 },
   *   { size = 64, filename = "__base__/graphics/icons/coal-1.png", scale = 0.25, mipmap_count = 4 },
   *   { size = 64, filename = "__base__/graphics/icons/coal-2.png", scale = 0.25, mipmap_count = 4 },
   *   { size = 64, filename = "__base__/graphics/icons/coal-3.png", scale = 0.25, mipmap_count = 4 }
   * }
   * @example
   * -- sprite sheet using "sheet"
   * connection_patches_connected =
   * {
   *   sheet =
   *   {
   *     filename = "__base__/graphics/entity/nuclear-reactor/reactor-connect-patches.png",
   *     width = 32,
   *     height = 32,
   *     variation_count = 12,
   *     hr_version =
   *     {
   *       filename = "__base__/graphics/entity/nuclear-reactor/hr-reactor-connect-patches.png",
   *       width = 64,
   *       height = 64,
   *       variation_count = 12,
   *       scale = 0.5
   *     }
   *   }
   * }
   */
  export type SpriteVariations =
    | {
        sheet: SpriteSheet
      }
    | SpriteSheet
    | readonly Sprite[]
  export interface StackInserterCapacityBonusModifier extends SimpleModifier {
    readonly type: "stack-inserter-capacity-bonus"
    /**
     * **Default:** `false`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  export interface StackTransferTipTrigger {
    readonly type: "stack-transfer"
    /**
     * **Default:** `1`
     */
    count?: uint32
    /**
     * **Default:** `any transfer`
     *
     * ## Union members
     * - `"stack"`
     * - `"inventory"`
     * - `"whole-inventory"`
     */
    transfer?: "stack" | "inventory" | "whole-inventory"
  }
  export interface StateSteeringSettings {
    /**
     * Not including the radius of the unit.
     */
    radius: double
    separation_factor: double
    separation_force: double
    /**
     * Used only for special "to look good" purposes (like in trailer).
     */
    force_unit_fuzzy_goto_behavior: bool
  }
  export interface StatusColors {
    /**
     * **Default:** ``{1, 1, 1, 1}``
     */
    idle?: Color
    /**
     * **Default:** `idle`
     */
    no_minable_resources?: Color
    /**
     * **Default:** `idle`
     */
    full_output?: Color
    /**
     * **Default:** `idle`
     */
    insufficient_input?: Color
    /**
     * **Default:** `idle`
     */
    disabled?: Color
    /**
     * **Default:** `No color`
     */
    no_power?: Color
    /**
     * **Default:** ``{1, 1, 1, 1}``
     */
    working?: Color
    /**
     * **Default:** `working`
     */
    low_power?: Color
  }
  /**
   * @see MapSettings.steering
   */
  export interface SteeringSettings {
    default: StateSteeringSettings
    moving: StateSteeringSettings
  }
  /**
   * @see StorageTankPrototype.pictures
   */
  export interface StorageTankPictures {
    picture: Sprite4Way
    window_background: Sprite
    fluid_background: Sprite
    flow_sprite: Sprite
    gas_flow: Animation
  }
  export interface StreamAttackParameters extends BaseAttackParameters {
    readonly type: "stream"
    /**
     * **Default:** `0`
     */
    fluid_consumption?: float
    /**
     * **Default:** `0`
     */
    gun_barrel_length?: float
    projectile_creation_parameters?: CircularProjectileCreationSpecification
    /**
     */
    gun_center_shift?: Vector | GunShift4Way
    /**
     * Controls which fluids can fuel this stream attack and their potential damage bonuses.
     */
    fluids?: readonly StreamFluidProperties[]
  }
  /**
   * @see StreamAttackParameters.fluids
   */
  export interface StreamFluidProperties {
    readonly type: FluidID
    /**
     * **Default:** `1`
     */
    damage_modifier?: double
  }
  export interface StreamTriggerDelivery extends TriggerDeliveryItem {
    readonly type: "stream"
    /**
     * Name of a {@link FluidStreamPrototype}.
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
   */
  export type StretchRule = "on" | "off" | "auto" | "stretch_and_expand"
  /**
   * Used as an alternative way to specify animations.
   */
  export interface Stripe {
    width_in_frames: uint32
    /**
     * Mandatory when Stripe is used in {@link Animation}.
     *
     * Optional when it is used in {@link RotatedAnimation}, where it defaults to {@link RotatedAnimation#direction_count RotatedAnimation::direction_count}.
     */
    height_in_frames: uint32
    filename: FileName
    /**
     * **Default:** `0`
     */
    x?: uint32
    /**
     * **Default:** `0`
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
    selected_clicked_graphical_set?: ElementImageSet
    left_click_sound?: Sound
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
  export interface TabStyleSpecification extends BaseStyleSpecification {
    readonly type: "tab_style"
    /**
     * Name of a {@link FontPrototype}.
     */
    font?: string
    /**
     * Name of a {@link FontPrototype}.
     */
    badge_font?: string
    badge_horizontal_spacing?: int16
    default_font_color?: Color
    selected_font_color?: Color
    disabled_font_color?: Color
    default_badge_font_color?: Color
    selected_badge_font_color?: Color
    disabled_badge_font_color?: Color
    default_graphical_set?: ElementImageSet
    selected_graphical_set?: ElementImageSet
    hover_graphical_set?: ElementImageSet
    game_controller_selected_hover_graphical_set?: ElementImageSet
    press_graphical_set?: ElementImageSet
    disabled_graphical_set?: ElementImageSet
    override_graphics_on_edges?: bool
    left_edge_selected_graphical_set?: ElementImageSet
    right_edge_selected_graphical_set?: ElementImageSet
    default_badge_graphical_set?: ElementImageSet
    selected_badge_graphical_set?: ElementImageSet
    hover_badge_graphical_set?: ElementImageSet
    press_badge_graphical_set?: ElementImageSet
    disabled_badge_graphical_set?: ElementImageSet
    draw_grayscale_picture?: bool
    left_click_sound?: Sound
  }
  export interface TabbedPaneStyleSpecification extends BaseStyleSpecification {
    readonly type: "tabbed_pane_style"
    vertical_spacing?: uint32
    tab_content_frame?: FrameStyleSpecification
    tab_container?: HorizontalFlowStyleSpecification
  }
  export interface TableStyleSpecification extends BaseStyleSpecification {
    readonly type: "table_style"
    horizontal_spacing?: int32
    vertical_spacing?: int32
    /**
     * Sets `top_cell_padding`, `right_cell_padding`, `bottom_cell_padding` and `left_cell_padding` to the same value.
     */
    cell_padding?: int16
    top_cell_padding?: int16
    right_cell_padding?: int16
    bottom_cell_padding?: int16
    left_cell_padding?: int16
    apply_row_graphical_set_per_column?: bool
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
    column_widths?: readonly ColumnWidth[]
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
   * Used when defining a {@link TechnologyPrototype} that uses difficulty. For a technology without difficulty, these same properties are defined on the prototype itself.
   */
  export interface TechnologyData {
    /**
     * **Default:** `false`
     *
     * When set to true, and the technology contains several levels, only the relevant one is displayed in the technology screen.
     * @example
     * {
     *   type = "technology",
     *   name = "physical-projectile-damage-2",
     *   [...]
     *   upgrade = "true"
     * }
     */
    upgrade?: bool
    /**
     * **Default:** `true`
     */
    enabled?: bool
    /**
     * **Default:** `false`
     *
     * Hides the technology from the tech screen.
     */
    hidden?: bool
    /**
     * **Default:** `false`
     *
     * Controls whether the technology is shown in the tech GUI when it is not `enabled`.
     */
    visible_when_disabled?: bool
    /**
     * **Default:** `false`
     *
     * Controls whether the technology cost ignores the tech cost multiplier set in the {@link DifficultySettings}. E.g. `4` for the default expensive difficulty.
     */
    ignore_tech_cost_multiplier?: bool
    /**
     * Determines the cost in items and time of the technology.
     */
    unit: TechnologyUnit
    /**
     * `"infinite"` for infinite technologies, otherwise `uint32`.
     *
     * Defaults to the same level as the technology, which is `0` for non-upgrades, and the level of the upgrade for upgrades.
     */
    max_level?: uint32 | "infinite"
    /**
     * List of technologies needed to be researched before this one can be researched.
     * @example
     * prerequisites = {"explosives", "military-2"}
     */
    prerequisites?: readonly TechnologyID[]
    /**
     * List of effects of the technology (applied when the technology is researched).
     * @example
     * {
     *   {
     *     type  = "unlock-recipe",
     *     recipe = "land-mine"
     *   }
     * }
     */
    effects?: readonly Modifier[]
  }
  /**
   * The name of a {@link TechnologyPrototype}.
   * @example
   * "automated-rail-transportation"
   * @example
   * "steel-axe"
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
     */
    level_font?: string
    /**
     * Name of a {@link FontPrototype}.
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
   */
  export interface TechnologyUnit {
    /**
     * How many units are needed. Must be `> 0`.
     */
    count?: uint64
    /**
     * Formula that specifies how many units are needed per level of the technology.
     *
     * If the last characters of the prototype name are `-<number>`, the level is taken to be the number, e.g. `physical-projectile-damage-2` implies a number of `2`. This defaults to `1`. There does not need to be lower-level technologies for a technology to be detected as having a level, meaning a technology or sequence of upgrade technologies can begin at any number.
     *
     * For an infinite technology, the level begins at the given suffix (or `1` by default) and gains 1 level upon being researched, or if the `max_level` is reached, marked as completed. The initial level of a technology can not be greater than its `max_level`.
     *
     * The formula is executed following the BODMAS order (also known as PEMDAS). It supports these operators and characters:
     *
     * - `+`: Addition
     *
     * - `-`: Subtraction
     *
     * - `*`: Multiplication
     *
     * - `^`: Exponentiation
     *
     * - `()`: Brackets for order of operations; supports nested brackets
     *
     * - `l` or `L`: The current level of the technology
     *
     * - Digits: Treated as numbers
     *
     * - `.`: Decimal point in numbers
     *
     * - `SPACE`: Spaces are ignored
     *
     * Note that this formula can also be used at {@link import("factorio:runtime").LuaGameScript#evaluate_expression runtime}.
     */
    count_formula?: string
    /**
     * How much time one unit takes to research. In a lab with a crafting speed of `1`, it corresponds to the number of seconds.
     */
    time: double
    /**
     * List of ingredients needed for one unit of research. The items must all be {@link ToolPrototype ToolPrototypes}.
     */
    ingredients: readonly IngredientPrototype[]
  }
  export interface TextBoxStyleSpecification extends BaseStyleSpecification {
    readonly type: "textbox_style"
    /**
     * Name of a {@link FontPrototype}.
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
     */
    uses_stack?: bool
  }
  /**
   * @see FireFlamePrototype.burnt_patch_alpha_variations
   */
  export interface TileAndAlpha {
    tile: TileID
    alpha: float
  }
  /**
   * @see TilePrototype.build_sound
   */
  export interface TileBuildSound {
    small?: Sound
    medium?: Sound
    large?: Sound
  }
  /**
   * The name of a {@link TilePrototype}.
   * @example
   * "grass-2"
   * @example
   * "landfill"
   */
  export type TileID = string
  /**
   * Name of an allowed tile, or a list of two tile names for entities allowed on transitions.
   * @see AutoplaceSpecification.tile_restriction
   */
  export type TileIDRestriction = TileID | readonly [TileID, TileID]
  /**
   * ## Union members
   * - `"zero"`
   * - `"water"`
   * - `"water-overlay"`
   * - `"ground"`
   * - `"top"`
   */
  export type TileRenderLayer = "zero" | "water" | "water-overlay" | "ground" | "top"
  /**
   * Used by {@link TilePrototype}.
   */
  export interface TileSprite {
    /**
     * Frame count.
     *
     * Optional if it is loaded inside of a `hr_version`, see that property for more information.
     */
    count: uint32
    picture: FileName
    /**
     * If this property exists and high resolution sprites are turned on, its contents are used to load the tile sprite.
     *
     * `count` in `hr_version` has to be either unspecified or the same as for normal resolution definition.
     */
    hr_version?: TileSprite
    /**
     * **Default:** `1`
     */
    scale?: float
    /**
     * **Default:** `0`
     *
     * Horizontal position of the sprite in the source file in pixels.
     */
    x?: SpriteSizeType
    /**
     * **Default:** `0`
     *
     * Vertical position of the sprite in the source file in pixels.
     */
    y?: SpriteSizeType
    /**
     * **Default:** `0`
     *
     * Once the specified number of pictures is loaded, other pictures are loaded on other line. This is to allow having longer animations in matrix, to input files with too high width. The game engine limits the width of any input files to 8192px, so it is compatible with most graphics cards. 0 means that all the pictures are in one horizontal line.
     */
    line_length?: uint32
  }
  export interface TileSpriteWithProbability extends TileSprite {
    /**
     * Only powers of 2 from 1 to 128 can be used. Square size of the tile arrangement this sprite is used for. Used to calculate the `width` and `height` of the sprite which cannot be set directly. (width or height) = size * 32 / scale.
     */
    size: uint32
    /**
     * **Default:** `1`
     *
     * Probability of 1x1 (size = 1) version of tile must be 1.
     */
    probability?: double
    weights?: readonly double[]
  }
  export interface TileTransitionSprite {
    /**
     * Frame count.
     */
    count: uint32
    picture: FileName
    /**
     * If this property exists and high resolution sprites are turned on, its contents are used to load the tile transition sprite.
     */
    hr_version?: TileTransitionSprite
    /**
     * **Default:** `false`
     *
     * If this is true, the shift of the tile transition sprite is set to `{0, 0.5}`.
     */
    tall?: bool
    /**
     * **Default:** `1`
     */
    scale?: float
    /**
     * **Default:** `0`
     *
     * Horizontal position of the sprite in the source file in pixels.
     */
    x?: SpriteSizeType
    /**
     * **Default:** `0`
     *
     * Vertical position of the sprite in the source file in pixels.
     */
    y?: SpriteSizeType
  }
  /**
   * Used for {@link TilePrototype} graphics.
   */
  export interface TileTransitions {
    /**
     * This or side_mask needs to be specified if `empty_transitions` is not true.
     */
    side: TileTransitionSprite
    /**
     * This or side needs to be specified if `empty_transitions` is not true.
     */
    side_mask: TileTransitionSprite
    /**
     * This or inner_corner_mask needs to be specified if `empty_transitions` is not true.
     */
    inner_corner: TileTransitionSprite
    /**
     * This or inner_corner needs to be specified if `empty_transitions` is not true.
     */
    inner_corner_mask: TileTransitionSprite
    /**
     * This or outer_corner_mask needs to be specified if `empty_transitions` is not true.
     */
    outer_corner: TileTransitionSprite
    /**
     * This or outer_corner needs to be specified if `empty_transitions` is not true.
     */
    outer_corner_mask: TileTransitionSprite
    /**
     * **Default:** `false`
     */
    empty_transitions?: bool
    side_background?: TileTransitionSprite
    side_background_mask?: TileTransitionSprite
    side_effect_map?: TileTransitionSprite
    side_weights?: readonly float[]
    inner_corner_background?: TileTransitionSprite
    inner_corner_background_mask?: TileTransitionSprite
    inner_corner_effect_map?: TileTransitionSprite
    inner_corner_weights?: readonly float[]
    outer_corner_background?: TileTransitionSprite
    outer_corner_background_mask?: TileTransitionSprite
    outer_corner_effect_map?: TileTransitionSprite
    outer_corner_weights?: readonly float[]
    u_transition?: TileTransitionSprite
    u_transition_mask?: TileTransitionSprite
    u_transition_background?: TileTransitionSprite
    u_transition_background_mask?: TileTransitionSprite
    u_transition_effect_map?: TileTransitionSprite
    u_transition_weights?: readonly float[]
    o_transition?: TileSprite
    o_transition_mask?: TileSprite
    o_transition_background?: TileSprite
    o_transition_background_mask?: TileSprite
    o_transition_effect_map?: TileSprite
    water_patch?: Sprite
    effect_mask?: Animation
    layer?: uint8
    overlay_layer_group?: TileRenderLayer
    background_layer_group?: TileRenderLayer
    overlay_layer_offset?: int8
    /**
     * **Default:** `0`
     */
    masked_overlay_layer_offset?: int8
    /**
     * **Default:** `0`
     */
    background_layer_offset?: int8
    masked_background_layer_offset?: int8
    /**
     * **Default:** `false`
     */
    apply_effect_color_to_overlay?: bool
    /**
     * **Default:** `false`
     */
    offset_background_layer_by_tile_layer?: bool
  }
  export interface TileTransitionsBetweenTransitions extends TileTransitions {
    transition_group1: uint8
    transition_group2: uint8
  }
  export interface TileTransitionsToTiles extends TileTransitions {
    to_tiles: readonly TileID[]
    transition_group: uint8
  }
  export interface TileTransitionsVariants extends TileTransitions {
    main: readonly TileSpriteWithProbability[]
    /**
     * Width and height are given by the game, setting them will not have an effect. Width and height are calculated from the expected size (32) and the scale. So, for HR tiles at a size of 64x64, the scale needs to be 0.5.
     */
    material_background?: TileSprite
  }
  export interface TimeElapsedTipTrigger {
    readonly type: "time-elapsed"
    ticks: uint32
  }
  /**
   * This is used by {@link TipsAndTricksItem} for the initial starting status. One of the following values:
   *
   * ## Union members
   * - `"locked"`: The tip is hidden.
   * - `"optional"`: Same as `"locked"`.
   * - `"dependencies-not-met"`: The {@link TipsAndTricksItem#trigger trigger} for the tip was already met, but the tip is still hidden because of dependencies.
   * - `"unlocked"`: Not suggested by trigger yet, but visible in the window. This is also the state that tips are left in when the /unlock-tips command is used in-game.
   * - `"suggested"`: The dependencies and triggers are met, the game suggests the tip.
   * - `"not-to-be-suggested"`
   * - `"completed-without-tutorial"`: The tip is considered completed, shows the check mark in the GUI.
   * - `"completed"`: The tip is considered completed, shows the check mark in the GUI.
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
   * - {@link ResearchTechnologyTipTrigger}: Loaded when the `type` is `"research"`.
   * - {@link UnlockRecipeTipTrigger}: Loaded when the `type` is `"unlock-recipe"`.
   * - {@link CraftItemTipTrigger}: Loaded when the `type` is `"craft-item"`.
   * - {@link BuildEntityTipTrigger}: Loaded when the `type` is `"build-entity"`.
   * - {@link ManualTransferTipTrigger}: Loaded when the `type` is `"manual-transfer"`.
   * - {@link StackTransferTipTrigger}: Loaded when the `type` is `"stack-transfer"`.
   * - {@link EntityTransferTipTrigger}: Loaded when the `type` is `"entity-transfer"`.
   * - {@link SetRecipeTipTrigger}: Loaded when the `type` is `"set-recipe"`.
   * - {@link SetFilterTipTrigger}: Loaded when the `type` is `"set-filter"`.
   * - {@link LimitChestTipTrigger}: Loaded when the `type` is `"limit-chest"`.
   * - {@link UsePipetteTipTrigger}: Loaded when the `type` is `"use-pipette"`.
   * - {@link SetLogisticRequestTipTrigger}: Loaded when the `type` is `"set-logistic-request"`.
   * - {@link UseConfirmTipTrigger}: Loaded when the `type` is `"use-confirm"`.
   * - {@link LowPowerTipTrigger}: Loaded when the `type` is `"low-power"`.
   * - {@link PasteEntitySettingsTipTrigger}: Loaded when the `type` is `"paste-entity-settings"`.
   * - {@link FastReplaceTipTrigger}: Loaded when the `type` is `"fast-replace"`.
   * - {@link GroupAttackTipTrigger}: Loaded when the `type` is `"group-attack"`.
   * - {@link FastBeltBendTipTrigger}: Loaded when the `type` is `"fast-belt-bend"`.
   * - {@link BeltTraverseTipTrigger}: Loaded when the `type` is `"belt-traverse"`.
   * - {@link PlaceEquipmentTipTrigger}: Loaded when the `type` is `"place-equipment"`.
   * - {@link ClearCursorTipTrigger}: Loaded when the `type` is `"clear-cursor"`.
   * - {@link ShiftBuildTipTrigger}: Loaded when the `type` is `"shift-build"`.
   * - {@link GateOverRailBuildTipTrigger}: Loaded when the `type` is `"gate-over-rail-build"`.
   * - {@link ManualWireDragTipTrigger}: Loaded when the `type` is `"manual-wire-drag"`.
   */
  export type TipTrigger =
    | OrTipTrigger
    | AndTipTrigger
    | SequenceTipTrigger
    | DependenciesMetTipTrigger
    | TimeElapsedTipTrigger
    | ResearchTechnologyTipTrigger
    | UnlockRecipeTipTrigger
    | CraftItemTipTrigger
    | BuildEntityTipTrigger
    | ManualTransferTipTrigger
    | StackTransferTipTrigger
    | EntityTransferTipTrigger
    | SetRecipeTipTrigger
    | SetFilterTipTrigger
    | LimitChestTipTrigger
    | UsePipetteTipTrigger
    | SetLogisticRequestTipTrigger
    | UseConfirmTipTrigger
    | LowPowerTipTrigger
    | PasteEntitySettingsTipTrigger
    | FastReplaceTipTrigger
    | GroupAttackTipTrigger
    | FastBeltBendTipTrigger
    | BeltTraverseTipTrigger
    | PlaceEquipmentTipTrigger
    | ClearCursorTipTrigger
    | ShiftBuildTipTrigger
    | GateOverRailBuildTipTrigger
    | ManualWireDragTipTrigger
  export interface TrainBrakingForceBonusModifier extends SimpleModifier {
    readonly type: "train-braking-force-bonus"
    /**
     * **Default:** `true`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  /**
   * @see UtilityConstants.train_path_finding
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
     */
    train_waiting_at_signal_tick_multiplier_penalty: float
    train_with_no_path_penalty: uint32
    train_auto_without_schedule_penalty: uint32
  }
  /**
   * @see TrainStopPrototype.drawing_boxes
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
  export interface TransportBeltAnimationSet {
    animation_set: RotatedAnimation
    /**
     * **Default:** `1`
     */
    east_index?: uint8
    /**
     * **Default:** `2`
     */
    west_index?: uint8
    /**
     * **Default:** `3`
     */
    north_index?: uint8
    /**
     * **Default:** `4`
     */
    south_index?: uint8
    /**
     * **Default:** `13`
     */
    starting_south_index?: uint8
    /**
     * **Default:** `14`
     */
    ending_south_index?: uint8
    /**
     * **Default:** `15`
     */
    starting_west_index?: uint8
    /**
     * **Default:** `16`
     */
    ending_west_index?: uint8
    /**
     * **Default:** `17`
     */
    starting_north_index?: uint8
    /**
     * **Default:** `18`
     */
    ending_north_index?: uint8
    /**
     * **Default:** `19`
     */
    starting_east_index?: uint8
    /**
     * **Default:** `20`
     */
    ending_east_index?: uint8
    ending_patch?: Sprite4Way
    /**
     * **Default:** `false`
     */
    ends_with_stopper?: bool
  }
  export interface TransportBeltAnimationSetWithCorners extends TransportBeltAnimationSet {
    /**
     * **Default:** `5`
     */
    east_to_north_index?: uint8
    /**
     * **Default:** `6`
     */
    north_to_east_index?: uint8
    /**
     * **Default:** `7`
     */
    west_to_north_index?: uint8
    /**
     * **Default:** `8`
     */
    north_to_west_index?: uint8
    /**
     * **Default:** `9`
     */
    south_to_east_index?: uint8
    /**
     * **Default:** `10`
     */
    east_to_south_index?: uint8
    /**
     * **Default:** `11`
     */
    south_to_west_index?: uint8
    /**
     * **Default:** `12`
     */
    west_to_south_index?: uint8
  }
  /**
   * Used to define the graphics for the (in vanilla) yellow frame that is used when a {@link TransportBeltPrototype} is connected to the circuit network.
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
  export interface TreeVariation {
    /**
     * If `shadow` is not specified, this has to have one more frame than `leaves`.
     */
    trunk: Animation
    leaves: Animation
    leaf_generation: CreateParticleTriggerEffectItem
    branch_generation: CreateParticleTriggerEffectItem
    /**
     * Shadow must have 1 less `frame_count` than `leaves`.
     */
    shadow?: Animation
    /**
     * Only loaded if `shadow` is present. Defaults to `shadow.frame_count - 1`.
     */
    disable_shadow_distortion_beginning_at_frame?: uint32
    /**
     * Normal must have the same frame_count as `leaves`.
     */
    normal?: Animation
    /**
     * Overlay must have the same frame_count as `leaves`. Won't be tinted by the tree color unless `apply_runtime_tint` is set to `true` in the sprite definition. See {@linkplain https://forums.factorio.com/viewtopic.php?p=547758#p547758 here}.
     */
    overlay?: Animation
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
   * - {@link FlameThrowerExplosionTriggerDelivery}: Loaded when the `type` is `"flame-thrower"`.
   * - {@link BeamTriggerDelivery}: Loaded when the `type` is `"beam"`.
   * - {@link StreamTriggerDelivery}: Loaded when the `type` is `"stream"`.
   * - {@link ArtilleryTriggerDelivery}: Loaded when the `type` is `"artillery"`.
   */
  export type TriggerDelivery =
    | InstantTriggerDelivery
    | ProjectileTriggerDelivery
    | FlameThrowerExplosionTriggerDelivery
    | BeamTriggerDelivery
    | StreamTriggerDelivery
    | ArtilleryTriggerDelivery
  /**
   * The abstract base of all {@link TriggerDelivery TriggerDeliveries}.
   */
  export interface TriggerDeliveryItem {
    /**
     * Provides the source of the TriggerDelivery as as both the source and target of the effect.
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
   */
  export type TriggerEffect =
    | (
        | DamageTriggerEffectItem
        | CreateEntityTriggerEffectItem
        | CreateExplosionTriggerEffectItem
        | CreateFireTriggerEffectItem
        | CreateSmokeTriggerEffectItem
        | CreateTrivialSmokeEffectItem
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
      )
    | readonly (
        | DamageTriggerEffectItem
        | CreateEntityTriggerEffectItem
        | CreateExplosionTriggerEffectItem
        | CreateFireTriggerEffectItem
        | CreateSmokeTriggerEffectItem
        | CreateTrivialSmokeEffectItem
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
      )[]
  /**
   * The abstract base of all {@link TriggerEffect TriggerEffects}.
   */
  export interface TriggerEffectItem {
    /**
     * **Default:** `1`
     */
    repeat_count?: uint16
    /**
     * **Default:** `0`
     */
    repeat_count_deviation?: uint16
    /**
     * **Default:** `1`
     *
     * Must be greater than `0` and less than or equal to `1`.
     */
    probability?: float
    /**
     * **Default:** `false`
     */
    affects_target?: bool
    /**
     * **Default:** `true`
     */
    show_in_tooltip?: bool
    /**
     * Guaranteed to work with {@link EntityWithHealthPrototype#damaged_trigger_effect EntityWithHealthPrototype::damaged_trigger_effect} and {@link EntityWithHealthPrototype#dying_trigger_effect EntityWithHealthPrototype::dying_trigger_effect}. Unknown if it works with other properties that use {@link TriggerEffect}.
     */
    damage_type_filters?: DamageTypeFilters
  }
  /**
   * The abstract base of all {@link Trigger Triggers}.
   */
  export interface TriggerItem {
    /**
     * **Default:** `All flags`
     *
     * Only prototypes with these flags are affected by the trigger item.
     */
    entity_flags?: EntityPrototypeFlags
    /**
     * **Default:** `false`
     */
    ignore_collision_condition?: bool
    /**
     * **Default:** `Everything`
     *
     * The trigger affects only prototypes with these masks.
     */
    trigger_target_mask?: TriggerTargetMask
    /**
     * **Default:** `1`
     */
    repeat_count?: uint32
    /**
     * **Default:** `1`
     *
     * Must be greater than 0 and less than or equal to 1.
     */
    probability?: float
    /**
     * **Default:** `All masks`
     *
     * Only prototypes with these collision masks are affected by the trigger item.
     */
    collision_mask?: CollisionMask
    action_delivery?: TriggerDelivery | readonly TriggerDelivery[]
    /**
     * **Default:** `All forces`
     *
     * Only entities meeting the force condition are affected by the trigger item.
     */
    force?: ForceCondition
  }
  /**
   * An array of names of {@link TriggerTargetType}. See {@linkplain https://forums.factorio.com/71657 Design discussion: Trigger target type} and {@linkplain https://forums.factorio.com/86164 Blacklist for prototypes turrets shouldn't attack}.
   */
  export type TriggerTargetMask = readonly string[]
  /**
   * The name of a {@link TrivialSmokePrototype}.
   * @example
   * "smoke-building"
   * @example
   * "nuclear-smoke"
   */
  export type TrivialSmokeID = string
  export interface TurretAttackModifier extends BaseModifier {
    readonly type: "turret-attack"
    /**
     * **Default:** `true`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
    /**
     * Name of the {@link EntityPrototype} that is affected. This also works for non-turrets such as tanks, however, the bonus does not appear in the entity's tooltips.
     */
    turret_id: EntityID
    /**
     * Modification value, which will be added to the current turret attack modifier upon researching.
     */
    modifier: double
  }
  /**
   * @see UndergroundBeltPrototype.structure
   */
  export interface UndergroundBeltStructure {
    direction_in: Sprite4Way
    direction_out: Sprite4Way
    back_patch?: Sprite4Way
    front_patch?: Sprite4Way
    direction_in_side_loading?: Sprite4Way
    direction_out_side_loading?: Sprite4Way
  }
  /**
   * Used by {@link UnitPrototype}.
   */
  export interface UnitAISettings {
    /**
     * **Default:** `false`
     *
     * If enabled, units that repeatedly fail to succeed at commands will be destroyed.
     */
    destroy_when_commands_fail?: bool
    /**
     * **Default:** `false`
     *
     * If enabled, units that have nothing else to do will attempt to return to a spawner.
     */
    allow_try_return_to_spawner?: bool
    /**
     * **Default:** `true`
     *
     * If enabled, units will try to separate themselves from nearby friendly units.
     */
    do_separation?: bool
    /**
     * **Default:** `0`
     *
     * Must be between -8 and 8.
     */
    path_resolution_modifier?: int8
  }
  export interface UnitAlternativeFrameSequence {
    /**
     * Indices of frames from the attack parameter animation.
     */
    warmup_frame_sequence: readonly uint16[]
    /**
     * Indices of frames from the attack parameter animation.
     */
    warmup2_frame_sequence: readonly uint16[]
    /**
     * Indices of frames from the attack parameter animation.
     */
    attacking_frame_sequence: readonly uint16[]
    /**
     * Indices of frames from the attack parameter animation.
     */
    cooldown_frame_sequence: readonly uint16[]
    /**
     * Indices of frames from the attack parameter animation.
     */
    prepared_frame_sequence: readonly uint16[]
    /**
     * Indices of frames from the attack parameter animation.
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
     */
    min_group_gathering_time: uint32
    max_group_gathering_time: uint32
    /**
     * After the gathering is finished the group can still wait for late members, but it doesn't accept new ones anymore.
     */
    max_wait_time_for_late_members: uint32
    /**
     * Limits for group radius (calculated by number of numbers).
     */
    max_group_radius: double
    min_group_radius: double
    /**
     * When a member falls behind the group he can speedup up till this much of his regular speed.
     */
    max_member_speedup_when_behind: double
    /**
     * When a member gets ahead of its group, it will slow down to at most this factor of its speed.
     */
    max_member_slowdown_when_ahead: double
    /**
     * When members of a group are behind, the entire group will slow down to at most this factor of its max speed.
     */
    max_group_slowdown_factor: double
    /**
     * If a member falls behind more than this times the group radius, the group will slow down to max_group_slowdown_factor.
     */
    max_group_member_fallback_factor: double
    /**
     * If a member falls behind more than this time the group radius, it will be removed from the group.
     */
    member_disown_distance: double
    tick_tolerance_when_member_arrives: uint32
    /**
     * Maximum number of automatically created unit groups gathering for attack at any time.
     */
    max_gathering_unit_groups: uint32
    /**
     * Maximum size of an attack unit group. This only affects automatically-created unit groups; manual groups created through the API are unaffected.
     */
    max_unit_group_size: uint32
  }
  /**
   * It can be specified as a table with named or numbered keys, but not a mix of both. If this is specified as a table with numbered keys then the first value is the unit and the second is the spawn points.
   */
  export type UnitSpawnDefinition =
    | {
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
         */
        spawn_points: readonly SpawnPoint[]
      }
    | readonly [EntityID, readonly SpawnPoint[]]
  export interface UnlockRecipeModifier extends BaseModifier {
    readonly type: "unlock-recipe"
    /**
     * **Default:** `false`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
    /**
     * Prototype name of the {@link RecipePrototype} that is unlocked upon researching.
     */
    recipe: RecipeID
  }
  export interface UnlockRecipeTipTrigger {
    readonly type: "unlock-recipe"
    recipe: RecipeID
  }
  export interface UseConfirmTipTrigger {
    readonly type: "use-confirm"
    /**
     * **Default:** `1`
     */
    count?: uint32
  }
  export interface UseOnSelfCapsuleAction {
    readonly type: "use-on-self"
    attack_parameters: AttackParameters
    /**
     * **Default:** `true`
     *
     * Whether using the capsule consumes an item from the stack.
     */
    uses_stack?: bool
  }
  export interface UsePipetteTipTrigger {
    readonly type: "use-pipette"
    /**
     * **Default:** `1`
     */
    count?: uint32
  }
  /**
   * A vector is a two-element array or dictionary containing the x and y components. Positive x goes east, positive y goes south.
   * @example
   * shift = {0, 12}
   * @example
   * right = {1.0, 0.5}
   * @example
   * vector = {x = 2.3, y = 3.4}
   */
  export type Vector =
    | {
        x: double
        y: double
      }
    | readonly [double, double]
  /**
   * If this is specified as a three-element array then the array items are x, y and z, in that order.
   */
  export type Vector3D =
    | {
        x: float
        y: float
        z: float
      }
    | readonly [float, float, float]
  /**
   * @see AnimatedVector.rotations
   */
  export interface VectorRotation {
    /**
     * The size of all `frames` must be the same.
     */
    frames: readonly Vector[]
    render_layer?: RenderLayer
  }
  /**
   * ## Union members
   * - `"top"`
   * - `"center"`
   * - `"bottom"`
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
   */
  export type VirtualSignalID = string
  /**
   * Void energy sources provide unlimited free energy.
   * @example
   * energy_source = {type = "void"}
   */
  export interface VoidEnergySource extends BaseEnergySource {
    readonly type: "void"
  }
  /**
   * @see WallPrototype.pictures
   */
  export interface WallPictures {
    single: SpriteVariations
    straight_vertical: SpriteVariations
    straight_horizontal: SpriteVariations
    corner_right_down: SpriteVariations
    corner_left_down: SpriteVariations
    t_up: SpriteVariations
    ending_right: SpriteVariations
    ending_left: SpriteVariations
    filling?: SpriteVariations
    water_connection_patch?: Sprite4Way
    gate_connection_patch?: Sprite4Way
  }
  /**
   * Entity water reflection. {@linkplain https://forums.factorio.com/100703 Currently only renders} for {@link EntityWithHealthPrototype}.
   */
  export interface WaterReflectionDefinition {
    pictures?: SpriteVariations
    /**
     * **Default:** `false`
     */
    orientation_to_variation?: bool
    /**
     * **Default:** `false`
     */
    rotate?: bool
  }
  /**
   * Definition of a point where circuit network wires can be connected to an entity.
   */
  export interface WireConnectionPoint {
    wire: WirePosition
    shadow: WirePosition
  }
  /**
   * Used by {@link WireConnectionPoint}.
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
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  export interface WorkerRobotSpeedModifier extends SimpleModifier {
    readonly type: "worker-robot-speed"
    /**
     * **Default:** `true`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  export interface WorkerRobotStorageModifier extends SimpleModifier {
    readonly type: "worker-robot-storage"
    /**
     * **Default:** `true`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
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
   */
  export type WorkingSound =
    | {
        /**
         * The sound to be played when the entity is working.
         */
        sound: Sound
        /**
         * **Default:** `1`
         */
        apparent_volume?: float
        max_sounds_per_type?: uint8
        /**
         * **Default:** `false`
         */
        match_progress_to_activity?: bool
        /**
         * **Default:** `false`
         */
        match_volume_to_activity?: bool
        /**
         * **Default:** `false`
         */
        match_speed_to_activity?: bool
        /**
         * **Default:** `false`
         */
        persistent?: bool
        /**
         * **Default:** `true`
         */
        use_doppler_shift?: bool
        /**
         * **Default:** `1`
         *
         * Modifies how far a sound can be heard. Can only be 1 or lower, has to be a positive number.
         */
        audible_distance_modifier?: double
        /**
         * **Default:** `1`
         *
         * Modifies how often the sound is played.
         * @example
         * probability = 1 / (3 * 60) -- average pause between the sound is 3 seconds
         */
        probability?: double
        /**
         * **Default:** `0`
         *
         * Can't be used when `match_progress_to_activity` is true.
         */
        fade_in_ticks?: uint32
        /**
         * **Default:** `0`
         *
         * Can't be used when `match_progress_to_activity` is true.
         */
        fade_out_ticks?: uint32
        /**
         * The sound to be played when the entity is idle. Might not work with all entities that use working_sound.
         */
        idle_sound?: Sound
        /**
         * Might not work with all entities that use working_sound.
         */
        activate_sound?: Sound
        /**
         * Might not work with all entities that use working_sound.
         */
        deactivate_sound?: Sound
      }
    | Sound
  /**
   * Used by crafting machines to display different graphics when the machine is running.
   */
  export interface WorkingVisualisation {
    /**
     * **Default:** `"object"`
     */
    render_layer?: RenderLayer
    /**
     * **Default:** `false`
     */
    fadeout?: bool
    /**
     * **Default:** `false`
     */
    synced_fadeout?: bool
    /**
     * **Default:** `false`
     *
     * Whether the animations are always played at the same speed, not adjusted to the machine speed.
     */
    constant_speed?: bool
    /**
     * **Default:** `false`
     */
    always_draw?: bool
    /**
     * **Default:** `false`
     */
    animated_shift?: bool
    /**
     * **Default:** `false`
     */
    align_to_waypoint?: bool
    /**
     * Used to determine render order for sprites with the same `render_layer` in the same position. Sprites with a higher `secondary_draw_order` are drawn on top.
     */
    secondary_draw_order?: int8
    /**
     * **Default:** `true`
     */
    draw_as_sprite?: bool
    /**
     * **Default:** `false`
     */
    draw_as_light?: bool
    light?: LightDefinition
    effect?: "flicker" | "uranium-glow" | "none"
    /**
     * Used by {@link CraftingMachinePrototype}.
     */
    apply_recipe_tint?: "primary" | "secondary" | "tertiary" | "quaternary" | "none"
    /**
     * Used by {@link CraftingMachinePrototype} ("status" only) and {@link MiningDrillPrototype}.
     *
     * For "status" on CraftingMachine, the colors are specified via {@link CraftingMachinePrototype#status_colors CraftingMachinePrototype::status_colors}. For "status" on MiningDrill, the colors are specified via {@link MiningDrillGraphicsSet#status_colors MiningDrillGraphicsSet::status_colors}. For "resource-color", the colors are specified via {@link ResourceEntityPrototype#mining_visualisation_tint ResourceEntityPrototype::mining_visualisation_tint}.
     */
    apply_tint?: "resource-color" | "input-fluid-base-color" | "input-fluid-flow-color" | "status" | "none"
    /**
     * Only loaded if `animation` is not defined.
     */
    north_animation?: Animation
    /**
     * Only loaded if `animation` is not defined.
     */
    west_animation?: Animation
    /**
     * Only loaded if `animation` is not defined.
     */
    south_animation?: Animation
    /**
     * Only loaded if `animation` is not defined.
     */
    east_animation?: Animation
    animation?: Animation
    north_position?: Vector
    west_position?: Vector
    south_position?: Vector
    east_position?: Vector
  }
  export interface ZoomToWorldBlueprintEnabledModifier extends BoolModifier {
    readonly type: "zoom-to-world-blueprint-enabled"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  export interface ZoomToWorldDeconstructionPlannerEnabledModifier extends BoolModifier {
    readonly type: "zoom-to-world-deconstruction-planner-enabled"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  export interface ZoomToWorldEnabledModifier extends BoolModifier {
    readonly type: "zoom-to-world-enabled"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  export interface ZoomToWorldGhostBuildingEnabledModifier extends BoolModifier {
    readonly type: "zoom-to-world-ghost-building-enabled"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  export interface ZoomToWorldSelectionToolEnabledModifier extends BoolModifier {
    readonly type: "zoom-to-world-selection-tool-enabled"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  export interface ZoomToWorldUpgradePlannerEnabledModifier extends BoolModifier {
    readonly type: "zoom-to-world-upgrade-planner-enabled"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
  }
  /**
   * A variable type which can have one of two values: `true` or `false`. Wikipedia has a {@linkplain https://en.wikipedia.org/wiki/Boolean comprehensive article} on Booleans.
   *
   * Booleans used in prototypes can also be be defined by other variable types which are then coerced to boolean values by the game. This type coercion differs from the {@linkplain https://www.lua.org/manual/5.2/manual.html#2.1 standard Lua truthy/falsy} coercion.
   *
   * It is recommended to only use `true` and `false`.
   *
   * ![](https://lua-api.factorio.com/latest/static/images/bool_coercion.png)
   */
  export type bool = boolean
  /**
   * Format uses a dot as its decimal delimiter. Doubles are stored in the {@linkplain http://en.wikipedia.org/wiki/Double-precision_floating-point_format double precision} floating point format.
   *
   * May not be {@linkplain https://en.wikipedia.org/wiki/NaN NaN}.
   * @example
   * 7.5
   * 6
   */
  export type double = number
  /**
   * Format uses a dot as its decimal delimiter. Floats are stored in the {@linkplain https://en.wikipedia.org/wiki/Single-precision_floating-point_format single precision} floating point format.
   *
   * May not be {@linkplain https://en.wikipedia.org/wiki/NaN NaN}.
   * @example
   * 7.5
   * 6
   */
  export type float = number
  /**
   * 16 bit signed integer. Ranges from `-32 768` to `32 767`, or `[-2^15, 2^15-1]`.
   */
  export type int16 = number
  /**
   * 32 bit signed integer. Ranges from `-2 147 483 648` to `2 147 483 647`, or `[-2^31, 2^31-1]`.
   */
  export type int32 = number
  /**
   * 8 bit signed integer. Ranges from `-128` to `127`, or `[-2^7, 2^7-1]`.
   */
  export type int8 = number
  /**
   * 16 bit unsigned integer. Ranges from `0` to `65 535`, or `[0, 2^16-1]`.
   */
  export type uint16 = number
  /**
   * 32 bit unsigned integer. Ranges from `0` to `4 294 967 295`, or `[0, 2^32-1]`.
   */
  export type uint32 = number
  /**
   * 64 bit unsigned integer.
   */
  export type uint64 = number
  /**
   * 8 bit unsigned integer. Ranges from `0` to `255`, or `[0, 2^8-1]`.
   */
  export type uint8 = number
}
