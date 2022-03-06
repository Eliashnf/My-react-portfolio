import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub, FaInstagram} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target="_blank" className='header__socials-icon'><BsLinkedin/></a>
        <a href='https://github.com' target="_blank" className='header__socials-icon'><FaGithub/></a>
        <a href='https://instagram.com' target="_blank" className='header__socials-icon'><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocials