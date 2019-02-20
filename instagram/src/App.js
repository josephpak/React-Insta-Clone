import React, { Component } from 'react';
import './reset.css';
import './App.css';
import PostsPage from './components/PostsPage/PostsPage';
import authenticate from './components/authentication/authenticate';
import Login from './components/Login/Login';


// Store dummyData in a state variable called postData
// dummyData is an array of objects
// Pass down each object element in dummyData to PostContainer as a prop called postData

const ControlledDisplay = authenticate(PostsPage)(Login)

class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: []
    }
  }

  render() {
    return (
      <div className="App">
        <ControlledDisplay />
      </div>
    );
  }
}

export default App;