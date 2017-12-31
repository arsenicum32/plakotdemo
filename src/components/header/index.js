import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import { logo, menu, link } from './style.styl'
import { main, cell, type1 } from '../../styles/theme.styl'

const Header = () => (
  <div className={ main + " " + menu } >
    <div className={cell}>
      <img className={logo} src={require('./logo.png')} />
    </div>
    <div className={cell}>
      <Link className={link} to="/">о нас</Link>
      <Link className={link} to="/">контакты</Link>
      <Link className={link} to="/gallery">галерея</Link>
    </div>
  </div>
)

export default Header
