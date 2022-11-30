import React from "react";

import './authorsList.css';

import Author from "../Author/Author";

class AuthorsList extends React.Component {

    render() {
        return (
            <div className="AuthorsList">
                {
                    this.props.authors.map(author => {
                        return <Author author={author} key={Math.floor(Math.random() * 999999999)} />
                    })
                }
            </div>
        )
    }
}

export default AuthorsList;