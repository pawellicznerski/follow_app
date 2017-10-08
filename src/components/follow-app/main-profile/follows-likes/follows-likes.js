import React, { Component } from 'react';
import Counters from './__follows-likes__counters/follows-likes__counters';
import FollowBtn from './__follows-likes__follow-btn/follows-likes__follow-btn';

export default class FollowsLikes extends Component {
  render() {
    return (
      <div className="follows-likes">
        <Counters {...this.props}/>
        <FollowBtn {...this.props}/>
      </div>
    );
  }
}
