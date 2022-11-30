import React from "react";

import './author.css';

class Author extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isCollapsed: true,
        }

        this.toggleIsCollapsed = this.toggleIsCollapsed.bind(this);
    }

    toggleIsCollapsed() {
        if (this.state.isCollapsed) {
            this.setState({isCollapsed: false});
        } else if (!this.state.isCollapsed) {
            this.setState({isCollapsed: true});
        }
    }


    render () {
        let keyCount = 0;

        const name = this.props.author.name ? this.props.author.name : '';

        const alternateNamesItem = this.props.author.alternateNames?.map(
            (name) => {
                keyCount ++;
                return <li key={keyCount}>{`"${name}"`}</li>
            }
        );

        const hasAlternateNames = this.props.author.alternateNames;

        const topWork = this.props.author.topWork;

        const birthDate = this.props.author.birthDate;

        const deathDate = this.props.author.deathDate;

        const workCount = this.props.author.workCount;

        const topSubjectsItem = this.props.author.topSubjects?.map(
            (subject) => {
                keyCount++;
                return <li key={keyCount}>{`"${subject}", `}</li>
            }
        );

        const hasTopSubjects = this.props.author.topSubjects;

        return (
            <div className="Author-Information">
                <h3>{name}</h3>
                <p className={hasAlternateNames ? 'decorated' : 'hidden'}>Also known as:</p>
                <ul className={hasAlternateNames ? '' : 'hidden'}>
                    {alternateNamesItem}
                </ul>
                <p className={this.state.isCollapsed ? 'hidden' : ''}><span className={topWork ? 'decorated': 'hidden'}>Best Work: </span>{topWork}</p>
                <p className={this.state.isCollapsed || !birthDate ? 'hidden' : ''}><span className={birthDate ? 'decorated' : 'hidden'}>Birth Date: </span>{birthDate}</p>
                <p className={this.state.isCollapsed || !deathDate ? 'hidden' : ''}><span className={deathDate ? 'decorated' : 'hidden'}>Death Date: </span>{deathDate}</p>
                <p className={this.state.isCollapsed || !workCount ? 'hidden' : ''}><span className={workCount ? 'decorated' : 'hidden'}>Number of Works: </span>{workCount}</p>
                <p className={this.state.isCollapsed || !hasTopSubjects ? 'hidden' : ''}>Subjects/Categories:</p>
                <ul className={!this.state.isCollapsed || hasTopSubjects ? '' : 'hidden'}>
                    {topSubjectsItem}
                </ul>
                <div className="collapse-button" onClick={this.toggleIsCollapsed}>{this.state.isCollapsed ? 'Show more...' : 'Show less'}</div>
            </div>
        )
    }
}

export default Author;