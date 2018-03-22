import React from 'react';
import PropTypes from 'prop-types';

import './PostCard.styl';

const baseClassName = 'PostCard';

const buildClassNames = props => ([
    baseClassName,
    (props.timePosted || props.points) && `${baseClassName}--has-header`,
].filter(Boolean).join(' '));

const PostCard = props => (
    <article className={buildClassNames(props)} >
        {(props.timePosted || props.points) &&
            <div
                className={`${baseClassName}__header`}
                style={{ backgroundImage: `url(${props.imageUrl})` }}
            >
                {props.timePosted &&
                    <span className={`${baseClassName}__time`}>{props.timePosted}</span>
                }
                {props.points &&
                    <span className={`${baseClassName}__points`}>{props.points}</span>
                }
            </div>
        }
        <div className={`${baseClassName}__main`}>
            {props.userAvatar}
            <p className={`${baseClassName}__text`}>{props.text}</p>
            {props.category &&
                <span className={`${baseClassName}__category`}>{props.category}</span>
            }
        </div>
    </article>
);

PostCard.propTypes = {
    text: PropTypes.string.isRequired,
    userAvatar: PropTypes.node.isRequired,
    imageUrl: PropTypes.string,
    timePosted: PropTypes.string,
    points: PropTypes.string,
    category: PropTypes.string,
};

PostCard.defaultProps = {
    imageUrl: null, // need fallback??
    timePosted: null,
    points: null,
    category: null,
};

export default PostCard;
