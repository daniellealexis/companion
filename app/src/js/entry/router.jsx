import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import routes from 'constants/routes';

import Home from '../components/pages/Home';
import Profile from '../components/pages/Profile';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={routes.home()} component={Home} />
            <Route
                path={routes.userProfile()}
                render={({ match }) => (
                    <Profile username={match.params.username} />
                )}
            />
        </Switch>
    </BrowserRouter>
);

export default Router;
