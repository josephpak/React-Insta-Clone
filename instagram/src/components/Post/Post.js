import React from 'react';
import './Post.css'

const Post = props => {
    return (
        <div className="user-content-container">
            <div className="user-content-header">
                <img className="post-thumbnail" src={props.postData.thumbnailUrl}></img>
                <h1 className="post-username">{props.postData.username}</h1>
            </div>
            
            <img className="post-img" src={props.postData.imageUrl}></img>
        </div>
    )
}

export default Post;