
import React, {Component, PropTypes} from 'react';
import {NavBarLink} from './link';

class NavBar extends React.Component {
  constructor() {
    super();
    this._renderNavBarLinks = this._renderNavBarLinks.bind(this);
  }

  _renderNavBarLinks() {
    let linkProps = this.props.linkProps;
    return linkProps.map((link, index) => {
      return <NavBarLink
        key={`path_${index}`}
        path={link.path}
        text={link.text}
      />
    });
  }
  render() {
    return <nav className='app-navbar'>
      <ul>
        {this._renderNavBarLinks()}
      </ul>
    </nav>
  }
}

export {NavBar};
