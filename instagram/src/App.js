import React, { Component } from 'react';
import dummyData from './dummy-data';
import './reset.css';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar';
import igcamera from './igcamera.svg';
import iglogo from './iglogo.png';

// Store dummyData in a state variable called postData
// dummyData is an array of objects
// Pass down each object element in dummyData to PostContainer as a prop called postData

class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: dummyData
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <div className="header-left">
            <img className="camera-logo" src={igcamera}></img>
            <img className="text-logo" src={iglogo}></img>
          </div>
          <SearchBar />
          <div className="header-right">
            <div>Image</div>
            <div>Image</div>
            <div>Image</div>
          </div>
        </header>
        <div className="posts-container">
          {this.state.postData.map(post => (
            <PostContainer postData={post} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
