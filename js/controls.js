export default function ({minutesDisplay,secondsDisplay, buttonSoundForest, buttonSoundRain, buttonSoundCoffeeShop, buttonSoundFireplace, buttonPlay, buttonStop, buttonTurnUp, buttonTurnDown, body, colon}) {    
    function turnUpTime(){
        if(minutesDisplay.textContent > 55){
        alert("O Tempo não pode ser maior que 60 minutos")
        return
    }
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2, "0")
    }

    function turnDownTime(){
        if(minutesDisplay.textContent < 5){
        alert("O Tempo não pode ser negativo!!")
    return
    }
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2, "0")
    }

    function changeColor () {
        document.querySelector('.forest svg path').style.fill ="hsl(240, 5.7%, 20.8%)"
        document.querySelector('.rain svg path').style.fill ="hsl(240, 5.7%, 20.8%)"
        document.querySelector('.coffee-shop svg path').style.fill ="hsl(240, 5.7%, 20.8%)"
        document.querySelector('.fireplace svg path').style.fill ="hsl(240, 5.7%, 20.8%)"
        buttonSoundForest.style.background='hsla(240, 9%, 89%, 1)';
        buttonSoundRain.style.background='hsla(240, 9%, 89%, 1)';
        buttonSoundCoffeeShop.style.background='hsla(240, 9%, 89%, 1)';
        buttonSoundFireplace.style.background='hsla(240, 9%, 89%, 1)';
        document.querySelector('#volume-forest').style.background = "#323238"
        document.querySelector('#volume-rain').style.background = "#323238"
        document.querySelector('#volume-coffee-shop').style.background = "#323238"
        document.querySelector('#volume-fireplace').style.background = "#323238" 
    }

    function changeColorDark () {
        document.querySelector('.forest svg path').style.fill ="#C4C4CC"
        document.querySelector('.rain svg path').style.fill ="#C4C4CC"
        document.querySelector('.coffee-shop svg path').style.fill ="#C4C4CC"
        document.querySelector('.fireplace svg path').style.fill ="#C4C4CC"
        buttonSoundForest.style.background='#29292E';
        buttonSoundRain.style.background='#29292E';
        buttonSoundCoffeeShop.style.background='#29292E';
        buttonSoundFireplace.style.background='#29292E';
        document.querySelector('#volume-forest').style.background = "#FFF"
        document.querySelector('#volume-rain').style.background = "#FFF"
        document.querySelector('#volume-coffee-shop').style.background = "#FFF"
        document.querySelector('#volume-fireplace').style.background = "#FFF" 
    }       

    function darkmode () {
        buttonPlay.querySelector('svg path').style.fill = "#C4C4CC"
        buttonStop.querySelector('svg path').style.fill = "#C4C4CC"
        buttonTurnUp.querySelector('svg path').style.fill = "#C4C4CC"
        buttonTurnDown.querySelector('svg path').style.fill = "#C4C4CC"
        body.style.background = "#121214"
        minutesDisplay.style.color = "#FFFFFF"
        secondsDisplay.style.color = "#FFFFFF"
        colon.style.color = "#FFFFFF"   
        changeColorDark()
    }
    function claritymode () {
        buttonPlay.querySelector('svg path').style.fill = "#323238"
        buttonStop.querySelector('svg path').style.fill = "#323238"
        buttonTurnUp.querySelector('svg path').style.fill = "#323238"
        buttonTurnDown.querySelector('svg path').style.fill = "#323238"
        body.style.background = "#FFFFFF"  
        minutesDisplay.style.color = "#323238"
        secondsDisplay.style.color = "#323238"
        colon.style.color = "#323238"
        changeColor()
    }

    return {
        turnUpTime,
        turnDownTime,
        changeColor,
        changeColorDark,
        darkmode,
        claritymode
    }
}