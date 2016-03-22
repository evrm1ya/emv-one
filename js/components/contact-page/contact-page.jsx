
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
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    return <div className='contact-page'>
      <NavBar pageTitle='Contact' linkProps={this._generateContactNavLinks()} />
      <div className='temporary-contact'>
        <h2>Temporary Contact Info</h2>  
        <p>Want to build something?</p>
        <p>
          For the time being, please contact me at: evan@evanvermilyea.com.
        </p>
        <p>Thank you!</p>
      </div>
    </div>
  }
}

export {ContactPage};
