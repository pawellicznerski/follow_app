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
    const {comments, posts}= this.props;
    return (
      <div className="comments">
        <button className="comments__toggle-comments">{this.state.showComments?"Hide ":"Show "}comments{comments[posts[0].code]?`(${comments[posts[0].code].length})`:"(0)"}</button>
        <CommentsGrid {...this.props}></CommentsGrid>
        <div className="comments__input-cnt">
          <input type="text" className="comments__input" placeholder="Add a comment"></input>
        </div>
      </div>
    );
  }
}

export default Comments;
