import React from 'react'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Nav/Nav'
import { motion } from 'framer-motion'

const Contacting = () => {
  return (
    <motion.div
    exit={{ opacity: 0}}
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}>
        <div style={{height:'8rem'}}>
            <Nav />
        </div>
        <Contact />
      <Footer />
    </motion.div>
  )
}

export default Contacting