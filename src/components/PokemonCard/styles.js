import { styled, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { typeColorsForBackground } from '../typeColors';

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

export const Card = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ type }) => typeColorsForBackground[type] || '#777'};
    padding: 20px;
    margin: 10px;
    border-radius: 0.5em;
    color: white;
    text-decoration: none;
    text-align: center;
    transition: transform 0.2s;
    animation: ${fadeIn} 1.5s forwards;
    
    &:hover {
        transform: scale(1.05);
    }
`;

export const Title = styled.h2`
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    margin: 0px;
    padding: 0px;
    color: #fff;
`;

export const Sprite = styled.img`
    width: 100px;
    height: 100px;
`;

