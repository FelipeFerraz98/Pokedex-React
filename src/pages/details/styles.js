import styled from 'styled-components';

export const Container = styled.main`
    margin: 0;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ddd;
    min-height: 100vh;

    @media (max-width: 768px) {
        min-height: 90vh;
        padding: 0;
        background-color: #fff;
    }
`;
