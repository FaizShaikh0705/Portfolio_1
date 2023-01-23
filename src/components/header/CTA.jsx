import React from 'react'
import CV from '../../assets/Resume(Faiz).pdf'

const CTA = () => {
  return (
    <div className='cta'>
    <a href={CV} download className='btn'>Downoad CV</a>
    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA