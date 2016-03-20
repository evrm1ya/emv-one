
import React, {Component, PropTypes} from 'react';
import {Image} from './image';

class LazyImage extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    }
    this._updatePosition = this._updatePosition.bind(this);
  }
  _updatePosition() {
    if (window.pageYOffset >= this.props.offset) {
      this.setState({show: true});
    }
  }
  componentWillMount() {
    window.addEventListener('scroll', this._updatePosition, false);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this._updatePosition);
  }
  render() {
    return <div className='lazy-img-cont'>
      <Image 
        imgSrc={(this.state.show) ? this.props.imgSrc : this.props.tempSrc} 
      />
    </div>
  }
}

export {LazyImage};
