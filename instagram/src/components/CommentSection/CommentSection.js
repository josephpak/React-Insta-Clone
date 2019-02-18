import React from 'react';
import Comment from '../Comment/Comment'
import './CommentSection.css';

// Each CommentSection will receive a prop from PostContainer called comments
// comments is an array of objects (each object element is a comment)

const CommentSection = props => {
    return (
        <div className="comments-container">
            {props.comments.map(comment => (
                <Comment comment={comment} />
            ))}
        </div>
    )
}

export default CommentSection;