import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component {
    constructor(props) {
        super();
        this.state = {
            searchText: ''
        }
    }

    handleSearchChange = e => {
        this.setState({ searchText: e.target.value }, () => this.props.handleSearch(e, this.state.searchText))
    }
    
    render() {
        return (
            <form 
            className="search-bar-container"
            >
                <input 
                className="search-bar" 
                type="text" 
                placeholder="Search.."
                value={this.state.searchText}
                onChange={this.handleSearchChange}
                ></input>
            </form>
        )
    }
}

export default SearchBar;