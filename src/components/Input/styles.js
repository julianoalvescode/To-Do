import styled from 'styled-components';
import { Form, Input, Add } from '../../styles/components';

export const Content = styled.div`
    width: 280px;
    margin-bottom: 18px;

    form {
        ${Form}
    }

    input {
        ${Input}
    }

    .submit {
        ${Add}
    }

    span {
        color: red;
        margin-top: 8px;
    }

    .add-main {
        display: flex;
        justify-content: space-between;
    }
`;
