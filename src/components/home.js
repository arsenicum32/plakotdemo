import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Header from './header';

import {main, cell, type1 , full, button } from '../styles/theme.styl'


const Home = ({ name, onNameChange }) =>
  <div className={ main }>
    <Header />
    <div className={cell + " " + full} style={{height: '70vh'}} >
      {
        /*
          <input type="text" onChange={onNameChange} />
          <p>Hello {name}</p>
          <Link to="test">test</Link>
        */
      }
      <p>На этой странице вы сможете сгенерировать себе красивый постер,
      баннер, обложку для группы, аватарку, открытку
      и любой другой графический контент! <b>в пару кликов</b>
      </p>
      <br/>
      <Link className={button} to="gallery">мне интересно</Link>
    </div>
  </div>;

Home.propTypes = {
  name: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired
};

export default Home;
