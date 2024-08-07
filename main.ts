namespace SpriteKind {
    export const Sentry = SpriteKind.create()
    export const Dispenserkind = SpriteKind.create()
    export const Engineer = SpriteKind.create()
}
namespace StatusBarKind {
    export const Medhealth = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.Engineer, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))) {
        Statusbar2.value += randint(-10, -45)
    } else {
        statusbar4.value += randint(-10, -45)
    }
    sprites.destroy(otherSprite)
    Enemies += -1
})
function _4hpbars () {
    statusbar6 = statusbars.create(40, 4, StatusBarKind.Energy)
    statusbar6.setColor(14, 12)
    statusbar6.max = 100
    statusbar6.value = statusbar6.max
    statusbar6.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)))
}
function Setplayer3 () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(img`
        ..................
        ..........f.......
        .....fffff........
        .....ddfdd........
        .....dd8d8........
        .....ddddd........
        .....ddddd........
        .....dddff........
        ...e111211e11.....
        .11e111211e11.....
        .11e111111e11.....
        .11e111111e11.....
        .11e111111e11.....
        .11e111111e11.....
        .11e111111e11.....
        .11e111111e11.....
        .11e111111e11.....
        .11e111111e11..ff.
        .222211111e22..ff.
        ..222fffff222ffff.
        ..f22ffffff22ffff.
        ..fffffffffffffff.
        ..ffeee11eee1..ff.
        ..11eee11eee1..ff.
        ..11eee11eee1.....
        ..11eee11eee1.....
        ..11eee11eee1.....
        ..11eee..eee1.....
        ..11eee..eee1.....
        ....efe..efe......
        .....f....f.......
        .....fff..fff.....
        `, SpriteKind.Player))
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera3, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)))
    splitScreen.setCameraRegion(splitScreen.Camera.Camera2, splitScreen.CameraRegion.BottomLeft)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera3, splitScreen.CameraRegion.BottomRight)
    _3hpbars()
    controller.player3.moveSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), 50, 15)
    tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), assets.tile`tile12`)
}
scene.onOverlapTile(SpriteKind.Engineer, assets.tile`tile14`, function (sprite, location) {
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))) {
        statusbar.value += statusbar.max
    } else {
        statusbar3.value += statusbar3.max
    }
})
controller.player4.onEvent(ControllerEvent.Connected, function () {
    setplayer4()
})
controller.player3.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    projectile5 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . 2 . 2 f 1 f 1 2 . . . . . 
        . . . 2 1 2 1 1 1 1 2 1 1 . . . 
        . . . 2 . 2 1 f 1 f 2 . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), 120, 0)
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (statusbar3.value > 0) {
        projectile4 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 100, 0)
        statusbar3.value += -1
    }
})
controller.player4.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    projectile3 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), 100, 0)
    projectile3.y += 5
})
function Hpbar () {
    Statusbar2 = statusbars.create(60, 6, StatusBarKind.Energy)
    Statusbar2.setBarBorder(1, 13)
    Statusbar2.positionDirection(CollisionDirection.Bottom)
    Statusbar2.max = 150
    Statusbar2.value = Statusbar2.max
}
mp.onControllerEvent(ControllerEvent.Disconnected, function (player2) {
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Dispenserkind, function (sprite, otherSprite) {
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three))) {
        statusbar5.value += 50
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
    } else {
        statusbar6.value += 50
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (statusbar3.value > 99) {
        sprites.destroy(minisentry, effects.fire, 1000)
        minisentry = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . c 2 2 2 . . . . . . 
            . . . . . . c 2 2 2 c . . . . . 
            . . . . . . . b 2 . . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . b . . b . . . . . . 
            `, SpriteKind.Sentry)
        miniup = 1
        statusbar3.value += -100
        scaling.scaleToPixels(minisentry, 28, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        minisentry.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y)
    }
})
function Tutorial2 () {
    game.splash("Basic controls")
    game.splash("Up down left right is", "Up, down, left, right")
    game.splash("A: Main Action", "B: Extra Action")
    game.splash("Mutliple players can play", "Connect to join")
    game.splash("Each player has", "Different weapons")
    tiles.setCurrentTilemap(tilemap`level3`)
    scene.setBackgroundColor(7)
    tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), assets.tile`tile12`)
    tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), assets.tile`tile12`)
    tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), assets.tile`tile12`)
    tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), assets.tile`tile12`)
}
function _2hpbars () {
    statusbar4 = statusbars.create(40, 4, StatusBarKind.Energy)
    statusbar4.setColor(10, 0)
    Statusbar2.setBarBorder(0, 13)
    statusbar4.max = 130
    statusbar4.value = statusbar4.max
    Statusbar2.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
    Statusbar2.positionDirection(CollisionDirection.Top)
    Statusbar2.setBarSize(40, 4)
    statusbar4.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
}
controller.player3.onEvent(ControllerEvent.Connected, function () {
    Setplayer3()
})
function _2metalbars () {
    statusbar3 = statusbars.create(20, 2, StatusBarKind.Magic)
    statusbar3.max = 125
    statusbar3.value = statusbar.max
    statusbar.positionDirection(CollisionDirection.Top)
    statusbar.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
    statusbar.setBarSize(20, 2)
    statusbar3.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile11`, function (sprite, location) {
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three))) {
        statusbar5.value += statusbar5.max
    } else if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four))) {
        statusbar6.value += statusbar6.max
    }
})
function Setplayer2 () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
        ................
        .....444444.....
        ....44455544....
        ...444555554....
        ...445555554....
        ...455555554....
        ...4ffffffff....
        ...bbddffdff....
        ....bbdddddb....
        .....2bbdddb....
        .....22bbdb.....
        ....e2222b22....
        ...22e222222e...
        ...222e22222e2..
        ...222e22222e2..
        ...222e22222e2..
        ...2222e2eee22..
        ..cc2222eeee2b..
        ..ccceebbbeedb..
        ..cccbbbebeddb..
        ..bbbeebbbeddb..
        ..bbbeeeeeeebb..
        ....beeeeeeeeb..
        .....eeeeeeee...
        .....eeeeeeee...
        .....eee..eee...
        .....e51..e51...
        .....e55..e55...
        .....e55..e55...
        .....eee..eee...
        .....e44..e44...
        .....4444444444.
        `, SpriteKind.Engineer))
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
    splitScreen.setCameraRegion(splitScreen.Camera.Camera1, splitScreen.CameraRegion.HorizontalTopHalf)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
    splitScreen.setCameraRegion(splitScreen.Camera.Camera2, splitScreen.CameraRegion.HorizontalBottomHalf)
    controller.player2.moveSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 42, 12)
    tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), assets.tile`tile12`)
    _2hpbars()
    _2metalbars()
}
function SetPlayer () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
        ................
        .....444444.....
        ....44455544....
        ...444555554....
        ...445555554....
        ...455555554....
        ...4ffffffff....
        ...bbddffdff....
        ....bbdddddb....
        .....2bbdddb....
        .....22bbdb.....
        ....e2222b22....
        ...22e222222e...
        ...222e22222e2..
        ...222e22222e2..
        ...222e22222e2..
        ...2222e2eee22..
        ..552222eeee2b..
        ..555eebbbeedb..
        ..555bbbebeddb..
        ..5555ebbbeddb..
        ..5555eeeeeebb..
        ...55eeeeeeeeb..
        .....eeeeeeee...
        .....eeeeeeee...
        .....eee..eee...
        .....e51..e51...
        .....e55..e55...
        .....e55..e55...
        .....eee..eee...
        .....e44..e44...
        .....4444444444.
        `, SpriteKind.Engineer))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 40, 25)
    tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), assets.tile`tile12`)
    scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (!(sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)))) {
        if (otherSprite == projectile2) {
            statusbar5.value += 20
            statusbar6.value += 25
            sprites.destroy(otherSprite)
        }
    }
})
function SpawnBigBoi () {
    mySprite6 = sprites.create(img`
        . . . . . . c c c c c . . . . . 
        . . . . . . c 8 c 8 c . . . . . 
        . . . . . . c c c c c . . . . . 
        . . . . . . c 8 8 8 c . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . 8 c c c 8 . . . . . 
        . . . c 8 b 8 c c c 8 b 8 c . . 
        . . . 8 c . . . b . . . c 8 . . 
        . . . b . . 8 c c c 8 . . b . . 
        . . . 8 c . 8 c c c 8 . c 8 . . 
        . . . c 8 . . b . b . . 8 c . . 
        . . . . . . 8 c b c 8 . . . . . 
        . . . . . . c 8 . 8 c . . . . . 
        . . . . . . . b . . b . . . . . 
        . . . . . . c 8 . c 8 . . . . . 
        . . . . . 8 c c 8 c c . . . . . 
        `, SpriteKind.Enemy)
    scaling.scaleToPixels(mySprite6, 40, ScaleDirection.Horizontally, ScaleAnchor.Middle)
    tiles.placeOnRandomTile(mySprite6, assets.tile`tile15`)
}
sprites.onOverlap(SpriteKind.Engineer, SpriteKind.Dispenserkind, function (sprite, otherSprite) {
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))) {
        statusbar.value += 60
        Statusbar2.value += 50
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
    } else {
        statusbar3.value += 60
        statusbar4.value += 50
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
    }
})
function _3hpbars () {
    statusbar5 = statusbars.create(40, 4, StatusBarKind.Energy)
    statusbar5.setColor(9, 1)
    statusbar5.max = 60
    statusbar5.value = statusbar5.max
    statusbar5.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)))
}
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    projectile3 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), 75, -16)
    projectile3.y += 5
    projectile3 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), 78, -8)
    projectile3.y += 5
    projectile3 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), 80, 0)
    projectile3.y += 5
    projectile3 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), 78, 8)
    projectile3.y += 5
    projectile3 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), 75, 16)
    projectile3.y += 5
})
info.onLifeZero(function () {
    info.setScore(0)
    info.setLife(3)
    game.splash("You Failed", "Try again")
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Sentry)
    sprites.destroy(Dispenser)
    tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), assets.tile`tile12`)
    tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), assets.tile`tile12`)
    tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), assets.tile`tile12`)
    tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), assets.tile`tile12`)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (statusbar.value > 129) {
        sprites.destroy(sentrygun, effects.fire, 1000)
        sentrygun = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . c c 2 c c 2 . . . . . 
            . . . . . b b 2 c c c c . . . . 
            . . . . . 2 2 2 c c 2 . . . . . 
            . . . . . . . b 2 . . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . b . . b . . . . . . 
            . . . . . b b . . b b . . . . . 
            `, SpriteKind.Sentry)
        Sentryup = 1
        statusbar.value += -130
        scaling.scaleToPixels(sentrygun, 32, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        sentrygun.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y)
    }
})
sprites.onOverlap(SpriteKind.Engineer, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (otherSprite == projectile2) {
        if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))) {
            Statusbar2.value += 60
            statusbar5.value += 25
            sprites.destroy(otherSprite)
        } else {
            statusbar4.value += 60
            statusbar5.value += 25
            sprites.destroy(otherSprite)
        }
    }
})
info.onScore(500, function () {
    Bigboi = 1
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), 60, 0)
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    Setplayer2()
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (statusbar.value > 99) {
        sprites.destroy(Dispenser, effects.fire, 1000)
        Dispenser = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . b b b b . . 1 . . . . 
            . . . . c 2 2 2 2 c 2 . . . . . 
            . . . . b 1 4 4 1 2 2 . . . . . 
            . . . . b d 4 4 4 1 1 . . . . . 
            . . . b b 4 d 4 4 2 2 . . . . . 
            . . . . c 2 2 2 2 c 2 . . . . . 
            . . . . . 2 2 2 2 . . . . . . . 
            . . . . . 2 2 2 2 . . . . . . . 
            . . . . . b b b b . . . . . . . 
            `, SpriteKind.Dispenserkind)
        statusbar.value += -100
        scaling.scaleToPixels(Dispenser, 36, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        Dispenser.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y)
    }
})
function Metalbar () {
    Sentryup = 0
    statusbar = statusbars.create(30, 3, StatusBarKind.Magic)
    statusbar.positionDirection(CollisionDirection.Bottom)
    statusbar.max = 200
    statusbar.value = 200
}
function spawnenemy () {
    MySprite3 = sprites.create(img`
        . . . . . . c c c c c . . . . . 
        . . . . . . c 8 c 8 c . . . . . 
        . . . . . . c c c c c . . . . . 
        . . . . . . c 8 8 8 c . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . 8 c c c 8 . . . . . 
        . . . c 8 b 8 c c c 8 b 8 c . . 
        . . . 8 c . . . b . . . c 8 . . 
        . . . b . . 8 c c c 8 . . b . . 
        . . . 8 c . 8 c c c 8 . c 8 . . 
        . . . c 8 . . b . b . . 8 c . . 
        . . . . . . 8 c b c 8 . . . . . 
        . . . . . . c 8 . 8 c . . . . . 
        . . . . . . . b . . b . . . . . 
        . . . . . . c 8 . c 8 . . . . . 
        . . . . . 8 c c 8 c c . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(MySprite3, assets.tile`tile15`)
}
scene.onOverlapTile(SpriteKind.Engineer, assets.tile`tile11`, function (sprite, location) {
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))) {
        Statusbar2.value += Statusbar2.max
    } else if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two))) {
        statusbar4.value += statusbar4.max
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (otherSprite == projectile4) {
        statusbar.value += 2
        Statusbar2.value += 1
    }
    if (otherSprite == projectile5) {
        Statusbar2.value += 5
    }
    sprites.destroy(sprite, effects.trail, 100)
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    info.changeScoreBy(randint(1, 5))
    Enemies += -1
})
function setplayer4 () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(img`
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        .......bee........
        .......beeee......
        .......4df........
        .......dddc.......
        .......dd.........
        .....df22d........
        .....d2f22d.......
        .....d22f2d.......
        .....d222fd.......
        .....d22ceeeee....
        .....dddccedd.....
        .....ccc22........
        ......eeeb........
        ......ffff........
        ......fffff.......
        ......fffff.......
        ......ff.ff.......
        ......1..1........
        ......1.1.........
        ......f.f.........
        ......bfbff.......
        `, SpriteKind.Player))
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera4, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)))
    splitScreen.setCameraRegion(splitScreen.Camera.Camera1, splitScreen.CameraRegion.TopLeft)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera2, splitScreen.CameraRegion.TopRight)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera3, splitScreen.CameraRegion.BottomLeft)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera4, splitScreen.CameraRegion.BottomRight)
    _4hpbars()
    controller.player4.moveSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), 65, 20)
    scaling.scaleToPixels(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), 45, ScaleDirection.Vertically, ScaleAnchor.Middle)
    scaling.scaleToPixels(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), 32, ScaleDirection.Horizontally, ScaleAnchor.Middle)
    tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), assets.tile`tile12`)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three))) {
        statusbar5.value += randint(-10, -45)
        sprites.destroy(otherSprite)
    } else {
        statusbar6.value += randint(-10, -45)
        sprites.destroy(otherSprite)
    }
    Enemies += -1
})
// If you are using Splitscreens in anyway, use this https://github.com/riknoll/arcade-split-screen.git
let projectile: Sprite = null
let MySprite3: Sprite = null
let Bigboi = 0
let Sentryup = 0
let sentrygun: Sprite = null
let Dispenser: Sprite = null
let mySprite6: Sprite = null
let projectile2: Sprite = null
let miniup = 0
let minisentry: Sprite = null
let statusbar5: StatusBarSprite = null
let projectile3: Sprite = null
let projectile4: Sprite = null
let projectile5: Sprite = null
let statusbar3: StatusBarSprite = null
let statusbar: StatusBarSprite = null
let statusbar6: StatusBarSprite = null
let statusbar4: StatusBarSprite = null
let Statusbar2: StatusBarSprite = null
SetPlayer()
Hpbar()
Metalbar()
let Enemies = 0
info.setLife(3)
info.setScore(0)
game.splash("TF2D", "An Engineer's Problem")
let Tutorial = 1
Tutorial2()
let number = scene.aStar(tiles.getTileLocation(14, 6), tiles.getTileLocation(1, 6))
music.setVolume(128)
game.onUpdateInterval(2500, function () {
    if (Sentryup == 1) {
        if (statusbar.value > 7) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . 5 b 2 2 . . . . . . . . 
                . . . 5 5 c c c . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, sentrygun, 80, 0)
            statusbar.value += -8
            music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.InBackground)
        }
    }
})
forever(function () {
    if (!(info.score() == 50 && Tutorial == 1)) {
        music.play(music.createSong(hex`0064000408050500001c00010a006400f401640000040000000000000000000000000005000004c00004000800011d0c001000011d14001800011d18001c00011b1c002000011920002400011924002800011828002c0001192c003000011e30003400011d38003c00011e3c004000011e44004800011e48004c00011e50005400011d54005800011b5c006000011e60006400011e64006800011d68006c00011b6c007000011e70007400012078007c0001207c008000012080008400011e84008800011e88008c00011e8c009000012290009400011e94009800011e98009c00011d9c00a000011b06001c00010a006400f401640000040000000000000000000000000000000002060008000c00012407001c00020a006400f40164000004000000000000000000000000000000000306000c001000012408001c000e050046006603320000040a002d0000006400140001320002010002c10004000800021b240c001000011b14001800011b18001c0001191c002000011820002400011824002800011628002c0001182c003000011d30003400011b38003c00011d3c004000011d44004800011d48004c00011d50005400011b5400580001195c006000011d60006400011d64006800011b68006c0001196c007000011d70007400011e78007c00011e7c008000011e80008400011d84008800011d88008c00011d8c009000012090009400011d94009800011d98009c00011b9c00a000011909010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800780002000300010a0a000b00010a12001300010a1a001b00010a22002300010a2a002b00010a32003300010a3a003b00010a42004300010a4a004b00010a52005300010a5a005b00010a62006300010a6a006b00010a72007300010a7a007b00010a82008300010a8a008b00010a92009300010a9a009b00010a`), music.PlaybackMode.UntilDone)
    } else {
        music.stopAllSounds()
        music.play(music.stringPlayable("F A - E - A G - ", 180), music.PlaybackMode.UntilDone)
    }
})
forever(function () {
    if (info.score() > 1000 && Tutorial == 0) {
        game.gameOver(true)
    }
    if (info.score() > 50 && Tutorial == 1) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        sprites.destroyAllSpritesOfKind(SpriteKind.Sentry)
        sprites.destroy(Dispenser)
        Sentryup = 0
        miniup = 0
        game.splash("You have completed", "The Tutorial")
        game.splash("Now you have to", "Defeat real bots")
        tiles.setCurrentTilemap(tilemap`level5`)
        scene.setBackgroundColor(6)
        tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), assets.tile`tile12`)
        tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), assets.tile`tile12`)
        tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), assets.tile`tile12`)
        tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), assets.tile`tile12`)
        info.setScore(0)
        Tutorial = 0
        game.splash("Here is the map", "Good Luck!")
    }
})
forever(function () {
    if (miniup == 1) {
        if (statusbar3.value > 0) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 2 2 2 2 . . . . . . 
                `, minisentry, 50, 0)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 2 2 2 2 . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, minisentry, 45, 0)
            statusbar3.value += -1
            music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        }
    }
})
forever(function () {
    if (Sentryup == 1) {
        if (statusbar.value > 0) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 2 2 2 2 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, sentrygun, 50, 0)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 2 2 2 2 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, sentrygun, 45, 0)
            statusbar.value += -2
            music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
        }
    }
})
forever(function () {
    if (Statusbar2.value < 1) {
        info.changeLifeBy(-1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        sprites.destroy(sentrygun)
        Sentryup = 0
        miniup = 0
        sprites.destroyAllSpritesOfKind(SpriteKind.Dispenserkind, effects.halo, 500)
        tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), assets.tile`tile12`)
        statusbar.value = statusbar.max
        Statusbar2.value = Statusbar2.max
    }
    if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
        if (statusbar4.value < 1) {
            info.changeLifeBy(-1)
            tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), assets.tile`tile12`)
            statusbar3.value = statusbar3.max
            statusbar4.value = statusbar4.max
        }
        statusbar.value += 200
    }
    if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Three))) {
        if (statusbar5.value < 1) {
            info.changeLifeBy(-1)
            tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), assets.tile`tile12`)
            statusbar5.value = statusbar5.max
        }
        statusbar.value += 200
    }
    if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Four))) {
        if (statusbar6.value < 1) {
            info.changeLifeBy(-1)
            tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), assets.tile`tile12`)
            statusbar6.value = statusbar6.max
        }
        statusbar.value += 200
    }
})
game.onUpdateInterval(randint(750, 2500), function () {
    if (Enemies < 10) {
        for (let index = 0; index < randint(1, 3); index++) {
            spawnenemy()
            MySprite3.vx = -18
            Enemies += 1
        }
    }
})
game.onUpdateInterval(randint(1000, 4000), function () {
    if (Enemies < 10) {
        if (Bigboi == 1) {
            for (let index = 0; index < randint(1, 2); index++) {
                SpawnBigBoi()
                mySprite6.vx = -10
                Enemies += 1
            }
        }
    }
})
