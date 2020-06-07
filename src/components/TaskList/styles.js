import styled from 'styled-components';

export const Content = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;

    ul {
        display: grid;
        gap: 10px;
        grid-template-columns: 1fr;
    }
`;
