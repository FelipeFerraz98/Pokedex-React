import { styled, keyframes } from 'styled-components';
import { typeColorsForLabels } from '../typeColors';


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

export const BarContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
    animation: ${fadeIn} 2.5s forwards;
`;

export const BarLabelType = styled.div`
    width: 80px;
    text-align: right;
    margin-right: 10px;
`;

export const BarLabelValue = styled.div`
    width: 80px;
    text-align: left;
    margin-left: 10px;
`;

export const BarWrapper = styled.div`
    flex: 1;
    height: 10px;
    background-color: #ddd;
    border-radius: 10px;
    overflow: hidden;
    margin-right: 10px;
`;

export const TextContent = styled.p`
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    margin-top: 0px;
    height: 0px;
    color: #000;
    text-align: left;
    animation: ${fadeIn} 2.5s forwards;
`;

export const Bar = styled.div`
    height: 100%;
    background-color: ${({ type }) => typeColorsForLabels[type] || '#777'};
    width: ${({ value }) => Math.min(value, 100)}%;
`;