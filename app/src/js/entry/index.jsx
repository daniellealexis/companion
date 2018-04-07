import React from 'react';
import { render } from 'react-dom';

import Router from './router';

require('../../styles/main.styl');

render(<Router />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
    const NewRouter = require('./router').default;
    render(<NewRouter />, document.getElementById('root'));
}
