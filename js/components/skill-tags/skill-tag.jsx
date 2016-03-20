
import React, {Component, PropTypes} from 'react';

class SkillTag extends React.Component {
  render() {
    return <span className={this.props.skillClass}>
      {this.props.skillText}
    </span>
  }
}

export {SkillTag};
