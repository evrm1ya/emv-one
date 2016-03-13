
import React, {Component, PropTypes} from 'react';
import {getArrayOfSingularRandomInts} from './src/randomizr/array-random-ints';

window.getArrayOfSingularRandomInts = getArrayOfSingularRandomInts;

class BubbleOrnament extends React.Component {
  render() {
    return <div className='bubble-ornament-container'>
      <div className='art-box'>
      </div>
    </div>
  }
}

export {BubbleOrnament};
