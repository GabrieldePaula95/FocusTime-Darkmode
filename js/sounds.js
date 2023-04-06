export default () => {  
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const soundForest = document.getElementById('sound-forest')
    const soundRain = document.getElementById('sound-rain')
    const soundCoffeeShop = document.getElementById('sound-coffee-shop')
    const soundFireplace = document.getElementById('sound-fireplace')
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    soundForest.loop = true
    soundRain.loop = true
    soundCoffeeShop.loop = true
    soundFireplace.loop = true

    function pressButton () {
        buttonPressAudio.play()
    } 

    function pressButtonStop () {
        soundForest.pause()
        soundRain.pause()
        soundCoffeeShop.pause()
        soundFireplace.pause()   
    }

    function pressButtonForest () {
        pressButtonStop()
        soundForest.play() 
    } 
    function pressButtonRain () {
        pressButtonStop()
        soundRain.play()        
    } 
    function pressButtonCoffeeShop () {
        pressButtonStop()
        soundCoffeeShop.play()        
    } 
    function pressButtonFireplace () {
        pressButtonStop()
        soundFireplace.play()
    } 
    
    return {
        pressButton,
        pressButtonStop,
        pressButtonForest,
        pressButtonRain,
        pressButtonCoffeeShop,
        pressButtonFireplace,
        kitchenTimer,
    }
} 