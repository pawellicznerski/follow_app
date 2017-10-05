import React, { Component } from 'react';
import pic from './components/follow-app/main-profile/__main-profile__details/Rick-astley.jpg';

class Details extends Component {
  render() {
    return (
        <div className="main-profile__details">
          <img className="main-profile__details__img" alt="Rick" src={pic}></img>
          <div className="main-profile__details__text">
            <h1 className="main-profile__details__text__name">Rick Ashtley</h1>
            <span className="main-profile__details__text__address">Swarzędz, Poland</span>
          </div>
        </div>
    );
  }
}

export default Details;
