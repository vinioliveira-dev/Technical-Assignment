import React from "react";

import './searchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }
    
    search() {
        this.props.onSearch(this.state.term);
    }

    handleTermChange(event) {
        this.setState({ term: event.target.value });
        this.search();
    }

    render () {
        return (
            <div className="SearchBar">
                <input
                    onChange={this.handleTermChange} 
                    placeholder="Type the name of an author..." />
            </div>
        )
    }
}

export default SearchBar;