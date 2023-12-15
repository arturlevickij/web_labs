import styled, { keyframes } from 'styled-components';

const loaderAnimation = keyframes`
  0%,
  60%,
  100% {
    box-shadow: 0 0;
    height: 40px; 
    width: 40px; 
  }
  30% {
    box-shadow: 0 -20px;
    height: 50px; 
    width: 40px; 
  }
`;

export const LoadingStyled = styled.div`
  border-radius: 50%;
  width: 40px; 
  height: 80px; 
  animation-fill-mode: both;
  animation: ${loaderAnimation} 1.8s infinite ease-in-out;
  background: #ffffff;
  position: relative;
  margin: 0 auto;
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
