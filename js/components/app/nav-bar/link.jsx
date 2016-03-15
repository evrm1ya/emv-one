
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class NavBarLink extends React.Component {
  render() {
    return <li>
      <Link to={this.props.path}>
        {this.props.text}
      </Link>
    </li>
  }
}

export {NavBarLink};

