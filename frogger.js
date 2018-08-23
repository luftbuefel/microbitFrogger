let car2Speed = 0
let car1Speed = 0
let car3: game.LedSprite = null
let car1StartTime = 0
let car2: game.LedSprite = null
let car1: game.LedSprite = null
let frog: game.LedSprite = null
input.onButtonPressed(Button.A, () => {
    frog.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, () => {
    frog.change(LedSpriteProperty.Y, -1)
})
frog = game.createSprite(2, 4)
car1 = game.createSprite(0, 1)
car2 = game.createSprite(4, 2)
car3 = game.createSprite(0, 3)
car1Speed = 750
car1StartTime = input.runningTime()
car2Speed = 1000
basic.forever(() => {
    if (frog.get(LedSpriteProperty.Y) == 0) {
        game.addScore(1)
        music.beginMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
        frog.set(LedSpriteProperty.Y, 4)
    }
    if (input.runningTime() - car1StartTime >= car1Speed) {
        car1StartTime = input.runningTime()
        if (car1.get(LedSpriteProperty.X) < 4) {
            car1.change(LedSpriteProperty.X, 1)
        } else {
            car1.set(LedSpriteProperty.X, 0)
        }
    }
})
