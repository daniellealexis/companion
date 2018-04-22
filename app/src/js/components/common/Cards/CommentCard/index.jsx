import React from 'react';
import PropTypes from 'prop-types';

import UserAvatar from 'components/common/UserAvatar';

import './styles.styl';

const baseClassName = 'CommentCard';

const CommentCard = props => (
    <article className={baseClassName}>
        <div className={`${baseClassName}__main`}>
            <UserAvatar {...props.user} />
            <p className={`${baseClassName}__text`}>{props.text}</p>
        </div>
    </article>
);

CommentCard.propTypes = {
    text: PropTypes.string.isRequired,
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        title: PropTypes.string,
        imageUrl: PropTypes.string.isRequired,
    }).isRequired,
};

export default CommentCard;
