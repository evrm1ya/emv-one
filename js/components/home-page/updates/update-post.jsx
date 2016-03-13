
import React, {Component, PropTypes} from 'react';
import {UpdateTime} from './update-time';

class UpdatePost extends React.Component {
  render() {
    return <li className='update-post'>
      <UpdateTime />
    </li>
  }
}

export {UpdatePost};
