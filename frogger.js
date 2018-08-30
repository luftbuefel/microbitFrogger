let car3Speed = 0
let car3StartTime = 0
let car2Speed = 0
let car2StartTime = 0
let car1Speed = 0
let car1StartTime = 0
let car3: game.LedSprite = null
let car2: game.LedSprite = null
let car1: game.LedSprite = null
let Frog: game.LedSprite = null
input.onButtonPressed(Button.A, () => {
    Frog.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, () => {
    Frog.change(LedSpriteProperty.Y, -1)
})
function checking_for_collisions() {
    if (Frog.get(LedSpriteProperty.X) == car1.get(LedSpriteProperty.X) && Frog.get(LedSpriteProperty.Y) == car1.get(LedSpriteProperty.Y)) {
        GAME_OVER()
    } else if (Frog.get(LedSpriteProperty.X) == car2.get(LedSpriteProperty.X) && Frog.get(LedSpriteProperty.Y) == car2.get(LedSpriteProperty.Y)) {
        GAME_OVER()
    } else if (Frog.get(LedSpriteProperty.X) == car3.get(LedSpriteProperty.X) && Frog.get(LedSpriteProperty.Y) == car3.get(LedSpriteProperty.Y)) {
        GAME_OVER()
    }
}
function GAME_OVER() {
    music.beginMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
    game.gameOver()
}
Frog = game.createSprite(2, 4)
car1 = game.createSprite(0, 1)
car2 = game.createSprite(4, 2)
car3 = game.createSprite(0, 3)
car1StartTime = input.runningTime()
car1Speed = Math.random(501) + 500
car2StartTime = input.runningTime()
car2Speed = Math.random(501) + 500
car3StartTime = input.runningTime()
car3Speed = Math.random(501) + 500
basic.forever(() => {
    checking_for_collisions()
    if (input.acceleration(Dimension.X) > 750) {
        Frog.change(LedSpriteProperty.X, 1)
    }
    if (input.acceleration(Dimension.X) < -750) {
        Frog.change(LedSpriteProperty.X, -1)
    }
    if (Frog.get(LedSpriteProperty.Y) == 0) {
        game.addScore(1)
        music.beginMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
        Frog.set(LedSpriteProperty.Y, 4)
    }
    if (input.runningTime() - car1StartTime >= car1Speed) {
        car1StartTime = input.runningTime()
        if (car1.get(LedSpriteProperty.X) < 4) {
            car1.change(LedSpriteProperty.X, 1)
        } else {
            car1.set(LedSpriteProperty.X, 0)
        }
    }
    if (input.runningTime() - car2StartTime >= car2Speed) {
        car2StartTime = input.runningTime()
        if (car2.get(LedSpriteProperty.X) > 0) {
            car2.change(LedSpriteProperty.X, -1)
        } else {
            car2.set(LedSpriteProperty.X, 4)
        }
    }
    if (input.runningTime() - car3StartTime >= car3Speed) {
        car3StartTime = input.runningTime()
        if (car3.get(LedSpriteProperty.X) < 4) {
            car3.change(LedSpriteProperty.X, 1)
        } else {
            car3.set(LedSpriteProperty.X, 0)
        }
    }
})
