import React, { Component } from 'react';
import CommentsGrid from './comments-grid/comments-grid';

class Comments extends Component {
  constructor(props){
    super(props);
    this.state={
      showComments:true,
      commentsCounter:"(23)",
      comment:'',
      user:''
    };
    this.handleInputChange=this.handleInputChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.toggleComments=this.toggleComments.bind(this)
  }
// componentDidMount(){
//   console.log(this);
//   console.log(this.state.showComments);
// }// tu jest fit

  toggleComments(){
    this.setState({
      showComments:!this.state.showComments,
    });
  }// tu jest undefined

  handleSubmit(e) {
    e.preventDefault();
    this.props.addComment('BAcJeJrQca9'
,this.state.user,this.state.comment);

    this.setState({
      user: '',
      comment:''
    });

  }
  handleInputChange(e){
    // e.preventDefault();
    // console.log(e.target);
    const target = e.target;
    const value = target.value;
    // console.log(value);
    const name = target.name;
    // console.log(name);
    this.setState({
       [name]: value,
     });
    //  console.log(this.state.user);
    //  console.log(this.state.comment);
  } //end of handleInputChange

  render() {
    const {comments, posts}= this.props;
    return (
      <div className="comments">
        <button
          onClick={this.toggleComments.bind(this)} className="comments__toggle-comments">{this.state.showComments?"Hide ":"Show "}comments{comments[posts[0].code]?`(${comments[posts[0].code].length})`:"(0)"} </button>
          <div
            className={this.state.showComments?"show":"hide"}
            >
            <CommentsGrid {...this.props}/>
            <form
              className="comments__input-cnt"
              onSubmit={this.handleSubmit}
              >
              <input
                value={this.state.comment}
                type="text"
                className="comments__input"
                placeholder="Add a comment"
                onChange={this.handleInputChange}
                name="comment"
              />
              <input
                value={this.state.user}
                type="text"
                className="comments__input"
                placeholder="Your name"
                onChange={this.handleInputChange}
                name="user"
              />
            <input type="submit" value="submit"></input>
            </form>
          </div>

      </div>
    );
  }
}

export default Comments;
