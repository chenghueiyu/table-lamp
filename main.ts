let temp = 0
basic.forever(function () {
    if (ModuleWorld_Digital.Button(ModuleWorld_Digital.mwDigitalNum.P0P1, ModuleWorld_Digital.enButton.Press)) {
        basic.pause(100)
        while (ModuleWorld_Digital.Button(ModuleWorld_Digital.mwDigitalNum.P0P1, ModuleWorld_Digital.enButton.Press)) {
            basic.pause(1)
        }
        temp += 1
        if (temp > 1) {
            temp = 0
        }
    }
    if (temp == 0) {
        ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.OFF)
    } else if (temp == 1) {
        ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.White)
    }
})
