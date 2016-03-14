
import React, {Component, PropTypes} from 'react';

class Bubble extends React.Component {
  render() {
    return <div 
      className={this.props.bubbleClass}
      style={this.props.bubbleStyle}
      >
    </div>
  }
}

export {Bubble}
