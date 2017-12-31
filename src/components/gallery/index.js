import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import { image } from './style.styl'
import { main, cell, type1 , button, typeFull } from '../../styles/theme.styl'

import swissed from './swissed'

import Header from '../header'

const Gallery = () => (
  <div className={ main } >
    <Header />
    <div className={cell + " " + type1}>
      <h4>уже сгенерирован 51 постер!</h4>
    </div>
    <div className={cell + " " + type1}>
    фильтр:<br/>
    <b>новые</b><br/>
    <small>популярные</small>
    </div>
    <div className={cell + " " + type1} style={{minWidth: '185px'}}>
      <Link className={button} to="create">создать свой</Link>
    </div>
    <div className={cell + " " + typeFull}>
      {
        //(new Array(10).fill(1).map(Math.random))
        swissed
        .map(i=> <img key={i} className={image} src={i} /*src="https://plakot-msda6mdcl77z.runkit.sh/poster?w=280&h=400"*/ /> )
      }
    </div>
  </div>
)

export default Gallery
