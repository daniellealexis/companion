import React from 'react';
import PropTypes from 'prop-types';

import './styles.styl';

const Sidebar = ({ children, className }) => (
    <aside className={['Sidebar', className].filter(Boolean).join(' ')} >
        {children}
    </aside>
);

Sidebar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

Sidebar.defaultProps = {
    children: null,
    className: '',
};

export default Sidebar;
