import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import questions from 'dummyData/questions';
import { find } from 'utils/collections';

import Main from 'components/layout/Main';
import Sidebar from 'components/layout/Sidebar';
import Split from 'components/layout/Split';

import Header from 'components/app/Header';

class Question extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);
        const { id } = this.props;
        const question = find(questions, { id: parseInt(id, 10) });

        this.question = question;
        this.user = question.user;
    }

    render() {
        const baseClassName = this.constructor.name;

        return (
            <React.Fragment>
                <Header />
                <Split className={baseClassName} >
                    <Sidebar>
                        <p>{this.user.username}</p>
                    </Sidebar>
                    <Main>
                        <h1>{this.question.text}</h1>
                    </Main>
                </Split>
            </React.Fragment>
        );
    }
}

export default hot(module)(Question);
