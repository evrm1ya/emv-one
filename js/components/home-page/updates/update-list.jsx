
import React, {Component, PropTypes} from 'react';
import {UpdatePost} from './update-post';

class UpdateList extends React.Component {
  render() {
    return <ul className='update-list'>
      <UpdatePost />
    </ul>
  }
}

export {UpdateList};
