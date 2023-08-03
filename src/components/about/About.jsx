import React from 'react'
import './About.css'
import ME from '../../assets/Image1234.webp'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2 className='about-me'>About Me</h2>

        <div className="container about__container">
         <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About_img"/>
          </div>
        </div> 
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Work</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>18+ Completed</small>
            </article>
          </div>
          <p>I' am a FullStack Web Developer. My expertise is to Create and Design Website and many more...
          I want to learn newer developments and possibilities in Web. This is to train
myself to innovate the future. Looking forward to work with an organization
which will fulfill these objectives.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
        </div> 
    </section>
  )
}

export default About    