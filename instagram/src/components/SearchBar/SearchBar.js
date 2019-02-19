import React from 'react';
import './SearchBar.css'

const SearchBar = () => {
    return (
        <div className="search-bar-container">
            <input className="search-bar" type="text" placeholder="Search.."></input>
        </div>
    )
}

export default SearchBar;