def on_b_pressed():
    global MySprite3
    sprites.destroy(MySprite3, effects.fire, 1000)
    MySprite3 = sprites.create(img("""
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
        """),
        SpriteKind.player)
    scaling.scale_to_pixels(MySprite3, 36, ScaleDirection.UNIFORMLY, ScaleAnchor.MIDDLE)
    MySprite3.set_position(mySprite.x, mySprite.y)
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_a_pressed():
    global mySprite2
    sprites.destroy(mySprite2, effects.fire, 1000)
    mySprite2 = sprites.create(img("""
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
        """),
        SpriteKind.player)
    scaling.scale_to_pixels(mySprite2, 32, ScaleDirection.UNIFORMLY, ScaleAnchor.MIDDLE)
    mySprite2.set_position(mySprite.x, mySprite.y)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

projectile: Sprite = None
mySprite2: Sprite = None
MySprite3: Sprite = None
mySprite: Sprite = None
statusbar = statusbars.create(15, 2, StatusBarKind.magic)
statusbar.position_direction(CollisionDirection.BOTTOM)
statusbar.max = 200
statusbar.value = 200
scene.set_background_color(7)
tiles.set_current_tilemap(tilemap("""
    level1
"""))
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(mySprite, 40, 0)
tiles.place_on_random_tile(mySprite, assets.tile("""
    myTile
"""))
scene.camera_follow_sprite(mySprite)

def on_forever():
    global projectile
    projectile = sprites.create_projectile_from_sprite(img("""
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
        """),
        mySprite2,
        40,
        0)
    pause(200)
forever(on_forever)
