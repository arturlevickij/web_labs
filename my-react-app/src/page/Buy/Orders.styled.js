import styled from 'styled-components';

export const OrderConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 50px;
`;

export const ConfirmationHeader = styled.h2`
  color: #333;
`;

export const ConfirmationText = styled.p`
  color: #666;
  margin-bottom: 20px;
`;

export const VerticalLine = styled.hr`
  width: 100%;
  border: none;
  height: 2px;
  background-color: #e1e1e1;
`;
