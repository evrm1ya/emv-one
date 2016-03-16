
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {NavBar} from '../app/nav-bar/nav-bar';
import {linkProps} from '../../stores/nav/link-store';
import {JrRecitalEvent} from './jr-recital/jr-recital';
import {JrRecitalTrackBox} from './jr-recital/jrr-tracks';

class BassPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    let bassLinkProps = linkProps.filter((link) => link.id !== 'bass');
    return <main className='bass-page'>
      <NavBar pageTitle='Bass' linkProps={bassLinkProps} />
      <JrRecitalEvent />
      <JrRecitalTrackBox />
    </main>
  }
}

export {BassPage};
