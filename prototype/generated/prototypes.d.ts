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
        /**
         * The capacity of the energy source buffer specifies the capacity of the accumulator.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AccumulatorPrototype.html#AccumulatorPrototype.energy_source Online documentation}
         */
        energy_source: ElectricEnergySource;
        picture: Sprite;
        /**
         * Count of ticks to preserve the animation even when the charging ends. Used to prevent rapid blinking of the accumulator with unstable need to use it.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AccumulatorPrototype.html#AccumulatorPrototype.charge_cooldown Online documentation}
         */
        charge_cooldown: uint16;
        /**
         * How long (in ticks) the animation will last after discharge has been initialized.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AccumulatorPrototype.html#AccumulatorPrototype.discharge_cooldown Online documentation}
         */
        discharge_cooldown: uint16;
        charge_animation?: Animation;
        /**
         * Only loaded if `charge_animation` is defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AccumulatorPrototype.html#AccumulatorPrototype.charge_light Online documentation}
         */
        charge_light?: LightDefinition;
        discharge_animation?: Animation;
        /**
         * Only loaded if `discharge_animation` is defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AccumulatorPrototype.html#AccumulatorPrototype.discharge_light Online documentation}
         */
        discharge_light?: LightDefinition;
        /**
         * Defines how wires visually connect to this accumulator.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AccumulatorPrototype.html#AccumulatorPrototype.circuit_wire_connection_point Online documentation}
         */
        circuit_wire_connection_point?: WireConnectionPoint;
        /**
         * The maximum circuit wire distance for this entity.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AccumulatorPrototype.html#AccumulatorPrototype.circuit_wire_max_distance Online documentation}
         */
        circuit_wire_max_distance?: double;
        draw_copper_wires?: bool;
        draw_circuit_wires?: bool;
        /**
         * The pictures displayed for circuit connections to this accumulator.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AccumulatorPrototype.html#AccumulatorPrototype.circuit_connector_sprites Online documentation}
         */
        circuit_connector_sprites?: CircuitConnectorSprites;
        /**
         * The name of the signal that is the default for when an accumulator is connected to the circuit network.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AccumulatorPrototype.html#AccumulatorPrototype.default_output_signal Online documentation}
         */
        default_output_signal?: SignalIDConnector;
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
        /**
         * Can't be an empty array.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AchievementPrototype.html#AchievementPrototype.icons Online documentation}
         */
        icons?: readonly IconData[];
        /**
         * Path to the icon file.
         *
         * Mandatory if `icons` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AchievementPrototype.html#AchievementPrototype.icon Online documentation}
         */
        icon?: FileName;
        /**
         * The size of the square icon, in pixels, e.g. `32` for a 32px by 32px icon.
         *
         * Mandatory if `icons` is not defined, or if `icon_size` is not specified for all instances of `icons`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AchievementPrototype.html#AchievementPrototype.icon_size Online documentation}
         */
        icon_size?: SpriteSizeType;
        /**
         * Icons of reduced size will be used at decreased scale.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AchievementPrototype.html#AchievementPrototype.icon_mipmaps Online documentation}
         */
        icon_mipmaps?: IconMipMapType;
        /**
         * Unusable by mods, as this refers to unlocking the achievement through Steam.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AchievementPrototype.html#AchievementPrototype.steam_stats_name Online documentation}
         */
        steam_stats_name?: string;
        /**
         * If this is set to `false`, it is not possible to complete the achievement on the peaceful difficulty setting or when the enemy base generation settings have been changed.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AchievementPrototype.html#AchievementPrototype.allowed_without_fight Online documentation}
         */
        allowed_without_fight?: bool;
        hidden?: bool;
    }
    /**
     * Used by {@linkplain https://wiki.factorio.com/Discharge_defense discharge defense} and {@linkplain https://wiki.factorio.com/Personal_laser_defense personal laser defense}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ActiveDefenseEquipmentPrototype.html Online documentation}
     */
    export interface ActiveDefenseEquipmentPrototype extends EquipmentPrototype {
        automatic: bool;
        attack_parameters: AttackParameters;
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
        /**
         * Specification of the type of the prototype.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AmbientSound.html#AmbientSound.type Online documentation}
         */
        type: "ambient-sound";
        /**
         * Unique textual identification of the prototype.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AmbientSound.html#AmbientSound.name Online documentation}
         */
        name: string;
        /**
         * The sound file and volume.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AmbientSound.html#AmbientSound.sound Online documentation}
         */
        sound: Sound;
        /**
         * Lets the game know in what instances the audio file is played.
         *
         * **Options:**
         * - `"menu-track"`: This track is only played in the main menu.
         * - `"main-track"`: This track is played interleaved (alternating) with `"interlude"` tracks.
         * - `"early-game"`: This track is considered a main track, with no functional difference to `"main-track"`.
         * - `"late-game"`: This track is considered a main track, with no functional difference to `"main-track"`.
         * - `"interlude"`: This track is played in between the main tracks.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AmbientSound.html#AmbientSound.track_type Online documentation}
         */
        track_type: "menu-track" | "main-track" | "early-game" | "late-game" | "interlude";
        weight?: double;
    }
    /**
     * An ammo category. Each weapon has an ammo category, and can use any ammo with the same ammo category. Ammo categories can also be upgraded by technologies.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AmmoCategory.html Online documentation}
     */
    export interface AmmoCategory extends PrototypeBase {
        bonus_gui_order?: Order;
    }
    /**
     * Ammo used for a gun.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AmmoItemPrototype.html Online documentation}
     */
    export interface AmmoItemPrototype extends OmitType<ItemPrototype> {
        /**
         * When using a plain {@link AmmoType} (no array), the ammo type applies to everything (`"default"`).
         *
         * When using an array of AmmoTypes, they have the additional {@link AmmoType#source_type AmmoType::source_type} property.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AmmoItemPrototype.html#AmmoItemPrototype.ammo_type Online documentation}
         */
        ammo_type: AmmoType | readonly AmmoType[];
        /**
         * Number of shots before ammo item is consumed. Must be >= `1`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AmmoItemPrototype.html#AmmoItemPrototype.magazine_size Online documentation}
         */
        magazine_size?: float;
        /**
         * Amount of extra time (in ticks) it takes to reload the weapon after depleting the magazine. Must be >= `0`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AmmoItemPrototype.html#AmmoItemPrototype.reload_time Online documentation}
         */
        reload_time?: float;
    }
    /**
     * A turret that consumes ammo items.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AmmoTurretPrototype.html Online documentation}
     */
    export interface AmmoTurretPrototype extends OmitType<TurretPrototype> {
        inventory_size: ItemStackIndex;
        automated_ammo_count: ItemCountType;
        /**
         * Shift of the "alt-mode icon" relative to the turret's position.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AmmoTurretPrototype.html#AmmoTurretPrototype.entity_info_icon_shift Online documentation}
         */
        entity_info_icon_shift?: Vector;
    }
    /**
     * Specifies an animation that can be used with {@link import("factorio:runtime").LuaRendering#draw_animation LuaRendering::draw_animation} at runtime.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html Online documentation}
     */
    export interface AnimationPrototype {
        type: "animation";
        /**
         * Name of the animation. Can be used with {@link import("factorio:runtime").LuaRendering#draw_animation LuaRendering::draw_animation} at runtime.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.name Online documentation}
         */
        name: string;
        /**
         * If this property is present, all Animation definitions have to be placed as entries in the array, and they will all be loaded from there. `layers` may not be an empty table. Each definition in the array may also have the `layers` property.
         *
         * `animation_speed` and `max_advance` only have to be defined in one layer. All layers will run at the same speed.
         *
         * If this property is present, all other properties besides `name` and `type` are ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.layers Online documentation}
         */
        layers: readonly Animation[];
        /**
         * Only loaded if `layers` is not defined. Mandatory if `stripes` is not defined.
         *
         * The path to the sprite file to use.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.filename Online documentation}
         */
        filename: FileName;
        /**
         * Only loaded if `layers` is not defined.
         *
         * If this property exists and high resolution sprites are turned on, this is used to load the Animation.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.hr_version Online documentation}
         */
        hr_version?: Animation;
        /**
         * Only loaded if `layers` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.priority Online documentation}
         */
        priority?: SpritePriority;
        /**
         * Only loaded if `layers` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.flags Online documentation}
         */
        flags?: SpriteFlags;
        /**
         * Only loaded if `layers` is not defined.
         *
         * The width and height of one frame. If this is a tuple, the first member of the tuple is the width and the second is the height. Otherwise the size is both width and height. Width and height may only be in the range of 0-8192.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.size Online documentation}
         */
        size?: SpriteSizeType | readonly [
            SpriteSizeType,
            SpriteSizeType
        ];
        /**
         * Only loaded if `layers` is not defined. Mandatory if `size` is not defined.
         *
         * Width of one frame in pixels, from 0-8192.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.width Online documentation}
         */
        width?: SpriteSizeType;
        /**
         * Only loaded if `layers` is not defined. Mandatory if `size` is not defined.
         *
         * Height of one frame in pixels, from 0-8192.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.height Online documentation}
         */
        height?: SpriteSizeType;
        /**
         * Only loaded if `layers` is not defined.
         *
         * Horizontal position of the animation in the source file in pixels.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.x Online documentation}
         */
        x?: SpriteSizeType;
        /**
         * Only loaded if `layers` is not defined.
         *
         * Vertical position of the animation in the source file in pixels.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.y Online documentation}
         */
        y?: SpriteSizeType;
        /**
         * Only loaded if `layers` is not defined.
         *
         * Loaded only when `x` and `y` are both `0`. The first member of the tuple is `x` and the second is `y`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.position Online documentation}
         */
        position?: readonly [
            SpriteSizeType,
            SpriteSizeType
        ];
        /**
         * Only loaded if `layers` is not defined.
         *
         * The shift in tiles. `util.by_pixel()` can be used to divide the shift by 32 which is the usual pixel height/width of 1 tile in normal resolution. Note that 32 pixel tile height/width is not enforced anywhere - any other tile height or width is also possible.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.shift Online documentation}
         */
        shift?: Vector;
        /**
         * Only loaded if `layers` is not defined.
         *
         * Values other than `1` specify the scale of the sprite on default zoom. A scale of `2` means that the picture will be two times bigger on screen (and thus more pixelated).
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.scale Online documentation}
         */
        scale?: double;
        /**
         * Only loaded if `layers` is not defined.
         *
         * Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true. This takes precedence over `draw_as_glow` and `draw_as_light`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.draw_as_shadow Online documentation}
         */
        draw_as_shadow?: bool;
        /**
         * Only loaded if `layers` is not defined.
         *
         * Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true. This takes precedence over `draw_as_light`.
         *
         * Draws first as a normal sprite, then again as a light layer. See {@linkplain https://forums.factorio.com/91682}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.draw_as_glow Online documentation}
         */
        draw_as_glow?: bool;
        /**
         * Only loaded if `layers` is not defined.
         *
         * Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.draw_as_light Online documentation}
         */
        draw_as_light?: bool;
        /**
         * Only loaded if `layers` is not defined.
         *
         * Only loaded if this is an icon, that is it has the flag `"group=icon"` or `"group=gui"`.
         *
         * Note that `mipmap_count` doesn't make sense in an animation, as it is not possible to layout mipmaps in a way that would load both the animation and the mipmaps correctly (besides animations with just one frame). See {@linkplain https://forums.factorio.com/viewtopic.php?p=549058#p549058 here}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.mipmap_count Online documentation}
         */
        mipmap_count?: uint8;
        /**
         * Only loaded if `layers` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.apply_runtime_tint Online documentation}
         */
        apply_runtime_tint?: bool;
        /**
         * Only loaded if `layers` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.tint Online documentation}
         */
        tint?: Color;
        /**
         * Only loaded if `layers` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.blend_mode Online documentation}
         */
        blend_mode?: BlendMode;
        /**
         * Only loaded if `layers` is not defined.
         *
         * Minimal mode is entered when mod loading fails. You are in it when you see the gray box after (part of) the loading screen that tells you a mod error ({@linkplain https://cdn.discordapp.com/attachments/340530709712076801/532315796626472972/unknown.png Example}). Modders can ignore this property.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.load_in_minimal_mode Online documentation}
         */
        load_in_minimal_mode?: bool;
        /**
         * Only loaded if `layers` is not defined.
         *
         * Whether alpha should be pre-multiplied.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.premul_alpha Online documentation}
         */
        premul_alpha?: bool;
        /**
         * Only loaded if `layers` is not defined.
         *
         * Unused.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.generate_sdf Online documentation}
         */
        generate_sdf?: bool;
        /**
         * Only loaded if `layers` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.run_mode Online documentation}
         */
        run_mode?: "forward" | "backward" | "forward-then-backward";
        /**
         * Only loaded if `layers` is not defined.
         *
         * Can't be `0`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.frame_count Online documentation}
         */
        frame_count?: uint32;
        /**
         * Only loaded if `layers` is not defined.
         *
         * Once the specified number of pictures is loaded, other pictures are loaded on other line. This is to allow having longer animations in matrix, to input files with too high width. The game engine limits the width of any input files to 8192px, so it is compatible with most graphics cards. `0` means that all the pictures are in one horizontal line.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.line_length Online documentation}
         */
        line_length?: uint32;
        /**
         * Only loaded if `layers` is not defined.
         *
         * Modifier of the animation playing speed, the default of `1` means one animation frame per tick (60 fps). The speed of playing can often vary depending on the usage (output of steam engine for example). Has to be greater than `0`.
         *
         * If `layers` are used, the `animation_speed` only has to be defined in one layer. All layers will run at the same speed.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.animation_speed Online documentation}
         */
        animation_speed?: float;
        /**
         * Only loaded if `layers` is not defined.
         *
         * If `layers` are used, `max_advance` only has to be defined in one layer.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.max_advance Online documentation}
         */
        max_advance?: float;
        /**
         * Only loaded if `layers` is not defined.
         *
         * How many times to repeat the animation to complete an animation cycle. E.g. if one layer is 10 frames, a second layer of 1 frame would need `repeat_count = 10` to match the complete cycle.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.repeat_count Online documentation}
         */
        repeat_count?: uint8;
        /**
         * Only loaded if `layers` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.dice Online documentation}
         */
        dice?: uint8;
        /**
         * Only loaded if `layers` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.dice_x Online documentation}
         */
        dice_x?: uint8;
        /**
         * Only loaded if `layers` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.dice_y Online documentation}
         */
        dice_y?: uint8;
        /**
         * Only loaded if `layers` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.frame_sequence Online documentation}
         */
        frame_sequence?: AnimationFrameSequence;
        /**
         * Only loaded if `layers` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AnimationPrototype.html#AnimationPrototype.stripes Online documentation}
         */
        stripes?: readonly Stripe[];
    }
    /**
     * An {@linkplain https://wiki.factorio.com/Arithmetic_combinator arithmetic combinator}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArithmeticCombinatorPrototype.html Online documentation}
     */
    export interface ArithmeticCombinatorPrototype extends CombinatorPrototype {
        plus_symbol_sprites: Sprite4Way;
        minus_symbol_sprites: Sprite4Way;
        multiply_symbol_sprites: Sprite4Way;
        divide_symbol_sprites: Sprite4Way;
        modulo_symbol_sprites: Sprite4Way;
        power_symbol_sprites: Sprite4Way;
        left_shift_symbol_sprites: Sprite4Way;
        right_shift_symbol_sprites: Sprite4Way;
        and_symbol_sprites: Sprite4Way;
        or_symbol_sprites: Sprite4Way;
        xor_symbol_sprites: Sprite4Way;
    }
    /**
     * Armor to wear on your in-game {@link CharacterPrototype character} for defense and buffs.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArmorPrototype.html Online documentation}
     */
    export interface ArmorPrototype extends OmitType<ToolPrototype> {
        /**
         * Name of the {@link EquipmentGridPrototype} that this armor has.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArmorPrototype.html#ArmorPrototype.equipment_grid Online documentation}
         */
        equipment_grid?: EquipmentGridID;
        /**
         * What amount of damage the armor takes on what type of damage is incoming.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArmorPrototype.html#ArmorPrototype.resistances Online documentation}
         */
        resistances?: Resistances;
        /**
         * By how many slots the inventory of the player is expanded when the armor is worn.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArmorPrototype.html#ArmorPrototype.inventory_size_bonus Online documentation}
         */
        inventory_size_bonus?: ItemStackIndex;
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
        arrow_picture: Sprite;
        circle_picture?: Sprite;
        blinking?: bool;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArrowPrototype.html#ArrowPrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * The entity spawned by the {@linkplain https://wiki.factorio.com/Artillery_targeting_remote artillery targeting remote}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArtilleryFlarePrototype.html Online documentation}
     */
    export interface ArtilleryFlarePrototype extends EntityPrototype {
        /**
         * Picture variation count and individual frame count must be equal to shadow variation count.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArtilleryFlarePrototype.html#ArtilleryFlarePrototype.pictures Online documentation}
         */
        pictures: AnimationVariations;
        life_time: uint16;
        /**
         * Shadow variation variation count and individual frame count must be equal to picture variation count.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArtilleryFlarePrototype.html#ArtilleryFlarePrototype.shadows Online documentation}
         */
        shadows?: AnimationVariations;
        render_layer?: RenderLayer;
        render_layer_when_on_ground?: RenderLayer;
        regular_trigger_effect?: TriggerEffect;
        regular_trigger_effect_frequency?: uint32;
        ended_in_water_trigger_effect?: TriggerEffect;
        movement_modifier_when_on_ground?: double;
        movement_modifier?: double;
        creation_shift?: Vector;
        initial_speed?: Vector;
        initial_height?: float;
        initial_vertical_speed?: float;
        initial_frame_speed?: float;
        /**
         * How many artillery shots should be fired at the position of this flare.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArtilleryFlarePrototype.html#ArtilleryFlarePrototype.shots_per_flare Online documentation}
         */
        shots_per_flare?: uint32;
        /**
         * How long this flare stays alive after `shots_per_flare` amount of shots have been shot at it.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArtilleryFlarePrototype.html#ArtilleryFlarePrototype.early_death_ticks Online documentation}
         */
        early_death_ticks?: uint32;
        shot_category?: AmmoCategoryID;
        map_color: Color;
        /**
         * The entity with the higher number is selectable before the entity with the lower number. When two entities have the same selection priority, the one with the highest {@link CollisionMask} (as determined by the order on that page) is selected.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArtilleryFlarePrototype.html#ArtilleryFlarePrototype.selection_priority Online documentation}
         */
        selection_priority?: uint8;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArtilleryFlarePrototype.html#ArtilleryFlarePrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * The projectile shot by {@linkplain https://wiki.factorio.com/Artillery artillery}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArtilleryProjectilePrototype.html Online documentation}
     */
    export interface ArtilleryProjectilePrototype extends EntityPrototype {
        reveal_map: bool;
        picture?: Sprite;
        shadow?: Sprite;
        chart_picture?: Sprite;
        action?: Trigger;
        final_action?: Trigger;
        height_from_ground?: float;
        /**
         * Whether the picture of the projectile is rotated to match the direction of travel.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArtilleryProjectilePrototype.html#ArtilleryProjectilePrototype.rotatable Online documentation}
         */
        rotatable?: bool;
        map_color: Color;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArtilleryProjectilePrototype.html#ArtilleryProjectilePrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
        /**
         * Must have a collision box size of zero.
         * @example
         * collision_box = {{0, 0}, {0, 0}}
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArtilleryProjectilePrototype.html#ArtilleryProjectilePrototype.collision_box Online documentation}
         */
        collision_box?: BoundingBox;
    }
    /**
     * An {@linkplain https://wiki.factorio.com/Artillery_turret artillery turret}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArtilleryTurretPrototype.html Online documentation}
     */
    export interface ArtilleryTurretPrototype extends EntityWithOwnerPrototype {
        /**
         * Name of a {@link GunPrototype}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArtilleryTurretPrototype.html#ArtilleryTurretPrototype.gun Online documentation}
         */
        gun: ItemID;
        /**
         * Must be > 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArtilleryTurretPrototype.html#ArtilleryTurretPrototype.inventory_size Online documentation}
         */
        inventory_size: ItemStackIndex;
        /**
         * Must be > 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArtilleryTurretPrototype.html#ArtilleryTurretPrototype.ammo_stack_limit Online documentation}
         */
        ammo_stack_limit: ItemCountType;
        automated_ammo_count: ItemCountType;
        turret_rotation_speed: double;
        /**
         * Must be positive.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArtilleryTurretPrototype.html#ArtilleryTurretPrototype.manual_range_modifier Online documentation}
         */
        manual_range_modifier: double;
        alert_when_attacking?: bool;
        disable_automatic_firing?: bool;
        base_picture_secondary_draw_order?: uint8;
        base_picture_render_layer?: RenderLayer;
        base_shift?: Vector;
        base_picture?: Animation4Way;
        cannon_base_pictures?: RotatedSprite;
        cannon_barrel_pictures?: RotatedSprite;
        rotating_sound?: InterruptibleSound;
        rotating_stopped_sound?: Sound;
        turn_after_shooting_cooldown?: uint16;
        cannon_parking_frame_count?: uint16;
        cannon_parking_speed?: uint16;
        cannon_barrel_recoil_shiftings?: readonly Vector3D[];
        /**
         * Only loaded if `cannon_barrel_recoil_shiftings` is loaded.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArtilleryTurretPrototype.html#ArtilleryTurretPrototype.cannon_barrel_recoil_shiftings_load_correction_matrix Online documentation}
         */
        cannon_barrel_recoil_shiftings_load_correction_matrix?: readonly Vector3D[];
        /**
         * Only loaded if `cannon_barrel_recoil_shiftings` is loaded.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArtilleryTurretPrototype.html#ArtilleryTurretPrototype.cannon_barrel_light_direction Online documentation}
         */
        cannon_barrel_light_direction?: Vector3D;
        /**
         * Whether this prototype should be a high priority target for enemy forces. See {@linkplain https://wiki.factorio.com/Military_units_and_structures Military units and structures}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArtilleryTurretPrototype.html#ArtilleryTurretPrototype.is_military_target Online documentation}
         */
        is_military_target?: bool;
    }
    /**
     * An {@linkplain https://wiki.factorio.com/Artillery_wagon artillery wagon}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArtilleryWagonPrototype.html Online documentation}
     */
    export interface ArtilleryWagonPrototype extends RollingStockPrototype {
        /**
         * Name of a {@link GunPrototype}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArtilleryWagonPrototype.html#ArtilleryWagonPrototype.gun Online documentation}
         */
        gun: ItemID;
        /**
         * Must be > 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArtilleryWagonPrototype.html#ArtilleryWagonPrototype.inventory_size Online documentation}
         */
        inventory_size: ItemStackIndex;
        /**
         * Must be > 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArtilleryWagonPrototype.html#ArtilleryWagonPrototype.ammo_stack_limit Online documentation}
         */
        ammo_stack_limit: ItemCountType;
        turret_rotation_speed: double;
        /**
         * Must be > 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArtilleryWagonPrototype.html#ArtilleryWagonPrototype.manual_range_modifier Online documentation}
         */
        manual_range_modifier: double;
        disable_automatic_firing?: bool;
        cannon_base_pictures?: RotatedSprite;
        cannon_barrel_pictures?: RotatedSprite;
        rotating_sound?: InterruptibleSound;
        rotating_stopped_sound?: Sound;
        turn_after_shooting_cooldown?: uint16;
        cannon_parking_frame_count?: uint16;
        cannon_parking_speed?: float;
        /**
         * Must match `cannon_base_pictures` frame count.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArtilleryWagonPrototype.html#ArtilleryWagonPrototype.cannon_base_shiftings Online documentation}
         */
        cannon_base_shiftings?: readonly Vector[];
        cannon_barrel_recoil_shiftings?: readonly Vector3D[];
        /**
         * Only loaded if `cannon_barrel_recoil_shiftings` is loaded.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArtilleryWagonPrototype.html#ArtilleryWagonPrototype.cannon_barrel_recoil_shiftings_load_correction_matrix Online documentation}
         */
        cannon_barrel_recoil_shiftings_load_correction_matrix?: readonly Vector3D[];
        /**
         * Only loaded if `cannon_barrel_recoil_shiftings` is loaded.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ArtilleryWagonPrototype.html#ArtilleryWagonPrototype.cannon_barrel_light_direction Online documentation}
         */
        cannon_barrel_light_direction?: Vector3D;
    }
    /**
     * An assembling machine - like the assembling machines 1/2/3 in the game, but you can use your own recipe categories.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AssemblingMachinePrototype.html Online documentation}
     */
    export interface AssemblingMachinePrototype extends CraftingMachinePrototype {
        /**
         * The preset recipe of this machine. This machine does not show a recipe selection if this is set. The base game uses this for the {@linkplain https://wiki.factorio.com/Rocket_silo rocket silo}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AssemblingMachinePrototype.html#AssemblingMachinePrototype.fixed_recipe Online documentation}
         */
        fixed_recipe?: RecipeID;
        /**
         * The locale key of the title of the GUI that is shown when the player opens the assembling machine. May not be longer than 200 characters.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AssemblingMachinePrototype.html#AssemblingMachinePrototype.gui_title_key Online documentation}
         */
        gui_title_key?: string;
        /**
         * Sets the maximum number of ingredients this machine can craft with. Any recipe with more ingredients than this will be unavailable in this machine.
         *
         * This only counts item ingredients, not fluid ingredients! This means if ingredient count is 2, and the recipe has 2 item ingredients and 1 fluid ingredient, it can still be crafted in the machine.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AssemblingMachinePrototype.html#AssemblingMachinePrototype.ingredient_count Online documentation}
         */
        ingredient_count?: uint8;
        /**
         * Shift of the "alt-mode icon" relative to the machine's center.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AssemblingMachinePrototype.html#AssemblingMachinePrototype.entity_info_icon_shift Online documentation}
         */
        entity_info_icon_shift?: Vector;
    }
    /**
     * A setting in the map creation GUI. Used by the {@link AutoplaceSpecification#control autoplace system}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AutoplaceControl.html Online documentation}
     */
    export interface AutoplaceControl extends PrototypeBase {
        /**
         * Controls in what tab the autoplace is shown in the map generator GUI.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AutoplaceControl.html#AutoplaceControl.category Online documentation}
         */
        category: "resource" | "terrain" | "enemy";
        /**
         * Sets whether this control's richness can be changed. The map generator GUI will only show the richness slider when the `category` is `"resource"`.
         *
         * If the autoplace control is used to generate ores, you probably want this to be true.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AutoplaceControl.html#AutoplaceControl.richness Online documentation}
         */
        richness?: bool;
        /**
         * Whether there is an "enable" checkbox for the autoplace control in the map generator GUI. If this is false, the autoplace control cannot be disabled from the GUI.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/AutoplaceControl.html#AutoplaceControl.can_be_disabled Online documentation}
         */
        can_be_disabled?: bool;
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
        energy_usage: Energy;
        energy_source: ElectricEnergySource | VoidEnergySource;
        /**
         * The maximum distance that this beacon can supply its neighbors with its module's effects. Max distance is 64.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BeaconPrototype.html#BeaconPrototype.supply_area_distance Online documentation}
         */
        supply_area_distance: double;
        /**
         * The multiplier of the module's effects, when shared between neighbors.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BeaconPrototype.html#BeaconPrototype.distribution_effectivity Online documentation}
         */
        distribution_effectivity: double;
        /**
         * The number of module slots in this beacon and their icon positions.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BeaconPrototype.html#BeaconPrototype.module_specification Online documentation}
         */
        module_specification: ModuleSpecification;
        /**
         * The graphics for the beacon.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BeaconPrototype.html#BeaconPrototype.graphics_set Online documentation}
         */
        graphics_set?: BeaconGraphicsSet;
        /**
         * Only loaded if `graphics_set` is not defined.
         *
         * The animation for the beacon, when in use.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BeaconPrototype.html#BeaconPrototype.animation Online documentation}
         */
        animation?: Animation;
        /**
         * Only loaded if `graphics_set` is not defined.
         *
         * The picture of the beacon when it is not on.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BeaconPrototype.html#BeaconPrototype.base_picture Online documentation}
         */
        base_picture?: Sprite;
        radius_visualisation_picture?: Sprite;
        /**
         * The types of modules that a player can place inside of the beacon.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BeaconPrototype.html#BeaconPrototype.allowed_effects Online documentation}
         */
        allowed_effects?: EffectTypeLimitation;
    }
    /**
     * Used as a laser beam.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BeamPrototype.html Online documentation}
     */
    export interface BeamPrototype extends EntityPrototype {
        width: double;
        /**
         * Damage interval can't be 0. A value of 1 will cause the attack to be applied each tick.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BeamPrototype.html#BeamPrototype.damage_interval Online documentation}
         */
        damage_interval: uint32;
        /**
         * Head segment of the beam.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BeamPrototype.html#BeamPrototype.head Online documentation}
         */
        head: Animation;
        /**
         * Tail segment of the beam.
         *
         * All animations must have the same number of frames: Tail must have same number of frames as start, ending, head, body, start_light, ending_light, head_light, tail_light and body_light.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BeamPrototype.html#BeamPrototype.tail Online documentation}
         */
        tail: Animation;
        /**
         * Body segment of the beam. Must have at least 1 variation.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BeamPrototype.html#BeamPrototype.body Online documentation}
         */
        body: AnimationVariations;
        action?: Trigger;
        target_offset?: Vector;
        random_target_offset?: bool;
        /**
         * Whether this beams should trigger its action every `damage_interval`. If false, the action is instead triggered when its owner triggers shooting.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BeamPrototype.html#BeamPrototype.action_triggered_automatically Online documentation}
         */
        action_triggered_automatically?: bool;
        random_end_animation_rotation?: bool;
        transparent_start_end_animations?: bool;
        /**
         * Start point of the beam.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BeamPrototype.html#BeamPrototype.start Online documentation}
         */
        start?: Animation;
        /**
         * End point of the beam.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BeamPrototype.html#BeamPrototype.ending Online documentation}
         */
        ending?: Animation;
        /**
         * Only loaded if `start_light`, `ending_light`, `head_light`, `tail_light` and `body_light` are not defined.
         *
         * Lights are additively accumulated onto a light-map, which is {@linkplain https://forums.factorio.com/viewtopic.php?p=435042#p435042 multiplicatively rendered} on the game world.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BeamPrototype.html#BeamPrototype.light_animations Online documentation}
         */
        light_animations?: BeamAnimationSet;
        /**
         * Only loaded if `start_light`, `ending_light`, `head_light`, `tail_light` and `body_light` are not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BeamPrototype.html#BeamPrototype.ground_light_animations Online documentation}
         */
        ground_light_animations?: BeamAnimationSet;
        start_light?: Animation;
        ending_light?: Animation;
        head_light?: Animation;
        tail_light?: Animation;
        body_light?: AnimationVariations;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BeamPrototype.html#BeamPrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * Used by {@linkplain https://wiki.factorio.com/Belt_immunity_equipment belt immunity equipment}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BeltImmunityEquipmentPrototype.html Online documentation}
     */
    export interface BeltImmunityEquipmentPrototype extends EquipmentPrototype {
        /**
         * The continuous power consumption of the belt immunity equipment.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BeltImmunityEquipmentPrototype.html#BeltImmunityEquipmentPrototype.energy_consumption Online documentation}
         */
        energy_consumption: Energy;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Blueprint_book blueprint book}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BlueprintBookPrototype.html Online documentation}
     */
    export interface BlueprintBookPrototype extends OmitType<ItemWithInventoryPrototype> {
        /**
         * The inventory size of the item.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BlueprintBookPrototype.html#BlueprintBookPrototype.inventory_size Online documentation}
         */
        inventory_size: ItemStackIndex | "dynamic";
        /**
         * Count of items of the same name that can be stored in one inventory slot. Must be 1 when the `"not-stackable"` flag is set.
         * @example
         * stack_size = 1
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BlueprintBookPrototype.html#BlueprintBookPrototype.stack_size Online documentation}
         */
        stack_size: 1;
        /**
         * If the item will draw its label when held in the cursor in place of the item count.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BlueprintBookPrototype.html#BlueprintBookPrototype.draw_label_for_cursor_render Online documentation}
         */
        draw_label_for_cursor_render?: bool;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Blueprint blueprint}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BlueprintItemPrototype.html Online documentation}
     */
    export interface BlueprintItemPrototype extends OmitType<SelectionToolPrototype> {
        /**
         * Count of items of the same name that can be stored in one inventory slot. Must be 1 when the `"not-stackable"` flag is set.
         * @example
         * stack_size = 1
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BlueprintItemPrototype.html#BlueprintItemPrototype.stack_size Online documentation}
         */
        stack_size: 1;
        /**
         * Whether the item will draw its label when held in the cursor in place of the item count.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BlueprintItemPrototype.html#BlueprintItemPrototype.draw_label_for_cursor_render Online documentation}
         */
        draw_label_for_cursor_render?: bool;
        /**
         * This property is hardcoded to `"blueprint"`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BlueprintItemPrototype.html#BlueprintItemPrototype.selection_mode Online documentation}
         */
        selection_mode?: SelectionModeFlags;
        /**
         * This property is hardcoded to `"blueprint"`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BlueprintItemPrototype.html#BlueprintItemPrototype.alt_selection_mode Online documentation}
         */
        alt_selection_mode?: SelectionModeFlags;
        /**
         * This property is hardcoded to `false`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BlueprintItemPrototype.html#BlueprintItemPrototype.always_include_tiles Online documentation}
         */
        always_include_tiles?: bool;
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BlueprintItemPrototype.html#BlueprintItemPrototype.entity_filters Online documentation}
         */
        entity_filters?: readonly EntityID[];
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BlueprintItemPrototype.html#BlueprintItemPrototype.alt_entity_filters Online documentation}
         */
        alt_entity_filters?: readonly EntityID[];
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BlueprintItemPrototype.html#BlueprintItemPrototype.entity_type_filters Online documentation}
         */
        entity_type_filters?: readonly string[];
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BlueprintItemPrototype.html#BlueprintItemPrototype.alt_entity_type_filters Online documentation}
         */
        alt_entity_type_filters?: readonly string[];
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BlueprintItemPrototype.html#BlueprintItemPrototype.tile_filters Online documentation}
         */
        tile_filters?: readonly TileID[];
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BlueprintItemPrototype.html#BlueprintItemPrototype.alt_tile_filters Online documentation}
         */
        alt_tile_filters?: readonly TileID[];
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BlueprintItemPrototype.html#BlueprintItemPrototype.entity_filter_mode Online documentation}
         */
        entity_filter_mode?: "whitelist" | "blacklist";
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BlueprintItemPrototype.html#BlueprintItemPrototype.alt_entity_filter_mode Online documentation}
         */
        alt_entity_filter_mode?: "whitelist" | "blacklist";
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BlueprintItemPrototype.html#BlueprintItemPrototype.tile_filter_mode Online documentation}
         */
        tile_filter_mode?: "whitelist" | "blacklist";
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BlueprintItemPrototype.html#BlueprintItemPrototype.alt_tile_filter_mode Online documentation}
         */
        alt_tile_filter_mode?: "whitelist" | "blacklist";
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Boiler boiler}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BoilerPrototype.html Online documentation}
     */
    export interface BoilerPrototype extends EntityWithOwnerPrototype {
        energy_source: EnergySource;
        /**
         * The input fluid box.
         *
         * If `mode` is `"heat-water-inside"`, the fluid is heated up directly in this fluidbox.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BoilerPrototype.html#BoilerPrototype.fluid_box Online documentation}
         */
        fluid_box: FluidBox;
        /**
         * The output fluid box.
         *
         * If `mode` is `"output-to-separate-pipe"` and this has a {@link FluidBox#filter filter}, the input fluid is converted to the output fluid that is set in the filter (in a 1:1 ratio).
         *
         * If `mode` is `"heat-water-inside"`, this fluidbox is unused.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BoilerPrototype.html#BoilerPrototype.output_fluid_box Online documentation}
         */
        output_fluid_box: FluidBox;
        energy_consumption: Energy;
        /**
         * Controls for how many ticks the boiler will show the fire and fire_glow after the energy source runs out of energy.
         *
         * Note that `fire` and `fire_glow` alpha is set to the light intensity of the energy source, so 0 light intensity means the fire is invisible. For burner energy sources, the light intensity will reach zero rather quickly after the boiler runs out of fuel, effectively capping the time that `fire` and `fire_glow` will be shown after the boiler runs out of fuel.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BoilerPrototype.html#BoilerPrototype.burning_cooldown Online documentation}
         */
        burning_cooldown: uint32;
        /**
         * When `mode` is `"output-to-separate-pipe"`, this is the temperature that the input fluid must reach to be moved to output fluid box.
         *
         * When `mode` is `"heat-water-inside"` this is unused. Instead, the fluid {@link FluidPrototype#max_temperature max_temperature} is the target temperature for heating the fluid.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BoilerPrototype.html#BoilerPrototype.target_temperature Online documentation}
         */
        target_temperature: double;
        structure: BoilerStructure;
        /**
         * Animation that is drawn on top of the `structure` when `burning_cooldown` is larger than 1. The animation alpha can be controlled by the energy source light intensity, depending on `fire_flicker_enabled`.
         *
         * The secondary draw order of this is higher than the secondary draw order of `fire_glow`, so this is drawn above `fire_glow`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BoilerPrototype.html#BoilerPrototype.fire Online documentation}
         */
        fire: BoilerFire;
        /**
         * Animation that is drawn on top of the `structure` when `burning_cooldown` is larger than 1. The animation alpha can be controlled by the energy source light intensity, depending on `fire_glow_flicker_enabled`.
         *
         * The secondary draw order of this is lower than the secondary draw order of `fire`, so this is drawn below `fire`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BoilerPrototype.html#BoilerPrototype.fire_glow Online documentation}
         */
        fire_glow: BoilerFireGlow;
        /**
         * If this is set to false, `fire_glow` alpha is always 1 instead of being controlled by the light intensity of the energy source.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BoilerPrototype.html#BoilerPrototype.fire_glow_flicker_enabled Online documentation}
         */
        fire_glow_flicker_enabled?: bool;
        /**
         * If this is set to false, `fire` alpha is always 1 instead of being controlled by the light intensity of the energy source.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BoilerPrototype.html#BoilerPrototype.fire_flicker_enabled Online documentation}
         */
        fire_flicker_enabled?: bool;
        /**
         * In the `"heat-water-inside"` mode, fluid in the `fluid_box` is continuously heated from the input temperature up to its {@link FluidPrototype#max_temperature FluidPrototype::max_temperature}.
         *
         * In the `"output-to-separate-pipe"` mode, fluid is transferred from the `fluid_box` to the `output_fluid_box` when enough energy is available to {@link FluidPrototype#heat_capacity heat} the fluid to the `target_temperature`. Setting a filter on the `output_fluid_box` allows to specify that the input fluid should be converted to the filtered fluid, instead of it simply being transferred when it can be heated.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BoilerPrototype.html#BoilerPrototype.mode Online documentation}
         */
        mode?: "heat-water-inside" | "output-to-separate-pipe";
        /**
         * Drawn above the `structure`, in the "higher-object-under" {@link RenderLayer}. May be useful to correct problems with neighboring pipes overlapping the structure graphics.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BoilerPrototype.html#BoilerPrototype.patch Online documentation}
         */
        patch?: BoilerPatch;
    }
    /**
     * This prototype is used for receiving an achievement when the player builds an entity.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BuildEntityAchievementPrototype.html Online documentation}
     */
    export interface BuildEntityAchievementPrototype extends OmitType<AchievementPrototype> {
        /**
         * This will trigger the achievement, if this entity is placed.
         * @example
         * to_build = "locomotive"
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BuildEntityAchievementPrototype.html#BuildEntityAchievementPrototype.to_build Online documentation}
         */
        to_build: EntityID;
        /**
         * How many entities need to be built.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BuildEntityAchievementPrototype.html#BuildEntityAchievementPrototype.amount Online documentation}
         */
        amount?: uint32;
        /**
         * If this is false, the player carries over their statistics from this achievement through all their saves.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BuildEntityAchievementPrototype.html#BuildEntityAchievementPrototype.limited_to_one_game Online documentation}
         */
        limited_to_one_game?: bool;
        /**
         * This lets the game know how long into a game, before you can no longer complete the achievement. 0 means infinite time.
         * @example
         * until_second = 60 * 60 * 8 --8 hours
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BuildEntityAchievementPrototype.html#BuildEntityAchievementPrototype.until_second Online documentation}
         */
        until_second?: uint32;
    }
    /**
     * An entity that produces power from a burner energy source.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BurnerGeneratorPrototype.html Online documentation}
     */
    export interface BurnerGeneratorPrototype extends EntityWithOwnerPrototype {
        /**
         * The output energy source of the generator. Any emissions specified on this energy source are ignored, they must be specified on `burner`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BurnerGeneratorPrototype.html#BurnerGeneratorPrototype.energy_source Online documentation}
         */
        energy_source: ElectricEnergySource;
        /**
         * The input energy source of the generator.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BurnerGeneratorPrototype.html#BurnerGeneratorPrototype.burner Online documentation}
         */
        burner: BurnerEnergySource;
        /**
         * Plays when the generator is active. `idle_animation` must have the same frame count as animation.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BurnerGeneratorPrototype.html#BurnerGeneratorPrototype.animation Online documentation}
         */
        animation: Animation4Way;
        /**
         * How much energy this generator can produce.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BurnerGeneratorPrototype.html#BurnerGeneratorPrototype.max_power_output Online documentation}
         */
        max_power_output: Energy;
        /**
         * Plays when the generator is inactive. Idle animation must have the same frame count as `animation`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BurnerGeneratorPrototype.html#BurnerGeneratorPrototype.idle_animation Online documentation}
         */
        idle_animation?: Animation4Way;
        /**
         * Whether the `idle_animation` should also play when the generator is active.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BurnerGeneratorPrototype.html#BurnerGeneratorPrototype.always_draw_idle_animation Online documentation}
         */
        always_draw_idle_animation?: bool;
        /**
         * Animation runs at least this fast.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/BurnerGeneratorPrototype.html#BurnerGeneratorPrototype.min_perceived_performance Online documentation}
         */
        min_perceived_performance?: double;
        performance_to_sound_speedup?: double;
    }
    /**
     * A capsule, for example a {@linkplain https://wiki.factorio.com/Combat_robot_capsules combat robot capsule} or the {@linkplain https://wiki.factorio.com/Raw_fish raw fish}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CapsulePrototype.html Online documentation}
     */
    export interface CapsulePrototype extends OmitType<ItemPrototype> {
        capsule_action: CapsuleAction;
        /**
         * Color of the range radius that is shown around the player when they hold the capsule.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CapsulePrototype.html#CapsulePrototype.radius_color Online documentation}
         */
        radius_color?: Color;
    }
    /**
     * Entity with specialized properties for acceleration, braking, and turning.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CarPrototype.html Online documentation}
     */
    export interface CarPrototype extends VehiclePrototype {
        /**
         * Animation speed 1 means 1 frame per tile.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CarPrototype.html#CarPrototype.animation Online documentation}
         */
        animation: RotatedAnimation;
        /**
         * Modifies the efficiency of energy transfer from burner output to wheels.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CarPrototype.html#CarPrototype.effectivity Online documentation}
         */
        effectivity: double;
        consumption: Energy;
        rotation_speed: double;
        /**
         * Must be a burner energy source when using `"burner"`, otherwise it can also be a void energy source.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CarPrototype.html#CarPrototype.energy_source Online documentation}
         */
        energy_source: BurnerEnergySource | VoidEnergySource;
        burner: BurnerEnergySource | VoidEnergySource;
        /**
         * Size of the car inventory.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CarPrototype.html#CarPrototype.inventory_size Online documentation}
         */
        inventory_size: ItemStackIndex;
        /**
         * Animation speed 1 means 1 frame per tile.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CarPrototype.html#CarPrototype.turret_animation Online documentation}
         */
        turret_animation?: RotatedAnimation;
        /**
         * Must have the same frame count as `animation`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CarPrototype.html#CarPrototype.light_animation Online documentation}
         */
        light_animation?: RotatedAnimation;
        render_layer?: RenderLayer;
        /**
         * If this car prototype uses tank controls to drive.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CarPrototype.html#CarPrototype.tank_driving Online documentation}
         */
        tank_driving?: bool;
        /**
         * If this car is immune to movement by belts.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CarPrototype.html#CarPrototype.has_belt_immunity Online documentation}
         */
        has_belt_immunity?: bool;
        /**
         * If this car gets damaged by driving over/against {@link TreePrototype trees}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CarPrototype.html#CarPrototype.immune_to_tree_impacts Online documentation}
         */
        immune_to_tree_impacts?: bool;
        /**
         * If this car gets damaged by driving over/against {@link SimpleEntityPrototype#count_as_rock_for_filtered_deconstruction rocks}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CarPrototype.html#CarPrototype.immune_to_rock_impacts Online documentation}
         */
        immune_to_rock_impacts?: bool;
        /**
         * If this car gets damaged by driving against {@link CliffPrototype cliffs}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CarPrototype.html#CarPrototype.immune_to_cliff_impacts Online documentation}
         */
        immune_to_cliff_impacts?: bool;
        turret_rotation_speed?: double;
        /**
         * Timeout in ticks specifying how long the turret must be inactive to return to the default position.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CarPrototype.html#CarPrototype.turret_return_timeout Online documentation}
         */
        turret_return_timeout?: uint32;
        light?: LightDefinition;
        sound_no_fuel?: Sound;
        darkness_to_render_light_animation?: float;
        track_particle_triggers?: FootstepTriggerEffectList;
        /**
         * The names of the  {@link GunPrototype}s this car prototype uses.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CarPrototype.html#CarPrototype.guns Online documentation}
         */
        guns?: readonly ItemID[];
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CarPrototype.html#CarPrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Cargo_wagon cargo wagon}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CargoWagonPrototype.html Online documentation}
     */
    export interface CargoWagonPrototype extends RollingStockPrototype {
        /**
         * Size of the inventory of the wagon. The inventory can be limited using the red bar and filtered. This functionality cannot be turned off.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CargoWagonPrototype.html#CargoWagonPrototype.inventory_size Online documentation}
         */
        inventory_size: ItemStackIndex;
    }
    /**
     * The corpse of a {@link CharacterPrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CharacterCorpsePrototype.html Online documentation}
     */
    export interface CharacterCorpsePrototype extends EntityPrototype {
        time_to_live: uint32;
        render_layer?: RenderLayer;
        /**
         * Mandatory if `picture` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CharacterCorpsePrototype.html#CharacterCorpsePrototype.pictures Online documentation}
         */
        pictures?: AnimationVariations;
        /**
         * Mandatory if `pictures` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CharacterCorpsePrototype.html#CharacterCorpsePrototype.picture Online documentation}
         */
        picture?: Animation;
        /**
         * Table of key value pairs, the keys are armor names and the values are numbers. The number is the Animation that is associated with the armor, e.g. using `1` will associate the armor with the first Animation in the pictures table.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CharacterCorpsePrototype.html#CharacterCorpsePrototype.armor_picture_mapping Online documentation}
         */
        armor_picture_mapping?: Record<ItemID, int32>;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CharacterCorpsePrototype.html#CharacterCorpsePrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * Entity that you move around on the screen during the campaign and freeplay.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CharacterPrototype.html Online documentation}
     */
    export interface CharacterPrototype extends EntityWithOwnerPrototype {
        mining_speed: double;
        running_speed: double;
        distance_per_frame: double;
        maximum_corner_sliding_distance: double;
        /**
         * The sound played when the character's health is low.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CharacterPrototype.html#CharacterPrototype.heartbeat Online documentation}
         */
        heartbeat: Sound;
        /**
         * The sound played when the character eats (fish for example).
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CharacterPrototype.html#CharacterPrototype.eat Online documentation}
         */
        eat: Sound;
        /**
         * Number of slots in the main inventory. May be 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CharacterPrototype.html#CharacterPrototype.inventory_size Online documentation}
         */
        inventory_size: ItemStackIndex;
        build_distance: uint32;
        drop_item_distance: uint32;
        reach_distance: uint32;
        reach_resource_distance: double;
        item_pickup_distance: double;
        loot_pickup_distance: double;
        ticks_to_keep_gun: uint32;
        ticks_to_keep_aiming_direction: uint32;
        ticks_to_stay_in_combat: uint32;
        damage_hit_tint: Color;
        /**
         * List of positions in the running animation when the walking sound is played.
         * @example
         * running_sound_animation_positions = {14, 29}
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CharacterPrototype.html#CharacterPrototype.running_sound_animation_positions Online documentation}
         */
        running_sound_animation_positions: readonly float[];
        /**
         * List of positions in the mining with tool animation when the mining sound and mining particles are created.
         * @example
         * mining_with_tool_particles_animation_positions = {28}
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CharacterPrototype.html#CharacterPrototype.mining_with_tool_particles_animation_positions Online documentation}
         */
        mining_with_tool_particles_animation_positions: readonly float[];
        animations: readonly CharacterArmorAnimation[];
        /**
         * Names of the crafting categories the character can craft recipes from. The built-in categories can be found {@linkplain https://wiki.factorio.com/Data.raw#recipe-category here}. See also {@link RecipeCategory}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CharacterPrototype.html#CharacterPrototype.crafting_categories Online documentation}
         */
        crafting_categories?: readonly RecipeCategoryID[];
        /**
         * Names of the resource categories the character can mine resources from.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CharacterPrototype.html#CharacterPrototype.mining_categories Online documentation}
         */
        mining_categories?: readonly ResourceCategoryID[];
        light?: LightDefinition;
        /**
         * Must be >= 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CharacterPrototype.html#CharacterPrototype.enter_vehicle_distance Online documentation}
         */
        enter_vehicle_distance?: double;
        tool_attack_distance?: double;
        /**
         * Time in seconds. Must be positive
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CharacterPrototype.html#CharacterPrototype.respawn_time Online documentation}
         */
        respawn_time?: uint32;
        /**
         * Whether this character is moved by belts when standing on them.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CharacterPrototype.html#CharacterPrototype.has_belt_immunity Online documentation}
         */
        has_belt_immunity?: bool;
        /**
         * Name of the character corpse that is spawned when this character dies.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CharacterPrototype.html#CharacterPrototype.character_corpse Online documentation}
         */
        character_corpse?: EntityID;
        /**
         * Triggered every tick of the running animation.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CharacterPrototype.html#CharacterPrototype.footstep_particle_triggers Online documentation}
         */
        footstep_particle_triggers?: FootstepTriggerEffectList;
        /**
         * Triggered when the running animation (`animations`) rolls over the frames defined in `right_footprint_frames` and `left_footprint_frames`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CharacterPrototype.html#CharacterPrototype.synced_footstep_particle_triggers Online documentation}
         */
        synced_footstep_particle_triggers?: FootstepTriggerEffectList;
        /**
         * Triggered when the running animation (`animations`) rolls over the frames defined in `right_footprint_frames` and `left_footprint_frames`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CharacterPrototype.html#CharacterPrototype.footprint_particles Online documentation}
         */
        footprint_particles?: readonly FootprintParticle[];
        /**
         * Offset from the center of the entity for the left footprint. Used by `footprint_particles`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CharacterPrototype.html#CharacterPrototype.left_footprint_offset Online documentation}
         */
        left_footprint_offset?: Vector;
        /**
         * Offset from the center of the entity for the right footprint. Used by `footprint_particles`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CharacterPrototype.html#CharacterPrototype.right_footprint_offset Online documentation}
         */
        right_footprint_offset?: Vector;
        /**
         * The frames in the running animation (`animations`) where the right foot touches the ground.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CharacterPrototype.html#CharacterPrototype.right_footprint_frames Online documentation}
         */
        right_footprint_frames?: readonly float[];
        /**
         * The frames in the running animation (`animations`) where the left foot touches the ground.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CharacterPrototype.html#CharacterPrototype.left_footprint_frames Online documentation}
         */
        left_footprint_frames?: readonly float[];
        tool_attack_result?: Trigger;
        /**
         * Whether this prototype should be a high priority target for enemy forces. See {@linkplain https://wiki.factorio.com/Military_units_and_structures Military units and structures}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CharacterPrototype.html#CharacterPrototype.is_military_target Online documentation}
         */
        is_military_target?: bool;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CharacterPrototype.html#CharacterPrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Cliff cliff}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CliffPrototype.html Online documentation}
     */
    export interface CliffPrototype extends EntityPrototype {
        orientations: OrientedCliffPrototypeSet;
        grid_size: Vector;
        grid_offset: Vector;
        cliff_height?: float;
        /**
         * Name of a capsule that has a robot_action to explode cliffs.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CliffPrototype.html#CliffPrototype.cliff_explosive Online documentation}
         */
        cliff_explosive?: ItemID;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CliffPrototype.html#CliffPrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * This prototype is used for receiving an achievement when the player has a certain robot follower count.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CombatRobotCountAchievementPrototype.html Online documentation}
     */
    export interface CombatRobotCountAchievementPrototype extends OmitType<AchievementPrototype> {
        /**
         * This will trigger the achievement, if player's current robot count is over this amount.
         * @example
         * count = 100
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CombatRobotCountAchievementPrototype.html#CombatRobotCountAchievementPrototype.count Online documentation}
         */
        count?: uint32;
    }
    /**
     * A combat robot. Can attack enemies.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CombatRobotPrototype.html Online documentation}
     */
    export interface CombatRobotPrototype extends FlyingRobotPrototype {
        time_to_live: uint32;
        attack_parameters: AttackParameters;
        idle: RotatedAnimation;
        shadow_idle: RotatedAnimation;
        in_motion: RotatedAnimation;
        shadow_in_motion: RotatedAnimation;
        range_from_player?: double;
        friction?: double;
        /**
         * Applied when the combat robot expires (runs out of `time_to_live`).
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CombatRobotPrototype.html#CombatRobotPrototype.destroy_action Online documentation}
         */
        destroy_action?: Trigger;
        follows_player?: bool;
        light: LightDefinition;
    }
    /**
     * Abstract base type for decider and arithmetic combinators.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CombinatorPrototype.html Online documentation}
     */
    export interface CombinatorPrototype extends EntityWithOwnerPrototype {
        energy_source: ElectricEnergySource | VoidEnergySource;
        active_energy_usage: Energy;
        sprites: Sprite4Way;
        activity_led_sprites: Sprite4Way;
        input_connection_bounding_box: BoundingBox;
        output_connection_bounding_box: BoundingBox;
        activity_led_light_offsets: readonly [
            Vector,
            Vector,
            Vector,
            Vector
        ];
        screen_light_offsets: readonly [
            Vector,
            Vector,
            Vector,
            Vector
        ];
        input_connection_points: readonly [
            WireConnectionPoint,
            WireConnectionPoint,
            WireConnectionPoint,
            WireConnectionPoint
        ];
        output_connection_points: readonly [
            WireConnectionPoint,
            WireConnectionPoint,
            WireConnectionPoint,
            WireConnectionPoint
        ];
        activity_led_light?: LightDefinition;
        screen_light?: LightDefinition;
        activity_led_hold_time?: uint8;
        /**
         * The maximum circuit wire distance for this entity.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CombinatorPrototype.html#CombinatorPrototype.circuit_wire_max_distance Online documentation}
         */
        circuit_wire_max_distance?: double;
        draw_copper_wires?: bool;
        draw_circuit_wires?: bool;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Constant_combinator constant combinator}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ConstantCombinatorPrototype.html Online documentation}
     */
    export interface ConstantCombinatorPrototype extends EntityWithOwnerPrototype {
        item_slot_count: uint32;
        sprites: Sprite4Way;
        activity_led_sprites: Sprite4Way;
        activity_led_light_offsets: readonly [
            Vector,
            Vector,
            Vector,
            Vector
        ];
        circuit_wire_connection_points: readonly [
            WireConnectionPoint,
            WireConnectionPoint,
            WireConnectionPoint,
            WireConnectionPoint
        ];
        activity_led_light?: LightDefinition;
        /**
         * The maximum circuit wire distance for this entity.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ConstantCombinatorPrototype.html#ConstantCombinatorPrototype.circuit_wire_max_distance Online documentation}
         */
        circuit_wire_max_distance?: double;
        draw_copper_wires?: bool;
        draw_circuit_wires?: bool;
    }
    /**
     * This prototype is used for receiving an achievement when the player constructs enough entities with construction robots.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ConstructWithRobotsAchievementPrototype.html Online documentation}
     */
    export interface ConstructWithRobotsAchievementPrototype extends OmitType<AchievementPrototype> {
        /**
         * If this is false, the player carries over their statistics from this achievement through all their saves.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ConstructWithRobotsAchievementPrototype.html#ConstructWithRobotsAchievementPrototype.limited_to_one_game Online documentation}
         */
        limited_to_one_game: bool;
        /**
         * This will trigger the achievement, if enough entities were placed using construction robots.
         * @example
         * amount = 100
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ConstructWithRobotsAchievementPrototype.html#ConstructWithRobotsAchievementPrototype.amount Online documentation}
         */
        amount?: uint32;
        more_than_manually?: bool;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Construction_robot construction robot}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ConstructionRobotPrototype.html Online documentation}
     */
    export interface ConstructionRobotPrototype extends RobotWithLogisticInterfacePrototype {
        construction_vector: Vector;
        working?: RotatedAnimation;
        shadow_working?: RotatedAnimation;
        smoke?: Animation;
        sparks?: AnimationVariations;
        repairing_sound?: Sound;
        working_light?: LightDefinition;
        /**
         * Must have a collision box size of zero.
         * @example
         * collision_box = {{0, 0}, {0, 0}}
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ConstructionRobotPrototype.html#ConstructionRobotPrototype.collision_box Online documentation}
         */
        collision_box?: BoundingBox;
    }
    /**
     * A generic container, such as a chest. Can not be rotated.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ContainerPrototype.html Online documentation}
     */
    export interface ContainerPrototype extends EntityWithOwnerPrototype {
        /**
         * The number of slots in this container.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ContainerPrototype.html#ContainerPrototype.inventory_size Online documentation}
         */
        inventory_size: ItemStackIndex;
        /**
         * The picture displayed for this entity.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ContainerPrototype.html#ContainerPrototype.picture Online documentation}
         */
        picture: Sprite;
        /**
         * Whether the inventory of this container can be filtered (like cargo wagons) or not.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ContainerPrototype.html#ContainerPrototype.inventory_type Online documentation}
         */
        inventory_type?: "with_bar" | "with_filters_and_bar";
        /**
         * If the inventory limiter (red X) is visible in the chest's GUI. This does not change the inventory itself ({@link import("factorio:runtime").LuaInventory#supports_bar LuaInventory::supports_bar} will not change and the bar can still be modified by script).
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ContainerPrototype.html#ContainerPrototype.enable_inventory_bar Online documentation}
         */
        enable_inventory_bar?: bool;
        /**
         * If the icons of items shown in alt-mode should be scaled to the containers size.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ContainerPrototype.html#ContainerPrototype.scale_info_icons Online documentation}
         */
        scale_info_icons?: bool;
        /**
         * Defines how wires visually connect to this container.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ContainerPrototype.html#ContainerPrototype.circuit_wire_connection_point Online documentation}
         */
        circuit_wire_connection_point?: WireConnectionPoint;
        /**
         * The maximum circuit wire distance for this container.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ContainerPrototype.html#ContainerPrototype.circuit_wire_max_distance Online documentation}
         */
        circuit_wire_max_distance?: double;
        draw_copper_wires?: bool;
        draw_circuit_wires?: bool;
        /**
         * The pictures displayed for circuit connections to this container.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ContainerPrototype.html#ContainerPrototype.circuit_connector_sprites Online documentation}
         */
        circuit_connector_sprites?: CircuitConnectorSprites;
    }
    /**
     * A copy-paste or cut-paste tool.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CopyPasteToolPrototype.html Online documentation}
     */
    export interface CopyPasteToolPrototype extends OmitType<SelectionToolPrototype> {
        cuts?: bool;
        /**
         * Count of items of the same name that can be stored in one inventory slot. Must be 1 when the `"not-stackable"` flag is set.
         * @example
         * stack_size = 1
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CopyPasteToolPrototype.html#CopyPasteToolPrototype.stack_size Online documentation}
         */
        stack_size: 1;
        /**
         * This property is hardcoded to `false`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CopyPasteToolPrototype.html#CopyPasteToolPrototype.always_include_tiles Online documentation}
         */
        always_include_tiles?: bool;
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CopyPasteToolPrototype.html#CopyPasteToolPrototype.entity_filters Online documentation}
         */
        entity_filters?: readonly EntityID[];
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CopyPasteToolPrototype.html#CopyPasteToolPrototype.alt_entity_filters Online documentation}
         */
        alt_entity_filters?: readonly EntityID[];
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CopyPasteToolPrototype.html#CopyPasteToolPrototype.entity_type_filters Online documentation}
         */
        entity_type_filters?: readonly string[];
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CopyPasteToolPrototype.html#CopyPasteToolPrototype.alt_entity_type_filters Online documentation}
         */
        alt_entity_type_filters?: readonly string[];
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CopyPasteToolPrototype.html#CopyPasteToolPrototype.tile_filters Online documentation}
         */
        tile_filters?: readonly TileID[];
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CopyPasteToolPrototype.html#CopyPasteToolPrototype.alt_tile_filters Online documentation}
         */
        alt_tile_filters?: readonly TileID[];
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CopyPasteToolPrototype.html#CopyPasteToolPrototype.entity_filter_mode Online documentation}
         */
        entity_filter_mode?: "whitelist" | "blacklist";
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CopyPasteToolPrototype.html#CopyPasteToolPrototype.alt_entity_filter_mode Online documentation}
         */
        alt_entity_filter_mode?: "whitelist" | "blacklist";
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CopyPasteToolPrototype.html#CopyPasteToolPrototype.tile_filter_mode Online documentation}
         */
        tile_filter_mode?: "whitelist" | "blacklist";
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CopyPasteToolPrototype.html#CopyPasteToolPrototype.alt_tile_filter_mode Online documentation}
         */
        alt_tile_filter_mode?: "whitelist" | "blacklist";
    }
    /**
     * Used for corpses, for example the remnants when destroying buildings.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CorpsePrototype.html Online documentation}
     */
    export interface CorpsePrototype extends EntityPrototype {
        /**
         * Multiplier for `time_before_shading_off` and `time_before_removed`. Must be positive.
         *
         * Controls the speed of the animation: `1 ÷ dying_speed = duration of the animation`
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CorpsePrototype.html#CorpsePrototype.dying_speed Online documentation}
         */
        dying_speed?: float;
        /**
         * Controls the speed of the splash animation: `1 ÷ splash_speed = duration of the splash animation`
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CorpsePrototype.html#CorpsePrototype.splash_speed Online documentation}
         */
        splash_speed?: float;
        /**
         * Controls how long the corpse takes to fade, as in how long it takes to get from no transparency to full transparency/removed. This time is ''not'' added to `time_before_removed`, it is instead subtracted from it. So by default, the corpse starts fading about 15 seconds before it gets removed.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CorpsePrototype.html#CorpsePrototype.time_before_shading_off Online documentation}
         */
        time_before_shading_off?: int32;
        /**
         * Time in ticks this corpse lasts. May not be 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CorpsePrototype.html#CorpsePrototype.time_before_removed Online documentation}
         */
        time_before_removed?: int32;
        remove_on_entity_placement?: bool;
        remove_on_tile_placement?: bool;
        final_render_layer?: RenderLayer;
        ground_patch_render_layer?: RenderLayer;
        animation_render_layer?: RenderLayer;
        splash_render_layer?: RenderLayer;
        animation_overlay_render_layer?: RenderLayer;
        animation_overlay_final_render_layer?: RenderLayer;
        shuffle_directions_at_frame?: uint8;
        use_tile_color_for_ground_patch_tint?: bool;
        ground_patch_fade_in_delay?: float;
        ground_patch_fade_in_speed?: float;
        ground_patch_fade_out_start?: float;
        /**
         * The dying animation.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CorpsePrototype.html#CorpsePrototype.animation Online documentation}
         */
        animation?: RotatedAnimationVariations;
        /**
         * Variation count must be the same as `animation` variation count. Direction count must be the same as `animation` direction count. Frame count must be the same as `animation` frame count.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CorpsePrototype.html#CorpsePrototype.animation_overlay Online documentation}
         */
        animation_overlay?: RotatedAnimationVariations;
        splash?: AnimationVariations;
        ground_patch?: AnimationVariations;
        ground_patch_higher?: AnimationVariations;
        ground_patch_fade_out_duration?: float;
        /**
         * An array of arrays of integers. The inner arrays are called "groups" and must all have the same size.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CorpsePrototype.html#CorpsePrototype.direction_shuffle Online documentation}
         */
        direction_shuffle?: readonly (readonly uint16[])[];
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CorpsePrototype.html#CorpsePrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * The abstract basis of the assembling machines and furnaces. Contains the properties that both of them have.
     *
     * Note that a crafting machine cannot be rotated unless it has at least one of the following: a fluid box, a heat energy source, a fluid energy source, or a non-square collision box. Crafting machines with non-square collision boxes can only be rotated before placement, not after.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CraftingMachinePrototype.html Online documentation}
     */
    export interface CraftingMachinePrototype extends EntityWithOwnerPrototype {
        /**
         * Sets how much energy this machine uses while crafting. Energy usage has to be positive.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CraftingMachinePrototype.html#CraftingMachinePrototype.energy_usage Online documentation}
         */
        energy_usage: Energy;
        /**
         * How fast this crafting machine can craft. 1 means that for example a 1 second long recipe take 1 second to craft. 0.5 means it takes 2 seconds, and 2 means it takes 0.5 seconds.
         *
         * Crafting speed has to be positive.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CraftingMachinePrototype.html#CraftingMachinePrototype.crafting_speed Online documentation}
         */
        crafting_speed: double;
        /**
         * A list of {@link RecipeCategory recipe categories} this crafting machine can use.
         * @example
         * crafting_categories = {"crafting", "smelting"}
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CraftingMachinePrototype.html#CraftingMachinePrototype.crafting_categories Online documentation}
         */
        crafting_categories: readonly RecipeCategoryID[];
        /**
         * Defines how the crafting machine is powered.
         *
         * When using an electric energy source and `drain` is not specified, it will be set to `energy_usage ÷ 30` automatically.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CraftingMachinePrototype.html#CraftingMachinePrototype.energy_source Online documentation}
         */
        energy_source: EnergySource;
        /**
         * Can have `off_when_no_fluid_recipe` key that has a {@link bool} value. `off_when_no_fluid_recipe` defaults to false. `off_when_no_fluid_recipe` is ignored by {@link FurnacePrototype} and considered to always be false.
         *
         * If a crafting machine has fluid boxes *and* `off_when_no_fluid_recipe` is true, the crafting machine can only be rotated when a recipe consuming or producing fluid is set, or it has one of the other properties listed at the top of the page.
         * @example
         * fluid_boxes =
         * {
         *   {
         *     production_type = "input",
         *       pipe_picture = assembler2pipepictures(),
         *       pipe_covers = pipecoverspictures(),
         *       base_area = 10,
         *       base_level = -1,
         *       pipe_connections = { { type = "input", position = {0, -2} } },
         *       secondary_draw_orders = { north = -1 }
         *   },
         *   {
         *     production_type = "output",
         *     pipe_picture = assembler2pipepictures(),
         *     pipe_covers = pipecoverspictures(),
         *     base_area = 10,
         *     base_level = 1,
         *     pipe_connections = {{ type = "output", position = {0, 2} }},
         *     secondary_draw_orders = { north = -1 }
         *   },
         *   off_when_no_fluid_recipe = true
         * }
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CraftingMachinePrototype.html#CraftingMachinePrototype.fluid_boxes Online documentation}
         */
        fluid_boxes?: readonly FluidBox[];
        /**
         * Sets the module effects that are allowed to be used on this machine.
         *
         * Note: If the time to complete a recipe is shorter than one tick, only one craft can be completed per tick, but productivity bonus is applied to the non-limited ''completable'' work. For a simple example, if a recipe were to take half a tick, only one recipe would be completed, but twice the productivity bonus would occur. The surplus production from productivity is **not** limited to one craft per tick.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CraftingMachinePrototype.html#CraftingMachinePrototype.allowed_effects Online documentation}
         */
        allowed_effects?: EffectTypeLimitation;
        /**
         * Whether the "alt-mode icon" should be scaled to the size of the machine.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CraftingMachinePrototype.html#CraftingMachinePrototype.scale_entity_info_icon Online documentation}
         */
        scale_entity_info_icon?: bool;
        /**
         * Whether the "alt-mode icon" should be drawn at all.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CraftingMachinePrototype.html#CraftingMachinePrototype.show_recipe_icon Online documentation}
         */
        show_recipe_icon?: bool;
        /**
         * Controls whether the ingredients of an in-progress recipe are destroyed when mining the machine/changing the recipe. If set to true, the ingredients do not get destroyed. This affects only the ingredients of the recipe that is currently in progress, so those that visually have already been consumed while their resulting product has not yet been produced.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CraftingMachinePrototype.html#CraftingMachinePrototype.return_ingredients_on_change Online documentation}
         */
        return_ingredients_on_change?: bool;
        /**
         * The animation played when crafting. When the crafting machine is idle, the animation will be paused.
         *
         * When a crafting machine cannot be rotated, only the north rotation of the animation will be used.
         *
         * The `animation_speed` of the animation is divided by 2 by the game. For example, the default animation speed of 1 means one animation frame per 2 ticks (30 fps) instead of the usual 60 fps.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CraftingMachinePrototype.html#CraftingMachinePrototype.animation Online documentation}
         */
        animation?: Animation4Way;
        /**
         * Idle animation must have the same frame count as `animation`. It is used for drawing the machine in the idle state. The animation is frozen on a single frame when the machine is idle.
         *
         * This is an animation and not just sprite to make it possible for idle state and working state to match their visuals when the machine switches from one state to another.
         *
         * When a crafting machine cannot be rotated, only the north rotation of the idle animation will be used.
         *
         * The `animation_speed` of the animation is divided by 2 by the game. For example, the default animation speed of 1 means one animation frame per 2 ticks (30 fps) instead of the usual 60 fps.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CraftingMachinePrototype.html#CraftingMachinePrototype.idle_animation Online documentation}
         */
        idle_animation?: Animation4Way;
        /**
         * Only loaded if `idle_animation` is defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CraftingMachinePrototype.html#CraftingMachinePrototype.always_draw_idle_animation Online documentation}
         */
        always_draw_idle_animation?: bool;
        default_recipe_tint?: DefaultRecipeTint;
        /**
         * Only loaded if one of `shift_animation_waypoint_stop_duration` or `shift_animation_transition_duration` is not 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CraftingMachinePrototype.html#CraftingMachinePrototype.shift_animation_waypoints Online documentation}
         */
        shift_animation_waypoints?: ShiftAnimationWaypoints;
        /**
         * Only loaded if `shift_animation_waypoints` is defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CraftingMachinePrototype.html#CraftingMachinePrototype.shift_animation_waypoint_stop_duration Online documentation}
         */
        shift_animation_waypoint_stop_duration?: uint16;
        /**
         * Only loaded if `shift_animation_waypoints` is defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CraftingMachinePrototype.html#CraftingMachinePrototype.shift_animation_transition_duration Online documentation}
         */
        shift_animation_transition_duration?: uint16;
        /**
         * Used by {@link WorkingVisualisation#apply_tint WorkingVisualisation::apply_tint}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CraftingMachinePrototype.html#CraftingMachinePrototype.status_colors Online documentation}
         */
        status_colors?: StatusColors;
        /**
         * Shift of the "alt-mode icon" relative to the machine's center.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CraftingMachinePrototype.html#CraftingMachinePrototype.entity_info_icon_shift Online documentation}
         */
        entity_info_icon_shift?: Vector;
        /**
         * Whether the "alt-mode icon" should have a black background.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CraftingMachinePrototype.html#CraftingMachinePrototype.draw_entity_info_icon_background Online documentation}
         */
        draw_entity_info_icon_background?: bool;
        /**
         * Whether the speed of the animation and working visualization should be based on the machine's speed (boosted or slowed by modules).
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CraftingMachinePrototype.html#CraftingMachinePrototype.match_animation_speed_to_activity Online documentation}
         */
        match_animation_speed_to_activity?: bool;
        /**
         * Whether the recipe icon should be shown on the map.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CraftingMachinePrototype.html#CraftingMachinePrototype.show_recipe_icon_on_map Online documentation}
         */
        show_recipe_icon_on_map?: bool;
        /**
         * Productivity bonus that this machine always has.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CraftingMachinePrototype.html#CraftingMachinePrototype.base_productivity Online documentation}
         */
        base_productivity?: float;
        /**
         * The number of module slots in this machine, and their icon positions.
         * @example
         * module_specification =
         * {
         *   module_info_icon_shift =
         *   {
         *     0,
         *     0.8
         *   },
         *   module_slots = 2
         * }
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CraftingMachinePrototype.html#CraftingMachinePrototype.module_specification Online documentation}
         */
        module_specification?: ModuleSpecification;
        /**
         * Used to display different animations when the machine is running, for example tinted based on the current recipe.
         *
         * The `animation_speed` of the animation is divided by 2 by the game. For example, the default animation speed of 1 means one animation frame per 2 ticks (30 fps) instead of the usual 60 fps.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CraftingMachinePrototype.html#CraftingMachinePrototype.working_visualisations Online documentation}
         */
        working_visualisations?: readonly WorkingVisualisation[];
    }
    /**
     * A curved rail.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CurvedRailPrototype.html Online documentation}
     */
    export interface CurvedRailPrototype extends RailPrototype {
        bending_type?: "turn";
    }
    /**
     * Used for custom keyboard shortcuts/key bindings in mods. The key associated with the custom input can be changed in the options. This means that `key_sequence` is simply the default key binding.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CustomInputPrototype.html Online documentation}
     */
    export interface CustomInputPrototype extends PrototypeBase {
        /**
         * Unique textual identification of the prototype. May not contain a dot, nor exceed a length of 200 characters.
         *
         * For a list of all names used in vanilla, see {@linkplain https://wiki.factorio.com/Data.raw data.raw}.
         *
         * It is also the name for the event that is raised when they key (combination) is pressed and action is `"lua"`, see {@linkplain https://wiki.factorio.com/Tutorial:Script_interfaces Tutorial:Script interfaces}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CustomInputPrototype.html#CustomInputPrototype.name Online documentation}
         */
        name: string;
        /**
         * The default key sequence for this custom input. Use "" (empty string) for unassigned.
         *
         * Use "mouse-button-2" etc for mouse buttons, mouse-button-3 for middle mouse button. Use "mouse-wheel-up", "mouse-wheel-down", "mouse-wheel-left", "mouse-wheel-right" for mouse wheel.
         *
         * " + " is used to separate modifier keys from normal keys: <code>"ALT + G"</code>.
         *
         * For modifier keys, the following names are used: "CONTROL", "SHIFT", "ALT", "COMMAND".
         *
         * A key binding can contain an unlimited amount of modifier keys (listed above) but only one normal key (listed below).
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CustomInputPrototype.html#CustomInputPrototype.key_sequence Online documentation}
         */
        key_sequence: string;
        /**
         * The alternative key binding for this control. See `key_sequence` for the format.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CustomInputPrototype.html#CustomInputPrototype.alternative_key_sequence Online documentation}
         */
        alternative_key_sequence?: string;
        /**
         * The controller (game pad) keybinding for this control. See `key_sequence` for the format.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CustomInputPrototype.html#CustomInputPrototype.controller_key_sequence Online documentation}
         */
        controller_key_sequence?: string;
        /**
         * The alternative controller (game pad) keybinding for this control. See `key_sequence` for the format.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CustomInputPrototype.html#CustomInputPrototype.controller_alternative_key_sequence Online documentation}
         */
        controller_alternative_key_sequence?: string;
        /**
         * When a custom-input is linked to a game control it won't show up in the control-settings GUI and will fire when the linked control is pressed.
         * @example
         * key_sequence = "",
         * linked_game_control = "clear-cursor"
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CustomInputPrototype.html#CustomInputPrototype.linked_game_control Online documentation}
         */
        linked_game_control?: string;
        /**
         * Sets whether internal game events associated with the same key sequence should be fired or blocked. If they are fired ("none"), then the custom input event will happen before the internal game event.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CustomInputPrototype.html#CustomInputPrototype.consuming Online documentation}
         */
        consuming?: ConsumingType;
        /**
         * If this custom input is enabled. Disabled custom inputs exist but are not used by the game. If disabled, no event is raised when the input is used.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CustomInputPrototype.html#CustomInputPrototype.enabled Online documentation}
         */
        enabled?: bool;
        enabled_while_spectating?: bool;
        enabled_while_in_cutscene?: bool;
        /**
         * If true, the type and name of the currently selected prototype will be provided as "selected_prototype" in the raised {@link import("factorio:runtime").CustomInputEvent Lua event}. {@linkplain https://forums.factorio.com/96125 This also works in GUIs}, not just the game world.
         *
         * This will also return an item in the cursor such as copper-wire or rail-planner, if nothing is beneath the cursor.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CustomInputPrototype.html#CustomInputPrototype.include_selected_prototype Online documentation}
         */
        include_selected_prototype?: bool;
        /**
         * The item will be created when this input is pressed and action is set to "spawn-item". The item must have the {@link ItemPrototypeFlags#spawnable spawnable} flag set.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CustomInputPrototype.html#CustomInputPrototype.item_to_spawn Online documentation}
         */
        item_to_spawn?: ItemID;
        /**
         * A {@link import("factorio:runtime").CustomInputEvent Lua event} is only raised if the action is "lua".
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/CustomInputPrototype.html#CustomInputPrototype.action Online documentation}
         */
        action?: "lua" | "spawn-item" | "toggle-personal-roboport" | "toggle-personal-logistic-requests" | "toggle-equipment-movement-bonus";
    }
    /**
     * A damage type. This is used in the {@linkplain https://wiki.factorio.com/Damage damage system}. {@linkplain https://wiki.factorio.com/Damage#Damage_types A list of built-in damage types can be found here}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DamageType.html Online documentation}
     */
    export interface DamageType extends PrototypeBase {
        hidden?: bool;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Decider_combinator decider combinator}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DeciderCombinatorPrototype.html Online documentation}
     */
    export interface DeciderCombinatorPrototype extends CombinatorPrototype {
        equal_symbol_sprites: Sprite4Way;
        greater_symbol_sprites: Sprite4Way;
        less_symbol_sprites: Sprite4Way;
        not_equal_symbol_sprites: Sprite4Way;
        greater_or_equal_symbol_sprites: Sprite4Way;
        less_or_equal_symbol_sprites: Sprite4Way;
    }
    /**
     * This prototype is used for receiving an achievement when the player deconstructs enough entities with construction robots.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DeconstructWithRobotsAchievementPrototype.html Online documentation}
     */
    export interface DeconstructWithRobotsAchievementPrototype extends OmitType<AchievementPrototype> {
        /**
         * This will trigger the achievement, if enough entities were deconstructed using construction robots.
         * @example
         * amount = 100
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DeconstructWithRobotsAchievementPrototype.html#DeconstructWithRobotsAchievementPrototype.amount Online documentation}
         */
        amount: uint32;
    }
    /**
     * Entity used to signify that the tile below it should be deconstructed.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DeconstructibleTileProxyPrototype.html Online documentation}
     */
    export interface DeconstructibleTileProxyPrototype extends EntityPrototype {
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DeconstructibleTileProxyPrototype.html#DeconstructibleTileProxyPrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Deconstruction_planner deconstruction planner}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DeconstructionItemPrototype.html Online documentation}
     */
    export interface DeconstructionItemPrototype extends OmitType<SelectionToolPrototype> {
        /**
         * Can't be > 255.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DeconstructionItemPrototype.html#DeconstructionItemPrototype.entity_filter_count Online documentation}
         */
        entity_filter_count?: ItemStackIndex;
        /**
         * Can't be > 255.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DeconstructionItemPrototype.html#DeconstructionItemPrototype.tile_filter_count Online documentation}
         */
        tile_filter_count?: ItemStackIndex;
        /**
         * Count of items of the same name that can be stored in one inventory slot. Must be 1 when the `"not-stackable"` flag is set.
         * @example
         * stack_size = 1
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DeconstructionItemPrototype.html#DeconstructionItemPrototype.stack_size Online documentation}
         */
        stack_size: 1;
        /**
         * This property is hardcoded to `"deconstruct"`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DeconstructionItemPrototype.html#DeconstructionItemPrototype.selection_mode Online documentation}
         */
        selection_mode?: SelectionModeFlags;
        /**
         * This property is hardcoded to `"cancel-deconstruct"`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DeconstructionItemPrototype.html#DeconstructionItemPrototype.alt_selection_mode Online documentation}
         */
        alt_selection_mode?: SelectionModeFlags;
        /**
         * This property is hardcoded to `false`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DeconstructionItemPrototype.html#DeconstructionItemPrototype.always_include_tiles Online documentation}
         */
        always_include_tiles?: bool;
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DeconstructionItemPrototype.html#DeconstructionItemPrototype.entity_filters Online documentation}
         */
        entity_filters?: readonly EntityID[];
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DeconstructionItemPrototype.html#DeconstructionItemPrototype.alt_entity_filters Online documentation}
         */
        alt_entity_filters?: readonly EntityID[];
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DeconstructionItemPrototype.html#DeconstructionItemPrototype.entity_type_filters Online documentation}
         */
        entity_type_filters?: readonly string[];
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DeconstructionItemPrototype.html#DeconstructionItemPrototype.alt_entity_type_filters Online documentation}
         */
        alt_entity_type_filters?: readonly string[];
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DeconstructionItemPrototype.html#DeconstructionItemPrototype.tile_filters Online documentation}
         */
        tile_filters?: readonly TileID[];
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DeconstructionItemPrototype.html#DeconstructionItemPrototype.alt_tile_filters Online documentation}
         */
        alt_tile_filters?: readonly TileID[];
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DeconstructionItemPrototype.html#DeconstructionItemPrototype.entity_filter_mode Online documentation}
         */
        entity_filter_mode?: "whitelist" | "blacklist";
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DeconstructionItemPrototype.html#DeconstructionItemPrototype.alt_entity_filter_mode Online documentation}
         */
        alt_entity_filter_mode?: "whitelist" | "blacklist";
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DeconstructionItemPrototype.html#DeconstructionItemPrototype.tile_filter_mode Online documentation}
         */
        tile_filter_mode?: "whitelist" | "blacklist";
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DeconstructionItemPrototype.html#DeconstructionItemPrototype.alt_tile_filter_mode Online documentation}
         */
        alt_tile_filter_mode?: "whitelist" | "blacklist";
    }
    /**
     * Simple decorative purpose objects on the map, they have no health and some of them are removed when the player builds over. Usually used for grass patches, roots, small plants etc.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DecorativePrototype.html Online documentation}
     */
    export interface DecorativePrototype extends PrototypeBase {
        /**
         * Must contain at least 1 picture.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DecorativePrototype.html#DecorativePrototype.pictures Online documentation}
         */
        pictures: SpriteVariations;
        /**
         * Must contain the [0,0] point. Max radius of the collision box is 8.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DecorativePrototype.html#DecorativePrototype.collision_box Online documentation}
         */
        collision_box?: BoundingBox;
        render_layer?: RenderLayer;
        grows_through_rail_path?: bool;
        /**
         * Mandatory if `render_layer` = "decals". This int16 is converted to a {@link RenderLayer} internally.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DecorativePrototype.html#DecorativePrototype.tile_layer Online documentation}
         */
        tile_layer?: int16;
        /**
         * Loaded only if `render_layer` = "decals".
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DecorativePrototype.html#DecorativePrototype.decal_overdraw_priority Online documentation}
         */
        decal_overdraw_priority?: uint16;
        walking_sound?: Sound;
        /**
         * Called by {@link DestroyDecorativesTriggerEffectItem}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DecorativePrototype.html#DecorativePrototype.trigger_effect Online documentation}
         */
        trigger_effect?: TriggerEffect;
        autoplace?: AutoplaceSpecification;
        collision_mask?: CollisionMask;
    }
    /**
     * This prototype is used for receiving an achievement, when the player requests and receives enough items using logistic robots.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DeliverByRobotsAchievementPrototype.html Online documentation}
     */
    export interface DeliverByRobotsAchievementPrototype extends OmitType<AchievementPrototype> {
        /**
         * This will trigger the achievement, when the player receives enough items through logistic robots.
         * @example
         * amount = 10000
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DeliverByRobotsAchievementPrototype.html#DeliverByRobotsAchievementPrototype.amount Online documentation}
         */
        amount: MaterialAmountType;
    }
    /**
     * This prototype is used for receiving an achievement when the player finishes the game without building a specific entity.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DontBuildEntityAchievementPrototype.html Online documentation}
     */
    export interface DontBuildEntityAchievementPrototype extends OmitType<AchievementPrototype> {
        /**
         * This will disable the achievement, if this entity is placed. If you finish the game without building this entity, you receive the achievement.
         * @example
         * dont_build = {"stack-inserter", "fluid-wagon"}
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DontBuildEntityAchievementPrototype.html#DontBuildEntityAchievementPrototype.dont_build Online documentation}
         */
        dont_build: EntityID | readonly EntityID[];
        amount?: uint32;
    }
    /**
     * This prototype is used for receiving an achievement when the player finishes the game without crafting more than a set amount.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DontCraftManuallyAchievementPrototype.html Online documentation}
     */
    export interface DontCraftManuallyAchievementPrototype extends OmitType<AchievementPrototype> {
        /**
         * This will disable the achievement, if the player crafts more than this.
         * @example
         * amount = 111
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DontCraftManuallyAchievementPrototype.html#DontCraftManuallyAchievementPrototype.amount Online documentation}
         */
        amount: MaterialAmountType;
    }
    /**
     * This prototype is used for receiving an achievement when the player finishes the game without receiving energy from a specific energy source.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DontUseEntityInEnergyProductionAchievementPrototype.html Online documentation}
     */
    export interface DontUseEntityInEnergyProductionAchievementPrototype extends OmitType<AchievementPrototype> {
        /**
         * This will **not** disable the achievement, if this entity is placed, and you have received any amount of power from it.
         * @example
         * excluded = {"steam-engine", "steam-turbine"}
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DontUseEntityInEnergyProductionAchievementPrototype.html#DontUseEntityInEnergyProductionAchievementPrototype.excluded Online documentation}
         */
        excluded: EntityID | readonly EntityID[];
        /**
         * This will disable the achievement, if this entity is placed, and you have received any amount of power from it. If you finish the game without receiving power from this entity, you receive the achievement.
         * @example
         * included = "solar-panel"
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/DontUseEntityInEnergyProductionAchievementPrototype.html#DontUseEntityInEnergyProductionAchievementPrototype.included Online documentation}
         */
        included: EntityID | readonly EntityID[];
        last_hour_only?: bool;
        minimum_energy_produced?: Energy;
    }
    /**
     * Properties of the editor controller.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EditorControllerPrototype.html Online documentation}
     */
    export interface EditorControllerPrototype {
        type: "editor-controller";
        /**
         * Name of the editor controller. Base game uses "default".
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EditorControllerPrototype.html#EditorControllerPrototype.name Online documentation}
         */
        name: string;
        inventory_size: ItemStackIndex;
        gun_inventory_size: ItemStackIndex;
        /**
         * Must be >= 0.34375.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EditorControllerPrototype.html#EditorControllerPrototype.movement_speed Online documentation}
         */
        movement_speed: double;
        item_pickup_distance: double;
        loot_pickup_distance: double;
        mining_speed: double;
        enable_flash_light: bool;
        adjust_speed_based_off_zoom: bool;
        render_as_day: bool;
        instant_blueprint_building: bool;
        instant_deconstruction: bool;
        instant_upgrading: bool;
        instant_rail_planner: bool;
        show_status_icons: bool;
        show_hidden_entities: bool;
        show_entity_tags: bool;
        show_entity_health_bars: bool;
        show_additional_entity_info_gui: bool;
        generate_neighbor_chunks: bool;
        fill_built_entity_energy_buffers: bool;
        show_character_tab_in_controller_gui: bool;
        show_infinity_filters_in_controller_gui: bool;
        placed_corpses_never_expire: bool;
    }
    /**
     * Entity with electric energy source with that can have some of its values changed runtime. Useful for modding in energy consumers/producers.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ElectricEnergyInterfacePrototype.html Online documentation}
     */
    export interface ElectricEnergyInterfacePrototype extends EntityWithOwnerPrototype {
        energy_source: ElectricEnergySource;
        energy_production?: Energy;
        energy_usage?: Energy;
        gui_mode?: "all" | "none" | "admins";
        /**
         * Whether the electric energy interface animation always runs instead of being scaled to activity.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ElectricEnergyInterfacePrototype.html#ElectricEnergyInterfacePrototype.continuous_animation Online documentation}
         */
        continuous_animation?: bool;
        render_layer?: RenderLayer;
        /**
         * The light that this electric energy interface emits.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ElectricEnergyInterfacePrototype.html#ElectricEnergyInterfacePrototype.light Online documentation}
         */
        light?: LightDefinition;
        picture?: Sprite;
        /**
         * Only loaded if `picture` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ElectricEnergyInterfacePrototype.html#ElectricEnergyInterfacePrototype.pictures Online documentation}
         */
        pictures?: Sprite4Way;
        /**
         * Only loaded if both `picture` and `pictures` are not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ElectricEnergyInterfacePrototype.html#ElectricEnergyInterfacePrototype.animation Online documentation}
         */
        animation?: Animation;
        /**
         * Only loaded if `picture`, `pictures`, and `animation` are not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ElectricEnergyInterfacePrototype.html#ElectricEnergyInterfacePrototype.animations Online documentation}
         */
        animations?: Animation4Way;
        allow_copy_paste?: bool;
    }
    /**
     * An electric pole - part of the {@linkplain https://wiki.factorio.com/Electric_system electric system}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ElectricPolePrototype.html Online documentation}
     */
    export interface ElectricPolePrototype extends EntityWithOwnerPrototype {
        pictures: RotatedSprite;
        /**
         * The "radius" of this pole's supply area. Corresponds to *half* of the "supply area" in the item tooltip. If this is 3.5, the pole will have a 7x7 supply area.
         *
         * Max value is 64.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ElectricPolePrototype.html#ElectricPolePrototype.supply_area_distance Online documentation}
         */
        supply_area_distance: double;
        connection_points: readonly WireConnectionPoint[];
        radius_visualisation_picture?: Sprite;
        /**
         * Drawn above the `pictures` when the electric pole is connected to an electric network.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ElectricPolePrototype.html#ElectricPolePrototype.active_picture Online documentation}
         */
        active_picture?: Sprite;
        /**
         * The maximum distance between this pole and any other connected pole - if two poles are farther apart than this, they cannot be connected together directly. Corresponds to "wire reach" in the item tooltip.
         *
         * Max value is 64.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ElectricPolePrototype.html#ElectricPolePrototype.maximum_wire_distance Online documentation}
         */
        maximum_wire_distance?: double;
        draw_copper_wires?: bool;
        draw_circuit_wires?: bool;
        /**
         * Drawn when the electric pole is connected to an electric network.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ElectricPolePrototype.html#ElectricPolePrototype.light Online documentation}
         */
        light?: LightDefinition;
        track_coverage_during_build_by_moving?: bool;
    }
    /**
     * A turret that consumes electricity as ammo.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ElectricTurretPrototype.html Online documentation}
     */
    export interface ElectricTurretPrototype extends OmitType<TurretPrototype> {
        energy_source: ElectricEnergySource | VoidEnergySource;
    }
    /**
     * Can spawn entities. Used for biter/spitter nests.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EnemySpawnerPrototype.html Online documentation}
     */
    export interface EnemySpawnerPrototype extends EntityWithOwnerPrototype {
        animations: AnimationVariations;
        /**
         * Count of enemies this spawner can sustain.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EnemySpawnerPrototype.html#EnemySpawnerPrototype.max_count_of_owned_units Online documentation}
         */
        max_count_of_owned_units: uint32;
        /**
         * How many friendly units are required within the {@link EnemySpawnerPrototype#spawning_radius EnemySpawnerPrototype::spawning_radius} of this spawner for it to stop producing more units.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EnemySpawnerPrototype.html#EnemySpawnerPrototype.max_friends_around_to_spawn Online documentation}
         */
        max_friends_around_to_spawn: uint32;
        /**
         * Ticks for cooldown after unit is spawned
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EnemySpawnerPrototype.html#EnemySpawnerPrototype.spawning_cooldown Online documentation}
         */
        spawning_cooldown: readonly [
            double,
            double
        ];
        /**
         * How far from the spawner can the units be spawned.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EnemySpawnerPrototype.html#EnemySpawnerPrototype.spawning_radius Online documentation}
         */
        spawning_radius: double;
        /**
         * What spaces should be between the spawned units.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EnemySpawnerPrototype.html#EnemySpawnerPrototype.spawning_spacing Online documentation}
         */
        spawning_spacing: double;
        /**
         * Max richness to determine spawn shift. Spawn shift is linear interpolation between 0 and max_spawn_shift.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EnemySpawnerPrototype.html#EnemySpawnerPrototype.max_richness_for_spawn_shift Online documentation}
         */
        max_richness_for_spawn_shift: double;
        /**
         * Caps how much richness can be added on top of evolution when spawning units. {@linkplain https://www.reddit.com/r/factorio/comments/8pjscm/friday_facts_246_the_gui_update_part_3/e0bttnp/ See also}
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EnemySpawnerPrototype.html#EnemySpawnerPrototype.max_spawn_shift Online documentation}
         */
        max_spawn_shift: double;
        pollution_absorption_absolute: double;
        pollution_absorption_proportional: double;
        call_for_help_radius: double;
        /**
         * Array of the {@link EntityPrototype entities} that this spawner can spawn and their spawn probabilities. The sum of probabilities is expected to be 1.0. The array must not be empty.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EnemySpawnerPrototype.html#EnemySpawnerPrototype.result_units Online documentation}
         */
        result_units: readonly UnitSpawnDefinition[];
        dying_sound?: Sound;
        integration?: SpriteVariations;
        min_darkness_to_spawn?: float;
        max_darkness_to_spawn?: float;
        random_animation_offset?: bool;
        /**
         * Whether `spawn_decoration` should be spawned when enemies {@linkplain https://wiki.factorio.com/Enemies#Expansions expand}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EnemySpawnerPrototype.html#EnemySpawnerPrototype.spawn_decorations_on_expansion Online documentation}
         */
        spawn_decorations_on_expansion?: bool;
        /**
         * Decoratives to be created when the spawner is created by the {@linkplain https://wiki.factorio.com/Map_generator map generator}. Placed when enemies expand if `spawn_decorations_on_expansion` is set to true.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EnemySpawnerPrototype.html#EnemySpawnerPrototype.spawn_decoration Online documentation}
         */
        spawn_decoration?: CreateDecorativesTriggerEffectItem | readonly CreateDecorativesTriggerEffectItem[];
        /**
         * Whether this prototype should be a high priority target for enemy forces. See {@linkplain https://wiki.factorio.com/Military_units_and_structures Military units and structures}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EnemySpawnerPrototype.html#EnemySpawnerPrototype.is_military_target Online documentation}
         */
        is_military_target?: true;
        /**
         * If this is true, this entities `is_military_target property` can be changed runtime (on the entity, not on the prototype itself).
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EnemySpawnerPrototype.html#EnemySpawnerPrototype.allow_run_time_change_of_is_military_target Online documentation}
         */
        allow_run_time_change_of_is_military_target?: false;
    }
    /**
     * Used by {@linkplain https://wiki.factorio.com/Energy_shield energy shield}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EnergyShieldEquipmentPrototype.html Online documentation}
     */
    export interface EnergyShieldEquipmentPrototype extends EquipmentPrototype {
        max_shield_value: float;
        energy_per_shield: Energy;
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
        medium_build_sound?: Sound;
        large_build_sound?: Sound;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityGhostPrototype.html#EntityGhostPrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * Deprecated in 0.18. The type "particle" has been obsoleted and cannot be created. See {@link ParticlePrototype} for particles.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityParticlePrototype.html Online documentation}
     */
    export interface EntityParticlePrototype extends EntityPrototype {
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityParticlePrototype.html#EntityParticlePrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * Abstract base of all entities in the game. Entity is nearly everything that can be on the map(except tiles).
     *
     * For in game script access to entity, take a look at {@link import("factorio:runtime").LuaEntity LuaEntity}.
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
        /**
         * This will be used in the electric network statistics, editor building selection, and the bonus gui. Can't be an empty array.
         *
         * Either this or `icon` is mandatory for entities that have at least one of these flags active: `"placeable-neutral"`, `"placeable-player`", `"placeable-enemy"`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityPrototype.html#EntityPrototype.icons Online documentation}
         */
        icons?: readonly IconData[];
        /**
         * Path to the icon file.
         *
         * Either this or `icons` is mandatory for entities that have at least one of these flags active: `"placeable-neutral"`, `"placeable-player`", `"placeable-enemy"`.
         *
         * Only loaded if `icons` is not defined.
         * @example
         * icon = "__base__/graphics/icons/wooden-chest.png",
         * icon_size = 64,
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityPrototype.html#EntityPrototype.icon Online documentation}
         */
        icon?: FileName;
        /**
         * The size of the square icon, in pixels, e.g. `32` for a 32px by 32px icon.
         *
         * Only loaded if `icons` is not defined, or if `icon_size` is not specified for all instances of `icons`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityPrototype.html#EntityPrototype.icon_size Online documentation}
         */
        icon_size?: SpriteSizeType;
        /**
         * Icons of reduced size will be used at decreased scale.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityPrototype.html#EntityPrototype.icon_mipmaps Online documentation}
         */
        icon_mipmaps?: IconMipMapType;
        /**
         * Specification of the entity collision boundaries. Empty collision box means no collision and is used for smoke, projectiles, particles, explosions etc.
         *
         * The `{0,0}` coordinate in the collision box will match the entity position. It should be near the center of the collision box, to keep correct entity drawing order. The bounding box must include the `{0,0}` coordinate.
         *
         * Note, that for buildings, it is customary to leave 0.1 wide border between the edge of the tile and the edge of the building, this lets the player move between the building and electric poles/inserters etc.
         * @example
         * collision_box = {{-0.4, -0.4}, {0.4, 0.4}}
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityPrototype.html#EntityPrototype.collision_box Online documentation}
         */
        collision_box?: BoundingBox;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityPrototype.html#EntityPrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
        /**
         * Used instead of the collision box during map generation. Allows space entities differently during map generation, for example if the box is bigger, the entities will be placed farther apart.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityPrototype.html#EntityPrototype.map_generator_bounding_box Online documentation}
         */
        map_generator_bounding_box?: BoundingBox;
        /**
         * Specification of the entity selection area. When empty the entity will have no selection area (and thus is not selectable).
         *
         * The selection box is usually a little bit bigger than the collision box, for tileable entities (like buildings) it should match the tile size of the building.
         * @example
         * selection_box = {{-0.5, -0.5}, {0.5, 0.5}}
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityPrototype.html#EntityPrototype.selection_box Online documentation}
         */
        selection_box?: BoundingBox;
        /**
         * Specification of space needed to see the whole entity. This is used to calculate the correct zoom and positioning in the entity info gui.
         * @example
         * drawing_box = {{-0.5, -0.5}, {0.5, 0.5}}
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityPrototype.html#EntityPrototype.drawing_box Online documentation}
         */
        drawing_box?: BoundingBox;
        /**
         * Used to set the area of the entity that can have stickers on it, currently only used for units to specify the area where the green slow down stickers can appear.
         * @example
         * sticker_box = {{-0.5, -0.5}, {0.5, 0.5}}
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityPrototype.html#EntityPrototype.sticker_box Online documentation}
         */
        sticker_box?: BoundingBox;
        /**
         * Where beams should hit the entity. Useful if the bounding box only covers part of the entity (e.g. feet of the character) and beams only hitting there would look weird.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityPrototype.html#EntityPrototype.hit_visualization_box Online documentation}
         */
        hit_visualization_box?: BoundingBox;
        trigger_target_mask?: TriggerTargetMask;
        flags?: EntityPrototypeFlags;
        minable?: MinableProperties;
        /**
         * The name of the {@link ItemSubGroup subgroup} this entity should be sorted into in the map editor building selection.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityPrototype.html#EntityPrototype.subgroup Online documentation}
         */
        subgroup?: ItemSubGroupID;
        allow_copy_paste?: bool;
        selectable_in_game?: bool;
        /**
         * The entity with the higher number is selectable before the entity with the lower number. When two entities have the same selection priority, the one with the highest {@link CollisionMask collision mask} (as determined by the order on that page) is selected.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityPrototype.html#EntityPrototype.selection_priority Online documentation}
         */
        selection_priority?: uint8;
        /**
         * Supported values are 1 (for 1x1 grid) and 2 (for 2x2 grid, like rails).
         *
         * Internally forced to be `2` for {@link RailPrototype}, {@link RailRemnantsPrototype} and {@link TrainStopPrototype}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityPrototype.html#EntityPrototype.build_grid_size Online documentation}
         */
        build_grid_size?: uint8;
        /**
         * Whether this entity should remove decoratives that collide with it when this entity is built. When set to "automatic", if the entity type is considered {@link import("factorio:runtime").LuaEntityPrototype#is_building a building} (e.g. an assembling machine or a wall) it will remove decoratives.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityPrototype.html#EntityPrototype.remove_decoratives Online documentation}
         */
        remove_decoratives?: "automatic" | "true" | "false";
        /**
         * Amount of emissions created (positive number) or cleaned (negative number) every second by the entity. This is passive, and it is independent concept of the emissions of machines, these are created actively depending on the power consumption. Currently used just for trees.
         * @example
         * emissions_per_second = -0.001 -- cleaning effect of big tree
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityPrototype.html#EntityPrototype.emissions_per_second Online documentation}
         */
        emissions_per_second?: double;
        /**
         * The cursor size used when shooting at this entity.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityPrototype.html#EntityPrototype.shooting_cursor_size Online documentation}
         */
        shooting_cursor_size?: double;
        /**
         * The smoke that is shown when the entity is placed.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityPrototype.html#EntityPrototype.created_smoke Online documentation}
         */
        created_smoke?: CreateTrivialSmokeEffectItem;
        /**
         * Will also work on entities that don't actually do work.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityPrototype.html#EntityPrototype.working_sound Online documentation}
         */
        working_sound?: WorkingSound;
        /**
         * The effect/trigger that happens when the entity is placed.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityPrototype.html#EntityPrototype.created_effect Online documentation}
         */
        created_effect?: Trigger;
        build_sound?: Sound;
        mined_sound?: Sound;
        mining_sound?: Sound;
        rotated_sound?: Sound;
        /**
         * When playing this sound, the volume is scaled by the speed of the vehicle when colliding with this entity.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityPrototype.html#EntityPrototype.vehicle_impact_sound Online documentation}
         */
        vehicle_impact_sound?: Sound;
        open_sound?: Sound;
        close_sound?: Sound;
        radius_visualisation_specification?: RadiusVisualisationSpecification;
        build_base_evolution_requirement?: double;
        alert_icon_shift?: Vector;
        alert_icon_scale?: float;
        /**
         * This allows you to replace an entity that's already placed, with a different one in your inventory. For example, replacing a burner inserter with a fast inserter. The replacement entity can be a different rotation to the replaced entity and you can replace an entity with the same type.
         *
         * This is simply a string, so any string can be used here. The entity that should be replaced simply has to use the same string here.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityPrototype.html#EntityPrototype.fast_replaceable_group Online documentation}
         */
        fast_replaceable_group?: string;
        /**
         * Name of the entity that will be automatically selected as the upgrade of this entity when using the {@linkplain https://wiki.factorio.com/Upgrade_planner upgrade planner} without configuration.
         *
         * This entity may not have "not-upgradable" flag set and must be minable. This entity mining result must not contain item product with "hidden" flag set. Mining results with no item products are allowed. The entity may not be a {@link RollingStockPrototype}.
         *
         * The upgrade target entity needs to have the same bounding box, collision mask, and fast replaceable group as this entity. The upgrade target entity must have least 1 item that builds it that isn't hidden.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityPrototype.html#EntityPrototype.next_upgrade Online documentation}
         */
        next_upgrade?: EntityID;
        /**
         * When this is true, this entity prototype should be included during tile collision checks with tiles that have {@link TilePrototype#check_collision_with_entities TilePrototype::check_collision_with_entities} set to true.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityPrototype.html#EntityPrototype.protected_from_tile_building Online documentation}
         */
        protected_from_tile_building?: bool;
        /**
         * Item that when placed creates this entity. Determines which item is picked when "Q" (smart pipette) is used on the entity, determines which item is needed in a blueprint of this entity.
         *
         * The item count specified here can't be larger than the stack size of that item.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityPrototype.html#EntityPrototype.placeable_by Online documentation}
         */
        placeable_by?: ItemToPlace | readonly ItemToPlace[];
        /**
         * The entity that remains when this one is mined, deconstructed or fast-replaced. The entity wont actually be spawned if it would collide with the entity that is in the process of being mined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityPrototype.html#EntityPrototype.remains_when_mined Online documentation}
         */
        remains_when_mined?: EntityID | readonly EntityID[];
        /**
         * Names of the entity prototypes this entity prototype can be pasted on to in addition to the standard supported types.
         *
         * This is used to allow copying between types that aren't compatible on the C++ code side, by allowing mods to receive the {@link import("factorio:runtime").on_entity_settings_pasted on_entity_settings_pasted} event for the given entity and do the setting pasting via script.
         * @example
         * additional_pastable_entities = {"steel-chest", "iron-chest"}
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityPrototype.html#EntityPrototype.additional_pastable_entities Online documentation}
         */
        additional_pastable_entities?: readonly EntityID[];
        /**
         * Used to determine how the center of the entity should be positioned when building (unless the off-grid {@link EntityPrototypeFlags flag} is specified).
         *
         * When the tile width is odd, the center will be in the center of the tile, when it is even, the center is on the tile transition.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityPrototype.html#EntityPrototype.tile_width Online documentation}
         */
        tile_width?: uint32;
        tile_height?: uint32;
        /**
         * Used to specify the rules for placing this entity during map generation.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityPrototype.html#EntityPrototype.autoplace Online documentation}
         */
        autoplace?: AutoplaceSpecification;
        map_color?: Color;
        friendly_map_color?: Color;
        enemy_map_color?: Color;
        /**
         * May also be defined inside `graphics_set` instead of directly in the entity prototype. This is useful for entities that use the a `graphics_set` property to define their graphics, because then all graphics can be defined in one place.
         *
         * {@linkplain https://forums.factorio.com/100703 Currently only renders} for {@link EntityWithHealthPrototype}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityPrototype.html#EntityPrototype.water_reflection Online documentation}
         */
        water_reflection?: WaterReflectionDefinition;
        /**
         * Used to order prototypes in inventory, recipes and GUIs. May not exceed a length of 200 characters.
         *
         * The order string is taken from the items in `placeable_by` if they exist, or from an item that has its {@link ItemPrototype#place_result place_result} set to this entity.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityPrototype.html#EntityPrototype.order Online documentation}
         */
        order?: Order;
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
        /**
         * The unit health can never go over the maximum. Default health of units on creation is set to max. Must be greater than 0.
         * @example
         * max_health = 50
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityWithHealthPrototype.html#EntityWithHealthPrototype.max_health Online documentation}
         */
        max_health?: float;
        /**
         * The amount of health automatically regenerated per tick. The entity must be active for this to work.
         * @example
         * healing_per_tick = 0.01
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityWithHealthPrototype.html#EntityWithHealthPrototype.healing_per_tick Online documentation}
         */
        healing_per_tick?: float;
        repair_speed_modifier?: float;
        /**
         * The entities that are spawned in place of this one when it dies.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityWithHealthPrototype.html#EntityWithHealthPrototype.dying_explosion Online documentation}
         */
        dying_explosion?: ExplosionDefinition | readonly ExplosionDefinition[];
        dying_trigger_effect?: TriggerEffect;
        damaged_trigger_effect?: TriggerEffect;
        /**
         * The loot is dropped on the ground when the entity is killed.
         * @example
         * loot =
         * {
         *   {
         *     count_max = 10,
         *     count_min = 2,
         *     item = "stone",
         *     probability = 1
         *   }
         * }
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityWithHealthPrototype.html#EntityWithHealthPrototype.loot Online documentation}
         */
        loot?: readonly LootItem[];
        /**
         * See {@linkplain https://wiki.factorio.com/Damage damage}.
         * @example
         * resistances =
         * {
         *   {
         *     type = "fire",
         *       percent = 80
         *   },
         *   {
         *     type = "explosion",
         *     percent = 30
         *   }
         * }
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityWithHealthPrototype.html#EntityWithHealthPrototype.resistances Online documentation}
         */
        resistances?: Resistances;
        attack_reaction?: readonly AttackReactionItem[];
        repair_sound?: Sound;
        alert_when_damaged?: bool;
        /**
         * Whether the resistances of this entity should be hidden in the entity tooltip.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityWithHealthPrototype.html#EntityWithHealthPrototype.hide_resistances Online documentation}
         */
        hide_resistances?: bool;
        create_ghost_on_death?: bool;
        random_corpse_variation?: bool;
        integration_patch_render_layer?: RenderLayer;
        /**
         * Specifies the names of the {@link CorpsePrototype} to be used when this entity dies.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityWithHealthPrototype.html#EntityWithHealthPrototype.corpse Online documentation}
         */
        corpse?: EntityID | readonly EntityID[];
        /**
         * Sprite drawn on ground under the entity to make it feel more integrated into the ground.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityWithHealthPrototype.html#EntityWithHealthPrototype.integration_patch Online documentation}
         */
        integration_patch?: Sprite4Way;
    }
    /**
     * Abstract base of all entities with a force in the game. These entities have a {@link import("factorio:runtime").LuaEntity#unit_number LuaEntity::unit_number} during runtime. Can be high priority {@linkplain https://wiki.factorio.com/Military_units_and_structures military targets}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityWithOwnerPrototype.html Online documentation}
     */
    export interface EntityWithOwnerPrototype extends EntityWithHealthPrototype {
        /**
         * Whether this prototype should be a high priority target for enemy forces. See {@linkplain https://wiki.factorio.com/Military_units_and_structures Military units and structures}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityWithOwnerPrototype.html#EntityWithOwnerPrototype.is_military_target Online documentation}
         */
        is_military_target?: bool;
        /**
         * If this is true, this entities `is_military_target property` can be changed runtime (on the entity, not on the prototype itself).
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EntityWithOwnerPrototype.html#EntityWithOwnerPrototype.allow_run_time_change_of_is_military_target Online documentation}
         */
        allow_run_time_change_of_is_military_target?: bool;
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
        /**
         * Only {@link EquipmentPrototype equipment} with at least one of these {@link EquipmentCategory categories} can be inserted into the grid.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EquipmentGridPrototype.html#EquipmentGridPrototype.equipment_categories Online documentation}
         */
        equipment_categories: readonly EquipmentCategoryID[];
        width: uint32;
        height: uint32;
        /**
         * Whether this locked from user interaction which means that the user cannot put equipment into or take equipment from this equipment grid.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EquipmentGridPrototype.html#EquipmentGridPrototype.locked Online documentation}
         */
        locked?: bool;
    }
    /**
     * Abstract base of all equipment modules. Equipment modules can be inserted into {@link EquipmentGridPrototype equipment grids}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EquipmentPrototype.html Online documentation}
     */
    export interface EquipmentPrototype extends PrototypeBase {
        /**
         * The graphics to use when this equipment is shown inside an equipment grid.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EquipmentPrototype.html#EquipmentPrototype.sprite Online documentation}
         */
        sprite: Sprite;
        /**
         * How big this equipment should be in the grid and whether it should be one solid rectangle or of a custom shape.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EquipmentPrototype.html#EquipmentPrototype.shape Online documentation}
         */
        shape: EquipmentShape;
        /**
         * Sets the categories of the equipment. It can only be inserted into {@link EquipmentGridPrototype#equipment_categories grids} with at least one matching category.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EquipmentPrototype.html#EquipmentPrototype.categories Online documentation}
         */
        categories: readonly EquipmentCategoryID[];
        energy_source: ElectricEnergySource;
        /**
         * Name of the item prototype that should be returned to the player when they remove this equipment from an equipment grid.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EquipmentPrototype.html#EquipmentPrototype.take_result Online documentation}
         */
        take_result?: ItemID;
        /**
         * The color that the background of this equipment should have when shown inside an equipment grid.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EquipmentPrototype.html#EquipmentPrototype.background_color Online documentation}
         */
        background_color?: Color;
        /**
         * The color that the border of the background of this equipment should have when shown inside an equipment grid.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EquipmentPrototype.html#EquipmentPrototype.background_border_color Online documentation}
         */
        background_border_color?: Color;
        /**
         * The color that the background of this equipment should have when held in the players hand and hovering over an equipment grid.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/EquipmentPrototype.html#EquipmentPrototype.grabbed_background_color Online documentation}
         */
        grabbed_background_color?: Color;
    }
    /**
     * Used to play an animation and a sound.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ExplosionPrototype.html Online documentation}
     */
    export interface ExplosionPrototype extends EntityPrototype {
        animations: AnimationVariations;
        sound?: Sound;
        /**
         * Mandatory if `smoke_count` > 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ExplosionPrototype.html#ExplosionPrototype.smoke Online documentation}
         */
        smoke?: TrivialSmokeID;
        height?: float;
        smoke_slow_down_factor?: float;
        smoke_count?: uint16;
        rotate?: bool;
        beam?: bool;
        correct_rotation?: bool;
        scale_animation_speed?: bool;
        fade_in_duration?: uint8;
        fade_out_duration?: uint8;
        render_layer?: RenderLayer;
        scale_in_duration?: uint8;
        scale_out_duration?: uint8;
        scale_end?: float;
        scale_increment_per_tick?: float;
        /**
         * Silently clamped to be between 0 and 1.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ExplosionPrototype.html#ExplosionPrototype.light_intensity_factor_initial Online documentation}
         */
        light_intensity_factor_initial?: float;
        /**
         * Silently clamped to be between 0 and 1.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ExplosionPrototype.html#ExplosionPrototype.light_intensity_factor_final Online documentation}
         */
        light_intensity_factor_final?: float;
        /**
         * Silently clamped to be between 0 and 1.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ExplosionPrototype.html#ExplosionPrototype.light_size_factor_initial Online documentation}
         */
        light_size_factor_initial?: float;
        /**
         * Silently clamped to be between 0 and 1.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ExplosionPrototype.html#ExplosionPrototype.light_size_factor_final Online documentation}
         */
        light_size_factor_final?: float;
        light?: LightDefinition;
        light_intensity_peak_start_progress?: float;
        light_intensity_peak_end_progress?: float;
        light_size_peak_start_progress?: float;
        light_size_peak_end_progress?: float;
        scale_initial?: float;
        scale_initial_deviation?: float;
        scale?: float;
        scale_deviation?: float;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ExplosionPrototype.html#ExplosionPrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * This prototype is used for receiving an achievement when the player finishes the game.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FinishTheGameAchievementPrototype.html Online documentation}
     */
    export interface FinishTheGameAchievementPrototype extends OmitType<AchievementPrototype> {
        /**
         * This lets the game know how long into a game, before you can no longer complete the achievement. 0 means infinite time.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FinishTheGameAchievementPrototype.html#FinishTheGameAchievementPrototype.until_second Online documentation}
         */
        until_second?: uint32;
    }
    /**
     * A fire.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FireFlamePrototype.html Online documentation}
     */
    export interface FireFlamePrototype extends EntityPrototype {
        damage_per_tick: DamagePrototype;
        spread_delay: uint32;
        spread_delay_deviation: uint32;
        render_layer?: RenderLayer;
        initial_render_layer?: RenderLayer;
        secondary_render_layer?: RenderLayer;
        small_tree_fire_pictures?: AnimationVariations;
        pictures?: AnimationVariations;
        smoke_source_pictures?: AnimationVariations;
        secondary_pictures?: AnimationVariations;
        burnt_patch_pictures?: SpriteVariations;
        secondary_picture_fade_out_start?: uint32;
        secondary_picture_fade_out_duration?: uint32;
        spawn_entity?: EntityID;
        smoke?: readonly SmokeSource[];
        maximum_spread_count?: uint16;
        /**
         * Spawns this many `secondary_pictures` around the entity when it first spawns. It waits `delay_between_initial_flames` between each spawned `secondary_pictures`. This can be used to make fires look less repetitive.
         *
         * For example, spitters use this to make several smaller splashes around the main one.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FireFlamePrototype.html#FireFlamePrototype.initial_flame_count Online documentation}
         */
        initial_flame_count?: uint8;
        /**
         * If `false`, then all animations loop. If `true`, they run once and stay on the final frame. Also changes the behavior of several other fire properties as mentioned in their descriptions.
         *
         * For example, spitters use alternate behavior, flamethrower flames don't.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FireFlamePrototype.html#FireFlamePrototype.uses_alternative_behavior Online documentation}
         */
        uses_alternative_behavior?: bool;
        limit_overlapping_particles?: bool;
        tree_dying_factor?: float;
        fade_in_duration?: uint32;
        fade_out_duration?: uint32;
        initial_lifetime?: uint32;
        damage_multiplier_decrease_per_tick?: float;
        damage_multiplier_increase_per_added_fuel?: float;
        maximum_damage_multiplier?: float;
        lifetime_increase_by?: uint32;
        lifetime_increase_cooldown?: uint32;
        maximum_lifetime?: uint32;
        add_fuel_cooldown?: uint32;
        delay_between_initial_flames?: uint32;
        smoke_fade_in_duration?: uint32;
        smoke_fade_out_duration?: uint32;
        on_fuel_added_action?: Trigger;
        on_damage_tick_effect?: Trigger;
        light?: LightDefinition;
        particle_alpha_blend_duration?: uint16;
        burnt_patch_lifetime?: uint32;
        burnt_patch_alpha_default?: float;
        /**
         * Only loaded if `uses_alternative_behavior` is true.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FireFlamePrototype.html#FireFlamePrototype.particle_alpha Online documentation}
         */
        particle_alpha?: float;
        /**
         * Only loaded if `uses_alternative_behavior` is true.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FireFlamePrototype.html#FireFlamePrototype.particle_alpha_deviation Online documentation}
         */
        particle_alpha_deviation?: float;
        /**
         * Only loaded if `uses_alternative_behavior` is false.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FireFlamePrototype.html#FireFlamePrototype.flame_alpha Online documentation}
         */
        flame_alpha?: float;
        /**
         * Only loaded if `uses_alternative_behavior` is false.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FireFlamePrototype.html#FireFlamePrototype.flame_alpha_deviation Online documentation}
         */
        flame_alpha_deviation?: float;
        burnt_patch_alpha_variations?: readonly TileAndAlpha[];
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FireFlamePrototype.html#FireFlamePrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * Entity that spawns in water tiles, which can be mined. Moves around unless deactivated with {@link import("factorio:runtime").LuaEntity#active LuaEntity::active} = false.
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
        pictures: SpriteVariations;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FishPrototype.html#FishPrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * Explosion that can deal damage.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FlameThrowerExplosionPrototype.html Online documentation}
     */
    export interface FlameThrowerExplosionPrototype extends OmitType<ExplosionPrototype> {
        damage: DamagePrototype;
        slow_down_factor: double;
        height?: float;
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
        /**
         * Can't be an empty array.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidPrototype.html#FluidPrototype.icons Online documentation}
         */
        icons?: readonly IconData[];
        /**
         * Path to the icon file.
         *
         * Mandatory if `icons` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidPrototype.html#FluidPrototype.icon Online documentation}
         */
        icon?: FileName;
        /**
         * The size of the square icon, in pixels, e.g. `32` for a 32px by 32px icon.
         *
         * Mandatory if `icons` is not defined, or if `icon_size` is not specified for all instances of `icons`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidPrototype.html#FluidPrototype.icon_size Online documentation}
         */
        icon_size?: SpriteSizeType;
        /**
         * Icons of reduced size will be used at decreased scale.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidPrototype.html#FluidPrototype.icon_mipmaps Online documentation}
         */
        icon_mipmaps?: IconMipMapType;
        /**
         * Also the minimum temperature of the fluid. Has to be lower than `max_temperature`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidPrototype.html#FluidPrototype.default_temperature Online documentation}
         */
        default_temperature: double;
        /**
         * Used by bars that show the fluid color, like the flamethrower turret fill bar in the tooltip, or the fill bar for the fluid wagon tooltip; and for the pipe windows and storage tank fill gauges.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidPrototype.html#FluidPrototype.base_color Online documentation}
         */
        base_color: Color;
        /**
         * Used only for pipe windows or storage tank fill gauges.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidPrototype.html#FluidPrototype.flow_color Online documentation}
         */
        flow_color: Color;
        max_temperature?: double;
        /**
         * Joule needed to heat 1 Unit by 1 °C.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidPrototype.html#FluidPrototype.heat_capacity Online documentation}
         */
        heat_capacity?: Energy;
        fuel_value?: Energy;
        /**
         * Scales pollution generated when the fluid is consumed.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidPrototype.html#FluidPrototype.emissions_multiplier Online documentation}
         */
        emissions_multiplier?: double;
        /**
         * The value of this property may not be an empty string. It either has to be nil, or a non-empty string.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidPrototype.html#FluidPrototype.subgroup Online documentation}
         */
        subgroup?: ItemSubGroupID;
        /**
         * Above this temperature the `gas_flow` animation is used to display the fluid inside storage tanks and pipes.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidPrototype.html#FluidPrototype.gas_temperature Online documentation}
         */
        gas_temperature?: double;
        /**
         * Hides the fluid from the signal selection screen.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidPrototype.html#FluidPrototype.hidden Online documentation}
         */
        hidden?: bool;
        /**
         * Whether the fluid should be included in the barrel recipes automatically generated by the base mod.
         *
         * This property is not read by the game engine itself, but the base mod's data-updates.lua script. This means it is not available to read at runtime.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidPrototype.html#FluidPrototype.auto_barrel Online documentation}
         */
        auto_barrel?: bool;
    }
    /**
     * Used for example for the handheld flamethrower.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidStreamPrototype.html Online documentation}
     */
    export interface FluidStreamPrototype extends EntityPrototype {
        /**
         * The stream will spawn one particle every `particle_spawn_interval` ticks until the `particle_spawn_timeout` is reached. The first particle will trigger an `initial_action` upon landing. Each particle triggers an `action` upon landing. Particles spawned within a single `particle_spawn_timeout` interval will be connected by a stretched `spine_animation`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidStreamPrototype.html#FluidStreamPrototype.particle_spawn_interval Online documentation}
         */
        particle_spawn_interval: uint16;
        /**
         * Must be larger than 0. `particle_horizontal_speed` has to be greater than `particle_horizontal_speed_deviation`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidStreamPrototype.html#FluidStreamPrototype.particle_horizontal_speed Online documentation}
         */
        particle_horizontal_speed: double;
        particle_horizontal_speed_deviation: double;
        particle_vertical_acceleration: double;
        /**
         * Action that is triggered when the first particle lands.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidStreamPrototype.html#FluidStreamPrototype.initial_action Online documentation}
         */
        initial_action?: Trigger;
        /**
         * Action that is triggered every time a particle lands. Not triggered for the first particle if `initial_action` is non-empty.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidStreamPrototype.html#FluidStreamPrototype.action Online documentation}
         */
        action?: Trigger;
        special_neutral_target_damage?: DamagePrototype;
        width?: float;
        /**
         * Number of spawned child particles of the stream. Must be greater than 0 and less than 256.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidStreamPrototype.html#FluidStreamPrototype.particle_buffer_size Online documentation}
         */
        particle_buffer_size?: uint32;
        particle_spawn_timeout?: uint16;
        particle_start_alpha?: float;
        particle_end_alpha?: float;
        particle_start_scale?: float;
        particle_alpha_per_part?: float;
        particle_scale_per_part?: float;
        /**
         * Value between 0 and 1.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidStreamPrototype.html#FluidStreamPrototype.particle_fade_out_threshold Online documentation}
         */
        particle_fade_out_threshold?: float;
        /**
         * Value between 0 and 1.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidStreamPrototype.html#FluidStreamPrototype.particle_loop_exit_threshold Online documentation}
         */
        particle_loop_exit_threshold?: float;
        /**
         * Will be set to 1 by the game if less than 1.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidStreamPrototype.html#FluidStreamPrototype.particle_loop_frame_count Online documentation}
         */
        particle_loop_frame_count?: uint16;
        /**
         * Will be set to 1 by the game if less than 1.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidStreamPrototype.html#FluidStreamPrototype.particle_fade_out_duration Online documentation}
         */
        particle_fade_out_duration?: uint16;
        spine_animation?: Animation;
        particle?: Animation;
        shadow?: Animation;
        /**
         * Smoke spawning is controlled by `progress_to_create_smoke`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidStreamPrototype.html#FluidStreamPrototype.smoke_sources Online documentation}
         */
        smoke_sources?: readonly SmokeSource[];
        /**
         * The point in the particles projectile arc to start spawning smoke. 0.5 (the default) starts spawning smoke at the halfway point between the source and target.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidStreamPrototype.html#FluidStreamPrototype.progress_to_create_smoke Online documentation}
         */
        progress_to_create_smoke?: float;
        stream_light?: LightDefinition;
        ground_light?: LightDefinition;
        target_position_deviation?: double;
        oriented_particle?: bool;
        shadow_scale_enabled?: bool;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidStreamPrototype.html#FluidStreamPrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * A turret that consumes fluid as ammo.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidTurretPrototype.html Online documentation}
     */
    export interface FluidTurretPrototype extends OmitType<TurretPrototype> {
        fluid_buffer_size: float;
        fluid_buffer_input_flow: float;
        /**
         * Before an turret that was out of ammo is able to fire again, the `fluid_buffer_size` must fill to this proportion.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidTurretPrototype.html#FluidTurretPrototype.activation_buffer_ratio Online documentation}
         */
        activation_buffer_ratio: float;
        fluid_box: FluidBox;
        muzzle_light?: LightDefinition;
        enough_fuel_indicator_light?: LightDefinition;
        not_enough_fuel_indicator_light?: LightDefinition;
        muzzle_animation?: Animation;
        folded_muzzle_animation_shift?: AnimatedVector;
        preparing_muzzle_animation_shift?: AnimatedVector;
        prepared_muzzle_animation_shift?: AnimatedVector;
        starting_attack_muzzle_animation_shift?: AnimatedVector;
        attacking_muzzle_animation_shift?: AnimatedVector;
        ending_attack_muzzle_animation_shift?: AnimatedVector;
        folding_muzzle_animation_shift?: AnimatedVector;
        enough_fuel_indicator_picture?: Sprite4Way;
        not_enough_fuel_indicator_picture?: Sprite4Way;
        out_of_ammo_alert_icon?: Sprite;
        turret_base_has_direction: true;
        /**
         * Requires ammo_type in attack_parameters.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidTurretPrototype.html#FluidTurretPrototype.attack_parameters Online documentation}
         */
        attack_parameters: StreamAttackParameters;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Fluid_wagon fluid wagon}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidWagonPrototype.html Online documentation}
     */
    export interface FluidWagonPrototype extends RollingStockPrototype {
        capacity: double;
        /**
         * Must be 1, 2 or 3.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FluidWagonPrototype.html#FluidWagonPrototype.tank_count Online documentation}
         */
        tank_count?: uint8;
    }
    /**
     * Abstract base for construction/logistics and combat robots.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FlyingRobotPrototype.html Online documentation}
     */
    export interface FlyingRobotPrototype extends EntityWithOwnerPrototype {
        speed: double;
        /**
         * The maximum speed of the robot. Useful to limit the impact of {@linkplain https://wiki.factorio.com/Worker_robot_speed_(research worker robot speed (research)}).
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FlyingRobotPrototype.html#FlyingRobotPrototype.max_speed Online documentation}
         */
        max_speed?: double;
        /**
         * How much energy can be stored in the batteries.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FlyingRobotPrototype.html#FlyingRobotPrototype.max_energy Online documentation}
         */
        max_energy?: Energy;
        /**
         * How much does it cost to move 1 tile.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FlyingRobotPrototype.html#FlyingRobotPrototype.energy_per_move Online documentation}
         */
        energy_per_move?: Energy;
        energy_per_tick?: Energy;
        /**
         * The robot will go to charge when it has less energy than this.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FlyingRobotPrototype.html#FlyingRobotPrototype.min_to_charge Online documentation}
         */
        min_to_charge?: float;
        /**
         * If the robot has more energy than this, it does not need to charge before stationing.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FlyingRobotPrototype.html#FlyingRobotPrototype.max_to_charge Online documentation}
         */
        max_to_charge?: float;
        /**
         * Some robots simply crash, some slowdown but keep going. 0 means crash.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FlyingRobotPrototype.html#FlyingRobotPrototype.speed_multiplier_when_out_of_energy Online documentation}
         */
        speed_multiplier_when_out_of_energy?: float;
        /**
         * Whether this prototype should be a high priority target for enemy forces. See {@linkplain https://wiki.factorio.com/Military_units_and_structures Military units and structures}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FlyingRobotPrototype.html#FlyingRobotPrototype.is_military_target Online documentation}
         */
        is_military_target?: bool;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FlyingRobotPrototype.html#FlyingRobotPrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * An upwards flying text that disappears after a certain time (setting {@link import("factorio:runtime").LuaEntity#active LuaEntity::active} = false stops the flying and the disappearing.)
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FlyingTextPrototype.html Online documentation}
     */
    export interface FlyingTextPrototype extends EntityPrototype {
        /**
         * How fast the text flies up. Seems to be tiles/tick.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FlyingTextPrototype.html#FlyingTextPrototype.speed Online documentation}
         */
        speed: float;
        /**
         * Time in ticks this flying-text lasts.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FlyingTextPrototype.html#FlyingTextPrototype.time_to_live Online documentation}
         */
        time_to_live: uint32;
        text_alignment?: "left" | "center" | "right";
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FlyingTextPrototype.html#FlyingTextPrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
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
        type: "font";
        /**
         * Name of the font.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FontPrototype.html#FontPrototype.name Online documentation}
         */
        name: string;
        /**
         * Size of the font.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FontPrototype.html#FontPrototype.size Online documentation}
         */
        size: int32;
        /**
         * The name of the fonts .ttf descriptor. This descriptor must be defined in the locale info.json. Refer to `data/core/locale/_language_/info.json` for examples.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FontPrototype.html#FontPrototype.from Online documentation}
         */
        from: string;
        spacing?: float;
        /**
         * Whether the font has a border.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FontPrototype.html#FontPrototype.border Online documentation}
         */
        border?: bool;
        filtered?: bool;
        /**
         * The color of the border, if enabled.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FontPrototype.html#FontPrototype.border_color Online documentation}
         */
        border_color?: Color;
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
        /**
         * The number of output slots.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FurnacePrototype.html#FurnacePrototype.result_inventory_size Online documentation}
         */
        result_inventory_size: ItemStackIndex;
        /**
         * The number of input slots, but not more than 1.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FurnacePrototype.html#FurnacePrototype.source_inventory_size Online documentation}
         */
        source_inventory_size: ItemStackIndex;
        /**
         * Shift of the "alt-mode icon" relative to the machine's center.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FurnacePrototype.html#FurnacePrototype.entity_info_icon_shift Online documentation}
         */
        entity_info_icon_shift?: Vector;
        /**
         * The locale key of the message shown when the player attempts to insert an item into the furnace that cannot be processed by that furnace. In-game, the locale is provided the `__1__` parameter, which is the localised name of the item.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/FurnacePrototype.html#FurnacePrototype.cant_insert_at_source_message_key Online documentation}
         */
        cant_insert_at_source_message_key?: string;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Gate gate}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GatePrototype.html Online documentation}
     */
    export interface GatePrototype extends EntityWithOwnerPrototype {
        vertical_animation: Animation;
        horizontal_animation: Animation;
        vertical_rail_animation_left: Animation;
        vertical_rail_animation_right: Animation;
        horizontal_rail_animation_left: Animation;
        horizontal_rail_animation_right: Animation;
        vertical_rail_base: Animation;
        horizontal_rail_base: Animation;
        wall_patch: Animation;
        opening_speed: float;
        activation_distance: double;
        timeout_to_close: uint32;
        fadeout_interval?: uint32;
        /**
         * This collision mask is used when the gate is open.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GatePrototype.html#GatePrototype.opened_collision_mask Online documentation}
         */
        opened_collision_mask?: CollisionMask;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GatePrototype.html#GatePrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * Used by {@linkplain https://wiki.factorio.com/Portable_fusion_reactor portable fusion reactor}. Provides power in equipment grids. Can produce power for free or use a burner energy source.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GeneratorEquipmentPrototype.html Online documentation}
     */
    export interface GeneratorEquipmentPrototype extends EquipmentPrototype {
        /**
         * The power output of this equipment.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GeneratorEquipmentPrototype.html#GeneratorEquipmentPrototype.power Online documentation}
         */
        power: Energy;
        /**
         * If not defined, this equipment produces power for free.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GeneratorEquipmentPrototype.html#GeneratorEquipmentPrototype.burner Online documentation}
         */
        burner?: BurnerEnergySource;
    }
    /**
     * An entity that produces power from fluids, for example a {@linkplain https://wiki.factorio.com/Steam_engine steam engine}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GeneratorPrototype.html Online documentation}
     */
    export interface GeneratorPrototype extends EntityWithOwnerPrototype {
        energy_source: ElectricEnergySource;
        /**
         * This must have a filter if `max_power_output` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GeneratorPrototype.html#GeneratorPrototype.fluid_box Online documentation}
         */
        fluid_box: FluidBox;
        horizontal_animation: Animation;
        vertical_animation: Animation;
        /**
         * How much energy the generator produces compared to how much energy it consumes. For example, an effectivity of 0.5 means that half of the consumed energy is output as power.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GeneratorPrototype.html#GeneratorPrototype.effectivity Online documentation}
         */
        effectivity: double;
        /**
         * The number of fluid units the generator uses per tick.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GeneratorPrototype.html#GeneratorPrototype.fluid_usage_per_tick Online documentation}
         */
        fluid_usage_per_tick: double;
        /**
         * The maximum temperature to which the efficiency can increase. At this temperature the generator will run at 100% efficiency. Note: Higher temperature fluid can still be consumed.
         *
         * Used to calculate the `max_power_output` if it is not defined and `burns_fluid` is false. Then, the max power output is `(min(fluid_max_temp, maximum_temperature) - fluid_default_temp) × fluid_usage_per_tick × fluid_heat_capacity × effectivity`, the fluid is the filter specified on the `fluid_box`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GeneratorPrototype.html#GeneratorPrototype.maximum_temperature Online documentation}
         */
        maximum_temperature: double;
        smoke?: readonly SmokeSource[];
        /**
         * If set to true, the available power output is based on the {@link FluidPrototype#fuel_value FluidPrototype::fuel_value}. Otherwise, the available power output will be based on the fluid temperature.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GeneratorPrototype.html#GeneratorPrototype.burns_fluid Online documentation}
         */
        burns_fluid?: bool;
        /**
         * Scales the generator's fluid usage to its maximum power output.
         *
         * Setting this to true prevents the generator from overconsuming fluid, for example when higher than`maximum_temperature` fluid is fed to the generator.
         *
         * If scale_fluid_usage is false, the generator consumes the full `fluid_usage_per_tick` and any of the extra energy in the fluid (in the form of higher temperature) is wasted. The {@linkplain https://wiki.factorio.com/Steam_engine steam engine} exhibits this behavior when fed steam from {@linkplain https://wiki.factorio.com/Heat_exchanger heat exchangers}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GeneratorPrototype.html#GeneratorPrototype.scale_fluid_usage Online documentation}
         */
        scale_fluid_usage?: bool;
        /**
         * This property is used when `burns_fluid` is true and the fluid has a {@link FluidPrototype#fuel_value fuel_value} of 0.
         *
         * This property is also used when `burns_fluid` is false and the fluid is at default temperature.
         *
         * In these cases, this property determines whether the fluid should be destroyed, meaning that the fluid is consumed at the rate of `fluid_usage_per_tick`, without producing any power.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GeneratorPrototype.html#GeneratorPrototype.destroy_non_fuel_fluid Online documentation}
         */
        destroy_non_fuel_fluid?: bool;
        /**
         * Animation runs at least this fast. This corresponds to the sound.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GeneratorPrototype.html#GeneratorPrototype.min_perceived_performance Online documentation}
         */
        min_perceived_performance?: double;
        performance_to_sound_speedup?: double;
        /**
         * The power production of the generator is capped to this value. This is also the value that is shown as the maximum power output in the tooltip of the generator.
         *
         * `fluid_box` must have a filter if this is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GeneratorPrototype.html#GeneratorPrototype.max_power_output Online documentation}
         */
        max_power_output?: Energy;
    }
    /**
     * Properties of the god controller.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GodControllerPrototype.html Online documentation}
     */
    export interface GodControllerPrototype {
        type: "god-controller";
        /**
         * Name of the god-controller. Base game uses "default".
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GodControllerPrototype.html#GodControllerPrototype.name Online documentation}
         */
        name: string;
        inventory_size: ItemStackIndex;
        /**
         * Must be >= 0.34375.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GodControllerPrototype.html#GodControllerPrototype.movement_speed Online documentation}
         */
        movement_speed: double;
        item_pickup_distance: double;
        loot_pickup_distance: double;
        mining_speed: double;
        /**
         * Names of the crafting categories the player can craft recipes from.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GodControllerPrototype.html#GodControllerPrototype.crafting_categories Online documentation}
         */
        crafting_categories?: readonly RecipeCategoryID[];
        /**
         * Names of the resource categories the player can mine resources from.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GodControllerPrototype.html#GodControllerPrototype.mining_categories Online documentation}
         */
        mining_categories?: readonly ResourceCategoryID[];
    }
    /**
     * This prototype is used for receiving an achievement when the player gets attacked due to pollution.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GroupAttackAchievementPrototype.html Online documentation}
     */
    export interface GroupAttackAchievementPrototype extends OmitType<AchievementPrototype> {
        /**
         * This will trigger the achievement, if the player receives this amount of attacks. **Note**: The default achievement "it stinks and they don't like it" uses the amount of 1. (As in getting attacked once.)
         * @example
         * amount = 10
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GroupAttackAchievementPrototype.html#GroupAttackAchievementPrototype.amount Online documentation}
         */
        amount?: uint32;
    }
    /**
     * The available GUI styles.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GuiStyle.html Online documentation}
     */
    export interface GuiStyle extends PrototypeBase {
        default_tileset?: FileName;
        default_sprite_scale?: double;
        default_sprite_priority?: SpritePriority;
    }
    /**
     * A gun. A weapon to deal damage to entities.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GunPrototype.html Online documentation}
     */
    export interface GunPrototype extends OmitType<ItemPrototype> {
        /**
         * The information the item needs to know in order to know what ammo it requires, the sounds, and range.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/GunPrototype.html#GunPrototype.attack_parameters Online documentation}
         */
        attack_parameters: AttackParameters;
    }
    /**
     * This entity produces or consumes heat. Its heat settings can be changed runtime.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/HeatInterfacePrototype.html Online documentation}
     */
    export interface HeatInterfacePrototype extends EntityWithOwnerPrototype {
        heat_buffer: HeatBuffer;
        picture?: Sprite;
        gui_mode?: "all" | "none" | "admins";
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Heat_pipe heat pipe}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/HeatPipePrototype.html Online documentation}
     */
    export interface HeatPipePrototype extends EntityWithOwnerPrototype {
        connection_sprites: ConnectableEntityGraphics;
        heat_glow_sprites: ConnectableEntityGraphics;
        heat_buffer: HeatBuffer;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/HeatPipePrototype.html#HeatPipePrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * Used to attach graphics for {@link CursorBoxType cursor boxes} to entities during runtime. HighlightBoxEntity can also be independent from entities so it is simply drawn somewhere in the world. See {@link import("factorio:runtime").LuaSurface#create_entity LuaSurface::create_entity} for the available options for type "highlight-box".
     *
     * The {@link EntityPrototype#collision_box collision_box} of the highlight box prototype is ignored during runtime, instead the "bounding_box" given in create_entity() or the selection box of the target entity is used.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/HighlightBoxEntityPrototype.html Online documentation}
     */
    export interface HighlightBoxEntityPrototype extends EntityPrototype {
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/HighlightBoxEntityPrototype.html#HighlightBoxEntityPrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * A generic container, such as a chest, that can spawn or void items and interact with the logistics network.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/InfinityContainerPrototype.html Online documentation}
     */
    export interface InfinityContainerPrototype extends OmitType<LogisticContainerPrototype> {
        erase_contents_when_mined: bool;
        /**
         * Controls which players can control what the chest spawns.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/InfinityContainerPrototype.html#InfinityContainerPrototype.gui_mode Online documentation}
         */
        gui_mode?: "all" | "none" | "admins";
        /**
         * The way this chest interacts with the logistic network.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/InfinityContainerPrototype.html#InfinityContainerPrototype.logistic_mode Online documentation}
         */
        logistic_mode?: "active-provider" | "passive-provider" | "requester" | "storage" | "buffer";
        /**
         * Whether the "no network" icon should be rendered on this entity if the entity is not within a logistics network.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/InfinityContainerPrototype.html#InfinityContainerPrototype.render_not_in_network_icon Online documentation}
         */
        render_not_in_network_icon?: bool;
        /**
         * The number of slots in this container. May not be zero.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/InfinityContainerPrototype.html#InfinityContainerPrototype.inventory_size Online documentation}
         */
        inventory_size: ItemStackIndex;
    }
    /**
     * This entity produces or consumes fluids. Its fluid settings can be changed runtime.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/InfinityPipePrototype.html Online documentation}
     */
    export interface InfinityPipePrototype extends OmitType<PipePrototype> {
        gui_mode?: "all" | "none" | "admins";
    }
    /**
     * An {@linkplain https://wiki.factorio.com/Inserter inserter}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/InserterPrototype.html Online documentation}
     */
    export interface InserterPrototype extends EntityWithOwnerPrototype {
        extension_speed: double;
        rotation_speed: double;
        insert_position: Vector;
        pickup_position: Vector;
        platform_picture: Sprite4Way;
        hand_base_picture: Sprite;
        hand_open_picture: Sprite;
        hand_closed_picture: Sprite;
        /**
         * Defines how this inserter gets energy. The emissions set on the energy source are ignored so inserters cannot produce pollution.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/InserterPrototype.html#InserterPrototype.energy_source Online documentation}
         */
        energy_source: EnergySource;
        energy_per_movement?: Energy;
        energy_per_rotation?: Energy;
        /**
         * Whether this inserter is considered a stack inserter. Relevant for determining how {@linkplain https://wiki.factorio.com/Inserter_capacity_bonus_(research inserter capacity bonus (research)}) applies to the inserter.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/InserterPrototype.html#InserterPrototype.stack Online documentation}
         */
        stack?: bool;
        /**
         * Whether pickup and insert position can be set run-time.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/InserterPrototype.html#InserterPrototype.allow_custom_vectors Online documentation}
         */
        allow_custom_vectors?: bool;
        /**
         * Whether this burner inserter can fuel itself from the fuel inventory of the entity it is picking up items from.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/InserterPrototype.html#InserterPrototype.allow_burner_leech Online documentation}
         */
        allow_burner_leech?: bool;
        /**
         * Whether the item that the inserter is holding should be drawn.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/InserterPrototype.html#InserterPrototype.draw_held_item Online documentation}
         */
        draw_held_item?: bool;
        /**
         * Whether the inserter should be able to fish {@linkplain https://wiki.factorio.com/Raw_fish fish}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/InserterPrototype.html#InserterPrototype.use_easter_egg Online documentation}
         */
        use_easter_egg?: bool;
        /**
         * How many filters this inserter has. Maximum count of filtered items in inserter is 5.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/InserterPrototype.html#InserterPrototype.filter_count Online documentation}
         */
        filter_count?: uint8;
        hand_base_shadow: Sprite;
        hand_open_shadow: Sprite;
        hand_closed_shadow: Sprite;
        /**
         * Used to determine how long the arm of the inserter is when drawing it. Does not affect gameplay. The lower the value, the straighter the arm. Increasing the value will give the inserter a bigger bend due to its longer parts.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/InserterPrototype.html#InserterPrototype.hand_size Online documentation}
         */
        hand_size?: double;
        /**
         * The maximum circuit wire distance for this entity.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/InserterPrototype.html#InserterPrototype.circuit_wire_max_distance Online documentation}
         */
        circuit_wire_max_distance?: double;
        draw_copper_wires?: bool;
        draw_circuit_wires?: bool;
        default_stack_control_input_signal?: SignalIDConnector;
        /**
         * Whether the yellow arrow that indicates the drop point of the inserter and the line that indicates the pickup position should be drawn.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/InserterPrototype.html#InserterPrototype.draw_inserter_arrow Online documentation}
         */
        draw_inserter_arrow?: bool;
        /**
         * Whether the inserter hand should move to the items it picks up from belts, leading to item chasing behaviour. If this is off, the inserter hand will stay in the center of the belt and any items picked up from the edges of the belt "teleport" to the inserter hand.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/InserterPrototype.html#InserterPrototype.chases_belt_items Online documentation}
         */
        chases_belt_items?: bool;
        /**
         * Stack size bonus that is inherent to the prototype without having to be researched.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/InserterPrototype.html#InserterPrototype.stack_size_bonus Online documentation}
         */
        stack_size_bonus?: uint8;
        circuit_wire_connection_points?: readonly [
            WireConnectionPoint,
            WireConnectionPoint,
            WireConnectionPoint,
            WireConnectionPoint
        ];
        circuit_connector_sprites?: readonly [
            CircuitConnectorSprites,
            CircuitConnectorSprites,
            CircuitConnectorSprites,
            CircuitConnectorSprites
        ];
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
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemEntityPrototype.html#ItemEntityPrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
        /**
         * Item entity collision box has to have same width as height.
         *
         * Specification of the entity collision boundaries. Empty collision box means no collision and is used for smoke, projectiles, particles, explosions etc.
         *
         * The `{0,0}` coordinate in the collision box will match the entity position. It should be near the center of the collision box, to keep correct entity drawing order. The bounding box must include the `{0,0}` coordinate.
         *
         * Note, that for buildings, it is customary to leave 0.1 wide border between the edge of the tile and the edge of the building, this lets the player move between the building and electric poles/inserters etc.
         * @example
         * collision_box = {{-0.4, -0.4}, {0.4, 0.4}}
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemEntityPrototype.html#ItemEntityPrototype.collision_box Online documentation}
         */
        collision_box?: BoundingBox;
    }
    /**
     * An item group. Item groups are shown above the list of craftable items in the player's inventory. The built-in groups are "logistics", "production", "intermediate-products" and "combat" but mods can define their own.
     *
     * Items are sorted into item groups by sorting them into a {@link ItemPrototype#subgroup subgroup} which then belongs to a {@link ItemSubGroup#group item group}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemGroup.html Online documentation}
     */
    export interface ItemGroup extends PrototypeBase {
        /**
         * The icon that is shown to represent this item group. Can't be an empty array.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemGroup.html#ItemGroup.icons Online documentation}
         */
        icons?: readonly IconData[];
        /**
         * Path to the icon that is shown to represent this item group.
         *
         * Mandatory if `icons` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemGroup.html#ItemGroup.icon Online documentation}
         */
        icon?: FileName;
        /**
         * The size of the square icon, in pixels, e.g. `32` for a 32px by 32px icon.
         *
         * Mandatory if `icons` is not defined, or if `icon_size` is not specified for all instances of `icons`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemGroup.html#ItemGroup.icon_size Online documentation}
         */
        icon_size?: SpriteSizeType;
        /**
         * Icons of reduced size will be used at decreased scale.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemGroup.html#ItemGroup.icon_mipmaps Online documentation}
         */
        icon_mipmaps?: IconMipMapType;
        /**
         * Item ingredients in recipes are ordered by item group. The `order_in_recipe` property can be used to specify the ordering in recipes without affecting the inventory order.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemGroup.html#ItemGroup.order_in_recipe Online documentation}
         */
        order_in_recipe?: Order;
    }
    /**
     * Possible configuration for all items.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemPrototype.html Online documentation}
     */
    export interface ItemPrototype extends PrototypeBase {
        /**
         * Count of items of the same name that can be stored in one inventory slot. Must be 1 when the `"not-stackable"` flag is set.
         * @example
         * stack_size = 64
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemPrototype.html#ItemPrototype.stack_size Online documentation}
         */
        stack_size: ItemCountType;
        /**
         * Can't be an empty array.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemPrototype.html#ItemPrototype.icons Online documentation}
         */
        icons?: readonly IconData[];
        /**
         * Path to the icon file.
         *
         * Mandatory if `icons` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemPrototype.html#ItemPrototype.icon Online documentation}
         */
        icon?: FileName;
        /**
         * The size of the square icon, in pixels, e.g. `32` for a 32px by 32px icon.
         *
         * This definition applies to all icon-type properties, both on here and on any children.
         *
         * Mandatory if `icons` is not defined, or if `icon_size` is not specified for all instances of `icons`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemPrototype.html#ItemPrototype.icon_size Online documentation}
         */
        icon_size?: SpriteSizeType;
        /**
         * Icons of reduced size will be used at decreased scale.
         *
         * This definition applies to all icon-type properties, both on here and on any children.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemPrototype.html#ItemPrototype.icon_mipmaps Online documentation}
         */
        icon_mipmaps?: IconMipMapType;
        /**
         * Inside IconData, the property for the file path is `dark_background_icon` instead of `icon`. Can't be an empty array.
         *
         * Uses the basic `icon_size` and `icon_mipmaps` properties.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemPrototype.html#ItemPrototype.dark_background_icons Online documentation}
         */
        dark_background_icons?: readonly IconData[];
        /**
         * Path to the icon file.
         *
         * Only loaded if `dark_background_icons` is not defined.
         *
         * Uses the basic `icon_size` and `icon_mipmaps` properties.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemPrototype.html#ItemPrototype.dark_background_icon Online documentation}
         */
        dark_background_icon?: FileName;
        /**
         * Name of the {@link EntityPrototype} that can be built using this item. If this item should be the one that construction bots use to build the specified `place_result`, set the `"primary-place-result"` {@link ItemPrototypeFlags item flag}.
         *
         * The localised name of the entity will be used as the in-game item name. This behavior can be overwritten by specifying `localised_name` on this item, it will be used instead.
         * @example
         * place_result = "wooden-chest"
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemPrototype.html#ItemPrototype.place_result Online documentation}
         */
        place_result?: EntityID;
        placed_as_equipment_result?: EquipmentID;
        /**
         * Empty text of subgroup is not allowed. (You can omit the definition to get the default "other").
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemPrototype.html#ItemPrototype.subgroup Online documentation}
         */
        subgroup?: ItemSubGroupID;
        /**
         * Must exist when a nonzero fuel_value is defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemPrototype.html#ItemPrototype.fuel_category Online documentation}
         */
        fuel_category?: FuelCategoryID;
        /**
         * The item that is the result when this item gets burned as fuel.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemPrototype.html#ItemPrototype.burnt_result Online documentation}
         */
        burnt_result?: ItemID;
        place_as_tile?: PlaceAsTile;
        /**
         * Used to give the item multiple different icons so that they look less uniform on belts etc. For inventory icons and similar, `icon/icons` will be used. Maximum number of variations is 16.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemPrototype.html#ItemPrototype.pictures Online documentation}
         */
        pictures?: SpriteVariations;
        /**
         * Specifies some properties of the item.
         * @example
         * flags = { "hidden" }
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemPrototype.html#ItemPrototype.flags Online documentation}
         */
        flags?: ItemPrototypeFlags;
        default_request_amount?: ItemCountType;
        /**
         * The number of items needed to connect 2 entities with this as wire. In the base game, {@linkplain https://wiki.factorio.com/Green_wire green wire}, {@linkplain https://wiki.factorio.com/Red_wire red wire} and {@linkplain https://wiki.factorio.com/Copper_cable copper cable} have this set to 1.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemPrototype.html#ItemPrototype.wire_count Online documentation}
         */
        wire_count?: ItemCountType;
        /**
         * Mandatory when `fuel_acceleration_multiplier`, `fuel_top_speed_multiplier` or `fuel_emissions_multiplier` or `fuel_glow_color` are used. Amount of energy it gives when used as fuel.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemPrototype.html#ItemPrototype.fuel_value Online documentation}
         */
        fuel_value?: Energy;
        fuel_acceleration_multiplier?: double;
        fuel_top_speed_multiplier?: double;
        fuel_emissions_multiplier?: double;
        /**
         * Colors the glow of the burner energy source when this fuel is burned. Can also be used to color the glow of reactors burning the fuel, see {@link ReactorPrototype#use_fuel_glow_color ReactorPrototype::use_fuel_glow_color}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemPrototype.html#ItemPrototype.fuel_glow_color Online documentation}
         */
        fuel_glow_color?: Color;
        open_sound?: Sound;
        close_sound?: Sound;
        rocket_launch_products?: readonly ItemProductPrototype[];
        /**
         * Only loaded if `rocket_launch_products` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemPrototype.html#ItemPrototype.rocket_launch_product Online documentation}
         */
        rocket_launch_product?: ItemProductPrototype;
    }
    /**
     * Entity used to signify that an entity is requesting items, for example modules for an assembling machine after it was blueprinted with modules inside.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemRequestProxyPrototype.html Online documentation}
     */
    export interface ItemRequestProxyPrototype extends EntityPrototype {
        picture: Sprite;
        use_target_entity_alert_icon_shift?: bool;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemRequestProxyPrototype.html#ItemRequestProxyPrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * An item subgroup. The built-in subgroups can be found {@linkplain https://wiki.factorio.com/Data.raw#item-subgroup here}. See {@link ItemPrototype#subgroup ItemPrototype::subgroup}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemSubGroup.html Online documentation}
     */
    export interface ItemSubGroup extends PrototypeBase {
        /**
         * The item group this subgroup is located in.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemSubGroup.html#ItemSubGroup.group Online documentation}
         */
        group: ItemGroupID;
    }
    /**
     * ItemWithEntityData saves data associated with the entity that it represents, for example the content of the equipment grid of a car.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemWithEntityDataPrototype.html Online documentation}
     */
    export interface ItemWithEntityDataPrototype extends OmitType<ItemPrototype> {
        /**
         * Inside IconData, the property for the file path is `icon_tintable_mask` instead of `icon`. Can't be an empty array.
         *
         * Only loaded if `icon_tintable` is defined.
         *
         * Uses `icon_size` and `icon_mipmaps` from its {@link ItemPrototype} parent.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemWithEntityDataPrototype.html#ItemWithEntityDataPrototype.icon_tintable_masks Online documentation}
         */
        icon_tintable_masks?: readonly IconData[];
        /**
         * Path to the icon file.
         *
         * Only loaded if `icon_tintable_masks` is not defined and `icon_tintable` is defined.
         *
         * Uses `icon_size` and `icon_mipmaps` from its {@link ItemPrototype} parent.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemWithEntityDataPrototype.html#ItemWithEntityDataPrototype.icon_tintable_mask Online documentation}
         */
        icon_tintable_mask?: FileName;
        /**
         * Inside IconData, the property for the file path is `icon_tintable` instead of `icon`. Can't be an empty array.
         *
         * Only loaded if `icon_tintable` is defined (`icon_tintables` takes precedence over `icon_tintable`).
         *
         * Uses `icon_size` and `icon_mipmaps` from its {@link ItemPrototype} parent.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemWithEntityDataPrototype.html#ItemWithEntityDataPrototype.icon_tintables Online documentation}
         */
        icon_tintables?: readonly IconData[];
        /**
         * Path to the icon file.
         *
         * Only loaded if `icon_tintables` is not defined.
         *
         * Uses `icon_size` and `icon_mipmaps` from its {@link ItemPrototype} parent.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemWithEntityDataPrototype.html#ItemWithEntityDataPrototype.icon_tintable Online documentation}
         */
        icon_tintable?: FileName;
    }
    /**
     * The inventory allows setting player defined filters similar to cargo wagon inventories.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemWithInventoryPrototype.html Online documentation}
     */
    export interface ItemWithInventoryPrototype extends OmitType<ItemWithLabelPrototype> {
        /**
         * The inventory size of the item.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemWithInventoryPrototype.html#ItemWithInventoryPrototype.inventory_size Online documentation}
         */
        inventory_size: ItemStackIndex;
        /**
         * A list of explicit item names to be used as filters.
         * @example
         * item_filters = {"iron-ore", "copper-ore", "coal", "stone"}
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemWithInventoryPrototype.html#ItemWithInventoryPrototype.item_filters Online documentation}
         */
        item_filters?: readonly ItemID[];
        /**
         * A list of explicit item group names to be used as filters.
         * @example
         * item_group_filters = {"logistics", "fluids"}
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemWithInventoryPrototype.html#ItemWithInventoryPrototype.item_group_filters Online documentation}
         */
        item_group_filters?: readonly ItemGroupID[];
        /**
         * A list of explicit item subgroup names to be used as filters.
         * @example
         * item_subgroup_filters = {"military-equipment", "tool"}
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemWithInventoryPrototype.html#ItemWithInventoryPrototype.item_subgroup_filters Online documentation}
         */
        item_subgroup_filters?: readonly ItemSubGroupID[];
        /**
         * This determines how filters are applied. If no filters are defined this is automatically set to "none".
         * @example
         * filter_mode = "blacklist"
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemWithInventoryPrototype.html#ItemWithInventoryPrototype.filter_mode Online documentation}
         */
        filter_mode?: "blacklist" | "whitelist";
        /**
         * The locale key used when the player attempts to put an item that doesn't match the filter rules into the item-with-inventory.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemWithInventoryPrototype.html#ItemWithInventoryPrototype.filter_message_key Online documentation}
         */
        filter_message_key?: string;
        /**
         * When true, this item-with-inventory will extend the inventory it sits in by default. This is a runtime property on the result item that can be changed through the Lua interface and only determines the initial value.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemWithInventoryPrototype.html#ItemWithInventoryPrototype.extends_inventory_by_default Online documentation}
         */
        extends_inventory_by_default?: bool;
        /**
         * The insertion priority mode for this item. This determines if items are first attempted to be put into this items inventory if the item extends the inventory it sits in when items are put into the parent inventory.
         *
         * **Options:**
         * - `"default"`: Items are inserted into this item-with-inventory only if they match the whitelist defined in the prototype for the item and whitelist is used.
         * - `"never"`: Items are never inserted into this item-with-inventory except explicitly by the player or script.
         * - `"always"`: All items first try to be inserted into this item-with-inventory.
         * - `"when-manually-filtered"`: When the inventory contains filters that match the item-to-be-inserted then try to put it into this item before the inventory this item resides in.
         * @example
         * insertion_priority_mode = "never"
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemWithInventoryPrototype.html#ItemWithInventoryPrototype.insertion_priority_mode Online documentation}
         */
        insertion_priority_mode?: "default" | "never" | "always" | "when-manually-filtered";
        /**
         * Count of items of the same name that can be stored in one inventory slot. Must be 1 when the `"not-stackable"` flag is set.
         * @example
         * stack_size = 1
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemWithInventoryPrototype.html#ItemWithInventoryPrototype.stack_size Online documentation}
         */
        stack_size: 1;
    }
    /**
     * Like a normal item but with the ability to have a colored label.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemWithLabelPrototype.html Online documentation}
     */
    export interface ItemWithLabelPrototype extends OmitType<ItemPrototype> {
        /**
         * The default label color the item will use.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemWithLabelPrototype.html#ItemWithLabelPrototype.default_label_color Online documentation}
         */
        default_label_color?: Color;
        /**
         * If the item will draw its label when held in the cursor in place of the item count.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemWithLabelPrototype.html#ItemWithLabelPrototype.draw_label_for_cursor_render Online documentation}
         */
        draw_label_for_cursor_render?: bool;
    }
    /**
     * Item type that can store any basic arbitrary Lua data, see {@link import("factorio:runtime").LuaItemStack#tags LuaItemStack::tags}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ItemWithTagsPrototype.html Online documentation}
     */
    export interface ItemWithTagsPrototype extends OmitType<ItemWithLabelPrototype> {
    }
    /**
     * This prototype is used for receiving an achievement when the player destroys a certain amount of an entity, with a specific damage type.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/KillAchievementPrototype.html Online documentation}
     */
    export interface KillAchievementPrototype extends OmitType<AchievementPrototype> {
        /**
         * This defines which entity needs to be destroyed in order to receive the achievement.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/KillAchievementPrototype.html#KillAchievementPrototype.to_kill Online documentation}
         */
        to_kill?: EntityID;
        /**
         * This defines what entity type needs to be destroyed in order to receive the achievement.
         * @example
         * type_to_kill = "inserter"
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/KillAchievementPrototype.html#KillAchievementPrototype.type_to_kill Online documentation}
         */
        type_to_kill?: string;
        /**
         * This defines how the player needs to destroy the specific entity.
         * @example
         * damage_type = "impact"
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/KillAchievementPrototype.html#KillAchievementPrototype.damage_type Online documentation}
         */
        damage_type?: DamageTypeID;
        /**
         * This is the amount of entity of the specified type the player needs to destroy to receive the achievement.
         * @example
         * amount = 100
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/KillAchievementPrototype.html#KillAchievementPrototype.amount Online documentation}
         */
        amount?: uint32;
        /**
         * This defines if the player needs to be in a vehicle.
         * @example
         * in_vehicle = true
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/KillAchievementPrototype.html#KillAchievementPrototype.in_vehicle Online documentation}
         */
        in_vehicle?: bool;
        /**
         * This defines to make sure you are the one driving, for instance, in a tank rather than an automated train.
         * @example
         * personally = true
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/KillAchievementPrototype.html#KillAchievementPrototype.personally Online documentation}
         */
        personally?: bool;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Lab lab}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LabPrototype.html Online documentation}
     */
    export interface LabPrototype extends EntityWithOwnerPrototype {
        /**
         * The amount of energy this lab uses.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LabPrototype.html#LabPrototype.energy_usage Online documentation}
         */
        energy_usage: Energy;
        /**
         * Defines how this lab gets energy.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LabPrototype.html#LabPrototype.energy_source Online documentation}
         */
        energy_source: EnergySource;
        /**
         * The animation that plays when the lab is active.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LabPrototype.html#LabPrototype.on_animation Online documentation}
         */
        on_animation: Animation;
        /**
         * The animation that plays when the lab is idle.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LabPrototype.html#LabPrototype.off_animation Online documentation}
         */
        off_animation: Animation;
        /**
         * A list of the names of science packs that can be used in this lab.
         *
         * If a technology requires other types of science packs, it cannot be researched in this lab.
         * @example
         * inputs = {"automation-science-pack", "logistic-science-pack", "chemical-science-pack", "military-science-pack", "production-science-pack", "utility-science-pack", "space-science-pack"}
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LabPrototype.html#LabPrototype.inputs Online documentation}
         */
        inputs: readonly ItemID[];
        researching_speed?: double;
        /**
         * Sets the module effects that are allowed to be used on this lab.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LabPrototype.html#LabPrototype.allowed_effects Online documentation}
         */
        allowed_effects?: EffectTypeLimitation;
        light?: LightDefinition;
        /**
         * Productivity bonus that this machine always has.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LabPrototype.html#LabPrototype.base_productivity Online documentation}
         */
        base_productivity?: float;
        /**
         * Shift of the "alt-mode icon" relative to the lab's center.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LabPrototype.html#LabPrototype.entity_info_icon_shift Online documentation}
         */
        entity_info_icon_shift?: Vector;
        /**
         * The number of module slots.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LabPrototype.html#LabPrototype.module_specification Online documentation}
         */
        module_specification?: ModuleSpecification;
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
        /**
         * The lamps graphics when it's on.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LampPrototype.html#LampPrototype.picture_on Online documentation}
         */
        picture_on: Sprite;
        /**
         * The lamps graphics when it's off.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LampPrototype.html#LampPrototype.picture_off Online documentation}
         */
        picture_off: Sprite;
        /**
         * The amount of energy the lamp uses. Must be greater than > 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LampPrototype.html#LampPrototype.energy_usage_per_tick Online documentation}
         */
        energy_usage_per_tick: Energy;
        /**
         * The emissions set on the energy source are ignored so lamps cannot produce pollution.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LampPrototype.html#LampPrototype.energy_source Online documentation}
         */
        energy_source: ElectricEnergySource | VoidEnergySource;
        /**
         * What color the lamp will be when it is on, and receiving power.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LampPrototype.html#LampPrototype.light Online documentation}
         */
        light?: LightDefinition;
        /**
         * This refers to when the light is in a circuit network, and is lit a certain color based on a signal value.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LampPrototype.html#LampPrototype.light_when_colored Online documentation}
         */
        light_when_colored?: LightDefinition;
        /**
         * Defines how wires visually connect to this lamp.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LampPrototype.html#LampPrototype.circuit_wire_connection_point Online documentation}
         */
        circuit_wire_connection_point?: WireConnectionPoint;
        /**
         * The maximum circuit wire distance for this entity.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LampPrototype.html#LampPrototype.circuit_wire_max_distance Online documentation}
         */
        circuit_wire_max_distance?: double;
        draw_copper_wires?: bool;
        draw_circuit_wires?: bool;
        /**
         * The pictures displayed for circuit connections to this lamp.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LampPrototype.html#LampPrototype.circuit_connector_sprites Online documentation}
         */
        circuit_connector_sprites?: CircuitConnectorSprites;
        glow_size?: float;
        glow_color_intensity?: float;
        /**
         * darkness_for_all_lamps_on must be > darkness_for_all_lamps_off. Values must be between 0 and 1.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LampPrototype.html#LampPrototype.darkness_for_all_lamps_on Online documentation}
         */
        darkness_for_all_lamps_on?: float;
        /**
         * darkness_for_all_lamps_on must be > darkness_for_all_lamps_off. Values must be between 0 and 1.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LampPrototype.html#LampPrototype.darkness_for_all_lamps_off Online documentation}
         */
        darkness_for_all_lamps_off?: float;
        /**
         * Whether the lamp should always be on.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LampPrototype.html#LampPrototype.always_on Online documentation}
         */
        always_on?: bool;
        signal_to_color_mapping?: readonly SignalColorMapping[];
        glow_render_mode?: "additive" | "multiplicative";
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Land_mine land mine}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LandMinePrototype.html Online documentation}
     */
    export interface LandMinePrototype extends EntityWithOwnerPrototype {
        /**
         * The sprite of the landmine before it is armed (just after placing).
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LandMinePrototype.html#LandMinePrototype.picture_safe Online documentation}
         */
        picture_safe: Sprite;
        /**
         * The sprite of the landmine of a friendly force when it is armed.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LandMinePrototype.html#LandMinePrototype.picture_set Online documentation}
         */
        picture_set: Sprite;
        trigger_radius: double;
        /**
         * The sprite of the landmine of an enemy force when it is armed.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LandMinePrototype.html#LandMinePrototype.picture_set_enemy Online documentation}
         */
        picture_set_enemy?: Sprite;
        /**
         * Time between placing and the landmine being armed, in ticks.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LandMinePrototype.html#LandMinePrototype.timeout Online documentation}
         */
        timeout?: uint32;
        action?: Trigger;
        ammo_category?: AmmoCategoryID;
        /**
         * Force the landmine to kill itself when exploding.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LandMinePrototype.html#LandMinePrototype.force_die_on_attack Online documentation}
         */
        force_die_on_attack?: bool;
        trigger_force?: ForceCondition;
        /**
         * Collision mask that another entity must collide with to make this landmine blow up.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LandMinePrototype.html#LandMinePrototype.trigger_collision_mask Online documentation}
         */
        trigger_collision_mask?: CollisionMask;
        /**
         * Whether this prototype should be a high priority target for enemy forces. See {@linkplain https://wiki.factorio.com/Military_units_and_structures Military units and structures}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LandMinePrototype.html#LandMinePrototype.is_military_target Online documentation}
         */
        is_military_target?: bool;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LandMinePrototype.html#LandMinePrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * Deprecated in 0.18. Particles that are exclusively meant for leaves of trees. The type "leaf-particle" has been obsoleted and cannot be created. See {@link ParticlePrototype} for particles.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LeafParticlePrototype.html Online documentation}
     */
    export interface LeafParticlePrototype extends OmitType<EntityParticlePrototype> {
    }
    /**
     * A belt that can be connected to a belt anywhere else, including on a different surface. The linked belts have to be {@linkplain https://wiki.factorio.com/Console#Connect_linked_belts connected with console commands} or runtime scripting in mods or scenarios. {@link import("factorio:runtime").LuaEntity#connect_linked_belts LuaEntity::connect_linked_belts} and other runtime functions.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LinkedBeltPrototype.html Online documentation}
     */
    export interface LinkedBeltPrototype extends TransportBeltConnectablePrototype {
        structure: LinkedBeltStructure;
        structure_render_layer?: RenderLayer;
        allow_clone_connection?: bool;
        allow_blueprint_connection?: bool;
        allow_side_loading?: bool;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LinkedBeltPrototype.html#LinkedBeltPrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * A container that shares its inventory with containers with the same {@link import("factorio:runtime").LuaEntity#link_id link_id}, which can be set via the GUI. The link IDs are per prototype and force, so only containers with the **same ID**, **same prototype name** and **same force** will share inventories.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LinkedContainerPrototype.html Online documentation}
     */
    export interface LinkedContainerPrototype extends EntityWithOwnerPrototype {
        /**
         * Must be > 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LinkedContainerPrototype.html#LinkedContainerPrototype.inventory_size Online documentation}
         */
        inventory_size: ItemStackIndex;
        picture?: Sprite;
        /**
         * Whether the inventory of this container can be filtered (like cargo wagons) or not.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LinkedContainerPrototype.html#LinkedContainerPrototype.inventory_type Online documentation}
         */
        inventory_type?: "with_bar" | "with_filters_and_bar";
        /**
         * Players that can access the GUI to change the link ID.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LinkedContainerPrototype.html#LinkedContainerPrototype.gui_mode Online documentation}
         */
        gui_mode?: "all" | "none" | "admins";
        scale_info_icons?: bool;
        /**
         * Defines how wires visually connect to this linked container.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LinkedContainerPrototype.html#LinkedContainerPrototype.circuit_wire_connection_point Online documentation}
         */
        circuit_wire_connection_point?: WireConnectionPoint;
        /**
         * The maximum circuit wire distance for this linked container.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LinkedContainerPrototype.html#LinkedContainerPrototype.circuit_wire_max_distance Online documentation}
         */
        circuit_wire_max_distance?: double;
        draw_copper_wires?: bool;
        draw_circuit_wires?: bool;
        /**
         * The pictures displayed for circuit connections to this linked container.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LinkedContainerPrototype.html#LinkedContainerPrototype.circuit_connector_sprites Online documentation}
         */
        circuit_connector_sprites?: CircuitConnectorSprites;
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
        structure: LoaderStructure;
        /**
         * How many item filters this loader has. Maximum count of filtered items in loader is 5.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LoaderPrototype.html#LoaderPrototype.filter_count Online documentation}
         */
        filter_count: uint8;
        structure_render_layer?: RenderLayer;
        /**
         * The distance between the position of this loader and the tile of the loader's container target.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LoaderPrototype.html#LoaderPrototype.container_distance Online documentation}
         */
        container_distance?: double;
        /**
         * Whether this loader can load and unload {@link RollingStockPrototype}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LoaderPrototype.html#LoaderPrototype.allow_rail_interaction Online documentation}
         */
        allow_rail_interaction?: bool;
        /**
         * Whether this loader can load and unload stationary inventories such as containers and crafting machines.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LoaderPrototype.html#LoaderPrototype.allow_container_interaction Online documentation}
         */
        allow_container_interaction?: bool;
        /**
         * How long this loader's belt is. Should be the same as belt_distance, which is hardcoded to `0.5` for {@link Loader1x2Prototype} and to 0 for {@link Loader1x1Prototype}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LoaderPrototype.html#LoaderPrototype.belt_length Online documentation}
         */
        belt_length?: double;
        energy_source?: ElectricEnergySource | HeatEnergySource | FluidEnergySource | VoidEnergySource;
        /**
         * Energy in Joules. Can't be negative.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LoaderPrototype.html#LoaderPrototype.energy_per_item Online documentation}
         */
        energy_per_item?: Energy;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LoaderPrototype.html#LoaderPrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Locomotive locomotive}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LocomotivePrototype.html Online documentation}
     */
    export interface LocomotivePrototype extends RollingStockPrototype {
        max_power: Energy;
        reversing_power_modifier: double;
        /**
         * Must be a burner energy source when using "burner", otherwise it can also be a void energy source.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LocomotivePrototype.html#LocomotivePrototype.energy_source Online documentation}
         */
        energy_source: BurnerEnergySource | VoidEnergySource;
        burner: BurnerEnergySource | VoidEnergySource;
        front_light?: LightDefinition;
        front_light_pictures?: RotatedSprite;
        darkness_to_render_light_animation?: float;
        /**
         * In tiles. A locomotive will snap to a nearby train stop when the player places it within this distance to the stop.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LocomotivePrototype.html#LocomotivePrototype.max_snap_to_train_stop_distance Online documentation}
         */
        max_snap_to_train_stop_distance?: float;
    }
    /**
     * A generic container, such as a chest, that interacts with the logistics network.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LogisticContainerPrototype.html Online documentation}
     */
    export interface LogisticContainerPrototype extends OmitType<ContainerPrototype> {
        /**
         * The way this chest interacts with the logistic network.
         *
         * **Options:**
         * - `"active-provider"`
         * - `"passive-provider"`
         * - `"requester"`
         * - `"storage"`
         * - `"buffer"`
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LogisticContainerPrototype.html#LogisticContainerPrototype.logistic_mode Online documentation}
         */
        logistic_mode: "active-provider" | "passive-provider" | "requester" | "storage" | "buffer";
        /**
         * The number of request slots this logistics container has. Requester-type containers must have > 0 slots and can have a maximum of 1000 slots. Storage-type containers must have <= 1 slot.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LogisticContainerPrototype.html#LogisticContainerPrototype.max_logistic_slots Online documentation}
         */
        max_logistic_slots?: uint16;
        /**
         * Whether the "no network" icon should be rendered on this entity if the entity is not within a logistics network.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LogisticContainerPrototype.html#LogisticContainerPrototype.render_not_in_network_icon Online documentation}
         */
        render_not_in_network_icon?: bool;
        opened_duration?: uint8;
        /**
         * Drawn when a robot brings/takes items from this container.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LogisticContainerPrototype.html#LogisticContainerPrototype.animation Online documentation}
         */
        animation?: Animation;
        /**
         * The offset from the center of this container where a robot visually brings/takes items.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LogisticContainerPrototype.html#LogisticContainerPrototype.landing_location_offset Online documentation}
         */
        landing_location_offset?: Vector;
        /**
         * Whether logistic robots have to deliver the exact amount of items requested to this logistic container instead of over-delivering (within their cargo size).
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LogisticContainerPrototype.html#LogisticContainerPrototype.use_exact_mode Online documentation}
         */
        use_exact_mode?: bool;
        /**
         * Played when a robot brings/takes items from this container. Ignored if `animation` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LogisticContainerPrototype.html#LogisticContainerPrototype.animation_sound Online documentation}
         */
        animation_sound?: Sound;
        /**
         * The picture displayed for this entity.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LogisticContainerPrototype.html#LogisticContainerPrototype.picture Online documentation}
         */
        picture?: Sprite;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Logistic_robot logistic robot}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LogisticRobotPrototype.html Online documentation}
     */
    export interface LogisticRobotPrototype extends RobotWithLogisticInterfacePrototype {
        /**
         * Only the first frame of the animation is drawn. This means that the graphics for the idle state cannot be animated.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LogisticRobotPrototype.html#LogisticRobotPrototype.idle_with_cargo Online documentation}
         */
        idle_with_cargo?: RotatedAnimation;
        /**
         * Only the first frame of the animation is drawn. This means that the graphics for the in_motion state cannot be animated.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LogisticRobotPrototype.html#LogisticRobotPrototype.in_motion_with_cargo Online documentation}
         */
        in_motion_with_cargo?: RotatedAnimation;
        /**
         * Only the first frame of the animation is drawn. This means that the graphics for the idle state cannot be animated.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LogisticRobotPrototype.html#LogisticRobotPrototype.shadow_idle_with_cargo Online documentation}
         */
        shadow_idle_with_cargo?: RotatedAnimation;
        /**
         * Only the first frame of the animation is drawn. This means that the graphics for the in_motion state cannot be animated.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LogisticRobotPrototype.html#LogisticRobotPrototype.shadow_in_motion_with_cargo Online documentation}
         */
        shadow_in_motion_with_cargo?: RotatedAnimation;
        /**
         * Must have a collision box size of zero.
         * @example
         * collision_box = {{0, 0}, {0, 0}}
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/LogisticRobotPrototype.html#LogisticRobotPrototype.collision_box Online documentation}
         */
        collision_box?: BoundingBox;
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
        type: "map-gen-presets";
        /**
         * Name of the map gen presets. Base game uses "default".
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MapGenPresets.html#MapGenPresets.name Online documentation}
         */
        name: string;
    }
    /**
     * The default map settings.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MapSettings.html Online documentation}
     */
    export interface MapSettings {
        type: "map-settings";
        /**
         * Name of the map-settings. Base game uses "map-settings".
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MapSettings.html#MapSettings.name Online documentation}
         */
        name: string;
        pollution: PollutionSettings;
        steering: SteeringSettings;
        enemy_evolution: EnemyEvolutionSettings;
        enemy_expansion: EnemyExpansionSettings;
        unit_group: UnitGroupSettings;
        path_finder: PathFinderSettings;
        /**
         * If a behavior fails this many times, the enemy (or enemy group) is destroyed. This solves biters stuck within their own base.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MapSettings.html#MapSettings.max_failed_behavior_count Online documentation}
         */
        max_failed_behavior_count: uint32;
        difficulty_settings: DifficultySettings;
    }
    /**
     * Offers can be added to a market and they are shown when opening the entity. Offers allow to spend items to get research bonuses or items.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MarketPrototype.html Online documentation}
     */
    export interface MarketPrototype {
        picture: Sprite;
        /**
         * Whether all forces are allowed to open this market.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MarketPrototype.html#MarketPrototype.allow_access_to_all_forces Online documentation}
         */
        allow_access_to_all_forces?: bool;
    }
    /**
     * A mining drill for automatically extracting resources from {@link ResourceEntityPrototype resource entities}. This prototype type is used by {@linkplain https://wiki.factorio.com/Burner_mining_drill burner mining drill}, {@linkplain https://wiki.factorio.com/Electric_mining_drill electric mining drill} and {@linkplain https://wiki.factorio.com/Pumpjack pumpjack} in vanilla.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MiningDrillPrototype.html Online documentation}
     */
    export interface MiningDrillPrototype extends EntityWithOwnerPrototype {
        /**
         * The position where any item results are placed, when the mining drill is facing north (default direction). If the drill does not produce any solid items but uses a fluidbox output instead (e.g. pumpjacks), a vector of `{0,0}` disables the yellow arrow alt-mode indicator for the placed item location.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MiningDrillPrototype.html#MiningDrillPrototype.vector_to_place_result Online documentation}
         */
        vector_to_place_result: Vector;
        /**
         * The distance from the centre of the mining drill to search for resources in.
         *
         * This is 2.49 for electric mining drills (a 5x5 area) and 0.99 for burner mining drills (a 2x2 area). The drill searches resource outside its natural boundary box, which is 0.01 (the middle of the entity); making it 2.5 and 1.0 gives it another block radius.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MiningDrillPrototype.html#MiningDrillPrototype.resource_searching_radius Online documentation}
         */
        resource_searching_radius: double;
        /**
         * The amount of energy used by the drill while mining. Can't be less than or equal to 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MiningDrillPrototype.html#MiningDrillPrototype.energy_usage Online documentation}
         */
        energy_usage: Energy;
        /**
         * The speed of this drill.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MiningDrillPrototype.html#MiningDrillPrototype.mining_speed Online documentation}
         */
        mining_speed: double;
        /**
         * The energy source of this mining drill.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MiningDrillPrototype.html#MiningDrillPrototype.energy_source Online documentation}
         */
        energy_source: EnergySource;
        /**
         * The names of the {@link ResourceCategory} that can be mined by this drill. For a list of built-in categories, see {@linkplain https://wiki.factorio.com/Data.raw#resource-category here}.
         *
         * Note: Categories containing resources which produce items, fluids, or items+fluids may be combined on the same entity, but may not work as expected. Examples: Miner does not rotate fluid-resulting resources until depletion. Fluid isn't output (fluid resource change and fluidbox matches previous fluid). Miner with no `vector_to_place_result` can't output an item result and halts.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MiningDrillPrototype.html#MiningDrillPrototype.resource_categories Online documentation}
         */
        resource_categories: readonly ResourceCategoryID[];
        output_fluid_box?: FluidBox;
        input_fluid_box?: FluidBox;
        /**
         * Only loaded if `graphics_set` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MiningDrillPrototype.html#MiningDrillPrototype.animations Online documentation}
         */
        animations?: Animation4Way;
        graphics_set?: MiningDrillGraphicsSet;
        wet_mining_graphics_set?: MiningDrillGraphicsSet;
        /**
         * Used by the {@linkplain https://wiki.factorio.com/Pumpjack pumpjack} to have a static 4 way sprite.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MiningDrillPrototype.html#MiningDrillPrototype.base_picture Online documentation}
         */
        base_picture?: Sprite4Way;
        allowed_effects?: EffectTypeLimitation;
        /**
         * The sprite used to show the range of the mining drill.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MiningDrillPrototype.html#MiningDrillPrototype.radius_visualisation_picture Online documentation}
         */
        radius_visualisation_picture?: Sprite;
        /**
         * The maximum circuit wire distance for this entity.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MiningDrillPrototype.html#MiningDrillPrototype.circuit_wire_max_distance Online documentation}
         */
        circuit_wire_max_distance?: double;
        draw_copper_wires?: bool;
        draw_circuit_wires?: bool;
        base_render_layer?: RenderLayer;
        /**
         * Productivity bonus that this machine always has. Values below `0` are allowed, however the sum of the resulting effect together with modules and research is limited to be at least 0%, see {@link Effect}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MiningDrillPrototype.html#MiningDrillPrototype.base_productivity Online documentation}
         */
        base_productivity?: float;
        /**
         * When this mining drill is connected to the circuit network, the resource that it is reading (either the entire resource patch, or the resource in the mining area of the drill, depending on circuit network setting), is tinted in this color when mousing over the mining drill.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MiningDrillPrototype.html#MiningDrillPrototype.monitor_visualization_tint Online documentation}
         */
        monitor_visualization_tint?: Color;
        /**
         * Mandatory if circuit_wire_max_distance  > 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MiningDrillPrototype.html#MiningDrillPrototype.circuit_wire_connection_points Online documentation}
         */
        circuit_wire_connection_points?: readonly [
            WireConnectionPoint,
            WireConnectionPoint,
            WireConnectionPoint,
            WireConnectionPoint
        ];
        /**
         * Mandatory if circuit_wire_max_distance  > 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MiningDrillPrototype.html#MiningDrillPrototype.circuit_connector_sprites Online documentation}
         */
        circuit_connector_sprites?: readonly [
            CircuitConnectorSprites,
            CircuitConnectorSprites,
            CircuitConnectorSprites,
            CircuitConnectorSprites
        ];
        module_specification?: ModuleSpecification;
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
        /**
         * Used when upgrading modules: Ctrl + click modules into an entity and it will replace lower tier modules of the same category with higher tier modules.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ModulePrototype.html#ModulePrototype.category Online documentation}
         */
        category: ModuleCategoryID;
        /**
         * Tier of the module inside its category. Used when upgrading modules: Ctrl + click modules into an entity and it will replace lower tier modules with higher tier modules if they have the same category.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ModulePrototype.html#ModulePrototype.tier Online documentation}
         */
        tier: uint32;
        effect: Effect;
        requires_beacon_alt_mode?: bool;
        /**
         * Array of recipe names this module can be used on. If empty, the module can be used on all recipes.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ModulePrototype.html#ModulePrototype.limitation Online documentation}
         */
        limitation?: readonly RecipeID[];
        /**
         * Array of recipe names this module can **not** be used on, implicitly allowing its use on all other recipes. This property has no effect if set to an empty table.
         *
         * Note that the game converts this into a normal list of limitations internally, so reading {@link import("factorio:runtime").LuaItemPrototype#limitations LuaItemPrototype::limitations} at runtime will be the product of both ways of defining limitations.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ModulePrototype.html#ModulePrototype.limitation_blacklist Online documentation}
         */
        limitation_blacklist?: readonly RecipeID[];
        /**
         * The locale key of the message that is shown when the player attempts to use the module on a recipe it can't be used on. The locale key will be prefixed with `item-limitation.` (the "category" of the locale) by the game.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ModulePrototype.html#ModulePrototype.limitation_message_key Online documentation}
         */
        limitation_message_key?: string;
        /**
         * Chooses with what art style the module is shown inside beacons. See {@link BeaconModuleVisualizations#art_style BeaconModuleVisualizations::art_style}. Vanilla uses "vanilla" here.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ModulePrototype.html#ModulePrototype.art_style Online documentation}
         */
        art_style?: string;
        beacon_tint?: BeaconVisualizationTints;
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
        type: "mouse-cursor";
        /**
         * Name of the prototype.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MouseCursor.html#MouseCursor.name Online documentation}
         */
        name: string;
        /**
         * Either this or the other three properties have to be present.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MouseCursor.html#MouseCursor.system_cursor Online documentation}
         */
        system_cursor?: "arrow" | "i-beam" | "crosshair" | "wait-arrow" | "size-all" | "no" | "hand";
        /**
         * Mandatory if `system_cursor` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MouseCursor.html#MouseCursor.filename Online documentation}
         */
        filename?: FileName;
        /**
         * Mandatory if `system_cursor` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MouseCursor.html#MouseCursor.hot_pixel_x Online documentation}
         */
        hot_pixel_x?: int16;
        /**
         * Mandatory if `system_cursor` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MouseCursor.html#MouseCursor.hot_pixel_y Online documentation}
         */
        hot_pixel_y?: int16;
    }
    /**
     * Used by {@linkplain https://wiki.factorio.com/Exoskeleton exoskeleton}. Increases max speed of characters or acceleration of vehicles if they have this equipment in their grid.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MovementBonusEquipmentPrototype.html Online documentation}
     */
    export interface MovementBonusEquipmentPrototype extends EquipmentPrototype {
        energy_consumption: Energy;
        /**
         * Multiplier of the character speed/vehicle acceleration.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/MovementBonusEquipmentPrototype.html#MovementBonusEquipmentPrototype.movement_bonus Online documentation}
         */
        movement_bonus: double;
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
        /**
         * The noise expression itself. This is where most of the noise magic happens.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/NamedNoiseExpression.html#NamedNoiseExpression.expression Online documentation}
         */
        expression: NoiseExpression;
        /**
         * Names the property that this expression is intended to provide a value for, if any. This will make the expression show up as an option in the map generator GUI, unless it is the only expression with that intended property, in which case it will be hidden and selected by default.
         *
         * Note that the "Map type" dropdown in the map generation GUI is actually a selector for "elevation" generators. If generators are available for other properties, the "Map type" dropdown in the GUI will be renamed to "elevation" and shown along with selectors for the other selectable properties.
         *
         * For example if a noise expression is intended to be used as an alternative temperature generator, `intended_property` should be "temperature". The base game uses the intended_properties elevation, temperature, moisture and aux. For how the named noise expression with those intended_properties are used in the base game see the notable named noise expression list on {@link NoiseExpression#variable NoiseExpression::variable}. Mods may add any other intended_property or modify the existing noise expressions to change/remove their intended properties. Furthermore, mods may remove the use of those named noise expressions from the map generation code or change what they affect.
         *
         * **intended_property in the base game:** The base game defines two named noise expressions that have the `intended_property` "elevation" so that are selectable via the "Map type" dropdown (which actually selects elevation generators)
         *
         * ```
         * local noise = require("noise")
         * data:extend{
         *   {
         *     type = "noise-expression",
         *     name = "elevation",
         *     intended_property = "elevation",
         *     expression = noise.var("0_17-lakes-elevation") -- "0_17-lakes-elevation" is another named noise expression. Noise variables may reference named noise expressions.
         *   },
         *   {
         *     type = "noise-expression",
         *     name = "0_17-island",
         *     intended_property = "elevation",
         *     -- A large island surrounded by an endless ocean
         *     -- expression =  [...]
         *   }
         * }
         * ```
         *
         * **Mods can define any intended_property with any name**. This examples aims to show what this is useful for.
         *
         * A {@link NoiseExpression#variable NoiseExpression::variable} can reference a named noise expression, so by defining the "test" named noise expression, `noise.var("test")` may be used in other {@link NoiseExpression noise expressions}. Intended_property allows to override what the variable references: With the example, if "more-test" is selected in the dropdown in the map generator GUI, its `expression` (`noise.ridge(noise.var("y"), -10, 6`) will provide the value for the noise variable "test" instead.
         *
         * For easy demonstration, that value is assigned to the "elevation" named noise expression, so changing the "test" generator changes the `noise.var("test")` which in turn is used by the "elevation" named noise expression. The "elevation" noise variable is used by water generation, so changing the test generators is immediately visible in the map generation preview.
         *
         * Note that the player can select the "Island" elevation generator in the Elevation dropdown (previously named Map type), which means the 0_17-island named noise expression is selected and `noise.var("test")` isn't used anymore so changing the test generator no longer has an effect.
         *
         * ```
         * local noise = require("noise")
         * data:extend{
         *   {
         *     type = "noise-expression",
         *     name = "test",
         *     intended_property = "test",
         *     expression = noise.ridge(noise.var("x"), -80, 8),
         *   },
         *   {
         *     type = "noise-expression",
         *     name = "more-test",
         *     intended_property = "test", -- override the "test" noise variable when selected by the player
         *     expression = noise.ridge(noise.var("y"), -10, 6),
         *   }
         * }
         * data.raw["noise-expression"]["elevation"].expression = noise.var("test") -- the noise variable "test"
         * ```
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/NamedNoiseExpression.html#NamedNoiseExpression.intended_property Online documentation}
         */
        intended_property?: string;
        /**
         * Used to order alternative expressions in the map generator GUI. For a given property (e.g. 'temperature'), the NamedNoiseExpression with that property's name as its `intended_property` with the lowest order will be chosen as the default in the GUI.
         *
         * If no order is specified, it defaults to "2000" if the property name matches the expression name (making it the 'technical default' generator for the property if none is specified in MapGenSettings), or "3000" otherwise. A generator defined with an order less than "2000" but with a unique name can thereby override the default generator used when creating a new map through the GUI without automatically overriding the 'technical default' generator, which is probably used by existing maps.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/NamedNoiseExpression.html#NamedNoiseExpression.order Online documentation}
         */
        order?: Order;
    }
    /**
     * Used by {@linkplain https://wiki.factorio.com/Nightvision nightvision}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/NightVisionEquipmentPrototype.html Online documentation}
     */
    export interface NightVisionEquipmentPrototype extends EquipmentPrototype {
        energy_input: Energy;
        color_lookup: DaytimeColorLookupTable;
        /**
         * Must be >= 0 and <= 1.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/NightVisionEquipmentPrototype.html#NightVisionEquipmentPrototype.darkness_to_turn_on Online documentation}
         */
        darkness_to_turn_on?: float;
        activate_sound?: Sound;
        deactivate_sound?: Sound;
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
        fluid_box: FluidBox;
        /**
         * How many units of fluid are produced per tick. Must be > 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/OffshorePumpPrototype.html#OffshorePumpPrototype.pumping_speed Online documentation}
         */
        pumping_speed: float;
        /**
         * The name of the fluid that is produced by the pump.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/OffshorePumpPrototype.html#OffshorePumpPrototype.fluid Online documentation}
         */
        fluid: FluidID;
        graphics_set?: OffshorePumpGraphicsSet;
        /**
         * Mandatory if `graphics_set` is not defined.
         *
         * Deprecated, use `graphics_set` instead.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/OffshorePumpPrototype.html#OffshorePumpPrototype.picture Online documentation}
         */
        picture?: Sprite4Way;
        /**
         * Animation runs at least this fast.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/OffshorePumpPrototype.html#OffshorePumpPrototype.min_perceived_performance Online documentation}
         */
        min_perceived_performance?: float;
        fluid_box_tile_collision_test?: CollisionMask;
        /**
         * Tiles colliding with `adjacent_tile_collision_box` must collide with this collision mask (unless it's empty).
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/OffshorePumpPrototype.html#OffshorePumpPrototype.adjacent_tile_collision_test Online documentation}
         */
        adjacent_tile_collision_test?: CollisionMask;
        /**
         * Tiles colliding with `adjacent_tile_collision_box` must NOT collide with this collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/OffshorePumpPrototype.html#OffshorePumpPrototype.adjacent_tile_collision_mask Online documentation}
         */
        adjacent_tile_collision_mask?: CollisionMask;
        /**
         * Tile at placement position must NOT collide with this collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/OffshorePumpPrototype.html#OffshorePumpPrototype.center_collision_mask Online documentation}
         */
        center_collision_mask?: CollisionMask;
        adjacent_tile_collision_box?: BoundingBox;
        placeable_position_visualization?: Sprite;
        remove_on_tile_collision?: bool;
        /**
         * If false, the offshore pump will not show fluid present (visually) before there is an output connected. The pump will also animate yet not show fluid when the fluid is 100% extracted (e.g. such as with a pump).
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/OffshorePumpPrototype.html#OffshorePumpPrototype.always_draw_fluid Online documentation}
         */
        always_draw_fluid?: bool;
        /**
         * If not set (=default), the offshore pump does not collide with tiles if it has none of these collision masks: "water-tile", "ground-tile", "resource-layer", "player-layer", "item-layer", "doodad-layer". If it has at least one of the six collision masks, it does collide with tiles.
         *
         * If set, this specifies whether collision with tiles should (true) or should not (false) be performed on an offshore pump.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/OffshorePumpPrototype.html#OffshorePumpPrototype.check_bounding_box_collides_with_tiles Online documentation}
         */
        check_bounding_box_collides_with_tiles?: bool;
        /**
         * The maximum circuit wire distance for this entity.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/OffshorePumpPrototype.html#OffshorePumpPrototype.circuit_wire_max_distance Online documentation}
         */
        circuit_wire_max_distance?: double;
        draw_copper_wires?: bool;
        draw_circuit_wires?: bool;
        /**
         * Mandatory if circuit_wire_max_distance > 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/OffshorePumpPrototype.html#OffshorePumpPrototype.circuit_wire_connection_points Online documentation}
         */
        circuit_wire_connection_points?: readonly [
            WireConnectionPoint,
            WireConnectionPoint,
            WireConnectionPoint,
            WireConnectionPoint
        ];
        /**
         * Mandatory if circuit_wire_max_distance > 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/OffshorePumpPrototype.html#OffshorePumpPrototype.circuit_connector_sprites Online documentation}
         */
        circuit_connector_sprites?: readonly [
            CircuitConnectorSprites,
            CircuitConnectorSprites,
            CircuitConnectorSprites,
            CircuitConnectorSprites
        ];
    }
    /**
     * An entity with a limited lifetime that can use trigger effects.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ParticlePrototype.html Online documentation}
     */
    export interface ParticlePrototype extends PrototypeBase {
        /**
         * Picture variation count and individual frame count must be equal to shadow variation count.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ParticlePrototype.html#ParticlePrototype.pictures Online documentation}
         */
        pictures: AnimationVariations;
        /**
         * Can't be 1.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ParticlePrototype.html#ParticlePrototype.life_time Online documentation}
         */
        life_time: uint16;
        /**
         * Shadow variation variation count and individual frame count must be equal to picture variation count.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ParticlePrototype.html#ParticlePrototype.shadows Online documentation}
         */
        shadows?: AnimationVariations;
        draw_shadow_when_on_ground?: bool;
        regular_trigger_effect?: TriggerEffect;
        ended_in_water_trigger_effect?: TriggerEffect;
        ended_on_ground_trigger_effect?: TriggerEffect;
        render_layer?: RenderLayer;
        render_layer_when_on_ground?: RenderLayer;
        /**
         * Can't be 1.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ParticlePrototype.html#ParticlePrototype.regular_trigger_effect_frequency Online documentation}
         */
        regular_trigger_effect_frequency?: uint32;
        movement_modifier_when_on_ground?: double;
        movement_modifier?: double;
        /**
         * Has to be >= -0.01 and <= 0.01.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ParticlePrototype.html#ParticlePrototype.vertical_acceleration Online documentation}
         */
        vertical_acceleration?: float;
        mining_particle_frame_speed?: float;
        /**
         * Defaults to `life_time` / 5, but at most 60. If this is 0, it is silently changed to 1.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ParticlePrototype.html#ParticlePrototype.fade_away_duration Online documentation}
         */
        fade_away_duration?: uint16;
    }
    /**
     * Creates particles.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ParticleSourcePrototype.html Online documentation}
     */
    export interface ParticleSourcePrototype extends EntityPrototype {
        time_to_live: float;
        time_before_start: float;
        height: float;
        vertical_speed: float;
        horizontal_speed: float;
        /**
         * Mandatory if `smoke` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ParticleSourcePrototype.html#ParticleSourcePrototype.particle Online documentation}
         */
        particle?: ParticleID;
        /**
         * Mandatory if `particle` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ParticleSourcePrototype.html#ParticleSourcePrototype.smoke Online documentation}
         */
        smoke?: readonly SmokeSource[];
        time_to_live_deviation?: float;
        time_before_start_deviation?: float;
        height_deviation?: float;
        vertical_speed_deviation?: float;
        horizontal_speed_deviation?: float;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ParticleSourcePrototype.html#ParticleSourcePrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * An entity to transport fluids over a distance and between machines.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PipePrototype.html Online documentation}
     */
    export interface PipePrototype extends EntityWithOwnerPrototype {
        /**
         * The area of the entity where fluid/gas inputs, and outputs.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PipePrototype.html#PipePrototype.fluid_box Online documentation}
         */
        fluid_box: FluidBox;
        horizontal_window_bounding_box: BoundingBox;
        vertical_window_bounding_box: BoundingBox;
        pictures: PipePictures;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Pipe_to_ground pipe to ground}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PipeToGroundPrototype.html Online documentation}
     */
    export interface PipeToGroundPrototype extends EntityWithOwnerPrototype {
        fluid_box: FluidBox;
        pictures: PipeToGroundPictures;
        /**
         * Causes fluid icon to always be drawn, ignoring the usual pair requirement.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PipeToGroundPrototype.html#PipeToGroundPrototype.draw_fluid_icon_override Online documentation}
         */
        draw_fluid_icon_override?: bool;
    }
    /**
     * This prototype is used for receiving an achievement when the player receives damage.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PlayerDamagedAchievementPrototype.html Online documentation}
     */
    export interface PlayerDamagedAchievementPrototype extends OmitType<AchievementPrototype> {
        /**
         * This will trigger the achievement, if the amount of damage taken by the dealer, is more than this.
         * @example
         * minimum_damage = 500
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PlayerDamagedAchievementPrototype.html#PlayerDamagedAchievementPrototype.minimum_damage Online documentation}
         */
        minimum_damage: float;
        /**
         * This sets the achievement to only trigger, if you survive the minimum amount of damage. If you don't need to survive, false.
         * @example
         * should_survive = true
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PlayerDamagedAchievementPrototype.html#PlayerDamagedAchievementPrototype.should_survive Online documentation}
         */
        should_survive: bool;
        /**
         * This will trigger the achievement, if the player takes damage from this specific entity type.
         * @example
         * type_of_dealer = "locomotive"
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PlayerDamagedAchievementPrototype.html#PlayerDamagedAchievementPrototype.type_of_dealer Online documentation}
         */
        type_of_dealer?: string;
    }
    /**
     * When a character dies, this entity will immediately respawn the character at the entities location, so there is no respawn time. If there are multiple player ports in the world, the character will respawn at the nearest player port to their death location.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PlayerPortPrototype.html Online documentation}
     */
    export interface PlayerPortPrototype extends EntityWithOwnerPrototype {
        animation: Animation;
        /**
         * Whether this prototype should be a high priority target for enemy forces. See {@linkplain https://wiki.factorio.com/Military_units_and_structures Military units and structures}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PlayerPortPrototype.html#PlayerPortPrototype.is_military_target Online documentation}
         */
        is_military_target?: bool;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PlayerPortPrototype.html#PlayerPortPrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Power_switch power switch}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PowerSwitchPrototype.html Online documentation}
     */
    export interface PowerSwitchPrototype extends EntityWithOwnerPrototype {
        power_on_animation: Animation;
        overlay_start: Animation;
        overlay_loop: Animation;
        led_on: Sprite;
        led_off: Sprite;
        overlay_start_delay: uint8;
        circuit_wire_connection_point: WireConnectionPoint;
        left_wire_connection_point: WireConnectionPoint;
        right_wire_connection_point: WireConnectionPoint;
        wire_max_distance?: double;
        draw_copper_wires?: bool;
        draw_circuit_wires?: bool;
    }
    /**
     * This prototype is used for receiving an achievement when the player produces more than the specified amount of items.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ProduceAchievementPrototype.html Online documentation}
     */
    export interface ProduceAchievementPrototype extends OmitType<AchievementPrototype> {
        /**
         * This will set the amount of items or fluids needed to craft, for the player to complete the achievement.
         * @example
         * amount = 100
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ProduceAchievementPrototype.html#ProduceAchievementPrototype.amount Online documentation}
         */
        amount: MaterialAmountType;
        /**
         * If this is false, the player carries over their statistics from this achievement through all their saves.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ProduceAchievementPrototype.html#ProduceAchievementPrototype.limited_to_one_game Online documentation}
         */
        limited_to_one_game: bool;
        /**
         * Mandatory if `fluid_product` is not defined.
         *
         * This will tell the achievement what item the player needs to craft, to get the achievement.
         * @example
         * item_product = "pistol"
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ProduceAchievementPrototype.html#ProduceAchievementPrototype.item_product Online documentation}
         */
        item_product?: ItemID;
        /**
         * Mandatory if `item_product` is not defined.
         *
         * This will tell the achievement what fluid the player needs to craft, to get the achievement.
         * @example
         * fluid_product = "heavy-oil"
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ProduceAchievementPrototype.html#ProduceAchievementPrototype.fluid_product Online documentation}
         */
        fluid_product?: FluidID;
    }
    /**
     * This prototype is used for receiving an achievement when the player crafts a specified item a certain amount, in an hour.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ProducePerHourAchievementPrototype.html Online documentation}
     */
    export interface ProducePerHourAchievementPrototype extends OmitType<AchievementPrototype> {
        /**
         * This is how much the player has to craft in an hour, to receive the achievement.
         * @example
         * amount = 1000
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ProducePerHourAchievementPrototype.html#ProducePerHourAchievementPrototype.amount Online documentation}
         */
        amount: MaterialAmountType;
        /**
         * Mandatory if `fluid_product` is not defined.
         *
         * This will tell the achievement what item the player needs to craft, to get the achievement.
         * @example
         * item_product = "landfill"
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ProducePerHourAchievementPrototype.html#ProducePerHourAchievementPrototype.item_product Online documentation}
         */
        item_product?: ItemID;
        /**
         * Mandatory if `item_product` is not defined.
         *
         * This will tell the achievement what fluid the player needs to craft, to get the achievement.
         * @example
         * fluid_product = "light-oil"
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ProducePerHourAchievementPrototype.html#ProducePerHourAchievementPrototype.fluid_product Online documentation}
         */
        fluid_product?: FluidID;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Programmable_speaker programmable speaker}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ProgrammableSpeakerPrototype.html Online documentation}
     */
    export interface ProgrammableSpeakerPrototype extends EntityWithOwnerPrototype {
        energy_source: ElectricEnergySource | VoidEnergySource;
        energy_usage_per_tick: Energy;
        sprite: Sprite;
        maximum_polyphony: uint32;
        instruments: readonly ProgrammableSpeakerInstrument[];
        audible_distance_modifier?: float;
        circuit_wire_connection_point?: WireConnectionPoint;
        circuit_wire_max_distance?: double;
        draw_copper_wires?: bool;
        draw_circuit_wires?: bool;
        circuit_connector_sprites?: CircuitConnectorSprites;
    }
    /**
     * Entity with limited lifetime that can hit other entities and has triggers when this happens.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ProjectilePrototype.html Online documentation}
     */
    export interface ProjectilePrototype extends EntityPrototype {
        /**
         * Must be != 0 if `turning_speed_increases_exponentially_with_projectile_speed` is true.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ProjectilePrototype.html#ProjectilePrototype.acceleration Online documentation}
         */
        acceleration: double;
        animation?: Animation;
        /**
         * Whether the animation of the projectile is rotated to match the direction of travel.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ProjectilePrototype.html#ProjectilePrototype.rotatable Online documentation}
         */
        rotatable?: bool;
        enable_drawing_with_mask?: bool;
        /**
         * Setting this to true can be used to disable projectile homing behaviour.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ProjectilePrototype.html#ProjectilePrototype.direction_only Online documentation}
         */
        direction_only?: bool;
        /**
         * When true the entity is hit at the position on its collision box the projectile first collides with. When false the entity is hit at its own position.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ProjectilePrototype.html#ProjectilePrototype.hit_at_collision_position Online documentation}
         */
        hit_at_collision_position?: bool;
        force_condition?: ForceCondition;
        /**
         * Whenever an entity is hit by the projectile, this number gets reduced by the health of the entity. If the number is then below 0, the `final_action` is applied and the projectile destroyed. Otherwise, the projectile simply continues to its destination.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ProjectilePrototype.html#ProjectilePrototype.piercing_damage Online documentation}
         */
        piercing_damage?: float;
        /**
         * Must be greater than or equal to 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ProjectilePrototype.html#ProjectilePrototype.max_speed Online documentation}
         */
        max_speed?: double;
        /**
         * Must be greater than or equal to 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ProjectilePrototype.html#ProjectilePrototype.turn_speed Online documentation}
         */
        turn_speed?: float;
        speed_modifier?: Vector;
        height?: double;
        /**
         * Executed when the projectile hits something.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ProjectilePrototype.html#ProjectilePrototype.action Online documentation}
         */
        action?: Trigger;
        /**
         * Executed when the projectile hits something, after `action` and only if the entity that was hit was destroyed. The projectile is destroyed right after the final_action.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ProjectilePrototype.html#ProjectilePrototype.final_action Online documentation}
         */
        final_action?: Trigger;
        light?: LightDefinition;
        smoke?: readonly SmokeSource[];
        hit_collision_mask?: CollisionMask;
        turning_speed_increases_exponentially_with_projectile_speed?: bool;
        shadow?: Animation;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ProjectilePrototype.html#ProjectilePrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * The abstract base for prototypes. PrototypeBase defines the common features of prototypes, such as localization and order.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PrototypeBase.html Online documentation}
     */
    export interface PrototypeBase {
        /**
         * Specifies the kind of prototype this is.
         *
         * For a list of all types used in vanilla, see {@linkplain https://wiki.factorio.com/Data.raw data.raw}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PrototypeBase.html#PrototypeBase.type Online documentation}
         */
        type: string;
        /**
         * Unique textual identification of the prototype. May not contain a dot, nor exceed a length of 200 characters.
         *
         * For a list of all names used in vanilla, see {@linkplain https://wiki.factorio.com/Data.raw data.raw}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PrototypeBase.html#PrototypeBase.name Online documentation}
         */
        name: string;
        /**
         * Used to order prototypes in inventory, recipes and GUIs. May not exceed a length of 200 characters.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PrototypeBase.html#PrototypeBase.order Online documentation}
         */
        order?: Order;
        /**
         * Overwrites the name set in the {@linkplain https://wiki.factorio.com/Tutorial:Localisation locale file}. Can be used to easily set a procedurally-generated name because the LocalisedString format allows to insert parameters into the name directly from the Lua script.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PrototypeBase.html#PrototypeBase.localised_name Online documentation}
         */
        localised_name?: LocalisedString;
        /**
         * Overwrites the description set in the {@linkplain https://wiki.factorio.com/Tutorial:Localisation locale file}. The description is usually shown in the tooltip of the prototype.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PrototypeBase.html#PrototypeBase.localised_description Online documentation}
         */
        localised_description?: LocalisedString;
    }
    /**
     * The pump is used to transfer fluids between tanks, fluid wagons and pipes.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PumpPrototype.html Online documentation}
     */
    export interface PumpPrototype extends EntityWithOwnerPrototype {
        /**
         * The area of the entity where fluid inputs and outputs.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PumpPrototype.html#PumpPrototype.fluid_box Online documentation}
         */
        fluid_box: FluidBox;
        /**
         * The type of energy the pump uses.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PumpPrototype.html#PumpPrototype.energy_source Online documentation}
         */
        energy_source: EnergySource;
        /**
         * The amount of energy the pump uses.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PumpPrototype.html#PumpPrototype.energy_usage Online documentation}
         */
        energy_usage: Energy;
        /**
         * The amount of fluid this pump transfers per tick.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PumpPrototype.html#PumpPrototype.pumping_speed Online documentation}
         */
        pumping_speed: double;
        /**
         * The animation for the pump.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PumpPrototype.html#PumpPrototype.animations Online documentation}
         */
        animations: Animation4Way;
        fluid_wagon_connector_speed?: double;
        fluid_wagon_connector_alignment_tolerance?: double;
        fluid_wagon_connector_frame_count?: uint8;
        fluid_animation?: Animation4Way;
        glass_pictures?: Sprite4Way;
        circuit_wire_max_distance?: double;
        draw_copper_wires?: bool;
        draw_circuit_wires?: bool;
        /**
         * Mandatory if circuit_wire_max_distance  > 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PumpPrototype.html#PumpPrototype.circuit_wire_connection_points Online documentation}
         */
        circuit_wire_connection_points?: readonly [
            WireConnectionPoint,
            WireConnectionPoint,
            WireConnectionPoint,
            WireConnectionPoint
        ];
        /**
         * Mandatory if circuit_wire_max_distance  > 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/PumpPrototype.html#PumpPrototype.circuit_connector_sprites Online documentation}
         */
        circuit_connector_sprites?: readonly [
            CircuitConnectorSprites,
            CircuitConnectorSprites,
            CircuitConnectorSprites,
            CircuitConnectorSprites
        ];
        fluid_wagon_connector_graphics?: FluidWagonConnectorGraphics;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Radar radar}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RadarPrototype.html Online documentation}
     */
    export interface RadarPrototype extends EntityWithOwnerPrototype {
        /**
         * The amount of energy this radar uses.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RadarPrototype.html#RadarPrototype.energy_usage Online documentation}
         */
        energy_usage: Energy;
        /**
         * The amount of energy it takes to scan a sector. This value doesn't have any effect on nearby scanning.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RadarPrototype.html#RadarPrototype.energy_per_sector Online documentation}
         */
        energy_per_sector: Energy;
        /**
         * The amount of energy the radar has to consume for nearby scan to be performed. This value doesn't have any effect on sector scanning.
         *
         * Performance warning: nearby scan causes re-charting of many chunks, which is expensive operation. If you want to make a radar that updates map more in real time, you should keep its range low. If you are making radar with high range, you should set this value such that nearby scan is performed once a second or so. For example if you set `energy_usage` to 100kW, setting` energy_per_nearby_scan` to 100kJ will cause nearby scan happen once per second.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RadarPrototype.html#RadarPrototype.energy_per_nearby_scan Online documentation}
         */
        energy_per_nearby_scan: Energy;
        /**
         * The energy source for this radar.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RadarPrototype.html#RadarPrototype.energy_source Online documentation}
         */
        energy_source: EnergySource;
        pictures: RotatedSprite;
        /**
         * The radius of the area this radar can chart, in chunks.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RadarPrototype.html#RadarPrototype.max_distance_of_sector_revealed Online documentation}
         */
        max_distance_of_sector_revealed: uint32;
        /**
         * The radius of the area constantly revealed by this radar, in chunks.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RadarPrototype.html#RadarPrototype.max_distance_of_nearby_sector_revealed Online documentation}
         */
        max_distance_of_nearby_sector_revealed: uint32;
        radius_minimap_visualisation_color?: Color;
        rotation_speed?: double;
        /**
         * Whether this prototype should be a high priority target for enemy forces. See {@linkplain https://wiki.factorio.com/Military_units_and_structures Military units and structures}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RadarPrototype.html#RadarPrototype.is_military_target Online documentation}
         */
        is_military_target?: bool;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Rail_chain_signal rail chain signal}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RailChainSignalPrototype.html Online documentation}
     */
    export interface RailChainSignalPrototype extends RailSignalBasePrototype {
        /**
         * Array of 8 vectors.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RailChainSignalPrototype.html#RailChainSignalPrototype.selection_box_offsets Online documentation}
         */
        selection_box_offsets: readonly Vector[];
        blue_light?: LightDefinition;
        default_blue_output_signal?: SignalIDConnector;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Rail_planner rail planner}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RailPlannerPrototype.html Online documentation}
     */
    export interface RailPlannerPrototype extends OmitType<ItemPrototype> {
        /**
         * The name of an entity of the type "straight-rail". The first item to place of the rail must be this rail planner.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RailPlannerPrototype.html#RailPlannerPrototype.straight_rail Online documentation}
         */
        straight_rail: EntityID;
        /**
         * The name of an entity of the type "curved-rail". The first item to place of the rail must be this rail planner.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RailPlannerPrototype.html#RailPlannerPrototype.curved_rail Online documentation}
         */
        curved_rail: EntityID;
    }
    /**
     * The abstract base of both rail prototypes.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RailPrototype.html Online documentation}
     */
    export interface RailPrototype extends EntityWithOwnerPrototype {
        pictures: RailPictureSet;
        /**
         * Sound played when a character walks over this rail.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RailPrototype.html#RailPrototype.walking_sound Online documentation}
         */
        walking_sound?: Sound;
        /**
         * Has to be 2 for 2x2 grid.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RailPrototype.html#RailPrototype.build_grid_size Online documentation}
         */
        build_grid_size?: 2;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RailPrototype.html#RailPrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
        /**
         * All rail {@link EntityPrototype#collision_box collision_boxes} are hardcoded and cannot be modified.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RailPrototype.html#RailPrototype.collision_box Online documentation}
         */
        collision_box?: BoundingBox;
        /**
         * Furthermore, the rail {@link EntityPrototype#selection_box selection_boxes} are automatically calculated from the bounding boxes, so effectively also hardcoded.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RailPrototype.html#RailPrototype.selection_box Online documentation}
         */
        selection_box?: BoundingBox;
    }
    /**
     * Used for rail corpses.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RailRemnantsPrototype.html Online documentation}
     */
    export interface RailRemnantsPrototype extends OmitType<CorpsePrototype> {
        bending_type: "straight" | "turn";
        pictures: RailPictureSet;
        /**
         * Has to be 2 for 2x2 grid.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RailRemnantsPrototype.html#RailRemnantsPrototype.build_grid_size Online documentation}
         */
        build_grid_size?: 2;
        /**
         * All rail remnant {@link EntityPrototype#collision_box collision_boxes} are hardcoded and cannot be modified.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RailRemnantsPrototype.html#RailRemnantsPrototype.collision_box Online documentation}
         */
        collision_box?: BoundingBox;
        /**
         * Furthermore, the rail remnant {@link EntityPrototype#selection_box selection_boxes} are automatically calculated from the bounding boxes, so effectively also hardcoded.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RailRemnantsPrototype.html#RailRemnantsPrototype.selection_box Online documentation}
         */
        selection_box?: BoundingBox;
    }
    /**
     * The abstract base entity for both rail signals.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RailSignalBasePrototype.html Online documentation}
     */
    export interface RailSignalBasePrototype extends EntityWithOwnerPrototype {
        animation: RotatedAnimation;
        rail_piece?: Animation;
        green_light?: LightDefinition;
        orange_light?: LightDefinition;
        red_light?: LightDefinition;
        default_red_output_signal?: SignalIDConnector;
        default_orange_output_signal?: SignalIDConnector;
        default_green_output_signal?: SignalIDConnector;
        /**
         * The maximum circuit wire distance for this entity.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RailSignalBasePrototype.html#RailSignalBasePrototype.circuit_wire_max_distance Online documentation}
         */
        circuit_wire_max_distance?: double;
        draw_copper_wires?: bool;
        draw_circuit_wires?: bool;
        /**
         * Mandatory if circuit_wire_max_distance > 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RailSignalBasePrototype.html#RailSignalBasePrototype.circuit_wire_connection_points Online documentation}
         */
        circuit_wire_connection_points?: readonly WireConnectionPoint[];
        /**
         * Mandatory if circuit_wire_max_distance > 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RailSignalBasePrototype.html#RailSignalBasePrototype.circuit_connector_sprites Online documentation}
         */
        circuit_connector_sprites?: readonly CircuitConnectorSprites[];
        /**
         * Rail signals must collide with each other, this can be achieved by having the "rail-layer" collision mask layer on all rail signals.
         *
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RailSignalBasePrototype.html#RailSignalBasePrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
        /**
         * The {@link EntityPrototype#collision_box collision_box} of rail signals is hardcoded to `{{-0.2, -0.2}, {0.2, 0.2}}`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RailSignalBasePrototype.html#RailSignalBasePrototype.collision_box Online documentation}
         */
        collision_box?: BoundingBox;
        /**
         * The "placeable-off-grid" flag will be ignored for rail signals.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RailSignalBasePrototype.html#RailSignalBasePrototype.flags Online documentation}
         */
        flags?: EntityPrototypeFlags;
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
        working_light_picture: Sprite;
        /**
         * The energy output as heat.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ReactorPrototype.html#ReactorPrototype.heat_buffer Online documentation}
         */
        heat_buffer: HeatBuffer;
        /**
         * May not be a heat energy source.
         *
         * The input energy source, in vanilla it is a burner energy source.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ReactorPrototype.html#ReactorPrototype.energy_source Online documentation}
         */
        energy_source: EnergySource;
        /**
         * How much energy this reactor can consume (from the input energy source) and then output as heat.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ReactorPrototype.html#ReactorPrototype.consumption Online documentation}
         */
        consumption: Energy;
        /**
         * If defined, number of variations must be at least equal to count of {@link HeatBuffer#connections connections} defined in `heat_buffer`. Each variation represents connected heat buffer connection of corresponding index.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ReactorPrototype.html#ReactorPrototype.connection_patches_connected Online documentation}
         */
        connection_patches_connected?: SpriteVariations;
        /**
         * If defined, number of variations must be at least equal to count of {@link HeatBuffer#connections connections} defined in `heat_buffer`. Each variation represents unconnected heat buffer connection of corresponding index.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ReactorPrototype.html#ReactorPrototype.connection_patches_disconnected Online documentation}
         */
        connection_patches_disconnected?: SpriteVariations;
        /**
         * If defined, number of variations must be at least equal to count of {@link HeatBuffer#connections connections} defined in `heat_buffer`. When reactor is heated, corresponding variations are drawn over `connection_patches_connected`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ReactorPrototype.html#ReactorPrototype.heat_connection_patches_connected Online documentation}
         */
        heat_connection_patches_connected?: SpriteVariations;
        /**
         * If defined, number of variations must be at least equal to count of {@link HeatBuffer#connections connections} defined in `heat_buffer`. When reactor is heated, corresponding variations are drawn over `connection_patches_disconnected`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ReactorPrototype.html#ReactorPrototype.heat_connection_patches_disconnected Online documentation}
         */
        heat_connection_patches_disconnected?: SpriteVariations;
        lower_layer_picture?: Sprite;
        heat_lower_layer_picture?: Sprite;
        picture?: Sprite;
        light?: LightDefinition;
        /**
         * The action is triggered when the reactor dies (is destroyed) at over 90% of max temperature.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ReactorPrototype.html#ReactorPrototype.meltdown_action Online documentation}
         */
        meltdown_action?: Trigger;
        neighbour_bonus?: double;
        /**
         * When this is true, the reactor will stop consuming fuel/energy when the temperature has reached the maximum.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ReactorPrototype.html#ReactorPrototype.scale_energy_usage Online documentation}
         */
        scale_energy_usage?: bool;
        /**
         * Whether the reactor should use {@link ItemPrototype#fuel_glow_color fuel_glow_color} from the fuel item prototype as light color and tint for `working_light_picture`. {@linkplain https://forums.factorio.com/71121 Forum post.}
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ReactorPrototype.html#ReactorPrototype.use_fuel_glow_color Online documentation}
         */
        use_fuel_glow_color?: bool;
        /**
         * When `use_fuel_glow_color` is true, this is the color used as `working_light_picture` tint for fuels that don't have glow color defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ReactorPrototype.html#ReactorPrototype.default_fuel_glow_color Online documentation}
         */
        default_fuel_glow_color?: Color;
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
        /**
         * Controls which category of machines can craft this recipe.
         *
         * The built-in categories can be found {@linkplain https://wiki.factorio.com/Data.raw#recipe-category here}. The base `"crafting"` category can not contain recipes with fluid ingredients or products.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RecipePrototype.html#RecipePrototype.category Online documentation}
         */
        category?: RecipeCategoryID;
        /**
         * The subgroup of this recipe. If not specified, it defaults to the subgroup of the product if there is only one, or of the `main_product` if multiple products exist.
         *
         * Mandatory if multiple products exist and no `main_product` is specified, or if there is no product.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RecipePrototype.html#RecipePrototype.subgroup Online documentation}
         */
        subgroup?: ItemSubGroupID;
        /**
         * Used by {@link CraftingMachinePrototype#working_visualisations CraftingMachinePrototype::working_visualisations} to tint certain layers with the recipe color. {@link WorkingVisualisation#apply_recipe_tint WorkingVisualisation::apply_recipe_tint} determines which of the four colors is used for that layer, if any.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RecipePrototype.html#RecipePrototype.crafting_machine_tint Online documentation}
         */
        crafting_machine_tint?: CraftingMachineTint;
        /**
         * Can't be an empty array.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RecipePrototype.html#RecipePrototype.icons Online documentation}
         */
        icons?: readonly IconData[];
        /**
         * If given, this determines the recipe's icon. Otherwise, the icon of `main_product` or the singular product is used.
         *
         * Mandatory if `icons` is not defined for a recipe with more than one product and no `main_product`, or no product.
         * @example
         * icon = "__base__/graphics/icons/fluid/heavy-oil.png"
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RecipePrototype.html#RecipePrototype.icon Online documentation}
         */
        icon?: FileName;
        /**
         * The size of the square icon, in pixels, e.g. `32` for a 32px by 32px icon.
         *
         * Mandatory if `icons` is not defined, or if `icon_size` is not specified for all instances of `icons`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RecipePrototype.html#RecipePrototype.icon_size Online documentation}
         */
        icon_size?: SpriteSizeType;
        /**
         * Icons of reduced size will be used at decreased scale.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RecipePrototype.html#RecipePrototype.icon_mipmaps Online documentation}
         */
        icon_mipmaps?: IconMipMapType;
        /**
         * Can be set to `false` if the `expensive` property is defined. This will disable this difficulty, same as setting `enabled` to `false` would. If it's later enabled (by research, etc.), it will use the data from `expensive`.
         *
         * If this property is not defined while `expensive` is, it will mirror its data.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RecipePrototype.html#RecipePrototype.normal Online documentation}
         */
        normal?: RecipeData | false;
        /**
         * Can be set to `false` if the `normal` property is defined. This will disable this difficulty, same as setting `enabled` to `false` would. If it's later enabled (by research, etc.), it will use the data from `normal`.
         *
         * If this property is not defined while `normal` is, it will mirror its data.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RecipePrototype.html#RecipePrototype.expensive Online documentation}
         */
        expensive?: RecipeData | false;
        /**
         * A table containing ingredient names and counts. Can also contain information about fluid temperature and catalyst amounts. The catalyst amounts are automatically calculated from the recipe, or can be set manually in the IngredientPrototype (see {@linkplain https://factorio.com/blog/post/fff-256 here}).
         *
         * The maximum ingredient amount is 65535. Can be set to an empty table to create a recipe that needs no ingredients.
         *
         * Duplicate ingredients, e.g. two entries with the same name, are *not* allowed. In-game, the item ingredients are ordered by {@link ItemGroup#order_in_recipe ItemGroup::order_in_recipe}.
         *
         * Mandatory if neither `normal` nor `expensive` are defined.
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
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RecipePrototype.html#RecipePrototype.ingredients Online documentation}
         */
        ingredients?: readonly IngredientPrototype[];
        /**
         * A table containing result names and counts. Can also contain information about fluid temperature and catalyst amounts. The catalyst amounts are automatically calculated from the recipe, or can be set manually in the ProductPrototype (see {@linkplain https://factorio.com/blog/post/fff-256 here}).
         *
         * Can be set to an empty table to create a recipe that produces nothing. Duplicate results, e.g. two entries with the same name, are allowed.
         *
         * Mandatory if neither `normal` nor `expensive` are defined.
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
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RecipePrototype.html#RecipePrototype.results Online documentation}
         */
        results?: readonly ProductPrototype[];
        /**
         * The item created by this recipe. Must be the name of an {@link ItemPrototype item}, such as `"iron-gear-wheel"`.
         *
         * Only loaded if neither `results`, `normal` nor `expensive` are defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RecipePrototype.html#RecipePrototype.result Online documentation}
         */
        result?: ItemID;
        /**
         * The number of items created by this recipe.
         *
         * Only loaded if neither `results`, `normal` nor `expensive` are defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RecipePrototype.html#RecipePrototype.result_count Online documentation}
         */
        result_count?: uint16;
        /**
         * For recipes with one or more products: Subgroup, localised_name and icon default to the values of the singular/main product, but can be overwritten by the recipe. Setting the main_product to an empty string (`""`) forces the title in the recipe tooltip to use the recipe's name (not that of the product) and shows the products in the tooltip.
         *
         * If 1) there are multiple products and this property is nil, 2) this property is set to an empty string (`""`), or 3) there are no products, the recipe will use the localised_name, icon, and subgroup of the recipe. icon and subgroup become non-optional.
         *
         * Only loaded if neither `normal` nor `expensive` are defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RecipePrototype.html#RecipePrototype.main_product Online documentation}
         */
        main_product?: string;
        /**
         * The amount of time it takes to make this recipe. Must be `> 0.001`. Equals the number of seconds it takes to craft at crafting speed `1`.
         *
         * Only loaded if neither `normal` nor `expensive` are defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RecipePrototype.html#RecipePrototype.energy_required Online documentation}
         */
        energy_required?: double;
        /**
         * Only loaded if neither `normal` nor `expensive` are defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RecipePrototype.html#RecipePrototype.emissions_multiplier Online documentation}
         */
        emissions_multiplier?: double;
        /**
         * Only loaded if neither `normal` nor `expensive` are defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RecipePrototype.html#RecipePrototype.requester_paste_multiplier Online documentation}
         */
        requester_paste_multiplier?: uint32;
        /**
         * Used to determine how many extra items are put into an assembling machine before it's considered "full enough". See {@linkplain https://wiki.factorio.com/Inserters#Insertion_limits insertion limits}.
         *
         * If set to `0`, it instead uses the following formula: `1.166 / (energy_required / the assembler's crafting_speed)`, rounded up, and clamped to be between`2` and `100`. The numbers used in this formula can be changed by the {@link UtilityConstants} properties `dynamic_recipe_overload_factor`, `minimum_recipe_overload_multiplier`, and `maximum_recipe_overload_multiplier`.
         *
         * Only loaded if neither `normal` nor `expensive` are defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RecipePrototype.html#RecipePrototype.overload_multiplier Online documentation}
         */
        overload_multiplier?: uint32;
        /**
         * Whether the recipe is allowed to have the extra inserter overload bonus applied (4 * stack inserter stack size).
         *
         * Only loaded if neither `normal` nor `expensive` are defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RecipePrototype.html#RecipePrototype.allow_inserter_overload Online documentation}
         */
        allow_inserter_overload?: bool;
        /**
         * This can be `false` to disable the recipe at the start of the game, or `true` to leave it enabled.
         *
         * If a recipe is unlocked via technology, this should be set to `false`.
         *
         * Only loaded if neither `normal` nor `expensive` are defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RecipePrototype.html#RecipePrototype.enabled Online documentation}
         */
        enabled?: bool;
        /**
         * Hides the recipe from crafting menus.
         *
         * Only loaded if neither `normal` nor `expensive` are defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RecipePrototype.html#RecipePrototype.hidden Online documentation}
         */
        hidden?: bool;
        /**
         * Hides the recipe from item/fluid production statistics.
         *
         * Only loaded if neither `normal` nor `expensive` are defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RecipePrototype.html#RecipePrototype.hide_from_stats Online documentation}
         */
        hide_from_stats?: bool;
        /**
         * Hides the recipe from the player's crafting screen. The recipe will still show up for selection in machines.
         *
         * Only loaded if neither `normal` nor `expensive` are defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RecipePrototype.html#RecipePrototype.hide_from_player_crafting Online documentation}
         */
        hide_from_player_crafting?: bool;
        /**
         * Whether this recipe is allowed to be broken down for the recipe tooltip "Total raw" calculations.
         *
         * Only loaded if neither `normal` nor `expensive` are defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RecipePrototype.html#RecipePrototype.allow_decomposition Online documentation}
         */
        allow_decomposition?: bool;
        /**
         * Whether the recipe can be used as an intermediate recipe in hand-crafting.
         *
         * Only loaded if neither `normal` nor `expensive` are defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RecipePrototype.html#RecipePrototype.allow_as_intermediate Online documentation}
         */
        allow_as_intermediate?: bool;
        /**
         * Whether the recipe is allowed to use intermediate recipes when hand-crafting.
         *
         * Only loaded if neither `normal` nor `expensive` are defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RecipePrototype.html#RecipePrototype.allow_intermediates Online documentation}
         */
        allow_intermediates?: bool;
        /**
         * Whether the "Made in: <Machine>" part of the tool-tip should always be present, and not only when the recipe can't be hand-crafted.
         *
         * Only loaded if neither `normal` nor `expensive` are defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RecipePrototype.html#RecipePrototype.always_show_made_in Online documentation}
         */
        always_show_made_in?: bool;
        /**
         * Whether the recipe name should have the product amount in front of it, e.g. "2x Transport belt".
         *
         * Only loaded if neither `normal` nor `expensive` are defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RecipePrototype.html#RecipePrototype.show_amount_in_title Online documentation}
         */
        show_amount_in_title?: bool;
        /**
         * Whether the products are always shown in the recipe tooltip.
         *
         * Only loaded if neither `normal` nor `expensive` are defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RecipePrototype.html#RecipePrototype.always_show_products Online documentation}
         */
        always_show_products?: bool;
        /**
         * Whether enabling this recipe unlocks its item products to show in selection lists (item filters, logistic requests, etc.).
         *
         * Only loaded if neither `normal` nor `expensive` are defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RecipePrototype.html#RecipePrototype.unlock_results Online documentation}
         */
        unlock_results?: bool;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Repair_pack repair pack}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RepairToolPrototype.html Online documentation}
     */
    export interface RepairToolPrototype extends OmitType<ToolPrototype> {
        speed: float;
        /**
         * This does nothing, it is never triggered.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RepairToolPrototype.html#RepairToolPrototype.repair_result Online documentation}
         */
        repair_result?: Trigger;
    }
    /**
     * This prototype is used for receiving an achievement when the player completes a specific research.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ResearchAchievementPrototype.html Online documentation}
     */
    export interface ResearchAchievementPrototype extends OmitType<AchievementPrototype> {
        /**
         * Mandatory if `research_all` is not defined.
         *
         * Researching this technology will trigger the achievement.
         * @example
         * technology = "oil-processing"
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ResearchAchievementPrototype.html#ResearchAchievementPrototype.technology Online documentation}
         */
        technology?: TechnologyID;
        /**
         * Mandatory if `technology` is not defined.
         *
         * This will only trigger if the player has learned every research in the game.
         * @example
         * research_all = true
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ResearchAchievementPrototype.html#ResearchAchievementPrototype.research_all Online documentation}
         */
        research_all?: bool;
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
        /**
         * Entity's graphics, using a graphic sheet, with variation and depletion. At least one stage must be defined.
         *
         * When using {@link AnimationVariations#sheet AnimationVariations::sheet}, `frame_count` is the amount of frames per row in the spritesheet. `variation_count` is the amount of rows in the spritesheet. Each row in the spritesheet is one stage of the animation.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ResourceEntityPrototype.html#ResourceEntityPrototype.stages Online documentation}
         */
        stages: AnimationVariations;
        /**
         * Number of stages the animation has.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ResourceEntityPrototype.html#ResourceEntityPrototype.stage_counts Online documentation}
         */
        stage_counts: readonly uint32[];
        /**
         * If the ore is infinitely minable, or if it will eventually run out of resource.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ResourceEntityPrototype.html#ResourceEntityPrototype.infinite Online documentation}
         */
        infinite?: bool;
        /**
         * If the resource should be highlighted when holding a mining drill that can mine it (holding a pumpjack highlights crude-oil in the base game).
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ResourceEntityPrototype.html#ResourceEntityPrototype.highlight Online documentation}
         */
        highlight?: bool;
        /**
         * Whether there should be a slight offset to graphics of the resource. Used to make patches a little less uniform in appearance.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ResourceEntityPrototype.html#ResourceEntityPrototype.randomize_visual_position Online documentation}
         */
        randomize_visual_position?: bool;
        /**
         * Whether the resource should have a grid pattern on the map instead of a solid map color.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ResourceEntityPrototype.html#ResourceEntityPrototype.map_grid Online documentation}
         */
        map_grid?: bool;
        /**
         * Must be not 0 when `infinite = true`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ResourceEntityPrototype.html#ResourceEntityPrototype.minimum Online documentation}
         */
        minimum?: uint32;
        /**
         * Must be not 0 when `infinite = true`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ResourceEntityPrototype.html#ResourceEntityPrototype.normal Online documentation}
         */
        normal?: uint32;
        /**
         * Every time an infinite-type resource "ticks" lower it's lowered by that amount. -- {@linkplain https://forums.factorio.com/viewtopic.php?p=271115#p271115 Rseding91}
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ResourceEntityPrototype.html#ResourceEntityPrototype.infinite_depletion_amount Online documentation}
         */
        infinite_depletion_amount?: uint32;
        /**
         * When hovering over this resource in the map view: How far to search for other resource patches of this type to display as one (summing amount, white outline).
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ResourceEntityPrototype.html#ResourceEntityPrototype.resource_patch_search_radius Online documentation}
         */
        resource_patch_search_radius?: uint32;
        /**
         * The category for the resource. Available categories in vanilla can be found {@linkplain https://wiki.factorio.com/Data.raw#resource-category here}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ResourceEntityPrototype.html#ResourceEntityPrototype.category Online documentation}
         */
        category?: ResourceCategoryID;
        /**
         * Sound played when the player walks over this resource.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ResourceEntityPrototype.html#ResourceEntityPrototype.walking_sound Online documentation}
         */
        walking_sound?: Sound;
        /**
         * An effect that can be overlaid above the normal ore graphics. Used in the base game to make {@linkplain https://wiki.factorio.com/Uranium_ore uranium ore} glow.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ResourceEntityPrototype.html#ResourceEntityPrototype.stages_effect Online documentation}
         */
        stages_effect?: AnimationVariations;
        /**
         * How long it takes `stages_effect` to go from `min_effect_alpha` to `max_effect_alpha`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ResourceEntityPrototype.html#ResourceEntityPrototype.effect_animation_period Online documentation}
         */
        effect_animation_period?: float;
        /**
         * How much `effect_animation_period` can deviate from its original value. Used to make the stages effect alpha change look less uniform.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ResourceEntityPrototype.html#ResourceEntityPrototype.effect_animation_period_deviation Online documentation}
         */
        effect_animation_period_deviation?: float;
        /**
         * How much the surface darkness should affect the alpha of `stages_effect`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ResourceEntityPrototype.html#ResourceEntityPrototype.effect_darkness_multiplier Online documentation}
         */
        effect_darkness_multiplier?: float;
        /**
         * Minimal alpha value of `stages_effect`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ResourceEntityPrototype.html#ResourceEntityPrototype.min_effect_alpha Online documentation}
         */
        min_effect_alpha?: float;
        /**
         * Maximal alpha value of `stages_effect`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ResourceEntityPrototype.html#ResourceEntityPrototype.max_effect_alpha Online documentation}
         */
        max_effect_alpha?: float;
        /**
         * Must be positive.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ResourceEntityPrototype.html#ResourceEntityPrototype.tree_removal_probability Online documentation}
         */
        tree_removal_probability?: double;
        /**
         * Must be positive when `tree_removal_probability` is set.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ResourceEntityPrototype.html#ResourceEntityPrototype.tree_removal_max_distance Online documentation}
         */
        tree_removal_max_distance?: double;
        /**
         * Defaults to the resources map color if left unset and map color is set, otherwise defaults to white if left unset.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ResourceEntityPrototype.html#ResourceEntityPrototype.mining_visualisation_tint Online documentation}
         */
        mining_visualisation_tint?: Color;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ResourceEntityPrototype.html#ResourceEntityPrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * Used by {@linkplain https://wiki.factorio.com/Personal_roboport personal roboport}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportEquipmentPrototype.html Online documentation}
     */
    export interface RoboportEquipmentPrototype extends EquipmentPrototype {
        /**
         * The animation played at each charging point when a robot is charging there.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportEquipmentPrototype.html#RoboportEquipmentPrototype.recharging_animation Online documentation}
         */
        recharging_animation: Animation;
        /**
         * Presumably states the height of the charging stations and thus an additive offset for the charging_offsets.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportEquipmentPrototype.html#RoboportEquipmentPrototype.spawn_and_station_height Online documentation}
         */
        spawn_and_station_height: float;
        /**
         * Presumably, the distance from the roboport at which robots will wait to charge.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportEquipmentPrototype.html#RoboportEquipmentPrototype.charge_approach_distance Online documentation}
         */
        charge_approach_distance: float;
        /**
         * Can't be negative.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportEquipmentPrototype.html#RoboportEquipmentPrototype.construction_radius Online documentation}
         */
        construction_radius: float;
        charging_energy: Energy;
        spawn_and_station_shadow_height_offset?: float;
        /**
         * Unused, as roboport equipment does not have a logistic radius that could be drawn.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportEquipmentPrototype.html#RoboportEquipmentPrototype.draw_logistic_radius_visualization Online documentation}
         */
        draw_logistic_radius_visualization?: bool;
        draw_construction_radius_visualization?: bool;
        /**
         * The light emitted when charging a robot.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportEquipmentPrototype.html#RoboportEquipmentPrototype.recharging_light Online documentation}
         */
        recharging_light?: LightDefinition;
        /**
         * How many charging points this roboport has. If this is 0, the length of the charging_offsets table is used to calculate the charging station count.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportEquipmentPrototype.html#RoboportEquipmentPrototype.charging_station_count Online documentation}
         */
        charging_station_count?: uint32;
        charging_distance?: float;
        charging_station_shift?: Vector;
        /**
         * Distance in tiles. This defines how far away a robot can be from the charging spot and still be charged, however the bot is still required to reach a charging spot in the first place.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportEquipmentPrototype.html#RoboportEquipmentPrototype.charging_threshold_distance Online documentation}
         */
        charging_threshold_distance?: float;
        robot_vertical_acceleration?: float;
        /**
         * The offset from the center of the roboport at which robots will enter and exit.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportEquipmentPrototype.html#RoboportEquipmentPrototype.stationing_offset Online documentation}
         */
        stationing_offset?: Vector;
        /**
         * How many robots can exist in the network (cumulative).
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportEquipmentPrototype.html#RoboportEquipmentPrototype.robot_limit Online documentation}
         */
        robot_limit?: ItemCountType;
        robots_shrink_when_entering_and_exiting?: bool;
        /**
         * The offsets from the center of the roboport at which robots will charge. Only used if `charging_station_count` is equal to 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportEquipmentPrototype.html#RoboportEquipmentPrototype.charging_offsets Online documentation}
         */
        charging_offsets?: readonly Vector[];
        /**
         * Minimum amount of energy that needs to available inside the roboport's buffer so that robots can be spawned.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportEquipmentPrototype.html#RoboportEquipmentPrototype.spawn_minimum Online documentation}
         */
        spawn_minimum?: Energy;
        /**
         * Add this is if the roboport should be fueled directly instead of using power from the equipment grid.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportEquipmentPrototype.html#RoboportEquipmentPrototype.burner Online documentation}
         */
        burner?: BurnerEnergySource;
        /**
         * Mandatory if `burner` is defined.
         *
         * The size of the buffer of the burner energy source, so effectively the amount of power that the energy source can produce per tick.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportEquipmentPrototype.html#RoboportEquipmentPrototype.power Online documentation}
         */
        power?: Energy;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Roboport roboport}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportPrototype.html Online documentation}
     */
    export interface RoboportPrototype extends EntityWithOwnerPrototype {
        /**
         * The roboport's energy source.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportPrototype.html#RoboportPrototype.energy_source Online documentation}
         */
        energy_source: ElectricEnergySource | VoidEnergySource;
        /**
         * The amount of energy the roboport uses when idle.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportPrototype.html#RoboportPrototype.energy_usage Online documentation}
         */
        energy_usage: Energy;
        /**
         * Minimum charge that the roboport has to have after a blackout (0 charge/buffered energy) to begin working again. Additionally, freshly placed roboports will have their energy buffer filled with `0.25 × recharge_minimum` energy.
         *
         * Must be larger than or equal to `energy_usage` otherwise during low power the roboport will toggle on and off every tick.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportPrototype.html#RoboportPrototype.recharge_minimum Online documentation}
         */
        recharge_minimum: Energy;
        /**
         * The number of robot slots in the roboport.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportPrototype.html#RoboportPrototype.robot_slots_count Online documentation}
         */
        robot_slots_count: ItemStackIndex;
        /**
         * The number of repair pack slots in the roboport.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportPrototype.html#RoboportPrototype.material_slots_count Online documentation}
         */
        material_slots_count: ItemStackIndex;
        base: Sprite;
        base_patch: Sprite;
        /**
         * The animation played when the roboport is idle.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportPrototype.html#RoboportPrototype.base_animation Online documentation}
         */
        base_animation: Animation;
        door_animation_up: Animation;
        door_animation_down: Animation;
        request_to_open_door_timeout: uint32;
        /**
         * The animation played at each charging point when a robot is charging there.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportPrototype.html#RoboportPrototype.recharging_animation Online documentation}
         */
        recharging_animation: Animation;
        /**
         * Presumably states the height of the charging stations and thus an additive offset for the charging_offsets.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportPrototype.html#RoboportPrototype.spawn_and_station_height Online documentation}
         */
        spawn_and_station_height: float;
        /**
         * The distance (in tiles) from the roboport at which robots will wait to charge. Notably, if the robot is already in range, then it will simply wait at its current position.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportPrototype.html#RoboportPrototype.charge_approach_distance Online documentation}
         */
        charge_approach_distance: float;
        /**
         * Can't be negative.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportPrototype.html#RoboportPrototype.logistics_radius Online documentation}
         */
        logistics_radius: float;
        /**
         * Can't be negative.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportPrototype.html#RoboportPrototype.construction_radius Online documentation}
         */
        construction_radius: float;
        /**
         * The maximum power provided to each charging station.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportPrototype.html#RoboportPrototype.charging_energy Online documentation}
         */
        charging_energy: Energy;
        open_door_trigger_effect?: TriggerEffect;
        close_door_trigger_effect?: TriggerEffect;
        default_available_logistic_output_signal?: SignalIDConnector;
        default_total_logistic_output_signal?: SignalIDConnector;
        default_available_construction_output_signal?: SignalIDConnector;
        default_total_construction_output_signal?: SignalIDConnector;
        circuit_wire_connection_point?: WireConnectionPoint;
        /**
         * The maximum circuit wire distance for this entity.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportPrototype.html#RoboportPrototype.circuit_wire_max_distance Online documentation}
         */
        circuit_wire_max_distance?: double;
        draw_copper_wires?: bool;
        draw_circuit_wires?: bool;
        circuit_connector_sprites?: CircuitConnectorSprites;
        spawn_and_station_shadow_height_offset?: float;
        draw_logistic_radius_visualization?: bool;
        draw_construction_radius_visualization?: bool;
        /**
         * The light emitted when charging a robot.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportPrototype.html#RoboportPrototype.recharging_light Online documentation}
         */
        recharging_light?: LightDefinition;
        /**
         * How many charging points this roboport has. If this is 0, the length of the charging_offsets table is used to calculate the charging station count.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportPrototype.html#RoboportPrototype.charging_station_count Online documentation}
         */
        charging_station_count?: uint32;
        charging_distance?: float;
        charging_station_shift?: Vector;
        /**
         * Unused.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportPrototype.html#RoboportPrototype.charging_threshold_distance Online documentation}
         */
        charging_threshold_distance?: float;
        robot_vertical_acceleration?: float;
        /**
         * The offset from the center of the roboport at which robots will enter and exit.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportPrototype.html#RoboportPrototype.stationing_offset Online documentation}
         */
        stationing_offset?: Vector;
        /**
         * Unused.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportPrototype.html#RoboportPrototype.robot_limit Online documentation}
         */
        robot_limit?: ItemCountType;
        robots_shrink_when_entering_and_exiting?: bool;
        /**
         * The offsets from the center of the roboport at which robots will charge. Only used if `charging_station_count` is equal to 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportPrototype.html#RoboportPrototype.charging_offsets Online documentation}
         */
        charging_offsets?: readonly Vector[];
        /**
         * Must be >= `logistics_radius`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RoboportPrototype.html#RoboportPrototype.logistics_connection_distance Online documentation}
         */
        logistics_connection_distance?: float;
    }
    /**
     * The common properties of logistic and construction robots represented by an abstract prototype.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RobotWithLogisticInterfacePrototype.html Online documentation}
     */
    export interface RobotWithLogisticInterfacePrototype extends FlyingRobotPrototype {
        max_payload_size: ItemCountType;
        cargo_centered: Vector;
        /**
         * Only the first frame of the animation is drawn. This means that the graphics for the idle state cannot be animated.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RobotWithLogisticInterfacePrototype.html#RobotWithLogisticInterfacePrototype.idle Online documentation}
         */
        idle?: RotatedAnimation;
        /**
         * Only the first frame of the animation is drawn. This means that the graphics for the in_motion state cannot be animated.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RobotWithLogisticInterfacePrototype.html#RobotWithLogisticInterfacePrototype.in_motion Online documentation}
         */
        in_motion?: RotatedAnimation;
        /**
         * Only the first frame of the animation is drawn. This means that the graphics for the idle state cannot be animated.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RobotWithLogisticInterfacePrototype.html#RobotWithLogisticInterfacePrototype.shadow_idle Online documentation}
         */
        shadow_idle?: RotatedAnimation;
        /**
         * Only the first frame of the animation is drawn. This means that the graphics for the in_motion state cannot be animated.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RobotWithLogisticInterfacePrototype.html#RobotWithLogisticInterfacePrototype.shadow_in_motion Online documentation}
         */
        shadow_in_motion?: RotatedAnimation;
        /**
         * Applied when the robot expires (runs out of energy and {@link FlyingRobotPrototype#speed_multiplier_when_out_of_energy FlyingRobotPrototype::speed_multiplier_when_out_of_energy} is 0).
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RobotWithLogisticInterfacePrototype.html#RobotWithLogisticInterfacePrototype.destroy_action Online documentation}
         */
        destroy_action?: Trigger;
        draw_cargo?: bool;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Rocket_silo rocket silo}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RocketSiloPrototype.html Online documentation}
     */
    export interface RocketSiloPrototype extends OmitType<AssemblingMachinePrototype> {
        active_energy_usage: Energy;
        /**
         * Unused.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RocketSiloPrototype.html#RocketSiloPrototype.idle_energy_usage Online documentation}
         */
        idle_energy_usage: Energy;
        /**
         * May be 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RocketSiloPrototype.html#RocketSiloPrototype.lamp_energy_usage Online documentation}
         */
        lamp_energy_usage: Energy;
        /**
         * Name of a {@link RocketSiloRocketPrototype}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RocketSiloPrototype.html#RocketSiloPrototype.rocket_entity Online documentation}
         */
        rocket_entity: EntityID;
        satellite_animation: Animation;
        satellite_shadow_animation: Animation;
        arm_02_right_animation: Animation;
        arm_01_back_animation: Animation;
        arm_03_front_animation: Animation;
        shadow_sprite: Sprite;
        hole_sprite: Sprite;
        hole_light_sprite: Sprite;
        rocket_shadow_overlay_sprite: Sprite;
        rocket_glow_overlay_sprite: Sprite;
        door_back_sprite: Sprite;
        door_front_sprite: Sprite;
        base_day_sprite: Sprite;
        base_front_sprite: Sprite;
        red_lights_back_sprites: Sprite;
        red_lights_front_sprites: Sprite;
        hole_clipping_box: BoundingBox;
        door_back_open_offset: Vector;
        door_front_open_offset: Vector;
        silo_fade_out_start_distance: double;
        silo_fade_out_end_distance: double;
        times_to_blink: uint8;
        light_blinking_speed: double;
        door_opening_speed: double;
        /**
         * The number of crafts that must complete to produce a rocket. This includes bonus crafts from productivity. Recipe products are ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RocketSiloPrototype.html#RocketSiloPrototype.rocket_parts_required Online documentation}
         */
        rocket_parts_required: uint32;
        base_night_sprite?: Sprite;
        base_light?: LightDefinition;
        base_engine_light?: LightDefinition;
        rocket_rising_delay?: uint8;
        launch_wait_time?: uint8;
        alarm_trigger?: TriggerEffect;
        clamps_on_trigger?: TriggerEffect;
        clamps_off_trigger?: TriggerEffect;
        doors_trigger?: TriggerEffect;
        raise_rocket_trigger?: TriggerEffect;
        alarm_sound?: Sound;
        clamps_on_sound?: Sound;
        clamps_off_sound?: Sound;
        doors_sound?: Sound;
        raise_rocket_sound?: Sound;
        flying_sound?: Sound;
        rocket_result_inventory_size?: ItemStackIndex;
    }
    /**
     * The rocket inside the rocket silo.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RocketSiloRocketPrototype.html Online documentation}
     */
    export interface RocketSiloRocketPrototype extends EntityPrototype {
        rocket_sprite: Sprite;
        rocket_shadow_sprite: Sprite;
        rocket_glare_overlay_sprite: Sprite;
        rocket_smoke_bottom1_animation: Animation;
        rocket_smoke_bottom2_animation: Animation;
        rocket_smoke_top1_animation: Animation;
        rocket_smoke_top2_animation: Animation;
        rocket_smoke_top3_animation: Animation;
        rocket_flame_animation: Animation;
        rocket_flame_left_animation: Animation;
        rocket_flame_right_animation: Animation;
        rocket_rise_offset: Vector;
        rocket_flame_left_rotation: float;
        rocket_flame_right_rotation: float;
        rocket_render_layer_switch_distance: double;
        full_render_layer_switch_distance: double;
        rocket_launch_offset: Vector;
        effects_fade_in_start_distance: double;
        effects_fade_in_end_distance: double;
        shadow_fade_out_start_ratio: double;
        shadow_fade_out_end_ratio: double;
        rocket_visible_distance_from_center: double;
        rising_speed: double;
        engine_starting_speed: double;
        flying_speed: double;
        flying_acceleration: double;
        inventory_size: ItemStackIndex;
        shadow_slave_entity?: EntityID;
        dying_explosion?: EntityID;
        glow_light?: LightDefinition;
        rocket_initial_offset?: Vector;
        rocket_above_wires_slice_offset_from_center?: double;
        rocket_air_object_slice_offset_from_center?: double;
        flying_trigger?: TriggerEffect;
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
        /**
         * Maximum speed of the rolling stock in tiles/tick.
         *
         * In-game, the max speed of a train is `min(all_rolling_stock_max_speeds) × average(all_fuel_modifiers_in_all_locomotives)`. This calculated train speed is then silently capped to 7386.3km/h.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RollingStockPrototype.html#RollingStockPrototype.max_speed Online documentation}
         */
        max_speed: double;
        air_resistance: double;
        /**
         * The length between this rolling stocks front and rear joints. Joints are the point where connection_distance is measured from when rolling stock are connected to one another. Wheels sprite are placed based on the joint position.
         *
         * Maximum joint distance is 15.
         *
         * Note: There needs to be border at least 0.2 between the {@link EntityPrototype#collision_box bounding box} edge and joint. This means that the collision_box must be at least `{{-0,-0.2},{0,0.2}}`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RollingStockPrototype.html#RollingStockPrototype.joint_distance Online documentation}
         */
        joint_distance: double;
        /**
         * The distance between the joint of this rolling stock and its connected rolling stocks joint.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RollingStockPrototype.html#RollingStockPrototype.connection_distance Online documentation}
         */
        connection_distance: double;
        pictures: RotatedSprite;
        vertical_selection_shift: double;
        /**
         * Usually a sound to play when the rolling stock drives over a tie. The rolling stock is considered to be driving over a tie every `tie_distance` tiles.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RollingStockPrototype.html#RollingStockPrototype.drive_over_tie_trigger Online documentation}
         */
        drive_over_tie_trigger?: TriggerEffect;
        /**
         * In tiles. Used to determine how often `drive_over_tie_trigger` is triggered.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RollingStockPrototype.html#RollingStockPrototype.tie_distance Online documentation}
         */
        tie_distance?: double;
        back_light?: LightDefinition;
        stand_by_light?: LightDefinition;
        wheels?: RotatedSprite;
        horizontal_doors?: Animation;
        vertical_doors?: Animation;
        color?: Color;
        allow_manual_color?: bool;
        allow_robot_dispatch_in_automatic_mode?: bool;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/RollingStockPrototype.html#RollingStockPrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * Used in the base game as a base for the blueprint item and the deconstruction item.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SelectionToolPrototype.html Online documentation}
     */
    export interface SelectionToolPrototype extends OmitType<ItemWithLabelPrototype> {
        /**
         * A list of selection mode flags that define how the selection tool selects things in-game.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SelectionToolPrototype.html#SelectionToolPrototype.selection_mode Online documentation}
         */
        selection_mode: SelectionModeFlags;
        /**
         * A list of selection mode flags that define how the selection tool alt-selects things in-game.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SelectionToolPrototype.html#SelectionToolPrototype.alt_selection_mode Online documentation}
         */
        alt_selection_mode: SelectionModeFlags;
        /**
         * If tiles should be included in the selection regardless of entities also being in the selection. This is a visual only setting.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SelectionToolPrototype.html#SelectionToolPrototype.always_include_tiles Online documentation}
         */
        always_include_tiles?: bool;
        /**
         * The color of the rectangle used when standard selection is done in-game.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SelectionToolPrototype.html#SelectionToolPrototype.selection_color Online documentation}
         */
        selection_color: Color;
        /**
         * The color of the rectangle used when alt-selection is done in-game.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SelectionToolPrototype.html#SelectionToolPrototype.alt_selection_color Online documentation}
         */
        alt_selection_color: Color;
        /**
         * The type of cursor box used to render selection of entities/tiles when standard selecting.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SelectionToolPrototype.html#SelectionToolPrototype.selection_cursor_box_type Online documentation}
         */
        selection_cursor_box_type: CursorBoxType;
        /**
         * The type of cursor box used to render selection of entities/tiles when alt selecting.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SelectionToolPrototype.html#SelectionToolPrototype.alt_selection_cursor_box_type Online documentation}
         */
        alt_selection_cursor_box_type: CursorBoxType;
        reverse_selection_color?: Color;
        alt_reverse_selection_color?: Color;
        selection_count_button_color?: Color;
        alt_selection_count_button_color?: Color;
        reverse_selection_count_button_color?: Color;
        alt_reverse_selection_count_button_color?: Color;
        chart_selection_color?: Color;
        chart_alt_selection_color?: Color;
        chart_reverse_selection_color?: Color;
        chart_alt_reverse_selection_color?: Color;
        /**
         * A list of selection mode flags that define how the selection tool reverse-selects things in-game.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SelectionToolPrototype.html#SelectionToolPrototype.reverse_selection_mode Online documentation}
         */
        reverse_selection_mode?: SelectionModeFlags;
        /**
         * A list of selection mode flags that define how the selection tool alt-reverse-selects things in-game (using SHIFT + Right mouse button).
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SelectionToolPrototype.html#SelectionToolPrototype.alt_reverse_selection_mode Online documentation}
         */
        alt_reverse_selection_mode?: SelectionModeFlags;
        /**
         * The type of cursor box used to render selection of entities/tiles when reverse-selecting.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SelectionToolPrototype.html#SelectionToolPrototype.reverse_selection_cursor_box_type Online documentation}
         */
        reverse_selection_cursor_box_type?: CursorBoxType;
        /**
         * The type of cursor box used to render selection of entities/tiles when alt-reverse-selecting (using SHIFT + Right mouse button
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SelectionToolPrototype.html#SelectionToolPrototype.alt_reverse_selection_cursor_box_type Online documentation}
         */
        alt_reverse_selection_cursor_box_type?: CursorBoxType;
        mouse_cursor?: MouseCursorID;
        entity_filters?: readonly EntityID[];
        alt_entity_filters?: readonly EntityID[];
        entity_type_filters?: readonly string[];
        alt_entity_type_filters?: readonly string[];
        tile_filters?: readonly TileID[];
        alt_tile_filters?: readonly TileID[];
        entity_filter_mode?: "whitelist" | "blacklist";
        alt_entity_filter_mode?: "whitelist" | "blacklist";
        tile_filter_mode?: "whitelist" | "blacklist";
        alt_tile_filter_mode?: "whitelist" | "blacklist";
        reverse_entity_filters?: readonly EntityID[];
        alt_reverse_entity_filters?: readonly EntityID[];
        reverse_entity_type_filters?: readonly string[];
        alt_reverse_entity_type_filters?: readonly string[];
        reverse_tile_filters?: readonly TileID[];
        alt_reverse_tile_filters?: readonly TileID[];
        reverse_entity_filter_mode?: "whitelist" | "blacklist";
        alt_reverse_entity_filter_mode?: "whitelist" | "blacklist";
        reverse_tile_filter_mode?: "whitelist" | "blacklist";
        alt_reverse_tile_filter_mode?: "whitelist" | "blacklist";
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
        /**
         * If this is `"lua"`, {@link import("factorio:runtime").on_lua_shortcut on_lua_shortcut} is raised when the shortcut is clicked.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ShortcutPrototype.html#ShortcutPrototype.action Online documentation}
         */
        action: "toggle-alt-mode" | "undo" | "copy" | "cut" | "paste" | "import-string" | "toggle-personal-roboport" | "toggle-equipment-movement-bonus" | "spawn-item" | "lua";
        /**
         * Scales to fit a 16x16-pixel square.
         *
         * Note: The scale that can be defined in the sprite may not behave as expected because the game always scales the sprite to fill the GUI slot.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ShortcutPrototype.html#ShortcutPrototype.icon Online documentation}
         */
        icon: Sprite;
        /**
         * The item to create when clicking on a shortcut with the action set to `"spawn-item"`. The item must have the {@link ItemPrototypeFlags#spawnable spawnable} flag set.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ShortcutPrototype.html#ShortcutPrototype.item_to_spawn Online documentation}
         */
        item_to_spawn?: ItemID;
        /**
         * The technology that must be researched before this shortcut can be used. Once a shortcut is unlocked in one save file, it is unlocked for all future save files.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ShortcutPrototype.html#ShortcutPrototype.technology_to_unlock Online documentation}
         */
        technology_to_unlock?: TechnologyID;
        /**
         * Must be enabled for the Factorio API to be able to set the toggled state on the shortcut button, see {@link import("factorio:runtime").LuaPlayer#set_shortcut_toggled LuaPlayer::set_shortcut_toggled}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ShortcutPrototype.html#ShortcutPrototype.toggleable Online documentation}
         */
        toggleable?: bool;
        /**
         * Name of a custom input or vanilla control. This is **only** used to show the keybind in the tooltip of the shortcut.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ShortcutPrototype.html#ShortcutPrototype.associated_control_input Online documentation}
         */
        associated_control_input?: string;
        /**
         * The icon used in the panel for visible shortcuts, when the shortcut is usable.
         *
         * Note: The scale that can be defined in the sprite may not behave as expected because the game always scales the sprite to fill the GUI slot.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ShortcutPrototype.html#ShortcutPrototype.small_icon Online documentation}
         */
        small_icon?: Sprite;
        /**
         * The icon used when the shortcut is shown in the quickbar, and is not usable.
         *
         * Note: The scale that can be defined in the sprite may not behave as expected because the game always scales the sprite to fill the GUI slot.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ShortcutPrototype.html#ShortcutPrototype.disabled_icon Online documentation}
         */
        disabled_icon?: Sprite;
        /**
         * The icon used in the panel for visible shortcuts, when the shortcut is not usable.
         *
         * Note: The scale that can be defined in the sprite may not behave as expected because the game always scales the sprite to fill the GUI slot.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ShortcutPrototype.html#ShortcutPrototype.disabled_small_icon Online documentation}
         */
        disabled_small_icon?: Sprite;
        style?: "default" | "blue" | "red" | "green";
    }
    /**
     * An extremely basic entity with no special functionality. Used for minable rocks.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SimpleEntityPrototype.html Online documentation}
     */
    export interface SimpleEntityPrototype extends EntityWithHealthPrototype {
        /**
         * Whether this entity should be treated as a rock for the purpose of deconstruction and for {@link CarPrototype#immune_to_rock_impacts CarPrototype::immune_to_rock_impacts}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SimpleEntityPrototype.html#SimpleEntityPrototype.count_as_rock_for_filtered_deconstruction Online documentation}
         */
        count_as_rock_for_filtered_deconstruction?: bool;
        render_layer?: RenderLayer;
        /**
         * Used to determine render order for entities with the same `render_layer` in the same position. Entities with a higher `secondary_draw_order` are drawn on top.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SimpleEntityPrototype.html#SimpleEntityPrototype.secondary_draw_order Online documentation}
         */
        secondary_draw_order?: int8;
        random_animation_offset?: bool;
        /**
         * Whether a random graphics variation is chosen when placing the entity/creating it via script/creating it via map generation. If this is `false`, the entity will use the first variation instead of a random one.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SimpleEntityPrototype.html#SimpleEntityPrototype.random_variation_on_create Online documentation}
         */
        random_variation_on_create?: bool;
        /**
         * Mandatory if both `picture` and `animations` are not defined. Takes priority over `picture` and `animations`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SimpleEntityPrototype.html#SimpleEntityPrototype.pictures Online documentation}
         */
        pictures?: SpriteVariations;
        /**
         * Mandatory if both `pictures` and `animations` are not defined. Takes priority over `animations`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SimpleEntityPrototype.html#SimpleEntityPrototype.picture Online documentation}
         */
        picture?: Sprite;
        /**
         * Mandatory if both `picture` and `pictures` are not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SimpleEntityPrototype.html#SimpleEntityPrototype.animations Online documentation}
         */
        animations?: AnimationVariations;
    }
    /**
     * By default, this entity will be a priority target for units/turrets, who will choose to attack it even if it does not block their path. Use {@link SimpleEntityWithOwnerPrototype} for entities that are only attacked when they block enemies.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SimpleEntityWithForcePrototype.html Online documentation}
     */
    export interface SimpleEntityWithForcePrototype extends OmitType<SimpleEntityWithOwnerPrototype> {
        /**
         * Whether this prototype should be a high priority target for enemy forces. See {@linkplain https://wiki.factorio.com/Military_units_and_structures Military units and structures}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SimpleEntityWithForcePrototype.html#SimpleEntityWithForcePrototype.is_military_target Online documentation}
         */
        is_military_target?: bool;
    }
    /**
     * Has a force, but unlike {@link SimpleEntityWithForcePrototype} it is only attacked if the biters get stuck on it (or if {@link EntityWithOwnerPrototype#is_military_target EntityWithOwnerPrototype::is_military_target} set to true to make the two entity types equivalent).
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SimpleEntityWithOwnerPrototype.html Online documentation}
     */
    export interface SimpleEntityWithOwnerPrototype extends EntityWithOwnerPrototype {
        render_layer?: RenderLayer;
        /**
         * Used to determine render order for entities with the same `render_layer` in the same position. Entities with a higher `secondary_draw_order` are drawn on top.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SimpleEntityWithOwnerPrototype.html#SimpleEntityWithOwnerPrototype.secondary_draw_order Online documentation}
         */
        secondary_draw_order?: int8;
        random_animation_offset?: bool;
        /**
         * Whether a random graphics variation is chosen when placing the entity/creating it via script/creating it via map generation. If this is false, the entity will use the first variation instead of a random one.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SimpleEntityWithOwnerPrototype.html#SimpleEntityWithOwnerPrototype.random_variation_on_create Online documentation}
         */
        random_variation_on_create?: bool;
        /**
         * Mandatory if both `picture` and `animations` are not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SimpleEntityWithOwnerPrototype.html#SimpleEntityWithOwnerPrototype.pictures Online documentation}
         */
        pictures?: SpriteVariations;
        /**
         * Mandatory if both `pictures` and `animations` are not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SimpleEntityWithOwnerPrototype.html#SimpleEntityWithOwnerPrototype.picture Online documentation}
         */
        picture?: Sprite;
        /**
         * Mandatory if both `picture` and `pictures` are not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SimpleEntityWithOwnerPrototype.html#SimpleEntityWithOwnerPrototype.animations Online documentation}
         */
        animations?: AnimationVariations;
        /**
         * If the entity is not visible to a player, the player cannot select it.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SimpleEntityWithOwnerPrototype.html#SimpleEntityWithOwnerPrototype.force_visibility Online documentation}
         */
        force_visibility?: ForceCondition;
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
        animation: Animation;
        cyclic?: bool;
        /**
         * May not be 0 if cyclic is true.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SmokePrototype.html#SmokePrototype.duration Online documentation}
         */
        duration?: uint32;
        spread_duration?: uint32;
        /**
         * `fade_in_duration` + `fade_away_duration` must be <= `duration`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SmokePrototype.html#SmokePrototype.fade_away_duration Online documentation}
         */
        fade_away_duration?: uint32;
        /**
         * `fade_in_duration` + `fade_away_duration` must be <= `duration`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SmokePrototype.html#SmokePrototype.fade_in_duration Online documentation}
         */
        fade_in_duration?: uint32;
        start_scale?: double;
        end_scale?: double;
        color?: Color;
        /**
         * Smoke always moves randomly unless `movement_slow_down_factor` is 0. If `affected_by_wind` is true, the smoke will also be moved by wind.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SmokePrototype.html#SmokePrototype.affected_by_wind Online documentation}
         */
        affected_by_wind?: bool;
        show_when_smoke_off?: bool;
        render_layer?: RenderLayer;
        /**
         * Value between 0 and 1, with 0 being no movement.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SmokePrototype.html#SmokePrototype.movement_slow_down_factor Online documentation}
         */
        movement_slow_down_factor?: double;
        glow_fade_away_duration?: uint32;
        glow_animation?: Animation;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SmokePrototype.html#SmokePrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
        /**
         * Must have a collision box size of zero.
         * @example
         * collision_box = {{0, 0}, {0, 0}}
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SmokePrototype.html#SmokePrototype.collision_box Online documentation}
         */
        collision_box?: BoundingBox;
    }
    /**
     * An entity with animation and a trigger.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SmokeWithTriggerPrototype.html Online documentation}
     */
    export interface SmokeWithTriggerPrototype extends SmokePrototype {
        action?: Trigger;
        /**
         * 0 means never apply.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SmokeWithTriggerPrototype.html#SmokeWithTriggerPrototype.action_cooldown Online documentation}
         */
        action_cooldown?: uint32;
        particle_count?: uint8;
        particle_distance_scale_factor?: float;
        spread_duration_variation?: uint32;
        particle_duration_variation?: uint32;
        particle_spread?: Vector;
        particle_scale_factor?: Vector;
        wave_distance?: Vector;
        wave_speed?: Vector;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Portable_solar_panel portable solar panel}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SolarPanelEquipmentPrototype.html Online documentation}
     */
    export interface SolarPanelEquipmentPrototype extends EquipmentPrototype {
        /**
         * How much power should be provided.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SolarPanelEquipmentPrototype.html#SolarPanelEquipmentPrototype.power Online documentation}
         */
        power: Energy;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Solar_panel solar panel}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SolarPanelPrototype.html Online documentation}
     */
    export interface SolarPanelPrototype extends EntityWithOwnerPrototype {
        /**
         * Sets how this solar panel connects to the energy network. The most relevant property seems to be the output_priority.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SolarPanelPrototype.html#SolarPanelPrototype.energy_source Online documentation}
         */
        energy_source: ElectricEnergySource;
        /**
         * The picture displayed for this solar panel.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SolarPanelPrototype.html#SolarPanelPrototype.picture Online documentation}
         */
        picture: SpriteVariations;
        /**
         * The maximum amount of power this solar panel can produce.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SolarPanelPrototype.html#SolarPanelPrototype.production Online documentation}
         */
        production: Energy;
        /**
         * Overlay has to be empty or have same number of variations as `picture`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SolarPanelPrototype.html#SolarPanelPrototype.overlay Online documentation}
         */
        overlay?: SpriteVariations;
    }
    /**
     * Specifies a sound that can be used with {@link import("factorio:runtime").SoundPath SoundPath} at runtime.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SoundPrototype.html Online documentation}
     */
    export interface SoundPrototype {
        type: "sound";
        /**
         * Name of the sound. Can be used as a {@link import("factorio:runtime").SoundPath SoundPath} at runtime.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SoundPrototype.html#SoundPrototype.name Online documentation}
         */
        name: string;
        category?: SoundType;
        aggregation?: AggregationSpecification;
        allow_random_repeat?: bool;
        /**
         * Modifies how far a sound can be heard. Must be between `0` and `1` inclusive.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SoundPrototype.html#SoundPrototype.audible_distance_modifier Online documentation}
         */
        audible_distance_modifier?: double;
        game_controller_vibration_data?: GameControllerVibrationData;
        variations?: readonly SoundDefinition[];
        /**
         * Supported sound file formats are `.ogg`, `.wav` and `.voc`.
         *
         * Only loaded if `variations` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SoundPrototype.html#SoundPrototype.filename Online documentation}
         */
        filename: FileName;
        /**
         * Only loaded if `variations` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SoundPrototype.html#SoundPrototype.volume Online documentation}
         */
        volume?: float;
        /**
         * Only loaded if `variations` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SoundPrototype.html#SoundPrototype.preload Online documentation}
         */
        preload?: bool;
        /**
         * Speed must be `>= 1 / 64`. This sets both min and max speeds.
         *
         * Only loaded if `variations` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SoundPrototype.html#SoundPrototype.speed Online documentation}
         */
        speed?: float;
        /**
         * Must be `>= 1 / 64`.
         *
         * Only loaded if both `variations` and `speed` are not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SoundPrototype.html#SoundPrototype.min_speed Online documentation}
         */
        min_speed?: float;
        /**
         * Must be `>= min_speed`.
         *
         * Only loaded if `variations` is not defined. Only loaded, and mandatory if `min_speed` is defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SoundPrototype.html#SoundPrototype.max_speed Online documentation}
         */
        max_speed?: float;
    }
    /**
     * Properties of the spectator controller.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpectatorControllerPrototype.html Online documentation}
     */
    export interface SpectatorControllerPrototype {
        type: "spectator-controller";
        /**
         * Name of the spectator controller. Base game uses "default".
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpectatorControllerPrototype.html#SpectatorControllerPrototype.name Online documentation}
         */
        name: string;
        /**
         * Must be >= 0.34375.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpectatorControllerPrototype.html#SpectatorControllerPrototype.movement_speed Online documentation}
         */
        movement_speed: double;
    }
    /**
     * A speech bubble. It floats in the world and can display text.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpeechBubblePrototype.html Online documentation}
     */
    export interface SpeechBubblePrototype extends EntityPrototype {
        /**
         * Needs a style of the type "speech_bubble_style", defined inside the gui styles.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpeechBubblePrototype.html#SpeechBubblePrototype.style Online documentation}
         */
        style: string;
        /**
         * Needs a style of the type "flow_style", defined inside the gui styles.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpeechBubblePrototype.html#SpeechBubblePrototype.wrapper_flow_style Online documentation}
         */
        wrapper_flow_style?: string;
        y_offset?: double;
        fade_in_out_ticks?: uint32;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpeechBubblePrototype.html#SpeechBubblePrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * Used by {@link SpiderLegSpecification} for {@link SpiderVehiclePrototype}, also known as {@linkplain https://wiki.factorio.com/Spidertron spidertron}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpiderLegPrototype.html Online documentation}
     */
    export interface SpiderLegPrototype extends EntityWithHealthPrototype {
        /**
         * Must be larger than 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpiderLegPrototype.html#SpiderLegPrototype.part_length Online documentation}
         */
        part_length: double;
        initial_movement_speed: double;
        movement_acceleration: double;
        target_position_randomisation_distance: double;
        minimal_step_size: double;
        movement_based_position_selection_distance: double;
        graphics_set: SpiderLegGraphicsSet;
        walking_sound_volume_modifier?: double;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpiderLegPrototype.html#SpiderLegPrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Spidertron spidertron}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpiderVehiclePrototype.html Online documentation}
     */
    export interface SpiderVehiclePrototype extends VehiclePrototype {
        /**
         * Must be a burner energy source when using "burner", otherwise it can also be a void energy source.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpiderVehiclePrototype.html#SpiderVehiclePrototype.energy_source Online documentation}
         */
        energy_source: BurnerEnergySource | VoidEnergySource;
        burner: BurnerEnergySource | VoidEnergySource;
        inventory_size: ItemStackIndex;
        graphics_set: SpiderVehicleGraphicsSet;
        spider_engine: SpiderEnginePrototype;
        /**
         * The height of the spider affects the shooting height and the drawing of the graphics and lights.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpiderVehiclePrototype.html#SpiderVehiclePrototype.height Online documentation}
         */
        height: float;
        chunk_exploration_radius: uint32;
        movement_energy_consumption: Energy;
        automatic_weapon_cycling: bool;
        /**
         * This is applied whenever the spider shoots (manual and automatic targeting), `automatic_weapon_cycling` is true and the next gun in line (which is then selected) has ammo. When all of the above is the case, the chain_shooting_cooldown_modifier is a multiplier on the remaining shooting cooldown: `cooldown = (remaining_cooldown × chain_shooting_cooldown_modifier)`.
         *
         * chain_shooting_cooldown_modifier is intended to be in the range of 0 to 1. This means that setting chain_shooting_cooldown_modifier to 0 reduces the remaining shooting cooldown to 0 while a chain_shooting_cooldown_modifier of 1 does not affect the remaining shooting cooldown at all.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpiderVehiclePrototype.html#SpiderVehiclePrototype.chain_shooting_cooldown_modifier Online documentation}
         */
        chain_shooting_cooldown_modifier: float;
        /**
         * The orientation of the torso of the spider affects the shooting direction and the drawing of the graphics and lights.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpiderVehiclePrototype.html#SpiderVehiclePrototype.torso_rotation_speed Online documentation}
         */
        torso_rotation_speed?: float;
        /**
         * Cannot be negative.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpiderVehiclePrototype.html#SpiderVehiclePrototype.torso_bob_speed Online documentation}
         */
        torso_bob_speed?: float;
        /**
         * If set to 0 then the spider will not have a Logistics tab.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpiderVehiclePrototype.html#SpiderVehiclePrototype.trash_inventory_size Online documentation}
         */
        trash_inventory_size?: ItemStackIndex;
        /**
         * The guns this spider vehicle uses.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpiderVehiclePrototype.html#SpiderVehiclePrototype.guns Online documentation}
         */
        guns?: readonly ItemID[];
    }
    /**
     * The {@linkplain https://wiki.factorio.com/Spidertron_remote spidertron remote}. This remote can only be connected to entities of type {@link SpiderVehiclePrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpidertronRemotePrototype.html Online documentation}
     */
    export interface SpidertronRemotePrototype extends OmitType<ItemPrototype> {
        /**
         * Inside IconData, the property for the file path is `icon_color_indicator_mask` instead of `icon`. Can't be an empty array.
         *
         * Uses `icon_size` and `icon_mipmaps` from its {@link ItemPrototype} parent.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpidertronRemotePrototype.html#SpidertronRemotePrototype.icon_color_indicator_masks Online documentation}
         */
        icon_color_indicator_masks?: readonly IconData[];
        /**
         * Path to the icon file.
         *
         * Mandatory if `icon_color_indicator_masks` is not defined.
         *
         * Uses `icon_size` and `icon_mipmaps` from its {@link ItemPrototype} parent.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpidertronRemotePrototype.html#SpidertronRemotePrototype.icon_color_indicator_mask Online documentation}
         */
        icon_color_indicator_mask?: FileName;
        /**
         * Count of items of the same name that can be stored in one inventory slot. Must be 1 when the `"not-stackable"` flag is set.
         * @example
         * stack_size = 1
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpidertronRemotePrototype.html#SpidertronRemotePrototype.stack_size Online documentation}
         */
        stack_size: 1;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Splitter splitter}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SplitterPrototype.html Online documentation}
     */
    export interface SplitterPrototype extends TransportBeltConnectablePrototype {
        structure: Animation4Way;
        /**
         * Drawn 1 tile north of `structure` when the splitter is facing east or west.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SplitterPrototype.html#SplitterPrototype.structure_patch Online documentation}
         */
        structure_patch?: Animation4Way;
        structure_animation_speed_coefficient?: double;
        structure_animation_movement_cooldown?: uint32;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SplitterPrototype.html#SplitterPrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * Specifies an image that can be used with {@link import("factorio:runtime").SpritePath SpritePath} at runtime.
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
        type: "sprite";
        /**
         * Name of the sprite. Can be used as a {@link import("factorio:runtime").SpritePath SpritePath} at runtime.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpritePrototype.html#SpritePrototype.name Online documentation}
         */
        name: string;
        /**
         * If this property is present, all Sprite definitions have to be placed as entries in the array, and they will all be loaded from there. `layers` may not be an empty table. Each definition in the array may also have the `layers` property.
         *
         * If this property is present, all other properties besides `name` and `type` are ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpritePrototype.html#SpritePrototype.layers Online documentation}
         */
        layers?: readonly Sprite[];
        /**
         * Only loaded if `layers` is not defined.
         *
         * The path to the sprite file to use.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpritePrototype.html#SpritePrototype.filename Online documentation}
         */
        filename: FileName;
        /**
         * Only loaded if `layers` is not defined.
         *
         * If this property exists and high resolution sprites are turned on, this is used to load the Sprite.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpritePrototype.html#SpritePrototype.hr_version Online documentation}
         */
        hr_version?: Sprite;
        /**
         * Only loaded if `layers` is not defined.
         *
         * Number of slices this is sliced into when using the "optimized atlas packing" option. If you are a modder, you can just ignore this property. As an example, if this is `4`, the sprite will be sliced into a `4x4` grid.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpritePrototype.html#SpritePrototype.slice Online documentation}
         */
        slice?: SpriteSizeType;
        dice?: SpriteSizeType;
        /**
         * Only loaded if `layers` is not defined.
         *
         * Same as `slice`, but this specifies only how many slices there are on the x-axis.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpritePrototype.html#SpritePrototype.slice_x Online documentation}
         */
        slice_x?: SpriteSizeType;
        dice_x?: SpriteSizeType;
        /**
         * Only loaded if `layers` is not defined.
         *
         * Same as `slice`, but this specifies only how many slices there are on the y-axis.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpritePrototype.html#SpritePrototype.slice_y Online documentation}
         */
        slice_y?: SpriteSizeType;
        dice_y?: SpriteSizeType;
        /**
         * Only loaded if `layers` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpritePrototype.html#SpritePrototype.priority Online documentation}
         */
        priority?: SpritePriority;
        /**
         * Only loaded if `layers` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpritePrototype.html#SpritePrototype.flags Online documentation}
         */
        flags?: SpriteFlags;
        /**
         * Only loaded if `layers` is not defined.
         *
         * The width and height of the sprite. If this is a tuple, the first member of the tuple is the width and the second is the height. Otherwise the size is both width and height. Width and height may only be in the range of 0-8192.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpritePrototype.html#SpritePrototype.size Online documentation}
         */
        size?: SpriteSizeType | readonly [
            SpriteSizeType,
            SpriteSizeType
        ];
        /**
         * Only loaded if `layers` is not defined. Mandatory if `size` is not defined.
         *
         * Width of the picture in pixels, from 0-8192.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpritePrototype.html#SpritePrototype.width Online documentation}
         */
        width?: SpriteSizeType;
        /**
         * Only loaded if `layers` is not defined. Mandatory if `size` is not defined.
         *
         * Height of the picture in pixels, from 0-8192.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpritePrototype.html#SpritePrototype.height Online documentation}
         */
        height?: SpriteSizeType;
        /**
         * Only loaded if `layers` is not defined.
         *
         * Horizontal position of the sprite in the source file in pixels.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpritePrototype.html#SpritePrototype.x Online documentation}
         */
        x?: SpriteSizeType;
        /**
         * Only loaded if `layers` is not defined.
         *
         * Vertical position of the sprite in the source file in pixels.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpritePrototype.html#SpritePrototype.y Online documentation}
         */
        y?: SpriteSizeType;
        /**
         * Only loaded if `layers` is not defined.
         *
         * Loaded only when `x` and `y` are both `0`. The first member of the tuple is `x` and the second is `y`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpritePrototype.html#SpritePrototype.position Online documentation}
         */
        position?: readonly [
            SpriteSizeType,
            SpriteSizeType
        ];
        /**
         * Only loaded if `layers` is not defined.
         *
         * The shift in tiles. `util.by_pixel()` can be used to divide the shift by 32 which is the usual pixel height/width of 1 tile in normal resolution. Note that 32 pixel tile height/width is not enforced anywhere - any other tile height or width is also possible.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpritePrototype.html#SpritePrototype.shift Online documentation}
         */
        shift?: Vector;
        /**
         * Only loaded if `layers` is not defined.
         *
         * Values other than `1` specify the scale of the sprite on default zoom. A scale of `2` means that the picture will be two times bigger on screen (and thus more pixelated).
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpritePrototype.html#SpritePrototype.scale Online documentation}
         */
        scale?: double;
        /**
         * Only loaded if `layers` is not defined.
         *
         * Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true. This takes precedence over `draw_as_glow` and `draw_as_light`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpritePrototype.html#SpritePrototype.draw_as_shadow Online documentation}
         */
        draw_as_shadow?: bool;
        /**
         * Only loaded if `layers` is not defined.
         *
         * Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true. This takes precedence over `draw_as_light`.
         *
         * Draws first as a normal sprite, then again as a light layer. See {@linkplain https://forums.factorio.com/91682}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpritePrototype.html#SpritePrototype.draw_as_glow Online documentation}
         */
        draw_as_glow?: bool;
        /**
         * Only loaded if `layers` is not defined.
         *
         * Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpritePrototype.html#SpritePrototype.draw_as_light Online documentation}
         */
        draw_as_light?: bool;
        /**
         * Only loaded if `layers` is not defined.
         *
         * Only loaded if this is an icon, that is it has the flag `"group=icon"` or `"group=gui"`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpritePrototype.html#SpritePrototype.mipmap_count Online documentation}
         */
        mipmap_count?: uint8;
        /**
         * Only loaded if `layers` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpritePrototype.html#SpritePrototype.apply_runtime_tint Online documentation}
         */
        apply_runtime_tint?: bool;
        /**
         * Only loaded if `layers` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpritePrototype.html#SpritePrototype.tint Online documentation}
         */
        tint?: Color;
        /**
         * Only loaded if `layers` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpritePrototype.html#SpritePrototype.blend_mode Online documentation}
         */
        blend_mode?: BlendMode;
        /**
         * Only loaded if `layers` is not defined.
         *
         * Minimal mode is entered when mod loading fails. You are in it when you see the gray box after (part of) the loading screen that tells you a mod error ({@linkplain https://cdn.discordapp.com/attachments/340530709712076801/532315796626472972/unknown.png Example}). Modders can ignore this property.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpritePrototype.html#SpritePrototype.load_in_minimal_mode Online documentation}
         */
        load_in_minimal_mode?: bool;
        /**
         * Only loaded if `layers` is not defined.
         *
         * Whether alpha should be pre-multiplied.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpritePrototype.html#SpritePrototype.premul_alpha Online documentation}
         */
        premul_alpha?: bool;
        /**
         * Only loaded if `layers` is not defined.
         *
         * Unused.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/SpritePrototype.html#SpritePrototype.generate_sdf Online documentation}
         */
        generate_sdf?: bool;
    }
    /**
     * Entity that sticks to another entity, and damages/slows it. Stickers can only be attached to {@link UnitPrototype}, {@link CharacterPrototype}, {@link CarPrototype} and {@link SpiderVehiclePrototype}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/StickerPrototype.html Online documentation}
     */
    export interface StickerPrototype extends EntityPrototype {
        /**
         * Must be > 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/StickerPrototype.html#StickerPrototype.duration_in_ticks Online documentation}
         */
        duration_in_ticks: uint32;
        animation?: Animation;
        /**
         * Interval between application of `damage_per_tick`, in ticks.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/StickerPrototype.html#StickerPrototype.damage_interval Online documentation}
         */
        damage_interval?: uint32;
        /**
         * If this is given, this sticker is considered a "fire sticker" for some functions, such as {@link BaseAttackParameters#fire_penalty BaseAttackParameters::fire_penalty} and {@link EntityPrototypeFlags#not_flammable EntityPrototypeFlags::not-flammable}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/StickerPrototype.html#StickerPrototype.spread_fire_entity Online documentation}
         */
        spread_fire_entity?: EntityID;
        fire_spread_cooldown?: uint8;
        fire_spread_radius?: float;
        stickers_per_square_meter?: float;
        force_visibility?: ForceCondition;
        single_particle?: bool;
        /**
         * Applied every `damage_interval` ticks, so may not necessarily be "per tick".
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/StickerPrototype.html#StickerPrototype.damage_per_tick Online documentation}
         */
        damage_per_tick?: DamagePrototype;
        /**
         * Less than 1 to reduce movement speed, more than 1 to increase it.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/StickerPrototype.html#StickerPrototype.target_movement_modifier Online documentation}
         */
        target_movement_modifier?: float;
        /**
         * The modifier value when the sticker is attached. It linearly changes over time to reach `target_movement_modifier_to`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/StickerPrototype.html#StickerPrototype.target_movement_modifier_from Online documentation}
         */
        target_movement_modifier_from?: float;
        /**
         * The modifier value when the sticker expires. It linearly changes over time starting from `target_movement_modifier_from`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/StickerPrototype.html#StickerPrototype.target_movement_modifier_to Online documentation}
         */
        target_movement_modifier_to?: float;
        /**
         * Less than 1 to reduce vehicle speed, more than 1 to increase it.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/StickerPrototype.html#StickerPrototype.vehicle_speed_modifier Online documentation}
         */
        vehicle_speed_modifier?: float;
        /**
         * Works similarly to `target_movement_modifier_from`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/StickerPrototype.html#StickerPrototype.vehicle_speed_modifier_from Online documentation}
         */
        vehicle_speed_modifier_from?: float;
        /**
         * Works similarly to `target_movement_modifier_to`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/StickerPrototype.html#StickerPrototype.vehicle_speed_modifier_to Online documentation}
         */
        vehicle_speed_modifier_to?: float;
        vehicle_friction_modifier?: float;
        /**
         * Works similarly to `target_movement_modifier_from`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/StickerPrototype.html#StickerPrototype.vehicle_friction_modifier_from Online documentation}
         */
        vehicle_friction_modifier_from?: float;
        /**
         * Works similarly to `target_movement_modifier_to`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/StickerPrototype.html#StickerPrototype.vehicle_friction_modifier_to Online documentation}
         */
        vehicle_friction_modifier_to?: float;
        /**
         * Using this property marks the sticker as a "selection sticker", meaning that the selection box will be rendered around the entity when the sticker is on it.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/StickerPrototype.html#StickerPrototype.selection_box_type Online documentation}
         */
        selection_box_type?: CursorBoxType;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/StickerPrototype.html#StickerPrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Storage_tank storage tank}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/StorageTankPrototype.html Online documentation}
     */
    export interface StorageTankPrototype extends EntityWithOwnerPrototype {
        fluid_box: FluidBox;
        /**
         * The location of the window showing the contents. Note that for `window_background` the width and height are determined by the sprite and window_bounding_box only determines the drawing location. For `fluid_background` the width is determined by the sprite and the height and drawing location are determined by window_bounding_box.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/StorageTankPrototype.html#StorageTankPrototype.window_bounding_box Online documentation}
         */
        window_bounding_box: BoundingBox;
        pictures: StorageTankPictures;
        /**
         * Must be positive.
         *
         * Used for determining the x position inside the `flow_sprite` when drawing the storage tank. Does not affect gameplay.
         *
         * The x position of the sprite will be `((game.tick % flow_length_in_ticks) ÷ flow_length_in_ticks) × (flow_sprite.width - 32)`. This means, that over `flow_length_in_ticks` ticks, the part of the `flow_sprite` that is drawn in-game is incrementally moved from most-left to most-right inside the actual sprite, that part always has a width of 32px. After `flow_length_in_ticks`, the part of the `flow_sprite` that is drawn will start from the left again.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/StorageTankPrototype.html#StorageTankPrototype.flow_length_in_ticks Online documentation}
         */
        flow_length_in_ticks: uint32;
        two_direction_only?: bool;
        circuit_wire_max_distance?: double;
        draw_copper_wires?: bool;
        draw_circuit_wires?: bool;
        /**
         * Mandatory if circuit_wire_max_distance  > 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/StorageTankPrototype.html#StorageTankPrototype.circuit_wire_connection_points Online documentation}
         */
        circuit_wire_connection_points?: readonly [
            WireConnectionPoint,
            WireConnectionPoint,
            WireConnectionPoint,
            WireConnectionPoint
        ];
        /**
         * Mandatory if circuit_wire_max_distance  > 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/StorageTankPrototype.html#StorageTankPrototype.circuit_connector_sprites Online documentation}
         */
        circuit_connector_sprites?: readonly [
            CircuitConnectorSprites,
            CircuitConnectorSprites,
            CircuitConnectorSprites,
            CircuitConnectorSprites
        ];
        /**
         * If the icons of fluids shown in alt-mode should be scaled to the storage tank's size.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/StorageTankPrototype.html#StorageTankPrototype.scale_info_icons Online documentation}
         */
        scale_info_icons?: bool;
    }
    /**
     * A straight rail.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/StraightRailPrototype.html Online documentation}
     */
    export interface StraightRailPrototype extends RailPrototype {
        bending_type?: "straight";
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
        /**
         * If this name ends with `-<number>`, that number is ignored for localization purposes. E.g. if the name is `technology-3`, the game looks for the `technology-name.technology` localization. The technology tree will also show the number on the technology icon.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TechnologyPrototype.html#TechnologyPrototype.name Online documentation}
         */
        name: string;
        /**
         * Can't be an empty array.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TechnologyPrototype.html#TechnologyPrototype.icons Online documentation}
         */
        icons?: readonly IconData[];
        /**
         * Path to the icon file.
         *
         * Mandatory if `icons` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TechnologyPrototype.html#TechnologyPrototype.icon Online documentation}
         */
        icon?: FileName;
        /**
         * The size of the square icon, in pixels, e.g. `32` for a 32px by 32px icon.
         *
         * Mandatory if `icons` is not defined, or if `icon_size` is not specified for all instances of `icons`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TechnologyPrototype.html#TechnologyPrototype.icon_size Online documentation}
         */
        icon_size?: SpriteSizeType;
        /**
         * Icons of reduced size will be used at decreased scale.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TechnologyPrototype.html#TechnologyPrototype.icon_mipmaps Online documentation}
         */
        icon_mipmaps?: IconMipMapType;
        /**
         * Can be set to `false` if the `expensive` property is defined. This will disable this difficulty, same as setting `enabled` to `false` would. If it's later manually enabled by script, it will use the data from `expensive`.
         *
         * If this property is not defined while `expensive` is, it will mirror its data.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TechnologyPrototype.html#TechnologyPrototype.normal Online documentation}
         */
        normal?: TechnologyData | false;
        /**
         * Can be set to `false` if the `normal` property is defined. This will disable this difficulty, same as setting `enabled` to `false` would. If it's later manually enabled by script, it will use the data from `normal`.
         *
         * If this property is not defined while `normal` is, it will mirror its data.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TechnologyPrototype.html#TechnologyPrototype.expensive Online documentation}
         */
        expensive?: TechnologyData | false;
        /**
         * When set to true, and the technology contains several levels, only the relevant one is displayed in the technology screen.
         *
         * Only loaded if neither `normal` nor `expensive` are defined.
         * @example
         * {
         *   type = "technology",
         *   name = "physical-projectile-damage-2",
         *   [...]
         *   upgrade = "true"
         * }
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TechnologyPrototype.html#TechnologyPrototype.upgrade Online documentation}
         */
        upgrade?: bool;
        /**
         * Only loaded if neither `normal` nor `expensive` are defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TechnologyPrototype.html#TechnologyPrototype.enabled Online documentation}
         */
        enabled?: bool;
        /**
         * Hides the technology from the tech screen.
         *
         * Only loaded if neither `normal` nor `expensive` are defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TechnologyPrototype.html#TechnologyPrototype.hidden Online documentation}
         */
        hidden?: bool;
        /**
         * Controls whether the technology is shown in the tech GUI when it is not `enabled`.
         *
         * Only loaded if neither `normal` nor `expensive` are defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TechnologyPrototype.html#TechnologyPrototype.visible_when_disabled Online documentation}
         */
        visible_when_disabled?: bool;
        /**
         * Controls whether the technology cost ignores the tech cost multiplier set in the {@link DifficultySettings}, e.g. `4` for the default expensive difficulty.
         *
         * Only loaded if neither `normal` nor `expensive` are defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TechnologyPrototype.html#TechnologyPrototype.ignore_tech_cost_multiplier Online documentation}
         */
        ignore_tech_cost_multiplier?: bool;
        /**
         * Determines the cost in items and time of the technology.
         *
         * Mandatory if neither `normal` nor `expensive` are defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TechnologyPrototype.html#TechnologyPrototype.unit Online documentation}
         */
        unit?: TechnologyUnit;
        /**
         * `"infinite"` for infinite technologies, otherwise `uint32`.
         *
         * Defaults to the same level as the technology, which is `0` for non-upgrades, and the level of the upgrade for upgrades.
         *
         * Only loaded if neither `normal` nor `expensive` are defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TechnologyPrototype.html#TechnologyPrototype.max_level Online documentation}
         */
        max_level?: uint32 | "infinite";
        /**
         * List of technologies needed to be researched before this one can be researched.
         *
         * Only loaded if neither `normal` nor `expensive` are defined.
         * @example
         * prerequisites = {"explosives", "military-2"}
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TechnologyPrototype.html#TechnologyPrototype.prerequisites Online documentation}
         */
        prerequisites?: readonly TechnologyID[];
        /**
         * List of effects of the technology (applied when the technology is researched).
         *
         * Only loaded if neither `normal` nor `expensive` are defined.
         * @example
         * {
         *   {
         *     type  = "unlock-recipe",
         *     recipe = "land-mine"
         *   }
         * }
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TechnologyPrototype.html#TechnologyPrototype.effects Online documentation}
         */
        effects?: readonly Modifier[];
    }
    /**
     * Used to define the parameters for the water shader.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TileEffectDefinition.html Online documentation}
     */
    export interface TileEffectDefinition {
        type: "tile-effect";
        /**
         * Name of the tile-effect. Base game uses "water".
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TileEffectDefinition.html#TileEffectDefinition.name Online documentation}
         */
        name: string;
        specular_lightness: Color;
        foam_color: Color;
        foam_color_multiplier: float;
        tick_scale: float;
        animation_speed: float;
        animation_scale: float | readonly [
            float,
            float
        ];
        dark_threshold: float | readonly [
            float,
            float
        ];
        reflection_threshold: float | readonly [
            float,
            float
        ];
        specular_threshold: float | readonly [
            float,
            float
        ];
        /**
         * Sprite size must be 512x512.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TileEffectDefinition.html#TileEffectDefinition.texture Online documentation}
         */
        texture: Sprite;
        near_zoom?: float;
        far_zoom?: float;
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
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TileGhostPrototype.html#TileGhostPrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Tile tile}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TilePrototype.html Online documentation}
     */
    export interface TilePrototype extends PrototypeBase {
        collision_mask: CollisionMask;
        /**
         * Specifies transition drawing priority.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TilePrototype.html#TilePrototype.layer Online documentation}
         */
        layer: uint8;
        /**
         * Graphics for this tile.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TilePrototype.html#TilePrototype.variants Online documentation}
         */
        variants: TileTransitionsVariants;
        map_color: Color;
        /**
         * Emissions absorbed per second by this tile. Use a negative value if pollution is created instead of removed.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TilePrototype.html#TilePrototype.pollution_absorption_per_second Online documentation}
         */
        pollution_absorption_per_second: double;
        /**
         * Can't be an empty array. If this and `icon` is not set, the `material_background` in `variants` is used as the icon.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TilePrototype.html#TilePrototype.icons Online documentation}
         */
        icons?: readonly IconData[];
        /**
         * Path to the icon file. If this and `icon` is not set, the `material_background` in `variants` is used as the icon.
         *
         * Only loaded if `icons` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TilePrototype.html#TilePrototype.icon Online documentation}
         */
        icon?: FileName;
        /**
         * The size of the square icon, in pixels, e.g. `32` for a 32px by 32px icon.
         *
         * Only loaded if `icons` is not defined, or if `icon_size` is not specified for all instances of `icons`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TilePrototype.html#TilePrototype.icon_size Online documentation}
         */
        icon_size?: SpriteSizeType;
        /**
         * Icons of reduced size will be used at decreased scale.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TilePrototype.html#TilePrototype.icon_mipmaps Online documentation}
         */
        icon_mipmaps?: IconMipMapType;
        transition_overlay_layer_offset?: uint8;
        layer_group?: TileRenderLayer;
        /**
         * Used only for the `layer_group` default, see above.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TilePrototype.html#TilePrototype.draw_in_water_layer Online documentation}
         */
        draw_in_water_layer?: bool;
        transition_merges_with_tile?: TileID;
        effect_color?: Color;
        tint?: Color;
        walking_sound?: Sound;
        /**
         * If this is loaded as one Sound, it is loaded as the "small" build sound.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TilePrototype.html#TilePrototype.build_sound Online documentation}
         */
        build_sound?: Sound | TileBuildSound;
        mined_sound?: Sound;
        walking_speed_modifier?: double;
        vehicle_friction_modifier?: double;
        decorative_removal_probability?: float;
        /**
         * Array of tile names that are allowed next to this one.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TilePrototype.html#TilePrototype.allowed_neighbors Online documentation}
         */
        allowed_neighbors?: readonly TileID[];
        needs_correction?: bool;
        /**
         * If you want the tile to not be mineable, don't specify the minable property. Only non-mineable tiles become hidden tiles when placing mineable tiles on top of them.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TilePrototype.html#TilePrototype.minable Online documentation}
         */
        minable?: MinableProperties;
        next_direction?: TileID;
        can_be_part_of_blueprint?: bool;
        /**
         * Name of a {@link TileEffectDefinition}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TilePrototype.html#TilePrototype.effect Online documentation}
         */
        effect?: string;
        /**
         * Called by {@link InvokeTileEffectTriggerEffectItem}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TilePrototype.html#TilePrototype.trigger_effect Online documentation}
         */
        trigger_effect?: TriggerEffect;
        scorch_mark_color?: Color;
        /**
         * If set to true, the game will check for collisions with entities before building or mining the tile. If entities are in the way it is not possible to mine/build the tile.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TilePrototype.html#TilePrototype.check_collision_with_entities Online documentation}
         */
        check_collision_with_entities?: bool;
        /**
         * Used by the {@linkplain https://wiki.factorio.com/Pollution pollution} shader.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TilePrototype.html#TilePrototype.effect_color_secondary Online documentation}
         */
        effect_color_secondary?: Color;
        effect_is_opaque?: bool;
        /**
         * Extra transitions.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TilePrototype.html#TilePrototype.transitions Online documentation}
         */
        transitions?: readonly TileTransitionsToTiles[];
        transitions_between_transitions?: readonly TileTransitionsBetweenTransitions[];
        autoplace?: AutoplaceSpecification;
        placeable_by?: ItemToPlace | readonly ItemToPlace[];
    }
    /**
     * A tips and tricks entry.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TipsAndTricksItem.html Online documentation}
     */
    export interface TipsAndTricksItem extends PrototypeBase {
        image?: FileName;
        simulation?: SimulationDefinition;
        /**
         * String to add in front of the tips and trick entries name. Can be anything, the base game tends to use {@linkplain https://wiki.factorio.com/Rich_text rich text} tags for items, e.g. `[item=wooden-chest]` here.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TipsAndTricksItem.html#TipsAndTricksItem.tag Online documentation}
         */
        tag?: string;
        /**
         * Name of a {@link TipsAndTricksItemCategory}, used for the sorting of this tips and tricks entry. Tips and trick entries are sorted first by category and then by their `order` within that category.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TipsAndTricksItem.html#TipsAndTricksItem.category Online documentation}
         */
        category?: string;
        /**
         * The tips and tricks entry is indented by `indent`×6 spaces.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TipsAndTricksItem.html#TipsAndTricksItem.indent Online documentation}
         */
        indent?: uint8;
        /**
         * Whether the tip title on the left in the tips and tricks GUI should use the "title_tip_item" style (semi bold font).
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TipsAndTricksItem.html#TipsAndTricksItem.is_title Online documentation}
         */
        is_title?: bool;
        /**
         * Condition for when the tip notification should be shown to the player.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TipsAndTricksItem.html#TipsAndTricksItem.trigger Online documentation}
         */
        trigger?: TipTrigger;
        /**
         * Condition for never showing the tip notification to the player.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TipsAndTricksItem.html#TipsAndTricksItem.skip_trigger Online documentation}
         */
        skip_trigger?: TipTrigger;
        /**
         * Name of a {@link TutorialDefinition}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TipsAndTricksItem.html#TipsAndTricksItem.tutorial Online documentation}
         */
        tutorial?: string;
        starting_status?: TipStatus;
        /**
         * An array of names of other tips and tricks items. This tips and tricks entry is only shown to the player once they have marked all dependencies as read.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TipsAndTricksItem.html#TipsAndTricksItem.dependencies Online documentation}
         */
        dependencies?: readonly string[];
        player_input_method_filter?: PlayerInputMethodFilter;
    }
    /**
     * A {@link TipsAndTricksItem} category, used for sorting of tips and tricks entries: Tips and trick entries are sorted first by category and then by their order within that category.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TipsAndTricksItemCategory.html Online documentation}
     */
    export interface TipsAndTricksItemCategory {
        type: "tips-and-tricks-item-category";
        name: string;
        /**
         * Tips and trick categories are sorted by `order`, and then the tips and tips entries are sorted by their own order within those categories.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TipsAndTricksItemCategory.html#TipsAndTricksItemCategory.order Online documentation}
         */
        order: Order;
    }
    /**
     * Items with a "durability". Used for {@linkplain https://wiki.factorio.com/Science_pack science packs}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ToolPrototype.html Online documentation}
     */
    export interface ToolPrototype extends OmitType<ItemPrototype> {
        /**
         * The durability of this tool. Must be positive. Mandatory if <code>infinite</code> is false. Ignored if <code>infinite</code> is true.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ToolPrototype.html#ToolPrototype.durability Online documentation}
         */
        durability?: double;
        /**
         * May not be longer than 200 characters.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ToolPrototype.html#ToolPrototype.durability_description_key Online documentation}
         */
        durability_description_key?: string;
        /**
         * May not be longer than 200 characters.
         *
         * In-game, the game provides the locale with three {@linkplain https://wiki.factorio.com/Tutorial:Localisation#Localising_with_parameters parameters}:
         *
         * `__1__`: remaining durability
         *
         * `__2__`: total durability
         *
         * `__3__`: durability as a percentage
         *
         * So when a locale key that has the following translation
         *
         * `Remaining durability is __1__ out of __2__ which is __3__ %`
         *
         * is applied to a tool with 2 remaining durability out of 8 it will be displayed as
         *
         * `Remaining durability is 2 out of 8 which is 25 %`
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ToolPrototype.html#ToolPrototype.durability_description_value Online documentation}
         */
        durability_description_value?: string;
        /**
         * Whether this tool has infinite durability. If this is false, <code>durability</code> must be specified.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/ToolPrototype.html#ToolPrototype.infinite Online documentation}
         */
        infinite?: bool;
    }
    /**
     * This prototype is used for receiving an achievement when the player has a specified train path length.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TrainPathAchievementPrototype.html Online documentation}
     */
    export interface TrainPathAchievementPrototype extends OmitType<AchievementPrototype> {
        /**
         * The achievement will trigger if a train path is longer than this.
         * @example
         * amount = 1000
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TrainPathAchievementPrototype.html#TrainPathAchievementPrototype.minimum_distance Online documentation}
         */
        minimum_distance: double;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Train_stop train stop}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TrainStopPrototype.html Online documentation}
     */
    export interface TrainStopPrototype extends EntityWithOwnerPrototype {
        animation_ticks_per_frame: uint32;
        rail_overlay_animations?: Animation4Way;
        animations?: Animation4Way;
        top_animations?: Animation4Way;
        default_train_stopped_signal?: SignalIDConnector;
        default_trains_count_signal?: SignalIDConnector;
        default_trains_limit_signal?: SignalIDConnector;
        circuit_wire_max_distance?: double;
        draw_copper_wires?: bool;
        draw_circuit_wires?: bool;
        color?: Color;
        chart_name?: bool;
        light1?: TrainStopLight;
        light2?: TrainStopLight;
        drawing_boxes?: TrainStopDrawingBoxes;
        /**
         * Mandatory if circuit_wire_max_distance > 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TrainStopPrototype.html#TrainStopPrototype.circuit_wire_connection_points Online documentation}
         */
        circuit_wire_connection_points?: readonly [
            WireConnectionPoint,
            WireConnectionPoint,
            WireConnectionPoint,
            WireConnectionPoint
        ];
        /**
         * Mandatory if circuit_wire_max_distance > 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TrainStopPrototype.html#TrainStopPrototype.circuit_connector_sprites Online documentation}
         */
        circuit_connector_sprites?: readonly [
            CircuitConnectorSprites,
            CircuitConnectorSprites,
            CircuitConnectorSprites,
            CircuitConnectorSprites
        ];
        /**
         * Has to be 2 for 2x2 grid.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TrainStopPrototype.html#TrainStopPrototype.build_grid_size Online documentation}
         */
        build_grid_size?: 2;
    }
    /**
     * Abstract class that anything that is a belt or can connect to belts uses.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TransportBeltConnectablePrototype.html Online documentation}
     */
    export interface TransportBeltConnectablePrototype extends EntityWithOwnerPrototype {
        /**
         * The speed of the belt: `speed × 480 = x Items/second`.
         *
         * The raw value is expressed as the number of tiles traveled by each item on the belt per tick, relative to the belt's maximum density - e.g. `x items/second ÷ (4 items/lane × 2 lanes/belt × 60 ticks/second) = <speed> belts/tick` where a "belt" is the size of one tile. See {@linkplain https://wiki.factorio.com/Transport_belts/Physics Transport_belts/Physics} for more details.
         *
         * Must be a positive non-infinite number. The number is a fixed point number with 8 bits reserved for decimal precision, meaning the smallest value step is `1/2^8 = 0.00390625`. In the simple case of a non-curved belt, the rate is multiples of `1.875` items/s, even though the entity tooltip may show a different rate.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TransportBeltConnectablePrototype.html#TransportBeltConnectablePrototype.speed Online documentation}
         */
        speed: double;
        animation_speed_coefficient?: double;
        /**
         * This is the preferred way to specify transport belt animations.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TransportBeltConnectablePrototype.html#TransportBeltConnectablePrototype.belt_animation_set Online documentation}
         */
        belt_animation_set?: TransportBeltAnimationSet;
        /**
         * Mandatory if `belt_animation_set` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TransportBeltConnectablePrototype.html#TransportBeltConnectablePrototype.belt_horizontal Online documentation}
         */
        belt_horizontal?: Animation;
        /**
         * Mandatory if `belt_animation_set` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TransportBeltConnectablePrototype.html#TransportBeltConnectablePrototype.belt_vertical Online documentation}
         */
        belt_vertical?: Animation;
        /**
         * Mandatory if `belt_animation_set` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TransportBeltConnectablePrototype.html#TransportBeltConnectablePrototype.ending_top Online documentation}
         */
        ending_top?: Animation;
        /**
         * Mandatory if `belt_animation_set` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TransportBeltConnectablePrototype.html#TransportBeltConnectablePrototype.ending_bottom Online documentation}
         */
        ending_bottom?: Animation;
        /**
         * Mandatory if `belt_animation_set` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TransportBeltConnectablePrototype.html#TransportBeltConnectablePrototype.ending_side Online documentation}
         */
        ending_side?: Animation;
        /**
         * Mandatory if `belt_animation_set` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TransportBeltConnectablePrototype.html#TransportBeltConnectablePrototype.starting_top Online documentation}
         */
        starting_top?: Animation;
        /**
         * Mandatory if `belt_animation_set` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TransportBeltConnectablePrototype.html#TransportBeltConnectablePrototype.starting_bottom Online documentation}
         */
        starting_bottom?: Animation;
        /**
         * Mandatory if `belt_animation_set` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TransportBeltConnectablePrototype.html#TransportBeltConnectablePrototype.starting_side Online documentation}
         */
        starting_side?: Animation;
        /**
         * Mandatory if `belt_animation_set` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TransportBeltConnectablePrototype.html#TransportBeltConnectablePrototype.ending_patch Online documentation}
         */
        ending_patch?: Sprite4Way;
        ends_with_stopper?: bool;
        /**
         * Transport belt connectable entities must collide with "transport-belt-layer". Transport belt connectable entities must have collision_mask that collides with itself. Transport belt connectable entities cannot have collision mask that collides only with tiles (must collide with entities in some way).
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TransportBeltConnectablePrototype.html#TransportBeltConnectablePrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
        /**
         * Transport belt connectable entities must have {@link EntityPrototype#collision_box collision_box} of an appropriate minimal size, they should occupy more than half of every tile the entity covers.
         * @example
         * collision_box = {{-0.4, -0.4}, {0.4, 0.4}}
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TransportBeltConnectablePrototype.html#TransportBeltConnectablePrototype.collision_box Online documentation}
         */
        collision_box?: BoundingBox;
        /**
         * Transport belt connectable entities cannot have the "placeable-off-grid" flag specified.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TransportBeltConnectablePrototype.html#TransportBeltConnectablePrototype.flags Online documentation}
         */
        flags?: EntityPrototypeFlags;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Transport_belt transport belt}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TransportBeltPrototype.html Online documentation}
     */
    export interface TransportBeltPrototype extends TransportBeltConnectablePrototype {
        connector_frame_sprites: TransportBeltConnectorFrame;
        /**
         * The maximum circuit wire distance for this entity.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TransportBeltPrototype.html#TransportBeltPrototype.circuit_wire_max_distance Online documentation}
         */
        circuit_wire_max_distance?: double;
        draw_copper_wires?: bool;
        draw_circuit_wires?: bool;
        /**
         * Defines how wires visually connect to this transport belt.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TransportBeltPrototype.html#TransportBeltPrototype.circuit_wire_connection_point Online documentation}
         */
        circuit_wire_connection_point?: readonly WireConnectionPoint[];
        /**
         * The pictures displayed for circuit connections to this transport belt.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TransportBeltPrototype.html#TransportBeltPrototype.circuit_connector_sprites Online documentation}
         */
        circuit_connector_sprites?: readonly CircuitConnectorSprites[];
        /**
         * This is the preferred way to specify transport belt animations.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TransportBeltPrototype.html#TransportBeltPrototype.belt_animation_set Online documentation}
         */
        belt_animation_set?: TransportBeltAnimationSetWithCorners;
        /**
         * Mandatory if `belt_animation_set` is not defined.
         *
         * Transport belts must have 12 animations.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TransportBeltPrototype.html#TransportBeltPrototype.animations Online documentation}
         */
        animations?: RotatedAnimation;
        /**
         * The name of the {@link UndergroundBeltPrototype} which is used in quick-replace fashion when the smart belt dragging behavior is triggered.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TransportBeltPrototype.html#TransportBeltPrototype.related_underground_belt Online documentation}
         */
        related_underground_belt?: EntityID;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TransportBeltPrototype.html#TransportBeltPrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Tree tree}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TreePrototype.html Online documentation}
     */
    export interface TreePrototype extends EntityWithHealthPrototype {
        variation_weights?: readonly float[];
        darkness_of_burnt_tree?: float;
        /**
         * Mandatory if `variations` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TreePrototype.html#TreePrototype.pictures Online documentation}
         */
        pictures?: SpriteVariations;
        /**
         * Can't be empty.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TreePrototype.html#TreePrototype.variations Online documentation}
         */
        variations?: readonly TreeVariation[];
        /**
         * Mandatory if `variations` is defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TreePrototype.html#TreePrototype.colors Online documentation}
         */
        colors?: readonly Color[];
        /**
         * The amount of health automatically regenerated. Trees will regenerate every 60 ticks with `healing_per_tick × 60`.
         * @example
         * healing_per_tick = 0.01
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TreePrototype.html#TreePrototype.healing_per_tick Online documentation}
         */
        healing_per_tick?: float;
    }
    /**
     * The base game always internally defines a "common" trigger target type. See {@linkplain https://forums.factorio.com/71657 Design discussion: Trigger target type}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TriggerTargetType.html Online documentation}
     */
    export interface TriggerTargetType {
        type: "trigger-target-type";
        name: string;
    }
    /**
     * Smoke, but it's not an entity for optimization purposes.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TrivialSmokePrototype.html Online documentation}
     */
    export interface TrivialSmokePrototype extends PrototypeBase {
        animation: Animation;
        /**
         * Can't be 0 - the smoke will never render.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TrivialSmokePrototype.html#TrivialSmokePrototype.duration Online documentation}
         */
        duration: uint32;
        glow_animation?: Animation;
        color?: Color;
        start_scale?: double;
        end_scale?: double;
        /**
         * Value between 0 and 1, with 1 being no slowdown and 0 being no movement.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TrivialSmokePrototype.html#TrivialSmokePrototype.movement_slow_down_factor Online documentation}
         */
        movement_slow_down_factor?: double;
        spread_duration?: uint32;
        /**
         * `fade_in_duration` + `fade_away_duration` must be <= `duration`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TrivialSmokePrototype.html#TrivialSmokePrototype.fade_away_duration Online documentation}
         */
        fade_away_duration?: uint32;
        /**
         * `fade_in_duration` + `fade_away_duration` must be <= `duration`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TrivialSmokePrototype.html#TrivialSmokePrototype.fade_in_duration Online documentation}
         */
        fade_in_duration?: uint32;
        glow_fade_away_duration?: uint32;
        cyclic?: bool;
        /**
         * Smoke always moves randomly unless `movement_slow_down_factor` is 0. If `affected_by_wind` is true, the smoke will also be moved by wind.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TrivialSmokePrototype.html#TrivialSmokePrototype.affected_by_wind Online documentation}
         */
        affected_by_wind?: bool;
        show_when_smoke_off?: bool;
        render_layer?: RenderLayer;
    }
    /**
     * A turret that needs no extra ammunition. See the children for turrets that need some kind of ammunition.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TurretPrototype.html Online documentation}
     */
    export interface TurretPrototype extends EntityWithOwnerPrototype {
        /**
         * Requires ammo_type in attack_parameters unless this is a {@link AmmoTurretPrototype}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TurretPrototype.html#TurretPrototype.attack_parameters Online documentation}
         */
        attack_parameters: AttackParameters;
        folded_animation: RotatedAnimation4Way;
        call_for_help_radius: double;
        /**
         * Specifies the name of the {@link CorpsePrototype} to be used when this entity dies.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TurretPrototype.html#TurretPrototype.corpse Online documentation}
         */
        corpse?: EntityID;
        attack_target_mask?: TriggerTargetMask;
        ignore_target_mask?: TriggerTargetMask;
        shoot_in_prepare_state?: bool;
        turret_base_has_direction?: bool;
        random_animation_offset?: bool;
        /**
         * Whether the secondary (animation) speeds should always be used.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TurretPrototype.html#TurretPrototype.secondary_animation Online documentation}
         */
        secondary_animation?: bool;
        attack_from_start_frame?: bool;
        allow_turning_when_starting_attack?: bool;
        base_picture_secondary_draw_order?: uint8;
        gun_animation_secondary_draw_order?: uint8;
        base_picture_render_layer?: RenderLayer;
        gun_animation_render_layer?: RenderLayer;
        base_picture?: Animation4Way;
        preparing_animation?: RotatedAnimation4Way;
        prepared_animation?: RotatedAnimation4Way;
        prepared_alternative_animation?: RotatedAnimation4Way;
        starting_attack_animation?: RotatedAnimation4Way;
        attacking_animation?: RotatedAnimation4Way;
        energy_glow_animation?: RotatedAnimation4Way;
        ending_attack_animation?: RotatedAnimation4Way;
        folding_animation?: RotatedAnimation4Way;
        integration?: Sprite;
        /**
         * The intensity of light in the form of `energy_glow_animation` drawn on top of `energy_glow_animation`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TurretPrototype.html#TurretPrototype.glow_light_intensity Online documentation}
         */
        glow_light_intensity?: float;
        /**
         * The range of the flickering of the alpha of `energy_glow_animation`. Default is range 0.2, so animation alpha can be anywhere between 0.8 and 1.0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TurretPrototype.html#TurretPrototype.energy_glow_animation_flicker_strength Online documentation}
         */
        energy_glow_animation_flicker_strength?: float;
        starting_attack_sound?: Sound;
        dying_sound?: Sound;
        preparing_sound?: Sound;
        folding_sound?: Sound;
        prepared_sound?: Sound;
        prepared_alternative_sound?: Sound;
        rotation_speed?: float;
        /**
         * Controls the speed of the preparing_animation: `1 ÷ preparing_speed = duration of the preparing_animation`
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TurretPrototype.html#TurretPrototype.preparing_speed Online documentation}
         */
        preparing_speed?: float;
        /**
         * It's randomized whether a particular turret uses the primary or the secondary speed for its animations.
         *
         * Controls the speed of the folded_animation: `1 ÷ folded_speed = duration of the folded_animation`
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TurretPrototype.html#TurretPrototype.folded_speed Online documentation}
         */
        folded_speed?: float;
        /**
         * It's randomized whether a particular turret uses the primary or the secondary speed for its animations.
         *
         * Controls the speed of the folded_animation: `1 ÷ folded_speed_secondary = duration of the folded_animation`
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TurretPrototype.html#TurretPrototype.folded_speed_secondary Online documentation}
         */
        folded_speed_secondary?: float;
        /**
         * It's randomized whether a particular turret uses the primary or the secondary speed for its animations.
         *
         * Controls the speed of the prepared_animation: `1 ÷ prepared_speed = duration of the prepared_animation`
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TurretPrototype.html#TurretPrototype.prepared_speed Online documentation}
         */
        prepared_speed?: float;
        /**
         * It's randomized whether a particular turret uses the primary or the secondary speed for its animations.
         *
         * Controls the speed of the prepared_animation: `1 ÷ prepared_speed_secondary = duration of the prepared_animation`
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TurretPrototype.html#TurretPrototype.prepared_speed_secondary Online documentation}
         */
        prepared_speed_secondary?: float;
        /**
         * It's randomized whether a particular turret uses the primary or the secondary speed for its animations.
         *
         * Controls the speed of the prepared_alternative_animation: `1 ÷ prepared_alternative_speed = duration of the prepared_alternative_animation`
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TurretPrototype.html#TurretPrototype.prepared_alternative_speed Online documentation}
         */
        prepared_alternative_speed?: float;
        /**
         * It's randomized whether a particular turret uses the primary or the secondary speed for its animations.
         *
         * Controls the speed of the prepared_alternative_animation: `1 ÷ prepared_alternative_speed_secondary = duration of the prepared_alternative_animation`
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TurretPrototype.html#TurretPrototype.prepared_alternative_speed_secondary Online documentation}
         */
        prepared_alternative_speed_secondary?: float;
        /**
         * The chance for `prepared_alternative_animation` to be used.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TurretPrototype.html#TurretPrototype.prepared_alternative_chance Online documentation}
         */
        prepared_alternative_chance?: float;
        /**
         * Controls the speed of the starting_attack_animation: `1 ÷ starting_attack_speed = duration of the starting_attack_animation`
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TurretPrototype.html#TurretPrototype.starting_attack_speed Online documentation}
         */
        starting_attack_speed?: float;
        /**
         * Controls the speed of the attacking_animation: `1 ÷ attacking_speed = duration of the attacking_animation`
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TurretPrototype.html#TurretPrototype.attacking_speed Online documentation}
         */
        attacking_speed?: float;
        /**
         * Controls the speed of the ending_attack_animation: `1 ÷ ending_attack_speed = duration of the ending_attack_animation`
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TurretPrototype.html#TurretPrototype.ending_attack_speed Online documentation}
         */
        ending_attack_speed?: float;
        /**
         * Controls the speed of the folding_animation: `1 ÷ folding_speed = duration of the folding_animation`
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TurretPrototype.html#TurretPrototype.folding_speed Online documentation}
         */
        folding_speed?: float;
        prepare_range?: double;
        alert_when_attacking?: bool;
        /**
         * Whether `spawn_decoration` should be spawned when this turret is created through {@linkplain https://wiki.factorio.com/Enemies#Expansions enemy expansion}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TurretPrototype.html#TurretPrototype.spawn_decorations_on_expansion Online documentation}
         */
        spawn_decorations_on_expansion?: bool;
        /**
         * Decoratives to be created when the spawner is created by the {@linkplain https://wiki.factorio.com/Map_generator map generator}. Placed when enemies expand if `spawn_decorations_on_expansion` is set to true.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TurretPrototype.html#TurretPrototype.spawn_decoration Online documentation}
         */
        spawn_decoration?: CreateDecorativesTriggerEffectItem | readonly CreateDecorativesTriggerEffectItem[];
        /**
         * Whether this prototype should be a high priority target for enemy forces. See {@linkplain https://wiki.factorio.com/Military_units_and_structures Military units and structures}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TurretPrototype.html#TurretPrototype.is_military_target Online documentation}
         */
        is_military_target?: bool;
    }
    /**
     * The definition of the tutorial to be used in the tips and tricks, see {@link TipsAndTricksItem}. The actual tutorial code is defined in the tutorials folder, in the folder that has the name of the scenario property.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TutorialDefinition.html Online documentation}
     */
    export interface TutorialDefinition extends PrototypeBase {
        /**
         * Name of the folder for this tutorial in the tutorials folder.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/TutorialDefinition.html#TutorialDefinition.scenario Online documentation}
         */
        scenario: string;
    }
    /**
     * An {@linkplain https://wiki.factorio.com/Underground_belt underground belt}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UndergroundBeltPrototype.html Online documentation}
     */
    export interface UndergroundBeltPrototype extends TransportBeltConnectablePrototype {
        max_distance: uint8;
        structure: UndergroundBeltStructure;
        underground_sprite: Sprite;
        underground_remove_belts_sprite?: Sprite;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UndergroundBeltPrototype.html#UndergroundBeltPrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * Entity that moves around and attacks players, for example {@linkplain https://wiki.factorio.com/Enemies#Creatures biters and spitters}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UnitPrototype.html Online documentation}
     */
    export interface UnitPrototype extends EntityWithOwnerPrototype {
        run_animation: RotatedAnimation;
        /**
         * Requires animation in attack_parameters. Requires ammo_type in attack_parameters.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UnitPrototype.html#UnitPrototype.attack_parameters Online documentation}
         */
        attack_parameters: AttackParameters;
        /**
         * Movement speed of the unit in the world, in tiles per tick. Must be equal to or greater than 0.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UnitPrototype.html#UnitPrototype.movement_speed Online documentation}
         */
        movement_speed: float;
        /**
         * How fast the `run_animation` frames are advanced. The animations are advanced animation_speed frames per `distance_per_frame` that the unit moves.
         *
         * `frames_advanced = (distance_moved ÷ distance_per_frame) * animation_speed`
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UnitPrototype.html#UnitPrototype.distance_per_frame Online documentation}
         */
        distance_per_frame: float;
        /**
         * The amount of pollution that has to be absorbed by the unit's spawner before the unit will leave the spawner and attack the source of the pollution.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UnitPrototype.html#UnitPrototype.pollution_to_join_attack Online documentation}
         */
        pollution_to_join_attack: float;
        distraction_cooldown: uint32;
        /**
         * Max is 100.
         *
         * Note: Setting to 50 or above can lead to undocumented behavior of individual units creating groups on their own when attacking or being attacked.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UnitPrototype.html#UnitPrototype.vision_distance Online documentation}
         */
        vision_distance: double;
        rotation_speed?: float;
        /**
         * The sound file to play when entity dies.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UnitPrototype.html#UnitPrototype.dying_sound Online documentation}
         */
        dying_sound?: Sound;
        /**
         * In ticks.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UnitPrototype.html#UnitPrototype.min_pursue_time Online documentation}
         */
        min_pursue_time?: uint32;
        /**
         * If the unit is immune to movement by belts.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UnitPrototype.html#UnitPrototype.has_belt_immunity Online documentation}
         */
        has_belt_immunity?: bool;
        spawning_time_modifier?: double;
        max_pursue_distance?: double;
        radar_range?: uint32;
        ai_settings?: UnitAISettings;
        move_while_shooting?: bool;
        can_open_gates?: bool;
        affected_by_tiles?: bool;
        render_layer?: RenderLayer;
        light?: LightDefinition;
        walking_sound?: Sound;
        alternative_attacking_frame_sequence?: UnitAlternativeFrameSequence;
        /**
         * Only loaded if `walking_sound` is defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UnitPrototype.html#UnitPrototype.running_sound_animation_positions Online documentation}
         */
        running_sound_animation_positions?: readonly float[];
        /**
         * Whether this prototype should be a high priority target for enemy forces. See {@linkplain https://wiki.factorio.com/Military_units_and_structures Military units and structures}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UnitPrototype.html#UnitPrototype.is_military_target Online documentation}
         */
        is_military_target?: true;
        /**
         * If this is true, this entities `is_military_target property` can be changed runtime (on the entity, not on the prototype itself).
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UnitPrototype.html#UnitPrototype.allow_run_time_change_of_is_military_target Online documentation}
         */
        allow_run_time_change_of_is_military_target?: false;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UnitPrototype.html#UnitPrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * An {@linkplain https://wiki.factorio.com/Upgrade_planner upgrade planner}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UpgradeItemPrototype.html Online documentation}
     */
    export interface UpgradeItemPrototype extends OmitType<SelectionToolPrototype> {
        /**
         * Can't be > 255.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UpgradeItemPrototype.html#UpgradeItemPrototype.mapper_count Online documentation}
         */
        mapper_count?: ItemStackIndex;
        /**
         * Count of items of the same name that can be stored in one inventory slot. Must be 1 when the `"not-stackable"` flag is set.
         * @example
         * stack_size = 1
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UpgradeItemPrototype.html#UpgradeItemPrototype.stack_size Online documentation}
         */
        stack_size: 1;
        /**
         * This property is hardcoded to `"upgrade"`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UpgradeItemPrototype.html#UpgradeItemPrototype.selection_mode Online documentation}
         */
        selection_mode?: SelectionModeFlags;
        /**
         * This property is hardcoded to `"cancel-upgrade"`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UpgradeItemPrototype.html#UpgradeItemPrototype.alt_selection_mode Online documentation}
         */
        alt_selection_mode?: SelectionModeFlags;
        /**
         * This property is hardcoded to `false`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UpgradeItemPrototype.html#UpgradeItemPrototype.always_include_tiles Online documentation}
         */
        always_include_tiles?: bool;
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UpgradeItemPrototype.html#UpgradeItemPrototype.entity_filters Online documentation}
         */
        entity_filters?: readonly EntityID[];
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UpgradeItemPrototype.html#UpgradeItemPrototype.alt_entity_filters Online documentation}
         */
        alt_entity_filters?: readonly EntityID[];
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UpgradeItemPrototype.html#UpgradeItemPrototype.entity_type_filters Online documentation}
         */
        entity_type_filters?: readonly string[];
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UpgradeItemPrototype.html#UpgradeItemPrototype.alt_entity_type_filters Online documentation}
         */
        alt_entity_type_filters?: readonly string[];
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UpgradeItemPrototype.html#UpgradeItemPrototype.tile_filters Online documentation}
         */
        tile_filters?: readonly TileID[];
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UpgradeItemPrototype.html#UpgradeItemPrototype.alt_tile_filters Online documentation}
         */
        alt_tile_filters?: readonly TileID[];
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UpgradeItemPrototype.html#UpgradeItemPrototype.entity_filter_mode Online documentation}
         */
        entity_filter_mode?: "whitelist" | "blacklist";
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UpgradeItemPrototype.html#UpgradeItemPrototype.alt_entity_filter_mode Online documentation}
         */
        alt_entity_filter_mode?: "whitelist" | "blacklist";
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UpgradeItemPrototype.html#UpgradeItemPrototype.tile_filter_mode Online documentation}
         */
        tile_filter_mode?: "whitelist" | "blacklist";
        /**
         * This property is parsed, but then ignored.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UpgradeItemPrototype.html#UpgradeItemPrototype.alt_tile_filter_mode Online documentation}
         */
        alt_tile_filter_mode?: "whitelist" | "blacklist";
    }
    /**
     * Constants used by the game that are not specific to certain prototypes. See {@linkplain https://github.com/wube/factorio-data/blob/master/core/prototypes/utility-constants.lua utility-constants.lua} for the values used by the base game.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UtilityConstants.html Online documentation}
     */
    export interface UtilityConstants extends PrototypeBase {
        entity_button_background_color: Color;
        building_buildable_too_far_tint: Color;
        building_buildable_tint: Color;
        building_not_buildable_tint: Color;
        building_ignorable_tint: Color;
        building_no_tint: Color;
        ghost_tint: Color;
        tile_ghost_tint: Color;
        equipment_default_background_color: Color;
        equipment_default_background_border_color: Color;
        equipment_default_grabbed_background_color: Color;
        turret_range_visualization_color: Color;
        capsule_range_visualization_color: Color;
        artillery_range_visualization_color: Color;
        train_no_path_color: Color;
        train_destination_full_color: Color;
        /**
         * Chart = map + minimap.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UtilityConstants.html#UtilityConstants.chart Online documentation}
         */
        chart: ChartUtilityConstants;
        gui_remark_color: Color;
        default_player_force_color: Color;
        default_enemy_force_color: Color;
        default_other_force_color: Color;
        deconstruct_mark_tint: Color;
        rail_planner_count_button_color: Color;
        count_button_size: int32;
        zoom_to_world_can_use_nightvision: bool;
        zoom_to_world_effect_strength: float;
        max_terrain_building_size: uint8;
        small_area_size: float;
        medium_area_size: float;
        small_blueprint_area_size: float;
        medium_blueprint_area_size: float;
        enabled_recipe_slot_tint: Color;
        disabled_recipe_slot_tint: Color;
        disabled_recipe_slot_background_tint: Color;
        forced_enabled_recipe_slot_background_tint: Color;
        rail_segment_colors: readonly Color[];
        /**
         * The table with `name = "default"` must exist and be the first member of the array.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UtilityConstants.html#UtilityConstants.player_colors Online documentation}
         */
        player_colors: readonly PlayerColorData[];
        server_command_console_chat_color: Color;
        script_command_console_chat_color: Color;
        default_alert_icon_scale: float;
        default_alert_icon_shift_by_type?: Record<string, Vector>;
        default_alert_icon_scale_by_type?: Record<string, float>;
        daytime_color_lookup: DaytimeColorLookupTable;
        zoom_to_world_daytime_color_lookup: DaytimeColorLookupTable;
        checkerboard_white: Color;
        checkerboard_black: Color;
        item_outline_color: Color;
        item_outline_radius: float;
        item_outline_inset: float;
        item_outline_sharpness: float;
        filter_outline_color: Color;
        icon_shadow_radius: float;
        icon_shadow_inset: float;
        icon_shadow_sharpness: float;
        icon_shadow_color: Color;
        clipboard_history_size: uint32;
        recipe_step_limit: uint32;
        manual_rail_building_reach_modifier: double;
        train_temporary_stop_wait_time: uint32;
        train_time_wait_condition_default: uint32;
        train_inactivity_wait_condition_default: uint32;
        /**
         * The strings are entity types.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UtilityConstants.html#UtilityConstants.default_trigger_target_mask_by_type Online documentation}
         */
        default_trigger_target_mask_by_type?: Record<string, TriggerTargetMask>;
        unit_group_pathfind_resolution: int8;
        unit_group_max_pursue_distance: double;
        dynamic_recipe_overload_factor: double;
        minimum_recipe_overload_multiplier: uint32;
        maximum_recipe_overload_multiplier: uint32;
        tree_leaf_distortion_strength_far: Vector;
        tree_leaf_distortion_distortion_far: Vector;
        tree_leaf_distortion_speed_far: Vector;
        tree_leaf_distortion_strength_near: Vector;
        tree_leaf_distortion_distortion_near: Vector;
        tree_leaf_distortion_speed_near: Vector;
        tree_shadow_roughness: float;
        tree_shadow_speed: float;
        missing_preview_sprite_location: FileName;
        main_menu_background_image_location: FileName;
        /**
         * The strings represent the names of the simulations.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UtilityConstants.html#UtilityConstants.main_menu_simulations Online documentation}
         */
        main_menu_simulations: Record<string, SimulationDefinition>;
        main_menu_background_vignette_intensity: float;
        main_menu_background_vignette_sharpness: float;
        default_scorch_mark_color: Color;
        train_button_hovered_tint: Color;
        /**
         * Must be in range [1, 100].
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UtilityConstants.html#UtilityConstants.select_group_row_count Online documentation}
         */
        select_group_row_count: uint32;
        /**
         * Must be in range [1, 100].
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UtilityConstants.html#UtilityConstants.select_slot_row_count Online documentation}
         */
        select_slot_row_count: uint32;
        /**
         * Must be in range [1, 100].
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UtilityConstants.html#UtilityConstants.inventory_width Online documentation}
         */
        inventory_width: uint32;
        /**
         * Must be in range [1, 100].
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UtilityConstants.html#UtilityConstants.module_inventory_width Online documentation}
         */
        module_inventory_width: uint32;
        /**
         * Must be >= 1.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UtilityConstants.html#UtilityConstants.tooltip_monitor_edge_border Online documentation}
         */
        tooltip_monitor_edge_border: int32;
        /**
         * Must be >= 1.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UtilityConstants.html#UtilityConstants.normalised_achievement_icon_size Online documentation}
         */
        normalised_achievement_icon_size: uint32;
        /**
         * Must be >= 1.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UtilityConstants.html#UtilityConstants.tutorial_notice_icon_size Online documentation}
         */
        tutorial_notice_icon_size: uint32;
        /**
         * Must be >= 1
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UtilityConstants.html#UtilityConstants.flying_text_ttl Online documentation}
         */
        flying_text_ttl: uint32;
        /**
         * The base game uses more entries here that are applied via the {@linkplain https://github.com/wube/factorio-data/blob/master/base/prototypes/categories/ammo-category.lua#L72-L76 ammo categories}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UtilityConstants.html#UtilityConstants.bonus_gui_ordering Online documentation}
         */
        bonus_gui_ordering: BonusGuiOrdering;
        train_path_finding: TrainPathFinderConstants;
        map_editor: MapEditorConstants;
        color_filters: readonly ColorFilterData[];
        entity_renderer_search_box_limits: EntityRendererSearchBoxLimits;
        /**
         * Can be set to anything from range 0 to 255, but larger values will be clamped to 160. Setting it to larger values can have performance impact (growing geometrically).
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UtilityConstants.html#UtilityConstants.light_renderer_search_distance_limit Online documentation}
         */
        light_renderer_search_distance_limit: uint8;
    }
    /**
     * Sounds used by the game that are not specific to certain prototypes.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UtilitySounds.html Online documentation}
     */
    export interface UtilitySounds extends PrototypeBase {
        gui_click: Sound;
        list_box_click: Sound;
        build_small: Sound;
        build_medium: Sound;
        build_large: Sound;
        cannot_build: Sound;
        build_blueprint_small: Sound;
        build_blueprint_medium: Sound;
        build_blueprint_large: Sound;
        deconstruct_small: Sound;
        deconstruct_medium: Sound;
        deconstruct_big: Sound;
        deconstruct_robot: Sound;
        rotated_small: Sound;
        rotated_medium: Sound;
        rotated_big: Sound;
        axe_mining_ore: Sound;
        mining_wood: Sound;
        axe_fighting: Sound;
        alert_destroyed: Sound;
        console_message: Sound;
        scenario_message: Sound;
        new_objective: Sound;
        game_lost: Sound;
        game_won: Sound;
        metal_walking_sound: Sound;
        research_completed: Sound;
        default_manual_repair: Sound;
        crafting_finished: Sound;
        inventory_click: Sound;
        inventory_move: Sound;
        clear_cursor: Sound;
        armor_insert: Sound;
        armor_remove: Sound;
        achievement_unlocked: Sound;
        wire_connect_pole: Sound;
        wire_disconnect: Sound;
        wire_pickup: Sound;
        tutorial_notice: Sound;
        smart_pipette: Sound;
        switch_gun: Sound;
        picked_up_item: Sound;
        blueprint_selection_ended: Sound;
        blueprint_selection_started: Sound;
        deconstruction_selection_started: Sound;
        deconstruction_selection_ended: Sound;
        cancel_deconstruction_selection_started: Sound;
        cancel_deconstruction_selection_ended: Sound;
        upgrade_selection_started: Sound;
        upgrade_selection_ended: Sound;
        copy_activated: Sound;
        cut_activated: Sound;
        paste_activated: Sound;
        item_deleted: Sound;
        entity_settings_pasted: Sound;
        entity_settings_copied: Sound;
        item_spawned: Sound;
        confirm: Sound;
        undo: Sound;
        drop_item: Sound;
        rail_plan_start: Sound;
    }
    /**
     * Sprites used by the game that are not specific to certain prototypes.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/UtilitySprites.html Online documentation}
     */
    export interface UtilitySprites extends PrototypeBase {
        cursor_box: CursorBoxSpecification;
        bookmark: Sprite;
        center: Sprite;
        check_mark: Sprite;
        check_mark_white: Sprite;
        check_mark_green: Sprite;
        check_mark_dark_green: Sprite;
        not_played_yet_green: Sprite;
        not_played_yet_dark_green: Sprite;
        played_green: Sprite;
        played_dark_green: Sprite;
        close_fat: Sprite;
        close_white: Sprite;
        close_black: Sprite;
        close_map_preview: Sprite;
        color_picker: Sprite;
        change_recipe: Sprite;
        dropdown: Sprite;
        downloading: Sprite;
        downloading_white: Sprite;
        downloaded: Sprite;
        downloaded_white: Sprite;
        equipment_grid: Sprite;
        expand_dots: Sprite;
        expand_dots_white: Sprite;
        export: Sprite;
        import: Sprite;
        map: Sprite;
        map_exchange_string: Sprite;
        missing_mod_icon: Sprite;
        not_available: Sprite;
        play: Sprite;
        stop: Sprite;
        preset: Sprite;
        refresh: Sprite;
        reset: Sprite;
        reset_white: Sprite;
        shuffle: Sprite;
        station_name: Sprite;
        search_black: Sprite;
        search_white: Sprite;
        sync_mods: Sprite;
        trash: Sprite;
        trash_white: Sprite;
        copy: Sprite;
        reassign: Sprite;
        warning: Sprite;
        warning_white: Sprite;
        list_view: Sprite;
        grid_view: Sprite;
        reference_point: Sprite;
        mouse_cursor: Sprite;
        mod_dependency_arrow: Sprite;
        add: Sprite;
        clone: Sprite;
        go_to_arrow: Sprite;
        pause: Sprite;
        speed_down: Sprite;
        speed_up: Sprite;
        editor_speed_down: Sprite;
        editor_pause: Sprite;
        editor_play: Sprite;
        editor_speed_up: Sprite;
        tick_once: Sprite;
        tick_sixty: Sprite;
        tick_custom: Sprite;
        search_icon: Sprite;
        too_far: Sprite;
        shoot_cursor_green: Sprite;
        shoot_cursor_red: Sprite;
        electricity_icon: Sprite;
        fuel_icon: Sprite;
        ammo_icon: Sprite;
        fluid_icon: Sprite;
        warning_icon: Sprite;
        danger_icon: Sprite;
        destroyed_icon: Sprite;
        recharge_icon: Sprite;
        too_far_from_roboport_icon: Sprite;
        pump_cannot_connect_icon: Sprite;
        not_enough_repair_packs_icon: Sprite;
        not_enough_construction_robots_icon: Sprite;
        no_building_material_icon: Sprite;
        no_storage_space_icon: Sprite;
        electricity_icon_unplugged: Sprite;
        game_stopped_visualization: Sprite;
        health_bar_green_pip: Sprite;
        health_bar_yellow_pip: Sprite;
        health_bar_red_pip: Sprite;
        ghost_bar_pip: Sprite;
        bar_gray_pip: Sprite;
        shield_bar_pip: Sprite;
        hand: Sprite;
        hand_black: Sprite;
        entity_info_dark_background: Sprite;
        medium_gui_arrow: Sprite;
        small_gui_arrow: Sprite;
        light_medium: Sprite;
        light_small: Sprite;
        light_cone: Sprite;
        color_effect: Sprite;
        clock: Sprite;
        default_ammo_damage_modifier_icon: Sprite;
        default_gun_speed_modifier_icon: Sprite;
        default_turret_attack_modifier_icon: Sprite;
        hint_arrow_up: Sprite;
        hint_arrow_down: Sprite;
        hint_arrow_right: Sprite;
        hint_arrow_left: Sprite;
        fluid_indication_arrow: Sprite;
        fluid_indication_arrow_both_ways: Sprite;
        heat_exchange_indication: Sprite;
        indication_arrow: Sprite;
        rail_planner_indication_arrow: Sprite;
        rail_planner_indication_arrow_too_far: Sprite;
        rail_path_not_possible: Sprite;
        indication_line: Sprite;
        short_indication_line: Sprite;
        short_indication_line_green: Sprite;
        slot_icon_module: Sprite;
        slot_icon_module_black: Sprite;
        slot_icon_armor: Sprite;
        slot_icon_armor_black: Sprite;
        slot_icon_gun: Sprite;
        slot_icon_gun_black: Sprite;
        slot_icon_ammo: Sprite;
        slot_icon_ammo_black: Sprite;
        slot_icon_resource: Sprite;
        slot_icon_resource_black: Sprite;
        slot_icon_fuel: Sprite;
        slot_icon_fuel_black: Sprite;
        slot_icon_result: Sprite;
        slot_icon_result_black: Sprite;
        slot_icon_robot: Sprite;
        slot_icon_robot_black: Sprite;
        slot_icon_robot_material: Sprite;
        slot_icon_robot_material_black: Sprite;
        slot_icon_inserter_hand: Sprite;
        slot_icon_inserter_hand_black: Sprite;
        upgrade_blueprint: Sprite;
        slot: Sprite;
        equipment_slot: Sprite;
        equipment_collision: Sprite;
        battery: Sprite;
        green_circle: Sprite;
        green_dot: Sprite;
        robot_slot: Sprite;
        set_bar_slot: Sprite;
        missing_icon: Sprite;
        deconstruction_mark: Sprite;
        upgrade_mark: Sprite;
        confirm_slot: Sprite;
        export_slot: Sprite;
        import_slot: Sprite;
        none_editor_icon: Sprite;
        cable_editor_icon: Sprite;
        tile_editor_icon: Sprite;
        decorative_editor_icon: Sprite;
        resource_editor_icon: Sprite;
        entity_editor_icon: Sprite;
        item_editor_icon: Sprite;
        force_editor_icon: Sprite;
        clone_editor_icon: Sprite;
        scripting_editor_icon: Sprite;
        paint_bucket_icon: Sprite;
        surface_editor_icon: Sprite;
        time_editor_icon: Sprite;
        cliff_editor_icon: Sprite;
        brush_icon: Sprite;
        spray_icon: Sprite;
        cursor_icon: Sprite;
        area_icon: Sprite;
        line_icon: Sprite;
        variations_tool_icon: Sprite;
        lua_snippet_tool_icon: Sprite;
        editor_selection: Sprite;
        brush_square_shape: Sprite;
        brush_circle_shape: Sprite;
        player_force_icon: Sprite;
        neutral_force_icon: Sprite;
        enemy_force_icon: Sprite;
        nature_icon: Sprite;
        no_nature_icon: Sprite;
        multiplayer_waiting_icon: Sprite;
        spawn_flag: Sprite;
        questionmark: Sprite;
        copper_wire: Sprite;
        green_wire: Sprite;
        red_wire: Sprite;
        green_wire_hightlight: Sprite;
        red_wire_hightlight: Sprite;
        wire_shadow: Sprite;
        and_or: Sprite;
        left_arrow: Sprite;
        right_arrow: Sprite;
        down_arrow: Sprite;
        enter: Sprite;
        side_menu_blueprint_library_icon: Sprite;
        side_menu_production_icon: Sprite;
        side_menu_bonus_icon: Sprite;
        side_menu_tutorials_icon: Sprite;
        side_menu_train_icon: Sprite;
        side_menu_achievements_icon: Sprite;
        side_menu_menu_icon: Sprite;
        side_menu_map_icon: Sprite;
        side_menu_blueprint_library_hover_icon: Sprite;
        side_menu_production_hover_icon: Sprite;
        side_menu_bonus_hover_icon: Sprite;
        side_menu_tutorials_hover_icon: Sprite;
        side_menu_train_hover_icon: Sprite;
        side_menu_achievements_hover_icon: Sprite;
        side_menu_menu_hover_icon: Sprite;
        side_menu_map_hover_icon: Sprite;
        side_menu_technology_hover_icon: Sprite;
        side_menu_logistic_network_hover_icon: Sprite;
        circuit_network_panel_black: Sprite;
        circuit_network_panel_white: Sprite;
        logistic_network_panel_black: Sprite;
        logistic_network_panel_white: Sprite;
        rename_icon_small_black: Sprite;
        rename_icon_small_white: Sprite;
        rename_icon_normal: Sprite;
        achievement_label_locked: Sprite;
        achievement_label_unlocked_off: Sprite;
        achievement_label_unlocked: Sprite;
        achievement_label_failed: Sprite;
        rail_signal_placement_indicator: Sprite;
        train_stop_placement_indicator: Sprite;
        placement_indicator_leg: Sprite;
        grey_rail_signal_placement_indicator: Sprite;
        grey_placement_indicator_leg: Sprite;
        logistic_radius_visualization: Sprite;
        construction_radius_visualization: Sprite;
        track_button: Sprite;
        show_logistics_network_in_map_view: Sprite;
        show_electric_network_in_map_view: Sprite;
        show_turret_range_in_map_view: Sprite;
        show_pollution_in_map_view: Sprite;
        show_train_station_names_in_map_view: Sprite;
        show_player_names_in_map_view: Sprite;
        show_tags_in_map_view: Sprite;
        show_worker_robots_in_map_view: Sprite;
        show_rail_signal_states_in_map_view: Sprite;
        show_recipe_icons_in_map_view: Sprite;
        show_logistics_network_in_map_view_black: Sprite;
        show_electric_network_in_map_view_black: Sprite;
        show_turret_range_in_map_view_black: Sprite;
        show_pollution_in_map_view_black: Sprite;
        show_train_station_names_in_map_view_black: Sprite;
        show_player_names_in_map_view_black: Sprite;
        show_tags_in_map_view_black: Sprite;
        show_worker_robots_in_map_view_black: Sprite;
        show_rail_signal_states_in_map_view_black: Sprite;
        show_recipe_icons_in_map_view_black: Sprite;
        train_stop_in_map_view: Sprite;
        train_stop_disabled_in_map_view: Sprite;
        train_stop_full_in_map_view: Sprite;
        custom_tag_in_map_view: Sprite;
        covered_chunk: Sprite;
        white_square: Sprite;
        white_mask: Sprite;
        favourite_server_icon: Sprite;
        crafting_machine_recipe_not_unlocked: Sprite;
        gps_map_icon: Sprite;
        custom_tag_icon: Sprite;
        underground_remove_belts: Sprite;
        underground_remove_pipes: Sprite;
        underground_pipe_connection: Sprite;
        ghost_cursor: Sprite;
        tile_ghost_cursor: Sprite;
        cross_select: Sprite;
        expand: Sprite;
        expand_dark: Sprite;
        collapse: Sprite;
        collapse_dark: Sprite;
        status_working: Sprite;
        status_not_working: Sprite;
        status_yellow: Sprite;
        gradient: Sprite;
        output_console_gradient: Sprite;
        select_icon_black: Sprite;
        select_icon_white: Sprite;
        notification: Sprite;
        alert_arrow: Sprite;
        technology_black: Sprite;
        technology_white: Sprite;
        controller_joycon_a: Sprite;
        controller_joycon_b: Sprite;
        controller_joycon_x: Sprite;
        controller_joycon_y: Sprite;
        controller_joycon_back: Sprite;
        controller_joycon_start: Sprite;
        controller_joycon_leftstick: Sprite;
        controller_joycon_rightstick: Sprite;
        controller_joycon_leftshoulder: Sprite;
        controller_joycon_rightshoulder: Sprite;
        controller_joycon_dpup: Sprite;
        controller_joycon_dpdown: Sprite;
        controller_joycon_dpleft: Sprite;
        controller_joycon_dpright: Sprite;
        controller_joycon_paddle1: Sprite;
        controller_joycon_paddle2: Sprite;
        controller_joycon_paddle3: Sprite;
        controller_joycon_paddle4: Sprite;
        controller_joycon_righttrigger: Sprite;
        controller_joycon_lefttrigger: Sprite;
        controller_joycon_left_stick: Sprite;
        controller_joycon_right_stick: Sprite;
        controller_joycon_black_a: Sprite;
        controller_joycon_black_b: Sprite;
        controller_joycon_black_x: Sprite;
        controller_joycon_black_y: Sprite;
        controller_joycon_black_back: Sprite;
        controller_joycon_black_start: Sprite;
        controller_joycon_black_leftstick: Sprite;
        controller_joycon_black_rightstick: Sprite;
        controller_joycon_black_leftshoulder: Sprite;
        controller_joycon_black_rightshoulder: Sprite;
        controller_joycon_black_dpup: Sprite;
        controller_joycon_black_dpdown: Sprite;
        controller_joycon_black_dpleft: Sprite;
        controller_joycon_black_dpright: Sprite;
        controller_joycon_black_paddle1: Sprite;
        controller_joycon_black_paddle2: Sprite;
        controller_joycon_black_paddle3: Sprite;
        controller_joycon_black_paddle4: Sprite;
        controller_joycon_black_righttrigger: Sprite;
        controller_joycon_black_lefttrigger: Sprite;
        controller_joycon_black_left_stick: Sprite;
        controller_joycon_black_right_stick: Sprite;
        controller_xbox_a: Sprite;
        controller_xbox_b: Sprite;
        controller_xbox_x: Sprite;
        controller_xbox_y: Sprite;
        controller_xbox_back: Sprite;
        controller_xbox_start: Sprite;
        controller_xbox_leftstick: Sprite;
        controller_xbox_rightstick: Sprite;
        controller_xbox_leftshoulder: Sprite;
        controller_xbox_rightshoulder: Sprite;
        controller_xbox_dpup: Sprite;
        controller_xbox_dpdown: Sprite;
        controller_xbox_dpleft: Sprite;
        controller_xbox_dpright: Sprite;
        controller_xbox_righttrigger: Sprite;
        controller_xbox_lefttrigger: Sprite;
        controller_xbox_left_stick: Sprite;
        controller_xbox_right_stick: Sprite;
        controller_xbox_black_a: Sprite;
        controller_xbox_black_b: Sprite;
        controller_xbox_black_x: Sprite;
        controller_xbox_black_y: Sprite;
        controller_xbox_black_back: Sprite;
        controller_xbox_black_start: Sprite;
        controller_xbox_black_leftstick: Sprite;
        controller_xbox_black_rightstick: Sprite;
        controller_xbox_black_leftshoulder: Sprite;
        controller_xbox_black_rightshoulder: Sprite;
        controller_xbox_black_dpup: Sprite;
        controller_xbox_black_dpdown: Sprite;
        controller_xbox_black_dpleft: Sprite;
        controller_xbox_black_dpright: Sprite;
        controller_xbox_black_righttrigger: Sprite;
        controller_xbox_black_lefttrigger: Sprite;
        controller_xbox_black_left_stick: Sprite;
        controller_xbox_black_right_stick: Sprite;
        controller_ps_a: Sprite;
        controller_ps_b: Sprite;
        controller_ps_x: Sprite;
        controller_ps_y: Sprite;
        controller_ps_back: Sprite;
        controller_ps_start: Sprite;
        controller_ps_leftstick: Sprite;
        controller_ps_rightstick: Sprite;
        controller_ps_leftshoulder: Sprite;
        controller_ps_rightshoulder: Sprite;
        controller_ps_dpup: Sprite;
        controller_ps_dpdown: Sprite;
        controller_ps_dpleft: Sprite;
        controller_ps_dpright: Sprite;
        controller_ps_righttrigger: Sprite;
        controller_ps_lefttrigger: Sprite;
        controller_ps_left_stick: Sprite;
        controller_ps_right_stick: Sprite;
        controller_ps_black_a: Sprite;
        controller_ps_black_b: Sprite;
        controller_ps_black_x: Sprite;
        controller_ps_black_y: Sprite;
        controller_ps_black_back: Sprite;
        controller_ps_black_start: Sprite;
        controller_ps_black_leftstick: Sprite;
        controller_ps_black_rightstick: Sprite;
        controller_ps_black_leftshoulder: Sprite;
        controller_ps_black_rightshoulder: Sprite;
        controller_ps_black_dpup: Sprite;
        controller_ps_black_dpdown: Sprite;
        controller_ps_black_dpleft: Sprite;
        controller_ps_black_dpright: Sprite;
        controller_ps_black_righttrigger: Sprite;
        controller_ps_black_lefttrigger: Sprite;
        controller_ps_black_left_stick: Sprite;
        controller_ps_black_right_stick: Sprite;
        controller_steamdeck_a: Sprite;
        controller_steamdeck_b: Sprite;
        controller_steamdeck_x: Sprite;
        controller_steamdeck_y: Sprite;
        controller_steamdeck_back: Sprite;
        controller_steamdeck_start: Sprite;
        controller_steamdeck_leftstick: Sprite;
        controller_steamdeck_rightstick: Sprite;
        controller_steamdeck_leftshoulder: Sprite;
        controller_steamdeck_rightshoulder: Sprite;
        controller_steamdeck_dpup: Sprite;
        controller_steamdeck_dpdown: Sprite;
        controller_steamdeck_dpleft: Sprite;
        controller_steamdeck_dpright: Sprite;
        controller_steamdeck_paddle1: Sprite;
        controller_steamdeck_paddle2: Sprite;
        controller_steamdeck_paddle3: Sprite;
        controller_steamdeck_paddle4: Sprite;
        controller_steamdeck_righttrigger: Sprite;
        controller_steamdeck_lefttrigger: Sprite;
        controller_steamdeck_left_stick: Sprite;
        controller_steamdeck_right_stick: Sprite;
        controller_steamdeck_black_a: Sprite;
        controller_steamdeck_black_b: Sprite;
        controller_steamdeck_black_x: Sprite;
        controller_steamdeck_black_y: Sprite;
        controller_steamdeck_black_back: Sprite;
        controller_steamdeck_black_start: Sprite;
        controller_steamdeck_black_leftstick: Sprite;
        controller_steamdeck_black_rightstick: Sprite;
        controller_steamdeck_black_leftshoulder: Sprite;
        controller_steamdeck_black_rightshoulder: Sprite;
        controller_steamdeck_black_dpup: Sprite;
        controller_steamdeck_black_dpdown: Sprite;
        controller_steamdeck_black_dpleft: Sprite;
        controller_steamdeck_black_dpright: Sprite;
        controller_steamdeck_black_paddle1: Sprite;
        controller_steamdeck_black_paddle2: Sprite;
        controller_steamdeck_black_paddle3: Sprite;
        controller_steamdeck_black_paddle4: Sprite;
        controller_steamdeck_black_righttrigger: Sprite;
        controller_steamdeck_black_lefttrigger: Sprite;
        controller_steamdeck_black_left_stick: Sprite;
        controller_steamdeck_black_right_stick: Sprite;
        clouds: Animation;
        arrow_button: Animation;
        explosion_chart_visualization: Animation;
        refresh_white: Animation;
        inserter_stack_size_bonus_modifier_icon: Sprite;
        inserter_stack_size_bonus_modifier_constant?: Sprite;
        stack_inserter_capacity_bonus_modifier_icon: Sprite;
        stack_inserter_capacity_bonus_modifier_constant?: Sprite;
        laboratory_speed_modifier_icon: Sprite;
        laboratory_speed_modifier_constant?: Sprite;
        character_logistic_slots_modifier_icon: Sprite;
        character_logistic_slots_modifier_constant?: Sprite;
        character_logistic_trash_slots_modifier_icon: Sprite;
        character_logistic_trash_slots_modifier_constant?: Sprite;
        maximum_following_robots_count_modifier_icon: Sprite;
        maximum_following_robots_count_modifier_constant?: Sprite;
        worker_robot_speed_modifier_icon: Sprite;
        worker_robot_speed_modifier_constant?: Sprite;
        worker_robot_storage_modifier_icon: Sprite;
        worker_robot_storage_modifier_constant?: Sprite;
        ghost_time_to_live_modifier_icon: Sprite;
        ghost_time_to_live_modifier_constant?: Sprite;
        turret_attack_modifier_icon: Sprite;
        turret_attack_modifier_constant?: Sprite;
        ammo_damage_modifier_icon: Sprite;
        ammo_damage_modifier_constant?: Sprite;
        give_item_modifier_icon: Sprite;
        give_item_modifier_constant?: Sprite;
        gun_speed_modifier_icon: Sprite;
        gun_speed_modifier_constant?: Sprite;
        unlock_recipe_modifier_icon: Sprite;
        unlock_recipe_modifier_constant?: Sprite;
        character_crafting_speed_modifier_icon: Sprite;
        character_crafting_speed_modifier_constant?: Sprite;
        character_mining_speed_modifier_icon: Sprite;
        character_mining_speed_modifier_constant?: Sprite;
        character_running_speed_modifier_icon: Sprite;
        character_running_speed_modifier_constant?: Sprite;
        character_build_distance_modifier_icon: Sprite;
        character_build_distance_modifier_constant?: Sprite;
        character_item_drop_distance_modifier_icon: Sprite;
        character_item_drop_distance_modifier_constant?: Sprite;
        character_reach_distance_modifier_icon: Sprite;
        character_reach_distance_modifier_constant?: Sprite;
        character_resource_reach_distance_modifier_icon: Sprite;
        character_resource_reach_distance_modifier_constant?: Sprite;
        character_item_pickup_distance_modifier_icon: Sprite;
        character_item_pickup_distance_modifier_constant?: Sprite;
        character_loot_pickup_distance_modifier_icon: Sprite;
        character_loot_pickup_distance_modifier_constant?: Sprite;
        character_inventory_slots_bonus_modifier_icon: Sprite;
        character_inventory_slots_bonus_modifier_constant?: Sprite;
        deconstruction_time_to_live_modifier_icon: Sprite;
        deconstruction_time_to_live_modifier_constant?: Sprite;
        max_failed_attempts_per_tick_per_construction_queue_modifier_icon: Sprite;
        max_failed_attempts_per_tick_per_construction_queue_modifier_constant?: Sprite;
        max_successful_attempts_per_tick_per_construction_queue_modifier_icon: Sprite;
        max_successful_attempts_per_tick_per_construction_queue_modifier_constant?: Sprite;
        character_health_bonus_modifier_icon: Sprite;
        character_health_bonus_modifier_constant?: Sprite;
        mining_drill_productivity_bonus_modifier_icon: Sprite;
        mining_drill_productivity_bonus_modifier_constant?: Sprite;
        train_braking_force_bonus_modifier_icon: Sprite;
        train_braking_force_bonus_modifier_constant?: Sprite;
        zoom_to_world_enabled_modifier_icon: Sprite;
        zoom_to_world_enabled_modifier_constant?: Sprite;
        zoom_to_world_ghost_building_enabled_modifier_icon: Sprite;
        zoom_to_world_ghost_building_enabled_modifier_constant?: Sprite;
        zoom_to_world_blueprint_enabled_modifier_icon: Sprite;
        zoom_to_world_blueprint_enabled_modifier_constant?: Sprite;
        zoom_to_world_deconstruction_planner_enabled_modifier_icon: Sprite;
        zoom_to_world_deconstruction_planner_enabled_modifier_constant?: Sprite;
        zoom_to_world_upgrade_planner_enabled_modifier_icon: Sprite;
        zoom_to_world_upgrade_planner_enabled_modifier_constant?: Sprite;
        zoom_to_world_selection_tool_enabled_modifier_icon: Sprite;
        zoom_to_world_selection_tool_enabled_modifier_constant?: Sprite;
        worker_robot_battery_modifier_icon: Sprite;
        worker_robot_battery_modifier_constant?: Sprite;
        laboratory_productivity_modifier_icon: Sprite;
        laboratory_productivity_modifier_constant?: Sprite;
        follower_robot_lifetime_modifier_icon: Sprite;
        follower_robot_lifetime_modifier_constant?: Sprite;
        artillery_range_modifier_icon: Sprite;
        artillery_range_modifier_constant?: Sprite;
        nothing_modifier_icon: Sprite;
        nothing_modifier_constant?: Sprite;
        character_additional_mining_categories_modifier_icon: Sprite;
        character_additional_mining_categories_modifier_constant?: Sprite;
        character_logistic_requests_modifier_icon: Sprite;
        character_logistic_requests_modifier_constant?: Sprite;
    }
    /**
     * Abstract base of all vehicles.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/VehiclePrototype.html Online documentation}
     */
    export interface VehiclePrototype extends EntityWithOwnerPrototype {
        /**
         * Must be positive. Weight of the entity used for physics calculation when car hits something.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/VehiclePrototype.html#VehiclePrototype.weight Online documentation}
         */
        weight: double;
        /**
         * Must be positive. There is no difference between the two ways to set braking power/force.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/VehiclePrototype.html#VehiclePrototype.braking_power Online documentation}
         */
        braking_power: Energy | double;
        braking_force: Energy | double;
        /**
         * Must be positive. There is no difference between the two ways to set friction force.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/VehiclePrototype.html#VehiclePrototype.friction Online documentation}
         */
        friction: double;
        friction_force: double;
        /**
         * The (movement) energy used per hit point (1 hit point = 1 health damage) taken and dealt for this vehicle during collisions. The smaller the number, the more damage this vehicle and the rammed entity take during collisions: `damage = energy / energy_per_hit_point`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/VehiclePrototype.html#VehiclePrototype.energy_per_hit_point Online documentation}
         */
        energy_per_hit_point: double;
        /**
         * Must be in the [0, 1] interval.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/VehiclePrototype.html#VehiclePrototype.terrain_friction_modifier Online documentation}
         */
        terrain_friction_modifier?: float;
        /**
         * Must be positive. Sound is scaled by speed.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/VehiclePrototype.html#VehiclePrototype.sound_minimum_speed Online documentation}
         */
        sound_minimum_speed?: double;
        /**
         * Must be positive. Sound is scaled by speed.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/VehiclePrototype.html#VehiclePrototype.sound_scaling_ratio Online documentation}
         */
        sound_scaling_ratio?: double;
        stop_trigger_speed?: double;
        crash_trigger?: TriggerEffect;
        stop_trigger?: TriggerEffect;
        /**
         * The name of the {@link EquipmentGridPrototype} this vehicle has.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/VehiclePrototype.html#VehiclePrototype.equipment_grid Online documentation}
         */
        equipment_grid?: EquipmentGridID;
        /**
         * The sprite that represents this vehicle on the map/minimap.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/VehiclePrototype.html#VehiclePrototype.minimap_representation Online documentation}
         */
        minimap_representation?: Sprite;
        /**
         * The sprite that represents this vehicle on the map/minimap when it is selected.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/VehiclePrototype.html#VehiclePrototype.selected_minimap_representation Online documentation}
         */
        selected_minimap_representation?: Sprite;
        /**
         * Determines whether this vehicle accepts passengers. This includes both drivers and gunners, if applicable.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/VehiclePrototype.html#VehiclePrototype.allow_passengers Online documentation}
         */
        allow_passengers?: bool;
        /**
         * Two entities can collide only if they share a layer from the collision mask.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/VehiclePrototype.html#VehiclePrototype.collision_mask Online documentation}
         */
        collision_mask?: CollisionMask;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Circuit_network#Virtual_signals virtual signal}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/VirtualSignalPrototype.html Online documentation}
     */
    export interface VirtualSignalPrototype extends PrototypeBase {
        /**
         * The icon that is used to represent this virtual signal. Can't be an empty array.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/VirtualSignalPrototype.html#VirtualSignalPrototype.icons Online documentation}
         */
        icons?: readonly IconData[];
        /**
         * Path to the icon file that is used to represent this virtual signal.
         *
         * Mandatory if `icons` is not defined.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/VirtualSignalPrototype.html#VirtualSignalPrototype.icon Online documentation}
         */
        icon?: FileName;
        /**
         * The size of the square icon, in pixels, e.g. `32` for a 32px by 32px icon.
         *
         * Mandatory if `icons` is not defined, or if `icon_size` is not specified for all instances of `icons`.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/VirtualSignalPrototype.html#VirtualSignalPrototype.icon_size Online documentation}
         */
        icon_size?: SpriteSizeType;
        /**
         * Icons of reduced size will be used at decreased scale.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/VirtualSignalPrototype.html#VirtualSignalPrototype.icon_mipmaps Online documentation}
         */
        icon_mipmaps?: IconMipMapType;
        /**
         * The name of a {@link ItemSubGroup}.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/VirtualSignalPrototype.html#VirtualSignalPrototype.subgroup Online documentation}
         */
        subgroup?: ItemSubGroupID;
    }
    /**
     * A {@linkplain https://wiki.factorio.com/Wall wall}.
     * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/WallPrototype.html Online documentation}
     */
    export interface WallPrototype extends EntityWithOwnerPrototype {
        pictures: WallPictures;
        /**
         * Different walls will visually connect to each other if their merge group is the same.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/WallPrototype.html#WallPrototype.visual_merge_group Online documentation}
         */
        visual_merge_group?: uint32;
        circuit_wire_connection_point?: WireConnectionPoint;
        /**
         * The maximum circuit wire distance for this entity.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/WallPrototype.html#WallPrototype.circuit_wire_max_distance Online documentation}
         */
        circuit_wire_max_distance?: double;
        draw_copper_wires?: bool;
        draw_circuit_wires?: bool;
        circuit_connector_sprites?: CircuitConnectorSprites;
        default_output_signal?: SignalIDConnector;
        wall_diode_green?: Sprite4Way;
        wall_diode_red?: Sprite4Way;
        wall_diode_green_light_top?: LightDefinition;
        wall_diode_green_light_right?: LightDefinition;
        wall_diode_green_light_bottom?: LightDefinition;
        wall_diode_green_light_left?: LightDefinition;
        wall_diode_red_light_top?: LightDefinition;
        wall_diode_red_light_right?: LightDefinition;
        wall_diode_red_light_bottom?: LightDefinition;
        wall_diode_red_light_left?: LightDefinition;
        connected_gate_visualization?: Sprite;
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
        /**
         * Specification of the type of the prototype.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/WindSound.html#WindSound.type Online documentation}
         */
        type: "wind-sound";
        /**
         * Unique textual identification of the prototype.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/WindSound.html#WindSound.name Online documentation}
         */
        name: string;
        /**
         * The sound file and volume.
         * @see {@link https://lua-api.factorio.com/1.1.89/prototypes/WindSound.html#WindSound.sound Online documentation}
         */
        sound: Sound;
    }
    export type OmitType<T> = Omit<T, "type"> & {
        type: string;
    };
}

