import { styled, keyframes } from 'styled-components';
import { typeColorsForBackground, typeColorsForLabels } from '../typeColors';

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

export const BackgroundPokemon = styled.div`
    background-color: ${({ type }) => typeColorsForBackground[type] || '#777'};
    border-radius: 0.6em;
    padding: 20px;
    animation: ${fadeIn} 2.5s forwards;
`;

export const TypeBox = styled.div`
    margin: 10px;
    padding: 5px;
    text-align: center;
    background-color: ${({ type }) => typeColorsForLabels[type] || '#777'};
    border-radius: 0.6em;
`;

export const BackgroundPokedex = styled.div`
    background-color: #fff;
    border-radius: 0.6em;
    padding: 1.5em;
`;

export const Image = styled.img`
    @media (max-width: 768px) {
        max-width: 95%;
    }
`;

export const Container = styled.main`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 1.5em;
    animation: ${fadeIn} 2.5s forwards;
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
    cursor: pointer;
`;

export const SubTitle = styled.h2`
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    margin: 0px;
    animation: ${fadeIn} 2.5s forwards;
    color: #000;
    margin-bottom: 10px;
`;

export const TextContent = styled.p`
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    margin: 0px;
    animation: ${fadeIn} 2.5s forwards;
    color: #000;
    margin-bottom: 10px;
`;

export const TextContentLightAnimated = styled.p`
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 200;
    font-size: 25px;
    margin: 0px;
    animation: ${fadeIn} 2.5s forwards;
    color: #000;
`;

export const TextContentLight = styled.p`
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 200;
    font-size: 25px;
    margin: 0px;
    color: #000;
`;

export const Grid = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const GridContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 20px 0;
`;

export const BarWrapper = styled.div`
    width: 1.5px;
    height: 100px;
    background-color: #ddd;
    border-radius: 1.5em;
    animation: ${fadeIn} 2.5s forwards;
`;

export const GridType = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;
export const CopyMessage = styled.div`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    animation: ${fadeIn} 0.5s forwards;
`;