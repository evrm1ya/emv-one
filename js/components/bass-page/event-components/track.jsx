
import React, {Component, PropTypes} from 'react';

class Track extends React.Component {
  render() {
    return <audio controls>
      <source src={this.props.audioInfo.mpThree} type='audio/mp3' />
      <source src={this.props.audioInfo.ogg} type='audio/ogg' />
    </audio>
  }
}

export {Track};
