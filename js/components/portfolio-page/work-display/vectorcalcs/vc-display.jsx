
import React, {Component, PropTypes} from 'react';
import {WDimgContainer} from '../img-container';
import {SkillTag} from '../../../skill-tags/skill-tag';

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
      <div className='vc-description'>
        <p>
          <em>vectorcalcs.com</em> is a web application containing a variety
          of different vector operation calculators. It was designed to assist
          calculus and pre-calculus students in their study of vectors. This 
          application was the first I designed, developed, and launched. It was
          and continues to be a great learning experience.
        </p>
        <div className='skill-box'>
          <SkillTag skillClass='skill-html' skillText='HTML5' />
          <SkillTag skillClass='skill-css' skillText='CSS3' />
          <SkillTag skillClass='skill-css' skillText='SMACSS' />
          <SkillTag skillClass='skill-css' skillText='Responsive' />
          <SkillTag skillClass='skill-js' skillText='JS' />
          <SkillTag skillClass='skill-jq' skillText='jQuery' />
          <SkillTag skillClass='skill-jq-ui' skillText='jQuery UI' />
        </div>
      </div>
    </section>
  }
}

export {VectorCalcsDisplay};
