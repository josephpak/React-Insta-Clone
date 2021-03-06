import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import ActionBar from '../ActionBar/ActionBar';
import Post from '../Post/Post'
import CommentInput from '../CommentInput/CommentInput'
import PropTypes from 'prop-types';
import './PostContainer.css';

// Each PostContainer receives a prop called post that represents a single 
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
            comments: props.post.comments,
            likes: props.post.likes,
            liked: props.post.liked
        }
    }

    addNewComment = (e, comment) => {
        e.preventDefault();
        if (comment.length > 0){
            const newComment = {
                username: localStorage.getItem("username"),
                text: comment
            }
            this.setState({
                comments: [...this.state.comments, newComment]
            }, () => this.props.updateComments(this.props.postID, this.state.comments))
            
        }
    }

    //  () => this.props.updateLiked(this.props.postID, this.state.liked)
   updatesLikesState = e => {
        if (!this.state.liked) {
            this.setState(prevState => ({
                likes: prevState.likes + 1
            }), () => {
                this.props.updateLikes(this.props.postID, this.state.likes, this.state.liked)
                })
        } else {
            this.setState(prevState => ({
                likes: prevState.likes - 1
            }), () => {
                this.props.updateLikes(this.props.postID, this.state.likes, this.state.liked)
            })
        }
    }


    toggleLike = e => {
        e.preventDefault();
        this.setState(prevState => ({
            liked: !prevState.liked
        }), this.updatesLikesState())
    }

    render() {
        return (
            <div className="post-container">
                <Post postData={this.props.post} />
                <ActionBar 
                likes={this.state.likes} 
                liked={this.state.liked}
                toggleLike={this.toggleLike}
                updateLikes={this.props.updateLikes}
                />
                <CommentSection comments={this.state.comments} />
                <CommentInput 
                addNewComment={this.addNewComment}
                />
            </div>
        )
    }
    
}

PostContainer.propTypes = {
    post: PropTypes.shape({
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

