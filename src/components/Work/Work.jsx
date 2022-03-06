import React from 'react'
import './work.css'
import { BiCheck } from 'react-icons/bi'

const Work = () => {
  return (
    <section id='work'>
        {/*<div className='big__box'>*/}
        <h5 className='td'>What I Do</h5>
        <h1>My Work</h1>

        <div className='container services__container'>

            {/*----------------------WEB-----------------------*/}
            <article className='service'>
                <div className="services__head">
                    <h3>Web</h3>
                </div>
                <ul className='services__list'>
                    <li>
                        <BiCheck className='ser'/>
                        <p className='pp'>  What you will find here will be all my web projects:</p>
                    </li>
                    <li>
                        -
                        <p> Product landing pages</p>
                    </li>
                    <li>
                        -
                        <p> Different web applications</p>
                    </li>
                    <li>
                        -
                        <p> New self designed Portfolios</p>
                    </li>
                    <li>
                        -
                        <p> And more...</p>
                    </li>
                    <li 
                    className='tv'>
                        <button className='btn btn-primary cta-new'>Coming soon</button>
                    </li>
                </ul>
                
            </article>

            {/*----------------------ART-----------------------*/}
            <article className='service'>
                <div className="services__head">
                    <h3>Art</h3>
                </div>
                <ul className='services__list'>
                    <li>
                        <BiCheck className='ser'/>
                        <p className='pp'> Here you will find some of my art and design projects:</p>
                    </li>
                    
                    <li>
                        -
                        <p> Portraits, to show my art work</p>
                    </li>
                    <li>
                         -   
                        <p> Sketches, to show my thought process</p>
                    </li>
                    <li>
                        -
                        <p> Workbook, to show my working process</p>
                    </li>
                    <li>
                        -
                        <p> And more...</p>
                    </li>
                    <li className='tv'>
                        <button className='btn btn-primary cta-new'>Coming soon</button>
                    </li>
                </ul>
            </article>

            {/*----------------------GAME-----------------------*/}
            <article className='service'>
                <div className="services__head">
                    <h3>Game</h3>
                </div>
                <ul className='services__list'>
                    <li>
                        <BiCheck className='ser'/>
                        <p className='pp'> The few games I will make will be posted here:</p>
                    </li>
                    <li>
                        -
                        <p> Web application games</p>
                    </li>
                    <li>
                        -
                        <p> Small chalenging C games</p>
                    </li>
                    <li>
                        -
                        <p> Fun and easy Python games</p>
                    </li>
                    <li>
                        -
                        <p> And more...</p>
                    </li>
                    <li className='tv'>
                        <button className='btn btn-primary cta-new'>Coming soon</button>
                    </li>
                </ul>
            </article>
        </div>
        {/*</div>*/}
    </section>
  )
}

export default Work