
import React, {Component, PropTypes} from 'react';

class UpdateTime extends React.Component {
  render() {
    return <time>{this.props.time}</time>
  }
}

export {UpdateTime};
