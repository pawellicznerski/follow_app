import React, { Component } from 'react';
import SingleComment from './__comments-grid__single-comment/comments-grid__single-comment';

class CommentsGrid extends Component {
  render() {
    return (
      <div className="comments-grid">
        <SingleComment {...this.props}/>
      </div>
    );
  }
}

export default CommentsGrid;
