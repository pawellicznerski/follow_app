import React, { Component } from 'react';
import SingleCounter from "./__follows-likes__counters__single-counter/follows-likes__counters__single-counter";

export default class Counters extends Component {
  render() {
    return (
      <div className="follows-likes__counters">
        <SingleCounter number={this.props.posts[0].likes} text="likes"/>
        <SingleCounter number={this.props.posts[0].follows} text="following"/>
        <SingleCounter number={this.props.posts[0].follows} text="followers"/>
      </div>
    );
  }
}
