import React, { useContext } from 'react';
import { useDrag } from 'react-dnd';
import { toast } from 'react-toastify';

import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import { TaskListContext } from '../../context/TaskListContext';
import { Content } from './styles';

const Task = ({ name, id }) => {
    const { removeTask } = useContext(TaskListContext);

    const [{ isDragging }, dragRef] = useDrag({
        item: { type: 'CARD' },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const remove = () => {
        removeTask(id);
        toast.error('😅 Tarefa excluída com sucesso!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <>
            <Content ref={dragRef}>
                <li>
                    <span>{name}</span>
                    <div className="box-actions">
                        <button
                            onClick={remove}
                            className="btn-delete"
                            type="button"
                        >
                            <MdDelete size="16" />
                        </button>
                    </div>
                </li>
            </Content>
        </>
    );
};

Task.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default Task;
