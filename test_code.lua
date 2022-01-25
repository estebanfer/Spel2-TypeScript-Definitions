--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
set_callback(
    function()
        print("levelgen")
    end,
    ON.POST_LEVEL_GENERATION
)
print("123")
player = players[1]
player.inventory.bombs = 99
player:destroy()
