import React from 'react'
import './header.css'
import CTA from './CTA'

import HeaderSocial from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <body>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mansi Chinaiwala</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA />
        <HeaderSocial />
        </div>
        </body>
    </header>
  )
}

export default Header
