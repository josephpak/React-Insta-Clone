import React from 'react';
import './ActionBar.css'
import heart from './like.svg';

const ActionBar = props => {
    return (
        <div className="action-bar-container">
            <div className="new-interaction-bar">
                <button className="heart"><img  src={heart}></img></button>
                <div>Comment Icon</div>
            </div>
            <p className="likes">{props.likes} likes</p>
        </div>
    )
}

export default ActionBar;