
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {NavBar} from '../app/nav-bar/nav-bar';
import {linkProps} from '../../stores/nav/link-store';
import {JrRecitalEvent} from './jr-recital/jr-recital';
import {JrRecitalTrackBox} from './jr-recital/jrr-tracks';

/** @TODO pass jrRecitalTracks into a track box **/

class BassPage extends React.Component {
  render() {
    let bassLinkProps = linkProps.filter((link) => link.id !== 'bass');
    return <main className='bass-page'>
      <NavBar pageTitle='Bass' linkProps={bassLinkProps} />
      <JrRecitalEvent />
      <JrRecitalTrackBox />
      Bass Page
      <audio controls>
        <source src='/public/music/junior_recital/01_koussy_valse.mp3' type='audio/mp3'/>
        <source src='/public/music/junior_recital/01_koussy_valse.ogg' type='audio/ogg'/>
      </audio>
    </main>
  }
}

export {BassPage};
