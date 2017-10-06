import React, { Component } from 'react';
import SingleComment from './__comments-grid__single-comment/comments-grid__single-comment';

class CommentsGrid extends Component {
  render() {
    return (
      <ul className="comments-grid">
        <SingleComment/>
      </ul>
    );
  }
}

export default CommentsGrid;
