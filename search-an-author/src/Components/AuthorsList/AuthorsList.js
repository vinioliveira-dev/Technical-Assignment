import React from "react";

import './authorsList.css';

import Author from "../Author/Author";

class AuthorsList extends React.Component {

    render() {

        return (
            <div className="AuthorsList">
                {
                    this.props.authors.map(author => {
                        return <Author author={author} key={author.key} />
                    })
                }
            </div>
        )
    }
}

export default AuthorsList;