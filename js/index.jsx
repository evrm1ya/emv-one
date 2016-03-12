
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {HomePage} from './components/home-page/home-page';
import {BassPage} from './components/bass-page/bass-page';
import {PortfolioPage} from './components/portfolio-page/portfolio-page';
import {ContactPage} from './components/contact-page/contact-page';
import {PhotosPage} from './components/photos-page/photos-page';
import {logDispatcher, Dispatcher} from './dispatcher/dispatcher';

logDispatcher();

class MainLayout extends React.Component {
  render() {
    return <div className='main-layout'>
      <div className='content'>
        {this.props.children}
      </div>
    </div>
  }
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='' component={MainLayout}>
      <Route path='/' component={HomePage}></Route>
      <Route path='/bass' component={BassPage}></Route>
      <Route path='/portfolio' component={PortfolioPage}></Route>
      <Route path='/contact' component={ContactPage}></Route>
      <Route path='/photos' component={PhotosPage}></Route>
    </Route>
  </Router>,
  document.querySelector('.app-container')
);
