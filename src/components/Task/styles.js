import styled from 'styled-components';
import { Task, Button, Title } from '../../styles/components';

export const Content = styled.div`
    width: 100%;
    cursor: grab;
    position: relative;

    li {
        ${Task}
    }

    span {
        ${Title}
    }

    button {
        ${Button}
    }

    .box-actions {
        width: 40px;
        display: flex;
        justify-content: flex-end;
    }
`;
