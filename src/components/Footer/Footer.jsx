import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='' className='footer__logo'>Socials</a>
      <div className="footer__socials">
        <a href='https://github.com/Eliashnf'><FaGithub/></a>
        <a href='https://www.linkedin.com/in/elias-hanafi-8a57b9220'><BsLinkedin/></a>
        <a href='https://instagram.com'><FaInstagram/></a>
      </div>
    </footer>
  )
}

export default Footer