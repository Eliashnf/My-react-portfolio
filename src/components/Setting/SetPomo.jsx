import React, { useContext, useState } from 'react'
import { SettingsContext } from '../../context/SettingsContext'
import Button from '../Button/Button'

const SetPomo = () => {
    /*Calling the function 'updateExecute' from SettingsContext through the useContext hook*/
    const {updateExecute} = useContext(SettingsContext)

    /*creating the object that has the default values for the pomodoro */
  const [newTimer, setNewTimer] = useState({
      work: 25,
      normal: 5,
      long: 10,
      active: 'work'
  })

  const handleChange = input => {


      /*this is to overwrite the previous 'work' in the object above with the value of the input that we trageted*/ 
      const {name, value} =input.target
      switch (name){
          case 'work':
              setNewTimer({
                  ...newTimer,
                  work: parseInt(value)
              })
              break;
          case 'break':
                setNewTimer({
                    ...newTimer,
                    normal: parseInt(value)
                })
                break;
          case 'longBreak':
              setNewTimer({
                  ...newTimer,
                  long: parseInt(value)
              })
              break;
          
          default:
              break;
      }
      
  }

  const handleSubmit = e => {
      /*preventDefault prevents the page from reloading*/
      e.preventDefault()
      updateExecute(newTimer)
  }

  return (
    <div>
        <h2>Set  
            <span style={{color: "#ff3d47"}}> WorkTime</span> first, 
            then <span style={{color: "#ff3d47"}}>BreakTime </span>, 
            then a loooong <span style={{color: "#ff3d47"}}>BreakTime</span></h2>
        <form noValidate className='get__close'>
            <div className='inputer'>
                <input className='input' name='work' onChange={handleChange} value={newTimer.work} />
                <input className='input' name='break' onChange={handleChange} value={newTimer.normal} />
                <input className='input' name='longBreak' onChange={handleChange} value={newTimer.long} />
            </div>
            <Button title="Set Timer" activeClass='btn btn-primary' _callback={handleSubmit} />
        </form>
    </div>
  )
}

export default SetPomo