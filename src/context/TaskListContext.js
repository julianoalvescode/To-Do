import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([
        { task: 'Read the book', id: 1 },
        { task: 'Wash the car', id: 2 },
        { task: 'Write some code', id: 3 },
    ]);

    const addTask = (title) => {
        setTasks([...tasks, { task: title, id: uuidv4() }]);
    };

    const removeTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <>
            <TaskListContext.Provider
                value={{
                    tasks,
                    addTask,
                    removeTask,
                }}
            >
                {children}
            </TaskListContext.Provider>
        </>
    );
};

TaskListContextProvider.propTypes = {
    children: PropTypes.shape([PropTypes.func, PropTypes.element]).isRequired,
};

export default TaskListContextProvider;
