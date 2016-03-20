
import React, {Component, PropTypes} from 'react';
import {WDimgContainer} from '../img-container';

class VectorCalcsDisplay extends React.Component {
  render() {
    return <section className='vec-calcs-display'>
      <h2>
        <a href='http://www.vectorcalcs.com'>vectorcalcs.com</a>
      </h2>
      <WDimgContainer
        containerClass='vc-screenshot-container'
        imgSrc='./public/images/vc-ss-test.png'
        altText='A screenshot of the vectorcalcs.com homepage'
      />
    </section>
  }
}

export {VectorCalcsDisplay};
