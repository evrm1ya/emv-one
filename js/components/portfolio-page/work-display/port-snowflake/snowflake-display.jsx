
import React, {Component, PropTypes} from 'react';
import {ReactSnowflake} from '../../../snowflake-ornament/react-snowflake';
import {SkillTag} from '../../../skill-tags/skill-tag';

class PortfolioSnowflakeDisplay extends React.Component {
  render() {
    return <section className='port-snowflake-display'>
      <h2>Snowflake</h2>
      <ReactSnowflake
        containerClass='port-snowflake-container'
        artBoxClass='art-box'
        containerWidth={300}
        numberOfLineContainers={11}
        oddContainers={6}
        evenContainers={5}
        lineContainerClass='line-container'
        innerLineClass='inner-line'
        btnContainerClass='btn-box'
      />
      <div className='snowflake-description'>
        <p>
          Animated website ornamentation plugin resembling a snowflake.
        </p>
        <p>
          Built with:
        </p>
        <div className='skill-box'>
          <SkillTag skillClass='skill-html' skillText='HTML' />
          <SkillTag skillClass='skill-css' skillText='CSS3' />
          <SkillTag skillClass='skill-css' skillText='Responsive' />
          <SkillTag skillClass='skill-sass' skillText='SASS' />
          <SkillTag skillClass='skill-js' skillText='JS' />
          <SkillTag skillClass='skill-react' skillText='React' />
        </div>
      </div>
    </section>
  }
}

export {PortfolioSnowflakeDisplay};
