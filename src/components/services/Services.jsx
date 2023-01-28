import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User stories.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User flow charts, diagrams.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Wireframes.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Brand and design system development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design technology consulting.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web development support and maintenance</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web hosting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web programming</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web optimization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Copywriting Services.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Graphic Design Services. Humans are visual creatures.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Video Marketing Services. Video is the future.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Blog Writing Services.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>eBook Marketing Services.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services