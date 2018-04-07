import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import Main from 'components/layout/Main';
import Sidebar from 'components/layout/Sidebar';
import Split from 'components/layout/Split';

import Header from 'components/app/Header';

class Profile extends Component {
    static propTypes = {
        username: PropTypes.string.isRequired,
    };

    render() {
        const baseClassName = this.constructor.name;

        return (
            <React.Fragment>
                <Header />
                <Split className={baseClassName} >
                    <Sidebar>
                        <p>hello friendsss!! CATS ARE COOooooL</p>
                    </Sidebar>
                    <Main>
                        <h1>{this.props.username}</h1>
                    </Main>
                </Split>
            </React.Fragment>
        );
    }
}

export default hot(module)(Profile);
