import React, { Component } from 'react';
// import { hot } from 'react-hot-loader';

import Main from 'components/layout/Main';
import Sidebar from 'components/layout/Sidebar';
import Split from 'components/layout/Split';

import Header from 'components/app/Header';
import Feed from 'components/app/Feed';

class Home extends Component {
    render() {
        const baseClassName = this.constructor.name;

        return (
            <React.Fragment>
                <Header />
                <Split className={baseClassName} >
                    <Sidebar>
                        <p>Filters</p>
                        {/* List menu */}
                        {/* Contact List */}
                    </Sidebar>
                    <Main>
                        {/* Filter/tool bar */}
                        {/* post form */}
                        <Feed />
                    </Main>
                </Split>
            </React.Fragment>
        );
    }
}

export default Home;
