import React, { Component } from 'react';
import dummyData from './dummy-data';
import './reset.css';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar';
import igcamera from './igcamera.svg';
import iglogo from './iglogo.png';
import heart from './like.svg';
import user from './user.png';
import compass from './compass.png'

// Store dummyData in a state variable called postData
// dummyData is an array of objects
// Pass down each object element in dummyData to PostContainer as a prop called postData

class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: []
    }
  }

  componentDidMount() {
    this.setState({
      postData: dummyData
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <div className="header-left">
            <img className="camera-logo" alt="camera-icon" src={igcamera}></img>
            <img className="text-logo" alt="text-icon" src={iglogo}></img>
          </div>
          <SearchBar />
          <div className="header-right">
            <img className="navigate" alt="navigate" src={compass}></img>
            <img className="likes" alt="likes" src={heart}></img>
            <img className="user-settings" alt="user-settings" src={user}></img>
          </div>
        </header>
        <div className="posts-container">
          {this.state.postData.map((post, i) => (
            <PostContainer key={i} postData={post} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
