import React, { Component } from 'react';
import ShareBtn from './__main-profile__share-btn/main-profile__share-btn';
import Details from './__main-profile__details/main-profile__details';
import FollowsLikes from './__main-profile__follows-likes/main-profile__follows-likes';

class MainProfile extends Component {
  render() {
    return (
      <div className="main-profile">
        <ShareBtn/>
        <Details/>
        <FollowsLikes/>
      </div>
    );
  }
}

export default MainProfile;
