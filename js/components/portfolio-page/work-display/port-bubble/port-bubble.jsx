
import React, {Component, PropTypes} from 'react';
import {BubbleMaker} from '../../../bubble-maker/bubble-maker';
import {SkillTag} from '../../../skill-tags/skill-tag';

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
      <div className='bubble-description'>
        <p>
          Bubbles!
        </p>
        <p>
          Built using:
        </p>
        <div className='skill-box'>
          <SkillTag skillClass='skill-html' skillText='HTML' />
          <SkillTag skillClass='skill-css' skillText='CSS3' />
          <SkillTag skillClass='skill-sass' skillText='SASS' />
          <SkillTag skillClass='skill-js' skillText='JS' />
          <SkillTag skillClass='skill-js' skillText='ES6' />
          <SkillTag skillClass='skill-react' skillText='React' />
          <SkillTag skillClass='skill-mocha' skillText='Mocha' />
          <SkillTag skillClass='skill-gulp' skillText='Gulp' />
        </div>
      </div>
    </section>
  }
}

export {PortfolioBubbleDisplay};
