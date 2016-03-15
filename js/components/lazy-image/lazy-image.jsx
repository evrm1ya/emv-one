
import React, {Component, PropTypes} from 'react';

class LazyImage extends React.Component {

  constructor() {
    super();
    this.state = {
      yOffset: 0,
      loaded: false
    };
    this._updateYOffset = this._updateYOffset.bind(this);
    this._getOffset = this._getOffset.bind(this);
    this._setLoaded = this._setLoaded.bind(this);
  }

  _updateYOffset(event) {
    console.log(window.pageYOffset);
    this.setState({yOffset: window.pageYOffset});
  }

  _getOffset(yOffLimit, imgSrc) {
    if (!this.state.loaded) {
      return (this.state.yOffset > yOffLimit) ? imgSrc : '';
    }
    return imgSrc;
  }
  
  _setLoaded() {
    this.setState({loaded: true});
  }

  componentDidMount() {
    window.addEventListener('scroll', this._updateYOffset);
  }

  render() {
    let yOffLimit = this.props.loadOffset;
    let imgSrc = this.props.imgSrc;
    return <img
      src={this._getOffset(yOffLimit, imgSrc)}
      onLoad={this._setLoaded}
    />
  }
}

export {LazyImage};
