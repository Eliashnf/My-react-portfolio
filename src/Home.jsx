import React from 'react'
import Header from './components/Header/Header'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { motion } from 'framer-motion'


const Home = () => {
  return (
    <motion.div 
    exit={{ opacity: 0}}
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}>
      <Header />
     
    </motion.div>
  )
}

export default Home