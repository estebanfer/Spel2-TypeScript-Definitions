/** @noSelfInFile */
declare interface meta {
    name: string;
    version: string;
    description: string;
    author: string;
}
declare const state: StateMemory;
declare const game_manager: GameManager;
declare const online: Online;
declare const players: Array<Player>;
declare const savegame: SaveData;
declare const options: unknown;
declare const prng: PRNG;
declare interface Callback {
    /** @noself **/
    (...args: any[]): void;
}
declare interface SoundCallbackFunction extends Callback {}
//## Functions
//Note: The game functions like `spawn` use [level coordinates](#get_position). Draw functions use normalized [screen coordinates](#screen_position) from `-1.0 .. 1.0` where `0.0, 0.0` is the center of the screen.
declare function lua_print() : void
declare function print(message: string) : void
declare function message(message: string) : void
declare function prinspect(...objects: any[]) : void
declare function messpect(...objects: any[]) : void
declare function register_console_command(name: string, cmd: Callback) : void
declare function set_interval(cb: Callback, frames: number) : CallbackId
declare function set_timeout(cb: Callback, frames: number) : CallbackId
declare function set_global_interval(cb: Callback, frames: number) : CallbackId
declare function set_global_timeout(cb: Callback, frames: number) : CallbackId
declare function set_callback(cb: Callback, screen: number) : CallbackId
declare function clear_callback(id: CallbackId) : void
declare function load_script(id: string) : void
declare function read_prng() : Array<number>
declare function toast(message: string) : void
declare function say(entity_uid: number, message: string, unk_type: number, top: boolean) : void
declare function register_option_int(name: string, desc: string, long_desc: string, value: number, min: number, max: number) : void
declare function register_option_float(name: string, desc: string, long_desc: string, value: number, min: number, max: number) : void
declare function register_option_bool(name: string, desc: string, long_desc: string, value: boolean) : void
declare function register_option_string(name: string, desc: string, long_desc: string, value: string) : void
declare function register_option_combo(name: string, desc: string, long_desc: string, opts: string) : void
declare function register_option_button(name: string, desc: string, long_desc: string, on_click: Callback) : void
declare function spawn_liquid(entity_type: ENT_TYPE, x: number, y: number) : void
declare function spawn_liquid(entity_type: ENT_TYPE, x: number, y: number, velocityx: number, velocityy: number, liquid_flags: number, amount: number, blobs_separation: number) : void
declare function spawn_entity(entity_type: ENT_TYPE, x: number, y: number, layer: LAYER, vx: number, vy: number) : number
declare function spawn(entity_type: ENT_TYPE, x: number, y: number, layer: LAYER, vx: number, vy: number) : number
declare function spawn_entity_snapped_to_floor(entity_type: ENT_TYPE, x: number, y: number, layer: LAYER) : number
declare function spawn_on_floor(entity_type: ENT_TYPE, x: number, y: number, layer: LAYER) : number
declare function spawn_grid_entity(entity_type: ENT_TYPE, x: number, y: number, layer: LAYER) : number
declare function spawn_entity_nonreplaceable(entity_type: ENT_TYPE, x: number, y: number, layer: LAYER, vx: number, vy: number) : number
declare function spawn_critical(entity_type: ENT_TYPE, x: number, y: number, layer: LAYER, vx: number, vy: number) : number
declare function spawn_door(x: number, y: number, layer: LAYER, w: number, l: number, t: number) : number
declare function door(x: number, y: number, layer: LAYER, w: number, l: number, t: number) : number
declare function spawn_layer_door(x: number, y: number) : void
declare function layer_door(x: number, y: number) : void
declare function spawn_apep(x: number, y: number, layer: LAYER, right: boolean) : number
declare function spawn_tree(x: number, y: number, layer: LAYER) : void
declare function spawn_player(player_slot: number, x: number, y: number) : void
declare function set_pre_entity_spawn(cb: Callback, flags: SPAWN_TYPE, mask: number, ...entity_types: any[]) : CallbackId
declare function set_post_entity_spawn(cb: Callback, flags: SPAWN_TYPE, mask: number, ...entity_types: any[]) : CallbackId
declare function warp(w: number, l: number, t: number) : void
declare function set_seed(seed: number) : void
declare function god(g: boolean) : void
declare function god_companions(g: boolean) : void
declare function zoom(level: number) : void
declare function pause(p: boolean) : void
declare function move_entity(uid: number, x: number, y: number, vx: number, vy: number) : void
declare function move_entity(uid: number, x: number, y: number, vx: number, vy: number, layer: LAYER) : void
declare function move_grid_entity(uid: number, x: number, y: number, layer: LAYER) : void
declare function set_door_target(uid: number, w: number, l: number, t: number) : void
declare function set_door(uid: number, w: number, l: number, t: number) : void
declare function get_door_target(uid: number) : [number, number, number]
declare function set_contents(uid: number, item_entity_type: ENT_TYPE) : void
declare function get_entity(uid: number) : Entity
declare function get_type(id: number) : EntityDB
declare function get_grid_entity_at(x: number, y: number, layer: LAYER) : number
declare function filter_entities(entities: Array<number>, predicate: Callback) : Array<number>
declare function get_entities_by(entity_types: Array<ENT_TYPE>, mask: number, layer: LAYER) : Array<number>
declare function get_entities_by(entity_type: ENT_TYPE, mask: number, layer: LAYER) : Array<number>
declare function get_entities_by_type(...ent_type: any[]) : Array<number>
declare function get_entities_at(entity_types: Array<ENT_TYPE>, mask: number, x: number, y: number, layer: LAYER, radius: number) : Array<number>
declare function get_entities_at(entity_type: ENT_TYPE, mask: number, x: number, y: number, layer: LAYER, radius: number) : Array<number>
declare function get_entities_overlapping_hitbox(entity_types: Array<ENT_TYPE>, mask: number, hitbox: AABB, layer: LAYER) : Array<number>
declare function get_entities_overlapping_hitbox(entity_type: ENT_TYPE, mask: number, hitbox: AABB, layer: LAYER) : Array<number>
declare function attach_entity(overlay_uid: number, attachee_uid: number) : void
declare function get_entity_flags(uid: number) : number
declare function set_entity_flags(uid: number, flags: number) : void
declare function get_entity_flags2(id: number) : number
declare function set_entity_flags2(uid: number, flags: number) : void
declare function get_level_flags() : number
declare function set_level_flags(flags: number) : void
declare function get_entity_type(uid: number) : ENT_TYPE
declare function get_zoom_level() : number
declare function game_position(x: number, y: number) : [number, number]
declare function screen_position(x: number, y: number) : [number, number]
declare function screen_distance(x: number) : number
declare function get_position(uid: number) : [number, number, number]
declare function get_render_position(uid: number) : [number, number, number]
declare function get_velocity(uid: number) : [number, number]
declare function entity_remove_item(id: number, item_uid: number) : void
declare function attach_ball_and_chain(uid: number, off_x: number, off_y: number) : number
declare function spawn_entity_over(entity_type: ENT_TYPE, over_uid: number, x: number, y: number) : number
declare function spawn_over(entity_type: ENT_TYPE, over_uid: number, x: number, y: number) : number
declare function entity_has_item_uid(uid: number, item_uid: number) : boolean
declare function entity_has_item_type(uid: number, entity_types: Array<ENT_TYPE>) : boolean
declare function entity_has_item_type(uid: number, entity_type: ENT_TYPE) : boolean
declare function entity_get_items_by(uid: number, entity_types: Array<ENT_TYPE>, mask: number) : Array<number>
declare function entity_get_items_by(uid: number, entity_type: ENT_TYPE, mask: number) : Array<number>
declare function kill_entity(uid: number, destroy_corpse: boolean | undefined) : void
declare function pick_up(who_uid: number, what_uid: number) : void
declare function drop(who_uid: number, what_uid: number) : void
declare function unequip_backitem(who_uid: number) : void
declare function worn_backitem(who_uid: number) : number
declare function apply_entity_db(uid: number) : void
declare function lock_door_at(x: number, y: number) : void
declare function unlock_door_at(x: number, y: number) : void
declare function get_frame() : number
declare function get_ms() : void
declare function carry(mount_uid: number, rider_uid: number) : void
declare function set_kapala_blood_threshold(threshold: number) : void
declare function set_kapala_hud_icon(icon_index: number) : void
declare function modify_sparktraps(angle_increment: number, distance: number) : void
declare function set_blood_multiplication(default_multiplier: number, vladscape_multiplier: number) : void
declare function flip_entity(uid: number) : void
declare function set_olmec_phase_y_level(phase: number, y: number) : void
declare function force_olmec_phase_0(b: boolean) : void
declare function set_ghost_spawn_times(normal: number, cursed: number) : void
declare function set_time_ghost_enabled(b: boolean) : void
declare function set_time_jelly_enabled(b: boolean) : void
declare function set_journal_enabled(b: boolean) : void
declare function set_camp_camera_bounds_enabled(b: boolean) : void
declare function set_explosion_mask(mask: number) : void
declare function set_max_rope_length(length: number) : void
declare function is_inside_active_shop_room(x: number, y: number, layer: LAYER) : boolean
declare function is_inside_shop_zone(x: number, y: number, layer: LAYER) : boolean
declare function waddler_count_entity(entity_type: ENT_TYPE) : number
declare function waddler_store_entity(entity_type: ENT_TYPE) : number
declare function waddler_remove_entity(entity_type: ENT_TYPE, amount_to_remove: number) : void
declare function waddler_get_entity_meta(slot: number) : number
declare function waddler_set_entity_meta(slot: number, meta: number) : void
declare function waddler_entity_type_in_slot(slot: number) : number
declare function spawn_companion(companion_type: ENT_TYPE, x: number, y: number, layer: LAYER) : number
declare function distance(uid_a: number, uid_b: number) : number
declare function get_bounds() : [number, number, number, number]
declare function get_camera_position() : [number, number]
declare function set_flag(flags: Flags, bit: number) : Flags
declare function setflag() : void
declare function clr_flag(flags: Flags, bit: number) : Flags
declare function clrflag() : void
declare function test_flag(flags: Flags, bit: number) : boolean
declare function testflag() : void
declare function get_window_size() : [number, number]
declare function steal_input(uid: number) : void
declare function return_input(uid: number) : void
declare function send_input(uid: number, buttons: INPUTS) : void
declare function read_input(uid: number) : INPUTS
declare function read_stolen_input(uid: number) : INPUTS
declare function clear_screen_callback(screen_id: number, cb_id: CallbackId) : void
declare function set_pre_render_screen(screen_id: number, fun: Callback) : CallbackId | undefined
declare function set_post_render_screen(screen_id: number, fun: Callback) : CallbackId | undefined
declare function clear_entity_callback(uid: number, cb_id: CallbackId) : void
declare function set_pre_statemachine(uid: number, fun: Callback) : CallbackId | undefined
declare function set_post_statemachine(uid: number, fun: Callback) : CallbackId | undefined
declare function set_on_destroy(uid: number, fun: Callback) : CallbackId | undefined
declare function set_on_kill(uid: number, fun: Callback) : CallbackId | undefined
declare function set_on_player_instagib(uid: number, fun: Callback) : CallbackId | undefined
declare function set_on_damage(uid: number, fun: Callback) : CallbackId | undefined
declare function set_on_open(uid: number, fun: Callback) : CallbackId | undefined
declare function set_pre_collision1(uid: number, fun: Callback) : CallbackId | undefined
declare function set_pre_collision2(uid: number, fun: Callback) : CallbackId | undefined
declare function raise() : void
declare function hash_to_stringid(hash: number) : STRINGID
declare function get_string(string_id: STRINGID) : string
declare function change_string(string_id: STRINGID, str: string) : void
declare function add_string(str: string) : STRINGID
declare function add_custom_name(uid: number, name: string) : void
declare function clear_custom_name(uid: number) : void
declare function enter_door(player_uid: number, door_uid: number) : void
declare function change_sunchallenge_spawns(ent_types: Array<ENT_TYPE>) : void
declare function change_diceshop_prizes(ent_types: Array<ENT_TYPE>) : void
declare function change_altar_damage_spawns(ent_types: Array<ENT_TYPE>) : void
declare function change_waddler_drop(ent_types: Array<ENT_TYPE>) : void
declare function poison_entity(entity_uid: number) : void
declare function modify_ankh_health_gain(max_health: number, beat_add_health: number) : void
declare function create_illumination(color: Color, size: number, x: number, y: number) : Illumination
declare function create_illumination(color: Color, size: number, uid: number) : Illumination
declare function refresh_illumination(illumination: Illumination) : void
declare function toast_visible() : boolean
declare function speechbubble_visible() : boolean
declare function cancel_toast() : void
declare function cancel_speechbubble() : void
declare function seed_prng(seed: number) : void
declare function get_character_name(type_id: ENT_TYPE) : string
declare function get_character_short_name(type_id: ENT_TYPE) : string
declare function get_character_heart_color(type_id: ENT_TYPE) : Color
declare function is_character_female(type_id: ENT_TYPE) : boolean
declare function set_character_heart_color(type_id: ENT_TYPE, color: Color) : void
declare function get_particle_type(id: number) : ParticleDB
declare function generate_world_particles(particle_emitter_id: number, uid: number) : ParticleEmitterInfo
declare function generate_screen_particles(particle_emitter_id: number, x: number, y: number) : ParticleEmitterInfo
declare function advance_screen_particles(particle_emitter: ParticleEmitterInfo) : void
declare function render_screen_particles(particle_emitter: ParticleEmitterInfo) : void
declare function extinguish_particles(particle_emitter: ParticleEmitterInfo) : void
declare function default_spawn_is_valid(x: number, y: number, layer: number) : boolean
declare function set_pre_tile_code_callback(cb: Callback, tile_code: string) : CallbackId
declare function set_post_tile_code_callback(cb: Callback, tile_code: string) : CallbackId
declare function define_tile_code(tile_code: string) : TILE_CODE
declare function get_short_tile_code(short_tile_code_def: ShortTileCodeDef) : number | undefined
declare function get_short_tile_code_definition(short_tile_code: SHORT_TILE_CODE) : ShortTileCodeDef | undefined
declare function define_procedural_spawn(procedural_spawn: string, do_spawn: Callback, is_valid: Callback) : PROCEDURAL_CHANCE
declare function define_extra_spawn(do_spawn: Callback, is_valid: Callback, num_spawns_frontlayer: number, num_spawns_backlayer: number) : number
declare function get_missing_extra_spawns(extra_spawn_chance_id: number) : [number, number]
declare function get_room_index(x: number, y: number) : [number, number]
declare function get_room_pos(x: number, y: number) : [number, number]
declare function get_room_template(x: number, y: number, layer: LAYER) : number | undefined
declare function is_room_flipped(x: number, y: number) : boolean
declare function get_room_template_name(room_template: number) : string
declare function define_room_template(room_template: string, type: ROOM_TEMPLATE_TYPE) : number
declare function set_room_template_size(room_template: number, width: number, height: number) : boolean
declare function get_procedural_spawn_chance(chance_id: PROCEDURAL_CHANCE) : number
declare function get_co_subtheme() : number
declare function force_co_subtheme(subtheme: number) : void
declare function get_level_config(config: LEVEL_CONFIG) : number
declare function create_sound(path: string) : CustomSound | undefined
declare function get_sound(path_or_vanilla_sound: string) : CustomSound | undefined
declare function set_vanilla_sound_callback(name: VANILLA_SOUND, types: VANILLA_SOUND_CALLBACK_TYPE, cb: Callback) : CallbackId
declare function clear_vanilla_sound_callback(id: CallbackId) : void
declare function rgba(r: number, g: number, b: number, a: number) : uColor
declare function draw_text_size(size: number, text: string) : [number, number]
declare function create_image(path: string) : [IMAGE, number, number]
declare function mouse_position() : [number, number]
declare function get_io() : void
declare function set_drop_chance(dropchance_id: number, new_drop_chance: number) : void
declare function replace_drop(drop_id: number, new_drop_entity_type: ENT_TYPE) : void
declare function get_texture_definition(texture_id: TEXTURE) : TextureDefinition
declare function define_texture(texture_data: TextureDefinition) : TEXTURE
declare function reload_texture(texture_path: string) : void
declare function get_hitbox(uid: number, extrude: number | undefined, offsetx: number | undefined, offsety: number | undefined) : AABB
declare function get_render_hitbox(uid: number, extrude: number | undefined, offsetx: number | undefined, offsety: number | undefined) : AABB
declare function screen_aabb(box: AABB) : AABB
declare function udp_listen(host: string, port: in_port_t, cb: Callback) : UdpServer
declare function udp_send(host: string, port: in_port_t, msg: string) : void
//## Types
//Using the api through these directly is kinda dangerous, but such is life. I got pretty bored writing this doc generator at this point, so you can find the variable types in the [source files](https://github.com/spelunky-fyi/overlunky/tree/main/src/game_api). They're mostly just ints and floats. Example:
/*```lua
-- This doesn't make any sense, as you could just access the variables directly from players[]
-- It's just a weird example OK!
ids = get_entities_by_mask(MASK.PLAYER) -- This just covers CHARs
for i,id in ipairs(ids) do
    e = get_entity(id)     -- casts Entity to Player automatically
    e.health = 99          -- setting Player::health
    e.inventory.bombs = 99 -- setting Inventory::bombs
    e.inventory.ropes = 99 -- setting Inventory::ropes
    e.type.jump = 0.36     -- setting EntityDB::jump
end
```*/
declare class SaveContext {
    save(data: string): boolean
}
declare class LoadContext {
    load(): string
}
declare class ArenaConfigArenas {
    dwelling_1: boolean
    dwelling_2: boolean
    dwelling_3: boolean
    dwelling_4: boolean
    dwelling_5: boolean
    jungle_1: boolean
    jungle_2: boolean
    jungle_3: boolean
    jungle_4: boolean
    jungle_5: boolean
    volcana_1: boolean
    volcana_2: boolean
    volcana_3: boolean
    volcana_4: boolean
    volcana_5: boolean
    tidepool_1: boolean
    tidepool_2: boolean
    tidepool_3: boolean
    tidepool_4: boolean
    tidepool_5: boolean
    temple_1: boolean
    temple_2: boolean
    temple_3: boolean
    temple_4: boolean
    temple_5: boolean
    icecaves_1: boolean
    icecaves_2: boolean
    icecaves_3: boolean
    icecaves_4: boolean
    icecaves_5: boolean
    neobabylon_1: boolean
    neobabylon_2: boolean
    neobabylon_3: boolean
    neobabylon_4: boolean
    neobabylon_5: boolean
    sunkencity_1: boolean
    sunkencity_2: boolean
    sunkencity_3: boolean
    sunkencity_4: boolean
    sunkencity_5: boolean
}
declare class ArenaConfigItems {
    rock: boolean
    pot: boolean
    bombbag: boolean
    bombbox: boolean
    ropepile: boolean
    pickup_12bag: boolean
    pickup_24bag: boolean
    cooked_turkey: boolean
    royal_jelly: boolean
    torch: boolean
    boomerang: boolean
    machete: boolean
    mattock: boolean
    crossbow: boolean
    webgun: boolean
    freezeray: boolean
    shotgun: boolean
    camera: boolean
    plasma_cannon: boolean
    wooden_shield: boolean
    metal_shield: boolean
    teleporter: boolean
    mine: boolean
    snaptrap: boolean
    paste: boolean
    climbing_gloves: boolean
    pitchers_mitt: boolean
    spike_shoes: boolean
    spring_shoes: boolean
    parachute: boolean
    cape: boolean
    vlads_cape: boolean
    jetpack: boolean
    hoverpack: boolean
    telepack: boolean
    powerpack: boolean
    excalibur: boolean
    scepter: boolean
    kapala: boolean
    true_crown: boolean
}
declare class ArenaConfigEquippedItems {
    paste: boolean
    climbing_gloves: boolean
    pitchers_mitt: boolean
    spike_shoes: boolean
    spring_shoes: boolean
    parachute: boolean
    kapala: boolean
    scepter: boolean
}
declare class ArenaState {
    current_arena: number
    player_teams: Array<number>
    format: number
    ruleset: number
    player_lives: Array<number>
    player_totalwins: Array<number>
    player_won: Array<boolean>
    timer: number
    timer_ending: number
    wins: number
    lives: number
    player_idolheld_countdown: Array<number>
    health: number
    bombs: number
    ropes: number
    stun_time: number
    mount: number
    arena_select: number
    arenas: ArenaConfigArenas
    dark_level_chance: number
    crate_frequency: number
    items_enabled: ArenaConfigItems
    items_in_crate: ArenaConfigItems
    held_item: number
    equipped_backitem: number
    equipped_items: ArenaConfigEquippedItems
    whip_damage: number
    final_ghost: boolean
    breath_cooldown: number
    punish_ball: boolean
}
declare class SelectPlayerSlot {
    activated: boolean
    character: ENT_TYPE
    texture: number
}
declare class Items {
    player_count: number
    saved_pets_count: number
    saved_pets: Array<ENT_TYPE>
    is_pet_cursed: Array<boolean>
    is_pet_poisoned: Array<boolean>
    player_inventory: Array<Inventory>
    player_select: Array<SelectPlayerSlot>
}
declare class StateMemory {
    screen_last: number
    screen: number
    screen_next: number
    ingame: number
    playing: number
    pause: number
    width: number
    height: number
    kali_favor: number
    kali_status: number
    kali_altars_destroyed: number
    kali_gifts: number
    seed: number
    time_total: number
    world: number
    world_next: number
    world_start: number
    level: number
    level_next: number
    level_start: number
    theme: number
    theme_next: number
    theme_start: number
    force_current_theme(t: number): void
    shoppie_aggro: number
    shoppie_aggro_next: number
    merchant_aggro: number
    kills_npc: number
    level_count: number
    damage_taken: number
    journal_flags: number
    time_last_level: number
    time_level: number
    level_flags: number
    loading: number
    quest_flags: number
    presence_flags: number
    fadevalue: number
    fadeout: number
    fadein: number
    loading_black_screen_timer: number
    saved_dogs: number
    saved_cats: number
    saved_hamsters: number
    win_state: number
    illumination: Illumination
    money_last_levels: number
    money_shop_total: number
    player_inputs: PlayerInputs
    quests: QuestsInfo
    camera: Camera
    special_visibility_flags: number
    cause_of_death: number
    cause_of_death_entity_type: ENT_TYPE
    toast_timer: number
    speechbubble_timer: number
    speechbubble_owner: number
    level_gen: LevelGenSystem
    correct_ushabti: number
    items: Items
    camera_layer: number
    screen_team_select: ScreenTeamSelect
    screen_character_select: ScreenCharacterSelect
    screen_transition: ScreenTransition
    screen_death: ScreenDeath
    screen_win: ScreenWin
    screen_credits: ScreenCredits
    screen_scores: ScreenScores
    screen_constellation: ScreenConstellation
    screen_recap: ScreenRecap
    screen_arena_stages_select: ScreenArenaStagesSelect
    screen_arena_intro: void
    screen_arena_level: ScreenArenaLevel
    screen_arena_score: ScreenArenaScore
    screen_arena_menu: ScreenArenaMenu
    screen_arena_items: ScreenArenaItems
    get_correct_ushabti(): number
    set_correct_ushabti(animation_frame: number): void
    arena: ArenaState
    speedrun_character: ENT_TYPE
    speedrun_activation_trigger: number
    end_spaceship_character: ENT_TYPE
    world2_coffin_spawned: boolean
    world4_coffin_spawned: boolean
    world6_coffin_spawned: boolean
    first_damage_cause: ENT_TYPE
    first_damage_world: number
    first_damage_level: number
    time_speedrun: number
    coffin_contents: ENT_TYPE
    screen_change_counter: number
    time_startup: number
    logic: LogicList
}
declare class GameManager {
    game_props: GameProps
    screen_logo: ScreenLogo
    screen_intro: void
    screen_prologue: ScreenPrologue
    screen_title: ScreenTitle
    screen_menu: ScreenMenu
    screen_options: ScreenOptions
    screen_player_profile: ScreenPlayerProfile
    screen_leaderboards: ScreenLeaderboards
    screen_seed_input: ScreenSeedInput
    screen_camp: ScreenCamp
    screen_level: ScreenLevel
    screen_online_loading: ScreenOnlineLoading
    screen_online_lobby: ScreenOnlineLobby
    pause_ui: PauseUI
    journal_ui: JournalUI
    save_related: SaveRelated
}
declare class SaveRelated {
    journal_popup_ui: JournalPopupUI
}
declare class JournalPopupUI {
    wiggling_page_icon: TextureRenderingInfo
    black_background: TextureRenderingInfo
    button_icon: TextureRenderingInfo
    wiggling_page_angle: number
    chapter_to_show: number
    entry_to_show: number
    timer: number
    slide_position: number
}
declare class GameProps {
    buttons: number
    game_has_focus: boolean
}
declare class LightParams {
    red: number
    green: number
    blue: number
    size: number
}
declare class Illumination {
    lights: Array<LightParams>
    light1: LightParams
    light2: LightParams
    light3: LightParams
    light4: LightParams
    brightness: number
    brightness_multiplier: number
    light_pos_x: number
    light_pos_y: number
    offset_x: number
    offset_y: number
    distortion: number
    entity_uid: number
    flags: number
    type_flags: number
    enabled: boolean
    layer: number
}
declare class Camera {
    bounds_left: number
    bounds_right: number
    bounds_bottom: number
    bounds_top: number
    adjusted_focus_x: number
    adjusted_focus_y: number
    focus_offset_x: number
    focus_offset_y: number
    focus_x: number
    focus_y: number
    vertical_pan: number
    shake_countdown_start: number
    shake_countdown: number
    shake_amplitude: number
    shake_multiplier_x: number
    shake_multiplier_y: number
    uniform_shake: boolean
    focused_entity_uid: number
    inertia: number
}
declare class Online {
    online_players: Array<OnlinePlayer>
    local_player: OnlinePlayerShort
    lobby: OnlineLobby
}
declare class OnlinePlayer {
    ready_state: number
    character: number
    player_name: void
}
declare class OnlineLobby {
    code: number
    get_code(): string
}
declare class LogicList {
    olmec_cutscene: LogicOlmecCutscene
    tiamat_cutscene: LogicTiamatCutscene
    diceshop: LogicDiceShop
}
declare class LogicOlmecCutscene extends Logic {
    olmec: Entity
    player: Entity
    cinematic_anchor: Entity
    timer: number
}
declare class LogicTiamatCutscene extends Logic {
    tiamat: Entity
    player: Entity
    cinematic_anchor: Entity
    timer: number
}
declare class LogicDiceShop extends Logic {
    bet_machine: number
    die1: number
    die2: number
    die_1_value: number
    die_2_value: number
    prize_dispenser: number
    prize: number
    forcefield: number
    bet_active: boolean
    forcefield_deactivated: boolean
    boss_angry: boolean
    result_announcement_timer: number
    won_prizes_count: number
    balance: number
}
declare class PRNG {
    seed(seed: number): void
    random_float: void
    random_chance(inverse_chance: number, type: PRNG_CLASS): boolean
    random_index(i: number, type: PRNG_CLASS): number | undefined
    random_int: number | undefined
    random(): number
    random(i: number): number | undefined
    random(min: number, max: number): number | undefined
    get_pair: number | undefined
    set_pair: number | undefined
}
declare class Color {
    constructor()
    constructor(Color: Color)
    constructor(r_: number, g_: number, b_: number, a_: number)
    r: number
    g: number
    b: number
    a: number
    static white(): Color
    static silver(): Color
    static gray(): Color
    static black(): Color
    static red(): Color
    static maroon(): Color
    static yellow(): Color
    static olive(): Color
    static lime(): Color
    static green(): Color
    static aqua(): Color
    static teal(): Color
    static blue(): Color
    static navy(): Color
    static fuchsia(): Color
    static purple(): Color
    get_rgba(): [number, number, number, number]
    set_rgba(red: number, green: number, blue: number, alpha: number): void
    get_ucolor(): uColor
    set_ucolor(color: uColor): void
}
declare class Animation {
    first_tile: number
    num_tiles: number
    interval: void
    repeat_mode: REPEAT_TYPE
}
declare class EntityDB {
    id: ENT_TYPE
    search_flags: number
    width: number
    height: number
    offsetx: void
    offsety: void
    hitboxx: void
    hitboxy: void
    draw_depth: number
    friction: number
    elasticity: number
    weight: number
    acceleration: number
    max_speed: number
    sprint_factor: void
    jump: number
    glow_red: number
    glow_green: number
    glow_blue: number
    glow_alpha: number
    damage: number
    life: number
    blood_content: number
    texture: number
    animations: void
    properties_flags: number
    default_flags: number
    default_more_flags: number
    leaves_corpse_behind: boolean
    sound_killed_by_player: number
    sound_killed_by_other: number
    description: STRINGID
}
declare class Entity {
    type: EntityDB
    overlay: Entity
    flags: number
    more_flags: number
    uid: number
    animation_frame: number
    draw_depth: number
    x: number
    y: number
    layer: number
    width: number
    height: number
    special_offsetx: number
    special_offsety: number
    tile_width: number
    tile_height: number
    angle: number
    color: Color
    hitboxx: number
    hitboxy: number
    offsetx: number
    offsety: number
    topmost(): Entity
    topmost_mount(): Entity
    overlaps_with(hitbox: AABB): boolean
    overlaps_with(rect_left: number, rect_bottom: number, rect_right: number, rect_top: number): boolean
    overlaps_with(other: Entity): boolean
    get_texture(): TEXTURE
    set_texture(texture_id: TEXTURE): boolean
    set_draw_depth(draw_depth: number): void
    liberate_from_shop(): void
    get_held_entity(): Entity
    set_layer(layer: LAYER): void
    remove(): void
    respawn(layer: LAYER): void
    destroy(): void
    activate(activator: Entity): void
    perform_teleport(delta_x: number, delta_y: number): void
    trigger_action(user: Entity): boolean
    get_metadata: boolean
    apply_metadata(metadata: number): void
}
declare class Movable extends Entity {
    movex: number
    movey: number
    buttons: BUTTON
    buttons_previous: BUTTON
    stand_counter: number
    jump_height_multiplier: number
    owner_uid: number
    last_owner_uid: number
    idle_counter: number
    standing_on_uid: number
    velocityx: number
    velocityy: number
    holding_uid: number
    state: number
    last_state: number
    move_state: number
    health: number
    stun_timer: number
    stun_state: number
    lock_input_timer: number
    some_state: number
    wet_effect_timer: number
    poison_tick_timer: number
    airtime: number
    falling_timer: number
    is_poisoned: (() => {}) | boolean
    //is_poisoned(): boolean
    poison(frames: number): void
    dark_shadow_timer: number
    onfire_effect_timer: number
    exit_invincibility_timer: number
    invincibility_frames_timer: number
    frozen_timer: number
    is_button_pressed(button: BUTTON): boolean
    is_button_held(button: BUTTON): boolean
    is_button_released(button: BUTTON): boolean
    price: number
    stun(framecount: number): void
    freeze(framecount: number): void
    light_on_fire(): void
    set_cursed(b: boolean): void
    drop: ((entity_to_drop: Entity) => {}) | boolean
    //drop(entity_to_drop: Entity): void
    pick_up(entity_to_pick_up: Entity): void
    can_jump(): boolean
    standing_on(): Entity
    add_money(money: number): void
    damage(damage_dealer_uid: number, damage_amount: number, stun_time: number, velocity_x: number, velocity_y: number, iframes: number): void
}
declare class PowerupCapable extends Movable {
    remove_powerup(powerup_type: ENT_TYPE): void
    give_powerup(powerup_type: ENT_TYPE): void
    has_powerup(powerup_type: ENT_TYPE): boolean
    get_powerups(): Array<ENT_TYPE>
    unequip_backitem(): void
    worn_backitem(): number
}
declare class Inventory {
    money: number
    bombs: number
    ropes: number
    player_slot: number
    poison_tick_timer: number
    cursed: boolean
    elixir_buff: boolean
    health: number
    kapala_blood_amount: number
    time_of_death: number
    held_item: ENT_TYPE
    held_item_metadata: number
    mount_type: ENT_TYPE
    mount_metadata: number
    kills_level: number
    kills_total: number
    collected_money_total: number
    collected_money: Array<ENT_TYPE>
    collected_money_values: Array<number>
    killed_enemies: Array<ENT_TYPE>
    companion_count: number
    companions: Array<ENT_TYPE>
    companion_held_items: Array<ENT_TYPE>
    companion_held_item_metadatas: Array<number>
    companion_trust: Array<number>
    companion_health: Array<number>
    companion_poison_tick_timers: Array<number>
    is_companion_cursed: Array<boolean>
}
declare class Ai {
    target: Entity
    target_uid: number
    timer: number
    state: number
    trust: number
    whipped: number
}
declare class Player extends PowerupCapable {
    inventory: Inventory
    emitted_light: Illumination
    linked_companion_parent: number
    linked_companion_child: number
    ai: Ai
    set_jetpack_fuel(fuel: number): void
    kapala_blood_amount(): number
    get_name(): string
    get_short_name(): string
    get_heart_color(): Color
    is_female(): boolean
    set_heart_color(hcolor: Color): void
}
declare class Floor extends Entity {
    deco_top: number
    deco_bottom: number
    deco_left: number
    deco_right: number
    fix_border_tile_animation(): void
    fix_decorations(fix_also_neighbors: boolean, fix_styled_floor: boolean): void
    add_decoration(side: FLOOR_SIDE): void
    remove_decoration(side: FLOOR_SIDE): void
    decorate_internal: void
}
declare class Door extends Floor {
    counter: number
    fx_button: Entity
}
declare class ExitDoor extends Door {
    entered: boolean
    special_door: boolean
    level: number
    timer: number
    world: number
    theme: number
}
declare class DecoratedDoor extends ExitDoor {
    special_bg: Entity
}
declare class LockedDoor extends Door {
    unlocked: boolean
}
declare class CityOfGoldDoor extends DecoratedDoor {
    unlocked: boolean
}
declare class MainExit extends ExitDoor {
}
declare class EggShipDoor extends Door {
    timer: number
}
declare class EggShipDoorS extends EggShipDoor {
    entered: boolean
}
declare class Arrowtrap extends Floor {
    arrow_shot: boolean
    rearm(): void
    trigger(who_uid: number): void
}
declare class TotemTrap extends Floor {
    spawn_entity_type: ENT_TYPE
    first_sound_id: number
    trigger(who_uid: number, left: boolean): void
}
declare class LaserTrap extends Floor {
    emitted_light: Illumination
    reset_timer: number
    phase_2: boolean
}
declare class SparkTrap extends Floor {
    emitted_light: Illumination
    spark_uid: number
}
declare class Altar extends Floor {
    timer: number
}
declare class SpikeballTrap extends Floor {
    chain: Entity
    end_piece: Entity
    state: number
    timer: number
}
declare class TransferFloor extends Floor {
    transferred_entities: void
}
declare class ConveyorBelt extends TransferFloor {
    timer: number
}
declare class Pipe extends Floor {
    direction_type: number
    end_pipe: boolean
}
declare class Generator extends Floor {
    spawned_uid: number
    set_timer: number
    timer: number
    start_counter: number
    on_off: boolean
}
declare class SlidingWallCeiling extends Floor {
    attached_piece: Entity
    active_floor_part_uid: number
    state: number
}
declare class QuickSand extends Floor {
}
declare class BigSpearTrap extends Floor {
    spear_uid: number
    left_part: boolean
    trigger(who_uid: number, left: boolean): void
}
declare class StickyTrap extends Floor {
    attached_piece_uid: number
    ball_uid: number
    state: number
    timer: number
}
declare class MotherStatue extends Floor {
    players_standing: Array<boolean>
    player1_standing: boolean
    player2_standing: boolean
    player3_standing: boolean
    player4_standing: boolean
    players_health_received: Array<boolean>
    player1_health_received: boolean
    player2_health_received: boolean
    player3_health_received: boolean
    player4_health_received: boolean
    players_health_timer: Array<number>
    player1_health_timer: number
    player2_health_timer: number
    player3_health_timer: number
    player4_health_timer: number
    eggplantchild_timer: number
    eggplantchild_detected: boolean
}
declare class TeleportingBorder extends Floor {
    direction: number
}
declare class ForceField extends Floor {
    first_item_beam: Entity
    fx: Entity
    emitted_light: Illumination
    is_on: boolean
    activate_laserbeam(turn_on: boolean): void
}
declare class TimedForceField extends ForceField {
    timer: number
    pause: boolean
}
declare class HorizontalForceField extends Floor {
    first_item_beam: Entity
    fx: Entity
    timer: number
    is_on: boolean
}
declare class TentacleBottom extends Floor {
    attached_piece_uid: number
    tentacle_uid: number
    state: number
}
declare class PoleDeco extends Floor {
    deco_up: number
    deco_down: number
}
declare class JungleSpearTrap extends Floor {
    trigger(who_uid: number, direction: number): void
}
declare class Crushtrap extends Movable {
    dirx: number
    diry: number
    timer: number
    bounce_back_timer: number
}
declare class Olmec extends Movable {
    target_uid: number
    attack_phase: number
    attack_timer: number
    ai_timer: number
    move_direction: number
    jump_timer: number
    phase1_amount_of_bomb_salvos: number
    unknown_attack_state: number
    broken_floaters: void
}
declare class WoodenlogTrap extends Movable {
    ceiling_1_uid: number
    ceiling_2_uid: number
    falling_speed: number
}
declare class Boulder extends Movable {
    is_rolling: number
}
declare class PushBlock extends Movable {
    dust_particle: ParticleEmitterInfo
    dest_pos_x: number
}
declare class BoneBlock extends Movable {
}
declare class ChainedPushBlock extends PushBlock {
    is_chained: boolean
}
declare class LightArrowPlatform extends Movable {
    emitted_light: Illumination
}
declare class FallingPlatform extends Movable {
    emitted_light: number
    timer: number
    shaking_factor: number
    y_pos: number
}
declare class UnchainedSpikeBall extends Movable {
    bounce: boolean
}
declare class Drill extends Movable {
    top_chain_piece: Entity
    trigger(): void
}
declare class ThinIce extends Movable {
    strength: number
}
declare class Elevator extends Movable {
    emitted_light: Illumination
    timer: number
    moving_up: boolean
}
declare class ClamBase extends Movable {
    treasure_type: ENT_TYPE
    treasure_uid: number
    treasure_x_pos: number
    treasure_y_pos: number
    top_part_uid: number
}
declare class RegenBlock extends Movable {
    on_breaking: boolean
}
declare class TimedPowderkeg extends PushBlock {
    timer: number
}
declare class Mount extends Movable {
    carry(rider: Movable): void
    tame(value: boolean): void
    rider_uid: number
    can_doublejump: boolean
    tamed: boolean
    walk_pause_timer: number
    taming_timer: number
}
declare class Rockdog extends Mount {
    attack_cooldown: number
}
declare class Axolotl extends Mount {
    attack_cooldown: number
    can_teleport: boolean
}
declare class Mech extends Mount {
    gun_cooldown: number
    walking: boolean
    breaking_wall: boolean
}
declare class Qilin extends Mount {
    attack_cooldown: number
}
declare class Monster extends PowerupCapable {
    chased_target_uid: number
    target_selection_timer: number
}
declare class RoomOwner extends Monster {
    room_index: number
    climb_y_direction: number
    ai_state: number
    patrol_timer: number
    lose_interest_timer: void
    countdown_timer: number
    is_patrolling: boolean
    aggro_trigger: boolean
    was_hurt: boolean
}
declare class WalkingMonster extends Monster {
    chatting_to_uid: number
    walk_pause_timer: number
    cooldown_timer: number
}
declare class NPC extends Monster {
    climb_direction: number
    target_in_sight_timer: number
    ai_state: number
    aggro: boolean
}
declare class Ghost extends Monster {
    split_timer: number
    velocity_multiplier: number
    ghost_behaviour: GHOST_BEHAVIOR
    emitted_light: Illumination
    linked_ghost: Entity
}
declare class Bat extends Monster {
    spawn_x: number
    spawn_y: number
}
declare class Jiangshi extends Monster {
    wait_timer: number
    jump_counter: number
    on_ceiling: boolean
}
declare class Monkey extends Monster {
    jump_timer: number
    on_vine: boolean
}
declare class GoldMonkey extends Monster {
    jump_timer: number
    poop_timer: number
    poop_count: number
}
declare class Mole extends Monster {
    burrowing_particle: ParticleEmitterInfo
    burrow_dir_x: number
    burrow_dir_y: number
    burrowing_in_uid: number
    counter_burrowing: number
    counter_nonburrowing: number
    countdown_for_appearing: number
    digging_state: number
}
declare class Spider extends Monster {
    ceiling_pos_x: number
    ceiling_pos_y: number
    jump_timer: number
    trigger_distance: number
}
declare class HangSpider extends Monster {
    dangle_jump_timer: number
    ceiling_pos_x: number
    ceiling_pos_y: number
}
declare class Shopkeeper extends RoomOwner {
    name: number
    shotgun_attack_delay: number
    shop_owner: boolean
}
declare class Yang extends RoomOwner {
    turkeys_in_den: Array<number>
    first_message_shown: boolean
    quest_incomplete: boolean
    special_message_shown: boolean
}
declare class Tun extends RoomOwner {
    arrows_left: number
    reload_timer: number
    challenge_fee_paid: boolean
    congrats_challenge: boolean
    murdered: boolean
    shop_entered: boolean
    tiamat_encounter: boolean
}
declare class Pet extends Monster {
    fx_button: Entity
    petting_by_uid: number
    yell_counter: number
    func_timer: number
    active_state: number
}
declare class Caveman extends WalkingMonster {
    wake_up_timer: number
    can_pick_up_timer: number
    aggro_timer: number
}
declare class CavemanShopkeeper extends WalkingMonster {
    tripping: boolean
    shop_entered: boolean
}
declare class HornedLizard extends Monster {
    eaten_uid: number
    walk_pause_timer: number
    attack_cooldown_timer: number
    blood_squirt_timer: number
    particle: ParticleEmitterInfo
}
declare class Mosquito extends Monster {
    direction_x: number
    direction_y: number
    stuck_rel_pos_x: number
    stuck_rel_pos_y: number
    timer: number
}
declare class Mantrap extends Monster {
    walk_pause_timer: number
    eaten_uid: number
}
declare class Skeleton extends Monster {
    explosion_timer: number
}
declare class Scarab extends Monster {
    emitted_light: Illumination
    timer: number
}
declare class Imp extends Monster {
    carrying_uid: number
    patrol_y_level: number
}
declare class Lavamander extends Monster {
    emitted_light: Illumination
    shoot_lava_timer: number
    jump_pause_timer: number
    lava_detection_timer: number
    is_hot: boolean
    player_detect_state: number
}
declare class Firebug extends Monster {
    fire_timer: number
    going_up: boolean
    detached_from_chain: boolean
}
declare class FirebugUnchained extends Monster {
    max_flight_height: number
    ai_timer: number
    walking_timer: number
}
declare class Robot extends WalkingMonster {
    emitted_light_explosion: Illumination
}
declare class Quillback extends WalkingMonster {
    particle: ParticleEmitterInfo
    seen_player: boolean
}
declare class Leprechaun extends WalkingMonster {
    hump_timer: number
    target_in_sight_timer: number
    gold: number
    timer_after_humping: number
}
declare class Crocman extends WalkingMonster {
    teleport_cooldown: number
}
declare class Mummy extends Monster {
    walk_pause_timer: number
}
declare class VanHorsing extends NPC {
    show_text: boolean
}
declare class WitchDoctor extends WalkingMonster {
    skull_regen_timer: number
}
declare class WitchDoctorSkull extends Monster {
    witch_doctor_uid: number
    emitted_light: Illumination
    rotation_angle: number
}
declare class ForestSister extends NPC {
    walk_pause_timer: number
}
declare class Vampire extends Monster {
    jump_trigger_distance_x: number
    jump_trigger_distance_y: number
    sleep_pos_x: number
    sleep_pos_y: number
    walk_pause_timer: number
}
declare class Vlad extends Vampire {
    teleport_timer: number
    aggro: boolean
}
declare class Waddler extends RoomOwner {
    player_detected: boolean
    on_the_ground: boolean
    air_timer: number
}
declare class Octopus extends WalkingMonster {
}
declare class Bodyguard extends NPC {
    position_state: number
    message_shown: boolean
}
declare class Fish extends Monster {
    change_direction_timer: number
}
declare class GiantFish extends Monster {
    change_direction_timer: number
    lose_interest_timer: void
}
declare class Crabman extends Monster {
    walk_pause_timer: number
    invincibility_timer: number
    poison_attack_timer: number
    attacking_claw_uid: number
    at_maximum_attack: boolean
}
declare class Kingu extends Monster {
    climb_direction_x: number
    climb_direction_y: number
    climb_pause_timer: number
    shell_invincibility_timer: number
    monster_spawn_timer: number
    initial_shell_health: number
    player_seen_by_kingu: boolean
}
declare class Anubis extends Monster {
    spawn_x: number
    spawn_y: number
    attack_proximity_y: number
    attack_proximity_x: number
    ai_timer: number
    next_attack_timer: number
    psychic_orbs_counter: number
    awake: boolean
}
declare class Cobra extends Monster {
    spit_timer: number
}
declare class CatMummy extends Monster {
    ai_state: number
    attack_timer: number
}
declare class Sorceress extends WalkingMonster {
    inbetween_attack_timer: number
    in_air_timer: number
    halo_emitted_light: Illumination
    fx_entity: Entity
    hover_timer: number
}
declare class MagmaMan extends Monster {
    emitted_light: Illumination
    particle: ParticleEmitterInfo
    jump_timer: number
    alive_timer: number
}
declare class Bee extends Monster {
    can_rest: boolean
    fly_hang_timer: number
    targeting_timer: number
    wobble_x: number
    wobble_y: number
}
declare class Ammit extends Monster {
    walk_pause_timer: number
    particle: ParticleEmitterInfo
}
declare class ApepPart extends Monster {
    y_pos: number
    sine_angle: number
    sync_timer: number
}
declare class ApepHead extends ApepPart {
    distance_traveled: number
    tail_uid: number
    fx_mouthpiece1_uid: number
    fx_mouthpiece2_uid: number
}
declare class OsirisHead extends Monster {
    right_hand_uid: number
    left_hand_uid: number
    moving_left: boolean
    targeting_timer: number
    invincibility_timer: number
}
declare class OsirisHand extends Monster {
    attack_cooldown_timer: number
}
declare class Alien extends Monster {
    jump_timer: number
}
declare class UFO extends Monster {
    patrol_distance: number
    attack_cooldown_timer: number
    is_falling: boolean
}
declare class Lahamu extends Monster {
    attack_cooldown_timer: number
}
declare class YetiQueen extends Monster {
    walk_pause_timer: number
}
declare class YetiKing extends Monster {
    walk_pause_timer: number
    emitted_light: Illumination
    particle_fog: ParticleEmitterInfo
    particle_dust: ParticleEmitterInfo
    particle_sparkles: ParticleEmitterInfo
}
declare class Lamassu extends Monster {
    attack_effect_entity: Entity
    particle: ParticleEmitterInfo
    emitted_light: Illumination
    walk_pause_timer: number
    flight_timer: number
    attack_timer: number
    attack_angle: number
}
declare class Olmite extends WalkingMonster {
    armor_on: boolean
    in_stack: boolean
    in_stack2: boolean
    on_top_uid: number
    y_offset: number
    attack_cooldown_timer: number
}
declare class Tiamat extends Monster {
    fx_tiamat_head: number
    fx_tiamat_arm_right1: number
    fx_tiamat_arm_right2: number
    frown_timer: number
    damage_timer: number
    attack_timer: number
    tail_angle: number
    tail_radian: number
    tail_move_speed: number
    right_arm_angle: number
}
declare class GiantFrog extends Monster {
    door_front_layer: Entity
    door_back_layer: Entity
    platform: Entity
    attack_timer: number
    frogs_ejected_in_cycle: number
    invincibility_timer: number
    mouth_close_timer: number
    mouth_open_trigger: boolean
}
declare class Frog extends Monster {
    grub_being_eaten_uid: number
    jump_timer: number
    pause: boolean
}
declare class FireFrog extends Frog {
}
declare class Grub extends Monster {
    rotation_delta: number
    drop: boolean
    looking_for_new_direction_timer: number
    walk_pause_timer: number
    turn_into_fly_timer: void
    particle: ParticleEmitterInfo
}
declare class Tadpole extends Monster {
    acceleration_timer: number
    player_spotted: boolean
}
declare class GiantFly extends Monster {
    head_entity: Entity
    particle: ParticleEmitterInfo
    sine_amplitude: number
    sine_frequency: number
    delta_y_angle: number
    sine_counter: number
}
declare class Ghist extends Monster {
    body_uid: number
    idle_timer: number
    transparency: number
    fadeout: number
}
declare class JumpDog extends Monster {
    walk_pause_timer: number
    squish_timer: number
}
declare class EggplantMinister extends Monster {
    walk_pause_timer: number
    squish_timer: number
}
declare class Yama extends Monster {
    message_shown: boolean
}
declare class Hundun extends Monster {
    applied_hor_velocity: number
    applied_ver_velocity: number
    birdhead_entity_uid: number
    snakehead_entity_uid: number
    y_level: number
    bounce_timer: number
    fireball_timer: number
    birdhead_defeated: boolean
    snakehead_defeated: boolean
    hundun_flags: number
}
declare class HundunHead extends Monster {
    attack_position_x: number
    attack_position_y: number
    egg_crack_effect_uid: number
    targeted_player_uid: number
    looking_for_target_timer: number
    invincibility_timer: number
}
declare class MegaJellyfish extends Monster {
    flipper1: Entity
    flipper2: Entity
    orb_uid: number
    tail_bg_uid: number
    applied_velocity: number
    wagging_tail_counter: number
    flipper_distance: number
    velocity_application_timer: number
}
declare class Scorpion extends Monster {
    walk_pause_timer: number
    jump_cooldown_timer: number
}
declare class Hermitcrab extends Monster {
    carried_entity_type: ENT_TYPE
    carried_entity_uid: number
    walk_spit_timer: number
    is_active: boolean
    is_inactive: boolean
    spawn_new_carried_item: boolean
}
declare class Necromancer extends WalkingMonster {
    red_skeleton_spawn_x: number
    red_skeleton_spawn_y: number
    resurrection_uid: number
    resurrection_timer: number
}
declare class ProtoShopkeeper extends Monster {
    movement_state: number
    walk_pause_explode_timer: number
    walking_speed: number
}
declare class Beg extends NPC {
    walk_pause_timer: number
    disappear_timer: number
}
declare class Terra extends Monster {
    fx_button: Entity
    x_pos: number
    abuse_speechbubble_timer: number
}
declare class Critter extends Monster {
    last_picked_up_by_uid: number
    holding_state: number
}
declare class CritterBeetle extends Critter {
    pause: boolean
}
declare class CritterCrab extends Critter {
    walk_pause_timer: number
    walking_left: boolean
}
declare class CritterButterfly extends Critter {
    change_direction_timer: number
    vertical_flight_direction: number
}
declare class CritterLocust extends Critter {
    jump_timer: number
}
declare class CritterSnail extends Critter {
    x_direction: number
    y_direction: number
    pos_x: number
    pos_y: number
    rotation_center_x: number
    rotation_center_y: number
    rotation_angle: number
    rotation_speed: number
}
declare class CritterFish extends Critter {
    swim_pause_timer: number
    player_in_proximity: boolean
}
declare class CritterPenguin extends Critter {
    walk_pause_timer: number
    jump_timer: number
}
declare class CritterFirefly extends Critter {
    sine_amplitude: number
    sine_frequency: number
    sine_angle: number
    change_direction_timer: number
    sit_timer: number
    sit_cooldown_timer: number
}
declare class CritterDrone extends Critter {
    emitted_light: Illumination
    applied_hor_momentum: number
    applied_ver_momentum: number
    move_timer: number
}
declare class CritterSlime extends Critter {
    x_direction: number
    y_direction: number
    pos_x: number
    pos_y: number
    rotation_center_x: number
    rotation_center_y: number
    rotation_angle: number
    rotation_speed: number
    walk_pause_timer: number
}
declare class Bomb extends Movable {
    scale_hor: number
    scale_ver: number
    is_big_bomb: boolean
}
declare class Backpack extends Movable {
    explosion_trigger: boolean
    explosion_timer: number
}
declare class Jetpack extends Backpack {
    flame_on: boolean
    fuel: number
}
declare class TeleporterBackpack extends Backpack {
    teleport_number: number
}
declare class Hoverpack extends Backpack {
    is_on: boolean
}
declare class Cape extends Backpack {
    floating_down: void
}
declare class VladsCape extends Cape {
    can_double_jump: boolean
}
declare class Mattock extends Movable {
    remaining: number
}
declare class Gun extends Movable {
    cooldown: number
    shots: number
    shots2: number
    in_chamber: number
}
declare class Flame extends Movable {
    emitted_light: Illumination
}
declare class FlameSize extends Flame {
    flame_size: number
}
declare class ClimbableRope extends Movable {
    segment_nr_inverse: number
    burn_timer: number
    above_part: Entity
    below_part: Entity
    segment_nr: number
}
declare class Idol extends Movable {
    trap_triggered: boolean
    touch: number
    spawn_x: number
    spawn_y: number
}
declare class Spear extends Movable {
    sound_id: number
}
declare class JungleSpearCosmetic extends Movable {
    move_x: number
    move_y: number
}
declare class WebShot extends Movable {
    shot: boolean
}
declare class HangStrand extends Movable {
    start_pos_y: number
}
declare class HangAnchor extends Movable {
    spider_uid: number
}
declare class Arrow extends Movable {
    flame_uid: number
    is_on_fire: boolean
    is_poisoned: boolean
    shot_from_trap: boolean
}
declare class LightArrow extends Arrow {
    emitted_light: Illumination
}
declare class LightShot extends Movable {
    emitted_light: Illumination
}
declare class LightEmitter extends Movable {
    emitted_light: Illumination
}
declare class ScepterShot extends LightEmitter {
    speed: number
    idle_timer: number
}
declare class SpecialShot extends LightEmitter {
    target_x: number
    target_y: number
}
declare class SoundShot extends LightShot {
}
declare class Spark extends Flame {
    particle: ParticleEmitterInfo
    fx_entity: Entity
    rotation_center_x: number
    rotation_center_y: number
    rotation_angle: number
    size: number
    size_multiply: number
    next_size: number
    size_change_timer: number
}
declare class TiamatShot extends LightEmitter {
}
declare class Fireball extends SoundShot {
    particle: ParticleEmitterInfo
}
declare class Leaf extends Movable {
    fade_away_counter: number
    swing_direction: number
    fade_away_trigger: boolean
}
declare class AcidBubble extends Movable {
    speed_x: number
    speed_y: number
    float_counter: void
}
declare class Claw extends Movable {
    crabman_uid: number
    spawn_x: number
    spawn_y: number
}
declare class StretchChain extends Movable {
    at_end_of_chain_uid: number
    dot_offset: number
    position_in_chain: number
    inverse_doubled_position_in_chain: number
    is_dot_hidden: boolean
}
declare class Chest extends Movable {
    leprechaun: boolean
    bomb: boolean
}
declare class Treasure extends Movable {
    cashed: boolean
}
declare class HundunChest extends Treasure {
    timer: number
}
declare class Boombox extends Movable {
    fx_button: Entity
    music_note1: ParticleEmitterInfo
    music_note2: ParticleEmitterInfo
    spawn_y: number
    station: number
    station_change_delay: number
    jump_timer: number
    jump_state: number
}
declare class TV extends Movable {
    fx_button: Entity
    emitted_light: Illumination
    station: number
}
declare class Telescope extends Movable {
    fx_button: Entity
    camera_anchor: Entity
    looked_through_by_uid: number
}
declare class Torch extends Movable {
    flame_uid: number
    is_lit: boolean
}
declare class WallTorch extends Torch {
    dropped_gold: boolean
}
declare class TorchFlame extends Flame {
    smoke_particle: ParticleEmitterInfo
    flame_particle: ParticleEmitterInfo
    warp_particle: ParticleEmitterInfo
    flame_size: number
}
declare class LampFlame extends Flame {
    flame_particle: ParticleEmitterInfo
}
declare class Bullet extends Movable {
}
declare class TimedShot extends LightShot {
    timer: number
}
declare class CloneGunShot extends LightShot {
    timer: number
    spawn_y: number
}
declare class PunishBall extends Movable {
    attached_to_uid: number
    x_pos: number
    y_pos: number
}
declare class Chain extends Movable {
    attached_to_uid: number
    timer: number
}
declare class Container extends Movable {
    inside: ENT_TYPE
}
declare class Coffin extends Movable {
    inside: ENT_TYPE
    timer: number
    player_respawn: boolean
}
declare class Fly extends Movable {
    timer: number
}
declare class OlmecCannon extends Movable {
    timer: number
    bombs_left: number
}
declare class Landmine extends LightEmitter {
    timer: number
}
declare class UdjatSocket extends Movable {
    fx_button: Entity
}
declare class Ushabti extends Movable {
    wiggle_timer: number
    shine_timer: number
}
declare class Honey extends Movable {
    wiggle_timer: number
}
declare class GiantClamTop extends Movable {
    close_timer: number
    open_timer: number
}
declare class PlayerGhost extends LightEmitter {
    sparkles_particle: ParticleEmitterInfo
    player_inputs: PlayerInputs
    inventory: Inventory
    body_uid: number
    shake_timer: number
    boost_timer: number
}
declare class GhostBreath extends Movable {
    timer: number
    big_cloud: boolean
}
declare class LaserBeam extends Movable {
    sparks: ParticleEmitterInfo
    emitted_light: Illumination
}
declare class TreasureHook extends Movable {
}
declare class AxolotlShot extends Movable {
    trapped_uid: number
    size: number
    swing: number
    swing_periodicity: number
    distance_after_capture: number
}
declare class TrapPart extends Movable {
    ceiling: Entity
}
declare class SkullDropTrap extends Movable {
    left_skull_uid: number
    middle_skull_uid: number
    right_skull_uid: number
    left_skull_drop_time: number
    middle_skull_drop_time: number
    right_skull_drop_time: number
    timer: number
}
declare class FrozenLiquid extends Movable {
}
declare class Switch extends Movable {
    timer: number
}
declare class FlyHead extends Movable {
    vored_entity_uid: number
}
declare class SnapTrap extends Movable {
    bait_uid: number
    reload_timer: number
}
declare class EmpressGrave extends Movable {
    fx_button: Entity
    ghost: Entity
}
declare class Tentacle extends Chain {
    bottom: Entity
}
declare class MiniGameShip extends Movable {
    velocity_x: number
    velocity_y: number
    swing: number
    up_down_normal: number
}
declare class MiniGameAsteroid extends Movable {
    spin_speed: number
}
declare class Pot extends Movable {
    inside: ENT_TYPE
    dont_transfer_dmg: boolean
}
declare class CursedPot extends Movable {
    smoke: ParticleEmitterInfo
    smoke2: ParticleEmitterInfo
}
declare class CookFire extends Movable {
    lit: boolean
    emitted_light: Illumination
    particles_smoke: ParticleEmitterInfo
    particles_flames: ParticleEmitterInfo
    particles_warp: ParticleEmitterInfo
}
declare class Orb extends Movable {
    timer: number
}
declare class EggSac extends Movable {
    timer: number
}
declare class Goldbar extends Movable {
}
declare class Coin extends Movable {
    nominal_price: number
}
declare class RollingItem extends Movable {
    roll_speed: number
}
declare class PlayerBag extends Movable {
    bombs: number
    ropes: number
}
declare class Powerup extends Movable {
}
declare class KapalaPowerup extends Powerup {
    amount_of_blood: number
}
declare class ParachutePowerup extends Powerup {
    falltime_deploy: number
    deployed: boolean
    deploy(): void
}
declare class TrueCrownPowerup extends Powerup {
    timer: number
}
declare class AnkhPowerup extends Powerup {
    player: Entity
    fx_glow: Entity
    timer1: number
    timer2: number
    timer3: number
    music_on_off: boolean
}
declare class YellowCape extends Cape {
}
declare class Teleporter extends Movable {
    teleport_number: number
}
declare class Boomerang extends Movable {
    trail: ParticleEmitterInfo
    distance: number
    rotation: number
    returns_to_uid: number
}
declare class Excalibur extends Movable {
    in_stone: boolean
}
declare class Shield extends Movable {
    shake: number
}
declare class PrizeDispenser extends Movable {
    item_ids: Array<number>
    prizes_spawned: number
}
declare class LiquidSurface extends Movable {
    glow_radius: number
    sine_pos: number
    sine_pos_increment: number
}
declare class OlmecFloater extends Movable {
    both_floaters_intact: void
    on_breaking: boolean
}
declare class EggshipCenterJetFlame extends Movable {
    emitted_light: Illumination
    particle: ParticleEmitterInfo
    smoke_on: boolean
}
declare class MiniGameShipOffset extends Movable {
    offset_x: number
    offset_y: number
    normal_y_offset: number
}
declare class Button extends Movable {
    button_sprite: number
    visibility: number
    is_visible: boolean
    player_trigger: boolean
    seen: number
}
declare class FxTornJournalPage extends Movable {
    page_number: number
}
declare class FxMainExitDoor extends Movable {
    emitted_light: Illumination
    timer: number
}
declare class Birdies extends Movable {
}
declare class Explosion extends Movable {
    emitted_light: Illumination
}
declare class FxOuroboroOccluder extends Movable {
}
declare class FxOuroboroDragonPart extends Movable {
    speed: number
    timer: number
    particle: ParticleEmitterInfo
}
declare class Rubble extends Movable {
}
declare class FxCompass extends Movable {
    sine_angle: number
    visibility: number
    is_active: boolean
}
declare class SleepBubble extends Movable {
    show_hide_timer: number
}
declare class MovingIcon extends Movable {
    movement_timer: number
}
declare class FxSaleContainer extends Movable {
    fx_value: Entity
    fx_icon: Entity
    fx_button: Entity
    shake_amplitude: number
    sound_trigger: boolean
    pop_in_out_procentage: number
}
declare class FxPickupEffect extends Movable {
    spawn_y: number
    visibility: number
}
declare class FxShotgunBlast extends Movable {
    illumination: Illumination
}
declare class FxJetpackFlame extends Movable {
    particle_smoke: ParticleEmitterInfo
    particle_flame: ParticleEmitterInfo
    illumination: Illumination
}
declare class FxPlayerIndicator extends Movable {
    attached_to: number
    pos_x: number
    pos_y: number
}
declare class FxSpringtrapRing extends Movable {
    timer: number
    illumination: Illumination
}
declare class FxNecromancerANKH extends Movable {
}
declare class FxWebbedEffect extends Movable {
    visible: boolean
}
declare class FxUnderwaterBubble extends Movable {
    bubble_source_uid: number
    direction: number
    pop: boolean
    inverted: boolean
}
declare class FxWaterDrop extends Movable {
    inverted: boolean
    droplet_source_uid: number
}
declare class FxKinguSliding extends Movable {
    particle: ParticleEmitterInfo
}
declare class FxAlienBlast extends Movable {
}
declare class FxSparkSmall extends Movable {
    timer: number
}
declare class FxTiamatHead extends Movable {
    timer: number
}
declare class FxTiamatTorso extends Movable {
    timer: number
    torso_target_size: number
}
declare class FxTiamatTail extends Movable {
    angle_two: number
    x_pos: number
    y_pos: number
}
declare class FxVatBubble extends Movable {
    max_y: number
}
declare class FxHundunNeckPiece extends Movable {
    kill_timer: number
}
declare class FxJellyfishStar extends Movable {
    rotation_angle: number
    radius: number
    speed: number
}
declare class FxQuickSand extends Movable {
}
declare class FxSorceressAttack extends Movable {
    size: number
}
declare class FxLamassuAttack extends Movable {
    attack_angle: number
}
declare class FxFireflyLight extends Movable {
    illumination: Illumination
    light_timer: number
    cooldown_timer: number
}
declare class FxEmpress extends Movable {
    sine_angle: number
}
declare class FxAnkhRotatingSpark extends Movable {
    radius: number
    inclination: number
    speed: number
    sine_angle: number
    size: number
}
declare class FxAnkhBrokenPiece extends Movable {
}
declare class Liquid extends Entity {
    fx_surface: Entity
    get_liquid_flags(): number
    set_liquid_flags(flags: number): void
}
declare class Lava extends Liquid {
    emitted_light: Illumination
}
declare class BGBackLayerDoor extends Entity {
    illumination1: Illumination
    illumination2: Illumination
}
declare class BGSurfaceStar extends Entity {
    blink_timer: number
    relative_x: number
    relative_y: number
}
declare class BGRelativeElement extends Entity {
    relative_x: number
    relative_y: number
}
declare class BGSurfaceLayer extends BGRelativeElement {
    relative_offset_x: number
    relative_offset_y: number
}
declare class BGEggshipRoom extends Entity {
    fx_shell: Entity
    fx_door: Entity
    platform_left: Entity
    platform_middle: Entity
    platform_right: Entity
    player_in: boolean
}
declare class BGMovingStar extends BGSurfaceStar {
    falling_speed: number
}
declare class BGTutorialSign extends Entity {
    is_shown: boolean
}
declare class BGShootingStar extends BGRelativeElement {
    x_increment: number
    y_increment: number
    timer: number
    max_timer: number
    size: number
}
declare class BGShopEntrence extends Entity {
    on_entering: boolean
}
declare class BGFloatingDebris extends BGSurfaceLayer {
    distance: number
    speed: number
    sine_angle: number
}
declare class BGShopKeeperPrime extends Entity {
    normal_y: number
    sine_pos: number
    bubbles_timer: number
    bubble_spawn_trigger: boolean
    bubble_spawn_delay: number
}
declare class CrossBeam extends Entity {
    attached_to_side_uid: number
    attached_to_top_uid: number
}
declare class DestructibleBG extends Entity {
}
declare class PalaceSign extends Entity {
    illumination: Illumination
    arrow_illumination: Illumination
    arrow_change_timer: number
}
declare class DecoRegeneratingBlock extends Entity {
}
declare class Portal extends Entity {
    emitted_light: Illumination
    transition_timer: number
    level: number
    world: number
    theme: number
    timer: number
}
declare class ShootingStarSpawner extends Entity {
    timer: number
}
declare class LogicalDoor extends Entity {
    door_type: ENT_TYPE
    visible: boolean
    platform_spawned: boolean
}
declare class LogicalSound extends Entity {
}
declare class LogicalStaticSound extends LogicalSound {
}
declare class LogicalLiquidStreamSound extends LogicalStaticSound {
}
declare class LogicalTrapTrigger extends Entity {
    min_empty_distance: number
    trigger_distance: number
    vertical: boolean
}
declare class JungleTrapTrigger extends LogicalTrapTrigger {
}
declare class WetEffect extends Entity {
    particle: ParticleEmitterInfo
}
declare class OnFireEffect extends Entity {
    particle_smoke: ParticleEmitterInfo
    particle_flame: ParticleEmitterInfo
    illumination: Illumination
}
declare class PoisonedEffect extends Entity {
    particle_burst: ParticleEmitterInfo
    particle_base: ParticleEmitterInfo
    burst_timer: number
    burst_active: boolean
}
declare class CursedEffect extends Entity {
    particle: ParticleEmitterInfo
}
declare class OuroboroCameraAnchor extends Entity {
    target_x: number
    target_y: number
    velocity_x: number
    velocity_y: number
}
declare class OuroboroCameraZoomin extends Entity {
    zoomin_level: number
}
declare class CinematicAnchor extends Entity {
    blackbar_top: Entity
    blackbar_bottom: Entity
    roll_in: number
}
declare class BurningRopeEffect extends Entity {
    illumination: Illumination
}
declare class DustWallApep extends Entity {
    particle: ParticleEmitterInfo
}
declare class CameraFlash extends Entity {
    illumination1: Illumination
    illumination2: Illumination
    timer: number
}
declare class RoomLight extends Entity {
    illumination: Illumination
}
declare class LimbAnchor extends Entity {
    move_timer: number
    flip_vertical: boolean
}
declare class LogicalConveyorbeltSound extends LogicalSound {
}
declare class LogicalAnchovyFlock extends Entity {
    current_speed: number
    max_speed: number
    timer: number
}
declare class MummyFliesSound extends LogicalSound {
    mummy_uid: number
    flies: number
}
declare class QuickSandSound extends LogicalSound {
}
declare class IceSlidingSound extends LogicalSound {
}
declare class FrostBreathEffect extends Entity {
    timer: number
}
declare class BoulderSpawner extends Entity {
    timer: number
}
declare class PipeTravelerSound extends LogicalSound {
    enter_exit: boolean
}
declare class LogicalDrain extends Entity {
    timer: number
}
declare class LogicalRegeneratingBlock extends Entity {
    timer: number
}
declare class SplashBubbleGenerator extends Entity {
    timer: number
}
declare class EggplantThrower extends Entity {
}
declare class LogicalMiniGame extends Entity {
    timer: number
}
declare class DMSpawning extends Entity {
    spawn_x: number
    spawn_y: number
    sine_pos: number
    timer: number
}
declare class DMAlienBlast extends Entity {
}
declare class ParticleDB {
    id: number
    spawn_count_min: number
    spawn_count: number
    lifespan_min: number
    lifespan: number
    sheet_id: number
    animation_sequence_length: number
    spawn_interval: void
    shrink_growth_factor: number
    rotation_speed: number
    opacity: number
    hor_scattering: number
    ver_scattering: number
    scale_x_min: number
    scale_x: number
    scale_y_min: number
    scale_y: number
    hor_deflection_1: number
    ver_deflection_1: number
    hor_deflection_2: number
    ver_deflection_2: number
    hor_velocity: number
    ver_velocity: number
    red: number
    green: number
    blue: number
    permanent: boolean
    invisible: boolean
    get_texture(): number
    set_texture(texture_id: number): boolean
}
declare class ParticleEmitterInfo {
    particle_type: ParticleDB
    particle_count: number
    entity_uid: number
    x: number
    y: number
    offset_x: number
    offset_y: number
}
declare class PreLoadLevelFilesContext {
    override_level_files(levels: Array<string>): void
    add_level_files(levels: Array<string>): void
}
declare class DoorCoords {
    door1_x: number
    door1_y: number
    door2_x: number
    door2_y: number
}
declare class LevelGenSystem {
    shop_type: number
    spawn_x: number
    spawn_y: number
    spawn_room_x: number
    spawn_room_y: number
    exits: DoorCoords
}
declare class PostRoomGenerationContext {
    set_room_template(x: number, y: number, layer: LAYER, room_template: ROOM_TEMPLATE): boolean
    mark_as_machine_room_origin(x: number, y: number, layer: LAYER): boolean
    mark_as_set_room(x: number, y: number, layer: LAYER): boolean
    unmark_as_set_room(x: number, y: number, layer: LAYER): boolean
    set_procedural_spawn_chance(chance_id: PROCEDURAL_CHANCE, inverse_chance: number): boolean
    set_num_extra_spawns(extra_spawn_id: number, num_spawns_front_layer: number, num_spawns_back_layer: number): void
    define_short_tile_code(short_tile_code_def: ShortTileCodeDef): SHORT_TILE_CODE | undefined
    change_short_tile_code(short_tile_code: SHORT_TILE_CODE, short_tile_code_def: ShortTileCodeDef): void
}
declare class PreHandleRoomTilesContext {
    get_short_tile_code(tx: number, ty: number, layer: LAYER): SHORT_TILE_CODE | undefined
    set_short_tile_code(tx: number, ty: number, layer: LAYER, short_tile_code: SHORT_TILE_CODE): boolean
    find_all_short_tile_codes(layer: LAYER, short_tile_code: SHORT_TILE_CODE): Array<[number, number, LAYER]>
    replace_short_tile_code(layer: LAYER, short_tile_code: SHORT_TILE_CODE, replacement_short_tile_code: SHORT_TILE_CODE): boolean
    has_back_layer(): boolean
    add_empty_back_layer(): void
    add_copied_back_layer(): void
}
declare class ShortTileCodeDef {
    tile_code: TILE_CODE
    chance: number
    alt_tile_code: TILE_CODE
}
declare class QuestsInfo {
    yang_state: number
    jungle_sisters_flags: number
    van_horsing_state: number
    sparrow_state: number
    madame_tusk_state: number
    beg_state: number
}
declare class SaveData {
    places: Array<boolean>
    bestiary: Array<boolean>
    people: Array<boolean>
    items: Array<boolean>
    traps: Array<boolean>
    last_daily: void
    characters: number
    shortcuts: number
    bestiary_killed: Array<number>
    bestiary_killed_by: Array<number>
    people_killed: Array<number>
    people_killed_by: Array<number>
    plays: number
    deaths: number
    wins_normal: number
    wins_hard: number
    wins_special: number
    score_total: number
    score_top: number
    deepest_area: number
    deepest_level: number
    time_best: number
    time_total: number
    time_tutorial: number
    character_deaths: Array<number>
    pets_rescued: Array<number>
    completed_normal: boolean
    completed_ironman: boolean
    completed_hard: boolean
    profile_seen: boolean
    seeded_unlocked: boolean
    world_last: number
    level_last: number
    score_last: number
    time_last: number
    stickers: Array<number>
    players: Array<number>
    constellation: Constellation
}
declare class Constellation {
    star_count: number
    stars: Array<ConstellationStar>
    scale: number
    line_count: number
    lines: Array<ConstellationLine>
    line_red_intensity: void
}
declare class ConstellationStar {
    type: number
    x: number
    y: number
    size: number
    red: number
    green: number
    blue: number
    alpha: number
    halo_red: number
    halo_green: number
    halo_blue: number
    halo_alpha: number
    canis_ring: boolean
    fidelis_ring: boolean
}
declare class ConstellationLine {
    from: number
    to: number
}
declare class CustomSound {
    play(): PlayingSound
    play(paused: boolean): PlayingSound
    play(paused: boolean, sound_type: SOUND_TYPE): PlayingSound
    get_parameters(): LuaTable<VANILLA_SOUND_PARAM, string>
}
declare class PlayingSound {
    is_playing(): boolean
    stop(): boolean
    set_pause(pause: boolean): boolean
    set_mute(mute: boolean): boolean
    set_pitch(pitch: number): boolean
    set_pan(pan: number): boolean
    set_volume(volume: number): boolean
    set_looping(loop_mode: SOUND_LOOP_MODE): boolean
    set_callback(callback: SoundCallbackFunction): boolean
    get_parameters(): LuaTable<VANILLA_SOUND_PARAM, string>
    get_parameter(parameter_index: VANILLA_SOUND_PARAM): number | undefined
    set_parameter(parameter_index: VANILLA_SOUND_PARAM, value: number): boolean
}
declare class PlayerSlotSettings {
    controller_vibration: boolean
    auto_run_enabled: boolean
    controller_right_stick: boolean
}
declare class PlayerSlot {
    buttons_gameplay: INPUTS
    buttons: INPUTS
    input_mapping_keyboard: InputMapping
    input_mapping_controller: InputMapping
    player_id: number
    is_participating: boolean
}
declare class InputMapping {
    jump: number
    attack: number
    bomb: number
    rope: number
    walk_run: number
    use_door_buy: number
    pause_menu: number
    journal: number
    left: number
    right: number
    up: number
    down: number
}
declare class PlayerInputs {
    player_slots: Array<PlayerSlot>
    player_slot_1: PlayerSlot
    player_slot_2: PlayerSlot
    player_slot_3: PlayerSlot
    player_slot_4: PlayerSlot
    player_settings: Array<PlayerSlotSettings>
    player_slot_1_settings: PlayerSlotSettings
    player_slot_2_settings: PlayerSlotSettings
    player_slot_3_settings: PlayerSlotSettings
    player_slot_4_settings: PlayerSlotSettings
}
declare class GuiDrawContext {
    draw_line(x1: number, y1: number, x2: number, y2: number, thickness: number, color: uColor): void
    draw_rect(left: number, top: number, right: number, bottom: number, thickness: number, rounding: number, color: uColor): void
    draw_rect(rect: AABB, thickness: number, rounding: number, color: uColor): void
    draw_rect_filled(left: number, top: number, right: number, bottom: number, rounding: number, color: uColor): void
    draw_rect_filled(rect: AABB, rounding: number, color: uColor): void
    draw_circle(x: number, y: number, radius: number, thickness: number, color: uColor): void
    draw_circle_filled(x: number, y: number, radius: number, color: uColor): void
    draw_text(x: number, y: number, size: number, text: string, color: uColor): void
    draw_image(image: IMAGE, left: number, top: number, right: number, bottom: number, uvx1: number, uvy1: number, uvx2: number, uvy2: number, color: uColor): void
    draw_image(image: IMAGE, rect: AABB, uv_rect: AABB, color: uColor): void
    draw_image_rotated(image: IMAGE, left: number, top: number, right: number, bottom: number, uvx1: number, uvy1: number, uvx2: number, uvy2: number, color: uColor, angle: number, px: number, py: number): void
    draw_image_rotated(image: IMAGE, rect: AABB, uv_rect: AABB, color: uColor, angle: number, px: number, py: number): void
    window(title: string, x: number, y: number, w: number, h: number, movable: boolean, callback: Callback): boolean
    win_text(text: string): void
    win_separator(): void
    win_inline(): void
    win_sameline(offset: number, spacing: number): void
    win_button(text: string): boolean
    win_input_text(label: string, value: string): string
    win_input_int: string
    win_input_float: string
    win_slider_int: string
    win_drag_int: string
    win_slider_float: string
    win_drag_float: string
    win_check(label: string, value: boolean): boolean
    win_combo(label: string, selected: number, opts: string): number
    win_pushid(id: number): void
    win_popid(): void
    win_image(image: IMAGE, width: number, height: number): void
}
declare class ImVec2 {
    x: void
    y: void
}
declare class ImGuiIO {
    displaysize: ImVec2
    framerate: number
    wantkeyboard: boolean
    keysdown: void
    keydown: void
    keypressed: void
    keyreleased: void
    keyctrl: boolean
    keyshift: boolean
    keyalt: boolean
    keysuper: boolean
    wantmouse: boolean
    mousepos: ImVec2
    mousedown: void
    mouseclicked: void
    mousedoubleclicked: void
    mousewheel: number
    gamepad: void
}
declare class VanillaRenderContext {
    draw_text(text: string, x: number, y: number, scale_x: number, scale_y: number, color: Color, alignment: number, fontstyle: number): void
    draw_text_size(text: string, scale_x: number, scale_y: number, fontstyle: number): [number, number]
    draw_screen_texture(texture_id: TEXTURE, row: number, column: number, left: number, top: number, right: number, bottom: number, color: Color): void
    draw_screen_texture(texture_id: TEXTURE, row: number, column: number, rect: AABB, color: Color): void
    draw_world_texture(texture_id: TEXTURE, row: number, column: number, left: number, top: number, right: number, bottom: number, color: Color): void
    draw_world_texture(texture_id: TEXTURE, row: number, column: number, rect: AABB, color: Color): void
}
declare class TextureRenderingInfo {
    x: number
    y: number
    destination_top_left_x: number
    destination_top_left_y: number
    destination_top_right_x: number
    destination_top_right_y: number
    destination_bottom_left_x: number
    destination_bottom_left_y: number
    destination_bottom_right_x: number
    destination_bottom_right_y: number
    set_destination(bbox: AABB): void
    source_top_left_x: number
    source_top_left_y: number
    source_top_right_x: number
    source_top_right_y: number
    source_bottom_left_x: number
    source_bottom_left_y: number
    source_bottom_right_x: number
    source_bottom_right_y: number
}
declare class TextRenderingInfo {
    x: number
    y: number
    text_length: number
    width: number
    height: number
    font: Texture
}
declare class TextureDefinition {
    texture_path: string
    width: number
    height: number
    tile_width: number
    tile_height: number
    sub_image_offset_x: number
    sub_image_offset_y: number
    sub_image_width: number
    sub_image_height: number
}
declare class AABB {
    constructor()
    constructor(AABB: AABB)
    constructor(left_: number, top_: number, right_: number, bottom_: number)
    left: number
    bottom: number
    right: number
    top: number
    overlaps_with(other: AABB): boolean
    abs(): AABB
    extrude(amount: number): AABB
    offset(off_x: number, off_y: number): AABB
    area(): number
    center(): [number, number]
    width(): number
    height(): number
}
declare class Screen {
    render_timer: number
}
declare class ScreenLogo extends Screen {
    logo_mossmouth: TextureRenderingInfo
    logo_blitworks: TextureRenderingInfo
    logo_fmod: TextureRenderingInfo
}
declare class ScreenIntro extends Screen {
    unknown4: TextureRenderingInfo
}
declare class ScreenPrologue extends Screen {
    line1: STRINGID
    line2: STRINGID
    line3: STRINGID
}
declare class ScreenTitle extends Screen {
    logo_spelunky2: TextureRenderingInfo
    ana: TextureRenderingInfo
    ana_right_eyeball_torch_reflection: TextureRenderingInfo
    ana_left_eyeball_torch_reflection: TextureRenderingInfo
    particle_torchflame_smoke: ParticleEmitterInfo
    particle_torchflame_backflames: ParticleEmitterInfo
    particle_torchflame_flames: ParticleEmitterInfo
    particle_torchflame_backflames_animated: ParticleEmitterInfo
    particle_torchflame_flames_animated: ParticleEmitterInfo
    particle_torchflame_ash: ParticleEmitterInfo
}
declare class ScreenMenu extends Screen {
    tunnel_background: TextureRenderingInfo
    cthulhu_disc: TextureRenderingInfo
    tunnel_ring_darkbrown: TextureRenderingInfo
    cthulhu_body: TextureRenderingInfo
    tunnel_ring_lightbrown: TextureRenderingInfo
    vine_left: TextureRenderingInfo
    vine_right: TextureRenderingInfo
    skull_left: TextureRenderingInfo
    salamander_right: TextureRenderingInfo
    left_spear: TextureRenderingInfo
    right_spear: TextureRenderingInfo
    spear_dangler_related: TextureRenderingInfo
    play_scroll: TextureRenderingInfo
    info_toast: TextureRenderingInfo
    cthulhu_disc_ring_angle: number
    cthulhu_disc_split_progress: number
    cthulhu_disc_y: number
    cthulhu_timer: number
    selected_menu_index: number
    menu_text_opacity: number
    spear_position: Array<number>
    spear_dangler: Array<SpearDanglerAnimFrames>
    play_scroll_descend_timer: number
    scroll_text: STRINGID
}
declare class ScreenOptions extends Screen {
    selected_menu_index: number
    brick_border: TextureRenderingInfo
    top_bottom_woodpanels_velocity: number
    top_bottom_woodpanels_progress: number
    scroll_unfurl_progress: number
    bottom_woodpanel_y: number
    top_bottom_woodpanels_slide_in_related: number
    bottom_woodpanel: TextureRenderingInfo
    top_woodpanel: TextureRenderingInfo
    top_woodpanel_left_scrollhandle: TextureRenderingInfo
    top_woodpanel_right_scrollhandle: TextureRenderingInfo
    button_right_caption: STRINGID
    button_middle_caption: STRINGID
    top_woodpanel_visible: boolean
    bottom_woodpanel_visible: boolean
    toggle_woodpanel_slidein_animation: boolean
    capitalize_top_woodpanel: boolean
    current_menu_1: number
    current_menu_2: number
    topleft_woodpanel_esc: TextureRenderingInfo
    brick_background: TextureRenderingInfo
    brick_middlelayer: TextureRenderingInfo
    brick_foreground: TextureRenderingInfo
    selected_item_rounded_rect: TextureRenderingInfo
    selected_item_scarab: TextureRenderingInfo
    item_option_arrow_left: TextureRenderingInfo
    item_option_arrow_right: TextureRenderingInfo
    tooltip_background: TextureRenderingInfo
    progressbar_background: TextureRenderingInfo
    progressbar_foreground: TextureRenderingInfo
    progressbar_position_indicator: TextureRenderingInfo
    sectionheader_background: TextureRenderingInfo
    topleft_woodpanel_esc_slidein_timer: number
    text_fadein_timer: number
    vertical_scroll_effect_timer: number
}
declare class ScreenPlayerProfile extends Screen {
}
declare class ScreenLeaderboards extends Screen {
}
declare class ScreenSeedInput extends Screen {
    bottom_woodpanel_slideup_timer: number
    bottom_woodpanel_y: number
    bottom_woodpanel: TextureRenderingInfo
    buttons_text_id: STRINGID
    topleft_woodpanel_esc_slidein_timer: number
    scroll_text_id: STRINGID
    start_text_id: STRINGID
    main_woodpanel_left_border: TextureRenderingInfo
    main_woodpanel_center: TextureRenderingInfo
    main_woodpanel_right_border: TextureRenderingInfo
    seed_letter_cutouts: TextureRenderingInfo
    topleft_woodpanel_esc: TextureRenderingInfo
    start_sidepanel: TextureRenderingInfo
    start_sidepanel_slidein_timer: number
}
declare class ScreenCharacterSelect extends Screen {
    main_background_zoom_target: number
    blurred_border_zoom_target: number
    top_bottom_woodpanel_slidein_timer: number
    top_scroll_unfurl_timer: number
    bottom_woodpanel: TextureRenderingInfo
    top_woodpanel: TextureRenderingInfo
    left_scroll_handle: TextureRenderingInfo
    right_scroll_handle: TextureRenderingInfo
    left_button_text_id: STRINGID
    right_button_text_id: STRINGID
    middle_button_text_id: STRINGID
    top_woodpanel_visible: boolean
    bottom_woodpanel_visible: boolean
    toggle_woodpanel_slidein_animation: boolean
    mine_entrance_background: TextureRenderingInfo
    character: TextureRenderingInfo
    character_shadow: TextureRenderingInfo
    character_flag: TextureRenderingInfo
    character_left_arrow: TextureRenderingInfo
    character_right_arrow: TextureRenderingInfo
    mine_entrance_border: TextureRenderingInfo
    mine_entrance_shutter: TextureRenderingInfo
    background: TextureRenderingInfo
    blurred_border: TextureRenderingInfo
    blurred_border2: TextureRenderingInfo
    topleft_woodpanel_esc: TextureRenderingInfo
    start_sidepanel: TextureRenderingInfo
    quick_select_panel: TextureRenderingInfo
    quick_select_selected_char_background: TextureRenderingInfo
    quick_select_panel_related: TextureRenderingInfo
    player_shutter_timer: Array<number>
    player_x: Array<number>
    player_y: Array<number>
    player_arrow_slidein_timer: number
    player_facing_left: Array<boolean>
    player_quickselect_shown: Array<boolean>
    player_quickselect_fadein_timer: Array<number>
    player_quickselect_coords: number
    player_quickselect_wiggle_angle: Array<number>
    topleft_woodpanel_esc_slidein_timer: number
    start_panel_slidein_timer: number
    action_buttons_keycap_size: number
    not_ready_to_start_yet: boolean
    available_mine_entrances: number
    amount_of_mine_entrances_activated: number
    buttons: number
    opacity: number
    start_pressed: boolean
    transition_to_game_started: boolean
    flying_things: Array<FlyingThing>
    flying_thing_countdown: number
    particle_ceilingdust_smoke: ParticleEmitterInfo
    particle_ceilingdust_rubble: ParticleEmitterInfo
    particle_mist: ParticleEmitterInfo
    particle_torchflame_smoke1: ParticleEmitterInfo
    particle_torchflame_flames1: ParticleEmitterInfo
    particle_torchflame_smoke2: ParticleEmitterInfo
    particle_torchflame_flames2: ParticleEmitterInfo
    particle_torchflame_smoke3: ParticleEmitterInfo
    particle_torchflame_flames3: ParticleEmitterInfo
    particle_torchflame_smoke4: ParticleEmitterInfo
    particle_torchflame_flames4: ParticleEmitterInfo
}
declare class FlyingThing {
    texture_info: TextureRenderingInfo
    entity_type: number
    spritesheet_column: number
    spritesheet_row: number
    spritesheet_animation_length: number
    velocity_x: number
    amplitude: number
    frequency: number
    sinewave_angle: number
}
declare class ScreenTeamSelect extends Screen {
    ana_carrying_torch: TextureRenderingInfo
    scroll_bottom_left: TextureRenderingInfo
    scrollend_bottom_left: TextureRenderingInfo
    four_ropes: TextureRenderingInfo
    unknown4: TextureRenderingInfo
    four_characters: TextureRenderingInfo
    left_arrow: TextureRenderingInfo
    right_arrow: TextureRenderingInfo
    start_panel: TextureRenderingInfo
    start_panel_slide_timer: number
    pulsating_arrows_timer: number
    selected_player: number
    buttons: number
    ready: boolean
}
declare class ScreenCamp extends Screen {
    buttons: number
}
declare class ScreenLevel extends Screen {
    buttons: number
}
declare class ScreenTransition extends Screen {
    woodpanel_pos: number
    stats_scroll_horizontal_posaa: number
    stats_scroll_vertical_pos: number
    level_completed_pos: number
    stats_scroll_unfurl_targetvalue: number
    woodpanel1: TextureRenderingInfo
    woodpanel2: TextureRenderingInfo
    woodpanel3: TextureRenderingInfo
    woodpanel_cutout1: TextureRenderingInfo
    woodpanel_cutout2: TextureRenderingInfo
    woodpanel_cutout3: TextureRenderingInfo
    woodplank: TextureRenderingInfo
    woodpanel_bottomcutout1: TextureRenderingInfo
    woodpanel_bottomcutout2: TextureRenderingInfo
    woodpanel_bottomcutout3: TextureRenderingInfo
    unknown_all_forced: TextureRenderingInfo
    stats_scroll_top_bottom: TextureRenderingInfo
    killcount_rounded_rect: TextureRenderingInfo
    level_completed_panel: TextureRenderingInfo
    stats_scroll_state_1: number
    stats_scroll_state_2: number
    hide_press_to_go_next_level: boolean
    mama_tunnel: TextureRenderingInfo
    speechbubble: TextureRenderingInfo
    speechbubble_arrow: TextureRenderingInfo
    mama_tunnel_fade_targetvalue: number
    mama_tunnel_text_id: STRINGID
    mama_tunnel_choice_visible: boolean
    mama_tunnel_agree_with_gift: boolean
    mama_tunnel_face_invisible: boolean
    mama_tunnel_face_transparency: number
    mama_tunnel_agree_panel: TextureRenderingInfo
    mama_tunnel_agree_panel_indicator: TextureRenderingInfo
    woodpanel_cutout_big_money1: TextureRenderingInfo
    woodpanel_cutout_big_money2: TextureRenderingInfo
    woodpanel_cutout_big_money3: TextureRenderingInfo
    big_dollar_sign: TextureRenderingInfo
    unknown26: TextureRenderingInfo
    player_stats_scroll_numeric_value: Array<number>
    player_secondary_icon: Array<TextureRenderingInfo>
    player_icon: Array<TextureRenderingInfo>
    player_secondary_icon_type: Array<number>
    player_icon_index: Array<number>
    hourglasses: TextureRenderingInfo
    small_dollar_signs: TextureRenderingInfo
    this_level_money_color: Color
}
declare class ScreenDeath extends Screen {
}
declare class ScreenWin extends Screen {
    sequence_timer: number
    frame_timer: number
    animation_state: number
    rescuing_ship_entity: Entity
}
declare class ScreenCredits extends Screen {
}
declare class ScreenScores extends Screen {
    animation_state: number
    woodpanel1: TextureRenderingInfo
    woodpanel2: TextureRenderingInfo
    woodpanel3: TextureRenderingInfo
    woodpanel_cutout: TextureRenderingInfo
    dollarsign: TextureRenderingInfo
    hourglass: TextureRenderingInfo
    animation_timer: number
    woodpanel_slidedown_timer: number
}
declare class ScreenConstellation extends Screen {
    sequence_state: number
    animation_timer: number
    constellation_text_opacity: number
}
declare class ScreenRecap extends Screen {
}
declare class ScreenOnlineLoading extends Screen {
    ouroboros: TextureRenderingInfo
    ouroboros_angle: number
}
declare class ScreenOnlineLobby extends Screen {
    woodpanels_slidein_timer: number
    scroll_unfurl_timer: number
    woodpanel_bottom: TextureRenderingInfo
    woodpanel_top: TextureRenderingInfo
    left_scroll_handle: TextureRenderingInfo
    right_scroll_handle: TextureRenderingInfo
    scroll_text_id: STRINGID
    btn_left_text_id: STRINGID
    btn_right_text_id: STRINGID
    btn_center_text_id: STRINGID
    woodpanel_top_visible: boolean
    woodpanel_bottom_visible: boolean
    toggle_panels_slidein: boolean
    players: Array<OnlineLobbyScreenPlayer>
    background_image: TextureRenderingInfo
    topleft_woodpanel_esc: TextureRenderingInfo
    topleft_woodpanel_esc_slidein_timer: number
    character_walk_offset: number
    character_facing_left: boolean
    move_direction: number
    character: TextureRenderingInfo
    player_ready_icon: TextureRenderingInfo
    arrow_left: TextureRenderingInfo
    arrow_right: TextureRenderingInfo
    arrow_left_hor_offset: number
    arrow_right_hor_offset: number
    platform_icon: TextureRenderingInfo
    player_count: number
    searching_for_players: boolean
    show_code_panel: boolean
    enter_code_woodpanel_bottom_slidein_pos: number
    enter_code_woodpanel_bottom: TextureRenderingInfo
    enter_code_btn_right_text_id: STRINGID
    enter_code_woodpanel_top_visible: boolean
    enter_code_woodpanel_bottom_visible: boolean
    enter_code_toggle_panels_slidein: boolean
    selected_character: number
    characters_entered_count: number
    enter_code_topleft_woodpanel_esc_slidein_timer: number
    enter_code_banner_text_id: STRINGID
    enter_code_OK_text_id: STRINGID
    enter_code_main_woodpanel_left: TextureRenderingInfo
    enter_code_main_woodpanel_center: TextureRenderingInfo
    enter_code_main_woodpanel_right: TextureRenderingInfo
    enter_code_banner: TextureRenderingInfo
    enter_code_char_cutouts: TextureRenderingInfo
    enter_code_pointing_hand: number
    enter_code_buttons: TextureRenderingInfo
    enter_code_OK_panel: TextureRenderingInfo
    enter_code_OK_panel_slidein_timer: number
    enter_code_your_code_scroll: TextureRenderingInfo
    enter_code_your_code_scroll_left_handle: TextureRenderingInfo
    enter_code_your_code_scroll_right_handle: TextureRenderingInfo
    set_code(code: string): void
}
declare class PauseUI {
    menu_slidein_progress: number
    blurred_background: TextureRenderingInfo
    woodpanel_left: TextureRenderingInfo
    woodpanel_middle: TextureRenderingInfo
    woodpanel_right: TextureRenderingInfo
    woodpanel_top: TextureRenderingInfo
    scroll: TextureRenderingInfo
    confirmation_panel: TextureRenderingInfo
    previously_selected_menu_index: number
    visibility: number
}
declare class JournalUI {
    state: number
    chapter_shown: number
    current_page: number
    flipping_to_page: number
    max_page_count: number
    book_background: TextureRenderingInfo
    arrow_left: TextureRenderingInfo
    arrow_right: TextureRenderingInfo
    unknown23: TextureRenderingInfo
    entire_book: TextureRenderingInfo
    page_timer: number
}
declare class JournalPage {
    background: TextureRenderingInfo
    page_number: number
}
declare class JournalPageProgress extends JournalPage {
    coffeestain_top: TextureRenderingInfo
}
declare class JournalPageJournalMenu extends JournalPage {
    selected_menu_index: number
    journal_text_info: TextRenderingInfo
    completion_badge: TextureRenderingInfo
}
declare class JournalPageDiscoverable extends JournalPage {
    show_main_image: boolean
    title_text_info: TextRenderingInfo
    entry_text_info: TextRenderingInfo
    chapter_title_text_info: TextRenderingInfo
}
declare class JournalPagePlaces extends JournalPageDiscoverable {
    main_image: TextureRenderingInfo
}
declare class JournalPagePeople extends JournalPageDiscoverable {
    character_background: TextureRenderingInfo
    character_icon: TextureRenderingInfo
    character_drawing: TextureRenderingInfo
}
declare class JournalPageBestiary extends JournalPageDiscoverable {
    monster_background: TextureRenderingInfo
    monster_icon: TextureRenderingInfo
    defeated_killedby_black_bars: TextureRenderingInfo
    defeated_text_info: TextRenderingInfo
    defeated_value_text_info: TextRenderingInfo
    killedby_text_info: TextRenderingInfo
    killedby_value_text_info: TextRenderingInfo
}
declare class JournalPageItems extends JournalPageDiscoverable {
    item_icon: TextureRenderingInfo
    item_background: TextureRenderingInfo
}
declare class JournalPageTraps extends JournalPageDiscoverable {
    trap_icon: TextureRenderingInfo
    trap_background: TextureRenderingInfo
}
declare class JournalPageStory extends JournalPage {
}
declare class JournalPageFeats extends JournalPage {
    chapter_title_text_info: TextRenderingInfo
    feat_icons: TextureRenderingInfo
}
declare class JournalPageDeathCause extends JournalPage {
    death_cause_text_info: TextRenderingInfo
}
declare class JournalPageDeathMenu extends JournalPage {
    selected_menu_index: number
    game_over_text_info: TextRenderingInfo
    level_text_info: TextRenderingInfo
    level_value_text_info: TextRenderingInfo
    money_text_info: TextRenderingInfo
    money_value_text_info: TextRenderingInfo
    time_text_info: TextRenderingInfo
    time_value_text_info: TextRenderingInfo
}
declare class JournalPageRecap extends JournalPage {
}
declare class JournalPagePlayerProfile extends JournalPage {
    player_icon: TextureRenderingInfo
    player_icon_id: number
    player_profile_text_info: TextRenderingInfo
    plays_text_info: TextRenderingInfo
    plays_value_text_info: TextRenderingInfo
    wins_text_info: TextRenderingInfo
    wins_value_text_info: TextRenderingInfo
    deaths_text_info: TextRenderingInfo
    deaths_value_text_info: TextRenderingInfo
    win_pct_text_info: TextRenderingInfo
    win_pct_value_text_info: TextRenderingInfo
    average_score_text_info: TextRenderingInfo
    average_score_value_text_info: TextRenderingInfo
    top_score_text_info: TextRenderingInfo
    top_score_value_text_info: TextRenderingInfo
    deepest_level_text_info: TextRenderingInfo
    deepest_level_value_text_info: TextRenderingInfo
    deadliest_level_text_info: TextRenderingInfo
    deadliest_level_value_text_info: TextRenderingInfo
    average_time_text_info: TextRenderingInfo
    average_time_value_text_info: TextRenderingInfo
    best_time_text_info: TextRenderingInfo
    best_time_value_text_info: TextRenderingInfo
}
declare class JournalPageLastGamePlayed extends JournalPage {
    main_image: TextureRenderingInfo
    last_game_played_text_info: TextRenderingInfo
    level_text_info: TextRenderingInfo
    level_value_text_info: TextRenderingInfo
    money_text_info: TextRenderingInfo
    money_value_text_info: TextRenderingInfo
    time_text_info: TextRenderingInfo
    time_value_text_info: TextRenderingInfo
    sticker_count: number
    stickers: Array<TextureRenderingInfo>
}
declare class ScreenArenaMenu extends Screen {
    brick_background_animation: ScreenZoomAnimation
    blurry_border_animation: ScreenZoomAnimation
    top_woodpanel_slidein_timer: number
    top_scroll_unfurl_timer: number
    unknown13: TextureRenderingInfo
    woodpanel_top: TextureRenderingInfo
    unknown15: TextureRenderingInfo
    left_scroll_handle: TextureRenderingInfo
    right_scroll_handle: TextureRenderingInfo
    scroll_text_id: STRINGID
    unknown17_text_id: STRINGID
    unknown18_text_id: STRINGID
    unknown19_text_id: STRINGID
    top_woodpanel_visible: boolean
    bottom_woodpanel_visible: boolean
    woodpanels_toggle: boolean
    brick_background: TextureRenderingInfo
    blurry_border: TextureRenderingInfo
    blurry_border2: TextureRenderingInfo
    characters_drawing: TextureRenderingInfo
    info_black_background: TextureRenderingInfo
    main_panel_top_left_corner: TextureRenderingInfo
    main_panel_top: TextureRenderingInfo
    main_panel_top_right_corner: TextureRenderingInfo
    main_panel_left: TextureRenderingInfo
    main_panel_center: TextureRenderingInfo
    main_panel_right: TextureRenderingInfo
    main_panel_bottom_left_corner: TextureRenderingInfo
    main_panel_bottom: TextureRenderingInfo
    main_panel_bottom_right_corner: TextureRenderingInfo
    rules_scroll: TextureRenderingInfo
    black_option_boxes_left: TextureRenderingInfo
    black_option_boxes_center: TextureRenderingInfo
    black_option_boxes_right: TextureRenderingInfo
    gold_option_outline: TextureRenderingInfo
    option_icons: TextureRenderingInfo
    option_left_arrow: TextureRenderingInfo
    option_right_arrow: TextureRenderingInfo
    bottom_left_bricks: TextureRenderingInfo
    top_left_esc_panel: TextureRenderingInfo
    next_panel: TextureRenderingInfo
    center_panels_hor_slide_position: number
    esc_next_panels_slide_timer: number
    main_panel_vertical_scroll_position: number
    selected_option_index: number
}
declare class ScreenZoomAnimation {
    zoom_target: number
}
declare class ScreenArenaStagesSelect extends Screen {
    woodenpanel_top_slidein_timer: number
    woodenpanel_top_scroll_unfurl_timer: number
    woodenpanel_top: TextureRenderingInfo
    woodenpanel_top_left_scroll: TextureRenderingInfo
    woodenpanel_top_right_scroll: TextureRenderingInfo
    text_id_1: STRINGID
    text_id_2: STRINGID
    text_id_3: STRINGID
    text_id_4: STRINGID
    woodenpanel_top_visible: boolean
    woodenpanel_bottom_visible: boolean
    woodenpanels_toggle: boolean
    buttons: number
    brick_background: TextureRenderingInfo
    info_black_background: TextureRenderingInfo
    woodenpanel_center: TextureRenderingInfo
    blocky_level_representation: TextureRenderingInfo
    theme_indicator: TextureRenderingInfo
    bricks_bottom_left: TextureRenderingInfo
    grid_background_row_0: TextureRenderingInfo
    grid_background_row_1: TextureRenderingInfo
    grid_background_row_2: TextureRenderingInfo
    grid_background_row_3: TextureRenderingInfo
    grid_background_row_4: TextureRenderingInfo
    grid_background_row_5: TextureRenderingInfo
    grid_background_row_6: TextureRenderingInfo
    grid_background_row_7: TextureRenderingInfo
    grid_background_disabled_cross: TextureRenderingInfo
    grid_background_manipulators: TextureRenderingInfo
    unknown21: TextureRenderingInfo
    grid_disabled_cross: TextureRenderingInfo
    grid_yellow_highlighter: TextureRenderingInfo
    woodpanel_esc: TextureRenderingInfo
    woodpanel_fight: TextureRenderingInfo
    big_player_drawing: TextureRenderingInfo
    players_turn_scroll: TextureRenderingInfo
    players_turn_scroll_handle: TextureRenderingInfo
    grid_player_icon: TextureRenderingInfo
}
declare class ScreenArenaItems extends Screen {
    woodpanel_top_slidein_timer: number
    woodpanel_top_scroll_unfurl_timer: number
    unknown9: TextureRenderingInfo
    woodpanel_top: TextureRenderingInfo
    unknown11: TextureRenderingInfo
    top_scroll_left_handle: TextureRenderingInfo
    top_scroll_right_handle: TextureRenderingInfo
    scroll_text_id: STRINGID
    text_id_2: STRINGID
    text_id_3: STRINGID
    text_id_4: STRINGID
    woodpanel_top_visible: boolean
    woodpanel_bottom_visible: boolean
    woodpanels_toggle: boolean
    brick_background: TextureRenderingInfo
    black_background_bottom_right: TextureRenderingInfo
    woodpanel_bottom: TextureRenderingInfo
    scroll_bottom: TextureRenderingInfo
    scroll_right_handle_bottom: TextureRenderingInfo
    held_item_crate_on_scroll: TextureRenderingInfo
    held_item_on_scroll: TextureRenderingInfo
    item_background: TextureRenderingInfo
    toggles_background: TextureRenderingInfo
    item_selection_gold_outline: TextureRenderingInfo
    item_icons: TextureRenderingInfo
    item_held_badge: TextureRenderingInfo
    item_equipped_badge: TextureRenderingInfo
    item_off_gray_overlay: TextureRenderingInfo
    esc_woodpanel: TextureRenderingInfo
    center_panels_horizontal_slide_position: number
    esc_panel_slide_timer: number
    selected_item_index: number
}
declare class ScreenArenaIntro extends Screen {
    players: TextureRenderingInfo
    background_colors: TextureRenderingInfo
    vertical_lines: TextureRenderingInfo
    vertical_line_electricity_effect: TextureRenderingInfo
    unknown_all_forced: TextureRenderingInfo
    left_scroll: TextureRenderingInfo
    right_scroll: TextureRenderingInfo
    scroll_unfurl_timer: number
    waiting: boolean
    names_opacity: number
    line_electricity_effect_timer: number
    state: number
    countdown: number
}
declare class ScreenArenaLevel extends Screen {
    get_ready: TextureRenderingInfo
    get_ready_gray_background: TextureRenderingInfo
    get_ready_outline: TextureRenderingInfo
}
declare class ScreenArenaScore extends Screen {
    woodpanel_slide_timer: number
    scroll_unfurl_timer: number
    unknown10: TextureRenderingInfo
    woodpanel: TextureRenderingInfo
    unknown_all_forced: TextureRenderingInfo
    woodpanel_left_scroll: TextureRenderingInfo
    woodpanel_right_scroll: TextureRenderingInfo
    text_id_1: STRINGID
    text_id_2: STRINGID
    woodpanel_visible: boolean
    woodpanel_slide_toggle: boolean
    animation_sequence: number
    background: TextureRenderingInfo
    ok_panel: TextureRenderingInfo
    ready_panel: TextureRenderingInfo
    ready_speechbubble_indicator: TextureRenderingInfo
    pillars: TextureRenderingInfo
    bottom_lava: TextureRenderingInfo
    players: TextureRenderingInfo
    player_shadows: TextureRenderingInfo
    unknown24: TextureRenderingInfo
    unknown25: TextureRenderingInfo
    score_counter: TextureRenderingInfo
    unknown27: TextureRenderingInfo
    lava_bubbles: TextureRenderingInfo
    player_won: Array<boolean>
    victory_jump_y_pos: number
    victory_jump_velocity: number
    animation_frame: number
    squash_and_celebrate: boolean
    player_ready: Array<boolean>
    next_transition_timer: number
    player_bottom_pillar_offset: Array<number>
    player_crushing_pillar_height: Array<number>
    player_create_giblets: Array<boolean>
    next_sidepanel_slidein_timer: number
}
//## Automatic casting of entities
//When using `get_entity()` the returned entity will automatically be of the correct type. It is not necessary to use the `as_<typename>` functions.

//To figure out what type of entity you get back, consult the [entity hierarchy list](entities-hierarchy.md)
//You can also use the types (uppercase `<typename>`) as `ENT_TYPE.<typename>` in `get_entities` functions and `pre/post spawn` callbacks

//For reference, the available `as_<typename>` functions are listed below:
//## Enums
//Enums are like numbers but in text that's easier to remember. Example:
/*```lua
set_callback(function()
    if state.theme == THEME.COSMIC_OCEAN then
        x, y, l = get_position(players[1].uid)
        spawn(ENT_TYPE.ITEM_JETPACK, x, y, l, 0, 0)
    end
end, ON.LEVEL)
```*/

declare enum BEG {
  ALTAR_DESTROYED = 1,
  BOMBBAG_THROWN = 3,
  QUEST_NOT_STARTED = 0,
  SPAWNED_WITH_BOMBBAG = 2,
  SPAWNED_WITH_TRUECROWN = 4,
  TRUECROWN_THROWN = 5
}
declare enum BUTTON {
  BOMB = 4,
  DOOR = 32,
  JUMP = 1,
  ROPE = 8,
  RUN = 16,
  WHIP = 2
}
declare enum CAUSE_OF_DEATH {
  DEATH = 0,
  ENTITY = 1,
  LONG_FALL = 2,
  MISSED = 4,
  POISONED = 5,
  STILL_FALLING = 3
}
declare enum CHAR_STATE {
  ATTACKING = 12,
  CLIMBING = 6,
  DROPPING = 10,
  DUCKING = 5,
  DYING = 22,
  ENTERING = 19,
  EXITING = 21,
  FALLING = 9,
  FLAILING = 0,
  HANGING = 4,
  JUMPING = 8,
  LOADING = 20,
  PUSHING = 7,
  SITTING = 2,
  STANDING = 1,
  STUNNED = 18,
  THROWING = 17
}
declare enum CONST {
  ENGINE_FPS = 60,
  ROOM_HEIGHT = 8,
  ROOM_WIDTH = 10
}
declare enum COSUBTHEME {
  DWELLING = 0,
  ICE_CAVES = 5,
  JUNGLE = 1,
  NEO_BABYLON = 6,
  NONE = -1,
  RESET = -1,
  SUNKEN_CITY = 7,
  TEMPLE = 4,
  TIDE_POOL = 3,
  VOLCANA = 2
}
declare enum DROP {
  ALIENQUEEN_ALIENBLAST = 178,
  ALIENQUEEN_ALIENBLAST_RE = 180,
  ALIENQUEEN_ALIENBLAST_RI = 179,
  ALTAR_DICE_CLIMBINGGLOVES = 0,
  ALTAR_DICE_COOKEDTURKEY = 1,
  ALTAR_DICE_DIAMOND = 2,
  ALTAR_DICE_MACHETE = 3,
  ALTAR_DICE_ROPEPILE = 4,
  ALTAR_DICE_SNAKE = 6,
  ALTAR_DICE_SPECTACLES = 5,
  ALTAR_DICE_TELEPACK = 7,
  ALTAR_DICE_VAMPIRE = 8,
  ALTAR_DICE_WEBGUN = 9,
  ALTAR_IDOL_GOLDEN_MONKEY = 10,
  ALTAR_KAPALA = 11,
  ALTAR_PRESENT_EGGPLANT = 12,
  ALTAR_ROCK_WOODENARROW = 13,
  ALTAR_ROYAL_JELLY = 14,
  ALTAR_USHABTI_CAVEMAN = 15,
  ALTAR_USHABTI_TURKEY = 16,
  ALTAR_USHABTI_VAMPIRE = 17,
  ANUBIS2_ANUBIS_COFFIN = 153,
  ANUBIS2_JETPACK = 18,
  ANUBIS2_SPECIALSHOT_R = 183,
  ANUBIS_COFFIN_SORCERESS = 105,
  ANUBIS_COFFIN_VAMPIRE = 104,
  ANUBIS_COFFIN_WITCHDOCTOR = 106,
  ANUBIS_SCEPTER = 19,
  ANUBIS_SPECIALSHOT_R = 182,
  ARROWTRAP_WOODENARROW = 150,
  AXOLOTL_BUBBLE = 171,
  BEG_BOMBBAG = 20,
  BEG_TELEPACK = 22,
  BEG_TRUECROWN = 21,
  BONEPILE_SKELETONKEY = 23,
  BONEPILE_SKULL = 24,
  CANDLE_NUGGET = 144,
  CATMUMMY_CURSINGCLOUD = 181,
  CATMUMMY_DIAMOND = 116,
  CHEST_BOMB = 135,
  CHEST_EMERALD = 130,
  CHEST_LEPRECHAUN = 134,
  CHEST_RUBY = 132,
  CHEST_SAPPHIRE = 131,
  CHEST_SMALLEMERALD = 129,
  CHEST_SMALLRUBY = 133,
  CLONEGUN_SHOT = 163,
  COBRA_ACIDSPIT = 174,
  COFFIN_SKULL = 147,
  COOKEDTURKEY_HEALTH = 185,
  COOKFIRE_TORCH = 145,
  CROCMAN_TELEPACK = 25,
  CROCMAN_TELEPORTER = 26,
  CRUSHTRAP_NUGGET = 126,
  CUTSCENE_GOLDCOIN = 142,
  DUATALTAR_BOMBBAG = 122,
  DUATALTAR_BOMBBOX = 123,
  DUATALTAR_COOKEDTURKEY = 124,
  EGGSAC_GRUB_1 = 109,
  EGGSAC_GRUB_2 = 110,
  EGGSAC_GRUB_3 = 111,
  EMBED_NUGGET = 128,
  FACTORY_GENERATOR_SCRAP = 88,
  FIREBUG_FIREBALL = 173,
  FLOORSTYLEDCOG_NUGGET = 125,
  FREEZERAY_SHOT = 162,
  GHIST_GOLDCOIN = 58,
  GHOSTJAR_DIAMOND = 27,
  GHOST_DIAMOND = 28,
  GIANTFOOD_HEALTH = 186,
  GIANTFROG_FROG = 107,
  GIANTFROG_TADPOLE = 108,
  GIANTSPIDER_PASTE = 29,
  GIANTSPIDER_WEBSHOT = 155,
  GOLDENMONKEY_NUGGET = 33,
  GOLDENMONKEY_SMALLEMERALD = 30,
  GOLDENMONKEY_SMALLRUBY = 32,
  GOLDENMONKEY_SMALLSAPPHIRE = 31,
  HANGINGSPIDER_WEBGUN = 34,
  HERMITCRAB_ACIDBUBBLE = 176,
  HUMPHEAD_HIREDHAND = 117,
  HUNDUN_FIREBALL = 172,
  ICECAVE_BOULDER = 35,
  JIANGSHIASSASSIN_SPIKESHOES = 36,
  JIANGSHI_SPRINGSHOES = 37,
  KAPALA_HEALTH = 188,
  KINGU_FEMALE_JIANGSHI = 41,
  KINGU_JIANGSHI = 40,
  KINGU_OCTOPUS = 39,
  KINGU_TABLETOFDESTINY = 38,
  LAMASSU_DIAMOND = 121,
  LAMASSU_EMERALD = 120,
  LAMASSU_LASERSHOT = 166,
  LAMASSU_RUBY = 119,
  LAMASSU_SAPPHIRE = 118,
  LASERTRAP_SHOT = 152,
  LAVAMANDER_RUBY = 115,
  LAVAPOT_MAGMAMAN = 114,
  LEPRECHAUN_CLOVER = 42,
  LOCKEDCHEST_UDJATEYE = 139,
  MADAME_TUSK_KEY = 103,
  MATTOCK_BROKENMATTOCK = 43,
  MOLE_MATTOCK = 44,
  MOSQUITO_HOVERPACK = 45,
  MOTHERSTATUE_HEALTH = 184,
  MUMMY_DIAMOND = 46,
  MUMMY_FLY = 154,
  NECROMANCER_RUBY = 47,
  OCTOPUS_INKSPIT = 175,
  OLMEC_BOMB = 156,
  OLMEC_CAVEMAN_1 = 48,
  OLMEC_CAVEMAN_2 = 49,
  OLMEC_CAVEMAN_3 = 50,
  OLMEC_SISTERS_BOMBBOX = 149,
  OLMEC_SISTERS_ROPEPILE = 148,
  OLMEC_UFO = 157,
  OSIRIS_EMERALDS = 51,
  OSIRIS_PORTAL = 53,
  OSIRIS_TABLETOFDESTINY = 52,
  PANGXIE_ACIDBUBBLE = 177,
  PANGXIE_WOODENSHIELD = 54,
  PLASMACANNON_SHOT = 161,
  POISONEDARROWTRAP_WOODENARROW = 151,
  POTOFGOLD_GOLDCOIN = 141,
  QILIN_FIREBALL = 170,
  QUEENBEE_ROYALJELLY = 55,
  QUILLBACK_BOMBBAG = 112,
  QUILLBACK_COOKEDTURKEY = 113,
  REDLANTERN_SMALLNUGGET = 143,
  ROBOT_METALSHIELD = 56,
  ROCKDOG_FIREBALL = 169,
  ROYALJELLY_HEALTH = 187,
  SACRIFICE_EGGPLANT = 99,
  SACRIFICE_IDOL = 96,
  SACRIFICE_PRESENT = 97,
  SACRIFICE_ROCK = 98,
  SCEPTER_ANUBISSPECIALSHOT = 159,
  SCEPTER_PLAYERSHOT = 160,
  SCRAP_ALIEN = 94,
  SCRAP_COBRA = 92,
  SCRAP_SCORPION = 93,
  SCRAP_SNAKE = 91,
  SCRAP_SPIDER = 90,
  SHOPKEEPER_GENERATOR_1 = 89,
  SHOPKEEPER_GOLDCOIN = 57,
  SHOTGUN_BULLET = 164,
  SKELETON_SKELETONKEY = 59,
  SKELETON_SKULL = 60,
  SKULLDROPTRAP_SKULL = 146,
  SLIDINGWALL_NUGGET = 127,
  SORCERESS_DAGGERSHOT = 167,
  SORCERESS_RUBY = 61,
  SPARROW_ROPEPILE = 62,
  SPARROW_SKELETONKEY = 63,
  TIAMAT_BAT = 64,
  TIAMAT_BEE = 65,
  TIAMAT_CAVEMAN = 66,
  TIAMAT_COBRA = 67,
  TIAMAT_HERMITCRAB = 68,
  TIAMAT_MONKEY = 69,
  TIAMAT_MOSQUITO = 70,
  TIAMAT_OCTOPUS = 71,
  TIAMAT_OLMITE = 72,
  TIAMAT_SCORPION = 73,
  TIAMAT_SHOT = 74,
  TIAMAT_SNAKE = 75,
  TIAMAT_TIAMATSHOT = 168,
  TIAMAT_UFO = 76,
  TIAMAT_YETI = 77,
  TORCH_SMALLNUGGET = 78,
  TURKEY_COOKEDTURKEY = 79,
  UFO_ALIEN = 95,
  UFO_LASERSHOT = 165,
  UFO_PARACHUTE = 80,
  USHABTI_QILIN = 140,
  VAMPIRE_CAPE = 81,
  VAN_HORSING_COMPASS = 82,
  VAN_HORSING_DIAMOND = 83,
  VAULTCHEST_DIAMOND = 137,
  VAULTCHEST_EMERALD = 136,
  VAULTCHEST_RUBY = 138,
  VLAD_VLADSCAPE = 84,
  YAMA_EGGPLANTCROWN = 100,
  YAMA_GIANTFOOD = 101,
  YANG_KEY = 102,
  YETIKING_FREEZERAY = 85,
  YETIKING_ICESPIRE = 158,
  YETIQUEEN_POWERPACK = 86,
  YETI_PITCHERSMITT = 87
}
declare enum DROPCHANCE {
  BONEBLOCK_SKELETONKEY = 0,
  CROCMAN_TELEPACK = 1,
  HANGINGSPIDER_WEBGUN = 2,
  JIANGSHIASSASSIN_SPIKESHOES = 3,
  JIANGSHI_SPRINGSHOES = 4,
  MOLE_MATTOCK = 5,
  MOSQUITO_HOVERPACK = 6,
  ROBOT_METALSHIELD = 7,
  SKELETON_SKELETONKEY = 8,
  UFO_PARACHUTE = 9,
  YETI_PITCHERSMITT = 10
}
declare enum ENT_FLAG {
  CAN_BE_STOMPED = 15,
  CLIMBABLE = 9,
  COLLIDES_WALLS = 13,
  DEAD = 29,
  ENABLE_BUTTON_PROMPT = 20,
  FACING_LEFT = 17,
  HAS_BACKITEM = 32,
  INDESTRUCTIBLE_OR_SPECIAL_FLOOR = 2,
  INTERACT_WITH_SEMISOLIDS = 14,
  INTERACT_WITH_WATER = 11,
  INTERACT_WITH_WEBS = 21,
  INVISIBLE = 1,
  IS_PLATFORM = 8,
  LOCKED = 22,
  NO_GRAVITY = 10,
  PASSES_THROUGH_EVERYTHING = 5,
  PASSES_THROUGH_OBJECTS = 4,
  PASSES_THROUGH_PLAYER = 25,
  PAUSE_AI_AND_PHYSICS = 28,
  PICKUPABLE = 18,
  POWER_STOMPS = 16,
  SHOP_FLOOR = 24,
  SHOP_ITEM = 23,
  SOLID = 3,
  STUNNABLE = 12,
  TAKE_NO_DAMAGE = 6,
  THROWABLE_OR_KNOCKBACKABLE = 7,
  USABLE_ITEM = 19
}
declare enum ENT_MORE_FLAG {
  CURSED_EFFECT = 15,
  DISABLE_INPUT = 17,
  ELIXIR_BUFF = 16,
  FALLING = 14,
  HIRED_HAND_REVIVED = 2,
  HIT_GROUND = 12,
  HIT_WALL = 13,
  SWIMMING = 11
}
declare enum ENT_TYPE {
  ACIDBUBBLE = 1000,
  ACTIVEFLOOR_BONEBLOCK = 601,
  ACTIVEFLOOR_BOULDER = 599,
  ACTIVEFLOOR_BUBBLE_PLATFORM = 622,
  ACTIVEFLOOR_BUSHBLOCK = 602,
  ACTIVEFLOOR_CHAINEDPUSHBLOCK = 604,
  ACTIVEFLOOR_CHAINED_SPIKEBALL = 608,
  ACTIVEFLOOR_CRUSHING_ELEVATOR = 623,
  ACTIVEFLOOR_CRUSH_TRAP = 611,
  ACTIVEFLOOR_CRUSH_TRAP_LARGE = 612,
  ACTIVEFLOOR_DRILL = 610,
  ACTIVEFLOOR_EGGSHIPBLOCKER = 597,
  ACTIVEFLOOR_EGGSHIPPLATFORM = 596,
  ACTIVEFLOOR_ELEVATOR = 617,
  ACTIVEFLOOR_FALLING_PLATFORM = 607,
  ACTIVEFLOOR_GIANTCLAM_BASE = 618,
  ACTIVEFLOOR_KINGU_PLATFORM = 619,
  ACTIVEFLOOR_LIGHTARROWPLATFORM = 606,
  ACTIVEFLOOR_METALARROWPLATFORM = 605,
  ACTIVEFLOOR_OLMEC = 613,
  ACTIVEFLOOR_POWDERKEG = 603,
  ACTIVEFLOOR_PUSHBLOCK = 600,
  ACTIVEFLOOR_REGENERATINGBLOCK = 625,
  ACTIVEFLOOR_SHIELD = 624,
  ACTIVEFLOOR_SLIDINGWALL = 615,
  ACTIVEFLOOR_THINICE = 616,
  ACTIVEFLOOR_TIAMAT_PLATFORM = 620,
  ACTIVEFLOOR_TIAMAT_SHOULDERPLATFORM = 621,
  ACTIVEFLOOR_TIMEDPOWDERKEG = 614,
  ACTIVEFLOOR_UNCHAINED_SPIKEBALL = 609,
  ACTIVEFLOOR_WOODENLOG_TRAP = 598,
  ALIEN = 1001,
  ALTAR = 1002,
  AMMIT = 1003,
  ANKHPOWERUP = 1004,
  ANUBIS = 1005,
  APEPHEAD = 1006,
  APEPPART = 1007,
  ARROW = 1008,
  ARROWTRAP = 1009,
  AXOLOTL = 1010,
  AXOLOTLSHOT = 1011,
  BACKPACK = 1012,
  BAT = 1013,
  BEE = 1014,
  BEG = 1015,
  BGBACKLAYERDOOR = 1016,
  BGEGGSHIPROOM = 1017,
  BGFLOATINGDEBRIS = 1018,
  BGMOVINGSTAR = 1019,
  BGRELATIVEELEMENT = 1020,
  BGSHOOTINGSTAR = 1021,
  BGSHOPENTRENCE = 1022,
  BGSHOPKEEPERPRIME = 1023,
  BGSURFACELAYER = 1024,
  BGSURFACESTAR = 1025,
  BGTUTORIALSIGN = 1026,
  BG_ANUBIS_THRONE = 819,
  BG_BASECAMP_BUNKBED = 799,
  BG_BASECAMP_DININGTABLE_DISHES = 801,
  BG_BASECAMP_DRESSER = 798,
  BG_BASECAMP_SHORTCUTSTATIONBANNER = 802,
  BG_BASECAMP_SIDETABLE = 800,
  BG_BOULDER_STATUE = 828,
  BG_CONSTELLATION_CONNECTION = 776,
  BG_CONSTELLATION_FLASH = 772,
  BG_CONSTELLATION_GLOW = 775,
  BG_CONSTELLATION_HALO = 774,
  BG_CONSTELLATION_STAR = 773,
  BG_COSMIC_FARFLOATINGDEBRIS = 840,
  BG_COSMIC_FLOATINGDEBRIS = 839,
  BG_CROWN_STATUE = 818,
  BG_DOOR = 786,
  BG_DOORGEM = 797,
  BG_DOOR_BACK_LAYER = 788,
  BG_DOOR_BLACK_MARKET = 790,
  BG_DOOR_COG = 791,
  BG_DOOR_EGGPLANT_WORLD = 793,
  BG_DOOR_FRONT_LAYER = 787,
  BG_DOOR_GHIST_SHOP = 789,
  BG_DOOR_LARGE = 785,
  BG_DOOR_OLMEC_SHIP = 792,
  BG_DRILL_INDICATOR = 816,
  BG_DUAT_BLOODMOON = 825,
  BG_DUAT_FARFLOATINGDEBRIS = 827,
  BG_DUAT_FLOATINGDEBRIS = 826,
  BG_DUAT_LAYER = 822,
  BG_DUAT_PYRAMID_LAYER = 824,
  BG_DUAT_SIDE_DECORATION = 823,
  BG_EGGSAC_STAINS = 841,
  BG_EGGSHIP_ROOM = 777,
  BG_ENDINGTREASURE_HUNDUN_GOLD = 779,
  BG_ICE_CRYSTAL = 821,
  BG_KALI_STATUE = 809,
  BG_LEVEL_BACKWALL = 780,
  BG_LEVEL_BOMB_SOOT = 783,
  BG_LEVEL_COSMIC = 838,
  BG_LEVEL_DECO = 781,
  BG_LEVEL_POWEREDBOMB_SOOT = 784,
  BG_LEVEL_SHADOW = 782,
  BG_MOAI_STATUE = 829,
  BG_MOTHER_STATUE = 835,
  BG_OLMEC_PILLAR = 820,
  BG_OUROBORO = 796,
  BG_PALACE_CANDLE = 833,
  BG_PALACE_DISHES = 834,
  BG_PARENTSHIP_LANDINGLEG = 778,
  BG_SHOP = 803,
  BG_SHOPWANTEDPORTRAIT = 807,
  BG_SHOPWANTEDPOSTER = 806,
  BG_SHOP_BACKDOOR = 805,
  BG_SHOP_DICEPOSTER = 808,
  BG_SHOP_ENTRANCEDOOR = 804,
  BG_SPACE = 759,
  BG_SURFACE_BACKGROUNDSEAM = 771,
  BG_SURFACE_ENTITY = 769,
  BG_SURFACE_LAYER = 766,
  BG_SURFACE_LAYER_HOLE = 768,
  BG_SURFACE_LAYER_OCCLUDER = 767,
  BG_SURFACE_MOVING_STAR = 764,
  BG_SURFACE_NEBULA = 765,
  BG_SURFACE_OLMEC_LAYER = 770,
  BG_SURFACE_SHOOTING_STAR = 761,
  BG_SURFACE_SHOOTING_STAR_TRAIL = 762,
  BG_SURFACE_SHOOTING_STAR_TRAIL_PARTICLE = 763,
  BG_SURFACE_STAR = 760,
  BG_TUTORIAL_SIGN_BACK = 794,
  BG_TUTORIAL_SIGN_FRONT = 795,
  BG_UDJATSOCKET_DECORATION = 815,
  BG_VAT_BACK = 830,
  BG_VAT_FRONT = 832,
  BG_VAT_SHOPKEEPER_PRIME = 831,
  BG_VLAD_WINDOW = 817,
  BG_WATER_FOUNTAIN = 836,
  BG_YAMA_BODY = 837,
  BIGSPEARTRAP = 1027,
  BIRDIES = 1028,
  BODYGUARD = 1029,
  BOMB = 1030,
  BONEBLOCK = 1031,
  BOOMBOX = 1032,
  BOOMERANG = 1033,
  BOULDER = 1034,
  BOULDERSPAWNER = 1035,
  BULLET = 1036,
  BURNINGROPEEFFECT = 1037,
  BUTTON = 1038,
  CAMERAFLASH = 1039,
  CAPE = 1040,
  CATMUMMY = 1041,
  CAVEMAN = 1042,
  CAVEMANSHOPKEEPER = 1043,
  CHAIN = 1044,
  CHAINEDPUSHBLOCK = 1045,
  CHAR_AMAZON = 200,
  CHAR_ANA_SPELUNKY = 194,
  CHAR_AU = 207,
  CHAR_BANDA = 198,
  CHAR_CLASSIC_GUY = 213,
  CHAR_COCO_VON_DIAMONDS = 202,
  CHAR_COLIN_NORTHWARD = 196,
  CHAR_DEMI_VON_DIAMONDS = 208,
  CHAR_DIRK_YAMAOKA = 211,
  CHAR_EGGPLANT_CHILD = 216,
  CHAR_GREEN_GIRL = 199,
  CHAR_GUY_SPELUNKY = 212,
  CHAR_HIREDHAND = 215,
  CHAR_LISE_SYSTEM = 201,
  CHAR_MANFRED_TUNNEL = 203,
  CHAR_MARGARET_TUNNEL = 195,
  CHAR_OTAKU = 204,
  CHAR_PILOT = 209,
  CHAR_PRINCESS_AIRYN = 210,
  CHAR_ROFFY_D_SLOTH = 197,
  CHAR_TINA_FLAN = 205,
  CHAR_VALERIE_CRUMP = 206,
  CHEST = 1046,
  CINEMATICANCHOR = 1047,
  CITYOFGOLDDOOR = 1048,
  CLAMBASE = 1049,
  CLAW = 1050,
  CLIMBABLEROPE = 1051,
  CLONEGUNSHOT = 1052,
  COBRA = 1053,
  COFFIN = 1054,
  COIN = 1055,
  CONTAINER = 1056,
  CONVEYORBELT = 1057,
  COOKFIRE = 1058,
  CRABMAN = 1059,
  CRITTER = 1060,
  CRITTERBEETLE = 1061,
  CRITTERBUTTERFLY = 1062,
  CRITTERCRAB = 1063,
  CRITTERDRONE = 1064,
  CRITTERFIREFLY = 1065,
  CRITTERFISH = 1066,
  CRITTERLOCUST = 1067,
  CRITTERPENGUIN = 1068,
  CRITTERSLIME = 1069,
  CRITTERSNAIL = 1070,
  CROCMAN = 1071,
  CROSSBEAM = 1072,
  CRUSHTRAP = 1073,
  CURSEDEFFECT = 1074,
  CURSEDPOT = 1075,
  DECORATEDDOOR = 1076,
  DECORATION_BABYLON = 127,
  DECORATION_BABYLONBUSH = 138,
  DECORATION_BABYLON_FLOWER = 141,
  DECORATION_BABYLON_HANGING_FLOWER = 144,
  DECORATION_BABYLON_NEON_SIGN = 145,
  DECORATION_BASECAMPDOGSIGN = 152,
  DECORATION_BASECAMPSIGN = 151,
  DECORATION_BEEHIVE = 162,
  DECORATION_BG_TRANSITIONCOVER = 128,
  DECORATION_BONEBLOCK = 121,
  DECORATION_BORDER = 115,
  DECORATION_BRANCH = 146,
  DECORATION_BUSHBLOCK = 122,
  DECORATION_CHAINANDBLOCKS_CHAINDECORATION = 163,
  DECORATION_COG = 169,
  DECORATION_CONVEYORBELT_RAILING = 164,
  DECORATION_CROSS_BEAM = 131,
  DECORATION_DUAT = 171,
  DECORATION_DUAT_DARKSAND = 173,
  DECORATION_DUAT_DESTRUCTIBLE_BG = 174,
  DECORATION_DUAT_SAND = 172,
  DECORATION_DWELLINGBUSH = 136,
  DECORATION_EGGPLANT_ALTAR = 180,
  DECORATION_GENERIC = 116,
  DECORATION_GUTS = 179,
  DECORATION_HANGING_BANNER = 134,
  DECORATION_HANGING_HIDE = 132,
  DECORATION_HANGING_SEAWEED = 133,
  DECORATION_HANGING_WIRES = 135,
  DECORATION_JUNGLE = 119,
  DECORATION_JUNGLEBUSH = 137,
  DECORATION_JUNGLE_FLOWER = 140,
  DECORATION_JUNGLE_HANGING_FLOWER = 143,
  DECORATION_KELP = 166,
  DECORATION_LARGETOMB = 185,
  DECORATION_MINEWOOD = 120,
  DECORATION_MINEWOOD_POLE = 129,
  DECORATION_MOTHERSHIP = 170,
  DECORATION_MOTHER_STATUE_HAND = 181,
  DECORATION_MUSHROOM_HAT = 160,
  DECORATION_PAGODA = 125,
  DECORATION_PAGODA_POLE = 130,
  DECORATION_PALACE = 175,
  DECORATION_PALACE_CHANDELIER = 177,
  DECORATION_PALACE_PORTRAIT = 178,
  DECORATION_PALACE_SIGN = 176,
  DECORATION_PIPE = 182,
  DECORATION_POTOFGOLD_RAINBOW = 189,
  DECORATION_REGENERATING_BORDER = 187,
  DECORATION_REGENERATING_SMALL_BLOCK = 186,
  DECORATION_SHOPFORE = 148,
  DECORATION_SHOPSIGN = 149,
  DECORATION_SHOPSIGNICON = 150,
  DECORATION_SKULLDROP_TRAP = 188,
  DECORATION_SLIDINGWALL_CHAINDECORATION = 167,
  DECORATION_SPIKES_BLOOD = 147,
  DECORATION_STONE = 123,
  DECORATION_SUNKEN = 126,
  DECORATION_SUNKEN_BRIDGE = 183,
  DECORATION_SURFACE = 117,
  DECORATION_SURFACE_COVER = 118,
  DECORATION_TEMPLE = 124,
  DECORATION_TEMPLE_SAND = 168,
  DECORATION_THORN_VINE = 161,
  DECORATION_TIDEPOOLBUSH = 139,
  DECORATION_TIDEPOOL_CORAL = 142,
  DECORATION_TOMB = 184,
  DECORATION_TREE = 153,
  DECORATION_TREETRUNK_BROKEN = 157,
  DECORATION_TREETRUNK_CLIMBINGHINT = 154,
  DECORATION_TREETRUNK_TOPBACK = 156,
  DECORATION_TREETRUNK_TOPFRONT = 155,
  DECORATION_TREE_VINE = 159,
  DECORATION_TREE_VINE_TOP = 158,
  DECORATION_VLAD = 165,
  DECOREGENERATINGBLOCK = 1077,
  DESTRUCTIBLEBG = 1078,
  DMALIENBLAST = 1079,
  DMSPAWNING = 1080,
  DOOR = 1081,
  DRILL = 1082,
  DUSTWALLAPEP = 1083,
  EGGPLANTMINISTER = 1084,
  EGGPLANTTHROWER = 1085,
  EGGSAC = 1086,
  EGGSHIPCENTERJETFLAME = 1087,
  EGGSHIPDOOR = 1088,
  EGGSHIPDOORS = 1089,
  ELEVATOR = 1090,
  EMBED_GOLD = 190,
  EMBED_GOLD_BIG = 191,
  EMPRESSGRAVE = 1091,
  ENTITY = 1092,
  EXCALIBUR = 1093,
  EXITDOOR = 1094,
  EXPLOSION = 1095,
  FALLINGPLATFORM = 1096,
  FIREBALL = 1097,
  FIREBUG = 1098,
  FIREBUGUNCHAINED = 1099,
  FIREFROG = 1100,
  FISH = 1101,
  FLAME = 1102,
  FLAMESIZE = 1103,
  FLOOR = 1104,
  FLOORSTYLED_BABYLON = 106,
  FLOORSTYLED_BEEHIVE = 108,
  FLOORSTYLED_COG = 110,
  FLOORSTYLED_DUAT = 112,
  FLOORSTYLED_GUTS = 114,
  FLOORSTYLED_MINEWOOD = 102,
  FLOORSTYLED_MOTHERSHIP = 111,
  FLOORSTYLED_PAGODA = 105,
  FLOORSTYLED_PALACE = 113,
  FLOORSTYLED_STONE = 103,
  FLOORSTYLED_SUNKEN = 107,
  FLOORSTYLED_TEMPLE = 104,
  FLOORSTYLED_VLAD = 109,
  FLOOR_ALTAR = 47,
  FLOOR_ARROW_TRAP = 40,
  FLOOR_BASECAMP_DININGTABLE = 8,
  FLOOR_BASECAMP_LONGTABLE = 9,
  FLOOR_BASECAMP_SINGLEBED = 7,
  FLOOR_BIGSPEAR_TRAP = 79,
  FLOOR_BORDERTILE = 1,
  FLOOR_BORDERTILE_METAL = 2,
  FLOOR_BORDERTILE_OCTOPUS = 3,
  FLOOR_CHAINANDBLOCKS_CEILING = 61,
  FLOOR_CHAINANDBLOCKS_CHAIN = 62,
  FLOOR_CHAIN_CEILING = 63,
  FLOOR_CHALLENGE_ENTRANCE = 87,
  FLOOR_CHALLENGE_WAITROOM = 88,
  FLOOR_CLIMBING_POLE = 20,
  FLOOR_CONVEYORBELT_LEFT = 64,
  FLOOR_CONVEYORBELT_RIGHT = 65,
  FLOOR_DICE_FORCEFIELD = 86,
  FLOOR_DOOR_COG = 31,
  FLOOR_DOOR_EGGPLANT_WORLD = 36,
  FLOOR_DOOR_EGGSHIP = 33,
  FLOOR_DOOR_EGGSHIP_ATREZZO = 34,
  FLOOR_DOOR_EGGSHIP_ROOM = 35,
  FLOOR_DOOR_ENTRANCE = 22,
  FLOOR_DOOR_EXIT = 23,
  FLOOR_DOOR_GHISTSHOP = 28,
  FLOOR_DOOR_LAYER = 26,
  FLOOR_DOOR_LAYER_DROP_HELD = 27,
  FLOOR_DOOR_LOCKED = 29,
  FLOOR_DOOR_LOCKED_PEN = 30,
  FLOOR_DOOR_MAIN_EXIT = 24,
  FLOOR_DOOR_MOAI_STATUE = 32,
  FLOOR_DOOR_PLATFORM = 37,
  FLOOR_DOOR_STARTING_EXIT = 25,
  FLOOR_DUAT_ALTAR = 71,
  FLOOR_DUSTWALL = 70,
  FLOOR_EGGPLANT_ALTAR = 74,
  FLOOR_EMPRESS_GRAVE = 96,
  FLOOR_EXCALIBUR_STONE = 69,
  FLOOR_FACTORY_GENERATOR = 66,
  FLOOR_FORCEFIELD = 85,
  FLOOR_FORCEFIELD_TOP = 90,
  FLOOR_GENERIC = 4,
  FLOOR_GIANTFROG_PLATFORM = 83,
  FLOOR_GROWABLE_CLIMBING_POLE = 21,
  FLOOR_GROWABLE_VINE = 19,
  FLOOR_HORIZONTAL_FORCEFIELD = 91,
  FLOOR_HORIZONTAL_FORCEFIELD_TOP = 92,
  FLOOR_ICE = 72,
  FLOOR_IDOL_BLOCK = 48,
  FLOOR_IDOL_TRAP_CEILING = 49,
  FLOOR_JUNGLE = 10,
  FLOOR_JUNGLE_SPEAR_TRAP = 43,
  FLOOR_LADDER = 15,
  FLOOR_LADDER_PLATFORM = 16,
  FLOOR_LASER_TRAP = 45,
  FLOOR_LION_TRAP = 44,
  FLOOR_MOAI_PLATFORM = 75,
  FLOOR_MOTHER_STATUE = 81,
  FLOOR_MOTHER_STATUE_PLATFORM = 82,
  FLOOR_MUSHROOM_BASE = 55,
  FLOOR_MUSHROOM_HAT_PLATFORM = 58,
  FLOOR_MUSHROOM_TOP = 57,
  FLOOR_MUSHROOM_TRUNK = 56,
  FLOOR_PAGODA_PLATFORM = 14,
  FLOOR_PALACE_BOOKCASE_PLATFORM = 100,
  FLOOR_PALACE_CHANDELIER_PLATFORM = 99,
  FLOOR_PALACE_TABLE_PLATFORM = 97,
  FLOOR_PALACE_TRAY_PLATFORM = 98,
  FLOOR_PEN = 93,
  FLOOR_PIPE = 78,
  FLOOR_PLATFORM = 13,
  FLOOR_POISONED_ARROW_TRAP = 41,
  FLOOR_QUICKSAND = 68,
  FLOOR_SHOPKEEPER_GENERATOR = 76,
  FLOOR_SLIDINGWALL_CEILING = 67,
  FLOOR_SPARK_TRAP = 46,
  FLOOR_SPIKEBALL_CEILING = 60,
  FLOOR_SPIKES = 38,
  FLOOR_SPIKES_UPSIDEDOWN = 39,
  FLOOR_SPRING_TRAP = 73,
  FLOOR_STICKYTRAP_CEILING = 80,
  FLOOR_STORAGE = 50,
  FLOOR_SUNCHALLENGE_GENERATOR = 77,
  FLOOR_SURFACE = 5,
  FLOOR_SURFACE_HIDDEN = 6,
  FLOOR_TELEPORTINGBORDER = 84,
  FLOOR_TENTACLE_BOTTOM = 101,
  FLOOR_THORN_VINE = 59,
  FLOOR_TIMED_FORCEFIELD = 89,
  FLOOR_TOMB = 94,
  FLOOR_TOTEM_TRAP = 42,
  FLOOR_TREE_BASE = 51,
  FLOOR_TREE_BRANCH = 54,
  FLOOR_TREE_TOP = 53,
  FLOOR_TREE_TRUNK = 52,
  FLOOR_TUNNEL_CURRENT = 11,
  FLOOR_TUNNEL_NEXT = 12,
  FLOOR_VINE = 17,
  FLOOR_VINE_TREE_TOP = 18,
  FLOOR_YAMA_PLATFORM = 95,
  FLY = 1105,
  FLYHEAD = 1106,
  FORCEFIELD = 1107,
  FORESTSISTER = 1108,
  FROG = 1109,
  FROSTBREATHEFFECT = 1110,
  FROZENLIQUID = 1111,
  FXALIENBLAST = 1112,
  FXANKHBROKENPIECE = 1113,
  FXANKHROTATINGSPARK = 1114,
  FXCOMPASS = 1115,
  FXEMPRESS = 1116,
  FXFIREFLYLIGHT = 1117,
  FXHUNDUNNECKPIECE = 1118,
  FXJELLYFISHSTAR = 1119,
  FXJETPACKFLAME = 1120,
  FXKINGUSLIDING = 1121,
  FXLAMASSUATTACK = 1122,
  FXMAINEXITDOOR = 1123,
  FXNECROMANCERANKH = 1124,
  FXOUROBORODRAGONPART = 1125,
  FXOUROBOROOCCLUDER = 1126,
  FXPICKUPEFFECT = 1127,
  FXPLAYERINDICATOR = 1128,
  FXQUICKSAND = 1129,
  FXSALECONTAINER = 1130,
  FXSHOTGUNBLAST = 1131,
  FXSORCERESSATTACK = 1132,
  FXSPARKSMALL = 1133,
  FXSPRINGTRAPRING = 1134,
  FXTIAMATHEAD = 1135,
  FXTIAMATTAIL = 1136,
  FXTIAMATTORSO = 1137,
  FXTORNJOURNALPAGE = 1138,
  FXUNDERWATERBUBBLE = 1139,
  FXVATBUBBLE = 1140,
  FXWATERDROP = 1141,
  FXWEBBEDEFFECT = 1142,
  FXWITCHDOCTORHINT = 1143,
  FX_ALIENBLAST = 694,
  FX_ALIENBLAST_RETICULE_EXTERNAL = 693,
  FX_ALIENBLAST_RETICULE_INTERNAL = 692,
  FX_ALIENQUEEN_EYE = 691,
  FX_ALIENQUEEN_EYEBALL = 690,
  FX_ANKH_BACKGLOW = 752,
  FX_ANKH_BROKENPIECE = 755,
  FX_ANKH_FALLINGSPARK = 751,
  FX_ANKH_FRONTGLOW = 753,
  FX_ANKH_LIGHTBEAM = 754,
  FX_ANKH_ROTATINGSPARK = 750,
  FX_ANUBIS_SPECIAL_SHOT_RETICULE = 735,
  FX_APEP_FIRE = 681,
  FX_APEP_MOUTHPIECE = 682,
  FX_AXOLOTL_HEAD_ENTERING_DOOR = 742,
  FX_BASECAMP_COUCH_ARM = 743,
  FX_BIRDIES = 636,
  FX_BUTTON = 670,
  FX_BUTTON_DIALOG = 671,
  FX_CINEMATIC_BLACKBAR = 663,
  FX_COMPASS = 646,
  FX_CRITTERFIREFLY_LIGHT = 741,
  FX_CRUSHINGELEVATOR_DECO = 717,
  FX_CRUSHINGELEVATOR_FILL = 716,
  FX_DIEINDICATOR = 711,
  FX_DRILL_TURNING = 683,
  FX_EGGSHIP_CENTERJETFLAME = 630,
  FX_EGGSHIP_DOOR = 629,
  FX_EGGSHIP_HOOK_CHAIN = 745,
  FX_EGGSHIP_JETFLAME = 631,
  FX_EGGSHIP_SHADOW = 632,
  FX_EGGSHIP_SHELL = 628,
  FX_EMPRESS = 744,
  FX_EXPLOSION = 637,
  FX_HORIZONTALLASERBEAM = 714,
  FX_HUNDUN_EGG_CRACK = 721,
  FX_HUNDUN_EYE = 726,
  FX_HUNDUN_EYEBALL = 725,
  FX_HUNDUN_EYELID = 724,
  FX_HUNDUN_LIMB_CALF = 719,
  FX_HUNDUN_LIMB_FOOT = 720,
  FX_HUNDUN_LIMB_THIGH = 718,
  FX_HUNDUN_NECK_PIECE = 722,
  FX_HUNDUN_WING = 723,
  FX_INK_BLINDNESS = 673,
  FX_INK_SPLAT = 674,
  FX_JETPACKFLAME = 657,
  FX_KINGU_HEAD = 685,
  FX_KINGU_LIMB = 688,
  FX_KINGU_PLATFORM = 687,
  FX_KINGU_SHADOW = 686,
  FX_KINGU_SLIDING = 689,
  FX_LAMASSU_ATTACK = 740,
  FX_LASERBEAM = 713,
  FX_LAVA_BUBBLE = 675,
  FX_LAVA_GLOW = 676,
  FX_LEADER_FLAG = 684,
  FX_MAIN_EXIT_DOOR = 635,
  FX_MECH_COLLAR = 736,
  FX_MEGAJELLYFISH_BOTTOM = 732,
  FX_MEGAJELLYFISH_CROWN = 728,
  FX_MEGAJELLYFISH_EYE = 729,
  FX_MEGAJELLYFISH_FLIPPER = 731,
  FX_MEGAJELLYFISH_STAR = 730,
  FX_MEGAJELLYFISH_TAIL = 733,
  FX_MEGAJELLYFISH_TAIL_BG = 734,
  FX_MINIGAME_SHIP_CENTERJETFLAME = 747,
  FX_MINIGAME_SHIP_DOOR = 746,
  FX_MINIGAME_SHIP_JETFLAME = 748,
  FX_MODERNEXPLOSION = 639,
  FX_NECROMANCER_ANKH = 661,
  FX_OLMECPART_FLOATER = 664,
  FX_OLMECPART_LARGE = 665,
  FX_OLMECPART_MEDIUM = 666,
  FX_OLMECPART_SMALL = 667,
  FX_OLMECPART_SMALLEST = 668,
  FX_OUROBORO_HEAD = 641,
  FX_OUROBORO_OCCLUDER = 640,
  FX_OUROBORO_TAIL = 642,
  FX_OUROBORO_TEXT = 643,
  FX_OUROBORO_TRAIL = 644,
  FX_PICKUPEFFECT = 655,
  FX_PLAYERINDICATOR = 648,
  FX_PLAYERINDICATORPORTRAIT = 649,
  FX_PORTAL = 727,
  FX_POWEREDEXPLOSION = 638,
  FX_QUICKSAND_DUST = 737,
  FX_QUICKSAND_RUBBLE = 738,
  FX_SALEDIALOG_CONTAINER = 651,
  FX_SALEDIALOG_ICON = 654,
  FX_SALEDIALOG_TITLE = 652,
  FX_SALEDIALOG_VALUE = 653,
  FX_SALEICON = 650,
  FX_SHADOW = 633,
  FX_SHOTGUNBLAST = 656,
  FX_SLEEP_BUBBLE = 672,
  FX_SMALLFLAME = 658,
  FX_SORCERESS_ATTACK = 739,
  FX_SPARK = 695,
  FX_SPARK_SMALL = 696,
  FX_SPECIALCOMPASS = 647,
  FX_SPRINGTRAP_RING = 659,
  FX_STORAGE_INDICATOR = 712,
  FX_TELEPORTSHADOW = 662,
  FX_TIAMAT_ARM_LEFT1 = 704,
  FX_TIAMAT_ARM_LEFT2 = 705,
  FX_TIAMAT_ARM_LEFT3 = 706,
  FX_TIAMAT_ARM_RIGHT1 = 707,
  FX_TIAMAT_ARM_RIGHT2 = 708,
  FX_TIAMAT_HEAD = 710,
  FX_TIAMAT_NECK = 709,
  FX_TIAMAT_TAIL = 699,
  FX_TIAMAT_TAIL_DECO1 = 700,
  FX_TIAMAT_TAIL_DECO2 = 701,
  FX_TIAMAT_TAIL_DECO3 = 702,
  FX_TIAMAT_THRONE = 697,
  FX_TIAMAT_TORSO = 703,
  FX_TIAMAT_WAIST = 698,
  FX_TORNJOURNALPAGE = 634,
  FX_UNDERWATER_BUBBLE = 677,
  FX_VAT_BUBBLE = 715,
  FX_WATER_DROP = 678,
  FX_WATER_SPLASH = 679,
  FX_WATER_SURFACE = 680,
  FX_WEBBEDEFFECT = 669,
  FX_WITCHDOCTOR_HINT = 660,
  GENERATOR = 1144,
  GHIST = 1145,
  GHOST = 1146,
  GHOSTBREATH = 1147,
  GIANTCLAMTOP = 1148,
  GIANTFISH = 1149,
  GIANTFLY = 1150,
  GIANTFROG = 1151,
  GOLDBAR = 1152,
  GOLDMONKEY = 1153,
  GRUB = 1154,
  GUN = 1155,
  HANGANCHOR = 1156,
  HANGSPIDER = 1157,
  HANGSTRAND = 1158,
  HERMITCRAB = 1159,
  HONEY = 1160,
  HORIZONTALFORCEFIELD = 1161,
  HORNEDLIZARD = 1162,
  HOVERPACK = 1163,
  HUNDUN = 1164,
  HUNDUNCHEST = 1165,
  HUNDUNHEAD = 1166,
  ICESLIDINGSOUND = 1167,
  IDOL = 1168,
  IMP = 1169,
  ITEM_ACIDBUBBLE = 391,
  ITEM_ACIDSPIT = 389,
  ITEM_ALIVE_EMBEDDED_ON_ICE = 463,
  ITEM_ANUBIS_COFFIN = 453,
  ITEM_AUTOWALLTORCH = 415,
  ITEM_AXOLOTL_BUBBLESHOT = 456,
  ITEM_BASECAMP_TUTORIAL_SIGN = 408,
  ITEM_BIG_SPEAR = 364,
  ITEM_BLOOD = 352,
  ITEM_BOMB = 347,
  ITEM_BONES = 483,
  ITEM_BOOMBOX = 409,
  ITEM_BOOMERANG = 583,
  ITEM_BROKENEXCALIBUR = 586,
  ITEM_BROKEN_ARROW = 372,
  ITEM_BROKEN_MATTOCK = 428,
  ITEM_BULLET = 424,
  ITEM_CAMERA = 580,
  ITEM_CAPE = 564,
  ITEM_CHAIN = 431,
  ITEM_CHAIN_LASTPIECE = 432,
  ITEM_CHEST = 395,
  ITEM_CLIMBABLE_ROPE = 350,
  ITEM_CLONEGUN = 589,
  ITEM_CLONEGUNSHOT = 426,
  ITEM_COFFIN = 435,
  ITEM_CONSTRUCTION_SIGN = 405,
  ITEM_COOKFIRE = 484,
  ITEM_CRABMAN_ACIDBUBBLE = 392,
  ITEM_CRABMAN_CLAW = 393,
  ITEM_CRABMAN_CLAWCHAIN = 394,
  ITEM_CRATE = 402,
  ITEM_CROSSBOW = 579,
  ITEM_CURSEDPOT = 481,
  ITEM_CURSING_CLOUD = 440,
  ITEM_DEPLOYED_PARACHUTE = 464,
  ITEM_DIAMOND = 497,
  ITEM_DICE_BET = 449,
  ITEM_DICE_PRIZE_DISPENSER = 450,
  ITEM_DIE = 448,
  ITEM_DMCRATE = 403,
  ITEM_EGGPLANT = 487,
  ITEM_EGGSAC = 492,
  ITEM_EGGSHIP = 353,
  ITEM_EGGSHIP_HOOK = 455,
  ITEM_EMERALD = 498,
  ITEM_EMERALD_SMALL = 503,
  ITEM_EMPRESS_GRAVE = 470,
  ITEM_ENDINGTREASURE_HUNDUN = 398,
  ITEM_ENDINGTREASURE_TIAMAT = 397,
  ITEM_EXCALIBUR = 585,
  ITEM_FIREBALL = 385,
  ITEM_FLAMETHROWER_FIREBALL = 387,
  ITEM_FLOATING_ORB = 491,
  ITEM_FLY = 436,
  ITEM_FREEZERAY = 578,
  ITEM_FREEZERAYSHOT = 425,
  ITEM_FROZEN_LIQUID = 462,
  ITEM_GHIST_PRESENT = 423,
  ITEM_GIANTCLAM_TOP = 445,
  ITEM_GIANTFLY_HEAD = 467,
  ITEM_GIANTSPIDER_WEBSHOT = 368,
  ITEM_GOLDBAR = 495,
  ITEM_GOLDBARS = 496,
  ITEM_GOLDCOIN = 502,
  ITEM_HANGANCHOR = 370,
  ITEM_HANGSTRAND = 369,
  ITEM_HOLDTHEIDOL = 359,
  ITEM_HONEY = 444,
  ITEM_HORIZONTALLASERBEAM = 452,
  ITEM_HOUYIBOW = 590,
  ITEM_HOVERPACK = 572,
  ITEM_HUNDUN_FIREBALL = 386,
  ITEM_ICECAGE = 427,
  ITEM_ICESPIRE = 488,
  ITEM_IDOL = 356,
  ITEM_INKSPIT = 390,
  ITEM_JETPACK = 567,
  ITEM_JETPACK_MECH = 568,
  ITEM_JUNGLE_SPEAR_COSMETIC = 361,
  ITEM_JUNGLE_SPEAR_DAMAGING = 362,
  ITEM_KEY = 399,
  ITEM_LAMASSU_LASER_SHOT = 380,
  ITEM_LAMP = 418,
  ITEM_LAMPFLAME = 419,
  ITEM_LANDMINE = 439,
  ITEM_LASERBEAM = 451,
  ITEM_LASERTRAP_SHOT = 382,
  ITEM_LAVAPOT = 485,
  ITEM_LEAF = 388,
  ITEM_LIGHT_ARROW = 374,
  ITEM_LION_SPEAR = 363,
  ITEM_LITWALLTORCH = 414,
  ITEM_LOCKEDCHEST = 400,
  ITEM_LOCKEDCHEST_KEY = 401,
  ITEM_MACHETE = 584,
  ITEM_MADAMETUSK_IDOL = 357,
  ITEM_MADAMETUSK_IDOLNOTE = 358,
  ITEM_MATTOCK = 582,
  ITEM_METAL_ARROW = 373,
  ITEM_METAL_SHIELD = 592,
  ITEM_MINIGAME_ASTEROID = 477,
  ITEM_MINIGAME_ASTEROID_BG = 476,
  ITEM_MINIGAME_BROKEN_ASTEROID = 478,
  ITEM_MINIGAME_SHIP = 474,
  ITEM_MINIGAME_UFO = 475,
  ITEM_NUGGET = 501,
  ITEM_NUGGET_SMALL = 506,
  ITEM_OLMECCANNON_BOMBS = 437,
  ITEM_OLMECCANNON_UFO = 438,
  ITEM_OLMECSHIP = 355,
  ITEM_PALACE_CANDLE = 489,
  ITEM_PALACE_CANDLE_FLAME = 468,
  ITEM_PARENTSSHIP = 354,
  ITEM_PASTEBOMB = 348,
  ITEM_PICKUP_12BAG = 515,
  ITEM_PICKUP_24BAG = 516,
  ITEM_PICKUP_ANKH = 539,
  ITEM_PICKUP_BOMBBAG = 513,
  ITEM_PICKUP_BOMBBOX = 514,
  ITEM_PICKUP_CLIMBINGGLOVES = 525,
  ITEM_PICKUP_CLOVER = 521,
  ITEM_PICKUP_COMPASS = 530,
  ITEM_PICKUP_COOKEDTURKEY = 518,
  ITEM_PICKUP_CROWN = 536,
  ITEM_PICKUP_EGGPLANTCROWN = 537,
  ITEM_PICKUP_ELIXIR = 520,
  ITEM_PICKUP_GIANTFOOD = 519,
  ITEM_PICKUP_HEDJET = 535,
  ITEM_PICKUP_JOURNAL = 510,
  ITEM_PICKUP_KAPALA = 534,
  ITEM_PICKUP_PARACHUTE = 532,
  ITEM_PICKUP_PASTE = 529,
  ITEM_PICKUP_PITCHERSMITT = 526,
  ITEM_PICKUP_PLAYERBAG = 543,
  ITEM_PICKUP_ROPE = 511,
  ITEM_PICKUP_ROPEPILE = 512,
  ITEM_PICKUP_ROYALJELLY = 517,
  ITEM_PICKUP_SEEDEDRUNSUNLOCKER = 522,
  ITEM_PICKUP_SKELETON_KEY = 541,
  ITEM_PICKUP_SPECIALCOMPASS = 531,
  ITEM_PICKUP_SPECTACLES = 524,
  ITEM_PICKUP_SPIKESHOES = 528,
  ITEM_PICKUP_SPRINGSHOES = 527,
  ITEM_PICKUP_TABLETOFDESTINY = 540,
  ITEM_PICKUP_TORNJOURNALPAGE = 509,
  ITEM_PICKUP_TRUECROWN = 538,
  ITEM_PICKUP_UDJATEYE = 533,
  ITEM_PLASMACANNON = 587,
  ITEM_PLASMACANNON_SHOT = 375,
  ITEM_PLAYERGHOST = 446,
  ITEM_PLAYERGHOST_BREATH = 447,
  ITEM_POT = 480,
  ITEM_POTOFGOLD = 457,
  ITEM_POWERPACK = 574,
  ITEM_POWERUP_ANKH = 560,
  ITEM_POWERUP_CLIMBING_GLOVES = 546,
  ITEM_POWERUP_COMPASS = 554,
  ITEM_POWERUP_CROWN = 557,
  ITEM_POWERUP_EGGPLANTCROWN = 558,
  ITEM_POWERUP_HEDJET = 556,
  ITEM_POWERUP_KAPALA = 549,
  ITEM_POWERUP_PARACHUTE = 553,
  ITEM_POWERUP_PASTE = 545,
  ITEM_POWERUP_PITCHERSMITT = 551,
  ITEM_POWERUP_SKELETON_KEY = 562,
  ITEM_POWERUP_SPECIALCOMPASS = 555,
  ITEM_POWERUP_SPECTACLES = 550,
  ITEM_POWERUP_SPIKE_SHOES = 547,
  ITEM_POWERUP_SPRING_SHOES = 548,
  ITEM_POWERUP_TABLETOFDESTINY = 561,
  ITEM_POWERUP_TRUECROWN = 559,
  ITEM_POWERUP_UDJATEYE = 552,
  ITEM_PRESENT = 422,
  ITEM_PUNISHBALL = 429,
  ITEM_PUNISHCHAIN = 430,
  ITEM_PURCHASABLE_CAPE = 566,
  ITEM_PURCHASABLE_HOVERPACK = 573,
  ITEM_PURCHASABLE_JETPACK = 569,
  ITEM_PURCHASABLE_POWERPACK = 575,
  ITEM_PURCHASABLE_TELEPORTER_BACKPACK = 571,
  ITEM_REDLANTERN = 420,
  ITEM_REDLANTERNFLAME = 421,
  ITEM_ROCK = 365,
  ITEM_ROPE = 349,
  ITEM_RUBBLE = 645,
  ITEM_RUBY = 500,
  ITEM_RUBY_SMALL = 505,
  ITEM_SAPPHIRE = 499,
  ITEM_SAPPHIRE_SMALL = 504,
  ITEM_SCEPTER = 588,
  ITEM_SCEPTER_ANUBISSHOT = 376,
  ITEM_SCEPTER_ANUBISSPECIALSHOT = 377,
  ITEM_SCEPTER_PLAYERSHOT = 378,
  ITEM_SCRAP = 486,
  ITEM_SHORTCUT_SIGN = 406,
  ITEM_SHOTGUN = 577,
  ITEM_SKULL = 482,
  ITEM_SKULLDROPTRAP = 461,
  ITEM_SKULLDROPTRAP_SKULL = 490,
  ITEM_SLIDINGWALL_CHAIN = 433,
  ITEM_SLIDINGWALL_CHAIN_LASTPIECE = 434,
  ITEM_SLIDINGWALL_SWITCH = 465,
  ITEM_SLIDINGWALL_SWITCH_REWARD = 466,
  ITEM_SNAP_TRAP = 469,
  ITEM_SORCERESS_DAGGER_SHOT = 381,
  ITEM_SPARK = 383,
  ITEM_SPEEDRUN_SIGN = 407,
  ITEM_SPIKES = 454,
  ITEM_STICKYTRAP_BALL = 460,
  ITEM_STICKYTRAP_LASTPIECE = 459,
  ITEM_STICKYTRAP_PIECE = 458,
  ITEM_TELEPORTER = 581,
  ITEM_TELEPORTER_BACKPACK = 570,
  ITEM_TELESCOPE = 411,
  ITEM_TENTACLE = 471,
  ITEM_TENTACLE_LAST_PIECE = 473,
  ITEM_TENTACLE_PIECE = 472,
  ITEM_TIAMAT_SHOT = 384,
  ITEM_TORCH = 416,
  ITEM_TORCHFLAME = 417,
  ITEM_TOTEM_SPEAR = 360,
  ITEM_TURKEY_NECK = 443,
  ITEM_TUTORIAL_MONSTER_SIGN = 404,
  ITEM_TV = 410,
  ITEM_UDJAT_SOCKET = 441,
  ITEM_UFO_LASER_SHOT = 379,
  ITEM_UNROLLED_ROPE = 351,
  ITEM_USHABTI = 442,
  ITEM_VAULTCHEST = 396,
  ITEM_VLADS_CAPE = 565,
  ITEM_WALLTORCH = 412,
  ITEM_WALLTORCHFLAME = 413,
  ITEM_WEB = 366,
  ITEM_WEBGUN = 576,
  ITEM_WEBSHOT = 367,
  ITEM_WHIP = 345,
  ITEM_WHIP_FLAME = 346,
  ITEM_WOODEN_ARROW = 371,
  ITEM_WOODEN_SHIELD = 591,
  JETPACK = 1170,
  JIANGSHI = 1171,
  JUMPDOG = 1172,
  JUNGLESPEARCOSMETIC = 1173,
  JUNGLETRAPTRIGGER = 1174,
  KAPALAPOWERUP = 1175,
  KINGU = 1176,
  LAHAMU = 1177,
  LAMASSU = 1178,
  LAMPFLAME = 1179,
  LANDMINE = 1180,
  LASERBEAM = 1181,
  LASERTRAP = 1182,
  LAVA = 1183,
  LAVAMANDER = 1184,
  LEAF = 1185,
  LEPRECHAUN = 1186,
  LIGHTARROW = 1187,
  LIGHTARROWPLATFORM = 1188,
  LIGHTEMITTER = 1189,
  LIGHTSHOT = 1190,
  LIMBANCHOR = 1191,
  LIQUID = 1192,
  LIQUIDSURFACE = 1193,
  LIQUID_COARSE_LAVA = 915,
  LIQUID_COARSE_WATER = 910,
  LIQUID_IMPOSTOR_LAKE = 911,
  LIQUID_IMPOSTOR_LAVA = 914,
  LIQUID_LAVA = 912,
  LIQUID_STAGNANT_LAVA = 913,
  LIQUID_WATER = 909,
  LOCKEDDOOR = 1194,
  LOGICALANCHOVYFLOCK = 1195,
  LOGICALCONVEYORBELTSOUND = 1196,
  LOGICALDOOR = 1197,
  LOGICALDRAIN = 1198,
  LOGICALLIQUIDSTREAMSOUND = 1199,
  LOGICALMINIGAME = 1200,
  LOGICALREGENERATINGBLOCK = 1201,
  LOGICALSOUND = 1202,
  LOGICALSTATICSOUND = 1203,
  LOGICALTRAPTRIGGER = 1204,
  LOGICAL_ANCHOVY_FLOCK = 873,
  LOGICAL_ARROW_TRAP_TRIGGER = 849,
  LOGICAL_BIGSPEAR_TRAP_TRIGGER = 884,
  LOGICAL_BLACKMARKET_DOOR = 848,
  LOGICAL_BOULDERSPAWNER = 880,
  LOGICAL_BURNING_ROPE_EFFECT = 863,
  LOGICAL_CAMERA_ANCHOR = 859,
  LOGICAL_CAMERA_FLASH = 865,
  LOGICAL_CINEMATIC_ANCHOR = 862,
  LOGICAL_CONSTELLATION = 844,
  LOGICAL_CONVEYORBELT_SOUND_SOURCE = 872,
  LOGICAL_CRUSH_TRAP_TRIGGER = 853,
  LOGICAL_CURSED_EFFECT = 858,
  LOGICAL_DM_ALIEN_BLAST = 889,
  LOGICAL_DM_CAMERA_ANCHOR = 887,
  LOGICAL_DM_CRATE_SPAWNING = 890,
  LOGICAL_DM_DEATH_MIST = 888,
  LOGICAL_DM_IDOL_SPAWNING = 891,
  LOGICAL_DM_SPAWN_POINT = 886,
  LOGICAL_DOOR = 846,
  LOGICAL_DOOR_AMBIENT_SOUND = 847,
  LOGICAL_DUSTWALL_APEP = 864,
  LOGICAL_DUSTWALL_SOUND_SOURCE = 877,
  LOGICAL_EGGPLANT_THROWER = 894,
  LOGICAL_FROST_BREATH = 893,
  LOGICAL_ICESLIDING_SOUND_SOURCE = 878,
  LOGICAL_JUNGLESPEAR_TRAP_TRIGGER = 851,
  LOGICAL_LAVA_DRAIN = 882,
  LOGICAL_LIMB_ANCHOR = 867,
  LOGICAL_MINIGAME = 895,
  LOGICAL_MUMMYFLIES_SOUND_SOURCE = 874,
  LOGICAL_ONFIRE_EFFECT = 856,
  LOGICAL_OUROBORO_CAMERA_ANCHOR = 860,
  LOGICAL_OUROBORO_CAMERA_ANCHOR_ZOOMIN = 861,
  LOGICAL_PIPE_TRAVELER_SOUND_SOURCE = 879,
  LOGICAL_PLATFORM_SPAWNER = 885,
  LOGICAL_POISONED_EFFECT = 857,
  LOGICAL_PORTAL = 868,
  LOGICAL_QUICKSAND_AMBIENT_SOUND_SOURCE = 875,
  LOGICAL_QUICKSAND_SOUND_SOURCE = 876,
  LOGICAL_REGENERATING_BLOCK = 883,
  LOGICAL_ROOM_LIGHT = 866,
  LOGICAL_SHOOTING_STARS_SPAWNER = 845,
  LOGICAL_SPIKEBALL_TRIGGER = 852,
  LOGICAL_SPLASH_BUBBLE_GENERATOR = 892,
  LOGICAL_STATICLAVA_SOUND_SOURCE = 869,
  LOGICAL_STREAMLAVA_SOUND_SOURCE = 870,
  LOGICAL_STREAMWATER_SOUND_SOURCE = 871,
  LOGICAL_TENTACLE_TRIGGER = 854,
  LOGICAL_TOTEM_TRAP_TRIGGER = 850,
  LOGICAL_WATER_DRAIN = 881,
  LOGICAL_WET_EFFECT = 855,
  MAGMAMAN = 1205,
  MAINEXIT = 1206,
  MANTRAP = 1207,
  MATTOCK = 1208,
  MECH = 1209,
  MEGAJELLYFISH = 1210,
  MIDBG = 810,
  MIDBG_BEEHIVE = 813,
  MIDBG_PALACE_STYLEDDECORATION = 812,
  MIDBG_PLATFORM_STRUCTURE = 814,
  MIDBG_STYLEDDECORATION = 811,
  MINIGAMEASTEROID = 1211,
  MINIGAMESHIP = 1212,
  MINIGAMESHIPOFFSET = 1213,
  MOLE = 1214,
  MONKEY = 1215,
  MONSTER = 1216,
  MONS_ALIEN = 267,
  MONS_ALIENQUEEN = 271,
  MONS_AMMIT = 280,
  MONS_ANUBIS = 253,
  MONS_ANUBIS2 = 259,
  MONS_APEP_BODY = 255,
  MONS_APEP_HEAD = 254,
  MONS_APEP_TAIL = 256,
  MONS_BAT = 224,
  MONS_BEE = 278,
  MONS_BODYGUARD = 306,
  MONS_CATMUMMY = 251,
  MONS_CAVEMAN = 225,
  MONS_CAVEMAN_BOSS = 232,
  MONS_CAVEMAN_SHOPKEEPER = 226,
  MONS_COBRA = 248,
  MONS_CRABMAN = 311,
  MONS_CRITTERANCHOVY = 335,
  MONS_CRITTERBUTTERFLY = 332,
  MONS_CRITTERCRAB = 336,
  MONS_CRITTERDRONE = 340,
  MONS_CRITTERDUNGBEETLE = 331,
  MONS_CRITTERFIREFLY = 339,
  MONS_CRITTERFISH = 334,
  MONS_CRITTERLOCUST = 337,
  MONS_CRITTERPENGUIN = 338,
  MONS_CRITTERSLIME = 341,
  MONS_CRITTERSNAIL = 333,
  MONS_CROCMAN = 247,
  MONS_EGGPLANT_MINISTER = 290,
  MONS_FEMALE_JIANGSHI = 261,
  MONS_FIREBUG = 241,
  MONS_FIREBUG_UNCHAINED = 242,
  MONS_FIREFROG = 284,
  MONS_FISH = 262,
  MONS_FROG = 283,
  MONS_GHIST = 314,
  MONS_GHIST_SHOPKEEPER = 315,
  MONS_GHOST = 317,
  MONS_GHOST_MEDIUM_HAPPY = 319,
  MONS_GHOST_MEDIUM_SAD = 318,
  MONS_GHOST_SMALL_ANGRY = 320,
  MONS_GHOST_SMALL_HAPPY = 323,
  MONS_GHOST_SMALL_SAD = 321,
  MONS_GHOST_SMALL_SURPRISED = 322,
  MONS_GIANTFISH = 265,
  MONS_GIANTFLY = 288,
  MONS_GIANTFROG = 285,
  MONS_GIANTSPIDER = 223,
  MONS_GOLDMONKEY = 309,
  MONS_GRUB = 286,
  MONS_HANGSPIDER = 222,
  MONS_HERMITCRAB = 264,
  MONS_HORNEDLIZARD = 230,
  MONS_HUNDUN = 292,
  MONS_HUNDUNS_SERVANT = 307,
  MONS_HUNDUN_BIRDHEAD = 293,
  MONS_HUNDUN_SNAKEHEAD = 294,
  MONS_IMP = 243,
  MONS_JIANGSHI = 260,
  MONS_JUMPDOG = 289,
  MONS_KINGU = 281,
  MONS_LAMASSU = 274,
  MONS_LAVAMANDER = 244,
  MONS_LEPRECHAUN = 310,
  MONS_MADAMETUSK = 305,
  MONS_MAGMAMAN = 239,
  MONS_MANTRAP = 233,
  MONS_MARLA_TUNNEL = 299,
  MONS_MEGAJELLYFISH = 312,
  MONS_MEGAJELLYFISH_BACKGROUND = 313,
  MONS_MERCHANT = 297,
  MONS_MOLE = 231,
  MONS_MONKEY = 238,
  MONS_MOSQUITO = 237,
  MONS_MUMMY = 249,
  MONS_NECROMANCER = 252,
  MONS_OCTOPUS = 263,
  MONS_OLD_HUNTER = 303,
  MONS_OLMITE_BODYARMORED = 276,
  MONS_OLMITE_HELMET = 275,
  MONS_OLMITE_NAKED = 277,
  MONS_OSIRIS_HAND = 258,
  MONS_OSIRIS_HEAD = 257,
  MONS_PET_CAT = 327,
  MONS_PET_DOG = 326,
  MONS_PET_HAMSTER = 328,
  MONS_PET_TUTORIAL = 219,
  MONS_PROTOSHOPKEEPER = 272,
  MONS_QUEENBEE = 279,
  MONS_REDSKELETON = 228,
  MONS_ROBOT = 240,
  MONS_SCARAB = 295,
  MONS_SCORPION = 229,
  MONS_SHOPKEEPER = 296,
  MONS_SHOPKEEPERCLONE = 273,
  MONS_SISTER_PARMESAN = 302,
  MONS_SISTER_PARSLEY = 300,
  MONS_SISTER_PARSNIP = 301,
  MONS_SKELETON = 227,
  MONS_SNAKE = 220,
  MONS_SORCERESS = 250,
  MONS_SPIDER = 221,
  MONS_STORAGEGUY = 308,
  MONS_TADPOLE = 287,
  MONS_THIEF = 304,
  MONS_TIAMAT = 282,
  MONS_TIKIMAN = 234,
  MONS_UFO = 266,
  MONS_VAMPIRE = 245,
  MONS_VLAD = 246,
  MONS_WITCHDOCTOR = 235,
  MONS_WITCHDOCTORSKULL = 236,
  MONS_YAMA = 291,
  MONS_YANG = 298,
  MONS_YETI = 268,
  MONS_YETIKING = 269,
  MONS_YETIQUEEN = 270,
  MOSQUITO = 1217,
  MOTHERSTATUE = 1218,
  MOUNT = 1219,
  MOUNT_AXOLOTL = 901,
  MOUNT_BASECAMP_CHAIR = 905,
  MOUNT_BASECAMP_COUCH = 906,
  MOUNT_MECH = 902,
  MOUNT_QILIN = 903,
  MOUNT_ROCKDOG = 900,
  MOUNT_TURKEY = 899,
  MOVABLE = 1220,
  MOVINGICON = 1221,
  MUMMY = 1222,
  MUMMYFLIESSOUND = 1223,
  NECROMANCER = 1224,
  NPC = 1225,
  OCTOPUS = 1226,
  OLMEC = 1227,
  OLMECCANNON = 1228,
  OLMECFLOATER = 1229,
  OLMITE = 1230,
  ONFIREEFFECT = 1231,
  ORB = 1232,
  OSIRISHAND = 1233,
  OSIRISHEAD = 1234,
  OUROBOROCAMERAANCHOR = 1235,
  OUROBOROCAMERAZOOMIN = 1236,
  PALACESIGN = 1237,
  PARACHUTEPOWERUP = 1238,
  PET = 1239,
  PIPE = 1240,
  PIPETRAVELERSOUND = 1241,
  PLAYER = 1242,
  PLAYERBAG = 1243,
  PLAYERGHOST = 1244,
  POISONEDEFFECT = 1245,
  POLEDECO = 1246,
  PORTAL = 1247,
  POT = 1248,
  POWERUP = 1249,
  POWERUPCAPABLE = 1250,
  PROTOSHOPKEEPER = 1251,
  PUNISHBALL = 1252,
  PUSHBLOCK = 1253,
  QILIN = 1254,
  QUICKSAND = 1255,
  QUICKSANDSOUND = 1256,
  QUILLBACK = 1257,
  REGENBLOCK = 1258,
  ROBOT = 1259,
  ROCKDOG = 1260,
  ROLLINGITEM = 1261,
  ROOMLIGHT = 1262,
  ROOMOWNER = 1263,
  RUBBLE = 1264,
  SCARAB = 1265,
  SCEPTERSHOT = 1266,
  SCORPION = 1267,
  SHIELD = 1268,
  SHOOTINGSTARSPAWNER = 1269,
  SHOPKEEPER = 1270,
  SKELETON = 1271,
  SKULLDROPTRAP = 1272,
  SLEEPBUBBLE = 1273,
  SLIDINGWALLCEILING = 1274,
  SNAPTRAP = 1275,
  SORCERESS = 1276,
  SOUNDSHOT = 1277,
  SPARK = 1278,
  SPARKTRAP = 1279,
  SPEAR = 1280,
  SPECIALSHOT = 1281,
  SPIDER = 1282,
  SPIKEBALLTRAP = 1283,
  SPLASHBUBBLEGENERATOR = 1284,
  STICKYTRAP = 1285,
  STRETCHCHAIN = 1286,
  SWITCH = 1287,
  TADPOLE = 1288,
  TELEPORTER = 1289,
  TELEPORTERBACKPACK = 1290,
  TELEPORTINGBORDER = 1291,
  TELESCOPE = 1292,
  TENTACLE = 1293,
  TENTACLEBOTTOM = 1294,
  TERRA = 1295,
  THINICE = 1296,
  TIAMAT = 1297,
  TIAMATSHOT = 1298,
  TIMEDFORCEFIELD = 1299,
  TIMEDPOWDERKEG = 1300,
  TIMEDSHOT = 1301,
  TORCH = 1302,
  TORCHFLAME = 1303,
  TOTEMTRAP = 1304,
  TRANSFERFLOOR = 1305,
  TRAPPART = 1306,
  TREASURE = 1307,
  TREASUREHOOK = 1308,
  TRUECROWNPOWERUP = 1310,
  TUN = 1311,
  TV = 1312,
  UDJATSOCKET = 1313,
  UFO = 1314,
  UNCHAINEDSPIKEBALL = 1315,
  USHABTI = 1316,
  VAMPIRE = 1317,
  VANHORSING = 1318,
  VLAD = 1319,
  VLADSCAPE = 1320,
  WADDLER = 1321,
  WALKINGMONSTER = 1322,
  WALLTORCH = 1323,
  WEBSHOT = 1324,
  WETEFFECT = 1325,
  WITCHDOCTOR = 1326,
  WITCHDOCTORSKULL = 1327,
  WOODENLOGTRAP = 1328,
  YAMA = 1329,
  YANG = 1330,
  YELLOWCAPE = 1331,
  YETIKING = 1332,
  YETIQUEEN = 1333
}
declare enum FLOOR_SIDE {
  BOTTOM = 1,
  BOTTOM_LEFT = 6,
  BOTTOM_RIGHT = 7,
  LEFT = 2,
  RIGHT = 3,
  TOP = 0,
  TOP_LEFT = 4,
  TOP_RIGHT = 5
}
declare enum GHOST_BEHAVIOR {
  MEDIUM_HAPPY = 1,
  MEDIUM_SAD = 0,
  SAD = 0,
  SMALL_ANGRY = 0,
  SMALL_HAPPY = 3,
  SMALL_SAD = 2,
  SMALL_SURPRISED = 1
}
declare enum HUNDUNFLAGS {
  BIRDHEADEMERGED = 2,
  BIRDHEADSHOTLAST = 16,
  SNAKEHEADEMERGED = 4,
  TOPLEVELARENAREACHED = 8,
  WILLMOVELEFT = 1
}
declare enum INPUTS {
  BOMB = 4,
  DOOR = 32,
  DOWN = 2048,
  JOURNAL = 128,
  JUMP = 1,
  LEFT = 256,
  MENU = 64,
  NONE = 0,
  RIGHT = 512,
  ROPE = 8,
  RUN = 16,
  UP = 1024,
  WHIP = 2
}
declare enum JOURNALUI_PAGE_SHOWN {
  BESTIARY = 5,
  DEATH = 10,
  ITEMS = 6,
  JOURNAL = 2,
  PEOPLE = 4,
  PLACES = 3,
  PLAYER_PROFILE = 1,
  RECAP = 9,
  STORY = 8,
  TRAPS = 7
}
declare enum JOURNALUI_STATE {
  FADING_IN = 1,
  FADING_OUT = 5,
  FLIPPING_LEFT = 3,
  FLIPPING_RIGHT = 4,
  INVISIBLE = 0,
  STABLE = 2
}
declare enum JOURNAL_PAGE_TYPE {
  BESTIARY = 4,
  DEATH_CAUSE = 9,
  DEATH_MENU = 10,
  FEATS = 8,
  ITEMS = 5,
  JOURNAL_MENU = 1,
  LAST_GAME_PLAYED = 13,
  PEOPLE = 3,
  PLACES = 2,
  PLAYER_PROFILE = 12,
  PROGRESS = 0,
  RECAP = 11,
  STORY = 7,
  TRAPS = 6
}
declare enum JUNGLESISTERS {
  GREAT_PARTY_HUH = 5,
  I_WISH_BROUGHT_A_JACKET = 6,
  PARMESAN_RESCUED = 3,
  PARSLEY_RESCUED = 1,
  PARSNIP_RESCUED = 2,
  WARNING_ONE_WAY_DOOR = 4
}
declare enum LAYER {
  BACK = 1,
  BOTH = -128,
  FRONT = 0,
  PLAYER = -1,
  PLAYER1 = -1,
  PLAYER2 = -2,
  PLAYER3 = -3,
  PLAYER4 = -4
}
declare enum LEVEL_CONFIG {
  ALTAR_ROOM_CHANCE = 5,
  BACKGROUND_CHANCE = 9,
  BACK_ROOM_CHANCE = 0,
  BACK_ROOM_HIDDEN_DOOR_CACHE_CHANCE = 3,
  BACK_ROOM_HIDDEN_DOOR_CHANCE = 2,
  BACK_ROOM_INTERCONNECTION_CHANCE = 1,
  FLAGGED_LIQUID_ROOMS = 16,
  FLOOR_BOTTOM_SPREAD_CHANCE = 8,
  FLOOR_SIDE_SPREAD_CHANCE = 7,
  GROUND_BACKGROUND_CHANCE = 10,
  IDOL_ROOM_CHANCE = 6,
  MACHINE_BIGROOM_CHANCE = 11,
  MACHINE_REWARDROOM_CHANCE = 14,
  MACHINE_TALLROOM_CHANCE = 13,
  MACHINE_WIDEROOM_CHANCE = 12,
  MAX_LIQUID_PARTICLES = 15,
  MOUNT_CHANCE = 4
}
declare enum MASK {
  ACTIVEFLOOR = 128,
  ANY = 0,
  BG = 1024,
  DECORATION = 512,
  EXPLOSION = 16,
  FLOOR = 256,
  FX = 64,
  ITEM = 8,
  LAVA = 16384,
  LIQUID = 24576,
  LOGICAL = 4096,
  MONSTER = 4,
  MOUNT = 2,
  PLAYER = 1,
  ROPE = 32,
  SHADOW = 2048,
  WATER = 8192
}
declare enum ON {
  ARENA_INTRO = 25,
  ARENA_MATCH = 26,
  ARENA_MENU = 21,
  ARENA_SCORE = 27,
  CAMP = 11,
  CHARACTER_SELECT = 9,
  CONSTELLATION = 19,
  CREDITS = 17,
  DEATH = 14,
  FRAME = 101,
  GAMEFRAME = 108,
  GUIFRAME = 100,
  INTRO = 1,
  LEADERBOARD = 7,
  LEVEL = 12,
  LOAD = 107,
  LOADING = 104,
  LOGO = 0,
  MENU = 4,
  ONLINE_LOADING = 28,
  ONLINE_LOBBY = 29,
  OPTIONS = 5,
  POST_LEVEL_GENERATION = 112,
  POST_ROOM_GENERATION = 111,
  PRE_GET_RANDOM_ROOM = 113,
  PRE_HANDLE_ROOM_TILES = 114,
  PRE_LEVEL_GENERATION = 110,
  PRE_LOAD_LEVEL_FILES = 109,
  PROLOGUE = 2,
  RECAP = 20,
  RENDER_POST_HUD = 118,
  RENDER_POST_JOURNAL_PAGE = 122,
  RENDER_POST_PAUSE_MENU = 120,
  RENDER_PRE_DRAW_DEPTH = 121,
  RENDER_PRE_HUD = 117,
  RENDER_PRE_PAUSE_MENU = 119,
  RESET = 105,
  SAVE = 106,
  SCORES = 18,
  SCREEN = 102,
  SCRIPT_DISABLE = 116,
  SCRIPT_ENABLE = 115,
  SEED_INPUT = 8,
  SPACESHIP = 15,
  SPEECH_BUBBLE = 123,
  START = 103,
  TEAM_SELECT = 10,
  TITLE = 3,
  TOAST = 124,
  TRANSITION = 13,
  WIN = 16
}
declare enum PARTICLEEMITTER {
  ACIDBUBBLEBURST_BUBBLES = 101,
  ACIDBUBBLEBURST_SPARKS = 102,
  ALIENBLAST_SHOCKWAVE = 179,
  ALTAR_MONSTER_APPEAR_POOF = 162,
  ALTAR_SKULL = 95,
  ALTAR_SMOKE = 96,
  ALTAR_SPARKS = 97,
  APEP_DUSTWALL = 158,
  ARROWPOOF = 67,
  AU_GOLD_SPARKLES = 74,
  AXOLOTL_BIGBUBBLEKILL = 186,
  AXOLOTL_SMALLBUBBLEKILL = 185,
  BLAST_PLASMAWARP_TRAIL = 137,
  BLOODTRAIL = 64,
  BLUESPARKS = 106,
  BOMB_SMOKE = 24,
  BOOMERANG_TRAIL = 172,
  BROKENORB_BLAST_LARGE = 204,
  BROKENORB_BLAST_MEDIUM = 203,
  BROKENORB_BLAST_SMALL = 202,
  BROKENORB_ORBS_LARGE = 210,
  BROKENORB_ORBS_MEDIUM = 209,
  BROKENORB_ORBS_SMALL = 208,
  BROKENORB_SHOCKWAVE_LARGE = 216,
  BROKENORB_SHOCKWAVE_MEDIUM = 215,
  BROKENORB_SHOCKWAVE_SMALL = 214,
  BROKENORB_SPARKS_LARGE = 213,
  BROKENORB_SPARKS_MEDIUM = 212,
  BROKENORB_SPARKS_SMALL = 211,
  BROKENORB_WARP_LARGE = 207,
  BROKENORB_WARP_MEDIUM = 206,
  BROKENORB_WARP_SMALL = 205,
  BULLETPOOF = 66,
  CAMERA_FRAME = 105,
  CAVEMAN_SPITTLE = 190,
  CHARSELECTOR_MIST = 197,
  CHARSELECTOR_TORCHFLAME_FLAMES = 8,
  CHARSELECTOR_TORCHFLAME_SMOKE = 7,
  CLOVER_WITHER_HUD = 78,
  COFFINDOORPOOF_SPARKS = 141,
  COG_SPARKLE = 80,
  COG_TUNNEL_FOG = 81,
  COLLECTPOOF_CLOUDS = 99,
  COLLECTPOOF_SPARKS = 98,
  CONTACTEFFECT_SPARKS = 131,
  COOKFIRE_FLAMES = 34,
  COOKFIRE_SMOKE = 33,
  COOKFIRE_WARP = 35,
  CRUSHTRAPPOOF = 58,
  CURSEDEFFECT_PIECES = 116,
  CURSEDEFFECT_PIECES_HUD = 117,
  CURSEDEFFECT_SKULL = 118,
  CURSEDPOT_BEHINDSMOKE = 47,
  CURSEDPOT_SMOKE = 46,
  DMCOUNTDOWN_BLAST = 21,
  DMCOUNTDOWN_DUST = 17,
  DMCOUNTDOWN_FLAMES = 20,
  DMCOUNTDOWN_FOG = 23,
  DMCOUNTDOWN_HIGH_TENSION_THUNDERBOLT = 22,
  DMCOUNTDOWN_RUBBLES = 15,
  DMCOUNTDOWN_RUBBLES_LARGE = 16,
  DMCOUNTDOWN_SPARKS = 18,
  DMCOUNTDOWN_SPARKS_SMALL = 19,
  DMPREMATCH_ASH_2P = 151,
  DMPREMATCH_ASH_3P = 152,
  DMPREMATCH_ASH_4P = 153,
  DMPREMATCH_SEPARATOR_GLOW_TRAIL = 201,
  DMRESULTS_ASH = 150,
  DMRESULT_BLOOD = 13,
  DMRESULT_MEATPIECES = 14,
  DM_DEATH_MIST = 178,
  DUSTWALL = 157,
  EGGSHIP_SMOKE = 43,
  ELIXIREFFECT_WORNOUT = 119,
  ENDINGTREASURE_DUST = 45,
  ENDING_TREASURE_HUNDUN_SPARKLE = 73,
  ENDING_TREASURE_TIAMAT_SPARKLE = 72,
  EVAPORATION_WATER = 144,
  EXPLOSION_SHOCKWAVE = 27,
  EXPLOSION_SMOKE = 25,
  EXPLOSION_SPARKS = 26,
  EXPLOSION_WHITESMOKE = 28,
  FIREBALL_DESTROYED = 42,
  FIREBALL_TRAIL = 41,
  FLAMETHROWER_SMOKE = 40,
  FLAMETRAIL_FLAMES = 82,
  FLAMETRAIL_SMOKE = 83,
  FLOORDUST = 48,
  FLOORFALLINGDUST_RUBBLE = 50,
  FLOORFALLINGDUST_SMOKE = 49,
  FLOORPOOF = 52,
  FLOORPOOF_BIG = 54,
  FLOORPOOF_SMALL = 53,
  FLOORPOOF_TRAIL = 59,
  FLOORPOOF_TRAIL_BIG = 60,
  FLYPOOF = 56,
  FROST_BREATH = 198,
  GASTRAIL = 142,
  GASTRAIL_BIG = 143,
  GHOST_FOG = 92,
  GHOST_MIST = 90,
  GHOST_WARP = 91,
  GREENBLOODTRAIL = 65,
  GRUB_TRAIL = 174,
  HIGH_TENSION_THUNDERBOLT = 191,
  HITEFFECT_HALO = 126,
  HITEFFECT_RING = 124,
  HITEFFECT_SMACK = 125,
  HITEFFECT_SPARKS = 120,
  HITEFFECT_SPARKS_BIG = 121,
  HITEFFECT_STARS_BIG = 123,
  HITEFFECT_STARS_SMALL = 122,
  HORIZONTALLASERBEAM_SPARKLES = 164,
  HORIZONTALLASERBEAM_SPARKLES_END = 166,
  HORIZONTALLASERBEAM_SPARKS = 168,
  ICECAGE_MIST = 156,
  ICECAVES_DIAMONDDUST = 154,
  ICEFLOOR_MIST = 155,
  ICESPIRETRAIL_SPARKLES = 108,
  INKSPIT_BUBBLEBURST = 104,
  INKSPIT_TRAIL = 103,
  ITEMDUST = 62,
  ITEM_CRUSHED_SPARKS = 79,
  JETPACK_LITTLEFLAME = 85,
  JETPACK_SMOKETRAIL = 84,
  KINGUDUST = 170,
  KINGUSLIDINGDUST = 171,
  LAMASSU_AIMING_SPARKLES = 195,
  LAMASSU_SHOT_SPARKLES = 194,
  LAMASSU_SHOT_WARP = 193,
  LARGEITEMDUST = 63,
  LASERBEAM_CONTACT = 169,
  LASERBEAM_SPARKLES = 163,
  LASERBEAM_SPARKLES_END = 165,
  LASERBEAM_SPARKS = 167,
  LAVAHEAT = 146,
  LAVAPOT_DRIP = 187,
  LEVEL_MIST = 192,
  LIONTRAP_SPARKLE = 77,
  MAGMAMANHEAT = 147,
  MAINMENU_CEILINGDUST_RUBBLE = 10,
  MAINMENU_CEILINGDUST_RUBBLE_SMALL = 12,
  MAINMENU_CEILINGDUST_SMOKE = 9,
  MAINMENU_CEILINGDUST_SMOKE_SMALL = 11,
  MERCHANT_APPEAR_POOF = 161,
  MINIGAME_ASTEROID_DUST = 217,
  MINIGAME_ASTEROID_DUST_SMALL = 218,
  MINIGAME_BROKENASTEROID_SMOKE = 220,
  MINIGAME_UFO_SMOKE = 219,
  MOLEFLOORPOOF = 61,
  MOUNT_TAMED = 159,
  MUSIC_NOTES = 199,
  NECROMANCER_SUMMON = 184,
  NOHITEFFECT_RING = 129,
  NOHITEFFECT_SMACK = 130,
  NOHITEFFECT_SPARKS = 127,
  NOHITEFFECT_STARS = 128,
  OLMECFLOORPOOF = 57,
  OLMECSHIP_HOLE_DUST = 44,
  ONFIREEFFECT_FLAME = 111,
  ONFIREEFFECT_SMOKE = 110,
  OUROBORO_EMBERS = 89,
  OUROBORO_FALLING_RUBBLE = 51,
  OUROBORO_MIST = 88,
  PETTING_PET = 160,
  PINKSPARKS = 107,
  PLAYERGHOST_FREEZESPARKLES = 93,
  POISONEDEFFECT_BUBBLES_BASE = 112,
  POISONEDEFFECT_BUBBLES_BURST = 113,
  POISONEDEFFECT_BUBBLES_HUD = 114,
  POISONEDEFFECT_SKULL = 115,
  PORTAL_DUST_FAST = 176,
  PORTAL_DUST_SLOW = 175,
  PORTAL_WARP = 177,
  PRIZEAPPEARING_CLOUDS = 100,
  SANDFLOORPOOF = 55,
  SCEPTERKILL_SPARKLES = 134,
  SCEPTERKILL_SPARKS = 135,
  SCEPTER_BLAST = 136,
  SHOTGUNBLAST_SMOKE = 86,
  SHOTGUNBLAST_SPARKS = 87,
  SMALLFLAME_FLAMES = 37,
  SMALLFLAME_SMOKE = 36,
  SMALLFLAME_WARP = 38,
  SPARKTRAP_TRAIL = 200,
  SPLASH_WATER = 145,
  TELEPORTEFFECT_GREENSPARKLES = 139,
  TELEPORTEFFECT_REDSPARKLES = 140,
  TELEPORTEFFECT_SPARKS = 138,
  TIAMAT_SCREAM_WARP = 196,
  TITLE_TORCHFLAME_ASH = 6,
  TITLE_TORCHFLAME_BACKFLAMES = 2,
  TITLE_TORCHFLAME_BACKFLAMES_ANIMATED = 4,
  TITLE_TORCHFLAME_FLAMES = 3,
  TITLE_TORCHFLAME_FLAMES_ANIMATED = 5,
  TITLE_TORCHFLAME_SMOKE = 1,
  TOMB_FOG = 94,
  TORCHFLAME_FLAMES = 31,
  TORCHFLAME_IGNITION_SPARK = 29,
  TORCHFLAME_SMOKE = 30,
  TORCHFLAME_WARP = 32,
  TREASURE_SPARKLE_HIGH = 70,
  TREASURE_SPARKLE_HUD = 71,
  TREASURE_SPARKLE_LOW = 68,
  TREASURE_SPARKLE_MEDIUM = 69,
  UFOLASERSHOTHITEFFECT_BIG = 132,
  UFOLASERSHOTHITEFFECT_SMALL = 133,
  USHABTI_GOLD = 75,
  USHABTI_JADE = 76,
  VOLCANO_ASH = 149,
  VOLCANO_FOG = 148,
  WATER_DROP_DESTROYED = 188,
  WATER_DROP_DESTROYED_UPWARDS = 189,
  WETEFFECT_DROPS = 109,
  WHIPFLAME_FLAMES = 39,
  WITCHDOCTORSKULL_TRAIL = 173,
  YETIKING_YELL_DUST = 181,
  YETIKING_YELL_FOG = 180,
  YETIKING_YELL_SPARKLES = 182,
  YETIQUEEN_LANDING_SNOWDUST = 183
}
declare enum PAUSEUI_VISIBILITY {
  INVISIBLE = 0,
  SLIDING_DOWN = 1,
  SLIDING_UP = 3,
  VISIBLE = 2
}
declare enum PRNG_CLASS {
  ENTITY_VARIATION = 3,
  EXTRA_SPAWNS = 5,
  LEVEL_DECO = 8,
  PARTICLES = 2,
  PROCEDURAL_SPAWNS = 0
}
declare enum PROCEDURAL_CHANCE {
  ADD_GOLD_BAR = 444,
  ADD_GOLD_BARS = 445,
  ARROWTRAP_CHANCE = 0,
  BAT = 224,
  BEE = 278,
  BEEHIVE_CHANCE = 16,
  BIGSPEARTRAP_CHANCE = 11,
  CAT = 251,
  CAVEMAN = 225,
  CHAIN_BLOCKS_CHANCE = 6,
  COBRA = 248,
  CRABMAN = 311,
  CRITTERANCHOVY = 335,
  CRITTERBUTTERFLY = 332,
  CRITTERCRAB = 336,
  CRITTERDRONE = 340,
  CRITTERDUNGBEETLE = 331,
  CRITTERFIREFLY = 339,
  CRITTERFISH = 334,
  CRITTERLOCUST = 337,
  CRITTERPENGUIN = 338,
  CRITTERSLIME = 341,
  CRITTERSNAIL = 333,
  CROCMAN = 247,
  CRUSHER_TRAP_CHANCE = 7,
  DIAMOND = 446,
  EGGSAC_CHANCE = 14,
  ELEVATOR = 443,
  EMERALD = 447,
  FEMALE_JIANGSHI = 261,
  FIREBUG = 241,
  FIREFROG = 284,
  FISH = 262,
  FROG = 283,
  GIANTFLY = 288,
  GIANTSPIDER = 223,
  HANGSPIDER = 222,
  HERMITCRAB = 264,
  HORNEDLIZARD = 230,
  IMP = 243,
  JIANGSHI = 260,
  JUNGLE_SPEAR_TRAP_CHANCE = 4,
  LANDMINE = 439,
  LASERTRAP_CHANCE = 9,
  LAVAMANDER = 244,
  LEPRECHAUN = 310,
  LEPRECHAUN_CHANCE = 17,
  LIONTRAP_CHANCE = 8,
  LITWALLTORCH = 442,
  MANTRAP = 233,
  MINISTER_CHANCE = 15,
  MOLE = 231,
  MONKEY = 238,
  MOSQUITO = 237,
  NECROMANCER = 252,
  OCTOPUS = 263,
  OLMITE = 276,
  PUSHBLOCK_CHANCE = 2,
  RED_SKELETON = 440,
  ROBOT = 240,
  RUBY = 449,
  SAPPHIRE = 448,
  SKULLDROP_CHANCE = 13,
  SNAKE = 220,
  SNAP_TRAP_CHANCE = 3,
  SORCERESS = 250,
  SPARKTRAP_CHANCE = 10,
  SPIDER = 221,
  SPIKE_BALL_CHANCE = 5,
  SPRINGTRAP = 73,
  STICKYTRAP_CHANCE = 12,
  TADPOLE = 287,
  TIKIMAN = 234,
  TOTEMTRAP_CHANCE = 1,
  UFO = 266,
  VAMPIRE = 245,
  WALLTORCH = 441,
  WITCHDOCTOR = 235,
  YETI = 268
}
declare enum REPEAT_TYPE {
  BACK_AND_FORTH = 2,
  LINEAR = 1,
  NO_REPEAT = 0
}
declare enum ROOM_TEMPLATE {
  ABZU_BACKDOOR = 132,
  ALTAR = 115,
  ANUBIS_ROOM = 38,
  APEP = 128,
  BEEHIVE = 31,
  BEEHIVE_ENTRANCE = 32,
  BLACKMARKET = 118,
  BLACKMARKET_COFFIN = 34,
  BLACKMARKET_ENTRANCE = 33,
  BLACKMARKET_EXIT = 35,
  BOSS_ARENA = 22,
  CACHE = 14,
  CAVEMANSHOP = 79,
  CAVEMANSHOP_LEFT = 80,
  CHALLANGE_ENTRANCE_BACKLAYER = 90,
  CHALLENGE_0_0 = 92,
  CHALLENGE_0_1 = 93,
  CHALLENGE_0_2 = 94,
  CHALLENGE_0_3 = 95,
  CHALLENGE_1_0 = 96,
  CHALLENGE_1_1 = 97,
  CHALLENGE_1_2 = 98,
  CHALLENGE_1_3 = 99,
  CHALLENGE_BOTTOM = 91,
  CHALLENGE_ENTRANCE = 81,
  CHALLENGE_ENTRANCE_LEFT = 82,
  CHALLENGE_SPECIAL = 100,
  CHUNK_AIR = 17,
  CHUNK_DOOR = 18,
  CHUNK_GROUND = 16,
  COFFIN_FROG = 111,
  COFFIN_PLAYER = 25,
  COFFIN_PLAYER_VERTICAL = 26,
  COFFIN_UNLOCKABLE = 27,
  COFFIN_UNLOCKABLE_LEFT = 28,
  COG_ALTAR_TOP = 125,
  CRASHEDSHIP_ENTRANCE = 61,
  CRASHEDSHIP_ENTRANCE_NOTOP = 62,
  CURIOSHOP = 77,
  CURIOSHOP_LEFT = 78,
  DICESHOP = 75,
  DICESHOP_LEFT = 76,
  EMPRESS_GRAVE = 136,
  EMPTY_BACKLAYER = 9,
  ENTRANCE = 5,
  ENTRANCE_DROP = 6,
  EXIT = 7,
  EXIT_NOTOP = 8,
  FEELING_FACTORY = 104,
  FEELING_PRISON = 105,
  FEELING_TOMB = 106,
  GHISTROOM = 15,
  GHISTSHOP = 135,
  GHISTSHOP_BACKLAYER = 87,
  IDOL = 116,
  IDOL_TOP = 117,
  LAKEOFFIRE_BACK_ENTRANCE = 36,
  LAKEOFFIRE_BACK_EXIT = 37,
  LAKE_EXIT = 129,
  LAKE_NORMAL = 130,
  LAKE_NOTOP = 131,
  MACHINE_BIGROOM_PATH = 102,
  MACHINE_BIGROOM_SIDE = 103,
  MACHINE_KEYROOM = 113,
  MACHINE_REWARDROOM = 114,
  MACHINE_TALLROOM_PATH = 109,
  MACHINE_TALLROOM_SIDE = 110,
  MACHINE_WIDEROOM_PATH = 107,
  MACHINE_WIDEROOM_SIDE = 108,
  MOAI = 39,
  MOTHERSHIP_COFFIN = 41,
  MOTHERSHIP_ENTRANCE = 40,
  MOTHERSHIP_EXIT = 127,
  MOTHERSHIP_ROOM = 125,
  MOTHERSTATUE_ROOM = 43,
  OLDHUNTER_CURSEDROOM = 139,
  OLDHUNTER_KEYROOM = 137,
  OLDHUNTER_REWARDROOM = 138,
  OLMECSHIP_ROOM = 42,
  PALACEOFPLEASURE_0_0 = 49,
  PALACEOFPLEASURE_0_1 = 50,
  PALACEOFPLEASURE_0_2 = 51,
  PALACEOFPLEASURE_1_0 = 52,
  PALACEOFPLEASURE_1_1 = 53,
  PALACEOFPLEASURE_1_2 = 54,
  PALACEOFPLEASURE_2_0 = 55,
  PALACEOFPLEASURE_2_1 = 56,
  PALACEOFPLEASURE_2_2 = 57,
  PALACEOFPLEASURE_3_0 = 58,
  PALACEOFPLEASURE_3_1 = 59,
  PALACEOFPLEASURE_3_2 = 60,
  PASSAGE_HORZ = 11,
  PASSAGE_TURN = 13,
  PASSAGE_VERT = 12,
  PATH_DROP = 2,
  PATH_DROP_NOTOP = 4,
  PATH_NORMAL = 1,
  PATH_NOTOP = 3,
  PEN_ROOM = 45,
  POSSE = 24,
  QUEST_THIEF1 = 140,
  QUEST_THIEF2 = 141,
  ROOM2 = 10,
  SETROOM0_0 = 142,
  SETROOM0_1 = 142,
  SETROOM0_2 = 142,
  SETROOM0_3 = 142,
  SETROOM0_4 = 142,
  SETROOM0_5 = 142,
  SETROOM0_6 = 142,
  SETROOM0_7 = 142,
  SETROOM1_0 = 142,
  SETROOM1_1 = 142,
  SETROOM1_2 = 142,
  SETROOM1_3 = 142,
  SETROOM1_4 = 142,
  SETROOM1_5 = 142,
  SETROOM1_6 = 142,
  SETROOM1_7 = 142,
  SETROOM2_0 = 142,
  SETROOM2_1 = 142,
  SETROOM2_2 = 142,
  SETROOM2_3 = 142,
  SETROOM2_4 = 142,
  SETROOM2_5 = 142,
  SETROOM2_6 = 142,
  SETROOM2_7 = 142,
  SETROOM3_0 = 142,
  SETROOM3_1 = 142,
  SETROOM3_2 = 142,
  SETROOM3_3 = 142,
  SETROOM3_4 = 142,
  SETROOM3_5 = 142,
  SETROOM3_6 = 142,
  SETROOM3_7 = 142,
  SETROOM4_0 = 142,
  SETROOM4_1 = 142,
  SETROOM4_2 = 142,
  SETROOM4_3 = 142,
  SETROOM4_4 = 142,
  SETROOM4_5 = 142,
  SETROOM4_6 = 142,
  SETROOM4_7 = 142,
  SETROOM5_0 = 142,
  SETROOM5_1 = 142,
  SETROOM5_2 = 142,
  SETROOM5_3 = 142,
  SETROOM5_4 = 142,
  SETROOM5_5 = 142,
  SETROOM5_6 = 142,
  SETROOM5_7 = 142,
  SETROOM6_0 = 142,
  SETROOM6_1 = 142,
  SETROOM6_2 = 142,
  SETROOM6_3 = 142,
  SETROOM6_4 = 142,
  SETROOM6_5 = 142,
  SETROOM6_6 = 142,
  SETROOM6_7 = 142,
  SETROOM7_0 = 142,
  SETROOM7_1 = 142,
  SETROOM7_2 = 142,
  SETROOM7_3 = 142,
  SETROOM7_4 = 142,
  SETROOM7_5 = 142,
  SETROOM7_6 = 142,
  SETROOM7_7 = 142,
  SETROOM8_0 = 142,
  SETROOM8_1 = 142,
  SETROOM8_2 = 142,
  SETROOM8_3 = 142,
  SETROOM8_4 = 142,
  SETROOM8_5 = 142,
  SETROOM8_6 = 142,
  SETROOM8_7 = 142,
  SETROOM9_0 = 142,
  SETROOM9_1 = 142,
  SETROOM9_2 = 142,
  SETROOM9_3 = 142,
  SETROOM9_4 = 142,
  SETROOM9_5 = 142,
  SETROOM9_6 = 142,
  SETROOM9_7 = 142,
  SETROOM10_0 = 142,
  SETROOM10_1 = 142,
  SETROOM10_2 = 142,
  SETROOM10_3 = 142,
  SETROOM10_4 = 142,
  SETROOM10_5 = 142,
  SETROOM10_6 = 142,
  SETROOM10_7 = 142,
  SETROOM11_0 = 142,
  SETROOM11_1 = 142,
  SETROOM11_2 = 142,
  SETROOM11_3 = 142,
  SETROOM11_4 = 142,
  SETROOM11_5 = 142,
  SETROOM11_6 = 142,
  SETROOM11_7 = 142,
  SETROOM12_0 = 142,
  SETROOM12_1 = 142,
  SETROOM12_2 = 142,
  SETROOM12_3 = 142,
  SETROOM12_4 = 142,
  SETROOM12_5 = 142,
  SETROOM12_6 = 142,
  SETROOM12_7 = 142,
  SETROOM13_0 = 142,
  SETROOM13_1 = 142,
  SETROOM13_2 = 142,
  SETROOM13_3 = 142,
  SETROOM13_4 = 142,
  SETROOM13_5 = 142,
  SETROOM13_6 = 142,
  SETROOM13_7 = 142,
  SETROOM14_0 = 142,
  SETROOM14_1 = 142,
  SETROOM14_2 = 142,
  SETROOM14_3 = 142,
  SETROOM14_4 = 142,
  SETROOM14_5 = 142,
  SETROOM14_6 = 142,
  SETROOM14_7 = 142,
  SHOP = 65,
  SHOP_ATTIC = 71,
  SHOP_ATTIC_LEFT = 72,
  SHOP_BASEMENT = 73,
  SHOP_BASEMENT_LEFT = 74,
  SHOP_ENTRANCE_DOWN = 69,
  SHOP_ENTRANCE_DOWN_LEFT = 70,
  SHOP_ENTRANCE_UP = 67,
  SHOP_ENTRANCE_UP_LEFT = 68,
  SHOP_JAIL_BACKLAYER = 44,
  SHOP_LEFT = 66,
  SIDE = 0,
  SISTERS_ROOM = 46,
  SOLID = 21,
  STORAGE_ROOM = 118,
  TUSKDICESHOP = 83,
  TUSKDICESHOP_LEFT = 84,
  TUSKFRONTDICESHOP = 47,
  TUSKFRONTDICESHOP_LEFT = 48,
  UDJATENTRANCE = 29,
  UDJATTOP = 30,
  USHABTI_ENTRANCE = 133,
  USHABTI_ROOM = 134,
  VAULT = 23,
  VLAD_BOTTOM_EXIT = 123,
  VLAD_BOTTOM_TUNNEL = 122,
  VLAD_DRILL = 120,
  VLAD_ENTRANCE = 121,
  VLAD_TUNNEL = 124,
  WADDLER = 86
}
declare enum ROOM_TEMPLATE_TYPE {
  ENTRANCE = 1,
  EXIT = 2,
  MACHINE_ROOM = 4,
  NONE = 0,
  SHOP = 3
}
declare enum SCREEN {
  ARENA_INTRO = 25,
  ARENA_ITEMS = 23,
  ARENA_LEVEL = 26,
  ARENA_MENU = 21,
  ARENA_SCORE = 27,
  ARENA_SELECT = 24,
  ARENA_STAGES = 22,
  CAMP = 11,
  CHARACTER_SELECT = 9,
  CONSTELLATION = 19,
  CREDITS = 17,
  DEATH = 14,
  INTRO = 1,
  LEADERBOARD = 7,
  LEVEL = 12,
  LOGO = 0,
  MENU = 4,
  ONLINE_LOADING = 28,
  ONLINE_LOBBY = 29,
  OPTIONS = 5,
  PLAYER_PROFILE = 6,
  PROLOGUE = 2,
  RECAP = 20,
  SCORES = 18,
  SEED_INPUT = 8,
  SPACESHIP = 15,
  TEAM_SELECT = 10,
  TITLE = 3,
  TRANSITION = 13,
  WIN = 16
}
declare enum SHOP_TYPE {
  CLOTHING_SHOP = 1,
  DICE_SHOP = 6,
  GENERAL_STORE = 0,
  HIRED_HAND_SHOP = 4,
  PET_SHOP = 5,
  SPECIALTY_SHOP = 3,
  TUSK_DICE_SHOP = 13,
  WEAPON_SHOP = 2
}
declare enum SOUND_LOOP_MODE {
  BIDIRECTIONAL = 2,
  LOOP = 1,
  OFF = 0
}
declare enum SOUND_TYPE {
  MUSIC = 1,
  SFX = 0
}
declare enum SPARROW {
  FINISHED_LEVEL_WITH_THIEF_STATUS = 2,
  FIRST_ENCOUNTER_ROPES_THROWN = 4,
  FIRST_HIDEOUT_SPAWNED_ROPE_THROW = 3,
  MEETING_AT_TUSK_BASEMENT = 8,
  QUEST_NOT_STARTED = 0,
  SECOND_ENCOUNTER_INTERACTED = 7,
  SECOND_HIDEOUT_SPAWNED_NEOBAB = 6,
  THIEF_STATUS = 1,
  TUSK_IDOL_STOLEN = 5
}
declare enum SPAWN_TYPE {
  ANY = 63,
  LEVEL_GEN = 15,
  LEVEL_GEN_FLOOR_SPREADING = 4,
  LEVEL_GEN_GENERAL = 8,
  LEVEL_GEN_PROCEDURAL = 2,
  LEVEL_GEN_TILE_CODE = 1,
  SCRIPT = 16,
  SYSTEMIC = 32
}
declare enum TEXTURE {
  DATA_TEXTURES_BASE_EGGSHIP2_0 = 108,
  DATA_TEXTURES_BASE_EGGSHIP2_1 = 109,
  DATA_TEXTURES_BASE_EGGSHIP2_2 = 110,
  DATA_TEXTURES_BASE_EGGSHIP3_0 = 111,
  DATA_TEXTURES_BASE_EGGSHIP3_1 = 112,
  DATA_TEXTURES_BASE_EGGSHIP3_2 = 113,
  DATA_TEXTURES_BASE_EGGSHIP3_3 = 114,
  DATA_TEXTURES_BASE_EGGSHIP_0 = 102,
  DATA_TEXTURES_BASE_EGGSHIP_1 = 103,
  DATA_TEXTURES_BASE_EGGSHIP_2 = 104,
  DATA_TEXTURES_BASE_EGGSHIP_3 = 105,
  DATA_TEXTURES_BASE_EGGSHIP_4 = 106,
  DATA_TEXTURES_BASE_EGGSHIP_5 = 107,
  DATA_TEXTURES_BASE_SKYNIGHT_0 = 115,
  DATA_TEXTURES_BASE_SURFACE2_0 = 118,
  DATA_TEXTURES_BASE_SURFACE_0 = 116,
  DATA_TEXTURES_BASE_SURFACE_1 = 117,
  DATA_TEXTURES_BG_BABYLON_0 = 195,
  DATA_TEXTURES_BG_BEEHIVE_0 = 226,
  DATA_TEXTURES_BG_CAVE_0 = 136,
  DATA_TEXTURES_BG_DUAT2_0 = 215,
  DATA_TEXTURES_BG_DUAT_0 = 211,
  DATA_TEXTURES_BG_DUAT_1 = 213,
  DATA_TEXTURES_BG_DUAT_2 = 214,
  DATA_TEXTURES_BG_EGGPLANT_0 = 223,
  DATA_TEXTURES_BG_GOLD_0 = 269,
  DATA_TEXTURES_BG_ICE_0 = 184,
  DATA_TEXTURES_BG_JUNGLE_0 = 143,
  DATA_TEXTURES_BG_MOTHERSHIP_0 = 272,
  DATA_TEXTURES_BG_STONE_0 = 158,
  DATA_TEXTURES_BG_SUNKEN_0 = 207,
  DATA_TEXTURES_BG_TEMPLE_0 = 165,
  DATA_TEXTURES_BG_TIDEPOOL_0 = 175,
  DATA_TEXTURES_BG_VLAD_0 = 260,
  DATA_TEXTURES_BG_VOLCANO_0 = 153,
  DATA_TEXTURES_BORDER_MAIN_0 = 283,
  DATA_TEXTURES_BORDER_MAIN_1 = 284,
  DATA_TEXTURES_CHAR_BLACK_0 = 288,
  DATA_TEXTURES_CHAR_BLUE_0 = 294,
  DATA_TEXTURES_CHAR_CERULEAN_0 = 293,
  DATA_TEXTURES_CHAR_CINNABAR_0 = 289,
  DATA_TEXTURES_CHAR_CYAN_0 = 287,
  DATA_TEXTURES_CHAR_EGGCHILD_0 = 306,
  DATA_TEXTURES_CHAR_GOLD_0 = 298,
  DATA_TEXTURES_CHAR_GRAY_0 = 302,
  DATA_TEXTURES_CHAR_GREEN_0 = 290,
  DATA_TEXTURES_CHAR_HIRED_0 = 305,
  DATA_TEXTURES_CHAR_IRIS_0 = 297,
  DATA_TEXTURES_CHAR_KHAKI_0 = 303,
  DATA_TEXTURES_CHAR_LEMON_0 = 296,
  DATA_TEXTURES_CHAR_LIME_0 = 295,
  DATA_TEXTURES_CHAR_MAGENTA_0 = 286,
  DATA_TEXTURES_CHAR_OLIVE_0 = 291,
  DATA_TEXTURES_CHAR_ORANGE_0 = 304,
  DATA_TEXTURES_CHAR_PINK_0 = 300,
  DATA_TEXTURES_CHAR_RED_0 = 299,
  DATA_TEXTURES_CHAR_VIOLET_0 = 301,
  DATA_TEXTURES_CHAR_WHITE_0 = 292,
  DATA_TEXTURES_CHAR_YELLOW_0 = 285,
  DATA_TEXTURES_COFFINS_0 = 385,
  DATA_TEXTURES_COFFINS_1 = 386,
  DATA_TEXTURES_COFFINS_2 = 387,
  DATA_TEXTURES_COFFINS_3 = 388,
  DATA_TEXTURES_COFFINS_4 = 389,
  DATA_TEXTURES_COFFINS_5 = 390,
  DATA_TEXTURES_CREDITS_0 = 391,
  DATA_TEXTURES_CREDITS_1 = 392,
  DATA_TEXTURES_DECO_BABYLON_0 = 191,
  DATA_TEXTURES_DECO_BABYLON_1 = 192,
  DATA_TEXTURES_DECO_BABYLON_2 = 193,
  DATA_TEXTURES_DECO_BASECAMP_0 = 119,
  DATA_TEXTURES_DECO_BASECAMP_1 = 120,
  DATA_TEXTURES_DECO_BASECAMP_2 = 121,
  DATA_TEXTURES_DECO_BASECAMP_3 = 122,
  DATA_TEXTURES_DECO_BASECAMP_4 = 123,
  DATA_TEXTURES_DECO_BASECAMP_5 = 124,
  DATA_TEXTURES_DECO_BASECAMP_6 = 125,
  DATA_TEXTURES_DECO_BASECAMP_7 = 126,
  DATA_TEXTURES_DECO_CAVE_0 = 134,
  DATA_TEXTURES_DECO_CAVE_1 = 135,
  DATA_TEXTURES_DECO_COSMIC_0 = 228,
  DATA_TEXTURES_DECO_COSMIC_1 = 229,
  DATA_TEXTURES_DECO_COSMIC_2 = 230,
  DATA_TEXTURES_DECO_EGGPLANT_0 = 202,
  DATA_TEXTURES_DECO_EGGPLANT_1 = 222,
  DATA_TEXTURES_DECO_EXTRA_0 = 279,
  DATA_TEXTURES_DECO_EXTRA_1 = 280,
  DATA_TEXTURES_DECO_GOLD_0 = 266,
  DATA_TEXTURES_DECO_GOLD_1 = 267,
  DATA_TEXTURES_DECO_GOLD_2 = 268,
  DATA_TEXTURES_DECO_ICE_0 = 180,
  DATA_TEXTURES_DECO_ICE_1 = 181,
  DATA_TEXTURES_DECO_ICE_2 = 182,
  DATA_TEXTURES_DECO_ICE_3 = 183,
  DATA_TEXTURES_DECO_JUNGLE_0 = 141,
  DATA_TEXTURES_DECO_JUNGLE_1 = 142,
  DATA_TEXTURES_DECO_JUNGLE_2 = 156,
  DATA_TEXTURES_DECO_SUNKEN_0 = 203,
  DATA_TEXTURES_DECO_SUNKEN_1 = 204,
  DATA_TEXTURES_DECO_SUNKEN_2 = 205,
  DATA_TEXTURES_DECO_SUNKEN_3 = 206,
  DATA_TEXTURES_DECO_TEMPLE_0 = 163,
  DATA_TEXTURES_DECO_TEMPLE_1 = 164,
  DATA_TEXTURES_DECO_TEMPLE_2 = 216,
  DATA_TEXTURES_DECO_TIDEPOOL_0 = 173,
  DATA_TEXTURES_DECO_TIDEPOOL_1 = 174,
  DATA_TEXTURES_DECO_TUTORIAL_0 = 127,
  DATA_TEXTURES_DECO_TUTORIAL_1 = 128,
  DATA_TEXTURES_DECO_VOLCANO_0 = 149,
  DATA_TEXTURES_DECO_VOLCANO_1 = 150,
  DATA_TEXTURES_DECO_VOLCANO_2 = 151,
  DATA_TEXTURES_DECO_VOLCANO_3 = 152,
  DATA_TEXTURES_FLOORMISC_0 = 281,
  DATA_TEXTURES_FLOORMISC_1 = 282,
  DATA_TEXTURES_FLOORSTYLED_BABYLON_0 = 246,
  DATA_TEXTURES_FLOORSTYLED_BABYLON_1 = 247,
  DATA_TEXTURES_FLOORSTYLED_BABYLON_2 = 248,
  DATA_TEXTURES_FLOORSTYLED_BABYLON_3 = 249,
  DATA_TEXTURES_FLOORSTYLED_BABYLON_4 = 250,
  DATA_TEXTURES_FLOORSTYLED_BEEHIVE_0 = 225,
  DATA_TEXTURES_FLOORSTYLED_BEEHIVE_1 = 227,
  DATA_TEXTURES_FLOORSTYLED_DUAT_0 = 212,
  DATA_TEXTURES_FLOORSTYLED_DUAT_1 = 273,
  DATA_TEXTURES_FLOORSTYLED_GOLD_0 = 261,
  DATA_TEXTURES_FLOORSTYLED_GOLD_1 = 262,
  DATA_TEXTURES_FLOORSTYLED_GOLD_2 = 263,
  DATA_TEXTURES_FLOORSTYLED_GOLD_3 = 264,
  DATA_TEXTURES_FLOORSTYLED_GOLD_4 = 270,
  DATA_TEXTURES_FLOORSTYLED_GOLD_NORMAL_0 = 265,
  DATA_TEXTURES_FLOORSTYLED_GUTS_0 = 278,
  DATA_TEXTURES_FLOORSTYLED_MOTHERSHIP_0 = 271,
  DATA_TEXTURES_FLOORSTYLED_PAGODA_0 = 243,
  DATA_TEXTURES_FLOORSTYLED_PAGODA_1 = 244,
  DATA_TEXTURES_FLOORSTYLED_PAGODA_2 = 245,
  DATA_TEXTURES_FLOORSTYLED_PALACE_0 = 274,
  DATA_TEXTURES_FLOORSTYLED_PALACE_1 = 275,
  DATA_TEXTURES_FLOORSTYLED_PALACE_2 = 276,
  DATA_TEXTURES_FLOORSTYLED_PALACE_3 = 277,
  DATA_TEXTURES_FLOORSTYLED_STONE_0 = 157,
  DATA_TEXTURES_FLOORSTYLED_STONE_1 = 159,
  DATA_TEXTURES_FLOORSTYLED_STONE_2 = 236,
  DATA_TEXTURES_FLOORSTYLED_STONE_3 = 237,
  DATA_TEXTURES_FLOORSTYLED_STONE_4 = 238,
  DATA_TEXTURES_FLOORSTYLED_STONE_5 = 239,
  DATA_TEXTURES_FLOORSTYLED_SUNKEN_0 = 251,
  DATA_TEXTURES_FLOORSTYLED_SUNKEN_1 = 252,
  DATA_TEXTURES_FLOORSTYLED_SUNKEN_2 = 253,
  DATA_TEXTURES_FLOORSTYLED_SUNKEN_3 = 254,
  DATA_TEXTURES_FLOORSTYLED_TEMPLE_0 = 240,
  DATA_TEXTURES_FLOORSTYLED_TEMPLE_1 = 241,
  DATA_TEXTURES_FLOORSTYLED_TEMPLE_2 = 242,
  DATA_TEXTURES_FLOORSTYLED_VLAD_0 = 255,
  DATA_TEXTURES_FLOORSTYLED_VLAD_1 = 256,
  DATA_TEXTURES_FLOORSTYLED_VLAD_2 = 257,
  DATA_TEXTURES_FLOORSTYLED_VLAD_3 = 258,
  DATA_TEXTURES_FLOORSTYLED_VLAD_4 = 259,
  DATA_TEXTURES_FLOORSTYLED_WOOD_0 = 231,
  DATA_TEXTURES_FLOORSTYLED_WOOD_1 = 232,
  DATA_TEXTURES_FLOORSTYLED_WOOD_2 = 233,
  DATA_TEXTURES_FLOORSTYLED_WOOD_3 = 234,
  DATA_TEXTURES_FLOORSTYLED_WOOD_4 = 235,
  DATA_TEXTURES_FLOOR_BABYLON_0 = 187,
  DATA_TEXTURES_FLOOR_BABYLON_1 = 188,
  DATA_TEXTURES_FLOOR_BABYLON_2 = 189,
  DATA_TEXTURES_FLOOR_BABYLON_3 = 190,
  DATA_TEXTURES_FLOOR_BABYLON_4 = 196,
  DATA_TEXTURES_FLOOR_CAVE_0 = 129,
  DATA_TEXTURES_FLOOR_CAVE_1 = 130,
  DATA_TEXTURES_FLOOR_CAVE_2 = 131,
  DATA_TEXTURES_FLOOR_CAVE_3 = 132,
  DATA_TEXTURES_FLOOR_CAVE_4 = 133,
  DATA_TEXTURES_FLOOR_CAVE_5 = 137,
  DATA_TEXTURES_FLOOR_EGGPLANT_0 = 217,
  DATA_TEXTURES_FLOOR_EGGPLANT_1 = 218,
  DATA_TEXTURES_FLOOR_EGGPLANT_2 = 219,
  DATA_TEXTURES_FLOOR_EGGPLANT_3 = 220,
  DATA_TEXTURES_FLOOR_EGGPLANT_4 = 221,
  DATA_TEXTURES_FLOOR_EGGPLANT_5 = 224,
  DATA_TEXTURES_FLOOR_ICE_0 = 177,
  DATA_TEXTURES_FLOOR_ICE_1 = 178,
  DATA_TEXTURES_FLOOR_ICE_2 = 179,
  DATA_TEXTURES_FLOOR_ICE_3 = 185,
  DATA_TEXTURES_FLOOR_ICE_4 = 186,
  DATA_TEXTURES_FLOOR_JUNGLE_0 = 138,
  DATA_TEXTURES_FLOOR_JUNGLE_1 = 139,
  DATA_TEXTURES_FLOOR_JUNGLE_2 = 140,
  DATA_TEXTURES_FLOOR_JUNGLE_3 = 144,
  DATA_TEXTURES_FLOOR_SUNKEN_0 = 197,
  DATA_TEXTURES_FLOOR_SUNKEN_1 = 198,
  DATA_TEXTURES_FLOOR_SUNKEN_2 = 199,
  DATA_TEXTURES_FLOOR_SUNKEN_3 = 200,
  DATA_TEXTURES_FLOOR_SUNKEN_4 = 201,
  DATA_TEXTURES_FLOOR_SUNKEN_5 = 208,
  DATA_TEXTURES_FLOOR_SUNKEN_6 = 209,
  DATA_TEXTURES_FLOOR_SUNKEN_7 = 210,
  DATA_TEXTURES_FLOOR_SURFACE_0 = 101,
  DATA_TEXTURES_FLOOR_TEMPLE_0 = 160,
  DATA_TEXTURES_FLOOR_TEMPLE_1 = 161,
  DATA_TEXTURES_FLOOR_TEMPLE_2 = 162,
  DATA_TEXTURES_FLOOR_TEMPLE_3 = 166,
  DATA_TEXTURES_FLOOR_TEMPLE_4 = 167,
  DATA_TEXTURES_FLOOR_TIDEPOOL_0 = 168,
  DATA_TEXTURES_FLOOR_TIDEPOOL_1 = 169,
  DATA_TEXTURES_FLOOR_TIDEPOOL_2 = 170,
  DATA_TEXTURES_FLOOR_TIDEPOOL_3 = 171,
  DATA_TEXTURES_FLOOR_TIDEPOOL_4 = 172,
  DATA_TEXTURES_FLOOR_TIDEPOOL_5 = 176,
  DATA_TEXTURES_FLOOR_VOLCANO_0 = 145,
  DATA_TEXTURES_FLOOR_VOLCANO_1 = 146,
  DATA_TEXTURES_FLOOR_VOLCANO_2 = 147,
  DATA_TEXTURES_FLOOR_VOLCANO_3 = 148,
  DATA_TEXTURES_FLOOR_VOLCANO_4 = 154,
  DATA_TEXTURES_FLOOR_VOLCANO_5 = 155,
  DATA_TEXTURES_FONTDEBUG_0 = 20,
  DATA_TEXTURES_FONTFIRASANS_0 = 7,
  DATA_TEXTURES_FONTMONO_0 = 19,
  DATA_TEXTURES_FONTNEWRODIN_0 = 8,
  DATA_TEXTURES_FONTNOTOSANSBOLDCS_0_0 = 12,
  DATA_TEXTURES_FONTNOTOSANSBOLDCT_0_0 = 14,
  DATA_TEXTURES_FONTNOTOSANSBOLDKO_0_0 = 16,
  DATA_TEXTURES_FONTNOTOSANSBOLDNICKNAMES_0_0 = 18,
  DATA_TEXTURES_FONTNOTOSANSBOLDRU_0_0 = 10,
  DATA_TEXTURES_FONTNOTOSANSITALICCS_0_0 = 13,
  DATA_TEXTURES_FONTNOTOSANSITALICCT_0_0 = 15,
  DATA_TEXTURES_FONTNOTOSANSITALICKO_0_0 = 17,
  DATA_TEXTURES_FONTNOTOSANSITALICRU_0_0 = 11,
  DATA_TEXTURES_FONTRODINCATTLEYA_0 = 9,
  DATA_TEXTURES_FONTYORKTEN_0 = 6,
  DATA_TEXTURES_FX_ANKH_0 = 382,
  DATA_TEXTURES_FX_ANKH_1 = 383,
  DATA_TEXTURES_FX_BIG_0 = 380,
  DATA_TEXTURES_FX_EXPLOSION_0 = 375,
  DATA_TEXTURES_FX_RUBBLE_0 = 381,
  DATA_TEXTURES_FX_SMALL2_0 = 377,
  DATA_TEXTURES_FX_SMALL3_0 = 378,
  DATA_TEXTURES_FX_SMALL3_1 = 379,
  DATA_TEXTURES_FX_SMALL_0 = 376,
  DATA_TEXTURES_HUD_0 = 65,
  DATA_TEXTURES_HUD_1 = 66,
  DATA_TEXTURES_HUD_2 = 67,
  DATA_TEXTURES_HUD_CONTROLLER_BUTTONS_0 = 69,
  DATA_TEXTURES_HUD_CONTROLLER_BUTTONS_1 = 70,
  DATA_TEXTURES_HUD_CONTROLLER_BUTTONS_2 = 71,
  DATA_TEXTURES_HUD_CONTROLLER_BUTTONS_3 = 72,
  DATA_TEXTURES_HUD_CONTROLLER_BUTTONS_4 = 73,
  DATA_TEXTURES_HUD_TEXT_0 = 68,
  DATA_TEXTURES_ITEMS_0 = 373,
  DATA_TEXTURES_ITEMS_USHABTI_0 = 194,
  DATA_TEXTURES_JOURNAL_BACK_0 = 76,
  DATA_TEXTURES_JOURNAL_ELEMENTS_0 = 93,
  DATA_TEXTURES_JOURNAL_ELEMENTS_1 = 94,
  DATA_TEXTURES_JOURNAL_ENTRY_BG_0 = 86,
  DATA_TEXTURES_JOURNAL_ENTRY_ITEMS_0 = 92,
  DATA_TEXTURES_JOURNAL_ENTRY_MONS_0 = 88,
  DATA_TEXTURES_JOURNAL_ENTRY_MONS_BIG_0 = 89,
  DATA_TEXTURES_JOURNAL_ENTRY_PEOPLE_0 = 90,
  DATA_TEXTURES_JOURNAL_ENTRY_PEOPLE_1 = 91,
  DATA_TEXTURES_JOURNAL_ENTRY_PLACE_0 = 87,
  DATA_TEXTURES_JOURNAL_ENTRY_TRAPS_0 = 95,
  DATA_TEXTURES_JOURNAL_ENTRY_TRAPS_1 = 96,
  DATA_TEXTURES_JOURNAL_ENTRY_TRAPS_2 = 97,
  DATA_TEXTURES_JOURNAL_ENTRY_TRAPS_3 = 100,
  DATA_TEXTURES_JOURNAL_PAGEFLIP_0 = 77,
  DATA_TEXTURES_JOURNAL_PAGETORN_0 = 75,
  DATA_TEXTURES_JOURNAL_SELECT_0 = 78,
  DATA_TEXTURES_JOURNAL_STICKERS_0 = 79,
  DATA_TEXTURES_JOURNAL_STICKERS_1 = 80,
  DATA_TEXTURES_JOURNAL_STICKERS_2 = 81,
  DATA_TEXTURES_JOURNAL_STORY_0 = 98,
  DATA_TEXTURES_JOURNAL_TOP_ENTRY_0 = 83,
  DATA_TEXTURES_JOURNAL_TOP_GAMEOVER_0 = 84,
  DATA_TEXTURES_JOURNAL_TOP_MAIN_0 = 82,
  DATA_TEXTURES_JOURNAL_TOP_PROFILE_0 = 85,
  DATA_TEXTURES_JOURNAL_TROPHIES_0 = 99,
  DATA_TEXTURES_KEYBOARD_BUTTONS_0 = 74,
  DATA_TEXTURES_LOADING_0 = 1,
  DATA_TEXTURES_LUT_BACKLAYER_0 = 396,
  DATA_TEXTURES_LUT_BLACKMARKET_0 = 397,
  DATA_TEXTURES_LUT_ICECAVES_0 = 399,
  DATA_TEXTURES_LUT_ORIGINAL_0 = 395,
  DATA_TEXTURES_LUT_VLAD_0 = 398,
  DATA_TEXTURES_MAIN_BODY_0 = 23,
  DATA_TEXTURES_MAIN_DIRT_0 = 24,
  DATA_TEXTURES_MAIN_DOORBACK_0 = 26,
  DATA_TEXTURES_MAIN_DOORFRAME_0 = 27,
  DATA_TEXTURES_MAIN_DOOR_0 = 25,
  DATA_TEXTURES_MAIN_FORE1_0 = 28,
  DATA_TEXTURES_MAIN_FORE2_0 = 29,
  DATA_TEXTURES_MAIN_HEAD_0 = 30,
  DATA_TEXTURES_MENU_BASIC_0 = 41,
  DATA_TEXTURES_MENU_BASIC_1 = 42,
  DATA_TEXTURES_MENU_BASIC_2 = 43,
  DATA_TEXTURES_MENU_BASIC_3 = 44,
  DATA_TEXTURES_MENU_BASIC_4 = 45,
  DATA_TEXTURES_MENU_BASIC_5 = 46,
  DATA_TEXTURES_MENU_BASIC_6 = 47,
  DATA_TEXTURES_MENU_BRICK1_0 = 39,
  DATA_TEXTURES_MENU_BRICK2_0 = 40,
  DATA_TEXTURES_MENU_CAVE1_0 = 37,
  DATA_TEXTURES_MENU_CAVE2_0 = 38,
  DATA_TEXTURES_MENU_CHARDOOR_0 = 35,
  DATA_TEXTURES_MENU_CHARSEL_0 = 34,
  DATA_TEXTURES_MENU_DEATHMATCH2_0 = 54,
  DATA_TEXTURES_MENU_DEATHMATCH2_1 = 55,
  DATA_TEXTURES_MENU_DEATHMATCH3_0 = 56,
  DATA_TEXTURES_MENU_DEATHMATCH4_0 = 57,
  DATA_TEXTURES_MENU_DEATHMATCH5_0 = 58,
  DATA_TEXTURES_MENU_DEATHMATCH5_1 = 59,
  DATA_TEXTURES_MENU_DEATHMATCH5_2 = 60,
  DATA_TEXTURES_MENU_DEATHMATCH5_3 = 61,
  DATA_TEXTURES_MENU_DEATHMATCH6_0 = 62,
  DATA_TEXTURES_MENU_DEATHMATCH_0 = 53,
  DATA_TEXTURES_MENU_DISP_0 = 31,
  DATA_TEXTURES_MENU_DISP_1 = 32,
  DATA_TEXTURES_MENU_DISP_2 = 33,
  DATA_TEXTURES_MENU_GENERIC_0 = 36,
  DATA_TEXTURES_MENU_HEADER_0 = 48,
  DATA_TEXTURES_MENU_LEADER_0 = 49,
  DATA_TEXTURES_MENU_LEADER_1 = 50,
  DATA_TEXTURES_MENU_LEADER_2 = 51,
  DATA_TEXTURES_MENU_LEADER_3 = 52,
  DATA_TEXTURES_MENU_ONLINE_0 = 63,
  DATA_TEXTURES_MENU_TITLEGAL_0 = 22,
  DATA_TEXTURES_MENU_TITLE_0 = 21,
  DATA_TEXTURES_MENU_TUNNEL_0 = 64,
  DATA_TEXTURES_MONSTERS01_0 = 311,
  DATA_TEXTURES_MONSTERS02_0 = 312,
  DATA_TEXTURES_MONSTERS02_1 = 371,
  DATA_TEXTURES_MONSTERS02_2 = 372,
  DATA_TEXTURES_MONSTERS03_0 = 313,
  DATA_TEXTURES_MONSTERS03_1 = 314,
  DATA_TEXTURES_MONSTERSBASIC01_0 = 308,
  DATA_TEXTURES_MONSTERSBASIC02_0 = 309,
  DATA_TEXTURES_MONSTERSBASIC03_0 = 310,
  DATA_TEXTURES_MONSTERSBIG01_0 = 315,
  DATA_TEXTURES_MONSTERSBIG02_0 = 316,
  DATA_TEXTURES_MONSTERSBIG02_1 = 317,
  DATA_TEXTURES_MONSTERSBIG02_2 = 318,
  DATA_TEXTURES_MONSTERSBIG03_0 = 319,
  DATA_TEXTURES_MONSTERSBIG04_0 = 320,
  DATA_TEXTURES_MONSTERSBIG04_1 = 321,
  DATA_TEXTURES_MONSTERSBIG04_2 = 322,
  DATA_TEXTURES_MONSTERSBIG04_3 = 370,
  DATA_TEXTURES_MONSTERSBIG05_0 = 323,
  DATA_TEXTURES_MONSTERSBIG05_1 = 324,
  DATA_TEXTURES_MONSTERSBIG05_2 = 326,
  DATA_TEXTURES_MONSTERSBIG05_3 = 327,
  DATA_TEXTURES_MONSTERSBIG05_4 = 328,
  DATA_TEXTURES_MONSTERSBIG06_0 = 329,
  DATA_TEXTURES_MONSTERSBIG06_1 = 330,
  DATA_TEXTURES_MONSTERSBIG06_2 = 331,
  DATA_TEXTURES_MONSTERSBIG06_3 = 332,
  DATA_TEXTURES_MONSTERSBIG06_4 = 333,
  DATA_TEXTURES_MONSTERSBIG06_5 = 334,
  DATA_TEXTURES_MONSTERSBIG06_6 = 335,
  DATA_TEXTURES_MONSTERSBIG06_7 = 336,
  DATA_TEXTURES_MONSTERSBIG06_8 = 337,
  DATA_TEXTURES_MONSTERSBIG06_9 = 338,
  DATA_TEXTURES_MONSTERSBIG06_10 = 339,
  DATA_TEXTURES_MONSTERS_GHOST_0 = 340,
  DATA_TEXTURES_MONSTERS_GHOST_1 = 341,
  DATA_TEXTURES_MONSTERS_HUNDUN_0 = 364,
  DATA_TEXTURES_MONSTERS_HUNDUN_1 = 365,
  DATA_TEXTURES_MONSTERS_HUNDUN_2 = 366,
  DATA_TEXTURES_MONSTERS_HUNDUN_3 = 367,
  DATA_TEXTURES_MONSTERS_HUNDUN_4 = 368,
  DATA_TEXTURES_MONSTERS_HUNDUN_5 = 369,
  DATA_TEXTURES_MONSTERS_OLMEC_0 = 342,
  DATA_TEXTURES_MONSTERS_OLMEC_1 = 343,
  DATA_TEXTURES_MONSTERS_OLMEC_2 = 344,
  DATA_TEXTURES_MONSTERS_OLMEC_3 = 345,
  DATA_TEXTURES_MONSTERS_OLMEC_4 = 346,
  DATA_TEXTURES_MONSTERS_OSIRIS_0 = 347,
  DATA_TEXTURES_MONSTERS_OSIRIS_1 = 348,
  DATA_TEXTURES_MONSTERS_OSIRIS_2 = 349,
  DATA_TEXTURES_MONSTERS_OSIRIS_3 = 350,
  DATA_TEXTURES_MONSTERS_OSIRIS_4 = 351,
  DATA_TEXTURES_MONSTERS_PETS_0 = 307,
  DATA_TEXTURES_MONSTERS_TIAMAT_0 = 352,
  DATA_TEXTURES_MONSTERS_TIAMAT_1 = 353,
  DATA_TEXTURES_MONSTERS_TIAMAT_2 = 354,
  DATA_TEXTURES_MONSTERS_TIAMAT_3 = 355,
  DATA_TEXTURES_MONSTERS_TIAMAT_4 = 356,
  DATA_TEXTURES_MONSTERS_TIAMAT_5 = 357,
  DATA_TEXTURES_MONSTERS_TIAMAT_6 = 358,
  DATA_TEXTURES_MONSTERS_TIAMAT_7 = 359,
  DATA_TEXTURES_MONSTERS_TIAMAT_8 = 360,
  DATA_TEXTURES_MONSTERS_YAMA_0 = 361,
  DATA_TEXTURES_MONSTERS_YAMA_1 = 362,
  DATA_TEXTURES_MONSTERS_YAMA_2 = 363,
  DATA_TEXTURES_MOUNTS_0 = 374,
  DATA_TEXTURES_NOISE0_0 = 393,
  DATA_TEXTURES_NOISE1_0 = 394,
  DATA_TEXTURES_PLACEHOLDER_0 = 0,
  DATA_TEXTURES_SAVING_0 = 2,
  DATA_TEXTURES_SHADOWS_0 = 384,
  DATA_TEXTURES_SHINE_0 = 400,
  DATA_TEXTURES_SPLASH0_0 = 3,
  DATA_TEXTURES_SPLASH1_0 = 4,
  DATA_TEXTURES_SPLASH2_0 = 5
}
declare enum THEME {
  ABZU = 13,
  ARENA = 18,
  BASE_CAMP = 17,
  CITY_OF_GOLD = 11,
  COSMIC_OCEAN = 10,
  DUAT = 12,
  DWELLING = 1,
  EGGPLANT_WORLD = 15,
  HUNDUN = 16,
  ICE_CAVES = 7,
  JUNGLE = 2,
  NEO_BABYLON = 8,
  OLMEC = 4,
  SUNKEN_CITY = 9,
  TEMPLE = 6,
  TIAMAT = 14,
  TIDE_POOL = 5,
  VOLCANA = 3
}
declare enum TILE_CODE {
  ADJACENT_FLOOR = 29,
  ALIEN = 148,
  ALIENQUEEN = 154,
  ALIEN_GENERATOR = 156,
  ALTAR = 185,
  ALTAR_DUAT = 338,
  AMMIT = 174,
  ANKH = 197,
  ANUBIS = 130,
  ANUBIS2 = 250,
  APEP = 375,
  APEP_LEFT = 376,
  APEP_RIGHT = 377,
  ARROW_TRAP = 55,
  ASSASSIN = 251,
  AUTOWALLTORCH = 100,
  BABYLON_FLOOR = 18,
  BACK_HOVERPACK = 308,
  BACK_JETPACK = 306,
  BACK_POWERPACK = 309,
  BACK_TELEPACK = 307,
  BAT = 241,
  BEE = 254,
  BEEHIVE_FLOOR = 21,
  BEE_QUEEN = 255,
  BIGSPEAR_TRAP = 176,
  BODYGUARD = 230,
  BOMB = 282,
  BOMB_BAG = 280,
  BOMB_BOX = 281,
  BONE_BLOCK = 6,
  BONE_KEY = 302,
  BOOMBOX = 388,
  BOOMERANG = 315,
  BOULDER = 374,
  BUBBLE_PLATFORM = 365,
  BUNKBED = 75,
  BUSH_BLOCK = 7,
  CAMERA = 313,
  CAPE = 304,
  CATMUMMY = 135,
  CAVEMAN = 114,
  CAVEMANBOSS = 117,
  CAVEMANSHOPKEEPER = 219,
  CAVEMAN_ASLEEP = 115,
  CHAINANDBLOCKS_CEILING = 59,
  CHAIN_CEILING = 60,
  CHAIR_LOOKING_LEFT = 78,
  CHAIR_LOOKING_RIGHT = 79,
  CHALLENGE_WAITROOM = 218,
  CHUNK_AIR = 2,
  CHUNK_DOOR = 3,
  CHUNK_GROUND = 1,
  CLIMBING_GLOVES = 287,
  CLIMBING_POLE = 36,
  CLONEGUN = 321,
  CLOVER = 107,
  COARSE_LAVA = 235,
  COARSE_WATER = 233,
  COBRA = 132,
  COBWEB = 340,
  COFFIN = 196,
  COG_DOOR = 239,
  COG_FLOOR = 23,
  COMPASS = 292,
  COMPASS_ALIEN = 293,
  CONSTRUCTION_SIGN = 72,
  CONVEYORBELT_LEFT = 61,
  CONVEYORBELT_RIGHT = 62,
  COOKED_TURKEY = 105,
  COOKFIRE = 192,
  COSMIC_JELLY = 260,
  COSMIC_ORB = 336,
  COUCH = 80,
  CRABMAN = 370,
  CRATE = 92,
  CRATE_BOMBS = 93,
  CRATE_PARACHUTE = 95,
  CRATE_ROPES = 94,
  CRITTER_BUTTERFLY = 357,
  CRITTER_CRAB = 360,
  CRITTER_DRONE = 364,
  CRITTER_DUNGBEETLE = 356,
  CRITTER_FIREFLY = 363,
  CRITTER_FISH = 359,
  CRITTER_LOCUST = 361,
  CRITTER_PENGUIN = 362,
  CRITTER_SLIME = 385,
  CRITTER_SNAIL = 358,
  CROCMAN = 131,
  CROSSBOW = 202,
  CROWN = 298,
  CROWN_STATUE = 127,
  CRUSHING_ELEVATOR = 184,
  CRUSHTRAP = 64,
  CRUSHTRAPLARGE = 65,
  CURSED_POT = 109,
  DIAMOND = 274,
  DIE = 215,
  DININGTABLE = 76,
  DM_SPAWN_POINT = 50,
  DOG_SIGN = 82,
  DOOR = 43,
  DOOR2 = 45,
  DOOR2_SECRET = 46,
  DOOR_DROP_HELD = 47,
  DRESSER = 74,
  DRILL = 193,
  DUAT_FLOOR = 25,
  DUSTWALL = 240,
  EGGPLANT = 272,
  EGGPLANT_ALTAR = 157,
  EGGPLANT_CHILD = 159,
  EGGPLANT_CROWN = 299,
  EGGPLANT_DOOR = 179,
  EGGSAC = 341,
  EGGSAC_BOTTOM = 345,
  EGGSAC_LEFT = 342,
  EGGSAC_RIGHT = 344,
  EGGSAC_TOP = 343,
  ELEVATOR = 68,
  ELIXIR = 284,
  EMERALD = 275,
  EMPRESS_GRAVE = 160,
  EMPTY = 0,
  EMPTY_MECH = 111,
  ENTRANCE = 40,
  ENTRANCE_SHORTCUT = 41,
  EXCALIBUR = 317,
  EXCALIBUR_BROKEN = 318,
  EXCALIBUR_STONE = 198,
  EXCALIBUR_STONE_EMPTY = 319,
  EXIT = 42,
  FACTORY_GENERATOR = 63,
  FALLING_PLATFORM = 58,
  FIREBUG = 247,
  FLOOR = 4,
  FLOOR_HARD = 28,
  FLYING_FISH = 369,
  FORCEFIELD = 217,
  FORCEFIELD_HORIZONTAL = 330,
  FORCEFIELD_HORIZONTAL_TOP = 331,
  FORCEFIELD_TOP = 70,
  FOUNTAIN_DRAIN = 143,
  FOUNTAIN_HEAD = 142,
  FROG = 256,
  FROG_ORANGE = 257,
  GHIST_DOOR2 = 48,
  GHIST_PRESENT = 354,
  GHIST_SHOPKEEPER = 220,
  GHOST = 261,
  GHOST_MED_HAPPY = 263,
  GHOST_MED_SAD = 262,
  GHOST_SMALL_ANGRY = 264,
  GHOST_SMALL_HAPPY = 267,
  GHOST_SMALL_SAD = 265,
  GHOST_SMALL_SURPRISED = 266,
  GIANTCLAM = 141,
  GIANTFOOD = 283,
  GIANT_FLY = 368,
  GIANT_FROG = 180,
  GIANT_SPIDER = 122,
  GOLDBARS = 91,
  GOLD_BAR = 273,
  GROWABLE_CLIMBING_POLE = 37,
  GROWABLE_VINE = 35,
  GRUB = 346,
  GUN_FREEZERAY = 312,
  GUN_SHOTGUN = 311,
  GUN_WEBGUN = 310,
  GUTS_FLOOR = 27,
  HAUNTED_CORPSE = 110,
  HEDJET = 297,
  HERMITCRAB = 140,
  HONEY_DOWNWARDS = 200,
  HONEY_UPWARDS = 199,
  HOUYIBOW = 205,
  HUMPHEAD = 328,
  HUNDUN = 258,
  ICEFLOOR = 152,
  IDOL = 186,
  IDOL_FLOOR = 187,
  IDOL_HOLD = 188,
  IMP = 124,
  JIANGSHI = 138,
  JUMPDOG = 181,
  JUNGLE_FLOOR = 10,
  JUNGLE_SPEAR_TRAP = 57,
  KAPALA = 296,
  KEY = 203,
  KINGU = 144,
  LADDER = 32,
  LADDER_PLAT = 33,
  LAMASSU = 161,
  LAMP_HANG = 209,
  LANDMINE = 149,
  LASER_TRAP = 162,
  LAVA = 234,
  LAVAMANDER = 125,
  LAVA_POT = 350,
  LEAF = 268,
  LEPRECHAUN = 137,
  LIGHTARROW = 206,
  LION_TRAP = 238,
  LITTORCH = 97,
  LITWALLTORCH = 99,
  LIZARD = 244,
  LOCKEDCHEST = 101,
  LOCKED_DOOR = 49,
  MACHETE = 316,
  MADAMETUSK = 229,
  MANTRAP = 120,
  MATTOCK = 201,
  MERCHANT = 216,
  MINEWOOD_FLOOR = 12,
  MINEWOOD_FLOOR_HANGING_HIDE = 14,
  MINEWOOD_FLOOR_NOREPLACE = 13,
  MINISTER = 182,
  MOAI_STATUE = 158,
  MOLE = 245,
  MONKEY = 246,
  MONKEY_GOLD = 337,
  MOSQUITO = 121,
  MOTHERSHIP_FLOOR = 24,
  MOTHER_STATUE = 178,
  MOUNT_AXOLOTL = 326,
  MOUNT_QILIN = 327,
  MOUNT_ROCKDOG = 325,
  MOVABLE_SPIKES = 387,
  MUMMY = 133,
  MUSHROOM_BASE = 103,
  NECROMANCER = 136,
  NONREPLACEABLE_BABYLON_FLOOR = 19,
  NONREPLACEABLE_FLOOR = 5,
  OCTOPUS = 139,
  OLDHUNTER = 227,
  OLMEC = 128,
  OLMECSHIP = 173,
  OLMITE = 164,
  OLMITE_ARMORED = 380,
  OLMITE_HELMET = 379,
  OLMITE_NAKED = 378,
  OSIRIS = 249,
  PAGODA_FLOOR = 17,
  PAGODA_PLATFORM = 39,
  PALACE_BOOKCASE = 171,
  PALACE_CANDLE = 170,
  PALACE_CHANDELIER = 169,
  PALACE_ENTRANCE = 166,
  PALACE_FLOOR = 26,
  PALACE_SIGN = 355,
  PALACE_TABLE = 167,
  PALACE_TABLE_TRAY = 168,
  PARACHUTE = 294,
  PASTE = 291,
  PEN_FLOOR = 224,
  PEN_LOCKED_DOOR = 225,
  PET_MONTY = 332,
  PET_PERCY = 333,
  PET_POOCHI = 334,
  PILLAR = 129,
  PIPE = 175,
  PITCHERS_MITT = 288,
  PLASMA_CANNON = 204,
  PLATFORM = 38,
  PLAYERBAG = 303,
  POT = 108,
  POTOFGOLD = 90,
  POWDER_KEG = 54,
  PRESENT = 329,
  PROTO_SHOPKEEPER = 351,
  PUNISHBALL = 366,
  PUNISHBALL_ATTACH = 367,
  PUNISHBALL_ATTACH_BOTTOM = 384,
  PUNISHBALL_ATTACH_LEFT = 381,
  PUNISHBALL_ATTACH_RIGHT = 382,
  PUNISHBALL_ATTACH_TOP = 383,
  PUSH_BLOCK = 53,
  QUICKSAND = 66,
  REDSKELETON = 243,
  REGENERATING_BLOCK = 31,
  ROBOT = 123,
  ROCK = 96,
  ROPE = 278,
  ROPE_PILE = 279,
  ROPE_UNROLLED = 335,
  ROYAL_JELLY = 106,
  RUBY = 277,
  SAPPHIRE = 276,
  SCARAB = 259,
  SCEPTER = 320,
  SCORPION = 116,
  SEEDED_RUN_UNLOCKER = 285,
  SHIELD_METAL = 323,
  SHIELD_WOODEN = 322,
  SHOES_SPIKE = 290,
  SHOES_SPRING = 289,
  SHOPKEEPER = 214,
  SHOPKEEPER_CLONE = 352,
  SHOPKEEPER_VAT = 155,
  SHOP_DOOR = 207,
  SHOP_ITEM = 221,
  SHOP_PAGODAWALL = 212,
  SHOP_SIGN = 208,
  SHOP_WALL = 210,
  SHOP_WOODWALL = 211,
  SHORTCUT_STATION_BANNER = 83,
  SIDETABLE = 77,
  SINGLEBED = 73,
  SISTER = 226,
  SKELETON = 242,
  SKULL = 386,
  SKULL_DROP_TRAP = 349,
  SLEEPING_HIREDHAND = 222,
  SLIDINGWALL = 371,
  SLIDINGWALL_CEILING = 146,
  SLIDINGWALL_SWITCH = 145,
  SNAKE = 113,
  SNAP_TRAP = 112,
  SORCERESS = 134,
  SPARK_TRAP = 163,
  SPECS = 286,
  SPIDER = 347,
  SPIDER_HANGING = 348,
  SPIKEBALL = 339,
  SPIKEBALL_NO_BOUNCE = 373,
  SPIKEBALL_TRAP = 372,
  SPIKES = 51,
  SPRING_TRAP = 151,
  STARTING_EXIT = 44,
  STICKY_TRAP = 177,
  STONE_FLOOR = 15,
  STORAGE_FLOOR = 189,
  STORAGE_GUY = 231,
  STYLED_FLOOR = 11,
  SUNKEN_FLOOR = 20,
  SURFACE_FLOOR = 8,
  SURFACE_HIDDEN_FLOOR = 9,
  TABLET = 301,
  TADPOLE = 353,
  TELEPORTER = 314,
  TELESCOPE = 84,
  TEMPLE_FLOOR = 16,
  THIEF = 228,
  THINICE = 153,
  THORN_VINE = 56,
  TIAMAT = 172,
  TIKIMAN = 118,
  TIMED_FORCEFIELD = 69,
  TIMED_POWDER_KEG = 67,
  TOMB_FLOOR = 30,
  TOTEM_TRAP = 237,
  TREASURE = 87,
  TREASURE_CHEST = 88,
  TREASURE_VAULTCHEST = 89,
  TREE_BASE = 102,
  TRUE_CROWN = 300,
  TURKEY = 104,
  TUTORIAL_MENU_SIGN = 271,
  TUTORIAL_SPEEDRUN_SIGN = 270,
  TV = 81,
  UDJAT_EYE = 295,
  UDJAT_KEY = 269,
  UDJAT_SOCKET = 194,
  UDJAT_TARGET = 324,
  UFO = 147,
  UPSIDEDOWN_SPIKES = 52,
  USHABTI = 71,
  VAMPIRE = 248,
  VAULT_WALL = 195,
  VINE = 34,
  VLAD = 126,
  VLADS_CAPE = 305,
  VLAD_FLOOR = 22,
  WALLTORCH = 98,
  WANTED_POSTER = 213,
  WATER = 232,
  WITCHDOCTOR = 119,
  WOODENLOG_TRAP = 190,
  WOODENLOG_TRAP_CEILING = 191,
  YAMA = 183,
  YANG = 223,
  YETI = 150,
  YETI_KING = 252,
  YETI_QUEEN = 253,
  ZOO_EXHIBIT = 165
}
declare enum TUSK {
  ANGRY = -2,
  DEAD = -1,
  DICE_HOUSE_SPAWNED = 1,
  HIGH_ROLLER_STATUS = 2,
  PALACE_WELCOME_MESSAGE = 3,
  QUEST_NOT_STARTED = 0
}
declare enum VANHORSING {
  FIRST_ENCOUNTER_DIAMOND_THROWN = 2,
  JAILCELL_SPAWNED = 1,
  QUEST_NOT_STARTED = 0,
  SECOND_ENCOUNTER_COMPASS_THROWN = 6,
  SHOT_VLAD = 4,
  SPAWNED_IN_VLADS_CASTLE = 3,
  TEMPLE_HIDEOUT_SPAWNED = 5,
  TUSK_CELLAR = 7
}
declare enum VANILLA_FONT_STYLE {
  BOLD = 2,
  ITALIC = 1
}
declare enum VANILLA_SOUND {
  BGM_BGM_BASECAMP = "BGM/BGM_basecamp",
  BGM_BGM_CREDITS = "BGM/BGM_credits",
  BGM_BGM_DM = "BGM/BGM_dm",
  BGM_BGM_ENDING = "BGM/BGM_ending",
  BGM_BGM_MASTER = "BGM/BGM_master",
  BGM_BGM_MENU = "BGM/BGM_menu",
  BGM_BGM_TITLE = "BGM/BGM_title",
  CRITTERS_DRONE_CRASH = "Critters/Drone_crash",
  CRITTERS_DRONE_LOOP = "Critters/Drone_loop",
  CRITTERS_FIREFLY_FLASH = "Critters/Firefly_flash",
  CRITTERS_LOCUST_LOOP = "Critters/Locust_loop",
  CRITTERS_PENGUIN_JUMP1 = "Critters/Penguin_jump1",
  CRITTERS_PENGUIN_JUMP2 = "Critters/Penguin_jump2",
  CRITTERS_SNAIL_ATTACH = "Critters/Snail_attach",
  CUTSCENE_ANKH_CRACK = "Cutscene/Ankh_crack",
  CUTSCENE_ANKH_LOOP = "Cutscene/Ankh_loop",
  CUTSCENE_ANKH_PULSE = "Cutscene/Ankh_pulse",
  CUTSCENE_ANKH_SHATTER = "Cutscene/Ankh_shatter",
  CUTSCENE_BIG_TREASURE_LAND = "Cutscene/Big_treasure_land",
  CUTSCENE_BIG_TREASURE_OPEN = "Cutscene/Big_treasure_open",
  CUTSCENE_CAVE_RUMBLE = "Cutscene/Cave_rumble",
  CUTSCENE_CONSTELLATION_LOOP = "Cutscene/Constellation_loop",
  CUTSCENE_CREDITS_ASTEROID = "Cutscene/Credits_asteroid",
  CUTSCENE_CREDITS_THRUSTER_LOOP = "Cutscene/Credits_thruster_loop",
  CUTSCENE_CREDITS_UFO_BONK = "Cutscene/Credits_ufo_bonk",
  CUTSCENE_EGGSHIP_AMB_LOOP = "Cutscene/Eggship_amb_loop",
  CUTSCENE_EGGSHIP_DOOR = "Cutscene/Eggship_door",
  CUTSCENE_EGGSHIP_EMERGE = "Cutscene/Eggship_emerge",
  CUTSCENE_EGGSHIP_LAND = "Cutscene/Eggship_land",
  CUTSCENE_EGGSHIP_LOOP = "Cutscene/Eggship_loop",
  CUTSCENE_EGGSHIP_THRUSTER_LOOP = "Cutscene/Eggship_thruster_loop",
  CUTSCENE_JOURNAL_PAGE = "Cutscene/Journal_page",
  CUTSCENE_KEY_DROP = "Cutscene/Key_drop",
  CUTSCENE_MENU_INTRO_LOOP = "Cutscene/Menu_intro_loop",
  CUTSCENE_OUROBOROS_DOOR_LOOP = "Cutscene/Ouroboros_door_loop",
  CUTSCENE_OUROBOROS_LOOP = "Cutscene/Ouroboros_loop",
  CUTSCENE_OUROBOROS_SHAKE = "Cutscene/Ouroboros_shake",
  CUTSCENE_RUMBLE_LOOP = "Cutscene/Rumble_loop",
  DEATHMATCH_DM_BANNER = "Deathmatch/dm_banner",
  DEATHMATCH_DM_COUNTDOWN = "Deathmatch/dm_countdown",
  DEATHMATCH_DM_ITEM_SPAWN = "Deathmatch/dm_item_spawn",
  DEATHMATCH_DM_ITEM_WARN = "Deathmatch/dm_item_warn",
  DEATHMATCH_DM_PILLAR_CRUSH = "Deathmatch/dm_pillar_crush",
  DEATHMATCH_DM_PILLAR_LOOP = "Deathmatch/dm_pillar_loop",
  DEATHMATCH_DM_SCORE = "Deathmatch/dm_score",
  DEATHMATCH_DM_SPLASH = "Deathmatch/dm_splash",
  DEATHMATCH_DM_TIMER = "Deathmatch/dm_timer",
  DEFAULT_SOUND = "default_sound",
  ENEMIES_ALIEN_JUMP = "Enemies/Alien_jump",
  ENEMIES_ALIEN_QUEEN_LOOP = "Enemies/Alien_queen_loop",
  ENEMIES_ALIEN_QUEEN_SHOT = "Enemies/Alien_queen_shot",
  ENEMIES_ALIEN_QUEEN_SIGHT_LOOP = "Enemies/Alien_queen_sight_loop",
  ENEMIES_ALIEN_SPEECH = "Enemies/Alien_speech",
  ENEMIES_AMMIT_WALK = "Enemies/Ammit_walk",
  ENEMIES_ANUBIS_ACTIVATE = "Enemies/Anubis_activate",
  ENEMIES_ANUBIS_ATK = "Enemies/Anubis_atk",
  ENEMIES_ANUBIS_SPECIAL_SHOT = "Enemies/Anubis_special_shot",
  ENEMIES_ANUBIS_WARN = "Enemies/Anubis_warn",
  ENEMIES_APEP_BODY_LOOP = "Enemies/Apep_body_loop",
  ENEMIES_APEP_HEAD_LOOP = "Enemies/Apep_head_loop",
  ENEMIES_BAT_FLAP = "Enemies/Bat_flap",
  ENEMIES_BEE_LOOP = "Enemies/Bee_loop",
  ENEMIES_BEE_QUEEN_LOOP = "Enemies/Bee_queen_loop",
  ENEMIES_BOSS_CAVEMAN_BONK = "Enemies/Boss_caveman_bonk",
  ENEMIES_BOSS_CAVEMAN_CRUSH = "Enemies/Boss_caveman_crush",
  ENEMIES_BOSS_CAVEMAN_JUMP = "Enemies/Boss_caveman_jump",
  ENEMIES_BOSS_CAVEMAN_LAND = "Enemies/Boss_caveman_land",
  ENEMIES_BOSS_CAVEMAN_ROLL_LOOP = "Enemies/Boss_caveman_roll_loop",
  ENEMIES_BOSS_CAVEMAN_STEP = "Enemies/Boss_caveman_step",
  ENEMIES_BOSS_CAVEMAN_STOMP = "Enemies/Boss_caveman_stomp",
  ENEMIES_CATMUMMY_ATK = "Enemies/Catmummy_atk",
  ENEMIES_CATMUMMY_JUMP = "Enemies/Catmummy_jump",
  ENEMIES_CATMUMMY_RUN = "Enemies/Catmummy_run",
  ENEMIES_CAVEMAN_PRAY_LOOP = "Enemies/Caveman_pray_loop",
  ENEMIES_CAVEMAN_STEP = "Enemies/Caveman_step",
  ENEMIES_CAVEMAN_TALK = "Enemies/Caveman_talk",
  ENEMIES_CAVEMAN_TRIGGER = "Enemies/Caveman_trigger",
  ENEMIES_COBRA_ATK = "Enemies/Cobra_atk",
  ENEMIES_CROCMAN_ATK = "Enemies/Crocman_atk",
  ENEMIES_CROCMAN_TRIGGER = "Enemies/Crocman_trigger",
  ENEMIES_EGGPLANT_DOG_BOUNCE = "Enemies/Eggplant_dog_bounce",
  ENEMIES_EGGPLANT_MINISTER_LOOP = "Enemies/Eggplant_minister_loop",
  ENEMIES_EGGPLANT_MINISTER_MORPH = "Enemies/Eggplant_minister_morph",
  ENEMIES_EGGSAC_BURST = "Enemies/Eggsac_burst",
  ENEMIES_EGGSAC_WARN = "Enemies/Eggsac_warn",
  ENEMIES_ENEMY_HIT_INVINCIBLE = "Enemies/Enemy_hit_invincible",
  ENEMIES_FIREBUG_ARM = "Enemies/Firebug_arm",
  ENEMIES_FIREBUG_ATK_LOOP = "Enemies/Firebug_atk_loop",
  ENEMIES_FIREBUG_FLY_LOOP = "Enemies/Firebug_fly_loop",
  ENEMIES_FLYINGFISH_BONK = "Enemies/Flyingfish_bonk",
  ENEMIES_FLYINGFISH_FLAP = "Enemies/Flyingfish_flap",
  ENEMIES_FLYINGFISH_WIGGLE = "Enemies/Flyingfish_wiggle",
  ENEMIES_FROG_CHARGE_LOOP = "Enemies/Frog_charge_loop",
  ENEMIES_FROG_EAT = "Enemies/Frog_eat",
  ENEMIES_FROG_GIANT_OPEN = "Enemies/Frog_giant_open",
  ENEMIES_FROG_JUMP = "Enemies/Frog_jump",
  ENEMIES_GHIST_LOOP = "Enemies/Ghist_loop",
  ENEMIES_GHOST_LOOP = "Enemies/Ghost_loop",
  ENEMIES_GHOST_SPLIT = "Enemies/Ghost_split",
  ENEMIES_GIANT_FLY_EAT = "Enemies/Giant_fly_eat",
  ENEMIES_GIANT_FLY_LOOP = "Enemies/Giant_fly_loop",
  ENEMIES_GIANT_SPIDER_DROP = "Enemies/Giant_spider_drop",
  ENEMIES_GIANT_SPIDER_JUMP = "Enemies/Giant_spider_jump",
  ENEMIES_GIANT_SPIDER_WALK = "Enemies/Giant_spider_walk",
  ENEMIES_GOLD_MONKEY_JUMP = "Enemies/Gold_monkey_jump",
  ENEMIES_GOLD_MONKEY_POOP = "Enemies/Gold_monkey_poop",
  ENEMIES_GRUB_EVOLVE = "Enemies/Grub_evolve",
  ENEMIES_GRUB_JUMP = "Enemies/Grub_jump",
  ENEMIES_GRUB_LOOP = "Enemies/Grub_loop",
  ENEMIES_HANGSPIDER_ATK = "Enemies/Hangspider_atk",
  ENEMIES_HERMITCRAB_ATK = "Enemies/Hermitcrab_atk",
  ENEMIES_HERMITCRAB_MORPH = "Enemies/Hermitcrab_morph",
  ENEMIES_HUMPHEAD_LOOP = "Enemies/Humphead_loop",
  ENEMIES_HUNDUN_ATK = "Enemies/Hundun_atk",
  ENEMIES_HUNDUN_DEATH_LAND = "Enemies/Hundun_death_land",
  ENEMIES_HUNDUN_HEAD_DESTROY = "Enemies/Hundun_head_destroy",
  ENEMIES_HUNDUN_HEAD_EMERGE = "Enemies/Hundun_head_emerge",
  ENEMIES_HUNDUN_HURT = "Enemies/Hundun_hurt",
  ENEMIES_HUNDUN_STEP = "Enemies/Hundun_step",
  ENEMIES_HUNDUN_WARN = "Enemies/Hundun_warn",
  ENEMIES_HUNDUN_WINGS_EMERGE = "Enemies/Hundun_wings_emerge",
  ENEMIES_HUNDUN_WING_FLAP = "Enemies/Hundun_wing_flap",
  ENEMIES_IMP_DROP = "Enemies/Imp_drop",
  ENEMIES_IMP_FLAP = "Enemies/Imp_flap",
  ENEMIES_JELLYFISH_LOOP = "Enemies/Jellyfish_loop",
  ENEMIES_JIANGSHI_CHARGE = "Enemies/Jiangshi_charge",
  ENEMIES_JIANGSHI_FEMALE_JUMP = "Enemies/Jiangshi_female_jump",
  ENEMIES_JIANGSHI_FLIP = "Enemies/Jiangshi_flip",
  ENEMIES_JIANGSHI_JUMP = "Enemies/Jiangshi_jump",
  ENEMIES_KILLED_ENEMY = "Enemies/Killed_enemy",
  ENEMIES_KILLED_ENEMY_BONES = "Enemies/Killed_enemy_bones",
  ENEMIES_KILLED_ENEMY_CORPSE = "Enemies/Killed_enemy_corpse",
  ENEMIES_KINGU_GRIP = "Enemies/Kingu_grip",
  ENEMIES_KINGU_HURT = "Enemies/Kingu_hurt",
  ENEMIES_KINGU_SLIDE_LOOP = "Enemies/Kingu_slide_loop",
  ENEMIES_LAMASSU_AIM_LOCK = "Enemies/Lamassu_aim_lock",
  ENEMIES_LAMASSU_AIM_LOOP = "Enemies/Lamassu_aim_loop",
  ENEMIES_LAMASSU_ATK_HIT = "Enemies/Lamassu_atk_hit",
  ENEMIES_LAMASSU_ATK_LOOP = "Enemies/Lamassu_atk_loop",
  ENEMIES_LAMASSU_FLY = "Enemies/Lamassu_fly",
  ENEMIES_LAMASSU_WALK = "Enemies/Lamassu_walk",
  ENEMIES_LAVAMANDER_ATK = "Enemies/Lavamander_atk",
  ENEMIES_LAVAMANDER_CHARGE = "Enemies/Lavamander_charge",
  ENEMIES_LAVAMANDER_JUMP = "Enemies/Lavamander_jump",
  ENEMIES_LAVAMANDER_TRANSFORM = "Enemies/Lavamander_transform",
  ENEMIES_LEPRECHAUN_JUMP = "Enemies/Leprechaun_jump",
  ENEMIES_LEPRECHAUN_LOOP = "Enemies/Leprechaun_loop",
  ENEMIES_LEPRECHAUN_STEAL_LOOP = "Enemies/Leprechaun_steal_loop",
  ENEMIES_LIZARD_BONK = "Enemies/Lizard_bonk",
  ENEMIES_LIZARD_CURL_LOOP = "Enemies/Lizard_curl_loop",
  ENEMIES_LIZARD_JUMP = "Enemies/Lizard_jump",
  ENEMIES_LIZARD_UNROLL = "Enemies/Lizard_unroll",
  ENEMIES_MAGMAMAN_JUMP = "Enemies/Magmaman_jump",
  ENEMIES_MAGMAMAN_TRANSFORM = "Enemies/Magmaman_transform",
  ENEMIES_MANTRAP_BITE = "Enemies/Mantrap_bite",
  ENEMIES_MOLERAT_DIG_LOOP = "Enemies/Molerat_dig_loop",
  ENEMIES_MOLERAT_RUN_LOOP = "Enemies/Molerat_run_loop",
  ENEMIES_MONKEY_JUMP = "Enemies/Monkey_jump",
  ENEMIES_MONKEY_STEAL_END = "Enemies/Monkey_steal_end",
  ENEMIES_MONKEY_STEAL_LOOP = "Enemies/Monkey_steal_loop",
  ENEMIES_MOSQUITO_LOOP = "Enemies/Mosquito_loop",
  ENEMIES_MOSQUITO_PIERCE = "Enemies/Mosquito_pierce",
  ENEMIES_MUMMY_FLIES_LOOP = "Enemies/Mummy_flies_loop",
  ENEMIES_MUMMY_STEP = "Enemies/Mummy_step",
  ENEMIES_MUMMY_VOMIT = "Enemies/Mummy_vomit",
  ENEMIES_NECROMANCER_CHARGE_LOOP = "Enemies/Necromancer_charge_loop",
  ENEMIES_NECROMANCER_SPAWN = "Enemies/Necromancer_spawn",
  ENEMIES_OCTOPUS_ATK = "Enemies/Octopus_atk",
  ENEMIES_OCTOPUS_BONK = "Enemies/Octopus_bonk",
  ENEMIES_OCTOPUS_JUMP = "Enemies/Octopus_jump",
  ENEMIES_OCTOPUS_WALK = "Enemies/Octopus_walk",
  ENEMIES_OLMEC_BOMB_SPAWN = "Enemies/Olmec_bomb_spawn",
  ENEMIES_OLMEC_CRUSH = "Enemies/Olmec_crush",
  ENEMIES_OLMEC_HOVER_LOOP = "Enemies/Olmec_hover_loop",
  ENEMIES_OLMEC_PAD_BREAK = "Enemies/Olmec_pad_break",
  ENEMIES_OLMEC_PAD_SHOW = "Enemies/Olmec_pad_show",
  ENEMIES_OLMEC_SPLASH = "Enemies/Olmec_splash",
  ENEMIES_OLMEC_STOMP = "Enemies/Olmec_stomp",
  ENEMIES_OLMEC_TRANSFORM_CLOSE = "Enemies/Olmec_transform_close",
  ENEMIES_OLMEC_TRANSFORM_OPEN = "Enemies/Olmec_transform_open",
  ENEMIES_OLMEC_UFO_SPAWN = "Enemies/Olmec_ufo_spawn",
  ENEMIES_OLMEC_UNCOVER = "Enemies/Olmec_uncover",
  ENEMIES_OLMITE_ARMOR_BREAK = "Enemies/Olmite_armor_break",
  ENEMIES_OLMITE_JUMP = "Enemies/Olmite_jump",
  ENEMIES_OLMITE_STOMP = "Enemies/Olmite_stomp",
  ENEMIES_OSIRIS_APPEAR = "Enemies/Osiris_appear",
  ENEMIES_OSIRIS_PUNCH = "Enemies/Osiris_punch",
  ENEMIES_PANGXIE_BUBBLE_ATK = "Enemies/Pangxie_bubble_atk",
  ENEMIES_PANGXIE_PUNCH1 = "Enemies/Pangxie_punch1",
  ENEMIES_PANGXIE_PUNCH2 = "Enemies/Pangxie_punch2",
  ENEMIES_PROTO_BURST_LOOP = "Enemies/Proto_burst_loop",
  ENEMIES_PROTO_CRAWL = "Enemies/Proto_crawl",
  ENEMIES_ROBOT_LOOP = "Enemies/Robot_loop",
  ENEMIES_ROBOT_TRIGGER = "Enemies/Robot_trigger",
  ENEMIES_SCORPION_ATK = "Enemies/Scorpion_atk",
  ENEMIES_SKELETON_COLLAPSE = "Enemies/Skeleton_collapse",
  ENEMIES_SKELETON_MATERIALIZE = "Enemies/Skeleton_materialize",
  ENEMIES_SNAKE_ATK = "Enemies/Snake_atk",
  ENEMIES_SORCERESS_ATK = "Enemies/Sorceress_atk",
  ENEMIES_SORCERESS_ATK_SPAWN = "Enemies/Sorceress_atk_spawn",
  ENEMIES_SORCERESS_CHARGE_LOOP = "Enemies/Sorceress_charge_loop",
  ENEMIES_SORCERESS_JUMP = "Enemies/Sorceress_jump",
  ENEMIES_SPIDER_JUMP = "Enemies/Spider_jump",
  ENEMIES_SPIDER_TRIGGER = "Enemies/Spider_trigger",
  ENEMIES_STONE_TRANSFORM_LOOP = "Enemies/Stone_transform_loop",
  ENEMIES_STORAGE_KEEPER_DIE = "Enemies/Storage_keeper_die",
  ENEMIES_STORAGE_KEEPER_JUMP = "Enemies/Storage_keeper_jump",
  ENEMIES_TADPOLE_SWIM = "Enemies/Tadpole_swim",
  ENEMIES_TIAMAT_HURT = "Enemies/Tiamat_hurt",
  ENEMIES_TIAMAT_ORB_LOOP = "Enemies/Tiamat_orb_loop",
  ENEMIES_TIAMAT_SCEPTER = "Enemies/Tiamat_scepter",
  ENEMIES_TIAMAT_SCREAM1 = "Enemies/Tiamat_scream1",
  ENEMIES_TIAMAT_SCREAM2 = "Enemies/Tiamat_scream2",
  ENEMIES_TIKIMAN_TALK = "Enemies/Tikiman_talk",
  ENEMIES_UFO_ATK_END = "Enemies/UFO_atk_end",
  ENEMIES_UFO_ATK_LOOP = "Enemies/UFO_atk_loop",
  ENEMIES_UFO_CHARGE = "Enemies/UFO_charge",
  ENEMIES_UFO_DAMAGE = "Enemies/UFO_damage",
  ENEMIES_UFO_EJECT = "Enemies/UFO_eject",
  ENEMIES_UFO_LOOP = "Enemies/UFO_loop",
  ENEMIES_VAMPIRE_JUMP = "Enemies/Vampire_jump",
  ENEMIES_VLAD_TRIGGER = "Enemies/Vlad_trigger",
  ENEMIES_WITCHDOCTOR_CHANT_LOOP = "Enemies/Witchdoctor_chant_loop",
  ENEMIES_WITCHDOCTOR_STAB = "Enemies/Witchdoctor_stab",
  ENEMIES_WITCHDOCTOR_TALK = "Enemies/Witchdoctor_talk",
  ENEMIES_WITCHDOCTOR_TRIGGER = "Enemies/Witchdoctor_trigger",
  ENEMIES_YETI_BIG_CHARGE = "Enemies/Yeti_big_charge",
  ENEMIES_YETI_BIG_PUNCH = "Enemies/Yeti_big_punch",
  ENEMIES_YETI_BIG_STEP = "Enemies/Yeti_big_step",
  ENEMIES_YETI_KING_ROAR = "Enemies/Yeti_king_roar",
  ENEMIES_YETI_QUEEN_JUMP = "Enemies/Yeti_queen_jump",
  ENEMIES_YETI_QUEEN_SLAM = "Enemies/Yeti_queen_slam",
  FX_FX_ANUBIS_WARN = "FX/FX_anubis_warn",
  FX_FX_COSMIC_ORB = "FX/FX_cosmic_orb",
  FX_FX_CURSE = "FX/FX_curse",
  FX_FX_DM_BANNER = "FX/FX_dm_banner",
  FX_FX_JOURNAL_ENTRY = "FX/FX_journal_entry",
  FX_FX_JOURNAL_PAGE = "FX/FX_journal_page",
  ITEMS_ARROW_STICK = "Items/Arrow_stick",
  ITEMS_BACKPACK_WARN = "Items/Backpack_warn",
  ITEMS_BOMB_BIG_TIMER = "Items/Bomb_big_timer",
  ITEMS_BOMB_STICK = "Items/Bomb_stick",
  ITEMS_BOMB_TIMER = "Items/Bomb_timer",
  ITEMS_BOOMBOX_OFF = "Items/Boombox_off",
  ITEMS_BOOMERANG_CATCH = "Items/Boomerang_catch",
  ITEMS_BOOMERANG_LOOP = "Items/Boomerang_loop",
  ITEMS_BOW = "Items/Bow",
  ITEMS_BOW_RELOAD = "Items/Bow_reload",
  ITEMS_CAMERA = "Items/Camera",
  ITEMS_CAPE_LOOP = "Items/Cape_loop",
  ITEMS_CAPE_VLAD_FLAP = "Items/Cape_vlad_flap",
  ITEMS_CLONE_GUN = "Items/Clone_gun",
  ITEMS_COIN_BOUNCE = "Items/Coin_bounce",
  ITEMS_CROSSBOW = "Items/Crossbow",
  ITEMS_CROSSBOW_RELOAD = "Items/Crossbow_reload",
  ITEMS_DAMSEL_CALL = "Items/Damsel_call",
  ITEMS_DAMSEL_PET = "Items/Damsel_pet",
  ITEMS_EXCALIBUR = "Items/Excalibur",
  ITEMS_FREEZE_RAY = "Items/Freeze_ray",
  ITEMS_FREEZE_RAY_HIT = "Items/Freeze_ray_hit",
  ITEMS_HOVERPACK_LOOP = "Items/Hoverpack_loop",
  ITEMS_JETPACK_END = "Items/Jetpack_end",
  ITEMS_JETPACK_IGNITE = "Items/Jetpack_ignite",
  ITEMS_JETPACK_LOOP = "Items/Jetpack_loop",
  ITEMS_MACHETE = "Items/Machete",
  ITEMS_MATTOCK_BREAK = "Items/Mattock_break",
  ITEMS_MATTOCK_HIT = "Items/Mattock_hit",
  ITEMS_MATTOCK_SWING = "Items/Mattock_swing",
  ITEMS_PARACHUTE = "Items/Parachute",
  ITEMS_PLASMA_CANNON = "Items/Plasma_cannon",
  ITEMS_PLASMA_CANNON_CHARGE = "Items/Plasma_cannon_charge",
  ITEMS_ROPE_ATTACH = "Items/Rope_attach",
  ITEMS_ROPE_BURN_LOOP = "Items/Rope_burn_loop",
  ITEMS_SCEPTER = "Items/Scepter",
  ITEMS_SHOTGUN_FIRE = "Items/Shotgun_fire",
  ITEMS_SPRING_SHOES = "Items/Spring_shoes",
  ITEMS_TV_LOOP = "Items/TV_loop",
  ITEMS_UDJAT_BLINK = "Items/Udjat_blink",
  ITEMS_USHABTI_RATTLE = "Items/Ushabti_rattle",
  ITEMS_WEBGUN = "Items/Webgun",
  ITEMS_WEBGUN_HIT = "Items/Webgun_hit",
  ITEMS_WITCHDOCTORSKULL_LOOP = "Items/Witchdoctorskull_loop",
  ITEMS_WOODEN_SHIELD_BREAK = "Items/Wooden_shield_break",
  ITEMS_WOODEN_SHIELD_DAMAGE = "Items/Wooden_shield_damage",
  LIQUIDS_LAVA_STATIC_LOOP = "Liquids/Lava_static_loop",
  LIQUIDS_LAVA_STREAM_LOOP = "Liquids/Lava_stream_loop",
  LIQUIDS_WATER_REV_STREAM_LOOP = "Liquids/Water_rev_stream_loop",
  LIQUIDS_WATER_SPLASH = "Liquids/Water_splash",
  LIQUIDS_WATER_STREAM_LOOP = "Liquids/Water_stream_loop",
  MENU_CANCEL = "Menu/Cancel",
  MENU_CHARSEL_DESELECTION = "Menu/Charsel_deselection",
  MENU_CHARSEL_DOOR = "Menu/Charsel_door",
  MENU_CHARSEL_NAVI = "Menu/Charsel_navi",
  MENU_CHARSEL_QUICK_NAVI = "Menu/Charsel_quick_navi",
  MENU_CHARSEL_QUICK_NOPE = "Menu/Charsel_quick_nope",
  MENU_CHARSEL_QUICK_OPEN = "Menu/Charsel_quick_open",
  MENU_CHARSEL_SCROLL = "Menu/Charsel_scroll",
  MENU_CHARSEL_SELECTION = "Menu/Charsel_selection",
  MENU_CHARSEL_SELECTION2 = "Menu/Charsel_selection2",
  MENU_DIRT_FALL = "Menu/Dirt_fall",
  MENU_JOURNAL_STICKER = "Menu/Journal_sticker",
  MENU_MM_BAR = "Menu/MM_bar",
  MENU_MM_NAVI = "Menu/MM_navi",
  MENU_MM_OPTIONS_SUB = "Menu/MM_options_sub",
  MENU_MM_RESET = "Menu/MM_reset",
  MENU_MM_SELECTION = "Menu/MM_selection",
  MENU_MM_SET = "Menu/MM_set",
  MENU_MM_TOGGLE = "Menu/MM_toggle",
  MENU_NAVI = "Menu/Navi",
  MENU_PAGE_RETURN = "Menu/Page_return",
  MENU_PAGE_TURN = "Menu/Page_turn",
  MENU_SELECTION = "Menu/Selection",
  MENU_TITLE_SELECTION = "Menu/Title_selection",
  MENU_TITLE_TORCH_LOOP = "Menu/Title_torch_loop",
  MENU_ZOOM_IN = "Menu/Zoom_in",
  MENU_ZOOM_OUT = "Menu/Zoom_out",
  MOUNTS_AXOLOTL_ATK = "Mounts/Axolotl_atk",
  MOUNTS_AXOLOTL_ATK_HIT = "Mounts/Axolotl_atk_hit",
  MOUNTS_AXOLOTL_JUMP1 = "Mounts/Axolotl_jump1",
  MOUNTS_AXOLOTL_JUMP2 = "Mounts/Axolotl_jump2",
  MOUNTS_AXOLOTL_UNTAMED_LOOP = "Mounts/Axolotl_untamed_loop",
  MOUNTS_AXOLOTL_WALK = "Mounts/Axolotl_walk",
  MOUNTS_MECH_DRIVE_LOOP = "Mounts/Mech_drive_loop",
  MOUNTS_MECH_JUMP = "Mounts/Mech_jump",
  MOUNTS_MECH_PUNCH1 = "Mounts/Mech_punch1",
  MOUNTS_MECH_SMASH = "Mounts/Mech_smash",
  MOUNTS_MECH_SPARK = "Mounts/Mech_spark",
  MOUNTS_MECH_TRANSFORM = "Mounts/Mech_transform",
  MOUNTS_MECH_TURN = "Mounts/Mech_turn",
  MOUNTS_MECH_WALK1 = "Mounts/Mech_walk1",
  MOUNTS_MECH_WALK2 = "Mounts/Mech_walk2",
  MOUNTS_MECH_WARN = "Mounts/Mech_warn",
  MOUNTS_MOUNT = "Mounts/Mount",
  MOUNTS_MOUNT_LAND = "Mounts/Mount_land",
  MOUNTS_MOUNT_TAME = "Mounts/Mount_tame",
  MOUNTS_QILIN_FLY_LOOP = "Mounts/Qilin_fly_loop",
  MOUNTS_QILIN_HATCH = "Mounts/Qilin_hatch",
  MOUNTS_QILIN_JUMP1 = "Mounts/Qilin_jump1",
  MOUNTS_QILIN_JUMP2 = "Mounts/Qilin_jump2",
  MOUNTS_QILIN_WALK = "Mounts/Qilin_walk",
  MOUNTS_TURKEY_ATK = "Mounts/Turkey_atk",
  MOUNTS_TURKEY_FLAP = "Mounts/Turkey_flap",
  MOUNTS_TURKEY_JUMP = "Mounts/Turkey_jump",
  MOUNTS_TURKEY_UNTAMED_LOOP = "Mounts/Turkey_untamed_loop",
  MOUNTS_TURKEY_WALK = "Mounts/Turkey_walk",
  MOUNTS_WILDDOG_FIREBALL_LOOP = "Mounts/Wilddog_fireball_loop",
  MOUNTS_WILDDOG_JUMP1 = "Mounts/Wilddog_jump1",
  MOUNTS_WILDDOG_JUMP2 = "Mounts/Wilddog_jump2",
  MOUNTS_WILDDOG_UNTAMED_LOOP = "Mounts/Wilddog_untamed_loop",
  MOUNTS_WILDDOG_WALK = "Mounts/Wilddog_walk",
  PLAYER_DEATH_GHOST = "Player/Death_ghost",
  PLAYER_ENTER_DOOR = "Player/Enter_door",
  PLAYER_EQUIP = "Player/Equip",
  PLAYER_GRAB_LEDGE = "Player/Grab_ledge",
  PLAYER_INKED = "Player/Inked",
  PLAYER_JUMP = "Player/Jump",
  PLAYER_LAND_CHAIN = "Player/Land_chain",
  PLAYER_LISE_DRIVE_LOOP = "Player/LISE_drive_loop",
  PLAYER_LISE_LOADING_LOOP = "Player/LISE_loading_loop",
  PLAYER_LISE_PUSH_LOOP = "Player/LISE_push_loop",
  PLAYER_LISE_RADAR_LOOP = "Player/LISE_radar_loop",
  PLAYER_LISE_WARNING = "Player/LISE_warning",
  PLAYER_NO_ITEM = "Player/No_item",
  PLAYER_PGHOST_ATK = "Player/Pghost_atk",
  PLAYER_PGHOST_CHARGE_LOOP = "Player/Pghost_charge_loop",
  PLAYER_PGHOST_DASH = "Player/Pghost_dash",
  PLAYER_PGHOST_SHAKE = "Player/Pghost_shake",
  PLAYER_PGHOST_SPAWN = "Player/Pghost_spawn",
  PLAYER_PGHOST_SPIN = "Player/Pghost_spin",
  PLAYER_PUSH_BLOCK_LOOP = "Player/Push_block_loop",
  PLAYER_TOSS_ROPE = "Player/Toss_rope",
  PLAYER_WHIP1 = "Player/Whip1",
  PLAYER_WHIP2 = "Player/Whip2",
  PLAYER_WHIP_JUMP = "Player/Whip_jump",
  SHARED_ANGER = "Shared/Anger",
  SHARED_BLOCK_LAND = "Shared/Block_land",
  SHARED_BLOOD_SPLURT = "Shared/Blood_splurt",
  SHARED_BUBBLE_BONK = "Shared/Bubble_bonk",
  SHARED_BUBBLE_BURST = "Shared/Bubble_burst",
  SHARED_BUBBLE_BURST_BIG = "Shared/Bubble_burst_big",
  SHARED_CEILING_CRUMBLE = "Shared/Ceiling_crumble",
  SHARED_CLIMB = "Shared/Climb",
  SHARED_COFFIN_BREAK = "Shared/Coffin_break",
  SHARED_COFFIN_RATTLE = "Shared/Coffin_rattle",
  SHARED_COLLISION_SURFACE = "Shared/Collision_surface",
  SHARED_COSMIC_ORB_DESTROY = "Shared/Cosmic_orb_destroy",
  SHARED_COSMIC_ORB_LOOP = "Shared/Cosmic_orb_loop",
  SHARED_CURSED_LOOP = "Shared/Cursed_loop",
  SHARED_CURSE_GET = "Shared/Curse_get",
  SHARED_DAMAGED = "Shared/Damaged",
  SHARED_DAMAGED_FIRE = "Shared/Damaged_fire",
  SHARED_DAMAGED_POISON = "Shared/Damaged_poison",
  SHARED_DARK_LEVEL_START = "Shared/Dark_level_start",
  SHARED_DESTRUCTIBLE_BREAK = "Shared/Destructible_break",
  SHARED_DOOR_AMB_LOOP = "Shared/Door_amb_loop",
  SHARED_DOOR_UNLOCK = "Shared/Door_unlock",
  SHARED_DROP = "Shared/Drop",
  SHARED_EXPLOSION = "Shared/Explosion",
  SHARED_EXPLOSION_MODERN = "Shared/Explosion_modern",
  SHARED_FIRE_IGNITE = "Shared/Fire_ignite",
  SHARED_FIRE_LOOP = "Shared/Fire_loop",
  SHARED_GRAB_CLIMBABLE = "Shared/Grab_climbable",
  SHARED_HH_ANGER = "Shared/HH_anger",
  SHARED_HH_OBEY = "Shared/HH_obey",
  SHARED_HUMANOID_JUMP = "Shared/Humanoid_jump",
  SHARED_ICE_BREAK = "Shared/Ice_break",
  SHARED_ICE_SLIDE_LOOP = "Shared/Ice_slide_loop",
  SHARED_IMPALED = "Shared/Impaled",
  SHARED_LAND = "Shared/Land",
  SHARED_LANTERN_BREAK = "Shared/Lantern_break",
  SHARED_NEON_SIGN_LOOP = "Shared/Neon_sign_loop",
  SHARED_OPEN_CHEST = "Shared/Open_chest",
  SHARED_OPEN_CRATE = "Shared/Open_crate",
  SHARED_PICK_UP = "Shared/Pick_up",
  SHARED_POISON_WARN = "Shared/Poison_warn",
  SHARED_PORTAL_LOOP = "Shared/Portal_loop",
  SHARED_RICOCHET = "Shared/Ricochet",
  SHARED_RUBBLE_BREAK = "Shared/Rubble_break",
  SHARED_SACRIFICE = "Shared/Sacrifice",
  SHARED_SACRIFICE_EGGPLANT = "Shared/Sacrifice_eggplant",
  SHARED_SCARAB_LOOP = "Shared/Scarab_loop",
  SHARED_SLEEP_BUBBLE = "Shared/Sleep_bubble",
  SHARED_SMOKE_TELEPORT = "Shared/Smoke_teleport",
  SHARED_STORAGE_PAD_ACTIVATE = "Shared/Storage_pad_activate",
  SHARED_STUNNED_WAKE = "Shared/Stunned_wake",
  SHARED_TELEPORT = "Shared/Teleport",
  SHARED_TILE_BREAK = "Shared/Tile_break",
  SHARED_TOSS = "Shared/Toss",
  SHARED_TOSS_FIRE = "Shared/Toss_fire",
  SHARED_TRIP = "Shared/Trip",
  SHARED_WAKE_BLINK = "Shared/Wake_blink",
  SHARED_WEBBED = "Shared/Webbed",
  SHOP_SHOP_BUY = "Shop/Shop_buy",
  SHOP_SHOP_ENTER = "Shop/Shop_enter",
  SHOP_SHOP_FOCUS = "Shop/Shop_focus",
  SHOP_SHOP_NOPE = "Shop/Shop_nope",
  SHOP_SHOP_PICK_UP = "Shop/Shop_pick_up",
  TRANSITIONS_TRANS_ANGER = "Transitions/Trans_anger",
  TRANSITIONS_TRANS_ANKH = "Transitions/Trans_ankh",
  TRANSITIONS_TRANS_DARK = "Transitions/Trans_dark",
  TRANSITIONS_TRANS_DARK_FIRST = "Transitions/Trans_dark_first",
  TRANSITIONS_TRANS_DEATH = "Transitions/Trans_death",
  TRANSITIONS_TRANS_DM_RESULTS = "Transitions/Trans_dm_results",
  TRANSITIONS_TRANS_LAYER = "Transitions/Trans_layer",
  TRANSITIONS_TRANS_LAYER_SPECIAL = "Transitions/Trans_layer_special",
  TRANSITIONS_TRANS_OUROBOROS = "Transitions/Trans_ouroboros",
  TRANSITIONS_TRANS_PAUSE = "Transitions/Trans_pause",
  TRANSITIONS_TRANS_PIPE = "Transitions/Trans_pipe",
  TRANSITIONS_TRANS_SHOP = "Transitions/Trans_shop",
  TRANSITIONS_TRANS_THEME = "Transitions/Trans_theme",
  TRANSITIONS_TRANS_TUNNEL = "Transitions/Trans_tunnel",
  TRAPS_ARROWTRAP_TRIGGER = "Traps/Arrowtrap_trigger",
  TRAPS_BOULDER_CRUSH = "Traps/Boulder_crush",
  TRAPS_BOULDER_EMERGE = "Traps/Boulder_emerge",
  TRAPS_BOULDER_LOOP = "Traps/Boulder_loop",
  TRAPS_BOULDER_WARN_LOOP = "Traps/Boulder_warn_loop",
  TRAPS_CONVEYOR_BELT_LOOP = "Traps/Conveyor_belt_loop",
  TRAPS_CRUSHTRAP_BIG_STOP = "Traps/Crushtrap_big_stop",
  TRAPS_CRUSHTRAP_STOP = "Traps/Crushtrap_stop",
  TRAPS_DRILL_LOOP = "Traps/Drill_loop",
  TRAPS_DUAT_WALL_LOOP = "Traps/Duat_wall_loop",
  TRAPS_ELEVATOR_DOWN = "Traps/Elevator_down",
  TRAPS_ELEVATOR_UP = "Traps/Elevator_up",
  TRAPS_GENERATOR_GENERATE = "Traps/Generator_generate",
  TRAPS_GIANTCLAM_CLOSE = "Traps/Giantclam_close",
  TRAPS_GIANTCLAM_OPEN = "Traps/Giantclam_open",
  TRAPS_KALI_ANGERED = "Traps/Kali_angered",
  TRAPS_LASERBEAM_CHARGE = "Traps/Laserbeam_charge",
  TRAPS_LASERBEAM_COLLISION = "Traps/Laserbeam_collision",
  TRAPS_LASERBEAM_END = "Traps/Laserbeam_end",
  TRAPS_LASERBEAM_LOOP = "Traps/Laserbeam_loop",
  TRAPS_LASERTRAP_CHARGE = "Traps/Lasertrap_charge",
  TRAPS_LASERTRAP_TRIGGER = "Traps/Lasertrap_trigger",
  TRAPS_LIONTRAP_ATK = "Traps/Liontrap_atk",
  TRAPS_LIONTRAP_TRIGGER = "Traps/Liontrap_trigger",
  TRAPS_MINE_ACTIVATE = "Traps/Mine_activate",
  TRAPS_MINE_BLINK = "Traps/Mine_blink",
  TRAPS_MINE_DEACTIVATE = "Traps/Mine_deactivate",
  TRAPS_PIPE_LOOP = "Traps/Pipe_loop",
  TRAPS_PLATFORM_BREAK = "Traps/Platform_break",
  TRAPS_PLATFORM_TRIGGER = "Traps/Platform_trigger",
  TRAPS_QUICKSAND_AMB_LOOP = "Traps/Quicksand_amb_loop",
  TRAPS_QUICKSAND_LOOP = "Traps/Quicksand_loop",
  TRAPS_REGENBLOCK_GROW = "Traps/Regenblock_grow",
  TRAPS_SKULLBLOCK_ATK = "Traps/Skullblock_atk",
  TRAPS_SKULLBLOCK_TRIGGER = "Traps/Skullblock_trigger",
  TRAPS_SKULLDROP_DROP = "Traps/Skulldrop_drop",
  TRAPS_SKULLDROP_LOOP = "Traps/Skulldrop_loop",
  TRAPS_SLIDEWALL_STOMP = "Traps/Slidewall_stomp",
  TRAPS_SNAPTRAP_CLOSE = "Traps/Snaptrap_close",
  TRAPS_SNAPTRAP_OPEN = "Traps/Snaptrap_open",
  TRAPS_SPARK_HIT = "Traps/Spark_hit",
  TRAPS_SPARK_LOOP = "Traps/Spark_loop",
  TRAPS_SPEARTRAP_ATK = "Traps/Speartrap_atk",
  TRAPS_SPEARTRAP_TRIGGER = "Traps/Speartrap_trigger",
  TRAPS_SPIKE_BALL_DROP_LOOP = "Traps/Spike_ball_drop_loop",
  TRAPS_SPIKE_BALL_END = "Traps/Spike_ball_end",
  TRAPS_SPIKE_BALL_HIT = "Traps/Spike_ball_hit",
  TRAPS_SPIKE_BALL_RISE_LOOP = "Traps/Spike_ball_rise_loop",
  TRAPS_SPRING_TRIGGER = "Traps/Spring_trigger",
  TRAPS_STICKYTRAP_DROP_LOOP = "Traps/Stickytrap_drop_loop",
  TRAPS_STICKYTRAP_END = "Traps/Stickytrap_end",
  TRAPS_STICKYTRAP_HIT = "Traps/Stickytrap_hit",
  TRAPS_STICKYTRAP_RISE_LOOP = "Traps/Stickytrap_rise_loop",
  TRAPS_STICKYTRAP_WAKE = "Traps/Stickytrap_wake",
  TRAPS_SWITCH_FLICK = "Traps/Switch_flick",
  TRAPS_THINICE_CRACK = "Traps/Thinice_crack",
  TRAPS_TIKI_ATK = "Traps/Tiki_atk",
  TRAPS_TIKI_TRIGGER = "Traps/Tiki_trigger",
  TRAPS_WOODENLOG_CRUSH = "Traps/Woodenlog_crush",
  TRAPS_WOODENLOG_TRIGGER = "Traps/Woodenlog_trigger",
  UI_DAMSEL_KISS = "UI/Damsel_kiss",
  UI_DEPOSIT = "UI/Deposit",
  UI_GET_GEM = "UI/Get_gem",
  UI_GET_GOLD = "UI/Get_gold",
  UI_GET_ITEM1 = "UI/Get_item1",
  UI_GET_ITEM2 = "UI/Get_item2",
  UI_GET_SCARAB = "UI/Get_scarab",
  UI_JOURNAL_ENTRY = "UI/Journal_entry",
  UI_JOURNAL_OFF = "UI/Journal_off",
  UI_JOURNAL_ON = "UI/Journal_on",
  UI_KAPPALA_HEAL = "UI/Kappala_heal",
  UI_NPC_VOCAL = "UI/NPC_vocal",
  UI_PAUSE_MENU_OFF = "UI/Pause_menu_off",
  UI_PAUSE_MENU_ON = "UI/Pause_menu_on",
  UI_SECRET = "UI/Secret",
  UI_SECRET2 = "UI/Secret2",
  UI_TEXT_DESCRIPTION = "UI/Text_description",
  UI_TUNNEL_COUNT = "UI/Tunnel_count",
  UI_TUNNEL_SCROLL = "UI/Tunnel_scroll",
  UI_TUNNEL_TABLET_DOWN = "UI/Tunnel_tablet_down",
  UI_TUNNEL_TABLET_UP = "UI/Tunnel_tablet_up",
  UI_ZOOM_IN = "UI/Zoom_in",
  UI_ZOOM_OUT = "UI/Zoom_out"
}
declare enum VANILLA_SOUND_CALLBACK_TYPE {
  CREATED = 1,
  DESTROYED = 2,
  RESTARTED = 16,
  STARTED = 8,
  START_FAILED = 64,
  STOPPED = 32
}
declare enum VANILLA_SOUND_PARAM {
  ANGER_PROXIMITY = 11,
  ANGER_STATE = 12,
  CAM_DEPTH = 24,
  COLLISION_MATERIAL = 14,
  CURRENT_LAYER2 = 37,
  CURRENT_LEVEL = 35,
  CURRENT_SHOP_TYPE = 36,
  CURRENT_THEME = 34,
  CURSED = 28,
  DIST_CENTER_X = 1,
  DIST_CENTER_Y = 2,
  DIST_PLAYER = 4,
  DIST_Z = 3,
  DM_STATE = 32,
  FAST_FORWARD = 33,
  FIRST_RUN = 23,
  GHOST = 9,
  LIGHTNESS = 16,
  LIQUID_INTENSITY = 7,
  LIQUID_STREAM = 6,
  MONSTER_ID = 19,
  PAGE = 31,
  PLAYER_ACTIVITY = 20,
  PLAYER_CHARACTER = 30,
  PLAYER_CONTROLLED = 29,
  PLAYER_DEPTH = 22,
  PLAYER_LIFE = 21,
  POISONED = 27,
  POS_SCREEN_X = 0,
  RESTLESS_DEAD = 25,
  SIZE = 17,
  SPECIAL_MACHINE = 26,
  SUBMERGED = 5,
  TORCH_PROXIMITY = 13,
  TRIGGER = 10,
  TYPE_ID = 18,
  VALUE = 8,
  VELOCITY = 15
}
declare enum VANILLA_TEXT_ALIGNMENT {
  CENTER = 1,
  LEFT = 0,
  RIGHT = 2
}
declare enum WIN_STATE {
  COSMIC_OCEAN_WIN = 3,
  HUNDUN_WIN = 2,
  NO_WIN = 0,
  TIAMAT_WIN = 1
}
declare enum YANG {
  ANGRY = -1,
  BOTH_TURKEYS_DELIVERED = 3,
  ONE_TURKEY_BOUGHT = 5,
  QUEST_NOT_STARTED = 0,
  THREE_TURKEYS_BOUGHT = 7,
  TURKEY_PEN_SPAWNED = 2,
  TURKEY_SHOP_SPAWNED = 4,
  TWO_TURKEYS_BOUGHT = 6
}
declare const MAX_PLAYERS: number // 4
declare type in_port_t = number
declare class Logic {}
declare class UdpServer {
    constructor(host: string, port: in_port_t, cb: Callback);
    host: string;
    port: in_port_t;
    cb: Callback;
    sock: any;
}
type IMAGE = number
declare class Texture
{
    id: TEXTURE;
    name: string;
    width: number;
    height: number;
    num_tiles_width: number;
    num_tiles_height: number;
    offset_x_weird_math: number;
    offset_y_weird_math: number;
    tile_width_fraction: number;
    tile_height_fraction: number;
    tile_width_minus_one_fraction: number;
    tile_height_minus_one_fraction: number;
    one_over_width: number;
    one_over_height: number;
}
declare class SpearDanglerAnimFrames
{
    column: number;
    row: number;
}
declare class OnlineLobbyScreenPlayer
{
    unknown1: number;
    character: number;
    ready: boolean;
    unknown2: number;
}
declare class OnlinePlayerShort
{
    unknown1: number;
    unknown2: number;
    unknown3: number;
    unknown4: number;
    unknown5: number;
    ready_state: number;
    character: number;
    player_name: string; //[33] this smells fishy... why fewer chars available for local name, but leave at 37 for the player structs?
}
//## Aliases
//We use those to clarify what kind of values can be passed and returned from a function, even if the underlying type is really just an integer or a string. This should help to avoid bugs where one would for example just pass a random integer to a function expecting a callback id.
type CallbackId = number;
type Flags = number;
type uColor = number;
type SHORT_TILE_CODE = number;
type STRINGID = number;
//## External Function Library
//If you use a text editor/IDE that has a Lua linter available you can download [spel2.lua](https://raw.githubusercontent.com/spelunky-fyi/overlunky/main/docs/game_data/spel2.lua), place it in a folder of your choice and specify that folder as a "external function library". For example [VSCode](https://code.visualstudio.com/) with the [Lua Extension](https://marketplace.visualstudio.com/items?itemName=sumneko.lua) offers this feature. This will allow you to get auto-completion of API functions along with linting
