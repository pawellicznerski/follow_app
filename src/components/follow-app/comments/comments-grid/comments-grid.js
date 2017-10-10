import React, { Component } from 'react';
import SingleComment from './__comments-grid__single-comment/comments-grid__single-comment';
import _ from 'lodash';

class CommentsGrid extends Component {
  renderItems() {
      const {code} = this.props.posts[0];
      return _.map(this.props.comments[code], (comment, index) => comment?<SingleComment key={index} {...comment} />: null);
  }
  render() {
    return (
      <div className="comments-grid">
        {this.renderItems()}
      </div>
    );
  }
}

export default CommentsGrid;
