import React, { Component } from 'react';

class SingleComment extends Component {
  constructor(){
    super();
    this.state={
      showbtn:false,
    }
  }
  showBtn(){
    this.setState({
      showbtn:true,
    })
  }
  hideBtn(){
    this.setState({
      showbtn:false,
    })
  }
  render() {
    console.log(this.props.commentId);
    return (
      <article
        className="single-comment" onMouseOver={this.showBtn.bind(this)} onMouseOut={this.hideBtn.bind(this)}>
        <div className="single-comment__icon"></div>
        <div className="single-comment__content">
          <h2 className="single-comment__content__name">{this.props.user}</h2>
          <span className="single-comment__content__date">1d</span>
          <p className="single-comment__content__text">
            {this.props.text}
            <button className={this.state.showbtn?"single-comment__content__btn":"single-comment__content__btn_hidden"} onClick={this.props.removeComment.bind(this.props.commentId)}>&times;</button>
          </p>
        </div>
      </article>
    );
  }
}
export default SingleComment;
