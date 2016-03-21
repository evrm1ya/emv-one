
import React, {Component, PropTypes} from 'react';
import {SkillTag} from '../../../skill-tags/skill-tag';

class PortfolioHoopsDisplay extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return <section className='port-hoops-display'>
      <h2>
        <a href='http://www.hoopsloyal.com'>
          hoopsloyal.com
        </a>
      </h2>
      <div className='hoops-description'>
        <p>
          Hoopsloyal is an awesome project I had the privilege of working
          on during my time at <a href='http://www.sntmedia.com'>SNT Media</a>.
          It is a site where you can find a wide variety of statistics and news
          about NBA and NCAA teams and players. 
          Go check it out at: <a href='http://www.hoopsloyal.com'>hoopsloyal.com</a>!
        </p>
        <p>Skills used:</p>
        <div className='skill-box'>
          <SkillTag skillClass='skill-html' skillText='HTML5' />
          <SkillTag skillClass='skill-css' skillText='CSS3' />
          <SkillTag skillClass='skill-less' skillText='LESS' />
          <SkillTag skillClass='skill-js' skillText='JS' />
          <SkillTag skillClass='skill-meteor' skillText='Meteor' />
          <SkillTag skillClass='skill-jq' skillText='jQuery' />
        </div>
      </div>
    </section>
  }
}

export {PortfolioHoopsDisplay};
