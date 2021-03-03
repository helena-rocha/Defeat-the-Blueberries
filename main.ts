controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 5 . . . . . . . . . 2 . . . 
        . . . 5 . . . . . . . . 2 2 . . 
        . . . . d d d d d d d d 2 2 2 . 
        . . . 5 . . . . . . . . 2 2 . . 
        . . 5 . . . . . . . . . 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, sprite, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.spray, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let projectile: Sprite = null
let sprite: Sprite = null
sprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 2 2 7 7 7 7 7 2 2 2 . . . 
    . . 2 2 7 7 7 7 7 7 7 2 2 2 . . 
    . 2 2 7 7 7 7 2 2 7 7 7 2 2 2 . 
    . . 2 2 7 f f 2 f f 7 2 2 2 . . 
    . . 2 2 2 1 f 2 f 1 2 2 2 2 . . 
    . . . 2 3 2 2 2 2 2 3 2 2 . . . 
    . . . d 2 2 2 f 2 2 2 2 d . . . 
    . . . d 2 2 2 2 2 2 2 2 d . . . 
    . . . d d 2 2 2 2 2 2 d d . . . 
    . . . d d 2 2 2 2 2 2 d d . . . 
    . . . d d d 2 2 2 2 d d d . . . 
    . . . 2 4 . . 2 2 . . 4 2 . . . 
    . . . 5 4 . . . . . . 4 5 . . . 
    `, SpriteKind.Player)
controller.moveSprite(sprite, 200, 200)
sprite.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    bogey = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . d . . . . . . d . . . . 
        . . . d . d . . . . d . d . . . 
        . . . . . . d 8 8 d . . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . 8 8 f 8 8 8 f 8 . . . . 
        . . . . 8 8 8 f 8 f 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . . 8 2 2 2 2 8 . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.left = scene.screenWidth()
    bogey.y = randint(0, scene.screenHeight())
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
