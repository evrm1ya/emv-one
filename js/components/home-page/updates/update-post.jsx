
import React, {Component, PropTypes} from 'react';
import {UpdateTime} from './update-time';
import {UpdateText} from './update-text';

class UpdatePost extends React.Component {
  render() {
    return <li
      id={this.props.id}
      className={this.props.display}
      >
      <UpdateTime time={this.props.time} />
      <UpdateText text={this.props.text} />
    </li>
  }
}

export {UpdatePost};
