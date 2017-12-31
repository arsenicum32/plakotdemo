import React, { PropTypes } from 'react'
import { Link } from 'react-router'


import { logo, menu, link } from './style.styl'
import { main, cell, type1 , full ,input , button } from '../../styles/theme.styl'

const Email = ({ email , onChange , click , canSignUp , thanks }) => (
  <div className={ main + " " + menu } >
    <div className={cell}>
      <img className={logo} src={require('../header/logo.png')} />
    </div>
    {
      thanks ?
      <div className={cell + " " + full} style={{ height: '45vh' }}>
        <h1>Спасибо что используете plakot!</h1>
        <br/>
        <Link className={button} to='/'>на главную</Link>
      </div>
      :
      <div className={cell + " " + full} style={{ height: '45vh' }}>
         <h1>обработка...</h1>
         <p>10 сгенерированных вариантов постера отправяться к вам на почту</p>
         <br/>
         <input className={input} style={{width: '100%', borderColor: email && !canSignUp ? 'orange': 'black'}} value={email}  onChange={onChange} placeholder="email" />
         {
           canSignUp?
           <button className={button} onClick={click} style={{width: '100%', position: 'relative', top:'-4px'}} >отправить мне</button>
           : null
         }
      </div>
    }

  </div>
)

export default Email
