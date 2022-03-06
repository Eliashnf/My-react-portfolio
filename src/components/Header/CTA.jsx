import React from 'react'
import { NavLink } from 'react-router-dom'

const CTA = () => {
  return (
    <div className='cta'>
      
      <NavLink className='btn btn-primary' to='/me'>Get to know me</NavLink>
      <NavLink className='btn btn-primary' to='/contact'>Contact me</NavLink>
    </div>
  )
}

export default CTA