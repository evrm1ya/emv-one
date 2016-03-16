
import React, {Component, PropTypes} from 'react';
import {EventTextBox} from '../event-components/text-box';
import {LazyImage} from '../../lazy-image/lazy-image';

class JrRecitalEvent extends React.Component {
  render() {
    return <section className='jr-recital-bass-event'>
      <EventTextBox
        eventTextClass='event-textBox-dark'
        eventTitle='Junior Recital'
        when='March 26, 2015'
        where='Wichita State - Weidemann Hall'
        note='Accompanied by: Sean Foster'
      />
      <LazyImage
        imgSrc='./public/images/jr-recital-small.jpg'
        loadOffset={0}
      />
    </section>
  }
}

export {JrRecitalEvent};
