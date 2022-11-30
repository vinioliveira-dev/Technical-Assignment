import React from "react";

import './searchResults.css';

import AuthorsList from "../AuthorsList/AuthorsList";

class SearchResults extends React.Component {

    render () {
        return (
            <div className="SearchResults">
                <h2>Results:</h2>
                <AuthorsList authors={this.props.searchResults} />
            </div>
        )
    }
}

export default SearchResults;