import React, { Component } from 'react';
// import Pic from './Rick-astley.jpg';


class Details extends Component {
  render() {
    return (
        <div className="details">
          <div className="details__img"></div>
          <div className="details__text">
            <h1 className="details__text__name">
              Rick Ashtley
              <button className="details__text__name__likes-btn"></button>
            </h1>
            <span className="details__text__address">Swarzędz, Poland</span>
          </div>
        </div>
    );
  }
}

export default Details;
