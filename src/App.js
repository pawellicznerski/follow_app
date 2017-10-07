import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import FollowAppStore from "./follow-app-store.js";
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <FollowAppStore/>
      </Provider>
    );
  }
}

export default App;
