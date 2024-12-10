namespace xmas {
    export class AllLightsPattern {
        private strip: neopixel.Strip;
        constructor(strip: neopixel.Strip) {
            this.strip = strip;
        }
        init() {
            this.strip.showColor(neopixel.colors(NeoPixelColors.Black))
        }

        onForever() {
            this.strip.showColor(neopixel.colors(NeoPixelColors.Red))            
            basic.pause(1000)
            this.strip.showColor(neopixel.colors(NeoPixelColors.Green))
        }

    }
}