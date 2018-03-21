import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Main from 'components/layout/Main';
import Sidebar from 'components/layout/Sidebar';
import Split from 'components/layout/Split';

import Header from 'components/app/Header';

class Home extends Component {
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
                        <h1>{baseClassName} bees are nice.</h1>
                    </Main>
                </Split>
            </React.Fragment>
        );
    }
}

export default hot(module)(Home);
