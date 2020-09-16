scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    game.over(true)
})
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement(true)
myCorg.updateSprite()
myCorg.follow()
tiles.setTilemap(tiles.createTilemap(hex`1e00080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000002010000000002010000000000000000000000000000000a000002010300000800000800000000000005000005000000000000000009000000000000000800000800000000000203000008000009000000000201010101010306070706070201030607020103060709060708070607020101`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 . . . . 2 2 . . . . . . . . . . . . . . . . 
    . . 2 2 2 . . 2 . . 2 . . . . . . 2 . . 2 . . . . . . . . 2 
    . . . . . . . 2 . . 2 . . . . . 2 2 . . 2 . . 2 . . . . 2 2 
    2 2 2 2 2 . . . . . 2 2 2 . . 2 2 2 . . 2 . . 2 . . . 2 2 2 
    `, [myTiles.transparency16,sprites.builtin.forestTiles2,sprites.builtin.forestTiles1,sprites.builtin.forestTiles3,sprites.castle.rock1,sprites.castle.rock0,sprites.dungeon.hazardLava0,sprites.dungeon.hazardLava1,sprites.builtin.forestTiles12,sprites.builtin.forestTiles4,sprites.dungeon.chestOpen], TileScale.Sixteen))
