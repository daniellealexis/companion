import React from 'react';
import PropTypes from 'prop-types';

import { formatPoints } from 'utils/numberFormatting';
import { getRelativeDateFrom } from 'utils/dateFormatting';

const baseClassName = 'QuestionImageHeader';

const QuestionImageHeader = props => (
    <div
        className={baseClassName}
        style={{
            backgroundImage: `url(${props.imageUrl})`,
        }}
    >
        <div className={`${baseClassName}__content-wrapper`}>
            <div className={`${baseClassName}__top-content`}>
                <p className={`${baseClassName}__date`}>
                    {getRelativeDateFrom(props.createdAt)}
                </p>
                <p className={`${baseClassName}__points`}>
                    {props.points && formatPoints(props.points)}
                </p>
            </div>
            <div className={`${baseClassName}__bottom-content`}>
                <p className={`${baseClassName}__category`}>
                    {props.category}
                </p>
            </div>
        </div>
    </div>
);

QuestionImageHeader.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    points: PropTypes.number,
};

QuestionImageHeader.defaultProps = {
    points: 0,
};

export default QuestionImageHeader;
