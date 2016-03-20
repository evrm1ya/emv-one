
import React, {Component, PropTypes} from 'react';

class Image extends React.Component {
  render() {
    return <img src={this.props.imgSrc}/>
  }
}

export {Image};
