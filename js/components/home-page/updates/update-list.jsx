
import React, {Component, PropTypes} from 'react';
import {UpdatePost} from './update-post';
import {homeUpdateStore} from '../../../stores/home-updates/home-update-store';

class UpdateList extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPost: '',
      firstPost: '',
      lastPost: ''
    };
    this._renderPosts = this._renderPosts.bind(this);
    this._handleReverseClick = this._handleReverseClick.bind(this);
    this._handleForwardClick = this._handleForwardClick.bind(this);
    this._getReverseBtnStyle = this._getReverseBtnStyle.bind(this);
    this._getForwardBtnStyle = this._getForwardBtnStyle.bind(this);
  }
  componentWillMount() {
    let firstPost = homeUpdateStore[0].id;
    let lastPost = homeUpdateStore[homeUpdateStore.length - 1].id;
    this.setState({
      currentPost: firstPost,
      firstPost,
      lastPost
    });
  }
  render() {
    return <div> 
      <ul>
        {this._renderPosts()}
      </ul>
      <button
        className={this._getReverseBtnStyle()}
        onClick={this._handleReverseClick}
        >
        <i className='fa fa-chevron-left'></i>
      </button>
      <button 
        className={this._getForwardBtnStyle()}
        onClick={this._handleForwardClick}
        >
        <i className='fa fa-chevron-right'></i>
      </button>
    </div>
  }
  _renderPosts() {
    let firstPost = this.state.currentPost;
    return homeUpdateStore.map(function(post) {
      return <UpdatePost 
        key={post.id}
        {...post}
        display={(post.id === firstPost) ? 'visible' : 'hidden'}
      />
    });
  }
  _handleReverseClick() {
    let currentPost = this.state.currentPost;
    let firstPost = this.state.firstPost;
    if (currentPost !== firstPost) {
      let minusOne = Number(currentPost.split('_')[1]) - 1;
      currentPost = `POST_${minusOne}`;
      this.setState({currentPost});
    }
  }
  _handleForwardClick() {
    let currentPost = this.state.currentPost;
    let lastPost = this.state.lastPost;
    if (currentPost !== lastPost) {
      let plusOne = Number(currentPost.split('_')[1]) + 1;
      currentPost = `POST_${plusOne}`;
      this.setState({currentPost});
    }
  }
  _getReverseBtnStyle() {
    return (this.state.currentPost === this.state.firstPost) ? 'reverse dark' : 'reverse';
  }
  _getForwardBtnStyle() {
    return (this.state.currentPost === this.state.lastPost) ? 'forward dark' : 'forward';
  }
}

export {UpdateList};
