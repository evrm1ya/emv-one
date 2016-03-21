
import React, {Component, PropTypes} from 'react';
import {BubbleMaker} from '../../../bubble-maker/bubble-maker';

let bubbleColorOptions = ['#7d94ff', '#3056ff', '#002ae3'];
let opacityOptions = ['0.3', '0.5', '0.7', '0.9'];

class PortfolioBubbleDisplay extends React.Component {
  render() {
    return <section className='port-bubble-display'>
      <h2>Bubble Maker</h2>
      <BubbleMaker
        containerClass='port-bubble-container'
        bubbleClass='bubble'
        artBoxClass='art-box'
        minBubbleWidth={25}
        totalBubbles={35}
        containerWidth={300}
        colorOptions={bubbleColorOptions}
        opacityOptions={opacityOptions}
      />
    </section>
  }
}

export {PortfolioBubbleDisplay};
