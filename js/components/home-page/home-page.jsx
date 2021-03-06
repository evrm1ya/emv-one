
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {ReactSnowflake} from '../snowflake-ornament/react-snowflake';
import {HomeUpdates} from './updates/home-updates';
import {UpcomingEvents} from './upcoming/upcoming-events';

class HomePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    return <main className='home-page'>
      <div className='home-img-container'>
        <img
          src='./public/images/emv-prof-small.jpg'
          alt='A portrait of Evan Vermilyea made with melted crayons.'
        />
      </div>
      <section className='intro'>
        <h1>Evan Vermilyea</h1>
        <h2>
          Double Bassist
          <i className='fa fa-circle-o'></i>
          Web Developer
        </h2>
      </section>
      <nav className='home-nav'>
        <ul>
          <li><Link to='/bass'>Bass</Link></li>
          <li><Link to='/portfolio'>Portfolio</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
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
      <UpcomingEvents />
    </main>
  }
}

export {HomePage};
