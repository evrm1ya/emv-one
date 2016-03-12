
import React, {Component, PropTypes} from 'react';
import {Snowflake} from './snowflake';
import {SnowflakeLineContainer} from './line-container';

class ReactSnowflake extends React.Component {
  constructor() {
    super();
    this.state = {clickSwitch: true};
    this._generateLineContainers = this._generateLineContainers.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  render() {
    return <div className={this.props.containerClass}>
      <div className={this.props.artBoxClass}>
        {this._generateLineContainers()}
      </div>
      <div className={this.props.btnContainerClass}>
        <div className='btn-wrapper'>
          <a 
            href='javascript:void(0);'
            onClick={this._handleClick}
            >
            <i className='fa fa-cog'></i>
          </a>
        </div>
      </div>
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

  _handleClick() {
    let click = (this.state.clickSwitch) ? false : true;
    this.setState({clickSwitch: click});
  }
}

export {ReactSnowflake};
