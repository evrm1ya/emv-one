
import React, {Component, PropTypes} from 'react';
import {UpdateList} from './update-list';

class HomeUpdates extends React.Component {
  render() {
    return <section className='home-update-container'>
      <h2>Updates</h2>
      <UpdateList/>
    </section>
  }
}

export {HomeUpdates};
