import React, { useContext, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { MdAdd } from 'react-icons/md';

import * as yup from 'yup';
import { ErrorMessage, Formik, Form as FormikForm, Field } from 'formik';
import { TaskListContext } from '../../context/TaskListContext';
import { Content } from './styles';

const validations = yup.object().shape({
    task: yup
        .string()
        .min(2)
        .max(24, 'Número máximo de caracter excedido')
        .required('Campo vazio'),
});

const Input = () => {
    const { addTask, editTask, editItem } = useContext(TaskListContext);

    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = ({ task }) => {
        console.log(task);
        toast.success('😎 Tarefa adicionada!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        addTask(task);
    };

    return (
        <>
            <ToastContainer />
            <Content>
                <Formik
                    initialValues={{ task: '' }}
                    onSubmit={handleSubmit}
                    validationSchema={validations}
                >
                    <FormikForm className="form">
                        <div className="add-main">
                            <Field
                                name="task"
                                type="text"
                                placeholder="Add text"
                            />

                            <button className="submit" type="submit">
                                <MdAdd color="#fff" />
                            </button>
                        </div>
                        <ErrorMessage component="span" name="task" />
                    </FormikForm>
                </Formik>
            </Content>
        </>
    );
};

export default Input;
