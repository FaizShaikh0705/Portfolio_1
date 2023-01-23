import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/i
n/faiz-shaikh-2816741a0" target="_blank"><BsLinkedin /></a>
<a href="https://github.com/FaizShaikh0705" target="_blank"><FaGithub /></a>
<a href="https://dribbble.com/Shaikh0705?onboarding=true" target="_blank"><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials