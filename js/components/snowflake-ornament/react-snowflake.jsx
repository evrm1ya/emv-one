
import React, {Component, PropTypes} from 'react';
import {Snowflake} from './snowflake';
import {SnowflakeLineContainer} from './line-container';

class ReactSnowflake extends React.Component {
  constructor() {
    super();
    this.state = {clickSwitch: true};
    this._generateLineContainers = this._generateLineContainers.bind(this);
  }
  render() {
    return <div className={this.props.containerClass}>
      {this._generateLineContainers()}
    </div>
  }
  _generateLineContainers() {
    let totalEles = this.props.numberOfLineContainers;
    let oddEles = this.props.oddContainers;
    let evenEles = this.props.evenContainers;
    let containerHeight = this.props.containerWidth;
    let snowflake = new Snowflake(totalEles, oddEles, evenEles, containerHeight);
    let lineContainers = [];
    let stylesList = snowflake.styleGenerator().getStylesList();
    for (let i = 0; i < totalEles; i++) {
      lineContainers.push(
        <SnowflakeLineContainer
          key={'cont_' + (i+1)}
          lineContainerClass={this.props.lineContainerClass}
          innerLineClass={this.props.innerLineClass}
          containerStyle={stylesList.containerStylesList[i]}
          innerLineStyle={stylesList.innerLineStylesList[i]}
        />
      );
    }
    return lineContainers;
  }
}

export {ReactSnowflake};
