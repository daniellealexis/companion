import React from 'react';
import PropTypes from 'prop-types';

const PostTimeline = props => (
    <h1>PostTimeline for {props.userId}</h1>
);

PostTimeline.propTypes = {
    userId: PropTypes.number.isRequired,
};

// PostTimeline.defaultProps = {

// };

export default PostTimeline;
