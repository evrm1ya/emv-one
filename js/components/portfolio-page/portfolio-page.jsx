import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {NavBar} from '../app/nav-bar/nav-bar';
import {linkProps} from '../../stores/nav/link-store';
import {VectorCalcsDisplay} from './work-display/vectorcalcs/vc-display';
import {PortfolioSnowflakeDisplay} from './work-display/port-snowflake/snowflake-display';
import {PortfolioBubbleDisplay} from './work-display/port-bubble/port-bubble';
import {PortfolioHoopsDisplay} from './work-display/hoops-display/hoops-display';

class PortfolioPage extends React.Component {
  constructor() {
    super();
    this._generatePortfolioNavLinks = this._generatePortfolioNavLinks.bind(this);
  }
  _generatePortfolioNavLinks() {
    return linkProps.filter((link) => link.id !== 'portfolio');
  }
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    return <div className='portfolio-page'>
      <NavBar pageTitle='Portfolio' linkProps={this._generatePortfolioNavLinks()} />
      <VectorCalcsDisplay />
      <PortfolioSnowflakeDisplay />
      <PortfolioBubbleDisplay />
      <PortfolioHoopsDisplay />
    </div>
  }
}

export {PortfolioPage};
