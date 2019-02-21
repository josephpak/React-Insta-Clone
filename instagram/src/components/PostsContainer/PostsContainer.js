import React from 'react';
import PostContainer from '../PostContainer/PostContainer';
import styled from 'styled-components';

// PostsContainer has access to a prop called postData that represents our initial dummyData array that PostsPage.js received and passed down
// postData is an array of objects
// PostsContainer will pass down each post element (an object) in the postData array to PostContainer as a foobar element called post and the methods to update the our root postData each time a user likes a post or comments on a post

const PostsContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #FAFAFA;
    padding-top: 111px;
`

const PostsContainer = props => {
    return (
        <PostsContainerWrapper>
            {props.postData.map((post, i) => (
            <PostContainer 
            key={i} 
            post={post} 
            postID={post.postID}
            updateComments={props.updateComments}
            updateLikes={props.updateLikes}/>
            ))}
        </PostsContainerWrapper>
    )
}

export default PostsContainer;