import React, { Component } from 'react';
import MainProfile from './main-profile/main-profile.js';

class FollowApp extends Component {
  render() {
    return (
      <div className="primary-container">
        <div className="follow-app">
          <MainProfile/>
        </div>
      </div>
    );
  }
}

export default FollowApp;
