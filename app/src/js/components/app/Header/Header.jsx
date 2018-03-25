import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserAvatar, { SMALL_SIZE } from 'components/common/UserAvatar';
import SearchInput from 'components/common/SearchInput';

import users from 'dummyData/users';
import { find } from 'utils/collections';

import './styles.styl';

// This will be a container to get logged-in user info and stuff

export default class Header extends Component {
    static propTypes = {
        isLoggedIn: PropTypes.bool,
        onSearch: PropTypes.func,
        user: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string.isRequired,
            title: PropTypes.string,
            imageUrl: PropTypes.string.isRequired,
        }),
    };

    static defaultProps = {
        isLoggedIn: true,
        onSearch: null,
        user: find(users, { id: 6 }),
    };

    render() {
        const baseClassName = this.constructor.name;
        const { user, isLoggedIn } = this.props;

        return (
            <header className={baseClassName} >
                <div className={`${baseClassName}__content-wrapper`}>
                    <h1>Companion</h1>
                    <div>
                        <SearchInput onSearch={this.props.onSearch} />
                    </div>
                    { isLoggedIn &&
                        <div className={`${baseClassName}__user-info`}>
                            <span>notifs</span>
                            <UserAvatar
                                className={`${baseClassName}__user-avatar`}
                                imageUrl={user.imageUrl}
                                name={user.name.split(' ')[0]}
                                size={SMALL_SIZE}
                            />
                        </div>
                    }
                    { !isLoggedIn &&
                        <React.Fragment>
                            <button>Log In</button>
                            <button>Sign up</button>
                        </React.Fragment>
                    }
                </div>
            </header>
        );
    }
}
