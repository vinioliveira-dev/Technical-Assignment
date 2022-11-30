import React from "react";

import './author.css';

class Author extends React.Component {

    render () {
        let keyCount = 0;

        const name = this.props.author.name ? this.props.author.name : '';

        const alternateNamesItem = this.props.author.alternateNames?.map(
            (name) => <li key={keyCount + 18 + 'b'}>{`"${name}"`}</li>
        );

        const hasAlternateNames = this.props.author.alternateNames;

        const topWork = this.props.author.topWork;

        const birthDate = this.props.author.birthDate;

        const deathDate = this.props.author.deathDate;

        const workCount = this.props.author.workCount;

        const topSubjectsItem = this.props.author.topSubjects?.map(
            (subject) => <li key={keyCount + 254 + 'su'}>{`"${subject}", `}</li>
        );

        const hasTopSubjects = this.props.author.topSubjects;

        return (
            <div className="Author-Information">
                <h3>{name}</h3>
                <p className={hasAlternateNames ? 'decorated' : 'hidden'}>Also known as:</p>
                <ul className={hasAlternateNames ? '' : 'hidden'}>
                    {alternateNamesItem}
                </ul>
                <p><span className={topWork ? 'decorated': 'hidden'}>Best Work: </span>{topWork}</p>
                <p className={birthDate ? '' : 'hidden'}><span className={birthDate ? 'decorated' : 'hidden'}>Birth Date: </span>{birthDate}</p>
                <p className={deathDate ? '' : 'hidden'}><span className={deathDate ? 'decorated' : 'hidden'}>Death Date: </span>{deathDate}</p>
                <p className={workCount ? '' : 'hidden'}><span className={workCount ? 'decorated' : 'hidden'}>Number of Works: </span>{workCount}</p>
                <p className={hasTopSubjects ? 'decorated' : 'hidden'}>Subjects/Categories:</p>
                <ul className={hasTopSubjects ? '' : 'hidden'}>
                    {topSubjectsItem}
                </ul>
            </div>
        )
    }
}

export default Author;