import React from 'react';
import styled, { css } from 'styled-components';

import igcamera from './igcamera.svg';
import iglogo from './iglogo.png';
import heart from './like.svg';
import user from './user.png';
import compass from './compass.png';

import SearchBar from '../SearchBar/SearchBar';

const HeaderWrapper = styled.header`
    display: flex;
    width: 100%;
    height: 71px;
    justify-content: space-evenly;
    border-bottom: 1px solid #E9E9E9; 
    position: fixed;
    background-color: white;
    z-index: 5;
    padding-right: 100px;

    .header-left {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding-left: 40px;

        .camera-logo {
            width: 24px;
            height: 24px;
            padding-right: 15px;
            padding-top: 2px;
            padding-bottom: 2px;
            border-right: 1px solid black;
        }    

        .text-logo {
            width: 103px;
            height: 29px;
            padding-top: 7px;
            padding-left: 15px;
        }
    }

    .header-right {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: center;
        padding-right: 50px;

        .navigate {
            height: 24px;
            width: 24px;
            margin: 0 10px;
        }

        .likes {
            height: 24px;
            width: 24px;
            margin: 0 10px;
        }

        button {
            border: none;
            background-color: none;
            cursor: pointer;
            padding: 0;
            margin: 0 10px;
            
            .user-settings {
                height: 24px;
                width: 24px;
            }

            &:focus {
                outline: none;
            }
        }
    }
`

class Header extends React.Component {

    handleSearch = (e, searchText) => {
        e.preventDefault();
        this.props.filterSearch(e, searchText)
    }

    clearLocalStorage = e => {
        e.preventDefault();
        localStorage.clear();
        window.location.reload();
    };
      
    render() {
        return (
            <HeaderWrapper>
                  <div className="header-left">
                      <img className="camera-logo" alt="camera-icon" src={igcamera}></img>
                      <img className="text-logo" alt="text-icon" src={iglogo}></img>
                  </div>
                  <SearchBar 
                  handleSearch={this.handleSearch}
                  />
                  <div className="header-right">
                      <img className="navigate" alt="navigate" src={compass}></img>
                      <img className="likes" alt="likes" src={heart}></img>
                      <button onClick={this.clearLocalStorage}><img className="user-settings" alt="user-settings" src={user}></img></button>
                  </div>
            </HeaderWrapper>
        )
    }
}

export default Header;