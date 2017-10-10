import React, { Component } from 'react';

class SingleComment extends Component {
  render() {
    return (
      <article className="single-comment">
        <div className="single-comment__icon"></div>
        <div className="single-comment__content">
          <h2 className="single-comment__content__name">{this.props.user}</h2>
          <span className="single-comment__content__date">1d</span>
          <p className="single-comment__content__text">
            {this.props.text}
          </p>
        </div>
      </article>
    );
  }
}

export default SingleComment;
