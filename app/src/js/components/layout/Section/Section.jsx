import React from 'react';
import PropTypes from 'prop-types';

import './styles.styl';

const baseClassName = 'Section';

const Section = props => (
    <section className={[baseClassName, props.className].filter(Boolean).join(' ')} >
        {props.title && <h3>{props.title}</h3>}
        <div className={`${baseClassName}__`}>
            {props.children}
        </div>
    </section>
);

Section.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    title: PropTypes.string,
};

Section.defaultProps = {
    className: '',
    title: null,
};

export default Section;
