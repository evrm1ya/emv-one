import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {NavBar} from '../app/nav-bar/nav-bar';
import {linkProps} from '../../stores/nav/link-store';
import {VectorCalcsDisplay} from './work-display/vectorcalcs/vc-display';
import {PortfolioSnowflakeDisplay} from './work-display/port-snowflake/snowflake-display';

class PortfolioPage extends React.Component {
  render() {
    let portfolioLinkProps = linkProps.filter((link) => link.id !== 'portfolio');
    return <div className='portfolio-page'>
      <NavBar pageTitle='Portfolio' linkProps={portfolioLinkProps} />
      <VectorCalcsDisplay />
      <PortfolioSnowflakeDisplay />
    </div>
  }
}

export {PortfolioPage};
