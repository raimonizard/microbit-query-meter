input.onButtonPressed(Button.A, function () {
    asking_students += 1
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
    basic.showString("" + (asking_students))
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showString("students: ")
    basic.showString("" + (asking_students))
    basic.clearScreen()
    basic.showString("questions: ")
    basic.showString("" + (questions))
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    questions += 1
    music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . # # # .
        # . . # .
        . . # . .
        . . . . .
        . . # . .
        `)
    basic.clearScreen()
    basic.showString("" + (questions))
    basic.clearScreen()
})
let questions = 0
let asking_students = 0
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
asking_students = 0
questions = 0
basic.showString("Query meter!")
basic.clearScreen()
