let i = 0
let red = 0
basic.forever(function () {
    i += 0.1
    red = 511 * (Math.sin(i) + 1)
    pins.analogWritePin(AnalogPin.P0, red)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 1023 - red)
    control.waitMicros(10000)
})
