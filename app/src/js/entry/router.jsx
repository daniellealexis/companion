import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Home from '../components/pages/Home';
import Profile from '../components/pages/Profile';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/u/:username" component={Profile} />
        </Switch>
    </BrowserRouter>
);

export default Router;
