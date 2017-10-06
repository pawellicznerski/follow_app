import React, { Component } from 'react';
import CommentsGrid from './comments-grid/comments-grid';

class Comments extends Component {
  constructor(props){
    super(props);
    this.state={
      showComments:true,
      commentsCounter:"(23)",
    }
  }
  render() {
    return (
      <div className="comments">
        <button className="comments__toggle-comments">{this.state.showComments?"Hide ":"Show "}comments{this.state.commentsCounter}</button>
        <CommentsGrid></CommentsGrid>
        <input className="comments__input"></input>
      </div>
    );
  }
}

export default Comments;
