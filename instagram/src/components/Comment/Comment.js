import React from 'react';
import PropTypes from "prop-types";
import './Comment.css'

// Each Comment will receive a prop from CommentSection called comment
// A comment is an object and has the following properties
// 1. username (string)
// 2. text (string)

const Comment = props => {
    return (
        <div className="comment-container">
            <h1 className="comment-username">{props.comment.username}</h1>
            <p className="comment-text">{props.comment.text}</p>
        </div>
    )
}

export default Comment;

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string
}