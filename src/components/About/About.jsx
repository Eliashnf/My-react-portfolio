import React from 'react'
import './about.css'
import ME from '../../assets/IMG.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers, FiFolder} from 'react-icons/fi'

const About = () => { 
  return (
    <section id='about'>
      {/*<div className='big__box'>*/}
      <h5 className='td'>Want To Know Me ?</h5>
      <h1>About Me</h1>

      <div className="container about__container">
        

        <div className="about__content">
          <p className='tp'>
          Hey ! I'm a young developer, artist, author, and a great friend. I have a serious passion for creating stories. Wherever I go, I look at everything around me and project it into my imagination to turn any situation into a work of art. I try to turn the best, even the worst situation, into a story that I can use later in a project.
          </p>
          <p>Name: <strong>Elias</strong></p>
          <p>Age: <strong>20</strong></p>
          <p>Languages: <strong>French(bilingual), English, Korean(beginner)</strong></p>
          <p>Email: <strong>eliashnf@gmail.com</strong></p>
          <p>Address: <strong>France, Saint-Denis</strong></p>
        </div>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='photo'/>
          </div>
        </div>
      </div>
      {/*</div>*/}
    </section>
  )
}

export default About