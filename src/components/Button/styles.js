import styled from 'styled-components';
import { typeColorsForLabels } from '../typeColors';

export const ButtonContainer = styled.button`
  font-family: 'Overpass';
  font-size: 16px;
  position: relative;
  margin: auto;
  cursor: pointer;
  padding: 1em 2.5em 1em 2.5em;
  border: none;
  border-radius: 0.5em;
  background: ${({ type }) => typeColorsForLabels[type] || '#007bff'};
  transition: all 0.1s linear;
  &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

export const TextContent = styled.p`
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    margin-top: 0px;
    height: 0px;
    color: #fff;
`;