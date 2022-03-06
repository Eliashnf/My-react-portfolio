import React from 'react'
import Nav from '../../components/Nav/Nav'
import About from '../../components/About/About'
import Work from '../../components/Work/Work'
import Footer from '../../components/Footer/Footer'
import { motion } from 'framer-motion'

const Me = () => {
  return (
    <motion.div
    exit={{ opacity: 0}}
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}>
        <div style={{height:'8rem'}}>
            <Nav />
        </div>
      <About />
      <Work />
      <Footer/>
    </motion.div>
  )
}

export default Me