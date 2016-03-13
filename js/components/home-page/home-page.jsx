
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {ReactSnowflake} from '../snowflake-ornament/react-snowflake';
import {HomeUpdates} from './updates/home-updates';

class HomePage extends React.Component {
  render() {
    return <main className='home-page'>
      <img
        src='./public/images/emv-prof.jpg'
        alt='A portrait of Evan Vermilyea made with melted crayons.'
      />
      <h1>Evan Vermilyea</h1>
      <h2>
        Double Bassist
        <i className='fa fa-circle-o'></i>
        Web Developer
      </h2>
      <nav>
        <ul>
          <li><Link to='/bass'>Bass</Link></li>
          <li><Link to='/portfolio'>Portfolio</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/photos'>Photos</Link></li>
        </ul>
      </nav>
      <ReactSnowflake
        containerClass='home-snowflake-container'
        artBoxClass='art-box'
        containerWidth={300}
        numberOfLineContainers={9}
        oddContainers={5}
        evenContainers={4}
        lineContainerClass='line-container'
        innerLineClass='inner-line'
        btnContainerClass='btn-box'
      />
      <HomeUpdates/>
    </main>
  }
}

export {HomePage};
