
import React, {Component, PropTypes} from 'react';

class UpdateText extends React.Component {
  render() {
    return <p>
      {this.props.text}
    </p>
  }
}

export {UpdateText};
