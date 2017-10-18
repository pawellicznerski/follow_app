import React, { Component } from 'react';
import CommentsGrid from './comments-grid/comments-grid';

class Comments extends Component {
  constructor(props){
    super(props);
    this.state={
      showComments:true,
      commentsCounter:"(23)",
      value:''
    };
  }
componentDidMount(){
  console.log(this.props.posts);
  console.log(this.state.showComments);
}// tu jest fit

  dupa(){
    console.log(this.state.showComments);
    console.log(this.props.posts);
  }// tu jest undefined

  //watches value change in input
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  //watches value change in input
  handleSubmit() {

    this.props.addComment(1,'Krzyś',"this.state.value")
    this.setState({value: ''});
  }

  render() {
    const {comments, posts}= this.props;
    return (
      <div className="comments">
        <button
          onClick={this.dupa} className="comments__toggle-comments">{this.state.showComments?"Hide ":"Show "}comments{comments[posts[0].code]?`(${comments[posts[0].code].length})`:"(0)"} </button>
        <CommentsGrid {...this.props}></CommentsGrid>
        <form
          className="comments__input-cnt"
          onSubmit={this.handleSubmit}
          >
          <input
            value=''
            type="text"
            className="comments__input"
            placeholder="Add a comment"
            onChange={this.handleChange.bind(this)}
          ></input>
        </form>
      </div>
    );
  }
}

export default Comments;
