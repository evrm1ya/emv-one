
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {NavBar} from '../app/nav-bar/nav-bar';
import {linkProps} from '../../stores/nav/link-store';
import {JrRecitalEvent} from './jr-recital/jr-recital';
import {JrRecitalTrackBox} from './jr-recital/jrr-tracks';
import {LazyImage} from '../lazy-image/lazy-image';

class BassPage extends React.Component {
  constructor() {
    super();
    this._generateBassNavLinks = this._generateBassNavLinks.bind(this);
  }
  _generateBassNavLinks() {
    return linkProps.filter((link) => link.id !== 'bass');
  }
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    return <main className='bass-page'>
      <NavBar pageTitle='Bass' linkProps={this._generateBassNavLinks()} />
      <div className='bass-welcome'>
        <p>
          Welcome family and friends! In case you missed a performance
          or just want to see what I've been up to musically, I'll be
          periodically adding media to this page. 
        </p>
      </div>
      <JrRecitalEvent />
      <JrRecitalTrackBox />
    </main>
  }
}

export {BassPage};
