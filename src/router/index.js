import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TaskList from '../components/TaskList';

export default function Router() {
    return (
        <Switch>
            <Route path="/" exact component={TaskList} />
        </Switch>
    );
}
