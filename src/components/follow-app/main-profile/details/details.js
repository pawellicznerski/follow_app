import React, { Component } from 'react';
// import Pic from './Rick-astley.jpg';


class Details extends Component {
  // increment(){
  //   // const caption = this.props.posts[0].caption;
  // }
  render() {
    const {i} = this.props.posts[0];
    return (
      <div className="details">
        <div className="details__img"></div>
        <div className="details__text">
          <h1 className="details__text__name">
            {this.props.posts[0].caption}
            <div onClick={this.props.increment.bind(null,i)} className="details__text__name__likes-btn"></div>
          </h1>
          <span className="details__text__address">
            {this.props.posts[0].address}
          </span>
        </div>
      </div>
    );
  }
}

export default Details;
