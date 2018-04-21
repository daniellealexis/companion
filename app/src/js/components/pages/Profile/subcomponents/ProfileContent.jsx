import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Tabs, Tab, JUSTIFY_END } from 'components/common/Tabs';

import ActivityTimeline from './ActivityTimeline';
import PostTimeline from './PostTimeline';

const ACTIVITY = 'Activity';
const POSTS = 'Posts';
const TAB_CONTENTS = 'Tab Contents';

export default class ProfileContent extends Component {
    static propTypes = {
        userId: PropTypes.number.isRequired,
    };

    state = {
        activeTabIndex: 0,
    };

    handleTabChange = newTabIndex => this.setState({ activeTabIndex: newTabIndex });

    render() {
        const baseClassName = this.constructor.name;
        const { userId } = this.props;
        const { activeTabIndex } = this.state;

        return (
            <div className={baseClassName}>
                <header className={`${baseClassName}__header`}>
                    <p>Default Filter DROPDOWN</p>
                    <Tabs
                        justify={JUSTIFY_END}
                        onTabChange={this.handleTabChange}
                        activeIndex={activeTabIndex}
                    >
                        <Tab title={ACTIVITY} />
                        <Tab title={POSTS} />
                    </Tabs>
                </header>
                <div
                    className={`${baseClassName}__tab-content`}
                    aria-label={TAB_CONTENTS}
                    role="tabpanel"
                >
                    {activeTabIndex === 0 &&
                        <ActivityTimeline userId={userId} />
                    }
                    {activeTabIndex === 1 &&
                        <PostTimeline userId={userId} />
                    }
                </div>
            </div>
        );
    }
}
