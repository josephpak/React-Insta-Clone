import React from 'react';
import PostContainer from '../PostContainer/PostContainer'
import SearchBar from '../SearchBar/SearchBar';
import igcamera from './igcamera.svg';
import iglogo from './iglogo.png';
import heart from './like.svg';
import user from './user.png';
import compass from './compass.png';

const PostsPage = props => {
    return (
        <>
            <header>
            <div className="header-left">
                <img className="camera-logo" alt="camera-icon" src={igcamera}></img>
                <img className="text-logo" alt="text-icon" src={iglogo}></img>
            </div>
            <SearchBar 
            filterSearch={props.filterSearch}
            />
            <div className="header-right">
                <img className="navigate" alt="navigate" src={compass}></img>
                <img className="likes" alt="likes" src={heart}></img>
                <img className="user-settings" alt="user-settings" src={user}></img>
            </div>
        </header>
        <div className="posts-container">
            {props.postData.map((post, i) => (
            <PostContainer 
            key={i} 
            postData={post} 
            postID={post.postID}
            updateComments={props.updateComments}
            updateLiked={props.updateLiked}
            updateLikes={props.updateLikes}/>
            ))}
        </div>
      </>
    )
}

export default PostsPage;