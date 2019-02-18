import React from 'react';
import './ActionBar.css'

const ActionBar = props => {
    return (
        <div className="action-bar-container">
            <div className="new-interaction-bar">
                <div>Like Icon</div>
                <div>Comment Icon</div>
            </div>
            <p className="likes">{props.likes} likes</p>
        </div>
    )
}

export default ActionBar;