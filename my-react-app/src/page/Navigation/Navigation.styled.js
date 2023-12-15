import styled from 'styled-components';

export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #f2f2f2;
`;

export const DiamondImage = styled.img`
  width: 700px; /* Встановіть потрібну ширину */
  height: auto; /* Встановіть потрібну висоту або використовуйте auto */
`;

export const TextContainer = styled.div`
  margin-left: 120px; /* Відредагуйте відступи зліва за потреби */
`;

export const Title = styled.h2`
  font-size: 30px; /* Встановіть потрібний розмір шрифту */
  font-weight: bold;
  margin-bottom: 10px; /* Відредагуйте відступи знизу за потреби */
`;

export const Subtitle = styled.p`
  font-size: 16px; /* Встановіть потрібний розмір шрифту */
`;

export const StonesTypeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
  margin-bottom: 20px;
`;

export const StoneItem = styled.div`
  text-align: center;
  margin: 20px;
  border: 1px solid #333;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 300px;
`;

export const StoneImage = styled.img`
  width: 200px;
  height: 200px;
`;

export const StoneText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const StoneTitle = styled.h3`
  font-size: 20px;
  margin-top: 10px;
  line-height: 25px; /* Регулює висоту рядка тексту */
`;

export const StoneSubtitle = styled.p`
  font-size: 16px;
  line-height: 20px; /* Регулює висоту рядка тексту */
`;

export const ViewMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const ViewMoreButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #f2f2f2;
  border: 1px solid #333;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
`;

