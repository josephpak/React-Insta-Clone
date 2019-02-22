import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Username } from '../Styles/Reusables/Username'

const PostWrapper = styled.div`
    width: 100%;

    img {
        max-width: 100%;
    }
`

const PostHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 16px;

    img {
        border-radius: 50%;
        width: 30px;
        height: 30px;
    }
`

const PostHeaderUsername = styled(Username)`
    font-weight: bold; 
    padding-left: 12px;   
`

const Post = props => {
    return (
        <PostWrapper>
            <PostHeader>
                <img alt="user-profile" src={props.postData.thumbnailUrl}></img>
                <PostHeaderUsername>{props.postData.username}</PostHeaderUsername>
            </PostHeader>
            
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