
import React, {Component, PropTypes} from 'react';

class LazyImage extends React.Component {
  constructor() {
    super();
    this.state = {
      yOffset: 0,
      loaded: false
    };
    this._updateYOffset = this._updateYOffset.bind(this);
  }
  _updateYOffset(event) {
    let yOffLimit = this.props.loadOffset;
    this.setState({yOffset: window.pageYOffset});
    if (this.state.yOffset >= yOffLimit) {
      this.setState({
        loaded: true
      });
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this._updateYOffset);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this._updateYOffset);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state);
    return nextState.loaded;
  }
  render() {
    let imgSrc = this.props.imgSrc;
    return <img
      src={(this.state.loaded) ? imgSrc : '#'}
    />
  }
}

export {LazyImage};
