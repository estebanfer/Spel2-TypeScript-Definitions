//Both ways of using meta work
meta.name = "typescript mod test"
meta.author = "Estebanfer"
meta.version = "1.0"
meta.description = "testing if everything works"

meta = {
    name: "typescript mod test",
    author: "Estebanfer",
    version: "1.0",
    description: "testing if everything works"
}

set_callback(() => {
    messpect("levelgen", options.thing)
    players[0].inventory.bombs = 99
    let turkey_uids = get_entities_by_type(ENT_TYPE.MOUNT_TURKEY)
    for (let turkey_uid of turkey_uids) {
        (get_entity(turkey_uid) as Mount).tame(true)
    }
}, ON.POST_LEVEL_GENERATION)

//functions in TS always have a self parameter, check https://typescripttolua.github.io/docs/the-self-parameter
//you can also use /** @noSelfInFile */ at start of file to remove it from all functions
function spawn_punishball(this: void, x: number, y: number, layer: number) {
    spawn_on_floor(ENT_TYPE.ITEM_PUNISHBALL, x, y, layer)
}

/** @noSelf */
function valid_punishball_spawn(x: number, y: number, layer: number) {
    return get_grid_entity_at(x, y, layer) == -1
}

let punishball_chance = define_procedural_spawn("punishball", spawn_punishball, valid_punishball_spawn)

set_callback((room_gen_ctx: PostRoomGenerationContext) => {
    room_gen_ctx.set_procedural_spawn_chance(punishball_chance, 20)
}, ON.POST_ROOM_GENERATION)

set_callback((render_ctx: VanillaRenderContext, draw_depth: number) => {
    if (draw_depth == 5) {
        let [x, y] = get_position(players[0].uid)
        //let x: number = pos[0]
        render_ctx.draw_world_texture(TEXTURE.DATA_TEXTURES_ITEMS_0, 1, 1, AABB.new(x-0.5, y+0.5, x+0.5, y-0.5), Color.white())
    }
}, ON.RENDER_PRE_DRAW_DEPTH)
//overloaded functions work
get_entities_by([ENT_TYPE.ACTIVEFLOOR_BOULDER, ENT_TYPE.ACTIVEFLOOR_BUSHBLOCK], MASK.ANY, LAYER.FRONT)
get_entities_by(ENT_TYPE.FLOOR_GENERIC, MASK.ANY, LAYER.FRONT)

//testing options
register_option_int("thing", "number", "", 0, 0, 20)