
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {LazyImage} from '../lazy-image/lazy-image';

class BassPage extends React.Component {
  render() {
    return <div className='bass-page'>
      <LazyImage
        imgSrc='./public/images/jr-recital-small.jpg'
        loadOffset={20}
      />
      Bass Page
      <audio src='./public/music/junior_recital/01_koussy_valse.mp3' controls>
        <source src='/public/music/junior_recital/01_koussy_valse.mp3' type='audio/mp3'/>
        <source src='/public/music/junior_recital/01_koussy_valse.ogg' type='audio/mp3'/>
      </audio>
    </div>
  }
}

export {BassPage};
