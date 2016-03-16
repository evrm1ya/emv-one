
import React, {Component, PropTypes} from 'react';

class EventTextBox extends React.Component {
  render() {
    return <div className={this.props.eventTextClass}>
      <h2>{this.props.eventTitle}</h2>
      <p>{this.props.when}</p>
      <p>{this.props.where}</p>
      <p>{this.props.note}</p>
    </div>
  }
}

export {EventTextBox};
