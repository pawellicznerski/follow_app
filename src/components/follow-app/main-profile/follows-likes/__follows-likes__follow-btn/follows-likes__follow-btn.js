import React, { Component } from 'react';

export default class FollowBtn extends Component {
  render() {
    const {i}= this.props.posts[0];
    return (
      <button onClick={this.props.incrementFollows.bind(null,i)} className="follows-likes__follow-btn">
        follow
      </button>
    );
  }
}
