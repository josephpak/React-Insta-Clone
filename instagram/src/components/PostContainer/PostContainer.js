import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

// Each PostContainer receives a prop called postdata from App
// postdata is an object that represent a single post and its related content/data
// Each postData object has the following properties
// 1. username (string)
// 2. thumbnailUrl (url)
// 3. imageUrl (url)
// 4. likes (integer)
// 5. timestamp (string)
// 6. comments (array of objects)

const PostContainer = props => {
    return (
        <div className="post-container">
            <div className="user-content-container"></div>
            <CommentSection comments={props.postData.comments} />
        </div>
    )
}


export default PostContainer;