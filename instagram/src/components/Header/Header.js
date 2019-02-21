import React from 'react';

import igcamera from './igcamera.svg';
import iglogo from './iglogo.png';
import heart from './like.svg';
import user from './user.png';
import compass from './compass.png';

import SearchBar from '../SearchBar/SearchBar';


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
            <header>
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
            </header>
        )
    }
}

export default Header;