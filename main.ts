basic.forever(function () {
	
})
basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 33) {
        basic.showIcon(IconNames.Skull)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funeral), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
