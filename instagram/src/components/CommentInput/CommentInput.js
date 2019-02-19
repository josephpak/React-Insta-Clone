import React from 'react';
import './CommentInput.css';

const CommentInput = () => {
    return (
        <div className="comment-input-container">
            <form>
                <textarea className="add-comment-input" type="text" placeholder="Add a comment..."></textarea>
            </form>
        </div>
    )
}

export default CommentInput;