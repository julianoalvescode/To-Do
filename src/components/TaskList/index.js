import React, { useContext } from 'react';
import { useDrag } from 'react-dnd';

import { Helmet } from 'react-helmet';
import { TaskListContext } from '../../context/TaskListContext';
import { Content } from './styles';
import Input from '../Input';
import Task from '../Task';

const TaskList = () => {
    const { tasks } = useContext(TaskListContext);

    const [{ isDragging }, dragRef] = useDrag({
        item: { type: 'CARD' },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <>
            <Helmet>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <Content>
                <Input />
                <ul>
                    {tasks.map((i) => (
                        <Task key={i.id} name={i.task} id={i.id} />
                    ))}
                </ul>
            </Content>
        </>
    );
};

export default TaskList;
