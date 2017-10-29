import React, { Component } from 'react';
import SingleComment from './__comments-grid__single-comment/comments-grid__single-comment';
import _ from 'lodash';

class CommentsGrid extends Component {
  renderItems(timeValue) {
      const {code} = this.props.posts[0];
      const commentsLength = this.props.comments[code].length;
      return _.map(this.props.comments[code], (comment, index) => comment?<SingleComment key={index} {...comment} commentId={index} {...this.props} commentsLength={commentsLength}
      timeValue={timeValue}/>: null);
  }
  render() {
    const timeValue = Number(new Date())
    return (
      <div className="comments-grid">
        {this.renderItems(timeValue)}
      </div>
    );
  }
}

export default CommentsGrid;
