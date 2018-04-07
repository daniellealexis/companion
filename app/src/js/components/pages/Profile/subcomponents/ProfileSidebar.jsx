import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserAvatar, { LARGE_SIZE } from 'components/common/UserAvatar';
import UserDetailsList from './UserDetailsList';

export default class ProfileSidebar extends Component {
    static propTypes = {
        username: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        title: PropTypes.string,
        imageUrl: PropTypes.string.isRequired,
        followers: PropTypes.number,
        following: PropTypes.number,
        assisted: PropTypes.number,
        skillLevel: PropTypes.string,
        portfolio: PropTypes.string,
        dribble: PropTypes.string,
        behance: PropTypes.string,
        about: PropTypes.string,
    };

    static defaultProps = {
        title: null,
        followers: 0,
        following: 0,
        assisted: 0,
        skillLevel: null,
        portfolio: null,
        dribble: null,
        behance: null,
        about: null,
    };

    render() {
        const baseClassName = this.constructor.name;
        const actionSectionClass = 'is-action-section';

        return (
            <div className={baseClassName}>
                <UserAvatar
                    name={this.props.name}
                    username={this.props.username}
                    imageUrl={this.props.imageUrl}
                    title={this.props.title}
                    size={LARGE_SIZE}
                    className={`${baseClassName}__avatar`}
                    noLinkOut
                />
                <section className={actionSectionClass} >
                    <button>+ Follow</button>
                </section>
                <section className={actionSectionClass} >
                    <button>+ Message</button>
                </section>
                <UserDetailsList {...this.props} />
            </div>
        );
    }
}
