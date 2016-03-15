
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class BassPage extends React.Component {
  constructor() {
    super();
    this.state = {
      yOffset: 0
    };
    this._updateYOffset = this._updateYOffset.bind(this);
  }

  _updateYOffset(event) {
    console.log(window.pageYOffset);
    this.setState({yOffset: window.pageYOffset});
  }

  componentDidMount() {
    window.addEventListener('scroll', this._updateYOffset);
  }
  render() {
    return <div className='bass-page'>
      <img 
        src='./public/images/jr-recital-small.jpg'
        style={(this.state.yOffset > 20) ? {display: 'block'} : {display: 'none'}}
      />
      Bass Page
    </div>
  }
}

export {BassPage};
