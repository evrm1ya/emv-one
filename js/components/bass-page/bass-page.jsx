
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {NavBar} from '../app/nav-bar/nav-bar';
import {LazyImage} from '../lazy-image/lazy-image';
import {linkProps} from '../../stores/nav/link-store';

class BassPage extends React.Component {
  render() {
    let bassLinkProps = linkProps.filter((link) => link.id !== 'bass');
    return <main className='bass-page'>
      <NavBar linkProps={bassLinkProps} />
      <LazyImage
        imgSrc='./public/images/jr-recital-small.jpg'
        loadOffset={0}
      />
      Bass Page
      <audio src='./public/music/junior_recital/01_koussy_valse.mp3' controls>
        <source src='/public/music/junior_recital/01_koussy_valse.mp3' type='audio/mp3'/>
        <source src='/public/music/junior_recital/01_koussy_valse.ogg' type='audio/mp3'/>
      </audio>
    </main>
  }
}

export {BassPage};
