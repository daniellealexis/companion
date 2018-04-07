import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import routes from 'constants/routes';

import './styles.styl';

export const SMALL_SIZE = 'small';
export const MEDIUM_SIZE = 'medium';
export const LARGE_SIZE = 'large';

export default class UserAvatar extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        title: PropTypes.string,
        onClick: PropTypes.func,
        size: PropTypes.oneOf([SMALL_SIZE, MEDIUM_SIZE, LARGE_SIZE]),
        showImageOnly: PropTypes.bool,
        className: PropTypes.string,
    };

    static defaultProps = {
        title: null,
        onClick: () => {},
        size: MEDIUM_SIZE,
        showImageOnly: false,
        className: '',
    };

    getNameTag() {
        const { size } = this.props;
        const sizeTagMap = {
            [SMALL_SIZE]: 'h6',
            [MEDIUM_SIZE]: 'h4',
            [LARGE_SIZE]: 'h1',
        };

        return sizeTagMap[size] || sizeTagMap[MEDIUM_SIZE];
    }

    handleAvatarClick = (event) => {
        if (this.props.onClick) {
            this.props.onClick(event);
        }
    };

    buildClassNames(props) {
        const baseClassName = this.constructor.name;

        return [
            baseClassName,
            props.className,
            props.size && `${baseClassName}--${props.size}`,
        ].filter(Boolean).join(' ');
    }

    render() {
        const baseClassName = this.constructor.name;
        const {
            imageUrl,
            name,
            title,
        } = this.props;
        const NameTag = this.getNameTag();

        return (
            <Link to={routes.userProfile(this.props)} >
                <div onClick={this.handleAvatarClick} className={this.buildClassNames(this.props)}>
                    <div
                        className={`${baseClassName}__image`}
                        style={{ backgroundImage: `url(${imageUrl})` }}
                    />
                    { !this.props.showImageOnly && name &&
                        <NameTag className={`${baseClassName}__name`}>{name}</NameTag>
                    }
                    { !this.props.showImageOnly && title &&
                        <p className={`${baseClassName}__title`}>{title}</p>
                    }
                </div>
            </Link>
        );
    }
}
