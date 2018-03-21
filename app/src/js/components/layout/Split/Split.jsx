import React from 'react';
import PropTypes from 'prop-types';

import './styles.styl';

const Split = ({ children, className }) => (
    <div className={['Split', className].filter(Boolean).join(' ')}>
        {children}
    </div>
);

Split.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

Split.defaultProps = {
    className: '',
}

export default Split;
