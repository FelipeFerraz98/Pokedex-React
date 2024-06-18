import styled, { keyframes } from 'styled-components';

const bounceAnimation = keyframes`
  50% {
    transform: translateY(-18px);
    background-color: aqua;
  }
`;

export const LoaderContainer = styled.div`
  width: 60px;
  display: flex;
  justify-content: space-evenly;
`;

export const Ball = styled.li`
  list-style: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #fff;

  &:nth-child(1) {
    animation: ${bounceAnimation} 2.1s ease-in-out infinite;
  }

  &:nth-child(2) {
    animation: ${bounceAnimation} 2.1s ease-in-out 0.3s infinite;
  }

  &:nth-child(3) {
    animation: ${bounceAnimation} 2.1s ease-in-out 0.6s infinite;
  }
`;