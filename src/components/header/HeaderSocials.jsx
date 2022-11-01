import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/mansi-chinaiwala" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/MansiChinaiwala26" target="_blank"><FaGithub/></a>
       
    </div>
  )
}

export default HeaderSocials