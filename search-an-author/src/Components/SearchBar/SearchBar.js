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
    }

    componentDidUpdate(prevState) {
        if (this.state.term === prevState.term) {
            return;
        }

        this.search();
    }

    render () {
        const invalidRegex = /[^A-Za-z0-9_]/gi;

        const found = this.state.term.match(invalidRegex);

        return (
            <div className="SearchBar">
                <input
                    type="text"
                    onChange={this.handleTermChange} 
                    placeholder="Type the name of an author..." />
                <p className={found && this.state.term !== '' ? "invalid-alert" : "hidden"}> <span className="red">X</span> Please make sure that you only inserted letters and/or whitespace in the input field.</p>
            </div>
        )
    }
}

export default SearchBar;