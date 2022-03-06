import { createContext, useState } from "react"

/*exporting the context in order to use the createContext aka the useContext ? */
export const SettingsContext = createContext()

const SettingsContextProvider = (props) => {

    const [pomodoro, setPomodoro] =useState(0)
    const [executing, setExecuting]= useState({})
    const [startAnimate, setStartAnimate]= useState(false)

    

    function startTimer(){
        setStartAnimate(true)
    }

    function pauseTimer(){
        setStartAnimate(false)
    }

    function stopTimer(){
        setStartAnimate(false)
    }

    const SettingBtn =() =>{
        setExecuting({})
        setPomodoro(0)
    }

    const updateExecute = updatedSettings => {
        setExecuting(updatedSettings)
        setTimerTime(updatedSettings)
    }
    
    function setCurrentTimer(active_state){
        updateExecute({
            ...executing,
            active: active_state
        })
        setTimerTime(executing)
    }

    const setTimerTime = evaluate =>{
        switch (evaluate.active){
            case 'work':
                setPomodoro(evaluate.work)
                break;
            case 'normal':
                 setPomodoro(evaluate.normal)
                break;
            case 'long':
                setPomodoro(evaluate.long)
                break;
            default:
                setPomodoro(0)
                break; 
        }
    }

    const children = ({remainingTime}) =>{
        const minutes = Math.floor(remainingTime /60)
        const seconds = remainingTime % 60

        return`${minutes}:${seconds}`
    }

  return (
    <SettingsContext.Provider value={{
        stopTimer, 
        updateExecute,
        pomodoro,
        executing,
        startAnimate,
        startTimer,
        pauseTimer,
        SettingBtn,
        setCurrentTimer,
        updateExecute,
        children
    }}> {/*values all the functions and values needed, because its going to share it with all the files of the 
                                                                    project. Because the SettingContext provider is wrapped around all the application. */}
        {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsContextProvider