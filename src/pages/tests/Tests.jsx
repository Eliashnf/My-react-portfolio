import React from 'react'
import './tests.css'
import { motion } from 'framer-motion'



const Tests = () => {
  return (
      
      <motion.div className='contain'
    exit={{ opacity: 0}}
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}>
      <div className='should__not__be__here'>
        <h1>You have found my secret place !!!</h1>
        <h2>Get out of here !!</h2>
      </div>
    </motion.div>
    
  )
}

export default Tests