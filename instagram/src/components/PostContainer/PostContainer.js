import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import ActionBar from '../ActionBar/ActionBar';
import Post from '../Post/Post'
import CommentInput from '../CommentInput/CommentInput'
import PropTypes from 'prop-types';
import './PostContainer.css';

// Each PostContainer receives a prop called postData from App
// postData is an object that represent a single post and its related content/data
// Each postData object has the following properties
// 1. username (string)
// 2. thumbnailUrl (url)
// 3. imageUrl (url)
// 4. likes (integer)
// 5. timestamp (string)
// 6. comments (array of objects)

class PostContainer extends React.Component {
    constructor(props) {
        super();
        this.state = {
            comments: props.postData.comments,
            likes: props.postData.likes,
            liked: false
        }
    }

    addComment = (e, comment) => {
        e.preventDefault();
        if (comment.length > 0){
            const newComment = {
                username: "josephjpak",
                text: comment
            }
            this.setState({
                comments: [...this.state.comments, newComment]
            })
        }
    }

    toggleLike = e => {
        e.preventDefault();
        this.setState({
            liked: !this.state.liked
        })
        if (!this.state.liked) {
            this.setState(state => ({
                likes: state.likes + 1
            }))
        } else {
            this.setState(state => ({
                likes: state.likes - 1
            }))
        }
    }

    render() {
        return (
            <div className="post-container">
                <Post postData={this.props.postData} />
                <ActionBar 
                likes={this.state.likes} 
                liked={this.state.liked}
                toggleLike={this.toggleLike}
                />
                <CommentSection comments={this.state.comments} />
                <CommentInput 
                addComment={this.addComment}
                />
            </div>
        )
    }
    
}

PostContainer.propTypes = {
    postData: PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        comments: PropTypes.arrayOf(
            PropTypes.shape({
                username: PropTypes.string,
                text: PropTypes.string
            })
        )
    })
}

export default PostContainer;

