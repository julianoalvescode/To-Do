import { css } from 'styled-components';
import colors from './settings';

export const Task = css`
    display: flex;
    justify-content: space-between;
    width: 280px;
    background-color: ${colors.grey};
    padding: 12px 15px;
    border-radius: 5px;
    animation: task;
    animation-duration: 1s;

    @keyframes task {
        from {
            opacity: 0;
        }
        to {
            opatity: 1;
        }
    }
`;

export const Button = css`
    background: none;
    border: none;
    cursor: pointer;
    color: ${colors.button};
    transition: all 0.2s ease-in;

    &:hover {
        color: ${colors.primary};
    }
`;

export const Form = css`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
`;

export const Add = css`
    background-color: ${colors.primary};
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
    width: 80px;
    border: none;
    padding: 10px 6px;
    -webkit-box-shadow: 0px 0px 37px -10px rgba(0, 0, 0, 0.26);
    -moz-box-shadow: 0px 0px 37px -10px rgba(0, 0, 0, 0.26);
    box-shadow: 0px 0px 37px -10px rgba(0, 0, 0, 0.26);
`;

export const Input = css`
    background-color: ${colors.grey};
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    color: #fff;

    &::placeholder {
        color: #9999;
    }
`;

export const Title = css`
    color: ${colors.title};
    font-size: 16px;
`;
