import Sounds from './sounds.js'
import Timer from './timer.js'
import Events from './events.js'
import { buttonPlay, buttonStop, buttonTurnUp, buttonTurnDown, buttonSoundForest, buttonSoundRain, buttonSoundCoffeeShop, buttonSoundFireplace, minutesDisplay, secondsDisplay, colon, clarity, dark, body } from './elements.js'
import Constrols from './controls.js'
import Modes from './modes.js'

const controls = Constrols({minutesDisplay, secondsDisplay, buttonSoundForest, buttonSoundRain, buttonSoundCoffeeShop, buttonSoundFireplace, buttonPlay, buttonStop, buttonTurnUp, buttonTurnDown, body, colon})

const sounds = Sounds()

const timer = Timer({
    minutesDisplay,
    secondsDisplay
})

Events({timer, sounds, controls})

Modes({buttonPlay, buttonStop, buttonTurnUp, buttonTurnDown, body, minutesDisplay, secondsDisplay, colon, clarity, dark, controls})




