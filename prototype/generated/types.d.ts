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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ActivateEquipmentCapsuleAction.html#equipment Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/MapGenPreset.html#advanced_settings Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AggregationSpecification.html#progress_threshold Online documentation}
     */
    progress_threshold?: float
    remove: bool
    /**
     * **Default:** `false`
     *
     * If `true`, already playing sounds are taken into account when checking `max_count`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AggregationSpecification.html#count_already_playing Online documentation}
     */
    count_already_playing?: bool
  }
  /**
   * The name of an {@link AmmoCategory}.
   * @example
   * "bullet"
   * @example
   * "melee"
   * @see {@link https://lua-api.factorio.com/1.1.110/types/AmmoCategoryID.html Online documentation}
   */
  export type AmmoCategoryID = string
  export interface AmmoDamageModifier extends BaseModifier {
    readonly type: "ammo-damage"
    /**
     * **Default:** `true`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AmmoDamageModifier.html#infer_icon Online documentation}
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AmmoDamageModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
    /**
     * Name of the {@link AmmoCategory} that is affected.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AmmoDamageModifier.html#ammo_category Online documentation}
     */
    ammo_category: AmmoCategoryID
    /**
     * Modification value, which will be added to the current ammo damage modifier upon researching.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AmmoDamageModifier.html#modifier Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/AmmoSourceType.html Online documentation}
   */
  export type AmmoSourceType = "default" | "player" | "turret" | "vehicle"
  /**
   * Definition of actual parameters used in attack.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/AmmoType.html Online documentation}
   */
  export interface AmmoType {
    /**
     * Name of a {@link AmmoCategory}. Defines whether the attack will be affected by upgrades.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AmmoType.html#category Online documentation}
     */
    category: AmmoCategoryID
    /**
     * Describes actions taken upon attack happening.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AmmoType.html#action Online documentation}
     */
    action?: Trigger
    /**
     * **Default:** `false`
     *
     * When true, the gun will be able to shoot even when the target is out of range. Only applies when `target_type` equals `"position"`. The gun will fire at the maximum range in the direction of the target position.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AmmoType.html#clamp_position Online documentation}
     */
    clamp_position?: bool
    /**
     * Energy consumption of a single shot, if applicable.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AmmoType.html#energy_consumption Online documentation}
     */
    energy_consumption?: Energy
    /**
     * **Default:** `1`
     *
     * Affects the `range` value of the shooting gun prototype's {@link BaseAttackParameters} to give a modified maximum range. The `min_range` value of the gun is unaffected.
     *
     * This has no effect on artillery turrets and wagons even though the bonus appears in the GUI. {@linkplain https://forums.factorio.com/103658 Forum thread}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AmmoType.html#range_modifier Online documentation}
     */
    range_modifier?: double
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AmmoType.html#cooldown_modifier Online documentation}
     */
    cooldown_modifier?: double
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AmmoType.html#consumption_modifier Online documentation}
     */
    consumption_modifier?: float
    /**
     * **Default:** `"entity"`
     *
     * `"entity"` fires at an entity, `"position"` fires directly at a position, `"direction"` fires in a direction.
     *
     * If this is `"entity"`, `clamp_position` is forced to be `false`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AmmoType.html#target_type Online documentation}
     */
    target_type?: "entity" | "position" | "direction"
    /**
     * Only exists (and is then mandatory) if the {@link AmmoItemPrototype#ammo_type AmmoItemPrototype::ammo_type} this AmmoType is defined on has multiple ammo types.
     *
     * Defines for which kind of entity this ammo type applies. Each entity kind can only be used once per array.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AmmoType.html#source_type Online documentation}
     */
    source_type?: AmmoSourceType
  }
  export interface AndTipTrigger {
    readonly type: "and"
    /**
     * If all of the triggers are fulfilled, this trigger is considered fulfilled.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AndTipTrigger.html#triggers Online documentation}
     */
    triggers: readonly TipTrigger[]
  }
  export interface AnimatedVector {
    /**
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AnimatedVector.html#rotations Online documentation}
     */
    rotations: readonly VectorRotation[]
    /**
     * Default render layer for the rotations.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AnimatedVector.html#render_layer Online documentation}
     */
    render_layer?: RenderLayer
    /**
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AnimatedVector.html#direction_shift Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/Animation.html Online documentation}
   */
  export interface Animation extends Omit<AnimationParameters, "filename"> {
    /**
     * If this property is present, all Animation definitions have to be placed as entries in the array, and they will all be loaded from there. `layers` may not be an empty table. Each definition in the array may also have the `layers` property.
     *
     * `animation_speed` and `max_advance` of the first layer are used for all layers. All layers will run at the same speed.
     *
     * If this property is present, all other properties, including those inherited from AnimationParameters, are ignored.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/Animation.html#layers Online documentation}
     */
    layers?: readonly Animation[]
    /**
     * Only loaded if `layers` is not defined. Mandatory if `stripes` is not defined.
     *
     * The path to the sprite file to use.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/Animation.html#filename Online documentation}
     */
    filename?: FileName
    /**
     * Only loaded if `layers` is not defined.
     *
     * If this property exists and high resolution sprites are turned on, this is used to load the Animation.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/Animation.html#hr_version Online documentation}
     */
    hr_version?: Animation
    /**
     * Only loaded if `layers` is not defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/Animation.html#stripes Online documentation}
     */
    stripes?: readonly Stripe[]
  }
  /**
   * If this is loaded as a single Animation, it applies to all directions.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/Animation4Way.html Online documentation}
   */
  export type Animation4Way =
    | {
        north: Animation
        /**
         * Defaults to the north animation.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/Animation4Way.html#east Online documentation}
         */
        east?: Animation
        /**
         * Defaults to the north animation.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/Animation4Way.html#south Online documentation}
         */
        south?: Animation
        /**
         * Defaults to the east animation.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/Animation4Way.html#west Online documentation}
         */
        west?: Animation
      }
    | Animation
  export interface AnimationElement {
    /**
     * **Default:** `"object"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AnimationElement.html#render_layer Online documentation}
     */
    render_layer?: RenderLayer
    /**
     * Used to determine render order for sprites with the same `render_layer` in the same position. Sprites with a higher `secondary_draw_order` are drawn on top.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AnimationElement.html#secondary_draw_order Online documentation}
     */
    secondary_draw_order?: int8
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AnimationElement.html#draw_as_sprite Online documentation}
     */
    draw_as_sprite?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AnimationElement.html#draw_as_light Online documentation}
     */
    draw_as_light?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AnimationElement.html#apply_tint Online documentation}
     */
    apply_tint?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AnimationElement.html#always_draw Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/AnimationFrameSequence.html Online documentation}
   */
  export type AnimationFrameSequence = readonly uint16[]
  export interface AnimationParameters extends SpriteParameters {
    /**
     * The width and height of one frame. If this is a tuple, the first member of the tuple is the width and the second is the height. Otherwise the size is both width and height. Width and height may only be in the range of 0-8192.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AnimationParameters.html#size Online documentation}
     */
    size?: SpriteSizeType | readonly [SpriteSizeType, SpriteSizeType]
    /**
     * Mandatory if `size` is not defined.
     *
     * Width of one frame in pixels, from 0-8192.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AnimationParameters.html#width Online documentation}
     */
    width?: SpriteSizeType
    /**
     * Mandatory if `size` is not defined.
     *
     * Height of one frame in pixels, from 0-8192.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AnimationParameters.html#height Online documentation}
     */
    height?: SpriteSizeType
    /**
     * **Default:** `"forward"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AnimationParameters.html#run_mode Online documentation}
     */
    run_mode?: "forward" | "backward" | "forward-then-backward"
    /**
     * **Default:** `1`
     *
     * Can't be `0`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AnimationParameters.html#frame_count Online documentation}
     */
    frame_count?: uint32
    /**
     * **Default:** `0`
     *
     * Specifies how many pictures are on each horizontal line in the image file. `0` means that all the pictures are in one horizontal line. Once the specified number of pictures are loaded from a line, the pictures from the next line are loaded. This is to allow having longer animations loaded in to Factorio's graphics matrix than the game engine's width limit of 8192px per input file. The restriction on input files is to be compatible with most graphics cards.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AnimationParameters.html#line_length Online documentation}
     */
    line_length?: uint32
    /**
     * **Default:** `1`
     *
     * Modifier of the animation playing speed, the default of `1` means one animation frame per tick (60 fps). The speed of playing can often vary depending on the usage (output of steam engine for example). Has to be greater than `0`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AnimationParameters.html#animation_speed Online documentation}
     */
    animation_speed?: float
    /**
     * **Default:** `MAX_FLOAT`
     *
     * Maximum amount of frames the animation can move forward in one update. Useful to cap the animation speed on entities where it is variable, such as car animations.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AnimationParameters.html#max_advance Online documentation}
     */
    max_advance?: float
    /**
     * **Default:** `1`
     *
     * How many times to repeat the animation to complete an animation cycle. E.g. if one layer is 10 frames, a second layer of 1 frame would need `repeat_count = 10` to match the complete cycle.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AnimationParameters.html#repeat_count Online documentation}
     */
    repeat_count?: uint8
    /**
     * Number of slices this is sliced into when using the "optimized atlas packing" option. If you are a modder, you can just ignore this property. Example: If this is 4, the sprite will be sliced into a 4×4 grid.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AnimationParameters.html#dice Online documentation}
     */
    dice?: uint8
    /**
     * Same as `dice` above, but this specifies only how many slices there are on the x axis.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AnimationParameters.html#dice_x Online documentation}
     */
    dice_x?: uint8
    /**
     * Same as `dice` above, but this specifies only how many slices there are on the y axis.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AnimationParameters.html#dice_y Online documentation}
     */
    dice_y?: uint8
    frame_sequence?: AnimationFrameSequence
    /**
     * **Default:** `0`
     *
     * Only loaded if this is an icon, that is it has the flag `"group=icon"` or `"group=gui"`.
     *
     * Note that `mipmap_count` doesn't make sense in an animation, as it is not possible to layout mipmaps in a way that would load both the animation and the mipmaps correctly (besides animations with just one frame). See {@linkplain https://forums.factorio.com/viewtopic.php?p=549058#p549058 here}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AnimationParameters.html#mipmap_count Online documentation}
     */
    mipmap_count?: uint8
    /**
     * **Default:** `false`
     *
     * Unused.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AnimationParameters.html#generate_sdf Online documentation}
     */
    generate_sdf?: bool
  }
  export interface AnimationSheet extends AnimationParameters {
    /**
     * If this property exists and high resolution sprites are turned on, this is used to load the AnimationSheet.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AnimationSheet.html#hr_version Online documentation}
     */
    hr_version?: AnimationSheet
    variation_count: uint32
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AnimationSheet.html#frame_count Online documentation}
     */
    frame_count?: uint32
    /**
     * **Default:** `Value of `variation_count``
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AnimationSheet.html#line_length Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/AnimationVariations.html Online documentation}
   */
  export type AnimationVariations =
    | {
        /**
         * The variations are arranged vertically in the file, one row for each variation.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/AnimationVariations.html#sheet Online documentation}
         */
        sheet?: AnimationSheet
        /**
         * Only loaded if `sheet` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/AnimationVariations.html#sheets Online documentation}
         */
        sheets?: readonly AnimationSheet[]
      }
    | Animation
    | readonly Animation[]
  /**
   * A union of all prototypes. A specific prototype is loaded based on the value of the `type` key.
   *
   * See the {@linkplain https://lua-api.factorio.com/1.1.110/prototypes.html Prototypes page} for more information.
   *
   * ## Union members
   * - {@link AccumulatorPrototype}: `'accumulator'`
   * - {@link AchievementPrototype}: `'achievement'`
   * - {@link ActiveDefenseEquipmentPrototype}: `'active-defense-equipment'`
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
   * - {@link CapsulePrototype}: `'capsule'`
   * - {@link CarPrototype}: `'car'`
   * - {@link CargoWagonPrototype}: `'cargo-wagon'`
   * - {@link CharacterCorpsePrototype}: `'character-corpse'`
   * - {@link CharacterPrototype}: `'character'`
   * - {@link CliffPrototype}: `'cliff'`
   * - {@link CombatRobotCountAchievementPrototype}: `'combat-robot-count'`
   * - {@link CombatRobotPrototype}: `'combat-robot'`
   * - {@link ConstantCombinatorPrototype}: `'constant-combinator'`
   * - {@link ConstructWithRobotsAchievementPrototype}: `'construct-with-robots-achievement'`
   * - {@link ConstructionRobotPrototype}: `'construction-robot'`
   * - {@link ContainerPrototype}: `'container'`
   * - {@link CopyPasteToolPrototype}: `'copy-paste-tool'`
   * - {@link CorpsePrototype}: `'corpse'`
   * - {@link CurvedRailPrototype}: `'curved-rail'`
   * - {@link CustomInputPrototype}: `'custom-input'`
   * - {@link DamageType}: `'damage-type'`
   * - {@link DeciderCombinatorPrototype}: `'decider-combinator'`
   * - {@link DeconstructWithRobotsAchievementPrototype}: `'deconstruct-with-robots-achievement'`
   * - {@link DeconstructibleTileProxyPrototype}: `'deconstructible-tile-proxy'`
   * - {@link DeconstructionItemPrototype}: `'deconstruction-item'`
   * - {@link DecorativePrototype}: `'optimized-decorative'`
   * - {@link DeliverByRobotsAchievementPrototype}: `'deliver-by-robots-achievement'`
   * - {@link DontBuildEntityAchievementPrototype}: `'dont-build-entity-achievement'`
   * - {@link DontCraftManuallyAchievementPrototype}: `'dont-craft-manually-achievement'`
   * - {@link DontUseEntityInEnergyProductionAchievementPrototype}: `'dont-use-entity-in-energy-production-achievement'`
   * - {@link EditorControllerPrototype}: `'editor-controller'`
   * - {@link ElectricEnergyInterfacePrototype}: `'electric-energy-interface'`
   * - {@link ElectricPolePrototype}: `'electric-pole'`
   * - {@link ElectricTurretPrototype}: `'electric-turret'`
   * - {@link EnemySpawnerPrototype}: `'unit-spawner'`
   * - {@link EnergyShieldEquipmentPrototype}: `'energy-shield-equipment'`
   * - {@link EntityGhostPrototype}: `'entity-ghost'`
   * - {@link EntityParticlePrototype}: `'particle'`
   * - {@link EquipmentCategory}: `'equipment-category'`
   * - {@link EquipmentGridPrototype}: `'equipment-grid'`
   * - {@link ExplosionPrototype}: `'explosion'`
   * - {@link FinishTheGameAchievementPrototype}: `'finish-the-game-achievement'`
   * - {@link FireFlamePrototype}: `'fire'`
   * - {@link FishPrototype}: `'fish'`
   * - {@link FlameThrowerExplosionPrototype}: `'flame-thrower-explosion'`
   * - {@link FluidPrototype}: `'fluid'`
   * - {@link FluidStreamPrototype}: `'stream'`
   * - {@link FluidTurretPrototype}: `'fluid-turret'`
   * - {@link FluidWagonPrototype}: `'fluid-wagon'`
   * - {@link FlyingTextPrototype}: `'flying-text'`
   * - {@link FontPrototype}: `'font'`
   * - {@link FuelCategory}: `'fuel-category'`
   * - {@link FurnacePrototype}: `'furnace'`
   * - {@link GatePrototype}: `'gate'`
   * - {@link GeneratorEquipmentPrototype}: `'generator-equipment'`
   * - {@link GeneratorPrototype}: `'generator'`
   * - {@link GodControllerPrototype}: `'god-controller'`
   * - {@link GroupAttackAchievementPrototype}: `'group-attack-achievement'`
   * - {@link GuiStyle}: `'gui-style'`
   * - {@link GunPrototype}: `'gun'`
   * - {@link HeatInterfacePrototype}: `'heat-interface'`
   * - {@link HeatPipePrototype}: `'heat-pipe'`
   * - {@link HighlightBoxEntityPrototype}: `'highlight-box'`
   * - {@link InfinityContainerPrototype}: `'infinity-container'`
   * - {@link InfinityPipePrototype}: `'infinity-pipe'`
   * - {@link InserterPrototype}: `'inserter'`
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
   * - {@link LeafParticlePrototype}: `'leaf-particle'`
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
   * - {@link MiningToolPrototype}: `'mining-tool'`
   * - {@link ModuleCategory}: `'module-category'`
   * - {@link ModulePrototype}: `'module'`
   * - {@link MouseCursor}: `'mouse-cursor'`
   * - {@link MovementBonusEquipmentPrototype}: `'movement-bonus-equipment'`
   * - {@link NamedNoiseExpression}: `'noise-expression'`
   * - {@link NightVisionEquipmentPrototype}: `'night-vision-equipment'`
   * - {@link NoiseLayer}: `'noise-layer'`
   * - {@link OffshorePumpPrototype}: `'offshore-pump'`
   * - {@link ParticlePrototype}: `'optimized-particle'`
   * - {@link ParticleSourcePrototype}: `'particle-source'`
   * - {@link PipePrototype}: `'pipe'`
   * - {@link PipeToGroundPrototype}: `'pipe-to-ground'`
   * - {@link PlayerDamagedAchievementPrototype}: `'player-damaged-achievement'`
   * - {@link PlayerPortPrototype}: `'player-port'`
   * - {@link PowerSwitchPrototype}: `'power-switch'`
   * - {@link ProduceAchievementPrototype}: `'produce-achievement'`
   * - {@link ProducePerHourAchievementPrototype}: `'produce-per-hour-achievement'`
   * - {@link ProgrammableSpeakerPrototype}: `'programmable-speaker'`
   * - {@link ProjectilePrototype}: `'projectile'`
   * - {@link PumpPrototype}: `'pump'`
   * - {@link RadarPrototype}: `'radar'`
   * - {@link RailChainSignalPrototype}: `'rail-chain-signal'`
   * - {@link RailPlannerPrototype}: `'rail-planner'`
   * - {@link RailRemnantsPrototype}: `'rail-remnants'`
   * - {@link RailSignalPrototype}: `'rail-signal'`
   * - {@link ReactorPrototype}: `'reactor'`
   * - {@link RecipeCategory}: `'recipe-category'`
   * - {@link RecipePrototype}: `'recipe'`
   * - {@link RepairToolPrototype}: `'repair-tool'`
   * - {@link ResearchAchievementPrototype}: `'research-achievement'`
   * - {@link ResourceCategory}: `'resource-category'`
   * - {@link ResourceEntityPrototype}: `'resource'`
   * - {@link RoboportEquipmentPrototype}: `'roboport-equipment'`
   * - {@link RoboportPrototype}: `'roboport'`
   * - {@link RocketSiloPrototype}: `'rocket-silo'`
   * - {@link RocketSiloRocketPrototype}: `'rocket-silo-rocket'`
   * - {@link RocketSiloRocketShadowPrototype}: `'rocket-silo-rocket-shadow'`
   * - {@link SelectionToolPrototype}: `'selection-tool'`
   * - {@link ShortcutPrototype}: `'shortcut'`
   * - {@link SimpleEntityPrototype}: `'simple-entity'`
   * - {@link SimpleEntityWithForcePrototype}: `'simple-entity-with-force'`
   * - {@link SimpleEntityWithOwnerPrototype}: `'simple-entity-with-owner'`
   * - {@link SimpleSmokePrototype}: `'smoke'`
   * - {@link SmokeWithTriggerPrototype}: `'smoke-with-trigger'`
   * - {@link SolarPanelEquipmentPrototype}: `'solar-panel-equipment'`
   * - {@link SolarPanelPrototype}: `'solar-panel'`
   * - {@link SoundPrototype}: `'sound'`
   * - {@link SpectatorControllerPrototype}: `'spectator-controller'`
   * - {@link SpeechBubblePrototype}: `'speech-bubble'`
   * - {@link SpiderLegPrototype}: `'spider-leg'`
   * - {@link SpiderVehiclePrototype}: `'spider-vehicle'`
   * - {@link SpidertronRemotePrototype}: `'spidertron-remote'`
   * - {@link SplitterPrototype}: `'splitter'`
   * - {@link SpritePrototype}: `'sprite'`
   * - {@link StickerPrototype}: `'sticker'`
   * - {@link StorageTankPrototype}: `'storage-tank'`
   * - {@link StraightRailPrototype}: `'straight-rail'`
   * - {@link TechnologyPrototype}: `'technology'`
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
   * - {@link UtilityConstants}: `'utility-constants'`
   * - {@link UtilitySounds}: `'utility-sounds'`
   * - {@link UtilitySprites}: `'utility-sprites'`
   * - {@link VirtualSignalPrototype}: `'virtual-signal'`
   * - {@link WallPrototype}: `'wall'`
   * - {@link WindSound}: `'wind-sound'`
   * @see {@link https://lua-api.factorio.com/1.1.110/types/AnyPrototype.html Online documentation}
   */
  export type AnyPrototype =
    | AccumulatorPrototype
    | AchievementPrototype
    | ActiveDefenseEquipmentPrototype
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
    | CapsulePrototype
    | CarPrototype
    | CargoWagonPrototype
    | CharacterCorpsePrototype
    | CharacterPrototype
    | CliffPrototype
    | CombatRobotCountAchievementPrototype
    | CombatRobotPrototype
    | ConstantCombinatorPrototype
    | ConstructWithRobotsAchievementPrototype
    | ConstructionRobotPrototype
    | ContainerPrototype
    | CopyPasteToolPrototype
    | CorpsePrototype
    | CurvedRailPrototype
    | CustomInputPrototype
    | DamageType
    | DeciderCombinatorPrototype
    | DeconstructWithRobotsAchievementPrototype
    | DeconstructibleTileProxyPrototype
    | DeconstructionItemPrototype
    | DecorativePrototype
    | DeliverByRobotsAchievementPrototype
    | DontBuildEntityAchievementPrototype
    | DontCraftManuallyAchievementPrototype
    | DontUseEntityInEnergyProductionAchievementPrototype
    | EditorControllerPrototype
    | ElectricEnergyInterfacePrototype
    | ElectricPolePrototype
    | ElectricTurretPrototype
    | EnemySpawnerPrototype
    | EnergyShieldEquipmentPrototype
    | EntityGhostPrototype
    | EntityParticlePrototype
    | EquipmentCategory
    | EquipmentGridPrototype
    | ExplosionPrototype
    | FinishTheGameAchievementPrototype
    | FireFlamePrototype
    | FishPrototype
    | FlameThrowerExplosionPrototype
    | FluidPrototype
    | FluidStreamPrototype
    | FluidTurretPrototype
    | FluidWagonPrototype
    | FlyingTextPrototype
    | FontPrototype
    | FuelCategory
    | FurnacePrototype
    | GatePrototype
    | GeneratorEquipmentPrototype
    | GeneratorPrototype
    | GodControllerPrototype
    | GroupAttackAchievementPrototype
    | GuiStyle
    | GunPrototype
    | HeatInterfacePrototype
    | HeatPipePrototype
    | HighlightBoxEntityPrototype
    | InfinityContainerPrototype
    | InfinityPipePrototype
    | InserterPrototype
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
    | LeafParticlePrototype
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
    | MiningToolPrototype
    | ModuleCategory
    | ModulePrototype
    | MouseCursor
    | MovementBonusEquipmentPrototype
    | NamedNoiseExpression
    | NightVisionEquipmentPrototype
    | NoiseLayer
    | OffshorePumpPrototype
    | ParticlePrototype
    | ParticleSourcePrototype
    | PipePrototype
    | PipeToGroundPrototype
    | PlayerDamagedAchievementPrototype
    | PlayerPortPrototype
    | PowerSwitchPrototype
    | ProduceAchievementPrototype
    | ProducePerHourAchievementPrototype
    | ProgrammableSpeakerPrototype
    | ProjectilePrototype
    | PumpPrototype
    | RadarPrototype
    | RailChainSignalPrototype
    | RailPlannerPrototype
    | RailRemnantsPrototype
    | RailSignalPrototype
    | ReactorPrototype
    | RecipeCategory
    | RecipePrototype
    | RepairToolPrototype
    | ResearchAchievementPrototype
    | ResourceCategory
    | ResourceEntityPrototype
    | RoboportEquipmentPrototype
    | RoboportPrototype
    | RocketSiloPrototype
    | RocketSiloRocketPrototype
    | RocketSiloRocketShadowPrototype
    | SelectionToolPrototype
    | ShortcutPrototype
    | SimpleEntityPrototype
    | SimpleEntityWithForcePrototype
    | SimpleEntityWithOwnerPrototype
    | SimpleSmokePrototype
    | SmokeWithTriggerPrototype
    | SolarPanelEquipmentPrototype
    | SolarPanelPrototype
    | SoundPrototype
    | SpectatorControllerPrototype
    | SpeechBubblePrototype
    | SpiderLegPrototype
    | SpiderVehiclePrototype
    | SpidertronRemotePrototype
    | SplitterPrototype
    | SpritePrototype
    | StickerPrototype
    | StorageTankPrototype
    | StraightRailPrototype
    | TechnologyPrototype
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
    | UtilityConstants
    | UtilitySounds
    | UtilitySprites
    | VirtualSignalPrototype
    | WallPrototype
    | WindSound
  export interface AreaTriggerItem extends TriggerItem {
    readonly type: "area"
    radius: double
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AreaTriggerItem.html#trigger_from_target Online documentation}
     */
    trigger_from_target?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AreaTriggerItem.html#target_entities Online documentation}
     */
    target_entities?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AreaTriggerItem.html#show_in_tooltip Online documentation}
     */
    show_in_tooltip?: bool
    /**
     * **Default:** `"distance-from-collision-box"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AreaTriggerItem.html#collision_mode Online documentation}
     */
    collision_mode?: "distance-from-collision-box" | "distance-from-center"
  }
  export interface ArtilleryRangeModifier extends SimpleModifier {
    readonly type: "artillery-range"
    /**
     * **Default:** `false`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ArtilleryRangeModifier.html#infer_icon Online documentation}
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ArtilleryRangeModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface ArtilleryRemoteCapsuleAction {
    readonly type: "artillery-remote"
    /**
     * Name of an {@link ArtilleryFlarePrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ArtilleryRemoteCapsuleAction.html#flare Online documentation}
     */
    flare: EntityID
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ArtilleryRemoteCapsuleAction.html#play_sound_on_failure Online documentation}
     */
    play_sound_on_failure?: bool
  }
  export interface ArtilleryTriggerDelivery extends TriggerDeliveryItem {
    readonly type: "artillery"
    /**
     * Name of a {@link ArtilleryProjectilePrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ArtilleryTriggerDelivery.html#projectile Online documentation}
     */
    projectile: EntityID
    starting_speed: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ArtilleryTriggerDelivery.html#starting_speed_deviation Online documentation}
     */
    starting_speed_deviation?: float
    /**
     * **Default:** `0`
     *
     * Maximum deviation of the projectile from source orientation, in +/- (`x radians / 2`). Example: `3.14 radians -> +/- (180° / 2)`, meaning up to 90° deviation in either direction of rotation.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ArtilleryTriggerDelivery.html#direction_deviation Online documentation}
     */
    direction_deviation?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ArtilleryTriggerDelivery.html#range_deviation Online documentation}
     */
    range_deviation?: float
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ArtilleryTriggerDelivery.html#trigger_fired_artillery Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/AttackParameters.html Online documentation}
   */
  export type AttackParameters = ProjectileAttackParameters | BeamAttackParameters | StreamAttackParameters
  export interface AttackReactionItem {
    range: float
    action?: Trigger
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AttackReactionItem.html#reaction_modifier Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplaceControlID.html Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#influence Online documentation}
     */
    influence?: double
    /**
     * **Default:** `min double`
     *
     * Minimal influence (after all calculations) of current peak. See `influence`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#min_influence Online documentation}
     */
    min_influence?: double
    /**
     * **Default:** `max double`
     *
     * Maximal influence (after all calculations) of current peak. See `influence`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#max_influence Online documentation}
     */
    max_influence?: double
    /**
     * **Default:** `0`
     *
     * Bonus for influence multiplier when calculating richness. See `influence`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#richness_influence Online documentation}
     */
    richness_influence?: double
    /**
     * **Default:** `""`
     *
     * Name of {@link NoiseLayer} to use for this peak. If empty, then no noise is added to this peak.
     *
     * A peak may have a noise multiplied with its influence. Intended use is to have noise layers separate for different types of objects that might appear (trees-12 vs enemy-base).
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#noise_layer Online documentation}
     */
    noise_layer?: NoiseLayerID
    /**
     * **Default:** `0.5`
     *
     * Must be between 0 and 1. Persistence of the noise.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#noise_persistence Online documentation}
     */
    noise_persistence?: double
    /**
     * **Default:** `0`
     *
     * Difference between number of octaves of the world and of the noise.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#noise_octaves_difference Online documentation}
     */
    noise_octaves_difference?: double
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#noise_scale Online documentation}
     */
    noise_scale?: double
    /**
     * Optimal value of starting_area_weight. If starting_area_weight is close to this value, peak influence is 1.
     *
     * starting_area_weight corresponds to the `starting_area_weight` {@link BaseNamedNoiseExpressions noise expression}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#starting_area_weight_optimal Online documentation}
     */
    starting_area_weight_optimal?: double
    /**
     * **Default:** `0`
     *
     * Distance from the optimal parameters that is still considered optimal.
     *
     * Only loaded if `starting_area_weight_optimal` is defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#starting_area_weight_range Online documentation}
     */
    starting_area_weight_range?: double
    /**
     * Distance from the optimal parameters that get influence of -1.
     *
     * Only loaded if `starting_area_weight_optimal` is defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#starting_area_weight_max_range Online documentation}
     */
    starting_area_weight_max_range?: double
    /**
     * **Default:** `max double`
     *
     * Limit distance from the optimum on a single (positive) side. This is pure magic.
     *
     * Only loaded if `starting_area_weight_optimal` is defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#starting_area_weight_top_property_limit Online documentation}
     */
    starting_area_weight_top_property_limit?: double
    /**
     * Optimal value of elevation. If elevation is close to this value, peak influence is 1.
     *
     * elevation corresponds to the `elevation` {@link BaseNamedNoiseExpressions noise expression}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#elevation_optimal Online documentation}
     */
    elevation_optimal?: double
    /**
     * **Default:** `0`
     *
     * Distance from the optimal parameters that is still considered optimal.
     *
     * Only loaded if `elevation_optimal` is defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#elevation_range Online documentation}
     */
    elevation_range?: double
    /**
     * Distance from the optimal parameters that get influence of -1.
     *
     * Only loaded if `elevation_optimal` is defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#elevation_max_range Online documentation}
     */
    elevation_max_range?: double
    /**
     * **Default:** `max double`
     *
     * Limit distance from the optimum on a single (positive) side. This is pure magic.
     *
     * Only loaded if `elevation_optimal` is defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#elevation_top_property_limit Online documentation}
     */
    elevation_top_property_limit?: double
    /**
     * Optimal value of water. If water is close to this value, peak influence is 1.
     *
     * water corresponds to the `moisture` {@link BaseNamedNoiseExpressions noise expression}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#water_optimal Online documentation}
     */
    water_optimal?: double
    /**
     * **Default:** `0`
     *
     * Distance from the optimal parameters that is still considered optimal.
     *
     * Only loaded if `water_optimal` is defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#water_range Online documentation}
     */
    water_range?: double
    /**
     * Distance from the optimal parameters that get influence of -1.
     *
     * Only loaded if `water_optimal` is defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#water_max_range Online documentation}
     */
    water_max_range?: double
    /**
     * **Default:** `max double`
     *
     * Limit distance from the optimum on a single (positive) side. This is pure magic.
     *
     * Only loaded if `water_optimal` is defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#water_top_property_limit Online documentation}
     */
    water_top_property_limit?: double
    /**
     * Optimal value of temperature. If temperature is close to this value, peak influence is 1.
     *
     * temperature corresponds to the `temperature` {@link BaseNamedNoiseExpressions noise expression}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#temperature_optimal Online documentation}
     */
    temperature_optimal?: double
    /**
     * **Default:** `0`
     *
     * Distance from the optimal parameters that is still considered optimal.
     *
     * Only loaded if `temperature_optimal` is defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#temperature_range Online documentation}
     */
    temperature_range?: double
    /**
     * Distance from the optimal parameters that get influence of -1.
     *
     * Only loaded if `temperature_optimal` is defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#temperature_max_range Online documentation}
     */
    temperature_max_range?: double
    /**
     * **Default:** `max double`
     *
     * Limit distance from the optimum on a single (positive) side. This is pure magic.
     *
     * Only loaded if `temperature_optimal` is defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#temperature_top_property_limit Online documentation}
     */
    temperature_top_property_limit?: double
    /**
     * Optimal value of aux. If aux is close to this value, peak influence is 1.
     *
     * aux corresponds to the `aux` {@link BaseNamedNoiseExpressions noise expression}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#aux_optimal Online documentation}
     */
    aux_optimal?: double
    /**
     * **Default:** `0`
     *
     * Distance from the optimal parameters that is still considered optimal.
     *
     * Only loaded if `aux_optimal` is defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#aux_range Online documentation}
     */
    aux_range?: double
    /**
     * Distance from the optimal parameters that get influence of -1.
     *
     * Only loaded if `aux_optimal` is defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#aux_max_range Online documentation}
     */
    aux_max_range?: double
    /**
     * **Default:** `max double`
     *
     * Limit distance from the optimum on a single (positive) side. This is pure magic.
     *
     * Only loaded if `aux_optimal` is defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#aux_top_property_limit Online documentation}
     */
    aux_top_property_limit?: double
    /**
     * Optimal value of tier_from_start. If tier_from_start is close to this value, peak influence is 1.
     *
     * tier_from_start corresponds to the `tier_from_start` {@link BaseNamedNoiseExpressions noise expression}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#tier_from_start_optimal Online documentation}
     */
    tier_from_start_optimal?: double
    /**
     * **Default:** `0`
     *
     * Distance from the optimal parameters that is still considered optimal.
     *
     * Only loaded if `tier_from_start_optimal` is defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#tier_from_start_range Online documentation}
     */
    tier_from_start_range?: double
    /**
     * Distance from the optimal parameters that get influence of -1.
     *
     * Only loaded if `tier_from_start_optimal` is defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#tier_from_start_max_range Online documentation}
     */
    tier_from_start_max_range?: double
    /**
     * **Default:** `max double`
     *
     * Limit distance from the optimum on a single (positive) side. This is pure magic.
     *
     * Only loaded if `tier_from_start_optimal` is defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#tier_from_start_top_property_limit Online documentation}
     */
    tier_from_start_top_property_limit?: double
    /**
     * Optimal value of distance. If distance is close to this value, peak influence is 1.
     *
     * distance corresponds to the `distance` {@link BaseNamedNoiseExpressions noise expression}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#distance_optimal Online documentation}
     */
    distance_optimal?: double
    /**
     * **Default:** `0`
     *
     * Distance from the optimal parameters that is still considered optimal.
     *
     * Only loaded if `distance_optimal` is defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#distance_range Online documentation}
     */
    distance_range?: double
    /**
     * Distance from the optimal parameters that get influence of -1.
     *
     * Only loaded if `distance_optimal` is defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#distance_max_range Online documentation}
     */
    distance_max_range?: double
    /**
     * **Default:** `max double`
     *
     * Limit distance from the optimum on a single (positive) side. This is pure magic.
     *
     * Only loaded if `distance_optimal` is defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplacePeak.html#distance_top_property_limit Online documentation}
     */
    distance_top_property_limit?: double
  }
  export interface AutoplaceSettings {
    /**
     * Whether missing autoplace names for this type should be default enabled.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplaceSettings.html#treat_missing_as_default Online documentation}
     */
    treat_missing_as_default?: bool
    /**
     * Overrides the FrequencySizeRichness provided to the {@link AutoplaceSpecification} of the entity/tile/decorative. Takes priority over the FrequencySizeRichness set in the {@link AutoplaceSpecification#control autoplace control}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplaceSettings.html#settings Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplaceSpecification.html Online documentation}
   */
  export type AutoplaceSpecification =
    | {
        /**
         * **Default:** `""`
         *
         * Name of the {@link AutoplaceControl} (row in the map generator GUI) that applies to this entity.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplaceSpecification.html#control Online documentation}
         */
        control?: AutoplaceControlID
        /**
         * **Default:** `true`
         *
         * Indicates whether the thing should be placed even if {@link MapGenSettings} do not provide frequency/size/richness for it. (either for the specific prototype or for the control named by AutoplaceSpecification.control).
         *
         * If true, normal frequency/size/richness (`value=1`) are used in that case. Otherwise it is treated as if 'none' were selected.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplaceSpecification.html#default_enabled Online documentation}
         */
        default_enabled?: bool
        /**
         * **Default:** `"neutral"`
         *
         * Force of the placed entity. Can be a custom force name. Only relevant for {@link EntityWithOwnerPrototype}.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplaceSpecification.html#force Online documentation}
         */
        force?: "enemy" | "player" | "neutral" | string
        /**
         * **Default:** `""`
         *
         * Order for placing the entity (has no effect when placing tiles). Entities whose order compares less are placed earlier (this influences placing multiple entities which collide with itself), from entities with equal order string only one with the highest probability is placed.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplaceSpecification.html#order Online documentation}
         */
        order?: Order
        /**
         * **Default:** `1`
         *
         * For entities and decoratives, how many times to attempt to place on each tile. Probability and collisions are taken into account each attempt.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplaceSpecification.html#placement_density Online documentation}
         */
        placement_density?: uint32
        /**
         * Restricts tiles or tile transitions the entity can appear on.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplaceSpecification.html#tile_restriction Online documentation}
         */
        tile_restriction?: readonly TileIDRestriction[]
        /**
         * If specified, provides a noise expression that will be evaluated at every point on the map to determine probability.
         *
         * If left blank, probability is determined by the `peaks` system based on the properties listed below.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplaceSpecification.html#probability_expression Online documentation}
         */
        probability_expression?: NoiseExpression
        /**
         * If specified, provides a noise expression that will be evaluated to determine richness.
         *
         * If probability_expression is specified and `richness_expression` is not, then `probability_expression` will be used as the richness expression.
         *
         * If neither are specified, then probability and richness are both determined by the `peaks` system based on the properties listed below.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplaceSpecification.html#richness_expression Online documentation}
         */
        richness_expression?: NoiseExpression
        peaks?: readonly AutoplacePeak[]
        /**
         * **Default:** `0`
         *
         * Parameter of the sharpness filter for post-processing probability of entity placement. Value of `0` disables the filter, with value `1`, the filter is a step function centered around `0.5`.
         *
         * ![Example of sharpness filter with value 0.5.](https://lua-api.factorio.com/1.1.110/static/images/AutoplaceSpecification_sharpness.png)
         * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplaceSpecification.html#sharpness Online documentation}
         */
        sharpness?: double
        /**
         * **Default:** `1`
         *
         * Multiplier for output of the sharpness filter.
         *
         * Probability is calculated as `max_probability * sharpness_filter(sum of influences and size modifier from GUI) - random(0, random_probability_penalty)`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplaceSpecification.html#max_probability Online documentation}
         */
        max_probability?: double
        /**
         * **Default:** `0`
         *
         * Base Richness. It is calculated as `sum of influences * (richness_multiplier + distance * richness_multiplier_distance_bonus) + richness_base`.
         *
         * Note, that when calculating richness, influences of individual peaks use {@link AutoplacePeak#richness_influence AutoplacePeak::richness_influence} bonus.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplaceSpecification.html#richness_base Online documentation}
         */
        richness_base?: double
        /**
         * **Default:** `0`
         *
         * See `richness_base`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplaceSpecification.html#richness_multiplier Online documentation}
         */
        richness_multiplier?: double
        /**
         * **Default:** `0`
         *
         * Bonus to richness multiplier per tile of distance from starting point. See `richness_base`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplaceSpecification.html#richness_multiplier_distance_bonus Online documentation}
         */
        richness_multiplier_distance_bonus?: double
        /**
         * **Default:** `0`
         *
         * A random value between `0` and this number is subtracted from a probability after sharpness filter. Only works for entities.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplaceSpecification.html#random_probability_penalty Online documentation}
         */
        random_probability_penalty?: double
        /**
         * **Default:** `Calculated from existing peaks.`
         *
         * Sets a fraction of surface that should be covered by this item.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplaceSpecification.html#coverage Online documentation}
         */
        coverage?: double
        /**
         * **Default:** `0`
         *
         * If this value is non zero, influence of this entity will be calculated differently in starting area: For each entity with this parameter a position in starting area is selected and a blob is placed centered on this position. The central tile of this blob will have approximately amount of resources selected by this value.
         *
         * See {@link AutoplacePeak#influence AutoplacePeak::influence} for the general influence calculation.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplaceSpecification.html#starting_area_amount Online documentation}
         */
        starting_area_amount?: uint32
        /**
         * **Default:** `10`
         *
         * See `starting_area_amount`. Controls approximate radius of the blob in tiles.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplaceSpecification.html#starting_area_size Online documentation}
         */
        starting_area_size?: uint32
      }
    | AutoplacePeak
  /**
   * The abstract base of all {@link AttackParameters}.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseAttackParameters.html Online documentation}
   */
  export interface BaseAttackParameters {
    /**
     * Before an entity can attack, the distance (in tiles) between the entity and target must be less than or equal to this.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseAttackParameters.html#range Online documentation}
     */
    range: float
    /**
     * Number of ticks in which it will be possible to shoot again. If < 1, multiple shots can be performed in one tick.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseAttackParameters.html#cooldown Online documentation}
     */
    cooldown: float
    /**
     * **Default:** `0`
     *
     * The minimum distance (in tiles) between an entity and target. If a unit's target is less than this, the unit will attempt to move away before attacking. A {@linkplain https://wiki.factorio.com/Flamethrower_turret flamethrower turret} does not move, but has a minimum range. Less than this, it is unable to target an enemy.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseAttackParameters.html#min_range Online documentation}
     */
    min_range?: float
    /**
     * **Default:** `1`
     *
     * If this is <= 0, it is set to 1. Arc from 0 to 1, so for example 0.25 is 90°. Used by the {@linkplain https://wiki.factorio.com/Flamethrower_turret flamethrower turret} in the base game. Arcs greater than 0.5 but less than 1 will be clamped to 0.5 as targeting in arcs larger than half circle is {@linkplain https://forums.factorio.com/94654 not implemented}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseAttackParameters.html#turn_range Online documentation}
     */
    turn_range?: float
    /**
     * **Default:** `0`
     *
     * Used when searching for the nearest enemy, when this is > 0, enemies that aren't burning are preferred over burning enemies. Definition of "burning" for this: Entity has sticker attached to it, and the sticker has a {@link StickerPrototype#spread_fire_entity spread_fire_entity} set.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseAttackParameters.html#fire_penalty Online documentation}
     */
    fire_penalty?: float
    /**
     * **Default:** `0`
     *
     * A higher penalty will discourage turrets from targeting units that would take longer to turn to face.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseAttackParameters.html#rotate_penalty Online documentation}
     */
    rotate_penalty?: float
    /**
     * **Default:** `0`
     *
     * A higher penalty will discourage turrets from targeting units with higher health. A negative penalty will encourage turrets to target units with higher health.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseAttackParameters.html#health_penalty Online documentation}
     */
    health_penalty?: float
    /**
     * **Default:** `"center-to-center"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseAttackParameters.html#range_mode Online documentation}
     */
    range_mode?: "center-to-center" | "bounding-box-to-bounding-box"
    /**
     * **Default:** `equal to `range` property`
     *
     * If less than `range`, the entity will choose a random distance between `range` and `min_attack_distance` and attack from that distance.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseAttackParameters.html#min_attack_distance Online documentation}
     */
    min_attack_distance?: float
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseAttackParameters.html#damage_modifier Online documentation}
     */
    damage_modifier?: float
    /**
     * **Default:** `1`
     *
     * Must be greater than or equal to `0`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseAttackParameters.html#ammo_consumption_modifier Online documentation}
     */
    ammo_consumption_modifier?: float
    /**
     * **Default:** `0`
     *
     * Must be between `0` and `1`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseAttackParameters.html#cooldown_deviation Online documentation}
     */
    cooldown_deviation?: float
    /**
     * **Default:** `0`
     *
     * Number of ticks it takes for the weapon to actually shoot after the order for shooting has been made. This also allows to "adjust" the shooting animation to the effect of shooting.
     *
     * {@link CapsuleAction CapsuleActions} cannot have attack parameters with non-zero warmup.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseAttackParameters.html#warmup Online documentation}
     */
    warmup?: uint32
    /**
     * **Default:** `0`
     *
     * Setting this to anything but zero causes homing projectiles to aim for the predicted location based on enemy movement instead of the current enemy location.
     * @example
     * -- this is same as particle horizontal speed of flamethrower fire stream
     * lead_target_for_projectile_speed = 0.2* 0.75 * 1.5
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseAttackParameters.html#lead_target_for_projectile_speed Online documentation}
     */
    lead_target_for_projectile_speed?: float
    /**
     * **Default:** `equal to `cooldown` property`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseAttackParameters.html#movement_slow_down_cooldown Online documentation}
     */
    movement_slow_down_cooldown?: float
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseAttackParameters.html#movement_slow_down_factor Online documentation}
     */
    movement_slow_down_factor?: double
    /**
     * Can be mandatory.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseAttackParameters.html#ammo_type Online documentation}
     */
    ammo_type?: AmmoType
    /**
     * **Default:** `"shoot"`
     *
     * Used in tooltips to set the tooltip category. It is also used to get the locale keys for activation instructions and speed of the action for the tooltip.
     *
     * For example, an activation_type of "throw" will result in the tooltip category "thrown" and the tooltip locale keys "gui.instruction-to-throw" and "description.throwing-speed".
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseAttackParameters.html#activation_type Online documentation}
     */
    activation_type?: "shoot" | "throw" | "consume" | "activate"
    /**
     * Played once at the start of the attack if these are {@link ProjectileAttackParameters}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseAttackParameters.html#sound Online documentation}
     */
    sound?: LayeredSound
    animation?: RotatedAnimation
    /**
     * Played during the attack.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseAttackParameters.html#cyclic_sound Online documentation}
     */
    cyclic_sound?: CyclicSound
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseAttackParameters.html#use_shooter_direction Online documentation}
     */
    use_shooter_direction?: bool
    ammo_categories?: readonly AmmoCategoryID[]
    /**
     * Mandatory if both `ammo_type` and `ammo_categories` are not defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseAttackParameters.html#ammo_category Online documentation}
     */
    ammo_category?: AmmoCategoryID
  }
  /**
   * The abstract base of all {@link EnergySource EnergySources}. Specifies the way an entity gets its energy.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseEnergySource.html Online documentation}
   */
  export interface BaseEnergySource {
    /**
     * **Default:** `0`
     *
     * The pollution an entity emits per minute at full energy consumption. This is exactly the value that is shown in the entity tooltip.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseEnergySource.html#emissions_per_minute Online documentation}
     */
    emissions_per_minute?: double
    /**
     * **Default:** `true`
     *
     * Whether to render the "no power" icon if the entity is low on power. Also applies to the "no fuel" icon when using burner energy sources.
     *
     * ![](https://lua-api.factorio.com/1.1.110/static/images/no_power_icon.png)
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseEnergySource.html#render_no_power_icon Online documentation}
     */
    render_no_power_icon?: bool
    /**
     * **Default:** `true`
     *
     * Whether to render the "no network" icon if the entity is not connected to an electric network.
     *
     * ![](https://lua-api.factorio.com/1.1.110/static/images/no_network_icon.png)
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseEnergySource.html#render_no_network_icon Online documentation}
     */
    render_no_network_icon?: bool
  }
  /**
   * The abstract base of all {@link Modifier Modifiers}.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseModifier.html Online documentation}
   */
  export interface BaseModifier {
    /**
     * Can't be an empty array.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseModifier.html#icons Online documentation}
     */
    icons?: readonly IconData[]
    /**
     * Path to the icon file.
     *
     * Only loaded if `icons` is not defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseModifier.html#icon Online documentation}
     */
    icon?: FileName
    /**
     * The size of the square icon, in pixels. E.g. `32` for a 32px by 32px icon.
     *
     * Only loaded if `icons` is not defined, or if `icon_size` is not specified for all instances of `icons`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseModifier.html#icon_size Online documentation}
     */
    icon_size?: SpriteSizeType
    /**
     * **Default:** `0`
     *
     * Icons of reduced size will be used at decreased scale.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseModifier.html#icon_mipmaps Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseNamedNoiseExpressions.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseStyleSpecification.html Online documentation}
   */
  export interface BaseStyleSpecification {
    /**
     * Name of a {@link StyleSpecification}. This style inherits all property values from its parent.
     *
     * Styles without a parent property default to the root style for their type. The exception to this are the root styles themselves, as they cannot have a parent set. Due to this, for root styles, some style properties are mandatory and behavior may be unexpected, such as an element not showing up because its size defaults to `0`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseStyleSpecification.html#parent Online documentation}
     */
    parent?: string
    /**
     * **Default:** `"left"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseStyleSpecification.html#horizontal_align Online documentation}
     */
    horizontal_align?: HorizontalAlign
    /**
     * **Default:** `"top"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseStyleSpecification.html#vertical_align Online documentation}
     */
    vertical_align?: VerticalAlign
    ignored_by_search?: bool
    never_hide_by_search?: bool
    /**
     * **Default:** `"auto"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseStyleSpecification.html#horizontally_stretchable Online documentation}
     */
    horizontally_stretchable?: StretchRule
    /**
     * **Default:** `"auto"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseStyleSpecification.html#vertically_stretchable Online documentation}
     */
    vertically_stretchable?: StretchRule
    /**
     * **Default:** `"auto"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseStyleSpecification.html#horizontally_squashable Online documentation}
     */
    horizontally_squashable?: StretchRule
    /**
     * **Default:** `"auto"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseStyleSpecification.html#vertically_squashable Online documentation}
     */
    vertically_squashable?: StretchRule
    /**
     * If this is a tuple, the first member sets `natural_width` and the second sets `natural_height`. Otherwise, both `natural_width` and `natural_height` are set to the same value.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseStyleSpecification.html#natural_size Online documentation}
     */
    natural_size?: uint32 | readonly [uint32, uint32]
    /**
     * If this is a tuple, the first member sets `width`, and the second sets `height`. Otherwise, both `width` and `height` are set to the same value.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseStyleSpecification.html#size Online documentation}
     */
    size?: uint32 | readonly [uint32, uint32]
    /**
     * Sets `minimal_width`, `maximal_width` and `natural_width` to the same value.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseStyleSpecification.html#width Online documentation}
     */
    width?: uint32
    /**
     * **Default:** `0`
     *
     * Minimal width ensures that the widget will never be smaller than than that size. It can't be squashed to be smaller.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseStyleSpecification.html#minimal_width Online documentation}
     */
    minimal_width?: uint32
    /**
     * **Default:** `0`
     *
     * Maximal width ensures that the widget will never be bigger than than that size. It can't be stretched to be bigger.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseStyleSpecification.html#maximal_width Online documentation}
     */
    maximal_width?: uint32
    /**
     * **Default:** `0`
     *
     * Natural width specifies the width of the element tries to have, but it can still be squashed/stretched to have a different size.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseStyleSpecification.html#natural_width Online documentation}
     */
    natural_width?: uint32
    /**
     * Sets `minimal_height`, `maximal_height` and `natural_height` to the same value.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseStyleSpecification.html#height Online documentation}
     */
    height?: uint32
    /**
     * **Default:** `0`
     *
     * Minimal height ensures that the widget will never be smaller than than that size. It can't be squashed to be smaller.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseStyleSpecification.html#minimal_height Online documentation}
     */
    minimal_height?: uint32
    /**
     * **Default:** `0`
     *
     * Maximal height ensures that the widget will never be bigger than than that size. It can't be stretched to be bigger.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseStyleSpecification.html#maximal_height Online documentation}
     */
    maximal_height?: uint32
    /**
     * **Default:** `0`
     *
     * Natural height specifies the height of the element tries to have, but it can still be squashed/stretched to have a different size.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseStyleSpecification.html#natural_height Online documentation}
     */
    natural_height?: uint32
    /**
     * Sets `top_padding`, `right_padding`, `bottom_padding` and `left_padding` to the same value.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseStyleSpecification.html#padding Online documentation}
     */
    padding?: int16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseStyleSpecification.html#top_padding Online documentation}
     */
    top_padding?: int16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseStyleSpecification.html#right_padding Online documentation}
     */
    right_padding?: int16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseStyleSpecification.html#bottom_padding Online documentation}
     */
    bottom_padding?: int16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseStyleSpecification.html#left_padding Online documentation}
     */
    left_padding?: int16
    /**
     * Sets `top_margin`, `right_margin`, `bottom_margin` and `left_margin` to the same value.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseStyleSpecification.html#margin Online documentation}
     */
    margin?: int16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseStyleSpecification.html#top_margin Online documentation}
     */
    top_margin?: int16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseStyleSpecification.html#right_margin Online documentation}
     */
    right_margin?: int16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseStyleSpecification.html#bottom_margin Online documentation}
     */
    bottom_margin?: int16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseStyleSpecification.html#left_margin Online documentation}
     */
    left_margin?: int16
    /**
     * Name of a custom GUI effect, which are hard-coded in the game's engine. Only has one option currently.
     *
     * ## Union members
     * - `"compilatron-hologram"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseStyleSpecification.html#effect Online documentation}
     */
    effect?: "compilatron-hologram"
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BaseStyleSpecification.html#effect_opacity Online documentation}
     */
    effect_opacity?: float
    tooltip?: LocalisedString
  }
  export interface BeaconGraphicsSet {
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeaconGraphicsSet.html#draw_animation_when_idle Online documentation}
     */
    draw_animation_when_idle?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeaconGraphicsSet.html#draw_light_when_idle Online documentation}
     */
    draw_light_when_idle?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeaconGraphicsSet.html#random_animation_offset Online documentation}
     */
    random_animation_offset?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeaconGraphicsSet.html#module_icons_suppressed Online documentation}
     */
    module_icons_suppressed?: bool
    /**
     * **Default:** `"object"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeaconGraphicsSet.html#base_layer Online documentation}
     */
    base_layer?: RenderLayer
    /**
     * **Default:** `"object"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeaconGraphicsSet.html#animation_layer Online documentation}
     */
    animation_layer?: RenderLayer
    /**
     * **Default:** `"object"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeaconGraphicsSet.html#top_layer Online documentation}
     */
    top_layer?: RenderLayer
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeaconGraphicsSet.html#animation_progress Online documentation}
     */
    animation_progress?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeaconGraphicsSet.html#min_animation_progress Online documentation}
     */
    min_animation_progress?: float
    /**
     * **Default:** `1000`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeaconGraphicsSet.html#max_animation_progress Online documentation}
     */
    max_animation_progress?: float
    /**
     * **Default:** `"none"`
     *
     * Which tint set in {@link ModulePrototype#beacon_tint ModulePrototype::beacon_tint} should be applied to this, if any.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeaconGraphicsSet.html#apply_module_tint Online documentation}
     */
    apply_module_tint?: ModuleTint
    /**
     * **Default:** `"none"`
     *
     * Which tint set in {@link ModulePrototype#beacon_tint ModulePrototype::beacon_tint} should be applied to the light, if any.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeaconGraphicsSet.html#apply_module_tint_to_light Online documentation}
     */
    apply_module_tint_to_light?: ModuleTint
    /**
     * **Default:** `no color`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeaconGraphicsSet.html#no_modules_tint Online documentation}
     */
    no_modules_tint?: Color
    animation_list?: readonly AnimationElement[]
    light?: LightDefinition
    /**
     * The visualisations available for displaying the modules in the beacon. The visualisation is chosen based on art style, see {@link BeaconModuleVisualizations#art_style BeaconModuleVisualizations::art_style} and {@link ModulePrototype#art_style ModulePrototype::art_style}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeaconGraphicsSet.html#module_visualisations Online documentation}
     */
    module_visualisations?: readonly BeaconModuleVisualizations[]
    /**
     * **Default:** `"single-module"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeaconGraphicsSet.html#module_tint_mode Online documentation}
     */
    module_tint_mode?: "single-module" | "mix"
  }
  export interface BeaconModuleVisualization {
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeaconModuleVisualization.html#has_empty_slot Online documentation}
     */
    has_empty_slot?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeaconModuleVisualization.html#draw_as_light Online documentation}
     */
    draw_as_light?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeaconModuleVisualization.html#draw_as_sprite Online documentation}
     */
    draw_as_sprite?: bool
    /**
     * **Default:** `0`
     *
     * Used to determine render order for sprites with the same `render_layer` in the same position. Sprites with a higher `secondary_draw_order` are drawn on top.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeaconModuleVisualization.html#secondary_draw_order Online documentation}
     */
    secondary_draw_order?: int8
    /**
     * **Default:** `"none"`
     *
     * Which tint set in {@link ModulePrototype#beacon_tint ModulePrototype::beacon_tint} should be applied to this, if any.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeaconModuleVisualization.html#apply_module_tint Online documentation}
     */
    apply_module_tint?: ModuleTint
    /**
     * **Default:** `"object"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeaconModuleVisualization.html#render_layer Online documentation}
     */
    render_layer?: RenderLayer
    pictures?: SpriteVariations
  }
  export interface BeaconModuleVisualizations {
    /**
     * The visualization is chosen based on the {@link ModulePrototype#art_style ModulePrototype::art_style}, meaning if module art style equals beacon module visualization art style then this visualization is chosen. Vanilla uses `"vanilla"` here.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeaconModuleVisualizations.html#art_style Online documentation}
     */
    art_style: string
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeaconModuleVisualizations.html#use_for_empty_slots Online documentation}
     */
    use_for_empty_slots?: bool
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeaconModuleVisualizations.html#tier_offset Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeaconModuleVisualizations.html#slots Online documentation}
     */
    slots?: readonly (readonly BeaconModuleVisualization[])[]
  }
  /**
   * @see ModulePrototype.beacon_tint
   * @see {@link https://lua-api.factorio.com/1.1.110/prototypes/ModulePrototype.html#beacon_tint Online documentation}
   */
  export interface BeaconVisualizationTints {
    /**
     * **Default:** `no color`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeaconVisualizationTints.html#primary Online documentation}
     */
    primary?: Color
    /**
     * **Default:** `no color`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeaconVisualizationTints.html#secondary Online documentation}
     */
    secondary?: Color
    /**
     * **Default:** `no color`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeaconVisualizationTints.html#tertiary Online documentation}
     */
    tertiary?: Color
    /**
     * **Default:** `no color`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeaconVisualizationTints.html#quaternary Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeamAttackParameters.html#source_direction_count Online documentation}
     */
    source_direction_count?: uint32
    source_offset?: Vector
  }
  export interface BeamTriggerDelivery extends TriggerDeliveryItem {
    readonly type: "beam"
    /**
     * Name of a {@link BeamPrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeamTriggerDelivery.html#beam Online documentation}
     */
    beam: EntityID
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeamTriggerDelivery.html#add_to_shooter Online documentation}
     */
    add_to_shooter?: bool
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeamTriggerDelivery.html#max_length Online documentation}
     */
    max_length?: uint32
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeamTriggerDelivery.html#duration Online documentation}
     */
    duration?: uint32
    source_offset?: Vector
  }
  export interface BeltTraverseTipTrigger {
    readonly type: "belt-traverse"
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BeltTraverseTipTrigger.html#count Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/BlendMode.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/prototypes/BoilerPrototype.html#fire Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/prototypes/BoilerPrototype.html#fire_glow Online documentation}
   */
  export interface BoilerFireGlow {
    north?: Animation
    east?: Animation
    south?: Animation
    west?: Animation
  }
  /**
   * @see BoilerPrototype.patch
   * @see {@link https://lua-api.factorio.com/1.1.110/prototypes/BoilerPrototype.html#patch Online documentation}
   */
  export interface BoilerPatch {
    north?: Sprite
    east?: Sprite
    south?: Sprite
    west?: Sprite
  }
  /**
   * @see BoilerPrototype.structure
   * @see {@link https://lua-api.factorio.com/1.1.110/prototypes/BoilerPrototype.html#structure Online documentation}
   */
  export interface BoilerStructure {
    north: Animation
    east: Animation
    south: Animation
    west: Animation
  }
  /**
   * @see UtilityConstants.bonus_gui_ordering
   * @see {@link https://lua-api.factorio.com/1.1.110/prototypes/UtilityConstants.html#bonus_gui_ordering Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BoolModifier.html#modifier Online documentation}
     */
    modifier: bool
  }
  export interface BorderImageSet {
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BorderImageSet.html#scale Online documentation}
     */
    scale?: double
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BorderImageSet.html#border_width Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/BoundingBox.html Online documentation}
   */
  export type BoundingBox = readonly [MapPosition, MapPosition]
  /**
   * A cursor box, for use in {@link UtilitySprites}.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/BoxSpecification.html Online documentation}
   */
  export interface BoxSpecification {
    sprite: Sprite
    /**
     * **Default:** `false`
     *
     * Whether this is a complete box or just the top left corner. If this is true, `side_length` and `side_height` must be present. Otherwise `max_side_length` must be present.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BoxSpecification.html#is_whole_box Online documentation}
     */
    is_whole_box?: bool
    /**
     * Only loaded, and mandatory if `is_whole_box` is `true`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BoxSpecification.html#side_length Online documentation}
     */
    side_length?: double
    /**
     * Only loaded, and mandatory if `is_whole_box` is `true`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BoxSpecification.html#side_height Online documentation}
     */
    side_height?: double
    /**
     * Only loaded, and mandatory if `is_whole_box` is `false`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BoxSpecification.html#max_side_length Online documentation}
     */
    max_side_length?: double
  }
  export interface BuildEntityTipTrigger {
    readonly type: "build-entity"
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BuildEntityTipTrigger.html#count Online documentation}
     */
    count?: uint32
    entity?: EntityID
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BuildEntityTipTrigger.html#match_type_only Online documentation}
     */
    match_type_only?: bool
    build_by_dragging?: bool
    /**
     * **Default:** `false`
     *
     * Building is considered consecutive when the built entity is the same as the last built entity.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BuildEntityTipTrigger.html#consecutive Online documentation}
     */
    consecutive?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BuildEntityTipTrigger.html#linear_power_pole_line Online documentation}
     */
    linear_power_pole_line?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BuildEntityTipTrigger.html#build_in_line Online documentation}
     */
    build_in_line?: bool
  }
  export interface BurnerEnergySource extends BaseEnergySource {
    /**
     * This is only loaded, and mandatory if the energy source can be loaded as multiple energy source types.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BurnerEnergySource.html#type Online documentation}
     */
    readonly type?: "burner"
    fuel_inventory_size: ItemStackIndex
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BurnerEnergySource.html#burnt_inventory_size Online documentation}
     */
    burnt_inventory_size?: ItemStackIndex
    smoke?: readonly SmokeSource[]
    light_flicker?: LightFlickeringDefinition
    /**
     * **Default:** `1`
     *
     * `1` means 100% effectivity. Must be greater than `0`. Multiplier of the energy output.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BurnerEnergySource.html#effectivity Online documentation}
     */
    effectivity?: double
    /**
     * **Default:** `"chemical"`
     *
     * The energy source can be used with fuel from this {@link FuelCategory fuel category}. For a list of built-in categories, see {@linkplain https://wiki.factorio.com/Data.raw#fuel-category here}.
     *
     * Only loaded if `fuel_categories` is not defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BurnerEnergySource.html#fuel_category Online documentation}
     */
    fuel_category?: FuelCategoryID
    /**
     * The energy source can be used with fuel from these {@link FuelCategory fuel categories}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/BurnerEnergySource.html#fuel_categories Online documentation}
     */
    fuel_categories?: readonly FuelCategoryID[]
  }
  export interface ButtonStyleSpecification extends StyleWithClickableGraphicalSetSpecification {
    readonly type: "button_style"
    /**
     * Name of a {@link FontPrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ButtonStyleSpecification.html#font Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CameraEffectTriggerEffectItem.html#effect Online documentation}
     */
    effect: string
    duration: uint8
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CameraEffectTriggerEffectItem.html#ease_in_duration Online documentation}
     */
    ease_in_duration?: uint8
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CameraEffectTriggerEffectItem.html#ease_out_duration Online documentation}
     */
    ease_out_duration?: uint8
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CameraEffectTriggerEffectItem.html#delay Online documentation}
     */
    delay?: uint8
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CameraEffectTriggerEffectItem.html#full_strength_max_distance Online documentation}
     */
    full_strength_max_distance?: uint16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CameraEffectTriggerEffectItem.html#max_distance Online documentation}
     */
    max_distance?: uint16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CameraEffectTriggerEffectItem.html#strength Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/CapsuleAction.html Online documentation}
   */
  export type CapsuleAction =
    | ThrowCapsuleAction
    | ActivateEquipmentCapsuleAction
    | UseOnSelfCapsuleAction
    | DestroyCliffsCapsuleAction
    | ArtilleryRemoteCapsuleAction
  /**
   * The data for one variation of {@link CharacterPrototype#animations character animations}.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/CharacterArmorAnimation.html Online documentation}
   */
  export interface CharacterArmorAnimation {
    idle: RotatedAnimation
    idle_with_gun: RotatedAnimation
    running: RotatedAnimation
    /**
     * Must contain exactly 18 directions, so all of the combination of gun direction and moving direction can be covered. Some of these variations are used in reverse to save space. You can use the character animation in the base game for reference.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CharacterArmorAnimation.html#running_with_gun Online documentation}
     */
    running_with_gun: RotatedAnimation
    mining_with_tool: RotatedAnimation
    /**
     * flipped_shadow_running_with_gun must be nil or contain exactly 18 directions, so all of the combination of gun direction and moving direction can be covered. Some of these variations are used in reverse to save space. You can use the character animation in the base game for reference. `flipped_shadow_running_with_gun` has to have same frame count as `running_with_gun`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CharacterArmorAnimation.html#flipped_shadow_running_with_gun Online documentation}
     */
    flipped_shadow_running_with_gun?: RotatedAnimation
    /**
     * The names of the armors this animation data is used for. Don't define this if you want the animations to be used for the player without armor.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CharacterArmorAnimation.html#armors Online documentation}
     */
    armors?: readonly ItemID[]
  }
  export interface CharacterBuildDistanceModifier extends SimpleModifier {
    readonly type: "character-build-distance"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CharacterBuildDistanceModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterCraftingSpeedModifier extends SimpleModifier {
    readonly type: "character-crafting-speed"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CharacterCraftingSpeedModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterHealthBonusModifier extends SimpleModifier {
    readonly type: "character-health-bonus"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CharacterHealthBonusModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterInventorySlotsBonusModifier extends SimpleModifier {
    readonly type: "character-inventory-slots-bonus"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CharacterInventorySlotsBonusModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterItemDropDistanceModifier extends SimpleModifier {
    readonly type: "character-item-drop-distance"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CharacterItemDropDistanceModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterItemPickupDistanceModifier extends SimpleModifier {
    readonly type: "character-item-pickup-distance"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CharacterItemPickupDistanceModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterLogisticRequestsModifier extends BoolModifier {
    readonly type: "character-logistic-requests"
    /**
     * **Default:** `false`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CharacterLogisticRequestsModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterLogisticTrashSlotsModifier extends SimpleModifier {
    readonly type: "character-logistic-trash-slots"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CharacterLogisticTrashSlotsModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterLootPickupDistanceModifier extends SimpleModifier {
    readonly type: "character-loot-pickup-distance"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CharacterLootPickupDistanceModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterMiningSpeedModifier extends SimpleModifier {
    readonly type: "character-mining-speed"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CharacterMiningSpeedModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterReachDistanceModifier extends SimpleModifier {
    readonly type: "character-reach-distance"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CharacterReachDistanceModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterResourceReachDistanceModifier extends SimpleModifier {
    readonly type: "character-resource-reach-distance"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CharacterResourceReachDistanceModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface CharacterRunningSpeedModifier extends SimpleModifier {
    readonly type: "character-running-speed"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CharacterRunningSpeedModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  /**
   * @see UtilityConstants.chart
   * @see {@link https://lua-api.factorio.com/1.1.110/prototypes/UtilityConstants.html#chart Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ChartUtilityConstants.html#default_friendly_color_by_type Online documentation}
     */
    default_friendly_color_by_type?: Record<string, Color>
    /**
     * The strings are entity types.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ChartUtilityConstants.html#default_color_by_type Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ChartUtilityConstants.html#zoom_threshold_to_draw_spider_path Online documentation}
     */
    zoom_threshold_to_draw_spider_path?: double
    /**
     * **Default:** `0.6`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ChartUtilityConstants.html#custom_tag_scale Online documentation}
     */
    custom_tag_scale?: float
    custom_tag_selected_overlay_tint: Color
  }
  export interface CheckBoxStyleSpecification extends StyleWithClickableGraphicalSetSpecification {
    readonly type: "checkbox_style"
    /**
     * Name of a {@link FontPrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CheckBoxStyleSpecification.html#font Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/MiningDrillGraphicsSet.html#circuit_connector_layer Online documentation}
   */
  export interface CircuitConnectorLayer {
    /**
     * **Default:** `"object"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CircuitConnectorLayer.html#north Online documentation}
     */
    north?: RenderLayer
    /**
     * **Default:** `"object"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CircuitConnectorLayer.html#east Online documentation}
     */
    east?: RenderLayer
    /**
     * **Default:** `"object"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CircuitConnectorLayer.html#south Online documentation}
     */
    south?: RenderLayer
    /**
     * **Default:** `"object"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CircuitConnectorLayer.html#west Online documentation}
     */
    west?: RenderLayer
  }
  /**
   * @see MiningDrillGraphicsSet.circuit_connector_secondary_draw_order
   * @see {@link https://lua-api.factorio.com/1.1.110/types/MiningDrillGraphicsSet.html#circuit_connector_secondary_draw_order Online documentation}
   */
  export interface CircuitConnectorSecondaryDrawOrder {
    /**
     * **Default:** `100`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CircuitConnectorSecondaryDrawOrder.html#north Online documentation}
     */
    north?: int8
    /**
     * **Default:** `100`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CircuitConnectorSecondaryDrawOrder.html#east Online documentation}
     */
    east?: int8
    /**
     * **Default:** `100`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CircuitConnectorSecondaryDrawOrder.html#south Online documentation}
     */
    south?: int8
    /**
     * **Default:** `100`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CircuitConnectorSecondaryDrawOrder.html#west Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CircuitConnectorSprites.html#connector_main Online documentation}
     */
    connector_main?: Sprite
    /**
     * Drawn when the entity is connected to a circuit network or a logistic network.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CircuitConnectorSprites.html#connector_shadow Online documentation}
     */
    connector_shadow?: Sprite
    /**
     * Drawn when the entity is connected to a circuit network.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CircuitConnectorSprites.html#wire_pins Online documentation}
     */
    wire_pins?: Sprite
    /**
     * Drawn when the entity is connected to a circuit network.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CircuitConnectorSprites.html#wire_pins_shadow Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CircularParticleCreationSpecification.html#direction Online documentation}
     */
    direction?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CircularParticleCreationSpecification.html#direction_deviation Online documentation}
     */
    direction_deviation?: float
    /**
     * **Default:** `0.1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CircularParticleCreationSpecification.html#speed Online documentation}
     */
    speed?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CircularParticleCreationSpecification.html#speed_deviation Online documentation}
     */
    speed_deviation?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CircularParticleCreationSpecification.html#starting_frame_speed_deviation Online documentation}
     */
    starting_frame_speed_deviation?: float
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CircularParticleCreationSpecification.html#height Online documentation}
     */
    height?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CircularParticleCreationSpecification.html#height_deviation Online documentation}
     */
    height_deviation?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CircularParticleCreationSpecification.html#vertical_speed Online documentation}
     */
    vertical_speed?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CircularParticleCreationSpecification.html#vertical_speed_deviation Online documentation}
     */
    vertical_speed_deviation?: float
    /**
     * **Default:** `"`{0, 0}`"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CircularParticleCreationSpecification.html#center Online documentation}
     */
    center?: Vector
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CircularParticleCreationSpecification.html#creation_distance Online documentation}
     */
    creation_distance?: double
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CircularParticleCreationSpecification.html#creation_distance_orientation Online documentation}
     */
    creation_distance_orientation?: double
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CircularParticleCreationSpecification.html#use_source_position Online documentation}
     */
    use_source_position?: bool
  }
  export type CircularProjectileCreationSpecification = readonly (readonly [RealOrientation, Vector])[]
  export interface ClearCursorTipTrigger {
    readonly type: "clear-cursor"
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ClearCursorTipTrigger.html#count Online documentation}
     */
    count?: uint32
  }
  export interface CliffPlacementSettings {
    /**
     * Name of the {@link CliffPrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CliffPlacementSettings.html#name Online documentation}
     */
    name?: EntityID
    /**
     * **Default:** `10`
     *
     * Elevation at which the first row of cliffs is placed. Can not be set from the map generation GUI.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CliffPlacementSettings.html#cliff_elevation_0 Online documentation}
     */
    cliff_elevation_0?: float
    /**
     * Elevation difference between successive rows of cliffs. This is inversely proportional to 'frequency' in the map generation GUI. Specifically, when set from the GUI the value is `40 / frequency`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CliffPlacementSettings.html#cliff_elevation_interval Online documentation}
     */
    cliff_elevation_interval?: float
    /**
     * Corresponds to 'continuity' in the GUI. This value is not used directly, but is used by the 'cliffiness' noise expression, which in combination with elevation and the two cliff elevation properties drives cliff placement (cliffs are placed when elevation crosses the elevation contours defined by `cliff_elevation_0` and `cliff_elevation_interval` when 'cliffiness' is greater than `0.5`). The default 'cliffiness' expression interprets this value such that larger values result in longer unbroken walls of cliffs, and smaller values (between `0` and `1`) result in larger gaps in cliff walls.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CliffPlacementSettings.html#richness Online documentation}
     */
    richness?: MapGenSize
  }
  export interface ClusterTriggerItem extends TriggerItem {
    readonly type: "cluster"
    /**
     * Must be at least `2`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ClusterTriggerItem.html#cluster_count Online documentation}
     */
    cluster_count: uint32
    distance: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ClusterTriggerItem.html#distance_deviation Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/CollisionMask.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/CollisionMaskLayer.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/Color.html Online documentation}
   */
  export type Color =
    | {
        /**
         * **Default:** `0`
         *
         * red value
         * @see {@link https://lua-api.factorio.com/1.1.110/types/Color.html#r Online documentation}
         */
        r?: float
        /**
         * **Default:** `0`
         *
         * green value
         * @see {@link https://lua-api.factorio.com/1.1.110/types/Color.html#g Online documentation}
         */
        g?: float
        /**
         * **Default:** `0`
         *
         * blue value
         * @see {@link https://lua-api.factorio.com/1.1.110/types/Color.html#b Online documentation}
         */
        b?: float
        /**
         * **Default:** `1`
         *
         * alpha value (opacity)
         * @see {@link https://lua-api.factorio.com/1.1.110/types/Color.html#a Online documentation}
         */
        a?: float
      }
    | readonly [float, float, float]
    | readonly [float, float, float, float]
  /**
   * @see UtilityConstants.color_filters
   * @see {@link https://lua-api.factorio.com/1.1.110/prototypes/UtilityConstants.html#color_filters Online documentation}
   */
  export interface ColorFilterData {
    name: string
    localised_name: LocalisedString
    /**
     * 4 arrays of 4-length float arrays, essentially a 4x4 matrix.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ColorFilterData.html#matrix Online documentation}
     */
    matrix: readonly (readonly float[])[]
  }
  export interface ColumnAlignment {
    /**
     * Column index.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ColumnAlignment.html#column Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ColumnAlignment.html#alignment Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ColumnWidth.html#column Online documentation}
     */
    column: uint32
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ColumnWidth.html#minimal_width Online documentation}
     */
    minimal_width?: int32
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ColumnWidth.html#maximal_width Online documentation}
     */
    maximal_width?: int32
    /**
     * Sets `minimal_width` and `maximal_width` to the same value.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ColumnWidth.html#width Online documentation}
     */
    width?: int32
  }
  /**
   * Graphics for the heat pipe.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/ConnectableEntityGraphics.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/ConstantNoiseBoolean.html Online documentation}
   */
  export type ConstantNoiseBoolean = NoiseLiteralBoolean | ConstantNoiseNumber
  /**
   * A constant numeric noise expression, such as a literal number, the result of addition of constants or multioctave noise that uses only constant arguments.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/ConstantNoiseNumber.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/ConsumingType.html Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CraftItemTipTrigger.html#event_type Online documentation}
     */
    event_type: "crafting-of-single-item-ordered" | "crafting-of-multiple-items-ordered" | "crafting-finished"
    /**
     * **Default:** `false`
     *
     * Can only be used when `event_type` is `"crafting-finished"`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CraftItemTipTrigger.html#consecutive Online documentation}
     */
    consecutive?: bool
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CraftItemTipTrigger.html#count Online documentation}
     */
    count?: uint32
  }
  /**
   * If no tint is specified, the crafting machine falls back to {@link CraftingMachinePrototype#default_recipe_tint CraftingMachinePrototype::default_recipe_tint}.
   * @see RecipePrototype.crafting_machine_tint
   * @see {@link https://lua-api.factorio.com/1.1.110/prototypes/RecipePrototype.html#crafting_machine_tint Online documentation}
   */
  export interface CraftingMachineTint {
    /**
     * **Default:** `no tint`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CraftingMachineTint.html#primary Online documentation}
     */
    primary?: Color
    /**
     * **Default:** `no tint`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CraftingMachineTint.html#secondary Online documentation}
     */
    secondary?: Color
    /**
     * **Default:** `no tint`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CraftingMachineTint.html#tertiary Online documentation}
     */
    tertiary?: Color
    /**
     * **Default:** `no tint`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CraftingMachineTint.html#quaternary Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateDecorativesTriggerEffectItem.html#spawn_max_radius Online documentation}
     */
    spawn_max_radius: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateDecorativesTriggerEffectItem.html#spawn_min Online documentation}
     */
    spawn_min?: uint16
    /**
     * **Default:** `0.5`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateDecorativesTriggerEffectItem.html#radius_curve Online documentation}
     */
    radius_curve?: float
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateDecorativesTriggerEffectItem.html#apply_projection Online documentation}
     */
    apply_projection?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateDecorativesTriggerEffectItem.html#spread_evenly Online documentation}
     */
    spread_evenly?: bool
  }
  export interface CreateEntityTriggerEffectItem extends TriggerEffectItem {
    readonly type: "create-entity"
    /**
     * The name of the entity that should be created.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateEntityTriggerEffectItem.html#entity_name Online documentation}
     */
    entity_name: EntityID
    offset_deviation?: BoundingBox
    /**
     * **Default:** `false`
     *
     * If `true`, the {@link import("factorio:runtime").on_trigger_created_entity on_trigger_created_entity} event will be raised.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateEntityTriggerEffectItem.html#trigger_created_entity Online documentation}
     */
    trigger_created_entity?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateEntityTriggerEffectItem.html#check_buildability Online documentation}
     */
    check_buildability?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateEntityTriggerEffectItem.html#show_in_tooltip Online documentation}
     */
    show_in_tooltip?: bool
    /**
     * Entity creation will not occur if any tile matches the collision condition. Defaults to no collisions.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateEntityTriggerEffectItem.html#tile_collision_mask Online documentation}
     */
    tile_collision_mask?: CollisionMask
    /**
     * If multiple offsets are specified, multiple entities are created. The projectile of the {@linkplain https://wiki.factorio.com/Distractor_capsule Distractor capsule} uses this property to spawn three Distractors.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateEntityTriggerEffectItem.html#offsets Online documentation}
     */
    offsets?: Vector | readonly Vector[]
  }
  export interface CreateExplosionTriggerEffectItem extends Omit<CreateEntityTriggerEffectItem, "type"> {
    readonly type: "create-explosion"
    /**
     * **Default:** `-1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateExplosionTriggerEffectItem.html#max_movement_distance Online documentation}
     */
    max_movement_distance?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateExplosionTriggerEffectItem.html#max_movement_distance_deviation Online documentation}
     */
    max_movement_distance_deviation?: float
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateExplosionTriggerEffectItem.html#inherit_movement_distance_from_projectile Online documentation}
     */
    inherit_movement_distance_from_projectile?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateExplosionTriggerEffectItem.html#cycle_while_moving Online documentation}
     */
    cycle_while_moving?: bool
  }
  export interface CreateFireTriggerEffectItem extends Omit<CreateEntityTriggerEffectItem, "type"> {
    readonly type: "create-fire"
    /**
     * **Default:** `MAX_UINT8`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateFireTriggerEffectItem.html#initial_ground_flame_count Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateParticleTriggerEffectItem.html#show_in_tooltip Online documentation}
     */
    show_in_tooltip?: bool
    tile_collision_mask?: CollisionMask
    offsets?: Vector | readonly Vector[]
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateParticleTriggerEffectItem.html#initial_height_deviation Online documentation}
     */
    initial_height_deviation?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateParticleTriggerEffectItem.html#initial_vertical_speed Online documentation}
     */
    initial_vertical_speed?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateParticleTriggerEffectItem.html#initial_vertical_speed_deviation Online documentation}
     */
    initial_vertical_speed_deviation?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateParticleTriggerEffectItem.html#speed_from_center Online documentation}
     */
    speed_from_center?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateParticleTriggerEffectItem.html#speed_from_center_deviation Online documentation}
     */
    speed_from_center_deviation?: float
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateParticleTriggerEffectItem.html#frame_speed Online documentation}
     */
    frame_speed?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateParticleTriggerEffectItem.html#frame_speed_deviation Online documentation}
     */
    frame_speed_deviation?: float
    /**
     * **Default:** `0`
     *
     * Silently capped to a maximum of 100.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateParticleTriggerEffectItem.html#tail_length Online documentation}
     */
    tail_length?: uint8
    /**
     * **Default:** `0`
     *
     * Silently capped to a maximum of 100.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateParticleTriggerEffectItem.html#tail_length_deviation Online documentation}
     */
    tail_length_deviation?: uint8
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateParticleTriggerEffectItem.html#tail_width Online documentation}
     */
    tail_width?: float
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateParticleTriggerEffectItem.html#rotate_offsets Online documentation}
     */
    rotate_offsets?: bool
  }
  export interface CreateSmokeTriggerEffectItem extends Omit<CreateEntityTriggerEffectItem, "type"> {
    readonly type: "create-smoke"
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateSmokeTriggerEffectItem.html#initial_height Online documentation}
     */
    initial_height?: float
    speed?: Vector
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateSmokeTriggerEffectItem.html#speed_multiplier Online documentation}
     */
    speed_multiplier?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateSmokeTriggerEffectItem.html#speed_multiplier_deviation Online documentation}
     */
    speed_multiplier_deviation?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateSmokeTriggerEffectItem.html#starting_frame Online documentation}
     */
    starting_frame?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateSmokeTriggerEffectItem.html#starting_frame_deviation Online documentation}
     */
    starting_frame_deviation?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateSmokeTriggerEffectItem.html#starting_frame_speed Online documentation}
     */
    starting_frame_speed?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateSmokeTriggerEffectItem.html#starting_frame_speed_deviation Online documentation}
     */
    starting_frame_speed_deviation?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateSmokeTriggerEffectItem.html#speed_from_center Online documentation}
     */
    speed_from_center?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateSmokeTriggerEffectItem.html#speed_from_center_deviation Online documentation}
     */
    speed_from_center_deviation?: float
  }
  export interface CreateStickerTriggerEffectItem extends TriggerEffectItem {
    readonly type: "create-sticker"
    /**
     * Name of a {@link StickerPrototype} that should be created.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateStickerTriggerEffectItem.html#sticker Online documentation}
     */
    sticker: EntityID
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateStickerTriggerEffectItem.html#show_in_tooltip Online documentation}
     */
    show_in_tooltip?: bool
    /**
     * **Default:** `false`
     *
     * If `true`, {@link import("factorio:runtime").on_trigger_created_entity on_trigger_created_entity} will be triggered when the sticker is created.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateStickerTriggerEffectItem.html#trigger_created_entity Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateTrivialSmokeEffectItem.html#initial_height Online documentation}
     */
    initial_height?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateTrivialSmokeEffectItem.html#max_radius Online documentation}
     */
    max_radius?: float
    speed?: Vector
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateTrivialSmokeEffectItem.html#speed_multiplier Online documentation}
     */
    speed_multiplier?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateTrivialSmokeEffectItem.html#speed_multiplier_deviation Online documentation}
     */
    speed_multiplier_deviation?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateTrivialSmokeEffectItem.html#starting_frame Online documentation}
     */
    starting_frame?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateTrivialSmokeEffectItem.html#starting_frame_deviation Online documentation}
     */
    starting_frame_deviation?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateTrivialSmokeEffectItem.html#starting_frame_speed Online documentation}
     */
    starting_frame_speed?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateTrivialSmokeEffectItem.html#starting_frame_speed_deviation Online documentation}
     */
    starting_frame_speed_deviation?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateTrivialSmokeEffectItem.html#speed_from_center Online documentation}
     */
    speed_from_center?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CreateTrivialSmokeEffectItem.html#speed_from_center_deviation Online documentation}
     */
    speed_from_center_deviation?: float
  }
  /**
   * @see UtilitySprites.cursor_box
   * @see {@link https://lua-api.factorio.com/1.1.110/prototypes/UtilitySprites.html#cursor_box Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/CursorBoxType.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/CyclicSound.html Online documentation}
   */
  export interface CyclicSound {
    /**
     * Played once at the beginning of the overall cyclic sound.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CyclicSound.html#begin_sound Online documentation}
     */
    begin_sound?: Sound
    /**
     * Played repeatedly after the begin_sound was played.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CyclicSound.html#middle_sound Online documentation}
     */
    middle_sound?: Sound
    /**
     * Played once when the overall cyclic sound is requested to end.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/CyclicSound.html#end_sound Online documentation}
     */
    end_sound?: Sound
  }
  /**
   * A property type, NOT a prototype. Used to specify what type of damage and how much damage something deals.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/DamagePrototype.html Online documentation}
   */
  export interface DamagePrototype {
    amount: float
    /**
     * The type of damage. See {@linkplain https://wiki.factorio.com/Data.raw#damage-type here} for a list of built-in types, and {@link DamageType} for creating custom types.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/DamagePrototype.html#type Online documentation}
     */
    readonly type: DamageTypeID
  }
  export interface DamageTriggerEffectItem extends TriggerEffectItem {
    readonly type: "damage"
    damage: DamagePrototype
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/DamageTriggerEffectItem.html#apply_damage_to_trees Online documentation}
     */
    apply_damage_to_trees?: bool
    /**
     * **Default:** `false`
     *
     * If `true`, no corpse for killed entities will be created.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/DamageTriggerEffectItem.html#vaporize Online documentation}
     */
    vaporize?: bool
    /**
     * **Default:** `MAX_UINT16`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/DamageTriggerEffectItem.html#lower_distance_threshold Online documentation}
     */
    lower_distance_threshold?: uint16
    /**
     * **Default:** `MAX_UINT16`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/DamageTriggerEffectItem.html#upper_distance_threshold Online documentation}
     */
    upper_distance_threshold?: uint16
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/DamageTriggerEffectItem.html#lower_damage_modifier Online documentation}
     */
    lower_damage_modifier?: float
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/DamageTriggerEffectItem.html#upper_damage_modifier Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/DamageTypeFilters.html Online documentation}
   */
  export type DamageTypeFilters =
    | {
        /**
         * The damage types to filter for.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/DamageTypeFilters.html#types Online documentation}
         */
        types: DamageTypeID | readonly DamageTypeID[]
        /**
         * **Default:** `false`
         *
         * Whether this is a whitelist or a blacklist of damage types. Defaults to being a blacklist.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/DamageTypeFilters.html#whitelist Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/DamageTypeID.html Online documentation}
   */
  export type DamageTypeID = string
  /**
   * The data table is read by the game to load all prototypes.
   *
   * At the end of the prototype stage, the data table is loaded by the game engine and the format of the prototypes is validated. Any extra properties are ignored. See {@linkplain https://lua-api.factorio.com/1.1.110/data-lifecycle.html Data Lifecycle} for more information.
   *
   * The data table and its properties are defined in Lua, so their source code can be viewed in {@linkplain https://github.com/wube/factorio-data/blob/master/core/lualib/dataloader.lua dataloader.lua}.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/Data.html Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/Data.html#raw Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/Data.html#extend Online documentation}
     */
    extend<P extends AnyPrototype>(prototypes: readonly P[]): void
    /**
     * Set by the game based on whether the demo or retail version is running. Should not be used by mods.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/Data.html#is_demo Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/DaytimeColorLookupTable.html Online documentation}
   */
  export type DaytimeColorLookupTable = readonly (readonly [double, FileName | "identity"])[]
  export interface DeconstructionTimeToLiveModifier extends SimpleModifier {
    readonly type: "deconstruction-time-to-live"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/DeconstructionTimeToLiveModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  /**
   * The name of a {@link DecorativePrototype}.
   * @example
   * "dark-mud-decal"
   * @example
   * "red-pita"
   * @see {@link https://lua-api.factorio.com/1.1.110/types/DecorativeID.html Online documentation}
   */
  export type DecorativeID = string
  export interface DefaultRecipeTint {
    /**
     * **Default:** ``{1, 1, 1, 1}``
     * @see {@link https://lua-api.factorio.com/1.1.110/types/DefaultRecipeTint.html#primary Online documentation}
     */
    primary?: Color
    /**
     * **Default:** ``{1, 1, 1, 1}``
     * @see {@link https://lua-api.factorio.com/1.1.110/types/DefaultRecipeTint.html#secondary Online documentation}
     */
    secondary?: Color
    /**
     * **Default:** ``{1, 1, 1, 1}``
     * @see {@link https://lua-api.factorio.com/1.1.110/types/DefaultRecipeTint.html#tertiary Online documentation}
     */
    tertiary?: Color
    /**
     * **Default:** ``{1, 1, 1, 1}``
     * @see {@link https://lua-api.factorio.com/1.1.110/types/DefaultRecipeTint.html#quaternary Online documentation}
     */
    quaternary?: Color
  }
  /**
   * This trigger is considered fulfilled when the {@link TipsAndTricksItem#dependencies TipsAndTricksItem::dependencies} are fulfilled.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/DependenciesMetTipTrigger.html Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/DestroyCliffsCapsuleAction.html#timeout Online documentation}
     */
    timeout?: uint32
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/DestroyCliffsCapsuleAction.html#play_sound_on_failure Online documentation}
     */
    play_sound_on_failure?: bool
    /**
     * **Default:** `true`
     *
     * Whether using the capsule consumes an item from the stack.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/DestroyCliffsCapsuleAction.html#uses_stack Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/DestroyDecorativesTriggerEffectItem.html#from_render_layer Online documentation}
     */
    from_render_layer?: RenderLayer
    /**
     * **Default:** `last layer`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/DestroyDecorativesTriggerEffectItem.html#to_render_layer Online documentation}
     */
    to_render_layer?: RenderLayer
    /**
     * **Default:** `false`
     *
     * Soft decoratives are those where {@link DecorativePrototype#grows_through_rail_path DecorativePrototype::grows_through_rail_path} is `true`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/DestroyDecorativesTriggerEffectItem.html#include_soft_decoratives Online documentation}
     */
    include_soft_decoratives?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/DestroyDecorativesTriggerEffectItem.html#include_decals Online documentation}
     */
    include_decals?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/DestroyDecorativesTriggerEffectItem.html#invoke_decorative_trigger Online documentation}
     */
    invoke_decorative_trigger?: bool
    /**
     * **Default:** `false`
     *
     * If `true`, only decoratives with a {@link DecorativePrototype#trigger_effect DecorativePrototype::trigger_effect} will be destroyed.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/DestroyDecorativesTriggerEffectItem.html#decoratives_with_trigger_only Online documentation}
     */
    decoratives_with_trigger_only?: bool
  }
  export interface DifficultySettings {
    /**
     * A {@link defines.difficulty_settings.recipe_difficulty}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/DifficultySettings.html#recipe_difficulty Online documentation}
     */
    recipe_difficulty: uint8
    /**
     * A {@link defines.difficulty_settings.technology_difficulty}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/DifficultySettings.html#technology_difficulty Online documentation}
     */
    technology_difficulty: uint8
    /**
     * **Default:** `1`
     *
     * Must be >= 0.001 and <= 1000.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/DifficultySettings.html#technology_price_multiplier Online documentation}
     */
    technology_price_multiplier?: double
    /**
     * **Default:** `"after-victory"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/DifficultySettings.html#research_queue_setting Online documentation}
     */
    research_queue_setting?: "always" | "after-victory" | "never"
  }
  export interface DirectTriggerItem extends TriggerItem {
    readonly type: "direct"
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/DirectTriggerItem.html#filter_enabled Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/Direction.html Online documentation}
   */
  export type Direction = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
  /**
   * @see AnimatedVector.direction_shift
   * @see {@link https://lua-api.factorio.com/1.1.110/types/AnimatedVector.html#direction_shift Online documentation}
   */
  export interface DirectionShift {
    north?: Vector
    east?: Vector
    south?: Vector
    west?: Vector
  }
  /**
   * @see NoiseFunctionDistanceFromNearestPoint.arguments
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionDistanceFromNearestPoint.html#arguments Online documentation}
   */
  export interface DistanceFromNearestPointArguments {
    x: NoiseNumber
    y: NoiseNumber
    points: NoiseArray
    /**
     * **Default:** `max double`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/DistanceFromNearestPointArguments.html#maximum_distance Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/Effect.html Online documentation}
   */
  export interface Effect {
    /**
     * Multiplier to energy used during operation (not idle/drain use). The minimum possible sum is -80%.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/Effect.html#consumption Online documentation}
     */
    consumption?: EffectValue
    /**
     * Modifier to crafting speed, research speed, etc. The minimum possible sum is -80%.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/Effect.html#speed Online documentation}
     */
    speed?: EffectValue
    /**
     * Multiplied against work completed, adds to the bonus results of operating. E.g. an extra crafted recipe or immediate research bonus. The minimum possible sum is 0%.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/Effect.html#productivity Online documentation}
     */
    productivity?: EffectValue
    /**
     * Multiplier to the pollution factor of an entity's pollution during use. The minimum possible sum is -80%.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/Effect.html#pollution Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/EffectTypeLimitation.html Online documentation}
   */
  export type EffectTypeLimitation =
    | ("speed" | "productivity" | "consumption" | "pollution")
    | readonly ("speed" | "productivity" | "consumption" | "pollution")[]
  export interface EffectValue {
    /**
     * **Default:** `0`
     *
     * Precision is ignored beyond two decimals - `0.567` results in `0.56` and means 56% etc. Values can range from `-327.68` to `327.67`. Numbers outside of this range will wrap around.
     * @example
     * bonus = 0.07 -- 7% bonus
     * @see {@link https://lua-api.factorio.com/1.1.110/types/EffectValue.html#bonus Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/ElectricEnergySource.html Online documentation}
   */
  export interface ElectricEnergySource extends BaseEnergySource {
    /**
     * This is only loaded, and mandatory if the energy source can be loaded as multiple energy source types.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ElectricEnergySource.html#type Online documentation}
     */
    readonly type?: "electric"
    /**
     * How much energy this entity can hold.
     * @example
     * buffer_capacity = "5MJ"
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ElectricEnergySource.html#buffer_capacity Online documentation}
     */
    buffer_capacity?: Energy
    /**
     * @example
     * usage_priority = "secondary-input"
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ElectricEnergySource.html#usage_priority Online documentation}
     */
    usage_priority: ElectricUsagePriority
    /**
     * **Default:** `Max `double` value`
     *
     * The rate at which energy can be taken, from the network, to refill the energy buffer. `0` means no transfer.
     * @example
     * input_flow_limit = "300kW"
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ElectricEnergySource.html#input_flow_limit Online documentation}
     */
    input_flow_limit?: Energy
    /**
     * **Default:** `Max `double` value`
     *
     * The rate at which energy can be provided, to the network, from the energy buffer. `0` means no transfer.
     * @example
     * output_flow_limit = "300kW"
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ElectricEnergySource.html#output_flow_limit Online documentation}
     */
    output_flow_limit?: Energy
    /**
     * How much energy (per second) will be continuously removed from the energy buffer. In-game, this is shown in the tooltip as "Min. {@link import("factorio:runtime").LuaEntity#active Minimum] Consumption". Applied as a constant consumption-per-tick, even when the entity has the property [active} set to `false`.
     * @example
     * drain = "1kW"
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ElectricEnergySource.html#drain Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/ElectricUsagePriority.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSet.html Online documentation}
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
   * ![How the sprites are laid out graphically when using a composition type element image set layer.](https://lua-api.factorio.com/1.1.110/static/images/ElementImageSetLayer_properties.png)
   *
   * ![How the sprites are stretched when using a composition type element image set layer.](https://lua-api.factorio.com/1.1.110/static/images/ElementImageSetLayer_stretching.png)
   * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html Online documentation}
   */
  export type ElementImageSetLayer =
    | {
        /**
         * **Default:** `"inner"`
         *
         * Defines whether the border should be drawn inside the widget, which affects the padding and content size of the widget, or outside of the widget which doesn't affect size. The outer draw type is most commonly used for shadows, glows and insets.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#draw_type Online documentation}
         */
        draw_type?: "inner" | "outer"
        /**
         * **Default:** ``"none"` if this has no other properties, otherwise `"composition"``
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#type Online documentation}
         */
        readonly type?: "none" | "composition"
        /**
         * **Default:** ``{r=1, g=1, b=1, a=1}``
         *
         * Only loaded if `type` is `"composition"`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#tint Online documentation}
         */
        tint?: Color
        /**
         * Only loaded if `type` is `"composition"`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#center Online documentation}
         */
        center?: Sprite
        /**
         * Only loaded if `type` is `"composition"`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#left Online documentation}
         */
        left?: Sprite
        /**
         * Only loaded if `type` is `"composition"`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#left_top Online documentation}
         */
        left_top?: Sprite
        /**
         * Only loaded if `type` is `"composition"`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#left_bottom Online documentation}
         */
        left_bottom?: Sprite
        /**
         * Only loaded if `type` is `"composition"`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#right Online documentation}
         */
        right?: Sprite
        /**
         * Only loaded if `type` is `"composition"`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#right_top Online documentation}
         */
        right_top?: Sprite
        /**
         * Only loaded if `type` is `"composition"`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#right_bottom Online documentation}
         */
        right_bottom?: Sprite
        /**
         * Only loaded if `type` is `"composition"`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#top Online documentation}
         */
        top?: Sprite
        /**
         * Only loaded if `type` is `"composition"`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#bottom Online documentation}
         */
        bottom?: Sprite
        /**
         * If this is a tuple, the first member of the tuple is width and the second is height. Otherwise the size is both width and height.
         *
         * Only loaded if `type` is `"composition"`.
         *
         * ![In base game, the corner size is 8 and the sides are 1px long and 8px wide.](https://lua-api.factorio.com/1.1.110/static/images/ElementImageSetLayer_base_sizes.png)
         * @example
         * {
         *   -- How an ElementImageSet is loaded which has only one layer, which uses the corner_size shown in the diagram
         *   base = {position = {0, 17}, corner_size = 8}
         * }
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#corner_size Online documentation}
         */
        corner_size?: uint16 | readonly [uint16, uint16]
        /**
         * **Default:** `The `default_tileset` set in GuiStyle`
         *
         * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#filename Online documentation}
         */
        filename?: FileName
        /**
         * Mandatory if `corner_size` is defined. Only loaded if `type` is `"composition"`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#position Online documentation}
         */
        position?: MapPosition
        /**
         * **Default:** `true`
         *
         * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#load_in_minimal_mode Online documentation}
         */
        load_in_minimal_mode?: bool
        /**
         * **Default:** `1`
         *
         * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#top_width Online documentation}
         */
        top_width?: SpriteSizeType
        /**
         * **Default:** `1`
         *
         * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#bottom_width Online documentation}
         */
        bottom_width?: SpriteSizeType
        /**
         * **Default:** `1`
         *
         * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#left_height Online documentation}
         */
        left_height?: SpriteSizeType
        /**
         * **Default:** `1`
         *
         * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#right_height Online documentation}
         */
        right_height?: SpriteSizeType
        /**
         * **Default:** `1`
         *
         * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#center_width Online documentation}
         */
        center_width?: SpriteSizeType
        /**
         * **Default:** `1`
         *
         * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#center_height Online documentation}
         */
        center_height?: SpriteSizeType
        /**
         * **Default:** `1`
         *
         * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#scale Online documentation}
         */
        scale?: double
        /**
         * Only loaded if `type` is `"composition"`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#top_border Online documentation}
         */
        top_border?: int32
        /**
         * Only loaded if `type` is `"composition"`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#right_border Online documentation}
         */
        right_border?: int32
        /**
         * Only loaded if `type` is `"composition"`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#bottom_border Online documentation}
         */
        bottom_border?: int32
        /**
         * Only loaded if `type` is `"composition"`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#left_border Online documentation}
         */
        left_border?: int32
        /**
         * Sets `top_border`, `right_border`, `bottom_border` and `left_border`.
         *
         * Only loaded if `corner_size` is not defined. Only loaded if `type` is `"composition"`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#border Online documentation}
         */
        border?: int32
        /**
         * **Default:** `true`
         *
         * Only loaded if `type` is `"composition"`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#stretch_monolith_image_to_size Online documentation}
         */
        stretch_monolith_image_to_size?: bool
        /**
         * **Default:** `false`
         *
         * Tiling is used to make a side (not corner) texture repeat instead of being stretched.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#left_tiling Online documentation}
         */
        left_tiling?: bool
        /**
         * **Default:** `false`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#right_tiling Online documentation}
         */
        right_tiling?: bool
        /**
         * **Default:** `false`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#top_tiling Online documentation}
         */
        top_tiling?: bool
        /**
         * **Default:** `false`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#bottom_tiling Online documentation}
         */
        bottom_tiling?: bool
        /**
         * **Default:** `false`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#center_tiling_vertical Online documentation}
         */
        center_tiling_vertical?: bool
        /**
         * **Default:** `false`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#center_tiling_horizontal Online documentation}
         */
        center_tiling_horizontal?: bool
        /**
         * **Default:** `0`
         *
         * Overall tiling is used to make the overall texture repeat instead of being stretched.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#overall_tiling_horizontal_size Online documentation}
         */
        overall_tiling_horizontal_size?: uint16
        /**
         * **Default:** `0`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#overall_tiling_horizontal_spacing Online documentation}
         */
        overall_tiling_horizontal_spacing?: uint16
        /**
         * **Default:** `0`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#overall_tiling_horizontal_padding Online documentation}
         */
        overall_tiling_horizontal_padding?: uint16
        /**
         * **Default:** `0`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#overall_tiling_vertical_size Online documentation}
         */
        overall_tiling_vertical_size?: uint16
        /**
         * **Default:** `0`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#overall_tiling_vertical_spacing Online documentation}
         */
        overall_tiling_vertical_spacing?: uint16
        /**
         * **Default:** `0`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#overall_tiling_vertical_padding Online documentation}
         */
        overall_tiling_vertical_padding?: uint16
        custom_horizontal_tiling_sizes?: readonly uint32[]
        /**
         * **Default:** `1`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#opacity Online documentation}
         */
        opacity?: double
        /**
         * **Default:** `false`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#background_blur Online documentation}
         */
        background_blur?: bool
        /**
         * **Default:** ``4` if `background_blur` is `true``
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#background_blur_sigma Online documentation}
         */
        background_blur_sigma?: float
        /**
         * **Default:** `0`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#top_outer_border_shift Online documentation}
         */
        top_outer_border_shift?: int32
        /**
         * **Default:** `0`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#bottom_outer_border_shift Online documentation}
         */
        bottom_outer_border_shift?: int32
        /**
         * **Default:** `0`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#right_outer_border_shift Online documentation}
         */
        right_outer_border_shift?: int32
        /**
         * **Default:** `0`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ElementImageSetLayer.html#left_outer_border_shift Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/EnemyEvolutionSettings.html#time_factor Online documentation}
     */
    time_factor: double
    /**
     * Percentual increase in the evolution factor for every destroyed spawner
     * @see {@link https://lua-api.factorio.com/1.1.110/types/EnemyEvolutionSettings.html#destroy_factor Online documentation}
     */
    destroy_factor: double
    /**
     * Percentual increase in the evolution factor for 1 pollution unit
     * @see {@link https://lua-api.factorio.com/1.1.110/types/EnemyEvolutionSettings.html#pollution_factor Online documentation}
     */
    pollution_factor: double
  }
  export interface EnemyExpansionSettings {
    enabled: bool
    /**
     * Distance in chunks from the furthest base around. This prevents expansions from reaching too far into the player's territory.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/EnemyExpansionSettings.html#max_expansion_distance Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/EnemyExpansionSettings.html#max_colliding_tiles_coefficient Online documentation}
     */
    max_colliding_tiles_coefficient: double
    /**
     * Size of the group that goes to build new base (the game interpolates between min size and max size based on evolution factor).
     * @see {@link https://lua-api.factorio.com/1.1.110/types/EnemyExpansionSettings.html#settler_group_min_size Online documentation}
     */
    settler_group_min_size: uint32
    settler_group_max_size: uint32
    /**
     * Ticks to expand to a single position for a base is used. Cooldown is calculated as follows: `cooldown = lerp(max_expansion_cooldown, min_expansion_cooldown, -e^2 + 2 * e)` where `lerp` is the linear interpolation function, and e is the current evolution factor.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/EnemyExpansionSettings.html#min_expansion_cooldown Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/Energy.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/EnergySource.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/EntityID.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/EntityPrototypeFlags.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/prototypes/UtilityConstants.html#entity_renderer_search_box_limits Online documentation}
   */
  export interface EntityRendererSearchBoxLimits {
    /**
     * Min value 6, max value 15. Min value 6 to compensate for shadows.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/EntityRendererSearchBoxLimits.html#left Online documentation}
     */
    left: uint8
    /**
     * Min value 3, max value 15.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/EntityRendererSearchBoxLimits.html#top Online documentation}
     */
    top: uint8
    /**
     * Min value 3, max value 15.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/EntityRendererSearchBoxLimits.html#right Online documentation}
     */
    right: uint8
    /**
     * Min value 4, max value 15. Min value 4 to compensate for tall entities like electric poles.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/EntityRendererSearchBoxLimits.html#bottom Online documentation}
     */
    bottom: uint8
  }
  export interface EntityTransferTipTrigger {
    readonly type: "entity-transfer"
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/EntityTransferTipTrigger.html#count Online documentation}
     */
    count?: uint32
    /**
     * **Default:** `any transfer`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/EntityTransferTipTrigger.html#transfer Online documentation}
     */
    transfer?: "in" | "out"
  }
  /**
   * The name of an {@link EquipmentCategory}.
   * @example
   * "armor"
   * @see {@link https://lua-api.factorio.com/1.1.110/types/EquipmentCategoryID.html Online documentation}
   */
  export type EquipmentCategoryID = string
  /**
   * The name of an {@link EquipmentGridPrototype}.
   * @example
   * "small-equipment-grid"
   * @example
   * "spidertron-equipment-grid"
   * @see {@link https://lua-api.factorio.com/1.1.110/types/EquipmentGridID.html Online documentation}
   */
  export type EquipmentGridID = string
  /**
   * The name of an {@link EquipmentPrototype}.
   * @example
   * "fusion-reactor-equipment"
   * @example
   * "exoskeleton-equipment"
   * @see {@link https://lua-api.factorio.com/1.1.110/types/EquipmentID.html Online documentation}
   */
  export type EquipmentID = string
  /**
   * The shape and dimensions of an equipment module.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/EquipmentShape.html Online documentation}
   */
  export interface EquipmentShape {
    width: uint32
    height: uint32
    /**
     * The shape. When using "manual", `points` must be defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/EquipmentShape.html#type Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/EquipmentShape.html#points Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionFactorioBasisNoise.html#arguments Online documentation}
   */
  export interface FactorioBasisNoiseArguments {
    x: NoiseNumber
    y: NoiseNumber
    /**
     * Integer between 0 and 4 294 967 295 (inclusive) used to populate the backing random noise.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FactorioBasisNoiseArguments.html#seed0 Online documentation}
     */
    seed0: ConstantNoiseNumber
    /**
     * Integer between 0 and 255 (inclusive) used to provide extra randomness when sampling.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FactorioBasisNoiseArguments.html#seed1 Online documentation}
     */
    seed1: ConstantNoiseNumber
    /**
     * **Default:** `1`
     *
     * `x` and `y` will be multiplied by this value before sampling.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FactorioBasisNoiseArguments.html#input_scale Online documentation}
     */
    input_scale?: ConstantNoiseNumber
    /**
     * **Default:** `1`
     *
     * The output will be multiplied by this value before returning.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FactorioBasisNoiseArguments.html#output_scale Online documentation}
     */
    output_scale?: ConstantNoiseNumber
  }
  /**
   * @see NoiseFunctionFactorioMultioctaveNoise.arguments
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionFactorioMultioctaveNoise.html#arguments Online documentation}
   */
  export interface FactorioMultioctaveNoiseArguments {
    x: NoiseNumber
    y: NoiseNumber
    /**
     * How strong is each layer compared to the next larger one.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FactorioMultioctaveNoiseArguments.html#persistence Online documentation}
     */
    persistence: ConstantNoiseNumber
    /**
     * Integer between 0 and 4 294 967 295 (inclusive) used to populate the backing random noise.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FactorioMultioctaveNoiseArguments.html#seed0 Online documentation}
     */
    seed0: ConstantNoiseNumber
    /**
     * Integer between 0 and 255 (inclusive) used to provide extra randomness when sampling.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FactorioMultioctaveNoiseArguments.html#seed1 Online documentation}
     */
    seed1: ConstantNoiseNumber
    /**
     * **Default:** `1`
     *
     * `x` and `y` will be multiplied by this value before sampling.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FactorioMultioctaveNoiseArguments.html#input_scale Online documentation}
     */
    input_scale?: ConstantNoiseNumber
    /**
     * **Default:** `1`
     *
     * The output will be multiplied by this value before returning.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FactorioMultioctaveNoiseArguments.html#output_scale Online documentation}
     */
    output_scale?: ConstantNoiseNumber
    /**
     * How many layers of noise at different scales to sum.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FactorioMultioctaveNoiseArguments.html#octaves Online documentation}
     */
    octaves: ConstantNoiseNumber
  }
  /**
   * @see NoiseFunctionFactorioQuickMultioctaveNoise.arguments
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionFactorioQuickMultioctaveNoise.html#arguments Online documentation}
   */
  export interface FactorioQuickMultioctaveNoiseArguments {
    x: NoiseNumber
    y: NoiseNumber
    seed0: ConstantNoiseNumber
    seed1: ConstantNoiseNumber
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FactorioQuickMultioctaveNoiseArguments.html#input_scale Online documentation}
     */
    input_scale?: ConstantNoiseNumber
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FactorioQuickMultioctaveNoiseArguments.html#output_scale Online documentation}
     */
    output_scale?: ConstantNoiseNumber
    octaves: ConstantNoiseNumber
    /**
     * **Default:** `0.5`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FactorioQuickMultioctaveNoiseArguments.html#octave_input_scale_multiplier Online documentation}
     */
    octave_input_scale_multiplier?: ConstantNoiseNumber
    /**
     * **Default:** `2`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FactorioQuickMultioctaveNoiseArguments.html#octave_output_scale_multiplier Online documentation}
     */
    octave_output_scale_multiplier?: ConstantNoiseNumber
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FactorioQuickMultioctaveNoiseArguments.html#octave_seed0_shift Online documentation}
     */
    octave_seed0_shift?: ConstantNoiseNumber
  }
  export interface FastBeltBendTipTrigger {
    readonly type: "fast-belt-bend"
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FastBeltBendTipTrigger.html#count Online documentation}
     */
    count?: uint32
  }
  export interface FastReplaceTipTrigger {
    readonly type: "fast-replace"
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FastReplaceTipTrigger.html#count Online documentation}
     */
    count?: uint32
    source?: EntityID
    target?: EntityID
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FastReplaceTipTrigger.html#match_type_only Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/FileName.html Online documentation}
   */
  export type FileName = string
  export interface FlameThrowerExplosionTriggerDelivery extends TriggerDeliveryItem {
    readonly type: "flame-thrower"
    /**
     * Name of a {@link FlameThrowerExplosionPrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FlameThrowerExplosionTriggerDelivery.html#explosion Online documentation}
     */
    explosion: EntityID
    starting_distance: double
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FlameThrowerExplosionTriggerDelivery.html#direction_deviation Online documentation}
     */
    direction_deviation?: double
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FlameThrowerExplosionTriggerDelivery.html#speed_deviation Online documentation}
     */
    speed_deviation?: double
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FlameThrowerExplosionTriggerDelivery.html#starting_frame_fraciton_deviation Online documentation}
     */
    starting_frame_fraciton_deviation?: double
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FlameThrowerExplosionTriggerDelivery.html#projectile_starting_speed Online documentation}
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
   * ![Visual representation of base_area, base_level and height. When all the fluidboxes are connected, the water leaves fluidbox A and flows into the other 3 boxes through fluidbox B until the water level is equal in all boxes.](https://lua-api.factorio.com/1.1.110/static/images/Fluidboxes.png)
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidBox.html Online documentation}
   */
  export interface FluidBox {
    /**
     * Connection points to connect to other fluidboxes. This is also marked as blue arrows in alt mode. Fluid may flow in or out depending on the `type` field of each connection.
     *
     * Connection points may depend on the direction the entity is facing. These connection points cannot share positions with one another or the connection points of another fluid box belonging to the same entity.
     *
     * Can't have more than 255 connections.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidBox.html#pipe_connections Online documentation}
     */
    pipe_connections: readonly PipeConnectionDefinition[]
    /**
     * **Default:** `1`
     *
     * Must be greater than `0`. The total fluid capacity of the fluid box is `base_area × height × 100`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidBox.html#base_area Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidBox.html#base_level Online documentation}
     */
    base_level?: float
    /**
     * **Default:** `1`
     *
     * Must be greater than `0`. The total fluid capacity of the fluid box is `base_area × height × 100`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidBox.html#height Online documentation}
     */
    height?: double
    /**
     * Can be used to specify which fluid is allowed to enter this fluid box. See {@linkplain https://forums.factorio.com/viewtopic.php?f=28&t=46302 here}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidBox.html#filter Online documentation}
     */
    filter?: FluidID
    /**
     * **Default:** `"object"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidBox.html#render_layer Online documentation}
     */
    render_layer?: RenderLayer
    /**
     * **Default:** `false`
     *
     * Hides the blue input/output arrows and icons at each connection point.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidBox.html#hide_connection_info Online documentation}
     */
    hide_connection_info?: bool
    /**
     * The pictures to show when another fluid box connects to this one.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidBox.html#pipe_covers Online documentation}
     */
    pipe_covers?: Sprite4Way
    pipe_picture?: Sprite4Way
    /**
     * The minimum temperature allowed into the fluidbox. Only applied if a `filter` is specified.
     * @example
     * minimum_temperature = 100.0
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidBox.html#minimum_temperature Online documentation}
     */
    minimum_temperature?: double
    /**
     * The maximum temperature allowed into the fluidbox. Only applied if a `filter` is specified.
     * @example
     * maximum_temperature = 1000.0
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidBox.html#maximum_temperature Online documentation}
     */
    maximum_temperature?: double
    /**
     * **Default:** `"none"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidBox.html#production_type Online documentation}
     */
    production_type?: ProductionType
    /**
     * **Default:** `1`
     *
     * Set the secondary draw order for all orientations. Used to determine render order for sprites with the same `render_layer` in the same position. Sprites with a higher `secondary_draw_order` are drawn on top.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidBox.html#secondary_draw_order Online documentation}
     */
    secondary_draw_order?: int8
    /**
     * Set the secondary draw order for each orientation. Used to determine render order for sprites with the same `render_layer` in the same position. Sprites with a higher `secondary_draw_order` are drawn on top.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidBox.html#secondary_draw_orders Online documentation}
     */
    secondary_draw_orders?: FluidBoxSecondaryDrawOrders
  }
  /**
   * @see FluidBox.secondary_draw_orders
   * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidBox.html#secondary_draw_orders Online documentation}
   */
  export interface FluidBoxSecondaryDrawOrders {
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidBoxSecondaryDrawOrders.html#north Online documentation}
     */
    north?: int8
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidBoxSecondaryDrawOrders.html#east Online documentation}
     */
    east?: int8
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidBoxSecondaryDrawOrders.html#south Online documentation}
     */
    south?: int8
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidBoxSecondaryDrawOrders.html#west Online documentation}
     */
    west?: int8
  }
  export interface FluidEnergySource extends BaseEnergySource {
    readonly type: "fluid"
    /**
     * All standard fluid box configurations are acceptable, but the type must be `"input"` or `"input-output"` to function correctly. `scale_fluid_usage = true`, `fluid_usage_per_tick`, or a filter on the fluidbox must be set to be able to calculate the fluid usage of the energy source.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidEnergySource.html#fluid_box Online documentation}
     */
    fluid_box: FluidBox
    smoke?: readonly SmokeSource[]
    light_flicker?: LightFlickeringDefinition
    /**
     * **Default:** `1`
     *
     * `1` means 100% effectivity. Must be greater than `0`. Multiplier of the energy output.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidEnergySource.html#effectivity Online documentation}
     */
    effectivity?: double
    /**
     * **Default:** `false`
     *
     * If set to `true`, the energy source will calculate power based on the fluid's `fuel_value`, else it will calculate based on fluid temperature.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidEnergySource.html#burns_fluid Online documentation}
     */
    burns_fluid?: bool
    /**
     * **Default:** `false`
     *
     * If set to `true`, the energy source will consume as much fluid as required to produce the desired power, otherwise it will consume as much as it is allowed to, wasting any excess.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidEnergySource.html#scale_fluid_usage Online documentation}
     */
    scale_fluid_usage?: bool
    /**
     * **Default:** `true`
     *
     * Property is only used when `burns_fluid` is `true` and the fluid has a {@link FluidPrototype#fuel_value fuel_value} of `0`, or when `burns_fluid` is `false` and the fluid is at its `default_temperature`.
     *
     * In those cases, this property determines whether the fluid should be destroyed, meaning that the fluid is consumed at the rate of `fluid_usage_per_tick`, without producing any power.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidEnergySource.html#destroy_non_fuel_fluid Online documentation}
     */
    destroy_non_fuel_fluid?: bool
    /**
     * **Default:** `0`
     *
     * The number of fluid units the energy source uses per tick. If used with `scale_fluid_usage`, this specifies the maximum. If this value is not set, `scale_energy_usage` is `false` and a fluid box filter is set, the game will attempt to calculate this value from the fluid box filter's fluid's `fuel_value` or `heat_capacity` and the entity's `energy_usage`. If `burns_fluid` is `false`, `maximum_temperature` will also be used. If the attempt of the game to calculate this value fails (`scale_energy_usage` is `false` and a fluid box filter is set), then `scale_energy_usage` will be forced to `true`, to prevent the energy source from being an infinite fluid sink. More context {@linkplain https://forums.factorio.com/90613 on the forums}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidEnergySource.html#fluid_usage_per_tick Online documentation}
     */
    fluid_usage_per_tick?: double
    /**
     * **Default:** `0`
     *
     * `0` means unlimited maximum temperature. If this is non-zero while `scale_fluid_usage` is `false` and `fluid_usage_per_tick` is not specified, the game will use this value to calculate `fluid_usage_per_tick`. To do that, the filter on the `fluid_box` must be set.
     *
     * Only loaded if `burns_fluid` is `false`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidEnergySource.html#maximum_temperature Online documentation}
     */
    maximum_temperature?: double
  }
  /**
   * The name of a {@link FluidPrototype}.
   * @example
   * "water"
   * @example
   * "lubricant"
   * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidID.html Online documentation}
   */
  export type FluidID = string
  /**
   * A fluid ingredient definition.
   * @example
   * {type="fluid", name="water", amount=50}
   * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidIngredientPrototype.html Online documentation}
   */
  export interface FluidIngredientPrototype {
    readonly type: "fluid"
    /**
     * The name of a {@link FluidPrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidIngredientPrototype.html#name Online documentation}
     */
    name: FluidID
    /**
     * Can not be `<= 0`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidIngredientPrototype.html#amount Online documentation}
     */
    amount: double
    /**
     * Sets the expected temperature of the fluid ingredient.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidIngredientPrototype.html#temperature Online documentation}
     */
    temperature?: double
    /**
     * If `temperature` is not set, this sets the expected minimum temperature of the fluid ingredient.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidIngredientPrototype.html#minimum_temperature Online documentation}
     */
    minimum_temperature?: double
    /**
     * If `temperature` is not set, this sets the expected maximum temperature of the fluid ingredient.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidIngredientPrototype.html#maximum_temperature Online documentation}
     */
    maximum_temperature?: double
    /**
     * **Default:** `0`
     *
     * Amount of this ingredient that should not be included in the fluid consumption statistics. Usually used together with an equal catalyst amount on the "product" of the catalyst in the recipe.
     *
     * If this FluidIngredientPrototype is used in a recipe, the `catalyst_amount` is calculated automatically based on the {@link RecipePrototype#ingredients RecipePrototype::ingredients} and {@link RecipePrototype#results RecipePrototype::results}. See {@linkplain https://factorio.com/blog/post/fff-256 here}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidIngredientPrototype.html#catalyst_amount Online documentation}
     */
    catalyst_amount?: double
    /**
     * **Default:** `0`
     *
     * Used to specify which {@link CraftingMachinePrototype#fluid_boxes CraftingMachinePrototype::fluid_boxes} this ingredient should use. It will use this one fluidbox. The index is 1-based and separate for input and output fluidboxes.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidIngredientPrototype.html#fluidbox_index Online documentation}
     */
    fluidbox_index?: uint32
  }
  /**
   * A fluid product definition.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidProductPrototype.html Online documentation}
   */
  export interface FluidProductPrototype {
    readonly type: "fluid"
    /**
     * The name of a {@link FluidPrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidProductPrototype.html#name Online documentation}
     */
    name: FluidID
    /**
     * Can not be `< 0`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidProductPrototype.html#amount Online documentation}
     */
    amount?: double
    /**
     * Only loaded, and mandatory if `amount` is not defined.
     *
     * Can not be `< 0`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidProductPrototype.html#amount_min Online documentation}
     */
    amount_min?: MaterialAmountType
    /**
     * Only loaded, and mandatory if `amount` is not defined.
     *
     * If set to a number that is less than `amount_min`, the game will use `amount_min` instead.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidProductPrototype.html#amount_max Online documentation}
     */
    amount_max?: MaterialAmountType
    /**
     * **Default:** `1`
     *
     * Value between 0 and 1, `0` for 0% chance and `1` for 100% chance.
     *
     * The effect of probability is no product, or a linear distribution on [min, max]. For a recipe with probability `p`, amount_min `min`, and amount_max `max`, the Expected Value of this product can be expressed as `p * (0.5 * (max + min))`. This is what will be shown in a recipe tooltip. The effect of `catalyst_amount` on the product is not shown.
     *
     * When `amount_min` and `amount_max` are not provided, `amount` applies as min and max. The Expected Value simplifies to `p * amount`, providing `0` product, or `amount` product, on recipe completion.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidProductPrototype.html#probability Online documentation}
     */
    probability?: double
    /**
     * **Default:** `0`
     *
     * Amount that should not be affected by productivity modules (not yielded from bonus production) and should not be included in the fluid production statistics.
     *
     * If this FluidProductPrototype is used in a recipe, the `catalyst_amount` is calculated automatically based on the {@link RecipePrototype#ingredients RecipePrototype::ingredients} and {@link RecipePrototype#results RecipePrototype::results}. See {@linkplain https://factorio.com/blog/post/fff-256 here}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidProductPrototype.html#catalyst_amount Online documentation}
     */
    catalyst_amount?: double
    /**
     * The temperature of the fluid product.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidProductPrototype.html#temperature Online documentation}
     */
    temperature?: double
    /**
     * **Default:** `0`
     *
     * Used to specify which {@link CraftingMachinePrototype#fluid_boxes CraftingMachinePrototype::fluid_boxes} this product should use. It will use this one fluidbox. The index is 1-based and separate for input and output fluidboxes.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidProductPrototype.html#fluidbox_index Online documentation}
     */
    fluidbox_index?: uint32
    /**
     * **Default:** `true`
     *
     * When hovering over a recipe in the crafting menu the recipe tooltip will be shown. An additional item tooltip will be shown for every product, as a separate tooltip, if the item tooltip has a description and/or properties to show and if `show_details_in_recipe_tooltip` is `true`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidProductPrototype.html#show_details_in_recipe_tooltip Online documentation}
     */
    show_details_in_recipe_tooltip?: bool
  }
  /**
   * @see PumpPrototype.fluid_wagon_connector_graphics
   * @see {@link https://lua-api.factorio.com/1.1.110/prototypes/PumpPrototype.html#fluid_wagon_connector_graphics Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FollowerRobotLifetimeModifier.html#infer_icon Online documentation}
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FollowerRobotLifetimeModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface FootprintParticle {
    /**
     * The tiles this footprint particle is shown on when the player walks over them.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FootprintParticle.html#tiles Online documentation}
     */
    tiles: readonly TileID[]
    /**
     * The name of the particle that should be created when the character walks on the defined tiles.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FootprintParticle.html#particle_name Online documentation}
     */
    particle_name?: ParticleID
    /**
     * **Default:** `false`
     *
     * Whether this footprint particle should be the default particle that is used for `tiles` that don't have an associated footprint particle.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FootprintParticle.html#use_as_default Online documentation}
     */
    use_as_default?: bool
  }
  export interface FootstepTriggerEffectItem extends CreateParticleTriggerEffectItem {
    tiles: readonly TileID[]
    /**
     * Can be used to specify multiple CreateParticleTriggerEffectItems. If this property is defined, all properties inherited from CreateParticleTriggerEffectItem are ignored.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FootstepTriggerEffectItem.html#actions Online documentation}
     */
    actions?: readonly CreateParticleTriggerEffectItem[]
    /**
     * **Default:** `false`
     *
     * When `true`, the trigger(s) defined in `actions` are the default triggers for tiles that don't have an associated footstep particle trigger. (ie. don't show up in one of the "tiles" lists).
     * @see {@link https://lua-api.factorio.com/1.1.110/types/FootstepTriggerEffectItem.html#use_as_default Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/FootstepTriggerEffectList.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/ForceCondition.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/FuelCategoryID.html Online documentation}
   */
  export type FuelCategoryID = string
  export interface GameControllerVibrationData {
    /**
     * **Default:** `0`
     *
     * Vibration intensity must be between 0 and 1.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/GameControllerVibrationData.html#low_frequency_vibration_intensity Online documentation}
     */
    low_frequency_vibration_intensity?: float
    /**
     * **Default:** `0`
     *
     * Vibration intensity must be between 0 and 1.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/GameControllerVibrationData.html#high_frequency_vibration_intensity Online documentation}
     */
    high_frequency_vibration_intensity?: float
    /**
     * **Default:** `0`
     *
     * Duration in milliseconds.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/GameControllerVibrationData.html#duration Online documentation}
     */
    duration?: uint32
    /**
     * **Default:** `"character_actions"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/GameControllerVibrationData.html#play_for Online documentation}
     */
    play_for?: PlayFor
  }
  export interface GateOverRailBuildTipTrigger {
    readonly type: "gate-over-rail-build"
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/GateOverRailBuildTipTrigger.html#count Online documentation}
     */
    count?: uint32
  }
  export interface GhostTimeToLiveModifier extends SimpleModifier {
    readonly type: "ghost-time-to-live"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/GhostTimeToLiveModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface GiveItemModifier extends BaseModifier {
    readonly type: "give-item"
    /**
     * **Default:** `false`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/GiveItemModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
    item: ItemID
    /**
     * **Default:** `1`
     *
     * Must be `> 0`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/GiveItemModifier.html#count Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/GroupAttackTipTrigger.html#count Online documentation}
     */
    count?: uint32
  }
  /**
   * @see StreamAttackParameters.gun_center_shift
   * @see {@link https://lua-api.factorio.com/1.1.110/types/StreamAttackParameters.html#gun_center_shift Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/GunSpeedModifier.html#infer_icon Online documentation}
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/GunSpeedModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
    /**
     * Name of the {@link AmmoCategory} that is affected.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/GunSpeedModifier.html#ammo_category Online documentation}
     */
    ammo_category: AmmoCategoryID
    /**
     * Modification value, which will be added to the current gun speed modifier upon researching.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/GunSpeedModifier.html#modifier Online documentation}
     */
    modifier: double
  }
  /**
   * Used to specify heat capacity properties without a {@link HeatEnergySource heat energy source}.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/HeatBuffer.html Online documentation}
   */
  export interface HeatBuffer {
    /**
     * Must be >= `default_temperature`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/HeatBuffer.html#max_temperature Online documentation}
     */
    max_temperature: double
    specific_heat: Energy
    max_transfer: Energy
    /**
     * **Default:** `15`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/HeatBuffer.html#default_temperature Online documentation}
     */
    default_temperature?: double
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/HeatBuffer.html#min_temperature_gradient Online documentation}
     */
    min_temperature_gradient?: double
    /**
     * **Default:** `15`
     *
     * Must be >= `default_temperature` and <= `max_temperature`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/HeatBuffer.html#min_working_temperature Online documentation}
     */
    min_working_temperature?: double
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/HeatBuffer.html#minimum_glow_temperature Online documentation}
     */
    minimum_glow_temperature?: float
    pipe_covers?: Sprite4Way
    heat_pipe_covers?: Sprite4Way
    heat_picture?: Sprite4Way
    heat_glow?: Sprite4Way
    /**
     * May contain up to 32 connections.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/HeatBuffer.html#connections Online documentation}
     */
    connections?: readonly HeatConnection[]
  }
  /**
   * Defines the connections for {@link HeatEnergySource} and {@link HeatBuffer}.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/HeatConnection.html Online documentation}
   */
  export interface HeatConnection {
    /**
     * The location of the heat pipe connection, relative to the center of the entity in the north-facing direction.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/HeatConnection.html#position Online documentation}
     */
    position: MapPosition
    /**
     * The "outward" direction of this heat connection. For a connection to succeed, the other heat connection must face the opposite direction (a south-facing connection needs a north-facing connection to succeed). A connection rotates with the entity.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/HeatConnection.html#direction Online documentation}
     */
    direction: Direction
  }
  export interface HeatEnergySource extends BaseEnergySource {
    readonly type: "heat"
    /**
     * Must be >= `default_temperature`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/HeatEnergySource.html#max_temperature Online documentation}
     */
    max_temperature: double
    specific_heat: Energy
    max_transfer: Energy
    /**
     * **Default:** `15`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/HeatEnergySource.html#default_temperature Online documentation}
     */
    default_temperature?: double
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/HeatEnergySource.html#min_temperature_gradient Online documentation}
     */
    min_temperature_gradient?: double
    /**
     * **Default:** `15`
     *
     * Must be >= `default_temperature` and <= `max_temperature`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/HeatEnergySource.html#min_working_temperature Online documentation}
     */
    min_working_temperature?: double
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/HeatEnergySource.html#minimum_glow_temperature Online documentation}
     */
    minimum_glow_temperature?: float
    pipe_covers?: Sprite4Way
    heat_pipe_covers?: Sprite4Way
    heat_picture?: Sprite4Way
    heat_glow?: Sprite4Way
    /**
     * May contain up to 32 connections.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/HeatEnergySource.html#connections Online documentation}
     */
    connections?: readonly HeatConnection[]
    /**
     * **Default:** `0`
     *
     * Heat energy sources do not support producing pollution.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/HeatEnergySource.html#emissions_per_minute Online documentation}
     */
    emissions_per_minute?: double
  }
  /**
   * ## Union members
   * - `"left"`
   * - `"center"`
   * - `"right"`
   * @see {@link https://lua-api.factorio.com/1.1.110/types/HorizontalAlign.html Online documentation}
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
   * - Only the first icon layer will display a shadow.
   *
   * - When the final icon is displayed with transparency (e.g. a faded out alert), the icon layer overlap may look {@linkplain https://forums.factorio.com/viewtopic.php?p=575844#p575844 undesirable}.
   *
   * - When the final icon is displayed with a shadow (e.g. an item on the ground or on a belt when item shadows are turned on), each icon layer will {@linkplain https://forums.factorio.com/84888 cast a shadow} and the shadow is cast on the layer below it.
   *
   * - The final icon will always be resized in GUI based on the first icon layer's size, but won't be resized when displayed on machines in alt-mode. For example: recipe first icon layer is size 128, scale 1, the icon group will be displayed at resolution /4 to fit the 32px GUI boxes, but will be displayed 4 times as large on buildings.
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/IconData.html Online documentation}
   */
  export interface IconData {
    /**
     * Path to the icon file.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/IconData.html#icon Online documentation}
     */
    icon: FileName
    /**
     * The size of the square icon, in pixels. E.g. `32` for a 32px by 32px icon.
     *
     * Mandatory if `icon_size` is not specified outside of `icons`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/IconData.html#icon_size Online documentation}
     */
    icon_size?: SpriteSizeType
    /**
     * **Default:** ``{r=1, g=1, b=1, a=1}``
     *
     * The tint to apply to the icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/IconData.html#tint Online documentation}
     */
    tint?: Color
    /**
     * **Default:** ``{0, 0}``
     *
     * Used to offset the icon "layer" from the overall icon. The shift is applied from the center (so negative shifts are left and up, respectively). Shift values are based on final size (`icon_size * scale`) of the first icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/IconData.html#shift Online documentation}
     */
    shift?: Vector
    /**
     * Defaults to `32/icon_size` for items and recipes, and `256/icon_size` for technologies.
     *
     * Specifies the scale of the icon on the GUI scale. A scale of `2` means that the icon will be two times bigger on screen (and thus more pixelated).
     * @see {@link https://lua-api.factorio.com/1.1.110/types/IconData.html#scale Online documentation}
     */
    scale?: double
    /**
     * **Default:** `0`
     *
     * Icons of reduced size will be used at decreased scale. If an icon doesn't specify custom mipmaps, the game will automatically generate them.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/IconData.html#icon_mipmaps Online documentation}
     */
    icon_mipmaps?: IconMipMapType
  }
  /**
   * Icons of reduced size will be used at decreased scale. 0 or 1 mipmaps is a single image.
   *
   * If an icon doesn't specify custom mipmaps, the game will automatically generate {@linkplain https://factorio.com/blog/post/fff-291 icon mipmaps} for it.
   *
   * For custom mipmaps, the file must contain half-size images with a geometric-ratio, for each mipmap level. Each next level is aligned to the upper-left corner, with no extra padding. Example sequence: `128x128@(0,0)`, `64x64@(128,0)`, `32x32@(192,0)` is three mipmaps.
   *
   * See {@linkplain https://factorio.com/blog/post/fff-291 here} for more about the visual effects of icon mipmaps.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/IconMipMapType.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/ImageStyleSpecification.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/IngredientPrototype.html Online documentation}
   */
  export type IngredientPrototype = ItemIngredientPrototype | FluidIngredientPrototype
  export interface InsertItemTriggerEffectItem extends TriggerEffectItem {
    readonly type: "insert-item"
    /**
     * Name of the {@link ItemPrototype} that should be created.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/InsertItemTriggerEffectItem.html#item Online documentation}
     */
    item: ItemID
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/InsertItemTriggerEffectItem.html#count Online documentation}
     */
    count?: uint32
  }
  export interface InserterStackSizeBonusModifier extends SimpleModifier {
    readonly type: "inserter-stack-size-bonus"
    /**
     * **Default:** `false`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/InserterStackSizeBonusModifier.html#infer_icon Online documentation}
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/InserterStackSizeBonusModifier.html#use_icon_overlay_constant Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/InterruptibleSound.html#fade_ticks Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/ItemGroupID.html Online documentation}
   */
  export type ItemGroupID = string
  /**
   * The name of an {@link ItemPrototype}.
   * @example
   * "iron-plate"
   * @example
   * "blueprint-book"
   * @see {@link https://lua-api.factorio.com/1.1.110/types/ItemID.html Online documentation}
   */
  export type ItemID = string
  /**
   * An item ingredient definition. It can be specified as a table with named or numbered keys, but not a mix of both. If this is specified as a table with numbered keys then the first value is the item name and the second is the amount.
   * @example
   * {type="item", name="steel-plate", amount=8}
   * @example
   * {"iron-plate", 12}
   * @see {@link https://lua-api.factorio.com/1.1.110/types/ItemIngredientPrototype.html Online documentation}
   */
  export type ItemIngredientPrototype =
    | {
        /**
         * **Default:** `"item"`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ItemIngredientPrototype.html#type Online documentation}
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
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ItemIngredientPrototype.html#catalyst_amount Online documentation}
         */
        catalyst_amount?: uint16
      }
    | readonly [ItemID, uint16]
  /**
   * An item product definition. It can be specified as a table with named or numbered keys, but not a mix of both. If this is specified as a table with numbered keys then the first value is the item name and the second is the amount.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/ItemProductPrototype.html Online documentation}
   */
  export type ItemProductPrototype =
    | {
        /**
         * **Default:** `"item"`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ItemProductPrototype.html#type Online documentation}
         */
        readonly type?: "item"
        /**
         * The name of an {@link ItemPrototype}.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ItemProductPrototype.html#name Online documentation}
         */
        name: ItemID
        amount?: uint16
        /**
         * Only loaded, and mandatory if `amount` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ItemProductPrototype.html#amount_min Online documentation}
         */
        amount_min?: uint16
        /**
         * Only loaded, and mandatory if `amount` is not defined.
         *
         * If set to a number that is less than `amount_min`, the game will use `amount_min` instead.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ItemProductPrototype.html#amount_max Online documentation}
         */
        amount_max?: uint16
        /**
         * **Default:** `1`
         *
         * Value between 0 and 1, `0` for 0% chance and `1` for 100% chance.
         *
         * The effect of probability is no product, or a linear distribution on [min, max]. For a recipe with probability `p`, amount_min `min`, and amount_max `max`, the Expected Value of this product can be expressed as `p * (0.5 * (max + min))`. This is what will be shown in a recipe tooltip. The effect of `catalyst_amount` on the product is not shown.
         *
         * When `amount_min` and `amount_max` are not provided, `amount` applies as min and max. The Expected Value simplifies to `p * amount`, providing `0` product, or `amount` product, on recipe completion.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ItemProductPrototype.html#probability Online documentation}
         */
        probability?: double
        /**
         * **Default:** `0`
         *
         * Amount that should not be affected by productivity modules (not yielded from bonus production) and should not be included in the item production statistics.
         *
         * If this item is used in a recipe, the `catalyst_amount` is calculated automatically based on the {@link RecipePrototype#ingredients RecipePrototype::ingredients} and {@link RecipePrototype#results RecipePrototype::results}. See {@linkplain https://factorio.com/blog/post/fff-256 here}.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ItemProductPrototype.html#catalyst_amount Online documentation}
         */
        catalyst_amount?: uint16
        /**
         * **Default:** `true`
         *
         * When hovering over a recipe in the crafting menu the recipe tooltip will be shown. An additional item tooltip will be shown for every product, as a separate tooltip, if the item tooltip has a description and/or properties to show and if `show_details_in_recipe_tooltip` is `true`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/ItemProductPrototype.html#show_details_in_recipe_tooltip Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/ItemPrototypeFlags.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/ItemSubGroupID.html Online documentation}
   */
  export type ItemSubGroupID = string
  /**
   * Item that when placed creates this entity/tile.
   * @example
   * {item = "iron-chest", count = 1}
   * @see {@link https://lua-api.factorio.com/1.1.110/types/ItemToPlace.html Online documentation}
   */
  export interface ItemToPlace {
    /**
     * The item used to place this entity/tile.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ItemToPlace.html#item Online documentation}
     */
    item: ItemID
    /**
     * How many items are used to place one of this entity/tile. Can't be larger than the stack size of the item.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ItemToPlace.html#count Online documentation}
     */
    count: uint32
  }
  export interface LabelStyleSpecification extends BaseStyleSpecification {
    readonly type: "label_style"
    /**
     * Name of a {@link FontPrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/LabelStyleSpecification.html#font Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/LaboratoryProductivityModifier.html#infer_icon Online documentation}
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/LaboratoryProductivityModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface LaboratorySpeedModifier extends SimpleModifier {
    readonly type: "laboratory-speed"
    /**
     * **Default:** `true`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/LaboratorySpeedModifier.html#infer_icon Online documentation}
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/LaboratorySpeedModifier.html#use_icon_overlay_constant Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/LightDefinition.html Online documentation}
   */
  export type LightDefinition =
    | {
        /**
         * **Default:** `"basic"`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/LightDefinition.html#type Online documentation}
         */
        readonly type?: "basic" | "oriented"
        /**
         * Only loaded, and mandatory if `type` is `"oriented"`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/LightDefinition.html#picture Online documentation}
         */
        picture?: Sprite
        /**
         * **Default:** `0`
         *
         * Only loaded if `type` is `"oriented"`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/LightDefinition.html#rotation_shift Online documentation}
         */
        rotation_shift?: RealOrientation
        /**
         * Brightness of the light in the range `[0, 1]`, where `0` is no light and `1` is the maximum light.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/LightDefinition.html#intensity Online documentation}
         */
        intensity: float
        /**
         * The radius of the light in tiles. Note that the light gets darker near the edges, so the effective size of the light will appear to be smaller.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/LightDefinition.html#size Online documentation}
         */
        size: float
        /**
         * **Default:** `0`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/LightDefinition.html#source_orientation_offset Online documentation}
         */
        source_orientation_offset?: RealOrientation
        /**
         * **Default:** `false`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/LightDefinition.html#add_perspective Online documentation}
         */
        add_perspective?: bool
        shift?: Vector
        /**
         * **Default:** `Light has no color`
         *
         * Color of the light.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/LightDefinition.html#color Online documentation}
         */
        color?: Color
        /**
         * **Default:** `0`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/LightDefinition.html#minimum_darkness Online documentation}
         */
        minimum_darkness?: float
      }
    | readonly {
        /**
         * **Default:** `"basic"`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/LightDefinition.html#type Online documentation}
         */
        readonly type?: "basic" | "oriented"
        /**
         * Only loaded, and mandatory if `type` is `"oriented"`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/LightDefinition.html#picture Online documentation}
         */
        picture?: Sprite
        /**
         * **Default:** `0`
         *
         * Only loaded if `type` is `"oriented"`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/LightDefinition.html#rotation_shift Online documentation}
         */
        rotation_shift?: RealOrientation
        /**
         * Brightness of the light in the range `[0, 1]`, where `0` is no light and `1` is the maximum light.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/LightDefinition.html#intensity Online documentation}
         */
        intensity: float
        /**
         * The radius of the light in tiles. Note that the light gets darker near the edges, so the effective size of the light will appear to be smaller.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/LightDefinition.html#size Online documentation}
         */
        size: float
        /**
         * **Default:** `0`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/LightDefinition.html#source_orientation_offset Online documentation}
         */
        source_orientation_offset?: RealOrientation
        /**
         * **Default:** `false`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/LightDefinition.html#add_perspective Online documentation}
         */
        add_perspective?: bool
        shift?: Vector
        /**
         * **Default:** `Light has no color`
         *
         * Color of the light.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/LightDefinition.html#color Online documentation}
         */
        color?: Color
        /**
         * **Default:** `0`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/LightDefinition.html#minimum_darkness Online documentation}
         */
        minimum_darkness?: float
      }[]
  /**
   * Specifies the light flicker. Note that this defaults to "showing a white light" instead of the usually expected "showing nothing".
   * @see {@link https://lua-api.factorio.com/1.1.110/types/LightFlickeringDefinition.html Online documentation}
   */
  export interface LightFlickeringDefinition {
    /**
     * **Default:** `0.2`
     *
     * Brightness of the light in the range [0, 1] where 0 is no light and 1 is the maximum light.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/LightFlickeringDefinition.html#minimum_intensity Online documentation}
     */
    minimum_intensity?: float
    /**
     * **Default:** `0.8`
     *
     * Brightness of the light in the range [0, 1] where 0 is no light and 1 is the maximum light.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/LightFlickeringDefinition.html#maximum_intensity Online documentation}
     */
    maximum_intensity?: float
    /**
     * **Default:** `0.3`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/LightFlickeringDefinition.html#derivation_change_frequency Online documentation}
     */
    derivation_change_frequency?: float
    /**
     * **Default:** `0.06`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/LightFlickeringDefinition.html#derivation_change_deviation Online documentation}
     */
    derivation_change_deviation?: float
    /**
     * **Default:** `0.02`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/LightFlickeringDefinition.html#border_fix_speed Online documentation}
     */
    border_fix_speed?: float
    /**
     * **Default:** `0.5`
     *
     * The radius of the light in tiles. Note, that the light gets darker near the edges, so the effective size of the light seems to be smaller.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/LightFlickeringDefinition.html#minimum_light_size Online documentation}
     */
    minimum_light_size?: float
    /**
     * **Default:** `0.5`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/LightFlickeringDefinition.html#light_intensity_to_size_coefficient Online documentation}
     */
    light_intensity_to_size_coefficient?: float
    /**
     * **Default:** `{r=1, g=1, b=1} (White)`
     *
     * Color of the light.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/LightFlickeringDefinition.html#color Online documentation}
     */
    color?: Color
  }
  export interface LimitChestTipTrigger {
    readonly type: "limit-chest"
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/LimitChestTipTrigger.html#count Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/LineTriggerItem.html Online documentation}
   */
  export interface LineTriggerItem extends TriggerItem {
    readonly type: "line"
    range: double
    width: double
    range_effects?: TriggerEffect
  }
  /**
   * @see LinkedBeltPrototype.structure
   * @see {@link https://lua-api.factorio.com/1.1.110/prototypes/LinkedBeltPrototype.html#structure Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/LinkedGameControl.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/LocalisedString.html Online documentation}
   */
  export type LocalisedString = string | number | boolean | undefined | readonly [string, ...LocalisedString[]]
  /**
   * The items generated when an {@link EntityWithHealthPrototype} is killed.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/LootItem.html Online documentation}
   */
  export interface LootItem {
    /**
     * The item to spawn.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/LootItem.html#item Online documentation}
     */
    item: ItemID
    /**
     * **Default:** `1`
     *
     * `0` is 0% and `1` is 100%. Must be `> 0`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/LootItem.html#probability Online documentation}
     */
    probability?: double
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/LootItem.html#count_min Online documentation}
     */
    count_min?: double
    /**
     * **Default:** `1`
     *
     * Must be `> 0`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/LootItem.html#count_max Online documentation}
     */
    count_max?: double
  }
  export interface LowPowerTipTrigger {
    readonly type: "low-power"
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/LowPowerTipTrigger.html#count Online documentation}
     */
    count?: uint32
  }
  export interface ManualTransferTipTrigger {
    readonly type: "manual-transfer"
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ManualTransferTipTrigger.html#count Online documentation}
     */
    count?: uint32
  }
  export interface ManualWireDragTipTrigger {
    readonly type: "manual-wire-drag"
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ManualWireDragTipTrigger.html#count Online documentation}
     */
    count?: uint32
  }
  /**
   * @see UtilityConstants.map_editor
   * @see {@link https://lua-api.factorio.com/1.1.110/prototypes/UtilityConstants.html#map_editor Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MapGenPreset.html#order Online documentation}
     */
    order: Order
    /**
     * **Default:** `true`
     *
     * Whether this is the default preset. If `true`, this preset may not have any other properties besides this and order.
     *
     * If no MapGenPreset has `default = true`, the preset selector will have a blank preset label, with default settings. The "blank" preset goes away when another preset is selected.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MapGenPreset.html#default Online documentation}
     */
    default?: bool
    /**
     * If any setting is not set, it will use the default values.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MapGenPreset.html#basic_settings Online documentation}
     */
    basic_settings?: MapGenSettings
    /**
     * If any setting is not set, it will use the default values.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MapGenPreset.html#advanced_settings Online documentation}
     */
    advanced_settings?: AdvancedMapGenSettings
  }
  export interface MapGenPresetDifficultySettings {
    /**
     * A {@link defines.difficulty_settings.recipe_difficulty}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MapGenPresetDifficultySettings.html#recipe_difficulty Online documentation}
     */
    recipe_difficulty?: uint8
    /**
     * A {@link defines.difficulty_settings.technology_difficulty}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MapGenPresetDifficultySettings.html#technology_difficulty Online documentation}
     */
    technology_difficulty?: uint8
    technology_price_multiplier?: double
    research_queue_setting?: "always" | "after-victory" | "never"
  }
  export interface MapGenPresetEnemyEvolutionSettings {
    enabled?: bool
    /**
     * Percentual increase in the evolution factor for every second (60 ticks)
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MapGenPresetEnemyEvolutionSettings.html#time_factor Online documentation}
     */
    time_factor?: double
    /**
     * Percentual increase in the evolution factor for every destroyed spawner
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MapGenPresetEnemyEvolutionSettings.html#destroy_factor Online documentation}
     */
    destroy_factor?: double
    /**
     * Percentual increase in the evolution factor for 1 pollution unit
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MapGenPresetEnemyEvolutionSettings.html#pollution_factor Online documentation}
     */
    pollution_factor?: double
  }
  export interface MapGenPresetEnemyExpansionSettings {
    enabled?: bool
    /**
     * Distance in chunks from the furthest base around. This prevents expansions from reaching too far into the player's territory.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MapGenPresetEnemyExpansionSettings.html#max_expansion_distance Online documentation}
     */
    max_expansion_distance?: uint32
    /**
     * Size of the group that goes to build new base (the game interpolates between min size and max size based on evolution factor).
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MapGenPresetEnemyExpansionSettings.html#settler_group_min_size Online documentation}
     */
    settler_group_min_size?: uint32
    settler_group_max_size?: uint32
    /**
     * Ticks to expand to a single position for a base is used. Cooldown is calculated as follows: `cooldown = lerp(max_expansion_cooldown, min_expansion_cooldown, -e^2 + 2 * e)` where `lerp` is the linear interpolation function, and e is the current evolution factor.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MapGenPresetEnemyExpansionSettings.html#min_expansion_cooldown Online documentation}
     */
    min_expansion_cooldown?: uint32
    /**
     * In ticks.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MapGenPresetEnemyExpansionSettings.html#max_expansion_cooldown Online documentation}
     */
    max_expansion_cooldown?: uint32
  }
  /**
   * The pollution settings, the values are for 60 ticks (1 second).
   * @see {@link https://lua-api.factorio.com/1.1.110/types/MapGenPresetPollutionSettings.html Online documentation}
   */
  export interface MapGenPresetPollutionSettings {
    enabled?: bool
    /**
     * Must be <= 0.25. Amount that is diffused to neighboring chunks.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MapGenPresetPollutionSettings.html#diffusion_ratio Online documentation}
     */
    diffusion_ratio?: double
    /**
     * Must be >= 0.1. Also known as absorption modifier and previously dissipation rate.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MapGenPresetPollutionSettings.html#ageing Online documentation}
     */
    ageing?: double
    min_pollution_to_damage_trees?: double
    /**
     * Must be >= 0.1.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MapGenPresetPollutionSettings.html#enemy_attack_pollution_consumption_modifier Online documentation}
     */
    enemy_attack_pollution_consumption_modifier?: double
    pollution_restored_per_tree_damage?: double
  }
  export interface MapGenSettings {
    /**
     * This is the inverse of "water scale" in the map generator GUI. So a water scale that shows as 50% in the GUI is a value of `1/0.5 = 2` for `terrain_segmentation`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MapGenSettings.html#terrain_segmentation Online documentation}
     */
    terrain_segmentation?: MapGenSize
    /**
     * Shown as water coverage in the map generator GUI.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MapGenSettings.html#water Online documentation}
     */
    water?: MapGenSize
    /**
     * **Default:** `true`
     *
     * Whether undefined `autoplace_controls` should fall back to the default controls or not.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MapGenSettings.html#default_enable_all_autoplace_controls Online documentation}
     */
    default_enable_all_autoplace_controls?: bool
    autoplace_controls?: Record<AutoplaceControlID, FrequencySizeRichness>
    /**
     * Each setting in this table maps the string type to the settings for that type.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MapGenSettings.html#autoplace_settings Online documentation}
     */
    autoplace_settings?: Record<"entity" | "tile" | "decorative", AutoplaceSettings>
    /**
     * Map of property name (`"elevation"`, etc) to name of noise expression that will provide it. Entries may be omitted. A notable usage is changing autoplace behavior of an entity based on the preset, which cannot be read from a noise expression.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MapGenSettings.html#property_expression_names Online documentation}
     */
    property_expression_names?: Record<string, string | bool | double>
    /**
     * Array of the positions of the starting areas.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MapGenSettings.html#starting_points Online documentation}
     */
    starting_points?: readonly MapPosition[]
    /**
     * Read by the game, but not used or set in the GUI.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MapGenSettings.html#seed Online documentation}
     */
    seed?: uint32
    /**
     * Width of the map in tiles. Silently limited to 2 000 000, ie. +/- 1 million tiles from the center in both directions.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MapGenSettings.html#width Online documentation}
     */
    width?: uint32
    /**
     * Height of the map in tiles. Silently limited to 2 000 000, ie. +/- 1 million tiles from the center in both directions.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MapGenSettings.html#height Online documentation}
     */
    height?: uint32
    /**
     * Size of the starting area. The starting area only effects enemy placement, and has no effect on resources.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MapGenSettings.html#starting_area Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/MapGenSize.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/MapPosition.html Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MaxFailedAttemptsPerTickPerConstructionQueueModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface MaxSuccessfulAttemptsPerTickPerConstructionQueueModifier extends SimpleModifier {
    readonly type: "max-successful-attempts-per-tick-per-construction-queue"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MaxSuccessfulAttemptsPerTickPerConstructionQueueModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface MaximumFollowingRobotsCountModifier extends SimpleModifier {
    readonly type: "maximum-following-robots-count"
    /**
     * **Default:** `false`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MaximumFollowingRobotsCountModifier.html#infer_icon Online documentation}
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MaximumFollowingRobotsCountModifier.html#use_icon_overlay_constant Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/MinableProperties.html Online documentation}
   */
  export interface MinableProperties {
    /**
     * How many seconds are required to mine this object at 1 mining speed.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MinableProperties.html#mining_time Online documentation}
     */
    mining_time: double
    /**
     * The items that are returned when this object is mined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MinableProperties.html#results Online documentation}
     */
    results?: readonly ProductPrototype[]
    /**
     * Only loaded if `results` is not defined.
     *
     * Which item is dropped when this is mined. Cannot be empty. If you want the entity to not be minable, don't specify the minable properties, if you want it to be minable with no result item, don't specify the result at all.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MinableProperties.html#result Online documentation}
     */
    result?: ItemID
    /**
     * **Default:** `0`
     *
     * The amount of fluid that is used up when this object is mined. If this is > 0, this object cannot be mined by hand.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MinableProperties.html#fluid_amount Online documentation}
     */
    fluid_amount?: double
    /**
     * Name of a {@link ParticlePrototype}. Which set of particles to use.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MinableProperties.html#mining_particle Online documentation}
     */
    mining_particle?: ParticleID
    /**
     * Name of a {@link FluidPrototype}. The fluid that is used up when this object is mined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MinableProperties.html#required_fluid Online documentation}
     */
    required_fluid?: FluidID
    /**
     * **Default:** `1`
     *
     * Only loaded if `results` is not defined.
     *
     * How many of result are dropped.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MinableProperties.html#count Online documentation}
     */
    count?: uint16
    mining_trigger?: Trigger
  }
  export interface MinimapStyleSpecification extends Omit<EmptyWidgetStyleSpecification, "type"> {
    readonly type: "minimap_style"
  }
  /**
   * Used by {@link MiningDrillPrototype}.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/MiningDrillGraphicsSet.html Online documentation}
   */
  export interface MiningDrillGraphicsSet {
    animation?: Animation4Way
    /**
     * Idle animation must have the same frame count as animation.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MiningDrillGraphicsSet.html#idle_animation Online documentation}
     */
    idle_animation?: Animation4Way
    /**
     * **Default:** `false`
     *
     * Only loaded if `idle_animation` is defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MiningDrillGraphicsSet.html#always_draw_idle_animation Online documentation}
     */
    always_draw_idle_animation?: bool
    default_recipe_tint?: DefaultRecipeTint
    working_visualisations?: readonly WorkingVisualisation[]
    /**
     * Only loaded if one of `shift_animation_waypoint_stop_duration` or `shift_animation_transition_duration` is not `0`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MiningDrillGraphicsSet.html#shift_animation_waypoints Online documentation}
     */
    shift_animation_waypoints?: ShiftAnimationWaypoints
    /**
     * **Default:** `0`
     *
     * Only loaded if `shift_animation_waypoints` is defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MiningDrillGraphicsSet.html#shift_animation_waypoint_stop_duration Online documentation}
     */
    shift_animation_waypoint_stop_duration?: uint16
    /**
     * **Default:** `0`
     *
     * Only loaded if `shift_animation_waypoints` is defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MiningDrillGraphicsSet.html#shift_animation_transition_duration Online documentation}
     */
    shift_animation_transition_duration?: uint16
    /**
     * Used by {@link WorkingVisualisation#apply_tint WorkingVisualisation::apply_tint}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MiningDrillGraphicsSet.html#status_colors Online documentation}
     */
    status_colors?: StatusColors
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MiningDrillGraphicsSet.html#drilling_vertical_movement_duration Online documentation}
     */
    drilling_vertical_movement_duration?: uint16
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MiningDrillGraphicsSet.html#animation_progress Online documentation}
     */
    animation_progress?: float
    /**
     * **Default:** `1000`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MiningDrillGraphicsSet.html#max_animation_progress Online documentation}
     */
    max_animation_progress?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MiningDrillGraphicsSet.html#min_animation_progress Online documentation}
     */
    min_animation_progress?: float
    /**
     * **Default:** `"object"`
     *
     * Render layer(s) for all directions of the circuit connectors.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MiningDrillGraphicsSet.html#circuit_connector_layer Online documentation}
     */
    circuit_connector_layer?: RenderLayer | CircuitConnectorLayer
    /**
     * **Default:** `100`
     *
     * Secondary draw order(s) for all directions of the circuit connectors.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MiningDrillGraphicsSet.html#circuit_connector_secondary_draw_order Online documentation}
     */
    circuit_connector_secondary_draw_order?: int8 | CircuitConnectorSecondaryDrawOrder
  }
  export interface MiningDrillProductivityBonusModifier extends SimpleModifier {
    readonly type: "mining-drill-productivity-bonus"
    /**
     * **Default:** `false`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MiningDrillProductivityBonusModifier.html#infer_icon Online documentation}
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/MiningDrillProductivityBonusModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  /**
   * The user-set value of a startup {@linkplain https://wiki.factorio.com/Tutorial:Mod_settings mod setting}.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/ModSetting.html Online documentation}
   */
  export interface ModSetting {
    /**
     * The value of the mod setting. The type depends on the kind of setting.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ModSetting.html#value Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/Modifier.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/Mods.html Online documentation}
   */
  export type Mods = Record<string, string>
  /**
   * The name of a {@link ModuleCategory}.
   * @example
   * "productivity"
   * @example
   * "effectivity"
   * @see {@link https://lua-api.factorio.com/1.1.110/types/ModuleCategoryID.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/ModuleSpecification.html Online documentation}
   */
  export interface ModuleSpecification {
    /**
     * **Default:** `0`
     *
     * The number of module slots in this entity.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ModuleSpecification.html#module_slots Online documentation}
     */
    module_slots?: ItemStackIndex
    /**
     * **Default:** `width of entity selection box / 0.75`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ModuleSpecification.html#module_info_max_icons_per_row Online documentation}
     */
    module_info_max_icons_per_row?: uint8
    /**
     * **Default:** `width of entity selection box / 1.5`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ModuleSpecification.html#module_info_max_icon_rows Online documentation}
     */
    module_info_max_icon_rows?: uint8
    /**
     * **Default:** `{0, 0.7}`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ModuleSpecification.html#module_info_icon_shift Online documentation}
     */
    module_info_icon_shift?: Vector
    /**
     * **Default:** `0.5`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ModuleSpecification.html#module_info_icon_scale Online documentation}
     */
    module_info_icon_scale?: float
    /**
     * **Default:** `1.1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ModuleSpecification.html#module_info_separation_multiplier Online documentation}
     */
    module_info_separation_multiplier?: float
    /**
     * **Default:** `-0.1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ModuleSpecification.html#module_info_multi_row_initial_height_modifier Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/ModuleTint.html Online documentation}
   */
  export type ModuleTint = "primary" | "secondary" | "tertiary" | "quaternary" | "none"
  /**
   * The name of a {@link MouseCursor}.
   * @example
   * "selection-tool-cursor"
   * @see {@link https://lua-api.factorio.com/1.1.110/types/MouseCursorID.html Online documentation}
   */
  export type MouseCursorID = string
  export interface NestedTriggerEffectItem extends TriggerEffectItem {
    readonly type: "nested-result"
    action: Trigger
  }
  /**
   * An array-like noise expression, for example constructed with {@link NoiseArrayConstruction} or a variable such as `noise.var("starting_positions")`.
   *
   * ## Union members
   * - {@link NoiseVariable}
   * - {@link NoiseArrayConstruction}
   * - {@link NoiseFunctionOffsetPoints}
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseArray.html Online documentation}
   */
  export type NoiseArray = NoiseVariable | NoiseArrayConstruction | NoiseFunctionOffsetPoints
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseArrayConstruction.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseExpression.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionAbsoluteValue.html Online documentation}
   */
  export interface NoiseFunctionAbsoluteValue {
    readonly type: "function-application"
    function_name: "absolute-value"
    arguments: readonly [NoiseNumber]
  }
  /**
   * Takes between 0 and 32 numbers and adds them up.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionAdd.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionApplication.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionAtan2.html Online documentation}
   */
  export interface NoiseFunctionAtan2 {
    readonly type: "function-application"
    function_name: "atan2"
    /**
     * The first argument is y and the second is x.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionAtan2.html#arguments Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionBitwiseAnd.html Online documentation}
   */
  export interface NoiseFunctionBitwiseAnd {
    readonly type: "function-application"
    function_name: "bitwise-and"
    arguments: readonly NoiseNumber[]
  }
  /**
   * Casts the single argument to a 32-bit integer and performs bitwise negates it.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionBitwiseNot.html Online documentation}
   */
  export interface NoiseFunctionBitwiseNot {
    readonly type: "function-application"
    function_name: "bitwise-not"
    arguments: readonly [NoiseNumber]
  }
  /**
   * Casts between 0 and 32 numbers to 32-bit integers and performs a bitwise OR on them.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionBitwiseOr.html Online documentation}
   */
  export interface NoiseFunctionBitwiseOr {
    readonly type: "function-application"
    function_name: "bitwise-or"
    arguments: readonly NoiseNumber[]
  }
  /**
   * Casts between 0 and 32 numbers to 32-bit integers and performs a bitwise EXCLUSIVE OR on them.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionBitwiseXor.html Online documentation}
   */
  export interface NoiseFunctionBitwiseXor {
    readonly type: "function-application"
    function_name: "bitwise-xor"
    arguments: readonly NoiseNumber[]
  }
  /**
   * Takes a single argument and returns its ceil.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionCeil.html Online documentation}
   */
  export interface NoiseFunctionCeil {
    readonly type: "function-application"
    function_name: "ceil"
    arguments: readonly [NoiseNumber]
  }
  /**
   * The first argument is clamped to be between the second and third. The second is treated as a lower limit and the third the upper limit.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionClamp.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionCompileTimeLog.html Online documentation}
   */
  export interface NoiseFunctionCompileTimeLog {
    readonly type: "function-application"
    function_name: "compile-time-log"
    arguments: readonly NoiseExpression[]
  }
  /**
   * Takes a single argument and returns its cosine.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionCos.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionDistanceFromNearestPoint.html Online documentation}
   */
  export interface NoiseFunctionDistanceFromNearestPoint {
    readonly type: "function-application"
    function_name: "distance-from-nearest-point"
    /**
     * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionDistanceFromNearestPoint.html#arguments Online documentation}
     */
    arguments: DistanceFromNearestPointArguments
  }
  /**
   * Takes two arguments and divides the first by the second.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionDivide.html Online documentation}
   */
  export interface NoiseFunctionDivide {
    readonly type: "function-application"
    function_name: "divide"
    arguments: readonly [NoiseNumber, NoiseNumber]
  }
  /**
   * Returns the result of first argument == second argument as a literal number that is `0` for false and `1` for true.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionEquals.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionExponentiate.html Online documentation}
   */
  export interface NoiseFunctionExponentiate {
    readonly type: "function-application"
    function_name: "exponentiate"
    arguments: readonly [NoiseNumber, NoiseNumber]
  }
  /**
   * Scaling input and output can be accomplished other ways, but are done so commonly as to be built into this function for performance reasons.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionFactorioBasisNoise.html Online documentation}
   */
  export interface NoiseFunctionFactorioBasisNoise {
    readonly type: "function-application"
    function_name: "factorio-basis-noise"
    /**
     * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionFactorioBasisNoise.html#arguments Online documentation}
     */
    arguments: FactorioBasisNoiseArguments
  }
  export interface NoiseFunctionFactorioMultioctaveNoise {
    readonly type: "function-application"
    function_name: "factorio-multioctave-noise"
    /**
     * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionFactorioMultioctaveNoise.html#arguments Online documentation}
     */
    arguments: FactorioMultioctaveNoiseArguments
  }
  export interface NoiseFunctionFactorioQuickMultioctaveNoise {
    readonly type: "function-application"
    function_name: "factorio-quick-multioctave-noise"
    /**
     * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionFactorioQuickMultioctaveNoise.html#arguments Online documentation}
     */
    arguments: FactorioQuickMultioctaveNoiseArguments
  }
  /**
   * Takes a single argument and returns its floor.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionFloor.html Online documentation}
   */
  export interface NoiseFunctionFloor {
    readonly type: "function-application"
    function_name: "floor"
    arguments: readonly [NoiseNumber]
  }
  /**
   * Returns the result of first argument <= second argument as a literal number that is `0` for false and `1` for true.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionLessOrEqual.html Online documentation}
   */
  export interface NoiseFunctionLessOrEqual {
    readonly type: "function-application"
    function_name: "less-or-equal"
    arguments: readonly [NoiseNumber, NoiseNumber]
  }
  /**
   * Returns the result of first argument < second argument as a literal number that is `0` for false and `1` for true.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionLessThan.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionModulo.html Online documentation}
   */
  export interface NoiseFunctionModulo {
    readonly type: "function-application"
    function_name: "modulo"
    arguments: readonly [NoiseNumber, NoiseNumber]
  }
  /**
   * Takes between 0 and 32 numbers and multiplies them.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionMultiply.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionOffsetPoints.html Online documentation}
   */
  export interface NoiseFunctionOffsetPoints {
    readonly type: "function-application"
    function_name: "offset-points"
    arguments: readonly [NoiseArray, NoiseArray]
  }
  /**
   * Subtracts a random value in the `[0, amplitude)` range from `source` if `source` is larger than `0`.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionRandomPenalty.html Online documentation}
   */
  export interface NoiseFunctionRandomPenalty {
    readonly type: "function-application"
    function_name: "random-penalty"
    /**
     * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionRandomPenalty.html#arguments Online documentation}
     */
    arguments: RandomPenaltyArguments
  }
  /**
   * Similar to {@link NoiseFunctionClamp clamp}, where the first argument is folded back across the third and second limits until it lies between them.
   * @example
   * local noise = require("noise")
   * local ridge_1 = noise.ridge(6, 1, 5) -- this returns 4
   * local ridge_2 = noise.ridge(-1, 1, 5) -- this returns 3
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionRidge.html Online documentation}
   */
  export interface NoiseFunctionRidge {
    readonly type: "function-application"
    function_name: "ridge"
    /**
     * The first argument is the number to be ridged, the second is the lower limit and the third is the upper limit.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionRidge.html#arguments Online documentation}
     */
    arguments: readonly [NoiseNumber, NoiseNumber, NoiseNumber]
  }
  /**
   * Takes a single argument and returns its sine.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionSin.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionSpotNoise.html Online documentation}
   */
  export interface NoiseFunctionSpotNoise {
    readonly type: "function-application"
    function_name: "spot-noise"
    /**
     * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionSpotNoise.html#arguments Online documentation}
     */
    arguments: SpotNoiseArguments
  }
  /**
   * Takes two arguments and subtracts the second from the first.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionSubtract.html Online documentation}
   */
  export interface NoiseFunctionSubtract {
    readonly type: "function-application"
    function_name: "subtract"
    arguments: readonly [NoiseNumber, NoiseNumber]
  }
  /**
   * The first argument is the value to be terraced. The second argument is the offset, the third the width, and the fourth the strength.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionTerrace.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseIfElseChain.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseLayerID.html Online documentation}
   */
  export type NoiseLayerID = string
  /**
   * Evaluates to the same boolean value (true or false) every time, given by the `literal_value` property. May be used as a number value, evaluates to `1` for true and `0` for false.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseLiteralBoolean.html Online documentation}
   */
  export interface NoiseLiteralBoolean {
    readonly type: "literal-boolean"
    literal_value: bool
  }
  /**
   * Returns the expression represented by its `literal_value` property. Useful mostly for passing expressions (to be evaluated later) to the {@link NoiseFunctionSpotNoise spot-noise} function.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseLiteralExpression.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseLiteralNumber.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseLiteralObject.html Online documentation}
   */
  export interface NoiseLiteralObject {
    readonly type: "literal-object"
    literal_value: AutoplaceSpecification
  }
  /**
   * Evaluates to the same string every time, given by the `literal_value` property. Since the noise generation runtime has no notion of strings or use for them, this is useful only in constant contexts.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseLiteralString.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseNumber.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseProcedureDelimiter.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseVariable.html Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseVariable.html#variable_name Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseVariableConstants.html Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/NothingModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
    effect_description?: LocalisedString
  }
  /**
   * @see OffshorePumpPrototype.graphics_set
   * @see {@link https://lua-api.factorio.com/1.1.110/prototypes/OffshorePumpPrototype.html#graphics_set Online documentation}
   */
  export interface OffshorePumpGraphicsSet {
    /**
     * Rendered in "object" layer, with secondary draw order 0.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/OffshorePumpGraphicsSet.html#animation Online documentation}
     */
    animation: Animation4Way
    /**
     * **Default:** `"ground-patch"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/OffshorePumpGraphicsSet.html#base_render_layer Online documentation}
     */
    base_render_layer?: RenderLayer
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/OffshorePumpGraphicsSet.html#underwater_layer_offset Online documentation}
     */
    underwater_layer_offset?: int8
    /**
     * Rendered in "object" layer, with secondary draw order 20.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/OffshorePumpGraphicsSet.html#fluid_animation Online documentation}
     */
    fluid_animation?: Animation4Way
    /**
     * Rendered in "object" layer, with secondary draw order 40.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/OffshorePumpGraphicsSet.html#glass_pictures Online documentation}
     */
    glass_pictures?: Sprite4Way
    /**
     * Rendered in layer specified by `base_render_layer`, with secondary draw order 0.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/OffshorePumpGraphicsSet.html#base_pictures Online documentation}
     */
    base_pictures?: Sprite4Way
    /**
     * Drawn by tile renderer when water animation is enabled.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/OffshorePumpGraphicsSet.html#underwater_pictures Online documentation}
     */
    underwater_pictures?: Sprite4Way
  }
  export interface OrTipTrigger {
    readonly type: "or"
    /**
     * If at least one of the triggers is fulfilled, this trigger is considered fulfilled.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/OrTipTrigger.html#triggers Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/Order.html Online documentation}
   */
  export type Order = string
  export interface OrientedCliffPrototype {
    collision_bounding_box: BoundingBox
    pictures: SpriteVariations
    /**
     * Unused.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/OrientedCliffPrototype.html#fill_volume Online documentation}
     */
    fill_volume: uint32
  }
  /**
   * @see CliffPrototype.orientations
   * @see {@link https://lua-api.factorio.com/1.1.110/prototypes/CliffPrototype.html#orientations Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/ProgressBarStyleSpecification.html#other_colors Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/ParticleID.html Online documentation}
   */
  export type ParticleID = string
  export interface PasteEntitySettingsTipTrigger {
    readonly type: "paste-entity-settings"
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PasteEntitySettingsTipTrigger.html#count Online documentation}
     */
    count?: uint32
    source?: EntityID
    target?: EntityID
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PasteEntitySettingsTipTrigger.html#match_type_only Online documentation}
     */
    match_type_only?: bool
  }
  export interface PathFinderSettings {
    /**
     * The pathfinder performs a step of the backward search every `fwd2bwd_ratio`'th step. The minimum allowed value is 2, which means symmetric search.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PathFinderSettings.html#fwd2bwd_ratio Online documentation}
     */
    fwd2bwd_ratio: uint32
    /**
     * When comparing nodes in open which one to check next, heuristic value is multiplied by this ratio. The higher the number the more is the search directed directly towards the goal.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PathFinderSettings.html#goal_pressure_ratio Online documentation}
     */
    goal_pressure_ratio: double
    use_path_cache: bool
    /**
     * When this is exhausted no more requests are allowed, at the moment the first path to exhaust this will be finished (even if it is hundreds of steps).
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PathFinderSettings.html#max_steps_worked_per_tick Online documentation}
     */
    max_steps_worked_per_tick: double
    max_work_done_per_tick: uint32
    /**
     * Number of elements in the cache.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PathFinderSettings.html#short_cache_size Online documentation}
     */
    short_cache_size: uint32
    long_cache_size: uint32
    /**
     * Minimal distance to goal for path to be searched in short path cache.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PathFinderSettings.html#short_cache_min_cacheable_distance Online documentation}
     */
    short_cache_min_cacheable_distance: double
    /**
     * Minimal number of algorithm steps for path to be inserted into the short path cache.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PathFinderSettings.html#short_cache_min_algo_steps_to_cache Online documentation}
     */
    short_cache_min_algo_steps_to_cache: uint32
    /**
     * Minimal distance to goal for path to be searched in long path cache.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PathFinderSettings.html#long_cache_min_cacheable_distance Online documentation}
     */
    long_cache_min_cacheable_distance: double
    /**
     * When searching for connection to path cache path, search at most for this number of steps times the initial estimate.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PathFinderSettings.html#cache_max_connect_to_cache_steps_multiplier Online documentation}
     */
    cache_max_connect_to_cache_steps_multiplier: uint32
    /**
     * When looking for path from cache make sure it doesn't start too far from requested start in relative distance terms.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PathFinderSettings.html#cache_accept_path_start_distance_ratio Online documentation}
     */
    cache_accept_path_start_distance_ratio: double
    /**
     * When looking for path from cache make sure it doesn't end too far from requested end. This is typically higher than accept value for the start because the end target can be moving.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PathFinderSettings.html#cache_accept_path_end_distance_ratio Online documentation}
     */
    cache_accept_path_end_distance_ratio: double
    /**
     * Same as cache_accept_path_start_distance_ratio, but used for negative cache queries.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PathFinderSettings.html#negative_cache_accept_path_start_distance_ratio Online documentation}
     */
    negative_cache_accept_path_start_distance_ratio: double
    /**
     * Same as cache_accept_path_end_distance_ratio, but used for negative cache queries.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PathFinderSettings.html#negative_cache_accept_path_end_distance_ratio Online documentation}
     */
    negative_cache_accept_path_end_distance_ratio: double
    /**
     * When assigning rating to the best path this * start distances is considered.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PathFinderSettings.html#cache_path_start_distance_rating_multiplier Online documentation}
     */
    cache_path_start_distance_rating_multiplier: double
    /**
     * When assigning rating to the best path this * end distances is considered. This is typically higher than value for the start to achieve better path end quality.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PathFinderSettings.html#cache_path_end_distance_rating_multiplier Online documentation}
     */
    cache_path_end_distance_rating_multiplier: double
    /**
     * Somewhere along the path is stuck enemy we need to avoid. This is mainly to handle situations when units have arrived and are attacking the target then units further in the back will use this and run around the target.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PathFinderSettings.html#stale_enemy_with_same_destination_collision_penalty Online documentation}
     */
    stale_enemy_with_same_destination_collision_penalty: double
    /**
     * If there is a moving unit further than this we don't really care.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PathFinderSettings.html#ignore_moving_enemy_collision_distance Online documentation}
     */
    ignore_moving_enemy_collision_distance: double
    /**
     * Enemy is not moving/or is too close and has different destination.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PathFinderSettings.html#enemy_with_different_destination_collision_penalty Online documentation}
     */
    enemy_with_different_destination_collision_penalty: double
    /**
     * Simplification for now; collision with everything else is this.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PathFinderSettings.html#general_entity_collision_penalty Online documentation}
     */
    general_entity_collision_penalty: double
    /**
     * Collision penalty for successors of positions that require destroy to reach.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PathFinderSettings.html#general_entity_subsequent_collision_penalty Online documentation}
     */
    general_entity_subsequent_collision_penalty: double
    /**
     * Collision penalty for collisions in the extended bounding box but outside the entity's actual bounding box.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PathFinderSettings.html#extended_collision_penalty Online documentation}
     */
    extended_collision_penalty: double
    /**
     * Up until this amount any client will be served by the path finder (no estimate on the path length).
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PathFinderSettings.html#max_clients_to_accept_any_new_request Online documentation}
     */
    max_clients_to_accept_any_new_request: uint32
    /**
     * From max_clients_to_accept_any_new_request till this one only those that have a short estimate will be served.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PathFinderSettings.html#max_clients_to_accept_short_new_request Online documentation}
     */
    max_clients_to_accept_short_new_request: uint32
    /**
     * This is the "threshold" to decide what is short and what is not.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PathFinderSettings.html#direct_distance_to_consider_short_request Online documentation}
     */
    direct_distance_to_consider_short_request: uint32
    /**
     * If a short request takes more than this many steps, it will be rescheduled as a long request.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PathFinderSettings.html#short_request_max_steps Online documentation}
     */
    short_request_max_steps: uint32
    /**
     * How many steps will be allocated to short requests each tick, as a ratio of all available steps per tick.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PathFinderSettings.html#short_request_ratio Online documentation}
     */
    short_request_ratio: double
    /**
     * Absolute minimum of steps that will be performed for every path find request no matter what.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PathFinderSettings.html#min_steps_to_check_path_find_termination Online documentation}
     */
    min_steps_to_check_path_find_termination: uint32
    /**
     * If the current actual cost from start is higher than this times estimate of start to goal then path finding is terminated.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PathFinderSettings.html#start_to_goal_cost_multiplier_to_terminate_path_find Online documentation}
     */
    start_to_goal_cost_multiplier_to_terminate_path_find: double
    overload_levels: readonly uint32[]
    overload_multipliers: readonly double[]
  }
  export interface PipeConnectionDefinition {
    /**
     * Where pipes can connect to this fluidbox regardless the directions of entity.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PipeConnectionDefinition.html#position Online documentation}
     */
    position?: Vector
    /**
     * Only loaded, and mandatory if `position` is not defined.
     *
     * Where pipes can connect to this fluidbox, depending on the entity direction.
     *
     * Table must have 4 members, which are 4 explicit positions corresponding to the 4 directions of entity. Positions must correspond to directions going one after another.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PipeConnectionDefinition.html#positions Online documentation}
     */
    positions?: readonly Vector[]
    /**
     * **Default:** `0`
     *
     * `0` means not underground.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PipeConnectionDefinition.html#max_underground_distance Online documentation}
     */
    max_underground_distance?: uint32
    /**
     * **Default:** `"input-output"`
     *
     * ## Union members
     * - `"input"`
     * - `"input-output"`
     * - `"output"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PipeConnectionDefinition.html#type Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PipePictures.html#low_temperature_flow Online documentation}
     */
    low_temperature_flow: Sprite
    /**
     * Visualizes the flow of the fluid in the pipe. Drawn when `(fluid_temp - fluid_min_temp) / (fluid_max_temp - fluid_min_temp)` is larger than `1/3` and less than or equal to `2/3` and the fluid's temperature is below {@link FluidPrototype#gas_temperature FluidPrototype::gas_temperature}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PipePictures.html#middle_temperature_flow Online documentation}
     */
    middle_temperature_flow: Sprite
    /**
     * Visualizes the flow of the fluid in the pipe. Drawn when `(fluid_temp - fluid_min_temp) / (fluid_max_temp - fluid_min_temp)` is larger than `2/3` and the fluid's temperature is below {@link FluidPrototype#gas_temperature FluidPrototype::gas_temperature}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PipePictures.html#high_temperature_flow Online documentation}
     */
    high_temperature_flow: Sprite
    /**
     * Visualizes the flow of the fluid in the pipe. Drawn when the fluid's temperature is above {@link FluidPrototype#gas_temperature FluidPrototype::gas_temperature}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PipePictures.html#gas_flow Online documentation}
     */
    gas_flow: Animation
  }
  /**
   * @see PipeToGroundPrototype.pictures
   * @see {@link https://lua-api.factorio.com/1.1.110/prototypes/PipeToGroundPrototype.html#pictures Online documentation}
   */
  export interface PipeToGroundPictures {
    down: Sprite
    up: Sprite
    left: Sprite
    right: Sprite
  }
  /**
   * @see ItemPrototype.place_as_tile
   * @see {@link https://lua-api.factorio.com/1.1.110/prototypes/ItemPrototype.html#place_as_tile Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PlaceEquipmentTipTrigger.html#count Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/GameControllerVibrationData.html#play_for Online documentation}
   */
  export type PlayFor = "character_actions" | "everything"
  export interface PlaySoundTriggerEffectItem extends TriggerEffectItem {
    readonly type: "play-sound"
    sound: Sound
    /**
     * **Default:** `0`
     *
     * Negative values are silently clamped to 0.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PlaySoundTriggerEffectItem.html#min_distance Online documentation}
     */
    min_distance?: float
    /**
     * **Default:** `1e21`
     *
     * Negative values are silently clamped to 0.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PlaySoundTriggerEffectItem.html#max_distance Online documentation}
     */
    max_distance?: float
    /**
     * **Default:** `1`
     *
     * Negative values are silently clamped to 0.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PlaySoundTriggerEffectItem.html#volume_modifier Online documentation}
     */
    volume_modifier?: float
    /**
     * **Default:** `1`
     *
     * Negative values are silently clamped to 0.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PlaySoundTriggerEffectItem.html#audible_distance_modifier Online documentation}
     */
    audible_distance_modifier?: float
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PlaySoundTriggerEffectItem.html#play_on_target_position Online documentation}
     */
    play_on_target_position?: bool
  }
  /**
   * @see UtilityConstants.player_colors
   * @see {@link https://lua-api.factorio.com/1.1.110/prototypes/UtilityConstants.html#player_colors Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/PlayerInputMethodFilter.html Online documentation}
   */
  export type PlayerInputMethodFilter = "all" | "keyboard_and_mouse" | "game_controller"
  /**
   * The pollution settings, the values are for 60 ticks (1 second).
   * @see {@link https://lua-api.factorio.com/1.1.110/types/PollutionSettings.html Online documentation}
   */
  export interface PollutionSettings {
    enabled: bool
    /**
     * Amount that is diffused to neighboring chunks.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PollutionSettings.html#diffusion_ratio Online documentation}
     */
    diffusion_ratio: double
    /**
     * This much pollution units must be on the chunk to start diffusing.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PollutionSettings.html#min_to_diffuse Online documentation}
     */
    min_to_diffuse: double
    /**
     * Constant modifier a percentage of 1; the pollution eaten by a chunks tiles. Also known as absorption modifier.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PollutionSettings.html#ageing Online documentation}
     */
    ageing: double
    /**
     * Anything bigger than this is visualized as this value.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PollutionSettings.html#expected_max_per_chunk Online documentation}
     */
    expected_max_per_chunk: double
    /**
     * Anything lower than this (but > 0) is visualized as this value.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PollutionSettings.html#min_to_show_per_chunk Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/ProductPrototype.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/FluidBox.html#production_type Online documentation}
   */
  export type ProductionType = "None" | "none" | "input" | "input-output" | "output"
  /**
   * @see ProgrammableSpeakerPrototype.instruments
   * @see {@link https://lua-api.factorio.com/1.1.110/prototypes/ProgrammableSpeakerPrototype.html#instruments Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ProgressBarStyleSpecification.html#other_colors Online documentation}
     */
    other_colors?: readonly OtherColors[]
    bar?: ElementImageSet
    bar_background?: ElementImageSet
    /**
     * Name of a {@link FontPrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ProgressBarStyleSpecification.html#font Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ProjectileAttackParameters.html#projectile_center Online documentation}
     */
    projectile_center?: Vector
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ProjectileAttackParameters.html#projectile_creation_distance Online documentation}
     */
    projectile_creation_distance?: float
    /**
     * Used to show bullet shells/casings being ejected from the gun, see {@linkplain https://factorio.com/blog/post/fff-345 artillery shell casings}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ProjectileAttackParameters.html#shell_particle Online documentation}
     */
    shell_particle?: CircularParticleCreationSpecification
    /**
     * Used to shoot projectiles from arbitrary points. Used by worms and multi-barreled weapons. Use multiple points with the same angle to cause the turret to shoot from multiple barrels. If not set then the launch positions are calculated using `projectile_center` and `projectile_creation_distance`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ProjectileAttackParameters.html#projectile_creation_parameters Online documentation}
     */
    projectile_creation_parameters?: CircularProjectileCreationSpecification
    /**
     * **Default:** `0`
     *
     * Used to shoot from different sides of the turret. Setting to `0.25` shoots from the right side, `0.5` shoots from the back, and `0.75` shoots from the left. The turret will look at the enemy as normal but the bullet will spawn from the offset position. Can be used to create right-handed weapons.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ProjectileAttackParameters.html#projectile_orientation_offset Online documentation}
     */
    projectile_orientation_offset?: float
  }
  export interface ProjectileTriggerDelivery extends TriggerDeliveryItem {
    readonly type: "projectile"
    /**
     * Name of a {@link ProjectilePrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ProjectileTriggerDelivery.html#projectile Online documentation}
     */
    projectile: EntityID
    /**
     * Starting speed in tiles per tick.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ProjectileTriggerDelivery.html#starting_speed Online documentation}
     */
    starting_speed: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ProjectileTriggerDelivery.html#starting_speed_deviation Online documentation}
     */
    starting_speed_deviation?: float
    /**
     * **Default:** `0`
     *
     * Maximum deviation of the projectile from source orientation, in +/- (`x radians / 2`). Example: `3.14 radians -> +/- (180° / 2)`, meaning up to 90° deviation in either direction of rotation.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ProjectileTriggerDelivery.html#direction_deviation Online documentation}
     */
    direction_deviation?: float
    /**
     * **Default:** `0`
     *
     * The maximum deviation of the projectile maximum range from `max_range` is `max_range × range_deviation ÷ 2`. This means a deviation of `0.5` will appear as a maximum of `0.25` (25%) deviation of an initial range goal. Post-deviation range may exceed `max_range` or be less than `min_range`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ProjectileTriggerDelivery.html#range_deviation Online documentation}
     */
    range_deviation?: float
    /**
     * **Default:** `1000`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ProjectileTriggerDelivery.html#max_range Online documentation}
     */
    max_range?: double
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ProjectileTriggerDelivery.html#min_range Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/PumpConnectorGraphics.html Online documentation}
   */
  export interface PumpConnectorGraphics {
    /**
     * Size of the array must be 6 or more.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PumpConnectorGraphics.html#north Online documentation}
     */
    north: readonly PumpConnectorGraphicsAnimation[]
    /**
     * Size of the array must be 6 or more.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PumpConnectorGraphics.html#east Online documentation}
     */
    east: readonly PumpConnectorGraphicsAnimation[]
    /**
     * Size of the array must be 6 or more.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PumpConnectorGraphics.html#south Online documentation}
     */
    south: readonly PumpConnectorGraphicsAnimation[]
    /**
     * Size of the array must be 6 or more.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/PumpConnectorGraphics.html#west Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/PushBackTriggerEffectItem.html Online documentation}
   */
  export interface PushBackTriggerEffectItem extends TriggerEffectItem {
    readonly type: "push-back"
    distance: float
  }
  export interface RadioButtonStyleSpecification extends StyleWithClickableGraphicalSetSpecification {
    readonly type: "radiobutton_style"
    /**
     * Name of a {@link FontPrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RadioButtonStyleSpecification.html#font Online documentation}
     */
    font?: string
    font_color?: Color
    disabled_font_color?: Color
    text_padding?: uint32
  }
  /**
   * Sprite to be shown around the entity when it is selected/held in the cursor.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/RadiusVisualisationSpecification.html Online documentation}
   */
  export interface RadiusVisualisationSpecification {
    sprite?: Sprite
    /**
     * **Default:** `0`
     *
     * Must be greater than or equal to 0.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RadiusVisualisationSpecification.html#distance Online documentation}
     */
    distance?: double
    offset?: Vector
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RadiusVisualisationSpecification.html#draw_in_cursor Online documentation}
     */
    draw_in_cursor?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RadiusVisualisationSpecification.html#draw_on_selection Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/RailPieceLayers.html Online documentation}
   */
  export interface RailPieceLayers {
    /**
     * Must have between 1 and 4 variations.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RailPieceLayers.html#metals Online documentation}
     */
    metals: SpriteVariations
    /**
     * Must have same number of variations as `metals`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RailPieceLayers.html#backplates Online documentation}
     */
    backplates: SpriteVariations
    /**
     * Must have between 1 and 4 variations.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RailPieceLayers.html#ties Online documentation}
     */
    ties: SpriteVariations
    /**
     * Must have between 1 and 4 variations.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RailPieceLayers.html#stone_path Online documentation}
     */
    stone_path: SpriteVariations
    /**
     * Must have less or equal than 4 variations.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RailPieceLayers.html#stone_path_background Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionRandomPenalty.html#arguments Online documentation}
   */
  export interface RandomPenaltyArguments {
    /**
     * Number used to seed the random generator.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RandomPenaltyArguments.html#x Online documentation}
     */
    x: NoiseNumber
    /**
     * Number used to seed the random generator.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RandomPenaltyArguments.html#y Online documentation}
     */
    y: NoiseNumber
    /**
     * Number that the penalty is applied to.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RandomPenaltyArguments.html#source Online documentation}
     */
    source: NoiseNumber
    /**
     * **Default:** `1`
     *
     * Integer used to seed the random generator.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RandomPenaltyArguments.html#seed Online documentation}
     */
    seed?: ConstantNoiseNumber
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RandomPenaltyArguments.html#amplitude Online documentation}
     */
    amplitude?: ConstantNoiseNumber
  }
  /**
   * Specified by a {@link float} between 0 and 1, including 0 and excluding 1.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/RealOrientation.html Online documentation}
   */
  export type RealOrientation = float
  /**
   * The name of a {@link RecipeCategory}.
   * @example
   * "crafting"
   * @example
   * "smelting"
   * @see {@link https://lua-api.factorio.com/1.1.110/types/RecipeCategoryID.html Online documentation}
   */
  export type RecipeCategoryID = string
  /**
   * Used when defining a {@link RecipePrototype} that uses difficulty. For a recipe without difficulty, these same properties are defined on the prototype itself.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/RecipeData.html Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RecipeData.html#ingredients Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RecipeData.html#results Online documentation}
     */
    results?: readonly ProductPrototype[]
    /**
     * The item created by this recipe. Must be the name of an {@link ItemPrototype item}, such as `"iron-gear-wheel"`.
     *
     * Only loaded, and mandatory if `results` is not defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RecipeData.html#result Online documentation}
     */
    result?: ItemID
    /**
     * **Default:** `1`
     *
     * The number of items created by this recipe.
     *
     * Only loaded if `results` is not defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RecipeData.html#result_count Online documentation}
     */
    result_count?: uint16
    /**
     * For recipes with one or more products: Subgroup, localised_name and icon default to the values of the singular/main product, but can be overwritten by the recipe. Setting the main_product to an empty string (`""`) forces the title in the recipe tooltip to use the recipe's name (not that of the product) and shows the products in the tooltip.
     *
     * If 1) there are multiple products and this property is nil, 2) this property is set to an empty string (`""`), or 3) there are no products, the recipe will use the localised_name, icon, and subgroup of the recipe. icon and subgroup become non-optional.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RecipeData.html#main_product Online documentation}
     */
    main_product?: string
    /**
     * **Default:** `0.5`
     *
     * The amount of time it takes to make this recipe. Must be `> 0.001`. Equals the number of seconds it takes to craft at crafting speed `1`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RecipeData.html#energy_required Online documentation}
     */
    energy_required?: double
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RecipeData.html#emissions_multiplier Online documentation}
     */
    emissions_multiplier?: double
    /**
     * **Default:** `30`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RecipeData.html#requester_paste_multiplier Online documentation}
     */
    requester_paste_multiplier?: uint32
    /**
     * **Default:** `0`
     *
     * Used to determine how many extra items are put into an assembling machine before it's considered "full enough". See {@linkplain https://wiki.factorio.com/Inserters#Insertion_limits insertion limits}.
     *
     * If set to `0`, it instead uses the following formula: `1.166 / (energy_required / the assembler's crafting_speed)`, rounded up, and clamped to be between`2` and `100`. The numbers used in this formula can be changed by the {@link UtilityConstants} properties `dynamic_recipe_overload_factor`, `minimum_recipe_overload_multiplier`, and `maximum_recipe_overload_multiplier`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RecipeData.html#overload_multiplier Online documentation}
     */
    overload_multiplier?: uint32
    /**
     * **Default:** `true`
     *
     * Whether the recipe is allowed to have the extra inserter overload bonus applied (4 * stack inserter stack size).
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RecipeData.html#allow_inserter_overload Online documentation}
     */
    allow_inserter_overload?: bool
    /**
     * **Default:** `true`
     *
     * This can be `false` to disable the recipe at the start of the game, or `true` to leave it enabled.
     *
     * If a recipe is unlocked via technology, this should be set to `false`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RecipeData.html#enabled Online documentation}
     */
    enabled?: bool
    /**
     * **Default:** `false`
     *
     * Hides the recipe from crafting menus.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RecipeData.html#hidden Online documentation}
     */
    hidden?: bool
    /**
     * **Default:** `false`
     *
     * Hides the recipe from item/fluid production statistics.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RecipeData.html#hide_from_stats Online documentation}
     */
    hide_from_stats?: bool
    /**
     * **Default:** `false`
     *
     * Hides the recipe from the player's crafting screen. The recipe will still show up for selection in machines.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RecipeData.html#hide_from_player_crafting Online documentation}
     */
    hide_from_player_crafting?: bool
    /**
     * **Default:** `true`
     *
     * Whether this recipe is allowed to be broken down for the recipe tooltip "Total raw" calculations.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RecipeData.html#allow_decomposition Online documentation}
     */
    allow_decomposition?: bool
    /**
     * **Default:** `true`
     *
     * Whether the recipe can be used as an intermediate recipe in hand-crafting.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RecipeData.html#allow_as_intermediate Online documentation}
     */
    allow_as_intermediate?: bool
    /**
     * **Default:** `true`
     *
     * Whether the recipe is allowed to use intermediate recipes when hand-crafting.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RecipeData.html#allow_intermediates Online documentation}
     */
    allow_intermediates?: bool
    /**
     * **Default:** `false`
     *
     * Whether the "Made in: <Machine>" part of the tool-tip should always be present, and not only when the recipe can't be hand-crafted.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RecipeData.html#always_show_made_in Online documentation}
     */
    always_show_made_in?: bool
    /**
     * **Default:** `true`
     *
     * Whether the recipe name should have the product amount in front of it. E.g. "2x Transport belt"
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RecipeData.html#show_amount_in_title Online documentation}
     */
    show_amount_in_title?: bool
    /**
     * **Default:** `false`
     *
     * Whether the products are always shown in the recipe tooltip.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RecipeData.html#always_show_products Online documentation}
     */
    always_show_products?: bool
    /**
     * **Default:** `true`
     *
     * Whether enabling this recipe unlocks its item products to show in selection lists (item filters, logistic requests, etc.).
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RecipeData.html#unlock_results Online documentation}
     */
    unlock_results?: bool
  }
  /**
   * The name of a {@link RecipePrototype}.
   * @example
   * "electronic-circuit"
   * @example
   * "kovarex-enrichment-process"
   * @see {@link https://lua-api.factorio.com/1.1.110/types/RecipeID.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/RenderLayer.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/Resistance.html Online documentation}
   */
  export interface Resistance {
    readonly type: DamageTypeID
    /**
     * **Default:** `0`
     *
     * The {@linkplain https://wiki.factorio.com/Damage#Decrease.2C_or_.22flat.22_resistance flat resistance} to the given damage type. (Higher is better)
     * @see {@link https://lua-api.factorio.com/1.1.110/types/Resistance.html#decrease Online documentation}
     */
    decrease?: float
    /**
     * **Default:** `0`
     *
     * The {@linkplain https://wiki.factorio.com/Damage#Percentage_resistance percentage resistance} to the given damage type. (Higher is better)
     * @see {@link https://lua-api.factorio.com/1.1.110/types/Resistance.html#percent Online documentation}
     */
    percent?: float
  }
  /**
   * The name of a {@link ResourceCategory}.
   * @example
   * "basic-solid"
   * @example
   * "basic-fluid"
   * @see {@link https://lua-api.factorio.com/1.1.110/types/ResourceCategoryID.html Online documentation}
   */
  export type ResourceCategoryID = string
  /**
   * ## Union members
   * - `"enabled"`
   * - `"disabled"`
   * - `"highlight"`
   * @see {@link https://lua-api.factorio.com/1.1.110/types/RichTextSetting.html Online documentation}
   */
  export type RichTextSetting = "enabled" | "disabled" | "highlight"
  export interface RotatedAnimation extends Omit<AnimationParameters, "filename"> {
    /**
     * If this property is present, all RotatedAnimation definitions have to be placed as entries in the array, and they will all be loaded from there. `layers` may not be an empty table. Each definition in the array may also have the `layers` property.
     *
     * If this property is present, all other properties, including those inherited from AnimationParameters, are ignored.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedAnimation.html#layers Online documentation}
     */
    layers?: readonly RotatedAnimation[]
    /**
     * Only loaded, and mandatory if `layers` is not defined.
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedAnimation.html#direction_count Online documentation}
     */
    direction_count?: uint32
    /**
     * Only loaded if `layers` is not defined.
     *
     * If this property exists and high resolution sprites are turned on, this is used to load the animation.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedAnimation.html#hr_version Online documentation}
     */
    hr_version?: RotatedAnimation
    /**
     * Only loaded, and mandatory if `layers`, `stripes`, and `filenames` are not defined.
     *
     * The path to the sprite file to use.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedAnimation.html#filename Online documentation}
     */
    filename?: FileName
    /**
     * Only loaded if both `layers` and `stripes` are not defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedAnimation.html#filenames Online documentation}
     */
    filenames?: readonly FileName[]
    /**
     * Only loaded if `layers` is not defined. Mandatory if `filenames` is defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedAnimation.html#lines_per_file Online documentation}
     */
    lines_per_file?: uint32
    /**
     * Only loaded if `layers` is not defined. Mandatory if `filenames` is defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedAnimation.html#slice Online documentation}
     */
    slice?: uint32
    /**
     * **Default:** `0`
     *
     * Only loaded if `layers` is not defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedAnimation.html#still_frame Online documentation}
     */
    still_frame?: uint32
    /**
     * **Default:** `false`
     *
     * Only loaded if `layers` is not defined.
     *
     * If `true`, `direction_count` must be greater than `1`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedAnimation.html#axially_symmetrical Online documentation}
     */
    axially_symmetrical?: bool
    /**
     * **Default:** `false`
     *
     * Only loaded if `layers` is not defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedAnimation.html#counterclockwise Online documentation}
     */
    counterclockwise?: bool
    /**
     * **Default:** `0.5`
     *
     * Only loaded if `layers` is not defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedAnimation.html#middle_orientation Online documentation}
     */
    middle_orientation?: RealOrientation
    /**
     * **Default:** `1`
     *
     * Only loaded if `layers` is not defined.
     *
     * Automatically clamped to be between `0` and `1`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedAnimation.html#orientation_range Online documentation}
     */
    orientation_range?: float
    /**
     * **Default:** `true`
     *
     * Only loaded if `layers` is not defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedAnimation.html#apply_projection Online documentation}
     */
    apply_projection?: bool
    /**
     * Only loaded if `layers` is not defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedAnimation.html#stripes Online documentation}
     */
    stripes?: readonly Stripe[]
  }
  /**
   * A map of rotated animations for all 4 directions of the entity. If this is loaded as a single RotatedAnimation, it applies to all directions.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedAnimation4Way.html Online documentation}
   */
  export type RotatedAnimation4Way =
    | {
        north: RotatedAnimation
        /**
         * Defaults to the north animation.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedAnimation4Way.html#east Online documentation}
         */
        east?: RotatedAnimation
        /**
         * Defaults to the north animation.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedAnimation4Way.html#south Online documentation}
         */
        south?: RotatedAnimation
        /**
         * Defaults to the east animation.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedAnimation4Way.html#west Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedSprite.html Online documentation}
   */
  export interface RotatedSprite extends Omit<SpriteParameters, "filename"> {
    /**
     * If this property is present, all RotatedSprite definitions have to be placed as entries in the array, and they will all be loaded from there. `layers` may not be an empty table. Each definition in the array may also have the `layers` property.
     *
     * If this property is present, all other properties, including those inherited from SpriteParameters, are ignored.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedSprite.html#layers Online documentation}
     */
    layers?: readonly RotatedSprite[]
    /**
     * Only loaded, and mandatory if `layers` is not defined.
     *
     * Count of direction (frames) specified.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedSprite.html#direction_count Online documentation}
     */
    direction_count?: uint16
    /**
     * Only loaded if `layers` is not defined.
     *
     * If this property exists and high resolution sprites are turned on, this is used to load the sprite.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedSprite.html#hr_version Online documentation}
     */
    hr_version?: RotatedSprite
    /**
     * Only loaded if `layers` is not defined.
     *
     * The path to the sprite file to use.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedSprite.html#filename Online documentation}
     */
    filename?: FileName
    /**
     * Only loaded, and mandatory if both `layers` and `filename` are not defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedSprite.html#filenames Online documentation}
     */
    filenames?: readonly FileName[]
    /**
     * **Default:** `0`
     *
     * Only loaded if `layers` is not defined. Mandatory if `filenames` is defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedSprite.html#lines_per_file Online documentation}
     */
    lines_per_file?: uint64
    /**
     * Only loaded if `layers` is not defined.
     *
     * Number of slices this is sliced into when using the "optimized atlas packing" option. If you are a modder, you can just ignore this property. As an example, if this is `4`, the sprite will be sliced into a `4x4` grid.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedSprite.html#slice Online documentation}
     */
    slice?: SpriteSizeType
    dice?: SpriteSizeType
    /**
     * Only loaded if `layers` is not defined.
     *
     * Same as `slice`, but this specifies only how many slices there are on the x-axis.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedSprite.html#slice_x Online documentation}
     */
    slice_x?: SpriteSizeType
    dice_x?: SpriteSizeType
    /**
     * Only loaded if `layers` is not defined.
     *
     * Same as `slice`, but this specifies only how many slices there are on the y-axis.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedSprite.html#slice_y Online documentation}
     */
    slice_y?: SpriteSizeType
    dice_y?: SpriteSizeType
    /**
     * **Default:** `false`
     *
     * Only loaded if `layers` is not defined.
     *
     * Unused.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedSprite.html#generate_sdf Online documentation}
     */
    generate_sdf?: bool
    /**
     * **Default:** `false`
     *
     * Only loaded if `layers` is not defined.
     *
     * When `true`, the same picture is used for left/right direction, just flipped, which can save half of the space required, but is not usable once the picture contains shadows, etc.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedSprite.html#axially_symmetrical Online documentation}
     */
    axially_symmetrical?: bool
    /**
     * **Default:** `false`
     *
     * Only loaded if `layers` is not defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedSprite.html#back_equals_front Online documentation}
     */
    back_equals_front?: bool
    /**
     * **Default:** `true`
     *
     * Only loaded if `layers` is not defined.
     *
     * Used to fix the inconsistency of direction of the entity in 3d when rendered and direction on the screen (where the 45 degree angle for projection is used).
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedSprite.html#apply_projection Online documentation}
     */
    apply_projection?: bool
    /**
     * **Default:** `false`
     *
     * Only loaded if `layers` is not defined.
     *
     * Set to `true` to indicate sprites in the spritesheet are in counterclockwise order.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedSprite.html#counterclockwise Online documentation}
     */
    counterclockwise?: bool
    /**
     * **Default:** `0`
     *
     * Only loaded if `layers` is not defined.
     *
     * Once the specified number of pictures is loaded, other pictures are loaded on other line. This is to allow having more sprites in matrix, to input files with too high width. The game engine limits the width of any input files to 8192px, so it is compatible with most graphics cards. 0 means that all the pictures are in one horizontal line.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedSprite.html#line_length Online documentation}
     */
    line_length?: uint32
    /**
     * **Default:** `false`
     *
     * Only loaded if `layers` is not defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/RotatedSprite.html#allow_low_quality_rotation Online documentation}
     */
    allow_low_quality_rotation?: bool
  }
  export interface ScriptTriggerEffectItem extends TriggerEffectItem {
    readonly type: "script"
    /**
     * The effect ID that will be provided in {@link import("factorio:runtime").on_script_trigger_effect on_script_trigger_effect}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ScriptTriggerEffectItem.html#effect_id Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ScrollPaneStyleSpecification.html#extra_padding_when_activated Online documentation}
     */
    extra_padding_when_activated?: int32
    extra_top_padding_when_activated?: int32
    extra_bottom_padding_when_activated?: int32
    extra_left_padding_when_activated?: int32
    extra_right_padding_when_activated?: int32
    /**
     * Sets `extra_top_margin_when_activated`, `extra_bottom_margin_when_activated`, `extra_left_margin_when_activated` and `extra_right_margin_when_activated`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ScrollPaneStyleSpecification.html#extra_margin_when_activated Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/SelectionModeFlags.html Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SequenceTipTrigger.html#triggers Online documentation}
     */
    triggers: readonly TipTrigger[]
  }
  export interface SetFilterTipTrigger {
    readonly type: "set-filter"
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SetFilterTipTrigger.html#count Online documentation}
     */
    count?: uint32
    entity?: EntityID
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SetFilterTipTrigger.html#match_type_only Online documentation}
     */
    match_type_only?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SetFilterTipTrigger.html#consecutive Online documentation}
     */
    consecutive?: bool
  }
  export interface SetLogisticRequestTipTrigger {
    readonly type: "set-logistic-request"
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SetLogisticRequestTipTrigger.html#count Online documentation}
     */
    count?: uint32
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SetLogisticRequestTipTrigger.html#logistic_chest_only Online documentation}
     */
    logistic_chest_only?: bool
  }
  export interface SetRecipeTipTrigger {
    readonly type: "set-recipe"
    recipe?: RecipeID
    machine?: EntityID
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SetRecipeTipTrigger.html#consecutive Online documentation}
     */
    consecutive?: bool
    /**
     * **Default:** `any`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SetRecipeTipTrigger.html#uses_fluid Online documentation}
     */
    uses_fluid?: bool
  }
  export interface SetTileTriggerEffectItem extends TriggerEffectItem {
    readonly type: "set-tile"
    tile_name: TileID
    radius: float
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SetTileTriggerEffectItem.html#apply_projection Online documentation}
     */
    apply_projection?: bool
    tile_collision_mask?: CollisionMask
  }
  /**
   * A struct that provides access to the user-set values of startup {@linkplain https://wiki.factorio.com/Tutorial:Mod_settings mod settings}.
   * @example
   * -- Accessing the value of a mod setting
   * local val = settings.startup["my-mod-setting-name"].value
   * @see {@link https://lua-api.factorio.com/1.1.110/types/Settings.html Online documentation}
   */
  export interface Settings {
    /**
     * All startup mod settings, indexed by the name of the setting.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/Settings.html#startup Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ShiftBuildTipTrigger.html#count Online documentation}
     */
    count?: uint32
  }
  export interface ShowExplosionOnChartTriggerEffectItem extends TriggerEffectItem {
    readonly type: "show-explosion-on-chart"
    scale: float
  }
  /**
   * @see LampPrototype.signal_to_color_mapping
   * @see {@link https://lua-api.factorio.com/1.1.110/prototypes/LampPrototype.html#signal_to_color_mapping Online documentation}
   */
  export interface SignalColorMapping {
    readonly type: "virtual" | "item" | "fluid"
    /**
     * Name of the signal that shows this color.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SignalColorMapping.html#name Online documentation}
     */
    name: VirtualSignalID | ItemID | FluidID
    color: Color
  }
  export interface SignalIDConnector {
    readonly type: "virtual" | "item" | "fluid"
    /**
     * Name of the signal that shows this color.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SignalIDConnector.html#name Online documentation}
     */
    name: VirtualSignalID | ItemID | FluidID
  }
  export interface SimpleModifier extends BaseModifier {
    /**
     * Modification value, which will be added to the variable it modifies.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SimpleModifier.html#modifier Online documentation}
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
   * surface.create_entities_from_blueprint_string{string=string,position=position,force=force,direction=defines.direction,flip_horizontal=bool,flip_vertical=bool,by_player=player}
   * ```
   * @see {@link https://lua-api.factorio.com/1.1.110/types/SimulationDefinition.html Online documentation}
   */
  export interface SimulationDefinition {
    /**
     * The save file that is used for this simulation. If not given and `generate_map` is `true`, a map is generated by the game.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SimulationDefinition.html#save Online documentation}
     */
    save?: FileName
    /**
     * This code is run as a (silent) console command inside the simulation when it is first initialized. Since this is run as a console command, the restrictions of console commands apply, e.g. `require` is not available, see {@link import("factorio:runtime").libraries here}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SimulationDefinition.html#init_file Online documentation}
     */
    init_file?: FileName
    /**
     * **Default:** `""`
     *
     * Only loaded if `init_file` is not defined.
     *
     * This code is run as a (silent) console command inside the simulation when it is first initialized. Since this is run as a console command, the restrictions of console commands apply, e.g. `require` is not available, see {@link import("factorio:runtime").libraries here}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SimulationDefinition.html#init Online documentation}
     */
    init?: string
    /**
     * This code is run as a (silent) console command inside the simulation every time the simulation is updated. Since this is run as a console command, the restrictions of console commands apply, e.g. `require` is not available, see {@link import("factorio:runtime").libraries here}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SimulationDefinition.html#update_file Online documentation}
     */
    update_file?: FileName
    /**
     * **Default:** `""`
     *
     * Only loaded if `update_file` is not defined.
     *
     * This code is run as a (silent) console command inside the simulation every time the simulation is updated. Since this is run as a console command, the restrictions of console commands apply, e.g. `require` is not available, see {@link import("factorio:runtime").libraries here}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SimulationDefinition.html#update Online documentation}
     */
    update?: string
    /**
     * An array of mods that will be run in this simulation if they are present and enabled.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SimulationDefinition.html#mods Online documentation}
     */
    mods?: readonly string[]
    /**
     * **Default:** `0`
     *
     * Amount of ticks that this simulation should run for before the simulation is shown to the player. These updates happen after init/init_file has been run and at the highest possible rate (> 60 UPS).
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SimulationDefinition.html#init_update_count Online documentation}
     */
    init_update_count?: uint32
    /**
     * **Default:** `0`
     *
     * How long this simulation takes. In the main menu simulations, another simulation will start after this simulation ends.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SimulationDefinition.html#length Online documentation}
     */
    length?: uint32
    /**
     * **Default:** `false`
     *
     * If `save` is not given and this is true, a map gets generated by the game for use in the simulation.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SimulationDefinition.html#generate_map Online documentation}
     */
    generate_map?: bool
    /**
     * **Default:** `true`
     *
     * If this is true, the map of the simulation is set to be a lab-tile checkerboard in the area of `{{-20, -15},{20, 15}}` when the scenario is first initialized (before init/init_file run).
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SimulationDefinition.html#checkboard Online documentation}
     */
    checkboard?: bool
    /**
     * Multiplier for the simulation volume set by the player in the sound settings.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SimulationDefinition.html#volume_modifier Online documentation}
     */
    volume_modifier?: float
    /**
     * If true, overrides the simulation volume set by the player in the sound settings, simply setting the volume modifier to `1`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SimulationDefinition.html#override_volume Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/SmokeSource.html Online documentation}
   */
  export interface SmokeSource {
    name: TrivialSmokeID
    /**
     * Can't be negative, NaN or infinite.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SmokeSource.html#frequency Online documentation}
     */
    frequency: double
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SmokeSource.html#offset Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SmokeSource.html#starting_frame_speed Online documentation}
     */
    starting_frame_speed?: uint16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SmokeSource.html#starting_frame_speed_deviation Online documentation}
     */
    starting_frame_speed_deviation?: double
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SmokeSource.html#starting_frame Online documentation}
     */
    starting_frame?: uint16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SmokeSource.html#starting_frame_deviation Online documentation}
     */
    starting_frame_deviation?: double
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SmokeSource.html#slow_down_factor Online documentation}
     */
    slow_down_factor?: uint8
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SmokeSource.html#height Online documentation}
     */
    height?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SmokeSource.html#height_deviation Online documentation}
     */
    height_deviation?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SmokeSource.html#starting_vertical_speed Online documentation}
     */
    starting_vertical_speed?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SmokeSource.html#starting_vertical_speed_deviation Online documentation}
     */
    starting_vertical_speed_deviation?: float
    /**
     * **Default:** `0.965`
     *
     * A value between `0` and `1`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SmokeSource.html#vertical_speed_slowdown Online documentation}
     */
    vertical_speed_slowdown?: float
  }
  /**
   * @example
   * {
   *   filename = "__base__/sound/ambient/world-ambience-3.ogg",
   *   volume = 1.2
   * }
   * @see {@link https://lua-api.factorio.com/1.1.110/types/Sound.html Online documentation}
   */
  export type Sound =
    | {
        aggregation?: AggregationSpecification
        /**
         * **Default:** `false`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/Sound.html#allow_random_repeat Online documentation}
         */
        allow_random_repeat?: bool
        /**
         * **Default:** `1`
         *
         * Modifies how far a sound can be heard. Must be between `0` and `1` inclusive.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/Sound.html#audible_distance_modifier Online documentation}
         */
        audible_distance_modifier?: double
        game_controller_vibration_data?: GameControllerVibrationData
        variations?: SoundDefinition | readonly SoundDefinition[]
        /**
         * Supported sound file formats are `.ogg` (Vorbis) and `.wav`.
         *
         * Only loaded, and mandatory if `variations` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/Sound.html#filename Online documentation}
         */
        filename?: FileName
        /**
         * **Default:** `1`
         *
         * Only loaded if `variations` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/Sound.html#volume Online documentation}
         */
        volume?: float
        /**
         * Only loaded if `variations` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/Sound.html#preload Online documentation}
         */
        preload?: bool
        /**
         * **Default:** `1`
         *
         * Speed must be `>= 1 / 64`. This sets both min and max speeds.
         *
         * Only loaded if `variations` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/Sound.html#speed Online documentation}
         */
        speed?: float
        /**
         * **Default:** `1`
         *
         * Must be `>= 1 / 64`.
         *
         * Only loaded if both `variations` and `speed` are not defined.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/Sound.html#min_speed Online documentation}
         */
        min_speed?: float
        /**
         * **Default:** `1`
         *
         * Must be `>= min_speed`.
         *
         * Only loaded if `variations` is not defined. Only loaded, and mandatory if `min_speed` is defined.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/Sound.html#max_speed Online documentation}
         */
        max_speed?: float
      }
    | readonly SoundDefinition[]
  export interface SoundDefinition {
    /**
     * Supported sound file formats are `.ogg` (Vorbis) and `.wav`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SoundDefinition.html#filename Online documentation}
     */
    filename: FileName
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SoundDefinition.html#volume Online documentation}
     */
    volume?: float
    preload?: bool
    /**
     * **Default:** `1`
     *
     * Speed must be `>= 1 / 64`. This sets both min and max speeds.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SoundDefinition.html#speed Online documentation}
     */
    speed?: float
    /**
     * **Default:** `1`
     *
     * Only loaded if `speed` is not defined.
     *
     * Must be `>= 1 / 64`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SoundDefinition.html#min_speed Online documentation}
     */
    min_speed?: float
    /**
     * **Default:** `1`
     *
     * Only loaded, and mandatory, if `min_speed` is defined.
     *
     * Must be `>= min_speed`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SoundDefinition.html#max_speed Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/SoundType.html Online documentation}
   */
  export type SoundType = "game-effect" | "gui-effect" | "ambient" | "environment" | "walking" | "alert" | "wind"
  /**
   * The definition of a evolution and probability weights for a {@link UnitSpawnDefinition spawnable unit} for a {@link EnemySpawnerPrototype}.
   *
   * It can be specified as a table with named or numbered keys, but not a mix of both. If this is specified as a table with numbered keys then the first value is the evolution factor and the second is the spawn weight.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/SpawnPoint.html Online documentation}
   */
  export type SpawnPoint =
    | {
        evolution_factor: double
        /**
         * Must be `>= 0`.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/SpawnPoint.html#spawn_weight Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/SpiderEnginePrototype.html Online documentation}
   */
  export interface SpiderEnginePrototype {
    legs: SpiderLegSpecification | readonly SpiderLegSpecification[]
    /**
     * The string content is irrelevant, if it is present at all then the {@link SpiderVehiclePrototype} is considered to have {@link EntityWithOwnerPrototype#is_military_target EntityWithOwnerPrototype::is_military_target} set to true. This gets enemies interested in attacking the spider vehicle even when nobody is in it.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpiderEnginePrototype.html#military_target Online documentation}
     */
    military_target?: string
  }
  /**
   * @see SpiderLegPrototype.graphics_set
   * @see {@link https://lua-api.factorio.com/1.1.110/prototypes/SpiderLegPrototype.html#graphics_set Online documentation}
   */
  export interface SpiderLegGraphicsSet {
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpiderLegGraphicsSet.html#joint_turn_offset Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpiderLegPart.html#middle_offset_from_top Online documentation}
     */
    middle_offset_from_top?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpiderLegPart.html#middle_offset_from_bottom Online documentation}
     */
    middle_offset_from_bottom?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpiderLegPart.html#top_end_length Online documentation}
     */
    top_end_length?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpiderLegPart.html#bottom_end_length Online documentation}
     */
    bottom_end_length?: float
  }
  /**
   * Used by {@link SpiderEnginePrototype} for {@link SpiderVehiclePrototype}.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/SpiderLegSpecification.html Online documentation}
   */
  export interface SpiderLegSpecification {
    /**
     * Name of a {@link SpiderLegPrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpiderLegSpecification.html#leg Online documentation}
     */
    leg: EntityID
    mount_position: Vector
    ground_position: Vector
    /**
     * The 1-based indices of the legs that should block this leg's movement.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpiderLegSpecification.html#blocking_legs Online documentation}
     */
    blocking_legs: readonly uint32[]
    /**
     * For triggers, the source and target is the leg entity. Certain effects may not raise as desired, e.g. `"push-back"` does nothing, and `"script"` has `leg` as the source and target of the event.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpiderLegSpecification.html#leg_hit_the_ground_trigger Online documentation}
     */
    leg_hit_the_ground_trigger?: TriggerEffect
  }
  /**
   * Used to specify the graphics for {@link SpiderVehiclePrototype}.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/SpiderVehicleGraphicsSet.html Online documentation}
   */
  export interface SpiderVehicleGraphicsSet {
    base_animation?: RotatedAnimation
    shadow_base_animation?: RotatedAnimation
    animation?: RotatedAnimation
    shadow_animation?: RotatedAnimation
    /**
     * **Default:** `"higher-object-under"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpiderVehicleGraphicsSet.html#base_render_layer Online documentation}
     */
    base_render_layer?: RenderLayer
    /**
     * **Default:** `"wires-above"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpiderVehicleGraphicsSet.html#render_layer Online documentation}
     */
    render_layer?: RenderLayer
    /**
     * **Default:** `"object"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpiderVehicleGraphicsSet.html#autopilot_destination_visualisation_render_layer Online documentation}
     */
    autopilot_destination_visualisation_render_layer?: RenderLayer
    light?: LightDefinition
    /**
     * Placed in multiple positions, as determined by `light_positions`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpiderVehicleGraphicsSet.html#eye_light Online documentation}
     */
    eye_light?: LightDefinition
    autopilot_destination_on_map_visualisation?: Animation
    autopilot_destination_queue_on_map_visualisation?: Animation
    autopilot_destination_visualisation?: Animation
    autopilot_destination_queue_visualisation?: Animation
    /**
     * **Default:** `0.125`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpiderVehicleGraphicsSet.html#autopilot_path_visualisation_line_width Online documentation}
     */
    autopilot_path_visualisation_line_width?: float
    /**
     * **Default:** `2`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpiderVehicleGraphicsSet.html#autopilot_path_visualisation_on_map_line_width Online documentation}
     */
    autopilot_path_visualisation_on_map_line_width?: float
    /**
     * Defines where each `eye_light` is placed. One array per eye and each of those arrays should contain one position per body direction.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpiderVehicleGraphicsSet.html#light_positions Online documentation}
     */
    light_positions?: readonly (readonly Vector[])[]
  }
  /**
   * @see NoiseFunctionSpotNoise.arguments
   * @see {@link https://lua-api.factorio.com/1.1.110/types/NoiseFunctionSpotNoise.html#arguments Online documentation}
   */
  export interface SpotNoiseArguments {
    x: NoiseNumber
    y: NoiseNumber
    /**
     * Integer. First random seed, usually the map seed is used.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpotNoiseArguments.html#seed0 Online documentation}
     */
    seed0: ConstantNoiseNumber
    /**
     * Integer. Second random seed, usually chosen to identify the noise layer.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpotNoiseArguments.html#seed1 Online documentation}
     */
    seed1: ConstantNoiseNumber
    /**
     * **Default:** `512`
     *
     * Integer. The width and height of each region.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpotNoiseArguments.html#region_size Online documentation}
     */
    region_size?: ConstantNoiseNumber
    /**
     * **Default:** `0`
     *
     * Integer. Offset of the first candidate point to use.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpotNoiseArguments.html#skip_offset Online documentation}
     */
    skip_offset?: ConstantNoiseNumber
    /**
     * **Default:** `1`
     *
     * Integer. Number of candidate points to skip over after each one used as a spot, including the used one.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpotNoiseArguments.html#skip_span Online documentation}
     */
    skip_span?: ConstantNoiseNumber
    /**
     * **Default:** `256`
     *
     * Integer. How many candidate points to generate.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpotNoiseArguments.html#candidate_point_count Online documentation}
     */
    candidate_point_count?: ConstantNoiseNumber
    /**
     * **Default:** `depends on `skip_span``
     *
     * Integer. An alternative to `candidate_point_count`: number of spots to generate: `candidate_spot_count = X` is equivalent to `candidate_point_count / skip_span = X`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpotNoiseArguments.html#candidate_spot_count Online documentation}
     */
    candidate_spot_count?: ConstantNoiseNumber
    /**
     * **Default:** `depends on `region_size` and `candidate_point_count``
     *
     * The minimum spacing to *try* to achieve while randomly picking points. Spot noise may end up placing spots closer than this in crowded regions.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpotNoiseArguments.html#suggested_minimum_candidate_point_spacing Online documentation}
     */
    suggested_minimum_candidate_point_spacing?: ConstantNoiseNumber
    /**
     * **Default:** `true`
     *
     * Whether to place a hard limit on the total quantity in each region by reducing the size of any spot (which will be the last spot chosen) that would put it over the limit.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpotNoiseArguments.html#hard_region_target_quantity Online documentation}
     */
    hard_region_target_quantity?: ConstantNoiseBoolean
    /**
     * A numeric expression that will be evaluated for each candidate spot to calculate density at that point.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpotNoiseArguments.html#density_expression Online documentation}
     */
    density_expression: NoiseLiteralExpression
    /**
     * A numeric expression that will be evaluated for each candidate spot to calculate the spot's quantity.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpotNoiseArguments.html#spot_quantity_expression Online documentation}
     */
    spot_quantity_expression: NoiseLiteralExpression
    /**
     * A numeric expression that will be evaluated for each candidate spot to calculate the spot's radius. This, together with quantity, will determine the spots peak value.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpotNoiseArguments.html#spot_radius_expression Online documentation}
     */
    spot_radius_expression: NoiseLiteralExpression
    /**
     * A numeric expression that will be evaluated for each candidate spot to calculate the spot's favorability. Spots with higher favorability will be considered first when building the final list of spots for a region.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpotNoiseArguments.html#spot_favorability_expression Online documentation}
     */
    spot_favorability_expression: NoiseLiteralExpression
    basement_value: ConstantNoiseNumber
    maximum_spot_basement_radius: ConstantNoiseNumber
    comment?: NoiseLiteralString
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/Sprite.html Online documentation}
   */
  export interface Sprite extends Omit<SpriteParameters, "filename"> {
    /**
     * If this property is present, all Sprite definitions have to be placed as entries in the array, and they will all be loaded from there. `layers` may not be an empty table. Each definition in the array may also have the `layers` property.
     *
     * If this property is present, all other properties, including those inherited from SpriteParameters, are ignored.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/Sprite.html#layers Online documentation}
     */
    layers?: readonly Sprite[]
    /**
     * Only loaded, and mandatory if `layers` is not defined.
     *
     * The path to the sprite file to use.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/Sprite.html#filename Online documentation}
     */
    filename?: FileName
    /**
     * Only loaded if `layers` is not defined.
     *
     * If this property exists and high resolution sprites are turned on, this is used to load the Sprite.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/Sprite.html#hr_version Online documentation}
     */
    hr_version?: Sprite
    /**
     * Only loaded if `layers` is not defined.
     *
     * Number of slices this is sliced into when using the "optimized atlas packing" option. If you are a modder, you can just ignore this property. As an example, if this is `4`, the sprite will be sliced into a `4x4` grid.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/Sprite.html#slice Online documentation}
     */
    slice?: SpriteSizeType
    dice?: SpriteSizeType
    /**
     * Only loaded if `layers` is not defined.
     *
     * Same as `slice`, but this specifies only how many slices there are on the x-axis.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/Sprite.html#slice_x Online documentation}
     */
    slice_x?: SpriteSizeType
    dice_x?: SpriteSizeType
    /**
     * Only loaded if `layers` is not defined.
     *
     * Same as `slice`, but this specifies only how many slices there are on the y-axis.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/Sprite.html#slice_y Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/Sprite4Way.html Online documentation}
   */
  export type Sprite4Way =
    | {
        sheets?: readonly SpriteNWaySheet[]
        /**
         * Only loaded if `sheets` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/Sprite4Way.html#sheet Online documentation}
         */
        sheet?: SpriteNWaySheet
        /**
         * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/Sprite4Way.html#north Online documentation}
         */
        north?: Sprite
        /**
         * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/Sprite4Way.html#east Online documentation}
         */
        east?: Sprite
        /**
         * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/Sprite4Way.html#south Online documentation}
         */
        south?: Sprite
        /**
         * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/Sprite4Way.html#west Online documentation}
         */
        west?: Sprite
      }
    | Sprite
  /**
   * A map of sprites for all 8 directions of the entity.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/Sprite8Way.html Online documentation}
   */
  export interface Sprite8Way {
    sheets?: readonly SpriteNWaySheet[]
    /**
     * Only loaded if `sheets` is not defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/Sprite8Way.html#sheet Online documentation}
     */
    sheet?: SpriteNWaySheet
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/Sprite8Way.html#north Online documentation}
     */
    north?: Sprite
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/Sprite8Way.html#north_east Online documentation}
     */
    north_east?: Sprite
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/Sprite8Way.html#east Online documentation}
     */
    east?: Sprite
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/Sprite8Way.html#south_east Online documentation}
     */
    south_east?: Sprite
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/Sprite8Way.html#south Online documentation}
     */
    south?: Sprite
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/Sprite8Way.html#south_west Online documentation}
     */
    south_west?: Sprite
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/Sprite8Way.html#west Online documentation}
     */
    west?: Sprite
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/Sprite8Way.html#north_west Online documentation}
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
   * - `"terrain"`: This flag will internally set these flags: `"mipmap"`, `"linear-mip-level"`, `"linear-minification"`, `"no-crop"`, `"group=terrain"`
   * - `"terrain-effect-map"`: This flag will internally set these flags: `"mipmap"`, `"linear-mip-level"`, `"linear-minification"`, `"no-crop"`, `"terrain-effect-map"` (internal group flag)
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/SpriteFlags.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/SpriteNWaySheet.html Online documentation}
   */
  export interface SpriteNWaySheet extends SpriteParameters {
    /**
     * **Default:** `4 if used in Sprite4Way, 8 if used in Sprite8Way`
     *
     * Specifies how many of the directions of the SpriteNWay are filled up with this sheet.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpriteNWaySheet.html#frames Online documentation}
     */
    frames?: uint32
    /**
     * If this property exists and high resolution sprites are turned on, this is used to load the Sheet.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpriteNWaySheet.html#hr_version Online documentation}
     */
    hr_version?: SpriteNWaySheet
    /**
     * **Default:** `false`
     *
     * Unused.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpriteNWaySheet.html#generate_sdf Online documentation}
     */
    generate_sdf?: bool
  }
  export interface SpriteParameters {
    /**
     * The path to the sprite file to use.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpriteParameters.html#filename Online documentation}
     */
    filename: FileName
    /**
     * **Default:** `"medium"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpriteParameters.html#priority Online documentation}
     */
    priority?: SpritePriority
    flags?: SpriteFlags
    /**
     * The width and height of the sprite. If this is a tuple, the first member of the tuple is the width and the second is the height. Otherwise the size is both width and height. Width and height may only be in the range of 0-8192.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpriteParameters.html#size Online documentation}
     */
    size?: SpriteSizeType | readonly [SpriteSizeType, SpriteSizeType]
    /**
     * Mandatory if `size` is not defined.
     *
     * Width of the picture in pixels, from 0-8192.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpriteParameters.html#width Online documentation}
     */
    width?: SpriteSizeType
    /**
     * Mandatory if `size` is not defined.
     *
     * Height of the picture in pixels, from 0-8192.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpriteParameters.html#height Online documentation}
     */
    height?: SpriteSizeType
    /**
     * **Default:** `0`
     *
     * Horizontal position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpriteParameters.html#x Online documentation}
     */
    x?: SpriteSizeType
    /**
     * **Default:** `0`
     *
     * Vertical position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpriteParameters.html#y Online documentation}
     */
    y?: SpriteSizeType
    /**
     * Loaded only when `x` and `y` are both `0`. The first member of the tuple is `x` and the second is `y`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpriteParameters.html#position Online documentation}
     */
    position?: readonly [SpriteSizeType, SpriteSizeType]
    /**
     * **Default:** ``{0, 0}``
     *
     * The shift in tiles. `util.by_pixel()` can be used to divide the shift by 32 which is the usual pixel height/width of 1 tile in normal resolution. Note that 32 pixel tile height/width is not enforced anywhere - any other tile height or width is also possible.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpriteParameters.html#shift Online documentation}
     */
    shift?: Vector
    /**
     * **Default:** `1`
     *
     * Values other than `1` specify the scale of the sprite on default zoom. A scale of `2` means that the picture will be two times bigger on screen (and thus more pixelated).
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpriteParameters.html#scale Online documentation}
     */
    scale?: double
    /**
     * **Default:** `false`
     *
     * Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true. This takes precedence over `draw_as_glow` and `draw_as_light`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpriteParameters.html#draw_as_shadow Online documentation}
     */
    draw_as_shadow?: bool
    /**
     * **Default:** `false`
     *
     * Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true. This takes precedence over `draw_as_light`.
     *
     * Draws first as a normal sprite, then again as a light layer. See {@linkplain https://forums.factorio.com/91682}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpriteParameters.html#draw_as_glow Online documentation}
     */
    draw_as_glow?: bool
    /**
     * **Default:** `false`
     *
     * Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpriteParameters.html#draw_as_light Online documentation}
     */
    draw_as_light?: bool
    /**
     * **Default:** `0`
     *
     * Only loaded if this is an icon, that is it has the flag `"group=icon"` or `"group=gui"`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpriteParameters.html#mipmap_count Online documentation}
     */
    mipmap_count?: uint8
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpriteParameters.html#apply_runtime_tint Online documentation}
     */
    apply_runtime_tint?: bool
    /**
     * **Default:** ``{r=1, g=1, b=1, a=1}``
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpriteParameters.html#tint Online documentation}
     */
    tint?: Color
    /**
     * **Default:** `"normal"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpriteParameters.html#blend_mode Online documentation}
     */
    blend_mode?: BlendMode
    /**
     * **Default:** `false`
     *
     * Minimal mode is entered when mod loading fails. You are in it when you see the gray box after (part of) the loading screen that tells you a mod error. Modders can ignore this property.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpriteParameters.html#load_in_minimal_mode Online documentation}
     */
    load_in_minimal_mode?: bool
    /**
     * **Default:** `true`
     *
     * Whether alpha should be pre-multiplied.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpriteParameters.html#premul_alpha Online documentation}
     */
    premul_alpha?: bool
    /**
     * **Default:** `false`
     *
     * This property is only used by sprites used in {@link UtilitySprites} that have the `"icon"` flag set.
     *
     * If this is set to `true`, the game will generate an icon shadow (using signed distance fields) for the sprite.
     *
     * ![Example of the icon shadow in the character modifier icon used by the steel axe research](https://lua-api.factorio.com/1.1.110/static/images/Generate_sdf_example.png)
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpriteParameters.html#generate_sdf Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/SpritePriority.html Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpriteSheet.html#layers Online documentation}
     */
    layers?: readonly SpriteSheet[]
    /**
     * Only loaded if `layers` is not defined.
     *
     * If this property exists and high resolution sprites are turned on, this is used to load the SpriteSheet.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpriteSheet.html#hr_version Online documentation}
     */
    hr_version?: SpriteSheet
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpriteSheet.html#variation_count Online documentation}
     */
    variation_count?: uint32
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpriteSheet.html#repeat_count Online documentation}
     */
    repeat_count?: uint32
    /**
     * **Default:** `Value of `variation_count``
     * @see {@link https://lua-api.factorio.com/1.1.110/types/SpriteSheet.html#line_length Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/SpriteVariations.html Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/StackInserterCapacityBonusModifier.html#infer_icon Online documentation}
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/StackInserterCapacityBonusModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface StackTransferTipTrigger {
    readonly type: "stack-transfer"
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/StackTransferTipTrigger.html#count Online documentation}
     */
    count?: uint32
    /**
     * **Default:** `any transfer`
     *
     * ## Union members
     * - `"stack"`
     * - `"inventory"`
     * - `"whole-inventory"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/StackTransferTipTrigger.html#transfer Online documentation}
     */
    transfer?: "stack" | "inventory" | "whole-inventory"
  }
  export interface StateSteeringSettings {
    /**
     * Not including the radius of the unit.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/StateSteeringSettings.html#radius Online documentation}
     */
    radius: double
    separation_factor: double
    separation_force: double
    /**
     * Used only for special "to look good" purposes (like in trailer).
     * @see {@link https://lua-api.factorio.com/1.1.110/types/StateSteeringSettings.html#force_unit_fuzzy_goto_behavior Online documentation}
     */
    force_unit_fuzzy_goto_behavior: bool
  }
  export interface StatusColors {
    /**
     * **Default:** ``{1, 1, 1, 1}``
     * @see {@link https://lua-api.factorio.com/1.1.110/types/StatusColors.html#idle Online documentation}
     */
    idle?: Color
    /**
     * **Default:** `idle`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/StatusColors.html#no_minable_resources Online documentation}
     */
    no_minable_resources?: Color
    /**
     * **Default:** `idle`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/StatusColors.html#full_output Online documentation}
     */
    full_output?: Color
    /**
     * **Default:** `idle`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/StatusColors.html#insufficient_input Online documentation}
     */
    insufficient_input?: Color
    /**
     * **Default:** `idle`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/StatusColors.html#disabled Online documentation}
     */
    disabled?: Color
    /**
     * **Default:** `No color`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/StatusColors.html#no_power Online documentation}
     */
    no_power?: Color
    /**
     * **Default:** ``{1, 1, 1, 1}``
     * @see {@link https://lua-api.factorio.com/1.1.110/types/StatusColors.html#working Online documentation}
     */
    working?: Color
    /**
     * **Default:** `working`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/StatusColors.html#low_power Online documentation}
     */
    low_power?: Color
  }
  /**
   * @see MapSettings.steering
   * @see {@link https://lua-api.factorio.com/1.1.110/prototypes/MapSettings.html#steering Online documentation}
   */
  export interface SteeringSettings {
    default: StateSteeringSettings
    moving: StateSteeringSettings
  }
  /**
   * @see StorageTankPrototype.pictures
   * @see {@link https://lua-api.factorio.com/1.1.110/prototypes/StorageTankPrototype.html#pictures Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/StreamAttackParameters.html#fluid_consumption Online documentation}
     */
    fluid_consumption?: float
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/StreamAttackParameters.html#gun_barrel_length Online documentation}
     */
    gun_barrel_length?: float
    projectile_creation_parameters?: CircularProjectileCreationSpecification
    /**
     * @see {@link https://lua-api.factorio.com/1.1.110/types/StreamAttackParameters.html#gun_center_shift Online documentation}
     */
    gun_center_shift?: Vector | GunShift4Way
    /**
     * Controls which fluids can fuel this stream attack and their potential damage bonuses.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/StreamAttackParameters.html#fluids Online documentation}
     */
    fluids?: readonly StreamFluidProperties[]
  }
  /**
   * @see StreamAttackParameters.fluids
   * @see {@link https://lua-api.factorio.com/1.1.110/types/StreamAttackParameters.html#fluids Online documentation}
   */
  export interface StreamFluidProperties {
    readonly type: FluidID
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/StreamFluidProperties.html#damage_modifier Online documentation}
     */
    damage_modifier?: double
  }
  export interface StreamTriggerDelivery extends TriggerDeliveryItem {
    readonly type: "stream"
    /**
     * Name of a {@link FluidStreamPrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/StreamTriggerDelivery.html#stream Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/StretchRule.html Online documentation}
   */
  export type StretchRule = "on" | "off" | "auto" | "stretch_and_expand"
  /**
   * Used as an alternative way to specify animations.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/Stripe.html Online documentation}
   */
  export interface Stripe {
    width_in_frames: uint32
    /**
     * Mandatory when Stripe is used in {@link Animation}.
     *
     * Optional when it is used in {@link RotatedAnimation}, where it defaults to {@link RotatedAnimation#direction_count RotatedAnimation::direction_count}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/Stripe.html#height_in_frames Online documentation}
     */
    height_in_frames: uint32
    filename: FileName
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/Stripe.html#x Online documentation}
     */
    x?: uint32
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/Stripe.html#y Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/StyleSpecification.html Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TabStyleSpecification.html#font Online documentation}
     */
    font?: string
    /**
     * Name of a {@link FontPrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TabStyleSpecification.html#badge_font Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TableStyleSpecification.html#cell_padding Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/TechnologyData.html Online documentation}
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
     *   upgrade = true
     * }
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TechnologyData.html#upgrade Online documentation}
     */
    upgrade?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TechnologyData.html#enabled Online documentation}
     */
    enabled?: bool
    /**
     * **Default:** `false`
     *
     * Hides the technology from the tech screen.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TechnologyData.html#hidden Online documentation}
     */
    hidden?: bool
    /**
     * **Default:** `false`
     *
     * Controls whether the technology is shown in the tech GUI when it is not `enabled`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TechnologyData.html#visible_when_disabled Online documentation}
     */
    visible_when_disabled?: bool
    /**
     * **Default:** `false`
     *
     * Controls whether the technology cost ignores the tech cost multiplier set in the {@link DifficultySettings}. E.g. `4` for the default expensive difficulty.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TechnologyData.html#ignore_tech_cost_multiplier Online documentation}
     */
    ignore_tech_cost_multiplier?: bool
    /**
     * Determines the cost in items and time of the technology.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TechnologyData.html#unit Online documentation}
     */
    unit: TechnologyUnit
    /**
     * `"infinite"` for infinite technologies, otherwise `uint32`.
     *
     * Defaults to the same level as the technology, which is `0` for non-upgrades, and the level of the upgrade for upgrades.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TechnologyData.html#max_level Online documentation}
     */
    max_level?: uint32 | "infinite"
    /**
     * List of technologies needed to be researched before this one can be researched.
     * @example
     * prerequisites = {"explosives", "military-2"}
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TechnologyData.html#prerequisites Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TechnologyData.html#effects Online documentation}
     */
    effects?: readonly Modifier[]
  }
  /**
   * The name of a {@link TechnologyPrototype}.
   * @example
   * "automated-rail-transportation"
   * @example
   * "steel-axe"
   * @see {@link https://lua-api.factorio.com/1.1.110/types/TechnologyID.html Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TechnologySlotStyleSpecification.html#level_font Online documentation}
     */
    level_font?: string
    /**
     * Name of a {@link FontPrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TechnologySlotStyleSpecification.html#level_range_font Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/TechnologyUnit.html Online documentation}
   */
  export interface TechnologyUnit {
    /**
     * How many units are needed. Must be `> 0`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TechnologyUnit.html#count Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TechnologyUnit.html#count_formula Online documentation}
     */
    count_formula?: string
    /**
     * How much time one unit takes to research. In a lab with a crafting speed of `1`, it corresponds to the number of seconds.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TechnologyUnit.html#time Online documentation}
     */
    time: double
    /**
     * List of ingredients needed for one unit of research. The items must all be {@link ToolPrototype ToolPrototypes}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TechnologyUnit.html#ingredients Online documentation}
     */
    ingredients: readonly IngredientPrototype[]
  }
  export interface TextBoxStyleSpecification extends BaseStyleSpecification {
    readonly type: "textbox_style"
    /**
     * Name of a {@link FontPrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TextBoxStyleSpecification.html#font Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ThrowCapsuleAction.html#uses_stack Online documentation}
     */
    uses_stack?: bool
  }
  /**
   * @see FireFlamePrototype.burnt_patch_alpha_variations
   * @see {@link https://lua-api.factorio.com/1.1.110/prototypes/FireFlamePrototype.html#burnt_patch_alpha_variations Online documentation}
   */
  export interface TileAndAlpha {
    tile: TileID
    alpha: float
  }
  /**
   * @see TilePrototype.build_sound
   * @see {@link https://lua-api.factorio.com/1.1.110/prototypes/TilePrototype.html#build_sound Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/TileID.html Online documentation}
   */
  export type TileID = string
  /**
   * Name of an allowed tile, or a list of two tile names for entities allowed on transitions.
   * @see AutoplaceSpecification.tile_restriction
   * @see {@link https://lua-api.factorio.com/1.1.110/types/AutoplaceSpecification.html#tile_restriction Online documentation}
   */
  export type TileIDRestriction = TileID | readonly [TileID, TileID]
  /**
   * ## Union members
   * - `"zero"`
   * - `"water"`
   * - `"water-overlay"`
   * - `"ground"`
   * - `"top"`
   * @see {@link https://lua-api.factorio.com/1.1.110/types/TileRenderLayer.html Online documentation}
   */
  export type TileRenderLayer = "zero" | "water" | "water-overlay" | "ground" | "top"
  /**
   * Used by {@link TilePrototype}.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/TileSprite.html Online documentation}
   */
  export interface TileSprite {
    /**
     * Frame count.
     *
     * Optional if it is loaded inside of a `hr_version`, see that property for more information.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TileSprite.html#count Online documentation}
     */
    count: uint32
    picture: FileName
    /**
     * If this property exists and high resolution sprites are turned on, its contents are used to load the tile sprite.
     *
     * `count` in `hr_version` has to be either unspecified or the same as for normal resolution definition.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TileSprite.html#hr_version Online documentation}
     */
    hr_version?: TileSprite
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TileSprite.html#scale Online documentation}
     */
    scale?: float
    /**
     * **Default:** `0`
     *
     * Horizontal position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TileSprite.html#x Online documentation}
     */
    x?: SpriteSizeType
    /**
     * **Default:** `0`
     *
     * Vertical position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TileSprite.html#y Online documentation}
     */
    y?: SpriteSizeType
    /**
     * **Default:** `0`
     *
     * Once the specified number of pictures is loaded, other pictures are loaded on other line. This is to allow having longer animations in matrix, to input files with too high width. The game engine limits the width of any input files to 8192px, so it is compatible with most graphics cards. 0 means that all the pictures are in one horizontal line.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TileSprite.html#line_length Online documentation}
     */
    line_length?: uint32
  }
  export interface TileSpriteWithProbability extends TileSprite {
    /**
     * Only powers of 2 from 1 to 128 can be used. Square size of the tile arrangement this sprite is used for. Used to calculate the `width` and `height` of the sprite which cannot be set directly. (width or height) = size * 32 / scale.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TileSpriteWithProbability.html#size Online documentation}
     */
    size: uint32
    /**
     * **Default:** `1`
     *
     * Probability of 1x1 (size = 1) version of tile must be 1.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TileSpriteWithProbability.html#probability Online documentation}
     */
    probability?: double
    weights?: readonly double[]
  }
  export interface TileTransitionSprite {
    /**
     * Frame count.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TileTransitionSprite.html#count Online documentation}
     */
    count: uint32
    picture: FileName
    /**
     * If this property exists and high resolution sprites are turned on, its contents are used to load the tile transition sprite.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TileTransitionSprite.html#hr_version Online documentation}
     */
    hr_version?: TileTransitionSprite
    /**
     * **Default:** `false`
     *
     * If this is true, the shift of the tile transition sprite is set to `{0, 0.5}`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TileTransitionSprite.html#tall Online documentation}
     */
    tall?: bool
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TileTransitionSprite.html#scale Online documentation}
     */
    scale?: float
    /**
     * **Default:** `0`
     *
     * Horizontal position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TileTransitionSprite.html#x Online documentation}
     */
    x?: SpriteSizeType
    /**
     * **Default:** `0`
     *
     * Vertical position of the sprite in the source file in pixels.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TileTransitionSprite.html#y Online documentation}
     */
    y?: SpriteSizeType
  }
  /**
   * Used for {@link TilePrototype} graphics.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/TileTransitions.html Online documentation}
   */
  export interface TileTransitions {
    /**
     * This or `side_mask` needs to be specified if `empty_transitions` is not true.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TileTransitions.html#side Online documentation}
     */
    side?: TileTransitionSprite
    /**
     * This or `side` needs to be specified if `empty_transitions` is not true.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TileTransitions.html#side_mask Online documentation}
     */
    side_mask?: TileTransitionSprite
    /**
     * This or `inner_corner_mask` needs to be specified if `empty_transitions` is not true.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TileTransitions.html#inner_corner Online documentation}
     */
    inner_corner?: TileTransitionSprite
    /**
     * This or `inner_corner` needs to be specified if `empty_transitions` is not true.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TileTransitions.html#inner_corner_mask Online documentation}
     */
    inner_corner_mask?: TileTransitionSprite
    /**
     * This or `outer_corner_mask` needs to be specified if `empty_transitions` is not true.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TileTransitions.html#outer_corner Online documentation}
     */
    outer_corner?: TileTransitionSprite
    /**
     * This or `outer_corner` needs to be specified if `empty_transitions` is not true.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TileTransitions.html#outer_corner_mask Online documentation}
     */
    outer_corner_mask?: TileTransitionSprite
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TileTransitions.html#empty_transitions Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TileTransitions.html#masked_overlay_layer_offset Online documentation}
     */
    masked_overlay_layer_offset?: int8
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TileTransitions.html#background_layer_offset Online documentation}
     */
    background_layer_offset?: int8
    masked_background_layer_offset?: int8
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TileTransitions.html#apply_effect_color_to_overlay Online documentation}
     */
    apply_effect_color_to_overlay?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TileTransitions.html#offset_background_layer_by_tile_layer Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TileTransitionsVariants.html#material_background Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/TipStatus.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/TipTrigger.html Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TrainBrakingForceBonusModifier.html#infer_icon Online documentation}
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TrainBrakingForceBonusModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  /**
   * @see UtilityConstants.train_path_finding
   * @see {@link https://lua-api.factorio.com/1.1.110/prototypes/UtilityConstants.html#train_path_finding Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TrainPathFinderConstants.html#train_waiting_at_signal_tick_multiplier_penalty Online documentation}
     */
    train_waiting_at_signal_tick_multiplier_penalty: float
    train_with_no_path_penalty: uint32
    train_auto_without_schedule_penalty: uint32
  }
  /**
   * @see TrainStopPrototype.drawing_boxes
   * @see {@link https://lua-api.factorio.com/1.1.110/prototypes/TrainStopPrototype.html#drawing_boxes Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TransportBeltAnimationSet.html#east_index Online documentation}
     */
    east_index?: uint8
    /**
     * **Default:** `2`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TransportBeltAnimationSet.html#west_index Online documentation}
     */
    west_index?: uint8
    /**
     * **Default:** `3`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TransportBeltAnimationSet.html#north_index Online documentation}
     */
    north_index?: uint8
    /**
     * **Default:** `4`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TransportBeltAnimationSet.html#south_index Online documentation}
     */
    south_index?: uint8
    /**
     * **Default:** `13`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TransportBeltAnimationSet.html#starting_south_index Online documentation}
     */
    starting_south_index?: uint8
    /**
     * **Default:** `14`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TransportBeltAnimationSet.html#ending_south_index Online documentation}
     */
    ending_south_index?: uint8
    /**
     * **Default:** `15`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TransportBeltAnimationSet.html#starting_west_index Online documentation}
     */
    starting_west_index?: uint8
    /**
     * **Default:** `16`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TransportBeltAnimationSet.html#ending_west_index Online documentation}
     */
    ending_west_index?: uint8
    /**
     * **Default:** `17`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TransportBeltAnimationSet.html#starting_north_index Online documentation}
     */
    starting_north_index?: uint8
    /**
     * **Default:** `18`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TransportBeltAnimationSet.html#ending_north_index Online documentation}
     */
    ending_north_index?: uint8
    /**
     * **Default:** `19`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TransportBeltAnimationSet.html#starting_east_index Online documentation}
     */
    starting_east_index?: uint8
    /**
     * **Default:** `20`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TransportBeltAnimationSet.html#ending_east_index Online documentation}
     */
    ending_east_index?: uint8
    ending_patch?: Sprite4Way
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TransportBeltAnimationSet.html#ends_with_stopper Online documentation}
     */
    ends_with_stopper?: bool
  }
  export interface TransportBeltAnimationSetWithCorners extends TransportBeltAnimationSet {
    /**
     * **Default:** `5`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TransportBeltAnimationSetWithCorners.html#east_to_north_index Online documentation}
     */
    east_to_north_index?: uint8
    /**
     * **Default:** `6`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TransportBeltAnimationSetWithCorners.html#north_to_east_index Online documentation}
     */
    north_to_east_index?: uint8
    /**
     * **Default:** `7`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TransportBeltAnimationSetWithCorners.html#west_to_north_index Online documentation}
     */
    west_to_north_index?: uint8
    /**
     * **Default:** `8`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TransportBeltAnimationSetWithCorners.html#north_to_west_index Online documentation}
     */
    north_to_west_index?: uint8
    /**
     * **Default:** `9`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TransportBeltAnimationSetWithCorners.html#south_to_east_index Online documentation}
     */
    south_to_east_index?: uint8
    /**
     * **Default:** `10`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TransportBeltAnimationSetWithCorners.html#east_to_south_index Online documentation}
     */
    east_to_south_index?: uint8
    /**
     * **Default:** `11`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TransportBeltAnimationSetWithCorners.html#south_to_west_index Online documentation}
     */
    south_to_west_index?: uint8
    /**
     * **Default:** `12`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TransportBeltAnimationSetWithCorners.html#west_to_south_index Online documentation}
     */
    west_to_south_index?: uint8
  }
  /**
   * Used to define the graphics for the (in vanilla) yellow frame that is used when a {@link TransportBeltPrototype} is connected to the circuit network.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/TransportBeltConnectorFrame.html Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TreeVariation.html#trunk Online documentation}
     */
    trunk: Animation
    leaves: Animation
    leaf_generation: CreateParticleTriggerEffectItem
    branch_generation: CreateParticleTriggerEffectItem
    /**
     * Shadow must have 1 less `frame_count` than `leaves`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TreeVariation.html#shadow Online documentation}
     */
    shadow?: Animation
    /**
     * Only loaded if `shadow` is present. Defaults to `shadow.frame_count - 1`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TreeVariation.html#disable_shadow_distortion_beginning_at_frame Online documentation}
     */
    disable_shadow_distortion_beginning_at_frame?: uint32
    /**
     * Normal must have the same frame_count as `leaves`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TreeVariation.html#normal Online documentation}
     */
    normal?: Animation
    /**
     * Overlay must have the same frame_count as `leaves`. Won't be tinted by the tree color unless `apply_runtime_tint` is set to `true` in the sprite definition. See {@linkplain https://forums.factorio.com/viewtopic.php?p=547758#p547758 here}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TreeVariation.html#overlay Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/Trigger.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/TriggerDelivery.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/TriggerDeliveryItem.html Online documentation}
   */
  export interface TriggerDeliveryItem {
    /**
     * Provides the source of the TriggerDelivery as as both the source and target of the effect.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TriggerDeliveryItem.html#source_effects Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/TriggerEffect.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/TriggerEffectItem.html Online documentation}
   */
  export interface TriggerEffectItem {
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TriggerEffectItem.html#repeat_count Online documentation}
     */
    repeat_count?: uint16
    /**
     * **Default:** `0`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TriggerEffectItem.html#repeat_count_deviation Online documentation}
     */
    repeat_count_deviation?: uint16
    /**
     * **Default:** `1`
     *
     * Must be greater than `0` and less than or equal to `1`.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TriggerEffectItem.html#probability Online documentation}
     */
    probability?: float
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TriggerEffectItem.html#affects_target Online documentation}
     */
    affects_target?: bool
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TriggerEffectItem.html#show_in_tooltip Online documentation}
     */
    show_in_tooltip?: bool
    /**
     * Guaranteed to work with {@link EntityWithHealthPrototype#damaged_trigger_effect EntityWithHealthPrototype::damaged_trigger_effect} and {@link EntityWithHealthPrototype#dying_trigger_effect EntityWithHealthPrototype::dying_trigger_effect}. Unknown if it works with other properties that use {@link TriggerEffect}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TriggerEffectItem.html#damage_type_filters Online documentation}
     */
    damage_type_filters?: DamageTypeFilters
  }
  /**
   * The abstract base of all {@link Trigger Triggers}.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/TriggerItem.html Online documentation}
   */
  export interface TriggerItem {
    /**
     * **Default:** `All flags`
     *
     * Only prototypes with these flags are affected by the trigger item.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TriggerItem.html#entity_flags Online documentation}
     */
    entity_flags?: EntityPrototypeFlags
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TriggerItem.html#ignore_collision_condition Online documentation}
     */
    ignore_collision_condition?: bool
    /**
     * **Default:** `Everything`
     *
     * The trigger affects only prototypes with these masks.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TriggerItem.html#trigger_target_mask Online documentation}
     */
    trigger_target_mask?: TriggerTargetMask
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TriggerItem.html#repeat_count Online documentation}
     */
    repeat_count?: uint32
    /**
     * **Default:** `1`
     *
     * Must be greater than 0 and less than or equal to 1.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TriggerItem.html#probability Online documentation}
     */
    probability?: float
    /**
     * **Default:** `All masks`
     *
     * Only prototypes with these collision masks are affected by the trigger item.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TriggerItem.html#collision_mask Online documentation}
     */
    collision_mask?: CollisionMask
    action_delivery?: TriggerDelivery | readonly TriggerDelivery[]
    /**
     * **Default:** `All forces`
     *
     * Only entities meeting the force condition are affected by the trigger item.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TriggerItem.html#force Online documentation}
     */
    force?: ForceCondition
  }
  /**
   * An array of names of {@link TriggerTargetType}. See {@linkplain https://forums.factorio.com/71657 Design discussion: Trigger target type} and {@linkplain https://forums.factorio.com/86164 Blacklist for prototypes turrets shouldn't attack}.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/TriggerTargetMask.html Online documentation}
   */
  export type TriggerTargetMask = readonly string[]
  /**
   * The name of a {@link TrivialSmokePrototype}.
   * @example
   * "smoke-building"
   * @example
   * "nuclear-smoke"
   * @see {@link https://lua-api.factorio.com/1.1.110/types/TrivialSmokeID.html Online documentation}
   */
  export type TrivialSmokeID = string
  export interface TurretAttackModifier extends BaseModifier {
    readonly type: "turret-attack"
    /**
     * **Default:** `true`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TurretAttackModifier.html#infer_icon Online documentation}
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TurretAttackModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
    /**
     * Name of the {@link EntityPrototype} that is affected. This also works for non-turrets such as tanks, however, the bonus does not appear in the entity's tooltips.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TurretAttackModifier.html#turret_id Online documentation}
     */
    turret_id: EntityID
    /**
     * Modification value, which will be added to the current turret attack modifier upon researching.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/TurretAttackModifier.html#modifier Online documentation}
     */
    modifier: double
  }
  /**
   * @see UndergroundBeltPrototype.structure
   * @see {@link https://lua-api.factorio.com/1.1.110/prototypes/UndergroundBeltPrototype.html#structure Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/UnitAISettings.html Online documentation}
   */
  export interface UnitAISettings {
    /**
     * **Default:** `false`
     *
     * If enabled, units that repeatedly fail to succeed at commands will be destroyed.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/UnitAISettings.html#destroy_when_commands_fail Online documentation}
     */
    destroy_when_commands_fail?: bool
    /**
     * **Default:** `false`
     *
     * If enabled, units that have nothing else to do will attempt to return to a spawner.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/UnitAISettings.html#allow_try_return_to_spawner Online documentation}
     */
    allow_try_return_to_spawner?: bool
    /**
     * **Default:** `true`
     *
     * If enabled, units will try to separate themselves from nearby friendly units.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/UnitAISettings.html#do_separation Online documentation}
     */
    do_separation?: bool
    /**
     * **Default:** `0`
     *
     * Must be between -8 and 8.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/UnitAISettings.html#path_resolution_modifier Online documentation}
     */
    path_resolution_modifier?: int8
  }
  export interface UnitAlternativeFrameSequence {
    /**
     * Indices of frames from the attack parameter animation.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/UnitAlternativeFrameSequence.html#warmup_frame_sequence Online documentation}
     */
    warmup_frame_sequence: readonly uint16[]
    /**
     * Indices of frames from the attack parameter animation.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/UnitAlternativeFrameSequence.html#warmup2_frame_sequence Online documentation}
     */
    warmup2_frame_sequence: readonly uint16[]
    /**
     * Indices of frames from the attack parameter animation.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/UnitAlternativeFrameSequence.html#attacking_frame_sequence Online documentation}
     */
    attacking_frame_sequence: readonly uint16[]
    /**
     * Indices of frames from the attack parameter animation.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/UnitAlternativeFrameSequence.html#cooldown_frame_sequence Online documentation}
     */
    cooldown_frame_sequence: readonly uint16[]
    /**
     * Indices of frames from the attack parameter animation.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/UnitAlternativeFrameSequence.html#prepared_frame_sequence Online documentation}
     */
    prepared_frame_sequence: readonly uint16[]
    /**
     * Indices of frames from the attack parameter animation.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/UnitAlternativeFrameSequence.html#back_to_walk_frame_sequence Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/UnitGroupSettings.html#min_group_gathering_time Online documentation}
     */
    min_group_gathering_time: uint32
    max_group_gathering_time: uint32
    /**
     * After the gathering is finished the group can still wait for late members, but it doesn't accept new ones anymore.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/UnitGroupSettings.html#max_wait_time_for_late_members Online documentation}
     */
    max_wait_time_for_late_members: uint32
    /**
     * Limits for group radius (calculated by number of numbers).
     * @see {@link https://lua-api.factorio.com/1.1.110/types/UnitGroupSettings.html#max_group_radius Online documentation}
     */
    max_group_radius: double
    min_group_radius: double
    /**
     * When a member falls behind the group he can speedup up till this much of his regular speed.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/UnitGroupSettings.html#max_member_speedup_when_behind Online documentation}
     */
    max_member_speedup_when_behind: double
    /**
     * When a member gets ahead of its group, it will slow down to at most this factor of its speed.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/UnitGroupSettings.html#max_member_slowdown_when_ahead Online documentation}
     */
    max_member_slowdown_when_ahead: double
    /**
     * When members of a group are behind, the entire group will slow down to at most this factor of its max speed.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/UnitGroupSettings.html#max_group_slowdown_factor Online documentation}
     */
    max_group_slowdown_factor: double
    /**
     * If a member falls behind more than this times the group radius, the group will slow down to max_group_slowdown_factor.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/UnitGroupSettings.html#max_group_member_fallback_factor Online documentation}
     */
    max_group_member_fallback_factor: double
    /**
     * If a member falls behind more than this time the group radius, it will be removed from the group.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/UnitGroupSettings.html#member_disown_distance Online documentation}
     */
    member_disown_distance: double
    tick_tolerance_when_member_arrives: uint32
    /**
     * Maximum number of automatically created unit groups gathering for attack at any time.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/UnitGroupSettings.html#max_gathering_unit_groups Online documentation}
     */
    max_gathering_unit_groups: uint32
    /**
     * Maximum size of an attack unit group. This only affects automatically-created unit groups; manual groups created through the API are unaffected.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/UnitGroupSettings.html#max_unit_group_size Online documentation}
     */
    max_unit_group_size: uint32
  }
  /**
   * It can be specified as a table with named or numbered keys, but not a mix of both. If this is specified as a table with numbered keys then the first value is the unit and the second is the spawn points.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/UnitSpawnDefinition.html Online documentation}
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
         * @see {@link https://lua-api.factorio.com/1.1.110/types/UnitSpawnDefinition.html#spawn_points Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/UnlockRecipeModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
    /**
     * Prototype name of the {@link RecipePrototype} that is unlocked upon researching.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/UnlockRecipeModifier.html#recipe Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/UseConfirmTipTrigger.html#count Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/UseOnSelfCapsuleAction.html#uses_stack Online documentation}
     */
    uses_stack?: bool
  }
  export interface UsePipetteTipTrigger {
    readonly type: "use-pipette"
    /**
     * **Default:** `1`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/UsePipetteTipTrigger.html#count Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/Vector.html Online documentation}
   */
  export type Vector =
    | {
        x: double
        y: double
      }
    | readonly [double, double]
  /**
   * If this is specified as a three-element array then the array items are x, y and z, in that order.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/Vector3D.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/AnimatedVector.html#rotations Online documentation}
   */
  export interface VectorRotation {
    /**
     * The size of all `frames` must be the same.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/VectorRotation.html#frames Online documentation}
     */
    frames: readonly Vector[]
    render_layer?: RenderLayer
  }
  /**
   * ## Union members
   * - `"top"`
   * - `"center"`
   * - `"bottom"`
   * @see {@link https://lua-api.factorio.com/1.1.110/types/VerticalAlign.html Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/VirtualSignalID.html Online documentation}
   */
  export type VirtualSignalID = string
  /**
   * Void energy sources provide unlimited free energy.
   * @example
   * energy_source = {type = "void"}
   * @see {@link https://lua-api.factorio.com/1.1.110/types/VoidEnergySource.html Online documentation}
   */
  export interface VoidEnergySource extends BaseEnergySource {
    readonly type: "void"
  }
  /**
   * @see WallPrototype.pictures
   * @see {@link https://lua-api.factorio.com/1.1.110/prototypes/WallPrototype.html#pictures Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/WaterReflectionDefinition.html Online documentation}
   */
  export interface WaterReflectionDefinition {
    pictures?: SpriteVariations
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/WaterReflectionDefinition.html#orientation_to_variation Online documentation}
     */
    orientation_to_variation?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/WaterReflectionDefinition.html#rotate Online documentation}
     */
    rotate?: bool
  }
  /**
   * Definition of a point where circuit network wires can be connected to an entity.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/WireConnectionPoint.html Online documentation}
   */
  export interface WireConnectionPoint {
    wire: WirePosition
    shadow: WirePosition
  }
  /**
   * Used by {@link WireConnectionPoint}.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/WirePosition.html Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkerRobotBatteryModifier.html#infer_icon Online documentation}
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkerRobotBatteryModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface WorkerRobotSpeedModifier extends SimpleModifier {
    readonly type: "worker-robot-speed"
    /**
     * **Default:** `true`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkerRobotSpeedModifier.html#infer_icon Online documentation}
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkerRobotSpeedModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface WorkerRobotStorageModifier extends SimpleModifier {
    readonly type: "worker-robot-storage"
    /**
     * **Default:** `true`
     *
     * If set to `false`, use the icon from {@link UtilitySprites} for this technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkerRobotStorageModifier.html#infer_icon Online documentation}
     */
    infer_icon?: bool
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkerRobotStorageModifier.html#use_icon_overlay_constant Online documentation}
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
   * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkingSound.html Online documentation}
   */
  export type WorkingSound =
    | {
        /**
         * The sound to be played when the entity is working.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkingSound.html#sound Online documentation}
         */
        sound: Sound
        /**
         * **Default:** `1`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkingSound.html#apparent_volume Online documentation}
         */
        apparent_volume?: float
        max_sounds_per_type?: uint8
        /**
         * **Default:** `false`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkingSound.html#match_progress_to_activity Online documentation}
         */
        match_progress_to_activity?: bool
        /**
         * **Default:** `false`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkingSound.html#match_volume_to_activity Online documentation}
         */
        match_volume_to_activity?: bool
        /**
         * **Default:** `false`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkingSound.html#match_speed_to_activity Online documentation}
         */
        match_speed_to_activity?: bool
        /**
         * **Default:** `false`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkingSound.html#persistent Online documentation}
         */
        persistent?: bool
        /**
         * **Default:** `true`
         * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkingSound.html#use_doppler_shift Online documentation}
         */
        use_doppler_shift?: bool
        /**
         * **Default:** `1`
         *
         * Modifies how far a sound can be heard. Can only be 1 or lower, has to be a positive number.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkingSound.html#audible_distance_modifier Online documentation}
         */
        audible_distance_modifier?: double
        /**
         * **Default:** `1`
         *
         * Modifies how often the sound is played.
         * @example
         * probability = 1 / (3 * 60) -- average pause between the sound is 3 seconds
         * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkingSound.html#probability Online documentation}
         */
        probability?: double
        /**
         * **Default:** `0`
         *
         * Can't be used when `match_progress_to_activity` is true.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkingSound.html#fade_in_ticks Online documentation}
         */
        fade_in_ticks?: uint32
        /**
         * **Default:** `0`
         *
         * Can't be used when `match_progress_to_activity` is true.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkingSound.html#fade_out_ticks Online documentation}
         */
        fade_out_ticks?: uint32
        /**
         * The sound to be played when the entity is idle. Might not work with all entities that use working_sound.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkingSound.html#idle_sound Online documentation}
         */
        idle_sound?: Sound
        /**
         * Might not work with all entities that use working_sound.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkingSound.html#activate_sound Online documentation}
         */
        activate_sound?: Sound
        /**
         * Might not work with all entities that use working_sound.
         * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkingSound.html#deactivate_sound Online documentation}
         */
        deactivate_sound?: Sound
      }
    | Sound
  /**
   * Used by crafting machines to display different graphics when the machine is running.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkingVisualisation.html Online documentation}
   */
  export interface WorkingVisualisation {
    /**
     * **Default:** `"object"`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkingVisualisation.html#render_layer Online documentation}
     */
    render_layer?: RenderLayer
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkingVisualisation.html#fadeout Online documentation}
     */
    fadeout?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkingVisualisation.html#synced_fadeout Online documentation}
     */
    synced_fadeout?: bool
    /**
     * **Default:** `false`
     *
     * Whether the animations are always played at the same speed, not adjusted to the machine speed.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkingVisualisation.html#constant_speed Online documentation}
     */
    constant_speed?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkingVisualisation.html#always_draw Online documentation}
     */
    always_draw?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkingVisualisation.html#animated_shift Online documentation}
     */
    animated_shift?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkingVisualisation.html#align_to_waypoint Online documentation}
     */
    align_to_waypoint?: bool
    /**
     * Used to determine render order for sprites with the same `render_layer` in the same position. Sprites with a higher `secondary_draw_order` are drawn on top.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkingVisualisation.html#secondary_draw_order Online documentation}
     */
    secondary_draw_order?: int8
    /**
     * **Default:** `true`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkingVisualisation.html#draw_as_sprite Online documentation}
     */
    draw_as_sprite?: bool
    /**
     * **Default:** `false`
     * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkingVisualisation.html#draw_as_light Online documentation}
     */
    draw_as_light?: bool
    light?: LightDefinition
    effect?: "flicker" | "uranium-glow" | "none"
    /**
     * Used by {@link CraftingMachinePrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkingVisualisation.html#apply_recipe_tint Online documentation}
     */
    apply_recipe_tint?: "primary" | "secondary" | "tertiary" | "quaternary" | "none"
    /**
     * Used by {@link CraftingMachinePrototype} ("status" only) and {@link MiningDrillPrototype}.
     *
     * For "status" on CraftingMachine, the colors are specified via {@link CraftingMachinePrototype#status_colors CraftingMachinePrototype::status_colors}. For "status" on MiningDrill, the colors are specified via {@link MiningDrillGraphicsSet#status_colors MiningDrillGraphicsSet::status_colors}. For "resource-color", the colors are specified via {@link ResourceEntityPrototype#mining_visualisation_tint ResourceEntityPrototype::mining_visualisation_tint}.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkingVisualisation.html#apply_tint Online documentation}
     */
    apply_tint?: "resource-color" | "input-fluid-base-color" | "input-fluid-flow-color" | "status" | "none"
    /**
     * Only loaded if `animation` is not defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkingVisualisation.html#north_animation Online documentation}
     */
    north_animation?: Animation
    /**
     * Only loaded if `animation` is not defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkingVisualisation.html#west_animation Online documentation}
     */
    west_animation?: Animation
    /**
     * Only loaded if `animation` is not defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkingVisualisation.html#south_animation Online documentation}
     */
    south_animation?: Animation
    /**
     * Only loaded if `animation` is not defined.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/WorkingVisualisation.html#east_animation Online documentation}
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
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ZoomToWorldBlueprintEnabledModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface ZoomToWorldDeconstructionPlannerEnabledModifier extends BoolModifier {
    readonly type: "zoom-to-world-deconstruction-planner-enabled"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ZoomToWorldDeconstructionPlannerEnabledModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface ZoomToWorldEnabledModifier extends BoolModifier {
    readonly type: "zoom-to-world-enabled"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ZoomToWorldEnabledModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface ZoomToWorldGhostBuildingEnabledModifier extends BoolModifier {
    readonly type: "zoom-to-world-ghost-building-enabled"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ZoomToWorldGhostBuildingEnabledModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface ZoomToWorldSelectionToolEnabledModifier extends BoolModifier {
    readonly type: "zoom-to-world-selection-tool-enabled"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ZoomToWorldSelectionToolEnabledModifier.html#use_icon_overlay_constant Online documentation}
     */
    use_icon_overlay_constant?: bool
  }
  export interface ZoomToWorldUpgradePlannerEnabledModifier extends BoolModifier {
    readonly type: "zoom-to-world-upgrade-planner-enabled"
    /**
     * **Default:** `true`
     *
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     * @see {@link https://lua-api.factorio.com/1.1.110/types/ZoomToWorldUpgradePlannerEnabledModifier.html#use_icon_overlay_constant Online documentation}
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
   * ![](https://lua-api.factorio.com/1.1.110/static/images/bool_coercion.png)
   * @see {@link https://lua-api.factorio.com/1.1.110/types/bool.html Online documentation}
   */
  export type bool = boolean
  /**
   * Format uses a dot as its decimal delimiter. Doubles are stored in the {@linkplain http://en.wikipedia.org/wiki/Double-precision_floating-point_format double precision} floating point format.
   *
   * May not be {@linkplain https://en.wikipedia.org/wiki/NaN NaN}.
   * @example
   * 7.5
   * 6
   * @see {@link https://lua-api.factorio.com/1.1.110/types/double.html Online documentation}
   */
  export type double = number
  /**
   * Format uses a dot as its decimal delimiter. Floats are stored in the {@linkplain https://en.wikipedia.org/wiki/Single-precision_floating-point_format single precision} floating point format.
   *
   * May not be {@linkplain https://en.wikipedia.org/wiki/NaN NaN}.
   * @example
   * 7.5
   * 6
   * @see {@link https://lua-api.factorio.com/1.1.110/types/float.html Online documentation}
   */
  export type float = number
  /**
   * 16 bit signed integer. Ranges from `-32 768` to `32 767`, or `[-2^15, 2^15-1]`.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/int16.html Online documentation}
   */
  export type int16 = number
  /**
   * 32 bit signed integer. Ranges from `-2 147 483 648` to `2 147 483 647`, or `[-2^31, 2^31-1]`.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/int32.html Online documentation}
   */
  export type int32 = number
  /**
   * 8 bit signed integer. Ranges from `-128` to `127`, or `[-2^7, 2^7-1]`.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/int8.html Online documentation}
   */
  export type int8 = number
  /**
   * 16 bit unsigned integer. Ranges from `0` to `65 535`, or `[0, 2^16-1]`.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/uint16.html Online documentation}
   */
  export type uint16 = number
  /**
   * 32 bit unsigned integer. Ranges from `0` to `4 294 967 295`, or `[0, 2^32-1]`.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/uint32.html Online documentation}
   */
  export type uint32 = number
  /**
   * 64 bit unsigned integer.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/uint64.html Online documentation}
   */
  export type uint64 = number
  /**
   * 8 bit unsigned integer. Ranges from `0` to `255`, or `[0, 2^8-1]`.
   * @see {@link https://lua-api.factorio.com/1.1.110/types/uint8.html Online documentation}
   */
  export type uint8 = number
}
