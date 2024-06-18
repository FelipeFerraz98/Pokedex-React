import { styled, keyframes } from 'styled-components';


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const Container = styled.main`
    width: 100%;
    margin: 0;
    margin-top: 1em;
    text-align: center;
    @media screen and (max-width: 768px) { 
        max-width: 90%;
    }
`;

export const Title = styled.h1`
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    margin: 0px;
    padding: 0px;
    animation: ${fadeIn} 1.5s forwards;
    color: #000;
`;


export const ButtonBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 300px;
    animation: ${fadeIn} 1.5s forwards;
`;