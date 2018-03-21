import React from 'react';
import { render } from 'react-dom';
import HomePage from 'components/pages/Home';

require('../../styles/main.styl');

render(<HomePage />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
    const NewHome = require('components/pages/Home').default;
    render(<NewHome />, document.getElementById('root'));
}
