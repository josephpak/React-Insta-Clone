import React from 'react';
import PropTypes from 'prop-types';
import './Post.css'

const Post = props => {
    return (
        <div className="user-content-container">
            <div className="user-content-header">
                <img className="post-thumbnail" alt="user-profile" src={props.postData.thumbnailUrl}></img>
                <h1 className="post-username">{props.postData.username}</h1>
            </div>
            
            <img className="post-img" alt="post" src={props.postData.imageUrl}></img>
        </div>
    )
}

Post.propTypes = {
    postData: PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string,
        imageUrl: PropTypes.string
    })
}

export default Post;