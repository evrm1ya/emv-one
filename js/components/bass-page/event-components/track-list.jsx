
import React, {Component, PropTypes} from 'react';
import {TrackListing} from './track-listing';

class TrackList extends React.Component {
  constructor() {
    super();
    this._renderTrackListings = this._renderTrackListings.bind(this);
  }
  _renderTrackListings() {
    let tracks = this.props.tracks;
    return tracks.map((track) => {
      let audioInfo = {
        mpThree: track.mpThree,
        ogg: track.ogg
      };
      return <TrackListing
        key={track.id}
        description={track.description}
        audioInfo={audioInfo}
      />
    });
  }
  render() {
    return <ul className='track-list'>
      {this._renderTrackListings()}
    </ul>
  }
}

export {TrackList};
