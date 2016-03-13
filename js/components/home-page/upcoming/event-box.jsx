
import React, {Component, PropTypes} from 'react';

class EventBox extends React.Component {
  render() {
    return <div className='home-event-box'>
      <h2>Upcoming Event</h2>
      <p>NMKSO</p>
      <p>"Poised for Pops"</p>
      <time>April 16, 2016 - 7pm</time>
      <p>Newton High School Auditorium</p>
    </div>
  }
}

export {EventBox};
