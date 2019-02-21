import React from 'react';

import PostsContainer from '../PostsContainer/PostsContainer';
import Header from '../Header/Header'

import dummyData from './dummy-data';
import uuidv4 from 'uuid';

// PostsPage has access to a prop called postData that represents our initial dummyData array that we receive. We will hydrate our state initially with that data as postData
// This component thus will serve as our root for application data
// Pass down the postData array to PostsContainer as a prop called postData and the methods to update the root postData each time a user likes a post or comments on a post

class PostsPage extends React.Component {
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

      filterSearch = (e, searchText) => {
        e.preventDefault();
        const filtered = dummyData.filter(post => searchText === post.username)
        if (filtered.length > 0) {
          this.setState({postData: filtered})
        } else {
          this.setState({postData: dummyData})
        }
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
    
      updateLikes = (postID, newLikes, newLiked) => {
        this.setState({
          postData: this.state.postData.map(post => {
            if (post.postID === postID) {
              return {...post, likes: newLikes, liked: newLiked}
            }
            return post;
          })
        })
      }
    
    render() {
        return (
          <>
            <Header
            filterSearch={this.filterSearch}
            />
            <PostsContainer 
            postData={this.state.postData}
            updateComments={this.updateComments}
            updateLikes={this.updateLikes}
            />
          </>
        )
    }
    
    
}

export default PostsPage;