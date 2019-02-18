import React, { Component } from 'react';
import dummyData from './dummy-data';
import './reset.css';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      postdata: {dummyData}
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <div>Image Logo</div>
          <div>Text Logo</div>
          <div>Search Bar</div>
          <div>Image</div>
          <div>Image</div>
          <div>Image</div>
        </header>
        <div className="posts-container">
          <div className="post-container">
            <div className="user-content-container">User Post</div>
            <div className="comment-section-container">Comment Section</div>
          </div>      
        </div>
      </div>
    );
  }
}

export default App;
