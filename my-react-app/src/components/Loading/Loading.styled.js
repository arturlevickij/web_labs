import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
  }
`;

const bounce1 = keyframes`
  0%, 100% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1);
  }
`;

export const Rectangle = styled.div`
  width: 20px;
  height: 50px;
  background-color: #000000;
  margin: 5px;
  animation: ${bounce} 1s infinite;
`;

export const Rectangle1 = styled.div`
  width: 20px;
  height: 50px;
  background-color: #000000;
  margin: 5px;
  animation: ${bounce1} 1s infinite;
`;

export const Rectangle2 = styled.div`
  width: 20px;
  height: 50px;
  background-color: #000000;
  margin: 5px;
  animation: ${bounce1} 1s infinite;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

