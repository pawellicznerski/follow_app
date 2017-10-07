import React, { Component } from 'react';

class SingleComment extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  render() {
    return (
      <article className="single-comment">
        <div className="single-comment__icon"></div>
        <div className="single-comment__content">
          <h2 className="single-comment__content__name">Gabrysia Licznerska</h2>
          <span className="single-comment__content__date">1d</span>
          <p className="single-comment__content__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum scelerisque convallis. Praesent non fringilla risus. Proin blandit eget lacus nec facilisis. Curabitur pellentesque finibus dictum. Fusce vel ornare sem. Integer interdum velit sed molestie interdum. Etiam maximus dui eget diam commodo lacinia.
          </p>
        </div>
      </article>
    );
  }
}

export default SingleComment;
