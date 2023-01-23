import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/m3.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Faiz Shaikh</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__Down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header