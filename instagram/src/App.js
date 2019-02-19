import React, { Component } from 'react';
import dummyData from './dummy-data';
import './reset.css';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar';

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
          <div>Image Logo</div>
          <div>Text Logo</div>
          <SearchBar />
          <div>Image</div>
          <div>Image</div>
          <div>Image</div>
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
