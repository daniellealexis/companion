import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import users from 'dummyData/users';
import { find } from 'utils/collections';

import Main from 'components/layout/Main';
import Sidebar from 'components/layout/Sidebar';
import Split from 'components/layout/Split';

import Header from 'components/app/Header';

class Profile extends Component {
    static propTypes = {
        username: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);
        const { username } = this.props;

        this.state = {
            user: find(users, { username }),
        };
    }

    render() {
        const baseClassName = this.constructor.name;
        const { user } = this.state;

        return (
            <React.Fragment>
                <Header />
                <Split className={baseClassName} >
                    <Sidebar>
                        <p>hello friendsss!! CATS ARE COOooooL</p>
                    </Sidebar>
                    <Main>
                        <h1>{user.name}</h1>
                        <h2>{user.username}</h2>
                    </Main>
                </Split>
            </React.Fragment>
        );
    }
}

export default hot(module)(Profile);
