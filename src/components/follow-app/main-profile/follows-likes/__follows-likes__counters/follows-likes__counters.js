import React, { Component } from 'react';
import SingleCounter from "./__follows-likes__counters__single-counter/follows-likes__counters__single-counter";

export default class Counters extends Component {
  render() {
    return (
      <div className="follows-likes__counters">
        <SingleCounter number="345" text="likes"/>
        <SingleCounter number="321" text="following"/>
        <SingleCounter number="2344" text="followers"/>
      </div>
    );
  }
}
