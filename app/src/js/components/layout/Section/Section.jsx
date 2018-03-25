import React from 'react';
import PropTypes from 'prop-types';

import './styles.styl';

export const THREE_GRID = 'three-grid';
export const FULL_WIDTH = 'full-width';
export const INHERIT = 'inherit';

const baseClassName = 'Section';

const Section = props => (
    <section className={[baseClassName, props.className].filter(Boolean).join(' ')} >
        {props.title && <h3>{props.title}</h3>}
        <div className={`${baseClassName}__content ${props.layout}`}>
            {props.children}
        </div>
    </section>
);

Section.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    title: PropTypes.string,
    layout: PropTypes.oneOf([THREE_GRID, FULL_WIDTH, INHERIT]),
};

Section.defaultProps = {
    className: '',
    title: null,
    layout: INHERIT,
};

export default Section;
