import React from 'react';
import PropTypes from 'prop-types';

import UserAvatar from 'components/common/UserAvatar';

import './styles.styl';

const baseClassName = 'QuestionCard';

const checkIfHasHeader = props => ((
    props.expireTime ||
    typeof props.points === 'number' ||
    props.imageUrl
));

const buildClassNames = props => ([
    baseClassName,
    checkIfHasHeader(props) && `${baseClassName}--has-header`,
].filter(Boolean).join(' '));

const formatPoints = points => (points === 0 ? points : `${points > 0 ? '+' : ''}${points}`);

const QuestionCard = props => (
    <article className={buildClassNames(props)} >
        {checkIfHasHeader(props) &&
            <div
                className={`${baseClassName}__header`}
            >
                <div
                    className={`${baseClassName}__header__image-container`}
                    style={{ backgroundImage: `url(${props.imageUrl})` }}
                />
                {props.expireTime &&
                    <span className={`${baseClassName}__time`}>{props.expireTime}</span>
                }
                {props.points &&
                    <span className={`${baseClassName}__points`}>{formatPoints(props.points)}</span>
                }
            </div>
        }
        <div className={`${baseClassName}__main`}>
            <UserAvatar {...props.user} />
            <p className={`${baseClassName}__text`}>{props.text}</p>
            {props.category &&
                <span className={`${baseClassName}__category`}>{props.category}</span>
            }
        </div>
    </article>
);

QuestionCard.propTypes = {
    text: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    expireTime: PropTypes.string,
    points: PropTypes.number,
    category: PropTypes.string,
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        title: PropTypes.string,
        imageUrl: PropTypes.string.isRequired,
    }).isRequired,
};

QuestionCard.defaultProps = {
    imageUrl: null, // need fallback??
    expireTime: null,
    points: 0,
    category: null,
};

export default QuestionCard;
