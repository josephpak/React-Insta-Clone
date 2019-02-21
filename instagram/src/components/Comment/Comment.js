import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

// Each Comment will receive a prop from CommentSection called comment
// A comment is an object and has the following properties
// 1. username (string)
// 2. text (string)

const CommentWrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 5px 0;

    h1 {
        font-size: 1.4rem;
        font-weight: bold;
    }

    p {
        font-size: 1.4rem;
        padding-left: 5px;
    }
`

const Comment = props => {
    return (
        <CommentWrapper>
            <h1>{props.comment.username}</h1>
            <p>{props.comment.text}</p>
        </CommentWrapper>
    )
}

export default Comment;

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string
}