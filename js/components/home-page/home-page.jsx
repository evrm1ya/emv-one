
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return <main className='home-page'>
      <img
        src='./public/images/emv-prof.jpg'
        alt='A portrait of Evan Vermilyea made with melted crayons.'
      />
      <h1>Evan Vermilyea</h1>
      <h2>
        Double Bass
        <i className='fa fa-circle-o'></i>
        Web Developer
      </h2>
      <nav>
        <ul>
          <li><Link to='/bass'>Bass</Link></li>
          <li><Link to='/portfolio'>Portfolio</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/photos'>Photos</Link></li>
        </ul>
      </nav>
    </main>
  }
}

export {HomePage};
