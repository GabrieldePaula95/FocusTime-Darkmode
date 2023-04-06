export default function ({buttonPlay, buttonStop, buttonTurnUp, buttonTurnDown, body, minutesDisplay, secondsDisplay, colon, clarity, dark, controls}){

    clarity.addEventListener('click', () => {
        toggleScreen()
        controls.darkmode()        
    })

    dark.addEventListener('click', () => { 
        toggleScreen()
        controls.claritymode()
    })


    function toggleScreen() {    
        clarity.classList.toggle('hide')
        dark.classList.toggle('hide')   
    }

    return {
        toggleScreen
    }
}