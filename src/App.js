import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import FollowApp from "./components/follow-app/follow-app.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FollowApp/>
      </div>
    );
  }
}

export default App;
