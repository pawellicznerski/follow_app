import React, { Component } from 'react';
import ShareBtn from './share-btn/share-btn';
import Details from './details/details';
import FollowsLikes from './follows-likes/follows-likes';

class MainProfile extends Component {
  render() {
    return (
      <div className="main-profile">
        <ShareBtn/>
        <Details {...this.props}/>
        <FollowsLikes {...this.props}/>
      </div>
    );
  }
}

export default MainProfile;
