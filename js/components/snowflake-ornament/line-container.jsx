
import React, {Component, PropTypes} from 'react';

class SnowflakeLineContainer extends React.Component {
  render() {
    return <div 
      className={this.props.lineContainerClass}
      style={this.props.containerStyle}
      >
      <div 
        className={this.props.innerLineClass}
        style={this.props.innerLineStyle}
        >
      </div>
      <div 
        className={this.props.innerLineClass}
        style={this.props.innerLineStyle}
        >
      </div>
    </div>
  }
}

export {SnowflakeLineContainer};
