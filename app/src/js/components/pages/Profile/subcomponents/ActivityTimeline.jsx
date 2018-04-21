import React from 'react';
import PropTypes from 'prop-types';

const ActivityTimeline = props => (
    <h1>ActivityTimeline for {props.userId}</h1>
);

ActivityTimeline.propTypes = {
    userId: PropTypes.number.isRequired,
};

// ActivityTimeline.defaultProps = {

// };

export default ActivityTimeline;
