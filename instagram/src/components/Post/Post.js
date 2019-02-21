import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostWrapper = styled.div`
    width: 100%;

    .user-content-header {
        display: flex;
        align-items: center;
        padding: 16px;

        img {
            border-radius: 50%;
            width: 30px;
            height: 30px;
        }

        h1 {
            font-weight: bold;
            font-size: 1.4rem;
            padding-left: 12px;
        }
    }

    img {
        max-width: 100%;
    }

`

const Post = props => {
    return (
        <PostWrapper>
            <div className="user-content-header">
                <img alt="user-profile" src={props.postData.thumbnailUrl}></img>
                <h1>{props.postData.username}</h1>
            </div>
            
            <img alt="post" src={props.postData.imageUrl}></img>
        </PostWrapper>
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