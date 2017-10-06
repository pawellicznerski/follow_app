import React, { Component } from 'react';

export default class SingleCounter extends Component {
  render() {
    return (
      <div className="follows-likes__counters__single-counter">
        <span className="follows-likes__counters__single-counter__number">{this.props.number}</span>
        <span className="follows-likes__counters__single-counter__text">{this.props.text}</span>
      </div>
    );
  }
}
