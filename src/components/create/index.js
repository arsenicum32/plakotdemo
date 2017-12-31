import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import Header from '../header'

import { poster } from './style.styl'
import { main, cell, typeFull } from '../../styles/theme.styl'

const Create = () => (
  <div className={ main } >
    <Header />
    <div className={cell + " " + typeFull}>
    <div className={poster}></div>
    </div>
  </div>
)

export default Create
