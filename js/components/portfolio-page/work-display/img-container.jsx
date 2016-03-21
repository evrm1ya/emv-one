
import React, {Components, PropTypes} from 'react';

class WDimgContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this._handleMouseOver= this._handleMouseOver.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
  }
  _handleMouseOver(event) {
    this.setState({show: true});
  }
  _handleMouseLeave(event) {
    this.setState({show: false});
  }
  render() {
    return <div className={this.props.containerClass}>
      <div className={this.props.imgWrapperClass}>
        <img
          src={this.props.imgSrc}
          alt={this.props.altText}
          onMouseOver={this._handleMouseOver}
        />
        <div 
          className={this.props.hoverClassName}
          style={(this.state.show) ? {visibility: 'visible'} : {visibility: 'hidden'}}
          onMouseLeave={this._handleMouseLeave}
          >
          <a href={this.props.hoverSrc}>
            <span>Visit</span> 
            <span>{this.props.outboundTitle}</span>
          </a>
        </div>
      </div>
    </div>
  }
}

export {WDimgContainer};
