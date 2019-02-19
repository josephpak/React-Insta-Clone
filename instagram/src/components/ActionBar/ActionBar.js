import React from 'react';
import './ActionBar.css'
import heart from './like.svg';
import comment from './comment.png'

const ActionBar = props => {
    return (
        <div className="action-bar-container">
            <div className="new-interaction-bar">
                <button className="heart"><img alt="like" src={heart}></img></button>
                <button className="comment"><img alt="comment" src={comment}></img></button>
            </div>
            <p className="likes">{props.likes} likes</p>
        </div>
    )
}

export default ActionBar;