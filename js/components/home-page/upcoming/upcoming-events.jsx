
import React, {Component, PropTypes} from 'react';
import {BubbleOrnament} from '../../bubble-ornament/bubble-ornament';
import {EventBox} from './event-box';

class UpcomingEvents extends React.Component {
  render() {
    return <section className='home-upcoming-container'>
      <BubbleOrnament />
      <EventBox />
    </section>
  }
}

export {UpcomingEvents};
