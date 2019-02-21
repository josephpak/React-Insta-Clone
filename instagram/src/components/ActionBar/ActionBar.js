import React from 'react';
import styled from 'styled-components';

import emptyheart from './heart-empty.svg';
import filledheart from './heart-filled.jpg'
import comment from './comment.png';


const ActionBarWrapper = styled.div`
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    padding-bottom: 2px;

    .new-interaction-bar {
        display: flex;
        width: 100%;
        justify-content: flex-start;
        padding: 0 20px;
        align-items: center;
        padding-bottom: 3px;

        .heart {
            background-color: rgba(0, 0, 0, 0);
            border: none;
            padding: 0;

            img {
                width: 24px;
                height: 24px;
            }

            &:focus {
                outline: none;
            }
        }

        .comment {
            background-color: rgba(0, 0, 0, 0);
            border: none;
            padding: 0;

            img {
                width: 26px;
                height: 26px;
                margin: 0 15px;
            }
        }
    }
    .likes {
        font-weight: bold;
        font-size: 1.4rem;
        padding: 5px 20px;
        display: flex;
        width: 100%;
    }
`

const ActionBar = props => {
    return (
        <ActionBarWrapper>
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
        </ActionBarWrapper>
    )
}

export default ActionBar;