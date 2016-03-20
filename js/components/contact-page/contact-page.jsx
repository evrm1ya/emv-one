
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {NavBar} from '../app/nav-bar/nav-bar';
import {linkProps} from '../../stores/nav/link-store';

class ContactPage extends React.Component {
  constructor() {
    super();
    this._generateContactNavLinks = this._generateContactNavLinks.bind(this);
  }
  _generateContactNavLinks() {
    return linkProps.filter((link) => link.id !== 'contact');
  }
  render() {
    return <div>
      <NavBar pageTitle='Contact' linkProps={this._generateContactNavLinks()} />
    </div>
  }
}

export {ContactPage};
