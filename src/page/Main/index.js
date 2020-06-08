import React, { useEffect } from 'react';
import TaskList from '../../components/TaskList';
import Footer from '../../components/Footer';

const Main = () => {
    useEffect(() => {
        console.log(
            '%c Tentando revisar meu código né',
            'font-size: 24px; font-weigth: bold;'
        );
        console.log(
            '%c Então pegue esse presente aí 😎',
            'font-size: 24px; font-weigth: bold;'
        );
        console.log(
            '%c aHR0cHM6Ly93d3cudW1ibGVyLmNvbS9ici9zZWphLWJlbS12aW5kbz91PWtveGc3MDhr',
            'font-size: 24px; font-weigth: bold;'
        );
    }, []);

    return (
        <>
            <TaskList />
            <Footer />
        </>
    );
};

export default Main;
