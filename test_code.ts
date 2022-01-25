set_callback(() => {
    print("levelgen")
}, ON.POST_LEVEL_GENERATION)
print("123")
let player = players[0]
player.inventory.bombs = 99
player.destroy()