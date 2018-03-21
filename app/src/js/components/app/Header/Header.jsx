import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserAvatar from 'components/common/UserAvatar';
import SearchInput from 'components/common/SearchInput';

import './styles.styl';

export default class Header extends Component {
    static propTypes = {
        isLoggedIn: PropTypes.bool,
        userFirstName: PropTypes.string,
        userAvatar: PropTypes.string,
        onSearch: PropTypes.func,
    };

    static defaultProps = {
        isLoggedIn: true,
        userFirstName: 'Allan Revah',
        userAvatar: '',
        onSearch: null,
    };

    render() {
        const baseClassName = this.constructor.name;

        return (
            <header>
                <h1>Companion</h1>
                <div>
                    <SearchInput onSearch={this.props.onSearch} />
                </div>
                { this.props.isLoggedIn &&
                    <div className={`${baseClassName}__user-info`}>
                        <span>notifs</span>
                        <div>
                            <h6>{this.props.userFirstName}</h6>
                            <UserAvatar imageUrl={this.props.userAvatar} size="small" />
                        </div>
                    </div>
                }
                { !this.props.isLoggedIn &&
                    <React.Fragment>
                        <button>Log In</button>
                        <button>Sign up</button>
                    </React.Fragment>
                }
            </header>
        );
    }
}
