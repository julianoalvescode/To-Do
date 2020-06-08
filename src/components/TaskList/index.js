import React, { useContext } from 'react';

import { Helmet } from 'react-helmet';
import Image from '../../assets/png/imagem.png';

import { TaskListContext } from '../../context/TaskListContext';
import { Content } from './styles';
import Input from '../Input';
import Task from '../Task';

const TaskList = () => {
    const { tasks } = useContext(TaskListContext);

    return (
        <>
            <Helmet>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <Content>
                <div className="list-image">
                    <img src={Image} alt="Imagem" />
                </div>
                <Input />
                <ul className="list-tasks">
                    {tasks.map((i) => (
                        <Task key={i.id} name={i.task} id={i.id} />
                    ))}
                </ul>
            </Content>
        </>
    );
};

export default TaskList;
