
import React, {Components, PropTypes} from 'react';

class WDimgContainer extends React.Component {
  render() {
    return <div className={this.props.containerClass}>
      <div>
        <img
          src={this.props.imgSrc}
          alt={this.props.altText}
        />
      </div>
    </div>
  }
}

export {WDimgContainer};
