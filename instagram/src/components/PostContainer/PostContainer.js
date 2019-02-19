import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import ActionBar from '../ActionBar/ActionBar';
import Post from '../Post/Post'
import CommentInput from '../CommentInput/CommentInput'
import PropTypes from 'prop-types';
import './PostContainer.css';

// Each PostContainer receives a prop called postData from App
// postData is an object that represent a single post and its related content/data
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
            <Post postData={props.postData} />
            <ActionBar likes={props.postData.likes} />
            <CommentSection comments={props.postData.comments} />
            <CommentInput />
        </div>
    )
}

PostContainer.propTypes = {
    postData: PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        comments: PropTypes.arrayOf(
            PropTypes.shape({
                username: PropTypes.string,
                text: PropTypes.string
            })
        )
    })
}

export default PostContainer;

