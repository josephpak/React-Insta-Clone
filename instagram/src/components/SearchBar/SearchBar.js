import React from 'react';
import styled from 'styled-components';

const SearchWrapper = styled.form`
    display: flex;
    height: 18px;
    align-items: center;
    width: 100%;
    justify-content: center;

    input {
        margin-top: 51px;
        text-align: center;
        outline: none;
        padding: 7px 35px;
        border: 1px solid rgb(230, 230, 230);
        border-radius: 3px;
        font-size: 1.2rem;
        font-weight: 400;
    }

    input:focus {
        outline: none;
        text-align: left;
    }
`

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
            <SearchWrapper>
                <input 
                type="text" 
                placeholder="Search.."
                value={this.state.searchText}
                onChange={this.handleSearchChange}
                ></input>
            </SearchWrapper>
        )
    }
}

export default SearchBar;