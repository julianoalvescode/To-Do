import styled from 'styled-components';

export const Content = styled.div`
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;

    .list-tasks {
        display: grid;
        gap: 10px;
        grid-template-columns: 1fr;
    }

    .list-image {
        display: flex;
        justify-content: center;

        img {
            height: 200px;
            margin-bottom: 10px;
        }
    }
`;
