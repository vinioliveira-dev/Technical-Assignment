import React from "react";

import './author.css';

class Author extends React.Component {
    
    render () {
        const name = this.props.author.name ? this.props.author.name : '';

        const alternateNamesItem = this.props.author.alternateNames.map(
            (name) => <li key={this.props.author.key}>{`"${name}"`}</li>
        );

        const isAlternateNames = this.props.author.alternateNames;

        return (
            <div className="Author-Information">
                <h3>{name}</h3>
                <p className={isAlternateNames ? 'decorated' : 'hidden'}>Also known as:</p>
                <ul className={isAlternateNames ? '' : 'hidden'}>
                    {alternateNamesItem}
                </ul>
            </div>
        )
    }
}

export default Author;