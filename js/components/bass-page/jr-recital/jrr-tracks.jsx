
import React, {Component, PropTypes} from 'react';
import {TrackList} from '../event-components/track-list';
import {jrRecitalTracks} from '../../../stores/tracks/tracks';

var koussyTracksData = jrRecitalTracks.slice(0, 3);
var misekTracksData = jrRecitalTracks.slice(3, 6);

class JrRecitalTrackBox extends React.Component {
  render() {
    return <section className='jr-recital-trackBox'>
      <h2>Serge Koussevitzky</h2>
      <TrackList tracks={koussyTracksData} />
      <h2>Adolf Misek - Sonata No. 1 in A Major, Op. 5</h2>
      <TrackList tracks={misekTracksData} />
    </section>
  }
}

export {JrRecitalTrackBox};
