import React from 'react';
import Comment from '../Comment/Comment';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Each CommentSection will receive a prop from PostContainer called comments
// comments is an array of objects (each object element is a comment)

const CommentSectionWrapper = styled.div`
    padding: 0 20px;
    padding-bottom: 20px;
`

const CommentSection = props => {

    return (
        <CommentSectionWrapper>
            {props.comments.map((comment, i) => (
                <Comment key={i} comment={comment} />
            ))}
        </CommentSectionWrapper>
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