import React from "react";

import './authorsList.css';

import Author from "../Author/Author";

class AuthorsList extends React.Component {

    render() {
        let keyTracker = 9990;

        return (

            <div className="AuthorsList">
                {
                    this.props.authors.map(author => {
                        keyTracker++;
                        return <Author author={author} key={keyTracker} />
                    })
                }
            </div>
        )
    }
}

export default AuthorsList;