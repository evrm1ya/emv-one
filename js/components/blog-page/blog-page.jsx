
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {NavBar} from '../app/nav-bar/nav-bar';
import {linkProps} from '../../stores/nav/link-store';

class BlogPage extends React.Component {
  constructor() {
    super();
    this._generateBlogPageLinks = this._generateBlogPageLinks.bind(this);
  }
  _generateBlogPageLinks() {
    return linkProps.filter((link) => link.id !== 'blog');
  }
  render() {
    return <div>
      <NavBar pageTitle='Blog' linkProps={this._generateBlogPageLinks()} />
      Blog Page
    </div>
  }
}

export {BlogPage};
