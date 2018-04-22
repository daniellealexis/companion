import React from 'react';
import PropTypes from 'prop-types';

import TabG from 'grommet/components/Tab';

const baseClassName = 'Tab';

const buildClassNames = ({ className, active }) => ([
    baseClassName,
    className,
    active && `${baseClassName}--active`,
].filter(Boolean).join(' '));

const Tab = props => (
    <TabG
        {...props}
        title={props.title}
        className={buildClassNames(props)}
    >
        {props.children}
    </TabG>
);

Tab.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
    active: PropTypes.bool,
};

Tab.defaultProps = {
    className: '',
    children: null,
    active: false,
};

export default Tab;
