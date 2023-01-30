let manito = 0
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    manito = randint(1, 3)
    if (manito == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        basic.pause(2000)
        basic.clearScreen()
    } else if (manito == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        basic.pause(2000)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Scissors)
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        basic.pause(2000)
        basic.clearScreen()
    }
})
basic.forever(function () {
	
})
