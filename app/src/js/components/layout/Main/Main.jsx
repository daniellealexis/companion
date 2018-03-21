import React from 'react';
import PropTypes from 'prop-types';

import './styles.styl';

const Main = props => {
    const MainTag = props.tagName;

    return (
        <MainTag className={['Main', props.className].filter(Boolean).join(' ')}>
            {props.children}
        </MainTag>
    );
};

Main.propTypes = {
    children: PropTypes.node.isRequired,
    tagName: PropTypes.string,
    className: PropTypes.string,
};

Main.defaultProps = {
    tagName: 'main',
    className: '',
};

export default Main;
