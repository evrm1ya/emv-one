
import React, {Component, PropTypes} from 'react';
import {BubbleArt} from './src/bubble-constructor';
import {Bubble} from './bubble';

class BubbleMaker extends React.Component {
  constructor() {
    super();
    this._renderBubbles = this._renderBubbles.bind(this);
  }
  render() {
    return <div className={this.props.containerClass}>
      <div className={this.props.artBoxClass}>
        {this._renderBubbles()}
      </div>
    </div>
  }
  _renderBubbles() {
    let minWidth = this.props.minBubbleWidth,
        total = this.props.totalBubbles,
        contWidth = this.props.containerWidth,
        colorOpts = this.props.colorOptions,
        opacOpts = this.props.opacityOptions;
    
    let bubbleMaker = new BubbleArt(minWidth, total, contWidth, colorOpts, opacOpts);
    let stylesList = bubbleMaker.generateStyles();
    let bubbleArray = [];
    for (let i = 0; i < total; i++) {
      let outerStyle = {
        width: stylesList[i].width,
        height: stylesList[i].height,
        top: stylesList[i].top,
        left: stylesList[i].left
      };
      bubbleArray.push(
        <Bubble
          key={`Bubble_${i}`}
          outerStyle={outerStyle}
          bubbleStyle={stylesList[i]}
          bubbleClass={this.props.bubbleClass}
          >
        </Bubble>
      );
    }
    return bubbleArray;
  }
}

export {BubbleMaker};
