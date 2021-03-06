import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import Header from '../header'

import { poster , centerContent } from './style.styl'
import { main, cell, type1 , typeInput , button , input } from '../../styles/theme.styl'

const Create = ({ width , height, title , description , onTitleChange, onDescriptionChange,  onWidthChange, onHeightChange }) => (
  <div className={ main } >
    <Header />
    <div className={cell + " " + typeInput}>
      <input className={input} value={width} onChange={onWidthChange} placeholder="ширина" style={{width: '100%'}} />
      <br/>
      <input className={input} value={height} onChange={onHeightChange} placeholder="высота" style={{width: '100%', position: 'relative', top: '-4px'}} />
      <br/>
      <input className={input} value={title} onChange={onTitleChange} placeholder="заголовок" style={{width: '100%', position: 'relative', top: '-8px'}} />
      <br/>
      <input className={input} value={description} onChange={onDescriptionChange} placeholder="описание" style={{width: '100%', position: 'relative', top: '-12px'}} />
      <br/>
      <Link style={{color: 'black', textDecoration: 'none', position: 'relative', top: '-16px'}} to='mail'>
        <div className={button}  >создать</div>
      </Link>
    </div>
    <div className={cell + " " + type1}>
      <div className={poster + " " + centerContent} style={{ /* Тут что-то с формулой как-то не заходит */
        width: width < height ?  window.innerHeight*.45 : window.innerWidth *.45 +'px',
        height: width < height ? ( height / width ) * window.innerHeight*.45 : (width / height ) * window.innerWidth*.45 +'px'
      }}>
      <h1>{title}</h1>
      <small>{description}</small>
      </div>
    </div>
  </div>
)

export default Create
