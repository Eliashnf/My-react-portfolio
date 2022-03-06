import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Tests from './pages/tests/Tests'
import Home from './Home'
import Pomodoro from './pages/podoro/Pomodoro'
import { AnimatePresence } from 'framer-motion'
import Me from './pages/Me/Me'
import Contacting from './pages/Contacting/Contacting'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AnimatePresence>
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/pomodoro' element={<Pomodoro/>}/>
            <Route path='/test' element={<Tests/>}/>
            <Route path='/me' element={<Me/>}/>
            <Route path='/contact' element={<Contacting/>}/>
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
      
    </>
  )
}

export default App