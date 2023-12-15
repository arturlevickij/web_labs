import styled from 'styled-components';

export const CartStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  min-height: 45vh;
`;

export const ImageStyled = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;
`;

export const DataInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #f0f0f0;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
  min-width: 200px;
  flex-grow: 1;

  width: 300; 
`;

export const DataButtonStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  button {
    margin: 0 5px;
    border: 2px solid #000;
    background-color: #000;
    color: #fff;
  }
`;

export const VerticalLine = styled.hr`
  width: 100%;
  border: none;
  height: 2px;
  background-color: #e1e1e1;
`;

export const CartButtonStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const TotalPrice = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartSyte = styled.div`
  display: flex;
  flex-direction: column;
`;
