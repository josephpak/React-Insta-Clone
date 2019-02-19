import React from 'react';
import './CommentInput.css';

const CommentInput = () => {
    return (
        <div className="comment-input-container">
            <input type="text" placeholder="Add a comment..."></input>
        </div>
    )
}

export default CommentInput;