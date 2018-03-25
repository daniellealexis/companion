import React from 'react';
import PropTypes from 'prop-types';

import UserAvatar from 'components/common/UserAvatar';

import './styles.styl';

const baseClassName = 'PostCard';

function buildClassNames(props) {
    return [
        baseClassName,
        (props.timePosted || props.points) && `${baseClassName}--has-header`,
    ].filter(Boolean).join(' ');
}

const PostCard = props => (
    <article className={buildClassNames(props)} >
        <div className={`${baseClassName}__main`}>
            <UserAvatar {...props.user} showImageOnly />
            <p className={`${baseClassName}__text`}>{props.user.name} is {props.text}</p>
            {props.category &&
                <span className={`${baseClassName}__category`}>{props.category}</span>
            }
        </div>
    </article>
);

PostCard.propTypes = {
    text: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    timePosted: PropTypes.string,
    points: PropTypes.string,
    category: PropTypes.string,
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        title: PropTypes.string,
        imageUrl: PropTypes.string.isRequired,
    }).isRequired,
};

PostCard.defaultProps = {
    imageUrl: null, // need fallback??
    timePosted: null,
    points: null,
    category: null,
};

export default PostCard;
