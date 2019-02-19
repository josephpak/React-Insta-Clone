import React from 'react';
import Comment from '../Comment/Comment'
import PropTypes from 'prop-types';
import './CommentSection.css';

// Each CommentSection will receive a prop from PostContainer called comments
// comments is an array of objects (each object element is a comment)

const CommentSection = props => {

    return (
        <div className="comments-container">
            {props.comments.map((comment, i) => (
                <Comment key={i} comment={comment} />
            ))}
        </div>
    )
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        })
    )
}

CommentSection.defaultProps = {
    comments: []
}

export default CommentSection;