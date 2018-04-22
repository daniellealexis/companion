import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import questions from 'dummyData/questions';
import { find } from 'utils/collections';

import Header from 'components/app/Header';

import Main from 'components/layout/Main';
import Sidebar from 'components/layout/Sidebar';
import Split from 'components/layout/Split';

import UserAvatar, { LARGE_SIZE } from 'components/common/UserAvatar';

import QuestionImageHeader from './subcomponents/QuestionImageHeader';
import QuestionContent from './subcomponents/QuestionContent';

import './styles.styl';

class Question extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
    };

    constructor(props) {
        const { id } = props;
        const question = find(questions, { id: parseInt(id, 10) });

        super(props);

        this.question = question;
        this.user = question.user;
    }

    render() {
        const baseClassName = this.constructor.name;

        return (
            <React.Fragment>
                <Header />
                <QuestionImageHeader
                    imageUrl={this.question.imageUrl}
                    createdAt={this.question.createdAt}
                    category={this.question.category}
                    points={this.question.points}
                />
                <Split className={baseClassName} >
                    <Sidebar>
                        <UserAvatar {...this.user} size={LARGE_SIZE} />
                    </Sidebar>
                    <Main>
                        <QuestionContent
                            id={this.question.id}
                            title={this.question.title}
                            text={this.question.text}
                        />
                    </Main>
                </Split>
            </React.Fragment>
        );
    }
}

export default hot(module)(Question);
