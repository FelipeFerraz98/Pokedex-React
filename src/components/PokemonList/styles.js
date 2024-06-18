import styled from 'styled-components';

export const Container = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    padding: 20px;
    @media screen and (max-width: 768px) {
        max-width: 90%;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }
`;
