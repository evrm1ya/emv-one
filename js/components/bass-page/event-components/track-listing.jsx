
import React, {Component, PropTypes} from 'react';
import {Track} from './track';

class TrackListing extends React.Component {
  render() {
    return <li>
      <p>{this.props.description}</p>
      <Track audioInfo={this.props.audioInfo} />
    </li>
  }
}

export {TrackListing};
