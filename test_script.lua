--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
meta.name = "typescript mod test"
meta.author = "Estebanfer"
meta.version = "1.0"
meta.description = "testing if everything works"
meta = {name = "typescript mod test", author = "Estebanfer", version = "1.0", description = "testing if everything works"}
set_callback(
    function()
        messpect("levelgen", options.thing)
        players[1].inventory.bombs = 99
        local turkey_uids = get_entities_by_type(ENT_TYPE.MOUNT_TURKEY)
        for ____, turkey_uid in ipairs(turkey_uids) do
            get_entity(turkey_uid):tame(true)
        end
    end,
    ON.POST_LEVEL_GENERATION
)
function spawn_punishball(x, y, layer)
    spawn_on_floor(ENT_TYPE.ITEM_PUNISHBALL, x, y, layer)
end
function valid_punishball_spawn(x, y, layer)
    return get_grid_entity_at(x, y, layer) == -1
end
punishball_chance = define_procedural_spawn("punishball", spawn_punishball, valid_punishball_spawn)
set_callback(
    function(room_gen_ctx)
        room_gen_ctx:set_procedural_spawn_chance(punishball_chance, 20)
    end,
    ON.POST_ROOM_GENERATION
)
set_callback(
    function(render_ctx, draw_depth)
        if draw_depth == 5 then
            local x, y = get_position(players[1].uid)
            render_ctx:draw_world_texture(
                TEXTURE.DATA_TEXTURES_ITEMS_0,
                1,
                1,
                AABB:new(x - 0.5, y + 0.5, x + 0.5, y - 0.5),
                Color:white()
            )
        end
    end,
    ON.RENDER_PRE_DRAW_DEPTH
)
get_entities_by({ENT_TYPE.ACTIVEFLOOR_BOULDER, ENT_TYPE.ACTIVEFLOOR_BUSHBLOCK}, MASK.ANY, LAYER.FRONT)
get_entities_by(ENT_TYPE.FLOOR_GENERIC, MASK.ANY, LAYER.FRONT)
register_option_int(
    "thing",
    "number",
    "",
    0,
    0,
    20
)
