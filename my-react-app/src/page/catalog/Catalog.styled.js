import styled from 'styled-components';

export const StonesTypeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const PriceSection = styled.div`
  display: flex; 
  align-items: center;
  width: 75%;
  margin-left: 90px;
`;

export const VerticalLine = styled.hr`
  border-bottom: none;
  border-top: 2px solid #e1e1e1;
`;

export const catalogStyles = {
  buttonStyle: {
    borderRadius: "10px",
    background: "#000000",
    color: "#ffffff",
    borderColor: "#000000"
  },
  searchStyle: {
    borderRadius: "10px",
    backgroundColor: "#000000",
    color: "#ffffff",
  }
};

export const StyledError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15%;
  margin-top: 5%;
`

export const WhiteText = styled.span`
  color: #ffffff;
`;