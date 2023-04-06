import Sounds from "./sounds.js"

const sounds = Sounds()

export default function Timer({
    minutesDisplay,
    secondsDisplay
}){
    let timerTimeOut

    function countdown(){
        timerTimeOut = setTimeout(() => {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        let isFinished = minutes <= 0 && seconds <= 0

        updateTimerDisplay(minutes, 0)
        
        if(isFinished) {
            sounds.kitchenTimer.play()
            return
        }

        if(seconds <= 0){
            seconds = 60
            --minutes
        }
        
        updateTimerDisplay(minutes, String(seconds - 1))

        countdown()
        }, 1000)
    }

    function updateTimerDisplay (minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    function stop() {
        clearTimeout(timerTimeOut)
    }

    return {
        countdown,
        stop
    }
}