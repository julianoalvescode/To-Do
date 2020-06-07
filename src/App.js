import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Router } from 'react-router-dom';
import Routes from './router';

import GlobalStyle from './styles/generic';
import TaskListContextProvider from './context/TaskListContext';

import history from './services/history';

function App() {
    return (
        <>
            <Router history={history}>
                <DndProvider backend={HTML5Backend}>
                    <TaskListContextProvider>
                        <GlobalStyle />
                        <Routes />
                    </TaskListContextProvider>
                </DndProvider>
            </Router>
        </>
    );
}

export default App;
