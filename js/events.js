import { buttonPlay, buttonStop, buttonTurnUp, buttonTurnDown, buttonSoundForest, buttonSoundRain, buttonSoundCoffeeShop, buttonSoundFireplace, minutesDisplay, secondsDisplay, colon, clarity, dark, body } from './elements.js'

export default function ({timer, sounds, controls}) {
    buttonPlay.addEventListener('click', () => {
    timer.countdown()
    sounds.pressButton()
    })

    buttonStop.addEventListener('click', () => {
        timer.stop()
        sounds.pressButton()
        sounds.pressButtonStop() 
    })

    buttonTurnUp.addEventListener('click', () => {
        sounds.pressButton()
        controls.turnUpTime()
    })

    buttonTurnDown.addEventListener('click', () => {
        sounds.pressButton()
        controls.turnDownTime()
    })

    

    buttonSoundForest.addEventListener('click', () => {
        sounds.pressButton()
        sounds.pressButtonForest()  

        if(dark.classList.contains("hide")) {    
            controls.changeColor()
            buttonSoundForest.style.background='hsl(193.9, 97.5%, 31.2%)';
            document.querySelector('.forest svg path').style.fill ="#FFF"
            document.querySelector('#volume-forest').style.background = "#FFF" 
        }  else {
            controls.changeColorDark()
            buttonSoundForest.style.background='#0A3442';
            document.querySelector('.forest svg path').style.fill ="#FFF"      
            document.querySelector('#volume-forest').style.background = "#FFF"
        }              
    })
    
    buttonSoundRain.addEventListener('click', () => {
        sounds.pressButton()
        sounds.pressButtonRain()
        if(dark.classList.contains("hide")){
            controls.changeColor()
            buttonSoundRain.style.background='hsl(193.9, 97.5%, 31.2%)'; 
            document.querySelector('.rain svg path').style.fill ="#FFF"
            document.querySelector('#volume-rain').style.background = "#FFF"  
        } else {
            controls.changeColorDark()
            buttonSoundRain.style.background='#0A3442'; 
            document.querySelector('.rain svg path').style.fill ="#FFF"
            document.querySelector('#volume-rain').style.background = "#FFF"              
        }        
    })

    buttonSoundCoffeeShop.addEventListener('click', () => {
        sounds.pressButton()
        sounds.pressButtonCoffeeShop()
        if(dark.classList.contains("hide")){
            controls.changeColor()
            buttonSoundCoffeeShop.style.background='hsl(193.9, 97.5%, 31.2%)';
            document.querySelector('.coffee-shop svg path').style.fill ="#FFF"
            document.querySelector('#volume-coffee-shop').style.background = "#FFF" 
        } else {
            controls.changeColorDark()
            buttonSoundCoffeeShop.style.background='#0A3442';
            document.querySelector('.coffee-shop svg path').style.fill ="#FFF"
            document.querySelector('#volume-coffee-shop').style.background = "#FFF"
        }
    })

    buttonSoundFireplace.addEventListener('click', () => {
        sounds.pressButton()
        sounds.pressButtonFireplace()
        if(dark.classList.contains("hide")){
            controls.changeColor()
            buttonSoundFireplace.style.background='hsl(193.9, 97.5%, 31.2%)';   
            document.querySelector('.fireplace svg path').style.fill ="#FFF"
            document.querySelector('#volume-fireplace').style.background = "#FFF" 
        } else {
            controls.changeColorDark()
            buttonSoundFireplace.style.background='#0A3442';   
            document.querySelector('.fireplace svg path').style.fill ="#FFF"
            document.querySelector('#volume-fireplace').style.background = "#FFF" 
        }
    })     

}