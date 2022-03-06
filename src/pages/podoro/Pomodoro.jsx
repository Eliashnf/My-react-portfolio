import './pomodoro.css'
import React, { useEffect, useState, useContext } from 'react'
import Loading from '../../components/Loading/Loading'
import SetPomo from '../../components/Setting/SetPomo'
import Countdown from '../../components/Countdown/Countdown'
import { SettingsContext } from '../../context/SettingsContext'
import Button from '../../components/Button/Button'
import Nav from '../../components/Nav/Nav'
import { motion } from 'framer-motion'



const Pomodoro = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    }, 2500)
  },[])

  const {pomodoro, executing, setCurrentTimer, SettingBtn, children, startAnimate, startTimer, pauseTimer, updateExecute} = useContext(SettingsContext)


    useEffect(()=> updateExecute(executing), [executing, startAnimate])

  return (
    <motion.div
    exit={{ opacity: 0}}
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    className='pomo'>
      {isLoading == true ? <Loading/> : <>
        <div style={{height:'8rem'}}>
          <Nav />
        </div>
        <h1>My Place For Work</h1>
        <small>Time to work</small>
        {pomodoro == 0 ?
              <SetPomo/> :
              <>
                  <div className='get__close'>
                    <ul className='btn__forced'>
                        <li>
                            <Button
                            title='Work'
                            activeClass={executing.active =='work' ? 'active__btn' : undefined}
                            _callback={()=> setCurrentTimer('work')}
                            />
                        </li>
                        <li>
                            <Button
                            title='Break'
                            activeClass={executing.active =='normal' ? 'active__btn' : undefined}
                            _callback={()=> setCurrentTimer('normal')}
                            />
                        </li>
                        <li>
                            <Button
                            title='Long Break'
                            activeClass={executing.active =='long' ? 'active__btn' : undefined}
                            _callback={()=> setCurrentTimer('long')}
                            />
                        </li>  
                    </ul>
                  </div>
                  
                  <div className='time__circle'>
                      <div className='circle'>
                          <Countdown
                          key={pomodoro}
                          timer={pomodoro}
                          animate={startAnimate}
                          >
                              {children}
                          </Countdown>
                      </div>
                  </div>
                  
                  <div className='get__close'>
                    <div className='btn__forcedv3 get__close'>
                      <Button title='Start' className={startAnimate ? 'active' : undefined} _callback={startTimer} />
                      <Button title='Pause' className={startAnimate ? 'active' : undefined} _callback={pauseTimer} />
                    </div>
                  </div>
                  <div className='get__close'>
                    <div className='get__close'>
                      <Button title='Settings' activeClass="fancy" _callback={SettingBtn}/>
                    </div>
                  </div>
                  
              </>
              }
  </>}
        
        
        
      
    </motion.div>
  )
}

export default Pomodoro