import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const SMALL_SIZE = 'small';
export const MEDIUM_SIZE = 'medium';
export const LARGE_SIZE = 'large';

export default class UserAvatar extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        title: PropTypes.string,
        onClick: PropTypes.func,
        size: PropTypes.oneOf([SMALL_SIZE, MEDIUM_SIZE, LARGE_SIZE]),
        showImageOnly: PropTypes.bool,
    };

    static defaultProps = {
        title: null,
        onClick: () => {},
        size: MEDIUM_SIZE,
        showImageOnly: false,
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

    render() {
        const baseClassName = this.constructor.name;
        const {
            imageUrl: backgroundImage,
            name,
            title,
        } = this.props;
        const NameTag = this.getNameTag();

        return (
            <div onClick={this.handleAvatarClick} className={baseClassName}>
                <div className={`${baseClassName}__image`} style={{ backgroundImage }} />
                { !this.props.showImageOnly && name &&
                    <NameTag className={`${baseClassName}__name`}>{name}</NameTag>
                }
                { !this.props.showImageOnly && title &&
                    <p className={`${baseClassName}__title`}>{title}</p>
                }
            </div>
        );
    }
}
