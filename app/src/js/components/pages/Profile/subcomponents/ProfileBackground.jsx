import React from 'react';
import PropTypes from 'prop-types';

const baseClassName = 'ProfileBackground';

const ProfileBackground = props => (
    <div
        className={baseClassName}
        style={{
            backgroundImage: `url(${props.imageUrl})`,
        }}
    />
);

ProfileBackground.propTypes = {
    imageUrl: PropTypes.string.isRequired,
};

export default ProfileBackground;
