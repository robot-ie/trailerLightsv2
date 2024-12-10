let strip = neopixel.create(DigitalPin.P0, 51, NeoPixelMode.RGB)
let pattern = new xmas.AllLightsPattern(strip)
pattern.init()
basic.forever(function () {
    pattern.onForever()
})