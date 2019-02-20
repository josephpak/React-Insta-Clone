import React, { Component } from 'react';
import dummyData from './dummy-data';
import './reset.css';
import './App.css';
import PostsPage from './components/PostsPage/PostsPage';
import authenticate from './components/authentication/authenticate';
import uuidv4 from 'uuid';

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
      postData: dummyData.map(post => (
        {...post, postID: uuidv4(), liked: false}
      ))
    })
  }

  updateComments = (postID, newComments) => {
    this.setState({
        postData: this.state.postData.map(post => {
        if (post.postID === postID) {
          return {...post, comments: newComments}
          }
          return post;
        })
    })
  }

  updateLikes = (postID, newLikes) => {
    this.setState({
      postData: this.state.postData.map(post => {
        if (post.postID === postID) {
          return {...post, likes: newLikes}
        }
        return post;
      })
    })
  }

  updateLiked = (postID, newLiked) => {
    this.setState({
      postData: this.state.postData.map(post => {
        if (post.postID === postID) {
          return {...post, liked: newLiked}
        }
        return post;
      })
    })
  }

  filterSearch = (e, searchText) => {
    e.preventDefault();
    const filtered = dummyData.filter(post => searchText === post.username)
    if (filtered.length > 0) {
      this.setState({postData: filtered})
    } else {
      this.setState({postData: dummyData})
    }
  }

  render() {
    return (
      <div className="App">
        <PostsPage 
        filterSearch={this.filterSearch}
        updateComments={this.updateComments}
        updateLiked={this.updateLiked}
        updateLikes={this.updateLikes}
        postData={this.state.postData}
        />
      </div>
    );
  }
}

export default App;
