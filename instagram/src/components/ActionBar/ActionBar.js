import React from 'react';
import './ActionBar.css'
import emptyheart from './heart-empty.svg';
import filledheart from './heart-filled.jpg'
import comment from './comment.png'

const ActionBar = props => {
    return (
        <div className="action-bar-container">
            <div className="new-interaction-bar">
                <button 
                    className="heart"
                    onClick={props.toggleLike}
                >
                <img 
                    alt="like" 
                    src={!props.liked ? emptyheart : filledheart}
                ></img>
                </button>
                <button className="comment"><img alt="comment" src={comment}></img></button>
            </div>
            <p className="likes">{props.likes} likes</p>
        </div>
    )
}

export default ActionBar;