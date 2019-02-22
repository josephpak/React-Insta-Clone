import React from 'react';
import styled from 'styled-components';

const AddCommentWrapper = styled.div`
    padding: 0 20px;
    justify-self: flex-end;

    input {
        font-size: 1.4rem;
        font-weight: 400;
        color: rgb(38, 38, 38);
        flex-grow: 1;
        display: flex;
        width: 100%;
        flex-direction: column;
        resize: none;
        outline: none;
        border: none;
        border-top: 1px solid rgb(230, 230, 230);
        padding: 20px 0;
    }   
`

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
        this.props.addNewComment(e, this.state.commentText);
    }
    
    render() {
        return (
            <AddCommentWrapper>
                <form onSubmit={this.submitComment}>
                    <input 
                    type="text" 
                    placeholder="Add a comment..."
                    value={this.state.commentText}
                    onChange={this.handleChange}
                    ></input>
                </form>
            </AddCommentWrapper>
        )
    };
    
}

export default CommentInput;