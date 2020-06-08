import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from '../page/Main';

export default function Router() {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
        </Switch>
    );
}
