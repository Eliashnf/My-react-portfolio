import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_q61hl97', form.current, 'lERrnBb4rIuhsZGzs')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <section id='contact'>
      {/*<div className='big__box'>*/}
      <h5 className='tr td'>Get In Touch</h5>
      <h1 className='tr'>Contact Me</h1>

      <div className="container contact__container">
        <div className="">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>eliashnf@gmail.com</h5>
            <a href='mailto:eliashnf@gmail.com'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      {/*</div>*/}
    </section>
  )
}

export default Contact