import React, { Component } from 'react';
// import Pic from './Rick-astley.jpg';


class Details extends Component {
  render() {
    return (
        <div className="main-profile__details">
          <div className="main-profile__details__img"></div>
          <div className="main-profile__details__text">
            <h1 className="main-profile__details__text__name">Rick Ashtley</h1>
            <span className="main-profile__details__text__address">Swarzędz, Poland</span>
          </div>
        </div>
    );
  }
}

export default Details;
