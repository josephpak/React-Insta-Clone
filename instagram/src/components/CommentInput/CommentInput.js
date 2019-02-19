import React from 'react';
import './CommentInput.css';

class CommentInput extends React.Component {
    constructor() {
        super();
        this.state = {
            commentText: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            commentText: e.target.value
        })
    }

    submitComment = e => {
        this.setState({ commentText: '' });
        this.props.addComment(e, this.state.commentText);
    }
    
    render() {
        return (
            <div className="comment-input-container">
                <form onSubmit={this.submitComment}>
                    <input 
                    className="add-comment-input" 
                    type="text" 
                    placeholder="Add a comment..."
                    value={this.state.commentText}
                    onChange={this.handleChange}
                    ></input>
                </form>
            </div>
        )
    };
    
}

export default CommentInput;