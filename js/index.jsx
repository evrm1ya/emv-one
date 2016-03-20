
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {HomePage} from './components/home-page/home-page';
import {BassPage} from './components/bass-page/bass-page';
import {PortfolioPage} from './components/portfolio-page/portfolio-page';
import {ContactPage} from './components/contact-page/contact-page';
import {BlogPage} from './components/blog-page/blog-page';

class MainLayout extends React.Component {
  constructor() {
    super();
    this._getCurrentYear = this._getCurrentYear.bind(this);
  }
  render() {
    return <div className='main-layout'>
      <div className='content'>
        {this.props.children}
        <footer>
          Copyright &copy; {this._getCurrentYear()} Evan Vermilyea
        </footer>
      </div>
    </div>
  }
  _getCurrentYear() {
    let date = new Date();
    let currentYear = date.getFullYear();
    return currentYear;
  }
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='' component={MainLayout}>
      <Route path='/' component={HomePage}></Route>
      <Route path='/bass' component={BassPage}></Route>
      <Route path='/portfolio' component={PortfolioPage}></Route>
      <Route path='/contact' component={ContactPage}></Route>
      <Route path='/blog' component={BlogPage}></Route>
    </Route>
  </Router>,
  document.querySelector('.app-container')
);
