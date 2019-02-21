import React from 'react';
import PostContainer from '../PostContainer/PostContainer'
import SearchBar from '../SearchBar/SearchBar';
import igcamera from './igcamera.svg';
import iglogo from './iglogo.png';
import heart from './like.svg';
import user from './user.png';
import compass from './compass.png';
import uuidv4 from 'uuid';
import dummyData from './dummy-data';


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
    
      filterSearch = (e, searchText) => {
        e.preventDefault();
        const filtered = dummyData.filter(post => searchText === post.username)
        if (filtered.length > 0) {
          this.setState({postData: filtered})
        } else {
          this.setState({postData: dummyData})
        }
      }

      clearLocalStorage = e => {
        e.preventDefault();
        localStorage.clear();
        window.location.reload();
      };
    
    render() {
        return (
            <>
                <header>
                <div className="header-left">
                    <img className="camera-logo" alt="camera-icon" src={igcamera}></img>
                    <img className="text-logo" alt="text-icon" src={iglogo}></img>
                </div>
                <SearchBar 
                filterSearch={this.filterSearch}
                />
                <div className="header-right">
                    <img className="navigate" alt="navigate" src={compass}></img>
                    <img className="likes" alt="likes" src={heart}></img>
                    <button onClick={this.clearLocalStorage}><img className="user-settings" alt="user-settings" src={user}></img></button>
                </div>
            </header>
            <div className="posts-container">
                {this.state.postData.map((post, i) => (
                <PostContainer 
                key={i} 
                postData={post} 
                postID={post.postID}
                updateComments={this.updateComments}
                updateLikes={this.updateLikes}/>
                ))}
            </div>
          </>
        )
    }
    
    
}

export default PostsPage;