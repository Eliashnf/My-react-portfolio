import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineClockCircle} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'
import { NavLink } from 'react-router-dom'


const Nav = () => {
  const[activeNav, setActiveNav] = useState('/')
  return (
    <nav>
      
      <NavLink to='/' onClick={()=> setActiveNav('/')} id={window.location.pathname == '/' ? "active" : ""}><AiOutlineHome/></NavLink>
      <NavLink to='/me' onClick={()=> setActiveNav('#about')} id={window.location.pathname == '/me' ? "active" : ""}><AiOutlineUser/></NavLink>
      {/*<a href='#work' onClick={()=> setActiveNav('#work')} className={activeNav === '#work' ? 'active' : ''}><BiBook/></a>*/}
      <NavLink to='/contact' onClick={()=> setActiveNav('#contact')} id={window.location.pathname == '/contact' ? "active" : ""}><BiMessageSquareDetail/></NavLink>
      <NavLink to='/pomodoro' onClick={()=> setActiveNav('/pomodoro')} id={window.location.pathname == '/pomodoro' ? "active" : ""}><AiOutlineClockCircle/></NavLink>
    </nav>
  )
}

export default Nav