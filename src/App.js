import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './router';

import GlobalStyle from './styles/generic';
import TaskListContextProvider from './context/TaskListContext';

import history from './services/history';

function App() {
    return (
        <>
            <Router history={history}>
                <TaskListContextProvider>
                    <GlobalStyle />
                    <Routes />
                </TaskListContextProvider>
            </Router>
        </>
    );
}

export default App;
