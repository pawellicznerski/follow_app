import React, { Component } from 'react';
import CommentsGrid from './comments-grid/comments-grid';

class Comments extends Component {
  constructor(props){
    super(props);
    this.state={
      showComments:true,
      commentsCounter:"(23)",
      value:''
    }
  }
  //watches value change in input
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  //watches value change in input
  handleSubmit(event) {
    this.props.addComment()
    this.setState({value: ''});
  }

  render() {
    const {comments, posts}= this.props;
    return (
      <div className="comments">
        <button className="comments__toggle-comments">{this.state.showComments?"Hide ":"Show "}comments{comments[posts[0].code]?`(${comments[posts[0].code].length})`:"(0)"}</button>
        <CommentsGrid {...this.props}></CommentsGrid>
        <form className="comments__input-cnt" onSubmit={this.handleSubmit} onBlur={this.handleBlur}>
          <input value='' type="text" className="comments__input" placeholder="Add a comment" onChange={this.handleChange} ></input>

        </form>
      </div>
    );
  }
}

export default Comments;
