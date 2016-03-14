
import React, {Component, PropTypes} from 'react';
import {BubbleOrnament} from '../../bubble-ornament/bubble-ornament';
import {EventBox} from './event-box';

class UpcomingEvents extends React.Component {
  render() {
    let bubbleColorOptions = ['#8652dc', '#333', '#e0e0e0'];
    let opacityOptions = ['0.3', '0.5', '0.7', '0.9'];
    return <section className='home-upcoming-container'>
      <BubbleOrnament
        containerClass='bubble-ornament-container'
        bubbleClass='bubble'
        artBoxClass='art-box'
        minBubbleWidth={25}
        totalBubbles={50}
        containerWidth={300}
        colorOptions={bubbleColorOptions}
        opacityOptions={opacityOptions}
      />
      <EventBox />
    </section>
  }
}

export {UpcomingEvents};
