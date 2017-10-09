import React, { Component } from 'react';

class SingleComment extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  render() {
    const {posts, comments}=this.props;
    return (
      <article className="single-comment">
        <div className="single-comment__icon"></div>
        <div className="single-comment__content">
          <h2 className="single-comment__content__name">Gabrysia Licznerska</h2>
          <span className="single-comment__content__date">1d</span>
          <p className="single-comment__content__text">
            {comments[posts[0].code][0].text}
          </p>
        </div>
      </article>
    );
  }
}

export default SingleComment;
