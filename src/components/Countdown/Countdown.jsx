import { useContext } from "react"
import { CountdownCircleTimer } from "react-countdown-circle-timer"
import { SettingsContext } from "../../context/SettingsContext"

const Countdown = ({key, timer, animate, children}) => {
    /*calls a function from another file using useContext*/
    const{stopTimer} = useContext(SettingsContext)
  return (
    <CountdownCircleTimer
    key={key} 
    isPlaying={animate} /*boolean to tell if its in animation or not */
    duration={timer * 60} /*times 60 because its in seconds */
    colors={[
        ['#5c6fff']
          
    ]}
    strokeWidth={6}
    
    trailColor='#0C0E1B'
    /*when completed the timer stops thanks to the function 'stopTimer' called with the hook useContext */
    onComplete={ () => {
        stopTimer()
    }}
    >
        {children}
    </CountdownCircleTimer>
  )
}

export default Countdown