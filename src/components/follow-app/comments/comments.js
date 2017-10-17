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

  // constructor(props) {
  //     super(props);
  //
  //     this.state = {
  //         menuActive: false,
  //         value:"all",
  //         todos:[],
  //         selectState:[],
  //         error:null,
  //         errortext:'',
  //         selectionActive:false,
  //         movedTextId:'',
  //     };
  // }
  //watches value change in input
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  dupa(e){
    e.preventDefault();
    // console.log(this.props.comments);
    console.log("this.props.commentId");
  }

  //watches value change in input
  handleSubmit(event) {
    event.preventDefault();
    // this.props.addComment(1,'Krzyś',"this.state.value")
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
          onSubmit={this.handleSubmit.bind(this)}
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
