import React from 'react';
import PropTypes from 'prop-types';

import UserAvatar, { MEDIUM_SIZE } from 'components/common/UserAvatar';

import './styles.styl';

const baseClassName = 'UserCard';

const UserCard = props => (
    <article className={baseClassName} >
        <UserAvatar
            name={props.name}
            imageUrl={props.imageUrl}
            title={props.title}
            size={MEDIUM_SIZE}
        />
        <div className={`${baseClassName}__button-wrapper`}>
            <button>+ Follow</button>
        </div>
    </article>
);

UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string,
};

UserCard.defaultProps = {
    title: null,
};

export default UserCard;
